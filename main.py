#!/usr/bin/env python3
"""
site_copier.py — recursive website downloader with headless Chrome + curl_cffi fallback.

Features:
  - Headless Chromium (Playwright) to fully render React/SPA pages
  - Waits for network idle so JS-rendered content is captured
  - Cookie injection: pass a Netscape cookies.txt file or JSON list
  - Falls back to curl_cffi for static resources (CSS, images, fonts, etc.)
  - Rewrites all asset/link URLs to relative local paths for offline use
"""

import argparse
import hashlib
import http.cookiejar
import json
import mimetypes
import os
import re
import sys
import time
import urllib.parse
from collections import deque
from pathlib import Path

from bs4 import BeautifulSoup
from curl_cffi import requests as cffi_requests
from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------

RESOURCE_TAGS = {
    "img":    ["src", "srcset"],
    "script": ["src"],
    "link":   ["href"],
    "source": ["src", "srcset"],
    "video":  ["src", "poster"],
    "audio":  ["src"],
    "track":  ["src"],
    "embed":  ["src"],
    "object": ["data"],
    "iframe": ["src"],
}

PAGE_EXTENSIONS = {"", ".html", ".htm", ".php", ".asp", ".aspx", ".jsp", ".cfm"}
CSS_URL_RE = re.compile(r'url\(\s*["\']?([^)"\'>\s]+)["\']?\s*\)', re.IGNORECASE)
CSS_IMPORT_RE = re.compile(r'@import\s+["\']([^"\']+)["\']', re.IGNORECASE)
JS_ROUTE_RE = re.compile(r"path:`([^`]+)`")
PATH_IN_TEXT_RE = re.compile(r"/(?:[a-z0-9][a-z0-9_-]*)(?:/(?:[a-z0-9][a-z0-9_-]*|:?[a-zA-Z_][a-zA-Z0-9_]*))*")
SKIP_JS_ROUTES = {"*", "/login", "/logout", "/register", "/forgot-password"}
API_PATH_PREFIX = "/dash/"

OFFLINE_FETCH_SHIM = """
(function() {
  const el = document.getElementById('offline-api-cache');
  const API_CACHE = el ? JSON.parse(el.textContent) : {};
  const origFetch = window.fetch;
  window.fetch = function(input, init) {
    const url = typeof input === 'string' ? input : input.url;
    let path;
    try { path = new URL(url, location.href).pathname; } catch (e) { return origFetch.apply(this, arguments); }
    const parsed = new URL(url, location.href);
    const route = parsed.search ? parsed.pathname + parsed.search : parsed.pathname;
    const method = ((init && init.method) || 'GET').toUpperCase();
    const key = method + ' ' + route;
    if (Object.prototype.hasOwnProperty.call(API_CACHE, key)) {
      const body = API_CACHE[key];
      return Promise.resolve(new Response(
        body === null ? '' : JSON.stringify(body),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      ));
    }
    return origFetch.apply(this, arguments);
  };
})();
"""

# ---------------------------------------------------------------------------
# Cookie loading
# ---------------------------------------------------------------------------

def _truthy(value) -> bool:
    return str(value).lower() in ("true", "1", "yes")


def normalize_cookie(raw: dict) -> dict | None:
    """Convert Playwright, Firefox export, or similar formats to one cookie dict."""
    name = raw.get("name") or raw.get("Name raw") or raw.get("Name")
    value = raw.get("value")
    if value is None:
        value = raw.get("Content raw") or raw.get("Content") or raw.get("Value")
    if not name or value is None:
        return None

    domain = raw.get("domain") or raw.get("Host raw") or raw.get("Host")
    if domain and "://" in domain:
        domain = urllib.parse.urlparse(domain).hostname or domain
    if domain:
        domain = domain.rstrip("/").lstrip(".")

    path = raw.get("path") or raw.get("Path raw") or raw.get("Path") or "/"

    if "secure" in raw:
        secure = bool(raw["secure"])
    elif "Send for raw" in raw:
        secure = _truthy(raw["Send for raw"])
    else:
        secure = False

    if "httpOnly" in raw:
        http_only = bool(raw["httpOnly"])
    elif "HTTP only raw" in raw:
        http_only = _truthy(raw["HTTP only raw"])
    else:
        http_only = False

    cookie = {
        "name": name,
        "value": value,
        "path": path,
        "secure": secure,
        "httpOnly": http_only,
    }
    if domain:
        cookie["domain"] = domain
    return cookie


