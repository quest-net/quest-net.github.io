var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as Ae } from "./vendor-react-CVgSEKdc.js";
function _n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function eo(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      var i = false;
      try {
        i = this instanceof r;
      } catch {
      }
      return i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: true }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : { enumerable: true, get: function() {
      return e[r];
    } });
  }), n;
}
const fs = Symbol(), xn = Symbol(), nt = "a", to = "f", er = "p", no = "c", ro = "t", Cn = "h", st = "w", Ln = "o", Bn = "k";
let ls = (e, t) => new Proxy(e, t);
const pn = Object.getPrototypeOf, yn = /* @__PURE__ */ new WeakMap(), oo = (e) => e && (yn.has(e) ? yn.get(e) : pn(e) === Object.prototype || pn(e) === Array.prototype), Ct = (e) => typeof e == "object" && e !== null, us = (e) => Object.values(Object.getOwnPropertyDescriptors(e)).some((t) => !t.configurable && !t.writable), ds = (e) => {
  if (Array.isArray(e)) return Array.from(e);
  const t = Object.getOwnPropertyDescriptors(e);
  return Object.values(t).forEach((n) => {
    n.configurable = true;
  }), Object.create(pn(e), t);
}, ps = (e, t) => {
  const n = { [to]: t };
  let r = false;
  const i = (c, s) => {
    if (!r) {
      let f = n[nt].get(e);
      if (f || (f = {}, n[nt].set(e, f)), c === st) f[st] = true;
      else {
        let u = f[c];
        u || (u = /* @__PURE__ */ new Set(), f[c] = u), u.add(s);
      }
    }
  }, a = () => {
    r = true, n[nt].delete(e);
  }, o = { get(c, s) {
    return s === xn ? e : (i(Bn, s), so(Reflect.get(c, s), n[nt], n[no], n[ro]));
  }, has(c, s) {
    return s === fs ? (a(), true) : (i(Cn, s), Reflect.has(c, s));
  }, getOwnPropertyDescriptor(c, s) {
    return i(Ln, s), Reflect.getOwnPropertyDescriptor(c, s);
  }, ownKeys(c) {
    return i(st), Reflect.ownKeys(c);
  } };
  return t && (o.set = o.deleteProperty = () => false), [o, n];
}, Nn = (e) => e[xn] || e, so = (e, t, n, r) => {
  if (!oo(e)) return e;
  let i = r && r.get(e);
  if (!i) {
    const s = Nn(e);
    us(s) ? i = [s, ds(s)] : i = [s], r == null ? void 0 : r.set(e, i);
  }
  const [a, o] = i;
  let c = n && n.get(a);
  return (!c || c[1][to] !== !!o) && (c = ps(a, !!o), c[1][er] = ls(o || a, c[0]), n && n.set(a, c)), c[1][nt] = t, c[1][no] = n, c[1][ro] = r, c[1][er];
}, ys = (e, t) => {
  const n = Reflect.ownKeys(e), r = Reflect.ownKeys(t);
  return n.length !== r.length || n.some((i, a) => i !== r[a]);
}, io = (e, t, n, r, i = Object.is) => {
  if (i(e, t)) return false;
  if (!Ct(e) || !Ct(t)) return true;
  const a = n.get(Nn(e));
  if (!a) return true;
  if (r) {
    if (r.get(e) === t) return false;
    r.set(e, t);
  }
  let o = null;
  for (const c of a[Cn] || []) if (o = Reflect.has(e, c) !== Reflect.has(t, c), o) return o;
  if (a[st] === true) {
    if (o = ys(e, t), o) return o;
  } else for (const c of a[Ln] || []) {
    const s = !!Reflect.getOwnPropertyDescriptor(e, c), f = !!Reflect.getOwnPropertyDescriptor(t, c);
    if (o = s !== f, o) return o;
  }
  for (const c of a[Bn] || []) if (o = io(e[c], t[c], n, r, i), o) return o;
  if (o === null) throw new Error("invalid used");
  return o;
}, hs = (e) => oo(e) && e[xn] || null, tr = (e, t = true) => {
  yn.set(e, t);
}, gs = (e, t, n) => {
  const r = [], i = /* @__PURE__ */ new WeakSet(), a = (o, c) => {
    var s, f, u;
    if (i.has(o)) return;
    Ct(o) && i.add(o);
    const l = Ct(o) && t.get(Nn(o));
    if (l) {
      if ((s = l[Cn]) === null || s === void 0 || s.forEach((d) => {
        const m = `:has(${String(d)})`;
        r.push(c ? [...c, m] : [m]);
      }), l[st] === true) {
        const d = ":ownKeys";
        r.push(c ? [...c, d] : [d]);
      } else (f = l[Ln]) === null || f === void 0 || f.forEach((d) => {
        const m = `:hasOwn(${String(d)})`;
        r.push(c ? [...c, m] : [m]);
      });
      (u = l[Bn]) === null || u === void 0 || u.forEach((d) => {
        "value" in (Object.getOwnPropertyDescriptor(o, d) || {}) && a(o[d], c ? [...c, d] : [d]);
      });
    } else c && r.push(c);
  };
  return a(e), r;
}, Lt = {}, In = (e) => typeof e == "object" && e !== null, ms = (e) => In(e) && !qn.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer) && !(e instanceof Promise), ao = (e, t) => {
  const n = nr.get(e);
  if ((n == null ? void 0 : n[0]) === t) return n[1];
  const r = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
  return tr(r, true), nr.set(e, [t, r]), Reflect.ownKeys(e).forEach((i) => {
    if (Object.getOwnPropertyDescriptor(r, i)) return;
    const a = Reflect.get(e, i), { enumerable: o } = Reflect.getOwnPropertyDescriptor(e, i), c = { value: a, enumerable: o, configurable: true };
    if (qn.has(a)) tr(a, false);
    else if (Le.has(a)) {
      const [s, f] = Le.get(a);
      c.value = ao(s, f());
    }
    Object.defineProperty(r, i, c);
  }), r;
}, vs = (e, t, n, r) => ({ deleteProperty(i, a) {
  const o = Reflect.get(i, a);
  n(a);
  const c = Reflect.deleteProperty(i, a);
  return c && r(Ie == null ? void 0 : Ie("delete", a, o)), c;
}, set(i, a, o, c) {
  const s = !e() && Reflect.has(i, a), f = Reflect.get(i, a, c);
  if (s && (rr(f, o) || Bt.has(o) && rr(f, Bt.get(o)))) return true;
  n(a), In(o) && (o = hs(o) || o);
  const u = !Le.has(o) && Ts(o) ? As(o) : o;
  return t(a, u), Reflect.set(i, a, u, c), r(Ie == null ? void 0 : Ie("set", a, o, f)), true;
} }), ws = (e, t, ...n) => [e, [t], ...n], Le = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakSet(), nr = /* @__PURE__ */ new WeakMap(), Yt = [1], Bt = /* @__PURE__ */ new WeakMap();
let rr = Object.is, Ps = (e, t) => new Proxy(e, t), Ts = ms, Ss = ao, bs = vs, Ie;
function As(e = {}) {
  if (!In(e)) throw new Error("object required");
  const t = Bt.get(e);
  if (t) return t;
  let n = Yt[0];
  const r = /* @__PURE__ */ new Set(), i = (y, g = ++Yt[0]) => {
    n !== g && (a = n = g, r.forEach((h) => h(y, g)));
  };
  let a = n;
  const o = (y = Yt[0]) => (a !== y && (a = y, s.forEach(([g]) => {
    const h = g[1](y);
    h > n && (n = h);
  })), n), c = (y) => (g, h) => {
    let w;
    g && (w = [...g], w[1] = [y, ...w[1]]), i(w, h);
  }, s = /* @__PURE__ */ new Map(), f = (y, g) => {
    const h = !qn.has(g) && Le.get(g);
    if (h) {
      if ((Lt ? "production" : void 0) !== "production" && s.has(y)) throw new Error("prop listener already exists");
      if (r.size) {
        const w = h[2](c(y));
        s.set(y, [h, w]);
      } else s.set(y, [h]);
    }
  }, u = (y) => {
    var g;
    const h = s.get(y);
    h && (s.delete(y), (g = h[1]) == null || g.call(h));
  }, l = (y) => (r.add(y), r.size === 1 && s.forEach(([h, w], R) => {
    if ((Lt ? "production" : void 0) !== "production" && w) throw new Error("remove already exists");
    const O = h[2](c(R));
    s.set(R, [h, O]);
  }), () => {
    r.delete(y), r.size === 0 && s.forEach(([h, w], R) => {
      w && (w(), s.set(R, [h]));
    });
  });
  let d = true;
  const m = bs(() => d, f, u, i), v = Ps(e, m);
  Bt.set(e, v);
  const b = [e, o, l];
  return Le.set(v, b), Reflect.ownKeys(e).forEach((y) => {
    const g = Object.getOwnPropertyDescriptor(e, y);
    "value" in g && g.writable && (v[y] = e[y]);
  }), d = false, v;
}
function wc(e) {
  const t = Le.get(e);
  return t == null ? void 0 : t[1]();
}
function Rs(e, t, n) {
  const r = Le.get(e);
  (Lt ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  let i;
  const a = [], o = r[2];
  let c = false;
  const f = o((u) => {
    if (u && a.push(u), n) {
      t(a.splice(0));
      return;
    }
    i || (i = Promise.resolve().then(() => {
      i = void 0, c && t(a.splice(0));
    }));
  });
  return c = true, () => {
    c = false, f();
  };
}
function or(e) {
  const t = Le.get(e);
  (Lt ? "production" : void 0) !== "production" && !t && console.warn("Please use proxy object");
  const [n, r] = t;
  return Ss(n, r());
}
function Pc(e = true) {
  e === true ? Ie = ws : e === false ? Ie = void 0 : Ie = e;
}
const ks = {}, Es = (e, t) => {
  const n = Ae.useRef(void 0);
  Ae.useEffect(() => {
    n.current = gs(e, t);
  }), Ae.useDebugValue(n.current);
}, Os = Es, Ds = /* @__PURE__ */ new WeakMap();
function Tc(e, t) {
  const r = Ae.useMemo(() => e && /* @__PURE__ */ new WeakMap(), [e]), i = Ae.useRef(void 0);
  let a = true;
  const o = Ae.useSyncExternalStore(Ae.useCallback((s) => {
    const f = Rs(e, s, void 0);
    return s(), f;
  }, [e, void 0]), () => {
    const s = or(e);
    try {
      if (!a && i.current && !io(i.current, s, r, /* @__PURE__ */ new WeakMap())) return i.current;
    } catch {
    }
    return s;
  }, () => or(e));
  a = false, Ae.useLayoutEffect(() => {
    i.current = o;
  }), (ks ? "production" : void 0) !== "production" && Os(o, r);
  const c = Ae.useMemo(() => /* @__PURE__ */ new WeakMap(), []);
  return so(o, r, c, Ds);
}
function sr() {
  return sr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, sr.apply(null, arguments);
}
function ut(e) {
  "@babel/helpers - typeof";
  return ut = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ut(e);
}
function Ms(e, t) {
  if (ut(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ut(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _s(e) {
  var t = Ms(e, "string");
  return ut(t) == "symbol" ? t : t + "";
}
function Sc(e, t, n) {
  return (t = _s(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: true, configurable: true, writable: true }) : e[t] = n, e;
}
var Jt, ir;
function xs() {
  if (ir) return Jt;
  ir = 1;
  var e = Object.assign || function(i) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c]);
    }
    return i;
  }, t = { "{": "\\{", "}": "\\}", "\\": "\\textbackslash{}", "#": "\\#", $: "\\$", "%": "\\%", "&": "\\&", "^": "\\textasciicircum{}", _: "\\_", "~": "\\textasciitilde{}" }, n = { "\u2013": "\\--", "\u2014": "\\---", " ": "~", "	": "\\qquad{}", "\r\n": "\\newline{}", "\n": "\\newline{}" }, r = function(a, o) {
    return e({}, a, o);
  };
  return Jt = function(i) {
    for (var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.preserveFormatting, c = o === void 0 ? false : o, s = a.escapeMapFn, f = s === void 0 ? r : s, u = String(i), l = "", d = f(e({}, t), c ? e({}, n) : {}), m = Object.keys(d), v = function() {
      var y = false;
      m.forEach(function(g, h) {
        y || u.length >= g.length && u.slice(0, g.length) === g && (l += d[m[h]], u = u.slice(g.length, u.length), y = true);
      }), y || (l += u.slice(0, 1), u = u.slice(1, u.length));
    }; u; ) v();
    return l;
  }, Jt;
}
var Cs = xs();
const bc = _n(Cs);
var Rt = { exports: {} }, Ls = Rt.exports, ar;
function Bs() {
  return ar || (ar = 1, (function(e) {
    (function(t, n, r) {
      function i(s) {
        var f = this, u = c();
        f.next = function() {
          var l = 2091639 * f.s0 + f.c * 23283064365386963e-26;
          return f.s0 = f.s1, f.s1 = f.s2, f.s2 = l - (f.c = l | 0);
        }, f.c = 1, f.s0 = u(" "), f.s1 = u(" "), f.s2 = u(" "), f.s0 -= u(s), f.s0 < 0 && (f.s0 += 1), f.s1 -= u(s), f.s1 < 0 && (f.s1 += 1), f.s2 -= u(s), f.s2 < 0 && (f.s2 += 1), u = null;
      }
      function a(s, f) {
        return f.c = s.c, f.s0 = s.s0, f.s1 = s.s1, f.s2 = s.s2, f;
      }
      function o(s, f) {
        var u = new i(s), l = f && f.state, d = u.next;
        return d.int32 = function() {
          return u.next() * 4294967296 | 0;
        }, d.double = function() {
          return d() + (d() * 2097152 | 0) * 11102230246251565e-32;
        }, d.quick = d, l && (typeof l == "object" && a(l, u), d.state = function() {
          return a(u, {});
        }), d;
      }
      function c() {
        var s = 4022871197, f = function(u) {
          u = String(u);
          for (var l = 0; l < u.length; l++) {
            s += u.charCodeAt(l);
            var d = 0.02519603282416938 * s;
            s = d >>> 0, d -= s, d *= s, s = d >>> 0, d -= s, s += d * 4294967296;
          }
          return (s >>> 0) * 23283064365386963e-26;
        };
        return f;
      }
      n && n.exports ? n.exports = o : this.alea = o;
    })(Ls, e);
  })(Rt)), Rt.exports;
}
var kt = { exports: {} }, Ns = kt.exports, cr;
function Is() {
  return cr || (cr = 1, (function(e) {
    (function(t, n, r) {
      function i(c) {
        var s = this, f = "";
        s.x = 0, s.y = 0, s.z = 0, s.w = 0, s.next = function() {
          var l = s.x ^ s.x << 11;
          return s.x = s.y, s.y = s.z, s.z = s.w, s.w ^= s.w >>> 19 ^ l ^ l >>> 8;
        }, c === (c | 0) ? s.x = c : f += c;
        for (var u = 0; u < f.length + 64; u++) s.x ^= f.charCodeAt(u) | 0, s.next();
      }
      function a(c, s) {
        return s.x = c.x, s.y = c.y, s.z = c.z, s.w = c.w, s;
      }
      function o(c, s) {
        var f = new i(c), u = s && s.state, l = function() {
          return (f.next() >>> 0) / 4294967296;
        };
        return l.double = function() {
          do
            var d = f.next() >>> 11, m = (f.next() >>> 0) / 4294967296, v = (d + m) / (1 << 21);
          while (v === 0);
          return v;
        }, l.int32 = f.next, l.quick = l, u && (typeof u == "object" && a(u, f), l.state = function() {
          return a(f, {});
        }), l;
      }
      n && n.exports ? n.exports = o : this.xor128 = o;
    })(Ns, e);
  })(kt)), kt.exports;
}
var Et = { exports: {} }, qs = Et.exports, fr;
function Us() {
  return fr || (fr = 1, (function(e) {
    (function(t, n, r) {
      function i(c) {
        var s = this, f = "";
        s.next = function() {
          var l = s.x ^ s.x >>> 2;
          return s.x = s.y, s.y = s.z, s.z = s.w, s.w = s.v, (s.d = s.d + 362437 | 0) + (s.v = s.v ^ s.v << 4 ^ (l ^ l << 1)) | 0;
        }, s.x = 0, s.y = 0, s.z = 0, s.w = 0, s.v = 0, c === (c | 0) ? s.x = c : f += c;
        for (var u = 0; u < f.length + 64; u++) s.x ^= f.charCodeAt(u) | 0, u == f.length && (s.d = s.x << 10 ^ s.x >>> 4), s.next();
      }
      function a(c, s) {
        return s.x = c.x, s.y = c.y, s.z = c.z, s.w = c.w, s.v = c.v, s.d = c.d, s;
      }
      function o(c, s) {
        var f = new i(c), u = s && s.state, l = function() {
          return (f.next() >>> 0) / 4294967296;
        };
        return l.double = function() {
          do
            var d = f.next() >>> 11, m = (f.next() >>> 0) / 4294967296, v = (d + m) / (1 << 21);
          while (v === 0);
          return v;
        }, l.int32 = f.next, l.quick = l, u && (typeof u == "object" && a(u, f), l.state = function() {
          return a(f, {});
        }), l;
      }
      n && n.exports ? n.exports = o : this.xorwow = o;
    })(qs, e);
  })(Et)), Et.exports;
}
var Ot = { exports: {} }, $s = Ot.exports, lr;
function Fs() {
  return lr || (lr = 1, (function(e) {
    (function(t, n, r) {
      function i(c) {
        var s = this;
        s.next = function() {
          var u = s.x, l = s.i, d, m;
          return d = u[l], d ^= d >>> 7, m = d ^ d << 24, d = u[l + 1 & 7], m ^= d ^ d >>> 10, d = u[l + 3 & 7], m ^= d ^ d >>> 3, d = u[l + 4 & 7], m ^= d ^ d << 7, d = u[l + 7 & 7], d = d ^ d << 13, m ^= d ^ d << 9, u[l] = m, s.i = l + 1 & 7, m;
        };
        function f(u, l) {
          var d, m = [];
          if (l === (l | 0)) m[0] = l;
          else for (l = "" + l, d = 0; d < l.length; ++d) m[d & 7] = m[d & 7] << 15 ^ l.charCodeAt(d) + m[d + 1 & 7] << 13;
          for (; m.length < 8; ) m.push(0);
          for (d = 0; d < 8 && m[d] === 0; ++d) ;
          for (d == 8 ? m[7] = -1 : m[d], u.x = m, u.i = 0, d = 256; d > 0; --d) u.next();
        }
        f(s, c);
      }
      function a(c, s) {
        return s.x = c.x.slice(), s.i = c.i, s;
      }
      function o(c, s) {
        c == null && (c = +/* @__PURE__ */ new Date());
        var f = new i(c), u = s && s.state, l = function() {
          return (f.next() >>> 0) / 4294967296;
        };
        return l.double = function() {
          do
            var d = f.next() >>> 11, m = (f.next() >>> 0) / 4294967296, v = (d + m) / (1 << 21);
          while (v === 0);
          return v;
        }, l.int32 = f.next, l.quick = l, u && (u.x && a(u, f), l.state = function() {
          return a(f, {});
        }), l;
      }
      n && n.exports ? n.exports = o : this.xorshift7 = o;
    })($s, e);
  })(Ot)), Ot.exports;
}
var Dt = { exports: {} }, Hs = Dt.exports, ur;
function zs() {
  return ur || (ur = 1, (function(e) {
    (function(t, n, r) {
      function i(c) {
        var s = this;
        s.next = function() {
          var u = s.w, l = s.X, d = s.i, m, v;
          return s.w = u = u + 1640531527 | 0, v = l[d + 34 & 127], m = l[d = d + 1 & 127], v ^= v << 13, m ^= m << 17, v ^= v >>> 15, m ^= m >>> 12, v = l[d] = v ^ m, s.i = d, v + (u ^ u >>> 16) | 0;
        };
        function f(u, l) {
          var d, m, v, b, y, g = [], h = 128;
          for (l === (l | 0) ? (m = l, l = null) : (l = l + "\0", m = 0, h = Math.max(h, l.length)), v = 0, b = -32; b < h; ++b) l && (m ^= l.charCodeAt((b + 32) % l.length)), b === 0 && (y = m), m ^= m << 10, m ^= m >>> 15, m ^= m << 4, m ^= m >>> 13, b >= 0 && (y = y + 1640531527 | 0, d = g[b & 127] ^= m + y, v = d == 0 ? v + 1 : 0);
          for (v >= 128 && (g[(l && l.length || 0) & 127] = -1), v = 127, b = 512; b > 0; --b) m = g[v + 34 & 127], d = g[v = v + 1 & 127], m ^= m << 13, d ^= d << 17, m ^= m >>> 15, d ^= d >>> 12, g[v] = m ^ d;
          u.w = y, u.X = g, u.i = v;
        }
        f(s, c);
      }
      function a(c, s) {
        return s.i = c.i, s.w = c.w, s.X = c.X.slice(), s;
      }
      function o(c, s) {
        c == null && (c = +/* @__PURE__ */ new Date());
        var f = new i(c), u = s && s.state, l = function() {
          return (f.next() >>> 0) / 4294967296;
        };
        return l.double = function() {
          do
            var d = f.next() >>> 11, m = (f.next() >>> 0) / 4294967296, v = (d + m) / (1 << 21);
          while (v === 0);
          return v;
        }, l.int32 = f.next, l.quick = l, u && (u.X && a(u, f), l.state = function() {
          return a(f, {});
        }), l;
      }
      n && n.exports ? n.exports = o : this.xor4096 = o;
    })(Hs, e);
  })(Dt)), Dt.exports;
}
var Mt = { exports: {} }, js = Mt.exports, dr;
function Ws() {
  return dr || (dr = 1, (function(e) {
    (function(t, n, r) {
      function i(c) {
        var s = this, f = "";
        s.next = function() {
          var l = s.b, d = s.c, m = s.d, v = s.a;
          return l = l << 25 ^ l >>> 7 ^ d, d = d - m | 0, m = m << 24 ^ m >>> 8 ^ v, v = v - l | 0, s.b = l = l << 20 ^ l >>> 12 ^ d, s.c = d = d - m | 0, s.d = m << 16 ^ d >>> 16 ^ v, s.a = v - l | 0;
        }, s.a = 0, s.b = 0, s.c = -1640531527, s.d = 1367130551, c === Math.floor(c) ? (s.a = c / 4294967296 | 0, s.b = c | 0) : f += c;
        for (var u = 0; u < f.length + 20; u++) s.b ^= f.charCodeAt(u) | 0, s.next();
      }
      function a(c, s) {
        return s.a = c.a, s.b = c.b, s.c = c.c, s.d = c.d, s;
      }
      function o(c, s) {
        var f = new i(c), u = s && s.state, l = function() {
          return (f.next() >>> 0) / 4294967296;
        };
        return l.double = function() {
          do
            var d = f.next() >>> 11, m = (f.next() >>> 0) / 4294967296, v = (d + m) / (1 << 21);
          while (v === 0);
          return v;
        }, l.int32 = f.next, l.quick = l, u && (typeof u == "object" && a(u, f), l.state = function() {
          return a(f, {});
        }), l;
      }
      n && n.exports ? n.exports = o : this.tychei = o;
    })(js, e);
  })(Mt)), Mt.exports;
}
var _t = { exports: {} };
const Ks = {}, Xs = Object.freeze(Object.defineProperty({ __proto__: null, default: Ks }, Symbol.toStringTag, { value: "Module" })), Ys = eo(Xs);
var Js = _t.exports, pr;
function Gs() {
  return pr || (pr = 1, (function(e) {
    (function(t, n, r) {
      var i = 256, a = 6, o = 52, c = "random", s = r.pow(i, a), f = r.pow(2, o), u = f * 2, l = i - 1, d;
      function m(R, O, _) {
        var N = [];
        O = O == true ? { entropy: true } : O || {};
        var L = g(y(O.entropy ? [R, w(n)] : R ?? h(), 3), N), I = new v(N), U = function() {
          for (var j = I.g(a), J = s, p = 0; j < f; ) j = (j + p) * i, J *= i, p = I.g(1);
          for (; j >= u; ) j /= 2, J /= 2, p >>>= 1;
          return (j + p) / J;
        };
        return U.int32 = function() {
          return I.g(4) | 0;
        }, U.quick = function() {
          return I.g(4) / 4294967296;
        }, U.double = U, g(w(I.S), n), (O.pass || _ || function(j, J, p, P) {
          return P && (P.S && b(P, I), j.state = function() {
            return b(I, {});
          }), p ? (r[c] = j, J) : j;
        })(U, L, "global" in O ? O.global : this == r, O.state);
      }
      function v(R) {
        var O, _ = R.length, N = this, L = 0, I = N.i = N.j = 0, U = N.S = [];
        for (_ || (R = [_++]); L < i; ) U[L] = L++;
        for (L = 0; L < i; L++) U[L] = U[I = l & I + R[L % _] + (O = U[L])], U[I] = O;
        (N.g = function(j) {
          for (var J, p = 0, P = N.i, E = N.j, k = N.S; j--; ) J = k[P = l & P + 1], p = p * i + k[l & (k[P] = k[E = l & E + J]) + (k[E] = J)];
          return N.i = P, N.j = E, p;
        })(i);
      }
      function b(R, O) {
        return O.i = R.i, O.j = R.j, O.S = R.S.slice(), O;
      }
      function y(R, O) {
        var _ = [], N = typeof R, L;
        if (O && N == "object") for (L in R) try {
          _.push(y(R[L], O - 1));
        } catch {
        }
        return _.length ? _ : N == "string" ? R : R + "\0";
      }
      function g(R, O) {
        for (var _ = R + "", N, L = 0; L < _.length; ) O[l & L] = l & (N ^= O[l & L] * 19) + _.charCodeAt(L++);
        return w(O);
      }
      function h() {
        try {
          var R;
          return d && (R = d.randomBytes) ? R = R(i) : (R = new Uint8Array(i), (t.crypto || t.msCrypto).getRandomValues(R)), w(R);
        } catch {
          var O = t.navigator, _ = O && O.plugins;
          return [+/* @__PURE__ */ new Date(), t, _, t.screen, w(n)];
        }
      }
      function w(R) {
        return String.fromCharCode.apply(0, R);
      }
      if (g(r.random(), n), e.exports) {
        e.exports = m;
        try {
          d = Ys;
        } catch {
        }
      } else r["seed" + c] = m;
    })(typeof self < "u" ? self : Js, [], Math);
  })(_t)), _t.exports;
}
var Gt, yr;
function Vs() {
  if (yr) return Gt;
  yr = 1;
  var e = Bs(), t = Is(), n = Us(), r = Fs(), i = zs(), a = Ws(), o = Gs();
  return o.alea = e, o.xor128 = t, o.xorwow = n, o.xorshift7 = r, o.xor4096 = i, o.tychei = a, Gt = o, Gt;
}
var Zs = Vs();
const Ac = _n(Zs);
var Vt, hr;
function Qs() {
  return hr || (hr = 1, Vt = function e(t, n) {
    var r = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi, i = /(^[ ]*|[ ]*$)/g, a = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/, o = /^0x[0-9a-f]+$/i, c = /^0/, s = function(w) {
      return e.insensitive && ("" + w).toLowerCase() || "" + w;
    }, f = s(t).replace(i, "") || "", u = s(n).replace(i, "") || "", l = f.replace(r, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), d = u.replace(r, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), m = parseInt(f.match(o), 16) || l.length !== 1 && f.match(a) && Date.parse(f), v = parseInt(u.match(o), 16) || m && u.match(a) && Date.parse(u) || null, b, y;
    if (v) {
      if (m < v) return -1;
      if (m > v) return 1;
    }
    for (var g = 0, h = Math.max(l.length, d.length); g < h; g++) {
      if (b = !(l[g] || "").match(c) && parseFloat(l[g]) || l[g] || 0, y = !(d[g] || "").match(c) && parseFloat(d[g]) || d[g] || 0, isNaN(b) !== isNaN(y)) return isNaN(b) ? 1 : -1;
      if (typeof b != typeof y && (b += "", y += ""), b < y) return -1;
      if (b > y) return 1;
    }
    return 0;
  }), Vt;
}
var ei = Qs();
const Rc = _n(ei);
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const Un = Object.freeze, Ce = 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn, gt = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n, co = 0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n, fo = 0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n, ti = Un({ p: Ce, n: gt, h: 1n, a: 0n, b: 7n, Gx: co, Gy: fo }), ge = 32, gr = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array" && e.BYTES_PER_ELEMENT === 1, ue = (e, t, n = "") => {
  if (gr(e) && (t === void 0 || e.length === t)) return e;
  const r = gr(e), i = t !== void 0 ? ` of length ${t}` : "", a = r ? `length=${e.length}` : `type=${typeof e}`, o = (n ? `"${n}" ` : "") + "expected Uint8Array" + i + ", got " + a;
  throw r ? new RangeError(o) : new TypeError(o);
}, ni = (e) => Uint8Array.from(e), ri = (e, t, n) => ni(ue(e, n, t)), lo = (e, t) => e.toString(16).padStart(t, "0"), uo = (e) => {
  let t = "";
  for (const n of ue(e)) t += lo(n, 2);
  return t;
}, po = (e) => {
  const t = "hex invalid";
  if (typeof e != "string") throw new TypeError(t);
  if (e.length % 2 || !/^[\da-f]*$/i.test(e)) throw new RangeError(t);
  const n = new Uint8Array(e.length / 2);
  for (let r = 0, i = 0; r < n.length; r++, i += 2) {
    const a = e.charCodeAt(i), o = e.charCodeAt(i + 1);
    n[r] = ((a & 15) + (a >> 6) * 9) * 16 + (o & 15) + (o >> 6) * 9;
  }
  return n;
}, mr = () => {
  var _a2;
  const e = (_a2 = globalThis == null ? void 0 : globalThis.crypto) == null ? void 0 : _a2.subtle;
  if (e) return e;
  throw new Error("crypto.subtle must be defined, consider polyfill");
}, Ye = (...e) => {
  let t = 0;
  for (const i of e) t += ue(i).length;
  const n = new Uint8Array(t);
  let r = 0;
  for (const i of e) n.set(i, r), r += i.length;
  return n;
}, $n = (e = ge) => {
  const t = globalThis == null ? void 0 : globalThis.crypto;
  if (typeof (t == null ? void 0 : t.getRandomValues) != "function") throw new Error("crypto.getRandomValues must be defined, consider polyfill");
  return t.getRandomValues(new Uint8Array(e));
}, oi = BigInt, mt = (e, t, n, r = "bad number: out of range") => {
  if (typeof e != "bigint") throw new TypeError(r);
  if (t <= e && e < n) return e;
  throw new RangeError(r);
}, C = (e, t = Ce) => (e %= t) >= 0n ? e : t + e, Ht = (e) => C(e, gt), si = (e, t) => {
  if (e === 0n) throw new Error("invert: expected non-zero number");
  if (t <= 1n) throw new Error("invert: expected modulus > 1, got " + t);
  let n = C(e, t), r = t, i = 0n, a = 1n;
  for (; n !== 0n; ) {
    const c = r / n, s = r - n * c, f = i - a * c;
    r = n, n = s, i = a, a = f;
  }
  if (r !== 1n) throw new Error("invert: does not exist");
  return C(i, t);
}, yo = (e) => {
  const t = fi[e];
  if (typeof t != "function") throw new Error("hashes." + e + " not set");
  return t;
}, vr = (e, t, n) => ue(yo(e)(t, n), ge, "digest"), wr = async (e, t, n) => ue(await yo(e)(t, n), ge, "digest"), Zt = (e) => {
  if (e instanceof le) return e;
  throw new TypeError("Point expected");
}, Qt = "bad point: not on curve", ho = (e) => C(C(e * e) * e + 7n), Pr = (e) => mt(e, 0n, Ce), it = (e) => mt(e, 1n, Ce), go = (e) => mt(e, 1n, gt), zt = (e) => !(e & 1n), ii = (e) => Uint8Array.of(zt(e) ? 2 : 3), mo = (e) => {
  const t = ho(it(e));
  let n = 1n;
  for (let r = t, i = (Ce + 1n) / 4n; i > 0n; i >>= 1n) i & 1n && (n = n * r % Ce), r = r * r % Ce;
  if (C(n * n) !== t) throw new Error("sqrt invalid");
  return new le(e, zt(n) ? n : C(-n), 1n);
};
const _le = class _le {
  constructor(t, n, r) {
    __publicField(this, "X");
    __publicField(this, "Y");
    __publicField(this, "Z");
    this.X = Pr(t), this.Y = it(n), this.Z = Pr(r), Un(this);
  }
  static CURVE() {
    return ti;
  }
  static fromAffine(t) {
    const { x: n, y: r } = t;
    return n === 0n && r === 0n ? at : new _le(n, r, 1n);
  }
  static fromBytes(t) {
    ue(t);
    const n = t.length, r = t[0], i = Nt(t, 1, 33);
    try {
      if (n === 33 && (r === 2 || r === 3)) {
        const a = mo(i);
        return r === 3 ? a.negate() : a;
      }
      if (n === 65 && r === 4) return new _le(i, Nt(t, 33, 65), 1n).assertValidity();
    } catch {
      throw new Error(Qt);
    }
    throw new Error(Qt);
  }
  static fromHex(t) {
    return _le.fromBytes(po(t));
  }
  get x() {
    return this.toAffine().x;
  }
  get y() {
    return this.toAffine().y;
  }
  equals(t) {
    const { X: n, Y: r, Z: i } = this, { X: a, Y: o, Z: c } = Zt(t);
    return C(n * c) === C(a * i) && C(r * c) === C(o * i);
  }
  is0() {
    return this.Z === 0n;
  }
  negate() {
    return new _le(this.X, C(-this.Y), this.Z);
  }
  double() {
    return this.add(this);
  }
  add(t) {
    const { X: n, Y: r, Z: i } = this, { X: a, Y: o, Z: c } = Zt(t), s = 0n, f = 7n;
    let u = 0n, l = 0n, d = 0n;
    const m = C(f * 3n);
    let v = C(n * a), b = C(r * o), y = C(i * c), g = C(n + r), h = C(a + o);
    g = C(g * h), h = C(v + b), g = C(g - h), h = C(n + i);
    let w = C(a + c);
    return h = C(h * w), w = C(v + y), h = C(h - w), w = C(r + i), u = C(o + c), w = C(w * u), u = C(b + y), w = C(w - u), d = C(s * h), u = C(m * y), d = C(u + d), u = C(b - d), d = C(b + d), l = C(u * d), b = C(v + v), b = C(b + v), y = C(s * y), h = C(m * h), b = C(b + y), y = C(v - y), y = C(s * y), h = C(h + y), v = C(b * h), l = C(l + v), v = C(w * h), u = C(g * u), u = C(u - v), v = C(g * b), d = C(w * d), d = C(d + v), new _le(u, l, d);
  }
  subtract(t) {
    return this.add(Zt(t).negate());
  }
  multiply(t, n = true) {
    if (!n && t === 0n) return at;
    if (go(t), t === 1n) return this;
    if (this.equals(Fe)) return mi(t).p;
    let r = at, i = Fe, a = this;
    for (let o = 0; n ? o < 256 : t > 0n; o++) t & 1n ? r = r.add(a) : n && (i = i.add(a)), a = a.double(), t >>= 1n;
    return r;
  }
  multiplyUnsafe(t) {
    return this.multiply(t, false);
  }
  toAffine() {
    const { X: t, Y: n, Z: r } = this;
    if (r === 0n) return { x: 0n, y: 0n };
    if (r === 1n) return { x: t, y: n };
    const i = si(r, Ce);
    if (C(r * i) !== 1n) throw new Error("inverse invalid");
    return { x: C(t * i), y: C(n * i) };
  }
  assertValidity() {
    const { x: t, y: n } = this.toAffine();
    if (it(t), it(n), C(n * n) !== ho(t)) throw new Error(Qt);
    return this;
  }
  toBytes(t = true) {
    const { x: n, y: r } = this.assertValidity().toAffine(), i = ke(n);
    return t ? Ye(ii(r), i) : Ye(Uint8Array.of(4), i, ke(r));
  }
  toHex(t) {
    return uo(this.toBytes(t));
  }
};
__publicField(_le, "BASE");
__publicField(_le, "ZERO");
let le = _le;
const Fe = new le(co, fo, 1n), at = new le(0n, 1n, 0n);
le.BASE = Fe;
le.ZERO = at;
const ai = (e, t, n) => Fe.multiply(t, false).add(e.multiply(n, false)).assertValidity(), ze = (e) => oi("0x" + (uo(e) || "0")), Nt = (e, t, n) => ze(e.subarray(t, n)), ke = (e) => po(lo(mt(e, 0n, 2n ** 256n), ge * 2)), ci = (e) => {
  const t = ze(ue(e, ge, "secret key"));
  return mt(t, 1n, gt, "invalid secret key: outside of range");
}, Tr = "SHA-256", fi = { hmacSha256Async: async (e, t) => {
  const n = mr(), r = await n.importKey("raw", e, { name: "HMAC", hash: Tr }, false, ["sign"]);
  return new Uint8Array(await n.sign("HMAC", r, t));
}, hmacSha256: void 0, sha256Async: async (e) => new Uint8Array(await mr().digest(Tr, e)), sha256: void 0 }, li = (e) => {
  if (e = e === void 0 ? $n(48) : e, ue(e), e.length < 48 || e.length > 1024) throw new RangeError("expected 48-1024b");
  const t = C(ze(e), gt - 1n);
  return ke(t + 1n);
}, ui = (e) => (t) => {
  const n = li(t);
  return { secretKey: n, publicKey: e(n) };
}, vo = (e) => Uint8Array.from("BIP0340/" + e, (t) => t.charCodeAt(0)), hn = (e, ...t) => {
  const n = vr("sha256", vo(e));
  return vr("sha256", Ye(n, n, ...t));
}, gn = (e, ...t) => wr("sha256Async", vo(e)).then((n) => wr("sha256Async", Ye(n, n, ...t))), Fn = (e) => {
  const t = ci(e), n = Fe.multiply(t), { x: r, y: i } = n.assertValidity().toAffine(), a = zt(i) ? t : Ht(-t), o = ke(r);
  return { d: a, px: o };
}, Hn = (e) => Ht(ze(e)), wo = (...e) => Hn(hn("challenge", ...e)), Po = async (...e) => Hn(await gn("challenge", ...e)), To = (e) => Fn(e).px, di = ui(To), So = (e, t, n) => {
  const r = ri(e, "message"), { px: i, d: a } = Fn(t);
  return { m: r, px: i, d: a, a: ue(n, ge) };
}, bo = (e) => {
  const t = Hn(e);
  if (t === 0n) throw new Error("sign failed: k is zero");
  const { px: n, d: r } = Fn(ke(t));
  return { rx: n, k: r };
}, Ao = (e, t, n, r) => Ye(t, ke(Ht(e + n * r))), Ro = "invalid signature produced", pi = (e, t, n = $n(ge)) => {
  const { m: r, px: i, d: a, a: o } = So(e, t, n), c = ke(a ^ ze(hn("aux", o))), { rx: s, k: f } = bo(hn("nonce", c, i, r)), u = Ao(f, s, wo(s, i, r), a);
  if (!Eo(u, r, i)) throw new Error(Ro);
  return u;
}, yi = async (e, t, n = $n(ge)) => {
  const { m: r, px: i, d: a, a: o } = So(e, t, n), c = ke(a ^ ze(await gn("aux", o))), { rx: s, k: f } = bo(await gn("nonce", c, i, r)), u = Ao(f, s, await Po(s, i, r), a);
  if (!await Oo(u, r, i)) throw new Error(Ro);
  return u;
}, hi = (e, t) => e instanceof Promise ? e.then(t) : t(e), ko = (e, t, n, r) => {
  const i = ue(e, 64, "signature"), a = ue(t, void 0, "message"), o = ue(n, ge, "publicKey");
  let c, s, f, u;
  try {
    const l = ze(o);
    c = mo(l), s = it(Nt(i, 0, ge)), f = go(Nt(i, ge, 64)), u = Ye(ke(s), o, a);
  } catch {
    return false;
  }
  return hi(r(u), (l) => {
    try {
      const { x: d, y: m } = ai(c, f, Ht(-l)).toAffine();
      return !(!zt(m) || d !== s);
    } catch {
      return false;
    }
  });
}, Eo = (e, t, n) => ko(e, t, n, wo), Oo = async (e, t, n) => ko(e, t, n, Po), Do = Un({ keygen: di, getPublicKey: To, sign: pi, verify: Eo, signAsync: yi, verifyAsync: Oo }), gi = () => {
  const e = [];
  let t = Fe, n = t;
  for (let r = 0; r < 33; r++) {
    n = t, e.push(n);
    for (let i = 1; i < 128; i++) n = n.add(t), e.push(n);
    t = n.double();
  }
  return e;
};
let Sr;
const br = (e, t) => {
  const n = t.negate();
  return e ? n : t;
}, mi = (e) => {
  const t = Sr || (Sr = gi());
  let n = at, r = Fe;
  for (let i = 0; i < 33; i++) {
    let a = Number(e & 255n);
    e >>= 8n, a > 128 && (a -= 256, e += 1n);
    const o = i * 128, c = o + Math.abs(a) - 1, s = i % 2 !== 0, f = a < 0;
    a === 0 ? r = r.add(br(s, t[o])) : n = n.add(br(f, t[c]));
  }
  if (e !== 0n) throw new Error("invalid wnaf");
  return { p: n, f: r };
}, { floor: mn, min: vi, sin: wi } = Math, se = "Trystero", zn = (e, t) => Array(e).fill(void 0).map(t), Pi = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz", je = (e) => zn(e, () => Pi[mn(Math.random() * 62)] ?? "").join(""), de = je(20), We = Promise.all.bind(Promise), Mo = typeof window < "u", { entries: Je, fromEntries: _o, keys: he, values: be } = Object, oe = () => {
}, xo = "candidate", H = (e) => (e !== null && clearTimeout(e), null), q = (e) => new Error(`${se}: ${e}`), Ge = (e, t) => e instanceof Error && e.message ? e.message : typeof e == "string" && e ? e : ie(e ?? t), xe = (e, t) => e instanceof Error ? e : q(Ge(e, t)), Ti = new TextEncoder(), Si = new TextDecoder(), Re = (e) => Ti.encode(e), Ue = (e) => Si.decode(e), dt = (e) => e.reduce((t, n) => t + n.toString(16).padStart(2, "0"), ""), Ve = (...e) => e.join("@"), bi = (e, t) => {
  const n = [...e], r = () => {
    const a = wi(t++) * 1e4;
    return a - mn(a);
  };
  let i = n.length;
  for (; i; ) {
    const a = mn(r() * i--), o = n[i];
    n[i] = n[a], n[a] = o;
  }
  return n;
}, Ai = (e, t, n, r = false) => {
  var _a2, _b;
  return ((_a2 = e.relayConfig) == null ? void 0 : _a2.urls) || (r ? bi(t, Co(e.appId)) : t).slice(0, ((_b = e.relayConfig) == null ? void 0 : _b.redundancy) ?? n);
}, ie = JSON.stringify, vt = (e) => {
  try {
    return JSON.parse(e);
  } catch {
    throw q(`failed to parse JSON: ${e}`);
  }
}, Co = (e, t = Number.MAX_SAFE_INTEGER) => e.split("").reduce((n, r) => n + r.charCodeAt(0), 0) % t, Ar = 3333, Ri = 6e4, en = {};
let ct = null, vn = null;
const ki = () => {
  ct || (ct = new Promise((e) => {
    vn = e;
  }).finally(() => {
    vn = null, ct = null;
  }));
}, Ei = () => {
  vn == null ? void 0 : vn();
}, Oi = (e, t, n) => {
  const r = {};
  let i = false, a = false, o, c = oe;
  r.isClosed = false, r.ready = new Promise((f) => c = f);
  const s = () => {
    if (r.isClosed) return;
    o = void 0, a = false;
    const f = new WebSocket(e);
    f.onclose = () => {
      if (r.isClosed || a) return;
      if (a = true, ct) {
        ct.then(s);
        return;
      }
      const u = en[e] ?? (en[e] = Ar);
      o = setTimeout(s, Math.random() * u), en[e] = vi(u * 2, Ri);
    }, f.onmessage = (u) => t(String(u.data)), r.socket = f, r.url = f.url, f.onopen = () => {
      const u = i;
      i = true, c(r), en[e] = Ar, u && (n == null ? void 0 : n());
    }, r.send = (u) => {
      f.readyState === 1 && f.send(u);
    };
  };
  return r.close = () => {
    r.isClosed = true, o !== void 0 && (clearTimeout(o), o = void 0), r.socket.close();
  }, s(), r;
}, Di = (e) => {
  const t = {}, n = /* @__PURE__ */ new WeakMap(), r = (o) => {
    const c = n.get(o);
    if (!c) throw q("relay bookkeeping missing registration for relay client");
    return c;
  }, i = () => {
    const o = {}, c = (s) => o[s] ?? (o[s] = {});
    return { forKey: c, forRelay: (s) => c(r(s)) };
  }, a = (o, c) => (t[o] = c, n.set(c, o), c);
  return { register: (o, c) => {
    const s = t[o];
    return s || a(o, c());
  }, keyOf: r, scoped: i, getSockets: () => _o(Je(t).flatMap(([o, c]) => {
    const s = e(c);
    return s ? [[o, s]] : [];
  })) };
}, Mi = () => {
  if (Mo) {
    const e = new AbortController();
    return addEventListener("online", Ei, { signal: e.signal }), addEventListener("offline", ki, { signal: e.signal }), () => e.abort();
  }
  return oe;
}, jn = "AES-GCM", _i = {}, xi = (e) => btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(e)))), Ci = (e) => {
  const t = atob(e);
  return new Uint8Array(t.length).map((n, r) => t.charCodeAt(r)).buffer;
}, jt = async (e, t) => new Uint8Array(await crypto.subtle.digest(e, Re(t))), Ze = async (e) => _i[e] ?? (_i[e] = Array.from(await jt("SHA-1", e)).map((t) => t.toString(36)).join("")), Li = async (e, t, n) => crypto.subtle.importKey("raw", await crypto.subtle.digest({ name: "SHA-256" }, Re(`${e}:${t}:${n}`)), { name: jn }, false, ["encrypt", "decrypt"]), Bi = async (e, t) => dt(await jt("SHA-256", `${se}:${e}:${t}`)), Lo = "$", Bo = ",", Ni = async (e, t) => {
  const n = crypto.getRandomValues(new Uint8Array(16));
  return n.join(Bo) + Lo + xi(await crypto.subtle.encrypt({ name: jn, iv: n }, await e, Re(t)));
}, Ii = async (e, t) => {
  const [n, r] = t.split(Lo);
  return Ue(await crypto.subtle.decrypt({ name: jn, iv: new Uint8Array((n == null ? void 0 : n.split(Bo).map(Number)) ?? []) }, await e, Ci(r ?? "")));
}, qi = 18e4;
var Ui = class {
  constructor(e) {
    __publicField(this, "makeOffer");
    __publicField(this, "leased", /* @__PURE__ */ new Map());
    __publicField(this, "destroyed", false);
    this.makeOffer = e;
  }
  claimLeased(e) {
    const t = this.leased.get(e);
    t && (H(t), this.leased.delete(e));
  }
  reclaimLeased(e) {
    this.leased.has(e) && (this.claimLeased(e), e.destroy());
  }
  checkout(e, t, n) {
    const r = async (i = false) => {
      if (this.destroyed) throw q("room left while preparing offer");
      const a = this.makeOffer();
      try {
        const o = await n(a);
        if (this.destroyed) throw q("room left while preparing offer");
        return t ? (this.leased.set(a, setTimeout(() => {
          this.leased.delete(a), a.destroy();
        }, qi)), { peer: a, offer: o, claim: () => this.claimLeased(a), reclaim: () => this.reclaimLeased(a) }) : { peer: a, offer: o };
      } catch (o) {
        if (a.destroy(), !i && !this.destroyed) return r(true);
        throw o;
      }
    };
    return We(zn(e, () => r()));
  }
  getOffers(e, t) {
    return this.checkout(e, true, t);
  }
  destroy() {
    this.destroyed = true, this.leased.forEach((e, t) => {
      H(e), t.destroy();
    }), this.leased.clear();
  }
};
const tn = q("incorrect password for overlapping room"), $i = (e, t, n) => {
  const r = (o) => jt("SHA-256", `${o}:${e}:${t}:${n}`).then(dt), i = async (o, c, s) => {
    if (!e) return;
    if (s) {
      const u = je(36);
      await o({ __trystero_pw: "challenge", c: u });
      const { data: l } = await c();
      if (!l || typeof l != "object" || l.__trystero_pw !== "response" || typeof l.h != "string") throw tn;
      const d = await r(u);
      if (l.h !== d) throw tn;
      return;
    }
    const { data: f } = await c();
    if (!f || typeof f != "object" || f.__trystero_pw !== "challenge" || typeof f.c != "string") throw tn;
    await o({ __trystero_pw: "response", h: await r(f.c) });
  };
  return { run: i, compose: (o) => e || o ? async (c, s, f, u) => {
    await i(s, f, u), await (o == null ? void 0 : o(c, s, f, u));
  } : void 0 };
}, Fi = (e) => {
  const t = Ge(e, "unknown error");
  return t.startsWith("handshake ") ? t : `handshake failed: ${t}`;
}, Hi = ({ onPeerHandshake: e, onHandshakeError: t, handshakeTimeoutMs: n, sendHandshakeData: r, sendHandshakeReady: i, onActivate: a, onFailure: o }) => {
  const c = {}, s = (l, d) => {
    const m = c[l];
    !m || d && m.peer !== d || m.isActive || !m.didLocalHandshakePass || !m.didReceiveRemoteReady || (m.isActive = true, m.handshakeTimer = H(m.handshakeTimer), a(l, m.peer));
  }, f = (l, d, m) => {
    const v = c[l];
    if (!v || v.peer !== d) return;
    const b = Fi(m);
    t == null ? void 0 : t(l, b), o(l, d, q(b));
  }, u = (l, d) => {
    const m = c[l];
    !m || m.peer !== d || m.isActive || (m.didLocalHandshakePass = true, i("", l).catch((v) => f(l, d, q(`failed sending handshake readiness: ${Ge(v, "unknown send failure")}`))), s(l, d));
  };
  return { addPeer: (l, d) => {
    c[l] = { peer: d, isActive: false, didLocalHandshakePass: false, didReceiveRemoteReady: false, handshakeTimer: null, pendingHandshakePayloads: [], handshakeWaiters: [] };
  }, clearPeer: (l, d) => {
    const m = c[l];
    m && (m.handshakeTimer = H(m.handshakeTimer), m.pendingHandshakePayloads.length = 0, m.handshakeWaiters.splice(0).forEach((v) => v.reject(d)), delete c[l]);
  }, canReceiveFromPeer: (l, d) => {
    const m = c[l];
    return !!(m && (m.isActive || d));
  }, start: (l, d) => {
    const m = c[l];
    if (!m || m.peer !== d) return;
    m.handshakeTimer = setTimeout(() => f(l, d, q(`handshake timed out after ${n}ms`)), n);
    const v = async (g, h) => {
      await r(g, l, h);
    }, b = () => new Promise((g, h) => {
      const w = c[l];
      if (!w || w.peer !== d) {
        h(q("peer disconnected during handshake"));
        return;
      }
      const R = w.pendingHandshakePayloads.shift();
      if (R) {
        g(R);
        return;
      }
      w.handshakeWaiters.push({ resolve: g, reject: (O) => h(O) });
    }), y = de < l;
    Promise.resolve(e == null ? void 0 : e(l, v, b, y)).then(() => u(l, d)).catch((g) => f(l, d, xe(g, "handshake failed")));
  }, receiveHandshakeData: (l, d, m) => {
    const v = c[d];
    if (!v || v.isActive) return;
    const b = m === void 0 ? { data: l } : { data: l, metadata: m }, y = v.handshakeWaiters.shift();
    if (y) {
      y.resolve(b);
      return;
    }
    if (v.pendingHandshakePayloads.length >= 16) {
      f(d, v.peer, q("too many pending handshake messages"));
      return;
    }
    v.pendingHandshakePayloads.push(b);
  }, receiveHandshakeReady: (l) => {
    const d = c[l];
    !d || d.isActive || (d.didReceiveRemoteReady = true, s(l));
  } };
}, No = 16384, wn = 1e4, It = 12e4, zi = 15e3, ji = 150, Wi = 5e3, Rr = "icecandidate", kr = "icegatheringstatechange", Ki = "iceconnectionstatechange", Qe = "offer", Xi = "answer", Yi = /out of range/i, Ji = 128, Gi = 8192, Er = (e) => e.replace(/ (\S+\.local) (\d+) typ host/g, " 127.0.0.1 $2 typ host");
var Or = (e, { trickleIce: t, rtcConfig: n, rtcPolyfill: r, turnConfig: i, _test_only_mdnsHostFallbackToLoopback: a }) => {
  const o = new (r ?? RTCPeerConnection)({ iceServers: Dr.concat(i ?? []), ...n }), c = {}, s = /* @__PURE__ */ new Set(), f = [], u = [];
  let l = null;
  const d = t !== false, m = [], v = [];
  let b, y = false, g = false, h = null, w = null, R = false;
  const O = (A) => {
    b && (b(A), b = void 0);
  }, _ = () => w = H(w), N = () => {
    var _a2;
    R || (R = true, s.forEach((A) => A()), l = H(l), u.length = 0, _(), (_a2 = c.close) == null ? void 0 : _a2.call(c));
  }, L = (A) => {
    A.type === Qe && (O(A), !c.signal && !o.remoteDescription) || (c.signal ? c.signal(A) : f.push(A));
  }, I = (A) => {
    const D = c.signal;
    c.signal = (F) => {
      D == null ? void 0 : D(F), A(F);
    }, f.length > 0 && f.splice(0).forEach((F) => {
      var _a2;
      return (_a2 = c.signal) == null ? void 0 : _a2.call(c, F);
    });
  }, U = (A) => a ? Er(A) : A, j = (A) => {
    if (!a || typeof A.candidate != "string") return A;
    const D = Er(A.candidate);
    return D === A.candidate ? A : { ...A, candidate: D };
  }, J = (A) => {
    var _a2, _b;
    return { type: ((_a2 = A.localDescription) == null ? void 0 : _a2.type) ?? Qe, sdp: U(((_b = A.localDescription) == null ? void 0 : _b.sdp) ?? "") };
  }, p = () => {
    var _a2, _b;
    const A = (_a2 = o.remoteDescription) == null ? void 0 : _a2.sdp;
    return A ? ((_b = A.match(/a=ice-ufrag:([^\s]+)/)) == null ? void 0 : _b[1]) ?? null : null;
  }, P = () => {
    var _a2, _b;
    return (((_b = (_a2 = o.remoteDescription) == null ? void 0 : _a2.sdp) == null ? void 0 : _b.match(/^m=/gm)) ?? []).length;
  }, E = (A) => {
    if (!o.remoteDescription) return false;
    const D = P();
    if (typeof A.sdpMLineIndex == "number" && D > 0 && A.sdpMLineIndex >= D) return false;
    const F = p();
    return !(F && A.usernameFragment && A.usernameFragment !== F);
  }, k = async (A) => {
    try {
      return await o.addIceCandidate(A), true;
    } catch (D) {
      if (D instanceof Error && Yi.test(D.message) && typeof A.sdpMLineIndex == "number") return false;
      throw D;
    }
  }, B = (A) => {
    m.length >= Ji && m.shift(), m.push(A);
  }, M = async () => {
    if (!o.remoteDescription || m.length === 0) return;
    const A = p(), D = m.splice(0), F = [];
    for (const X of D) if (!(A && X.usernameFragment && X.usernameFragment !== A)) {
      if (!E(X)) {
        F.push(X);
        continue;
      }
      await k(X) || F.push(X);
    }
    F.forEach(B);
  }, S = async (A) => {
    if (E(A)) {
      await k(A) || B(A);
      return;
    }
    B(A);
  }, T = (A) => {
    A.binaryType = "arraybuffer", A.bufferedAmountLowThreshold = 65535;
    const D = () => {
      console.warn(`${se}: invalid or excessive data before handler registration; disconnecting peer`), A.close(), o.close(), N();
    };
    A.onmessage = (F) => {
      const X = F.data;
      if (!R) {
        if (!(X instanceof ArrayBuffer) && !ArrayBuffer.isView(X) || X.byteLength > 16515) {
          D();
          return;
        }
        if (c.data) c.data(X);
        else {
          if (u.length >= 64) {
            D();
            return;
          }
          l || (l = setTimeout(D, wn)), u.push(X);
        }
      }
    }, A.onopen = () => {
      var _a2;
      return (_a2 = c.connect) == null ? void 0 : _a2.call(c);
    }, A.onclose = N, A.onerror = ({ error: F }) => {
      var _a2;
      R || (F == null ? void 0 : F.errorDetail) === "sctp-failure" && (F.sctpCauseCode === 12 || /^User-Initiated Abort\b/.test(F.message)) || ((_a2 = c.error) == null ? void 0 : _a2.call(c, xe(F, "data channel error")));
    };
  }, x = (n == null ? void 0 : n.iceServers) ?? Dr.concat(i ?? []), z = (A) => x.some(({ urls: D }) => (Array.isArray(D) ? D : [D]).some((F) => A.test(F))), Y = z(/^turns?:/i), $ = !Y && z(/^stuns?:/i), ne = Y ? /\btyp relay\b/ : $ ? /\btyp (?:srflx|relay|prflx)\b/ : /\btyp (?:host|srflx|relay|prflx)\b/, ee = async (A) => (await new Promise((D) => {
    let F = null, X = null;
    const te = () => {
      H(F), H(X), A.removeEventListener(kr, Ee), A.removeEventListener(Rr, Se), s.delete(te), D();
    }, Te = (G = "") => {
      var _a2;
      const Z = `${((_a2 = A.localDescription) == null ? void 0 : _a2.sdp) ?? ""}
${G}`;
      ne.test(Z) && (H(X), X = setTimeout(te, ji));
    }, Ee = () => {
      A.iceGatheringState === "complete" || R ? te() : Te();
    }, Se = (G) => {
      const { candidate: Z } = G;
      Z ? Te(Z.candidate) : te();
    };
    s.add(te), F = setTimeout(te, zi), A.addEventListener(kr, Ee), A.addEventListener(Rr, Se), Ee();
  }), J(A)), ae = async () => {
    const A = d ? J(o) : await ee(o);
    return R || L(A), A;
  };
  e ? (h = o.createDataChannel("data"), T(h)) : o.ondatachannel = ({ channel: A }) => {
    h = A, T(A);
  };
  const we = async (A = false) => {
    var _a2, _b;
    if (o.connectionState === "closed" || !A && (y || o.signalingState !== "stable")) {
      o.connectionState === "closed" && O();
      return;
    }
    try {
      return y = true, A && (o.remoteDescription && o.signalingState !== "stable" && o.signalingState !== "closed" && ((_a2 = o.localDescription) == null ? void 0 : _a2.type) === Qe && await o.setLocalDescription({ type: "rollback" }), typeof o.restartIce == "function" && o.restartIce()), await o.setLocalDescription(A ? await o.createOffer({ iceRestart: true }) : void 0), await ae();
    } catch (D) {
      A || O(), (_b = c.error) == null ? void 0 : _b.call(c, xe(D, "failed to create local offer"));
    } finally {
      y = false;
    }
  };
  o.onnegotiationneeded = async () => we(false), o.onicecandidate = ({ candidate: A }) => {
    if (!d || !A) return;
    const D = j(typeof A.toJSON == "function" ? A.toJSON() : { candidate: A.candidate, sdpMid: A.sdpMid, sdpMLineIndex: A.sdpMLineIndex, usernameFragment: A.usernameFragment });
    L({ type: xo, sdp: JSON.stringify(D) });
  };
  const Pe = () => {
    if (o.connectionState === "failed" || o.connectionState === "closed" || o.iceConnectionState === "failed" || o.iceConnectionState === "closed") {
      N();
      return;
    }
    if (o.connectionState === "connected" || o.connectionState === "connecting" || o.iceConnectionState === "connected" || o.iceConnectionState === "completed" || o.iceConnectionState === "checking") {
      _();
      return;
    }
    if (o.connectionState === "disconnected" || o.iceConnectionState === "disconnected") {
      w || (w = setTimeout(() => {
        w = null, (o.connectionState === "disconnected" || o.iceConnectionState === "disconnected") && N();
      }, Wi));
      return;
    }
  };
  o.onconnectionstatechange = Pe, o.addEventListener(Ki, Pe), o.ontrack = (A) => {
    var _a2, _b;
    const D = A.streams[0];
    if (D) {
      if (!c.track && !c.stream) {
        v.push({ track: A.track, stream: D });
        return;
      }
      (_a2 = c.track) == null ? void 0 : _a2.call(c, A.track, D), (_b = c.stream) == null ? void 0 : _b.call(c, D);
    }
  };
  const fe = e ? new Promise((A) => {
    b = A;
  }) : Promise.resolve();
  return e && queueMicrotask(() => {
    var _a2;
    !y && o.signalingState === "stable" && !o.localDescription && o.connectionState !== "closed" && ((_a2 = o.onnegotiationneeded) == null ? void 0 : _a2.call(o, new Event("negotiationneeded")));
  }), { connection: o, get channel() {
    return h;
  }, get isDead() {
    return o.connectionState === "closed";
  }, getOffer: async (A = false) => {
    var _a2;
    if (e) return A ? we(true) : b ? fe : ((_a2 = o.localDescription) == null ? void 0 : _a2.type) === Qe ? d ? J(o) : ee(o) : fe;
  }, async signal(A) {
    var _a2, _b, _c;
    if (A.type === "candidate") {
      if (A.sdp.length > Gi) return;
      try {
        const D = JSON.parse(A.sdp);
        D && typeof D == "object" && await S(j(D));
      } catch (D) {
        (_a2 = c.error) == null ? void 0 : _a2.call(c, xe(D, "failed to parse remote candidate"));
      }
      return;
    }
    if (!((h == null ? void 0 : h.readyState) === "open" && !((_b = A.sdp) == null ? void 0 : _b.includes("a=rtpmap")))) try {
      const D = { ...A, sdp: U(A.sdp) };
      if (A.type === Qe) {
        const F = y || o.signalingState !== "stable" && !g;
        return F && e ? void 0 : (F && o.signalingState !== "stable" ? await We([o.setLocalDescription({ type: "rollback" }), o.setRemoteDescription(D)]) : await o.setRemoteDescription(D), await M(), await o.setLocalDescription(), await ae());
      }
      if (A.type === Xi) {
        g = true;
        try {
          await o.setRemoteDescription(D), await M();
        } finally {
          g = false;
        }
      }
    } catch (D) {
      (_c = c.error) == null ? void 0 : _c.call(c, xe(D, "failed to apply remote signal"));
    }
  }, sendData: (A) => h == null ? void 0 : h.send(A), destroy: () => {
    _(), O(), h == null ? void 0 : h.close(), o.close(), y = false, g = false, N();
  }, setHandlers: (A) => {
    const { signal: D, ...F } = A;
    Object.assign(c, F), c.data && u.length > 0 && (l = H(l), u.splice(0).forEach((X) => {
      var _a2;
      return (_a2 = c.data) == null ? void 0 : _a2.call(c, X);
    })), D && I(D), (c.track || c.stream) && v.length > 0 && v.splice(0).forEach(({ track: X, stream: te }) => {
      var _a2, _b;
      (_a2 = c.track) == null ? void 0 : _a2.call(c, X, te), (_b = c.stream) == null ? void 0 : _b.call(c, te);
    });
  }, addStream: (A) => A.getTracks().forEach((D) => o.addTrack(D, A)), removeStream: (A) => o.getSenders().filter((D) => D.track && A.getTracks().includes(D.track)).forEach((D) => o.removeTrack(D)), addTrack: (A, D) => o.addTrack(A, D), removeTrack: (A) => {
    const D = o.getSenders().find((F) => F.track === A);
    D && o.removeTrack(D);
  }, replaceTrack: (A, D) => {
    const F = o.getSenders().find((X) => X.track === A);
    if (F) return F.replaceTrack(D);
  } };
};
const Dr = [...zn(3, (e, t) => `stun:stun${t || ""}.l.google.com:19302`), "stun:stun.cloudflare.com:3478"].map((e) => ({ urls: e })), Vi = 1024, Zi = 64, Qi = 128, ea = 8, ta = new Uint8Array(), na = (e, t) => {
  let n;
  try {
    n = e();
  } catch {
    return t(false);
  }
  return typeof n == "boolean" ? t(n) : Promise.resolve(n).then((r) => t(r === true), () => t(false));
}, Mr = (e, t, n) => t === 2 ? n ? e.slice() : e : t === 1 ? vt(Ue(e)) : Ue(e), Io = (e, t, n, r) => {
  try {
    e.progress(t, n, r);
  } catch (i) {
    console.error(`${se} progress handler error:`, i);
  }
}, _r = (e, t, n, r) => {
  var _a2;
  Io(e, 1, n, r);
  try {
    (_a2 = e.receiver) == null ? void 0 : _a2.call(e, t, n, r);
  } catch (i) {
    console.error(`${se} action handler error:`, i);
  }
}, ra = ({ fail: e, accept: t, refuse: n, maxReceiveBytes: r, chunkSize: i }) => {
  const a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
  let f = 0, u = 0, l = 0, d = false, m = false;
  const v = (p) => p.phase !== "released", b = (p) => Math.min(r, (p == null ? void 0 : p.maxPayloadBytes) ?? r), y = (p, P, E, k) => {
    var _a2, _b;
    E == null ? void 0 : E.reject(P), (_b = (_a2 = a.get(p.type)) == null ? void 0 : _a2.reject) == null ? void 0 : _b.call(_a2, p.peerId, p.metadata, P), k !== void 0 && n(p.peerId, k, P);
  }, g = (p) => {
    for (const P of Array.from(c)) P.peerId === p && (c.delete(P), c.add(P));
  }, h = (p) => {
    var _a2, _b;
    if (!v(p)) return;
    p.phase = "released", (_a2 = p.removeAbortListener) == null ? void 0 : _a2.call(p), p.timer = H(p.timer);
    const P = o.get(p.peerId);
    if (p.kind === "inline") {
      const E = P.inline.get(p.key);
      E.splice(E.indexOf(p), 1), E.length || P.inline.delete(p.key), p.data = ta;
    } else P.bulk.delete(p.id), c.delete(p), p.data = null, p.transfer === "receiving" && (l -= p.size, P.active === p && (P.active = null, g(p.peerId)), m = true);
    P.count--, f--, P.count || o.delete(p.peerId), (_b = p.controller) == null ? void 0 : _b.abort();
  }, w = (p, P) => {
    v(p) && (h(p), y(p, P, p.scope, p.kind === "bulk" ? p.id : void 0));
  }, R = (p, P) => {
    if (p.phase !== "pending") return p.phase === "ready";
    if (p.size > b(P)) return w(p, "payload exceeds receiver size limit"), false;
    const E = p.scope ? p.scope.receive : P.receive;
    if (!E) return P.receiver ? (p.phase = "ready", true) : false;
    if (u >= Qi || (s.get(p.peerId) ?? 0) >= ea) return w(p, "too many pending receive decisions"), false;
    p.phase = "deciding";
    const k = new AbortController();
    p.controller = k, u++, s.set(p.peerId, (s.get(p.peerId) ?? 0) + 1);
    const B = na(() => E({ byteLength: p.size, peerId: p.peerId, signal: k.signal, ...p.metadata === void 0 ? {} : { metadata: p.metadata } }), (M) => {
      u--;
      const S = s.get(p.peerId) - 1;
      return S ? s.set(p.peerId, S) : s.delete(p.peerId), v(p) ? (M ? p.phase = "ready" : w(p, "payload rejected by receiver"), M) : false;
    });
    return typeof B == "boolean" ? B : (B.then(() => I()), false);
  }, O = (p, P, E) => {
    let k;
    try {
      k = Mr(E, p.format, p.kind === "inline");
    } catch {
      h(p), e(p.peerId, "invalid action payload");
      return;
    }
    h(p), _r(P, k, p.peerId, p.metadata);
  }, _ = (p) => {
    const P = a.get(p.type);
    v(p) && P && R(p, P) && P.receiver && O(p, P, p.data);
  }, N = (p) => {
    const P = a.get(p.type);
    if (!v(p) || !P || !R(p, P) || !P.receiver) return;
    if (p.transfer === "receiving") {
      p.offset === p.size && O(p, P, p.data);
      return;
    }
    const E = o.get(p.peerId);
    !E.active && l + p.size <= r && (E.active = p, p.transfer = "receiving", l += p.size, p.lastSeen = Date.now(), c.delete(p), t(p.peerId, p.id));
  }, L = (p, P) => {
    var _a2;
    const E = (_a2 = o.get(p)) == null ? void 0 : _a2.inline.get(P);
    for (; E == null ? void 0 : E[0]; ) {
      const k = E[0];
      if (_(k), v(k)) break;
    }
  }, I = () => {
    if (d) {
      m = true;
      return;
    }
    d = true;
    try {
      do {
        m = false;
        for (const p of c) N(p);
        for (const [p, P] of o) {
          for (const E of P.bulk.values()) E.offset === E.size && N(E);
          for (const E of P.inline.keys()) L(p, E);
        }
      } while (m);
    } finally {
      d = false;
    }
  }, U = (p) => {
    let P = o.get(p.peerId);
    if (f >= Vi || ((P == null ? void 0 : P.count) ?? 0) >= Zi) return y(p, "too many pending transfers", p.scope, p.kind === "bulk" ? p.id : void 0), false;
    if (P || (P = { bulk: /* @__PURE__ */ new Map(), inline: /* @__PURE__ */ new Map(), active: null, count: 0 }, o.set(p.peerId, P)), P.count++, f++, p.kind === "inline") {
      const k = P.inline.get(p.key) ?? [];
      k.push(p), P.inline.set(p.key, k);
    } else P.bulk.set(p.id, p), c.add(p);
    const E = () => {
      const k = It - (Date.now() - p.lastSeen);
      k > 0 ? p.timer = setTimeout(E, k) : (w(p, "action transfer timed out"), I());
    };
    if (p.timer = setTimeout(E, It), p.scope) {
      const { signal: k } = p.scope, B = () => {
        w(p, "receive cancelled"), I();
      };
      if (k.addEventListener("abort", B, { once: true }), p.removeAbortListener = () => k.removeEventListener("abort", B), k.aborted) return B(), false;
    }
    return true;
  }, j = (p, P) => {
    var _a2;
    const E = a.get(p.type), k = (_a2 = E == null ? void 0 : E.receiveScope) == null ? void 0 : _a2.call(E, p.peerId, p.metadata);
    return k === null || (k == null ? void 0 : k.signal.aborted) ? (P !== void 0 && n(p.peerId, P, "unexpected response"), null) : p.size > b(E) ? (y(p, "payload exceeds receiver size limit", k, P), null) : { action: E, scope: k };
  }, J = (p, P) => ({ ...p, ...P ? { scope: P } : {}, phase: "pending", controller: null, lastSeen: Date.now(), timer: null });
  return { register: (p, P = {}) => {
    const E = { ...P, receiver: null, receive: null, reject: null, progress: oe };
    return a.set(p, E), { onMessage: (k) => {
      E.receiver = k, I();
    }, onReceive: (k) => {
      E.receive = k, I();
    }, onReject: (k) => {
      E.reject = k;
    }, onProgress: (k) => {
      E.progress = k;
    } };
  }, receiveInline: (p, P) => {
    var _a2;
    const E = j(p);
    if (!E) return;
    const { action: k, scope: B } = E, M = B ? `${p.type}\0${B.key}` : p.type;
    if ((k == null ? void 0 : k.receiver) && !(B ? B.receive : k.receive) && !((_a2 = o.get(p.peerId)) == null ? void 0 : _a2.inline.has(M))) {
      let T;
      try {
        T = Mr(P, p.format, true);
      } catch {
        e(p.peerId, "invalid action payload");
        return;
      }
      _r(k, T, p.peerId, p.metadata);
      return;
    }
    const S = { ...J(p, B), kind: "inline", key: M, data: P };
    U(S) && L(p.peerId, M);
  }, receiveOffer: (p, P) => {
    var _a2;
    if ((_a2 = o.get(p.peerId)) == null ? void 0 : _a2.bulk.has(P)) {
      e(p.peerId, "duplicate action offer");
      return;
    }
    const E = j(p, P);
    if (!E) return;
    const k = { ...J(p, E.scope), kind: "bulk", id: P, transfer: "waiting", offset: 0, data: null };
    U(k) && I();
  }, receiveChunk: (p, P, E, k) => {
    var _a2;
    const B = o.get(p), M = B == null ? void 0 : B.bulk.get(P);
    if (!M) return;
    if (M.transfer !== "receiving" || E !== M.offset || !k.length || k.length !== Math.min(i, M.size - M.offset)) {
      e(p, "invalid action chunk offset or length");
      return;
    }
    try {
      M.data ?? (M.data = new Uint8Array(M.size));
    } catch {
      w(M, "unable to allocate receive buffer"), I();
      return;
    }
    M.data.set(k, M.offset), M.offset += k.length;
    const S = Date.now();
    M.lastSeen = S;
    for (const T of c) T.phase === "ready" && ((_a2 = a.get(T.type)) == null ? void 0 : _a2.receiver) && (T.lastSeen = S);
    M.offset === M.size ? (N(M), v(M) && (B == null ? void 0 : B.active) === M && (B.active = null, g(p)), I()) : Io(a.get(M.type), M.offset / M.size, p, M.metadata);
  }, cancel: (p, P) => {
    var _a2, _b;
    const E = (_a2 = o.get(p)) == null ? void 0 : _a2.bulk.get(P);
    E && (h(E), (_b = E.scope) == null ? void 0 : _b.reject("response cancelled by sender")), I();
  }, clearPeer: (p) => {
    const P = o.get(p);
    if (P) {
      for (const E of P.bulk.values()) h(E);
      for (const E of P.inline.values()) {
        const k = [...E];
        for (const B of k) h(B);
      }
    }
    I();
  } };
}, Pn = 2, wt = 0, Pt = 1, xr = 2, nn = 3, rn = 4, Tt = 5, on = 36, Cr = 48, De = 6, rt = 14, sn = No - rt, oa = 256 * 1024 ** 2, Lr = 1024 ** 2, Br = "bufferedamountlow", Nr = "close", Ir = "error", sa = 1e4, Me = (e, t) => {
  const n = q(t);
  return n.kind = e, n.name = e === "aborted" ? "AbortError" : n.name, n;
}, Tn = (e) => {
  if (e == null ? void 0 : e.aborted) throw Me("aborted", "operation aborted");
}, qr = (e, t, n = De) => {
  const r = new Uint8Array(n);
  return r[0] = Pn, r[1] = e, new DataView(r.buffer).setUint32(2, t), r;
}, Ke = Me, ia = (e, t, n = sa) => e.readyState !== "open" || e.bufferedAmount <= e.bufferedAmountLowThreshold ? Promise.resolve(e.readyState === "open") : new Promise((r) => {
  let i = false, a = null;
  const o = (f) => {
    i || (i = true, e.removeEventListener(Br, c), e.removeEventListener(Nr, s), e.removeEventListener(Ir, s), t == null ? void 0 : t.removeEventListener("abort", s), H(a), r(f));
  }, c = () => o(true), s = () => o(false);
  if (e.addEventListener(Br, c), e.addEventListener(Nr, s), e.addEventListener(Ir, s), t == null ? void 0 : t.addEventListener("abort", s, { once: true }), a = setTimeout(() => o(false), n), e.readyState !== "open" || (t == null ? void 0 : t.aborted)) {
    o(false);
    return;
  }
  e.bufferedAmount <= e.bufferedAmountLowThreshold && o(true);
}), aa = ({ getPeer: e, getPeerIds: t, canReceiveFromPeer: n, onPeerError: r, throwIfAborted: i = Tn, maxReceiveBytes: a = oa }) => {
  if (!Number.isSafeInteger(a) || a <= 0) throw q("maxReceiveBytes must be a positive safe integer");
  const o = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new WeakSet();
  let f = 0;
  const u = ra({ fail: (y, g) => d(y, g), accept: (y, g) => m(y, g, nn), refuse: (y, g, h) => m(y, g, rn, h), maxReceiveBytes: a, chunkSize: sn }), l = (y) => {
    var _a2;
    for (const g of ((_a2 = c.get(y)) == null ? void 0 : _a2.values()) ?? []) g.fail(Ke("disconnected", "peer disconnected"));
    c.delete(y), u.clearPeer(y);
  }, d = (y, g) => {
    const h = e(y, true);
    h && !s.has(h) && (s.add(h), console.warn(`${se}: ${g}; disconnecting peer ${y}`), r(y, q(g)));
  }, m = (y, g, h, w = "") => {
    var _a2;
    const R = e(y, true);
    if (!R) return;
    const O = Re(w).subarray(0, 200), _ = qr(h, g, De + O.length);
    _.set(O, De);
    try {
      if ((((_a2 = R.channel) == null ? void 0 : _a2.bufferedAmount) ?? 0) > Lr) throw q("control send buffer is full");
      R.sendData(_);
    } catch {
      d(y, "unable to send action control");
    }
  };
  return { makeInternalAction: (y, g = {}) => {
    const h = { sendToPending: !!g.sendToPending, receiveWhilePending: !!g.receiveWhilePending, ...g.maxPayloadBytes === void 0 ? {} : { maxPayloadBytes: g.maxPayloadBytes }, ...g.receiveScope ? { receiveScope: g.receiveScope } : {} }, w = o.get(y);
    if (w) {
      if (w.options.sendToPending !== h.sendToPending || w.options.receiveWhilePending !== h.receiveWhilePending || w.options.receiveScope !== h.receiveScope || w.options.maxPayloadBytes !== h.maxPayloadBytes) throw q(`action type "${y}" cannot be redefined`);
      return w.action;
    }
    const R = Re(y);
    if (!y || y.includes("\0") || R.length > 32) throw q("action type must contain 1\u201332 UTF-8 bytes and no null characters");
    const O = { options: h, action: { ...u.register(y, h), send: async (_, N, L, I, U) => {
      if (i(U), _ === void 0) throw q("action data cannot be undefined");
      const j = _ instanceof Blob, J = j || _ instanceof ArrayBuffer || ArrayBuffer.isView(_), p = J ? 2 : typeof _ == "string" ? 0 : 1;
      let P = j ? _ : _ instanceof ArrayBuffer ? new Uint8Array(_) : ArrayBuffer.isView(_) ? new Uint8Array(_.buffer, _.byteOffset, _.byteLength) : Re(p === 0 ? _ : ie(_));
      const E = P instanceof Blob ? P.size : P.byteLength, k = L === void 0 ? new Uint8Array() : Re(ie(L));
      if (k.length > 16336) throw q("action metadata is too large");
      const B = on + k.length + E <= No;
      !B && J && !(P instanceof Blob) && (P = P.slice());
      const M = B ? 0 : f++ >>> 0, S = B ? on : Cr, T = new Uint8Array(S + k.length + (B ? E : 0));
      T[0] = Pn, T[1] = (B ? wt : Pt) | p << 4, T.set(R, 2);
      const x = new DataView(T.buffer);
      x.setUint16(34, k.length), B || (x.setUint32(36, M), x.setFloat64(40, E)), T.set(k, S), B && T.set(P instanceof Blob ? new Uint8Array(await P.arrayBuffer()) : P, S + k.length);
      const z = N ? Array.isArray(N) ? N : [N] : t(h.sendToPending);
      await We([...new Set(z)].map(async (Y) => {
        const $ = e(Y, h.sendToPending);
        if (!$) {
          console.warn(`${se}: no peer with id ${Y} found`);
          return;
        }
        let ne = null;
        const ee = () => {
          var _a2;
          if (ne) throw ne;
          if (i(U), e(Y, h.sendToPending) !== $ || ((_a2 = $.channel) == null ? void 0 : _a2.readyState) === "closed") throw Ke("disconnected", "peer disconnected");
        }, ae = async (G) => {
          ee();
          const Z = $.channel;
          if (Z && (Z.readyState !== "open" || Z.bufferedAmount > Z.bufferedAmountLowThreshold)) {
            if (!await ia(Z, U)) throw i(U), Ke("disconnected", "data channel stopped draining");
            ee();
          }
          try {
            $.sendData(G);
          } catch {
            throw Ke("disconnected", "peer disconnected");
          }
        };
        if (B) {
          await ae(T), I == null ? void 0 : I(1, Y, L);
          return;
        }
        let we = false, Pe = false, fe = Date.now(), A, D;
        const F = new Promise((G, Z) => {
          A = G, D = Z;
        });
        F.catch(oe);
        const X = c.get(Y) ?? /* @__PURE__ */ new Map();
        if (X.has(M)) throw q("action transmission id is still in use");
        c.set(Y, X);
        let te = null;
        const Te = { accept: () => !te || ne ? false : (te = H(te), A(), true), fail: (G, Z = false) => {
          Z && (Pe = true), ne = G, D(G);
        }, touch: () => {
          te && (fe = Date.now());
        } };
        X.set(M, Te);
        const Ee = () => {
          const G = It - (Date.now() - fe);
          G > 0 ? te = setTimeout(Ee, G) : Te.fail(Ke("timeout", "action offer timed out"));
        };
        te = setTimeout(Ee, It);
        const Se = () => {
          try {
            i(U);
          } catch (G) {
            Te.fail(G);
          }
        };
        U == null ? void 0 : U.addEventListener("abort", Se, { once: true });
        try {
          await ae(T), we = true, await F;
          for (let G = 0; G < E; G += sn) {
            ee();
            const Z = Math.min(sn, E - G), ve = qr(xr, M, rt + Z);
            new DataView(ve.buffer).setFloat64(De, G), ve.set(P instanceof Blob ? new Uint8Array(await P.slice(G, G + Z).arrayBuffer()) : P.subarray(G, G + Z), rt), await ae(ve);
            for (const W of X.values()) W.touch();
            I == null ? void 0 : I((G + Z) / E, Y, L);
          }
          ee();
        } catch (G) {
          throw we && !Pe && e(Y, true) === $ && (!$.channel || $.channel.readyState === "open" && ($.channel.bufferedAmount ?? 0) <= Lr) && m(Y, M, Tt), G;
        } finally {
          te = H(te), U == null ? void 0 : U.removeEventListener("abort", Se), X.delete(M), !X.size && c.get(Y) === X && c.delete(Y);
        }
      }));
    } } };
    return o.set(y, O), O.action;
  }, handleData: (y, g) => {
    var _a2, _b, _c;
    if (g.byteLength < 2 || g.byteLength > 16384) {
      d(y, "invalid action frame");
      return;
    }
    const h = new Uint8Array(g);
    if (h[0] !== Pn) {
      d(y, "incompatible action protocol version");
      return;
    }
    const w = h[1] & 15, R = h[1] >>> 4, O = new DataView(h.buffer, h.byteOffset, h.byteLength);
    if (w > Tt || R > 2 || w > Pt && R !== 0) {
      d(y, "invalid action frame");
      return;
    }
    if (w >= xr) {
      if (h.length < De || (w === nn || w === Tt) && h.length !== De || w === rn && h.length > 206) {
        d(y, "invalid action control");
        return;
      }
      const E = O.getUint32(2);
      if (w === nn) {
        const k = c.get(y);
        if ((_a2 = k == null ? void 0 : k.get(E)) == null ? void 0 : _a2.accept()) for (const B of k.values()) B.touch();
        return;
      }
      if (w === rn) {
        (_c = (_b = c.get(y)) == null ? void 0 : _b.get(E)) == null ? void 0 : _c.fail(Ke("rejected", Ue(h.subarray(De))), true);
        return;
      }
      w === Tt ? u.cancel(y, E) : u.receiveChunk(y, E, h.length >= rt ? O.getFloat64(De) : NaN, h.subarray(rt));
      return;
    }
    const _ = w === wt ? on : Cr;
    if (h.length < _) {
      d(y, "invalid action header");
      return;
    }
    const N = Ue(h.subarray(2, 34)).replaceAll("\0", ""), L = o.get(N);
    if (!n(y, !!(L == null ? void 0 : L.options.receiveWhilePending))) return;
    const I = O.getUint16(34), U = _ + I, j = w === wt ? h.length - U : O.getFloat64(40), J = w === Pt ? O.getUint32(36) : 0;
    if (!N || U > h.length || !Number.isSafeInteger(j) || j < 0 || w === Pt && (j === 0 || U !== h.length)) {
      d(y, "invalid action proposal");
      return;
    }
    let p;
    try {
      I && (p = vt(Ue(h.subarray(_, U))));
    } catch {
      d(y, "invalid action metadata");
      return;
    }
    const P = { peerId: y, type: N, format: R, size: j, ...p === void 0 ? {} : { metadata: p } };
    w === wt ? u.receiveInline(P, h.subarray(U)) : u.receiveOffer(P, J);
  }, clearPeer: l };
}, qo = (e) => e && typeof e == "object" && !Array.isArray(e) && typeof e.r == "string" ? e : null, St = (e) => {
  const t = qo(e);
  return t ? { r: t.r, ...Object.hasOwn(t, "m") ? { m: t.m } : {} } : null;
}, an = (e) => {
  const t = qo(e);
  return t ? { r: t.r, ...typeof t.e == "string" ? { e: t.e } : {} } : null;
}, et = (e, t) => t === void 0 ? e : { ...e, metadata: t }, ca = ({ getPeer: e, getPeerIds: t, canReceiveFromPeer: n, onPeerError: r, maxReceiveBytes: i }) => {
  const a = /* @__PURE__ */ Object.create(null), o = {}, c = /* @__PURE__ */ new Map(), s = aa({ getPeer: e, getPeerIds: t, canReceiveFromPeer: n, onPeerError: r, ...i === void 0 ? {} : { maxReceiveBytes: i } }), f = s.makeInternalAction, u = s.handleData, l = (y) => {
    const g = o[y];
    g && (H(g.timer), g.signal && g.abortHandler && g.signal.removeEventListener("abort", g.abortHandler), delete o[y], g.controller.abort());
  }, d = (y, g) => {
    Je(o).forEach(([h, w]) => {
      w.peerId === y && (l(h), w.reject(g));
    });
  }, m = (y, g) => {
    s.clearPeer(y);
    const h = c.get(y);
    h && (c.delete(y), h.forEach((w) => w.abort())), d(y, Me("disconnected", Ge(g, "peer disconnected")));
  }, v = f("@_response", { receiveScope: (y, g) => {
    const h = an(g), w = h && o[h.r];
    if (!h || !w || w.peerId !== y) return null;
    const R = h.e === void 0 ? w.getReceive() : null;
    return { key: h.r, signal: w.controller.signal, receive: R ? (O) => R({ byteLength: O.byteLength, peerId: O.peerId, kind: "response", signal: O.signal }) : null, reject: (O) => {
      o[h.r] === w && (l(h.r), w.reject(Me("rejected", O)));
    } };
  } });
  return v.onProgress((y, g, h) => {
    var _a2;
    const w = an(h), R = w && o[w.r];
    R && R.peerId === g && (w == null ? void 0 : w.e) === void 0 && ((_a2 = R.getReceiveProgress()) == null ? void 0 : _a2(y, { peerId: g }));
  }), v.onMessage((y, g, h) => {
    const w = an(h);
    if (!w) return;
    const R = o[w.r];
    if (!(!R || R.peerId !== g)) {
      if (l(w.r), w.e !== void 0) {
        R.reject(Me("rejected", w.e));
        return;
      }
      R.resolve(y);
    }
  }), { makeAction: (y, g) => {
    if (g && "onRequest" in g && g.kind !== "request") throw q('request actions must use kind: "request"');
    const h = (g == null ? void 0 : g.kind) ?? "message", w = f(y), R = a[y];
    if (R) {
      if (R.kind !== h) throw q(`action type "${y}" cannot be redefined`);
      return R.action;
    }
    const O = { kind: h, action: null, onReceive: (g == null ? void 0 : g.onReceive) ?? null, onReceiveProgress: (g == null ? void 0 : g.onReceiveProgress) ?? null }, _ = (p, P) => p ? (E, k) => p(E, et({ peerId: k }, P)) : void 0, N = (p, P, E) => {
      var _a2;
      const k = O.kind === "request" ? St(E) : null;
      (_a2 = O.onReceiveProgress) == null ? void 0 : _a2.call(O, p, et({ peerId: P }, k ? k.m : E));
    }, L = (p) => {
      O.onReceive = p, w.onReceive(p ? (P) => {
        const E = h === "request" ? St(P.metadata) : null;
        return p(et({ byteLength: P.byteLength, peerId: P.peerId, signal: P.signal, kind: h }, E ? E.m : P.metadata));
      } : null);
    };
    if (L(O.onReceive), w.onProgress(N), h === "message") {
      let p = (g == null ? void 0 : g.onMessage) ?? null;
      const P = (k, B, M) => {
        const S = p;
        Promise.resolve().then(() => S(k, et({ peerId: B }, M))).catch((T) => console.error(`${se} action handler error:`, T));
      }, E = { send: async (k, B = {}) => {
        await w.send(k, B.target, B.metadata, _(B.onProgress, B.metadata), B.signal);
      }, get onMessage() {
        return p;
      }, set onMessage(k) {
        p = k, w.onMessage(k ? P : null);
      }, get onReceive() {
        return O.onReceive;
      }, set onReceive(k) {
        L(k);
      }, get onReceiveProgress() {
        return O.onReceiveProgress;
      }, set onReceiveProgress(k) {
        O.onReceiveProgress = k;
      } };
      return O.action = E, a[y] = O, w.onMessage(p ? P : null), E;
    }
    w.onReject((p, P, E) => {
      const k = St(P);
      k && v.send(null, p, { r: k.r, e: E }).catch(oe);
    });
    let I = (g == null ? void 0 : g.onRequest) ?? null;
    const U = (p, P, E) => {
      const k = St(E);
      if (!k) return;
      const B = I, M = new AbortController();
      let S = c.get(P);
      S || (S = /* @__PURE__ */ new Set(), c.set(P, S)), S.add(M), Promise.resolve().then(async () => {
        const T = await B(p, { ...et({ peerId: P }, k.m), signal: M.signal });
        if (T === void 0) throw q("request handler returned undefined");
        return T;
      }).then((T) => v.send(T, P, { r: k.r }), (T) => v.send(null, P, { r: k.r, e: Ge(T, "request failed").slice(0, 512) })).catch(oe).finally(() => {
        const T = c.get(P);
        T == null ? void 0 : T.delete(M), T && !T.size && c.delete(P), M.abort();
      });
    }, j = async (p, P) => {
      const { target: E, metadata: k, onProgress: B, signal: M, timeoutMs: S } = P;
      if (Tn(M), !e(E, false)) throw Me("disconnected", `no active peer with id ${E}`);
      const T = je(20), x = new AbortController(), z = new Promise((Y, $) => {
        const ne = { controller: x, getReceive: () => O.onReceive, getReceiveProgress: () => O.onReceiveProgress, peerId: E, resolve: Y, reject: $, timer: null, ...M === void 0 ? {} : { signal: M } }, ee = () => {
          l(T), $(Me("aborted", "operation aborted"));
        };
        M && (ne.abortHandler = ee, M.addEventListener("abort", ee, { once: true })), o[T] = ne, S !== void 0 && (ne.timer = setTimeout(() => {
          l(T), ne.reject(Me("timeout", "request timed out"));
        }, S));
      });
      try {
        const Y = w.send(p, E, k === void 0 ? { r: T } : { r: T, m: k }, _(B, k), x.signal);
        return await Promise.race([z, Y.then(() => z)]);
      } finally {
        l(T);
      }
    }, J = { request: j, requestMany: async (p, P) => {
      const { targets: E, onResult: k, ...B } = P;
      return Tn(B.signal), await We(E.map(async (M) => {
        try {
          const S = { peerId: M, status: "fulfilled", value: await j(p, { ...B, target: M }) };
          return k == null ? void 0 : k(S), S;
        } catch (S) {
          const T = xe(S, "request failed");
          if (T.kind === "aborted" || !T.kind) throw T;
          const x = T.kind === "timeout" ? { peerId: M, status: "timeout" } : T.kind === "disconnected" ? { peerId: M, status: "disconnected" } : { peerId: M, status: "rejected", error: T };
          return k == null ? void 0 : k(x), x;
        }
      }));
    }, get onRequest() {
      return I;
    }, set onRequest(p) {
      I = p, w.onMessage(p ? U : null);
    }, get onReceive() {
      return O.onReceive;
    }, set onReceive(p) {
      L(p);
    }, get onReceiveProgress() {
      return O.onReceiveProgress;
    }, set onReceiveProgress(p) {
      O.onReceiveProgress = p;
    } };
    return O.action = J, a[y] = O, w.onMessage(I ? U : null), J;
  }, makeInternalAction: f, handleData: u, clearPeer: m };
}, Ur = (e) => e && typeof e == "object" && !Array.isArray(e) && typeof e.k == "string" ? { key: e.k, ...typeof e.s == "string" ? { streamId: e.s } : {}, ...typeof e.t == "string" ? { trackId: e.t } : {}, ...Object.hasOwn(e, "m") ? { metadata: e.m } : {} } : null, $r = (e) => (t) => {
  let n = e.get(t);
  return n || (n = je(20), e.set(t, n)), n;
}, Sn = () => {
  const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  return { getStreamKey: $r(e), getTrackKey: $r(t), rememberRemoteStream: (s, f, u) => {
    var _a2;
    const l = o.get(f);
    l !== void 0 && n.get(l) === f && n.delete(l), o.set(f, s), n.set(s, f), u && r.set(u, f), (_a2 = f.getTracks) == null ? void 0 : _a2.call(f).forEach((d) => {
      typeof d.id == "string" && a.set(d.id, { track: d, stream: f });
    });
  }, getRemoteStream: (s, f) => n.get(s) ?? (f ? r.get(f) : void 0), rememberRemoteTrack: (s, f, u, l, d) => {
    var _a2;
    const m = { track: f, stream: u }, v = c.get(f);
    v !== void 0 && ((_a2 = i.get(v)) == null ? void 0 : _a2.track) === f && i.delete(v), c.set(f, s), i.set(s, m), l && a.set(l, m), d && r.set(d, u);
  }, getRemoteTrack: (s, f) => i.get(s) ?? (f ? a.get(f) : void 0), hasRemoteMedia: () => n.size > 0 || i.size > 0, clearRemote: () => {
    n.clear(), r.clear(), i.clear(), a.clear();
  } };
}, fa = ({ iterate: e, isActive: t, getSharedMediaPeer: n, onPeerError: r }) => {
  const i = {}, a = {}, o = {}, c = Sn(), s = (b) => {
    var _a2;
    return ((_a2 = n(b)) == null ? void 0 : _a2.__trysteroMedia) ?? (o[b] ?? (o[b] = Sn()));
  }, f = (b, y, g, h) => {
    const w = b[y] ?? (b[y] = []);
    if (w.length >= 64) {
      console.warn(`${se}: too many pending ${h} metadata messages`), r(y, q("too many pending media metadata messages"));
      return;
    }
    w.push(g);
  }, u = (b, y, g) => {
    if (!(b == null ? void 0 : b.length)) return;
    const h = y ? b.findIndex((w) => {
      const R = g(w);
      return !R || R === y;
    }) : 0;
    return h >= 0 ? b.splice(h, 1)[0] : void 0;
  }, l = (b, y, g, h) => {
    var _a2;
    t(b) && (s(b).rememberRemoteStream(y, g, typeof g.id == "string" ? g.id : void 0), (_a2 = v.onPeerStream) == null ? void 0 : _a2.call(v, g, b, h));
  }, d = (b, y, g, h, w) => {
    var _a2;
    t(b) && (s(b).rememberRemoteTrack(y, g, h, typeof g.id == "string" ? g.id : void 0, typeof h.id == "string" ? h.id : void 0), (_a2 = v.onPeerTrack) == null ? void 0 : _a2.call(v, g, h, b, w));
  }, m = (b, y, g, h, w, R = {}) => {
    const O = { k: y, ...R, ...g === void 0 ? {} : { m: g } };
    return e(b, async (_, N) => {
      await h(O, _), await w(N);
    });
  }, v = { addStream: (b, y, g) => m(y.target, c.getStreamKey(b), y.metadata, g, (h) => h.addStream(b), { s: b.id }), removeStream: (b, y) => {
    e(y, (g, h) => h.removeStream(b));
  }, addTrack: (b, y, g, h) => m(g.target, c.getTrackKey(b), g.metadata, h, (w) => w.addTrack(b, y), { s: y.id, t: b.id }), removeTrack: (b, y) => {
    e(y, (g, h) => h.removeTrack(b));
  }, replaceTrack: (b, y, g, h) => m(g.target, c.getTrackKey(y), g.metadata, h, (w) => w.replaceTrack(b, y), { t: b.id }), receiveStreamMeta: (b, y) => {
    if (!t(y)) return;
    const g = Ur(b);
    if (!g) return;
    const h = s(y).getRemoteStream(g.key, g.streamId);
    if (h == null ? void 0 : h.getTracks().length) {
      l(y, g.key, h, g.metadata);
      return;
    }
    f(i, y, g, "stream");
  }, receiveTrackMeta: (b, y) => {
    if (!t(y)) return;
    const g = Ur(b);
    if (!g) return;
    const h = s(y).getRemoteTrack(g.key, g.trackId);
    if (h && h.track.readyState !== "ended" && (!h.stream.getTracks || h.stream.getTracks().includes(h.track))) {
      d(y, g.key, h.track, h.stream, g.metadata);
      return;
    }
    f(a, y, g, "track");
  }, receiveRemoteStream: (b, y) => {
    if (!t(b)) return;
    const g = u(i[b], typeof y.id == "string" ? y.id : void 0, (h) => h.streamId);
    g && l(b, g.key, y, g.metadata);
  }, receiveRemoteTrack: (b, y, g) => {
    if (!t(b)) return;
    const h = a[b], w = typeof y.id == "string" ? y.id : void 0, R = typeof g.id == "string" ? g.id : void 0, O = h && w ? h.findIndex((N) => N.trackId === w) : -1, _ = O >= 0 ? h == null ? void 0 : h.splice(O, 1)[0] : u(h, R, (N) => N.streamId);
    _ && d(b, _.key, y, g, _.metadata);
  }, clearPeer: (b) => {
    delete i[b], delete a[b], delete o[b];
  }, onPeerStream: null, onPeerTrack: null };
  return v;
}, Fr = "beforeunload", la = 1e4, Oe = (e) => "@_" + e, ot = /* @__PURE__ */ new Set(), Hr = () => ot.forEach((e) => e()), ua = (e) => (ot.add(e), ot.size === 1 && addEventListener(Fr, Hr), () => {
  ot.delete(e), ot.size || removeEventListener(Fr, Hr);
});
var da = (e, t, n, { onPeerHandshake: r, onHandshakeError: i, handshakeTimeoutMs: a = la, maxReceiveBytes: o, isPassive: c = false, onBeforeLeave: s } = {}) => {
  const f = {}, u = {}, l = {}, d = { onPeerJoin: null, onPeerLeave: null };
  let m = oe, v = null;
  const b = (S, T) => (S ? Array.isArray(S) ? S : [S] : he(u)).flatMap((x) => {
    const z = u[x];
    return z ? [Promise.resolve(T(x, z))] : (console.warn(`${se}: no peer with id ${x} found`), []);
  }), y = (S, T, x) => {
    const z = f[S];
    !z || T && z !== T || (E.send("", S).catch(oe), L(S, z, x));
  }, g = (S, T) => y(S, void 0, T), h = fa({ onPeerError: g, iterate: (S, T) => b(S, (x, z) => T(x, z)), isActive: (S) => !!u[S], getSharedMediaPeer: (S) => f[S] ?? null }), w = ca({ onPeerError: g, ...o === void 0 ? {} : { maxReceiveBytes: o }, getPeer: (S, T) => (T ? f : u)[S], getPeerIds: (S) => he(S ? f : u), canReceiveFromPeer: (S, T) => M.canReceiveFromPeer(S, T) }), R = w.makeInternalAction, O = w.handleData, _ = w.makeAction, N = (S, T = q("peer disconnected")) => {
    var _a2;
    const x = xe(T, "peer disconnected");
    M.clearPeer(S, x), delete f[S], delete u[S], w.clearPeer(S, x), (_a2 = l[S]) == null ? void 0 : _a2.splice(0).forEach((z) => z.reject(x)), delete l[S], h.clearPeer(S);
  }, L = (S, T, x) => {
    var _a2;
    const z = f[S];
    if (!z || T && z !== T) return;
    const Y = !!u[S];
    N(S, x), z.destroy(), Y && ((_a2 = d.onPeerLeave) == null ? void 0 : _a2.call(d, S)), t(S);
  }, I = () => v ?? (v = (async () => {
    s == null ? void 0 : s();
    const S = new AbortController();
    E.send("", void 0, void 0, void 0, S.signal).catch(oe), await new Promise((T) => setTimeout(T, 99)), S.abort();
    try {
      Je(f).forEach(([T, x]) => {
        x.destroy(), N(T, q("room left"));
      });
    } finally {
      try {
        m();
      } finally {
        n();
      }
    }
  })()), U = R(Oe("ping")), j = R(Oe("pong")), J = R(Oe("signal")), p = R(Oe("stream"), { maxPayloadBytes: 65536 }), P = R(Oe("track"), { maxPayloadBytes: 65536 }), E = R(Oe("leave"), { sendToPending: true, receiveWhilePending: true }), k = R(Oe("hsdata"), { sendToPending: true, receiveWhilePending: true, maxPayloadBytes: 65536 }), B = R(Oe("hsready"), { sendToPending: true, receiveWhilePending: true }), M = Hi({ ...r === void 0 ? {} : { onPeerHandshake: r }, ...i === void 0 ? {} : { onHandshakeError: i }, handshakeTimeoutMs: a, sendHandshakeData: k.send, sendHandshakeReady: B.send, onActivate: (S, T) => {
    var _a2;
    u[S] = T, T.setHandlers({ signal: (x) => {
      u[S] === T && J.send(x, S).catch(oe);
    } }), (_a2 = d.onPeerJoin) == null ? void 0 : _a2.call(d, S);
  }, onFailure: (S, T, x) => y(S, T, x) });
  return U.onMessage((S, T) => {
    j.send("", T).catch(oe);
  }), j.onMessage((S, T) => {
    var _a2;
    const x = l[T];
    (_a2 = x == null ? void 0 : x.shift()) == null ? void 0 : _a2.resolve(), x && !x.length && delete l[T];
  }), J.onMessage((S, T) => {
    var _a2;
    (_a2 = u[T]) == null ? void 0 : _a2.signal(S);
  }), p.onMessage((S, T) => h.receiveStreamMeta(S, T)), P.onMessage((S, T) => h.receiveTrackMeta(S, T)), E.onMessage((S, T) => L(T, void 0, q("peer left room"))), k.onMessage((S, T, x) => M.receiveHandshakeData(S, T, x)), B.onMessage((S, T) => M.receiveHandshakeReady(T)), e((S, T) => {
    const x = f[T];
    if (x) {
      if (x === S) return;
      x.destroy(), N(T, q("peer replaced"));
    }
    f[T] = S, M.addPeer(T, S), S.setHandlers({ data: (z) => {
      f[T] === S && O(T, z);
    }, stream: (z) => h.receiveRemoteStream(T, z), track: (z, Y) => h.receiveRemoteTrack(T, z, Y), close: () => L(T, S, q("peer disconnected")), error: (z) => {
      console.error(`${se} peer error:`, z), L(T, S, z);
    } }), M.start(T, S);
  }), Mo && (m = ua(() => I().catch(oe))), { makeAction: _, leave: I, ping: async (S) => {
    if (!u[S]) throw q(`no active peer with id ${S}`);
    const T = Date.now();
    return await new Promise((x, z) => {
      const Y = l[S] ?? (l[S] = []), $ = () => {
        const ee = l[S];
        if (!ee) return;
        const ae = ee.indexOf(ne);
        ae > -1 && ee.splice(ae, 1), ee.length || delete l[S];
      }, ne = { resolve: () => {
        $(), x();
      }, reject: (ee) => {
        $(), z(ee);
      } };
      Y.push(ne), U.send("", S).catch((ee) => ne.reject(xe(ee, "peer disconnected")));
    }), Date.now() - T;
  }, isPassive: () => c, getPeers: () => _o(Je(u).map(([S, T]) => [S, T.connection])), addStream: (S, T = {}) => h.addStream(S, T, p.send), removeStream: (S, T = {}) => {
    h.removeStream(S, T.target);
  }, addTrack: (S, T, x = {}) => h.addTrack(S, T, x, P.send), removeTrack: (S, T = {}) => {
    h.removeTrack(S, T.target);
  }, replaceTrack: (S, T, x = {}) => h.replaceTrack(S, T, x, P.send), get onPeerJoin() {
    return d.onPeerJoin;
  }, set onPeerJoin(S) {
    d.onPeerJoin = S, S && he(u).forEach((T) => S(T));
  }, get onPeerLeave() {
    return d.onPeerLeave;
  }, set onPeerLeave(S) {
    d.onPeerLeave = S;
  }, get onPeerStream() {
    return h.onPeerStream;
  }, set onPeerStream(S) {
    h.onPeerStream = S;
  }, get onPeerTrack() {
    return h.onPeerTrack;
  }, set onPeerTrack(S) {
    h.onPeerTrack = S;
  } };
};
const Uo = 1, $o = 2, zr = (e, t) => {
  const n = Re(e), r = new Uint8Array(3 + n.byteLength + t.byteLength);
  return r[0] = Uo, r[1] = n.byteLength >>> 8 & 255, r[2] = n.byteLength & 255, r.set(n, 3), r.set(t, 3 + n.byteLength), r;
}, pa = (e, t) => {
  const n = Re(e), r = new Uint8Array(4 + n.byteLength);
  return r[0] = $o, r[1] = Number(t), r[2] = n.byteLength >>> 8 & 255, r[3] = n.byteLength & 255, r.set(n, 4), r;
}, jr = (e, t) => {
  if (e.byteLength < t + 2) return null;
  const n = (e[t] ?? 0) << 8 | (e[t + 1] ?? 0), r = t + 2 + n;
  return n <= 0 || n > 128 || e.byteLength < r ? null : { roomToken: Ue(e.subarray(t + 2, r)), headerSize: r };
}, ya = (e) => {
  const t = new Uint8Array(e);
  if (t.byteLength < 3 || t.byteLength > 16515) return null;
  if (t[0] === Uo) {
    const n = jr(t, 1);
    return n ? { type: "room", roomToken: n.roomToken, payload: t.subarray(n.headerSize).slice().buffer } : null;
  }
  if (t[0] === $o) {
    const n = jr(t, 2);
    return n ? { type: "presence", roomToken: n.roomToken, isPresent: t[1] === 1 } : null;
  }
  return null;
}, xt = (e) => {
  const { connection: t, channel: n } = e;
  return e.isDead || t.connectionState === "closed" || t.connectionState === "failed" || t.iceConnectionState === "closed" || t.iceConnectionState === "failed" || (n == null ? void 0 : n.readyState) === "closing" || (n == null ? void 0 : n.readyState) === "closed";
}, ha = (e) => {
  if (xt(e)) return "stale";
  const { channel: t } = e;
  return !t || t.readyState !== "open" ? "transient" : "live";
};
var ga = class {
  constructor() {
    __publicField(this, "rooms", /* @__PURE__ */ new Map());
    __publicField(this, "unclaimedDataTimers", /* @__PURE__ */ new WeakMap());
    __publicField(this, "pendingDataTimers", /* @__PURE__ */ new WeakMap());
    __publicField(this, "byApp", {});
  }
  registerRoom(e, t, n, r) {
    const i = this.rooms.get(e) ?? /* @__PURE__ */ new Map();
    if (i.has(t)) throw q("room membership already registered");
    const a = { token: null, tokenPromise: n, ...r };
    i.set(t, a), this.rooms.set(e, i);
    const o = () => {
      var _a2;
      return ((_a2 = this.rooms.get(e)) == null ? void 0 : _a2.get(t)) === a;
    }, c = (s) => {
      if (a.token) for (const f of be(this.byApp[e] ?? {})) try {
        this.sendRoomPresence(f, a.token, s);
      } catch {
      }
    };
    return n.then((s) => {
      if (o()) {
        a.token = s;
        for (const f of be(this.byApp[e] ?? {})) f.remoteRoomTokens.has(s) && this.attachRoom(e, t, a, f), this.discardUnboundData(f);
        o() && a.active && c(true);
      }
    }), { connect: (s, f, u) => {
      if (!o()) {
        f.destroy();
        return;
      }
      const l = this.reusable(e, s);
      l && l.peer !== f && f.destroy();
      const d = l ?? this.register(e, s, f, u);
      if (this.attachRoom(e, t, a, d), !l) for (const m of i.values()) m.active && m.token && this.sendRoomPresence(d, m.token, true);
    }, reuse: (s) => {
      if (!o()) return false;
      const f = this.reusable(e, s);
      return f ? (this.attachRoom(e, t, a, f), true) : false;
    }, setActive: (s) => {
      !o() || a.active === s || (a.active = s, c(s));
    }, leave: () => {
      var _a2, _b;
      if (o()) {
        i.delete(t), i.size || this.rooms.delete(e), c(false);
        for (const s of be(this.byApp[e] ?? {})) {
          const f = s.bindings[t];
          (_b = f == null ? void 0 : (_a2 = f.handlers).close) == null ? void 0 : _b.call(_a2), f == null ? void 0 : f.detach(), this.discardUnboundData(s);
        }
      }
    } };
  }
  owns(e, t, n) {
    var _a2, _b;
    return ((_b = (_a2 = this.byApp[e]) == null ? void 0 : _a2[t]) == null ? void 0 : _b.peer) === n;
  }
  reusable(e, t) {
    var _a2;
    const n = (_a2 = this.byApp[e]) == null ? void 0 : _a2[t];
    if (n && xt(n.peer)) {
      this.clear(e, t, { destroyPeer: true });
      return;
    }
    return n;
  }
  attachRoom(e, t, n, r) {
    var _a2;
    if (((_a2 = this.rooms.get(e)) == null ? void 0 : _a2.get(t)) !== n || r.isClosing || this.get(e, r.peerId) !== r) return;
    const { proxy: i, isNew: a } = this.bind(t, n.tokenPromise, r, { onDetach: () => n.onDetach(r.peerId, r.peer) });
    a && n.onPeer(i, r.peerId, r.peer);
  }
  get(e, t) {
    var _a2;
    return (_a2 = this.byApp[e]) == null ? void 0 : _a2[t];
  }
  sendRoomPresence(e, t, n) {
    e.isClosing || xt(e.peer) || e.peer.sendData(pa(t, n));
  }
  clear(e, t, { destroyPeer: n }) {
    const r = this.byApp[e], i = r == null ? void 0 : r[t];
    if (!i || i.isClosing) return;
    i.idleTimer = H(i.idleTimer), this.clearDataTimers(i), i.isClosing = true, n && !i.peer.isDead && i.peer.destroy();
    const a = be(i.bindings);
    i.bindings = {}, i.bindingsByToken = {}, i.controlRoomId = null, delete r[t], a.forEach((o) => {
      var _a2, _b;
      (_b = (_a2 = o.handlers).close) == null ? void 0 : _b.call(_a2), o.pendingData.length = 0, o.pendingSendData.length = 0, o.pendingTracks.length = 0;
    }), i.media.clearRemote(), i.pendingDataByToken.clear(), i.remoteRoomTokens.clear(), he(r).length === 0 && delete this.byApp[e];
  }
  register(e, t, n, r) {
    var _a2, _b;
    const i = (_a2 = this.byApp[e]) == null ? void 0 : _a2[t];
    if (i) {
      if (i.idleTimer = H(i.idleTimer), i.peer === n) return i;
      this.clear(e, t, { destroyPeer: true });
    }
    const a = { appId: e, peerId: t, peer: n, bindings: {}, bindingsByToken: {}, pendingDataByToken: /* @__PURE__ */ new Map(), remoteRoomTokens: /* @__PURE__ */ new Set(), idleTimer: null, controlRoomId: null, streamOwners: /* @__PURE__ */ new Map(), trackOwners: /* @__PURE__ */ new Map(), media: Sn(), idleMs: r, isClosing: false };
    ((_b = this.byApp)[e] ?? (_b[e] = {}))[t] = a;
    const o = () => {
      this.owns(e, t, n) && this.clear(e, t, { destroyPeer: true });
    };
    return n.setHandlers({ data: (c) => this.dispatchData(a, c), signal: (c) => this.dispatchSignal(a, c), close: o, error: (c) => {
      console.error(`${se} peer error:`, c), o();
    }, track: (c, s) => this.dispatchTrack(a, c, s) }), a;
  }
  bind(e, t, n, { onDetach: r }) {
    const i = n.bindings[e];
    if (i) return n.idleTimer = H(n.idleTimer), { proxy: i.proxy, isNew: false };
    const a = { roomId: e, roomToken: null, roomTokenPromise: t, handlers: {}, pendingData: [], pendingSendData: [], pendingTracks: [], detach: oe, proxy: {} }, o = () => {
      if (n.bindings[e] !== a) return;
      const s = he(n.bindings).length === 1 && (n.streamOwners.size > 0 || n.trackOwners.size > 0 || n.media.hasRemoteMedia());
      s || this.pruneRoomOwnership(n, e), delete n.bindings[e], a.roomToken && n.bindingsByToken[a.roomToken] === a && delete n.bindingsByToken[a.roomToken], n.controlRoomId === e && (n.controlRoomId = he(n.bindings)[0] ?? null), this.discardUnboundData(n), r(), s ? this.clear(n.appId, n.peerId, { destroyPeer: true }) : this.scheduleIdleTimer(n);
    }, c = { get connection() {
      return n.peer.connection;
    }, get channel() {
      return n.peer.channel;
    }, get isDead() {
      return n.peer.isDead;
    }, getOffer: (s) => n.peer.getOffer(s), signal: (s) => n.peer.signal(s), sendData: (s) => {
      if (!a.roomToken) {
        a.pendingSendData.push(s);
        return;
      }
      n.peer.sendData(zr(a.roomToken, s));
    }, destroy: () => o(), setHandlers: (s) => {
      Object.assign(a.handlers, s), this.flushBindingQueues(n, a);
    }, addStream: (s) => {
      const f = n.streamOwners.get(s) ?? /* @__PURE__ */ new Set(), u = f.size === 0;
      f.add(e), n.streamOwners.set(s, f), u && n.peer.addStream(s);
    }, removeStream: (s) => this.releaseStreamOwner(n, s, e), addTrack: (s, f) => {
      const u = n.trackOwners.get(s) ?? { stream: f, rooms: /* @__PURE__ */ new Set() }, l = u.rooms.size === 0;
      return u.stream = f, u.rooms.add(e), n.trackOwners.set(s, u), l ? n.peer.addTrack(s, f) : n.peer.connection.getSenders().find((d) => d.track === s) ?? n.peer.addTrack(s, f);
    }, removeTrack: (s) => this.releaseTrackOwner(n, s, e), replaceTrack: async (s, f) => {
      const u = n.trackOwners.get(s);
      if (await n.peer.replaceTrack(s, f), u && n.trackOwners.get(s) === u) {
        n.trackOwners.delete(s);
        const l = n.trackOwners.get(f) ?? { stream: u.stream, rooms: /* @__PURE__ */ new Set() };
        u.rooms.forEach((d) => l.rooms.add(d)), n.trackOwners.set(f, l);
      }
    }, __trysteroMedia: n.media };
    return a.proxy = c, a.detach = o, n.bindings[e] = a, n.controlRoomId ?? (n.controlRoomId = e), n.idleTimer = H(n.idleTimer), t.then((s) => {
      if (n.isClosing || n.bindings[e] !== a) return;
      a.roomToken = s, n.bindingsByToken[s] = a;
      const f = n.pendingDataByToken.get(s);
      (f == null ? void 0 : f.length) && (a.pendingData.push(...f), n.pendingDataByToken.delete(s));
      const u = a.pendingSendData.splice(0);
      xt(n.peer) || u.forEach((l) => {
        try {
          n.peer.sendData(zr(s, l));
        } catch {
        }
      }), this.flushBindingQueues(n, a), this.discardUnboundData(n);
    }), { proxy: c, isNew: true };
  }
  releaseStreamOwner(e, t, n) {
    const r = e.streamOwners.get(t);
    r && (r.delete(n), r.size === 0 && (e.streamOwners.delete(t), e.peer.removeStream(t)));
  }
  releaseTrackOwner(e, t, n) {
    const r = e.trackOwners.get(t);
    r && (r.rooms.delete(n), r.rooms.size === 0 && (e.trackOwners.delete(t), e.peer.removeTrack(t)));
  }
  pruneRoomOwnership(e, t) {
    e.streamOwners.forEach((n, r) => this.releaseStreamOwner(e, r, t)), e.trackOwners.forEach((n, r) => this.releaseTrackOwner(e, r, t));
  }
  scheduleIdleTimer(e) {
    e.isClosing || he(e.bindings).length > 0 || (e.idleTimer = H(e.idleTimer), e.idleTimer = setTimeout(() => {
      var _a2;
      const t = (_a2 = this.byApp[e.appId]) == null ? void 0 : _a2[e.peerId];
      !t || he(t.bindings).length > 0 || this.clear(e.appId, e.peerId, { destroyPeer: true });
    }, e.idleMs));
  }
  getSignalBinding(e) {
    if (e.controlRoomId) {
      const n = e.bindings[e.controlRoomId];
      if (n == null ? void 0 : n.handlers.signal) return n;
    }
    const t = be(e.bindings).find((n) => !!n.handlers.signal);
    return t ? (e.controlRoomId = t.roomId, t) : null;
  }
  flushBindingQueues(e, t) {
    const { handlers: n } = t;
    if (n.data && t.pendingData.length > 0) {
      const r = t.pendingData.splice(0);
      this.syncDataTimers(e), r.forEach((i) => {
        var _a2;
        return (_a2 = n.data) == null ? void 0 : _a2.call(n, i);
      });
    } else this.syncDataTimers(e);
    (n.track || n.stream) && t.pendingTracks.length && t.pendingTracks.splice(0).forEach(({ track: r, stream: i }) => {
      var _a2, _b;
      (_a2 = n.track) == null ? void 0 : _a2.call(n, r, i), (_b = n.stream) == null ? void 0 : _b.call(n, i);
    });
  }
  unclaimedBufferedFrameCount(e) {
    let t = 0;
    for (const n of e.pendingDataByToken.values()) t += n.length;
    return t;
  }
  boundBufferedFrameCount(e) {
    let t = 0;
    for (const n of be(e.bindings)) t += n.pendingData.length;
    return t;
  }
  bufferedFrameCount(e) {
    return this.unclaimedBufferedFrameCount(e) + this.boundBufferedFrameCount(e);
  }
  clearDataTimers(e) {
    H(this.unclaimedDataTimers.get(e)), this.unclaimedDataTimers.delete(e), H(this.pendingDataTimers.get(e)), this.pendingDataTimers.delete(e);
  }
  syncDataTimers(e) {
    if (e.isClosing) {
      this.clearDataTimers(e);
      return;
    }
    this.unclaimedBufferedFrameCount(e) === 0 ? (H(this.unclaimedDataTimers.get(e)), this.unclaimedDataTimers.delete(e)) : this.unclaimedDataTimers.has(e) || this.unclaimedDataTimers.set(e, setTimeout(() => {
      this.unclaimedDataTimers.delete(e), e.pendingDataByToken.clear();
    }, wn)), this.boundBufferedFrameCount(e) === 0 ? (H(this.pendingDataTimers.get(e)), this.pendingDataTimers.delete(e)) : this.pendingDataTimers.has(e) || this.pendingDataTimers.set(e, setTimeout(() => {
      this.pendingDataTimers.delete(e), this.boundBufferedFrameCount(e) > 0 && this.failData(e, "room data handler timed out");
    }, wn));
  }
  canBindRoomToken(e, t) {
    var _a2;
    return be(e.bindings).some((n) => !n.roomToken) || [...((_a2 = this.rooms.get(e.appId)) == null ? void 0 : _a2.values()) ?? []].some((n) => !n.token || n.token === t);
  }
  discardUnboundData(e) {
    for (const t of e.pendingDataByToken.keys()) this.canBindRoomToken(e, t) || e.pendingDataByToken.delete(t);
    this.syncDataTimers(e);
  }
  failData(e, t) {
    console.warn(`${se}: ${t}; disconnecting peer ${e.peerId}`), this.clear(e.appId, e.peerId, { destroyPeer: true });
  }
  dispatchData(e, t) {
    var _a2, _b;
    if (e.isClosing) return;
    const n = ya(t);
    if (!n) {
      this.failData(e, "invalid or incompatible room frame");
      return;
    }
    if (n.type === "presence") {
      if (n.isPresent) {
        if (!e.remoteRoomTokens.has(n.roomToken) && e.remoteRoomTokens.size >= 64) {
          this.failData(e, "too many advertised rooms");
          return;
        }
        e.remoteRoomTokens.add(n.roomToken);
        for (const [i, a] of this.rooms.get(e.appId) ?? []) a.token === n.roomToken && this.attachRoom(e.appId, i, a, e);
      } else {
        e.remoteRoomTokens.delete(n.roomToken), e.pendingDataByToken.delete(n.roomToken);
        const i = e.bindingsByToken[n.roomToken];
        (_b = i == null ? void 0 : (_a2 = i.handlers).close) == null ? void 0 : _b.call(_a2), i == null ? void 0 : i.detach(), this.syncDataTimers(e);
      }
      return;
    }
    const r = e.bindingsByToken[n.roomToken];
    if (!r) {
      if (!this.canBindRoomToken(e, n.roomToken) || this.bufferedFrameCount(e) >= 64) return;
      const i = e.pendingDataByToken.get(n.roomToken) ?? [];
      i.push(n.payload), e.pendingDataByToken.set(n.roomToken, i), this.syncDataTimers(e);
      return;
    }
    if (r.handlers.data) r.handlers.data(n.payload);
    else {
      if (this.bufferedFrameCount(e) >= 64) {
        this.failData(e, "too much data waiting for a room handler");
        return;
      }
      r.pendingData.push(n.payload), this.syncDataTimers(e);
    }
  }
  dispatchSignal(e, t) {
    var _a2, _b;
    const n = this.getSignalBinding(e);
    n ? (_b = (_a2 = n.handlers).signal) == null ? void 0 : _b.call(_a2, t) : t.type === "offer" && this.clear(e.appId, e.peerId, { destroyPeer: true });
  }
  dispatchTrack(e, t, n) {
    be(e.bindings).forEach((r) => {
      var _a2, _b, _c, _d;
      if (r.handlers.track || r.handlers.stream) {
        (_b = (_a2 = r.handlers).track) == null ? void 0 : _b.call(_a2, t, n), (_d = (_c = r.handlers).stream) == null ? void 0 : _d.call(_c, n);
        return;
      }
      r.pendingTracks.push({ track: t, stream: n });
    });
  }
};
const Wr = 23333, ma = 57333, va = 12, wa = 7533, Pa = 23333, ft = "offer-placeholder", Ta = ["offer", "answer", "candidate"], Fo = (e) => {
  if (typeof e == "string") try {
    const t = vt(e);
    return t && typeof t == "object" && !Array.isArray(t) ? t : null;
  } catch {
    return null;
  }
  return e && typeof e == "object" && !Array.isArray(e) ? e : null;
}, _e = (e, t) => typeof e[t] == "string" && e[t] ? e[t] : void 0, Ho = (e) => !!(e && typeof e == "object" && typeof e.signal == "function" && typeof e.destroy == "function" && typeof e.setHandlers == "function"), zo = (e, t = false) => Ta.some((n) => n in e && (typeof e[n] != "string" || e[n] === "")) || "peer" in e && (t || e.peer !== void 0 && !Ho(e.peer)), Sa = (e) => {
  const t = Fo(e);
  if (!t || zo(t, typeof e == "string")) return false;
  const n = _e(t, "peerId");
  return !!(n && n !== de && t.passive !== true && !_e(t, "answer") && !_e(t, "candidate"));
}, ba = (e, t, n, r, i, a) => {
  e.toCipher(t).then((o) => {
    e.isLeaving() || !a() || r(n, ie(i(o.sdp)));
  });
}, Aa = () => ({ offerPeer: null, offerId: null, offerSdp: null, offerInitPromise: null, offerAnswered: false, offerRelays: [], offerSignalRelays: [], offerSignalBacklog: [], offerRelayTimers: [], offerExpiryTimer: null, connectedPeer: null, connectedPeerUnhealthySinceMs: null, answeringExpiryTimer: null, answeringPeer: null, answerSent: false, answerReplay: null, connectionErrorReported: false }), Ra = (e) => {
  var _a2;
  return [...e.turnConfig ?? [], ...((_a2 = e.rtcConfig) == null ? void 0 : _a2.iceServers) ?? []].some(({ urls: t }) => (Array.isArray(t) ? t : [t]).some((n) => /^turns?:/i.test(n)));
}, ka = (e, t) => `could not connect to peer ${e} after exchanging SDP; ${Ra(t) ? "check that your TURN server URLs and credentials are reachable by both peers" : "configure TURN servers with turnConfig or rtcConfig.iceServers"}`, Wt = (e, t, n) => {
  var _a2;
  e.isLeaving() || t.connectedPeer || t.connectionErrorReported || (t.connectionErrorReported = true, (_a2 = e.onJoinError) == null ? void 0 : _a2.call(e, { error: ka(n, e.config), appId: e.appId, peerId: n, roomId: e.roomId }));
}, Kt = (e, t) => e[t] ?? (e[t] = Aa()), qt = /* @__PURE__ */ new WeakMap(), Wn = (e) => {
  qt.delete(e), e.answeringExpiryTimer = H(e.answeringExpiryTimer), e.answeringPeer = null, e.answerSent = false, e.answerReplay = null;
}, lt = (e, t) => {
  e.answeringPeer === t && (Wn(e), e.connectedPeer !== t && !t.isDead && t.destroy());
}, Ea = (e, t) => {
  e.answeringPeer && e.answeringPeer !== t && !e.answeringPeer.isDead && e.answeringPeer.destroy(), Wn(e), e.connectedPeer = t, e.connectedPeerUnhealthySinceMs = null;
}, Kr = (e, t) => {
  (e == null ? void 0 : e.connectedPeer) === t && (e.connectedPeer = null, e.connectedPeerUnhealthySinceMs = null);
}, bn = (e, t, n) => {
  e.connectedPeer && (e.connectedPeer.isDead || e.connectedPeer.destroy(), e.connectedPeer = null, e.connectedPeerUnhealthySinceMs = null);
}, Kn = (e, t) => {
  e.offerRelayTimers[t] = H(e.offerRelayTimers[t]), e.offerRelays[t] && (e.offerRelays[t] = void 0);
}, cn = (e, t) => {
  (e == null ? void 0 : e.offerRelays[t]) === ft && Kn(e, t);
}, He = (e) => {
  qt.delete(e), e.offerExpiryTimer = H(e.offerExpiryTimer), e.offerInitPromise = null, e.offerRelays.forEach((t, n) => Kn(e, n)), e.offerRelays = [], e.offerSignalRelays = [], e.offerRelayTimers = [], e.offerSignalBacklog = [], e.offerPeer && e.offerPeer !== e.connectedPeer && (e.offerPeer.isDead || e.offerPeer.destroy()), e.offerPeer = null, e.offerId = null, e.offerSdp = null, e.offerAnswered = false, e.connectionErrorReported = false;
}, Oa = (e, t, n, r) => {
  H(t.answeringExpiryTimer), t.answeringExpiryTimer = setTimeout(() => {
    const i = e.peerStates[n];
    !i || i.connectedPeer || i.answeringPeer !== r || (i.answerSent && Wt(e, i, n), lt(i, r), e.checkDeactivate());
  }, Pa);
}, An = (e, t, n, r = ma) => {
  H(t.offerExpiryTimer);
  const i = t.offerId;
  t.offerExpiryTimer = setTimeout(() => {
    const a = e.peerStates[n];
    !a || a.connectedPeer || a.offerId !== i || (a.offerAnswered && Wt(e, a, n), He(a), e.checkDeactivate());
  }, r);
}, jo = (e, t, n, r, i) => {
  const a = () => {
    t.offerPeer === r && !t.connectedPeer && (t.offerAnswered && Wt(e, t, n), He(t)), e.disconnectPeer(r, n), e.checkDeactivate();
  };
  r.setHandlers({ connect: () => e.connectPeer(r, n), ...i ? { signal: i } : {}, close: a, error: a });
}, Da = (e, t, n) => {
  if (t.offerPeer && t.offerId && t.offerSdp) return Promise.resolve({ peer: t.offerPeer, offer: t.offerSdp, offerId: t.offerId });
  if (t.offerInitPromise) return t.offerInitPromise;
  const i = (async () => {
    let a;
    try {
      a = (await e.offerManager.checkout(1, false, e.encryptOffer))[0];
    } catch (s) {
      if (e.isLeaving() || t.offerInitPromise !== i) return null;
      throw s;
    }
    if (!a) throw q("failed to allocate offer peer");
    const { peer: o, offer: c } = a;
    return e.isLeaving() || t.offerInitPromise !== i ? (o.destroy(), null) : (t.offerPeer = o, t.offerId = je(va), t.offerSdp = c, t.offerAnswered = false, t.connectionErrorReported = false, t.offerSignalBacklog = [], jo(e, t, n, o, (s) => {
      t.offerPeer === o && (t.offerSignalBacklog.push(s), t.offerSignalRelays.forEach((f) => f == null ? void 0 : f(s)));
    }), An(e, t, n), { peer: o, offer: c, offerId: t.offerId });
  })().finally(() => {
    t.offerInitPromise === i && (t.offerInitPromise = null);
  });
  return t.offerInitPromise = i;
}, Wo = async (e, t, n, r, i = 0) => {
  const a = e.peerStates[n];
  if (!a || a.connectedPeer || a.answeringPeer || a.offerAnswered) {
    cn(a, t);
    return;
  }
  if (a.offerRelays[t] !== ft) return;
  const [o, c] = await We([Ze(Ve(e.rootTopicPlaintext, n)), Da(e, a, n)]);
  if (!c) {
    cn(a, t);
    return;
  }
  if (e.isLeaving()) {
    He(a);
    return;
  }
  if (a.connectedPeer || a.answeringPeer || a.offerAnswered || a.offerRelays[t] !== ft) {
    cn(a, t);
    return;
  }
  a.offerRelayTimers[t] = H(a.offerRelayTimers[t]), a.offerRelays[t] = true, a.offerRelayTimers[t] = setTimeout(() => {
    if (i >= 2 || e.isLeaving() || a.connectedPeer || a.answeringPeer || a.offerAnswered || a.offerPeer !== c.peer || a.offerId !== c.offerId) {
      Ca(e, n, t);
      return;
    }
    a.offerRelays[t] = ft, Wo(e, t, n, r, i + 1);
  }, i === 0 && e.announceIntervals[t] === void 0 ? 2e3 : (e.announceIntervals[t] ?? e.announceIntervalMs) * 0.9);
  let s = false;
  a.offerSignalRelays[t] = (f) => {
    s && (e.isLeaving() || a.connectedPeer || a.offerPeer !== c.peer || a.offerId !== c.offerId || f.type !== "candidate" || ba(e, f, o, r, (u) => ({ peerId: de, offerId: c.offerId, candidate: u, ...e.isPassive ? { passive: true } : {} }), () => !a.connectedPeer && a.offerPeer === c.peer && a.offerId === c.offerId));
  }, r(o, ie({ peerId: de, offerId: c.offerId, offer: c.offer, ...e.isPassive ? { passive: true } : {} })), s = true, a.offerSignalBacklog.forEach((f) => {
    var _a2, _b;
    return (_b = (_a2 = a.offerSignalRelays)[t]) == null ? void 0 : _b.call(_a2, f);
  });
}, Ma = async (e, t, n, r, i, a) => {
  var _a2;
  const o = Kt(e.peerStates, n);
  if (o.answeringPeer || o.offerAnswered) {
    const y = o.answerReplay, g = y == null ? void 0 : y.lastSentAt[t];
    if (o.answeringPeer && !o.answeringPeer.isDead && y && y.offer === r && y.offerId === i && (g === void 0 || Date.now() - g >= 1e3)) {
      y.lastSentAt[t] = Date.now();
      const h = await Ze(Ve(e.rootTopicPlaintext, n));
      if (!e.isLeaving() && o.answerReplay === y && !o.connectedPeer) {
        const w = (R) => a(h, R);
        y.relays[t] = w, y.messages.forEach(w);
      }
    }
    return;
  }
  const c = !!(o.offerPeer || o.offerRelays.some(Boolean));
  if (c && de < n) return;
  c && He(o);
  const s = e.initPeer(false, e.config), f = { offer: r, offerId: i, messages: [], lastSentAt: [], relays: [] };
  f.lastSentAt[t] = Date.now(), o.answeringPeer = s, o.answerSent = false, o.answerReplay = f, o.connectionErrorReported = false, Oa(e, o, n, s);
  const u = () => {
    o.answeringPeer === s && !o.connectedPeer && o.answerSent && Wt(e, o, n), lt(o, s), e.disconnectPeer(s, n), e.checkDeactivate();
  };
  s.setHandlers({ connect: () => e.connectPeer(s, n), close: u, error: u });
  let l;
  try {
    l = await e.toPlain({ type: "offer", sdp: r });
  } catch {
    lt(o, s), (_a2 = e.onJoinError) == null ? void 0 : _a2.call(e, { error: "incorrect room password when decrypting offer", appId: e.appId, peerId: n, roomId: e.roomId });
    return;
  }
  if (s.isDead) {
    lt(o, s);
    return;
  }
  const d = await Ze(Ve(e.rootTopicPlaintext, n));
  if (e.isLeaving() || o.answerReplay !== f) return;
  f.relays[t] = (y) => a(d, y);
  const m = [];
  let v = false;
  const b = (y) => {
    e.toCipher(y).then((g) => {
      if (e.isLeaving() || o.answeringPeer !== s || s.isDead) return;
      const h = { peerId: de };
      y.type === "answer" ? (o.answerSent = true, h.answer = g.sdp) : h.candidate = g.sdp, i && (h.offerId = i), e.isPassive && (h.passive = true);
      const w = ie(h), R = Date.now();
      f.messages.push(w), f.relays.forEach((O, _) => {
        O && (f.lastSentAt[_] = R, O(w));
      }), y.type === "answer" && !v && (v = true, m.splice(0).forEach(b));
    });
  };
  s.setHandlers({ signal: (y) => {
    if (!(e.isLeaving() || o.answeringPeer !== s || s.isDead) && !(y.type !== "answer" && y.type !== "candidate")) {
      if (y.type === "candidate" && !v) {
        m.push(y);
        return;
      }
      b(y);
    }
  } }), await s.signal(l);
}, _a = async (e, t, n, r, i) => {
  var _a2;
  let a;
  try {
    a = await e.toPlain({ type: xo, sdp: n });
  } catch {
    return;
  }
  const o = e.peerStates[t], c = r && (o == null ? void 0 : o.offerPeer) && o.offerId === r ? o.offerPeer : null, s = !r || ((_a2 = o == null ? void 0 : o.answerReplay) == null ? void 0 : _a2.offerId) === r ? o == null ? void 0 : o.answeringPeer : null, f = !r && (o == null ? void 0 : o.offerPeer) ? o.offerPeer : null, u = i && !i.isDead ? i : c ?? s ?? f;
  u && !u.isDead && u.signal(a);
}, xa = async (e, t, n, r, i) => {
  var _a2;
  let a;
  try {
    a = await e.toPlain({ type: "answer", sdp: n });
  } catch {
    i && (e.offerManager.reclaimLeased(i), i.isDead || i.destroy()), (_a2 = e.onJoinError) == null ? void 0 : _a2.call(e, { error: "incorrect room password when decrypting answer", appId: e.appId, peerId: t, roomId: e.roomId });
    return;
  }
  if (i) {
    const o = Kt(e.peerStates, t);
    if (e.offerManager.claimLeased(i), o.connectedPeer || o.offerAnswered || o.answeringPeer && !o.answeringPeer.isDead && de > t) {
      i.destroy();
      return;
    }
    if (o.answeringPeer) {
      const c = o.answeringPeer;
      lt(o, c);
    }
    He(o), o.offerPeer = i, o.offerId = r ?? null, o.offerAnswered = true, An(e, o, t, Wr), jo(e, o, t, i), i.signal(a);
  } else {
    const o = e.peerStates[t];
    if (!o || !o.offerPeer || o.offerAnswered || r && o.offerId && r !== o.offerId || o.offerPeer.isDead) return;
    o.offerAnswered = true, An(e, o, t, Wr), o.offerPeer.signal(a);
  }
}, Ca = (e, t, n) => {
  const r = e.peerStates[t];
  !r || r.connectedPeer || r.offerRelays[n] && (Kn(r, n), e.checkDeactivate());
}, La = (e) => (t) => async (n, r, i) => {
  var _a2;
  if (e.isLeaving()) return;
  const a = Fo(r);
  if (!a || zo(a, typeof r == "string")) return;
  const o = _e(a, "peerId") ?? "", c = _e(a, "offer"), s = _e(a, "answer"), f = _e(a, "candidate"), u = _e(a, "offerId"), l = Ho(a.peer) ? a.peer : void 0, d = a.passive === true;
  if (!o || o === de) return;
  const [m, v] = await We([e.rootTopicP, e.selfTopicP]);
  if (e.isLeaving() || n !== m && n !== v || e.isPassive && d || (e.isPassive && !e.isActive && !s && !f && (e.isActive = true, (_a2 = e.requeueAnnounce) == null ? void 0 : _a2.call(e)), e.isPassive && !e.isActive)) return;
  const b = e.peerStates[o], y = b == null ? void 0 : b.connectedPeer;
  if (y && b) {
    const g = ha(y);
    if (g === "live") {
      b.connectedPeerUnhealthySinceMs = null;
      return;
    }
    if (g === "stale") bn(b);
    else {
      const h = Date.now(), w = b.connectedPeerUnhealthySinceMs ?? h;
      if (b.connectedPeerUnhealthySinceMs = w, h - w < wa) return;
      bn(b);
    }
  }
  if (!e.reusePeer(o)) {
    if (o && !c && !s && !f) {
      const g = Kt(e.peerStates, o), h = de < o;
      if (g.answeringPeer || g.connectedPeer || g.offerAnswered) return;
      if (!h && !g.offerPeer) {
        let w = qt.get(g);
        w || (w = [], qt.set(g, w));
        const R = w[t];
        if (R !== void 0 && Date.now() - R < 1e3) return;
        w[t] = Date.now();
        const O = await Ze(Ve(e.rootTopicPlaintext, o));
        !e.isLeaving() && !g.connectedPeer && !g.answeringPeer && !g.offerAnswered && i(O, ie({ peerId: de }));
        return;
      }
      return g.offerRelays[t] ? void 0 : (g.offerRelays[t] = ft, Wo(e, t, o, i));
    }
    if (c) return Ma(e, t, o, c, u, i);
    if (f) return _a(e, o, f, u, l);
    if (s) return xa(e, o, s, u, l);
  }
}, bt = 5333, Ba = [233, 533, 1333], Xr = 7533, Na = 123333;
var Ia = ({ init: e, subscribe: t, announce: n, deactivate: r }) => {
  const i = {}, a = {}, o = new ga(), c = () => be(i).some((l) => he(l).length > 0);
  let s = false, f = [], u = oe;
  return (l, d, m) => {
    var _a2, _b, _c, _d;
    if (!l) throw q("requires a config map as the first argument");
    if (m && typeof m != "object") throw q("third argument must be a callbacks object");
    const { appId: v } = l, b = m == null ? void 0 : m.onJoinError, y = m == null ? void 0 : m.onPeerHandshake, g = m == null ? void 0 : m.handshakeTimeoutMs;
    if (!v) throw q("config map is missing appId field");
    if (!d) throw q("roomId argument required");
    if (l.maxReceiveBytes !== void 0 && (!Number.isSafeInteger(l.maxReceiveBytes) || l.maxReceiveBytes <= 0)) throw q("maxReceiveBytes must be a positive safe integer");
    if (g !== void 0 && (!Number.isFinite(g) || g <= 0)) throw q("handshakeTimeoutMs must be a positive number");
    if ((_a2 = i[v]) == null ? void 0 : _a2[d]) return i[v][d];
    (_c = (_b = a[v]) == null ? void 0 : _b[d]) == null ? void 0 : _c.call(_b, true);
    const h = Ve(se, v, d), w = Ze(h), R = Ze(Ve(h, de)), O = Li(l.password ?? "", v, d), _ = Bi(v, d), N = l._test_only_sharedPeerIdleMs ?? Na;
    let L = false;
    const I = (W) => async (K) => ({ type: K.type, sdp: await W(O, K.sdp) }), U = I(Ii), j = I(Ni), J = () => Or(true, l);
    let p = false;
    const P = new Ui(J), E = async (W) => {
      const K = await W.getOffer();
      if (!K || K.type !== "offer") throw q("failed to get offer for peer");
      return (await j(K)).sdp;
    }, k = (W, K) => {
      ve.connect(K, W, N);
    };
    let B = false;
    const M = () => {
      T || !p || B || (B = true, queueMicrotask(() => {
        var _a3;
        B = false, L || ((_a3 = $.requeueAnnounce) == null ? void 0 : _a3.call($));
      }));
    }, S = (W, K) => {
      if (L) return;
      const V = $.peerStates[K];
      (V == null ? void 0 : V.connectedPeer) === W && (bn(V), Y(), M());
    }, T = !!l.passive;
    let x, z = oe;
    const Y = () => {
      if (!T || !$.isActive) return;
      let W = false;
      Je($.peerStates).forEach(([K, V]) => {
        V.connectedPeer || V.answeringPeer || V.offerInitPromise || V.offerPeer || V.offerRelays.some(Boolean) ? W = true : delete $.peerStates[K];
      }), W || ($.isActive = false, x = H(x), fe.forEach(H), fe.length = 0, z(), ve.setActive(false));
    }, $ = { appId: v, roomId: d, config: l, peerStates: {}, rootTopicPlaintext: h, rootTopicP: w, selfTopicP: R, toPlain: U, toCipher: j, isLeaving: () => L, isPassive: T, isActive: !T, onJoinError: b, offerManager: P, encryptOffer: E, initPeer: Or, connectPeer: k, disconnectPeer: S, reusePeer: (W) => ve.reuse(W), checkDeactivate: Y, announceIntervals: [], announceIntervalMs: bt }, ne = { config: l, appId: v, roomId: d, isPassive: T }, ee = La($);
    if (!s) {
      const W = e(l);
      f = (Array.isArray(W) ? W : [W]).map((K) => Promise.resolve(K)), s = true, u = ((_d = l.relayConfig) == null ? void 0 : _d.manualReconnection) ? oe : Mi();
    }
    const ae = f.map(() => bt), we = f.map(() => 0), Pe = f.map(() => 0), fe = [], A = f.map(async (W, K) => t(await W, await w, await R, ee(K), (V) => P.getOffers(V, E), ne));
    We([w, R]).then(([W, K]) => {
      if (L) return;
      const V = async (pe, re) => {
        var _a3;
        if (L || T && !$.isActive) return;
        const Be = T ? { passive: true } : void 0;
        let ye;
        try {
          ye = await n(pe, W, K, Be, ne), Pe[re] = 0;
        } catch (cs) {
          if (L) return;
          const Qn = Pe[re] ?? 0;
          Qn === 0 && ((_a3 = l.relayConfig) == null ? void 0 : _a3.warnOnRelayFailure) !== false && console.warn(`${se}: announce failed - ${Ge(cs, "")}`), Pe[re] = Qn + 1;
        }
        if (L || T && !$.isActive || ye && typeof ye != "number" && "stopAnnouncing" in ye) return;
        typeof ye == "number" ? ($.announceIntervals[re] = ye, ae[re] = ye) : ye && (ae[re] = ye.nextAnnounceMs, p || (p = ye.reannounceOnDisconnect === true));
        const Xt = we[re] ?? 0;
        we[re] = Xt + 1;
        const Vn = ae[re] ?? bt, Zn = Ba[Xt] ?? (Xt === 3 && typeof ye == "object" ? bt : void 0);
        fe[re] = setTimeout(() => {
          V(pe, re);
        }, typeof Zn == "number" ? Math.min(Vn, Zn) : Vn);
      };
      z = () => {
        r && f.forEach(async (pe) => {
          const re = await pe;
          L || r(re, W, K, ne);
        });
      }, $.requeueAnnounce = () => {
        fe.forEach(H), fe.length = 0, x = H(x), ve.setActive(true), x = setTimeout(Y, Xr), f.forEach(async (pe, re) => {
          const Be = await pe;
          Be && !L && (we[re] = 0, V(Be, re));
        });
      }, A.forEach(async (pe, re) => {
        if (await pe, L) return;
        const Be = await f[re];
        Be && !L && (!T || $.isActive) && V(Be, re);
      });
    });
    let D = oe;
    const F = l.password ?? "", { compose: X } = $i(F, v, d), te = X(y), Te = () => {
      var _a3;
      ((_a3 = i[v]) == null ? void 0 : _a3[d]) === Z && (delete i[v][d], he(i[v]).length === 0 && delete i[v]);
    }, Ee = () => {
      var _a3;
      ((_a3 = a[v]) == null ? void 0 : _a3[d]) === Se && (delete a[v][d], he(a[v]).length === 0 && delete a[v]);
    }, Se = (W = false) => {
      L || (L = true, D = oe, Te(), Ee(), ve.leave(), Je($.peerStates).forEach(([K, V]) => {
        V.connectedPeer && !V.connectedPeer.isDead && (o.owns(v, K, V.connectedPeer) || V.connectedPeer.destroy()), V.answeringPeer && !V.answeringPeer.isDead && V.answeringPeer.destroy(), He(V), Wn(V), V.connectedPeer = null, V.connectedPeerUnhealthySinceMs = null;
      }), fe.forEach(H), x = H(x), A.forEach(async (K) => {
        (await K)();
      }), P.destroy(), !(W || c()) && (s = false, u()));
    }, G = { ...l.maxReceiveBytes === void 0 ? {} : { maxReceiveBytes: l.maxReceiveBytes }, ...te ? { onPeerHandshake: te } : {}, ...g === void 0 ? {} : { handshakeTimeoutMs: g }, isPassive: T, onBeforeLeave: () => {
      Te(), (a[v] ?? (a[v] = {}))[d] = Se;
    }, onHandshakeError: (W, K) => b == null ? void 0 : b({ error: K.replace(/^handshake failed: /, ""), appId: v, peerId: W, roomId: d }) };
    i[v] ?? (i[v] = {});
    const Z = da((W) => D = W, (W) => {
      if (L) return;
      const K = $.peerStates[W];
      (K == null ? void 0 : K.connectedPeer) && Kr(K, K.connectedPeer), Y(), M();
    }, () => Se(false), G), ve = o.registerRoom(v, d, _, { active: !T || $.isActive, onPeer: (W, K, V) => {
      const pe = Kt($.peerStates, K);
      Ea(pe, V), T && !$.isActive && ($.isActive = true, ve.setActive(true), $.requeueAnnounce ? $.requeueAnnounce() : (x = H(x), x = setTimeout(Y, Xr))), D(W, K), He(pe);
    }, onDetach: (W, K) => {
      Kr($.peerStates[W], K), Y();
    } });
    return i[v][d] = Z;
  };
};
const qa = 6e4, fn = (e) => {
  if (!e) throw q("topic strategy missing room context");
  return e;
}, tt = (e, t, n, r) => ({ kind: t, appId: e.appId, roomId: e.roomId, rootTopic: n, selfTopic: r });
var Ua = ({ steadyAnnounceIntervalMs: e = qa, reannounceOnDisconnect: t = true, init: n, subscribeTopic: r, publishTopic: i, unpublishTopic: a }) => Ia({ init: n, subscribe: async (o, c, s, f, u, l) => {
  const d = fn(l), m = (O, _) => void i(o, O, _, tt(d, "signal", c, s));
  let v = null, b = false, y = null, g = false;
  const h = (O) => {
    b || (b = true, O());
  }, w = () => (y || (y = Promise.resolve(r(o, s, (O, _) => {
    g || f(O, _, m);
  }, tt(d, "self", c, s))).then((O) => {
    v = O, g && h(O);
  })), y);
  d.isPassive || await w();
  const R = await r(o, c, async (O, _) => {
    g || (d.isPassive && Sa(_) && await w(), g || await f(O, _, m));
  }, tt(d, "root", c, s));
  return () => {
    g = true, v && h(v), R();
  };
}, announce: async (o, c, s, f, u) => {
  const l = fn(u), d = await i(o, c, ie({ peerId: de, ...f }), tt(l, "announce", c, s));
  return typeof d == "number" || d !== void 0 && "stopAnnouncing" in d ? d : { nextAnnounceMs: (d == null ? void 0 : d.nextAnnounceMs) ?? e, reannounceOnDisconnect: (d == null ? void 0 : d.reannounceOnDisconnect) ?? t };
}, ...a ? { deactivate: (o, c, s, f) => {
  const u = fn(f);
  return a(o, c, tt(u, "announce", c, s));
} } : {} });
const Ko = Di((e) => e.socket), $a = 5, Xo = "x", Yo = "EVENT", { secretKey: Fa, publicKey: Ha } = Do.keygen(), za = dt(Ha), ja = {}, Yr = 250, qe = 6e4, Wa = 9e5, Xn = 5333, pt = /* @__PURE__ */ new WeakMap(), Ut = Ko.scoped(), Rn = /* @__PURE__ */ new WeakSet(), Ka = (e) => {
  const t = pt.get(e), n = Math.min((t == null ? void 0 : t.delayMs) ? Math.max(qe, t.delayMs * 2) : qe, Wa);
  return pt.set(e, { delayMs: n, untilMs: Date.now() + n }), n;
}, yt = (e) => {
  const t = pt.get(e);
  if (!t) return 0;
  const n = t.untilMs - Date.now();
  return n > 0 ? n : 0;
}, At = (e) => ({ nextAnnounceMs: e }), Xa = { stopAnnouncing: true }, Ya = (e) => {
  var _a2;
  return Rn.has(e) ? false : (Rn.add(e), pt.delete(e), (_a2 = e.close) == null ? void 0 : _a2.call(e), true);
}, Jo = () => Math.floor(Date.now() / 1e3), Go = (e) => ja[e] ?? (ja[e] = Co(e, 1e4) + 2e4), Ja = async (e, t) => {
  const n = { kind: Go(e), tags: [[Xo, e]], created_at: Jo(), content: t, pubkey: za }, r = await jt("SHA-256", ie([0, n.pubkey, n.created_at, n.kind, n.tags, n.content]));
  return ie([Yo, { ...n, id: dt(r), sig: dt(await Do.signAsync(r, Fa)) }]);
}, me = {}, Vo = (e) => {
  e.flushWaiters.forEach((t) => t()), e.flushWaiters.clear();
}, Ga = (e, t, n) => {
  var _a2;
  const r = me[_a2 = e.url] ?? (me[_a2] = { subIds: [], topics: /* @__PURE__ */ new Map(), updateTimer: null, flushWaiters: /* @__PURE__ */ new Set(), retryTimer: null, retryMs: Xn, pendingEose: /* @__PURE__ */ new Set(), requestedAt: 0 });
  r.topics.set(t, n), Zo(e, r);
}, Va = (e, t) => {
  const n = me[e.url];
  n && (n.topics.delete(t), delete Ut.forRelay(e)[t], n.topics.size === 0 ? (n.retryTimer !== null && clearTimeout(n.retryTimer), n.updateTimer !== null && (clearTimeout(n.updateTimer), n.updateTimer = null), Vo(n), n.subIds.forEach((r) => e.send(ie(["CLOSE", r]))), delete me[e.url]) : Zo(e, n));
}, Zo = (e, t) => {
  t.updateTimer === null && (t.updateTimer = setTimeout(() => {
    t.updateTimer = null;
    try {
      Qo(e);
    } finally {
      Vo(t);
    }
  }, 0));
}, Za = (e) => {
  const t = me[e.url];
  return !t || t.updateTimer === null ? Promise.resolve() : new Promise((n) => t.flushWaiters.add(n));
}, Qo = (e) => {
  const t = me[e.url];
  if (!t || t.topics.size === 0) return;
  const n = [...t.topics.keys()], r = [], i = Jo();
  for (let a = 0; a < n.length; a += Yr) r.push(n.slice(a, a + Yr));
  for (; t.subIds.length > r.length; ) {
    const a = t.subIds.pop();
    a && e.send(ie(["CLOSE", a]));
  }
  t.pendingEose.clear(), t.requestedAt = Date.now(), r.forEach((a, o) => {
    var _a2;
    const c = (_a2 = t.subIds)[o] ?? (_a2[o] = je(64));
    t.pendingEose.add(c), e.send(ie(["REQ", c, { kinds: [...new Set(a.map(Go))], since: i, "#x": a }]));
  });
}, es = (e) => {
  const t = me[e.url];
  if (t && t.topics.size > 0 && !e.isClosed) {
    if (yt(e) > 0) {
      rs(e, true);
      return;
    }
    t.retryTimer !== null && (clearTimeout(t.retryTimer), t.retryTimer = null), Qo(e), ts(e);
  }
}, ts = (e) => {
  Object.entries(Ut.forRelay(e)).forEach(([t, n]) => {
    ns(e, t, n, true);
  });
}, ns = async (e, t, n, r) => {
  var _a2;
  if (Rn.has(e) || e.isClosed) return r ? Xa : void 0;
  const i = yt(e);
  if (i > 0 || e.socket.readyState !== 1) return r ? At(Math.max(qe, i)) : void 0;
  const a = await Ja(t, r ? ie({ ...vt(n), nonce: je(8) }) : n);
  if (r && !((_a2 = me[e.url]) == null ? void 0 : _a2.topics.has(t))) return At(qe);
  if (yt(e) > 0 || e.isClosed || e.socket.readyState !== 1) return r ? At(qe) : void 0;
  if (e.send(a), r) return At(qe);
}, rs = (e, t) => {
  const n = me[e.url];
  if (!n || n.retryTimer !== null && !t) return;
  n.retryTimer !== null && clearTimeout(n.retryTimer);
  const r = t ? yt(e) : n.retryMs;
  n.retryMs = Math.min(n.retryMs * 2, qe), n.retryTimer = setTimeout(() => {
    n.retryTimer = null, es(e);
  }, Math.max(r, Xn));
}, kc = Ua({ init: (e) => Ai(e, Qa, $a, true).map((t) => {
  const n = Ko.register(t, () => Oi(t, (r) => {
    var _a2, _b;
    const [i, a, o, c] = vt(r);
    if (i !== Yo) {
      const s = `${se}: relay failure from ${n.url} - `, f = i === "CLOSED" && typeof o == "string" ? o : c, u = i === "OK" && o === false, l = (u || i === "CLOSED") && (f == null ? void 0 : f.startsWith("rate-limited:")), d = u && (f == null ? void 0 : f.startsWith("duplicate:")), m = f && /^(blocked|restricted|auth-required|pow):/.test(f);
      if (i === "OK" && o === true && yt(n) === 0 && pt.delete(n), (u || i === "CLOSED") && m && !Ya(n)) return;
      if (l) Ka(n);
      else if (i === "EOSE") {
        const v = me[n.url];
        (v == null ? void 0 : v.pendingEose.delete(a)) && v.pendingEose.size === 0 && (v.retryMs = Xn, v.retryTimer !== null && (clearTimeout(v.retryTimer), v.retryTimer = null), Date.now() - v.requestedAt >= 1e3 && ts(n));
      }
      i === "CLOSED" && !m && rs(n, !!l), !d && ((_a2 = e.relayConfig) == null ? void 0 : _a2.warnOnRelayFailure) !== false && (i === "NOTICE" ? console.warn(s + a) : (u || i === "CLOSED") && console.warn(s + f));
      return;
    }
    if (o && typeof o == "object" && "content" in o) {
      const s = me[n.url];
      if ((s == null ? void 0 : s.subIds.includes(a)) && o.tags) {
        const f = o.tags.find((u) => u[0] === Xo);
        (f == null ? void 0 : f[1]) && ((_b = s.topics.get(f[1])) == null ? void 0 : _b(f[1], o.content));
      }
    }
  }, () => es(n)));
  return n.ready;
}), subscribeTopic: (e, t, n, r) => {
  const i = (o, c) => void n(o, c);
  Ga(e, t, i);
  const a = () => {
    var _a2;
    ((_a2 = me[e.url]) == null ? void 0 : _a2.topics.get(t)) === i && Va(e, t);
  };
  return r.kind === "root" ? Za(e).then(() => a) : a;
}, publishTopic: (e, t, n, { kind: r }) => {
  const i = typeof n == "string" ? n : ie(n);
  return r === "announce" && (Ut.forRelay(e)[t] = i), ns(e, t, i, r === "announce");
}, unpublishTopic: (e, t) => {
  delete Ut.forRelay(e)[t];
} }), Qa = ["0x-nostr-relay.fly.dev", "bendernostur.duckdns.org:8443", "cdn.satellite.earth", "nos.lol", "nostr.chaima.info", "nostr.christiansass.de", "nostr.rblb.it", "nostr.red5d.dev", "nostr.robosats.org", "nostr.stakey.net", "nostrcity-club.fly.dev", "relay-dev.gulugulu.moe", "relay.aarpia.com", "relay.agentry.com", "relay.bitmacro.cloud", "relay.bullishbounty.com", "relay.degmods.com", "relay.flashapp.me", "relay.grigic.org", "relay.hackshed.dev", "relay.kaleidoswap.com", "relay.layer.systems", "relay.nostr.blockhenge.com", "relay.nostr.dev.br", "relay.nostrmap.net", "relay.novospes.com", "relay.piazza.today", "relay.routstr.com", "testr.nymble.world"].map((e) => "wss://" + e);
/*!
* https://github.com/Starcounter-Jack/JSON-Patch
* (c) 2017-2022 Joachim Wester
* MIT licensed
*/
var ec = /* @__PURE__ */ (function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a]);
    }, e(t, n);
  };
  return function(t, n) {
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
})(), tc = Object.prototype.hasOwnProperty;
function kn(e, t) {
  return tc.call(e, t);
}
function En(e) {
  if (Array.isArray(e)) {
    for (var t = new Array(e.length), n = 0; n < t.length; n++) t[n] = "" + n;
    return t;
  }
  if (Object.keys) return Object.keys(e);
  var r = [];
  for (var i in e) kn(e, i) && r.push(i);
  return r;
}
function ce(e) {
  switch (typeof e) {
    case "object":
      return JSON.parse(JSON.stringify(e));
    case "undefined":
      return null;
    default:
      return e;
  }
}
function On(e) {
  for (var t = 0, n = e.length, r; t < n; ) {
    if (r = e.charCodeAt(t), r >= 48 && r <= 57) {
      t++;
      continue;
    }
    return false;
  }
  return true;
}
function Ne(e) {
  return e.indexOf("/") === -1 && e.indexOf("~") === -1 ? e : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function os(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
function Dn(e) {
  if (e === void 0) return true;
  if (e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = e.length; t < n; t++) if (Dn(e[t])) return true;
    } else if (typeof e == "object") {
      for (var r = En(e), i = r.length, a = 0; a < i; a++) if (Dn(e[r[a]])) return true;
    }
  }
  return false;
}
function Jr(e, t) {
  var n = [e];
  for (var r in t) {
    var i = typeof t[r] == "object" ? JSON.stringify(t[r], null, 2) : t[r];
    typeof i < "u" && n.push(r + ": " + i);
  }
  return n.join(`
`);
}
var ss = (function(e) {
  ec(t, e);
  function t(n, r, i, a, o) {
    var c = this.constructor, s = e.call(this, Jr(n, { name: r, index: i, operation: a, tree: o })) || this;
    return s.name = r, s.index = i, s.operation = a, s.tree = o, Object.setPrototypeOf(s, c.prototype), s.message = Jr(n, { name: r, index: i, operation: a, tree: o }), s;
  }
  return t;
})(Error), Q = ss, nc = ce, Xe = { add: function(e, t, n) {
  return e[t] = this.value, { newDocument: n };
}, remove: function(e, t, n) {
  var r = e[t];
  return delete e[t], { newDocument: n, removed: r };
}, replace: function(e, t, n) {
  var r = e[t];
  return e[t] = this.value, { newDocument: n, removed: r };
}, move: function(e, t, n) {
  var r = $t(n, this.path);
  r && (r = ce(r));
  var i = $e(n, { op: "remove", path: this.from }).removed;
  return $e(n, { op: "add", path: this.path, value: i }), { newDocument: n, removed: r };
}, copy: function(e, t, n) {
  var r = $t(n, this.from);
  return $e(n, { op: "add", path: this.path, value: ce(r) }), { newDocument: n };
}, test: function(e, t, n) {
  return { newDocument: n, test: ht(e[t], this.value) };
}, _get: function(e, t, n) {
  return this.value = e[t], { newDocument: n };
} }, rc = { add: function(e, t, n) {
  return On(t) ? e.splice(t, 0, this.value) : e[t] = this.value, { newDocument: n, index: t };
}, remove: function(e, t, n) {
  var r = e.splice(t, 1);
  return { newDocument: n, removed: r[0] };
}, replace: function(e, t, n) {
  var r = e[t];
  return e[t] = this.value, { newDocument: n, removed: r };
}, move: Xe.move, copy: Xe.copy, test: Xe.test, _get: Xe._get };
function $t(e, t) {
  if (t == "") return e;
  var n = { op: "_get", path: t };
  return $e(e, n), n.value;
}
function $e(e, t, n, r, i, a) {
  if (n === void 0 && (n = false), r === void 0 && (r = true), i === void 0 && (i = true), a === void 0 && (a = 0), n && (typeof n == "function" ? n(t, 0, e, t.path) : Ft(t, 0)), t.path === "") {
    var o = { newDocument: e };
    if (t.op === "add") return o.newDocument = t.value, o;
    if (t.op === "replace") return o.newDocument = t.value, o.removed = e, o;
    if (t.op === "move" || t.op === "copy") return o.newDocument = $t(e, t.from), t.op === "move" && (o.removed = e), o;
    if (t.op === "test") {
      if (o.test = ht(e, t.value), o.test === false) throw new Q("Test operation failed", "TEST_OPERATION_FAILED", a, t, e);
      return o.newDocument = e, o;
    } else {
      if (t.op === "remove") return o.removed = e, o.newDocument = null, o;
      if (t.op === "_get") return t.value = e, o;
      if (n) throw new Q("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", a, t, e);
      return o;
    }
  } else {
    r || (e = ce(e));
    var c = t.path || "", s = c.split("/"), f = e, u = 1, l = s.length, d = void 0, m = void 0, v = void 0;
    for (typeof n == "function" ? v = n : v = Ft; ; ) {
      if (m = s[u], m && m.indexOf("~") != -1 && (m = os(m)), i && (m == "__proto__" || m == "prototype" && u > 0 && s[u - 1] == "constructor")) throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (n && d === void 0 && (f[m] === void 0 ? d = s.slice(0, u).join("/") : u == l - 1 && (d = t.path), d !== void 0 && v(t, 0, e, d)), u++, Array.isArray(f)) {
        if (m === "-") m = f.length;
        else {
          if (n && !On(m)) throw new Q("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", a, t, e);
          On(m) && (m = ~~m);
        }
        if (u >= l) {
          if (n && t.op === "add" && m > f.length) throw new Q("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", a, t, e);
          var o = rc[t.op].call(t, f, m, e);
          if (o.test === false) throw new Q("Test operation failed", "TEST_OPERATION_FAILED", a, t, e);
          return o;
        }
      } else if (u >= l) {
        var o = Xe[t.op].call(t, f, m, e);
        if (o.test === false) throw new Q("Test operation failed", "TEST_OPERATION_FAILED", a, t, e);
        return o;
      }
      if (f = f[m], n && u < l && (!f || typeof f != "object")) throw new Q("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", a, t, e);
    }
  }
}
function Yn(e, t, n, r, i) {
  if (r === void 0 && (r = true), i === void 0 && (i = true), n && !Array.isArray(t)) throw new Q("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  r || (e = ce(e));
  for (var a = new Array(t.length), o = 0, c = t.length; o < c; o++) a[o] = $e(e, t[o], n, true, i, o), e = a[o].newDocument;
  return a.newDocument = e, a;
}
function oc(e, t, n) {
  var r = $e(e, t);
  if (r.test === false) throw new Q("Test operation failed", "TEST_OPERATION_FAILED", n, t, e);
  return r.newDocument;
}
function Ft(e, t, n, r) {
  if (typeof e != "object" || e === null || Array.isArray(e)) throw new Q("Operation is not an object", "OPERATION_NOT_AN_OBJECT", t, e, n);
  if (Xe[e.op]) {
    if (typeof e.path != "string") throw new Q("Operation `path` property is not a string", "OPERATION_PATH_INVALID", t, e, n);
    if (e.path.indexOf("/") !== 0 && e.path.length > 0) throw new Q('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", t, e, n);
    if ((e.op === "move" || e.op === "copy") && typeof e.from != "string") throw new Q("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", t, e, n);
    if ((e.op === "add" || e.op === "replace" || e.op === "test") && e.value === void 0) throw new Q("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", t, e, n);
    if ((e.op === "add" || e.op === "replace" || e.op === "test") && Dn(e.value)) throw new Q("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", t, e, n);
    if (n) {
      if (e.op == "add") {
        var i = e.path.split("/").length, a = r.split("/").length;
        if (i !== a + 1 && i !== a) throw new Q("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", t, e, n);
      } else if (e.op === "replace" || e.op === "remove" || e.op === "_get") {
        if (e.path !== r) throw new Q("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", t, e, n);
      } else if (e.op === "move" || e.op === "copy") {
        var o = { op: "_get", path: e.from, value: void 0 }, c = is([o], n);
        if (c && c.name === "OPERATION_PATH_UNRESOLVABLE") throw new Q("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", t, e, n);
      }
    }
  } else throw new Q("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", t, e, n);
}
function is(e, t, n) {
  try {
    if (!Array.isArray(e)) throw new Q("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (t) Yn(ce(t), ce(e), n || true);
    else {
      n = n || Ft;
      for (var r = 0; r < e.length; r++) n(e[r], r, t, void 0);
    }
  } catch (i) {
    if (i instanceof Q) return i;
    throw i;
  }
}
function ht(e, t) {
  if (e === t) return true;
  if (e && t && typeof e == "object" && typeof t == "object") {
    var n = Array.isArray(e), r = Array.isArray(t), i, a, o;
    if (n && r) {
      if (a = e.length, a != t.length) return false;
      for (i = a; i-- !== 0; ) if (!ht(e[i], t[i])) return false;
      return true;
    }
    if (n != r) return false;
    var c = Object.keys(e);
    if (a = c.length, a !== Object.keys(t).length) return false;
    for (i = a; i-- !== 0; ) if (!t.hasOwnProperty(c[i])) return false;
    for (i = a; i-- !== 0; ) if (o = c[i], !ht(e[o], t[o])) return false;
    return true;
  }
  return e !== e && t !== t;
}
const sc = Object.freeze(Object.defineProperty({ __proto__: null, JsonPatchError: Q, _areEquals: ht, applyOperation: $e, applyPatch: Yn, applyReducer: oc, deepClone: nc, getValueByPointer: $t, validate: is, validator: Ft }, Symbol.toStringTag, { value: "Module" }));
/*!
* https://github.com/Starcounter-Jack/JSON-Patch
* (c) 2017-2021 Joachim Wester
* MIT license
*/
var Jn = /* @__PURE__ */ new WeakMap(), ic = /* @__PURE__ */ (function() {
  function e(t) {
    this.observers = /* @__PURE__ */ new Map(), this.obj = t;
  }
  return e;
})(), ac = /* @__PURE__ */ (function() {
  function e(t, n) {
    this.callback = t, this.observer = n;
  }
  return e;
})();
function cc(e) {
  return Jn.get(e);
}
function fc(e, t) {
  return e.observers.get(t);
}
function lc(e, t) {
  e.observers.delete(t.callback);
}
function uc(e, t) {
  t.unobserve();
}
function dc(e, t) {
  var n = [], r, i = cc(e);
  if (!i) i = new ic(e), Jn.set(e, i);
  else {
    var a = fc(i, t);
    r = a && a.observer;
  }
  if (r) return r;
  if (r = {}, i.value = ce(e), t) {
    r.callback = t, r.next = null;
    var o = function() {
      Mn(r);
    }, c = function() {
      clearTimeout(r.next), r.next = setTimeout(o);
    };
    typeof window < "u" && (window.addEventListener("mouseup", c), window.addEventListener("keyup", c), window.addEventListener("mousedown", c), window.addEventListener("keydown", c), window.addEventListener("change", c));
  }
  return r.patches = n, r.object = e, r.unobserve = function() {
    Mn(r), clearTimeout(r.next), lc(i, r), typeof window < "u" && (window.removeEventListener("mouseup", c), window.removeEventListener("keyup", c), window.removeEventListener("mousedown", c), window.removeEventListener("keydown", c), window.removeEventListener("change", c));
  }, i.observers.set(t, new ac(t, r)), r;
}
function Mn(e, t) {
  t === void 0 && (t = false);
  var n = Jn.get(e.object);
  Gn(n.value, e.object, e.patches, "", t), e.patches.length && Yn(n.value, e.patches);
  var r = e.patches;
  return r.length > 0 && (e.patches = [], e.callback && e.callback(r)), r;
}
function Gn(e, t, n, r, i) {
  if (t !== e) {
    typeof t.toJSON == "function" && (t = t.toJSON());
    for (var a = En(t), o = En(e), c = false, s = o.length - 1; s >= 0; s--) {
      var f = o[s], u = e[f];
      if (kn(t, f) && !(t[f] === void 0 && u !== void 0 && Array.isArray(t) === false)) {
        var l = t[f];
        typeof u == "object" && u != null && typeof l == "object" && l != null && Array.isArray(u) === Array.isArray(l) ? Gn(u, l, n, r + "/" + Ne(f), i) : u !== l && (i && n.push({ op: "test", path: r + "/" + Ne(f), value: ce(u) }), n.push({ op: "replace", path: r + "/" + Ne(f), value: ce(l) }));
      } else Array.isArray(e) === Array.isArray(t) ? (i && n.push({ op: "test", path: r + "/" + Ne(f), value: ce(u) }), n.push({ op: "remove", path: r + "/" + Ne(f) }), c = true) : (i && n.push({ op: "test", path: r, value: e }), n.push({ op: "replace", path: r, value: t }));
    }
    if (!(!c && a.length == o.length)) for (var s = 0; s < a.length; s++) {
      var f = a[s];
      !kn(e, f) && t[f] !== void 0 && n.push({ op: "add", path: r + "/" + Ne(f), value: ce(t[f]) });
    }
  }
}
function pc(e, t, n) {
  n === void 0 && (n = false);
  var r = [];
  return Gn(e, t, r, "", n), r;
}
const yc = Object.freeze(Object.defineProperty({ __proto__: null, compare: pc, generate: Mn, observe: dc, unobserve: uc }, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, sc, yc, { JsonPatchError: ss, deepClone: ce, escapePathComponent: Ne, unescapePathComponent: os });
var ln = { exports: {} }, un, Gr;
function hc() {
  if (Gr) return un;
  Gr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return un = e, un;
}
var dn, Vr;
function gc() {
  if (Vr) return dn;
  Vr = 1;
  var e = hc();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, dn = function() {
    function r(o, c, s, f, u, l) {
      if (l !== e) {
        var d = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw d.name = "Invariant Violation", d;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var a = { array: r, bigint: r, bool: r, func: r, number: r, object: r, string: r, symbol: r, any: r, arrayOf: i, element: r, elementType: r, instanceOf: i, node: r, objectOf: i, oneOf: i, oneOfType: i, shape: i, exact: i, checkPropTypes: n, resetWarningCache: t };
    return a.PropTypes = a, a;
  }, dn;
}
var Zr;
function Ec() {
  return Zr || (Zr = 1, ln.exports = gc()()), ln.exports;
}
function as(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = as(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function Qr() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = as(e)) && (r && (r += " "), r += t);
  return r;
}
const mc = Object.freeze(Object.defineProperty({ __proto__: null, clsx: Qr, default: Qr }, Symbol.toStringTag, { value: "Module" })), Oc = eo(mc);
export {
  sr as _,
  Sc as a,
  Oc as b,
  hs as c,
  wc as d,
  bc as e,
  or as f,
  _n as g,
  Rs as h,
  Yn as i,
  kc as j,
  Pc as k,
  de as l,
  pc as m,
  Rc as n,
  As as p,
  Ec as r,
  Ac as s,
  Tc as u
};
