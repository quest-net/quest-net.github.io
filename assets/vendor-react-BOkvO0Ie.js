import { g as qd, r as Ld, b as Ov } from "./vendor-Dwx9Xpfu.js";
let xy, ep, Ny, ap, My, ea, Oy, Mg, Ay, Gn, X, dg;
let __tla = (async () => {
  var Qr = {
    exports: {}
  }, Bn = {};
  var od;
  function xv() {
    if (od) return Bn;
    od = 1;
    var f = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
    function c(i, h, d) {
      var m = null;
      if (d !== void 0 && (m = "" + d), h.key !== void 0 && (m = "" + h.key), "key" in h) {
        d = {};
        for (var v in h) v !== "key" && (d[v] = h[v]);
      } else d = h;
      return h = d.ref, {
        $$typeof: f,
        type: i,
        key: m,
        ref: h !== void 0 ? h : null,
        props: d
      };
    }
    return Bn.Fragment = o, Bn.jsx = c, Bn.jsxs = c, Bn;
  }
  var sd;
  function Cv() {
    return sd || (sd = 1, Qr.exports = xv()), Qr.exports;
  }
  let Zr, Yn, Vr, Kr;
  Gn = Cv();
  Zr = {
    exports: {}
  };
  Yn = {};
  Vr = {
    exports: {}
  };
  Kr = {};
  var hd;
  function Nv() {
    return hd || (hd = 1, (function(f) {
      function o(N, J) {
        var I = N.length;
        N.push(J);
        t: for (; 0 < I; ) {
          var mt = I - 1 >>> 1, ct = N[mt];
          if (0 < h(ct, J)) N[mt] = J, N[I] = ct, I = mt;
          else break t;
        }
      }
      function c(N) {
        return N.length === 0 ? null : N[0];
      }
      function i(N) {
        if (N.length === 0) return null;
        var J = N[0], I = N.pop();
        if (I !== J) {
          N[0] = I;
          t: for (var mt = 0, ct = N.length, z = ct >>> 1; mt < z; ) {
            var j = 2 * (mt + 1) - 1, W = N[j], k = j + 1, ut = N[k];
            if (0 > h(W, I)) k < ct && 0 > h(ut, W) ? (N[mt] = ut, N[k] = I, mt = k) : (N[mt] = W, N[j] = I, mt = j);
            else if (k < ct && 0 > h(ut, I)) N[mt] = ut, N[k] = I, mt = k;
            else break t;
          }
        }
        return J;
      }
      function h(N, J) {
        var I = N.sortIndex - J.sortIndex;
        return I !== 0 ? I : N.id - J.id;
      }
      if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var d = performance;
        f.unstable_now = function() {
          return d.now();
        };
      } else {
        var m = Date, v = m.now();
        f.unstable_now = function() {
          return m.now() - v;
        };
      }
      var g = [], p = [], T = 1, E = null, U = 3, B = false, q = false, Q = false, H = false, O = typeof setTimeout == "function" ? setTimeout : null, R = typeof clearTimeout == "function" ? clearTimeout : null, x = typeof setImmediate < "u" ? setImmediate : null;
      function Z(N) {
        for (var J = c(p); J !== null; ) {
          if (J.callback === null) i(p);
          else if (J.startTime <= N) i(p), J.sortIndex = J.expirationTime, o(g, J);
          else break;
          J = c(p);
        }
      }
      function V(N) {
        if (Q = false, Z(N), !q) if (c(g) !== null) q = true, F || (F = true, at());
        else {
          var J = c(p);
          J !== null && Lt(V, J.startTime - N);
        }
      }
      var F = false, b = -1, w = 5, K = -1;
      function et() {
        return H ? true : !(f.unstable_now() - K < w);
      }
      function rt() {
        if (H = false, F) {
          var N = f.unstable_now();
          K = N;
          var J = true;
          try {
            t: {
              q = false, Q && (Q = false, R(b), b = -1), B = true;
              var I = U;
              try {
                e: {
                  for (Z(N), E = c(g); E !== null && !(E.expirationTime > N && et()); ) {
                    var mt = E.callback;
                    if (typeof mt == "function") {
                      E.callback = null, U = E.priorityLevel;
                      var ct = mt(E.expirationTime <= N);
                      if (N = f.unstable_now(), typeof ct == "function") {
                        E.callback = ct, Z(N), J = true;
                        break e;
                      }
                      E === c(g) && i(g), Z(N);
                    } else i(g);
                    E = c(g);
                  }
                  if (E !== null) J = true;
                  else {
                    var z = c(p);
                    z !== null && Lt(V, z.startTime - N), J = false;
                  }
                }
                break t;
              } finally {
                E = null, U = I, B = false;
              }
              J = void 0;
            }
          } finally {
            J ? at() : F = false;
          }
        }
      }
      var at;
      if (typeof x == "function") at = function() {
        x(rt);
      };
      else if (typeof MessageChannel < "u") {
        var zt = new MessageChannel(), Ht = zt.port2;
        zt.port1.onmessage = rt, at = function() {
          Ht.postMessage(null);
        };
      } else at = function() {
        O(rt, 0);
      };
      function Lt(N, J) {
        b = O(function() {
          N(f.unstable_now());
        }, J);
      }
      f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(N) {
        N.callback = null;
      }, f.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < N ? Math.floor(1e3 / N) : 5;
      }, f.unstable_getCurrentPriorityLevel = function() {
        return U;
      }, f.unstable_next = function(N) {
        switch (U) {
          case 1:
          case 2:
          case 3:
            var J = 3;
            break;
          default:
            J = U;
        }
        var I = U;
        U = J;
        try {
          return N();
        } finally {
          U = I;
        }
      }, f.unstable_requestPaint = function() {
        H = true;
      }, f.unstable_runWithPriority = function(N, J) {
        switch (N) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            N = 3;
        }
        var I = U;
        U = N;
        try {
          return J();
        } finally {
          U = I;
        }
      }, f.unstable_scheduleCallback = function(N, J, I) {
        var mt = f.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? mt + I : mt) : I = mt, N) {
          case 1:
            var ct = -1;
            break;
          case 2:
            ct = 250;
            break;
          case 5:
            ct = 1073741823;
            break;
          case 4:
            ct = 1e4;
            break;
          default:
            ct = 5e3;
        }
        return ct = I + ct, N = {
          id: T++,
          callback: J,
          priorityLevel: N,
          startTime: I,
          expirationTime: ct,
          sortIndex: -1
        }, I > mt ? (N.sortIndex = I, o(p, N), c(g) === null && N === c(p) && (Q ? (R(b), b = -1) : Q = true, Lt(V, I - mt))) : (N.sortIndex = ct, o(g, N), q || B || (q = true, F || (F = true, at()))), N;
      }, f.unstable_shouldYield = et, f.unstable_wrapCallback = function(N) {
        var J = U;
        return function() {
          var I = U;
          U = J;
          try {
            return N.apply(this, arguments);
          } finally {
            U = I;
          }
        };
      };
    })(Kr)), Kr;
  }
  var dd;
  function Uv() {
    return dd || (dd = 1, Vr.exports = Nv()), Vr.exports;
  }
  var Jr = {
    exports: {}
  }, nt = {};
  var pd;
  function Hv() {
    if (pd) return nt;
    pd = 1;
    var f = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), m = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), E = Symbol.for("react.activity"), U = Symbol.iterator;
    function B(z) {
      return z === null || typeof z != "object" ? null : (z = U && z[U] || z["@@iterator"], typeof z == "function" ? z : null);
    }
    var q = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, Q = Object.assign, H = {};
    function O(z, j, W) {
      this.props = z, this.context = j, this.refs = H, this.updater = W || q;
    }
    O.prototype.isReactComponent = {}, O.prototype.setState = function(z, j) {
      if (typeof z != "object" && typeof z != "function" && z != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, z, j, "setState");
    }, O.prototype.forceUpdate = function(z) {
      this.updater.enqueueForceUpdate(this, z, "forceUpdate");
    };
    function R() {
    }
    R.prototype = O.prototype;
    function x(z, j, W) {
      this.props = z, this.context = j, this.refs = H, this.updater = W || q;
    }
    var Z = x.prototype = new R();
    Z.constructor = x, Q(Z, O.prototype), Z.isPureReactComponent = true;
    var V = Array.isArray;
    function F() {
    }
    var b = {
      H: null,
      A: null,
      T: null,
      S: null
    }, w = Object.prototype.hasOwnProperty;
    function K(z, j, W) {
      var k = W.ref;
      return {
        $$typeof: f,
        type: z,
        key: j,
        ref: k !== void 0 ? k : null,
        props: W
      };
    }
    function et(z, j) {
      return K(z.type, j, z.props);
    }
    function rt(z) {
      return typeof z == "object" && z !== null && z.$$typeof === f;
    }
    function at(z) {
      var j = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + z.replace(/[=:]/g, function(W) {
        return j[W];
      });
    }
    var zt = /\/+/g;
    function Ht(z, j) {
      return typeof z == "object" && z !== null && z.key != null ? at("" + z.key) : j.toString(36);
    }
    function Lt(z) {
      switch (z.status) {
        case "fulfilled":
          return z.value;
        case "rejected":
          throw z.reason;
        default:
          switch (typeof z.status == "string" ? z.then(F, F) : (z.status = "pending", z.then(function(j) {
            z.status === "pending" && (z.status = "fulfilled", z.value = j);
          }, function(j) {
            z.status === "pending" && (z.status = "rejected", z.reason = j);
          })), z.status) {
            case "fulfilled":
              return z.value;
            case "rejected":
              throw z.reason;
          }
      }
      throw z;
    }
    function N(z, j, W, k, ut) {
      var ot = typeof z;
      (ot === "undefined" || ot === "boolean") && (z = null);
      var bt = false;
      if (z === null) bt = true;
      else switch (ot) {
        case "bigint":
        case "string":
        case "number":
          bt = true;
          break;
        case "object":
          switch (z.$$typeof) {
            case f:
            case o:
              bt = true;
              break;
            case T:
              return bt = z._init, N(bt(z._payload), j, W, k, ut);
          }
      }
      if (bt) return ut = ut(z), bt = k === "" ? "." + Ht(z, 0) : k, V(ut) ? (W = "", bt != null && (W = bt.replace(zt, "$&/") + "/"), N(ut, j, W, "", function(ja) {
        return ja;
      })) : ut != null && (rt(ut) && (ut = et(ut, W + (ut.key == null || z && z.key === ut.key ? "" : ("" + ut.key).replace(zt, "$&/") + "/") + bt)), j.push(ut)), 1;
      bt = 0;
      var ee = k === "" ? "." : k + ":";
      if (V(z)) for (var wt = 0; wt < z.length; wt++) k = z[wt], ot = ee + Ht(k, wt), bt += N(k, j, W, ot, ut);
      else if (wt = B(z), typeof wt == "function") for (z = wt.call(z), wt = 0; !(k = z.next()).done; ) k = k.value, ot = ee + Ht(k, wt++), bt += N(k, j, W, ot, ut);
      else if (ot === "object") {
        if (typeof z.then == "function") return N(Lt(z), j, W, k, ut);
        throw j = String(z), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
      }
      return bt;
    }
    function J(z, j, W) {
      if (z == null) return z;
      var k = [], ut = 0;
      return N(z, k, "", "", function(ot) {
        return j.call(W, ot, ut++);
      }), k;
    }
    function I(z) {
      if (z._status === -1) {
        var j = z._result;
        j = j(), j.then(function(W) {
          (z._status === 0 || z._status === -1) && (z._status = 1, z._result = W);
        }, function(W) {
          (z._status === 0 || z._status === -1) && (z._status = 2, z._result = W);
        }), z._status === -1 && (z._status = 0, z._result = j);
      }
      if (z._status === 1) return z._result.default;
      throw z._result;
    }
    var mt = typeof reportError == "function" ? reportError : function(z) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var j = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof z == "object" && z !== null && typeof z.message == "string" ? String(z.message) : String(z),
          error: z
        });
        if (!window.dispatchEvent(j)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", z);
        return;
      }
      console.error(z);
    }, ct = {
      map: J,
      forEach: function(z, j, W) {
        J(z, function() {
          j.apply(this, arguments);
        }, W);
      },
      count: function(z) {
        var j = 0;
        return J(z, function() {
          j++;
        }), j;
      },
      toArray: function(z) {
        return J(z, function(j) {
          return j;
        }) || [];
      },
      only: function(z) {
        if (!rt(z)) throw Error("React.Children.only expected to receive a single React element child.");
        return z;
      }
    };
    return nt.Activity = E, nt.Children = ct, nt.Component = O, nt.Fragment = c, nt.Profiler = h, nt.PureComponent = x, nt.StrictMode = i, nt.Suspense = g, nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = b, nt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(z) {
        return b.H.useMemoCache(z);
      }
    }, nt.cache = function(z) {
      return function() {
        return z.apply(null, arguments);
      };
    }, nt.cacheSignal = function() {
      return null;
    }, nt.cloneElement = function(z, j, W) {
      if (z == null) throw Error("The argument must be a React element, but you passed " + z + ".");
      var k = Q({}, z.props), ut = z.key;
      if (j != null) for (ot in j.key !== void 0 && (ut = "" + j.key), j) !w.call(j, ot) || ot === "key" || ot === "__self" || ot === "__source" || ot === "ref" && j.ref === void 0 || (k[ot] = j[ot]);
      var ot = arguments.length - 2;
      if (ot === 1) k.children = W;
      else if (1 < ot) {
        for (var bt = Array(ot), ee = 0; ee < ot; ee++) bt[ee] = arguments[ee + 2];
        k.children = bt;
      }
      return K(z.type, ut, k);
    }, nt.createContext = function(z) {
      return z = {
        $$typeof: m,
        _currentValue: z,
        _currentValue2: z,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, z.Provider = z, z.Consumer = {
        $$typeof: d,
        _context: z
      }, z;
    }, nt.createElement = function(z, j, W) {
      var k, ut = {}, ot = null;
      if (j != null) for (k in j.key !== void 0 && (ot = "" + j.key), j) w.call(j, k) && k !== "key" && k !== "__self" && k !== "__source" && (ut[k] = j[k]);
      var bt = arguments.length - 2;
      if (bt === 1) ut.children = W;
      else if (1 < bt) {
        for (var ee = Array(bt), wt = 0; wt < bt; wt++) ee[wt] = arguments[wt + 2];
        ut.children = ee;
      }
      if (z && z.defaultProps) for (k in bt = z.defaultProps, bt) ut[k] === void 0 && (ut[k] = bt[k]);
      return K(z, ot, ut);
    }, nt.createRef = function() {
      return {
        current: null
      };
    }, nt.forwardRef = function(z) {
      return {
        $$typeof: v,
        render: z
      };
    }, nt.isValidElement = rt, nt.lazy = function(z) {
      return {
        $$typeof: T,
        _payload: {
          _status: -1,
          _result: z
        },
        _init: I
      };
    }, nt.memo = function(z, j) {
      return {
        $$typeof: p,
        type: z,
        compare: j === void 0 ? null : j
      };
    }, nt.startTransition = function(z) {
      var j = b.T, W = {};
      b.T = W;
      try {
        var k = z(), ut = b.S;
        ut !== null && ut(W, k), typeof k == "object" && k !== null && typeof k.then == "function" && k.then(F, mt);
      } catch (ot) {
        mt(ot);
      } finally {
        j !== null && W.types !== null && (j.types = W.types), b.T = j;
      }
    }, nt.unstable_useCacheRefresh = function() {
      return b.H.useCacheRefresh();
    }, nt.use = function(z) {
      return b.H.use(z);
    }, nt.useActionState = function(z, j, W) {
      return b.H.useActionState(z, j, W);
    }, nt.useCallback = function(z, j) {
      return b.H.useCallback(z, j);
    }, nt.useContext = function(z) {
      return b.H.useContext(z);
    }, nt.useDebugValue = function() {
    }, nt.useDeferredValue = function(z, j) {
      return b.H.useDeferredValue(z, j);
    }, nt.useEffect = function(z, j) {
      return b.H.useEffect(z, j);
    }, nt.useEffectEvent = function(z) {
      return b.H.useEffectEvent(z);
    }, nt.useId = function() {
      return b.H.useId();
    }, nt.useImperativeHandle = function(z, j, W) {
      return b.H.useImperativeHandle(z, j, W);
    }, nt.useInsertionEffect = function(z, j) {
      return b.H.useInsertionEffect(z, j);
    }, nt.useLayoutEffect = function(z, j) {
      return b.H.useLayoutEffect(z, j);
    }, nt.useMemo = function(z, j) {
      return b.H.useMemo(z, j);
    }, nt.useOptimistic = function(z, j) {
      return b.H.useOptimistic(z, j);
    }, nt.useReducer = function(z, j, W) {
      return b.H.useReducer(z, j, W);
    }, nt.useRef = function(z) {
      return b.H.useRef(z);
    }, nt.useState = function(z) {
      return b.H.useState(z);
    }, nt.useSyncExternalStore = function(z, j, W) {
      return b.H.useSyncExternalStore(z, j, W);
    }, nt.useTransition = function() {
      return b.H.useTransition();
    }, nt.version = "19.2.0", nt;
  }
  var md;
  function Qn() {
    return md || (md = 1, Jr.exports = Hv()), Jr.exports;
  }
  var Wr = {
    exports: {}
  }, te = {};
  var vd;
  function wv() {
    if (vd) return te;
    vd = 1;
    var f = Qn();
    function o(g) {
      var p = "https://react.dev/errors/" + g;
      if (1 < arguments.length) {
        p += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var T = 2; T < arguments.length; T++) p += "&args[]=" + encodeURIComponent(arguments[T]);
      }
      return "Minified React error #" + g + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function c() {
    }
    var i = {
      d: {
        f: c,
        r: function() {
          throw Error(o(522));
        },
        D: c,
        C: c,
        L: c,
        m: c,
        X: c,
        S: c,
        M: c
      },
      p: 0,
      findDOMNode: null
    }, h = Symbol.for("react.portal");
    function d(g, p, T) {
      var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: h,
        key: E == null ? null : "" + E,
        children: g,
        containerInfo: p,
        implementation: T
      };
    }
    var m = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function v(g, p) {
      if (g === "font") return "";
      if (typeof p == "string") return p === "use-credentials" ? p : "";
    }
    return te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, te.createPortal = function(g, p) {
      var T = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(o(299));
      return d(g, p, null, T);
    }, te.flushSync = function(g) {
      var p = m.T, T = i.p;
      try {
        if (m.T = null, i.p = 2, g) return g();
      } finally {
        m.T = p, i.p = T, i.d.f();
      }
    }, te.preconnect = function(g, p) {
      typeof g == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, i.d.C(g, p));
    }, te.prefetchDNS = function(g) {
      typeof g == "string" && i.d.D(g);
    }, te.preinit = function(g, p) {
      if (typeof g == "string" && p && typeof p.as == "string") {
        var T = p.as, E = v(T, p.crossOrigin), U = typeof p.integrity == "string" ? p.integrity : void 0, B = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        T === "style" ? i.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
          crossOrigin: E,
          integrity: U,
          fetchPriority: B
        }) : T === "script" && i.d.X(g, {
          crossOrigin: E,
          integrity: U,
          fetchPriority: B,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0
        });
      }
    }, te.preinitModule = function(g, p) {
      if (typeof g == "string") if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var T = v(p.as, p.crossOrigin);
          i.d.M(g, {
            crossOrigin: T,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && i.d.M(g);
    }, te.preload = function(g, p) {
      if (typeof g == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
        var T = p.as, E = v(T, p.crossOrigin);
        i.d.L(g, T, {
          crossOrigin: E,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0
        });
      }
    }, te.preloadModule = function(g, p) {
      if (typeof g == "string") if (p) {
        var T = v(p.as, p.crossOrigin);
        i.d.m(g, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: T,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else i.d.m(g);
    }, te.requestFormReset = function(g) {
      i.d.r(g);
    }, te.unstable_batchedUpdates = function(g, p) {
      return g(p);
    }, te.useFormState = function(g, p, T) {
      return m.H.useFormState(g, p, T);
    }, te.useFormStatus = function() {
      return m.H.useHostTransitionStatus();
    }, te.version = "19.2.0", te;
  }
  var gd;
  function bi() {
    if (gd) return Wr.exports;
    gd = 1;
    function f() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (o) {
        console.error(o);
      }
    }
    return f(), Wr.exports = wv(), Wr.exports;
  }
  var yd;
  function Bv() {
    if (yd) return Yn;
    yd = 1;
    var f = Uv(), o = Qn(), c = bi();
    function i(t) {
      var e = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l]);
      }
      return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function h(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function d(t) {
      var e = t, l = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do
          e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
        while (t);
      }
      return e.tag === 3 ? l : null;
    }
    function m(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function v(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function g(t) {
      if (d(t) !== t) throw Error(i(188));
    }
    function p(t) {
      var e = t.alternate;
      if (!e) {
        if (e = d(t), e === null) throw Error(i(188));
        return e !== t ? null : t;
      }
      for (var l = t, a = e; ; ) {
        var n = l.return;
        if (n === null) break;
        var u = n.alternate;
        if (u === null) {
          if (a = n.return, a !== null) {
            l = a;
            continue;
          }
          break;
        }
        if (n.child === u.child) {
          for (u = n.child; u; ) {
            if (u === l) return g(n), t;
            if (u === a) return g(n), e;
            u = u.sibling;
          }
          throw Error(i(188));
        }
        if (l.return !== a.return) l = n, a = u;
        else {
          for (var r = false, s = n.child; s; ) {
            if (s === l) {
              r = true, l = n, a = u;
              break;
            }
            if (s === a) {
              r = true, a = n, l = u;
              break;
            }
            s = s.sibling;
          }
          if (!r) {
            for (s = u.child; s; ) {
              if (s === l) {
                r = true, l = u, a = n;
                break;
              }
              if (s === a) {
                r = true, a = u, l = n;
                break;
              }
              s = s.sibling;
            }
            if (!r) throw Error(i(189));
          }
        }
        if (l.alternate !== a) throw Error(i(190));
      }
      if (l.tag !== 3) throw Error(i(188));
      return l.stateNode.current === l ? t : e;
    }
    function T(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = T(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    var E = Object.assign, U = Symbol.for("react.element"), B = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), x = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), et = Symbol.for("react.memo_cache_sentinel"), rt = Symbol.iterator;
    function at(t) {
      return t === null || typeof t != "object" ? null : (t = rt && t[rt] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var zt = Symbol.for("react.client.reference");
    function Ht(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.$$typeof === zt ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case Q:
          return "Fragment";
        case O:
          return "Profiler";
        case H:
          return "StrictMode";
        case V:
          return "Suspense";
        case F:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case q:
          return "Portal";
        case x:
          return t.displayName || "Context";
        case R:
          return (t._context.displayName || "Context") + ".Consumer";
        case Z:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case b:
          return e = t.displayName || null, e !== null ? e : Ht(t.type) || "Memo";
        case w:
          e = t._payload, t = t._init;
          try {
            return Ht(t(e));
          } catch {
          }
      }
      return null;
    }
    var Lt = Array.isArray, N = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, mt = [], ct = -1;
    function z(t) {
      return {
        current: t
      };
    }
    function j(t) {
      0 > ct || (t.current = mt[ct], mt[ct] = null, ct--);
    }
    function W(t, e) {
      ct++, mt[ct] = t.current, t.current = e;
    }
    var k = z(null), ut = z(null), ot = z(null), bt = z(null);
    function ee(t, e) {
      switch (W(ot, e), W(ut, t), W(k, null), e.nodeType) {
        case 9:
        case 11:
          t = (t = e.documentElement) && (t = t.namespaceURI) ? Uh(t) : 0;
          break;
        default:
          if (t = e.tagName, e = e.namespaceURI) e = Uh(e), t = Hh(e, t);
          else switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
      }
      j(k), W(k, t);
    }
    function wt() {
      j(k), j(ut), j(ot);
    }
    function ja(t) {
      t.memoizedState !== null && W(bt, t);
      var e = k.current, l = Hh(e, t.type);
      e !== l && (W(ut, t), W(k, l));
    }
    function Jn(t) {
      ut.current === t && (j(k), j(ut)), bt.current === t && (j(bt), Nn._currentValue = I);
    }
    var Di, rc;
    function wl(t) {
      if (Di === void 0) try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        Di = e && e[1] || "", rc = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + Di + t + rc;
    }
    var Ri = false;
    function _i(t, e) {
      if (!t || Ri) return "";
      Ri = true;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
                var G = function() {
                  throw Error();
                };
                if (Object.defineProperty(G.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(G, []);
                  } catch (C) {
                    var M = C;
                  }
                  Reflect.construct(t, [], G);
                } else {
                  try {
                    G.call();
                  } catch (C) {
                    M = C;
                  }
                  t.call(G.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (C) {
                  M = C;
                }
                (G = t()) && typeof G.catch == "function" && G.catch(function() {
                });
              }
            } catch (C) {
              if (C && M && typeof C.stack == "string") return [
                C.stack,
                M.stack
              ];
            }
            return [
              null,
              null
            ];
          }
        };
        a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
        n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var u = a.DetermineComponentFrameRoot(), r = u[0], s = u[1];
        if (r && s) {
          var y = r.split(`
`), A = s.split(`
`);
          for (n = a = 0; a < y.length && !y[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; n < A.length && !A[n].includes("DetermineComponentFrameRoot"); ) n++;
          if (a === y.length || n === A.length) for (a = y.length - 1, n = A.length - 1; 1 <= a && 0 <= n && y[a] !== A[n]; ) n--;
          for (; 1 <= a && 0 <= n; a--, n--) if (y[a] !== A[n]) {
            if (a !== 1 || n !== 1) do
              if (a--, n--, 0 > n || y[a] !== A[n]) {
                var Y = `
` + y[a].replace(" at new ", " at ");
                return t.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", t.displayName)), Y;
              }
            while (1 <= a && 0 <= n);
            break;
          }
        }
      } finally {
        Ri = false, Error.prepareStackTrace = l;
      }
      return (l = t ? t.displayName || t.name : "") ? wl(l) : "";
    }
    function ip(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return wl(t.type);
        case 16:
          return wl("Lazy");
        case 13:
          return t.child !== e && e !== null ? wl("Suspense Fallback") : wl("Suspense");
        case 19:
          return wl("SuspenseList");
        case 0:
        case 15:
          return _i(t.type, false);
        case 11:
          return _i(t.type.render, false);
        case 1:
          return _i(t.type, true);
        case 31:
          return wl("Activity");
        default:
          return "";
      }
    }
    function cc(t) {
      try {
        var e = "", l = null;
        do
          e += ip(t, l), l = t, t = t.return;
        while (t);
        return e;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var Ai = Object.prototype.hasOwnProperty, Mi = f.unstable_scheduleCallback, Oi = f.unstable_cancelCallback, fp = f.unstable_shouldYield, rp = f.unstable_requestPaint, oe = f.unstable_now, cp = f.unstable_getCurrentPriorityLevel, oc = f.unstable_ImmediatePriority, sc = f.unstable_UserBlockingPriority, Wn = f.unstable_NormalPriority, op = f.unstable_LowPriority, hc = f.unstable_IdlePriority, sp = f.log, hp = f.unstable_setDisableYieldValue, Qa = null, se = null;
    function rl(t) {
      if (typeof sp == "function" && hp(t), se && typeof se.setStrictMode == "function") try {
        se.setStrictMode(Qa, t);
      } catch {
      }
    }
    var he = Math.clz32 ? Math.clz32 : mp, dp = Math.log, pp = Math.LN2;
    function mp(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (dp(t) / pp | 0) | 0;
    }
    var $n = 256, Fn = 262144, kn = 4194304;
    function Bl(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
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
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
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
          return t;
      }
    }
    function Pn(t, e, l) {
      var a = t.pendingLanes;
      if (a === 0) return 0;
      var n = 0, u = t.suspendedLanes, r = t.pingedLanes;
      t = t.warmLanes;
      var s = a & 134217727;
      return s !== 0 ? (a = s & ~u, a !== 0 ? n = Bl(a) : (r &= s, r !== 0 ? n = Bl(r) : l || (l = s & ~t, l !== 0 && (n = Bl(l))))) : (s = a & ~u, s !== 0 ? n = Bl(s) : r !== 0 ? n = Bl(r) : l || (l = a & ~t, l !== 0 && (n = Bl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
    }
    function Za(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function vp(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
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
          return e + 5e3;
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
    function dc() {
      var t = kn;
      return kn <<= 1, (kn & 62914560) === 0 && (kn = 4194304), t;
    }
    function xi(t) {
      for (var e = [], l = 0; 31 > l; l++) e.push(t);
      return e;
    }
    function Va(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function gp(t, e, l, a, n, u) {
      var r = t.pendingLanes;
      t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
      var s = t.entanglements, y = t.expirationTimes, A = t.hiddenUpdates;
      for (l = r & ~l; 0 < l; ) {
        var Y = 31 - he(l), G = 1 << Y;
        s[Y] = 0, y[Y] = -1;
        var M = A[Y];
        if (M !== null) for (A[Y] = null, Y = 0; Y < M.length; Y++) {
          var C = M[Y];
          C !== null && (C.lane &= -536870913);
        }
        l &= ~G;
      }
      a !== 0 && pc(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(r & ~e));
    }
    function pc(t, e, l) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var a = 31 - he(e);
      t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
    }
    function mc(t, e) {
      var l = t.entangledLanes |= e;
      for (t = t.entanglements; l; ) {
        var a = 31 - he(l), n = 1 << a;
        n & e | t[a] & e && (t[a] |= e), l &= ~n;
      }
    }
    function vc(t, e) {
      var l = e & -e;
      return l = (l & 42) !== 0 ? 1 : Ci(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
    }
    function Ci(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
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
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function Ni(t) {
      return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function gc() {
      var t = J.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : ad(t.type));
    }
    function yc(t, e) {
      var l = J.p;
      try {
        return J.p = t, e();
      } finally {
        J.p = l;
      }
    }
    var cl = Math.random().toString(36).slice(2), $t = "__reactFiber$" + cl, ae = "__reactProps$" + cl, la = "__reactContainer$" + cl, Ui = "__reactEvents$" + cl, yp = "__reactListeners$" + cl, Sp = "__reactHandles$" + cl, Sc = "__reactResources$" + cl, Ka = "__reactMarker$" + cl;
    function Hi(t) {
      delete t[$t], delete t[ae], delete t[Ui], delete t[yp], delete t[Sp];
    }
    function aa(t) {
      var e = t[$t];
      if (e) return e;
      for (var l = t.parentNode; l; ) {
        if (e = l[la] || l[$t]) {
          if (l = e.alternate, e.child !== null || l !== null && l.child !== null) for (t = Gh(t); t !== null; ) {
            if (l = t[$t]) return l;
            t = Gh(t);
          }
          return e;
        }
        t = l, l = t.parentNode;
      }
      return null;
    }
    function na(t) {
      if (t = t[$t] || t[la]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
      }
      return null;
    }
    function Ja(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
      throw Error(i(33));
    }
    function ua(t) {
      var e = t[Sc];
      return e || (e = t[Sc] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), e;
    }
    function Jt(t) {
      t[Ka] = true;
    }
    var bc = /* @__PURE__ */ new Set(), zc = {};
    function Yl(t, e) {
      ia(t, e), ia(t + "Capture", e);
    }
    function ia(t, e) {
      for (zc[t] = e, t = 0; t < e.length; t++) bc.add(e[t]);
    }
    var bp = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ec = {}, Tc = {};
    function zp(t) {
      return Ai.call(Tc, t) ? true : Ai.call(Ec, t) ? false : bp.test(t) ? Tc[t] = true : (Ec[t] = true, false);
    }
    function In(t, e, l) {
      if (zp(e)) if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
    }
    function tu(t, e, l) {
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        t.setAttribute(e, "" + l);
      }
    }
    function je(t, e, l, a) {
      if (a === null) t.removeAttribute(l);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(l);
            return;
        }
        t.setAttributeNS(e, l, "" + a);
      }
    }
    function be(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return t;
        default:
          return "";
      }
    }
    function Dc(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function Ep(t, e, l) {
      var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
      if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var n = a.get, u = a.set;
        return Object.defineProperty(t, e, {
          configurable: true,
          get: function() {
            return n.call(this);
          },
          set: function(r) {
            l = "" + r, u.call(this, r);
          }
        }), Object.defineProperty(t, e, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return l;
          },
          setValue: function(r) {
            l = "" + r;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[e];
          }
        };
      }
    }
    function wi(t) {
      if (!t._valueTracker) {
        var e = Dc(t) ? "checked" : "value";
        t._valueTracker = Ep(t, e, "" + t[e]);
      }
    }
    function Rc(t) {
      if (!t) return false;
      var e = t._valueTracker;
      if (!e) return true;
      var l = e.getValue(), a = "";
      return t && (a = Dc(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), true) : false;
    }
    function eu(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var Tp = /[\n"\\]/g;
    function ze(t) {
      return t.replace(Tp, function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function Bi(t, e, l, a, n, u, r, s) {
      t.name = "", r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? t.type = r : t.removeAttribute("type"), e != null ? r === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + be(e)) : t.value !== "" + be(e) && (t.value = "" + be(e)) : r !== "submit" && r !== "reset" || t.removeAttribute("value"), e != null ? Yi(t, r, be(e)) : l != null ? Yi(t, r, be(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.name = "" + be(s) : t.removeAttribute("name");
    }
    function _c(t, e, l, a, n, u, r, s) {
      if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
        if (!(u !== "submit" && u !== "reset" || e != null)) {
          wi(t);
          return;
        }
        l = l != null ? "" + be(l) : "", e = e != null ? "" + be(e) : l, s || e === t.value || (t.value = e), t.defaultValue = e;
      }
      a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = s ? t.checked : !!a, t.defaultChecked = !!a, r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.name = r), wi(t);
    }
    function Yi(t, e, l) {
      e === "number" && eu(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
    }
    function fa(t, e, l, a) {
      if (t = t.options, e) {
        e = {};
        for (var n = 0; n < l.length; n++) e["$" + l[n]] = true;
        for (l = 0; l < t.length; l++) n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = true);
      } else {
        for (l = "" + be(l), e = null, n = 0; n < t.length; n++) {
          if (t[n].value === l) {
            t[n].selected = true, a && (t[n].defaultSelected = true);
            return;
          }
          e !== null || t[n].disabled || (e = t[n]);
        }
        e !== null && (e.selected = true);
      }
    }
    function Ac(t, e, l) {
      if (e != null && (e = "" + be(e), e !== t.value && (t.value = e), l == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = l != null ? "" + be(l) : "";
    }
    function Mc(t, e, l, a) {
      if (e == null) {
        if (a != null) {
          if (l != null) throw Error(i(92));
          if (Lt(a)) {
            if (1 < a.length) throw Error(i(93));
            a = a[0];
          }
          l = a;
        }
        l == null && (l = ""), e = l;
      }
      l = be(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), wi(t);
    }
    function ra(t, e) {
      if (e) {
        var l = t.firstChild;
        if (l && l === t.lastChild && l.nodeType === 3) {
          l.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    var Dp = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Oc(t, e, l) {
      var a = e.indexOf("--") === 0;
      l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Dp.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
    }
    function xc(t, e, l) {
      if (e != null && typeof e != "object") throw Error(i(62));
      if (t = t.style, l != null) {
        for (var a in l) !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
        for (var n in e) a = e[n], e.hasOwnProperty(n) && l[n] !== a && Oc(t, n, a);
      } else for (var u in e) e.hasOwnProperty(u) && Oc(t, u, e[u]);
    }
    function qi(t) {
      if (t.indexOf("-") === -1) return false;
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var Rp = /* @__PURE__ */ new Map([
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ],
      [
        "crossOrigin",
        "crossorigin"
      ],
      [
        "accentHeight",
        "accent-height"
      ],
      [
        "alignmentBaseline",
        "alignment-baseline"
      ],
      [
        "arabicForm",
        "arabic-form"
      ],
      [
        "baselineShift",
        "baseline-shift"
      ],
      [
        "capHeight",
        "cap-height"
      ],
      [
        "clipPath",
        "clip-path"
      ],
      [
        "clipRule",
        "clip-rule"
      ],
      [
        "colorInterpolation",
        "color-interpolation"
      ],
      [
        "colorInterpolationFilters",
        "color-interpolation-filters"
      ],
      [
        "colorProfile",
        "color-profile"
      ],
      [
        "colorRendering",
        "color-rendering"
      ],
      [
        "dominantBaseline",
        "dominant-baseline"
      ],
      [
        "enableBackground",
        "enable-background"
      ],
      [
        "fillOpacity",
        "fill-opacity"
      ],
      [
        "fillRule",
        "fill-rule"
      ],
      [
        "floodColor",
        "flood-color"
      ],
      [
        "floodOpacity",
        "flood-opacity"
      ],
      [
        "fontFamily",
        "font-family"
      ],
      [
        "fontSize",
        "font-size"
      ],
      [
        "fontSizeAdjust",
        "font-size-adjust"
      ],
      [
        "fontStretch",
        "font-stretch"
      ],
      [
        "fontStyle",
        "font-style"
      ],
      [
        "fontVariant",
        "font-variant"
      ],
      [
        "fontWeight",
        "font-weight"
      ],
      [
        "glyphName",
        "glyph-name"
      ],
      [
        "glyphOrientationHorizontal",
        "glyph-orientation-horizontal"
      ],
      [
        "glyphOrientationVertical",
        "glyph-orientation-vertical"
      ],
      [
        "horizAdvX",
        "horiz-adv-x"
      ],
      [
        "horizOriginX",
        "horiz-origin-x"
      ],
      [
        "imageRendering",
        "image-rendering"
      ],
      [
        "letterSpacing",
        "letter-spacing"
      ],
      [
        "lightingColor",
        "lighting-color"
      ],
      [
        "markerEnd",
        "marker-end"
      ],
      [
        "markerMid",
        "marker-mid"
      ],
      [
        "markerStart",
        "marker-start"
      ],
      [
        "overlinePosition",
        "overline-position"
      ],
      [
        "overlineThickness",
        "overline-thickness"
      ],
      [
        "paintOrder",
        "paint-order"
      ],
      [
        "panose-1",
        "panose-1"
      ],
      [
        "pointerEvents",
        "pointer-events"
      ],
      [
        "renderingIntent",
        "rendering-intent"
      ],
      [
        "shapeRendering",
        "shape-rendering"
      ],
      [
        "stopColor",
        "stop-color"
      ],
      [
        "stopOpacity",
        "stop-opacity"
      ],
      [
        "strikethroughPosition",
        "strikethrough-position"
      ],
      [
        "strikethroughThickness",
        "strikethrough-thickness"
      ],
      [
        "strokeDasharray",
        "stroke-dasharray"
      ],
      [
        "strokeDashoffset",
        "stroke-dashoffset"
      ],
      [
        "strokeLinecap",
        "stroke-linecap"
      ],
      [
        "strokeLinejoin",
        "stroke-linejoin"
      ],
      [
        "strokeMiterlimit",
        "stroke-miterlimit"
      ],
      [
        "strokeOpacity",
        "stroke-opacity"
      ],
      [
        "strokeWidth",
        "stroke-width"
      ],
      [
        "textAnchor",
        "text-anchor"
      ],
      [
        "textDecoration",
        "text-decoration"
      ],
      [
        "textRendering",
        "text-rendering"
      ],
      [
        "transformOrigin",
        "transform-origin"
      ],
      [
        "underlinePosition",
        "underline-position"
      ],
      [
        "underlineThickness",
        "underline-thickness"
      ],
      [
        "unicodeBidi",
        "unicode-bidi"
      ],
      [
        "unicodeRange",
        "unicode-range"
      ],
      [
        "unitsPerEm",
        "units-per-em"
      ],
      [
        "vAlphabetic",
        "v-alphabetic"
      ],
      [
        "vHanging",
        "v-hanging"
      ],
      [
        "vIdeographic",
        "v-ideographic"
      ],
      [
        "vMathematical",
        "v-mathematical"
      ],
      [
        "vectorEffect",
        "vector-effect"
      ],
      [
        "vertAdvY",
        "vert-adv-y"
      ],
      [
        "vertOriginX",
        "vert-origin-x"
      ],
      [
        "vertOriginY",
        "vert-origin-y"
      ],
      [
        "wordSpacing",
        "word-spacing"
      ],
      [
        "writingMode",
        "writing-mode"
      ],
      [
        "xmlnsXlink",
        "xmlns:xlink"
      ],
      [
        "xHeight",
        "x-height"
      ]
    ]), _p = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function lu(t) {
      return _p.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function Qe() {
    }
    var Li = null;
    function Xi(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var ca = null, oa = null;
    function Cc(t) {
      var e = na(t);
      if (e && (t = e.stateNode)) {
        var l = t[ae] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (Bi(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
              for (l = t; l.parentNode; ) l = l.parentNode;
              for (l = l.querySelectorAll('input[name="' + ze("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
                var a = l[e];
                if (a !== t && a.form === t.form) {
                  var n = a[ae] || null;
                  if (!n) throw Error(i(90));
                  Bi(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
                }
              }
              for (e = 0; e < l.length; e++) a = l[e], a.form === t.form && Rc(a);
            }
            break t;
          case "textarea":
            Ac(t, l.value, l.defaultValue);
            break t;
          case "select":
            e = l.value, e != null && fa(t, !!l.multiple, e, false);
        }
      }
    }
    var Gi = false;
    function Nc(t, e, l) {
      if (Gi) return t(e, l);
      Gi = true;
      try {
        var a = t(e);
        return a;
      } finally {
        if (Gi = false, (ca !== null || oa !== null) && (Qu(), ca && (e = ca, t = oa, oa = ca = null, Cc(e), t))) for (e = 0; e < t.length; e++) Cc(t[e]);
      }
    }
    function Wa(t, e) {
      var l = t.stateNode;
      if (l === null) return null;
      var a = l[ae] || null;
      if (a === null) return null;
      l = a[e];
      t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
          break t;
        default:
          t = false;
      }
      if (t) return null;
      if (l && typeof l != "function") throw Error(i(231, e, typeof l));
      return l;
    }
    var Ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ji = false;
    if (Ze) try {
      var $a = {};
      Object.defineProperty($a, "passive", {
        get: function() {
          ji = true;
        }
      }), window.addEventListener("test", $a, $a), window.removeEventListener("test", $a, $a);
    } catch {
      ji = false;
    }
    var ol = null, Qi = null, au = null;
    function Uc() {
      if (au) return au;
      var t, e = Qi, l = e.length, a, n = "value" in ol ? ol.value : ol.textContent, u = n.length;
      for (t = 0; t < l && e[t] === n[t]; t++) ;
      var r = l - t;
      for (a = 1; a <= r && e[l - a] === n[u - a]; a++) ;
      return au = n.slice(t, 1 < a ? 1 - a : void 0);
    }
    function nu(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function uu() {
      return true;
    }
    function Hc() {
      return false;
    }
    function ne(t) {
      function e(l, a, n, u, r) {
        this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = r, this.currentTarget = null;
        for (var s in t) t.hasOwnProperty(s) && (l = t[s], this[s] = l ? l(u) : u[s]);
        return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? uu : Hc, this.isPropagationStopped = Hc, this;
      }
      return E(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var l = this.nativeEvent;
          l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = uu);
        },
        stopPropagation: function() {
          var l = this.nativeEvent;
          l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = uu);
        },
        persist: function() {
        },
        isPersistent: uu
      }), e;
    }
    var ql = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, iu = ne(ql), Fa = E({}, ql, {
      view: 0,
      detail: 0
    }), Ap = ne(Fa), Zi, Vi, ka, fu = E({}, Fa, {
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
      getModifierState: Ji,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== ka && (ka && t.type === "mousemove" ? (Zi = t.screenX - ka.screenX, Vi = t.screenY - ka.screenY) : Vi = Zi = 0, ka = t), Zi);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : Vi;
      }
    }), wc = ne(fu), Mp = E({}, fu, {
      dataTransfer: 0
    }), Op = ne(Mp), xp = E({}, Fa, {
      relatedTarget: 0
    }), Ki = ne(xp), Cp = E({}, ql, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Np = ne(Cp), Up = E({}, ql, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), Hp = ne(Up), wp = E({}, ql, {
      data: 0
    }), Bc = ne(wp), Bp = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Yp = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, qp = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Lp(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = qp[t]) ? !!e[t] : false;
    }
    function Ji() {
      return Lp;
    }
    var Xp = E({}, Fa, {
      key: function(t) {
        if (t.key) {
          var e = Bp[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = nu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Yp[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ji,
      charCode: function(t) {
        return t.type === "keypress" ? nu(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? nu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), Gp = ne(Xp), jp = E({}, fu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Yc = ne(jp), Qp = E({}, Fa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ji
    }), Zp = ne(Qp), Vp = E({}, ql, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Kp = ne(Vp), Jp = E({}, fu, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Wp = ne(Jp), $p = E({}, ql, {
      newState: 0,
      oldState: 0
    }), Fp = ne($p), kp = [
      9,
      13,
      27,
      32
    ], Wi = Ze && "CompositionEvent" in window, Pa = null;
    Ze && "documentMode" in document && (Pa = document.documentMode);
    var Pp = Ze && "TextEvent" in window && !Pa, qc = Ze && (!Wi || Pa && 8 < Pa && 11 >= Pa), Lc = " ", Xc = false;
    function Gc(t, e) {
      switch (t) {
        case "keyup":
          return kp.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function jc(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var sa = false;
    function Ip(t, e) {
      switch (t) {
        case "compositionend":
          return jc(e);
        case "keypress":
          return e.which !== 32 ? null : (Xc = true, Lc);
        case "textInput":
          return t = e.data, t === Lc && Xc ? null : t;
        default:
          return null;
      }
    }
    function tm(t, e) {
      if (sa) return t === "compositionend" || !Wi && Gc(t, e) ? (t = Uc(), au = Qi = ol = null, sa = false, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length) return e.char;
            if (e.which) return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return qc && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    var em = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function Qc(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!em[t.type] : e === "textarea";
    }
    function Zc(t, e, l, a) {
      ca ? oa ? oa.push(a) : oa = [
        a
      ] : ca = a, e = Fu(e, "onChange"), 0 < e.length && (l = new iu("onChange", "change", null, l, a), t.push({
        event: l,
        listeners: e
      }));
    }
    var Ia = null, tn = null;
    function lm(t) {
      Ah(t, 0);
    }
    function ru(t) {
      var e = Ja(t);
      if (Rc(e)) return t;
    }
    function Vc(t, e) {
      if (t === "change") return e;
    }
    var Kc = false;
    if (Ze) {
      var $i;
      if (Ze) {
        var Fi = "oninput" in document;
        if (!Fi) {
          var Jc = document.createElement("div");
          Jc.setAttribute("oninput", "return;"), Fi = typeof Jc.oninput == "function";
        }
        $i = Fi;
      } else $i = false;
      Kc = $i && (!document.documentMode || 9 < document.documentMode);
    }
    function Wc() {
      Ia && (Ia.detachEvent("onpropertychange", $c), tn = Ia = null);
    }
    function $c(t) {
      if (t.propertyName === "value" && ru(tn)) {
        var e = [];
        Zc(e, tn, t, Xi(t)), Nc(lm, e);
      }
    }
    function am(t, e, l) {
      t === "focusin" ? (Wc(), Ia = e, tn = l, Ia.attachEvent("onpropertychange", $c)) : t === "focusout" && Wc();
    }
    function nm(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return ru(tn);
    }
    function um(t, e) {
      if (t === "click") return ru(e);
    }
    function im(t, e) {
      if (t === "input" || t === "change") return ru(e);
    }
    function fm(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    var de = typeof Object.is == "function" ? Object.is : fm;
    function en(t, e) {
      if (de(t, e)) return true;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
      var l = Object.keys(t), a = Object.keys(e);
      if (l.length !== a.length) return false;
      for (a = 0; a < l.length; a++) {
        var n = l[a];
        if (!Ai.call(e, n) || !de(t[n], e[n])) return false;
      }
      return true;
    }
    function Fc(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function kc(t, e) {
      var l = Fc(t);
      t = 0;
      for (var a; l; ) {
        if (l.nodeType === 3) {
          if (a = t + l.textContent.length, t <= e && a >= e) return {
            node: l,
            offset: e - t
          };
          t = a;
        }
        t: {
          for (; l; ) {
            if (l.nextSibling) {
              l = l.nextSibling;
              break t;
            }
            l = l.parentNode;
          }
          l = void 0;
        }
        l = Fc(l);
      }
    }
    function Pc(t, e) {
      return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Pc(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
    }
    function Ic(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = eu(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var l = typeof e.contentWindow.location.href == "string";
        } catch {
          l = false;
        }
        if (l) t = e.contentWindow;
        else break;
        e = eu(t.document);
      }
      return e;
    }
    function ki(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    var rm = Ze && "documentMode" in document && 11 >= document.documentMode, ha = null, Pi = null, ln = null, Ii = false;
    function to(t, e, l) {
      var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      Ii || ha == null || ha !== eu(a) || (a = ha, "selectionStart" in a && ki(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), ln && en(ln, a) || (ln = a, a = Fu(Pi, "onSelect"), 0 < a.length && (e = new iu("onSelect", "select", null, e, l), t.push({
        event: e,
        listeners: a
      }), e.target = ha)));
    }
    function Ll(t, e) {
      var l = {};
      return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
    }
    var da = {
      animationend: Ll("Animation", "AnimationEnd"),
      animationiteration: Ll("Animation", "AnimationIteration"),
      animationstart: Ll("Animation", "AnimationStart"),
      transitionrun: Ll("Transition", "TransitionRun"),
      transitionstart: Ll("Transition", "TransitionStart"),
      transitioncancel: Ll("Transition", "TransitionCancel"),
      transitionend: Ll("Transition", "TransitionEnd")
    }, tf = {}, eo = {};
    Ze && (eo = document.createElement("div").style, "AnimationEvent" in window || (delete da.animationend.animation, delete da.animationiteration.animation, delete da.animationstart.animation), "TransitionEvent" in window || delete da.transitionend.transition);
    function Xl(t) {
      if (tf[t]) return tf[t];
      if (!da[t]) return t;
      var e = da[t], l;
      for (l in e) if (e.hasOwnProperty(l) && l in eo) return tf[t] = e[l];
      return t;
    }
    var lo = Xl("animationend"), ao = Xl("animationiteration"), no = Xl("animationstart"), cm = Xl("transitionrun"), om = Xl("transitionstart"), sm = Xl("transitioncancel"), uo = Xl("transitionend"), io = /* @__PURE__ */ new Map(), ef = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    ef.push("scrollEnd");
    function xe(t, e) {
      io.set(t, e), Yl(e, [
        t
      ]);
    }
    var cu = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
          error: t
        });
        if (!window.dispatchEvent(e)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, Ee = [], pa = 0, lf = 0;
    function ou() {
      for (var t = pa, e = lf = pa = 0; e < t; ) {
        var l = Ee[e];
        Ee[e++] = null;
        var a = Ee[e];
        Ee[e++] = null;
        var n = Ee[e];
        Ee[e++] = null;
        var u = Ee[e];
        if (Ee[e++] = null, a !== null && n !== null) {
          var r = a.pending;
          r === null ? n.next = n : (n.next = r.next, r.next = n), a.pending = n;
        }
        u !== 0 && fo(l, n, u);
      }
    }
    function su(t, e, l, a) {
      Ee[pa++] = t, Ee[pa++] = e, Ee[pa++] = l, Ee[pa++] = a, lf |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
    }
    function af(t, e, l, a) {
      return su(t, e, l, a), hu(t);
    }
    function Gl(t, e) {
      return su(t, null, null, e), hu(t);
    }
    function fo(t, e, l) {
      t.lanes |= l;
      var a = t.alternate;
      a !== null && (a.lanes |= l);
      for (var n = false, u = t.return; u !== null; ) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = true)), t = u, u = u.return;
      return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - he(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [
        e
      ] : a.push(e), e.lane = l | 536870912), u) : null;
    }
    function hu(t) {
      if (50 < Rn) throw Rn = 0, dr = null, Error(i(185));
      for (var e = t.return; e !== null; ) t = e, e = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    var ma = {};
    function hm(t, e, l, a) {
      this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function pe(t, e, l, a) {
      return new hm(t, e, l, a);
    }
    function nf(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function Ve(t, e) {
      var l = t.alternate;
      return l === null ? (l = pe(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
    }
    function ro(t, e) {
      t.flags &= 65011714;
      var l = t.alternate;
      return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }), t;
    }
    function du(t, e, l, a, n, u) {
      var r = 0;
      if (a = t, typeof t == "function") nf(t) && (r = 1);
      else if (typeof t == "string") r = gv(t, l, k.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else t: switch (t) {
        case K:
          return t = pe(31, l, e, n), t.elementType = K, t.lanes = u, t;
        case Q:
          return jl(l.children, n, u, e);
        case H:
          r = 8, n |= 24;
          break;
        case O:
          return t = pe(12, l, e, n | 2), t.elementType = O, t.lanes = u, t;
        case V:
          return t = pe(13, l, e, n), t.elementType = V, t.lanes = u, t;
        case F:
          return t = pe(19, l, e, n), t.elementType = F, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case x:
              r = 10;
              break t;
            case R:
              r = 9;
              break t;
            case Z:
              r = 11;
              break t;
            case b:
              r = 14;
              break t;
            case w:
              r = 16, a = null;
              break t;
          }
          r = 29, l = Error(i(130, t === null ? "null" : typeof t, "")), a = null;
      }
      return e = pe(r, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
    }
    function jl(t, e, l, a) {
      return t = pe(7, t, a, e), t.lanes = l, t;
    }
    function uf(t, e, l) {
      return t = pe(6, t, null, e), t.lanes = l, t;
    }
    function co(t) {
      var e = pe(18, null, null, 0);
      return e.stateNode = t, e;
    }
    function ff(t, e, l) {
      return e = pe(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, e;
    }
    var oo = /* @__PURE__ */ new WeakMap();
    function Te(t, e) {
      if (typeof t == "object" && t !== null) {
        var l = oo.get(t);
        return l !== void 0 ? l : (e = {
          value: t,
          source: e,
          stack: cc(e)
        }, oo.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: cc(e)
      };
    }
    var va = [], ga = 0, pu = null, an = 0, De = [], Re = 0, sl = null, He = 1, we = "";
    function Ke(t, e) {
      va[ga++] = an, va[ga++] = pu, pu = t, an = e;
    }
    function so(t, e, l) {
      De[Re++] = He, De[Re++] = we, De[Re++] = sl, sl = t;
      var a = He;
      t = we;
      var n = 32 - he(a) - 1;
      a &= ~(1 << n), l += 1;
      var u = 32 - he(e) + n;
      if (30 < u) {
        var r = n - n % 5;
        u = (a & (1 << r) - 1).toString(32), a >>= r, n -= r, He = 1 << 32 - he(e) + n | l << n | a, we = u + t;
      } else He = 1 << u | l << n | a, we = t;
    }
    function rf(t) {
      t.return !== null && (Ke(t, 1), so(t, 1, 0));
    }
    function cf(t) {
      for (; t === pu; ) pu = va[--ga], va[ga] = null, an = va[--ga], va[ga] = null;
      for (; t === sl; ) sl = De[--Re], De[Re] = null, we = De[--Re], De[Re] = null, He = De[--Re], De[Re] = null;
    }
    function ho(t, e) {
      De[Re++] = He, De[Re++] = we, De[Re++] = sl, He = e.id, we = e.overflow, sl = t;
    }
    var Ft = null, Mt = null, vt = false, hl = null, _e = false, of = Error(i(519));
    function dl(t) {
      var e = Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw nn(Te(e, t)), of;
    }
    function po(t) {
      var e = t.stateNode, l = t.type, a = t.memoizedProps;
      switch (e[$t] = t, e[ae] = a, l) {
        case "dialog":
          ht("cancel", e), ht("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          ht("load", e);
          break;
        case "video":
        case "audio":
          for (l = 0; l < An.length; l++) ht(An[l], e);
          break;
        case "source":
          ht("error", e);
          break;
        case "img":
        case "image":
        case "link":
          ht("error", e), ht("load", e);
          break;
        case "details":
          ht("toggle", e);
          break;
        case "input":
          ht("invalid", e), _c(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          ht("invalid", e);
          break;
        case "textarea":
          ht("invalid", e), Mc(e, a.value, a.defaultValue, a.children);
      }
      l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === true || Ch(e.textContent, l) ? (a.popover != null && (ht("beforetoggle", e), ht("toggle", e)), a.onScroll != null && ht("scroll", e), a.onScrollEnd != null && ht("scrollend", e), a.onClick != null && (e.onclick = Qe), e = true) : e = false, e || dl(t, true);
    }
    function mo(t) {
      for (Ft = t.return; Ft; ) switch (Ft.tag) {
        case 5:
        case 31:
        case 13:
          _e = false;
          return;
        case 27:
        case 3:
          _e = true;
          return;
        default:
          Ft = Ft.return;
      }
    }
    function ya(t) {
      if (t !== Ft) return false;
      if (!vt) return mo(t), vt = true, false;
      var e = t.tag, l;
      if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Mr(t.type, t.memoizedProps)), l = !l), l && Mt && dl(t), mo(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(317));
        Mt = Xh(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(317));
        Mt = Xh(t);
      } else e === 27 ? (e = Mt, Al(t.type) ? (t = Ur, Ur = null, Mt = t) : Mt = e) : Mt = Ft ? Me(t.stateNode.nextSibling) : null;
      return true;
    }
    function Ql() {
      Mt = Ft = null, vt = false;
    }
    function sf() {
      var t = hl;
      return t !== null && (re === null ? re = t : re.push.apply(re, t), hl = null), t;
    }
    function nn(t) {
      hl === null ? hl = [
        t
      ] : hl.push(t);
    }
    var hf = z(null), Zl = null, Je = null;
    function pl(t, e, l) {
      W(hf, e._currentValue), e._currentValue = l;
    }
    function We(t) {
      t._currentValue = hf.current, j(hf);
    }
    function df(t, e, l) {
      for (; t !== null; ) {
        var a = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
        t = t.return;
      }
    }
    function pf(t, e, l, a) {
      var n = t.child;
      for (n !== null && (n.return = t); n !== null; ) {
        var u = n.dependencies;
        if (u !== null) {
          var r = n.child;
          u = u.firstContext;
          t: for (; u !== null; ) {
            var s = u;
            u = n;
            for (var y = 0; y < e.length; y++) if (s.context === e[y]) {
              u.lanes |= l, s = u.alternate, s !== null && (s.lanes |= l), df(u.return, l, t), a || (r = null);
              break t;
            }
            u = s.next;
          }
        } else if (n.tag === 18) {
          if (r = n.return, r === null) throw Error(i(341));
          r.lanes |= l, u = r.alternate, u !== null && (u.lanes |= l), df(r, l, t), r = null;
        } else r = n.child;
        if (r !== null) r.return = n;
        else for (r = n; r !== null; ) {
          if (r === t) {
            r = null;
            break;
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, r = n;
            break;
          }
          r = r.return;
        }
        n = r;
      }
    }
    function Sa(t, e, l, a) {
      t = null;
      for (var n = e, u = false; n !== null; ) {
        if (!u) {
          if ((n.flags & 524288) !== 0) u = true;
          else if ((n.flags & 262144) !== 0) break;
        }
        if (n.tag === 10) {
          var r = n.alternate;
          if (r === null) throw Error(i(387));
          if (r = r.memoizedProps, r !== null) {
            var s = n.type;
            de(n.pendingProps.value, r.value) || (t !== null ? t.push(s) : t = [
              s
            ]);
          }
        } else if (n === bt.current) {
          if (r = n.alternate, r === null) throw Error(i(387));
          r.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Nn) : t = [
            Nn
          ]);
        }
        n = n.return;
      }
      t !== null && pf(e, t, l, a), e.flags |= 262144;
    }
    function mu(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!de(t.context._currentValue, t.memoizedValue)) return true;
        t = t.next;
      }
      return false;
    }
    function Vl(t) {
      Zl = t, Je = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function kt(t) {
      return vo(Zl, t);
    }
    function vu(t, e) {
      return Zl === null && Vl(t), vo(t, e);
    }
    function vo(t, e) {
      var l = e._currentValue;
      if (e = {
        context: e,
        memoizedValue: l,
        next: null
      }, Je === null) {
        if (t === null) throw Error(i(308));
        Je = e, t.dependencies = {
          lanes: 0,
          firstContext: e
        }, t.flags |= 524288;
      } else Je = Je.next = e;
      return l;
    }
    var dm = typeof AbortController < "u" ? AbortController : function() {
      var t = [], e = this.signal = {
        aborted: false,
        addEventListener: function(l, a) {
          t.push(a);
        }
      };
      this.abort = function() {
        e.aborted = true, t.forEach(function(l) {
          return l();
        });
      };
    }, pm = f.unstable_scheduleCallback, mm = f.unstable_NormalPriority, Xt = {
      $$typeof: x,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function mf() {
      return {
        controller: new dm(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function un(t) {
      t.refCount--, t.refCount === 0 && pm(mm, function() {
        t.controller.abort();
      });
    }
    var fn = null, vf = 0, ba = 0, za = null;
    function vm(t, e) {
      if (fn === null) {
        var l = fn = [];
        vf = 0, ba = Sr(), za = {
          status: "pending",
          value: void 0,
          then: function(a) {
            l.push(a);
          }
        };
      }
      return vf++, e.then(go, go), e;
    }
    function go() {
      if (--vf === 0 && fn !== null) {
        za !== null && (za.status = "fulfilled");
        var t = fn;
        fn = null, ba = 0, za = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function gm(t, e) {
      var l = [], a = {
        status: "pending",
        value: null,
        reason: null,
        then: function(n) {
          l.push(n);
        }
      };
      return t.then(function() {
        a.status = "fulfilled", a.value = e;
        for (var n = 0; n < l.length; n++) (0, l[n])(e);
      }, function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++) (0, l[n])(void 0);
      }), a;
    }
    var yo = N.S;
    N.S = function(t, e) {
      eh = oe(), typeof e == "object" && e !== null && typeof e.then == "function" && vm(t, e), yo !== null && yo(t, e);
    };
    var Kl = z(null);
    function gf() {
      var t = Kl.current;
      return t !== null ? t : At.pooledCache;
    }
    function gu(t, e) {
      e === null ? W(Kl, Kl.current) : W(Kl, e.pool);
    }
    function So() {
      var t = gf();
      return t === null ? null : {
        parent: Xt._currentValue,
        pool: t
      };
    }
    var Ea = Error(i(460)), yf = Error(i(474)), yu = Error(i(542)), Su = {
      then: function() {
      }
    };
    function bo(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function zo(t, e, l) {
      switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Qe, Qe), e = l), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, To(t), t;
        default:
          if (typeof e.status == "string") e.then(Qe, Qe);
          else {
            if (t = At, t !== null && 100 < t.shellSuspendCounter) throw Error(i(482));
            t = e, t.status = "pending", t.then(function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = a;
              }
            }, function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = a;
              }
            });
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw t = e.reason, To(t), t;
          }
          throw Wl = e, Ea;
      }
    }
    function Jl(t) {
      try {
        var e = t._init;
        return e(t._payload);
      } catch (l) {
        throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Wl = l, Ea) : l;
      }
    }
    var Wl = null;
    function Eo() {
      if (Wl === null) throw Error(i(459));
      var t = Wl;
      return Wl = null, t;
    }
    function To(t) {
      if (t === Ea || t === yu) throw Error(i(483));
    }
    var Ta = null, rn = 0;
    function bu(t) {
      var e = rn;
      return rn += 1, Ta === null && (Ta = []), zo(Ta, t, e);
    }
    function cn(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function zu(t, e) {
      throw e.$$typeof === U ? Error(i(525)) : (t = Object.prototype.toString.call(e), Error(i(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
    }
    function Do(t) {
      function e(D, S) {
        if (t) {
          var _ = D.deletions;
          _ === null ? (D.deletions = [
            S
          ], D.flags |= 16) : _.push(S);
        }
      }
      function l(D, S) {
        if (!t) return null;
        for (; S !== null; ) e(D, S), S = S.sibling;
        return null;
      }
      function a(D) {
        for (var S = /* @__PURE__ */ new Map(); D !== null; ) D.key !== null ? S.set(D.key, D) : S.set(D.index, D), D = D.sibling;
        return S;
      }
      function n(D, S) {
        return D = Ve(D, S), D.index = 0, D.sibling = null, D;
      }
      function u(D, S, _) {
        return D.index = _, t ? (_ = D.alternate, _ !== null ? (_ = _.index, _ < S ? (D.flags |= 67108866, S) : _) : (D.flags |= 67108866, S)) : (D.flags |= 1048576, S);
      }
      function r(D) {
        return t && D.alternate === null && (D.flags |= 67108866), D;
      }
      function s(D, S, _, L) {
        return S === null || S.tag !== 6 ? (S = uf(_, D.mode, L), S.return = D, S) : (S = n(S, _), S.return = D, S);
      }
      function y(D, S, _, L) {
        var tt = _.type;
        return tt === Q ? Y(D, S, _.props.children, L, _.key) : S !== null && (S.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === w && Jl(tt) === S.type) ? (S = n(S, _.props), cn(S, _), S.return = D, S) : (S = du(_.type, _.key, _.props, null, D.mode, L), cn(S, _), S.return = D, S);
      }
      function A(D, S, _, L) {
        return S === null || S.tag !== 4 || S.stateNode.containerInfo !== _.containerInfo || S.stateNode.implementation !== _.implementation ? (S = ff(_, D.mode, L), S.return = D, S) : (S = n(S, _.children || []), S.return = D, S);
      }
      function Y(D, S, _, L, tt) {
        return S === null || S.tag !== 7 ? (S = jl(_, D.mode, L, tt), S.return = D, S) : (S = n(S, _), S.return = D, S);
      }
      function G(D, S, _) {
        if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint") return S = uf("" + S, D.mode, _), S.return = D, S;
        if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case B:
              return _ = du(S.type, S.key, S.props, null, D.mode, _), cn(_, S), _.return = D, _;
            case q:
              return S = ff(S, D.mode, _), S.return = D, S;
            case w:
              return S = Jl(S), G(D, S, _);
          }
          if (Lt(S) || at(S)) return S = jl(S, D.mode, _, null), S.return = D, S;
          if (typeof S.then == "function") return G(D, bu(S), _);
          if (S.$$typeof === x) return G(D, vu(D, S), _);
          zu(D, S);
        }
        return null;
      }
      function M(D, S, _, L) {
        var tt = S !== null ? S.key : null;
        if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint") return tt !== null ? null : s(D, S, "" + _, L);
        if (typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case B:
              return _.key === tt ? y(D, S, _, L) : null;
            case q:
              return _.key === tt ? A(D, S, _, L) : null;
            case w:
              return _ = Jl(_), M(D, S, _, L);
          }
          if (Lt(_) || at(_)) return tt !== null ? null : Y(D, S, _, L, null);
          if (typeof _.then == "function") return M(D, S, bu(_), L);
          if (_.$$typeof === x) return M(D, S, vu(D, _), L);
          zu(D, _);
        }
        return null;
      }
      function C(D, S, _, L, tt) {
        if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint") return D = D.get(_) || null, s(S, D, "" + L, tt);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case B:
              return D = D.get(L.key === null ? _ : L.key) || null, y(S, D, L, tt);
            case q:
              return D = D.get(L.key === null ? _ : L.key) || null, A(S, D, L, tt);
            case w:
              return L = Jl(L), C(D, S, _, L, tt);
          }
          if (Lt(L) || at(L)) return D = D.get(_) || null, Y(S, D, L, tt, null);
          if (typeof L.then == "function") return C(D, S, _, bu(L), tt);
          if (L.$$typeof === x) return C(D, S, _, vu(S, L), tt);
          zu(S, L);
        }
        return null;
      }
      function $(D, S, _, L) {
        for (var tt = null, gt = null, P = S, ft = S = 0, pt = null; P !== null && ft < _.length; ft++) {
          P.index > ft ? (pt = P, P = null) : pt = P.sibling;
          var yt = M(D, P, _[ft], L);
          if (yt === null) {
            P === null && (P = pt);
            break;
          }
          t && P && yt.alternate === null && e(D, P), S = u(yt, S, ft), gt === null ? tt = yt : gt.sibling = yt, gt = yt, P = pt;
        }
        if (ft === _.length) return l(D, P), vt && Ke(D, ft), tt;
        if (P === null) {
          for (; ft < _.length; ft++) P = G(D, _[ft], L), P !== null && (S = u(P, S, ft), gt === null ? tt = P : gt.sibling = P, gt = P);
          return vt && Ke(D, ft), tt;
        }
        for (P = a(P); ft < _.length; ft++) pt = C(P, D, ft, _[ft], L), pt !== null && (t && pt.alternate !== null && P.delete(pt.key === null ? ft : pt.key), S = u(pt, S, ft), gt === null ? tt = pt : gt.sibling = pt, gt = pt);
        return t && P.forEach(function(Nl) {
          return e(D, Nl);
        }), vt && Ke(D, ft), tt;
      }
      function lt(D, S, _, L) {
        if (_ == null) throw Error(i(151));
        for (var tt = null, gt = null, P = S, ft = S = 0, pt = null, yt = _.next(); P !== null && !yt.done; ft++, yt = _.next()) {
          P.index > ft ? (pt = P, P = null) : pt = P.sibling;
          var Nl = M(D, P, yt.value, L);
          if (Nl === null) {
            P === null && (P = pt);
            break;
          }
          t && P && Nl.alternate === null && e(D, P), S = u(Nl, S, ft), gt === null ? tt = Nl : gt.sibling = Nl, gt = Nl, P = pt;
        }
        if (yt.done) return l(D, P), vt && Ke(D, ft), tt;
        if (P === null) {
          for (; !yt.done; ft++, yt = _.next()) yt = G(D, yt.value, L), yt !== null && (S = u(yt, S, ft), gt === null ? tt = yt : gt.sibling = yt, gt = yt);
          return vt && Ke(D, ft), tt;
        }
        for (P = a(P); !yt.done; ft++, yt = _.next()) yt = C(P, D, ft, yt.value, L), yt !== null && (t && yt.alternate !== null && P.delete(yt.key === null ? ft : yt.key), S = u(yt, S, ft), gt === null ? tt = yt : gt.sibling = yt, gt = yt);
        return t && P.forEach(function(Mv) {
          return e(D, Mv);
        }), vt && Ke(D, ft), tt;
      }
      function _t(D, S, _, L) {
        if (typeof _ == "object" && _ !== null && _.type === Q && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case B:
              t: {
                for (var tt = _.key; S !== null; ) {
                  if (S.key === tt) {
                    if (tt = _.type, tt === Q) {
                      if (S.tag === 7) {
                        l(D, S.sibling), L = n(S, _.props.children), L.return = D, D = L;
                        break t;
                      }
                    } else if (S.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === w && Jl(tt) === S.type) {
                      l(D, S.sibling), L = n(S, _.props), cn(L, _), L.return = D, D = L;
                      break t;
                    }
                    l(D, S);
                    break;
                  } else e(D, S);
                  S = S.sibling;
                }
                _.type === Q ? (L = jl(_.props.children, D.mode, L, _.key), L.return = D, D = L) : (L = du(_.type, _.key, _.props, null, D.mode, L), cn(L, _), L.return = D, D = L);
              }
              return r(D);
            case q:
              t: {
                for (tt = _.key; S !== null; ) {
                  if (S.key === tt) if (S.tag === 4 && S.stateNode.containerInfo === _.containerInfo && S.stateNode.implementation === _.implementation) {
                    l(D, S.sibling), L = n(S, _.children || []), L.return = D, D = L;
                    break t;
                  } else {
                    l(D, S);
                    break;
                  }
                  else e(D, S);
                  S = S.sibling;
                }
                L = ff(_, D.mode, L), L.return = D, D = L;
              }
              return r(D);
            case w:
              return _ = Jl(_), _t(D, S, _, L);
          }
          if (Lt(_)) return $(D, S, _, L);
          if (at(_)) {
            if (tt = at(_), typeof tt != "function") throw Error(i(150));
            return _ = tt.call(_), lt(D, S, _, L);
          }
          if (typeof _.then == "function") return _t(D, S, bu(_), L);
          if (_.$$typeof === x) return _t(D, S, vu(D, _), L);
          zu(D, _);
        }
        return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, S !== null && S.tag === 6 ? (l(D, S.sibling), L = n(S, _), L.return = D, D = L) : (l(D, S), L = uf(_, D.mode, L), L.return = D, D = L), r(D)) : l(D, S);
      }
      return function(D, S, _, L) {
        try {
          rn = 0;
          var tt = _t(D, S, _, L);
          return Ta = null, tt;
        } catch (P) {
          if (P === Ea || P === yu) throw P;
          var gt = pe(29, P, null, D.mode);
          return gt.lanes = L, gt.return = D, gt;
        } finally {
        }
      };
    }
    var $l = Do(true), Ro = Do(false), ml = false;
    function Sf(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function bf(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function vl(t) {
      return {
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function gl(t, e, l) {
      var a = t.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (St & 2) !== 0) {
        var n = a.pending;
        return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = hu(t), fo(t, null, l), e;
      }
      return su(t, a, e, l), hu(t);
    }
    function on(t, e, l) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
        var a = e.lanes;
        a &= t.pendingLanes, l |= a, e.lanes = l, mc(t, l);
      }
    }
    function zf(t, e) {
      var l = t.updateQueue, a = t.alternate;
      if (a !== null && (a = a.updateQueue, l === a)) {
        var n = null, u = null;
        if (l = l.firstBaseUpdate, l !== null) {
          do {
            var r = {
              lane: l.lane,
              tag: l.tag,
              payload: l.payload,
              callback: null,
              next: null
            };
            u === null ? n = u = r : u = u.next = r, l = l.next;
          } while (l !== null);
          u === null ? n = u = e : u = u.next = e;
        } else n = u = e;
        l = {
          baseState: a.baseState,
          firstBaseUpdate: n,
          lastBaseUpdate: u,
          shared: a.shared,
          callbacks: a.callbacks
        }, t.updateQueue = l;
        return;
      }
      t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
    }
    var Ef = false;
    function sn() {
      if (Ef) {
        var t = za;
        if (t !== null) throw t;
      }
    }
    function hn(t, e, l, a) {
      Ef = false;
      var n = t.updateQueue;
      ml = false;
      var u = n.firstBaseUpdate, r = n.lastBaseUpdate, s = n.shared.pending;
      if (s !== null) {
        n.shared.pending = null;
        var y = s, A = y.next;
        y.next = null, r === null ? u = A : r.next = A, r = y;
        var Y = t.alternate;
        Y !== null && (Y = Y.updateQueue, s = Y.lastBaseUpdate, s !== r && (s === null ? Y.firstBaseUpdate = A : s.next = A, Y.lastBaseUpdate = y));
      }
      if (u !== null) {
        var G = n.baseState;
        r = 0, Y = A = y = null, s = u;
        do {
          var M = s.lane & -536870913, C = M !== s.lane;
          if (C ? (dt & M) === M : (a & M) === M) {
            M !== 0 && M === ba && (Ef = true), Y !== null && (Y = Y.next = {
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: null,
              next: null
            });
            t: {
              var $ = t, lt = s;
              M = e;
              var _t = l;
              switch (lt.tag) {
                case 1:
                  if ($ = lt.payload, typeof $ == "function") {
                    G = $.call(_t, G, M);
                    break t;
                  }
                  G = $;
                  break t;
                case 3:
                  $.flags = $.flags & -65537 | 128;
                case 0:
                  if ($ = lt.payload, M = typeof $ == "function" ? $.call(_t, G, M) : $, M == null) break t;
                  G = E({}, G, M);
                  break t;
                case 2:
                  ml = true;
              }
            }
            M = s.callback, M !== null && (t.flags |= 64, C && (t.flags |= 8192), C = n.callbacks, C === null ? n.callbacks = [
              M
            ] : C.push(M));
          } else C = {
            lane: M,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, Y === null ? (A = Y = C, y = G) : Y = Y.next = C, r |= M;
          if (s = s.next, s === null) {
            if (s = n.shared.pending, s === null) break;
            C = s, s = C.next, C.next = null, n.lastBaseUpdate = C, n.shared.pending = null;
          }
        } while (true);
        Y === null && (y = G), n.baseState = y, n.firstBaseUpdate = A, n.lastBaseUpdate = Y, u === null && (n.shared.lanes = 0), El |= r, t.lanes = r, t.memoizedState = G;
      }
    }
    function _o(t, e) {
      if (typeof t != "function") throw Error(i(191, t));
      t.call(e);
    }
    function Ao(t, e) {
      var l = t.callbacks;
      if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) _o(l[t], e);
    }
    var Da = z(null), Eu = z(0);
    function Mo(t, e) {
      t = al, W(Eu, t), W(Da, e), al = t | e.baseLanes;
    }
    function Tf() {
      W(Eu, al), W(Da, Da.current);
    }
    function Df() {
      al = Eu.current, j(Da), j(Eu);
    }
    var me = z(null), Ae = null;
    function yl(t) {
      var e = t.alternate;
      W(Bt, Bt.current & 1), W(me, t), Ae === null && (e === null || Da.current !== null || e.memoizedState !== null) && (Ae = t);
    }
    function Rf(t) {
      W(Bt, Bt.current), W(me, t), Ae === null && (Ae = t);
    }
    function Oo(t) {
      t.tag === 22 ? (W(Bt, Bt.current), W(me, t), Ae === null && (Ae = t)) : Sl();
    }
    function Sl() {
      W(Bt, Bt.current), W(me, me.current);
    }
    function ve(t) {
      j(me), Ae === t && (Ae = null), j(Bt);
    }
    var Bt = z(0);
    function Tu(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var l = e.memoizedState;
          if (l !== null && (l = l.dehydrated, l === null || Cr(l) || Nr(l))) return e;
        } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return null;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      return null;
    }
    var $e = 0, it = null, Dt = null, Gt = null, Du = false, Ra = false, Fl = false, Ru = 0, dn = 0, _a = null, ym = 0;
    function Nt() {
      throw Error(i(321));
    }
    function _f(t, e) {
      if (e === null) return false;
      for (var l = 0; l < e.length && l < t.length; l++) if (!de(t[l], e[l])) return false;
      return true;
    }
    function Af(t, e, l, a, n, u) {
      return $e = u, it = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, N.H = t === null || t.memoizedState === null ? hs : jf, Fl = false, u = l(a, n), Fl = false, Ra && (u = Co(e, l, a, n)), xo(t), u;
    }
    function xo(t) {
      N.H = vn;
      var e = Dt !== null && Dt.next !== null;
      if ($e = 0, Gt = Dt = it = null, Du = false, dn = 0, _a = null, e) throw Error(i(300));
      t === null || jt || (t = t.dependencies, t !== null && mu(t) && (jt = true));
    }
    function Co(t, e, l, a) {
      it = t;
      var n = 0;
      do {
        if (Ra && (_a = null), dn = 0, Ra = false, 25 <= n) throw Error(i(301));
        if (n += 1, Gt = Dt = null, t.updateQueue != null) {
          var u = t.updateQueue;
          u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
        }
        N.H = ds, u = e(l, a);
      } while (Ra);
      return u;
    }
    function Sm() {
      var t = N.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? pn(e) : e, t = t.useState()[0], (Dt !== null ? Dt.memoizedState : null) !== t && (it.flags |= 1024), e;
    }
    function Mf() {
      var t = Ru !== 0;
      return Ru = 0, t;
    }
    function Of(t, e, l) {
      e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
    }
    function xf(t) {
      if (Du) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        Du = false;
      }
      $e = 0, Gt = Dt = it = null, Ra = false, dn = Ru = 0, _a = null;
    }
    function le() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Gt === null ? it.memoizedState = Gt = t : Gt = Gt.next = t, Gt;
    }
    function Yt() {
      if (Dt === null) {
        var t = it.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = Dt.next;
      var e = Gt === null ? it.memoizedState : Gt.next;
      if (e !== null) Gt = e, Dt = t;
      else {
        if (t === null) throw it.alternate === null ? Error(i(467)) : Error(i(310));
        Dt = t, t = {
          memoizedState: Dt.memoizedState,
          baseState: Dt.baseState,
          baseQueue: Dt.baseQueue,
          queue: Dt.queue,
          next: null
        }, Gt === null ? it.memoizedState = Gt = t : Gt = Gt.next = t;
      }
      return Gt;
    }
    function _u() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function pn(t) {
      var e = dn;
      return dn += 1, _a === null && (_a = []), t = zo(_a, t, e), e = it, (Gt === null ? e.memoizedState : Gt.next) === null && (e = e.alternate, N.H = e === null || e.memoizedState === null ? hs : jf), t;
    }
    function Au(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return pn(t);
        if (t.$$typeof === x) return kt(t);
      }
      throw Error(i(438, String(t)));
    }
    function Cf(t) {
      var e = null, l = it.updateQueue;
      if (l !== null && (e = l.memoCache), e == null) {
        var a = it.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
          data: a.data.map(function(n) {
            return n.slice();
          }),
          index: 0
        })));
      }
      if (e == null && (e = {
        data: [],
        index: 0
      }), l === null && (l = _u(), it.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0) for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = et;
      return e.index++, l;
    }
    function Fe(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function Mu(t) {
      var e = Yt();
      return Nf(e, Dt, t);
    }
    function Nf(t, e, l) {
      var a = t.queue;
      if (a === null) throw Error(i(311));
      a.lastRenderedReducer = l;
      var n = t.baseQueue, u = a.pending;
      if (u !== null) {
        if (n !== null) {
          var r = n.next;
          n.next = u.next, u.next = r;
        }
        e.baseQueue = n = u, a.pending = null;
      }
      if (u = t.baseState, n === null) t.memoizedState = u;
      else {
        e = n.next;
        var s = r = null, y = null, A = e, Y = false;
        do {
          var G = A.lane & -536870913;
          if (G !== A.lane ? (dt & G) === G : ($e & G) === G) {
            var M = A.revertLane;
            if (M === 0) y !== null && (y = y.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }), G === ba && (Y = true);
            else if (($e & M) === M) {
              A = A.next, M === ba && (Y = true);
              continue;
            } else G = {
              lane: 0,
              revertLane: A.revertLane,
              gesture: null,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }, y === null ? (s = y = G, r = u) : y = y.next = G, it.lanes |= M, El |= M;
            G = A.action, Fl && l(u, G), u = A.hasEagerState ? A.eagerState : l(u, G);
          } else M = {
            lane: G,
            revertLane: A.revertLane,
            gesture: A.gesture,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          }, y === null ? (s = y = M, r = u) : y = y.next = M, it.lanes |= G, El |= G;
          A = A.next;
        } while (A !== null && A !== e);
        if (y === null ? r = u : y.next = s, !de(u, t.memoizedState) && (jt = true, Y && (l = za, l !== null))) throw l;
        t.memoizedState = u, t.baseState = r, t.baseQueue = y, a.lastRenderedState = u;
      }
      return n === null && (a.lanes = 0), [
        t.memoizedState,
        a.dispatch
      ];
    }
    function Uf(t) {
      var e = Yt(), l = e.queue;
      if (l === null) throw Error(i(311));
      l.lastRenderedReducer = t;
      var a = l.dispatch, n = l.pending, u = e.memoizedState;
      if (n !== null) {
        l.pending = null;
        var r = n = n.next;
        do
          u = t(u, r.action), r = r.next;
        while (r !== n);
        de(u, e.memoizedState) || (jt = true), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
      }
      return [
        u,
        a
      ];
    }
    function No(t, e, l) {
      var a = it, n = Yt(), u = vt;
      if (u) {
        if (l === void 0) throw Error(i(407));
        l = l();
      } else l = e();
      var r = !de((Dt || n).memoizedState, l);
      if (r && (n.memoizedState = l, jt = true), n = n.queue, Bf(wo.bind(null, a, n, t), [
        t
      ]), n.getSnapshot !== e || r || Gt !== null && Gt.memoizedState.tag & 1) {
        if (a.flags |= 2048, Aa(9, {
          destroy: void 0
        }, Ho.bind(null, a, n, l, e), null), At === null) throw Error(i(349));
        u || ($e & 127) !== 0 || Uo(a, e, l);
      }
      return l;
    }
    function Uo(t, e, l) {
      t.flags |= 16384, t = {
        getSnapshot: e,
        value: l
      }, e = it.updateQueue, e === null ? (e = _u(), it.updateQueue = e, e.stores = [
        t
      ]) : (l = e.stores, l === null ? e.stores = [
        t
      ] : l.push(t));
    }
    function Ho(t, e, l, a) {
      e.value = l, e.getSnapshot = a, Bo(e) && Yo(t);
    }
    function wo(t, e, l) {
      return l(function() {
        Bo(e) && Yo(t);
      });
    }
    function Bo(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var l = e();
        return !de(t, l);
      } catch {
        return true;
      }
    }
    function Yo(t) {
      var e = Gl(t, 2);
      e !== null && ce(e, t, 2);
    }
    function Hf(t) {
      var e = le();
      if (typeof t == "function") {
        var l = t;
        if (t = l(), Fl) {
          rl(true);
          try {
            l();
          } finally {
            rl(false);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fe,
        lastRenderedState: t
      }, e;
    }
    function qo(t, e, l, a) {
      return t.baseState = l, Nf(t, Dt, typeof a == "function" ? a : Fe);
    }
    function bm(t, e, l, a, n) {
      if (Cu(t)) throw Error(i(485));
      if (t = e.action, t !== null) {
        var u = {
          payload: n,
          action: t,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(r) {
            u.listeners.push(r);
          }
        };
        N.T !== null ? l(true) : u.isTransition = false, a(u), l = e.pending, l === null ? (u.next = e.pending = u, Lo(e, u)) : (u.next = l.next, e.pending = l.next = u);
      }
    }
    function Lo(t, e) {
      var l = e.action, a = e.payload, n = t.state;
      if (e.isTransition) {
        var u = N.T, r = {};
        N.T = r;
        try {
          var s = l(n, a), y = N.S;
          y !== null && y(r, s), Xo(t, e, s);
        } catch (A) {
          wf(t, e, A);
        } finally {
          u !== null && r.types !== null && (u.types = r.types), N.T = u;
        }
      } else try {
        u = l(n, a), Xo(t, e, u);
      } catch (A) {
        wf(t, e, A);
      }
    }
    function Xo(t, e, l) {
      l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
        Go(t, e, a);
      }, function(a) {
        return wf(t, e, a);
      }) : Go(t, e, l);
    }
    function Go(t, e, l) {
      e.status = "fulfilled", e.value = l, jo(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Lo(t, l)));
    }
    function wf(t, e, l) {
      var a = t.pending;
      if (t.pending = null, a !== null) {
        a = a.next;
        do
          e.status = "rejected", e.reason = l, jo(e), e = e.next;
        while (e !== a);
      }
      t.action = null;
    }
    function jo(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function Qo(t, e) {
      return e;
    }
    function Zo(t, e) {
      if (vt) {
        var l = At.formState;
        if (l !== null) {
          t: {
            var a = it;
            if (vt) {
              if (Mt) {
                e: {
                  for (var n = Mt, u = _e; n.nodeType !== 8; ) {
                    if (!u) {
                      n = null;
                      break e;
                    }
                    if (n = Me(n.nextSibling), n === null) {
                      n = null;
                      break e;
                    }
                  }
                  u = n.data, n = u === "F!" || u === "F" ? n : null;
                }
                if (n) {
                  Mt = Me(n.nextSibling), a = n.data === "F!";
                  break t;
                }
              }
              dl(a);
            }
            a = false;
          }
          a && (e = l[0]);
        }
      }
      return l = le(), l.memoizedState = l.baseState = e, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qo,
        lastRenderedState: e
      }, l.queue = a, l = cs.bind(null, it, a), a.dispatch = l, a = Hf(false), u = Gf.bind(null, it, false, a.queue), a = le(), n = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, a.queue = n, l = bm.bind(null, it, n, u, l), n.dispatch = l, a.memoizedState = t, [
        e,
        l,
        false
      ];
    }
    function Vo(t) {
      var e = Yt();
      return Ko(e, Dt, t);
    }
    function Ko(t, e, l) {
      if (e = Nf(t, e, Qo)[0], t = Mu(Fe)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
        var a = pn(e);
      } catch (r) {
        throw r === Ea ? yu : r;
      }
      else a = e;
      e = Yt();
      var n = e.queue, u = n.dispatch;
      return l !== e.memoizedState && (it.flags |= 2048, Aa(9, {
        destroy: void 0
      }, zm.bind(null, n, l), null)), [
        a,
        u,
        t
      ];
    }
    function zm(t, e) {
      t.action = e;
    }
    function Jo(t) {
      var e = Yt(), l = Dt;
      if (l !== null) return Ko(e, l, t);
      Yt(), e = e.memoizedState, l = Yt();
      var a = l.queue.dispatch;
      return l.memoizedState = t, [
        e,
        a,
        false
      ];
    }
    function Aa(t, e, l, a) {
      return t = {
        tag: t,
        create: l,
        deps: a,
        inst: e,
        next: null
      }, e = it.updateQueue, e === null && (e = _u(), it.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
    }
    function Wo() {
      return Yt().memoizedState;
    }
    function Ou(t, e, l, a) {
      var n = le();
      it.flags |= t, n.memoizedState = Aa(1 | e, {
        destroy: void 0
      }, l, a === void 0 ? null : a);
    }
    function xu(t, e, l, a) {
      var n = Yt();
      a = a === void 0 ? null : a;
      var u = n.memoizedState.inst;
      Dt !== null && a !== null && _f(a, Dt.memoizedState.deps) ? n.memoizedState = Aa(e, u, l, a) : (it.flags |= t, n.memoizedState = Aa(1 | e, u, l, a));
    }
    function $o(t, e) {
      Ou(8390656, 8, t, e);
    }
    function Bf(t, e) {
      xu(2048, 8, t, e);
    }
    function Em(t) {
      it.flags |= 4;
      var e = it.updateQueue;
      if (e === null) e = _u(), it.updateQueue = e, e.events = [
        t
      ];
      else {
        var l = e.events;
        l === null ? e.events = [
          t
        ] : l.push(t);
      }
    }
    function Fo(t) {
      var e = Yt().memoizedState;
      return Em({
        ref: e,
        nextImpl: t
      }), function() {
        if ((St & 2) !== 0) throw Error(i(440));
        return e.impl.apply(void 0, arguments);
      };
    }
    function ko(t, e) {
      return xu(4, 2, t, e);
    }
    function Po(t, e) {
      return xu(4, 4, t, e);
    }
    function Io(t, e) {
      if (typeof e == "function") {
        t = t();
        var l = e(t);
        return function() {
          typeof l == "function" ? l() : e(null);
        };
      }
      if (e != null) return t = t(), e.current = t, function() {
        e.current = null;
      };
    }
    function ts(t, e, l) {
      l = l != null ? l.concat([
        t
      ]) : null, xu(4, 4, Io.bind(null, e, t), l);
    }
    function Yf() {
    }
    function es(t, e) {
      var l = Yt();
      e = e === void 0 ? null : e;
      var a = l.memoizedState;
      return e !== null && _f(e, a[1]) ? a[0] : (l.memoizedState = [
        t,
        e
      ], t);
    }
    function ls(t, e) {
      var l = Yt();
      e = e === void 0 ? null : e;
      var a = l.memoizedState;
      if (e !== null && _f(e, a[1])) return a[0];
      if (a = t(), Fl) {
        rl(true);
        try {
          t();
        } finally {
          rl(false);
        }
      }
      return l.memoizedState = [
        a,
        e
      ], a;
    }
    function qf(t, e, l) {
      return l === void 0 || ($e & 1073741824) !== 0 && (dt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = ah(), it.lanes |= t, El |= t, l);
    }
    function as(t, e, l, a) {
      return de(l, e) ? l : Da.current !== null ? (t = qf(t, l, a), de(t, e) || (jt = true), t) : ($e & 42) === 0 || ($e & 1073741824) !== 0 && (dt & 261930) === 0 ? (jt = true, t.memoizedState = l) : (t = ah(), it.lanes |= t, El |= t, e);
    }
    function ns(t, e, l, a, n) {
      var u = J.p;
      J.p = u !== 0 && 8 > u ? u : 8;
      var r = N.T, s = {};
      N.T = s, Gf(t, false, e, l);
      try {
        var y = n(), A = N.S;
        if (A !== null && A(s, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          var Y = gm(y, a);
          mn(t, e, Y, Se(t));
        } else mn(t, e, a, Se(t));
      } catch (G) {
        mn(t, e, {
          then: function() {
          },
          status: "rejected",
          reason: G
        }, Se());
      } finally {
        J.p = u, r !== null && s.types !== null && (r.types = s.types), N.T = r;
      }
    }
    function Tm() {
    }
    function Lf(t, e, l, a) {
      if (t.tag !== 5) throw Error(i(476));
      var n = us(t).queue;
      ns(t, n, e, I, l === null ? Tm : function() {
        return is(t), l(a);
      });
    }
    function us(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: I,
        baseState: I,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Fe,
          lastRenderedState: I
        },
        next: null
      };
      var l = {};
      return e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Fe,
          lastRenderedState: l
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function is(t) {
      var e = us(t);
      e.next === null && (e = t.alternate.memoizedState), mn(t, e.next.queue, {}, Se());
    }
    function Xf() {
      return kt(Nn);
    }
    function fs() {
      return Yt().memoizedState;
    }
    function rs() {
      return Yt().memoizedState;
    }
    function Dm(t) {
      for (var e = t.return; e !== null; ) {
        switch (e.tag) {
          case 24:
          case 3:
            var l = Se();
            t = vl(l);
            var a = gl(e, t, l);
            a !== null && (ce(a, e, l), on(a, e, l)), e = {
              cache: mf()
            }, t.payload = e;
            return;
        }
        e = e.return;
      }
    }
    function Rm(t, e, l) {
      var a = Se();
      l = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Cu(t) ? os(e, l) : (l = af(t, e, l, a), l !== null && (ce(l, t, a), ss(l, e, a)));
    }
    function cs(t, e, l) {
      var a = Se();
      mn(t, e, l, a);
    }
    function mn(t, e, l, a) {
      var n = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Cu(t)) os(e, n);
      else {
        var u = t.alternate;
        if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
          var r = e.lastRenderedState, s = u(r, l);
          if (n.hasEagerState = true, n.eagerState = s, de(s, r)) return su(t, e, n, 0), At === null && ou(), false;
        } catch {
        } finally {
        }
        if (l = af(t, e, n, a), l !== null) return ce(l, t, a), ss(l, e, a), true;
      }
      return false;
    }
    function Gf(t, e, l, a) {
      if (a = {
        lane: 2,
        revertLane: Sr(),
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Cu(t)) {
        if (e) throw Error(i(479));
      } else e = af(t, l, a, 2), e !== null && ce(e, t, 2);
    }
    function Cu(t) {
      var e = t.alternate;
      return t === it || e !== null && e === it;
    }
    function os(t, e) {
      Ra = Du = true;
      var l = t.pending;
      l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
    }
    function ss(t, e, l) {
      if ((l & 4194048) !== 0) {
        var a = e.lanes;
        a &= t.pendingLanes, l |= a, e.lanes = l, mc(t, l);
      }
    }
    var vn = {
      readContext: kt,
      use: Au,
      useCallback: Nt,
      useContext: Nt,
      useEffect: Nt,
      useImperativeHandle: Nt,
      useLayoutEffect: Nt,
      useInsertionEffect: Nt,
      useMemo: Nt,
      useReducer: Nt,
      useRef: Nt,
      useState: Nt,
      useDebugValue: Nt,
      useDeferredValue: Nt,
      useTransition: Nt,
      useSyncExternalStore: Nt,
      useId: Nt,
      useHostTransitionStatus: Nt,
      useFormState: Nt,
      useActionState: Nt,
      useOptimistic: Nt,
      useMemoCache: Nt,
      useCacheRefresh: Nt
    };
    vn.useEffectEvent = Nt;
    var hs = {
      readContext: kt,
      use: Au,
      useCallback: function(t, e) {
        return le().memoizedState = [
          t,
          e === void 0 ? null : e
        ], t;
      },
      useContext: kt,
      useEffect: $o,
      useImperativeHandle: function(t, e, l) {
        l = l != null ? l.concat([
          t
        ]) : null, Ou(4194308, 4, Io.bind(null, e, t), l);
      },
      useLayoutEffect: function(t, e) {
        return Ou(4194308, 4, t, e);
      },
      useInsertionEffect: function(t, e) {
        Ou(4, 2, t, e);
      },
      useMemo: function(t, e) {
        var l = le();
        e = e === void 0 ? null : e;
        var a = t();
        if (Fl) {
          rl(true);
          try {
            t();
          } finally {
            rl(false);
          }
        }
        return l.memoizedState = [
          a,
          e
        ], a;
      },
      useReducer: function(t, e, l) {
        var a = le();
        if (l !== void 0) {
          var n = l(e);
          if (Fl) {
            rl(true);
            try {
              l(e);
            } finally {
              rl(false);
            }
          }
        } else n = e;
        return a.memoizedState = a.baseState = n, t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: n
        }, a.queue = t, t = t.dispatch = Rm.bind(null, it, t), [
          a.memoizedState,
          t
        ];
      },
      useRef: function(t) {
        var e = le();
        return t = {
          current: t
        }, e.memoizedState = t;
      },
      useState: function(t) {
        t = Hf(t);
        var e = t.queue, l = cs.bind(null, it, e);
        return e.dispatch = l, [
          t.memoizedState,
          l
        ];
      },
      useDebugValue: Yf,
      useDeferredValue: function(t, e) {
        var l = le();
        return qf(l, t, e);
      },
      useTransition: function() {
        var t = Hf(false);
        return t = ns.bind(null, it, t.queue, true, false), le().memoizedState = t, [
          false,
          t
        ];
      },
      useSyncExternalStore: function(t, e, l) {
        var a = it, n = le();
        if (vt) {
          if (l === void 0) throw Error(i(407));
          l = l();
        } else {
          if (l = e(), At === null) throw Error(i(349));
          (dt & 127) !== 0 || Uo(a, e, l);
        }
        n.memoizedState = l;
        var u = {
          value: l,
          getSnapshot: e
        };
        return n.queue = u, $o(wo.bind(null, a, u, t), [
          t
        ]), a.flags |= 2048, Aa(9, {
          destroy: void 0
        }, Ho.bind(null, a, u, l, e), null), l;
      },
      useId: function() {
        var t = le(), e = At.identifierPrefix;
        if (vt) {
          var l = we, a = He;
          l = (a & ~(1 << 32 - he(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Ru++, 0 < l && (e += "H" + l.toString(32)), e += "_";
        } else l = ym++, e = "_" + e + "r_" + l.toString(32) + "_";
        return t.memoizedState = e;
      },
      useHostTransitionStatus: Xf,
      useFormState: Zo,
      useActionState: Zo,
      useOptimistic: function(t) {
        var e = le();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return e.queue = l, e = Gf.bind(null, it, true, l), l.dispatch = e, [
          t,
          e
        ];
      },
      useMemoCache: Cf,
      useCacheRefresh: function() {
        return le().memoizedState = Dm.bind(null, it);
      },
      useEffectEvent: function(t) {
        var e = le(), l = {
          impl: t
        };
        return e.memoizedState = l, function() {
          if ((St & 2) !== 0) throw Error(i(440));
          return l.impl.apply(void 0, arguments);
        };
      }
    }, jf = {
      readContext: kt,
      use: Au,
      useCallback: es,
      useContext: kt,
      useEffect: Bf,
      useImperativeHandle: ts,
      useInsertionEffect: ko,
      useLayoutEffect: Po,
      useMemo: ls,
      useReducer: Mu,
      useRef: Wo,
      useState: function() {
        return Mu(Fe);
      },
      useDebugValue: Yf,
      useDeferredValue: function(t, e) {
        var l = Yt();
        return as(l, Dt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = Mu(Fe)[0], e = Yt().memoizedState;
        return [
          typeof t == "boolean" ? t : pn(t),
          e
        ];
      },
      useSyncExternalStore: No,
      useId: fs,
      useHostTransitionStatus: Xf,
      useFormState: Vo,
      useActionState: Vo,
      useOptimistic: function(t, e) {
        var l = Yt();
        return qo(l, Dt, t, e);
      },
      useMemoCache: Cf,
      useCacheRefresh: rs
    };
    jf.useEffectEvent = Fo;
    var ds = {
      readContext: kt,
      use: Au,
      useCallback: es,
      useContext: kt,
      useEffect: Bf,
      useImperativeHandle: ts,
      useInsertionEffect: ko,
      useLayoutEffect: Po,
      useMemo: ls,
      useReducer: Uf,
      useRef: Wo,
      useState: function() {
        return Uf(Fe);
      },
      useDebugValue: Yf,
      useDeferredValue: function(t, e) {
        var l = Yt();
        return Dt === null ? qf(l, t, e) : as(l, Dt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = Uf(Fe)[0], e = Yt().memoizedState;
        return [
          typeof t == "boolean" ? t : pn(t),
          e
        ];
      },
      useSyncExternalStore: No,
      useId: fs,
      useHostTransitionStatus: Xf,
      useFormState: Jo,
      useActionState: Jo,
      useOptimistic: function(t, e) {
        var l = Yt();
        return Dt !== null ? qo(l, Dt, t, e) : (l.baseState = t, [
          t,
          l.queue.dispatch
        ]);
      },
      useMemoCache: Cf,
      useCacheRefresh: rs
    };
    ds.useEffectEvent = Fo;
    function Qf(t, e, l, a) {
      e = t.memoizedState, l = l(a, e), l = l == null ? e : E({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
    }
    var Zf = {
      enqueueSetState: function(t, e, l) {
        t = t._reactInternals;
        var a = Se(), n = vl(a);
        n.payload = e, l != null && (n.callback = l), e = gl(t, n, a), e !== null && (ce(e, t, a), on(e, t, a));
      },
      enqueueReplaceState: function(t, e, l) {
        t = t._reactInternals;
        var a = Se(), n = vl(a);
        n.tag = 1, n.payload = e, l != null && (n.callback = l), e = gl(t, n, a), e !== null && (ce(e, t, a), on(e, t, a));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var l = Se(), a = vl(l);
        a.tag = 2, e != null && (a.callback = e), e = gl(t, a, l), e !== null && (ce(e, t, l), on(e, t, l));
      }
    };
    function ps(t, e, l, a, n, u, r) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, r) : e.prototype && e.prototype.isPureReactComponent ? !en(l, a) || !en(n, u) : true;
    }
    function ms(t, e, l, a) {
      t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && Zf.enqueueReplaceState(e, e.state, null);
    }
    function kl(t, e) {
      var l = e;
      if ("ref" in e) {
        l = {};
        for (var a in e) a !== "ref" && (l[a] = e[a]);
      }
      if (t = t.defaultProps) {
        l === e && (l = E({}, l));
        for (var n in t) l[n] === void 0 && (l[n] = t[n]);
      }
      return l;
    }
    function vs(t) {
      cu(t);
    }
    function gs(t) {
      console.error(t);
    }
    function ys(t) {
      cu(t);
    }
    function Nu(t, e) {
      try {
        var l = t.onUncaughtError;
        l(e.value, {
          componentStack: e.stack
        });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function Ss(t, e, l) {
      try {
        var a = t.onCaughtError;
        a(l.value, {
          componentStack: l.stack,
          errorBoundary: e.tag === 1 ? e.stateNode : null
        });
      } catch (n) {
        setTimeout(function() {
          throw n;
        });
      }
    }
    function Vf(t, e, l) {
      return l = vl(l), l.tag = 3, l.payload = {
        element: null
      }, l.callback = function() {
        Nu(t, e);
      }, l;
    }
    function bs(t) {
      return t = vl(t), t.tag = 3, t;
    }
    function zs(t, e, l, a) {
      var n = l.type.getDerivedStateFromError;
      if (typeof n == "function") {
        var u = a.value;
        t.payload = function() {
          return n(u);
        }, t.callback = function() {
          Ss(e, l, a);
        };
      }
      var r = l.stateNode;
      r !== null && typeof r.componentDidCatch == "function" && (t.callback = function() {
        Ss(e, l, a), typeof n != "function" && (Tl === null ? Tl = /* @__PURE__ */ new Set([
          this
        ]) : Tl.add(this));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : ""
        });
      });
    }
    function _m(t, e, l, a, n) {
      if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (e = l.alternate, e !== null && Sa(e, l, n, true), l = me.current, l !== null) {
          switch (l.tag) {
            case 31:
            case 13:
              return Ae === null ? Zu() : l.alternate === null && Ut === 0 && (Ut = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Su ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : e.add(a), vr(t, a, n)), false;
            case 22:
              return l.flags |= 65536, a === Su ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  a
                ])
              }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([
                a
              ]) : l.add(a)), vr(t, a, n)), false;
          }
          throw Error(i(435, l.tag));
        }
        return vr(t, a, n), Zu(), false;
      }
      if (vt) return e = me.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== of && (t = Error(i(422), {
        cause: a
      }), nn(Te(t, l)))) : (a !== of && (e = Error(i(423), {
        cause: a
      }), nn(Te(e, l))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Te(a, l), n = Vf(t.stateNode, a, n), zf(t, n), Ut !== 4 && (Ut = 2)), false;
      var u = Error(i(520), {
        cause: a
      });
      if (u = Te(u, l), Dn === null ? Dn = [
        u
      ] : Dn.push(u), Ut !== 4 && (Ut = 2), e === null) return true;
      a = Te(a, l), l = e;
      do {
        switch (l.tag) {
          case 3:
            return l.flags |= 65536, t = n & -n, l.lanes |= t, t = Vf(l.stateNode, a, t), zf(l, t), false;
          case 1:
            if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Tl === null || !Tl.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = bs(n), zs(n, t, l, a), zf(l, n), false;
        }
        l = l.return;
      } while (l !== null);
      return false;
    }
    var Kf = Error(i(461)), jt = false;
    function Pt(t, e, l, a) {
      e.child = t === null ? Ro(e, null, l, a) : $l(e, t.child, l, a);
    }
    function Es(t, e, l, a, n) {
      l = l.render;
      var u = e.ref;
      if ("ref" in a) {
        var r = {};
        for (var s in a) s !== "ref" && (r[s] = a[s]);
      } else r = a;
      return Vl(e), a = Af(t, e, l, r, u, n), s = Mf(), t !== null && !jt ? (Of(t, e, n), ke(t, e, n)) : (vt && s && rf(e), e.flags |= 1, Pt(t, e, a, n), e.child);
    }
    function Ts(t, e, l, a, n) {
      if (t === null) {
        var u = l.type;
        return typeof u == "function" && !nf(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Ds(t, e, u, a, n)) : (t = du(l.type, null, a, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (u = t.child, !tr(t, n)) {
        var r = u.memoizedProps;
        if (l = l.compare, l = l !== null ? l : en, l(r, a) && t.ref === e.ref) return ke(t, e, n);
      }
      return e.flags |= 1, t = Ve(u, a), t.ref = e.ref, t.return = e, e.child = t;
    }
    function Ds(t, e, l, a, n) {
      if (t !== null) {
        var u = t.memoizedProps;
        if (en(u, a) && t.ref === e.ref) if (jt = false, e.pendingProps = a = u, tr(t, n)) (t.flags & 131072) !== 0 && (jt = true);
        else return e.lanes = t.lanes, ke(t, e, n);
      }
      return Jf(t, e, l, a, n);
    }
    function Rs(t, e, l, a) {
      var n = a.children, u = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), a.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (u = u !== null ? u.baseLanes | l : l, t !== null) {
            for (a = e.child = t.child, n = 0; a !== null; ) n = n | a.lanes | a.childLanes, a = a.sibling;
            a = n & ~u;
          } else a = 0, e.child = null;
          return _s(t, e, u, l, a);
        }
        if ((l & 536870912) !== 0) e.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, t !== null && gu(e, u !== null ? u.cachePool : null), u !== null ? Mo(e, u) : Tf(), Oo(e);
        else return a = e.lanes = 536870912, _s(t, e, u !== null ? u.baseLanes | l : l, l, a);
      } else u !== null ? (gu(e, u.cachePool), Mo(e, u), Sl(), e.memoizedState = null) : (t !== null && gu(e, null), Tf(), Sl());
      return Pt(t, e, n, l), e.child;
    }
    function gn(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function _s(t, e, l, a, n) {
      var u = gf();
      return u = u === null ? null : {
        parent: Xt._currentValue,
        pool: u
      }, e.memoizedState = {
        baseLanes: l,
        cachePool: u
      }, t !== null && gu(e, null), Tf(), Oo(e), t !== null && Sa(t, e, a, true), e.childLanes = n, null;
    }
    function Uu(t, e) {
      return e = wu({
        mode: e.mode,
        children: e.children
      }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function As(t, e, l) {
      return $l(e, t.child, null, l), t = Uu(e, e.pendingProps), t.flags |= 2, ve(e), e.memoizedState = null, t;
    }
    function Am(t, e, l) {
      var a = e.pendingProps, n = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (vt) {
          if (a.mode === "hidden") return t = Uu(e, a), e.lanes = 536870912, gn(null, t);
          if (Rf(e), (t = Mt) ? (t = Lh(t, _e), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: sl !== null ? {
              id: He,
              overflow: we
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = co(t), l.return = e, e.child = l, Ft = e, Mt = null)) : t = null, t === null) throw dl(e);
          return e.lanes = 536870912, null;
        }
        return Uu(e, a);
      }
      var u = t.memoizedState;
      if (u !== null) {
        var r = u.dehydrated;
        if (Rf(e), n) if (e.flags & 256) e.flags &= -257, e = As(t, e, l);
        else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
        else throw Error(i(558));
        else if (jt || Sa(t, e, l, false), n = (l & t.childLanes) !== 0, jt || n) {
          if (a = At, a !== null && (r = vc(a, l), r !== 0 && r !== u.retryLane)) throw u.retryLane = r, Gl(t, r), ce(a, t, r), Kf;
          Zu(), e = As(t, e, l);
        } else t = u.treeContext, Mt = Me(r.nextSibling), Ft = e, vt = true, hl = null, _e = false, t !== null && ho(e, t), e = Uu(e, a), e.flags |= 4096;
        return e;
      }
      return t = Ve(t.child, {
        mode: a.mode,
        children: a.children
      }), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Hu(t, e) {
      var l = e.ref;
      if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof l != "function" && typeof l != "object") throw Error(i(284));
        (t === null || t.ref !== l) && (e.flags |= 4194816);
      }
    }
    function Jf(t, e, l, a, n) {
      return Vl(e), l = Af(t, e, l, a, void 0, n), a = Mf(), t !== null && !jt ? (Of(t, e, n), ke(t, e, n)) : (vt && a && rf(e), e.flags |= 1, Pt(t, e, l, n), e.child);
    }
    function Ms(t, e, l, a, n, u) {
      return Vl(e), e.updateQueue = null, l = Co(e, a, l, n), xo(t), a = Mf(), t !== null && !jt ? (Of(t, e, u), ke(t, e, u)) : (vt && a && rf(e), e.flags |= 1, Pt(t, e, l, u), e.child);
    }
    function Os(t, e, l, a, n) {
      if (Vl(e), e.stateNode === null) {
        var u = ma, r = l.contextType;
        typeof r == "object" && r !== null && (u = kt(r)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Zf, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, Sf(e), r = l.contextType, u.context = typeof r == "object" && r !== null ? kt(r) : ma, u.state = e.memoizedState, r = l.getDerivedStateFromProps, typeof r == "function" && (Qf(e, l, r, a), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (r = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), r !== u.state && Zf.enqueueReplaceState(u, u.state, null), hn(e, a, u, n), sn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = true;
      } else if (t === null) {
        u = e.stateNode;
        var s = e.memoizedProps, y = kl(l, s);
        u.props = y;
        var A = u.context, Y = l.contextType;
        r = ma, typeof Y == "object" && Y !== null && (r = kt(Y));
        var G = l.getDerivedStateFromProps;
        Y = typeof G == "function" || typeof u.getSnapshotBeforeUpdate == "function", s = e.pendingProps !== s, Y || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s || A !== r) && ms(e, u, a, r), ml = false;
        var M = e.memoizedState;
        u.state = M, hn(e, a, u, n), sn(), A = e.memoizedState, s || M !== A || ml ? (typeof G == "function" && (Qf(e, l, G, a), A = e.memoizedState), (y = ml || ps(e, l, y, a, M, A, r)) ? (Y || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = A), u.props = a, u.state = A, u.context = r, a = y) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = false);
      } else {
        u = e.stateNode, bf(t, e), r = e.memoizedProps, Y = kl(l, r), u.props = Y, G = e.pendingProps, M = u.context, A = l.contextType, y = ma, typeof A == "object" && A !== null && (y = kt(A)), s = l.getDerivedStateFromProps, (A = typeof s == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r !== G || M !== y) && ms(e, u, a, y), ml = false, M = e.memoizedState, u.state = M, hn(e, a, u, n), sn();
        var C = e.memoizedState;
        r !== G || M !== C || ml || t !== null && t.dependencies !== null && mu(t.dependencies) ? (typeof s == "function" && (Qf(e, l, s, a), C = e.memoizedState), (Y = ml || ps(e, l, Y, a, M, C, y) || t !== null && t.dependencies !== null && mu(t.dependencies)) ? (A || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, C, y), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, C, y)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || r === t.memoizedProps && M === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || r === t.memoizedProps && M === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = C), u.props = a, u.state = C, u.context = y, a = Y) : (typeof u.componentDidUpdate != "function" || r === t.memoizedProps && M === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || r === t.memoizedProps && M === t.memoizedState || (e.flags |= 1024), a = false);
      }
      return u = a, Hu(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = $l(e, t.child, null, n), e.child = $l(e, null, l, n)) : Pt(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = ke(t, e, n), t;
    }
    function xs(t, e, l, a) {
      return Ql(), e.flags |= 256, Pt(t, e, l, a), e.child;
    }
    var Wf = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function $f(t) {
      return {
        baseLanes: t,
        cachePool: So()
      };
    }
    function Ff(t, e, l) {
      return t = t !== null ? t.childLanes & ~l : 0, e && (t |= ye), t;
    }
    function Cs(t, e, l) {
      var a = e.pendingProps, n = false, u = (e.flags & 128) !== 0, r;
      if ((r = u) || (r = t !== null && t.memoizedState === null ? false : (Bt.current & 2) !== 0), r && (n = true, e.flags &= -129), r = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (vt) {
          if (n ? yl(e) : Sl(), (t = Mt) ? (t = Lh(t, _e), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: sl !== null ? {
              id: He,
              overflow: we
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = co(t), l.return = e, e.child = l, Ft = e, Mt = null)) : t = null, t === null) throw dl(e);
          return Nr(t) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var s = a.children;
        return a = a.fallback, n ? (Sl(), n = e.mode, s = wu({
          mode: "hidden",
          children: s
        }, n), a = jl(a, n, l, null), s.return = e, a.return = e, s.sibling = a, e.child = s, a = e.child, a.memoizedState = $f(l), a.childLanes = Ff(t, r, l), e.memoizedState = Wf, gn(null, a)) : (yl(e), kf(e, s));
      }
      var y = t.memoizedState;
      if (y !== null && (s = y.dehydrated, s !== null)) {
        if (u) e.flags & 256 ? (yl(e), e.flags &= -257, e = Pf(t, e, l)) : e.memoizedState !== null ? (Sl(), e.child = t.child, e.flags |= 128, e = null) : (Sl(), s = a.fallback, n = e.mode, a = wu({
          mode: "visible",
          children: a.children
        }, n), s = jl(s, n, l, null), s.flags |= 2, a.return = e, s.return = e, a.sibling = s, e.child = a, $l(e, t.child, null, l), a = e.child, a.memoizedState = $f(l), a.childLanes = Ff(t, r, l), e.memoizedState = Wf, e = gn(null, a));
        else if (yl(e), Nr(s)) {
          if (r = s.nextSibling && s.nextSibling.dataset, r) var A = r.dgst;
          r = A, a = Error(i(419)), a.stack = "", a.digest = r, nn({
            value: a,
            source: null,
            stack: null
          }), e = Pf(t, e, l);
        } else if (jt || Sa(t, e, l, false), r = (l & t.childLanes) !== 0, jt || r) {
          if (r = At, r !== null && (a = vc(r, l), a !== 0 && a !== y.retryLane)) throw y.retryLane = a, Gl(t, a), ce(r, t, a), Kf;
          Cr(s) || Zu(), e = Pf(t, e, l);
        } else Cr(s) ? (e.flags |= 192, e.child = t.child, e = null) : (t = y.treeContext, Mt = Me(s.nextSibling), Ft = e, vt = true, hl = null, _e = false, t !== null && ho(e, t), e = kf(e, a.children), e.flags |= 4096);
        return e;
      }
      return n ? (Sl(), s = a.fallback, n = e.mode, y = t.child, A = y.sibling, a = Ve(y, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = y.subtreeFlags & 65011712, A !== null ? s = Ve(A, s) : (s = jl(s, n, l, null), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, gn(null, a), a = e.child, s = t.child.memoizedState, s === null ? s = $f(l) : (n = s.cachePool, n !== null ? (y = Xt._currentValue, n = n.parent !== y ? {
        parent: y,
        pool: y
      } : n) : n = So(), s = {
        baseLanes: s.baseLanes | l,
        cachePool: n
      }), a.memoizedState = s, a.childLanes = Ff(t, r, l), e.memoizedState = Wf, gn(t.child, a)) : (yl(e), l = t.child, t = l.sibling, l = Ve(l, {
        mode: "visible",
        children: a.children
      }), l.return = e, l.sibling = null, t !== null && (r = e.deletions, r === null ? (e.deletions = [
        t
      ], e.flags |= 16) : r.push(t)), e.child = l, e.memoizedState = null, l);
    }
    function kf(t, e) {
      return e = wu({
        mode: "visible",
        children: e
      }, t.mode), e.return = t, t.child = e;
    }
    function wu(t, e) {
      return t = pe(22, t, null, e), t.lanes = 0, t;
    }
    function Pf(t, e, l) {
      return $l(e, t.child, null, l), t = kf(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
    }
    function Ns(t, e, l) {
      t.lanes |= e;
      var a = t.alternate;
      a !== null && (a.lanes |= e), df(t.return, e, l);
    }
    function If(t, e, l, a, n, u) {
      var r = t.memoizedState;
      r === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: l,
        tailMode: n,
        treeForkCount: u
      } : (r.isBackwards = e, r.rendering = null, r.renderingStartTime = 0, r.last = a, r.tail = l, r.tailMode = n, r.treeForkCount = u);
    }
    function Us(t, e, l) {
      var a = e.pendingProps, n = a.revealOrder, u = a.tail;
      a = a.children;
      var r = Bt.current, s = (r & 2) !== 0;
      if (s ? (r = r & 1 | 2, e.flags |= 128) : r &= 1, W(Bt, r), Pt(t, e, a, l), a = vt ? an : 0, !s && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Ns(t, l, e);
        else if (t.tag === 19) Ns(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      switch (n) {
        case "forwards":
          for (l = e.child, n = null; l !== null; ) t = l.alternate, t !== null && Tu(t) === null && (n = l), l = l.sibling;
          l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), If(e, false, n, l, u, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (l = null, n = e.child, e.child = null; n !== null; ) {
            if (t = n.alternate, t !== null && Tu(t) === null) {
              e.child = n;
              break;
            }
            t = n.sibling, n.sibling = l, l = n, n = t;
          }
          If(e, true, l, null, u, a);
          break;
        case "together":
          If(e, false, null, null, void 0, a);
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function ke(t, e, l) {
      if (t !== null && (e.dependencies = t.dependencies), El |= e.lanes, (l & e.childLanes) === 0) if (t !== null) {
        if (Sa(t, e, l, false), (l & e.childLanes) === 0) return null;
      } else return null;
      if (t !== null && e.child !== t.child) throw Error(i(153));
      if (e.child !== null) {
        for (t = e.child, l = Ve(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; ) t = t.sibling, l = l.sibling = Ve(t, t.pendingProps), l.return = e;
        l.sibling = null;
      }
      return e.child;
    }
    function tr(t, e) {
      return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && mu(t)));
    }
    function Mm(t, e, l) {
      switch (e.tag) {
        case 3:
          ee(e, e.stateNode.containerInfo), pl(e, Xt, t.memoizedState.cache), Ql();
          break;
        case 27:
        case 5:
          ja(e);
          break;
        case 4:
          ee(e, e.stateNode.containerInfo);
          break;
        case 10:
          pl(e, e.type, e.memoizedProps.value);
          break;
        case 31:
          if (e.memoizedState !== null) return e.flags |= 128, Rf(e), null;
          break;
        case 13:
          var a = e.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (yl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? Cs(t, e, l) : (yl(e), t = ke(t, e, l), t !== null ? t.sibling : null);
          yl(e);
          break;
        case 19:
          var n = (t.flags & 128) !== 0;
          if (a = (l & e.childLanes) !== 0, a || (Sa(t, e, l, false), a = (l & e.childLanes) !== 0), n) {
            if (a) return Us(t, e, l);
            e.flags |= 128;
          }
          if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), W(Bt, Bt.current), a) break;
          return null;
        case 22:
          return e.lanes = 0, Rs(t, e, l, e.pendingProps);
        case 24:
          pl(e, Xt, t.memoizedState.cache);
      }
      return ke(t, e, l);
    }
    function Hs(t, e, l) {
      if (t !== null) if (t.memoizedProps !== e.pendingProps) jt = true;
      else {
        if (!tr(t, l) && (e.flags & 128) === 0) return jt = false, Mm(t, e, l);
        jt = (t.flags & 131072) !== 0;
      }
      else jt = false, vt && (e.flags & 1048576) !== 0 && so(e, an, e.index);
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: {
            var a = e.pendingProps;
            if (t = Jl(e.elementType), e.type = t, typeof t == "function") nf(t) ? (a = kl(t, a), e.tag = 1, e = Os(null, e, t, a, l)) : (e.tag = 0, e = Jf(null, e, t, a, l));
            else {
              if (t != null) {
                var n = t.$$typeof;
                if (n === Z) {
                  e.tag = 11, e = Es(null, e, t, a, l);
                  break t;
                } else if (n === b) {
                  e.tag = 14, e = Ts(null, e, t, a, l);
                  break t;
                }
              }
              throw e = Ht(t) || t, Error(i(306, e, ""));
            }
          }
          return e;
        case 0:
          return Jf(t, e, e.type, e.pendingProps, l);
        case 1:
          return a = e.type, n = kl(a, e.pendingProps), Os(t, e, a, n, l);
        case 3:
          t: {
            if (ee(e, e.stateNode.containerInfo), t === null) throw Error(i(387));
            a = e.pendingProps;
            var u = e.memoizedState;
            n = u.element, bf(t, e), hn(e, a, null, l);
            var r = e.memoizedState;
            if (a = r.cache, pl(e, Xt, a), a !== u.cache && pf(e, [
              Xt
            ], l, true), sn(), a = r.element, u.isDehydrated) if (u = {
              element: a,
              isDehydrated: false,
              cache: r.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = xs(t, e, a, l);
              break t;
            } else if (a !== n) {
              n = Te(Error(i(424)), e), nn(n), e = xs(t, e, a, l);
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Mt = Me(t.firstChild), Ft = e, vt = true, hl = null, _e = true, l = Ro(e, null, a, l), e.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
            else {
              if (Ql(), a === n) {
                e = ke(t, e, l);
                break t;
              }
              Pt(t, e, a, l);
            }
            e = e.child;
          }
          return e;
        case 26:
          return Hu(t, e), t === null ? (l = Vh(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : vt || (l = e.type, t = e.pendingProps, a = ku(ot.current).createElement(l), a[$t] = e, a[ae] = t, It(a, l, t), Jt(a), e.stateNode = a) : e.memoizedState = Vh(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
        case 27:
          return ja(e), t === null && vt && (a = e.stateNode = jh(e.type, e.pendingProps, ot.current), Ft = e, _e = true, n = Mt, Al(e.type) ? (Ur = n, Mt = Me(a.firstChild)) : Mt = n), Pt(t, e, e.pendingProps.children, l), Hu(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && vt && ((n = a = Mt) && (a = nv(a, e.type, e.pendingProps, _e), a !== null ? (e.stateNode = a, Ft = e, Mt = Me(a.firstChild), _e = false, n = true) : n = false), n || dl(e)), ja(e), n = e.type, u = e.pendingProps, r = t !== null ? t.memoizedProps : null, a = u.children, Mr(n, u) ? a = null : r !== null && Mr(n, r) && (e.flags |= 32), e.memoizedState !== null && (n = Af(t, e, Sm, null, null, l), Nn._currentValue = n), Hu(t, e), Pt(t, e, a, l), e.child;
        case 6:
          return t === null && vt && ((t = l = Mt) && (l = uv(l, e.pendingProps, _e), l !== null ? (e.stateNode = l, Ft = e, Mt = null, t = true) : t = false), t || dl(e)), null;
        case 13:
          return Cs(t, e, l);
        case 4:
          return ee(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = $l(e, null, a, l) : Pt(t, e, a, l), e.child;
        case 11:
          return Es(t, e, e.type, e.pendingProps, l);
        case 7:
          return Pt(t, e, e.pendingProps, l), e.child;
        case 8:
          return Pt(t, e, e.pendingProps.children, l), e.child;
        case 12:
          return Pt(t, e, e.pendingProps.children, l), e.child;
        case 10:
          return a = e.pendingProps, pl(e, e.type, a.value), Pt(t, e, a.children, l), e.child;
        case 9:
          return n = e.type._context, a = e.pendingProps.children, Vl(e), n = kt(n), a = a(n), e.flags |= 1, Pt(t, e, a, l), e.child;
        case 14:
          return Ts(t, e, e.type, e.pendingProps, l);
        case 15:
          return Ds(t, e, e.type, e.pendingProps, l);
        case 19:
          return Us(t, e, l);
        case 31:
          return Am(t, e, l);
        case 22:
          return Rs(t, e, l, e.pendingProps);
        case 24:
          return Vl(e), a = kt(Xt), t === null ? (n = gf(), n === null && (n = At, u = mf(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = {
            parent: a,
            cache: n
          }, Sf(e), pl(e, Xt, n)) : ((t.lanes & l) !== 0 && (bf(t, e), hn(e, null, null, l), sn()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = {
            parent: a,
            cache: a
          }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), pl(e, Xt, a)) : (a = u.cache, pl(e, Xt, a), a !== n.cache && pf(e, [
            Xt
          ], l, true))), Pt(t, e, e.pendingProps.children, l), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(i(156, e.tag));
    }
    function Pe(t) {
      t.flags |= 4;
    }
    function er(t, e, l, a, n) {
      if ((e = (t.mode & 32) !== 0) && (e = false), e) {
        if (t.flags |= 16777216, (n & 335544128) === n) if (t.stateNode.complete) t.flags |= 8192;
        else if (fh()) t.flags |= 8192;
        else throw Wl = Su, yf;
      } else t.flags &= -16777217;
    }
    function ws(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
      else if (t.flags |= 16777216, !Fh(e)) if (fh()) t.flags |= 8192;
      else throw Wl = Su, yf;
    }
    function Bu(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? dc() : 536870912, t.lanes |= e, Ca |= e);
    }
    function yn(t, e) {
      if (!vt) switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; ) e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; ) l.alternate !== null && (a = l), l = l.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
    }
    function Ot(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
      if (e) for (var n = t.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
      else for (n = t.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
      return t.subtreeFlags |= a, t.childLanes = l, e;
    }
    function Om(t, e, l) {
      var a = e.pendingProps;
      switch (cf(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Ot(e), null;
        case 1:
          return Ot(e), null;
        case 3:
          return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), We(Xt), wt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ya(e) ? Pe(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, sf())), Ot(e), null;
        case 26:
          var n = e.type, u = e.memoizedState;
          return t === null ? (Pe(e), u !== null ? (Ot(e), ws(e, u)) : (Ot(e), er(e, n, null, a, l))) : u ? u !== t.memoizedState ? (Pe(e), Ot(e), ws(e, u)) : (Ot(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Pe(e), Ot(e), er(e, n, t, a, l)), null;
        case 27:
          if (Jn(e), l = ot.current, n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Pe(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(i(166));
              return Ot(e), null;
            }
            t = k.current, ya(e) ? po(e) : (t = jh(n, a, l), e.stateNode = t, Pe(e));
          }
          return Ot(e), null;
        case 5:
          if (Jn(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Pe(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(i(166));
              return Ot(e), null;
            }
            if (u = k.current, ya(e)) po(e);
            else {
              var r = ku(ot.current);
              switch (u) {
                case 1:
                  u = r.createElementNS("http://www.w3.org/2000/svg", n);
                  break;
                case 2:
                  u = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                  break;
                default:
                  switch (n) {
                    case "svg":
                      u = r.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case "math":
                      u = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                      break;
                    case "script":
                      u = r.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                      break;
                    case "select":
                      u = typeof a.is == "string" ? r.createElement("select", {
                        is: a.is
                      }) : r.createElement("select"), a.multiple ? u.multiple = true : a.size && (u.size = a.size);
                      break;
                    default:
                      u = typeof a.is == "string" ? r.createElement(n, {
                        is: a.is
                      }) : r.createElement(n);
                  }
              }
              u[$t] = e, u[ae] = a;
              t: for (r = e.child; r !== null; ) {
                if (r.tag === 5 || r.tag === 6) u.appendChild(r.stateNode);
                else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                  r.child.return = r, r = r.child;
                  continue;
                }
                if (r === e) break t;
                for (; r.sibling === null; ) {
                  if (r.return === null || r.return === e) break t;
                  r = r.return;
                }
                r.sibling.return = r.return, r = r.sibling;
              }
              e.stateNode = u;
              t: switch (It(u, n, a), n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break t;
                case "img":
                  a = true;
                  break t;
                default:
                  a = false;
              }
              a && Pe(e);
            }
          }
          return Ot(e), er(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
        case 6:
          if (t && e.stateNode != null) t.memoizedProps !== a && Pe(e);
          else {
            if (typeof a != "string" && e.stateNode === null) throw Error(i(166));
            if (t = ot.current, ya(e)) {
              if (t = e.stateNode, l = e.memoizedProps, a = null, n = Ft, n !== null) switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
              t[$t] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === true || Ch(t.nodeValue, l)), t || dl(e, true);
            } else t = ku(t).createTextNode(a), t[$t] = e, e.stateNode = t;
          }
          return Ot(e), null;
        case 31:
          if (l = e.memoizedState, t === null || t.memoizedState !== null) {
            if (a = ya(e), l !== null) {
              if (t === null) {
                if (!a) throw Error(i(318));
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(557));
                t[$t] = e;
              } else Ql(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Ot(e), t = false;
            } else l = sf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = true;
            if (!t) return e.flags & 256 ? (ve(e), e) : (ve(e), null);
            if ((e.flags & 128) !== 0) throw Error(i(558));
          }
          return Ot(e), null;
        case 13:
          if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (n = ya(e), a !== null && a.dehydrated !== null) {
              if (t === null) {
                if (!n) throw Error(i(318));
                if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(i(317));
                n[$t] = e;
              } else Ql(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Ot(e), n = false;
            } else n = sf(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = true;
            if (!n) return e.flags & 256 ? (ve(e), e) : (ve(e), null);
          }
          return ve(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Bu(e, e.updateQueue), Ot(e), null);
        case 4:
          return wt(), t === null && Tr(e.stateNode.containerInfo), Ot(e), null;
        case 10:
          return We(e.type), Ot(e), null;
        case 19:
          if (j(Bt), a = e.memoizedState, a === null) return Ot(e), null;
          if (n = (e.flags & 128) !== 0, u = a.rendering, u === null) if (n) yn(a, false);
          else {
            if (Ut !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
              if (u = Tu(t), u !== null) {
                for (e.flags |= 128, yn(a, false), t = u.updateQueue, e.updateQueue = t, Bu(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; ) ro(l, t), l = l.sibling;
                return W(Bt, Bt.current & 1 | 2), vt && Ke(e, a.treeForkCount), e.child;
              }
              t = t.sibling;
            }
            a.tail !== null && oe() > Gu && (e.flags |= 128, n = true, yn(a, false), e.lanes = 4194304);
          }
          else {
            if (!n) if (t = Tu(u), t !== null) {
              if (e.flags |= 128, n = true, t = t.updateQueue, e.updateQueue = t, Bu(e, t), yn(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !vt) return Ot(e), null;
            } else 2 * oe() - a.renderingStartTime > Gu && l !== 536870912 && (e.flags |= 128, n = true, yn(a, false), e.lanes = 4194304);
            a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
          }
          return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = oe(), t.sibling = null, l = Bt.current, W(Bt, n ? l & 1 | 2 : l & 1), vt && Ke(e, a.treeForkCount), t) : (Ot(e), null);
        case 22:
        case 23:
          return ve(e), Df(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Ot(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ot(e), l = e.updateQueue, l !== null && Bu(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && j(Kl), null;
        case 24:
          return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), We(Xt), Ot(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, e.tag));
    }
    function xm(t, e) {
      switch (cf(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
          return We(Xt), wt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return Jn(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (ve(e), e.alternate === null) throw Error(i(340));
            Ql();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 13:
          if (ve(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null) throw Error(i(340));
            Ql();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
          return j(Bt), null;
        case 4:
          return wt(), null;
        case 10:
          return We(e.type), null;
        case 22:
        case 23:
          return ve(e), Df(), t !== null && j(Kl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 24:
          return We(Xt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Bs(t, e) {
      switch (cf(e), e.tag) {
        case 3:
          We(Xt), wt();
          break;
        case 26:
        case 27:
        case 5:
          Jn(e);
          break;
        case 4:
          wt();
          break;
        case 31:
          e.memoizedState !== null && ve(e);
          break;
        case 13:
          ve(e);
          break;
        case 19:
          j(Bt);
          break;
        case 10:
          We(e.type);
          break;
        case 22:
        case 23:
          ve(e), Df(), t !== null && j(Kl);
          break;
        case 24:
          We(Xt);
      }
    }
    function Sn(t, e) {
      try {
        var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
        if (a !== null) {
          var n = a.next;
          l = n;
          do {
            if ((l.tag & t) === t) {
              a = void 0;
              var u = l.create, r = l.inst;
              a = u(), r.destroy = a;
            }
            l = l.next;
          } while (l !== n);
        }
      } catch (s) {
        Tt(e, e.return, s);
      }
    }
    function bl(t, e, l) {
      try {
        var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
        if (n !== null) {
          var u = n.next;
          a = u;
          do {
            if ((a.tag & t) === t) {
              var r = a.inst, s = r.destroy;
              if (s !== void 0) {
                r.destroy = void 0, n = e;
                var y = l, A = s;
                try {
                  A();
                } catch (Y) {
                  Tt(n, y, Y);
                }
              }
            }
            a = a.next;
          } while (a !== u);
        }
      } catch (Y) {
        Tt(e, e.return, Y);
      }
    }
    function Ys(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var l = t.stateNode;
        try {
          Ao(e, l);
        } catch (a) {
          Tt(t, t.return, a);
        }
      }
    }
    function qs(t, e, l) {
      l.props = kl(t.type, t.memoizedProps), l.state = t.memoizedState;
      try {
        l.componentWillUnmount();
      } catch (a) {
        Tt(t, e, a);
      }
    }
    function bn(t, e) {
      try {
        var l = t.ref;
        if (l !== null) {
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              var a = t.stateNode;
              break;
            case 30:
              a = t.stateNode;
              break;
            default:
              a = t.stateNode;
          }
          typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
        }
      } catch (n) {
        Tt(t, e, n);
      }
    }
    function Be(t, e) {
      var l = t.ref, a = t.refCleanup;
      if (l !== null) if (typeof a == "function") try {
        a();
      } catch (n) {
        Tt(t, e, n);
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
      }
      else if (typeof l == "function") try {
        l(null);
      } catch (n) {
        Tt(t, e, n);
      }
      else l.current = null;
    }
    function Ls(t) {
      var e = t.type, l = t.memoizedProps, a = t.stateNode;
      try {
        t: switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            l.autoFocus && a.focus();
            break t;
          case "img":
            l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
        }
      } catch (n) {
        Tt(t, t.return, n);
      }
    }
    function lr(t, e, l) {
      try {
        var a = t.stateNode;
        Pm(a, t.type, l, e), a[ae] = e;
      } catch (n) {
        Tt(t, t.return, n);
      }
    }
    function Xs(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Al(t.type) || t.tag === 4;
    }
    function ar(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Xs(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && Al(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function nr(t, e, l) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Qe));
      else if (a !== 4 && (a === 27 && Al(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null)) for (nr(t, e, l), t = t.sibling; t !== null; ) nr(t, e, l), t = t.sibling;
    }
    function Yu(t, e, l) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
      else if (a !== 4 && (a === 27 && Al(t.type) && (l = t.stateNode), t = t.child, t !== null)) for (Yu(t, e, l), t = t.sibling; t !== null; ) Yu(t, e, l), t = t.sibling;
    }
    function Gs(t) {
      var e = t.stateNode, l = t.memoizedProps;
      try {
        for (var a = t.type, n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
        It(e, a, l), e[$t] = t, e[ae] = l;
      } catch (u) {
        Tt(t, t.return, u);
      }
    }
    var Ie = false, Qt = false, ur = false, js = typeof WeakSet == "function" ? WeakSet : Set, Wt = null;
    function Cm(t, e) {
      if (t = t.containerInfo, _r = ni, t = Ic(t), ki(t)) {
        if ("selectionStart" in t) var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
        else t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break t;
            }
            var r = 0, s = -1, y = -1, A = 0, Y = 0, G = t, M = null;
            e: for (; ; ) {
              for (var C; G !== l || n !== 0 && G.nodeType !== 3 || (s = r + n), G !== u || a !== 0 && G.nodeType !== 3 || (y = r + a), G.nodeType === 3 && (r += G.nodeValue.length), (C = G.firstChild) !== null; ) M = G, G = C;
              for (; ; ) {
                if (G === t) break e;
                if (M === l && ++A === n && (s = r), M === u && ++Y === a && (y = r), (C = G.nextSibling) !== null) break;
                G = M, M = G.parentNode;
              }
              G = C;
            }
            l = s === -1 || y === -1 ? null : {
              start: s,
              end: y
            };
          } else l = null;
        }
        l = l || {
          start: 0,
          end: 0
        };
      } else l = null;
      for (Ar = {
        focusedElem: t,
        selectionRange: l
      }, ni = false, Wt = e; Wt !== null; ) if (e = Wt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Wt = t;
      else for (; Wt !== null; ) {
        switch (e = Wt, u = e.alternate, t = e.flags, e.tag) {
          case 0:
            if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (l = 0; l < t.length; l++) n = t[l], n.ref.impl = n.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((t & 1024) !== 0 && u !== null) {
              t = void 0, l = e, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
              try {
                var $ = kl(l.type, n);
                t = a.getSnapshotBeforeUpdate($, u), a.__reactInternalSnapshotBeforeUpdate = t;
              } catch (lt) {
                Tt(l, l.return, lt);
              }
            }
            break;
          case 3:
            if ((t & 1024) !== 0) {
              if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) xr(t);
              else if (l === 1) switch (t.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  xr(t);
                  break;
                default:
                  t.textContent = "";
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
            if ((t & 1024) !== 0) throw Error(i(163));
        }
        if (t = e.sibling, t !== null) {
          t.return = e.return, Wt = t;
          break;
        }
        Wt = e.return;
      }
    }
    function Qs(t, e, l) {
      var a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          el(t, l), a & 4 && Sn(5, l);
          break;
        case 1:
          if (el(t, l), a & 4) if (t = l.stateNode, e === null) try {
            t.componentDidMount();
          } catch (r) {
            Tt(l, l.return, r);
          }
          else {
            var n = kl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (r) {
              Tt(l, l.return, r);
            }
          }
          a & 64 && Ys(l), a & 512 && bn(l, l.return);
          break;
        case 3:
          if (el(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
            if (e = null, l.child !== null) switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
            try {
              Ao(t, e);
            } catch (r) {
              Tt(l, l.return, r);
            }
          }
          break;
        case 27:
          e === null && a & 4 && Gs(l);
        case 26:
        case 5:
          el(t, l), e === null && a & 4 && Ls(l), a & 512 && bn(l, l.return);
          break;
        case 12:
          el(t, l);
          break;
        case 31:
          el(t, l), a & 4 && Ks(t, l);
          break;
        case 13:
          el(t, l), a & 4 && Js(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = Xm.bind(null, l), iv(t, l))));
          break;
        case 22:
          if (a = l.memoizedState !== null || Ie, !a) {
            e = e !== null && e.memoizedState !== null || Qt, n = Ie;
            var u = Qt;
            Ie = a, (Qt = e) && !u ? ll(t, l, (l.subtreeFlags & 8772) !== 0) : el(t, l), Ie = n, Qt = u;
          }
          break;
        case 30:
          break;
        default:
          el(t, l);
      }
    }
    function Zs(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, Zs(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Hi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    var xt = null, ue = false;
    function tl(t, e, l) {
      for (l = l.child; l !== null; ) Vs(t, e, l), l = l.sibling;
    }
    function Vs(t, e, l) {
      if (se && typeof se.onCommitFiberUnmount == "function") try {
        se.onCommitFiberUnmount(Qa, l);
      } catch {
      }
      switch (l.tag) {
        case 26:
          Qt || Be(l, e), tl(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
          break;
        case 27:
          Qt || Be(l, e);
          var a = xt, n = ue;
          Al(l.type) && (xt = l.stateNode, ue = false), tl(t, e, l), On(l.stateNode), xt = a, ue = n;
          break;
        case 5:
          Qt || Be(l, e);
        case 6:
          if (a = xt, n = ue, xt = null, tl(t, e, l), xt = a, ue = n, xt !== null) if (ue) try {
            (xt.nodeType === 9 ? xt.body : xt.nodeName === "HTML" ? xt.ownerDocument.body : xt).removeChild(l.stateNode);
          } catch (u) {
            Tt(l, e, u);
          }
          else try {
            xt.removeChild(l.stateNode);
          } catch (u) {
            Tt(l, e, u);
          }
          break;
        case 18:
          xt !== null && (ue ? (t = xt, Yh(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), La(t)) : Yh(xt, l.stateNode));
          break;
        case 4:
          a = xt, n = ue, xt = l.stateNode.containerInfo, ue = true, tl(t, e, l), xt = a, ue = n;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          bl(2, l, e), Qt || bl(4, l, e), tl(t, e, l);
          break;
        case 1:
          Qt || (Be(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && qs(l, e, a)), tl(t, e, l);
          break;
        case 21:
          tl(t, e, l);
          break;
        case 22:
          Qt = (a = Qt) || l.memoizedState !== null, tl(t, e, l), Qt = a;
          break;
        default:
          tl(t, e, l);
      }
    }
    function Ks(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          La(t);
        } catch (l) {
          Tt(e, e.return, l);
        }
      }
    }
    function Js(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
        La(t);
      } catch (l) {
        Tt(e, e.return, l);
      }
    }
    function Nm(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new js()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new js()), e;
        default:
          throw Error(i(435, t.tag));
      }
    }
    function qu(t, e) {
      var l = Nm(t);
      e.forEach(function(a) {
        if (!l.has(a)) {
          l.add(a);
          var n = Gm.bind(null, t, a);
          a.then(n, n);
        }
      });
    }
    function ie(t, e) {
      var l = e.deletions;
      if (l !== null) for (var a = 0; a < l.length; a++) {
        var n = l[a], u = t, r = e, s = r;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (Al(s.type)) {
                xt = s.stateNode, ue = false;
                break t;
              }
              break;
            case 5:
              xt = s.stateNode, ue = false;
              break t;
            case 3:
            case 4:
              xt = s.stateNode.containerInfo, ue = true;
              break t;
          }
          s = s.return;
        }
        if (xt === null) throw Error(i(160));
        Vs(u, r, n), xt = null, ue = false, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
      if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) Ws(e, t), e = e.sibling;
    }
    var Ce = null;
    function Ws(t, e) {
      var l = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ie(e, t), fe(t), a & 4 && (bl(3, t, t.return), Sn(3, t), bl(5, t, t.return));
          break;
        case 1:
          ie(e, t), fe(t), a & 512 && (Qt || l === null || Be(l, l.return)), a & 64 && Ie && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
          break;
        case 26:
          var n = Ce;
          if (ie(e, t), fe(t), a & 512 && (Qt || l === null || Be(l, l.return)), a & 4) {
            var u = l !== null ? l.memoizedState : null;
            if (a = t.memoizedState, l === null) if (a === null) if (t.stateNode === null) {
              t: {
                a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                e: switch (a) {
                  case "title":
                    u = n.getElementsByTagName("title")[0], (!u || u[Ka] || u[$t] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), It(u, a, l), u[$t] = t, Jt(u), a = u;
                    break t;
                  case "link":
                    var r = Wh("link", "href", n).get(a + (l.href || ""));
                    if (r) {
                      for (var s = 0; s < r.length; s++) if (u = r[s], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                        r.splice(s, 1);
                        break e;
                      }
                    }
                    u = n.createElement(a), It(u, a, l), n.head.appendChild(u);
                    break;
                  case "meta":
                    if (r = Wh("meta", "content", n).get(a + (l.content || ""))) {
                      for (s = 0; s < r.length; s++) if (u = r[s], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                        r.splice(s, 1);
                        break e;
                      }
                    }
                    u = n.createElement(a), It(u, a, l), n.head.appendChild(u);
                    break;
                  default:
                    throw Error(i(468, a));
                }
                u[$t] = t, Jt(u), a = u;
              }
              t.stateNode = a;
            } else $h(n, t.type, t.stateNode);
            else t.stateNode = Jh(n, a, t.memoizedProps);
            else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? $h(n, t.type, t.stateNode) : Jh(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && lr(t, t.memoizedProps, l.memoizedProps);
          }
          break;
        case 27:
          ie(e, t), fe(t), a & 512 && (Qt || l === null || Be(l, l.return)), l !== null && a & 4 && lr(t, t.memoizedProps, l.memoizedProps);
          break;
        case 5:
          if (ie(e, t), fe(t), a & 512 && (Qt || l === null || Be(l, l.return)), t.flags & 32) {
            n = t.stateNode;
            try {
              ra(n, "");
            } catch ($) {
              Tt(t, t.return, $);
            }
          }
          a & 4 && t.stateNode != null && (n = t.memoizedProps, lr(t, n, l !== null ? l.memoizedProps : n)), a & 1024 && (ur = true);
          break;
        case 6:
          if (ie(e, t), fe(t), a & 4) {
            if (t.stateNode === null) throw Error(i(162));
            a = t.memoizedProps, l = t.stateNode;
            try {
              l.nodeValue = a;
            } catch ($) {
              Tt(t, t.return, $);
            }
          }
          break;
        case 3:
          if (ti = null, n = Ce, Ce = Pu(e.containerInfo), ie(e, t), Ce = n, fe(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
            La(e.containerInfo);
          } catch ($) {
            Tt(t, t.return, $);
          }
          ur && (ur = false, $s(t));
          break;
        case 4:
          a = Ce, Ce = Pu(t.stateNode.containerInfo), ie(e, t), fe(t), Ce = a;
          break;
        case 12:
          ie(e, t), fe(t);
          break;
        case 31:
          ie(e, t), fe(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, qu(t, a)));
          break;
        case 13:
          ie(e, t), fe(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Xu = oe()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, qu(t, a)));
          break;
        case 22:
          n = t.memoizedState !== null;
          var y = l !== null && l.memoizedState !== null, A = Ie, Y = Qt;
          if (Ie = A || n, Qt = Y || y, ie(e, t), Qt = Y, Ie = A, fe(t), a & 8192) t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || y || Ie || Qt || Pl(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                y = l = e;
                try {
                  if (u = y.stateNode, n) r = u.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
                  else {
                    s = y.stateNode;
                    var G = y.memoizedProps.style, M = G != null && G.hasOwnProperty("display") ? G.display : null;
                    s.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                  }
                } catch ($) {
                  Tt(y, y.return, $);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                y = e;
                try {
                  y.stateNode.nodeValue = n ? "" : y.memoizedProps;
                } catch ($) {
                  Tt(y, y.return, $);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                y = e;
                try {
                  var C = y.stateNode;
                  n ? qh(C, true) : qh(y.stateNode, false);
                } catch ($) {
                  Tt(y, y.return, $);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
          a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, qu(t, l))));
          break;
        case 19:
          ie(e, t), fe(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, qu(t, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          ie(e, t), fe(t);
      }
    }
    function fe(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          for (var l, a = t.return; a !== null; ) {
            if (Xs(a)) {
              l = a;
              break;
            }
            a = a.return;
          }
          if (l == null) throw Error(i(160));
          switch (l.tag) {
            case 27:
              var n = l.stateNode, u = ar(t);
              Yu(t, u, n);
              break;
            case 5:
              var r = l.stateNode;
              l.flags & 32 && (ra(r, ""), l.flags &= -33);
              var s = ar(t);
              Yu(t, s, r);
              break;
            case 3:
            case 4:
              var y = l.stateNode.containerInfo, A = ar(t);
              nr(t, A, y);
              break;
            default:
              throw Error(i(161));
          }
        } catch (Y) {
          Tt(t, t.return, Y);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function $s(t) {
      if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
        var e = t;
        $s(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
    }
    function el(t, e) {
      if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) Qs(t, e.alternate, e), e = e.sibling;
    }
    function Pl(t) {
      for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            bl(4, e, e.return), Pl(e);
            break;
          case 1:
            Be(e, e.return);
            var l = e.stateNode;
            typeof l.componentWillUnmount == "function" && qs(e, e.return, l), Pl(e);
            break;
          case 27:
            On(e.stateNode);
          case 26:
          case 5:
            Be(e, e.return), Pl(e);
            break;
          case 22:
            e.memoizedState === null && Pl(e);
            break;
          case 30:
            Pl(e);
            break;
          default:
            Pl(e);
        }
        t = t.sibling;
      }
    }
    function ll(t, e, l) {
      for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
        var a = e.alternate, n = t, u = e, r = u.flags;
        switch (u.tag) {
          case 0:
          case 11:
          case 15:
            ll(n, u, l), Sn(4, u);
            break;
          case 1:
            if (ll(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
              n.componentDidMount();
            } catch (A) {
              Tt(a, a.return, A);
            }
            if (a = u, n = a.updateQueue, n !== null) {
              var s = a.stateNode;
              try {
                var y = n.shared.hiddenCallbacks;
                if (y !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < y.length; n++) _o(y[n], s);
              } catch (A) {
                Tt(a, a.return, A);
              }
            }
            l && r & 64 && Ys(u), bn(u, u.return);
            break;
          case 27:
            Gs(u);
          case 26:
          case 5:
            ll(n, u, l), l && a === null && r & 4 && Ls(u), bn(u, u.return);
            break;
          case 12:
            ll(n, u, l);
            break;
          case 31:
            ll(n, u, l), l && r & 4 && Ks(n, u);
            break;
          case 13:
            ll(n, u, l), l && r & 4 && Js(n, u);
            break;
          case 22:
            u.memoizedState === null && ll(n, u, l), bn(u, u.return);
            break;
          case 30:
            break;
          default:
            ll(n, u, l);
        }
        e = e.sibling;
      }
    }
    function ir(t, e) {
      var l = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && un(l));
    }
    function fr(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && un(t));
    }
    function Ne(t, e, l, a) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Fs(t, e, l, a), e = e.sibling;
    }
    function Fs(t, e, l, a) {
      var n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ne(t, e, l, a), n & 2048 && Sn(9, e);
          break;
        case 1:
          Ne(t, e, l, a);
          break;
        case 3:
          Ne(t, e, l, a), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && un(t)));
          break;
        case 12:
          if (n & 2048) {
            Ne(t, e, l, a), t = e.stateNode;
            try {
              var u = e.memoizedProps, r = u.id, s = u.onPostCommit;
              typeof s == "function" && s(r, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
            } catch (y) {
              Tt(e, e.return, y);
            }
          } else Ne(t, e, l, a);
          break;
        case 31:
          Ne(t, e, l, a);
          break;
        case 13:
          Ne(t, e, l, a);
          break;
        case 23:
          break;
        case 22:
          u = e.stateNode, r = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Ne(t, e, l, a) : zn(t, e) : u._visibility & 2 ? Ne(t, e, l, a) : (u._visibility |= 2, Ma(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || false)), n & 2048 && ir(r, e);
          break;
        case 24:
          Ne(t, e, l, a), n & 2048 && fr(e.alternate, e);
          break;
        default:
          Ne(t, e, l, a);
      }
    }
    function Ma(t, e, l, a, n) {
      for (n = n && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
        var u = t, r = e, s = l, y = a, A = r.flags;
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            Ma(u, r, s, y, n), Sn(8, r);
            break;
          case 23:
            break;
          case 22:
            var Y = r.stateNode;
            r.memoizedState !== null ? Y._visibility & 2 ? Ma(u, r, s, y, n) : zn(u, r) : (Y._visibility |= 2, Ma(u, r, s, y, n)), n && A & 2048 && ir(r.alternate, r);
            break;
          case 24:
            Ma(u, r, s, y, n), n && A & 2048 && fr(r.alternate, r);
            break;
          default:
            Ma(u, r, s, y, n);
        }
        e = e.sibling;
      }
    }
    function zn(t, e) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            zn(l, a), n & 2048 && ir(a.alternate, a);
            break;
          case 24:
            zn(l, a), n & 2048 && fr(a.alternate, a);
            break;
          default:
            zn(l, a);
        }
        e = e.sibling;
      }
    }
    var En = 8192;
    function Oa(t, e, l) {
      if (t.subtreeFlags & En) for (t = t.child; t !== null; ) ks(t, e, l), t = t.sibling;
    }
    function ks(t, e, l) {
      switch (t.tag) {
        case 26:
          Oa(t, e, l), t.flags & En && t.memoizedState !== null && yv(l, Ce, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          Oa(t, e, l);
          break;
        case 3:
        case 4:
          var a = Ce;
          Ce = Pu(t.stateNode.containerInfo), Oa(t, e, l), Ce = a;
          break;
        case 22:
          t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = En, En = 16777216, Oa(t, e, l), En = a) : Oa(t, e, l));
          break;
        default:
          Oa(t, e, l);
      }
    }
    function Ps(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function Tn(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Wt = a, th(a, t);
        }
        Ps(t);
      }
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Is(t), t = t.sibling;
    }
    function Is(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Tn(t), t.flags & 2048 && bl(9, t, t.return);
          break;
        case 3:
          Tn(t);
          break;
        case 12:
          Tn(t);
          break;
        case 22:
          var e = t.stateNode;
          t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Lu(t)) : Tn(t);
          break;
        default:
          Tn(t);
      }
    }
    function Lu(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Wt = a, th(a, t);
        }
        Ps(t);
      }
      for (t = t.child; t !== null; ) {
        switch (e = t, e.tag) {
          case 0:
          case 11:
          case 15:
            bl(8, e, e.return), Lu(e);
            break;
          case 22:
            l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Lu(e));
            break;
          default:
            Lu(e);
        }
        t = t.sibling;
      }
    }
    function th(t, e) {
      for (; Wt !== null; ) {
        var l = Wt;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            bl(8, l, e);
            break;
          case 23:
          case 22:
            if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
              var a = l.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            un(l.memoizedState.cache);
        }
        if (a = l.child, a !== null) a.return = l, Wt = a;
        else t: for (l = t; Wt !== null; ) {
          a = Wt;
          var n = a.sibling, u = a.return;
          if (Zs(a), a === l) {
            Wt = null;
            break t;
          }
          if (n !== null) {
            n.return = u, Wt = n;
            break t;
          }
          Wt = u;
        }
      }
    }
    var Um = {
      getCacheForType: function(t) {
        var e = kt(Xt), l = e.data.get(t);
        return l === void 0 && (l = t(), e.data.set(t, l)), l;
      },
      cacheSignal: function() {
        return kt(Xt).controller.signal;
      }
    }, Hm = typeof WeakMap == "function" ? WeakMap : Map, St = 0, At = null, st = null, dt = 0, Et = 0, ge = null, zl = false, xa = false, rr = false, al = 0, Ut = 0, El = 0, Il = 0, cr = 0, ye = 0, Ca = 0, Dn = null, re = null, or = false, Xu = 0, eh = 0, Gu = 1 / 0, ju = null, Tl = null, Vt = 0, Dl = null, Na = null, nl = 0, sr = 0, hr = null, lh = null, Rn = 0, dr = null;
    function Se() {
      return (St & 2) !== 0 && dt !== 0 ? dt & -dt : N.T !== null ? Sr() : gc();
    }
    function ah() {
      if (ye === 0) if ((dt & 536870912) === 0 || vt) {
        var t = Fn;
        Fn <<= 1, (Fn & 3932160) === 0 && (Fn = 262144), ye = t;
      } else ye = 536870912;
      return t = me.current, t !== null && (t.flags |= 32), ye;
    }
    function ce(t, e, l) {
      (t === At && (Et === 2 || Et === 9) || t.cancelPendingCommit !== null) && (Ua(t, 0), Rl(t, dt, ye, false)), Va(t, l), ((St & 2) === 0 || t !== At) && (t === At && ((St & 2) === 0 && (Il |= l), Ut === 4 && Rl(t, dt, ye, false)), Ye(t));
    }
    function nh(t, e, l) {
      if ((St & 6) !== 0) throw Error(i(327));
      var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Za(t, e), n = a ? Ym(t, e) : mr(t, e, true), u = a;
      do {
        if (n === 0) {
          xa && !a && Rl(t, e, 0, false);
          break;
        } else {
          if (l = t.current.alternate, u && !wm(l)) {
            n = mr(t, e, false), u = false;
            continue;
          }
          if (n === 2) {
            if (u = e, t.errorRecoveryDisabledLanes & u) var r = 0;
            else r = t.pendingLanes & -536870913, r = r !== 0 ? r : r & 536870912 ? 536870912 : 0;
            if (r !== 0) {
              e = r;
              t: {
                var s = t;
                n = Dn;
                var y = s.current.memoizedState.isDehydrated;
                if (y && (Ua(s, r).flags |= 256), r = mr(s, r, false), r !== 2) {
                  if (rr && !y) {
                    s.errorRecoveryDisabledLanes |= u, Il |= u, n = 4;
                    break t;
                  }
                  u = re, re = n, u !== null && (re === null ? re = u : re.push.apply(re, u));
                }
                n = r;
              }
              if (u = false, n !== 2) continue;
            }
          }
          if (n === 1) {
            Ua(t, 0), Rl(t, e, 0, true);
            break;
          }
          t: {
            switch (a = t, u = n, u) {
              case 0:
              case 1:
                throw Error(i(345));
              case 4:
                if ((e & 4194048) !== e) break;
              case 6:
                Rl(a, e, ye, !zl);
                break t;
              case 2:
                re = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((e & 62914560) === e && (n = Xu + 300 - oe(), 10 < n)) {
              if (Rl(a, e, ye, !zl), Pn(a, 0, true) !== 0) break t;
              nl = e, a.timeoutHandle = wh(uh.bind(null, a, l, re, ju, or, e, ye, Il, Ca, zl, u, "Throttled", -0, 0), n);
              break t;
            }
            uh(a, l, re, ju, or, e, ye, Il, Ca, zl, u, null, -0, 0);
          }
        }
        break;
      } while (true);
      Ye(t);
    }
    function uh(t, e, l, a, n, u, r, s, y, A, Y, G, M, C) {
      if (t.timeoutHandle = -1, G = e.subtreeFlags, G & 8192 || (G & 16785408) === 16785408) {
        G = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: Qe
        }, ks(e, u, G);
        var $ = (u & 62914560) === u ? Xu - oe() : (u & 4194048) === u ? eh - oe() : 0;
        if ($ = Sv(G, $), $ !== null) {
          nl = u, t.cancelPendingCommit = $(dh.bind(null, t, e, u, l, a, n, r, s, y, Y, G, null, M, C)), Rl(t, u, r, !A);
          return;
        }
      }
      dh(t, e, u, l, a, n, r, s, y);
    }
    function wm(t) {
      for (var e = t; ; ) {
        var l = e.tag;
        if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null))) for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!de(u(), n)) return false;
          } catch {
            return false;
          }
        }
        if (l = e.child, e.subtreeFlags & 16384 && l !== null) l.return = e, e = l;
        else {
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return true;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      }
      return true;
    }
    function Rl(t, e, l, a) {
      e &= ~cr, e &= ~Il, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
      for (var n = e; 0 < n; ) {
        var u = 31 - he(n), r = 1 << u;
        a[u] = -1, n &= ~r;
      }
      l !== 0 && pc(t, l, e);
    }
    function Qu() {
      return (St & 6) === 0 ? (_n(0), false) : true;
    }
    function pr() {
      if (st !== null) {
        if (Et === 0) var t = st.return;
        else t = st, Je = Zl = null, xf(t), Ta = null, rn = 0, t = st;
        for (; t !== null; ) Bs(t.alternate, t), t = t.return;
        st = null;
      }
    }
    function Ua(t, e) {
      var l = t.timeoutHandle;
      l !== -1 && (t.timeoutHandle = -1, ev(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), nl = 0, pr(), At = t, st = l = Ve(t.current, null), dt = e, Et = 0, ge = null, zl = false, xa = Za(t, e), rr = false, Ca = ye = cr = Il = El = Ut = 0, re = Dn = null, or = false, (e & 8) !== 0 && (e |= e & 32);
      var a = t.entangledLanes;
      if (a !== 0) for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - he(a), u = 1 << n;
        e |= t[n], a &= ~u;
      }
      return al = e, ou(), l;
    }
    function ih(t, e) {
      it = null, N.H = vn, e === Ea || e === yu ? (e = Eo(), Et = 3) : e === yf ? (e = Eo(), Et = 4) : Et = e === Kf ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, ge = e, st === null && (Ut = 1, Nu(t, Te(e, t.current)));
    }
    function fh() {
      var t = me.current;
      return t === null ? true : (dt & 4194048) === dt ? Ae === null : (dt & 62914560) === dt || (dt & 536870912) !== 0 ? t === Ae : false;
    }
    function rh() {
      var t = N.H;
      return N.H = vn, t === null ? vn : t;
    }
    function ch() {
      var t = N.A;
      return N.A = Um, t;
    }
    function Zu() {
      Ut = 4, zl || (dt & 4194048) !== dt && me.current !== null || (xa = true), (El & 134217727) === 0 && (Il & 134217727) === 0 || At === null || Rl(At, dt, ye, false);
    }
    function mr(t, e, l) {
      var a = St;
      St |= 2;
      var n = rh(), u = ch();
      (At !== t || dt !== e) && (ju = null, Ua(t, e)), e = false;
      var r = Ut;
      t: do
        try {
          if (Et !== 0 && st !== null) {
            var s = st, y = ge;
            switch (Et) {
              case 8:
                pr(), r = 6;
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                me.current === null && (e = true);
                var A = Et;
                if (Et = 0, ge = null, Ha(t, s, y, A), l && xa) {
                  r = 0;
                  break t;
                }
                break;
              default:
                A = Et, Et = 0, ge = null, Ha(t, s, y, A);
            }
          }
          Bm(), r = Ut;
          break;
        } catch (Y) {
          ih(t, Y);
        }
      while (true);
      return e && t.shellSuspendCounter++, Je = Zl = null, St = a, N.H = n, N.A = u, st === null && (At = null, dt = 0, ou()), r;
    }
    function Bm() {
      for (; st !== null; ) oh(st);
    }
    function Ym(t, e) {
      var l = St;
      St |= 2;
      var a = rh(), n = ch();
      At !== t || dt !== e ? (ju = null, Gu = oe() + 500, Ua(t, e)) : xa = Za(t, e);
      t: do
        try {
          if (Et !== 0 && st !== null) {
            e = st;
            var u = ge;
            e: switch (Et) {
              case 1:
                Et = 0, ge = null, Ha(t, e, u, 1);
                break;
              case 2:
              case 9:
                if (bo(u)) {
                  Et = 0, ge = null, sh(e);
                  break;
                }
                e = function() {
                  Et !== 2 && Et !== 9 || At !== t || (Et = 7), Ye(t);
                }, u.then(e, e);
                break t;
              case 3:
                Et = 7;
                break t;
              case 4:
                Et = 5;
                break t;
              case 7:
                bo(u) ? (Et = 0, ge = null, sh(e)) : (Et = 0, ge = null, Ha(t, e, u, 7));
                break;
              case 5:
                var r = null;
                switch (st.tag) {
                  case 26:
                    r = st.memoizedState;
                  case 5:
                  case 27:
                    var s = st;
                    if (r ? Fh(r) : s.stateNode.complete) {
                      Et = 0, ge = null;
                      var y = s.sibling;
                      if (y !== null) st = y;
                      else {
                        var A = s.return;
                        A !== null ? (st = A, Vu(A)) : st = null;
                      }
                      break e;
                    }
                }
                Et = 0, ge = null, Ha(t, e, u, 5);
                break;
              case 6:
                Et = 0, ge = null, Ha(t, e, u, 6);
                break;
              case 8:
                pr(), Ut = 6;
                break t;
              default:
                throw Error(i(462));
            }
          }
          qm();
          break;
        } catch (Y) {
          ih(t, Y);
        }
      while (true);
      return Je = Zl = null, N.H = a, N.A = n, St = l, st !== null ? 0 : (At = null, dt = 0, ou(), Ut);
    }
    function qm() {
      for (; st !== null && !fp(); ) oh(st);
    }
    function oh(t) {
      var e = Hs(t.alternate, t, al);
      t.memoizedProps = t.pendingProps, e === null ? Vu(t) : st = e;
    }
    function sh(t) {
      var e = t, l = e.alternate;
      switch (e.tag) {
        case 15:
        case 0:
          e = Ms(l, e, e.pendingProps, e.type, void 0, dt);
          break;
        case 11:
          e = Ms(l, e, e.pendingProps, e.type.render, e.ref, dt);
          break;
        case 5:
          xf(e);
        default:
          Bs(l, e), e = st = ro(e, al), e = Hs(l, e, al);
      }
      t.memoizedProps = t.pendingProps, e === null ? Vu(t) : st = e;
    }
    function Ha(t, e, l, a) {
      Je = Zl = null, xf(e), Ta = null, rn = 0;
      var n = e.return;
      try {
        if (_m(t, n, e, l, dt)) {
          Ut = 1, Nu(t, Te(l, t.current)), st = null;
          return;
        }
      } catch (u) {
        if (n !== null) throw st = n, u;
        Ut = 1, Nu(t, Te(l, t.current)), st = null;
        return;
      }
      e.flags & 32768 ? (vt || a === 1 ? t = true : xa || (dt & 536870912) !== 0 ? t = false : (zl = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = me.current, a !== null && a.tag === 13 && (a.flags |= 16384))), hh(e, t)) : Vu(e);
    }
    function Vu(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          hh(e, zl);
          return;
        }
        t = e.return;
        var l = Om(e.alternate, e, al);
        if (l !== null) {
          st = l;
          return;
        }
        if (e = e.sibling, e !== null) {
          st = e;
          return;
        }
        st = e = t;
      } while (e !== null);
      Ut === 0 && (Ut = 5);
    }
    function hh(t, e) {
      do {
        var l = xm(t.alternate, t);
        if (l !== null) {
          l.flags &= 32767, st = l;
          return;
        }
        if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
          st = t;
          return;
        }
        st = t = l;
      } while (t !== null);
      Ut = 6, st = null;
    }
    function dh(t, e, l, a, n, u, r, s, y) {
      t.cancelPendingCommit = null;
      do
        Ku();
      while (Vt !== 0);
      if ((St & 6) !== 0) throw Error(i(327));
      if (e !== null) {
        if (e === t.current) throw Error(i(177));
        if (u = e.lanes | e.childLanes, u |= lf, gp(t, l, u, r, s, y), t === At && (st = At = null, dt = 0), Na = e, Dl = t, nl = l, sr = u, hr = n, lh = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, jm(Wn, function() {
          return yh(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
          a = N.T, N.T = null, n = J.p, J.p = 2, r = St, St |= 4;
          try {
            Cm(t, e, l);
          } finally {
            St = r, J.p = n, N.T = a;
          }
        }
        Vt = 1, ph(), mh(), vh();
      }
    }
    function ph() {
      if (Vt === 1) {
        Vt = 0;
        var t = Dl, e = Na, l = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || l) {
          l = N.T, N.T = null;
          var a = J.p;
          J.p = 2;
          var n = St;
          St |= 4;
          try {
            Ws(e, t);
            var u = Ar, r = Ic(t.containerInfo), s = u.focusedElem, y = u.selectionRange;
            if (r !== s && s && s.ownerDocument && Pc(s.ownerDocument.documentElement, s)) {
              if (y !== null && ki(s)) {
                var A = y.start, Y = y.end;
                if (Y === void 0 && (Y = A), "selectionStart" in s) s.selectionStart = A, s.selectionEnd = Math.min(Y, s.value.length);
                else {
                  var G = s.ownerDocument || document, M = G && G.defaultView || window;
                  if (M.getSelection) {
                    var C = M.getSelection(), $ = s.textContent.length, lt = Math.min(y.start, $), _t = y.end === void 0 ? lt : Math.min(y.end, $);
                    !C.extend && lt > _t && (r = _t, _t = lt, lt = r);
                    var D = kc(s, lt), S = kc(s, _t);
                    if (D && S && (C.rangeCount !== 1 || C.anchorNode !== D.node || C.anchorOffset !== D.offset || C.focusNode !== S.node || C.focusOffset !== S.offset)) {
                      var _ = G.createRange();
                      _.setStart(D.node, D.offset), C.removeAllRanges(), lt > _t ? (C.addRange(_), C.extend(S.node, S.offset)) : (_.setEnd(S.node, S.offset), C.addRange(_));
                    }
                  }
                }
              }
              for (G = [], C = s; C = C.parentNode; ) C.nodeType === 1 && G.push({
                element: C,
                left: C.scrollLeft,
                top: C.scrollTop
              });
              for (typeof s.focus == "function" && s.focus(), s = 0; s < G.length; s++) {
                var L = G[s];
                L.element.scrollLeft = L.left, L.element.scrollTop = L.top;
              }
            }
            ni = !!_r, Ar = _r = null;
          } finally {
            St = n, J.p = a, N.T = l;
          }
        }
        t.current = e, Vt = 2;
      }
    }
    function mh() {
      if (Vt === 2) {
        Vt = 0;
        var t = Dl, e = Na, l = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || l) {
          l = N.T, N.T = null;
          var a = J.p;
          J.p = 2;
          var n = St;
          St |= 4;
          try {
            Qs(t, e.alternate, e);
          } finally {
            St = n, J.p = a, N.T = l;
          }
        }
        Vt = 3;
      }
    }
    function vh() {
      if (Vt === 4 || Vt === 3) {
        Vt = 0, rp();
        var t = Dl, e = Na, l = nl, a = lh;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Vt = 5 : (Vt = 0, Na = Dl = null, gh(t, t.pendingLanes));
        var n = t.pendingLanes;
        if (n === 0 && (Tl = null), Ni(l), e = e.stateNode, se && typeof se.onCommitFiberRoot == "function") try {
          se.onCommitFiberRoot(Qa, e, void 0, (e.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          e = N.T, n = J.p, J.p = 2, N.T = null;
          try {
            for (var u = t.onRecoverableError, r = 0; r < a.length; r++) {
              var s = a[r];
              u(s.value, {
                componentStack: s.stack
              });
            }
          } finally {
            N.T = e, J.p = n;
          }
        }
        (nl & 3) !== 0 && Ku(), Ye(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === dr ? Rn++ : (Rn = 0, dr = t) : Rn = 0, _n(0);
      }
    }
    function gh(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, un(e)));
    }
    function Ku() {
      return ph(), mh(), vh(), yh();
    }
    function yh() {
      if (Vt !== 5) return false;
      var t = Dl, e = sr;
      sr = 0;
      var l = Ni(nl), a = N.T, n = J.p;
      try {
        J.p = 32 > l ? 32 : l, N.T = null, l = hr, hr = null;
        var u = Dl, r = nl;
        if (Vt = 0, Na = Dl = null, nl = 0, (St & 6) !== 0) throw Error(i(331));
        var s = St;
        if (St |= 4, Is(u.current), Fs(u, u.current, r, l), St = s, _n(0, false), se && typeof se.onPostCommitFiberRoot == "function") try {
          se.onPostCommitFiberRoot(Qa, u);
        } catch {
        }
        return true;
      } finally {
        J.p = n, N.T = a, gh(t, e);
      }
    }
    function Sh(t, e, l) {
      e = Te(l, e), e = Vf(t.stateNode, e, 2), t = gl(t, e, 2), t !== null && (Va(t, 2), Ye(t));
    }
    function Tt(t, e, l) {
      if (t.tag === 3) Sh(t, t, l);
      else for (; e !== null; ) {
        if (e.tag === 3) {
          Sh(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Tl === null || !Tl.has(a))) {
            t = Te(l, t), l = bs(2), a = gl(e, l, 2), a !== null && (zs(l, a, e, t), Va(a, 2), Ye(a));
            break;
          }
        }
        e = e.return;
      }
    }
    function vr(t, e, l) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new Hm();
        var n = /* @__PURE__ */ new Set();
        a.set(e, n);
      } else n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
      n.has(l) || (rr = true, n.add(l), t = Lm.bind(null, t, e, l), e.then(t, t));
    }
    function Lm(t, e, l) {
      var a = t.pingCache;
      a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, At === t && (dt & l) === l && (Ut === 4 || Ut === 3 && (dt & 62914560) === dt && 300 > oe() - Xu ? (St & 2) === 0 && Ua(t, 0) : cr |= l, Ca === dt && (Ca = 0)), Ye(t);
    }
    function bh(t, e) {
      e === 0 && (e = dc()), t = Gl(t, e), t !== null && (Va(t, e), Ye(t));
    }
    function Xm(t) {
      var e = t.memoizedState, l = 0;
      e !== null && (l = e.retryLane), bh(t, l);
    }
    function Gm(t, e) {
      var l = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var a = t.stateNode, n = t.memoizedState;
          n !== null && (l = n.retryLane);
          break;
        case 19:
          a = t.stateNode;
          break;
        case 22:
          a = t.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      a !== null && a.delete(e), bh(t, l);
    }
    function jm(t, e) {
      return Mi(t, e);
    }
    var Ju = null, wa = null, gr = false, Wu = false, yr = false, _l = 0;
    function Ye(t) {
      t !== wa && t.next === null && (wa === null ? Ju = wa = t : wa = wa.next = t), Wu = true, gr || (gr = true, Zm());
    }
    function _n(t, e) {
      if (!yr && Wu) {
        yr = true;
        do
          for (var l = false, a = Ju; a !== null; ) {
            if (t !== 0) {
              var n = a.pendingLanes;
              if (n === 0) var u = 0;
              else {
                var r = a.suspendedLanes, s = a.pingedLanes;
                u = (1 << 31 - he(42 | t) + 1) - 1, u &= n & ~(r & ~s), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
              }
              u !== 0 && (l = true, Dh(a, u));
            } else u = dt, u = Pn(a, a === At ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Za(a, u) || (l = true, Dh(a, u));
            a = a.next;
          }
        while (l);
        yr = false;
      }
    }
    function Qm() {
      zh();
    }
    function zh() {
      Wu = gr = false;
      var t = 0;
      _l !== 0 && tv() && (t = _l);
      for (var e = oe(), l = null, a = Ju; a !== null; ) {
        var n = a.next, u = Eh(a, e);
        u === 0 ? (a.next = null, l === null ? Ju = n : l.next = n, n === null && (wa = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (Wu = true)), a = n;
      }
      Vt !== 0 && Vt !== 5 || _n(t), _l !== 0 && (_l = 0);
    }
    function Eh(t, e) {
      for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
        var r = 31 - he(u), s = 1 << r, y = n[r];
        y === -1 ? ((s & l) === 0 || (s & a) !== 0) && (n[r] = vp(s, e)) : y <= e && (t.expiredLanes |= s), u &= ~s;
      }
      if (e = At, l = dt, l = Pn(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (Et === 2 || Et === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && Oi(a), t.callbackNode = null, t.callbackPriority = 0;
      if ((l & 3) === 0 || Za(t, l)) {
        if (e = l & -l, e === t.callbackPriority) return e;
        switch (a !== null && Oi(a), Ni(l)) {
          case 2:
          case 8:
            l = sc;
            break;
          case 32:
            l = Wn;
            break;
          case 268435456:
            l = hc;
            break;
          default:
            l = Wn;
        }
        return a = Th.bind(null, t), l = Mi(l, a), t.callbackPriority = e, t.callbackNode = l, e;
      }
      return a !== null && a !== null && Oi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function Th(t, e) {
      if (Vt !== 0 && Vt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
      var l = t.callbackNode;
      if (Ku() && t.callbackNode !== l) return null;
      var a = dt;
      return a = Pn(t, t === At ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (nh(t, a, e), Eh(t, oe()), t.callbackNode != null && t.callbackNode === l ? Th.bind(null, t) : null);
    }
    function Dh(t, e) {
      if (Ku()) return null;
      nh(t, e, true);
    }
    function Zm() {
      lv(function() {
        (St & 6) !== 0 ? Mi(oc, Qm) : zh();
      });
    }
    function Sr() {
      if (_l === 0) {
        var t = ba;
        t === 0 && (t = $n, $n <<= 1, ($n & 261888) === 0 && ($n = 256)), _l = t;
      }
      return _l;
    }
    function Rh(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : lu("" + t);
    }
    function _h(t, e) {
      var l = e.ownerDocument.createElement("input");
      return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
    }
    function Vm(t, e, l, a, n) {
      if (e === "submit" && l && l.stateNode === n) {
        var u = Rh((n[ae] || null).action), r = a.submitter;
        r && (e = (e = r[ae] || null) ? Rh(e.formAction) : r.getAttribute("formAction"), e !== null && (u = e, r = null));
        var s = new iu("action", "action", null, a, n);
        t.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (_l !== 0) {
                    var y = r ? _h(n, r) : new FormData(n);
                    Lf(l, {
                      pending: true,
                      data: y,
                      method: n.method,
                      action: u
                    }, null, y);
                  }
                } else typeof u == "function" && (s.preventDefault(), y = r ? _h(n, r) : new FormData(n), Lf(l, {
                  pending: true,
                  data: y,
                  method: n.method,
                  action: u
                }, u, y));
              },
              currentTarget: n
            }
          ]
        });
      }
    }
    for (var br = 0; br < ef.length; br++) {
      var zr = ef[br], Km = zr.toLowerCase(), Jm = zr[0].toUpperCase() + zr.slice(1);
      xe(Km, "on" + Jm);
    }
    xe(lo, "onAnimationEnd"), xe(ao, "onAnimationIteration"), xe(no, "onAnimationStart"), xe("dblclick", "onDoubleClick"), xe("focusin", "onFocus"), xe("focusout", "onBlur"), xe(cm, "onTransitionRun"), xe(om, "onTransitionStart"), xe(sm, "onTransitionCancel"), xe(uo, "onTransitionEnd"), ia("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), ia("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), ia("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), ia("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), Yl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Yl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Yl("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Yl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Yl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Yl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var An = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Wm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(An));
    function Ah(t, e) {
      e = (e & 4) !== 0;
      for (var l = 0; l < t.length; l++) {
        var a = t[l], n = a.event;
        a = a.listeners;
        t: {
          var u = void 0;
          if (e) for (var r = a.length - 1; 0 <= r; r--) {
            var s = a[r], y = s.instance, A = s.currentTarget;
            if (s = s.listener, y !== u && n.isPropagationStopped()) break t;
            u = s, n.currentTarget = A;
            try {
              u(n);
            } catch (Y) {
              cu(Y);
            }
            n.currentTarget = null, u = y;
          }
          else for (r = 0; r < a.length; r++) {
            if (s = a[r], y = s.instance, A = s.currentTarget, s = s.listener, y !== u && n.isPropagationStopped()) break t;
            u = s, n.currentTarget = A;
            try {
              u(n);
            } catch (Y) {
              cu(Y);
            }
            n.currentTarget = null, u = y;
          }
        }
      }
    }
    function ht(t, e) {
      var l = e[Ui];
      l === void 0 && (l = e[Ui] = /* @__PURE__ */ new Set());
      var a = t + "__bubble";
      l.has(a) || (Mh(e, t, 2, false), l.add(a));
    }
    function Er(t, e, l) {
      var a = 0;
      e && (a |= 4), Mh(l, t, a, e);
    }
    var $u = "_reactListening" + Math.random().toString(36).slice(2);
    function Tr(t) {
      if (!t[$u]) {
        t[$u] = true, bc.forEach(function(l) {
          l !== "selectionchange" && (Wm.has(l) || Er(l, false, t), Er(l, true, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[$u] || (e[$u] = true, Er("selectionchange", false, e));
      }
    }
    function Mh(t, e, l, a) {
      switch (ad(e)) {
        case 2:
          var n = Ev;
          break;
        case 8:
          n = Tv;
          break;
        default:
          n = qr;
      }
      l = n.bind(null, e, l, t), n = void 0, !ji || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = true), a ? n !== void 0 ? t.addEventListener(e, l, {
        capture: true,
        passive: n
      }) : t.addEventListener(e, l, true) : n !== void 0 ? t.addEventListener(e, l, {
        passive: n
      }) : t.addEventListener(e, l, false);
    }
    function Dr(t, e, l, a, n) {
      var u = a;
      if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for (; ; ) {
        if (a === null) return;
        var r = a.tag;
        if (r === 3 || r === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (r === 4) for (r = a.return; r !== null; ) {
            var y = r.tag;
            if ((y === 3 || y === 4) && r.stateNode.containerInfo === n) return;
            r = r.return;
          }
          for (; s !== null; ) {
            if (r = aa(s), r === null) return;
            if (y = r.tag, y === 5 || y === 6 || y === 26 || y === 27) {
              a = u = r;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
      Nc(function() {
        var A = u, Y = Xi(l), G = [];
        t: {
          var M = io.get(t);
          if (M !== void 0) {
            var C = iu, $ = t;
            switch (t) {
              case "keypress":
                if (nu(l) === 0) break t;
              case "keydown":
              case "keyup":
                C = Gp;
                break;
              case "focusin":
                $ = "focus", C = Ki;
                break;
              case "focusout":
                $ = "blur", C = Ki;
                break;
              case "beforeblur":
              case "afterblur":
                C = Ki;
                break;
              case "click":
                if (l.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                C = wc;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                C = Op;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                C = Zp;
                break;
              case lo:
              case ao:
              case no:
                C = Np;
                break;
              case uo:
                C = Kp;
                break;
              case "scroll":
              case "scrollend":
                C = Ap;
                break;
              case "wheel":
                C = Wp;
                break;
              case "copy":
              case "cut":
              case "paste":
                C = Hp;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                C = Yc;
                break;
              case "toggle":
              case "beforetoggle":
                C = Fp;
            }
            var lt = (e & 4) !== 0, _t = !lt && (t === "scroll" || t === "scrollend"), D = lt ? M !== null ? M + "Capture" : null : M;
            lt = [];
            for (var S = A, _; S !== null; ) {
              var L = S;
              if (_ = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || _ === null || D === null || (L = Wa(S, D), L != null && lt.push(Mn(S, L, _))), _t) break;
              S = S.return;
            }
            0 < lt.length && (M = new C(M, $, null, l, Y), G.push({
              event: M,
              listeners: lt
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (M = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout", M && l !== Li && ($ = l.relatedTarget || l.fromElement) && (aa($) || $[la])) break t;
            if ((C || M) && (M = Y.window === Y ? Y : (M = Y.ownerDocument) ? M.defaultView || M.parentWindow : window, C ? ($ = l.relatedTarget || l.toElement, C = A, $ = $ ? aa($) : null, $ !== null && (_t = d($), lt = $.tag, $ !== _t || lt !== 5 && lt !== 27 && lt !== 6) && ($ = null)) : (C = null, $ = A), C !== $)) {
              if (lt = wc, L = "onMouseLeave", D = "onMouseEnter", S = "mouse", (t === "pointerout" || t === "pointerover") && (lt = Yc, L = "onPointerLeave", D = "onPointerEnter", S = "pointer"), _t = C == null ? M : Ja(C), _ = $ == null ? M : Ja($), M = new lt(L, S + "leave", C, l, Y), M.target = _t, M.relatedTarget = _, L = null, aa(Y) === A && (lt = new lt(D, S + "enter", $, l, Y), lt.target = _, lt.relatedTarget = _t, L = lt), _t = L, C && $) e: {
                for (lt = $m, D = C, S = $, _ = 0, L = D; L; L = lt(L)) _++;
                L = 0;
                for (var tt = S; tt; tt = lt(tt)) L++;
                for (; 0 < _ - L; ) D = lt(D), _--;
                for (; 0 < L - _; ) S = lt(S), L--;
                for (; _--; ) {
                  if (D === S || S !== null && D === S.alternate) {
                    lt = D;
                    break e;
                  }
                  D = lt(D), S = lt(S);
                }
                lt = null;
              }
              else lt = null;
              C !== null && Oh(G, M, C, lt, false), $ !== null && _t !== null && Oh(G, _t, $, lt, true);
            }
          }
          t: {
            if (M = A ? Ja(A) : window, C = M.nodeName && M.nodeName.toLowerCase(), C === "select" || C === "input" && M.type === "file") var gt = Vc;
            else if (Qc(M)) if (Kc) gt = im;
            else {
              gt = nm;
              var P = am;
            }
            else C = M.nodeName, !C || C.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? A && qi(A.elementType) && (gt = Vc) : gt = um;
            if (gt && (gt = gt(t, A))) {
              Zc(G, gt, l, Y);
              break t;
            }
            P && P(t, M, A), t === "focusout" && A && M.type === "number" && A.memoizedProps.value != null && Yi(M, "number", M.value);
          }
          switch (P = A ? Ja(A) : window, t) {
            case "focusin":
              (Qc(P) || P.contentEditable === "true") && (ha = P, Pi = A, ln = null);
              break;
            case "focusout":
              ln = Pi = ha = null;
              break;
            case "mousedown":
              Ii = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Ii = false, to(G, l, Y);
              break;
            case "selectionchange":
              if (rm) break;
            case "keydown":
            case "keyup":
              to(G, l, Y);
          }
          var ft;
          if (Wi) t: {
            switch (t) {
              case "compositionstart":
                var pt = "onCompositionStart";
                break t;
              case "compositionend":
                pt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                pt = "onCompositionUpdate";
                break t;
            }
            pt = void 0;
          }
          else sa ? Gc(t, l) && (pt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (pt = "onCompositionStart");
          pt && (qc && l.locale !== "ko" && (sa || pt !== "onCompositionStart" ? pt === "onCompositionEnd" && sa && (ft = Uc()) : (ol = Y, Qi = "value" in ol ? ol.value : ol.textContent, sa = true)), P = Fu(A, pt), 0 < P.length && (pt = new Bc(pt, t, null, l, Y), G.push({
            event: pt,
            listeners: P
          }), ft ? pt.data = ft : (ft = jc(l), ft !== null && (pt.data = ft)))), (ft = Pp ? Ip(t, l) : tm(t, l)) && (pt = Fu(A, "onBeforeInput"), 0 < pt.length && (P = new Bc("onBeforeInput", "beforeinput", null, l, Y), G.push({
            event: P,
            listeners: pt
          }), P.data = ft)), Vm(G, t, A, l, Y);
        }
        Ah(G, e);
      });
    }
    function Mn(t, e, l) {
      return {
        instance: t,
        listener: e,
        currentTarget: l
      };
    }
    function Fu(t, e) {
      for (var l = e + "Capture", a = []; t !== null; ) {
        var n = t, u = n.stateNode;
        if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Wa(t, l), n != null && a.unshift(Mn(t, n, u)), n = Wa(t, e), n != null && a.push(Mn(t, n, u))), t.tag === 3) return a;
        t = t.return;
      }
      return [];
    }
    function $m(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function Oh(t, e, l, a, n) {
      for (var u = e._reactName, r = []; l !== null && l !== a; ) {
        var s = l, y = s.alternate, A = s.stateNode;
        if (s = s.tag, y !== null && y === a) break;
        s !== 5 && s !== 26 && s !== 27 || A === null || (y = A, n ? (A = Wa(l, u), A != null && r.unshift(Mn(l, A, y))) : n || (A = Wa(l, u), A != null && r.push(Mn(l, A, y)))), l = l.return;
      }
      r.length !== 0 && t.push({
        event: e,
        listeners: r
      });
    }
    var Fm = /\r\n?/g, km = /\u0000|\uFFFD/g;
    function xh(t) {
      return (typeof t == "string" ? t : "" + t).replace(Fm, `
`).replace(km, "");
    }
    function Ch(t, e) {
      return e = xh(e), xh(t) === e;
    }
    function Rt(t, e, l, a, n, u) {
      switch (l) {
        case "children":
          typeof a == "string" ? e === "body" || e === "textarea" && a === "" || ra(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && ra(t, "" + a);
          break;
        case "className":
          tu(t, "class", a);
          break;
        case "tabIndex":
          tu(t, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          tu(t, l, a);
          break;
        case "style":
          xc(t, a, u);
          break;
        case "data":
          if (e !== "object") {
            tu(t, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (e !== "a" || l !== "href")) {
            t.removeAttribute(l);
            break;
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(l);
            break;
          }
          a = lu("" + a), t.setAttribute(l, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof u == "function" && (l === "formAction" ? (e !== "input" && Rt(t, e, "name", n.name, n, null), Rt(t, e, "formEncType", n.formEncType, n, null), Rt(t, e, "formMethod", n.formMethod, n, null), Rt(t, e, "formTarget", n.formTarget, n, null)) : (Rt(t, e, "encType", n.encType, n, null), Rt(t, e, "method", n.method, n, null), Rt(t, e, "target", n.target, n, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(l);
            break;
          }
          a = lu("" + a), t.setAttribute(l, a);
          break;
        case "onClick":
          a != null && (t.onclick = Qe);
          break;
        case "onScroll":
          a != null && ht("scroll", t);
          break;
        case "onScrollEnd":
          a != null && ht("scrollend", t);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(i(61));
            if (l = a.__html, l != null) {
              if (n.children != null) throw Error(i(60));
              t.innerHTML = l;
            }
          }
          break;
        case "multiple":
          t.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          t.muted = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
            t.removeAttribute("xlink:href");
            break;
          }
          l = lu("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
          break;
        case "capture":
        case "download":
          a === true ? t.setAttribute(l, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
          break;
        case "popover":
          ht("beforetoggle", t), ht("toggle", t), In(t, "popover", a);
          break;
        case "xlinkActuate":
          je(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          je(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          je(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          je(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          je(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          je(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          je(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          je(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          je(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          In(t, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Rp.get(l) || l, In(t, l, a));
      }
    }
    function Rr(t, e, l, a, n, u) {
      switch (l) {
        case "style":
          xc(t, a, u);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(i(61));
            if (l = a.__html, l != null) {
              if (n.children != null) throw Error(i(60));
              t.innerHTML = l;
            }
          }
          break;
        case "children":
          typeof a == "string" ? ra(t, a) : (typeof a == "number" || typeof a == "bigint") && ra(t, "" + a);
          break;
        case "onScroll":
          a != null && ht("scroll", t);
          break;
        case "onScrollEnd":
          a != null && ht("scrollend", t);
          break;
        case "onClick":
          a != null && (t.onclick = Qe);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!zc.hasOwnProperty(l)) t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[ae] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === true ? t.setAttribute(l, "") : In(t, l, a);
          }
      }
    }
    function It(t, e, l) {
      switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          ht("error", t), ht("load", t);
          var a = false, n = false, u;
          for (u in l) if (l.hasOwnProperty(u)) {
            var r = l[u];
            if (r != null) switch (u) {
              case "src":
                a = true;
                break;
              case "srcSet":
                n = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, e));
              default:
                Rt(t, e, u, r, l, null);
            }
          }
          n && Rt(t, e, "srcSet", l.srcSet, l, null), a && Rt(t, e, "src", l.src, l, null);
          return;
        case "input":
          ht("invalid", t);
          var s = u = r = n = null, y = null, A = null;
          for (a in l) if (l.hasOwnProperty(a)) {
            var Y = l[a];
            if (Y != null) switch (a) {
              case "name":
                n = Y;
                break;
              case "type":
                r = Y;
                break;
              case "checked":
                y = Y;
                break;
              case "defaultChecked":
                A = Y;
                break;
              case "value":
                u = Y;
                break;
              case "defaultValue":
                s = Y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null) throw Error(i(137, e));
                break;
              default:
                Rt(t, e, a, Y, l, null);
            }
          }
          _c(t, u, s, y, A, r, n, false);
          return;
        case "select":
          ht("invalid", t), a = r = u = null;
          for (n in l) if (l.hasOwnProperty(n) && (s = l[n], s != null)) switch (n) {
            case "value":
              u = s;
              break;
            case "defaultValue":
              r = s;
              break;
            case "multiple":
              a = s;
            default:
              Rt(t, e, n, s, l, null);
          }
          e = u, l = r, t.multiple = !!a, e != null ? fa(t, !!a, e, false) : l != null && fa(t, !!a, l, true);
          return;
        case "textarea":
          ht("invalid", t), u = n = a = null;
          for (r in l) if (l.hasOwnProperty(r) && (s = l[r], s != null)) switch (r) {
            case "value":
              a = s;
              break;
            case "defaultValue":
              n = s;
              break;
            case "children":
              u = s;
              break;
            case "dangerouslySetInnerHTML":
              if (s != null) throw Error(i(91));
              break;
            default:
              Rt(t, e, r, s, l, null);
          }
          Mc(t, a, n, u);
          return;
        case "option":
          for (y in l) if (l.hasOwnProperty(y) && (a = l[y], a != null)) switch (y) {
            case "selected":
              t.selected = a && typeof a != "function" && typeof a != "symbol";
              break;
            default:
              Rt(t, e, y, a, l, null);
          }
          return;
        case "dialog":
          ht("beforetoggle", t), ht("toggle", t), ht("cancel", t), ht("close", t);
          break;
        case "iframe":
        case "object":
          ht("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < An.length; a++) ht(An[a], t);
          break;
        case "image":
          ht("error", t), ht("load", t);
          break;
        case "details":
          ht("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          ht("error", t), ht("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (A in l) if (l.hasOwnProperty(A) && (a = l[A], a != null)) switch (A) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(i(137, e));
            default:
              Rt(t, e, A, a, l, null);
          }
          return;
        default:
          if (qi(e)) {
            for (Y in l) l.hasOwnProperty(Y) && (a = l[Y], a !== void 0 && Rr(t, e, Y, a, l, void 0));
            return;
          }
      }
      for (s in l) l.hasOwnProperty(s) && (a = l[s], a != null && Rt(t, e, s, a, l, null));
    }
    function Pm(t, e, l, a) {
      switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var n = null, u = null, r = null, s = null, y = null, A = null, Y = null;
          for (C in l) {
            var G = l[C];
            if (l.hasOwnProperty(C) && G != null) switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                y = G;
              default:
                a.hasOwnProperty(C) || Rt(t, e, C, null, a, G);
            }
          }
          for (var M in a) {
            var C = a[M];
            if (G = l[M], a.hasOwnProperty(M) && (C != null || G != null)) switch (M) {
              case "type":
                u = C;
                break;
              case "name":
                n = C;
                break;
              case "checked":
                A = C;
                break;
              case "defaultChecked":
                Y = C;
                break;
              case "value":
                r = C;
                break;
              case "defaultValue":
                s = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(i(137, e));
                break;
              default:
                C !== G && Rt(t, e, M, C, a, G);
            }
          }
          Bi(t, r, s, y, A, Y, u, n);
          return;
        case "select":
          C = r = s = M = null;
          for (u in l) if (y = l[u], l.hasOwnProperty(u) && y != null) switch (u) {
            case "value":
              break;
            case "multiple":
              C = y;
            default:
              a.hasOwnProperty(u) || Rt(t, e, u, null, a, y);
          }
          for (n in a) if (u = a[n], y = l[n], a.hasOwnProperty(n) && (u != null || y != null)) switch (n) {
            case "value":
              M = u;
              break;
            case "defaultValue":
              s = u;
              break;
            case "multiple":
              r = u;
            default:
              u !== y && Rt(t, e, n, u, a, y);
          }
          e = s, l = r, a = C, M != null ? fa(t, !!l, M, false) : !!a != !!l && (e != null ? fa(t, !!l, e, true) : fa(t, !!l, l ? [] : "", false));
          return;
        case "textarea":
          C = M = null;
          for (s in l) if (n = l[s], l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s)) switch (s) {
            case "value":
              break;
            case "children":
              break;
            default:
              Rt(t, e, s, null, a, n);
          }
          for (r in a) if (n = a[r], u = l[r], a.hasOwnProperty(r) && (n != null || u != null)) switch (r) {
            case "value":
              M = n;
              break;
            case "defaultValue":
              C = n;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (n != null) throw Error(i(91));
              break;
            default:
              n !== u && Rt(t, e, r, n, a, u);
          }
          Ac(t, M, C);
          return;
        case "option":
          for (var $ in l) if (M = l[$], l.hasOwnProperty($) && M != null && !a.hasOwnProperty($)) switch ($) {
            case "selected":
              t.selected = false;
              break;
            default:
              Rt(t, e, $, null, a, M);
          }
          for (y in a) if (M = a[y], C = l[y], a.hasOwnProperty(y) && M !== C && (M != null || C != null)) switch (y) {
            case "selected":
              t.selected = M && typeof M != "function" && typeof M != "symbol";
              break;
            default:
              Rt(t, e, y, M, a, C);
          }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var lt in l) M = l[lt], l.hasOwnProperty(lt) && M != null && !a.hasOwnProperty(lt) && Rt(t, e, lt, null, a, M);
          for (A in a) if (M = a[A], C = l[A], a.hasOwnProperty(A) && M !== C && (M != null || C != null)) switch (A) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (M != null) throw Error(i(137, e));
              break;
            default:
              Rt(t, e, A, M, a, C);
          }
          return;
        default:
          if (qi(e)) {
            for (var _t in l) M = l[_t], l.hasOwnProperty(_t) && M !== void 0 && !a.hasOwnProperty(_t) && Rr(t, e, _t, void 0, a, M);
            for (Y in a) M = a[Y], C = l[Y], !a.hasOwnProperty(Y) || M === C || M === void 0 && C === void 0 || Rr(t, e, Y, M, a, C);
            return;
          }
      }
      for (var D in l) M = l[D], l.hasOwnProperty(D) && M != null && !a.hasOwnProperty(D) && Rt(t, e, D, null, a, M);
      for (G in a) M = a[G], C = l[G], !a.hasOwnProperty(G) || M === C || M == null && C == null || Rt(t, e, G, M, a, C);
    }
    function Nh(t) {
      switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function Im() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
          var n = l[a], u = n.transferSize, r = n.initiatorType, s = n.duration;
          if (u && s && Nh(r)) {
            for (r = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
              var y = l[a], A = y.startTime;
              if (A > s) break;
              var Y = y.transferSize, G = y.initiatorType;
              Y && Nh(G) && (y = y.responseEnd, r += Y * (y < s ? 1 : (s - A) / (y - A)));
            }
            if (--a, e += 8 * (u + r) / (n.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    var _r = null, Ar = null;
    function ku(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Uh(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function Hh(t, e) {
      if (t === 0) switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return t === 1 && e === "foreignObject" ? 0 : t;
    }
    function Mr(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    var Or = null;
    function tv() {
      var t = window.event;
      return t && t.type === "popstate" ? t === Or ? false : (Or = t, true) : (Or = null, false);
    }
    var wh = typeof setTimeout == "function" ? setTimeout : void 0, ev = typeof clearTimeout == "function" ? clearTimeout : void 0, Bh = typeof Promise == "function" ? Promise : void 0, lv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bh < "u" ? function(t) {
      return Bh.resolve(null).then(t).catch(av);
    } : wh;
    function av(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function Al(t) {
      return t === "head";
    }
    function Yh(t, e) {
      var l = e, a = 0;
      do {
        var n = l.nextSibling;
        if (t.removeChild(l), n && n.nodeType === 8) if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(n), La(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
        else if (l === "html") On(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, On(l);
          for (var u = l.firstChild; u; ) {
            var r = u.nextSibling, s = u.nodeName;
            u[Ka] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = r;
          }
        } else l === "body" && On(t.ownerDocument.body);
        l = n;
      } while (l);
      La(e);
    }
    function qh(t, e) {
      var l = t;
      t = 0;
      do {
        var a = l.nextSibling;
        if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8) if (l = a.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
        l = a;
      } while (l);
    }
    function xr(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var l = e;
        switch (e = e.nextSibling, l.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            xr(l), Hi(l);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (l.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(l);
      }
    }
    function nv(t, e, l, a) {
      for (; t.nodeType === 1; ) {
        var n = l;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
        } else if (a) {
          if (!t[Ka]) switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
              if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title)) break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
              return t;
            default:
              return t;
          }
        } else if (e === "input" && t.type === "hidden") {
          var u = n.name == null ? null : "" + n.name;
          if (n.type === "hidden" && t.getAttribute("name") === u) return t;
        } else return t;
        if (t = Me(t.nextSibling), t === null) break;
      }
      return null;
    }
    function uv(t, e, l) {
      if (e === "") return null;
      for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Me(t.nextSibling), t === null)) return null;
      return t;
    }
    function Lh(t, e) {
      for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Me(t.nextSibling), t === null)) return null;
      return t;
    }
    function Cr(t) {
      return t.data === "$?" || t.data === "$~";
    }
    function Nr(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
    }
    function iv(t, e) {
      var l = t.ownerDocument;
      if (t.data === "$~") t._reactRetry = e;
      else if (t.data !== "$?" || l.readyState !== "loading") e();
      else {
        var a = function() {
          e(), l.removeEventListener("DOMContentLoaded", a);
        };
        l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
      }
    }
    function Me(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
          if (e === "/$" || e === "/&") return null;
        }
      }
      return t;
    }
    var Ur = null;
    function Xh(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var l = t.data;
          if (l === "/$" || l === "/&") {
            if (e === 0) return Me(t.nextSibling);
            e--;
          } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Gh(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var l = t.data;
          if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
            if (e === 0) return t;
            e--;
          } else l !== "/$" && l !== "/&" || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function jh(t, e, l) {
      switch (e = ku(l), t) {
        case "html":
          if (t = e.documentElement, !t) throw Error(i(452));
          return t;
        case "head":
          if (t = e.head, !t) throw Error(i(453));
          return t;
        case "body":
          if (t = e.body, !t) throw Error(i(454));
          return t;
        default:
          throw Error(i(451));
      }
    }
    function On(t) {
      for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      Hi(t);
    }
    var Oe = /* @__PURE__ */ new Map(), Qh = /* @__PURE__ */ new Set();
    function Pu(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    var ul = J.d;
    J.d = {
      f: fv,
      r: rv,
      D: cv,
      C: ov,
      L: sv,
      m: hv,
      X: pv,
      S: dv,
      M: mv
    };
    function fv() {
      var t = ul.f(), e = Qu();
      return t || e;
    }
    function rv(t) {
      var e = na(t);
      e !== null && e.tag === 5 && e.type === "form" ? is(e) : ul.r(t);
    }
    var Ba = typeof document > "u" ? null : document;
    function Zh(t, e, l) {
      var a = Ba;
      if (a && typeof e == "string" && e) {
        var n = ze(e);
        n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Qh.has(n) || (Qh.add(n), t = {
          rel: t,
          crossOrigin: l,
          href: e
        }, a.querySelector(n) === null && (e = a.createElement("link"), It(e, "link", t), Jt(e), a.head.appendChild(e)));
      }
    }
    function cv(t) {
      ul.D(t), Zh("dns-prefetch", t, null);
    }
    function ov(t, e) {
      ul.C(t, e), Zh("preconnect", t, e);
    }
    function sv(t, e, l) {
      ul.L(t, e, l);
      var a = Ba;
      if (a && t && e) {
        var n = 'link[rel="preload"][as="' + ze(e) + '"]';
        e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + ze(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + ze(l.imageSizes) + '"]')) : n += '[href="' + ze(t) + '"]';
        var u = n;
        switch (e) {
          case "style":
            u = Ya(t);
            break;
          case "script":
            u = qa(t);
        }
        Oe.has(u) || (t = E({
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        }, l), Oe.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(xn(u)) || e === "script" && a.querySelector(Cn(u)) || (e = a.createElement("link"), It(e, "link", t), Jt(e), a.head.appendChild(e)));
      }
    }
    function hv(t, e) {
      ul.m(t, e);
      var l = Ba;
      if (l && t) {
        var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + ze(a) + '"][href="' + ze(t) + '"]', u = n;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            u = qa(t);
        }
        if (!Oe.has(u) && (t = E({
          rel: "modulepreload",
          href: t
        }, e), Oe.set(u, t), l.querySelector(n) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (l.querySelector(Cn(u))) return;
          }
          a = l.createElement("link"), It(a, "link", t), Jt(a), l.head.appendChild(a);
        }
      }
    }
    function dv(t, e, l) {
      ul.S(t, e, l);
      var a = Ba;
      if (a && t) {
        var n = ua(a).hoistableStyles, u = Ya(t);
        e = e || "default";
        var r = n.get(u);
        if (!r) {
          var s = {
            loading: 0,
            preload: null
          };
          if (r = a.querySelector(xn(u))) s.loading = 5;
          else {
            t = E({
              rel: "stylesheet",
              href: t,
              "data-precedence": e
            }, l), (l = Oe.get(u)) && Hr(t, l);
            var y = r = a.createElement("link");
            Jt(y), It(y, "link", t), y._p = new Promise(function(A, Y) {
              y.onload = A, y.onerror = Y;
            }), y.addEventListener("load", function() {
              s.loading |= 1;
            }), y.addEventListener("error", function() {
              s.loading |= 2;
            }), s.loading |= 4, Iu(r, e, a);
          }
          r = {
            type: "stylesheet",
            instance: r,
            count: 1,
            state: s
          }, n.set(u, r);
        }
      }
    }
    function pv(t, e) {
      ul.X(t, e);
      var l = Ba;
      if (l && t) {
        var a = ua(l).hoistableScripts, n = qa(t), u = a.get(n);
        u || (u = l.querySelector(Cn(n)), u || (t = E({
          src: t,
          async: true
        }, e), (e = Oe.get(n)) && wr(t, e), u = l.createElement("script"), Jt(u), It(u, "link", t), l.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function mv(t, e) {
      ul.M(t, e);
      var l = Ba;
      if (l && t) {
        var a = ua(l).hoistableScripts, n = qa(t), u = a.get(n);
        u || (u = l.querySelector(Cn(n)), u || (t = E({
          src: t,
          async: true,
          type: "module"
        }, e), (e = Oe.get(n)) && wr(t, e), u = l.createElement("script"), Jt(u), It(u, "link", t), l.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function Vh(t, e, l, a) {
      var n = (n = ot.current) ? Pu(n) : null;
      if (!n) throw Error(i(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ya(l.href), l = ua(n).hoistableStyles, a = l.get(e), a || (a = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, l.set(e, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
            t = Ya(l.href);
            var u = ua(n).hoistableStyles, r = u.get(t);
            if (r || (n = n.ownerDocument || n, r = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, u.set(t, r), (u = n.querySelector(xn(t))) && !u._p && (r.instance = u, r.state.loading = 5), Oe.has(t) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, Oe.set(t, l), u || vv(n, t, l, r.state))), e && a === null) throw Error(i(528, ""));
            return r;
          }
          if (e && a !== null) throw Error(i(529, ""));
          return null;
        case "script":
          return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = qa(l), l = ua(n).hoistableScripts, a = l.get(e), a || (a = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, l.set(e, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(i(444, t));
      }
    }
    function Ya(t) {
      return 'href="' + ze(t) + '"';
    }
    function xn(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function Kh(t) {
      return E({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function vv(t, e, l, a) {
      t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
        return a.loading |= 1;
      }), e.addEventListener("error", function() {
        return a.loading |= 2;
      }), It(e, "link", l), Jt(e), t.head.appendChild(e));
    }
    function qa(t) {
      return '[src="' + ze(t) + '"]';
    }
    function Cn(t) {
      return "script[async]" + t;
    }
    function Jh(t, e, l) {
      if (e.count++, e.instance === null) switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + ze(l.href) + '"]');
          if (a) return e.instance = a, Jt(a), a;
          var n = E({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement("style"), Jt(a), It(a, "style", n), Iu(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = Ya(l.href);
          var u = t.querySelector(xn(n));
          if (u) return e.state.loading |= 4, e.instance = u, Jt(u), u;
          a = Kh(l), (n = Oe.get(n)) && Hr(a, n), u = (t.ownerDocument || t).createElement("link"), Jt(u);
          var r = u;
          return r._p = new Promise(function(s, y) {
            r.onload = s, r.onerror = y;
          }), It(u, "link", a), e.state.loading |= 4, Iu(u, l.precedence, t), e.instance = u;
        case "script":
          return u = qa(l.src), (n = t.querySelector(Cn(u))) ? (e.instance = n, Jt(n), n) : (a = l, (n = Oe.get(u)) && (a = E({}, l), wr(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Jt(n), It(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(i(443, e.type));
      }
      else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Iu(a, l.precedence, t));
      return e.instance;
    }
    function Iu(t, e, l) {
      for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, r = 0; r < a.length; r++) {
        var s = a[r];
        if (s.dataset.precedence === e) u = s;
        else if (u !== n) break;
      }
      u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
    }
    function Hr(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function wr(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    var ti = null;
    function Wh(t, e, l) {
      if (ti === null) {
        var a = /* @__PURE__ */ new Map(), n = ti = /* @__PURE__ */ new Map();
        n.set(l, a);
      } else n = ti, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
      if (a.has(t)) return a;
      for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
        var u = l[n];
        if (!(u[Ka] || u[$t] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
          var r = u.getAttribute(e) || "";
          r = t + r;
          var s = a.get(r);
          s ? s.push(u) : a.set(r, [
            u
          ]);
        }
      }
      return a;
    }
    function $h(t, e, l) {
      t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null);
    }
    function gv(t, e, l) {
      if (l === 1 || e.itemProp != null) return false;
      switch (t) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
          return true;
        case "link":
          if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
          switch (e.rel) {
            case "stylesheet":
              return t = e.disabled, typeof e.precedence == "string" && t == null;
            default:
              return true;
          }
        case "script":
          if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
      }
      return false;
    }
    function Fh(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    function yv(t, e, l, a) {
      if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (l.state.loading & 4) === 0) {
        if (l.instance === null) {
          var n = Ya(a.href), u = e.querySelector(xn(n));
          if (u) {
            e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ei.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Jt(u);
            return;
          }
          u = e.ownerDocument || e, a = Kh(a), (n = Oe.get(n)) && Hr(a, n), u = u.createElement("link"), Jt(u);
          var r = u;
          r._p = new Promise(function(s, y) {
            r.onload = s, r.onerror = y;
          }), It(u, "link", a), l.instance = u;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = ei.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
      }
    }
    var Br = 0;
    function Sv(t, e) {
      return t.stylesheets && t.count === 0 && ai(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
        var a = setTimeout(function() {
          if (t.stylesheets && ai(t, t.stylesheets), t.unsuspend) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        }, 6e4 + e);
        0 < t.imgBytes && Br === 0 && (Br = 62500 * Im());
        var n = setTimeout(function() {
          if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && ai(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        }, (t.imgBytes > Br ? 50 : 800) + e);
        return t.unsuspend = l, function() {
          t.unsuspend = null, clearTimeout(a), clearTimeout(n);
        };
      } : null;
    }
    function ei() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) ai(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    var li = null;
    function ai(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, li = /* @__PURE__ */ new Map(), e.forEach(bv, t), li = null, ei.call(t));
    }
    function bv(t, e) {
      if (!(e.state.loading & 4)) {
        var l = li.get(t);
        if (l) var a = l.get(null);
        else {
          l = /* @__PURE__ */ new Map(), li.set(t, l);
          for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
            var r = n[u];
            (r.nodeName === "LINK" || r.getAttribute("media") !== "not all") && (l.set(r.dataset.precedence, r), a = r);
          }
          a && l.set(null, a);
        }
        n = e.instance, r = n.getAttribute("data-precedence"), u = l.get(r) || a, u === a && l.set(null, n), l.set(r, n), this.count++, a = ei.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
      }
    }
    var Nn = {
      $$typeof: x,
      Provider: null,
      Consumer: null,
      _currentValue: I,
      _currentValue2: I,
      _threadCount: 0
    };
    function zv(t, e, l, a, n, u, r, s, y) {
      this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = xi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xi(0), this.hiddenUpdates = xi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = r, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function kh(t, e, l, a, n, u, r, s, y, A, Y, G) {
      return t = new zv(t, e, l, r, y, A, Y, G, s), e = 1, u === true && (e |= 24), u = pe(3, null, null, e), t.current = u, u.stateNode = t, e = mf(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
        element: a,
        isDehydrated: l,
        cache: e
      }, Sf(u), t;
    }
    function Ph(t) {
      return t ? (t = ma, t) : ma;
    }
    function Ih(t, e, l, a, n, u) {
      n = Ph(n), a.context === null ? a.context = n : a.pendingContext = n, a = vl(e), a.payload = {
        element: l
      }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = gl(t, a, e), l !== null && (ce(l, t, e), on(l, t, e));
    }
    function td(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var l = t.retryLane;
        t.retryLane = l !== 0 && l < e ? l : e;
      }
    }
    function Yr(t, e) {
      td(t, e), (t = t.alternate) && td(t, e);
    }
    function ed(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Gl(t, 67108864);
        e !== null && ce(e, t, 67108864), Yr(t, 67108864);
      }
    }
    function ld(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Se();
        e = Ci(e);
        var l = Gl(t, e);
        l !== null && ce(l, t, e), Yr(t, e);
      }
    }
    var ni = true;
    function Ev(t, e, l, a) {
      var n = N.T;
      N.T = null;
      var u = J.p;
      try {
        J.p = 2, qr(t, e, l, a);
      } finally {
        J.p = u, N.T = n;
      }
    }
    function Tv(t, e, l, a) {
      var n = N.T;
      N.T = null;
      var u = J.p;
      try {
        J.p = 8, qr(t, e, l, a);
      } finally {
        J.p = u, N.T = n;
      }
    }
    function qr(t, e, l, a) {
      if (ni) {
        var n = Lr(a);
        if (n === null) Dr(t, e, a, ui, l), nd(t, a);
        else if (Rv(n, t, e, l, a)) a.stopPropagation();
        else if (nd(t, a), e & 4 && -1 < Dv.indexOf(t)) {
          for (; n !== null; ) {
            var u = na(n);
            if (u !== null) switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var r = Bl(u.pendingLanes);
                  if (r !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; r; ) {
                      var y = 1 << 31 - he(r);
                      s.entanglements[1] |= y, r &= ~y;
                    }
                    Ye(u), (St & 6) === 0 && (Gu = oe() + 500, _n(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Gl(u, 2), s !== null && ce(s, u, 2), Qu(), Yr(u, 2);
            }
            if (u = Lr(a), u === null && Dr(t, e, a, ui, l), u === n) break;
            n = u;
          }
          n !== null && a.stopPropagation();
        } else Dr(t, e, a, null, l);
      }
    }
    function Lr(t) {
      return t = Xi(t), Xr(t);
    }
    var ui = null;
    function Xr(t) {
      if (ui = null, t = aa(t), t !== null) {
        var e = d(t);
        if (e === null) t = null;
        else {
          var l = e.tag;
          if (l === 13) {
            if (t = m(e), t !== null) return t;
            t = null;
          } else if (l === 31) {
            if (t = v(e), t !== null) return t;
            t = null;
          } else if (l === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return ui = t, null;
    }
    function ad(t) {
      switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (cp()) {
            case oc:
              return 2;
            case sc:
              return 8;
            case Wn:
            case op:
              return 32;
            case hc:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Gr = false, Ml = null, Ol = null, xl = null, Un = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Cl = [], Dv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function nd(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          Ml = null;
          break;
        case "dragenter":
        case "dragleave":
          Ol = null;
          break;
        case "mouseover":
        case "mouseout":
          xl = null;
          break;
        case "pointerover":
        case "pointerout":
          Un.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Hn.delete(e.pointerId);
      }
    }
    function wn(t, e, l, a, n, u) {
      return t === null || t.nativeEvent !== u ? (t = {
        blockedOn: e,
        domEventName: l,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [
          n
        ]
      }, e !== null && (e = na(e), e !== null && ed(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
    }
    function Rv(t, e, l, a, n) {
      switch (e) {
        case "focusin":
          return Ml = wn(Ml, t, e, l, a, n), true;
        case "dragenter":
          return Ol = wn(Ol, t, e, l, a, n), true;
        case "mouseover":
          return xl = wn(xl, t, e, l, a, n), true;
        case "pointerover":
          var u = n.pointerId;
          return Un.set(u, wn(Un.get(u) || null, t, e, l, a, n)), true;
        case "gotpointercapture":
          return u = n.pointerId, Hn.set(u, wn(Hn.get(u) || null, t, e, l, a, n)), true;
      }
      return false;
    }
    function ud(t) {
      var e = aa(t.target);
      if (e !== null) {
        var l = d(e);
        if (l !== null) {
          if (e = l.tag, e === 13) {
            if (e = m(l), e !== null) {
              t.blockedOn = e, yc(t.priority, function() {
                ld(l);
              });
              return;
            }
          } else if (e === 31) {
            if (e = v(l), e !== null) {
              t.blockedOn = e, yc(t.priority, function() {
                ld(l);
              });
              return;
            }
          } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function ii(t) {
      if (t.blockedOn !== null) return false;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var l = Lr(t.nativeEvent);
        if (l === null) {
          l = t.nativeEvent;
          var a = new l.constructor(l.type, l);
          Li = a, l.target.dispatchEvent(a), Li = null;
        } else return e = na(l), e !== null && ed(e), t.blockedOn = l, false;
        e.shift();
      }
      return true;
    }
    function id(t, e, l) {
      ii(t) && l.delete(e);
    }
    function _v() {
      Gr = false, Ml !== null && ii(Ml) && (Ml = null), Ol !== null && ii(Ol) && (Ol = null), xl !== null && ii(xl) && (xl = null), Un.forEach(id), Hn.forEach(id);
    }
    function fi(t, e) {
      t.blockedOn === e && (t.blockedOn = null, Gr || (Gr = true, f.unstable_scheduleCallback(f.unstable_NormalPriority, _v)));
    }
    var ri = null;
    function fd(t) {
      ri !== t && (ri = t, f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
        ri === t && (ri = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (Xr(a || l) === null) continue;
            break;
          }
          var u = na(l);
          u !== null && (t.splice(e, 3), e -= 3, Lf(u, {
            pending: true,
            data: n,
            method: l.method,
            action: a
          }, a, n));
        }
      }));
    }
    function La(t) {
      function e(y) {
        return fi(y, t);
      }
      Ml !== null && fi(Ml, t), Ol !== null && fi(Ol, t), xl !== null && fi(xl, t), Un.forEach(e), Hn.forEach(e);
      for (var l = 0; l < Cl.length; l++) {
        var a = Cl[l];
        a.blockedOn === t && (a.blockedOn = null);
      }
      for (; 0 < Cl.length && (l = Cl[0], l.blockedOn === null); ) ud(l), l.blockedOn === null && Cl.shift();
      if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], r = n[ae] || null;
        if (typeof u == "function") r || fd(l);
        else if (r) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, r = u[ae] || null) s = r.formAction;
            else if (Xr(n) !== null) continue;
          } else s = r.action;
          typeof s == "function" ? l[a + 1] = s : (l.splice(a, 3), a -= 3), fd(l);
        }
      }
    }
    function rd() {
      function t(u) {
        u.canIntercept && u.info === "react-transition" && u.intercept({
          handler: function() {
            return new Promise(function(r) {
              return n = r;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function e() {
        n !== null && (n(), n = null), a || setTimeout(l, 20);
      }
      function l() {
        if (!a && !navigation.transition) {
          var u = navigation.currentEntry;
          u && u.url != null && navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var a = false, n = null;
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
          a = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
        };
      }
    }
    function jr(t) {
      this._internalRoot = t;
    }
    ci.prototype.render = jr.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error(i(409));
      var l = e.current, a = Se();
      Ih(l, a, t, e, null, null);
    }, ci.prototype.unmount = jr.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Ih(t.current, 2, null, t, null, null), Qu(), e[la] = null;
      }
    };
    function ci(t) {
      this._internalRoot = t;
    }
    ci.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = gc();
        t = {
          blockedOn: null,
          target: t,
          priority: e
        };
        for (var l = 0; l < Cl.length && e !== 0 && e < Cl[l].priority; l++) ;
        Cl.splice(l, 0, t), l === 0 && ud(t);
      }
    };
    var cd = o.version;
    if (cd !== "19.2.0") throw Error(i(527, cd, "19.2.0"));
    J.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0) throw typeof t.render == "function" ? Error(i(188)) : (t = Object.keys(t).join(","), Error(i(268, t)));
      return t = p(e), t = t !== null ? T(t) : null, t = t === null ? null : t.stateNode, t;
    };
    var Av = {
      bundleType: 0,
      version: "19.2.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: N,
      reconcilerVersion: "19.2.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!oi.isDisabled && oi.supportsFiber) try {
        Qa = oi.inject(Av), se = oi;
      } catch {
      }
    }
    return Yn.createRoot = function(t, e) {
      if (!h(t)) throw Error(i(299));
      var l = false, a = "", n = vs, u = gs, r = ys;
      return e != null && (e.unstable_strictMode === true && (l = true), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (r = e.onRecoverableError)), e = kh(t, 1, false, null, null, l, a, null, n, u, r, rd), t[la] = e.current, Tr(t), new jr(e);
    }, Yn.hydrateRoot = function(t, e, l) {
      if (!h(t)) throw Error(i(299));
      var a = false, n = "", u = vs, r = gs, s = ys, y = null;
      return l != null && (l.unstable_strictMode === true && (a = true), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (r = l.onCaughtError), l.onRecoverableError !== void 0 && (s = l.onRecoverableError), l.formState !== void 0 && (y = l.formState)), e = kh(t, 1, true, e, l ?? null, a, n, y, u, r, s, rd), e.context = Ph(null), l = e.current, a = Se(), a = Ci(a), n = vl(a), n.callback = null, gl(l, n, a), l = a, e.current.lanes = l, Va(e, l), Ye(e), t[la] = e.current, Tr(t), new ci(e);
    }, Yn.version = "19.2.0", Yn;
  }
  var Sd;
  function Yv() {
    if (Sd) return Zr.exports;
    Sd = 1;
    function f() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (o) {
        console.error(o);
      }
    }
    return f(), Zr.exports = Bv(), Zr.exports;
  }
  var qv = Yv();
  Ay = qd(qv);
  X = Qn();
  var bd = "popstate";
  function Lv(f = {}) {
    function o(h, d) {
      let { pathname: m = "/", search: v = "", hash: g = "" } = ta(h.location.hash.substring(1));
      return !m.startsWith("/") && !m.startsWith(".") && (m = "/" + m), Ir("", {
        pathname: m,
        search: v,
        hash: g
      }, d.state && d.state.usr || null, d.state && d.state.key || "default");
    }
    function c(h, d) {
      let m = h.document.querySelector("base"), v = "";
      if (m && m.getAttribute("href")) {
        let g = h.location.href, p = g.indexOf("#");
        v = p === -1 ? g : g.slice(0, p);
      }
      return v + "#" + (typeof d == "string" ? d : jn(d));
    }
    function i(h, d) {
      Ue(h.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`);
    }
    return Gv(o, c, i, f);
  }
  function Ct(f, o) {
    if (f === false || f === null || typeof f > "u") throw new Error(o);
  }
  function Ue(f, o) {
    if (!f) {
      typeof console < "u" && console.warn(o);
      try {
        throw new Error(o);
      } catch {
      }
    }
  }
  function Xv() {
    return Math.random().toString(36).substring(2, 10);
  }
  function zd(f, o) {
    return {
      usr: f.state,
      key: f.key,
      idx: o
    };
  }
  function Ir(f, o, c = null, i) {
    return {
      pathname: typeof f == "string" ? f : f.pathname,
      search: "",
      hash: "",
      ...typeof o == "string" ? ta(o) : o,
      state: c,
      key: o && o.key || i || Xv()
    };
  }
  function jn({ pathname: f = "/", search: o = "", hash: c = "" }) {
    return o && o !== "?" && (f += o.charAt(0) === "?" ? o : "?" + o), c && c !== "#" && (f += c.charAt(0) === "#" ? c : "#" + c), f;
  }
  function ta(f) {
    let o = {};
    if (f) {
      let c = f.indexOf("#");
      c >= 0 && (o.hash = f.substring(c), f = f.substring(0, c));
      let i = f.indexOf("?");
      i >= 0 && (o.search = f.substring(i), f = f.substring(0, i)), f && (o.pathname = f);
    }
    return o;
  }
  function Gv(f, o, c, i = {}) {
    let { window: h = document.defaultView, v5Compat: d = false } = i, m = h.history, v = "POP", g = null, p = T();
    p == null && (p = 0, m.replaceState({
      ...m.state,
      idx: p
    }, ""));
    function T() {
      return (m.state || {
        idx: null
      }).idx;
    }
    function E() {
      v = "POP";
      let H = T(), O = H == null ? null : H - p;
      p = H, g && g({
        action: v,
        location: Q.location,
        delta: O
      });
    }
    function U(H, O) {
      v = "PUSH";
      let R = Ir(Q.location, H, O);
      c && c(R, H), p = T() + 1;
      let x = zd(R, p), Z = Q.createHref(R);
      try {
        m.pushState(x, "", Z);
      } catch (V) {
        if (V instanceof DOMException && V.name === "DataCloneError") throw V;
        h.location.assign(Z);
      }
      d && g && g({
        action: v,
        location: Q.location,
        delta: 1
      });
    }
    function B(H, O) {
      v = "REPLACE";
      let R = Ir(Q.location, H, O);
      c && c(R, H), p = T();
      let x = zd(R, p), Z = Q.createHref(R);
      m.replaceState(x, "", Z), d && g && g({
        action: v,
        location: Q.location,
        delta: 0
      });
    }
    function q(H) {
      return jv(H);
    }
    let Q = {
      get action() {
        return v;
      },
      get location() {
        return f(h, m);
      },
      listen(H) {
        if (g) throw new Error("A history only accepts one active listener");
        return h.addEventListener(bd, E), g = H, () => {
          h.removeEventListener(bd, E), g = null;
        };
      },
      createHref(H) {
        return o(h, H);
      },
      createURL: q,
      encodeLocation(H) {
        let O = q(H);
        return {
          pathname: O.pathname,
          search: O.search,
          hash: O.hash
        };
      },
      push: U,
      replace: B,
      go(H) {
        return m.go(H);
      }
    };
    return Q;
  }
  function jv(f, o = false) {
    let c = "http://localhost";
    typeof window < "u" && (c = window.location.origin !== "null" ? window.location.origin : window.location.href), Ct(c, "No window.location.(origin|href) available to create URL");
    let i = typeof f == "string" ? f : jn(f);
    return i = i.replace(/ $/, "%20"), !o && i.startsWith("//") && (i = c + i), new URL(i, c);
  }
  function Xd(f, o, c = "/") {
    return Qv(f, o, c, false);
  }
  function Qv(f, o, c, i) {
    let h = typeof o == "string" ? ta(o) : o, d = fl(h.pathname || "/", c);
    if (d == null) return null;
    let m = Gd(f);
    Zv(m);
    let v = null;
    for (let g = 0; v == null && g < m.length; ++g) {
      let p = eg(d);
      v = Iv(m[g], p, i);
    }
    return v;
  }
  function Gd(f, o = [], c = [], i = "", h = false) {
    let d = (m, v, g = h, p) => {
      let T = {
        relativePath: p === void 0 ? m.path || "" : p,
        caseSensitive: m.caseSensitive === true,
        childrenIndex: v,
        route: m
      };
      if (T.relativePath.startsWith("/")) {
        if (!T.relativePath.startsWith(i) && g) return;
        Ct(T.relativePath.startsWith(i), `Absolute route path "${T.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), T.relativePath = T.relativePath.slice(i.length);
      }
      let E = il([
        i,
        T.relativePath
      ]), U = c.concat(T);
      m.children && m.children.length > 0 && (Ct(m.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${E}".`), Gd(m.children, o, U, E, g)), !(m.path == null && !m.index) && o.push({
        path: E,
        score: kv(E, m.index),
        routesMeta: U
      });
    };
    return f.forEach((m, v) => {
      var _a;
      if (m.path === "" || !((_a = m.path) == null ? void 0 : _a.includes("?"))) d(m, v);
      else for (let g of jd(m.path)) d(m, v, true, g);
    }), o;
  }
  function jd(f) {
    let o = f.split("/");
    if (o.length === 0) return [];
    let [c, ...i] = o, h = c.endsWith("?"), d = c.replace(/\?$/, "");
    if (i.length === 0) return h ? [
      d,
      ""
    ] : [
      d
    ];
    let m = jd(i.join("/")), v = [];
    return v.push(...m.map((g) => g === "" ? d : [
      d,
      g
    ].join("/"))), h && v.push(...m), v.map((g) => f.startsWith("/") && g === "" ? "/" : g);
  }
  function Zv(f) {
    f.sort((o, c) => o.score !== c.score ? c.score - o.score : Pv(o.routesMeta.map((i) => i.childrenIndex), c.routesMeta.map((i) => i.childrenIndex)));
  }
  var Vv = /^:[\w-]+$/, Kv = 3, Jv = 2, Wv = 1, $v = 10, Fv = -2, Ed = (f) => f === "*";
  function kv(f, o) {
    let c = f.split("/"), i = c.length;
    return c.some(Ed) && (i += Fv), o && (i += Jv), c.filter((h) => !Ed(h)).reduce((h, d) => h + (Vv.test(d) ? Kv : d === "" ? Wv : $v), i);
  }
  function Pv(f, o) {
    return f.length === o.length && f.slice(0, -1).every((i, h) => i === o[h]) ? f[f.length - 1] - o[o.length - 1] : 0;
  }
  function Iv(f, o, c = false) {
    let { routesMeta: i } = f, h = {}, d = "/", m = [];
    for (let v = 0; v < i.length; ++v) {
      let g = i[v], p = v === i.length - 1, T = d === "/" ? o : o.slice(d.length) || "/", E = Si({
        path: g.relativePath,
        caseSensitive: g.caseSensitive,
        end: p
      }, T), U = g.route;
      if (!E && p && c && !i[i.length - 1].route.index && (E = Si({
        path: g.relativePath,
        caseSensitive: g.caseSensitive,
        end: false
      }, T)), !E) return null;
      Object.assign(h, E.params), m.push({
        params: h,
        pathname: il([
          d,
          E.pathname
        ]),
        pathnameBase: ug(il([
          d,
          E.pathnameBase
        ])),
        route: U
      }), E.pathnameBase !== "/" && (d = il([
        d,
        E.pathnameBase
      ]));
    }
    return m;
  }
  function Si(f, o) {
    typeof f == "string" && (f = {
      path: f,
      caseSensitive: false,
      end: true
    });
    let [c, i] = tg(f.path, f.caseSensitive, f.end), h = o.match(c);
    if (!h) return null;
    let d = h[0], m = d.replace(/(.)\/+$/, "$1"), v = h.slice(1);
    return {
      params: i.reduce((p, { paramName: T, isOptional: E }, U) => {
        if (T === "*") {
          let q = v[U] || "";
          m = d.slice(0, d.length - q.length).replace(/(.)\/+$/, "$1");
        }
        const B = v[U];
        return E && !B ? p[T] = void 0 : p[T] = (B || "").replace(/%2F/g, "/"), p;
      }, {}),
      pathname: d,
      pathnameBase: m,
      pattern: f
    };
  }
  function tg(f, o = false, c = true) {
    Ue(f === "*" || !f.endsWith("*") || f.endsWith("/*"), `Route path "${f}" will be treated as if it were "${f.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${f.replace(/\*$/, "/*")}".`);
    let i = [], h = "^" + f.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (m, v, g) => (i.push({
      paramName: v,
      isOptional: g != null
    }), g ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return f.endsWith("*") ? (i.push({
      paramName: "*"
    }), h += f === "*" || f === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? h += "\\/*$" : f !== "" && f !== "/" && (h += "(?:(?=\\/|$))"), [
      new RegExp(h, o ? void 0 : "i"),
      i
    ];
  }
  function eg(f) {
    try {
      return f.split("/").map((o) => decodeURIComponent(o).replace(/\//g, "%2F")).join("/");
    } catch (o) {
      return Ue(false, `The URL path "${f}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`), f;
    }
  }
  function fl(f, o) {
    if (o === "/") return f;
    if (!f.toLowerCase().startsWith(o.toLowerCase())) return null;
    let c = o.endsWith("/") ? o.length - 1 : o.length, i = f.charAt(c);
    return i && i !== "/" ? null : f.slice(c) || "/";
  }
  function lg(f, o = "/") {
    let { pathname: c, search: i = "", hash: h = "" } = typeof f == "string" ? ta(f) : f;
    return {
      pathname: c ? c.startsWith("/") ? c : ag(c, o) : o,
      search: ig(i),
      hash: fg(h)
    };
  }
  function ag(f, o) {
    let c = o.replace(/\/+$/, "").split("/");
    return f.split("/").forEach((h) => {
      h === ".." ? c.length > 1 && c.pop() : h !== "." && c.push(h);
    }), c.length > 1 ? c.join("/") : "/";
  }
  function $r(f, o, c, i) {
    return `Cannot include a '${f}' character in a manually specified \`to.${o}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function ng(f) {
    return f.filter((o, c) => c === 0 || o.route.path && o.route.path.length > 0);
  }
  function Qd(f) {
    let o = ng(f);
    return o.map((c, i) => i === o.length - 1 ? c.pathname : c.pathnameBase);
  }
  function Zd(f, o, c, i = false) {
    let h;
    typeof f == "string" ? h = ta(f) : (h = {
      ...f
    }, Ct(!h.pathname || !h.pathname.includes("?"), $r("?", "pathname", "search", h)), Ct(!h.pathname || !h.pathname.includes("#"), $r("#", "pathname", "hash", h)), Ct(!h.search || !h.search.includes("#"), $r("#", "search", "hash", h)));
    let d = f === "" || h.pathname === "", m = d ? "/" : h.pathname, v;
    if (m == null) v = c;
    else {
      let E = o.length - 1;
      if (!i && m.startsWith("..")) {
        let U = m.split("/");
        for (; U[0] === ".."; ) U.shift(), E -= 1;
        h.pathname = U.join("/");
      }
      v = E >= 0 ? o[E] : "/";
    }
    let g = lg(h, v), p = m && m !== "/" && m.endsWith("/"), T = (d || m === ".") && c.endsWith("/");
    return !g.pathname.endsWith("/") && (p || T) && (g.pathname += "/"), g;
  }
  var il = (f) => f.join("/").replace(/\/\/+/g, "/"), ug = (f) => f.replace(/\/+$/, "").replace(/^\/*/, "/"), ig = (f) => !f || f === "?" ? "" : f.startsWith("?") ? f : "?" + f, fg = (f) => !f || f === "#" ? "" : f.startsWith("#") ? f : "#" + f;
  function rg(f) {
    return f != null && typeof f.status == "number" && typeof f.statusText == "string" && typeof f.internal == "boolean" && "data" in f;
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var Vd = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  new Set(Vd);
  var cg = [
    "GET",
    ...Vd
  ];
  new Set(cg);
  var Ga = X.createContext(null);
  Ga.displayName = "DataRouter";
  var zi = X.createContext(null);
  zi.displayName = "DataRouterState";
  X.createContext(false);
  var Kd = X.createContext({
    isTransitioning: false
  });
  Kd.displayName = "ViewTransition";
  var og = X.createContext(/* @__PURE__ */ new Map());
  og.displayName = "Fetchers";
  var sg = X.createContext(null);
  sg.displayName = "Await";
  var Xe = X.createContext(null);
  Xe.displayName = "Navigation";
  var Zn = X.createContext(null);
  Zn.displayName = "Location";
  var Ge = X.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  Ge.displayName = "Route";
  var lc = X.createContext(null);
  lc.displayName = "RouteError";
  function hg(f, { relative: o } = {}) {
    Ct(Vn(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: c, navigator: i } = X.useContext(Xe), { hash: h, pathname: d, search: m } = Kn(f, {
      relative: o
    }), v = d;
    return c !== "/" && (v = d === "/" ? c : il([
      c,
      d
    ])), i.createHref({
      pathname: v,
      search: m,
      hash: h
    });
  }
  function Vn() {
    return X.useContext(Zn) != null;
  }
  ea = function() {
    return Ct(Vn(), "useLocation() may be used only in the context of a <Router> component."), X.useContext(Zn).location;
  };
  var Jd = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function Wd(f) {
    X.useContext(Xe).static || X.useLayoutEffect(f);
  }
  dg = function() {
    let { isDataRoute: f } = X.useContext(Ge);
    return f ? _g() : pg();
  };
  function pg() {
    Ct(Vn(), "useNavigate() may be used only in the context of a <Router> component.");
    let f = X.useContext(Ga), { basename: o, navigator: c } = X.useContext(Xe), { matches: i } = X.useContext(Ge), { pathname: h } = ea(), d = JSON.stringify(Qd(i)), m = X.useRef(false);
    return Wd(() => {
      m.current = true;
    }), X.useCallback((g, p = {}) => {
      if (Ue(m.current, Jd), !m.current) return;
      if (typeof g == "number") {
        c.go(g);
        return;
      }
      let T = Zd(g, JSON.parse(d), h, p.relative === "path");
      f == null && o !== "/" && (T.pathname = T.pathname === "/" ? o : il([
        o,
        T.pathname
      ])), (p.replace ? c.replace : c.push)(T, p.state, p);
    }, [
      o,
      c,
      d,
      h,
      f
    ]);
  }
  X.createContext(null);
  My = function() {
    let { matches: f } = X.useContext(Ge), o = f[f.length - 1];
    return o ? o.params : {};
  };
  function Kn(f, { relative: o } = {}) {
    let { matches: c } = X.useContext(Ge), { pathname: i } = ea(), h = JSON.stringify(Qd(c));
    return X.useMemo(() => Zd(f, JSON.parse(h), i, o === "path"), [
      f,
      h,
      i,
      o
    ]);
  }
  function mg(f, o) {
    return $d(f, o);
  }
  function $d(f, o, c, i, h) {
    var _a;
    Ct(Vn(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: d } = X.useContext(Xe), { matches: m } = X.useContext(Ge), v = m[m.length - 1], g = v ? v.params : {}, p = v ? v.pathname : "/", T = v ? v.pathnameBase : "/", E = v && v.route;
    {
      let R = E && E.path || "";
      Fd(p, !E || R.endsWith("*") || R.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === "/" ? "*" : `${R}/*`}">.`);
    }
    let U = ea(), B;
    if (o) {
      let R = typeof o == "string" ? ta(o) : o;
      Ct(T === "/" || ((_a = R.pathname) == null ? void 0 : _a.startsWith(T)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${R.pathname}" was given in the \`location\` prop.`), B = R;
    } else B = U;
    let q = B.pathname || "/", Q = q;
    if (T !== "/") {
      let R = T.replace(/^\//, "").split("/");
      Q = "/" + q.replace(/^\//, "").split("/").slice(R.length).join("/");
    }
    let H = Xd(f, {
      pathname: Q
    });
    Ue(E || H != null, `No routes matched location "${B.pathname}${B.search}${B.hash}" `), Ue(H == null || H[H.length - 1].route.element !== void 0 || H[H.length - 1].route.Component !== void 0 || H[H.length - 1].route.lazy !== void 0, `Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let O = bg(H && H.map((R) => Object.assign({}, R, {
      params: Object.assign({}, g, R.params),
      pathname: il([
        T,
        d.encodeLocation ? d.encodeLocation(R.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : R.pathname
      ]),
      pathnameBase: R.pathnameBase === "/" ? T : il([
        T,
        d.encodeLocation ? d.encodeLocation(R.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : R.pathnameBase
      ])
    })), m, c, i, h);
    return o && O ? X.createElement(Zn.Provider, {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...B
        },
        navigationType: "POP"
      }
    }, O) : O;
  }
  function vg() {
    let f = Rg(), o = rg(f) ? `${f.status} ${f.statusText}` : f instanceof Error ? f.message : JSON.stringify(f), c = f instanceof Error ? f.stack : null, i = "rgba(200,200,200, 0.5)", h = {
      padding: "0.5rem",
      backgroundColor: i
    }, d = {
      padding: "2px 4px",
      backgroundColor: i
    }, m = null;
    return console.error("Error handled by React Router default ErrorBoundary:", f), m = X.createElement(X.Fragment, null, X.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), X.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", X.createElement("code", {
      style: d
    }, "ErrorBoundary"), " or", " ", X.createElement("code", {
      style: d
    }, "errorElement"), " prop on your route.")), X.createElement(X.Fragment, null, X.createElement("h2", null, "Unexpected Application Error!"), X.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, o), c ? X.createElement("pre", {
      style: h
    }, c) : null, m);
  }
  var gg = X.createElement(vg, null), yg = class extends X.Component {
    constructor(f) {
      super(f), this.state = {
        location: f.location,
        revalidation: f.revalidation,
        error: f.error
      };
    }
    static getDerivedStateFromError(f) {
      return {
        error: f
      };
    }
    static getDerivedStateFromProps(f, o) {
      return o.location !== f.location || o.revalidation !== "idle" && f.revalidation === "idle" ? {
        error: f.error,
        location: f.location,
        revalidation: f.revalidation
      } : {
        error: f.error !== void 0 ? f.error : o.error,
        location: o.location,
        revalidation: f.revalidation || o.revalidation
      };
    }
    componentDidCatch(f, o) {
      this.props.unstable_onError ? this.props.unstable_onError(f, o) : console.error("React Router caught the following error during render", f);
    }
    render() {
      return this.state.error !== void 0 ? X.createElement(Ge.Provider, {
        value: this.props.routeContext
      }, X.createElement(lc.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children;
    }
  };
  function Sg({ routeContext: f, match: o, children: c }) {
    let i = X.useContext(Ga);
    return i && i.static && i.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = o.route.id), X.createElement(Ge.Provider, {
      value: f
    }, c);
  }
  function bg(f, o = [], c = null, i = null, h = null) {
    if (f == null) {
      if (!c) return null;
      if (c.errors) f = c.matches;
      else if (o.length === 0 && !c.initialized && c.matches.length > 0) f = c.matches;
      else return null;
    }
    let d = f, m = c == null ? void 0 : c.errors;
    if (m != null) {
      let p = d.findIndex((T) => T.route.id && (m == null ? void 0 : m[T.route.id]) !== void 0);
      Ct(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`), d = d.slice(0, Math.min(d.length, p + 1));
    }
    let v = false, g = -1;
    if (c) for (let p = 0; p < d.length; p++) {
      let T = d[p];
      if ((T.route.HydrateFallback || T.route.hydrateFallbackElement) && (g = p), T.route.id) {
        let { loaderData: E, errors: U } = c, B = T.route.loader && !E.hasOwnProperty(T.route.id) && (!U || U[T.route.id] === void 0);
        if (T.route.lazy || B) {
          v = true, g >= 0 ? d = d.slice(0, g + 1) : d = [
            d[0]
          ];
          break;
        }
      }
    }
    return d.reduceRight((p, T, E) => {
      let U, B = false, q = null, Q = null;
      c && (U = m && T.route.id ? m[T.route.id] : void 0, q = T.route.errorElement || gg, v && (g < 0 && E === 0 ? (Fd("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), B = true, Q = null) : g === E && (B = true, Q = T.route.hydrateFallbackElement || null)));
      let H = o.concat(d.slice(0, E + 1)), O = () => {
        let R;
        return U ? R = q : B ? R = Q : T.route.Component ? R = X.createElement(T.route.Component, null) : T.route.element ? R = T.route.element : R = p, X.createElement(Sg, {
          match: T,
          routeContext: {
            outlet: p,
            matches: H,
            isDataRoute: c != null
          },
          children: R
        });
      };
      return c && (T.route.ErrorBoundary || T.route.errorElement || E === 0) ? X.createElement(yg, {
        location: c.location,
        revalidation: c.revalidation,
        component: q,
        error: U,
        children: O(),
        routeContext: {
          outlet: null,
          matches: H,
          isDataRoute: true
        },
        unstable_onError: i
      }) : O();
    }, null);
  }
  function ac(f) {
    return `${f} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function zg(f) {
    let o = X.useContext(Ga);
    return Ct(o, ac(f)), o;
  }
  function Eg(f) {
    let o = X.useContext(zi);
    return Ct(o, ac(f)), o;
  }
  function Tg(f) {
    let o = X.useContext(Ge);
    return Ct(o, ac(f)), o;
  }
  function nc(f) {
    let o = Tg(f), c = o.matches[o.matches.length - 1];
    return Ct(c.route.id, `${f} can only be used on routes that contain a unique "id"`), c.route.id;
  }
  function Dg() {
    return nc("useRouteId");
  }
  function Rg() {
    var _a;
    let f = X.useContext(lc), o = Eg("useRouteError"), c = nc("useRouteError");
    return f !== void 0 ? f : (_a = o.errors) == null ? void 0 : _a[c];
  }
  function _g() {
    let { router: f } = zg("useNavigate"), o = nc("useNavigate"), c = X.useRef(false);
    return Wd(() => {
      c.current = true;
    }), X.useCallback(async (h, d = {}) => {
      Ue(c.current, Jd), c.current && (typeof h == "number" ? f.navigate(h) : await f.navigate(h, {
        fromRouteId: o,
        ...d
      }));
    }, [
      f,
      o
    ]);
  }
  var Td = {};
  function Fd(f, o, c) {
    !o && !Td[f] && (Td[f] = true, Ue(false, c));
  }
  X.memo(Ag);
  function Ag({ routes: f, future: o, state: c, unstable_onError: i }) {
    return $d(f, void 0, c, i, o);
  }
  Mg = function(f) {
    Ct(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
  };
  function Og({ basename: f = "/", children: o = null, location: c, navigationType: i = "POP", navigator: h, static: d = false }) {
    Ct(!Vn(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let m = f.replace(/^\/*/, "/"), v = X.useMemo(() => ({
      basename: m,
      navigator: h,
      static: d,
      future: {}
    }), [
      m,
      h,
      d
    ]);
    typeof c == "string" && (c = ta(c));
    let { pathname: g = "/", search: p = "", hash: T = "", state: E = null, key: U = "default" } = c, B = X.useMemo(() => {
      let q = fl(g, m);
      return q == null ? null : {
        location: {
          pathname: q,
          search: p,
          hash: T,
          state: E,
          key: U
        },
        navigationType: i
      };
    }, [
      m,
      g,
      p,
      T,
      E,
      U,
      i
    ]);
    return Ue(B != null, `<Router basename="${m}"> is not able to match the URL "${g}${p}${T}" because it does not start with the basename, so the <Router> won't render anything.`), B == null ? null : X.createElement(Xe.Provider, {
      value: v
    }, X.createElement(Zn.Provider, {
      children: o,
      value: B
    }));
  }
  Oy = function({ children: f, location: o }) {
    return mg(tc(f), o);
  };
  function tc(f, o = []) {
    let c = [];
    return X.Children.forEach(f, (i, h) => {
      if (!X.isValidElement(i)) return;
      let d = [
        ...o,
        h
      ];
      if (i.type === X.Fragment) {
        c.push.apply(c, tc(i.props.children, d));
        return;
      }
      Ct(i.type === Mg, `[${typeof i.type == "string" ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Ct(!i.props.index || !i.props.children, "An index route cannot have child routes.");
      let m = {
        id: i.props.id || d.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        middleware: i.props.middleware,
        loader: i.props.loader,
        action: i.props.action,
        hydrateFallbackElement: i.props.hydrateFallbackElement,
        HydrateFallback: i.props.HydrateFallback,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary: i.props.hasErrorBoundary === true || i.props.ErrorBoundary != null || i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy
      };
      i.props.children && (m.children = tc(i.props.children, d)), c.push(m);
    }), c;
  }
  var gi = "get", yi = "application/x-www-form-urlencoded";
  function Ei(f) {
    return f != null && typeof f.tagName == "string";
  }
  function xg(f) {
    return Ei(f) && f.tagName.toLowerCase() === "button";
  }
  function Cg(f) {
    return Ei(f) && f.tagName.toLowerCase() === "form";
  }
  function Ng(f) {
    return Ei(f) && f.tagName.toLowerCase() === "input";
  }
  function Ug(f) {
    return !!(f.metaKey || f.altKey || f.ctrlKey || f.shiftKey);
  }
  function Hg(f, o) {
    return f.button === 0 && (!o || o === "_self") && !Ug(f);
  }
  var si = null;
  function wg() {
    if (si === null) try {
      new FormData(document.createElement("form"), 0), si = false;
    } catch {
      si = true;
    }
    return si;
  }
  var Bg = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function Fr(f) {
    return f != null && !Bg.has(f) ? (Ue(false, `"${f}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yi}"`), null) : f;
  }
  function Yg(f, o) {
    let c, i, h, d, m;
    if (Cg(f)) {
      let v = f.getAttribute("action");
      i = v ? fl(v, o) : null, c = f.getAttribute("method") || gi, h = Fr(f.getAttribute("enctype")) || yi, d = new FormData(f);
    } else if (xg(f) || Ng(f) && (f.type === "submit" || f.type === "image")) {
      let v = f.form;
      if (v == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      let g = f.getAttribute("formaction") || v.getAttribute("action");
      if (i = g ? fl(g, o) : null, c = f.getAttribute("formmethod") || v.getAttribute("method") || gi, h = Fr(f.getAttribute("formenctype")) || Fr(v.getAttribute("enctype")) || yi, d = new FormData(v, f), !wg()) {
        let { name: p, type: T, value: E } = f;
        if (T === "image") {
          let U = p ? `${p}.` : "";
          d.append(`${U}x`, "0"), d.append(`${U}y`, "0");
        } else p && d.append(p, E);
      }
    } else {
      if (Ei(f)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      c = gi, i = null, h = yi, m = f;
    }
    return d && h === "text/plain" && (m = d, d = void 0), {
      action: i,
      method: c.toLowerCase(),
      encType: h,
      formData: d,
      body: m
    };
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  function uc(f, o) {
    if (f === false || f === null || typeof f > "u") throw new Error(o);
  }
  function qg(f, o, c) {
    let i = typeof f == "string" ? new URL(f, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : f;
    return i.pathname === "/" ? i.pathname = `_root.${c}` : o && fl(i.pathname, o) === "/" ? i.pathname = `${o.replace(/\/$/, "")}/_root.${c}` : i.pathname = `${i.pathname.replace(/\/$/, "")}.${c}`, i;
  }
  async function Lg(f, o) {
    if (f.id in o) return o[f.id];
    try {
      let c = await import(f.module).then(async (m) => {
        await m.__tla;
        return m;
      });
      return o[f.id] = c, c;
    } catch (c) {
      return console.error(`Error loading route module \`${f.module}\`, reloading page...`), console.error(c), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
      });
    }
  }
  function Xg(f) {
    return f == null ? false : f.href == null ? f.rel === "preload" && typeof f.imageSrcSet == "string" && typeof f.imageSizes == "string" : typeof f.rel == "string" && typeof f.href == "string";
  }
  async function Gg(f, o, c) {
    let i = await Promise.all(f.map(async (h) => {
      let d = o.routes[h.route.id];
      if (d) {
        let m = await Lg(d, c);
        return m.links ? m.links() : [];
      }
      return [];
    }));
    return Vg(i.flat(1).filter(Xg).filter((h) => h.rel === "stylesheet" || h.rel === "preload").map((h) => h.rel === "stylesheet" ? {
      ...h,
      rel: "prefetch",
      as: "style"
    } : {
      ...h,
      rel: "prefetch"
    }));
  }
  function Dd(f, o, c, i, h, d) {
    let m = (g, p) => c[p] ? g.route.id !== c[p].route.id : true, v = (g, p) => {
      var _a;
      return c[p].pathname !== g.pathname || ((_a = c[p].route.path) == null ? void 0 : _a.endsWith("*")) && c[p].params["*"] !== g.params["*"];
    };
    return d === "assets" ? o.filter((g, p) => m(g, p) || v(g, p)) : d === "data" ? o.filter((g, p) => {
      var _a;
      let T = i.routes[g.route.id];
      if (!T || !T.hasLoader) return false;
      if (m(g, p) || v(g, p)) return true;
      if (g.route.shouldRevalidate) {
        let E = g.route.shouldRevalidate({
          currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
          currentParams: ((_a = c[0]) == null ? void 0 : _a.params) || {},
          nextUrl: new URL(f, window.origin),
          nextParams: g.params,
          defaultShouldRevalidate: true
        });
        if (typeof E == "boolean") return E;
      }
      return true;
    }) : [];
  }
  function jg(f, o, { includeHydrateFallback: c } = {}) {
    return Qg(f.map((i) => {
      let h = o.routes[i.route.id];
      if (!h) return [];
      let d = [
        h.module
      ];
      return h.clientActionModule && (d = d.concat(h.clientActionModule)), h.clientLoaderModule && (d = d.concat(h.clientLoaderModule)), c && h.hydrateFallbackModule && (d = d.concat(h.hydrateFallbackModule)), h.imports && (d = d.concat(h.imports)), d;
    }).flat(1));
  }
  function Qg(f) {
    return [
      ...new Set(f)
    ];
  }
  function Zg(f) {
    let o = {}, c = Object.keys(f).sort();
    for (let i of c) o[i] = f[i];
    return o;
  }
  function Vg(f, o) {
    let c = /* @__PURE__ */ new Set();
    return new Set(o), f.reduce((i, h) => {
      let d = JSON.stringify(Zg(h));
      return c.has(d) || (c.add(d), i.push({
        key: d,
        link: h
      })), i;
    }, []);
  }
  function kd() {
    let f = X.useContext(Ga);
    return uc(f, "You must render this element inside a <DataRouterContext.Provider> element"), f;
  }
  function Kg() {
    let f = X.useContext(zi);
    return uc(f, "You must render this element inside a <DataRouterStateContext.Provider> element"), f;
  }
  var ic = X.createContext(void 0);
  ic.displayName = "FrameworkContext";
  function Pd() {
    let f = X.useContext(ic);
    return uc(f, "You must render this element inside a <HydratedRouter> element"), f;
  }
  function Jg(f, o) {
    let c = X.useContext(ic), [i, h] = X.useState(false), [d, m] = X.useState(false), { onFocus: v, onBlur: g, onMouseEnter: p, onMouseLeave: T, onTouchStart: E } = o, U = X.useRef(null);
    X.useEffect(() => {
      if (f === "render" && m(true), f === "viewport") {
        let Q = (O) => {
          O.forEach((R) => {
            m(R.isIntersecting);
          });
        }, H = new IntersectionObserver(Q, {
          threshold: 0.5
        });
        return U.current && H.observe(U.current), () => {
          H.disconnect();
        };
      }
    }, [
      f
    ]), X.useEffect(() => {
      if (i) {
        let Q = setTimeout(() => {
          m(true);
        }, 100);
        return () => {
          clearTimeout(Q);
        };
      }
    }, [
      i
    ]);
    let B = () => {
      h(true);
    }, q = () => {
      h(false), m(false);
    };
    return c ? f !== "intent" ? [
      d,
      U,
      {}
    ] : [
      d,
      U,
      {
        onFocus: qn(v, B),
        onBlur: qn(g, q),
        onMouseEnter: qn(p, B),
        onMouseLeave: qn(T, q),
        onTouchStart: qn(E, B)
      }
    ] : [
      false,
      U,
      {}
    ];
  }
  function qn(f, o) {
    return (c) => {
      f && f(c), c.defaultPrevented || o(c);
    };
  }
  function Wg({ page: f, ...o }) {
    let { router: c } = kd(), i = X.useMemo(() => Xd(c.routes, f, c.basename), [
      c.routes,
      f,
      c.basename
    ]);
    return i ? X.createElement(Fg, {
      page: f,
      matches: i,
      ...o
    }) : null;
  }
  function $g(f) {
    let { manifest: o, routeModules: c } = Pd(), [i, h] = X.useState([]);
    return X.useEffect(() => {
      let d = false;
      return Gg(f, o, c).then((m) => {
        d || h(m);
      }), () => {
        d = true;
      };
    }, [
      f,
      o,
      c
    ]), i;
  }
  function Fg({ page: f, matches: o, ...c }) {
    let i = ea(), { manifest: h, routeModules: d } = Pd(), { basename: m } = kd(), { loaderData: v, matches: g } = Kg(), p = X.useMemo(() => Dd(f, o, g, h, i, "data"), [
      f,
      o,
      g,
      h,
      i
    ]), T = X.useMemo(() => Dd(f, o, g, h, i, "assets"), [
      f,
      o,
      g,
      h,
      i
    ]), E = X.useMemo(() => {
      if (f === i.pathname + i.search + i.hash) return [];
      let q = /* @__PURE__ */ new Set(), Q = false;
      if (o.forEach((O) => {
        var _a;
        let R = h.routes[O.route.id];
        !R || !R.hasLoader || (!p.some((x) => x.route.id === O.route.id) && O.route.id in v && ((_a = d[O.route.id]) == null ? void 0 : _a.shouldRevalidate) || R.hasClientLoader ? Q = true : q.add(O.route.id));
      }), q.size === 0) return [];
      let H = qg(f, m, "data");
      return Q && q.size > 0 && H.searchParams.set("_routes", o.filter((O) => q.has(O.route.id)).map((O) => O.route.id).join(",")), [
        H.pathname + H.search
      ];
    }, [
      m,
      v,
      i,
      h,
      p,
      o,
      f,
      d
    ]), U = X.useMemo(() => jg(T, h), [
      T,
      h
    ]), B = $g(T);
    return X.createElement(X.Fragment, null, E.map((q) => X.createElement("link", {
      key: q,
      rel: "prefetch",
      as: "fetch",
      href: q,
      ...c
    })), U.map((q) => X.createElement("link", {
      key: q,
      rel: "modulepreload",
      href: q,
      ...c
    })), B.map(({ key: q, link: Q }) => X.createElement("link", {
      key: q,
      nonce: c.nonce,
      ...Q
    })));
  }
  function kg(...f) {
    return (o) => {
      f.forEach((c) => {
        typeof c == "function" ? c(o) : c != null && (c.current = o);
      });
    };
  }
  var Id = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  try {
    Id && (window.__reactRouterVersion = "7.9.5");
  } catch {
  }
  xy = function({ basename: f, children: o, window: c }) {
    let i = X.useRef();
    i.current == null && (i.current = Lv({
      window: c,
      v5Compat: true
    }));
    let h = i.current, [d, m] = X.useState({
      action: h.action,
      location: h.location
    }), v = X.useCallback((g) => {
      X.startTransition(() => m(g));
    }, [
      m
    ]);
    return X.useLayoutEffect(() => h.listen(v), [
      h,
      v
    ]), X.createElement(Og, {
      basename: f,
      children: o,
      location: d.location,
      navigationType: d.action,
      navigator: h
    });
  };
  let tp;
  tp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  ep = X.forwardRef(function({ onClick: o, discover: c = "render", prefetch: i = "none", relative: h, reloadDocument: d, replace: m, state: v, target: g, to: p, preventScrollReset: T, viewTransition: E, ...U }, B) {
    let { basename: q } = X.useContext(Xe), Q = typeof p == "string" && tp.test(p), H, O = false;
    if (typeof p == "string" && Q && (H = p, Id)) try {
      let K = new URL(window.location.href), et = p.startsWith("//") ? new URL(K.protocol + p) : new URL(p), rt = fl(et.pathname, q);
      et.origin === K.origin && rt != null ? p = rt + et.search + et.hash : O = true;
    } catch {
      Ue(false, `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
    }
    let R = hg(p, {
      relative: h
    }), [x, Z, V] = Jg(i, U), F = ey(p, {
      replace: m,
      state: v,
      target: g,
      preventScrollReset: T,
      relative: h,
      viewTransition: E
    });
    function b(K) {
      o && o(K), K.defaultPrevented || F(K);
    }
    let w = X.createElement("a", {
      ...U,
      ...V,
      href: H || R,
      onClick: O || d ? o : b,
      ref: kg(B, Z),
      target: g,
      "data-discover": !Q && c === "render" ? "true" : void 0
    });
    return x && !Q ? X.createElement(X.Fragment, null, w, X.createElement(Wg, {
      page: R
    })) : w;
  });
  ep.displayName = "Link";
  var Pg = X.forwardRef(function({ "aria-current": o = "page", caseSensitive: c = false, className: i = "", end: h = false, style: d, to: m, viewTransition: v, children: g, ...p }, T) {
    let E = Kn(m, {
      relative: p.relative
    }), U = ea(), B = X.useContext(zi), { navigator: q, basename: Q } = X.useContext(Xe), H = B != null && iy(E) && v === true, O = q.encodeLocation ? q.encodeLocation(E).pathname : E.pathname, R = U.pathname, x = B && B.navigation && B.navigation.location ? B.navigation.location.pathname : null;
    c || (R = R.toLowerCase(), x = x ? x.toLowerCase() : null, O = O.toLowerCase()), x && Q && (x = fl(x, Q) || x);
    const Z = O !== "/" && O.endsWith("/") ? O.length - 1 : O.length;
    let V = R === O || !h && R.startsWith(O) && R.charAt(Z) === "/", F = x != null && (x === O || !h && x.startsWith(O) && x.charAt(O.length) === "/"), b = {
      isActive: V,
      isPending: F,
      isTransitioning: H
    }, w = V ? o : void 0, K;
    typeof i == "function" ? K = i(b) : K = [
      i,
      V ? "active" : null,
      F ? "pending" : null,
      H ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let et = typeof d == "function" ? d(b) : d;
    return X.createElement(ep, {
      ...p,
      "aria-current": w,
      className: K,
      ref: T,
      style: et,
      to: m,
      viewTransition: v
    }, typeof g == "function" ? g(b) : g);
  });
  Pg.displayName = "NavLink";
  var Ig = X.forwardRef(({ discover: f = "render", fetcherKey: o, navigate: c, reloadDocument: i, replace: h, state: d, method: m = gi, action: v, onSubmit: g, relative: p, preventScrollReset: T, viewTransition: E, ...U }, B) => {
    let q = ny(), Q = uy(v, {
      relative: p
    }), H = m.toLowerCase() === "get" ? "get" : "post", O = typeof v == "string" && tp.test(v), R = (x) => {
      if (g && g(x), x.defaultPrevented) return;
      x.preventDefault();
      let Z = x.nativeEvent.submitter, V = (Z == null ? void 0 : Z.getAttribute("formmethod")) || m;
      q(Z || x.currentTarget, {
        fetcherKey: o,
        method: V,
        navigate: c,
        replace: h,
        state: d,
        relative: p,
        preventScrollReset: T,
        viewTransition: E
      });
    };
    return X.createElement("form", {
      ref: B,
      method: H,
      action: Q,
      onSubmit: i ? g : R,
      ...U,
      "data-discover": !O && f === "render" ? "true" : void 0
    });
  });
  Ig.displayName = "Form";
  function ty(f) {
    return `${f} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function lp(f) {
    let o = X.useContext(Ga);
    return Ct(o, ty(f)), o;
  }
  function ey(f, { target: o, replace: c, state: i, preventScrollReset: h, relative: d, viewTransition: m } = {}) {
    let v = dg(), g = ea(), p = Kn(f, {
      relative: d
    });
    return X.useCallback((T) => {
      if (Hg(T, o)) {
        T.preventDefault();
        let E = c !== void 0 ? c : jn(g) === jn(p);
        v(f, {
          replace: E,
          state: i,
          preventScrollReset: h,
          relative: d,
          viewTransition: m
        });
      }
    }, [
      g,
      v,
      p,
      c,
      i,
      o,
      f,
      h,
      d,
      m
    ]);
  }
  var ly = 0, ay = () => `__${String(++ly)}__`;
  function ny() {
    let { router: f } = lp("useSubmit"), { basename: o } = X.useContext(Xe), c = Dg();
    return X.useCallback(async (i, h = {}) => {
      let { action: d, method: m, encType: v, formData: g, body: p } = Yg(i, o);
      if (h.navigate === false) {
        let T = h.fetcherKey || ay();
        await f.fetch(T, c, h.action || d, {
          preventScrollReset: h.preventScrollReset,
          formData: g,
          body: p,
          formMethod: h.method || m,
          formEncType: h.encType || v,
          flushSync: h.flushSync
        });
      } else await f.navigate(h.action || d, {
        preventScrollReset: h.preventScrollReset,
        formData: g,
        body: p,
        formMethod: h.method || m,
        formEncType: h.encType || v,
        replace: h.replace,
        state: h.state,
        fromRouteId: c,
        flushSync: h.flushSync,
        viewTransition: h.viewTransition
      });
    }, [
      f,
      o,
      c
    ]);
  }
  function uy(f, { relative: o } = {}) {
    let { basename: c } = X.useContext(Xe), i = X.useContext(Ge);
    Ct(i, "useFormAction must be used inside a RouteContext");
    let [h] = i.matches.slice(-1), d = {
      ...Kn(f || ".", {
        relative: o
      })
    }, m = ea();
    if (f == null) {
      d.search = m.search;
      let v = new URLSearchParams(d.search), g = v.getAll("index");
      if (g.some((T) => T === "")) {
        v.delete("index"), g.filter((E) => E).forEach((E) => v.append("index", E));
        let T = v.toString();
        d.search = T ? `?${T}` : "";
      }
    }
    return (!f || f === ".") && h.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (d.pathname = d.pathname === "/" ? c : il([
      c,
      d.pathname
    ])), jn(d);
  }
  function iy(f, { relative: o } = {}) {
    let c = X.useContext(Kd);
    Ct(c != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: i } = lp("useViewTransitionState"), h = Kn(f, {
      relative: o
    });
    if (!c.isTransitioning) return false;
    let d = fl(c.currentLocation.pathname, i) || c.currentLocation.pathname, m = fl(c.nextLocation.pathname, i) || c.nextLocation.pathname;
    return Si(h.pathname, m) != null || Si(h.pathname, d) != null;
  }
  let Ln, kr, qt, Ul, Rd;
  ap = bi();
  Ln = {
    exports: {}
  };
  kr = {};
  qt = {};
  Ul = {};
  function Ti() {
    if (Rd) return Ul;
    Rd = 1, Object.defineProperty(Ul, "__esModule", {
      value: true
    }), Ul.dontSetMe = h, Ul.findInArray = f, Ul.int = i, Ul.isFunction = o, Ul.isNum = c;
    function f(d, m) {
      for (let v = 0, g = d.length; v < g; v++) if (m.apply(m, [
        d[v],
        v,
        d
      ])) return d[v];
    }
    function o(d) {
      return typeof d == "function" || Object.prototype.toString.call(d) === "[object Function]";
    }
    function c(d) {
      return typeof d == "number" && !isNaN(d);
    }
    function i(d) {
      return parseInt(d, 10);
    }
    function h(d, m, v) {
      if (d[m]) return new Error("Invalid prop ".concat(m, " passed to ").concat(v, " - do not set this, set it on the child."));
    }
    return Ul;
  }
  var Hl = {}, _d;
  function fy() {
    if (_d) return Hl;
    _d = 1, Object.defineProperty(Hl, "__esModule", {
      value: true
    }), Hl.browserPrefixToKey = c, Hl.browserPrefixToStyle = i, Hl.default = void 0, Hl.getPrefix = o;
    const f = [
      "Moz",
      "Webkit",
      "O",
      "ms"
    ];
    function o() {
      var d;
      let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
      if (typeof window > "u") return "";
      const v = (d = window.document) === null || d === void 0 || (d = d.documentElement) === null || d === void 0 ? void 0 : d.style;
      if (!v || m in v) return "";
      for (let g = 0; g < f.length; g++) if (c(m, f[g]) in v) return f[g];
      return "";
    }
    function c(d, m) {
      return m ? "".concat(m).concat(h(d)) : d;
    }
    function i(d, m) {
      return m ? "-".concat(m.toLowerCase(), "-").concat(d) : d;
    }
    function h(d) {
      let m = "", v = true;
      for (let g = 0; g < d.length; g++) v ? (m += d[g].toUpperCase(), v = false) : d[g] === "-" ? v = true : m += d[g];
      return m;
    }
    return Hl.default = o(), Hl;
  }
  var Ad;
  function fc() {
    if (Ad) return qt;
    Ad = 1, Object.defineProperty(qt, "__esModule", {
      value: true
    }), qt.addClassName = V, qt.addEvent = v, qt.addUserSelectStyles = x, qt.createCSSTransform = q, qt.createSVGTransform = Q, qt.getTouch = O, qt.getTouchIdentifier = R, qt.getTranslation = H, qt.innerHeight = E, qt.innerWidth = U, qt.matchesSelector = d, qt.matchesSelectorAndParentsTo = m, qt.offsetXYFromParent = B, qt.outerHeight = p, qt.outerWidth = T, qt.removeClassName = F, qt.removeEvent = g, qt.removeUserSelectStyles = Z;
    var f = Ti(), o = i(fy());
    function c(b) {
      if (typeof WeakMap != "function") return null;
      var w = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap();
      return (c = function(et) {
        return et ? K : w;
      })(b);
    }
    function i(b, w) {
      if (b && b.__esModule) return b;
      if (b === null || typeof b != "object" && typeof b != "function") return {
        default: b
      };
      var K = c(w);
      if (K && K.has(b)) return K.get(b);
      var et = {}, rt = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var at in b) if (at !== "default" && Object.prototype.hasOwnProperty.call(b, at)) {
        var zt = rt ? Object.getOwnPropertyDescriptor(b, at) : null;
        zt && (zt.get || zt.set) ? Object.defineProperty(et, at, zt) : et[at] = b[at];
      }
      return et.default = b, K && K.set(b, et), et;
    }
    let h = "";
    function d(b, w) {
      return h || (h = (0, f.findInArray)([
        "matches",
        "webkitMatchesSelector",
        "mozMatchesSelector",
        "msMatchesSelector",
        "oMatchesSelector"
      ], function(K) {
        return (0, f.isFunction)(b[K]);
      })), (0, f.isFunction)(b[h]) ? b[h](w) : false;
    }
    function m(b, w, K) {
      let et = b;
      do {
        if (d(et, w)) return true;
        if (et === K) return false;
        et = et.parentNode;
      } while (et);
      return false;
    }
    function v(b, w, K, et) {
      if (!b) return;
      const rt = {
        capture: true,
        ...et
      };
      b.addEventListener ? b.addEventListener(w, K, rt) : b.attachEvent ? b.attachEvent("on" + w, K) : b["on" + w] = K;
    }
    function g(b, w, K, et) {
      if (!b) return;
      const rt = {
        capture: true,
        ...et
      };
      b.removeEventListener ? b.removeEventListener(w, K, rt) : b.detachEvent ? b.detachEvent("on" + w, K) : b["on" + w] = null;
    }
    function p(b) {
      let w = b.clientHeight;
      const K = b.ownerDocument.defaultView.getComputedStyle(b);
      return w += (0, f.int)(K.borderTopWidth), w += (0, f.int)(K.borderBottomWidth), w;
    }
    function T(b) {
      let w = b.clientWidth;
      const K = b.ownerDocument.defaultView.getComputedStyle(b);
      return w += (0, f.int)(K.borderLeftWidth), w += (0, f.int)(K.borderRightWidth), w;
    }
    function E(b) {
      let w = b.clientHeight;
      const K = b.ownerDocument.defaultView.getComputedStyle(b);
      return w -= (0, f.int)(K.paddingTop), w -= (0, f.int)(K.paddingBottom), w;
    }
    function U(b) {
      let w = b.clientWidth;
      const K = b.ownerDocument.defaultView.getComputedStyle(b);
      return w -= (0, f.int)(K.paddingLeft), w -= (0, f.int)(K.paddingRight), w;
    }
    function B(b, w, K) {
      const rt = w === w.ownerDocument.body ? {
        left: 0,
        top: 0
      } : w.getBoundingClientRect(), at = (b.clientX + w.scrollLeft - rt.left) / K, zt = (b.clientY + w.scrollTop - rt.top) / K;
      return {
        x: at,
        y: zt
      };
    }
    function q(b, w) {
      const K = H(b, w, "px");
      return {
        [(0, o.browserPrefixToKey)("transform", o.default)]: K
      };
    }
    function Q(b, w) {
      return H(b, w, "");
    }
    function H(b, w, K) {
      let { x: et, y: rt } = b, at = "translate(".concat(et).concat(K, ",").concat(rt).concat(K, ")");
      if (w) {
        const zt = "".concat(typeof w.x == "string" ? w.x : w.x + K), Ht = "".concat(typeof w.y == "string" ? w.y : w.y + K);
        at = "translate(".concat(zt, ", ").concat(Ht, ")") + at;
      }
      return at;
    }
    function O(b, w) {
      return b.targetTouches && (0, f.findInArray)(b.targetTouches, (K) => w === K.identifier) || b.changedTouches && (0, f.findInArray)(b.changedTouches, (K) => w === K.identifier);
    }
    function R(b) {
      if (b.targetTouches && b.targetTouches[0]) return b.targetTouches[0].identifier;
      if (b.changedTouches && b.changedTouches[0]) return b.changedTouches[0].identifier;
    }
    function x(b) {
      if (!b) return;
      let w = b.getElementById("react-draggable-style-el");
      w || (w = b.createElement("style"), w.type = "text/css", w.id = "react-draggable-style-el", w.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, w.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, b.getElementsByTagName("head")[0].appendChild(w)), b.body && V(b.body, "react-draggable-transparent-selection");
    }
    function Z(b) {
      if (b) try {
        if (b.body && F(b.body, "react-draggable-transparent-selection"), b.selection) b.selection.empty();
        else {
          const w = (b.defaultView || window).getSelection();
          w && w.type !== "Caret" && w.removeAllRanges();
        }
      } catch {
      }
    }
    function V(b, w) {
      b.classList ? b.classList.add(w) : b.className.match(new RegExp("(?:^|\\s)".concat(w, "(?!\\S)"))) || (b.className += " ".concat(w));
    }
    function F(b, w) {
      b.classList ? b.classList.remove(w) : b.className = b.className.replace(new RegExp("(?:^|\\s)".concat(w, "(?!\\S)"), "g"), "");
    }
    return qt;
  }
  var qe = {}, Md;
  function np() {
    if (Md) return qe;
    Md = 1, Object.defineProperty(qe, "__esModule", {
      value: true
    }), qe.canDragX = h, qe.canDragY = d, qe.createCoreData = v, qe.createDraggableData = g, qe.getBoundPosition = c, qe.getControlPosition = m, qe.snapToGrid = i;
    var f = Ti(), o = fc();
    function c(E, U, B) {
      if (!E.props.bounds) return [
        U,
        B
      ];
      let { bounds: q } = E.props;
      q = typeof q == "string" ? q : p(q);
      const Q = T(E);
      if (typeof q == "string") {
        const { ownerDocument: H } = Q, O = H.defaultView;
        let R;
        if (q === "parent" ? R = Q.parentNode : R = H.querySelector(q), !(R instanceof O.HTMLElement)) throw new Error('Bounds selector "' + q + '" could not find an element.');
        const x = R, Z = O.getComputedStyle(Q), V = O.getComputedStyle(x);
        q = {
          left: -Q.offsetLeft + (0, f.int)(V.paddingLeft) + (0, f.int)(Z.marginLeft),
          top: -Q.offsetTop + (0, f.int)(V.paddingTop) + (0, f.int)(Z.marginTop),
          right: (0, o.innerWidth)(x) - (0, o.outerWidth)(Q) - Q.offsetLeft + (0, f.int)(V.paddingRight) - (0, f.int)(Z.marginRight),
          bottom: (0, o.innerHeight)(x) - (0, o.outerHeight)(Q) - Q.offsetTop + (0, f.int)(V.paddingBottom) - (0, f.int)(Z.marginBottom)
        };
      }
      return (0, f.isNum)(q.right) && (U = Math.min(U, q.right)), (0, f.isNum)(q.bottom) && (B = Math.min(B, q.bottom)), (0, f.isNum)(q.left) && (U = Math.max(U, q.left)), (0, f.isNum)(q.top) && (B = Math.max(B, q.top)), [
        U,
        B
      ];
    }
    function i(E, U, B) {
      const q = Math.round(U / E[0]) * E[0], Q = Math.round(B / E[1]) * E[1];
      return [
        q,
        Q
      ];
    }
    function h(E) {
      return E.props.axis === "both" || E.props.axis === "x";
    }
    function d(E) {
      return E.props.axis === "both" || E.props.axis === "y";
    }
    function m(E, U, B) {
      const q = typeof U == "number" ? (0, o.getTouch)(E, U) : null;
      if (typeof U == "number" && !q) return null;
      const Q = T(B), H = B.props.offsetParent || Q.offsetParent || Q.ownerDocument.body;
      return (0, o.offsetXYFromParent)(q || E, H, B.props.scale);
    }
    function v(E, U, B) {
      const q = !(0, f.isNum)(E.lastX), Q = T(E);
      return q ? {
        node: Q,
        deltaX: 0,
        deltaY: 0,
        lastX: U,
        lastY: B,
        x: U,
        y: B
      } : {
        node: Q,
        deltaX: U - E.lastX,
        deltaY: B - E.lastY,
        lastX: E.lastX,
        lastY: E.lastY,
        x: U,
        y: B
      };
    }
    function g(E, U) {
      const B = E.props.scale;
      return {
        node: U.node,
        x: E.state.x + U.deltaX / B,
        y: E.state.y + U.deltaY / B,
        deltaX: U.deltaX / B,
        deltaY: U.deltaY / B,
        lastX: E.state.x,
        lastY: E.state.y
      };
    }
    function p(E) {
      return {
        left: E.left,
        top: E.top,
        right: E.right,
        bottom: E.bottom
      };
    }
    function T(E) {
      const U = E.findDOMNode();
      if (!U) throw new Error("<DraggableCore>: Unmounted during event!");
      return U;
    }
    return qe;
  }
  var Xn = {}, hi = {}, Od;
  function up() {
    if (Od) return hi;
    Od = 1, Object.defineProperty(hi, "__esModule", {
      value: true
    }), hi.default = f;
    function f() {
    }
    return hi;
  }
  var xd;
  function ry() {
    if (xd) return Xn;
    xd = 1, Object.defineProperty(Xn, "__esModule", {
      value: true
    }), Xn.default = void 0;
    var f = p(Qn()), o = v(Ld()), c = v(bi()), i = fc(), h = np(), d = Ti(), m = v(up());
    function v(H) {
      return H && H.__esModule ? H : {
        default: H
      };
    }
    function g(H) {
      if (typeof WeakMap != "function") return null;
      var O = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap();
      return (g = function(x) {
        return x ? R : O;
      })(H);
    }
    function p(H, O) {
      if (H && H.__esModule) return H;
      if (H === null || typeof H != "object" && typeof H != "function") return {
        default: H
      };
      var R = g(O);
      if (R && R.has(H)) return R.get(H);
      var x = {}, Z = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var V in H) if (V !== "default" && Object.prototype.hasOwnProperty.call(H, V)) {
        var F = Z ? Object.getOwnPropertyDescriptor(H, V) : null;
        F && (F.get || F.set) ? Object.defineProperty(x, V, F) : x[V] = H[V];
      }
      return x.default = H, R && R.set(H, x), x;
    }
    function T(H, O, R) {
      return O = E(O), O in H ? Object.defineProperty(H, O, {
        value: R,
        enumerable: true,
        configurable: true,
        writable: true
      }) : H[O] = R, H;
    }
    function E(H) {
      var O = U(H, "string");
      return typeof O == "symbol" ? O : String(O);
    }
    function U(H, O) {
      if (typeof H != "object" || H === null) return H;
      var R = H[Symbol.toPrimitive];
      if (R !== void 0) {
        var x = R.call(H, O);
        if (typeof x != "object") return x;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (O === "string" ? String : Number)(H);
    }
    const B = {
      touch: {
        start: "touchstart",
        move: "touchmove",
        stop: "touchend"
      },
      mouse: {
        start: "mousedown",
        move: "mousemove",
        stop: "mouseup"
      }
    };
    let q = B.mouse, Q = class extends f.Component {
      constructor() {
        super(...arguments), T(this, "dragging", false), T(this, "lastX", NaN), T(this, "lastY", NaN), T(this, "touchIdentifier", null), T(this, "mounted", false), T(this, "handleDragStart", (O) => {
          if (this.props.onMouseDown(O), !this.props.allowAnyClick && typeof O.button == "number" && O.button !== 0) return false;
          const R = this.findDOMNode();
          if (!R || !R.ownerDocument || !R.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!");
          const { ownerDocument: x } = R;
          if (this.props.disabled || !(O.target instanceof x.defaultView.Node) || this.props.handle && !(0, i.matchesSelectorAndParentsTo)(O.target, this.props.handle, R) || this.props.cancel && (0, i.matchesSelectorAndParentsTo)(O.target, this.props.cancel, R)) return;
          O.type === "touchstart" && O.preventDefault();
          const Z = (0, i.getTouchIdentifier)(O);
          this.touchIdentifier = Z;
          const V = (0, h.getControlPosition)(O, Z, this);
          if (V == null) return;
          const { x: F, y: b } = V, w = (0, h.createCoreData)(this, F, b);
          (0, m.default)("DraggableCore: handleDragStart: %j", w), (0, m.default)("calling", this.props.onStart), !(this.props.onStart(O, w) === false || this.mounted === false) && (this.props.enableUserSelectHack && (0, i.addUserSelectStyles)(x), this.dragging = true, this.lastX = F, this.lastY = b, (0, i.addEvent)(x, q.move, this.handleDrag), (0, i.addEvent)(x, q.stop, this.handleDragStop));
        }), T(this, "handleDrag", (O) => {
          const R = (0, h.getControlPosition)(O, this.touchIdentifier, this);
          if (R == null) return;
          let { x, y: Z } = R;
          if (Array.isArray(this.props.grid)) {
            let b = x - this.lastX, w = Z - this.lastY;
            if ([b, w] = (0, h.snapToGrid)(this.props.grid, b, w), !b && !w) return;
            x = this.lastX + b, Z = this.lastY + w;
          }
          const V = (0, h.createCoreData)(this, x, Z);
          if ((0, m.default)("DraggableCore: handleDrag: %j", V), this.props.onDrag(O, V) === false || this.mounted === false) {
            try {
              this.handleDragStop(new MouseEvent("mouseup"));
            } catch {
              const w = document.createEvent("MouseEvents");
              w.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null), this.handleDragStop(w);
            }
            return;
          }
          this.lastX = x, this.lastY = Z;
        }), T(this, "handleDragStop", (O) => {
          if (!this.dragging) return;
          const R = (0, h.getControlPosition)(O, this.touchIdentifier, this);
          if (R == null) return;
          let { x, y: Z } = R;
          if (Array.isArray(this.props.grid)) {
            let w = x - this.lastX || 0, K = Z - this.lastY || 0;
            [w, K] = (0, h.snapToGrid)(this.props.grid, w, K), x = this.lastX + w, Z = this.lastY + K;
          }
          const V = (0, h.createCoreData)(this, x, Z);
          if (this.props.onStop(O, V) === false || this.mounted === false) return false;
          const b = this.findDOMNode();
          b && this.props.enableUserSelectHack && (0, i.removeUserSelectStyles)(b.ownerDocument), (0, m.default)("DraggableCore: handleDragStop: %j", V), this.dragging = false, this.lastX = NaN, this.lastY = NaN, b && ((0, m.default)("DraggableCore: Removing handlers"), (0, i.removeEvent)(b.ownerDocument, q.move, this.handleDrag), (0, i.removeEvent)(b.ownerDocument, q.stop, this.handleDragStop));
        }), T(this, "onMouseDown", (O) => (q = B.mouse, this.handleDragStart(O))), T(this, "onMouseUp", (O) => (q = B.mouse, this.handleDragStop(O))), T(this, "onTouchStart", (O) => (q = B.touch, this.handleDragStart(O))), T(this, "onTouchEnd", (O) => (q = B.touch, this.handleDragStop(O)));
      }
      componentDidMount() {
        this.mounted = true;
        const O = this.findDOMNode();
        O && (0, i.addEvent)(O, B.touch.start, this.onTouchStart, {
          passive: false
        });
      }
      componentWillUnmount() {
        this.mounted = false;
        const O = this.findDOMNode();
        if (O) {
          const { ownerDocument: R } = O;
          (0, i.removeEvent)(R, B.mouse.move, this.handleDrag), (0, i.removeEvent)(R, B.touch.move, this.handleDrag), (0, i.removeEvent)(R, B.mouse.stop, this.handleDragStop), (0, i.removeEvent)(R, B.touch.stop, this.handleDragStop), (0, i.removeEvent)(O, B.touch.start, this.onTouchStart, {
            passive: false
          }), this.props.enableUserSelectHack && (0, i.removeUserSelectStyles)(R);
        }
      }
      findDOMNode() {
        var O, R;
        return (O = this.props) !== null && O !== void 0 && O.nodeRef ? (R = this.props) === null || R === void 0 || (R = R.nodeRef) === null || R === void 0 ? void 0 : R.current : c.default.findDOMNode(this);
      }
      render() {
        return f.cloneElement(f.Children.only(this.props.children), {
          onMouseDown: this.onMouseDown,
          onMouseUp: this.onMouseUp,
          onTouchEnd: this.onTouchEnd
        });
      }
    };
    return Xn.default = Q, T(Q, "displayName", "DraggableCore"), T(Q, "propTypes", {
      allowAnyClick: o.default.bool,
      children: o.default.node.isRequired,
      disabled: o.default.bool,
      enableUserSelectHack: o.default.bool,
      offsetParent: function(H, O) {
        if (H[O] && H[O].nodeType !== 1) throw new Error("Draggable's offsetParent must be a DOM Node.");
      },
      grid: o.default.arrayOf(o.default.number),
      handle: o.default.string,
      cancel: o.default.string,
      nodeRef: o.default.object,
      onStart: o.default.func,
      onDrag: o.default.func,
      onStop: o.default.func,
      onMouseDown: o.default.func,
      scale: o.default.number,
      className: d.dontSetMe,
      style: d.dontSetMe,
      transform: d.dontSetMe
    }), T(Q, "defaultProps", {
      allowAnyClick: false,
      disabled: false,
      enableUserSelectHack: true,
      onStart: function() {
      },
      onDrag: function() {
      },
      onStop: function() {
      },
      onMouseDown: function() {
      },
      scale: 1
    }), Xn;
  }
  var Cd;
  function cy() {
    return Cd || (Cd = 1, (function(f) {
      Object.defineProperty(f, "__esModule", {
        value: true
      }), Object.defineProperty(f, "DraggableCore", {
        enumerable: true,
        get: function() {
          return g.default;
        }
      }), f.default = void 0;
      var o = U(Qn()), c = T(Ld()), i = T(bi()), h = T(Ov), d = fc(), m = np(), v = Ti(), g = T(ry()), p = T(up());
      function T(R) {
        return R && R.__esModule ? R : {
          default: R
        };
      }
      function E(R) {
        if (typeof WeakMap != "function") return null;
        var x = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap();
        return (E = function(V) {
          return V ? Z : x;
        })(R);
      }
      function U(R, x) {
        if (R && R.__esModule) return R;
        if (R === null || typeof R != "object" && typeof R != "function") return {
          default: R
        };
        var Z = E(x);
        if (Z && Z.has(R)) return Z.get(R);
        var V = {}, F = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var b in R) if (b !== "default" && Object.prototype.hasOwnProperty.call(R, b)) {
          var w = F ? Object.getOwnPropertyDescriptor(R, b) : null;
          w && (w.get || w.set) ? Object.defineProperty(V, b, w) : V[b] = R[b];
        }
        return V.default = R, Z && Z.set(R, V), V;
      }
      function B() {
        return B = Object.assign ? Object.assign.bind() : function(R) {
          for (var x = 1; x < arguments.length; x++) {
            var Z = arguments[x];
            for (var V in Z) Object.prototype.hasOwnProperty.call(Z, V) && (R[V] = Z[V]);
          }
          return R;
        }, B.apply(this, arguments);
      }
      function q(R, x, Z) {
        return x = Q(x), x in R ? Object.defineProperty(R, x, {
          value: Z,
          enumerable: true,
          configurable: true,
          writable: true
        }) : R[x] = Z, R;
      }
      function Q(R) {
        var x = H(R, "string");
        return typeof x == "symbol" ? x : String(x);
      }
      function H(R, x) {
        if (typeof R != "object" || R === null) return R;
        var Z = R[Symbol.toPrimitive];
        if (Z !== void 0) {
          var V = Z.call(R, x);
          if (typeof V != "object") return V;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (x === "string" ? String : Number)(R);
      }
      class O extends o.Component {
        static getDerivedStateFromProps(x, Z) {
          let { position: V } = x, { prevPropsPosition: F } = Z;
          return V && (!F || V.x !== F.x || V.y !== F.y) ? ((0, p.default)("Draggable: getDerivedStateFromProps %j", {
            position: V,
            prevPropsPosition: F
          }), {
            x: V.x,
            y: V.y,
            prevPropsPosition: {
              ...V
            }
          }) : null;
        }
        constructor(x) {
          super(x), q(this, "onDragStart", (Z, V) => {
            if ((0, p.default)("Draggable: onDragStart: %j", V), this.props.onStart(Z, (0, m.createDraggableData)(this, V)) === false) return false;
            this.setState({
              dragging: true,
              dragged: true
            });
          }), q(this, "onDrag", (Z, V) => {
            if (!this.state.dragging) return false;
            (0, p.default)("Draggable: onDrag: %j", V);
            const F = (0, m.createDraggableData)(this, V), b = {
              x: F.x,
              y: F.y,
              slackX: 0,
              slackY: 0
            };
            if (this.props.bounds) {
              const { x: K, y: et } = b;
              b.x += this.state.slackX, b.y += this.state.slackY;
              const [rt, at] = (0, m.getBoundPosition)(this, b.x, b.y);
              b.x = rt, b.y = at, b.slackX = this.state.slackX + (K - b.x), b.slackY = this.state.slackY + (et - b.y), F.x = b.x, F.y = b.y, F.deltaX = b.x - this.state.x, F.deltaY = b.y - this.state.y;
            }
            if (this.props.onDrag(Z, F) === false) return false;
            this.setState(b);
          }), q(this, "onDragStop", (Z, V) => {
            if (!this.state.dragging || this.props.onStop(Z, (0, m.createDraggableData)(this, V)) === false) return false;
            (0, p.default)("Draggable: onDragStop: %j", V);
            const b = {
              dragging: false,
              slackX: 0,
              slackY: 0
            };
            if (!!this.props.position) {
              const { x: K, y: et } = this.props.position;
              b.x = K, b.y = et;
            }
            this.setState(b);
          }), this.state = {
            dragging: false,
            dragged: false,
            x: x.position ? x.position.x : x.defaultPosition.x,
            y: x.position ? x.position.y : x.defaultPosition.y,
            prevPropsPosition: {
              ...x.position
            },
            slackX: 0,
            slackY: 0,
            isElementSVG: false
          }, x.position && !(x.onDrag || x.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
        }
        componentDidMount() {
          typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
            isElementSVG: true
          });
        }
        componentWillUnmount() {
          this.setState({
            dragging: false
          });
        }
        findDOMNode() {
          var x, Z;
          return (x = (Z = this.props) === null || Z === void 0 || (Z = Z.nodeRef) === null || Z === void 0 ? void 0 : Z.current) !== null && x !== void 0 ? x : i.default.findDOMNode(this);
        }
        render() {
          const { axis: x, bounds: Z, children: V, defaultPosition: F, defaultClassName: b, defaultClassNameDragging: w, defaultClassNameDragged: K, position: et, positionOffset: rt, scale: at, ...zt } = this.props;
          let Ht = {}, Lt = null;
          const J = !!!et || this.state.dragging, I = et || F, mt = {
            x: (0, m.canDragX)(this) && J ? this.state.x : I.x,
            y: (0, m.canDragY)(this) && J ? this.state.y : I.y
          };
          this.state.isElementSVG ? Lt = (0, d.createSVGTransform)(mt, rt) : Ht = (0, d.createCSSTransform)(mt, rt);
          const ct = (0, h.default)(V.props.className || "", b, {
            [w]: this.state.dragging,
            [K]: this.state.dragged
          });
          return o.createElement(g.default, B({}, zt, {
            onStart: this.onDragStart,
            onDrag: this.onDrag,
            onStop: this.onDragStop
          }), o.cloneElement(o.Children.only(V), {
            className: ct,
            style: {
              ...V.props.style,
              ...Ht
            },
            transform: Lt
          }));
        }
      }
      f.default = O, q(O, "displayName", "Draggable"), q(O, "propTypes", {
        ...g.default.propTypes,
        axis: c.default.oneOf([
          "both",
          "x",
          "y",
          "none"
        ]),
        bounds: c.default.oneOfType([
          c.default.shape({
            left: c.default.number,
            right: c.default.number,
            top: c.default.number,
            bottom: c.default.number
          }),
          c.default.string,
          c.default.oneOf([
            false
          ])
        ]),
        defaultClassName: c.default.string,
        defaultClassNameDragging: c.default.string,
        defaultClassNameDragged: c.default.string,
        defaultPosition: c.default.shape({
          x: c.default.number,
          y: c.default.number
        }),
        positionOffset: c.default.shape({
          x: c.default.oneOfType([
            c.default.number,
            c.default.string
          ]),
          y: c.default.oneOfType([
            c.default.number,
            c.default.string
          ])
        }),
        position: c.default.shape({
          x: c.default.number,
          y: c.default.number
        }),
        className: v.dontSetMe,
        style: v.dontSetMe,
        transform: v.dontSetMe
      }), q(O, "defaultProps", {
        ...g.default.defaultProps,
        axis: "both",
        bounds: false,
        defaultClassName: "react-draggable",
        defaultClassNameDragging: "react-draggable-dragging",
        defaultClassNameDragged: "react-draggable-dragged",
        defaultPosition: {
          x: 0,
          y: 0
        },
        scale: 1
      });
    })(kr)), kr;
  }
  var Nd;
  function oy() {
    if (Nd) return Ln.exports;
    Nd = 1;
    const { default: f, DraggableCore: o } = cy();
    return Ln.exports = f, Ln.exports.default = f, Ln.exports.DraggableCore = o, Ln.exports;
  }
  var sy = oy();
  const hy = qd(sy);
  var Zt = function() {
    return Zt = Object.assign || function(f) {
      for (var o, c = 1, i = arguments.length; c < i; c++) {
        o = arguments[c];
        for (var h in o) Object.prototype.hasOwnProperty.call(o, h) && (f[h] = o[h]);
      }
      return f;
    }, Zt.apply(this, arguments);
  }, Ud = {
    width: "100%",
    height: "10px",
    top: "0px",
    left: "0px",
    cursor: "row-resize"
  }, Hd = {
    width: "10px",
    height: "100%",
    top: "0px",
    left: "0px",
    cursor: "col-resize"
  }, di = {
    width: "20px",
    height: "20px",
    position: "absolute",
    zIndex: 1
  }, dy = {
    top: Zt(Zt({}, Ud), {
      top: "-5px"
    }),
    right: Zt(Zt({}, Hd), {
      left: void 0,
      right: "-5px"
    }),
    bottom: Zt(Zt({}, Ud), {
      top: void 0,
      bottom: "-5px"
    }),
    left: Zt(Zt({}, Hd), {
      left: "-5px"
    }),
    topRight: Zt(Zt({}, di), {
      right: "-10px",
      top: "-10px",
      cursor: "ne-resize"
    }),
    bottomRight: Zt(Zt({}, di), {
      right: "-10px",
      bottom: "-10px",
      cursor: "se-resize"
    }),
    bottomLeft: Zt(Zt({}, di), {
      left: "-10px",
      bottom: "-10px",
      cursor: "sw-resize"
    }),
    topLeft: Zt(Zt({}, di), {
      left: "-10px",
      top: "-10px",
      cursor: "nw-resize"
    })
  }, py = X.memo(function(f) {
    var o = f.onResizeStart, c = f.direction, i = f.children, h = f.replaceStyles, d = f.className, m = X.useCallback(function(p) {
      o(p, c);
    }, [
      o,
      c
    ]), v = X.useCallback(function(p) {
      o(p, c);
    }, [
      o,
      c
    ]), g = X.useMemo(function() {
      return Zt(Zt({
        position: "absolute",
        userSelect: "none"
      }, dy[c]), h ?? {});
    }, [
      h,
      c
    ]);
    return Gn.jsx("div", {
      className: d || void 0,
      style: g,
      onMouseDown: m,
      onTouchStart: v,
      children: i
    });
  }), my = /* @__PURE__ */ (function() {
    var f = function(o, c) {
      return f = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(i, h) {
        i.__proto__ = h;
      } || function(i, h) {
        for (var d in h) Object.prototype.hasOwnProperty.call(h, d) && (i[d] = h[d]);
      }, f(o, c);
    };
    return function(o, c) {
      if (typeof c != "function" && c !== null) throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      f(o, c);
      function i() {
        this.constructor = o;
      }
      o.prototype = c === null ? Object.create(c) : (i.prototype = c.prototype, new i());
    };
  })(), Le = function() {
    return Le = Object.assign || function(f) {
      for (var o, c = 1, i = arguments.length; c < i; c++) {
        o = arguments[c];
        for (var h in o) Object.prototype.hasOwnProperty.call(o, h) && (f[h] = o[h]);
      }
      return f;
    }, Le.apply(this, arguments);
  }, vy = {
    width: "auto",
    height: "auto"
  }, pi = function(f, o, c) {
    return Math.max(Math.min(f, c), o);
  }, wd = function(f, o, c) {
    var i = Math.round(f / o);
    return i * o + c * (i - 1);
  }, Xa = function(f, o) {
    return new RegExp(f, "i").test(o);
  }, mi = function(f) {
    return !!(f.touches && f.touches.length);
  }, gy = function(f) {
    return !!((f.clientX || f.clientX === 0) && (f.clientY || f.clientY === 0));
  }, Bd = function(f, o, c) {
    c === void 0 && (c = 0);
    var i = o.reduce(function(d, m, v) {
      return Math.abs(m - f) < Math.abs(o[d] - f) ? v : d;
    }, 0), h = Math.abs(o[i] - f);
    return c === 0 || h < c ? o[i] : f;
  }, Pr = function(f) {
    return f = f.toString(), f === "auto" || f.endsWith("px") || f.endsWith("%") || f.endsWith("vh") || f.endsWith("vw") || f.endsWith("vmax") || f.endsWith("vmin") ? f : "".concat(f, "px");
  }, vi = function(f, o, c, i) {
    if (f && typeof f == "string") {
      if (f.endsWith("px")) return Number(f.replace("px", ""));
      if (f.endsWith("%")) {
        var h = Number(f.replace("%", "")) / 100;
        return o * h;
      }
      if (f.endsWith("vw")) {
        var h = Number(f.replace("vw", "")) / 100;
        return c * h;
      }
      if (f.endsWith("vh")) {
        var h = Number(f.replace("vh", "")) / 100;
        return i * h;
      }
    }
    return f;
  }, yy = function(f, o, c, i, h, d, m) {
    return i = vi(i, f.width, o, c), h = vi(h, f.height, o, c), d = vi(d, f.width, o, c), m = vi(m, f.height, o, c), {
      maxWidth: typeof i > "u" ? void 0 : Number(i),
      maxHeight: typeof h > "u" ? void 0 : Number(h),
      minWidth: typeof d > "u" ? void 0 : Number(d),
      minHeight: typeof m > "u" ? void 0 : Number(m)
    };
  }, Sy = function(f) {
    return Array.isArray(f) ? f : [
      f,
      f
    ];
  }, by = [
    "as",
    "ref",
    "style",
    "className",
    "grid",
    "gridGap",
    "snap",
    "bounds",
    "boundsByDirection",
    "size",
    "defaultSize",
    "minWidth",
    "minHeight",
    "maxWidth",
    "maxHeight",
    "lockAspectRatio",
    "lockAspectRatioExtraWidth",
    "lockAspectRatioExtraHeight",
    "enable",
    "handleStyles",
    "handleClasses",
    "handleWrapperStyle",
    "handleWrapperClass",
    "children",
    "onResizeStart",
    "onResize",
    "onResizeStop",
    "handleComponent",
    "scale",
    "resizeRatio",
    "snapGap"
  ], Yd = "__resizable_base__", zy = (function(f) {
    my(o, f);
    function o(c) {
      var i, h, d, m, v = f.call(this, c) || this;
      return v.ratio = 1, v.resizable = null, v.parentLeft = 0, v.parentTop = 0, v.resizableLeft = 0, v.resizableRight = 0, v.resizableTop = 0, v.resizableBottom = 0, v.targetLeft = 0, v.targetTop = 0, v.delta = {
        width: 0,
        height: 0
      }, v.appendBase = function() {
        if (!v.resizable || !v.window) return null;
        var g = v.parentNode;
        if (!g) return null;
        var p = v.window.document.createElement("div");
        return p.style.width = "100%", p.style.height = "100%", p.style.position = "absolute", p.style.transform = "scale(0, 0)", p.style.left = "0", p.style.flex = "0 0 100%", p.classList ? p.classList.add(Yd) : p.className += Yd, g.appendChild(p), p;
      }, v.removeBase = function(g) {
        var p = v.parentNode;
        p && p.removeChild(g);
      }, v.state = {
        isResizing: false,
        width: (h = (i = v.propsSize) === null || i === void 0 ? void 0 : i.width) !== null && h !== void 0 ? h : "auto",
        height: (m = (d = v.propsSize) === null || d === void 0 ? void 0 : d.height) !== null && m !== void 0 ? m : "auto",
        direction: "right",
        original: {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        backgroundStyle: {
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0)",
          cursor: "auto",
          opacity: 0,
          position: "fixed",
          zIndex: 9999,
          top: "0",
          left: "0",
          bottom: "0",
          right: "0"
        },
        flexBasis: void 0
      }, v.onResizeStart = v.onResizeStart.bind(v), v.onMouseMove = v.onMouseMove.bind(v), v.onMouseUp = v.onMouseUp.bind(v), v;
    }
    return Object.defineProperty(o.prototype, "parentNode", {
      get: function() {
        return this.resizable ? this.resizable.parentNode : null;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(o.prototype, "window", {
      get: function() {
        return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(o.prototype, "propsSize", {
      get: function() {
        return this.props.size || this.props.defaultSize || vy;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(o.prototype, "size", {
      get: function() {
        var c = 0, i = 0;
        if (this.resizable && this.window) {
          var h = this.resizable.offsetWidth, d = this.resizable.offsetHeight, m = this.resizable.style.position;
          m !== "relative" && (this.resizable.style.position = "relative"), c = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : h, i = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : d, this.resizable.style.position = m;
        }
        return {
          width: c,
          height: i
        };
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(o.prototype, "sizeStyle", {
      get: function() {
        var c = this, i = this.props.size, h = function(v) {
          var g;
          if (typeof c.state[v] > "u" || c.state[v] === "auto") return "auto";
          if (c.propsSize && c.propsSize[v] && (!((g = c.propsSize[v]) === null || g === void 0) && g.toString().endsWith("%"))) {
            if (c.state[v].toString().endsWith("%")) return c.state[v].toString();
            var p = c.getParentSize(), T = Number(c.state[v].toString().replace("px", "")), E = T / p[v] * 100;
            return "".concat(E, "%");
          }
          return Pr(c.state[v]);
        }, d = i && typeof i.width < "u" && !this.state.isResizing ? Pr(i.width) : h("width"), m = i && typeof i.height < "u" && !this.state.isResizing ? Pr(i.height) : h("height");
        return {
          width: d,
          height: m
        };
      },
      enumerable: false,
      configurable: true
    }), o.prototype.getParentSize = function() {
      if (!this.parentNode) return this.window ? {
        width: this.window.innerWidth,
        height: this.window.innerHeight
      } : {
        width: 0,
        height: 0
      };
      var c = this.appendBase();
      if (!c) return {
        width: 0,
        height: 0
      };
      var i = false, h = this.parentNode.style.flexWrap;
      h !== "wrap" && (i = true, this.parentNode.style.flexWrap = "wrap"), c.style.position = "relative", c.style.minWidth = "100%", c.style.minHeight = "100%";
      var d = {
        width: c.offsetWidth,
        height: c.offsetHeight
      };
      return i && (this.parentNode.style.flexWrap = h), this.removeBase(c), d;
    }, o.prototype.bindEvents = function() {
      this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
        capture: true,
        passive: false
      }), this.window.addEventListener("touchend", this.onMouseUp));
    }, o.prototype.unbindEvents = function() {
      this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, true), this.window.removeEventListener("touchend", this.onMouseUp));
    }, o.prototype.componentDidMount = function() {
      if (!(!this.resizable || !this.window)) {
        var c = this.window.getComputedStyle(this.resizable);
        this.setState({
          width: this.state.width || this.size.width,
          height: this.state.height || this.size.height,
          flexBasis: c.flexBasis !== "auto" ? c.flexBasis : void 0
        });
      }
    }, o.prototype.componentWillUnmount = function() {
      this.window && this.unbindEvents();
    }, o.prototype.createSizeForCssProperty = function(c, i) {
      var h = this.propsSize && this.propsSize[i];
      return this.state[i] === "auto" && this.state.original[i] === c && (typeof h > "u" || h === "auto") ? "auto" : c;
    }, o.prototype.calculateNewMaxFromBoundary = function(c, i) {
      var h = this.props.boundsByDirection, d = this.state.direction, m = h && Xa("left", d), v = h && Xa("top", d), g, p;
      if (this.props.bounds === "parent") {
        var T = this.parentNode;
        T && (g = m ? this.resizableRight - this.parentLeft : T.offsetWidth + (this.parentLeft - this.resizableLeft), p = v ? this.resizableBottom - this.parentTop : T.offsetHeight + (this.parentTop - this.resizableTop));
      } else this.props.bounds === "window" ? this.window && (g = m ? this.resizableRight : this.window.innerWidth - this.resizableLeft, p = v ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (g = m ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), p = v ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return g && Number.isFinite(g) && (c = c && c < g ? c : g), p && Number.isFinite(p) && (i = i && i < p ? i : p), {
        maxWidth: c,
        maxHeight: i
      };
    }, o.prototype.calculateNewSizeFromDirection = function(c, i) {
      var h = this.props.scale || 1, d = Sy(this.props.resizeRatio || 1), m = d[0], v = d[1], g = this.state, p = g.direction, T = g.original, E = this.props, U = E.lockAspectRatio, B = E.lockAspectRatioExtraHeight, q = E.lockAspectRatioExtraWidth, Q = T.width, H = T.height, O = B || 0, R = q || 0;
      return Xa("right", p) && (Q = T.width + (c - T.x) * m / h, U && (H = (Q - R) / this.ratio + O)), Xa("left", p) && (Q = T.width - (c - T.x) * m / h, U && (H = (Q - R) / this.ratio + O)), Xa("bottom", p) && (H = T.height + (i - T.y) * v / h, U && (Q = (H - O) * this.ratio + R)), Xa("top", p) && (H = T.height - (i - T.y) * v / h, U && (Q = (H - O) * this.ratio + R)), {
        newWidth: Q,
        newHeight: H
      };
    }, o.prototype.calculateNewSizeFromAspectRatio = function(c, i, h, d) {
      var m = this.props, v = m.lockAspectRatio, g = m.lockAspectRatioExtraHeight, p = m.lockAspectRatioExtraWidth, T = typeof d.width > "u" ? 10 : d.width, E = typeof h.width > "u" || h.width < 0 ? c : h.width, U = typeof d.height > "u" ? 10 : d.height, B = typeof h.height > "u" || h.height < 0 ? i : h.height, q = g || 0, Q = p || 0;
      if (v) {
        var H = (U - q) * this.ratio + Q, O = (B - q) * this.ratio + Q, R = (T - Q) / this.ratio + q, x = (E - Q) / this.ratio + q, Z = Math.max(T, H), V = Math.min(E, O), F = Math.max(U, R), b = Math.min(B, x);
        c = pi(c, Z, V), i = pi(i, F, b);
      } else c = pi(c, T, E), i = pi(i, U, B);
      return {
        newWidth: c,
        newHeight: i
      };
    }, o.prototype.setBoundingClientRect = function() {
      var c = 1 / (this.props.scale || 1);
      if (this.props.bounds === "parent") {
        var i = this.parentNode;
        if (i) {
          var h = i.getBoundingClientRect();
          this.parentLeft = h.left * c, this.parentTop = h.top * c;
        }
      }
      if (this.props.bounds && typeof this.props.bounds != "string") {
        var d = this.props.bounds.getBoundingClientRect();
        this.targetLeft = d.left * c, this.targetTop = d.top * c;
      }
      if (this.resizable) {
        var m = this.resizable.getBoundingClientRect(), v = m.left, g = m.top, p = m.right, T = m.bottom;
        this.resizableLeft = v * c, this.resizableRight = p * c, this.resizableTop = g * c, this.resizableBottom = T * c;
      }
    }, o.prototype.onResizeStart = function(c, i) {
      if (!(!this.resizable || !this.window)) {
        var h = 0, d = 0;
        if (c.nativeEvent && gy(c.nativeEvent) ? (h = c.nativeEvent.clientX, d = c.nativeEvent.clientY) : c.nativeEvent && mi(c.nativeEvent) && (h = c.nativeEvent.touches[0].clientX, d = c.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
          var m = this.props.onResizeStart(c, i, this.resizable);
          if (m === false) return;
        }
        this.props.size && (typeof this.props.size.height < "u" && this.props.size.height !== this.state.height && this.setState({
          height: this.props.size.height
        }), typeof this.props.size.width < "u" && this.props.size.width !== this.state.width && this.setState({
          width: this.props.size.width
        })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var v, g = this.window.getComputedStyle(this.resizable);
        if (g.flexBasis !== "auto") {
          var p = this.parentNode;
          if (p) {
            var T = this.window.getComputedStyle(p).flexDirection;
            this.flexDir = T.startsWith("row") ? "row" : "column", v = g.flexBasis;
          }
        }
        this.setBoundingClientRect(), this.bindEvents();
        var E = {
          original: {
            x: h,
            y: d,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: true,
          backgroundStyle: Le(Le({}, this.state.backgroundStyle), {
            cursor: this.window.getComputedStyle(c.target).cursor || "auto"
          }),
          direction: i,
          flexBasis: v
        };
        this.setState(E);
      }
    }, o.prototype.onMouseMove = function(c) {
      var i = this;
      if (!(!this.state.isResizing || !this.resizable || !this.window)) {
        if (this.window.TouchEvent && mi(c)) try {
          c.preventDefault(), c.stopPropagation();
        } catch {
        }
        var h = this.props, d = h.maxWidth, m = h.maxHeight, v = h.minWidth, g = h.minHeight, p = mi(c) ? c.touches[0].clientX : c.clientX, T = mi(c) ? c.touches[0].clientY : c.clientY, E = this.state, U = E.direction, B = E.original, q = E.width, Q = E.height, H = this.getParentSize(), O = yy(H, this.window.innerWidth, this.window.innerHeight, d, m, v, g);
        d = O.maxWidth, m = O.maxHeight, v = O.minWidth, g = O.minHeight;
        var R = this.calculateNewSizeFromDirection(p, T), x = R.newHeight, Z = R.newWidth, V = this.calculateNewMaxFromBoundary(d, m);
        this.props.snap && this.props.snap.x && (Z = Bd(Z, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (x = Bd(x, this.props.snap.y, this.props.snapGap));
        var F = this.calculateNewSizeFromAspectRatio(Z, x, {
          width: V.maxWidth,
          height: V.maxHeight
        }, {
          width: v,
          height: g
        });
        if (Z = F.newWidth, x = F.newHeight, this.props.grid) {
          var b = wd(Z, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0), w = wd(x, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0), K = this.props.snapGap || 0, et = K === 0 || Math.abs(b - Z) <= K ? b : Z, rt = K === 0 || Math.abs(w - x) <= K ? w : x;
          Z = et, x = rt;
        }
        var at = {
          width: Z - B.width,
          height: x - B.height
        };
        if (this.delta = at, q && typeof q == "string") {
          if (q.endsWith("%")) {
            var zt = Z / H.width * 100;
            Z = "".concat(zt, "%");
          } else if (q.endsWith("vw")) {
            var Ht = Z / this.window.innerWidth * 100;
            Z = "".concat(Ht, "vw");
          } else if (q.endsWith("vh")) {
            var Lt = Z / this.window.innerHeight * 100;
            Z = "".concat(Lt, "vh");
          }
        }
        if (Q && typeof Q == "string") {
          if (Q.endsWith("%")) {
            var zt = x / H.height * 100;
            x = "".concat(zt, "%");
          } else if (Q.endsWith("vw")) {
            var Ht = x / this.window.innerWidth * 100;
            x = "".concat(Ht, "vw");
          } else if (Q.endsWith("vh")) {
            var Lt = x / this.window.innerHeight * 100;
            x = "".concat(Lt, "vh");
          }
        }
        var N = {
          width: this.createSizeForCssProperty(Z, "width"),
          height: this.createSizeForCssProperty(x, "height")
        };
        this.flexDir === "row" ? N.flexBasis = N.width : this.flexDir === "column" && (N.flexBasis = N.height);
        var J = this.state.width !== N.width, I = this.state.height !== N.height, mt = this.state.flexBasis !== N.flexBasis, ct = J || I || mt;
        ct && ap.flushSync(function() {
          i.setState(N);
        }), this.props.onResize && ct && this.props.onResize(c, U, this.resizable, at);
      }
    }, o.prototype.onMouseUp = function(c) {
      var i, h, d = this.state, m = d.isResizing, v = d.direction;
      d.original, !(!m || !this.resizable) && (this.props.onResizeStop && this.props.onResizeStop(c, v, this.resizable, this.delta), this.props.size && this.setState({
        width: (i = this.props.size.width) !== null && i !== void 0 ? i : "auto",
        height: (h = this.props.size.height) !== null && h !== void 0 ? h : "auto"
      }), this.unbindEvents(), this.setState({
        isResizing: false,
        backgroundStyle: Le(Le({}, this.state.backgroundStyle), {
          cursor: "auto"
        })
      }));
    }, o.prototype.updateSize = function(c) {
      var i, h;
      this.setState({
        width: (i = c.width) !== null && i !== void 0 ? i : "auto",
        height: (h = c.height) !== null && h !== void 0 ? h : "auto"
      });
    }, o.prototype.renderResizer = function() {
      var c = this, i = this.props, h = i.enable, d = i.handleStyles, m = i.handleClasses, v = i.handleWrapperStyle, g = i.handleWrapperClass, p = i.handleComponent;
      if (!h) return null;
      var T = Object.keys(h).map(function(E) {
        return h[E] !== false ? Gn.jsx(py, {
          direction: E,
          onResizeStart: c.onResizeStart,
          replaceStyles: d && d[E],
          className: m && m[E],
          children: p && p[E] ? p[E] : null
        }, E) : null;
      });
      return Gn.jsx("div", {
        className: g,
        style: v,
        children: T
      });
    }, o.prototype.render = function() {
      var c = this, i = Object.keys(this.props).reduce(function(m, v) {
        return by.indexOf(v) !== -1 || (m[v] = c.props[v]), m;
      }, {}), h = Le(Le(Le({
        position: "relative",
        userSelect: this.state.isResizing ? "none" : "auto"
      }, this.props.style), this.sizeStyle), {
        maxWidth: this.props.maxWidth,
        maxHeight: this.props.maxHeight,
        minWidth: this.props.minWidth,
        minHeight: this.props.minHeight,
        boxSizing: "border-box",
        flexShrink: 0
      });
      this.state.flexBasis && (h.flexBasis = this.state.flexBasis);
      var d = this.props.as || "div";
      return Gn.jsxs(d, Le({
        style: h,
        className: this.props.className
      }, i, {
        ref: function(m) {
          m && (c.resizable = m);
        },
        children: [
          this.state.isResizing && Gn.jsx("div", {
            style: this.state.backgroundStyle
          }),
          this.props.children,
          this.renderResizer()
        ]
      }));
    }, o.defaultProps = {
      as: "div",
      onResizeStart: function() {
      },
      onResize: function() {
      },
      onResizeStop: function() {
      },
      enable: {
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true
      },
      style: {},
      grid: [
        1,
        1
      ],
      gridGap: [
        0,
        0
      ],
      lockAspectRatio: false,
      lockAspectRatioExtraWidth: 0,
      lockAspectRatioExtraHeight: 0,
      scale: 1,
      resizeRatio: 1,
      snapGap: 0
    }, o;
  })(X.PureComponent);
  var ec = function(f, o) {
    return ec = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(c, i) {
      c.__proto__ = i;
    } || function(c, i) {
      for (var h in i) i.hasOwnProperty(h) && (c[h] = i[h]);
    }, ec(f, o);
  };
  function Ey(f, o) {
    ec(f, o);
    function c() {
      this.constructor = f;
    }
    f.prototype = o === null ? Object.create(o) : (c.prototype = o.prototype, new c());
  }
  var Kt = function() {
    return Kt = Object.assign || function(o) {
      for (var c, i = 1, h = arguments.length; i < h; i++) {
        c = arguments[i];
        for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (o[d] = c[d]);
      }
      return o;
    }, Kt.apply(this, arguments);
  };
  function Ty(f, o) {
    var c = {};
    for (var i in f) Object.prototype.hasOwnProperty.call(f, i) && o.indexOf(i) < 0 && (c[i] = f[i]);
    if (f != null && typeof Object.getOwnPropertySymbols == "function") for (var h = 0, i = Object.getOwnPropertySymbols(f); h < i.length; h++) o.indexOf(i[h]) < 0 && Object.prototype.propertyIsEnumerable.call(f, i[h]) && (c[i[h]] = f[i[h]]);
    return c;
  }
  let Dy, Ry;
  Dy = {
    width: "auto",
    height: "auto",
    display: "inline-block",
    position: "absolute",
    top: 0,
    left: 0
  };
  Ry = function(f) {
    return {
      bottom: f,
      bottomLeft: f,
      bottomRight: f,
      left: f,
      right: f,
      top: f,
      topLeft: f,
      topRight: f
    };
  };
  Ny = (function(f) {
    Ey(o, f);
    function o(c) {
      var i = f.call(this, c) || this;
      return i.resizingPosition = {
        x: 0,
        y: 0
      }, i.offsetFromParent = {
        left: 0,
        top: 0
      }, i.resizableElement = {
        current: null
      }, i.originalPosition = {
        x: 0,
        y: 0
      }, i.state = {
        resizing: false,
        bounds: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        maxWidth: c.maxWidth,
        maxHeight: c.maxHeight
      }, i.onResizeStart = i.onResizeStart.bind(i), i.onResize = i.onResize.bind(i), i.onResizeStop = i.onResizeStop.bind(i), i.onDragStart = i.onDragStart.bind(i), i.onDrag = i.onDrag.bind(i), i.onDragStop = i.onDragStop.bind(i), i.getMaxSizesFromProps = i.getMaxSizesFromProps.bind(i), i;
    }
    return o.prototype.componentDidMount = function() {
      this.updateOffsetFromParent();
      var c = this.offsetFromParent, i = c.left, h = c.top, d = this.getDraggablePosition(), m = d.x, v = d.y;
      this.draggable.setState({
        x: m - i,
        y: v - h
      }), this.forceUpdate();
    }, o.prototype.getDraggablePosition = function() {
      var c = this.draggable.state, i = c.x, h = c.y;
      return {
        x: i,
        y: h
      };
    }, o.prototype.getParent = function() {
      return this.resizable && this.resizable.parentNode;
    }, o.prototype.getParentSize = function() {
      return this.resizable.getParentSize();
    }, o.prototype.getMaxSizesFromProps = function() {
      var c = typeof this.props.maxWidth > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxWidth, i = typeof this.props.maxHeight > "u" ? Number.MAX_SAFE_INTEGER : this.props.maxHeight;
      return {
        maxWidth: c,
        maxHeight: i
      };
    }, o.prototype.getSelfElement = function() {
      return this.resizable && this.resizable.resizable;
    }, o.prototype.getOffsetHeight = function(c) {
      var i = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerHeight / i;
        case "body":
          return document.body.offsetHeight / i;
        default:
          return c.offsetHeight;
      }
    }, o.prototype.getOffsetWidth = function(c) {
      var i = this.props.scale;
      switch (this.props.bounds) {
        case "window":
          return window.innerWidth / i;
        case "body":
          return document.body.offsetWidth / i;
        default:
          return c.offsetWidth;
      }
    }, o.prototype.onDragStart = function(c, i) {
      this.props.onDragStart && this.props.onDragStart(c, i);
      var h = this.getDraggablePosition();
      if (this.originalPosition = h, !!this.props.bounds) {
        var d = this.getParent(), m = this.props.scale, v;
        if (this.props.bounds === "parent") v = d;
        else if (this.props.bounds === "body") {
          var g = d.getBoundingClientRect(), p = g.left, T = g.top, E = document.body.getBoundingClientRect(), U = -(p - d.offsetLeft * m - E.left) / m, B = -(T - d.offsetTop * m - E.top) / m, q = (document.body.offsetWidth - this.resizable.size.width * m) / m + U, Q = (document.body.offsetHeight - this.resizable.size.height * m) / m + B;
          return this.setState({
            bounds: {
              top: B,
              right: q,
              bottom: Q,
              left: U
            }
          });
        } else if (this.props.bounds === "window") {
          if (!this.resizable) return;
          var H = d.getBoundingClientRect(), O = H.left, R = H.top, x = -(O - d.offsetLeft * m) / m, Z = -(R - d.offsetTop * m) / m, q = (window.innerWidth - this.resizable.size.width * m) / m + x, Q = (window.innerHeight - this.resizable.size.height * m) / m + Z;
          return this.setState({
            bounds: {
              top: Z,
              right: q,
              bottom: Q,
              left: x
            }
          });
        } else typeof this.props.bounds == "string" ? v = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (v = this.props.bounds);
        if (!(!(v instanceof HTMLElement) || !(d instanceof HTMLElement))) {
          var V = v.getBoundingClientRect(), F = V.left, b = V.top, w = d.getBoundingClientRect(), K = w.left, et = w.top, rt = (F - K) / m, at = b - et;
          if (this.resizable) {
            this.updateOffsetFromParent();
            var zt = this.offsetFromParent;
            this.setState({
              bounds: {
                top: at - zt.top,
                right: rt + (v.offsetWidth - this.resizable.size.width) - zt.left / m,
                bottom: at + (v.offsetHeight - this.resizable.size.height) - zt.top,
                left: rt - zt.left / m
              }
            });
          }
        }
      }
    }, o.prototype.onDrag = function(c, i) {
      if (this.props.onDrag) {
        var h = this.offsetFromParent, d = h.left, m = h.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both") return this.props.onDrag(c, Kt(Kt({}, i), {
          x: i.x + d,
          y: i.y + m
        }));
        if (this.props.dragAxis === "x") return this.props.onDrag(c, Kt(Kt({}, i), {
          x: i.x + d,
          y: this.originalPosition.y + m,
          deltaY: 0
        }));
        if (this.props.dragAxis === "y") return this.props.onDrag(c, Kt(Kt({}, i), {
          x: this.originalPosition.x + d,
          y: i.y + m,
          deltaX: 0
        }));
      }
    }, o.prototype.onDragStop = function(c, i) {
      if (this.props.onDragStop) {
        var h = this.offsetFromParent, d = h.left, m = h.top;
        if (!this.props.dragAxis || this.props.dragAxis === "both") return this.props.onDragStop(c, Kt(Kt({}, i), {
          x: i.x + d,
          y: i.y + m
        }));
        if (this.props.dragAxis === "x") return this.props.onDragStop(c, Kt(Kt({}, i), {
          x: i.x + d,
          y: this.originalPosition.y + m,
          deltaY: 0
        }));
        if (this.props.dragAxis === "y") return this.props.onDragStop(c, Kt(Kt({}, i), {
          x: this.originalPosition.x + d,
          y: i.y + m,
          deltaX: 0
        }));
      }
    }, o.prototype.onResizeStart = function(c, i, h) {
      c.stopPropagation(), this.setState({
        resizing: true
      });
      var d = this.props.scale, m = this.offsetFromParent, v = this.getDraggablePosition();
      if (this.resizingPosition = {
        x: v.x + m.left,
        y: v.y + m.top
      }, this.originalPosition = v, this.props.bounds) {
        var g = this.getParent(), p = void 0;
        this.props.bounds === "parent" ? p = g : this.props.bounds === "body" ? p = document.body : this.props.bounds === "window" ? p = window : typeof this.props.bounds == "string" ? p = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (p = this.props.bounds);
        var T = this.getSelfElement();
        if (T instanceof Element && (p instanceof HTMLElement || p === window) && g instanceof HTMLElement) {
          var E = this.getMaxSizesFromProps(), U = E.maxWidth, B = E.maxHeight, q = this.getParentSize();
          if (U && typeof U == "string") if (U.endsWith("%")) {
            var Q = Number(U.replace("%", "")) / 100;
            U = q.width * Q;
          } else U.endsWith("px") && (U = Number(U.replace("px", "")));
          if (B && typeof B == "string") if (B.endsWith("%")) {
            var Q = Number(B.replace("%", "")) / 100;
            B = q.height * Q;
          } else B.endsWith("px") && (B = Number(B.replace("px", "")));
          var H = T.getBoundingClientRect(), O = H.left, R = H.top, x = this.props.bounds === "window" ? {
            left: 0,
            top: 0
          } : p.getBoundingClientRect(), Z = x.left, V = x.top, F = this.getOffsetWidth(p), b = this.getOffsetHeight(p), w = i.toLowerCase().endsWith("left"), K = i.toLowerCase().endsWith("right"), et = i.startsWith("top"), rt = i.startsWith("bottom");
          if ((w || et) && this.resizable) {
            var at = (O - Z) / d + this.resizable.size.width;
            this.setState({
              maxWidth: at > Number(U) ? U : at
            });
          }
          if (K || this.props.lockAspectRatio && !w && !et) {
            var at = F + (Z - O) / d;
            this.setState({
              maxWidth: at > Number(U) ? U : at
            });
          }
          if ((et || w) && this.resizable) {
            var at = (R - V) / d + this.resizable.size.height;
            this.setState({
              maxHeight: at > Number(B) ? B : at
            });
          }
          if (rt || this.props.lockAspectRatio && !et && !w) {
            var at = b + (V - R) / d;
            this.setState({
              maxHeight: at > Number(B) ? B : at
            });
          }
        }
      } else this.setState({
        maxWidth: this.props.maxWidth,
        maxHeight: this.props.maxHeight
      });
      this.props.onResizeStart && this.props.onResizeStart(c, i, h);
    }, o.prototype.onResize = function(c, i, h, d) {
      var m = this, v = {
        x: this.originalPosition.x,
        y: this.originalPosition.y
      }, g = -d.width, p = -d.height, T = [
        "top",
        "left",
        "topLeft",
        "bottomLeft",
        "topRight"
      ];
      T.includes(i) && (i === "bottomLeft" ? v.x += g : (i === "topRight" || (v.x += g), v.y += p));
      var E = this.draggable.state;
      (v.x !== E.x || v.y !== E.y) && ap.flushSync(function() {
        m.draggable.setState(v);
      }), this.updateOffsetFromParent();
      var U = this.offsetFromParent, B = this.getDraggablePosition().x + U.left, q = this.getDraggablePosition().y + U.top;
      this.resizingPosition = {
        x: B,
        y: q
      }, this.props.onResize && this.props.onResize(c, i, h, d, {
        x: B,
        y: q
      });
    }, o.prototype.onResizeStop = function(c, i, h, d) {
      this.setState({
        resizing: false
      });
      var m = this.getMaxSizesFromProps(), v = m.maxWidth, g = m.maxHeight;
      this.setState({
        maxWidth: v,
        maxHeight: g
      }), this.props.onResizeStop && this.props.onResizeStop(c, i, h, d, this.resizingPosition);
    }, o.prototype.updateSize = function(c) {
      this.resizable && this.resizable.updateSize({
        width: c.width,
        height: c.height
      });
    }, o.prototype.updatePosition = function(c) {
      this.draggable.setState(c);
    }, o.prototype.updateOffsetFromParent = function() {
      var c = this.props.scale, i = this.getParent(), h = this.getSelfElement();
      if (!i || h === null) return {
        top: 0,
        left: 0
      };
      var d = i.getBoundingClientRect(), m = d.left, v = d.top, g = h.getBoundingClientRect(), p = this.getDraggablePosition(), T = i.scrollLeft, E = i.scrollTop;
      this.offsetFromParent = {
        left: g.left - m + T - p.x * c,
        top: g.top - v + E - p.y * c
      };
    }, o.prototype.render = function() {
      var c = this, i = this.props, h = i.disableDragging, d = i.style, m = i.dragHandleClassName, v = i.position, g = i.onMouseDown, p = i.onMouseUp, T = i.dragAxis, E = i.dragGrid, U = i.bounds, B = i.enableUserSelectHack, q = i.cancel, Q = i.children;
      i.onResizeStart, i.onResize, i.onResizeStop, i.onDragStart, i.onDrag, i.onDragStop;
      var H = i.resizeHandleStyles, O = i.resizeHandleClasses, R = i.resizeHandleComponent, x = i.enableResizing, Z = i.resizeGrid, V = i.resizeHandleWrapperClass, F = i.resizeHandleWrapperStyle, b = i.scale, w = i.allowAnyClick, K = i.dragPositionOffset, et = Ty(i, [
        "disableDragging",
        "style",
        "dragHandleClassName",
        "position",
        "onMouseDown",
        "onMouseUp",
        "dragAxis",
        "dragGrid",
        "bounds",
        "enableUserSelectHack",
        "cancel",
        "children",
        "onResizeStart",
        "onResize",
        "onResizeStop",
        "onDragStart",
        "onDrag",
        "onDragStop",
        "resizeHandleStyles",
        "resizeHandleClasses",
        "resizeHandleComponent",
        "enableResizing",
        "resizeGrid",
        "resizeHandleWrapperClass",
        "resizeHandleWrapperStyle",
        "scale",
        "allowAnyClick",
        "dragPositionOffset"
      ]), rt = this.props.default ? Kt({}, this.props.default) : void 0;
      delete et.default;
      var at = h || m ? {
        cursor: "auto"
      } : {
        cursor: "move"
      }, zt = Kt(Kt(Kt({}, Dy), at), d), Ht = this.offsetFromParent, Lt = Ht.left, N = Ht.top, J;
      v && (J = {
        x: v.x - Lt,
        y: v.y - N
      });
      var I = this.state.resizing ? void 0 : J, mt = this.state.resizing ? "both" : T;
      return X.createElement(hy, {
        ref: function(ct) {
          ct && (c.draggable = ct);
        },
        handle: m ? ".".concat(m) : void 0,
        defaultPosition: rt,
        onMouseDown: g,
        onMouseUp: p,
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop,
        axis: mt,
        disabled: h,
        grid: E,
        bounds: U ? this.state.bounds : void 0,
        position: I,
        enableUserSelectHack: B,
        cancel: q,
        scale: b,
        allowAnyClick: w,
        nodeRef: this.resizableElement,
        positionOffset: K
      }, X.createElement(zy, Kt({}, et, {
        ref: function(ct) {
          ct && (c.resizable = ct, c.resizableElement.current = ct.resizable);
        },
        defaultSize: rt,
        size: this.props.size,
        enable: typeof x == "boolean" ? Ry(x) : x,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        style: zt,
        minWidth: this.props.minWidth,
        minHeight: this.props.minHeight,
        maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth,
        maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight,
        grid: Z,
        handleWrapperClass: V,
        handleWrapperStyle: F,
        lockAspectRatio: this.props.lockAspectRatio,
        lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth,
        lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight,
        handleStyles: H,
        handleClasses: O,
        handleComponent: R,
        scale: this.props.scale
      }), Q));
    }, o.defaultProps = {
      maxWidth: Number.MAX_SAFE_INTEGER,
      maxHeight: Number.MAX_SAFE_INTEGER,
      scale: 1,
      onResizeStart: function() {
      },
      onResize: function() {
      },
      onResizeStop: function() {
      },
      onDragStart: function() {
      },
      onDrag: function() {
      },
      onDragStop: function() {
      }
    }, o;
  })(X.PureComponent);
})();
export {
  xy as H,
  ep as L,
  Ny as R,
  __tla,
  ap as a,
  My as b,
  ea as c,
  Oy as d,
  Mg as e,
  Ay as f,
  Gn as j,
  X as r,
  dg as u
};