def _normalize_cookies(data: list[dict]) -> list[dict]:
    cookies = []
    for item in data:
        if not isinstance(item, dict):
            continue
        cookie = normalize_cookie(item)
        if cookie:
            cookies.append(cookie)
    return cookies


def load_cookies(cookie_source: str) -> list[dict]:
    """
    Accept either:
      - A Netscape cookies.txt file (wget/curl format)
      - A JSON file containing a list of cookie dicts (Playwright or Firefox export)
      - A JSON string directly
    Returns a list of Playwright-compatible cookie dicts.
    """
    if not cookie_source:
        return []

    # try as a file path first
    path = Path(cookie_source)
    if path.exists():
        text = path.read_text(encoding="utf-8", errors="replace")
    else:
        text = cookie_source  # treat as raw JSON string

    # try JSON
    try:
        data = json.loads(text)
        if isinstance(data, list):
            return _normalize_cookies(data)
        if isinstance(data, dict):
            return _normalize_cookies([data])
    except json.JSONDecodeError:
        pass

    # try Netscape cookies.txt
    cookies = []
    for line in text.splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        parts = line.split("\t")
        if len(parts) < 7:
            continue
        domain, _, path_val, secure, expires, name, value = parts[:7]
        cookies.append({
            "name": name,
            "value": value,
            "domain": domain.lstrip("."),
            "path": path_val,
            "secure": secure.upper() == "TRUE",
            "httpOnly": False,
        })

    if not cookies:
        print("[WARN] Could not parse cookies from the provided source.", file=sys.stderr)

    return cookies


def cookies_for_cffi(cookies: list[dict]) -> dict:
    """Convert Playwright cookie dicts to a simple name->value dict for curl_cffi."""
    return {
        c["name"]: c["value"]
        for c in cookies
        if c.get("name") and c.get("value") is not None
    }

# ---------------------------------------------------------------------------
# URL / path helpers
# ---------------------------------------------------------------------------

def is_page_url(url: str, root_netloc: str) -> bool:
    parsed = urllib.parse.urlparse(url)
    if parsed.netloc and parsed.netloc != root_netloc:
        return False
    _, ext = os.path.splitext(parsed.path)
    return ext.lower() in PAGE_EXTENSIONS


def enqueue_page_url(url: str, root_netloc: str, page_queue: deque, page_seen: set) -> bool:
    abs_url = normalise(url, url) if url.startswith(("http://", "https://")) else None
    if not abs_url:
        return False
    parsed = urllib.parse.urlparse(abs_url)
    if parsed.netloc != root_netloc or not is_page_url(abs_url, root_netloc):
        return False
    if abs_url in page_seen:
        return False
    page_seen.add(abs_url)
    page_queue.append(abs_url)
    return True


def extract_paths_from_json(data) -> set[str]:
    found: set[str] = set()

    def walk(obj):
        if isinstance(obj, dict):
            obj_id = obj.get("id") or obj.get("_id") or obj.get("token_id")
            if obj_id is not None:
                if obj.get("email") or obj.get("user_email"):
                    found.add(f"/inbox/{obj_id}")
                if obj.get("slug"):
                    found.add(f"/lures/{obj_id}")
            for value in obj.values():
                walk(value)
        elif isinstance(obj, list):
            for item in obj:
                walk(item)
        elif isinstance(obj, str):
            if obj.startswith("/") and " " not in obj and len(obj) < 200:
                found.add(obj.split("?")[0].split("#")[0])
            for match in PATH_IN_TEXT_RE.finditer(obj):
                found.add(match.group(0))

    walk(data)
    return found


def extract_js_routes(text: str, base_url: str, root_netloc: str) -> set[str]:
    routes: set[str] = set()
    for match in JS_ROUTE_RE.finditer(text):
        path = match.group(1)
        if path in SKIP_JS_ROUTES:
            continue
        abs_url = urllib.parse.urljoin(base_url, path)
        if is_page_url(abs_url, root_netloc):
            routes.add(abs_url)
    return routes


