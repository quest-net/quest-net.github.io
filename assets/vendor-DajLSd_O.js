var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as Nt } from "./vendor-react-iE-YqHjG.js";
function Mo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function $a(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      var s = false;
      try {
        s = this instanceof r;
      } catch {
      }
      return s ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: true }), Object.keys(e).forEach(function(r) {
    var s = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, s.get ? s : { enumerable: true, get: function() {
      return e[r];
    } });
  }), n;
}
const pu = Symbol(), Oo = Symbol(), Vn = "a", qa = "f", ai = "p", Fa = "c", Na = "t", Do = "h", Jn = "w", Co = "o", Lo = "k";
let hu = (e, t) => new Proxy(e, t);
const Js = Object.getPrototypeOf, Zs = /* @__PURE__ */ new WeakMap(), ja = (e) => e && (Zs.has(e) ? Zs.get(e) : Js(e) === Object.prototype || Js(e) === Array.prototype), zr = (e) => typeof e == "object" && e !== null, gu = (e) => Object.values(Object.getOwnPropertyDescriptors(e)).some((t) => !t.configurable && !t.writable), yu = (e) => {
  if (Array.isArray(e)) return Array.from(e);
  const t = Object.getOwnPropertyDescriptors(e);
  return Object.values(t).forEach((n) => {
    n.configurable = true;
  }), Object.create(Js(e), t);
}, mu = (e, t) => {
  const n = { [qa]: t };
  let r = false;
  const s = (a, u) => {
    if (!r) {
      let f = n[Vn].get(e);
      if (f || (f = {}, n[Vn].set(e, f)), a === Jn) f[Jn] = true;
      else {
        let d = f[a];
        d || (d = /* @__PURE__ */ new Set(), f[a] = d), d.add(u);
      }
    }
  }, o = () => {
    r = true, n[Vn].delete(e);
  }, c = { get(a, u) {
    return u === Oo ? e : (s(Lo, u), za(Reflect.get(a, u), n[Vn], n[Fa], n[Na]));
  }, has(a, u) {
    return u === pu ? (o(), true) : (s(Do, u), Reflect.has(a, u));
  }, getOwnPropertyDescriptor(a, u) {
    return s(Co, u), Reflect.getOwnPropertyDescriptor(a, u);
  }, ownKeys(a) {
    return s(Jn), Reflect.ownKeys(a);
  } };
  return t && (c.set = c.deleteProperty = () => false), [c, n];
}, Bo = (e) => e[Oo] || e, za = (e, t, n, r) => {
  if (!ja(e)) return e;
  let s = r && r.get(e);
  if (!s) {
    const u = Bo(e);
    gu(u) ? s = [u, yu(u)] : s = [u], r == null ? void 0 : r.set(e, s);
  }
  const [o, c] = s;
  let a = n && n.get(o);
  return (!a || a[1][qa] !== !!c) && (a = mu(o, !!c), a[1][ai] = hu(c || o, a[0]), n && n.set(o, a)), a[1][Vn] = t, a[1][Fa] = n, a[1][Na] = r, a[1][ai];
}, vu = (e, t) => {
  const n = Reflect.ownKeys(e), r = Reflect.ownKeys(t);
  return n.length !== r.length || n.some((s, o) => s !== r[o]);
}, Wa = (e, t, n, r, s = Object.is) => {
  if (s(e, t)) return false;
  if (!zr(e) || !zr(t)) return true;
  const o = n.get(Bo(e));
  if (!o) return true;
  if (r) {
    if (r.get(e) === t) return false;
    r.set(e, t);
  }
  let c = null;
  for (const a of o[Do] || []) if (c = Reflect.has(e, a) !== Reflect.has(t, a), c) return c;
  if (o[Jn] === true) {
    if (c = vu(e, t), c) return c;
  } else for (const a of o[Co] || []) {
    const u = !!Reflect.getOwnPropertyDescriptor(e, a), f = !!Reflect.getOwnPropertyDescriptor(t, a);
    if (c = u !== f, c) return c;
  }
  for (const a of o[Lo] || []) if (c = Wa(e[a], t[a], n, r, s), c) return c;
  if (c === null) throw new Error("invalid used");
  return c;
}, wu = (e) => ja(e) && e[Oo] || null, ci = (e, t = true) => {
  Zs.set(e, t);
}, bu = (e, t, n) => {
  const r = [], s = /* @__PURE__ */ new WeakSet(), o = (c, a) => {
    var u, f, d;
    if (s.has(c)) return;
    zr(c) && s.add(c);
    const y = zr(c) && t.get(Bo(c));
    if (y) {
      if ((u = y[Do]) === null || u === void 0 || u.forEach((g) => {
        const v = `:has(${String(g)})`;
        r.push(a ? [...a, v] : [v]);
      }), y[Jn] === true) {
        const g = ":ownKeys";
        r.push(a ? [...a, g] : [g]);
      } else (f = y[Co]) === null || f === void 0 || f.forEach((g) => {
        const v = `:hasOwn(${String(g)})`;
        r.push(a ? [...a, v] : [v]);
      });
      (d = y[Lo]) === null || d === void 0 || d.forEach((g) => {
        "value" in (Object.getOwnPropertyDescriptor(c, g) || {}) && o(c[g], a ? [...a, g] : [g]);
      });
    } else a && r.push(a);
  };
  return o(e), r;
}, Wr = {}, Io = (e) => typeof e == "object" && e !== null, Su = (e) => Io(e) && !_o.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer) && !(e instanceof Promise), Ha = (e, t) => {
  const n = ui.get(e);
  if ((n == null ? void 0 : n[0]) === t) return n[1];
  const r = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
  return ci(r, true), ui.set(e, [t, r]), Reflect.ownKeys(e).forEach((s) => {
    if (Object.getOwnPropertyDescriptor(r, s)) return;
    const o = Reflect.get(e, s), { enumerable: c } = Reflect.getOwnPropertyDescriptor(e, s), a = { value: o, enumerable: c, configurable: true };
    if (_o.has(o)) ci(o, false);
    else if (rn.has(o)) {
      const [u, f] = rn.get(o);
      a.value = Ha(u, f());
    }
    Object.defineProperty(r, s, a);
  }), r;
}, Pu = (e, t, n, r) => ({ deleteProperty(s, o) {
  const c = Reflect.get(s, o);
  n(o);
  const a = Reflect.deleteProperty(s, o);
  return a && r(pn == null ? void 0 : pn("delete", o, c)), a;
}, set(s, o, c, a) {
  const u = !e() && Reflect.has(s, o), f = Reflect.get(s, o, a);
  if (u && (li(f, c) || Hr.has(c) && li(f, Hr.get(c)))) return true;
  n(o), Io(c) && (c = wu(c) || c);
  const d = !rn.has(c) && Ru(c) ? Tu(c) : c;
  return t(o, d), Reflect.set(s, o, d, a), r(pn == null ? void 0 : pn("set", o, c, f)), true;
} }), Au = (e, t, ...n) => [e, [t], ...n], rn = /* @__PURE__ */ new WeakMap(), _o = /* @__PURE__ */ new WeakSet(), ui = /* @__PURE__ */ new WeakMap(), bs = [1], Hr = /* @__PURE__ */ new WeakMap();
let li = Object.is, ku = (e, t) => new Proxy(e, t), Ru = Su, Eu = Ha, xu = Pu, pn;
function Tu(e = {}) {
  if (!Io(e)) throw new Error("object required");
  const t = Hr.get(e);
  if (t) return t;
  let n = bs[0];
  const r = /* @__PURE__ */ new Set(), s = (K, q = ++bs[0]) => {
    n !== q && (o = n = q, r.forEach((A) => A(K, q)));
  };
  let o = n;
  const c = (K = bs[0]) => (o !== K && (o = K, u.forEach(([q]) => {
    const A = q[1](K);
    A > n && (n = A);
  })), n), a = (K) => (q, A) => {
    let L;
    q && (L = [...q], L[1] = [K, ...L[1]]), s(L, A);
  }, u = /* @__PURE__ */ new Map(), f = (K, q) => {
    const A = !_o.has(q) && rn.get(q);
    if (A) {
      if ((Wr ? "production" : void 0) !== "production" && u.has(K)) throw new Error("prop listener already exists");
      if (r.size) {
        const L = A[2](a(K));
        u.set(K, [A, L]);
      } else u.set(K, [A]);
    }
  }, d = (K) => {
    var q;
    const A = u.get(K);
    A && (u.delete(K), (q = A[1]) == null || q.call(A));
  }, y = (K) => (r.add(K), r.size === 1 && u.forEach(([A, L], I) => {
    if ((Wr ? "production" : void 0) !== "production" && L) throw new Error("remove already exists");
    const O = A[2](a(I));
    u.set(I, [A, O]);
  }), () => {
    r.delete(K), r.size === 0 && u.forEach(([A, L], I) => {
      L && (L(), u.set(I, [A]));
    });
  });
  let g = true;
  const v = xu(() => g, f, d, s), b = ku(e, v);
  Hr.set(e, b);
  const N = [e, c, y];
  return rn.set(b, N), Reflect.ownKeys(e).forEach((K) => {
    const q = Object.getOwnPropertyDescriptor(e, K);
    "value" in q && q.writable && (b[K] = e[K]);
  }), g = false, b;
}
function Sh(e) {
  const t = rn.get(e);
  return t == null ? void 0 : t[1]();
}
function Mu(e, t, n) {
  const r = rn.get(e);
  (Wr ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  let s;
  const o = [], c = r[2];
  let a = false;
  const f = c((d) => {
    if (d && o.push(d), n) {
      t(o.splice(0));
      return;
    }
    s || (s = Promise.resolve().then(() => {
      s = void 0, a && t(o.splice(0));
    }));
  });
  return a = true, () => {
    a = false, f();
  };
}
function fi(e) {
  const t = rn.get(e);
  (Wr ? "production" : void 0) !== "production" && !t && console.warn("Please use proxy object");
  const [n, r] = t;
  return Eu(n, r());
}
function Ph(e = true) {
  e === true ? pn = Au : e === false ? pn = void 0 : pn = e;
}
const Ou = {}, Du = (e, t) => {
  const n = Nt.useRef(void 0);
  Nt.useEffect(() => {
    n.current = bu(e, t);
  }), Nt.useDebugValue(n.current);
}, Cu = Du, Lu = /* @__PURE__ */ new WeakMap();
function Ah(e, t) {
  const r = Nt.useMemo(() => e && /* @__PURE__ */ new WeakMap(), [e]), s = Nt.useRef(void 0);
  let o = true;
  const c = Nt.useSyncExternalStore(Nt.useCallback((u) => {
    const f = Mu(e, u, void 0);
    return u(), f;
  }, [e, void 0]), () => {
    const u = fi(e);
    try {
      if (!o && s.current && !Wa(s.current, u, r, /* @__PURE__ */ new WeakMap())) return s.current;
    } catch {
    }
    return u;
  }, () => fi(e));
  o = false, Nt.useLayoutEffect(() => {
    s.current = c;
  }), (Ou ? "production" : void 0) !== "production" && Cu(c, r);
  const a = Nt.useMemo(() => /* @__PURE__ */ new WeakMap(), []);
  return za(c, r, a, Lu);
}
function di() {
  return di = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, di.apply(null, arguments);
}
function nr(e) {
  "@babel/helpers - typeof";
  return nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nr(e);
}
function Bu(e, t) {
  if (nr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (nr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Iu(e) {
  var t = Bu(e, "string");
  return nr(t) == "symbol" ? t : t + "";
}
function kh(e, t, n) {
  return (t = Iu(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: true, configurable: true, writable: true }) : e[t] = n, e;
}
var Ss, pi;
function _u() {
  if (pi) return Ss;
  pi = 1;
  var e = Object.assign || function(s) {
    for (var o = 1; o < arguments.length; o++) {
      var c = arguments[o];
      for (var a in c) Object.prototype.hasOwnProperty.call(c, a) && (s[a] = c[a]);
    }
    return s;
  }, t = { "{": "\\{", "}": "\\}", "\\": "\\textbackslash{}", "#": "\\#", $: "\\$", "%": "\\%", "&": "\\&", "^": "\\textasciicircum{}", _: "\\_", "~": "\\textasciitilde{}" }, n = { "\u2013": "\\--", "\u2014": "\\---", " ": "~", "	": "\\qquad{}", "\r\n": "\\newline{}", "\n": "\\newline{}" }, r = function(o, c) {
    return e({}, o, c);
  };
  return Ss = function(s) {
    for (var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = o.preserveFormatting, a = c === void 0 ? false : c, u = o.escapeMapFn, f = u === void 0 ? r : u, d = String(s), y = "", g = f(e({}, t), a ? e({}, n) : {}), v = Object.keys(g), b = function() {
      var K = false;
      v.forEach(function(q, A) {
        K || d.length >= q.length && d.slice(0, q.length) === q && (y += g[v[A]], d = d.slice(q.length, d.length), K = true);
      }), K || (y += d.slice(0, 1), d = d.slice(1, d.length));
    }; d; ) b();
    return y;
  }, Ss;
}
var Uu = _u();
const Rh = Mo(Uu);
var Dr = { exports: {} }, $u = Dr.exports, hi;
function qu() {
  return hi || (hi = 1, (function(e) {
    (function(t, n, r) {
      function s(u) {
        var f = this, d = a();
        f.next = function() {
          var y = 2091639 * f.s0 + f.c * 23283064365386963e-26;
          return f.s0 = f.s1, f.s1 = f.s2, f.s2 = y - (f.c = y | 0);
        }, f.c = 1, f.s0 = d(" "), f.s1 = d(" "), f.s2 = d(" "), f.s0 -= d(u), f.s0 < 0 && (f.s0 += 1), f.s1 -= d(u), f.s1 < 0 && (f.s1 += 1), f.s2 -= d(u), f.s2 < 0 && (f.s2 += 1), d = null;
      }
      function o(u, f) {
        return f.c = u.c, f.s0 = u.s0, f.s1 = u.s1, f.s2 = u.s2, f;
      }
      function c(u, f) {
        var d = new s(u), y = f && f.state, g = d.next;
        return g.int32 = function() {
          return d.next() * 4294967296 | 0;
        }, g.double = function() {
          return g() + (g() * 2097152 | 0) * 11102230246251565e-32;
        }, g.quick = g, y && (typeof y == "object" && o(y, d), g.state = function() {
          return o(d, {});
        }), g;
      }
      function a() {
        var u = 4022871197, f = function(d) {
          d = String(d);
          for (var y = 0; y < d.length; y++) {
            u += d.charCodeAt(y);
            var g = 0.02519603282416938 * u;
            u = g >>> 0, g -= u, g *= u, u = g >>> 0, g -= u, u += g * 4294967296;
          }
          return (u >>> 0) * 23283064365386963e-26;
        };
        return f;
      }
      n && n.exports ? n.exports = c : this.alea = c;
    })($u, e);
  })(Dr)), Dr.exports;
}
var Cr = { exports: {} }, Fu = Cr.exports, gi;
function Nu() {
  return gi || (gi = 1, (function(e) {
    (function(t, n, r) {
      function s(a) {
        var u = this, f = "";
        u.x = 0, u.y = 0, u.z = 0, u.w = 0, u.next = function() {
          var y = u.x ^ u.x << 11;
          return u.x = u.y, u.y = u.z, u.z = u.w, u.w ^= u.w >>> 19 ^ y ^ y >>> 8;
        }, a === (a | 0) ? u.x = a : f += a;
        for (var d = 0; d < f.length + 64; d++) u.x ^= f.charCodeAt(d) | 0, u.next();
      }
      function o(a, u) {
        return u.x = a.x, u.y = a.y, u.z = a.z, u.w = a.w, u;
      }
      function c(a, u) {
        var f = new s(a), d = u && u.state, y = function() {
          return (f.next() >>> 0) / 4294967296;
        };
        return y.double = function() {
          do
            var g = f.next() >>> 11, v = (f.next() >>> 0) / 4294967296, b = (g + v) / (1 << 21);
          while (b === 0);
          return b;
        }, y.int32 = f.next, y.quick = y, d && (typeof d == "object" && o(d, f), y.state = function() {
          return o(f, {});
        }), y;
      }
      n && n.exports ? n.exports = c : this.xor128 = c;
    })(Fu, e);
  })(Cr)), Cr.exports;
}
var Lr = { exports: {} }, ju = Lr.exports, yi;
function zu() {
  return yi || (yi = 1, (function(e) {
    (function(t, n, r) {
      function s(a) {
        var u = this, f = "";
        u.next = function() {
          var y = u.x ^ u.x >>> 2;
          return u.x = u.y, u.y = u.z, u.z = u.w, u.w = u.v, (u.d = u.d + 362437 | 0) + (u.v = u.v ^ u.v << 4 ^ (y ^ y << 1)) | 0;
        }, u.x = 0, u.y = 0, u.z = 0, u.w = 0, u.v = 0, a === (a | 0) ? u.x = a : f += a;
        for (var d = 0; d < f.length + 64; d++) u.x ^= f.charCodeAt(d) | 0, d == f.length && (u.d = u.x << 10 ^ u.x >>> 4), u.next();
      }
      function o(a, u) {
        return u.x = a.x, u.y = a.y, u.z = a.z, u.w = a.w, u.v = a.v, u.d = a.d, u;
      }
      function c(a, u) {
        var f = new s(a), d = u && u.state, y = function() {
          return (f.next() >>> 0) / 4294967296;
        };
        return y.double = function() {
          do
            var g = f.next() >>> 11, v = (f.next() >>> 0) / 4294967296, b = (g + v) / (1 << 21);
          while (b === 0);
          return b;
        }, y.int32 = f.next, y.quick = y, d && (typeof d == "object" && o(d, f), y.state = function() {
          return o(f, {});
        }), y;
      }
      n && n.exports ? n.exports = c : this.xorwow = c;
    })(ju, e);
  })(Lr)), Lr.exports;
}
var Br = { exports: {} }, Wu = Br.exports, mi;
function Hu() {
  return mi || (mi = 1, (function(e) {
    (function(t, n, r) {
      function s(a) {
        var u = this;
        u.next = function() {
          var d = u.x, y = u.i, g, v;
          return g = d[y], g ^= g >>> 7, v = g ^ g << 24, g = d[y + 1 & 7], v ^= g ^ g >>> 10, g = d[y + 3 & 7], v ^= g ^ g >>> 3, g = d[y + 4 & 7], v ^= g ^ g << 7, g = d[y + 7 & 7], g = g ^ g << 13, v ^= g ^ g << 9, d[y] = v, u.i = y + 1 & 7, v;
        };
        function f(d, y) {
          var g, v = [];
          if (y === (y | 0)) v[0] = y;
          else for (y = "" + y, g = 0; g < y.length; ++g) v[g & 7] = v[g & 7] << 15 ^ y.charCodeAt(g) + v[g + 1 & 7] << 13;
          for (; v.length < 8; ) v.push(0);
          for (g = 0; g < 8 && v[g] === 0; ++g) ;
          for (g == 8 ? v[7] = -1 : v[g], d.x = v, d.i = 0, g = 256; g > 0; --g) d.next();
        }
        f(u, a);
      }
      function o(a, u) {
        return u.x = a.x.slice(), u.i = a.i, u;
      }
      function c(a, u) {
        a == null && (a = +/* @__PURE__ */ new Date());
        var f = new s(a), d = u && u.state, y = function() {
          return (f.next() >>> 0) / 4294967296;
        };
        return y.double = function() {
          do
            var g = f.next() >>> 11, v = (f.next() >>> 0) / 4294967296, b = (g + v) / (1 << 21);
          while (b === 0);
          return b;
        }, y.int32 = f.next, y.quick = y, d && (d.x && o(d, f), y.state = function() {
          return o(f, {});
        }), y;
      }
      n && n.exports ? n.exports = c : this.xorshift7 = c;
    })(Wu, e);
  })(Br)), Br.exports;
}
var Ir = { exports: {} }, Ku = Ir.exports, vi;
function Vu() {
  return vi || (vi = 1, (function(e) {
    (function(t, n, r) {
      function s(a) {
        var u = this;
        u.next = function() {
          var d = u.w, y = u.X, g = u.i, v, b;
          return u.w = d = d + 1640531527 | 0, b = y[g + 34 & 127], v = y[g = g + 1 & 127], b ^= b << 13, v ^= v << 17, b ^= b >>> 15, v ^= v >>> 12, b = y[g] = b ^ v, u.i = g, b + (d ^ d >>> 16) | 0;
        };
        function f(d, y) {
          var g, v, b, N, K, q = [], A = 128;
          for (y === (y | 0) ? (v = y, y = null) : (y = y + "\0", v = 0, A = Math.max(A, y.length)), b = 0, N = -32; N < A; ++N) y && (v ^= y.charCodeAt((N + 32) % y.length)), N === 0 && (K = v), v ^= v << 10, v ^= v >>> 15, v ^= v << 4, v ^= v >>> 13, N >= 0 && (K = K + 1640531527 | 0, g = q[N & 127] ^= v + K, b = g == 0 ? b + 1 : 0);
          for (b >= 128 && (q[(y && y.length || 0) & 127] = -1), b = 127, N = 512; N > 0; --N) v = q[b + 34 & 127], g = q[b = b + 1 & 127], v ^= v << 13, g ^= g << 17, v ^= v >>> 15, g ^= g >>> 12, q[b] = v ^ g;
          d.w = K, d.X = q, d.i = b;
        }
        f(u, a);
      }
      function o(a, u) {
        return u.i = a.i, u.w = a.w, u.X = a.X.slice(), u;
      }
      function c(a, u) {
        a == null && (a = +/* @__PURE__ */ new Date());
        var f = new s(a), d = u && u.state, y = function() {
          return (f.next() >>> 0) / 4294967296;
        };
        return y.double = function() {
          do
            var g = f.next() >>> 11, v = (f.next() >>> 0) / 4294967296, b = (g + v) / (1 << 21);
          while (b === 0);
          return b;
        }, y.int32 = f.next, y.quick = y, d && (d.X && o(d, f), y.state = function() {
          return o(f, {});
        }), y;
      }
      n && n.exports ? n.exports = c : this.xor4096 = c;
    })(Ku, e);
  })(Ir)), Ir.exports;
}
var _r = { exports: {} }, Gu = _r.exports, wi;
function Qu() {
  return wi || (wi = 1, (function(e) {
    (function(t, n, r) {
      function s(a) {
        var u = this, f = "";
        u.next = function() {
          var y = u.b, g = u.c, v = u.d, b = u.a;
          return y = y << 25 ^ y >>> 7 ^ g, g = g - v | 0, v = v << 24 ^ v >>> 8 ^ b, b = b - y | 0, u.b = y = y << 20 ^ y >>> 12 ^ g, u.c = g = g - v | 0, u.d = v << 16 ^ g >>> 16 ^ b, u.a = b - y | 0;
        }, u.a = 0, u.b = 0, u.c = -1640531527, u.d = 1367130551, a === Math.floor(a) ? (u.a = a / 4294967296 | 0, u.b = a | 0) : f += a;
        for (var d = 0; d < f.length + 20; d++) u.b ^= f.charCodeAt(d) | 0, u.next();
      }
      function o(a, u) {
        return u.a = a.a, u.b = a.b, u.c = a.c, u.d = a.d, u;
      }
      function c(a, u) {
        var f = new s(a), d = u && u.state, y = function() {
          return (f.next() >>> 0) / 4294967296;
        };
        return y.double = function() {
          do
            var g = f.next() >>> 11, v = (f.next() >>> 0) / 4294967296, b = (g + v) / (1 << 21);
          while (b === 0);
          return b;
        }, y.int32 = f.next, y.quick = y, d && (typeof d == "object" && o(d, f), y.state = function() {
          return o(f, {});
        }), y;
      }
      n && n.exports ? n.exports = c : this.tychei = c;
    })(Gu, e);
  })(_r)), _r.exports;
}
var Ur = { exports: {} };
const Xu = {}, Yu = Object.freeze(Object.defineProperty({ __proto__: null, default: Xu }, Symbol.toStringTag, { value: "Module" })), Ju = $a(Yu);
var Zu = Ur.exports, bi;
function el() {
  return bi || (bi = 1, (function(e) {
    (function(t, n, r) {
      var s = 256, o = 6, c = 52, a = "random", u = r.pow(s, o), f = r.pow(2, c), d = f * 2, y = s - 1, g;
      function v(I, O, J) {
        var Z = [];
        O = O == true ? { entropy: true } : O || {};
        var D = q(K(O.entropy ? [I, L(n)] : I ?? A(), 3), Z), j = new b(Z), ne = function() {
          for (var ae = j.g(o), we = u, R = 0; ae < f; ) ae = (ae + R) * s, we *= s, R = j.g(1);
          for (; ae >= d; ) ae /= 2, we /= 2, R >>>= 1;
          return (ae + R) / we;
        };
        return ne.int32 = function() {
          return j.g(4) | 0;
        }, ne.quick = function() {
          return j.g(4) / 4294967296;
        }, ne.double = ne, q(L(j.S), n), (O.pass || J || function(ae, we, R, F) {
          return F && (F.S && N(F, j), ae.state = function() {
            return N(j, {});
          }), R ? (r[a] = ae, we) : ae;
        })(ne, D, "global" in O ? O.global : this == r, O.state);
      }
      function b(I) {
        var O, J = I.length, Z = this, D = 0, j = Z.i = Z.j = 0, ne = Z.S = [];
        for (J || (I = [J++]); D < s; ) ne[D] = D++;
        for (D = 0; D < s; D++) ne[D] = ne[j = y & j + I[D % J] + (O = ne[D])], ne[j] = O;
        (Z.g = function(ae) {
          for (var we, R = 0, F = Z.i, ee = Z.j, P = Z.S; ae--; ) we = P[F = y & F + 1], R = R * s + P[y & (P[F] = P[ee = y & ee + we]) + (P[ee] = we)];
          return Z.i = F, Z.j = ee, R;
        })(s);
      }
      function N(I, O) {
        return O.i = I.i, O.j = I.j, O.S = I.S.slice(), O;
      }
      function K(I, O) {
        var J = [], Z = typeof I, D;
        if (O && Z == "object") for (D in I) try {
          J.push(K(I[D], O - 1));
        } catch {
        }
        return J.length ? J : Z == "string" ? I : I + "\0";
      }
      function q(I, O) {
        for (var J = I + "", Z, D = 0; D < J.length; ) O[y & D] = y & (Z ^= O[y & D] * 19) + J.charCodeAt(D++);
        return L(O);
      }
      function A() {
        try {
          var I;
          return g && (I = g.randomBytes) ? I = I(s) : (I = new Uint8Array(s), (t.crypto || t.msCrypto).getRandomValues(I)), L(I);
        } catch {
          var O = t.navigator, J = O && O.plugins;
          return [+/* @__PURE__ */ new Date(), t, J, t.screen, L(n)];
        }
      }
      function L(I) {
        return String.fromCharCode.apply(0, I);
      }
      if (q(r.random(), n), e.exports) {
        e.exports = v;
        try {
          g = Ju;
        } catch {
        }
      } else r["seed" + a] = v;
    })(typeof self < "u" ? self : Zu, [], Math);
  })(Ur)), Ur.exports;
}
var Ps, Si;
function tl() {
  if (Si) return Ps;
  Si = 1;
  var e = qu(), t = Nu(), n = zu(), r = Hu(), s = Vu(), o = Qu(), c = el();
  return c.alea = e, c.xor128 = t, c.xorwow = n, c.xorshift7 = r, c.xor4096 = s, c.tychei = o, Ps = c, Ps;
}
var nl = tl();
const Eh = Mo(nl);
var As, Pi;
function rl() {
  return Pi || (Pi = 1, As = function e(t, n) {
    var r = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi, s = /(^[ ]*|[ ]*$)/g, o = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/, c = /^0x[0-9a-f]+$/i, a = /^0/, u = function(L) {
      return e.insensitive && ("" + L).toLowerCase() || "" + L;
    }, f = u(t).replace(s, "") || "", d = u(n).replace(s, "") || "", y = f.replace(r, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), g = d.replace(r, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), v = parseInt(f.match(c), 16) || y.length !== 1 && f.match(o) && Date.parse(f), b = parseInt(d.match(c), 16) || v && d.match(o) && Date.parse(d) || null, N, K;
    if (b) {
      if (v < b) return -1;
      if (v > b) return 1;
    }
    for (var q = 0, A = Math.max(y.length, g.length); q < A; q++) {
      if (N = !(y[q] || "").match(a) && parseFloat(y[q]) || y[q] || 0, K = !(g[q] || "").match(a) && parseFloat(g[q]) || g[q] || 0, isNaN(N) !== isNaN(K)) return isNaN(N) ? 1 : -1;
      if (typeof N != typeof K && (N += "", K += ""), N < K) return -1;
      if (N > K) return 1;
    }
    return 0;
  }), As;
}
var sl = rl();
const xh = Mo(sl), Ka = new TextEncoder(), ol = new TextDecoder(), wn = "Trystero", bn = "trystero", _t = (e, t) => `${bn}:${e}:v${t}`, Kr = Symbol.for(`${bn}.socketInitialFailure`), il = Symbol.for(`${bn}.slot`), me = (e) => new Error(`${wn}: ${e}`), Ge = (e) => {
  throw me(e);
}, ut = JSON.stringify, sn = (e) => {
  try {
    return JSON.parse(e);
  } catch {
    throw me(`failed to parse JSON (${e.length} bytes)`);
  }
}, vt = (e) => Ka.encode(e), al = (e, t) => Ka.encodeInto(e, t), Va = (e) => {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    r < 128 ? t += 1 : r < 2048 ? t += 2 : r >= 55296 && r <= 56319 && n + 1 < e.length && (e.charCodeAt(n + 1) & 64512) === 56320 ? (t += 4, n++) : t += 3;
  }
  return t;
}, On = (e) => ol.decode(e), cl = { alphabet: "base64url", omitPadding: true }, ul = { alphabet: "base64url" }, Ai = Uint8Array.prototype.toBase64, ki = Uint8Array.fromBase64, Ut = typeof Ai == "function" ? (e) => Ai.call(e, cl) : (e) => {
  let t = "";
  for (let n = 0; n < e.byteLength; n++) t += String.fromCharCode(e[n]);
  return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}, Dn = typeof ki == "function" ? (e) => ki(e, ul) : (e) => {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), n = atob(t + "=".repeat((4 - t.length % 4) % 4)), r = new Uint8Array(n.length);
  for (let s = 0; s < n.length; s++) r[s] = n.charCodeAt(s);
  return r;
}, Ga = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", ll = /^[A-Za-z0-9_-]+$/, Vr = (e) => {
  let t = 0n;
  for (const n of e) t = t << 8n | BigInt(n);
  return t;
}, eo = (e, t) => {
  if (e.byteLength !== t.byteLength) return false;
  for (let n = 0; n < e.byteLength; n++) if (e[n] !== t[n]) return false;
  return true;
}, fl = (e) => {
  const t = vt(e);
  let n = 2166136261;
  for (let r = 0; r < t.byteLength; r++) n = Math.imul(n ^ t[r], 16777619);
  return n ^= n >>> 16, n = Math.imul(n, 2246822507), n ^= n >>> 13, n = Math.imul(n, 3266489909), (n ^ n >>> 16) >>> 0;
}, Mt = (e = 4096) => {
  const t = /* @__PURE__ */ new Map();
  return { get size() {
    return t.size;
  }, get: (n) => {
    if (!t.has(n)) return;
    const r = t.get(n);
    return t.delete(n), t.set(n, r), r;
  }, has: (n) => t.has(n), set: (n, r) => {
    if (t.has(n)) t.delete(n);
    else if (t.size >= e) {
      const s = t.keys().next().value;
      s !== void 0 && t.delete(s);
    }
    t.set(n, r);
  }, delete: (n) => t.delete(n), clear: () => t.clear(), keys: () => [...t.keys()], entries: () => [...t.entries()] };
}, Qa = () => {
}, Ri = (e, t) => console.error(`${wn} ${e} error:`, t), Zt = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  let r = 0;
  const s = (o, c) => {
    try {
      const a = o(...c);
      a && typeof a.then == "function" && Promise.resolve(a).catch((u) => Ri(e, u));
    } catch (a) {
      Ri(e, a);
    }
  };
  return [(o, c, a) => {
    if (typeof o != "function") throw me(`${e.endsWith("handler") ? e : `${e} handler`} must be a function`);
    const u = c == null ? void 0 : c.signal;
    if (u == null ? void 0 : u.aborted) return Qa;
    const f = !!(c == null ? void 0 : c.once), d = u ? new AbortController() : null;
    let y;
    const g = () => {
      switch (y.phase) {
        case "closed":
          return;
        case "replaying": {
          const N = y.abortCleanup;
          y = { phase: "closed" }, N == null ? void 0 : N.abort();
          return;
        }
        case "live": {
          const { entry: N, abortCleanup: K } = y;
          y = { phase: "closed" }, K == null ? void 0 : K.abort(), n.delete(N) && n.size === 0 && (t == null ? void 0 : t(false));
          return;
        }
        default:
          Ge(y);
      }
    }, v = [(...N) => {
      y.phase === "live" && (f && g(), s(o, N));
    }, g], b = () => {
      switch (y.phase) {
        case "replaying": {
          if (y.epoch !== r) {
            g();
            return;
          }
          const N = n.size === 0;
          y = { phase: "live", entry: v, abortCleanup: y.abortCleanup }, n.add(v), N && (t == null ? void 0 : t(true));
          return;
        }
        case "live":
        case "closed":
          return;
        default:
          Ge(y);
      }
    };
    if (y = { phase: "replaying", epoch: r, abortCleanup: d }, d && u && u.addEventListener("abort", g, { once: true, signal: d.signal }), (c == null ? void 0 : c.replay) && a) {
      const N = () => y;
      for (const K of a()) {
        const q = N();
        if (q.phase !== "replaying" || q.epoch !== r) {
          g();
          break;
        }
        f && g(), s(o, K);
      }
    }
    return b(), g;
  }, (...o) => {
    for (const c of Array.from(n)) c[0](...o);
  }, () => {
    r++;
    for (const o of Array.from(n)) o[1]();
  }, () => n.size > 0];
}, ks = (e, t) => {
  let n = null;
  return [(r, s) => {
    if (typeof r != "function") throw me(`${e} handler must be a function`);
    const o = s == null ? void 0 : s.signal;
    if (o == null ? void 0 : o.aborted) return Qa;
    if (n) throw me(`${e} handler already registered; unsubscribe first`);
    const c = !!(s == null ? void 0 : s.once), a = o ? new AbortController() : null;
    let u = true;
    const f = () => {
      u && (u = false, a == null ? void 0 : a.abort(), (n == null ? void 0 : n[1]) === f && (n = null, t == null ? void 0 : t(null)));
    }, d = ((...y) => {
      if (u) return c && f(), r(...y);
    });
    return n = [d, f], a && o && o.addEventListener("abort", f, { once: true, signal: a.signal }), t == null ? void 0 : t(d), f;
  }, () => (n == null ? void 0 : n[0]) ?? null, () => n == null ? void 0 : n[1]()];
}, Tn = (e, t) => {
  for (const n of t) {
    const r = e[n];
    Object.defineProperty(e, n, { get: () => r, set: () => {
      throw new TypeError(`${wn}: ${n} is a method; call ${n}(handler), which returns an unsubscribe function`);
    }, enumerable: true, configurable: true });
  }
  return e;
}, to = `__${bn}Auth`, tn = (e, t) => e < t ? -1 : e > t ? 1 : 0, on = (e) => console.warn(`${wn}: ${e}`), dl = (e) => on(`no peer with id ${e} found`), pl = () => on("roles({selfAsAdmin: true}) with an ephemeral identity orphans the room on close; use identity: 'local' or an imported UserIdentity"), en = (e, t) => console.error(`${wn} ${e} error:`, t), hl = (e) => en("action handler", e), Cn = "peer disconnected", $r = me(Cn), hn = "peer banned", Ot = me(hn), gl = (e, t) => ({ code: "banned", message: e ? `${hn}: ${e}` : hn, ...e !== void 0 ? { reason: e } : {}, ...t ? { peerId: t } : {} }), yl = me("peer left room"), Ei = me("room left"), Gn = "room full", Nn = me(Gn), no = "operation aborted", dn = "insufficient authority", Xa = me("invalid ECDSA P-256 public key"), Gr = (e) => me(`${e} must be a positive safe integer`), Uo = (e) => me(`${e} requires roles() in joinRoom config`), ml = Uo("self-certifying room ID"), Ya = (e) => me(`action type "${e}" cannot be redefined`), Yt = (e) => `invalid action ${e}`, ro = (e) => `no active peer with id ${e}`, xi = (e) => me(`${e} is required`), { floor: vl } = Math, Ja = (e, t) => Array(e).fill(void 0).map(t), wl = 248, cs = (e) => {
  if (e <= 0) return "";
  const t = new Uint8Array(Math.ceil(e * 1.15) + 4);
  let n = "";
  for (; n.length < e; ) {
    crypto.getRandomValues(t);
    for (let r = 0; r < t.byteLength && n.length < e; r++) {
      const s = t[r];
      s < wl && (n += Ga[s % 62]);
    }
  }
  return n;
}, wt = Promise.all.bind(Promise), bl = typeof window < "u", $o = Object.entries, Za = Object.fromEntries, ec = Object.keys, Sl = Object.values, Pe = () => {
}, tc = "candidate", tt = (e) => (e != null && clearTimeout(e), null), ht = (e) => {
  var _a2;
  (_a2 = e == null ? void 0 : e.unref) == null ? void 0 : _a2.call(e);
}, Et = (e, t) => e instanceof Error && e.message ? e.message : typeof e == "string" && e ? e : ut(e ?? t), It = (e, t) => e instanceof Error ? e : me(Et(e, t)), so = (...e) => ut(e), Pl = (e, t) => {
  const n = [...e];
  let r = (Math.trunc(t) || 1) >>> 0;
  const s = () => {
    r = r + 1831565813 >>> 0;
    let c = Math.imul(r ^ r >>> 15, 1 | r);
    return c = c + Math.imul(c ^ c >>> 7, 61 | c) ^ c, ((c ^ c >>> 14) >>> 0) / 4294967296;
  };
  let o = n.length;
  for (; o; ) {
    const c = vl(s() * o--), a = n[o];
    n[o] = n[c], n[c] = a;
  }
  return n;
}, Al = (e, t = Number.MAX_SAFE_INTEGER) => fl(e) % t, kl = /* @__PURE__ */ new WeakSet(), Rl = (e) => (kl.add(e), e), nc = (e) => Rl(me(e)), El = new RegExp("^[0-9A-Za-z]{22}$"), qo = new RegExp("^(.+)~([0-9A-Za-z]{22})$"), xl = (e) => {
  const t = qo.exec(e);
  return (t == null ? void 0 : t[1]) && t[2] ? [t[1], t[2]] : [e, null];
}, Tl = (e, t) => `${xl(e)[0]}~${t}`, Ml = (e) => {
  if (typeof Blob < "u" && e instanceof Blob) return [2, e];
  if (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) return [2, e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)];
  const t = typeof e == "string";
  return [t ? 0 : 1, vt(t ? e : ut(e))];
}, oo = (e, t) => e.some(({ urls: n }) => [n].flat().some((r) => t.test(r))), St = (e) => !!(e && typeof e == "object" && !Array.isArray(e)), Pt = (e) => typeof e == "string" && e.length > 0, mn = (e) => typeof e == "number" && Number.isSafeInteger(e) && e > 0, rc = (e) => typeof e == "string" && e.length >= 64 && e.length <= 128, sc = (e) => St(e) && e.v === 1 && Pt(e.certId) && Pt(e.issuerPubKey) && Pt(e.subUserId) && Pt(e.appId) && Pt(e.roomId) && Array.isArray(e.roles) && e.roles.length > 0 && e.roles.every(Pt) && mn(e.seq) && mn(e.iat) && rc(e.sig), io = (e, t, n = 3e4) => {
  const r = Mt(e);
  return [(s) => {
    const o = Date.now();
    let c = r.get(s);
    return (!c || o - c[1] > n) && (c = [0, o], r.set(s, c)), ++c[0] >= t;
  }, (s) => {
    r.delete(s);
  }, (s) => {
    const o = r.get(s);
    return !!(o && Date.now() - o[1] <= n && o[0] >= t);
  }];
}, Ol = 2, Dl = 1500, Cl = 15e3, Ll = 32, Bl = 1e4, Ti = (e) => e === void 0 || typeof e == "string" && e.length <= 512, Il = (e, t) => {
  let n = (2166136261 ^ t) >>> 0;
  for (let r = 0; r < e.length; r++) n ^= e.charCodeAt(r), n = Math.imul(n, 16777619) >>> 0;
  return n;
}, _l = (e) => e.phase === "in-flight" || e.phase === "completed", Ul = ({ fanout: e = Ol, pullTimeoutMs: t = Dl, periodicIntervalMs: n = Cl, maxPages: r = Ll, canSync: s = () => true, getDirectPeers: o, isPeerSendable: c, sendPull: a }) => {
  const u = crypto.getRandomValues(new Uint32Array(1))[0], f = /* @__PURE__ */ new Map();
  let d = "active", y = 0;
  const g = () => {
    let R = 0;
    for (const F of f.values()) F.phase === "completed" && R++;
    return R;
  }, v = () => {
    let R = 0;
    for (const F of f.values()) _l(F) && R++;
    return R;
  }, b = () => {
    for (const R of f.values()) if (R.phase === "in-flight") return true;
    return false;
  }, N = (R) => {
    const F = f.get(R);
    if (F) switch (F.phase) {
      case "in-flight":
        tt(F.timer), f.delete(R);
        return;
      case "completed":
      case "cooldown":
        f.delete(R);
        return;
      default:
        Ge(F);
    }
  }, K = (R, F) => {
    const ee = f.get(R);
    return (ee == null ? void 0 : ee.phase) !== "cooldown" ? false : F >= ee.until ? (f.delete(R), false) : true;
  }, q = (R = true) => {
    const F = Date.now();
    return o().filter((ee) => c(ee) && (!R || !K(ee, F))).map((ee) => [ee, Il(ee, u)]).sort((ee, P) => ee[1] - P[1] || tn(ee[0], P[0])).map(([ee]) => ee);
  }, A = (R, F) => {
    const ee = f.get(R);
    d === "closed" || (ee == null ? void 0 : ee.phase) !== "in-flight" || ee.pullId !== F || (tt(ee.timer), c(R) ? f.set(R, { phase: "cooldown", until: Date.now() + Bl }) : f.delete(R), g() < e && O());
  }, L = (R, F) => {
    const ee = setTimeout(() => A(R, F), t);
    return ht(ee), ee;
  }, I = (R, F, ee = 0, P = false) => {
    if (d === "closed" || !s() || ee >= r || !c(R)) return N(R), false;
    const H = f.get(R);
    (H == null ? void 0 : H.phase) === "in-flight" && tt(H.timer);
    const X = Symbol(), z = L(R, X);
    return f.set(R, { phase: "in-flight", pullId: X, timer: z, pages: ee + 1, staleDigest: P }), Promise.resolve().then(() => a(R, F)).catch(() => A(R, X)), true;
  }, O = () => {
    if (d === "closed" || !s()) return;
    let R = v();
    for (const F of q()) {
      if (R >= e) break;
      !f.has(F) && I(F) && R++;
    }
  }, J = (R, F = false) => {
    if (d === "closed" || !s()) return;
    const ee = f.get(R);
    if (!ee) {
      I(R);
      return;
    }
    switch (ee.phase) {
      case "in-flight":
        F && !ee.staleDigest && f.set(R, { ...ee, staleDigest: true });
        return;
      case "completed":
        F && I(R);
        return;
      case "cooldown":
        I(R);
        return;
      default:
        Ge(ee);
    }
  }, Z = (R, F) => {
    const ee = f.get(R);
    if (!(d === "closed" || (ee == null ? void 0 : ee.phase) !== "in-flight")) {
      if (F && ee.pages < r) {
        I(R, F, ee.pages, ee.staleDigest);
        return;
      }
      if (tt(ee.timer), ee.staleDigest) {
        f.delete(R), I(R);
        return;
      }
      f.set(R, { phase: "completed" });
    }
  }, D = (R, F = false) => {
    if (d === "closed") return;
    const ee = f.get(R);
    (ee == null ? void 0 : ee.phase) === "in-flight" ? ee.staleDigest || f.set(R, { ...ee, staleDigest: true }) : f.delete(R), F && J(R, true), O();
  }, j = (R) => {
    N(R), d !== "closed" && g() < e && O();
  }, ne = () => {
    d !== "active" || o().length === 0 || (d = "repull-queued", queueMicrotask(() => {
      if (d === "repull-queued" && (d = "active", !!s())) {
        for (const [R, F] of f) switch (F.phase) {
          case "completed":
            f.delete(R);
            break;
          case "in-flight":
            F.staleDigest || f.set(R, { ...F, staleDigest: true });
            break;
          case "cooldown":
            break;
          default:
            Ge(F);
        }
        O();
      }
    }));
  }, ae = n > 0 ? setInterval(() => {
    if (d === "closed" || !s() || b()) return;
    let R = q();
    if (R.length === 0 && (R = q(false)), R.length === 0) return;
    const F = R[y++ % R.length];
    I(F);
  }, n) : void 0;
  return ht(ae), { pullPeer: J, onSyncPage: Z, onPeerJoined: D, onPeerDisconnected: j, scheduleRepull: ne, isPullInFlight: (R) => {
    var _a2;
    return ((_a2 = f.get(R)) == null ? void 0 : _a2.phase) === "in-flight";
  }, destroy: () => {
    d = "closed", ae !== void 0 && clearInterval(ae);
    for (const R of f.values()) R.phase === "in-flight" && tt(R.timer);
    f.clear();
  } };
}, oc = { name: "ECDSA", namedCurve: "P-256" }, ic = { name: "ECDSA", hash: "SHA-256" }, Qr = "AES-GCM", Zn = 12, $l = "HMAC", ql = 6e5, Mi = new Uint8Array(32), Fl = vt(_t("room-aes", 3)), Nl = vt(_t("room-hmac", 3)), Oi = Mt(4096), Rs = Mt(64), Fo = 115792089210356248762697446949407573529996955224135760342422259061068512044369n, ac = Fo >> 1n, us = (e) => {
  if (e.byteLength !== 64) return e;
  const t = Vr(e.subarray(32, 64));
  if (t <= ac) return e;
  const n = e.slice();
  let r = Fo - t;
  for (let s = 63; s >= 32; s--) n[s] = Number(r & 255n), r >>= 8n;
  return n;
}, Di = (e) => {
  if (e.byteLength !== 64) return false;
  const t = Vr(e.subarray(0, 32)), n = Vr(e.subarray(32, 64));
  return t > 0n && t < Fo && n > 0n && n <= ac;
}, rr = async (e) => new Uint8Array(await crypto.subtle.digest("SHA-256", typeof e == "string" ? vt(e) : e)), ls = async (e, t) => us(new Uint8Array(await crypto.subtle.sign(ic, e, t))), ao = (e, t, n) => crypto.subtle.verify(ic, e, t, n), co = async (e) => {
  const t = Oi.get(e);
  if (t !== void 0) return t;
  const n = Ut(await rr(e));
  return Oi.set(e, n), n;
}, jl = (e, t, n) => {
  const r = ut([e, t, n]), s = Rs.get(r);
  if (s) return s;
  const o = (async () => {
    const [c, a] = await Promise.all([crypto.subtle.importKey("raw", vt(e), "PBKDF2", false, ["deriveBits"]), rr(ut([_t("pbkdf2-master", 3), t, n]))]), u = new Uint8Array(await crypto.subtle.deriveBits({ name: "PBKDF2", salt: a, iterations: ql, hash: "SHA-256" }, c, 256));
    try {
      const f = await crypto.subtle.importKey("raw", u, "HKDF", false, ["deriveKey"]), [d, y] = await Promise.all([crypto.subtle.deriveKey({ name: "HKDF", hash: "SHA-256", salt: Mi, info: Fl }, f, { name: Qr, length: 256 }, false, ["encrypt", "decrypt"]), crypto.subtle.deriveKey({ name: "HKDF", hash: "SHA-256", salt: Mi, info: Nl }, f, { name: $l, hash: "SHA-256", length: 256 }, false, ["sign", "verify"])]);
      return { aesKey: d, hmacKey: y };
    } finally {
      u.fill(0);
    }
  })();
  return o.catch(() => {
    Rs.delete(r);
  }), Rs.set(r, o), o;
}, zl = async (e, t, n) => {
  if (!e) {
    const r = await rr(ut([_t("room-aes", 3), t, n]));
    return crypto.subtle.importKey("raw", r, { name: Qr }, false, ["encrypt", "decrypt"]);
  }
  return (await jl(e, t, n)).aesKey;
}, cc = (e, t) => t === void 0 ? { name: Qr, iv: e } : { name: Qr, iv: e, additionalData: vt(t) }, Wl = async (e, t, n) => {
  const r = crypto.getRandomValues(new Uint8Array(Zn)), s = new Uint8Array(await crypto.subtle.encrypt(cc(r, n), await e, vt(t))), o = new Uint8Array(Zn + s.byteLength);
  return o.set(r, 0), o.set(s, Zn), Ut(o);
}, Hl = async (e, t, n) => {
  if (typeof t != "string" || !ll.test(t)) throw me("invalid ciphertext");
  const r = Dn(t);
  if (r.byteLength < 28 || Ut(r) !== t) throw me("invalid ciphertext");
  return On(await crypto.subtle.decrypt(cc(r.subarray(0, Zn), n), await e, r.subarray(Zn)));
}, Kl = `${bn}:user_identity:v1:`, Vl = `${bn}_identity_v1`, Ln = "identities", Xr = (e) => me(`IndexedDB ${e} failed`), Ci = vt(_t("idb-key-probe", 1)), uo = (e) => ({ userId: e.userId, signPubJwk: e.signPubJwk, sign: (t) => ls(e.privateKey, t) }), Gl = () => new Promise((e, t) => {
  const n = indexedDB.open(Vl, 1);
  n.onupgradeneeded = () => {
    const r = n.result;
    r.objectStoreNames.contains(Ln) || r.createObjectStore(Ln);
  }, n.onsuccess = () => e(n.result), n.onerror = () => t(n.error ?? Xr("open"));
}), Ql = (e, t) => new Promise((n, r) => {
  const s = e.transaction(Ln, "readonly").objectStore(Ln).get(t);
  s.onsuccess = () => n(s.result), s.onerror = () => r(s.error ?? Xr("get"));
}), uc = (e, t, n) => new Promise((r, s) => {
  const o = e.transaction(Ln, "readwrite");
  let c;
  const a = (f) => {
    switch (c.phase) {
      case "pending":
      case "staged":
        c = { phase: "staged", value: f };
        return;
      case "done":
        return;
      default:
        Ge(c);
    }
  }, u = (f) => {
    switch (c.phase) {
      case "pending":
      case "staged":
        c = { phase: "done" }, s(f instanceof Error ? f : o.error ?? Xr(n));
        return;
      case "done":
        return;
      default:
        Ge(c);
    }
  };
  c = { phase: "pending" }, o.oncomplete = () => {
    switch (c.phase) {
      case "staged": {
        const { value: f } = c;
        c = { phase: "done" }, r(f);
        return;
      }
      case "pending":
        c = { phase: "done" }, s(Xr(n));
        return;
      case "done":
        return;
      default:
        Ge(c);
    }
  }, o.onabort = () => u(o.error), o.onerror = (f) => {
    var _a2;
    return u(((_a2 = f == null ? void 0 : f.target) == null ? void 0 : _a2.error) ?? o.error);
  };
  try {
    t(o.objectStore(Ln), a);
  } catch (f) {
    u(f);
  }
}), Xl = (e, t, n) => uc(e, (r, s) => {
  s(n), r.put(n, t);
}, "put"), Yl = (e, t, n) => uc(e, (r, s) => {
  const o = r.get(t);
  o.onsuccess = () => {
    const c = o.result;
    if (c !== void 0) {
      s([c, true]);
      return;
    }
    s([n, false]), r.add(n, t);
  };
}, "add"), Jl = async (e, t, n) => {
  if (!e || typeof e != "object" || !e.userId || !e.signPubJwk || !e.privateKey || !await t(e.userId, e.signPubJwk)) return false;
  try {
    return await n(await ls(e.privateKey, Ci), Ci, e.signPubJwk);
  } catch {
    return false;
  }
}, Zl = async (e, t) => {
  const n = `${Kl}${e}`, r = async () => {
    const o = await Gl();
    try {
      return await t(o);
    } finally {
      o.close();
    }
  }, s = typeof navigator < "u" ? navigator.locks : void 0;
  return typeof (s == null ? void 0 : s.request) == "function" ? s.request(n, r) : r();
}, ef = (e, t, n, r) => Zl(e, async (s) => {
  const o = async (d) => await Jl(d, n, r) ? d : Xl(s, e, await t()), c = await Ql(s, e);
  if (c !== void 0) return uo(await o(c));
  const a = await t(), [u, f] = await Yl(s, e, a);
  return uo(f ? await o(u) : u);
}), Es = 62n, lc = 4096, tf = 2097152, nf = 8192, Li = vt(_t("identity-self-test", 1)), fc = me("invalid custom user identity; userId does not match signPubJwk"), dc = me('invalid custom user identity; use "local", "none", loader, or importUserIdentity()'), rf = me("invalid custom user identity signature; sign() must return a valid 64-byte IEEE P1363 ECDSA P-256 SHA-256 signature"), Bi = (e, t) => {
  const n = Es ** BigInt(t);
  let r = Vr(e) % n, s = "";
  for (let o = 0; o < t; o++) s = Ga[Number(r % Es)] + s, r /= Es;
  return s;
}, fs = (e) => {
  let t, n;
  if (typeof e == "string") {
    if (e.length !== 87 || e[43] !== ".") return null;
    t = e.slice(0, 43), n = e.slice(44);
  } else {
    if (!e || typeof e != "object" || e.d !== void 0 || e.kty && e.kty !== "EC" || e.crv && e.crv !== "P-256" || typeof e.x != "string" || typeof e.y != "string" || !e.x || !e.y) return null;
    t = e.x, n = e.y;
  }
  try {
    const r = Dn(t), s = Dn(n);
    if (r.byteLength !== 32 || s.byteLength !== 32 || Ut(r) !== t || Ut(s) !== n) return null;
    const o = new Uint8Array(65);
    return o[0] = 4, o.set(r, 1), o.set(s, 33), o;
  } catch {
    return null;
  }
}, No = (e = "", t = "", n = "P-256", r = "EC") => ({ crv: n, kty: r, x: e, y: t }), pc = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = Yr.get(e);
    if (t) return t.compactPub;
  }
  return fs(e) ? typeof e == "string" ? e : `${e.x}.${e.y}` : null;
}, lo = (e) => {
  const t = pc(e);
  if (!t) throw Xa;
  return t;
}, fo = (e) => typeof e == "string" && fs(e) ? No(e.slice(0, 43), e.slice(44)) : null, po = Mt(), Yr = /* @__PURE__ */ new WeakMap(), xs = /* @__PURE__ */ new Map(), jo = (e) => {
  if (typeof e == "object" && e !== null) {
    const n = Yr.get(e);
    if (n) return n;
  }
  const t = pc(e);
  return t ? po.get(t) : void 0;
}, ir = (e, t) => {
  if (typeof e == "object" && e !== null) {
    const f = Yr.get(e);
    if (f) return Promise.resolve(f);
  }
  const n = fs(e);
  if (!n) return Promise.resolve(null);
  const r = typeof e == "string" ? e.slice(0, 43) : e.x, s = typeof e == "string" ? e.slice(44) : e.y, o = `${r}.${s}`, c = po.get(o);
  if (c) return Promise.resolve(c);
  const a = xs.get(o);
  if (a) return a;
  const u = (async () => {
    try {
      const [f, d, y] = await Promise.all([t ? Promise.resolve(t) : crypto.subtle.importKey("raw", n, oc, false, ["verify"]), rr(`${_t("pid", 1)}:${o}`), rr(`${_t("uid", 1)}:${o}`)]), g = Object.freeze(No(r, s)), v = { compactPub: o, cleanJwk: g, verifyKey: f, peerId: Bi(d, 20), userId: Bi(y, 22) };
      return Yr.set(g, v), po.set(o, v), v;
    } catch {
      return null;
    } finally {
      xs.delete(o);
    }
  })();
  return xs.set(o, u), u;
}, zo = (e) => typeof e == "string" && El.test(e), sf = () => {
  const e = /* @__PURE__ */ new Map();
  let t = 0;
  return { get: (n) => {
    const r = e.get(n);
    return r !== void 0 && (e.delete(n), e.set(n, r)), r;
  }, set: (n, r) => {
    const s = e.get(n);
    for (s !== void 0 && (t -= s.byteLength, e.delete(n)); e.size >= nf || e.size > 0 && t + r.byteLength > tf; ) {
      const o = e.keys().next().value;
      if (o === void 0) break;
      const c = e.get(o);
      c && (t -= c.byteLength), e.delete(o);
    }
    e.set(n, r), t += r.byteLength;
  } };
}, ho = sf(), Qt = /* @__PURE__ */ new Map(), Jr = (e, t, n) => {
  if (!e || e.byteLength !== 64) return false;
  const r = jo(n);
  if (r && t.byteLength <= lc) {
    const s = ho.get(`${r.compactPub}:${Ut(e)}`);
    if (s) return eo(s, t);
  }
  return of(e, t, n, r);
}, of = async (e, t, n, r) => {
  const s = r ?? await ir(n);
  if (!s) return false;
  if (t.byteLength > lc) {
    if (!Di(e)) return false;
    try {
      return await ao(s.verifyKey, e, t);
    } catch {
      return false;
    }
  }
  const o = `${s.compactPub}:${Ut(e)}`, c = ho.get(o);
  if (c) return eo(c, t);
  if (!Di(e)) return false;
  const a = Qt.get(o);
  if (a && eo(a[0], t)) return a[1];
  const u = t.slice(), f = ao(s.verifyKey, e, u).then((d) => {
    var _a2, _b;
    return d ? (ho.set(o, u), ((_a2 = Qt.get(o)) == null ? void 0 : _a2[1]) === f && Qt.delete(o), true) : (((_b = Qt.get(o)) == null ? void 0 : _b[1]) === f && Qt.delete(o), false);
  }, () => {
    var _a2;
    return ((_a2 = Qt.get(o)) == null ? void 0 : _a2[1]) === f && Qt.delete(o), false;
  });
  return Qt.set(o, [u, f]), f;
}, hc = (e, t, n) => {
  const r = jo(t);
  return r ? r[n] === e : ir(t).then((s) => !!(s && s[n] === e));
}, af = (e, t) => !!(e && typeof e == "string") && hc(e, t, "peerId"), gc = (e, t) => zo(e) && hc(e, t, "userId"), yc = async (e) => {
  const t = await crypto.subtle.generateKey(oc, e, ["sign", "verify"]), n = await crypto.subtle.exportKey("jwk", t.publicKey), r = await ir(No(n.x, n.y), t.publicKey);
  if (!r) throw Xa;
  return [t, n, r];
}, cf = "__default__", uf = 8, mc = (e) => e || cf, Ii = /* @__PURE__ */ new Map(), hr = Mt(), gr = Mt(), Wo = (e) => {
  let t = Ii.get(e);
  return t || (t = { epoch: 0, inFlightLoad: null, opTail: Promise.resolve() }, Ii.set(e, t)), t;
}, lf = (e, t) => {
  const n = e.opTail.catch(Pe).then(t);
  return e.opTail = n.catch(Pe), n;
};
let ff = 0;
const vc = () => `c${++ff}`, wc = (e, t = "", n = Wo(e).epoch) => `${t}\0${n}\0${e}`, df = () => yc(false).then(([e, , t]) => ({ peerId: t.peerId, signPrivateKey: e.privateKey, signPublicKey: e.publicKey, signPubJwk: t.cleanJwk, sign: (n) => ls(e.privateKey, n) })), pf = (e, t) => {
  const n = mc(e), r = wc(n, t), s = hr.get(r);
  if (s) return s;
  const o = df();
  return o.catch(() => {
    hr.get(r) === o && hr.delete(r);
  }), hr.set(r, o), o;
}, _i = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakSet(), bc = async () => {
  const [e, , t] = await yc(false);
  return { userId: t.userId, signPubJwk: t.cleanJwk, privateKey: e.privateKey };
}, hf = () => bc().then((e) => {
  const t = uo(e);
  return sr.add(t), t;
}), Sc = (e) => !!(e && typeof e == "object" && typeof e.userId == "string" && zo(e.userId) && e.signPubJwk && fs(e.signPubJwk) && typeof e.sign == "function"), Ho = (e, t, n = e.signPubJwk) => {
  const r = sr.has(e), s = { userId: e.userId, signPubJwk: n, sign: r ? e.sign : async (c) => us(new Uint8Array(await e.sign(c))), persistence: t }, o = _i.get(e);
  return o !== void 0 && _i.set(s, o), r && sr.add(s), s;
}, Ui = async (e) => {
  if (!Sc(e)) throw dc;
  const t = await ir(e.signPubJwk);
  if (!t || t.userId !== e.userId) throw fc;
  if (!sr.has(e)) {
    let n;
    try {
      n = new Uint8Array(await e.sign(Li.slice()));
    } catch (s) {
      throw me(`custom user identity sign() failed startup check: ${s instanceof Error ? s.message : String(s)}`);
    }
    const r = us(n);
    if (r.byteLength !== 64 || !await ao(t.verifyKey, r, Li)) throw rf;
  }
  return Ho(e, e.persistence ?? "custom", t.cleanJwk);
}, go = () => {
  try {
    return typeof globalThis < "u" && "indexedDB" in globalThis && !!globalThis.indexedDB;
  } catch {
    return false;
  }
}, gf = (e) => e === "none" || (e === void 0 || e === "local") && !go(), Pc = (e) => {
  const t = e == null ? void 0 : e.identity;
  if (!(t === void 0 || t === "none" || t === "local" || typeof t == "function")) {
    if (Sc(t)) {
      const n = jo(t.signPubJwk);
      if (n && n.userId !== t.userId) throw fc;
      return;
    }
    throw dc;
  }
}, yr = (e, t = "", n = Wo(e).epoch) => {
  const r = wc(e, t, n), s = gr.get(r);
  if (s) return s;
  const o = hf().then((c) => Ho(c, "none"));
  return o.catch(() => {
    gr.get(r) === o && gr.delete(r);
  }), gr.set(r, o), o;
}, yf = me("identity epoch superseded by clearUserIdentity"), mf = (e, t, n) => {
  const r = lf(t, async () => {
    if (t.epoch !== n) throw yf;
    const s = await ef(e, bc, gc, Jr);
    return sr.add(s), Ho(s, "local");
  }).finally(() => {
    var _a2;
    ((_a2 = t.inFlightLoad) == null ? void 0 : _a2.promise) === r && (t.inFlightLoad = null);
  });
  return t.inFlightLoad = { epoch: n, promise: r }, r;
}, vf = async (e, t, n, r) => {
  var _a2;
  const s = n == null ? void 0 : n.identity;
  if (typeof s == "function") return Ui(await s({ appId: e, roomId: t }));
  if (s !== void 0 && s !== "none" && s !== "local") return Ui(s);
  const o = mc(e), c = Wo(o);
  if ((s === "none" || s === "local" ? s : go() ? "local" : "none") === "none") return yr(o, r, c.epoch);
  if (!go()) return on("IndexedDB unavailable; falling back to identity: 'none'"), yr(o, r, c.epoch);
  for (let a = 0; a < uf; a++) {
    const u = c.epoch, f = ((_a2 = c.inFlightLoad) == null ? void 0 : _a2.epoch) === u ? c.inFlightLoad.promise : mf(o, c, u);
    try {
      const d = await f;
      if (c.epoch === u) return d;
    } catch {
      if (c.epoch !== u) continue;
      return on("IndexedDB unavailable; falling back to identity: 'none'"), yr(o, r, u);
    }
  }
  return yr(o, r, c.epoch);
}, Ac = [0, 0], $i = 6e4, qr = 1e4, Ts = 5e3, wf = 64, bf = (e, t, n = 1) => ut([_t(e, n), ...t]), kc = (e) => Array.isArray(e) && e.length === 2 && mn(e[0]) && typeof e[1] == "number" && Number.isSafeInteger(e[1]) && e[1] >= 0, Zr = (e, t) => e[0] - t[0] || e[1] - t[1], Sf = async (e, t) => {
  const n = vt(t), r = typeof e == "function" ? us(await e(n)) : await ls(e, n);
  return Ut(r);
}, Pf = (e, t, n) => {
  try {
    const r = Jr(Dn(n), vt(t), e);
    return typeof r == "boolean" ? r : r.catch(() => false);
  } catch {
    return false;
  }
}, Mn = (e, t = Number.POSITIVE_INFINITY) => {
  const n = /* @__PURE__ */ new Set(), r = (c, a) => {
    if (a > wf) return null;
    if (c === null || typeof c == "boolean") return String(c);
    if (typeof c == "number") return Number.isFinite(c) ? ut(c) : null;
    if (typeof c == "string") return ut(c);
    if (typeof c != "object") return null;
    const u = c;
    if (n.has(u)) return null;
    const f = Array.isArray(u);
    if (!f) {
      const d = Object.getPrototypeOf(u);
      if (d !== Object.prototype && d !== null) return null;
    }
    n.add(u);
    try {
      if (f) {
        const v = [];
        for (let b = 0; b < u.length; b++) {
          const N = r(u[b], a + 1);
          if (N === null) return null;
          v.push(N);
        }
        return `[${v.join(",")}]`;
      }
      const d = u, y = ec(d).sort(), g = [];
      for (let v = 0; v < y.length; v++) {
        const b = y[v], N = d[b];
        if (N === void 0) continue;
        const K = r(N, a + 1);
        if (K === null) return null;
        g.push(`${ut(b)}:${K}`);
      }
      return `{${g.join(",")}}`;
    } finally {
      n.delete(u);
    }
  }, s = r(e, 0);
  if (s === null) return 0;
  const o = Va(s);
  return o > t ? 1 : [s, o];
}, Af = (e) => {
  const t = Mn(e);
  if (!Array.isArray(t)) throw me("value must be valid finite JSON");
  return t[0];
}, kf = (e = 0) => {
  let t = e, n = 0;
  return { peek: () => t, observe: (r, s = Ts) => {
    const o = Math.min(r, Date.now() + s);
    o > t && (t = o, n = 0);
  }, next: (r = 0) => {
    const s = Date.now(), o = Math.max(s, t + 1, r), c = s + Ts;
    return o <= c ? t = o : c > t && (t = c), n = 0, o;
  }, nextHlc: (r, s = Ac, o = qr) => {
    const c = Date.now(), a = Math.max(c, t, s[0]);
    if (a > c + o) throw me(`state clock skew exceeded for "${r}"`);
    const u = a > t && a > s[0] ? 0 : Math.max(a === t ? n : -1, a === s[0] ? s[1] : -1) + 1, f = c + Ts;
    return a <= f ? (t = a, n = u) : f > t && (t = f, n = 0), [a, u];
  } };
}, Rf = (e, t, n = 512) => {
  const r = Mt(n);
  return { consume: (s, o = 1) => {
    const c = Date.now(), a = r.get(s);
    if (!a) return t < o ? false : (r.set(s, [t - o, c]), true);
    const u = Math.max(0, c - a[1]) / 1e3;
    return u > 0 && (a[0] = Math.min(t, a[0] + u * e), a[1] = c), a[0] < o ? false : (a[0] -= o, true);
  }, delete: (s) => {
    r.delete(s);
  }, clear: () => {
    r.clear();
  } };
}, { min: Ef } = Math, Ms = 3333, xf = 6e4, Tf = me("relay socket closed"), un = Mt(256), Mf = (e) => e.phase === "connecting" || e.phase === "open", qi = (e) => e.phase === "backoff-wait" || e.phase === "parked-offline", es = /* @__PURE__ */ new Set(), ts = /* @__PURE__ */ new WeakMap(), Of = (e) => !!e.isClosed;
let jt = false, Fi = null;
const Df = (e, t, n, r = false) => {
  var _a2, _b;
  return ((_a2 = e.relayConfig) == null ? void 0 : _a2.urls) || (r ? Pl(t, Al(e.appId)) : t).slice(0, ((_b = e.relayConfig) == null ? void 0 : _b.redundancy) ?? n);
}, Cf = () => {
  jt = true, es.forEach((e) => e[0]());
}, Ni = () => {
  jt = false, un.clear(), es.forEach((e) => e[1]());
}, Lf = () => {
  if (Fi || typeof addEventListener != "function") return;
  const e = new AbortController(), { signal: t } = e;
  addEventListener("online", Ni, { signal: t }), addEventListener("offline", Cf, { signal: t }), typeof document < "u" && typeof document.addEventListener == "function" && document.addEventListener("visibilitychange", () => {
    !jt && document.visibilityState === "visible" && Ni();
  }, { signal: t }), Fi = () => e.abort();
}, ji = (e) => {
  e.onopen = e.onclose = e.onmessage = null, e.close();
}, Bf = (e, t, n) => {
  const r = { url: e, isClosed: false, send: Pe }, s = /* @__PURE__ */ new Set();
  let o = { phase: "parked-offline", didOpen: false };
  const c = (v) => {
    s.forEach((b) => b(v)), s.clear();
  }, a = () => {
    const { promise: v, resolve: b, reject: N } = Promise.withResolvers();
    return v.catch(Pe), Object.defineProperty(v, Kr, { value: () => o.phase === "open" || o.phase === "closed" || jt ? Promise.resolve(null) : o.phase === "backoff-wait" && o.attemptFailure ? Promise.resolve(o.attemptFailure) : new Promise((K) => {
      s.add(K);
    }), enumerable: false, configurable: true }), { promise: v, resolve: b, reject: N };
  };
  let u = a();
  r.ready = u.promise;
  const f = () => {
    u = a(), r.ready = u.promise;
  };
  Lf();
  const d = (v) => v.phase === "open" ? true : v.didOpen, y = () => {
    switch (o.phase) {
      case "closed":
      case "connecting":
      case "open":
        return;
      case "backoff-wait":
        if (clearTimeout(o.timer), jt) {
          o = { phase: "parked-offline", didOpen: o.didOpen };
          return;
        }
        break;
      case "parked-offline":
        if (jt) return;
        break;
      default:
        Ge(o);
    }
    const v = o.didOpen, b = new WebSocket(e);
    r.socket = b, r.url = b.url ?? e, o = { phase: "connecting", socket: b, didOpen: v }, b.onclose = () => {
      if (!Mf(o) || o.socket !== b) return;
      const N = o.phase === "open", K = d(o);
      if (r.send = Pe, N && f(), jt) {
        o = { phase: "parked-offline", didOpen: K }, N || c(null);
        return;
      }
      const q = N ? null : me(`failed to connect to relay ${r.url}`);
      q && c(q);
      const A = un.get(e) ?? Ms;
      un.set(e, A);
      const L = setTimeout(y, Math.random() * A);
      un.set(e, Ef(A * 2, xf)), o = { phase: "backoff-wait", didOpen: K, timer: L, attemptFailure: q };
    }, b.onmessage = (N) => {
      try {
        t(String(N.data));
      } catch {
      }
    }, b.onopen = () => {
      if (o.phase !== "connecting" || o.socket !== b) return;
      const N = o.didOpen;
      o = { phase: "open", socket: b }, c(null), u.resolve(r), un.set(e, Ms), N && (n == null ? void 0 : n());
    }, r.send = (N) => {
      b.readyState === 1 && b.send(N);
    };
  }, g = [() => {
    switch (o.phase) {
      case "closed":
      case "parked-offline":
        return;
      case "backoff-wait":
        clearTimeout(o.timer), o = { phase: "parked-offline", didOpen: o.didOpen }, c(null);
        return;
      case "connecting":
      case "open": {
        const v = o.phase === "open", b = d(o), N = o.socket;
        r.send = Pe, o = { phase: "parked-offline", didOpen: b }, v && f(), c(null), ji(N);
        return;
      }
      default:
        Ge(o);
    }
  }, () => {
    o.phase !== "closed" && (un.set(e, Ms), qi(o) && y());
  }];
  return es.add(g), ts.set(r, () => {
    !jt && qi(o) && g[1]();
  }), r.close = () => {
    if (o.phase === "closed") return;
    const v = o;
    switch (r.isClosed = true, r.send = Pe, o = { phase: "closed" }, c(null), u.reject(Tf), es.delete(g), ts.delete(r), un.delete(e), v.phase) {
      case "parked-offline":
        break;
      case "backoff-wait":
        clearTimeout(v.timer);
        break;
      case "connecting":
      case "open":
        ji(v.socket);
        break;
      default:
        Ge(v);
    }
  }, jt || y(), r;
}, If = () => {
  const e = /* @__PURE__ */ new WeakMap();
  return { forRelay: (t) => {
    let n = e.get(t);
    return n || (n = /* @__PURE__ */ Object.create(null), e.set(t, n)), n;
  } };
}, yo = /* @__PURE__ */ new WeakMap(), _f = (e) => {
  if (e && typeof e == "object") {
    const t = yo.get(e);
    t && (yo.delete(e), t());
  }
}, Uf = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakSet(), a = Of, u = (f) => {
    const d = s.get(f);
    d !== void 0 && r.get(d) === f && r.delete(d);
  };
  return { register: (f, d) => {
    var _a2;
    let y = r.get(f);
    return y && a(y) && (u(y), o.delete(y), y = void 0), y ? (_a2 = ts.get(y)) == null ? void 0 : _a2() : (y = d(), r.set(f, y), s.set(y, f)), y;
  }, lease: (f, d) => {
    var _a2;
    (_a2 = ts.get(f)) == null ? void 0 : _a2(), o.set(f, (o.get(f) ?? 0) + 1);
    const y = Promise.resolve(d).then((b) => b);
    y.catch(Pe);
    const g = d[Kr];
    typeof g == "function" && Object.defineProperty(y, Kr, { value: g, enumerable: false, configurable: true });
    let v = false;
    return yo.set(y, () => {
      if (v) return;
      v = true;
      const b = o.get(f);
      if (!(!b || b <= 0)) {
        if (b > 1) {
          o.set(f, b - 1);
          return;
        }
        o.delete(f), u(f), !c.has(f) && !a(f) && (c.add(f), t == null ? void 0 : t(f));
      }
    }), y;
  }, evict: u, getSockets: () => Za([...r.entries()].flatMap(([f, d]) => {
    const y = a(d) ? void 0 : e(d);
    return y ? [[f, y]] : [];
  })) };
}, Ko = 16384, ds = 65536, $f = 17408, Rc = 1e4, zi = 12e4, mr = 0, jn = 1, Os = 2, Ds = 3, zn = 4, vr = 5, qf = 64, Cs = 36, Ls = 48, Jt = 6, En = 14, Wi = Ko - En, Hi = ds - En, Ff = 256 * 1024 ** 2, Ki = 1024 ** 2, Nf = 1024, jf = 64, zf = 128, Wf = 8, Hf = 32, Bs = "payload exceeds receiver size limit", Is = Yt("payload"), Kf = 0, Vf = 1, Ec = 2, wr = { pending: { waiting: true, reserved: false, active: false, admitted: false }, deciding: { waiting: true, reserved: false, active: false, admitted: false }, queued: { waiting: true, reserved: false, active: false, admitted: true }, accepted: { waiting: false, reserved: true, active: true, admitted: true }, receiving: { waiting: false, reserved: true, active: true, admitted: true }, buffered: { waiting: false, reserved: true, active: false, admitted: true }, closed: { waiting: false, reserved: false, active: false, admitted: false } }, Gf = (e) => e.phase === "failed" || e.phase === "done", bt = (e, t) => {
  const n = Object.assign(me(t), { kind: e });
  return e === "aborted" && (n.name = "AbortError"), n;
}, Fr = (e) => {
  if (e == null ? void 0 : e.aborted) throw bt("aborted", no);
}, Nr = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength), Vi = (e, t, n = Jt) => {
  const r = new Uint8Array(n);
  return r[0] = 3, r[1] = e, Nr(r).setUint32(2, t), r;
}, Gi = (e, t, n) => {
  const r = () => {
    const o = zi - (Date.now() - e());
    if (o > 0) {
      const c = setTimeout(r, o);
      ht(c), n(c);
    } else t();
  }, s = setTimeout(r, zi);
  return ht(s), s;
}, Qf = (e) => On(e.subarray(2, 34)).replaceAll("\0", ""), Xf = (e, t) => {
  let n;
  try {
    n = e();
  } catch {
    return t(false);
  }
  return typeof n == "boolean" ? t(n) : Promise.resolve(n).then((r) => t(r === true), () => t(false));
}, _s = (e, t, n) => t === Ec ? n ? e.slice() : e : t === Vf ? sn(On(e)) : On(e), xc = (e, t, n, r) => {
  try {
    e.onProgress(t, n, r);
  } catch (s) {
    en("progress handler", s);
  }
}, Us = (e, t, n, r) => {
  var _a2;
  xc(e, 1, n, r);
  try {
    (_a2 = e.receiver) == null ? void 0 : _a2.call(e, t, n, r);
  } catch (s) {
    hl(s);
  }
}, Yf = ({ resolveTransport: e, getPeerIds: t, canReceiveFromPeer: n, onPeerError: r, broadcastInline: s, checkAborted: o = Fr, onUnknownType: c, maxReceiveBytes: a = Ff }) => {
  if (!Number.isSafeInteger(a) || a <= 0) throw Gr("maxReceiveBytes");
  const u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new WeakSet();
  let q = null, A = 0, L = 0, I = 0, O = 0, J = false, Z = false;
  const D = () => bt("disconnected", Cn), j = Yt("frame"), ne = (h) => h.state.phase !== "closed", ae = (h) => Math.min(a, (h == null ? void 0 : h.maxPayloadBytes) ?? a), we = () => {
    J && (Z = true);
  }, R = (h, T, C = true) => {
    const G = e(h, true);
    G && !K.has(G) && (K.add(G), on(`${T}; disconnecting peer ${h}`), r(h, C ? nc(T) : me(T)));
  }, F = (h, T, C, G, ie = "") => {
    if (!T || !T.isOpen) return;
    const he = vt(ie).subarray(0, 200), fe = Vi(G, C, Jt + he.length);
    fe.set(he, Jt);
    try {
      if (T.bufferedAmount > Ki) throw me("control send buffer is full");
      T.sendFrame(fe, C);
    } catch {
      R(h, "unable to send action control", false);
    }
  }, ee = (h, T, C, G = "") => {
    F(h, e(h, true), T, C, G);
  }, P = (h, T, C, G) => {
    var _a2, _b;
    C == null ? void 0 : C[3](T), (_b = (_a2 = f.get(h.type)) == null ? void 0 : _a2.onReject) == null ? void 0 : _b.call(_a2, h.peerId, h.metadata, T), G !== void 0 && ee(h.peerId, G, zn, T);
  }, H = (h) => {
    for (const T of Array.from(b)) T.message.peerId === h && (b.delete(T), b.add(T));
  }, X = (h) => {
    I--;
    const T = (N.get(h) ?? 1) - 1;
    T > 0 ? N.set(h, T) : N.delete(h);
  }, z = (h, T) => {
    const C = wr[h.state.phase], G = wr[T.phase], { peerId: ie, size: he } = h.message, fe = g.get(ie);
    C.reserved !== G.reserved && (O += G.reserved ? he : -he, G.reserved || we()), C.waiting !== G.waiting && (G.waiting ? b.add(h) : b.delete(h)), C.active !== G.active && fe && (G.active ? fe.activeBulk = h : fe.activeBulk === h && (fe.activeBulk = null, H(ie))), h.state = T, T.phase === "buffered" && we();
  }, re = (h) => {
    var _a2;
    if (h.state.phase === "closed") return false;
    const { peerId: T } = h.message, C = g.get(T);
    (_a2 = h.unbindScopeAbort) == null ? void 0 : _a2.call(h), h.unbindScopeAbort = null, h.timer = tt(h.timer);
    const G = h.controller;
    if (h.controller = null, h.kind === "inline") {
      h.state = { phase: "closed" };
      const ie = C == null ? void 0 : C.inlineQueues.get(h.queueKey);
      if (ie) {
        const he = ie.indexOf(h);
        he >= 0 && ie.splice(he, 1), ie.length || C.inlineQueues.delete(h.queueKey);
      }
    } else C == null ? void 0 : C.bulkTransfers.delete(h.transferId), z(h, { phase: "closed" });
    return C && (C.pendingCount--, L--, C.pendingCount || g.delete(T)), G == null ? void 0 : G.abort(), true;
  }, Ae = (h, T) => {
    re(h) && P(h.message, T, h.scope, h.kind === "bulk" ? h.transferId : void 0);
  }, Re = (h) => {
    if (h.state.phase !== "pending") return null;
    const { peerId: T } = h.message;
    if (I >= zf || (N.get(T) ?? 0) >= Wf) return Ae(h, "too many pending receive decisions"), null;
    const C = new AbortController();
    return h.controller = C, I++, N.set(T, (N.get(T) ?? 0) + 1), h.kind === "inline" ? h.state = { phase: "deciding", data: h.state.data } : z(h, { phase: "deciding" }), C;
  }, Ve = (h) => {
    if (h.kind === "inline") switch (h.state.phase) {
      case "pending":
      case "deciding":
        return h.state = { phase: "ready", data: h.state.data }, true;
      case "ready":
        return true;
      case "closed":
        return false;
      default:
        return Ge(h.state);
    }
    switch (h.state.phase) {
      case "pending":
      case "deciding":
        return z(h, { phase: "queued" }), true;
      case "queued":
      case "accepted":
      case "receiving":
      case "buffered":
        return true;
      case "closed":
        return false;
      default:
        return Ge(h.state);
    }
  }, Ue = (h) => {
    if (h.state.phase !== "queued") return;
    const T = g.get(h.message.peerId);
    !T || T.activeBulk !== null || O + h.message.size > a || (h.lastSeenAt = Date.now(), z(h, { phase: "accepted" }), ee(h.message.peerId, h.transferId, Ds));
  }, et = (h) => {
    switch (h.state.phase) {
      case "receiving":
        return h.state;
      case "accepted": {
        const T = h.message.size;
        try {
          const C = { phase: "receiving", data: new Uint8Array(T), seenChunks: new Uint8Array(Math.ceil(Math.ceil(T / h.chunkSize) / 8)), offset: 0 };
          return z(h, C), C;
        } catch {
          return Ae(h, "unable to allocate receive buffer"), x(), null;
        }
      }
      case "pending":
      case "deciding":
      case "queued":
      case "buffered":
      case "closed":
        return null;
      default:
        return Ge(h.state);
    }
  }, st = (h) => {
    if (h.state.phase !== "receiving") return;
    const { data: T } = h.state;
    z(h, { phase: "buffered", data: T });
  }, He = (h) => h.kind === "inline" ? h.state.phase === "ready" : wr[h.state.phase].admitted, ot = (h, T) => {
    if (h.state.phase !== "pending") return He(h);
    if (h.message.size > ae(T)) return Ae(h, Bs), false;
    const C = h.scope ? h.scope[2] : T.receiveGate;
    if (!C) return T.receiver ? Ve(h) : false;
    const G = Re(h);
    if (!G) return false;
    const { peerId: ie } = h.message;
    let he = false;
    const fe = Xf(() => C({ byteLength: h.message.size, peerId: ie, signal: G.signal, ...h.message.metadata === void 0 ? {} : { metadata: h.message.metadata } }), (Ee) => (he || (he = true, X(ie)), h.state.phase !== "deciding" ? false : Ee ? Ve(h) : (Ae(h, "payload rejected by receiver"), false)));
    return typeof fe == "boolean" ? fe : (fe.then(() => x()), false);
  }, Qe = (h, T, C, G) => {
    let ie;
    try {
      ie = _s(C, h.message.format, G);
    } catch {
      re(h), R(h.message.peerId, Is);
      return;
    }
    re(h), Us(T, ie, h.message.peerId, h.message.metadata);
  }, E = (h) => {
    const T = f.get(h.message.type);
    if (T && !(h.state.phase === "pending" && !ot(h, T)) && h.state.phase === "ready") {
      if (T.receiver) Qe(h, T, h.state.data, true);
      else if (!h.scope) {
        const { data: C } = h.state, { lastSeenAt: G, message: ie } = h;
        re(h), m(ie, C, true, true, G);
      }
    }
  }, te = (h) => {
    const T = f.get(h.message.type);
    if (T) switch (h.state.phase) {
      case "pending":
        ot(h, T) && T.receiver && Ue(h);
        return;
      case "queued":
        T.receiver && Ue(h);
        return;
      case "buffered":
        T.receiver && Qe(h, T, h.state.data, false);
        return;
      case "deciding":
      case "accepted":
      case "receiving":
      case "closed":
        return;
      default:
        Ge(h.state);
    }
  }, Q = (h, T) => {
    var _a2;
    const C = (_a2 = g.get(h)) == null ? void 0 : _a2.inlineQueues.get(T);
    for (; C == null ? void 0 : C[0]; ) {
      const G = C[0];
      if (E(G), ne(G)) break;
    }
  }, x = () => {
    if (J) {
      Z = true;
      return;
    }
    J = true;
    try {
      do {
        Z = false;
        for (const h of b) te(h);
        for (const [h, T] of g) {
          for (const C of T.bulkTransfers.values()) C.state.phase === "buffered" && te(C);
          for (const C of T.inlineQueues.keys()) Q(h, C);
        }
      } while (Z);
    } finally {
      J = false, Z = false;
    }
  }, _ = () => {
    q || (q = setTimeout(ve, Rc), ht(q));
  }, ve = () => {
    q = tt(q);
    const h = Date.now();
    let T = false;
    for (const [C, G] of v) {
      for (const [ie, he] of G) {
        for (; he.length > 0 && h - he[0].receivedAt > 1e4; ) he.shift();
        he.length === 0 ? G.delete(ie) : T = true;
      }
      G.size === 0 && v.delete(C);
    }
    T && _();
  }, m = (h, T, C = false, G = false, ie = Date.now()) => {
    const he = Date.now();
    let fe = v.get(h.peerId);
    fe || (fe = /* @__PURE__ */ new Map(), v.set(h.peerId, fe));
    let Ee = fe.get(h.type);
    for (Ee || (Ee = [], fe.set(h.type, Ee)); Ee.length > 0 && he - Ee[0].receivedAt > 1e4; ) Ee.shift();
    Ee.length >= Hf && Ee.shift(), Ee.push({ admitted: C, message: h, data: G ? T : T.slice(), receivedAt: ie }), _();
  }, B = (h, T) => ({ message: h, scope: T, unbindScopeAbort: null, controller: null, lastSeenAt: Date.now(), timer: null }), M = (h) => {
    !ne(h) || h.timer || (h.timer = Gi(() => h.lastSeenAt, () => {
      Ae(h, "action transfer timed out"), x();
    }, (T) => {
      ne(h) ? h.timer = T : clearTimeout(T);
    }));
  }, V = (h, T = false) => {
    const { peerId: C } = h.message;
    let G = g.get(C);
    if (L >= Nf || ((G == null ? void 0 : G.pendingCount) ?? 0) >= jf) return P(h.message, "too many pending transfers", h.scope, h.kind === "bulk" ? h.transferId : void 0), false;
    if (G || (G = { bulkTransfers: /* @__PURE__ */ new Map(), inlineQueues: /* @__PURE__ */ new Map(), activeBulk: null, pendingCount: 0 }, g.set(C, G)), G.pendingCount++, L++, h.kind === "inline") {
      const ie = G.inlineQueues.get(h.queueKey) ?? [];
      ie.push(h), G.inlineQueues.set(h.queueKey, ie);
    } else G.bulkTransfers.set(h.transferId, h), z(h, { phase: "pending" });
    if (T || M(h), h.scope) {
      const ie = h.scope[1], he = () => {
        Ae(h, "receive cancelled"), x();
      };
      if (ie.aborted) return he(), false;
      const fe = new AbortController();
      ie.addEventListener("abort", he, { once: true, signal: fe.signal }), h.unbindScopeAbort = () => fe.abort();
    }
    return true;
  }, De = (h, T) => {
    var _a2;
    const C = () => !!(T.receiver || T.receiveGate);
    if (!C()) return;
    const G = Date.now();
    for (const ie of Array.from(v.keys())) {
      if (!C()) break;
      for (; C(); ) {
        const he = v.get(ie), fe = he == null ? void 0 : he.get(h);
        if (!fe || fe.length === 0) {
          he && (he.delete(h), he.size === 0 && v.delete(ie));
          break;
        }
        if (G - fe[0].receivedAt > 1e4) {
          fe.shift();
          continue;
        }
        if (fe[0].admitted && !T.receiver) break;
        const Ee = fe.shift();
        if (fe.length === 0 && (he.delete(h), he.size === 0 && v.delete(ie)), Ee.message.size > ae(T)) {
          P(Ee.message, Bs);
          continue;
        }
        if (Ee.admitted || T.receiver && !T.receiveGate && !((_a2 = g.get(ie)) == null ? void 0 : _a2.inlineQueues.has(h))) {
          let qe;
          try {
            qe = _s(Ee.data, Ee.message.format, false);
          } catch {
            he && (he.delete(h), he.size === 0 && v.delete(ie)), R(ie, Is);
            break;
          }
          Us(T, qe, ie, Ee.message.metadata);
        } else {
          const qe = { ...B(Ee.message), kind: "inline", queueKey: h, state: { phase: "pending", data: Ee.data } };
          V(qe, true) && (Q(ie, h), M(qe));
        }
      }
    }
  }, se = (h, T) => {
    var _a2;
    const C = f.get(h.type);
    if (!C) return T !== void 0 && ee(h.peerId, T, zn, "unregistered action"), null;
    const G = (_a2 = C.receiveScope) == null ? void 0 : _a2.call(C, h.peerId, h.metadata);
    return G === null || (G == null ? void 0 : G[1].aborted) ? (T !== void 0 && ee(h.peerId, T, zn, "unexpected response"), null) : h.size > ae(C) ? (P(h, Bs, G, T), null) : [C, G];
  }, Ie = (h) => {
    var _a2;
    for (const C of ((_a2 = d.get(h)) == null ? void 0 : _a2.values()) ?? []) C.fail(D());
    d.delete(h), y.delete(h), v.delete(h);
    const T = g.get(h);
    if (T) {
      for (const C of Array.from(T.bulkTransfers.values())) re(C);
      for (const C of Array.from(T.inlineQueues.values())) C.slice().forEach((G) => {
        re(G);
      });
    }
    x();
  }, Le = (h, T) => new Promise((C, G) => {
    const ie = () => {
      try {
        o(T);
      } catch (fe) {
        G(fe);
      }
    };
    if (T.aborted) {
      ie();
      return;
    }
    const he = new AbortController();
    T.addEventListener("abort", ie, { once: true, signal: he.signal }), h.then(C, G).finally(() => {
      he.abort();
    });
  }), $e = async (h, T, C, G, ie, he, fe, Ee, qe) => {
    C();
    const lt = fe ?? h.waitForDrain(G);
    if (lt !== true) {
      if (!await lt) throw o(G), bt("disconnected", "data channel stopped draining");
      C();
    }
    Ee == null ? void 0 : Ee();
    try {
      h.sendFrame(T, ie, he);
    } catch {
      const ze = D();
      throw qe == null ? void 0 : qe(ze), ze;
    }
  }, Xe = async (h, T, C, G, ie, he, fe, Ee, qe) => {
    const { promise: lt, resolve: ze, reject: ft } = Promise.withResolvers();
    lt.catch(Pe);
    const Je = d.get(h) ?? /* @__PURE__ */ new Map();
    if (Je.has(G)) throw me("action transfer id in use");
    d.set(h, Je);
    const it = (Ze, rt = false, at) => {
      if (Gf(Be)) return;
      let i = true;
      if (Be.phase === "offering") {
        i = Be.sent, clearTimeout(Be.timer), Be = { phase: "failed", error: Ze, fromReceiver: rt, didSendOffer: at ?? i }, ft(Ze);
        return;
      }
      Be = { phase: "failed", error: Ze, fromReceiver: rt, didSendOffer: at ?? i };
    };
    let Be = { phase: "offering", sent: false, timer: Gi(() => Be.phase === "offering" ? Be.lastSeen : 0, () => it(bt("timeout", "action offer timed out")), (Ze) => {
      Be.phase === "offering" ? Be.timer = Ze : clearTimeout(Ze);
    }), lastSeen: Date.now() };
    const _e = () => Be, nt = () => {
      if (Be.phase === "failed") throw Be.error;
      try {
        if (o(qe), !T.isOpen) throw D();
      } catch (Ze) {
        throw it(Ze), Ze;
      }
    };
    Je.set(G, { accept: () => Be.phase === "offering" && Be.sent ? (clearTimeout(Be.timer), Be = { phase: "streaming" }, ze(), true) : false, fail: (Ze, rt = false) => {
      it(Ze, rt);
    }, touch: () => {
      Be.phase === "offering" && (Be.lastSeen = Date.now());
    } });
    const Ke = qe ? new AbortController() : null;
    Ke && qe && qe.addEventListener("abort", () => {
      try {
        o(qe);
      } catch (Ze) {
        it(Ze);
      }
    }, { once: true, signal: Ke.signal });
    try {
      const Ze = (T.maxBulkFrameBytes ?? 16384) >= ds, rt = Ze ? Hi : Wi;
      let at = C;
      Ze && (at = C.slice(), at[1] = at[1] | qf), await $e(T, at, nt, qe, G, true, void 0, () => {
        Be.phase === "offering" && (Be.sent = true);
      }, (i) => {
        it(i, false, false);
      }), await lt;
      for (let i = 0; i < he; i += rt) {
        nt();
        const k = Math.min(rt, he - i), S = Vi(Os, G, En + k);
        Nr(S).setFloat64(Jt, i), S.set(ie instanceof Uint8Array ? ie.subarray(i, i + k) : new Uint8Array(await ie.slice(i, i + k).arrayBuffer()), En), await $e(T, S, nt, qe, G), Je.forEach((U) => U.touch()), Ee == null ? void 0 : Ee((i + k) / he, h, fe);
      }
      nt(), _e().phase === "streaming" && (Be = { phase: "done" });
    } catch (Ze) {
      it(Ze);
      const rt = _e();
      throw rt.phase === "failed" && rt.didSendOffer && !rt.fromReceiver && T.isOpen && T.bufferedAmount <= Ki && F(h, T, G, vr), rt.phase === "failed" ? rt.error : Ze;
    } finally {
      const Ze = _e();
      Ze.phase === "offering" && clearTimeout(Ze.timer), Ke == null ? void 0 : Ke.abort(), Je.delete(G), !Je.size && d.get(h) === Je && d.delete(h);
    }
  }, $ = (h, T, C, G) => {
    var _a2, _b, _c2, _d2, _e, _f2, _g;
    if (T.length < Jt || (C === Ds || C === vr) && T.length !== Jt || C === zn && T.length > 206) {
      R(h, Yt("control"));
      return;
    }
    const ie = G.getUint32(2);
    if (C === Ds) {
      const _e2 = d.get(h);
      ((_a2 = _e2 == null ? void 0 : _e2.get(ie)) == null ? void 0 : _a2.accept()) && _e2.forEach((nt) => nt.touch());
      return;
    }
    if (C === zn) {
      (_c2 = (_b = d.get(h)) == null ? void 0 : _b.get(ie)) == null ? void 0 : _c2.fail(bt("rejected", On(T.subarray(Jt))), true);
      return;
    }
    if (C === vr) {
      const _e2 = (_d2 = g.get(h)) == null ? void 0 : _d2.bulkTransfers.get(ie);
      _e2 && (re(_e2), (_e = _e2.scope) == null ? void 0 : _e[3]("response cancelled by sender")), x();
      return;
    }
    const he = T.length >= En ? G.getFloat64(Jt) : NaN, fe = T.subarray(En), Ee = (_f2 = g.get(h)) == null ? void 0 : _f2.bulkTransfers.get(ie);
    if (!Ee) return;
    const qe = Ee.message.size, lt = Ee.chunkSize;
    if (!wr[Ee.state.phase].active || !Number.isSafeInteger(he) || he < 0 || he >= qe || he % lt !== 0 || !fe.length || fe.length !== Math.min(lt, qe - he)) {
      R(h, Yt("chunk"));
      return;
    }
    const ze = et(Ee);
    if (!ze) return;
    const ft = he / lt, Je = ft >>> 3, it = 1 << (ft & 7);
    if ((ze.seenChunks[Je] & it) !== 0) {
      R(h, Yt("chunk"));
      return;
    }
    ze.seenChunks[Je] |= it, ze.data.set(fe, he), ze.offset += fe.length;
    const Be = Date.now();
    Ee.lastSeenAt = Be;
    for (const _e2 of b) _e2.state.phase === "queued" && ((_g = f.get(_e2.message.type)) == null ? void 0 : _g.receiver) && (_e2.lastSeenAt = Be);
    if (ze.offset === qe) {
      const _e2 = f.get(Ee.message.type);
      (_e2 == null ? void 0 : _e2.receiver) ? Qe(Ee, _e2, ze.data, false) : st(Ee), x();
    } else {
      const _e2 = f.get(Ee.message.type);
      _e2 && xc(_e2, ze.offset / qe, h, Ee.message.metadata);
    }
  };
  return { makeWireAction: (h, T = {}) => {
    const C = !!T.sendToPending, G = !!T.receiveWhilePending, { maxPayloadBytes: ie, receiveScope: he } = T, fe = u.get(h);
    if (fe) {
      if (fe.sendToPending !== C || fe.receiveWhilePending !== G || fe.maxPayloadBytes !== ie || fe.receiveScope !== he) throw Ya(h);
      return fe.action;
    }
    const Ee = vt(h);
    if (!h || h.includes("\0") || Ee.length > 32) throw me("action type must be 1\u201332 non-null UTF-8 bytes");
    const qe = { ...ie === void 0 ? {} : { maxPayloadBytes: ie }, ...he ? { receiveScope: he } : {}, receiver: null, receiveGate: null, onReject: null, onProgress: Pe };
    f.set(h, qe);
    const lt = { onMessage: (ze) => {
      qe.receiver = ze, De(h, qe), x();
    }, onReceive: (ze) => {
      qe.receiveGate = ze, ze && De(h, qe), x();
    }, onReject: (ze) => {
      qe.onReject = ze;
    }, onProgress: (ze) => {
      qe.onProgress = ze;
    }, send: async (ze, ft, Je, it, Be) => {
      if (o(Be), ze === void 0) throw me("action data cannot be undefined");
      const [_e, nt] = Ml(ze), Ke = nt instanceof Uint8Array ? nt.byteLength : nt.size, Ze = Je === void 0 ? "" : ut(Je), rt = Je === void 0 ? 0 : Va(Ze);
      if (rt > 16384 - Ls) throw me("action metadata is too large");
      const at = Cs + rt + Ke <= Ko, i = at ? 0 : A++ >>> 0, k = at ? Cs : Ls, S = new Uint8Array(k + rt + (at ? Ke : 0));
      S[0] = 3, S[1] = (at ? mr : jn) | _e << 4, S.set(Ee, 2);
      const U = Nr(S);
      U.setUint16(34, rt), at || (U.setUint32(36, i), U.setFloat64(40, Ke)), rt > 0 && al(Ze, S.subarray(k, k + rt)), at && S.set(nt instanceof Uint8Array ? nt : new Uint8Array(await nt.arrayBuffer()), k + rt);
      const W = ft != null;
      if (!W && at && !C && s) {
        const de = s(S, (Se) => it == null ? void 0 : it(1, Se, Je), Be);
        if (typeof de == "boolean" ? de : await de) return;
      }
      const oe = W ? [ft].flat() : t(C), le = [...new Set(oe)];
      if (W && le.length === 0) throw bt("disconnected", "target peer list must not be empty");
      const ge = [];
      for (const de of le) {
        const Se = e(de, C);
        if (!Se || !Se.isOpen) {
          if (W) throw bt("disconnected", ro(de));
          continue;
        }
        ge.push([de, Se]);
      }
      const ye = [], pe = (de) => {
        de.catch(Pe), ye.push(de);
      };
      for (const [de, Se] of ge) if (at) {
        o(Be);
        const ce = y.get(de), Ne = ce ? void 0 : Se.waitForDrain(Be);
        if (Ne === true) {
          try {
            Se.sendFrame(S);
          } catch {
            throw D();
          }
          it == null ? void 0 : it(1, de, Je);
          continue;
        }
        const Ce = (async () => {
          await ce, await $e(Se, S, () => {
            if (o(Be), !Se.isOpen) throw D();
          }, Be, void 0, void 0, Ne), it == null ? void 0 : it(1, de, Je);
        })(), Oe = Ce.catch(Pe).finally(() => {
          y.get(de) === Oe && y.delete(de);
        });
        y.set(de, Oe), pe(ce && Be ? Le(Ce, Be) : Ce);
      } else pe(Xe(de, Se, S, i, nt, Ke, Je, it, Be));
      ye.length > 0 && await wt(ye);
    } };
    return u.set(h, { sendToPending: C, receiveWhilePending: G, maxPayloadBytes: ie, receiveScope: he, action: lt }), lt;
  }, handleData: (h, T) => {
    var _a2, _b, _c2;
    if (T.byteLength < 2 || T.byteLength > 65536) {
      R(h, j);
      return;
    }
    const C = new Uint8Array(T);
    if (C[0] !== 3) {
      R(h, "incompatible action protocol version");
      return;
    }
    const G = C[1] & 15, ie = C[1] >>> 4 & 3, he = C[1] >>> 6, fe = Nr(C);
    if (G > vr || ie > Ec || he > (G === jn ? 1 : 0) || G > jn && ie !== Kf || G !== Os && C.length > 16384) {
      R(h, j);
      return;
    }
    if (G >= Os) {
      $(h, C, G, fe);
      return;
    }
    const Ee = G === mr ? Cs : Ls;
    if (C.length < Ee) {
      R(h, Yt("header"));
      return;
    }
    const qe = Qf(C);
    let lt = u.get(qe);
    if (!lt && c && (c(qe), lt = u.get(qe)), !n(h, !!(lt == null ? void 0 : lt.receiveWhilePending))) return;
    const ze = fe.getUint16(34), ft = Ee + ze, Je = G === mr ? C.length - ft : fe.getFloat64(40), it = G === jn ? fe.getUint32(36) : 0;
    if (!qe || ft > C.length || !Number.isSafeInteger(Je) || Je < 0 || G === jn && (Je === 0 || ft !== C.length)) {
      R(h, Yt("proposal"));
      return;
    }
    let Be;
    try {
      ze && (Be = sn(On(C.subarray(Ee, ft))));
    } catch {
      R(h, Yt("metadata"));
      return;
    }
    const _e = { peerId: h, type: qe, format: ie, size: Je, metadata: Be };
    if (G === mr) {
      const Ze = C.subarray(ft), rt = se(_e);
      if (!rt) return;
      const [at, i] = rt, k = i ? `${qe}\0${i[0]}` : qe, S = !!(i ? i[2] : at.receiveGate);
      if (at.receiver && !S && !((_a2 = g.get(h)) == null ? void 0 : _a2.inlineQueues.has(k))) {
        let W;
        try {
          W = _s(Ze, ie, true);
        } catch {
          R(h, Is);
          return;
        }
        Us(at, W, h, Be);
        return;
      }
      if (!at.receiver && !S && !((_b = g.get(h)) == null ? void 0 : _b.inlineQueues.has(k))) {
        m(_e, Ze);
        return;
      }
      const U = { ...B(_e, i), kind: "inline", queueKey: k, state: { phase: "pending", data: Ze.slice() } };
      V(U, true) && (Q(h, k), M(U));
      return;
    }
    if ((_c2 = g.get(h)) == null ? void 0 : _c2.bulkTransfers.has(it)) {
      R(h, "duplicate action offer");
      return;
    }
    const nt = se(_e, it);
    if (!nt) return;
    const Ke = { ...B(_e, nt[1]), kind: "bulk", transferId: it, chunkSize: he === 1 ? Hi : Wi, state: { phase: "closed" } };
    V(Ke) && x();
  }, clearPeer: Ie };
}, Jf = 1e4, Zf = (e, t, n = Jf) => (t == null ? void 0 : t.aborted) ? false : e.readyState !== "open" || e.bufferedAmount <= (e.bufferedAmountLowThreshold ?? 0) ? e.readyState === "open" : new Promise((r) => {
  let s = false, o = null;
  const c = new AbortController(), a = () => d(true), u = () => d(false), f = (y) => {
    e[y]("bufferedamountlow", a), e[y]("close", u), e[y]("error", u);
  }, d = (y) => {
    s || (s = true, f("removeEventListener"), c.abort(), o = tt(o), r(y));
  };
  if (o = setTimeout(() => d(false), n), ht(o), f("addEventListener"), t == null ? void 0 : t.addEventListener("abort", u, { once: true, signal: c.signal }), e.readyState !== "open" || (t == null ? void 0 : t.aborted)) {
    d(false);
    return;
  }
  e.bufferedAmount <= (e.bufferedAmountLowThreshold ?? 0) && d(true);
}), ed = (e, t = 40, n = 150, r) => {
  if (e.isDead) return r == null ? void 0 : r(), Pe;
  e.setHandlers({ connect: Pe, data: Pe, stream: Pe, close: Pe, error: Pe });
  const s = e.channel;
  if (!s || s.readyState !== "open") return e.destroy(), r == null ? void 0 : r(), Pe;
  const o = typeof s.addEventListener == "function";
  let c;
  const a = () => {
    switch (c.phase) {
      case "done":
        return;
      case "grace-hold":
        tt(c.graceTimer), tt(c.capTimer);
        break;
      case "draining":
        tt(c.capTimer);
        break;
      default:
        Ge(c);
    }
    c = { phase: "done" }, o && (s.removeEventListener("bufferedamountlow", f), s.removeEventListener("close", a), s.removeEventListener("error", a)), e.destroy(), r == null ? void 0 : r();
  }, u = () => s.readyState !== "open" || typeof s.bufferedAmount != "number" || s.bufferedAmount <= 0, f = () => {
    c.phase === "draining" && u() && a();
  }, d = setTimeout(a, Math.max(t, n));
  if (ht(d), t > 0) {
    const y = setTimeout(() => {
      c.phase === "grace-hold" && (c = { phase: "draining", capTimer: c.capTimer }, f());
    }, t);
    ht(y), c = { phase: "grace-hold", graceTimer: y, capTimer: d };
  } else c = { phase: "draining", capTimer: d };
  if (o) {
    try {
      s.bufferedAmountLowThreshold = 0;
    } catch {
    }
    s.addEventListener("bufferedamountlow", f), s.addEventListener("close", a), s.addEventListener("error", a);
  }
  return t <= 0 && f(), a;
}, td = (e, t) => ({ get isOpen() {
  var _a2;
  const n = (_a2 = e.channel) == null ? void 0 : _a2.readyState;
  return (!t || t()) && !e.isDead && n !== "closing" && n !== "closed";
}, get bufferedAmount() {
  var _a2;
  return typeof ((_a2 = e.channel) == null ? void 0 : _a2.bufferedAmount) == "number" ? e.channel.bufferedAmount : 0;
}, get maxBulkFrameBytes() {
  var _a2, _b;
  const n = (_b = (_a2 = e.connection) == null ? void 0 : _a2.sctp) == null ? void 0 : _b.maxMessageSize;
  return typeof n == "number" && Number.isFinite(n) && n >= 65536 ? ds : Ko;
}, sendFrame: (n) => {
  e.sendData(n);
}, waitForDrain: (n) => (n == null ? void 0 : n.aborted) || t && !t() || e.isDead ? false : e.channel ? Zf(e.channel, n) : true, close: () => e.destroy() }), Qi = ["offer", "answer", "candidate"], nd = 131072, rd = 64, sd = 65536, od = 4096, id = 256, ad = 6e4, cd = /^[0-9A-Za-z]{20}$/, ud = /^[\w.~:!-]{1,64}$/, ld = (e, t, n) => `${e}|${t}|${n}`, fd = (e, t) => typeof e == "string" && e.length > 0 && e.length <= t && ud.test(e), Vo = (e) => typeof e == "string" && cd.test(e), dd = (e) => fd(e, rd), pd = (e) => {
  if (typeof e == "string") {
    if (e.length > nd) return null;
    try {
      const t = sn(e);
      return St(t) ? t : null;
    } catch {
      return null;
    }
  }
  return St(e) ? e : null;
}, Wn = (e, t) => typeof e[t] == "string" && e[t] ? e[t] : void 0, Xi = (e) => !!(e && typeof e == "object" && typeof e.signal == "function" && typeof e.destroy == "function" && typeof e.setHandlers == "function"), hd = (e) => {
  const t = pd(e);
  if (!t) return null;
  const n = typeof e == "string", r = Qi.some((s) => s in t);
  return "peerId" in t && !Vo(t.peerId) || (r || t.offerId !== void 0) && !dd(t.offerId) || Qi.some((s) => {
    if (!(s in t)) return false;
    const o = t[s];
    return typeof o != "string" || o === "" || o.length > (s === "candidate" ? od : sd);
  }) || "peer" in t && (n || t.peer !== void 0 && !Xi(t.peer)) ? null : [Wn(t, "peerId") ?? "", Wn(t, "offer"), Wn(t, "answer"), Wn(t, "candidate"), Wn(t, "offerId"), Xi(t.peer) ? t.peer : void 0];
}, gd = (e) => {
  var _a2;
  return oo([...e.turnConfig ?? [], ...((_a2 = e.rtcConfig) == null ? void 0 : _a2.iceServers) ?? []], /^turns?:/i);
}, Yi = (e) => e === "closed" || e === "failed", Tc = (e) => {
  const { connection: t, channel: n } = e;
  return e.isDead || Yi(t.connectionState) || Yi(t.iceConnectionState) || (n == null ? void 0 : n.readyState) === "closing" || (n == null ? void 0 : n.readyState) === "closed" ? "stale" : !n || n.readyState !== "open" ? "transient" : "live";
}, yd = 23333, md = 57333, Ji = 12, vd = 7533, wd = 23333, Zi = (e) => !e || e.phase === "exhausted", bd = (e) => (e == null ? void 0 : e.phase) === "retrying" || (e == null ? void 0 : e.phase) === "exhausted", mo = (e) => {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    (n == null ? void 0 : n.phase) === "retrying" && tt(n.retryTimer), e[t] = void 0;
  }
  e.length = 0;
}, Sd = (e) => {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    if (n) switch (n.phase) {
      case "reserved":
        e[t] = void 0;
        break;
      case "retrying":
        tt(n.retryTimer), e[t] = { phase: "exhausted", sendCandidate: n.sendCandidate };
        break;
      case "exhausted":
        break;
      default:
        Ge(n);
    }
  }
}, Pd = (e, t) => {
  const n = e.relaySlots[t];
  n && (n.phase === "retrying" && tt(n.retryTimer), e.relaySlots[t] = void 0);
}, br = (e, t) => {
  var _a2;
  ((_a2 = e == null ? void 0 : e.relaySlots[t]) == null ? void 0 : _a2.phase) === "reserved" && (e.relaySlots[t] = void 0);
}, Bt = (e, t, n) => (e.outbound.phase === "advertising" || e.outbound.phase === "answered") && (!t || e.outbound.peer === t) && (n === void 0 || e.outbound.offerId === n), vo = (e) => {
  switch (e.outbound.phase) {
    case "idle":
      return e.relaySlots.some(Boolean);
    case "allocating":
    case "advertising":
    case "answered":
      return true;
    default:
      return Ge(e.outbound);
  }
}, Ad = (e, t) => {
  let n = 0;
  for (const [r, s] of e) r === t || s.connection.phase === "connected" || ((s.outbound.phase === "allocating" || Bt(s) && !s.outbound.peer.isDead) && n++, s.inbound.phase === "answering" && !s.inbound.peer.isDead && n++);
  return n;
}, Mc = (e) => e.connection.phase === "disconnected" && e.inbound.phase === "idle" && !vo(e), Dt = (e) => {
  for (const [t, n] of e) Mc(n) && e.delete(t);
}, ns = /* @__PURE__ */ new WeakMap(), Wt = (e) => {
  e && !e.isDead && e.destroy();
}, ps = (e) => {
  ns.delete(e), e.inbound.phase === "answering" && tt(e.inbound.expiryTimer), e.inbound = { phase: "idle" };
}, Sr = (e, t) => {
  e.inbound.phase === "answering" && e.inbound.peer === t && (ps(e), e.connectedPeer !== t && Wt(t));
}, kd = (e, t) => {
  e.inbound.phase === "answering" && e.inbound.peer !== t && Wt(e.inbound.peer), ps(e), e.connection = { phase: "connected", peer: t, unhealthySince: null };
}, ea = (e, t) => {
  (e == null ? void 0 : e.connection.phase) === "connected" && e.connection.peer === t && (e.connection = { phase: "disconnected" });
}, rs = (e) => {
  if (e.connection.phase !== "connected") return;
  const { peer: t } = e.connection;
  e.connection = { phase: "disconnected" }, Wt(t);
}, zt = (e) => {
  switch (ns.delete(e), mo(e.relaySlots), e.outbound.phase) {
    case "idle":
    case "allocating":
      break;
    case "advertising":
    case "answered":
      tt(e.outbound.expiryTimer), e.outbound.peer !== e.connectedPeer && Wt(e.outbound.peer);
      break;
    default:
      Ge(e.outbound);
  }
  e.outbound = { phase: "idle" }, e.didReportFailure = false;
}, Rd = () => ({ outbound: { phase: "idle" }, inbound: { phase: "idle" }, connection: { phase: "disconnected" }, relaySlots: [], didReportFailure: false, get offerPeer() {
  return Bt(this) ? this.outbound.peer : null;
}, get answeringPeer() {
  return this.inbound.phase === "answering" ? this.inbound.peer : null;
}, get connectedPeer() {
  return this.connection.phase === "connected" ? this.connection.peer : null;
} }), Qn = (e, t) => {
  const n = e.get(t);
  if (n) return n;
  if (e.size >= id) {
    let s, o;
    for (const [a, u] of e) {
      if (Mc(u)) {
        s = a;
        break;
      }
      o === void 0 && u.connection.phase === "disconnected" && (o = a);
    }
    const c = s ?? o;
    if (c !== void 0) {
      const a = e.get(c);
      a && (Wt(a.answeringPeer), zt(a), ps(a)), e.delete(c);
    }
  }
  const r = Rd();
  return e.set(t, r), r;
}, Ed = (e) => {
  const { appId: t, getRoomId: n, config: r, peerStates: s, getRootTopicPlaintext: o, rootTopicP: c, selfTopicP: a, toPlain: u, toCipher: f, isLeaving: d, onError: y, checkoutOffers: g, claimLeasedOffer: v, reclaimLeasedOffer: b, encryptOffer: N, initPeer: K, connectPeer: q, disconnectPeer: A, announceIntervals: L, announceIntervalMs: I, getSelfIdNow: O, selfIdP: J, onPeerDiscovered: Z, shouldConnectPeer: D } = e, j = [], ne = Mt(512), ae = Mt(512), we = /* @__PURE__ */ new Map(), R = () => J, F = (E) => co(so(o(), E)), ee = (E) => Ad(s, E) >= 64, P = (E, te) => {
    if (d() || E.connection.phase === "connected" || E.didReportFailure) return;
    E.didReportFailure = true;
    const Q = gd(r);
    y == null ? void 0 : y({ code: "peer-connect-failed", peerId: te, turnConfigured: Q, message: `could not connect to peer ${te} after exchanging SDP; ${Q ? "verify TURN server URLs and credentials" : "configure TURN via turnConfig or rtcConfig.iceServers"}`, appId: t, roomId: n() });
  }, H = (E, te, Q) => {
    const x = `${E}:${te}`, _ = Date.now(), ve = ne.get(x);
    ve !== void 0 && _ - ve < ad || (ne.set(x, _), y == null ? void 0 : y({ code: "decrypt-failed", peerId: E, stage: te, message: `failed to decrypt ${te} (incorrect password or corrupted signal)`, appId: t, roomId: n(), cause: Q }));
  }, X = (E, te) => {
    const Q = setTimeout(() => {
      const x = s.get(E);
      !x || x.connection.phase === "connected" || x.inbound.phase !== "answering" || x.inbound.peer !== te || (x.inbound.didSendAnswer && P(x, E), Sr(x, te), Dt(s));
    }, wd);
    return ht(Q), Q;
  }, z = (E, te, Q = md) => {
    const x = setTimeout(() => {
      const _ = s.get(E);
      !_ || _.connection.phase === "connected" || !Bt(_, void 0, te) || (_.outbound.phase === "answered" && P(_, E), zt(_), Dt(s));
    }, Q);
    return ht(x), x;
  }, re = (E, te, Q, x) => {
    const _ = () => {
      E.offerPeer === Q && E.connection.phase !== "connected" && (E.outbound.phase === "answered" && P(E, te), zt(E)), A(Q, te), Dt(s);
    };
    Q.setHandlers({ connect: () => {
      ae.delete(te), q(Q, te);
    }, ...x ? { signal: x } : {}, close: _, error: _ });
  }, Ae = (E, te) => {
    switch (E.outbound.phase) {
      case "advertising":
        return Promise.resolve([E.outbound.peer, E.outbound.offerSdp, E.outbound.offerId]);
      case "allocating":
        return E.outbound.promise;
      case "answered":
        return Promise.resolve(null);
      case "idle":
        break;
      default:
        return Ge(E.outbound);
    }
    if (ee(te)) return Promise.resolve(null);
    const Q = () => d() || E.outbound.phase !== "allocating" || E.outbound.promise !== _, _ = (async () => {
      const ve = O() ?? await R();
      let m;
      try {
        m = (await g(1, false, (Ie, Le) => N(Ie, ve, Le), Ji))[0];
      } catch (Ie) {
        if (Q()) return null;
        throw Ie;
      }
      if (!m) {
        if (Q()) return null;
        throw me("failed to allocate offer peer");
      }
      const { peer: B, offer: M } = m, V = m.offerId || cs(Ji);
      if (Q()) return B.destroy(), null;
      const De = [], se = z(te, V);
      return E.didReportFailure = false, E.outbound = { phase: "advertising", peer: B, offerId: V, offerSdp: M, expiryTimer: se, bufferedCandidates: De }, re(E, te, B, (Ie) => {
        if (E.connection.phase !== "connected" && Bt(E, B, V)) {
          E.outbound.bufferedCandidates.push(Ie);
          for (const Le of E.relaySlots) bd(Le) && Le.sendCandidate(Ie);
        }
      }), [B, M, V];
    })().finally(() => {
      E.outbound.phase === "allocating" && E.outbound.promise === _ && (E.outbound = { phase: "idle" });
    });
    return E.outbound = { phase: "allocating", promise: _ }, _;
  }, Re = (E, te, Q, x) => {
    let _ = [];
    Bt(E) ? (tt(E.outbound.expiryTimer), E.outbound.peer === Q && E.outbound.offerId === x ? (_ = E.outbound.bufferedCandidates, Sd(E.relaySlots)) : (mo(E.relaySlots), E.connectedPeer !== E.outbound.peer && Wt(E.outbound.peer))) : mo(E.relaySlots), E.outbound = { phase: "answered", peer: Q, offerId: x, expiryTimer: z(te, x, yd), bufferedCandidates: _ };
  }, Ve = async (E, te, Q, x = 0) => {
    var _a2, _b;
    const _ = s.get(te);
    if (!_ || _.connection.phase === "connected" || _.inbound.phase !== "idle" || _.outbound.phase === "answered") {
      br(_, E);
      return;
    }
    if (((_a2 = _.relaySlots[E]) == null ? void 0 : _a2.phase) !== "reserved") return;
    let ve, m, B;
    try {
      [ve, m, B] = await wt([F(te), Ae(_, te), R()]);
    } catch ($e) {
      throw br(_, E), Dt(s), $e;
    }
    if (!m) {
      br(_, E);
      return;
    }
    if (d()) {
      zt(_);
      return;
    }
    if ((($e) => $e.connection.phase === "connected")(_) || _.inbound.phase !== "idle" || _.outbound.phase !== "advertising" || ((_b = _.relaySlots[E]) == null ? void 0 : _b.phase) !== "reserved") {
      br(_, E);
      return;
    }
    const [V, De, se] = m, Ie = ($e) => {
      d() || _.connection.phase === "connected" || !Bt(_, V, se) || $e.type !== "candidate" || f($e, B, se).then((Xe) => {
        !d() && _.connection.phase !== "connected" && Bt(_, V, se) && Q(ve, ut({ peerId: B, offerId: se, candidate: Xe.sdp }));
      }).catch(Pe);
    }, Le = setTimeout(() => {
      if (x >= 2 || d() || _.connection.phase === "connected" || _.inbound.phase !== "idle" || _.outbound.phase !== "advertising" || _.outbound.peer !== V || _.outbound.offerId !== se) {
        const $e = s.get(te);
        $e && $e.connection.phase !== "connected" && (x >= 2 && Bt($e, V, se) ? $e.relaySlots[E] = { phase: "exhausted", sendCandidate: Ie } : Pd($e, E), Dt(s));
        return;
      }
      _.relaySlots[E] = { phase: "reserved" }, Ve(E, te, Q, x + 1).catch(($e) => {
        d() || en("signal", $e);
      });
    }, x === 0 && L[E] === void 0 ? 2e3 : (L[E] ?? I) * 0.9);
    ht(Le), Q(ve, ut({ peerId: B, offerId: se, offer: De })), _.relaySlots[E] = { phase: "retrying", retryTimer: Le, sendCandidate: Ie }, _.outbound.bufferedCandidates.forEach(Ie);
  }, Ue = async (E, te, Q, x, _, ve) => {
    if (E.inbound.phase !== "answering" || E.inbound.peer.isDead || E.inbound.replay.offer !== x || E.inbound.replay.offerId !== _) return;
    const { replay: m } = E.inbound, B = m.lastSentAt[te];
    if (B !== void 0 && Date.now() - B < 1e3) return;
    m.lastSentAt[te] = Date.now();
    const M = await F(Q);
    if (!d() && E.connection.phase !== "connected" && E.inbound.phase === "answering" && E.inbound.replay === m) {
      const V = (De) => {
        ve(M, De);
      };
      m.relays[te] = V, m.messages.forEach(V);
    }
  }, et = (E, te, Q) => {
    const x = `${E}|${Q}|${te}`, _ = we.get(x);
    if (_) return _;
    const ve = u({ type: "offer", sdp: te }, E, Q).catch((m) => (H(E, "offer", m), null)).finally(() => {
      we.delete(x);
    });
    return we.set(x, ve), ve;
  }, st = async (E, te, Q, x, _) => {
    if (!x) return;
    const ve = O() ?? await R();
    if (D && !D(te, "inbound")) return;
    const m = s.get(te);
    if (m && (m.inbound.phase === "answering" || m.outbound.phase === "answered")) return Ue(m, E, te, Q, x, _);
    if (m && vo(m) && ve < te || ee(te)) return;
    const B = await et(te, Q, x);
    if (!B || d()) return;
    const M = Qn(s, te);
    if (M.connection.phase === "connected") return;
    if (M.inbound.phase === "answering" || M.outbound.phase === "answered") return Ue(M, E, te, Q, x, _);
    if (vo(M)) {
      if (ve < te) return;
      zt(M);
    }
    if (ee(te)) {
      Dt(s);
      return;
    }
    const V = K(false, r), De = { offer: Q, offerId: x, messages: [], lastSentAt: [], relays: [] };
    De.lastSentAt[E] = Date.now();
    const se = X(te, V);
    let Ie = [];
    M.didReportFailure = false, M.inbound = { phase: "answering", peer: V, offerId: x, expiryTimer: se, didSendAnswer: false, replay: De };
    const Le = (ke) => !d() && ke.inbound.phase === "answering" && ke.inbound.peer === V && !V.isDead, $e = () => {
      M.inbound.phase === "answering" && M.inbound.peer === V && M.connection.phase !== "connected" && M.inbound.didSendAnswer && P(M, te), Sr(M, V), A(V, te), Dt(s);
    };
    if (V.setHandlers({ connect: () => {
      ae.delete(te), q(V, te);
    }, close: $e, error: $e }), V.isDead) {
      Sr(M, V), Dt(s);
      return;
    }
    const Xe = await F(te);
    if (!Le(M) || M.inbound.replay !== De) return;
    De.relays[E] = (ke) => {
      _(Xe, ke);
    };
    let $ = Promise.resolve();
    const ue = (ke) => {
      $ = $.then(async () => {
        const h = await f(ke, ve, x);
        if (!Le(M)) return;
        const T = ke.type === "answer", C = ut({ peerId: ve, offerId: x, ...T ? { answer: h.sdp } : { candidate: h.sdp } }), G = Date.now();
        if (De.messages.push(C), De.relays.forEach((ie, he) => {
          ie && (De.lastSentAt[he] = G, ie(C));
        }), T && Ie) {
          M.inbound.didSendAnswer = true;
          const ie = Ie;
          Ie = null, ie.forEach(ue);
        }
      }).catch(Pe);
    };
    V.setHandlers({ signal: (ke) => {
      !Le(M) || ke.type !== "answer" && ke.type !== "candidate" || (ke.type === "candidate" && Ie ? Ie.push(ke) : ue(ke));
    } }), await V.signal(B);
  }, He = async (E, te, Q, x) => {
    if (!Q) return;
    const _ = s.get(E);
    if (!x && !(_ == null ? void 0 : _.offerPeer) && !(_ == null ? void 0 : _.answeringPeer)) return;
    let ve;
    try {
      ve = await u({ type: tc, sdp: te }, E, Q);
    } catch {
      return;
    }
    const m = s.get(E), B = x && !x.isDead ? x : m && Bt(m, void 0, Q) ? m.outbound.peer : (m == null ? void 0 : m.inbound.phase) === "answering" && m.inbound.offerId === Q ? m.inbound.peer : null;
    B && !B.isDead && B.signal(ve);
  }, ot = async (E, te, Q, x) => {
    if (!Q) return;
    if (D && !D(E, x ? "outbound" : "inbound")) {
      if (x) b(x), Wt(x);
      else {
        const M = s.get(E);
        M && Bt(M, void 0, Q) && zt(M);
      }
      return;
    }
    const _ = O() ?? await R();
    let ve;
    try {
      ve = await u({ type: "answer", sdp: te }, E, Q);
    } catch (M) {
      x && (b(x), Wt(x)), H(E, "answer", M);
      return;
    }
    if (x) {
      if (!v(x) || x.isDead) {
        Wt(x);
        return;
      }
      const M = Qn(s, E);
      if (M.connection.phase === "connected" || M.outbound.phase === "answered" || M.inbound.phase === "answering" && !M.inbound.peer.isDead && _ > E) {
        x.destroy();
        return;
      }
      M.inbound.phase === "answering" && Sr(M, M.inbound.peer), zt(M), Re(M, E, x, Q), re(M, E, x), x.signal(ve);
      return;
    }
    const m = s.get(E);
    if (!m || m.outbound.phase !== "advertising" || m.outbound.offerId !== Q || m.outbound.peer.isDead) return;
    const B = m.outbound.peer;
    Re(m, E, B, Q), B.signal(ve);
  }, Qe = (E, te, Q, x) => F(E).then((_) => {
    !d() && Q.connection.phase !== "connected" && Q.inbound.phase === "idle" && Q.outbound.phase !== "answered" && x(_, ut({ peerId: te }));
  });
  return { handleMessage: (E) => async (te, Q, x) => {
    var _a2;
    try {
      if (d()) return;
      j[E] = x;
      const _ = hd(Q);
      if (!_) return;
      const [ve, m, B, M, V, De] = _, se = O();
      if (!ve || se && ve === se) return;
      const [Ie, Le, $e] = await wt([c, a, R()]);
      if (ve === $e || d() || te !== Ie && te !== Le) return;
      Z == null ? void 0 : Z(ve, E, x);
      const Xe = s.get(ve);
      if ((Xe == null ? void 0 : Xe.connection.phase) === "connected") {
        const $ = Tc(Xe.connection.peer);
        if ($ === "live") {
          Xe.connection.unhealthySince = null;
          return;
        }
        if ($ === "stale") rs(Xe);
        else {
          const ue = Date.now();
          if (ue - ((_a2 = Xe.connection).unhealthySince ?? (_a2.unhealthySince = ue)) < vd) return;
          rs(Xe);
        }
      }
      if (!m && !B && !M) {
        if (D && !D(ve, "outbound") || !s.has(ve) && ee(ve)) return;
        const $ = Qn(s, ve);
        if ($.inbound.phase !== "idle" || $.connection.phase === "connected" || $.outbound.phase === "answered") return;
        if ($e >= ve && !$.offerPeer) {
          let ue = ns.get($);
          ue || (ue = [], ns.set($, ue));
          const ke = ue[E];
          if (ke !== void 0 && Date.now() - ke < 1e3) return;
          ue[E] = Date.now(), await Qe(ve, $e, $, x);
          return;
        }
        Zi($.relaySlots[E]) && ($.relaySlots[E] = { phase: "reserved" }, await Ve(E, ve, x));
        return;
      }
      if (m) {
        await st(E, ve, m, V, x);
        return;
      }
      if (M) {
        await He(ve, M, V, De);
        return;
      }
      B && await ot(ve, B, V, De);
    } catch (_) {
      d() || en("signal", _);
    }
  }, dialPeer: (E) => {
    Vo(E) && R().then((te) => {
      if (d() || !E || E === te || D && !D(E, "outbound") || !s.has(E) && ee(E)) return;
      const Q = Qn(s, E);
      if (Q.connection.phase === "connected" || Q.inbound.phase !== "idle" || Q.outbound.phase !== "idle" || !j.some(Boolean)) return;
      const x = Date.now(), _ = ae.get(E);
      if (_ && x < _[1]) return;
      const ve = ((_ == null ? void 0 : _[0]) ?? 0) + 1;
      ae.set(E, [ve, x + Math.min(6e4, 2e3 * 2 ** (ve - 1))]), j.forEach((m, B) => {
        m && (te < E ? Q.outbound.phase !== "answered" && Zi(Q.relaySlots[B]) && (Q.relaySlots[B] = { phase: "reserved" }, Ve(B, E, m).catch((M) => {
          d() || en("signal", M);
        })) : Qe(E, te, Q, m).catch(Pe));
      });
    }).catch((te) => {
      d() || en("signal", te);
    });
  } };
}, xd = 18e4, Td = 20, ta = me("room left while preparing offer"), Md = (e) => {
  const t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new Set();
  let r = false;
  const s = (u) => {
    const f = t.get(u);
    (f == null ? void 0 : f.phase) === "leased" && tt(f.timer), n.delete(u), t.set(u, { phase: "closed" }), u.destroy();
  }, o = (u) => {
    if (r || u.isDead) return false;
    const f = t.get(u);
    if (!f) return true;
    switch (f.phase) {
      case "leased":
        return tt(f.timer), n.delete(u), t.set(u, { phase: "claimed" }), true;
      case "claimed":
        return true;
      case "closed":
        return false;
      default:
        return Ge(f);
    }
  }, c = (u) => {
    var _a2;
    ((_a2 = t.get(u)) == null ? void 0 : _a2.phase) === "leased" && s(u);
  }, a = (u, f, d, y = Td) => {
    const g = async (v = false) => {
      if (r) throw ta;
      const b = e(), N = cs(y);
      try {
        const K = await d(b, N);
        if (r) throw ta;
        if (f) {
          const q = setTimeout(() => {
            var _a2;
            ((_a2 = t.get(b)) == null ? void 0 : _a2.phase) === "leased" && s(b);
          }, xd);
          return ht(q), t.set(b, { phase: "leased", timer: q }), n.add(b), { peer: b, offer: K, offerId: N, claim: () => {
            o(b);
          }, reclaim: () => c(b) };
        }
        return { peer: b, offer: K, offerId: N };
      } catch (K) {
        if (b.destroy(), !v && !r) return g(true);
        throw K;
      }
    };
    return wt(Ja(u, () => g()));
  };
  return { checkout: a, getOffers: (u, f) => a(u, true, f), claimLeased: o, reclaimLeased: c, destroy: () => {
    if (!r) {
      r = true;
      for (const u of Array.from(n)) s(u);
    }
  } };
}, Od = 15e3, Dd = 150, Cd = 5e3, na = "icecandidate", ra = "icegatheringstatechange", Ld = "iceconnectionstatechange", Pr = "offer", Bd = "answer", Id = /out of range/i, _d = 128, Ud = 8192;
var sa = (e, t) => {
  const { trickleIce: n, rtcConfig: r, rtcPolyfill: s, turnConfig: o } = t, c = [...(r == null ? void 0 : r.iceServers) ?? $d, ...o ?? []], a = new (s ?? RTCPeerConnection)({ ...r, iceServers: c });
  let u, f, d;
  const y = /* @__PURE__ */ new Set(), g = n !== false, v = [];
  let b = null;
  const N = /* @__PURE__ */ new WeakMap(), K = (m, B) => {
    let M = N.get(m);
    M || (M = /* @__PURE__ */ new Set(), N.set(m, M)), M.add(B);
  };
  let q = { phase: "open" }, A = { phase: "idle" }, L = 0, I = { phase: "unbound-idle" }, O;
  const J = [];
  let Z;
  const D = [];
  let j = null, ne, ae = null;
  const we = e ? new Promise((m) => {
    ae = m;
  }) : void 0, R = (m) => {
    if (ae) {
      const B = ae;
      ae = null, ne = m, B(m);
    }
  }, F = () => {
    q.phase === "disconnected-grace" && (tt(q.timer), q = { phase: "open" });
  }, ee = () => {
    q.phase !== "closed" && (q.phase === "disconnected-grace" && tt(q.timer), q = { phase: "closed" }, L += 1, A = { phase: "idle" }, R(), I.phase === "unbound-buffering" && (tt(I.deadlineTimer), I.queue.length = 0), I = { phase: "closed" }, O = void 0, J.length = 0, Z = void 0, D.length = 0, v.length = 0, y.forEach((m) => m()), f == null ? void 0 : f());
  }, P = () => (q.phase !== "closed" && a.connectionState === "closed" && ee(), q.phase === "closed"), H = (m) => {
    if (!P()) {
      if (m.type === Pr) {
        const B = ae !== null;
        if (R(m), B && !O && !a.remoteDescription) return;
      }
      O ? O(m) : J.push(m);
    }
  }, X = (m) => {
    if (!P()) {
      if (O) {
        const B = O;
        O = (M) => {
          B(M), m(M);
        };
        return;
      }
      O = m;
      for (const B of J.splice(0)) {
        if (P() || !O) break;
        O(B);
      }
    }
  }, z = (m) => {
    var _a2, _b;
    return { type: ((_a2 = m.localDescription) == null ? void 0 : _a2.type) ?? Pr, sdp: ((_b = m.localDescription) == null ? void 0 : _b.sdp) ?? "" };
  }, re = () => {
    var _a2, _b, _c2;
    return ((_c2 = (_b = (_a2 = a.remoteDescription) == null ? void 0 : _a2.sdp) == null ? void 0 : _b.match(/a=ice-ufrag:(\S+)/)) == null ? void 0 : _c2[1]) ?? null;
  }, Ae = (m) => {
    var _a2;
    if (!a.remoteDescription) return false;
    const B = (((_a2 = a.remoteDescription.sdp) == null ? void 0 : _a2.match(/^m=/gm)) ?? []).length;
    if (typeof m.sdpMLineIndex == "number" && B > 0 && m.sdpMLineIndex >= B) return false;
    const M = re();
    return !(M && m.usernameFragment && m.usernameFragment !== M);
  }, Re = async (m) => {
    try {
      return await a.addIceCandidate(m), true;
    } catch (B) {
      if (B instanceof Error && Id.test(B.message) && typeof m.sdpMLineIndex == "number") return false;
      throw B;
    }
  }, Ve = (m) => {
    P() || (v.length >= _d && v.shift(), v.push(m));
  }, Ue = async () => {
    if (P() || !a.remoteDescription || b && (await b, P() || !a.remoteDescription) || !v.length) return;
    const m = (async () => {
      const B = [];
      try {
        for (; !P() && a.remoteDescription && v.length > 0; ) {
          const M = re();
          for (const V of v.splice(0)) {
            if (P()) return;
            M && V.usernameFragment && V.usernameFragment !== M || (!Ae(V) || !await Re(V)) && B.push(V);
          }
        }
      } finally {
        if (!P() && B.length > 0) {
          const M = v.splice(0);
          for (const V of [...B, ...M]) Ve(V);
        }
        b = null;
      }
    })();
    b = m, await m;
  }, et = async (m) => {
    if (b || !Ae(m)) {
      Ve(m);
      return;
    }
    await Re(m) || Ve(m);
  }, st = (m) => {
    m.binaryType = "arraybuffer", m.bufferedAmountLowThreshold = 65535;
    const B = () => {
      on("excessive pre-handler data; disconnecting peer"), m.close(), a.close(), ee();
    };
    m.onmessage = (M) => {
      if (j !== m || I.phase === "closed") return;
      const V = M.data, De = I.phase === "bound" ? ds : $f;
      if (!(V instanceof ArrayBuffer) && !ArrayBuffer.isView(V) || V.byteLength > De) {
        B();
        return;
      }
      switch (I.phase) {
        case "bound":
          I.handler(V);
          break;
        case "unbound-idle": {
          const se = setTimeout(B, Rc);
          ht(se), I = { phase: "unbound-buffering", queue: [V], deadlineTimer: se };
          break;
        }
        case "unbound-buffering":
          if (I.queue.length >= 64) {
            B();
            return;
          }
          I.queue.push(V);
          break;
        default:
          Ge(I);
      }
    }, m.onopen = () => {
      j === m && !P() && (u == null ? void 0 : u());
    }, m.onclose = () => {
      j === m && ee();
    }, m.onerror = ({ error: M }) => {
      j !== m || P() || (M == null ? void 0 : M.errorDetail) === "sctp-failure" && (M.sctpCauseCode === 12 || /^User-Initiated Abort\b/.test(M.message)) || (d == null ? void 0 : d(It(M, "data channel error")));
    };
  }, He = oo(c, /^turns?:/i), ot = !He && oo(c, /^stuns?:/i), Qe = He ? /\btyp relay\b/ : ot ? /\btyp (?:srflx|relay|prflx)\b/ : /\btyp (?:host|srflx|relay|prflx)\b/, E = async (m) => (await new Promise((B) => {
    let M = false, V = null;
    const De = () => {
      M || (M = true, tt($e), tt(V), m.removeEventListener(ra, Ie), m.removeEventListener(na, Le), y.delete(De), B());
    }, se = (Xe = "") => {
      var _a2;
      if (M) return;
      const $ = `${((_a2 = m.localDescription) == null ? void 0 : _a2.sdp) ?? ""}
${Xe}`;
      Qe.test($) && (tt(V), V = setTimeout(De, Dd), ht(V));
    }, Ie = () => {
      m.iceGatheringState === "complete" || P() ? De() : se();
    }, Le = (Xe) => {
      const { candidate: $ } = Xe;
      $ ? se($.candidate) : De();
    }, $e = setTimeout(De, Od);
    ht($e), y.add(De), m.addEventListener(ra, Ie), m.addEventListener(na, Le), Ie();
  }), z(m)), te = () => g ? z(a) : E(a), Q = async (m) => {
    const B = await te();
    if (!(P() || m !== void 0 && L !== m)) return H(B), B;
  };
  e ? (j = a.createDataChannel("data"), st(j)) : a.ondatachannel = ({ channel: m }) => {
    j && j !== m && (j.onopen = j.onclose = j.onmessage = j.onerror = null, j.close()), j = m, st(m);
  };
  const x = async () => {
    if (P() || A.phase !== "idle" || a.signalingState !== "stable") {
      P() && R();
      return;
    }
    const m = ++L;
    A = { phase: "making-offer", gen: m };
    try {
      return await a.setLocalDescription(), P() || L !== m ? void 0 : await Q(m);
    } catch (B) {
      if (L !== m) return;
      R(), d == null ? void 0 : d(It(B, "failed to create local offer"));
    } finally {
      A.phase === "making-offer" && A.gen === m && (A = { phase: "idle" });
    }
  };
  a.onnegotiationneeded = () => {
    x();
  }, a.onicecandidate = ({ candidate: m }) => {
    if (!g || !m || P()) return;
    const B = typeof m.toJSON == "function" ? m.toJSON() : { candidate: m.candidate, sdpMid: m.sdpMid, sdpMLineIndex: m.sdpMLineIndex, usernameFragment: m.usernameFragment };
    H({ type: tc, sdp: JSON.stringify(B) });
  };
  const _ = () => a.connectionState === "disconnected" || a.iceConnectionState === "disconnected", ve = () => {
    if (q.phase === "closed") return;
    const m = a.connectionState, B = a.iceConnectionState;
    if (m === "failed" || m === "closed" || B === "failed" || B === "closed") {
      ee();
      return;
    }
    if (m === "connected" || m === "connecting" || B === "connected" || B === "completed" || B === "checking") {
      F();
      return;
    }
    if (_() && q.phase === "open") {
      const M = setTimeout(() => {
        q.phase === "disconnected-grace" && (q = { phase: "open" }, _() && ee());
      }, Cd);
      ht(M), q = { phase: "disconnected-grace", timer: M };
    }
  };
  return a.onconnectionstatechange = ve, a.addEventListener(Ld, ve), a.ontrack = (m) => {
    const B = m.streams[0];
    B && !P() && (Z ? Z(B) : D.push(B));
  }, e && queueMicrotask(() => {
    var _a2;
    !P() && A.phase === "idle" && a.signalingState === "stable" && !a.localDescription && ((_a2 = a.onnegotiationneeded) == null ? void 0 : _a2.call(a, new Event("negotiationneeded")));
  }), { connection: a, get channel() {
    return j;
  }, get isDead() {
    return P();
  }, getOffer: async () => {
    var _a2;
    if (e) return ae !== null ? we : ne && !a.remoteDescription ? ne : ((_a2 = a.localDescription) == null ? void 0 : _a2.type) === Pr ? te() : ne;
  }, async signal(m) {
    var _a2;
    if (!P()) {
      if (m.type === "candidate") {
        if (m.sdp.length > Ud) return;
        try {
          const B = JSON.parse(m.sdp);
          B && typeof B == "object" && await et(B);
        } catch (B) {
          d == null ? void 0 : d(It(B, "failed to parse remote candidate"));
        }
        return;
      }
      if (!((j == null ? void 0 : j.readyState) === "open" && !((_a2 = m.sdp) == null ? void 0 : _a2.includes("a=rtpmap")))) try {
        const B = { ...m };
        if (m.type === Pr) {
          const M = A.phase === "making-offer" || a.signalingState !== "stable" && A.phase !== "applying-remote-answer";
          return M && e ? void 0 : (L += 1, A.phase === "making-offer" && (A = { phase: "idle" }), M && a.signalingState !== "stable" ? await wt([a.setLocalDescription({ type: "rollback" }), a.setRemoteDescription(B)]) : await a.setRemoteDescription(B), await Ue(), await a.setLocalDescription(), await Q());
        }
        if (m.type === Bd) {
          A = { phase: "applying-remote-answer" };
          try {
            await a.setRemoteDescription(B), await Ue();
          } finally {
            A.phase === "applying-remote-answer" && (A = { phase: "idle" });
          }
        }
      } catch (B) {
        P() || (d == null ? void 0 : d(It(B, "failed to apply remote signal")));
      }
    }
  }, sendData: (m) => {
    if (P() || !j || j.readyState === "closing" || j.readyState === "closed") throw me(Cn);
    j.send(m);
  }, destroy: () => {
    F(), R(), j == null ? void 0 : j.close(), a.connectionState !== "closed" && a.close(), ee();
  }, setHandlers: (m) => {
    if ("connect" in m && (u = m.connect), "close" in m && (f = m.close), "error" in m && (d = m.error), "data" in m && I.phase !== "closed") {
      const B = m.data;
      if (B) {
        let M = [];
        I.phase === "unbound-buffering" && (tt(I.deadlineTimer), M = I.queue.splice(0)), I = { phase: "bound", handler: B };
        for (const V of M) {
          if (I.phase !== "bound") break;
          I.handler(V);
        }
      } else I.phase === "unbound-buffering" && tt(I.deadlineTimer), I = { phase: "unbound-idle" };
    }
    if (m.signal && X(m.signal), "stream" in m && !P() && (Z = m.stream, Z)) for (const B of D.splice(0)) {
      if (P() || !Z) break;
      Z(B);
    }
  }, addStream: (m) => {
    m.getTracks().forEach((B) => {
      const M = a.addTrack(B, m);
      M && K(m, M);
    });
  }, removeStream: (m) => {
    const B = N.get(m);
    if (B) {
      N.delete(m), B.forEach((V) => a.removeTrack(V));
      return;
    }
    const M = m.getTracks();
    a.getSenders().forEach((V) => {
      V.track && M.includes(V.track) && a.removeTrack(V);
    });
  }, addTrack: (m, B) => {
    const M = a.addTrack(m, B);
    M && B && K(B, M);
  }, removeTrack: (m, B) => {
    var _a2;
    const M = a.getSenders().find((V) => V.track === m);
    M && (B && ((_a2 = N.get(B)) == null ? void 0 : _a2.delete(M)), a.removeTrack(M));
  }, replaceTrack: (m, B) => {
    const M = a.getSenders().find((V) => V.track === m);
    if (M) return M.replaceTrack(B);
  } };
};
const $d = [...Ja(3, (e, t) => `stun:stun${t || ""}.l.google.com:19302`), "stun:stun.cloudflare.com:3478"].map((e) => ({ urls: e })), qd = 64, Ar = "request failed", Oc = (e) => St(e) && typeof e.r == "string" ? e : null, $s = (e) => {
  const t = Oc(e);
  return t ? [t.r, Object.hasOwn(t, "m") ? t.m : void 0] : null;
}, Fd = (e) => {
  const t = Oc(e);
  return t ? [t.r, typeof t.e == "string" ? t.e : void 0] : null;
}, Rn = (e, t) => t === void 0 ? e : { ...e, metadata: t }, Nd = (e, t) => e ? { [to]: e, ...t === void 0 ? {} : { m: t } } : t, qs = (e) => {
  if (St(e) && to in e) {
    const t = e[to];
    return [sc(t) ? t : void 0, Object.hasOwn(e, "m") ? e.m : void 0];
  }
  return [void 0, e];
}, jd = (e) => {
  if (e === void 0) return [];
  const t = [e].flat().filter(Boolean);
  if (t.length === 0) throw me("action roles must contain at least one non-empty role name");
  return [...new Set(t)].sort();
}, zd = (e, t) => e.length === t.length && e.every((n, r) => n === t[r]), Wd = (e) => {
  const t = e.getTransport, n = (O) => e.getPeerUserId ? e.getPeerUserId(O) : O, r = (O) => e.getPeerRoles ? [...e.getPeerRoles(O)] : [], s = (O) => {
    var _a2;
    return !!((_a2 = t(O, false)) == null ? void 0 : _a2.isOpen);
  }, o = /* @__PURE__ */ Object.create(null), c = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), { makeWireAction: f, handleData: d, clearPeer: y } = Yf({ resolveTransport: t, getPeerIds: e.getPeerIds, canReceiveFromPeer: e.canReceiveFromPeer, onPeerError: e.onPeerError, ...e.broadcastInline ? { broadcastInline: e.broadcastInline } : {}, ...e.onUnknownType ? { onUnknownType: e.onUnknownType } : {}, ...e.maxReceiveBytes === void 0 ? {} : { maxReceiveBytes: e.maxReceiveBytes } }), g = (O, J) => O ? (Z, D) => {
    const j = O(Z, Rn({ peerId: D, userId: n(D) }, J));
    j && typeof j.then == "function" && Promise.resolve(j).catch((ne) => en("progress handler", ne));
  } : void 0, v = (O, J = {}) => {
    const Z = O.startsWith("@_") ? O : `@_${O}`, D = !!J.sendToPending, j = f(Z, J), ne = c.get(Z);
    if (ne) return ne;
    const [ae, we, , R] = Zt("progress handler"), [F, ee] = Zt("internal action handler", (z) => {
      j.onMessage(z ? (re, Ae, Re) => {
        ee(re, Rn({ peerId: Ae, userId: n(Ae) }, Re));
      } : null);
    }), [P, H] = ks("onReceive", (z) => {
      j.onReceive(z ? (re) => z(Rn({ peerId: re.peerId, userId: n(re.peerId), byteLength: re.byteLength, signal: re.signal }, re.metadata)) : null);
    });
    j.onProgress((z, re, Ae) => {
      R() && we(z, Rn({ peerId: re, userId: n(re) }, Ae));
    });
    const X = Tn({ send: (z, re = {}) => j.send(z, e.resolveSendTarget ? e.resolveSendTarget(re.target, D) : re.target, re.metadata, g(re.onProgress, re.metadata), re.signal), onMessage: (z, re) => F(z, re), onReceiveProgress: (z, re) => ae(z, re), onReceive: (z, re) => P(z ?? H(), re) }, ["onMessage", "onReceive", "onReceiveProgress"]);
    return c.set(Z, X), X;
  }, b = (O) => {
    const J = O.state;
    switch (J.phase) {
      case "done":
        return false;
      case "preparing":
        return O.state = { phase: "done" }, a.delete(O.requestId), J.controller.abort(), true;
      case "active":
        return O.state = { phase: "done" }, tt(J.timer), a.delete(O.requestId), J.controller.abort(), true;
      default:
        return Ge(J);
    }
  }, N = (O) => O.state.phase === "done", K = (O, J) => {
    if (O.state.phase !== "preparing") return false;
    let Z = null;
    return J !== void 0 && (Z = setTimeout(() => {
      O.state.phase === "active" && O.reject(bt("timeout", "request timed out"));
    }, J), ht(Z)), O.state = { phase: "active", controller: O.state.controller, timer: Z }, true;
  }, q = (O, J) => {
    y(O);
    const Z = u.get(O);
    Z && (u.delete(O), Z.forEach((j) => j.abort()));
    const D = bt("disconnected", Et(J, Cn));
    for (const j of Array.from(a.values())) if (j.peerId === O) switch (j.state.phase) {
      case "preparing":
      case "active":
        j.reject(D);
        break;
      case "done":
        break;
      default:
        Ge(j.state);
    }
  }, A = (O, J) => {
    const Z = Fd(J), D = Z ? a.get(Z[0]) : void 0;
    return Z && D && D.state.phase === "active" && D.peerId === O ? [Z, D] : null;
  }, L = f("@_response", { receiveScope: (O, J) => {
    const Z = A(O, J);
    if (!Z) return null;
    const [D, j] = Z;
    if (j.state.phase !== "active") return null;
    const ne = D[1] === void 0 ? j.getReceive() : null;
    return [D[0], j.state.controller.signal, ne ? (ae) => ne({ byteLength: ae.byteLength, peerId: ae.peerId, userId: n(ae.peerId), kind: "response", signal: ae.signal, roles: r(ae.peerId) }) : null, (ae) => {
      j.reject(bt("rejected", ae));
    }];
  } });
  L.onProgress((O, J, Z) => {
    const D = A(J, Z);
    D && D[0][1] === void 0 && D[1].emitReceiveProgress(O, { peerId: J, userId: n(J) });
  }), L.onMessage((O, J, Z) => {
    const D = A(J, Z);
    if (!D) return;
    const [j, ne] = D;
    j[1] !== void 0 ? ne.reject(bt("rejected", j[1])) : ne.resolve(O);
  });
  const I = (O, J, Z) => {
    var _a2;
    if (!Z && O.startsWith("@_")) throw me(`action namespace "${O}" is reserved for internal protocol use`);
    if (J && ("onMessage" in J || "onRequest" in J || "onReceive" in J || "onReceiveProgress" in J)) throw me("makeAction config does not accept event handlers; subscribe via action.on*(fn)");
    const D = (J == null ? void 0 : J.kind) ?? "message", j = jd(J == null ? void 0 : J.roles), ne = j.length > 0, ae = o[O];
    if (ae) {
      if (ae.kind !== D || ae.internal !== Z || !zd(ae.requiredRoles, j)) throw Ya(O);
      return ae.action;
    }
    ne && ((_a2 = e.registerActionAuthority) == null ? void 0 : _a2.call(e, O, j));
    const we = f(O), [R, F, ee, P] = Zt("progress handler"), H = (x) => {
      var _a3;
      return qs(D === "request" ? (_a3 = $s(x)) == null ? void 0 : _a3[1] : x);
    }, X = (x) => (e.resolveRequestTarget ? e.resolveRequestTarget(x, false) : x) ?? x, z = (x, _) => Rn({ peerId: x, userId: n(x), roles: r(x) }, _), re = (x, _) => ({ ...z(x.peerId, _), byteLength: x.byteLength, signal: x.signal, kind: D }), Ae = () => {
      if (!Ve() && !ne) {
        we.onReceive(null);
        return;
      }
      we.onReceive((x) => {
        const [_, ve] = H(x.metadata);
        if (!ne) {
          const M = Ve();
          return M ? M(re(x, ve)) : true;
        }
        if (!e.authorizePeerAction) return false;
        const m = e.authorizePeerAction(x.peerId, j, _), B = (M) => {
          if (!M) return false;
          const V = Ve();
          return V ? V(re(x, ve)) : true;
        };
        return typeof m == "boolean" ? B(m) : m.then(B, () => false);
      });
    }, [Re, Ve, Ue] = ks("onReceive", () => Ae());
    Ae(), we.onProgress((x, _, ve) => {
      if (P()) {
        const [, m] = H(ve);
        F(x, Rn({ peerId: _, userId: n(_) }, m));
      }
    });
    const et = async (x) => {
      if (!ne) return x;
      if (!e.getLocalActionCert) throw me(`${dn} for action "${O}": requires [${j.join(", ")}]`);
      const _ = await e.getLocalActionCert(j, O);
      return Nd(_, x);
    };
    if (D === "message") {
      const x = (M, V, De) => {
        if (ne && (!e.authorizePeerAction || e.authorizePeerAction(V, j) !== true)) return;
        const [, se] = qs(De);
        ve(M, z(V, se));
      }, [_, ve, m] = Zt("action handler", (M) => we.onMessage(M ? x : null)), B = Tn({ send: async (M, V = {}) => {
        Fr(V.signal);
        const De = ne ? await et(V.metadata) : V.metadata;
        await we.send(M, e.resolveSendTarget ? e.resolveSendTarget(V.target, false) : V.target, De, g(V.onProgress, V.metadata), V.signal);
      }, onMessage: (M, V) => _(M, V), onReceive: (M, V) => Re(M, V), onReceiveProgress: (M, V) => R(M, V) }, ["onMessage", "onReceive", "onReceiveProgress"]);
      return o[O] = { kind: D, requiredRoles: j, action: B, internal: Z, clear: () => {
        m(), Ue(), ee();
      } }, B;
    }
    we.onReject((x, _, ve) => {
      const m = $s(_);
      m && L.send(null, x, { r: m[0], e: ve }).catch(Pe);
    });
    const st = (x, _, ve) => {
      const m = $s(ve);
      if (!m) return;
      const B = m[0];
      let M = u.get(_);
      if (((M == null ? void 0 : M.size) ?? 0) >= qd) {
        L.send(null, _, { r: B, e: "too many concurrent requests" }).catch(Pe);
        return;
      }
      const V = new AbortController();
      M || (M = /* @__PURE__ */ new Set(), u.set(_, M)), M.add(V), (async () => {
        if (ne && (!e.authorizePeerAction || await e.authorizePeerAction(_, j) !== true)) throw me(`${dn} for request`);
        const se = ot();
        if (!se) throw me("no active request handler");
        const [, Ie] = qs(m[1]), Le = await se(x, { ...z(_, Ie), signal: V.signal });
        if (Le === void 0) throw me("request handler returned undefined");
        return Le;
      })().then((se) => V.signal.aborted ? void 0 : L.send(se, _, { r: B }, void 0, V.signal), (se) => V.signal.aborted ? void 0 : L.send(null, _, { r: B, e: Et(se, Ar).slice(0, 512) }, void 0, V.signal)).catch(Pe).finally(() => {
        const se = u.get(_);
        se == null ? void 0 : se.delete(V), se && !se.size && u.delete(_), V.abort();
      });
    }, [He, ot, Qe] = ks("onRequest", (x) => we.onMessage(x ? st : null)), E = async (x, _, ve, m) => {
      const { metadata: B, onProgress: M, signal: V, timeoutMs: De } = m;
      if (Fr(V), !s(_)) throw bt("disconnected", ro(ve));
      const se = crypto.randomUUID(), Ie = new AbortController(), { promise: Le, resolve: $e, reject: Xe } = Promise.withResolvers();
      Le.catch(Pe);
      const $ = { requestId: se, peerId: _, state: { phase: "preparing", controller: Ie }, getReceive: Ve, emitReceiveProgress: F, resolve: (ke) => {
        b($) && $e(ke);
      }, reject: (ke) => {
        b($) && Xe(ke);
      } };
      if (a.set(se, $), V) {
        const ke = () => {
          $.reject(bt("aborted", no));
        };
        V.aborted ? ke() : V.addEventListener("abort", ke, { once: true, signal: Ie.signal });
      }
      if (N($)) return await Le;
      let ue = B;
      if (ne) {
        try {
          ue = await et(B);
        } catch (ke) {
          return $.reject(It(ke, Ar)), await Le;
        }
        if (N($)) return await Le;
        if (!s(_)) return $.reject(bt("disconnected", ro(ve))), await Le;
      }
      if (!K($, De)) return await Le;
      try {
        const ke = V ? AbortSignal.any([Ie.signal, V]) : Ie.signal;
        return we.send(x, _, ue === void 0 ? { r: se } : { r: se, m: ue }, g(M, B), ke).catch((h) => {
          $.reject(It(h, Ar));
        }), await Le;
      } finally {
        $.reject(bt("aborted", no));
      }
    }, Q = Tn({ request: (x, _) => {
      const { target: ve, ...m } = _;
      return E(x, X(ve), ve, m);
    }, requestMany: async (x, _) => {
      const { targets: ve, onResult: m, ...B } = _;
      return Fr(B.signal), wt(ve.map(async (M) => {
        const V = X(M), De = { peerId: V, userId: n(V) || M };
        let se;
        try {
          se = { ...De, status: "fulfilled", value: await E(x, V, M, B) };
        } catch (Ie) {
          const Le = It(Ie, Ar);
          if (Le.kind === "aborted" || !Le.kind) throw Le;
          se = Le.kind === "timeout" || Le.kind === "disconnected" ? { ...De, status: Le.kind } : { ...De, status: "rejected", error: Le };
        }
        return m == null ? void 0 : m(se), se;
      }));
    }, onRequest: (x, _) => He(x, _), onReceive: (x, _) => Re(x, _), onReceiveProgress: (x, _) => R(x, _) }, ["onRequest", "onReceive", "onReceiveProgress"]);
    return o[O] = { kind: D, requiredRoles: j, action: Q, internal: Z, clear: () => {
      Qe(), Ue(), ee();
    } }, Q;
  };
  return { makeAction: ((O, J) => I(O, J, false)), makeInternalAction: v, makeInternalRequestAction: (O) => {
    const J = O.startsWith("@_") ? O : `@_${O}`;
    return I(J, { kind: "request" }, true);
  }, handleData: d, clearPeer: q, clearListeners: () => {
    Sl(o).forEach((O) => {
      O.internal || O.clear();
    });
  } };
}, gn = me("peer identity verification failed"), kr = me("peer disconnected during handshake"), oa = 1e4, Hd = 16, jr = `__${bn}_id`, Kd = _t("id-hs", 2), ia = (e) => {
  var _a2;
  if (!e || typeof e != "string") return [];
  const t = e.matchAll(/^a=fingerprint:([^\r\n]+)$/gm), n = /* @__PURE__ */ new Set();
  for (const r of t) {
    const s = (_a2 = r[1]) == null ? void 0 : _a2.trim().toLowerCase();
    s && n.add(s);
  }
  return [...n].sort();
}, Vd = async (e, t, n, r, s = []) => {
  if (!e || typeof e != "object") throw gn;
  const o = e;
  if (o[jr] !== t || typeof o.n != "string" || o.n.length < 16 || !Array.isArray(o.dtls) || !Pt(o.uid) || typeof o.pk != "string" || typeof o.uk != "string" || t === 2 && (typeof o.ps != "string" || typeof o.us != "string")) throw gn;
  const c = o.dtls.filter((y) => typeof y == "string");
  if (r.length > 0 && r.join(",") !== c.join(",") || s.length > 0 && c.length === 0) throw me("DTLS fingerprint mismatch");
  const a = fo(o.pk), u = fo(o.uk);
  if (!a || !u) throw gn;
  const [f, d] = await wt([af(n, a), gc(o.uid, u)]);
  if (!f || !d) throw gn;
  return [o.n, c, o.uid, a, u, typeof o.ps == "string" ? o.ps : void 0, typeof o.us == "string" ? o.us : void 0];
}, aa = async (e, t, n, r, s) => {
  const [o, c] = await wt([Jr(Dn(t), e, r), Jr(Dn(n), e, s)]);
  if (!o || !c) throw gn;
}, Gd = (e) => {
  const { endpointIdentityP: t, appId: n, roomId: r, getUserIdentity: s, onVerified: o } = e, c = async (f, d) => {
    const y = await t, [g, v] = await wt([y.sign(f), d.sign(f)]);
    return { ps: Ut(g), us: Ut(new Uint8Array(v)) };
  }, a = (f, d, y, g, v, b, N, K, q) => vt(ut([Kd, n, f, d, y, g, v, b, N, K, q]));
  return { run: async (f, d, y, g, v) => {
    var _a2, _b, _c2, _d2, _e;
    const [b, N, K] = await wt([r, s(), t]), q = K.peerId, A = v ?? ((_a2 = e.getPeerHandle) == null ? void 0 : _a2.call(e, f)), L = ia((_c2 = (_b = A == null ? void 0 : A.connection) == null ? void 0 : _b.localDescription) == null ? void 0 : _c2.sdp), I = ia((_e = (_d2 = A == null ? void 0 : A.connection) == null ? void 0 : _d2.remoteDescription) == null ? void 0 : _e.sdp);
    if ((A == null ? void 0 : A.connection) && (!L.length || !I.length)) throw me("DTLS fingerprint missing");
    const O = (re, Ae, Re) => d({ [jr]: re, n: Ae, dtls: L, uid: N.userId, pk: lo(K.signPubJwk), uk: lo(N.signPubJwk), ...Re }), J = (re, Ae) => Vd(re, Ae, f, I, L), Z = (re) => I.length > 0 ? I : re, D = (re, Ae, Re) => ({ userId: re, peerPubKey: Ae, userPubKey: Re });
    if (g) {
      const re = crypto.randomUUID();
      await O(1, re);
      const { data: Ae } = await y(), [Re, Ve, Ue, et, st, He, ot] = await J(Ae, 2), Qe = a(b, q, f, re, Re, L, Z(Ve), N.userId, Ue);
      await aa(Qe, He, ot, et, st);
      const E = await c(Qe, N), te = () => d({ [jr]: 3, ...E }), Q = D(Ue, et, st);
      try {
        o == null ? void 0 : o(f, Q, A);
      } catch (x) {
        throw x === Ot && await te(), x;
      }
      return await te(), Q;
    }
    const { data: j } = await y(), [ne, ae, we, R, F] = await J(j, 1), ee = crypto.randomUUID(), P = a(b, f, q, ne, ee, Z(ae), L, we, N.userId);
    await O(2, ee, await c(P, N));
    const { data: H } = await y();
    if (!H || typeof H != "object") throw gn;
    const X = H;
    if (X[jr] !== 3 || typeof X.ps != "string" || typeof X.us != "string") throw gn;
    await aa(P, X.ps, X.us, R, F);
    const z = D(we, R, F);
    return o == null ? void 0 : o(f, z, A), z;
  } };
}, ca = (e, t) => {
  e.messages.length = 0;
  for (const [, n] of e.waiters.splice(0)) n(t);
}, Rr = (e) => {
  "timer" in e && tt(e.timer);
}, Qd = (e) => {
  const { selfIdP: t, onPeerHandshake: n, onHandshakeError: r, deferResponderReady: s, sendHandshakeData: o, sendHandshakeReady: c, onLocalHandshakePassed: a, acquireAdmissionSlot: u, beforeSendHandshakeReady: f, onActivate: d, onFailure: y } = e, g = /* @__PURE__ */ new Map(), v = (A, L) => {
    const I = g.get(A);
    if (!(!I || I.phase === "active" || L && I.peer !== L)) return I;
  }, b = (A, L) => {
    Rr(L), g.set(A, { phase: "active", peer: L.peer }), d(A, L.peer);
  }, N = (A, L, I) => {
    const O = g.get(A);
    !O || O.peer !== L || (Rr(O), r == null ? void 0 : r(A, I), y(A, L, I));
  }, K = (A, L, I, O) => {
    if (!u(A, L)) return;
    const J = v(A, L);
    if (!J) return;
    const Z = O || J.phase === "awaiting-remote-ready" || "remoteReady" in J && J.remoteReady;
    g.set(A, { phase: "preparing-ready", peer: L, timer: I, remoteReady: Z });
    const D = (ne) => {
      const ae = g.get(A);
      if (!ae || ae.phase !== "preparing-ready" || ae.peer !== L) return;
      const we = ae.remoteReady;
      we ? (Rr(ae), g.set(A, { phase: "active", peer: L })) : g.set(A, { phase: "awaiting-peer-ready", peer: L, timer: ae.timer }), c(ne || "", A).catch((R) => N(A, L, me(`handshake ready send failed: ${Et(R, "send failed")}`))), we && d(A, L);
    };
    let j;
    try {
      j = f(A, L);
    } catch {
      j = void 0;
    }
    if (j) {
      j.then(D, () => D());
      return;
    }
    D();
  }, q = (A, L) => {
    const I = g.get(A);
    I && (Rr(I), "queue" in I && ca(I.queue, L), g.delete(A));
  };
  return { addPeer: (A, L) => {
    g.has(A) && q(A, kr), g.set(A, { phase: "added", peer: L, queue: { messages: [], waiters: [] }, remoteReady: false });
  }, clearPeer: q, canReceiveFromPeer: (A, L) => {
    const I = g.get(A);
    return !!(I && (I.phase === "active" || L));
  }, start: (A, L) => {
    const I = g.get(A);
    if (!I || I.phase !== "added" || I.peer !== L) return;
    const O = setTimeout(() => N(A, L, me(`handshake timed out after ${oa}ms`)), oa);
    ht(O), g.set(A, { phase: "running-steps", peer: L, timer: O, role: "resolving", queue: I.queue, remoteReady: I.remoteReady });
    const J = async (D, j) => {
      var _a2;
      if (((_a2 = g.get(A)) == null ? void 0 : _a2.peer) !== L) throw kr;
      await o(D, A, j);
    }, Z = () => new Promise((D, j) => {
      const ne = g.get(A);
      if (!ne || ne.peer !== L || ne.phase !== "running-steps") {
        j(kr);
        return;
      }
      const ae = ne.queue.messages.shift();
      if (ae) {
        D(ae);
        return;
      }
      ne.queue.waiters.push([D, j]);
    });
    t.then((D) => {
      const j = D < A, ne = g.get(A);
      return (ne == null ? void 0 : ne.phase) === "running-steps" && ne.peer === L && g.set(A, { ...ne, role: j ? "initiator" : "responder" }), n(A, J, Z, j, L);
    }).then(() => {
      const D = g.get(A);
      if (!D || D.phase !== "running-steps" || D.peer !== L || (ca(D.queue, kr), !a(A, L))) return;
      const j = g.get(A);
      if (!(!j || j.phase !== "running-steps" || j.peer !== L)) {
        if (s && j.role === "responder" && !j.remoteReady) {
          g.set(A, { phase: "awaiting-remote-ready", peer: L, timer: j.timer });
          return;
        }
        K(A, L, j.timer, j.remoteReady);
      }
    }).catch((D) => N(A, L, It(D, "handshake failed")));
  }, receiveData: (A, L, I) => {
    const O = g.get(L);
    if (!O || !("queue" in O)) return;
    const J = I === void 0 ? { data: A } : { data: A, metadata: I }, Z = O.queue.waiters.shift();
    if (Z) {
      Z[0](J);
      return;
    }
    if (O.queue.messages.length >= Hd) {
      N(L, O.peer, me("too many pending handshake messages"));
      return;
    }
    O.queue.messages.push(J);
  }, receiveReady: (A) => {
    const L = g.get(A);
    if (!(!L || L.phase === "active")) switch (L.phase) {
      case "added":
      case "running-steps":
      case "preparing-ready":
        g.set(A, { ...L, remoteReady: true });
        return;
      case "awaiting-remote-ready":
        K(A, L.peer, L.timer, true);
        return;
      case "awaiting-peer-ready":
        b(A, L);
        return;
      default:
        Ge(L);
    }
  }, getPeer: (A) => {
    var _a2;
    return (_a2 = g.get(A)) == null ? void 0 : _a2.peer;
  } };
}, ua = (e) => (e == null ? void 0 : e.phase) === "waiting" || (e == null ? void 0 : e.phase) === "active", Xd = (e) => {
  if (!St(e) || typeof e.k != "string") return null;
  const t = e.t, n = Object.hasOwn(e, "m");
  return { key: e.k, streamId: typeof e.s == "string" ? e.s : void 0, expectedTrackCount: typeof t == "number" && Number.isInteger(t) && t >= 0 ? t : void 0, hasMetadata: n, metadata: n ? e.m : void 0 };
}, Xt = (e) => {
  var _a2;
  return ((_a2 = e == null ? void 0 : e.getTracks) == null ? void 0 : _a2.call(e)) ?? [];
}, la = (e) => typeof e.id == "string" ? e.id : void 0, Fs = (e, t) => e !== void 0 && e > 0 && t.length < e, Hn = (e, t, n, r) => {
  typeof e.addEventListener == "function" && typeof e.removeEventListener == "function" && (e.addEventListener(t, n), r.push(() => {
    var _a2;
    (_a2 = e.removeEventListener) == null ? void 0 : _a2.call(e, t, n);
  }));
}, Dc = () => {
  const e = /* @__PURE__ */ new WeakMap();
  return (t) => {
    let n = e.get(t);
    return n || (n = crypto.randomUUID(), e.set(t, n)), n;
  };
}, Yd = () => {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap();
  return { getStreamKey: Dc(), rememberRemoteStream: (r, s, o) => {
    const c = n.get(s);
    c !== void 0 && e.get(c) === s && e.delete(c), n.set(s, r), e.set(r, s), o && t.set(o, s);
  }, getRemoteStream: (r, s) => e.get(r) ?? (s ? t.get(s) : void 0), hasRemoteMedia: () => e.size > 0, clearRemote: () => {
    e.clear(), t.clear();
  } };
}, Jd = (e, t) => {
  for (const [n, r] of e.streams) if (r.phase === "waiting" && (!t || n.id === t)) return n;
}, Zd = (e) => {
  let t = 0;
  for (const n of e.streams.values()) n.phase === "waiting" && t++;
  return t;
}, ep = ({ iterate: e, isActive: t, preparePeer: n, getPeerUserId: r, onPeerError: s, onPeerMediaPinChange: o }) => {
  const c = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), [u, f, d] = Zt("peer stream handler"), y = Dc(), g = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap();
  let N = 0;
  const K = (P) => {
    let H = c.get(P);
    return H || (H = { identityCache: Yd(), metaQueue: [], streams: /* @__PURE__ */ new Map() }, c.set(P, H)), H;
  }, q = (P) => {
    let H = a.get(P);
    return H || (H = { streams: /* @__PURE__ */ new Map() }, a.set(P, H)), H;
  }, A = (P) => {
    const H = c.get(P);
    if (!H) return false;
    for (const X of H.streams.values()) if (X.phase === "active") return true;
    return false;
  }, L = (P) => {
    var _a2;
    return !!((_a2 = a.get(P)) == null ? void 0 : _a2.streams.size);
  }, I = (P) => {
    o == null ? void 0 : o(P, A(P) || L(P));
  }, O = async (P, H) => {
    const X = H ?? (n ? await n(P) : void 0);
    if (!X) throw $r;
    return X;
  }, J = (P) => {
    let H = P;
    const X = /* @__PURE__ */ new Set();
    for (; !X.has(H); ) {
      const z = b.get(H);
      if (!z) break;
      X.add(H), H = z;
    }
    return H;
  }, Z = (P) => {
    const H = Xt(P), X = v.get(P);
    if (X) for (const z of H) X.has(z) || b.delete(z);
    return v.set(P, new Set(H)), H.map(J);
  }, D = (P, H) => {
    var _a2;
    if ("active" in P && P.active === false) return false;
    const X = (_a2 = P.getTracks) == null ? void 0 : _a2.call(P);
    return X ? H && X.length === 0 ? false : X.length === 0 || !X.every((z) => (z == null ? void 0 : z.readyState) === "ended") : true;
  }, j = (P, H, X, z) => {
    H.streams.get(X) === z && (z.cleanup(), H.streams.set(X, { phase: "inactive", key: z.key }), I(P));
  }, ne = (P) => {
    for (const [H, X] of Array.from(P.streams.entries())) switch (X.phase) {
      case "waiting":
        X.cleanup(), P.streams.delete(H);
        break;
      case "active":
        X.cleanup(), P.streams.set(H, { phase: "inactive", key: X.key });
        break;
      case "inactive":
        break;
      default:
        Ge(X);
    }
  }, ae = (P, H, X) => {
    const z = r ? r(P) : P;
    return H && X !== void 0 ? { peerId: P, userId: z, metadata: X } : { peerId: P, userId: z };
  }, we = (P, H) => {
    if (!P.metaQueue.length) return null;
    const X = la(H), z = X ? P.metaQueue.findIndex((Ae) => !Ae.streamId || Ae.streamId === X) : 0;
    if (z < 0) return null;
    const re = P.metaQueue[z];
    return Fs(re.expectedTrackCount, Xt(H)) ? null : (P.metaQueue.splice(z, 1), re);
  }, R = (P, H) => {
    if (!t(P)) return false;
    const X = c.get(P);
    if (!X) return false;
    const z = we(X, H);
    return z ? (ee(P, X, z.key, H, z.hasMetadata, z.metadata), true) : false;
  }, F = (P, H, X) => {
    const z = H.streams.get(X);
    if (ua(z) || Zd(H) >= 64) return;
    const re = [];
    Hn(X, "addtrack", () => {
      R(P, X);
    }, re), H.streams.set(X, { phase: "waiting", cleanup: () => {
      for (; re.length > 0; ) re.pop()();
    } });
  }, ee = (P, H, X, z, re, Ae) => {
    if (!t(P)) return;
    H.identityCache.rememberRemoteStream(X, z, la(z));
    const Re = H.streams.get(z);
    ua(Re) && Re.cleanup();
    const Ve = Xt(z);
    let Ue = !!((Re == null ? void 0 : Re.phase) === "active" && Re.hadTracks || Ve.length > 0);
    if (!D(z, Ue)) {
      H.streams.set(z, { phase: "inactive", key: X }), (Re == null ? void 0 : Re.phase) === "active" && I(P);
      return;
    }
    const et = re && Ae !== void 0 ? `m:${ut(Ae)}` : "", st = (Re == null ? void 0 : Re.phase) === "active" ? Re.emittedSig : void 0, He = [], ot = /* @__PURE__ */ new Set();
    let E = { phase: "active", key: X, hasMetadata: re, metadata: Ae, emittedSig: et, hadTracks: Ue, cleanup: () => {
      for (; He.length > 0; ) He.pop()();
    } };
    const te = () => {
      D(z, Ue) || j(P, H, z, E);
    }, Q = (_) => {
      !_ || ot.has(_) || (ot.add(_), Ue || (Ue = true, H.streams.get(z) === E && (E = { ...E, hadTracks: true }, H.streams.set(z, E))), Hn(_, "ended", te, He));
    }, x = () => {
      if (H.streams.get(z) === E) {
        for (const _ of Xt(z)) Q(_);
        R(P, z) || te();
      }
    };
    Hn(z, "removetrack", te, He), Hn(z, "inactive", te, He), Hn(z, "addtrack", x, He);
    for (const _ of Ve) Q(_);
    E = { ...E, hadTracks: Ue }, H.streams.set(z, E), I(P), st !== et && f(z, ae(P, re, Ae));
  };
  return { addStream: async (P, H, X) => {
    const z = y(P), re = Object.hasOwn(H, "metadata") ? (g.set(P, H.metadata), H.metadata) : g.get(P), Ae = Z(P);
    await wt(e(H.target, async (Re, Ve) => {
      var _a2, _b, _c2, _d2;
      const Ue = ++N, et = q(Re), st = et.streams.get(P);
      et.streams.set(P, (st == null ? void 0 : st.phase) === "synced" ? { phase: "synced", syncGen: Ue, appliedTracks: st.appliedTracks } : { phase: "syncing-initial", syncGen: Ue }), I(Re);
      const He = () => {
        const Q = a.get(Re), x = Q == null ? void 0 : Q.streams.get(P);
        (x == null ? void 0 : x.syncGen) === Ue && x.phase === "syncing-initial" && (Q.streams.delete(P), Q.streams.size || a.delete(Re), I(Re));
      };
      let ot;
      try {
        ot = await O(Re, Ve);
      } catch (Q) {
        throw He(), Q;
      }
      if (((_b = (_a2 = a.get(Re)) == null ? void 0 : _a2.streams.get(P)) == null ? void 0 : _b.syncGen) !== Ue) return;
      try {
        await X({ k: z, s: P.id, ...Ae.length > 0 ? { t: Ae.length } : {}, ...re === void 0 ? {} : { m: re } }, { target: Re });
      } catch (Q) {
        throw He(), Q;
      }
      const Qe = (_c2 = a.get(Re)) == null ? void 0 : _c2.streams.get(P);
      if (!Qe || Qe.syncGen !== Ue) return;
      const E = Xt(P), te = E.map(J);
      switch (Qe.phase) {
        case "syncing-initial":
          (_d2 = a.get(Re)) == null ? void 0 : _d2.streams.set(P, { phase: "synced", syncGen: Ue, appliedTracks: new Set(te) }), te.length !== E.length || te.some((Q, x) => Q !== E[x]) ? te.forEach((Q) => ot.addTrack(Q, P)) : ot.addStream(P);
          return;
        case "synced": {
          const Q = new Set(te);
          for (const x of Qe.appliedTracks.difference(Q)) ot.removeTrack(x, P), Qe.appliedTracks.delete(x);
          for (const x of Q.difference(Qe.appliedTracks)) ot.addTrack(x, P), Qe.appliedTracks.add(x);
          return;
        }
        default:
          Ge(Qe);
      }
    }));
  }, removeStream: (P, H) => {
    H || (g.delete(P), v.delete(P)), e(H, (X, z) => {
      const re = a.get(X), Ae = re == null ? void 0 : re.streams.get(P);
      if (re && (re.streams.delete(P), re.streams.size || a.delete(X)), I(X), !(!z || (Ae == null ? void 0 : Ae.phase) === "syncing-initial") && (z.removeStream(P), (Ae == null ? void 0 : Ae.phase) === "synced")) for (const Re of Ae.appliedTracks.difference(new Set(Xt(P)))) z.removeTrack(Re, P);
    });
  }, replaceTrack: async (P, H, X) => {
    b.set(P, H), b.delete(H), await wt(e(X, async (z, re) => {
      const Ae = a.get(z);
      let Re = false;
      if (Ae) for (const [Ve, Ue] of Ae.streams.entries()) Ue.phase === "synced" && Ue.appliedTracks.has(P) ? (Ue.appliedTracks.delete(P), Ue.appliedTracks.add(H), Re = true) : Ue.phase === "syncing-initial" && Xt(Ve).some((et) => et === P || J(et) === H) && (Re = true);
      !Re && !re || await (await O(z, re)).replaceTrack(P, H);
    }));
  }, receiveStreamMeta: (P, H) => {
    if (!t(H)) return;
    const X = Xd(P);
    if (!X) return;
    const z = K(H), re = Jd(z, X.streamId), Ae = re ?? z.identityCache.getRemoteStream(X.key, X.streamId), Re = Xt(Ae);
    if (Ae && (re !== void 0 || Re.length > 0) && !Fs(X.expectedTrackCount, Re)) {
      const Ue = z.metaQueue.findIndex((et) => et.key === X.key);
      Ue >= 0 && z.metaQueue.splice(Ue, 1), ee(H, z, X.key, Ae, X.hasMetadata, X.metadata);
      return;
    }
    Ae && Fs(X.expectedTrackCount, Re) && F(H, z, Ae);
    const Ve = z.metaQueue.findIndex((Ue) => Ue.key === X.key);
    if (Ve >= 0) {
      z.metaQueue[Ve] = X;
      return;
    }
    if (z.metaQueue.length >= 64) {
      on("too many pending stream metadata messages"), s(H, me("too many pending media metadata messages"));
      return;
    }
    z.metaQueue.push(X);
  }, receiveRemoteStream: (P, H) => {
    if (!t(P)) return;
    const X = K(P), z = we(X, H);
    if (z) {
      ee(P, X, z.key, H, z.hasMetadata, z.metadata);
      return;
    }
    F(P, X, H);
  }, clearPeer: (P) => {
    const H = c.get(P);
    H && (ne(H), c.delete(P)), a.delete(P), o == null ? void 0 : o(P, false);
  }, clearListeners: () => {
    d();
    for (const [P, H] of c) ne(H), I(P);
  }, onPeerStream: (P, H) => u(P, H, () => {
    const X = [];
    for (const [z, re] of c) {
      if (!t(z)) {
        ne(re), I(z);
        continue;
      }
      for (const [Ae, Re] of Array.from(re.streams.entries())) if (Re.phase === "active") {
        if (!D(Ae, Re.hadTracks)) {
          j(z, re, Ae, Re);
          continue;
        }
        X.push([Ae, ae(z, Re.hasMetadata, Re.metadata)]);
      }
    }
    return X;
  }) };
}, tp = 16384, ss = 65536, Ns = 65536, fa = 40, np = 60, rp = 120, Kn = 1024, sp = 16, op = 184320, ip = 61440, ap = 400, da = 5e3, cp = 8, ln = 32, up = /* @__PURE__ */ new Set(["v", "k", "appId", "roomId", "ns", "hlc", "peerId", "userId", "pub", "val", "del", "cert", "sig"]), Cc = (e, t) => {
  var _a2;
  return bf("state", [e.v, e.k, e.appId, e.roomId, e.ns, e.hlc, e.peerId, e.userId, e.pub, e.del === true ? null : t ?? Af(e.val), e.del === true ? 1 : 0, ((_a2 = e.cert) == null ? void 0 : _a2.sig) ?? ""]);
}, pa = (e, t = Number.POSITIVE_INFINITY) => {
  if (!St(e) || ec(e).some((r) => !up.has(r)) || e.v !== 1 || e.k !== "s" && e.k !== "u" || !Pt(e.appId) || !Pt(e.roomId) || !Pt(e.ns) || e.ns.length > 256 || !kc(e.hlc) || !Vo(e.peerId) || !zo(e.userId) || typeof e.pub != "string" || !fo(e.pub) || !rc(e.sig) || e.cert !== void 0 && !sc(e.cert)) return null;
  if (e.del !== void 0) return e.del === true && e.k === "u" && e.val === void 0 ? { rec: e, bytes: ln, canonVal: void 0 } : null;
  if (!("val" in e) || e.val === void 0) return null;
  const n = Mn(e.val, t);
  return Array.isArray(n) ? { rec: e, bytes: n[1], canonVal: n[0] } : null;
}, lp = async (e, t, n, r) => {
  const s = typeof n.hlc == "number" ? [n.hlc, 0] : n.hlc ?? [Date.now(), 0], o = { v: 1, appId: n.appId, roomId: n.roomId, ns: n.ns, hlc: s, peerId: n.peerId, userId: n.userId, pub: lo(t), ...n.cert ? { cert: n.cert } : {} }, c = n.del === true ? { ...o, k: "u", del: true } : { ...o, k: n.kind ?? "s", val: n.val }, a = await Sf(e, Cc(c, r));
  return { ...c, sig: a };
}, Er = (e, t) => Zr(e.hlc, t.hlc) || tn(e.userId, t.userId) || tn(e.peerId, t.peerId) || tn(e.sig, t.sig), fp = (e, t) => Zr(e, t) >= 0 ? e : t, xr = (e, t) => ({ v: e.v, k: e.k, ns: e.ns, hlc: e.hlc, peerId: e.peerId, userId: e.userId, ...t ? { pub: e.pub } : {}, ...e.del === true ? { del: true } : { val: e.val }, ...e.cert !== void 0 ? { cert: e.cert } : {}, sig: e.sig }), js = (e, t, n, r) => {
  if (!St(e) || "appId" in e || "roomId" in e) return null;
  const s = e.userId, o = e.pub === void 0 && Pt(s) ? r == null ? void 0 : r[s] : e.pub;
  return { ...e, appId: t, roomId: n, pub: o };
}, ha = (e, t, n, r, s, o, c, a) => {
  if (!Pt(e) || e.length > 256) throw me(`${c} requires a non-empty namespace string`);
  const u = Mn(t === void 0 ? null : t);
  if (!Array.isArray(u)) throw me(`state "${e}" initialValue must be valid JSON`);
  const f = sn(u[0]);
  if (n !== void 0 && (!mn(n) || n > ss)) throw me(`state "${e}" maxBytes must be a positive integer <= ${ss}`);
  if (r !== void 0 && !s) throw Uo(a);
  let d = null;
  if (s) if (r === void 0) d = o ? ["admin"] : null;
  else {
    const y = [r].flat();
    if (!y.includes("*")) {
      const g = y.filter(Boolean);
      if (!g.length) throw me(`${a} roles must not be empty; use "*" for open`);
      d = g;
    }
  }
  return [f, n ?? tp, d];
}, Ft = (e, t) => {
  const n = e.entries.get(t);
  return n && !n.rec.del ? n : void 0;
}, ga = (e) => vt(ut(e)).byteLength + 120, zs = (e) => e.sig.slice(0, 8), Tr = (e) => me(`state "${e}" exceeds user quota`), dp = ({ appId: e, getRoomId: t, getSelfId: n, getLocalUserId: r, ensureReady: s, hasRolesPlugin: o, getRolesProvider: c, getScaleProvider: a, isPeerActive: u, isPeerPendingHandshake: f, isDirectPeer: d, getDirectPeerIds: y, isUserOnline: g, getKnownPeerUserId: v, isPeerBanned: b, getPeerRoles: N, makeInternalAction: K, onInvalidRecord: q }) => {
  const A = /* @__PURE__ */ new Map(), L = Rf(np, rp, 512), [I] = io(512, 96), [O] = io(512, 96), J = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), D = Mt(128), j = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Set(), ae = /* @__PURE__ */ new Map(), we = kf();
  let R = false;
  const F = () => R, ee = (i) => u(i) || !!(f == null ? void 0 : f(i)), P = (i) => j.get(i) ?? 0, H = (i) => {
    if (!i) return;
    const k = P(i) + 1;
    if (!j.has(i) && j.size >= 4096) {
      for (const S of j.keys()) if (!ne.has(S) && !g(S)) {
        j.delete(S);
        break;
      }
    }
    j.set(i, k);
  }, X = (i, k) => {
    F() || !i || (k ? ne.has(i) || (ne.add(i), H(i)) : ne.delete(i) && H(i));
  }, z = (i, k) => {
    i.optimistic = k, i.snapshot = null;
  }, re = (i) => {
    i.optimistic !== null && (i.optimistic = null, i.snapshot = null);
  }, Ae = (i, k) => {
    const { promise: S, resolve: U, reject: W } = Promise.withResolvers();
    return i.ops.push({ ...k, promise: S, resolve: U, reject: W }), G(i), S;
  }, Re = () => !!(a == null ? void 0 : a()), Ve = (i, k) => {
    const S = ae.get(i);
    S && (ae.delete(i), S.resolve(k));
  }, Ue = (i) => {
    if (!(f == null ? void 0 : f(i))) return u(i) ? null : false;
    let k = ae.get(i);
    if (!k) {
      const { promise: S, resolve: U } = Promise.withResolvers();
      k = { promise: S, resolve: U, count: 0 }, ae.set(i, k);
    }
    return k.count >= 8 ? false : (k.count++, k.promise);
  }, et = async (i, k) => {
    if (k && !await k) return null;
    let S;
    try {
      ({ roomId: S } = await s());
    } catch {
      return null;
    }
    return F() || !u(i) || b(i) ? null : S;
  }, st = (i, k, S) => {
    let U = 0, W = S;
    for (const oe of A.values()) {
      if (oe.kind !== "u" || oe === k) continue;
      if (oe.optimistic && i === r()) {
        U++, W += oe.optimistic.bytes;
        continue;
      }
      const le = i ? oe.entries.get(i) : void 0;
      le && (U++, W += le.bytes);
    }
    return U < 32 && W <= Ns;
  }, He = (i, k, S, U, W) => ({ prev: i, peerId: k, userId: S, roles: [...U], timestamp: W }), ot = (i, k, S) => He(k, i.peerId, i.userId, S, i.hlc[0]), Qe = (i, k, S, U, W = i.hlc[0], oe = g(i.userId)) => {
    const le = r();
    return { ...He(k, i.peerId, i.userId, S, W), self: !!(le && i.userId === le), online: oe, removed: U };
  }, E = (i, k) => {
    if (b(i.userId)) return false;
    if (!k) return true;
    const S = c();
    if (!S) return false;
    const U = S.getPeerRoles(i.userId);
    return i.cert ? k.some((W) => i.cert.roles.includes(W) && U.includes(W)) : k.some((W) => U.includes(W));
  }, te = (i, k, S, U, W) => {
    i.entries.delete(k), i.snapshot = null, i.kind === "s" ? i.emit(i.initialValue, He(S.value, n(), S.rec.userId, W, U)) : S.rec.del || i.emit(void 0, Qe(S.rec, S.value, W, true, U, false));
  }, Q = K ? K("state", { receiveWhilePending: true, maxPayloadBytes: 262144 }) : null, x = (i, k) => {
    Q && Q.send(i, k === void 0 ? void 0 : { target: k }).catch(Pe);
  }, _ = (i) => {
    x({ t: "rec", r: xr(i, true) });
  }, ve = async ({ rec: i, bytes: k, canonVal: S }, U, W) => {
    var _a2, _b;
    const oe = t();
    if (i.appId !== e || i.roomId !== oe || i.cert && i.cert.subUserId !== i.userId) return "invalid";
    const le = await ir(i.pub);
    if (!le || le.userId !== i.userId || !await Pf(i.pub, Cc(i, S), i.sig)) return "invalid";
    const ge = Date.now(), ye = ((_b = (_a2 = A.get(`${i.k}:${i.ns}`)) == null ? void 0 : _a2.entries.get(i.k === "s" ? "" : i.userId)) == null ? void 0 : _b.rec.hlc[0]) ?? 0, pe = Math.min(ge + $i, Math.max(ge + qr, i.cert ? i.cert.iat + qr : 0, ye));
    if (i.hlc[0] > pe || i.cert && i.hlc[0] < i.cert.iat || b(i.userId)) return "drop";
    const de = c();
    if (de) {
      const Se = await de.verifyStateRecordRoles(i, U, W);
      return Se.valid ? (we.observe(i.hlc[0]), { rec: i, roles: Se.roles, bytes: k }) : "drop";
    }
    return U && U.length > 0 ? "drop" : (we.observe(i.hlc[0]), { rec: i, roles: [], bytes: k });
  }, m = (i, k, S, U) => {
    if (U > i.maxBytes) return;
    const W = Date.now();
    let oe = D.get(k.userId);
    if (!oe) oe = /* @__PURE__ */ new Map(), D.set(k.userId, oe);
    else if (!oe.has(i.namespace) && oe.size >= 32) return;
    const le = oe.get(i.namespace);
    if (le && W - le.seenAt < da && Er(k, le.rec) <= 0) return;
    let ge = U;
    for (const [ye, pe] of oe) ye !== i.namespace && (ge += pe.bytes);
    ge > Ns || oe.set(i.namespace, { slot: i, rec: k, roles: [...S], bytes: U, seenAt: W });
  }, B = (i, k, S, U, W = false, oe = false, le = false) => {
    if (F()) return null;
    const ge = i.kind === "s" ? "" : k.userId;
    if (i.kind === "u" && !g(ge)) return oe && m(i, k, S, U), null;
    const ye = i.entries.get(ge);
    if (ye && Er(k, ye.rec) <= 0) return null;
    const pe = ye && !ye.rec.del ? ye : void 0, de = pe ? pe.value : i.initialValue, Se = i.kind === "s" || r() !== "" && k.userId === r(), ce = !W && Se && i.optimistic !== null && (i.ops.length > 0 || i.flushState.phase === "stepping" && Zr(k.hlc, i.flushState.signingHlc ?? [i.optimistic.timestamp, 0]) <= 0) && k.hlc[0] <= Date.now() + 1e4;
    if (k.del) {
      if (i.kind !== "u" || !st(ge, i, U)) return null;
      const Me = { rec: k, value: i.initialValue, prev: de, roles: [...S], bytes: U };
      return i.entries.set(ge, Me), ce ? (i.optimistic.prev = i.initialValue, Me) : (!W && Se && re(i), i.snapshot = null, !le && pe && i.emit(void 0, Qe(k, de, S, true)), Me);
    }
    if (U > i.maxBytes || i.kind === "u" && !st(ge, i, U)) return null;
    const Ne = k.val, Ce = { rec: k, value: Ne, prev: de, roles: [...S], bytes: U };
    if (i.kind === "s") {
      const Me = !W && i.optimistic !== null && !ce ? i.optimistic.value : de, je = ot(k, de, S);
      if (!W && i.validate) {
        let ct = false;
        try {
          ct = i.validate(Ne, je);
        } catch {
          ct = false;
        }
        if (!ct) return null;
      }
      return i.entries.set(ge, Ce), ce ? (i.optimistic.prev = Ne, Ce) : (W || re(i), i.snapshot = null, le || i.emit(Ne, Me === de ? je : ot(k, Me, S)), Ce);
    }
    const Oe = !W && Se && i.optimistic !== null && !ce ? i.optimistic.value : de, Fe = Qe(k, de, S, false);
    if (!W && i.validate) {
      let Me = false;
      try {
        Me = i.validate(Ne, Fe);
      } catch {
        Me = false;
      }
      if (!Me) return null;
    }
    return i.entries.set(ge, Ce), ce ? (i.optimistic.prev = Ne, Ce) : (!W && Se && re(i), i.snapshot = null, le || i.emit(Ne, Oe === de ? Fe : Qe(k, Oe, S, false)), Ce);
  }, M = (i) => ({ startedOnline: g(i), startEpoch: P(i) }), V = async (i, k, S = false, U) => {
    if (F()) return null;
    const W = pa(i, ss);
    if (!W) return q == null ? void 0 : q(k), null;
    if (b(W.rec.userId)) return null;
    const oe = A.get(`${W.rec.k}:${W.rec.ns}`);
    if (!oe || !W.rec.del && W.bytes > oe.maxBytes) return null;
    const le = oe.kind === "s" ? "" : W.rec.userId, { startedOnline: ge, startEpoch: ye } = oe.kind === "u" ? U ?? M(le) : { startedOnline: true, startEpoch: 0 };
    if (oe.kind === "s" || ge) {
      const de = oe.entries.get(le);
      if (de && Er(W.rec, de.rec) <= 0 || !st(le, oe, W.bytes) && oe.kind === "u") return null;
    }
    const pe = await ve(W, oe.requiredRoles, k);
    if (F()) return null;
    if (pe === "invalid") return q == null ? void 0 : q(k), null;
    if (pe === "drop" || b(pe.rec.userId)) return null;
    if (oe.kind === "u") {
      const de = P(le);
      if (ge) {
        if (de !== ye) return null;
      } else {
        const Se = g(le) && de === ye + 1;
        if (de !== ye && !Se) return null;
      }
    }
    return B(oe, pe.rec, pe.roles, pe.bytes, false, S && !ge && P(le) === ye);
  }, De = () => {
    const i = [];
    for (const k of A.values()) for (const [S, U] of k.entries) k.kind === "u" && !g(S) || E(U.rec, k.requiredRoles) && i.push([k.kind === "s" ? `s:${k.namespace}` : `u:${k.namespace}\0${S}`, U]);
    return i.sort((k, S) => tn(k[0], S[0])), i;
  }, se = (i) => {
    const k = {};
    let S = 0;
    for (const [U, W] of De()) if (!(i !== void 0 && tn(U, i) <= 0)) {
      if (S >= Kn) break;
      k[U] = [W.rec.hlc, zs(W.rec)], S++;
    }
    return k;
  }, Ie = (i, k, S, U = false) => {
    if (!Q || F() || !u(i)) return;
    const W = (pe, de, Se) => x({ t: "sync", p: pe, r: de, ...Se && S ? { n: S } : {}, ...U ? { f: 1 } : {} }, i);
    if (!k.length) {
      U || W({}, [], true);
      return;
    }
    const oe = [];
    let le = {}, ge = [], ye = 0;
    for (const pe of k) {
      const de = xr(pe, false), Se = ga(de);
      ge.length > 0 && ye + Se > op && (oe.push([le, ge]), le = {}, ge = [], ye = 0), le[pe.userId] = pe.pub, ge.push(de), ye += Se;
    }
    ge.length > 0 && oe.push([le, ge]), oe.forEach(([pe, de], Se) => {
      W(pe, de, Se === oe.length - 1);
    });
  }, Le = (i, k) => {
    if (!(!Q || !i.length || !Re())) for (const S of y()) S !== k && !b(S) && Ie(S, i, void 0, true);
  }, $e = (i) => d(i) && !b(i), Xe = Ul({ maxPages: sp, canSync: () => !!Q && A.size > 0, getDirectPeers: y, isPeerSendable: $e, sendPull: async (i, k) => {
    if (!Q || F() || !$e(i)) return;
    const S = { t: "pull", d: se(k), ...k !== void 0 ? { c: k } : {} };
    await Q.send(S, { target: i });
  } });
  if (Q) {
    const i = (k, S) => {
      const U = Ue(k);
      U !== false && et(k, U).then((W) => W !== null ? S(W) : void 0).catch(Pe);
    };
    Q.onMessage((k, { peerId: S }) => {
      if (F() || b(S) || !St(k)) return;
      const U = k;
      if (U.t === "rec") {
        if (!L.consume(S)) return;
        const W = St(U.r) && Pt(U.r.userId) ? U.r.userId : void 0, oe = W ? M(W) : void 0;
        i(S, async (le) => {
          const ge = js(U.r, e, le);
          if (!ge) {
            q == null ? void 0 : q(S);
            return;
          }
          if (d(S) && ge.peerId === S) {
            const ye = v(S);
            if (ye && ye !== ge.userId) {
              q == null ? void 0 : q(S);
              return;
            }
          }
          await V(ge, S, true, oe);
        });
        return;
      }
      if (U.t === "pull") {
        if (I(S) || !St(U.d)) return;
        if (!Ti(U.c)) {
          q == null ? void 0 : q(S);
          return;
        }
        const W = $o(U.d);
        if (W.length > Kn) {
          q == null ? void 0 : q(S);
          return;
        }
        const oe = /* @__PURE__ */ new Map();
        for (const [ge, ye] of W) {
          if (!Array.isArray(ye) || ye.length !== 2 || !kc(ye[0]) || typeof ye[1] != "string" || ye[1].length > 16) {
            q == null ? void 0 : q(S);
            return;
          }
          oe.set(ge, [ye[0], ye[1]]);
        }
        const le = U.c;
        i(S, () => {
          const ge = De().filter(([ce]) => le === void 0 || tn(ce, le) > 0), ye = ge.slice(0, Kn), pe = ge.length > Kn ? ye[ye.length - 1][0] : void 0, de = (ce, Ne, Ce, Oe) => {
            const Fe = Zr(ce, Ce);
            return Fe > 0 || Fe === 0 && Ne !== Oe;
          }, Se = [];
          for (const [ce, Ne] of ye) {
            const Ce = Ne.rec, Oe = oe.get(ce);
            (!Oe || de(Ce.hlc, zs(Ce), Oe[0], Oe[1])) && Se.push(Ce);
          }
          if (Ie(S, Se, pe), le === void 0 && !Xe.isPullInFlight(S)) for (const [ce, Ne] of oe) {
            let Ce, Oe = "";
            if (ce.startsWith("s:")) {
              const je = A.get(ce);
              (je == null ? void 0 : je.kind) === "s" && (Ce = je);
            } else if (ce.startsWith("u:")) {
              const je = ce.indexOf("\0");
              if (je > 2) {
                const ct = ce.slice(je + 1), yt = A.get(ce.slice(0, je));
                (yt == null ? void 0 : yt.kind) === "u" && g(ct) && (Ce = yt, Oe = ct);
              }
            }
            if (!Ce) continue;
            const Fe = Ce.entries.get(Oe), Me = Fe && E(Fe.rec, Ce.requiredRoles) ? Fe.rec : void 0;
            if (!Me || de(Ne[0], Ne[1], Me.hlc, zs(Me))) {
              Xe.pullPeer(S, true);
              break;
            }
          }
        });
        return;
      }
      if (U.t === "sync") {
        if (U.f && !Re() || (U.f ? O : I)(S) || !St(U.p) || !Array.isArray(U.r)) return;
        if (U.r.length > Kn || !Ti(U.n)) {
          q == null ? void 0 : q(S);
          return;
        }
        U.f || Xe.onSyncPage(S, U.n);
        const W = U.p, oe = /* @__PURE__ */ new Map();
        for (const le of U.r) if (St(le) && le.k === "u" && Pt(le.userId)) {
          const ge = le.userId;
          oe.has(ge) || oe.set(ge, M(ge));
        }
        i(S, async (le) => {
          const ge = [];
          for (const ye of U.r) {
            if (F() || b(S)) return;
            const pe = js(ye, e, le, W);
            if (!pe) {
              q == null ? void 0 : q(S);
              return;
            }
            const de = await V(pe, S, true, pe.k === "u" ? oe.get(pe.userId) : void 0);
            de && ge.push(de.rec);
          }
          Le(ge, S);
        });
      }
    });
  }
  const $ = async (i, k, S) => {
    const U = c();
    if (U) {
      const W = await U.getStateWriteCert(i, k);
      return [W.cert, W.roles];
    }
    if (i && i.length > 0) throw me(`${dn} to update state "${k}": requires [${i.join(", ")}]`);
    return [null, [...N(S)]];
  }, ue = (i) => {
    for (const k of i) k.resolve();
  }, ke = (i, k) => {
    for (const S of i) S.reject(k);
  }, h = (i, k) => {
    var _a2;
    if (!i.optimistic || i.ops.length > 0) return;
    const S = i.optimistic;
    re(i);
    const U = Date.now(), W = n(), oe = k ? [...N(k)] : [];
    if (i.kind === "s") {
      const le = ((_a2 = i.entries.get("")) == null ? void 0 : _a2.value) ?? i.initialValue;
      le !== S.value && i.emit(le, He(S.value, W, k, oe, U));
    } else {
      const le = k ? Ft(i, k) : void 0;
      le ? (S.del || le.value !== S.value) && i.emit(le.value, { ...He(S.del ? i.initialValue : S.value, W, k, oe, U), self: true, online: true, removed: false }) : S.del || i.emit(void 0, { ...He(S.value, W, k, oe, U), self: true, online: true, removed: true });
    }
  }, T = (i, k, S, U) => {
    if (F()) {
      ue(k);
      return;
    }
    h(i, U), ke(k, S);
  }, C = (i, k, S) => S === 1 && Array.isArray(Mn(k)) ? me(`state "${i.namespace}" exceeds maxBytes (${i.maxBytes})`) : me(`state "${i.namespace}" value must contain only finite JSON numbers`), G = (i) => {
    switch (i.flushState.phase) {
      case "pacing":
      case "stepping":
        return i.flushState.flushPromise;
      case "idle":
        break;
      default:
        return Ge(i.flushState);
    }
    const { promise: k, resolve: S } = Promise.withResolvers();
    return (async () => {
      var _a2, _b;
      try {
        for (; !F() && i.ops.length > 0; ) {
          if (!(i.ops.some((le) => !!le.urgent) || !Number.isFinite(i.lastBroadcastAt) || F())) {
            const le = Math.min(fa, fa - (performance.now() - i.lastBroadcastAt));
            le > 0 && await new Promise((ge) => {
              let ye = false;
              const pe = () => {
                ye || (ye = true, clearTimeout(de), ge());
              }, de = setTimeout(pe, le);
              ht(de), i.flushState = { phase: "pacing", flushPromise: k, wake: pe };
            });
          }
          if (F() || i.ops.length === 0) break;
          const { promise: U, resolve: W } = Promise.withResolvers(), oe = { phase: "stepping", flushPromise: k, stepPromise: U, signingHlc: null, activeOps: [] };
          i.flushState = oe;
          try {
            let le, ge, ye, pe, de;
            try {
              if ({ selfId: le, user: ge, roomId: ye } = await s(), F()) {
                ue(i.ops.splice(0));
                break;
              }
              [pe, de] = await $(i.requiredRoles, i.namespace, ge.userId);
            } catch (Ce) {
              T(i, i.ops.splice(0), Ce, r());
              continue;
            }
            if (F()) {
              ue(i.ops.splice(0));
              break;
            }
            pe && we.observe(pe.iat);
            let Se = i.ops.splice(0);
            if (!Se.length) continue;
            oe.activeOps.push(...Se);
            const ce = ge.userId, Ne = i.kind === "s" ? "" : ce;
            for (let Ce = 0; Ce < cp && Se.length > 0; Ce++) {
              if (F()) {
                ue(Se), Se = [];
                break;
              }
              const Oe = i.entries.get(Ne), Fe = Oe && !Oe.rec.del ? Oe : void 0;
              let Me = Fe ? Fe.value : i.initialValue, je = null, ct = 0, yt;
              const dt = [], Kt = fp((Oe == null ? void 0 : Oe.rec.hlc) ?? Ac, [(pe == null ? void 0 : pe.iat) ?? 0, 0]), lr = Math.max(Date.now(), we.peek(), Kt[0]);
              for (const Ye of Se) {
                const fr = (Oe == null ? void 0 : Oe.rec.sig) === Ye.baseSig;
                if (Ye.optimisticGen !== void 0 && (fr || !Ye.updater)) {
                  Ye.del ? (Me = i.initialValue, je = "del", ct = Ye.prevalidatedBytes ?? ln, yt = void 0) : (Me = Ye.next, je = "set", ct = Ye.prevalidatedBytes ?? 0, yt = Ye.prevalidatedJson), dt.push(Ye);
                  continue;
                }
                if (Ye.del) {
                  if (!st(ce, i, ln)) {
                    Ye.reject(Tr(i.namespace));
                    continue;
                  }
                  Me = i.initialValue, je = "del", ct = ln, yt = void 0, dt.push(Ye);
                  continue;
                }
                const Lt = Ye.updater ?? Ye.next;
                let $t;
                try {
                  $t = typeof Lt == "function" ? Lt(Me) : Lt;
                } catch (cn) {
                  Ye.reject(cn);
                  continue;
                }
                const Gt = Mn($t, i.maxBytes);
                if (typeof Gt == "number") {
                  Ye.reject(C(i, $t, Gt));
                  continue;
                }
                const [qn, dr] = Gt;
                if ($t = sn(qn), i.kind === "u" && !st(ce, i, dr)) {
                  Ye.reject(Tr(i.namespace));
                  continue;
                }
                if (i.validate) {
                  const cn = He(Me, le, ce, de, lr);
                  let pr = false;
                  try {
                    pr = i.kind === "s" ? i.validate($t, cn) : i.validate($t, { ...cn, self: true, online: true, removed: false });
                  } catch (mt) {
                    Ye.reject(mt);
                    continue;
                  }
                  if (!pr) {
                    Ye.reject(me(`state validation failed for "${i.namespace}"`));
                    continue;
                  }
                }
                Me = $t, je = "set", ct = dr, yt = qn, dt.push(Ye);
              }
              if (!dt.length || !je) {
                Se = [];
                break;
              }
              const $n = Math.min($i, Math.max(qr, pe ? pe.iat - Date.now() + 1e3 : 0, Oe ? Oe.rec.hlc[0] - Date.now() + 1e3 : 0));
              let Vt;
              try {
                const Ye = we.nextHlc(i.namespace, Kt, $n);
                oe.signingHlc = Ye, Vt = await lp(ge.sign, ge.signPubJwk, { kind: i.kind, appId: e, roomId: ye, ns: i.namespace, hlc: Ye, peerId: le, userId: ce, ...je === "del" ? { del: true } : { val: Me }, cert: pe }, yt);
              } catch (Ye) {
                T(i, dt, Ye, ce), Se = [];
                break;
              } finally {
                oe.signingHlc = null;
              }
              if (F()) {
                re(i), ue(dt), Se = [];
                break;
              }
              if (!E(Vt, i.requiredRoles)) {
                h(i, ce), ke(dt, me(`${dn} to update state "${i.namespace}"`)), Se = [];
                break;
              }
              const an = i.entries.get(Ne);
              if (an && Er(Vt, an.rec) <= 0) {
                if (we.observe(an.rec.hlc[0]), dt.some((Ye) => !!Ye.updater)) {
                  Se = dt;
                  continue;
                }
                h(i, ce), ue(dt), Se = [];
                break;
              }
              const kt = (_a2 = dt[dt.length - 1]) == null ? void 0 : _a2.optimisticGen, Pn = kt !== void 0 && ((_b = i.optimistic) == null ? void 0 : _b.gen) === kt, ys = kt !== void 0 && i.optimistic !== null && i.optimistic.gen > kt;
              Pn && re(i), B(i, Vt, de, ct, true, false, Pn || ys) && (i.lastBroadcastAt = performance.now(), _(Vt)), ue(dt), Se = [];
              break;
            }
            Se.length > 0 && T(i, Se, me(`concurrent state contention exceeded for "${i.namespace}"`), ce);
          } finally {
            oe.activeOps.length = 0, W();
          }
        }
      } finally {
        i.flushState = { phase: "idle" }, S();
      }
    })(), k;
  }, ie = (i) => {
    var _a2, _b;
    if (i.optimistic) return i.optimistic.del ? i.initialValue : i.optimistic.value;
    if (i.kind === "s") return ((_a2 = i.entries.get("")) == null ? void 0 : _a2.value) ?? i.initialValue;
    const k = r();
    return k ? ((_b = Ft(i, k)) == null ? void 0 : _b.value) ?? i.initialValue : i.initialValue;
  }, he = (i) => {
    if (F()) return "noop";
    const k = r();
    if (!k) return "defer";
    if (b(k)) return me(`${dn} to update state "${i.namespace}"`);
    if (i.requiredRoles === null || i.requiredRoles.length === 0) return "sync";
    const S = c();
    if (!S) return o() ? "defer" : me(`${dn} to update state "${i.namespace}": requires [${i.requiredRoles.join(", ")}]`);
    if (!S.isAuthorityResolved()) return "defer";
    const U = S.getPeerRoles(k);
    return i.requiredRoles.some((W) => U.includes(W)) ? "sync" : me(`${dn} to update state "${i.namespace}": requires [${i.requiredRoles.join(", ")}]`);
  }, fe = (i, k, S) => {
    var _a2;
    const U = he(i);
    if (U === "noop") return Promise.resolve();
    if (U instanceof Error) return Promise.reject(U);
    if (U === "defer") return Ae(i, { del: k, next: S });
    const W = r(), oe = n(), le = W ? [...N(W)] : [], ge = ie(i), ye = Math.max(Date.now(), we.peek());
    if (k) {
      if (!st(W, i, ln)) return Promise.reject(Tr(i.namespace));
      const Me = i.optimistic ? !i.optimistic.del : !!(W && Ft(i, W)), je = ++i.optGen;
      return z(i, { gen: je, del: true, value: i.initialValue, prev: ge, bytes: ln, timestamp: ye }), Me && i.kind === "u" && i.emit(void 0, { ...He(ge, oe, W, le, ye), self: true, online: true, removed: true }), Ae(i, { del: true, next: void 0, optimisticGen: je, prevalidatedBytes: ln });
    }
    let pe;
    try {
      pe = typeof S == "function" ? S(ge) : S;
    } catch (Me) {
      return Promise.reject(Me);
    }
    const de = Mn(pe, i.maxBytes);
    if (typeof de == "number") return Promise.reject(C(i, pe, de));
    const [Se, ce] = de;
    if (pe = sn(Se), i.kind === "u" && !st(W, i, ce)) return Promise.reject(Tr(i.namespace));
    const Ne = He(ge, oe, W, le, ye);
    if (i.validate) {
      let Me = false;
      try {
        Me = i.kind === "s" ? i.validate(pe, Ne) : i.validate(pe, { ...Ne, self: true, online: true, removed: false });
      } catch (je) {
        return Promise.reject(je);
      }
      if (!Me) return Promise.reject(me(`state validation failed for "${i.namespace}"`));
    }
    const Ce = ++i.optGen;
    z(i, { gen: Ce, del: false, value: pe, prev: ge, bytes: ce, timestamp: ye }), i.kind === "s" ? i.emit(pe, Ne) : i.emit(pe, { ...Ne, self: true, online: true, removed: false });
    const Oe = i.kind === "s" ? "" : W, Fe = (_a2 = i.entries.get(Oe)) == null ? void 0 : _a2.rec.sig;
    return Ae(i, { del: false, next: pe, ...typeof S == "function" ? { updater: S } : {}, ...Fe !== void 0 ? { baseSig: Fe } : {}, optimisticGen: Ce, prevalidatedJson: Se, prevalidatedBytes: ce });
  }, Ee = (i, k, S, U, W) => ({ namespace: i, initialValue: k, requiredRoles: S, maxBytes: U, entries: /* @__PURE__ */ new Map(), optimistic: null, optGen: 0, snapshot: null, clearListeners: W, api: null, ops: [], flushState: { phase: "idle" }, lastBroadcastAt: -1 / 0 }), qe = (i, k, S) => (k.api = S, F() || (A.set(i, k), Xe.scheduleRepull()), S), lt = ((i, k, S) => {
    const U = `s:${i}`, W = A.get(U);
    if (W) return W.api;
    const [oe, le, ge] = ha(i, k, S == null ? void 0 : S.maxBytes, S == null ? void 0 : S.roles, o() || !!c(), true, "makeState", "state role gating"), [ye, pe, de] = Zt("state handler"), Se = S == null ? void 0 : S.validate, ce = { ...Ee(i, oe, ge, le, de), kind: "s", ...Se ? { validate: Se } : {}, emit: pe }, Ne = () => {
      if (ce.optimistic) {
        const Oe = r();
        return He(ce.optimistic.prev, n(), Oe, Oe ? [...N(Oe)] : [], ce.optimistic.timestamp);
      }
      const Ce = ce.entries.get("");
      return Ce ? ot(Ce.rec, Ce.prev, Ce.roles) : null;
    };
    return qe(U, ce, Tn({ get: () => ie(ce), set: (Ce) => fe(ce, false, Ce), getMeta: Ne, onChange: (Ce, Oe) => ye(Ce, Oe, () => {
      const Fe = Ne();
      return Fe ? [[ie(ce), Fe]] : [];
    }) }, ["onChange"]));
  }), ze = ((i, k, S) => {
    const U = `u:${i}`, W = A.get(U);
    if (W) return W.api;
    const [oe, le, ge] = ha(i, k, S == null ? void 0 : S.maxBytes, S == null ? void 0 : S.roles, o() || !!c(), false, "makeUserState", "user state role gating"), [ye, pe, de] = Zt("user state handler"), Se = S == null ? void 0 : S.validate, ce = { ...Ee(i, oe, ge, le, de), kind: "u", ...Se ? { validate: Se } : {}, emit: pe }, Ne = (Oe) => {
      const Fe = r();
      if (Oe.length === 0) return [true, Fe || void 0];
      const Me = Oe[0];
      if (!Me) return [false, void 0];
      const je = n();
      if (je !== "" && Me === je || Fe !== "" && Me === Fe) return [true, Fe || void 0];
      const ct = Ft(ce, Me) ? Me : v(Me) ?? Me;
      return [Fe !== "" && ct === Fe, ct];
    }, Ce = () => {
      if (!ce.optimistic || ce.optimistic.del) return null;
      const Oe = r();
      return { ...He(ce.optimistic.prev, n(), Oe, Oe ? [...N(Oe)] : [], ce.optimistic.timestamp), self: true, online: true, removed: false };
    };
    return qe(U, ce, Tn({ get: (...Oe) => {
      var _a2;
      const [Fe, Me] = Ne(Oe);
      return Fe && ce.optimistic ? ce.optimistic.del ? ce.initialValue : ce.optimistic.value : Me !== void 0 ? ((_a2 = Ft(ce, Me)) == null ? void 0 : _a2.value) ?? ce.initialValue : ce.initialValue;
    }, getAll: () => {
      if (!ce.snapshot) {
        const Oe = {};
        for (const [Me, je] of ce.entries) je.rec.del || (Oe[Me] = je.value);
        const Fe = r();
        ce.optimistic && Fe && (ce.optimistic.del ? delete Oe[Fe] : Oe[Fe] = ce.optimistic.value), ce.snapshot = Object.freeze(Oe);
      }
      return ce.snapshot;
    }, has: (...Oe) => {
      const [Fe, Me] = Ne(Oe);
      return Fe && ce.optimistic ? !ce.optimistic.del : !!(Me !== void 0 && Ft(ce, Me));
    }, set: (Oe) => fe(ce, false, Oe), clear: () => fe(ce, true), getMeta: (...Oe) => {
      const [Fe, Me] = Ne(Oe);
      if (Fe && ce.optimistic) return Ce();
      const je = Me ? Ft(ce, Me) : void 0;
      return je ? Qe(je.rec, je.prev, je.roles, false) : null;
    }, onChange: (Oe, Fe) => ye(Oe, Fe, () => {
      const Me = [], je = r();
      let ct = false;
      for (const [yt, dt] of ce.entries) {
        if (ce.optimistic && je && yt === je) {
          ct = true;
          const Kt = Ce();
          Kt && Me.push([ce.optimistic.value, Kt]);
          continue;
        }
        dt.rec.del || Me.push([dt.value, Qe(dt.rec, dt.prev, dt.roles, false)]);
      }
      if (ce.optimistic && !ct) {
        const yt = Ce();
        yt && Me.push([ce.optimistic.value, yt]);
      }
      return Me;
    }) }, ["onChange"]));
  }), ft = (i) => {
    if (F() || !ee(i) || b(i)) return;
    const k = r();
    let S = false;
    for (const U of A.values()) if (U.kind === "u" && (U.flushState.phase !== "idle" || U.ops.length > 0 || k && Ft(U, k))) {
      S = true;
      break;
    }
    if (S) return (async () => {
      try {
        const U = [];
        for (const pe of A.values()) {
          if (pe.kind !== "u") continue;
          const de = pe.ops.length > 0;
          if (de) for (const Se of pe.ops) Se.urgent = true, U.push(Se.promise.then(Pe, Pe));
          switch (pe.flushState.phase) {
            case "pacing":
              de && pe.flushState.wake();
              break;
            case "idle":
              de && G(pe);
              break;
            case "stepping":
              de || U.push(pe.flushState.stepPromise);
              break;
            default:
              Ge(pe.flushState);
          }
        }
        if (U.length > 0) {
          let pe;
          await Promise.race([Promise.allSettled(U), new Promise((de) => {
            pe = setTimeout(de, ap), ht(pe);
          })]), pe !== void 0 && clearTimeout(pe);
        }
        const W = r();
        if (!W || F() || !ee(i) || b(i)) return;
        const oe = {}, le = [], ge = /* @__PURE__ */ new Set();
        let ye = 0;
        for (const pe of A.values()) {
          if (pe.kind !== "u") continue;
          const de = Ft(pe, W);
          if (!de) continue;
          const Se = xr(de.rec, false), ce = ga(Se);
          ye + ce > ip || (oe[de.rec.userId] = de.rec.pub, le.push(Se), ge.add(de.rec.sig), ye += ce);
        }
        return ge.size > 0 && Z.set(i, ge), le.length > 0 ? { ok: true, p: oe, r: le } : void 0;
      } catch {
        return;
      }
    })();
  }, Je = (i) => F() || !ee(i) || b(i), it = async (i, k, S) => {
    try {
      const U = !St(k.p) || !Array.isArray(k.r) || k.r.length > 32;
      if (Je(i) || U) {
        !F() && U && (q == null ? void 0 : q(i));
        return;
      }
      let W;
      try {
        ({ roomId: W } = await s());
      } catch {
        return;
      }
      if (Je(i)) return;
      const oe = k.p, le = v(i), ge = [];
      let ye = 0;
      const pe = Date.now();
      for (const de of k.r) {
        if (Je(i)) return;
        const Se = js(de, e, W, oe), ce = Se && Se.k === "u" ? pa(Se, ss) : null;
        if (!ce || le && ce.rec.userId !== le) {
          q == null ? void 0 : q(i);
          return;
        }
        const Ne = A.get(`u:${ce.rec.ns}`);
        if (!Ne || Ne.kind !== "u" || ce.bytes > Ne.maxBytes) continue;
        const Ce = await ve(ce, Ne.requiredRoles, i);
        if (Je(i)) return;
        if (Ce === "invalid") {
          q == null ? void 0 : q(i);
          return;
        }
        if (Ce !== "drop") {
          if (ye += Ce.bytes, ye > Ns) return;
          ge.push({ slot: Ne, rec: Ce.rec, roles: Ce.roles, bytes: Ce.bytes, seenAt: pe });
        }
      }
      !Je(i) && ge.length > 0 && J.set(i, ge);
    } finally {
      S == null ? void 0 : S();
    }
  }, Be = (i, k) => {
    const S = r();
    if (!S || !Q || F()) return;
    const U = [];
    for (const W of A.values()) {
      const oe = W.entries.get(W.kind === "s" ? "" : S);
      oe && oe.rec.userId === S && !(k == null ? void 0 : k.has(oe.rec.sig)) && E(oe.rec, W.requiredRoles) && U.push(oe.rec);
    }
    if (U.length !== 0) if (Re()) Ie(i, U, void 0, true);
    else for (const W of U) x({ t: "rec", r: xr(W, true) }, i);
  }, _e = (i, k, S) => {
    if (F()) return;
    const U = Z.get(i);
    Z.delete(i);
    const W = J.get(i);
    if (W) {
      J.delete(i);
      const le = [];
      for (const ge of W) if (ge.rec.userId === k) {
        const ye = B(ge.slot, ge.rec, ge.roles, ge.bytes);
        ye && le.push(ye.rec);
      } else q == null ? void 0 : q(i);
      Le(le, i);
    }
    const oe = D.get(k);
    if (oe) {
      D.delete(k);
      const le = Date.now(), ge = [];
      for (const ye of oe.values()) if (le - ye.seenAt < da && A.get(`u:${ye.slot.namespace}`) === ye.slot && E(ye.rec, ye.slot.requiredRoles)) {
        const pe = B(ye.slot, ye.rec, ye.roles, ye.bytes);
        pe && ge.push(pe.rec);
      }
      Le(ge, i);
    }
    Ve(i, true), S && Q && A.size > 0 && (Be(i, U), Xe.onPeerJoined(i, Re()));
  }, nt = (i) => {
    J.delete(i), Z.delete(i), L.delete(i), Ve(i, false), Xe.onPeerDisconnected(i);
  };
  return { makeState: lt, makeUserState: ze, verifyAndApplyStateRecord: async (i, k) => !!await V(i, k), prepareHandshakeReady: ft, stageHandshakeUserState: it, setUserPresence: X, onPeerJoined: _e, onPeerDisconnected: (i) => {
    nt(i);
  }, onUserLeft: (i) => {
    if (F() || g(i)) return;
    D.delete(i);
    const k = Date.now();
    for (const S of A.values()) if (S.kind === "u") {
      const U = S.entries.get(i);
      U && te(S, i, U, k, [...U.roles]);
    }
  }, purgeBannedUser: (i) => {
    if (F()) return;
    X(i, false), D.delete(i);
    const k = r(), S = Date.now();
    let U = false;
    for (const W of A.values()) {
      k && i === k && re(W);
      const oe = W.kind === "s" ? "" : i, le = W.entries.get(oe);
      le && (W.kind === "u" || le.rec.userId === i) && (te(W, oe, le, S, []), W.kind === "s" && (U = true));
    }
    U && Xe.scheduleRepull();
  }, clearPeer: nt, destroy: () => {
    R || (R = true, Xe.destroy(), J.clear(), Z.clear(), D.clear(), ne.clear(), j.clear(), L.clear(), ae.forEach((i) => i.resolve(false)), ae.clear(), A.forEach((i) => {
      re(i);
      const k = i.ops.splice(0);
      let S = [];
      switch (i.flushState.phase) {
        case "pacing":
          i.flushState.wake(), i.flushState = { phase: "idle" };
          break;
        case "stepping":
          S = i.flushState.activeOps.splice(0);
          break;
        case "idle":
          break;
        default:
          Ge(i.flushState);
      }
      ue(S), ue(k), i.clearListeners();
    }));
  } };
}, pp = 50, ya = "beforeunload", Xn = /* @__PURE__ */ new Set(), hp = Object.freeze([]), ma = () => Xn.forEach((e) => e()), gp = (e) => (Xn.add(e), Xn.size === 1 && addEventListener(ya, ma), () => {
  Xn.delete(e), Xn.size || removeEventListener(ya, ma);
}), yp = (e) => !!(e && typeof e == "object" && typeof e.then == "function"), mp = (e, t, n) => {
  if (e !== void 0 && !Array.isArray(e)) throw me("use must be an array of room plugins");
  let r = null, s = null;
  for (const o of e ?? []) {
    const c = o && typeof o == "object" ? o[il] : void 0;
    if (!c) throw me("invalid plugin in use[]; expected roles() or scale()");
    if (c.kind === "roles") {
      if (r) throw me('duplicate plugin "roles" in use[]');
      r = c;
    } else {
      if (s) throw me('duplicate plugin "scale" in use[]');
      s = c;
    }
  }
  if (!r && qo.test(t)) throw ml;
  return (r == null ? void 0 : r.selfAsAdmin) && gf(n) && pl(), [r, s];
}, va = (e) => e.phase === "leaving" || e.phase === "left", Mr = (e) => e.phase === "direct-pending" || e.phase === "virtual-upgrading", Ws = (e) => e.phase === "virtual-only" || e.phase === "virtual-upgrading", vp = (e, t, n, r = {}) => {
  const { endpointIdentity: s, clientId: o, appId: c = "", roomId: a = "", password: u = "", maxUsers: f, identity: d, maxReceiveBytes: y, onBeforeLeave: g } = r;
  if (f !== void 0 && !mn(f)) throw Gr("maxUsers");
  d !== void 0 && Pc({ identity: d });
  const [v, b] = mp(r.use, a, d), N = !!v, K = s && !yp(s) ? s : void 0, q = o ?? (K ? K.peerId : vc());
  let A = K ? K.peerId : "", L = "", I = { phase: "active" }, O = false, J = a, Z = null, D = null, j = null;
  const ne = () => A, ae = () => L, we = () => va(I), R = () => I.phase === "active", F = () => {
    j = null;
  }, ee = /* @__PURE__ */ new Set(), P = [], H = (l) => {
    const [p, w, Y] = Zt(l);
    return P.push(Y), [p, w];
  }, [X, z] = H("onPeerActivated"), [re, Ae] = H("onPeerDeactivated"), [Re, Ve] = H("onRoomIdChanged"), [Ue, et] = H("onLeave"), [st, He] = H("onPeerJoin"), [ot, Qe] = H("onPeerLeave"), [E, te] = H("onUserJoin"), [Q, x] = H("onUserLeave"), [_, ve] = H("onError"), m = (l) => {
    we() || ve({ ...l, appId: c, roomId: J });
  }, B = (l) => {
    O || I.phase !== "active" || (O = true, I = { phase: "setup-failed" }, queueMicrotask(() => {
      m(l), yt();
    }));
  }, M = (s ? Promise.resolve(s) : pf(c, q)).then((l) => (A = l.peerId, l), (l) => {
    throw B({ code: "identity-failed", message: Et(l, "endpoint identity resolution failed"), cause: l }), l;
  });
  M.catch(Pe);
  const V = A ? Promise.resolve(A) : M.then((l) => l.peerId);
  V.catch(Pe);
  const De = (l) => {
    l && l !== J && (J = l, Ve(l));
  }, se = /* @__PURE__ */ new Map(), Ie = vf(c, a, d === void 0 ? void 0 : { identity: d }, q).then((l) => (L = l.userId, we() || (Ke == null ? void 0 : Ke.setUserPresence(L, true)), F(), l), (l) => {
    throw B({ code: "identity-failed", message: Et(l, "identity resolution failed"), cause: l }), l;
  });
  Ie.catch(Pe);
  const Le = (v == null ? void 0 : v.selfAsAdmin) && !qo.test(a) ? Ie.then((l) => {
    const p = Tl(a, l.userId);
    return we() || De(p), p;
  }) : void 0;
  Le == null ? void 0 : Le.catch(Pe);
  const $e = (l) => !!(l && l.session.phase !== "direct-pending"), Xe = (l, p) => p ? !!l : $e(l), $ = (l) => l.session.phase === "direct-active" || Mr(l.session) && l.session.verified, ue = (l) => {
    var _a2;
    const p = ne();
    return p && l === p ? ae() : ((_a2 = se.get(l)) == null ? void 0 : _a2.userId) ?? (D == null ? void 0 : D.getPeerUserId(l)) ?? l;
  }, ke = (l) => {
    var _a2;
    const p = ne();
    return p && l === p ? ae() || void 0 : ((_a2 = se.get(l)) == null ? void 0 : _a2.userId) ?? (D == null ? void 0 : D.getPeerUserId(l));
  }, h = (l, p) => {
    let w = 0;
    for (const [Y, be] of se) Y !== p && $e(be) && ue(Y) === l && w++;
    return w;
  }, T = (l, p, w) => {
    const Y = p.emittedUserId;
    if (!Y || Y === w) {
      p.emittedUserId = w, !Y && !we() && (Ke == null ? void 0 : Ke.setUserPresence(w, true));
      return;
    }
    const be = ae(), xe = h(Y, l) === 0, We = h(w, l) === 0;
    p.emittedUserId = w, we() || (xe && (!be || Y !== be) && (x({ userId: Y, peerId: l }), Ke == null ? void 0 : Ke.setUserPresence(Y, false), Ke == null ? void 0 : Ke.onUserLeft(Y)), We && (!be || w !== be) && (Ke == null ? void 0 : Ke.setUserPresence(w, true), Ke == null ? void 0 : Ke.onPeerJoined(l, w, G(l)), te({ userId: w, peerId: l, roles: nt(l) })));
  }, C = (l, p) => {
    if (!p) return;
    const w = se.get(l);
    !w || $(w) || w.userId !== p && (w.userId = p, F(), $e(w) && T(l, w, p));
  }, G = (l) => {
    var _a2;
    return ((_a2 = se.get(l)) == null ? void 0 : _a2.session.phase) === "direct-active";
  }, ie = (l) => $e(se.get(l)), he = (l) => se.has(l), fe = (l, p = false) => {
    var _a2;
    const w = (_a2 = se.get(l)) == null ? void 0 : _a2.session;
    if (!(!w || w.phase === "virtual-only")) return w.phase === "direct-active" || p ? w.peer : void 0;
  }, Ee = (l = false) => {
    const p = [];
    for (const [w, Y] of se) Xe(Y, l) && p.push(w);
    return p;
  }, qe = (l = true) => {
    const p = [];
    for (const w of se.keys()) {
      const Y = fe(w, !l);
      Y && p.push([w, Y]);
    }
    return p;
  }, lt = (l = true) => qe(l).map((p) => p[0]), ze = (l, p) => {
    switch (delete p.deferredReady, p.session.phase) {
      case "virtual-upgrading":
        p.session = { phase: "virtual-only", virtual: p.session.virtual }, F();
        return;
      case "direct-pending":
      case "direct-active":
        se.delete(l), F();
        return;
      case "virtual-only":
        return;
      default:
        Ge(p.session);
    }
  }, ft = (l, p) => {
    const w = [];
    for (const [Y, be] of se) Xe(be, p) && ue(Y) === l && w.push(Y);
    return w;
  }, Je = (l) => {
    const p = ft(l, false);
    return p.length ? p : ft(l, true);
  }, it = (l, p = false) => {
    if (!l) return;
    const w = [], Y = /* @__PURE__ */ new Set(), be = (xe) => {
      Y.has(xe) || (Y.add(xe), w.push(xe));
    };
    for (const xe of Array.isArray(l) ? l : [l]) if (Xe(se.get(xe), p)) be(xe);
    else {
      const We = ft(xe, p);
      We.length ? We.forEach(be) : be(xe);
    }
    return w;
  }, Be = (l, p = false) => Xe(se.get(l), p) ? l : ft(l, p).sort((w, Y) => {
    const be = G(w);
    return be !== G(Y) ? be ? -1 : 1 : tn(w, Y);
  })[0], _e = (l) => !!(l && (Z == null ? void 0 : Z.isPeerBanned(l))), nt = (l = ne()) => (Z == null ? void 0 : Z.getPeerRoles(l)) ?? hp;
  let Ke = null;
  const Ze = (l, p, w) => {
    if (we()) return;
    const Y = ae();
    w && (!Y || p !== Y) && (Ke == null ? void 0 : Ke.setUserPresence(p, true)), Ke == null ? void 0 : Ke.onPeerJoined(l, p, G(l));
    const be = nt(l);
    He({ peerId: l, userId: p, roles: be }), w && (!Y || p !== Y) && te({ userId: p, peerId: l, roles: be });
  }, rt = (l, p, w, Y) => {
    if (!p) return;
    const be = ae();
    Ke == null ? void 0 : Ke.onPeerDisconnected(l), Ae(l), we() || (Qe({ peerId: l, userId: Y }), w && (!be || Y !== be) && (x({ userId: Y, peerId: l }), Ke == null ? void 0 : Ke.setUserPresence(Y, false), Ke == null ? void 0 : Ke.onUserLeft(Y)));
  };
  let at = Pe;
  const i = (l, p) => {
    const w = it(l);
    return (w ? Array.isArray(w) ? w : [w] : Ee(false)).flatMap((Y) => ie(Y) ? [Promise.resolve(p(Y, fe(Y, false)))] : (dl(Y), []));
  }, k = (l) => {
    let p = false;
    const w = () => {
      Y();
    }, Y = ed(l, 40, 150, () => {
      p = true, ee.delete(w);
    });
    p || ee.add(w);
  }, S = (l, p, w) => {
    const Y = fe(l, true);
    Y && (!p || Y === p || w === Ot) && $n.send("", { target: l }).catch(Pe), ct(l, p, w);
  }, U = (l, p) => {
    p !== Ot && m({ code: "peer-error", peerId: l, message: Et(p, "peer error"), cause: p });
  }, W = (l, p) => {
    he(l) && U(l, p), S(l, void 0, p);
  }, oe = ep({ iterate: i, isActive: ie, onPeerError: W, preparePeer: (l) => {
    const p = fe(l, false);
    return p ? Promise.resolve(p) : D ? D.prepareMediaPeer(l) : Promise.reject($r);
  }, getPeerUserId: ue, onPeerMediaPinChange: (l, p) => {
    D == null ? void 0 : D.setPeerMediaPinned(l, p);
  } }), le = (l, p) => {
    var _a2;
    const w = (_a2 = se.get(l)) == null ? void 0 : _a2.session;
    if (w) switch (w.phase) {
      case "direct-active":
        return w.transport;
      case "direct-pending":
        return p ? w.transport : void 0;
      case "virtual-upgrading":
        return p ? w.transport : w.virtual;
      case "virtual-only":
        return w.virtual;
      default:
        return Ge(w);
    }
  }, { makeAction: ge, makeInternalAction: ye, makeInternalRequestAction: pe, handleData: de, clearPeer: Se, clearListeners: ce } = Wd({ getPeerIds: Ee, canReceiveFromPeer: (l, p) => !_e(l) && (ie(l) || mt.canReceiveFromPeer(l, p)), onPeerError: W, getTransport: le, broadcastInline: (l, p, w) => D ? D.broadcastInline(l, p, w) : false, registerActionAuthority: (l, p) => {
    if (!Z) throw Uo("action role gating");
    D == null ? void 0 : D.registerActionAuthority(l, p);
  }, getLocalActionCert: (l, p) => Z ? Z.getLocalActionCert(l, p) : Promise.resolve(null), authorizePeerAction: (l, p, w) => Z ? Z.authorizePeerAction(l, p, w) : false, getPeerRoles: (l) => nt(l), getPeerUserId: ue, resolveSendTarget: it, resolveRequestTarget: Be, onUnknownType: (l) => {
    l === "@_state" && !we() && Fe();
  }, ...y === void 0 ? {} : { maxReceiveBytes: y } }), Ne = async () => (await vs, [await Ie, await (Z == null ? void 0 : Z.getAuthorityInfo())]), [Ce, Oe] = io(512, 8), Fe = () => {
    if (!Ke) {
      const l = dp({ appId: c, getRoomId: () => J, getSelfId: ne, getLocalUserId: ae, ensureReady: async () => {
        const [p, w] = await Ne();
        return { selfId: ne(), user: p, roomId: (w == null ? void 0 : w.roomId) ?? J };
      }, hasRolesPlugin: () => N, getRolesProvider: () => Z, getScaleProvider: () => D, isPeerActive: ie, isPeerPendingHandshake: (p) => !!(mt.getPeer(p) && !G(p)), isDirectPeer: G, getDirectPeerIds: () => lt(true), isUserOnline: (p) => {
        const w = ae();
        return !!(w && p === w || h(p) > 0);
      }, getKnownPeerUserId: ke, isPeerBanned: (p) => !!(p && _e(p)), getPeerRoles: (p) => nt(p), makeInternalAction: ye, onInvalidRecord: (p) => {
        const w = ne();
        !p || p === w || Ce(p) && (Oe(p), W(p, nc("excessive invalid state records")));
      } });
      if (we()) l.destroy();
      else {
        L && l.setUserPresence(L, true);
        for (const [p, w] of se) $e(w) && l.setUserPresence(ue(p), true);
      }
      Ke = l;
    }
    return Ke;
  }, Me = (l) => {
    var _a2;
    const p = se.get(l);
    if (!p) return [false, false, ue(l), void 0];
    const w = $e(p), Y = p.emittedUserId ?? p.userId ?? (D == null ? void 0 : D.getPeerUserId(l)) ?? l, be = p.session.phase === "virtual-only" ? void 0 : p.session.peer, xe = Ws(p.session) ? p.session.virtual : null;
    se.delete(l), (_a2 = xe == null ? void 0 : xe.close) == null ? void 0 : _a2.call(xe);
    const We = w && h(Y, l) === 0;
    return w && F(), [w, We, Y, be];
  }, je = (l, p) => {
    Ke == null ? void 0 : Ke.clearPeer(l), Se(l, p), oe.clearPeer(l);
  }, ct = (l, p, w) => {
    const Y = w === void 0 ? $r : It(w, Cn), be = Y === Ot, xe = fe(l, true);
    if (p) {
      if (xe !== p) if (be) {
        if (D == null ? void 0 : D.markPeerBanned(l), !he(l)) return;
      } else return;
    } else if (!he(l)) {
      be && (D == null ? void 0 : D.markPeerBanned(l));
      return;
    }
    const We = se.get(l);
    if (!be && xe && (We == null ? void 0 : We.session.phase) === "virtual-upgrading") {
      Gt(l, Y), Ke == null ? void 0 : Ke.clearPeer(l), ze(l, We), xe.destroy(), D == null ? void 0 : D.removeDirectPeer(l, xe, Y), t(l, false);
      return;
    }
    be && (D == null ? void 0 : D.markPeerBanned(l)), Gt(l, Y), je(l, Y);
    const [gt, qt, Fn, kn] = Me(l);
    rt(l, gt, qt, Fn), kn ? ((be || w === Nn) && !we() ? k(kn) : kn.destroy(), D == null ? void 0 : D.removeDirectPeer(l, kn, Y), t(l, !be && w !== Nn)) : gt && (D == null ? void 0 : D.removeDirectPeer(l, void 0, Y));
  }, yt = () => {
    if (va(I)) return I.promise;
    const { promise: l, resolve: p, reject: w } = Promise.withResolvers();
    return I = { phase: "leaving", promise: l }, (async () => {
      var _a2;
      g == null ? void 0 : g(), kt.clear();
      for (const We of Ee(true)) mt.clearPeer(We, Ei);
      et();
      const Y = D ? lt(false).filter((We) => {
        var _a3;
        const gt = (_a3 = se.get(We)) == null ? void 0 : _a3.session;
        return gt && gt.phase !== "virtual-only" && gt.transport.isOpen;
      }) : void 0, be = se.size > 0 && (!Y || Y.length > 0), xe = new AbortController();
      be && $n.send("", { ...Y ? { target: Y } : {}, signal: xe.signal }).catch(Pe), D && await D.announceLeave(), be && await new Promise((We) => {
        setTimeout(We, pp);
      }), xe.abort();
      try {
        D == null ? void 0 : D.destroy();
        for (const gt of ee) gt();
        ee.clear();
        const We = Ee(true);
        for (const gt of We) {
          const qt = se.get(gt);
          if (!qt) continue;
          const Fn = qt.session.phase === "virtual-only" ? null : qt.session.peer, kn = Ws(qt.session) ? qt.session.virtual : null;
          se.delete(gt), Fn == null ? void 0 : Fn.destroy(), (_a2 = kn == null ? void 0 : kn.close) == null ? void 0 : _a2.call(kn);
        }
        se.clear(), F();
        for (const gt of We) je(gt, Ei);
      } finally {
        I = { phase: "left", promise: l };
        for (const We of [...P, oe.clearListeners, ce, () => Ke == null ? void 0 : Ke.destroy()]) We();
        try {
          at();
        } finally {
          n();
        }
      }
    })().then(p, w), l;
  }, dt = pe("ping");
  dt.onRequest(() => "");
  const Kt = ye("signal"), lr = ye("stream", { maxPayloadBytes: 65536 }), $n = ye("leave", { sendToPending: true, receiveWhilePending: true }), Vt = ye("hsdata", { sendToPending: true, receiveWhilePending: true, maxPayloadBytes: 65536 }), an = ye("hsready", { sendToPending: true, receiveWhilePending: true, maxPayloadBytes: 131072 }), kt = /* @__PURE__ */ new Map(), Pn = Mt(256), ys = (l = false, p) => {
    const w = /* @__PURE__ */ new Set([ae()]);
    for (const [Y, be] of se) $e(be) && w.add(ue(Y));
    if (l) for (const [Y, be] of kt) Y !== p && w.add(be);
    return w;
  }, Ye = (l, p = false) => {
    var _a2;
    if (f === void 0 || ie(l)) return false;
    const w = ys(p, l), Y = ((_a2 = se.get(l)) == null ? void 0 : _a2.userId) ?? (D == null ? void 0 : D.getPeerUserId(l)) ?? Pn.get(l) ?? l;
    return !w.has(Y) && w.size >= f;
  }, fr = (l) => {
    var _a2;
    const p = ((_a2 = se.get(l)) == null ? void 0 : _a2.userId) ?? (D == null ? void 0 : D.getPeerUserId(l)) ?? Pn.get(l);
    return !_e(ne()) && !_e(l) && !(p !== void 0 && Ye(l, true));
  }, Lt = (l, p, w) => {
    var _a2;
    if (fe(l, true) !== p) return;
    const Y = w === hn, be = Y ? Ot : Nn;
    if (Y) D == null ? void 0 : D.markPeerBanned(l);
    else {
      const We = ((_a2 = se.get(l)) == null ? void 0 : _a2.userId) ?? (D == null ? void 0 : D.getPeerUserId(l));
      We && Pn.set(l, We);
    }
    const xe = Y ? (Z == null ? void 0 : Z.getBanReason(ue(l))) ?? (Z == null ? void 0 : Z.getBanReason(l)) : void 0;
    mt.clearPeer(l, be), Ke == null ? void 0 : Ke.clearPeer(l), kt.delete(l), an.send({ ok: false, err: w, ...xe !== void 0 ? { reason: xe } : {} }, { target: l }).catch(Pe).finally(() => {
      fe(l, true) === p && ct(l, p, be);
    });
  }, $t = (l, p) => _e(l) ? (Lt(l, p, hn), false) : f === void 0 || ie(l) ? true : Ye(l, true) ? (Lt(l, p, Gn), false) : (kt.set(l, ue(l)), true), Gt = (l, p) => {
    mt.clearPeer(l, p), kt.delete(l);
  }, qn = (l, p) => {
    if (l && typeof l == "object" && l.ok === true) {
      if (mt.getPeer(p) && !G(p) && !_e(p) && !Ye(p)) {
        Fe().stageHandshakeUserState(p, l, () => {
          !we() && mt.getPeer(p) && ws("", p);
        });
        return;
      }
      ws("", p);
      return;
    }
    ws(l, p);
  }, dr = (l, p, w) => {
    if (w && fe(l, true) !== w) return;
    const Y = se.get(l);
    if (!Y || !Mr(Y.session)) return;
    if (Y.userId = p.userId, F(), _e(l) || _e(p.userId)) throw D == null ? void 0 : D.markPeerBanned(l), Ot;
    const be = Y.deferredReady;
    delete Y.deferredReady, Y.session = { ...Y.session, verified: true }, D == null ? void 0 : D.setPeerSignPublicKey(l, p.peerPubKey), be !== void 0 && queueMicrotask(() => {
      const xe = se.get(l);
      xe && $(xe) && (!w || fe(l, true) === w) && qn(be, l);
    });
  }, cn = { get selfId() {
    return ne();
  }, appId: c, initialRoomId: a, password: u, ...f === void 0 ? {} : { maxUsers: f }, getRoomId: () => J, setEffectiveRoomId: De, getLocalEndpointIdentity: () => M, getLocalUserIdentity: () => Ie, getPeerUserId: ue, getKnownPeerUserId: ke, getUserPeerIds: Je, setPeerUserId: C, getActivePeerIds: () => Ee(false), getDirectActivePeerIds: () => lt(true), getAllPeerIds: () => Ee(true), isPeerActive: ie, getPeerHandle: fe, kickPeer: (l, p) => S(l, void 0, p), emitError: m, makeInternalAction: ye, deliverRawData: (l, p) => {
    _e(l) || de(l, p);
  }, getRolesProvider: () => Z, getScaleProvider: () => D, activateVirtualPeer: (l, p) => {
    var _a2, _b, _c2, _d2, _e2, _f2;
    if (!R() || _e(l) || Ye(l, true)) return (_a2 = p.close) == null ? void 0 : _a2.call(p), false;
    if (G(l)) return (_b = p.close) == null ? void 0 : _b.call(p), true;
    const w = se.get(l), Y = $e(w), be = (w == null ? void 0 : w.userId) ?? (D == null ? void 0 : D.getPeerUserId(l)) ?? l, xe = !Y && h(be, l) === 0;
    if (!w) se.set(l, { session: { phase: "virtual-only", virtual: p }, userId: be, emittedUserId: be });
    else switch (w.userId = be, w.session.phase) {
      case "virtual-only":
        w.session.virtual !== p && ((_d2 = (_c2 = w.session.virtual).close) == null ? void 0 : _d2.call(_c2)), w.session = { phase: "virtual-only", virtual: p };
        break;
      case "virtual-upgrading":
        w.session.virtual !== p && ((_f2 = (_e2 = w.session.virtual).close) == null ? void 0 : _f2.call(_e2)), w.session = { ...w.session, virtual: p };
        break;
      case "direct-pending":
        w.session = { phase: "virtual-upgrading", virtual: p, peer: w.session.peer, transport: w.session.transport, verified: w.session.verified }, w.emittedUserId = be;
        break;
      case "direct-active":
        break;
      default:
        Ge(w.session);
    }
    return F(), Y || Ze(l, be, xe), true;
  }, deactivateVirtualPeer: (l, p) => {
    var _a2;
    if (G(l)) return;
    const w = se.get(l);
    if (!w || !Ws(w.session)) return;
    const Y = It(p, Cn), be = w.emittedUserId ?? w.userId ?? (D == null ? void 0 : D.getPeerUserId(l)) ?? l, xe = w.session.virtual;
    w.session.phase === "virtual-upgrading" ? (w.session = { phase: "direct-pending", peer: w.session.peer, transport: w.session.transport, verified: w.session.verified }, delete w.emittedUserId) : se.delete(l), (_a2 = xe.close) == null ? void 0 : _a2.call(xe);
    const We = h(be, l) === 0;
    F(), he(l) || je(l, Y), rt(l, true, We, be);
  }, purgeBannedUserState: (l) => {
    Ke == null ? void 0 : Ke.purgeBannedUser(l);
  }, onRolesChanged: F, onPeerActivated: (l, p) => X(l, p, () => qe(true)), onPeerDeactivated: re, onRoomIdChanged: Re, onLeave: Ue }, pr = Gd({ endpointIdentityP: M, appId: c, roomId: Le ?? a, getUserIdentity: () => Ie, onVerified: dr }), mt = Qd({ selfIdP: V, onPeerHandshake: pr.run, onHandshakeError: (l, p) => {
    p === Ot || _e(l) || m({ code: "handshake-failed", peerId: l, message: Et(p, "handshake failed"), cause: p });
  }, deferResponderReady: f !== void 0, sendHandshakeData: (l, p, w) => Vt.send(l, { target: p, ...w === void 0 ? {} : { metadata: w } }), sendHandshakeReady: (l, p) => an.send(l, { target: p }), onLocalHandshakePassed: (l, p) => _e(l) ? (Lt(l, p, hn), false) : Ye(l) ? (Lt(l, p, Gn), false) : true, acquireAdmissionSlot: (l, p) => fe(l, true) !== p || we() ? false : $t(l, p), beforeSendHandshakeReady: (l, p) => fe(l, true) === p && !_e(l) && Ke ? Ke.prepareHandshakeReady(l) : void 0, onActivate: (l, p) => {
    var _a2;
    if (_e(l)) {
      kt.delete(l), S(l, p, Ot);
      return;
    }
    if (Ye(l)) {
      Lt(l, p, Gn);
      return;
    }
    const w = se.get(l);
    if (kt.delete(l), !w || !Mr(w.session) || w.session.peer !== p) return;
    const Y = w.session.phase === "virtual-upgrading", be = w.session.phase === "virtual-upgrading" ? w.session.virtual : null, xe = w.userId ?? l;
    w.userId = xe, delete w.deferredReady;
    const We = !Y && h(xe, l) === 0;
    w.session = { phase: "direct-active", peer: p, transport: w.session.transport }, (_a2 = be == null ? void 0 : be.close) == null ? void 0 : _a2.call(be), F(), D == null ? void 0 : D.addDirectPeer(l, p), z(l, p), p.setHandlers({ signal: (gt) => {
      fe(l, false) === p && Kt.send(gt, { target: l }).catch(Pe);
    } }), Y ? (T(l, w, xe), Ke == null ? void 0 : Ke.onPeerJoined(l, xe, true)) : (w.emittedUserId = xe, Ze(l, xe, We));
  }, onFailure: (l, p, w) => {
    if (kt.delete(l), w === Ot) {
      Lt(l, p, hn);
      return;
    }
    S(l, p, w);
  } });
  let ms, oi, An = null;
  if (v) try {
    const l = v.setup(cn, Le);
    Z = l.provider, ms = l.api;
  } catch (l) {
    An = { error: l }, B({ code: "plugin-failed", plugin: "roles", message: Et(l, "roles setup failed"), cause: l });
  }
  if (b && !An) try {
    const l = b.setup(cn);
    D = l.provider, oi = l.api;
  } catch (l) {
    An = { error: l }, B({ code: "plugin-failed", plugin: "scale", message: Et(l, "scale setup failed"), cause: l });
  }
  const vs = An ? Promise.reject(An.error) : wt([M, Ie, ...Le ? [Le] : []]).then(Pe);
  vs.catch(Pe), D && !An && Fe();
  const ws = (l, p) => {
    if (!we()) {
      if (l && typeof l == "object" && l.ok === false) {
        if (!mt.getPeer(p) || G(p)) return;
        if (l.err === "room full") {
          mt.clearPeer(p, Nn), m({ code: "room-full", peerId: p, message: Gn }), ct(p, fe(p, true), Nn);
          return;
        }
        if (l.err === "peer banned") {
          const w = typeof l.reason == "string" && l.reason.length <= 512 ? l.reason : void 0;
          mt.clearPeer(p, Ot), m(gl(w, p)), S(p, fe(p, true), Ot);
          return;
        }
      }
      mt.receiveReady(p);
    }
  };
  Kt.onMessage((l, { peerId: p }) => {
    var _a2;
    (_a2 = fe(p, false)) == null ? void 0 : _a2.signal(l);
  }), lr.onMessage((l, { peerId: p }) => {
    oe.receiveStreamMeta(l, p);
  }), $n.onMessage((l, { peerId: p }) => ct(p, void 0, yl)), Vt.onMessage((l, { peerId: p, metadata: w }) => {
    we() || mt.receiveData(l, p, w);
  }), an.onMessage((l, { peerId: p }) => {
    if (we()) return;
    const w = se.get(p);
    if (!w || !$(w)) {
      w && Mr(w.session) && !w.session.verified && mt.getPeer(p) && (w.deferredReady = l);
      return;
    }
    qn(l, p);
  }), e((l, p) => {
    if (!R()) {
      l.destroy();
      return;
    }
    if (!fr(p)) {
      l.destroy();
      return;
    }
    const w = se.get(p);
    if (w) switch (w.session.phase) {
      case "virtual-only":
        Ke == null ? void 0 : Ke.clearPeer(p);
        break;
      case "direct-pending":
      case "virtual-upgrading": {
        const xe = w.session.peer;
        if (xe === l) return;
        const We = me("peer replaced");
        xe.destroy(), Gt(p, We), Ke == null ? void 0 : Ke.clearPeer(p);
        const gt = se.get(p);
        gt && fe(p, true) === xe && ze(p, gt);
        break;
      }
      case "direct-active": {
        const xe = w.session.peer;
        if (xe === l) return;
        const We = me("peer replaced");
        xe.destroy(), Gt(p, We);
        const [gt, qt, Fn] = Me(p);
        je(p, We), rt(p, gt, qt, Fn), D == null ? void 0 : D.removeDirectPeer(p, xe, We);
        break;
      }
      default:
        Ge(w.session);
    }
    const Y = td(l, () => {
      var _a2;
      const xe = (_a2 = se.get(p)) == null ? void 0 : _a2.session;
      return !!(xe && xe.phase !== "virtual-only" && xe.transport === Y);
    }), be = se.get(p);
    (be == null ? void 0 : be.session.phase) === "virtual-only" ? (delete be.deferredReady, be.session = { phase: "virtual-upgrading", virtual: be.session.virtual, peer: l, transport: Y, verified: false }) : se.set(p, { session: { phase: "direct-pending", peer: l, transport: Y, verified: false } }), mt.addPeer(p, l), l.setHandlers({ data: (xe) => {
      fe(p, true) === l && !_e(p) && ((D == null ? void 0 : D.handleFrame(p, xe)) || de(p, xe));
    }, stream: (xe) => {
      _e(p) || oe.receiveRemoteStream(p, xe);
    }, close: () => ct(p, l, $r), error: (xe) => {
      en("peer", xe), fe(p, true) === l && U(p, xe), ct(p, l, xe);
    } }), mt.start(p, l);
  }), bl && (at = gp(() => {
    yt().catch(Pe);
  }));
  const ii = { ready: vs, makeAction: ge, makeState: ((l, p, w) => Fe().makeState(l, p, w)), makeUserState: ((l, p, w) => Fe().makeUserState(l, p, w)), leave: yt, ping: async (l) => {
    const p = Date.now();
    return await dt.request("", { target: l }), Date.now() - p;
  }, getSelf: async () => {
    const [l, p] = await Ne();
    return { peerId: ne(), userId: l.userId, identityPersistence: l.persistence ?? "none", roomId: (p == null ? void 0 : p.roomId) ?? J, baseRoomId: (p == null ? void 0 : p.baseRoomId) ?? a, isAdmin: (p == null ? void 0 : p.isAdmin) ?? false, roles: (p == null ? void 0 : p.roles) ?? [] };
  }, getPeers: () => Za(Ee(false).map((l) => {
    var _a2;
    const p = fe(l, false), w = !!p;
    return [l, { userId: ue(l), connection: p ? p.connection : null, direct: w, hops: w ? 1 : ((_a2 = D == null ? void 0 : D.getRoute(l)) == null ? void 0 : _a2.hops) ?? 2, roles: [...nt(l)] }];
  })), getUsers: () => {
    if (j) return j;
    const l = ae(), p = {};
    for (const Y of Ee(false)) {
      const be = ue(Y);
      l && be === l || (p[be] ?? (p[be] = { peerIds: [], roles: nt(be) })).peerIds.push(Y);
    }
    const w = {};
    for (const [Y, be] of $o(p)) w[Y] = Object.freeze({ peerIds: Object.freeze(be.peerIds), roles: Object.isFrozen(be.roles) ? be.roles : Object.freeze([...be.roles]) });
    return j = Object.freeze(w), j;
  }, addStream: (l, p = {}) => oe.addStream(l, p, lr.send), removeStream: (l, p = {}) => {
    oe.removeStream(l, p.target);
  }, replaceTrack: (l, p, w = {}) => oe.replaceTrack(l, p, w.target), ...ms, ...oi, onPeerJoin: (l, p) => st(l, p, () => Ee(false).map((w) => [{ peerId: w, userId: ue(w), roles: [...nt(w)] }])), onPeerLeave: ot, onUserJoin: (l, p) => E(l, p, () => {
    const w = ae(), Y = [], be = /* @__PURE__ */ new Set();
    for (const xe of Ee(false)) {
      const We = ue(xe);
      (!w || We !== w) && !be.has(We) && (be.add(We), Y.push([{ userId: We, peerId: xe, roles: [...nt(xe)] }]));
    }
    return Y;
  }), onUserLeave: Q, onPeerStream: oe.onPeerStream, onError: _ };
  return Tn(ii, ["onPeerJoin", "onPeerLeave", "onUserJoin", "onUserLeave", "onPeerStream", "onError", ...ms ? ["onRoleChange"] : []]), [ii, { localEndpointP: M, effectiveRoomIdP: Le, hasSetupFailed: () => O, getScaleProvider: () => D, setOnScaleTargetsChanged: (l) => {
    D == null ? void 0 : D.setOnTargetsChanged(l);
  }, canConnectPeer: fr, emitError: (l) => {
    we() || ve(l);
  } }];
}, Hs = 5333, wp = [233, 533, 1333], bp = (e, t) => {
  const n = { ...e };
  for (const [r, s] of $o(t)) s !== void 0 && (n[r] = s);
  return n;
}, Ks = (e, t) => {
  let n = e.get(t);
  return n || (n = /* @__PURE__ */ new Map(), e.set(t, n)), n;
};
var Sp = ({ defaultConfig: e, init: t, subscribe: n, announce: r }) => {
  const s = vc(), o = /* @__PURE__ */ new Map();
  return ((c, a, ...u) => {
    var _a2, _b;
    if (!c) throw me("config map required");
    if (u.length > 0 && u[0] !== void 0) throw me("joinRoom takes 2 arguments; register error listeners via room.onError(fn)");
    const f = e ? bp(e, c) : c, { appId: d } = f;
    if (!d) throw xi("appId");
    if (!a) throw xi("roomId");
    if (f.maxReceiveBytes !== void 0 && !mn(f.maxReceiveBytes)) throw Gr("maxReceiveBytes");
    if (f.maxUsers !== void 0 && !mn(f.maxUsers)) throw Gr("maxUsers");
    Pc(f);
    const y = (_a2 = o.get(d)) == null ? void 0 : _a2.get(a);
    if ((y == null ? void 0 : y.phase) === "occupied") throw me(`already joined room "${a}" for appId "${d}"`);
    (y == null ? void 0 : y.phase) === "leaving" && y.finalizeCleanup();
    let g = { phase: "active" }, v = "unconfirmed", b = a, N, K = Pe, q = Pe, A = Pe;
    const L = () => g.phase !== "active", I = /* @__PURE__ */ new Map(), O = [], J = (R) => so(wn, d, R), Z = (R) => {
      const F = o.get(d);
      if (!F) return;
      const ee = F.get(a);
      if (ee && R(ee) && F.delete(a), b !== a) {
        const P = F.get(b);
        P && R(P) && F.delete(b);
      }
      F.size === 0 && o.delete(d);
    }, D = () => {
      if (g.phase !== "left") {
        g = { phase: "left", relaysStopped: false }, K = Pe, Z((R) => R.phase === "occupied" && R.room === ae || R.phase === "leaving" && R.finalizeCleanup === D);
        for (const R of I.values()) R.connectedPeer && !R.connectedPeer.isDead && R.connectedPeer.destroy(), R.answeringPeer && !R.answeringPeer.isDead && R.answeringPeer.destroy(), zt(R), ps(R), R.connection = { phase: "disconnected" };
        I.clear(), A();
      }
    }, j = (R) => {
      for (const F of R) F.announce.phase === "active" && (F.announce.timer = tt(F.announce.timer));
    };
    let ne = [];
    const [ae, we] = vp((R) => {
      K = R;
    }, (R, F = true) => {
      if (g.phase === "left") return;
      const ee = I.get(R);
      (ee == null ? void 0 : ee.connectedPeer) && ea(ee, ee.connectedPeer), Dt(I), F && q();
    }, D, { clientId: s, appId: d, roomId: a, ...f.password === void 0 ? {} : { password: f.password }, ...f.maxUsers === void 0 ? {} : { maxUsers: f.maxUsers }, ...f.use === void 0 ? {} : { use: f.use }, ...f.identity === void 0 ? {} : { identity: f.identity }, ...f.maxReceiveBytes === void 0 ? {} : { maxReceiveBytes: f.maxReceiveBytes }, onBeforeLeave: () => {
      g.phase === "active" && (g = { phase: "leaving-flush" }), j(ne);
      const R = Ks(o, d), F = { phase: "leaving", finalizeCleanup: D }, ee = R.get(a);
      if ((!ee || ee.phase !== "occupied" || ee.room === ae) && R.set(a, F), b !== a) {
        const P = R.get(b);
        (!P || P.phase !== "occupied" || P.room === ae) && R.set(b, F);
      }
    } });
    try {
      const R = we.localEndpointP.then(($) => $.peerId);
      R.catch(Pe);
      const F = ($) => {
        g.phase !== "left" && we.emitError($);
      }, ee = { config: f, appId: d, roomId: a, peerId: "" }, P = (_b = we.effectiveRoomIdP) == null ? void 0 : _b.then(($) => {
        if (b = $, ee.roomId = $, $ !== a && g.phase === "active") {
          const ue = Ks(o, d), ke = ue.get($);
          (ke == null ? void 0 : ke.phase) === "leaving" && ke.finalizeCleanup(), ue.has($) || ue.set($, { phase: "occupied", room: ae });
        }
        return $;
      });
      P == null ? void 0 : P.catch(Pe);
      const H = ($) => {
        const ue = P ? P.then($) : $(a);
        return ue.catch(Pe), ue;
      }, X = H(($) => co(J($))), z = wt([P ?? Promise.resolve(a), R]).then(([$, ue]) => (N = ue, ee.peerId = ue, co(so(J($), ue))));
      z.catch(Pe);
      const re = H(($) => zl(f.password ?? "", d, $)), Ae = ($) => async (ue, ke, h) => ({ type: ue.type, sdp: await $(re, ue.sdp, ld(ue.type, ke, h)) }), Re = Ae(Hl), Ve = Ae(Wl);
      let Ue = false, et = false;
      const { checkout: st, getOffers: He, claimLeased: ot, reclaimLeased: Qe, destroy: E } = Md(() => sa(true, f)), te = async ($, ue, ke) => {
        const h = await $.getOffer();
        if (!h || h.type !== "offer") throw me("failed to get offer for peer");
        return (await Ve(h, ue, ke)).sdp;
      }, Q = ($, ue) => {
        if (L()) {
          $.destroy();
          return;
        }
        const ke = Qn(I, ue);
        if (ke.connectedPeer && ke.connectedPeer !== $) {
          if (Tc(ke.connectedPeer) !== "stale") {
            $.destroy();
            return;
          }
          rs(ke);
        }
        kd(ke, $), K($, ue), zt(ke), $.isDead && ke.connectedPeer === $ && (ea(ke, $), Dt(I));
      }, x = !!f.passive;
      let _ = Pe, ve = Pe;
      q = () => {
        _(), !(x || !Ue || et) && (et = true, queueMicrotask(() => {
          et = false, g.phase === "active" && ve();
        }));
      };
      const m = ($, ue) => {
        if (g.phase === "left") return;
        const ke = I.get(ue);
        (ke == null ? void 0 : ke.connectedPeer) === $ && (rs(ke), Dt(I), q());
      }, { handleMessage: B, dialPeer: M } = Ed({ appId: d, getRoomId: () => b, config: f, peerStates: I, getRootTopicPlaintext: () => J(b), rootTopicP: X, selfTopicP: z, toPlain: Re, toCipher: Ve, isLeaving: L, onError: F, checkoutOffers: st, claimLeasedOffer: ot, reclaimLeasedOffer: Qe, encryptOffer: te, initPeer: sa, connectPeer: Q, disconnectPeer: m, announceIntervals: O, announceIntervalMs: Hs, getSelfIdNow: () => N, selfIdP: R, onPeerDiscovered: ($) => {
        var _a3;
        we.canConnectPeer($) && ((_a3 = we.getScaleProvider()) == null ? void 0 : _a3.notePeerDiscovered($)) && _();
      }, shouldConnectPeer: ($, ue) => {
        var _a3;
        return we.canConnectPeer($) && (((_a3 = we.getScaleProvider()) == null ? void 0 : _a3.shouldConnectPeer($, ue)) ?? true);
      } });
      _ = () => {
        const $ = we.getScaleProvider();
        if (!(L() || x || !$)) for (const ue of $.getTargetNeighbors()) M(ue);
      };
      const V = t(f);
      ne = (Array.isArray(V) ? V : [V]).map(($) => {
        const ue = Promise.resolve($);
        return ue.catch(Pe), { rawItem: $, relayP: ue, leaseReleased: false, subscription: { phase: "booting" }, announce: { phase: "waiting" }, gen: 0, intervalMs: Hs, attempts: 0, errors: 0, initial: "pending" };
      });
      const De = ($) => {
        $.leaseReleased || ($.leaseReleased = true, _f($.rawItem));
      };
      A = () => {
        if (!(g.phase === "left" && g.relaysStopped)) {
          g = { phase: "left", relaysStopped: true }, j(ne);
          for (const $ of ne) {
            const ue = $.subscription;
            $.subscription = { phase: "closed" }, $.gen += 1, $.announce = { phase: "closed" }, ue.phase === "subscribed" && ue.unsub(), ue.phase !== "subscribing" && De($);
          }
          E();
        }
      };
      const se = ne.length, Ie = ($) => {
        v === "error-reported" || we.hasSetupFailed() || L() || (v = "error-reported", queueMicrotask(() => {
          !L() && !we.hasSetupFailed() && F({ code: "relay-failed", message: Et($, "all signaling relays failed"), appId: d, roomId: b, ...$ !== void 0 ? { cause: $ } : {} });
        }));
      }, Le = ($) => {
        v === "unconfirmed" && se > 0 && ne.every((ue) => ue.subscription.phase === "boot-failed") && Ie($);
      }, $e = ($, ue) => {
        switch ($.subscription.phase) {
          case "booting":
          case "subscribing":
            $.subscription = { phase: "boot-failed" }, Le(ue);
            return;
          case "subscribed":
          case "closed":
          case "boot-failed":
            return;
          default:
            Ge($.subscription);
        }
      };
      ne.forEach(($) => {
        const ue = $.relayP[Kr];
        typeof ue == "function" && ue().then((ke) => {
          ke && $e($, ke);
        });
      });
      const Xe = ne.map(async ($, ue) => {
        let ke, h;
        try {
          [ke, h] = await wt([X, z]);
        } catch {
          return $.subscription = { phase: "closed" }, De($), Pe;
        }
        if (L()) return $.subscription = { phase: "closed" }, De($), Pe;
        let T;
        try {
          T = await $.relayP;
        } catch (C) {
          return $e($, C), De($), Pe;
        }
        if (L()) return $.subscription = { phase: "closed" }, De($), Pe;
        $.subscription = { phase: "subscribing" };
        try {
          const C = await n(T, ke, h, B(ue), (ie) => R.then((he) => He(ie, (fe, Ee) => te(fe, he, Ee))), ee), G = (ie) => ie.subscription.phase === "closed";
          return L() || G($) ? (C(), $.subscription = { phase: "closed" }, De($), Pe) : ($.subscription = { phase: "subscribed", unsub: C }, v === "unconfirmed" && (v = "healthy"), C);
        } catch (C) {
          return $.subscription = { phase: "boot-failed" }, De($), Le(C), Pe;
        }
      });
      return x || wt([X, z]).then(([$, ue]) => {
        if (L()) return;
        const ke = (T, C) => !L() && T.announce.phase === "active" && T.gen === C, h = async (T, C, G, ie) => {
          var _a3;
          if (!ke(C, ie)) return;
          let he;
          const fe = C.initial === "pending";
          try {
            he = await r(T, $, ue, ee), C.errors = 0, fe && (C.initial = "succeeded");
          } catch (ft) {
            if (L() || C.announce.phase === "closed") return;
            if (C.errors === 0 && ((_a3 = f.relayConfig) == null ? void 0 : _a3.warnOnRelayFailure) !== false && on(`announce failed - ${Et(ft, "")}`), C.errors += 1, fe) {
              C.initial = "failed";
              const Je = ne.some((Be) => Be.initial === "succeeded"), it = se > 0 && ne.every((Be) => Be.subscription.phase === "boot-failed" || Be.announce.phase !== "waiting" && Be.initial !== "pending");
              !Je && it && Ie(ft);
            }
          }
          if (!ke(C, ie)) return;
          if (typeof he == "number") O[G] = he, C.intervalMs = he;
          else if (typeof he == "object" && he !== null) {
            if ("stopAnnouncing" in he) {
              C.announce = { phase: "closed" };
              return;
            }
            C.intervalMs = he.nextAnnounceMs, Ue || (Ue = he.reannounceOnDisconnect === true);
          }
          const Ee = C.attempts++, qe = wp[Ee] ?? (Ee === 3 && typeof he == "object" ? Hs : void 0), lt = typeof qe == "number" ? Math.min(C.intervalMs, qe) : C.intervalMs, ze = setTimeout(() => {
            C.announce.phase === "active" && C.announce.timer === ze && (C.announce.timer = null), h(T, C, G, ie);
          }, lt);
          ht(ze), C.announce.phase === "active" ? C.announce.timer = ze : clearTimeout(ze);
        };
        ve = () => {
          j(ne), ne.forEach((T, C) => {
            if (T.subscription.phase !== "subscribed" || T.announce.phase === "closed") return;
            const G = ++T.gen;
            T.attempts = 0, T.announce = { phase: "active", timer: null }, T.relayP.then((ie) => {
              ie && ke(T, G) && h(ie, T, C, G);
            }, Pe);
          });
        }, Xe.forEach((T, C) => {
          const G = ne[C];
          G && T.then((ie) => {
            if (L() || ie === Pe || G.announce.phase !== "waiting") return;
            const { gen: he } = G;
            G.announce = { phase: "active", timer: null }, G.relayP.then((fe) => {
              fe && ke(G, he) && h(fe, G, C, he);
            }, Pe);
          }, Pe);
        });
      }, Pe), we.setOnScaleTargetsChanged(($) => {
        if (!L() && !x) for (const ue of $) M(ue);
      }), Ks(o, d).set(a, { phase: "occupied", room: ae }), ae;
    } catch (R) {
      throw g = { phase: "left", relaysStopped: false }, A(), ae.leave().catch(Pe), R;
    }
  });
};
const Pp = 6e4, Or = (e, t, n, r) => ({ kind: t, appId: e.appId, roomId: e.roomId, rootTopic: n, selfTopic: r, peerId: e.peerId });
var Ap = ({ defaultConfig: e, steadyAnnounceIntervalMs: t = Pp, reannounceOnDisconnect: n = true, init: r, subscribeTopic: s, publishTopic: o }) => Sp({ ...e === void 0 ? {} : { defaultConfig: e }, init: r, subscribe: async (c, a, u, f, d, y) => {
  let g = false;
  const v = (q, A) => {
    if (!g) try {
      Promise.resolve(o(c, q, A, Or(y, "signal", a, u))).catch(Pe);
    } catch {
    }
  }, b = (q, A) => {
    if (!g) return f(q, A, v);
  }, N = await s(c, u, b, Or(y, "self", a, u));
  let K;
  try {
    K = await s(c, a, b, Or(y, "root", a, u));
  } catch (q) {
    throw g = true, N(), q;
  }
  return () => {
    g || (g = true, N(), K());
  };
}, announce: async (c, a, u, f) => {
  const d = await o(c, a, { peerId: f.peerId }, Or(f, "announce", a, u));
  return typeof d == "number" ? d : typeof d == "object" && d !== null ? "stopAnnouncing" in d ? d : { nextAnnounceMs: d.nextAnnounceMs ?? t, reannounceOnDisconnect: d.reannounceOnDisconnect ?? n } : { nextAnnounceMs: t, reannounceOnDisconnect: n };
} });
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const Go = Object.freeze, nn = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn, ar = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n, Lc = 0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n, Bc = 0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n, kp = Go({ p: nn, n: ar, h: 1n, a: 0n, b: 7n, Gx: Lc, Gy: Bc }), Ct = 32, wa = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array" && e.BYTES_PER_ELEMENT === 1, Tt = (e, t, n = "") => {
  if (wa(e) && (t === void 0 || e.length === t)) return e;
  const r = wa(e), s = t !== void 0 ? ` of length ${t}` : "", o = r ? `length=${e.length}` : `type=${typeof e}`, c = (n ? `"${n}" ` : "") + "expected Uint8Array" + s + ", got " + o;
  throw r ? new RangeError(c) : new TypeError(c);
}, Rp = (e) => Uint8Array.from(e), Ep = (e, t, n) => Rp(Tt(e, n, t)), Ic = (e, t) => e.toString(16).padStart(t, "0"), _c = (e) => {
  let t = "";
  for (const n of Tt(e)) t += Ic(n, 2);
  return t;
}, Uc = (e) => {
  const t = "hex invalid";
  if (typeof e != "string") throw new TypeError(t);
  if (e.length % 2 || !/^[\da-f]*$/i.test(e)) throw new RangeError(t);
  const n = new Uint8Array(e.length / 2);
  for (let r = 0, s = 0; r < n.length; r++, s += 2) {
    const o = e.charCodeAt(s), c = e.charCodeAt(s + 1);
    n[r] = ((o & 15) + (o >> 6) * 9) * 16 + (c & 15) + (c >> 6) * 9;
  }
  return n;
}, ba = () => {
  var _a2;
  const e = (_a2 = globalThis == null ? void 0 : globalThis.crypto) == null ? void 0 : _a2.subtle;
  if (e) return e;
  throw new Error("crypto.subtle must be defined, consider polyfill");
}, Bn = (...e) => {
  let t = 0;
  for (const s of e) t += Tt(s).length;
  const n = new Uint8Array(t);
  let r = 0;
  for (const s of e) n.set(s, r), r += s.length;
  return n;
}, Qo = (e = Ct) => {
  const t = globalThis == null ? void 0 : globalThis.crypto;
  if (typeof (t == null ? void 0 : t.getRandomValues) != "function") throw new Error("crypto.getRandomValues must be defined, consider polyfill");
  return t.getRandomValues(new Uint8Array(e));
}, xp = BigInt, cr = (e, t, n, r = "bad number: out of range") => {
  if (typeof e != "bigint") throw new TypeError(r);
  if (t <= e && e < n) return e;
  throw new RangeError(r);
}, Te = (e, t = nn) => (e %= t) >= 0n ? e : t + e, hs = (e) => Te(e, ar), Tp = (e, t) => {
  if (e === 0n) throw new Error("invert: expected non-zero number");
  if (t <= 1n) throw new Error("invert: expected modulus > 1, got " + t);
  let n = Te(e, t), r = t, s = 0n, o = 1n;
  for (; n !== 0n; ) {
    const a = r / n, u = r - n * a, f = s - o * a;
    r = n, n = u, s = o, o = f;
  }
  if (r !== 1n) throw new Error("invert: does not exist");
  return Te(s, t);
}, $c = (e) => {
  const t = Cp[e];
  if (typeof t != "function") throw new Error("hashes." + e + " not set");
  return t;
}, Sa = (e, t, n) => Tt($c(e)(t, n), Ct, "digest"), Pa = async (e, t, n) => Tt(await $c(e)(t, n), Ct, "digest"), Vs = (e) => {
  if (e instanceof xt) return e;
  throw new TypeError("Point expected");
}, Gs = "bad point: not on curve", qc = (e) => Te(Te(e * e) * e + 7n), Aa = (e) => cr(e, 0n, nn), er = (e) => cr(e, 1n, nn), Fc = (e) => cr(e, 1n, ar), gs = (e) => !(e & 1n), Mp = (e) => Uint8Array.of(gs(e) ? 2 : 3), Nc = (e) => {
  const t = qc(er(e));
  let n = 1n;
  for (let r = t, s = (nn + 1n) / 4n; s > 0n; s >>= 1n) s & 1n && (n = n * r % nn), r = r * r % nn;
  if (Te(n * n) !== t) throw new Error("sqrt invalid");
  return new xt(e, gs(n) ? n : Te(-n), 1n);
};
const _xt = class _xt {
  constructor(t, n, r) {
    __publicField(this, "X");
    __publicField(this, "Y");
    __publicField(this, "Z");
    this.X = Aa(t), this.Y = er(n), this.Z = Aa(r), Go(this);
  }
  static CURVE() {
    return kp;
  }
  static fromAffine(t) {
    const { x: n, y: r } = t;
    return n === 0n && r === 0n ? tr : new _xt(n, r, 1n);
  }
  static fromBytes(t) {
    Tt(t);
    const n = t.length, r = t[0], s = os(t, 1, 33);
    try {
      if (n === 33 && (r === 2 || r === 3)) {
        const o = Nc(s);
        return r === 3 ? o.negate() : o;
      }
      if (n === 65 && r === 4) return new _xt(s, os(t, 33, 65), 1n).assertValidity();
    } catch {
      throw new Error(Gs);
    }
    throw new Error(Gs);
  }
  static fromHex(t) {
    return _xt.fromBytes(Uc(t));
  }
  get x() {
    return this.toAffine().x;
  }
  get y() {
    return this.toAffine().y;
  }
  equals(t) {
    const { X: n, Y: r, Z: s } = this, { X: o, Y: c, Z: a } = Vs(t);
    return Te(n * a) === Te(o * s) && Te(r * a) === Te(c * s);
  }
  is0() {
    return this.Z === 0n;
  }
  negate() {
    return new _xt(this.X, Te(-this.Y), this.Z);
  }
  double() {
    return this.add(this);
  }
  add(t) {
    const { X: n, Y: r, Z: s } = this, { X: o, Y: c, Z: a } = Vs(t), u = 0n, f = 7n;
    let d = 0n, y = 0n, g = 0n;
    const v = Te(f * 3n);
    let b = Te(n * o), N = Te(r * c), K = Te(s * a), q = Te(n + r), A = Te(o + c);
    q = Te(q * A), A = Te(b + N), q = Te(q - A), A = Te(n + s);
    let L = Te(o + a);
    return A = Te(A * L), L = Te(b + K), A = Te(A - L), L = Te(r + s), d = Te(c + a), L = Te(L * d), d = Te(N + K), L = Te(L - d), g = Te(u * A), d = Te(v * K), g = Te(d + g), d = Te(N - g), g = Te(N + g), y = Te(d * g), N = Te(b + b), N = Te(N + b), K = Te(u * K), A = Te(v * A), N = Te(N + K), K = Te(b - K), K = Te(u * K), A = Te(A + K), b = Te(N * A), y = Te(y + b), b = Te(L * A), d = Te(q * d), d = Te(d - b), b = Te(q * N), g = Te(L * g), g = Te(g + b), new _xt(d, y, g);
  }
  subtract(t) {
    return this.add(Vs(t).negate());
  }
  multiply(t, n = true) {
    if (!n && t === 0n) return tr;
    if (Fc(t), t === 1n) return this;
    if (this.equals(vn)) return Fp(t).p;
    let r = tr, s = vn, o = this;
    for (let c = 0; n ? c < 256 : t > 0n; c++) t & 1n ? r = r.add(o) : n && (s = s.add(o)), o = o.double(), t >>= 1n;
    return r;
  }
  multiplyUnsafe(t) {
    return this.multiply(t, false);
  }
  toAffine() {
    const { X: t, Y: n, Z: r } = this;
    if (r === 0n) return { x: 0n, y: 0n };
    if (r === 1n) return { x: t, y: n };
    const s = Tp(r, nn);
    if (Te(r * s) !== 1n) throw new Error("inverse invalid");
    return { x: Te(t * s), y: Te(n * s) };
  }
  assertValidity() {
    const { x: t, y: n } = this.toAffine();
    if (er(t), er(n), Te(n * n) !== qc(t)) throw new Error(Gs);
    return this;
  }
  toBytes(t = true) {
    const { x: n, y: r } = this.assertValidity().toAffine(), s = Ht(n);
    return t ? Bn(Mp(r), s) : Bn(Uint8Array.of(4), s, Ht(r));
  }
  toHex(t) {
    return _c(this.toBytes(t));
  }
};
__publicField(_xt, "BASE");
__publicField(_xt, "ZERO");
let xt = _xt;
const vn = new xt(Lc, Bc, 1n), tr = new xt(0n, 1n, 0n);
xt.BASE = vn;
xt.ZERO = tr;
const Op = (e, t, n) => vn.multiply(t, false).add(e.multiply(n, false)).assertValidity(), Sn = (e) => xp("0x" + (_c(e) || "0")), os = (e, t, n) => Sn(e.subarray(t, n)), Ht = (e) => Uc(Ic(cr(e, 0n, 2n ** 256n), Ct * 2)), Dp = (e) => {
  const t = Sn(Tt(e, Ct, "secret key"));
  return cr(t, 1n, ar, "invalid secret key: outside of range");
}, ka = "SHA-256", Cp = { hmacSha256Async: async (e, t) => {
  const n = ba(), r = await n.importKey("raw", e, { name: "HMAC", hash: ka }, false, ["sign"]);
  return new Uint8Array(await n.sign("HMAC", r, t));
}, hmacSha256: void 0, sha256Async: async (e) => new Uint8Array(await ba().digest(ka, e)), sha256: void 0 }, Lp = (e) => {
  if (e = e === void 0 ? Qo(48) : e, Tt(e), e.length < 48 || e.length > 1024) throw new RangeError("expected 48-1024b");
  const t = Te(Sn(e), ar - 1n);
  return Ht(t + 1n);
}, Bp = (e) => (t) => {
  const n = Lp(t);
  return { secretKey: n, publicKey: e(n) };
}, jc = (e) => Uint8Array.from("BIP0340/" + e, (t) => t.charCodeAt(0)), wo = (e, ...t) => {
  const n = Sa("sha256", jc(e));
  return Sa("sha256", Bn(n, n, ...t));
}, bo = (e, ...t) => Pa("sha256Async", jc(e)).then((n) => Pa("sha256Async", Bn(n, n, ...t))), Xo = (e) => {
  const t = Dp(e), n = vn.multiply(t), { x: r, y: s } = n.assertValidity().toAffine(), o = gs(s) ? t : hs(-t), c = Ht(r);
  return { d: o, px: c };
}, Yo = (e) => hs(Sn(e)), zc = (...e) => Yo(wo("challenge", ...e)), Wc = async (...e) => Yo(await bo("challenge", ...e)), Hc = (e) => Xo(e).px, Ip = Bp(Hc), Kc = (e, t, n) => {
  const r = Ep(e, "message"), { px: s, d: o } = Xo(t);
  return { m: r, px: s, d: o, a: Tt(n, Ct) };
}, Vc = (e) => {
  const t = Yo(e);
  if (t === 0n) throw new Error("sign failed: k is zero");
  const { px: n, d: r } = Xo(Ht(t));
  return { rx: n, k: r };
}, Gc = (e, t, n, r) => Bn(t, Ht(hs(e + n * r))), Qc = "invalid signature produced", _p = (e, t, n = Qo(Ct)) => {
  const { m: r, px: s, d: o, a: c } = Kc(e, t, n), a = Ht(o ^ Sn(wo("aux", c))), { rx: u, k: f } = Vc(wo("nonce", a, s, r)), d = Gc(f, u, zc(u, s, r), o);
  if (!Yc(d, r, s)) throw new Error(Qc);
  return d;
}, Up = async (e, t, n = Qo(Ct)) => {
  const { m: r, px: s, d: o, a: c } = Kc(e, t, n), a = Ht(o ^ Sn(await bo("aux", c))), { rx: u, k: f } = Vc(await bo("nonce", a, s, r)), d = Gc(f, u, await Wc(u, s, r), o);
  if (!await Jc(d, r, s)) throw new Error(Qc);
  return d;
}, $p = (e, t) => e instanceof Promise ? e.then(t) : t(e), Xc = (e, t, n, r) => {
  const s = Tt(e, 64, "signature"), o = Tt(t, void 0, "message"), c = Tt(n, Ct, "publicKey");
  let a, u, f, d;
  try {
    const y = Sn(c);
    a = Nc(y), u = er(os(s, 0, Ct)), f = Fc(os(s, Ct, 64)), d = Bn(Ht(u), c, o);
  } catch {
    return false;
  }
  return $p(r(d), (y) => {
    try {
      const { x: g, y: v } = Op(a, f, hs(-y)).toAffine();
      return !(!gs(v) || g !== u);
    } catch {
      return false;
    }
  });
}, Yc = (e, t, n) => Xc(e, t, n, zc), Jc = async (e, t, n) => Xc(e, t, n, Wc), Zc = Go({ keygen: Ip, getPublicKey: Hc, sign: _p, verify: Yc, signAsync: Up, verifyAsync: Jc }), qp = () => {
  const e = [];
  let t = vn, n = t;
  for (let r = 0; r < 33; r++) {
    n = t, e.push(n);
    for (let s = 1; s < 128; s++) n = n.add(t), e.push(n);
    t = n.double();
  }
  return e;
};
let Ra;
const Ea = (e, t) => {
  const n = t.negate();
  return e ? n : t;
}, Fp = (e) => {
  const t = Ra || (Ra = qp());
  let n = tr, r = vn;
  for (let s = 0; s < 33; s++) {
    let o = Number(e & 255n);
    e >>= 8n, o > 128 && (o -= 256, e += 1n);
    const c = s * 128, a = c + Math.abs(o) - 1, u = s % 2 !== 0, f = o < 0;
    o === 0 ? r = r.add(Ea(u, t[c])) : n = n.add(Ea(f, t[a]));
  }
  if (e !== 0n) throw new Error("invalid wnaf");
  return { p: n, f: r };
}, Np = "EVENT", jp = 60, xa = Uint8Array.prototype.toHex, So = typeof xa == "function" ? (e) => xa.call(e) : (e) => Array.from(e, (t) => t.toString(16).padStart(2, "0")).join(""), eu = () => Math.floor(Date.now() / 1e3), zp = () => Math.max(0, eu() - jp), Ta = () => {
  const { secretKey: e, publicKey: t } = Zc.keygen();
  return { secretKey: e, pubkey: So(t) };
}, tu = (e) => {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++) t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return (t >>> 0) % 1e4 + 2e4;
}, Wp = async (e, t, n) => {
  const r = { kind: tu(e), tags: [["x", e]], created_at: eu(), content: t, pubkey: n.pubkey }, s = new Uint8Array(await crypto.subtle.digest("SHA-256", vt(ut([0, r.pubkey, r.created_at, r.kind, r.tags, r.content]))));
  return ut([Np, { ...r, id: So(s), sig: So(await Zc.signAsync(s, n.secretKey)) }]);
}, Hp = (e) => {
  throw me(`unreachable: ${String(e)}`);
}, In = (e) => (e !== null && clearTimeout(e), null), Po = Uf((e) => e.socket, (e) => {
  var _a2;
  ti(e), (_a2 = e.close) == null ? void 0 : _a2.call(e);
}), Kp = 5, Ma = 250, _n = 6e4, Oa = 9e5, Jo = 5333, Yn = /* @__PURE__ */ new Map(), Un = /* @__PURE__ */ new WeakMap(), Zo = If(), At = /* @__PURE__ */ new WeakMap(), Da = (e, t) => `${e}\0${t}`, Vp = (e) => {
  const t = Yn.get(e);
  return t ? t.signer ?? (t.signer = Ta()) : Ta();
}, ur = (e) => {
  const t = Un.get(e);
  if (!t) return { phase: "healthy" };
  if (t.phase === "cooldown" && Date.now() >= t.untilMs) {
    const n = { phase: "probation", lastDelayMs: t.delayMs };
    return Un.set(e, n), n;
  }
  return t;
}, Gp = (e) => {
  const t = ur(e);
  switch (t.phase) {
    case "retired":
      return Oa;
    case "healthy": {
      const n = _n;
      return Un.set(e, { phase: "cooldown", delayMs: n, untilMs: Date.now() + n }), n;
    }
    case "cooldown":
    case "probation": {
      const n = t.phase === "cooldown" ? t.delayMs : t.lastDelayMs, r = Math.min(Math.max(_n, n * 2), Oa);
      return Un.set(e, { phase: "cooldown", delayMs: r, untilMs: Date.now() + r }), r;
    }
    default:
      return Hp(t);
  }
}, Qp = (e) => {
  ur(e).phase === "probation" && Un.set(e, { phase: "healthy" });
}, nu = (e) => {
  const t = ur(e);
  return t.phase === "cooldown" ? Math.max(0, t.untilMs - Date.now()) : 0;
}, Ao = (e) => ({ nextAnnounceMs: e }), Xp = { stopAnnouncing: true }, Yp = (e) => {
  var _a2;
  return ur(e).phase === "retired" ? false : (Un.set(e, { phase: "retired" }), Po.evict(e), ti(e), (_a2 = e.close) == null ? void 0 : _a2.call(e), true);
}, ei = (e) => {
  e.flushWaiters.forEach((t) => t()), e.flushWaiters.clear();
}, ti = (e) => {
  const t = At.get(e);
  t && (t.flushTimer = In(t.flushTimer), t.retryTimer = In(t.retryTimer), t.sync = { phase: "unsynced" }, ei(t), At.delete(e));
}, Jp = (e, t, n) => {
  let r = At.get(e);
  r || (r = { subIds: [], topics: /* @__PURE__ */ new Map(), flushTimer: null, flushWaiters: /* @__PURE__ */ new Set(), sync: { phase: "unsynced" }, retryTimer: null, retryMs: Jo }, At.set(e, r));
  let s = r.topics.get(t);
  const o = !s;
  s || (s = /* @__PURE__ */ new Set(), r.topics.set(t, s)), s.add(n), (o || r.sync.phase === "unsynced") && ru(e, r);
}, Zp = (e, t, n) => {
  const r = At.get(e);
  if (!r) return false;
  const s = r.topics.get(t);
  return !s || !s.delete(n) ? false : s.size > 0 ? true : (r.topics.delete(t), delete Zo.forRelay(e)[t], r.topics.size === 0 ? (r.subIds.forEach((o) => e.send(ut(["CLOSE", o]))), ti(e), true) : (ru(e, r), true));
}, ru = (e, t) => {
  t.flushTimer === null && (t.flushTimer = setTimeout(() => {
    t.flushTimer = null;
    try {
      su(e);
    } finally {
      ei(t);
    }
  }, 0));
}, eh = (e) => {
  const t = At.get(e);
  return !t || t.flushTimer === null ? Promise.resolve() : new Promise((n) => {
    t.flushWaiters.add(n);
  });
}, su = (e) => {
  const t = At.get(e);
  if (!t || t.topics.size === 0) return;
  t.flushTimer = In(t.flushTimer), t.retryTimer = In(t.retryTimer);
  const n = [...t.topics.keys()], r = [], s = zp();
  for (let a = 0; a < n.length; a += Ma) r.push(n.slice(a, a + Ma));
  for (; t.subIds.length > r.length; ) {
    const a = t.subIds.pop();
    a && e.send(ut(["CLOSE", a]));
  }
  const o = /* @__PURE__ */ new Set(), c = Date.now();
  r.forEach((a, u) => {
    var _a2;
    const f = (_a2 = t.subIds)[u] ?? (_a2[u] = cs(64));
    o.add(f), e.send(ut(["REQ", f, { kinds: [...new Set(a.map(tu))], since: s, "#x": a }]));
  }), t.sync = { phase: "awaiting-eose", pendingSubIds: o, requestedAt: c }, ei(t);
}, ou = (e) => {
  const t = At.get(e);
  if (t && t.topics.size > 0 && !e.isClosed) {
    if (nu(e) > 0) {
      cu(e, true);
      return;
    }
    su(e), iu(e);
  }
}, iu = (e) => {
  Object.entries(Zo.forRelay(e)).forEach(([t, { payload: n, getSigner: r }]) => {
    au(e, t, n, true, r);
  });
}, Ca = (e, t) => {
  var _a2;
  const n = ur(e);
  if (n.phase === "retired" || e.isClosed) return t ? Xp : void 0;
  const r = n.phase === "cooldown" ? Math.max(0, n.untilMs - Date.now()) : 0;
  return r > 0 || ((_a2 = e.socket) == null ? void 0 : _a2.readyState) !== 1 ? t ? Ao(Math.max(_n, r)) : void 0 : null;
}, au = async (e, t, n, r, s) => {
  var _a2;
  const o = Ca(e, r);
  if (o !== null) return o;
  const c = await Wp(t, r ? ut({ ...sn(n), nonce: cs(8) }) : n, s()), a = Ca(e, r);
  return a !== null ? a : r && !((_a2 = At.get(e)) == null ? void 0 : _a2.topics.has(t)) ? Ao(_n) : (e.send(c), r ? Ao(_n) : void 0);
}, cu = (e, t) => {
  const n = At.get(e);
  if (!n || n.topics.size === 0 || e.isClosed || n.retryTimer !== null && !t) return;
  const r = t ? nu(e) : n.retryMs;
  n.retryMs = Math.min(n.retryMs * 2, _n), n.sync.phase === "synced" && (n.sync = { phase: "unsynced" }), n.retryTimer = In(n.retryTimer), n.retryTimer = setTimeout(() => {
    n.retryTimer = null, ou(e);
  }, Math.max(r, Jo)), ht(n.retryTimer);
}, Th = Ap({ init: (e) => Df(e, th, Kp, true).map((t) => {
  const n = Po.register(t, () => {
    const r = Bf(t, (s) => {
      var _a2, _b, _c2;
      const o = sn(s);
      if (!Array.isArray(o)) return;
      const [c, a, u, f] = o;
      if (c !== "EVENT") {
        if (c === "CLOSED" && !((_a2 = At.get(r)) == null ? void 0 : _a2.subIds.includes(a))) return;
        const d = `${wn}: relay failure from ${r.url} - `, y = c === "CLOSED" && typeof u == "string" ? u : f, g = c === "OK" && u === false, v = (g || c === "CLOSED") && (y == null ? void 0 : y.startsWith("rate-limited:")), b = g && (y == null ? void 0 : y.startsWith("duplicate:")), N = y && /^(blocked|restricted|auth-required|pow):/.test(y);
        if (c === "OK" && u === true && Qp(r), (g || c === "CLOSED") && N && !Yp(r)) return;
        if (v) Gp(r);
        else if (c === "EOSE") {
          const K = At.get(r);
          if (K && K.sync.phase === "awaiting-eose" && K.sync.pendingSubIds.delete(a) && K.sync.pendingSubIds.size === 0) {
            const { requestedAt: q } = K.sync;
            K.retryTimer = In(K.retryTimer), K.retryMs = Jo, K.sync = { phase: "synced" }, Date.now() - q >= 1e3 && iu(r);
          }
        }
        c === "CLOSED" && !N && cu(r, !!v), !b && ((_b = e.relayConfig) == null ? void 0 : _b.warnOnRelayFailure) !== false && (c === "NOTICE" ? console.warn(d + a) : (g || c === "CLOSED") && console.warn(d + y));
        return;
      }
      if (u && typeof u == "object" && "content" in u) {
        const d = At.get(r);
        if ((d == null ? void 0 : d.subIds.includes(a)) && u.tags) {
          const y = u.tags.find((g) => Array.isArray(g) && g[0] === "x");
          if (y == null ? void 0 : y[1]) {
            const g = y[1];
            (_c2 = d.topics.get(g)) == null ? void 0 : _c2.forEach((v) => {
              v(g, u.content);
            });
          }
        }
      }
    }, () => ou(r));
    return r;
  });
  return Po.lease(n, n.ready);
}), subscribeTopic: (e, t, n, r) => {
  const s = Da(r.rootTopic, r.selfTopic), o = Yn.get(s);
  o ? o.refs += 1 : Yn.set(s, { refs: 1, signer: null });
  let c = false;
  const a = (f, d) => void n(f, d);
  Jp(e, t, a);
  const u = () => {
    if (c) return;
    c = true;
    const f = Yn.get(s);
    f && (f.refs <= 1 ? Yn.delete(s) : f.refs -= 1), Zp(e, t, a);
  };
  return r.kind === "root" ? eh(e).then(() => u) : u;
}, publishTopic: (e, t, n, { kind: r, rootTopic: s, selfTopic: o }) => {
  var _a2;
  const c = typeof n == "string" ? n : ut(n), a = Da(s, o), u = () => Vp(a);
  return r === "announce" && ((_a2 = At.get(e)) == null ? void 0 : _a2.topics.has(t)) && (Zo.forRelay(e)[t] = { payload: c, getSigner: u }), au(e, t, c, r === "announce", u);
} }), th = ["wss://bucket.coracle.social", "wss://fanfares.nostr1.com", "wss://no.str.cr", "wss://nostr-01.yakihonne.com", "wss://nostr-pub.wellorder.net", "wss://nostr.azzamo.net", "wss://nostr.chaima.info", "wss://nostr.data.haus", "wss://nostr.hifish.org", "wss://nostr.liberty.fans", "wss://nostr.overmind.lol", "wss://nostr.sathoarder.com", "wss://nostrelay.circum.space", "wss://relay.angor.io", "wss://relay.ditto.pub", "wss://relay.dwadziesciajeden.pl", "wss://relay.fundstr.me", "wss://relay.guggero.org", "wss://relay.masize.com", "wss://relay.minibolt.info", "wss://relay.mostro.network", "wss://relay.nostr.com", "wss://relay.nostr.net", "wss://relay.nostrhub.fr", "wss://relay.notoshi.win", "wss://relay.primal.net", "wss://relay.snort.social", "wss://relay.wavlake.com", "wss://soloco.nl", "wss://yabu.me"];
/*!
* https://github.com/Starcounter-Jack/JSON-Patch
* (c) 2017-2022 Joachim Wester
* MIT licensed
*/
var nh = /* @__PURE__ */ (function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, s) {
      r.__proto__ = s;
    } || function(r, s) {
      for (var o in s) s.hasOwnProperty(o) && (r[o] = s[o]);
    }, e(t, n);
  };
  return function(t, n) {
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
})(), rh = Object.prototype.hasOwnProperty;
function ko(e, t) {
  return rh.call(e, t);
}
function Ro(e) {
  if (Array.isArray(e)) {
    for (var t = new Array(e.length), n = 0; n < t.length; n++) t[n] = "" + n;
    return t;
  }
  if (Object.keys) return Object.keys(e);
  var r = [];
  for (var s in e) ko(e, s) && r.push(s);
  return r;
}
function Rt(e) {
  switch (typeof e) {
    case "object":
      return JSON.parse(JSON.stringify(e));
    case "undefined":
      return null;
    default:
      return e;
  }
}
function Eo(e) {
  for (var t = 0, n = e.length, r; t < n; ) {
    if (r = e.charCodeAt(t), r >= 48 && r <= 57) {
      t++;
      continue;
    }
    return false;
  }
  return true;
}
function fn(e) {
  return e.indexOf("/") === -1 && e.indexOf("~") === -1 ? e : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function uu(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
function xo(e) {
  if (e === void 0) return true;
  if (e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = e.length; t < n; t++) if (xo(e[t])) return true;
    } else if (typeof e == "object") {
      for (var r = Ro(e), s = r.length, o = 0; o < s; o++) if (xo(e[r[o]])) return true;
    }
  }
  return false;
}
function La(e, t) {
  var n = [e];
  for (var r in t) {
    var s = typeof t[r] == "object" ? JSON.stringify(t[r], null, 2) : t[r];
    typeof s < "u" && n.push(r + ": " + s);
  }
  return n.join(`
`);
}
var lu = (function(e) {
  nh(t, e);
  function t(n, r, s, o, c) {
    var a = this.constructor, u = e.call(this, La(n, { name: r, index: s, operation: o, tree: c })) || this;
    return u.name = r, u.index = s, u.operation = o, u.tree = c, Object.setPrototypeOf(u, a.prototype), u.message = La(n, { name: r, index: s, operation: o, tree: c }), u;
  }
  return t;
})(Error), pt = lu, sh = Rt, xn = { add: function(e, t, n) {
  return e[t] = this.value, { newDocument: n };
}, remove: function(e, t, n) {
  var r = e[t];
  return delete e[t], { newDocument: n, removed: r };
}, replace: function(e, t, n) {
  var r = e[t];
  return e[t] = this.value, { newDocument: n, removed: r };
}, move: function(e, t, n) {
  var r = is(n, this.path);
  r && (r = Rt(r));
  var s = yn(n, { op: "remove", path: this.from }).removed;
  return yn(n, { op: "add", path: this.path, value: s }), { newDocument: n, removed: r };
}, copy: function(e, t, n) {
  var r = is(n, this.from);
  return yn(n, { op: "add", path: this.path, value: Rt(r) }), { newDocument: n };
}, test: function(e, t, n) {
  return { newDocument: n, test: or(e[t], this.value) };
}, _get: function(e, t, n) {
  return this.value = e[t], { newDocument: n };
} }, oh = { add: function(e, t, n) {
  return Eo(t) ? e.splice(t, 0, this.value) : e[t] = this.value, { newDocument: n, index: t };
}, remove: function(e, t, n) {
  var r = e.splice(t, 1);
  return { newDocument: n, removed: r[0] };
}, replace: function(e, t, n) {
  var r = e[t];
  return e[t] = this.value, { newDocument: n, removed: r };
}, move: xn.move, copy: xn.copy, test: xn.test, _get: xn._get };
function is(e, t) {
  if (t == "") return e;
  var n = { op: "_get", path: t };
  return yn(e, n), n.value;
}
function yn(e, t, n, r, s, o) {
  if (n === void 0 && (n = false), r === void 0 && (r = true), s === void 0 && (s = true), o === void 0 && (o = 0), n && (typeof n == "function" ? n(t, 0, e, t.path) : as(t, 0)), t.path === "") {
    var c = { newDocument: e };
    if (t.op === "add") return c.newDocument = t.value, c;
    if (t.op === "replace") return c.newDocument = t.value, c.removed = e, c;
    if (t.op === "move" || t.op === "copy") return c.newDocument = is(e, t.from), t.op === "move" && (c.removed = e), c;
    if (t.op === "test") {
      if (c.test = or(e, t.value), c.test === false) throw new pt("Test operation failed", "TEST_OPERATION_FAILED", o, t, e);
      return c.newDocument = e, c;
    } else {
      if (t.op === "remove") return c.removed = e, c.newDocument = null, c;
      if (t.op === "_get") return t.value = e, c;
      if (n) throw new pt("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", o, t, e);
      return c;
    }
  } else {
    r || (e = Rt(e));
    var a = t.path || "", u = a.split("/"), f = e, d = 1, y = u.length, g = void 0, v = void 0, b = void 0;
    for (typeof n == "function" ? b = n : b = as; ; ) {
      if (v = u[d], v && v.indexOf("~") != -1 && (v = uu(v)), s && (v == "__proto__" || v == "prototype" && d > 0 && u[d - 1] == "constructor")) throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (n && g === void 0 && (f[v] === void 0 ? g = u.slice(0, d).join("/") : d == y - 1 && (g = t.path), g !== void 0 && b(t, 0, e, g)), d++, Array.isArray(f)) {
        if (v === "-") v = f.length;
        else {
          if (n && !Eo(v)) throw new pt("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", o, t, e);
          Eo(v) && (v = ~~v);
        }
        if (d >= y) {
          if (n && t.op === "add" && v > f.length) throw new pt("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", o, t, e);
          var c = oh[t.op].call(t, f, v, e);
          if (c.test === false) throw new pt("Test operation failed", "TEST_OPERATION_FAILED", o, t, e);
          return c;
        }
      } else if (d >= y) {
        var c = xn[t.op].call(t, f, v, e);
        if (c.test === false) throw new pt("Test operation failed", "TEST_OPERATION_FAILED", o, t, e);
        return c;
      }
      if (f = f[v], n && d < y && (!f || typeof f != "object")) throw new pt("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", o, t, e);
    }
  }
}
function ni(e, t, n, r, s) {
  if (r === void 0 && (r = true), s === void 0 && (s = true), n && !Array.isArray(t)) throw new pt("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  r || (e = Rt(e));
  for (var o = new Array(t.length), c = 0, a = t.length; c < a; c++) o[c] = yn(e, t[c], n, true, s, c), e = o[c].newDocument;
  return o.newDocument = e, o;
}
function ih(e, t, n) {
  var r = yn(e, t);
  if (r.test === false) throw new pt("Test operation failed", "TEST_OPERATION_FAILED", n, t, e);
  return r.newDocument;
}
function as(e, t, n, r) {
  if (typeof e != "object" || e === null || Array.isArray(e)) throw new pt("Operation is not an object", "OPERATION_NOT_AN_OBJECT", t, e, n);
  if (xn[e.op]) {
    if (typeof e.path != "string") throw new pt("Operation `path` property is not a string", "OPERATION_PATH_INVALID", t, e, n);
    if (e.path.indexOf("/") !== 0 && e.path.length > 0) throw new pt('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", t, e, n);
    if ((e.op === "move" || e.op === "copy") && typeof e.from != "string") throw new pt("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", t, e, n);
    if ((e.op === "add" || e.op === "replace" || e.op === "test") && e.value === void 0) throw new pt("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", t, e, n);
    if ((e.op === "add" || e.op === "replace" || e.op === "test") && xo(e.value)) throw new pt("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", t, e, n);
    if (n) {
      if (e.op == "add") {
        var s = e.path.split("/").length, o = r.split("/").length;
        if (s !== o + 1 && s !== o) throw new pt("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", t, e, n);
      } else if (e.op === "replace" || e.op === "remove" || e.op === "_get") {
        if (e.path !== r) throw new pt("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", t, e, n);
      } else if (e.op === "move" || e.op === "copy") {
        var c = { op: "_get", path: e.from, value: void 0 }, a = fu([c], n);
        if (a && a.name === "OPERATION_PATH_UNRESOLVABLE") throw new pt("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", t, e, n);
      }
    }
  } else throw new pt("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", t, e, n);
}
function fu(e, t, n) {
  try {
    if (!Array.isArray(e)) throw new pt("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (t) ni(Rt(t), Rt(e), n || true);
    else {
      n = n || as;
      for (var r = 0; r < e.length; r++) n(e[r], r, t, void 0);
    }
  } catch (s) {
    if (s instanceof pt) return s;
    throw s;
  }
}
function or(e, t) {
  if (e === t) return true;
  if (e && t && typeof e == "object" && typeof t == "object") {
    var n = Array.isArray(e), r = Array.isArray(t), s, o, c;
    if (n && r) {
      if (o = e.length, o != t.length) return false;
      for (s = o; s-- !== 0; ) if (!or(e[s], t[s])) return false;
      return true;
    }
    if (n != r) return false;
    var a = Object.keys(e);
    if (o = a.length, o !== Object.keys(t).length) return false;
    for (s = o; s-- !== 0; ) if (!t.hasOwnProperty(a[s])) return false;
    for (s = o; s-- !== 0; ) if (c = a[s], !or(e[c], t[c])) return false;
    return true;
  }
  return e !== e && t !== t;
}
const ah = Object.freeze(Object.defineProperty({ __proto__: null, JsonPatchError: pt, _areEquals: or, applyOperation: yn, applyPatch: ni, applyReducer: ih, deepClone: sh, getValueByPointer: is, validate: fu, validator: as }, Symbol.toStringTag, { value: "Module" }));
/*!
* https://github.com/Starcounter-Jack/JSON-Patch
* (c) 2017-2021 Joachim Wester
* MIT license
*/
var ri = /* @__PURE__ */ new WeakMap(), ch = /* @__PURE__ */ (function() {
  function e(t) {
    this.observers = /* @__PURE__ */ new Map(), this.obj = t;
  }
  return e;
})(), uh = /* @__PURE__ */ (function() {
  function e(t, n) {
    this.callback = t, this.observer = n;
  }
  return e;
})();
function lh(e) {
  return ri.get(e);
}
function fh(e, t) {
  return e.observers.get(t);
}
function dh(e, t) {
  e.observers.delete(t.callback);
}
function ph(e, t) {
  t.unobserve();
}
function hh(e, t) {
  var n = [], r, s = lh(e);
  if (!s) s = new ch(e), ri.set(e, s);
  else {
    var o = fh(s, t);
    r = o && o.observer;
  }
  if (r) return r;
  if (r = {}, s.value = Rt(e), t) {
    r.callback = t, r.next = null;
    var c = function() {
      To(r);
    }, a = function() {
      clearTimeout(r.next), r.next = setTimeout(c);
    };
    typeof window < "u" && (window.addEventListener("mouseup", a), window.addEventListener("keyup", a), window.addEventListener("mousedown", a), window.addEventListener("keydown", a), window.addEventListener("change", a));
  }
  return r.patches = n, r.object = e, r.unobserve = function() {
    To(r), clearTimeout(r.next), dh(s, r), typeof window < "u" && (window.removeEventListener("mouseup", a), window.removeEventListener("keyup", a), window.removeEventListener("mousedown", a), window.removeEventListener("keydown", a), window.removeEventListener("change", a));
  }, s.observers.set(t, new uh(t, r)), r;
}
function To(e, t) {
  t === void 0 && (t = false);
  var n = ri.get(e.object);
  si(n.value, e.object, e.patches, "", t), e.patches.length && ni(n.value, e.patches);
  var r = e.patches;
  return r.length > 0 && (e.patches = [], e.callback && e.callback(r)), r;
}
function si(e, t, n, r, s) {
  if (t !== e) {
    typeof t.toJSON == "function" && (t = t.toJSON());
    for (var o = Ro(t), c = Ro(e), a = false, u = c.length - 1; u >= 0; u--) {
      var f = c[u], d = e[f];
      if (ko(t, f) && !(t[f] === void 0 && d !== void 0 && Array.isArray(t) === false)) {
        var y = t[f];
        typeof d == "object" && d != null && typeof y == "object" && y != null && Array.isArray(d) === Array.isArray(y) ? si(d, y, n, r + "/" + fn(f), s) : d !== y && (s && n.push({ op: "test", path: r + "/" + fn(f), value: Rt(d) }), n.push({ op: "replace", path: r + "/" + fn(f), value: Rt(y) }));
      } else Array.isArray(e) === Array.isArray(t) ? (s && n.push({ op: "test", path: r + "/" + fn(f), value: Rt(d) }), n.push({ op: "remove", path: r + "/" + fn(f) }), a = true) : (s && n.push({ op: "test", path: r, value: e }), n.push({ op: "replace", path: r, value: t }));
    }
    if (!(!a && o.length == c.length)) for (var u = 0; u < o.length; u++) {
      var f = o[u];
      !ko(e, f) && t[f] !== void 0 && n.push({ op: "add", path: r + "/" + fn(f), value: Rt(t[f]) });
    }
  }
}
function gh(e, t, n) {
  n === void 0 && (n = false);
  var r = [];
  return si(e, t, r, "", n), r;
}
const yh = Object.freeze(Object.defineProperty({ __proto__: null, compare: gh, generate: To, observe: hh, unobserve: ph }, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, ah, yh, { JsonPatchError: lu, deepClone: Rt, escapePathComponent: fn, unescapePathComponent: uu });
var Qs = { exports: {} }, Xs, Ba;
function mh() {
  if (Ba) return Xs;
  Ba = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xs = e, Xs;
}
var Ys, Ia;
function vh() {
  if (Ia) return Ys;
  Ia = 1;
  var e = mh();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ys = function() {
    function r(c, a, u, f, d, y) {
      if (y !== e) {
        var g = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw g.name = "Invariant Violation", g;
      }
    }
    r.isRequired = r;
    function s() {
      return r;
    }
    var o = { array: r, bigint: r, bool: r, func: r, number: r, object: r, string: r, symbol: r, any: r, arrayOf: s, element: r, elementType: r, instanceOf: s, node: r, objectOf: s, oneOf: s, oneOfType: s, shape: s, exact: s, checkPropTypes: n, resetWarningCache: t };
    return o.PropTypes = o, o;
  }, Ys;
}
var _a;
function Mh() {
  return _a || (_a = 1, Qs.exports = vh()()), Qs.exports;
}
function du(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = du(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function Ua() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = du(e)) && (r && (r += " "), r += t);
  return r;
}
const wh = Object.freeze(Object.defineProperty({ __proto__: null, clsx: Ua, default: Ua }, Symbol.toStringTag, { value: "Module" })), Oh = $a(wh);
export {
  di as _,
  kh as a,
  Oh as b,
  wu as c,
  Sh as d,
  Rh as e,
  fi as f,
  Mo as g,
  Mu as h,
  ni as i,
  Th as j,
  Ph as k,
  gh as l,
  xh as n,
  Tu as p,
  Mh as r,
  Eh as s,
  Ah as u
};
