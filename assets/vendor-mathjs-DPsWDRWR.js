import { _ as or, a as Ue, e as kc, s as $o, n as at } from "./vendor-Dwx9Xpfu.js";
var ko = { relTol: 1e-12, absTol: 1e-15, matrix: "Matrix", number: "number", numberFallback: "number", precision: 64, predictable: false, randomSeed: null, legacySubset: false };
function er(e, r) {
  if (yn(e, r)) return e[r];
  throw typeof e[r] == "function" && pa(e, r) ? new Error('Cannot access method "' + r + '" as a property') : new Error('No access to property "' + r + '"');
}
function kt(e, r, a) {
  if (yn(e, r)) return e[r] = a, a;
  throw new Error('No access to property "' + r + '"');
}
function yn(e, r) {
  return !Pc(e) && !Array.isArray(e) ? false : ye(Ic, r) ? true : !(r in Object.prototype || r in Function.prototype);
}
function qc(e, r) {
  if (!pa(e, r)) throw new Error('No access to method "' + r + '"');
  return e[r];
}
function pa(e, r) {
  return e == null || typeof e[r] != "function" || ye(e, r) && Object.getPrototypeOf && r in Object.getPrototypeOf(e) ? false : ye(_c, r) ? true : !(r in Object.prototype || r in Function.prototype);
}
function Pc(e) {
  return typeof e == "object" && e && e.constructor === Object;
}
var Ic = { length: true, name: true }, _c = { toString: true, valueOf: true, toLocaleString: true };
class Bn {
  constructor(r) {
    this.wrappedObject = r, this[Symbol.iterator] = this.entries;
  }
  keys() {
    return Object.keys(this.wrappedObject).filter((r) => this.has(r)).values();
  }
  get(r) {
    return er(this.wrappedObject, r);
  }
  set(r, a) {
    return kt(this.wrappedObject, r, a), this;
  }
  has(r) {
    return yn(this.wrappedObject, r) && r in this.wrappedObject;
  }
  entries() {
    return Po(this.keys(), (r) => [r, this.get(r)]);
  }
  forEach(r) {
    for (var a of this.keys()) r(this.get(a), a, this);
  }
  delete(r) {
    yn(this.wrappedObject, r) && delete this.wrappedObject[r];
  }
  clear() {
    for (var r of this.keys()) this.delete(r);
  }
  get size() {
    return Object.keys(this.wrappedObject).length;
  }
}
class qo {
  constructor(r, a, n) {
    this.a = r, this.b = a, this.bKeys = n, this[Symbol.iterator] = this.entries;
  }
  get(r) {
    return this.bKeys.has(r) ? this.b.get(r) : this.a.get(r);
  }
  set(r, a) {
    return this.bKeys.has(r) ? this.b.set(r, a) : this.a.set(r, a), this;
  }
  has(r) {
    return this.b.has(r) || this.a.has(r);
  }
  keys() {
    return (/* @__PURE__ */ new Set([...this.a.keys(), ...this.b.keys()]))[Symbol.iterator]();
  }
  entries() {
    return Po(this.keys(), (r) => [r, this.get(r)]);
  }
  forEach(r) {
    for (var a of this.keys()) r(this.get(a), a, this);
  }
  delete(r) {
    return this.bKeys.has(r) ? this.b.delete(r) : this.a.delete(r);
  }
  clear() {
    this.a.clear(), this.b.clear();
  }
  get size() {
    return [...this.keys()].length;
  }
}
function Po(e, r) {
  return { next: () => {
    var a = e.next();
    return a.done ? a : { value: r(a.value), done: false };
  } };
}
function qt() {
  return /* @__PURE__ */ new Map();
}
function ct(e) {
  if (!e) return qt();
  if (Lo(e)) return e;
  if (Tn(e)) return new Bn(e);
  throw new Error("createMap can create maps from objects or Maps");
}
function Rc(e) {
  if (e instanceof Bn) return e.wrappedObject;
  var r = {};
  for (var a of e.keys()) {
    var n = e.get(a);
    kt(r, a, n);
  }
  return r;
}
function Pe(e) {
  return typeof e == "number";
}
function He(e) {
  return !e || typeof e != "object" || typeof e.constructor != "function" ? false : e.isBigNumber === true && typeof e.constructor.prototype == "object" && e.constructor.prototype.isBigNumber === true || typeof e.constructor.isDecimal == "function" && e.constructor.isDecimal(e) === true;
}
function hn(e) {
  return typeof e == "bigint";
}
function Sn(e) {
  return e && typeof e == "object" && Object.getPrototypeOf(e).isComplex === true || false;
}
function da(e) {
  return e && typeof e == "object" && Object.getPrototypeOf(e).isFraction === true || false;
}
function Io(e) {
  return e && e.constructor.prototype.isUnit === true || false;
}
function Qr(e) {
  return typeof e == "string";
}
var _o = Array.isArray;
function rr(e) {
  return e && e.constructor.prototype.isMatrix === true || false;
}
function ft(e) {
  return Array.isArray(e) || rr(e);
}
function ea(e) {
  return e && e.isDenseMatrix && e.constructor.prototype.isMatrix === true || false;
}
function Mt(e) {
  return e && e.isSparseMatrix && e.constructor.prototype.isMatrix === true || false;
}
function jc(e) {
  return e && e.constructor.prototype.isRange === true || false;
}
function Lc(e) {
  return e && e.constructor.prototype.isIndex === true || false;
}
function zc(e) {
  return typeof e == "boolean";
}
function Uc(e) {
  return e && e.constructor.prototype.isResultSet === true || false;
}
function Ro(e) {
  return e && e.constructor.prototype.isHelp === true || false;
}
function jo(e) {
  return typeof e == "function";
}
function Wc(e) {
  return e instanceof Date;
}
function Hc(e) {
  return e instanceof RegExp;
}
function Tn(e) {
  return !!(e && typeof e == "object" && e.constructor === Object && !Sn(e) && !da(e));
}
function Lo(e) {
  return e ? e instanceof Map || e instanceof Bn || typeof e.set == "function" && typeof e.get == "function" && typeof e.keys == "function" && typeof e.has == "function" : false;
}
function Zc(e) {
  return e === null;
}
function Jc(e) {
  return e === void 0;
}
function Fr(e) {
  return e && e.isAccessorNode === true && e.constructor.prototype.isNode === true || false;
}
function ur(e) {
  return e && e.isArrayNode === true && e.constructor.prototype.isNode === true || false;
}
function Vc(e) {
  return e && e.isAssignmentNode === true && e.constructor.prototype.isNode === true || false;
}
function Xc(e) {
  return e && e.isBlockNode === true && e.constructor.prototype.isNode === true || false;
}
function Gc(e) {
  return e && e.isConditionalNode === true && e.constructor.prototype.isNode === true || false;
}
function Ne(e) {
  return e && e.isConstantNode === true && e.constructor.prototype.isNode === true || false;
}
function ra(e) {
  return Ne(e) || qe(e) && e.args.length === 1 && Ne(e.args[0]) && "-+~".includes(e.op);
}
function It(e) {
  return e && e.isFunctionAssignmentNode === true && e.constructor.prototype.isNode === true || false;
}
function Lr(e) {
  return e && e.isFunctionNode === true && e.constructor.prototype.isNode === true || false;
}
function dt(e) {
  return e && e.isIndexNode === true && e.constructor.prototype.isNode === true || false;
}
function Fe(e) {
  return e && e.isNode === true && e.constructor.prototype.isNode === true || false;
}
function Mn(e) {
  return e && e.isObjectNode === true && e.constructor.prototype.isNode === true || false;
}
function qe(e) {
  return e && e.isOperatorNode === true && e.constructor.prototype.isNode === true || false;
}
function Br(e) {
  return e && e.isParenthesisNode === true && e.constructor.prototype.isNode === true || false;
}
function Qc(e) {
  return e && e.isRangeNode === true && e.constructor.prototype.isNode === true || false;
}
function Kc(e) {
  return e && e.isRelationalNode === true && e.constructor.prototype.isNode === true || false;
}
function ze(e) {
  return e && e.isSymbolNode === true && e.constructor.prototype.isNode === true || false;
}
function zo(e) {
  return e && e.constructor.prototype.isChain === true || false;
}
function Ze(e) {
  var r = typeof e;
  return r === "object" ? e === null ? "null" : He(e) ? "BigNumber" : e.constructor && e.constructor.name ? e.constructor.name : "Object" : r;
}
function Dn(e) {
  var r = typeof e;
  if (r === "number" || r === "bigint" || r === "string" || r === "boolean" || e === null || e === void 0) return e;
  if (typeof e.clone == "function") return e.clone();
  if (Array.isArray(e)) return e.map(function(a) {
    return Dn(a);
  });
  if (e instanceof Date) return new Date(e.valueOf());
  if (He(e)) return e;
  if (Tn(e)) return Yc(e, Dn);
  if (r === "function") return e;
  throw new TypeError("Cannot clone: unknown type of value (value: ".concat(e, ")"));
}
function Yc(e, r) {
  var a = {};
  for (var n in e) ye(e, n) && (a[n] = r(e[n]));
  return a;
}
function bn(e, r) {
  var a, n, i;
  if (Array.isArray(e)) {
    if (!Array.isArray(r) || e.length !== r.length) return false;
    for (n = 0, i = e.length; n < i; n++) if (!bn(e[n], r[n])) return false;
    return true;
  } else {
    if (typeof e == "function") return e === r;
    if (e instanceof Object) {
      if (Array.isArray(r) || !(r instanceof Object)) return false;
      for (a in e) if (!(a in r) || !bn(e[a], r[a])) return false;
      for (a in r) if (!(a in e)) return false;
      return true;
    } else return e === r;
  }
}
function el(e, r, a) {
  var n = true, i;
  Object.defineProperty(e, r, { get: function() {
    return n && (i = a(), n = false), i;
  }, set: function(o) {
    i = o, n = false;
  }, configurable: true, enumerable: true });
}
function ye(e, r) {
  return e && Object.hasOwnProperty.call(e, r);
}
function rl(e, r) {
  for (var a = {}, n = 0; n < r.length; n++) {
    var i = r[n], t = e[i];
    t !== void 0 && (a[i] = t);
  }
  return a;
}
var tl = ["Matrix", "Array"], nl = ["number", "BigNumber", "bigint", "Fraction"], be = function(r) {
  if (r) throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);
  return Object.freeze(ko);
};
or(be, ko, { MATRIX_OPTIONS: tl, NUMBER_OPTIONS: nl });
function xe(e) {
  return typeof e == "boolean" ? true : Number.isFinite(e) ? e === Math.round(e) : false;
}
function Yr(e, r) {
  if (r.number === "bigint") try {
    BigInt(e);
  } catch {
    return r.numberFallback;
  }
  return r.number;
}
var _r = Math.sign || function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, al = Math.log2 || function(r) {
  return Math.log(r) / Math.LN2;
}, il = Math.log10 || function(r) {
  return Math.log(r) / Math.LN10;
}, ol = Math.log1p || function(e) {
  return Math.log(e + 1);
}, sl = Math.cbrt || function(r) {
  if (r === 0) return r;
  var a = r < 0, n;
  return a && (r = -r), Number.isFinite(r) ? (n = Math.exp(Math.log(r) / 3), n = (r / (n * n) + 2 * n) / 3) : n = r, a ? -n : n;
}, ul = Math.expm1 || function(r) {
  return r >= 2e-4 || r <= -2e-4 ? Math.exp(r) - 1 : r + r * r / 2 + r * r * r / 6;
};
function Zn(e, r, a) {
  var n = { 2: "0b", 8: "0o", 16: "0x" }, i = n[r], t = "";
  if (a) {
    if (a < 1) throw new Error("size must be in greater than 0");
    if (!xe(a)) throw new Error("size must be an integer");
    if (e > 2 ** (a - 1) - 1 || e < -(2 ** (a - 1))) throw new Error("Value must be in range [-2^".concat(a - 1, ", 2^").concat(a - 1, "-1]"));
    if (!xe(e)) throw new Error("Value must be an integer");
    e < 0 && (e = e + 2 ** a), t = "i".concat(a);
  }
  var o = "";
  return e < 0 && (e = -e, o = "-"), "".concat(o).concat(i).concat(e.toString(r)).concat(t);
}
function $t(e, r) {
  if (typeof r == "function") return r(e);
  if (e === 1 / 0) return "Infinity";
  if (e === -1 / 0) return "-Infinity";
  if (isNaN(e)) return "NaN";
  var { notation: a, precision: n, wordSize: i } = Uo(r);
  switch (a) {
    case "fixed":
      return Wo(e, n);
    case "exponential":
      return Ho(e, n);
    case "engineering":
      return cl(e, n);
    case "bin":
      return Zn(e, 2, i);
    case "oct":
      return Zn(e, 8, i);
    case "hex":
      return Zn(e, 16, i);
    case "auto":
      return ll(e, n, r).replace(/((\.\d*?)(0+))($|e)/, function() {
        var t = arguments[2], o = arguments[4];
        return t !== "." ? t + o : o;
      });
    default:
      throw new Error('Unknown notation "' + a + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function Uo(e) {
  var r = "auto", a, n;
  if (e !== void 0) if (Pe(e)) a = e;
  else if (He(e)) a = e.toNumber();
  else if (Tn(e)) e.precision !== void 0 && (a = Ua(e.precision, () => {
    throw new Error('Option "precision" must be a number or BigNumber');
  })), e.wordSize !== void 0 && (n = Ua(e.wordSize, () => {
    throw new Error('Option "wordSize" must be a number or BigNumber');
  })), e.notation && (r = e.notation);
  else throw new Error("Unsupported type of options, number, BigNumber, or object expected");
  return { notation: r, precision: a, wordSize: n };
}
function On(e) {
  var r = String(e).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
  if (!r) throw new SyntaxError("Invalid number " + e);
  var a = r[1], n = r[2], i = parseFloat(r[4] || "0"), t = n.indexOf(".");
  i += t !== -1 ? t - 1 : n.length - 1;
  var o = n.replace(".", "").replace(/^0*/, function(u) {
    return i -= u.length, "";
  }).replace(/0*$/, "").split("").map(function(u) {
    return parseInt(u);
  });
  return o.length === 0 && (o.push(0), i++), { sign: a, coefficients: o, exponent: i };
}
function cl(e, r) {
  if (isNaN(e) || !Number.isFinite(e)) return String(e);
  var a = On(e), n = $n(a, r), i = n.exponent, t = n.coefficients, o = i % 3 === 0 ? i : i < 0 ? i - 3 - i % 3 : i - i % 3;
  if (Pe(r)) for (; r > t.length || i - o + 1 > t.length; ) t.push(0);
  else for (var u = Math.abs(i - o) - (t.length - 1), c = 0; c < u; c++) t.push(0);
  for (var s = Math.abs(i - o), l = 1; s > 0; ) l++, s--;
  var m = t.slice(l).join(""), p = Pe(r) && m.length || m.match(/[1-9]/) ? "." + m : "", h = t.slice(0, l).join("") + p + "e" + (i >= 0 ? "+" : "") + o.toString();
  return n.sign + h;
}
function Wo(e, r) {
  if (isNaN(e) || !Number.isFinite(e)) return String(e);
  var a = On(e), n = typeof r == "number" ? $n(a, a.exponent + 1 + r) : a, i = n.coefficients, t = n.exponent + 1, o = t + (r || 0);
  return i.length < o && (i = i.concat(lt(o - i.length))), t < 0 && (i = lt(-t + 1).concat(i), t = 1), t < i.length && i.splice(t, 0, t === 0 ? "0." : "."), n.sign + i.join("");
}
function Ho(e, r) {
  if (isNaN(e) || !Number.isFinite(Number(e))) return String(e);
  var a = On(e), n = r ? $n(a, r) : a, i = n.coefficients, t = n.exponent;
  i.length < r && (i = i.concat(lt(r - i.length)));
  var o = i.shift();
  return n.sign + o + (i.length > 0 ? "." + i.join("") : "") + "e" + (t >= 0 ? "+" : "") + t;
}
function ll(e, r, a) {
  if (isNaN(e) || !Number.isFinite(e)) return String(e);
  var n = Wa(a == null ? void 0 : a.lowerExp, -3), i = Wa(a == null ? void 0 : a.upperExp, 5), t = On(e), o = r ? $n(t, r) : t;
  if (o.exponent < n || o.exponent >= i) return Ho(e, r);
  var u = o.coefficients, c = o.exponent;
  u.length < r && (u = u.concat(lt(r - u.length))), u = u.concat(lt(c - u.length + 1 + (u.length < r ? r - u.length : 0))), u = lt(-c).concat(u);
  var s = c > 0 ? c : 0;
  return s < u.length - 1 && u.splice(s + 1, 0, "."), o.sign + u.join("");
}
function $n(e, r) {
  for (var a = { sign: e.sign, coefficients: e.coefficients, exponent: e.exponent }, n = a.coefficients; r <= 0; ) n.unshift(0), a.exponent++, r++;
  if (n.length > r) {
    var i = n.splice(r, n.length - r);
    if (i[0] >= 5) {
      var t = r - 1;
      for (n[t]++; n[t] === 10; ) n.pop(), t === 0 && (n.unshift(0), a.exponent++, t++), t--, n[t]++;
    }
  }
  return a;
}
function lt(e) {
  for (var r = [], a = 0; a < e; a++) r.push(0);
  return r;
}
function fl(e) {
  return e.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length;
}
function vr(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1e-8, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  if (a <= 0) throw new Error("Relative tolerance must be greater than 0");
  if (n < 0) throw new Error("Absolute tolerance must be at least 0");
  return isNaN(e) || isNaN(r) ? false : !Number.isFinite(e) || !Number.isFinite(r) ? e === r : e === r ? true : Math.abs(e - r) <= Math.max(a * Math.max(Math.abs(e), Math.abs(r)), n);
}
var ml = Math.acosh || function(e) {
  return Math.log(Math.sqrt(e * e - 1) + e);
}, pl = Math.asinh || function(e) {
  return Math.log(Math.sqrt(e * e + 1) + e);
}, dl = Math.atanh || function(e) {
  return Math.log((1 + e) / (1 - e)) / 2;
}, hl = Math.cosh || function(e) {
  return (Math.exp(e) + Math.exp(-e)) / 2;
}, vl = Math.sinh || function(e) {
  return (Math.exp(e) - Math.exp(-e)) / 2;
}, gl = Math.tanh || function(e) {
  var r = Math.exp(2 * e);
  return (r - 1) / (r + 1);
};
function Ua(e, r) {
  if (Pe(e)) return e;
  if (He(e)) return e.toNumber();
  r();
}
function Wa(e, r) {
  return Pe(e) ? e : He(e) ? e.toNumber() : r;
}
var ar = "number", Tr = "number, number";
function Zo(e) {
  return Math.abs(e);
}
Zo.signature = ar;
function ha(e, r) {
  return e + r;
}
ha.signature = Tr;
function va(e, r) {
  return e - r;
}
va.signature = Tr;
function ga(e, r) {
  return e * r;
}
ga.signature = Tr;
function ya(e, r) {
  return e / r;
}
ya.signature = Tr;
function Jo(e) {
  return -e;
}
Jo.signature = ar;
function Vo(e) {
  return e;
}
Vo.signature = ar;
function Xo(e) {
  return sl(e);
}
Xo.signature = ar;
function Go(e) {
  return e * e * e;
}
Go.signature = ar;
function Qo(e) {
  return Math.exp(e);
}
Qo.signature = ar;
function Ko(e) {
  return ul(e);
}
Ko.signature = ar;
function Yo(e, r) {
  if (!xe(e) || !xe(r)) throw new Error("Parameters in function gcd must be integer numbers");
  for (var a; r !== 0; ) a = e % r, e = r, r = a;
  return e < 0 ? -e : e;
}
Yo.signature = Tr;
function es(e, r) {
  if (!xe(e) || !xe(r)) throw new Error("Parameters in function lcm must be integer numbers");
  if (e === 0 || r === 0) return 0;
  for (var a, n = e * r; r !== 0; ) a = r, r = e % a, e = a;
  return Math.abs(n / e);
}
es.signature = Tr;
function yl(e, r) {
  return r ? Math.log(e) / Math.log(r) : Math.log(e);
}
function rs(e) {
  return il(e);
}
rs.signature = ar;
function ts(e) {
  return al(e);
}
ts.signature = ar;
function ns(e) {
  return ol(e);
}
ns.signature = ar;
function as(e, r) {
  return r === 0 ? e : e - r * Math.floor(e / r);
}
as.signature = Tr;
function Dl(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2, a = r < 0;
  if (a && (r = -r), r === 0) throw new Error("Root must be non-zero");
  if (e < 0 && Math.abs(r) % 2 !== 1) throw new Error("Root must be odd when a is negative.");
  if (e === 0) return a ? 1 / 0 : 0;
  if (!isFinite(e)) return a ? 0 : e;
  var n = Math.pow(Math.abs(e), 1 / r);
  return n = e < 0 ? -n : n, a ? 1 / n : n;
}
function is(e) {
  return _r(e);
}
is.signature = ar;
function os(e) {
  return Math.sqrt(e);
}
os.signature = ar;
function ss(e) {
  return e * e;
}
ss.signature = ar;
function us(e, r) {
  var a, n, i, t = 0, o = 1, u = 1, c = 0;
  if (!xe(e) || !xe(r)) throw new Error("Parameters in function xgcd must be integer numbers");
  for (; r; ) n = Math.floor(e / r), i = e - n * r, a = t, t = o - n * t, o = a, a = u, u = c - n * u, c = a, e = r, r = i;
  var s;
  return e < 0 ? s = [-e, -o, -c] : s = [e, e ? o : 0, c], s;
}
us.signature = Tr;
function cs(e, r) {
  return e * e < 1 && r === 1 / 0 || e * e > 1 && r === -1 / 0 ? 0 : Math.pow(e, r);
}
cs.signature = Tr;
function bl(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!xe(r) || r < 0 || r > 15) throw new Error("Number of decimals in function round must be an integer from 0 to 15 inclusive");
  return parseFloat(Wo(e, r));
}
function ls(e) {
  return Math.abs(e);
}
ls.signature = ar;
var xl = "number", ht = "number, number";
function fs(e, r) {
  if (!xe(e) || !xe(r)) throw new Error("Integers expected in function bitAnd");
  return e & r;
}
fs.signature = ht;
function ms(e) {
  if (!xe(e)) throw new Error("Integer expected in function bitNot");
  return ~e;
}
ms.signature = xl;
function ps(e, r) {
  if (!xe(e) || !xe(r)) throw new Error("Integers expected in function bitOr");
  return e | r;
}
ps.signature = ht;
function ds(e, r) {
  if (!xe(e) || !xe(r)) throw new Error("Integers expected in function bitXor");
  return e ^ r;
}
ds.signature = ht;
function hs(e, r) {
  if (!xe(e) || !xe(r)) throw new Error("Integers expected in function leftShift");
  return e << r;
}
hs.signature = ht;
function vs(e, r) {
  if (!xe(e) || !xe(r)) throw new Error("Integers expected in function rightArithShift");
  return e >> r;
}
vs.signature = ht;
function gs(e, r) {
  if (!xe(e) || !xe(r)) throw new Error("Integers expected in function rightLogShift");
  return e >>> r;
}
gs.signature = ht;
function Ar(e, r) {
  if (r < e) return 1;
  if (r === e) return r;
  var a = r + e >> 1;
  return Ar(e, a) * Ar(a + 1, r);
}
function ys(e, r) {
  if (!xe(e) || e < 0) throw new TypeError("Positive integer value expected in function combinations");
  if (!xe(r) || r < 0) throw new TypeError("Positive integer value expected in function combinations");
  if (r > e) throw new TypeError("k must be less than or equal to n");
  for (var a = e - r, n = 1, i = r < a ? a + 1 : r + 1, t = 2, o = r < a ? r : a, u = i; u <= e; ++u) for (n *= u; t <= o && n % t === 0; ) n /= t, ++t;
  return t <= o && (n /= Ar(t, o)), n;
}
ys.signature = "number, number";
var wl = Math.PI, Nl = 2 * Math.PI, Al = Math.E, Cl = 1.618033988749895, El = "number", Da = "number, number";
function Ds(e) {
  return !e;
}
Ds.signature = El;
function bs(e, r) {
  return !!(e || r);
}
bs.signature = Da;
function xs(e, r) {
  return !!e != !!r;
}
xs.signature = Da;
function ws(e, r) {
  return !!(e && r);
}
ws.signature = Da;
function ba(e) {
  var r;
  if (xe(e)) return e <= 0 ? Number.isFinite(e) ? 1 / 0 : NaN : e > 171 ? 1 / 0 : Ar(1, e - 1);
  if (e < 0.5) return Math.PI / (Math.sin(Math.PI * e) * ba(1 - e));
  if (e >= 171.35) return 1 / 0;
  if (e > 85) {
    var a = e * e, n = a * e, i = n * e, t = i * e;
    return Math.sqrt(2 * Math.PI / e) * Math.pow(e / Math.E, e) * (1 + 1 / (12 * e) + 1 / (288 * a) - 139 / (51840 * n) - 571 / (2488320 * i) + 163879 / (209018880 * t) + 5246819 / (75246796800 * t * e));
  }
  --e, r = Jn[0];
  for (var o = 1; o < Jn.length; ++o) r += Jn[o] / (e + o);
  var u = e + Fl + 0.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(u, e + 0.5) * Math.exp(-u) * r;
}
ba.signature = "number";
var Fl = 4.7421875, Jn = [0.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -0.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20, 1580887032249125e-19, -21026444172410488e-20, 21743961811521265e-20, -1643181065367639e-19, 8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22], Bl = 0.9189385332046728, Sl = 5, Tl = 7, Ha = [1.000000000190015, 76.18009172947146, -86.50532032941678, 24.01409824083091, -1.231739572450155, 0.001208650973866179, -5395239384953e-18];
function xa(e) {
  if (e < 0) return NaN;
  if (e === 0) return 1 / 0;
  if (!Number.isFinite(e)) return e;
  if (e < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * e)) - xa(1 - e);
  e = e - 1;
  for (var r = e + Sl + 0.5, a = Ha[0], n = Tl - 1; n >= 1; n--) a += Ha[n] / (e + n);
  return Bl + (e + 0.5) * Math.log(r) - r + Math.log(a);
}
xa.signature = "number";
var Oe = "number", Ml = "number, number";
function Ns(e) {
  return Math.acos(e);
}
Ns.signature = Oe;
function As(e) {
  return ml(e);
}
As.signature = Oe;
function Cs(e) {
  return Math.atan(1 / e);
}
Cs.signature = Oe;
function Es(e) {
  return Number.isFinite(e) ? (Math.log((e + 1) / e) + Math.log(e / (e - 1))) / 2 : 0;
}
Es.signature = Oe;
function Fs(e) {
  return Math.asin(1 / e);
}
Fs.signature = Oe;
function Bs(e) {
  var r = 1 / e;
  return Math.log(r + Math.sqrt(r * r + 1));
}
Bs.signature = Oe;
function Ss(e) {
  return Math.acos(1 / e);
}
Ss.signature = Oe;
function Ts(e) {
  var r = 1 / e, a = Math.sqrt(r * r - 1);
  return Math.log(a + r);
}
Ts.signature = Oe;
function Ms(e) {
  return Math.asin(e);
}
Ms.signature = Oe;
function Os(e) {
  return pl(e);
}
Os.signature = Oe;
function $s(e) {
  return Math.atan(e);
}
$s.signature = Oe;
function ks(e, r) {
  return Math.atan2(e, r);
}
ks.signature = Ml;
function qs(e) {
  return dl(e);
}
qs.signature = Oe;
function Ps(e) {
  return Math.cos(e);
}
Ps.signature = Oe;
function Is(e) {
  return hl(e);
}
Is.signature = Oe;
function _s(e) {
  return 1 / Math.tan(e);
}
_s.signature = Oe;
function Rs(e) {
  var r = Math.exp(2 * e);
  return (r + 1) / (r - 1);
}
Rs.signature = Oe;
function js(e) {
  return 1 / Math.sin(e);
}
js.signature = Oe;
function Ls(e) {
  return e === 0 ? Number.POSITIVE_INFINITY : Math.abs(2 / (Math.exp(e) - Math.exp(-e))) * _r(e);
}
Ls.signature = Oe;
function zs(e) {
  return 1 / Math.cos(e);
}
zs.signature = Oe;
function Us(e) {
  return 2 / (Math.exp(e) + Math.exp(-e));
}
Us.signature = Oe;
function Ws(e) {
  return Math.sin(e);
}
Ws.signature = Oe;
function Hs(e) {
  return vl(e);
}
Hs.signature = Oe;
function Zs(e) {
  return Math.tan(e);
}
Zs.signature = Oe;
function Js(e) {
  return gl(e);
}
Js.signature = Oe;
var _t = "number";
function Vs(e) {
  return xe(e);
}
Vs.signature = _t;
function Xs(e) {
  return e < 0;
}
Xs.signature = _t;
function Gs(e) {
  return e > 0;
}
Gs.signature = _t;
function Qs(e) {
  return e === 0;
}
Qs.signature = _t;
function Ks(e) {
  return Number.isNaN(e);
}
Ks.signature = _t;
function R(e, r, a, n) {
  function i(t) {
    var o = rl(t, r.map(kl));
    return Ol(e, r, t), a(o);
  }
  return i.isFactory = true, i.fn = e, i.dependencies = r.slice().sort(), n && (i.meta = n), i;
}
function Ol(e, r, a) {
  var n = r.filter((t) => !$l(t)).every((t) => a[t] !== void 0);
  if (!n) {
    var i = r.filter((t) => a[t] === void 0);
    throw new Error('Cannot create function "'.concat(e, '", ') + "some dependencies are missing: ".concat(i.map((t) => '"'.concat(t, '"')).join(", "), "."));
  }
}
function $l(e) {
  return e && e[0] === "?";
}
function kl(e) {
  return e && e[0] === "?" ? e.slice(1) : e;
}
function wa() {
  throw new Error('No "bignumber" implementation available');
}
function Ys() {
  throw new Error('No "fraction" implementation available');
}
function eu() {
  throw new Error('No "matrix" implementation available');
}
function ql() {
  throw new Error('No "index" implementation available');
}
function ru() {
  throw new Error('No "matrix" implementation available');
}
function Za() {
  return true;
}
function sr() {
  return false;
}
function it() {
}
const Ja = "Argument is not a typed-function.";
function tu() {
  function e(D) {
    return typeof D == "object" && D !== null && D.constructor === Object;
  }
  const r = [{ name: "number", test: function(D) {
    return typeof D == "number";
  } }, { name: "string", test: function(D) {
    return typeof D == "string";
  } }, { name: "boolean", test: function(D) {
    return typeof D == "boolean";
  } }, { name: "Function", test: function(D) {
    return typeof D == "function";
  } }, { name: "Array", test: Array.isArray }, { name: "Date", test: function(D) {
    return D instanceof Date;
  } }, { name: "RegExp", test: function(D) {
    return D instanceof RegExp;
  } }, { name: "Object", test: e }, { name: "null", test: function(D) {
    return D === null;
  } }, { name: "undefined", test: function(D) {
    return D === void 0;
  } }], a = { name: "any", test: Za, isAny: true };
  let n, i, t = 0, o = { createCount: 0 };
  function u(D) {
    const B = n.get(D);
    if (B) return B;
    let O = 'Unknown type "' + D + '"';
    const j = D.toLowerCase();
    let U;
    for (U of i) if (U.toLowerCase() === j) {
      O += '. Did you mean "' + U + '" ?';
      break;
    }
    throw new TypeError(O);
  }
  function c(D) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "any";
    const O = B ? u(B).index : i.length, j = [];
    for (let z = 0; z < D.length; ++z) {
      if (!D[z] || typeof D[z].name != "string" || typeof D[z].test != "function") throw new TypeError("Object with properties {name: string, test: function} expected");
      const ne = D[z].name;
      if (n.has(ne)) throw new TypeError('Duplicate type name "' + ne + '"');
      j.push(ne), n.set(ne, { name: ne, test: D[z].test, isAny: D[z].isAny, index: O + z, conversionsTo: [] });
    }
    const U = i.slice(O);
    i = i.slice(0, O).concat(j).concat(U);
    for (let z = O + j.length; z < i.length; ++z) n.get(i[z]).index = z;
  }
  function s() {
    n = /* @__PURE__ */ new Map(), i = [], t = 0, c([a], false);
  }
  s(), c(r);
  function l() {
    let D;
    for (D of i) n.get(D).conversionsTo = [];
    t = 0;
  }
  function m(D) {
    const B = i.filter((O) => {
      const j = n.get(O);
      return !j.isAny && j.test(D);
    });
    return B.length ? B : ["any"];
  }
  function p(D) {
    return D && typeof D == "function" && "_typedFunctionData" in D;
  }
  function h(D, B, O) {
    if (!p(D)) throw new TypeError(Ja);
    const j = O && O.exact, U = Array.isArray(B) ? B.join(",") : B, z = x(U), ne = E(z);
    if (!j || ne in D.signatures) {
      const Ee = D._typedFunctionData.signatureMap.get(ne);
      if (Ee) return Ee;
    }
    const Q = z.length;
    let ae;
    if (j) {
      ae = [];
      let Ee;
      for (Ee in D.signatures) ae.push(D._typedFunctionData.signatureMap.get(Ee));
    } else ae = D._typedFunctionData.signatures;
    for (let Ee = 0; Ee < Q; ++Ee) {
      const Te = z[Ee], $e = [];
      let we;
      for (we of ae) {
        const je = $(we.params, Ee);
        if (!(!je || Te.restParam && !je.restParam)) {
          if (!je.hasAny) {
            const f = d(je);
            if (Te.types.some((b) => !f.has(b.name))) continue;
          }
          $e.push(we);
        }
      }
      if (ae = $e, ae.length === 0) break;
    }
    let X;
    for (X of ae) if (X.params.length <= Q) return X;
    throw new TypeError("Signature not found (signature: " + (D.name || "unnamed") + "(" + E(z, ", ") + "))");
  }
  function y(D, B, O) {
    return h(D, B, O).implementation;
  }
  function A(D, B) {
    const O = u(B);
    if (O.test(D)) return D;
    const j = O.conversionsTo;
    if (j.length === 0) throw new Error("There are no conversions to " + B + " defined.");
    for (let U = 0; U < j.length; U++) if (u(j[U].from).test(D)) return j[U].convert(D);
    throw new Error("Cannot convert " + D + " to " + B);
  }
  function E(D) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ",";
    return D.map((O) => O.name).join(B);
  }
  function C(D) {
    const B = D.indexOf("...") === 0, j = (B ? D.length > 3 ? D.slice(3) : "any" : D).split("|").map((Q) => u(Q.trim()));
    let U = false, z = B ? "..." : "";
    return { types: j.map(function(Q) {
      return U = Q.isAny || U, z += Q.name + "|", { name: Q.name, typeIndex: Q.index, test: Q.test, isAny: Q.isAny, conversion: null, conversionIndex: -1 };
    }), name: z.slice(0, -1), hasAny: U, hasConversion: false, restParam: B };
  }
  function N(D) {
    const B = D.types.map((ne) => ne.name), O = S(B);
    let j = D.hasAny, U = D.name;
    const z = O.map(function(ne) {
      const Q = u(ne.from);
      return j = Q.isAny || j, U += "|" + ne.from, { name: ne.from, typeIndex: Q.index, test: Q.test, isAny: Q.isAny, conversion: ne, conversionIndex: ne.index };
    });
    return { types: D.types.concat(z), name: U, hasAny: j, hasConversion: z.length > 0, restParam: D.restParam };
  }
  function d(D) {
    return D.typeSet || (D.typeSet = /* @__PURE__ */ new Set(), D.types.forEach((B) => D.typeSet.add(B.name))), D.typeSet;
  }
  function x(D) {
    const B = [];
    if (typeof D != "string") throw new TypeError("Signatures must be strings");
    const O = D.trim();
    if (O === "") return B;
    const j = O.split(",");
    for (let U = 0; U < j.length; ++U) {
      const z = C(j[U].trim());
      if (z.restParam && U !== j.length - 1) throw new SyntaxError('Unexpected rest parameter "' + j[U] + '": only allowed for the last parameter');
      if (z.types.length === 0) return null;
      B.push(z);
    }
    return B;
  }
  function g(D) {
    const B = M(D);
    return B ? B.restParam : false;
  }
  function w(D) {
    if (!D || D.types.length === 0) return Za;
    if (D.types.length === 1) return u(D.types[0].name).test;
    if (D.types.length === 2) {
      const B = u(D.types[0].name).test, O = u(D.types[1].name).test;
      return function(U) {
        return B(U) || O(U);
      };
    } else {
      const B = D.types.map(function(O) {
        return u(O.name).test;
      });
      return function(j) {
        for (let U = 0; U < B.length; U++) if (B[U](j)) return true;
        return false;
      };
    }
  }
  function F(D) {
    let B, O, j;
    if (g(D)) {
      B = I(D).map(w);
      const U = B.length, z = w(M(D)), ne = function(Q) {
        for (let ae = U; ae < Q.length; ae++) if (!z(Q[ae])) return false;
        return true;
      };
      return function(ae) {
        for (let X = 0; X < B.length; X++) if (!B[X](ae[X])) return false;
        return ne(ae) && ae.length >= U + 1;
      };
    } else return D.length === 0 ? function(z) {
      return z.length === 0;
    } : D.length === 1 ? (O = w(D[0]), function(z) {
      return O(z[0]) && z.length === 1;
    }) : D.length === 2 ? (O = w(D[0]), j = w(D[1]), function(z) {
      return O(z[0]) && j(z[1]) && z.length === 2;
    }) : (B = D.map(w), function(z) {
      for (let ne = 0; ne < B.length; ne++) if (!B[ne](z[ne])) return false;
      return z.length === B.length;
    });
  }
  function $(D, B) {
    return B < D.length ? D[B] : g(D) ? M(D) : null;
  }
  function Z(D, B) {
    const O = $(D, B);
    return O ? d(O) : /* @__PURE__ */ new Set();
  }
  function _(D) {
    return D.conversion === null || D.conversion === void 0;
  }
  function q(D, B) {
    const O = /* @__PURE__ */ new Set();
    return D.forEach((j) => {
      const U = Z(j.params, B);
      let z;
      for (z of U) O.add(z);
    }), O.has("any") ? ["any"] : Array.from(O);
  }
  function J(D, B, O) {
    let j, U;
    const z = D || "unnamed";
    let ne = O, Q;
    for (Q = 0; Q < B.length; Q++) {
      const Te = [];
      if (ne.forEach(($e) => {
        const we = $($e.params, Q), je = w(we);
        (Q < $e.params.length || g($e.params)) && je(B[Q]) && Te.push($e);
      }), Te.length === 0) {
        if (U = q(ne, Q), U.length > 0) {
          const $e = m(B[Q]);
          return j = new TypeError("Unexpected type of argument in function " + z + " (expected: " + U.join(" or ") + ", actual: " + $e.join(" | ") + ", index: " + Q + ")"), j.data = { category: "wrongType", fn: z, index: Q, actual: $e, expected: U }, j;
        }
      } else ne = Te;
    }
    const ae = ne.map(function(Te) {
      return g(Te.params) ? 1 / 0 : Te.params.length;
    });
    if (B.length < Math.min.apply(null, ae)) return U = q(ne, Q), j = new TypeError("Too few arguments in function " + z + " (expected: " + U.join(" or ") + ", index: " + B.length + ")"), j.data = { category: "tooFewArgs", fn: z, index: B.length, expected: U }, j;
    const X = Math.max.apply(null, ae);
    if (B.length > X) return j = new TypeError("Too many arguments in function " + z + " (expected: " + X + ", actual: " + B.length + ")"), j.data = { category: "tooManyArgs", fn: z, index: B.length, expectedLength: X }, j;
    const Ee = [];
    for (let Te = 0; Te < B.length; ++Te) Ee.push(m(B[Te]).join("|"));
    return j = new TypeError('Arguments of type "' + Ee.join(", ") + '" do not match any of the defined signatures of function ' + z + "."), j.data = { category: "mismatch", actual: Ee }, j;
  }
  function P(D) {
    let B = i.length + 1;
    for (let O = 0; O < D.types.length; O++) _(D.types[O]) && (B = Math.min(B, D.types[O].typeIndex));
    return B;
  }
  function G(D) {
    let B = t + 1;
    for (let O = 0; O < D.types.length; O++) _(D.types[O]) || (B = Math.min(B, D.types[O].conversionIndex));
    return B;
  }
  function ue(D, B) {
    if (D.hasAny) {
      if (!B.hasAny) return 1;
    } else if (B.hasAny) return -1;
    if (D.restParam) {
      if (!B.restParam) return 1;
    } else if (B.restParam) return -1;
    if (D.hasConversion) {
      if (!B.hasConversion) return 1;
    } else if (B.hasConversion) return -1;
    const O = P(D) - P(B);
    if (O < 0) return -1;
    if (O > 0) return 1;
    const j = G(D) - G(B);
    return j < 0 ? -1 : j > 0 ? 1 : 0;
  }
  function v(D, B) {
    const O = D.params, j = B.params, U = M(O), z = M(j), ne = g(O), Q = g(j);
    if (ne && U.hasAny) {
      if (!Q || !z.hasAny) return 1;
    } else if (Q && z.hasAny) return -1;
    let ae = 0, X = 0, Ee;
    for (Ee of O) Ee.hasAny && ++ae, Ee.hasConversion && ++X;
    let Te = 0, $e = 0;
    for (Ee of j) Ee.hasAny && ++Te, Ee.hasConversion && ++$e;
    if (ae !== Te) return ae - Te;
    if (ne && U.hasConversion) {
      if (!Q || !z.hasConversion) return 1;
    } else if (Q && z.hasConversion) return -1;
    if (X !== $e) return X - $e;
    if (ne) {
      if (!Q) return 1;
    } else if (Q) return -1;
    const we = (O.length - j.length) * (ne ? -1 : 1);
    if (we !== 0) return we;
    const je = [];
    let f = 0;
    for (let k = 0; k < O.length; ++k) {
      const V = ue(O[k], j[k]);
      je.push(V), f += V;
    }
    if (f !== 0) return f;
    let b;
    for (b of je) if (b !== 0) return b;
    return 0;
  }
  function S(D) {
    if (D.length === 0) return [];
    const B = D.map(u);
    D.length > 1 && B.sort((U, z) => U.index - z.index);
    let O = B[0].conversionsTo;
    if (D.length === 1) return O;
    O = O.concat([]);
    const j = new Set(D);
    for (let U = 1; U < B.length; ++U) {
      let z;
      for (z of B[U].conversionsTo) j.has(z.from) || (O.push(z), j.add(z.from));
    }
    return O;
  }
  function Y(D, B) {
    let O = B;
    if (D.some((U) => U.hasConversion)) {
      const U = g(D), z = D.map(ee);
      O = function() {
        const Q = [], ae = U ? arguments.length - 1 : arguments.length;
        for (let X = 0; X < ae; X++) Q[X] = z[X](arguments[X]);
        return U && (Q[ae] = arguments[ae].map(z[ae])), B.apply(this, Q);
      };
    }
    let j = O;
    if (g(D)) {
      const U = D.length - 1;
      j = function() {
        return O.apply(this, L(arguments, 0, U).concat([L(arguments, U)]));
      };
    }
    return j;
  }
  function ee(D) {
    let B, O, j, U;
    const z = [], ne = [];
    switch (D.types.forEach(function(Q) {
      Q.conversion && (z.push(u(Q.conversion.from).test), ne.push(Q.conversion.convert));
    }), ne.length) {
      case 0:
        return function(ae) {
          return ae;
        };
      case 1:
        return B = z[0], j = ne[0], function(ae) {
          return B(ae) ? j(ae) : ae;
        };
      case 2:
        return B = z[0], O = z[1], j = ne[0], U = ne[1], function(ae) {
          return B(ae) ? j(ae) : O(ae) ? U(ae) : ae;
        };
      default:
        return function(ae) {
          for (let X = 0; X < ne.length; X++) if (z[X](ae)) return ne[X](ae);
          return ae;
        };
    }
  }
  function oe(D) {
    function B(O, j, U) {
      if (j < O.length) {
        const z = O[j];
        let ne = [];
        if (z.restParam) {
          const Q = z.types.filter(_);
          Q.length < z.types.length && ne.push({ types: Q, name: "..." + Q.map((ae) => ae.name).join("|"), hasAny: Q.some((ae) => ae.isAny), hasConversion: false, restParam: true }), ne.push(z);
        } else ne = z.types.map(function(Q) {
          return { types: [Q], name: Q.name, hasAny: Q.isAny, hasConversion: Q.conversion, restParam: false };
        });
        return re(ne, function(Q) {
          return B(O, j + 1, U.concat([Q]));
        });
      } else return [U];
    }
    return B(D, 0, []);
  }
  function de(D, B) {
    const O = Math.max(D.length, B.length);
    for (let Q = 0; Q < O; Q++) {
      const ae = Z(D, Q), X = Z(B, Q);
      let Ee = false, Te;
      for (Te of X) if (ae.has(Te)) {
        Ee = true;
        break;
      }
      if (!Ee) return false;
    }
    const j = D.length, U = B.length, z = g(D), ne = g(B);
    return z ? ne ? j === U : U >= j : ne ? j >= U : j === U;
  }
  function te(D) {
    return D.map((B) => _e(B) ? Ce(B.referToSelf.callback) : Ie(B) ? K(B.referTo.references, B.referTo.callback) : B);
  }
  function W(D, B, O) {
    const j = [];
    let U;
    for (U of D) {
      let z = O[U];
      if (typeof z != "number") throw new TypeError('No definition for referenced signature "' + U + '"');
      if (z = B[z], typeof z != "function") return false;
      j.push(z);
    }
    return j;
  }
  function he(D, B, O) {
    const j = te(D), U = new Array(j.length).fill(false);
    let z = true;
    for (; z; ) {
      z = false;
      let ne = true;
      for (let Q = 0; Q < j.length; ++Q) {
        if (U[Q]) continue;
        const ae = j[Q];
        if (_e(ae)) j[Q] = ae.referToSelf.callback(O), j[Q].referToSelf = ae.referToSelf, U[Q] = true, ne = false;
        else if (Ie(ae)) {
          const X = W(ae.referTo.references, j, B);
          X ? (j[Q] = ae.referTo.callback.apply(this, X), j[Q].referTo = ae.referTo, U[Q] = true, ne = false) : z = true;
        }
      }
      if (ne && z) throw new SyntaxError("Circular reference detected in resolving typed.referTo");
    }
    return j;
  }
  function ge(D) {
    const B = /\bthis(\(|\.signatures\b)/;
    Object.keys(D).forEach((O) => {
      const j = D[O];
      if (B.test(j.toString())) throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.");
    });
  }
  function ve(D, B) {
    if (o.createCount++, Object.keys(B).length === 0) throw new SyntaxError("No signatures provided");
    o.warnAgainstDeprecatedThis && ge(B);
    const O = [], j = [], U = {}, z = [];
    let ne;
    for (ne in B) {
      if (!Object.prototype.hasOwnProperty.call(B, ne)) continue;
      const Be = x(ne);
      if (!Be) continue;
      O.forEach(function(St) {
        if (de(St, Be)) throw new TypeError('Conflicting signatures "' + E(St) + '" and "' + E(Be) + '".');
      }), O.push(Be);
      const Ye = j.length;
      j.push(B[ne]);
      const Oc = Be.map(N);
      let Jt;
      for (Jt of oe(Oc)) {
        const St = E(Jt);
        z.push({ params: Jt, name: St, fn: Ye }), Jt.every(($c) => !$c.hasConversion) && (U[St] = Ye);
      }
    }
    z.sort(v);
    const Q = he(j, U, Bt);
    let ae;
    for (ae in U) Object.prototype.hasOwnProperty.call(U, ae) && (U[ae] = Q[U[ae]]);
    const X = [], Ee = /* @__PURE__ */ new Map();
    for (ae of z) Ee.has(ae.name) || (ae.fn = Q[ae.fn], X.push(ae), Ee.set(ae.name, ae));
    const Te = X[0] && X[0].params.length <= 2 && !g(X[0].params), $e = X[1] && X[1].params.length <= 2 && !g(X[1].params), we = X[2] && X[2].params.length <= 2 && !g(X[2].params), je = X[3] && X[3].params.length <= 2 && !g(X[3].params), f = X[4] && X[4].params.length <= 2 && !g(X[4].params), b = X[5] && X[5].params.length <= 2 && !g(X[5].params), k = Te && $e && we && je && f && b;
    for (let Be = 0; Be < X.length; ++Be) X[Be].test = F(X[Be].params);
    const V = Te ? w(X[0].params[0]) : sr, fe = $e ? w(X[1].params[0]) : sr, De = we ? w(X[2].params[0]) : sr, Qe = je ? w(X[3].params[0]) : sr, nt = f ? w(X[4].params[0]) : sr, Hn = b ? w(X[5].params[0]) : sr, cc = Te ? w(X[0].params[1]) : sr, lc = $e ? w(X[1].params[1]) : sr, fc = we ? w(X[2].params[1]) : sr, mc = je ? w(X[3].params[1]) : sr, pc = f ? w(X[4].params[1]) : sr, dc = b ? w(X[5].params[1]) : sr;
    for (let Be = 0; Be < X.length; ++Be) X[Be].implementation = Y(X[Be].params, X[Be].fn);
    const hc = Te ? X[0].implementation : it, vc = $e ? X[1].implementation : it, gc = we ? X[2].implementation : it, yc = je ? X[3].implementation : it, Dc = f ? X[4].implementation : it, bc = b ? X[5].implementation : it, xc = Te ? X[0].params.length : -1, wc = $e ? X[1].params.length : -1, Nc = we ? X[2].params.length : -1, Ac = je ? X[3].params.length : -1, Cc = f ? X[4].params.length : -1, Ec = b ? X[5].params.length : -1, Fc = k ? 6 : 0, Bc = X.length, Sc = X.map((Be) => Be.test), Tc = X.map((Be) => Be.implementation), Mc = function() {
      for (let Ye = Fc; Ye < Bc; Ye++) if (Sc[Ye](arguments)) return Tc[Ye].apply(this, arguments);
      return o.onMismatch(D, arguments, X);
    };
    function Bt(Be, Ye) {
      return arguments.length === xc && V(Be) && cc(Ye) ? hc.apply(this, arguments) : arguments.length === wc && fe(Be) && lc(Ye) ? vc.apply(this, arguments) : arguments.length === Nc && De(Be) && fc(Ye) ? gc.apply(this, arguments) : arguments.length === Ac && Qe(Be) && mc(Ye) ? yc.apply(this, arguments) : arguments.length === Cc && nt(Be) && pc(Ye) ? Dc.apply(this, arguments) : arguments.length === Ec && Hn(Be) && dc(Ye) ? bc.apply(this, arguments) : Mc.apply(this, arguments);
    }
    try {
      Object.defineProperty(Bt, "name", { value: D });
    } catch {
    }
    return Bt.signatures = U, Bt._typedFunctionData = { signatures: X, signatureMap: Ee }, Bt;
  }
  function ke(D, B, O) {
    throw J(D, B, O);
  }
  function I(D) {
    return L(D, 0, D.length - 1);
  }
  function M(D) {
    return D[D.length - 1];
  }
  function L(D, B, O) {
    return Array.prototype.slice.call(D, B, O);
  }
  function ie(D, B) {
    for (let O = 0; O < D.length; O++) if (B(D[O])) return D[O];
  }
  function re(D, B) {
    return Array.prototype.concat.apply([], D.map(B));
  }
  function ce() {
    const D = I(arguments).map((O) => E(x(O))), B = M(arguments);
    if (typeof B != "function") throw new TypeError("Callback function expected as last argument");
    return K(D, B);
  }
  function K(D, B) {
    return { referTo: { references: D, callback: B } };
  }
  function Ce(D) {
    if (typeof D != "function") throw new TypeError("Callback function expected as first argument");
    return { referToSelf: { callback: D } };
  }
  function Ie(D) {
    return D && typeof D.referTo == "object" && Array.isArray(D.referTo.references) && typeof D.referTo.callback == "function";
  }
  function _e(D) {
    return D && typeof D.referToSelf == "object" && typeof D.referToSelf.callback == "function";
  }
  function Je(D, B) {
    if (!D) return B;
    if (B && B !== D) {
      const O = new Error("Function names do not match (expected: " + D + ", actual: " + B + ")");
      throw O.data = { actual: B, expected: D }, O;
    }
    return D;
  }
  function Ve(D) {
    let B;
    for (const O in D) Object.prototype.hasOwnProperty.call(D, O) && (p(D[O]) || typeof D[O].signature == "string") && (B = Je(B, D[O].name));
    return B;
  }
  function ir(D, B) {
    let O;
    for (O in B) if (Object.prototype.hasOwnProperty.call(B, O)) {
      if (O in D && B[O] !== D[O]) {
        const j = new Error('Signature "' + O + '" is defined twice');
        throw j.data = { signature: O, sourceFunction: B[O], destFunction: D[O] }, j;
      }
      D[O] = B[O];
    }
  }
  const qr = o;
  o = function(D) {
    const B = typeof D == "string", O = B ? 1 : 0;
    let j = B ? D : "";
    const U = {};
    for (let z = O; z < arguments.length; ++z) {
      const ne = arguments[z];
      let Q = {}, ae;
      if (typeof ne == "function" ? (ae = ne.name, typeof ne.signature == "string" ? Q[ne.signature] = ne : p(ne) && (Q = ne.signatures)) : e(ne) && (Q = ne, B || (ae = Ve(ne))), Object.keys(Q).length === 0) {
        const X = new TypeError("Argument to 'typed' at index " + z + " is not a (typed) function, nor an object with signatures as keys and functions as values.");
        throw X.data = { index: z, argument: ne }, X;
      }
      B || (j = Je(j, ae)), ir(U, Q);
    }
    return ve(j || "", U);
  }, o.create = tu, o.createCount = qr.createCount, o.onMismatch = ke, o.throwMismatchError = ke, o.createError = J, o.clear = s, o.clearConversions = l, o.addTypes = c, o._findType = u, o.referTo = ce, o.referToSelf = Ce, o.convert = A, o.findSignature = h, o.find = y, o.isTypedFunction = p, o.warnAgainstDeprecatedThis = true, o.addType = function(D, B) {
    let O = "any";
    B !== false && n.has("Object") && (O = "Object"), o.addTypes([D], O);
  };
  function Pr(D) {
    if (!D || typeof D.from != "string" || typeof D.to != "string" || typeof D.convert != "function") throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
    if (D.to === D.from) throw new SyntaxError('Illegal to define conversion from "' + D.from + '" to itself.');
  }
  return o.addConversion = function(D) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { override: false };
    Pr(D);
    const O = u(D.to), j = O.conversionsTo.find((U) => U.from === D.from);
    if (j) if (B && B.override) o.removeConversion({ from: j.from, to: D.to, convert: j.convert });
    else throw new Error('There is already a conversion from "' + D.from + '" to "' + O.name + '"');
    O.conversionsTo.push({ from: D.from, convert: D.convert, index: t++ });
  }, o.addConversions = function(D, B) {
    D.forEach((O) => o.addConversion(O, B));
  }, o.removeConversion = function(D) {
    Pr(D);
    const B = u(D.to), O = ie(B.conversionsTo, (U) => U.from === D.from);
    if (!O) throw new Error("Attempt to remove nonexistent conversion from " + D.from + " to " + D.to);
    if (O.convert !== D.convert) throw new Error("Conversion to remove does not match existing conversion");
    const j = B.conversionsTo.indexOf(O);
    B.conversionsTo.splice(j, 1);
  }, o.resolve = function(D, B) {
    if (!p(D)) throw new TypeError(Ja);
    const O = D._typedFunctionData.signatures;
    for (let j = 0; j < O.length; ++j) if (O[j].test(B)) return O[j];
    return null;
  }, o;
}
const xn = tu();
var nu = function() {
  return nu = xn.create, xn;
}, Pl = ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], Il = R("typed", Pl, function(r) {
  var { BigNumber: a, Complex: n, DenseMatrix: i, Fraction: t } = r, o = nu();
  return o.clear(), o.addTypes([{ name: "number", test: Pe }, { name: "Complex", test: Sn }, { name: "BigNumber", test: He }, { name: "bigint", test: hn }, { name: "Fraction", test: da }, { name: "Unit", test: Io }, { name: "identifier", test: (u) => Qr && /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(u) }, { name: "string", test: Qr }, { name: "Chain", test: zo }, { name: "Array", test: _o }, { name: "Matrix", test: rr }, { name: "DenseMatrix", test: ea }, { name: "SparseMatrix", test: Mt }, { name: "Range", test: jc }, { name: "Index", test: Lc }, { name: "boolean", test: zc }, { name: "ResultSet", test: Uc }, { name: "Help", test: Ro }, { name: "function", test: jo }, { name: "Date", test: Wc }, { name: "RegExp", test: Hc }, { name: "null", test: Zc }, { name: "undefined", test: Jc }, { name: "AccessorNode", test: Fr }, { name: "ArrayNode", test: ur }, { name: "AssignmentNode", test: Vc }, { name: "BlockNode", test: Xc }, { name: "ConditionalNode", test: Gc }, { name: "ConstantNode", test: Ne }, { name: "FunctionNode", test: Lr }, { name: "FunctionAssignmentNode", test: It }, { name: "IndexNode", test: dt }, { name: "Node", test: Fe }, { name: "ObjectNode", test: Mn }, { name: "OperatorNode", test: qe }, { name: "ParenthesisNode", test: Br }, { name: "RangeNode", test: Qc }, { name: "RelationalNode", test: Kc }, { name: "SymbolNode", test: ze }, { name: "Map", test: Lo }, { name: "Object", test: Tn }]), o.addConversions([{ from: "number", to: "BigNumber", convert: function(c) {
    if (a || Vt(c), fl(c) > 15) throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + c + "). Use function bignumber(x) to convert to BigNumber.");
    return new a(c);
  } }, { from: "number", to: "Complex", convert: function(c) {
    return n || Xt(c), new n(c, 0);
  } }, { from: "BigNumber", to: "Complex", convert: function(c) {
    return n || Xt(c), new n(c.toNumber(), 0);
  } }, { from: "bigint", to: "number", convert: function(c) {
    if (c > Number.MAX_SAFE_INTEGER) throw new TypeError("Cannot implicitly convert bigint to number: value exceeds the max safe integer value (value: " + c + ")");
    return Number(c);
  } }, { from: "bigint", to: "BigNumber", convert: function(c) {
    return a || Vt(c), new a(c.toString());
  } }, { from: "bigint", to: "Fraction", convert: function(c) {
    return t || Gt(c), new t(c);
  } }, { from: "Fraction", to: "BigNumber", convert: function(c) {
    throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.");
  } }, { from: "Fraction", to: "Complex", convert: function(c) {
    return n || Xt(c), new n(c.valueOf(), 0);
  } }, { from: "number", to: "Fraction", convert: function(c) {
    t || Gt(c);
    var s = new t(c);
    if (s.valueOf() !== c) throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + c + "). Use function fraction(x) to convert to Fraction.");
    return s;
  } }, { from: "string", to: "number", convert: function(c) {
    var s = Number(c);
    if (isNaN(s)) throw new Error('Cannot convert "' + c + '" to a number');
    return s;
  } }, { from: "string", to: "BigNumber", convert: function(c) {
    a || Vt(c);
    try {
      return new a(c);
    } catch {
      throw new Error('Cannot convert "' + c + '" to BigNumber');
    }
  } }, { from: "string", to: "bigint", convert: function(c) {
    try {
      return BigInt(c);
    } catch {
      throw new Error('Cannot convert "' + c + '" to BigInt');
    }
  } }, { from: "string", to: "Fraction", convert: function(c) {
    t || Gt(c);
    try {
      return new t(c);
    } catch {
      throw new Error('Cannot convert "' + c + '" to Fraction');
    }
  } }, { from: "string", to: "Complex", convert: function(c) {
    n || Xt(c);
    try {
      return new n(c);
    } catch {
      throw new Error('Cannot convert "' + c + '" to Complex');
    }
  } }, { from: "boolean", to: "number", convert: function(c) {
    return +c;
  } }, { from: "boolean", to: "BigNumber", convert: function(c) {
    return a || Vt(c), new a(+c);
  } }, { from: "boolean", to: "bigint", convert: function(c) {
    return BigInt(+c);
  } }, { from: "boolean", to: "Fraction", convert: function(c) {
    return t || Gt(c), new t(+c);
  } }, { from: "boolean", to: "string", convert: function(c) {
    return String(c);
  } }, { from: "Array", to: "Matrix", convert: function(c) {
    return i || _l(), new i(c);
  } }, { from: "Matrix", to: "Array", convert: function(c) {
    return c.valueOf();
  } }]), o.onMismatch = (u, c, s) => {
    var l = o.createError(u, c, s);
    if (["wrongType", "mismatch"].includes(l.data.category) && c.length === 1 && ft(c[0]) && s.some((p) => !p.params.includes(","))) {
      var m = new TypeError("Function '".concat(u, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(u, ")'."));
      throw m.data = l.data, m;
    }
    throw l;
  }, o.onMismatch = (u, c, s) => {
    var l = o.createError(u, c, s);
    if (["wrongType", "mismatch"].includes(l.data.category) && c.length === 1 && ft(c[0]) && s.some((p) => !p.params.includes(","))) {
      var m = new TypeError("Function '".concat(u, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(u, ")'."));
      throw m.data = l.data, m;
    }
    throw l;
  }, o;
});
function Vt(e) {
  throw new Error("Cannot convert value ".concat(e, " into a BigNumber: no class 'BigNumber' provided"));
}
function Xt(e) {
  throw new Error("Cannot convert value ".concat(e, " into a Complex number: no class 'Complex' provided"));
}
function _l() {
  throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided");
}
function Gt(e) {
  throw new Error("Cannot convert value ".concat(e, " into a Fraction, no class 'Fraction' provided."));
}
var Rl = "ResultSet", jl = [], Ll = R(Rl, jl, () => {
  function e(r) {
    if (!(this instanceof e)) throw new SyntaxError("Constructor must be called with the new operator");
    this.entries = r || [];
  }
  return e.prototype.type = "ResultSet", e.prototype.isResultSet = true, e.prototype.valueOf = function() {
    return this.entries;
  }, e.prototype.toString = function() {
    return "[" + this.entries.map(String).join(", ") + "]";
  }, e.prototype.toJSON = function() {
    return { mathjs: "ResultSet", entries: this.entries };
  }, e.fromJSON = function(r) {
    return new e(r.entries);
  }, e;
}, { isClass: true }), zl = "Range", Ul = [], Wl = R(zl, Ul, () => {
  function e(r, a, n) {
    if (!(this instanceof e)) throw new SyntaxError("Constructor must be called with the new operator");
    var i = r != null, t = a != null, o = n != null;
    if (i) {
      if (He(r)) r = r.toNumber();
      else if (typeof r != "number" && !hn(r)) throw new TypeError("Parameter start must be a number or bigint");
    }
    if (t) {
      if (He(a)) a = a.toNumber();
      else if (typeof a != "number" && !hn(a)) throw new TypeError("Parameter end must be a number or bigint");
    }
    if (o) {
      if (He(n)) n = n.toNumber();
      else if (typeof n != "number" && !hn(n)) throw new TypeError("Parameter step must be a number or bigint");
    }
    if (this.start = i ? parseFloat(r) : 0, this.end = t ? parseFloat(a) : 0, this.step = o ? parseFloat(n) : 1, o && vr(this.step, 0)) throw new Error("Step must not be zero");
  }
  return e.prototype.type = "Range", e.prototype.isRange = true, e.parse = function(r) {
    if (typeof r != "string") return null;
    var a = r.split(":"), n = a.map(function(t) {
      return parseFloat(t);
    }), i = n.some(function(t) {
      return isNaN(t);
    });
    if (i) return null;
    switch (n.length) {
      case 2:
        return new e(n[0], n[1]);
      case 3:
        return new e(n[0], n[2], n[1]);
      default:
        return null;
    }
  }, e.prototype.clone = function() {
    return new e(this.start, this.end, this.step);
  }, e.prototype.size = function() {
    var r = 0, a = this.start, n = this.step, i = this.end, t = i - a;
    return _r(n) === _r(t) ? r = Math.ceil(t / n) : t === 0 && (r = 0), isNaN(r) && (r = 0), [r];
  }, e.prototype.min = function() {
    var r = this.size()[0];
    if (r > 0) return this.step > 0 ? this.start : this.start + (r - 1) * this.step;
  }, e.prototype.max = function() {
    var r = this.size()[0];
    if (r > 0) return this.step > 0 ? this.start + (r - 1) * this.step : this.start;
  }, e.prototype.forEach = function(r) {
    var a = this.start, n = this.step, i = this.end, t = 0;
    if (n > 0) for (; a < i; ) r(a, [t], this), a += n, t++;
    else if (n < 0) for (; a > i; ) r(a, [t], this), a += n, t++;
  }, e.prototype.map = function(r) {
    var a = [];
    return this.forEach(function(n, i, t) {
      a[i[0]] = r(n, i, t);
    }), a;
  }, e.prototype.toArray = function() {
    var r = [];
    return this.forEach(function(a, n) {
      r[n[0]] = a;
    }), r;
  }, e.prototype.valueOf = function() {
    return this.toArray();
  }, e.prototype.format = function(r) {
    var a = $t(this.start, r);
    return this.step !== 1 && (a += ":" + $t(this.step, r)), a += ":" + $t(this.end, r), a;
  }, e.prototype.toString = function() {
    return this.format();
  }, e.prototype.toJSON = function() {
    return { mathjs: "Range", start: this.start, end: this.end, step: this.step };
  }, e.fromJSON = function(r) {
    return new e(r.start, r.end, r.step);
  }, e;
}, { isClass: true });
function Vn(e, r, a) {
  var n = e.constructor, i = new n(2), t = "";
  if (a) {
    if (a < 1) throw new Error("size must be in greater than 0");
    if (!xe(a)) throw new Error("size must be an integer");
    if (e.greaterThan(i.pow(a - 1).sub(1)) || e.lessThan(i.pow(a - 1).mul(-1))) throw new Error("Value must be in range [-2^".concat(a - 1, ", 2^").concat(a - 1, "-1]"));
    if (!e.isInteger()) throw new Error("Value must be an integer");
    e.lessThan(0) && (e = e.add(i.pow(a))), t = "i".concat(a);
  }
  switch (r) {
    case 2:
      return "".concat(e.toBinary()).concat(t);
    case 8:
      return "".concat(e.toOctal()).concat(t);
    case 16:
      return "".concat(e.toHexadecimal()).concat(t);
    default:
      throw new Error("Base ".concat(r, " not supported "));
  }
}
function Hl(e, r) {
  if (typeof r == "function") return r(e);
  if (!e.isFinite()) return e.isNaN() ? "NaN" : e.gt(0) ? "Infinity" : "-Infinity";
  var { notation: a, precision: n, wordSize: i } = Uo(r);
  switch (a) {
    case "fixed":
      return Jl(e, n);
    case "exponential":
      return Va(e, n);
    case "engineering":
      return Zl(e, n);
    case "bin":
      return Vn(e, 2, i);
    case "oct":
      return Vn(e, 8, i);
    case "hex":
      return Vn(e, 16, i);
    case "auto": {
      var t = Xa(r == null ? void 0 : r.lowerExp, -3), o = Xa(r == null ? void 0 : r.upperExp, 5);
      if (e.isZero()) return "0";
      var u, c = e.toSignificantDigits(n), s = c.e;
      return s >= t && s < o ? u = c.toFixed() : u = Va(e, n), u.replace(/((\.\d*?)(0+))($|e)/, function() {
        var l = arguments[2], m = arguments[4];
        return l !== "." ? l + m : m;
      });
    }
    default:
      throw new Error('Unknown notation "' + a + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function Zl(e, r) {
  var a = e.e, n = a % 3 === 0 ? a : a < 0 ? a - 3 - a % 3 : a - a % 3, i = e.mul(Math.pow(10, -n)), t = i.toPrecision(r);
  if (t.includes("e")) {
    var o = e.constructor;
    t = new o(t).toFixed();
  }
  return t + "e" + (a >= 0 ? "+" : "") + n.toString();
}
function Va(e, r) {
  return r !== void 0 ? e.toExponential(r - 1) : e.toExponential();
}
function Jl(e, r) {
  return e.toFixed(r);
}
function Xa(e, r) {
  return Pe(e) ? e : He(e) ? e.toNumber() : r;
}
function Sr(e, r) {
  var a = Vl(e, r);
  return r && typeof r == "object" && "truncate" in r && a.length > r.truncate ? a.substring(0, r.truncate - 3) + "..." : a;
}
function Vl(e, r) {
  if (typeof e == "number") return $t(e, r);
  if (He(e)) return Hl(e, r);
  if (Xl(e)) return !r || r.fraction !== "decimal" ? "".concat(e.s * e.n, "/").concat(e.d) : e.toString();
  if (Array.isArray(e)) return au(e, r);
  if (Qr(e)) return st(e);
  if (typeof e == "function") return e.syntax ? String(e.syntax) : "function";
  if (e && typeof e == "object") {
    if (typeof e.format == "function") return e.format(r);
    if (e && e.toString(r) !== {}.toString()) return e.toString(r);
    var a = Object.keys(e).map((n) => st(n) + ": " + Sr(e[n], r));
    return "{" + a.join(", ") + "}";
  }
  return String(e);
}
function st(e) {
  for (var r = String(e), a = "", n = 0; n < r.length; ) {
    var i = r.charAt(n);
    a += i in Ga ? Ga[i] : i, n++;
  }
  return '"' + a + '"';
}
var Ga = { '"': '\\"', "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" };
function cr(e) {
  var r = String(e);
  return r = r.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), r;
}
function au(e, r) {
  if (Array.isArray(e)) {
    for (var a = "[", n = e.length, i = 0; i < n; i++) i !== 0 && (a += ", "), a += au(e[i], r);
    return a += "]", a;
  } else return Sr(e, r);
}
function Xl(e) {
  return e && typeof e == "object" && typeof e.s == "bigint" && typeof e.n == "bigint" && typeof e.d == "bigint" || false;
}
function iu(e, r) {
  if (!Qr(e)) throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + Ze(e) + ", index: 0)");
  if (!Qr(r)) throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + Ze(r) + ", index: 1)");
  return e === r ? 0 : e > r ? 1 : -1;
}
var Gl = "Help", Ql = ["evaluate"], Kl = R(Gl, Ql, (e) => {
  var { evaluate: r } = e;
  function a(n) {
    if (!(this instanceof a)) throw new SyntaxError("Constructor must be called with the new operator");
    if (!n) throw new Error('Argument "doc" missing');
    this.doc = n;
  }
  return a.prototype.type = "Help", a.prototype.isHelp = true, a.prototype.toString = function() {
    var n = this.doc || {}, i = `
`;
    if (n.name && (i += "Name: " + n.name + `

`), n.category && (i += "Category: " + n.category + `

`), n.description && (i += `Description:
    ` + n.description + `

`), n.syntax && (i += `Syntax:
    ` + n.syntax.join(`
    `) + `

`), n.examples) {
      i += `Examples:
`;
      for (var t = false, o = r("config()"), u = { config: (m) => (t = true, r("config(newConfig)", { newConfig: m })) }, c = 0; c < n.examples.length; c++) {
        var s = n.examples[c];
        i += "    " + s + `
`;
        var l = void 0;
        try {
          l = r(s, u);
        } catch (m) {
          l = m;
        }
        l !== void 0 && !Ro(l) && (i += "        " + Sr(l, { precision: 14 }) + `
`);
      }
      i += `
`, t && r("config(originalConfig)", { originalConfig: o });
    }
    return n.mayThrow && n.mayThrow.length && (i += "Throws: " + n.mayThrow.join(", ") + `

`), n.seealso && n.seealso.length && (i += "See also: " + n.seealso.join(", ") + `
`), i;
  }, a.prototype.toJSON = function() {
    var n = Dn(this.doc);
    return n.mathjs = "Help", n;
  }, a.fromJSON = function(n) {
    var i = {};
    return Object.keys(n).filter((t) => t !== "mathjs").forEach((t) => {
      i[t] = n[t];
    }), new a(i);
  }, a.prototype.valueOf = a.prototype.toString, a;
}, { isClass: true }), Yl = "Chain", ef = ["?on", "math", "typed"], rf = R(Yl, ef, (e) => {
  var { on: r, math: a, typed: n } = e;
  function i(s) {
    if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
    zo(s) ? this.value = s.value : this.value = s;
  }
  i.prototype.type = "Chain", i.prototype.isChain = true, i.prototype.done = function() {
    return this.value;
  }, i.prototype.valueOf = function() {
    return this.value;
  }, i.prototype.toString = function() {
    return Sr(this.value);
  }, i.prototype.toJSON = function() {
    return { mathjs: "Chain", value: this.value };
  }, i.fromJSON = function(s) {
    return new i(s.value);
  };
  function t(s, l) {
    typeof l == "function" && (i.prototype[s] = u(l));
  }
  function o(s, l) {
    el(i.prototype, s, function() {
      var p = l();
      if (typeof p == "function") return u(p);
    });
  }
  function u(s) {
    return function() {
      if (arguments.length === 0) return new i(s(this.value));
      for (var l = [this.value], m = 0; m < arguments.length; m++) l[m + 1] = arguments[m];
      if (n.isTypedFunction(s)) {
        var p = n.resolve(s, l);
        if (p.params.length === 1) throw new Error("chain function " + s.name + " cannot match rest parameter between chain value and additional arguments.");
        return new i(p.implementation.apply(s, l));
      }
      return new i(s.apply(s, l));
    };
  }
  i.createProxy = function(s, l) {
    if (typeof s == "string") t(s, l);
    else {
      var m = function(y) {
        ye(s, y) && c[y] === void 0 && o(y, () => s[y]);
      };
      for (var p in s) m(p);
    }
  };
  var c = { expression: true, docs: true, type: true, classes: true, json: true, error: true, isChain: true };
  return i.createProxy(a), r && r("import", function(s, l, m) {
    m || o(s, l);
  }), i;
}, { isClass: true }), Qa = { name: "e", category: "Constants", syntax: ["e"], description: "Euler's number, the base of the natural logarithm. Approximately equal to 2.71828", examples: ["e", "e ^ 2", "exp(2)", "log(e)"], seealso: ["exp"] }, tf = { name: "false", category: "Constants", syntax: ["false"], description: "Boolean value false", examples: ["false"], seealso: ["true"] }, nf = { name: "i", category: "Constants", syntax: ["i"], description: "Imaginary unit, defined as i*i=-1. A complex number is described as a + b*i, where a is the real part, and b is the imaginary part.", examples: ["i", "i * i", "sqrt(-1)"], seealso: [] }, af = { name: "Infinity", category: "Constants", syntax: ["Infinity"], description: "Infinity, a number which is larger than the maximum number that can be handled by a floating point number.", examples: ["Infinity", "1 / 0"], seealso: [] }, of = { name: "LN10", category: "Constants", syntax: ["LN10"], description: "Returns the natural logarithm of 10, approximately equal to 2.302", examples: ["LN10", "log(10)"], seealso: [] }, sf = { name: "LN2", category: "Constants", syntax: ["LN2"], description: "Returns the natural logarithm of 2, approximately equal to 0.693", examples: ["LN2", "log(2)"], seealso: [] }, uf = { name: "LOG10E", category: "Constants", syntax: ["LOG10E"], description: "Returns the base-10 logarithm of E, approximately equal to 0.434", examples: ["LOG10E", "log(e, 10)"], seealso: [] }, cf = { name: "LOG2E", category: "Constants", syntax: ["LOG2E"], description: "Returns the base-2 logarithm of E, approximately equal to 1.442", examples: ["LOG2E", "log(e, 2)"], seealso: [] }, lf = { name: "NaN", category: "Constants", syntax: ["NaN"], description: "Not a number", examples: ["NaN", "0 / 0"], seealso: [] }, ff = { name: "null", category: "Constants", syntax: ["null"], description: "Value null", examples: ["null"], seealso: ["true", "false"] }, mf = { name: "phi", category: "Constants", syntax: ["phi"], description: "Phi is the golden ratio. Two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities. Phi is defined as `(1 + sqrt(5)) / 2` and is approximately 1.618034...", examples: ["phi"], seealso: [] }, Ka = { name: "pi", category: "Constants", syntax: ["pi"], description: "The number pi is a mathematical constant that is the ratio of a circle's circumference to its diameter, and is approximately equal to 3.14159", examples: ["pi", "sin(pi/2)"], seealso: ["tau"] }, pf = { name: "SQRT1_2", category: "Constants", syntax: ["SQRT1_2"], description: "Returns the square root of 1/2, approximately equal to 0.707", examples: ["SQRT1_2", "sqrt(1/2)"], seealso: [] }, df = { name: "SQRT2", category: "Constants", syntax: ["SQRT2"], description: "Returns the square root of 2, approximately equal to 1.414", examples: ["SQRT2", "sqrt(2)"], seealso: [] }, hf = { name: "tau", category: "Constants", syntax: ["tau"], description: "Tau is the ratio constant of a circle's circumference to radius, equal to 2 * pi, approximately 6.2832.", examples: ["tau", "2 * pi"], seealso: ["pi"] }, vf = { name: "true", category: "Constants", syntax: ["true"], description: "Boolean value true", examples: ["true"], seealso: ["false"] }, gf = { name: "version", category: "Constants", syntax: ["version"], description: "A string with the version number of math.js", examples: ["version"], seealso: [] }, yf = { name: "bignumber", category: "Construction", syntax: ["bignumber(x)"], description: "Create a big number from a number or string.", examples: ["0.1 + 0.2", "bignumber(0.1) + bignumber(0.2)", 'bignumber("7.2")', 'bignumber("7.2e500")', "bignumber([0.1, 0.2, 0.3])"], seealso: ["boolean", "bigint", "complex", "fraction", "index", "matrix", "string", "unit"] }, Df = { name: "bigint", category: "Construction", syntax: ["bigint(x)"], description: "Create a bigint, an integer with an arbitrary number of digits, from a number or string.", examples: ["123123123123123123 # a large number will lose digits", 'bigint("123123123123123123")', 'bignumber(["1", "3", "5"])'], seealso: ["boolean", "bignumber", "number", "complex", "fraction", "index", "matrix", "string", "unit"] }, bf = { name: "boolean", category: "Construction", syntax: ["x", "boolean(x)"], description: "Convert a string or number into a boolean.", examples: ["boolean(0)", "boolean(1)", "boolean(3)", 'boolean("true")', 'boolean("false")', "boolean([1, 0, 1, 1])"], seealso: ["bignumber", "complex", "index", "matrix", "number", "string", "unit"] }, xf = { name: "complex", category: "Construction", syntax: ["complex()", "complex(re, im)", "complex(string)"], description: "Create a complex number.", examples: ["complex()", "complex(2, 3)", 'complex("7 - 2i")'], seealso: ["bignumber", "boolean", "index", "matrix", "number", "string", "unit"] }, wf = { name: "createUnit", category: "Construction", syntax: ["createUnit(definitions)", "createUnit(name, definition)"], description: "Create a user-defined unit and register it with the Unit type.", examples: ['createUnit("foo")', 'createUnit("knot", {definition: "0.514444444 m/s", aliases: ["knots", "kt", "kts"]})', 'createUnit("mph", "1 mile/hour")'], seealso: ["unit", "splitUnit"] }, Nf = { name: "fraction", category: "Construction", syntax: ["fraction(num)", "fraction(matrix)", "fraction(num,den)", "fraction({n: num, d: den})"], description: "Create a fraction from a number or from integer numerator and denominator.", examples: ["fraction(0.125)", "fraction(1, 3) + fraction(2, 5)", "fraction({n: 333, d: 53})", "fraction([sqrt(9), sqrt(10), sqrt(11)])"], seealso: ["bignumber", "boolean", "complex", "index", "matrix", "string", "unit"] }, Af = { name: "index", category: "Construction", syntax: ["[start]", "[start:end]", "[start:step:end]", "[start1, start 2, ...]", "[start1:end1, start2:end2, ...]", "[start1:step1:end1, start2:step2:end2, ...]"], description: "Create an index to get or replace a subset of a matrix", examples: ["A = [1, 2, 3; 4, 5, 6]", "A[1, :]", "A[1, 2] = 50", "A[1:2, 1:2] = 1", "B = [1, 2, 3]", "B[B>1 and B<3]"], seealso: ["bignumber", "boolean", "complex", "matrix", "number", "range", "string", "unit"] }, Cf = { name: "matrix", category: "Construction", syntax: ["[]", "[a1, b1, ...; a2, b2, ...]", "matrix()", 'matrix("dense")', "matrix([...])"], description: "Create a matrix.", examples: ["[]", "[1, 2, 3]", "[1, 2, 3; 4, 5, 6]", "matrix()", "matrix([3, 4])", 'matrix([3, 4; 5, 6], "sparse")', 'matrix([3, 4; 5, 6], "sparse", "number")'], seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "sparse"] }, Ef = { name: "number", category: "Construction", syntax: ["x", "number(x)", "number(unit, valuelessUnit)"], description: "Create a number or convert a string or boolean into a number.", examples: ["2", "2e3", "4.05", "number(2)", 'number("7.2")', "number(true)", "number([true, false, true, true])", 'number(unit("52cm"), "m")'], seealso: ["bignumber", "bigint", "boolean", "complex", "fraction", "index", "matrix", "string", "unit"] }, Ff = { name: "sparse", category: "Construction", syntax: ["sparse()", "sparse([a1, b1, ...; a1, b2, ...])", 'sparse([a1, b1, ...; a1, b2, ...], "number")'], description: "Create a sparse matrix.", examples: ["sparse()", "sparse([3, 4; 5, 6])", 'sparse([3, 0; 5, 0], "number")'], seealso: ["bignumber", "boolean", "complex", "index", "number", "string", "unit", "matrix"] }, Bf = { name: "splitUnit", category: "Construction", syntax: ["splitUnit(unit: Unit, parts: Unit[])"], description: "Split a unit in an array of units whose sum is equal to the original unit.", examples: ['splitUnit(1 m, ["feet", "inch"])'], seealso: ["unit", "createUnit"] }, Sf = { name: "string", category: "Construction", syntax: ['"text"', "string(x)"], description: "Create a string or convert a value to a string", examples: ['"Hello World!"', "string(4.2)", "string(3 + 2i)"], seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "unit"] }, Tf = { name: "unit", category: "Construction", syntax: ["value unit", "unit(value, unit)", "unit(string)"], description: "Create a unit.", examples: ["5.5 mm", "3 inch", 'unit(7.1, "kilogram")', 'unit("23 deg")'], seealso: ["bignumber", "boolean", "complex", "index", "matrix", "number", "string"] }, Mf = { name: "config", category: "Core", syntax: ["config()", "config(options)"], description: "Get configuration or change configuration.", examples: ["config()", "1/3 + 1/4", 'config({number: "Fraction"})', "1/3 + 1/4"], seealso: [] }, Of = { name: "import", category: "Core", syntax: ["import(functions)", "import(functions, options)"], description: "Import functions or constants from an object.", examples: ["import({myFn: f(x)=x^2, myConstant: 32 })", "myFn(2)", "myConstant"], seealso: [] }, $f = { name: "typed", category: "Core", syntax: ["typed(signatures)", "typed(name, signatures)"], description: "Create a typed function.", examples: ['double = typed({ "number": f(x)=x+x, "string": f(x)=concat(x,x) })', "double(2)", 'double("hello")'], seealso: [] }, kf = { name: "derivative", category: "Algebra", syntax: ["derivative(expr, variable)", "derivative(expr, variable, {simplify: boolean})"], description: "Takes the derivative of an expression expressed in parser Nodes. The derivative will be taken over the supplied variable in the second parameter. If there are multiple variables in the expression, it will return a partial derivative.", examples: ['derivative("2x^3", "x")', 'derivative("2x^3", "x", {simplify: false})', 'derivative("2x^2 + 3x + 4", "x")', 'derivative("sin(2x)", "x")', 'f = parse("x^2 + x")', 'x = parse("x")', "df = derivative(f, x)", "df.evaluate({x: 3})"], seealso: ["simplify", "parse", "evaluate"] }, qf = { name: "leafCount", category: "Algebra", syntax: ["leafCount(expr)"], description: "Computes the number of leaves in the parse tree of the given expression", examples: ['leafCount("e^(i*pi)-1")', 'leafCount(parse("{a: 22/7, b: 10^(1/2)}"))'], seealso: ["simplify"] }, Pf = { name: "lsolve", category: "Algebra", syntax: ["x=lsolve(L, b)"], description: "Finds one solution of the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.", examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"], seealso: ["lsolveAll", "lup", "lusolve", "usolve", "matrix", "sparse"] }, If = { name: "lsolveAll", category: "Algebra", syntax: ["x=lsolveAll(L, b)"], description: "Finds all solutions of the linear system L * x = b where L is an [n x n] lower triangular matrix and b is a [n] column vector.", examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lsolve(a, b)"], seealso: ["lsolve", "lup", "lusolve", "usolve", "matrix", "sparse"] }, _f = { name: "lup", category: "Algebra", syntax: ["lup(m)"], description: "Calculate the Matrix LU decomposition with partial pivoting. Matrix A is decomposed in three matrices (L, U, P) where P * A = L * U", examples: ["lup([[2, 1], [1, 4]])", "lup(matrix([[2, 1], [1, 4]]))", "lup(sparse([[2, 1], [1, 4]]))"], seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "slu", "qr"] }, Rf = { name: "lusolve", category: "Algebra", syntax: ["x=lusolve(A, b)", "x=lusolve(lu, b)"], description: "Solves the linear system A * x = b where A is an [n x n] matrix and b is a [n] column vector.", examples: ["a = [-2, 3; 2, 1]", "b = [11, 9]", "x = lusolve(a, b)"], seealso: ["lup", "slu", "lsolve", "usolve", "matrix", "sparse"] }, jf = { name: "polynomialRoot", category: "Algebra", syntax: ["x=polynomialRoot(-6, 3)", "x=polynomialRoot(4, -4, 1)", "x=polynomialRoot(-8, 12, -6, 1)"], description: "Finds the roots of a univariate polynomial given by its coefficients starting from constant, linear, and so on, increasing in degree.", examples: ["a = polynomialRoot(-6, 11, -6, 1)"], seealso: ["cbrt", "sqrt"] }, Lf = { name: "qr", category: "Algebra", syntax: ["qr(A)"], description: "Calculates the Matrix QR decomposition. Matrix `A` is decomposed in two matrices (`Q`, `R`) where `Q` is an orthogonal matrix and `R` is an upper triangular matrix.", examples: ["qr([[1, -1,  4], [1,  4, -2], [1,  4,  2], [1,  -1, 0]])"], seealso: ["lup", "slu", "matrix"] }, zf = { name: "rationalize", category: "Algebra", syntax: ["rationalize(expr)", "rationalize(expr, scope)", "rationalize(expr, scope, detailed)"], description: "Transform a rationalizable expression in a rational fraction. If rational fraction is one variable polynomial then converts the numerator and denominator in canonical form, with decreasing exponents, returning the coefficients of numerator.", examples: ['rationalize("2x/y - y/(x+1)")', 'rationalize("2x/y - y/(x+1)", true)'], seealso: ["simplify"] }, Uf = { name: "resolve", category: "Algebra", syntax: ["resolve(node, scope)"], description: "Recursively substitute variables in an expression tree.", examples: ['resolve(parse("1 + x"), { x: 7 })', 'resolve(parse("size(text)"), { text: "Hello World" })', 'resolve(parse("x + y"), { x: parse("3z") })', 'resolve(parse("3x"), { x: parse("y+z"), z: parse("w^y") })'], seealso: ["simplify", "evaluate"], mayThrow: ["ReferenceError"] }, Wf = { name: "simplify", category: "Algebra", syntax: ["simplify(expr)", "simplify(expr, rules)"], description: "Simplify an expression tree.", examples: ['simplify("3 + 2 / 4")', 'simplify("2x + x")', 'f = parse("x * (x + 2 + x)")', "simplified = simplify(f)", "simplified.evaluate({x: 2})"], seealso: ["simplifyCore", "derivative", "evaluate", "parse", "rationalize", "resolve"] }, Hf = { name: "simplifyConstant", category: "Algebra", syntax: ["simplifyConstant(expr)", "simplifyConstant(expr, options)"], description: "Replace constant subexpressions of node with their values.", examples: ['simplifyConstant("(3-3)*x")', 'simplifyConstant(parse("z-cos(tau/8)"))'], seealso: ["simplify", "simplifyCore", "evaluate"] }, Zf = { name: "simplifyCore", category: "Algebra", syntax: ["simplifyCore(node)"], description: "Perform simple one-pass simplifications on an expression tree.", examples: ['simplifyCore(parse("0*x"))', 'simplifyCore(parse("(x+0)*2"))'], seealso: ["simplify", "simplifyConstant", "evaluate"] }, Jf = { name: "slu", category: "Algebra", syntax: ["slu(A, order, threshold)"], description: "Calculate the Matrix LU decomposition with full pivoting. Matrix A is decomposed in two matrices (L, U) and two permutation vectors (pinv, q) where P * A * Q = L * U", examples: ["slu(sparse([4.5, 0, 3.2, 0; 3.1, 2.9, 0, 0.9; 0, 1.7, 3, 0; 3.5, 0.4, 0, 1]), 1, 0.001)"], seealso: ["lusolve", "lsolve", "usolve", "matrix", "sparse", "lup", "qr"] }, Vf = { name: "symbolicEqual", category: "Algebra", syntax: ["symbolicEqual(expr1, expr2)", "symbolicEqual(expr1, expr2, options)"], description: "Returns true if the difference of the expressions simplifies to 0", examples: ['symbolicEqual("x*y","y*x")', 'symbolicEqual("abs(x^2)", "x^2")', 'symbolicEqual("abs(x)", "x", {context: {abs: {trivial: true}}})'], seealso: ["simplify", "evaluate"] }, Xf = { name: "usolve", category: "Algebra", syntax: ["x=usolve(U, b)"], description: "Finds one solution of the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.", examples: ["x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"], seealso: ["usolveAll", "lup", "lusolve", "lsolve", "matrix", "sparse"] }, Gf = { name: "usolveAll", category: "Algebra", syntax: ["x=usolve(U, b)"], description: "Finds all solutions of the linear system U * x = b where U is an [n x n] upper triangular matrix and b is a [n] column vector.", examples: ["x=usolve(sparse([1, 1, 1, 1; 0, 1, 1, 1; 0, 0, 1, 1; 0, 0, 0, 1]), [1; 2; 3; 4])"], seealso: ["usolve", "lup", "lusolve", "lsolve", "matrix", "sparse"] }, Qf = { name: "abs", category: "Arithmetic", syntax: ["abs(x)"], description: "Compute the absolute value.", examples: ["abs(3.5)", "abs(-4.2)"], seealso: ["sign"] }, Kf = { name: "add", category: "Operators", syntax: ["x + y", "add(x, y)"], description: "Add two values.", examples: ["a = 2.1 + 3.6", "a - 3.6", "3 + 2i", "3 cm + 2 inch", '"2.3" + "4"'], seealso: ["subtract"] }, Yf = { name: "cbrt", category: "Arithmetic", syntax: ["cbrt(x)", "cbrt(x, allRoots)"], description: "Compute the cubic root value. If x = y * y * y, then y is the cubic root of x. When `x` is a number or complex number, an optional second argument `allRoots` can be provided to return all three cubic roots. If not provided, the principal root is returned", examples: ["cbrt(64)", "cube(4)", "cbrt(-8)", "cbrt(2 + 3i)", "cbrt(8i)", "cbrt(8i, true)", "cbrt(27 m^3)"], seealso: ["square", "sqrt", "cube", "multiply"] }, em = { name: "ceil", category: "Arithmetic", syntax: ["ceil(x)", "ceil(x, n)", "ceil(unit, valuelessUnit)", "ceil(unit, n, valuelessUnit)"], description: "Round a value towards plus infinity. If x is complex, both real and imaginary part are rounded towards plus infinity.", examples: ["ceil(3.2)", "ceil(3.8)", "ceil(-4.2)", "ceil(3.241cm, cm)", "ceil(3.241cm, 2, cm)"], seealso: ["floor", "fix", "round"] }, rm = { name: "cube", category: "Arithmetic", syntax: ["cube(x)"], description: "Compute the cube of a value. The cube of x is x * x * x.", examples: ["cube(2)", "2^3", "2 * 2 * 2"], seealso: ["multiply", "square", "pow"] }, tm = { name: "divide", category: "Operators", syntax: ["x / y", "divide(x, y)"], description: "Divide two values.", examples: ["a = 2 / 3", "a * 3", "4.5 / 2", "3 + 4 / 2", "(3 + 4) / 2", "18 km / 4.5"], seealso: ["multiply"] }, nm = { name: "dotDivide", category: "Operators", syntax: ["x ./ y", "dotDivide(x, y)"], description: "Divide two values element wise.", examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a ./ b"], seealso: ["multiply", "dotMultiply", "divide"] }, am = { name: "dotMultiply", category: "Operators", syntax: ["x .* y", "dotMultiply(x, y)"], description: "Multiply two values element wise.", examples: ["a = [1, 2, 3; 4, 5, 6]", "b = [2, 1, 1; 3, 2, 5]", "a .* b"], seealso: ["multiply", "divide", "dotDivide"] }, im = { name: "dotPow", category: "Operators", syntax: ["x .^ y", "dotPow(x, y)"], description: "Calculates the power of x to y element wise.", examples: ["a = [1, 2, 3; 4, 5, 6]", "a .^ 2"], seealso: ["pow"] }, om = { name: "exp", category: "Arithmetic", syntax: ["exp(x)"], description: "Calculate the exponent of a value.", examples: ["exp(1.3)", "e ^ 1.3", "log(exp(1.3))", "x = 2.4", "(exp(i*x) == cos(x) + i*sin(x))   # Euler's formula"], seealso: ["expm", "expm1", "pow", "log"] }, sm = { name: "expm", category: "Arithmetic", syntax: ["exp(x)"], description: "Compute the matrix exponential, expm(A) = e^A. The matrix must be square. Not to be confused with exp(a), which performs element-wise exponentiation.", examples: ["expm([[0,2],[0,0]])"], seealso: ["exp"] }, um = { name: "expm1", category: "Arithmetic", syntax: ["expm1(x)"], description: "Calculate the value of subtracting 1 from the exponential value.", examples: ["expm1(2)", "pow(e, 2) - 1", "log(expm1(2) + 1)"], seealso: ["exp", "pow", "log"] }, cm = { name: "fix", category: "Arithmetic", syntax: ["fix(x)", "fix(x, n)", "fix(unit, valuelessUnit)", "fix(unit, n, valuelessUnit)"], description: "Round a value towards zero. If x is complex, both real and imaginary part are rounded towards zero.", examples: ["fix(3.2)", "fix(3.8)", "fix(-4.2)", "fix(-4.8)", "fix(3.241cm, cm)", "fix(3.241cm, 2, cm)"], seealso: ["ceil", "floor", "round"] }, lm = { name: "floor", category: "Arithmetic", syntax: ["floor(x)", "floor(x, n)", "floor(unit, valuelessUnit)", "floor(unit, n, valuelessUnit)"], description: "Round a value towards minus infinity.If x is complex, both real and imaginary part are rounded towards minus infinity.", examples: ["floor(3.2)", "floor(3.8)", "floor(-4.2)", "floor(3.241cm, cm)", "floor(3.241cm, 2, cm)"], seealso: ["ceil", "fix", "round"] }, fm = { name: "gcd", category: "Arithmetic", syntax: ["gcd(a, b)", "gcd(a, b, c, ...)"], description: "Compute the greatest common divisor.", examples: ["gcd(8, 12)", "gcd(-4, 6)", "gcd(25, 15, -10)"], seealso: ["lcm", "xgcd"] }, mm = { name: "hypot", category: "Arithmetic", syntax: ["hypot(a, b, c, ...)", "hypot([a, b, c, ...])"], description: "Calculate the hypotenuse of a list with values.", examples: ["hypot(3, 4)", "sqrt(3^2 + 4^2)", "hypot(-2)", "hypot([3, 4, 5])"], seealso: ["abs", "norm"] }, pm = { name: "invmod", category: "Arithmetic", syntax: ["invmod(a, b)"], description: "Calculate the (modular) multiplicative inverse of a modulo b. Solution to the equation ax \u2263 1 (mod b)", examples: ["invmod(8, 12)", "invmod(7, 13)", "invmod(15151, 15122)"], seealso: ["gcd", "xgcd"] }, dm = { name: "lcm", category: "Arithmetic", syntax: ["lcm(x, y)"], description: "Compute the least common multiple.", examples: ["lcm(4, 6)", "lcm(6, 21)", "lcm(6, 21, 5)"], seealso: ["gcd"] }, hm = { name: "log", category: "Arithmetic", syntax: ["log(x)", "log(x, base)"], description: "Compute the logarithm of a value. If no base is provided, the natural logarithm of x is calculated. If base if provided, the logarithm is calculated for the specified base. log(x, base) is defined as log(x) / log(base).", examples: ["log(3.5)", "a = log(2.4)", "exp(a)", "10 ^ 4", "log(10000, 10)", "log(10000) / log(10)", "b = log(1024, 2)", "2 ^ b"], seealso: ["exp", "log1p", "log2", "log10"] }, vm = { name: "log10", category: "Arithmetic", syntax: ["log10(x)"], description: "Compute the 10-base logarithm of a value.", examples: ["log10(0.00001)", "log10(10000)", "10 ^ 4", "log(10000) / log(10)", "log(10000, 10)"], seealso: ["exp", "log"] }, gm = { name: "log1p", category: "Arithmetic", syntax: ["log1p(x)", "log1p(x, base)"], description: "Calculate the logarithm of a `value+1`", examples: ["log1p(2.5)", "exp(log1p(1.4))", "pow(10, 4)", "log1p(9999, 10)", "log1p(9999) / log(10)"], seealso: ["exp", "log", "log2", "log10"] }, ym = { name: "log2", category: "Arithmetic", syntax: ["log2(x)"], description: "Calculate the 2-base of a value. This is the same as calculating `log(x, 2)`.", examples: ["log2(0.03125)", "log2(16)", "log2(16) / log2(2)", "pow(2, 4)"], seealso: ["exp", "log1p", "log", "log10"] }, Dm = { name: "mod", category: "Operators", syntax: ["x % y", "x mod y", "mod(x, y)"], description: "Calculates the modulus, the remainder of an integer division.", examples: ["7 % 3", "11 % 2", "10 mod 4", "isOdd(x) = x % 2", "isOdd(2)", "isOdd(3)"], seealso: ["divide"] }, bm = { name: "multiply", category: "Operators", syntax: ["x * y", "multiply(x, y)"], description: "multiply two values.", examples: ["a = 2.1 * 3.4", "a / 3.4", "2 * 3 + 4", "2 * (3 + 4)", "3 * 2.1 km"], seealso: ["divide"] }, xm = { name: "norm", category: "Arithmetic", syntax: ["norm(x)", "norm(x, p)"], description: "Calculate the norm of a number, vector or matrix.", examples: ["abs(-3.5)", "norm(-3.5)", "norm(3 - 4i)", "norm([1, 2, -3], Infinity)", "norm([1, 2, -3], -Infinity)", "norm([3, 4], 2)", "norm([[1, 2], [3, 4]], 1)", 'norm([[1, 2], [3, 4]], "inf")', 'norm([[1, 2], [3, 4]], "fro")'] }, wm = { name: "nthRoot", category: "Arithmetic", syntax: ["nthRoot(a)", "nthRoot(a, root)"], description: 'Calculate the nth root of a value. The principal nth root of a positive real number A, is the positive real solution of the equation "x^root = A".', examples: ["4 ^ 3", "nthRoot(64, 3)", "nthRoot(9, 2)", "sqrt(9)"], seealso: ["nthRoots", "pow", "sqrt"] }, Nm = { name: "nthRoots", category: "Arithmetic", syntax: ["nthRoots(A)", "nthRoots(A, root)"], description: 'Calculate the nth roots of a value. An nth root of a positive real number A, is a positive real solution of the equation "x^root = A". This function returns an array of complex values.', examples: ["nthRoots(1)", "nthRoots(1, 3)"], seealso: ["sqrt", "pow", "nthRoot"] }, Am = { name: "pow", category: "Operators", syntax: ["x ^ y", "pow(x, y)"], description: "Calculates the power of x to y, x^y.", examples: ["2^3", "2*2*2", "1 + e ^ (pi * i)", "pow([[1, 2], [4, 3]], 2)", "pow([[1, 2], [4, 3]], -1)"], seealso: ["multiply", "nthRoot", "nthRoots", "sqrt"] }, Cm = { name: "round", category: "Arithmetic", syntax: ["round(x)", "round(x, n)", "round(unit, valuelessUnit)", "round(unit, n, valuelessUnit)"], description: "round a value towards the nearest integer.If x is complex, both real and imaginary part are rounded towards the nearest integer. When n is specified, the value is rounded to n decimals.", examples: ["round(3.2)", "round(3.8)", "round(-4.2)", "round(-4.8)", "round(pi, 3)", "round(123.45678, 2)", "round(3.241cm, 2, cm)", "round([3.2, 3.8, -4.7])"], seealso: ["ceil", "floor", "fix"] }, Em = { name: "sign", category: "Arithmetic", syntax: ["sign(x)"], description: "Compute the sign of a value. The sign of a value x is 1 when x>0, -1 when x<0, and 0 when x=0.", examples: ["sign(3.5)", "sign(-4.2)", "sign(0)"], seealso: ["abs"] }, Fm = { name: "sqrt", category: "Arithmetic", syntax: ["sqrt(x)"], description: "Compute the square root value. If x = y * y, then y is the square root of x.", examples: ["sqrt(25)", "5 * 5", "sqrt(-1)"], seealso: ["square", "sqrtm", "multiply", "nthRoot", "nthRoots", "pow"] }, Bm = { name: "sqrtm", category: "Arithmetic", syntax: ["sqrtm(x)"], description: "Calculate the principal square root of a square matrix. The principal square root matrix `X` of another matrix `A` is such that `X * X = A`.", examples: ["sqrtm([[33, 24], [48, 57]])"], seealso: ["sqrt", "abs", "square", "multiply"] }, Sm = { name: "sylvester", category: "Algebra", syntax: ["sylvester(A,B,C)"], description: "Solves the real-valued Sylvester equation AX+XB=C for X", examples: ["sylvester([[-1, -2], [1, 1]], [[-2, 1], [-1, 2]], [[-3, 2], [3, 0]])", "A = [[-1, -2], [1, 1]]; B = [[2, -1], [1, -2]]; C = [[-3, 2], [3, 0]]", "sylvester(A, B, C)"], seealso: ["schur", "lyap"] }, Tm = { name: "schur", category: "Algebra", syntax: ["schur(A)"], description: "Performs a real Schur decomposition of the real matrix A = UTU'", examples: ["schur([[1, 0], [-4, 3]])", "A = [[1, 0], [-4, 3]]", "schur(A)"], seealso: ["lyap", "sylvester"] }, Mm = { name: "lyap", category: "Algebra", syntax: ["lyap(A,Q)"], description: "Solves the Continuous-time Lyapunov equation AP+PA'+Q=0 for P", examples: ["lyap([[-2, 0], [1, -4]], [[3, 1], [1, 3]])", "A = [[-2, 0], [1, -4]]", "Q = [[3, 1], [1, 3]]", "lyap(A,Q)"], seealso: ["schur", "sylvester"] }, Om = { name: "square", category: "Arithmetic", syntax: ["square(x)"], description: "Compute the square of a value. The square of x is x * x.", examples: ["square(3)", "sqrt(9)", "3^2", "3 * 3"], seealso: ["multiply", "pow", "sqrt", "cube"] }, $m = { name: "subtract", category: "Operators", syntax: ["x - y", "subtract(x, y)"], description: "subtract two values.", examples: ["a = 5.3 - 2", "a + 2", "2/3 - 1/6", "2 * 3 - 3", "2.1 km - 500m"], seealso: ["add"] }, km = { name: "unaryMinus", category: "Operators", syntax: ["-x", "unaryMinus(x)"], description: "Inverse the sign of a value. Converts booleans and strings to numbers.", examples: ["-4.5", "-(-5.6)", '-"22"'], seealso: ["add", "subtract", "unaryPlus"] }, qm = { name: "unaryPlus", category: "Operators", syntax: ["+x", "unaryPlus(x)"], description: "Converts booleans and strings to numbers.", examples: ["+true", '+"2"'], seealso: ["add", "subtract", "unaryMinus"] }, Pm = { name: "xgcd", category: "Arithmetic", syntax: ["xgcd(a, b)"], description: "Calculate the extended greatest common divisor for two values. The result is an array [d, x, y] with 3 entries, where d is the greatest common divisor, and d = x * a + y * b.", examples: ["xgcd(8, 12)", "gcd(8, 12)", "xgcd(36163, 21199)"], seealso: ["gcd", "lcm"] }, Im = { name: "bitAnd", category: "Bitwise", syntax: ["x & y", "bitAnd(x, y)"], description: "Bitwise AND operation. Performs the logical AND operation on each pair of the corresponding bits of the two given values by multiplying them. If both bits in the compared position are 1, the bit in the resulting binary representation is 1, otherwise, the result is 0", examples: ["5 & 3", "bitAnd(53, 131)", "[1, 12, 31] & 42"], seealso: ["bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"] }, _m = { name: "bitNot", category: "Bitwise", syntax: ["~x", "bitNot(x)"], description: "Bitwise NOT operation. Performs a logical negation on each bit of the given value. Bits that are 0 become 1, and those that are 1 become 0.", examples: ["~1", "~2", "bitNot([2, -3, 4])"], seealso: ["bitAnd", "bitOr", "bitXor", "leftShift", "rightArithShift", "rightLogShift"] }, Rm = { name: "bitOr", category: "Bitwise", syntax: ["x | y", "bitOr(x, y)"], description: "Bitwise OR operation. Performs the logical inclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if the first bit is 1 or the second bit is 1 or both bits are 1, otherwise, the result is 0.", examples: ["5 | 3", "bitOr([1, 2, 3], 4)"], seealso: ["bitAnd", "bitNot", "bitXor", "leftShift", "rightArithShift", "rightLogShift"] }, jm = { name: "bitXor", category: "Bitwise", syntax: ["bitXor(x, y)"], description: "Bitwise XOR operation, exclusive OR. Performs the logical exclusive OR operation on each pair of corresponding bits of the two given values. The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1.", examples: ["bitOr(1, 2)", "bitXor([2, 3, 4], 4)"], seealso: ["bitAnd", "bitNot", "bitOr", "leftShift", "rightArithShift", "rightLogShift"] }, Lm = { name: "leftShift", category: "Bitwise", syntax: ["x << y", "leftShift(x, y)"], description: "Bitwise left logical shift of a value x by y number of bits.", examples: ["4 << 1", "8 >> 1"], seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "rightArithShift", "rightLogShift"] }, zm = { name: "rightArithShift", category: "Bitwise", syntax: ["x >> y", "rightArithShift(x, y)"], description: "Bitwise right arithmetic shift of a value x by y number of bits.", examples: ["8 >> 1", "4 << 1", "-12 >> 2"], seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightLogShift"] }, Um = { name: "rightLogShift", category: "Bitwise", syntax: ["x >>> y", "rightLogShift(x, y)"], description: "Bitwise right logical shift of a value x by y number of bits.", examples: ["8 >>> 1", "4 << 1", "-12 >>> 2"], seealso: ["bitAnd", "bitNot", "bitOr", "bitXor", "leftShift", "rightArithShift"] }, Wm = { name: "bellNumbers", category: "Combinatorics", syntax: ["bellNumbers(n)"], description: "The Bell Numbers count the number of partitions of a set. A partition is a pairwise disjoint subset of S whose union is S. `bellNumbers` only takes integer arguments. The following condition must be enforced: n >= 0.", examples: ["bellNumbers(3)", "bellNumbers(8)"], seealso: ["stirlingS2"] }, Hm = { name: "catalan", category: "Combinatorics", syntax: ["catalan(n)"], description: "The Catalan Numbers enumerate combinatorial structures of many different types. catalan only takes integer arguments. The following condition must be enforced: n >= 0.", examples: ["catalan(3)", "catalan(8)"], seealso: ["bellNumbers"] }, Zm = { name: "composition", category: "Combinatorics", syntax: ["composition(n, k)"], description: "The composition counts of n into k parts. composition only takes integer arguments. The following condition must be enforced: k <= n.", examples: ["composition(5, 3)"], seealso: ["combinations"] }, Jm = { name: "stirlingS2", category: "Combinatorics", syntax: ["stirlingS2(n, k)"], description: "The Stirling numbers of the second kind, counts the number of ways to partition a set of n labelled objects into k nonempty unlabelled subsets. `stirlingS2` only takes integer arguments. The following condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) = 1.", examples: ["stirlingS2(5, 3)"], seealso: ["bellNumbers", "bernoulli"] }, Vm = { name: "arg", category: "Complex", syntax: ["arg(x)"], description: "Compute the argument of a complex value. If x = a+bi, the argument is computed as atan2(b, a).", examples: ["arg(2 + 2i)", "atan2(3, 2)", "arg(2 + 3i)"], seealso: ["re", "im", "conj", "abs"] }, Xm = { name: "conj", category: "Complex", syntax: ["conj(x)"], description: "Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate is a-bi.", examples: ["conj(2 + 3i)", "conj(2 - 3i)", "conj(-5.2i)"], seealso: ["re", "im", "abs", "arg"] }, Gm = { name: "im", category: "Complex", syntax: ["im(x)"], description: "Get the imaginary part of a complex number.", examples: ["im(2 + 3i)", "re(2 + 3i)", "im(-5.2i)", "im(2.4)"], seealso: ["re", "conj", "abs", "arg"] }, Qm = { name: "re", category: "Complex", syntax: ["re(x)"], description: "Get the real part of a complex number.", examples: ["re(2 + 3i)", "im(2 + 3i)", "re(-5.2i)", "re(2.4)"], seealso: ["im", "conj", "abs", "arg"] }, Km = { name: "evaluate", category: "Expression", syntax: ["evaluate(expression)", "evaluate(expression, scope)", "evaluate([expr1, expr2, expr3, ...])", "evaluate([expr1, expr2, expr3, ...], scope)"], description: "Evaluate an expression or an array with expressions.", examples: ['evaluate("2 + 3")', 'evaluate("sqrt(16)")', 'evaluate("2 inch to cm")', 'evaluate("sin(x * pi)", { "x": 1/2 })', 'evaluate(["width=2", "height=4","width*height"])'], seealso: ["parser", "parse", "compile"] }, Ym = { name: "parser", category: "Expression", syntax: ["parser()"], description: "Create a parser object that keeps a context of variables and their values, allowing the evaluation of expressions in that context.", examples: ["myParser = parser()", 'myParser.evaluate("sqrt(3^2 + 4^2)")', 'myParser.set("x", 3)', 'myParser.evaluate("y = x + 3")', 'myParser.evaluate(["y = x + 3", "y = y + 1"])', 'myParser.get("y")'], seealso: ["evaluate", "parse", "compile"] }, ep = { name: "parse", category: "Expression", syntax: ["parse(expr)", "parse(expr, options)", "parse([expr1, expr2, expr3, ...])", "parse([expr1, expr2, expr3, ...], options)"], description: "Parse an expression. Returns a node tree, which can be evaluated by invoking node.evaluate() or transformed into a functional object via node.compile().", examples: ['node1 = parse("sqrt(3^2 + 4^2)")', "node1.evaluate()", "code1 = node1.compile()", "code1.evaluate()", "scope = {a: 3, b: 4}", 'node2 = parse("a * b")', "node2.evaluate(scope)", "code2 = node2.compile()", "code2.evaluate(scope)"], seealso: ["parser", "evaluate", "compile"] }, rp = { name: "compile", category: "Expression", syntax: ["compile(expr) ", "compile([expr1, expr2, expr3, ...])"], description: "Parse and compile an expression. Returns a an object with a function evaluate([scope]) to evaluate the compiled expression.", examples: ['code1 = compile("sqrt(3^2 + 4^2)")', "code1.evaluate() ", 'code2 = compile("a * b")', "code2.evaluate({a: 3, b: 4})"], seealso: ["parser", "parse", "evaluate"] }, tp = { name: "help", category: "Expression", syntax: ["help(object)", "help(string)"], description: "Display documentation on a function or data type.", examples: ["help(sqrt)", 'help("complex")'], seealso: [] }, np = { name: "distance", category: "Geometry", syntax: ["distance([x1, y1], [x2, y2])", "distance([[x1, y1], [x2, y2]])"], description: "Calculates the Euclidean distance between two points.", examples: ["distance([0,0], [4,4])", "distance([[0,0], [4,4]])"], seealso: [] }, ap = { name: "intersect", category: "Geometry", syntax: ["intersect(expr1, expr2, expr3, expr4)", "intersect(expr1, expr2, expr3)"], description: "Computes the intersection point of lines and/or planes.", examples: ["intersect([0, 0], [10, 10], [10, 0], [0, 10])", "intersect([1, 0, 1],  [4, -2, 2], [1, 1, 1, 6])"], seealso: [] }, ip = { name: "and", category: "Logical", syntax: ["x and y", "and(x, y)"], description: "Logical and. Test whether two values are both defined with a nonzero/nonempty value.", examples: ["true and false", "true and true", "2 and 4"], seealso: ["not", "or", "xor"] }, op = { name: "not", category: "Logical", syntax: ["not x", "not(x)"], description: "Logical not. Flips the boolean value of given argument.", examples: ["not true", "not false", "not 2", "not 0"], seealso: ["and", "or", "xor"] }, sp = { name: "nullish", category: "Logical", syntax: ["x ?? y", "nullish(x, y)"], description: "Nullish coalescing operator. Returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand.", examples: ["null ?? 42", "undefined ?? 42", "0 ?? 42", "false ?? 42", "null ?? undefined ?? 42"], seealso: ["and", "or", "not"] }, up = { name: "or", category: "Logical", syntax: ["x or y", "or(x, y)"], description: "Logical or. Test if at least one value is defined with a nonzero/nonempty value.", examples: ["true or false", "false or false", "0 or 4"], seealso: ["not", "and", "xor"] }, cp = { name: "xor", category: "Logical", syntax: ["x xor y", "xor(x, y)"], description: "Logical exclusive or, xor. Test whether one and only one value is defined with a nonzero/nonempty value.", examples: ["true xor false", "false xor false", "true xor true", "0 xor 4"], seealso: ["not", "and", "or"] }, lp = { name: "mapSlices", category: "Matrix", syntax: ["mapSlices(A, dim, callback)"], description: "Generate a matrix one dimension less than A by applying callback to each slice of A along dimension dim.", examples: ["A = [[1, 2], [3, 4]]", "mapSlices(A, 1, sum)", "mapSlices(A, 2, prod)"], seealso: ["map", "forEach"] }, fp = { name: "column", category: "Matrix", syntax: ["column(x, index)"], description: "Return a column from a matrix or array.", examples: ["A = [[1, 2], [3, 4]]", "column(A, 1)", "column(A, 2)"], seealso: ["row", "matrixFromColumns"] }, mp = { name: "concat", category: "Matrix", syntax: ["concat(A, B, C, ...)", "concat(A, B, C, ..., dim)"], description: "Concatenate matrices. By default, the matrices are concatenated by the last dimension. The dimension on which to concatenate can be provided as last argument.", examples: ["A = [1, 2; 5, 6]", "B = [3, 4; 7, 8]", "concat(A, B)", "concat(A, B, 1)", "concat(A, B, 2)"], seealso: ["det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] }, pp = { name: "count", category: "Matrix", syntax: ["count(x)"], description: "Count the number of elements of a matrix, array or string.", examples: ["a = [1, 2; 3, 4; 5, 6]", "count(a)", "size(a)", 'count("hello world")'], seealso: ["size"] }, dp = { name: "cross", category: "Matrix", syntax: ["cross(A, B)"], description: "Calculate the cross product for two vectors in three dimensional space.", examples: ["cross([1, 1, 0],  [0, 1, 1])", "cross([3, -3, 1], [4, 9, 2])", "cross([2, 3, 4],  [5, 6, 7])"], seealso: ["multiply", "dot"] }, hp = { name: "ctranspose", category: "Matrix", syntax: ["x'", "ctranspose(x)"], description: "Complex Conjugate and Transpose a matrix", examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "ctranspose(a)"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"] }, vp = { name: "det", category: "Matrix", syntax: ["det(x)"], description: "Calculate the determinant of a matrix", examples: ["det([1, 2; 3, 4])", "det([-2, 2, 3; -1, 1, 3; 2, 0, -1])"], seealso: ["concat", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] }, gp = { name: "diag", category: "Matrix", syntax: ["diag(x)", "diag(x, k)"], description: "Create a diagonal matrix or retrieve the diagonal of a matrix. When x is a vector, a matrix with the vector values on the diagonal will be returned. When x is a matrix, a vector with the diagonal values of the matrix is returned. When k is provided, the k-th diagonal will be filled in or retrieved, if k is positive, the values are placed on the super diagonal. When k is negative, the values are placed on the sub diagonal.", examples: ["diag(1:3)", "diag(1:3, 1)", "a = [1, 2, 3; 4, 5, 6; 7, 8, 9]", "diag(a)"], seealso: ["concat", "det", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] }, yp = { name: "diff", category: "Matrix", syntax: ["diff(arr)", "diff(arr, dim)"], description: ["Create a new matrix or array with the difference of the passed matrix or array.", "Dim parameter is optional and used to indicate the dimension of the array/matrix to apply the difference", "If no dimension parameter is passed it is assumed as dimension 0", "Dimension is zero-based in javascript and one-based in the parser", "Arrays must be 'rectangular' meaning arrays like [1, 2]", "If something is passed as a matrix it will be returned as a matrix but other than that all matrices are converted to arrays"], examples: ["A = [1, 2, 4, 7, 0]", "diff(A)", "diff(A, 1)", "B = [[1, 2], [3, 4]]", "diff(B)", "diff(B, 1)", "diff(B, 2)", "diff(B, bignumber(2))", "diff([[1, 2], matrix([3, 4])], 2)"], seealso: ["subtract", "partitionSelect"] }, Dp = { name: "dot", category: "Matrix", syntax: ["dot(A, B)", "A * B"], description: "Calculate the dot product of two vectors. The dot product of A = [a1, a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as dot(A, B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn", examples: ["dot([2, 4, 1], [2, 2, 3])", "[2, 4, 1] * [2, 2, 3]"], seealso: ["multiply", "cross"] }, bp = { name: "eigs", category: "Matrix", syntax: ["eigs(x)"], description: "Calculate the eigenvalues and optionally eigenvectors of a square matrix", examples: ["eigs([[5, 2.3], [2.3, 1]])", "eigs([[1, 2, 3], [4, 5, 6], [7, 8, 9]], { precision: 1e-6, eigenvectors: false })"], seealso: ["inv"] }, xp = { name: "filter", category: "Matrix", syntax: ["filter(x, test)"], description: "Filter items in a matrix.", examples: ["isPositive(x) = x > 0", "filter([6, -2, -1, 4, 3], isPositive)", "filter([6, -2, 0, 1, 0], x != 0)"], seealso: ["sort", "map", "forEach"] }, wp = { name: "flatten", category: "Matrix", syntax: ["flatten(x)"], description: "Flatten a multi dimensional matrix into a single dimensional matrix.", examples: ["a = [1, 2, 3; 4, 5, 6]", "size(a)", "b = flatten(a)", "size(b)"], seealso: ["concat", "resize", "size", "squeeze"] }, Np = { name: "forEach", category: "Matrix", syntax: ["forEach(x, callback)"], description: "Iterates over all elements of a matrix/array, and executes the given callback function.", examples: ["numberOfPets = {}", "addPet(n) = numberOfPets[n] = (numberOfPets[n] ? numberOfPets[n]:0 ) + 1;", 'forEach(["Dog","Cat","Cat"], addPet)', "numberOfPets"], seealso: ["map", "sort", "filter"] }, Ap = { name: "getMatrixDataType", category: "Matrix", syntax: ["getMatrixDataType(x)"], description: 'Find the data type of all elements in a matrix or array, for example "number" if all items are a number and "Complex" if all values are complex numbers. If a matrix contains more than one data type, it will return "mixed".', examples: ["getMatrixDataType([1, 2, 3])", "getMatrixDataType([[5 cm], [2 inch]])", 'getMatrixDataType([1, "text"])', "getMatrixDataType([1, bignumber(4)])"], seealso: ["matrix", "sparse", "typeOf"] }, Cp = { name: "identity", category: "Matrix", syntax: ["identity(n)", "identity(m, n)", "identity([m, n])"], description: "Returns the identity matrix with size m-by-n. The matrix has ones on the diagonal and zeros elsewhere.", examples: ["identity(3)", "identity(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "identity(size(a))"], seealso: ["concat", "det", "diag", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] }, Ep = { name: "inv", category: "Matrix", syntax: ["inv(x)"], description: "Calculate the inverse of a matrix", examples: ["inv([1, 2; 3, 4])", "inv(4)", "1 / 4"], seealso: ["concat", "det", "diag", "identity", "ones", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] }, Fp = { name: "pinv", category: "Matrix", syntax: ["pinv(x)"], description: "Calculate the Moore\u2013Penrose inverse of a matrix", examples: ["pinv([1, 2; 3, 4])", "pinv([[1, 0], [0, 1], [0, 1]])", "pinv(4)"], seealso: ["inv"] }, Bp = { name: "kron", category: "Matrix", syntax: ["kron(x, y)"], description: "Calculates the Kronecker product of 2 matrices or vectors.", examples: ["kron([[1, 0], [0, 1]], [[1, 2], [3, 4]])", "kron([1,1], [2,3,4])"], seealso: ["multiply", "dot", "cross"] }, Sp = { name: "map", category: "Matrix", syntax: ["map(x, callback)", "map(x, y, ..., callback)"], description: "Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array or the matrices/arrays.", examples: ["map([1, 2, 3], square)", "map([1, 2], [3, 4], f(a,b) = a + b)"], seealso: ["filter", "forEach"] }, Tp = { name: "matrixFromColumns", category: "Matrix", syntax: ["matrixFromColumns(...arr)", "matrixFromColumns(row1, row2)", "matrixFromColumns(row1, row2, row3)"], description: "Create a dense matrix from vectors as individual columns.", examples: ["matrixFromColumns([1, 2, 3], [[4],[5],[6]])"], seealso: ["matrix", "matrixFromRows", "matrixFromFunction", "zeros"] }, Mp = { name: "matrixFromFunction", category: "Matrix", syntax: ["matrixFromFunction(size, fn)", "matrixFromFunction(size, fn, format)", "matrixFromFunction(size, fn, format, datatype)", "matrixFromFunction(size, format, fn)", "matrixFromFunction(size, format, datatype, fn)"], description: "Create a matrix by evaluating a generating function at each index.", examples: ["f(I) = I[1] - I[2]", "matrixFromFunction([3,3], f)", "g(I) = I[1] - I[2] == 1 ? 4 : 0", 'matrixFromFunction([100, 100], "sparse", g)', "matrixFromFunction([5], random)"], seealso: ["matrix", "matrixFromRows", "matrixFromColumns", "zeros"] }, Op = { name: "matrixFromRows", category: "Matrix", syntax: ["matrixFromRows(...arr)", "matrixFromRows(row1, row2)", "matrixFromRows(row1, row2, row3)"], description: "Create a dense matrix from vectors as individual rows.", examples: ["matrixFromRows([1, 2, 3], [[4],[5],[6]])"], seealso: ["matrix", "matrixFromColumns", "matrixFromFunction", "zeros"] }, $p = { name: "ones", category: "Matrix", syntax: ["ones(m)", "ones(m, n)", "ones(m, n, p, ...)", "ones([m])", "ones([m, n])", "ones([m, n, p, ...])"], description: "Create a matrix containing ones.", examples: ["ones(3)", "ones(3, 5)", "ones([2,3]) * 4.5", "a = [1, 2, 3; 4, 5, 6]", "ones(size(a))"], seealso: ["concat", "det", "diag", "identity", "inv", "range", "size", "squeeze", "subset", "trace", "transpose", "zeros"] }, kp = { name: "partitionSelect", category: "Matrix", syntax: ["partitionSelect(x, k)", "partitionSelect(x, k, compare)"], description: "Partition-based selection of an array or 1D matrix. Will find the kth smallest value, and mutates the input array. Uses Quickselect.", examples: ["partitionSelect([5, 10, 1], 2)", 'partitionSelect(["C", "B", "A", "D"], 1, compareText)', "arr = [5, 2, 1]", "partitionSelect(arr, 0) # returns 1, arr is now: [1, 2, 5]", "arr", "partitionSelect(arr, 1, 'desc') # returns 2, arr is now: [5, 2, 1]", "arr"], seealso: ["sort"] }, qp = { name: "range", category: "Type", syntax: ["start:end", "start:step:end", "range(start, end)", "range(start, end, step)", "range(string)"], description: "Create a range. Lower bound of the range is included, upper bound is excluded.", examples: ["1:5", "3:-1:-3", "range(3, 7)", "range(0, 12, 2)", 'range("4:10")', "range(1m, 1m, 3m)", "a = [1, 2, 3, 4; 5, 6, 7, 8]", "a[1:2, 1:2]"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "size", "squeeze", "subset", "trace", "transpose", "zeros"] }, Pp = { name: "reshape", category: "Matrix", syntax: ["reshape(x, sizes)"], description: "Reshape a multi dimensional array to fit the specified dimensions.", examples: ["reshape([1, 2, 3, 4, 5, 6], [2, 3])", "reshape([[1, 2], [3, 4]], [1, 4])", "reshape([[1, 2], [3, 4]], [4])", "reshape([1, 2, 3, 4], [-1, 2])"], seealso: ["size", "squeeze", "resize"] }, Ip = { name: "resize", category: "Matrix", syntax: ["resize(x, size)", "resize(x, size, defaultValue)"], description: "Resize a matrix.", examples: ["resize([1,2,3,4,5], [3])", "resize([1,2,3], [5])", "resize([1,2,3], [5], -1)", "resize(2, [2, 3])", 'resize("hello", [8], "!")'], seealso: ["size", "subset", "squeeze", "reshape"] }, _p = { name: "rotate", category: "Matrix", syntax: ["rotate(w, theta)", "rotate(w, theta, v)"], description: "Returns a 2-D rotation matrix (2x2) for a given angle (in radians). Returns a 2-D rotation matrix (3x3) of a given angle (in radians) around given axis.", examples: ["rotate([1, 0], pi / 2)", 'rotate(matrix([1, 0]), unit("35deg"))', 'rotate([1, 0, 0], unit("90deg"), [0, 0, 1])', 'rotate(matrix([1, 0, 0]), unit("90deg"), matrix([0, 0, 1]))'], seealso: ["matrix", "rotationMatrix"] }, Rp = { name: "rotationMatrix", category: "Matrix", syntax: ["rotationMatrix(theta)", "rotationMatrix(theta, v)", "rotationMatrix(theta, v, format)"], description: "Returns a 2-D rotation matrix (2x2) for a given angle (in radians). Returns a 2-D rotation matrix (3x3) of a given angle (in radians) around given axis.", examples: ["rotationMatrix(pi / 2)", 'rotationMatrix(unit("45deg"), [0, 0, 1])', 'rotationMatrix(1, matrix([0, 0, 1]), "sparse")'], seealso: ["cos", "sin"] }, jp = { name: "row", category: "Matrix", syntax: ["row(x, index)"], description: "Return a row from a matrix or array.", examples: ["A = [[1, 2], [3, 4]]", "row(A, 1)", "row(A, 2)"], seealso: ["column", "matrixFromRows"] }, Lp = { name: "size", category: "Matrix", syntax: ["size(x)"], description: "Calculate the size of a matrix.", examples: ["size(2.3)", 'size("hello world")', "a = [1, 2; 3, 4; 5, 6]", "size(a)", "size(1:6)"], seealso: ["concat", "count", "det", "diag", "identity", "inv", "ones", "range", "squeeze", "subset", "trace", "transpose", "zeros"] }, zp = { name: "sort", category: "Matrix", syntax: ["sort(x)", "sort(x, compare)"], description: 'Sort the items in a matrix. Compare can be a string "asc", "desc", "natural", or a custom sort function.', examples: ["sort([5, 10, 1])", 'sort(["C", "B", "A", "D"], "natural")', "sortByLength(a, b) = size(a)[1] - size(b)[1]", 'sort(["Langdon", "Tom", "Sara"], sortByLength)', 'sort(["10", "1", "2"], "natural")'], seealso: ["map", "filter", "forEach"] }, Up = { name: "squeeze", category: "Matrix", syntax: ["squeeze(x)"], description: "Remove inner and outer singleton dimensions from a matrix.", examples: ["a = zeros(3,2,1)", "size(squeeze(a))", "b = zeros(1,1,3)", "size(squeeze(b))"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "subset", "trace", "transpose", "zeros"] }, Wp = { name: "subset", category: "Matrix", syntax: ["value(index)", "value(index) = replacement", "subset(value, [index])", "subset(value, [index], replacement)"], description: "Get or set a subset of the entries of a matrix or characters of a string. Indexes are one-based. There should be one index specification for each dimension of the target. Each specification can be a single index, a list of indices, or a range in colon notation `l:u`. In a range, both the lower bound l and upper bound u are included; and if a bound is omitted it defaults to the most extreme valid value. The cartesian product of the indices specified in each dimension determines the target of the operation.", examples: ["d = [1, 2; 3, 4]", "e = []", "e[1, 1:2] = [5, 6]", "e[2, :] = [7, 8]", "f = d * e", "f[2, 1]", "f[:, 1]", "f[[1,2], [1,3]] = [9, 10; 11, 12]", "f"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "trace", "transpose", "zeros"] }, Hp = { name: "trace", category: "Matrix", syntax: ["trace(A)"], description: "Calculate the trace of a matrix: the sum of the elements on the main diagonal of a square matrix.", examples: ["A = [1, 2, 3; -1, 2, 3; 2, 0, 3]", "trace(A)"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "transpose", "zeros"] }, Zp = { name: "transpose", category: "Matrix", syntax: ["x'", "transpose(x)"], description: "Transpose a matrix", examples: ["a = [1, 2, 3; 4, 5, 6]", "a'", "transpose(a)"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "zeros"] }, Jp = { name: "zeros", category: "Matrix", syntax: ["zeros(m)", "zeros(m, n)", "zeros(m, n, p, ...)", "zeros([m])", "zeros([m, n])", "zeros([m, n, p, ...])"], description: "Create a matrix containing zeros.", examples: ["zeros(3)", "zeros(3, 5)", "a = [1, 2, 3; 4, 5, 6]", "zeros(size(a))"], seealso: ["concat", "det", "diag", "identity", "inv", "ones", "range", "size", "squeeze", "subset", "trace", "transpose"] }, Vp = { name: "fft", category: "Matrix", syntax: ["fft(x)"], description: "Calculate N-dimensional Fourier transform", examples: ["fft([[1, 0], [1, 0]])"], seealso: ["ifft"] }, Xp = { name: "ifft", category: "Matrix", syntax: ["ifft(x)"], description: "Calculate N-dimensional inverse Fourier transform", examples: ["ifft([[2, 2], [0, 0]])"], seealso: ["fft"] }, Gp = { name: "bernoulli", category: "Probability", syntax: ["bernoulli(n)"], description: "The nth Bernoulli number", examples: ["bernoulli(4)", "bernoulli(fraction(12))"], seealso: ["combinations", "gamma", "stirlingS2"] }, Qp = { name: "combinations", category: "Probability", syntax: ["combinations(n, k)"], description: "Compute the number of combinations of n items taken k at a time", examples: ["combinations(7, 5)"], seealso: ["combinationsWithRep", "permutations", "factorial"] }, Kp = { name: "combinationsWithRep", category: "Probability", syntax: ["combinationsWithRep(n, k)"], description: "Compute the number of combinations of n items taken k at a time with replacements.", examples: ["combinationsWithRep(7, 5)"], seealso: ["combinations", "permutations", "factorial"] }, Yp = { name: "factorial", category: "Probability", syntax: ["n!", "factorial(n)"], description: "Compute the factorial of a value", examples: ["5!", "5 * 4 * 3 * 2 * 1", "3!"], seealso: ["combinations", "combinationsWithRep", "permutations", "gamma"] }, ed = { name: "gamma", category: "Probability", syntax: ["gamma(n)"], description: "Compute the gamma function. For small values, the Lanczos approximation is used, and for large values the extended Stirling approximation.", examples: ["gamma(4)", "3!", "gamma(1/2)", "sqrt(pi)"], seealso: ["factorial"] }, rd = { name: "lgamma", category: "Probability", syntax: ["lgamma(n)"], description: "Logarithm of the gamma function for real, positive numbers and complex numbers, using Lanczos approximation for numbers and Stirling series for complex numbers.", examples: ["lgamma(4)", "lgamma(1/2)", "lgamma(i)", "lgamma(complex(1.1, 2))"], seealso: ["gamma"] }, td = { name: "kldivergence", category: "Probability", syntax: ["kldivergence(x, y)"], description: "Calculate the Kullback-Leibler (KL) divergence  between two distributions.", examples: ["kldivergence([0.7,0.5,0.4], [0.2,0.9,0.5])"], seealso: [] }, nd = { name: "multinomial", category: "Probability", syntax: ["multinomial(A)"], description: "Multinomial Coefficients compute the number of ways of picking a1, a2, ..., ai unordered outcomes from `n` possibilities. multinomial takes one array of integers as an argument. The following condition must be enforced: every ai > 0.", examples: ["multinomial([1, 2, 1])"], seealso: ["combinations", "factorial"] }, ad = { name: "permutations", category: "Probability", syntax: ["permutations(n)", "permutations(n, k)"], description: "Compute the number of permutations of n items taken k at a time", examples: ["permutations(5)", "permutations(5, 3)"], seealso: ["combinations", "combinationsWithRep", "factorial"] }, id = { name: "pickRandom", category: "Probability", syntax: ["pickRandom(array)", "pickRandom(array, number)", "pickRandom(array, weights)", "pickRandom(array, number, weights)", "pickRandom(array, weights, number)"], description: "Pick a random entry from a given array.", examples: ["pickRandom(0:10)", "pickRandom([1, 3, 1, 6])", "pickRandom([1, 3, 1, 6], 2)", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], 2, [2, 3, 2, 1])", "pickRandom([1, 3, 1, 6], [2, 3, 2, 1], 2)"], seealso: ["random", "randomInt"] }, od = { name: "random", category: "Probability", syntax: ["random()", "random(max)", "random(min, max)", "random(size)", "random(size, max)", "random(size, min, max)"], description: "Return a random number.", examples: ["random()", "random(10, 20)", "random([2, 3])"], seealso: ["pickRandom", "randomInt"] }, sd = { name: "randomInt", category: "Probability", syntax: ["randomInt(max)", "randomInt(min, max)", "randomInt(size)", "randomInt(size, max)", "randomInt(size, min, max)"], description: "Return a random integer number", examples: ["randomInt(10, 20)", "randomInt([2, 3], 10)"], seealso: ["pickRandom", "random"] }, ud = { name: "compare", category: "Relational", syntax: ["compare(x, y)"], description: "Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.", examples: ["compare(2, 3)", "compare(3, 2)", "compare(2, 2)", "compare(5cm, 40mm)", "compare(2, [1, 2, 3])"], seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compareNatural", "compareText"] }, cd = { name: "compareNatural", category: "Relational", syntax: ["compareNatural(x, y)"], description: "Compare two values of any type in a deterministic, natural way. Returns 1 when x > y, -1 when x < y, and 0 when x == y.", examples: ["compareNatural(2, 3)", "compareNatural(3, 2)", "compareNatural(2, 2)", "compareNatural(5cm, 40mm)", 'compareNatural("2", "10")', "compareNatural(2 + 3i, 2 + 4i)", "compareNatural([1, 2, 4], [1, 2, 3])", "compareNatural([1, 5], [1, 2, 3])", "compareNatural([1, 2], [1, 2])", "compareNatural({a: 2}, {a: 4})"], seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare", "compareText"] }, ld = { name: "compareText", category: "Relational", syntax: ["compareText(x, y)"], description: "Compare two strings lexically. Comparison is case sensitive. Returns 1 when x > y, -1 when x < y, and 0 when x == y.", examples: ['compareText("B", "A")', 'compareText("A", "B")', 'compareText("A", "A")', 'compareText("2", "10")', 'compare("2", "10")', "compare(2, 10)", 'compareNatural("2", "10")', 'compareText("B", ["A", "B", "C"])'], seealso: ["compare", "compareNatural"] }, fd = { name: "deepEqual", category: "Relational", syntax: ["deepEqual(x, y)"], description: "Check equality of two matrices element wise. Returns true if the size of both matrices is equal and when and each of the elements are equal.", examples: ["deepEqual([1,3,4], [1,3,4])", "deepEqual([1,3,4], [1,3])"], seealso: ["equal", "unequal", "smaller", "larger", "smallerEq", "largerEq", "compare"] }, md = { name: "equal", category: "Relational", syntax: ["x == y", "equal(x, y)"], description: "Check equality of two values. Returns true if the values are equal, and false if not.", examples: ["2+2 == 3", "2+2 == 4", "a = 3.2", "b = 6-2.8", "a == b", "50cm == 0.5m"], seealso: ["unequal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual", "equalText"] }, pd = { name: "equalText", category: "Relational", syntax: ["equalText(x, y)"], description: "Check equality of two strings. Comparison is case sensitive. Returns true if the values are equal, and false if not.", examples: ['equalText("Hello", "Hello")', 'equalText("a", "A")', 'equal("2e3", "2000")', 'equalText("2e3", "2000")', 'equalText("B", ["A", "B", "C"])'], seealso: ["compare", "compareNatural", "compareText", "equal"] }, dd = { name: "larger", category: "Relational", syntax: ["x > y", "larger(x, y)"], description: "Check if value x is larger than y. Returns true if x is larger than y, and false if not. Comparing a value with NaN returns false.", examples: ["2 > 3", "5 > 2*2", "a = 3.3", "b = 6-2.8", "(a > b)", "(b < a)", "5 cm > 2 inch"], seealso: ["equal", "unequal", "smaller", "smallerEq", "largerEq", "compare"] }, hd = { name: "largerEq", category: "Relational", syntax: ["x >= y", "largerEq(x, y)"], description: "Check if value x is larger or equal to y. Returns true if x is larger or equal to y, and false if not.", examples: ["2 >= 1+1", "2 > 1+1", "a = 3.2", "b = 6-2.8", "(a >= b)"], seealso: ["equal", "unequal", "smallerEq", "smaller", "compare"] }, vd = { name: "smaller", category: "Relational", syntax: ["x < y", "smaller(x, y)"], description: "Check if value x is smaller than value y. Returns true if x is smaller than y, and false if not. Comparing a value with NaN returns false.", examples: ["2 < 3", "5 < 2*2", "a = 3.3", "b = 6-2.8", "(a < b)", "5 cm < 2 inch"], seealso: ["equal", "unequal", "larger", "smallerEq", "largerEq", "compare"] }, gd = { name: "smallerEq", category: "Relational", syntax: ["x <= y", "smallerEq(x, y)"], description: "Check if value x is smaller or equal to value y. Returns true if x is smaller than y, and false if not.", examples: ["2 <= 1+1", "2 < 1+1", "a = 3.2", "b = 6-2.8", "(a <= b)"], seealso: ["equal", "unequal", "larger", "smaller", "largerEq", "compare"] }, yd = { name: "unequal", category: "Relational", syntax: ["x != y", "unequal(x, y)"], description: "Check unequality of two values. Returns true if the values are unequal, and false if they are equal.", examples: ["2+2 != 3", "2+2 != 4", "a = 3.2", "b = 6-2.8", "a != b", "50cm != 0.5m", "5 cm != 2 inch"], seealso: ["equal", "smaller", "larger", "smallerEq", "largerEq", "compare", "deepEqual"] }, Dd = { name: "setCartesian", category: "Set", syntax: ["setCartesian(set1, set2)"], description: "Create the cartesian product of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays and the values will be sorted in ascending order before the operation.", examples: ["setCartesian([1, 2], [3, 4])"], seealso: ["setUnion", "setIntersect", "setDifference", "setPowerset"] }, bd = { name: "setDifference", category: "Set", syntax: ["setDifference(set1, set2)"], description: "Create the difference of two (multi)sets: every element of set1, that is not the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"], seealso: ["setUnion", "setIntersect", "setSymDifference"] }, xd = { name: "setDistinct", category: "Set", syntax: ["setDistinct(set)"], description: "Collect the distinct elements of a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.", examples: ["setDistinct([1, 1, 1, 2, 2, 3])"], seealso: ["setMultiplicity"] }, wd = { name: "setIntersect", category: "Set", syntax: ["setIntersect(set1, set2)"], description: "Create the intersection of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setIntersect([1, 2, 3, 4], [3, 4, 5, 6])", "setIntersect([[1, 2], [3, 4]], [[3, 4], [5, 6]])"], seealso: ["setUnion", "setDifference"] }, Nd = { name: "setIsSubset", category: "Set", syntax: ["setIsSubset(set1, set2)"], description: "Check whether a (multi)set is a subset of another (multi)set: every element of set1 is the element of set2. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setIsSubset([1, 2], [3, 4, 5, 6])", "setIsSubset([3, 4], [3, 4, 5, 6])"], seealso: ["setUnion", "setIntersect", "setDifference"] }, Ad = { name: "setMultiplicity", category: "Set", syntax: ["setMultiplicity(element, set)"], description: "Count the multiplicity of an element in a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.", examples: ["setMultiplicity(1, [1, 2, 2, 4])", "setMultiplicity(2, [1, 2, 2, 4])"], seealso: ["setDistinct", "setSize"] }, Cd = { name: "setPowerset", category: "Set", syntax: ["setPowerset(set)"], description: "Create the powerset of a (multi)set: the powerset contains very possible subsets of a (multi)set. A multi-dimension array will be converted to a single-dimension array before the operation.", examples: ["setPowerset([1, 2, 3])"], seealso: ["setCartesian"] }, Ed = { name: "setSize", category: "Set", syntax: ["setSize(set)", "setSize(set, unique)"], description: 'Count the number of elements of a (multi)set. When the second parameter "unique" is true, count only the unique values. A multi-dimension array will be converted to a single-dimension array before the operation.', examples: ["setSize([1, 2, 2, 4])", "setSize([1, 2, 2, 4], true)"], seealso: ["setUnion", "setIntersect", "setDifference"] }, Fd = { name: "setSymDifference", category: "Set", syntax: ["setSymDifference(set1, set2)"], description: "Create the symmetric difference of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setSymDifference([1, 2, 3, 4], [3, 4, 5, 6])", "setSymDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])"], seealso: ["setUnion", "setIntersect", "setDifference"] }, Bd = { name: "setUnion", category: "Set", syntax: ["setUnion(set1, set2)"], description: "Create the union of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.", examples: ["setUnion([1, 2, 3, 4], [3, 4, 5, 6])", "setUnion([[1, 2], [3, 4]], [[3, 4], [5, 6]])"], seealso: ["setIntersect", "setDifference"] }, Sd = { name: "zpk2tf", category: "Signal", syntax: ["zpk2tf(z, p, k)"], description: "Compute the transfer function of a zero-pole-gain model.", examples: ["zpk2tf([1, 2], [-1, -2], 1)", "zpk2tf([1, 2], [-1, -2])", "zpk2tf([1 - 3i, 2 + 2i], [-1, -2])"], seealso: [] }, Td = { name: "freqz", category: "Signal", syntax: ["freqz(b, a)", "freqz(b, a, w)"], description: "Calculates the frequency response of a filter given its numerator and denominator coefficients.", examples: ["freqz([1, 2], [1, 2, 3])", "freqz([1, 2], [1, 2, 3], [0, 1])", "freqz([1, 2], [1, 2, 3], 512)"], seealso: [] }, Md = { name: "erf", category: "Special", syntax: ["erf(x)"], description: "Compute the erf function of a value using a rational Chebyshev approximations for different intervals of x", examples: ["erf(0.2)", "erf(-0.5)", "erf(4)"], seealso: [] }, Od = { name: "zeta", category: "Special", syntax: ["zeta(s)"], description: "Compute the Riemann Zeta Function using an infinite series and Riemann's Functional Equation for the entire complex plane", examples: ["zeta(0.2)", "zeta(-0.5)", "zeta(4)"], seealso: [] }, $d = { name: "mad", category: "Statistics", syntax: ["mad(a, b, c, ...)", "mad(A)"], description: "Compute the median absolute deviation of a matrix or a list with values. The median absolute deviation is defined as the median of the absolute deviations from the median.", examples: ["mad(10, 20, 30)", "mad([1, 2, 3])"], seealso: ["mean", "median", "std", "abs"] }, kd = { name: "max", category: "Statistics", syntax: ["max(a, b, c, ...)", "max(A)", "max(A, dimension)"], description: "Compute the maximum value of a list of values. If any NaN values are found, the function yields the last NaN in the input.", examples: ["max(2, 3, 4, 1)", "max([2, 3, 4, 1])", "max([2, 5; 4, 3])", "max([2, 5; 4, 3], 1)", "max([2, 5; 4, 3], 2)", "max(2.7, 7.1, -4.5, 2.0, 4.1)", "min(2.7, 7.1, -4.5, 2.0, 4.1)"], seealso: ["mean", "median", "min", "prod", "std", "sum", "variance"] }, qd = { name: "mean", category: "Statistics", syntax: ["mean(a, b, c, ...)", "mean(A)", "mean(A, dimension)"], description: "Compute the arithmetic mean of a list of values.", examples: ["mean(2, 3, 4, 1)", "mean([2, 3, 4, 1])", "mean([2, 5; 4, 3])", "mean([2, 5; 4, 3], 1)", "mean([2, 5; 4, 3], 2)", "mean([1.0, 2.7, 3.2, 4.0])"], seealso: ["max", "median", "min", "prod", "std", "sum", "variance"] }, Pd = { name: "median", category: "Statistics", syntax: ["median(a, b, c, ...)", "median(A)"], description: "Compute the median of all values. The values are sorted and the middle value is returned. In case of an even number of values, the average of the two middle values is returned.", examples: ["median(5, 2, 7)", "median([3, -1, 5, 7])"], seealso: ["max", "mean", "min", "prod", "std", "sum", "variance", "quantileSeq"] }, Id = { name: "min", category: "Statistics", syntax: ["min(a, b, c, ...)", "min(A)", "min(A, dimension)"], description: "Compute the minimum value of a list of values. If any NaN values are found, the function yields the last NaN in the input.", examples: ["min(2, 3, 4, 1)", "min([2, 3, 4, 1])", "min([2, 5; 4, 3])", "min([2, 5; 4, 3], 1)", "min([2, 5; 4, 3], 2)", "min(2.7, 7.1, -4.5, 2.0, 4.1)", "max(2.7, 7.1, -4.5, 2.0, 4.1)"], seealso: ["max", "mean", "median", "prod", "std", "sum", "variance"] }, _d = { name: "mode", category: "Statistics", syntax: ["mode(a, b, c, ...)", "mode(A)", "mode(A, a, b, B, c, ...)"], description: "Computes the mode of all values as an array. In case mode being more than one, multiple values are returned in an array.", examples: ["mode(2, 1, 4, 3, 1)", "mode([1, 2.7, 3.2, 4, 2.7])", "mode(1, 4, 6, 1, 6)"], seealso: ["max", "mean", "min", "median", "prod", "std", "sum", "variance"] }, Rd = { name: "prod", category: "Statistics", syntax: ["prod(a, b, c, ...)", "prod(A)"], description: "Compute the product of all values.", examples: ["prod(2, 3, 4)", "prod([2, 3, 4])", "prod([2, 5; 4, 3])"], seealso: ["max", "mean", "min", "median", "min", "std", "sum", "variance"] }, jd = { name: "quantileSeq", category: "Statistics", syntax: ["quantileSeq(A, prob[, sorted])", "quantileSeq(A, [prob1, prob2, ...][, sorted])", "quantileSeq(A, N[, sorted])"], description: `Compute the prob order quantile of a matrix or a list with values. The sequence is sorted and the middle value is returned. Supported types of sequence values are: Number, BigNumber, Unit Supported types of probability are: Number, BigNumber. 

In case of a (multi dimensional) array or matrix, the prob order quantile of all elements will be calculated.`, examples: ["quantileSeq([3, -1, 5, 7], 0.5)", "quantileSeq([3, -1, 5, 7], [1/3, 2/3])", "quantileSeq([3, -1, 5, 7], 2)", "quantileSeq([-1, 3, 5, 7], 0.5, true)"], seealso: ["mean", "median", "min", "max", "prod", "std", "sum", "variance"] }, Ld = { name: "std", category: "Statistics", syntax: ["std(a, b, c, ...)", "std(A)", "std(A, dimension)", "std(A, normalization)", "std(A, dimension, normalization)"], description: 'Compute the standard deviation of all values, defined as std(A) = sqrt(variance(A)). Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".', examples: ["std(2, 4, 6)", "std([2, 4, 6, 8])", 'std([2, 4, 6, 8], "uncorrected")', 'std([2, 4, 6, 8], "biased")', "std([1, 2, 3; 4, 5, 6])"], seealso: ["max", "mean", "min", "median", "prod", "sum", "variance"] }, zd = { name: "cumsum", category: "Statistics", syntax: ["cumsum(a, b, c, ...)", "cumsum(A)"], description: "Compute the cumulative sum of all values.", examples: ["cumsum(2, 3, 4, 1)", "cumsum([2, 3, 4, 1])", "cumsum([1, 2; 3, 4])", "cumsum([1, 2; 3, 4], 1)", "cumsum([1, 2; 3, 4], 2)"], seealso: ["max", "mean", "median", "min", "prod", "std", "sum", "variance"] }, Ud = { name: "sum", category: "Statistics", syntax: ["sum(a, b, c, ...)", "sum(A)", "sum(A, dimension)"], description: "Compute the sum of all values.", examples: ["sum(2, 3, 4, 1)", "sum([2, 3, 4, 1])", "sum([2, 5; 4, 3])"], seealso: ["max", "mean", "median", "min", "prod", "std", "variance"] }, Wd = { name: "variance", category: "Statistics", syntax: ["variance(a, b, c, ...)", "variance(A)", "variance(A, dimension)", "variance(A, normalization)", "variance(A, dimension, normalization)"], description: 'Compute the variance of all values. Optional parameter normalization can be "unbiased" (default), "uncorrected", or "biased".', examples: ["variance(2, 4, 6)", "variance([2, 4, 6, 8])", 'variance([2, 4, 6, 8], "uncorrected")', 'variance([2, 4, 6, 8], "biased")', "variance([1, 2, 3; 4, 5, 6])"], seealso: ["max", "mean", "min", "median", "min", "prod", "std", "sum"] }, Hd = { name: "corr", category: "Statistics", syntax: ["corr(A,B)"], description: "Compute the correlation coefficient of a two list with values, For matrices, the matrix correlation coefficient is calculated.", examples: ["corr([2, 4, 6, 8],[1, 2, 3, 6])", "corr(matrix([[1, 2.2, 3, 4.8, 5], [1, 2, 3, 4, 5]]), matrix([[4, 5.3, 6.6, 7, 8], [1, 2, 3, 4, 5]]))"], seealso: ["max", "mean", "min", "median", "min", "prod", "std", "sum"] }, Zd = { name: "acos", category: "Trigonometry", syntax: ["acos(x)"], description: "Compute the inverse cosine of a value in radians.", examples: ["acos(0.5)", "acos(cos(2.3))"], seealso: ["cos", "atan", "asin"] }, Jd = { name: "acosh", category: "Trigonometry", syntax: ["acosh(x)"], description: "Calculate the hyperbolic arccos of a value, defined as `acosh(x) = ln(sqrt(x^2 - 1) + x)`.", examples: ["acosh(1.5)"], seealso: ["cosh", "asinh", "atanh"] }, Vd = { name: "acot", category: "Trigonometry", syntax: ["acot(x)"], description: "Calculate the inverse cotangent of a value.", examples: ["acot(0.5)", "acot(cot(0.5))", "acot(2)"], seealso: ["cot", "atan"] }, Xd = { name: "acoth", category: "Trigonometry", syntax: ["acoth(x)"], description: "Calculate the inverse hyperbolic tangent of a value, defined as `acoth(x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.", examples: ["acoth(2)", "acoth(0.5)"], seealso: ["acsch", "asech"] }, Gd = { name: "acsc", category: "Trigonometry", syntax: ["acsc(x)"], description: "Calculate the inverse cotangent of a value.", examples: ["acsc(2)", "acsc(csc(0.5))", "acsc(0.5)"], seealso: ["csc", "asin", "asec"] }, Qd = { name: "acsch", category: "Trigonometry", syntax: ["acsch(x)"], description: "Calculate the inverse hyperbolic cosecant of a value, defined as `acsch(x) = ln(1/x + sqrt(1/x^2 + 1))`.", examples: ["acsch(0.5)"], seealso: ["asech", "acoth"] }, Kd = { name: "asec", category: "Trigonometry", syntax: ["asec(x)"], description: "Calculate the inverse secant of a value.", examples: ["asec(0.5)", "asec(sec(0.5))", "asec(2)"], seealso: ["acos", "acot", "acsc"] }, Yd = { name: "asech", category: "Trigonometry", syntax: ["asech(x)"], description: "Calculate the inverse secant of a value.", examples: ["asech(0.5)"], seealso: ["acsch", "acoth"] }, eh = { name: "asin", category: "Trigonometry", syntax: ["asin(x)"], description: "Compute the inverse sine of a value in radians.", examples: ["asin(0.5)", "asin(sin(0.5))"], seealso: ["sin", "acos", "atan"] }, rh = { name: "asinh", category: "Trigonometry", syntax: ["asinh(x)"], description: "Calculate the hyperbolic arcsine of a value, defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.", examples: ["asinh(0.5)"], seealso: ["acosh", "atanh"] }, th = { name: "atan", category: "Trigonometry", syntax: ["atan(x)"], description: "Compute the inverse tangent of a value in radians.", examples: ["atan(0.5)", "atan(tan(0.5))"], seealso: ["tan", "acos", "asin"] }, nh = { name: "atan2", category: "Trigonometry", syntax: ["atan2(y, x)"], description: "Computes the principal value of the arc tangent of y/x in radians.", examples: ["atan2(2, 2) / pi", "angle = 60 deg in rad", "x = cos(angle)", "y = sin(angle)", "atan2(y, x)"], seealso: ["sin", "cos", "tan"] }, ah = { name: "atanh", category: "Trigonometry", syntax: ["atanh(x)"], description: "Calculate the hyperbolic arctangent of a value, defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.", examples: ["atanh(0.5)"], seealso: ["acosh", "asinh"] }, ih = { name: "cos", category: "Trigonometry", syntax: ["cos(x)"], description: "Compute the cosine of x in radians.", examples: ["cos(2)", "cos(pi / 4) ^ 2", "cos(180 deg)", "cos(60 deg)", "sin(0.2)^2 + cos(0.2)^2"], seealso: ["acos", "sin", "tan"] }, oh = { name: "cosh", category: "Trigonometry", syntax: ["cosh(x)"], description: "Compute the hyperbolic cosine of x in radians.", examples: ["cosh(0.5)"], seealso: ["sinh", "tanh", "coth"] }, sh = { name: "cot", category: "Trigonometry", syntax: ["cot(x)"], description: "Compute the cotangent of x in radians. Defined as 1/tan(x)", examples: ["cot(2)", "1 / tan(2)"], seealso: ["sec", "csc", "tan"] }, uh = { name: "coth", category: "Trigonometry", syntax: ["coth(x)"], description: "Compute the hyperbolic cotangent of x in radians.", examples: ["coth(2)", "1 / tanh(2)"], seealso: ["sech", "csch", "tanh"] }, ch = { name: "csc", category: "Trigonometry", syntax: ["csc(x)"], description: "Compute the cosecant of x in radians. Defined as 1/sin(x)", examples: ["csc(2)", "1 / sin(2)"], seealso: ["sec", "cot", "sin"] }, lh = { name: "csch", category: "Trigonometry", syntax: ["csch(x)"], description: "Compute the hyperbolic cosecant of x in radians. Defined as 1/sinh(x)", examples: ["csch(2)", "1 / sinh(2)"], seealso: ["sech", "coth", "sinh"] }, fh = { name: "sec", category: "Trigonometry", syntax: ["sec(x)"], description: "Compute the secant of x in radians. Defined as 1/cos(x)", examples: ["sec(2)", "1 / cos(2)"], seealso: ["cot", "csc", "cos"] }, mh = { name: "sech", category: "Trigonometry", syntax: ["sech(x)"], description: "Compute the hyperbolic secant of x in radians. Defined as 1/cosh(x)", examples: ["sech(2)", "1 / cosh(2)"], seealso: ["coth", "csch", "cosh"] }, ph = { name: "sin", category: "Trigonometry", syntax: ["sin(x)"], description: "Compute the sine of x in radians.", examples: ["sin(2)", "sin(pi / 4) ^ 2", "sin(90 deg)", "sin(30 deg)", "sin(0.2)^2 + cos(0.2)^2"], seealso: ["asin", "cos", "tan"] }, dh = { name: "sinh", category: "Trigonometry", syntax: ["sinh(x)"], description: "Compute the hyperbolic sine of x in radians.", examples: ["sinh(0.5)"], seealso: ["cosh", "tanh"] }, hh = { name: "tan", category: "Trigonometry", syntax: ["tan(x)"], description: "Compute the tangent of x in radians.", examples: ["tan(0.5)", "sin(0.5) / cos(0.5)", "tan(pi / 4)", "tan(45 deg)"], seealso: ["atan", "sin", "cos"] }, vh = { name: "tanh", category: "Trigonometry", syntax: ["tanh(x)"], description: "Compute the hyperbolic tangent of x in radians.", examples: ["tanh(0.5)", "sinh(0.5) / cosh(0.5)"], seealso: ["sinh", "cosh"] }, gh = { name: "to", category: "Units", syntax: ["x to unit", "to(x, unit)"], description: "Change the unit of a value.", examples: ["5 inch to cm", "3.2kg to g", "16 bytes in bits"], seealso: [] }, yh = { name: "toBest", category: "Units", syntax: ["toBest(x)", "toBest(x, unitList)", "toBest(x, unitList, options)"], description: "Converts to the most appropriate display unit.", examples: ['toBest(unit(5000, "m"))', 'toBest(unit(3500000, "W"))', 'toBest(unit(0.000000123, "A"))', 'toBest(unit(10, "m"), "cm")', 'toBest(unit(10, "m"), "mm,km", {offset: 1.5})'], seealso: [] }, Dh = { name: "bin", category: "Utils", syntax: ["bin(value)"], description: "Format a number as binary", examples: ["bin(2)"], seealso: ["oct", "hex"] }, bh = { name: "clone", category: "Utils", syntax: ["clone(x)"], description: "Clone a variable. Creates a copy of primitive variables, and a deep copy of matrices", examples: ["clone(3.5)", "clone(2 - 4i)", "clone(45 deg)", "clone([1, 2; 3, 4])", 'clone("hello world")'], seealso: [] }, xh = { name: "format", category: "Utils", syntax: ["format(value)", "format(value, precision)"], description: "Format a value of any type as string.", examples: ["format(2.3)", "format(3 - 4i)", "format([])", "format(pi, 3)"], seealso: ["print"] }, wh = { name: "hasNumericValue", category: "Utils", syntax: ["hasNumericValue(x)"], description: "Test whether a value is an numeric value. In case of a string, true is returned if the string contains a numeric value.", examples: ["hasNumericValue(2)", 'hasNumericValue("2")', 'isNumeric("2")', "hasNumericValue(0)", "hasNumericValue(bignumber(500))", "hasNumericValue(fraction(0.125))", "hasNumericValue(2 + 3i)", 'hasNumericValue([2.3, "foo", false])'], seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN", "isNumeric"] }, Nh = { name: "hex", category: "Utils", syntax: ["hex(value)"], description: "Format a number as hexadecimal", examples: ["hex(240)"], seealso: ["bin", "oct"] }, Ah = { name: "isInteger", category: "Utils", syntax: ["isInteger(x)"], description: "Test whether a value is an integer number.", examples: ["isInteger(2)", "isInteger(3.5)", "isInteger([3, 0.5, -2])"], seealso: ["isNegative", "isNumeric", "isPositive", "isZero"] }, Ch = { name: "isNaN", category: "Utils", syntax: ["isNaN(x)"], description: "Test whether a value is NaN (not a number)", examples: ["isNaN(2)", "isNaN(0 / 0)", "isNaN(NaN)", "isNaN(Infinity)"], seealso: ["isNegative", "isNumeric", "isPositive", "isZero", "isFinite", "isBounded"] }, Eh = { name: "isBounded", category: "Utils", syntax: ["isBounded(x)"], description: "Test whether a value or its entries are bounded.", examples: ["isBounded(Infinity)", "isBounded(bigint(3))", "isBounded([3, -Infinity, -3])"], seealso: ["isFinite", "isNumeric", "isNaN", "isNegative", "isPositive"] }, Fh = { name: "isFinite", category: "Utils", syntax: ["isFinite(x)"], description: "Test whether a value is finite, elementwise on collections.", examples: ["isFinite(Infinity)", "isFinite(bigint(3))", "isFinite([3, -Infinity, -3])"], seealso: ["isBounded", "isNumeric", "isNaN", "isNegative", "isPositive"] }, Bh = { name: "isNegative", category: "Utils", syntax: ["isNegative(x)"], description: "Test whether a value is negative: smaller than zero.", examples: ["isNegative(2)", "isNegative(0)", "isNegative(-4)", "isNegative([3, 0.5, -2])"], seealso: ["isInteger", "isNumeric", "isPositive", "isZero"] }, Sh = { name: "isNumeric", category: "Utils", syntax: ["isNumeric(x)"], description: "Test whether a value is a numeric value. Returns true when the input is a number, BigNumber, Fraction, or boolean.", examples: ["isNumeric(2)", 'isNumeric("2")', 'hasNumericValue("2")', "isNumeric(0)", "isNumeric(bignumber(500))", "isNumeric(fraction(0.125))", "isNumeric(2 + 3i)", 'isNumeric([2.3, "foo", false])'], seealso: ["isInteger", "isZero", "isNegative", "isPositive", "isNaN", "hasNumericValue", "isFinite", "isBounded"] }, Th = { name: "isPositive", category: "Utils", syntax: ["isPositive(x)"], description: "Test whether a value is positive: larger than zero.", examples: ["isPositive(2)", "isPositive(0)", "isPositive(-4)", "isPositive([3, 0.5, -2])"], seealso: ["isInteger", "isNumeric", "isNegative", "isZero"] }, Mh = { name: "isPrime", category: "Utils", syntax: ["isPrime(x)"], description: "Test whether a value is prime: has no divisors other than itself and one.", examples: ["isPrime(3)", "isPrime(-2)", "isPrime([2, 17, 100])"], seealso: ["isInteger", "isNumeric", "isNegative", "isZero"] }, Oh = { name: "isZero", category: "Utils", syntax: ["isZero(x)"], description: "Test whether a value is zero.", examples: ["isZero(2)", "isZero(0)", "isZero(-4)", "isZero([3, 0, -2, 0])"], seealso: ["isInteger", "isNumeric", "isNegative", "isPositive"] }, $h = { name: "numeric", category: "Utils", syntax: ["numeric(x)"], description: "Convert a numeric input to a specific numeric type: number, BigNumber, bigint, or Fraction.", examples: ['numeric("4")', 'numeric("4", "number")', 'numeric("4", "bigint")', 'numeric("4", "BigNumber")', 'numeric("4", "Fraction")', 'numeric(4, "Fraction")', 'numeric(fraction(2, 5), "number")'], seealso: ["number", "bigint", "fraction", "bignumber", "string", "format"] }, kh = { name: "oct", category: "Utils", syntax: ["oct(value)"], description: "Format a number as octal", examples: ["oct(56)"], seealso: ["bin", "hex"] }, qh = { name: "print", category: "Utils", syntax: ["print(template, values)", "print(template, values, precision)"], description: "Interpolate values into a string template.", examples: ['print("Lucy is $age years old", {age: 5})', 'print("The value of pi is $pi", {pi: pi}, 3)', 'print("Hello, $user.name!", {user: {name: "John"}})', 'print("Values: $1, $2, $3", [6, 9, 4])'], seealso: ["format"] }, Ph = { name: "typeOf", category: "Utils", syntax: ["typeOf(x)"], description: "Get the type of a variable.", examples: ["typeOf(3.5)", "typeOf(2 - 4i)", "typeOf(45 deg)", 'typeOf("hello world")'], seealso: ["getMatrixDataType"] }, Ih = { name: "solveODE", category: "Numeric", syntax: ["solveODE(func, tspan, y0)", "solveODE(func, tspan, y0, options)"], description: "Numerical Integration of Ordinary Differential Equations.", examples: ["f(t,y) = y", "tspan = [0, 4]", "solveODE(f, tspan, 1)", "solveODE(f, tspan, [1, 2])", 'solveODE(f, tspan, 1, { method:"RK23", maxStep:0.1 })'], seealso: ["derivative", "simplifyCore"] }, _h = { bignumber: yf, bigint: Df, boolean: bf, complex: xf, createUnit: wf, fraction: Nf, index: Af, matrix: Cf, number: Ef, sparse: Ff, splitUnit: Bf, string: Sf, unit: Tf, e: Qa, E: Qa, false: tf, i: nf, Infinity: af, LN2: sf, LN10: of, LOG2E: cf, LOG10E: uf, NaN: lf, null: ff, pi: Ka, PI: Ka, phi: mf, SQRT1_2: pf, SQRT2: df, tau: hf, true: vf, version: gf, speedOfLight: { description: "Speed of light in vacuum", examples: ["speedOfLight"] }, gravitationConstant: { description: "Newtonian constant of gravitation", examples: ["gravitationConstant"] }, planckConstant: { description: "Planck constant", examples: ["planckConstant"] }, reducedPlanckConstant: { description: "Reduced Planck constant", examples: ["reducedPlanckConstant"] }, magneticConstant: { description: "Magnetic constant (vacuum permeability)", examples: ["magneticConstant"] }, electricConstant: { description: "Electric constant (vacuum permeability)", examples: ["electricConstant"] }, vacuumImpedance: { description: "Characteristic impedance of vacuum", examples: ["vacuumImpedance"] }, coulomb: { description: "Coulomb's constant. Deprecated in favor of coulombConstant", examples: ["coulombConstant"] }, coulombConstant: { description: "Coulomb's constant", examples: ["coulombConstant"] }, elementaryCharge: { description: "Elementary charge", examples: ["elementaryCharge"] }, bohrMagneton: { description: "Bohr magneton", examples: ["bohrMagneton"] }, conductanceQuantum: { description: "Conductance quantum", examples: ["conductanceQuantum"] }, inverseConductanceQuantum: { description: "Inverse conductance quantum", examples: ["inverseConductanceQuantum"] }, magneticFluxQuantum: { description: "Magnetic flux quantum", examples: ["magneticFluxQuantum"] }, nuclearMagneton: { description: "Nuclear magneton", examples: ["nuclearMagneton"] }, klitzing: { description: "Von Klitzing constant", examples: ["klitzing"] }, bohrRadius: { description: "Bohr radius", examples: ["bohrRadius"] }, classicalElectronRadius: { description: "Classical electron radius", examples: ["classicalElectronRadius"] }, electronMass: { description: "Electron mass", examples: ["electronMass"] }, fermiCoupling: { description: "Fermi coupling constant", examples: ["fermiCoupling"] }, fineStructure: { description: "Fine-structure constant", examples: ["fineStructure"] }, hartreeEnergy: { description: "Hartree energy", examples: ["hartreeEnergy"] }, protonMass: { description: "Proton mass", examples: ["protonMass"] }, deuteronMass: { description: "Deuteron Mass", examples: ["deuteronMass"] }, neutronMass: { description: "Neutron mass", examples: ["neutronMass"] }, quantumOfCirculation: { description: "Quantum of circulation", examples: ["quantumOfCirculation"] }, rydberg: { description: "Rydberg constant", examples: ["rydberg"] }, thomsonCrossSection: { description: "Thomson cross section", examples: ["thomsonCrossSection"] }, weakMixingAngle: { description: "Weak mixing angle", examples: ["weakMixingAngle"] }, efimovFactor: { description: "Efimov factor", examples: ["efimovFactor"] }, atomicMass: { description: "Atomic mass constant", examples: ["atomicMass"] }, avogadro: { description: "Avogadro's number", examples: ["avogadro"] }, boltzmann: { description: "Boltzmann constant", examples: ["boltzmann"] }, faraday: { description: "Faraday constant", examples: ["faraday"] }, firstRadiation: { description: "First radiation constant", examples: ["firstRadiation"] }, loschmidt: { description: "Loschmidt constant at T=273.15 K and p=101.325 kPa", examples: ["loschmidt"] }, gasConstant: { description: "Gas constant", examples: ["gasConstant"] }, molarPlanckConstant: { description: "Molar Planck constant", examples: ["molarPlanckConstant"] }, molarVolume: { description: "Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa", examples: ["molarVolume"] }, sackurTetrode: { description: "Sackur-Tetrode constant at T=1 K and p=101.325 kPa", examples: ["sackurTetrode"] }, secondRadiation: { description: "Second radiation constant", examples: ["secondRadiation"] }, stefanBoltzmann: { description: "Stefan-Boltzmann constant", examples: ["stefanBoltzmann"] }, wienDisplacement: { description: "Wien displacement law constant", examples: ["wienDisplacement"] }, molarMass: { description: "Molar mass constant", examples: ["molarMass"] }, molarMassC12: { description: "Molar mass constant of carbon-12", examples: ["molarMassC12"] }, gravity: { description: "Standard acceleration of gravity (standard acceleration of free-fall on Earth)", examples: ["gravity"] }, planckLength: { description: "Planck length", examples: ["planckLength"] }, planckMass: { description: "Planck mass", examples: ["planckMass"] }, planckTime: { description: "Planck time", examples: ["planckTime"] }, planckCharge: { description: "Planck charge", examples: ["planckCharge"] }, planckTemperature: { description: "Planck temperature", examples: ["planckTemperature"] }, derivative: kf, lsolve: Pf, lsolveAll: If, lup: _f, lusolve: Rf, leafCount: qf, polynomialRoot: jf, resolve: Uf, simplify: Wf, simplifyConstant: Hf, simplifyCore: Zf, symbolicEqual: Vf, rationalize: zf, slu: Jf, usolve: Xf, usolveAll: Gf, qr: Lf, abs: Qf, add: Kf, cbrt: Yf, ceil: em, cube: rm, divide: tm, dotDivide: nm, dotMultiply: am, dotPow: im, exp: om, expm: sm, expm1: um, fix: cm, floor: lm, gcd: fm, hypot: mm, lcm: dm, log: hm, log2: ym, log1p: gm, log10: vm, mod: Dm, multiply: bm, norm: xm, nthRoot: wm, nthRoots: Nm, pow: Am, round: Cm, sign: Em, sqrt: Fm, sqrtm: Bm, square: Om, subtract: $m, unaryMinus: km, unaryPlus: qm, xgcd: Pm, invmod: pm, bitAnd: Im, bitNot: _m, bitOr: Rm, bitXor: jm, leftShift: Lm, rightArithShift: zm, rightLogShift: Um, bellNumbers: Wm, catalan: Hm, composition: Zm, stirlingS2: Jm, config: Mf, import: Of, typed: $f, arg: Vm, conj: Xm, re: Qm, im: Gm, evaluate: Km, help: tp, parse: ep, parser: Ym, compile: rp, distance: np, intersect: ap, and: ip, not: op, nullish: sp, or: up, xor: cp, mapSlices: lp, concat: mp, count: pp, cross: dp, column: fp, ctranspose: hp, det: vp, diag: gp, diff: yp, dot: Dp, getMatrixDataType: Ap, identity: Cp, filter: xp, flatten: wp, forEach: Np, inv: Ep, pinv: Fp, eigs: bp, kron: Bp, matrixFromFunction: Mp, matrixFromRows: Op, matrixFromColumns: Tp, map: Sp, ones: $p, partitionSelect: kp, range: qp, resize: Ip, reshape: Pp, rotate: _p, rotationMatrix: Rp, row: jp, size: Lp, sort: zp, squeeze: Up, subset: Wp, trace: Hp, transpose: Zp, zeros: Jp, fft: Vp, ifft: Xp, sylvester: Sm, schur: Tm, lyap: Mm, solveODE: Ih, bernoulli: Gp, combinations: Qp, combinationsWithRep: Kp, factorial: Yp, gamma: ed, kldivergence: td, lgamma: rd, multinomial: nd, permutations: ad, pickRandom: id, random: od, randomInt: sd, compare: ud, compareNatural: cd, compareText: ld, deepEqual: fd, equal: md, equalText: pd, larger: dd, largerEq: hd, smaller: vd, smallerEq: gd, unequal: yd, setCartesian: Dd, setDifference: bd, setDistinct: xd, setIntersect: wd, setIsSubset: Nd, setMultiplicity: Ad, setPowerset: Cd, setSize: Ed, setSymDifference: Fd, setUnion: Bd, zpk2tf: Sd, freqz: Td, erf: Md, zeta: Od, cumsum: zd, mad: $d, max: kd, mean: qd, median: Pd, min: Id, mode: _d, prod: Rd, quantileSeq: jd, std: Ld, sum: Ud, variance: Wd, corr: Hd, acos: Zd, acosh: Jd, acot: Vd, acoth: Xd, acsc: Gd, acsch: Qd, asec: Kd, asech: Yd, asin: eh, asinh: rh, atan: th, atanh: ah, atan2: nh, cos: ih, cosh: oh, cot: sh, coth: uh, csc: ch, csch: lh, sec: fh, sech: mh, sin: ph, sinh: dh, tan: hh, tanh: vh, to: gh, toBest: yh, clone: bh, format: xh, bin: Dh, oct: kh, hex: Nh, isNaN: Ch, isBounded: Eh, isFinite: Fh, isInteger: Ah, isNegative: Bh, isNumeric: Sh, hasNumericValue: wh, isPositive: Th, isPrime: Mh, isZero: Oh, print: qh, typeOf: Ph, numeric: $h }, Ya = "help", Rh = ["typed", "mathWithTransform", "Help"], jh = R(Ya, Rh, (e) => {
  var { typed: r, mathWithTransform: a, Help: n } = e;
  return r(Ya, { any: function(t) {
    var o, u = t;
    if (typeof t != "string") {
      for (o in a) if (ye(a, o) && t === a[o]) {
        u = o;
        break;
      }
    }
    var c = er(_h, u);
    if (!c) {
      var s = typeof u == "function" ? u.name : u;
      throw new Error('No documentation found on "' + s + '"');
    }
    return new n(c);
  } });
}), ei = "chain", Lh = ["typed", "Chain"], zh = R(ei, Lh, (e) => {
  var { typed: r, Chain: a } = e;
  return r(ei, { "": function() {
    return new a();
  }, any: function(i) {
    return new a(i);
  } });
}), Uh = "resolve", Wh = ["typed", "parse", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode"], Hh = R(Uh, Wh, (e) => {
  var { typed: r, parse: a, ConstantNode: n, FunctionNode: i, OperatorNode: t, ParenthesisNode: o } = e;
  function u(c, s) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new Set();
    if (!s) return c;
    if (ze(c)) {
      if (l.has(c.name)) {
        var m = Array.from(l).join(", ");
        throw new ReferenceError("recursive loop of variable definitions among {".concat(m, "}"));
      }
      var p = s.get(c.name);
      if (Fe(p)) {
        var h = new Set(l);
        return h.add(c.name), u(p, s, h);
      } else return typeof p == "number" ? a(String(p)) : p !== void 0 ? new n(p) : c;
    } else if (qe(c)) {
      var y = c.args.map(function(E) {
        return u(E, s, l);
      });
      return new t(c.op, c.fn, y, c.implicit);
    } else {
      if (Br(c)) return new o(u(c.content, s, l));
      if (Lr(c)) {
        var A = c.args.map(function(E) {
          return u(E, s, l);
        });
        return new i(c.name, A);
      }
    }
    return c.map((E) => u(E, s, l));
  }
  return r("resolve", { Node: u, "Node, Map | null | undefined": u, "Node, Object": (c, s) => u(c, ct(s)), "Array | Matrix": r.referToSelf((c) => (s) => s.map((l) => c(l))), "Array | Matrix, null | undefined": r.referToSelf((c) => (s) => s.map((l) => c(l))), "Array, Object": r.referTo("Array,Map", (c) => (s, l) => c(s, ct(l))), "Matrix, Object": r.referTo("Matrix,Map", (c) => (s, l) => c(s, ct(l))), "Array | Matrix, Map": r.referToSelf((c) => (s, l) => s.map((m) => c(m, l))) });
});
function ri(e) {
  return Ne(e) || qe(e) && e.isUnary() && Ne(e.args[0]);
}
function wn(e) {
  return !!(Ne(e) || (Lr(e) || qe(e)) && e.args.every(wn) || Br(e) && wn(e.content));
}
function ti(e, r) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function Xn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ti(Object(a), true).forEach(function(n) {
      Ue(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ti(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
var Zh = "simplifyUtil", Jh = ["FunctionNode", "OperatorNode", "SymbolNode"], Na = R(Zh, Jh, (e) => {
  var { FunctionNode: r, OperatorNode: a, SymbolNode: n } = e, i = true, t = false, o = "defaultF", u = { add: { trivial: i, total: i, commutative: i, associative: i }, unaryPlus: { trivial: i, total: i, commutative: i, associative: i }, subtract: { trivial: t, total: i, commutative: t, associative: t }, multiply: { trivial: i, total: i, commutative: i, associative: i }, divide: { trivial: t, total: i, commutative: t, associative: t }, paren: { trivial: i, total: i, commutative: i, associative: t }, defaultF: { trivial: t, total: i, commutative: t, associative: t } }, c = { divide: { total: t }, log: { total: t } }, s = { subtract: { total: t }, abs: { trivial: i }, log: { total: i } };
  function l(d, x) {
    var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u, w = o;
    if (typeof d == "string" ? w = d : qe(d) ? w = d.fn.toString() : Lr(d) ? w = d.name : Br(d) && (w = "paren"), ye(g, w)) {
      var F = g[w];
      if (ye(F, x)) return F[x];
      if (ye(u, w)) return u[w][x];
    }
    if (ye(g, o)) {
      var $ = g[o];
      return ye($, x) ? $[x] : u[o][x];
    }
    if (ye(u, w)) {
      var Z = u[w];
      if (ye(Z, x)) return Z[x];
    }
    return u[o][x];
  }
  function m(d) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u;
    return l(d, "commutative", x);
  }
  function p(d) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u;
    return l(d, "associative", x);
  }
  function h(d, x) {
    var g = Xn({}, d);
    for (var w in x) ye(d, w) ? g[w] = Xn(Xn({}, x[w]), d[w]) : g[w] = x[w];
    return g;
  }
  function y(d, x) {
    if (!d.args || d.args.length === 0) return d;
    d.args = A(d, x);
    for (var g = 0; g < d.args.length; g++) y(d.args[g], x);
  }
  function A(d, x) {
    var g, w = [], F = function(Z) {
      for (var _ = 0; _ < Z.args.length; _++) {
        var q = Z.args[_];
        qe(q) && g === q.op ? F(q) : w.push(q);
      }
    };
    return p(d, x) ? (g = d.op, F(d), w) : d.args;
  }
  function E(d, x) {
    if (!(!d.args || d.args.length === 0)) {
      for (var g = N(d), w = d.args.length, F = 0; F < w; F++) E(d.args[F], x);
      if (w > 2 && p(d, x)) {
        for (var $ = d.args.pop(); d.args.length > 0; ) $ = g([d.args.pop(), $]);
        d.args = $.args;
      }
    }
  }
  function C(d, x) {
    if (!(!d.args || d.args.length === 0)) {
      for (var g = N(d), w = d.args.length, F = 0; F < w; F++) C(d.args[F], x);
      if (w > 2 && p(d, x)) {
        for (var $ = d.args.shift(); d.args.length > 0; ) $ = g([$, d.args.shift()]);
        d.args = $.args;
      }
    }
  }
  function N(d) {
    return qe(d) ? function(x) {
      try {
        return new a(d.op, d.fn, x, d.implicit);
      } catch (g) {
        return console.error(g), [];
      }
    } : function(x) {
      return new r(new n(d.name), x);
    };
  }
  return { createMakeNodeFunction: N, hasProperty: l, isCommutative: m, isAssociative: p, mergeContext: h, flatten: y, allChildren: A, unflattenr: E, unflattenl: C, defaultContext: u, realContext: c, positiveContext: s };
}), Vh = "simplify", Xh = ["typed", "parse", "equal", "resolve", "simplifyConstant", "simplifyCore", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "SymbolNode", "replacer"], Gh = R(Vh, Xh, (e) => {
  var { typed: r, parse: a, equal: n, resolve: i, simplifyConstant: t, simplifyCore: o, AccessorNode: u, ArrayNode: c, ConstantNode: s, FunctionNode: l, IndexNode: m, ObjectNode: p, OperatorNode: h, ParenthesisNode: y, SymbolNode: A, replacer: E } = e, { hasProperty: C, isCommutative: N, isAssociative: d, mergeContext: x, flatten: g, unflattenr: w, unflattenl: F, createMakeNodeFunction: $, defaultContext: Z, realContext: _, positiveContext: q } = Na({ FunctionNode: l, OperatorNode: h, SymbolNode: A });
  r.addConversion({ from: "Object", to: "Map", convert: ct });
  var J = r("simplify", { Node: ee, "Node, Map": (I, M) => ee(I, false, M), "Node, Map, Object": (I, M, L) => ee(I, false, M, L), "Node, Array": ee, "Node, Array, Map": ee, "Node, Array, Map, Object": ee });
  r.removeConversion({ from: "Object", to: "Map", convert: ct }), J.defaultContext = Z, J.realContext = _, J.positiveContext = q;
  function P(I) {
    return I.transform(function(M) {
      return Br(M) ? P(M.content) : M;
    });
  }
  var G = { true: true, false: true, e: true, i: true, Infinity: true, LN2: true, LN10: true, LOG2E: true, LOG10E: true, NaN: true, phi: true, pi: true, SQRT1_2: true, SQRT2: true, tau: true };
  J.rules = [o, { l: "log(e)", r: "1" }, { s: "n-n1 -> n+-n1", assuming: { subtract: { total: true } } }, { s: "n-n -> 0", assuming: { subtract: { total: false } } }, { s: "-(cl*v) -> v * (-cl)", assuming: { multiply: { commutative: true }, subtract: { total: true } } }, { s: "-(cl*v) -> (-cl) * v", assuming: { multiply: { commutative: false }, subtract: { total: true } } }, { s: "-(v*cl) -> v * (-cl)", assuming: { multiply: { commutative: false }, subtract: { total: true } } }, { l: "-(n1/n2)", r: "-n1/n2" }, { l: "-v", r: "v * (-1)" }, { l: "(n1 + n2)*(-1)", r: "n1*(-1) + n2*(-1)", repeat: true }, { l: "n/n1^n2", r: "n*n1^-n2" }, { l: "n/n1", r: "n*n1^-1" }, { s: "(n1*n2)^n3 -> n1^n3 * n2^n3", assuming: { multiply: { commutative: true } } }, { s: "(n1*n2)^(-1) -> n2^(-1) * n1^(-1)", assuming: { multiply: { commutative: false } } }, { s: "(n ^ n1) ^ n2 -> n ^ (n1 * n2)", assuming: { divide: { total: true } } }, { l: " vd   * ( vd   * n1 + n2)", r: "vd^2       * n1 +  vd   * n2" }, { s: " vd   * (vd^n4 * n1 + n2)   ->  vd^(1+n4)  * n1 +  vd   * n2", assuming: { divide: { total: true } } }, { s: "vd^n3 * ( vd   * n1 + n2)   ->  vd^(n3+1)  * n1 + vd^n3 * n2", assuming: { divide: { total: true } } }, { s: "vd^n3 * (vd^n4 * n1 + n2)   ->  vd^(n3+n4) * n1 + vd^n3 * n2", assuming: { divide: { total: true } } }, { l: "n*n", r: "n^2" }, { s: "n * n^n1 -> n^(n1+1)", assuming: { divide: { total: true } } }, { s: "n^n1 * n^n2 -> n^(n1+n2)", assuming: { divide: { total: true } } }, t, { s: "n+n -> 2*n", assuming: { add: { total: true } } }, { l: "n+-n", r: "0" }, { l: "vd*n + vd", r: "vd*(n+1)" }, { l: "n3*n1 + n3*n2", r: "n3*(n1+n2)" }, { l: "n3^(-n4)*n1 +   n3  * n2", r: "n3^(-n4)*(n1 + n3^(n4+1) *n2)" }, { l: "n3^(-n4)*n1 + n3^n5 * n2", r: "n3^(-n4)*(n1 + n3^(n4+n5)*n2)" }, { s: "n*vd + vd -> (n+1)*vd", assuming: { multiply: { commutative: false } } }, { s: "vd + n*vd -> (1+n)*vd", assuming: { multiply: { commutative: false } } }, { s: "n1*n3 + n2*n3 -> (n1+n2)*n3", assuming: { multiply: { commutative: false } } }, { s: "n^n1 * n -> n^(n1+1)", assuming: { divide: { total: true }, multiply: { commutative: false } } }, { s: "n1*n3^(-n4) + n2 * n3    -> (n1 + n2*n3^(n4 +  1))*n3^(-n4)", assuming: { multiply: { commutative: false } } }, { s: "n1*n3^(-n4) + n2 * n3^n5 -> (n1 + n2*n3^(n4 + n5))*n3^(-n4)", assuming: { multiply: { commutative: false } } }, { l: "n*cd + cd", r: "(n+1)*cd" }, { s: "cd*n + cd -> cd*(n+1)", assuming: { multiply: { commutative: false } } }, { s: "cd + cd*n -> cd*(1+n)", assuming: { multiply: { commutative: false } } }, t, { s: "(-n)*n1 -> -(n*n1)", assuming: { subtract: { total: true } } }, { s: "n1*(-n) -> -(n1*n)", assuming: { subtract: { total: true }, multiply: { commutative: false } } }, { s: "ce+ve -> ve+ce", assuming: { add: { commutative: true } }, imposeContext: { add: { commutative: false } } }, { s: "vd*cd -> cd*vd", assuming: { multiply: { commutative: true } }, imposeContext: { multiply: { commutative: false } } }, { l: "n+-n1", r: "n-n1" }, { l: "n+-(n1)", r: "n-(n1)" }, { s: "n*(n1^-1) -> n/n1", assuming: { multiply: { commutative: true } } }, { s: "n*n1^-n2 -> n/n1^n2", assuming: { multiply: { commutative: true } } }, { s: "n^-1 -> 1/n", assuming: { multiply: { commutative: true } } }, { l: "n^1", r: "n" }, { s: "n*(n1/n2) -> (n*n1)/n2", assuming: { multiply: { associative: true } } }, { s: "n-(n1+n2) -> n-n1-n2", assuming: { addition: { associative: true, commutative: true } } }, { l: "1*n", r: "n", imposeContext: { multiply: { commutative: true } } }, { s: "n1/(n2/n3) -> (n1*n3)/n2", assuming: { multiply: { associative: true } } }, { l: "n1/(-n2)", r: "-n1/n2" }];
  function ue(I, M) {
    var L = {};
    if (I.s) {
      var ie = I.s.split("->");
      if (ie.length === 2) L.l = ie[0], L.r = ie[1];
      else throw SyntaxError("Could not parse rule: " + I.s);
    } else L.l = I.l, L.r = I.r;
    L.l = P(a(L.l)), L.r = P(a(L.r));
    for (var re of ["imposeContext", "repeat", "assuming"]) re in I && (L[re] = I[re]);
    if (I.evaluate && (L.evaluate = a(I.evaluate)), d(L.l, M)) {
      var ce = !N(L.l, M), K;
      ce && (K = Y());
      var Ce = $(L.l), Ie = Y();
      L.expanded = {}, L.expanded.l = Ce([L.l, Ie]), g(L.expanded.l, M), w(L.expanded.l, M), L.expanded.r = Ce([L.r, Ie]), ce && (L.expandedNC1 = {}, L.expandedNC1.l = Ce([K, L.l]), L.expandedNC1.r = Ce([K, L.r]), L.expandedNC2 = {}, L.expandedNC2.l = Ce([K, L.expanded.l]), L.expandedNC2.r = Ce([K, L.expanded.r]));
    }
    return L;
  }
  function v(I, M) {
    for (var L = [], ie = 0; ie < I.length; ie++) {
      var re = I[ie], ce = void 0, K = typeof re;
      switch (K) {
        case "string":
          re = { s: re };
        case "object":
          ce = ue(re, M);
          break;
        case "function":
          ce = re;
          break;
        default:
          throw TypeError("Unsupported type of rule: " + K);
      }
      L.push(ce);
    }
    return L;
  }
  var S = 0;
  function Y() {
    return new A("_p" + S++);
  }
  function ee(I, M) {
    var L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qt(), ie = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, re = ie.consoleDebug;
    M = v(M || J.rules, ie.context);
    var ce = i(I, L);
    ce = P(ce);
    for (var K = {}, Ce = ce.toString({ parenthesis: "all" }); !K[Ce]; ) {
      K[Ce] = true, S = 0;
      var Ie = Ce;
      re && console.log("Working on: ", Ce);
      for (var _e = 0; _e < M.length; _e++) {
        var Je = "";
        if (typeof M[_e] == "function" ? (ce = M[_e](ce, ie), re && (Je = M[_e].name)) : (g(ce, ie.context), ce = de(ce, M[_e], ie.context), re && (Je = "".concat(M[_e].l.toString(), " -> ").concat(M[_e].r.toString()))), re) {
          var Ve = ce.toString({ parenthesis: "all" });
          Ve !== Ie && (console.log("Applying", Je, "produced", Ve), Ie = Ve);
        }
        F(ce, ie.context);
      }
      Ce = ce.toString({ parenthesis: "all" });
    }
    return ce;
  }
  function oe(I, M, L) {
    var ie = I;
    if (I) for (var re = 0; re < I.length; ++re) {
      var ce = de(I[re], M, L);
      ce !== I[re] && (ie === I && (ie = I.slice()), ie[re] = ce);
    }
    return ie;
  }
  function de(I, M, L) {
    if (M.assuming) {
      for (var ie in M.assuming) for (var re in M.assuming[ie]) if (C(ie, re, L) !== M.assuming[ie][re]) return I;
    }
    var ce = x(M.imposeContext, L), K = I;
    if (K instanceof h || K instanceof l) {
      var Ce = oe(K.args, M, L);
      Ce !== K.args && (K = K.clone(), K.args = Ce);
    } else if (K instanceof y) {
      if (K.content) {
        var Ie = de(K.content, M, L);
        Ie !== K.content && (K = new y(Ie));
      }
    } else if (K instanceof c) {
      var _e = oe(K.items, M, L);
      _e !== K.items && (K = new c(_e));
    } else if (K instanceof u) {
      var Je = K.object;
      K.object && (Je = de(K.object, M, L));
      var Ve = K.index;
      K.index && (Ve = de(K.index, M, L)), (Je !== K.object || Ve !== K.index) && (K = new u(Je, Ve));
    } else if (K instanceof m) {
      var ir = oe(K.dimensions, M, L);
      ir !== K.dimensions && (K = new m(ir));
    } else if (K instanceof p) {
      var qr = false, Pr = {};
      for (var D in K.properties) Pr[D] = de(K.properties[D], M, L), Pr[D] !== K.properties[D] && (qr = true);
      qr && (K = new p(Pr));
    }
    var B = M.r, O = ve(M.l, K, ce)[0];
    if (!O && M.expanded && (B = M.expanded.r, O = ve(M.expanded.l, K, ce)[0]), !O && M.expandedNC1 && (B = M.expandedNC1.r, O = ve(M.expandedNC1.l, K, ce)[0], O || (B = M.expandedNC2.r, O = ve(M.expandedNC2.l, K, ce)[0])), O) {
      var j = K.implicit;
      K = B.clone(), j && "implicit" in B && (K.implicit = true), K = K.transform(function(U) {
        return U.isSymbolNode && ye(O.placeholders, U.name) ? O.placeholders[U.name].clone() : U;
      });
    }
    return M.repeat && K !== I && (K = de(K, M, L)), K;
  }
  function te(I, M) {
    var L = [], ie, re, ce = $(I);
    if (N(I, M)) for (var K = 0; K < I.args.length; K++) re = I.args.slice(0), re.splice(K, 1), ie = re.length === 1 ? re[0] : ce(re), L.push(ce([I.args[K], ie]));
    else for (var Ce = 1; Ce < I.args.length; Ce++) {
      var Ie = I.args[0];
      Ce > 1 && (Ie = ce(I.args.slice(0, Ce))), re = I.args.slice(Ce), ie = re.length === 1 ? re[0] : ce(re), L.push(ce([Ie, ie]));
    }
    return L;
  }
  function W(I, M) {
    var L = { placeholders: {} };
    if (!I.placeholders && !M.placeholders) return L;
    if (I.placeholders) {
      if (!M.placeholders) return I;
    } else return M;
    for (var ie in I.placeholders) if (ye(I.placeholders, ie) && (L.placeholders[ie] = I.placeholders[ie], ye(M.placeholders, ie) && !ke(I.placeholders[ie], M.placeholders[ie]))) return null;
    for (var re in M.placeholders) ye(M.placeholders, re) && (L.placeholders[re] = M.placeholders[re]);
    return L;
  }
  function he(I, M) {
    var L = [];
    if (I.length === 0 || M.length === 0) return L;
    for (var ie, re = 0; re < I.length; re++) for (var ce = 0; ce < M.length; ce++) ie = W(I[re], M[ce]), ie && L.push(ie);
    return L;
  }
  function ge(I) {
    if (I.length === 0) return I;
    for (var M = I.reduce(he), L = [], ie = {}, re = 0; re < M.length; re++) {
      var ce = JSON.stringify(M[re], E);
      ie[ce] || (ie[ce] = true, L.push(M[re]));
    }
    return L;
  }
  function ve(I, M, L, ie) {
    var re = [{ placeholders: {} }];
    if (I instanceof h && M instanceof h || I instanceof l && M instanceof l) {
      if (I instanceof h) {
        if (I.op !== M.op || I.fn !== M.fn) return [];
      } else if (I instanceof l && I.name !== M.name) return [];
      if (M.args.length === 1 && I.args.length === 1 || !d(M, L) && M.args.length === I.args.length || ie) {
        for (var ce = [], K = 0; K < I.args.length; K++) {
          var Ce = ve(I.args[K], M.args[K], L);
          if (Ce.length === 0) break;
          ce.push(Ce);
        }
        if (ce.length !== I.args.length) {
          if (!N(M, L) || I.args.length === 1) return [];
          if (I.args.length > 2) throw new Error("permuting >2 commutative non-associative rule arguments not yet implemented");
          var Ie = ve(I.args[0], M.args[1], L);
          if (Ie.length === 0) return [];
          var _e = ve(I.args[1], M.args[0], L);
          if (_e.length === 0) return [];
          ce = [Ie, _e];
        }
        re = ge(ce);
      } else if (M.args.length >= 2 && I.args.length === 2) {
        for (var Je = te(M, L), Ve = [], ir = 0; ir < Je.length; ir++) {
          var qr = ve(I, Je[ir], L, true);
          Ve = Ve.concat(qr);
        }
        return Ve;
      } else {
        if (I.args.length > 2) throw Error("Unexpected non-binary associative function: " + I.toString());
        return [];
      }
    } else if (I instanceof A) {
      if (I.name.length === 0) throw new Error("Symbol in rule has 0 length...!?");
      if (G[I.name]) {
        if (I.name !== M.name) return [];
      } else switch (I.name[1] >= "a" && I.name[1] <= "z" ? I.name.substring(0, 2) : I.name[0]) {
        case "n":
        case "_p":
          re[0].placeholders[I.name] = M;
          break;
        case "c":
        case "cl":
          if (Ne(M)) re[0].placeholders[I.name] = M;
          else return [];
          break;
        case "v":
          if (!Ne(M)) re[0].placeholders[I.name] = M;
          else return [];
          break;
        case "vl":
          if (ze(M)) re[0].placeholders[I.name] = M;
          else return [];
          break;
        case "cd":
          if (ri(M)) re[0].placeholders[I.name] = M;
          else return [];
          break;
        case "vd":
          if (!ri(M)) re[0].placeholders[I.name] = M;
          else return [];
          break;
        case "ce":
          if (wn(M)) re[0].placeholders[I.name] = M;
          else return [];
          break;
        case "ve":
          if (!wn(M)) re[0].placeholders[I.name] = M;
          else return [];
          break;
        default:
          throw new Error("Invalid symbol in rule: " + I.name);
      }
    } else if (I instanceof s) {
      if (!n(I.value, M.value)) return [];
    } else return [];
    return re;
  }
  function ke(I, M) {
    if (I instanceof s && M instanceof s) {
      if (!n(I.value, M.value)) return false;
    } else if (I instanceof A && M instanceof A) {
      if (I.name !== M.name) return false;
    } else if (I instanceof h && M instanceof h || I instanceof l && M instanceof l) {
      if (I instanceof h) {
        if (I.op !== M.op || I.fn !== M.fn) return false;
      } else if (I instanceof l && I.name !== M.name) return false;
      if (I.args.length !== M.args.length) return false;
      for (var L = 0; L < I.args.length; L++) if (!ke(I.args[L], M.args[L])) return false;
    } else return false;
    return true;
  }
  return J;
}), Qh = "simplifyConstant", Kh = ["typed", "config", "mathWithTransform", "matrix", "isBounded", "?fraction", "?bignumber", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "SymbolNode"], Yh = R(Qh, Kh, (e) => {
  var { typed: r, config: a, mathWithTransform: n, matrix: i, isBounded: t, fraction: o, bignumber: u, AccessorNode: c, ArrayNode: s, ConstantNode: l, FunctionNode: m, IndexNode: p, ObjectNode: h, OperatorNode: y, SymbolNode: A } = e, { isCommutative: E, isAssociative: C, allChildren: N, createMakeNodeFunction: d } = Na({ FunctionNode: m, OperatorNode: y, SymbolNode: A }), x = r("simplifyConstant", { Node: (v) => $(ue(v, {})), "Node, Object": function(S, Y) {
    return $(ue(S, Y));
  } });
  function g(v) {
    return da(v) ? v.valueOf() : v instanceof Array ? v.map(g) : rr(v) ? i(g(v.valueOf())) : v;
  }
  function w(v, S, Y) {
    try {
      return n[v].apply(null, S);
    } catch {
      return S = S.map(g), _(n[v].apply(null, S), Y);
    }
  }
  var F = r({ Fraction: J, number: function(S) {
    return S < 0 ? q(new l(-S)) : new l(S);
  }, BigNumber: function(S) {
    return S < 0 ? q(new l(-S)) : new l(S);
  }, bigint: function(S) {
    return S < 0n ? q(new l(-S)) : new l(S);
  }, Complex: function(S) {
    throw new Error("Cannot convert Complex number to Node");
  }, string: function(S) {
    return new l(S);
  }, Matrix: function(S) {
    return new s(S.valueOf().map((Y) => F(Y)));
  } });
  function $(v) {
    return Fe(v) ? v : F(v);
  }
  function Z(v, S) {
    var Y = S && S.exactFractions !== false;
    if (Y && t(v) && o) {
      var ee = o(v), oe = S && typeof S.fractionsLimit == "number" ? S.fractionsLimit : 1 / 0;
      if (ee.valueOf() === v && ee.n < oe && ee.d < oe) return ee;
    }
    return v;
  }
  var _ = r({ "string, Object": function(S, Y) {
    var ee = Yr(S, a);
    if (ee === "BigNumber") return u === void 0 && wa(), u(S);
    if (ee === "bigint") return BigInt(S);
    if (ee === "Fraction") return o === void 0 && Ys(), o(S);
    var oe = parseFloat(S);
    return Z(oe, Y);
  }, "Fraction, Object": function(S, Y) {
    return S;
  }, "BigNumber, Object": function(S, Y) {
    return S;
  }, "number, Object": function(S, Y) {
    return Z(S, Y);
  }, "bigint, Object": function(S, Y) {
    return S;
  }, "Complex, Object": function(S, Y) {
    return S.im !== 0 ? S : Z(S.re, Y);
  }, "Matrix, Object": function(S, Y) {
    return i(Z(S.valueOf()));
  }, "Array, Object": function(S, Y) {
    return S.map(Z);
  } });
  function q(v) {
    return new y("-", "unaryMinus", [v]);
  }
  function J(v) {
    var S = (oe) => a.number === "BigNumber" && u ? u(oe) : Number(oe), Y = v.s * v.n, ee = Y < 0n ? new y("-", "unaryMinus", [new l(-S(Y))]) : new l(S(Y));
    return v.d === 1n ? ee : new y("/", "divide", [ee, new l(S(v.d))]);
  }
  function P(v, S, Y) {
    if (!dt(S)) return new c($(v), $(S));
    if (ur(v) || rr(v)) {
      for (var ee = Array.from(S.dimensions); ee.length > 0; ) if (Ne(ee[0]) && typeof ee[0].value != "string") {
        var oe = _(ee.shift().value, Y);
        ur(v) ? v = v.items[oe - 1] : (v = v.valueOf()[oe - 1], v instanceof Array && (v = i(v)));
      } else if (ee.length > 1 && Ne(ee[1]) && typeof ee[1].value != "string") {
        var de = _(ee[1].value, Y), te = [], W = ur(v) ? v.items : v.valueOf();
        for (var he of W) if (ur(he)) te.push(he.items[de - 1]);
        else if (rr(v)) te.push(he[de - 1]);
        else break;
        if (te.length === W.length) ur(v) ? v = new s(te) : v = i(te), ee.splice(1, 1);
        else break;
      } else break;
      return ee.length === S.dimensions.length ? new c($(v), S) : ee.length > 0 ? (S = new p(ee), new c($(v), S)) : v;
    }
    if (Mn(v) && S.dimensions.length === 1 && Ne(S.dimensions[0])) {
      var ge = S.dimensions[0].value;
      return ge in v.properties ? v.properties[ge] : new l();
    }
    return new c($(v), S);
  }
  function G(v, S, Y, ee) {
    var oe = S.shift(), de = S.reduce((te, W) => {
      if (!Fe(W)) {
        var he = te.pop();
        if (Fe(he)) return [he, W];
        try {
          return te.push(w(v, [he, W], ee)), te;
        } catch {
          te.push(he);
        }
      }
      te.push($(te.pop()));
      var ge = te.length === 1 ? te[0] : Y(te);
      return [Y([ge, $(W)])];
    }, [oe]);
    return de.length === 1 ? de[0] : Y([de[0], F(de[1])]);
  }
  function ue(v, S) {
    switch (v.type) {
      case "SymbolNode":
        return v;
      case "ConstantNode":
        switch (typeof v.value) {
          case "number":
            return _(v.value, S);
          case "bigint":
            return _(v.value, S);
          case "string":
            return v.value;
          default:
            if (!isNaN(v.value)) return _(v.value, S);
        }
        return v;
      case "FunctionNode":
        if (n[v.name] && n[v.name].rawArgs) return v;
        {
          var Y = ["add", "multiply"];
          if (!Y.includes(v.name)) {
            var ee = v.args.map((re) => ue(re, S));
            if (!ee.some(Fe)) try {
              return w(v.name, ee, S);
            } catch {
            }
            if (v.name === "size" && ee.length === 1 && ur(ee[0])) {
              for (var oe = [], de = ee[0]; ur(de); ) oe.push(de.items.length), de = de.items[0];
              return i(oe);
            }
            return new m(v.name, ee.map($));
          }
        }
      case "OperatorNode": {
        var te = v.fn.toString(), W, he, ge = d(v);
        if (qe(v) && v.isUnary()) W = [ue(v.args[0], S)], Fe(W[0]) ? he = ge(W) : he = w(te, W, S);
        else if (C(v, S.context)) if (W = N(v, S.context), W = W.map((re) => ue(re, S)), E(te, S.context)) {
          for (var ve = [], ke = [], I = 0; I < W.length; I++) Fe(W[I]) ? ke.push(W[I]) : ve.push(W[I]);
          ve.length > 1 ? (he = G(te, ve, ge, S), ke.unshift(he), he = G(te, ke, ge, S)) : he = G(te, W, ge, S);
        } else he = G(te, W, ge, S);
        else W = v.args.map((re) => ue(re, S)), he = G(te, W, ge, S);
        return he;
      }
      case "ParenthesisNode":
        return ue(v.content, S);
      case "AccessorNode":
        return P(ue(v.object, S), ue(v.index, S), S);
      case "ArrayNode": {
        var M = v.items.map((re) => ue(re, S));
        return M.some(Fe) ? new s(M.map($)) : i(M);
      }
      case "IndexNode":
        return new p(v.dimensions.map((re) => x(re, S)));
      case "ObjectNode": {
        var L = {};
        for (var ie in v.properties) L[ie] = x(v.properties[ie], S);
        return new h(L);
      }
      case "AssignmentNode":
      case "BlockNode":
      case "FunctionAssignmentNode":
      case "RangeNode":
      case "ConditionalNode":
      default:
        throw new Error("Unimplemented node type in simplifyConstant: ".concat(v.type));
    }
  }
  return x;
}), pr = [{ AssignmentNode: {}, FunctionAssignmentNode: {} }, { ConditionalNode: { latexLeftParens: false, latexRightParens: false, latexParens: false } }, { "OperatorNode:or": { op: "or", associativity: "left", associativeWith: [] } }, { "OperatorNode:xor": { op: "xor", associativity: "left", associativeWith: [] } }, { "OperatorNode:and": { op: "and", associativity: "left", associativeWith: [] } }, { "OperatorNode:bitOr": { op: "|", associativity: "left", associativeWith: [] } }, { "OperatorNode:bitXor": { op: "^|", associativity: "left", associativeWith: [] } }, { "OperatorNode:bitAnd": { op: "&", associativity: "left", associativeWith: [] } }, { "OperatorNode:equal": { op: "==", associativity: "left", associativeWith: [] }, "OperatorNode:unequal": { op: "!=", associativity: "left", associativeWith: [] }, "OperatorNode:smaller": { op: "<", associativity: "left", associativeWith: [] }, "OperatorNode:larger": { op: ">", associativity: "left", associativeWith: [] }, "OperatorNode:smallerEq": { op: "<=", associativity: "left", associativeWith: [] }, "OperatorNode:largerEq": { op: ">=", associativity: "left", associativeWith: [] }, RelationalNode: { associativity: "left", associativeWith: [] } }, { "OperatorNode:leftShift": { op: "<<", associativity: "left", associativeWith: [] }, "OperatorNode:rightArithShift": { op: ">>", associativity: "left", associativeWith: [] }, "OperatorNode:rightLogShift": { op: ">>>", associativity: "left", associativeWith: [] } }, { "OperatorNode:to": { op: "to", associativity: "left", associativeWith: [] } }, { RangeNode: {} }, { "OperatorNode:add": { op: "+", associativity: "left", associativeWith: ["OperatorNode:add", "OperatorNode:subtract"] }, "OperatorNode:subtract": { op: "-", associativity: "left", associativeWith: [] } }, { "OperatorNode:multiply": { op: "*", associativity: "left", associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"] }, "OperatorNode:divide": { op: "/", associativity: "left", associativeWith: [], latexLeftParens: false, latexRightParens: false, latexParens: false }, "OperatorNode:dotMultiply": { op: ".*", associativity: "left", associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "OperatorNode:dotMultiply", "OperatorNode:doDivide"] }, "OperatorNode:dotDivide": { op: "./", associativity: "left", associativeWith: [] }, "OperatorNode:mod": { op: "mod", associativity: "left", associativeWith: [] } }, { "OperatorNode:multiply": { associativity: "left", associativeWith: ["OperatorNode:multiply", "OperatorNode:divide", "Operator:dotMultiply", "Operator:dotDivide"] } }, { "OperatorNode:unaryPlus": { op: "+", associativity: "right" }, "OperatorNode:unaryMinus": { op: "-", associativity: "right" }, "OperatorNode:bitNot": { op: "~", associativity: "right" }, "OperatorNode:not": { op: "not", associativity: "right" } }, { "OperatorNode:pow": { op: "^", associativity: "right", associativeWith: [], latexRightParens: false }, "OperatorNode:dotPow": { op: ".^", associativity: "right", associativeWith: [] } }, { "OperatorNode:nullish": { op: "??", associativity: "left", associativeWith: [] } }, { "OperatorNode:factorial": { op: "!", associativity: "left" } }, { "OperatorNode:ctranspose": { op: "'", associativity: "left" } }];
function Qt(e, r) {
  if (!r || r !== "auto") return e;
  for (var a = e; Br(a); ) a = a.content;
  return a;
}
function Se(e, r, a, n) {
  var i = e;
  r !== "keep" && (i = e.getContent());
  for (var t = i.getIdentifier(), o = null, u = 0; u < pr.length; u++) if (t in pr[u]) {
    o = u;
    break;
  }
  if (t === "OperatorNode:multiply" && i.implicit && a !== "show") {
    var c = Qt(i.args[0], r);
    !(Ne(c) && n && n.getIdentifier() === "OperatorNode:divide" && ra(Qt(n.args[0], r))) && !(c.getIdentifier() === "OperatorNode:divide" && ra(Qt(c.args[0], r)) && Ne(Qt(c.args[1]))) && (o += 1);
  }
  return o;
}
function Tt(e, r) {
  var a = e;
  r !== "keep" && (a = e.getContent());
  var n = a.getIdentifier(), i = Se(a, r);
  if (i === null) return null;
  var t = pr[i][n];
  if (ye(t, "associativity")) {
    if (t.associativity === "left") return "left";
    if (t.associativity === "right") return "right";
    throw Error("'" + n + "' has the invalid associativity '" + t.associativity + "'.");
  }
  return null;
}
function Gn(e, r, a) {
  var n = a !== "keep" ? e.getContent() : e, i = a !== "keep" ? e.getContent() : r, t = n.getIdentifier(), o = i.getIdentifier(), u = Se(n, a);
  if (u === null) return null;
  var c = pr[u][t];
  if (ye(c, "associativeWith") && c.associativeWith instanceof Array) {
    for (var s = 0; s < c.associativeWith.length; s++) if (c.associativeWith[s] === o) return true;
    return false;
  }
  return null;
}
function ev(e) {
  var r = "OperatorNode:" + e;
  for (var a of pr) if (r in a) return a[r].op;
  return null;
}
var ni = "simplifyCore", rv = ["typed", "parse", "equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "SymbolNode"], tv = R(ni, rv, (e) => {
  var { typed: r, parse: a, equal: n, isZero: i, add: t, subtract: o, multiply: u, divide: c, pow: s, AccessorNode: l, ArrayNode: m, ConstantNode: p, FunctionNode: h, IndexNode: y, ObjectNode: A, OperatorNode: E, ParenthesisNode: C, SymbolNode: N } = e, d = new p(0), x = new p(1), g = new p(true), w = new p(false);
  function F(q) {
    return qe(q) && ["and", "not", "or"].includes(q.op);
  }
  var { hasProperty: $, isCommutative: Z } = Na({ FunctionNode: h, OperatorNode: E, SymbolNode: N });
  function _(q) {
    var J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = J ? J.context : void 0;
    if ($(q, "trivial", P)) {
      if (Lr(q) && q.args.length === 1) return _(q.args[0], J);
      var G = false, ue = 0;
      if (q.forEach((ve) => {
        ++ue, ue === 1 && (G = _(ve, J));
      }), ue === 1) return G;
    }
    var v = q;
    if (Lr(v)) {
      var S = ev(v.name);
      if (S) {
        if (v.args.length > 2 && $(v, "associative", P)) for (; v.args.length > 2; ) {
          var Y = v.args.pop(), ee = v.args.pop();
          v.args.push(new E(S, v.name, [Y, ee]));
        }
        v = new E(S, v.name, v.args);
      } else return new h(_(v.fn), v.args.map((ve) => _(ve, J)));
    }
    if (qe(v) && v.isUnary()) {
      var oe = _(v.args[0], J);
      if (v.op === "~" && qe(oe) && oe.isUnary() && oe.op === "~" || v.op === "not" && qe(oe) && oe.isUnary() && oe.op === "not" && F(oe.args[0])) return oe.args[0];
      var de = true;
      if (v.op === "-" && qe(oe) && (oe.isBinary() && oe.fn === "subtract" && (v = new E("-", "subtract", [oe.args[1], oe.args[0]]), de = false), oe.isUnary() && oe.op === "-")) return oe.args[0];
      if (de) return new E(v.op, v.fn, [oe]);
    }
    if (qe(v) && v.isBinary()) {
      var te = _(v.args[0], J), W = _(v.args[1], J);
      if (v.op === "+") {
        if (Ne(te) && i(te.value)) return W;
        if (Ne(W) && i(W.value)) return te;
        qe(W) && W.isUnary() && W.op === "-" && (W = W.args[0], v = new E("-", "subtract", [te, W]));
      }
      if (v.op === "-") return qe(W) && W.isUnary() && W.op === "-" ? _(new E("+", "add", [te, W.args[0]]), J) : Ne(te) && i(te.value) ? _(new E("-", "unaryMinus", [W])) : Ne(W) && i(W.value) ? te : new E(v.op, v.fn, [te, W]);
      if (v.op === "*") {
        if (Ne(te)) {
          if (i(te.value)) return d;
          if (n(te.value, 1)) return W;
        }
        if (Ne(W)) {
          if (i(W.value)) return d;
          if (n(W.value, 1)) return te;
          if (Z(v, P)) return new E(v.op, v.fn, [W, te], v.implicit);
        }
        return new E(v.op, v.fn, [te, W], v.implicit);
      }
      if (v.op === "/") return Ne(te) && i(te.value) ? d : Ne(W) && n(W.value, 1) ? te : new E(v.op, v.fn, [te, W]);
      if (v.op === "^" && Ne(W)) {
        if (i(W.value)) return x;
        if (n(W.value, 1)) return te;
      }
      if (v.op === "and") {
        if (Ne(te)) if (te.value) {
          if (F(W)) return W;
          if (Ne(W)) return W.value ? g : w;
        } else return w;
        if (Ne(W)) if (W.value) {
          if (F(te)) return te;
        } else return w;
      }
      if (v.op === "or") {
        if (Ne(te)) {
          if (te.value) return g;
          if (F(W)) return W;
        }
        if (Ne(W)) {
          if (W.value) return g;
          if (F(te)) return te;
        }
      }
      return new E(v.op, v.fn, [te, W]);
    }
    if (qe(v)) return new E(v.op, v.fn, v.args.map((ve) => _(ve, J)));
    if (ur(v)) return new m(v.items.map((ve) => _(ve, J)));
    if (Fr(v)) return new l(_(v.object, J), _(v.index, J));
    if (dt(v)) return new y(v.dimensions.map((ve) => _(ve, J)));
    if (Mn(v)) {
      var he = {};
      for (var ge in v.properties) he[ge] = _(v.properties[ge], J);
      return new A(he);
    }
    return v;
  }
  return r(ni, { Node: _, "Node,Object": _ });
}), ai = "derivative", nv = ["typed", "config", "parse", "simplify", "equal", "isZero", "numeric", "ConstantNode", "FunctionNode", "OperatorNode", "ParenthesisNode", "SymbolNode"], av = R(ai, nv, (e) => {
  var { typed: r, config: a, parse: n, simplify: i, equal: t, isZero: o, numeric: u, ConstantNode: c, FunctionNode: s, OperatorNode: l, ParenthesisNode: m, SymbolNode: p } = e;
  function h(x, g) {
    var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { simplify: true }, F = /* @__PURE__ */ new Map(), $ = g.name;
    function Z(q) {
      var J = F.get(q);
      if (J !== void 0) return J;
      var P = C(Z, q, $);
      return F.set(q, P), P;
    }
    var _ = N(x, Z);
    return w.simplify ? i(_) : _;
  }
  function y(x) {
    var g = n(x);
    if (!g.isSymbolNode) throw new TypeError("Invalid variable. " + "Cannot parse ".concat(JSON.stringify(x), " into a variable in function derivative"));
    return g;
  }
  var A = r(ai, { "Node, SymbolNode": h, "Node, SymbolNode, Object": h, "Node, string": (x, g) => h(x, y(g)), "Node, string, Object": (x, g, w) => h(x, y(g), w) });
  A._simplify = true, A.toTex = function(x) {
    return E.apply(null, x.args);
  };
  var E = r("_derivTex", { "Node, SymbolNode": function(g, w) {
    return Ne(g) && Ze(g.value) === "string" ? E(n(g.value).toString(), w.toString(), 1) : E(g.toTex(), w.toString(), 1);
  }, "Node, ConstantNode": function(g, w) {
    if (Ze(w.value) === "string") return E(g, n(w.value));
    throw new Error("The second parameter to 'derivative' is a non-string constant");
  }, "Node, SymbolNode, ConstantNode": function(g, w, F) {
    return E(g.toString(), w.name, F.value);
  }, "string, string, number": function(g, w, F) {
    var $;
    return F === 1 ? $ = "{d\\over d" + w + "}" : $ = "{d^{" + F + "}\\over d" + w + "^{" + F + "}}", $ + "\\left[".concat(g, "\\right]");
  } }), C = r("_isConst", { "function, ConstantNode, string": function() {
    return true;
  }, "function, SymbolNode, string": function(g, w, F) {
    return w.name !== F;
  }, "function, ParenthesisNode, string": function(g, w, F) {
    return g(w.content, F);
  }, "function, FunctionAssignmentNode, string": function(g, w, F) {
    return w.params.includes(F) ? g(w.expr, F) : true;
  }, "function, FunctionNode | OperatorNode, string": function(g, w, F) {
    return w.args.every(($) => g($, F));
  } }), N = r("_derivative", { "ConstantNode, function": function() {
    return d(0);
  }, "SymbolNode, function": function(g, w) {
    return w(g) ? d(0) : d(1);
  }, "ParenthesisNode, function": function(g, w) {
    return new m(N(g.content, w));
  }, "FunctionAssignmentNode, function": function(g, w) {
    return w(g) ? d(0) : N(g.expr, w);
  }, "FunctionNode, function": function(g, w) {
    if (w(g)) return d(0);
    var F = g.args[0], $, Z = false, _ = false, q;
    switch (g.name) {
      case "cbrt":
        Z = true, q = new l("*", "multiply", [d(3), new l("^", "pow", [F, new l("/", "divide", [d(2), d(3)])])]);
        break;
      case "sqrt":
      case "nthRoot":
        if (g.args.length === 1) Z = true, q = new l("*", "multiply", [d(2), new s("sqrt", [F])]);
        else if (g.args.length === 2) return $ = new l("/", "divide", [d(1), g.args[1]]), N(new l("^", "pow", [F, $]), w);
        break;
      case "log10":
        $ = d(10);
      case "log":
        if (!$ && g.args.length === 1) q = F.clone(), Z = true;
        else if (g.args.length === 1 && $ || g.args.length === 2 && w(g.args[1])) q = new l("*", "multiply", [F.clone(), new s("log", [$ || g.args[1]])]), Z = true;
        else if (g.args.length === 2) return N(new l("/", "divide", [new s("log", [F]), new s("log", [g.args[1]])]), w);
        break;
      case "pow":
        if (g.args.length === 2) return N(new l("^", "pow", [F, g.args[1]]), w);
        break;
      case "exp":
        q = new s("exp", [F.clone()]);
        break;
      case "sin":
        q = new s("cos", [F.clone()]);
        break;
      case "cos":
        q = new l("-", "unaryMinus", [new s("sin", [F.clone()])]);
        break;
      case "tan":
        q = new l("^", "pow", [new s("sec", [F.clone()]), d(2)]);
        break;
      case "sec":
        q = new l("*", "multiply", [g, new s("tan", [F.clone()])]);
        break;
      case "csc":
        _ = true, q = new l("*", "multiply", [g, new s("cot", [F.clone()])]);
        break;
      case "cot":
        _ = true, q = new l("^", "pow", [new s("csc", [F.clone()]), d(2)]);
        break;
      case "asin":
        Z = true, q = new s("sqrt", [new l("-", "subtract", [d(1), new l("^", "pow", [F.clone(), d(2)])])]);
        break;
      case "acos":
        Z = true, _ = true, q = new s("sqrt", [new l("-", "subtract", [d(1), new l("^", "pow", [F.clone(), d(2)])])]);
        break;
      case "atan":
        Z = true, q = new l("+", "add", [new l("^", "pow", [F.clone(), d(2)]), d(1)]);
        break;
      case "asec":
        Z = true, q = new l("*", "multiply", [new s("abs", [F.clone()]), new s("sqrt", [new l("-", "subtract", [new l("^", "pow", [F.clone(), d(2)]), d(1)])])]);
        break;
      case "acsc":
        Z = true, _ = true, q = new l("*", "multiply", [new s("abs", [F.clone()]), new s("sqrt", [new l("-", "subtract", [new l("^", "pow", [F.clone(), d(2)]), d(1)])])]);
        break;
      case "acot":
        Z = true, _ = true, q = new l("+", "add", [new l("^", "pow", [F.clone(), d(2)]), d(1)]);
        break;
      case "sinh":
        q = new s("cosh", [F.clone()]);
        break;
      case "cosh":
        q = new s("sinh", [F.clone()]);
        break;
      case "tanh":
        q = new l("^", "pow", [new s("sech", [F.clone()]), d(2)]);
        break;
      case "sech":
        _ = true, q = new l("*", "multiply", [g, new s("tanh", [F.clone()])]);
        break;
      case "csch":
        _ = true, q = new l("*", "multiply", [g, new s("coth", [F.clone()])]);
        break;
      case "coth":
        _ = true, q = new l("^", "pow", [new s("csch", [F.clone()]), d(2)]);
        break;
      case "asinh":
        Z = true, q = new s("sqrt", [new l("+", "add", [new l("^", "pow", [F.clone(), d(2)]), d(1)])]);
        break;
      case "acosh":
        Z = true, q = new s("sqrt", [new l("-", "subtract", [new l("^", "pow", [F.clone(), d(2)]), d(1)])]);
        break;
      case "atanh":
        Z = true, q = new l("-", "subtract", [d(1), new l("^", "pow", [F.clone(), d(2)])]);
        break;
      case "asech":
        Z = true, _ = true, q = new l("*", "multiply", [F.clone(), new s("sqrt", [new l("-", "subtract", [d(1), new l("^", "pow", [F.clone(), d(2)])])])]);
        break;
      case "acsch":
        Z = true, _ = true, q = new l("*", "multiply", [new s("abs", [F.clone()]), new s("sqrt", [new l("+", "add", [new l("^", "pow", [F.clone(), d(2)]), d(1)])])]);
        break;
      case "acoth":
        Z = true, _ = true, q = new l("-", "subtract", [d(1), new l("^", "pow", [F.clone(), d(2)])]);
        break;
      case "abs":
        q = new l("/", "divide", [new s(new p("abs"), [F.clone()]), F.clone()]);
        break;
      case "gamma":
      default:
        throw new Error('Cannot process function "' + g.name + '" in derivative: the function is not supported, undefined, or the number of arguments passed to it are not supported');
    }
    var J, P;
    Z ? (J = "/", P = "divide") : (J = "*", P = "multiply");
    var G = N(F, w);
    return _ && (G = new l("-", "unaryMinus", [G])), new l(J, P, [G, q]);
  }, "OperatorNode, function": function(g, w) {
    if (w(g)) return d(0);
    if (g.op === "+") return new l(g.op, g.fn, g.args.map(function(v) {
      return N(v, w);
    }));
    if (g.op === "-") {
      if (g.isUnary()) return new l(g.op, g.fn, [N(g.args[0], w)]);
      if (g.isBinary()) return new l(g.op, g.fn, [N(g.args[0], w), N(g.args[1], w)]);
    }
    if (g.op === "*") {
      var F = g.args.filter(function(v) {
        return w(v);
      });
      if (F.length > 0) {
        var $ = g.args.filter(function(v) {
          return !w(v);
        }), Z = $.length === 1 ? $[0] : new l("*", "multiply", $), _ = F.concat(N(Z, w));
        return new l("*", "multiply", _);
      }
      return new l("+", "add", g.args.map(function(v) {
        return new l("*", "multiply", g.args.map(function(S) {
          return S === v ? N(S, w) : S.clone();
        }));
      }));
    }
    if (g.op === "/" && g.isBinary()) {
      var q = g.args[0], J = g.args[1];
      return w(J) ? new l("/", "divide", [N(q, w), J]) : w(q) ? new l("*", "multiply", [new l("-", "unaryMinus", [q]), new l("/", "divide", [N(J, w), new l("^", "pow", [J.clone(), d(2)])])]) : new l("/", "divide", [new l("-", "subtract", [new l("*", "multiply", [N(q, w), J.clone()]), new l("*", "multiply", [q.clone(), N(J, w)])]), new l("^", "pow", [J.clone(), d(2)])]);
    }
    if (g.op === "^" && g.isBinary()) {
      var P = g.args[0], G = g.args[1];
      if (w(P)) return Ne(P) && (o(P.value) || t(P.value, 1)) ? d(0) : new l("*", "multiply", [g, new l("*", "multiply", [new s("log", [P.clone()]), N(G.clone(), w)])]);
      if (w(G)) {
        if (Ne(G)) {
          if (o(G.value)) return d(0);
          if (t(G.value, 1)) return N(P, w);
        }
        var ue = new l("^", "pow", [P.clone(), new l("-", "subtract", [G, d(1)])]);
        return new l("*", "multiply", [G.clone(), new l("*", "multiply", [N(P, w), ue])]);
      }
      return new l("*", "multiply", [new l("^", "pow", [P.clone(), G.clone()]), new l("+", "add", [new l("*", "multiply", [N(P, w), new l("/", "divide", [G.clone(), P.clone()])]), new l("*", "multiply", [N(G, w), new s("log", [P.clone()])])])]);
    }
    throw new Error('Cannot process operator "' + g.op + '" in derivative: the operator is not supported, undefined, or the number of arguments passed to it are not supported');
  } });
  function d(x, g) {
    return new c(u(x, Yr(String(x), a)));
  }
  return A;
}), ii = "rationalize", iv = ["config", "typed", "equal", "isZero", "add", "subtract", "multiply", "divide", "pow", "parse", "simplifyConstant", "simplifyCore", "simplify", "?bignumber", "?fraction", "mathWithTransform", "matrix", "AccessorNode", "ArrayNode", "ConstantNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "SymbolNode", "ParenthesisNode"], ov = R(ii, iv, (e) => {
  var { config: r, typed: a, equal: n, isZero: i, add: t, subtract: o, multiply: u, divide: c, pow: s, parse: l, simplifyConstant: m, simplifyCore: p, simplify: h, fraction: y, bignumber: A, mathWithTransform: E, matrix: C, AccessorNode: N, ArrayNode: d, ConstantNode: x, FunctionNode: g, IndexNode: w, ObjectNode: F, OperatorNode: $, SymbolNode: Z, ParenthesisNode: _ } = e;
  function q(v) {
    var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, ee = P(), oe = J(v, S, true, ee.firstRules), de = oe.variables.length, te = { exactFractions: false }, W = { exactFractions: true };
    if (v = oe.expression, de >= 1) {
      v = G(v);
      var he, ge, ve = true, ke = false;
      v = h(v, ee.firstRules, {}, te);
      for (var I; ge = ve ? ee.distrDivRules : ee.sucDivRules, v = h(v, ge, {}, W), ve = !ve, I = v.toString(), I !== he; ) ke = true, he = I;
      ke && (v = h(v, ee.firstRulesAgain, {}, te)), v = h(v, ee.finalRules, {}, te);
    }
    var M = [], L = {};
    return v.type === "OperatorNode" && v.isBinary() && v.op === "/" ? (de === 1 && (v.args[0] = ue(v.args[0], M), v.args[1] = ue(v.args[1])), Y && (L.numerator = v.args[0], L.denominator = v.args[1])) : (de === 1 && (v = ue(v, M)), Y && (L.numerator = v, L.denominator = null)), Y ? (L.coefficients = M, L.variables = oe.variables, L.expression = v, L) : v;
  }
  return a(ii, { Node: q, "Node, boolean": (v, S) => q(v, {}, S), "Node, Object": q, "Node, Object, boolean": q });
  function J(v, S, Y, ee) {
    var oe = [], de = h(v, ee, S, { exactFractions: false });
    Y = !!Y;
    var te = "+-*" + (Y ? "/" : "");
    he(de);
    var W = {};
    return W.expression = de, W.variables = oe, W;
    function he(ge) {
      var ve = ge.type;
      if (ve === "FunctionNode") throw new Error("There is an unsolved function call");
      if (ve === "OperatorNode") if (ge.op === "^") {
        if (ge.args[1].type !== "ConstantNode" || !xe(parseFloat(ge.args[1].value))) throw new Error("There is a non-integer exponent");
        he(ge.args[0]);
      } else {
        if (!te.includes(ge.op)) throw new Error("Operator " + ge.op + " invalid in polynomial expression");
        for (var ke = 0; ke < ge.args.length; ke++) he(ge.args[ke]);
      }
      else if (ve === "SymbolNode") {
        var I = ge.name, M = oe.indexOf(I);
        M === -1 && oe.push(I);
      } else if (ve === "ParenthesisNode") he(ge.content);
      else if (ve !== "ConstantNode") throw new Error("type " + ve + " is not allowed in polynomial expression");
    }
  }
  function P() {
    var v = [p, { l: "n+n", r: "2*n" }, { l: "n+-n", r: "0" }, m, { l: "n*(n1^-1)", r: "n/n1" }, { l: "n*n1^-n2", r: "n/n1^n2" }, { l: "n1^-1", r: "1/n1" }, { l: "n*(n1/n2)", r: "(n*n1)/n2" }, { l: "1*n", r: "n" }], S = [{ l: "(-n1)/(-n2)", r: "n1/n2" }, { l: "(-n1)*(-n2)", r: "n1*n2" }, { l: "n1--n2", r: "n1+n2" }, { l: "n1-n2", r: "n1+(-n2)" }, { l: "(n1+n2)*n3", r: "(n1*n3 + n2*n3)" }, { l: "n1*(n2+n3)", r: "(n1*n2+n1*n3)" }, { l: "c1*n + c2*n", r: "(c1+c2)*n" }, { l: "c1*n + n", r: "(c1+1)*n" }, { l: "c1*n - c2*n", r: "(c1-c2)*n" }, { l: "c1*n - n", r: "(c1-1)*n" }, { l: "v/c", r: "(1/c)*v" }, { l: "v/-c", r: "-(1/c)*v" }, { l: "-v*-c", r: "c*v" }, { l: "-v*c", r: "-c*v" }, { l: "v*-c", r: "-c*v" }, { l: "v*c", r: "c*v" }, { l: "-(-n1*n2)", r: "(n1*n2)" }, { l: "-(n1*n2)", r: "(-n1*n2)" }, { l: "-(-n1+n2)", r: "(n1-n2)" }, { l: "-(n1+n2)", r: "(-n1-n2)" }, { l: "(n1^n2)^n3", r: "(n1^(n2*n3))" }, { l: "-(-n1/n2)", r: "(n1/n2)" }, { l: "-(n1/n2)", r: "(-n1/n2)" }], Y = [{ l: "(n1/n2 + n3/n4)", r: "((n1*n4 + n3*n2)/(n2*n4))" }, { l: "(n1/n2 + n3)", r: "((n1 + n3*n2)/n2)" }, { l: "(n1 + n2/n3)", r: "((n1*n3 + n2)/n3)" }], ee = [{ l: "(n1/(n2/n3))", r: "((n1*n3)/n2)" }, { l: "(n1/n2/n3)", r: "(n1/(n2*n3))" }], oe = {};
    return oe.firstRules = v.concat(S, ee), oe.distrDivRules = Y, oe.sucDivRules = ee, oe.firstRulesAgain = v.concat(S), oe.finalRules = [p, { l: "n*-n", r: "-n^2" }, { l: "n*n", r: "n^2" }, m, { l: "n*-n^n1", r: "-n^(n1+1)" }, { l: "n*n^n1", r: "n^(n1+1)" }, { l: "n^n1*-n^n2", r: "-n^(n1+n2)" }, { l: "n^n1*n^n2", r: "n^(n1+n2)" }, { l: "n^n1*-n", r: "-n^(n1+1)" }, { l: "n^n1*n", r: "n^(n1+1)" }, { l: "n^n1/-n", r: "-n^(n1-1)" }, { l: "n^n1/n", r: "n^(n1-1)" }, { l: "n/-n^n1", r: "-n^(1-n1)" }, { l: "n/n^n1", r: "n^(1-n1)" }, { l: "n^n1/-n^n2", r: "n^(n1-n2)" }, { l: "n^n1/n^n2", r: "n^(n1-n2)" }, { l: "n1+(-n2*n3)", r: "n1-n2*n3" }, { l: "v*(-c)", r: "-c*v" }, { l: "n1+-n2", r: "n1-n2" }, { l: "v*c", r: "c*v" }, { l: "(n1^n2)^n3", r: "(n1^(n2*n3))" }], oe;
  }
  function G(v, S, Y) {
    var ee = v.type, oe = arguments.length > 1;
    if (ee === "OperatorNode" && v.isBinary()) {
      var de = false, te;
      if (v.op === "^" && (v.args[0].type === "ParenthesisNode" || v.args[0].type === "OperatorNode") && v.args[1].type === "ConstantNode" && (te = parseFloat(v.args[1].value), de = te >= 2 && xe(te)), de) {
        if (te > 2) {
          var W = v.args[0], he = new $("^", "pow", [v.args[0].cloneDeep(), new x(te - 1)]);
          v = new $("*", "multiply", [W, he]);
        } else v = new $("*", "multiply", [v.args[0], v.args[0].cloneDeep()]);
        oe && (Y === "content" ? S.content = v : S.args[Y] = v);
      }
    }
    if (ee === "ParenthesisNode") G(v.content, v, "content");
    else if (ee !== "ConstantNode" && ee !== "SymbolNode") for (var ge = 0; ge < v.args.length; ge++) G(v.args[ge], v, ge);
    if (!oe) return v;
  }
  function ue(v, S) {
    S === void 0 && (S = []), S[0] = 0;
    var Y = {};
    Y.cte = 1, Y.oper = "+", Y.fire = "";
    var ee = 0, oe = "";
    I(v, null, Y), ee = S.length - 1;
    for (var de = true, te, W = ee; W >= 0; W--) if (S[W] !== 0) {
      var he = new x(de ? S[W] : Math.abs(S[W])), ge = S[W] < 0 ? "-" : "+";
      if (W > 0) {
        var ve = new Z(oe);
        if (W > 1) {
          var ke = new x(W);
          ve = new $("^", "pow", [ve, ke]);
        }
        S[W] === -1 && de ? he = new $("-", "unaryMinus", [ve]) : Math.abs(S[W]) === 1 ? he = ve : he = new $("*", "multiply", [he, ve]);
      }
      de ? te = he : ge === "+" ? te = new $("+", "add", [te, he]) : te = new $("-", "subtract", [te, he]), de = false;
    }
    if (de) return new x(0);
    return te;
    function I(M, L, ie) {
      var re = M.type;
      if (re === "FunctionNode") throw new Error("There is an unsolved function call");
      if (re === "OperatorNode") {
        if (!"+-*^".includes(M.op)) throw new Error("Operator " + M.op + " invalid");
        if (L !== null) {
          if ((M.fn === "unaryMinus" || M.fn === "pow") && L.fn !== "add" && L.fn !== "subtract" && L.fn !== "multiply") throw new Error("Invalid " + M.op + " placing");
          if ((M.fn === "subtract" || M.fn === "add" || M.fn === "multiply") && L.fn !== "add" && L.fn !== "subtract") throw new Error("Invalid " + M.op + " placing");
          if ((M.fn === "subtract" || M.fn === "add" || M.fn === "unaryMinus") && ie.noFil !== 0) throw new Error("Invalid " + M.op + " placing");
        }
        (M.op === "^" || M.op === "*") && (ie.fire = M.op);
        for (var ce = 0; ce < M.args.length; ce++) M.fn === "unaryMinus" && (ie.oper = "-"), (M.op === "+" || M.fn === "subtract") && (ie.fire = "", ie.cte = 1, ie.oper = ce === 0 ? "+" : M.op), ie.noFil = ce, I(M.args[ce], M, ie);
      } else if (re === "SymbolNode") {
        if (M.name !== oe && oe !== "") throw new Error("There is more than one variable");
        if (oe = M.name, L === null) {
          S[1] = 1;
          return;
        }
        if (L.op === "^" && ie.noFil !== 0) throw new Error("In power the variable should be the first parameter");
        if (L.op === "*" && ie.noFil !== 1) throw new Error("In multiply the variable should be the second parameter");
        (ie.fire === "" || ie.fire === "*") && (ee < 1 && (S[1] = 0), S[1] += ie.cte * (ie.oper === "+" ? 1 : -1), ee = Math.max(1, ee));
      } else if (re === "ConstantNode") {
        var K = parseFloat(M.value);
        if (L === null) {
          S[0] = K;
          return;
        }
        if (L.op === "^") {
          if (ie.noFil !== 1) throw new Error("Constant cannot be powered");
          if (!xe(K) || K <= 0) throw new Error("Non-integer exponent is not allowed");
          for (var Ce = ee + 1; Ce < K; Ce++) S[Ce] = 0;
          K > ee && (S[K] = 0), S[K] += ie.cte * (ie.oper === "+" ? 1 : -1), ee = Math.max(K, ee);
          return;
        }
        ie.cte = K, ie.fire === "" && (S[0] += ie.cte * (ie.oper === "+" ? 1 : -1));
      } else throw new Error("Type " + re + " is not allowed");
    }
  }
});
/*!
*  decimal.js v10.6.0
*  An arbitrary-precision Decimal type for JavaScript.
*  https://github.com/MikeMcl/decimal.js
*  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
*  MIT Licence
*/
var ut = 9e15, Zr = 1e9, ta = "0123456789abcdef", Nn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", An = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", na = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -ut, maxE: ut, crypto: false }, ou, Cr, pe = true, kn = "[DecimalError] ", zr = kn + "Invalid argument: ", su = kn + "Precision limit exceeded", uu = kn + "crypto unavailable", cu = "[object Decimal]", Xe = Math.floor, Re = Math.pow, sv = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, uv = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, cv = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, lu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, hr = 1e7, me = 7, lv = 9007199254740991, fv = Nn.length - 1, aa = An.length - 1, H = { toStringTag: cu };
H.absoluteValue = H.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), le(e);
};
H.ceil = function() {
  return le(new this.constructor(this), this.e + 1, 2);
};
H.clampedTo = H.clamp = function(e, r) {
  var a, n = this, i = n.constructor;
  if (e = new i(e), r = new i(r), !e.s || !r.s) return new i(NaN);
  if (e.gt(r)) throw Error(zr + r);
  return a = n.cmp(e), a < 0 ? e : n.cmp(r) > 0 ? r : new i(n);
};
H.comparedTo = H.cmp = function(e) {
  var r, a, n, i, t = this, o = t.d, u = (e = new t.constructor(e)).d, c = t.s, s = e.s;
  if (!o || !u) return !c || !s ? NaN : c !== s ? c : o === u ? 0 : !o ^ c < 0 ? 1 : -1;
  if (!o[0] || !u[0]) return o[0] ? c : u[0] ? -s : 0;
  if (c !== s) return c;
  if (t.e !== e.e) return t.e > e.e ^ c < 0 ? 1 : -1;
  for (n = o.length, i = u.length, r = 0, a = n < i ? n : i; r < a; ++r) if (o[r] !== u[r]) return o[r] > u[r] ^ c < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ c < 0 ? 1 : -1;
};
H.cosine = H.cos = function() {
  var e, r, a = this, n = a.constructor;
  return a.d ? a.d[0] ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(a.e, a.sd()) + me, n.rounding = 1, a = mv(n, hu(n, a)), n.precision = e, n.rounding = r, le(Cr == 2 || Cr == 3 ? a.neg() : a, e, r, true)) : new n(1) : new n(NaN);
};
H.cubeRoot = H.cbrt = function() {
  var e, r, a, n, i, t, o, u, c, s, l = this, m = l.constructor;
  if (!l.isFinite() || l.isZero()) return new m(l);
  for (pe = false, t = l.s * Re(l.s * l, 1 / 3), !t || Math.abs(t) == 1 / 0 ? (a = We(l.d), e = l.e, (t = (e - a.length + 1) % 3) && (a += t == 1 || t == -2 ? "0" : "00"), t = Re(a, 1 / 3), e = Xe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), t == 1 / 0 ? a = "5e" + e : (a = t.toExponential(), a = a.slice(0, a.indexOf("e") + 1) + e), n = new m(a), n.s = l.s) : n = new m(t.toString()), o = (e = m.precision) + 3; ; ) if (u = n, c = u.times(u).times(u), s = c.plus(l), n = Me(s.plus(l).times(u), s.plus(c), o + 2, 1), We(u.d).slice(0, o) === (a = We(n.d)).slice(0, o)) if (a = a.slice(o - 3, o + 1), a == "9999" || !i && a == "4999") {
    if (!i && (le(u, e + 1, 0), u.times(u).times(u).eq(l))) {
      n = u;
      break;
    }
    o += 4, i = 1;
  } else {
    (!+a || !+a.slice(1) && a.charAt(0) == "5") && (le(n, e + 1, 1), r = !n.times(n).times(n).eq(l));
    break;
  }
  return pe = true, le(n, e, m.rounding, r);
};
H.decimalPlaces = H.dp = function() {
  var e, r = this.d, a = NaN;
  if (r) {
    if (e = r.length - 1, a = (e - Xe(this.e / me)) * me, e = r[e], e) for (; e % 10 == 0; e /= 10) a--;
    a < 0 && (a = 0);
  }
  return a;
};
H.dividedBy = H.div = function(e) {
  return Me(this, new this.constructor(e));
};
H.dividedToIntegerBy = H.divToInt = function(e) {
  var r = this, a = r.constructor;
  return le(Me(r, new a(e), 0, 1, 1), a.precision, a.rounding);
};
H.equals = H.eq = function(e) {
  return this.cmp(e) === 0;
};
H.floor = function() {
  return le(new this.constructor(this), this.e + 1, 3);
};
H.greaterThan = H.gt = function(e) {
  return this.cmp(e) > 0;
};
H.greaterThanOrEqualTo = H.gte = function(e) {
  var r = this.cmp(e);
  return r == 1 || r === 0;
};
H.hyperbolicCosine = H.cosh = function() {
  var e, r, a, n, i, t = this, o = t.constructor, u = new o(1);
  if (!t.isFinite()) return new o(t.s ? 1 / 0 : NaN);
  if (t.isZero()) return u;
  a = o.precision, n = o.rounding, o.precision = a + Math.max(t.e, t.sd()) + 4, o.rounding = 1, i = t.d.length, i < 32 ? (e = Math.ceil(i / 3), r = (1 / Pn(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), t = mt(o, 1, t.times(r), new o(1), true);
  for (var c, s = e, l = new o(8); s--; ) c = t.times(t), t = u.minus(c.times(l.minus(c.times(l))));
  return le(t, o.precision = a, o.rounding = n, true);
};
H.hyperbolicSine = H.sinh = function() {
  var e, r, a, n, i = this, t = i.constructor;
  if (!i.isFinite() || i.isZero()) return new t(i);
  if (r = t.precision, a = t.rounding, t.precision = r + Math.max(i.e, i.sd()) + 4, t.rounding = 1, n = i.d.length, n < 3) i = mt(t, 2, i, i, true);
  else {
    e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Pn(5, e)), i = mt(t, 2, i, i, true);
    for (var o, u = new t(5), c = new t(16), s = new t(20); e--; ) o = i.times(i), i = i.times(u.plus(o.times(c.times(o).plus(s))));
  }
  return t.precision = r, t.rounding = a, le(i, r, a, true);
};
H.hyperbolicTangent = H.tanh = function() {
  var e, r, a = this, n = a.constructor;
  return a.isFinite() ? a.isZero() ? new n(a) : (e = n.precision, r = n.rounding, n.precision = e + 7, n.rounding = 1, Me(a.sinh(), a.cosh(), n.precision = e, n.rounding = r)) : new n(a.s);
};
H.inverseCosine = H.acos = function() {
  var e = this, r = e.constructor, a = e.abs().cmp(1), n = r.precision, i = r.rounding;
  return a !== -1 ? a === 0 ? e.isNeg() ? gr(r, n, i) : new r(0) : new r(NaN) : e.isZero() ? gr(r, n + 4, i).times(0.5) : (r.precision = n + 6, r.rounding = 1, e = new r(1).minus(e).div(e.plus(1)).sqrt().atan(), r.precision = n, r.rounding = i, e.times(2));
};
H.inverseHyperbolicCosine = H.acosh = function() {
  var e, r, a = this, n = a.constructor;
  return a.lte(1) ? new n(a.eq(1) ? 0 : NaN) : a.isFinite() ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(Math.abs(a.e), a.sd()) + 4, n.rounding = 1, pe = false, a = a.times(a).minus(1).sqrt().plus(a), pe = true, n.precision = e, n.rounding = r, a.ln()) : new n(a);
};
H.inverseHyperbolicSine = H.asinh = function() {
  var e, r, a = this, n = a.constructor;
  return !a.isFinite() || a.isZero() ? new n(a) : (e = n.precision, r = n.rounding, n.precision = e + 2 * Math.max(Math.abs(a.e), a.sd()) + 6, n.rounding = 1, pe = false, a = a.times(a).plus(1).sqrt().plus(a), pe = true, n.precision = e, n.rounding = r, a.ln());
};
H.inverseHyperbolicTangent = H.atanh = function() {
  var e, r, a, n, i = this, t = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new t(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = t.precision, r = t.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? le(new t(i), e, r, true) : (t.precision = a = n - i.e, i = Me(i.plus(1), new t(1).minus(i), a + e, 1), t.precision = e + 4, t.rounding = 1, i = i.ln(), t.precision = e, t.rounding = r, i.times(0.5))) : new t(NaN);
};
H.inverseSine = H.asin = function() {
  var e, r, a, n, i = this, t = i.constructor;
  return i.isZero() ? new t(i) : (r = i.abs().cmp(1), a = t.precision, n = t.rounding, r !== -1 ? r === 0 ? (e = gr(t, a + 4, n).times(0.5), e.s = i.s, e) : new t(NaN) : (t.precision = a + 6, t.rounding = 1, i = i.div(new t(1).minus(i.times(i)).sqrt().plus(1)).atan(), t.precision = a, t.rounding = n, i.times(2)));
};
H.inverseTangent = H.atan = function() {
  var e, r, a, n, i, t, o, u, c, s = this, l = s.constructor, m = l.precision, p = l.rounding;
  if (s.isFinite()) {
    if (s.isZero()) return new l(s);
    if (s.abs().eq(1) && m + 4 <= aa) return o = gr(l, m + 4, p).times(0.25), o.s = s.s, o;
  } else {
    if (!s.s) return new l(NaN);
    if (m + 4 <= aa) return o = gr(l, m + 4, p).times(0.5), o.s = s.s, o;
  }
  for (l.precision = u = m + 10, l.rounding = 1, a = Math.min(28, u / me + 2 | 0), e = a; e; --e) s = s.div(s.times(s).plus(1).sqrt().plus(1));
  for (pe = false, r = Math.ceil(u / me), n = 1, c = s.times(s), o = new l(s), i = s; e !== -1; ) if (i = i.times(c), t = o.minus(i.div(n += 2)), i = i.times(c), o = t.plus(i.div(n += 2)), o.d[r] !== void 0) for (e = r; o.d[e] === t.d[e] && e--; ) ;
  return a && (o = o.times(2 << a - 1)), pe = true, le(o, l.precision = m, l.rounding = p, true);
};
H.isFinite = function() {
  return !!this.d;
};
H.isInteger = H.isInt = function() {
  return !!this.d && Xe(this.e / me) > this.d.length - 2;
};
H.isNaN = function() {
  return !this.s;
};
H.isNegative = H.isNeg = function() {
  return this.s < 0;
};
H.isPositive = H.isPos = function() {
  return this.s > 0;
};
H.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
H.lessThan = H.lt = function(e) {
  return this.cmp(e) < 0;
};
H.lessThanOrEqualTo = H.lte = function(e) {
  return this.cmp(e) < 1;
};
H.logarithm = H.log = function(e) {
  var r, a, n, i, t, o, u, c, s = this, l = s.constructor, m = l.precision, p = l.rounding, h = 5;
  if (e == null) e = new l(10), r = true;
  else {
    if (e = new l(e), a = e.d, e.s < 0 || !a || !a[0] || e.eq(1)) return new l(NaN);
    r = e.eq(10);
  }
  if (a = s.d, s.s < 0 || !a || !a[0] || s.eq(1)) return new l(a && !a[0] ? -1 / 0 : s.s != 1 ? NaN : a ? 0 : 1 / 0);
  if (r) if (a.length > 1) t = true;
  else {
    for (i = a[0]; i % 10 === 0; ) i /= 10;
    t = i !== 1;
  }
  if (pe = false, u = m + h, o = Rr(s, u), n = r ? Cn(l, u + 10) : Rr(e, u), c = Me(o, n, u, 1), Pt(c.d, i = m, p)) do
    if (u += 10, o = Rr(s, u), n = r ? Cn(l, u + 10) : Rr(e, u), c = Me(o, n, u, 1), !t) {
      +We(c.d).slice(i + 1, i + 15) + 1 == 1e14 && (c = le(c, m + 1, 0));
      break;
    }
  while (Pt(c.d, i += 10, p));
  return pe = true, le(c, m, p);
};
H.minus = H.sub = function(e) {
  var r, a, n, i, t, o, u, c, s, l, m, p, h = this, y = h.constructor;
  if (e = new y(e), !h.d || !e.d) return !h.s || !e.s ? e = new y(NaN) : h.d ? e.s = -e.s : e = new y(e.d || h.s !== e.s ? h : NaN), e;
  if (h.s != e.s) return e.s = -e.s, h.plus(e);
  if (s = h.d, p = e.d, u = y.precision, c = y.rounding, !s[0] || !p[0]) {
    if (p[0]) e.s = -e.s;
    else if (s[0]) e = new y(h);
    else return new y(c === 3 ? -0 : 0);
    return pe ? le(e, u, c) : e;
  }
  if (a = Xe(e.e / me), l = Xe(h.e / me), s = s.slice(), t = l - a, t) {
    for (m = t < 0, m ? (r = s, t = -t, o = p.length) : (r = p, a = l, o = s.length), n = Math.max(Math.ceil(u / me), o) + 2, t > n && (t = n, r.length = 1), r.reverse(), n = t; n--; ) r.push(0);
    r.reverse();
  } else {
    for (n = s.length, o = p.length, m = n < o, m && (o = n), n = 0; n < o; n++) if (s[n] != p[n]) {
      m = s[n] < p[n];
      break;
    }
    t = 0;
  }
  for (m && (r = s, s = p, p = r, e.s = -e.s), o = s.length, n = p.length - o; n > 0; --n) s[o++] = 0;
  for (n = p.length; n > t; ) {
    if (s[--n] < p[n]) {
      for (i = n; i && s[--i] === 0; ) s[i] = hr - 1;
      --s[i], s[n] += hr;
    }
    s[n] -= p[n];
  }
  for (; s[--o] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --a;
  return s[0] ? (e.d = s, e.e = qn(s, a), pe ? le(e, u, c) : e) : new y(c === 3 ? -0 : 0);
};
H.modulo = H.mod = function(e) {
  var r, a = this, n = a.constructor;
  return e = new n(e), !a.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || a.d && !a.d[0] ? le(new n(a), n.precision, n.rounding) : (pe = false, n.modulo == 9 ? (r = Me(a, e.abs(), 0, 3, 1), r.s *= e.s) : r = Me(a, e, 0, n.modulo, 1), r = r.times(e), pe = true, a.minus(r));
};
H.naturalExponential = H.exp = function() {
  return ia(this);
};
H.naturalLogarithm = H.ln = function() {
  return Rr(this);
};
H.negated = H.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, le(e);
};
H.plus = H.add = function(e) {
  var r, a, n, i, t, o, u, c, s, l, m = this, p = m.constructor;
  if (e = new p(e), !m.d || !e.d) return !m.s || !e.s ? e = new p(NaN) : m.d || (e = new p(e.d || m.s === e.s ? m : NaN)), e;
  if (m.s != e.s) return e.s = -e.s, m.minus(e);
  if (s = m.d, l = e.d, u = p.precision, c = p.rounding, !s[0] || !l[0]) return l[0] || (e = new p(m)), pe ? le(e, u, c) : e;
  if (t = Xe(m.e / me), n = Xe(e.e / me), s = s.slice(), i = t - n, i) {
    for (i < 0 ? (a = s, i = -i, o = l.length) : (a = l, n = t, o = s.length), t = Math.ceil(u / me), o = t > o ? t + 1 : o + 1, i > o && (i = o, a.length = 1), a.reverse(); i--; ) a.push(0);
    a.reverse();
  }
  for (o = s.length, i = l.length, o - i < 0 && (i = o, a = l, l = s, s = a), r = 0; i; ) r = (s[--i] = s[i] + l[i] + r) / hr | 0, s[i] %= hr;
  for (r && (s.unshift(r), ++n), o = s.length; s[--o] == 0; ) s.pop();
  return e.d = s, e.e = qn(s, n), pe ? le(e, u, c) : e;
};
H.precision = H.sd = function(e) {
  var r, a = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(zr + e);
  return a.d ? (r = fu(a.d), e && a.e + 1 > r && (r = a.e + 1)) : r = NaN, r;
};
H.round = function() {
  var e = this, r = e.constructor;
  return le(new r(e), e.e + 1, r.rounding);
};
H.sine = H.sin = function() {
  var e, r, a = this, n = a.constructor;
  return a.isFinite() ? a.isZero() ? new n(a) : (e = n.precision, r = n.rounding, n.precision = e + Math.max(a.e, a.sd()) + me, n.rounding = 1, a = dv(n, hu(n, a)), n.precision = e, n.rounding = r, le(Cr > 2 ? a.neg() : a, e, r, true)) : new n(NaN);
};
H.squareRoot = H.sqrt = function() {
  var e, r, a, n, i, t, o = this, u = o.d, c = o.e, s = o.s, l = o.constructor;
  if (s !== 1 || !u || !u[0]) return new l(!s || s < 0 && (!u || u[0]) ? NaN : u ? o : 1 / 0);
  for (pe = false, s = Math.sqrt(+o), s == 0 || s == 1 / 0 ? (r = We(u), (r.length + c) % 2 == 0 && (r += "0"), s = Math.sqrt(r), c = Xe((c + 1) / 2) - (c < 0 || c % 2), s == 1 / 0 ? r = "5e" + c : (r = s.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + c), n = new l(r)) : n = new l(s.toString()), a = (c = l.precision) + 3; ; ) if (t = n, n = t.plus(Me(o, t, a + 2, 1)).times(0.5), We(t.d).slice(0, a) === (r = We(n.d)).slice(0, a)) if (r = r.slice(a - 3, a + 1), r == "9999" || !i && r == "4999") {
    if (!i && (le(t, c + 1, 0), t.times(t).eq(o))) {
      n = t;
      break;
    }
    a += 4, i = 1;
  } else {
    (!+r || !+r.slice(1) && r.charAt(0) == "5") && (le(n, c + 1, 1), e = !n.times(n).eq(o));
    break;
  }
  return pe = true, le(n, c, l.rounding, e);
};
H.tangent = H.tan = function() {
  var e, r, a = this, n = a.constructor;
  return a.isFinite() ? a.isZero() ? new n(a) : (e = n.precision, r = n.rounding, n.precision = e + 10, n.rounding = 1, a = a.sin(), a.s = 1, a = Me(a, new n(1).minus(a.times(a)).sqrt(), e + 10, 0), n.precision = e, n.rounding = r, le(Cr == 2 || Cr == 4 ? a.neg() : a, e, r, true)) : new n(NaN);
};
H.times = H.mul = function(e) {
  var r, a, n, i, t, o, u, c, s, l = this, m = l.constructor, p = l.d, h = (e = new m(e)).d;
  if (e.s *= l.s, !p || !p[0] || !h || !h[0]) return new m(!e.s || p && !p[0] && !h || h && !h[0] && !p ? NaN : !p || !h ? e.s / 0 : e.s * 0);
  for (a = Xe(l.e / me) + Xe(e.e / me), c = p.length, s = h.length, c < s && (t = p, p = h, h = t, o = c, c = s, s = o), t = [], o = c + s, n = o; n--; ) t.push(0);
  for (n = s; --n >= 0; ) {
    for (r = 0, i = c + n; i > n; ) u = t[i] + h[n] * p[i - n - 1] + r, t[i--] = u % hr | 0, r = u / hr | 0;
    t[i] = (t[i] + r) % hr | 0;
  }
  for (; !t[--o]; ) t.pop();
  return r ? ++a : t.shift(), e.d = t, e.e = qn(t, a), pe ? le(e, m.precision, m.rounding) : e;
};
H.toBinary = function(e, r) {
  return Aa(this, 2, e, r);
};
H.toDecimalPlaces = H.toDP = function(e, r) {
  var a = this, n = a.constructor;
  return a = new n(a), e === void 0 ? a : (nr(e, 0, Zr), r === void 0 ? r = n.rounding : nr(r, 0, 8), le(a, e + a.e + 1, r));
};
H.toExponential = function(e, r) {
  var a, n = this, i = n.constructor;
  return e === void 0 ? a = Dr(n, true) : (nr(e, 0, Zr), r === void 0 ? r = i.rounding : nr(r, 0, 8), n = le(new i(n), e + 1, r), a = Dr(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + a : a;
};
H.toFixed = function(e, r) {
  var a, n, i = this, t = i.constructor;
  return e === void 0 ? a = Dr(i) : (nr(e, 0, Zr), r === void 0 ? r = t.rounding : nr(r, 0, 8), n = le(new t(i), e + i.e + 1, r), a = Dr(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + a : a;
};
H.toFraction = function(e) {
  var r, a, n, i, t, o, u, c, s, l, m, p, h = this, y = h.d, A = h.constructor;
  if (!y) return new A(h);
  if (s = a = new A(1), n = c = new A(0), r = new A(n), t = r.e = fu(y) - h.e - 1, o = t % me, r.d[0] = Re(10, o < 0 ? me + o : o), e == null) e = t > 0 ? r : s;
  else {
    if (u = new A(e), !u.isInt() || u.lt(s)) throw Error(zr + u);
    e = u.gt(r) ? t > 0 ? r : s : u;
  }
  for (pe = false, u = new A(We(y)), l = A.precision, A.precision = t = y.length * me * 2; m = Me(u, r, 0, 1, 1), i = a.plus(m.times(n)), i.cmp(e) != 1; ) a = n, n = i, i = s, s = c.plus(m.times(i)), c = i, i = r, r = u.minus(m.times(i)), u = i;
  return i = Me(e.minus(a), n, 0, 1, 1), c = c.plus(i.times(s)), a = a.plus(i.times(n)), c.s = s.s = h.s, p = Me(s, n, t, 1).minus(h).abs().cmp(Me(c, a, t, 1).minus(h).abs()) < 1 ? [s, n] : [c, a], A.precision = l, pe = true, p;
};
H.toHexadecimal = H.toHex = function(e, r) {
  return Aa(this, 16, e, r);
};
H.toNearest = function(e, r) {
  var a = this, n = a.constructor;
  if (a = new n(a), e == null) {
    if (!a.d) return a;
    e = new n(1), r = n.rounding;
  } else {
    if (e = new n(e), r === void 0 ? r = n.rounding : nr(r, 0, 8), !a.d) return e.s ? a : e;
    if (!e.d) return e.s && (e.s = a.s), e;
  }
  return e.d[0] ? (pe = false, a = Me(a, e, 0, r, 1).times(e), pe = true, le(a)) : (e.s = a.s, a = e), a;
};
H.toNumber = function() {
  return +this;
};
H.toOctal = function(e, r) {
  return Aa(this, 8, e, r);
};
H.toPower = H.pow = function(e) {
  var r, a, n, i, t, o, u = this, c = u.constructor, s = +(e = new c(e));
  if (!u.d || !e.d || !u.d[0] || !e.d[0]) return new c(Re(+u, s));
  if (u = new c(u), u.eq(1)) return u;
  if (n = c.precision, t = c.rounding, e.eq(1)) return le(u, n, t);
  if (r = Xe(e.e / me), r >= e.d.length - 1 && (a = s < 0 ? -s : s) <= lv) return i = mu(c, u, a, n), e.s < 0 ? new c(1).div(i) : le(i, n, t);
  if (o = u.s, o < 0) {
    if (r < e.d.length - 1) return new c(NaN);
    if ((e.d[r] & 1) == 0 && (o = 1), u.e == 0 && u.d[0] == 1 && u.d.length == 1) return u.s = o, u;
  }
  return a = Re(+u, s), r = a == 0 || !isFinite(a) ? Xe(s * (Math.log("0." + We(u.d)) / Math.LN10 + u.e + 1)) : new c(a + "").e, r > c.maxE + 1 || r < c.minE - 1 ? new c(r > 0 ? o / 0 : 0) : (pe = false, c.rounding = u.s = 1, a = Math.min(12, (r + "").length), i = ia(e.times(Rr(u, n + a)), n), i.d && (i = le(i, n + 5, 1), Pt(i.d, n, t) && (r = n + 10, i = le(ia(e.times(Rr(u, r + a)), r), r + 5, 1), +We(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = le(i, n + 1, 0)))), i.s = o, pe = true, c.rounding = t, le(i, n, t));
};
H.toPrecision = function(e, r) {
  var a, n = this, i = n.constructor;
  return e === void 0 ? a = Dr(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (nr(e, 1, Zr), r === void 0 ? r = i.rounding : nr(r, 0, 8), n = le(new i(n), e, r), a = Dr(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + a : a;
};
H.toSignificantDigits = H.toSD = function(e, r) {
  var a = this, n = a.constructor;
  return e === void 0 ? (e = n.precision, r = n.rounding) : (nr(e, 1, Zr), r === void 0 ? r = n.rounding : nr(r, 0, 8)), le(new n(a), e, r);
};
H.toString = function() {
  var e = this, r = e.constructor, a = Dr(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + a : a;
};
H.truncated = H.trunc = function() {
  return le(new this.constructor(this), this.e + 1, 1);
};
H.valueOf = H.toJSON = function() {
  var e = this, r = e.constructor, a = Dr(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + a : a;
};
function We(e) {
  var r, a, n, i = e.length - 1, t = "", o = e[0];
  if (i > 0) {
    for (t += o, r = 1; r < i; r++) n = e[r] + "", a = me - n.length, a && (t += Ir(a)), t += n;
    o = e[r], n = o + "", a = me - n.length, a && (t += Ir(a));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return t + o;
}
function nr(e, r, a) {
  if (e !== ~~e || e < r || e > a) throw Error(zr + e);
}
function Pt(e, r, a, n) {
  var i, t, o, u;
  for (t = e[0]; t >= 10; t /= 10) --r;
  return --r < 0 ? (r += me, i = 0) : (i = Math.ceil((r + 1) / me), r %= me), t = Re(10, me - r), u = e[i] % t | 0, n == null ? r < 3 ? (r == 0 ? u = u / 100 | 0 : r == 1 && (u = u / 10 | 0), o = a < 4 && u == 99999 || a > 3 && u == 49999 || u == 5e4 || u == 0) : o = (a < 4 && u + 1 == t || a > 3 && u + 1 == t / 2) && (e[i + 1] / t / 100 | 0) == Re(10, r - 2) - 1 || (u == t / 2 || u == 0) && (e[i + 1] / t / 100 | 0) == 0 : r < 4 ? (r == 0 ? u = u / 1e3 | 0 : r == 1 ? u = u / 100 | 0 : r == 2 && (u = u / 10 | 0), o = (n || a < 4) && u == 9999 || !n && a > 3 && u == 4999) : o = ((n || a < 4) && u + 1 == t || !n && a > 3 && u + 1 == t / 2) && (e[i + 1] / t / 1e3 | 0) == Re(10, r - 3) - 1, o;
}
function vn(e, r, a) {
  for (var n, i = [0], t, o = 0, u = e.length; o < u; ) {
    for (t = i.length; t--; ) i[t] *= r;
    for (i[0] += ta.indexOf(e.charAt(o++)), n = 0; n < i.length; n++) i[n] > a - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / a | 0, i[n] %= a);
  }
  return i.reverse();
}
function mv(e, r) {
  var a, n, i;
  if (r.isZero()) return r;
  n = r.d.length, n < 32 ? (a = Math.ceil(n / 3), i = (1 / Pn(4, a)).toString()) : (a = 16, i = "2.3283064365386962890625e-10"), e.precision += a, r = mt(e, 1, r.times(i), new e(1));
  for (var t = a; t--; ) {
    var o = r.times(r);
    r = o.times(o).minus(o).times(8).plus(1);
  }
  return e.precision -= a, r;
}
var Me = /* @__PURE__ */ (function() {
  function e(n, i, t) {
    var o, u = 0, c = n.length;
    for (n = n.slice(); c--; ) o = n[c] * i + u, n[c] = o % t | 0, u = o / t | 0;
    return u && n.unshift(u), n;
  }
  function r(n, i, t, o) {
    var u, c;
    if (t != o) c = t > o ? 1 : -1;
    else for (u = c = 0; u < t; u++) if (n[u] != i[u]) {
      c = n[u] > i[u] ? 1 : -1;
      break;
    }
    return c;
  }
  function a(n, i, t, o) {
    for (var u = 0; t--; ) n[t] -= u, u = n[t] < i[t] ? 1 : 0, n[t] = u * o + n[t] - i[t];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, t, o, u, c) {
    var s, l, m, p, h, y, A, E, C, N, d, x, g, w, F, $, Z, _, q, J, P = n.constructor, G = n.s == i.s ? 1 : -1, ue = n.d, v = i.d;
    if (!ue || !ue[0] || !v || !v[0]) return new P(!n.s || !i.s || (ue ? v && ue[0] == v[0] : !v) ? NaN : ue && ue[0] == 0 || !v ? G * 0 : G / 0);
    for (c ? (h = 1, l = n.e - i.e) : (c = hr, h = me, l = Xe(n.e / h) - Xe(i.e / h)), q = v.length, Z = ue.length, C = new P(G), N = C.d = [], m = 0; v[m] == (ue[m] || 0); m++) ;
    if (v[m] > (ue[m] || 0) && l--, t == null ? (w = t = P.precision, o = P.rounding) : u ? w = t + (n.e - i.e) + 1 : w = t, w < 0) N.push(1), y = true;
    else {
      if (w = w / h + 2 | 0, m = 0, q == 1) {
        for (p = 0, v = v[0], w++; (m < Z || p) && w--; m++) F = p * c + (ue[m] || 0), N[m] = F / v | 0, p = F % v | 0;
        y = p || m < Z;
      } else {
        for (p = c / (v[0] + 1) | 0, p > 1 && (v = e(v, p, c), ue = e(ue, p, c), q = v.length, Z = ue.length), $ = q, d = ue.slice(0, q), x = d.length; x < q; ) d[x++] = 0;
        J = v.slice(), J.unshift(0), _ = v[0], v[1] >= c / 2 && ++_;
        do
          p = 0, s = r(v, d, q, x), s < 0 ? (g = d[0], q != x && (g = g * c + (d[1] || 0)), p = g / _ | 0, p > 1 ? (p >= c && (p = c - 1), A = e(v, p, c), E = A.length, x = d.length, s = r(A, d, E, x), s == 1 && (p--, a(A, q < E ? J : v, E, c))) : (p == 0 && (s = p = 1), A = v.slice()), E = A.length, E < x && A.unshift(0), a(d, A, x, c), s == -1 && (x = d.length, s = r(v, d, q, x), s < 1 && (p++, a(d, q < x ? J : v, x, c))), x = d.length) : s === 0 && (p++, d = [0]), N[m++] = p, s && d[0] ? d[x++] = ue[$] || 0 : (d = [ue[$]], x = 1);
        while (($++ < Z || d[0] !== void 0) && w--);
        y = d[0] !== void 0;
      }
      N[0] || N.shift();
    }
    if (h == 1) C.e = l, ou = y;
    else {
      for (m = 1, p = N[0]; p >= 10; p /= 10) m++;
      C.e = m + l * h - 1, le(C, u ? t + C.e + 1 : t, o, y);
    }
    return C;
  };
})();
function le(e, r, a, n) {
  var i, t, o, u, c, s, l, m, p, h = e.constructor;
  e: if (r != null) {
    if (m = e.d, !m) return e;
    for (i = 1, u = m[0]; u >= 10; u /= 10) i++;
    if (t = r - i, t < 0) t += me, o = r, l = m[p = 0], c = l / Re(10, i - o - 1) % 10 | 0;
    else if (p = Math.ceil((t + 1) / me), u = m.length, p >= u) if (n) {
      for (; u++ <= p; ) m.push(0);
      l = c = 0, i = 1, t %= me, o = t - me + 1;
    } else break e;
    else {
      for (l = u = m[p], i = 1; u >= 10; u /= 10) i++;
      t %= me, o = t - me + i, c = o < 0 ? 0 : l / Re(10, i - o - 1) % 10 | 0;
    }
    if (n = n || r < 0 || m[p + 1] !== void 0 || (o < 0 ? l : l % Re(10, i - o - 1)), s = a < 4 ? (c || n) && (a == 0 || a == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (a == 4 || n || a == 6 && (t > 0 ? o > 0 ? l / Re(10, i - o) : 0 : m[p - 1]) % 10 & 1 || a == (e.s < 0 ? 8 : 7)), r < 1 || !m[0]) return m.length = 0, s ? (r -= e.e + 1, m[0] = Re(10, (me - r % me) % me), e.e = -r || 0) : m[0] = e.e = 0, e;
    if (t == 0 ? (m.length = p, u = 1, p--) : (m.length = p + 1, u = Re(10, me - t), m[p] = o > 0 ? (l / Re(10, i - o) % Re(10, o) | 0) * u : 0), s) for (; ; ) if (p == 0) {
      for (t = 1, o = m[0]; o >= 10; o /= 10) t++;
      for (o = m[0] += u, u = 1; o >= 10; o /= 10) u++;
      t != u && (e.e++, m[0] == hr && (m[0] = 1));
      break;
    } else {
      if (m[p] += u, m[p] != hr) break;
      m[p--] = 0, u = 1;
    }
    for (t = m.length; m[--t] === 0; ) m.pop();
  }
  return pe && (e.e > h.maxE ? (e.d = null, e.e = NaN) : e.e < h.minE && (e.e = 0, e.d = [0])), e;
}
function Dr(e, r, a) {
  if (!e.isFinite()) return du(e);
  var n, i = e.e, t = We(e.d), o = t.length;
  return r ? (a && (n = a - o) > 0 ? t = t.charAt(0) + "." + t.slice(1) + Ir(n) : o > 1 && (t = t.charAt(0) + "." + t.slice(1)), t = t + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (t = "0." + Ir(-i - 1) + t, a && (n = a - o) > 0 && (t += Ir(n))) : i >= o ? (t += Ir(i + 1 - o), a && (n = a - i - 1) > 0 && (t = t + "." + Ir(n))) : ((n = i + 1) < o && (t = t.slice(0, n) + "." + t.slice(n)), a && (n = a - o) > 0 && (i + 1 === o && (t += "."), t += Ir(n))), t;
}
function qn(e, r) {
  var a = e[0];
  for (r *= me; a >= 10; a /= 10) r++;
  return r;
}
function Cn(e, r, a) {
  if (r > fv) throw pe = true, a && (e.precision = a), Error(su);
  return le(new e(Nn), r, 1, true);
}
function gr(e, r, a) {
  if (r > aa) throw Error(su);
  return le(new e(An), r, a, true);
}
function fu(e) {
  var r = e.length - 1, a = r * me + 1;
  if (r = e[r], r) {
    for (; r % 10 == 0; r /= 10) a--;
    for (r = e[0]; r >= 10; r /= 10) a++;
  }
  return a;
}
function Ir(e) {
  for (var r = ""; e--; ) r += "0";
  return r;
}
function mu(e, r, a, n) {
  var i, t = new e(1), o = Math.ceil(n / me + 4);
  for (pe = false; ; ) {
    if (a % 2 && (t = t.times(r), si(t.d, o) && (i = true)), a = Xe(a / 2), a === 0) {
      a = t.d.length - 1, i && t.d[a] === 0 && ++t.d[a];
      break;
    }
    r = r.times(r), si(r.d, o);
  }
  return pe = true, t;
}
function oi(e) {
  return e.d[e.d.length - 1] & 1;
}
function pu(e, r, a) {
  for (var n, i, t = new e(r[0]), o = 0; ++o < r.length; ) {
    if (i = new e(r[o]), !i.s) {
      t = i;
      break;
    }
    n = t.cmp(i), (n === a || n === 0 && t.s === a) && (t = i);
  }
  return t;
}
function ia(e, r) {
  var a, n, i, t, o, u, c, s = 0, l = 0, m = 0, p = e.constructor, h = p.rounding, y = p.precision;
  if (!e.d || !e.d[0] || e.e > 17) return new p(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
  for (r == null ? (pe = false, c = y) : c = r, u = new p(0.03125); e.e > -2; ) e = e.times(u), m += 5;
  for (n = Math.log(Re(2, m)) / Math.LN10 * 2 + 5 | 0, c += n, a = t = o = new p(1), p.precision = c; ; ) {
    if (t = le(t.times(e), c, 1), a = a.times(++l), u = o.plus(Me(t, a, c, 1)), We(u.d).slice(0, c) === We(o.d).slice(0, c)) {
      for (i = m; i--; ) o = le(o.times(o), c, 1);
      if (r == null) if (s < 3 && Pt(o.d, c - n, h, s)) p.precision = c += 10, a = t = u = new p(1), l = 0, s++;
      else return le(o, p.precision = y, h, pe = true);
      else return p.precision = y, o;
    }
    o = u;
  }
}
function Rr(e, r) {
  var a, n, i, t, o, u, c, s, l, m, p, h = 1, y = 10, A = e, E = A.d, C = A.constructor, N = C.rounding, d = C.precision;
  if (A.s < 0 || !E || !E[0] || !A.e && E[0] == 1 && E.length == 1) return new C(E && !E[0] ? -1 / 0 : A.s != 1 ? NaN : E ? 0 : A);
  if (r == null ? (pe = false, l = d) : l = r, C.precision = l += y, a = We(E), n = a.charAt(0), Math.abs(t = A.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && a.charAt(1) > 3; ) A = A.times(e), a = We(A.d), n = a.charAt(0), h++;
    t = A.e, n > 1 ? (A = new C("0." + a), t++) : A = new C(n + "." + a.slice(1));
  } else return s = Cn(C, l + 2, d).times(t + ""), A = Rr(new C(n + "." + a.slice(1)), l - y).plus(s), C.precision = d, r == null ? le(A, d, N, pe = true) : A;
  for (m = A, c = o = A = Me(A.minus(1), A.plus(1), l, 1), p = le(A.times(A), l, 1), i = 3; ; ) {
    if (o = le(o.times(p), l, 1), s = c.plus(Me(o, new C(i), l, 1)), We(s.d).slice(0, l) === We(c.d).slice(0, l)) if (c = c.times(2), t !== 0 && (c = c.plus(Cn(C, l + 2, d).times(t + ""))), c = Me(c, new C(h), l, 1), r == null) if (Pt(c.d, l - y, N, u)) C.precision = l += y, s = o = A = Me(m.minus(1), m.plus(1), l, 1), p = le(A.times(A), l, 1), i = u = 1;
    else return le(c, C.precision = d, N, pe = true);
    else return C.precision = d, c;
    c = s, i += 2;
  }
}
function du(e) {
  return String(e.s * e.s / 0);
}
function gn(e, r) {
  var a, n, i;
  for ((a = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (n = r.search(/e/i)) > 0 ? (a < 0 && (a = n), a += +r.slice(n + 1), r = r.substring(0, n)) : a < 0 && (a = r.length), n = 0; r.charCodeAt(n) === 48; n++) ;
  for (i = r.length; r.charCodeAt(i - 1) === 48; --i) ;
  if (r = r.slice(n, i), r) {
    if (i -= n, e.e = a = a - n - 1, e.d = [], n = (a + 1) % me, a < 0 && (n += me), n < i) {
      for (n && e.d.push(+r.slice(0, n)), i -= me; n < i; ) e.d.push(+r.slice(n, n += me));
      r = r.slice(n), n = me - r.length;
    } else n -= i;
    for (; n--; ) r += "0";
    e.d.push(+r), pe && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else e.e = 0, e.d = [0];
  return e;
}
function pv(e, r) {
  var a, n, i, t, o, u, c, s, l;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), lu.test(r)) return gn(e, r);
  } else if (r === "Infinity" || r === "NaN") return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (uv.test(r)) a = 16, r = r.toLowerCase();
  else if (sv.test(r)) a = 2;
  else if (cv.test(r)) a = 8;
  else throw Error(zr + r);
  for (t = r.search(/p/i), t > 0 ? (c = +r.slice(t + 1), r = r.substring(2, t)) : r = r.slice(2), t = r.indexOf("."), o = t >= 0, n = e.constructor, o && (r = r.replace(".", ""), u = r.length, t = u - t, i = mu(n, new n(a), t, t * 2)), s = vn(r, a, hr), l = s.length - 1, t = l; s[t] === 0; --t) s.pop();
  return t < 0 ? new n(e.s * 0) : (e.e = qn(s, l), e.d = s, pe = false, o && (e = Me(e, i, u * 4)), c && (e = e.times(Math.abs(c) < 54 ? Re(2, c) : vt.pow(2, c))), pe = true, e);
}
function dv(e, r) {
  var a, n = r.d.length;
  if (n < 3) return r.isZero() ? r : mt(e, 2, r, r);
  a = 1.4 * Math.sqrt(n), a = a > 16 ? 16 : a | 0, r = r.times(1 / Pn(5, a)), r = mt(e, 2, r, r);
  for (var i, t = new e(5), o = new e(16), u = new e(20); a--; ) i = r.times(r), r = r.times(t.plus(i.times(o.times(i).minus(u))));
  return r;
}
function mt(e, r, a, n, i) {
  var t, o, u, c, s = e.precision, l = Math.ceil(s / me);
  for (pe = false, c = a.times(a), u = new e(n); ; ) {
    if (o = Me(u.times(c), new e(r++ * r++), s, 1), u = i ? n.plus(o) : n.minus(o), n = Me(o.times(c), new e(r++ * r++), s, 1), o = u.plus(n), o.d[l] !== void 0) {
      for (t = l; o.d[t] === u.d[t] && t--; ) ;
      if (t == -1) break;
    }
    t = u, u = n, n = o, o = t;
  }
  return pe = true, o.d.length = l + 1, o;
}
function Pn(e, r) {
  for (var a = e; --r; ) a *= e;
  return a;
}
function hu(e, r) {
  var a, n = r.s < 0, i = gr(e, e.precision, 1), t = i.times(0.5);
  if (r = r.abs(), r.lte(t)) return Cr = n ? 4 : 1, r;
  if (a = r.divToInt(i), a.isZero()) Cr = n ? 3 : 2;
  else {
    if (r = r.minus(a.times(i)), r.lte(t)) return Cr = oi(a) ? n ? 2 : 3 : n ? 4 : 1, r;
    Cr = oi(a) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return r.minus(i).abs();
}
function Aa(e, r, a, n) {
  var i, t, o, u, c, s, l, m, p, h = e.constructor, y = a !== void 0;
  if (y ? (nr(a, 1, Zr), n === void 0 ? n = h.rounding : nr(n, 0, 8)) : (a = h.precision, n = h.rounding), !e.isFinite()) l = du(e);
  else {
    for (l = Dr(e), o = l.indexOf("."), y ? (i = 2, r == 16 ? a = a * 4 - 3 : r == 8 && (a = a * 3 - 2)) : i = r, o >= 0 && (l = l.replace(".", ""), p = new h(1), p.e = l.length - o, p.d = vn(Dr(p), 10, i), p.e = p.d.length), m = vn(l, 10, i), t = c = m.length; m[--c] == 0; ) m.pop();
    if (!m[0]) l = y ? "0p+0" : "0";
    else {
      if (o < 0 ? t-- : (e = new h(e), e.d = m, e.e = t, e = Me(e, p, a, n, 0, i), m = e.d, t = e.e, s = ou), o = m[a], u = i / 2, s = s || m[a + 1] !== void 0, s = n < 4 ? (o !== void 0 || s) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : o > u || o === u && (n === 4 || s || n === 6 && m[a - 1] & 1 || n === (e.s < 0 ? 8 : 7)), m.length = a, s) for (; ++m[--a] > i - 1; ) m[a] = 0, a || (++t, m.unshift(1));
      for (c = m.length; !m[c - 1]; --c) ;
      for (o = 0, l = ""; o < c; o++) l += ta.charAt(m[o]);
      if (y) {
        if (c > 1) if (r == 16 || r == 8) {
          for (o = r == 16 ? 4 : 3, --c; c % o; c++) l += "0";
          for (m = vn(l, i, r), c = m.length; !m[c - 1]; --c) ;
          for (o = 1, l = "1."; o < c; o++) l += ta.charAt(m[o]);
        } else l = l.charAt(0) + "." + l.slice(1);
        l = l + (t < 0 ? "p" : "p+") + t;
      } else if (t < 0) {
        for (; ++t; ) l = "0" + l;
        l = "0." + l;
      } else if (++t > c) for (t -= c; t--; ) l += "0";
      else t < c && (l = l.slice(0, t) + "." + l.slice(t));
    }
    l = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + l;
  }
  return e.s < 0 ? "-" + l : l;
}
function si(e, r) {
  if (e.length > r) return e.length = r, true;
}
function hv(e) {
  return new this(e).abs();
}
function vv(e) {
  return new this(e).acos();
}
function gv(e) {
  return new this(e).acosh();
}
function yv(e, r) {
  return new this(e).plus(r);
}
function Dv(e) {
  return new this(e).asin();
}
function bv(e) {
  return new this(e).asinh();
}
function xv(e) {
  return new this(e).atan();
}
function wv(e) {
  return new this(e).atanh();
}
function Nv(e, r) {
  e = new this(e), r = new this(r);
  var a, n = this.precision, i = this.rounding, t = n + 4;
  return !e.s || !r.s ? a = new this(NaN) : !e.d && !r.d ? (a = gr(this, t, 1).times(r.s > 0 ? 0.25 : 0.75), a.s = e.s) : !r.d || e.isZero() ? (a = r.s < 0 ? gr(this, n, i) : new this(0), a.s = e.s) : !e.d || r.isZero() ? (a = gr(this, t, 1).times(0.5), a.s = e.s) : r.s < 0 ? (this.precision = t, this.rounding = 1, a = this.atan(Me(e, r, t, 1)), r = gr(this, t, 1), this.precision = n, this.rounding = i, a = e.s < 0 ? a.minus(r) : a.plus(r)) : a = this.atan(Me(e, r, t, 1)), a;
}
function Av(e) {
  return new this(e).cbrt();
}
function Cv(e) {
  return le(e = new this(e), e.e + 1, 2);
}
function Ev(e, r, a) {
  return new this(e).clamp(r, a);
}
function Fv(e) {
  if (!e || typeof e != "object") throw Error(kn + "Object expected");
  var r, a, n, i = e.defaults === true, t = ["precision", 1, Zr, "rounding", 0, 8, "toExpNeg", -ut, 0, "toExpPos", 0, ut, "maxE", 0, ut, "minE", -ut, 0, "modulo", 0, 9];
  for (r = 0; r < t.length; r += 3) if (a = t[r], i && (this[a] = na[a]), (n = e[a]) !== void 0) if (Xe(n) === n && n >= t[r + 1] && n <= t[r + 2]) this[a] = n;
  else throw Error(zr + a + ": " + n);
  if (a = "crypto", i && (this[a] = na[a]), (n = e[a]) !== void 0) if (n === true || n === false || n === 0 || n === 1) if (n) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[a] = true;
  else throw Error(uu);
  else this[a] = false;
  else throw Error(zr + a + ": " + n);
  return this;
}
function Bv(e) {
  return new this(e).cos();
}
function Sv(e) {
  return new this(e).cosh();
}
function vu(e) {
  var r, a, n;
  function i(t) {
    var o, u, c, s = this;
    if (!(s instanceof i)) return new i(t);
    if (s.constructor = i, ui(t)) {
      s.s = t.s, pe ? !t.d || t.e > i.maxE ? (s.e = NaN, s.d = null) : t.e < i.minE ? (s.e = 0, s.d = [0]) : (s.e = t.e, s.d = t.d.slice()) : (s.e = t.e, s.d = t.d ? t.d.slice() : t.d);
      return;
    }
    if (c = typeof t, c === "number") {
      if (t === 0) {
        s.s = 1 / t < 0 ? -1 : 1, s.e = 0, s.d = [0];
        return;
      }
      if (t < 0 ? (t = -t, s.s = -1) : s.s = 1, t === ~~t && t < 1e7) {
        for (o = 0, u = t; u >= 10; u /= 10) o++;
        pe ? o > i.maxE ? (s.e = NaN, s.d = null) : o < i.minE ? (s.e = 0, s.d = [0]) : (s.e = o, s.d = [t]) : (s.e = o, s.d = [t]);
        return;
      }
      if (t * 0 !== 0) {
        t || (s.s = NaN), s.e = NaN, s.d = null;
        return;
      }
      return gn(s, t.toString());
    }
    if (c === "string") return (u = t.charCodeAt(0)) === 45 ? (t = t.slice(1), s.s = -1) : (u === 43 && (t = t.slice(1)), s.s = 1), lu.test(t) ? gn(s, t) : pv(s, t);
    if (c === "bigint") return t < 0 ? (t = -t, s.s = -1) : s.s = 1, gn(s, t.toString());
    throw Error(zr + t);
  }
  if (i.prototype = H, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Fv, i.clone = vu, i.isDecimal = ui, i.abs = hv, i.acos = vv, i.acosh = gv, i.add = yv, i.asin = Dv, i.asinh = bv, i.atan = xv, i.atanh = wv, i.atan2 = Nv, i.cbrt = Av, i.ceil = Cv, i.clamp = Ev, i.cos = Bv, i.cosh = Sv, i.div = Tv, i.exp = Mv, i.floor = Ov, i.hypot = $v, i.ln = kv, i.log = qv, i.log10 = Iv, i.log2 = Pv, i.max = _v, i.min = Rv, i.mod = jv, i.mul = Lv, i.pow = zv, i.random = Uv, i.round = Wv, i.sign = Hv, i.sin = Zv, i.sinh = Jv, i.sqrt = Vv, i.sub = Xv, i.sum = Gv, i.tan = Qv, i.tanh = Kv, i.trunc = Yv, e === void 0 && (e = {}), e && e.defaults !== true) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < n.length; ) e.hasOwnProperty(a = n[r++]) || (e[a] = this[a]);
  return i.config(e), i;
}
function Tv(e, r) {
  return new this(e).div(r);
}
function Mv(e) {
  return new this(e).exp();
}
function Ov(e) {
  return le(e = new this(e), e.e + 1, 3);
}
function $v() {
  var e, r, a = new this(0);
  for (pe = false, e = 0; e < arguments.length; ) if (r = new this(arguments[e++]), r.d) a.d && (a = a.plus(r.times(r)));
  else {
    if (r.s) return pe = true, new this(1 / 0);
    a = r;
  }
  return pe = true, a.sqrt();
}
function ui(e) {
  return e instanceof vt || e && e.toStringTag === cu || false;
}
function kv(e) {
  return new this(e).ln();
}
function qv(e, r) {
  return new this(e).log(r);
}
function Pv(e) {
  return new this(e).log(2);
}
function Iv(e) {
  return new this(e).log(10);
}
function _v() {
  return pu(this, arguments, -1);
}
function Rv() {
  return pu(this, arguments, 1);
}
function jv(e, r) {
  return new this(e).mod(r);
}
function Lv(e, r) {
  return new this(e).mul(r);
}
function zv(e, r) {
  return new this(e).pow(r);
}
function Uv(e) {
  var r, a, n, i, t = 0, o = new this(1), u = [];
  if (e === void 0 ? e = this.precision : nr(e, 1, Zr), n = Math.ceil(e / me), this.crypto) if (crypto.getRandomValues) for (r = crypto.getRandomValues(new Uint32Array(n)); t < n; ) i = r[t], i >= 429e7 ? r[t] = crypto.getRandomValues(new Uint32Array(1))[0] : u[t++] = i % 1e7;
  else if (crypto.randomBytes) {
    for (r = crypto.randomBytes(n *= 4); t < n; ) i = r[t] + (r[t + 1] << 8) + (r[t + 2] << 16) + ((r[t + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(r, t) : (u.push(i % 1e7), t += 4);
    t = n / 4;
  } else throw Error(uu);
  else for (; t < n; ) u[t++] = Math.random() * 1e7 | 0;
  for (n = u[--t], e %= me, n && e && (i = Re(10, me - e), u[t] = (n / i | 0) * i); u[t] === 0; t--) u.pop();
  if (t < 0) a = 0, u = [0];
  else {
    for (a = -1; u[0] === 0; a -= me) u.shift();
    for (n = 1, i = u[0]; i >= 10; i /= 10) n++;
    n < me && (a -= me - n);
  }
  return o.e = a, o.d = u, o;
}
function Wv(e) {
  return le(e = new this(e), e.e + 1, this.rounding);
}
function Hv(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Zv(e) {
  return new this(e).sin();
}
function Jv(e) {
  return new this(e).sinh();
}
function Vv(e) {
  return new this(e).sqrt();
}
function Xv(e, r) {
  return new this(e).sub(r);
}
function Gv() {
  var e = 0, r = arguments, a = new this(r[e]);
  for (pe = false; a.s && ++e < r.length; ) a = a.plus(r[e]);
  return pe = true, le(a, this.precision, this.rounding);
}
function Qv(e) {
  return new this(e).tan();
}
function Kv(e) {
  return new this(e).tanh();
}
function Yv(e) {
  return le(e = new this(e), e.e + 1, 1);
}
H[Symbol.for("nodejs.util.inspect.custom")] = H.toString;
H[Symbol.toStringTag] = "Decimal";
var vt = H.constructor = vu(na);
Nn = new vt(Nn);
An = new vt(An);
function br(e, r, a) {
  if (!(this instanceof br)) throw new SyntaxError("Constructor must be called with the new operator");
  this.index = e, arguments.length < 3 ? (this.min = 0, this.max = r) : (this.min = r, this.max = a), this.min !== void 0 && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : this.max !== void 0 && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = new Error().stack;
}
br.prototype = new RangeError();
br.prototype.constructor = RangeError;
br.prototype.name = "IndexError";
br.prototype.isIndexError = true;
function dr(e, r, a) {
  if (!(this instanceof dr)) throw new SyntaxError("Constructor must be called with the new operator");
  this.actual = e, this.expected = r, this.relation = a, this.message = "Dimension mismatch (" + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + " " + (this.relation || "!=") + " " + (Array.isArray(r) ? "[" + r.join(", ") + "]" : r) + ")", this.stack = new Error().stack;
}
dr.prototype = new RangeError();
dr.prototype.constructor = RangeError;
dr.prototype.name = "DimensionError";
dr.prototype.isDimensionError = true;
function tr(e) {
  for (var r = []; Array.isArray(e); ) r.push(e.length), e = e[0];
  return r;
}
function eg(e, r) {
  if (e !== void 0) {
    if (!Pe(e) || !xe(e)) throw new TypeError("Index must be an integer (value: " + e + ")");
    if (e < 0 || typeof r == "number" && e >= r) throw new br(e, r);
  }
}
function rg(e, r) {
  var a = Ur(e, true), n = a.length;
  if (!Array.isArray(e) || !Array.isArray(r)) throw new TypeError("Array expected");
  if (r.length === 0) throw new dr(0, n, "!=");
  r = tg(r, n);
  var i = gu(r);
  if (n !== i) throw new dr(i, n, "!=");
  try {
    return ng(a, r);
  } catch (t) {
    throw t instanceof dr ? new dr(i, n, "!=") : t;
  }
}
function tg(e, r) {
  var a = gu(e), n = e.slice(), i = -1, t = e.indexOf(i), o = e.indexOf(i, t + 1) >= 0;
  if (o) throw new Error("More than one wildcard in sizes");
  var u = t >= 0, c = r % a === 0;
  if (u) if (c) n[t] = -r / a;
  else throw new Error("Could not replace wildcard, since " + r + " is no multiple of " + -a);
  return n;
}
function gu(e) {
  return e.reduce((r, a) => r * a, 1);
}
function ng(e, r) {
  for (var a = e, n, i = r.length - 1; i > 0; i--) {
    var t = r[i];
    n = [];
    for (var o = a.length / t, u = 0; u < o; u++) n.push(a.slice(u * t, (u + 1) * t));
    a = n;
  }
  return a;
}
function Ur(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (!Array.isArray(e)) return e;
  if (typeof r != "boolean") throw new TypeError("Boolean expected for second argument of flatten");
  var a = [];
  return r ? i(e) : n(e), a;
  function n(t) {
    for (var o = 0; o < t.length; o++) {
      var u = t[o];
      Array.isArray(u) ? n(u) : a.push(u);
    }
  }
  function i(t) {
    if (Array.isArray(t[0])) for (var o = 0; o < t.length; o++) i(t[o]);
    else for (var u = 0; u < t.length; u++) a.push(t[u]);
  }
}
function jr(e, r) {
  return Array.prototype.map.call(e, r);
}
function yu(e, r) {
  Array.prototype.forEach.call(e, r);
}
function ci(e, r) {
  if (tr(e).length !== 1) throw new Error("Only one dimensional matrices supported");
  return Array.prototype.filter.call(e, r);
}
function li(e, r) {
  if (tr(e).length !== 1) throw new Error("Only one dimensional matrices supported");
  return Array.prototype.filter.call(e, (a) => r.test(a));
}
function fi(e, r) {
  return Array.prototype.join.call(e, r);
}
function Du(e, r, a, n) {
  if (n < a) {
    if (e.length !== r.length) throw new dr(e.length, r.length);
    for (var i = [], t = 0; t < e.length; t++) i[t] = Du(e[t], r[t], a, n + 1);
    return i;
  } else return e.concat(r);
}
function ag() {
  var e = Array.prototype.slice.call(arguments, 0, -1), r = Array.prototype.slice.call(arguments, -1);
  if (e.length === 1) return e[0];
  if (e.length > 1) return e.slice(1).reduce(function(a, n) {
    return Du(a, n, r, 0);
  }, e[0]);
  throw new Error("Wrong number of arguments in function concat");
}
function oa() {
  for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++) r[a] = arguments[a];
  for (var n = r.map((p) => p.length), i = Math.max(...n), t = new Array(i).fill(null), o = 0; o < r.length; o++) for (var u = r[o], c = n[o], s = 0; s < c; s++) {
    var l = i - c + s;
    u[s] > t[l] && (t[l] = u[s]);
  }
  for (var m = 0; m < r.length; m++) bu(r[m], t);
  return t;
}
function bu(e, r) {
  for (var a = r.length, n = e.length, i = 0; i < n; i++) {
    var t = a - n + i;
    if (e[i] < r[t] && e[i] > 1 || e[i] > r[t]) throw new Error("shape mismatch: mismatch is found in arg with shape (".concat(e, ") not possible to broadcast dimension ").concat(n, " with size ").concat(e[i], " to size ").concat(r[t]));
  }
}
function Kt(e, r) {
  var a = tr(e);
  if (bn(a, r)) return e;
  bu(a, r);
  var n = oa(a, r), i = n.length, t = [...Array(i - a.length).fill(1), ...a], o = og(e);
  a.length < i && (o = rg(o, t), a = tr(o));
  for (var u = 0; u < i; u++) a[u] < n[u] && (o = ig(o, n[u], u), a = tr(o));
  return o;
}
function ig(e, r, a) {
  return ag(...Array(r).fill(e), a);
}
function sa(e, r) {
  if (!Array.isArray(e)) throw new Error("Array expected");
  var a = tr(e);
  if (r.length !== a.length) throw new dr(r.length, a.length);
  for (var n = 0; n < r.length; n++) eg(r[n], a[n]);
  return r.reduce((i, t) => i[t], e);
}
function xu(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (e.length === 0) return [];
  if (a) return t(e);
  var n = [];
  return i(e, 0);
  function i(o, u) {
    if (Array.isArray(o)) {
      for (var c = o.length, s = Array(c), l = 0; l < c; l++) n[u] = l, s[l] = i(o[l], u + 1);
      return s;
    } else return r(o, n.slice(0, u), e);
  }
  function t(o) {
    if (Array.isArray(o)) {
      for (var u = o.length, c = Array(u), s = 0; s < u; s++) c[s] = t(o[s]);
      return c;
    } else return r(o);
  }
}
function wu(e, r) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (e.length === 0) return;
  if (a) {
    t(e);
    return;
  }
  var n = [];
  i(e, 0);
  function i(o, u) {
    if (Array.isArray(o)) for (var c = o.length, s = 0; s < c; s++) n[u] = s, i(o[s], u + 1);
    else r(o, n.slice(0, u), e);
  }
  function t(o) {
    if (Array.isArray(o)) for (var u = o.length, c = 0; c < u; c++) t(o[c]);
    else r(o);
  }
}
function og(e) {
  return or([], e);
}
function Nu(e) {
  var r = e.length, a = e[0].length, n, i, t = [];
  for (i = 0; i < a; i++) {
    var o = [];
    for (n = 0; n < r; n++) o.push(e[n][i]);
    t.push(o);
  }
  return t;
}
function gt(e) {
  for (var r = 0; r < e.length; r++) if (ft(e[r])) return true;
  return false;
}
function Wr(e, r) {
  rr(e) ? e.forEach((a) => r(a), false, true) : wu(e, r, true);
}
function lr(e, r, a) {
  return rr(e) ? e.map((n) => r(n), false, true) : xu(e, r, true);
}
function In(e, r, a) {
  var n = Array.isArray(e) ? tr(e) : e.size();
  if (r < 0 || r >= n.length) throw new br(r, n.length);
  return rr(e) ? e.create(En(e.valueOf(), r, a), e.datatype()) : En(e, r, a);
}
function En(e, r, a) {
  var n, i, t, o;
  if (r <= 0) if (Array.isArray(e[0])) {
    for (o = Nu(e), i = [], n = 0; n < o.length; n++) i[n] = En(o[n], r - 1, a);
    return i;
  } else {
    for (t = e[0], n = 1; n < e.length; n++) t = a(t, e[n]);
    return t;
  }
  else {
    for (i = [], n = 0; n < e.length; n++) i[n] = En(e[n], r - 1, a);
    return i;
  }
}
var mi = "ceil";
new vt(10);
var sg = R(mi, ["typed", "config", "round"], (e) => {
  var { typed: r, config: a, round: n } = e;
  function i(t) {
    var o = Math.ceil(t), u = n(t);
    return o === u ? o : vr(t, u, a.relTol, a.absTol) && !vr(t, o, a.relTol, a.absTol) ? u : o;
  }
  return r(mi, { number: i, "number, number": function(o, u) {
    if (!xe(u)) throw new RangeError("number of decimals in function ceil must be an integer");
    if (u < 0 || u > 15) throw new RangeError("number of decimals in ceil number must be in range 0-15");
    var c = 10 ** u;
    return i(o * c) / c;
  } });
}), pi = "fix", ug = R(pi, ["typed", "ceil", "floor"], (e) => {
  var { typed: r, ceil: a, floor: n } = e;
  return r(pi, { number: function(t) {
    return t > 0 ? n(t) : a(t);
  }, "number, number": function(t, o) {
    return t > 0 ? n(t, o) : a(t, o);
  } });
}), di = "floor";
new vt(10);
var cg = R(di, ["typed", "config", "round"], (e) => {
  var { typed: r, config: a, round: n } = e;
  function i(t) {
    var o = Math.floor(t), u = n(t);
    return o === u ? o : vr(t, u, a.relTol, a.absTol) && !vr(t, o, a.relTol, a.absTol) ? u : o;
  }
  return r(di, { number: i, "number, number": function(o, u) {
    if (!xe(u)) throw new RangeError("number of decimals in function floor must be an integer");
    if (u < 0 || u > 15) throw new RangeError("number of decimals in floor number must be in range 0 - 15");
    var c = 10 ** u;
    return i(o * c) / c;
  } });
}), hi = "hypot", lg = ["typed", "abs", "addScalar", "divideScalar", "multiplyScalar", "sqrt", "smaller", "isPositive"], fg = R(hi, lg, (e) => {
  var { typed: r, abs: a, addScalar: n, divideScalar: i, multiplyScalar: t, sqrt: o, smaller: u, isPositive: c } = e;
  return r(hi, { "... number | BigNumber": s, Array: s, Matrix: (l) => s(Ur(l.toArray(), true)) });
  function s(l) {
    for (var m = 0, p = 0, h = 0; h < l.length; h++) {
      if (Sn(l[h])) throw new TypeError("Unexpected type of argument to hypot");
      var y = a(l[h]);
      u(p, y) ? (m = t(m, t(i(p, y), i(p, y))), m = n(m, 1), p = y) : m = n(m, c(y) ? t(i(y, p), i(y, p)) : y);
    }
    return t(p, o(m));
  }
}), vi = "stirlingS2", mg = ["typed", "addScalar", "subtractScalar", "multiplyScalar", "divideScalar", "pow", "factorial", "combinations", "isNegative", "isInteger", "number", "?bignumber", "larger"], pg = R(vi, mg, (e) => {
  var { typed: r, addScalar: a, subtractScalar: n, multiplyScalar: i, divideScalar: t, pow: o, factorial: u, combinations: c, isNegative: s, isInteger: l, number: m, bignumber: p, larger: h } = e, y = [], A = [];
  return r(vi, { "number | BigNumber, number | BigNumber": function(C, N) {
    if (!l(C) || s(C) || !l(N) || s(N)) throw new TypeError("Non-negative integer value expected in function stirlingS2");
    if (h(N, C)) throw new TypeError("k must be less than or equal to n in function stirlingS2");
    var d = !(Pe(C) && Pe(N)), x = d ? A : y, g = d ? p : m, w = m(C), F = m(N);
    if (x[w] && x[w].length > F) return x[w][F];
    for (var $ = 0; $ <= w; ++$) if (x[$] || (x[$] = [g($ === 0 ? 1 : 0)]), $ !== 0) for (var Z = x[$], _ = x[$ - 1], q = Z.length; q <= $ && q <= F; ++q) q === $ ? Z[q] = 1 : Z[q] = a(i(g(q), _[q]), _[q - 1]);
    return x[w][F];
  } });
}), gi = "bellNumbers", dg = ["typed", "addScalar", "isNegative", "isInteger", "stirlingS2"], hg = R(gi, dg, (e) => {
  var { typed: r, addScalar: a, isNegative: n, isInteger: i, stirlingS2: t } = e;
  return r(gi, { "number | BigNumber": function(u) {
    if (!i(u) || n(u)) throw new TypeError("Non-negative integer value expected in function bellNumbers");
    for (var c = 0, s = 0; s <= u; s++) c = a(c, t(u, s));
    return c;
  } });
}), yi = "catalan", vg = ["typed", "addScalar", "divideScalar", "multiplyScalar", "combinations", "isNegative", "isInteger"], gg = R(yi, vg, (e) => {
  var { typed: r, addScalar: a, divideScalar: n, multiplyScalar: i, combinations: t, isNegative: o, isInteger: u } = e;
  return r(yi, { "number | BigNumber": function(s) {
    if (!u(s) || o(s)) throw new TypeError("Non-negative integer value expected in function catalan");
    return n(t(i(s, 2), s), a(s, 1));
  } });
}), Di = "composition", yg = ["typed", "addScalar", "combinations", "isNegative", "isPositive", "isInteger", "larger"], Dg = R(Di, yg, (e) => {
  var { typed: r, addScalar: a, combinations: n, isPositive: i, isNegative: t, isInteger: o, larger: u } = e;
  return r(Di, { "number | BigNumber, number | BigNumber": function(s, l) {
    if (!o(s) || !i(s) || !o(l) || !i(l)) throw new TypeError("Positive integer value expected in function composition");
    if (u(l, s)) throw new TypeError("k must be less than or equal to n in function composition");
    return n(a(s, -1), a(l, -1));
  } });
}), bg = "15.1.0";
function xg(e) {
  var r = 0, a = 1, n = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), t = 0, o = function(c) {
    var s = i[c];
    if (s && (delete n[s], delete i[c], --r, a === s)) {
      if (!r) {
        t = 0, a = 1;
        return;
      }
      for (; !Object.prototype.hasOwnProperty.call(n, ++a); ) ;
    }
  };
  return e = Math.abs(e), { hit: function(c) {
    var s = i[c], l = ++t;
    if (n[l] = c, i[c] = l, !s) return ++r, r <= e ? void 0 : (c = n[a], o(c), c);
    if (delete n[s], a === s) for (; !Object.prototype.hasOwnProperty.call(n, ++a); ) ;
  }, delete: o, clear: function() {
    r = t = 0, a = 1, n = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null);
  } };
}
function _n(e) {
  var { hasher: r, limit: a } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return a = a ?? Number.POSITIVE_INFINITY, r = r ?? JSON.stringify, function n() {
    typeof n.cache != "object" && (n.cache = { values: /* @__PURE__ */ new Map(), lru: xg(a || Number.POSITIVE_INFINITY) });
    for (var i = [], t = 0; t < arguments.length; t++) i[t] = arguments[t];
    var o = r(i);
    if (n.cache.values.has(o)) return n.cache.lru.hit(o), n.cache.values.get(o);
    var u = e.apply(e, i);
    return n.cache.values.set(o, u), n.cache.values.delete(n.cache.lru.hit(o)), u;
  };
}
var wg = _n(function(e) {
  return new e(1).exp();
}, { hasher: Rn }), Ng = _n(function(e) {
  return new e(1).plus(new e(5).sqrt()).div(2);
}, { hasher: Rn }), Au = _n(function(e) {
  return e.acos(-1);
}, { hasher: Rn }), Ag = _n(function(e) {
  return Au(e).times(2);
}, { hasher: Rn });
function Rn(e) {
  return e[0].precision;
}
var Cg = R("true", [], () => true), Eg = R("false", [], () => false), Fg = R("null", [], () => null), Bg = mr("Infinity", ["config", "?BigNumber"], (e) => {
  var { config: r, BigNumber: a } = e;
  return r.number === "BigNumber" ? new a(1 / 0) : 1 / 0;
}), Sg = mr("NaN", ["config", "?BigNumber"], (e) => {
  var { config: r, BigNumber: a } = e;
  return r.number === "BigNumber" ? new a(NaN) : NaN;
}), Tg = mr("pi", ["config", "?BigNumber"], (e) => {
  var { config: r, BigNumber: a } = e;
  return r.number === "BigNumber" ? Au(a) : wl;
}), Mg = mr("tau", ["config", "?BigNumber"], (e) => {
  var { config: r, BigNumber: a } = e;
  return r.number === "BigNumber" ? Ag(a) : Nl;
}), Og = mr("e", ["config", "?BigNumber"], (e) => {
  var { config: r, BigNumber: a } = e;
  return r.number === "BigNumber" ? wg(a) : Al;
}), $g = mr("phi", ["config", "?BigNumber"], (e) => {
  var { config: r, BigNumber: a } = e;
  return r.number === "BigNumber" ? Ng(a) : Cl;
}), kg = mr("LN2", ["config", "?BigNumber"], (e) => {
  var { config: r, BigNumber: a } = e;
  return r.number === "BigNumber" ? new a(2).ln() : Math.LN2;
}), qg = mr("LN10", ["config", "?BigNumber"], (e) => {
  var { config: r, BigNumber: a } = e;
  return r.number === "BigNumber" ? new a(10).ln() : Math.LN10;
}), Pg = mr("LOG2E", ["config", "?BigNumber"], (e) => {
  var { config: r, BigNumber: a } = e;
  return r.number === "BigNumber" ? new a(1).div(new a(2).ln()) : Math.LOG2E;
}), Ig = mr("LOG10E", ["config", "?BigNumber"], (e) => {
  var { config: r, BigNumber: a } = e;
  return r.number === "BigNumber" ? new a(1).div(new a(10).ln()) : Math.LOG10E;
}), _g = mr("SQRT1_2", ["config", "?BigNumber"], (e) => {
  var { config: r, BigNumber: a } = e;
  return r.number === "BigNumber" ? new a("0.5").sqrt() : Math.SQRT1_2;
}), Rg = mr("SQRT2", ["config", "?BigNumber"], (e) => {
  var { config: r, BigNumber: a } = e;
  return r.number === "BigNumber" ? new a(2).sqrt() : Math.SQRT2;
}), jg = R("version", [], () => bg);
function mr(e, r, a) {
  return R(e, r, a, { recreateOnConfigChange: true });
}
var Lg = "number", zg = ["typed"];
function Ug(e) {
  var r = e.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);
  if (r) {
    var a = { "0b": 2, "0o": 8, "0x": 16 }[r[1]], n = r[2], i = r[3];
    return { input: e, radix: a, integerPart: n, fractionalPart: i };
  } else return null;
}
function Wg(e) {
  for (var r = parseInt(e.integerPart, e.radix), a = 0, n = 0; n < e.fractionalPart.length; n++) {
    var i = parseInt(e.fractionalPart[n], e.radix);
    a += i / Math.pow(e.radix, n + 1);
  }
  var t = r + a;
  if (isNaN(t)) throw new SyntaxError('String "' + e.input + '" is not a valid number');
  return t;
}
var Hg = R(Lg, zg, (e) => {
  var { typed: r } = e, a = r("number", { "": function() {
    return 0;
  }, number: function(i) {
    return i;
  }, string: function(i) {
    if (i === "NaN") return NaN;
    var t = Ug(i);
    if (t) return Wg(t);
    var o = 0, u = i.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
    u && (o = Number(u[2]), i = u[1]);
    var c = Number(i);
    if (isNaN(c)) throw new SyntaxError('String "' + i + '" is not a valid number');
    if (u) {
      if (c > 2 ** o - 1) throw new SyntaxError('String "'.concat(i, '" is out of range'));
      c >= 2 ** (o - 1) && (c = c - 2 ** o);
    }
    return c;
  }, BigNumber: function(i) {
    return i.toNumber();
  }, bigint: function(i) {
    return Number(i);
  }, Fraction: function(i) {
    return i.valueOf();
  }, Unit: r.referToSelf((n) => (i) => {
    var t = i.clone();
    return t.value = n(i.value), t;
  }), null: function(i) {
    return 0;
  }, "Unit, string | Unit": function(i, t) {
    return i.toNumber(t);
  }, "Array | Matrix": r.referToSelf((n) => (i) => lr(i, n)) });
  return a.fromJSON = function(n) {
    return parseFloat(n.value);
  }, a;
}), Zg = "bigint", Jg = ["typed"], Vg = R(Zg, Jg, (e) => {
  var { typed: r } = e, a = r("bigint", { "": function() {
    return 0n;
  }, bigint: function(i) {
    return i;
  }, number: function(i) {
    return BigInt(i.toFixed());
  }, BigNumber: function(i) {
    return BigInt(i.round().toString());
  }, Fraction: function(i) {
    return BigInt(i.valueOf().toFixed());
  }, "string | boolean": function(i) {
    return BigInt(i);
  }, null: function(i) {
    return 0n;
  }, "Array | Matrix": r.referToSelf((n) => (i) => lr(i, n)) });
  return a.fromJSON = function(n) {
    return BigInt(n.value);
  }, a;
}), bi = "string", Xg = ["typed"], Gg = R(bi, Xg, (e) => {
  var { typed: r } = e;
  return r(bi, { "": function() {
    return "";
  }, number: $t, null: function(n) {
    return "null";
  }, boolean: function(n) {
    return n + "";
  }, string: function(n) {
    return n;
  }, "Array | Matrix": r.referToSelf((a) => (n) => lr(n, a)), any: function(n) {
    return String(n);
  } });
}), xi = "boolean", Qg = ["typed"], Kg = R(xi, Qg, (e) => {
  var { typed: r } = e;
  return r(xi, { "": function() {
    return false;
  }, boolean: function(n) {
    return n;
  }, number: function(n) {
    return !!n;
  }, null: function(n) {
    return false;
  }, BigNumber: function(n) {
    return !n.isZero();
  }, string: function(n) {
    var i = n.toLowerCase();
    if (i === "true") return true;
    if (i === "false") return false;
    var t = Number(n);
    if (n !== "" && !isNaN(t)) return !!t;
    throw new Error('Cannot convert "' + n + '" to a boolean');
  }, "Array | Matrix": r.referToSelf((a) => (n) => lr(n, a)) });
}), wi = "parser", Yg = ["typed", "Parser"], e0 = R(wi, Yg, (e) => {
  var { typed: r, Parser: a } = e;
  return r(wi, { "": function() {
    return new a();
  } });
}), Cu = /* @__PURE__ */ new Set(["end"]), r0 = "Node", t0 = ["mathWithTransform"], n0 = R(r0, t0, (e) => {
  var { mathWithTransform: r } = e;
  function a(i) {
    for (var t of [...Cu]) if (i.has(t)) throw new Error('Scope contains an illegal symbol, "' + t + '" is a reserved keyword');
  }
  class n {
    get type() {
      return "Node";
    }
    get isNode() {
      return true;
    }
    evaluate(t) {
      return this.compile().evaluate(t);
    }
    compile() {
      var t = this._compile(r, {}), o = {}, u = null;
      function c(s) {
        var l = ct(s);
        return a(l), t(l, o, u);
      }
      return { evaluate: c };
    }
    _compile(t, o) {
      throw new Error("Method _compile must be implemented by type " + this.type);
    }
    forEach(t) {
      throw new Error("Cannot run forEach on a Node interface");
    }
    map(t) {
      throw new Error("Cannot run map on a Node interface");
    }
    _ifNode(t) {
      if (!Fe(t)) throw new TypeError("Callback function must return a Node");
      return t;
    }
    traverse(t) {
      t(this, null, null);
      function o(u, c) {
        u.forEach(function(s, l, m) {
          c(s, l, m), o(s, c);
        });
      }
      o(this, t);
    }
    transform(t) {
      function o(u, c, s) {
        var l = t(u, c, s);
        return l !== u ? l : u.map(o);
      }
      return o(this, null, null);
    }
    filter(t) {
      var o = [];
      return this.traverse(function(u, c, s) {
        t(u, c, s) && o.push(u);
      }), o;
    }
    clone() {
      throw new Error("Cannot clone a Node interface");
    }
    cloneDeep() {
      return this.map(function(t) {
        return t.cloneDeep();
      });
    }
    equals(t) {
      return t ? this.type === t.type && bn(this, t) : false;
    }
    toString(t) {
      var o = this._getCustomString(t);
      return typeof o < "u" ? o : this._toString(t);
    }
    _toString() {
      throw new Error("_toString not implemented for " + this.type);
    }
    toJSON() {
      throw new Error("Cannot serialize object: toJSON not implemented by " + this.type);
    }
    toHTML(t) {
      var o = this._getCustomString(t);
      return typeof o < "u" ? o : this._toHTML(t);
    }
    _toHTML() {
      throw new Error("_toHTML not implemented for " + this.type);
    }
    toTex(t) {
      var o = this._getCustomString(t);
      return typeof o < "u" ? o : this._toTex(t);
    }
    _toTex(t) {
      throw new Error("_toTex not implemented for " + this.type);
    }
    _getCustomString(t) {
      if (t && typeof t == "object") switch (typeof t.handler) {
        case "object":
        case "undefined":
          return;
        case "function":
          return t.handler(this, t);
        default:
          throw new TypeError("Object or function expected as callback");
      }
    }
    getIdentifier() {
      return this.type;
    }
    getContent() {
      return this;
    }
  }
  return n;
}, { isClass: true, isNode: true });
function xr(e) {
  return e && e.isIndexError ? new br(e.index + 1, e.min + 1, e.max !== void 0 ? e.max + 1 : void 0) : e;
}
function Eu(e) {
  var { subset: r } = e;
  return function(n, i) {
    try {
      if (Array.isArray(n)) return r(n, i);
      if (n && typeof n.subset == "function") return n.subset(i);
      if (typeof n == "string") return r(n, i);
      if (typeof n == "object") {
        if (!i.isObjectProperty()) throw new TypeError("Cannot apply a numeric index as object property");
        return er(n, i.getObjectProperty());
      } else throw new TypeError("Cannot apply index: unsupported type of object");
    } catch (t) {
      throw xr(t);
    }
  };
}
var Yt = "AccessorNode", a0 = ["subset", "Node"], i0 = R(Yt, a0, (e) => {
  var { subset: r, Node: a } = e, n = Eu({ subset: r });
  function i(o) {
    return !(Fr(o) || ur(o) || Ne(o) || Lr(o) || Mn(o) || Br(o) || ze(o));
  }
  class t extends a {
    constructor(u, c) {
      var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      if (super(), !Fe(u)) throw new TypeError('Node expected for parameter "object"');
      if (!dt(c)) throw new TypeError('IndexNode expected for parameter "index"');
      this.object = u, this.index = c, this.optionalChaining = s;
    }
    get name() {
      return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || "";
    }
    get type() {
      return Yt;
    }
    get isAccessorNode() {
      return true;
    }
    _compile(u, c) {
      var s = this.object._compile(u, c), l = this.index._compile(u, c), m = this.optionalChaining, p = Fr(this.object) && this.object.optionalChaining;
      if (this.index.isObjectProperty()) {
        var h = this.index.getObjectProperty();
        return function(A, E, C) {
          var N = C || {}, d = s(A, E, N);
          if (m && d == null) {
            N.optionalShortCircuit = true;
            return;
          }
          if (!(p && N !== null && N !== void 0 && N.optionalShortCircuit)) return er(d, h);
        };
      } else return function(A, E, C) {
        var N = C || {}, d = s(A, E, N);
        if (m && d == null) {
          N.optionalShortCircuit = true;
          return;
        }
        if (!(p && N !== null && N !== void 0 && N.optionalShortCircuit)) {
          var x = l(A, E, d);
          return n(d, x);
        }
      };
    }
    forEach(u) {
      u(this.object, "object", this), u(this.index, "index", this);
    }
    map(u) {
      return new t(this._ifNode(u(this.object, "object", this)), this._ifNode(u(this.index, "index", this)), this.optionalChaining);
    }
    clone() {
      return new t(this.object, this.index, this.optionalChaining);
    }
    _toString(u) {
      var c = this.object.toString(u);
      i(this.object) && (c = "(" + c + ")");
      var s = this.optionalChaining ? this.index.dotNotation ? "?" : "?." : "";
      return c + s + this.index.toString(u);
    }
    _toHTML(u) {
      var c = this.object.toHTML(u);
      return i(this.object) && (c = '<span class="math-parenthesis math-round-parenthesis">(</span>' + c + '<span class="math-parenthesis math-round-parenthesis">)</span>'), c + this.index.toHTML(u);
    }
    _toTex(u) {
      var c = this.object.toTex(u);
      return i(this.object) && (c = "\\left(' + object + '\\right)"), c + this.index.toTex(u);
    }
    toJSON() {
      return { mathjs: Yt, object: this.object, index: this.index, optionalChaining: this.optionalChaining };
    }
    static fromJSON(u) {
      return new t(u.object, u.index, u.optionalChaining);
    }
  }
  return Ue(t, "name", Yt), t;
}, { isClass: true, isNode: true }), en = "ArrayNode", o0 = ["Node"], s0 = R(en, o0, (e) => {
  var { Node: r } = e;
  class a extends r {
    constructor(i) {
      if (super(), this.items = i || [], !Array.isArray(this.items) || !this.items.every(Fe)) throw new TypeError("Array containing Nodes expected");
    }
    get type() {
      return en;
    }
    get isArrayNode() {
      return true;
    }
    _compile(i, t) {
      var o = jr(this.items, function(s) {
        return s._compile(i, t);
      }), u = i.config.matrix !== "Array";
      if (u) {
        var c = i.matrix;
        return function(l, m, p) {
          return c(jr(o, function(h) {
            return h(l, m, p);
          }));
        };
      } else return function(l, m, p) {
        return jr(o, function(h) {
          return h(l, m, p);
        });
      };
    }
    forEach(i) {
      for (var t = 0; t < this.items.length; t++) {
        var o = this.items[t];
        i(o, "items[" + t + "]", this);
      }
    }
    map(i) {
      for (var t = [], o = 0; o < this.items.length; o++) t[o] = this._ifNode(i(this.items[o], "items[" + o + "]", this));
      return new a(t);
    }
    clone() {
      return new a(this.items.slice(0));
    }
    _toString(i) {
      var t = this.items.map(function(o) {
        return o.toString(i);
      });
      return "[" + t.join(", ") + "]";
    }
    toJSON() {
      return { mathjs: en, items: this.items };
    }
    static fromJSON(i) {
      return new a(i.items);
    }
    _toHTML(i) {
      var t = this.items.map(function(o) {
        return o.toHTML(i);
      });
      return '<span class="math-parenthesis math-square-parenthesis">[</span>' + t.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>';
    }
    _toTex(i) {
      function t(o, u) {
        var c = o.some(ur) && !o.every(ur), s = u || c, l = s ? "&" : "\\\\", m = o.map(function(p) {
          return p.items ? t(p.items, !u) : p.toTex(i);
        }).join(l);
        return c || !s || s && !u ? "\\begin{bmatrix}" + m + "\\end{bmatrix}" : m;
      }
      return t(this.items, false);
    }
  }
  return Ue(a, "name", en), a;
}, { isClass: true, isNode: true });
function u0(e) {
  var { subset: r, matrix: a } = e;
  return function(i, t, o) {
    try {
      if (Array.isArray(i)) {
        var u = a(i).subset(t, o).valueOf();
        return u.forEach((c, s) => {
          i[s] = c;
        }), i;
      } else {
        if (i && typeof i.subset == "function") return i.subset(t, o);
        if (typeof i == "string") return r(i, t, o);
        if (typeof i == "object") {
          if (!t.isObjectProperty()) throw TypeError("Cannot apply a numeric index as object property");
          return kt(i, t.getObjectProperty(), o), i;
        } else throw new TypeError("Cannot apply index: unsupported type of object");
      }
    } catch (c) {
      throw xr(c);
    }
  };
}
var rn = "AssignmentNode", c0 = ["subset", "?matrix", "Node"], l0 = R(rn, c0, (e) => {
  var { subset: r, matrix: a, Node: n } = e, i = Eu({ subset: r }), t = u0({ subset: r, matrix: a });
  function o(c, s, l) {
    s || (s = "keep");
    var m = Se(c, s, l), p = Se(c.value, s, l);
    return s === "all" || p !== null && p <= m;
  }
  class u extends n {
    constructor(s, l, m) {
      if (super(), this.object = s, this.index = m ? l : null, this.value = m || l, !ze(s) && !Fr(s)) throw new TypeError('SymbolNode or AccessorNode expected as "object"');
      if (ze(s) && s.name === "end") throw new Error('Cannot assign to symbol "end"');
      if (this.index && !dt(this.index)) throw new TypeError('IndexNode expected as "index"');
      if (!Fe(this.value)) throw new TypeError('Node expected as "value"');
    }
    get name() {
      return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || "";
    }
    get type() {
      return rn;
    }
    get isAssignmentNode() {
      return true;
    }
    _compile(s, l) {
      var m = this.object._compile(s, l), p = this.index ? this.index._compile(s, l) : null, h = this.value._compile(s, l), y = this.object.name;
      if (this.index) if (this.index.isObjectProperty()) {
        var A = this.index.getObjectProperty();
        return function(x, g, w) {
          var F = m(x, g, w), $ = h(x, g, w);
          return kt(F, A, $), $;
        };
      } else {
        if (ze(this.object)) return function(x, g, w) {
          var F = m(x, g, w), $ = h(x, g, w), Z = p(x, g, F);
          return x.set(y, t(F, Z, $)), $;
        };
        var E = this.object.object._compile(s, l);
        if (this.object.index.isObjectProperty()) {
          var C = this.object.index.getObjectProperty();
          return function(x, g, w) {
            var F = E(x, g, w), $ = er(F, C), Z = p(x, g, $), _ = h(x, g, w);
            return kt(F, C, t($, Z, _)), _;
          };
        } else {
          var N = this.object.index._compile(s, l);
          return function(x, g, w) {
            var F = E(x, g, w), $ = N(x, g, F), Z = i(F, $), _ = p(x, g, Z), q = h(x, g, w);
            return t(F, $, t(Z, _, q)), q;
          };
        }
      }
      else {
        if (!ze(this.object)) throw new TypeError("SymbolNode expected as object");
        return function(x, g, w) {
          var F = h(x, g, w);
          return x.set(y, F), F;
        };
      }
    }
    forEach(s) {
      s(this.object, "object", this), this.index && s(this.index, "index", this), s(this.value, "value", this);
    }
    map(s) {
      var l = this._ifNode(s(this.object, "object", this)), m = this.index ? this._ifNode(s(this.index, "index", this)) : null, p = this._ifNode(s(this.value, "value", this));
      return new u(l, m, p);
    }
    clone() {
      return new u(this.object, this.index, this.value);
    }
    _toString(s) {
      var l = this.object.toString(s), m = this.index ? this.index.toString(s) : "", p = this.value.toString(s);
      return o(this, s && s.parenthesis, s && s.implicit) && (p = "(" + p + ")"), l + m + " = " + p;
    }
    toJSON() {
      return { mathjs: rn, object: this.object, index: this.index, value: this.value };
    }
    static fromJSON(s) {
      return new u(s.object, s.index, s.value);
    }
    _toHTML(s) {
      var l = this.object.toHTML(s), m = this.index ? this.index.toHTML(s) : "", p = this.value.toHTML(s);
      return o(this, s && s.parenthesis, s && s.implicit) && (p = '<span class="math-paranthesis math-round-parenthesis">(</span>' + p + '<span class="math-paranthesis math-round-parenthesis">)</span>'), l + m + '<span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + p;
    }
    _toTex(s) {
      var l = this.object.toTex(s), m = this.index ? this.index.toTex(s) : "", p = this.value.toTex(s);
      return o(this, s && s.parenthesis, s && s.implicit) && (p = "\\left(".concat(p, "\\right)")), l + m + "=" + p;
    }
  }
  return Ue(u, "name", rn), u;
}, { isClass: true, isNode: true }), tn = "BlockNode", f0 = ["ResultSet", "Node"], m0 = R(tn, f0, (e) => {
  var { ResultSet: r, Node: a } = e;
  class n extends a {
    constructor(t) {
      if (super(), !Array.isArray(t)) throw new Error("Array expected");
      this.blocks = t.map(function(o) {
        var u = o && o.node, c = o && o.visible !== void 0 ? o.visible : true;
        if (!Fe(u)) throw new TypeError('Property "node" must be a Node');
        if (typeof c != "boolean") throw new TypeError('Property "visible" must be a boolean');
        return { node: u, visible: c };
      });
    }
    get type() {
      return tn;
    }
    get isBlockNode() {
      return true;
    }
    _compile(t, o) {
      var u = jr(this.blocks, function(c) {
        return { evaluate: c.node._compile(t, o), visible: c.visible };
      });
      return function(s, l, m) {
        var p = [];
        return yu(u, function(y) {
          var A = y.evaluate(s, l, m);
          y.visible && p.push(A);
        }), new r(p);
      };
    }
    forEach(t) {
      for (var o = 0; o < this.blocks.length; o++) t(this.blocks[o].node, "blocks[" + o + "].node", this);
    }
    map(t) {
      for (var o = [], u = 0; u < this.blocks.length; u++) {
        var c = this.blocks[u], s = this._ifNode(t(c.node, "blocks[" + u + "].node", this));
        o[u] = { node: s, visible: c.visible };
      }
      return new n(o);
    }
    clone() {
      var t = this.blocks.map(function(o) {
        return { node: o.node, visible: o.visible };
      });
      return new n(t);
    }
    _toString(t) {
      return this.blocks.map(function(o) {
        return o.node.toString(t) + (o.visible ? "" : ";");
      }).join(`
`);
    }
    toJSON() {
      return { mathjs: tn, blocks: this.blocks };
    }
    static fromJSON(t) {
      return new n(t.blocks);
    }
    _toHTML(t) {
      return this.blocks.map(function(o) {
        return o.node.toHTML(t) + (o.visible ? "" : '<span class="math-separator">;</span>');
      }).join('<span class="math-separator"><br /></span>');
    }
    _toTex(t) {
      return this.blocks.map(function(o) {
        return o.node.toTex(t) + (o.visible ? "" : ";");
      }).join(`\\;\\;
`);
    }
  }
  return Ue(n, "name", tn), n;
}, { isClass: true, isNode: true }), nn = "ConditionalNode", p0 = ["Node"], d0 = R(nn, p0, (e) => {
  var { Node: r } = e;
  function a(i) {
    if (typeof i == "number" || typeof i == "boolean" || typeof i == "string") return !!i;
    if (i) {
      if (He(i)) return !i.isZero();
      if (Sn(i)) return !!(i.re || i.im);
      if (Io(i)) return !!i.value;
    }
    if (i == null) return false;
    throw new TypeError('Unsupported type of condition "' + Ze(i) + '"');
  }
  class n extends r {
    constructor(t, o, u) {
      if (super(), !Fe(t)) throw new TypeError("Parameter condition must be a Node");
      if (!Fe(o)) throw new TypeError("Parameter trueExpr must be a Node");
      if (!Fe(u)) throw new TypeError("Parameter falseExpr must be a Node");
      this.condition = t, this.trueExpr = o, this.falseExpr = u;
    }
    get type() {
      return nn;
    }
    get isConditionalNode() {
      return true;
    }
    _compile(t, o) {
      var u = this.condition._compile(t, o), c = this.trueExpr._compile(t, o), s = this.falseExpr._compile(t, o);
      return function(m, p, h) {
        return a(u(m, p, h)) ? c(m, p, h) : s(m, p, h);
      };
    }
    forEach(t) {
      t(this.condition, "condition", this), t(this.trueExpr, "trueExpr", this), t(this.falseExpr, "falseExpr", this);
    }
    map(t) {
      return new n(this._ifNode(t(this.condition, "condition", this)), this._ifNode(t(this.trueExpr, "trueExpr", this)), this._ifNode(t(this.falseExpr, "falseExpr", this)));
    }
    clone() {
      return new n(this.condition, this.trueExpr, this.falseExpr);
    }
    _toString(t) {
      var o = t && t.parenthesis ? t.parenthesis : "keep", u = Se(this, o, t && t.implicit), c = this.condition.toString(t), s = Se(this.condition, o, t && t.implicit);
      (o === "all" || this.condition.type === "OperatorNode" || s !== null && s <= u) && (c = "(" + c + ")");
      var l = this.trueExpr.toString(t), m = Se(this.trueExpr, o, t && t.implicit);
      (o === "all" || this.trueExpr.type === "OperatorNode" || m !== null && m <= u) && (l = "(" + l + ")");
      var p = this.falseExpr.toString(t), h = Se(this.falseExpr, o, t && t.implicit);
      return (o === "all" || this.falseExpr.type === "OperatorNode" || h !== null && h <= u) && (p = "(" + p + ")"), c + " ? " + l + " : " + p;
    }
    toJSON() {
      return { mathjs: nn, condition: this.condition, trueExpr: this.trueExpr, falseExpr: this.falseExpr };
    }
    static fromJSON(t) {
      return new n(t.condition, t.trueExpr, t.falseExpr);
    }
    _toHTML(t) {
      var o = t && t.parenthesis ? t.parenthesis : "keep", u = Se(this, o, t && t.implicit), c = this.condition.toHTML(t), s = Se(this.condition, o, t && t.implicit);
      (o === "all" || this.condition.type === "OperatorNode" || s !== null && s <= u) && (c = '<span class="math-parenthesis math-round-parenthesis">(</span>' + c + '<span class="math-parenthesis math-round-parenthesis">)</span>');
      var l = this.trueExpr.toHTML(t), m = Se(this.trueExpr, o, t && t.implicit);
      (o === "all" || this.trueExpr.type === "OperatorNode" || m !== null && m <= u) && (l = '<span class="math-parenthesis math-round-parenthesis">(</span>' + l + '<span class="math-parenthesis math-round-parenthesis">)</span>');
      var p = this.falseExpr.toHTML(t), h = Se(this.falseExpr, o, t && t.implicit);
      return (o === "all" || this.falseExpr.type === "OperatorNode" || h !== null && h <= u) && (p = '<span class="math-parenthesis math-round-parenthesis">(</span>' + p + '<span class="math-parenthesis math-round-parenthesis">)</span>'), c + '<span class="math-operator math-conditional-operator">?</span>' + l + '<span class="math-operator math-conditional-operator">:</span>' + p;
    }
    _toTex(t) {
      return "\\begin{cases} {" + this.trueExpr.toTex(t) + "}, &\\quad{\\text{if }\\;" + this.condition.toTex(t) + "}\\\\{" + this.falseExpr.toTex(t) + "}, &\\quad{\\text{otherwise}}\\end{cases}";
    }
  }
  return Ue(n, "name", nn), n;
}, { isClass: true, isNode: true }), ua = { Alpha: "A", alpha: "\\alpha", Beta: "B", beta: "\\beta", Gamma: "\\Gamma", gamma: "\\gamma", Delta: "\\Delta", delta: "\\delta", Epsilon: "E", epsilon: "\\epsilon", varepsilon: "\\varepsilon", Zeta: "Z", zeta: "\\zeta", Eta: "H", eta: "\\eta", Theta: "\\Theta", theta: "\\theta", vartheta: "\\vartheta", Iota: "I", iota: "\\iota", Kappa: "K", kappa: "\\kappa", varkappa: "\\varkappa", Lambda: "\\Lambda", lambda: "\\lambda", Mu: "M", mu: "\\mu", Nu: "N", nu: "\\nu", Xi: "\\Xi", xi: "\\xi", Omicron: "O", omicron: "o", Pi: "\\Pi", pi: "\\pi", varpi: "\\varpi", Rho: "P", rho: "\\rho", varrho: "\\varrho", Sigma: "\\Sigma", sigma: "\\sigma", varsigma: "\\varsigma", Tau: "T", tau: "\\tau", Upsilon: "\\Upsilon", upsilon: "\\upsilon", Phi: "\\Phi", phi: "\\phi", varphi: "\\varphi", Chi: "X", chi: "\\chi", Psi: "\\Psi", psi: "\\psi", Omega: "\\Omega", omega: "\\omega", true: "\\mathrm{True}", false: "\\mathrm{False}", i: "i", inf: "\\infty", Inf: "\\infty", infinity: "\\infty", Infinity: "\\infty", oo: "\\infty", lim: "\\lim", undefined: "\\mathbf{?}" }, Ae = { transpose: "^\\top", ctranspose: "^H", factorial: "!", pow: "^", dotPow: ".^\\wedge", unaryPlus: "+", unaryMinus: "-", bitNot: "\\~", not: "\\neg", multiply: "\\cdot", divide: "\\frac", dotMultiply: ".\\cdot", dotDivide: ".:", mod: "\\mod", add: "+", subtract: "-", to: "\\rightarrow", leftShift: "<<", rightArithShift: ">>", rightLogShift: ">>>", equal: "=", unequal: "\\neq", smaller: "<", larger: ">", smallerEq: "\\leq", largerEq: "\\geq", bitAnd: "\\&", bitXor: "\\underline{|}", bitOr: "|", and: "\\wedge", xor: "\\veebar", or: "\\vee" }, Ni = { abs: { 1: "\\left|${args[0]}\\right|" }, add: { 2: "\\left(${args[0]}".concat(Ae.add, "${args[1]}\\right)") }, cbrt: { 1: "\\sqrt[3]{${args[0]}}" }, ceil: { 1: "\\left\\lceil${args[0]}\\right\\rceil" }, cube: { 1: "\\left(${args[0]}\\right)^3" }, divide: { 2: "\\frac{${args[0]}}{${args[1]}}" }, dotDivide: { 2: "\\left(${args[0]}".concat(Ae.dotDivide, "${args[1]}\\right)") }, dotMultiply: { 2: "\\left(${args[0]}".concat(Ae.dotMultiply, "${args[1]}\\right)") }, dotPow: { 2: "\\left(${args[0]}".concat(Ae.dotPow, "${args[1]}\\right)") }, exp: { 1: "\\exp\\left(${args[0]}\\right)" }, expm1: "\\left(e".concat(Ae.pow, "{${args[0]}}-1\\right)"), fix: { 1: "\\mathrm{${name}}\\left(${args[0]}\\right)" }, floor: { 1: "\\left\\lfloor${args[0]}\\right\\rfloor" }, fraction: { 2: "\\frac{${args[0]}}{${args[1]}}" }, gcd: "\\gcd\\left(${args}\\right)", hypot: "\\hypot\\left(${args}\\right)", log: { 1: "\\ln\\left(${args[0]}\\right)", 2: "\\log_{${args[1]}}\\left(${args[0]}\\right)" }, log10: { 1: "\\log_{10}\\left(${args[0]}\\right)" }, log1p: { 1: "\\ln\\left(${args[0]}+1\\right)", 2: "\\log_{${args[1]}}\\left(${args[0]}+1\\right)" }, log2: "\\log_{2}\\left(${args[0]}\\right)", mod: { 2: "\\left(${args[0]}".concat(Ae.mod, "${args[1]}\\right)") }, multiply: { 2: "\\left(${args[0]}".concat(Ae.multiply, "${args[1]}\\right)") }, norm: { 1: "\\left\\|${args[0]}\\right\\|", 2: void 0 }, nthRoot: { 2: "\\sqrt[${args[1]}]{${args[0]}}" }, nthRoots: { 2: "\\{y : y^${args[1]} = {${args[0]}}\\}" }, pow: { 2: "\\left(${args[0]}\\right)".concat(Ae.pow, "{${args[1]}}") }, round: { 1: "\\left\\lfloor${args[0]}\\right\\rceil", 2: void 0 }, sign: { 1: "\\mathrm{${name}}\\left(${args[0]}\\right)" }, sqrt: { 1: "\\sqrt{${args[0]}}" }, square: { 1: "\\left(${args[0]}\\right)^2" }, subtract: { 2: "\\left(${args[0]}".concat(Ae.subtract, "${args[1]}\\right)") }, unaryMinus: { 1: "".concat(Ae.unaryMinus, "\\left(${args[0]}\\right)") }, unaryPlus: { 1: "".concat(Ae.unaryPlus, "\\left(${args[0]}\\right)") }, bitAnd: { 2: "\\left(${args[0]}".concat(Ae.bitAnd, "${args[1]}\\right)") }, bitNot: { 1: Ae.bitNot + "\\left(${args[0]}\\right)" }, bitOr: { 2: "\\left(${args[0]}".concat(Ae.bitOr, "${args[1]}\\right)") }, bitXor: { 2: "\\left(${args[0]}".concat(Ae.bitXor, "${args[1]}\\right)") }, leftShift: { 2: "\\left(${args[0]}".concat(Ae.leftShift, "${args[1]}\\right)") }, rightArithShift: { 2: "\\left(${args[0]}".concat(Ae.rightArithShift, "${args[1]}\\right)") }, rightLogShift: { 2: "\\left(${args[0]}".concat(Ae.rightLogShift, "${args[1]}\\right)") }, bellNumbers: { 1: "\\mathrm{B}_{${args[0]}}" }, catalan: { 1: "\\mathrm{C}_{${args[0]}}" }, stirlingS2: { 2: "\\mathrm{S}\\left(${args}\\right)" }, arg: { 1: "\\arg\\left(${args[0]}\\right)" }, conj: { 1: "\\left(${args[0]}\\right)^*" }, im: { 1: "\\Im\\left\\lbrace${args[0]}\\right\\rbrace" }, re: { 1: "\\Re\\left\\lbrace${args[0]}\\right\\rbrace" }, and: { 2: "\\left(${args[0]}".concat(Ae.and, "${args[1]}\\right)") }, not: { 1: Ae.not + "\\left(${args[0]}\\right)" }, or: { 2: "\\left(${args[0]}".concat(Ae.or, "${args[1]}\\right)") }, xor: { 2: "\\left(${args[0]}".concat(Ae.xor, "${args[1]}\\right)") }, cross: { 2: "\\left(${args[0]}\\right)\\times\\left(${args[1]}\\right)" }, ctranspose: { 1: "\\left(${args[0]}\\right)".concat(Ae.ctranspose) }, det: { 1: "\\det\\left(${args[0]}\\right)" }, dot: { 2: "\\left(${args[0]}\\cdot${args[1]}\\right)" }, expm: { 1: "\\exp\\left(${args[0]}\\right)" }, inv: { 1: "\\left(${args[0]}\\right)^{-1}" }, pinv: { 1: "\\left(${args[0]}\\right)^{+}" }, sqrtm: { 1: "{${args[0]}}".concat(Ae.pow, "{\\frac{1}{2}}") }, trace: { 1: "\\mathrm{tr}\\left(${args[0]}\\right)" }, transpose: { 1: "\\left(${args[0]}\\right)".concat(Ae.transpose) }, combinations: { 2: "\\binom{${args[0]}}{${args[1]}}" }, combinationsWithRep: { 2: "\\left(\\!\\!{\\binom{${args[0]}}{${args[1]}}}\\!\\!\\right)" }, factorial: { 1: "\\left(${args[0]}\\right)".concat(Ae.factorial) }, gamma: { 1: "\\Gamma\\left(${args[0]}\\right)" }, lgamma: { 1: "\\ln\\Gamma\\left(${args[0]}\\right)" }, equal: { 2: "\\left(${args[0]}".concat(Ae.equal, "${args[1]}\\right)") }, larger: { 2: "\\left(${args[0]}".concat(Ae.larger, "${args[1]}\\right)") }, largerEq: { 2: "\\left(${args[0]}".concat(Ae.largerEq, "${args[1]}\\right)") }, smaller: { 2: "\\left(${args[0]}".concat(Ae.smaller, "${args[1]}\\right)") }, smallerEq: { 2: "\\left(${args[0]}".concat(Ae.smallerEq, "${args[1]}\\right)") }, unequal: { 2: "\\left(${args[0]}".concat(Ae.unequal, "${args[1]}\\right)") }, erf: { 1: "erf\\left(${args[0]}\\right)" }, max: "\\max\\left(${args}\\right)", min: "\\min\\left(${args}\\right)", variance: "\\mathrm{Var}\\left(${args}\\right)", acos: { 1: "\\cos^{-1}\\left(${args[0]}\\right)" }, acosh: { 1: "\\cosh^{-1}\\left(${args[0]}\\right)" }, acot: { 1: "\\cot^{-1}\\left(${args[0]}\\right)" }, acoth: { 1: "\\coth^{-1}\\left(${args[0]}\\right)" }, acsc: { 1: "\\csc^{-1}\\left(${args[0]}\\right)" }, acsch: { 1: "\\mathrm{csch}^{-1}\\left(${args[0]}\\right)" }, asec: { 1: "\\sec^{-1}\\left(${args[0]}\\right)" }, asech: { 1: "\\mathrm{sech}^{-1}\\left(${args[0]}\\right)" }, asin: { 1: "\\sin^{-1}\\left(${args[0]}\\right)" }, asinh: { 1: "\\sinh^{-1}\\left(${args[0]}\\right)" }, atan: { 1: "\\tan^{-1}\\left(${args[0]}\\right)" }, atan2: { 2: "\\mathrm{atan2}\\left(${args}\\right)" }, atanh: { 1: "\\tanh^{-1}\\left(${args[0]}\\right)" }, cos: { 1: "\\cos\\left(${args[0]}\\right)" }, cosh: { 1: "\\cosh\\left(${args[0]}\\right)" }, cot: { 1: "\\cot\\left(${args[0]}\\right)" }, coth: { 1: "\\coth\\left(${args[0]}\\right)" }, csc: { 1: "\\csc\\left(${args[0]}\\right)" }, csch: { 1: "\\mathrm{csch}\\left(${args[0]}\\right)" }, sec: { 1: "\\sec\\left(${args[0]}\\right)" }, sech: { 1: "\\mathrm{sech}\\left(${args[0]}\\right)" }, sin: { 1: "\\sin\\left(${args[0]}\\right)" }, sinh: { 1: "\\sinh\\left(${args[0]}\\right)" }, tan: { 1: "\\tan\\left(${args[0]}\\right)" }, tanh: { 1: "\\tanh\\left(${args[0]}\\right)" }, to: { 2: "\\left(${args[0]}".concat(Ae.to, "${args[1]}\\right)") }, numeric: function(r, a) {
  return r.args[0].toTex();
}, number: { 0: "0", 1: "\\left(${args[0]}\\right)", 2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)" }, string: { 0: '\\mathtt{""}', 1: "\\mathrm{string}\\left(${args[0]}\\right)" }, bignumber: { 0: "0", 1: "\\left(${args[0]}\\right)" }, bigint: { 0: "0", 1: "\\left(${args[0]}\\right)" }, complex: { 0: "0", 1: "\\left(${args[0]}\\right)", 2: "\\left(\\left(${args[0]}\\right)+".concat(ua.i, "\\cdot\\left(${args[1]}\\right)\\right)") }, matrix: { 0: "\\begin{bmatrix}\\end{bmatrix}", 1: "\\left(${args[0]}\\right)", 2: "\\left(${args[0]}\\right)" }, sparse: { 0: "\\begin{bsparse}\\end{bsparse}", 1: "\\left(${args[0]}\\right)" }, unit: { 1: "\\left(${args[0]}\\right)", 2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)" } }, h0 = "\\mathrm{${name}}\\left(${args}\\right)", Ai = { deg: "^\\circ" };
function ca(e) {
  return kc(e, { preserveFormatting: true });
}
function Fu(e, r) {
  return r = typeof r > "u" ? false : r, r ? ye(Ai, e) ? Ai[e] : "\\mathrm{" + ca(e) + "}" : ye(ua, e) ? ua[e] : ca(e);
}
var an = "ConstantNode", v0 = ["Node", "isBounded"], g0 = R(an, v0, (e) => {
  var { Node: r, isBounded: a } = e;
  class n extends r {
    constructor(t) {
      super(), this.value = t;
    }
    get type() {
      return an;
    }
    get isConstantNode() {
      return true;
    }
    _compile(t, o) {
      var u = this.value;
      return function() {
        return u;
      };
    }
    forEach(t) {
    }
    map(t) {
      return this.clone();
    }
    clone() {
      return new n(this.value);
    }
    _toString(t) {
      return Sr(this.value, t);
    }
    _toHTML(t) {
      var o = this._toString(t);
      switch (Ze(this.value)) {
        case "number":
        case "bigint":
        case "BigNumber":
        case "Fraction":
          return '<span class="math-number">' + o + "</span>";
        case "string":
          return '<span class="math-string">' + o + "</span>";
        case "boolean":
          return '<span class="math-boolean">' + o + "</span>";
        case "null":
          return '<span class="math-null-symbol">' + o + "</span>";
        case "undefined":
          return '<span class="math-undefined">' + o + "</span>";
        default:
          return '<span class="math-symbol">' + o + "</span>";
      }
    }
    toJSON() {
      return { mathjs: an, value: this.value };
    }
    static fromJSON(t) {
      return new n(t.value);
    }
    _toTex(t) {
      var o = this._toString(t), u = Ze(this.value);
      switch (u) {
        case "string":
          return "\\mathtt{" + ca(o) + "}";
        case "number":
        case "BigNumber": {
          if (!a(this.value)) return this.value.valueOf() < 0 ? "-\\infty" : "\\infty";
          var c = o.toLowerCase().indexOf("e");
          return c !== -1 ? o.substring(0, c) + "\\cdot10^{" + o.substring(c + 1) + "}" : o;
        }
        case "bigint":
          return o.toString();
        case "Fraction":
          return this.value.toLatex();
        default:
          return o;
      }
    }
  }
  return Ue(n, "name", an), n;
}, { isClass: true, isNode: true }), on = "FunctionAssignmentNode", y0 = ["typed", "Node"], D0 = R(on, y0, (e) => {
  var { typed: r, Node: a } = e;
  function n(t, o, u) {
    var c = Se(t, o, u), s = Se(t.expr, o, u);
    return o === "all" || s !== null && s <= c;
  }
  class i extends a {
    constructor(o, u, c) {
      if (super(), typeof o != "string") throw new TypeError('String expected for parameter "name"');
      if (!Array.isArray(u)) throw new TypeError('Array containing strings or objects expected for parameter "params"');
      if (!Fe(c)) throw new TypeError('Node expected for parameter "expr"');
      if (Cu.has(o)) throw new Error('Illegal function name, "' + o + '" is a reserved keyword');
      var s = /* @__PURE__ */ new Set();
      for (var l of u) {
        var m = typeof l == "string" ? l : l.name;
        if (s.has(m)) throw new Error('Duplicate parameter name "'.concat(m, '"'));
        s.add(m);
      }
      this.name = o, this.params = u.map(function(p) {
        return p && p.name || p;
      }), this.types = u.map(function(p) {
        return p && p.type || "any";
      }), this.expr = c;
    }
    get type() {
      return on;
    }
    get isFunctionAssignmentNode() {
      return true;
    }
    _compile(o, u) {
      var c = Object.create(u);
      yu(this.params, function(A) {
        c[A] = true;
      });
      var s = this.expr, l = s._compile(o, c), m = this.name, p = this.params, h = fi(this.types, ","), y = m + "(" + fi(this.params, ", ") + ")";
      return function(E, C, N) {
        var d = {};
        d[h] = function() {
          for (var g = Object.create(C), w = 0; w < p.length; w++) g[p[w]] = arguments[w];
          return l(E, g, N);
        };
        var x = r(m, d);
        return x.syntax = y, x.expr = s.toString(), E.set(m, x), x;
      };
    }
    forEach(o) {
      o(this.expr, "expr", this);
    }
    map(o) {
      var u = this._ifNode(o(this.expr, "expr", this));
      return new i(this.name, this.params.slice(0), u);
    }
    clone() {
      return new i(this.name, this.params.slice(0), this.expr);
    }
    _toString(o) {
      var u = o && o.parenthesis ? o.parenthesis : "keep", c = this.expr.toString(o);
      return n(this, u, o && o.implicit) && (c = "(" + c + ")"), this.name + "(" + this.params.join(", ") + ") = " + c;
    }
    toJSON() {
      var o = this.types;
      return { mathjs: on, name: this.name, params: this.params.map(function(u, c) {
        return { name: u, type: o[c] };
      }), expr: this.expr };
    }
    static fromJSON(o) {
      return new i(o.name, o.params, o.expr);
    }
    _toHTML(o) {
      for (var u = o && o.parenthesis ? o.parenthesis : "keep", c = [], s = 0; s < this.params.length; s++) c.push('<span class="math-symbol math-parameter">' + cr(this.params[s]) + "</span>");
      var l = this.expr.toHTML(o);
      return n(this, u, o && o.implicit) && (l = '<span class="math-parenthesis math-round-parenthesis">(</span>' + l + '<span class="math-parenthesis math-round-parenthesis">)</span>'), '<span class="math-function">' + cr(this.name) + '</span><span class="math-parenthesis math-round-parenthesis">(</span>' + c.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-round-parenthesis">)</span><span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + l;
    }
    _toTex(o) {
      var u = o && o.parenthesis ? o.parenthesis : "keep", c = this.expr.toTex(o);
      return n(this, u, o && o.implicit) && (c = "\\left(".concat(c, "\\right)")), "\\mathrm{" + this.name + "}\\left(" + this.params.map(Fu).join(",") + "\\right)=" + c;
    }
  }
  return Ue(i, "name", on), i;
}, { isClass: true, isNode: true }), sn = "IndexNode", b0 = ["Node", "size"], x0 = R(sn, b0, (e) => {
  var { Node: r, size: a } = e;
  class n extends r {
    constructor(t, o) {
      if (super(), this.dimensions = t, this.dotNotation = o || false, !Array.isArray(t) || !t.every(Fe)) throw new TypeError('Array containing Nodes expected for parameter "dimensions"');
      if (this.dotNotation && !this.isObjectProperty()) throw new Error("dotNotation only applicable for object properties");
    }
    get type() {
      return sn;
    }
    get isIndexNode() {
      return true;
    }
    _compile(t, o) {
      var u = jr(this.dimensions, function(s, l) {
        var m = s.filter((y) => y.isSymbolNode && y.name === "end").length > 0;
        if (m) {
          var p = Object.create(o);
          p.end = true;
          var h = s._compile(t, p);
          return function(A, E, C) {
            if (!rr(C) && !_o(C) && !Qr(C)) throw new TypeError('Cannot resolve "end": context must be a Matrix, Array, or string but is ' + Ze(C));
            var N = a(C), d = Object.create(E);
            return d.end = N[l], h(A, d, C);
          };
        } else return s._compile(t, o);
      }), c = er(t, "index");
      return function(l, m, p) {
        var h = jr(u, function(y) {
          return y(l, m, p);
        });
        return c(...h);
      };
    }
    forEach(t) {
      for (var o = 0; o < this.dimensions.length; o++) t(this.dimensions[o], "dimensions[" + o + "]", this);
    }
    map(t) {
      for (var o = [], u = 0; u < this.dimensions.length; u++) o[u] = this._ifNode(t(this.dimensions[u], "dimensions[" + u + "]", this));
      return new n(o, this.dotNotation);
    }
    clone() {
      return new n(this.dimensions.slice(0), this.dotNotation);
    }
    isObjectProperty() {
      return this.dimensions.length === 1 && Ne(this.dimensions[0]) && typeof this.dimensions[0].value == "string";
    }
    getObjectProperty() {
      return this.isObjectProperty() ? this.dimensions[0].value : null;
    }
    _toString(t) {
      return this.dotNotation ? "." + this.getObjectProperty() : "[" + this.dimensions.join(", ") + "]";
    }
    toJSON() {
      return { mathjs: sn, dimensions: this.dimensions, dotNotation: this.dotNotation };
    }
    static fromJSON(t) {
      return new n(t.dimensions, t.dotNotation);
    }
    _toHTML(t) {
      for (var o = [], u = 0; u < this.dimensions.length; u++) o[u] = this.dimensions[u].toHTML();
      return this.dotNotation ? '<span class="math-operator math-accessor-operator">.</span><span class="math-symbol math-property">' + cr(this.getObjectProperty()) + "</span>" : '<span class="math-parenthesis math-square-parenthesis">[</span>' + o.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>';
    }
    _toTex(t) {
      var o = this.dimensions.map(function(u) {
        return u.toTex(t);
      });
      return this.dotNotation ? "." + this.getObjectProperty() : "_{" + o.join(",") + "}";
    }
  }
  return Ue(n, "name", sn), n;
}, { isClass: true, isNode: true }), un = "ObjectNode", w0 = ["Node"], N0 = R(un, w0, (e) => {
  var { Node: r } = e;
  class a extends r {
    constructor(i) {
      if (super(), this.properties = i || {}, i && (typeof i != "object" || !Object.keys(i).every(function(t) {
        return Fe(i[t]);
      }))) throw new TypeError("Object containing Nodes expected");
    }
    get type() {
      return un;
    }
    get isObjectNode() {
      return true;
    }
    _compile(i, t) {
      var o = {};
      for (var u in this.properties) if (ye(this.properties, u)) {
        var c = st(u), s = JSON.parse(c), l = er(this.properties, u);
        o[s] = l._compile(i, t);
      }
      return function(p, h, y) {
        var A = {};
        for (var E in o) ye(o, E) && (A[E] = o[E](p, h, y));
        return A;
      };
    }
    forEach(i) {
      for (var t in this.properties) ye(this.properties, t) && i(this.properties[t], "properties[" + st(t) + "]", this);
    }
    map(i) {
      var t = {};
      for (var o in this.properties) ye(this.properties, o) && (t[o] = this._ifNode(i(this.properties[o], "properties[" + st(o) + "]", this)));
      return new a(t);
    }
    clone() {
      var i = {};
      for (var t in this.properties) ye(this.properties, t) && (i[t] = this.properties[t]);
      return new a(i);
    }
    _toString(i) {
      var t = [];
      for (var o in this.properties) ye(this.properties, o) && t.push(st(o) + ": " + this.properties[o].toString(i));
      return "{" + t.join(", ") + "}";
    }
    toJSON() {
      return { mathjs: un, properties: this.properties };
    }
    static fromJSON(i) {
      return new a(i.properties);
    }
    _toHTML(i) {
      var t = [];
      for (var o in this.properties) ye(this.properties, o) && t.push('<span class="math-symbol math-property">' + cr(o) + '</span><span class="math-operator math-assignment-operator math-property-assignment-operator math-binary-operator">:</span>' + this.properties[o].toHTML(i));
      return '<span class="math-parenthesis math-curly-parenthesis">{</span>' + t.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-curly-parenthesis">}</span>';
    }
    _toTex(i) {
      var t = [];
      for (var o in this.properties) ye(this.properties, o) && t.push("\\mathbf{" + o + ":} & " + this.properties[o].toTex(i) + "\\\\");
      var u = "\\left\\{\\begin{array}{ll}" + t.join(`
`) + "\\end{array}\\right\\}";
      return u;
    }
  }
  return Ue(a, "name", un), a;
}, { isClass: true, isNode: true });
function Ot(e, r) {
  return new qo(e, new Bn(r), new Set(Object.keys(r)));
}
var cn = "OperatorNode", A0 = ["Node"], C0 = R(cn, A0, (e) => {
  var { Node: r } = e;
  function a(t, o) {
    var u = t;
    if (o === "auto") for (; Br(u); ) u = u.content;
    return Ne(u) ? true : qe(u) ? a(u.args[0], o) : false;
  }
  function n(t, o, u, c, s) {
    var l = Se(t, o, u), m = Tt(t, o);
    if (o === "all" || c.length > 2 && t.getIdentifier() !== "OperatorNode:add" && t.getIdentifier() !== "OperatorNode:multiply") return c.map(function(_) {
      switch (_.getContent().type) {
        case "ArrayNode":
        case "ConstantNode":
        case "SymbolNode":
        case "ParenthesisNode":
          return false;
        default:
          return true;
      }
    });
    var p;
    switch (c.length) {
      case 0:
        p = [];
        break;
      case 1:
        {
          var h = Se(c[0], o, u, t);
          if (s && h !== null) {
            var y, A;
            if (o === "keep" ? (y = c[0].getIdentifier(), A = t.getIdentifier()) : (y = c[0].getContent().getIdentifier(), A = t.getContent().getIdentifier()), pr[l][A].latexLeftParens === false) {
              p = [false];
              break;
            }
            if (pr[h][y].latexParens === false) {
              p = [false];
              break;
            }
          }
          if (h === null) {
            p = [false];
            break;
          }
          if (h <= l) {
            p = [true];
            break;
          }
          p = [false];
        }
        break;
      case 2:
        {
          var E, C = Se(c[0], o, u, t), N = Gn(t, c[0], o);
          C === null ? E = false : C === l && m === "right" && !N || C < l ? E = true : E = false;
          var d, x = Se(c[1], o, u, t), g = Gn(t, c[1], o);
          if (x === null ? d = false : x === l && m === "left" && !g || x < l ? d = true : d = false, s) {
            var w, F, $;
            o === "keep" ? (w = t.getIdentifier(), F = t.args[0].getIdentifier(), $ = t.args[1].getIdentifier()) : (w = t.getContent().getIdentifier(), F = t.args[0].getContent().getIdentifier(), $ = t.args[1].getContent().getIdentifier()), C !== null && (pr[l][w].latexLeftParens === false && (E = false), pr[C][F].latexParens === false && (E = false)), x !== null && (pr[l][w].latexRightParens === false && (d = false), pr[x][$].latexParens === false && (d = false));
          }
          p = [E, d];
        }
        break;
      default:
        (t.getIdentifier() === "OperatorNode:add" || t.getIdentifier() === "OperatorNode:multiply") && (p = c.map(function(_) {
          var q = Se(_, o, u, t), J = Gn(t, _, o), P = Tt(_, o);
          return q === null ? false : l === q && m === P && !J ? true : q < l;
        }));
        break;
    }
    if (c.length >= 2 && t.getIdentifier() === "OperatorNode:multiply" && t.implicit && o !== "all" && u === "hide") for (var Z = 1; Z < p.length; ++Z) a(c[Z], o) && !p[Z - 1] && (o !== "keep" || !Br(c[Z - 1])) && (p[Z] = true);
    return p;
  }
  class i extends r {
    constructor(o, u, c, s, l) {
      if (super(), typeof o != "string") throw new TypeError('string expected for parameter "op"');
      if (typeof u != "string") throw new TypeError('string expected for parameter "fn"');
      if (!Array.isArray(c) || !c.every(Fe)) throw new TypeError('Array containing Nodes expected for parameter "args"');
      this.implicit = s === true, this.isPercentage = l === true, this.op = o, this.fn = u, this.args = c || [];
    }
    get type() {
      return cn;
    }
    get isOperatorNode() {
      return true;
    }
    _compile(o, u) {
      if (typeof this.fn != "string" || !pa(o, this.fn)) throw o[this.fn] ? new Error('No access to function "' + this.fn + '"') : new Error("Function " + this.fn + ' missing in provided namespace "math"');
      var c = er(o, this.fn), s = jr(this.args, function(y) {
        return y._compile(o, u);
      });
      if (typeof c == "function" && c.rawArgs === true) {
        var l = this.args;
        return function(A, E, C) {
          return c(l, o, Ot(A, E));
        };
      } else if (s.length === 1) {
        var m = s[0];
        return function(A, E, C) {
          return c(m(A, E, C));
        };
      } else if (s.length === 2) {
        var p = s[0], h = s[1];
        return function(A, E, C) {
          return c(p(A, E, C), h(A, E, C));
        };
      } else return function(A, E, C) {
        return c.apply(null, jr(s, function(N) {
          return N(A, E, C);
        }));
      };
    }
    forEach(o) {
      for (var u = 0; u < this.args.length; u++) o(this.args[u], "args[" + u + "]", this);
    }
    map(o) {
      for (var u = [], c = 0; c < this.args.length; c++) u[c] = this._ifNode(o(this.args[c], "args[" + c + "]", this));
      return new i(this.op, this.fn, u, this.implicit, this.isPercentage);
    }
    clone() {
      return new i(this.op, this.fn, this.args.slice(0), this.implicit, this.isPercentage);
    }
    isUnary() {
      return this.args.length === 1;
    }
    isBinary() {
      return this.args.length === 2;
    }
    _toString(o) {
      var u = o && o.parenthesis ? o.parenthesis : "keep", c = o && o.implicit ? o.implicit : "hide", s = this.args, l = n(this, u, c, s, false);
      if (s.length === 1) {
        var m = Tt(this, u), p = s[0].toString(o);
        l[0] && (p = "(" + p + ")");
        var h = /[a-zA-Z]+/.test(this.op);
        return m === "right" ? this.op + (h ? " " : "") + p : m === "left" ? p + (h ? " " : "") + this.op : p + this.op;
      } else if (s.length === 2) {
        var y = s[0].toString(o), A = s[1].toString(o);
        return l[0] && (y = "(" + y + ")"), l[1] && (A = "(" + A + ")"), this.implicit && this.getIdentifier() === "OperatorNode:multiply" && c === "hide" ? y + " " + A : y + " " + this.op + " " + A;
      } else if (s.length > 2 && (this.getIdentifier() === "OperatorNode:add" || this.getIdentifier() === "OperatorNode:multiply")) {
        var E = s.map(function(C, N) {
          return C = C.toString(o), l[N] && (C = "(" + C + ")"), C;
        });
        return this.implicit && this.getIdentifier() === "OperatorNode:multiply" && c === "hide" ? E.join(" ") : E.join(" " + this.op + " ");
      } else return this.fn + "(" + this.args.join(", ") + ")";
    }
    toJSON() {
      return { mathjs: cn, op: this.op, fn: this.fn, args: this.args, implicit: this.implicit, isPercentage: this.isPercentage };
    }
    static fromJSON(o) {
      return new i(o.op, o.fn, o.args, o.implicit, o.isPercentage);
    }
    _toHTML(o) {
      var u = o && o.parenthesis ? o.parenthesis : "keep", c = o && o.implicit ? o.implicit : "hide", s = this.args, l = n(this, u, c, s, false);
      if (s.length === 1) {
        var m = Tt(this, u), p = s[0].toHTML(o);
        return l[0] && (p = '<span class="math-parenthesis math-round-parenthesis">(</span>' + p + '<span class="math-parenthesis math-round-parenthesis">)</span>'), m === "right" ? '<span class="math-operator math-unary-operator math-lefthand-unary-operator">' + cr(this.op) + "</span>" + p : p + '<span class="math-operator math-unary-operator math-righthand-unary-operator">' + cr(this.op) + "</span>";
      } else if (s.length === 2) {
        var h = s[0].toHTML(o), y = s[1].toHTML(o);
        return l[0] && (h = '<span class="math-parenthesis math-round-parenthesis">(</span>' + h + '<span class="math-parenthesis math-round-parenthesis">)</span>'), l[1] && (y = '<span class="math-parenthesis math-round-parenthesis">(</span>' + y + '<span class="math-parenthesis math-round-parenthesis">)</span>'), this.implicit && this.getIdentifier() === "OperatorNode:multiply" && c === "hide" ? h + '<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>' + y : h + '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + cr(this.op) + "</span>" + y;
      } else {
        var A = s.map(function(E, C) {
          return E = E.toHTML(o), l[C] && (E = '<span class="math-parenthesis math-round-parenthesis">(</span>' + E + '<span class="math-parenthesis math-round-parenthesis">)</span>'), E;
        });
        return s.length > 2 && (this.getIdentifier() === "OperatorNode:add" || this.getIdentifier() === "OperatorNode:multiply") ? this.implicit && this.getIdentifier() === "OperatorNode:multiply" && c === "hide" ? A.join('<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>') : A.join('<span class="math-operator math-binary-operator math-explicit-binary-operator">' + cr(this.op) + "</span>") : '<span class="math-function">' + cr(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + A.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>';
      }
    }
    _toTex(o) {
      var u = o && o.parenthesis ? o.parenthesis : "keep", c = o && o.implicit ? o.implicit : "hide", s = this.args, l = n(this, u, c, s, true), m = Ae[this.fn];
      if (m = typeof m > "u" ? this.op : m, s.length === 1) {
        var p = Tt(this, u), h = s[0].toTex(o);
        return l[0] && (h = "\\left(".concat(h, "\\right)")), p === "right" ? m + h : h + m;
      } else if (s.length === 2) {
        var y = s[0], A = y.toTex(o);
        l[0] && (A = "\\left(".concat(A, "\\right)"));
        var E = s[1], C = E.toTex(o);
        l[1] && (C = "\\left(".concat(C, "\\right)"));
        var N;
        switch (u === "keep" ? N = y.getIdentifier() : N = y.getContent().getIdentifier(), this.getIdentifier()) {
          case "OperatorNode:divide":
            return m + "{" + A + "}{" + C + "}";
          case "OperatorNode:pow":
            switch (A = "{" + A + "}", C = "{" + C + "}", N) {
              case "ConditionalNode":
              case "OperatorNode:divide":
                A = "\\left(".concat(A, "\\right)");
            }
            break;
          case "OperatorNode:multiply":
            if (this.implicit && c === "hide") return A + "~" + C;
        }
        return A + m + C;
      } else if (s.length > 2 && (this.getIdentifier() === "OperatorNode:add" || this.getIdentifier() === "OperatorNode:multiply")) {
        var d = s.map(function(x, g) {
          return x = x.toTex(o), l[g] && (x = "\\left(".concat(x, "\\right)")), x;
        });
        return this.getIdentifier() === "OperatorNode:multiply" && this.implicit && c === "hide" ? d.join("~") : d.join(m);
      } else return "\\mathrm{" + this.fn + "}\\left(" + s.map(function(x) {
        return x.toTex(o);
      }).join(",") + "\\right)";
    }
    getIdentifier() {
      return this.type + ":" + this.fn;
    }
  }
  return Ue(i, "name", cn), i;
}, { isClass: true, isNode: true }), ln = "ParenthesisNode", E0 = ["Node"], F0 = R(ln, E0, (e) => {
  var { Node: r } = e;
  class a extends r {
    constructor(i) {
      if (super(), !Fe(i)) throw new TypeError('Node expected for parameter "content"');
      this.content = i;
    }
    get type() {
      return ln;
    }
    get isParenthesisNode() {
      return true;
    }
    _compile(i, t) {
      return this.content._compile(i, t);
    }
    getContent() {
      return this.content.getContent();
    }
    forEach(i) {
      i(this.content, "content", this);
    }
    map(i) {
      var t = i(this.content, "content", this);
      return new a(t);
    }
    clone() {
      return new a(this.content);
    }
    _toString(i) {
      return !i || i && !i.parenthesis || i && i.parenthesis === "keep" ? "(" + this.content.toString(i) + ")" : this.content.toString(i);
    }
    toJSON() {
      return { mathjs: ln, content: this.content };
    }
    static fromJSON(i) {
      return new a(i.content);
    }
    _toHTML(i) {
      return !i || i && !i.parenthesis || i && i.parenthesis === "keep" ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + this.content.toHTML(i) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : this.content.toHTML(i);
    }
    _toTex(i) {
      return !i || i && !i.parenthesis || i && i.parenthesis === "keep" ? "\\left(".concat(this.content.toTex(i), "\\right)") : this.content.toTex(i);
    }
  }
  return Ue(a, "name", ln), a;
}, { isClass: true, isNode: true }), fn = "RangeNode", B0 = ["Node"], S0 = R(fn, B0, (e) => {
  var { Node: r } = e;
  function a(i, t, o) {
    var u = Se(i, t, o), c = {}, s = Se(i.start, t, o);
    if (c.start = s !== null && s <= u || t === "all", i.step) {
      var l = Se(i.step, t, o);
      c.step = l !== null && l <= u || t === "all";
    }
    var m = Se(i.end, t, o);
    return c.end = m !== null && m <= u || t === "all", c;
  }
  class n extends r {
    constructor(t, o, u) {
      if (super(), !Fe(t)) throw new TypeError("Node expected");
      if (!Fe(o)) throw new TypeError("Node expected");
      if (u && !Fe(u)) throw new TypeError("Node expected");
      if (arguments.length > 3) throw new Error("Too many arguments");
      this.start = t, this.end = o, this.step = u || null;
    }
    get type() {
      return fn;
    }
    get isRangeNode() {
      return true;
    }
    needsEnd() {
      var t = this.filter(function(o) {
        return ze(o) && o.name === "end";
      });
      return t.length > 0;
    }
    _compile(t, o) {
      var u = t.range, c = this.start._compile(t, o), s = this.end._compile(t, o);
      if (this.step) {
        var l = this.step._compile(t, o);
        return function(p, h, y) {
          return u(c(p, h, y), s(p, h, y), l(p, h, y));
        };
      } else return function(p, h, y) {
        return u(c(p, h, y), s(p, h, y));
      };
    }
    forEach(t) {
      t(this.start, "start", this), t(this.end, "end", this), this.step && t(this.step, "step", this);
    }
    map(t) {
      return new n(this._ifNode(t(this.start, "start", this)), this._ifNode(t(this.end, "end", this)), this.step && this._ifNode(t(this.step, "step", this)));
    }
    clone() {
      return new n(this.start, this.end, this.step && this.step);
    }
    _toString(t) {
      var o = t && t.parenthesis ? t.parenthesis : "keep", u = a(this, o, t && t.implicit), c, s = this.start.toString(t);
      if (u.start && (s = "(" + s + ")"), c = s, this.step) {
        var l = this.step.toString(t);
        u.step && (l = "(" + l + ")"), c += ":" + l;
      }
      var m = this.end.toString(t);
      return u.end && (m = "(" + m + ")"), c += ":" + m, c;
    }
    toJSON() {
      return { mathjs: fn, start: this.start, end: this.end, step: this.step };
    }
    static fromJSON(t) {
      return new n(t.start, t.end, t.step);
    }
    _toHTML(t) {
      var o = t && t.parenthesis ? t.parenthesis : "keep", u = a(this, o, t && t.implicit), c, s = this.start.toHTML(t);
      if (u.start && (s = '<span class="math-parenthesis math-round-parenthesis">(</span>' + s + '<span class="math-parenthesis math-round-parenthesis">)</span>'), c = s, this.step) {
        var l = this.step.toHTML(t);
        u.step && (l = '<span class="math-parenthesis math-round-parenthesis">(</span>' + l + '<span class="math-parenthesis math-round-parenthesis">)</span>'), c += '<span class="math-operator math-range-operator">:</span>' + l;
      }
      var m = this.end.toHTML(t);
      return u.end && (m = '<span class="math-parenthesis math-round-parenthesis">(</span>' + m + '<span class="math-parenthesis math-round-parenthesis">)</span>'), c += '<span class="math-operator math-range-operator">:</span>' + m, c;
    }
    _toTex(t) {
      var o = t && t.parenthesis ? t.parenthesis : "keep", u = a(this, o, t && t.implicit), c = this.start.toTex(t);
      if (u.start && (c = "\\left(".concat(c, "\\right)")), this.step) {
        var s = this.step.toTex(t);
        u.step && (s = "\\left(".concat(s, "\\right)")), c += ":" + s;
      }
      var l = this.end.toTex(t);
      return u.end && (l = "\\left(".concat(l, "\\right)")), c += ":" + l, c;
    }
  }
  return Ue(n, "name", fn), n;
}, { isClass: true, isNode: true }), mn = "RelationalNode", T0 = ["Node"], M0 = R(mn, T0, (e) => {
  var { Node: r } = e, a = { equal: "==", unequal: "!=", smaller: "<", larger: ">", smallerEq: "<=", largerEq: ">=" };
  class n extends r {
    constructor(t, o) {
      if (super(), !Array.isArray(t)) throw new TypeError("Parameter conditionals must be an array");
      if (!Array.isArray(o)) throw new TypeError("Parameter params must be an array");
      if (t.length !== o.length - 1) throw new TypeError("Parameter params must contain exactly one more element than parameter conditionals");
      this.conditionals = t, this.params = o;
    }
    get type() {
      return mn;
    }
    get isRelationalNode() {
      return true;
    }
    _compile(t, o) {
      var u = this, c = this.params.map((s) => s._compile(t, o));
      return function(l, m, p) {
        for (var h, y = c[0](l, m, p), A = 0; A < u.conditionals.length; A++) {
          h = y, y = c[A + 1](l, m, p);
          var E = er(t, u.conditionals[A]);
          if (!E(h, y)) return false;
        }
        return true;
      };
    }
    forEach(t) {
      this.params.forEach((o, u) => t(o, "params[" + u + "]", this), this);
    }
    map(t) {
      return new n(this.conditionals.slice(), this.params.map((o, u) => this._ifNode(t(o, "params[" + u + "]", this)), this));
    }
    clone() {
      return new n(this.conditionals, this.params);
    }
    _toString(t) {
      for (var o = t && t.parenthesis ? t.parenthesis : "keep", u = Se(this, o, t && t.implicit), c = this.params.map(function(m, p) {
        var h = Se(m, o, t && t.implicit);
        return o === "all" || h !== null && h <= u ? "(" + m.toString(t) + ")" : m.toString(t);
      }), s = c[0], l = 0; l < this.conditionals.length; l++) s += " " + a[this.conditionals[l]], s += " " + c[l + 1];
      return s;
    }
    toJSON() {
      return { mathjs: mn, conditionals: this.conditionals, params: this.params };
    }
    static fromJSON(t) {
      return new n(t.conditionals, t.params);
    }
    _toHTML(t) {
      for (var o = t && t.parenthesis ? t.parenthesis : "keep", u = Se(this, o, t && t.implicit), c = this.params.map(function(m, p) {
        var h = Se(m, o, t && t.implicit);
        return o === "all" || h !== null && h <= u ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + m.toHTML(t) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : m.toHTML(t);
      }), s = c[0], l = 0; l < this.conditionals.length; l++) s += '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + cr(a[this.conditionals[l]]) + "</span>" + c[l + 1];
      return s;
    }
    _toTex(t) {
      for (var o = t && t.parenthesis ? t.parenthesis : "keep", u = Se(this, o, t && t.implicit), c = this.params.map(function(m, p) {
        var h = Se(m, o, t && t.implicit);
        return o === "all" || h !== null && h <= u ? "\\left(" + m.toTex(t) + "\right)" : m.toTex(t);
      }), s = c[0], l = 0; l < this.conditionals.length; l++) s += Ae[this.conditionals[l]] + c[l + 1];
      return s;
    }
  }
  return Ue(n, "name", mn), n;
}, { isClass: true, isNode: true }), O0 = "SymbolNode", $0 = ["math", "?Unit", "Node"], k0 = R(O0, $0, (e) => {
  var { math: r, Unit: a, Node: n } = e;
  function i(o) {
    return a ? a.isValuelessUnit(o) : false;
  }
  class t extends n {
    constructor(u) {
      if (super(), typeof u != "string") throw new TypeError('String expected for parameter "name"');
      this.name = u;
    }
    get type() {
      return "SymbolNode";
    }
    get isSymbolNode() {
      return true;
    }
    _compile(u, c) {
      var s = this.name;
      if (c[s] === true) return function(m, p, h) {
        return er(p, s);
      };
      if (s in u) return function(m, p, h) {
        return m.has(s) ? m.get(s) : er(u, s);
      };
      var l = i(s);
      return function(m, p, h) {
        return m.has(s) ? m.get(s) : l ? new a(null, s) : t.onUndefinedSymbol(s);
      };
    }
    forEach(u) {
    }
    map(u) {
      return this.clone();
    }
    static onUndefinedSymbol(u) {
      throw new Error("Undefined symbol " + u);
    }
    clone() {
      return new t(this.name);
    }
    _toString(u) {
      return this.name;
    }
    _toHTML(u) {
      var c = cr(this.name);
      return c === "true" || c === "false" ? '<span class="math-symbol math-boolean">' + c + "</span>" : c === "i" ? '<span class="math-symbol math-imaginary-symbol">' + c + "</span>" : c === "Infinity" ? '<span class="math-symbol math-infinity-symbol">' + c + "</span>" : c === "NaN" ? '<span class="math-symbol math-nan-symbol">' + c + "</span>" : c === "null" ? '<span class="math-symbol math-null-symbol">' + c + "</span>" : c === "undefined" ? '<span class="math-symbol math-undefined-symbol">' + c + "</span>" : '<span class="math-symbol">' + c + "</span>";
    }
    toJSON() {
      return { mathjs: "SymbolNode", name: this.name };
    }
    static fromJSON(u) {
      return new t(u.name);
    }
    _toTex(u) {
      var c = false;
      typeof r[this.name] > "u" && i(this.name) && (c = true);
      var s = Fu(this.name, c);
      return s[0] === "\\" ? s : " " + s;
    }
  }
  return t;
}, { isClass: true, isNode: true }), pn = "FunctionNode", q0 = ["math", "Node", "SymbolNode"], P0 = R(pn, q0, (e) => {
  var r, { math: a, Node: n, SymbolNode: i } = e, t = (c) => Sr(c, { truncate: 78 });
  function o(c, s, l) {
    for (var m = "", p = /\$(?:\{([a-z_][a-z_0-9]*)(?:\[([0-9]+)\])?\}|\$)/gi, h = 0, y; (y = p.exec(c)) !== null; ) if (m += c.substring(h, y.index), h = y.index, y[0] === "$$") m += "$", h++;
    else {
      h += y[0].length;
      var A = s[y[1]];
      if (!A) throw new ReferenceError("Template: Property " + y[1] + " does not exist.");
      if (y[2] === void 0) switch (typeof A) {
        case "string":
          m += A;
          break;
        case "object":
          if (Fe(A)) m += A.toTex(l);
          else if (Array.isArray(A)) m += A.map(function(E, C) {
            if (Fe(E)) return E.toTex(l);
            throw new TypeError("Template: " + y[1] + "[" + C + "] is not a Node.");
          }).join(",");
          else throw new TypeError("Template: " + y[1] + " has to be a Node, String or array of Nodes");
          break;
        default:
          throw new TypeError("Template: " + y[1] + " has to be a Node, String or array of Nodes");
      }
      else if (Fe(A[y[2]] && A[y[2]])) m += A[y[2]].toTex(l);
      else throw new TypeError("Template: " + y[1] + "[" + y[2] + "] is not a Node.");
    }
    return m += c.slice(h), m;
  }
  class u extends n {
    constructor(s, l, m) {
      if (super(), typeof s == "string" && (s = new i(s)), !Fe(s)) throw new TypeError('Node expected as parameter "fn"');
      if (!Array.isArray(l) || !l.every(Fe)) throw new TypeError('Array containing Nodes expected for parameter "args"');
      var p = typeof m;
      if (!(p === "undefined" || p === "boolean")) throw new TypeError("optional flag, if specified, must be boolean");
      this.fn = s, this.args = l || [], this.optional = !!m;
    }
    get name() {
      return this.fn.name || "";
    }
    get type() {
      return pn;
    }
    get isFunctionNode() {
      return true;
    }
    _compile(s, l) {
      var m = this.args.map((Z) => Z._compile(s, l)), p = this.optional || Fr(this.fn) && this.fn.optionalChaining;
      if (ze(this.fn)) {
        var h = this.fn.name;
        if (l[h]) {
          var N = this.args;
          return function(_, q, J) {
            var P = er(q, h);
            if (!(p && P === void 0)) {
              if (typeof P != "function") throw new TypeError("Argument '".concat(h, "' was not a function; received: ").concat(t(P)));
              if (P.rawArgs) return P(N, s, Ot(_, q));
              var G = m.map((ue) => ue(_, q, J));
              return P.apply(P, G);
            }
          };
        } else {
          var y = h in s ? er(s, h) : void 0, A = typeof y == "function" && y.rawArgs === true, E = (Z) => {
            var _;
            if (Z.has(h)) _ = Z.get(h);
            else if (h in s) _ = er(s, h);
            else if (p) _ = void 0;
            else return u.onUndefinedFunction(h);
            if (typeof _ == "function" || p && _ === void 0) return _;
            throw new TypeError("'".concat(h, `' is not a function; its value is:
  `).concat(t(_)));
          };
          if (A) {
            var C = this.args;
            return function(_, q, J) {
              var P = E(_);
              if (P.rawArgs === true) return P(C, s, Ot(_, q));
              var G = m.map((ue) => ue(_, q, J));
              return P(...G);
            };
          } else switch (m.length) {
            case 0:
              return function(_, q, J) {
                var P = E(_);
                if (!(p && P === void 0)) return P();
              };
            case 1:
              return function(_, q, J) {
                var P = E(_);
                if (!(p && P === void 0)) {
                  var G = m[0];
                  return P(G(_, q, J));
                }
              };
            case 2:
              return function(_, q, J) {
                var P = E(_);
                if (!(p && P === void 0)) {
                  var G = m[0], ue = m[1];
                  return P(G(_, q, J), ue(_, q, J));
                }
              };
            default:
              return function(_, q, J) {
                var P = E(_);
                if (!(p && P === void 0)) {
                  var G = m.map((ue) => ue(_, q, J));
                  return P(...G);
                }
              };
          }
        }
      } else if (Fr(this.fn) && dt(this.fn.index) && this.fn.index.isObjectProperty()) {
        var d = this.fn.object._compile(s, l), x = this.fn.index.getObjectProperty(), g = this.args;
        return function(_, q, J) {
          var P = d(_, q, J);
          if (!(p && (P == null || P[x] === void 0))) {
            var G = qc(P, x);
            if (G != null && G.rawArgs) return G(g, s, Ot(_, q));
            var ue = m.map((v) => v(_, q, J));
            return G.apply(P, ue);
          }
        };
      } else {
        var w = this.fn.toString(), F = this.fn._compile(s, l), $ = this.args;
        return function(_, q, J) {
          var P = F(_, q, J);
          if (!(p && P === void 0)) {
            if (typeof P != "function") throw new TypeError("Expression '".concat(w, "' did not evaluate to a function; value is:") + `
  `.concat(t(P)));
            if (P.rawArgs) return P($, s, Ot(_, q));
            var G = m.map((ue) => ue(_, q, J));
            return P.apply(P, G);
          }
        };
      }
    }
    forEach(s) {
      s(this.fn, "fn", this);
      for (var l = 0; l < this.args.length; l++) s(this.args[l], "args[" + l + "]", this);
    }
    map(s) {
      for (var l = this._ifNode(s(this.fn, "fn", this)), m = [], p = 0; p < this.args.length; p++) m[p] = this._ifNode(s(this.args[p], "args[" + p + "]", this));
      return new u(l, m);
    }
    clone() {
      return new u(this.fn, this.args.slice(0));
    }
    toString(s) {
      var l, m = this.fn.toString(s);
      return s && typeof s.handler == "object" && ye(s.handler, m) && (l = s.handler[m](this, s)), typeof l < "u" ? l : super.toString(s);
    }
    _toString(s) {
      var l = this.args.map(function(p) {
        return p.toString(s);
      }), m = It(this.fn) ? "(" + this.fn.toString(s) + ")" : this.fn.toString(s);
      return m + "(" + l.join(", ") + ")";
    }
    toJSON() {
      return { mathjs: pn, fn: this.fn, args: this.args };
    }
    _toHTML(s) {
      var l = this.args.map(function(m) {
        return m.toHTML(s);
      });
      return '<span class="math-function">' + cr(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + l.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>';
    }
    toTex(s) {
      var l;
      return s && typeof s.handler == "object" && ye(s.handler, this.name) && (l = s.handler[this.name](this, s)), typeof l < "u" ? l : super.toTex(s);
    }
    _toTex(s) {
      var l = this.args.map(function(h) {
        return h.toTex(s);
      }), m;
      Ni[this.name] && (m = Ni[this.name]), a[this.name] && (typeof a[this.name].toTex == "function" || typeof a[this.name].toTex == "object" || typeof a[this.name].toTex == "string") && (m = a[this.name].toTex);
      var p;
      switch (typeof m) {
        case "function":
          p = m(this, s);
          break;
        case "string":
          p = o(m, this, s);
          break;
        case "object":
          switch (typeof m[l.length]) {
            case "function":
              p = m[l.length](this, s);
              break;
            case "string":
              p = o(m[l.length], this, s);
              break;
          }
      }
      return typeof p < "u" ? p : o(h0, this, s);
    }
    getIdentifier() {
      return this.type + ":" + this.name;
    }
  }
  return r = u, Ue(u, "name", pn), Ue(u, "onUndefinedFunction", function(c) {
    throw new Error("Undefined function " + c);
  }), Ue(u, "fromJSON", function(c) {
    return new r(c.fn, c.args);
  }), u;
}, { isClass: true, isNode: true }), Ci = "parse", I0 = ["typed", "numeric", "config", "AccessorNode", "ArrayNode", "AssignmentNode", "BlockNode", "ConditionalNode", "ConstantNode", "FunctionAssignmentNode", "FunctionNode", "IndexNode", "ObjectNode", "OperatorNode", "ParenthesisNode", "RangeNode", "RelationalNode", "SymbolNode"], _0 = R(Ci, I0, (e) => {
  var { typed: r, numeric: a, config: n, AccessorNode: i, ArrayNode: t, AssignmentNode: o, BlockNode: u, ConditionalNode: c, ConstantNode: s, FunctionAssignmentNode: l, FunctionNode: m, IndexNode: p, ObjectNode: h, OperatorNode: y, ParenthesisNode: A, RangeNode: E, RelationalNode: C, SymbolNode: N } = e, d = r(Ci, { string: function(b) {
    return de(b, {});
  }, "Array | Matrix": function(b) {
    return x(b, {});
  }, "string, Object": function(b, k) {
    var V = k.nodes !== void 0 ? k.nodes : {};
    return de(b, V);
  }, "Array | Matrix, Object": x });
  function x(f) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, k = b.nodes !== void 0 ? b.nodes : {};
    return lr(f, function(V) {
      if (typeof V != "string") throw new TypeError("String expected");
      return de(V, k);
    });
  }
  var g = { NULL: 0, DELIMITER: 1, NUMBER: 2, SYMBOL: 3, UNKNOWN: 4 }, w = { ",": true, "(": true, ")": true, "[": true, "]": true, "{": true, "}": true, '"': true, "'": true, ";": true, "+": true, "-": true, "*": true, ".*": true, "/": true, "./": true, "%": true, "^": true, ".^": true, "~": true, "!": true, "&": true, "|": true, "^|": true, "=": true, ":": true, "?": true, "?.": true, "??": true, "==": true, "!=": true, "<": true, ">": true, "<=": true, ">=": true, "<<": true, ">>": true, ">>>": true }, F = { mod: true, to: true, in: true, and: true, xor: true, or: true, not: true }, $ = { true: true, false: false, null: null, undefined: void 0 }, Z = ["NaN", "Infinity"], _ = { '"': '"', "'": "'", "\\": "\\", "/": "/", b: "\b", f: "\f", n: `
`, r: "\r", t: "	" };
  function q() {
    return { extraNodes: {}, expression: "", comment: "", index: 0, token: "", tokenType: g.NULL, nestingLevel: 0, conditionalLevel: null };
  }
  function J(f, b) {
    return f.expression.substr(f.index, b);
  }
  function P(f) {
    return J(f, 1);
  }
  function G(f) {
    f.index++;
  }
  function ue(f) {
    return f.expression.charAt(f.index - 1);
  }
  function v(f) {
    return f.expression.charAt(f.index + 1);
  }
  function S(f) {
    for (f.tokenType = g.NULL, f.token = "", f.comment = ""; ; ) {
      if (P(f) === "#") for (; P(f) !== `
` && P(f) !== ""; ) f.comment += P(f), G(f);
      if (d.isWhitespace(P(f), f.nestingLevel)) G(f);
      else break;
    }
    if (P(f) === "") {
      f.tokenType = g.DELIMITER;
      return;
    }
    if (P(f) === `
` && !f.nestingLevel) {
      f.tokenType = g.DELIMITER, f.token = P(f), G(f);
      return;
    }
    var b = P(f), k = J(f, 2), V = J(f, 3);
    if (V.length === 3 && w[V]) {
      f.tokenType = g.DELIMITER, f.token = V, G(f), G(f), G(f);
      return;
    }
    if (k.length === 2 && w[k] && (k !== "?." || !d.isDigit(f.expression.charAt(f.index + 2)))) {
      f.tokenType = g.DELIMITER, f.token = k, G(f), G(f);
      return;
    }
    if (w[b]) {
      f.tokenType = g.DELIMITER, f.token = b, G(f);
      return;
    }
    if (d.isDigitDot(b)) {
      f.tokenType = g.NUMBER;
      var fe = J(f, 2);
      if (fe === "0b" || fe === "0o" || fe === "0x") {
        for (f.token += P(f), G(f), f.token += P(f), G(f); d.isAlpha(P(f), ue(f), v(f)) || d.isDigit(P(f)); ) f.token += P(f), G(f);
        if (P(f) === ".") for (f.token += ".", G(f); d.isAlpha(P(f), ue(f), v(f)) || d.isDigit(P(f)); ) f.token += P(f), G(f);
        else if (P(f) === "i") for (f.token += "i", G(f); d.isDigit(P(f)); ) f.token += P(f), G(f);
        return;
      }
      if (P(f) === ".") {
        if (f.token += P(f), G(f), !d.isDigit(P(f))) {
          f.tokenType = g.DELIMITER;
          return;
        }
      } else {
        for (; d.isDigit(P(f)); ) f.token += P(f), G(f);
        d.isDecimalMark(P(f), v(f)) && (f.token += P(f), G(f));
      }
      for (; d.isDigit(P(f)); ) f.token += P(f), G(f);
      if (P(f) === "E" || P(f) === "e") {
        if (d.isDigit(v(f)) || v(f) === "-" || v(f) === "+") {
          if (f.token += P(f), G(f), (P(f) === "+" || P(f) === "-") && (f.token += P(f), G(f)), !d.isDigit(P(f))) throw we(f, 'Digit expected, got "' + P(f) + '"');
          for (; d.isDigit(P(f)); ) f.token += P(f), G(f);
          if (d.isDecimalMark(P(f), v(f))) throw we(f, 'Digit expected, got "' + P(f) + '"');
        } else if (d.isDecimalMark(v(f), f.expression.charAt(f.index + 2))) throw G(f), we(f, 'Digit expected, got "' + P(f) + '"');
      }
      return;
    }
    if (d.isAlpha(P(f), ue(f), v(f))) {
      for (; d.isAlpha(P(f), ue(f), v(f)) || d.isDigit(P(f)); ) f.token += P(f), G(f);
      ye(F, f.token) ? f.tokenType = g.DELIMITER : f.tokenType = g.SYMBOL;
      return;
    }
    for (f.tokenType = g.UNKNOWN; P(f) !== ""; ) f.token += P(f), G(f);
    throw we(f, 'Syntax error in part "' + f.token + '"');
  }
  function Y(f) {
    do
      S(f);
    while (f.token === `
`);
  }
  function ee(f) {
    f.nestingLevel++;
  }
  function oe(f) {
    f.nestingLevel--;
  }
  d.isAlpha = function(b, k, V) {
    return d.isValidLatinOrGreek(b) || d.isValidMathSymbol(b, V) || d.isValidMathSymbol(k, b);
  }, d.isValidLatinOrGreek = function(b) {
    return /^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(b);
  }, d.isValidMathSymbol = function(b, k) {
    return /^[\uD835]$/.test(b) && /^[\uDC00-\uDFFF]$/.test(k) && /^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/.test(k);
  }, d.isWhitespace = function(b, k) {
    return b === " " || b === "	" || b === "\xA0" || b === `
` && k > 0;
  }, d.isDecimalMark = function(b, k) {
    return b === "." && k !== "/" && k !== "*" && k !== "^";
  }, d.isDigitDot = function(b) {
    return b >= "0" && b <= "9" || b === ".";
  }, d.isDigit = function(b) {
    return b >= "0" && b <= "9";
  };
  function de(f, b) {
    var k = q();
    or(k, { expression: f, extraNodes: b }), S(k);
    var V = te(k);
    if (k.token !== "") throw k.tokenType === g.DELIMITER ? je(k, "Unexpected operator " + k.token) : we(k, 'Unexpected part "' + k.token + '"');
    return V;
  }
  function te(f) {
    var b, k = [], V;
    for (f.token !== "" && f.token !== `
` && f.token !== ";" && (b = W(f), f.comment && (b.comment = f.comment)); f.token === `
` || f.token === ";"; ) k.length === 0 && b && (V = f.token !== ";", k.push({ node: b, visible: V })), S(f), f.token !== `
` && f.token !== ";" && f.token !== "" && (b = W(f), f.comment && (b.comment = f.comment), V = f.token !== ";", k.push({ node: b, visible: V }));
    return k.length > 0 ? new u(k) : (b || (b = new s(void 0), f.comment && (b.comment = f.comment)), b);
  }
  function W(f) {
    var b, k, V, fe, De = he(f);
    if (f.token === "=") {
      if (ze(De)) return b = De.name, Y(f), V = W(f), new o(new N(b), V);
      if (Fr(De)) {
        if (De.optionalChaining) throw we(f, "Cannot assign to optional chain");
        return Y(f), V = W(f), new o(De.object, De.index, V);
      } else if (Lr(De) && ze(De.fn) && (fe = true, k = [], b = De.name, De.args.forEach(function(Qe, nt) {
        ze(Qe) ? k[nt] = Qe.name : fe = false;
      }), fe)) return Y(f), V = W(f), new l(b, k, V);
      throw we(f, "Invalid left hand side of assignment operator =");
    }
    return De;
  }
  function he(f) {
    for (var b = ge(f); f.token === "?"; ) {
      var k = f.conditionalLevel;
      f.conditionalLevel = f.nestingLevel, Y(f);
      var V = b, fe = W(f);
      if (f.token !== ":") throw we(f, "False part of conditional expression expected");
      f.conditionalLevel = null, Y(f);
      var De = W(f);
      b = new c(V, fe, De), f.conditionalLevel = k;
    }
    return b;
  }
  function ge(f) {
    for (var b = ve(f); f.token === "or"; ) Y(f), b = new y("or", "or", [b, ve(f)]);
    return b;
  }
  function ve(f) {
    for (var b = ke(f); f.token === "xor"; ) Y(f), b = new y("xor", "xor", [b, ke(f)]);
    return b;
  }
  function ke(f) {
    for (var b = I(f); f.token === "and"; ) Y(f), b = new y("and", "and", [b, I(f)]);
    return b;
  }
  function I(f) {
    for (var b = M(f); f.token === "|"; ) Y(f), b = new y("|", "bitOr", [b, M(f)]);
    return b;
  }
  function M(f) {
    for (var b = L(f); f.token === "^|"; ) Y(f), b = new y("^|", "bitXor", [b, L(f)]);
    return b;
  }
  function L(f) {
    for (var b = ie(f); f.token === "&"; ) Y(f), b = new y("&", "bitAnd", [b, ie(f)]);
    return b;
  }
  function ie(f) {
    for (var b = [re(f)], k = [], V = { "==": "equal", "!=": "unequal", "<": "smaller", ">": "larger", "<=": "smallerEq", ">=": "largerEq" }; ye(V, f.token); ) {
      var fe = { name: f.token, fn: V[f.token] };
      k.push(fe), Y(f), b.push(re(f));
    }
    return b.length === 1 ? b[0] : b.length === 2 ? new y(k[0].name, k[0].fn, b) : new C(k.map((De) => De.fn), b);
  }
  function re(f) {
    var b, k, V, fe;
    b = ce(f);
    for (var De = { "<<": "leftShift", ">>": "rightArithShift", ">>>": "rightLogShift" }; ye(De, f.token); ) k = f.token, V = De[k], Y(f), fe = [b, ce(f)], b = new y(k, V, fe);
    return b;
  }
  function ce(f) {
    var b, k, V, fe;
    b = K(f);
    for (var De = { to: "to", in: "to" }; ye(De, f.token); ) k = f.token, V = De[k], Y(f), k === "in" && "])},;".includes(f.token) ? b = new y("*", "multiply", [b, new N("in")], true) : (fe = [b, K(f)], b = new y(k, V, fe));
    return b;
  }
  function K(f) {
    var b, k = [];
    if (f.token === ":" ? b = new s(1) : b = Ce(f), f.token === ":" && f.conditionalLevel !== f.nestingLevel) {
      for (k.push(b); f.token === ":" && k.length < 3; ) Y(f), f.token === ")" || f.token === "]" || f.token === "," || f.token === "" ? k.push(new N("end")) : k.push(Ce(f));
      k.length === 3 ? b = new E(k[0], k[2], k[1]) : b = new E(k[0], k[1]);
    }
    return b;
  }
  function Ce(f) {
    var b, k, V, fe;
    b = Ie(f);
    for (var De = { "+": "add", "-": "subtract" }; ye(De, f.token); ) {
      k = f.token, V = De[k], Y(f);
      var Qe = Ie(f);
      Qe.isPercentage ? fe = [b, new y("*", "multiply", [b, Qe])] : fe = [b, Qe], b = new y(k, V, fe);
    }
    return b;
  }
  function Ie(f) {
    var b, k, V, fe;
    b = _e(f), k = b;
    for (var De = { "*": "multiply", ".*": "dotMultiply", "/": "divide", "./": "dotDivide", "%": "mod", mod: "mod" }; ye(De, f.token); ) V = f.token, fe = De[V], Y(f), k = _e(f), b = new y(V, fe, [b, k]);
    return b;
  }
  function _e(f) {
    var b, k;
    for (b = Je(f), k = b; f.tokenType === g.SYMBOL || f.token === "in" && Ne(b) || f.token === "in" && qe(b) && b.fn === "unaryMinus" && Ne(b.args[0]) || f.tokenType === g.NUMBER && !Ne(k) && (!qe(k) || k.op === "!") || f.token === "("; ) k = Je(f), b = new y("*", "multiply", [b, k], true);
    return b;
  }
  function Je(f) {
    for (var b = Ve(f), k = b, V = []; f.token === "/" && ra(k); ) if (V.push(or({}, f)), Y(f), f.tokenType === g.NUMBER) if (V.push(or({}, f)), Y(f), f.tokenType === g.SYMBOL || f.token === "(" || f.token === "in") or(f, V.pop()), V.pop(), k = Ve(f), b = new y("/", "divide", [b, k]);
    else {
      V.pop(), or(f, V.pop());
      break;
    }
    else {
      or(f, V.pop());
      break;
    }
    return b;
  }
  function Ve(f) {
    var b = ir(f);
    if (f.token === "%") {
      var k = or({}, f);
      Y(f);
      try {
        ir(f), or(f, k);
      } catch {
        b = new y("/", "divide", [b, new s(100)], false, true);
      }
    }
    return b;
  }
  function ir(f) {
    var b, k, V, fe = { "-": "unaryMinus", "+": "unaryPlus", "~": "bitNot", not: "not" };
    return ye(fe, f.token) ? (V = fe[f.token], b = f.token, Y(f), k = [ir(f)], new y(b, V, k)) : qr(f);
  }
  function qr(f) {
    var b, k, V, fe;
    return b = Pr(f), (f.token === "^" || f.token === ".^") && (k = f.token, V = k === "^" ? "pow" : "dotPow", Y(f), fe = [b, ir(f)], b = new y(k, V, fe)), b;
  }
  function Pr(f) {
    for (var b = D(f); f.token === "??"; ) Y(f), b = new y("??", "nullish", [b, D(f)]);
    return b;
  }
  function D(f) {
    var b, k, V, fe;
    b = B(f);
    for (var De = { "!": "factorial", "'": "ctranspose" }; ye(De, f.token); ) k = f.token, V = De[k], S(f), fe = [b], b = new y(k, V, fe), b = j(f, b);
    return b;
  }
  function B(f) {
    var b = [];
    if (f.tokenType === g.SYMBOL && ye(f.extraNodes, f.token)) {
      var k = f.extraNodes[f.token];
      if (S(f), f.token === "(") {
        if (b = [], ee(f), S(f), f.token !== ")") for (b.push(W(f)); f.token === ","; ) S(f), b.push(W(f));
        if (f.token !== ")") throw we(f, "Parenthesis ) expected");
        oe(f), S(f);
      }
      return new k(b);
    }
    return O(f);
  }
  function O(f) {
    var b, k;
    return f.tokenType === g.SYMBOL || f.tokenType === g.DELIMITER && f.token in F ? (k = f.token, S(f), ye($, k) ? b = new s($[k]) : Z.includes(k) ? b = new s(a(k, "number")) : b = new N(k), b = j(f, b), b) : U(f);
  }
  function j(f, b, k) {
    for (var V; ; ) {
      var fe = false;
      f.token === "?." && (fe = true, S(f));
      var De = (f.token === "(" || f.token === "[" || f.token === ".") && true;
      if (!(fe || De)) break;
      if (V = [], f.token === "(") if (fe || ze(b) || Fr(b)) {
        if (ee(f), S(f), f.token !== ")") for (V.push(W(f)); f.token === ","; ) S(f), V.push(W(f));
        if (f.token !== ")") throw we(f, "Parenthesis ) expected");
        oe(f), S(f), b = new m(b, V, fe);
      } else return b;
      else if (f.token === "[") {
        if (ee(f), S(f), f.token !== "]") for (V.push(W(f)); f.token === ","; ) S(f), V.push(W(f));
        if (f.token !== "]") throw we(f, "Parenthesis ] expected");
        oe(f), S(f), b = new i(b, new p(V), fe);
      } else {
        fe || S(f);
        var Qe = f.tokenType === g.SYMBOL || f.tokenType === g.DELIMITER && f.token in F;
        if (!Qe) {
          var nt = "Property name expected after ";
          throw nt += fe ? "optional chain" : "dot", we(f, nt);
        }
        V.push(new s(f.token)), S(f);
        var Hn = true;
        b = new i(b, new p(V, Hn), fe);
      }
    }
    return b;
  }
  function U(f) {
    var b, k;
    return f.token === '"' || f.token === "'" ? (k = z(f, f.token), b = new s(k), b = j(f, b), b) : ne(f);
  }
  function z(f, b) {
    for (var k = ""; P(f) !== "" && P(f) !== b; ) if (P(f) === "\\") {
      G(f);
      var V = P(f), fe = _[V];
      if (fe !== void 0) k += fe, f.index += 1;
      else if (V === "u") {
        var De = f.expression.slice(f.index + 1, f.index + 5);
        if (/^[0-9A-Fa-f]{4}$/.test(De)) k += String.fromCharCode(parseInt(De, 16)), f.index += 5;
        else throw we(f, "Invalid unicode character \\u".concat(De));
      } else throw we(f, "Bad escape character \\".concat(V));
    } else k += P(f), G(f);
    if (S(f), f.token !== b) throw we(f, "End of string ".concat(b, " expected"));
    return S(f), k;
  }
  function ne(f) {
    var b, k, V, fe;
    if (f.token === "[") {
      if (ee(f), S(f), f.token !== "]") {
        var De = Q(f);
        if (f.token === ";") {
          for (V = 1, k = [De]; f.token === ";"; ) S(f), f.token !== "]" && (k[V] = Q(f), V++);
          if (f.token !== "]") throw we(f, "End of matrix ] expected");
          oe(f), S(f), fe = k[0].items.length;
          for (var Qe = 1; Qe < V; Qe++) if (k[Qe].items.length !== fe) throw je(f, "Column dimensions mismatch (" + k[Qe].items.length + " !== " + fe + ")");
          b = new t(k);
        } else {
          if (f.token !== "]") throw we(f, "End of matrix ] expected");
          oe(f), S(f), b = De;
        }
      } else oe(f), S(f), b = new t([]);
      return j(f, b);
    }
    return ae(f);
  }
  function Q(f) {
    for (var b = [W(f)], k = 1; f.token === ","; ) S(f), f.token !== "]" && f.token !== ";" && (b[k] = W(f), k++);
    return new t(b);
  }
  function ae(f) {
    if (f.token === "{") {
      ee(f);
      var b, k = {};
      do
        if (S(f), f.token !== "}") {
          if (f.token === '"' || f.token === "'") b = z(f, f.token);
          else if (f.tokenType === g.SYMBOL || f.tokenType === g.DELIMITER && f.token in F) b = f.token, S(f);
          else throw we(f, "Symbol or string expected as object key");
          if (f.token !== ":") throw we(f, "Colon : expected after object key");
          S(f), k[b] = W(f);
        }
      while (f.token === ",");
      if (f.token !== "}") throw we(f, "Comma , or bracket } expected after object value");
      oe(f), S(f);
      var V = new h(k);
      return V = j(f, V), V;
    }
    return X(f);
  }
  function X(f) {
    var b;
    if (f.tokenType === g.NUMBER) {
      b = f.token, S(f);
      var k = Yr(b, n), V = a(b, k);
      return new s(V);
    }
    return Ee(f);
  }
  function Ee(f) {
    var b;
    if (f.token === "(") {
      if (ee(f), S(f), b = W(f), f.token !== ")") throw we(f, "Parenthesis ) expected");
      return oe(f), S(f), b = new A(b), b = j(f, b), b;
    }
    return Te(f);
  }
  function Te(f) {
    throw f.token === "" ? we(f, "Unexpected end of expression") : we(f, "Value expected");
  }
  function $e(f) {
    return f.index - f.token.length + 1;
  }
  function we(f, b) {
    var k = $e(f), V = new SyntaxError(b + " (char " + k + ")");
    return V.char = k, V;
  }
  function je(f, b) {
    var k = $e(f), V = new SyntaxError(b + " (char " + k + ")");
    return V.char = k, V;
  }
  return r.addConversion({ from: "string", to: "Node", convert: d }), d;
}), Ei = "compile", R0 = ["typed", "parse"], j0 = R(Ei, R0, (e) => {
  var { typed: r, parse: a } = e;
  return r(Ei, { string: function(i) {
    return a(i).compile();
  }, "Array | Matrix": function(i) {
    return lr(i, function(t) {
      return a(t).compile();
    });
  } });
}), Fi = "evaluate", L0 = ["typed", "parse"], z0 = R(Fi, L0, (e) => {
  var { typed: r, parse: a } = e;
  return r(Fi, { string: function(i) {
    var t = qt();
    return a(i).compile().evaluate(t);
  }, "string, Map | Object": function(i, t) {
    return a(i).compile().evaluate(t);
  }, "Array | Matrix": function(i) {
    var t = qt();
    return lr(i, function(o) {
      return a(o).compile().evaluate(t);
    });
  }, "Array | Matrix, Map | Object": function(i, t) {
    return lr(i, function(o) {
      return a(o).compile().evaluate(t);
    });
  } });
}), U0 = "Parser", W0 = ["evaluate", "parse"], H0 = R(U0, W0, (e) => {
  var { evaluate: r, parse: a } = e;
  function n() {
    if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
    Object.defineProperty(this, "scope", { value: qt(), writable: false });
  }
  n.prototype.type = "Parser", n.prototype.isParser = true, n.prototype.evaluate = function(t) {
    return r(t, this.scope);
  }, n.prototype.get = function(t) {
    if (this.scope.has(t)) return this.scope.get(t);
  }, n.prototype.getAll = function() {
    return Rc(this.scope);
  }, n.prototype.getAllAsMap = function() {
    return this.scope;
  };
  function i(t) {
    if (t.length === 0) return false;
    for (var o = 0; o < t.length; o++) {
      var u = t.charAt(o - 1), c = t.charAt(o), s = t.charAt(o + 1), l = a.isAlpha(c, u, s) || o > 0 && a.isDigit(c);
      if (!l) return false;
    }
    return true;
  }
  return n.prototype.set = function(t, o) {
    if (!i(t)) throw new Error("Invalid variable name: '".concat(t, "'. Variable names must follow the specified rules."));
    return this.scope.set(t, o), o;
  }, n.prototype.remove = function(t) {
    this.scope.delete(t);
  }, n.prototype.clear = function() {
    this.scope.clear();
  }, n.prototype.toJSON = function() {
    var t = { mathjs: "Parser", variables: {}, functions: {} };
    for (var [o, u] of this.scope) if (jo(u)) {
      if (!Z0(u)) throw new Error("Cannot serialize external function ".concat(o));
      t.functions[o] = "".concat(u.syntax, " = ").concat(u.expr);
    } else t.variables[o] = u;
    return t;
  }, n.fromJSON = function(t) {
    var o = new n();
    return Object.entries(t.variables).forEach((u) => {
      var [c, s] = u;
      return o.set(c, s);
    }), Object.entries(t.functions).forEach((u) => {
      var [c, s] = u;
      return o.evaluate(s);
    }), o;
  }, n;
}, { isClass: true });
function Z0(e) {
  return typeof e == "function" && typeof e.syntax == "string" && typeof e.expr == "string";
}
var Bi = "mapSlices", J0 = ["typed", "isInteger"], la = R(Bi, J0, (e) => {
  var { typed: r, isInteger: a } = e;
  return r(Bi, { "Array | Matrix, number | BigNumber, function": function(i, t, o) {
    if (!a(t)) throw new TypeError("Integer number expected for dimension");
    var u = Array.isArray(i) ? tr(i) : i.size();
    if (t < 0 || t >= u.length) throw new br(t, u.length);
    return rr(i) ? i.create(Fn(i.valueOf(), t, o), i.datatype()) : Fn(i, t, o);
  } });
}, { formerly: "apply" });
function Fn(e, r, a) {
  var n, i, t;
  if (r <= 0) if (Array.isArray(e[0])) {
    for (t = V0(e), i = [], n = 0; n < t.length; n++) i[n] = Fn(t[n], r - 1, a);
    return i;
  } else return a(e);
  else {
    for (i = [], n = 0; n < e.length; n++) i[n] = Fn(e[n], r - 1, a);
    return i;
  }
}
function V0(e) {
  var r = e.length, a = e[0].length, n, i, t = [];
  for (i = 0; i < a; i++) {
    var o = [];
    for (n = 0; n < r; n++) o.push(e[n][i]);
    t.push(o);
  }
  return t;
}
function Ca(e, r, a, n) {
  if (xn.isTypedFunction(e)) {
    var i;
    {
      var t = r.isMatrix ? r.size() : tr(r), o = t.length ? t[t.length - 1] === 0 : true;
      if (o) return { isUnary: n, fn: e };
      var u = t.map(() => 0), c = r.isMatrix ? r.get(u) : sa(r, u);
      i = Q0(e, c, u, r);
    }
    var s;
    if (r.isMatrix && r.dataType !== "mixed" && r.dataType !== void 0) {
      var l = X0(e, i);
      s = l !== void 0 ? l : e;
    } else s = e;
    return i >= 1 && i <= 3 ? { isUnary: i === 1, fn: function() {
      for (var p = arguments.length, h = new Array(p), y = 0; y < p; y++) h[y] = arguments[y];
      return Si(s, h.slice(0, i), a, e.name);
    } } : { isUnary: false, fn: function() {
      for (var p = arguments.length, h = new Array(p), y = 0; y < p; y++) h[y] = arguments[y];
      return Si(s, h, a, e.name);
    } };
  }
  return { isUnary: G0(e), fn: e };
}
function X0(e, r) {
  var a = [];
  if (Object.entries(e.signatures).forEach((n) => {
    var [i, t] = n;
    i.split(",").length === r && a.push(t);
  }), a.length === 1) return a[0];
}
function G0(e) {
  if (e.length !== 1) return false;
  var r = e.toString();
  if (/arguments/.test(r)) return false;
  var a = r.match(/\(.*?\)/);
  return !/\.\.\./.test(a);
}
function Q0(e, r, a, n) {
  for (var i = [r, a, n], t = 3; t > 0; t--) {
    var o = i.slice(0, t);
    if (xn.resolve(e, o) !== null) return t;
  }
}
function Si(e, r, a, n) {
  try {
    return e(...r);
  } catch (i) {
    K0(i, r, a, n);
  }
}
function K0(e, r, a, n) {
  var i;
  if (e instanceof TypeError && ((i = e.data) === null || i === void 0 ? void 0 : i.category) === "wrongType") {
    var t = [];
    throw t.push("value: ".concat(Ze(r[0]))), r.length >= 2 && t.push("index: ".concat(Ze(r[1]))), r.length >= 3 && t.push("array: ".concat(Ze(r[2]))), new TypeError("Function ".concat(a, " cannot apply callback arguments ") + "".concat(n, "(").concat(t.join(", "), ") at index ").concat(JSON.stringify(r[1])));
  } else throw new TypeError("Function ".concat(a, " cannot apply callback arguments ") + "to function ".concat(n, ": ").concat(e.message));
}
var Y0 = "filter", e1 = ["typed"], Bu = R(Y0, e1, (e) => {
  var { typed: r } = e;
  return r("filter", { "Array, function": Ti, "Matrix, function": function(n, i) {
    return n.create(Ti(n.valueOf(), i), n.datatype());
  }, "Array, RegExp": li, "Matrix, RegExp": function(n, i) {
    return n.create(li(n.valueOf(), i), n.datatype());
  } });
});
function Ti(e, r) {
  var a = Ca(r, e, "filter");
  return a.isUnary ? ci(e, a.fn) : ci(e, function(n, i, t) {
    return a.fn(n, [i], t);
  });
}
var fa = "forEach", r1 = ["typed"], Su = R(fa, r1, (e) => {
  var { typed: r } = e;
  return r(fa, { "Array, function": t1, "Matrix, function": function(n, i) {
    n.forEach(i);
  } });
});
function t1(e, r) {
  var a = Ca(r, e, fa);
  wu(e, a.fn, a.isUnary);
}
var Qn = "map", n1 = ["typed"], Tu = R(Qn, n1, (e) => {
  var { typed: r } = e;
  return r(Qn, { "Array, function": u, "Matrix, function": function(s, l) {
    return s.map(l);
  }, "Array|Matrix, Array|Matrix, ...Array|Matrix|function": (c, s, l) => a([c, s, ...l.slice(0, l.length - 1)], l[l.length - 1]) });
  function a(c, s) {
    if (typeof s != "function") throw new Error("Last argument must be a callback function");
    var l = c[0].isMatrix, m = c.map((g) => g.isMatrix ? g.size() : tr(g)), p = oa(...m), h = c.length, y = l ? (g, w) => g.get(w) : sa, A = c.map((g, w) => {
      var F = m[w].map(() => 0);
      return g.isMatrix ? g.get(F) : sa(g, F);
    }), E = r.isTypedFunction(s) ? o(s, A, p.map(() => 0), c) : t(s, h);
    if (E < 2) {
      var C = i(E, s, null);
      return n(c, C);
    }
    var N = l ? c.map((g) => g.isMatrix ? g.create(Kt(g.toArray(), p), g.datatype()) : c[0].create(Kt(g.valueOf(), p))) : c.map((g) => g.isMatrix ? Kt(g.toArray(), p) : Kt(g, p)), d = i(E, s, N), x = (g, w) => d([g, ...N.slice(1).map((F) => y(F, w))], w);
    return l ? N[0].map(x) : u(N[0], x);
  }
  function n(c, s) {
    var l = c[0], m = c.map((g) => g.isMatrix ? g.valueOf() : g), p = c.map((g) => g.isMatrix ? g.size() : tr(g)), h = oa(...p), y = p.map((g) => h.length - g.length), A = h.length - 1, E = s.length > 1, C = E ? [] : null, N = x(m, 0);
    if (l.isMatrix) {
      var d = l.create();
      return d._data = N, d._size = h, d;
    } else return N;
    function x(g) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, F = h[w], $ = Array(F);
      if (w < A) for (var Z = function(G) {
        C && (C[w] = G), $[G] = x(g.map((ue, v) => y[v] > w ? ue : ue.length === 1 ? ue[0] : ue[G]), w + 1);
      }, _ = 0; _ < F; _++) Z(_);
      else for (var q = function(G) {
        C && (C[w] = G), $[G] = s(g.map((ue) => ue.length === 1 ? ue[0] : ue[G]), C ? C.slice() : void 0);
      }, J = 0; J < F; J++) q(J);
      return $;
    }
  }
  function i(c, s, l) {
    switch (c) {
      case 0:
        return (m) => s(...m);
      case 1:
        return (m, p) => s(...m, p);
      case 2:
        return (m, p) => s(...m, p, ...l);
    }
  }
  function t(c, s) {
    var l = c.toString();
    if (/arguments/.test(l)) return 2;
    var m = l.match(/\(.*?\)/);
    return /\.\.\./.test(m) || c.length > s + 1 ? 2 : c.length === s + 1 ? 1 : 0;
  }
  function o(c, s, l, m) {
    return r.resolve(c, [...s, l, ...m]) !== null ? 2 : r.resolve(c, [...s, l]) !== null ? 1 : (r.resolve(c, s) !== null, 0);
  }
  function u(c, s) {
    var l = Ca(s, c, Qn);
    return xu(c, l.fn, l.isUnary);
  }
}), Mi = "range", a1 = ["typed", "config", "?matrix", "?bignumber", "equal", "smaller", "smallerEq", "larger", "largerEq", "add", "isZero", "isPositive"], Mu = R(Mi, a1, (e) => {
  var { typed: r, config: a, matrix: n, bignumber: i, smaller: t, smallerEq: o, larger: u, largerEq: c, add: s, isZero: l, isPositive: m } = e;
  return r(Mi, { string: h, "string, boolean": h, number: function(C) {
    throw new TypeError("Too few arguments to function range(): ".concat(C));
  }, boolean: function(C) {
    throw new TypeError("Unexpected type of argument 1 to function range(): ".concat(C, ", number|bigint|BigNumber|Fraction"));
  }, "number, number": function(C, N) {
    return p(y(C, N, 1, false));
  }, "number, number, number": function(C, N, d) {
    return p(y(C, N, d, false));
  }, "number, number, boolean": function(C, N, d) {
    return p(y(C, N, 1, d));
  }, "number, number, number, boolean": function(C, N, d, x) {
    return p(y(C, N, d, x));
  }, "bigint, bigint|number": function(C, N) {
    return p(y(C, N, 1n, false));
  }, "number, bigint": function(C, N) {
    return p(y(BigInt(C), N, 1n, false));
  }, "bigint, bigint|number, bigint|number": function(C, N, d) {
    return p(y(C, N, BigInt(d), false));
  }, "number, bigint, bigint|number": function(C, N, d) {
    return p(y(BigInt(C), N, BigInt(d), false));
  }, "bigint, bigint|number, boolean": function(C, N, d) {
    return p(y(C, N, 1n, d));
  }, "number, bigint, boolean": function(C, N, d) {
    return p(y(BigInt(C), N, 1n, d));
  }, "bigint, bigint|number, bigint|number, boolean": function(C, N, d, x) {
    return p(y(C, N, BigInt(d), x));
  }, "number, bigint, bigint|number, boolean": function(C, N, d, x) {
    return p(y(BigInt(C), N, BigInt(d), x));
  }, "BigNumber, BigNumber": function(C, N) {
    var d = C.constructor;
    return p(y(C, N, new d(1), false));
  }, "BigNumber, BigNumber, BigNumber": function(C, N, d) {
    return p(y(C, N, d, false));
  }, "BigNumber, BigNumber, boolean": function(C, N, d) {
    var x = C.constructor;
    return p(y(C, N, new x(1), d));
  }, "BigNumber, BigNumber, BigNumber, boolean": function(C, N, d, x) {
    return p(y(C, N, d, x));
  }, "Fraction, Fraction": function(C, N) {
    return p(y(C, N, 1, false));
  }, "Fraction, Fraction, Fraction": function(C, N, d) {
    return p(y(C, N, d, false));
  }, "Fraction, Fraction, boolean": function(C, N, d) {
    return p(y(C, N, 1, d));
  }, "Fraction, Fraction, Fraction, boolean": function(C, N, d, x) {
    return p(y(C, N, d, x));
  }, "Unit, Unit, Unit": function(C, N, d) {
    return p(y(C, N, d, false));
  }, "Unit, Unit, Unit, boolean": function(C, N, d, x) {
    return p(y(C, N, d, x));
  } });
  function p(E) {
    return a.matrix === "Matrix" ? n ? n(E) : eu() : E;
  }
  function h(E, C) {
    var N = A(E);
    if (!N) throw new SyntaxError('String "' + E + '" is no valid range');
    return a.number === "BigNumber" ? (i === void 0 && wa(), p(y(i(N.start), i(N.end), i(N.step)))) : p(y(N.start, N.end, N.step, C));
  }
  function y(E, C, N, d) {
    var x = [];
    if (l(N)) throw new Error("Step must be non-zero");
    for (var g = m(N) ? d ? o : t : d ? c : u, w = E; g(w, C); ) x.push(w), w = s(w, N);
    return x;
  }
  function A(E) {
    var C = E.split(":"), N = C.map(function(x) {
      return Number(x);
    }), d = N.some(function(x) {
      return isNaN(x);
    });
    if (d) return null;
    switch (N.length) {
      case 2:
        return { start: N[0], end: N[1], step: 1 };
      case 3:
        return { start: N[0], end: N[2], step: N[1] };
      default:
        return null;
    }
  }
}), Oi = "size", i1 = ["typed"], o1 = R(Oi, i1, (e) => {
  var { typed: r } = e;
  return r(Oi, { Matrix: (a) => a.size(), Array: tr, string: (a) => [a.length], "number | Complex | BigNumber | Unit | boolean | null": (a) => [] });
}), $i = "partitionSelect", s1 = ["typed", "isNumeric", "isNaN", "compare"], u1 = R($i, s1, (e) => {
  var { typed: r, isNumeric: a, isNaN: n, compare: i } = e, t = i, o = (s, l) => -i(s, l);
  return r($i, { "Array | Matrix, number": function(l, m) {
    return u(l, m, t);
  }, "Array | Matrix, number, string": function(l, m, p) {
    if (p === "asc") return u(l, m, t);
    if (p === "desc") return u(l, m, o);
    throw new Error('Compare string must be "asc" or "desc"');
  }, "Array | Matrix, number, function": u });
  function u(s, l, m) {
    if (!xe(l) || l < 0) throw new Error("k must be a non-negative integer");
    if (rr(s)) {
      var p = s.size();
      if (p.length > 1) throw new Error("Only one dimensional matrices supported");
      return c(s.valueOf(), l, m);
    }
    if (Array.isArray(s)) return c(s, l, m);
  }
  function c(s, l, m) {
    if (l >= s.length) throw new Error("k out of bounds");
    for (var p = 0; p < s.length; p++) if (a(s[p]) && n(s[p])) return s[p];
    for (var h = 0, y = s.length - 1; h < y; ) {
      for (var A = h, E = y, C = s[Math.floor(Math.random() * (y - h + 1)) + h]; A < E; ) if (m(s[A], C) >= 0) {
        var N = s[E];
        s[E] = s[A], s[A] = N, --E;
      } else ++A;
      m(s[A], C) > 0 && --A, l <= A ? y = A : h = A + 1;
    }
    return s[l];
  }
}), ki = "bernoulli", c1 = ["typed", "config", "isInteger", "number", "?BigNumber", "?Fraction"], l1 = R(ki, c1, (e) => {
  var { typed: r, config: a, number: n, BigNumber: i, Fraction: t } = e, o = [void 0], u = [void 0], c = [void 0], s = 50;
  return r(ki, { number: (l) => Kn(l, (m) => m, o, (m, p) => m + p, (m, p) => m * p, (m, p) => m / p), "bigint | Fraction": (l) => Kn(n(l), (m) => new t(m), u, (m, p) => m.add(p), (m, p) => m.mul(p), (m, p) => m.div(p)), BigNumber: (l) => (a.precision !== s && (c = [void 0], s = a.precision), Kn(n(l), (m) => new i(m), c, (m, p) => m.add(p), (m, p) => m.mul(p), (m, p) => m.div(p))) });
});
function Kn(e, r, a, n, i, t) {
  if (e < 0 || !xe(e)) throw new RangeError("Bernoulli index must be nonnegative integer");
  if (e === 0) return r(1);
  if (e === 1) return t(r(-1), r(2));
  if (e % 2 === 1) return r(0);
  var o = r(1);
  a.length === 1 && a.push([t(o, r(-3)), t(o, r(-2)), t(o, r(6))]);
  for (var u = e / 2, c = r(0), s = r(2); a.length <= u; ) {
    for (var l = a.length, m = Math.floor((l + 1) / 2), p = c, h = 1; h < m; ++h) p = n(p, i(a[h][0], a[l - h][0]));
    p = i(p, s), l % 2 === 0 && (p = n(p, i(a[m][0], a[m][0]))), p = t(p, r(-(2 * l + 1)));
    var y = t(i(a[l - 1][1], r(-l * (2 * l - 1))), s);
    a.push([p, y, i(y, p)]);
  }
  return a[u][2];
}
var qi = "combinationsWithRep", f1 = ["typed"], m1 = R(qi, f1, (e) => {
  var { typed: r } = e;
  return r(qi, { "number, number": function(n, i) {
    if (!xe(n) || n < 0) throw new TypeError("Positive integer value expected in function combinationsWithRep");
    if (!xe(i) || i < 0) throw new TypeError("Positive integer value expected in function combinationsWithRep");
    if (n < 1) throw new TypeError("k must be less than or equal to n + k - 1");
    if (i < n - 1) {
      var t = Ar(n, n + i - 1);
      return t / Ar(1, i);
    }
    var o = Ar(i + 1, n + i - 1);
    return o / Ar(1, n - 1);
  }, "BigNumber, BigNumber": function(n, i) {
    var t = n.constructor, o, u, c = new t(1), s = n.minus(c);
    if (!Pi(n) || !Pi(i)) throw new TypeError("Positive integer value expected in function combinationsWithRep");
    if (n.lt(c)) throw new TypeError("k must be less than or equal to n + k - 1 in function combinationsWithRep");
    if (o = c, i.lt(s)) for (u = c; u.lte(s); u = u.plus(c)) o = o.times(i.plus(u)).dividedBy(u);
    else for (u = c; u.lte(i); u = u.plus(c)) o = o.times(s.plus(u)).dividedBy(u);
    return o;
  } });
});
function Pi(e) {
  return e.isInteger() && e.gte(0);
}
var Ii = "factorial", p1 = ["typed", "gamma"], d1 = R(Ii, p1, (e) => {
  var { typed: r, gamma: a } = e;
  return r(Ii, { number: function(i) {
    if (i < 0) throw new Error("Value must be non-negative");
    return a(i + 1);
  }, BigNumber: function(i) {
    if (i.isNegative()) throw new Error("Value must be non-negative");
    return a(i.plus(1));
  }, "Array | Matrix": r.referToSelf((n) => (i) => lr(i, n)) });
}), _i = "multinomial", h1 = ["typed", "add", "divide", "multiply", "factorial", "isInteger", "isPositive"], v1 = R(_i, h1, (e) => {
  var { typed: r, add: a, divide: n, multiply: i, factorial: t, isInteger: o, isPositive: u } = e;
  return r(_i, { "Array | Matrix": function(s) {
    var l = 0, m = 1;
    return Wr(s, function(p) {
      if (!o(p) || !u(p)) throw new TypeError("Positive integer value expected in function multinomial");
      l = a(l, p), m = i(m, t(p));
    }), n(t(l), m);
  } });
}), Ri = "permutations", g1 = ["typed", "factorial"], y1 = R(Ri, g1, (e) => {
  var { typed: r, factorial: a } = e;
  return r(Ri, { "number | BigNumber": a, "number, number": function(i, t) {
    if (!xe(i) || i < 0) throw new TypeError("Positive integer value expected in function permutations");
    if (!xe(t) || t < 0) throw new TypeError("Positive integer value expected in function permutations");
    if (t > i) throw new TypeError("second argument k must be less than or equal to first argument n");
    return Ar(i - t + 1, i);
  }, "BigNumber, BigNumber": function(i, t) {
    var o, u;
    if (!ji(i) || !ji(t)) throw new TypeError("Positive integer value expected in function permutations");
    if (t.gt(i)) throw new TypeError("second argument k must be less than or equal to first argument n");
    var c = i.mul(0).add(1);
    for (o = c, u = i.minus(t).plus(1); u.lte(i); u = u.plus(1)) o = o.times(u);
    return o;
  } });
});
function ji(e) {
  return e.isInteger() && e.gte(0);
}
var D1 = $o(Date.now());
function pt(e) {
  var r;
  function a(i) {
    r = i === null ? D1 : $o(String(i));
  }
  a(e);
  function n() {
    return r();
  }
  return n;
}
var Li = "pickRandom", b1 = ["typed", "config", "?on"], x1 = R(Li, b1, (e) => {
  var { typed: r, config: a, on: n } = e, i = pt(a.randomSeed);
  return n && n("config", function(o, u) {
    o.randomSeed !== u.randomSeed && (i = pt(o.randomSeed));
  }), r(Li, { "Array | Matrix": function(u) {
    return t(u, {});
  }, "Array | Matrix, Object": function(u, c) {
    return t(u, c);
  }, "Array | Matrix, number": function(u, c) {
    return t(u, { number: c });
  }, "Array | Matrix, Array | Matrix": function(u, c) {
    return t(u, { weights: c });
  }, "Array | Matrix, Array | Matrix, number": function(u, c, s) {
    return t(u, { number: s, weights: c });
  }, "Array | Matrix, number, Array | Matrix": function(u, c, s) {
    return t(u, { number: c, weights: s });
  } });
  function t(o, u) {
    var { number: c, weights: s, elementWise: l = true } = u, m = typeof c > "u";
    m && (c = 1);
    var p = rr(o) ? o.create : rr(s) ? s.create : null;
    o = o.valueOf(), s && (s = s.valueOf()), l === true && (o = Ur(o), s = Ur(s));
    var h = 0;
    if (typeof s < "u") {
      if (s.length !== o.length) throw new Error("Weights must have the same length as possibles");
      for (var y = 0, A = s.length; y < A; y++) {
        if (!Pe(s[y]) || s[y] < 0) throw new Error("Weights must be an array of positive numbers");
        h += s[y];
      }
    }
    for (var E = o.length, C = [], N; C.length < c; ) {
      if (typeof s > "u") N = o[Math.floor(i() * E)];
      else for (var d = i() * h, x = 0, g = o.length; x < g; x++) if (d -= s[x], d < 0) {
        N = o[x];
        break;
      }
      C.push(N);
    }
    return m ? C[0] : p ? p(C) : C;
  }
});
function Ou(e, r) {
  var a = [];
  if (e = e.slice(0), e.length > 1) for (var n = 0, i = e.shift(); n < i; n++) a.push(Ou(e, r));
  else for (var t = 0, o = e.shift(); t < o; t++) a.push(r());
  return a;
}
var zi = "random", w1 = R(zi, ["typed", "config", "?on"], (e) => {
  var { typed: r, config: a, on: n, matrix: i } = e, t = pt(a.randomSeed);
  return n && n("config", function(u, c) {
    u.randomSeed !== c.randomSeed && (t = pt(u.randomSeed));
  }), r(zi, { "": () => o(0, 1), number: (u) => o(0, u), "number, number": (u, c) => o(u, c) });
  function o(u, c) {
    return u + t() * (c - u);
  }
}), Ui = "randomInt", N1 = ["typed", "config", "log2", "?on"], A1 = R(Ui, N1, (e) => {
  var { typed: r, config: a, log2: n, on: i } = e, t = pt(a.randomSeed);
  return i && i("config", function(s, l) {
    s.randomSeed !== l.randomSeed && (t = pt(s.randomSeed));
  }), r(Ui, { "": () => u(0, 2), number: (s) => u(0, s), "number, number": (s, l) => u(s, l), bigint: (s) => c(0n, s), "bigint, bigint": c, "Array | Matrix": (s) => o(s, 0, 1), "Array | Matrix, number": (s, l) => o(s, 0, l), "Array | Matrix, number, number": (s, l, m) => o(s, l, m) });
  function o(s, l, m) {
    var p = Ou(s.valueOf(), () => u(l, m));
    return rr(s) ? s.create(p, "number") : p;
  }
  function u(s, l) {
    return Math.floor(s + t() * (l - s));
  }
  function c(s, l) {
    var m = 2n ** 30n, p = l - s;
    if (p <= m) return s + BigInt(u(0, Number(p)));
    for (var h = n(p), y = p; y >= p; ) {
      y = 0n;
      for (var A = 0; A < h; ++A) y = 2n * y + (t() < 0.5 ? 0n : 1n);
    }
    return s + y;
  }
}), Wi = "equalScalar", C1 = R(Wi, ["typed", "config"], (e) => {
  var { typed: r, config: a } = e;
  return r(Wi, { "number, number": function(i, t) {
    return vr(i, t, a.relTol, a.absTol);
  } });
}), Hi = "compare", E1 = R(Hi, ["typed", "config"], (e) => {
  var { typed: r, config: a } = e;
  return r(Hi, { "number, number": function(i, t) {
    return vr(i, t, a.relTol, a.absTol) ? 0 : i > t ? 1 : -1;
  } });
}), Zi = "compareNatural", F1 = ["typed", "compare"], B1 = R(Zi, F1, (e) => {
  var { typed: r, compare: a } = e, n = a.signatures["boolean,boolean"];
  return r(Zi, { "any, any": i });
  function i(c, s) {
    var l = Ze(c), m = Ze(s), p;
    if ((l === "number" || l === "BigNumber" || l === "Fraction") && (m === "number" || m === "BigNumber" || m === "Fraction")) return p = a(c, s), p.toString() !== "0" ? p > 0 ? 1 : -1 : at(l, m);
    var h = ["Array", "DenseMatrix", "SparseMatrix"];
    if (h.includes(l) || h.includes(m)) return p = t(i, c, s), p !== 0 ? p : at(l, m);
    if (l !== m) return at(l, m);
    if (l === "Complex") return S1(c, s);
    if (l === "Unit") return c.equalBase(s) ? i(c.value, s.value) : o(i, c.formatUnits(), s.formatUnits());
    if (l === "boolean") return n(c, s);
    if (l === "string") return at(c, s);
    if (l === "Object") return u(i, c, s);
    if (l === "null" || l === "undefined") return 0;
    throw new TypeError('Unsupported type of value "' + l + '"');
  }
  function t(c, s, l) {
    return Mt(s) && Mt(l) ? o(c, s.toJSON().values, l.toJSON().values) : Mt(s) ? t(c, s.toArray(), l) : Mt(l) ? t(c, s, l.toArray()) : ea(s) ? t(c, s.toJSON().data, l) : ea(l) ? t(c, s, l.toJSON().data) : Array.isArray(s) ? Array.isArray(l) ? o(c, s, l) : t(c, s, [l]) : t(c, [s], l);
  }
  function o(c, s, l) {
    for (var m = 0, p = Math.min(s.length, l.length); m < p; m++) {
      var h = c(s[m], l[m]);
      if (h !== 0) return h;
    }
    return s.length > l.length ? 1 : s.length < l.length ? -1 : 0;
  }
  function u(c, s, l) {
    var m = Object.keys(s), p = Object.keys(l);
    m.sort(at), p.sort(at);
    var h = o(c, m, p);
    if (h !== 0) return h;
    for (var y = 0; y < m.length; y++) {
      var A = c(s[m[y]], l[p[y]]);
      if (A !== 0) return A;
    }
    return 0;
  }
});
function S1(e, r) {
  return e.re > r.re ? 1 : e.re < r.re ? -1 : e.im > r.im ? 1 : e.im < r.im ? -1 : 0;
}
var Ji = "compareText";
iu.signature = "any, any";
var T1 = R(Ji, ["typed"], (e) => {
  var { typed: r } = e;
  return r(Ji, iu);
}), Vi = "equal", M1 = R(Vi, ["typed", "equalScalar"], (e) => {
  var { typed: r, equalScalar: a } = e;
  return r(Vi, { "any, any": function(i, t) {
    return i === null ? t === null : t === null ? i === null : i === void 0 ? t === void 0 : t === void 0 ? i === void 0 : a(i, t);
  } });
}), Xi = "equalText", O1 = ["typed", "compareText", "isZero"], $1 = R(Xi, O1, (e) => {
  var { typed: r, compareText: a, isZero: n } = e;
  return r(Xi, { "any, any": function(t, o) {
    return n(a(t, o));
  } });
}), Gi = "smaller", k1 = R(Gi, ["typed", "config"], (e) => {
  var { typed: r, config: a } = e;
  return r(Gi, { "number, number": function(i, t) {
    return i < t && !vr(i, t, a.relTol, a.absTol);
  } });
}), Qi = "smallerEq", q1 = R(Qi, ["typed", "config"], (e) => {
  var { typed: r, config: a } = e;
  return r(Qi, { "number, number": function(i, t) {
    return i <= t || vr(i, t, a.relTol, a.absTol);
  } });
}), Ki = "larger", P1 = R(Ki, ["typed", "config"], (e) => {
  var { typed: r, config: a } = e;
  return r(Ki, { "number, number": function(i, t) {
    return i > t && !vr(i, t, a.relTol, a.absTol);
  } });
}), Yi = "largerEq", I1 = R(Yi, ["typed", "config"], (e) => {
  var { typed: r, config: a } = e;
  return r(Yi, { "number, number": function(i, t) {
    return i >= t || vr(i, t, a.relTol, a.absTol);
  } });
}), eo = "deepEqual", _1 = ["typed", "equal"], R1 = R(eo, _1, (e) => {
  var { typed: r, equal: a } = e;
  return r(eo, { "any, any": function(t, o) {
    return n(t.valueOf(), o.valueOf());
  } });
  function n(i, t) {
    if (Array.isArray(i)) if (Array.isArray(t)) {
      var o = i.length;
      if (o !== t.length) return false;
      for (var u = 0; u < o; u++) if (!n(i[u], t[u])) return false;
      return true;
    } else return false;
    else return Array.isArray(t) ? false : a(i, t);
  }
}), ro = "unequal", j1 = R(ro, ["typed", "equalScalar"], (e) => {
  var { typed: r, equalScalar: a } = e;
  return r(ro, { "any, any": function(i, t) {
    return i === null ? t !== null : t === null ? i !== null : i === void 0 ? t !== void 0 : t === void 0 ? i !== void 0 : !a(i, t);
  } });
}), L1 = "erf", z1 = ["typed"], U1 = R(L1, z1, (e) => {
  var { typed: r } = e;
  return r("name", { number: function(o) {
    var u = Math.abs(o);
    return u >= Z1 ? _r(o) : u <= W1 ? _r(o) * a(u) : u <= 4 ? _r(o) * (1 - n(u)) : _r(o) * (1 - i(u));
  }, "Array | Matrix": r.referToSelf((t) => (o) => lr(o, t)) });
  function a(t) {
    var o = t * t, u = Nr[0][4] * o, c = o, s;
    for (s = 0; s < 3; s += 1) u = (u + Nr[0][s]) * o, c = (c + ot[0][s]) * o;
    return t * (u + Nr[0][3]) / (c + ot[0][3]);
  }
  function n(t) {
    var o = Nr[1][8] * t, u = t, c;
    for (c = 0; c < 7; c += 1) o = (o + Nr[1][c]) * t, u = (u + ot[1][c]) * t;
    var s = (o + Nr[1][7]) / (u + ot[1][7]), l = parseInt(t * 16) / 16, m = (t - l) * (t + l);
    return Math.exp(-l * l) * Math.exp(-m) * s;
  }
  function i(t) {
    var o = 1 / (t * t), u = Nr[2][5] * o, c = o, s;
    for (s = 0; s < 4; s += 1) u = (u + Nr[2][s]) * o, c = (c + ot[2][s]) * o;
    var l = o * (u + Nr[2][4]) / (c + ot[2][4]);
    l = (H1 - l) / t, o = parseInt(t * 16) / 16;
    var m = (t - o) * (t + o);
    return Math.exp(-o * o) * Math.exp(-m) * l;
  }
}), W1 = 0.46875, H1 = 0.5641895835477563, Nr = [[3.1611237438705655, 113.86415415105016, 377.485237685302, 3209.3775891384694, 0.18577770618460315], [0.5641884969886701, 8.883149794388377, 66.11919063714163, 298.6351381974001, 881.952221241769, 1712.0476126340707, 2051.0783778260716, 1230.3393547979972, 21531153547440383e-24], [0.30532663496123236, 0.36034489994980445, 0.12578172611122926, 0.016083785148742275, 6587491615298378e-19, 0.016315387137302097]], ot = [[23.601290952344122, 244.02463793444417, 1282.6165260773723, 2844.236833439171], [15.744926110709835, 117.6939508913125, 537.1811018620099, 1621.3895745666903, 3290.7992357334597, 4362.619090143247, 3439.3676741437216, 1230.3393548037495], [2.568520192289822, 1.8729528499234604, 0.5279051029514285, 0.06051834131244132, 0.0023352049762686918]], Z1 = Math.pow(2, 53), to = "zeta", J1 = ["typed", "config", "multiply", "pow", "divide", "factorial", "equal", "smallerEq", "isBounded", "isNegative", "gamma", "sin", "subtract", "add", "?Complex", "?BigNumber", "pi"], V1 = R(to, J1, (e) => {
  var { typed: r, config: a, multiply: n, pow: i, divide: t, factorial: o, equal: u, smallerEq: c, isBounded: s, isNegative: l, gamma: m, sin: p, subtract: h, add: y, Complex: A, BigNumber: E, pi: C } = e;
  return r(to, { number: (F) => N(F, ($) => $, () => 20), BigNumber: (F) => N(F, ($) => new E($), () => Math.abs(Math.log10(a.relTol))), Complex: d });
  function N(F, $, Z) {
    return u(F, 0) ? $(-0.5) : u(F, 1) ? $(NaN) : s(F) ? x(F, $, Z, (_) => _) : l(F) ? $(NaN) : $(1);
  }
  function d(F) {
    return F.re === 0 && F.im === 0 ? new A(-0.5) : F.re === 1 ? new A(NaN, NaN) : F.re === 1 / 0 && F.im === 0 ? new A(1) : F.im === 1 / 0 || F.re === -1 / 0 ? new A(NaN, NaN) : x(F, ($) => $, ($) => Math.round(1.3 * 15 + 0.9 * Math.abs($.im)), ($) => $.re);
  }
  function x(F, $, Z, _) {
    var q = Z(F);
    if (_(F) > -(q - 1) / 2) return w(F, $(q), $);
    var J = n(i(2, F), i($(C), h(F, 1)));
    return J = n(J, p(n(t($(C), 2), F))), J = n(J, m(h(1, F))), n(J, x(h(1, F), $, Z, _));
  }
  function g(F, $) {
    for (var Z = F, _ = F; c(_, $); _ = y(_, 1)) {
      var q = t(n(o(y($, h(_, 1))), i(4, _)), n(o(h($, _)), o(n(2, _))));
      Z = y(Z, q);
    }
    return n($, Z);
  }
  function w(F, $, Z) {
    for (var _ = t(1, n(g(Z(0), $), h(1, i(2, h(1, F))))), q = Z(0), J = Z(1); c(J, $); J = y(J, 1)) q = y(q, t(n((-1) ** (J - 1), g(J, $)), i(J, F)));
    return n(_, q);
  }
}), no = "mode", X1 = ["typed", "isNaN", "isNumeric"], G1 = R(no, X1, (e) => {
  var { typed: r, isNaN: a, isNumeric: n } = e;
  return r(no, { "Array | Matrix": i, "...": function(o) {
    return i(o);
  } });
  function i(t) {
    t = Ur(t.valueOf());
    var o = t.length;
    if (o === 0) throw new Error("Cannot calculate mode of an empty array");
    for (var u = {}, c = [], s = 0, l = 0; l < t.length; l++) {
      var m = t[l];
      if (n(m) && a(m)) throw new Error("Cannot calculate mode of an array containing NaN values");
      m in u || (u[m] = 0), u[m]++, u[m] === s ? c.push(m) : u[m] > s && (s = u[m], c = [m]);
    }
    return c;
  }
});
function Ke(e, r, a) {
  var n;
  return String(e).includes("Unexpected type") ? (n = arguments.length > 2 ? " (type: " + Ze(a) + ", value: " + JSON.stringify(a) + ")" : " (type: " + e.data.actual + ")", new TypeError("Cannot calculate " + r + ", unexpected type of argument" + n)) : String(e).includes("complex numbers") ? (n = arguments.length > 2 ? " (type: " + Ze(a) + ", value: " + JSON.stringify(a) + ")" : "", new TypeError("Cannot calculate " + r + ", no ordering relation is defined for complex numbers" + n)) : e;
}
var ao = "prod", Q1 = ["typed", "config", "multiplyScalar", "numeric"], K1 = R(ao, Q1, (e) => {
  var { typed: r, config: a, multiplyScalar: n, numeric: i } = e;
  return r(ao, { "Array | Matrix": t, "Array | Matrix, number | BigNumber": function(u, c) {
    throw new Error("prod(A, dim) is not yet supported");
  }, "...": function(u) {
    return t(u);
  } });
  function t(o) {
    var u;
    if (Wr(o, function(c) {
      try {
        u = u === void 0 ? c : n(u, c);
      } catch (s) {
        throw Ke(s, "prod", c);
      }
    }), typeof u == "string" && (u = i(u, Yr(u, a))), u === void 0) throw new Error("Cannot calculate prod of an empty array");
    return u;
  }
}), io = "max", Y1 = ["typed", "config", "numeric", "larger", "isNaN"], $u = R(io, Y1, (e) => {
  var { typed: r, config: a, numeric: n, larger: i, isNaN: t } = e;
  return r(io, { "Array | Matrix": u, "Array | Matrix, number | BigNumber": function(s, l) {
    return In(s, l.valueOf(), o);
  }, "...": function(s) {
    if (gt(s)) throw new TypeError("Scalar values expected in function max");
    return u(s);
  } });
  function o(c, s) {
    try {
      return i(c, s) ? c : s;
    } catch (l) {
      throw Ke(l, "max", s);
    }
  }
  function u(c) {
    var s;
    if (Wr(c, function(l) {
      try {
        (t(l) || s === void 0 || i(l, s)) && (s = l);
      } catch (m) {
        throw Ke(m, "max", l);
      }
    }), s === void 0) throw new Error("Cannot calculate max of an empty array");
    return typeof s == "string" && (s = n(s, Yr(s, a))), s;
  }
}), oo = "min", ey = ["typed", "config", "numeric", "smaller", "isNaN"], ku = R(oo, ey, (e) => {
  var { typed: r, config: a, numeric: n, smaller: i, isNaN: t } = e;
  return r(oo, { "Array | Matrix": u, "Array | Matrix, number | BigNumber": function(s, l) {
    return In(s, l.valueOf(), o);
  }, "...": function(s) {
    if (gt(s)) throw new TypeError("Scalar values expected in function min");
    return u(s);
  } });
  function o(c, s) {
    try {
      return i(c, s) ? c : s;
    } catch (l) {
      throw Ke(l, "min", s);
    }
  }
  function u(c) {
    var s;
    if (Wr(c, function(l) {
      try {
        (t(l) || s === void 0 || i(l, s)) && (s = l);
      } catch (m) {
        throw Ke(m, "min", l);
      }
    }), s === void 0) throw new Error("Cannot calculate min of an empty array");
    return typeof s == "string" && (s = n(s, Yr(s, a))), s;
  }
}), so = "sum", ry = ["typed", "config", "add", "numeric"], qu = R(so, ry, (e) => {
  var { typed: r, config: a, add: n, numeric: i } = e;
  return r(so, { "Array | Matrix": t, "Array | Matrix, number | BigNumber": o, "...": function(c) {
    if (gt(c)) throw new TypeError("Scalar values expected in function sum");
    return t(c);
  } });
  function t(u) {
    var c;
    return Wr(u, function(s) {
      try {
        c = c === void 0 ? s : n(c, s);
      } catch (l) {
        throw Ke(l, "sum", s);
      }
    }), c === void 0 && (c = i(0, a.number)), typeof c == "string" && (c = i(c, Yr(c, a))), c;
  }
  function o(u, c) {
    try {
      var s = In(u, c, n);
      return s;
    } catch (l) {
      throw Ke(l, "sum");
    }
  }
}), dn = "cumsum", ty = ["typed", "add", "unaryPlus"], Pu = R(dn, ty, (e) => {
  var { typed: r, add: a, unaryPlus: n } = e;
  return r(dn, { Array: i, Matrix: function(s) {
    return s.create(i(s.valueOf(), s.datatype()));
  }, "Array, number | BigNumber": o, "Matrix, number | BigNumber": function(s, l) {
    return s.create(o(s.valueOf(), l), s.datatype());
  }, "...": function(s) {
    if (gt(s)) throw new TypeError("All values expected to be scalar in function cumsum");
    return i(s);
  } });
  function i(c) {
    try {
      return t(c);
    } catch (s) {
      throw Ke(s, dn);
    }
  }
  function t(c) {
    if (c.length === 0) return [];
    for (var s = [n(c[0])], l = 1; l < c.length; ++l) s.push(a(s[l - 1], c[l]));
    return s;
  }
  function o(c, s) {
    var l = tr(c);
    if (s < 0 || s >= l.length) throw new br(s, l.length);
    try {
      return u(c, s);
    } catch (m) {
      throw Ke(m, dn);
    }
  }
  function u(c, s) {
    var l, m, p;
    if (s <= 0) {
      var h = c[0][0];
      if (Array.isArray(h)) {
        for (p = Nu(c), m = [], l = 0; l < p.length; l++) m[l] = u(p[l], s - 1);
        return m;
      } else return t(c);
    } else {
      for (m = [], l = 0; l < c.length; l++) m[l] = u(c[l], s - 1);
      return m;
    }
  }
}), uo = "mean", ny = ["typed", "add", "divide"], Iu = R(uo, ny, (e) => {
  var { typed: r, add: a, divide: n } = e;
  return r(uo, { "Array | Matrix": t, "Array | Matrix, number | BigNumber": i, "...": function(u) {
    if (gt(u)) throw new TypeError("Scalar values expected in function mean");
    return t(u);
  } });
  function i(o, u) {
    try {
      var c = In(o, u, a), s = Array.isArray(o) ? tr(o) : o.size();
      return n(c, s[u]);
    } catch (l) {
      throw Ke(l, "mean");
    }
  }
  function t(o) {
    var u, c = 0;
    if (Wr(o, function(s) {
      try {
        u = u === void 0 ? s : a(u, s), c++;
      } catch (l) {
        throw Ke(l, "mean", s);
      }
    }), c === 0) throw new Error("Cannot calculate the mean of an empty array");
    return n(u, c);
  }
}), co = "median", ay = ["typed", "add", "divide", "compare", "partitionSelect"], iy = R(co, ay, (e) => {
  var { typed: r, add: a, divide: n, compare: i, partitionSelect: t } = e;
  function o(s) {
    try {
      s = Ur(s.valueOf());
      var l = s.length;
      if (l === 0) throw new Error("Cannot calculate median of an empty array");
      if (l % 2 === 0) {
        for (var m = l / 2 - 1, p = t(s, m + 1), h = s[m], y = 0; y < m; ++y) i(s[y], h) > 0 && (h = s[y]);
        return c(h, p);
      } else {
        var A = t(s, (l - 1) / 2);
        return u(A);
      }
    } catch (E) {
      throw Ke(E, "median");
    }
  }
  var u = r({ "number | BigNumber | Complex | Unit": function(l) {
    return l;
  } }), c = r({ "number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit": function(l, m) {
    return n(a(l, m), 2);
  } });
  return r(co, { "Array | Matrix": o, "Array | Matrix, number | BigNumber": function(l, m) {
    throw new Error("median(A, dim) is not yet supported");
  }, "...": function(l) {
    if (gt(l)) throw new TypeError("Scalar values expected in function median");
    return o(l);
  } });
}), lo = "mad", oy = ["typed", "abs", "map", "median", "subtract"], sy = R(lo, oy, (e) => {
  var { typed: r, abs: a, map: n, median: i, subtract: t } = e;
  return r(lo, { "Array | Matrix": o, "...": function(c) {
    return o(c);
  } });
  function o(u) {
    if (u = Ur(u.valueOf()), u.length === 0) throw new Error("Cannot calculate median absolute deviation (mad) of an empty array");
    try {
      var c = i(u);
      return i(n(u, function(s) {
        return a(t(s, c));
      }));
    } catch (s) {
      throw s instanceof TypeError && s.message.includes("median") ? new TypeError(s.message.replace("median", "mad")) : Ke(s, "mad");
    }
  }
}), Yn = "unbiased", fo = "variance", uy = ["typed", "add", "subtract", "multiply", "divide", "mapSlices", "isNaN"], _u = R(fo, uy, (e) => {
  var { typed: r, add: a, subtract: n, multiply: i, divide: t, mapSlices: o, isNaN: u } = e;
  return r(fo, { "Array | Matrix": function(m) {
    return c(m, Yn);
  }, "Array | Matrix, string": c, "Array | Matrix, number | BigNumber": function(m, p) {
    return s(m, p, Yn);
  }, "Array | Matrix, number | BigNumber, string": s, "...": function(m) {
    return c(m, Yn);
  } });
  function c(l, m) {
    var p, h = 0;
    if (l.length === 0) throw new SyntaxError("Function variance requires one or more parameters (0 provided)");
    if (Wr(l, function(E) {
      try {
        p = p === void 0 ? E : a(p, E), h++;
      } catch (C) {
        throw Ke(C, "variance", E);
      }
    }), h === 0) throw new Error("Cannot calculate variance of an empty array");
    var y = t(p, h);
    if (p = void 0, Wr(l, function(E) {
      var C = n(E, y);
      p = p === void 0 ? i(C, C) : a(p, i(C, C));
    }), u(p)) return p;
    switch (m) {
      case "uncorrected":
        return t(p, h);
      case "biased":
        return t(p, h + 1);
      case "unbiased": {
        var A = He(p) ? p.mul(0) : 0;
        return h === 1 ? A : t(p, h - 1);
      }
      default:
        throw new Error('Unknown normalization "' + m + '". Choose "unbiased" (default), "uncorrected", or "biased".');
    }
  }
  function s(l, m, p) {
    try {
      if (l.length === 0) throw new SyntaxError("Function variance requires one or more parameters (0 provided)");
      return o(l, m, (h) => c(h, p));
    } catch (h) {
      throw Ke(h, "variance");
    }
  }
}), mo = "quantileSeq", cy = ["typed", "?bignumber", "add", "subtract", "divide", "multiply", "partitionSelect", "compare", "isInteger", "smaller", "smallerEq", "larger", "mapSlices"], ly = R(mo, cy, (e) => {
  var { typed: r, bignumber: a, add: n, subtract: i, divide: t, multiply: o, partitionSelect: u, compare: c, isInteger: s, smaller: l, smallerEq: m, larger: p, mapSlices: h } = e;
  return r(mo, { "Array | Matrix, number | BigNumber": (N, d) => A(N, d, false), "Array | Matrix, number | BigNumber, number": (N, d, x) => y(N, d, false, x, A), "Array | Matrix, number | BigNumber, boolean": A, "Array | Matrix, number | BigNumber, boolean, number": (N, d, x, g) => y(N, d, x, g, A), "Array | Matrix, Array | Matrix": (N, d) => E(N, d, false), "Array | Matrix, Array | Matrix, number": (N, d, x) => y(N, d, false, x, E), "Array | Matrix, Array | Matrix, boolean": E, "Array | Matrix, Array | Matrix, boolean, number": (N, d, x, g) => y(N, d, x, g, E) });
  function y(N, d, x, g, w) {
    return h(N, g, (F) => w(F, d, x));
  }
  function A(N, d, x) {
    var g, w = N.valueOf();
    if (l(d, 0)) throw new Error("N/prob must be non-negative");
    if (m(d, 1)) return Pe(d) ? C(w, d, x) : a(C(w, d, x));
    if (p(d, 1)) {
      if (!s(d)) throw new Error("N must be a positive integer");
      if (p(d, 4294967295)) throw new Error("N must be less than or equal to 2^32-1, as that is the maximum length of an Array");
      var F = n(d, 1);
      g = [];
      for (var $ = 0; l($, d); $++) {
        var Z = t($ + 1, F);
        g.push(C(w, Z, x));
      }
      return Pe(d) ? g : a(g);
    }
  }
  function E(N, d, x) {
    for (var g = N.valueOf(), w = d.valueOf(), F = [], $ = 0; $ < w.length; ++$) F.push(C(g, w[$], x));
    return F;
  }
  function C(N, d, x) {
    var g = Ur(N), w = g.length;
    if (w === 0) throw new Error("Cannot calculate quantile of an empty sequence");
    var F = Pe(d) ? d * (w - 1) : d.times(w - 1), $ = Pe(d) ? Math.floor(F) : F.floor().toNumber(), Z = Pe(d) ? F % 1 : F.minus($);
    if (s(F)) return x ? g[F] : u(g, Pe(d) ? F : F.valueOf());
    var _, q;
    if (x) _ = g[$], q = g[$ + 1];
    else {
      q = u(g, $ + 1), _ = g[$];
      for (var J = 0; J < $; ++J) c(g[J], _) > 0 && (_ = g[J]);
    }
    return n(o(_, i(1, Z)), o(q, Z));
  }
}), po = "std", fy = ["typed", "map", "sqrt", "variance"], Ru = R(po, fy, (e) => {
  var { typed: r, map: a, sqrt: n, variance: i } = e;
  return r(po, { "Array | Matrix": t, "Array | Matrix, string": t, "Array | Matrix, number | BigNumber": t, "Array | Matrix, number | BigNumber, string": t, "...": function(u) {
    return t(u);
  } });
  function t(o, u) {
    if (o.length === 0) throw new SyntaxError("Function std requires one or more parameters (0 provided)");
    try {
      var c = i.apply(null, arguments);
      return ft(c) ? a(c, n) : n(c);
    } catch (s) {
      throw s instanceof TypeError && s.message.includes(" variance") ? new TypeError(s.message.replace(" variance", " std")) : s;
    }
  }
}), ho = "corr", my = ["typed", "matrix", "mean", "sqrt", "sum", "add", "subtract", "multiply", "pow", "divide"], py = R(ho, my, (e) => {
  var { typed: r, matrix: a, sqrt: n, sum: i, add: t, subtract: o, multiply: u, pow: c, divide: s } = e;
  return r(ho, { "Array, Array": function(h, y) {
    return l(h, y);
  }, "Matrix, Matrix": function(h, y) {
    var A = l(h.toArray(), y.toArray());
    return Array.isArray(A) ? a(A) : A;
  } });
  function l(p, h) {
    var y = [];
    if (Array.isArray(p[0]) && Array.isArray(h[0])) {
      if (p.length !== h.length) throw new SyntaxError("Dimension mismatch. Array A and B must have the same length.");
      for (var A = 0; A < p.length; A++) {
        if (p[A].length !== h[A].length) throw new SyntaxError("Dimension mismatch. Array A and B must have the same number of elements.");
        y.push(m(p[A], h[A]));
      }
      return y;
    } else {
      if (p.length !== h.length) throw new SyntaxError("Dimension mismatch. Array A and B must have the same number of elements.");
      return m(p, h);
    }
  }
  function m(p, h) {
    var y = p.length, A = i(p), E = i(h), C = p.reduce((w, F, $) => t(w, u(F, h[$])), 0), N = i(p.map((w) => c(w, 2))), d = i(h.map((w) => c(w, 2))), x = o(u(y, C), u(A, E)), g = n(u(o(u(y, N), c(A, 2)), o(u(y, d), c(E, 2))));
    return s(x, g);
  }
}), vo = "format", dy = ["typed"], hy = R(vo, dy, (e) => {
  var { typed: r } = e;
  return r(vo, { any: Sr, "any, Object | function | number | BigNumber": Sr });
}), vy = /\$([\w.]+)/g, go = "print", gy = ["typed"], yy = R(go, gy, (e) => {
  var { typed: r } = e;
  return r(go, { "string, Object | Array": yo, "string, Object | Array, number | Object": yo });
});
function yo(e, r, a) {
  return e.replace(vy, function(n, i) {
    var t = i.split("."), o = r[t.shift()];
    for (o !== void 0 && o.isMatrix && (o = o.toArray()); t.length && o !== void 0; ) {
      var u = t.shift();
      o = u ? o[u] : o + ".";
    }
    return o !== void 0 ? Qr(o) ? o : Sr(o, a) : n;
  });
}
function Do(e, r) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function Dy(e) {
  for (var r = 1; r < arguments.length; r++) {
    var a = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Do(Object(a), true).forEach(function(n) {
      Ue(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Do(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
var by = "mapSlices", xy = ["typed", "isInteger"], wy = R(by, xy, (e) => {
  var { typed: r, isInteger: a } = e, n = la({ typed: r, isInteger: a });
  return r("mapSlices", { "...any": function(t) {
    var o = t[1];
    Pe(o) ? t[1] = o - 1 : He(o) && (t[1] = o.minus(1));
    try {
      return n.apply(null, t);
    } catch (u) {
      throw xr(u);
    }
  } });
}, Dy({ isTransformFunction: true }, la.meta));
function Ea(e, r, a) {
  var n = e.filter(function(c) {
    return ze(c) && !(c.name in r) && !a.has(c.name);
  })[0];
  if (!n) throw new Error('No undefined variable found in inline expression "' + e + '"');
  var i = n.name, t = /* @__PURE__ */ new Map(), o = new qo(a, t, /* @__PURE__ */ new Set([i])), u = e.compile();
  return function(s) {
    return t.set(i, s), u.evaluate(o);
  };
}
var Ny = "transformCallback", Ay = ["typed"], Fa = R(Ny, Ay, (e) => {
  var { typed: r } = e;
  return function(n, i) {
    return r.isTypedFunction(n) ? a(n, i) : bo(n, n.length, i);
  };
  function a(n, i) {
    var t = Object.fromEntries(Object.entries(n.signatures).map((o) => {
      var [u, c] = o, s = u.split(",").length;
      return r.isTypedFunction(c) ? [u, a(c, i)] : [u, bo(c, s, i)];
    }));
    return typeof n.name == "string" ? r(n.name, t) : r(t);
  }
});
function bo(e, r, a) {
  return r === a ? e : r === a + 1 ? function() {
    for (var n = arguments.length, i = new Array(n), t = 0; t < n; t++) i[t] = arguments[t];
    var o = i.slice(0, a), u = xo(i[a]);
    return e(...o, u);
  } : r > a + 1 ? function() {
    for (var n = arguments.length, i = new Array(n), t = 0; t < n; t++) i[t] = arguments[t];
    var o = i.slice(0, a), u = xo(i[a]), c = i.slice(a + 1);
    return e(...o, u, ...c);
  } : e;
}
function xo(e) {
  return e.map((r) => r + 1);
}
var Cy = "filter", Ey = ["typed"], Fy = R(Cy, Ey, (e) => {
  var { typed: r } = e;
  function a(i, t, o) {
    var u = Bu({ typed: r }), c = Fa({ typed: r });
    if (i.length === 0) return u();
    var s = i[0];
    if (i.length === 1) return u(s);
    var l = i.length - 1, m = i[l];
    return s && (s = n(s, o)), m && (ze(m) || It(m) ? m = n(m, o) : m = Ea(m, t, o)), u(s, c(m, l));
  }
  a.rawArgs = true;
  function n(i, t) {
    return i.compile().evaluate(t);
  }
  return a;
}, { isTransformFunction: true }), By = "forEach", Sy = ["typed"], Ty = R(By, Sy, (e) => {
  var { typed: r } = e, a = Su({ typed: r }), n = Fa({ typed: r });
  function i(o, u, c) {
    if (o.length === 0) return a();
    var s = o[0];
    if (o.length === 1) return a(s);
    var l = o.length - 1, m = o[l];
    return s && (s = t(s, c)), m && (ze(m) || It(m) ? m = t(m, c) : m = Ea(m, u, c)), a(s, n(m, l));
  }
  i.rawArgs = true;
  function t(o, u) {
    return o.compile().evaluate(u);
  }
  return i;
}, { isTransformFunction: true }), My = "map", Oy = ["typed"], $y = R(My, Oy, (e) => {
  var { typed: r } = e, a = Tu({ typed: r }), n = Fa({ typed: r });
  function i(t, o, u) {
    if (t.length === 0) return a();
    if (t.length === 1) return a(t[0]);
    var c = t.length - 1, s = t.slice(0, c), l = t[c];
    return s = s.map((p) => m(p, u)), l && (ze(l) || It(l) ? l = m(l, u) : l = Ea(l, o, u)), a(...s, n(l, c));
    function m(p, h) {
      return p.compile().evaluate(h);
    }
  }
  return i.rawArgs = true, i;
}, { isTransformFunction: true });
function ky(e) {
  return Pe(e) ? e - 1 : He(e) ? e.minus(1) : e;
}
function qy(e) {
  return Pe(e) || He(e);
}
function yt(e) {
  if (e.length === 2 && ft(e[0])) {
    e = e.slice();
    var r = e[1];
    qy(r) && (e[1] = ky(r));
  }
  return e;
}
var Py = "max", Iy = ["typed", "config", "numeric", "larger", "isNaN"], _y = R(Py, Iy, (e) => {
  var { typed: r, config: a, numeric: n, larger: i, isNaN: t } = e, o = $u({ typed: r, config: a, numeric: n, larger: i, isNaN: t });
  return r("max", { "...any": function(c) {
    c = yt(c);
    try {
      return o.apply(null, c);
    } catch (s) {
      throw xr(s);
    }
  } });
}, { isTransformFunction: true }), Ry = "mean", jy = ["typed", "add", "divide"], Ly = R(Ry, jy, (e) => {
  var { typed: r, add: a, divide: n } = e, i = Iu({ typed: r, add: a, divide: n });
  return r("mean", { "...any": function(o) {
    o = yt(o);
    try {
      return i.apply(null, o);
    } catch (u) {
      throw xr(u);
    }
  } });
}, { isTransformFunction: true }), zy = "min", Uy = ["typed", "config", "numeric", "smaller", "isNaN"], Wy = R(zy, Uy, (e) => {
  var { typed: r, config: a, numeric: n, smaller: i, isNaN: t } = e, o = ku({ typed: r, config: a, numeric: n, smaller: i, isNaN: t });
  return r("min", { "...any": function(c) {
    c = yt(c);
    try {
      return o.apply(null, c);
    } catch (s) {
      throw xr(s);
    }
  } });
}, { isTransformFunction: true }), Hy = "range", Zy = ["typed", "config", "?matrix", "?bignumber", "equal", "smaller", "smallerEq", "larger", "largerEq", "add", "isZero", "isPositive"], Jy = R(Hy, Zy, (e) => {
  var { typed: r, config: a, matrix: n, bignumber: i, equal: t, smaller: o, smallerEq: u, larger: c, largerEq: s, add: l, isZero: m, isPositive: p } = e, h = Mu({ typed: r, config: a, matrix: n, bignumber: i, equal: t, smaller: o, smallerEq: u, larger: c, largerEq: s, add: l, isZero: m, isPositive: p });
  return r("range", { "...any": function(A) {
    var E = A.length - 1, C = A[E];
    return typeof C != "boolean" && A.push(true), h.apply(null, A);
  } });
}, { isTransformFunction: true }), Vy = "std", Xy = ["typed", "map", "sqrt", "variance"], Gy = R(Vy, Xy, (e) => {
  var { typed: r, map: a, sqrt: n, variance: i } = e, t = Ru({ typed: r, map: a, sqrt: n, variance: i });
  return r("std", { "...any": function(u) {
    u = yt(u);
    try {
      return t.apply(null, u);
    } catch (c) {
      throw xr(c);
    }
  } });
}, { isTransformFunction: true }), wo = "sum", Qy = ["typed", "config", "add", "numeric"], Ky = R(wo, Qy, (e) => {
  var { typed: r, config: a, add: n, numeric: i } = e, t = qu({ typed: r, config: a, add: n, numeric: i });
  return r(wo, { "...any": function(u) {
    u = yt(u);
    try {
      return t.apply(null, u);
    } catch (c) {
      throw xr(c);
    }
  } });
}, { isTransformFunction: true }), No = "cumsum", Yy = ["typed", "add", "unaryPlus"], eD = R(No, Yy, (e) => {
  var { typed: r, add: a, unaryPlus: n } = e, i = Pu({ typed: r, add: a, unaryPlus: n });
  return r(No, { "...any": function(o) {
    if (o.length === 2 && ft(o[0])) {
      var u = o[1];
      Pe(u) ? o[1] = u - 1 : He(u) && (o[1] = u.minus(1));
    }
    try {
      return i.apply(null, o);
    } catch (c) {
      throw xr(c);
    }
  } });
}, { isTransformFunction: true }), Ao = "variance", rD = ["typed", "add", "subtract", "multiply", "divide", "mapSlices", "isNaN"], tD = R(Ao, rD, (e) => {
  var { typed: r, add: a, subtract: n, multiply: i, divide: t, mapSlices: o, isNaN: u } = e, c = _u({ typed: r, add: a, subtract: n, multiply: i, divide: t, mapSlices: o, isNaN: u });
  return r(Ao, { "...any": function(l) {
    l = yt(l);
    try {
      return c.apply(null, l);
    } catch (m) {
      throw xr(m);
    }
  } });
}, { isTransformFunction: true }), Co = "clone", nD = ["typed"], aD = R(Co, nD, (e) => {
  var { typed: r } = e;
  return r(Co, { any: Dn });
}), Eo = "isNumeric", iD = ["typed"], oD = R(Eo, iD, (e) => {
  var { typed: r } = e;
  return r(Eo, { "number | BigNumber | bigint | Fraction | boolean": () => true, "Complex | Unit | string | null | undefined | Node": () => false, "Array | Matrix": r.referToSelf((a) => (n) => lr(n, a)) });
}), Fo = "hasNumericValue", sD = ["typed", "isNumeric"], uD = R(Fo, sD, (e) => {
  var { typed: r, isNumeric: a } = e;
  return r(Fo, { boolean: () => true, string: function(i) {
    return i.trim().length > 0 && !isNaN(Number(i));
  }, any: function(i) {
    return a(i);
  } });
}), Bo = "isBounded", cD = ["typed"], lD = R(Bo, cD, (e) => {
  var { typed: r } = e;
  return r(Bo, { number: (a) => Number.isFinite(a), "BigNumber | Complex": (a) => a.isFinite(), "bigint | Fraction": () => true, "null | undefined": () => false, Unit: r.referToSelf((a) => (n) => a(n.value)), "Array | Matrix": r.referToSelf((a) => (n) => (Array.isArray(n) || (n = n.valueOf()), n.every((i) => a(i)))) });
}), So = "isFinite", fD = ["typed", "isBounded", "map"], mD = R(So, fD, (e) => {
  var { typed: r, isBounded: a, map: n } = e;
  return r(So, { "Array | Matrix": (i) => n(i, a), any: (i) => a(i) });
}), To = "typeOf", pD = ["typed"], dD = R(To, pD, (e) => {
  var { typed: r } = e;
  return r(To, { any: Ze });
}), Mo = "isPrime", hD = ["typed"], vD = R(Mo, hD, (e) => {
  var { typed: r } = e;
  return r(Mo, { number: function(n) {
    if (n <= 3) return n > 1;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (var i = 5; i * i <= n; i += 6) if (n % i === 0 || n % (i + 2) === 0) return false;
    return true;
  }, bigint: function(n) {
    if (n <= 3n) return n > 1n;
    if (n % 2n === 0n || n % 3n === 0n) return false;
    for (var i = 5n; i * i <= n; i += 6n) if (n % i === 0n || n % (i + 2n) === 0n) return false;
    return true;
  }, BigNumber: function(n) {
    if (n.lte(3)) return n.gt(1);
    if (n.mod(2).eq(0) || n.mod(3).eq(0)) return false;
    if (n.lt(Math.pow(2, 32))) {
      for (var i = n.toNumber(), t = 5; t * t <= i; t += 6) if (i % t === 0 || i % (t + 2) === 0) return false;
      return true;
    }
    function o(N, d, x) {
      for (var g = 1; !d.eq(0); ) d.mod(2).eq(0) ? (d = d.div(2), N = N.mul(N).mod(x)) : (d = d.sub(1), g = N.mul(g).mod(x));
      return g;
    }
    var u = n.constructor.clone({ precision: n.toFixed(0).length * 2 });
    n = new u(n);
    for (var c = 0, s = n.sub(1); s.mod(2).eq(0); ) s = s.div(2), c += 1;
    var l = null;
    if (n.lt("3317044064679887385961981")) l = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41].filter((N) => N < n);
    else {
      var m = Math.min(n.toNumber() - 2, Math.floor(2 * Math.pow(n.toFixed(0).length * Math.log(10), 2)));
      l = [];
      for (var p = 2; p <= m; p += 1) l.push(m);
    }
    for (var h = 0; h < l.length; h += 1) {
      var y = l[h], A = o(n.sub(n).add(y), s, n);
      if (!A.eq(1)) {
        for (var E = 0, C = A; !C.eq(n.sub(1)); E += 1, C = C.mul(C).mod(n)) if (E === c - 1) return false;
      }
    }
    return true;
  }, "Array | Matrix": r.referToSelf((a) => (n) => lr(n, a)) });
}), gD = "numeric", yD = ["number", "?bignumber", "?fraction"], DD = R(gD, yD, (e) => {
  var { number: r, bignumber: a, fraction: n } = e, i = { string: true, number: true, BigNumber: true, Fraction: true }, t = { number: (o) => r(o), BigNumber: a ? (o) => a(o) : wa, bigint: (o) => BigInt(o), Fraction: n ? (o) => n(o) : Ys };
  return function(u) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "number", s = arguments.length > 2 ? arguments[2] : void 0;
    if (s !== void 0) throw new SyntaxError("numeric() takes one or two arguments");
    var l = Ze(u);
    if (!(l in i)) throw new TypeError("Cannot convert " + u + ' of type "' + l + '"; valid input types are ' + Object.keys(i).join(", "));
    if (!(c in t)) throw new TypeError("Cannot convert " + u + ' to type "' + c + '"; valid output types are ' + Object.keys(t).join(", "));
    return c === l ? u : t[c](u);
  };
}), bD = "reviver", xD = ["classes"], wD = R(bD, xD, (e) => {
  var { classes: r } = e;
  return function(n, i) {
    var t = r[i && i.mathjs];
    return t && typeof t.fromJSON == "function" ? t.fromJSON(i) : i;
  };
}), ND = "replacer", AD = [], CD = R(ND, AD, () => function(r, a) {
  return typeof a == "number" && (!Number.isFinite(a) || isNaN(a)) ? { mathjs: "number", value: String(a) } : typeof a == "bigint" ? { mathjs: "bigint", value: String(a) } : a;
}), ED = se("unaryMinus", Jo), FD = se("unaryPlus", Vo), BD = se("abs", Zo), SD = se("addScalar", ha), TD = se("subtractScalar", va), MD = se("cbrt", Xo), OD = se("cube", Go), $D = se("exp", Qo), kD = se("expm1", Ko), qD = se("gcd", Yo), PD = se("lcm", es), ID = se("log10", rs), _D = se("log2", ts), RD = se("mod", as), jD = se("multiplyScalar", ga), LD = se("multiply", ga), zD = Ba("nthRoot", Dl), UD = se("sign", is), WD = se("sqrt", os), HD = se("square", ss), ZD = se("subtract", va), JD = se("xgcd", us), VD = se("divideScalar", ya), XD = se("pow", cs), GD = Ba("round", bl), QD = Ba("log", yl), KD = se("log1p", ns), YD = se("add", ha), eb = se("norm", ls), rb = se("divide", ya), tb = se("bitAnd", fs), nb = se("bitNot", ms), ab = se("bitOr", ps), ib = se("bitXor", ds), ob = se("leftShift", hs), sb = se("rightArithShift", vs), ub = se("rightLogShift", gs), cb = se("and", ws), lb = se("not", Ds), fb = se("or", bs), mb = se("xor", xs), pb = R("index", [], () => ql), db = R("matrix", [], () => eu), hb = R("subset", [], () => ru), vb = se("combinations", ys), gb = se("gamma", ba), yb = se("lgamma", xa), Db = se("acos", Ns), bb = se("acosh", As), xb = se("acot", Cs), wb = se("acoth", Es), Nb = se("acsc", Fs), Ab = se("acsch", Bs), Cb = se("asec", Ss), Eb = se("asech", Ts), Fb = se("asin", Ms), Bb = se("asinh", Os), Sb = se("atan", $s), Tb = se("atan2", ks), Mb = se("atanh", qs), Ob = se("cos", Ps), $b = se("cosh", Is), kb = se("cot", _s), qb = se("coth", Rs), Pb = se("csc", js), Ib = se("csch", Ls), _b = se("sec", zs), Rb = se("sech", Us), jb = se("sin", Ws), Lb = se("sinh", Hs), zb = se("tan", Zs), Ub = se("tanh", Js), Wb = R("subset", [], () => ru, { isTransformFunction: true }), Hb = se("isInteger", Vs), Zb = se("isNegative", Xs), Jb = se("isPositive", Gs), Vb = se("isZero", Qs), Xb = se("isNaN", Ks);
function se(e, r) {
  return R(e, ["typed"], (a) => {
    var { typed: n } = a;
    return n(r);
  });
}
function Ba(e, r) {
  return R(e, ["typed"], (a) => {
    var { typed: n } = a;
    return n({ number: r, "number,number": r });
  });
}
var Oo = Og({ config: be }), Gb = Eg({}), Qb = pb({}), Kb = Bg({ config: be }), Yb = qg({ config: be }), ex = Ig({ config: be }), et = db({}), rx = Sg({ config: be }), tx = Fg({}), nx = $g({ config: be }), ax = Wl({}), ju = CD({}), Lu = Ll({}), ix = _g({ config: be }), Sa = hb({}), ox = Mg({ config: be }), T = Il({}), Ta = FD({ typed: T }), sx = jg({}), ux = mb({ typed: T }), Ma = BD({ typed: T }), cx = Db({ typed: T }), lx = xb({ typed: T }), fx = Nb({ typed: T }), Le = YD({ typed: T }), mx = cb({ typed: T }), px = Cb({ typed: T }), dx = Fb({ typed: T }), hx = Sb({ typed: T }), vx = Mb({ typed: T }), gx = Vg({ typed: T }), yx = nb({ typed: T }), Dx = ib({ typed: T }), bx = Kg({ typed: T }), xx = MD({ typed: T }), jn = vb({ typed: T }), Rt = E1({ config: be, typed: T }), zu = T1({ typed: T }), wx = Ob({ typed: T }), Nx = kb({ typed: T }), Ax = Pb({ typed: T }), Cx = OD({ typed: T }), fr = rb({ typed: T }), Oa = C1({ config: be, typed: T }), Ex = U1({ typed: T }), Fx = $D({ typed: T }), Bx = Bu({ typed: T }), Sx = Su({ typed: T }), Tx = hy({ typed: T }), $a = gb({ typed: T }), jt = lD({ typed: T }), wr = Hb({ typed: T }), Dt = Zb({ typed: T }), bt = Jb({ typed: T }), rt = Vb({ typed: T }), Mx = Pg({ config: be }), ka = I1({ config: be, typed: T }), Ox = ob({ typed: T }), $x = QD({ typed: T }), kx = KD({ typed: T }), Lt = Tu({ typed: T }), Uu = Iu({ add: Le, divide: fr, typed: T }), qx = RD({ typed: T }), Mr = LD({ typed: T }), Px = lb({ typed: T }), Ln = Hg({ typed: T }), Ix = fb({ typed: T }), ma = Tg({ config: be }), xt = XD({ typed: T }), _x = w1({ config: be, typed: T }), Rx = ub({ typed: T }), jx = Rg({ config: be }), Lx = Rb({ typed: T }), Wu = jb({ typed: T }), Hu = o1({ typed: T }), zt = q1({ config: be, typed: T }), zx = HD({ typed: T }), Ux = Gg({ typed: T }), Or = ZD({ typed: T }), Wx = Ub({ typed: T }), Hx = dD({ typed: T }), Zx = j1({ equalScalar: Oa, typed: T }), Jx = JD({ typed: T }), Vx = wb({ typed: T }), wt = SD({ typed: T }), Xx = Eb({ typed: T }), Gx = l1({ config: be, isInteger: wr, number: Ln, typed: T }), Qx = ab({ typed: T }), Kx = m1({ typed: T }), Yx = $b({ typed: T }), e2 = Ib({ typed: T }), zn = VD({ typed: T }), r2 = $1({ compareText: zu, isZero: rt, typed: T }), t2 = kD({ typed: T }), Er = Xb({ typed: T }), n2 = vD({ typed: T }), Hr = P1({ config: be, typed: T }), a2 = yb({ typed: T }), Zu = _D({ typed: T }), Un = la({ isInteger: wr, typed: T }), Ut = jD({ typed: T }), i2 = zD({ typed: T }), o2 = x1({ config: be, typed: T }), s2 = A1({ config: be, log2: Zu, typed: T }), u2 = sb({ typed: T }), c2 = _b({ typed: T }), l2 = Lb({ typed: T }), Wt = WD({ typed: T }), f2 = zb({ typed: T }), m2 = ED({ typed: T }), qa = _u({ add: Le, divide: fr, isNaN: Er, mapSlices: Un, multiply: Mr, subtract: Or, typed: T }), p2 = bb({ typed: T }), d2 = Tb({ typed: T }), h2 = tb({ typed: T }), v2 = gg({ addScalar: wt, combinations: jn, divideScalar: zn, isInteger: wr, isNegative: Dt, multiplyScalar: Ut, typed: T }), g2 = aD({ typed: T }), y2 = Dg({ addScalar: wt, combinations: jn, isInteger: wr, isNegative: Dt, isPositive: bt, larger: Hr, typed: T }), D2 = qb({ typed: T }), $r = M1({ equalScalar: Oa, typed: T }), Ht = d1({ gamma: $a, typed: T }), b2 = mD({ isBounded: jt, map: Lt, typed: T }), x2 = kg({ config: be }), w2 = ID({ typed: T }), N2 = v1({ add: Le, divide: fr, factorial: Ht, isInteger: wr, isPositive: bt, multiply: Mr, typed: T }), yr = DD({ number: Ln }), A2 = y1({ factorial: Ht, typed: T }), C2 = K1({ config: be, multiplyScalar: Ut, numeric: yr, typed: T }), Pa = GD({ typed: T }), Kr = k1({ config: be, typed: T }), Ju = TD({ typed: T }), E2 = V1({ add: Le, config: be, divide: fr, equal: $r, factorial: Ht, gamma: $a, isBounded: jt, isNegative: Dt, multiply: Mr, pi: ma, pow: xt, sin: Wu, smallerEq: zt, subtract: Or, typed: T }), F2 = Ab({ typed: T }), B2 = B1({ compare: Rt, typed: T }), S2 = Pu({ add: Le, typed: T, unaryPlus: Ta }), Vu = cg({ config: be, round: Pa, typed: T }), T2 = fg({ abs: Ma, addScalar: wt, divideScalar: zn, isPositive: bt, multiplyScalar: Ut, smaller: Kr, sqrt: Wt, typed: T }), M2 = PD({ typed: T }), O2 = $u({ config: be, isNaN: Er, larger: Hr, numeric: yr, typed: T }), $2 = ku({ config: be, isNaN: Er, numeric: yr, smaller: Kr, typed: T }), k2 = eb({ typed: T }), q2 = yy({ typed: T }), P2 = Mu({ matrix: et, add: Le, config: be, equal: $r, isPositive: bt, isZero: rt, larger: Hr, largerEq: ka, smaller: Kr, smallerEq: zt, typed: T }), I2 = UD({ typed: T }), _2 = Ru({ map: Lt, sqrt: Wt, typed: T, variance: qa }), Xu = qu({ add: Le, config: be, numeric: yr, typed: T }), R2 = Bb({ typed: T }), Gu = sg({ config: be, round: Pa, typed: T }), j2 = py({ add: Le, divide: fr, matrix: et, mean: Uu, multiply: Mr, pow: xt, sqrt: Wt, subtract: Or, sum: Xu, typed: T }), L2 = ug({ ceil: Gu, floor: Vu, typed: T }), Wn = oD({ typed: T }), Ia = u1({ compare: Rt, isNaN: Er, isNumeric: Wn, typed: T }), Qu = pg({ addScalar: wt, combinations: jn, divideScalar: zn, factorial: Ht, isInteger: wr, isNegative: Dt, larger: Hr, multiplyScalar: Ut, number: Ln, pow: xt, subtractScalar: Ju, typed: T }), z2 = hg({ addScalar: wt, isInteger: wr, isNegative: Dt, stirlingS2: Qu, typed: T }), U2 = R1({ equal: $r, typed: T }), W2 = qD({ typed: T }), Ku = iy({ add: Le, compare: Rt, divide: fr, partitionSelect: Ia, typed: T }), H2 = ly({ add: Le, compare: Rt, divide: fr, isInteger: wr, larger: Hr, mapSlices: Un, multiply: Mr, partitionSelect: Ia, smaller: Kr, smallerEq: zt, subtract: Or, typed: T }), Z2 = G1({ isNaN: Er, isNumeric: Wn, typed: T }), J2 = Cg({}), V2 = uD({ isNumeric: Wn, typed: T }), X2 = sy({ abs: Ma, map: Lt, median: Ku, subtract: Or, typed: T }), Nt = {}, Zt = {}, Yu = {}, _a = rf({ math: Nt, typed: T }), Ge = n0({ mathWithTransform: Zt }), At = N0({ Node: Ge }), ec = S0({ Node: Ge }), rc = M0({ Node: Ge }), G2 = wD({ classes: Yu }), Jr = k0({ Node: Ge, math: Nt }), Ct = i0({ Node: Ge, subset: Sa }), tc = l0({ matrix: et, Node: Ge, subset: Sa }), Q2 = zh({ Chain: _a, typed: T }), nc = d0({ Node: Ge }), Vr = P0({ Node: Ge, SymbolNode: Jr, math: Nt }), Et = x0({ Node: Ge, size: Hu }), Xr = C0({ Node: Ge }), Ft = s0({ Node: Ge }), ac = D0({ Node: Ge, typed: T }), ic = m0({ Node: Ge, ResultSet: Lu }), Gr = g0({ Node: Ge, isBounded: jt }), Ra = Yh({ AccessorNode: Ct, ArrayNode: Ft, ConstantNode: Gr, FunctionNode: Vr, IndexNode: Et, ObjectNode: At, OperatorNode: Xr, SymbolNode: Jr, config: be, isBounded: jt, mathWithTransform: Zt, matrix: et, typed: T }), tt = F0({ Node: Ge }), kr = _0({ AccessorNode: Ct, ArrayNode: Ft, AssignmentNode: tc, BlockNode: ic, ConditionalNode: nc, ConstantNode: Gr, FunctionAssignmentNode: ac, FunctionNode: Vr, IndexNode: Et, ObjectNode: At, OperatorNode: Xr, ParenthesisNode: tt, RangeNode: ec, RelationalNode: rc, SymbolNode: Jr, config: be, numeric: yr, typed: T }), oc = Hh({ ConstantNode: Gr, FunctionNode: Vr, OperatorNode: Xr, ParenthesisNode: tt, parse: kr, typed: T }), ja = tv({ AccessorNode: Ct, ArrayNode: Ft, ConstantNode: Gr, FunctionNode: Vr, IndexNode: Et, ObjectNode: At, OperatorNode: Xr, ParenthesisNode: tt, SymbolNode: Jr, add: Le, divide: fr, equal: $r, isZero: rt, multiply: Mr, parse: kr, pow: xt, subtract: Or, typed: T }), K2 = j0({ parse: kr, typed: T }), La = z0({ parse: kr, typed: T }), sc = Kl({ evaluate: La }), uc = H0({ evaluate: La, parse: kr }), za = Gh({ AccessorNode: Ct, ArrayNode: Ft, ConstantNode: Gr, FunctionNode: Vr, IndexNode: Et, ObjectNode: At, OperatorNode: Xr, ParenthesisNode: tt, SymbolNode: Jr, equal: $r, parse: kr, replacer: ju, resolve: oc, simplifyConstant: Ra, simplifyCore: ja, typed: T }), Y2 = av({ ConstantNode: Gr, FunctionNode: Vr, OperatorNode: Xr, ParenthesisNode: tt, SymbolNode: Jr, config: be, equal: $r, isZero: rt, numeric: yr, parse: kr, simplify: za, typed: T }), ew = jh({ Help: sc, mathWithTransform: Zt, typed: T }), rw = e0({ Parser: uc, typed: T }), tw = ov({ AccessorNode: Ct, ArrayNode: Ft, ConstantNode: Gr, FunctionNode: Vr, IndexNode: Et, ObjectNode: At, OperatorNode: Xr, ParenthesisNode: tt, SymbolNode: Jr, add: Le, config: be, divide: fr, equal: $r, isZero: rt, mathWithTransform: Zt, matrix: et, multiply: Mr, parse: kr, pow: xt, simplify: za, simplifyConstant: Ra, simplifyCore: ja, subtract: Or, typed: T });
or(Nt, { e: Oo, false: Gb, index: Qb, Infinity: Kb, LN10: Yb, LOG10E: ex, matrix: et, NaN: rx, null: tx, phi: nx, replacer: ju, SQRT1_2: ix, subset: Sa, tau: ox, typed: T, unaryPlus: Ta, E: Oo, version: sx, xor: ux, abs: Ma, acos: cx, acot: lx, acsc: fx, add: Le, and: mx, asec: px, asin: dx, atan: hx, atanh: vx, bigint: gx, bitNot: yx, bitXor: Dx, boolean: bx, cbrt: xx, combinations: jn, compare: Rt, compareText: zu, cos: wx, cot: Nx, csc: Ax, cube: Cx, divide: fr, equalScalar: Oa, erf: Ex, exp: Fx, filter: Bx, forEach: Sx, format: Tx, gamma: $a, isBounded: jt, isInteger: wr, isNegative: Dt, isPositive: bt, isZero: rt, LOG2E: Mx, largerEq: ka, leftShift: Ox, log: $x, log1p: kx, map: Lt, mean: Uu, mod: qx, multiply: Mr, not: Px, number: Ln, or: Ix, pi: ma, pow: xt, random: _x, reviver: G2, rightLogShift: Rx, SQRT2: jx, sech: Lx, sin: Wu, size: Hu, smallerEq: zt, square: zx, string: Ux, subtract: Or, tanh: Wx, typeOf: Hx, unequal: Zx, xgcd: Jx, acoth: Vx, addScalar: wt, asech: Xx, bernoulli: Gx, bitOr: Qx, chain: Q2, combinationsWithRep: Kx, cosh: Yx, csch: e2, divideScalar: zn, equalText: r2, expm1: t2, isNaN: Er, isPrime: n2, larger: Hr, lgamma: a2, log2: Zu, mapSlices: Un, multiplyScalar: Ut, nthRoot: i2, pickRandom: o2, randomInt: s2, rightArithShift: u2, sec: c2, sinh: l2, sqrt: Wt, tan: f2, unaryMinus: m2, variance: qa, acosh: p2, atan2: d2, bitAnd: h2, catalan: v2, clone: g2, composition: y2, coth: D2, equal: $r, factorial: Ht, isFinite: b2, LN2: x2, log10: w2, multinomial: N2, numeric: yr, permutations: A2, prod: C2, round: Pa, smaller: Kr, subtractScalar: Ju, PI: ma, zeta: E2, acsch: F2, compareNatural: B2, cumsum: S2, floor: Vu, hypot: T2, lcm: M2, max: O2, min: $2, norm: k2, print: q2, range: P2, sign: I2, simplifyConstant: Ra, std: _2, sum: Xu, asinh: R2, ceil: Gu, corr: j2, fix: L2, isNumeric: Wn, partitionSelect: Ia, stirlingS2: Qu, bellNumbers: z2, deepEqual: U2, gcd: W2, median: Ku, parse: kr, quantileSeq: H2, resolve: oc, simplifyCore: ja, compile: K2, evaluate: La, mode: Z2, simplify: za, derivative: Y2, help: ew, parser: rw, true: J2, hasNumericValue: V2, rationalize: tw, mad: X2, config: be });
or(Zt, Nt, { cumsum: eD({ add: Le, typed: T, unaryPlus: Ta }), mapSlices: wy({ isInteger: wr, typed: T }), filter: Fy({ typed: T }), forEach: Ty({ typed: T }), mean: Ly({ add: Le, divide: fr, typed: T }), subset: Wb({}), map: $y({ typed: T }), std: Gy({ map: Lt, sqrt: Wt, typed: T, variance: qa }), sum: Ky({ add: Le, config: be, numeric: yr, typed: T }), variance: tD({ add: Le, divide: fr, isNaN: Er, mapSlices: Un, multiply: Mr, subtract: Or, typed: T }), max: _y({ config: be, isNaN: Er, larger: Hr, numeric: yr, typed: T }), min: Wy({ config: be, isNaN: Er, numeric: yr, smaller: Kr, typed: T }), range: Jy({ matrix: et, add: Le, config: be, equal: $r, isPositive: bt, isZero: rt, larger: Hr, largerEq: ka, smaller: Kr, smallerEq: zt, typed: T }) });
or(Yu, { Range: ax, ResultSet: Lu, Chain: _a, Node: Ge, ObjectNode: At, RangeNode: ec, RelationalNode: rc, SymbolNode: Jr, AccessorNode: Ct, AssignmentNode: tc, ConditionalNode: nc, FunctionNode: Vr, IndexNode: Et, OperatorNode: Xr, ArrayNode: Ft, FunctionAssignmentNode: ac, BlockNode: ic, ConstantNode: Gr, ParenthesisNode: tt, Help: sc, Parser: uc });
_a.createProxy(Nt);
export {
  La as e
};