def dismiss_overlays(page) -> None:
    for selector in (
        'button:has-text("Skip")',
        'button:has-text("Close")',
        '[aria-label="Close"]',
    ):
        try:
            button = page.locator(selector).first
            if button.is_visible(timeout=300):
                button.click(timeout=1000)
                page.wait_for_timeout(200)
        except Exception:
            pass


def discover_dom_links(page, root_netloc: str) -> set[str]:
    hrefs = page.evaluate("""() => {
        const out = new Set();
        const add = (href) => {
            if (!href) return;
            try { out.add(new URL(href, location.href).href.split('#')[0]); } catch {}
        };
        document.querySelectorAll('a[href]').forEach((el) => add(el.getAttribute('href')));
        document.querySelectorAll('[data-href], [data-url], [data-link]').forEach((el) => {
            add(el.getAttribute('data-href') || el.getAttribute('data-url') || el.getAttribute('data-link'));
        });
        return [...out];
    }""")
    return {u for u in hrefs if is_page_url(u, root_netloc)}


def discover_interactive_links(page, root_netloc: str, opts: dict) -> set[str]:
    """Click SPA rows/buttons that navigate without href attributes."""
    discovered: set[str] = set()
    start_url = page.url.split("#")[0]
    max_clicks = opts.get("max_interactions", 25)
    clicks = 0

    def try_click(locator, label: str) -> None:
        nonlocal clicks
        if clicks >= max_clicks:
            return
        try:
            before = page.url.split("#")[0]
            locator.click(timeout=2000)
            page.wait_for_timeout(800)
            try:
                page.wait_for_load_state("networkidle", timeout=3000)
            except PWTimeout:
                pass
            after = page.url.split("#")[0]
            if after != before and is_page_url(after, root_netloc):
                if after not in discovered:
                    discovered.add(after)
                    print(f"  [DISCOVER] {after} ({label})")
            page.goto(start_url, wait_until="domcontentloaded", timeout=opts["timeout"] * 1000)
            try:
                page.wait_for_load_state("networkidle", timeout=opts["idle_timeout"] * 1000)
            except PWTimeout:
                pass
            dismiss_overlays(page)
            clicks += 1
        except Exception:
            pass

    try:
        rows = page.locator("tbody tr")
        for i in range(min(rows.count(), max_clicks)):
            row = rows.nth(i)
            try:
                if not row.is_visible(timeout=500):
                    continue
                if row.evaluate("el => getComputedStyle(el).cursor") != "pointer":
                    continue
                try_click(row, "row")
            except Exception:
                continue
    except Exception:
        pass

    try:
        buttons = page.locator('button:has-text("Inbox")')
        for i in range(min(buttons.count(), max(0, max_clicks - clicks))):
            try_click(buttons.nth(i), "inbox-button")
    except Exception:
        pass

    return discovered


def discover_spa_links(page, final_url: str, root_netloc: str,
                       network_paths: set[str], opts: dict) -> set[str]:
    urls = discover_dom_links(page, root_netloc)
    urls.update(discover_interactive_links(page, root_netloc, opts))

    base = f"{urllib.parse.urlparse(final_url).scheme}://{root_netloc}"
    for path in network_paths:
        if path.startswith("/") and not path.startswith("//"):
            abs_url = urllib.parse.urljoin(base, path)
            if is_page_url(abs_url, root_netloc):
                urls.add(abs_url.split("#")[0])
    return urls


def normalise(url: str, base: str) -> str | None:
    url = url.strip()
    if not url or url.startswith(("data:", "javascript:", "mailto:", "blob:", "#")):
        return None
    joined = urllib.parse.urljoin(base, url).split("#")[0]
    # strip trailing slash only for non-root paths
    p = urllib.parse.urlparse(joined)
    if p.path not in ("", "/"):
        joined = joined.rstrip("/")
    return joined or None


