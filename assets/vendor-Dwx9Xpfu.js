var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as de } from "./vendor-react-BOkvO0Ie.js";
function yt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Dr(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var n = e.default;
  if (typeof n == "function") {
    var t = function r() {
      var a = false;
      try {
        a = this instanceof r;
      } catch {
      }
      return a ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    t.prototype = n.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: true }), Object.keys(e).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(t, r, a.get ? a : { enumerable: true, get: function() {
      return e[r];
    } });
  }), t;
}
const Fo = Symbol(), mt = Symbol(), ze = "a", Lr = "f", qt = "p", Cr = "c", Nr = "t", vt = "h", Xe = "w", wt = "o", Pt = "k";
let jo = (e, n) => new Proxy(e, n);
const et = Object.getPrototypeOf, nt = /* @__PURE__ */ new WeakMap(), Br = (e) => e && (nt.has(e) ? nt.get(e) : et(e) === Object.prototype || et(e) === Array.prototype), Pn = (e) => typeof e == "object" && e !== null, Ko = (e) => Object.values(Object.getOwnPropertyDescriptors(e)).some((n) => !n.configurable && !n.writable), zo = (e) => {
  if (Array.isArray(e)) return Array.from(e);
  const n = Object.getOwnPropertyDescriptors(e);
  return Object.values(n).forEach((t) => {
    t.configurable = true;
  }), Object.create(et(e), n);
}, Wo = (e, n) => {
  const t = { [Lr]: n };
  let r = false;
  const a = (i, o) => {
    if (!r) {
      let l = t[ze].get(e);
      if (l || (l = {}, t[ze].set(e, l)), i === Xe) l[Xe] = true;
      else {
        let u = l[i];
        u || (u = /* @__PURE__ */ new Set(), l[i] = u), u.add(o);
      }
    }
  }, c = () => {
    r = true, t[ze].delete(e);
  }, s = { get(i, o) {
    return o === mt ? e : (a(Pt, o), Ir(Reflect.get(i, o), t[ze], t[Cr], t[Nr]));
  }, has(i, o) {
    return o === Fo ? (c(), true) : (a(vt, o), Reflect.has(i, o));
  }, getOwnPropertyDescriptor(i, o) {
    return a(wt, o), Reflect.getOwnPropertyDescriptor(i, o);
  }, ownKeys(i) {
    return a(Xe), Reflect.ownKeys(i);
  } };
  return n && (s.set = s.deleteProperty = () => false), [s, t];
}, St = (e) => e[mt] || e, Ir = (e, n, t, r) => {
  if (!Br(e)) return e;
  let a = r && r.get(e);
  if (!a) {
    const o = St(e);
    Ko(o) ? a = [o, zo(o)] : a = [o], r == null ? void 0 : r.set(e, a);
  }
  const [c, s] = a;
  let i = t && t.get(c);
  return (!i || i[1][Lr] !== !!s) && (i = Wo(c, !!s), i[1][qt] = jo(s || c, i[0]), t && t.set(c, i)), i[1][ze] = n, i[1][Cr] = t, i[1][Nr] = r, i[1][qt];
}, Xo = (e, n) => {
  const t = Reflect.ownKeys(e), r = Reflect.ownKeys(n);
  return t.length !== r.length || t.some((a, c) => a !== r[c]);
}, Hr = (e, n, t, r, a = Object.is) => {
  if (a(e, n)) return false;
  if (!Pn(e) || !Pn(n)) return true;
  const c = t.get(St(e));
  if (!c) return true;
  if (r) {
    if (r.get(e) === n) return false;
    r.set(e, n);
  }
  let s = null;
  for (const i of c[vt] || []) if (s = Reflect.has(e, i) !== Reflect.has(n, i), s) return s;
  if (c[Xe] === true) {
    if (s = Xo(e, n), s) return s;
  } else for (const i of c[wt] || []) {
    const o = !!Reflect.getOwnPropertyDescriptor(e, i), l = !!Reflect.getOwnPropertyDescriptor(n, i);
    if (s = o !== l, s) return s;
  }
  for (const i of c[Pt] || []) if (s = Hr(e[i], n[i], t, r, a), s) return s;
  if (s === null) throw new Error("invalid used");
  return s;
}, Yo = (e) => Br(e) && e[mt] || null, Ut = (e, n = true) => {
  nt.set(e, n);
}, Jo = (e, n, t) => {
  const r = [], a = /* @__PURE__ */ new WeakSet(), c = (s, i) => {
    var o, l, u;
    if (a.has(s)) return;
    Pn(s) && a.add(s);
    const f = Pn(s) && n.get(St(s));
    if (f) {
      if ((o = f[vt]) === null || o === void 0 || o.forEach((d) => {
        const p = `:has(${String(d)})`;
        r.push(i ? [...i, p] : [p]);
      }), f[Xe] === true) {
        const d = ":ownKeys";
        r.push(i ? [...i, d] : [d]);
      } else (l = f[wt]) === null || l === void 0 || l.forEach((d) => {
        const p = `:hasOwn(${String(d)})`;
        r.push(i ? [...i, p] : [p]);
      });
      (u = f[Pt]) === null || u === void 0 || u.forEach((d) => {
        "value" in (Object.getOwnPropertyDescriptor(s, d) || {}) && c(s[d], i ? [...i, d] : [d]);
      });
    } else i && r.push(i);
  };
  return c(e), r;
}, Sn = {}, Tt = (e) => typeof e == "object" && e !== null, Go = (e) => Tt(e) && !At.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer) && !(e instanceof Promise), $r = (e, n) => {
  const t = Ft.get(e);
  if ((t == null ? void 0 : t[0]) === n) return t[1];
  const r = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
  return Ut(r, true), Ft.set(e, [n, r]), Reflect.ownKeys(e).forEach((a) => {
    if (Object.getOwnPropertyDescriptor(r, a)) return;
    const c = Reflect.get(e, a), { enumerable: s } = Reflect.getOwnPropertyDescriptor(e, a), i = { value: c, enumerable: s, configurable: true };
    if (At.has(c)) Ut(c, false);
    else if (we.has(c)) {
      const [o, l] = we.get(c);
      i.value = $r(o, l());
    }
    Object.defineProperty(r, a, i);
  }), r;
}, Zo = (e, n, t, r) => ({ deleteProperty(a, c) {
  const s = Reflect.get(a, c);
  t(c);
  const i = Reflect.deleteProperty(a, c);
  return i && r(Ee == null ? void 0 : Ee("delete", c, s)), i;
}, set(a, c, s, i) {
  const o = !e() && Reflect.has(a, c), l = Reflect.get(a, c, i);
  if (o && (jt(l, s) || Tn.has(s) && jt(l, Tn.get(s)))) return true;
  t(c), Tt(s) && (s = Yo(s) || s);
  const u = !we.has(s) && es(s) ? rs(s) : s;
  return n(c, u), Reflect.set(a, c, u, i), r(Ee == null ? void 0 : Ee("set", c, s, l)), true;
} }), Vo = (e, n, ...t) => [e, [n], ...t], we = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakSet(), Ft = /* @__PURE__ */ new WeakMap(), Bn = [1], Tn = /* @__PURE__ */ new WeakMap();
let jt = Object.is, Qo = (e, n) => new Proxy(e, n), es = Go, ns = $r, ts = Zo, Ee;
function rs(e = {}) {
  if (!Tt(e)) throw new Error("object required");
  const n = Tn.get(e);
  if (n) return n;
  let t = Bn[0];
  const r = /* @__PURE__ */ new Set(), a = (v, S = ++Bn[0]) => {
    t !== S && (c = t = S, r.forEach((m) => m(v, S)));
  };
  let c = t;
  const s = (v = Bn[0]) => (c !== v && (c = v, o.forEach(([S]) => {
    const m = S[1](v);
    m > t && (t = m);
  })), t), i = (v) => (S, m) => {
    let O;
    S && (O = [...S], O[1] = [v, ...O[1]]), a(O, m);
  }, o = /* @__PURE__ */ new Map(), l = (v, S) => {
    const m = !At.has(S) && we.get(S);
    if (m) {
      if ((Sn ? "production" : void 0) !== "production" && o.has(v)) throw new Error("prop listener already exists");
      if (r.size) {
        const O = m[2](i(v));
        o.set(v, [m, O]);
      } else o.set(v, [m]);
    }
  }, u = (v) => {
    var S;
    const m = o.get(v);
    m && (o.delete(v), (S = m[1]) == null || S.call(m));
  }, f = (v) => (r.add(v), r.size === 1 && o.forEach(([m, O], R) => {
    if ((Sn ? "production" : void 0) !== "production" && O) throw new Error("remove already exists");
    const T = m[2](i(R));
    o.set(R, [m, T]);
  }), () => {
    r.delete(v), r.size === 0 && o.forEach(([m, O], R) => {
      O && (O(), o.set(R, [m]));
    });
  });
  let d = true;
  const p = ts(() => d, l, u, a), h = Qo(e, p);
  Tn.set(e, h);
  const P = [e, s, f];
  return we.set(h, P), Reflect.ownKeys(e).forEach((v) => {
    const S = Object.getOwnPropertyDescriptor(e, v);
    "value" in S && S.writable && (h[v] = e[v]);
  }), d = false, h;
}
function tc(e) {
  const n = we.get(e);
  return n == null ? void 0 : n[1]();
}
function os(e, n, t) {
  const r = we.get(e);
  (Sn ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  let a;
  const c = [], s = r[2];
  let i = false;
  const l = s((u) => {
    if (u && c.push(u), t) {
      n(c.splice(0));
      return;
    }
    a || (a = Promise.resolve().then(() => {
      a = void 0, i && n(c.splice(0));
    }));
  });
  return i = true, () => {
    i = false, l();
  };
}
function Kt(e) {
  const n = we.get(e);
  (Sn ? "production" : void 0) !== "production" && !n && console.warn("Please use proxy object");
  const [t, r] = n;
  return ns(t, r());
}
function rc(e = true) {
  e === true ? Ee = Vo : e === false ? Ee = void 0 : Ee = e;
}
const ss = {}, is = (e, n) => {
  const t = de.useRef(void 0);
  de.useEffect(() => {
    t.current = Jo(e, n);
  }), de.useDebugValue(t.current);
}, as = is, cs = /* @__PURE__ */ new WeakMap();
function oc(e, n) {
  const r = de.useMemo(() => e && /* @__PURE__ */ new WeakMap(), [e]), a = de.useRef(void 0);
  let c = true;
  const s = de.useSyncExternalStore(de.useCallback((o) => {
    const l = os(e, o, void 0);
    return o(), l;
  }, [e, void 0]), () => {
    const o = Kt(e);
    try {
      if (!c && a.current && !Hr(a.current, o, r, /* @__PURE__ */ new WeakMap())) return a.current;
    } catch {
    }
    return o;
  }, () => Kt(e));
  c = false, de.useLayoutEffect(() => {
    a.current = s;
  }), (ss ? "production" : void 0) !== "production" && as(s, r);
  const i = de.useMemo(() => /* @__PURE__ */ new WeakMap(), []);
  return Ir(s, r, i, cs);
}
function zt() {
  return zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, zt.apply(null, arguments);
}
function Je(e) {
  "@babel/helpers - typeof";
  return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Je(e);
}
function fs(e, n) {
  if (Je(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (Je(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function ls(e) {
  var n = fs(e, "string");
  return Je(n) == "symbol" ? n : n + "";
}
function sc(e, n, t) {
  return (n = ls(n)) in e ? Object.defineProperty(e, n, { value: t, enumerable: true, configurable: true, writable: true }) : e[n] = t, e;
}
var In, Wt;
function us() {
  if (Wt) return In;
  Wt = 1;
  var e = Object.assign || function(a) {
    for (var c = 1; c < arguments.length; c++) {
      var s = arguments[c];
      for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (a[i] = s[i]);
    }
    return a;
  }, n = { "{": "\\{", "}": "\\}", "\\": "\\textbackslash{}", "#": "\\#", $: "\\$", "%": "\\%", "&": "\\&", "^": "\\textasciicircum{}", _: "\\_", "~": "\\textasciitilde{}" }, t = { "\u2013": "\\--", "\u2014": "\\---", " ": "~", "	": "\\qquad{}", "\r\n": "\\newline{}", "\n": "\\newline{}" }, r = function(c, s) {
    return e({}, c, s);
  };
  return In = function(a) {
    for (var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = c.preserveFormatting, i = s === void 0 ? false : s, o = c.escapeMapFn, l = o === void 0 ? r : o, u = String(a), f = "", d = l(e({}, n), i ? e({}, t) : {}), p = Object.keys(d), h = function() {
      var v = false;
      p.forEach(function(S, m) {
        v || u.length >= S.length && u.slice(0, S.length) === S && (f += d[p[m]], u = u.slice(S.length, u.length), v = true);
      }), v || (f += u.slice(0, 1), u = u.slice(1, u.length));
    }; u; ) h();
    return f;
  }, In;
}
var ds = us();
const ic = yt(ds);
var ln = { exports: {} }, ps = ln.exports, Xt;
function hs() {
  return Xt || (Xt = 1, (function(e) {
    (function(n, t, r) {
      function a(o) {
        var l = this, u = i();
        l.next = function() {
          var f = 2091639 * l.s0 + l.c * 23283064365386963e-26;
          return l.s0 = l.s1, l.s1 = l.s2, l.s2 = f - (l.c = f | 0);
        }, l.c = 1, l.s0 = u(" "), l.s1 = u(" "), l.s2 = u(" "), l.s0 -= u(o), l.s0 < 0 && (l.s0 += 1), l.s1 -= u(o), l.s1 < 0 && (l.s1 += 1), l.s2 -= u(o), l.s2 < 0 && (l.s2 += 1), u = null;
      }
      function c(o, l) {
        return l.c = o.c, l.s0 = o.s0, l.s1 = o.s1, l.s2 = o.s2, l;
      }
      function s(o, l) {
        var u = new a(o), f = l && l.state, d = u.next;
        return d.int32 = function() {
          return u.next() * 4294967296 | 0;
        }, d.double = function() {
          return d() + (d() * 2097152 | 0) * 11102230246251565e-32;
        }, d.quick = d, f && (typeof f == "object" && c(f, u), d.state = function() {
          return c(u, {});
        }), d;
      }
      function i() {
        var o = 4022871197, l = function(u) {
          u = String(u);
          for (var f = 0; f < u.length; f++) {
            o += u.charCodeAt(f);
            var d = 0.02519603282416938 * o;
            o = d >>> 0, d -= o, d *= o, o = d >>> 0, d -= o, o += d * 4294967296;
          }
          return (o >>> 0) * 23283064365386963e-26;
        };
        return l;
      }
      t && t.exports ? t.exports = s : this.alea = s;
    })(ps, e);
  })(ln)), ln.exports;
}
var un = { exports: {} }, gs = un.exports, Yt;
function ys() {
  return Yt || (Yt = 1, (function(e) {
    (function(n, t, r) {
      function a(i) {
        var o = this, l = "";
        o.x = 0, o.y = 0, o.z = 0, o.w = 0, o.next = function() {
          var f = o.x ^ o.x << 11;
          return o.x = o.y, o.y = o.z, o.z = o.w, o.w ^= o.w >>> 19 ^ f ^ f >>> 8;
        }, i === (i | 0) ? o.x = i : l += i;
        for (var u = 0; u < l.length + 64; u++) o.x ^= l.charCodeAt(u) | 0, o.next();
      }
      function c(i, o) {
        return o.x = i.x, o.y = i.y, o.z = i.z, o.w = i.w, o;
      }
      function s(i, o) {
        var l = new a(i), u = o && o.state, f = function() {
          return (l.next() >>> 0) / 4294967296;
        };
        return f.double = function() {
          do
            var d = l.next() >>> 11, p = (l.next() >>> 0) / 4294967296, h = (d + p) / (1 << 21);
          while (h === 0);
          return h;
        }, f.int32 = l.next, f.quick = f, u && (typeof u == "object" && c(u, l), f.state = function() {
          return c(l, {});
        }), f;
      }
      t && t.exports ? t.exports = s : this.xor128 = s;
    })(gs, e);
  })(un)), un.exports;
}
var dn = { exports: {} }, ms = dn.exports, Jt;
function vs() {
  return Jt || (Jt = 1, (function(e) {
    (function(n, t, r) {
      function a(i) {
        var o = this, l = "";
        o.next = function() {
          var f = o.x ^ o.x >>> 2;
          return o.x = o.y, o.y = o.z, o.z = o.w, o.w = o.v, (o.d = o.d + 362437 | 0) + (o.v = o.v ^ o.v << 4 ^ (f ^ f << 1)) | 0;
        }, o.x = 0, o.y = 0, o.z = 0, o.w = 0, o.v = 0, i === (i | 0) ? o.x = i : l += i;
        for (var u = 0; u < l.length + 64; u++) o.x ^= l.charCodeAt(u) | 0, u == l.length && (o.d = o.x << 10 ^ o.x >>> 4), o.next();
      }
      function c(i, o) {
        return o.x = i.x, o.y = i.y, o.z = i.z, o.w = i.w, o.v = i.v, o.d = i.d, o;
      }
      function s(i, o) {
        var l = new a(i), u = o && o.state, f = function() {
          return (l.next() >>> 0) / 4294967296;
        };
        return f.double = function() {
          do
            var d = l.next() >>> 11, p = (l.next() >>> 0) / 4294967296, h = (d + p) / (1 << 21);
          while (h === 0);
          return h;
        }, f.int32 = l.next, f.quick = f, u && (typeof u == "object" && c(u, l), f.state = function() {
          return c(l, {});
        }), f;
      }
      t && t.exports ? t.exports = s : this.xorwow = s;
    })(ms, e);
  })(dn)), dn.exports;
}
var pn = { exports: {} }, ws = pn.exports, Gt;
function Ps() {
  return Gt || (Gt = 1, (function(e) {
    (function(n, t, r) {
      function a(i) {
        var o = this;
        o.next = function() {
          var u = o.x, f = o.i, d, p;
          return d = u[f], d ^= d >>> 7, p = d ^ d << 24, d = u[f + 1 & 7], p ^= d ^ d >>> 10, d = u[f + 3 & 7], p ^= d ^ d >>> 3, d = u[f + 4 & 7], p ^= d ^ d << 7, d = u[f + 7 & 7], d = d ^ d << 13, p ^= d ^ d << 9, u[f] = p, o.i = f + 1 & 7, p;
        };
        function l(u, f) {
          var d, p = [];
          if (f === (f | 0)) p[0] = f;
          else for (f = "" + f, d = 0; d < f.length; ++d) p[d & 7] = p[d & 7] << 15 ^ f.charCodeAt(d) + p[d + 1 & 7] << 13;
          for (; p.length < 8; ) p.push(0);
          for (d = 0; d < 8 && p[d] === 0; ++d) ;
          for (d == 8 ? p[7] = -1 : p[d], u.x = p, u.i = 0, d = 256; d > 0; --d) u.next();
        }
        l(o, i);
      }
      function c(i, o) {
        return o.x = i.x.slice(), o.i = i.i, o;
      }
      function s(i, o) {
        i == null && (i = +/* @__PURE__ */ new Date());
        var l = new a(i), u = o && o.state, f = function() {
          return (l.next() >>> 0) / 4294967296;
        };
        return f.double = function() {
          do
            var d = l.next() >>> 11, p = (l.next() >>> 0) / 4294967296, h = (d + p) / (1 << 21);
          while (h === 0);
          return h;
        }, f.int32 = l.next, f.quick = f, u && (u.x && c(u, l), f.state = function() {
          return c(l, {});
        }), f;
      }
      t && t.exports ? t.exports = s : this.xorshift7 = s;
    })(ws, e);
  })(pn)), pn.exports;
}
var hn = { exports: {} }, Ss = hn.exports, Zt;
function Ts() {
  return Zt || (Zt = 1, (function(e) {
    (function(n, t, r) {
      function a(i) {
        var o = this;
        o.next = function() {
          var u = o.w, f = o.X, d = o.i, p, h;
          return o.w = u = u + 1640531527 | 0, h = f[d + 34 & 127], p = f[d = d + 1 & 127], h ^= h << 13, p ^= p << 17, h ^= h >>> 15, p ^= p >>> 12, h = f[d] = h ^ p, o.i = d, h + (u ^ u >>> 16) | 0;
        };
        function l(u, f) {
          var d, p, h, P, v, S = [], m = 128;
          for (f === (f | 0) ? (p = f, f = null) : (f = f + "\0", p = 0, m = Math.max(m, f.length)), h = 0, P = -32; P < m; ++P) f && (p ^= f.charCodeAt((P + 32) % f.length)), P === 0 && (v = p), p ^= p << 10, p ^= p >>> 15, p ^= p << 4, p ^= p >>> 13, P >= 0 && (v = v + 1640531527 | 0, d = S[P & 127] ^= p + v, h = d == 0 ? h + 1 : 0);
          for (h >= 128 && (S[(f && f.length || 0) & 127] = -1), h = 127, P = 512; P > 0; --P) p = S[h + 34 & 127], d = S[h = h + 1 & 127], p ^= p << 13, d ^= d << 17, p ^= p >>> 15, d ^= d >>> 12, S[h] = p ^ d;
          u.w = v, u.X = S, u.i = h;
        }
        l(o, i);
      }
      function c(i, o) {
        return o.i = i.i, o.w = i.w, o.X = i.X.slice(), o;
      }
      function s(i, o) {
        i == null && (i = +/* @__PURE__ */ new Date());
        var l = new a(i), u = o && o.state, f = function() {
          return (l.next() >>> 0) / 4294967296;
        };
        return f.double = function() {
          do
            var d = l.next() >>> 11, p = (l.next() >>> 0) / 4294967296, h = (d + p) / (1 << 21);
          while (h === 0);
          return h;
        }, f.int32 = l.next, f.quick = f, u && (u.X && c(u, l), f.state = function() {
          return c(l, {});
        }), f;
      }
      t && t.exports ? t.exports = s : this.xor4096 = s;
    })(Ss, e);
  })(hn)), hn.exports;
}
var gn = { exports: {} }, As = gn.exports, Vt;
function Rs() {
  return Vt || (Vt = 1, (function(e) {
    (function(n, t, r) {
      function a(i) {
        var o = this, l = "";
        o.next = function() {
          var f = o.b, d = o.c, p = o.d, h = o.a;
          return f = f << 25 ^ f >>> 7 ^ d, d = d - p | 0, p = p << 24 ^ p >>> 8 ^ h, h = h - f | 0, o.b = f = f << 20 ^ f >>> 12 ^ d, o.c = d = d - p | 0, o.d = p << 16 ^ d >>> 16 ^ h, o.a = h - f | 0;
        }, o.a = 0, o.b = 0, o.c = -1640531527, o.d = 1367130551, i === Math.floor(i) ? (o.a = i / 4294967296 | 0, o.b = i | 0) : l += i;
        for (var u = 0; u < l.length + 20; u++) o.b ^= l.charCodeAt(u) | 0, o.next();
      }
      function c(i, o) {
        return o.a = i.a, o.b = i.b, o.c = i.c, o.d = i.d, o;
      }
      function s(i, o) {
        var l = new a(i), u = o && o.state, f = function() {
          return (l.next() >>> 0) / 4294967296;
        };
        return f.double = function() {
          do
            var d = l.next() >>> 11, p = (l.next() >>> 0) / 4294967296, h = (d + p) / (1 << 21);
          while (h === 0);
          return h;
        }, f.int32 = l.next, f.quick = f, u && (typeof u == "object" && c(u, l), f.state = function() {
          return c(l, {});
        }), f;
      }
      t && t.exports ? t.exports = s : this.tychei = s;
    })(As, e);
  })(gn)), gn.exports;
}
var yn = { exports: {} };
const bs = {}, Es = Object.freeze(Object.defineProperty({ __proto__: null, default: bs }, Symbol.toStringTag, { value: "Module" })), ks = Dr(Es);
var Os = yn.exports, Qt;
function _s() {
  return Qt || (Qt = 1, (function(e) {
    (function(n, t, r) {
      var a = 256, c = 6, s = 52, i = "random", o = r.pow(a, c), l = r.pow(2, s), u = l * 2, f = a - 1, d;
      function p(R, T, _) {
        var D = [];
        T = T == true ? { entropy: true } : T || {};
        var A = S(v(T.entropy ? [R, O(t)] : R ?? m(), 3), D), H = new h(D), $ = function() {
          for (var B = H.g(c), q = o, z = 0; B < l; ) B = (B + z) * a, q *= a, z = H.g(1);
          for (; B >= u; ) B /= 2, q /= 2, z >>>= 1;
          return (B + z) / q;
        };
        return $.int32 = function() {
          return H.g(4) | 0;
        }, $.quick = function() {
          return H.g(4) / 4294967296;
        }, $.double = $, S(O(H.S), t), (T.pass || _ || function(B, q, z, g) {
          return g && (g.S && P(g, H), B.state = function() {
            return P(H, {});
          }), z ? (r[i] = B, q) : B;
        })($, A, "global" in T ? T.global : this == r, T.state);
      }
      function h(R) {
        var T, _ = R.length, D = this, A = 0, H = D.i = D.j = 0, $ = D.S = [];
        for (_ || (R = [_++]); A < a; ) $[A] = A++;
        for (A = 0; A < a; A++) $[A] = $[H = f & H + R[A % _] + (T = $[A])], $[H] = T;
        (D.g = function(B) {
          for (var q, z = 0, g = D.i, w = D.j, b = D.S; B--; ) q = b[g = f & g + 1], z = z * a + b[f & (b[g] = b[w = f & w + q]) + (b[w] = q)];
          return D.i = g, D.j = w, z;
        })(a);
      }
      function P(R, T) {
        return T.i = R.i, T.j = R.j, T.S = R.S.slice(), T;
      }
      function v(R, T) {
        var _ = [], D = typeof R, A;
        if (T && D == "object") for (A in R) try {
          _.push(v(R[A], T - 1));
        } catch {
        }
        return _.length ? _ : D == "string" ? R : R + "\0";
      }
      function S(R, T) {
        for (var _ = R + "", D, A = 0; A < _.length; ) T[f & A] = f & (D ^= T[f & A] * 19) + _.charCodeAt(A++);
        return O(T);
      }
      function m() {
        try {
          var R;
          return d && (R = d.randomBytes) ? R = R(a) : (R = new Uint8Array(a), (n.crypto || n.msCrypto).getRandomValues(R)), O(R);
        } catch {
          var T = n.navigator, _ = T && T.plugins;
          return [+/* @__PURE__ */ new Date(), n, _, n.screen, O(t)];
        }
      }
      function O(R) {
        return String.fromCharCode.apply(0, R);
      }
      if (S(r.random(), t), e.exports) {
        e.exports = p;
        try {
          d = ks;
        } catch {
        }
      } else r["seed" + i] = p;
    })(typeof self < "u" ? self : Os, [], Math);
  })(yn)), yn.exports;
}
var Hn, er;
function xs() {
  if (er) return Hn;
  er = 1;
  var e = hs(), n = ys(), t = vs(), r = Ps(), a = Ts(), c = Rs(), s = _s();
  return s.alea = e, s.xor128 = n, s.xorwow = t, s.xorshift7 = r, s.xor4096 = a, s.tychei = c, Hn = s, Hn;
}
var Ms = xs();
const ac = yt(Ms);
var $n, nr;
function Ds() {
  return nr || (nr = 1, $n = function e(n, t) {
    var r = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi, a = /(^[ ]*|[ ]*$)/g, c = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/, s = /^0x[0-9a-f]+$/i, i = /^0/, o = function(O) {
      return e.insensitive && ("" + O).toLowerCase() || "" + O;
    }, l = o(n).replace(a, "") || "", u = o(t).replace(a, "") || "", f = l.replace(r, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), d = u.replace(r, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), p = parseInt(l.match(s), 16) || f.length !== 1 && l.match(c) && Date.parse(l), h = parseInt(u.match(s), 16) || p && u.match(c) && Date.parse(u) || null, P, v;
    if (h) {
      if (p < h) return -1;
      if (p > h) return 1;
    }
    for (var S = 0, m = Math.max(f.length, d.length); S < m; S++) {
      if (P = !(f[S] || "").match(i) && parseFloat(f[S]) || f[S] || 0, v = !(d[S] || "").match(i) && parseFloat(d[S]) || d[S] || 0, isNaN(P) !== isNaN(v)) return isNaN(P) ? 1 : -1;
      if (typeof P != typeof v && (P += "", v += ""), P < v) return -1;
      if (P > v) return 1;
    }
    return 0;
  }), $n;
}
var Ls = Ds();
const cc = yt(Ls);
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const qr = Object.freeze({ p: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn, n: 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n, h: 1n, a: 0n, b: 7n, Gx: 0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n, Gy: 0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n }), { p: me, n: an, Gx: Cs, Gy: Ns, b: Ur } = qr, Q = 32, Ge = 64, tt = { publicKey: Q + 1, publicKeyUncompressed: Ge + 1, seed: Q + Q / 2 }, J = (e = "", n = Error) => {
  const t = new n(e), { captureStackTrace: r } = Error;
  throw typeof r == "function" && r(t, J), t;
}, Bs = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array" && e.BYTES_PER_ELEMENT === 1, ae = (e, n, t = "") => {
  const r = Bs(e), a = e == null ? void 0 : e.length, c = n !== void 0;
  if (!r || c && a !== n) {
    const s = t && `"${t}" `, i = c ? ` of length ${n}` : "", o = r ? `length=${a}` : `type=${typeof e}`, l = s + "expected Uint8Array" + i + ", got " + o;
    return r ? J(l, RangeError) : J(l, TypeError);
  }
  return e;
}, Ze = (e) => new Uint8Array(e), Fr = (e, n) => e.toString(16).padStart(n, "0"), jr = (e) => {
  let n = "";
  for (const t of ae(e)) n += Fr(t, 2);
  return n;
}, ue = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, tr = (e) => e >= ue._0 && e <= ue._9 ? e - ue._0 : e >= ue.A && e <= ue.F ? e - (ue.A - 10) : e >= ue.a && e <= ue.f ? e - (ue.a - 10) : void 0, Kr = (e) => {
  const n = "hex invalid";
  if (typeof e != "string") return J(n);
  const t = e.length, r = t / 2;
  if (t % 2) return J(n);
  const a = Ze(r);
  for (let c = 0, s = 0; c < r; c++, s += 2) {
    const i = tr(e.charCodeAt(s)), o = tr(e.charCodeAt(s + 1));
    if (i === void 0 || o === void 0) return J(n);
    a[c] = i * 16 + o;
  }
  return a;
}, rr = () => {
  var _a2;
  return ((_a2 = globalThis == null ? void 0 : globalThis.crypto) == null ? void 0 : _a2.subtle) ?? J("crypto.subtle must be defined, consider polyfill");
}, He = (...e) => {
  let n = 0;
  for (const a of e) n += ae(a).length;
  const t = Ze(n);
  let r = 0;
  for (const a of e) t.set(a, r), r += a.length;
  return t;
}, Rt = (e = Q) => (globalThis == null ? void 0 : globalThis.crypto).getRandomValues(Ze(e)), rt = BigInt, xe = (e, n, t, r = "bad number: out of range") => typeof e != "bigint" ? J(r, TypeError) : n <= e && e < t ? e : J(r, RangeError), x = (e, n = me) => {
  const t = e % n;
  return t >= 0n ? t : n + t;
}, On = (e) => x(e, an), Is = (e, n) => {
  (e === 0n || n <= 0n) && J("no inverse n=" + e + " mod=" + n);
  let t = x(e, n), r = n, a = 0n, c = 1n;
  for (; t !== 0n; ) {
    const s = r / t, i = r % t, o = a - c * s;
    r = t, t = i, a = c, c = o;
  }
  return r === 1n ? x(a, n) : J("no inverse");
}, zr = (e) => {
  const n = js[e];
  return typeof n != "function" && J("hashes." + e + " not set"), n;
}, or = (e, n, t) => ae(zr(e)(n, t), Q, "digest"), sr = (e, n, t) => Promise.resolve(zr(e)(n, t)).then((r) => ae(r, Q, "digest")), qn = (e) => e instanceof ne ? e : J("Point expected"), Wr = (e) => x(x(e * e) * e + Ur), ir = (e) => xe(e, 0n, me), mn = (e) => xe(e, 1n, me), Hs = (e) => xe(e, 1n, an), _n = (e) => !(e & 1n), Xr = (e) => Uint8Array.of(e), $s = (e) => Xr(_n(e) ? 2 : 3), Yr = (e) => {
  const n = Wr(mn(e));
  let t = 1n;
  for (let r = n, a = (me + 1n) / 4n; a > 0n; a >>= 1n) a & 1n && (t = t * r % me), r = r * r % me;
  return x(t * t) !== n && J("sqrt invalid"), _n(t) ? t : x(-t);
};
const _ne = class _ne {
  constructor(n, t, r) {
    __publicField(this, "X");
    __publicField(this, "Y");
    __publicField(this, "Z");
    this.X = ir(n), this.Y = mn(t), this.Z = ir(r), Object.freeze(this);
  }
  static CURVE() {
    return qr;
  }
  static fromAffine(n) {
    const { x: t, y: r } = n;
    return t === 0n && r === 0n ? be : new _ne(t, r, 1n);
  }
  static fromBytes(n) {
    ae(n);
    const { publicKey: t, publicKeyUncompressed: r } = tt;
    let a;
    const c = n.length, s = n[0], i = n.subarray(1), o = An(i, 0, Q);
    if (c === t && (s === 2 || s === 3)) {
      let l = Yr(o);
      s === 3 && (l = x(-l)), a = new _ne(o, l, 1n);
    }
    return c === r && s === 4 && (a = new _ne(o, An(i, Q, Ge), 1n)), a ? a.assertValidity() : J("bad point: not on curve");
  }
  static fromHex(n) {
    return _ne.fromBytes(Kr(n));
  }
  get x() {
    return this.toAffine().x;
  }
  get y() {
    return this.toAffine().y;
  }
  equals(n) {
    const { X: t, Y: r, Z: a } = this, { X: c, Y: s, Z: i } = qn(n), o = x(t * i), l = x(c * a), u = x(r * i), f = x(s * a);
    return o === l && u === f;
  }
  is0() {
    return this.equals(be);
  }
  negate() {
    return new _ne(this.X, x(-this.Y), this.Z);
  }
  double() {
    return this.add(this);
  }
  add(n) {
    const { X: t, Y: r, Z: a } = this, { X: c, Y: s, Z: i } = qn(n), o = 0n, l = Ur;
    let u = 0n, f = 0n, d = 0n;
    const p = x(l * 3n);
    let h = x(t * c), P = x(r * s), v = x(a * i), S = x(t + r), m = x(c + s);
    S = x(S * m), m = x(h + P), S = x(S - m), m = x(t + a);
    let O = x(c + i);
    return m = x(m * O), O = x(h + v), m = x(m - O), O = x(r + a), u = x(s + i), O = x(O * u), u = x(P + v), O = x(O - u), d = x(o * m), u = x(p * v), d = x(u + d), u = x(P - d), d = x(P + d), f = x(u * d), P = x(h + h), P = x(P + h), v = x(o * v), m = x(p * m), P = x(P + v), v = x(h - v), v = x(o * v), m = x(m + v), h = x(P * m), f = x(f + h), h = x(O * m), u = x(S * u), u = x(u - h), h = x(S * P), d = x(O * d), d = x(d + h), new _ne(u, f, d);
  }
  subtract(n) {
    return this.add(qn(n).negate());
  }
  multiply(n, t = true) {
    if (!t && n === 0n) return be;
    if (Hs(n), n === 1n) return this;
    if (this.equals(Me)) return Vs(n).p;
    let r = be, a = Me;
    for (let c = this; n > 0n; c = c.double(), n >>= 1n) n & 1n ? r = r.add(c) : t && (a = a.add(c));
    return r;
  }
  multiplyUnsafe(n) {
    return this.multiply(n, false);
  }
  toAffine() {
    const { X: n, Y: t, Z: r } = this;
    if (this.equals(be)) return { x: 0n, y: 0n };
    if (r === 1n) return { x: n, y: t };
    const a = Is(r, me);
    return x(r * a) !== 1n && J("inverse invalid"), { x: x(n * a), y: x(t * a) };
  }
  assertValidity() {
    const { x: n, y: t } = this.toAffine();
    return mn(n), mn(t), x(t * t) === Wr(n) ? this : J("bad point: not on curve");
  }
  toBytes(n = true) {
    const { x: t, y: r } = this.assertValidity().toAffine(), a = le(t);
    return n ? He($s(r), a) : He(Xr(4), a, le(r));
  }
  toHex(n) {
    return jr(this.toBytes(n));
  }
};
__publicField(_ne, "BASE");
__publicField(_ne, "ZERO");
let ne = _ne;
const Me = new ne(Cs, Ns, 1n), be = new ne(0n, 1n, 0n);
ne.BASE = Me;
ne.ZERO = be;
const qs = (e, n, t) => Me.multiply(n, false).add(e.multiply(t, false)).assertValidity(), De = (e) => rt("0x" + (jr(e) || "0")), An = (e, n, t) => De(e.subarray(n, t)), Us = 2n ** 256n, le = (e) => Kr(Fr(xe(e, 0n, Us), Ge)), Fs = (e) => {
  const n = De(ae(e, Q, "secret key"));
  return xe(n, 1n, an, "invalid secret key: outside of range");
}, ar = "SHA-256", js = { hmacSha256Async: async (e, n) => {
  const t = rr(), r = "HMAC", a = await t.importKey("raw", e, { name: r, hash: { name: ar } }, false, ["sign"]);
  return Ze(await t.sign(r, a, n));
}, hmacSha256: void 0, sha256Async: async (e) => Ze(await rr().digest(ar, e)), sha256: void 0 }, Ks = (e) => {
  if (e = e === void 0 ? Rt(tt.seed) : e, ae(e), e.length < tt.seed || e.length > 1024) return J("expected 48-1024b", RangeError);
  const n = x(De(e), an - 1n);
  return le(n + 1n);
}, zs = (e) => (n) => {
  const t = Ks(n);
  return { secretKey: t, publicKey: e(t) };
}, Jr = (e) => Uint8Array.from("BIP0340/" + e, (n) => n.charCodeAt(0)), Gr = "aux", Zr = "nonce", Vr = "challenge", ot = (e, ...n) => {
  const t = or("sha256", Jr(e));
  return or("sha256", He(t, t, ...n));
}, st = (e, ...n) => sr("sha256Async", Jr(e)).then((t) => sr("sha256Async", He(t, t, ...n))), bt = (e) => {
  const n = Fs(e), t = Me.multiply(n), { x: r, y: a } = t.assertValidity().toAffine(), c = _n(a) ? n : On(-n), s = le(r);
  return { d: c, px: s };
}, Et = (e) => On(De(e)), Qr = (...e) => Et(ot(Vr, ...e)), eo = async (...e) => Et(await st(Vr, ...e)), no = (e) => bt(e).px, Ws = zs(no), to = (e, n, t) => {
  const { px: r, d: a } = bt(n);
  return { m: ae(e), px: r, d: a, a: ae(t, Q) };
}, ro = (e) => {
  const n = Et(e);
  n === 0n && J("sign failed: k is zero");
  const { px: t, d: r } = bt(le(n));
  return { rx: t, k: r };
}, oo = (e, n, t, r) => He(n, le(On(e + t * r))), so = "invalid signature produced", Xs = (e, n, t = Rt(Q)) => {
  const { m: r, px: a, d: c, a: s } = to(e, n, t), i = ot(Gr, s), o = le(c ^ De(i)), l = ot(Zr, o, a, r), { rx: u, k: f } = ro(l), d = Qr(u, a, r), p = oo(f, u, d, c);
  return ao(p, r, a) || J(so), p;
}, Ys = async (e, n, t = Rt(Q)) => {
  const { m: r, px: a, d: c, a: s } = to(e, n, t), i = await st(Gr, s), o = le(c ^ De(i)), l = await st(Zr, o, a, r), { rx: u, k: f } = ro(l), d = await eo(u, a, r), p = oo(f, u, d, c);
  return await co(p, r, a) || J(so), p;
}, Js = (e, n) => e instanceof Promise ? e.then(n) : n(e), io = (e, n, t, r) => {
  const a = ae(e, Ge, "signature"), c = ae(n, void 0, "message"), s = ae(t, Q, "publicKey");
  try {
    const i = De(s), o = Yr(i), l = new ne(i, o, 1n).assertValidity(), u = le(l.toAffine().x), f = An(a, 0, Q);
    xe(f, 1n, me);
    const d = An(a, Q, Ge);
    xe(d, 1n, an);
    const p = He(le(f), u, c);
    return Js(r(p), (h) => {
      const { x: P, y: v } = qs(l, d, On(-h)).toAffine();
      return !(!_n(v) || P !== f);
    });
  } catch {
    return false;
  }
}, ao = (e, n, t) => io(e, n, t, Qr), co = async (e, n, t) => io(e, n, t, eo), fo = Object.freeze({ keygen: Ws, getPublicKey: no, sign: Xs, verify: ao, signAsync: Ys, verifyAsync: co }), Rn = 8, Gs = 256, lo = Math.ceil(Gs / Rn) + 1, it = 2 ** (Rn - 1), Zs = () => {
  const e = [];
  let n = Me, t = n;
  for (let r = 0; r < lo; r++) {
    t = n, e.push(t);
    for (let a = 1; a < it; a++) t = t.add(n), e.push(t);
    n = t.double();
  }
  return e;
};
let cr;
const fr = (e, n) => {
  const t = n.negate();
  return e ? t : n;
}, Vs = (e) => {
  const n = cr || (cr = Zs());
  let t = be, r = Me;
  const a = 2 ** Rn, c = a, s = rt(a - 1), i = rt(Rn);
  for (let o = 0; o < lo; o++) {
    let l = Number(e & s);
    e >>= i, l > it && (l -= c, e += 1n);
    const u = o * it, f = u, d = u + Math.abs(l) - 1, p = o % 2 !== 0, h = l < 0;
    l === 0 ? r = r.add(fr(p, n[f])) : t = t.add(fr(h, n[d]));
  }
  return e !== 0n && J("invalid wnaf"), { p: t, f: r };
}, { floor: at, min: Qs, sin: ei } = Math, fe = "Trystero", Ve = (e, n) => Array(e).fill(void 0).map(n), ni = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz", Ue = (e) => Ve(e, () => ni[at(Math.random() * 62)] ?? "").join(""), ce = Ue(20), Le = Promise.all.bind(Promise), uo = typeof window < "u", { entries: Oe, fromEntries: po, keys: se, values: Ie } = Object, V = () => {
}, ho = "candidate", K = (e) => (e !== null && clearTimeout(e), null), j = (e) => new Error(`${fe}: ${e}`), $e = (e, n) => e instanceof Error && e.message ? e.message : typeof e == "string" && e ? e : re(e ?? n), ye = (e, n) => e instanceof Error ? e : j($e(e, n)), ti = new TextEncoder(), ri = new TextDecoder(), ve = (e) => ti.encode(e), ke = (e) => ri.decode(e), Qe = (e) => e.reduce((n, t) => n + t.toString(16).padStart(2, "0"), ""), en = (...e) => e.join("@"), oi = (e, n) => {
  const t = [...e], r = () => {
    const c = ei(n++) * 1e4;
    return c - at(c);
  };
  let a = t.length;
  for (; a; ) {
    const c = at(r() * a--), s = t[a];
    t[a] = t[c], t[c] = s;
  }
  return t;
}, si = (e, n, t, r = false) => {
  var _a2, _b;
  return ((_a2 = e.relayConfig) == null ? void 0 : _a2.urls) || (r ? oi(n, go(e.appId)) : n).slice(0, ((_b = e.relayConfig) == null ? void 0 : _b.redundancy) ?? t);
}, re = JSON.stringify, nn = (e) => {
  try {
    return JSON.parse(e);
  } catch {
    throw j(`failed to parse JSON: ${e}`);
  }
}, go = (e, n = Number.MAX_SAFE_INTEGER) => e.split("").reduce((t, r) => t + r.charCodeAt(0), 0) % n, lr = 3333, ii = 6e4, Un = {};
let Ye = null, ct = null;
const ai = () => {
  Ye || (Ye = new Promise((e) => {
    ct = e;
  }).finally(() => {
    ct = null, Ye = null;
  }));
}, ci = () => {
  ct == null ? void 0 : ct();
}, fi = (e, n, t) => {
  const r = {};
  let a = false, c = false, s = V;
  r.ready = new Promise((o) => s = o);
  const i = () => {
    c = false;
    const o = new WebSocket(e);
    o.onclose = () => {
      if (c) return;
      if (c = true, Ye) {
        Ye.then(i);
        return;
      }
      const l = Un[e] ?? (Un[e] = lr);
      setTimeout(i, Math.random() * l), Un[e] = Qs(l * 2, ii);
    }, o.onmessage = (l) => n(String(l.data)), r.socket = o, r.url = o.url, o.onopen = () => {
      const l = a;
      a = true, s(r), Un[e] = lr, l && (t == null ? void 0 : t());
    }, r.send = (l) => {
      o.readyState === 1 && o.send(l);
    };
  };
  return i(), r;
}, li = (e) => {
  const n = {}, t = /* @__PURE__ */ new WeakMap(), r = (s) => {
    const i = t.get(s);
    if (!i) throw j("relay bookkeeping missing registration for relay client");
    return i;
  }, a = () => {
    const s = {}, i = (o) => s[o] ?? (s[o] = {});
    return { forKey: i, forRelay: (o) => i(r(o)) };
  }, c = (s, i) => (n[s] = i, t.set(i, s), i);
  return { register: (s, i) => {
    const o = n[s];
    return o || c(s, i());
  }, keyOf: r, scoped: a, getSockets: () => po(Oe(n).flatMap(([s, i]) => {
    const o = e(i);
    return o ? [[s, o]] : [];
  })) };
}, ui = () => {
  if (uo) {
    const e = new AbortController();
    return addEventListener("online", ci, { signal: e.signal }), addEventListener("offline", ai, { signal: e.signal }), () => e.abort();
  }
  return V;
}, kt = "AES-GCM", di = {}, pi = (e) => btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(e)))), hi = (e) => {
  const n = atob(e);
  return new Uint8Array(n.length).map((t, r) => n.charCodeAt(r)).buffer;
}, xn = async (e, n) => new Uint8Array(await crypto.subtle.digest(e, ve(n))), tn = async (e) => di[e] ?? (di[e] = Array.from(await xn("SHA-1", e)).map((n) => n.toString(36)).join("")), gi = async (e, n, t) => crypto.subtle.importKey("raw", await crypto.subtle.digest({ name: "SHA-256" }, ve(`${e}:${n}:${t}`)), { name: kt }, false, ["encrypt", "decrypt"]), yi = async (e, n) => Qe(await xn("SHA-256", `${fe}:${e}:${n}`)), yo = "$", mo = ",", mi = async (e, n) => {
  const t = crypto.getRandomValues(new Uint8Array(16));
  return t.join(mo) + yo + pi(await crypto.subtle.encrypt({ name: kt, iv: t }, await e, ve(n)));
}, vi = async (e, n) => {
  const [t, r] = n.split(yo);
  return ke(await crypto.subtle.decrypt({ name: kt, iv: new Uint8Array((t == null ? void 0 : t.split(mo).map(Number)) ?? []) }, await e, hi(r ?? "")));
}, Ot = 57333, wi = 18e4, Pi = 20;
var Si = class {
  constructor(e) {
    __publicField(this, "makeOffer");
    __publicField(this, "pool", []);
    __publicField(this, "pooled", /* @__PURE__ */ new Set());
    __publicField(this, "leased", /* @__PURE__ */ new Map());
    __publicField(this, "recycling", /* @__PURE__ */ new Set());
    __publicField(this, "cleanupTimer", null);
    __publicField(this, "active", false);
    this.makeOffer = e;
  }
  get isActive() {
    return this.active;
  }
  warmup() {
    this.pool = [], this.pooled.clear(), Ve(Pi, this.makeOffer).forEach((e) => this.push(e)), this.active = true, this.cleanupTimer = setInterval(() => {
      this.pool = this.pool.filter((e) => e.isDead ? (this.pooled.delete(e), false) : true);
    }, Ot);
  }
  push(e) {
    e.isDead || this.pooled.has(e) || this.leased.has(e) || (this.pool.push(e), this.pooled.add(e));
  }
  shift(e) {
    const n = [];
    for (; n.length < e && this.pool.length > 0; ) {
      const t = this.pool.shift();
      if (!t) break;
      this.pooled.delete(t), n.push(t);
    }
    return n;
  }
  claimLeased(e) {
    const n = this.leased.get(e);
    n && (K(n), this.leased.delete(e));
  }
  recycle(e) {
    if (!(e.isDead || this.recycling.has(e))) {
      if (e.connection.remoteDescription) {
        e.destroy();
        return;
      }
      if (!this.active) {
        e.destroy();
        return;
      }
      this.recycling.add(e), e.setHandlers({ connect: V, close: V, error: V }), e.getOffer(true).then((n) => {
        if (!n || n.type !== "offer" || e.isDead || !this.active) {
          e.destroy();
          return;
        }
        this.push(e);
      }).catch(() => e.destroy()).finally(() => this.recycling.delete(e));
    }
  }
  reclaimLeased(e) {
    const n = this.leased.get(e);
    n && (K(n), this.leased.delete(e), this.recycle(e));
  }
  lease(e) {
    this.claimLeased(e), this.leased.set(e, setTimeout(() => {
      this.leased.delete(e), this.recycle(e);
    }, wi));
  }
  checkout(e, n, t) {
    const r = this.shift(e), a = Math.max(0, e - r.length);
    a > 0 && r.push(...Ve(a, this.makeOffer));
    const c = async (s, i = false) => {
      try {
        const o = await t(s);
        return n ? (this.lease(s), { peer: s, offer: o, claim: () => this.claimLeased(s), reclaim: () => this.reclaimLeased(s) }) : { peer: s, offer: o };
      } catch (o) {
        if (this.claimLeased(s), this.pooled.delete(s), s.destroy(), !i) return c(this.makeOffer(), true);
        throw o;
      }
    };
    return Le(r.map((s) => c(s)));
  }
  getOffers(e, n) {
    return this.checkout(e, true, n);
  }
  destroy() {
    this.active = false, this.cleanupTimer && (clearInterval(this.cleanupTimer), this.cleanupTimer = null), this.pool.forEach((e) => e.destroy()), this.pool = [], this.pooled.clear(), this.leased.forEach((e, n) => {
      K(e), n.destroy();
    }), this.leased.clear(), this.recycling.forEach((e) => e.destroy()), this.recycling.clear();
  }
};
const Fn = j("incorrect password for overlapping room"), Ti = (e, n, t) => {
  const r = (s) => xn("SHA-256", `${s}:${e}:${n}:${t}`).then(Qe), a = async (s, i, o) => {
    if (!e) return;
    if (o) {
      const u = Ue(36);
      await s({ __trystero_pw: "challenge", c: u });
      const { data: f } = await i();
      if (!f || typeof f != "object" || f.__trystero_pw !== "response" || typeof f.h != "string") throw Fn;
      const d = await r(u);
      if (f.h !== d) throw Fn;
      return;
    }
    const { data: l } = await i();
    if (!l || typeof l != "object" || l.__trystero_pw !== "challenge" || typeof l.c != "string") throw Fn;
    await s({ __trystero_pw: "response", h: await r(l.c) });
  };
  return { run: a, compose: (s) => e || s ? async (i, o, l, u) => {
    await a(o, l, u), await (s == null ? void 0 : s(i, o, l, u));
  } : void 0 };
}, Ai = (e) => {
  const n = $e(e, "unknown error");
  return n.startsWith("handshake ") ? n : `handshake failed: ${n}`;
}, Ri = ({ onPeerHandshake: e, onHandshakeError: n, handshakeTimeoutMs: t, sendHandshakeData: r, sendHandshakeReady: a, onActivate: c, onFailure: s }) => {
  const i = {}, o = (f, d) => {
    const p = i[f];
    !p || d && p.peer !== d || p.isActive || !p.didLocalHandshakePass || !p.didReceiveRemoteReady || (p.isActive = true, p.handshakeTimer = K(p.handshakeTimer), c(f, p.peer));
  }, l = (f, d, p) => {
    const h = i[f];
    if (!h || h.peer !== d) return;
    const P = Ai(p);
    n == null ? void 0 : n(f, P), s(f, d, j(P));
  }, u = (f, d) => {
    const p = i[f];
    !p || p.peer !== d || p.isActive || (p.didLocalHandshakePass = true, a("", f).catch((h) => l(f, d, j(`failed sending handshake readiness: ${$e(h, "unknown send failure")}`))), o(f, d));
  };
  return { addPeer: (f, d) => {
    i[f] = { peer: d, isActive: false, didLocalHandshakePass: false, didReceiveRemoteReady: false, handshakeTimer: null, pendingHandshakePayloads: [], handshakeWaiters: [] };
  }, clearPeer: (f, d) => {
    const p = i[f];
    p && (p.handshakeTimer = K(p.handshakeTimer), p.pendingHandshakePayloads.length = 0, p.handshakeWaiters.splice(0).forEach((h) => h.reject(d)), delete i[f]);
  }, canReceiveFromPeer: (f, d) => {
    const p = i[f];
    return !!(p && (p.isActive || d));
  }, start: (f, d) => {
    const p = i[f];
    if (!p || p.peer !== d) return;
    p.handshakeTimer = setTimeout(() => l(f, d, j(`handshake timed out after ${t}ms`)), t);
    const h = async (S, m) => {
      await r(S, f, m);
    }, P = () => new Promise((S, m) => {
      const O = i[f];
      if (!O || O.peer !== d) {
        m(j("peer disconnected during handshake"));
        return;
      }
      const R = O.pendingHandshakePayloads.shift();
      if (R) {
        S(R);
        return;
      }
      O.handshakeWaiters.push({ resolve: S, reject: (T) => m(T) });
    }), v = ce < f;
    Promise.resolve(e == null ? void 0 : e(f, h, P, v)).then(() => u(f, d)).catch((S) => l(f, d, ye(S, "handshake failed")));
  }, receiveHandshakeData: (f, d, p) => {
    const h = i[d];
    if (!h || h.isActive) return;
    const P = p === void 0 ? { data: f } : { data: f, metadata: p }, v = h.handshakeWaiters.shift();
    if (v) {
      v.resolve(P);
      return;
    }
    h.pendingHandshakePayloads.push(P);
  }, receiveHandshakeReady: (f) => {
    const d = i[f];
    !d || d.isActive || (d.didReceiveRemoteReady = true, o(f));
  } };
}, bi = 15e3, Ei = 5e3, ur = "icegatheringstatechange", ki = "iceconnectionstatechange", Fe = "offer", Oi = "answer", _i = /out of range/i, dr = (e) => e.replace(/ (\S+\.local) (\d+) typ host/g, " 127.0.0.1 $2 typ host");
var pr = (e, { trickleIce: n, rtcConfig: t, rtcPolyfill: r, turnConfig: a, _test_only_mdnsHostFallbackToLoopback: c }) => {
  const s = new (r ?? RTCPeerConnection)({ iceServers: xi.concat(a ?? []), ...t }), i = {}, o = [], l = [], u = n !== false, f = [], d = [];
  let p = false, h = false, P = null, v = null, S = false;
  const m = () => v = K(v), O = () => {
    var _a2;
    S || (S = true, m(), (_a2 = i.close) == null ? void 0 : _a2.call(i));
  }, R = (y) => {
    i.signal ? i.signal(y) : o.push(y);
  }, T = (y) => {
    const k = i.signal;
    i.signal = (I) => {
      k == null ? void 0 : k(I), y(I);
    }, o.length > 0 && o.splice(0).forEach((I) => {
      var _a2;
      return (_a2 = i.signal) == null ? void 0 : _a2.call(i, I);
    });
  }, _ = (y) => c ? dr(y) : y, D = (y) => {
    if (!c || typeof y.candidate != "string") return y;
    const k = dr(y.candidate);
    return k === y.candidate ? y : { ...y, candidate: k };
  }, A = (y) => {
    var _a2, _b;
    return { type: ((_a2 = y.localDescription) == null ? void 0 : _a2.type) ?? Fe, sdp: _(((_b = y.localDescription) == null ? void 0 : _b.sdp) ?? "") };
  }, H = () => {
    var _a2, _b;
    const y = (_a2 = s.remoteDescription) == null ? void 0 : _a2.sdp;
    return y ? ((_b = y.match(/a=ice-ufrag:([^\s]+)/)) == null ? void 0 : _b[1]) ?? null : null;
  }, $ = () => {
    var _a2, _b;
    return (((_b = (_a2 = s.remoteDescription) == null ? void 0 : _a2.sdp) == null ? void 0 : _b.match(/^m=/gm)) ?? []).length;
  }, B = (y) => {
    if (!s.remoteDescription) return false;
    const k = $();
    if (typeof y.sdpMLineIndex == "number" && k > 0 && y.sdpMLineIndex >= k) return false;
    const I = H();
    return !(I && y.usernameFragment && y.usernameFragment !== I);
  }, q = async (y) => {
    try {
      return await s.addIceCandidate(y), true;
    } catch (k) {
      if (k instanceof Error && _i.test(k.message) && typeof y.sdpMLineIndex == "number") return false;
      throw k;
    }
  }, z = async () => {
    if (!s.remoteDescription || f.length === 0) return;
    const y = f.splice(0), k = [];
    for (const I of y) {
      if (!B(I)) {
        k.push(I);
        continue;
      }
      await q(I) || k.push(I);
    }
    k.length > 0 && f.push(...k);
  }, g = async (y) => {
    if (B(y)) {
      await q(y) || f.push(y);
      return;
    }
    f.push(y);
  }, w = (y) => {
    y.binaryType = "arraybuffer", y.bufferedAmountLowThreshold = 65535, y.onmessage = (k) => {
      const I = k.data;
      i.data ? i.data(I) : l.push(I);
    }, y.onopen = () => {
      var _a2;
      return (_a2 = i.connect) == null ? void 0 : _a2.call(i);
    }, y.onclose = O, y.onerror = ({ error: k }) => {
      var _a2;
      return (_a2 = i.error) == null ? void 0 : _a2.call(i, ye(k, "data channel error"));
    };
  }, b = async (y) => {
    let k = null;
    try {
      await Promise.race([new Promise((I) => {
        const X = () => {
          y.iceGatheringState === "complete" && (y.removeEventListener(ur, X), I());
        };
        y.addEventListener(ur, X), X();
      }), new Promise((I) => {
        k = setTimeout(I, bi);
      })]);
    } finally {
      K(k);
    }
    return A(y);
  }, E = async () => {
    const y = u ? A(s) : await b(s);
    return R(y), y;
  };
  e ? (P = s.createDataChannel("data"), w(P)) : s.ondatachannel = ({ channel: y }) => {
    P = y, w(y);
  };
  const M = async (y = false) => {
    var _a2, _b;
    if (s.connectionState !== "closed") try {
      return p = true, y && (s.signalingState !== "stable" && s.signalingState !== "closed" && ((_a2 = s.localDescription) == null ? void 0 : _a2.type) === Fe && await s.setLocalDescription({ type: "rollback" }), typeof s.restartIce == "function" && s.restartIce()), await s.setLocalDescription(y ? await s.createOffer({ iceRestart: true }) : void 0), await E();
    } catch (k) {
      (_b = i.error) == null ? void 0 : _b.call(i, ye(k, "failed to create local offer"));
    } finally {
      p = false;
    }
  };
  s.onnegotiationneeded = async () => M(false), s.onicecandidate = ({ candidate: y }) => {
    if (!u || !y) return;
    const k = D(typeof y.toJSON == "function" ? y.toJSON() : { candidate: y.candidate, sdpMid: y.sdpMid, sdpMLineIndex: y.sdpMLineIndex, usernameFragment: y.usernameFragment });
    R({ type: ho, sdp: JSON.stringify(k) });
  };
  const U = () => {
    if (s.connectionState === "failed" || s.connectionState === "closed" || s.iceConnectionState === "failed" || s.iceConnectionState === "closed") {
      O();
      return;
    }
    if (s.connectionState === "connected" || s.connectionState === "connecting" || s.iceConnectionState === "connected" || s.iceConnectionState === "completed" || s.iceConnectionState === "checking") {
      m();
      return;
    }
    if (s.connectionState === "disconnected" || s.iceConnectionState === "disconnected") {
      v || (v = setTimeout(() => {
        v = null, (s.connectionState === "disconnected" || s.iceConnectionState === "disconnected") && O();
      }, Ei));
      return;
    }
  };
  s.onconnectionstatechange = U, s.addEventListener(ki, U), s.ontrack = (y) => {
    var _a2, _b;
    const k = y.streams[0];
    if (k) {
      if (!i.track && !i.stream) {
        d.push({ track: y.track, stream: k });
        return;
      }
      (_a2 = i.track) == null ? void 0 : _a2.call(i, y.track, k), (_b = i.stream) == null ? void 0 : _b.call(i, k);
    }
  }, s.onremovestream = (y) => {
    var _a2;
    return (_a2 = i.stream) == null ? void 0 : _a2.call(i, y.stream);
  };
  const W = e ? new Promise((y) => T((k) => {
    k.type === Fe && y(k);
  })) : Promise.resolve();
  return e && queueMicrotask(() => {
    var _a2;
    !p && s.signalingState === "stable" && !s.localDescription && s.connectionState !== "closed" && ((_a2 = s.onnegotiationneeded) == null ? void 0 : _a2.call(s, new Event("negotiationneeded")));
  }), { created: Date.now(), connection: s, get channel() {
    return P;
  }, get isDead() {
    return s.connectionState === "closed";
  }, getOffer: async (y = false) => {
    var _a2;
    if (e) return y ? M(true) : ((_a2 = s.localDescription) == null ? void 0 : _a2.type) === Fe ? u ? A(s) : b(s) : W;
  }, async signal(y) {
    var _a2, _b, _c;
    if (y.type === "candidate") {
      try {
        const k = JSON.parse(y.sdp);
        k && typeof k == "object" && await g(D(k));
      } catch (k) {
        (_a2 = i.error) == null ? void 0 : _a2.call(i, ye(k, "failed to parse remote candidate"));
      }
      return;
    }
    if (!((P == null ? void 0 : P.readyState) === "open" && !((_b = y.sdp) == null ? void 0 : _b.includes("a=rtpmap")))) try {
      const k = { ...y, sdp: _(y.sdp) };
      if (y.type === Fe) {
        if (p || s.signalingState !== "stable" && !h) {
          if (e) return;
          await Le([s.setLocalDescription({ type: "rollback" }), s.setRemoteDescription(k)]);
        } else await s.setRemoteDescription(k);
        return await z(), await s.setLocalDescription(), await E();
      }
      if (y.type === Oi) {
        h = true;
        try {
          await s.setRemoteDescription(k), await z();
        } finally {
          h = false;
        }
      }
    } catch (k) {
      (_c = i.error) == null ? void 0 : _c.call(i, ye(k, "failed to apply remote signal"));
    }
  }, sendData: (y) => P == null ? void 0 : P.send(y), destroy: () => {
    m(), P == null ? void 0 : P.close(), s.close(), p = false, h = false, O();
  }, setHandlers: (y) => {
    const { signal: k, ...I } = y;
    Object.assign(i, I), i.data && l.length > 0 && l.splice(0).forEach((X) => {
      var _a2;
      return (_a2 = i.data) == null ? void 0 : _a2.call(i, X);
    }), k && T(k), (i.track || i.stream) && d.length > 0 && d.splice(0).forEach(({ track: X, stream: pe }) => {
      var _a2, _b;
      (_a2 = i.track) == null ? void 0 : _a2.call(i, X, pe), (_b = i.stream) == null ? void 0 : _b.call(i, pe);
    });
  }, offerPromise: W, addStream: (y) => y.getTracks().forEach((k) => s.addTrack(k, y)), removeStream: (y) => s.getSenders().filter((k) => k.track && y.getTracks().includes(k.track)).forEach((k) => s.removeTrack(k)), addTrack: (y, k) => s.addTrack(y, k), removeTrack: (y) => {
    const k = s.getSenders().find((I) => I.track === y);
    k && s.removeTrack(k);
  }, replaceTrack: (y, k) => {
    const I = s.getSenders().find((X) => X.track === y);
    if (I) return I.replaceTrack(k);
  } };
};
const xi = [...Ve(3, (e, n) => `stun:stun${n || ""}.l.google.com:19302`), "stun:stun.cloudflare.com:3478"].map((e) => ({ urls: e })), Mi = Object.getPrototypeOf(Uint8Array), jn = 32, Di = 0, Kn = 32, hr = 34, zn = 35, vn = 36, Ae = 16 * 2 ** 10 - vn, je = 255, Li = 65535, gr = "bufferedamountlow", yr = "close", mr = "error", Ci = 1e4, Ni = (e) => e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength), Bi = (e, n = Ci) => e.readyState !== "open" || e.bufferedAmount <= e.bufferedAmountLowThreshold ? Promise.resolve(e.readyState === "open") : new Promise((t) => {
  let r = false, a = null;
  const c = (o) => {
    r || (r = true, e.removeEventListener(gr, s), e.removeEventListener(yr, i), e.removeEventListener(mr, i), K(a), t(o));
  }, s = () => c(true), i = () => c(false);
  if (e.addEventListener(gr, s), e.addEventListener(yr, i), e.addEventListener(mr, i), a = setTimeout(() => c(false), n), e.readyState !== "open") {
    c(false);
    return;
  }
  e.bufferedAmount <= e.bufferedAmountLowThreshold && c(true);
}), Ii = ({ getPeer: e, getPeerIds: n, canReceiveFromPeer: t, throwIfAborted: r }) => {
  const a = {}, c = {}, s = {}, i = {}, o = (f, d, { includePending: p = false } = {}) => (f ? Array.isArray(f) ? f : [f] : n(p)).flatMap((h) => {
    const P = e(h, p);
    return P ? [Promise.resolve(d(h, P))] : (console.warn(`${fe}: no peer with id ${h} found`), []);
  });
  return { makeInternalAction: (f, d = {}) => {
    const p = c[f];
    if (a[f] && p) {
      const m = a[f].options;
      if (m.sendToPending !== !!d.sendToPending || m.receiveWhilePending !== !!d.receiveWhilePending) throw j(`action type "${f}" cannot be redefined`);
      return p;
    }
    if (!f) throw j("action type argument is required");
    const h = ve(f);
    if (h.byteLength > jn) throw j(`action type string "${f}" (${h.byteLength}b) exceeds byte limit (${jn}). Hint: choose a shorter name.`);
    const P = { sendToPending: !!d.sendToPending, receiveWhilePending: !!d.receiveWhilePending }, v = new Uint8Array(jn);
    v.set(h);
    let S = 0;
    return a[f] = { onComplete: V, onProgress: V, setOnComplete: (m) => {
      a[f].onComplete = m;
      const O = i[f];
      (O == null ? void 0 : O.length) && (delete i[f], O.forEach(({ payload: R, peerId: T, metadata: _ }) => m(R, T, _)));
    }, setOnProgress: (m) => {
      a[f].onProgress = m;
    }, send: async (m, O, R, T, _) => {
      r(_);
      const D = typeof m;
      if (D === "undefined") throw j("action data cannot be undefined");
      const A = D !== "string", H = m instanceof Blob, $ = H || m instanceof ArrayBuffer || m instanceof Mi, B = R !== void 0, q = $ ? Ni(H ? await m.arrayBuffer() : m) : ve(A ? re(m) : m), z = B ? ve(re(R)) : null, g = Math.ceil(q.byteLength / Ae) + (B ? 1 : 0) || 1, w = Ve(g, (b, E) => {
        const M = E === g - 1, U = !!(B && E === 0), W = new Uint8Array(vn + (U ? (z == null ? void 0 : z.byteLength) ?? 0 : M ? q.byteLength - Ae * (g - (B ? 2 : 1)) : Ae));
        return W.set(v), W.set([S >> 8, S & je], Kn), W.set([Number(M) | Number(U) << 1 | Number($) << 2 | Number(A) << 3], hr), W.set([Math.round((E + 1) / g * je)], zn), W.set(B ? U ? z ?? new Uint8Array() : q.subarray((E - 1) * Ae, E * Ae) : q.subarray(E * Ae, (E + 1) * Ae), vn), W;
      });
      return S = S + 1 & Li, await Le(o(O, async (b, E) => {
        const { channel: M } = E;
        let U = 0;
        for (; U < g; ) {
          r(_);
          const W = w[U];
          if (!W) break;
          if (M && M.bufferedAmount > M.bufferedAmountLowThreshold) {
            const I = await Bi(M);
            if (r(_), !I) break;
          }
          const y = e(b, P.sendToPending);
          if (!y || y !== E) break;
          E.sendData(W), U++;
          const k = W[zn] ?? je;
          T == null ? void 0 : T(k / je, b, R);
        }
      }, { includePending: P.sendToPending })), [];
    }, options: P }, c[f] = { send: a[f].send, onMessage: a[f].setOnComplete, onProgress: a[f].setOnProgress };
  }, handleData: (f, d) => {
    var _a2, _b;
    const p = new Uint8Array(d), h = ke(p.subarray(Di, Kn)).replaceAll("\0", ""), P = a[h];
    if (!t(f, !!(P == null ? void 0 : P.options.receiveWhilePending))) return;
    const v = (p[Kn] ?? 0) << 8 | (p[33] ?? 0), S = p[hr] ?? 0, m = p[zn] ?? 0, O = p.subarray(vn), R = !!(S & 1), T = !!(S & 2), _ = !!(S & 4), D = !!(S & 8);
    s[f] ?? (s[f] = {}), (_a2 = s[f])[h] ?? (_a2[h] = {});
    const A = (_b = s[f][h])[v] ?? (_b[v] = { chunks: [] });
    if (T ? A.meta = nn(ke(O)) : A.chunks.push(O), P == null ? void 0 : P.onProgress(m / je, f, A.meta), !R) return;
    const H = new Uint8Array(A.chunks.reduce((B, q) => B + q.byteLength, 0));
    A.chunks.reduce((B, q) => (H.set(q, B), B + q.byteLength), 0), delete s[f][h][v];
    const $ = _ ? H : D ? nn(ke(H)) : ke(H);
    if (P) {
      P.onComplete($, f, A.meta);
      return;
    }
    (i[h] ?? (i[h] = [])).push({ payload: $, peerId: f, ...A.meta === void 0 ? {} : { metadata: A.meta } });
  }, clearPeer: (f) => {
    delete s[f];
  } };
}, Hi = 500, Ne = (e, n) => {
  const t = j(n);
  return t.kind = e, t.name = e === "aborted" ? "AbortError" : t.name, t;
}, Wn = (e) => {
  if (e == null ? void 0 : e.aborted) throw Ne("aborted", "operation aborted");
}, vr = (e) => e && typeof e == "object" && !Array.isArray(e) && typeof e.r == "string" ? { r: e.r, ...Object.hasOwn(e, "m") ? { m: e.m } : {} } : null, $i = (e) => e && typeof e == "object" && !Array.isArray(e) && typeof e.r == "string" ? { r: e.r, ...typeof e.e == "string" ? { e: e.e } : {} } : null, fn = (e, n) => n === void 0 ? e : { ...e, metadata: n }, qi = ({ getPeer: e, getPeerIds: n, canReceiveFromPeer: t }) => {
  const r = {}, a = {}, c = Ii({ getPeer: e, getPeerIds: n, canReceiveFromPeer: t, throwIfAborted: Wn }), s = c.makeInternalAction, i = c.handleData, o = (p) => {
    const h = a[p];
    h && (K(h.timer), h.signal && h.abortHandler && h.signal.removeEventListener("abort", h.abortHandler), delete a[p]);
  }, l = (p, h) => {
    Oe(a).forEach(([P, v]) => {
      v.peerId === p && (o(P), v.reject(h));
    });
  }, u = (p, h) => {
    c.clearPeer(p), l(p, Ne("disconnected", $e(h, "peer disconnected")));
  }, f = s("@_response");
  return f.onMessage((p, h, P) => {
    const v = $i(P);
    if (!v) return;
    const S = a[v.r];
    if (!(!S || S.peerId !== h)) {
      if (o(v.r), v.e !== void 0) {
        S.reject(Ne("rejected", v.e));
        return;
      }
      S.resolve(p);
    }
  }), { makeAction: (p, h) => {
    if (h && "onRequest" in h && h.kind !== "request") throw j('request actions must use kind: "request"');
    const P = (h == null ? void 0 : h.kind) ?? "message", v = s(p), S = r[p];
    if (S) {
      if (S.kind !== P) throw j(`action type "${p}" cannot be redefined`);
      return S.action;
    }
    const m = { kind: P, action: null, pendingMessages: [], pendingRequests: [], onReceiveProgress: (h == null ? void 0 : h.onReceiveProgress) ?? null }, O = (g, w) => g ? (b, E) => g(b, fn({ peerId: E }, w)) : void 0, R = (g) => {
      m.onReceiveProgress = g;
    }, T = (g, w, b) => {
      var _a2;
      const E = m.kind === "request" ? vr(b) : null;
      (_a2 = m.onReceiveProgress) == null ? void 0 : _a2.call(m, g, fn({ peerId: w }, E ? E.m : b));
    };
    if (v.onProgress(T), P === "message") {
      let g = (h == null ? void 0 : h.onMessage) ?? null;
      const w = () => {
        if (!g) return;
        const E = g;
        m.pendingMessages.splice(0).forEach(({ payload: M, peerId: U, metadata: W }) => {
          Promise.resolve().then(() => E(M, fn({ peerId: U }, W))).catch((y) => console.error(`${fe} action handler error:`, y));
        });
      }, b = { send: async (E, M = {}) => {
        await v.send(E, M.target, M.metadata, O(M.onProgress, M.metadata), M.signal);
      }, get onMessage() {
        return g;
      }, set onMessage(E) {
        g = E, w();
      }, get onReceiveProgress() {
        return m.onReceiveProgress;
      }, set onReceiveProgress(E) {
        R(E);
      } };
      return v.onMessage((E, M, U) => {
        if (!g) {
          m.pendingMessages.push(U === void 0 ? { payload: E, peerId: M } : { payload: E, peerId: M, metadata: U });
          return;
        }
        const W = g;
        Promise.resolve().then(() => W(E, fn({ peerId: M }, U))).catch((y) => console.error(`${fe} action handler error:`, y));
      }), m.action = b, r[p] = m, w(), b;
    }
    let _ = (h == null ? void 0 : h.onRequest) ?? null;
    const D = (g) => {
      K(g.timer);
      const w = m.pendingRequests.indexOf(g);
      w > -1 && m.pendingRequests.splice(w, 1);
    }, A = (g, w, b) => {
      f.send(null, g, { r: w, e: $e(b, "request failed") });
    }, H = (g, w) => {
      D(g), Promise.resolve().then(() => w(g.payload, { peerId: g.peerId, ...g.metadata === void 0 ? {} : { metadata: g.metadata }, signal: g.controller.signal })).then(async (b) => {
        if (b === void 0) throw j("request handler returned undefined");
        await f.send(b, g.peerId, { r: g.requestId });
      }).catch((b) => A(g.peerId, g.requestId, b)).finally(() => g.controller.abort());
    }, $ = () => {
      _ && m.pendingRequests.slice().forEach((g) => H(g, _));
    }, B = (g, w, b, E) => {
      if (_) {
        H({ payload: g, peerId: w, ...b === void 0 ? {} : { metadata: b }, requestId: E, controller: new AbortController(), timer: null }, _);
        return;
      }
      const M = { payload: g, peerId: w, ...b === void 0 ? {} : { metadata: b }, requestId: E, controller: new AbortController(), timer: setTimeout(() => {
        D(M), M.controller.abort(), A(w, E, "request handler unavailable");
      }, Hi) };
      m.pendingRequests.push(M);
    }, q = async (g, w) => {
      const { target: b, metadata: E, onProgress: M, signal: U, timeoutMs: W } = w;
      if (Wn(U), !e(b, false)) throw Ne("disconnected", `no active peer with id ${b}`);
      const y = Ue(20), k = new Promise((I, X) => {
        const pe = { peerId: b, resolve: I, reject: X, timer: null, ...U === void 0 ? {} : { signal: U } }, he = () => {
          o(y), X(Ne("aborted", "operation aborted"));
        };
        U && (pe.abortHandler = he, U.addEventListener("abort", he, { once: true })), a[y] = pe;
      }).catch((I) => {
        throw I;
      });
      try {
        await v.send(g, b, E === void 0 ? { r: y } : { r: y, m: E }, O(M, E), U);
        const I = a[y];
        return I && W !== void 0 && (I.timer = setTimeout(() => {
          o(y), I.reject(Ne("timeout", "request timed out"));
        }, W)), await k;
      } catch (I) {
        throw o(y), I;
      }
    }, z = { request: q, requestMany: async (g, w) => (Wn(w.signal), await Le(w.targets.map(async (b) => {
      var _a2, _b;
      try {
        const E = { peerId: b, status: "fulfilled", value: await q(g, { target: b, ...w.metadata === void 0 ? {} : { metadata: w.metadata }, ...w.timeoutMs === void 0 ? {} : { timeoutMs: w.timeoutMs }, ...w.onProgress === void 0 ? {} : { onProgress: w.onProgress }, ...w.signal === void 0 ? {} : { signal: w.signal } }) };
        return (_a2 = w.onResult) == null ? void 0 : _a2.call(w, E), E;
      } catch (E) {
        const M = ye(E, "request failed");
        if (M.kind === "aborted" || !M.kind) throw M;
        const U = M.kind === "timeout" ? { peerId: b, status: "timeout" } : M.kind === "disconnected" ? { peerId: b, status: "disconnected" } : { peerId: b, status: "rejected", error: M };
        return (_b = w.onResult) == null ? void 0 : _b.call(w, U), U;
      }
    }))), get onRequest() {
      return _;
    }, set onRequest(g) {
      _ = g, $();
    }, get onReceiveProgress() {
      return m.onReceiveProgress;
    }, set onReceiveProgress(g) {
      R(g);
    } };
    return v.onMessage((g, w, b) => {
      const E = vr(b);
      E && B(g, w, E.m, E.r);
    }), m.action = z, r[p] = m, $(), z;
  }, makeInternalAction: s, handleData: i, clearPeer: u };
}, wr = (e) => e && typeof e == "object" && !Array.isArray(e) && typeof e.k == "string" ? { key: e.k, ...typeof e.s == "string" ? { streamId: e.s } : {}, ...typeof e.t == "string" ? { trackId: e.t } : {}, ...Object.hasOwn(e, "m") ? { metadata: e.m } : {} } : null, Pr = (e) => (n) => {
  let t = e.get(n);
  return t || (t = Ue(20), e.set(n, t)), t;
}, vo = () => {
  const e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  return { getStreamKey: Pr(e), getTrackKey: Pr(n), rememberRemoteStream: (s, i, o) => {
    t.set(s, i), o && r.set(o, i);
  }, getRemoteStream: (s, i) => t.get(s) ?? (i ? r.get(i) : void 0), rememberRemoteTrack: (s, i, o, l, u) => {
    const f = { track: i, stream: o };
    a.set(s, f), l && c.set(l, f), u && r.set(u, o);
  }, getRemoteTrack: (s, i) => a.get(s) ?? (i ? c.get(i) : void 0), clearRemote: () => {
    t.clear(), r.clear(), a.clear(), c.clear();
  } };
}, Ui = ({ iterate: e, isActive: n, getSharedMediaPeer: t }) => {
  const r = {}, a = {}, c = vo(), s = { onPeerStream: null, onPeerTrack: null }, i = (u, f, d, p) => {
    var _a2, _b, _c;
    n(u) && ((_b = (_a2 = t(u)) == null ? void 0 : _a2.__trysteroMedia) == null ? void 0 : _b.rememberRemoteStream(f, d, typeof d.id == "string" ? d.id : void 0), (_c = s.onPeerStream) == null ? void 0 : _c.call(s, d, u, p));
  }, o = (u, f, d, p, h) => {
    var _a2, _b, _c;
    n(u) && ((_b = (_a2 = t(u)) == null ? void 0 : _a2.__trysteroMedia) == null ? void 0 : _b.rememberRemoteTrack(f, d, p, typeof d.id == "string" ? d.id : void 0, typeof p.id == "string" ? p.id : void 0), (_c = s.onPeerTrack) == null ? void 0 : _c.call(s, d, p, u, h));
  }, l = (u, f, d, p, h, P = {}) => {
    const v = { k: f, ...P, ...d === void 0 ? {} : { m: d } };
    return e(u, async (S, m) => {
      await p(v, S), h(m);
    });
  };
  return { addStream: (u, f, d) => l(f.target, c.getStreamKey(u), f.metadata, d, (p) => p.addStream(u), { s: u.id }), removeStream: (u, f) => {
    e(f, (d, p) => p.removeStream(u));
  }, addTrack: (u, f, d, p) => l(d.target, c.getTrackKey(u), d.metadata, p, (h) => h.addTrack(u, f), { s: f.id, t: u.id }), removeTrack: (u, f) => {
    e(f, (d, p) => p.removeTrack(u));
  }, replaceTrack: (u, f, d, p) => l(d.target, c.getTrackKey(f), d.metadata, p, (h) => h.replaceTrack(u, f), { t: u.id }), receiveStreamMeta: (u, f) => {
    var _a2, _b;
    if (!n(f)) return;
    const d = wr(u);
    if (!d) return;
    const p = (_b = (_a2 = t(f)) == null ? void 0 : _a2.__trysteroMedia) == null ? void 0 : _b.getRemoteStream(d.key, d.streamId);
    if (p) {
      i(f, d.key, p, d.metadata);
      return;
    }
    (r[f] ?? (r[f] = [])).push(d);
  }, receiveTrackMeta: (u, f) => {
    var _a2, _b;
    if (!n(f)) return;
    const d = wr(u);
    if (!d) return;
    const p = (_b = (_a2 = t(f)) == null ? void 0 : _a2.__trysteroMedia) == null ? void 0 : _b.getRemoteTrack(d.key, d.trackId);
    if (p) {
      o(f, d.key, p.track, p.stream, d.metadata);
      return;
    }
    (a[f] ?? (a[f] = [])).push(d);
  }, receiveRemoteStream: (u, f) => {
    var _a2;
    if (!n(u)) return;
    const d = (_a2 = r[u]) == null ? void 0 : _a2.shift();
    d && i(u, d.key, f, d.metadata);
  }, receiveRemoteTrack: (u, f, d) => {
    var _a2;
    if (!n(u)) return;
    const p = (_a2 = a[u]) == null ? void 0 : _a2.shift();
    p && o(u, p.key, f, d, p.metadata);
  }, clearPeer: (u) => {
    delete r[u], delete a[u];
  }, get onPeerStream() {
    return s.onPeerStream;
  }, set onPeerStream(u) {
    s.onPeerStream = u;
  }, get onPeerTrack() {
    return s.onPeerTrack;
  }, set onPeerTrack(u) {
    s.onPeerTrack = u;
  } };
}, Sr = "beforeunload", Fi = 1e4, ge = (e) => "@_" + e, We = /* @__PURE__ */ new Set(), Tr = () => We.forEach((e) => e()), ji = (e) => (We.add(e), We.size === 1 && addEventListener(Sr, Tr), () => {
  We.delete(e), We.size || removeEventListener(Sr, Tr);
});
var Ki = (e, n, t, { onPeerHandshake: r, onHandshakeError: a, handshakeTimeoutMs: c = Fi, isPassive: s = false } = {}) => {
  const i = {}, o = {}, l = {}, u = { onPeerJoin: null, onPeerLeave: null };
  let f = V, d = null;
  const p = (g, w, { includePending: b = false } = {}) => (g ? Array.isArray(g) ? g : [g] : se(b ? i : o)).flatMap((E) => {
    const M = b ? i[E] : o[E];
    return M ? [Promise.resolve(w(E, M))] : (console.warn(`${fe}: no peer with id ${E} found`), []);
  }), h = Ui({ iterate: (g, w) => p(g, (b, E) => w(b, E)), isActive: (g) => !!o[g], getSharedMediaPeer: (g) => i[g] ?? null }), P = qi({ getPeer: (g, w) => (w ? i : o)[g], getPeerIds: (g) => se(g ? i : o), canReceiveFromPeer: (g, w) => !!(d == null ? void 0 : d.canReceiveFromPeer(g, w)) }), v = P.makeInternalAction, S = P.handleData, m = P.makeAction, O = (g, w = j("peer disconnected")) => {
    var _a2;
    const b = ye(w, "peer disconnected");
    d == null ? void 0 : d.clearPeer(g, b), delete i[g], delete o[g], P.clearPeer(g, b), (_a2 = l[g]) == null ? void 0 : _a2.splice(0).forEach((E) => E.reject(b)), delete l[g], h.clearPeer(g);
  }, R = (g, w, b) => {
    var _a2;
    const E = i[g];
    if (!E || w && E !== w) return;
    const M = !!o[g];
    O(g, b), E.destroy(), M && ((_a2 = u.onPeerLeave) == null ? void 0 : _a2.call(u, g)), n(g);
  }, T = async () => {
    await B.send(""), await new Promise((g) => setTimeout(g, 99)), Oe(i).forEach(([g, w]) => {
      w.destroy(), O(g, j("room left"));
    }), f(), t();
  }, _ = v(ge("ping")), D = v(ge("pong")), A = v(ge("signal")), H = v(ge("stream")), $ = v(ge("track")), B = v(ge("leave"), { sendToPending: true, receiveWhilePending: true }), q = v(ge("hsdata"), { sendToPending: true, receiveWhilePending: true }), z = v(ge("hsready"), { sendToPending: true, receiveWhilePending: true });
  return d = Ri({ ...r === void 0 ? {} : { onPeerHandshake: r }, ...a === void 0 ? {} : { onHandshakeError: a }, handshakeTimeoutMs: c, sendHandshakeData: q.send, sendHandshakeReady: z.send, onActivate: (g, w) => {
    var _a2;
    o[g] = w, (_a2 = u.onPeerJoin) == null ? void 0 : _a2.call(u, g);
  }, onFailure: (g, w, b) => R(g, w, b) }), _.onMessage((g, w) => D.send("", w)), D.onMessage((g, w) => {
    var _a2;
    const b = l[w];
    (_a2 = b == null ? void 0 : b.shift()) == null ? void 0 : _a2.resolve(), b && !b.length && delete l[w];
  }), A.onMessage((g, w) => {
    var _a2;
    o[w] && ((_a2 = i[w]) == null ? void 0 : _a2.signal(g));
  }), H.onMessage((g, w) => h.receiveStreamMeta(g, w)), $.onMessage((g, w) => h.receiveTrackMeta(g, w)), B.onMessage((g, w) => R(w, void 0, j("peer left room"))), q.onMessage((g, w, b) => d == null ? void 0 : d.receiveHandshakeData(g, w, b)), z.onMessage((g, w) => d == null ? void 0 : d.receiveHandshakeReady(w)), e((g, w) => {
    const b = i[w];
    if (b) {
      if (b === g) return;
      b.destroy(), O(w, j("peer replaced"));
    }
    i[w] = g, d == null ? void 0 : d.addPeer(w, g), g.setHandlers({ data: (E) => S(w, E), stream: (E) => h.receiveRemoteStream(w, E), track: (E, M) => h.receiveRemoteTrack(w, E, M), signal: (E) => {
      o[w] && A.send(E, w);
    }, close: () => R(w, g, j("peer disconnected")), error: (E) => {
      console.error(`${fe} peer error:`, E), R(w, g, E);
    } }), d == null ? void 0 : d.start(w, g);
  }), uo && (f = ji(() => T().catch(V))), { makeAction: m, leave: T, ping: async (g) => {
    if (!o[g]) throw j(`no active peer with id ${g}`);
    const w = Date.now();
    return await new Promise((b, E) => {
      const M = l[g] ?? (l[g] = []), U = () => {
        const y = l[g];
        if (!y) return;
        const k = y.indexOf(W);
        k > -1 && y.splice(k, 1), y.length || delete l[g];
      }, W = { resolve: () => {
        U(), b();
      }, reject: (y) => {
        U(), E(y);
      } };
      M.push(W), _.send("", g).catch((y) => W.reject(ye(y, "peer disconnected")));
    }), Date.now() - w;
  }, isPassive: () => s, getPeers: () => po(Oe(o).map(([g, w]) => [g, w.connection])), addStream: (g, w = {}) => h.addStream(g, w, H.send), removeStream: (g, w = {}) => {
    h.removeStream(g, w.target);
  }, addTrack: (g, w, b = {}) => h.addTrack(g, w, b, $.send), removeTrack: (g, w = {}) => {
    h.removeTrack(g, w.target);
  }, replaceTrack: (g, w, b = {}) => h.replaceTrack(g, w, b, $.send), get onPeerJoin() {
    return u.onPeerJoin;
  }, set onPeerJoin(g) {
    u.onPeerJoin = g, g && se(o).forEach((w) => g(w));
  }, get onPeerLeave() {
    return u.onPeerLeave;
  }, set onPeerLeave(g) {
    u.onPeerLeave = g;
  }, get onPeerStream() {
    return h.onPeerStream;
  }, set onPeerStream(g) {
    h.onPeerStream = g;
  }, get onPeerTrack() {
    return h.onPeerTrack;
  }, set onPeerTrack(g) {
    h.onPeerTrack = g;
  } };
};
const wo = 1, Po = 2, Ar = (e, n) => {
  const t = ve(e), r = new Uint8Array(3 + t.byteLength + n.byteLength);
  return r[0] = wo, r[1] = t.byteLength >>> 8 & 255, r[2] = t.byteLength & 255, r.set(t, 3), r.set(n, 3 + t.byteLength), r;
}, zi = (e, n) => {
  const t = ve(e), r = new Uint8Array(4 + t.byteLength);
  return r[0] = Po, r[1] = Number(n), r[2] = t.byteLength >>> 8 & 255, r[3] = t.byteLength & 255, r.set(t, 4), r;
}, Wi = (e) => {
  const n = new Uint8Array(e);
  if (n.byteLength < 3) return null;
  if (n[0] === wo) {
    const a = (n[1] ?? 0) << 8 | (n[2] ?? 0), c = 3 + a;
    return a <= 0 || n.byteLength < c ? null : { type: "room", roomToken: ke(n.subarray(3, c)), payload: n.subarray(c).slice().buffer };
  }
  if (n[0] !== Po || n.byteLength < 4) return null;
  const t = (n[2] ?? 0) << 8 | (n[3] ?? 0), r = 4 + t;
  return t <= 0 || n.byteLength < r ? null : { type: "presence", roomToken: ke(n.subarray(4, r)), isPresent: n[1] === 1 };
}, So = (e) => {
  const { connection: n, channel: t } = e;
  return e.isDead || n.connectionState === "closed" || n.connectionState === "failed" || n.iceConnectionState === "closed" || n.iceConnectionState === "failed" || (t == null ? void 0 : t.readyState) === "closing" || (t == null ? void 0 : t.readyState) === "closed";
}, Xi = (e) => {
  if (So(e)) return "stale";
  const { channel: n } = e;
  return !n || n.readyState !== "open" ? "transient" : "live";
};
var Yi = class {
  constructor() {
    __publicField(this, "byApp", {});
    __publicField(this, "roomPresenceHandlers", {});
  }
  getMap(e) {
    var _a2;
    return (_a2 = this.byApp)[e] ?? (_a2[e] = {});
  }
  get(e, n) {
    var _a2;
    return (_a2 = this.byApp[e]) == null ? void 0 : _a2[n];
  }
  isPeerStale(e) {
    return So(e);
  }
  getHealth(e) {
    return this.isPeerStale(e) ? "stale" : "live";
  }
  setRoomPresenceHandler(e, n) {
    return this.roomPresenceHandlers[e] = n, () => {
      this.roomPresenceHandlers[e] === n && delete this.roomPresenceHandlers[e];
    };
  }
  sendRoomPresence(e, n, t) {
    e.isClosing || e.peer.isDead || e.peer.sendData(zi(n, t));
  }
  clear(e, n, { destroyPeer: t }) {
    const r = this.byApp[e], a = r == null ? void 0 : r[n];
    if (!a || a.isClosing) return;
    a.idleTimer = K(a.idleTimer), a.isClosing = true, t && !a.peer.isDead && a.peer.destroy();
    const c = Ie(a.bindings);
    a.bindings = {}, a.bindingsByToken = {}, a.controlRoomId = null, delete r[n], c.forEach((s) => {
      var _a2, _b;
      (_b = (_a2 = s.handlers).close) == null ? void 0 : _b.call(_a2), s.pendingData.length = 0, s.pendingSendData.length = 0, s.pendingTracks.length = 0;
    }), a.media.clearRemote(), a.pendingDataByToken.clear(), a.remoteRoomTokens.clear(), se(r).length === 0 && delete this.byApp[e];
  }
  register(e, n, t, r) {
    const a = this.getMap(e), c = a[n];
    if (c) {
      if (c.idleTimer = K(c.idleTimer), c.peer === t) return c;
      this.clear(e, n, { destroyPeer: true });
    }
    const s = { appId: e, peerId: n, peer: t, bindings: {}, bindingsByToken: {}, pendingDataByToken: /* @__PURE__ */ new Map(), remoteRoomTokens: /* @__PURE__ */ new Set(), idleTimer: null, controlRoomId: null, streamOwners: /* @__PURE__ */ new Map(), trackOwners: /* @__PURE__ */ new Map(), media: vo(), idleMs: r, isClosing: false };
    return t.setHandlers({ data: (i) => this.dispatchData(s, i), signal: (i) => this.dispatchSignal(s, i), close: () => this.clear(e, n, { destroyPeer: false }), error: (i) => {
      console.error(`${fe} peer error:`, i), this.clear(e, n, { destroyPeer: false });
    }, track: (i, o) => this.dispatchTrack(s, i, o) }), a[n] = s, s;
  }
  bind(e, n, t, { onDetach: r }) {
    const a = t.bindings[e];
    if (a) return t.idleTimer = K(t.idleTimer), { proxy: a.proxy, isNew: false };
    const c = { roomId: e, roomToken: null, roomTokenPromise: n, handlers: {}, pendingData: [], pendingSendData: [], pendingTracks: [], detach: V, proxy: {} }, s = () => {
      t.bindings[e] && (this.pruneRoomOwnership(t, e), delete t.bindings[e], c.roomToken && t.bindingsByToken[c.roomToken] === c && delete t.bindingsByToken[c.roomToken], t.controlRoomId === e && (t.controlRoomId = se(t.bindings)[0] ?? null), r(), this.scheduleIdleTimer(t));
    }, i = { created: t.peer.created, get connection() {
      return t.peer.connection;
    }, get channel() {
      return t.peer.channel;
    }, get isDead() {
      return t.peer.isDead;
    }, getOffer: (o) => t.peer.getOffer(o), signal: (o) => t.peer.signal(o), sendData: (o) => {
      if (!c.roomToken) {
        c.pendingSendData.push(o);
        return;
      }
      t.peer.sendData(Ar(c.roomToken, o));
    }, destroy: () => s(), setHandlers: (o) => {
      const { signal: l, ...u } = o;
      Object.assign(c.handlers, u), l && (c.handlers.signal = l), this.flushBindingQueues(c);
    }, offerPromise: t.peer.offerPromise, addStream: (o) => {
      const l = t.streamOwners.get(o) ?? /* @__PURE__ */ new Set(), u = l.size === 0;
      l.add(e), t.streamOwners.set(o, l), u && t.peer.addStream(o);
    }, removeStream: (o) => {
      const l = t.streamOwners.get(o);
      l && (l.delete(e), l.size === 0 && (t.streamOwners.delete(o), t.peer.removeStream(o)));
    }, addTrack: (o, l) => {
      const u = t.trackOwners.get(o) ?? { stream: l, rooms: /* @__PURE__ */ new Set() }, f = u.rooms.size === 0;
      return u.stream = l, u.rooms.add(e), t.trackOwners.set(o, u), f ? t.peer.addTrack(o, l) : t.peer.connection.getSenders().find((d) => d.track === o) ?? t.peer.addTrack(o, l);
    }, removeTrack: (o) => {
      const l = t.trackOwners.get(o);
      l && (l.rooms.delete(e), l.rooms.size === 0 && (t.trackOwners.delete(o), t.peer.removeTrack(o)));
    }, replaceTrack: (o, l) => {
      const u = t.trackOwners.get(o);
      if (u) {
        t.trackOwners.delete(o);
        const f = t.trackOwners.get(l) ?? { stream: u.stream, rooms: /* @__PURE__ */ new Set() };
        u.rooms.forEach((d) => f.rooms.add(d)), t.trackOwners.set(l, f);
      }
      return t.peer.replaceTrack(o, l);
    }, __trysteroMedia: t.media };
    return c.proxy = i, c.detach = s, t.bindings[e] = c, t.controlRoomId ?? (t.controlRoomId = e), t.idleTimer = K(t.idleTimer), n.then((o) => {
      if (t.isClosing || t.bindings[e] !== c) return;
      c.roomToken = o, t.bindingsByToken[o] = c;
      const l = t.pendingDataByToken.get(o);
      (l == null ? void 0 : l.length) && (c.pendingData.push(...l), t.pendingDataByToken.delete(o)), c.pendingSendData.splice(0).forEach((u) => t.peer.sendData(Ar(o, u))), this.flushBindingQueues(c);
    }), { proxy: i, isNew: true };
  }
  pruneRoomOwnership(e, n) {
    e.streamOwners.forEach((t, r) => {
      t.delete(n), t.size === 0 && (e.streamOwners.delete(r), e.peer.removeStream(r));
    }), e.trackOwners.forEach((t, r) => {
      t.rooms.delete(n), t.rooms.size === 0 && (e.trackOwners.delete(r), e.peer.removeTrack(r));
    });
  }
  scheduleIdleTimer(e) {
    e.isClosing || se(e.bindings).length > 0 || (e.idleTimer = K(e.idleTimer), e.idleTimer = setTimeout(() => {
      var _a2;
      const n = (_a2 = this.byApp[e.appId]) == null ? void 0 : _a2[e.peerId];
      !n || se(n.bindings).length > 0 || this.clear(e.appId, e.peerId, { destroyPeer: true });
    }, e.idleMs));
  }
  getSignalBinding(e) {
    if (e.controlRoomId) {
      const t = e.bindings[e.controlRoomId];
      if (t == null ? void 0 : t.handlers.signal) return t;
    }
    const n = Ie(e.bindings).find((t) => !!t.handlers.signal);
    return n ? (e.controlRoomId = n.roomId, n) : null;
  }
  flushBindingQueues(e) {
    const { handlers: n } = e;
    n.data && e.pendingData.length > 0 && e.pendingData.splice(0).forEach((t) => {
      var _a2;
      return (_a2 = n.data) == null ? void 0 : _a2.call(n, t);
    }), (n.track || n.stream) && e.pendingTracks.length && e.pendingTracks.splice(0).forEach(({ track: t, stream: r }) => {
      var _a2, _b;
      (_a2 = n.track) == null ? void 0 : _a2.call(n, t, r), (_b = n.stream) == null ? void 0 : _b.call(n, r);
    });
  }
  dispatchData(e, n) {
    var _a2, _b;
    const t = Wi(n);
    if (!t) return;
    if (t.type === "presence") {
      t.isPresent ? e.remoteRoomTokens.add(t.roomToken) : e.remoteRoomTokens.delete(t.roomToken), (_b = (_a2 = this.roomPresenceHandlers)[e.appId]) == null ? void 0 : _b.call(_a2, e.peerId, t.roomToken, t.isPresent);
      return;
    }
    const r = e.bindingsByToken[t.roomToken];
    if (!r) {
      const a = e.pendingDataByToken.get(t.roomToken) ?? [];
      a.push(t.payload), e.pendingDataByToken.set(t.roomToken, a);
      return;
    }
    r.handlers.data ? r.handlers.data(t.payload) : r.pendingData.push(t.payload);
  }
  dispatchSignal(e, n) {
    var _a2, _b, _c;
    (_c = (_a2 = this.getSignalBinding(e)) == null ? void 0 : (_b = _a2.handlers).signal) == null ? void 0 : _c.call(_b, n);
  }
  dispatchTrack(e, n, t) {
    Ie(e.bindings).forEach((r) => {
      var _a2, _b, _c, _d;
      if (r.handlers.track || r.handlers.stream) {
        (_b = (_a2 = r.handlers).track) == null ? void 0 : _b.call(_a2, n, t), (_d = (_c = r.handlers).stream) == null ? void 0 : _d.call(_c, t);
        return;
      }
      r.pendingTracks.push({ track: n, stream: t });
    });
  }
};
const Ji = 23333, Gi = 12, Zi = 7533, Vi = 23333, ft = "__legacy__", bn = "offer-placeholder", Qi = ["offer", "answer", "candidate"], ea = (e) => {
  if (typeof e == "string") try {
    const n = nn(e);
    return n && typeof n == "object" ? n : null;
  } catch {
    return null;
  }
  return e && typeof e == "object" ? e : null;
}, Ke = (e, n) => typeof e[n] == "string" && e[n] ? e[n] : void 0, na = (e) => Qi.some((n) => n in e && (typeof e[n] != "string" || e[n] === "")), To = (e, n, t, r, a, c) => {
  e.toCipher(n).then((s) => {
    e.isLeaving() || !c() || r(t, re(a(s.sdp)));
  });
}, ta = () => ({ status: "idle", offerPeer: null, offerId: null, offerSdp: null, offerInitPromise: null, offerAnswered: false, offerRelays: [], offerSignalRelays: [], offerSignalBacklog: [], offerRelayTimers: [], offerExpiryTimer: null, connectedPeer: null, connectedPeerUnhealthySinceMs: null, answeringExpiryTimer: null, answeringPeer: null, answerSent: false, connectionErrorReported: false, pendingCandidates: {} }), ra = (e) => {
  var _a2;
  return [...e.turnConfig ?? [], ...((_a2 = e.rtcConfig) == null ? void 0 : _a2.iceServers) ?? []].some(({ urls: n }) => (Array.isArray(n) ? n : [n]).some((t) => /^turns?:/i.test(t)));
}, oa = (e, n) => `could not connect to peer ${e} after exchanging SDP; ${ra(n) ? "check that your TURN server URLs and credentials are reachable by both peers" : "configure TURN servers with turnConfig or rtcConfig.iceServers"}`, Mn = (e, n, t) => {
  var _a2;
  e.isLeaving() || n.connectedPeer || n.connectionErrorReported || (n.connectionErrorReported = true, (_a2 = e.onJoinError) == null ? void 0 : _a2.call(e, { error: oa(t, e.config), appId: e.appId, peerId: t, roomId: e.roomId }));
}, rn = (e, n) => e[n] ?? (e[n] = ta()), ie = (e) => {
  e.connectedPeer ? e.status = "connected" : e.answeringPeer ? e.status = "answering" : e.offerPeer || e.offerRelays.some(Boolean) ? e.status = "offering" : e.status = "idle";
}, wn = (e, n) => {
  e.answeringPeer === n && (e.answeringExpiryTimer = K(e.answeringExpiryTimer), e.answeringPeer = null, e.answerSent = false, ie(e));
}, lt = (e, n, t) => {
  e.connectedPeer && (e.connectedPeer.isDead || e.connectedPeer.destroy(), e.connectedPeer = null, e.connectedPeerUnhealthySinceMs = null, ie(e));
}, _t = (e, n) => {
  e.offerRelayTimers[n] = K(e.offerRelayTimers[n]), e.offerRelays[n] && (e.offerRelays[n] = void 0, ie(e));
}, Rr = (e, n) => {
  (e == null ? void 0 : e.offerRelays[n]) === bn && _t(e, n);
}, sa = (e) => {
  if (e.isDead || e.connection.connectionState === "closed") return true;
  try {
    return !!e.connection.remoteDescription;
  } catch {
    return true;
  }
}, on = (e, n) => {
  const t = e.offerAnswered;
  e.offerExpiryTimer = K(e.offerExpiryTimer), e.offerInitPromise = null, e.offerRelays.forEach((r, a) => _t(e, a)), e.offerRelays = [], e.offerSignalRelays = [], e.offerRelayTimers = [], e.offerSignalBacklog = [], e.offerPeer && e.offerPeer !== e.connectedPeer && (t || sa(e.offerPeer) ? e.offerPeer.isDead || e.offerPeer.destroy() : n.recycle(e.offerPeer)), e.offerPeer = null, e.offerId = null, e.offerSdp = null, e.offerAnswered = false, e.connectionErrorReported = false, ie(e);
}, ia = (e, n, t, r) => {
  K(n.answeringExpiryTimer), n.answeringExpiryTimer = setTimeout(() => {
    const a = e.peerStates[t];
    !a || a.connectedPeer || a.answeringPeer !== r || (a.answerSent && Mn(e, a, t), r.destroy(), wn(a, r), e.checkDeactivate());
  }, Vi);
}, aa = async (e, n, t) => {
  const r = t ? [t, ft] : [ft];
  for (const a of r) {
    const c = e.pendingCandidates[a];
    if (c == null ? void 0 : c.length) {
      delete e.pendingCandidates[a];
      for (const s of c) await n.signal(s);
    }
  }
}, Ao = (e, n, t, r = Ot) => {
  K(n.offerExpiryTimer);
  const a = n.offerId;
  n.offerExpiryTimer = setTimeout(() => {
    const c = e.peerStates[t];
    !c || c.connectedPeer || c.offerId !== a || (c.offerAnswered && Mn(e, c, t), on(c, e.offerPool), e.checkDeactivate());
  }, r);
}, ca = (e, n, t, r) => n.offerPeer && n.offerId && n.offerSdp ? Promise.resolve({ peer: n.offerPeer, offer: n.offerSdp, offerId: n.offerId }) : (n.offerInitPromise || (n.offerInitPromise = (async () => {
  const a = (await e.offerPool.checkout(1, false, e.encryptOffer))[0];
  if (!a) throw j("failed to allocate offer peer");
  const { peer: c, offer: s } = a;
  n.offerPeer = c, n.offerId = Ue(Gi), n.offerSdp = s, n.offerAnswered = false, n.connectionErrorReported = false, n.offerSignalBacklog = [], ie(n);
  const i = () => {
    n.offerPeer === c && !n.connectedPeer && (n.offerAnswered && Mn(e, n, t), on(n, e.offerPool)), e.disconnectPeer(c, t), e.checkDeactivate();
  };
  return c.setHandlers({ connect: () => e.connectPeer(c, t, r), signal: (o) => {
    n.offerPeer === c && (n.offerSignalBacklog.push(o), n.offerSignalRelays.forEach((l) => l == null ? void 0 : l(o)));
  }, close: i, error: i }), Ao(e, n, t), { peer: c, offer: s, offerId: n.offerId };
})().finally(() => n.offerInitPromise = null)), n.offerInitPromise), fa = async (e, n, t, r, a) => {
  if (r) {
    e.attachSharedPeerToRoom(t, r);
    return;
  }
  const c = e.peerStates[t];
  if (!c || c.connectedPeer || c.answeringPeer || c.offerAnswered) {
    Rr(c, n);
    return;
  }
  if (c.offerRelays[n] !== bn) return;
  const [s, i] = await Le([tn(en(e.rootTopicPlaintext, t)), ca(e, c, t, n)]);
  if (e.isLeaving()) return;
  if (c.connectedPeer || c.answeringPeer || c.offerAnswered || c.offerRelays[n] !== bn) {
    Rr(c, n);
    return;
  }
  c.offerRelayTimers[n] = K(c.offerRelayTimers[n]), c.offerRelays[n] = true, ie(c), c.offerRelayTimers[n] = setTimeout(() => pa(e, t, n), (e.announceIntervals[n] ?? e.announceIntervalMs) * 0.9);
  let o = false;
  c.offerSignalRelays[n] = (l) => {
    o && (e.isLeaving() || c.connectedPeer || c.offerPeer !== i.peer || c.offerId !== i.offerId || l.type !== "candidate" || To(e, l, s, a, (u) => ({ peerId: ce, offerId: i.offerId, candidate: u, ...e.isPassive ? { passive: true } : {} }), () => !c.connectedPeer && c.offerPeer === i.peer && c.offerId === i.offerId));
  }, a(s, re({ peerId: ce, offerId: i.offerId, offer: i.offer, ...e.isPassive ? { passive: true } : {} })), o = true, c.offerSignalBacklog.forEach((l) => {
    var _a2, _b;
    return (_b = (_a2 = c.offerSignalRelays)[n]) == null ? void 0 : _b.call(_a2, l);
  });
}, la = async (e, n, t, r, a, c, s) => {
  var _a2;
  const i = rn(e.peerStates, t);
  if (i.answeringPeer || i.offerAnswered) return;
  const o = !!(i.offerPeer || i.offerRelays.some(Boolean));
  if ((o || c) && ce < t) return;
  o && on(i, e.offerPool);
  const l = e.initPeer(false, e.config);
  i.answeringPeer = l, i.answerSent = false, i.connectionErrorReported = false, ia(e, i, t, l), ie(i);
  const u = () => {
    i.answeringPeer === l && !i.connectedPeer && i.answerSent && Mn(e, i, t), wn(i, l), e.disconnectPeer(l, t), e.checkDeactivate();
  };
  l.setHandlers({ connect: () => e.connectPeer(l, t, n), close: u, error: u });
  let f;
  try {
    f = await e.toPlain({ type: "offer", sdp: r });
  } catch {
    wn(i, l), (_a2 = e.onJoinError) == null ? void 0 : _a2.call(e, { error: "incorrect room password when decrypting offer", appId: e.appId, peerId: t, roomId: e.roomId });
    return;
  }
  if (l.isDead) {
    wn(i, l);
    return;
  }
  const d = await tn(en(e.rootTopicPlaintext, t));
  e.isLeaving() || (l.setHandlers({ signal: (p) => {
    e.isLeaving() || i.answeringPeer !== l || l.isDead || p.type !== "answer" && p.type !== "candidate" || To(e, p, d, s, (h) => {
      const P = { peerId: ce };
      return p.type === "answer" ? (i.answerSent = true, P.answer = h) : P.candidate = h, a && (P.offerId = a), e.isPassive && (P.passive = true), P;
    }, () => i.answeringPeer === l && !l.isDead);
  } }), await l.signal(f), await aa(i, l, a));
}, ua = async (e, n, t, r, a) => {
  var _a2;
  let c;
  try {
    c = await e.toPlain({ type: ho, sdp: t });
  } catch {
    return;
  }
  const s = rn(e.peerStates, n), i = r && (s == null ? void 0 : s.offerPeer) && s.offerId === r ? s.offerPeer : null, o = (s == null ? void 0 : s.answeringPeer) ?? null, l = !r && (s == null ? void 0 : s.offerPeer) ? s.offerPeer : null, u = a && !a.isDead ? a : i ?? o ?? l;
  if (!u || u.isDead) {
    const f = r ?? ft;
    ((_a2 = s.pendingCandidates)[f] ?? (_a2[f] = [])).push(c);
    return;
  }
  u.signal(c);
}, da = async (e, n, t, r, a, c) => {
  var _a2;
  let s;
  try {
    s = await e.toPlain({ type: "answer", sdp: r });
  } catch {
    (_a2 = e.onJoinError) == null ? void 0 : _a2.call(e, { error: "incorrect room password when decrypting answer", appId: e.appId, peerId: t, roomId: e.roomId });
    return;
  }
  if (c) e.offerPool.claimLeased(c), c.setHandlers({ connect: () => e.connectPeer(c, t, n), close: () => e.disconnectPeer(c, t) }), c.signal(s);
  else {
    const i = e.peerStates[t];
    if (!i || !i.offerPeer || i.offerAnswered || a && i.offerId && a !== i.offerId || i.offerPeer.isDead) return;
    i.offerAnswered = true, Ao(e, i, t, Ji), i.offerPeer.signal(s);
  }
}, pa = (e, n, t) => {
  const r = e.peerStates[n];
  !r || r.connectedPeer || r.offerRelays[t] && (_t(r, t), e.checkDeactivate());
}, ha = (e) => (n) => async (t, r, a) => {
  var _a2;
  if (e.isLeaving()) return;
  const c = ea(r);
  if (!c || na(c)) return;
  const s = Ke(c, "peerId") ?? "", i = Ke(c, "offer"), o = Ke(c, "answer"), l = Ke(c, "candidate"), u = Ke(c, "offerId"), f = c.peer, d = c.hasOutgoingOffer === true, p = c.passive === true;
  if (!s || s === ce) return;
  const [h, P] = await Le([e.rootTopicP, e.selfTopicP]);
  if (e.isLeaving() || t !== h && t !== P || e.isPassive && p || (e.isPassive && !e.isActive && !o && !l && (e.isActive = true, (_a2 = e.requeueAnnounce) == null ? void 0 : _a2.call(e)), e.isPassive && !e.isActive)) return;
  const v = e.peerStates[s], S = v == null ? void 0 : v.connectedPeer;
  if (S && v) {
    const R = Xi(S);
    if (R === "live") {
      v.connectedPeerUnhealthySinceMs = null;
      return;
    }
    if (R === "stale") lt(v);
    else {
      const T = Date.now(), _ = v.connectedPeerUnhealthySinceMs ?? T;
      if (v.connectedPeerUnhealthySinceMs = _, T - _ < Zi) return;
      lt(v);
    }
  }
  let m = e.sharedPeers.get(e.appId, s);
  m && e.sharedPeers.getHealth(m.peer) === "stale" && (e.sharedPeers.clear(e.appId, s, { destroyPeer: true }), m = void 0);
  const O = !!(s && !i && !o && !l);
  if (O && !m) {
    const R = rn(e.peerStates, s), T = ce < s;
    if (R.answeringPeer || R.connectedPeer || R.offerAnswered) return;
    if (!T && !R.offerPeer) {
      const _ = await tn(en(e.rootTopicPlaintext, s));
      !e.isLeaving() && !R.connectedPeer && a(_, re({ peerId: ce }));
      return;
    }
    if (R.offerRelays[n]) return;
    R.offerRelays[n] = bn, ie(R);
  }
  if (m && (i || o || l)) {
    if (m.bindings[e.roomId]) return;
    e.attachSharedPeerToRoom(s, m);
    return;
  }
  if (O) return fa(e, n, s, m, a);
  if (i) return la(e, n, s, i, u, d, a);
  if (l) return ua(e, s, l, u, f);
  if (o) return da(e, n, s, o, u, f);
}, Xn = 5333, ga = [233, 533, 1333], ya = 7533, ma = 123333;
var va = ({ init: e, subscribe: n, announce: t, deactivate: r }) => {
  const a = {}, c = {}, s = {}, i = {}, o = new Yi(), l = () => Ie(a).some((T) => se(T).length > 0), u = (T) => c[T] ?? (c[T] = {}), f = (T) => s[T] ?? (s[T] = {}), d = (T, _, D) => {
    o.getHealth(T.peer) === "live" && o.sendRoomPresence(T, _, D);
  }, p = (T, _) => {
    Oe(c[T] ?? {}).forEach(([D, A]) => {
      if (!A.shouldAdvertise()) return;
      const { roomToken: H, roomTokenPromise: $ } = A;
      if (H) {
        d(_, H, true);
        return;
      }
      $.then((B) => {
        var _a2;
        ((_a2 = c[T]) == null ? void 0 : _a2[D]) === A && A.roomToken === B && (o.get(T, _.peerId) !== _ || _.isClosing || A.shouldAdvertise() && d(_, B, true));
      });
    });
  }, h = (T, _, D) => Ie(o.getMap(T)).forEach((A) => d(A, _, D)), P = (T) => {
    i[T] || (i[T] = o.setRoomPresenceHandler(T, (_, D, A) => {
      var _a2, _b, _c;
      if (!A) return;
      const H = o.get(T, _), $ = (_a2 = s[T]) == null ? void 0 : _a2[D];
      !H || !$ || ((_c = (_b = c[T]) == null ? void 0 : _b[$]) == null ? void 0 : _c.attachSharedPeerToRoom(_, H));
    }));
  }, v = (T) => {
    var _a2;
    a[T] && se(a[T]).length > 0 || ((_a2 = i[T]) == null ? void 0 : _a2.call(i), delete i[T], delete c[T], delete s[T]);
  };
  let S = false, m = [], O = null, R = V;
  return (T, _, D) => {
    var _a2, _b;
    if (!T) throw j("requires a config map as the first argument");
    if (D && typeof D != "object") throw j("third argument must be a callbacks object");
    const { appId: A } = T, H = D == null ? void 0 : D.onJoinError, $ = D == null ? void 0 : D.onPeerHandshake, B = D == null ? void 0 : D.handshakeTimeoutMs;
    if (!A) throw j("config map is missing appId field");
    if (!_) throw j("roomId argument required");
    if (B !== void 0 && (!Number.isFinite(B) || B <= 0)) throw j("handshakeTimeoutMs must be a positive number");
    if ((_a2 = a[A]) == null ? void 0 : _a2[_]) return a[A][_];
    P(A);
    const q = en(fe, A, _), z = tn(q), g = tn(en(q, ce)), w = gi(T.password ?? "", A, _), b = yi(A, _), E = T._test_only_sharedPeerIdleMs ?? ma;
    let M = false;
    const U = (L) => async (C) => ({ type: C.type, sdp: await L(w, C.sdp) }), W = U(vi), y = U(mi), k = o.getMap(A), I = () => pr(true, T);
    O || (O = new Si(I));
    const X = O, pe = async (L) => {
      const C = await L.getOffer(Date.now() - L.created > Ot);
      if (!C || C.type !== "offer") throw j("failed to get offer for peer");
      return (await y(C)).sdp;
    }, he = (L, C) => {
      const N = rn(G.peerStates, L);
      N.answeringExpiryTimer = K(N.answeringExpiryTimer), N.answeringPeer = null;
      const { proxy: Z, isNew: F } = o.bind(_, b, C, { onDetach: () => {
        const ee = G.peerStates[L];
        (ee == null ? void 0 : ee.connectedPeer) === C.peer && (ee.connectedPeer = null, ee.connectedPeerUnhealthySinceMs = null, ie(ee));
      } });
      N.connectedPeer = C.peer, N.connectedPeerUnhealthySinceMs = null, ie(N), F && Nn(Z, L), on(N, X);
    }, Co = (L, C, N) => {
      if (M) {
        L.destroy();
        return;
      }
      const Z = rn(G.peerStates, C);
      if (Z.connectedPeer) {
        const Te = k[C];
        if (Te && Z.connectedPeer === Te.peer && Te.bindings[_]) return;
        Z.connectedPeer !== L && !L.isDead && L.destroy();
        return;
      }
      let F = k[C];
      if (F && o.getHealth(F.peer) === "stale" && (o.clear(A, C, { destroyPeer: true }), F = void 0), F && F.peer !== L) {
        L.isDead || L.destroy(), he(C, F);
        return;
      }
      const ee = !F;
      F || (F = o.register(A, C, L, E)), he(C, F), ee && p(A, F);
    }, No = (L, C) => {
      if (M) return;
      const N = G.peerStates[C];
      (N == null ? void 0 : N.connectedPeer) === L && (lt(N), cn());
    }, oe = !!T.passive;
    let Pe = null, Se, Lt = V;
    const cn = () => {
      if (!oe || !G.isActive) return;
      let L = false;
      Oe(G.peerStates).forEach(([C, N]) => {
        N.connectedPeer || N.answeringPeer || N.offerInitPromise || N.offerPeer || N.offerRelays.some(Boolean) ? L = true : N.status === "idle" && delete G.peerStates[C];
      }), L || (G.isActive = false, Se = K(Se), Ce.forEach(K), Ce.length = 0, Lt(), (Pe == null ? void 0 : Pe.roomToken) && h(A, Pe.roomToken, false));
    }, G = { appId: A, roomId: _, config: T, peerStates: {}, rootTopicPlaintext: q, rootTopicP: z, selfTopicP: g, toPlain: W, toCipher: y, isLeaving: () => M, isPassive: oe, isActive: !oe, onJoinError: H, sharedPeers: o, offerPool: X, encryptOffer: pe, initPeer: pr, connectPeer: Co, disconnectPeer: No, attachSharedPeerToRoom: he, checkDeactivate: cn, announceIntervals: [], announceIntervalMs: Xn }, Dn = { config: T, appId: A, roomId: _, isPassive: oe }, Bo = ha(G);
    if (!S) {
      const L = e(T);
      m = (Array.isArray(L) ? L : [L]).map((C) => Promise.resolve(C)), S = true, R = ((_b = T.relayConfig) == null ? void 0 : _b.manualReconnection) ? V : ui();
    }
    !oe && !X.isActive && X.warmup(), G.announceIntervals = m.map(() => Xn);
    const Ln = m.map(() => 0), Cn = m.map(() => 0), Ce = [], Ct = m.map(async (L, C) => n(await L, await z, await g, Bo(C), (N) => X.getOffers(N, pe), Dn));
    Le([z, g]).then(([L, C]) => {
      if (M) return;
      const N = async (Z, F) => {
        var _a3;
        if (M || oe && !G.isActive) return;
        const ee = oe ? { passive: true } : void 0;
        let Te;
        try {
          Te = await t(Z, L, C, ee, Dn), Cn[F] = 0;
        } catch (Uo) {
          const $t = Cn[F] ?? 0;
          $t === 0 && ((_a3 = T.relayConfig) == null ? void 0 : _a3.warnOnRelayFailure) !== false && console.warn(`${fe}: announce failed - ${$e(Uo, "")}`), Cn[F] = $t + 1;
        }
        if (M || oe && !G.isActive) return;
        typeof Te == "number" && (G.announceIntervals[F] = Te);
        const Bt = Ln[F] ?? 0;
        Ln[F] = Bt + 1;
        const It = G.announceIntervals[F] ?? Xn, Ht = ga[Bt];
        Ce[F] = setTimeout(() => {
          N(Z, F);
        }, typeof Ht == "number" ? Math.min(It, Ht) : It);
      };
      Lt = () => {
        r && m.forEach(async (Z) => {
          const F = await Z;
          M || r(F, L, C, Dn);
        });
      }, G.requeueAnnounce = () => {
        Ce.forEach(K), Ce.length = 0, Se = K(Se), X.isActive || X.warmup(), (Pe == null ? void 0 : Pe.roomToken) && h(A, Pe.roomToken, true), Se = setTimeout(cn, ya), m.forEach(async (Z, F) => {
          const ee = await Z;
          ee && !M && (Ln[F] = 0, N(ee, F));
        });
      }, Ct.forEach(async (Z, F) => {
        if (await Z, M) return;
        const ee = await m[F];
        ee && !M && (!oe || G.isActive) && N(ee, F);
      });
    });
    let Nn = V;
    const { compose: Io } = Ti(T.password ?? "", A, _), Nt = Io($), Ho = { ...Nt ? { onPeerHandshake: Nt } : {}, ...B === void 0 ? {} : { handshakeTimeoutMs: B }, isPassive: oe, onHandshakeError: (L, C) => H == null ? void 0 : H({ error: C.replace(/^handshake failed: /, ""), appId: A, peerId: L, roomId: _ }) };
    a[A] ?? (a[A] = {});
    const $o = u(A), qo = Ki((L) => Nn = L, (L) => {
      if (M) return;
      const C = G.peerStates[L];
      (C == null ? void 0 : C.connectedPeer) && (C.connectedPeer = null, ie(C), cn());
    }, () => {
      var _a3, _b2;
      M = true, Nn = V;
      const L = (_a3 = c[A]) == null ? void 0 : _a3[_];
      (L == null ? void 0 : L.roomToken) && (h(A, L.roomToken, false), (_b2 = s[A]) == null ? true : delete _b2[L.roomToken], s[A] && !se(s[A]).length && delete s[A]), c[A] && (delete c[A][_], se(c[A]).length || delete c[A]), Oe(G.peerStates).forEach(([C, N]) => {
        if (N.answeringExpiryTimer = K(N.answeringExpiryTimer), N.connectedPeer && !N.connectedPeer.isDead) {
          const Z = k[C];
          (!Z || Z.peer !== N.connectedPeer) && N.connectedPeer.destroy();
        }
        N.answeringPeer && !N.answeringPeer.isDead && N.answeringPeer.destroy(), on(N, X), N.connectedPeer = null, N.answeringPeer = null, ie(N);
      }), a[A] && (delete a[A][_], se(a[A]).length === 0 && delete a[A]), Ce.forEach(K), Se = K(Se), Ct.forEach(async (C) => {
        (await C)();
      }), !l() && (S = false, X.destroy(), O = null, R(), v(A));
    }, Ho);
    return Pe = { roomToken: null, roomTokenPromise: b, attachSharedPeerToRoom: he, shouldAdvertise: () => !oe || G.isActive }, $o[_] = Pe, b.then((L) => {
      var _a3;
      const C = Pe;
      !C || M || ((_a3 = c[A]) == null ? void 0 : _a3[_]) !== C || (C.roomToken = L, f(A)[L] = _, Ie(k).forEach((N) => {
        N.remoteRoomTokens.has(L) && he(N.peerId, N);
      }), (!oe || G.isActive) && h(A, L, true));
    }), a[A][_] = qo;
  };
};
const wa = ["offer", "answer", "candidate"], Pa = (e) => {
  if (typeof e == "string") try {
    const n = nn(e);
    return n && typeof n == "object" ? n : null;
  } catch {
    return null;
  }
  return e;
}, Yn = (e, n) => typeof e[n] == "string" && e[n] ? e[n] : void 0, Sa = (e) => wa.some((n) => n in e && (typeof e[n] != "string" || e[n] === "")), Ta = (e) => {
  const n = Pa(e);
  if (!n || Sa(n)) return false;
  const t = Yn(n, "peerId");
  return !!(t && t !== ce && n.passive !== true && !Yn(n, "answer") && !Yn(n, "candidate"));
}, Jn = (e) => {
  if (!e) throw j("topic strategy missing room context");
  return e;
}, br = (e, n, t, r) => ({ kind: n, appId: e.appId, roomId: e.roomId, rootTopic: t, selfTopic: r }), Gn = (e, n, t, r) => ({ kind: n, appId: e.appId, roomId: e.roomId, rootTopic: t, selfTopic: r });
var Aa = ({ init: e, subscribeTopic: n, publishTopic: t, unpublishTopic: r }) => va({ init: e, subscribe: async (a, c, s, i, o, l) => {
  const u = Jn(l), f = (O, R) => t(a, O, R, Gn(u, "signal", c, s));
  let d = null, p = false, h = null, P = false;
  const v = (O) => {
    p || (p = true, O());
  }, S = () => (h || (h = Promise.resolve(n(a, s, (O, R) => {
    P || i(O, R, f);
  }, br(u, "self", c, s))).then((O) => {
    d = O, P && v(O);
  })), h);
  u.isPassive || await S();
  const m = await n(a, c, async (O, R) => {
    P || (u.isPassive && Ta(R) && await S(), P || await i(O, R, f));
  }, br(u, "root", c, s));
  return () => {
    P = true, d && v(d), m();
  };
}, announce: (a, c, s, i, o) => {
  const l = Jn(o);
  return t(a, c, re({ peerId: ce, ...i }), Gn(l, "announce", c, s));
}, ...r ? { deactivate: (a, c, s, i) => r(a, c, Gn(Jn(i), "announce", c, s)) } : {} });
const Ra = li((e) => e.socket), ba = 5, Ro = "x", bo = "EVENT", { secretKey: Ea, publicKey: ka } = fo.keygen(), Oa = Qe(ka), _a = {}, xa = {}, Ma = {}, Er = 250, Eo = () => Math.floor(Date.now() / 1e3), ko = (e) => Ma[e] ?? (Ma[e] = go(e, 1e4) + 2e4), Da = async (e, n) => {
  const t = { kind: ko(e), tags: [[Ro, e]], created_at: Eo(), content: n, pubkey: Oa }, r = await xn("SHA-256", re([0, t.pubkey, t.created_at, t.kind, t.tags, t.content]));
  return re([bo, { ...t, id: Qe(r), sig: Qe(await fo.signAsync(r, Ea)) }]);
}, qe = {}, La = (e, n, t) => {
  var _a2;
  const r = qe[_a2 = e.url] ?? (qe[_a2] = { subIds: [], topics: /* @__PURE__ */ new Map(), updateTimer: null });
  r.topics.set(n, t), Oo(e, r);
}, Ca = (e, n) => {
  const t = qe[e.url];
  t && (t.topics.delete(n), t.topics.size === 0 ? (t.updateTimer !== null && (clearTimeout(t.updateTimer), t.updateTimer = null), t.subIds.forEach((r) => e.send(re(["CLOSE", r]))), delete qe[e.url]) : Oo(e, t));
}, Oo = (e, n) => {
  n.updateTimer === null && (n.updateTimer = setTimeout(() => {
    n.updateTimer = null, _o(e);
  }, 0));
}, _o = (e) => {
  const n = qe[e.url];
  if (!n || n.topics.size === 0) return;
  const t = [...n.topics.keys()], r = [], a = Eo();
  for (let c = 0; c < t.length; c += Er) r.push(t.slice(c, c + Er));
  for (; n.subIds.length > r.length; ) {
    const c = n.subIds.pop();
    c && e.send(re(["CLOSE", c]));
  }
  r.forEach((c, s) => {
    var _a2;
    const i = (_a2 = n.subIds)[s] ?? (_a2[s] = Ue(64));
    e.send(re(["REQ", i, { kinds: [...new Set(c.map(ko))], since: a, "#x": c }]));
  });
}, Na = (e) => {
  const n = qe[e.url];
  n && n.topics.size > 0 && _o(e);
}, fc = Aa({ init: (e) => si(e, Ba, ba, true).map((n) => {
  const t = Ra.register(n, () => fi(n, (r) => {
    var _a2, _b;
    const [a, c, s, i] = nn(r);
    if (a !== bo) {
      const o = `${fe}: relay failure from ${t.url} - `;
      ((_a2 = e.relayConfig) == null ? void 0 : _a2.warnOnRelayFailure) !== false && (a === "NOTICE" ? console.warn(o + c) : a === "OK" && !s && console.warn(o + i));
      return;
    }
    if (s && typeof s == "object" && "content" in s) {
      const { content: o } = s, l = xa[c];
      if (l) {
        l(_a[c] ?? "", o);
        return;
      }
      const u = qe[t.url];
      if ((u == null ? void 0 : u.subIds.includes(c)) && s.tags) {
        const f = s.tags.find((d) => d[0] === Ro);
        (f == null ? void 0 : f[1]) && ((_b = u.topics.get(f[1])) == null ? void 0 : _b(f[1], o));
      }
    }
  }, () => Na(t)));
  return t.ready;
}), subscribeTopic: (e, n, t) => (La(e, n, (a, c) => void t(a, c)), () => {
  Ca(e, n);
}), publishTopic: async (e, n, t) => e.send(await Da(n, typeof t == "string" ? t : re(t))) }), Ba = ["basspistol.org", "bucket.coracle.social", "chorus.almostmachines.dev", "chorus.pjv.me", "communities.nos.social", "ftp.halifax.rwth-aachen.de/nostr", "hol.is", "hornetstorage.net/relay", "koru.bitcointxoko.org", "nos.lol", "nostr-01.uid.ovh", "nostr-01.yakihonne.com", "nostr-relay.corb.net", "nostr.data.haus", "nostr.islandarea.net", "nostr.sathoarder.com", "nostr.self-determined.de", "nostr.tegila.com.br", "nostr.vulpem.com", "purplerelay.com", "relay-can.zombi.cloudrodion.com", "relay-rpi.edufeed.org", "relay.agorist.space", "relay.angor.io", "relay.artio.inf.unibe.ch", "relay.binaryrobot.com", "relay.damus.io", "relay.froth.zone", "relay.libernet.app", "relay.mostr.pub", "relay.mostro.network", "relay.nostr.place", "relay.nostrdice.com", "relay.notoshi.win", "relay.sigit.io", "relay02.lnfi.network", "relay2.angor.io", "schnorr.me", "slick.mjex.me", "social.amanah.eblessing.co", "staging.yabu.me", "strfry.openhoofd.nl", "strfry.shock.network", "testnet-relay.samt.st", "top.testrelay.top", "x.kojira.io", "yabu.me/v2"].map((e) => "wss://" + e);
/*!
* https://github.com/Starcounter-Jack/JSON-Patch
* (c) 2017-2022 Joachim Wester
* MIT licensed
*/
var Ia = /* @__PURE__ */ (function() {
  var e = function(n, t) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, a) {
      r.__proto__ = a;
    } || function(r, a) {
      for (var c in a) a.hasOwnProperty(c) && (r[c] = a[c]);
    }, e(n, t);
  };
  return function(n, t) {
    e(n, t);
    function r() {
      this.constructor = n;
    }
    n.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  };
})(), Ha = Object.prototype.hasOwnProperty;
function ut(e, n) {
  return Ha.call(e, n);
}
function dt(e) {
  if (Array.isArray(e)) {
    for (var n = new Array(e.length), t = 0; t < n.length; t++) n[t] = "" + t;
    return n;
  }
  if (Object.keys) return Object.keys(e);
  var r = [];
  for (var a in e) ut(e, a) && r.push(a);
  return r;
}
function te(e) {
  switch (typeof e) {
    case "object":
      return JSON.parse(JSON.stringify(e));
    case "undefined":
      return null;
    default:
      return e;
  }
}
function pt(e) {
  for (var n = 0, t = e.length, r; n < t; ) {
    if (r = e.charCodeAt(n), r >= 48 && r <= 57) {
      n++;
      continue;
    }
    return false;
  }
  return true;
}
function Re(e) {
  return e.indexOf("/") === -1 && e.indexOf("~") === -1 ? e : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function xo(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
function ht(e) {
  if (e === void 0) return true;
  if (e) {
    if (Array.isArray(e)) {
      for (var n = 0, t = e.length; n < t; n++) if (ht(e[n])) return true;
    } else if (typeof e == "object") {
      for (var r = dt(e), a = r.length, c = 0; c < a; c++) if (ht(e[r[c]])) return true;
    }
  }
  return false;
}
function kr(e, n) {
  var t = [e];
  for (var r in n) {
    var a = typeof n[r] == "object" ? JSON.stringify(n[r], null, 2) : n[r];
    typeof a < "u" && t.push(r + ": " + a);
  }
  return t.join(`
`);
}
var Mo = (function(e) {
  Ia(n, e);
  function n(t, r, a, c, s) {
    var i = this.constructor, o = e.call(this, kr(t, { name: r, index: a, operation: c, tree: s })) || this;
    return o.name = r, o.index = a, o.operation = c, o.tree = s, Object.setPrototypeOf(o, i.prototype), o.message = kr(t, { name: r, index: a, operation: c, tree: s }), o;
  }
  return n;
})(Error), Y = Mo, $a = te, Be = { add: function(e, n, t) {
  return e[n] = this.value, { newDocument: t };
}, remove: function(e, n, t) {
  var r = e[n];
  return delete e[n], { newDocument: t, removed: r };
}, replace: function(e, n, t) {
  var r = e[n];
  return e[n] = this.value, { newDocument: t, removed: r };
}, move: function(e, n, t) {
  var r = En(t, this.path);
  r && (r = te(r));
  var a = _e(t, { op: "remove", path: this.from }).removed;
  return _e(t, { op: "add", path: this.path, value: a }), { newDocument: t, removed: r };
}, copy: function(e, n, t) {
  var r = En(t, this.from);
  return _e(t, { op: "add", path: this.path, value: te(r) }), { newDocument: t };
}, test: function(e, n, t) {
  return { newDocument: t, test: sn(e[n], this.value) };
}, _get: function(e, n, t) {
  return this.value = e[n], { newDocument: t };
} }, qa = { add: function(e, n, t) {
  return pt(n) ? e.splice(n, 0, this.value) : e[n] = this.value, { newDocument: t, index: n };
}, remove: function(e, n, t) {
  var r = e.splice(n, 1);
  return { newDocument: t, removed: r[0] };
}, replace: function(e, n, t) {
  var r = e[n];
  return e[n] = this.value, { newDocument: t, removed: r };
}, move: Be.move, copy: Be.copy, test: Be.test, _get: Be._get };
function En(e, n) {
  if (n == "") return e;
  var t = { op: "_get", path: n };
  return _e(e, t), t.value;
}
function _e(e, n, t, r, a, c) {
  if (t === void 0 && (t = false), r === void 0 && (r = true), a === void 0 && (a = true), c === void 0 && (c = 0), t && (typeof t == "function" ? t(n, 0, e, n.path) : kn(n, 0)), n.path === "") {
    var s = { newDocument: e };
    if (n.op === "add") return s.newDocument = n.value, s;
    if (n.op === "replace") return s.newDocument = n.value, s.removed = e, s;
    if (n.op === "move" || n.op === "copy") return s.newDocument = En(e, n.from), n.op === "move" && (s.removed = e), s;
    if (n.op === "test") {
      if (s.test = sn(e, n.value), s.test === false) throw new Y("Test operation failed", "TEST_OPERATION_FAILED", c, n, e);
      return s.newDocument = e, s;
    } else {
      if (n.op === "remove") return s.removed = e, s.newDocument = null, s;
      if (n.op === "_get") return n.value = e, s;
      if (t) throw new Y("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", c, n, e);
      return s;
    }
  } else {
    r || (e = te(e));
    var i = n.path || "", o = i.split("/"), l = e, u = 1, f = o.length, d = void 0, p = void 0, h = void 0;
    for (typeof t == "function" ? h = t : h = kn; ; ) {
      if (p = o[u], p && p.indexOf("~") != -1 && (p = xo(p)), a && (p == "__proto__" || p == "prototype" && u > 0 && o[u - 1] == "constructor")) throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (t && d === void 0 && (l[p] === void 0 ? d = o.slice(0, u).join("/") : u == f - 1 && (d = n.path), d !== void 0 && h(n, 0, e, d)), u++, Array.isArray(l)) {
        if (p === "-") p = l.length;
        else {
          if (t && !pt(p)) throw new Y("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", c, n, e);
          pt(p) && (p = ~~p);
        }
        if (u >= f) {
          if (t && n.op === "add" && p > l.length) throw new Y("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", c, n, e);
          var s = qa[n.op].call(n, l, p, e);
          if (s.test === false) throw new Y("Test operation failed", "TEST_OPERATION_FAILED", c, n, e);
          return s;
        }
      } else if (u >= f) {
        var s = Be[n.op].call(n, l, p, e);
        if (s.test === false) throw new Y("Test operation failed", "TEST_OPERATION_FAILED", c, n, e);
        return s;
      }
      if (l = l[p], t && u < f && (!l || typeof l != "object")) throw new Y("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", c, n, e);
    }
  }
}
function xt(e, n, t, r, a) {
  if (r === void 0 && (r = true), a === void 0 && (a = true), t && !Array.isArray(n)) throw new Y("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  r || (e = te(e));
  for (var c = new Array(n.length), s = 0, i = n.length; s < i; s++) c[s] = _e(e, n[s], t, true, a, s), e = c[s].newDocument;
  return c.newDocument = e, c;
}
function Ua(e, n, t) {
  var r = _e(e, n);
  if (r.test === false) throw new Y("Test operation failed", "TEST_OPERATION_FAILED", t, n, e);
  return r.newDocument;
}
function kn(e, n, t, r) {
  if (typeof e != "object" || e === null || Array.isArray(e)) throw new Y("Operation is not an object", "OPERATION_NOT_AN_OBJECT", n, e, t);
  if (Be[e.op]) {
    if (typeof e.path != "string") throw new Y("Operation `path` property is not a string", "OPERATION_PATH_INVALID", n, e, t);
    if (e.path.indexOf("/") !== 0 && e.path.length > 0) throw new Y('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", n, e, t);
    if ((e.op === "move" || e.op === "copy") && typeof e.from != "string") throw new Y("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", n, e, t);
    if ((e.op === "add" || e.op === "replace" || e.op === "test") && e.value === void 0) throw new Y("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", n, e, t);
    if ((e.op === "add" || e.op === "replace" || e.op === "test") && ht(e.value)) throw new Y("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", n, e, t);
    if (t) {
      if (e.op == "add") {
        var a = e.path.split("/").length, c = r.split("/").length;
        if (a !== c + 1 && a !== c) throw new Y("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", n, e, t);
      } else if (e.op === "replace" || e.op === "remove" || e.op === "_get") {
        if (e.path !== r) throw new Y("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", n, e, t);
      } else if (e.op === "move" || e.op === "copy") {
        var s = { op: "_get", path: e.from, value: void 0 }, i = Do([s], t);
        if (i && i.name === "OPERATION_PATH_UNRESOLVABLE") throw new Y("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", n, e, t);
      }
    }
  } else throw new Y("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", n, e, t);
}
function Do(e, n, t) {
  try {
    if (!Array.isArray(e)) throw new Y("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (n) xt(te(n), te(e), t || true);
    else {
      t = t || kn;
      for (var r = 0; r < e.length; r++) t(e[r], r, n, void 0);
    }
  } catch (a) {
    if (a instanceof Y) return a;
    throw a;
  }
}
function sn(e, n) {
  if (e === n) return true;
  if (e && n && typeof e == "object" && typeof n == "object") {
    var t = Array.isArray(e), r = Array.isArray(n), a, c, s;
    if (t && r) {
      if (c = e.length, c != n.length) return false;
      for (a = c; a-- !== 0; ) if (!sn(e[a], n[a])) return false;
      return true;
    }
    if (t != r) return false;
    var i = Object.keys(e);
    if (c = i.length, c !== Object.keys(n).length) return false;
    for (a = c; a-- !== 0; ) if (!n.hasOwnProperty(i[a])) return false;
    for (a = c; a-- !== 0; ) if (s = i[a], !sn(e[s], n[s])) return false;
    return true;
  }
  return e !== e && n !== n;
}
const Fa = Object.freeze(Object.defineProperty({ __proto__: null, JsonPatchError: Y, _areEquals: sn, applyOperation: _e, applyPatch: xt, applyReducer: Ua, deepClone: $a, getValueByPointer: En, validate: Do, validator: kn }, Symbol.toStringTag, { value: "Module" }));
/*!
* https://github.com/Starcounter-Jack/JSON-Patch
* (c) 2017-2021 Joachim Wester
* MIT license
*/
var Mt = /* @__PURE__ */ new WeakMap(), ja = /* @__PURE__ */ (function() {
  function e(n) {
    this.observers = /* @__PURE__ */ new Map(), this.obj = n;
  }
  return e;
})(), Ka = /* @__PURE__ */ (function() {
  function e(n, t) {
    this.callback = n, this.observer = t;
  }
  return e;
})();
function za(e) {
  return Mt.get(e);
}
function Wa(e, n) {
  return e.observers.get(n);
}
function Xa(e, n) {
  e.observers.delete(n.callback);
}
function Ya(e, n) {
  n.unobserve();
}
function Ja(e, n) {
  var t = [], r, a = za(e);
  if (!a) a = new ja(e), Mt.set(e, a);
  else {
    var c = Wa(a, n);
    r = c && c.observer;
  }
  if (r) return r;
  if (r = {}, a.value = te(e), n) {
    r.callback = n, r.next = null;
    var s = function() {
      gt(r);
    }, i = function() {
      clearTimeout(r.next), r.next = setTimeout(s);
    };
    typeof window < "u" && (window.addEventListener("mouseup", i), window.addEventListener("keyup", i), window.addEventListener("mousedown", i), window.addEventListener("keydown", i), window.addEventListener("change", i));
  }
  return r.patches = t, r.object = e, r.unobserve = function() {
    gt(r), clearTimeout(r.next), Xa(a, r), typeof window < "u" && (window.removeEventListener("mouseup", i), window.removeEventListener("keyup", i), window.removeEventListener("mousedown", i), window.removeEventListener("keydown", i), window.removeEventListener("change", i));
  }, a.observers.set(n, new Ka(n, r)), r;
}
function gt(e, n) {
  n === void 0 && (n = false);
  var t = Mt.get(e.object);
  Dt(t.value, e.object, e.patches, "", n), e.patches.length && xt(t.value, e.patches);
  var r = e.patches;
  return r.length > 0 && (e.patches = [], e.callback && e.callback(r)), r;
}
function Dt(e, n, t, r, a) {
  if (n !== e) {
    typeof n.toJSON == "function" && (n = n.toJSON());
    for (var c = dt(n), s = dt(e), i = false, o = s.length - 1; o >= 0; o--) {
      var l = s[o], u = e[l];
      if (ut(n, l) && !(n[l] === void 0 && u !== void 0 && Array.isArray(n) === false)) {
        var f = n[l];
        typeof u == "object" && u != null && typeof f == "object" && f != null && Array.isArray(u) === Array.isArray(f) ? Dt(u, f, t, r + "/" + Re(l), a) : u !== f && (a && t.push({ op: "test", path: r + "/" + Re(l), value: te(u) }), t.push({ op: "replace", path: r + "/" + Re(l), value: te(f) }));
      } else Array.isArray(e) === Array.isArray(n) ? (a && t.push({ op: "test", path: r + "/" + Re(l), value: te(u) }), t.push({ op: "remove", path: r + "/" + Re(l) }), i = true) : (a && t.push({ op: "test", path: r, value: e }), t.push({ op: "replace", path: r, value: n }));
    }
    if (!(!i && c.length == s.length)) for (var o = 0; o < c.length; o++) {
      var l = c[o];
      !ut(e, l) && n[l] !== void 0 && t.push({ op: "add", path: r + "/" + Re(l), value: te(n[l]) });
    }
  }
}
function Ga(e, n, t) {
  t === void 0 && (t = false);
  var r = [];
  return Dt(e, n, r, "", t), r;
}
const Za = Object.freeze(Object.defineProperty({ __proto__: null, compare: Ga, generate: gt, observe: Ja, unobserve: Ya }, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, Fa, Za, { JsonPatchError: Mo, deepClone: te, escapePathComponent: Re, unescapePathComponent: xo });
var Zn = { exports: {} }, Vn, Or;
function Va() {
  if (Or) return Vn;
  Or = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Vn = e, Vn;
}
var Qn, _r;
function Qa() {
  if (_r) return Qn;
  _r = 1;
  var e = Va();
  function n() {
  }
  function t() {
  }
  return t.resetWarningCache = n, Qn = function() {
    function r(s, i, o, l, u, f) {
      if (f !== e) {
        var d = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw d.name = "Invariant Violation", d;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var c = { array: r, bigint: r, bool: r, func: r, number: r, object: r, string: r, symbol: r, any: r, arrayOf: a, element: r, elementType: r, instanceOf: a, node: r, objectOf: a, oneOf: a, oneOfType: a, shape: a, exact: a, checkPropTypes: t, resetWarningCache: n };
    return c.PropTypes = c, c;
  }, Qn;
}
var xr;
function lc() {
  return xr || (xr = 1, Zn.exports = Qa()()), Zn.exports;
}
function Lo(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (n = 0; n < e.length; n++) e[n] && (t = Lo(e[n])) && (r && (r += " "), r += t);
  else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Mr() {
  for (var e, n, t = 0, r = ""; t < arguments.length; ) (e = arguments[t++]) && (n = Lo(e)) && (r && (r += " "), r += n);
  return r;
}
const ec = Object.freeze(Object.defineProperty({ __proto__: null, clsx: Mr, default: Mr }, Symbol.toStringTag, { value: "Module" })), uc = Dr(ec);
export {
  zt as _,
  sc as a,
  uc as b,
  Yo as c,
  tc as d,
  ic as e,
  Kt as f,
  yt as g,
  os as h,
  xt as i,
  fc as j,
  rc as k,
  ce as l,
  Ga as m,
  cc as n,
  rs as p,
  lc as r,
  ac as s,
  oc as u
};
