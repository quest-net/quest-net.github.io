var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as _e } from "./vendor-react-7vkcqmaY.js";
function Br(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function oa(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      var o = false;
      try {
        o = this instanceof r;
      } catch {
      }
      return o ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: true }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : { enumerable: true, get: function() {
      return e[r];
    } });
  }), n;
}
const Zi = Symbol(), Ir = Symbol(), Mt = "a", sa = "f", go = "p", aa = "c", ia = "t", $r = "h", Tt = "w", Hr = "o", zr = "k";
let Qi = (e, t) => new Proxy(e, t);
const dr = Object.getPrototypeOf, hr = /* @__PURE__ */ new WeakMap(), ca = (e) => e && (hr.has(e) ? hr.get(e) : dr(e) === Object.prototype || dr(e) === Array.prototype), pn = (e) => typeof e == "object" && e !== null, Vi = (e) => Object.values(Object.getOwnPropertyDescriptors(e)).some((t) => !t.configurable && !t.writable), ec = (e) => {
  if (Array.isArray(e)) return Array.from(e);
  const t = Object.getOwnPropertyDescriptors(e);
  return Object.values(t).forEach((n) => {
    n.configurable = true;
  }), Object.create(dr(e), t);
}, tc = (e, t) => {
  const n = { [sa]: t };
  let r = false;
  const o = (c, i) => {
    if (!r) {
      let l = n[Mt].get(e);
      if (l || (l = {}, n[Mt].set(e, l)), c === Tt) l[Tt] = true;
      else {
        let u = l[c];
        u || (u = /* @__PURE__ */ new Set(), l[c] = u), u.add(i);
      }
    }
  }, s = () => {
    r = true, n[Mt].delete(e);
  }, a = { get(c, i) {
    return i === Ir ? e : (o(zr, i), fa(Reflect.get(c, i), n[Mt], n[aa], n[ia]));
  }, has(c, i) {
    return i === Zi ? (s(), true) : (o($r, i), Reflect.has(c, i));
  }, getOwnPropertyDescriptor(c, i) {
    return o(Hr, i), Reflect.getOwnPropertyDescriptor(c, i);
  }, ownKeys(c) {
    return o(Tt), Reflect.ownKeys(c);
  } };
  return t && (a.set = a.deleteProperty = () => false), [a, n];
}, qr = (e) => e[Ir] || e, fa = (e, t, n, r) => {
  if (!ca(e)) return e;
  let o = r && r.get(e);
  if (!o) {
    const i = qr(e);
    Vi(i) ? o = [i, ec(i)] : o = [i], r == null ? void 0 : r.set(e, o);
  }
  const [s, a] = o;
  let c = n && n.get(s);
  return (!c || c[1][sa] !== !!a) && (c = tc(s, !!a), c[1][go] = Qi(a || s, c[0]), n && n.set(s, c)), c[1][Mt] = t, c[1][aa] = n, c[1][ia] = r, c[1][go];
}, nc = (e, t) => {
  const n = Reflect.ownKeys(e), r = Reflect.ownKeys(t);
  return n.length !== r.length || n.some((o, s) => o !== r[s]);
}, la = (e, t, n, r, o = Object.is) => {
  if (o(e, t)) return false;
  if (!pn(e) || !pn(t)) return true;
  const s = n.get(qr(e));
  if (!s) return true;
  if (r) {
    if (r.get(e) === t) return false;
    r.set(e, t);
  }
  let a = null;
  for (const c of s[$r] || []) if (a = Reflect.has(e, c) !== Reflect.has(t, c), a) return a;
  if (s[Tt] === true) {
    if (a = nc(e, t), a) return a;
  } else for (const c of s[Hr] || []) {
    const i = !!Reflect.getOwnPropertyDescriptor(e, c), l = !!Reflect.getOwnPropertyDescriptor(t, c);
    if (a = i !== l, a) return a;
  }
  for (const c of s[zr] || []) if (a = la(e[c], t[c], n, r, o), a) return a;
  if (a === null) throw new Error("invalid used");
  return a;
}, rc = (e) => ca(e) && e[Ir] || null, mo = (e, t = true) => {
  hr.set(e, t);
}, oc = (e, t, n) => {
  const r = [], o = /* @__PURE__ */ new WeakSet(), s = (a, c) => {
    var i, l, u;
    if (o.has(a)) return;
    pn(a) && o.add(a);
    const f = pn(a) && t.get(qr(a));
    if (f) {
      if ((i = f[$r]) === null || i === void 0 || i.forEach((d) => {
        const h = `:has(${String(d)})`;
        r.push(c ? [...c, h] : [h]);
      }), f[Tt] === true) {
        const d = ":ownKeys";
        r.push(c ? [...c, d] : [d]);
      } else (l = f[Hr]) === null || l === void 0 || l.forEach((d) => {
        const h = `:hasOwn(${String(d)})`;
        r.push(c ? [...c, h] : [h]);
      });
      (u = f[zr]) === null || u === void 0 || u.forEach((d) => {
        "value" in (Object.getOwnPropertyDescriptor(a, d) || {}) && s(a[d], c ? [...c, d] : [d]);
      });
    } else c && r.push(c);
  };
  return s(e), r;
}, gn = {}, jr = (e) => typeof e == "object" && e !== null, sc = (e) => jr(e) && !Fr.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer) && !(e instanceof Promise), ua = (e, t) => {
  const n = yo.get(e);
  if ((n == null ? void 0 : n[0]) === t) return n[1];
  const r = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
  return mo(r, true), yo.set(e, [t, r]), Reflect.ownKeys(e).forEach((o) => {
    if (Object.getOwnPropertyDescriptor(r, o)) return;
    const s = Reflect.get(e, o), { enumerable: a } = Reflect.getOwnPropertyDescriptor(e, o), c = { value: s, enumerable: a, configurable: true };
    if (Fr.has(s)) mo(s, false);
    else if (Be.has(s)) {
      const [i, l] = Be.get(s);
      c.value = ua(i, l());
    }
    Object.defineProperty(r, o, c);
  }), r;
}, ac = (e, t, n, r) => ({ deleteProperty(o, s) {
  const a = Reflect.get(o, s);
  n(s);
  const c = Reflect.deleteProperty(o, s);
  return c && r(Je == null ? void 0 : Je("delete", s, a)), c;
}, set(o, s, a, c) {
  const i = !e() && Reflect.has(o, s), l = Reflect.get(o, s, c);
  if (i && (wo(l, a) || mn.has(a) && wo(l, mn.get(a)))) return true;
  n(s), jr(a) && (a = rc(a) || a);
  const u = !Be.has(a) && fc(a) ? dc(a) : a;
  return t(s, u), Reflect.set(o, s, u, c), r(Je == null ? void 0 : Je("set", s, a, l)), true;
} }), ic = (e, t, ...n) => [e, [t], ...n], Be = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakSet(), yo = /* @__PURE__ */ new WeakMap(), $n = [1], mn = /* @__PURE__ */ new WeakMap();
let wo = Object.is, cc = (e, t) => new Proxy(e, t), fc = sc, lc = ua, uc = ac, Je;
function dc(e = {}) {
  if (!jr(e)) throw new Error("object required");
  const t = mn.get(e);
  if (t) return t;
  let n = $n[0];
  const r = /* @__PURE__ */ new Set(), o = (m, P = ++$n[0]) => {
    n !== P && (s = n = P, r.forEach((y) => y(m, P)));
  };
  let s = n;
  const a = (m = $n[0]) => (s !== m && (s = m, i.forEach(([P]) => {
    const y = P[1](m);
    y > n && (n = y);
  })), n), c = (m) => (P, y) => {
    let R;
    P && (R = [...P], R[1] = [m, ...R[1]]), o(R, y);
  }, i = /* @__PURE__ */ new Map(), l = (m, P) => {
    const y = !Fr.has(P) && Be.get(P);
    if (y) {
      if ((gn ? "production" : void 0) !== "production" && i.has(m)) throw new Error("prop listener already exists");
      if (r.size) {
        const R = y[2](c(m));
        i.set(m, [y, R]);
      } else i.set(m, [y]);
    }
  }, u = (m) => {
    var P;
    const y = i.get(m);
    y && (i.delete(m), (P = y[1]) == null || P.call(y));
  }, f = (m) => (r.add(m), r.size === 1 && i.forEach(([y, R], T) => {
    if ((gn ? "production" : void 0) !== "production" && R) throw new Error("remove already exists");
    const S = y[2](c(T));
    i.set(T, [y, S]);
  }), () => {
    r.delete(m), r.size === 0 && i.forEach(([y, R], T) => {
      R && (R(), i.set(T, [y]));
    });
  });
  let d = true;
  const h = uc(() => d, l, u, o), p = cc(e, h);
  mn.set(e, p);
  const w = [e, a, f];
  return Be.set(p, w), Reflect.ownKeys(e).forEach((m) => {
    const P = Object.getOwnPropertyDescriptor(e, m);
    "value" in P && P.writable && (p[m] = e[m]);
  }), d = false, p;
}
function ld(e) {
  const t = Be.get(e);
  return t == null ? void 0 : t[1]();
}
function hc(e, t, n) {
  const r = Be.get(e);
  (gn ? "production" : void 0) !== "production" && !r && console.warn("Please use proxy object");
  let o;
  const s = [], a = r[2];
  let c = false;
  const l = a((u) => {
    if (u && s.push(u), n) {
      t(s.splice(0));
      return;
    }
    o || (o = Promise.resolve().then(() => {
      o = void 0, c && t(s.splice(0));
    }));
  });
  return c = true, () => {
    c = false, l();
  };
}
function vo(e) {
  const t = Be.get(e);
  (gn ? "production" : void 0) !== "production" && !t && console.warn("Please use proxy object");
  const [n, r] = t;
  return lc(n, r());
}
function ud(e = true) {
  e === true ? Je = ic : e === false ? Je = void 0 : Je = e;
}
const pc = {}, gc = (e, t) => {
  const n = _e.useRef(void 0);
  _e.useEffect(() => {
    n.current = oc(e, t);
  }), _e.useDebugValue(n.current);
}, mc = gc, yc = /* @__PURE__ */ new WeakMap();
function dd(e, t) {
  const r = _e.useMemo(() => e && /* @__PURE__ */ new WeakMap(), [e]), o = _e.useRef(void 0);
  let s = true;
  const a = _e.useSyncExternalStore(_e.useCallback((i) => {
    const l = hc(e, i, void 0);
    return i(), l;
  }, [e, void 0]), () => {
    const i = vo(e);
    try {
      if (!s && o.current && !la(o.current, i, r, /* @__PURE__ */ new WeakMap())) return o.current;
    } catch {
    }
    return i;
  }, () => vo(e));
  s = false, _e.useLayoutEffect(() => {
    o.current = a;
  }), (pc ? "production" : void 0) !== "production" && mc(a, r);
  const c = _e.useMemo(() => /* @__PURE__ */ new WeakMap(), []);
  return fa(a, r, c, yc);
}
function Q(e, t) {
  let n = e.length;
  Array.isArray(e[0]) || (e = [e]), Array.isArray(t[0]) || (t = t.map((a) => [a]));
  let r = t[0].length, o = t[0].map((a, c) => t.map((i) => i[c])), s = e.map((a) => o.map((c) => {
    let i = 0;
    if (!Array.isArray(a)) {
      for (let l of c) i += a * l;
      return i;
    }
    for (let l = 0; l < a.length; l++) i += a[l] * (c[l] || 0);
    return i;
  }));
  return n === 1 && (s = s[0]), r === 1 ? s.map((a) => a[0]) : s;
}
function jt(e) {
  return Le(e) === "string";
}
function Le(e) {
  return (Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function yn(e, { precision: t, unit: n }) {
  return Ie(e) ? "none" : da(e, t) + (n ?? "");
}
function Ie(e) {
  return Number.isNaN(e) || e instanceof Number && (e == null ? void 0 : e.none);
}
function ne(e) {
  return Ie(e) ? 0 : e;
}
function da(e, t) {
  if (e === 0) return 0;
  let n = ~~e, r = 0;
  n && t && (r = ~~Math.log10(Math.abs(n)) + 1);
  const o = 10 ** (t - r);
  return Math.floor(e * o + 0.5) / o;
}
const wc = { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 };
function ha(e) {
  if (!e) return;
  e = e.trim();
  const t = /^([a-z]+)\((.+?)\)$/i, n = /^-?[\d.]+$/, r = /%|deg|g?rad|turn$/, o = /\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;
  let s = e.match(t);
  if (s) {
    let a = [];
    return s[2].replace(o, (c, i) => {
      let l = i.match(r), u = i;
      if (l) {
        let f = l[0], d = u.slice(0, -f.length);
        f === "%" ? (u = new Number(d / 100), u.type = "<percentage>") : (u = new Number(d * wc[f]), u.type = "<angle>", u.unit = f);
      } else n.test(u) ? (u = new Number(u), u.type = "<number>") : u === "none" && (u = new Number(NaN), u.none = true);
      c.startsWith("/") && (u = u instanceof Number ? u : new Number(u), u.alpha = true), typeof u == "object" && u instanceof Number && (u.raw = i), a.push(u);
    }), { name: s[1].toLowerCase(), rawName: s[1], rawArgs: s[2], args: a };
  }
}
function pa(e) {
  return e[e.length - 1];
}
function _t(e, t, n) {
  return isNaN(e) ? t : isNaN(t) ? e : e + (t - e) * n;
}
function ga(e, t, n) {
  return (n - e) / (t - e);
}
function Yr(e, t, n) {
  return _t(t[0], t[1], ga(e[0], e[1], n));
}
function ma(e) {
  return e.map((t) => t.split("|").map((n) => {
    n = n.trim();
    let r = n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);
    if (r) {
      let o = new String(r[1]);
      return o.range = [+r[2], +r[3]], o;
    }
    return n;
  }));
}
function ya(e, t, n) {
  return Math.max(Math.min(n, t), e);
}
function An(e, t) {
  return Math.sign(e) === Math.sign(t) ? e : -e;
}
function Re(e, t) {
  return An(Math.abs(e) ** t, e);
}
function Xr(e, t) {
  return t === 0 ? 0 : e / t;
}
function wa(e, t, n = 0, r = e.length) {
  for (; n < r; ) {
    const o = n + r >> 1;
    e[o] < t ? n = o + 1 : r = o;
  }
  return n;
}
var vc = Object.freeze({ __proto__: null, bisectLeft: wa, clamp: ya, copySign: An, interpolate: _t, interpolateInv: ga, isNone: Ie, isString: jt, last: pa, mapRange: Yr, multiplyMatrices: Q, parseCoordGrammar: ma, parseFunction: ha, serializeNumber: yn, skipNone: ne, spow: Re, toPrecision: da, type: Le, zdiv: Xr });
class bc {
  add(t, n, r) {
    if (typeof arguments[0] != "string") {
      for (var t in arguments[0]) this.add(t, arguments[0][t], arguments[1]);
      return;
    }
    (Array.isArray(t) ? t : [t]).forEach(function(o) {
      this[o] = this[o] || [], n && this[o][r ? "unshift" : "push"](n);
    }, this);
  }
  run(t, n) {
    this[t] = this[t] || [], this[t].forEach(function(r) {
      r.call(n && n.context ? n.context : n, n);
    });
  }
}
const $e = new bc();
var me = { gamut_mapping: "css", precision: 5, deltaE: "76", verbose: "production".toLowerCase() !== "test", warn: function(t) {
  var _a2, _b;
  this.verbose && ((_b = (_a2 = globalThis == null ? void 0 : globalThis.console) == null ? void 0 : _a2.warn) == null ? void 0 : _b.call(_a2, t));
} };
const ie = { D50: [0.3457 / 0.3585, 1, (1 - 0.3457 - 0.3585) / 0.3585], D65: [0.3127 / 0.329, 1, (1 - 0.3127 - 0.329) / 0.329] };
function pr(e) {
  return Array.isArray(e) ? e : ie[e];
}
function wn(e, t, n, r = {}) {
  if (e = pr(e), t = pr(t), !e || !t) throw new TypeError(`Missing white point to convert ${e ? "" : "from"}${!e && !t ? "/" : ""}${t ? "" : "to"}`);
  if (e === t) return n;
  let o = { W1: e, W2: t, XYZ: n, options: r };
  if ($e.run("chromatic-adaptation-start", o), o.M || (o.W1 === ie.D65 && o.W2 === ie.D50 ? o.M = [[1.0479297925449969, 0.022946870601609652, -0.05019226628920524], [0.02962780877005599, 0.9904344267538799, -0.017073799063418826], [-0.009243040646204504, 0.015055191490298152, 0.7518742814281371]] : o.W1 === ie.D50 && o.W2 === ie.D65 && (o.M = [[0.955473421488075, -0.02309845494876471, 0.06325924320057072], [-0.0283697093338637, 1.0099953980813041, 0.021041441191917323], [0.012314014864481998, -0.020507649298898964, 1.330365926242124]])), $e.run("chromatic-adaptation-end", o), o.M) return Q(o.M, o.XYZ);
  throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
const Pc = /* @__PURE__ */ new Set(["<number>", "<percentage>", "<angle>"]);
function bo(e, t, n, r) {
  return Object.entries(e.coords).map(([s, a], c) => {
    let i = t.coordGrammar[c], l = r[c], u = l == null ? void 0 : l.type, f;
    if (l.none ? f = i.find((p) => Pc.has(p)) : f = i.find((p) => p == u), !f) {
      let p = a.name || s;
      throw new TypeError(`${u ?? l.raw} not allowed for ${p} in ${n}()`);
    }
    let d = f.range;
    u === "<percentage>" && (d || (d = [0, 1]));
    let h = a.range || a.refRange;
    return d && h && (r[c] = Yr(d, h, r[c])), f;
  });
}
function va(e, { meta: t } = {}) {
  var _a2, _b, _c2, _d;
  let n = { str: (_a2 = String(e)) == null ? void 0 : _a2.trim() };
  if ($e.run("parse-start", n), n.color) return n.color;
  if (n.parsed = ha(n.str), n.parsed) {
    let r = n.parsed.name;
    if (r === "color") {
      let o = n.parsed.args.shift(), s = o.startsWith("--") ? o.substring(2) : `--${o}`, a = [o, s], c = n.parsed.rawArgs.indexOf("/") > 0 ? n.parsed.args.pop() : 1;
      for (let u of O.all) {
        let f = u.getFormat("color");
        if (f && (a.includes(f.id) || ((_b = f.ids) == null ? void 0 : _b.filter((d) => a.includes(d)).length))) {
          const d = Object.keys(u.coords).map((p, w) => n.parsed.args[w] || 0);
          let h;
          return f.coordGrammar && (h = bo(u, f, "color", d)), t && Object.assign(t, { formatId: "color", types: h }), f.id.startsWith("--") && !o.startsWith("--") && me.warn(`${u.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${f.id}) instead of color(${o}).`), o.startsWith("--") && !f.id.startsWith("--") && me.warn(`${u.name} is a standard space and supported in the CSS spec. Use color(${f.id}) instead of prefixed color(${o}).`), { spaceId: u.id, coords: d, alpha: c };
        }
      }
      let i = "", l = o in O.registry ? o : s;
      if (l in O.registry) {
        let u = (_d = (_c2 = O.registry[l].formats) == null ? void 0 : _c2.color) == null ? void 0 : _d.id;
        u && (i = `Did you mean color(${u})?`);
      }
      throw new TypeError(`Cannot parse color(${o}). ` + (i || "Missing a plugin?"));
    } else for (let o of O.all) {
      let s = o.getFormat(r);
      if (s && s.type === "function") {
        let a = 1;
        (s.lastAlpha || pa(n.parsed.args).alpha) && (a = n.parsed.args.pop());
        let c = n.parsed.args, i;
        return s.coordGrammar && (i = bo(o, s, r, c)), t && Object.assign(t, { formatId: s.name, types: i }), { spaceId: o.id, coords: c, alpha: a };
      }
    }
  } else for (let r of O.all) for (let o in r.formats) {
    let s = r.formats[o];
    if (s.type !== "custom" || s.test && !s.test(n.str)) continue;
    let a = s.parse(n.str);
    if (a) return a.alpha ?? (a.alpha = 1), t && (t.formatId = o), a;
  }
  throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`);
}
function z(e) {
  if (Array.isArray(e)) return e.map(z);
  if (!e) throw new TypeError("Empty color reference");
  jt(e) && (e = va(e));
  let t = e.space || e.spaceId;
  return t instanceof O || (e.space = O.get(t)), e.alpha === void 0 && (e.alpha = 1), e;
}
const Mc = 75e-6;
const _O = class _O {
  constructor(t) {
    var _a2;
    this.id = t.id, this.name = t.name, this.base = t.base ? _O.get(t.base) : null, this.aliases = t.aliases, this.base && (this.fromBase = t.fromBase, this.toBase = t.toBase);
    let n = t.coords ?? this.base.coords;
    for (let o in n) "name" in n[o] || (n[o].name = o);
    this.coords = n;
    let r = t.white ?? this.base.white ?? "D65";
    this.white = pr(r), this.formats = t.formats ?? {};
    for (let o in this.formats) {
      let s = this.formats[o];
      s.type || (s.type = "function"), s.name || (s.name = o);
    }
    ((_a2 = this.formats.color) == null ? void 0 : _a2.id) || (this.formats.color = { ...this.formats.color ?? {}, id: t.cssId || this.id }), t.gamutSpace ? this.gamutSpace = t.gamutSpace === "self" ? this : _O.get(t.gamutSpace) : this.isPolar ? this.gamutSpace = this.base : this.gamutSpace = this, this.gamutSpace.isUnbounded && (this.inGamut = (o, s) => true), this.referred = t.referred, Object.defineProperty(this, "path", { value: Sc(this).reverse(), writable: false, enumerable: true, configurable: true }), $e.run("colorspace-init-end", this);
  }
  inGamut(t, { epsilon: n = Mc } = {}) {
    if (!this.equals(this.gamutSpace)) return t = this.to(this.gamutSpace, t), this.gamutSpace.inGamut(t, { epsilon: n });
    let r = Object.values(this.coords);
    return t.every((o, s) => {
      let a = r[s];
      if (a.type !== "angle" && a.range) {
        if (Number.isNaN(o)) return true;
        let [c, i] = a.range;
        return (c === void 0 || o >= c - n) && (i === void 0 || o <= i + n);
      }
      return true;
    });
  }
  get isUnbounded() {
    return Object.values(this.coords).every((t) => !("range" in t));
  }
  get cssId() {
    var _a2, _b;
    return ((_b = (_a2 = this.formats) == null ? void 0 : _a2.color) == null ? void 0 : _b.id) || this.id;
  }
  get isPolar() {
    for (let t in this.coords) if (this.coords[t].type === "angle") return true;
    return false;
  }
  getFormat(t) {
    if (typeof t == "object") return t = Po(t, this), t;
    let n;
    return t === "default" ? n = Object.values(this.formats)[0] : n = this.formats[t], n ? (n = Po(n, this), n) : null;
  }
  equals(t) {
    return t ? this === t || this.id === t || this.id === t.id : false;
  }
  to(t, n) {
    if (arguments.length === 1) {
      const c = z(t);
      [t, n] = [c.space, c.coords];
    }
    if (t = _O.get(t), this.equals(t)) return n;
    n = n.map((c) => Number.isNaN(c) ? 0 : c);
    let r = this.path, o = t.path, s, a;
    for (let c = 0; c < r.length && r[c].equals(o[c]); c++) s = r[c], a = c;
    if (!s) throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);
    for (let c = r.length - 1; c > a; c--) n = r[c].toBase(n);
    for (let c = a + 1; c < o.length; c++) n = o[c].fromBase(n);
    return n;
  }
  from(t, n) {
    if (arguments.length === 1) {
      const r = z(t);
      [t, n] = [r.space, r.coords];
    }
    return t = _O.get(t), t.to(this, n);
  }
  toString() {
    return `${this.name} (${this.id})`;
  }
  getMinCoords() {
    let t = [];
    for (let n in this.coords) {
      let r = this.coords[n], o = r.range || r.refRange;
      t.push((o == null ? void 0 : o.min) ?? 0);
    }
    return t;
  }
  static get all() {
    return [...new Set(Object.values(_O.registry))];
  }
  static register(t, n) {
    if (arguments.length === 1 && (n = arguments[0], t = n.id), n = this.get(n), this.registry[t] && this.registry[t] !== n) throw new Error(`Duplicate color space registration: '${t}'`);
    if (this.registry[t] = n, arguments.length === 1 && n.aliases) for (let r of n.aliases) this.register(r, n);
    return n;
  }
  static get(t, ...n) {
    if (!t || t instanceof _O) return t;
    if (Le(t) === "string") {
      let o = _O.registry[t.toLowerCase()];
      if (!o) throw new TypeError(`No color space found with id = "${t}"`);
      return o;
    }
    if (n.length) return _O.get(...n);
    throw new TypeError(`${t} is not a valid color space`);
  }
  static resolveCoord(t, n) {
    var _a2;
    let r = Le(t), o, s;
    if (r === "string" ? t.includes(".") ? [o, s] = t.split(".") : [o, s] = [, t] : Array.isArray(t) ? [o, s] = t : (o = t.space, s = t.coordId), o = _O.get(o), o || (o = n), !o) throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);
    if (r = Le(s), r === "number" || r === "string" && s >= 0) {
      let i = Object.entries(o.coords)[s];
      if (i) return { space: o, id: i[0], index: s, ...i[1] };
    }
    o = _O.get(o);
    let a = s.toLowerCase(), c = 0;
    for (let i in o.coords) {
      let l = o.coords[i];
      if (i.toLowerCase() === a || ((_a2 = l.name) == null ? void 0 : _a2.toLowerCase()) === a) return { space: o, id: i, index: c, ...l };
      c++;
    }
    throw new TypeError(`No "${s}" coordinate found in ${o.name}. Its coordinates are: ${Object.keys(o.coords).join(", ")}`);
  }
};
__publicField(_O, "registry", {});
__publicField(_O, "DEFAULT_FORMAT", { type: "functions", name: "color" });
let O = _O;
function Sc(e) {
  let t = [e];
  for (let n = e; n = n.base; ) t.push(n);
  return t;
}
function Po(e, { coords: t } = {}) {
  if (e.coords && !e.coordGrammar) {
    e.type || (e.type = "function"), e.name || (e.name = "color"), e.coordGrammar = ma(e.coords);
    let n = Object.entries(t).map(([r, o], s) => {
      let a = e.coordGrammar[s][0], c = o.range || o.refRange, i = a.range, l = "";
      return a == "<percentage>" ? (i = [0, 100], l = "%") : a == "<angle>" && (l = "deg"), { fromRange: c, toRange: i, suffix: l };
    });
    e.serializeCoords = (r, o) => r.map((s, a) => {
      let { fromRange: c, toRange: i, suffix: l } = n[a];
      return c && i && (s = Yr(c, i, s)), s = yn(s, { precision: o, unit: l }), s;
    });
  }
  return e;
}
var se = new O({ id: "xyz-d65", name: "XYZ D65", coords: { x: { name: "X" }, y: { name: "Y" }, z: { name: "Z" } }, white: "D65", formats: { color: { ids: ["xyz-d65", "xyz"] } }, aliases: ["xyz"] });
class le extends O {
  constructor(t) {
    t.coords || (t.coords = { r: { range: [0, 1], name: "Red" }, g: { range: [0, 1], name: "Green" }, b: { range: [0, 1], name: "Blue" } }), t.base || (t.base = se), t.toXYZ_M && t.fromXYZ_M && (t.toBase ?? (t.toBase = (n) => {
      let r = Q(t.toXYZ_M, n);
      return this.white !== this.base.white && (r = wn(this.white, this.base.white, r)), r;
    }), t.fromBase ?? (t.fromBase = (n) => (n = wn(this.base.white, this.white, n), Q(t.fromXYZ_M, n)))), t.referred ?? (t.referred = "display"), super(t);
  }
}
function Ft(e, t) {
  return e = z(e), !t || e.space.equals(t) ? e.coords.slice() : (t = O.get(t), t.from(e));
}
function he(e, t) {
  e = z(e);
  let { space: n, index: r } = O.resolveCoord(t, e.space);
  return Ft(e, n)[r];
}
function Ur(e, t, n) {
  return e = z(e), t = O.get(t), e.coords = t.to(e.space, n), e;
}
Ur.returns = "color";
function ke(e, t, n) {
  if (e = z(e), arguments.length === 2 && Le(arguments[1]) === "object") {
    let r = arguments[1];
    for (let o in r) ke(e, o, r[o]);
  } else {
    typeof n == "function" && (n = n(he(e, t)));
    let { space: r, index: o } = O.resolveCoord(t, e.space), s = Ft(e, r);
    s[o] = n, Ur(e, r, s);
  }
  return e;
}
ke.returns = "color";
var Wr = new O({ id: "xyz-d50", name: "XYZ D50", white: "D50", base: se, fromBase: (e) => wn(se.white, "D50", e), toBase: (e) => wn("D50", se.white, e) });
const Rc = 216 / 24389, Mo = 24 / 116, Wt = 24389 / 27;
let Hn = ie.D50;
var pe = new O({ id: "lab", name: "Lab", coords: { l: { refRange: [0, 100], name: "Lightness" }, a: { refRange: [-125, 125] }, b: { refRange: [-125, 125] } }, white: Hn, base: Wr, fromBase(e) {
  let n = e.map((r, o) => r / Hn[o]).map((r) => r > Rc ? Math.cbrt(r) : (Wt * r + 16) / 116);
  return [116 * n[1] - 16, 500 * (n[0] - n[1]), 200 * (n[1] - n[2])];
}, toBase(e) {
  let t = [];
  return t[1] = (e[0] + 16) / 116, t[0] = e[1] / 500 + t[1], t[2] = t[1] - e[2] / 200, [t[0] > Mo ? Math.pow(t[0], 3) : (116 * t[0] - 16) / Wt, e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / Wt, t[2] > Mo ? Math.pow(t[2], 3) : (116 * t[2] - 16) / Wt].map((r, o) => r * Hn[o]);
}, formats: { lab: { coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"] } } });
function Ae(e) {
  return (e % 360 + 360) % 360;
}
function Tc(e, t) {
  if (e === "raw") return t;
  let [n, r] = t.map(Ae), o = r - n;
  return e === "increasing" ? o < 0 && (r += 360) : e === "decreasing" ? o > 0 && (n += 360) : e === "longer" ? -180 < o && o < 180 && (o > 0 ? n += 360 : r += 360) : e === "shorter" && (o > 180 ? n += 360 : o < -180 && (r += 360)), [n, r];
}
var kt = new O({ id: "lch", name: "LCH", coords: { l: { refRange: [0, 100], name: "Lightness" }, c: { refRange: [0, 150], name: "Chroma" }, h: { refRange: [0, 360], type: "angle", name: "Hue" } }, base: pe, fromBase(e) {
  let [t, n, r] = e, o;
  const s = 0.02;
  return Math.abs(n) < s && Math.abs(r) < s ? o = NaN : o = Math.atan2(r, n) * 180 / Math.PI, [t, Math.sqrt(n ** 2 + r ** 2), Ae(o)];
}, toBase(e) {
  let [t, n, r] = e;
  return n < 0 && (n = 0), isNaN(r) && (r = 0), [t, n * Math.cos(r * Math.PI / 180), n * Math.sin(r * Math.PI / 180)];
}, formats: { lch: { coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"] } } });
const So = 25 ** 7, vn = Math.PI, Ro = 180 / vn, ot = vn / 180;
function To(e) {
  const t = e * e;
  return t * t * t * e;
}
function ba(e, t, { kL: n = 1, kC: r = 1, kH: o = 1 } = {}) {
  [e, t] = z([e, t]);
  let [s, a, c] = pe.from(e), i = kt.from(pe, [s, a, c])[1], [l, u, f] = pe.from(t), d = kt.from(pe, [l, u, f])[1];
  i < 0 && (i = 0), d < 0 && (d = 0);
  let h = (i + d) / 2, p = To(h), w = 0.5 * (1 - Math.sqrt(p / (p + So))), m = (1 + w) * a, P = (1 + w) * u, y = Math.sqrt(m ** 2 + c ** 2), R = Math.sqrt(P ** 2 + f ** 2), T = m === 0 && c === 0 ? 0 : Math.atan2(c, m), S = P === 0 && f === 0 ? 0 : Math.atan2(f, P);
  T < 0 && (T += 2 * vn), S < 0 && (S += 2 * vn), T *= Ro, S *= Ro;
  let _ = l - s, L = R - y, M = S - T, B = T + S, q = Math.abs(M), D;
  y * R === 0 ? D = 0 : q <= 180 ? D = M : M > 180 ? D = M - 360 : M < -180 ? D = M + 360 : me.warn("the unthinkable has happened");
  let j = 2 * Math.sqrt(R * y) * Math.sin(D * ot / 2), J = (s + l) / 2, g = (y + R) / 2, b = To(g), A;
  y * R === 0 ? A = B : q <= 180 ? A = B / 2 : B < 360 ? A = (B + 360) / 2 : A = (B - 360) / 2;
  let E = (J - 50) ** 2, x = 1 + 0.015 * E / Math.sqrt(20 + E), F = 1 + 0.045 * g, Y = 1;
  Y -= 0.17 * Math.cos((A - 30) * ot), Y += 0.24 * Math.cos(2 * A * ot), Y += 0.32 * Math.cos((3 * A + 6) * ot), Y -= 0.2 * Math.cos((4 * A - 63) * ot);
  let v = 1 + 0.015 * g * Y, k = 30 * Math.exp(-1 * ((A - 275) / 25) ** 2), $ = 2 * Math.sqrt(b / (b + So)), K = -1 * Math.sin(2 * k * ot) * $, ue = (_ / (n * x)) ** 2;
  return ue += (L / (r * F)) ** 2, ue += (j / (o * v)) ** 2, ue += K * (L / (r * F)) * (j / (o * v)), Math.sqrt(ue);
}
const Ac = [[0.819022437996703, 0.3619062600528904, -0.1288737815209879], [0.0329836539323885, 0.9292868615863434, 0.0361446663506424], [0.0481771893596242, 0.2642395317527308, 0.6335478284694309]], Ec = [[1.2268798758459243, -0.5578149944602171, 0.2813910456659647], [-0.0405757452148008, 1.112286803280317, -0.0717110580655164], [-0.0763729366746601, -0.4214933324022432, 1.5869240198367816]], _c = [[0.210454268309314, 0.7936177747023054, -0.0040720430116193], [1.9779985324311684, -2.42859224204858, 0.450593709617411], [0.0259040424655478, 0.7827717124575296, -0.8086757549230774]], kc = [[1, 0.3963377773761749, 0.2158037573099136], [1, -0.1055613458156586, -0.0638541728258133], [1, -0.0894841775298119, -1.2914855480194092]];
var ut = new O({ id: "oklab", name: "Oklab", coords: { l: { refRange: [0, 1], name: "Lightness" }, a: { refRange: [-0.4, 0.4] }, b: { refRange: [-0.4, 0.4] } }, white: "D65", base: se, fromBase(e) {
  let n = Q(Ac, e).map((r) => Math.cbrt(r));
  return Q(_c, n);
}, toBase(e) {
  let n = Q(kc, e).map((r) => r ** 3);
  return Q(Ec, n);
}, formats: { oklab: { coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"] } } });
function gr(e, t) {
  [e, t] = z([e, t]);
  let [n, r, o] = ut.from(e), [s, a, c] = ut.from(t), i = n - s, l = r - a, u = o - c;
  return Math.sqrt(i ** 2 + l ** 2 + u ** 2);
}
const Oc = 75e-6;
function Ke(e, t, { epsilon: n = Oc } = {}) {
  e = z(e), t || (t = e.space), t = O.get(t);
  let r = e.coords;
  return t !== e.space && (r = t.from(e)), t.inGamut(r, { epsilon: n });
}
function dt(e) {
  return { space: e.space, coords: e.coords.slice(), alpha: e.alpha };
}
function Pa(e, t, n = "lab") {
  n = O.get(n);
  let r = n.from(e), o = n.from(t);
  return Math.sqrt(r.reduce((s, a, c) => {
    let i = o[c];
    return isNaN(a) || isNaN(i) ? s : s + (i - a) ** 2;
  }, 0));
}
function xc(e, t) {
  return Pa(e, t, "lab");
}
const Cc = Math.PI, Ao = Cc / 180;
function Lc(e, t, { l: n = 2, c: r = 1 } = {}) {
  [e, t] = z([e, t]);
  let [o, s, a] = pe.from(e), [, c, i] = kt.from(pe, [o, s, a]), [l, u, f] = pe.from(t), d = kt.from(pe, [l, u, f])[1];
  c < 0 && (c = 0), d < 0 && (d = 0);
  let h = o - l, p = c - d, w = s - u, m = a - f, P = w ** 2 + m ** 2 - p ** 2, y = 0.511;
  o >= 16 && (y = 0.040975 * o / (1 + 0.01765 * o));
  let R = 0.0638 * c / (1 + 0.0131 * c) + 0.638, T;
  Number.isNaN(i) && (i = 0), i >= 164 && i <= 345 ? T = 0.56 + Math.abs(0.2 * Math.cos((i + 168) * Ao)) : T = 0.36 + Math.abs(0.4 * Math.cos((i + 35) * Ao));
  let S = Math.pow(c, 4), _ = Math.sqrt(S / (S + 1900)), L = R * (_ * T + 1 - _), M = (h / (n * y)) ** 2;
  return M += (p / (r * R)) ** 2, M += P / L ** 2, Math.sqrt(M);
}
const Eo = 203;
var Jr = new O({ id: "xyz-abs-d65", cssId: "--xyz-abs-d65", name: "Absolute XYZ D65", coords: { x: { refRange: [0, 9504.7], name: "Xa" }, y: { refRange: [0, 1e4], name: "Ya" }, z: { refRange: [0, 10888.3], name: "Za" } }, base: se, fromBase(e) {
  return e.map((t) => Math.max(t * Eo, 0));
}, toBase(e) {
  return e.map((t) => Math.max(t / Eo, 0));
} });
const Jt = 1.15, Gt = 0.66, _o = 2610 / 2 ** 14, Dc = 2 ** 14 / 2610, ko = 3424 / 2 ** 12, Oo = 2413 / 2 ** 7, xo = 2392 / 2 ** 7, Nc = 1.7 * 2523 / 2 ** 5, Co = 2 ** 5 / (1.7 * 2523), Kt = -0.56, zn = 16295499532821565e-27, Bc = [[0.41478972, 0.579999, 0.014648], [-0.20151, 1.120649, 0.0531008], [-0.0166008, 0.2648, 0.6684799]], Ic = [[1.9242264357876067, -1.0047923125953657, 0.037651404030618], [0.35031676209499907, 0.7264811939316552, -0.06538442294808501], [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]], $c = [[0.5, 0.5, 0], [3.524, -4.066708, 0.542708], [0.199076, 1.096799, -1.295875]], Hc = [[1, 0.1386050432715393, 0.05804731615611886], [0.9999999999999999, -0.1386050432715393, -0.05804731615611886], [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]];
var Ma = new O({ id: "jzazbz", name: "Jzazbz", coords: { jz: { refRange: [0, 1], name: "Jz" }, az: { refRange: [-0.5, 0.5] }, bz: { refRange: [-0.5, 0.5] } }, base: Jr, fromBase(e) {
  let [t, n, r] = e, o = Jt * t - (Jt - 1) * r, s = Gt * n - (Gt - 1) * t, c = Q(Bc, [o, s, r]).map(function(d) {
    let h = ko + Oo * (d / 1e4) ** _o, p = 1 + xo * (d / 1e4) ** _o;
    return (h / p) ** Nc;
  }), [i, l, u] = Q($c, c);
  return [(1 + Kt) * i / (1 + Kt * i) - zn, l, u];
}, toBase(e) {
  let [t, n, r] = e, o = (t + zn) / (1 + Kt - Kt * (t + zn)), a = Q(Hc, [o, n, r]).map(function(d) {
    let h = ko - d ** Co, p = xo * d ** Co - Oo;
    return 1e4 * (h / p) ** Dc;
  }), [c, i, l] = Q(Ic, a), u = (c + (Jt - 1) * l) / Jt, f = (i + (Gt - 1) * u) / Gt;
  return [u, f, l];
}, formats: { color: { coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"] } } }), mr = new O({ id: "jzczhz", name: "JzCzHz", coords: { jz: { refRange: [0, 1], name: "Jz" }, cz: { refRange: [0, 1], name: "Chroma" }, hz: { refRange: [0, 360], type: "angle", name: "Hue" } }, base: Ma, fromBase(e) {
  let [t, n, r] = e, o;
  const s = 2e-4;
  return Math.abs(n) < s && Math.abs(r) < s ? o = NaN : o = Math.atan2(r, n) * 180 / Math.PI, [t, Math.sqrt(n ** 2 + r ** 2), Ae(o)];
}, toBase(e) {
  return [e[0], e[1] * Math.cos(e[2] * Math.PI / 180), e[1] * Math.sin(e[2] * Math.PI / 180)];
} });
function zc(e, t) {
  [e, t] = z([e, t]);
  let [n, r, o] = mr.from(e), [s, a, c] = mr.from(t), i = n - s, l = r - a;
  Number.isNaN(o) && Number.isNaN(c) ? (o = 0, c = 0) : Number.isNaN(o) ? o = c : Number.isNaN(c) && (c = o);
  let u = o - c, f = 2 * Math.sqrt(r * a) * Math.sin(u / 2 * (Math.PI / 180));
  return Math.sqrt(i ** 2 + l ** 2 + f ** 2);
}
const Sa = 3424 / 4096, Ra = 2413 / 128, Ta = 2392 / 128, Lo = 2610 / 16384, qc = 2523 / 32, jc = 16384 / 2610, Do = 32 / 2523, Fc = [[0.3592832590121217, 0.6976051147779502, -0.035891593232029], [-0.1920808463704993, 1.100476797037432, 0.0753748658519118], [0.0070797844607479, 0.0748396662186362, 0.8433265453898765]], Yc = [[2048 / 4096, 2048 / 4096, 0], [6610 / 4096, -13613 / 4096, 7003 / 4096], [17933 / 4096, -17390 / 4096, -543 / 4096]], Xc = [[0.9999999999999998, 0.0086090370379328, 0.111029625003026], [0.9999999999999998, -0.0086090370379328, -0.1110296250030259], [0.9999999999999998, 0.5600313357106791, -0.3206271749873188]], Uc = [[2.0701522183894223, -1.3263473389671563, 0.2066510476294053], [0.3647385209748072, 0.6805660249472273, -0.0453045459220347], [-0.0497472075358123, -0.0492609666966131, 1.1880659249923042]];
var yr = new O({ id: "ictcp", name: "ICTCP", coords: { i: { refRange: [0, 1], name: "I" }, ct: { refRange: [-0.5, 0.5], name: "CT" }, cp: { refRange: [-0.5, 0.5], name: "CP" } }, base: Jr, fromBase(e) {
  let t = Q(Fc, e);
  return Wc(t);
}, toBase(e) {
  let t = Jc(e);
  return Q(Uc, t);
} });
function Wc(e) {
  let t = e.map(function(n) {
    let r = Sa + Ra * (n / 1e4) ** Lo, o = 1 + Ta * (n / 1e4) ** Lo;
    return (r / o) ** qc;
  });
  return Q(Yc, t);
}
function Jc(e) {
  return Q(Xc, e).map(function(r) {
    let o = Math.max(r ** Do - Sa, 0), s = Ra - Ta * r ** Do;
    return 1e4 * (o / s) ** jc;
  });
}
function Gc(e, t) {
  [e, t] = z([e, t]);
  let [n, r, o] = yr.from(e), [s, a, c] = yr.from(t);
  return 720 * Math.sqrt((n - s) ** 2 + 0.25 * (r - a) ** 2 + (o - c) ** 2);
}
const Kc = ie.D65, Aa = 0.42, No = 1 / Aa, qn = 2 * Math.PI, Ea = [[0.401288, 0.650173, -0.051461], [-0.250268, 1.204414, 0.045854], [-2079e-6, 0.048952, 0.953127]], Zc = [[1.8620678550872327, -1.0112546305316843, 0.14918677544445175], [0.38752654323613717, 0.6214474419314753, -0.008973985167612518], [-0.015841498849333856, -0.03412293802851557, 1.0499644368778496]], Qc = [[460, 451, 288], [460, -891, -261], [460, -220, -6300]], Vc = { dark: [0.8, 0.525, 0.8], dim: [0.9, 0.59, 0.9], average: [1, 0.69, 1] }, Ue = { h: [20.14, 90, 164.25, 237.53, 380.14], e: [0.8, 0.7, 1, 1.2, 0.8], H: [0, 100, 200, 300, 400] }, ef = 180 / Math.PI, Bo = Math.PI / 180;
function _a(e, t) {
  return e.map((r) => {
    const o = Re(t * Math.abs(r) * 0.01, Aa);
    return 400 * An(o, r) / (o + 27.13);
  });
}
function tf(e, t) {
  const n = 100 / t * 27.13 ** No;
  return e.map((r) => {
    const o = Math.abs(r);
    return An(n * Re(o / (400 - o), No), r);
  });
}
function nf(e) {
  let t = Ae(e);
  t <= Ue.h[0] && (t += 360);
  const n = wa(Ue.h, t) - 1, [r, o] = Ue.h.slice(n, n + 2), [s, a] = Ue.e.slice(n, n + 2), c = Ue.H[n], i = (t - r) / s;
  return c + 100 * i / (i + (o - t) / a);
}
function rf(e) {
  let t = (e % 400 + 400) % 400;
  const n = Math.floor(0.01 * t);
  t = t % 100;
  const [r, o] = Ue.h.slice(n, n + 2), [s, a] = Ue.e.slice(n, n + 2);
  return Ae((t * (a * r - s * o) - 100 * r * a) / (t * (a - s) - 100 * a));
}
function ka(e, t, n, r, o) {
  const s = {};
  s.discounting = o, s.refWhite = e, s.surround = r;
  const a = e.map((w) => w * 100);
  s.la = t, s.yb = n;
  const c = a[1], i = Q(Ea, a);
  r = Vc[s.surround];
  const l = r[0];
  s.c = r[1], s.nc = r[2];
  const f = (1 / (5 * s.la + 1)) ** 4;
  s.fl = f * s.la + 0.1 * (1 - f) * (1 - f) * Math.cbrt(5 * s.la), s.flRoot = s.fl ** 0.25, s.n = s.yb / c, s.z = 1.48 + Math.sqrt(s.n), s.nbb = 0.725 * s.n ** -0.2, s.ncb = s.nbb;
  const d = Math.max(Math.min(l * (1 - 1 / 3.6 * Math.exp((-s.la - 42) / 92)), 1), 0);
  s.dRgb = i.map((w) => _t(1, c / w, d)), s.dRgbInv = s.dRgb.map((w) => 1 / w);
  const h = i.map((w, m) => w * s.dRgb[m]), p = _a(h, s.fl);
  return s.aW = s.nbb * (2 * p[0] + p[1] + 0.05 * p[2]), s;
}
const Io = ka(Kc, 64 / Math.PI * 0.2, 20, "average", false);
function wr(e, t) {
  if (!(e.J !== void 0 ^ e.Q !== void 0)) throw new Error("Conversion requires one and only one: 'J' or 'Q'");
  if (!(e.C !== void 0 ^ e.M !== void 0 ^ e.s !== void 0)) throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");
  if (!(e.h !== void 0 ^ e.H !== void 0)) throw new Error("Conversion requires one and only one: 'h' or 'H'");
  if (e.J === 0 || e.Q === 0) return [0, 0, 0];
  let n = 0;
  e.h !== void 0 ? n = Ae(e.h) * Bo : n = rf(e.H) * Bo;
  const r = Math.cos(n), o = Math.sin(n);
  let s = 0;
  e.J !== void 0 ? s = Re(e.J, 1 / 2) * 0.1 : e.Q !== void 0 && (s = 0.25 * t.c * e.Q / ((t.aW + 4) * t.flRoot));
  let a = 0;
  e.C !== void 0 ? a = e.C / s : e.M !== void 0 ? a = e.M / t.flRoot / s : e.s !== void 0 && (a = 4e-4 * e.s ** 2 * (t.aW + 4) / t.c);
  const c = Re(a * Math.pow(1.64 - Math.pow(0.29, t.n), -0.73), 10 / 9), i = 0.25 * (Math.cos(n + 2) + 3.8), l = t.aW * Re(s, 2 / t.c / t.z), u = 5e4 / 13 * t.nc * t.ncb * i, f = l / t.nbb, d = 23 * (f + 0.305) * Xr(c, 23 * u + c * (11 * r + 108 * o)), h = d * r, p = d * o, w = tf(Q(Qc, [f, h, p]).map((m) => m * 1 / 1403), t.fl);
  return Q(Zc, w.map((m, P) => m * t.dRgbInv[P])).map((m) => m / 100);
}
function Oa(e, t) {
  const n = e.map((R) => R * 100), r = _a(Q(Ea, n).map((R, T) => R * t.dRgb[T]), t.fl), o = r[0] + (-12 * r[1] + r[2]) / 11, s = (r[0] + r[1] - 2 * r[2]) / 9, a = (Math.atan2(s, o) % qn + qn) % qn, c = 0.25 * (Math.cos(a + 2) + 3.8), i = 5e4 / 13 * t.nc * t.ncb * Xr(c * Math.sqrt(o ** 2 + s ** 2), r[0] + r[1] + 1.05 * r[2] + 0.305), l = Re(i, 0.9) * Math.pow(1.64 - Math.pow(0.29, t.n), 0.73), u = t.nbb * (2 * r[0] + r[1] + 0.05 * r[2]), f = Re(u / t.aW, 0.5 * t.c * t.z), d = 100 * Re(f, 2), h = 4 / t.c * f * (t.aW + 4) * t.flRoot, p = l * f, w = p * t.flRoot, m = Ae(a * ef), P = nf(m), y = 50 * Re(t.c * l / (t.aW + 4), 1 / 2);
  return { J: d, C: p, h: m, s: y, Q: h, M: w, H: P };
}
var of = new O({ id: "cam16-jmh", cssId: "--cam16-jmh", name: "CAM16-JMh", coords: { j: { refRange: [0, 100], name: "J" }, m: { refRange: [0, 105], name: "Colorfulness" }, h: { refRange: [0, 360], type: "angle", name: "Hue" } }, base: se, fromBase(e) {
  const t = Oa(e, Io);
  return [t.J, t.M, t.h];
}, toBase(e) {
  return wr({ J: e[0], M: e[1], h: e[2] }, Io);
} });
const sf = ie.D65, af = 216 / 24389, xa = 24389 / 27;
function cf(e) {
  return 116 * (e > af ? Math.cbrt(e) : (xa * e + 16) / 116) - 16;
}
function vr(e) {
  return e > 8 ? Math.pow((e + 16) / 116, 3) : e / xa;
}
function ff(e, t) {
  let [n, r, o] = e, s = [], a = 0;
  if (o === 0) return [0, 0, 0];
  let c = vr(o);
  o > 0 ? a = 0.00379058511492914 * o ** 2 + 0.608983189401032 * o + 0.9155088574762233 : a = 9514440756550361e-21 * o ** 2 + 0.08693057439788597 * o - 21.928975842194614;
  const i = 2e-12, l = 15;
  let u = 0, f = 1 / 0;
  for (; u <= l; ) {
    s = wr({ J: a, C: r, h: n }, t);
    const d = Math.abs(s[1] - c);
    if (d < f) {
      if (d <= i) return s;
      f = d;
    }
    a = a - (s[1] - c) * a / (2 * s[1]), u += 1;
  }
  return wr({ J: a, C: r, h: n }, t);
}
function lf(e, t) {
  const n = cf(e[1]);
  if (n === 0) return [0, 0, 0];
  const r = Oa(e, Gr);
  return [Ae(r.h), r.C, n];
}
const Gr = ka(sf, 200 / Math.PI * vr(50), vr(50) * 100, "average", false);
var Ot = new O({ id: "hct", name: "HCT", coords: { h: { refRange: [0, 360], type: "angle", name: "Hue" }, c: { refRange: [0, 145], name: "Colorfulness" }, t: { refRange: [0, 100], name: "Tone" } }, base: se, fromBase(e) {
  return lf(e);
}, toBase(e) {
  return ff(e, Gr);
}, formats: { color: { id: "--hct", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] } } });
const uf = Math.PI / 180, $o = [1, 7e-3, 0.0228];
function Ho(e) {
  e[1] < 0 && (e = Ot.fromBase(Ot.toBase(e)));
  const t = Math.log(Math.max(1 + $o[2] * e[1] * Gr.flRoot, 1)) / $o[2], n = e[0] * uf, r = t * Math.cos(n), o = t * Math.sin(n);
  return [e[2], r, o];
}
function df(e, t) {
  [e, t] = z([e, t]);
  let [n, r, o] = Ho(Ot.from(e)), [s, a, c] = Ho(Ot.from(t));
  return Math.sqrt((n - s) ** 2 + (r - a) ** 2 + (o - c) ** 2);
}
var ht = { deltaE76: xc, deltaECMC: Lc, deltaE2000: ba, deltaEJz: zc, deltaEITP: Gc, deltaEOK: gr, deltaEHCT: df };
function hf(e) {
  const t = e ? Math.floor(Math.log10(Math.abs(e))) : 0;
  return Math.max(parseFloat(`1e${t - 2}`), 1e-6);
}
const zo = { hct: { method: "hct.c", jnd: 2, deltaEMethod: "hct", blackWhiteClamp: {} }, "hct-tonal": { method: "hct.c", jnd: 0, deltaEMethod: "hct", blackWhiteClamp: { channel: "hct.t", min: 0, max: 100 } } };
function He(e, { method: t = me.gamut_mapping, space: n = void 0, deltaEMethod: r = "", jnd: o = 2, blackWhiteClamp: s = {} } = {}) {
  if (e = z(e), jt(arguments[1]) ? n = arguments[1] : n || (n = e.space), n = O.get(n), Ke(e, n, { epsilon: 0 })) return e;
  let a;
  if (t === "css") a = pf(e, { space: n });
  else {
    if (t !== "clip" && !Ke(e, n)) {
      Object.prototype.hasOwnProperty.call(zo, t) && ({ method: t, jnd: o, deltaEMethod: r, blackWhiteClamp: s } = zo[t]);
      let c = ba;
      if (r !== "") {
        for (let l in ht) if ("deltae" + r.toLowerCase() === l.toLowerCase()) {
          c = ht[l];
          break;
        }
      }
      let i = He(Z(e, n), { method: "clip", space: n });
      if (c(e, i) > o) {
        if (Object.keys(s).length === 3) {
          let y = O.resolveCoord(s.channel), R = he(Z(e, y.space), y.id);
          if (Ie(R) && (R = 0), R >= s.max) return Z({ space: "xyz-d65", coords: ie.D65 }, e.space);
          if (R <= s.min) return Z({ space: "xyz-d65", coords: [0, 0, 0] }, e.space);
        }
        let l = O.resolveCoord(t), u = l.space, f = l.id, d = Z(e, u);
        d.coords.forEach((y, R) => {
          Ie(y) && (d.coords[R] = 0);
        });
        let p = (l.range || l.refRange)[0], w = hf(o), m = p, P = he(d, f);
        for (; P - m > w; ) {
          let y = dt(d);
          y = He(y, { space: n, method: "clip" }), c(d, y) - o < w ? m = he(d, f) : P = he(d, f), ke(d, f, (m + P) / 2);
        }
        a = Z(d, n);
      } else a = i;
    } else a = Z(e, n);
    if (t === "clip" || !Ke(a, n, { epsilon: 0 })) {
      let c = Object.values(n.coords).map((i) => i.range || []);
      a.coords = a.coords.map((i, l) => {
        let [u, f] = c[l];
        return u !== void 0 && (i = Math.max(u, i)), f !== void 0 && (i = Math.min(i, f)), i;
      });
    }
  }
  return n !== e.space && (a = Z(a, e.space)), e.coords = a.coords, e;
}
He.returns = "color";
const qo = { WHITE: { space: ut, coords: [1, 0, 0] }, BLACK: { space: ut, coords: [0, 0, 0] } };
function pf(e, { space: t } = {}) {
  e = z(e), t || (t = e.space), t = O.get(t);
  const o = O.get("oklch");
  if (t.isUnbounded) return Z(e, t);
  const s = Z(e, o);
  let a = s.coords[0];
  if (a >= 1) {
    const p = Z(qo.WHITE, t);
    return p.alpha = e.alpha, Z(p, t);
  }
  if (a <= 0) {
    const p = Z(qo.BLACK, t);
    return p.alpha = e.alpha, Z(p, t);
  }
  if (Ke(s, t, { epsilon: 0 })) return Z(s, t);
  function c(p) {
    const w = Z(p, t), m = Object.values(t.coords);
    return w.coords = w.coords.map((P, y) => {
      if ("range" in m[y]) {
        const [R, T] = m[y].range;
        return ya(R, P, T);
      }
      return P;
    }), w;
  }
  let i = 0, l = s.coords[1], u = true, f = dt(s), d = c(f), h = gr(d, f);
  if (h < 0.02) return d;
  for (; l - i > 1e-4; ) {
    const p = (i + l) / 2;
    if (f.coords[1] = p, u && Ke(f, t, { epsilon: 0 })) i = p;
    else if (d = c(f), h = gr(d, f), h < 0.02) {
      if (0.02 - h < 1e-4) break;
      u = false, i = p;
    } else l = p;
  }
  return d;
}
function Z(e, t, { inGamut: n } = {}) {
  e = z(e), t = O.get(t);
  let r = t.from(e), o = { space: t, coords: r, alpha: e.alpha };
  return n && (o = He(o, n === true ? void 0 : n)), o;
}
Z.returns = "color";
function At(e, { precision: t = me.precision, format: n = "default", inGamut: r = true, ...o } = {}) {
  var _a2;
  let s;
  e = z(e);
  let a = n;
  n = e.space.getFormat(n) ?? e.space.getFormat("default") ?? O.DEFAULT_FORMAT;
  let c = e.coords.slice();
  if (r || (r = n.toGamut), r && !Ke(e) && (c = He(dt(e), r === true ? void 0 : r).coords), n.type === "custom") if (o.precision = t, n.serialize) s = n.serialize(c, e.alpha, o);
  else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);
  else {
    let i = n.name || "color";
    n.serializeCoords ? c = n.serializeCoords(c, t) : t !== null && (c = c.map((d) => yn(d, { precision: t })));
    let l = [...c];
    if (i === "color") {
      let d = n.id || ((_a2 = n.ids) == null ? void 0 : _a2[0]) || e.space.id;
      l.unshift(d);
    }
    let u = e.alpha;
    t !== null && (u = yn(u, { precision: t }));
    let f = e.alpha >= 1 || n.noAlpha ? "" : `${n.commas ? "," : " /"} ${u}`;
    s = `${i}(${l.join(n.commas ? ", " : " ")}${f})`;
  }
  return s;
}
const gf = [[0.6369580483012914, 0.14461690358620832, 0.1688809751641721], [0.2627002120112671, 0.6779980715188708, 0.05930171646986196], [0, 0.028072693049087428, 1.060985057710791]], mf = [[1.716651187971268, -0.355670783776392, -0.25336628137366], [-0.666684351832489, 1.616481236634939, 0.0157685458139111], [0.017639857445311, -0.042770613257809, 0.942103121235474]];
var En = new le({ id: "rec2020-linear", cssId: "--rec2020-linear", name: "Linear REC.2020", white: "D65", toXYZ_M: gf, fromXYZ_M: mf });
const Zt = 1.09929682680944, jo = 0.018053968510807;
var Ca = new le({ id: "rec2020", name: "REC.2020", base: En, toBase(e) {
  return e.map(function(t) {
    return t < jo * 4.5 ? t / 4.5 : Math.pow((t + Zt - 1) / Zt, 1 / 0.45);
  });
}, fromBase(e) {
  return e.map(function(t) {
    return t >= jo ? Zt * Math.pow(t, 0.45) - (Zt - 1) : 4.5 * t;
  });
} });
const yf = [[0.4865709486482162, 0.26566769316909306, 0.1982172852343625], [0.2289745640697488, 0.6917385218365064, 0.079286914093745], [0, 0.04511338185890264, 1.043944368900976]], wf = [[2.493496911941425, -0.9313836179191239, -0.40271078445071684], [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577], [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]];
var La = new le({ id: "p3-linear", cssId: "--display-p3-linear", name: "Linear P3", white: "D65", toXYZ_M: yf, fromXYZ_M: wf });
const vf = [[0.41239079926595934, 0.357584339383878, 0.1804807884018343], [0.21263900587151027, 0.715168678767756, 0.07219231536073371], [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]], re = [[3.2409699419045226, -1.537383177570094, -0.4986107602930034], [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559], [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]];
var Da = new le({ id: "srgb-linear", name: "Linear sRGB", white: "D65", toXYZ_M: vf, fromXYZ_M: re }), Fo = { aliceblue: [240 / 255, 248 / 255, 1], antiquewhite: [250 / 255, 235 / 255, 215 / 255], aqua: [0, 1, 1], aquamarine: [127 / 255, 1, 212 / 255], azure: [240 / 255, 1, 1], beige: [245 / 255, 245 / 255, 220 / 255], bisque: [1, 228 / 255, 196 / 255], black: [0, 0, 0], blanchedalmond: [1, 235 / 255, 205 / 255], blue: [0, 0, 1], blueviolet: [138 / 255, 43 / 255, 226 / 255], brown: [165 / 255, 42 / 255, 42 / 255], burlywood: [222 / 255, 184 / 255, 135 / 255], cadetblue: [95 / 255, 158 / 255, 160 / 255], chartreuse: [127 / 255, 1, 0], chocolate: [210 / 255, 105 / 255, 30 / 255], coral: [1, 127 / 255, 80 / 255], cornflowerblue: [100 / 255, 149 / 255, 237 / 255], cornsilk: [1, 248 / 255, 220 / 255], crimson: [220 / 255, 20 / 255, 60 / 255], cyan: [0, 1, 1], darkblue: [0, 0, 139 / 255], darkcyan: [0, 139 / 255, 139 / 255], darkgoldenrod: [184 / 255, 134 / 255, 11 / 255], darkgray: [169 / 255, 169 / 255, 169 / 255], darkgreen: [0, 100 / 255, 0], darkgrey: [169 / 255, 169 / 255, 169 / 255], darkkhaki: [189 / 255, 183 / 255, 107 / 255], darkmagenta: [139 / 255, 0, 139 / 255], darkolivegreen: [85 / 255, 107 / 255, 47 / 255], darkorange: [1, 140 / 255, 0], darkorchid: [153 / 255, 50 / 255, 204 / 255], darkred: [139 / 255, 0, 0], darksalmon: [233 / 255, 150 / 255, 122 / 255], darkseagreen: [143 / 255, 188 / 255, 143 / 255], darkslateblue: [72 / 255, 61 / 255, 139 / 255], darkslategray: [47 / 255, 79 / 255, 79 / 255], darkslategrey: [47 / 255, 79 / 255, 79 / 255], darkturquoise: [0, 206 / 255, 209 / 255], darkviolet: [148 / 255, 0, 211 / 255], deeppink: [1, 20 / 255, 147 / 255], deepskyblue: [0, 191 / 255, 1], dimgray: [105 / 255, 105 / 255, 105 / 255], dimgrey: [105 / 255, 105 / 255, 105 / 255], dodgerblue: [30 / 255, 144 / 255, 1], firebrick: [178 / 255, 34 / 255, 34 / 255], floralwhite: [1, 250 / 255, 240 / 255], forestgreen: [34 / 255, 139 / 255, 34 / 255], fuchsia: [1, 0, 1], gainsboro: [220 / 255, 220 / 255, 220 / 255], ghostwhite: [248 / 255, 248 / 255, 1], gold: [1, 215 / 255, 0], goldenrod: [218 / 255, 165 / 255, 32 / 255], gray: [128 / 255, 128 / 255, 128 / 255], green: [0, 128 / 255, 0], greenyellow: [173 / 255, 1, 47 / 255], grey: [128 / 255, 128 / 255, 128 / 255], honeydew: [240 / 255, 1, 240 / 255], hotpink: [1, 105 / 255, 180 / 255], indianred: [205 / 255, 92 / 255, 92 / 255], indigo: [75 / 255, 0, 130 / 255], ivory: [1, 1, 240 / 255], khaki: [240 / 255, 230 / 255, 140 / 255], lavender: [230 / 255, 230 / 255, 250 / 255], lavenderblush: [1, 240 / 255, 245 / 255], lawngreen: [124 / 255, 252 / 255, 0], lemonchiffon: [1, 250 / 255, 205 / 255], lightblue: [173 / 255, 216 / 255, 230 / 255], lightcoral: [240 / 255, 128 / 255, 128 / 255], lightcyan: [224 / 255, 1, 1], lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255], lightgray: [211 / 255, 211 / 255, 211 / 255], lightgreen: [144 / 255, 238 / 255, 144 / 255], lightgrey: [211 / 255, 211 / 255, 211 / 255], lightpink: [1, 182 / 255, 193 / 255], lightsalmon: [1, 160 / 255, 122 / 255], lightseagreen: [32 / 255, 178 / 255, 170 / 255], lightskyblue: [135 / 255, 206 / 255, 250 / 255], lightslategray: [119 / 255, 136 / 255, 153 / 255], lightslategrey: [119 / 255, 136 / 255, 153 / 255], lightsteelblue: [176 / 255, 196 / 255, 222 / 255], lightyellow: [1, 1, 224 / 255], lime: [0, 1, 0], limegreen: [50 / 255, 205 / 255, 50 / 255], linen: [250 / 255, 240 / 255, 230 / 255], magenta: [1, 0, 1], maroon: [128 / 255, 0, 0], mediumaquamarine: [102 / 255, 205 / 255, 170 / 255], mediumblue: [0, 0, 205 / 255], mediumorchid: [186 / 255, 85 / 255, 211 / 255], mediumpurple: [147 / 255, 112 / 255, 219 / 255], mediumseagreen: [60 / 255, 179 / 255, 113 / 255], mediumslateblue: [123 / 255, 104 / 255, 238 / 255], mediumspringgreen: [0, 250 / 255, 154 / 255], mediumturquoise: [72 / 255, 209 / 255, 204 / 255], mediumvioletred: [199 / 255, 21 / 255, 133 / 255], midnightblue: [25 / 255, 25 / 255, 112 / 255], mintcream: [245 / 255, 1, 250 / 255], mistyrose: [1, 228 / 255, 225 / 255], moccasin: [1, 228 / 255, 181 / 255], navajowhite: [1, 222 / 255, 173 / 255], navy: [0, 0, 128 / 255], oldlace: [253 / 255, 245 / 255, 230 / 255], olive: [128 / 255, 128 / 255, 0], olivedrab: [107 / 255, 142 / 255, 35 / 255], orange: [1, 165 / 255, 0], orangered: [1, 69 / 255, 0], orchid: [218 / 255, 112 / 255, 214 / 255], palegoldenrod: [238 / 255, 232 / 255, 170 / 255], palegreen: [152 / 255, 251 / 255, 152 / 255], paleturquoise: [175 / 255, 238 / 255, 238 / 255], palevioletred: [219 / 255, 112 / 255, 147 / 255], papayawhip: [1, 239 / 255, 213 / 255], peachpuff: [1, 218 / 255, 185 / 255], peru: [205 / 255, 133 / 255, 63 / 255], pink: [1, 192 / 255, 203 / 255], plum: [221 / 255, 160 / 255, 221 / 255], powderblue: [176 / 255, 224 / 255, 230 / 255], purple: [128 / 255, 0, 128 / 255], rebeccapurple: [102 / 255, 51 / 255, 153 / 255], red: [1, 0, 0], rosybrown: [188 / 255, 143 / 255, 143 / 255], royalblue: [65 / 255, 105 / 255, 225 / 255], saddlebrown: [139 / 255, 69 / 255, 19 / 255], salmon: [250 / 255, 128 / 255, 114 / 255], sandybrown: [244 / 255, 164 / 255, 96 / 255], seagreen: [46 / 255, 139 / 255, 87 / 255], seashell: [1, 245 / 255, 238 / 255], sienna: [160 / 255, 82 / 255, 45 / 255], silver: [192 / 255, 192 / 255, 192 / 255], skyblue: [135 / 255, 206 / 255, 235 / 255], slateblue: [106 / 255, 90 / 255, 205 / 255], slategray: [112 / 255, 128 / 255, 144 / 255], slategrey: [112 / 255, 128 / 255, 144 / 255], snow: [1, 250 / 255, 250 / 255], springgreen: [0, 1, 127 / 255], steelblue: [70 / 255, 130 / 255, 180 / 255], tan: [210 / 255, 180 / 255, 140 / 255], teal: [0, 128 / 255, 128 / 255], thistle: [216 / 255, 191 / 255, 216 / 255], tomato: [1, 99 / 255, 71 / 255], turquoise: [64 / 255, 224 / 255, 208 / 255], violet: [238 / 255, 130 / 255, 238 / 255], wheat: [245 / 255, 222 / 255, 179 / 255], white: [1, 1, 1], whitesmoke: [245 / 255, 245 / 255, 245 / 255], yellow: [1, 1, 0], yellowgreen: [154 / 255, 205 / 255, 50 / 255] };
let Yo = Array(3).fill("<percentage> | <number>[0, 255]"), Xo = Array(3).fill("<number>[0, 255]");
var pt = new le({ id: "srgb", name: "sRGB", base: Da, fromBase: (e) => e.map((t) => {
  let n = t < 0 ? -1 : 1, r = t * n;
  return r > 31308e-7 ? n * (1.055 * r ** (1 / 2.4) - 0.055) : 12.92 * t;
}), toBase: (e) => e.map((t) => {
  let n = t < 0 ? -1 : 1, r = t * n;
  return r <= 0.04045 ? t / 12.92 : n * ((r + 0.055) / 1.055) ** 2.4;
}), formats: { rgb: { coords: Yo }, rgb_number: { name: "rgb", commas: true, coords: Xo, noAlpha: true }, color: {}, rgba: { coords: Yo, commas: true, lastAlpha: true }, rgba_number: { name: "rgba", commas: true, coords: Xo }, hex: { type: "custom", toGamut: true, test: (e) => /^#([a-f0-9]{3,4}){1,2}$/i.test(e), parse(e) {
  e.length <= 5 && (e = e.replace(/[a-f0-9]/gi, "$&$&"));
  let t = [];
  return e.replace(/[a-f0-9]{2}/gi, (n) => {
    t.push(parseInt(n, 16) / 255);
  }), { spaceId: "srgb", coords: t.slice(0, 3), alpha: t.slice(3)[0] };
}, serialize: (e, t, { collapse: n = true } = {}) => {
  t < 1 && e.push(t), e = e.map((s) => Math.round(s * 255));
  let r = n && e.every((s) => s % 17 === 0);
  return "#" + e.map((s) => r ? (s / 17).toString(16) : s.toString(16).padStart(2, "0")).join("");
} }, keyword: { type: "custom", test: (e) => /^[a-z]+$/i.test(e), parse(e) {
  e = e.toLowerCase();
  let t = { spaceId: "srgb", coords: null, alpha: 1 };
  if (e === "transparent" ? (t.coords = Fo.black, t.alpha = 0) : t.coords = Fo[e], t.coords) return t;
} } } }), Na = new le({ id: "p3", cssId: "display-p3", name: "P3", base: La, fromBase: pt.fromBase, toBase: pt.toBase });
me.display_space = pt;
let bf;
if (typeof CSS < "u" && CSS.supports) for (let e of [pe, Ca, Na]) {
  let t = e.getMinCoords(), r = At({ space: e, coords: t, alpha: 1 });
  if (CSS.supports("color", r)) {
    me.display_space = e;
    break;
  }
}
function Pf(e, { space: t = me.display_space, ...n } = {}) {
  let r = At(e, n);
  if (typeof CSS > "u" || CSS.supports("color", r) || !me.display_space) r = new String(r), r.color = e;
  else {
    let o = e;
    if ((e.coords.some(Ie) || Ie(e.alpha)) && !(bf ?? (bf = CSS.supports("color", "hsl(none 50% 50%)"))) && (o = dt(e), o.coords = o.coords.map(ne), o.alpha = ne(o.alpha), r = At(o, n), CSS.supports("color", r))) return r = new String(r), r.color = o, r;
    o = Z(o, t), r = new String(At(o, n)), r.color = o;
  }
  return r;
}
function Mf(e, t) {
  return e = z(e), t = z(t), e.space === t.space && e.alpha === t.alpha && e.coords.every((n, r) => n === t.coords[r]);
}
function ze(e) {
  return he(e, [se, "y"]);
}
function Ba(e, t) {
  ke(e, [se, "y"], t);
}
function Sf(e) {
  Object.defineProperty(e.prototype, "luminance", { get() {
    return ze(this);
  }, set(t) {
    Ba(this, t);
  } });
}
var Rf = Object.freeze({ __proto__: null, getLuminance: ze, register: Sf, setLuminance: Ba });
function Tf(e, t) {
  e = z(e), t = z(t);
  let n = Math.max(ze(e), 0), r = Math.max(ze(t), 0);
  return r > n && ([n, r] = [r, n]), (n + 0.05) / (r + 0.05);
}
const Af = 0.56, Ef = 0.57, _f = 0.62, kf = 0.65, Uo = 0.022, Of = 1.414, xf = 0.1, Cf = 5e-4, Lf = 1.14, Wo = 0.027, Df = 1.14;
function Jo(e) {
  return e >= Uo ? e : e + (Uo - e) ** Of;
}
function st(e) {
  let t = e < 0 ? -1 : 1, n = Math.abs(e);
  return t * Math.pow(n, 2.4);
}
function Nf(e, t) {
  t = z(t), e = z(e);
  let n, r, o, s, a, c;
  t = Z(t, "srgb"), [s, a, c] = t.coords;
  let i = st(s) * 0.2126729 + st(a) * 0.7151522 + st(c) * 0.072175;
  e = Z(e, "srgb"), [s, a, c] = e.coords;
  let l = st(s) * 0.2126729 + st(a) * 0.7151522 + st(c) * 0.072175, u = Jo(i), f = Jo(l), d = f > u;
  return Math.abs(f - u) < Cf ? r = 0 : d ? (n = f ** Af - u ** Ef, r = n * Lf) : (n = f ** kf - u ** _f, r = n * Df), Math.abs(r) < xf ? o = 0 : r > 0 ? o = r - Wo : o = r + Wo, o * 100;
}
function Bf(e, t) {
  e = z(e), t = z(t);
  let n = Math.max(ze(e), 0), r = Math.max(ze(t), 0);
  r > n && ([n, r] = [r, n]);
  let o = n + r;
  return o === 0 ? 0 : (n - r) / o;
}
const If = 5e4;
function $f(e, t) {
  e = z(e), t = z(t);
  let n = Math.max(ze(e), 0), r = Math.max(ze(t), 0);
  return r > n && ([n, r] = [r, n]), r === 0 ? If : (n - r) / r;
}
function Hf(e, t) {
  e = z(e), t = z(t);
  let n = he(e, [pe, "l"]), r = he(t, [pe, "l"]);
  return Math.abs(n - r);
}
const zf = 216 / 24389, Go = 24 / 116, Qt = 24389 / 27;
let jn = ie.D65;
var br = new O({ id: "lab-d65", name: "Lab D65", coords: { l: { refRange: [0, 100], name: "Lightness" }, a: { refRange: [-125, 125] }, b: { refRange: [-125, 125] } }, white: jn, base: se, fromBase(e) {
  let n = e.map((r, o) => r / jn[o]).map((r) => r > zf ? Math.cbrt(r) : (Qt * r + 16) / 116);
  return [116 * n[1] - 16, 500 * (n[0] - n[1]), 200 * (n[1] - n[2])];
}, toBase(e) {
  let t = [];
  return t[1] = (e[0] + 16) / 116, t[0] = e[1] / 500 + t[1], t[2] = t[1] - e[2] / 200, [t[0] > Go ? Math.pow(t[0], 3) : (116 * t[0] - 16) / Qt, e[0] > 8 ? Math.pow((e[0] + 16) / 116, 3) : e[0] / Qt, t[2] > Go ? Math.pow(t[2], 3) : (116 * t[2] - 16) / Qt].map((r, o) => r * jn[o]);
}, formats: { "lab-d65": { coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"] } } });
const Fn = Math.pow(5, 0.5) * 0.5 + 0.5;
function qf(e, t) {
  e = z(e), t = z(t);
  let n = he(e, [br, "l"]), r = he(t, [br, "l"]), o = Math.abs(Math.pow(n, Fn) - Math.pow(r, Fn)), s = Math.pow(o, 1 / Fn) * Math.SQRT2 - 40;
  return s < 7.5 ? 0 : s;
}
var nn = Object.freeze({ __proto__: null, contrastAPCA: Nf, contrastDeltaPhi: qf, contrastLstar: Hf, contrastMichelson: Bf, contrastWCAG21: Tf, contrastWeber: $f });
function jf(e, t, n = {}) {
  jt(n) && (n = { algorithm: n });
  let { algorithm: r, ...o } = n;
  if (!r) {
    let s = Object.keys(nn).map((a) => a.replace(/^contrast/, "")).join(", ");
    throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`);
  }
  e = z(e), t = z(t);
  for (let s in nn) if ("contrast" + r.toLowerCase() === s.toLowerCase()) return nn[s](e, t, o);
  throw new TypeError(`Unknown contrast algorithm: ${r}`);
}
function _n(e) {
  let [t, n, r] = Ft(e, se), o = t + 15 * n + 3 * r;
  return [4 * t / o, 9 * n / o];
}
function Ia(e) {
  let [t, n, r] = Ft(e, se), o = t + n + r;
  return [t / o, n / o];
}
function Ff(e) {
  Object.defineProperty(e.prototype, "uv", { get() {
    return _n(this);
  } }), Object.defineProperty(e.prototype, "xy", { get() {
    return Ia(this);
  } });
}
var Yf = Object.freeze({ __proto__: null, register: Ff, uv: _n, xy: Ia });
function St(e, t, n = {}) {
  jt(n) && (n = { method: n });
  let { method: r = me.deltaE, ...o } = n;
  for (let s in ht) if ("deltae" + r.toLowerCase() === s.toLowerCase()) return ht[s](e, t, o);
  throw new TypeError(`Unknown deltaE method: ${r}`);
}
function Xf(e, t = 0.25) {
  let r = [O.get("oklch", "lch"), "l"];
  return ke(e, r, (o) => o * (1 + t));
}
function Uf(e, t = 0.25) {
  let r = [O.get("oklch", "lch"), "l"];
  return ke(e, r, (o) => o * (1 - t));
}
var Wf = Object.freeze({ __proto__: null, darken: Uf, lighten: Xf });
function $a(e, t, n = 0.5, r = {}) {
  return [e, t] = [z(e), z(t)], Le(n) === "object" && ([n, r] = [0.5, n]), Yt(e, t, r)(n);
}
function Ha(e, t, n = {}) {
  let r;
  Kr(e) && ([r, n] = [e, t], [e, t] = r.rangeArgs.colors);
  let { maxDeltaE: o, deltaEMethod: s, steps: a = 2, maxSteps: c = 1e3, ...i } = n;
  r || ([e, t] = [z(e), z(t)], r = Yt(e, t, i));
  let l = St(e, t), u = o > 0 ? Math.max(a, Math.ceil(l / o) + 1) : a, f = [];
  if (c !== void 0 && (u = Math.min(u, c)), u === 1) f = [{ p: 0.5, color: r(0.5) }];
  else {
    let d = 1 / (u - 1);
    f = Array.from({ length: u }, (h, p) => {
      let w = p * d;
      return { p: w, color: r(w) };
    });
  }
  if (o > 0) {
    let d = f.reduce((h, p, w) => {
      if (w === 0) return 0;
      let m = St(p.color, f[w - 1].color, s);
      return Math.max(h, m);
    }, 0);
    for (; d > o; ) {
      d = 0;
      for (let h = 1; h < f.length && f.length < c; h++) {
        let p = f[h - 1], w = f[h], m = (w.p + p.p) / 2, P = r(m);
        d = Math.max(d, St(P, p.color), St(P, w.color)), f.splice(h, 0, { p: m, color: r(m) }), h++;
      }
    }
  }
  return f = f.map((d) => d.color), f;
}
function Yt(e, t, n = {}) {
  if (Kr(e)) {
    let [i, l] = [e, t];
    return Yt(...i.rangeArgs.colors, { ...i.rangeArgs.options, ...l });
  }
  let { space: r, outputSpace: o, progression: s, premultiplied: a } = n;
  e = z(e), t = z(t), e = dt(e), t = dt(t);
  let c = { colors: [e, t], options: n };
  if (r ? r = O.get(r) : r = O.registry[me.interpolationSpace] || e.space, o = o ? O.get(o) : r, e = Z(e, r), t = Z(t, r), e = He(e), t = He(t), r.coords.h && r.coords.h.type === "angle") {
    let i = n.hue = n.hue || "shorter", l = [r, "h"], [u, f] = [he(e, l), he(t, l)];
    isNaN(u) && !isNaN(f) ? u = f : isNaN(f) && !isNaN(u) && (f = u), [u, f] = Tc(i, [u, f]), ke(e, l, u), ke(t, l, f);
  }
  return a && (e.coords = e.coords.map((i) => i * e.alpha), t.coords = t.coords.map((i) => i * t.alpha)), Object.assign((i) => {
    i = s ? s(i) : i;
    let l = e.coords.map((d, h) => {
      let p = t.coords[h];
      return _t(d, p, i);
    }), u = _t(e.alpha, t.alpha, i), f = { space: r, coords: l, alpha: u };
    return a && (f.coords = f.coords.map((d) => d / u)), o !== r && (f = Z(f, o)), f;
  }, { rangeArgs: c });
}
function Kr(e) {
  return Le(e) === "function" && !!e.rangeArgs;
}
me.interpolationSpace = "lab";
function Jf(e) {
  e.defineFunction("mix", $a, { returns: "color" }), e.defineFunction("range", Yt, { returns: "function<color>" }), e.defineFunction("steps", Ha, { returns: "array<color>" });
}
var Gf = Object.freeze({ __proto__: null, isRange: Kr, mix: $a, range: Yt, register: Jf, steps: Ha }), za = new O({ id: "hsl", name: "HSL", coords: { h: { refRange: [0, 360], type: "angle", name: "Hue" }, s: { range: [0, 100], name: "Saturation" }, l: { range: [0, 100], name: "Lightness" } }, base: pt, fromBase: (e) => {
  let t = Math.max(...e), n = Math.min(...e), [r, o, s] = e, [a, c, i] = [NaN, 0, (n + t) / 2], l = t - n;
  if (l !== 0) {
    switch (c = i === 0 || i === 1 ? 0 : (t - i) / Math.min(i, 1 - i), t) {
      case r:
        a = (o - s) / l + (o < s ? 6 : 0);
        break;
      case o:
        a = (s - r) / l + 2;
        break;
      case s:
        a = (r - o) / l + 4;
    }
    a = a * 60;
  }
  return c < 0 && (a += 180, c = Math.abs(c)), a >= 360 && (a -= 360), [a, c * 100, i * 100];
}, toBase: (e) => {
  let [t, n, r] = e;
  t = t % 360, t < 0 && (t += 360), n /= 100, r /= 100;
  function o(s) {
    let a = (s + t / 30) % 12, c = n * Math.min(r, 1 - r);
    return r - c * Math.max(-1, Math.min(a - 3, 9 - a, 1));
  }
  return [o(0), o(8), o(4)];
}, formats: { hsl: { coords: ["<number> | <angle>", "<percentage>", "<percentage>"] }, hsla: { coords: ["<number> | <angle>", "<percentage>", "<percentage>"], commas: true, lastAlpha: true } } }), qa = new O({ id: "hsv", name: "HSV", coords: { h: { refRange: [0, 360], type: "angle", name: "Hue" }, s: { range: [0, 100], name: "Saturation" }, v: { range: [0, 100], name: "Value" } }, base: za, fromBase(e) {
  let [t, n, r] = e;
  n /= 100, r /= 100;
  let o = r + n * Math.min(r, 1 - r);
  return [t, o === 0 ? 0 : 200 * (1 - r / o), 100 * o];
}, toBase(e) {
  let [t, n, r] = e;
  n /= 100, r /= 100;
  let o = r * (1 - n / 2);
  return [t, o === 0 || o === 1 ? 0 : (r - o) / Math.min(o, 1 - o) * 100, o * 100];
}, formats: { color: { id: "--hsv", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] } } }), Kf = new O({ id: "hwb", name: "HWB", coords: { h: { refRange: [0, 360], type: "angle", name: "Hue" }, w: { range: [0, 100], name: "Whiteness" }, b: { range: [0, 100], name: "Blackness" } }, base: qa, fromBase(e) {
  let [t, n, r] = e;
  return [t, r * (100 - n) / 100, 100 - r];
}, toBase(e) {
  let [t, n, r] = e;
  n /= 100, r /= 100;
  let o = n + r;
  if (o >= 1) {
    let c = n / o;
    return [t, 0, c * 100];
  }
  let s = 1 - r, a = s === 0 ? 0 : 1 - n / s;
  return [t, a * 100, s * 100];
}, formats: { hwb: { coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] } } });
const Zf = [[0.5766690429101305, 0.1855582379065463, 0.1882286462349947], [0.29734497525053605, 0.6273635662554661, 0.07529145849399788], [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]], Qf = [[2.0415879038107465, -0.5650069742788596, -0.34473135077832956], [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557], [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]];
var ja = new le({ id: "a98rgb-linear", cssId: "--a98-rgb-linear", name: "Linear Adobe\xAE 98 RGB compatible", white: "D65", toXYZ_M: Zf, fromXYZ_M: Qf }), Vf = new le({ id: "a98rgb", cssId: "a98-rgb", name: "Adobe\xAE 98 RGB compatible", base: ja, toBase: (e) => e.map((t) => Math.pow(Math.abs(t), 563 / 256) * Math.sign(t)), fromBase: (e) => e.map((t) => Math.pow(Math.abs(t), 256 / 563) * Math.sign(t)) });
const el = [[0.7977666449006423, 0.13518129740053308, 0.0313477341283922], [0.2880748288194013, 0.711835234241873, 8993693872564e-17], [0, 0, 0.8251046025104602]], tl = [[1.3457868816471583, -0.25557208737979464, -0.05110186497554526], [-0.5446307051249019, 1.5082477428451468, 0.02052744743642139], [0, 0, 1.2119675456389452]];
var Fa = new le({ id: "prophoto-linear", cssId: "--prophoto-rgb-linear", name: "Linear ProPhoto", white: "D50", base: Wr, toXYZ_M: el, fromXYZ_M: tl });
const nl = 1 / 512, rl = 16 / 512;
var ol = new le({ id: "prophoto", cssId: "prophoto-rgb", name: "ProPhoto", base: Fa, toBase(e) {
  return e.map((t) => t < rl ? t / 16 : t ** 1.8);
}, fromBase(e) {
  return e.map((t) => t >= nl ? t ** (1 / 1.8) : 16 * t);
} }), sl = new O({ id: "oklch", name: "Oklch", coords: { l: { refRange: [0, 1], name: "Lightness" }, c: { refRange: [0, 0.4], name: "Chroma" }, h: { refRange: [0, 360], type: "angle", name: "Hue" } }, white: "D65", base: ut, fromBase(e) {
  let [t, n, r] = e, o;
  const s = 2e-4;
  return Math.abs(n) < s && Math.abs(r) < s ? o = NaN : o = Math.atan2(r, n) * 180 / Math.PI, [t, Math.sqrt(n ** 2 + r ** 2), Ae(o)];
}, toBase(e) {
  let [t, n, r] = e, o, s;
  return isNaN(r) ? (o = 0, s = 0) : (o = n * Math.cos(r * Math.PI / 180), s = n * Math.sin(r * Math.PI / 180)), [t, o, s];
}, formats: { oklch: { coords: ["<percentage> | <number>", "<number> | <percentage>[0,1]", "<number> | <angle>"] } } });
let Ya = ie.D65;
const al = 216 / 24389, Ko = 24389 / 27, [Zo, Qo] = _n({ space: se, coords: Ya });
var Xa = new O({ id: "luv", name: "Luv", coords: { l: { refRange: [0, 100], name: "Lightness" }, u: { refRange: [-215, 215] }, v: { refRange: [-215, 215] } }, white: Ya, base: se, fromBase(e) {
  let t = [ne(e[0]), ne(e[1]), ne(e[2])], n = t[1], [r, o] = _n({ space: se, coords: t });
  if (!Number.isFinite(r) || !Number.isFinite(o)) return [0, 0, 0];
  let s = n <= al ? Ko * n : 116 * Math.cbrt(n) - 16;
  return [s, 13 * s * (r - Zo), 13 * s * (o - Qo)];
}, toBase(e) {
  let [t, n, r] = e;
  if (t === 0 || Ie(t)) return [0, 0, 0];
  n = ne(n), r = ne(r);
  let o = n / (13 * t) + Zo, s = r / (13 * t) + Qo, a = t <= 8 ? t / Ko : Math.pow((t + 16) / 116, 3);
  return [a * (9 * o / (4 * s)), a, a * ((12 - 3 * o - 20 * s) / (4 * s))];
}, formats: { color: { id: "--luv", coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"] } } }), Zr = new O({ id: "lchuv", name: "LChuv", coords: { l: { refRange: [0, 100], name: "Lightness" }, c: { refRange: [0, 220], name: "Chroma" }, h: { refRange: [0, 360], type: "angle", name: "Hue" } }, base: Xa, fromBase(e) {
  let [t, n, r] = e, o;
  const s = 0.02;
  return Math.abs(n) < s && Math.abs(r) < s ? o = NaN : o = Math.atan2(r, n) * 180 / Math.PI, [t, Math.sqrt(n ** 2 + r ** 2), Ae(o)];
}, toBase(e) {
  let [t, n, r] = e;
  return n < 0 && (n = 0), isNaN(r) && (r = 0), [t, n * Math.cos(r * Math.PI / 180), n * Math.sin(r * Math.PI / 180)];
}, formats: { color: { id: "--lchuv", coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"] } } });
const il = 216 / 24389, cl = 24389 / 27, Vo = re[0][0], es = re[0][1], Yn = re[0][2], ts = re[1][0], ns = re[1][1], Xn = re[1][2], rs = re[2][0], os = re[2][1], Un = re[2][2];
function at(e, t, n) {
  const r = t / (Math.sin(n) - e * Math.cos(n));
  return r < 0 ? 1 / 0 : r;
}
function bn(e) {
  const t = Math.pow(e + 16, 3) / 1560896, n = t > il ? t : e / cl, r = n * (284517 * Vo - 94839 * Yn), o = n * (838422 * Yn + 769860 * es + 731718 * Vo), s = n * (632260 * Yn - 126452 * es), a = n * (284517 * ts - 94839 * Xn), c = n * (838422 * Xn + 769860 * ns + 731718 * ts), i = n * (632260 * Xn - 126452 * ns), l = n * (284517 * rs - 94839 * Un), u = n * (838422 * Un + 769860 * os + 731718 * rs), f = n * (632260 * Un - 126452 * os);
  return { r0s: r / s, r0i: o * e / s, r1s: r / (s + 126452), r1i: (o - 769860) * e / (s + 126452), g0s: a / i, g0i: c * e / i, g1s: a / (i + 126452), g1i: (c - 769860) * e / (i + 126452), b0s: l / f, b0i: u * e / f, b1s: l / (f + 126452), b1i: (u - 769860) * e / (f + 126452) };
}
function ss(e, t) {
  const n = t / 360 * Math.PI * 2, r = at(e.r0s, e.r0i, n), o = at(e.r1s, e.r1i, n), s = at(e.g0s, e.g0i, n), a = at(e.g1s, e.g1i, n), c = at(e.b0s, e.b0i, n), i = at(e.b1s, e.b1i, n);
  return Math.min(r, o, s, a, c, i);
}
var fl = new O({ id: "hsluv", name: "HSLuv", coords: { h: { refRange: [0, 360], type: "angle", name: "Hue" }, s: { range: [0, 100], name: "Saturation" }, l: { range: [0, 100], name: "Lightness" } }, base: Zr, gamutSpace: pt, fromBase(e) {
  let [t, n, r] = [ne(e[0]), ne(e[1]), ne(e[2])], o;
  if (t > 99.9999999) o = 0, t = 100;
  else if (t < 1e-8) o = 0, t = 0;
  else {
    let s = bn(t), a = ss(s, r);
    o = n / a * 100;
  }
  return [r, o, t];
}, toBase(e) {
  let [t, n, r] = [ne(e[0]), ne(e[1]), ne(e[2])], o;
  if (r > 99.9999999) r = 100, o = 0;
  else if (r < 1e-8) r = 0, o = 0;
  else {
    let s = bn(r);
    o = ss(s, t) / 100 * n;
  }
  return [r, o, t];
}, formats: { color: { id: "--hsluv", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] } } });
re[0][0];
re[0][1];
re[0][2];
re[1][0];
re[1][1];
re[1][2];
re[2][0];
re[2][1];
re[2][2];
function it(e, t) {
  return Math.abs(t) / Math.sqrt(Math.pow(e, 2) + 1);
}
function as(e) {
  let t = it(e.r0s, e.r0i), n = it(e.r1s, e.r1i), r = it(e.g0s, e.g0i), o = it(e.g1s, e.g1i), s = it(e.b0s, e.b0i), a = it(e.b1s, e.b1i);
  return Math.min(t, n, r, o, s, a);
}
var ll = new O({ id: "hpluv", name: "HPLuv", coords: { h: { refRange: [0, 360], type: "angle", name: "Hue" }, s: { range: [0, 100], name: "Saturation" }, l: { range: [0, 100], name: "Lightness" } }, base: Zr, gamutSpace: "self", fromBase(e) {
  let [t, n, r] = [ne(e[0]), ne(e[1]), ne(e[2])], o;
  if (t > 99.9999999) o = 0, t = 100;
  else if (t < 1e-8) o = 0, t = 0;
  else {
    let s = bn(t), a = as(s);
    o = n / a * 100;
  }
  return [r, o, t];
}, toBase(e) {
  let [t, n, r] = [ne(e[0]), ne(e[1]), ne(e[2])], o;
  if (r > 99.9999999) r = 100, o = 0;
  else if (r < 1e-8) r = 0, o = 0;
  else {
    let s = bn(r);
    o = as(s) / 100 * n;
  }
  return [r, o, t];
}, formats: { color: { id: "--hpluv", coords: ["<number> | <angle>", "<percentage> | <number>", "<percentage> | <number>"] } } });
const is = 203, cs = 2610 / 2 ** 14, ul = 2 ** 14 / 2610, dl = 2523 / 2 ** 5, fs = 2 ** 5 / 2523, ls = 3424 / 2 ** 12, us = 2413 / 2 ** 7, ds = 2392 / 2 ** 7;
var hl = new le({ id: "rec2100pq", cssId: "rec2100-pq", name: "REC.2100-PQ", base: En, toBase(e) {
  return e.map(function(t) {
    return (Math.max(t ** fs - ls, 0) / (us - ds * t ** fs)) ** ul * 1e4 / is;
  });
}, fromBase(e) {
  return e.map(function(t) {
    let n = Math.max(t * is / 1e4, 0), r = ls + us * n ** cs, o = 1 + ds * n ** cs;
    return (r / o) ** dl;
  });
} });
const hs = 0.17883277, ps = 0.28466892, gs = 0.55991073, Wn = 3.7743;
var pl = new le({ id: "rec2100hlg", cssId: "rec2100-hlg", name: "REC.2100-HLG", referred: "scene", base: En, toBase(e) {
  return e.map(function(t) {
    return t <= 0.5 ? t ** 2 / 3 * Wn : (Math.exp((t - gs) / hs) + ps) / 12 * Wn;
  });
}, fromBase(e) {
  return e.map(function(t) {
    return t /= Wn, t <= 1 / 12 ? Math.sqrt(3 * t) : hs * Math.log(12 * t - ps) + gs;
  });
} });
const Ua = {};
$e.add("chromatic-adaptation-start", (e) => {
  e.options.method && (e.M = Wa(e.W1, e.W2, e.options.method));
});
$e.add("chromatic-adaptation-end", (e) => {
  e.M || (e.M = Wa(e.W1, e.W2, e.options.method));
});
function kn({ id: e, toCone_M: t, fromCone_M: n }) {
  Ua[e] = arguments[0];
}
function Wa(e, t, n = "Bradford") {
  let r = Ua[n], [o, s, a] = Q(r.toCone_M, e), [c, i, l] = Q(r.toCone_M, t), u = [[c / o, 0, 0], [0, i / s, 0], [0, 0, l / a]], f = Q(u, r.toCone_M);
  return Q(r.fromCone_M, f);
}
kn({ id: "von Kries", toCone_M: [[0.40024, 0.7076, -0.08081], [-0.2263, 1.16532, 0.0457], [0, 0, 0.91822]], fromCone_M: [[1.8599363874558397, -1.1293816185800916, 0.21989740959619328], [0.3611914362417676, 0.6388124632850422, -6370596838649899e-21], [0, 0, 1.0890636230968613]] });
kn({ id: "Bradford", toCone_M: [[0.8951, 0.2664, -0.1614], [-0.7502, 1.7135, 0.0367], [0.0389, -0.0685, 1.0296]], fromCone_M: [[0.9869929054667121, -0.14705425642099013, 0.15996265166373122], [0.4323052697233945, 0.5183602715367774, 0.049291228212855594], [-0.00852866457517732, 0.04004282165408486, 0.96848669578755]] });
kn({ id: "CAT02", toCone_M: [[0.7328, 0.4296, -0.1624], [-0.7036, 1.6975, 61e-4], [3e-3, 0.0136, 0.9834]], fromCone_M: [[1.0961238208355142, -0.27886900021828726, 0.18274517938277307], [0.4543690419753592, 0.4735331543074117, 0.07209780371722911], [-0.009627608738429355, -0.00569803121611342, 1.0153256399545427]] });
kn({ id: "CAT16", toCone_M: [[0.401288, 0.650173, -0.051461], [-0.250268, 1.204414, 0.045854], [-2079e-6, 0.048952, 0.953127]], fromCone_M: [[1.862067855087233, -1.0112546305316845, 0.14918677544445172], [0.3875265432361372, 0.6214474419314753, -0.008973985167612521], [-0.01584149884933386, -0.03412293802851557, 1.0499644368778496]] });
Object.assign(ie, { A: [1.0985, 1, 0.35585], C: [0.98074, 1, 1.18232], D55: [0.95682, 1, 0.92149], D75: [0.94972, 1, 1.22638], E: [1, 1, 1], F2: [0.99186, 1, 0.67393], F7: [0.95041, 1, 1.08747], F11: [1.00962, 1, 0.6435] });
ie.ACES = [0.32168 / 0.33767, 1, (1 - 0.32168 - 0.33767) / 0.33767];
const gl = [[0.6624541811085053, 0.13400420645643313, 0.1561876870049078], [0.27222871678091454, 0.6740817658111484, 0.05368951740793705], [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]], ml = [[1.6410233796943257, -0.32480329418479, -0.23642469523761225], [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137], [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]];
var Ja = new le({ id: "acescg", cssId: "--acescg", name: "ACEScg", coords: { r: { range: [0, 65504], name: "Red" }, g: { range: [0, 65504], name: "Green" }, b: { range: [0, 65504], name: "Blue" } }, referred: "scene", white: ie.ACES, toXYZ_M: gl, fromXYZ_M: ml });
const Vt = 2 ** -16, Jn = -0.35828683, en = (Math.log2(65504) + 9.72) / 17.52;
var yl = new le({ id: "acescc", cssId: "--acescc", name: "ACEScc", coords: { r: { range: [Jn, en], name: "Red" }, g: { range: [Jn, en], name: "Green" }, b: { range: [Jn, en], name: "Blue" } }, referred: "scene", base: Ja, toBase(e) {
  const t = -0.3013698630136986;
  return e.map(function(n) {
    return n <= t ? (2 ** (n * 17.52 - 9.72) - Vt) * 2 : n < en ? 2 ** (n * 17.52 - 9.72) : 65504;
  });
}, fromBase(e) {
  return e.map(function(t) {
    return t <= 0 ? (Math.log2(Vt) + 9.72) / 17.52 : t < Vt ? (Math.log2(Vt + t * 0.5) + 9.72) / 17.52 : (Math.log2(t) + 9.72) / 17.52;
  });
} }), ms = Object.freeze({ __proto__: null, A98RGB: Vf, A98RGB_Linear: ja, ACEScc: yl, ACEScg: Ja, CAM16_JMh: of, HCT: Ot, HPLuv: ll, HSL: za, HSLuv: fl, HSV: qa, HWB: Kf, ICTCP: yr, JzCzHz: mr, Jzazbz: Ma, LCH: kt, LCHuv: Zr, Lab: pe, Lab_D65: br, Luv: Xa, OKLCH: sl, OKLab: ut, P3: Na, P3_Linear: La, ProPhoto: ol, ProPhoto_Linear: Fa, REC_2020: Ca, REC_2020_Linear: En, REC_2100_HLG: pl, REC_2100_PQ: hl, XYZ_ABS_D65: Jr, XYZ_D50: Wr, XYZ_D65: se, sRGB: pt, sRGB_Linear: Da });
class G {
  constructor(...t) {
    let n;
    t.length === 1 && (n = z(t[0]));
    let r, o, s;
    n ? (r = n.space || n.spaceId, o = n.coords, s = n.alpha) : [r, o, s] = t, Object.defineProperty(this, "space", { value: O.get(r), writable: false, enumerable: true, configurable: true }), this.coords = o ? o.slice() : [0, 0, 0], this.alpha = s > 1 || s === void 0 ? 1 : s < 0 ? 0 : s;
    for (let a = 0; a < this.coords.length; a++) this.coords[a] === "NaN" && (this.coords[a] = NaN);
    for (let a in this.space.coords) Object.defineProperty(this, a, { get: () => this.get(a), set: (c) => this.set(a, c) });
  }
  get spaceId() {
    return this.space.id;
  }
  clone() {
    return new G(this.space, this.coords, this.alpha);
  }
  toJSON() {
    return { spaceId: this.spaceId, coords: this.coords, alpha: this.alpha };
  }
  display(...t) {
    let n = Pf(this, ...t);
    return n.color = new G(n.color), n;
  }
  static get(t, ...n) {
    return t instanceof G ? t : new G(t, ...n);
  }
  static defineFunction(t, n, r = n) {
    let { instance: o = true, returns: s } = r, a = function(...c) {
      let i = n(...c);
      if (s === "color") i = G.get(i);
      else if (s === "function<color>") {
        let l = i;
        i = function(...u) {
          let f = l(...u);
          return G.get(f);
        }, Object.assign(i, l);
      } else s === "array<color>" && (i = i.map((l) => G.get(l)));
      return i;
    };
    t in G || (G[t] = a), o && (G.prototype[t] = function(...c) {
      return a(this, ...c);
    });
  }
  static defineFunctions(t) {
    for (let n in t) G.defineFunction(n, t[n], t[n]);
  }
  static extend(t) {
    if (t.register) t.register(G);
    else for (let n in t) G.defineFunction(n, t[n]);
  }
}
G.defineFunctions({ get: he, getAll: Ft, set: ke, setAll: Ur, to: Z, equals: Mf, inGamut: Ke, toGamut: He, distance: Pa, toString: At });
Object.assign(G, { util: vc, hooks: $e, WHITES: ie, Space: O, spaces: O.registry, parse: va, defaults: me });
for (let e of Object.keys(ms)) O.register(ms[e]);
for (let e in O.registry) Pr(e, O.registry[e]);
$e.add("colorspace-init-end", (e) => {
  var _a2;
  Pr(e.id, e), (_a2 = e.aliases) == null ? void 0 : _a2.forEach((t) => {
    Pr(t, e);
  });
});
function Pr(e, t) {
  let n = e.replace(/-/g, "_");
  Object.defineProperty(G.prototype, n, { get() {
    let r = this.getAll(e);
    return typeof Proxy > "u" ? r : new Proxy(r, { has: (o, s) => {
      try {
        return O.resolveCoord([t, s]), true;
      } catch {
      }
      return Reflect.has(o, s);
    }, get: (o, s, a) => {
      if (s && typeof s != "symbol" && !(s in o)) {
        let { index: c } = O.resolveCoord([t, s]);
        if (c >= 0) return o[c];
      }
      return Reflect.get(o, s, a);
    }, set: (o, s, a, c) => {
      if (s && typeof s != "symbol" && !(s in o) || s >= 0) {
        let { index: i } = O.resolveCoord([t, s]);
        if (i >= 0) return o[i] = a, this.setAll(e, o), true;
      }
      return Reflect.set(o, s, a, c);
    } });
  }, set(r) {
    this.setAll(e, r);
  }, configurable: true, enumerable: true });
}
G.extend(ht);
G.extend({ deltaE: St });
Object.assign(G, { deltaEMethods: ht });
G.extend(Wf);
G.extend({ contrast: jf });
G.extend(Yf);
G.extend(Rf);
G.extend(Gf);
G.extend(nn);
function ys() {
  return ys = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ys.apply(null, arguments);
}
function xt(e) {
  "@babel/helpers - typeof";
  return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xt(e);
}
function wl(e, t) {
  if (xt(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (xt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vl(e) {
  var t = wl(e, "string");
  return xt(t) == "symbol" ? t : t + "";
}
function hd(e, t, n) {
  return (t = vl(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: true, configurable: true, writable: true }) : e[t] = n, e;
}
var Gn, ws;
function bl() {
  if (ws) return Gn;
  ws = 1;
  var e = Object.assign || function(o) {
    for (var s = 1; s < arguments.length; s++) {
      var a = arguments[s];
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (o[c] = a[c]);
    }
    return o;
  }, t = { "{": "\\{", "}": "\\}", "\\": "\\textbackslash{}", "#": "\\#", $: "\\$", "%": "\\%", "&": "\\&", "^": "\\textasciicircum{}", _: "\\_", "~": "\\textasciitilde{}" }, n = { "\u2013": "\\--", "\u2014": "\\---", " ": "~", "	": "\\qquad{}", "\r\n": "\\newline{}", "\n": "\\newline{}" }, r = function(s, a) {
    return e({}, s, a);
  };
  return Gn = function(o) {
    for (var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = s.preserveFormatting, c = a === void 0 ? false : a, i = s.escapeMapFn, l = i === void 0 ? r : i, u = String(o), f = "", d = l(e({}, t), c ? e({}, n) : {}), h = Object.keys(d), p = function() {
      var m = false;
      h.forEach(function(P, y) {
        m || u.length >= P.length && u.slice(0, P.length) === P && (f += d[h[y]], u = u.slice(P.length, u.length), m = true);
      }), m || (f += u.slice(0, 1), u = u.slice(1, u.length));
    }; u; ) p();
    return f;
  }, Gn;
}
var Pl = bl();
const pd = Br(Pl);
var rn = { exports: {} }, Ml = rn.exports, vs;
function Sl() {
  return vs || (vs = 1, (function(e) {
    (function(t, n, r) {
      function o(i) {
        var l = this, u = c();
        l.next = function() {
          var f = 2091639 * l.s0 + l.c * 23283064365386963e-26;
          return l.s0 = l.s1, l.s1 = l.s2, l.s2 = f - (l.c = f | 0);
        }, l.c = 1, l.s0 = u(" "), l.s1 = u(" "), l.s2 = u(" "), l.s0 -= u(i), l.s0 < 0 && (l.s0 += 1), l.s1 -= u(i), l.s1 < 0 && (l.s1 += 1), l.s2 -= u(i), l.s2 < 0 && (l.s2 += 1), u = null;
      }
      function s(i, l) {
        return l.c = i.c, l.s0 = i.s0, l.s1 = i.s1, l.s2 = i.s2, l;
      }
      function a(i, l) {
        var u = new o(i), f = l && l.state, d = u.next;
        return d.int32 = function() {
          return u.next() * 4294967296 | 0;
        }, d.double = function() {
          return d() + (d() * 2097152 | 0) * 11102230246251565e-32;
        }, d.quick = d, f && (typeof f == "object" && s(f, u), d.state = function() {
          return s(u, {});
        }), d;
      }
      function c() {
        var i = 4022871197, l = function(u) {
          u = String(u);
          for (var f = 0; f < u.length; f++) {
            i += u.charCodeAt(f);
            var d = 0.02519603282416938 * i;
            i = d >>> 0, d -= i, d *= i, i = d >>> 0, d -= i, i += d * 4294967296;
          }
          return (i >>> 0) * 23283064365386963e-26;
        };
        return l;
      }
      n && n.exports ? n.exports = a : this.alea = a;
    })(Ml, e);
  })(rn)), rn.exports;
}
var on = { exports: {} }, Rl = on.exports, bs;
function Tl() {
  return bs || (bs = 1, (function(e) {
    (function(t, n, r) {
      function o(c) {
        var i = this, l = "";
        i.x = 0, i.y = 0, i.z = 0, i.w = 0, i.next = function() {
          var f = i.x ^ i.x << 11;
          return i.x = i.y, i.y = i.z, i.z = i.w, i.w ^= i.w >>> 19 ^ f ^ f >>> 8;
        }, c === (c | 0) ? i.x = c : l += c;
        for (var u = 0; u < l.length + 64; u++) i.x ^= l.charCodeAt(u) | 0, i.next();
      }
      function s(c, i) {
        return i.x = c.x, i.y = c.y, i.z = c.z, i.w = c.w, i;
      }
      function a(c, i) {
        var l = new o(c), u = i && i.state, f = function() {
          return (l.next() >>> 0) / 4294967296;
        };
        return f.double = function() {
          do
            var d = l.next() >>> 11, h = (l.next() >>> 0) / 4294967296, p = (d + h) / (1 << 21);
          while (p === 0);
          return p;
        }, f.int32 = l.next, f.quick = f, u && (typeof u == "object" && s(u, l), f.state = function() {
          return s(l, {});
        }), f;
      }
      n && n.exports ? n.exports = a : this.xor128 = a;
    })(Rl, e);
  })(on)), on.exports;
}
var sn = { exports: {} }, Al = sn.exports, Ps;
function El() {
  return Ps || (Ps = 1, (function(e) {
    (function(t, n, r) {
      function o(c) {
        var i = this, l = "";
        i.next = function() {
          var f = i.x ^ i.x >>> 2;
          return i.x = i.y, i.y = i.z, i.z = i.w, i.w = i.v, (i.d = i.d + 362437 | 0) + (i.v = i.v ^ i.v << 4 ^ (f ^ f << 1)) | 0;
        }, i.x = 0, i.y = 0, i.z = 0, i.w = 0, i.v = 0, c === (c | 0) ? i.x = c : l += c;
        for (var u = 0; u < l.length + 64; u++) i.x ^= l.charCodeAt(u) | 0, u == l.length && (i.d = i.x << 10 ^ i.x >>> 4), i.next();
      }
      function s(c, i) {
        return i.x = c.x, i.y = c.y, i.z = c.z, i.w = c.w, i.v = c.v, i.d = c.d, i;
      }
      function a(c, i) {
        var l = new o(c), u = i && i.state, f = function() {
          return (l.next() >>> 0) / 4294967296;
        };
        return f.double = function() {
          do
            var d = l.next() >>> 11, h = (l.next() >>> 0) / 4294967296, p = (d + h) / (1 << 21);
          while (p === 0);
          return p;
        }, f.int32 = l.next, f.quick = f, u && (typeof u == "object" && s(u, l), f.state = function() {
          return s(l, {});
        }), f;
      }
      n && n.exports ? n.exports = a : this.xorwow = a;
    })(Al, e);
  })(sn)), sn.exports;
}
var an = { exports: {} }, _l = an.exports, Ms;
function kl() {
  return Ms || (Ms = 1, (function(e) {
    (function(t, n, r) {
      function o(c) {
        var i = this;
        i.next = function() {
          var u = i.x, f = i.i, d, h;
          return d = u[f], d ^= d >>> 7, h = d ^ d << 24, d = u[f + 1 & 7], h ^= d ^ d >>> 10, d = u[f + 3 & 7], h ^= d ^ d >>> 3, d = u[f + 4 & 7], h ^= d ^ d << 7, d = u[f + 7 & 7], d = d ^ d << 13, h ^= d ^ d << 9, u[f] = h, i.i = f + 1 & 7, h;
        };
        function l(u, f) {
          var d, h = [];
          if (f === (f | 0)) h[0] = f;
          else for (f = "" + f, d = 0; d < f.length; ++d) h[d & 7] = h[d & 7] << 15 ^ f.charCodeAt(d) + h[d + 1 & 7] << 13;
          for (; h.length < 8; ) h.push(0);
          for (d = 0; d < 8 && h[d] === 0; ++d) ;
          for (d == 8 ? h[7] = -1 : h[d], u.x = h, u.i = 0, d = 256; d > 0; --d) u.next();
        }
        l(i, c);
      }
      function s(c, i) {
        return i.x = c.x.slice(), i.i = c.i, i;
      }
      function a(c, i) {
        c == null && (c = +/* @__PURE__ */ new Date());
        var l = new o(c), u = i && i.state, f = function() {
          return (l.next() >>> 0) / 4294967296;
        };
        return f.double = function() {
          do
            var d = l.next() >>> 11, h = (l.next() >>> 0) / 4294967296, p = (d + h) / (1 << 21);
          while (p === 0);
          return p;
        }, f.int32 = l.next, f.quick = f, u && (u.x && s(u, l), f.state = function() {
          return s(l, {});
        }), f;
      }
      n && n.exports ? n.exports = a : this.xorshift7 = a;
    })(_l, e);
  })(an)), an.exports;
}
var cn = { exports: {} }, Ol = cn.exports, Ss;
function xl() {
  return Ss || (Ss = 1, (function(e) {
    (function(t, n, r) {
      function o(c) {
        var i = this;
        i.next = function() {
          var u = i.w, f = i.X, d = i.i, h, p;
          return i.w = u = u + 1640531527 | 0, p = f[d + 34 & 127], h = f[d = d + 1 & 127], p ^= p << 13, h ^= h << 17, p ^= p >>> 15, h ^= h >>> 12, p = f[d] = p ^ h, i.i = d, p + (u ^ u >>> 16) | 0;
        };
        function l(u, f) {
          var d, h, p, w, m, P = [], y = 128;
          for (f === (f | 0) ? (h = f, f = null) : (f = f + "\0", h = 0, y = Math.max(y, f.length)), p = 0, w = -32; w < y; ++w) f && (h ^= f.charCodeAt((w + 32) % f.length)), w === 0 && (m = h), h ^= h << 10, h ^= h >>> 15, h ^= h << 4, h ^= h >>> 13, w >= 0 && (m = m + 1640531527 | 0, d = P[w & 127] ^= h + m, p = d == 0 ? p + 1 : 0);
          for (p >= 128 && (P[(f && f.length || 0) & 127] = -1), p = 127, w = 512; w > 0; --w) h = P[p + 34 & 127], d = P[p = p + 1 & 127], h ^= h << 13, d ^= d << 17, h ^= h >>> 15, d ^= d >>> 12, P[p] = h ^ d;
          u.w = m, u.X = P, u.i = p;
        }
        l(i, c);
      }
      function s(c, i) {
        return i.i = c.i, i.w = c.w, i.X = c.X.slice(), i;
      }
      function a(c, i) {
        c == null && (c = +/* @__PURE__ */ new Date());
        var l = new o(c), u = i && i.state, f = function() {
          return (l.next() >>> 0) / 4294967296;
        };
        return f.double = function() {
          do
            var d = l.next() >>> 11, h = (l.next() >>> 0) / 4294967296, p = (d + h) / (1 << 21);
          while (p === 0);
          return p;
        }, f.int32 = l.next, f.quick = f, u && (u.X && s(u, l), f.state = function() {
          return s(l, {});
        }), f;
      }
      n && n.exports ? n.exports = a : this.xor4096 = a;
    })(Ol, e);
  })(cn)), cn.exports;
}
var fn = { exports: {} }, Cl = fn.exports, Rs;
function Ll() {
  return Rs || (Rs = 1, (function(e) {
    (function(t, n, r) {
      function o(c) {
        var i = this, l = "";
        i.next = function() {
          var f = i.b, d = i.c, h = i.d, p = i.a;
          return f = f << 25 ^ f >>> 7 ^ d, d = d - h | 0, h = h << 24 ^ h >>> 8 ^ p, p = p - f | 0, i.b = f = f << 20 ^ f >>> 12 ^ d, i.c = d = d - h | 0, i.d = h << 16 ^ d >>> 16 ^ p, i.a = p - f | 0;
        }, i.a = 0, i.b = 0, i.c = -1640531527, i.d = 1367130551, c === Math.floor(c) ? (i.a = c / 4294967296 | 0, i.b = c | 0) : l += c;
        for (var u = 0; u < l.length + 20; u++) i.b ^= l.charCodeAt(u) | 0, i.next();
      }
      function s(c, i) {
        return i.a = c.a, i.b = c.b, i.c = c.c, i.d = c.d, i;
      }
      function a(c, i) {
        var l = new o(c), u = i && i.state, f = function() {
          return (l.next() >>> 0) / 4294967296;
        };
        return f.double = function() {
          do
            var d = l.next() >>> 11, h = (l.next() >>> 0) / 4294967296, p = (d + h) / (1 << 21);
          while (p === 0);
          return p;
        }, f.int32 = l.next, f.quick = f, u && (typeof u == "object" && s(u, l), f.state = function() {
          return s(l, {});
        }), f;
      }
      n && n.exports ? n.exports = a : this.tychei = a;
    })(Cl, e);
  })(fn)), fn.exports;
}
var ln = { exports: {} };
const Dl = {}, Nl = Object.freeze(Object.defineProperty({ __proto__: null, default: Dl }, Symbol.toStringTag, { value: "Module" })), Bl = oa(Nl);
var Il = ln.exports, Ts;
function $l() {
  return Ts || (Ts = 1, (function(e) {
    (function(t, n, r) {
      var o = 256, s = 6, a = 52, c = "random", i = r.pow(o, s), l = r.pow(2, a), u = l * 2, f = o - 1, d;
      function h(T, S, _) {
        var L = [];
        S = S == true ? { entropy: true } : S || {};
        var M = P(m(S.entropy ? [T, R(n)] : T ?? y(), 3), L), B = new p(L), q = function() {
          for (var D = B.g(s), j = i, J = 0; D < l; ) D = (D + J) * o, j *= o, J = B.g(1);
          for (; D >= u; ) D /= 2, j /= 2, J >>>= 1;
          return (D + J) / j;
        };
        return q.int32 = function() {
          return B.g(4) | 0;
        }, q.quick = function() {
          return B.g(4) / 4294967296;
        }, q.double = q, P(R(B.S), n), (S.pass || _ || function(D, j, J, g) {
          return g && (g.S && w(g, B), D.state = function() {
            return w(B, {});
          }), J ? (r[c] = D, j) : D;
        })(q, M, "global" in S ? S.global : this == r, S.state);
      }
      function p(T) {
        var S, _ = T.length, L = this, M = 0, B = L.i = L.j = 0, q = L.S = [];
        for (_ || (T = [_++]); M < o; ) q[M] = M++;
        for (M = 0; M < o; M++) q[M] = q[B = f & B + T[M % _] + (S = q[M])], q[B] = S;
        (L.g = function(D) {
          for (var j, J = 0, g = L.i, b = L.j, A = L.S; D--; ) j = A[g = f & g + 1], J = J * o + A[f & (A[g] = A[b = f & b + j]) + (A[b] = j)];
          return L.i = g, L.j = b, J;
        })(o);
      }
      function w(T, S) {
        return S.i = T.i, S.j = T.j, S.S = T.S.slice(), S;
      }
      function m(T, S) {
        var _ = [], L = typeof T, M;
        if (S && L == "object") for (M in T) try {
          _.push(m(T[M], S - 1));
        } catch {
        }
        return _.length ? _ : L == "string" ? T : T + "\0";
      }
      function P(T, S) {
        for (var _ = T + "", L, M = 0; M < _.length; ) S[f & M] = f & (L ^= S[f & M] * 19) + _.charCodeAt(M++);
        return R(S);
      }
      function y() {
        try {
          var T;
          return d && (T = d.randomBytes) ? T = T(o) : (T = new Uint8Array(o), (t.crypto || t.msCrypto).getRandomValues(T)), R(T);
        } catch {
          var S = t.navigator, _ = S && S.plugins;
          return [+/* @__PURE__ */ new Date(), t, _, t.screen, R(n)];
        }
      }
      function R(T) {
        return String.fromCharCode.apply(0, T);
      }
      if (P(r.random(), n), e.exports) {
        e.exports = h;
        try {
          d = Bl;
        } catch {
        }
      } else r["seed" + c] = h;
    })(typeof self < "u" ? self : Il, [], Math);
  })(ln)), ln.exports;
}
var Kn, As;
function Hl() {
  if (As) return Kn;
  As = 1;
  var e = Sl(), t = Tl(), n = El(), r = kl(), o = xl(), s = Ll(), a = $l();
  return a.alea = e, a.xor128 = t, a.xorwow = n, a.xorshift7 = r, a.xor4096 = o, a.tychei = s, Kn = a, Kn;
}
var zl = Hl();
const gd = Br(zl);
var Zn, Es;
function ql() {
  return Es || (Es = 1, Zn = function e(t, n) {
    var r = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi, o = /(^[ ]*|[ ]*$)/g, s = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/, a = /^0x[0-9a-f]+$/i, c = /^0/, i = function(R) {
      return e.insensitive && ("" + R).toLowerCase() || "" + R;
    }, l = i(t).replace(o, "") || "", u = i(n).replace(o, "") || "", f = l.replace(r, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), d = u.replace(r, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), h = parseInt(l.match(a), 16) || f.length !== 1 && l.match(s) && Date.parse(l), p = parseInt(u.match(a), 16) || h && u.match(s) && Date.parse(u) || null, w, m;
    if (p) {
      if (h < p) return -1;
      if (h > p) return 1;
    }
    for (var P = 0, y = Math.max(f.length, d.length); P < y; P++) {
      if (w = !(f[P] || "").match(c) && parseFloat(f[P]) || f[P] || 0, m = !(d[P] || "").match(c) && parseFloat(d[P]) || d[P] || 0, isNaN(w) !== isNaN(m)) return isNaN(w) ? 1 : -1;
      if (typeof w != typeof m && (w += "", m += ""), w < m) return -1;
      if (w > m) return 1;
    }
    return 0;
  }), Zn;
}
var jl = ql();
const md = Br(jl);
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const Ga = Object.freeze({ p: 0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn, n: 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n, h: 1n, a: 0n, b: 7n, Gx: 0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n, Gy: 0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n }), { p: De, n: Xt, Gx: Fl, Gy: Yl, b: Ka } = Ga, ce = 32, Ct = 64, Mr = { publicKey: ce + 1, publicKeyUncompressed: Ct + 1, seed: ce + ce / 2 }, ee = (e = "", t = Error) => {
  const n = new t(e), { captureStackTrace: r } = Error;
  throw typeof r == "function" && r(n, ee), n;
}, Xl = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array" && e.BYTES_PER_ELEMENT === 1, Pe = (e, t, n = "") => {
  const r = Xl(e), o = e == null ? void 0 : e.length, s = t !== void 0;
  if (!r || s && o !== t) {
    const a = n && `"${n}" `, c = s ? ` of length ${t}` : "", i = r ? `length=${o}` : `type=${typeof e}`, l = a + "expected Uint8Array" + c + ", got " + i;
    return r ? ee(l, RangeError) : ee(l, TypeError);
  }
  return e;
}, Lt = (e) => new Uint8Array(e), Za = (e, t) => e.toString(16).padStart(t, "0"), Qa = (e) => {
  let t = "";
  for (const n of Pe(e)) t += Za(n, 2);
  return t;
}, Ee = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, _s = (e) => e >= Ee._0 && e <= Ee._9 ? e - Ee._0 : e >= Ee.A && e <= Ee.F ? e - (Ee.A - 10) : e >= Ee.a && e <= Ee.f ? e - (Ee.a - 10) : void 0, Va = (e) => {
  const t = "hex invalid";
  if (typeof e != "string") return ee(t);
  const n = e.length, r = n / 2;
  if (n % 2) return ee(t);
  const o = Lt(r);
  for (let s = 0, a = 0; s < r; s++, a += 2) {
    const c = _s(e.charCodeAt(a)), i = _s(e.charCodeAt(a + 1));
    if (c === void 0 || i === void 0) return ee(t);
    o[s] = c * 16 + i;
  }
  return o;
}, ks = () => {
  var _a2;
  return ((_a2 = globalThis == null ? void 0 : globalThis.crypto) == null ? void 0 : _a2.subtle) ?? ee("crypto.subtle must be defined, consider polyfill");
}, gt = (...e) => {
  let t = 0;
  for (const o of e) t += Pe(o).length;
  const n = Lt(t);
  let r = 0;
  for (const o of e) n.set(o, r), r += o.length;
  return n;
}, Qr = (e = ce) => (globalThis == null ? void 0 : globalThis.crypto).getRandomValues(Lt(e)), Sr = BigInt, Ve = (e, t, n, r = "bad number: out of range") => typeof e != "bigint" ? ee(r, TypeError) : t <= e && e < n ? e : ee(r, RangeError), C = (e, t = De) => {
  const n = e % t;
  return n >= 0n ? n : t + n;
}, On = (e) => C(e, Xt), Ul = (e, t) => {
  (e === 0n || t <= 0n) && ee("no inverse n=" + e + " mod=" + t);
  let n = C(e, t), r = t, o = 0n, s = 1n;
  for (; n !== 0n; ) {
    const a = r / n, c = r % n, i = o - s * a;
    r = n, n = c, o = s, s = i;
  }
  return r === 1n ? C(o, t) : ee("no inverse");
}, ei = (e) => {
  const t = Ql[e];
  return typeof t != "function" && ee("hashes." + e + " not set"), t;
}, Os = (e, t, n) => Pe(ei(e)(t, n), ce, "digest"), xs = (e, t, n) => Promise.resolve(ei(e)(t, n)).then((r) => Pe(r, ce, "digest")), Qn = (e) => e instanceof de ? e : ee("Point expected"), ti = (e) => C(C(e * e) * e + Ka), Cs = (e) => Ve(e, 0n, De), un = (e) => Ve(e, 1n, De), Wl = (e) => Ve(e, 1n, Xt), xn = (e) => !(e & 1n), ni = (e) => Uint8Array.of(e), Jl = (e) => ni(xn(e) ? 2 : 3), ri = (e) => {
  const t = ti(un(e));
  let n = 1n;
  for (let r = t, o = (De + 1n) / 4n; o > 0n; o >>= 1n) o & 1n && (n = n * r % De), r = r * r % De;
  return C(n * n) !== t && ee("sqrt invalid"), xn(n) ? n : C(-n);
};
const _de = class _de {
  constructor(t, n, r) {
    __publicField(this, "X");
    __publicField(this, "Y");
    __publicField(this, "Z");
    this.X = Cs(t), this.Y = un(n), this.Z = Cs(r), Object.freeze(this);
  }
  static CURVE() {
    return Ga;
  }
  static fromAffine(t) {
    const { x: n, y: r } = t;
    return n === 0n && r === 0n ? We : new _de(n, r, 1n);
  }
  static fromBytes(t) {
    Pe(t);
    const { publicKey: n, publicKeyUncompressed: r } = Mr;
    let o;
    const s = t.length, a = t[0], c = t.subarray(1), i = Pn(c, 0, ce);
    if (s === n && (a === 2 || a === 3)) {
      let l = ri(i);
      a === 3 && (l = C(-l)), o = new _de(i, l, 1n);
    }
    return s === r && a === 4 && (o = new _de(i, Pn(c, ce, Ct), 1n)), o ? o.assertValidity() : ee("bad point: not on curve");
  }
  static fromHex(t) {
    return _de.fromBytes(Va(t));
  }
  get x() {
    return this.toAffine().x;
  }
  get y() {
    return this.toAffine().y;
  }
  equals(t) {
    const { X: n, Y: r, Z: o } = this, { X: s, Y: a, Z: c } = Qn(t), i = C(n * c), l = C(s * o), u = C(r * c), f = C(a * o);
    return i === l && u === f;
  }
  is0() {
    return this.equals(We);
  }
  negate() {
    return new _de(this.X, C(-this.Y), this.Z);
  }
  double() {
    return this.add(this);
  }
  add(t) {
    const { X: n, Y: r, Z: o } = this, { X: s, Y: a, Z: c } = Qn(t), i = 0n, l = Ka;
    let u = 0n, f = 0n, d = 0n;
    const h = C(l * 3n);
    let p = C(n * s), w = C(r * a), m = C(o * c), P = C(n + r), y = C(s + a);
    P = C(P * y), y = C(p + w), P = C(P - y), y = C(n + o);
    let R = C(s + c);
    return y = C(y * R), R = C(p + m), y = C(y - R), R = C(r + o), u = C(a + c), R = C(R * u), u = C(w + m), R = C(R - u), d = C(i * y), u = C(h * m), d = C(u + d), u = C(w - d), d = C(w + d), f = C(u * d), w = C(p + p), w = C(w + p), m = C(i * m), y = C(h * y), w = C(w + m), m = C(p - m), m = C(i * m), y = C(y + m), p = C(w * y), f = C(f + p), p = C(R * y), u = C(P * u), u = C(u - p), p = C(P * w), d = C(R * d), d = C(d + p), new _de(u, f, d);
  }
  subtract(t) {
    return this.add(Qn(t).negate());
  }
  multiply(t, n = true) {
    if (!n && t === 0n) return We;
    if (Wl(t), t === 1n) return this;
    if (this.equals(et)) return iu(t).p;
    let r = We, o = et;
    for (let s = this; t > 0n; s = s.double(), t >>= 1n) t & 1n ? r = r.add(s) : n && (o = o.add(s));
    return r;
  }
  multiplyUnsafe(t) {
    return this.multiply(t, false);
  }
  toAffine() {
    const { X: t, Y: n, Z: r } = this;
    if (this.equals(We)) return { x: 0n, y: 0n };
    if (r === 1n) return { x: t, y: n };
    const o = Ul(r, De);
    return C(r * o) !== 1n && ee("inverse invalid"), { x: C(t * o), y: C(n * o) };
  }
  assertValidity() {
    const { x: t, y: n } = this.toAffine();
    return un(t), un(n), C(n * n) === ti(t) ? this : ee("bad point: not on curve");
  }
  toBytes(t = true) {
    const { x: n, y: r } = this.assertValidity().toAffine(), o = Te(n);
    return t ? gt(Jl(r), o) : gt(ni(4), o, Te(r));
  }
  toHex(t) {
    return Qa(this.toBytes(t));
  }
};
__publicField(_de, "BASE");
__publicField(_de, "ZERO");
let de = _de;
const et = new de(Fl, Yl, 1n), We = new de(0n, 1n, 0n);
de.BASE = et;
de.ZERO = We;
const Gl = (e, t, n) => et.multiply(t, false).add(e.multiply(n, false)).assertValidity(), tt = (e) => Sr("0x" + (Qa(e) || "0")), Pn = (e, t, n) => tt(e.subarray(t, n)), Kl = 2n ** 256n, Te = (e) => Va(Za(Ve(e, 0n, Kl), Ct)), Zl = (e) => {
  const t = tt(Pe(e, ce, "secret key"));
  return Ve(t, 1n, Xt, "invalid secret key: outside of range");
}, Ls = "SHA-256", Ql = { hmacSha256Async: async (e, t) => {
  const n = ks(), r = "HMAC", o = await n.importKey("raw", e, { name: r, hash: { name: Ls } }, false, ["sign"]);
  return Lt(await n.sign(r, o, t));
}, hmacSha256: void 0, sha256Async: async (e) => Lt(await ks().digest(Ls, e)), sha256: void 0 }, Vl = (e) => {
  if (e = e === void 0 ? Qr(Mr.seed) : e, Pe(e), e.length < Mr.seed || e.length > 1024) return ee("expected 48-1024b", RangeError);
  const t = C(tt(e), Xt - 1n);
  return Te(t + 1n);
}, eu = (e) => (t) => {
  const n = Vl(t);
  return { secretKey: n, publicKey: e(n) };
}, oi = (e) => Uint8Array.from("BIP0340/" + e, (t) => t.charCodeAt(0)), si = "aux", ai = "nonce", ii = "challenge", Rr = (e, ...t) => {
  const n = Os("sha256", oi(e));
  return Os("sha256", gt(n, n, ...t));
}, Tr = (e, ...t) => xs("sha256Async", oi(e)).then((n) => xs("sha256Async", gt(n, n, ...t))), Vr = (e) => {
  const t = Zl(e), n = et.multiply(t), { x: r, y: o } = n.assertValidity().toAffine(), s = xn(o) ? t : On(-t), a = Te(r);
  return { d: s, px: a };
}, eo = (e) => On(tt(e)), ci = (...e) => eo(Rr(ii, ...e)), fi = async (...e) => eo(await Tr(ii, ...e)), li = (e) => Vr(e).px, tu = eu(li), ui = (e, t, n) => {
  const { px: r, d: o } = Vr(t);
  return { m: Pe(e), px: r, d: o, a: Pe(n, ce) };
}, di = (e) => {
  const t = eo(e);
  t === 0n && ee("sign failed: k is zero");
  const { px: n, d: r } = Vr(Te(t));
  return { rx: n, k: r };
}, hi = (e, t, n, r) => gt(t, Te(On(e + n * r))), pi = "invalid signature produced", nu = (e, t, n = Qr(ce)) => {
  const { m: r, px: o, d: s, a } = ui(e, t, n), c = Rr(si, a), i = Te(s ^ tt(c)), l = Rr(ai, i, o, r), { rx: u, k: f } = di(l), d = ci(u, o, r), h = hi(f, u, d, s);
  return mi(h, r, o) || ee(pi), h;
}, ru = async (e, t, n = Qr(ce)) => {
  const { m: r, px: o, d: s, a } = ui(e, t, n), c = await Tr(si, a), i = Te(s ^ tt(c)), l = await Tr(ai, i, o, r), { rx: u, k: f } = di(l), d = await fi(u, o, r), h = hi(f, u, d, s);
  return await yi(h, r, o) || ee(pi), h;
}, ou = (e, t) => e instanceof Promise ? e.then(t) : t(e), gi = (e, t, n, r) => {
  const o = Pe(e, Ct, "signature"), s = Pe(t, void 0, "message"), a = Pe(n, ce, "publicKey");
  try {
    const c = tt(a), i = ri(c), l = new de(c, i, 1n).assertValidity(), u = Te(l.toAffine().x), f = Pn(o, 0, ce);
    Ve(f, 1n, De);
    const d = Pn(o, ce, Ct);
    Ve(d, 1n, Xt);
    const h = gt(Te(f), u, s);
    return ou(r(h), (p) => {
      const { x: w, y: m } = Gl(l, d, On(-p)).toAffine();
      return !(!xn(m) || w !== f);
    });
  } catch {
    return false;
  }
}, mi = (e, t, n) => gi(e, t, n, ci), yi = async (e, t, n) => gi(e, t, n, fi), wi = Object.freeze({ keygen: tu, getPublicKey: li, sign: nu, verify: mi, signAsync: ru, verifyAsync: yi }), Mn = 8, su = 256, vi = Math.ceil(su / Mn) + 1, Ar = 2 ** (Mn - 1), au = () => {
  const e = [];
  let t = et, n = t;
  for (let r = 0; r < vi; r++) {
    n = t, e.push(n);
    for (let o = 1; o < Ar; o++) n = n.add(t), e.push(n);
    t = n.double();
  }
  return e;
};
let Ds;
const Ns = (e, t) => {
  const n = t.negate();
  return e ? n : t;
}, iu = (e) => {
  const t = Ds || (Ds = au());
  let n = We, r = et;
  const o = 2 ** Mn, s = o, a = Sr(o - 1), c = Sr(Mn);
  for (let i = 0; i < vi; i++) {
    let l = Number(e & a);
    e >>= c, l > Ar && (l -= s, e += 1n);
    const u = i * Ar, f = u, d = u + Math.abs(l) - 1, h = i % 2 !== 0, p = l < 0;
    l === 0 ? r = r.add(Ns(h, t[f])) : n = n.add(Ns(p, t[d]));
  }
  return e !== 0n && ee("invalid wnaf"), { p: n, f: r };
}, { floor: Er, min: cu, sin: fu } = Math, Se = "Trystero", Dt = (e, t) => Array(e).fill(void 0).map(t), lu = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz", wt = (e) => Dt(e, () => lu[Er(Math.random() * 62)] ?? "").join(""), Me = wt(20), nt = Promise.all.bind(Promise), bi = typeof window < "u", { entries: Ze, fromEntries: Pi, keys: ve, values: lt } = Object, ae = () => {
}, Mi = "candidate", W = (e) => (e !== null && clearTimeout(e), null), U = (e) => new Error(`${Se}: ${e}`), mt = (e, t) => e instanceof Error && e.message ? e.message : typeof e == "string" && e ? e : ye(e ?? t), Ce = (e, t) => e instanceof Error ? e : U(mt(e, t)), uu = new TextEncoder(), du = new TextDecoder(), Ne = (e) => uu.encode(e), Ge = (e) => du.decode(e), Nt = (e) => e.reduce((t, n) => t + n.toString(16).padStart(2, "0"), ""), Bt = (...e) => e.join("@"), hu = (e, t) => {
  const n = [...e], r = () => {
    const s = fu(t++) * 1e4;
    return s - Er(s);
  };
  let o = n.length;
  for (; o; ) {
    const s = Er(r() * o--), a = n[o];
    n[o] = n[s], n[s] = a;
  }
  return n;
}, pu = (e, t, n, r = false) => {
  var _a2, _b;
  return ((_a2 = e.relayConfig) == null ? void 0 : _a2.urls) || (r ? hu(t, Si(e.appId)) : t).slice(0, ((_b = e.relayConfig) == null ? void 0 : _b.redundancy) ?? n);
}, ye = JSON.stringify, It = (e) => {
  try {
    return JSON.parse(e);
  } catch {
    throw U(`failed to parse JSON: ${e}`);
  }
}, Si = (e, t = Number.MAX_SAFE_INTEGER) => e.split("").reduce((n, r) => n + r.charCodeAt(0), 0) % t, Bs = 3333, gu = 6e4, Vn = {};
let Et = null, _r = null;
const mu = () => {
  Et || (Et = new Promise((e) => {
    _r = e;
  }).finally(() => {
    _r = null, Et = null;
  }));
}, yu = () => {
  _r == null ? void 0 : _r();
}, wu = (e, t, n) => {
  const r = {};
  let o = false, s = false, a = ae;
  r.ready = new Promise((i) => a = i);
  const c = () => {
    s = false;
    const i = new WebSocket(e);
    i.onclose = () => {
      if (s) return;
      if (s = true, Et) {
        Et.then(c);
        return;
      }
      const l = Vn[e] ?? (Vn[e] = Bs);
      setTimeout(c, Math.random() * l), Vn[e] = cu(l * 2, gu);
    }, i.onmessage = (l) => t(String(l.data)), r.socket = i, r.url = i.url, i.onopen = () => {
      const l = o;
      o = true, a(r), Vn[e] = Bs, l && (n == null ? void 0 : n());
    }, r.send = (l) => {
      i.readyState === 1 && i.send(l);
    };
  };
  return c(), r;
}, vu = (e) => {
  const t = {}, n = /* @__PURE__ */ new WeakMap(), r = (a) => {
    const c = n.get(a);
    if (!c) throw U("relay bookkeeping missing registration for relay client");
    return c;
  }, o = () => {
    const a = {}, c = (i) => a[i] ?? (a[i] = {});
    return { forKey: c, forRelay: (i) => c(r(i)) };
  }, s = (a, c) => (t[a] = c, n.set(c, a), c);
  return { register: (a, c) => {
    const i = t[a];
    return i || s(a, c());
  }, keyOf: r, scoped: o, getSockets: () => Pi(Ze(t).flatMap(([a, c]) => {
    const i = e(c);
    return i ? [[a, i]] : [];
  })) };
}, bu = () => {
  if (bi) {
    const e = new AbortController();
    return addEventListener("online", yu, { signal: e.signal }), addEventListener("offline", mu, { signal: e.signal }), () => e.abort();
  }
  return ae;
}, to = "AES-GCM", Pu = {}, Mu = (e) => btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(e)))), Su = (e) => {
  const t = atob(e);
  return new Uint8Array(t.length).map((n, r) => t.charCodeAt(r)).buffer;
}, Cn = async (e, t) => new Uint8Array(await crypto.subtle.digest(e, Ne(t))), $t = async (e) => Pu[e] ?? (Pu[e] = Array.from(await Cn("SHA-1", e)).map((t) => t.toString(36)).join("")), Ru = async (e, t, n) => crypto.subtle.importKey("raw", await crypto.subtle.digest({ name: "SHA-256" }, Ne(`${e}:${t}:${n}`)), { name: to }, false, ["encrypt", "decrypt"]), Tu = async (e, t) => Nt(await Cn("SHA-256", `${Se}:${e}:${t}`)), Ri = "$", Ti = ",", Au = async (e, t) => {
  const n = crypto.getRandomValues(new Uint8Array(16));
  return n.join(Ti) + Ri + Mu(await crypto.subtle.encrypt({ name: to, iv: n }, await e, Ne(t)));
}, Eu = async (e, t) => {
  const [n, r] = t.split(Ri);
  return Ge(await crypto.subtle.decrypt({ name: to, iv: new Uint8Array((n == null ? void 0 : n.split(Ti).map(Number)) ?? []) }, await e, Su(r ?? "")));
}, no = 57333, _u = 18e4, ku = 20;
var Ou = class {
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
    this.pool = [], this.pooled.clear(), Dt(ku, this.makeOffer).forEach((e) => this.push(e)), this.active = true, this.cleanupTimer = setInterval(() => {
      this.pool = this.pool.filter((e) => e.isDead ? (this.pooled.delete(e), false) : true);
    }, no);
  }
  push(e) {
    e.isDead || this.pooled.has(e) || this.leased.has(e) || (this.pool.push(e), this.pooled.add(e));
  }
  shift(e) {
    const t = [];
    for (; t.length < e && this.pool.length > 0; ) {
      const n = this.pool.shift();
      if (!n) break;
      this.pooled.delete(n), t.push(n);
    }
    return t;
  }
  claimLeased(e) {
    const t = this.leased.get(e);
    t && (W(t), this.leased.delete(e));
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
      this.recycling.add(e), e.setHandlers({ connect: ae, close: ae, error: ae }), e.getOffer(true).then((t) => {
        if (!t || t.type !== "offer" || e.isDead || !this.active) {
          e.destroy();
          return;
        }
        this.push(e);
      }).catch(() => e.destroy()).finally(() => this.recycling.delete(e));
    }
  }
  reclaimLeased(e) {
    const t = this.leased.get(e);
    t && (W(t), this.leased.delete(e), this.recycle(e));
  }
  lease(e) {
    this.claimLeased(e), this.leased.set(e, setTimeout(() => {
      this.leased.delete(e), this.recycle(e);
    }, _u));
  }
  checkout(e, t, n) {
    const r = this.shift(e), o = Math.max(0, e - r.length);
    o > 0 && r.push(...Dt(o, this.makeOffer));
    const s = async (a, c = false) => {
      try {
        const i = await n(a);
        return t ? (this.lease(a), { peer: a, offer: i, claim: () => this.claimLeased(a), reclaim: () => this.reclaimLeased(a) }) : { peer: a, offer: i };
      } catch (i) {
        if (this.claimLeased(a), this.pooled.delete(a), a.destroy(), !c) return s(this.makeOffer(), true);
        throw i;
      }
    };
    return nt(r.map((a) => s(a)));
  }
  getOffers(e, t) {
    return this.checkout(e, true, t);
  }
  destroy() {
    this.active = false, this.cleanupTimer && (clearInterval(this.cleanupTimer), this.cleanupTimer = null), this.pool.forEach((e) => e.destroy()), this.pool = [], this.pooled.clear(), this.leased.forEach((e, t) => {
      W(e), t.destroy();
    }), this.leased.clear(), this.recycling.forEach((e) => e.destroy()), this.recycling.clear();
  }
};
const er = U("incorrect password for overlapping room"), xu = (e, t, n) => {
  const r = (a) => Cn("SHA-256", `${a}:${e}:${t}:${n}`).then(Nt), o = async (a, c, i) => {
    if (!e) return;
    if (i) {
      const u = wt(36);
      await a({ __trystero_pw: "challenge", c: u });
      const { data: f } = await c();
      if (!f || typeof f != "object" || f.__trystero_pw !== "response" || typeof f.h != "string") throw er;
      const d = await r(u);
      if (f.h !== d) throw er;
      return;
    }
    const { data: l } = await c();
    if (!l || typeof l != "object" || l.__trystero_pw !== "challenge" || typeof l.c != "string") throw er;
    await a({ __trystero_pw: "response", h: await r(l.c) });
  };
  return { run: o, compose: (a) => e || a ? async (c, i, l, u) => {
    await o(i, l, u), await (a == null ? void 0 : a(c, i, l, u));
  } : void 0 };
}, Cu = (e) => {
  const t = mt(e, "unknown error");
  return t.startsWith("handshake ") ? t : `handshake failed: ${t}`;
}, Lu = ({ onPeerHandshake: e, onHandshakeError: t, handshakeTimeoutMs: n, sendHandshakeData: r, sendHandshakeReady: o, onActivate: s, onFailure: a }) => {
  const c = {}, i = (f, d) => {
    const h = c[f];
    !h || d && h.peer !== d || h.isActive || !h.didLocalHandshakePass || !h.didReceiveRemoteReady || (h.isActive = true, h.handshakeTimer = W(h.handshakeTimer), s(f, h.peer));
  }, l = (f, d, h) => {
    const p = c[f];
    if (!p || p.peer !== d) return;
    const w = Cu(h);
    t == null ? void 0 : t(f, w), a(f, d, U(w));
  }, u = (f, d) => {
    const h = c[f];
    !h || h.peer !== d || h.isActive || (h.didLocalHandshakePass = true, o("", f).catch((p) => l(f, d, U(`failed sending handshake readiness: ${mt(p, "unknown send failure")}`))), i(f, d));
  };
  return { addPeer: (f, d) => {
    c[f] = { peer: d, isActive: false, didLocalHandshakePass: false, didReceiveRemoteReady: false, handshakeTimer: null, pendingHandshakePayloads: [], handshakeWaiters: [] };
  }, clearPeer: (f, d) => {
    const h = c[f];
    h && (h.handshakeTimer = W(h.handshakeTimer), h.pendingHandshakePayloads.length = 0, h.handshakeWaiters.splice(0).forEach((p) => p.reject(d)), delete c[f]);
  }, canReceiveFromPeer: (f, d) => {
    const h = c[f];
    return !!(h && (h.isActive || d));
  }, start: (f, d) => {
    const h = c[f];
    if (!h || h.peer !== d) return;
    h.handshakeTimer = setTimeout(() => l(f, d, U(`handshake timed out after ${n}ms`)), n);
    const p = async (P, y) => {
      await r(P, f, y);
    }, w = () => new Promise((P, y) => {
      const R = c[f];
      if (!R || R.peer !== d) {
        y(U("peer disconnected during handshake"));
        return;
      }
      const T = R.pendingHandshakePayloads.shift();
      if (T) {
        P(T);
        return;
      }
      R.handshakeWaiters.push({ resolve: P, reject: (S) => y(S) });
    }), m = Me < f;
    Promise.resolve(e == null ? void 0 : e(f, p, w, m)).then(() => u(f, d)).catch((P) => l(f, d, Ce(P, "handshake failed")));
  }, receiveHandshakeData: (f, d, h) => {
    const p = c[d];
    if (!p || p.isActive) return;
    const w = h === void 0 ? { data: f } : { data: f, metadata: h }, m = p.handshakeWaiters.shift();
    if (m) {
      m.resolve(w);
      return;
    }
    p.pendingHandshakePayloads.push(w);
  }, receiveHandshakeReady: (f) => {
    const d = c[f];
    !d || d.isActive || (d.didReceiveRemoteReady = true, i(f));
  } };
}, Du = 15e3, Nu = 5e3, Is = "icegatheringstatechange", Bu = "iceconnectionstatechange", vt = "offer", Iu = "answer", $u = /out of range/i, $s = (e) => e.replace(/ (\S+\.local) (\d+) typ host/g, " 127.0.0.1 $2 typ host");
var Hs = (e, { trickleIce: t, rtcConfig: n, rtcPolyfill: r, turnConfig: o, _test_only_mdnsHostFallbackToLoopback: s }) => {
  const a = new (r ?? RTCPeerConnection)({ iceServers: Hu.concat(o ?? []), ...n }), c = {}, i = [], l = [], u = t !== false, f = [], d = [];
  let h = false, p = false, w = null, m = null, P = false;
  const y = () => m = W(m), R = () => {
    var _a2;
    P || (P = true, y(), (_a2 = c.close) == null ? void 0 : _a2.call(c));
  }, T = (v) => {
    c.signal ? c.signal(v) : i.push(v);
  }, S = (v) => {
    const k = c.signal;
    c.signal = ($) => {
      k == null ? void 0 : k($), v($);
    }, i.length > 0 && i.splice(0).forEach(($) => {
      var _a2;
      return (_a2 = c.signal) == null ? void 0 : _a2.call(c, $);
    });
  }, _ = (v) => s ? $s(v) : v, L = (v) => {
    if (!s || typeof v.candidate != "string") return v;
    const k = $s(v.candidate);
    return k === v.candidate ? v : { ...v, candidate: k };
  }, M = (v) => {
    var _a2, _b;
    return { type: ((_a2 = v.localDescription) == null ? void 0 : _a2.type) ?? vt, sdp: _(((_b = v.localDescription) == null ? void 0 : _b.sdp) ?? "") };
  }, B = () => {
    var _a2, _b;
    const v = (_a2 = a.remoteDescription) == null ? void 0 : _a2.sdp;
    return v ? ((_b = v.match(/a=ice-ufrag:([^\s]+)/)) == null ? void 0 : _b[1]) ?? null : null;
  }, q = () => {
    var _a2, _b;
    return (((_b = (_a2 = a.remoteDescription) == null ? void 0 : _a2.sdp) == null ? void 0 : _b.match(/^m=/gm)) ?? []).length;
  }, D = (v) => {
    if (!a.remoteDescription) return false;
    const k = q();
    if (typeof v.sdpMLineIndex == "number" && k > 0 && v.sdpMLineIndex >= k) return false;
    const $ = B();
    return !($ && v.usernameFragment && v.usernameFragment !== $);
  }, j = async (v) => {
    try {
      return await a.addIceCandidate(v), true;
    } catch (k) {
      if (k instanceof Error && $u.test(k.message) && typeof v.sdpMLineIndex == "number") return false;
      throw k;
    }
  }, J = async () => {
    if (!a.remoteDescription || f.length === 0) return;
    const v = f.splice(0), k = [];
    for (const $ of v) {
      if (!D($)) {
        k.push($);
        continue;
      }
      await j($) || k.push($);
    }
    k.length > 0 && f.push(...k);
  }, g = async (v) => {
    if (D(v)) {
      await j(v) || f.push(v);
      return;
    }
    f.push(v);
  }, b = (v) => {
    v.binaryType = "arraybuffer", v.bufferedAmountLowThreshold = 65535, v.onmessage = (k) => {
      const $ = k.data;
      c.data ? c.data($) : l.push($);
    }, v.onopen = () => {
      var _a2;
      return (_a2 = c.connect) == null ? void 0 : _a2.call(c);
    }, v.onclose = R, v.onerror = ({ error: k }) => {
      var _a2;
      return (_a2 = c.error) == null ? void 0 : _a2.call(c, Ce(k, "data channel error"));
    };
  }, A = async (v) => {
    let k = null;
    try {
      await Promise.race([new Promise(($) => {
        const K = () => {
          v.iceGatheringState === "complete" && (v.removeEventListener(Is, K), $());
        };
        v.addEventListener(Is, K), K();
      }), new Promise(($) => {
        k = setTimeout($, Du);
      })]);
    } finally {
      W(k);
    }
    return M(v);
  }, E = async () => {
    const v = u ? M(a) : await A(a);
    return T(v), v;
  };
  e ? (w = a.createDataChannel("data"), b(w)) : a.ondatachannel = ({ channel: v }) => {
    w = v, b(v);
  };
  const x = async (v = false) => {
    var _a2, _b;
    if (a.connectionState !== "closed") try {
      return h = true, v && (a.signalingState !== "stable" && a.signalingState !== "closed" && ((_a2 = a.localDescription) == null ? void 0 : _a2.type) === vt && await a.setLocalDescription({ type: "rollback" }), typeof a.restartIce == "function" && a.restartIce()), await a.setLocalDescription(v ? await a.createOffer({ iceRestart: true }) : void 0), await E();
    } catch (k) {
      (_b = c.error) == null ? void 0 : _b.call(c, Ce(k, "failed to create local offer"));
    } finally {
      h = false;
    }
  };
  a.onnegotiationneeded = async () => x(false), a.onicecandidate = ({ candidate: v }) => {
    if (!u || !v) return;
    const k = L(typeof v.toJSON == "function" ? v.toJSON() : { candidate: v.candidate, sdpMid: v.sdpMid, sdpMLineIndex: v.sdpMLineIndex, usernameFragment: v.usernameFragment });
    T({ type: Mi, sdp: JSON.stringify(k) });
  };
  const F = () => {
    if (a.connectionState === "failed" || a.connectionState === "closed" || a.iceConnectionState === "failed" || a.iceConnectionState === "closed") {
      R();
      return;
    }
    if (a.connectionState === "connected" || a.connectionState === "connecting" || a.iceConnectionState === "connected" || a.iceConnectionState === "completed" || a.iceConnectionState === "checking") {
      y();
      return;
    }
    if (a.connectionState === "disconnected" || a.iceConnectionState === "disconnected") {
      m || (m = setTimeout(() => {
        m = null, (a.connectionState === "disconnected" || a.iceConnectionState === "disconnected") && R();
      }, Nu));
      return;
    }
  };
  a.onconnectionstatechange = F, a.addEventListener(Bu, F), a.ontrack = (v) => {
    var _a2, _b;
    const k = v.streams[0];
    if (k) {
      if (!c.track && !c.stream) {
        d.push({ track: v.track, stream: k });
        return;
      }
      (_a2 = c.track) == null ? void 0 : _a2.call(c, v.track, k), (_b = c.stream) == null ? void 0 : _b.call(c, k);
    }
  }, a.onremovestream = (v) => {
    var _a2;
    return (_a2 = c.stream) == null ? void 0 : _a2.call(c, v.stream);
  };
  const Y = e ? new Promise((v) => S((k) => {
    k.type === vt && v(k);
  })) : Promise.resolve();
  return e && queueMicrotask(() => {
    var _a2;
    !h && a.signalingState === "stable" && !a.localDescription && a.connectionState !== "closed" && ((_a2 = a.onnegotiationneeded) == null ? void 0 : _a2.call(a, new Event("negotiationneeded")));
  }), { created: Date.now(), connection: a, get channel() {
    return w;
  }, get isDead() {
    return a.connectionState === "closed";
  }, getOffer: async (v = false) => {
    var _a2;
    if (e) return v ? x(true) : ((_a2 = a.localDescription) == null ? void 0 : _a2.type) === vt ? u ? M(a) : A(a) : Y;
  }, async signal(v) {
    var _a2, _b, _c2;
    if (v.type === "candidate") {
      try {
        const k = JSON.parse(v.sdp);
        k && typeof k == "object" && await g(L(k));
      } catch (k) {
        (_a2 = c.error) == null ? void 0 : _a2.call(c, Ce(k, "failed to parse remote candidate"));
      }
      return;
    }
    if (!((w == null ? void 0 : w.readyState) === "open" && !((_b = v.sdp) == null ? void 0 : _b.includes("a=rtpmap")))) try {
      const k = { ...v, sdp: _(v.sdp) };
      if (v.type === vt) {
        if (h || a.signalingState !== "stable" && !p) {
          if (e) return;
          await nt([a.setLocalDescription({ type: "rollback" }), a.setRemoteDescription(k)]);
        } else await a.setRemoteDescription(k);
        return await J(), await a.setLocalDescription(), await E();
      }
      if (v.type === Iu) {
        p = true;
        try {
          await a.setRemoteDescription(k), await J();
        } finally {
          p = false;
        }
      }
    } catch (k) {
      (_c2 = c.error) == null ? void 0 : _c2.call(c, Ce(k, "failed to apply remote signal"));
    }
  }, sendData: (v) => w == null ? void 0 : w.send(v), destroy: () => {
    y(), w == null ? void 0 : w.close(), a.close(), h = false, p = false, R();
  }, setHandlers: (v) => {
    const { signal: k, ...$ } = v;
    Object.assign(c, $), c.data && l.length > 0 && l.splice(0).forEach((K) => {
      var _a2;
      return (_a2 = c.data) == null ? void 0 : _a2.call(c, K);
    }), k && S(k), (c.track || c.stream) && d.length > 0 && d.splice(0).forEach(({ track: K, stream: ue }) => {
      var _a2, _b;
      (_a2 = c.track) == null ? void 0 : _a2.call(c, K, ue), (_b = c.stream) == null ? void 0 : _b.call(c, ue);
    });
  }, offerPromise: Y, addStream: (v) => v.getTracks().forEach((k) => a.addTrack(k, v)), removeStream: (v) => a.getSenders().filter((k) => k.track && v.getTracks().includes(k.track)).forEach((k) => a.removeTrack(k)), addTrack: (v, k) => a.addTrack(v, k), removeTrack: (v) => {
    const k = a.getSenders().find(($) => $.track === v);
    k && a.removeTrack(k);
  }, replaceTrack: (v, k) => {
    const $ = a.getSenders().find((K) => K.track === v);
    if ($) return $.replaceTrack(k);
  } };
};
const Hu = [...Dt(3, (e, t) => `stun:stun${t || ""}.l.google.com:19302`), "stun:stun.cloudflare.com:3478"].map((e) => ({ urls: e })), zu = Object.getPrototypeOf(Uint8Array), tr = 32, qu = 0, nr = 32, zs = 34, rr = 35, dn = 36, Ye = 16 * 2 ** 10 - dn, bt = 255, ju = 65535, qs = "bufferedamountlow", js = "close", Fs = "error", Fu = 1e4, Yu = (e) => e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength), Xu = (e, t = Fu) => e.readyState !== "open" || e.bufferedAmount <= e.bufferedAmountLowThreshold ? Promise.resolve(e.readyState === "open") : new Promise((n) => {
  let r = false, o = null;
  const s = (i) => {
    r || (r = true, e.removeEventListener(qs, a), e.removeEventListener(js, c), e.removeEventListener(Fs, c), W(o), n(i));
  }, a = () => s(true), c = () => s(false);
  if (e.addEventListener(qs, a), e.addEventListener(js, c), e.addEventListener(Fs, c), o = setTimeout(() => s(false), t), e.readyState !== "open") {
    s(false);
    return;
  }
  e.bufferedAmount <= e.bufferedAmountLowThreshold && s(true);
}), Uu = ({ getPeer: e, getPeerIds: t, canReceiveFromPeer: n, throwIfAborted: r }) => {
  const o = {}, s = {}, a = {}, c = {}, i = (f, d, { includePending: h = false } = {}) => (f ? Array.isArray(f) ? f : [f] : t(h)).flatMap((p) => {
    const w = e(p, h);
    return w ? [Promise.resolve(d(p, w))] : (console.warn(`${Se}: no peer with id ${p} found`), []);
  });
  return { makeInternalAction: (f, d = {}) => {
    const h = s[f];
    if (o[f] && h) {
      const y = o[f].options;
      if (y.sendToPending !== !!d.sendToPending || y.receiveWhilePending !== !!d.receiveWhilePending) throw U(`action type "${f}" cannot be redefined`);
      return h;
    }
    if (!f) throw U("action type argument is required");
    const p = Ne(f);
    if (p.byteLength > tr) throw U(`action type string "${f}" (${p.byteLength}b) exceeds byte limit (${tr}). Hint: choose a shorter name.`);
    const w = { sendToPending: !!d.sendToPending, receiveWhilePending: !!d.receiveWhilePending }, m = new Uint8Array(tr);
    m.set(p);
    let P = 0;
    return o[f] = { onComplete: ae, onProgress: ae, setOnComplete: (y) => {
      o[f].onComplete = y;
      const R = c[f];
      (R == null ? void 0 : R.length) && (delete c[f], R.forEach(({ payload: T, peerId: S, metadata: _ }) => y(T, S, _)));
    }, setOnProgress: (y) => {
      o[f].onProgress = y;
    }, send: async (y, R, T, S, _) => {
      r(_);
      const L = typeof y;
      if (L === "undefined") throw U("action data cannot be undefined");
      const M = L !== "string", B = y instanceof Blob, q = B || y instanceof ArrayBuffer || y instanceof zu, D = T !== void 0, j = q ? Yu(B ? await y.arrayBuffer() : y) : Ne(M ? ye(y) : y), J = D ? Ne(ye(T)) : null, g = Math.ceil(j.byteLength / Ye) + (D ? 1 : 0) || 1, b = Dt(g, (A, E) => {
        const x = E === g - 1, F = !!(D && E === 0), Y = new Uint8Array(dn + (F ? (J == null ? void 0 : J.byteLength) ?? 0 : x ? j.byteLength - Ye * (g - (D ? 2 : 1)) : Ye));
        return Y.set(m), Y.set([P >> 8, P & bt], nr), Y.set([Number(x) | Number(F) << 1 | Number(q) << 2 | Number(M) << 3], zs), Y.set([Math.round((E + 1) / g * bt)], rr), Y.set(D ? F ? J ?? new Uint8Array() : j.subarray((E - 1) * Ye, E * Ye) : j.subarray(E * Ye, (E + 1) * Ye), dn), Y;
      });
      return P = P + 1 & ju, await nt(i(R, async (A, E) => {
        const { channel: x } = E;
        let F = 0;
        for (; F < g; ) {
          r(_);
          const Y = b[F];
          if (!Y) break;
          if (x && x.bufferedAmount > x.bufferedAmountLowThreshold) {
            const $ = await Xu(x);
            if (r(_), !$) break;
          }
          const v = e(A, w.sendToPending);
          if (!v || v !== E) break;
          E.sendData(Y), F++;
          const k = Y[rr] ?? bt;
          S == null ? void 0 : S(k / bt, A, T);
        }
      }, { includePending: w.sendToPending })), [];
    }, options: w }, s[f] = { send: o[f].send, onMessage: o[f].setOnComplete, onProgress: o[f].setOnProgress };
  }, handleData: (f, d) => {
    var _a2, _b;
    const h = new Uint8Array(d), p = Ge(h.subarray(qu, nr)).replaceAll("\0", ""), w = o[p];
    if (!n(f, !!(w == null ? void 0 : w.options.receiveWhilePending))) return;
    const m = (h[nr] ?? 0) << 8 | (h[33] ?? 0), P = h[zs] ?? 0, y = h[rr] ?? 0, R = h.subarray(dn), T = !!(P & 1), S = !!(P & 2), _ = !!(P & 4), L = !!(P & 8);
    a[f] ?? (a[f] = {}), (_a2 = a[f])[p] ?? (_a2[p] = {});
    const M = (_b = a[f][p])[m] ?? (_b[m] = { chunks: [] });
    if (S ? M.meta = It(Ge(R)) : M.chunks.push(R), w == null ? void 0 : w.onProgress(y / bt, f, M.meta), !T) return;
    const B = new Uint8Array(M.chunks.reduce((D, j) => D + j.byteLength, 0));
    M.chunks.reduce((D, j) => (B.set(j, D), D + j.byteLength), 0), delete a[f][p][m];
    const q = _ ? B : L ? It(Ge(B)) : Ge(B);
    if (w) {
      w.onComplete(q, f, M.meta);
      return;
    }
    (c[p] ?? (c[p] = [])).push({ payload: q, peerId: f, ...M.meta === void 0 ? {} : { metadata: M.meta } });
  }, clearPeer: (f) => {
    delete a[f];
  } };
}, Wu = 500, ct = (e, t) => {
  const n = U(t);
  return n.kind = e, n.name = e === "aborted" ? "AbortError" : n.name, n;
}, or = (e) => {
  if (e == null ? void 0 : e.aborted) throw ct("aborted", "operation aborted");
}, Ys = (e) => e && typeof e == "object" && !Array.isArray(e) && typeof e.r == "string" ? { r: e.r, ...Object.hasOwn(e, "m") ? { m: e.m } : {} } : null, Ju = (e) => e && typeof e == "object" && !Array.isArray(e) && typeof e.r == "string" ? { r: e.r, ...typeof e.e == "string" ? { e: e.e } : {} } : null, tn = (e, t) => t === void 0 ? e : { ...e, metadata: t }, Gu = ({ getPeer: e, getPeerIds: t, canReceiveFromPeer: n }) => {
  const r = {}, o = {}, s = Uu({ getPeer: e, getPeerIds: t, canReceiveFromPeer: n, throwIfAborted: or }), a = s.makeInternalAction, c = s.handleData, i = (h) => {
    const p = o[h];
    p && (W(p.timer), p.signal && p.abortHandler && p.signal.removeEventListener("abort", p.abortHandler), delete o[h]);
  }, l = (h, p) => {
    Ze(o).forEach(([w, m]) => {
      m.peerId === h && (i(w), m.reject(p));
    });
  }, u = (h, p) => {
    s.clearPeer(h), l(h, ct("disconnected", mt(p, "peer disconnected")));
  }, f = a("@_response");
  return f.onMessage((h, p, w) => {
    const m = Ju(w);
    if (!m) return;
    const P = o[m.r];
    if (!(!P || P.peerId !== p)) {
      if (i(m.r), m.e !== void 0) {
        P.reject(ct("rejected", m.e));
        return;
      }
      P.resolve(h);
    }
  }), { makeAction: (h, p) => {
    if (p && "onRequest" in p && p.kind !== "request") throw U('request actions must use kind: "request"');
    const w = (p == null ? void 0 : p.kind) ?? "message", m = a(h), P = r[h];
    if (P) {
      if (P.kind !== w) throw U(`action type "${h}" cannot be redefined`);
      return P.action;
    }
    const y = { kind: w, action: null, pendingMessages: [], pendingRequests: [], onReceiveProgress: (p == null ? void 0 : p.onReceiveProgress) ?? null }, R = (g, b) => g ? (A, E) => g(A, tn({ peerId: E }, b)) : void 0, T = (g) => {
      y.onReceiveProgress = g;
    }, S = (g, b, A) => {
      var _a2;
      const E = y.kind === "request" ? Ys(A) : null;
      (_a2 = y.onReceiveProgress) == null ? void 0 : _a2.call(y, g, tn({ peerId: b }, E ? E.m : A));
    };
    if (m.onProgress(S), w === "message") {
      let g = (p == null ? void 0 : p.onMessage) ?? null;
      const b = () => {
        if (!g) return;
        const E = g;
        y.pendingMessages.splice(0).forEach(({ payload: x, peerId: F, metadata: Y }) => {
          Promise.resolve().then(() => E(x, tn({ peerId: F }, Y))).catch((v) => console.error(`${Se} action handler error:`, v));
        });
      }, A = { send: async (E, x = {}) => {
        await m.send(E, x.target, x.metadata, R(x.onProgress, x.metadata), x.signal);
      }, get onMessage() {
        return g;
      }, set onMessage(E) {
        g = E, b();
      }, get onReceiveProgress() {
        return y.onReceiveProgress;
      }, set onReceiveProgress(E) {
        T(E);
      } };
      return m.onMessage((E, x, F) => {
        if (!g) {
          y.pendingMessages.push(F === void 0 ? { payload: E, peerId: x } : { payload: E, peerId: x, metadata: F });
          return;
        }
        const Y = g;
        Promise.resolve().then(() => Y(E, tn({ peerId: x }, F))).catch((v) => console.error(`${Se} action handler error:`, v));
      }), y.action = A, r[h] = y, b(), A;
    }
    let _ = (p == null ? void 0 : p.onRequest) ?? null;
    const L = (g) => {
      W(g.timer);
      const b = y.pendingRequests.indexOf(g);
      b > -1 && y.pendingRequests.splice(b, 1);
    }, M = (g, b, A) => {
      f.send(null, g, { r: b, e: mt(A, "request failed") });
    }, B = (g, b) => {
      L(g), Promise.resolve().then(() => b(g.payload, { peerId: g.peerId, ...g.metadata === void 0 ? {} : { metadata: g.metadata }, signal: g.controller.signal })).then(async (A) => {
        if (A === void 0) throw U("request handler returned undefined");
        await f.send(A, g.peerId, { r: g.requestId });
      }).catch((A) => M(g.peerId, g.requestId, A)).finally(() => g.controller.abort());
    }, q = () => {
      _ && y.pendingRequests.slice().forEach((g) => B(g, _));
    }, D = (g, b, A, E) => {
      if (_) {
        B({ payload: g, peerId: b, ...A === void 0 ? {} : { metadata: A }, requestId: E, controller: new AbortController(), timer: null }, _);
        return;
      }
      const x = { payload: g, peerId: b, ...A === void 0 ? {} : { metadata: A }, requestId: E, controller: new AbortController(), timer: setTimeout(() => {
        L(x), x.controller.abort(), M(b, E, "request handler unavailable");
      }, Wu) };
      y.pendingRequests.push(x);
    }, j = async (g, b) => {
      const { target: A, metadata: E, onProgress: x, signal: F, timeoutMs: Y } = b;
      if (or(F), !e(A, false)) throw ct("disconnected", `no active peer with id ${A}`);
      const v = wt(20), k = new Promise(($, K) => {
        const ue = { peerId: A, resolve: $, reject: K, timer: null, ...F === void 0 ? {} : { signal: F } }, Oe = () => {
          i(v), K(ct("aborted", "operation aborted"));
        };
        F && (ue.abortHandler = Oe, F.addEventListener("abort", Oe, { once: true })), o[v] = ue;
      }).catch(($) => {
        throw $;
      });
      try {
        await m.send(g, A, E === void 0 ? { r: v } : { r: v, m: E }, R(x, E), F);
        const $ = o[v];
        return $ && Y !== void 0 && ($.timer = setTimeout(() => {
          i(v), $.reject(ct("timeout", "request timed out"));
        }, Y)), await k;
      } catch ($) {
        throw i(v), $;
      }
    }, J = { request: j, requestMany: async (g, b) => (or(b.signal), await nt(b.targets.map(async (A) => {
      var _a2, _b;
      try {
        const E = { peerId: A, status: "fulfilled", value: await j(g, { target: A, ...b.metadata === void 0 ? {} : { metadata: b.metadata }, ...b.timeoutMs === void 0 ? {} : { timeoutMs: b.timeoutMs }, ...b.onProgress === void 0 ? {} : { onProgress: b.onProgress }, ...b.signal === void 0 ? {} : { signal: b.signal } }) };
        return (_a2 = b.onResult) == null ? void 0 : _a2.call(b, E), E;
      } catch (E) {
        const x = Ce(E, "request failed");
        if (x.kind === "aborted" || !x.kind) throw x;
        const F = x.kind === "timeout" ? { peerId: A, status: "timeout" } : x.kind === "disconnected" ? { peerId: A, status: "disconnected" } : { peerId: A, status: "rejected", error: x };
        return (_b = b.onResult) == null ? void 0 : _b.call(b, F), F;
      }
    }))), get onRequest() {
      return _;
    }, set onRequest(g) {
      _ = g, q();
    }, get onReceiveProgress() {
      return y.onReceiveProgress;
    }, set onReceiveProgress(g) {
      T(g);
    } };
    return m.onMessage((g, b, A) => {
      const E = Ys(A);
      E && D(g, b, E.m, E.r);
    }), y.action = J, r[h] = y, q(), J;
  }, makeInternalAction: a, handleData: c, clearPeer: u };
}, Xs = (e) => e && typeof e == "object" && !Array.isArray(e) && typeof e.k == "string" ? { key: e.k, ...typeof e.s == "string" ? { streamId: e.s } : {}, ...typeof e.t == "string" ? { trackId: e.t } : {}, ...Object.hasOwn(e, "m") ? { metadata: e.m } : {} } : null, Us = (e) => (t) => {
  let n = e.get(t);
  return n || (n = wt(20), e.set(t, n)), n;
}, Ai = () => {
  const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  return { getStreamKey: Us(e), getTrackKey: Us(t), rememberRemoteStream: (a, c, i) => {
    n.set(a, c), i && r.set(i, c);
  }, getRemoteStream: (a, c) => n.get(a) ?? (c ? r.get(c) : void 0), rememberRemoteTrack: (a, c, i, l, u) => {
    const f = { track: c, stream: i };
    o.set(a, f), l && s.set(l, f), u && r.set(u, i);
  }, getRemoteTrack: (a, c) => o.get(a) ?? (c ? s.get(c) : void 0), clearRemote: () => {
    n.clear(), r.clear(), o.clear(), s.clear();
  } };
}, Ku = ({ iterate: e, isActive: t, getSharedMediaPeer: n }) => {
  const r = {}, o = {}, s = Ai(), a = { onPeerStream: null, onPeerTrack: null }, c = (u, f, d, h) => {
    var _a2, _b, _c2;
    t(u) && ((_b = (_a2 = n(u)) == null ? void 0 : _a2.__trysteroMedia) == null ? void 0 : _b.rememberRemoteStream(f, d, typeof d.id == "string" ? d.id : void 0), (_c2 = a.onPeerStream) == null ? void 0 : _c2.call(a, d, u, h));
  }, i = (u, f, d, h, p) => {
    var _a2, _b, _c2;
    t(u) && ((_b = (_a2 = n(u)) == null ? void 0 : _a2.__trysteroMedia) == null ? void 0 : _b.rememberRemoteTrack(f, d, h, typeof d.id == "string" ? d.id : void 0, typeof h.id == "string" ? h.id : void 0), (_c2 = a.onPeerTrack) == null ? void 0 : _c2.call(a, d, h, u, p));
  }, l = (u, f, d, h, p, w = {}) => {
    const m = { k: f, ...w, ...d === void 0 ? {} : { m: d } };
    return e(u, async (P, y) => {
      await h(m, P), p(y);
    });
  };
  return { addStream: (u, f, d) => l(f.target, s.getStreamKey(u), f.metadata, d, (h) => h.addStream(u), { s: u.id }), removeStream: (u, f) => {
    e(f, (d, h) => h.removeStream(u));
  }, addTrack: (u, f, d, h) => l(d.target, s.getTrackKey(u), d.metadata, h, (p) => p.addTrack(u, f), { s: f.id, t: u.id }), removeTrack: (u, f) => {
    e(f, (d, h) => h.removeTrack(u));
  }, replaceTrack: (u, f, d, h) => l(d.target, s.getTrackKey(f), d.metadata, h, (p) => p.replaceTrack(u, f), { t: u.id }), receiveStreamMeta: (u, f) => {
    var _a2, _b;
    if (!t(f)) return;
    const d = Xs(u);
    if (!d) return;
    const h = (_b = (_a2 = n(f)) == null ? void 0 : _a2.__trysteroMedia) == null ? void 0 : _b.getRemoteStream(d.key, d.streamId);
    if (h) {
      c(f, d.key, h, d.metadata);
      return;
    }
    (r[f] ?? (r[f] = [])).push(d);
  }, receiveTrackMeta: (u, f) => {
    var _a2, _b;
    if (!t(f)) return;
    const d = Xs(u);
    if (!d) return;
    const h = (_b = (_a2 = n(f)) == null ? void 0 : _a2.__trysteroMedia) == null ? void 0 : _b.getRemoteTrack(d.key, d.trackId);
    if (h) {
      i(f, d.key, h.track, h.stream, d.metadata);
      return;
    }
    (o[f] ?? (o[f] = [])).push(d);
  }, receiveRemoteStream: (u, f) => {
    var _a2;
    if (!t(u)) return;
    const d = (_a2 = r[u]) == null ? void 0 : _a2.shift();
    d && c(u, d.key, f, d.metadata);
  }, receiveRemoteTrack: (u, f, d) => {
    var _a2;
    if (!t(u)) return;
    const h = (_a2 = o[u]) == null ? void 0 : _a2.shift();
    h && i(u, h.key, f, d, h.metadata);
  }, clearPeer: (u) => {
    delete r[u], delete o[u];
  }, get onPeerStream() {
    return a.onPeerStream;
  }, set onPeerStream(u) {
    a.onPeerStream = u;
  }, get onPeerTrack() {
    return a.onPeerTrack;
  }, set onPeerTrack(u) {
    a.onPeerTrack = u;
  } };
}, Ws = "beforeunload", Zu = 1e4, xe = (e) => "@_" + e, Rt = /* @__PURE__ */ new Set(), Js = () => Rt.forEach((e) => e()), Qu = (e) => (Rt.add(e), Rt.size === 1 && addEventListener(Ws, Js), () => {
  Rt.delete(e), Rt.size || removeEventListener(Ws, Js);
});
var Vu = (e, t, n, { onPeerHandshake: r, onHandshakeError: o, handshakeTimeoutMs: s = Zu, isPassive: a = false } = {}) => {
  const c = {}, i = {}, l = {}, u = { onPeerJoin: null, onPeerLeave: null };
  let f = ae, d = null;
  const h = (g, b, { includePending: A = false } = {}) => (g ? Array.isArray(g) ? g : [g] : ve(A ? c : i)).flatMap((E) => {
    const x = A ? c[E] : i[E];
    return x ? [Promise.resolve(b(E, x))] : (console.warn(`${Se}: no peer with id ${E} found`), []);
  }), p = Ku({ iterate: (g, b) => h(g, (A, E) => b(A, E)), isActive: (g) => !!i[g], getSharedMediaPeer: (g) => c[g] ?? null }), w = Gu({ getPeer: (g, b) => (b ? c : i)[g], getPeerIds: (g) => ve(g ? c : i), canReceiveFromPeer: (g, b) => !!(d == null ? void 0 : d.canReceiveFromPeer(g, b)) }), m = w.makeInternalAction, P = w.handleData, y = w.makeAction, R = (g, b = U("peer disconnected")) => {
    var _a2;
    const A = Ce(b, "peer disconnected");
    d == null ? void 0 : d.clearPeer(g, A), delete c[g], delete i[g], w.clearPeer(g, A), (_a2 = l[g]) == null ? void 0 : _a2.splice(0).forEach((E) => E.reject(A)), delete l[g], p.clearPeer(g);
  }, T = (g, b, A) => {
    var _a2;
    const E = c[g];
    if (!E || b && E !== b) return;
    const x = !!i[g];
    R(g, A), E.destroy(), x && ((_a2 = u.onPeerLeave) == null ? void 0 : _a2.call(u, g)), t(g);
  }, S = async () => {
    await D.send(""), await new Promise((g) => setTimeout(g, 99)), Ze(c).forEach(([g, b]) => {
      b.destroy(), R(g, U("room left"));
    }), f(), n();
  }, _ = m(xe("ping")), L = m(xe("pong")), M = m(xe("signal")), B = m(xe("stream")), q = m(xe("track")), D = m(xe("leave"), { sendToPending: true, receiveWhilePending: true }), j = m(xe("hsdata"), { sendToPending: true, receiveWhilePending: true }), J = m(xe("hsready"), { sendToPending: true, receiveWhilePending: true });
  return d = Lu({ ...r === void 0 ? {} : { onPeerHandshake: r }, ...o === void 0 ? {} : { onHandshakeError: o }, handshakeTimeoutMs: s, sendHandshakeData: j.send, sendHandshakeReady: J.send, onActivate: (g, b) => {
    var _a2;
    i[g] = b, (_a2 = u.onPeerJoin) == null ? void 0 : _a2.call(u, g);
  }, onFailure: (g, b, A) => T(g, b, A) }), _.onMessage((g, b) => L.send("", b)), L.onMessage((g, b) => {
    var _a2;
    const A = l[b];
    (_a2 = A == null ? void 0 : A.shift()) == null ? void 0 : _a2.resolve(), A && !A.length && delete l[b];
  }), M.onMessage((g, b) => {
    var _a2;
    i[b] && ((_a2 = c[b]) == null ? void 0 : _a2.signal(g));
  }), B.onMessage((g, b) => p.receiveStreamMeta(g, b)), q.onMessage((g, b) => p.receiveTrackMeta(g, b)), D.onMessage((g, b) => T(b, void 0, U("peer left room"))), j.onMessage((g, b, A) => d == null ? void 0 : d.receiveHandshakeData(g, b, A)), J.onMessage((g, b) => d == null ? void 0 : d.receiveHandshakeReady(b)), e((g, b) => {
    const A = c[b];
    if (A) {
      if (A === g) return;
      A.destroy(), R(b, U("peer replaced"));
    }
    c[b] = g, d == null ? void 0 : d.addPeer(b, g), g.setHandlers({ data: (E) => P(b, E), stream: (E) => p.receiveRemoteStream(b, E), track: (E, x) => p.receiveRemoteTrack(b, E, x), signal: (E) => {
      i[b] && M.send(E, b);
    }, close: () => T(b, g, U("peer disconnected")), error: (E) => {
      console.error(`${Se} peer error:`, E), T(b, g, E);
    } }), d == null ? void 0 : d.start(b, g);
  }), bi && (f = Qu(() => S().catch(ae))), { makeAction: y, leave: S, ping: async (g) => {
    if (!i[g]) throw U(`no active peer with id ${g}`);
    const b = Date.now();
    return await new Promise((A, E) => {
      const x = l[g] ?? (l[g] = []), F = () => {
        const v = l[g];
        if (!v) return;
        const k = v.indexOf(Y);
        k > -1 && v.splice(k, 1), v.length || delete l[g];
      }, Y = { resolve: () => {
        F(), A();
      }, reject: (v) => {
        F(), E(v);
      } };
      x.push(Y), _.send("", g).catch((v) => Y.reject(Ce(v, "peer disconnected")));
    }), Date.now() - b;
  }, isPassive: () => a, getPeers: () => Pi(Ze(i).map(([g, b]) => [g, b.connection])), addStream: (g, b = {}) => p.addStream(g, b, B.send), removeStream: (g, b = {}) => {
    p.removeStream(g, b.target);
  }, addTrack: (g, b, A = {}) => p.addTrack(g, b, A, q.send), removeTrack: (g, b = {}) => {
    p.removeTrack(g, b.target);
  }, replaceTrack: (g, b, A = {}) => p.replaceTrack(g, b, A, q.send), get onPeerJoin() {
    return u.onPeerJoin;
  }, set onPeerJoin(g) {
    u.onPeerJoin = g, g && ve(i).forEach((b) => g(b));
  }, get onPeerLeave() {
    return u.onPeerLeave;
  }, set onPeerLeave(g) {
    u.onPeerLeave = g;
  }, get onPeerStream() {
    return p.onPeerStream;
  }, set onPeerStream(g) {
    p.onPeerStream = g;
  }, get onPeerTrack() {
    return p.onPeerTrack;
  }, set onPeerTrack(g) {
    p.onPeerTrack = g;
  } };
};
const Ei = 1, _i = 2, Gs = (e, t) => {
  const n = Ne(e), r = new Uint8Array(3 + n.byteLength + t.byteLength);
  return r[0] = Ei, r[1] = n.byteLength >>> 8 & 255, r[2] = n.byteLength & 255, r.set(n, 3), r.set(t, 3 + n.byteLength), r;
}, e0 = (e, t) => {
  const n = Ne(e), r = new Uint8Array(4 + n.byteLength);
  return r[0] = _i, r[1] = Number(t), r[2] = n.byteLength >>> 8 & 255, r[3] = n.byteLength & 255, r.set(n, 4), r;
}, t0 = (e) => {
  const t = new Uint8Array(e);
  if (t.byteLength < 3) return null;
  if (t[0] === Ei) {
    const o = (t[1] ?? 0) << 8 | (t[2] ?? 0), s = 3 + o;
    return o <= 0 || t.byteLength < s ? null : { type: "room", roomToken: Ge(t.subarray(3, s)), payload: t.subarray(s).slice().buffer };
  }
  if (t[0] !== _i || t.byteLength < 4) return null;
  const n = (t[2] ?? 0) << 8 | (t[3] ?? 0), r = 4 + n;
  return n <= 0 || t.byteLength < r ? null : { type: "presence", roomToken: Ge(t.subarray(4, r)), isPresent: t[1] === 1 };
}, ki = (e) => {
  const { connection: t, channel: n } = e;
  return e.isDead || t.connectionState === "closed" || t.connectionState === "failed" || t.iceConnectionState === "closed" || t.iceConnectionState === "failed" || (n == null ? void 0 : n.readyState) === "closing" || (n == null ? void 0 : n.readyState) === "closed";
}, n0 = (e) => {
  if (ki(e)) return "stale";
  const { channel: t } = e;
  return !t || t.readyState !== "open" ? "transient" : "live";
};
var r0 = class {
  constructor() {
    __publicField(this, "byApp", {});
    __publicField(this, "roomPresenceHandlers", {});
  }
  getMap(e) {
    var _a2;
    return (_a2 = this.byApp)[e] ?? (_a2[e] = {});
  }
  get(e, t) {
    var _a2;
    return (_a2 = this.byApp[e]) == null ? void 0 : _a2[t];
  }
  isPeerStale(e) {
    return ki(e);
  }
  getHealth(e) {
    return this.isPeerStale(e) ? "stale" : "live";
  }
  setRoomPresenceHandler(e, t) {
    return this.roomPresenceHandlers[e] = t, () => {
      this.roomPresenceHandlers[e] === t && delete this.roomPresenceHandlers[e];
    };
  }
  sendRoomPresence(e, t, n) {
    e.isClosing || e.peer.isDead || e.peer.sendData(e0(t, n));
  }
  clear(e, t, { destroyPeer: n }) {
    const r = this.byApp[e], o = r == null ? void 0 : r[t];
    if (!o || o.isClosing) return;
    o.idleTimer = W(o.idleTimer), o.isClosing = true, n && !o.peer.isDead && o.peer.destroy();
    const s = lt(o.bindings);
    o.bindings = {}, o.bindingsByToken = {}, o.controlRoomId = null, delete r[t], s.forEach((a) => {
      var _a2, _b;
      (_b = (_a2 = a.handlers).close) == null ? void 0 : _b.call(_a2), a.pendingData.length = 0, a.pendingSendData.length = 0, a.pendingTracks.length = 0;
    }), o.media.clearRemote(), o.pendingDataByToken.clear(), o.remoteRoomTokens.clear(), ve(r).length === 0 && delete this.byApp[e];
  }
  register(e, t, n, r) {
    const o = this.getMap(e), s = o[t];
    if (s) {
      if (s.idleTimer = W(s.idleTimer), s.peer === n) return s;
      this.clear(e, t, { destroyPeer: true });
    }
    const a = { appId: e, peerId: t, peer: n, bindings: {}, bindingsByToken: {}, pendingDataByToken: /* @__PURE__ */ new Map(), remoteRoomTokens: /* @__PURE__ */ new Set(), idleTimer: null, controlRoomId: null, streamOwners: /* @__PURE__ */ new Map(), trackOwners: /* @__PURE__ */ new Map(), media: Ai(), idleMs: r, isClosing: false };
    return n.setHandlers({ data: (c) => this.dispatchData(a, c), signal: (c) => this.dispatchSignal(a, c), close: () => this.clear(e, t, { destroyPeer: false }), error: (c) => {
      console.error(`${Se} peer error:`, c), this.clear(e, t, { destroyPeer: false });
    }, track: (c, i) => this.dispatchTrack(a, c, i) }), o[t] = a, a;
  }
  bind(e, t, n, { onDetach: r }) {
    const o = n.bindings[e];
    if (o) return n.idleTimer = W(n.idleTimer), { proxy: o.proxy, isNew: false };
    const s = { roomId: e, roomToken: null, roomTokenPromise: t, handlers: {}, pendingData: [], pendingSendData: [], pendingTracks: [], detach: ae, proxy: {} }, a = () => {
      n.bindings[e] && (this.pruneRoomOwnership(n, e), delete n.bindings[e], s.roomToken && n.bindingsByToken[s.roomToken] === s && delete n.bindingsByToken[s.roomToken], n.controlRoomId === e && (n.controlRoomId = ve(n.bindings)[0] ?? null), r(), this.scheduleIdleTimer(n));
    }, c = { created: n.peer.created, get connection() {
      return n.peer.connection;
    }, get channel() {
      return n.peer.channel;
    }, get isDead() {
      return n.peer.isDead;
    }, getOffer: (i) => n.peer.getOffer(i), signal: (i) => n.peer.signal(i), sendData: (i) => {
      if (!s.roomToken) {
        s.pendingSendData.push(i);
        return;
      }
      n.peer.sendData(Gs(s.roomToken, i));
    }, destroy: () => a(), setHandlers: (i) => {
      const { signal: l, ...u } = i;
      Object.assign(s.handlers, u), l && (s.handlers.signal = l), this.flushBindingQueues(s);
    }, offerPromise: n.peer.offerPromise, addStream: (i) => {
      const l = n.streamOwners.get(i) ?? /* @__PURE__ */ new Set(), u = l.size === 0;
      l.add(e), n.streamOwners.set(i, l), u && n.peer.addStream(i);
    }, removeStream: (i) => {
      const l = n.streamOwners.get(i);
      l && (l.delete(e), l.size === 0 && (n.streamOwners.delete(i), n.peer.removeStream(i)));
    }, addTrack: (i, l) => {
      const u = n.trackOwners.get(i) ?? { stream: l, rooms: /* @__PURE__ */ new Set() }, f = u.rooms.size === 0;
      return u.stream = l, u.rooms.add(e), n.trackOwners.set(i, u), f ? n.peer.addTrack(i, l) : n.peer.connection.getSenders().find((d) => d.track === i) ?? n.peer.addTrack(i, l);
    }, removeTrack: (i) => {
      const l = n.trackOwners.get(i);
      l && (l.rooms.delete(e), l.rooms.size === 0 && (n.trackOwners.delete(i), n.peer.removeTrack(i)));
    }, replaceTrack: (i, l) => {
      const u = n.trackOwners.get(i);
      if (u) {
        n.trackOwners.delete(i);
        const f = n.trackOwners.get(l) ?? { stream: u.stream, rooms: /* @__PURE__ */ new Set() };
        u.rooms.forEach((d) => f.rooms.add(d)), n.trackOwners.set(l, f);
      }
      return n.peer.replaceTrack(i, l);
    }, __trysteroMedia: n.media };
    return s.proxy = c, s.detach = a, n.bindings[e] = s, n.controlRoomId ?? (n.controlRoomId = e), n.idleTimer = W(n.idleTimer), t.then((i) => {
      if (n.isClosing || n.bindings[e] !== s) return;
      s.roomToken = i, n.bindingsByToken[i] = s;
      const l = n.pendingDataByToken.get(i);
      (l == null ? void 0 : l.length) && (s.pendingData.push(...l), n.pendingDataByToken.delete(i)), s.pendingSendData.splice(0).forEach((u) => n.peer.sendData(Gs(i, u))), this.flushBindingQueues(s);
    }), { proxy: c, isNew: true };
  }
  pruneRoomOwnership(e, t) {
    e.streamOwners.forEach((n, r) => {
      n.delete(t), n.size === 0 && (e.streamOwners.delete(r), e.peer.removeStream(r));
    }), e.trackOwners.forEach((n, r) => {
      n.rooms.delete(t), n.rooms.size === 0 && (e.trackOwners.delete(r), e.peer.removeTrack(r));
    });
  }
  scheduleIdleTimer(e) {
    e.isClosing || ve(e.bindings).length > 0 || (e.idleTimer = W(e.idleTimer), e.idleTimer = setTimeout(() => {
      var _a2;
      const t = (_a2 = this.byApp[e.appId]) == null ? void 0 : _a2[e.peerId];
      !t || ve(t.bindings).length > 0 || this.clear(e.appId, e.peerId, { destroyPeer: true });
    }, e.idleMs));
  }
  getSignalBinding(e) {
    if (e.controlRoomId) {
      const n = e.bindings[e.controlRoomId];
      if (n == null ? void 0 : n.handlers.signal) return n;
    }
    const t = lt(e.bindings).find((n) => !!n.handlers.signal);
    return t ? (e.controlRoomId = t.roomId, t) : null;
  }
  flushBindingQueues(e) {
    const { handlers: t } = e;
    t.data && e.pendingData.length > 0 && e.pendingData.splice(0).forEach((n) => {
      var _a2;
      return (_a2 = t.data) == null ? void 0 : _a2.call(t, n);
    }), (t.track || t.stream) && e.pendingTracks.length && e.pendingTracks.splice(0).forEach(({ track: n, stream: r }) => {
      var _a2, _b;
      (_a2 = t.track) == null ? void 0 : _a2.call(t, n, r), (_b = t.stream) == null ? void 0 : _b.call(t, r);
    });
  }
  dispatchData(e, t) {
    var _a2, _b;
    const n = t0(t);
    if (!n) return;
    if (n.type === "presence") {
      n.isPresent ? e.remoteRoomTokens.add(n.roomToken) : e.remoteRoomTokens.delete(n.roomToken), (_b = (_a2 = this.roomPresenceHandlers)[e.appId]) == null ? void 0 : _b.call(_a2, e.peerId, n.roomToken, n.isPresent);
      return;
    }
    const r = e.bindingsByToken[n.roomToken];
    if (!r) {
      const o = e.pendingDataByToken.get(n.roomToken) ?? [];
      o.push(n.payload), e.pendingDataByToken.set(n.roomToken, o);
      return;
    }
    r.handlers.data ? r.handlers.data(n.payload) : r.pendingData.push(n.payload);
  }
  dispatchSignal(e, t) {
    var _a2, _b, _c2;
    (_c2 = (_a2 = this.getSignalBinding(e)) == null ? void 0 : (_b = _a2.handlers).signal) == null ? void 0 : _c2.call(_b, t);
  }
  dispatchTrack(e, t, n) {
    lt(e.bindings).forEach((r) => {
      var _a2, _b, _c2, _d;
      if (r.handlers.track || r.handlers.stream) {
        (_b = (_a2 = r.handlers).track) == null ? void 0 : _b.call(_a2, t, n), (_d = (_c2 = r.handlers).stream) == null ? void 0 : _d.call(_c2, n);
        return;
      }
      r.pendingTracks.push({ track: t, stream: n });
    });
  }
};
const o0 = 23333, s0 = 12, a0 = 7533, i0 = 23333, kr = "__legacy__", Sn = "offer-placeholder", c0 = ["offer", "answer", "candidate"], f0 = (e) => {
  if (typeof e == "string") try {
    const t = It(e);
    return t && typeof t == "object" ? t : null;
  } catch {
    return null;
  }
  return e && typeof e == "object" ? e : null;
}, Pt = (e, t) => typeof e[t] == "string" && e[t] ? e[t] : void 0, l0 = (e) => c0.some((t) => t in e && (typeof e[t] != "string" || e[t] === "")), Oi = (e, t, n, r, o, s) => {
  e.toCipher(t).then((a) => {
    e.isLeaving() || !s() || r(n, ye(o(a.sdp)));
  });
}, u0 = () => ({ status: "idle", offerPeer: null, offerId: null, offerSdp: null, offerInitPromise: null, offerAnswered: false, offerRelays: [], offerSignalRelays: [], offerSignalBacklog: [], offerRelayTimers: [], offerExpiryTimer: null, connectedPeer: null, connectedPeerUnhealthySinceMs: null, answeringExpiryTimer: null, answeringPeer: null, answerSent: false, connectionErrorReported: false, pendingCandidates: {} }), d0 = (e) => {
  var _a2;
  return [...e.turnConfig ?? [], ...((_a2 = e.rtcConfig) == null ? void 0 : _a2.iceServers) ?? []].some(({ urls: t }) => (Array.isArray(t) ? t : [t]).some((n) => /^turns?:/i.test(n)));
}, h0 = (e, t) => `could not connect to peer ${e} after exchanging SDP; ${d0(t) ? "check that your TURN server URLs and credentials are reachable by both peers" : "configure TURN servers with turnConfig or rtcConfig.iceServers"}`, Ln = (e, t, n) => {
  var _a2;
  e.isLeaving() || t.connectedPeer || t.connectionErrorReported || (t.connectionErrorReported = true, (_a2 = e.onJoinError) == null ? void 0 : _a2.call(e, { error: h0(n, e.config), appId: e.appId, peerId: n, roomId: e.roomId }));
}, Ht = (e, t) => e[t] ?? (e[t] = u0()), be = (e) => {
  e.connectedPeer ? e.status = "connected" : e.answeringPeer ? e.status = "answering" : e.offerPeer || e.offerRelays.some(Boolean) ? e.status = "offering" : e.status = "idle";
}, hn = (e, t) => {
  e.answeringPeer === t && (e.answeringExpiryTimer = W(e.answeringExpiryTimer), e.answeringPeer = null, e.answerSent = false, be(e));
}, Or = (e, t, n) => {
  e.connectedPeer && (e.connectedPeer.isDead || e.connectedPeer.destroy(), e.connectedPeer = null, e.connectedPeerUnhealthySinceMs = null, be(e));
}, ro = (e, t) => {
  e.offerRelayTimers[t] = W(e.offerRelayTimers[t]), e.offerRelays[t] && (e.offerRelays[t] = void 0, be(e));
}, Ks = (e, t) => {
  (e == null ? void 0 : e.offerRelays[t]) === Sn && ro(e, t);
}, p0 = (e) => {
  if (e.isDead || e.connection.connectionState === "closed") return true;
  try {
    return !!e.connection.remoteDescription;
  } catch {
    return true;
  }
}, zt = (e, t) => {
  const n = e.offerAnswered;
  e.offerExpiryTimer = W(e.offerExpiryTimer), e.offerInitPromise = null, e.offerRelays.forEach((r, o) => ro(e, o)), e.offerRelays = [], e.offerSignalRelays = [], e.offerRelayTimers = [], e.offerSignalBacklog = [], e.offerPeer && e.offerPeer !== e.connectedPeer && (n || p0(e.offerPeer) ? e.offerPeer.isDead || e.offerPeer.destroy() : t.recycle(e.offerPeer)), e.offerPeer = null, e.offerId = null, e.offerSdp = null, e.offerAnswered = false, e.connectionErrorReported = false, be(e);
}, g0 = (e, t, n, r) => {
  W(t.answeringExpiryTimer), t.answeringExpiryTimer = setTimeout(() => {
    const o = e.peerStates[n];
    !o || o.connectedPeer || o.answeringPeer !== r || (o.answerSent && Ln(e, o, n), r.destroy(), hn(o, r), e.checkDeactivate());
  }, i0);
}, m0 = async (e, t, n) => {
  const r = n ? [n, kr] : [kr];
  for (const o of r) {
    const s = e.pendingCandidates[o];
    if (s == null ? void 0 : s.length) {
      delete e.pendingCandidates[o];
      for (const a of s) await t.signal(a);
    }
  }
}, xi = (e, t, n, r = no) => {
  W(t.offerExpiryTimer);
  const o = t.offerId;
  t.offerExpiryTimer = setTimeout(() => {
    const s = e.peerStates[n];
    !s || s.connectedPeer || s.offerId !== o || (s.offerAnswered && Ln(e, s, n), zt(s, e.offerPool), e.checkDeactivate());
  }, r);
}, y0 = (e, t, n, r) => t.offerPeer && t.offerId && t.offerSdp ? Promise.resolve({ peer: t.offerPeer, offer: t.offerSdp, offerId: t.offerId }) : (t.offerInitPromise || (t.offerInitPromise = (async () => {
  const o = (await e.offerPool.checkout(1, false, e.encryptOffer))[0];
  if (!o) throw U("failed to allocate offer peer");
  const { peer: s, offer: a } = o;
  t.offerPeer = s, t.offerId = wt(s0), t.offerSdp = a, t.offerAnswered = false, t.connectionErrorReported = false, t.offerSignalBacklog = [], be(t);
  const c = () => {
    t.offerPeer === s && !t.connectedPeer && (t.offerAnswered && Ln(e, t, n), zt(t, e.offerPool)), e.disconnectPeer(s, n), e.checkDeactivate();
  };
  return s.setHandlers({ connect: () => e.connectPeer(s, n, r), signal: (i) => {
    t.offerPeer === s && (t.offerSignalBacklog.push(i), t.offerSignalRelays.forEach((l) => l == null ? void 0 : l(i)));
  }, close: c, error: c }), xi(e, t, n), { peer: s, offer: a, offerId: t.offerId };
})().finally(() => t.offerInitPromise = null)), t.offerInitPromise), w0 = async (e, t, n, r, o) => {
  if (r) {
    e.attachSharedPeerToRoom(n, r);
    return;
  }
  const s = e.peerStates[n];
  if (!s || s.connectedPeer || s.answeringPeer || s.offerAnswered) {
    Ks(s, t);
    return;
  }
  if (s.offerRelays[t] !== Sn) return;
  const [a, c] = await nt([$t(Bt(e.rootTopicPlaintext, n)), y0(e, s, n, t)]);
  if (e.isLeaving()) return;
  if (s.connectedPeer || s.answeringPeer || s.offerAnswered || s.offerRelays[t] !== Sn) {
    Ks(s, t);
    return;
  }
  s.offerRelayTimers[t] = W(s.offerRelayTimers[t]), s.offerRelays[t] = true, be(s), s.offerRelayTimers[t] = setTimeout(() => M0(e, n, t), (e.announceIntervals[t] ?? e.announceIntervalMs) * 0.9);
  let i = false;
  s.offerSignalRelays[t] = (l) => {
    i && (e.isLeaving() || s.connectedPeer || s.offerPeer !== c.peer || s.offerId !== c.offerId || l.type !== "candidate" || Oi(e, l, a, o, (u) => ({ peerId: Me, offerId: c.offerId, candidate: u, ...e.isPassive ? { passive: true } : {} }), () => !s.connectedPeer && s.offerPeer === c.peer && s.offerId === c.offerId));
  }, o(a, ye({ peerId: Me, offerId: c.offerId, offer: c.offer, ...e.isPassive ? { passive: true } : {} })), i = true, s.offerSignalBacklog.forEach((l) => {
    var _a2, _b;
    return (_b = (_a2 = s.offerSignalRelays)[t]) == null ? void 0 : _b.call(_a2, l);
  });
}, v0 = async (e, t, n, r, o, s, a) => {
  var _a2;
  const c = Ht(e.peerStates, n);
  if (c.answeringPeer || c.offerAnswered) return;
  const i = !!(c.offerPeer || c.offerRelays.some(Boolean));
  if ((i || s) && Me < n) return;
  i && zt(c, e.offerPool);
  const l = e.initPeer(false, e.config);
  c.answeringPeer = l, c.answerSent = false, c.connectionErrorReported = false, g0(e, c, n, l), be(c);
  const u = () => {
    c.answeringPeer === l && !c.connectedPeer && c.answerSent && Ln(e, c, n), hn(c, l), e.disconnectPeer(l, n), e.checkDeactivate();
  };
  l.setHandlers({ connect: () => e.connectPeer(l, n, t), close: u, error: u });
  let f;
  try {
    f = await e.toPlain({ type: "offer", sdp: r });
  } catch {
    hn(c, l), (_a2 = e.onJoinError) == null ? void 0 : _a2.call(e, { error: "incorrect room password when decrypting offer", appId: e.appId, peerId: n, roomId: e.roomId });
    return;
  }
  if (l.isDead) {
    hn(c, l);
    return;
  }
  const d = await $t(Bt(e.rootTopicPlaintext, n));
  e.isLeaving() || (l.setHandlers({ signal: (h) => {
    e.isLeaving() || c.answeringPeer !== l || l.isDead || h.type !== "answer" && h.type !== "candidate" || Oi(e, h, d, a, (p) => {
      const w = { peerId: Me };
      return h.type === "answer" ? (c.answerSent = true, w.answer = p) : w.candidate = p, o && (w.offerId = o), e.isPassive && (w.passive = true), w;
    }, () => c.answeringPeer === l && !l.isDead);
  } }), await l.signal(f), await m0(c, l, o));
}, b0 = async (e, t, n, r, o) => {
  var _a2;
  let s;
  try {
    s = await e.toPlain({ type: Mi, sdp: n });
  } catch {
    return;
  }
  const a = Ht(e.peerStates, t), c = r && (a == null ? void 0 : a.offerPeer) && a.offerId === r ? a.offerPeer : null, i = (a == null ? void 0 : a.answeringPeer) ?? null, l = !r && (a == null ? void 0 : a.offerPeer) ? a.offerPeer : null, u = o && !o.isDead ? o : c ?? i ?? l;
  if (!u || u.isDead) {
    const f = r ?? kr;
    ((_a2 = a.pendingCandidates)[f] ?? (_a2[f] = [])).push(s);
    return;
  }
  u.signal(s);
}, P0 = async (e, t, n, r, o, s) => {
  var _a2;
  let a;
  try {
    a = await e.toPlain({ type: "answer", sdp: r });
  } catch {
    (_a2 = e.onJoinError) == null ? void 0 : _a2.call(e, { error: "incorrect room password when decrypting answer", appId: e.appId, peerId: n, roomId: e.roomId });
    return;
  }
  if (s) e.offerPool.claimLeased(s), s.setHandlers({ connect: () => e.connectPeer(s, n, t), close: () => e.disconnectPeer(s, n) }), s.signal(a);
  else {
    const c = e.peerStates[n];
    if (!c || !c.offerPeer || c.offerAnswered || o && c.offerId && o !== c.offerId || c.offerPeer.isDead) return;
    c.offerAnswered = true, xi(e, c, n, o0), c.offerPeer.signal(a);
  }
}, M0 = (e, t, n) => {
  const r = e.peerStates[t];
  !r || r.connectedPeer || r.offerRelays[n] && (ro(r, n), e.checkDeactivate());
}, S0 = (e) => (t) => async (n, r, o) => {
  var _a2;
  if (e.isLeaving()) return;
  const s = f0(r);
  if (!s || l0(s)) return;
  const a = Pt(s, "peerId") ?? "", c = Pt(s, "offer"), i = Pt(s, "answer"), l = Pt(s, "candidate"), u = Pt(s, "offerId"), f = s.peer, d = s.hasOutgoingOffer === true, h = s.passive === true;
  if (!a || a === Me) return;
  const [p, w] = await nt([e.rootTopicP, e.selfTopicP]);
  if (e.isLeaving() || n !== p && n !== w || e.isPassive && h || (e.isPassive && !e.isActive && !i && !l && (e.isActive = true, (_a2 = e.requeueAnnounce) == null ? void 0 : _a2.call(e)), e.isPassive && !e.isActive)) return;
  const m = e.peerStates[a], P = m == null ? void 0 : m.connectedPeer;
  if (P && m) {
    const T = n0(P);
    if (T === "live") {
      m.connectedPeerUnhealthySinceMs = null;
      return;
    }
    if (T === "stale") Or(m);
    else {
      const S = Date.now(), _ = m.connectedPeerUnhealthySinceMs ?? S;
      if (m.connectedPeerUnhealthySinceMs = _, S - _ < a0) return;
      Or(m);
    }
  }
  let y = e.sharedPeers.get(e.appId, a);
  y && e.sharedPeers.getHealth(y.peer) === "stale" && (e.sharedPeers.clear(e.appId, a, { destroyPeer: true }), y = void 0);
  const R = !!(a && !c && !i && !l);
  if (R && !y) {
    const T = Ht(e.peerStates, a), S = Me < a;
    if (T.answeringPeer || T.connectedPeer || T.offerAnswered) return;
    if (!S && !T.offerPeer) {
      const _ = await $t(Bt(e.rootTopicPlaintext, a));
      !e.isLeaving() && !T.connectedPeer && o(_, ye({ peerId: Me }));
      return;
    }
    if (T.offerRelays[t]) return;
    T.offerRelays[t] = Sn, be(T);
  }
  if (y && (c || i || l)) {
    if (y.bindings[e.roomId]) return;
    e.attachSharedPeerToRoom(a, y);
    return;
  }
  if (R) return w0(e, t, a, y, o);
  if (c) return v0(e, t, a, c, u, d, o);
  if (l) return b0(e, a, l, u, f);
  if (i) return P0(e, t, a, i, u, f);
}, sr = 5333, R0 = [233, 533, 1333], T0 = 7533, A0 = 123333;
var E0 = ({ init: e, subscribe: t, announce: n, deactivate: r }) => {
  const o = {}, s = {}, a = {}, c = {}, i = new r0(), l = () => lt(o).some((S) => ve(S).length > 0), u = (S) => s[S] ?? (s[S] = {}), f = (S) => a[S] ?? (a[S] = {}), d = (S, _, L) => {
    i.getHealth(S.peer) === "live" && i.sendRoomPresence(S, _, L);
  }, h = (S, _) => {
    Ze(s[S] ?? {}).forEach(([L, M]) => {
      if (!M.shouldAdvertise()) return;
      const { roomToken: B, roomTokenPromise: q } = M;
      if (B) {
        d(_, B, true);
        return;
      }
      q.then((D) => {
        var _a2;
        ((_a2 = s[S]) == null ? void 0 : _a2[L]) === M && M.roomToken === D && (i.get(S, _.peerId) !== _ || _.isClosing || M.shouldAdvertise() && d(_, D, true));
      });
    });
  }, p = (S, _, L) => lt(i.getMap(S)).forEach((M) => d(M, _, L)), w = (S) => {
    c[S] || (c[S] = i.setRoomPresenceHandler(S, (_, L, M) => {
      var _a2, _b, _c2;
      if (!M) return;
      const B = i.get(S, _), q = (_a2 = a[S]) == null ? void 0 : _a2[L];
      !B || !q || ((_c2 = (_b = s[S]) == null ? void 0 : _b[q]) == null ? void 0 : _c2.attachSharedPeerToRoom(_, B));
    }));
  }, m = (S) => {
    var _a2;
    o[S] && ve(o[S]).length > 0 || ((_a2 = c[S]) == null ? void 0 : _a2.call(c), delete c[S], delete s[S], delete a[S]);
  };
  let P = false, y = [], R = null, T = ae;
  return (S, _, L) => {
    var _a2, _b;
    if (!S) throw U("requires a config map as the first argument");
    if (L && typeof L != "object") throw U("third argument must be a callbacks object");
    const { appId: M } = S, B = L == null ? void 0 : L.onJoinError, q = L == null ? void 0 : L.onPeerHandshake, D = L == null ? void 0 : L.handshakeTimeoutMs;
    if (!M) throw U("config map is missing appId field");
    if (!_) throw U("roomId argument required");
    if (D !== void 0 && (!Number.isFinite(D) || D <= 0)) throw U("handshakeTimeoutMs must be a positive number");
    if ((_a2 = o[M]) == null ? void 0 : _a2[_]) return o[M][_];
    w(M);
    const j = Bt(Se, M, _), J = $t(j), g = $t(Bt(j, Me)), b = Ru(S.password ?? "", M, _), A = Tu(M, _), E = S._test_only_sharedPeerIdleMs ?? A0;
    let x = false;
    const F = (N) => async (I) => ({ type: I.type, sdp: await N(b, I.sdp) }), Y = F(Eu), v = F(Au), k = i.getMap(M), $ = () => Hs(true, S);
    R || (R = new Ou($));
    const K = R, ue = async (N) => {
      const I = await N.getOffer(Date.now() - N.created > no);
      if (!I || I.type !== "offer") throw U("failed to get offer for peer");
      return (await v(I)).sdp;
    }, Oe = (N, I) => {
      const H = Ht(te.peerStates, N);
      H.answeringExpiryTimer = W(H.answeringExpiryTimer), H.answeringPeer = null;
      const { proxy: oe, isNew: X } = i.bind(_, A, I, { onDetach: () => {
        const fe = te.peerStates[N];
        (fe == null ? void 0 : fe.connectedPeer) === I.peer && (fe.connectedPeer = null, fe.connectedPeerUnhealthySinceMs = null, be(fe));
      } });
      H.connectedPeer = I.peer, H.connectedPeerUnhealthySinceMs = null, be(H), X && In(oe, N), zt(H, K);
    }, Fi = (N, I, H) => {
      if (x) {
        N.destroy();
        return;
      }
      const oe = Ht(te.peerStates, I);
      if (oe.connectedPeer) {
        const Fe = k[I];
        if (Fe && oe.connectedPeer === Fe.peer && Fe.bindings[_]) return;
        oe.connectedPeer !== N && !N.isDead && N.destroy();
        return;
      }
      let X = k[I];
      if (X && i.getHealth(X.peer) === "stale" && (i.clear(M, I, { destroyPeer: true }), X = void 0), X && X.peer !== N) {
        N.isDead || N.destroy(), Oe(I, X);
        return;
      }
      const fe = !X;
      X || (X = i.register(M, I, N, E)), Oe(I, X), fe && h(M, X);
    }, Yi = (N, I) => {
      if (x) return;
      const H = te.peerStates[I];
      (H == null ? void 0 : H.connectedPeer) === N && (Or(H), Ut());
    }, we = !!S.passive;
    let qe = null, je, io = ae;
    const Ut = () => {
      if (!we || !te.isActive) return;
      let N = false;
      Ze(te.peerStates).forEach(([I, H]) => {
        H.connectedPeer || H.answeringPeer || H.offerInitPromise || H.offerPeer || H.offerRelays.some(Boolean) ? N = true : H.status === "idle" && delete te.peerStates[I];
      }), N || (te.isActive = false, je = W(je), rt.forEach(W), rt.length = 0, io(), (qe == null ? void 0 : qe.roomToken) && p(M, qe.roomToken, false));
    }, te = { appId: M, roomId: _, config: S, peerStates: {}, rootTopicPlaintext: j, rootTopicP: J, selfTopicP: g, toPlain: Y, toCipher: v, isLeaving: () => x, isPassive: we, isActive: !we, onJoinError: B, sharedPeers: i, offerPool: K, encryptOffer: ue, initPeer: Hs, connectPeer: Fi, disconnectPeer: Yi, attachSharedPeerToRoom: Oe, checkDeactivate: Ut, announceIntervals: [], announceIntervalMs: sr }, Dn = { config: S, appId: M, roomId: _, isPassive: we }, Xi = S0(te);
    if (!P) {
      const N = e(S);
      y = (Array.isArray(N) ? N : [N]).map((I) => Promise.resolve(I)), P = true, T = ((_b = S.relayConfig) == null ? void 0 : _b.manualReconnection) ? ae : bu();
    }
    !we && !K.isActive && K.warmup(), te.announceIntervals = y.map(() => sr);
    const Nn = y.map(() => 0), Bn = y.map(() => 0), rt = [], co = y.map(async (N, I) => t(await N, await J, await g, Xi(I), (H) => K.getOffers(H, ue), Dn));
    nt([J, g]).then(([N, I]) => {
      if (x) return;
      const H = async (oe, X) => {
        var _a3;
        if (x || we && !te.isActive) return;
        const fe = we ? { passive: true } : void 0;
        let Fe;
        try {
          Fe = await n(oe, N, I, fe, Dn), Bn[X] = 0;
        } catch (Ki) {
          const po = Bn[X] ?? 0;
          po === 0 && ((_a3 = S.relayConfig) == null ? void 0 : _a3.warnOnRelayFailure) !== false && console.warn(`${Se}: announce failed - ${mt(Ki, "")}`), Bn[X] = po + 1;
        }
        if (x || we && !te.isActive) return;
        typeof Fe == "number" && (te.announceIntervals[X] = Fe);
        const lo = Nn[X] ?? 0;
        Nn[X] = lo + 1;
        const uo = te.announceIntervals[X] ?? sr, ho = R0[lo];
        rt[X] = setTimeout(() => {
          H(oe, X);
        }, typeof ho == "number" ? Math.min(uo, ho) : uo);
      };
      io = () => {
        r && y.forEach(async (oe) => {
          const X = await oe;
          x || r(X, N, I, Dn);
        });
      }, te.requeueAnnounce = () => {
        rt.forEach(W), rt.length = 0, je = W(je), K.isActive || K.warmup(), (qe == null ? void 0 : qe.roomToken) && p(M, qe.roomToken, true), je = setTimeout(Ut, T0), y.forEach(async (oe, X) => {
          const fe = await oe;
          fe && !x && (Nn[X] = 0, H(fe, X));
        });
      }, co.forEach(async (oe, X) => {
        if (await oe, x) return;
        const fe = await y[X];
        fe && !x && (!we || te.isActive) && H(fe, X);
      });
    });
    let In = ae;
    const { compose: Ui } = xu(S.password ?? "", M, _), fo = Ui(q), Wi = { ...fo ? { onPeerHandshake: fo } : {}, ...D === void 0 ? {} : { handshakeTimeoutMs: D }, isPassive: we, onHandshakeError: (N, I) => B == null ? void 0 : B({ error: I.replace(/^handshake failed: /, ""), appId: M, peerId: N, roomId: _ }) };
    o[M] ?? (o[M] = {});
    const Ji = u(M), Gi = Vu((N) => In = N, (N) => {
      if (x) return;
      const I = te.peerStates[N];
      (I == null ? void 0 : I.connectedPeer) && (I.connectedPeer = null, be(I), Ut());
    }, () => {
      var _a3, _b2;
      x = true, In = ae;
      const N = (_a3 = s[M]) == null ? void 0 : _a3[_];
      (N == null ? void 0 : N.roomToken) && (p(M, N.roomToken, false), (_b2 = a[M]) == null ? true : delete _b2[N.roomToken], a[M] && !ve(a[M]).length && delete a[M]), s[M] && (delete s[M][_], ve(s[M]).length || delete s[M]), Ze(te.peerStates).forEach(([I, H]) => {
        if (H.answeringExpiryTimer = W(H.answeringExpiryTimer), H.connectedPeer && !H.connectedPeer.isDead) {
          const oe = k[I];
          (!oe || oe.peer !== H.connectedPeer) && H.connectedPeer.destroy();
        }
        H.answeringPeer && !H.answeringPeer.isDead && H.answeringPeer.destroy(), zt(H, K), H.connectedPeer = null, H.answeringPeer = null, be(H);
      }), o[M] && (delete o[M][_], ve(o[M]).length === 0 && delete o[M]), rt.forEach(W), je = W(je), co.forEach(async (I) => {
        (await I)();
      }), !l() && (P = false, K.destroy(), R = null, T(), m(M));
    }, Wi);
    return qe = { roomToken: null, roomTokenPromise: A, attachSharedPeerToRoom: Oe, shouldAdvertise: () => !we || te.isActive }, Ji[_] = qe, A.then((N) => {
      var _a3;
      const I = qe;
      !I || x || ((_a3 = s[M]) == null ? void 0 : _a3[_]) !== I || (I.roomToken = N, f(M)[N] = _, lt(k).forEach((H) => {
        H.remoteRoomTokens.has(N) && Oe(H.peerId, H);
      }), (!we || te.isActive) && p(M, N, true));
    }), o[M][_] = Gi;
  };
};
const _0 = ["offer", "answer", "candidate"], k0 = (e) => {
  if (typeof e == "string") try {
    const t = It(e);
    return t && typeof t == "object" ? t : null;
  } catch {
    return null;
  }
  return e;
}, ar = (e, t) => typeof e[t] == "string" && e[t] ? e[t] : void 0, O0 = (e) => _0.some((t) => t in e && (typeof e[t] != "string" || e[t] === "")), x0 = (e) => {
  const t = k0(e);
  if (!t || O0(t)) return false;
  const n = ar(t, "peerId");
  return !!(n && n !== Me && t.passive !== true && !ar(t, "answer") && !ar(t, "candidate"));
}, ir = (e) => {
  if (!e) throw U("topic strategy missing room context");
  return e;
}, Zs = (e, t, n, r) => ({ kind: t, appId: e.appId, roomId: e.roomId, rootTopic: n, selfTopic: r }), cr = (e, t, n, r) => ({ kind: t, appId: e.appId, roomId: e.roomId, rootTopic: n, selfTopic: r });
var C0 = ({ init: e, subscribeTopic: t, publishTopic: n, unpublishTopic: r }) => E0({ init: e, subscribe: async (o, s, a, c, i, l) => {
  const u = ir(l), f = (R, T) => n(o, R, T, cr(u, "signal", s, a));
  let d = null, h = false, p = null, w = false;
  const m = (R) => {
    h || (h = true, R());
  }, P = () => (p || (p = Promise.resolve(t(o, a, (R, T) => {
    w || c(R, T, f);
  }, Zs(u, "self", s, a))).then((R) => {
    d = R, w && m(R);
  })), p);
  u.isPassive || await P();
  const y = await t(o, s, async (R, T) => {
    w || (u.isPassive && x0(T) && await P(), w || await c(R, T, f));
  }, Zs(u, "root", s, a));
  return () => {
    w = true, d && m(d), y();
  };
}, announce: (o, s, a, c, i) => {
  const l = ir(i);
  return n(o, s, ye({ peerId: Me, ...c }), cr(l, "announce", s, a));
}, ...r ? { deactivate: (o, s, a, c) => r(o, s, cr(ir(c), "announce", s, a)) } : {} });
const Ci = vu((e) => e.socket), L0 = 5, Li = "x", Di = "EVENT", { secretKey: D0, publicKey: N0 } = wi.keygen(), B0 = Nt(N0), I0 = {}, $0 = {}, H0 = {}, Qs = 250, Ni = () => Math.floor(Date.now() / 1e3), Bi = (e) => H0[e] ?? (H0[e] = Si(e, 1e4) + 2e4), z0 = async (e, t) => {
  const n = { kind: Bi(e), tags: [[Li, e]], created_at: Ni(), content: t, pubkey: B0 }, r = await Cn("SHA-256", ye([0, n.pubkey, n.created_at, n.kind, n.tags, n.content]));
  return ye([Di, { ...n, id: Nt(r), sig: Nt(await wi.signAsync(r, D0)) }]);
}, yt = {}, q0 = (e, t, n) => {
  var _a2;
  const r = yt[_a2 = e.url] ?? (yt[_a2] = { subIds: [], topics: /* @__PURE__ */ new Map(), updateTimer: null });
  r.topics.set(t, n), Ii(e, r);
}, j0 = (e, t) => {
  const n = yt[e.url];
  n && (n.topics.delete(t), n.topics.size === 0 ? (n.updateTimer !== null && (clearTimeout(n.updateTimer), n.updateTimer = null), n.subIds.forEach((r) => e.send(ye(["CLOSE", r]))), delete yt[e.url]) : Ii(e, n));
}, Ii = (e, t) => {
  t.updateTimer === null && (t.updateTimer = setTimeout(() => {
    t.updateTimer = null, $i(e);
  }, 0));
}, $i = (e) => {
  const t = yt[e.url];
  if (!t || t.topics.size === 0) return;
  const n = [...t.topics.keys()], r = [], o = Ni();
  for (let s = 0; s < n.length; s += Qs) r.push(n.slice(s, s + Qs));
  for (; t.subIds.length > r.length; ) {
    const s = t.subIds.pop();
    s && e.send(ye(["CLOSE", s]));
  }
  r.forEach((s, a) => {
    var _a2;
    const c = (_a2 = t.subIds)[a] ?? (_a2[a] = wt(64));
    e.send(ye(["REQ", c, { kinds: [...new Set(s.map(Bi))], since: o, "#x": s }]));
  });
}, F0 = (e) => {
  const t = yt[e.url];
  t && t.topics.size > 0 && $i(e);
}, yd = C0({ init: (e) => pu(e, Y0, L0, true).map((t) => {
  const n = Ci.register(t, () => wu(t, (r) => {
    var _a2, _b;
    const [o, s, a, c] = It(r);
    if (o !== Di) {
      const i = `${Se}: relay failure from ${n.url} - `;
      ((_a2 = e.relayConfig) == null ? void 0 : _a2.warnOnRelayFailure) !== false && (o === "NOTICE" ? console.warn(i + s) : o === "OK" && !a && console.warn(i + c));
      return;
    }
    if (a && typeof a == "object" && "content" in a) {
      const { content: i } = a, l = $0[s];
      if (l) {
        l(I0[s] ?? "", i);
        return;
      }
      const u = yt[n.url];
      if ((u == null ? void 0 : u.subIds.includes(s)) && a.tags) {
        const f = a.tags.find((d) => d[0] === Li);
        (f == null ? void 0 : f[1]) && ((_b = u.topics.get(f[1])) == null ? void 0 : _b(f[1], i));
      }
    }
  }, () => F0(n)));
  return n.ready;
}), subscribeTopic: (e, t, n) => (q0(e, t, (o, s) => void n(o, s)), () => {
  j0(e, t);
}), publishTopic: async (e, t, n) => e.send(await z0(t, typeof n == "string" ? n : ye(n))) }), wd = Ci.getSockets, Y0 = ["basspistol.org", "bucket.coracle.social", "chorus.almostmachines.dev", "chorus.pjv.me", "communities.nos.social", "ftp.halifax.rwth-aachen.de/nostr", "hol.is", "hornetstorage.net/relay", "koru.bitcointxoko.org", "nos.lol", "nostr-01.uid.ovh", "nostr-01.yakihonne.com", "nostr-relay.corb.net", "nostr.data.haus", "nostr.islandarea.net", "nostr.sathoarder.com", "nostr.self-determined.de", "nostr.tegila.com.br", "nostr.vulpem.com", "purplerelay.com", "relay-can.zombi.cloudrodion.com", "relay-rpi.edufeed.org", "relay.agorist.space", "relay.angor.io", "relay.artio.inf.unibe.ch", "relay.binaryrobot.com", "relay.damus.io", "relay.froth.zone", "relay.libernet.app", "relay.mostr.pub", "relay.mostro.network", "relay.nostr.place", "relay.nostrdice.com", "relay.notoshi.win", "relay.sigit.io", "relay02.lnfi.network", "relay2.angor.io", "schnorr.me", "slick.mjex.me", "social.amanah.eblessing.co", "staging.yabu.me", "strfry.openhoofd.nl", "strfry.shock.network", "testnet-relay.samt.st", "top.testrelay.top", "x.kojira.io", "yabu.me/v2"].map((e) => "wss://" + e);
/*!
* https://github.com/Starcounter-Jack/JSON-Patch
* (c) 2017-2022 Joachim Wester
* MIT licensed
*/
var X0 = /* @__PURE__ */ (function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
      r.__proto__ = o;
    } || function(r, o) {
      for (var s in o) o.hasOwnProperty(s) && (r[s] = o[s]);
    }, e(t, n);
  };
  return function(t, n) {
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
})(), U0 = Object.prototype.hasOwnProperty;
function xr(e, t) {
  return U0.call(e, t);
}
function Cr(e) {
  if (Array.isArray(e)) {
    for (var t = new Array(e.length), n = 0; n < t.length; n++) t[n] = "" + n;
    return t;
  }
  if (Object.keys) return Object.keys(e);
  var r = [];
  for (var o in e) xr(e, o) && r.push(o);
  return r;
}
function ge(e) {
  switch (typeof e) {
    case "object":
      return JSON.parse(JSON.stringify(e));
    case "undefined":
      return null;
    default:
      return e;
  }
}
function Lr(e) {
  for (var t = 0, n = e.length, r; t < n; ) {
    if (r = e.charCodeAt(t), r >= 48 && r <= 57) {
      t++;
      continue;
    }
    return false;
  }
  return true;
}
function Xe(e) {
  return e.indexOf("/") === -1 && e.indexOf("~") === -1 ? e : e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Hi(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
function Dr(e) {
  if (e === void 0) return true;
  if (e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = e.length; t < n; t++) if (Dr(e[t])) return true;
    } else if (typeof e == "object") {
      for (var r = Cr(e), o = r.length, s = 0; s < o; s++) if (Dr(e[r[s]])) return true;
    }
  }
  return false;
}
function Vs(e, t) {
  var n = [e];
  for (var r in t) {
    var o = typeof t[r] == "object" ? JSON.stringify(t[r], null, 2) : t[r];
    typeof o < "u" && n.push(r + ": " + o);
  }
  return n.join(`
`);
}
var zi = (function(e) {
  X0(t, e);
  function t(n, r, o, s, a) {
    var c = this.constructor, i = e.call(this, Vs(n, { name: r, index: o, operation: s, tree: a })) || this;
    return i.name = r, i.index = o, i.operation = s, i.tree = a, Object.setPrototypeOf(i, c.prototype), i.message = Vs(n, { name: r, index: o, operation: s, tree: a }), i;
  }
  return t;
})(Error), V = zi, W0 = ge, ft = { add: function(e, t, n) {
  return e[t] = this.value, { newDocument: n };
}, remove: function(e, t, n) {
  var r = e[t];
  return delete e[t], { newDocument: n, removed: r };
}, replace: function(e, t, n) {
  var r = e[t];
  return e[t] = this.value, { newDocument: n, removed: r };
}, move: function(e, t, n) {
  var r = Rn(n, this.path);
  r && (r = ge(r));
  var o = Qe(n, { op: "remove", path: this.from }).removed;
  return Qe(n, { op: "add", path: this.path, value: o }), { newDocument: n, removed: r };
}, copy: function(e, t, n) {
  var r = Rn(n, this.from);
  return Qe(n, { op: "add", path: this.path, value: ge(r) }), { newDocument: n };
}, test: function(e, t, n) {
  return { newDocument: n, test: qt(e[t], this.value) };
}, _get: function(e, t, n) {
  return this.value = e[t], { newDocument: n };
} }, J0 = { add: function(e, t, n) {
  return Lr(t) ? e.splice(t, 0, this.value) : e[t] = this.value, { newDocument: n, index: t };
}, remove: function(e, t, n) {
  var r = e.splice(t, 1);
  return { newDocument: n, removed: r[0] };
}, replace: function(e, t, n) {
  var r = e[t];
  return e[t] = this.value, { newDocument: n, removed: r };
}, move: ft.move, copy: ft.copy, test: ft.test, _get: ft._get };
function Rn(e, t) {
  if (t == "") return e;
  var n = { op: "_get", path: t };
  return Qe(e, n), n.value;
}
function Qe(e, t, n, r, o, s) {
  if (n === void 0 && (n = false), r === void 0 && (r = true), o === void 0 && (o = true), s === void 0 && (s = 0), n && (typeof n == "function" ? n(t, 0, e, t.path) : Tn(t, 0)), t.path === "") {
    var a = { newDocument: e };
    if (t.op === "add") return a.newDocument = t.value, a;
    if (t.op === "replace") return a.newDocument = t.value, a.removed = e, a;
    if (t.op === "move" || t.op === "copy") return a.newDocument = Rn(e, t.from), t.op === "move" && (a.removed = e), a;
    if (t.op === "test") {
      if (a.test = qt(e, t.value), a.test === false) throw new V("Test operation failed", "TEST_OPERATION_FAILED", s, t, e);
      return a.newDocument = e, a;
    } else {
      if (t.op === "remove") return a.removed = e, a.newDocument = null, a;
      if (t.op === "_get") return t.value = e, a;
      if (n) throw new V("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", s, t, e);
      return a;
    }
  } else {
    r || (e = ge(e));
    var c = t.path || "", i = c.split("/"), l = e, u = 1, f = i.length, d = void 0, h = void 0, p = void 0;
    for (typeof n == "function" ? p = n : p = Tn; ; ) {
      if (h = i[u], h && h.indexOf("~") != -1 && (h = Hi(h)), o && (h == "__proto__" || h == "prototype" && u > 0 && i[u - 1] == "constructor")) throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
      if (n && d === void 0 && (l[h] === void 0 ? d = i.slice(0, u).join("/") : u == f - 1 && (d = t.path), d !== void 0 && p(t, 0, e, d)), u++, Array.isArray(l)) {
        if (h === "-") h = l.length;
        else {
          if (n && !Lr(h)) throw new V("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", s, t, e);
          Lr(h) && (h = ~~h);
        }
        if (u >= f) {
          if (n && t.op === "add" && h > l.length) throw new V("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", s, t, e);
          var a = J0[t.op].call(t, l, h, e);
          if (a.test === false) throw new V("Test operation failed", "TEST_OPERATION_FAILED", s, t, e);
          return a;
        }
      } else if (u >= f) {
        var a = ft[t.op].call(t, l, h, e);
        if (a.test === false) throw new V("Test operation failed", "TEST_OPERATION_FAILED", s, t, e);
        return a;
      }
      if (l = l[h], n && u < f && (!l || typeof l != "object")) throw new V("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", s, t, e);
    }
  }
}
function oo(e, t, n, r, o) {
  if (r === void 0 && (r = true), o === void 0 && (o = true), n && !Array.isArray(t)) throw new V("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  r || (e = ge(e));
  for (var s = new Array(t.length), a = 0, c = t.length; a < c; a++) s[a] = Qe(e, t[a], n, true, o, a), e = s[a].newDocument;
  return s.newDocument = e, s;
}
function G0(e, t, n) {
  var r = Qe(e, t);
  if (r.test === false) throw new V("Test operation failed", "TEST_OPERATION_FAILED", n, t, e);
  return r.newDocument;
}
function Tn(e, t, n, r) {
  if (typeof e != "object" || e === null || Array.isArray(e)) throw new V("Operation is not an object", "OPERATION_NOT_AN_OBJECT", t, e, n);
  if (ft[e.op]) {
    if (typeof e.path != "string") throw new V("Operation `path` property is not a string", "OPERATION_PATH_INVALID", t, e, n);
    if (e.path.indexOf("/") !== 0 && e.path.length > 0) throw new V('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", t, e, n);
    if ((e.op === "move" || e.op === "copy") && typeof e.from != "string") throw new V("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", t, e, n);
    if ((e.op === "add" || e.op === "replace" || e.op === "test") && e.value === void 0) throw new V("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", t, e, n);
    if ((e.op === "add" || e.op === "replace" || e.op === "test") && Dr(e.value)) throw new V("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", t, e, n);
    if (n) {
      if (e.op == "add") {
        var o = e.path.split("/").length, s = r.split("/").length;
        if (o !== s + 1 && o !== s) throw new V("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", t, e, n);
      } else if (e.op === "replace" || e.op === "remove" || e.op === "_get") {
        if (e.path !== r) throw new V("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", t, e, n);
      } else if (e.op === "move" || e.op === "copy") {
        var a = { op: "_get", path: e.from, value: void 0 }, c = qi([a], n);
        if (c && c.name === "OPERATION_PATH_UNRESOLVABLE") throw new V("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", t, e, n);
      }
    }
  } else throw new V("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", t, e, n);
}
function qi(e, t, n) {
  try {
    if (!Array.isArray(e)) throw new V("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (t) oo(ge(t), ge(e), n || true);
    else {
      n = n || Tn;
      for (var r = 0; r < e.length; r++) n(e[r], r, t, void 0);
    }
  } catch (o) {
    if (o instanceof V) return o;
    throw o;
  }
}
function qt(e, t) {
  if (e === t) return true;
  if (e && t && typeof e == "object" && typeof t == "object") {
    var n = Array.isArray(e), r = Array.isArray(t), o, s, a;
    if (n && r) {
      if (s = e.length, s != t.length) return false;
      for (o = s; o-- !== 0; ) if (!qt(e[o], t[o])) return false;
      return true;
    }
    if (n != r) return false;
    var c = Object.keys(e);
    if (s = c.length, s !== Object.keys(t).length) return false;
    for (o = s; o-- !== 0; ) if (!t.hasOwnProperty(c[o])) return false;
    for (o = s; o-- !== 0; ) if (a = c[o], !qt(e[a], t[a])) return false;
    return true;
  }
  return e !== e && t !== t;
}
const K0 = Object.freeze(Object.defineProperty({ __proto__: null, JsonPatchError: V, _areEquals: qt, applyOperation: Qe, applyPatch: oo, applyReducer: G0, deepClone: W0, getValueByPointer: Rn, validate: qi, validator: Tn }, Symbol.toStringTag, { value: "Module" }));
/*!
* https://github.com/Starcounter-Jack/JSON-Patch
* (c) 2017-2021 Joachim Wester
* MIT license
*/
var so = /* @__PURE__ */ new WeakMap(), Z0 = /* @__PURE__ */ (function() {
  function e(t) {
    this.observers = /* @__PURE__ */ new Map(), this.obj = t;
  }
  return e;
})(), Q0 = /* @__PURE__ */ (function() {
  function e(t, n) {
    this.callback = t, this.observer = n;
  }
  return e;
})();
function V0(e) {
  return so.get(e);
}
function ed(e, t) {
  return e.observers.get(t);
}
function td(e, t) {
  e.observers.delete(t.callback);
}
function nd(e, t) {
  t.unobserve();
}
function rd(e, t) {
  var n = [], r, o = V0(e);
  if (!o) o = new Z0(e), so.set(e, o);
  else {
    var s = ed(o, t);
    r = s && s.observer;
  }
  if (r) return r;
  if (r = {}, o.value = ge(e), t) {
    r.callback = t, r.next = null;
    var a = function() {
      Nr(r);
    }, c = function() {
      clearTimeout(r.next), r.next = setTimeout(a);
    };
    typeof window < "u" && (window.addEventListener("mouseup", c), window.addEventListener("keyup", c), window.addEventListener("mousedown", c), window.addEventListener("keydown", c), window.addEventListener("change", c));
  }
  return r.patches = n, r.object = e, r.unobserve = function() {
    Nr(r), clearTimeout(r.next), td(o, r), typeof window < "u" && (window.removeEventListener("mouseup", c), window.removeEventListener("keyup", c), window.removeEventListener("mousedown", c), window.removeEventListener("keydown", c), window.removeEventListener("change", c));
  }, o.observers.set(t, new Q0(t, r)), r;
}
function Nr(e, t) {
  t === void 0 && (t = false);
  var n = so.get(e.object);
  ao(n.value, e.object, e.patches, "", t), e.patches.length && oo(n.value, e.patches);
  var r = e.patches;
  return r.length > 0 && (e.patches = [], e.callback && e.callback(r)), r;
}
function ao(e, t, n, r, o) {
  if (t !== e) {
    typeof t.toJSON == "function" && (t = t.toJSON());
    for (var s = Cr(t), a = Cr(e), c = false, i = a.length - 1; i >= 0; i--) {
      var l = a[i], u = e[l];
      if (xr(t, l) && !(t[l] === void 0 && u !== void 0 && Array.isArray(t) === false)) {
        var f = t[l];
        typeof u == "object" && u != null && typeof f == "object" && f != null && Array.isArray(u) === Array.isArray(f) ? ao(u, f, n, r + "/" + Xe(l), o) : u !== f && (o && n.push({ op: "test", path: r + "/" + Xe(l), value: ge(u) }), n.push({ op: "replace", path: r + "/" + Xe(l), value: ge(f) }));
      } else Array.isArray(e) === Array.isArray(t) ? (o && n.push({ op: "test", path: r + "/" + Xe(l), value: ge(u) }), n.push({ op: "remove", path: r + "/" + Xe(l) }), c = true) : (o && n.push({ op: "test", path: r, value: e }), n.push({ op: "replace", path: r, value: t }));
    }
    if (!(!c && s.length == a.length)) for (var i = 0; i < s.length; i++) {
      var l = s[i];
      !xr(e, l) && t[l] !== void 0 && n.push({ op: "add", path: r + "/" + Xe(l), value: ge(t[l]) });
    }
  }
}
function od(e, t, n) {
  n === void 0 && (n = false);
  var r = [];
  return ao(e, t, r, "", n), r;
}
const sd = Object.freeze(Object.defineProperty({ __proto__: null, compare: od, generate: Nr, observe: rd, unobserve: nd }, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, K0, sd, { JsonPatchError: zi, deepClone: ge, escapePathComponent: Xe, unescapePathComponent: Hi });
var fr = { exports: {} }, lr, ea;
function ad() {
  if (ea) return lr;
  ea = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return lr = e, lr;
}
var ur, ta;
function id() {
  if (ta) return ur;
  ta = 1;
  var e = ad();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ur = function() {
    function r(a, c, i, l, u, f) {
      if (f !== e) {
        var d = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw d.name = "Invariant Violation", d;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var s = { array: r, bigint: r, bool: r, func: r, number: r, object: r, string: r, symbol: r, any: r, arrayOf: o, element: r, elementType: r, instanceOf: o, node: r, objectOf: o, oneOf: o, oneOfType: o, shape: o, exact: o, checkPropTypes: n, resetWarningCache: t };
    return s.PropTypes = s, s;
  }, ur;
}
var na;
function vd() {
  return na || (na = 1, fr.exports = id()()), fr.exports;
}
function ji(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = ji(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function ra() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = ji(e)) && (r && (r += " "), r += t);
  return r;
}
const cd = Object.freeze(Object.defineProperty({ __proto__: null, clsx: ra, default: ra }, Symbol.toStringTag, { value: "Module" })), bd = oa(cd);
export {
  G as C,
  ys as _,
  hd as a,
  bd as b,
  rc as c,
  ld as d,
  pd as e,
  vo as f,
  Br as g,
  hc as h,
  wd as i,
  yd as j,
  oo as k,
  ud as l,
  Me as m,
  md as n,
  od as o,
  dc as p,
  vd as r,
  gd as s,
  dd as u
};