def url_to_local_path(url: str, root_url: str, output_dir: Path) -> Path:
    parsed = urllib.parse.urlparse(url)
    root_parsed = urllib.parse.urlparse(root_url)
    path_part = parsed.path.lstrip("/")
    is_external = bool(parsed.netloc and parsed.netloc != root_parsed.netloc)

    if not path_part:
        if is_external:
            return output_dir / "_external" / parsed.netloc / "index.html"
        return output_dir / "index.html"

    _, ext = os.path.splitext(path_part)
    if not ext:
        path_part = path_part.rstrip("/") + "/index.html"

    if is_external:
        path_part = os.path.join("_external", parsed.netloc, path_part)

    if parsed.query:
        q_hash = hashlib.md5(parsed.query.encode()).hexdigest()[:8]
        base, ext = os.path.splitext(path_part)
        path_part = f"{base}_{q_hash}{ext}"

    return output_dir / path_part


def local_target_path(abs_url: str, start_url: str, output_dir: Path,
                      fetched: dict, root_netloc: str) -> Path | None:
    parsed = urllib.parse.urlparse(abs_url)
    if parsed.scheme not in ("http", "https", ""):
        return None
    if parsed.netloc and parsed.netloc != root_netloc:
        return url_to_local_path(abs_url, start_url, output_dir)
    return fetched.get(abs_url) or url_to_local_path(abs_url, start_url, output_dir)


def to_relative_url(abs_url: str, referer_path: Path, start_url: str,
                    output_dir: Path, fetched: dict, root_netloc: str) -> str | None:
    parsed = urllib.parse.urlparse(abs_url)
    if parsed.netloc and parsed.netloc != root_netloc:
        if abs_url not in fetched:
            return None
    target = local_target_path(abs_url, start_url, output_dir, fetched, root_netloc)
    if target is None:
        return None
    return Path(os.path.relpath(target, referer_path.parent)).as_posix()

# ---------------------------------------------------------------------------
# CSS asset rewriting
# ---------------------------------------------------------------------------

def rewrite_css_urls(css_text: str, css_url: str, root_url: str,
                     output_dir: Path, fetched: dict, css_local_path: Path,
                     root_netloc: str) -> tuple[str, list[str]]:
    discovered = []

    def replace_url(match):
        raw = match.group(1).strip().strip("'\"")
        abs_url = normalise(raw, css_url)
        if not abs_url:
            return match.group(0)
        discovered.append(abs_url)
        rel = to_relative_url(abs_url, css_local_path, root_url, output_dir, fetched, root_netloc)
        if not rel:
            return match.group(0)
        return f"url('{rel}')"

    def replace_import(match):
        raw = match.group(1).strip()
        abs_url = normalise(raw, css_url)
        if not abs_url:
            return match.group(0)
        discovered.append(abs_url)
        rel = to_relative_url(abs_url, css_local_path, root_url, output_dir, fetched, root_netloc)
        if not rel:
            return match.group(0)
        return f"@import '{rel}'"

    new_css = CSS_URL_RE.sub(replace_url, css_text)
    new_css = CSS_IMPORT_RE.sub(replace_import, new_css)
    return new_css, discovered

# ---------------------------------------------------------------------------
# Playwright page renderer
# ---------------------------------------------------------------------------

def render_page(page, url: str, cookies: list[dict], opts: dict) -> tuple[str, str] | None:
    """
    Navigate to url with Playwright, wait for the page to settle,
    return (html_content, final_url) or None on failure.
    """
    try:
        # inject cookies before navigation
        if cookies:
            page.context.add_cookies(cookies)

        response = page.goto(url, wait_until="domcontentloaded", timeout=opts["timeout"] * 1000)
        if response and response.status >= 400:
            print(f"  [HTTP {response.status}] {url}", file=sys.stderr)
            return None

        # wait for network to go quiet (React hydration, lazy loads, etc.)
        try:
            page.wait_for_load_state("networkidle", timeout=opts["idle_timeout"] * 1000)
        except PWTimeout:
            pass  # networkidle timeout is non-fatal; take what we have

        # extra settle time for heavy SPAs
        if opts["extra_wait"]:
            page.wait_for_timeout(opts["extra_wait"] * 1000)

        dismiss_overlays(page)

        html = page.content()
        final_url = page.url
        return html, final_url

    except Exception as exc:
        print(f"  [ERR] {url}: {exc}", file=sys.stderr)
        return None

# ---------------------------------------------------------------------------
# curl_cffi resource fetcher
# ---------------------------------------------------------------------------

def fetch_resource(session, url: str, opts: dict) -> tuple[bytes, str, str] | None:
    try:
        r = session.get(url, timeout=opts["timeout"], allow_redirects=True,
                        impersonate=opts["impersonate"])
        if r.status_code >= 400:
            print(f"  [HTTP {r.status_code}] {url}", file=sys.stderr)
            return None
        ct = r.headers.get("content-type", "")
        return r.content, ct, str(r.url)
    except Exception as exc:
        print(f"  [ERR] {url}: {exc}", file=sys.stderr)
        return None

# ---------------------------------------------------------------------------
# HTML rewriter
# ---------------------------------------------------------------------------

def rewrite_html(soup: BeautifulSoup, local_path: Path, final_url: str,
                 start_url: str, output_dir: Path, fetched: dict,
                 page_queue: deque, page_seen: set,
                 resource_queue: deque, resource_seen: set,
                 root_parsed) -> BeautifulSoup:
    """
    Scan soup for assets and links; enqueue new ones; rewrite known ones to relative paths.
    """
    def enqueue_resource(url):
        if url and url not in resource_seen and url not in fetched:
            resource_seen.add(url)
            resource_queue.append(url)

    def enqueue_page(url):
        enqueue_page_url(url, root_parsed.netloc, page_queue, page_seen)

    def rewrite_attr(tag, attr: str, abs_url: str) -> None:
        rel = to_relative_url(
            abs_url, local_path, start_url, output_dir, fetched, root_parsed.netloc
        )
        if rel:
            tag[attr] = rel

    # collect resources from tags
    for tag_name, attrs in RESOURCE_TAGS.items():
        for tag in soup.find_all(tag_name):
            for attr in attrs:
                val = tag.get(attr, "")
                if not val:
                    continue
                if attr == "srcset":
                    new_parts = []
                    for part in val.split(","):
                        tokens = part.strip().split()
                        if not tokens:
                            continue
                        abs_url = normalise(tokens[0], final_url)
                        if abs_url:
                            enqueue_resource(abs_url)
                            rel = to_relative_url(
                                abs_url, local_path, start_url, output_dir,
                                fetched, root_parsed.netloc
                            )
                            if rel:
                                tokens[0] = rel
                        new_parts.append(" ".join(tokens))
                    tag[attr] = ", ".join(new_parts)
                else:
                    abs_url = normalise(val, final_url)
                    if not abs_url:
                        continue
                    if tag_name == "link":
                        rel_attr = tag.get("rel", [])
                        rel_str = " ".join(rel_attr).lower() if isinstance(rel_attr, list) else str(rel_attr).lower()
                        if any(k in rel_str for k in ("stylesheet", "preload", "font", "icon", "manifest")):
                            enqueue_resource(abs_url)
                        elif any(k in rel_str for k in ("canonical", "alternate", "next", "prev")):
                            pass
                        else:
                            enqueue_resource(abs_url)
                    else:
                        enqueue_resource(abs_url)

                    rewrite_attr(tag, attr, abs_url)

    # <a href> — pages vs resources
    for a in soup.find_all("a", href=True):
        abs_url = normalise(a["href"], final_url)
        if not abs_url:
            continue
        p = urllib.parse.urlparse(abs_url)
        _, ext = os.path.splitext(p.path)
        if p.netloc == root_parsed.netloc:
            if ext.lower() in PAGE_EXTENSIONS:
                enqueue_page(abs_url)
            else:
                enqueue_resource(abs_url)
        else:
            enqueue_resource(abs_url)

        rewrite_attr(a, "href", abs_url)

    # inline <style>
    for style_tag in soup.find_all("style"):
        css = style_tag.string or ""
        new_css, extra_urls = rewrite_css_urls(
            css, final_url, start_url, output_dir, fetched, local_path, root_parsed.netloc
        )
        for u in extra_urls:
            enqueue_resource(u)
        style_tag.string = new_css

    return soup


def api_cache_key(method: str, url: str) -> str | None:
    parsed = urllib.parse.urlparse(url)
    if not parsed.path.startswith(API_PATH_PREFIX):
        return None
    route = parsed.path + (f"?{parsed.query}" if parsed.query else "")
    return f"{method.upper()} {route}"


def capture_api_response(api_cache: dict, method: str, url: str, body) -> None:
    key = api_cache_key(method, url)
    if key is not None:
        api_cache[key] = body


def save_api_cache(output_dir: Path, api_cache: dict) -> Path:
    api_dir = output_dir / "_api"
    api_dir.mkdir(parents=True, exist_ok=True)
    cache_path = api_dir / "cache.json"
    cache_path.write_text(json.dumps(api_cache, indent=2), encoding="utf-8")
    return cache_path


def inject_offline_shim(soup: BeautifulSoup, api_cache: dict) -> None:
    """Patch fetch() so captured /dash/* API responses work on static hosts."""
    if not api_cache:
        return
    head = soup.find("head")
    if not head:
        return

    for tag in head.find_all("script", id="offline-api-cache"):
        tag.decompose()
    for tag in head.find_all("script", attrs={"data-offline-shim": True}):
        tag.decompose()

    data_tag = soup.new_tag("script", id="offline-api-cache", type="application/json")
    data_tag.string = json.dumps(api_cache)
    shim = soup.new_tag("script", attrs={"data-offline-shim": True})
    shim.string = OFFLINE_FETCH_SHIM

    first_script = head.find("script")
    if first_script:
        first_script.insert_before(shim)
        shim.insert_before(data_tag)
    else:
        head.append(data_tag)
        head.append(shim)


def inject_offline_shim_into_dir(output_dir: Path, api_cache: dict) -> None:
    if not api_cache:
        return
    for html_file in output_dir.rglob("*.html"):
        soup = BeautifulSoup(html_file.read_text(encoding="utf-8", errors="replace"), "html.parser")
        inject_offline_shim(soup, api_cache)
        html_file.write_bytes(soup.encode("utf-8"))


def prefetch_api_endpoints(session, start_url: str, api_cache: dict, opts: dict) -> None:
    """Fetch any missing /dash/* endpoints directly with crawl cookies."""
    root = urllib.parse.urlparse(start_url).netloc
    base = f"{urllib.parse.urlparse(start_url).scheme}://{root}"
    seeds = sorted({key.split(" ", 1)[1] for key in api_cache if " " in key})
    seeds.extend(["/dash/me", "/dash/branding", "/dash/tokens"])
    for route in dict.fromkeys(seeds):
        key = f"GET {route}"
        if key in api_cache:
            continue
        url = urllib.parse.urljoin(base, route)
        result = fetch_resource(session, url, opts)
        if not result:
            continue
        content, ct, final_url = result
        if "json" not in ct:
            continue
        try:
            api_cache[key] = json.loads(content.decode("utf-8"))
            print(f"  [API] {key}")
        except json.JSONDecodeError:
            pass


def finalize_html_links(output_dir: Path, fetched: dict, start_url: str, root_netloc: str):
    """Re-rewrite saved HTML after all resources are on disk."""
    for html_file in output_dir.rglob("*.html"):
        soup = BeautifulSoup(html_file.read_text(encoding="utf-8", errors="replace"), "html.parser")
        changed = False

        for tag_name, attrs in RESOURCE_TAGS.items():
            for tag in soup.find_all(tag_name):
                for attr in attrs:
                    val = tag.get(attr, "")
                    if not val or val.startswith(("data:", "javascript:", "#")):
                        continue
                    if val.startswith(("http://", "https://", "/")):
                        abs_url = normalise(val, start_url)
                        if not abs_url:
                            continue
                        rel = to_relative_url(
                            abs_url, html_file, start_url, output_dir, fetched, root_netloc
                        )
                        if rel and rel != val:
                            tag[attr] = rel
                            changed = True

        for a in soup.find_all("a", href=True):
            val = a["href"]
            if val.startswith(("http://", "https://", "/")):
                abs_url = normalise(val, start_url)
                if not abs_url:
                    continue
                rel = to_relative_url(
                    abs_url, html_file, start_url, output_dir, fetched, root_netloc
                )
                if rel and rel != val:
                    a["href"] = rel
                    changed = True

        if changed:
            html_file.write_bytes(soup.encode("utf-8"))

def prefetch_js_routes(session, resource_queue: deque, resource_seen: set,
                       fetched: dict, start_url: str, root_netloc: str,
                       page_queue: deque, page_seen: set, opts: dict) -> int:
    """Fetch queued JS bundles early so SPA routes can be crawled before browser closes."""
    added = 0
    for url in list(resource_queue):
        if not url.lower().endswith(".js"):
            continue
        if url in fetched:
            continue
        result = fetch_resource(session, url, opts)
        if not result:
            continue
        content, ct, final_url = result
        try:
            js_text = content.decode("utf-8", errors="replace")
            for route in extract_js_routes(js_text, start_url, root_netloc):
                if enqueue_page_url(route, root_netloc, page_queue, page_seen):
                    print(f"  [ROUTE] {route}")
                    added += 1
        except Exception:
            pass
    return added


# ---------------------------------------------------------------------------
# Main crawl
# ---------------------------------------------------------------------------

def crawl(start_url: str, output_dir: Path, cookies: list[dict], opts: dict):
    root_parsed = urllib.parse.urlparse(start_url)

    cffi_cookies = cookies_for_cffi(cookies)
    session = cffi_requests.Session()
    session.headers.update({"Accept-Language": "en-US,en;q=0.9"})
    if cffi_cookies:
        session.cookies.update(cffi_cookies)

    fetched: dict[str, Path] = {}
    page_queue: deque[str] = deque([start_url])
    page_seen: set[str] = {start_url}
    resource_queue: deque[str] = deque()
    resource_seen: set[str] = set()

    total_pages = 0
    total_resources = 0
    api_cache: dict[str, object] = {}

    with sync_playwright() as pw:
        browser = pw.chromium.launch(
            headless=True,
            args=[
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage",
                "--disable-gpu",
                "--disable-blink-features=AutomationControlled",
            ],
        )
        context = browser.new_context(
            user_agent=(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            ),
            viewport={"width": 1280, "height": 900},
            java_script_enabled=True,
            ignore_https_errors=True,
        )

        if cookies:
            context.add_cookies(cookies)

        page = context.new_page()
        network_paths: set[str] = set()

        def on_response(response):
            try:
                if response.request.resource_type not in ("xhr", "fetch"):
                    return
                ct = response.headers.get("content-type", "")
                if "json" not in ct:
                    return
                body = response.json()
                network_paths.update(extract_paths_from_json(body))
                if response.ok:
                    capture_api_response(
                        api_cache, response.request.method, response.url, body
                    )
            except Exception:
                pass

        page.on("response", on_response)

        # stealth: remove webdriver navigator flag
        page.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
            window.chrome = { runtime: {} };
        """)

        # --- page crawl loop (re-run when JS bundles reveal more routes) ---
        while True:
            while page_queue:
                url = page_queue.popleft()
                print(f"[PAGE] {url}")

                network_paths.clear()
                result = render_page(page, url, cookies, opts)
                if not result:
                    continue

                html, final_url = result
                total_pages += 1

                for discovered in discover_spa_links(
                    page, final_url, root_parsed.netloc, network_paths, opts
                ):
                    if enqueue_page_url(discovered, root_parsed.netloc, page_queue, page_seen):
                        print(f"  [QUEUE] {discovered}")

                local_path = url_to_local_path(url, start_url, output_dir)
                fetched[url] = local_path
                if final_url != url:
                    fetched[final_url] = local_path

                soup = BeautifulSoup(html, "html.parser")
                soup = rewrite_html(
                    soup, local_path, final_url, start_url, output_dir, fetched,
                    page_queue, page_seen, resource_queue, resource_seen, root_parsed
                )

                local_path.parent.mkdir(parents=True, exist_ok=True)
                local_path.write_bytes(soup.encode("utf-8"))

                if opts["delay"]:
                    time.sleep(opts["delay"])

            new_routes = prefetch_js_routes(
                session, resource_queue, resource_seen, fetched, start_url,
                root_parsed.netloc, page_queue, page_seen, opts
            )
            if not new_routes:
                break

        browser.close()

    # --- resource download loop (curl_cffi) ---
    print(f"\nDownloading {len(resource_queue)} resources...\n")

    while resource_queue:
        url = resource_queue.popleft()
        if url in fetched:
            continue

        print(f"  [RES] {url}")
        result = fetch_resource(session, url, opts)
        if not result:
            continue

        content, ct, final_url = result
        total_resources += 1

        local_path = url_to_local_path(url, start_url, output_dir)
        fetched[url] = local_path
        fetched[final_url] = local_path

        # scan CSS for more assets
        if "text/css" in ct or url.lower().endswith(".css"):
            try:
                css_text = content.decode("utf-8", errors="replace")
                new_css, extra_urls = rewrite_css_urls(
                    css_text, final_url, start_url, output_dir, fetched,
                    local_path, root_parsed.netloc
                )
                for u in extra_urls:
                    if u not in resource_seen and u not in fetched:
                        resource_seen.add(u)
                        resource_queue.append(u)
                content = new_css.encode("utf-8")
            except Exception:
                pass

        local_path.parent.mkdir(parents=True, exist_ok=True)
        local_path.write_bytes(content)

        if opts["delay"]:
            time.sleep(opts["delay"] * 0.2)  # lighter delay for resources

    finalize_html_links(output_dir, fetched, start_url, root_parsed.netloc)

    print(f"\nCaching API responses for offline use...")
    prefetch_api_endpoints(session, start_url, api_cache, opts)
    if api_cache:
        cache_path = save_api_cache(output_dir, api_cache)
        inject_offline_shim_into_dir(output_dir, api_cache)
        print(f"  API cache: {len(api_cache)} endpoints -> {cache_path}")
    else:
        print("  [WARN] No /dash/* API responses captured; offline app will redirect to /login.", file=sys.stderr)

    print(f"\nDone.")
    print(f"  Pages:     {total_pages}")
    print(f"  Resources: {total_resources}")
    print(f"  API:       {len(api_cache)}")
    print(f"  Output:    {output_dir.resolve()}")

# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Recursively copy a website (including React SPAs) using headless Chrome + curl_cffi.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Cookie formats accepted (--cookies):
  - Path to a Netscape cookies.txt file (wget/curl --cookie-jar format)
  - Path to a JSON file: Playwright {name, value, domain, ...} or Firefox export
  - Raw JSON string on the command line

Examples:
  python site_copier.py https://app.example.com
  python site_copier.py https://app.example.com --cookies cookies.txt
  python site_copier.py https://app.example.com --cookies cookies.json --delay 1
  python site_copier.py https://app.example.com --extra-wait 3 --idle-timeout 10
        """
    )
    parser.add_argument("url", help="Starting URL")
    parser.add_argument("-o", "--output", default=None, help="Output directory (default: domain name)")
    parser.add_argument("--cookies", default=None, metavar="FILE_OR_JSON",
                        help="Cookies to inject (Netscape .txt, JSON file, or raw JSON)")
    parser.add_argument("--delay", type=float, default=0.5,
                        help="Seconds between page navigations (default: 0.5)")
    parser.add_argument("--timeout", type=int, default=30,
                        help="Page navigation timeout in seconds (default: 30)")
    parser.add_argument("--idle-timeout", type=int, default=8,
                        help="Seconds to wait for networkidle after load (default: 8)")
    parser.add_argument("--extra-wait", type=float, default=0,
                        help="Extra seconds to wait after networkidle for heavy SPAs (default: 0)")
    parser.add_argument("--impersonate", default="chrome110",
                        help="curl_cffi browser profile for resource downloads (default: chrome110)")
    parser.add_argument("--max-interactions", type=int, default=25,
                        help="Max clickable SPA elements to probe per page (default: 25)")

    args = parser.parse_args()

    start = args.url
    if not start.startswith(("http://", "https://")):
        start = "https://" + start

    domain = urllib.parse.urlparse(start).netloc.replace(":", "_")
    out_dir = Path(args.output or domain)

    cookies = load_cookies(args.cookies) if args.cookies else []
    if cookies:
        print(f"Loaded {len(cookies)} cookies.")

    opts = {
        "delay":            args.delay,
        "timeout":          args.timeout,
        "idle_timeout":     args.idle_timeout,
        "extra_wait":       args.extra_wait,
        "impersonate":      args.impersonate,
        "max_interactions": args.max_interactions,
    }

    print(f"Copying {start} -> {out_dir}/")
    print(f"Headless Chrome | idle-timeout: {opts['idle_timeout']}s | delay: {opts['delay']}s\n")

    crawl(start, out_dir, cookies, opts)


if __name__ == "__main__":
    main()