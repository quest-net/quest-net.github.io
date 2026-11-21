/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ui = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Ii = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Ch = 0, Bo = 1, Ph = 2, or = 1, Dh = 2, es = 3, Zn = 0, wt = 1, Zt = 2, Gt = 0, is = 1, zo = 2, Ho = 3, Go = 4, Lh = 5, Li = 100, Ih = 101, Uh = 102, Nh = 103, Fh = 104, Oh = 200, Bh = 201, zh = 202, Hh = 203, dc = 204, pc = 205, Gh = 206, kh = 207, Vh = 208, Wh = 209, Xh = 210, Yh = 211, qh = 212, Zh = 213, Kh = 214, pa = 0, gr = 1, ma = 2, hs = 3, ga = 4, _a = 5, va = 6, xa = 7, mc = 0, Jh = 1, $h = 2, In = 0, gc = 1, _c = 2, vc = 3, xc = 4, Sc = 5, Mc = 6, Ec = 7, yc = 300, Fi = 301, us = 302, Lr = 303, Ir = 304, Sa = 1e3, Dn = 1001, Ma = 1002, Lt = 1003, Qh = 1004, Rs = 1005, Ct = 1006, Ur = 1007, Yn = 1008, lt = 1009, Tc = 1010, bc = 1011, fs = 1012, ao = 1013, xn = 1014, nn = 1015, Sn = 1016, oo = 1017, lo = 1018, ri = 1020, Ac = 35902, Rc = 35899, wc = 1021, Cc = 1022, vn = 1023, Kn = 1026, Ln = 1027, co = 1028, ho = 1029, ai = 1030, uo = 1031, fo = 1033, lr = 33776, cr = 33777, hr = 33778, ur = 33779, Ea = 35840, ya = 35841, Ta = 35842, ba = 35843, Aa = 36196, Ra = 37492, wa = 37496, Ca = 37488, Pa = 37489, _r = 37490, Da = 37491, La = 37808, Ia = 37809, Ua = 37810, Na = 37811, Fa = 37812, Oa = 37813, Ba = 37814, za = 37815, Ha = 37816, Ga = 37817, ka = 37818, Va = 37819, Wa = 37820, Xa = 37821, Ya = 36492, qa = 36494, Za = 36495, Ka = 36283, Ja = 36284, vr = 36285, $a = 36286, li = 3200, bv = 3201, Qa = 0, jh = 1, _n = "", Ye = "srgb", Oi = "srgb-linear", xr = "linear", nt = "srgb", Nr = 7680, eu = 519, tu = 512, nu = 513, iu = 514, Pc = 515, su = 516, ru = 517, Dc = 518, Lc = 519, Ic = 35044, ko = "300 es", cn = 2e3, ds = 2001;
function au(n) {
  for (let e = n.length - 1; e >= 0; --e) if (n[e] >= 65535) return true;
  return false;
}
function ps(n) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", n);
}
function ou() {
  const n = ps("canvas");
  return n.style.display = "block", n;
}
const Vo = {};
function Sr(...n) {
  const e = "THREE." + n.shift();
  console.log(e, ...n);
}
function Uc(n) {
  const e = n[0];
  if (typeof e == "string" && e.startsWith("TSL:")) {
    const t = n[1];
    t && t.isStackTrace ? n[0] += " " + t.getLocation() : n[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return n;
}
function De(...n) {
  n = Uc(n);
  const e = "THREE." + n.shift();
  {
    const t = n[0];
    t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...n);
  }
}
function Ze(...n) {
  n = Uc(n);
  const e = "THREE." + n.shift();
  {
    const t = n[0];
    t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...n);
  }
}
function fr(...n) {
  const e = n.join(" ");
  e in Vo || (Vo[e] = true, De(...n));
}
function lu(n, e, t) {
  return new Promise(function(i, s) {
    function r() {
      switch (n.clientWaitSync(e, n.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case n.WAIT_FAILED:
          s();
          break;
        case n.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          i();
      }
    }
    setTimeout(r, t);
  });
}
const cu = { [pa]: pa, [ma]: va, [ga]: ga, [hs]: _a, [gr]: gr, [va]: ma, [xa]: xa, [_a]: hs };
class fn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
  }
  hasEventListener(e, t) {
    const i = this._listeners;
    return i === void 0 ? false : i[e] !== void 0 && i[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const i = this._listeners;
    if (i === void 0) return;
    const s = i[e];
    if (s !== void 0) {
      const r = s.indexOf(t);
      r !== -1 && s.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const i = t[e.type];
    if (i !== void 0) {
      e.target = this;
      const s = i.slice(0);
      for (let r = 0, a = s.length; r < a; r++) s[r].call(this, e);
      e.target = null;
    }
  }
}
const Ft = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Wo = 1234567;
const ss = Math.PI / 180, ms = 180 / Math.PI;
function On() {
  const n = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (Ft[n & 255] + Ft[n >> 8 & 255] + Ft[n >> 16 & 255] + Ft[n >> 24 & 255] + "-" + Ft[e & 255] + Ft[e >> 8 & 255] + "-" + Ft[e >> 16 & 15 | 64] + Ft[e >> 24 & 255] + "-" + Ft[t & 63 | 128] + Ft[t >> 8 & 255] + "-" + Ft[t >> 16 & 255] + Ft[t >> 24 & 255] + Ft[i & 255] + Ft[i >> 8 & 255] + Ft[i >> 16 & 255] + Ft[i >> 24 & 255]).toLowerCase();
}
function ze(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function po(n, e) {
  return (n % e + e) % e;
}
function hu(n, e, t, i, s) {
  return i + (n - e) * (s - i) / (t - e);
}
function uu(n, e, t) {
  return n !== e ? (t - n) / (e - n) : 0;
}
function rs(n, e, t) {
  return (1 - t) * n + t * e;
}
function fu(n, e, t, i) {
  return rs(n, e, 1 - Math.exp(-t * i));
}
function du(n, e = 1) {
  return e - Math.abs(po(n, e * 2) - e);
}
function pu(n, e, t) {
  return n <= e ? 0 : n >= t ? 1 : (n = (n - e) / (t - e), n * n * (3 - 2 * n));
}
function mu(n, e, t) {
  return n <= e ? 0 : n >= t ? 1 : (n = (n - e) / (t - e), n * n * n * (n * (n * 6 - 15) + 10));
}
function gu(n, e) {
  return n + Math.floor(Math.random() * (e - n + 1));
}
function _u(n, e) {
  return n + Math.random() * (e - n);
}
function vu(n) {
  return n * (0.5 - Math.random());
}
function xu(n) {
  n !== void 0 && (Wo = n);
  let e = Wo += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Su(n) {
  return n * ss;
}
function Mu(n) {
  return n * ms;
}
function Eu(n) {
  return n > 0 && Number.isInteger(n) && 2 ** Math.round(Math.log2(n)) === n;
}
function yu(n) {
  return Math.pow(2, Math.ceil(Math.log(n) / Math.LN2));
}
function Nc(n) {
  return Math.pow(2, Math.floor(Math.log(n) / Math.LN2));
}
function Tu(n, e, t, i, s) {
  const r = Math.cos, a = Math.sin, o = r(t / 2), c = a(t / 2), l = r((e + i) / 2), h = a((e + i) / 2), u = r((e - i) / 2), d = a((e - i) / 2), f = r((i - e) / 2), g = a((i - e) / 2);
  switch (s) {
    case "XYX":
      n.set(o * h, c * u, c * d, o * l);
      break;
    case "YZY":
      n.set(c * d, o * h, c * u, o * l);
      break;
    case "ZXZ":
      n.set(c * u, c * d, o * h, o * l);
      break;
    case "XZX":
      n.set(o * h, c * g, c * f, o * l);
      break;
    case "YXY":
      n.set(c * f, o * h, c * g, o * l);
      break;
    case "ZYZ":
      n.set(c * g, c * f, o * h, o * l);
      break;
    default:
      De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s);
  }
}
function br(n) {
  switch (n.constructor) {
    case Uint32Array:
      return 4294967295;
    case Uint16Array:
      return 65535;
    case Uint8Array:
    case Uint8ClampedArray:
      return 255;
    case Int32Array:
      return 2147483647;
    case Int16Array:
      return 32767;
    case Int8Array:
      return 127;
    default:
      return;
  }
}
function mo(n, e) {
  if (e.constructor === Float32Array) return n;
  const t = br(e);
  if (t === void 0) throw new Error("THREE.MathUtils: Invalid component type.");
  return Math.max(n / t, -1);
}
function go(n, e) {
  if (e.constructor === Float32Array) return n;
  const t = br(e);
  if (t === void 0) throw new Error("THREE.MathUtils: Invalid component type.");
  return Math.round(n * t);
}
const bu = { DEG2RAD: ss, RAD2DEG: ms, generateUUID: On, clamp: ze, euclideanModulo: po, mapLinear: hu, inverseLerp: uu, lerp: rs, damp: fu, pingpong: du, smoothstep: pu, smootherstep: mu, randInt: gu, randFloat: _u, randFloatSpread: vu, seededRandom: xu, degToRad: Su, radToDeg: Mu, isPowerOfTwo: Eu, ceilPowerOfTwo: yu, floorPowerOfTwo: Nc, setQuaternionFromProperEuler: Tu, normalize: go, denormalize: mo };
const _ne = class _ne {
  constructor(e = 0, t = 0) {
    this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, i = this.y, s = e.elements;
    return this.x = s[0] * t + s[3] * i + s[6], this.y = s[1] * t + s[4] * i + s[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = ze(this.x, e.x, t.x), this.y = ze(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = ze(this.x, e, t), this.y = ze(this.y, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(ze(i, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(ze(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y;
    return t * t + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const i = Math.cos(t), s = Math.sin(t), r = this.x - e.x, a = this.y - e.y;
    return this.x = r * i - a * s + e.x, this.y = r * s + a * i + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
};
_ne.prototype.isVector2 = true;
let ne = _ne;
class Jn {
  constructor(e = 0, t = 0, i = 0, s = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = i, this._w = s;
  }
  static slerpFlat(e, t, i, s, r, a, o) {
    let c = i[s + 0], l = i[s + 1], h = i[s + 2], u = i[s + 3], d = r[a + 0], f = r[a + 1], g = r[a + 2], S = r[a + 3];
    if (u !== S || c !== d || l !== f || h !== g) {
      let p = c * d + l * f + h * g + u * S;
      p < 0 && (d = -d, f = -f, g = -g, S = -S, p = -p);
      let m = 1 - o;
      if (p < 0.9995) {
        const M = Math.acos(p), T = Math.sin(M);
        m = Math.sin(m * M) / T, o = Math.sin(o * M) / T, c = c * m + d * o, l = l * m + f * o, h = h * m + g * o, u = u * m + S * o;
      } else {
        c = c * m + d * o, l = l * m + f * o, h = h * m + g * o, u = u * m + S * o;
        const M = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= M, l *= M, h *= M, u *= M;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, i, s, r, a) {
    const o = i[s], c = i[s + 1], l = i[s + 2], h = i[s + 3], u = r[a], d = r[a + 1], f = r[a + 2], g = r[a + 3];
    return e[t] = o * g + h * u + c * f - l * d, e[t + 1] = c * g + h * d + l * u - o * f, e[t + 2] = l * g + h * f + o * d - c * u, e[t + 3] = h * g - o * u - c * d - l * f, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, i, s) {
    return this._x = e, this._y = t, this._z = i, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = true) {
    const i = e._x, s = e._y, r = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(i / 2), h = o(s / 2), u = o(r / 2), d = c(i / 2), f = c(s / 2), g = c(r / 2);
    switch (a) {
      case "XYZ":
        this._x = d * h * u + l * f * g, this._y = l * f * u - d * h * g, this._z = l * h * g + d * f * u, this._w = l * h * u - d * f * g;
        break;
      case "YXZ":
        this._x = d * h * u + l * f * g, this._y = l * f * u - d * h * g, this._z = l * h * g - d * f * u, this._w = l * h * u + d * f * g;
        break;
      case "ZXY":
        this._x = d * h * u - l * f * g, this._y = l * f * u + d * h * g, this._z = l * h * g + d * f * u, this._w = l * h * u - d * f * g;
        break;
      case "ZYX":
        this._x = d * h * u - l * f * g, this._y = l * f * u + d * h * g, this._z = l * h * g - d * f * u, this._w = l * h * u + d * f * g;
        break;
      case "YZX":
        this._x = d * h * u + l * f * g, this._y = l * f * u + d * h * g, this._z = l * h * g - d * f * u, this._w = l * h * u - d * f * g;
        break;
      case "XZY":
        this._x = d * h * u - l * f * g, this._y = l * f * u - d * h * g, this._z = l * h * g + d * f * u, this._w = l * h * u + d * f * g;
        break;
      default:
        De("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const i = t / 2, s = Math.sin(i);
    return this._x = e.x * s, this._y = e.y * s, this._z = e.z * s, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, i = t[0], s = t[4], r = t[8], a = t[1], o = t[5], c = t[9], l = t[2], h = t[6], u = t[10], d = i + o + u;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / f, this._x = (h - c) * f, this._y = (r - l) * f, this._z = (a - s) * f;
    } else if (i > o && i > u) {
      const f = 2 * Math.sqrt(1 + i - o - u);
      this._w = (h - c) / f, this._x = 0.25 * f, this._y = (s + a) / f, this._z = (r + l) / f;
    } else if (o > u) {
      const f = 2 * Math.sqrt(1 + o - i - u);
      this._w = (r - l) / f, this._x = (s + a) / f, this._y = 0.25 * f, this._z = (c + h) / f;
    } else {
      const f = 2 * Math.sqrt(1 + u - i - o);
      this._w = (a - s) / f, this._x = (r + l) / f, this._y = (c + h) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return i < 1e-8 ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ze(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (i === 0) return this;
    const s = Math.min(1, t / i);
    return this.slerp(e, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const i = e._x, s = e._y, r = e._z, a = e._w, o = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = i * h + a * o + s * l - r * c, this._y = s * h + a * c + r * o - i * l, this._z = r * h + a * l + i * c - s * o, this._w = a * h - i * o - s * c - r * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    let i = e._x, s = e._y, r = e._z, a = e._w, o = this.dot(e);
    o < 0 && (i = -i, s = -s, r = -r, a = -a, o = -o);
    let c = 1 - t;
    if (o < 0.9995) {
      const l = Math.acos(o), h = Math.sin(l);
      c = Math.sin(c * l) / h, t = Math.sin(t * l) / h, this._x = this._x * c + i * t, this._y = this._y * c + s * t, this._z = this._z * c + r * t, this._w = this._w * c + a * t, this._onChangeCallback();
    } else this._x = this._x * c + i * t, this._y = this._y * c + s * t, this._z = this._z * c + r * t, this._w = this._w * c + a * t, this.normalize();
    return this;
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), i = Math.random(), s = Math.sqrt(1 - i), r = Math.sqrt(i);
    return this.set(s * Math.sin(e), s * Math.cos(e), r * Math.sin(t), r * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
const _L = class _L {
  constructor(e = 0, t = 0, i = 0) {
    this.x = e, this.y = t, this.z = i;
  }
  set(e, t, i) {
    return i === void 0 && (i = this.z), this.x = e, this.y = t, this.z = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Xo.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Xo.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, i = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * i + r[6] * s, this.y = r[1] * t + r[4] * i + r[7] * s, this.z = r[2] * t + r[5] * i + r[8] * s, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, i = this.y, s = this.z, r = e.elements, a = 1 / (r[3] * t + r[7] * i + r[11] * s + r[15]);
    return this.x = (r[0] * t + r[4] * i + r[8] * s + r[12]) * a, this.y = (r[1] * t + r[5] * i + r[9] * s + r[13]) * a, this.z = (r[2] * t + r[6] * i + r[10] * s + r[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, i = this.y, s = this.z, r = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * s - o * i), h = 2 * (o * t - r * s), u = 2 * (r * i - a * t);
    return this.x = t + c * l + a * u - o * h, this.y = i + c * h + o * l - r * u, this.z = s + c * u + r * h - a * l, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, i = this.y, s = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * i + r[8] * s, this.y = r[1] * t + r[5] * i + r[9] * s, this.z = r[2] * t + r[6] * i + r[10] * s, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = ze(this.x, e.x, t.x), this.y = ze(this.y, e.y, t.y), this.z = ze(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = ze(this.x, e, t), this.y = ze(this.y, e, t), this.z = ze(this.z, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(ze(i, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const i = e.x, s = e.y, r = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = s * c - r * o, this.y = r * a - i * c, this.z = i * o - s * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return Fr.copy(this).projectOnVector(e), this.sub(Fr);
  }
  reflect(e) {
    return this.sub(Fr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(ze(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y, s = this.z - e.z;
    return t * t + i * i + s * s;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, i) {
    const s = Math.sin(t) * e;
    return this.x = s * Math.sin(i), this.y = Math.cos(t) * e, this.z = s * Math.cos(i), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, i) {
    return this.x = e * Math.sin(t), this.y = i, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), i = this.setFromMatrixColumn(e, 1).length(), s = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = i, this.z = s, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, i = Math.sqrt(1 - t * t);
    return this.x = i * Math.cos(e), this.y = t, this.z = i * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
};
_L.prototype.isVector3 = true;
let L = _L;
const Fr = new L(), Xo = new Jn();
const _Ne = class _Ne {
  constructor(e, t, i, s, r, a, o, c, l) {
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, i, s, r, a, o, c, l);
  }
  set(e, t, i, s, r, a, o, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = s, h[2] = o, h[3] = t, h[4] = r, h[5] = c, h[6] = i, h[7] = a, h[8] = l, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], this;
  }
  extractBasis(e, t, i) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements, s = t.elements, r = this.elements, a = i[0], o = i[3], c = i[6], l = i[1], h = i[4], u = i[7], d = i[2], f = i[5], g = i[8], S = s[0], p = s[3], m = s[6], M = s[1], T = s[4], E = s[7], R = s[2], A = s[5], _ = s[8];
    return r[0] = a * S + o * M + c * R, r[3] = a * p + o * T + c * A, r[6] = a * m + o * E + c * _, r[1] = l * S + h * M + u * R, r[4] = l * p + h * T + u * A, r[7] = l * m + h * E + u * _, r[2] = d * S + f * M + g * R, r[5] = d * p + f * T + g * A, r[8] = d * m + f * E + g * _, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[1], s = e[2], r = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8];
    return t * a * h - t * o * l - i * r * h + i * o * c + s * r * l - s * a * c;
  }
  invert() {
    const e = this.elements, t = e[0], i = e[1], s = e[2], r = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], u = h * a - o * l, d = o * c - h * r, f = l * r - a * c, g = t * u + i * d + s * f;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / g;
    return e[0] = u * S, e[1] = (s * l - h * i) * S, e[2] = (o * i - s * a) * S, e[3] = d * S, e[4] = (h * t - s * c) * S, e[5] = (s * r - o * t) * S, e[6] = f * S, e[7] = (i * c - l * t) * S, e[8] = (a * t - i * r) * S, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, i, s, r, a, o) {
    const c = Math.cos(r), l = Math.sin(r);
    return this.set(i * c, i * l, -i * (c * a + l * o) + a + e, -s * l, s * c, -s * (-l * a + c * o) + o + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return fr("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(Or.makeScale(e, t)), this;
  }
  rotate(e) {
    return fr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(Or.makeRotation(-e)), this;
  }
  translate(e, t) {
    return fr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(Or.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(t, -i, 0, i, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let s = 0; s < 9; s++) if (t[s] !== i[s]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
_Ne.prototype.isMatrix3 = true;
let Ne = _Ne;
const Or = new Ne(), Yo = new Ne().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), qo = new Ne().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Au() {
  const n = { enabled: true, workingColorSpace: Oi, spaces: {}, convert: function(s, r, a) {
    return this.enabled === false || r === a || !r || !a || (this.spaces[r].transfer === nt && (s.r = Un(s.r), s.g = Un(s.g), s.b = Un(s.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === nt && (s.r = Ni(s.r), s.g = Ni(s.g), s.b = Ni(s.b))), s;
  }, workingToColorSpace: function(s, r) {
    return this.convert(s, this.workingColorSpace, r);
  }, colorSpaceToWorking: function(s, r) {
    return this.convert(s, r, this.workingColorSpace);
  }, getPrimaries: function(s) {
    return this.spaces[s].primaries;
  }, getTransfer: function(s) {
    return s === _n ? xr : this.spaces[s].transfer;
  }, getToneMappingMode: function(s) {
    return this.spaces[s].outputColorSpaceConfig.toneMappingMode || "standard";
  }, getLuminanceCoefficients: function(s, r = this.workingColorSpace) {
    return s.fromArray(this.spaces[r].luminanceCoefficients);
  }, define: function(s) {
    Object.assign(this.spaces, s);
  }, _getMatrix: function(s, r, a) {
    return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ);
  }, _getDrawingBufferColorSpace: function(s) {
    return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(s = this.workingColorSpace) {
    return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], i = [0.3127, 0.329];
  return n.define({ [Oi]: { primaries: e, whitePoint: i, transfer: xr, toXYZ: Yo, fromXYZ: qo, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: Ye }, outputColorSpaceConfig: { drawingBufferColorSpace: Ye } }, [Ye]: { primaries: e, whitePoint: i, transfer: nt, toXYZ: Yo, fromXYZ: qo, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: Ye } } }), n;
}
const Xe = Au();
function Un(n) {
  return n < 0.04045 ? n * 0.0773993808 : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function Ni(n) {
  return n < 31308e-7 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
let ui;
class Ru {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let i;
    if (e instanceof HTMLCanvasElement) i = e;
    else {
      ui === void 0 && (ui = ps("canvas")), ui.width = e.width, ui.height = e.height;
      const s = ui.getContext("2d");
      e instanceof ImageData ? s.putImageData(e, 0, 0) : s.drawImage(e, 0, 0, e.width, e.height), i = ui;
    }
    return i.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = ps("canvas");
      t.width = e.width, t.height = e.height;
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const s = i.getImageData(0, 0, e.width, e.height), r = s.data;
      for (let a = 0; a < r.length; a++) r[a] = Un(r[a] / 255) * 255;
      return i.putImageData(s, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(Un(t[i] / 255) * 255) : t[i] = Un(t[i]);
      return { data: t, width: e.width, height: e.height };
    } else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let wu = 0;
class _o {
  constructor(e = null) {
    this.isTextureSource = true, Object.defineProperty(this, "id", { value: wu++ }), this.uuid = On(), this.data = e, this.dataReady = true, this.version = 0;
  }
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t !== null ? e.set(t.width || 0, t.height || 0, t.depth || 0) : e.set(0, 0, 0), e;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const i = { uuid: this.uuid, url: "" }, s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let a = 0, o = s.length; a < o; a++) s[a].isDataTexture ? r.push(Br(s[a].image)) : r.push(Br(s[a]));
      } else r = Br(s);
      i.url = r;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function Br(n) {
  return typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap ? Ru.getDataURL(n) : n.data ? { data: Array.from(n.data), width: n.width, height: n.height, type: n.data.constructor.name } : (De("Texture: Unable to serialize Texture."), {});
}
let Cu = 0;
const zr = new L();
class Mt extends fn {
  constructor(e = Mt.DEFAULT_IMAGE, t = Mt.DEFAULT_MAPPING, i = Dn, s = Dn, r = Ct, a = Yn, o = vn, c = lt, l = Mt.DEFAULT_ANISOTROPY, h = _n) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Cu++ }), this.uuid = On(), this.name = "", this.source = new _o(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = i, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new ne(0, 0), this.repeat = new ne(1, 1), this.center = new ne(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ne(), this.generateMipmaps = true, this.mipmapsAutoUpdate = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0, this.isPMREMTexture = false, this.normalized = false;
  }
  get width() {
    return this.source.getSize(zr).x;
  }
  get height() {
    return this.source.getSize(zr).y;
  }
  get depth() {
    return this.source.getSize(zr).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.mipmapsAutoUpdate = e.mipmapsAutoUpdate, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isPMREMTexture = e.isPMREMTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  setValues(e) {
    for (const t in e) {
      const i = e[t];
      if (i === void 0) {
        De(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const s = this[t];
      if (s === void 0) {
        De(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      s && i && s.isVector2 && i.isVector2 || s && i && s.isVector3 && i.isVector3 || s && i && s.isMatrix3 && i.isMatrix3 ? s.copy(i) : this[t] = i;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const i = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, normalized: this.normalized, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, mipmapsAutoUpdate: this.mipmapsAutoUpdate, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), t || (e.textures[this.uuid] = i), i;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== yc) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case Sa:
        e.x = e.x - Math.floor(e.x);
        break;
      case Dn:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case Ma:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case Sa:
        e.y = e.y - Math.floor(e.y);
        break;
      case Dn:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case Ma:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break;
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(e) {
    e === true && this.pmremVersion++;
  }
}
Mt.DEFAULT_IMAGE = null;
Mt.DEFAULT_MAPPING = yc;
Mt.DEFAULT_ANISOTROPY = 1;
const _ut = class _ut {
  constructor(e = 0, t = 0, i = 0, s = 1) {
    this.x = e, this.y = t, this.z = i, this.w = s;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, i, s) {
    return this.x = e, this.y = t, this.z = i, this.w = s, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, i = this.y, s = this.z, r = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * i + a[8] * s + a[12] * r, this.y = a[1] * t + a[5] * i + a[9] * s + a[13] * r, this.z = a[2] * t + a[6] * i + a[10] * s + a[14] * r, this.w = a[3] * t + a[7] * i + a[11] * s + a[15] * r, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, i, s, r;
    const c = e.elements, l = c[0], h = c[4], u = c[8], d = c[1], f = c[5], g = c[9], S = c[2], p = c[6], m = c[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - S) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + S) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(l + f + m - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const T = (l + 1) / 2, E = (f + 1) / 2, R = (m + 1) / 2, A = (h + d) / 4, _ = (u + S) / 4, y = (g + p) / 4;
      return T > E && T > R ? T < 0.01 ? (i = 0, s = 0.707106781, r = 0.707106781) : (i = Math.sqrt(T), s = A / i, r = _ / i) : E > R ? E < 0.01 ? (i = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(E), i = A / s, r = y / s) : R < 0.01 ? (i = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(R), i = _ / r, s = y / r), this.set(i, s, r, t), this;
    }
    let M = Math.sqrt((p - g) * (p - g) + (u - S) * (u - S) + (d - h) * (d - h));
    return Math.abs(M) < 1e-3 && (M = 1), this.x = (p - g) / M, this.y = (u - S) / M, this.z = (d - h) / M, this.w = Math.acos((l + f + m - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = ze(this.x, e.x, t.x), this.y = ze(this.y, e.y, t.y), this.z = ze(this.z, e.z, t.z), this.w = ze(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = ze(this.x, e, t), this.y = ze(this.y, e, t), this.z = ze(this.z, e, t), this.w = ze(this.w, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(ze(i, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this.w = e.w + (t.w - e.w) * i, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
};
_ut.prototype.isVector4 = true;
let ut = _ut;
class Pu extends fn {
  constructor(e = 1, t = 1, i = {}) {
    super(), i = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Ct, depthBuffer: true, stencilBuffer: false, resolveColorBuffer: true, resolveDepthBuffer: true, resolveStencilBuffer: true, storeMultisampledColorBuffer: true, storeMultisampledDepthBuffer: true, storeMultisampledStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false, useArrayDepthTexture: false }, i), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = i.depth, this.scissor = new ut(0, 0, e, t), this.scissorTest = false, this.viewport = new ut(0, 0, e, t), this.textures = [];
    const s = i.count;
    for (let r = 0; r < s; r++) this.textures[r] = new Mt({ width: e, height: t, depth: i.depth }), this.textures[r].isRenderTargetTexture = true, this.textures[r].renderTarget = this;
    this._setTextureOptions(i), this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.resolveColorBuffer = i.resolveColorBuffer, this.resolveDepthBuffer = i.resolveDepthBuffer, this.resolveStencilBuffer = i.resolveStencilBuffer, this.storeMultisampledColorBuffer = i.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = i.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = i.storeMultisampledStencilBuffer, this._depthTexture = null, this.depthTexture = i.depthTexture, this.samples = i.samples, this.multiview = i.multiview, this.useArrayDepthTexture = i.useArrayDepthTexture;
  }
  _setTextureOptions(e = {}) {
    const t = { minFilter: Ct, generateMipmaps: false, flipY: false, internalFormat: null };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.mipmapsAutoUpdate !== void 0 && (t.mipmapsAutoUpdate = e.mipmapsAutoUpdate), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let i = 0; i < this.textures.length; i++) this.textures[i].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && this._depthTexture.renderTarget === this && (this._depthTexture.renderTarget = null), e !== null && e.renderTarget === null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, i = 1) {
    if (this.width !== e || this.height !== t || this.depth !== i) {
      this.width = e, this.height = t, this.depth = i;
      for (let s = 0, r = this.textures.length; s < r; s++) this.textures[s].image.width = e, this.textures[s].image.height = t, this.textures[s].image.depth = i, this.textures[s].isData3DTexture !== true && (this.textures[s].isArrayTexture = this.textures[s].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, i = e.textures.length; t < i; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = true, this.textures[t].renderTarget = this;
      const s = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new _o(s);
    }
    if (this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveColorBuffer = e.resolveColorBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, this.storeMultisampledColorBuffer = e.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = e.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = e.storeMultisampledStencilBuffer, e.depthTexture !== null) if (e.depthTexture.renderTarget === e) {
      const t = e.depthTexture.clone();
      t.renderTarget = null, this.depthTexture = t;
    } else this.depthTexture = e.depthTexture;
    else this.depthTexture = null;
    return this.samples = e.samples, this.multiview = e.multiview, this.useArrayDepthTexture = e.useArrayDepthTexture, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class gt extends Pu {
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), this.isWebGLRenderTarget = true;
  }
}
class Fc extends Mt {
  constructor(e = null, t = 1, i = 1, s = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: i, depth: s }, this.magFilter = Lt, this.minFilter = Lt, this.wrapR = Dn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  copy(e) {
    return super.copy(e), this.wrapR = e.wrapR, this;
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Du extends Mt {
  constructor(e = null, t = 1, i = 1, s = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: i, depth: s }, this.magFilter = Lt, this.minFilter = Lt, this.wrapR = Dn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
  copy(e) {
    return super.copy(e), this.wrapR = e.wrapR, this;
  }
}
const _$e = class _$e {
  constructor(e, t, i, s, r, a, o, c, l, h, u, d, f, g, S, p) {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, i, s, r, a, o, c, l, h, u, d, f, g, S, p);
  }
  set(e, t, i, s, r, a, o, c, l, h, u, d, f, g, S, p) {
    const m = this.elements;
    return m[0] = e, m[4] = t, m[8] = i, m[12] = s, m[1] = r, m[5] = a, m[9] = o, m[13] = c, m[2] = l, m[6] = h, m[10] = u, m[14] = d, m[3] = f, m[7] = g, m[11] = S, m[15] = p, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new _$e().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], t[9] = i[9], t[10] = i[10], t[11] = i[11], t[12] = i[12], t[13] = i[13], t[14] = i[14], t[15] = i[15], this;
  }
  copyPosition(e) {
    const t = this.elements, i = e.elements;
    return t[12] = i[12], t[13] = i[13], t[14] = i[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, i) {
    return this.determinantAffine() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), i.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this);
  }
  makeBasis(e, t, i) {
    return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    if (e.determinantAffine() === 0) return this.identity();
    const t = this.elements, i = e.elements, s = 1 / fi.setFromMatrixColumn(e, 0).length(), r = 1 / fi.setFromMatrixColumn(e, 1).length(), a = 1 / fi.setFromMatrixColumn(e, 2).length();
    return t[0] = i[0] * s, t[1] = i[1] * s, t[2] = i[2] * s, t[3] = 0, t[4] = i[4] * r, t[5] = i[5] * r, t[6] = i[6] * r, t[7] = 0, t[8] = i[8] * a, t[9] = i[9] * a, t[10] = i[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, i = e.x, s = e.y, r = e.z, a = Math.cos(i), o = Math.sin(i), c = Math.cos(s), l = Math.sin(s), h = Math.cos(r), u = Math.sin(r);
    if (e.order === "XYZ") {
      const d = a * h, f = a * u, g = o * h, S = o * u;
      t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = f + g * l, t[5] = d - S * l, t[9] = -o * c, t[2] = S - d * l, t[6] = g + f * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const d = c * h, f = c * u, g = l * h, S = l * u;
      t[0] = d + S * o, t[4] = g * o - f, t[8] = a * l, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = f * o - g, t[6] = S + d * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const d = c * h, f = c * u, g = l * h, S = l * u;
      t[0] = d - S * o, t[4] = -a * u, t[8] = g + f * o, t[1] = f + g * o, t[5] = a * h, t[9] = S - d * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const d = a * h, f = a * u, g = o * h, S = o * u;
      t[0] = c * h, t[4] = g * l - f, t[8] = d * l + S, t[1] = c * u, t[5] = S * l + d, t[9] = f * l - g, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const d = a * c, f = a * l, g = o * c, S = o * l;
      t[0] = c * h, t[4] = S - d * u, t[8] = g * u + f, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -l * h, t[6] = f * u + g, t[10] = d - S * u;
    } else if (e.order === "XZY") {
      const d = a * c, f = a * l, g = o * c, S = o * l;
      t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = d * u + S, t[5] = a * h, t[9] = f * u - g, t[2] = g * u - f, t[6] = o * h, t[10] = S * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Lu, e, Iu);
  }
  lookAt(e, t, i) {
    const s = this.elements;
    return Xt.subVectors(e, t), Xt.lengthSq() === 0 && (Xt.z = 1), Xt.normalize(), Hn.crossVectors(i, Xt), Hn.lengthSq() === 0 && (Math.abs(i.z) === 1 ? Xt.x += 1e-4 : Xt.z += 1e-4, Xt.normalize(), Hn.crossVectors(i, Xt)), Hn.normalize(), ws.crossVectors(Xt, Hn), s[0] = Hn.x, s[4] = ws.x, s[8] = Xt.x, s[1] = Hn.y, s[5] = ws.y, s[9] = Xt.y, s[2] = Hn.z, s[6] = ws.z, s[10] = Xt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements, s = t.elements, r = this.elements, a = i[0], o = i[4], c = i[8], l = i[12], h = i[1], u = i[5], d = i[9], f = i[13], g = i[2], S = i[6], p = i[10], m = i[14], M = i[3], T = i[7], E = i[11], R = i[15], A = s[0], _ = s[4], y = s[8], N = s[12], P = s[1], I = s[5], F = s[9], G = s[13], C = s[2], W = s[6], k = s[10], H = s[14], ee = s[3], X = s[7], Q = s[11], j = s[15];
    return r[0] = a * A + o * P + c * C + l * ee, r[4] = a * _ + o * I + c * W + l * X, r[8] = a * y + o * F + c * k + l * Q, r[12] = a * N + o * G + c * H + l * j, r[1] = h * A + u * P + d * C + f * ee, r[5] = h * _ + u * I + d * W + f * X, r[9] = h * y + u * F + d * k + f * Q, r[13] = h * N + u * G + d * H + f * j, r[2] = g * A + S * P + p * C + m * ee, r[6] = g * _ + S * I + p * W + m * X, r[10] = g * y + S * F + p * k + m * Q, r[14] = g * N + S * G + p * H + m * j, r[3] = M * A + T * P + E * C + R * ee, r[7] = M * _ + T * I + E * W + R * X, r[11] = M * y + T * F + E * k + R * Q, r[15] = M * N + T * G + E * H + R * j, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[4], s = e[8], r = e[12], a = e[1], o = e[5], c = e[9], l = e[13], h = e[2], u = e[6], d = e[10], f = e[14], g = e[3], S = e[7], p = e[11], m = e[15], M = c * f - l * d, T = o * f - l * u, E = o * d - c * u, R = a * f - l * h, A = a * d - c * h, _ = a * u - o * h;
    return t * (S * M - p * T + m * E) - i * (g * M - p * R + m * A) + s * (g * T - S * R + m * _) - r * (g * E - S * A + p * _);
  }
  determinantAffine() {
    const e = this.elements, t = e[0], i = e[4], s = e[8], r = e[1], a = e[5], o = e[9], c = e[2], l = e[6], h = e[10];
    return t * (a * h - o * l) - i * (r * h - o * c) + s * (r * l - a * c);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, i) {
    const s = this.elements;
    return e.isVector3 ? (s[12] = e.x, s[13] = e.y, s[14] = e.z) : (s[12] = e, s[13] = t, s[14] = i), this;
  }
  invert() {
    const e = this.elements, t = e[0], i = e[1], s = e[2], r = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], u = e[9], d = e[10], f = e[11], g = e[12], S = e[13], p = e[14], m = e[15], M = t * o - i * a, T = t * c - s * a, E = t * l - r * a, R = i * c - s * o, A = i * l - r * o, _ = s * l - r * c, y = h * S - u * g, N = h * p - d * g, P = h * m - f * g, I = u * p - d * S, F = u * m - f * S, G = d * m - f * p, C = M * G - T * F + E * I + R * P - A * N + _ * y;
    if (C === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const W = 1 / C;
    return e[0] = (o * G - c * F + l * I) * W, e[1] = (s * F - i * G - r * I) * W, e[2] = (S * _ - p * A + m * R) * W, e[3] = (d * A - u * _ - f * R) * W, e[4] = (c * P - a * G - l * N) * W, e[5] = (t * G - s * P + r * N) * W, e[6] = (p * E - g * _ - m * T) * W, e[7] = (h * _ - d * E + f * T) * W, e[8] = (a * F - o * P + l * y) * W, e[9] = (i * P - t * F - r * y) * W, e[10] = (g * A - S * E + m * M) * W, e[11] = (u * E - h * A - f * M) * W, e[12] = (o * N - a * I - c * y) * W, e[13] = (t * I - i * N + s * y) * W, e[14] = (S * T - g * R - p * M) * W, e[15] = (h * R - u * T + d * M) * W, this;
  }
  scale(e) {
    const t = this.elements, i = e.x, s = e.y, r = e.z;
    return t[0] *= i, t[4] *= s, t[8] *= r, t[1] *= i, t[5] *= s, t[9] *= r, t[2] *= i, t[6] *= s, t[10] *= r, t[3] *= i, t[7] *= s, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, i, s));
  }
  makeTranslation(e, t, i) {
    return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const i = Math.cos(t), s = Math.sin(t), r = 1 - i, a = e.x, o = e.y, c = e.z, l = r * a, h = r * o;
    return this.set(l * a + i, l * o - s * c, l * c + s * o, 0, l * o + s * c, h * o + i, h * c - s * a, 0, l * c - s * o, h * c + s * a, r * c * c + i, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, i) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, i, s, r, a) {
    return this.set(1, i, r, 0, e, 1, a, 0, t, s, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, i) {
    const s = this.elements, r = t._x, a = t._y, o = t._z, c = t._w, l = r + r, h = a + a, u = o + o, d = r * l, f = r * h, g = r * u, S = a * h, p = a * u, m = o * u, M = c * l, T = c * h, E = c * u, R = i.x, A = i.y, _ = i.z;
    return s[0] = (1 - (S + m)) * R, s[1] = (f + E) * R, s[2] = (g - T) * R, s[3] = 0, s[4] = (f - E) * A, s[5] = (1 - (d + m)) * A, s[6] = (p + M) * A, s[7] = 0, s[8] = (g + T) * _, s[9] = (p - M) * _, s[10] = (1 - (d + S)) * _, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
  }
  decompose(e, t, i) {
    const s = this.elements;
    e.x = s[12], e.y = s[13], e.z = s[14];
    const r = this.determinantAffine();
    if (r === 0) return i.set(1, 1, 1), t.identity(), this;
    let a = fi.set(s[0], s[1], s[2]).length();
    const o = fi.set(s[4], s[5], s[6]).length(), c = fi.set(s[8], s[9], s[10]).length();
    r < 0 && (a = -a), an.copy(this);
    const l = 1 / a, h = 1 / o, u = 1 / c;
    return an.elements[0] *= l, an.elements[1] *= l, an.elements[2] *= l, an.elements[4] *= h, an.elements[5] *= h, an.elements[6] *= h, an.elements[8] *= u, an.elements[9] *= u, an.elements[10] *= u, t.setFromRotationMatrix(an), i.x = a, i.y = o, i.z = c, this;
  }
  makePerspective(e, t, i, s, r, a, o = cn, c = false) {
    const l = this.elements, h = 2 * r / (t - e), u = 2 * r / (i - s), d = (t + e) / (t - e), f = (i + s) / (i - s);
    let g, S;
    if (c) g = r / (a - r), S = a * r / (a - r);
    else if (o === cn) g = -(a + r) / (a - r), S = -2 * a * r / (a - r);
    else if (o === ds) g = -a / (a - r), S = -a * r / (a - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = h, l[4] = 0, l[8] = d, l[12] = 0, l[1] = 0, l[5] = u, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = g, l[14] = S, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, i, s, r, a, o = cn, c = false) {
    const l = this.elements, h = 2 / (t - e), u = 2 / (i - s), d = -(t + e) / (t - e), f = -(i + s) / (i - s);
    let g, S;
    if (c) g = 1 / (a - r), S = a / (a - r);
    else if (o === cn) g = -2 / (a - r), S = -(a + r) / (a - r);
    else if (o === ds) g = -1 / (a - r), S = -r / (a - r);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = h, l[4] = 0, l[8] = 0, l[12] = d, l[1] = 0, l[5] = u, l[9] = 0, l[13] = f, l[2] = 0, l[6] = 0, l[10] = g, l[14] = S, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let s = 0; s < 16; s++) if (t[s] !== i[s]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e;
  }
};
_$e.prototype.isMatrix4 = true;
let $e = _$e;
const fi = new L(), an = new $e(), Lu = new L(0, 0, 0), Iu = new L(1, 1, 1), Hn = new L(), ws = new L(), Xt = new L(), Zo = new $e(), Ko = new Jn();
class Fn {
  constructor(e = 0, t = 0, i = 0, s = Fn.DEFAULT_ORDER) {
    this.isEuler = true, this._x = e, this._y = t, this._z = i, this._order = s;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, i, s = this._order) {
    return this._x = e, this._y = t, this._z = i, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, i = true) {
    const s = e.elements, r = s[0], a = s[4], o = s[8], c = s[1], l = s[5], h = s[9], u = s[2], d = s[6], f = s[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(ze(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ze(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ze(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, r));
        break;
      case "ZYX":
        this._y = Math.asin(-ze(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(ze(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(o, f));
        break;
      case "XZY":
        this._z = Math.asin(-ze(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        De("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, i === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, i) {
    return Zo.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Zo, t, i);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ko.setFromEuler(this), this.setFromQuaternion(Ko, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Fn.DEFAULT_ORDER = "XYZ";
class vo {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Uu = 0;
const Jo = new L(), di = new Jn(), Tn = new $e(), Cs = new L(), ki = new L(), Nu = new L(), Fu = new Jn(), $o = new L(1, 0, 0), Qo = new L(0, 1, 0), jo = new L(0, 0, 1), el = { type: "added" }, Ou = { type: "removed" }, pi = { type: "childadded", child: null }, Hr = { type: "childremoved", child: null };
class _t extends fn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Uu++ }), this.uuid = On(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _t.DEFAULT_UP.clone();
    const e = new L(), t = new Fn(), i = new Jn(), s = new L(1, 1, 1);
    function r() {
      i.setFromEuler(t, false);
    }
    function a() {
      t.setFromQuaternion(i, void 0, false);
    }
    t._onChange(r), i._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: i }, scale: { configurable: true, enumerable: true, value: s }, modelViewMatrix: { value: new $e() }, normalMatrix: { value: new Ne() } }), this.matrix = new $e(), this.matrixWorld = new $e(), this.matrixAutoUpdate = _t.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new vo(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = false, this.userData = {}, this.pivot = null;
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale), this.pivot !== null && this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return di.setFromAxisAngle(e, t), this.quaternion.multiply(di), this;
  }
  rotateOnWorldAxis(e, t) {
    return di.setFromAxisAngle(e, t), this.quaternion.premultiply(di), this;
  }
  rotateX(e) {
    return this.rotateOnAxis($o, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Qo, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(jo, e);
  }
  translateOnAxis(e, t) {
    return Jo.copy(e).applyQuaternion(this.quaternion), this.position.add(Jo.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis($o, e);
  }
  translateY(e) {
    return this.translateOnAxis(Qo, e);
  }
  translateZ(e) {
    return this.translateOnAxis(jo, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(Tn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, i) {
    e.isVector3 ? Cs.copy(e) : Cs.set(e, t, i);
    const s = this.parent;
    this.updateWorldMatrix(true, false), ki.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Tn.lookAt(ki, Cs, this.up) : Tn.lookAt(Cs, ki, this.up), this.quaternion.setFromRotationMatrix(Tn), s && (Tn.extractRotation(s.matrixWorld), di.setFromRotationMatrix(Tn), this.quaternion.premultiply(di.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (Ze("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(el), pi.child = e, this.dispatchEvent(pi), pi.child = null) : Ze("Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ou), Hr.child = e, this.dispatchEvent(Hr), Hr.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), Tn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), Tn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Tn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(el), pi.child = e, this.dispatchEvent(pi), pi.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let i = 0, s = this.children.length; i < s; i++) {
      const a = this.children[i].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, i = []) {
    this[e] === t && i.push(this);
    const s = this.children;
    for (let r = 0, a = s.length; r < a; r++) s[r].getObjectsByProperty(e, t, i);
    return i;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(ki, e, Nu), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(ki, Fu, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  intersectsFrustum() {
    return true;
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let i = 0, s = t.length; i < s; i++) t[i].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === false) return;
    e(this);
    const t = this.children;
    for (let i = 0, s = t.length; i < s; i++) t[i].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const e = this.pivot;
    if (e !== null) {
      const t = e.x, i = e.y, s = e.z, r = this.matrix.elements;
      r[12] += t - r[0] * t - r[4] * i - r[8] * s, r[13] += i - r[1] * t - r[5] * i - r[9] * s, r[14] += s - r[2] * t - r[6] * i - r[10] * s;
    }
    this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e = true);
    const t = this.children;
    for (let i = 0, s = t.length; i < s; i++) t[i].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t, i = false) {
    const s = this.parent;
    if (e === true && s !== null && s.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || i) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, i = true), t === true) {
      const r = this.children;
      for (let a = 0, o = r.length; a < o; a++) r[a].updateWorldMatrix(false, true, i);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", i = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, i.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, s.name = this.name, s.castShadow = this.castShadow, s.receiveShadow = this.receiveShadow, s.visible = this.visible, s.frustumCulled = this.frustumCulled, s.renderOrder = this.renderOrder, s.static = this.static, s.matrixAutoUpdate = this.matrixAutoUpdate, Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.pivot !== null && (s.pivot = this.pivot.toArray()), this.morphTargetDictionary !== void 0 && (s.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (s.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.geometryInfo = this._geometryInfo.map((o) => ({ ...o, boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0, boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0 })), s.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), s.availableInstanceIds = this._availableInstanceIds.slice(), s.availableGeometryIds = this._availableGeometryIds.slice(), s.nextIndexStart = this._nextIndexStart, s.nextVertexStart = this._nextVertexStart, s.geometryCount = this._geometryCount, s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.matricesTexture = this._matricesTexture.toJSON(e), s.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (s.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (s.boundingBox = this.boundingBox.toJSON()));
    function r(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (s.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c)) for (let l = 0, h = c.length; l < h; l++) {
          const u = c[l];
          r(e.shapes, u);
        }
        else r(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let c = 0, l = this.material.length; c < l; c++) o.push(r(e.materials, this.material[c]));
      s.material = o;
    } else s.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let o = 0; o < this.children.length; o++) s.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        s.animations.push(r(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), h = a(e.images), u = a(e.shapes), d = a(e.skeletons), f = a(e.animations), g = a(e.nodes);
      o.length > 0 && (i.geometries = o), c.length > 0 && (i.materials = c), l.length > 0 && (i.textures = l), h.length > 0 && (i.images = h), u.length > 0 && (i.shapes = u), d.length > 0 && (i.skeletons = d), f.length > 0 && (i.animations = f), g.length > 0 && (i.nodes = g);
    }
    return i.object = s, i;
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot !== null ? e.pivot.clone() : null, this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let i = 0; i < e.children.length; i++) {
      const s = e.children[i];
      this.add(s.clone());
    }
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
_t.DEFAULT_UP = new L(0, 1, 0);
_t.DEFAULT_MATRIX_AUTO_UPDATE = true;
_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
class si extends _t {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const Bu = { type: "move" };
class Gr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new si(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new si(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new L(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new L()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new si(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new L(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new L(), this._grip.eventsEnabled = false), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const i of e.hand.values()) this._getHandJoint(t, i);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(e, t, i) {
    let s = null, r = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = true;
        for (const S of e.hand.values()) {
          const p = t.getJointPose(S, i), m = this._getHandJoint(l, S);
          p !== null && (m.matrix.fromArray(p.transform.matrix), m.matrix.decompose(m.position, m.quaternion, m.scale), m.matrixWorldNeedsUpdate = true, m.jointRadius = p.radius), m.visible = p !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = 0.02, g = 5e-3;
        l.inputState.pinching && d > f + g ? (l.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !l.inputState.pinching && d <= f - g && (l.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else c !== null && e.gripSpace && (r = t.getPose(e.gripSpace, i), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.quaternion, c.scale), c.matrixWorldNeedsUpdate = true, r.linearVelocity ? (c.hasLinearVelocity = true, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = false, r.angularVelocity ? (c.hasAngularVelocity = true, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = false, c.eventsEnabled && c.dispatchEvent({ type: "gripUpdated", data: e, target: this })));
      o !== null && (s = t.getPose(e.targetRaySpace, i), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.matrixWorldNeedsUpdate = true, s.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = false, s.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(Bu)));
    }
    return o !== null && (o.visible = s !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = a !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const i = new si();
      i.matrixAutoUpdate = false, i.visible = false, e.joints[t.jointName] = i, e.add(i);
    }
    return e.joints[t.jointName];
  }
}
const Oc = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Gn = { h: 0, s: 0, l: 0 }, Ps = { h: 0, s: 0, l: 0 };
function kr(n, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + (e - n) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? n + (e - n) * 6 * (2 / 3 - t) : n;
}
class He {
  constructor(e, t, i) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, i);
  }
  set(e, t, i) {
    if (t === void 0 && i === void 0) {
      const s = e;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else this.setRGB(e, t, i);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Ye) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Xe.colorSpaceToWorking(this, t), this;
  }
  setRGB(e, t, i, s = Xe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = i, Xe.colorSpaceToWorking(this, s), this;
  }
  setHSL(e, t, i, s = Xe.workingColorSpace) {
    if (e = po(e, 1), t = ze(t, 0, 1), i = ze(i, 0, 1), t === 0) this.r = this.g = this.b = i;
    else {
      const r = i <= 0.5 ? i * (1 + t) : i + t - i * t, a = 2 * i - r;
      this.r = kr(a, r, e + 1 / 3), this.g = kr(a, r, e), this.b = kr(a, r, e - 1 / 3);
    }
    return Xe.colorSpaceToWorking(this, s), this;
  }
  setStyle(e, t = Ye) {
    function i(r) {
      r !== void 0 && parseFloat(r) < 1 && De("Color: Alpha component of " + e + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const a = s[1], o = s[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o)) return i(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
          if (r = /^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o)) return i(r[4]), this.setRGB(Math.min(100, parseFloat(r[1])) / 100, Math.min(100, parseFloat(r[2])) / 100, Math.min(100, parseFloat(r[3])) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o)) return i(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
          break;
        default:
          De("Color: Unknown color model " + e);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = s[1], a = r.length;
      if (a === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (a === 6) return this.setHex(parseInt(r, 16), t);
      De("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Ye) {
    const i = Oc[e.toLowerCase()];
    return i !== void 0 ? this.setHex(i, t) : De("Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Un(e.r), this.g = Un(e.g), this.b = Un(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ni(e.r), this.g = Ni(e.g), this.b = Ni(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ye) {
    return Xe.workingToColorSpace(Ot.copy(this), e), Math.round(ze(Ot.r * 255, 0, 255)) * 65536 + Math.round(ze(Ot.g * 255, 0, 255)) * 256 + Math.round(ze(Ot.b * 255, 0, 255));
  }
  getHexString(e = Ye) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Xe.workingColorSpace) {
    Xe.workingToColorSpace(Ot.copy(this), t);
    const i = Ot.r, s = Ot.g, r = Ot.b, a = Math.max(i, s, r), o = Math.min(i, s, r);
    let c, l;
    const h = (o + a) / 2;
    if (o === a) c = 0, l = 0;
    else {
      const u = a - o;
      switch (l = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case i:
          c = (s - r) / u + (s < r ? 6 : 0);
          break;
        case s:
          c = (r - i) / u + 2;
          break;
        case r:
          c = (i - s) / u + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = Xe.workingColorSpace) {
    return Xe.workingToColorSpace(Ot.copy(this), t), e.r = Ot.r, e.g = Ot.g, e.b = Ot.b, e;
  }
  getStyle(e = Ye) {
    Xe.workingToColorSpace(Ot.copy(this), e);
    const t = Ot.r, i = Ot.g, s = Ot.b;
    return e !== Ye ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, i) {
    return this.getHSL(Gn), this.setHSL(Gn.h + e, Gn.s + t, Gn.l + i);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, i) {
    return this.r = e.r + (t.r - e.r) * i, this.g = e.g + (t.g - e.g) * i, this.b = e.b + (t.b - e.b) * i, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Gn), e.getHSL(Ps);
    const i = rs(Gn.h, Ps.h, t), s = rs(Gn.s, Ps.s, t), r = rs(Gn.l, Ps.l, t);
    return this.setHSL(i, s, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, i = this.g, s = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * i + r[6] * s, this.g = r[1] * t + r[4] * i + r[7] * s, this.b = r[2] * t + r[5] * i + r[8] * s, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Ot = new He();
He.NAMES = Oc;
class tl extends _t {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Fn(), this.environmentIntensity = 1, this.environmentRotation = new Fn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), this.background = e.background !== null ? e.background.clone() : null, this.environment = e.environment !== null ? e.environment.clone() : null, this.fog = e.fog !== null ? e.fog.clone() : null, this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), this.overrideMaterial = e.overrideMaterial !== null ? e.overrideMaterial.clone() : null, this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t.object.backgroundBlurriness = this.backgroundBlurriness, t.object.backgroundIntensity = this.backgroundIntensity, t.object.backgroundRotation = this.backgroundRotation.toArray(), t.object.environmentIntensity = this.environmentIntensity, t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const on = new L(), bn = new L(), Vr = new L(), An = new L(), mi = new L(), gi = new L(), nl = new L(), Wr = new L(), Xr = new L(), Yr = new L(), qr = new ut(), Zr = new ut(), Kr = new ut();
class tn {
  constructor(e = new L(), t = new L(), i = new L()) {
    this.a = e, this.b = t, this.c = i;
  }
  static getNormal(e, t, i, s) {
    s.subVectors(i, t), on.subVectors(e, t), s.cross(on);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  static getBarycoord(e, t, i, s, r) {
    on.subVectors(s, t), bn.subVectors(i, t), Vr.subVectors(e, t);
    const a = on.dot(on), o = on.dot(bn), c = on.dot(Vr), l = bn.dot(bn), h = bn.dot(Vr), u = a * l - o * o;
    if (u === 0) return r.set(0, 0, 0), null;
    const d = 1 / u, f = (l * c - o * h) * d, g = (a * h - o * c) * d;
    return r.set(1 - f - g, g, f);
  }
  static containsPoint(e, t, i, s) {
    return this.getBarycoord(e, t, i, s, An) === null ? false : An.x >= 0 && An.y >= 0 && An.x + An.y <= 1;
  }
  static getInterpolation(e, t, i, s, r, a, o, c) {
    return this.getBarycoord(e, t, i, s, An) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(r, An.x), c.addScaledVector(a, An.y), c.addScaledVector(o, An.z), c);
  }
  static getInterpolatedAttribute(e, t, i, s, r, a) {
    return qr.setScalar(0), Zr.setScalar(0), Kr.setScalar(0), qr.fromBufferAttribute(e, t), Zr.fromBufferAttribute(e, i), Kr.fromBufferAttribute(e, s), a.setScalar(0), a.addScaledVector(qr, r.x), a.addScaledVector(Zr, r.y), a.addScaledVector(Kr, r.z), a;
  }
  static isFrontFacing(e, t, i, s) {
    return on.subVectors(i, t), bn.subVectors(e, t), on.cross(bn).dot(s) < 0;
  }
  set(e, t, i) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
  }
  setFromPointsAndIndices(e, t, i, s) {
    return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[s]), this;
  }
  setFromAttributeAndIndices(e, t, i, s) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, i), this.c.fromBufferAttribute(e, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return on.subVectors(this.c, this.b), bn.subVectors(this.a, this.b), on.cross(bn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return tn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return tn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, i, s, r) {
    return tn.getInterpolation(e, this.a, this.b, this.c, t, i, s, r);
  }
  containsPoint(e) {
    return tn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return tn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a, s = this.b, r = this.c;
    let a, o;
    mi.subVectors(s, i), gi.subVectors(r, i), Wr.subVectors(e, i);
    const c = mi.dot(Wr), l = gi.dot(Wr);
    if (c <= 0 && l <= 0) return t.copy(i);
    Xr.subVectors(e, s);
    const h = mi.dot(Xr), u = gi.dot(Xr);
    if (h >= 0 && u <= h) return t.copy(s);
    const d = c * u - h * l;
    if (d <= 0 && c >= 0 && h <= 0 && c - h > 0) return a = c / (c - h), t.copy(i).addScaledVector(mi, a);
    Yr.subVectors(e, r);
    const f = mi.dot(Yr), g = gi.dot(Yr);
    if (g >= 0 && f <= g) return t.copy(r);
    const S = f * l - c * g;
    if (S <= 0 && l >= 0 && g <= 0) return o = l / (l - g), t.copy(i).addScaledVector(gi, o);
    const p = h * g - f * u;
    if (p <= 0 && u - h >= 0 && f - g >= 0) return nl.subVectors(r, s), o = (u - h) / (u - h + (f - g)), t.copy(s).addScaledVector(nl, o);
    const m = 1 / (p + S + d);
    return a = S * m, o = d * m, t.copy(i).addScaledVector(mi, a).addScaledVector(gi, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
class ci {
  constructor(e = new L(1 / 0, 1 / 0, 1 / 0), t = new L(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3) this.expandByPoint(ln.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++) this.expandByPoint(ln.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = ln.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  setFromObject(e, t = false) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    const i = e.geometry;
    if (i !== void 0) {
      const r = i.getAttribute("position");
      if (t === true && r !== void 0 && e.isInstancedMesh !== true && e.isBatchedMesh !== true) for (let a = 0, o = r.count; a < o; a++) e.isMesh === true ? e.getVertexPosition(a, ln) : ln.fromBufferAttribute(r, a), ln.applyMatrix4(e.matrixWorld), this.expandByPoint(ln);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Ds.copy(e.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), Ds.copy(i.boundingBox)), Ds.applyMatrix4(e.matrixWorld), this.union(Ds);
    }
    const s = e.children;
    for (let r = 0, a = s.length; r < a; r++) this.expandByObject(s[r], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, ln), ln.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, i;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(Vi), Ls.subVectors(this.max, Vi), _i.subVectors(e.a, Vi), vi.subVectors(e.b, Vi), xi.subVectors(e.c, Vi), kn.subVectors(vi, _i), Vn.subVectors(xi, vi), ei.subVectors(_i, xi);
    let t = [0, -kn.z, kn.y, 0, -Vn.z, Vn.y, 0, -ei.z, ei.y, kn.z, 0, -kn.x, Vn.z, 0, -Vn.x, ei.z, 0, -ei.x, -kn.y, kn.x, 0, -Vn.y, Vn.x, 0, -ei.y, ei.x, 0];
    return !Jr(t, _i, vi, xi, Ls) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Jr(t, _i, vi, xi, Ls)) ? false : (Is.crossVectors(kn, Vn), t = [Is.x, Is.y, Is.z], Jr(t, _i, vi, xi, Ls));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, ln).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(ln).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Rn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Rn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Rn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Rn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Rn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Rn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Rn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Rn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Rn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const Rn = [new L(), new L(), new L(), new L(), new L(), new L(), new L(), new L()], ln = new L(), Ds = new ci(), _i = new L(), vi = new L(), xi = new L(), kn = new L(), Vn = new L(), ei = new L(), Vi = new L(), Ls = new L(), Is = new L(), ti = new L();
function Jr(n, e, t, i, s) {
  for (let r = 0, a = n.length - 3; r <= a; r += 3) {
    ti.fromArray(n, r);
    const o = s.x * Math.abs(ti.x) + s.y * Math.abs(ti.y) + s.z * Math.abs(ti.z), c = e.dot(ti), l = t.dot(ti), h = i.dot(ti);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o) return false;
  }
  return true;
}
const mt = new L(), Us = new ne();
let zu = 0;
class hn extends fn {
  constructor(e, t, i = false) {
    if (super(), Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: zu++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = i, this.usage = Ic, this.updateRanges = [], this.gpuType = nn, this.version = 0, this._normalizationScale = e !== void 0 ? br(e) : void 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this._normalizationScale = e._normalizationScale, this;
  }
  copyAt(e, t, i) {
    e *= this.itemSize, i *= t.itemSize;
    for (let s = 0, r = this.itemSize; s < r; s++) this.array[e + s] = t.array[i + s];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, i = this.count; t < i; t++) Us.fromBufferAttribute(this, t), Us.applyMatrix3(e), this.setXY(t, Us.x, Us.y);
    else if (this.itemSize === 3) for (let t = 0, i = this.count; t < i; t++) mt.fromBufferAttribute(this, t), mt.applyMatrix3(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++) mt.fromBufferAttribute(this, t), mt.applyMatrix4(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++) mt.fromBufferAttribute(this, t), mt.applyNormalMatrix(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++) mt.fromBufferAttribute(this, t), mt.transformDirection(e), this.setXYZ(t, mt.x, mt.y, mt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = this._denormalize(i)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = this._normalize(i)), this.array[e * this.itemSize + t] = i, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  setX(e, t) {
    return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  setY(e, t) {
    return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  setW(e, t) {
    return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, i) {
    return e *= this.itemSize, this.normalized && (t = this._normalize(t), i = this._normalize(i)), this.array[e + 0] = t, this.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, s) {
    return e *= this.itemSize, this.normalized && (t = this._normalize(t), i = this._normalize(i), s = this._normalize(s)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = s, this;
  }
  setXYZW(e, t, i, s, r) {
    return e *= this.itemSize, this.normalized && (t = this._normalize(t), i = this._normalize(i), s = this._normalize(s), r = this._normalize(r)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = s, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return e.name = this.name, e.usage = this.usage, e.gpuType = this.gpuType, e;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  _denormalize(e) {
    const t = this._normalizationScale;
    return t !== void 0 ? Math.max(e / t, -1) : mo(e, this.array);
  }
  _normalize(e) {
    const t = this._normalizationScale;
    return t !== void 0 ? Math.round(e * t) : go(e, this.array);
  }
}
class Bc extends hn {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class zc extends hn {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class dt extends hn {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
const Hu = new ci(), Wi = new L(), $r = new L();
class hi {
  constructor(e = new L(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : Hu.setFromPoints(e).getCenter(i);
    let s = 0;
    for (let r = 0, a = e.length; r < a; r++) s = Math.max(s, i.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(s), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const i = this.center.distanceToSquared(e);
    return t.copy(e), i > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    Wi.subVectors(e, this.center);
    const t = Wi.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t), s = (i - this.radius) * 0.5;
      this.center.addScaledVector(Wi, s / i), this.radius += s;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : ($r.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Wi.copy(e.center).add($r)), this.expandByPoint(Wi.copy(e.center).sub($r))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
let Gu = 0;
const en = new $e(), Qr = new _t(), Si = new L(), Yt = new ci(), Xi = new ci(), Rt = new L();
class kt extends fn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Gu++ }), this.uuid = On(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {}, this._transformed = false;
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (au(e) ? zc : Bc)(e, 1) : this.index = e, this;
  }
  setIndirect(e, t = 0) {
    return this.indirect = e, this.indirectOffset = t, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, i = 0) {
    this.groups.push({ start: e, count: t, materialIndex: i });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
    const i = this.attributes.normal;
    if (i !== void 0) {
      const r = new Ne().getNormalMatrix(e);
      i.applyNormalMatrix(r), i.needsUpdate = true;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(e), s.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = true, this;
  }
  applyQuaternion(e) {
    return en.makeRotationFromQuaternion(e), this.applyMatrix4(en), this;
  }
  rotateX(e) {
    return en.makeRotationX(e), this.applyMatrix4(en), this;
  }
  rotateY(e) {
    return en.makeRotationY(e), this.applyMatrix4(en), this;
  }
  rotateZ(e) {
    return en.makeRotationZ(e), this.applyMatrix4(en), this;
  }
  translate(e, t, i) {
    return en.makeTranslation(e, t, i), this.applyMatrix4(en), this;
  }
  scale(e, t, i) {
    return en.makeScale(e, t, i), this.applyMatrix4(en), this;
  }
  lookAt(e) {
    return Qr.lookAt(e), Qr.updateMatrix(), this.applyMatrix4(Qr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Si).negate(), this.translate(Si.x, Si.y, Si.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const i = [];
      for (let s = 0, r = e.length; s < r; s++) {
        const a = e[s];
        i.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new dt(i, 3));
    } else {
      const i = Math.min(e.length, t.count);
      for (let s = 0; s < i; s++) {
        const r = e[s];
        t.setXYZ(s, r.x, r.y, r.z || 0);
      }
      e.length > t.count && De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ci());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new L(-1 / 0, -1 / 0, -1 / 0), new L(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let i = 0, s = t.length; i < s; i++) {
        const r = t[i];
        Yt.setFromBufferAttribute(r), this.morphTargetsRelative ? (Rt.addVectors(this.boundingBox.min, Yt.min), this.boundingBox.expandByPoint(Rt), Rt.addVectors(this.boundingBox.max, Yt.max), this.boundingBox.expandByPoint(Rt)) : (this.boundingBox.expandByPoint(Yt.min), this.boundingBox.expandByPoint(Yt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new hi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if (Yt.setFromBufferAttribute(e), t) for (let r = 0, a = t.length; r < a; r++) {
        const o = t[r];
        Xi.setFromBufferAttribute(o), this.morphTargetsRelative ? (Rt.addVectors(Yt.min, Xi.min), Yt.expandByPoint(Rt), Rt.addVectors(Yt.max, Xi.max), Yt.expandByPoint(Rt)) : (Yt.expandByPoint(Xi.min), Yt.expandByPoint(Xi.max));
      }
      Yt.getCenter(i);
      let s = 0;
      for (let r = 0, a = e.count; r < a; r++) Rt.fromBufferAttribute(e, r), s = Math.max(s, i.distanceToSquared(Rt));
      if (t) for (let r = 0, a = t.length; r < a; r++) {
        const o = t[r], c = this.morphTargetsRelative;
        for (let l = 0, h = o.count; l < h; l++) Rt.fromBufferAttribute(o, l), c && (Si.fromBufferAttribute(e, l), Rt.add(Si)), s = Math.max(s, i.distanceToSquared(Rt));
      }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = t.position, s = t.normal, r = t.uv;
    let a = this.getAttribute("tangent");
    (a === void 0 || a.count !== i.count) && (a = new hn(new Float32Array(4 * i.count), 4), this.setAttribute("tangent", a));
    const o = [], c = [], l = new Uint8Array(i.count);
    for (let N = 0; N < i.count; N++) o[N] = new L(), c[N] = new L();
    const h = new L(), u = new L(), d = new L(), f = new ne(), g = new ne(), S = new ne(), p = new L(), m = new L();
    function M(N, P, I) {
      l[N] = l[P] = l[I] = 1, h.fromBufferAttribute(i, N), u.fromBufferAttribute(i, P), d.fromBufferAttribute(i, I), f.fromBufferAttribute(r, N), g.fromBufferAttribute(r, P), S.fromBufferAttribute(r, I), u.sub(h), d.sub(h), g.sub(f), S.sub(f);
      const F = 1 / (g.x * S.y - S.x * g.y);
      isFinite(F) && (p.copy(u).multiplyScalar(S.y).addScaledVector(d, -g.y).multiplyScalar(F), m.copy(d).multiplyScalar(g.x).addScaledVector(u, -S.x).multiplyScalar(F), o[N].add(p), o[P].add(p), o[I].add(p), c[N].add(m), c[P].add(m), c[I].add(m));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: e.count }]);
    for (let N = 0, P = T.length; N < P; ++N) {
      const I = T[N], F = I.start, G = I.count;
      for (let C = F, W = F + G; C < W; C += 3) M(e.getX(C + 0), e.getX(C + 1), e.getX(C + 2));
    }
    const E = new L(), R = new L(), A = new L(), _ = new L();
    function y(N) {
      A.fromBufferAttribute(s, N), _.copy(A);
      const P = o[N];
      E.copy(P), E.sub(A.multiplyScalar(A.dot(P))).normalize(), R.crossVectors(_, P);
      const F = R.dot(c[N]) < 0 ? -1 : 1;
      a.setXYZW(N, E.x, E.y, E.z, F);
    }
    for (let N = 0, P = i.count; N < P; ++N) l[N] && y(N);
    this._transformed = true;
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0 || i.count !== t.count) i = new hn(new Float32Array(t.count * 3), 3), this.setAttribute("normal", i);
      else for (let d = 0, f = i.count; d < f; d++) i.setXYZ(d, 0, 0, 0);
      const s = new L(), r = new L(), a = new L(), o = new L(), c = new L(), l = new L(), h = new L(), u = new L();
      if (e) for (let d = 0, f = e.count; d < f; d += 3) {
        const g = e.getX(d + 0), S = e.getX(d + 1), p = e.getX(d + 2);
        s.fromBufferAttribute(t, g), r.fromBufferAttribute(t, S), a.fromBufferAttribute(t, p), h.subVectors(a, r), u.subVectors(s, r), h.cross(u), o.fromBufferAttribute(i, g), c.fromBufferAttribute(i, S), l.fromBufferAttribute(i, p), o.add(h), c.add(h), l.add(h), i.setXYZ(g, o.x, o.y, o.z), i.setXYZ(S, c.x, c.y, c.z), i.setXYZ(p, l.x, l.y, l.z);
      }
      else for (let d = 0, f = t.count; d < f; d += 3) s.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), h.subVectors(a, r), u.subVectors(s, r), h.cross(u), i.setXYZ(d + 0, h.x, h.y, h.z), i.setXYZ(d + 1, h.x, h.y, h.z), i.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), i.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++) Rt.fromBufferAttribute(e, t), Rt.normalize(), e.setXYZ(t, Rt.x, Rt.y, Rt.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, h = o.itemSize, u = o.normalized, d = new l.constructor(c.length * h);
      let f = 0, g = 0;
      for (let S = 0, p = c.length; S < p; S++) {
        o.isInterleavedBufferAttribute ? f = c[S] * o.data.stride + o.offset : f = c[S] * h;
        for (let m = 0; m < h; m++) d[g++] = l[f++];
      }
      return new hn(d, h, u);
    }
    if (this.index === null) return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new kt(), i = this.index.array, s = this.attributes;
    for (const o in s) {
      const c = s[o], l = e(c, i);
      t.setAttribute(o, l);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const c = [], l = r[o];
      for (let h = 0, u = l.length; h < u; h++) {
        const d = l[h], f = e(d, i);
        c.push(f);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.parameters !== void 0 && this._transformed === true ? "BufferGeometry" : this.type, e.name = this.name, Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0 && this._transformed !== true) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const i = this.attributes;
    for (const c in i) {
      const l = i[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const s = {};
    let r = false;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u];
        h.push(f.toJSON(e.data));
      }
      h.length > 0 && (s[c] = h, r = true);
    }
    r && (e.data.morphAttributes = s, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const i = e.index;
    i !== null && this.setIndex(i.clone());
    const s = e.attributes;
    for (const l in s) {
      const h = s[l];
      this.setAttribute(l, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const l in r) {
      const h = [], u = r[l];
      for (let d = 0, f = u.length; d < f; d++) h.push(u[d].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const u = a[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this._transformed = e._transformed, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ku {
  constructor(e, t) {
    this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Ic, this.updateRanges = [], this.version = 0, this.uuid = On();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, i) {
    e *= this.stride, i *= t.stride;
    for (let s = 0, r = this.stride; s < r; s++) this.array[e + s] = t.array[i + s];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {});
    const t = il(this.array);
    e.arrayBuffers[t] === void 0 && (e.arrayBuffers[t] = this.array.slice(0).buffer);
    const i = new this.array.constructor(e.arrayBuffers[t]), s = new this.constructor(i, this.stride);
    return s.setUsage(this.usage), s;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {});
    const t = il(this.array);
    e.arrayBuffers[t] === void 0 && (e.arrayBuffers[t] = Array.from(new Uint32Array(this.array.slice(0).buffer)));
    const i = { uuid: this.uuid, buffer: t, type: this.array.constructor.name, stride: this.stride };
    return i.usage = this.usage, i;
  }
}
function il(n) {
  return n.buffer._uuid === void 0 && (n.buffer._uuid = On()), n.byteOffset === 0 && n.byteLength === n.buffer.byteLength ? n.buffer._uuid : n.buffer._uuid + ":" + n.byteOffset + ":" + n.byteLength;
}
const zt = new L();
class Mr {
  constructor(e, t, i, s = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = e, this.itemSize = t, this.offset = i, this.normalized = s, this._normalizationScale = e !== void 0 ? br(e.array) : void 0;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.data.count; t < i; t++) zt.fromBufferAttribute(this, t), zt.applyMatrix4(e), this.setXYZ(t, zt.x, zt.y, zt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++) zt.fromBufferAttribute(this, t), zt.applyNormalMatrix(e), this.setXYZ(t, zt.x, zt.y, zt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++) zt.fromBufferAttribute(this, t), zt.transformDirection(e), this.setXYZ(t, zt.x, zt.y, zt.z);
    return this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (i = this._denormalize(i)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = this._normalize(i)), this.data.array[e * this.data.stride + this.offset + t] = i, this;
  }
  setX(e, t) {
    return this.normalized && (t = this._normalize(t)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = this._normalize(t)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = this._normalize(t)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = this._normalize(t)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  setXY(e, t, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = this._normalize(t), i = this._normalize(i)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = this._normalize(t), i = this._normalize(i), s = this._normalize(s)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = s, this;
  }
  setXYZW(e, t, i, s, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = this._normalize(t), i = this._normalize(i), s = this._normalize(s), r = this._normalize(r)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = s, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      Sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let i = 0; i < this.count; i++) {
        const s = i * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[s + r]);
      }
      return new hn(new this.array.constructor(t), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Mr(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      Sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let i = 0; i < this.count; i++) {
        const s = i * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[s + r]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
  _denormalize(e) {
    const t = this._normalizationScale;
    return t !== void 0 ? Math.max(e / t, -1) : mo(e, this.data.array);
  }
  _normalize(e) {
    const t = this._normalizationScale;
    return t !== void 0 ? Math.round(e * t) : go(e, this.data.array);
  }
}
const jr = new L(), Vu = new L(), Wu = new Ne();
class Pn {
  constructor(e = new L(1, 0, 0), t = 0) {
    this.isPlane = true, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, i, s) {
    return this.normal.set(e, t, i), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, i) {
    const s = jr.subVectors(i, t).cross(Vu.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t, i = true) {
    const s = e.delta(jr), r = this.normal.dot(s);
    if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const a = -(e.start.dot(this.normal) + this.constant) / r;
    return i === true && (a < 0 || a > 1) ? null : t.copy(e.start).addScaledVector(s, a);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), i = this.distanceToPoint(e.end);
    return t < 0 && i > 0 || i < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const i = t || Wu.getNormalMatrix(e), s = this.coplanarPoint(jr).applyMatrix4(e), r = this.normal.applyMatrix3(i).normalize();
    return this.constant = -s.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { normal: this.normal.toArray(), constant: this.constant };
  }
  fromJSON(e) {
    return this.normal.fromArray(e.normal), this.constant = e.constant, this;
  }
}
let Xu = 0;
class Mn extends fn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Xu++ }), this.uuid = On(), this.name = "", this.type = "Material", this.blending = is, this.side = Zn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = dc, this.blendDst = pc, this.blendEquation = Li, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new He(0, 0, 0), this.blendAlpha = 0, this.depthFunc = hs, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = eu, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Nr, this.stencilZFail = Nr, this.stencilZPass = Nr, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const t in e) {
      const i = e[t];
      if (i === void 0) {
        De(`Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const s = this[t];
      if (s === void 0) {
        De(`Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      s && s.isColor ? s.set(i) : s && s.isVector2 && i && i.isVector2 || s && s.isEuler && i && i.isEuler || s && s.isVector3 && i && i.isVector3 ? s.copy(i) : this[t] = i;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const i = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    i.uuid = this.uuid, i.type = this.type, i.blending = this.blending, i.side = this.side, i.shadowSide = this.shadowSide, i.vertexColors = this.vertexColors, i.opacity = this.opacity, i.transparent = this.transparent, i.blendSrc = this.blendSrc, i.blendDst = this.blendDst, i.blendEquation = this.blendEquation, i.blendSrcAlpha = this.blendSrcAlpha, i.blendDstAlpha = this.blendDstAlpha, i.blendEquationAlpha = this.blendEquationAlpha, i.blendColor = this.blendColor.getHex(), i.blendAlpha = this.blendAlpha, i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, i.colorWrite = this.colorWrite, i.clipIntersection = this.clipIntersection, i.clipShadows = this.clipShadows, i.stencilWriteMask = this.stencilWriteMask, i.stencilFunc = this.stencilFunc, i.stencilRef = this.stencilRef, i.stencilFuncMask = this.stencilFuncMask, i.stencilFail = this.stencilFail, i.stencilZFail = this.stencilZFail, i.stencilZPass = this.stencilZPass, i.stencilWrite = this.stencilWrite, i.polygonOffset = this.polygonOffset, i.polygonOffsetFactor = this.polygonOffsetFactor, i.polygonOffsetUnits = this.polygonOffsetUnits, i.dithering = this.dithering, i.alphaTest = this.alphaTest, i.alphaHash = this.alphaHash, i.alphaToCoverage = this.alphaToCoverage, i.premultipliedAlpha = this.premultipliedAlpha, i.forceSinglePass = this.forceSinglePass, i.allowOverride = this.allowOverride, i.visible = this.visible, i.toneMapped = this.toneMapped, i.name = this.name, this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.diffuseRoughness !== void 0 && (i.diffuseRoughness = this.diffuseRoughness), this.diffuseRoughnessMap && this.diffuseRoughnessMap.isTexture && (i.diffuseRoughnessMap = this.diffuseRoughnessMap.toJSON(e).uuid), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (i.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (i.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.retroreflectivity !== void 0 && (i.retroreflectivity = this.retroreflectivity), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessMinimum !== void 0 && (i.iridescenceThicknessMinimum = this.iridescenceThicknessMinimum), this.iridescenceThicknessMaximum !== void 0 && (i.iridescenceThicknessMaximum = this.iridescenceThicknessMaximum), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), Array.isArray(this.clippingPlanes) && this.clippingPlanes.length > 0 && (i.clippingPlanes = this.clippingPlanes.map((r) => r.toJSON())), this.rotation !== void 0 && (i.rotation = this.rotation), this.depthPacking !== void 0 && (i.depthPacking = this.depthPacking), this.linewidth !== void 0 && (i.linewidth = this.linewidth), this.linecap !== void 0 && (i.linecap = this.linecap), this.linejoin !== void 0 && (i.linejoin = this.linejoin), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.wireframe !== void 0 && (i.wireframe = this.wireframe), this.wireframeLinewidth !== void 0 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== void 0 && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== void 0 && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading !== void 0 && (i.flatShading = this.flatShading), this.fog !== void 0 && (i.fog = this.fog), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function s(r) {
      const a = [];
      for (const o in r) {
        const c = r[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const r = s(e.textures), a = s(e.images);
      r.length > 0 && (i.textures = r), a.length > 0 && (i.images = a);
    }
    return i;
  }
  fromJSON(e, t) {
    if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new He().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.diffuseRoughness !== void 0 && (this.diffuseRoughness = e.diffuseRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.retroreflectivity !== void 0 && (this.retroreflectivity = e.retroreflectivity), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessMinimum !== void 0 && (this.iridescenceThicknessMinimum = e.iridescenceThicknessMinimum), e.iridescenceThicknessMaximum !== void 0 && (this.iridescenceThicknessMaximum = e.iridescenceThicknessMaximum), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0], this.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1]), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.clippingPlanes !== void 0 && (this.clippingPlanes = e.clippingPlanes.map((i) => new Pn().fromJSON(i))), e.clipIntersection !== void 0 && (this.clipIntersection = e.clipIntersection), e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows), e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.linecap !== void 0 && (this.linecap = e.linecap), e.linejoin !== void 0 && (this.linejoin = e.linejoin), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? this.vertexColors = e.vertexColors > 0 : this.vertexColors = e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      let i = e.normalScale;
      Array.isArray(i) === false && (i = [i, i]), this.normalScale = new ne().fromArray(i);
    }
    return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new ne().fromArray(e.clearcoatNormalScale)), e.diffuseRoughnessMap !== void 0 && (this.diffuseRoughnessMap = t[e.diffuseRoughnessMap] || null), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let i = null;
    if (t !== null) {
      const s = t.length;
      i = new Array(s);
      for (let r = 0; r !== s; ++r) i[r] = t[r].clone();
    }
    return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
}
class Yu extends Mn {
  constructor(e) {
    super(), this.isSpriteMaterial = true, this.type = "SpriteMaterial", this.color = new He(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = true, this.transparent = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let Mi;
const Yi = new L(), Ei = new L(), yi = new L(), Ti = new ne(), qi = new ne(), Hc = new $e(), Ns = new L(), Zi = new L(), Fs = new L(), sl = new ne(), ea = new ne(), rl = new ne();
class Av extends _t {
  constructor(e = new Yu()) {
    if (super(), this.isSprite = true, this.type = "Sprite", Mi === void 0) {
      Mi = new kt();
      const t = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), i = new ku(t, 5);
      Mi.setIndex([0, 1, 2, 0, 2, 3]), Mi.setAttribute("position", new Mr(i, 3, 0, false)), Mi.setAttribute("uv", new Mr(i, 2, 3, false));
    }
    this.geometry = Mi, this.material = e, this.center = new ne(0.5, 0.5), this.count = 1;
  }
  intersectsFrustum(e) {
    return e.intersectsSprite(this);
  }
  raycast(e, t) {
    e.camera === null && Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Ei.setFromMatrixScale(this.matrixWorld), Hc.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), yi.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === false && Ei.multiplyScalar(-yi.z);
    const i = this.material.rotation;
    let s, r;
    i !== 0 && (r = Math.cos(i), s = Math.sin(i));
    const a = this.center;
    Os(Ns.set(-0.5, -0.5, 0), yi, a, Ei, s, r), Os(Zi.set(0.5, -0.5, 0), yi, a, Ei, s, r), Os(Fs.set(0.5, 0.5, 0), yi, a, Ei, s, r), sl.set(0, 0), ea.set(1, 0), rl.set(1, 1);
    let o = e.ray.intersectTriangle(Ns, Zi, Fs, false, Yi);
    if (o === null && (Os(Zi.set(-0.5, 0.5, 0), yi, a, Ei, s, r), ea.set(0, 1), o = e.ray.intersectTriangle(Ns, Fs, Zi, false, Yi), o === null)) return;
    const c = e.ray.origin.distanceTo(Yi);
    c < e.near || c > e.far || t.push({ distance: c, point: Yi.clone(), uv: tn.getInterpolation(Yi, Ns, Zi, Fs, sl, ea, rl, new ne()), face: null, object: this });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.center = this.center.toArray(), t;
  }
}
function Os(n, e, t, i, s, r) {
  Ti.subVectors(n, t).addScalar(0.5).multiply(i), s !== void 0 ? (qi.x = r * Ti.x - s * Ti.y, qi.y = s * Ti.x + r * Ti.y) : qi.copy(Ti), n.copy(e), n.x += qi.x, n.y += qi.y, n.applyMatrix4(Hc);
}
const wn = new L(), ta = new L(), Bs = new L(), zs = new L();
class Ss {
  constructor(e = new L(), t = new L(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, wn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const i = t.dot(this.direction);
    return i < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = wn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (wn.copy(this.origin).addScaledVector(this.direction, t), wn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, s) {
    ta.copy(e).add(t).multiplyScalar(0.5), Bs.copy(t).sub(e).normalize(), zs.copy(this.origin).sub(ta);
    const r = e.distanceTo(t) * 0.5, a = -this.direction.dot(Bs), o = zs.dot(this.direction), c = -zs.dot(Bs), l = zs.lengthSq(), h = Math.abs(1 - a * a);
    let u, d, f, g;
    if (h > 0) if (u = a * c - o, d = a * o - c, g = r * h, u >= 0) if (d >= -g) if (d <= g) {
      const S = 1 / h;
      u *= S, d *= S, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * c) + l;
    } else d = r, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * c) + l;
    else d = -r, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * c) + l;
    else d <= -g ? (u = Math.max(0, -(-a * r + o)), d = u > 0 ? -r : Math.min(Math.max(-r, -c), r), f = -u * u + d * (d + 2 * c) + l) : d <= g ? (u = 0, d = Math.min(Math.max(-r, -c), r), f = d * (d + 2 * c) + l) : (u = Math.max(0, -(a * r + o)), d = u > 0 ? r : Math.min(Math.max(-r, -c), r), f = -u * u + d * (d + 2 * c) + l);
    else d = a > 0 ? -r : r, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * c) + l;
    return i && i.copy(this.origin).addScaledVector(this.direction, u), s && s.copy(ta).addScaledVector(Bs, d), f;
  }
  intersectSphere(e, t) {
    if (e.radius < 0) return null;
    wn.subVectors(e.center, this.origin);
    const i = wn.dot(this.direction), s = wn.dot(wn) - i * i, r = e.radius * e.radius;
    if (s > r) return null;
    const a = Math.sqrt(r - s), o = i - a, c = i + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return e.radius < 0 ? false : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let i, s, r, a, o, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (i = (e.min.x - d.x) * l, s = (e.max.x - d.x) * l) : (i = (e.max.x - d.x) * l, s = (e.min.x - d.x) * l), h >= 0 ? (r = (e.min.y - d.y) * h, a = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, a = (e.min.y - d.y) * h), i > a || r > s || ((r > i || isNaN(i)) && (i = r), (a < s || isNaN(s)) && (s = a), u >= 0 ? (o = (e.min.z - d.z) * u, c = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, c = (e.min.z - d.z) * u), i > c || o > s) || ((o > i || i !== i) && (i = o), (c < s || s !== s) && (s = c), s < 0) ? null : this.at(i >= 0 ? i : s, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, wn) !== null;
  }
  intersectTriangle(e, t, i, s, r) {
    const a = this.origin, o = this.direction, c = o.x, l = o.y, h = o.z, u = e.x - a.x, d = e.y - a.y, f = e.z - a.z, g = t.x - a.x, S = t.y - a.y, p = t.z - a.z, m = i.x - a.x, M = i.y - a.y, T = i.z - a.z, E = Math.abs(c), R = Math.abs(l), A = Math.abs(h);
    let _, y, N, P, I, F, G, C, W, k, H, ee;
    if (E >= R && E >= A ? (N = c, F = u, W = g, ee = m, c >= 0 ? (_ = l, y = h, P = d, I = f, G = S, C = p, k = M, H = T) : (_ = h, y = l, P = f, I = d, G = p, C = S, k = T, H = M)) : R >= A ? (N = l, F = d, W = S, ee = M, l >= 0 ? (_ = h, y = c, P = f, I = u, G = p, C = g, k = T, H = m) : (_ = c, y = h, P = u, I = f, G = g, C = p, k = m, H = T)) : (N = h, F = f, W = p, ee = T, h >= 0 ? (_ = c, y = l, P = u, I = d, G = g, C = S, k = m, H = M) : (_ = l, y = c, P = d, I = u, G = S, C = g, k = M, H = m)), N === 0) return null;
    const X = _ / N, Q = y / N, j = 1 / N, Se = P - X * F, Le = I - Q * F, q = G - X * W, de = C - Q * W, ve = k - X * ee, Ae = H - Q * ee, pe = ve * de - Ae * q, be = Se * Ae - Le * ve, Ke = q * Le - de * Se;
    if (s) {
      if (pe < 0 || be < 0 || Ke < 0) return null;
    } else if ((pe < 0 || be < 0 || Ke < 0) && (pe > 0 || be > 0 || Ke > 0)) return null;
    const we = pe + be + Ke;
    if (we === 0) return null;
    const et = j * (pe * F + be * W + Ke * ee);
    return (we > 0 ? et < 0 : et > 0) ? null : this.at(et / we, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class qu extends Mn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new He(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Fn(), this.combine = mc, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const al = new $e(), ni = new Ss(), Hs = new hi(), ol = new L(), Gs = new L(), ks = new L(), Vs = new L(), na = new L(), Ws = new L(), ll = new L(), Xs = new L();
class un extends _t {
  constructor(e = new kt(), t = new qu()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 ? this.morphTargetInfluences = e.morphTargetInfluences.slice() : this.morphTargetInfluences = void 0, e.morphTargetDictionary !== void 0 ? this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary) : this.morphTargetDictionary = void 0, this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const s = t[i[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const i = this.geometry, s = i.attributes.position, r = i.morphAttributes.position, a = i.morphTargetsRelative;
    t.fromBufferAttribute(s, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      Ws.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const h = o[c], u = r[c];
        h !== 0 && (na.fromBufferAttribute(u, e), a ? Ws.addScaledVector(na, h) : Ws.addScaledVector(na.sub(t), h));
      }
      t.add(Ws);
    }
    return t;
  }
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  raycast(e, t) {
    const i = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), Hs.copy(i.boundingSphere), Hs.applyMatrix4(r), ni.copy(e.ray).recast(e.near), !(Hs.containsPoint(ni.origin) === false && (ni.intersectSphere(Hs, ol) === null || ni.origin.distanceToSquared(ol) > (e.far - e.near) ** 2)) && (al.copy(r).invert(), ni.copy(e.ray).applyMatrix4(al), !(i.boundingBox !== null && ni.intersectsBox(i.boundingBox) === false) && this._computeIntersections(e, t, ni)));
  }
  _computeIntersections(e, t, i) {
    let s;
    const r = this.geometry, a = this.material, o = r.index, c = r.attributes.position, l = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, f = r.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let g = 0, S = d.length; g < S; g++) {
      const p = d[g], m = a[p.materialIndex], M = Math.max(p.start, f.start), T = Math.min(o.count, Math.min(p.start + p.count, f.start + f.count));
      for (let E = M, R = T; E < R; E += 3) {
        const A = o.getX(E), _ = o.getX(E + 1), y = o.getX(E + 2);
        s = Ys(this, m, e, i, l, h, u, A, _, y), s && (s.faceIndex = Math.floor(E / 3), s.face.materialIndex = p.materialIndex, t.push(s));
      }
    }
    else {
      const g = Math.max(0, f.start), S = Math.min(o.count, f.start + f.count);
      for (let p = g, m = S; p < m; p += 3) {
        const M = o.getX(p), T = o.getX(p + 1), E = o.getX(p + 2);
        s = Ys(this, a, e, i, l, h, u, M, T, E), s && (s.faceIndex = Math.floor(p / 3), t.push(s));
      }
    }
    else if (c !== void 0) if (Array.isArray(a)) for (let g = 0, S = d.length; g < S; g++) {
      const p = d[g], m = a[p.materialIndex], M = Math.max(p.start, f.start), T = Math.min(c.count, Math.min(p.start + p.count, f.start + f.count));
      for (let E = M, R = T; E < R; E += 3) {
        const A = E, _ = E + 1, y = E + 2;
        s = Ys(this, m, e, i, l, h, u, A, _, y), s && (s.faceIndex = Math.floor(E / 3), s.face.materialIndex = p.materialIndex, t.push(s));
      }
    }
    else {
      const g = Math.max(0, f.start), S = Math.min(c.count, f.start + f.count);
      for (let p = g, m = S; p < m; p += 3) {
        const M = p, T = p + 1, E = p + 2;
        s = Ys(this, a, e, i, l, h, u, M, T, E), s && (s.faceIndex = Math.floor(p / 3), t.push(s));
      }
    }
  }
}
function Zu(n, e, t, i, s, r, a, o) {
  let c;
  if (e.side === wt ? c = i.intersectTriangle(a, r, s, true, o) : c = i.intersectTriangle(s, r, a, e.side === Zn, o), c === null) return null;
  Xs.copy(o), Xs.applyMatrix4(n.matrixWorld);
  const l = t.ray.origin.distanceTo(Xs);
  return l < t.near || l > t.far ? null : { distance: l, point: Xs.clone(), object: n };
}
function Ys(n, e, t, i, s, r, a, o, c, l) {
  n.getVertexPosition(o, Gs), n.getVertexPosition(c, ks), n.getVertexPosition(l, Vs);
  const h = Zu(n, e, t, i, Gs, ks, Vs, ll);
  if (h) {
    const u = new L();
    tn.getBarycoord(ll, Gs, ks, Vs, u), s && (h.uv = tn.getInterpolatedAttribute(s, o, c, l, u, new ne())), r && (h.uv1 = tn.getInterpolatedAttribute(r, o, c, l, u, new ne())), a && (h.normal = tn.getInterpolatedAttribute(a, o, c, l, u, new L()), h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = { a: o, b: c, c: l, normal: new L(), materialIndex: 0 };
    tn.getNormal(Gs, ks, Vs, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
class Gc extends Mt {
  constructor(e = null, t = 1, i = 1, s, r, a, o, c, l = Lt, h = Lt, u, d) {
    super(null, a, o, c, l, h, s, r, u, d), this.isDataTexture = true, this.image = { data: e, width: t, height: i }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class cl extends hn {
  constructor(e, t, i, s = 1) {
    super(e, t, i), this.isInstancedBufferAttribute = true, this.meshPerAttribute = s;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = true, e;
  }
}
const bi = new $e(), hl = new $e(), qs = [], ul = new ci(), Ku = new $e(), Ki = new un(), Ji = new hi();
class Rv extends un {
  constructor(e, t, i) {
    super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new cl(new Float32Array(i * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = i, this.boundingBox = null, this.boundingSphere = null;
    for (let s = 0; s < i; s++) this.setMatrixAt(s, Ku);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new ci()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let i = 0; i < t; i++) this.getMatrixAt(i, bi), ul.copy(e.boundingBox).applyMatrix4(bi), this.boundingBox.union(ul);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new hi()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let i = 0; i < t; i++) this.getMatrixAt(i, bi), Ji.copy(e.boundingSphere).applyMatrix4(bi), this.boundingSphere.union(Ji);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), this.morphTexture = e.morphTexture !== null ? e.morphTexture.clone() : null, this.instanceColor = e.instanceColor !== null ? e.instanceColor.clone() : null, this.count = e.count, this.boundingBox = e.boundingBox !== null ? e.boundingBox.clone() : null, this.boundingSphere = e.boundingSphere !== null ? e.boundingSphere.clone() : null, this;
  }
  getColorAt(e, t) {
    return this.instanceColor === null ? t.setRGB(1, 1, 1) : t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    return t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const i = t.morphTargetInfluences, s = this.morphTexture.source.data.data, r = i.length + 1, a = e * r + 1;
    for (let o = 0; o < i.length; o++) i[o] = s[a + o];
  }
  raycast(e, t) {
    const i = this.matrixWorld, s = this.count;
    if (Ki.geometry = this.geometry, Ki.material = this.material, Ki.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Ji.copy(this.boundingSphere), Ji.applyMatrix4(i), e.ray.intersectsSphere(Ji) !== false)) for (let r = 0; r < s; r++) {
      this.getMatrixAt(r, bi), hl.multiplyMatrices(i, bi), Ki.matrixWorld = hl, Ki.raycast(e, qs);
      for (let a = 0, o = qs.length; a < o; a++) {
        const c = qs[a];
        c.instanceId = r, c.object = this, t.push(c);
      }
      qs.length = 0;
    }
  }
  setColorAt(e, t) {
    return this.instanceColor === null && (this.instanceColor = new cl(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3), this;
  }
  setMatrixAt(e, t) {
    return t.toArray(this.instanceMatrix.array, e * 16), this;
  }
  setMorphAt(e, t) {
    const i = t.morphTargetInfluences, s = i.length + 1;
    this.morphTexture === null && (this.morphTexture = new Gc(new Float32Array(s * this.count), s, this.count, co, nn));
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let l = 0; l < i.length; l++) a += i[l];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, c = s * e;
    return r[c] = o, r.set(i, c + 1), this;
  }
  updateMorphTargets() {
  }
  dispose() {
    super.dispose(), this.instanceMatrix.dispose(), this.instanceColor !== null && this.instanceColor.dispose(), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}
const ii = new hi(), Ju = new ne(0.5, 0.5), Zs = new L();
class gs {
  constructor(e = new Pn(), t = new Pn(), i = new Pn(), s = new Pn(), r = new Pn(), a = new Pn()) {
    this.planes = [e, t, i, s, r, a];
  }
  set(e, t, i, s, r, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(i), o[3].copy(s), o[4].copy(r), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) t[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e, t = cn, i = false) {
    const s = this.planes, r = e.elements, a = r[0], o = r[1], c = r[2], l = r[3], h = r[4], u = r[5], d = r[6], f = r[7], g = r[8], S = r[9], p = r[10], m = r[11], M = r[12], T = r[13], E = r[14], R = r[15];
    if (s[0].setComponents(l - a, f - h, m - g, R - M).normalize(), s[1].setComponents(l + a, f + h, m + g, R + M).normalize(), s[2].setComponents(l + o, f + u, m + S, R + T).normalize(), s[3].setComponents(l - o, f - u, m - S, R - T).normalize(), i) s[4].setComponents(c, d, p, E).normalize(), s[5].setComponents(l - c, f - d, m - p, R - E).normalize();
    else if (s[4].setComponents(l - c, f - d, m - p, R - E).normalize(), t === cn) s[5].setComponents(l + c, f + d, m + p, R + E).normalize();
    else if (t === ds) s[5].setComponents(c, d, p, E).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(ii);
  }
  intersectsSprite(e) {
    ii.center.set(0, 0, 0);
    const t = Ju.distanceTo(e.center);
    return ii.radius = 0.7071067811865476 + t, ii.applyMatrix4(e.matrixWorld), this.intersectsSphere(ii);
  }
  intersectsSphere(e) {
    const t = this.planes, i = e.center, s = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(i) < s) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const s = t[i];
      if (Zs.x = s.normal.x > 0 ? e.max.x : e.min.x, Zs.y = s.normal.y > 0 ? e.max.y : e.min.y, Zs.z = s.normal.z > 0 ? e.max.z : e.min.z, s.distanceToPoint(Zs) < 0) return false;
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) if (t[i].distanceToPoint(e) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const fl = new $e();
class xo {
  constructor() {
    this.coordinateSystem = cn, this._frustums = [], this._count = 0;
  }
  setFromArrayCamera(e) {
    const t = e.cameras, i = this._frustums;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      fl.multiplyMatrices(r.projectionMatrix, r.matrixWorldInverse), i[s] === void 0 && (i[s] = new gs()), i[s].setFromProjectionMatrix(fl, r.coordinateSystem, r.reversedDepth);
    }
    return this._count = t.length, this;
  }
  getFrustum(e) {
    return this._frustums[e];
  }
  intersectsObject(e) {
    const t = this._frustums;
    for (let i = 0; i < this._count; i++) if (t[i].intersectsObject(e)) return true;
    return false;
  }
  intersectsSprite(e) {
    const t = this._frustums;
    for (let i = 0; i < this._count; i++) if (t[i].intersectsSprite(e)) return true;
    return false;
  }
  intersectsSphere(e) {
    const t = this._frustums;
    for (let i = 0; i < this._count; i++) if (t[i].intersectsSphere(e)) return true;
    return false;
  }
  intersectsBox(e) {
    const t = this._frustums;
    for (let i = 0; i < this._count; i++) if (t[i].intersectsBox(e)) return true;
    return false;
  }
  containsPoint(e) {
    const t = this._frustums;
    for (let i = 0; i < this._count; i++) if (t[i].containsPoint(e)) return true;
    return false;
  }
  copy(e) {
    this.coordinateSystem = e.coordinateSystem;
    const t = this._frustums, i = e._frustums;
    for (let s = 0; s < e._count; s++) t[s] === void 0 && (t[s] = new gs()), t[s].copy(i[s]);
    return this._count = e._count, this;
  }
  clone() {
    return new xo().copy(this);
  }
}
class $u extends Mn {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new He(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Er = new L(), yr = new L(), dl = new $e(), $i = new Ss(), Ks = new hi(), ia = new L(), pl = new L();
class Qu extends _t {
  constructor(e = new kt(), t = new $u()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 ? this.morphTargetInfluences = e.morphTargetInfluences.slice() : this.morphTargetInfluences = void 0, e.morphTargetDictionary !== void 0 ? this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary) : this.morphTargetDictionary = void 0, this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, i = [0];
      for (let s = 1, r = t.count; s < r; s++) Er.fromBufferAttribute(t, s - 1), yr.fromBufferAttribute(t, s), i[s] = i[s - 1], i[s] += Er.distanceTo(yr);
      e.setAttribute("lineDistance", new dt(i, 1));
    } else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  raycast(e, t) {
    const i = this.geometry, s = this.matrixWorld, r = e.params.Line.threshold, a = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Ks.copy(i.boundingSphere), Ks.applyMatrix4(s), Ks.radius += r, e.ray.intersectsSphere(Ks) === false) return;
    dl.copy(s).invert(), $i.copy(e.ray).applyMatrix4(dl);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = this.isLineSegments ? 2 : 1, h = i.index, d = i.attributes.position;
    if (h !== null) {
      const f = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count);
      for (let S = f, p = g - 1; S < p; S += l) {
        const m = h.getX(S), M = h.getX(S + 1), T = Js(this, e, $i, c, m, M, S);
        T && t.push(T);
      }
      if (this.isLineLoop) {
        const S = h.getX(g - 1), p = h.getX(f), m = Js(this, e, $i, c, S, p, g - 1);
        m && t.push(m);
      }
    } else {
      const f = Math.max(0, a.start), g = Math.min(d.count, a.start + a.count);
      for (let S = f, p = g - 1; S < p; S += l) {
        const m = Js(this, e, $i, c, S, S + 1, S);
        m && t.push(m);
      }
      if (this.isLineLoop) {
        const S = Js(this, e, $i, c, g - 1, f, g - 1);
        S && t.push(S);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const s = t[i[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function Js(n, e, t, i, s, r, a) {
  const o = n.geometry.attributes.position;
  if (Er.fromBufferAttribute(o, s), yr.fromBufferAttribute(o, r), t.distanceSqToSegment(Er, yr, ia, pl) > i) return;
  ia.applyMatrix4(n.matrixWorld);
  const l = e.ray.origin.distanceTo(ia);
  if (!(l < e.near || l > e.far)) return { distance: l, point: pl.clone().applyMatrix4(n.matrixWorld), index: a, face: null, faceIndex: null, barycoord: null, object: n };
}
const ml = new L(), gl = new L();
class wv extends Qu {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, i = [];
      for (let s = 0, r = t.count; s < r; s += 2) ml.fromBufferAttribute(t, s), gl.fromBufferAttribute(t, s + 1), i[s] = s === 0 ? 0 : i[s - 1], i[s + 1] = i[s] + ml.distanceTo(gl);
      e.setAttribute("lineDistance", new dt(i, 1));
    } else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class ju extends Mn {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new He(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const _l = new $e(), ja = new Ss(), $s = new hi(), Qs = new L();
class Cv extends _t {
  constructor(e = new kt(), t = new ju()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 ? this.morphTargetInfluences = e.morphTargetInfluences.slice() : this.morphTargetInfluences = void 0, e.morphTargetDictionary !== void 0 ? this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary) : this.morphTargetDictionary = void 0, this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  raycast(e, t) {
    const i = this.geometry, s = this.matrixWorld, r = e.params.Points.threshold, a = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), $s.copy(i.boundingSphere), $s.applyMatrix4(s), $s.radius += r, e.ray.intersectsSphere($s) === false) return;
    _l.copy(s).invert(), ja.copy(e.ray).applyMatrix4(_l);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = i.index, u = i.attributes.position;
    if (l !== null) {
      const d = Math.max(0, a.start), f = Math.min(l.count, a.start + a.count);
      for (let g = d, S = f; g < S; g++) {
        const p = l.getX(g);
        Qs.fromBufferAttribute(u, p), vl(Qs, p, c, s, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start), f = Math.min(u.count, a.start + a.count);
      for (let g = d, S = f; g < S; g++) Qs.fromBufferAttribute(u, g), vl(Qs, g, c, s, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const s = t[i[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function vl(n, e, t, i, s, r, a) {
  const o = ja.distanceSqToPoint(n);
  if (o < t) {
    const c = new L();
    ja.closestPointToPoint(n, c), c.applyMatrix4(i);
    const l = s.ray.origin.distanceTo(c);
    if (l < s.near || l > s.far) return;
    r.push({ distance: l, distanceToRay: Math.sqrt(o), point: c, index: e, face: null, faceIndex: null, barycoord: null, object: a });
  }
}
class kc extends Mt {
  constructor(e = [], t = Fi, i, s, r, a, o, c, l, h) {
    super(e, t, i, s, r, a, o, c, l, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Pv extends Mt {
  constructor(e, t, i, s, r, a, o, c, l) {
    super(e, t, i, s, r, a, o, c, l), this.isCanvasTexture = true, this.needsUpdate = true;
  }
}
class Nn extends Mt {
  constructor(e, t, i = xn, s, r, a, o = Lt, c = Lt, l, h = Kn, u = 1) {
    if (h !== Kn && h !== Ln) throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const d = { width: e, height: t, depth: u };
    super(d, s, r, a, o, c, h, i, l), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new _o(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.compareFunction = this.compareFunction, t;
  }
}
class Vc extends Nn {
  constructor(e, t = xn, i = Fi, s, r, a = Lt, o = Lt, c, l = Kn) {
    const h = { width: e, height: e, depth: 1 }, u = [h, h, h, h, h, h];
    super(e, e, t, i, s, r, a, o, c, l), this.image = u, this.isCubeDepthTexture = true, this.isCubeTexture = true;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Wc extends Mt {
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = true;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class Ms extends kt {
  constructor(e = 1, t = 1, i = 1, s = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: i, widthSegments: s, heightSegments: r, depthSegments: a };
    const o = this;
    s = Math.floor(s), r = Math.floor(r), a = Math.floor(a);
    const c = [], l = [], h = [], u = [];
    let d = 0, f = 0;
    g("z", "y", "x", -1, -1, i, t, e, a, r, 0), g("z", "y", "x", 1, -1, i, t, -e, a, r, 1), g("x", "z", "y", 1, 1, e, i, t, s, a, 2), g("x", "z", "y", 1, -1, e, i, -t, s, a, 3), g("x", "y", "z", 1, -1, e, t, i, s, r, 4), g("x", "y", "z", -1, -1, e, t, -i, s, r, 5), this.setIndex(c), this.setAttribute("position", new dt(l, 3)), this.setAttribute("normal", new dt(h, 3)), this.setAttribute("uv", new dt(u, 2));
    function g(S, p, m, M, T, E, R, A, _, y, N) {
      const P = E / _, I = R / y, F = E / 2, G = R / 2, C = A / 2, W = _ + 1, k = y + 1;
      let H = 0, ee = 0;
      const X = new L();
      for (let Q = 0; Q < k; Q++) {
        const j = Q * I - G;
        for (let Se = 0; Se < W; Se++) {
          const Le = Se * P - F;
          X[S] = Le * M, X[p] = j * T, X[m] = C, l.push(X.x, X.y, X.z), X[S] = 0, X[p] = 0, X[m] = A > 0 ? 1 : -1, h.push(X.x, X.y, X.z), u.push(Se / _), u.push(1 - Q / y), H += 1;
        }
      }
      for (let Q = 0; Q < y; Q++) for (let j = 0; j < _; j++) {
        const Se = d + j + W * Q, Le = d + j + W * (Q + 1), q = d + (j + 1) + W * (Q + 1), de = d + (j + 1) + W * Q;
        c.push(Se, Le, de), c.push(Le, q, de), ee += 6;
      }
      o.addGroup(f, ee, N), f += ee, d += H;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ms(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
class So extends kt {
  constructor(e = 1, t = 1, i = 1, s = 32, r = 1, a = false, o = 0, c = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: e, radiusBottom: t, height: i, radialSegments: s, heightSegments: r, openEnded: a, thetaStart: o, thetaLength: c };
    const l = this;
    s = Math.floor(s), r = Math.floor(r);
    const h = [], u = [], d = [], f = [];
    let g = 0;
    const S = [], p = i / 2;
    let m = 0;
    M(), a === false && (e > 0 && T(true), t > 0 && T(false)), this.setIndex(h), this.setAttribute("position", new dt(u, 3)), this.setAttribute("normal", new dt(d, 3)), this.setAttribute("uv", new dt(f, 2));
    function M() {
      const E = new L(), R = new L();
      let A = 0;
      const _ = (t - e) / i;
      for (let y = 0; y <= r; y++) {
        const N = [], P = y / r, I = P * (t - e) + e;
        for (let F = 0; F <= s; F++) {
          const G = F / s, C = G * c + o, W = Math.sin(C), k = Math.cos(C);
          R.x = I * W, R.y = -P * i + p, R.z = I * k, u.push(R.x, R.y, R.z), E.set(W, _, k).normalize(), d.push(E.x, E.y, E.z), f.push(G, 1 - P), N.push(g++);
        }
        S.push(N);
      }
      for (let y = 0; y < s; y++) for (let N = 0; N < r; N++) {
        const P = S[N][y], I = S[N + 1][y], F = S[N + 1][y + 1], G = S[N][y + 1];
        (e > 0 || N !== 0) && (h.push(P, I, G), A += 3), (t > 0 || N !== r - 1) && (h.push(I, F, G), A += 3);
      }
      l.addGroup(m, A, 0), m += A;
    }
    function T(E) {
      const R = g, A = new ne(), _ = new L();
      let y = 0;
      const N = E === true ? e : t, P = E === true ? 1 : -1;
      for (let F = 1; F <= s; F++) u.push(0, p * P, 0), d.push(0, P, 0), f.push(0.5, 0.5), g++;
      const I = g;
      for (let F = 0; F <= s; F++) {
        const C = F / s * c + o, W = Math.cos(C), k = Math.sin(C);
        _.x = N * k, _.y = p * P, _.z = N * W, u.push(_.x, _.y, _.z), d.push(0, P, 0), A.x = W * 0.5 + 0.5, A.y = k * 0.5 * P + 0.5, f.push(A.x, A.y), g++;
      }
      for (let F = 0; F < s; F++) {
        const G = R + F, C = I + F;
        E === true ? h.push(C, C + 1, G) : h.push(C + 1, C, G), y += 3;
      }
      l.addGroup(m, y, E === true ? 1 : 2), m += y;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new So(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Xc extends So {
  constructor(e = 1, t = 1, i = 32, s = 1, r = false, a = 0, o = Math.PI * 2) {
    super(0, e, t, i, s, r, a, o), this.type = "ConeGeometry", this.parameters = { radius: e, height: t, radialSegments: i, heightSegments: s, openEnded: r, thetaStart: a, thetaLength: o };
  }
  static fromJSON(e) {
    return new Xc(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class En {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
  }
  getPoint() {
    De("Curve: .getPoint() not implemented.");
  }
  getPointAt(e, t) {
    const i = this.getUtoTmapping(e);
    return this.getPoint(i, t);
  }
  getPoints(e = 5) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
    return t;
  }
  getSpacedPoints(e = 5) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPointAt(i / e));
    return t;
  }
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = false;
    const t = [];
    let i, s = this.getPoint(0), r = 0;
    t.push(0);
    for (let a = 1; a <= e; a++) i = this.getPoint(a / e), r += i.distanceTo(s), t.push(r), s = i;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = true, this.getLengths();
  }
  getUtoTmapping(e, t = null) {
    const i = this.getLengths();
    let s = 0;
    const r = i.length;
    let a;
    t ? a = t : a = e * i[r - 1];
    let o = 0, c = r - 1, l;
    for (; o <= c; ) if (s = Math.floor(o + (c - o) / 2), l = i[s] - a, l < 0) o = s + 1;
    else if (l > 0) c = s - 1;
    else {
      c = s;
      break;
    }
    if (s = c, i[s] === a) return s / (r - 1);
    const h = i[s], d = i[s + 1] - h, f = (a - h) / d;
    return (s + f) / (r - 1);
  }
  getTangent(e, t) {
    let s = e - 1e-4, r = e + 1e-4;
    s < 0 && (s = 0), r > 1 && (r = 1);
    const a = this.getPoint(s), o = this.getPoint(r), c = t || (a.isVector2 ? new ne() : new L());
    return c.copy(o).sub(a).normalize(), c;
  }
  getTangentAt(e, t) {
    const i = this.getUtoTmapping(e);
    return this.getTangent(i, t);
  }
  computeFrenetFrames(e, t = false) {
    const i = new L(), s = [], r = [], a = [], o = new L(), c = new $e();
    for (let f = 0; f <= e; f++) {
      const g = f / e;
      s[f] = this.getTangentAt(g, new L());
    }
    r[0] = new L(), a[0] = new L();
    let l = Number.MAX_VALUE;
    const h = Math.abs(s[0].x), u = Math.abs(s[0].y), d = Math.abs(s[0].z);
    h <= l && (l = h, i.set(1, 0, 0)), u <= l && (l = u, i.set(0, 1, 0)), d <= l && i.set(0, 0, 1), o.crossVectors(s[0], i).normalize(), r[0].crossVectors(s[0], o), a[0].crossVectors(s[0], r[0]);
    for (let f = 1; f <= e; f++) {
      if (r[f] = r[f - 1].clone(), a[f] = a[f - 1].clone(), o.crossVectors(s[f - 1], s[f]), o.length() > Number.EPSILON) {
        o.normalize();
        const g = Math.acos(ze(s[f - 1].dot(s[f]), -1, 1));
        r[f].applyMatrix4(c.makeRotationAxis(o, g));
      }
      a[f].crossVectors(s[f], r[f]);
    }
    if (t === true) {
      let f = Math.acos(ze(r[0].dot(r[e]), -1, 1));
      f /= e, s[0].dot(o.crossVectors(r[0], r[e])) > 0 && (f = -f);
      for (let g = 1; g <= e; g++) r[g].applyMatrix4(c.makeRotationAxis(s[g], f * g)), a[g].crossVectors(s[g], r[g]);
    }
    return { tangents: s, normals: r, binormals: a };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this.cacheArcLengths = null, this;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" } };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this.cacheArcLengths = null, this;
  }
}
class Mo extends En {
  constructor(e = 0, t = 0, i = 1, s = 1, r = 0, a = Math.PI * 2, o = false, c = 0) {
    super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = i, this.yRadius = s, this.aStartAngle = r, this.aEndAngle = a, this.aClockwise = o, this.aRotation = c;
  }
  getPoint(e, t = new ne()) {
    const i = t, s = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += s;
    for (; r > s; ) r -= s;
    r < Number.EPSILON && (a ? r = 0 : r = s), this.aClockwise === true && !a && (r === s ? r = -s : r = r - s);
    const o = this.aStartAngle + e * r;
    let c = this.aX + this.xRadius * Math.cos(o), l = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = c - this.aX, f = l - this.aY;
      c = d * h - f * u + this.aX, l = d * u + f * h + this.aY;
    }
    return i.set(c, l);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}
class ef extends Mo {
  constructor(e, t, i, s, r, a) {
    super(e, t, i, i, s, r, a), this.isArcCurve = true, this.type = "ArcCurve";
  }
}
function Eo() {
  let n = 0, e = 0, t = 0, i = 0;
  function s(r, a, o, c) {
    n = r, e = o, t = -3 * r + 3 * a - 2 * o - c, i = 2 * r - 2 * a + o + c;
  }
  return { initCatmullRom: function(r, a, o, c, l) {
    s(a, o, l * (o - r), l * (c - a));
  }, initNonuniformCatmullRom: function(r, a, o, c, l, h, u) {
    let d = (a - r) / l - (o - r) / (l + h) + (o - a) / h, f = (o - a) / h - (c - a) / (h + u) + (c - o) / u;
    d *= h, f *= h, s(a, o, d, f);
  }, calc: function(r) {
    const a = r * r, o = a * r;
    return n + e * r + t * a + i * o;
  } };
}
const xl = new L(), Sl = new L(), sa = new Eo(), ra = new Eo(), aa = new Eo();
class tf extends En {
  constructor(e = [], t = false, i = "centripetal", s = 0.5) {
    super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = i, this.tension = s;
  }
  getPoint(e, t = new L()) {
    const i = t, s = this.points, r = s.length, a = (r - (this.closed ? 0 : 1)) * e;
    let o = Math.floor(a), c = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r) + 1) * r : c === 0 && o === r - 1 && (o = r - 2, c = 1);
    let l, h;
    this.closed || o > 0 ? l = s[(o - 1) % r] : (Sl.subVectors(s[0], s[1]).add(s[0]), l = Sl);
    const u = s[o % r], d = s[(o + 1) % r];
    if (this.closed || o + 2 < r ? h = s[(o + 2) % r] : (xl.subVectors(s[r - 1], s[r - 2]).add(s[r - 1]), h = xl), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(l.distanceToSquared(u), f), S = Math.pow(u.distanceToSquared(d), f), p = Math.pow(d.distanceToSquared(h), f);
      S < 1e-4 && (S = 1), g < 1e-4 && (g = S), p < 1e-4 && (p = S), sa.initNonuniformCatmullRom(l.x, u.x, d.x, h.x, g, S, p), ra.initNonuniformCatmullRom(l.y, u.y, d.y, h.y, g, S, p), aa.initNonuniformCatmullRom(l.z, u.z, d.z, h.z, g, S, p);
    } else this.curveType === "catmullrom" && (sa.initCatmullRom(l.x, u.x, d.x, h.x, this.tension), ra.initCatmullRom(l.y, u.y, d.y, h.y, this.tension), aa.initCatmullRom(l.z, u.z, d.z, h.z, this.tension));
    return i.set(sa.calc(c), ra.calc(c), aa.calc(c)), i;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const s = e.points[t];
      this.points.push(s.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, i = this.points.length; t < i; t++) {
      const s = this.points[t];
      e.points.push(s.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const s = e.points[t];
      this.points.push(new L().fromArray(s));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function Ml(n, e, t, i, s) {
  const r = (i - e) * 0.5, a = (s - t) * 0.5, o = n * n, c = n * o;
  return (2 * t - 2 * i + r + a) * c + (-3 * t + 3 * i - 2 * r - a) * o + r * n + t;
}
function nf(n, e) {
  const t = 1 - n;
  return t * t * e;
}
function sf(n, e) {
  return 2 * (1 - n) * n * e;
}
function rf(n, e) {
  return n * n * e;
}
function as(n, e, t, i) {
  return nf(n, e) + sf(n, t) + rf(n, i);
}
function af(n, e) {
  const t = 1 - n;
  return t * t * t * e;
}
function of(n, e) {
  const t = 1 - n;
  return 3 * t * t * n * e;
}
function lf(n, e) {
  return 3 * (1 - n) * n * n * e;
}
function cf(n, e) {
  return n * n * n * e;
}
function os(n, e, t, i, s) {
  return af(n, e) + of(n, t) + lf(n, i) + cf(n, s);
}
class Yc extends En {
  constructor(e = new ne(), t = new ne(), i = new ne(), s = new ne()) {
    super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = s;
  }
  getPoint(e, t = new ne()) {
    const i = t, s = this.v0, r = this.v1, a = this.v2, o = this.v3;
    return i.set(os(e, s.x, r.x, a.x, o.x), os(e, s.y, r.y, a.y, o.y)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class hf extends En {
  constructor(e = new L(), t = new L(), i = new L(), s = new L()) {
    super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = s;
  }
  getPoint(e, t = new L()) {
    const i = t, s = this.v0, r = this.v1, a = this.v2, o = this.v3;
    return i.set(os(e, s.x, r.x, a.x, o.x), os(e, s.y, r.y, a.y, o.y), os(e, s.z, r.z, a.z, o.z)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class qc extends En {
  constructor(e = new ne(), t = new ne()) {
    super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new ne()) {
    const i = t;
    return e === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new ne()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class uf extends En {
  constructor(e = new L(), t = new L()) {
    super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new L()) {
    const i = t;
    return e === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new L()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Zc extends En {
  constructor(e = new ne(), t = new ne(), i = new ne()) {
    super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i;
  }
  getPoint(e, t = new ne()) {
    const i = t, s = this.v0, r = this.v1, a = this.v2;
    return i.set(as(e, s.x, r.x, a.x), as(e, s.y, r.y, a.y)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class ff extends En {
  constructor(e = new L(), t = new L(), i = new L()) {
    super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i;
  }
  getPoint(e, t = new L()) {
    const i = t, s = this.v0, r = this.v1, a = this.v2;
    return i.set(as(e, s.x, r.x, a.x), as(e, s.y, r.y, a.y), as(e, s.z, r.z, a.z)), i;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Kc extends En {
  constructor(e = []) {
    super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new ne()) {
    const i = t, s = this.points, r = (s.length - 1) * e, a = Math.floor(r), o = r - a, c = s[a === 0 ? a : a - 1], l = s[a], h = s[a > s.length - 2 ? s.length - 1 : a + 1], u = s[a > s.length - 3 ? s.length - 1 : a + 2];
    return i.set(Ml(o, c.x, l.x, h.x, u.x), Ml(o, c.y, l.y, h.y, u.y)), i;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const s = e.points[t];
      this.points.push(s.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, i = this.points.length; t < i; t++) {
      const s = this.points[t];
      e.points.push(s.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, i = e.points.length; t < i; t++) {
      const s = e.points[t];
      this.points.push(new ne().fromArray(s));
    }
    return this;
  }
}
var El = Object.freeze({ __proto__: null, ArcCurve: ef, CatmullRomCurve3: tf, CubicBezierCurve: Yc, CubicBezierCurve3: hf, EllipseCurve: Mo, LineCurve: qc, LineCurve3: uf, QuadraticBezierCurve: Zc, QuadraticBezierCurve3: ff, SplineCurve: Kc });
class df extends En {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = false, this.cacheLengths = null;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      const i = e.isVector2 === true ? "LineCurve" : "LineCurve3";
      this.curves.push(new El[i](t, e));
    }
    return this;
  }
  getPoint(e, t) {
    const i = e * this.getLength(), s = this.getCurveLengths();
    let r = 0;
    for (; r < s.length; ) {
      if (s[r] >= i) {
        const a = s[r] - i, o = this.curves[r], c = o.getLength(), l = c === 0 ? 0 : 1 - a / c;
        return o.getPointAt(l, t);
      }
      r++;
    }
    return null;
  }
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let i = 0, s = this.curves.length; i < s; i++) t += this.curves[i].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let i;
    for (let s = 0, r = this.curves; s < r.length; s++) {
      const a = r[s], o = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e, c = a.getPoints(o);
      for (let l = 0; l < c.length; l++) {
        const h = c[l];
        i && i.equals(h) || (t.push(h), i = h);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, i = e.curves.length; t < i; t++) {
      const s = e.curves[t];
      this.curves.push(s.clone());
    }
    return this.autoClose = e.autoClose, this.cacheLengths = null, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, i = this.curves.length; t < i; t++) {
      const s = this.curves[t];
      e.curves.push(s.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, i = e.curves.length; t < i; t++) {
      const s = e.curves[t];
      this.curves.push(new El[s.type]().fromJSON(s));
    }
    return this.cacheLengths = null, this;
  }
}
class yl extends df {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new ne(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, i = e.length; t < i; t++) this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const i = new qc(this.currentPoint.clone(), new ne(e, t));
    return this.curves.push(i), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, i, s) {
    const r = new Zc(this.currentPoint.clone(), new ne(e, t), new ne(i, s));
    return this.curves.push(r), this.currentPoint.set(i, s), this;
  }
  bezierCurveTo(e, t, i, s, r, a) {
    const o = new Yc(this.currentPoint.clone(), new ne(e, t), new ne(i, s), new ne(r, a));
    return this.curves.push(o), this.currentPoint.set(r, a), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), i = new Kc(t);
    return this.curves.push(i), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, i, s, r, a) {
    const o = this.currentPoint.x, c = this.currentPoint.y;
    return this.absarc(e + o, t + c, i, s, r, a), this;
  }
  absarc(e, t, i, s, r, a) {
    return this.absellipse(e, t, i, i, s, r, a), this;
  }
  ellipse(e, t, i, s, r, a, o, c) {
    const l = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(e + l, t + h, i, s, r, a, o, c), this;
  }
  absellipse(e, t, i, s, r, a, o, c) {
    const l = new Mo(e, t, i, s, r, a, o, c);
    if (this.curves.length > 0) {
      const u = l.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(l);
    const h = l.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class pf extends yl {
  constructor(e) {
    super(e), this.uuid = On(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let i = 0, s = this.holes.length; i < s; i++) t[i] = this.holes[i].getPoints(e);
    return t;
  }
  extractPoints(e) {
    return { shape: this.getPoints(e), holes: this.getPointsHoles(e) };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, i = e.holes.length; t < i; t++) {
      const s = e.holes[t];
      this.holes.push(s.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, i = this.holes.length; t < i; t++) {
      const s = this.holes[t];
      e.holes.push(s.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, i = e.holes.length; t < i; t++) {
      const s = e.holes[t];
      this.holes.push(new yl().fromJSON(s));
    }
    return this;
  }
}
function mf(n, e, t = 2) {
  const i = e && e.length, s = i ? e[0] * t : n.length;
  let r = Jc(n, 0, s, t, true);
  const a = [];
  if (!r || r.next === r.prev) return a;
  let o, c, l;
  if (i && (r = Sf(n, e, r, t)), n.length > 80 * t) {
    o = n[0], c = n[1];
    let h = o, u = c;
    for (let d = t; d < s; d += t) {
      const f = n[d], g = n[d + 1];
      f < o && (o = f), g < c && (c = g), f > h && (h = f), g > u && (u = g);
    }
    l = Math.max(h - o, u - c), l = l !== 0 ? 32767 / l : 0;
  }
  return _s(r, a, t, o, c, l, 0), a;
}
function Jc(n, e, t, i, s) {
  let r;
  if (s === Df(n, e, t, i) > 0) for (let a = e; a < t; a += i) r = Tl(a / i | 0, n[a], n[a + 1], r);
  else for (let a = t - i; a >= e; a -= i) r = Tl(a / i | 0, n[a], n[a + 1], r);
  return r && Bi(r, r.next) && (xs(r), r = r.next), r;
}
function oi(n, e) {
  if (!n) return n;
  e || (e = n);
  let t = n, i;
  do
    if (i = false, !t.steiner && (Bi(t, t.next) || ft(t.prev, t, t.next) === 0)) {
      if (xs(t), t = e = t.prev, t === t.next) break;
      i = true;
    } else t = t.next;
  while (i || t !== e);
  return e;
}
function _s(n, e, t, i, s, r, a) {
  if (!n) return;
  !a && r && bf(n, i, s, r);
  let o = n;
  for (; n.prev !== n.next; ) {
    const c = n.prev, l = n.next;
    if (r ? _f(n, i, s, r) : gf(n)) {
      e.push(c.i, n.i, l.i), xs(n), n = l.next, o = l.next;
      continue;
    }
    if (n = l, n === o) {
      a ? a === 1 ? (n = vf(oi(n), e), _s(n, e, t, i, s, r, 2)) : a === 2 && xf(n, e, t, i, s, r) : _s(oi(n), e, t, i, s, r, 1);
      break;
    }
  }
}
function gf(n) {
  const e = n.prev, t = n, i = n.next;
  if (ft(e, t, i) >= 0) return false;
  const s = e.x, r = t.x, a = i.x, o = e.y, c = t.y, l = i.y, h = Math.min(s, r, a), u = Math.min(o, c, l), d = Math.max(s, r, a), f = Math.max(o, c, l);
  let g = i.next;
  for (; g !== e; ) {
    if (g.x >= h && g.x <= d && g.y >= u && g.y <= f && ts(s, o, r, c, a, l, g.x, g.y) && ft(g.prev, g, g.next) >= 0) return false;
    g = g.next;
  }
  return true;
}
function _f(n, e, t, i) {
  const s = n.prev, r = n, a = n.next;
  if (ft(s, r, a) >= 0) return false;
  const o = s.x, c = r.x, l = a.x, h = s.y, u = r.y, d = a.y, f = Math.min(o, c, l), g = Math.min(h, u, d), S = Math.max(o, c, l), p = Math.max(h, u, d), m = eo(f, g, e, t, i), M = eo(S, p, e, t, i);
  let T = n.prevZ, E = n.nextZ;
  for (; T && T.z >= m && E && E.z <= M; ) {
    if (T.x >= f && T.x <= S && T.y >= g && T.y <= p && T !== s && T !== a && ts(o, h, c, u, l, d, T.x, T.y) && ft(T.prev, T, T.next) >= 0 || (T = T.prevZ, E.x >= f && E.x <= S && E.y >= g && E.y <= p && E !== s && E !== a && ts(o, h, c, u, l, d, E.x, E.y) && ft(E.prev, E, E.next) >= 0)) return false;
    E = E.nextZ;
  }
  for (; T && T.z >= m; ) {
    if (T.x >= f && T.x <= S && T.y >= g && T.y <= p && T !== s && T !== a && ts(o, h, c, u, l, d, T.x, T.y) && ft(T.prev, T, T.next) >= 0) return false;
    T = T.prevZ;
  }
  for (; E && E.z <= M; ) {
    if (E.x >= f && E.x <= S && E.y >= g && E.y <= p && E !== s && E !== a && ts(o, h, c, u, l, d, E.x, E.y) && ft(E.prev, E, E.next) >= 0) return false;
    E = E.nextZ;
  }
  return true;
}
function vf(n, e) {
  let t = n;
  do {
    const i = t.prev, s = t.next.next;
    !Bi(i, s) && Qc(i, t, t.next, s) && vs(i, s) && vs(s, i) && (e.push(i.i, t.i, s.i), xs(t), xs(t.next), t = n = s), t = t.next;
  } while (t !== n);
  return oi(t);
}
function xf(n, e, t, i, s, r) {
  let a = n;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && wf(a, o)) {
        let c = jc(a, o);
        a = oi(a, a.next), c = oi(c, c.next), _s(a, e, t, i, s, r, 0), _s(c, e, t, i, s, r, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== n);
}
function Sf(n, e, t, i) {
  const s = [];
  for (let r = 0, a = e.length; r < a; r++) {
    const o = e[r] * i, c = r < a - 1 ? e[r + 1] * i : n.length, l = Jc(n, o, c, i, false);
    l === l.next && (l.steiner = true), s.push(Rf(l));
  }
  s.sort(Mf);
  for (let r = 0; r < s.length; r++) t = Ef(s[r], t);
  return t;
}
function Mf(n, e) {
  let t = n.x - e.x;
  if (t === 0 && (t = n.y - e.y, t === 0)) {
    const i = (n.next.y - n.y) / (n.next.x - n.x), s = (e.next.y - e.y) / (e.next.x - e.x);
    t = i - s;
  }
  return t;
}
function Ef(n, e) {
  const t = yf(n, e);
  if (!t) return e;
  const i = jc(t, n);
  return oi(i, i.next), oi(t, t.next);
}
function yf(n, e) {
  let t = e;
  const i = n.x, s = n.y;
  let r = -1 / 0, a;
  if (Bi(n, t)) return t;
  do {
    if (Bi(n, t.next)) return t.next;
    if (s <= t.y && s >= t.next.y && t.next.y !== t.y) {
      const u = t.x + (s - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (u <= i && u > r && (r = u, a = t.x < t.next.x ? t : t.next, u === i)) return a;
    }
    t = t.next;
  } while (t !== e);
  if (!a) return null;
  const o = a, c = a.x, l = a.y;
  let h = 1 / 0;
  t = a;
  do {
    if (i >= t.x && t.x >= c && i !== t.x && $c(s < l ? i : r, s, c, l, s < l ? r : i, s, t.x, t.y)) {
      const u = Math.abs(s - t.y) / (i - t.x);
      vs(t, n) && (u < h || u === h && (t.x > a.x || t.x === a.x && Tf(a, t))) && (a = t, h = u);
    }
    t = t.next;
  } while (t !== o);
  return a;
}
function Tf(n, e) {
  return ft(n.prev, n, e.prev) < 0 && ft(e.next, n, n.next) < 0;
}
function bf(n, e, t, i) {
  let s = n;
  do
    s.z === 0 && (s.z = eo(s.x, s.y, e, t, i)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next;
  while (s !== n);
  s.prevZ.nextZ = null, s.prevZ = null, Af(s);
}
function Af(n) {
  let e, t = 1;
  do {
    let i = n, s;
    n = null;
    let r = null;
    for (e = 0; i; ) {
      e++;
      let a = i, o = 0;
      for (let l = 0; l < t && (o++, a = a.nextZ, !!a); l++) ;
      let c = t;
      for (; o > 0 || c > 0 && a; ) o !== 0 && (c === 0 || !a || i.z <= a.z) ? (s = i, i = i.nextZ, o--) : (s = a, a = a.nextZ, c--), r ? r.nextZ = s : n = s, s.prevZ = r, r = s;
      i = a;
    }
    r.nextZ = null, t *= 2;
  } while (e > 1);
  return n;
}
function eo(n, e, t, i, s) {
  return n = (n - t) * s | 0, e = (e - i) * s | 0, n = (n | n << 8) & 16711935, n = (n | n << 4) & 252645135, n = (n | n << 2) & 858993459, n = (n | n << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, n | e << 1;
}
function Rf(n) {
  let e = n, t = n;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== n);
  return t;
}
function $c(n, e, t, i, s, r, a, o) {
  return (s - a) * (e - o) >= (n - a) * (r - o) && (n - a) * (i - o) >= (t - a) * (e - o) && (t - a) * (r - o) >= (s - a) * (i - o);
}
function ts(n, e, t, i, s, r, a, o) {
  return !(n === a && e === o) && $c(n, e, t, i, s, r, a, o);
}
function wf(n, e) {
  return n.next.i !== e.i && n.prev.i !== e.i && !Cf(n, e) && (vs(n, e) && vs(e, n) && Pf(n, e) && (ft(n.prev, n, e.prev) || ft(n, e.prev, e)) || Bi(n, e) && ft(n.prev, n, n.next) > 0 && ft(e.prev, e, e.next) > 0);
}
function ft(n, e, t) {
  return (e.y - n.y) * (t.x - e.x) - (e.x - n.x) * (t.y - e.y);
}
function Bi(n, e) {
  return n.x === e.x && n.y === e.y;
}
function Qc(n, e, t, i) {
  const s = er(ft(n, e, t)), r = er(ft(n, e, i)), a = er(ft(t, i, n)), o = er(ft(t, i, e));
  return !!(s !== r && a !== o || s === 0 && js(n, t, e) || r === 0 && js(n, i, e) || a === 0 && js(t, n, i) || o === 0 && js(t, e, i));
}
function js(n, e, t) {
  return e.x <= Math.max(n.x, t.x) && e.x >= Math.min(n.x, t.x) && e.y <= Math.max(n.y, t.y) && e.y >= Math.min(n.y, t.y);
}
function er(n) {
  return n > 0 ? 1 : n < 0 ? -1 : 0;
}
function Cf(n, e) {
  let t = n;
  do {
    if (t.i !== n.i && t.next.i !== n.i && t.i !== e.i && t.next.i !== e.i && Qc(t, t.next, n, e)) return true;
    t = t.next;
  } while (t !== n);
  return false;
}
function vs(n, e) {
  return ft(n.prev, n, n.next) < 0 ? ft(n, e, n.next) >= 0 && ft(n, n.prev, e) >= 0 : ft(n, e, n.prev) < 0 || ft(n, n.next, e) < 0;
}
function Pf(n, e) {
  let t = n, i = false;
  const s = (n.x + e.x) / 2, r = (n.y + e.y) / 2;
  do
    t.y > r != t.next.y > r && t.next.y !== t.y && s < (t.next.x - t.x) * (r - t.y) / (t.next.y - t.y) + t.x && (i = !i), t = t.next;
  while (t !== n);
  return i;
}
function jc(n, e) {
  const t = to(n.i, n.x, n.y), i = to(e.i, e.x, e.y), s = n.next, r = e.prev;
  return n.next = e, e.prev = n, t.next = s, s.prev = t, i.next = t, t.prev = i, r.next = i, i.prev = r, i;
}
function Tl(n, e, t, i) {
  const s = to(n, e, t);
  return i ? (s.next = i.next, s.prev = i, i.next.prev = s, i.next = s) : (s.prev = s, s.next = s), s;
}
function xs(n) {
  n.next.prev = n.prev, n.prev.next = n.next, n.prevZ && (n.prevZ.nextZ = n.nextZ), n.nextZ && (n.nextZ.prevZ = n.prevZ);
}
function to(n, e, t) {
  return { i: n, x: e, y: t, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: false };
}
function Df(n, e, t, i) {
  let s = 0;
  for (let r = e, a = t - i; r < t; r += i) s += (n[a] - n[r]) * (n[r + 1] + n[a + 1]), a = r;
  return s;
}
class Lf {
  static triangulate(e, t, i = 2) {
    return mf(e, t, i);
  }
}
class ls {
  static area(e) {
    const t = e.length;
    let i = 0;
    for (let s = t - 1, r = 0; r < t; s = r++) i += e[s].x * e[r].y - e[r].x * e[s].y;
    return i * 0.5;
  }
  static isClockWise(e) {
    return ls.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const i = [], s = [], r = [];
    bl(e), Al(i, e);
    let a = e.length;
    t.forEach(bl);
    for (let c = 0; c < t.length; c++) s.push(a), a += t[c].length, Al(i, t[c]);
    const o = Lf.triangulate(i, s);
    for (let c = 0; c < o.length; c += 3) r.push(o.slice(c, c + 3));
    return r;
  }
}
function bl(n) {
  const e = n.length;
  e > 2 && n[e - 1].equals(n[0]) && n.pop();
}
function Al(n, e) {
  for (let t = 0; t < e.length; t++) n.push(e[t].x), n.push(e[t].y);
}
class Ar extends kt {
  constructor(e = 1, t = 1, i = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: i, heightSegments: s };
    const r = e / 2, a = t / 2, o = Math.floor(i), c = Math.floor(s), l = o + 1, h = c + 1, u = e / o, d = t / c, f = [], g = [], S = [], p = [];
    for (let m = 0; m < h; m++) {
      const M = m * d - a;
      for (let T = 0; T < l; T++) {
        const E = T * u - r;
        g.push(E, -M, 0), S.push(0, 0, 1), p.push(T / o), p.push(1 - m / c);
      }
    }
    for (let m = 0; m < c; m++) for (let M = 0; M < o; M++) {
      const T = M + l * m, E = M + l * (m + 1), R = M + 1 + l * (m + 1), A = M + 1 + l * m;
      f.push(T, E, A), f.push(E, R, A);
    }
    this.setIndex(f), this.setAttribute("position", new dt(g, 3)), this.setAttribute("normal", new dt(S, 3)), this.setAttribute("uv", new dt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ar(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class eh extends kt {
  constructor(e = new pf([new ne(0, 0.5), new ne(-0.5, -0.5), new ne(0.5, -0.5)]), t = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = { shapes: e, curveSegments: t };
    const i = [], s = [], r = [], a = [];
    let o = 0, c = 0;
    if (Array.isArray(e) === false) l(e);
    else for (let h = 0; h < e.length; h++) l(e[h]), this.addGroup(o, c, h), o += c, c = 0;
    this.setIndex(i), this.setAttribute("position", new dt(s, 3)), this.setAttribute("normal", new dt(r, 3)), this.setAttribute("uv", new dt(a, 2));
    function l(h) {
      const u = s.length / 3, d = h.extractPoints(t);
      let f = d.shape;
      const g = d.holes;
      ls.isClockWise(f) === false && (f = f.reverse());
      for (let p = 0, m = g.length; p < m; p++) {
        const M = g[p];
        ls.isClockWise(M) === true && (g[p] = M.reverse());
      }
      const S = ls.triangulateShape(f, g);
      for (let p = 0, m = g.length; p < m; p++) {
        const M = g[p];
        f = f.concat(M);
      }
      for (let p = 0, m = f.length; p < m; p++) {
        const M = f[p];
        s.push(M.x, M.y, 0), r.push(0, 0, 1), a.push(M.x, M.y);
      }
      for (let p = 0, m = S.length; p < m; p++) {
        const M = S[p], T = M[0] + u, E = M[1] + u, R = M[2] + u;
        i.push(T, E, R), c += 3;
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes;
    return If(t, e);
  }
  static fromJSON(e, t) {
    const i = [];
    for (let s = 0, r = e.shapes.length; s < r; s++) {
      const a = t[e.shapes[s]];
      i.push(a);
    }
    return new eh(i, e.curveSegments);
  }
}
function If(n, e) {
  if (e.shapes = [], Array.isArray(n)) for (let t = 0, i = n.length; t < i; t++) {
    const s = n[t];
    e.shapes.push(s.uuid);
  }
  else e.shapes.push(n.uuid);
  return e;
}
class th extends kt {
  constructor(e = 1, t = 0.4, i = 12, s = 48, r = Math.PI * 2, a = 0, o = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = { radius: e, tube: t, radialSegments: i, tubularSegments: s, arc: r, thetaStart: a, thetaLength: o }, i = Math.floor(i), s = Math.floor(s);
    const c = [], l = [], h = [], u = [], d = new L(), f = new L(), g = new L();
    for (let S = 0; S <= i; S++) {
      const p = a + S / i * o;
      for (let m = 0; m <= s; m++) {
        const M = m / s * r;
        f.x = (e + t * Math.cos(p)) * Math.cos(M), f.y = (e + t * Math.cos(p)) * Math.sin(M), f.z = t * Math.sin(p), l.push(f.x, f.y, f.z), d.x = e * Math.cos(M), d.y = e * Math.sin(M), g.subVectors(f, d).normalize(), h.push(g.x, g.y, g.z), u.push(m / s), u.push(S / i);
      }
    }
    for (let S = 1; S <= i; S++) for (let p = 1; p <= s; p++) {
      const m = (s + 1) * S + p - 1, M = (s + 1) * (S - 1) + p - 1, T = (s + 1) * (S - 1) + p, E = (s + 1) * S + p;
      c.push(m, M, E), c.push(M, T, E);
    }
    this.setIndex(c), this.setAttribute("position", new dt(l, 3)), this.setAttribute("normal", new dt(h, 3)), this.setAttribute("uv", new dt(u, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new th(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc, e.thetaStart, e.thetaLength);
  }
}
function zi(n) {
  const e = {};
  for (const t in n) {
    e[t] = {};
    for (const i in n[t]) {
      const s = n[t][i];
      if (Rl(s)) s.isRenderTargetTexture ? (De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][i] = null) : e[t][i] = s.clone();
      else if (Array.isArray(s)) if (Rl(s[0])) {
        const r = [];
        for (let a = 0, o = s.length; a < o; a++) r[a] = s[a].clone();
        e[t][i] = r;
      } else e[t][i] = s.slice();
      else e[t][i] = s;
    }
  }
  return e;
}
function Ht(n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = zi(n[t]);
    for (const s in i) e[s] = i[s];
  }
  return e;
}
function Rl(n) {
  return n && (n.isColor || n.isMatrix3 || n.isMatrix4 || n.isVector2 || n.isVector3 || n.isVector4 || n.isTexture || n.isQuaternion);
}
function Uf(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) e.push(n[t].clone());
  return e;
}
function nh(n) {
  const e = n.getRenderTarget();
  return e === null ? n.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : Xe.workingColorSpace;
}
const Nf = { clone: zi, merge: Ht };
var Ff = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Of = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class It extends Mn {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ff, this.fragmentShader = Of, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = zi(e.uniforms), this.uniformsGroups = Uf(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const s in this.uniforms) {
      const a = this.uniforms[s].value;
      a && a.isTexture ? t.uniforms[s] = { type: "t", value: a.toJSON(e).uuid } : a && a.isColor ? t.uniforms[s] = { type: "c", value: a.getHex() } : a && a.isVector2 ? t.uniforms[s] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? t.uniforms[s] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? t.uniforms[s] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? t.uniforms[s] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? t.uniforms[s] = { type: "m4", value: a.toArray() } : t.uniforms[s] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const i = {};
    for (const s in this.extensions) this.extensions[s] === true && (i[s] = true);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
  fromJSON(e, t) {
    if (super.fromJSON(e, t), e.uniforms !== void 0) for (const i in e.uniforms) {
      const s = e.uniforms[i];
      switch (this.uniforms[i] = {}, s.type) {
        case "t":
          this.uniforms[i].value = t[s.value] || null;
          break;
        case "c":
          this.uniforms[i].value = new He().setHex(s.value);
          break;
        case "v2":
          this.uniforms[i].value = new ne().fromArray(s.value);
          break;
        case "v3":
          this.uniforms[i].value = new L().fromArray(s.value);
          break;
        case "v4":
          this.uniforms[i].value = new ut().fromArray(s.value);
          break;
        case "m3":
          this.uniforms[i].value = new Ne().fromArray(s.value);
          break;
        case "m4":
          this.uniforms[i].value = new $e().fromArray(s.value);
          break;
        default:
          this.uniforms[i].value = s.value;
      }
    }
    if (e.defines !== void 0 && (this.defines = e.defines), e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion), e.extensions !== void 0) for (const i in e.extensions) this.extensions[i] = e.extensions[i];
    return e.lights !== void 0 && (this.lights = e.lights), e.clipping !== void 0 && (this.clipping = e.clipping), this;
  }
}
class Bf extends It {
  constructor(e) {
    super(e), this.isRawShaderMaterial = true, this.type = "RawShaderMaterial";
  }
}
class zf extends Mn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new He(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new He(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Qa, this.normalScale = new ne(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Fn(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Hf extends Mn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = li, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Gf extends Mn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const cs = { enabled: false, files: {}, add: function(n, e) {
  this.enabled !== false && (wl(n) || (this.files[n] = e));
}, get: function(n) {
  if (this.enabled !== false && !wl(n)) return this.files[n];
}, remove: function(n) {
  delete this.files[n];
}, clear: function() {
  this.files = {};
} };
function wl(n) {
  try {
    const e = n.slice(n.indexOf(":") + 1);
    return new URL(e).protocol === "blob:";
  } catch {
    return false;
  }
}
class kf {
  constructor(e, t, i) {
    const s = this;
    let r = false, a = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this._abortController = null, this.itemStart = function(h) {
      o++, r === false && s.onStart !== void 0 && s.onStart(h, a, o), r = true;
    }, this.itemEnd = function(h) {
      a++, s.onProgress !== void 0 && s.onProgress(h, a, o), a === o && (r = false, s.onLoad !== void 0 && s.onLoad());
    }, this.itemError = function(h) {
      s.onError !== void 0 && s.onError(h);
    }, this.resolveURL = function(h) {
      return h = h.normalize("NFC"), c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, u) {
      return l.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = l.indexOf(h);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = l.length; u < d; u += 2) {
        const f = l[u], g = l[u + 1];
        if (f.global && (f.lastIndex = 0), f.test(h)) return g;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this._abortController = null, this;
    };
  }
  get abortController() {
    return this._abortController || (this._abortController = new AbortController()), this._abortController;
  }
}
const Vf = new kf();
class Es {
  constructor(e) {
    this.manager = e !== void 0 ? e : Vf, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {}, this.priority = "auto", this.cache = "default", typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  load() {
  }
  loadAsync(e, t) {
    const i = this;
    return new Promise(function(s, r) {
      i.load(e, s, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
  setPriority(e) {
    return this.priority = e, this;
  }
  setCache(e) {
    return this.cache = e, this;
  }
  abort() {
    return this;
  }
}
Es.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Cn = {};
class Wf extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Xf extends Es {
  constructor(e) {
    super(e), this.mimeType = "", this.responseType = "", this._abortController = new AbortController();
  }
  load(e, t, i, s) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = cs.get(`file:${e}`);
    if (r !== void 0) {
      this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0);
      return;
    }
    if (Cn[e] !== void 0) {
      Cn[e].push({ onLoad: t, onProgress: i, onError: s });
      return;
    }
    Cn[e] = [], Cn[e].push({ onLoad: t, onProgress: i, onError: s });
    const a = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin", priority: this.priority, cache: this.cache, signal: typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal }), o = this.mimeType, c = this.responseType;
    fetch(a).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && De("FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0) return l;
        const h = Cn[e], u = l.body.getReader(), d = l.headers.get("X-File-Size") || l.headers.get("Content-Length"), f = d ? parseInt(d) : 0, g = f !== 0;
        let S = 0;
        const p = new ReadableStream({ start(m) {
          M();
          function M() {
            u.read().then(({ done: T, value: E }) => {
              if (T) m.close();
              else {
                S += E.byteLength;
                const R = new ProgressEvent("progress", { lengthComputable: g, loaded: S, total: f });
                for (let A = 0, _ = h.length; A < _; A++) {
                  const y = h[A];
                  y.onProgress && y.onProgress(R);
                }
                m.enqueue(E), M();
              }
            }, (T) => {
              m.error(T);
            });
          }
        } });
        return new Response(p);
      } else throw new Wf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return l.json();
        default:
          if (o === "") return l.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), d = u && u[1] ? u[1].toLowerCase() : void 0, f = new TextDecoder(d);
            return l.arrayBuffer().then((g) => f.decode(g));
          }
      }
    }).then((l) => {
      cs.add(`file:${e}`, l);
      const h = Cn[e];
      delete Cn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onLoad && f.onLoad(l);
      }
    }).catch((l) => {
      const h = Cn[e];
      if (h === void 0) throw this.manager.itemError(e), l;
      delete Cn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onError && f.onError(l);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
  abort() {
    return this._abortController.abort(), this._abortController = new AbortController(), this;
  }
}
const Ai = /* @__PURE__ */ new WeakMap();
class Yf extends Es {
  constructor(e) {
    super(e);
  }
  load(e, t, i, s) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = cs.get(`image:${e}`);
    if (a !== void 0) {
      if (a.complete === true) r.manager.itemStart(e), setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0);
      else {
        let u = Ai.get(a);
        u === void 0 && (u = [], Ai.set(a, u)), u.push({ onLoad: t, onError: s });
      }
      return a;
    }
    const o = ps("img");
    function c() {
      h(), t && t(this);
      const u = Ai.get(this) || [];
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        f.onLoad && f.onLoad(this);
      }
      Ai.delete(this), r.manager.itemEnd(e);
    }
    function l(u) {
      h(), s && s(u), cs.remove(`image:${e}`);
      const d = Ai.get(this) || [];
      for (let f = 0; f < d.length; f++) {
        const g = d[f];
        g.onError && g.onError(u);
      }
      Ai.delete(this), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", c, false), o.removeEventListener("error", l, false);
    }
    return o.addEventListener("load", c, false), o.addEventListener("error", l, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), cs.add(`image:${e}`, o), r.manager.itemStart(e), o.fetchPriority = this.priority, o.src = e, o;
  }
}
class Dv extends Es {
  constructor(e) {
    super(e);
  }
  load(e, t, i, s) {
    const r = new Mt(), a = new Yf(this.manager);
    return a.setPriority(this.priority), a.setCache(this.cache), a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      r.image = o, r.needsUpdate = true, t !== void 0 && t(r);
    }, i, s), r;
  }
}
class yo extends _t {
  static registerNode(e) {
    this.prototype._lightNode = e;
  }
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new He(e), this.intensity = t;
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
  }
}
class Lv extends yo {
  constructor(e, t, i) {
    super(e, i), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(_t.DEFAULT_UP), this.updateMatrix(), this.groundColor = new He(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.groundColor = this.groundColor.getHex(), t;
  }
}
const oa = new $e(), Cl = new L(), Pl = new L();
class ih {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ne(512, 512), this.mapType = lt, this.map = null, this.mapPass = null, this.matrix = new $e(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new gs(), this._frameExtents = new ne(1, 1), this._viewportCount = 1, this._viewports = [new ut(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getCamera() {
    return this.camera;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera;
    Cl.setFromMatrixPosition(e.matrixWorld), t.position.copy(Cl), Pl.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Pl), t.updateMatrixWorld(), this._updateMatrix(t, this.matrix, this._frustum);
  }
  _updateMatrix(e, t, i, s) {
    oa.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), i.setFromProjectionMatrix(oa, e.coordinateSystem, e.reversedDepth);
    const r = this._frameExtents, a = s ? s.z / r.x : 1, o = s ? s.w / r.y : 1, c = s ? s.x / r.x : 0, l = s ? s.y / r.y : 0;
    e.coordinateSystem === ds || e.reversedDepth ? t.set(0.5 * a, 0, 0, 0.5 * a + c, 0, 0.5 * o, 0, 0.5 * o + l, 0, 0, 1, 0, 0, 0, 0, 1) : t.set(0.5 * a, 0, 0, 0.5 * a + c, 0, 0.5 * o, 0, 0.5 * o + l, 0, 0, 0.5, 0.5, 0, 0, 0, 1), t.multiply(oa);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.mapType = e.mapType, this.biasNode = e.biasNode, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return e.intensity = this.intensity, e.bias = this.bias, e.normalBias = this.normalBias, e.radius = this.radius, e.blurSamples = this.blurSamples, e.mapSize = this.mapSize.toArray(), e.mapType = this.mapType, e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
  }
}
const tr = new L(), nr = new Jn(), pn = new L();
class sh extends _t {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new $e(), this.projectionMatrix = new $e(), this.projectionMatrixInverse = new $e(), this.coordinateSystem = cn, this._reversedDepth = false;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorld.decompose(tr, nr, pn), pn.x === 1 && pn.y === 1 && pn.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(tr, nr, pn.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t, i = false) {
    super.updateWorldMatrix(e, t, i), this.matrixWorld.decompose(tr, nr, pn), pn.x === 1 && pn.y === 1 && pn.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(tr, nr, pn.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Wn = new L(), Dl = new ne(), Ll = new ne();
class qt extends sh {
  constructor(e = 50, t = 1, i = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = s, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ms * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(ss * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ms * 2 * Math.atan(Math.tan(ss * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, i) {
    Wn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Wn.x, Wn.y).multiplyScalar(-e / Wn.z), Wn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(Wn.x, Wn.y).multiplyScalar(-e / Wn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Dl, Ll), t.subVectors(Ll, Dl);
  }
  setViewOffset(e, t, i, s, r, a) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(ss * 0.5 * this.fov) / this.zoom, i = 2 * t, s = this.aspect * i, r = -0.5 * s;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      r += a.offsetX * s / c, t -= a.offsetY * i / l, s *= a.width / c, i *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (r += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, t, t - i, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
class qf extends ih {
  constructor() {
    super(new qt(90, 1, 0.5, 500)), this.isPointLightShadow = true;
  }
}
class Iv extends yo {
  constructor(e, t, i = 0, s = 2) {
    super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = i, this.decay = s, this.shadow = new qf();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.distance = this.distance, t.object.decay = this.decay, t.object.shadow = this.shadow.toJSON(), t;
  }
}
class To extends sh {
  constructor(e = -1, t = 1, i = 1, s = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = i, this.bottom = s, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, i, s, r, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let r = i - e, a = i + e, o = s + t, c = s - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, a = r + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class Zf extends ih {
  constructor() {
    super(new To(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class Uv extends yo {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(_t.DEFAULT_UP), this.updateMatrix(), this.target = new _t(), this.shadow = new Zf();
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
  }
}
const Ri = -90, wi = 1;
class no extends _t {
  constructor(e, t, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new qt(Ri, wi, e, t);
    s.layers = this.layers, this.add(s);
    const r = new qt(Ri, wi, e, t);
    r.layers = this.layers, this.add(r);
    const a = new qt(Ri, wi, e, t);
    a.layers = this.layers, this.add(a);
    const o = new qt(Ri, wi, e, t);
    o.layers = this.layers, this.add(o);
    const c = new qt(Ri, wi, e, t);
    c.layers = this.layers, this.add(c);
    const l = new qt(Ri, wi, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [i, s, r, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === cn) i.up.set(0, 1, 0), i.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === ds) i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t) this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: s } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, c, l, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = false;
    const S = i.texture.mipmapsAutoUpdate;
    i.texture.mipmapsAutoUpdate = false;
    let p = false;
    e.isWebGLRenderer === true ? p = e.state.buffers.depth.getReversed() : p = e.reversedDepthBuffer, e.setRenderTarget(i, 0, s), p && e.autoClear === false && e.clearDepth(), e.render(t, r), e.setRenderTarget(i, 1, s), p && e.autoClear === false && e.clearDepth(), e.render(t, a), e.setRenderTarget(i, 2, s), p && e.autoClear === false && e.clearDepth(), e.render(t, o), e.setRenderTarget(i, 3, s), p && e.autoClear === false && e.clearDepth(), e.render(t, c), e.setRenderTarget(i, 4, s), p && e.autoClear === false && e.clearDepth(), e.render(t, l), i.texture.mipmapsAutoUpdate = S, e.setRenderTarget(i, 5, s), p && e.autoClear === false && e.clearDepth(), e.render(t, h), e.setRenderTarget(u, d, f), e.xr.enabled = g, i.texture.needsPMREMUpdate = true;
  }
}
class Kf extends qt {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = e, this.perCameraFrustumCulled = false;
  }
}
let Nv = class {
  constructor() {
    this._previousTime = 0, this._currentTime = 0, this._startTime = performance.now(), this._delta = 0, this._elapsed = 0, this._timescale = 1, this._document = null, this._pageVisibilityHandler = null;
  }
  connect(e) {
    this._document = e, e.hidden !== void 0 && (this._pageVisibilityHandler = Jf.bind(this), e.addEventListener("visibilitychange", this._pageVisibilityHandler, false));
  }
  disconnect() {
    this._pageVisibilityHandler !== null && (this._document.removeEventListener("visibilitychange", this._pageVisibilityHandler), this._pageVisibilityHandler = null), this._document = null;
  }
  getDelta() {
    return this._delta / 1e3;
  }
  getElapsed() {
    return this._elapsed / 1e3;
  }
  getTimescale() {
    return this._timescale;
  }
  setTimescale(e) {
    return this._timescale = e, this;
  }
  reset() {
    return this._currentTime = performance.now() - this._startTime, this;
  }
  dispose() {
    this.disconnect();
  }
  update(e) {
    return this._pageVisibilityHandler !== null && this._document.hidden === true ? this._delta = 0 : (this._previousTime = this._currentTime, this._currentTime = (e !== void 0 ? e : performance.now()) - this._startTime, this._delta = (this._currentTime - this._previousTime) * this._timescale, this._elapsed += this._delta), this;
  }
};
function Jf() {
  this._document.hidden === false && this.reset();
}
class Ce {
  constructor(e) {
    this.value = e;
  }
  clone() {
    return new Ce(this.value.clone === void 0 ? this.value : this.value.clone());
  }
}
const Il = new $e();
class Ov {
  constructor(e, t, i = 0, s = 1 / 0) {
    this.ray = new Ss(e, t), this.near = i, this.far = s, this.camera = null, this.layers = new vo(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, t.projectionMatrix.elements[14]).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : Ze("Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return Il.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Il), this;
  }
  intersectObject(e, t = true, i = []) {
    return io(e, this, i, t), i.sort(Ul), i;
  }
  intersectObjects(e, t = true, i = []) {
    for (let s = 0, r = e.length; s < r; s++) io(e[s], this, i, t);
    return i.sort(Ul), i;
  }
}
function Ul(n, e) {
  return n.distance - e.distance;
}
function io(n, e, t, i) {
  let s = true;
  if (n.layers.test(e.layers) && n.raycast(e, t) === false && (s = false), s === true && i === true) {
    const r = n.children;
    for (let a = 0, o = r.length; a < o; a++) io(r[a], e, t, true);
  }
}
class Nl {
  constructor(e = 1, t = 0, i = 0) {
    this.radius = e, this.phi = t, this.theta = i;
  }
  set(e, t, i) {
    return this.radius = e, this.phi = t, this.theta = i, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = ze(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, i) {
    return this.radius = Math.sqrt(e * e + t * t + i * i), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, i), this.phi = Math.acos(ze(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class rh extends fn {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(e) {
    this.domElement !== null && this.disconnect(), this.domElement = e;
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function Fl(n, e, t, i) {
  const s = $f(i);
  switch (t) {
    case wc:
      return n * e;
    case co:
      return n * e / s.components * s.byteLength;
    case ho:
      return n * e / s.components * s.byteLength;
    case ai:
      return n * e * 2 / s.components * s.byteLength;
    case uo:
      return n * e * 2 / s.components * s.byteLength;
    case Cc:
      return n * e * 3 / s.components * s.byteLength;
    case vn:
      return n * e * 4 / s.components * s.byteLength;
    case fo:
      return n * e * 4 / s.components * s.byteLength;
    case lr:
    case cr:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case hr:
    case ur:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ya:
    case ba:
      return Math.max(n, 16) * Math.max(e, 8) / 4;
    case Ea:
    case Ta:
      return Math.max(n, 8) * Math.max(e, 8) / 2;
    case Aa:
    case Ra:
    case Ca:
    case Pa:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case wa:
    case _r:
    case Da:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case La:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ia:
      return Math.floor((n + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Ua:
      return Math.floor((n + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Na:
      return Math.floor((n + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Fa:
      return Math.floor((n + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Oa:
      return Math.floor((n + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Ba:
      return Math.floor((n + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case za:
      return Math.floor((n + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Ha:
      return Math.floor((n + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Ga:
      return Math.floor((n + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case ka:
      return Math.floor((n + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Va:
      return Math.floor((n + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Wa:
      return Math.floor((n + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Xa:
      return Math.floor((n + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Ya:
    case qa:
    case Za:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
    case Ka:
    case Ja:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 8;
    case vr:
    case $a:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function $f(n) {
  switch (n) {
    case lt:
    case Tc:
      return { byteLength: 1, components: 1 };
    case fs:
    case bc:
    case Sn:
      return { byteLength: 2, components: 1 };
    case oo:
    case lo:
      return { byteLength: 2, components: 4 };
    case xn:
    case ao:
    case nn:
      return { byteLength: 4, components: 1 };
    case Ac:
    case Rc:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "187" } }));
typeof window < "u" && (window.__THREE__ ? De("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "187");
/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function ah() {
  let n = null, e = false, t = null, i = null;
  function s(r, a) {
    i = n.requestAnimationFrame(s), t(r, a);
  }
  return { start: function() {
    e !== true && t !== null && n !== null && (i = n.requestAnimationFrame(s), e = true);
  }, stop: function() {
    n !== null && n.cancelAnimationFrame(i), e = false;
  }, setAnimationLoop: function(r) {
    t = r;
  }, setContext: function(r) {
    n = r;
  } };
}
function Qf(n) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, c) {
    const l = o.array, h = o.usage, u = l.byteLength, d = n.createBuffer();
    n.bindBuffer(c, d), n.bufferData(c, l, h), o.onUploadCallback();
    let f;
    if (l instanceof Float32Array) f = n.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array) f = n.HALF_FLOAT;
    else if (l instanceof Uint16Array) o.isFloat16BufferAttribute ? f = n.HALF_FLOAT : f = n.UNSIGNED_SHORT;
    else if (l instanceof Int16Array) f = n.SHORT;
    else if (l instanceof Uint32Array) f = n.UNSIGNED_INT;
    else if (l instanceof Int32Array) f = n.INT;
    else if (l instanceof Int8Array) f = n.BYTE;
    else if (l instanceof Uint8Array) f = n.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) f = n.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return { buffer: d, type: f, bytesPerElement: l.BYTES_PER_ELEMENT, version: o.version, size: u };
  }
  function i(o, c, l) {
    const h = c.array, u = c.updateRanges;
    if (n.bindBuffer(l, o), u.length === 0) n.bufferSubData(l, 0, h);
    else {
      u.sort((f, g) => f.start - g.start);
      let d = 0;
      for (let f = 1; f < u.length; f++) {
        const g = u[d], S = u[f];
        S.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, S.start + S.count - g.start) : (++d, u[d] = S);
      }
      u.length = d + 1;
      for (let f = 0, g = u.length; f < g; f++) {
        const S = u[f];
        n.bufferSubData(l, S.start * h.BYTES_PER_ELEMENT, h, S.start, S.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function s(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (n.deleteBuffer(c.buffer), e.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const l = e.get(o);
    if (l === void 0) e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      i(l.buffer, o, c), l.version = o.version;
    }
  }
  return { get: s, remove: r, update: a };
}
var jf = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, ed = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, td = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, nd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, id = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, sd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, rd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, ad = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, od = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`, ld = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, cd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, hd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, ud = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, fd = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, dd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, pd = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, md = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, gd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, _d = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, vd = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, xd = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, Sd = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, Md = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`, Ed = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, yd = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`, Td = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, bd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Ad = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Rd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, wd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Cd = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Pd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`, Dd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`, Ld = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Id = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Ud = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Nd = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Fd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Od = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Bd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, zd = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Hd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Gd = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, kd = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Vd = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`, Wd = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`, Xd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Yd = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, qd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Zd = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Kd = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Jd = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, $d = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Qd = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, jd = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, ep = `#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`, tp = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, np = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, ip = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, sp = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, rp = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, ap = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, op = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, lp = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, cp = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, hp = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, up = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, fp = `#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, dp = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, pp = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, mp = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, gp = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, _p = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, vp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, xp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Sp = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`, Mp = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Ep = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, yp = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Tp = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, bp = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Ap = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Rp = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`, wp = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Cp = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Pp = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Dp = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Lp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Ip = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Up = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`, Np = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Fp = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Op = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Bp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, zp = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Hp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Gp = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, kp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Vp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Wp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Xp = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Yp = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, qp = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Zp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Kp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Jp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, $p = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Qp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, jp = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, em = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, tm = `uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, nm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, im = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, sm = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, rm = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, am = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, om = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`, lm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, cm = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, hm = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, um = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, fm = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, dm = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, pm = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, mm = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, gm = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, _m = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, vm = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, xm = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Sm = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Mm = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Em = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, ym = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Tm = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, bm = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Am = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Rm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, wm = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Cm = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Pm = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Dm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Be = { alphahash_fragment: jf, alphahash_pars_fragment: ed, alphamap_fragment: td, alphamap_pars_fragment: nd, alphatest_fragment: id, alphatest_pars_fragment: sd, aomap_fragment: rd, aomap_pars_fragment: ad, batching_pars_vertex: od, batching_vertex: ld, begin_vertex: cd, beginnormal_vertex: hd, bsdfs: ud, iridescence_fragment: fd, bumpmap_pars_fragment: dd, clipping_planes_fragment: pd, clipping_planes_pars_fragment: md, clipping_planes_pars_vertex: gd, clipping_planes_vertex: _d, color_fragment: vd, color_pars_fragment: xd, color_pars_vertex: Sd, color_vertex: Md, common: Ed, defaultnormal_vertex: yd, displacementmap_pars_vertex: Td, displacementmap_vertex: bd, emissivemap_fragment: Ad, emissivemap_pars_fragment: Rd, colorspace_fragment: wd, colorspace_pars_fragment: Cd, envmap_fragment: Pd, envmap_common_pars_fragment: Dd, envmap_pars_fragment: Ld, envmap_pars_vertex: Id, envmap_physical_pars_fragment: Wd, envmap_vertex: Ud, fog_vertex: Nd, fog_pars_vertex: Fd, fog_fragment: Od, fog_pars_fragment: Bd, gradientmap_pars_fragment: zd, lightmap_pars_fragment: Hd, lights_lambert_fragment: Gd, lights_lambert_pars_fragment: kd, lights_pars_begin: Vd, lights_toon_fragment: Xd, lights_toon_pars_fragment: Yd, lights_phong_fragment: qd, lights_phong_pars_fragment: Zd, lights_physical_fragment: Kd, lights_physical_pars_fragment: Jd, lights_fragment_begin: $d, lights_fragment_maps: Qd, lights_fragment_end: jd, lightprobes_pars_fragment: ep, logdepthbuf_fragment: tp, logdepthbuf_pars_fragment: np, logdepthbuf_pars_vertex: ip, logdepthbuf_vertex: sp, map_fragment: rp, map_pars_fragment: ap, map_particle_fragment: op, map_particle_pars_fragment: lp, metalnessmap_fragment: cp, metalnessmap_pars_fragment: hp, morphinstance_vertex: up, morphcolor_vertex: fp, morphnormal_vertex: dp, morphtarget_pars_vertex: pp, morphtarget_vertex: mp, normal_fragment_begin: gp, normal_fragment_maps: _p, normal_pars_fragment: vp, normal_pars_vertex: xp, normal_vertex: Sp, normalmap_pars_fragment: Mp, clearcoat_normal_fragment_begin: Ep, clearcoat_normal_fragment_maps: yp, clearcoat_pars_fragment: Tp, iridescence_pars_fragment: bp, opaque_fragment: Ap, packing: Rp, premultiplied_alpha_fragment: wp, project_vertex: Cp, dithering_fragment: Pp, dithering_pars_fragment: Dp, roughnessmap_fragment: Lp, roughnessmap_pars_fragment: Ip, shadowmap_pars_fragment: Up, shadowmap_pars_vertex: Np, shadowmap_vertex: Fp, shadowmask_pars_fragment: Op, skinbase_vertex: Bp, skinning_pars_vertex: zp, skinning_vertex: Hp, skinnormal_vertex: Gp, specularmap_fragment: kp, specularmap_pars_fragment: Vp, tonemapping_fragment: Wp, tonemapping_pars_fragment: Xp, transmission_fragment: Yp, transmission_pars_fragment: qp, uv_pars_fragment: Zp, uv_pars_vertex: Kp, uv_vertex: Jp, worldpos_vertex: $p, background_vert: Qp, background_frag: jp, backgroundCube_vert: em, backgroundCube_frag: tm, cube_vert: nm, cube_frag: im, depth_vert: sm, depth_frag: rm, distance_vert: am, distance_frag: om, equirect_vert: lm, equirect_frag: cm, linedashed_vert: hm, linedashed_frag: um, meshbasic_vert: fm, meshbasic_frag: dm, meshlambert_vert: pm, meshlambert_frag: mm, meshmatcap_vert: gm, meshmatcap_frag: _m, meshnormal_vert: vm, meshnormal_frag: xm, meshphong_vert: Sm, meshphong_frag: Mm, meshphysical_vert: Em, meshphysical_frag: ym, meshtoon_vert: Tm, meshtoon_frag: bm, points_vert: Am, points_frag: Rm, shadow_vert: wm, shadow_frag: Cm, sprite_vert: Pm, sprite_frag: Dm }, ge = { common: { diffuse: { value: new He(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ne() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ne() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ne() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ne() }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 }, dfgLUT: { value: null } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ne() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ne() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ne() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ne() }, normalScale: { value: new ne(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ne() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ne() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ne() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ne() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new He(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, sunLights: { value: [], properties: { direction: {}, color: {} } }, sunLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, sunShadowMatrix: { value: [] }, sunShadowCascade: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null }, probesSH: { value: [] }, probesMin: { value: [] }, probesMax: { value: [] }, probesResolution: { value: [] } }, points: { diffuse: { value: new He(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ne() }, alphaTest: { value: 0 }, uvTransform: { value: new Ne() } }, sprite: { diffuse: { value: new He(16777215) }, opacity: { value: 1 }, center: { value: new ne(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ne() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ne() }, alphaTest: { value: 0 } } }, gn = { basic: { uniforms: Ht([ge.common, ge.specularmap, ge.envmap, ge.aomap, ge.lightmap, ge.fog]), vertexShader: Be.meshbasic_vert, fragmentShader: Be.meshbasic_frag }, lambert: { uniforms: Ht([ge.common, ge.specularmap, ge.envmap, ge.aomap, ge.lightmap, ge.emissivemap, ge.bumpmap, ge.normalmap, ge.displacementmap, ge.fog, ge.lights, { emissive: { value: new He(0) }, envMapIntensity: { value: 1 } }]), vertexShader: Be.meshlambert_vert, fragmentShader: Be.meshlambert_frag }, phong: { uniforms: Ht([ge.common, ge.specularmap, ge.envmap, ge.aomap, ge.lightmap, ge.emissivemap, ge.bumpmap, ge.normalmap, ge.displacementmap, ge.fog, ge.lights, { emissive: { value: new He(0) }, specular: { value: new He(1118481) }, shininess: { value: 30 }, envMapIntensity: { value: 1 } }]), vertexShader: Be.meshphong_vert, fragmentShader: Be.meshphong_frag }, standard: { uniforms: Ht([ge.common, ge.envmap, ge.aomap, ge.lightmap, ge.emissivemap, ge.bumpmap, ge.normalmap, ge.displacementmap, ge.roughnessmap, ge.metalnessmap, ge.fog, ge.lights, { emissive: { value: new He(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Be.meshphysical_vert, fragmentShader: Be.meshphysical_frag }, toon: { uniforms: Ht([ge.common, ge.aomap, ge.lightmap, ge.emissivemap, ge.bumpmap, ge.normalmap, ge.displacementmap, ge.gradientmap, ge.fog, ge.lights, { emissive: { value: new He(0) } }]), vertexShader: Be.meshtoon_vert, fragmentShader: Be.meshtoon_frag }, matcap: { uniforms: Ht([ge.common, ge.bumpmap, ge.normalmap, ge.displacementmap, ge.fog, { matcap: { value: null } }]), vertexShader: Be.meshmatcap_vert, fragmentShader: Be.meshmatcap_frag }, points: { uniforms: Ht([ge.points, ge.fog]), vertexShader: Be.points_vert, fragmentShader: Be.points_frag }, dashed: { uniforms: Ht([ge.common, ge.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Be.linedashed_vert, fragmentShader: Be.linedashed_frag }, depth: { uniforms: Ht([ge.common, ge.displacementmap]), vertexShader: Be.depth_vert, fragmentShader: Be.depth_frag }, normal: { uniforms: Ht([ge.common, ge.bumpmap, ge.normalmap, ge.displacementmap, { opacity: { value: 1 } }]), vertexShader: Be.meshnormal_vert, fragmentShader: Be.meshnormal_frag }, sprite: { uniforms: Ht([ge.sprite, ge.fog]), vertexShader: Be.sprite_vert, fragmentShader: Be.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ne() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Be.background_vert, fragmentShader: Be.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ne() } }, vertexShader: Be.backgroundCube_vert, fragmentShader: Be.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Be.cube_vert, fragmentShader: Be.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Be.equirect_vert, fragmentShader: Be.equirect_frag }, distance: { uniforms: Ht([ge.common, ge.displacementmap, { referencePosition: { value: new L() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Be.distance_vert, fragmentShader: Be.distance_frag }, shadow: { uniforms: Ht([ge.lights, ge.fog, { color: { value: new He(0) }, opacity: { value: 1 } }]), vertexShader: Be.shadow_vert, fragmentShader: Be.shadow_frag } };
gn.physical = { uniforms: Ht([gn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ne() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ne() }, clearcoatNormalScale: { value: new ne(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ne() }, diffuseRoughness: { value: 0 }, diffuseRoughnessMap: { value: null }, diffuseRoughnessMapTransform: { value: new Ne() }, dispersion: { value: 0 }, retroreflectivity: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ne() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ne() }, sheen: { value: 0 }, sheenColor: { value: new He(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ne() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ne() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ne() }, transmissionSamplerSize: { value: new ne() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ne() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new He(0) }, specularColor: { value: new He(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ne() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ne() }, anisotropyVector: { value: new ne() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ne() } }]), vertexShader: Be.meshphysical_vert, fragmentShader: Be.meshphysical_frag };
const ir = { r: 0, b: 0, g: 0 }, Lm = new $e(), oh = new Ne();
oh.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Im(n, e, t, i, s, r) {
  const a = new He(0);
  let o = s === true ? 0 : 1, c, l, h = null, u = 0, d = null;
  function f(M) {
    let T = M.isScene === true ? M.background : null;
    if (T && T.isTexture) {
      const E = M.backgroundBlurriness > 0;
      T = e.get(T, E);
    }
    return T;
  }
  function g(M) {
    let T = false;
    const E = f(M);
    E === null ? p(a, o) : E && E.isColor && (p(E, 1), T = true);
    const R = n.xr.getEnvironmentBlendMode();
    R === "additive" ? t.buffers.color.setClear(0, 0, 0, 1, r) : R === "alpha-blend" && t.buffers.color.setClear(0, 0, 0, 0, r), (n.autoClear || T) && (t.buffers.depth.setTest(true), t.buffers.depth.setMask(true), t.buffers.color.setMask(true), n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil));
  }
  function S(M, T) {
    const E = f(T);
    E && E.isCubeTexture ? (l === void 0 && (l = new un(new Ms(1, 1, 1), new It({ name: "BackgroundCubeMaterial", uniforms: zi(gn.backgroundCube.uniforms), vertexShader: gn.backgroundCube.vertexShader, fragmentShader: gn.backgroundCube.fragmentShader, side: wt, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(R, A, _) {
      this.matrixWorld.copyPosition(_.matrixWorld);
    }, Object.defineProperty(l.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), i.update(l)), l.material.uniforms.envMap.value = E, l.material.uniforms.backgroundBlurriness.value = T.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = T.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(T.backgroundRotation)).transpose(), E.isRenderTargetTexture === false && l.material.uniforms.backgroundRotation.value.premultiply(oh), l.material.toneMapped = Xe.getTransfer(E.colorSpace) !== nt, (h !== E || u !== E.version || d !== n.toneMapping) && (l.material.needsUpdate = true, h = E, u = E.version, d = n.toneMapping), l.layers.enableAll(), M.unshift(l, l.geometry, l.material, 0, 0, null)) : E && E.isTexture && (c === void 0 && (c = new un(new Ar(2, 2), new It({ name: "BackgroundMaterial", uniforms: zi(gn.background.uniforms), vertexShader: gn.background.vertexShader, fragmentShader: gn.background.fragmentShader, side: Zn, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), i.update(c)), c.material.uniforms.t2D.value = E, c.material.uniforms.backgroundIntensity.value = T.backgroundIntensity, c.material.toneMapped = Xe.getTransfer(E.colorSpace) !== nt, E.matrixAutoUpdate === true && E.updateMatrix(), c.material.uniforms.uvTransform.value.copy(E.matrix), (h !== E || u !== E.version || d !== n.toneMapping) && (c.material.needsUpdate = true, h = E, u = E.version, d = n.toneMapping), c.layers.enableAll(), M.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(M, T) {
    M.getRGB(ir, nh(n)), t.buffers.color.setClear(ir.r, ir.g, ir.b, T, r);
  }
  function m() {
    l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return { getClearColor: function() {
    return a;
  }, setClearColor: function(M, T = 1) {
    a.set(M), o = T, p(a, o);
  }, getClearAlpha: function() {
    return o;
  }, setClearAlpha: function(M) {
    o = M, p(a, o);
  }, render: g, addToRenderList: S, dispose: m };
}
function Um(n, e) {
  const t = n.getParameter(n.MAX_VERTEX_ATTRIBS), i = {}, s = d(null);
  let r = s, a = false;
  function o(I, F, G, C, W) {
    let k = false;
    const H = u(I, C, G, F);
    r !== H && (r = H, l(r.object)), k = f(I, C, G, W), k && g(I, C, G, W), W !== null && e.update(W, n.ELEMENT_ARRAY_BUFFER), (k || a) && (a = false, E(I, F, G, C), W !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.get(W).buffer));
  }
  function c() {
    return n.createVertexArray();
  }
  function l(I) {
    return n.bindVertexArray(I);
  }
  function h(I) {
    return n.deleteVertexArray(I);
  }
  function u(I, F, G, C) {
    const W = C.wireframe === true;
    let k = i[F.id];
    k === void 0 && (k = {}, i[F.id] = k);
    const H = I.isInstancedMesh === true ? I.id : 0;
    let ee = k[H];
    ee === void 0 && (ee = {}, k[H] = ee);
    let X = ee[G.id];
    X === void 0 && (X = {}, ee[G.id] = X);
    let Q = X[W];
    return Q === void 0 && (Q = d(c()), X[W] = Q), Q;
  }
  function d(I) {
    const F = [], G = [], C = [];
    for (let W = 0; W < t; W++) F[W] = 0, G[W] = 0, C[W] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: F, enabledAttributes: G, attributeDivisors: C, object: I, attributes: {}, index: null };
  }
  function f(I, F, G, C) {
    const W = r.attributes, k = F.attributes;
    let H = 0;
    const ee = G.getAttributes();
    for (const X in ee) if (ee[X].location >= 0) {
      const j = W[X];
      let Se = k[X];
      if (Se === void 0 && (X === "instanceMatrix" && I.instanceMatrix && (Se = I.instanceMatrix), X === "instanceColor" && I.instanceColor && (Se = I.instanceColor)), j === void 0 || j.attribute !== Se || Se && j.data !== Se.data) return true;
      H++;
    }
    return r.attributesNum !== H || r.index !== C;
  }
  function g(I, F, G, C) {
    const W = {}, k = F.attributes;
    let H = 0;
    const ee = G.getAttributes();
    for (const X in ee) if (ee[X].location >= 0) {
      let j = k[X];
      j === void 0 && (X === "instanceMatrix" && I.instanceMatrix && (j = I.instanceMatrix), X === "instanceColor" && I.instanceColor && (j = I.instanceColor));
      const Se = {};
      Se.attribute = j, j && j.data && (Se.data = j.data), W[X] = Se, H++;
    }
    r.attributes = W, r.attributesNum = H, r.index = C;
  }
  function S() {
    const I = r.newAttributes;
    for (let F = 0, G = I.length; F < G; F++) I[F] = 0;
  }
  function p(I) {
    m(I, 0);
  }
  function m(I, F) {
    const G = r.newAttributes, C = r.enabledAttributes, W = r.attributeDivisors;
    G[I] = 1, C[I] === 0 && (n.enableVertexAttribArray(I), C[I] = 1), W[I] !== F && (n.vertexAttribDivisor(I, F), W[I] = F);
  }
  function M() {
    const I = r.newAttributes, F = r.enabledAttributes;
    for (let G = 0, C = F.length; G < C; G++) F[G] !== I[G] && (n.disableVertexAttribArray(G), F[G] = 0);
  }
  function T(I, F, G, C, W, k, H) {
    H === true ? n.vertexAttribIPointer(I, F, G, W, k) : n.vertexAttribPointer(I, F, G, C, W, k);
  }
  function E(I, F, G, C) {
    S();
    const W = C.attributes, k = G.getAttributes(), H = F.defaultAttributeValues;
    for (const ee in k) {
      const X = k[ee];
      if (X.location >= 0) {
        let Q = W[ee];
        if (Q === void 0 && (ee === "instanceMatrix" && I.instanceMatrix && (Q = I.instanceMatrix), ee === "instanceColor" && I.instanceColor && (Q = I.instanceColor)), Q !== void 0) {
          const j = Q.normalized, Se = Q.itemSize, Le = e.get(Q);
          if (Le === void 0) continue;
          const q = Le.buffer, de = Le.type, ve = Le.bytesPerElement, Ae = de === n.INT || de === n.UNSIGNED_INT || Q.gpuType === ao;
          if (Q.isInterleavedBufferAttribute) {
            const pe = Q.data, be = pe.isInterleavedBuffer === true ? pe.stride : pe.itemSize, Ke = Q.offset;
            if (pe.isInstancedInterleavedBuffer || pe.isInstancedBufferAttribute) {
              for (let we = 0; we < X.locationSize; we++) m(X.location + we, pe.meshPerAttribute);
              I.isInstancedMesh !== true && C._maxInstanceCount === void 0 && (C._maxInstanceCount = pe.meshPerAttribute * pe.count);
            } else for (let we = 0; we < X.locationSize; we++) p(X.location + we);
            n.bindBuffer(n.ARRAY_BUFFER, q);
            for (let we = 0; we < X.locationSize; we++) T(X.location + we, Se / X.locationSize, de, j, be * ve, (Ke + Se / X.locationSize * we) * ve, Ae);
          } else {
            if (Q.isInstancedBufferAttribute) {
              for (let pe = 0; pe < X.locationSize; pe++) m(X.location + pe, Q.meshPerAttribute);
              I.isInstancedMesh !== true && C._maxInstanceCount === void 0 && (C._maxInstanceCount = Q.meshPerAttribute * Q.count);
            } else for (let pe = 0; pe < X.locationSize; pe++) p(X.location + pe);
            n.bindBuffer(n.ARRAY_BUFFER, q);
            for (let pe = 0; pe < X.locationSize; pe++) T(X.location + pe, Se / X.locationSize, de, j, Se * ve, Se / X.locationSize * pe * ve, Ae);
          }
        } else if (H !== void 0) {
          const j = H[ee];
          if (j !== void 0) switch (j.length) {
            case 2:
              n.vertexAttrib2fv(X.location, j);
              break;
            case 3:
              n.vertexAttrib3fv(X.location, j);
              break;
            case 4:
              n.vertexAttrib4fv(X.location, j);
              break;
            default:
              n.vertexAttrib1fv(X.location, j);
          }
        }
      }
    }
    M();
  }
  function R() {
    N();
    for (const I in i) {
      const F = i[I];
      for (const G in F) {
        const C = F[G];
        for (const W in C) {
          const k = C[W];
          for (const H in k) h(k[H].object), delete k[H];
          delete C[W];
        }
      }
      delete i[I];
    }
  }
  function A(I) {
    if (i[I.id] === void 0) return;
    const F = i[I.id];
    for (const G in F) {
      const C = F[G];
      for (const W in C) {
        const k = C[W];
        for (const H in k) h(k[H].object), delete k[H];
        delete C[W];
      }
    }
    delete i[I.id];
  }
  function _(I) {
    for (const F in i) {
      const G = i[F];
      for (const C in G) {
        const W = G[C];
        if (W[I.id] === void 0) continue;
        const k = W[I.id];
        for (const H in k) h(k[H].object), delete k[H];
        delete W[I.id];
      }
    }
  }
  function y(I) {
    for (const F in i) {
      const G = i[F], C = I.isInstancedMesh === true ? I.id : 0, W = G[C];
      if (W !== void 0) {
        for (const k in W) {
          const H = W[k];
          for (const ee in H) h(H[ee].object), delete H[ee];
          delete W[k];
        }
        delete G[C], Object.keys(G).length === 0 && delete i[F];
      }
    }
  }
  function N() {
    P(), a = true, r !== s && (r = s, l(r.object));
  }
  function P() {
    s.geometry = null, s.program = null, s.wireframe = false;
  }
  return { setup: o, reset: N, resetDefaultState: P, dispose: R, releaseStatesOfGeometry: A, releaseStatesOfObject: y, releaseStatesOfProgram: _, initAttributes: S, enableAttribute: p, disableUnusedAttributes: M };
}
function Nm(n, e, t) {
  let i;
  function s(c) {
    i = c;
  }
  function r(c, l) {
    n.drawArrays(i, c, l), t.update(l, i, 1);
  }
  function a(c, l, h) {
    h !== 0 && (n.drawArraysInstanced(i, c, l, h), t.update(l, i, h));
  }
  function o(c, l, h) {
    if (h === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, c, 0, l, 0, h);
    let d = 0;
    for (let f = 0; f < h; f++) d += l[f];
    t.update(d, i, 1);
  }
  this.setMode = s, this.render = r, this.renderInstances = a, this.renderMultiDraw = o;
}
function Fm(n, e, t, i) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const _ = e.get("EXT_texture_filter_anisotropic");
      s = n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else s = 0;
    return s;
  }
  function a(_) {
    return !(_ !== vn && i.convert(_) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(_) {
    const y = _ === Sn && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(_ !== lt && _ !== nn && !y && i.convert(_) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE));
  }
  function c(_) {
    if (_ === "highp") {
      if (n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision > 0) return "highp";
      _ = "mediump";
    }
    return _ === "mediump" && n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const h = c(l);
  h !== l && (De("WebGLRenderer:", l, "not supported, using", h, "instead."), l = h);
  const u = t.reversedDepthBuffer === true && e.has("EXT_clip_control"), d = t.logarithmicDepthBuffer === true && u === false;
  t.reversedDepthBuffer === true && u === false && De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."), t.logarithmicDepthBuffer === true && u === true && De("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");
  const f = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS), g = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS), S = n.getParameter(n.MAX_TEXTURE_SIZE), p = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE), m = n.getParameter(n.MAX_VERTEX_ATTRIBS), M = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS), T = n.getParameter(n.MAX_VARYING_VECTORS), E = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS), R = n.getParameter(n.MAX_SAMPLES), A = n.getParameter(n.SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: c, textureFormatReadable: a, textureTypeReadable: o, precision: l, logarithmicDepthBuffer: d, reversedDepthBuffer: u, maxTextures: f, maxVertexTextures: g, maxTextureSize: S, maxCubemapSize: p, maxAttributes: m, maxVertexUniforms: M, maxVaryings: T, maxFragmentUniforms: E, maxSamples: R, samples: A };
}
function Om(n) {
  const e = this;
  let t = null, i = 0, s = false, r = false;
  const a = new Pn(), o = new Ne(), c = { value: null, needsUpdate: false };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const f = u.length !== 0 || d || i !== 0 || s;
    return s = d, i = u.length, f;
  }, this.beginShadows = function() {
    r = true, h(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, f) {
    const g = u.clippingPlanes, S = u.clipIntersection, p = u.clipShadows, m = n.get(u);
    if (!s || g === null || g.length === 0 || r && !p) r ? h(null) : l();
    else {
      const M = r ? 0 : i, T = M * 4;
      let E = m.clippingState || null;
      c.value = E, E = h(g, d, T, f);
      for (let R = 0; R !== T; ++R) E[R] = t[R];
      m.clippingState = E, this.numIntersection = S ? this.numPlanes : 0, this.numPlanes += M;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
  }
  function h(u, d, f, g) {
    const S = u !== null ? u.length : 0;
    let p = null;
    if (S !== 0) {
      if (p = c.value, g !== true || p === null) {
        const m = f + S * 4, M = d.matrixWorldInverse;
        o.getNormalMatrix(M), (p === null || p.length < m) && (p = new Float32Array(m));
        for (let T = 0, E = f; T !== S; ++T, E += 4) a.copy(u[T]).applyMatrix4(M, o), a.normal.toArray(p, E), p[E + 3] = a.constant;
      }
      c.value = p, c.needsUpdate = true;
    }
    return e.numPlanes = S, e.numIntersection = 0, p;
  }
}
class bo extends gt {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const i = { width: e, height: e, depth: 1 }, s = [i, i, i, i, i, i];
    this.texture = new kc(s), this._setTextureOptions(t), this.texture.isRenderTargetTexture = true;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const i = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, s = new Ms(5, 5, 5), r = new It({ name: "CubemapFromEquirect", uniforms: zi(i.uniforms), vertexShader: i.vertexShader, fragmentShader: i.fragmentShader, side: wt, blending: Gt });
    r.uniforms.tEquirect.value = t;
    const a = new un(s, r), o = t.minFilter;
    return t.minFilter === Yn && (t.minFilter = Ct), new no(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t = true, i = true, s = true) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, i, s);
    e.setRenderTarget(r);
  }
}
const Ol = 256, Bm = 3, zm = 20, lh = 256, ch = 16, Hm = 3, Gm = new L(), km = new He();
class Tr {
  constructor(e) {
    this._renderer = e, this._cubeSize = 0, this._sourceTarget = null, this._cubeCamera = new no(1, 10, null), this._boxMesh = new un(new Ms(5, 5, 5), null), this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null, this._integrationMaterial = null;
  }
  fromScene(e, t = 0, i = 0.1, s = 100, r = {}) {
    const { size: a = 256, position: o = Gm } = r, c = this._renderer;
    this._setSize(a);
    const l = this._allocateTarget(), h = this._getSourceTarget(true);
    t > 0 && (h.texture.mipmapsAutoUpdate = false);
    const u = c.autoClear, d = c.autoClearColor, f = c.autoClearDepth, g = c.autoClearStencil, S = e.background;
    c.autoClear = true, c.autoClearColor = true, c.autoClearDepth = true, c.autoClearStencil = true, S === null && (e.background = c.getClearColor(km));
    const p = new no(i, s, h);
    return p.position.copy(o), p.update(c, e), c.autoClear = u, c.autoClearColor = d, c.autoClearDepth = f, c.autoClearStencil = g, e.background = S, t > 0 && (h.texture.mipmapsAutoUpdate = true, this._blur(l, t)), this._applyPMREM(l), l;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Hl(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = zl(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._sourceTarget !== null && this._sourceTarget.dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._integrationMaterial !== null && this._integrationMaterial.dispose(), this._boxMesh.geometry.dispose();
  }
  static lodToRoughness(e, t) {
    return t > 0 ? 1 - Math.sqrt(1 - e / t) : 0;
  }
  _setSize(e) {
    this._cubeSize = Math.max(Ol, Nc(e));
  }
  _fromTexture(e, t) {
    e.mapping === Fi || e.mapping === us ? this._setSize(e.image.length === 0 ? Ol : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4);
    const i = t || this._allocateTarget();
    return this._textureToCubemap(e), this._applyPMREM(i), i;
  }
  _allocateTarget() {
    const e = this._cubeSize, t = Bl(e, false, false), i = Math.log2(e) - Bm;
    for (let s = 0; s <= i; s++) t.texture.mipmaps.push({ width: e >> s, height: e >> s });
    return t.texture.name = "PMREM", t.texture.isPMREMTexture = true, t;
  }
  _getSourceTarget(e = false) {
    const t = this._cubeSize, i = this._sourceTarget;
    return (i === null || i.width !== t || e && i.depthBuffer === false) && (i !== null && i.dispose(), this._sourceTarget = Bl(t, true, e)), this._sourceTarget;
  }
  _compileMaterial(e) {
    this._boxMesh.material = e, this._renderer.compile(this._boxMesh, this._cubeCamera.children[0]);
  }
  _renderCube(e, t, i) {
    const s = this._boxMesh, r = this._cubeCamera;
    s.material = i, r.renderTarget = e, r.activeMipmapLevel = t;
    const a = e.width >> t;
    e.viewport.set(0, 0, a, a), r.update(this._renderer, s), e.viewport.set(0, 0, e.width, e.height);
  }
  _textureToCubemap(e) {
    let t;
    e.mapping === Fi || e.mapping === us ? (this._cubemapMaterial === null && (this._cubemapMaterial = Hl()), t = this._cubemapMaterial, t.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : (this._equirectMaterial === null && (this._equirectMaterial = zl()), t = this._equirectMaterial), t.uniforms.envMap.value = e, this._renderCube(this._getSourceTarget(), 0, t);
  }
  _applyPMREM(e) {
    this._ggxMaterial === null && (this._ggxMaterial = Vm(), this._integrationMaterial = Wm());
    const t = this._cubeSize, i = e.texture.mipmaps.length - 1, s = this._ggxMaterial.uniforms;
    s.envMap.value = this._sourceTarget.texture;
    const r = this._integrationMaterial.uniforms;
    r.envMap.value = this._sourceTarget.texture, r.sourceLod.value = Math.log2(t / ch);
    for (let a = 0; a <= i; a++) {
      const o = Tr.lodToRoughness(a, i);
      if (a > i - Hm) r.roughness.value = o, this._renderCube(e, a, this._integrationMaterial);
      else {
        const c = o > 0 ? Math.log2(t) + 0.5 * Math.log2(6 / (lh * Math.pow(o, 4))) + 0.5 : 0;
        s.roughness.value = o, s.lodBias.value = c, this._renderCube(e, a, this._ggxMaterial);
      }
    }
  }
  _blur(e, t) {
    this._blurMaterial === null && (this._blurMaterial = Xm());
    const i = this._blurMaterial, s = i.uniforms, r = this._sourceTarget;
    s.sigma.value = Math.min(t, Math.PI) / Math.SQRT2, s.envMap.value = r.texture, this._renderCube(e, 0, i), s.envMap.value = e.texture, this._renderCube(r, 0, i);
  }
}
function Bl(n, e, t) {
  return new bo(n, { minFilter: Yn, generateMipmaps: e, type: Sn, colorSpace: Oi, depthBuffer: t });
}
function ys(n, e, t) {
  return new It({ name: n, uniforms: e, vertexShader: Be.cube_vert, fragmentShader: t, side: wt, blending: Gt, depthTest: false, depthWrite: false });
}
function Vm() {
  return ys("PMREMGGXConvolution", { envMap: { value: null }, roughness: { value: 0 }, lodBias: { value: 0 } }, `

		#define GGX_SAMPLES ${lh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`);
}
function Wm() {
  return ys("PMREMGGXIntegration", { envMap: { value: null }, roughness: { value: 0 }, sourceLod: { value: 0 }, sourceSize: { value: ch } }, `

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`);
}
function Xm() {
  return ys("PMREMSphericalGaussianBlur", { envMap: { value: null }, sigma: { value: 0 } }, `

		#define SAMPLES ${zm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`);
}
function zl() {
  return ys("PMREMEquirectangularToCubemap", { envMap: { value: null } }, `

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`);
}
function Hl() {
  return ys("PMREMCubemapToCubemap", { envMap: { value: null }, flipEnvMap: { value: -1 } }, `

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`);
}
function Ym(n) {
  let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), i = null;
  function s(d, f = false) {
    return d == null ? null : f ? a(d) : r(d);
  }
  function r(d) {
    if (d && d.isTexture) {
      const f = d.mapping;
      if (f === Lr || f === Ir) if (e.has(d)) {
        const g = e.get(d).texture;
        return o(g, d.mapping);
      } else {
        const g = d.image;
        if (g && g.height > 0) {
          const S = new bo(g.height);
          return S.fromEquirectangularTexture(n, d), e.set(d, S), d.addEventListener("dispose", l), o(S.texture, d.mapping);
        } else return null;
      }
    }
    return d;
  }
  function a(d) {
    if (d && d.isTexture && d.isPMREMTexture !== true) {
      const f = d.mapping, g = f === Lr || f === Ir, S = f === Fi || f === us;
      if (g || S) {
        let p = t.get(d);
        const m = p !== void 0 ? p.texture.pmremVersion : 0;
        if (d.isRenderTargetTexture && d.pmremVersion !== m) return i === null && (i = new Tr(n)), p = g ? i.fromEquirectangular(d, p) : i.fromCubemap(d, p), p.texture.pmremVersion = d.pmremVersion, t.set(d, p), p.texture;
        if (p !== void 0) return p.texture;
        {
          const M = d.image;
          return g && M && M.height > 0 || S && M && c(M) ? (i === null && (i = new Tr(n)), p = g ? i.fromEquirectangular(d) : i.fromCubemap(d), p.texture.pmremVersion = d.pmremVersion, t.set(d, p), d.addEventListener("dispose", h), p.texture) : null;
        }
      }
    }
    return d;
  }
  function o(d, f) {
    return f === Lr ? d.mapping = Fi : f === Ir && (d.mapping = us), d;
  }
  function c(d) {
    let f = 0;
    const g = 6;
    for (let S = 0; S < g; S++) d[S] !== void 0 && f++;
    return f === g;
  }
  function l(d) {
    const f = d.target;
    f.removeEventListener("dispose", l);
    const g = e.get(f);
    g !== void 0 && (e.delete(f), g.dispose());
  }
  function h(d) {
    const f = d.target;
    f.removeEventListener("dispose", h);
    const g = t.get(f);
    g !== void 0 && (t.delete(f), g.dispose());
  }
  function u() {
    e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), i !== null && (i.dispose(), i = null);
  }
  return { get: s, dispose: u };
}
function qm(n) {
  const e = {};
  function t(i) {
    if (e[i] !== void 0) return e[i];
    const s = n.getExtension(i);
    return e[i] = s, s;
  }
  return { has: function(i) {
    return t(i) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(i) {
    const s = t(i);
    return s === null && fr("WebGLRenderer: " + i + " extension not supported."), s;
  } };
}
function Zm(n, e, t, i) {
  const s = {}, r = /* @__PURE__ */ new WeakMap(), a = new FinalizationRegistry((g) => delete s[g]);
  function o(g) {
    c(g.target);
  }
  function c(g) {
    g.index !== null && e.remove(g.index);
    for (const p in g.attributes) e.remove(g.attributes[p]);
    g.removeEventListener("dispose", o), delete s[g.id], a.unregister(g);
    const S = r.get(g);
    S && (e.remove(S), r.delete(g)), i.releaseStatesOfGeometry(g), g.isInstancedBufferGeometry === true && delete g._maxInstanceCount, t.memory.geometries--;
  }
  function l(g, S) {
    return s[S.id] !== void 0 || (S.addEventListener("dispose", o), s[S.id] = new WeakRef(S), a.register(S, S.id, S), t.memory.geometries++), S;
  }
  function h(g) {
    const S = g.attributes;
    for (const p in S) e.update(S[p], n.ARRAY_BUFFER);
  }
  function u(g) {
    const S = g.index, p = g.attributes.position;
    let m = 0;
    if (p === void 0) return;
    const M = S !== null ? S.array.length : p.array.length / 3 - 1, T = p.count >= 65535 ? zc : Bc, E = new T(Math.ceil(M / 3) * 6, 1), R = E.array;
    if (S !== null) {
      const _ = S.array;
      m = S.version;
      for (let y = 0, N = 0; y < M; y += 3) {
        const P = _[y + 0], I = _[y + 1], F = _[y + 2];
        R[N++] = P, R[N++] = I, R[N++] = I, R[N++] = F, R[N++] = F, R[N++] = P;
      }
    } else {
      m = p.version;
      for (let _ = 0, y = 0; _ < M; _ += 3) {
        const N = _ + 0, P = _ + 1, I = _ + 2;
        R[y++] = N, R[y++] = P, R[y++] = P, R[y++] = I, R[y++] = I, R[y++] = N;
      }
    }
    E.version = m;
    const A = r.get(g);
    A && e.remove(A), r.set(g, E);
  }
  function d(g) {
    const S = r.get(g);
    if (S) {
      const p = g.index;
      p !== null && S.version < p.version && u(g);
    } else u(g);
    return r.get(g);
  }
  function f() {
    for (const g in s) {
      const S = s[g].deref();
      S !== void 0 && c(S);
    }
  }
  return { get: l, update: h, getWireframeAttribute: d, dispose: f };
}
function Km(n, e, t) {
  let i;
  function s(u) {
    i = u;
  }
  let r, a;
  function o(u) {
    r = u.type, a = u.bytesPerElement;
  }
  function c(u, d) {
    n.drawElements(i, d, r, u * a), t.update(d, i, 1);
  }
  function l(u, d, f) {
    f !== 0 && (n.drawElementsInstanced(i, d, r, u * a, f), t.update(d, i, f));
  }
  function h(u, d, f) {
    if (f === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, d, 0, r, u, 0, f);
    let S = 0;
    for (let p = 0; p < f; p++) S += d[p];
    t.update(S, i, 1);
  }
  this.setMode = s, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = h;
}
function Jm(n) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function i(r, a, o) {
    switch (t.calls++, a) {
      case n.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case n.LINES:
        t.lines += o * (r / 2);
        break;
      case n.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case n.LINE_LOOP:
        t.lines += o * r;
        break;
      case n.POINTS:
        t.points += o * r;
        break;
      default:
        Ze("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function s() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: s, update: i };
}
function $m(n, e, t) {
  const i = /* @__PURE__ */ new WeakMap(), s = new ut();
  function r(a, o, c) {
    const l = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = i.get(o);
    if (d === void 0 || d.count !== u) {
      let N = function() {
        _.dispose(), i.delete(o), o.removeEventListener("dispose", N);
      };
      d !== void 0 && d.texture.dispose();
      const f = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, S = o.morphAttributes.color !== void 0, p = o.morphAttributes.position || [], m = o.morphAttributes.normal || [], M = o.morphAttributes.color || [];
      let T = 0;
      f === true && (T = 1), g === true && (T = 2), S === true && (T = 3);
      let E = o.attributes.position.count * T, R = 1;
      E > e.maxTextureSize && (R = Math.ceil(E / e.maxTextureSize), E = e.maxTextureSize);
      const A = new Float32Array(E * R * 4 * u), _ = new Fc(A, E, R, u);
      _.type = nn, _.needsUpdate = true;
      const y = T * 4;
      for (let P = 0; P < u; P++) {
        const I = p[P], F = m[P], G = M[P], C = E * R * 4 * P;
        for (let W = 0; W < I.count; W++) {
          const k = W * y;
          f === true && (s.fromBufferAttribute(I, W), A[C + k + 0] = s.x, A[C + k + 1] = s.y, A[C + k + 2] = s.z, A[C + k + 3] = 0), g === true && (s.fromBufferAttribute(F, W), A[C + k + 4] = s.x, A[C + k + 5] = s.y, A[C + k + 6] = s.z, A[C + k + 7] = 0), S === true && (s.fromBufferAttribute(G, W), A[C + k + 8] = s.x, A[C + k + 9] = s.y, A[C + k + 10] = s.z, A[C + k + 11] = G.itemSize === 4 ? s.w : 1);
        }
      }
      d = { count: u, texture: _, size: new ne(E, R) }, i.set(o, d), o.addEventListener("dispose", N);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) c.getUniforms().setValue(n, "morphTexture", a.morphTexture, t);
    else {
      let f = 0;
      for (let S = 0; S < l.length; S++) f += l[S];
      const g = o.morphTargetsRelative ? 1 : 1 - f;
      c.getUniforms().setValue(n, "morphTargetBaseInfluence", g), c.getUniforms().setValue(n, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(n, "morphTargetsTexture", d.texture, t), c.getUniforms().setValue(n, "morphTargetsTextureSize", d.size);
  }
  return { update: r };
}
function Qm(n, e, t, i, s) {
  let r = /* @__PURE__ */ new WeakMap();
  function a(l) {
    const h = s.render.frame, u = l.geometry, d = e.get(l, u);
    if (r.get(d) !== h && (e.update(d), r.set(d, h)), l.isInstancedMesh && (l.hasEventListener("dispose", c) === false && l.addEventListener("dispose", c), r.get(l) !== h && (t.update(l.instanceMatrix, n.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, n.ARRAY_BUFFER), r.set(l, h))), l.isSkinnedMesh) {
      const f = l.skeleton;
      r.get(f) !== h && (f.update(), r.set(f, h));
    }
    return d;
  }
  function o() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function c(l) {
    const h = l.target;
    h.removeEventListener("dispose", c), i.releaseStatesOfObject(h), t.remove(h.instanceMatrix), h.instanceColor !== null && t.remove(h.instanceColor);
  }
  return { update: a, dispose: o };
}
const jm = { [gc]: "LINEAR_TONE_MAPPING", [_c]: "REINHARD_TONE_MAPPING", [vc]: "CINEON_TONE_MAPPING", [xc]: "ACES_FILMIC_TONE_MAPPING", [Mc]: "AGX_TONE_MAPPING", [Ec]: "NEUTRAL_TONE_MAPPING", [Sc]: "CUSTOM_TONE_MAPPING" };
function eg(n, e, t, i, s, r) {
  const a = new gt(e, t, { type: n, depthBuffer: s, stencilBuffer: r, samples: i ? 4 : 0, storeMultisampledDepthBuffer: false, storeMultisampledStencilBuffer: false, resolveDepthBuffer: false, resolveStencilBuffer: false });
  let o = null, c = null, l = null;
  const h = new kt();
  h.setAttribute("position", new dt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), h.setAttribute("uv", new dt([0, 2, 0, 0, 2, 0], 2));
  const u = new Bf({ uniforms: { tDiffuse: { value: null } }, vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`, fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`, depthTest: false, depthWrite: false }), d = new un(h, u), f = new To(-1, 1, 1, -1, 0, 1);
  let g = null, S = null, p = false, m, M = null, T = [], E = false;
  this.setSize = function(R, A) {
    a.setSize(R, A), o !== null && o.setSize(R, A), c !== null && c.setSize(R, A);
    for (let _ = 0; _ < T.length; _++) {
      const y = T[_];
      y.setSize && y.setSize(R, A);
    }
  }, this.setEffects = function(R) {
    T = R, E = T.length > 0 && T[0].isRenderPass === true;
    const A = a.width, _ = a.height;
    T.length > 0 && o === null && (o = new gt(A, _, { type: Sn, depthBuffer: false, stencilBuffer: false }), c = new gt(A, _, { type: Sn, depthBuffer: false, stencilBuffer: false }));
    const y = s === true && T.some((N) => N.needsDepthTexture === true);
    y !== (a.depthTexture !== null) && (y === true && l === null && (l = new Nn(A, _), r === true && (l.format = Ln, l.type = ri)), a.dispose(), a.depthTexture = y ? l : null, a.resolveDepthBuffer = y, a.storeMultisampledDepthBuffer = y);
    for (let N = 0; N < T.length; N++) {
      const P = T[N];
      P.setSize && P.setSize(A, _), y && P.needsDepthTexture === true && P.setDepthTexture && P.setDepthTexture(l);
    }
  }, this.begin = function(R, A) {
    if (p || R.toneMapping === In && T.length === 0) return false;
    if (M = A, A !== null) {
      const _ = A.width, y = A.height;
      (a.width !== _ || a.height !== y) && this.setSize(_, y);
    }
    return E === false && R.setRenderTarget(a), m = R.toneMapping, R.toneMapping = In, true;
  }, this.hasRenderPass = function() {
    return E;
  }, this.end = function(R, A) {
    R.toneMapping = m, p = true;
    let _ = a, y = o;
    for (let N = 0; N < T.length; N++) {
      const P = T[N];
      P.enabled !== false && (P.render(R, y, _, A), P.needsSwap !== false && (_ = y, y = y === o ? c : o));
    }
    if (g !== R.outputColorSpace || S !== R.toneMapping) {
      g = R.outputColorSpace, S = R.toneMapping, u.defines = {}, Xe.getTransfer(g) === nt && (u.defines.SRGB_TRANSFER = "");
      const N = jm[S];
      N && (u.defines[N] = ""), u.needsUpdate = true;
    }
    u.uniforms.tDiffuse.value = _.texture, R.setRenderTarget(M), R.render(d, f), M = null, p = false;
  }, this.isCompositing = function() {
    return p;
  }, this.dispose = function() {
    a.dispose(), o !== null && o.dispose(), c !== null && c.dispose(), h.dispose(), u.dispose();
  };
}
const hh = new Mt(), uh = new Nn(1, 1), fh = new Vc(1), dh = new Fc(), ph = new Du(), mh = new kc(), Gl = [], kl = [], Vl = new Float32Array(16), Wl = new Float32Array(9), Xl = new Float32Array(4);
function Hi(n, e, t) {
  const i = n[0];
  if (i <= 0 || i > 0) return n;
  const s = e * t;
  let r = Gl[s];
  if (r === void 0 && (r = new Float32Array(s), Gl[s] = r), e !== 0) {
    i.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a) o += t, n[a].toArray(r, o);
  }
  return r;
}
function Et(n, e) {
  if (n.length !== e.length) return false;
  for (let t = 0, i = n.length; t < i; t++) if (n[t] !== e[t]) return false;
  return true;
}
function yt(n, e) {
  for (let t = 0, i = e.length; t < i; t++) n[t] = e[t];
}
function Rr(n, e) {
  let t = kl[e];
  t === void 0 && (t = new Int32Array(e), kl[e] = t);
  for (let i = 0; i !== e; ++i) t[i] = n.allocateTextureUnit();
  return t;
}
function tg(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1f(this.addr, e), t[0] = e);
}
function ng(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (n.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Et(t, e)) return;
    n.uniform2fv(this.addr, e), yt(t, e);
  }
}
function ig(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (n.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Et(t, e)) return;
    n.uniform3fv(this.addr, e), yt(t, e);
  }
}
function sg(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Et(t, e)) return;
    n.uniform4fv(this.addr, e), yt(t, e);
  }
}
function rg(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (Et(t, e)) return;
    n.uniformMatrix2fv(this.addr, false, e), yt(t, e);
  } else {
    if (Et(t, i)) return;
    Xl.set(i), n.uniformMatrix2fv(this.addr, false, Xl), yt(t, i);
  }
}
function ag(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (Et(t, e)) return;
    n.uniformMatrix3fv(this.addr, false, e), yt(t, e);
  } else {
    if (Et(t, i)) return;
    Wl.set(i), n.uniformMatrix3fv(this.addr, false, Wl), yt(t, i);
  }
}
function og(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (Et(t, e)) return;
    n.uniformMatrix4fv(this.addr, false, e), yt(t, e);
  } else {
    if (Et(t, i)) return;
    Vl.set(i), n.uniformMatrix4fv(this.addr, false, Vl), yt(t, i);
  }
}
function lg(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1i(this.addr, e), t[0] = e);
}
function cg(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (n.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Et(t, e)) return;
    n.uniform2iv(this.addr, e), yt(t, e);
  }
}
function hg(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Et(t, e)) return;
    n.uniform3iv(this.addr, e), yt(t, e);
  }
}
function ug(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Et(t, e)) return;
    n.uniform4iv(this.addr, e), yt(t, e);
  }
}
function fg(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1ui(this.addr, e), t[0] = e);
}
function dg(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (n.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Et(t, e)) return;
    n.uniform2uiv(this.addr, e), yt(t, e);
  }
}
function pg(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Et(t, e)) return;
    n.uniform3uiv(this.addr, e), yt(t, e);
  }
}
function mg(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Et(t, e)) return;
    n.uniform4uiv(this.addr, e), yt(t, e);
  }
}
function wr(n) {
  return n.version === 0 && (n.compareFunction = Lc, n.needsUpdate = true), n;
}
function gg(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s);
  let r;
  this.type === n.SAMPLER_2D_SHADOW ? r = wr(uh) : r = hh, t.setTexture2D(e || r, s);
}
function _g(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), t.setTexture3D(e || ph, s);
}
function vg(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s);
  let r;
  this.type === n.SAMPLER_CUBE_SHADOW ? r = wr(fh) : r = mh, t.setTextureCube(e || r, s);
}
function xg(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), t.setTexture2DArray(e || dh, s);
}
function Sg(n) {
  switch (n) {
    case 5126:
      return tg;
    case 35664:
      return ng;
    case 35665:
      return ig;
    case 35666:
      return sg;
    case 35674:
      return rg;
    case 35675:
      return ag;
    case 35676:
      return og;
    case 5124:
    case 35670:
      return lg;
    case 35667:
    case 35671:
      return cg;
    case 35668:
    case 35672:
      return hg;
    case 35669:
    case 35673:
      return ug;
    case 5125:
      return fg;
    case 36294:
      return dg;
    case 36295:
      return pg;
    case 36296:
      return mg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return gg;
    case 35679:
    case 36299:
    case 36307:
      return _g;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return vg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return xg;
  }
}
function Mg(n, e) {
  n.uniform1fv(this.addr, e);
}
function Eg(n, e) {
  const t = Hi(e, this.size, 2);
  n.uniform2fv(this.addr, t);
}
function yg(n, e) {
  const t = Hi(e, this.size, 3);
  n.uniform3fv(this.addr, t);
}
function Tg(n, e) {
  const t = Hi(e, this.size, 4);
  n.uniform4fv(this.addr, t);
}
function bg(n, e) {
  const t = Hi(e, this.size, 4);
  n.uniformMatrix2fv(this.addr, false, t);
}
function Ag(n, e) {
  const t = Hi(e, this.size, 9);
  n.uniformMatrix3fv(this.addr, false, t);
}
function Rg(n, e) {
  const t = Hi(e, this.size, 16);
  n.uniformMatrix4fv(this.addr, false, t);
}
function wg(n, e) {
  n.uniform1iv(this.addr, e);
}
function Cg(n, e) {
  n.uniform2iv(this.addr, e);
}
function Pg(n, e) {
  n.uniform3iv(this.addr, e);
}
function Dg(n, e) {
  n.uniform4iv(this.addr, e);
}
function Lg(n, e) {
  n.uniform1uiv(this.addr, e);
}
function Ig(n, e) {
  n.uniform2uiv(this.addr, e);
}
function Ug(n, e) {
  n.uniform3uiv(this.addr, e);
}
function Ng(n, e) {
  n.uniform4uiv(this.addr, e);
}
function Fg(n, e, t) {
  const i = this.cache, s = e.length, r = Rr(t, s);
  Et(i, r) || (n.uniform1iv(this.addr, r), yt(i, r));
  let a;
  this.type === n.SAMPLER_2D_SHADOW ? a = wr(uh) : a = hh;
  for (let o = 0; o !== s; ++o) t.setTexture2D(e[o] || a, r[o]);
}
function Og(n, e, t) {
  const i = this.cache, s = e.length, r = Rr(t, s);
  Et(i, r) || (n.uniform1iv(this.addr, r), yt(i, r));
  for (let a = 0; a !== s; ++a) t.setTexture3D(e[a] || ph, r[a]);
}
function Bg(n, e, t) {
  const i = this.cache, s = e.length, r = Rr(t, s);
  Et(i, r) || (n.uniform1iv(this.addr, r), yt(i, r));
  let a;
  this.type === n.SAMPLER_CUBE_SHADOW ? a = wr(fh) : a = mh;
  for (let o = 0; o !== s; ++o) t.setTextureCube(e[o] || a, r[o]);
}
function zg(n, e, t) {
  const i = this.cache, s = e.length, r = Rr(t, s);
  Et(i, r) || (n.uniform1iv(this.addr, r), yt(i, r));
  for (let a = 0; a !== s; ++a) t.setTexture2DArray(e[a] || dh, r[a]);
}
function Hg(n) {
  switch (n) {
    case 5126:
      return Mg;
    case 35664:
      return Eg;
    case 35665:
      return yg;
    case 35666:
      return Tg;
    case 35674:
      return bg;
    case 35675:
      return Ag;
    case 35676:
      return Rg;
    case 5124:
    case 35670:
      return wg;
    case 35667:
    case 35671:
      return Cg;
    case 35668:
    case 35672:
      return Pg;
    case 35669:
    case 35673:
      return Dg;
    case 5125:
      return Lg;
    case 36294:
      return Ig;
    case 36295:
      return Ug;
    case 36296:
      return Ng;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Fg;
    case 35679:
    case 36299:
    case 36307:
      return Og;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Bg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return zg;
  }
}
class Gg {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.setValue = Sg(t.type);
  }
}
class kg {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Hg(t.type);
  }
}
class Vg {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, i) {
    const s = this.seq;
    for (let r = 0, a = s.length; r !== a; ++r) {
      const o = s[r];
      o.setValue(e, t[o.id], i);
    }
  }
}
const la = /(\w+)(\])?(\[|\.)?/g;
function Yl(n, e) {
  n.seq.push(e), n.map[e.id] = e;
}
function Wg(n, e, t) {
  const i = n.name, s = i.length;
  for (la.lastIndex = 0; ; ) {
    const r = la.exec(i), a = la.lastIndex;
    let o = r[1];
    const c = r[2] === "]", l = r[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === s) {
      Yl(t, l === void 0 ? new Gg(o, n, e) : new kg(o, n, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new Vg(o), Yl(t, u)), t = u;
    }
  }
}
class dr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < i; ++a) {
      const o = e.getActiveUniform(t, a), c = e.getUniformLocation(t, o.name);
      Wg(o, c, this);
    }
    const s = [], r = [];
    for (const a of this.seq) a.type === e.SAMPLER_2D_SHADOW || a.type === e.SAMPLER_CUBE_SHADOW || a.type === e.SAMPLER_2D_ARRAY_SHADOW ? s.push(a) : r.push(a);
    s.length > 0 && (this.seq = s.concat(r));
  }
  setValue(e, t, i, s) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, i, s);
  }
  setOptional(e, t, i) {
    const s = t[i];
    s !== void 0 && this.setValue(e, i, s);
  }
  static upload(e, t, i, s) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r], c = i[o.id];
      c.needsUpdate !== false && o.setValue(e, c.value, s);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let s = 0, r = e.length; s !== r; ++s) {
      const a = e[s];
      a.id in t && i.push(a);
    }
    return i;
  }
}
function ql(n, e, t) {
  const i = n.createShader(e);
  return n.shaderSource(i, t), n.compileShader(i), i;
}
const Xg = 37297;
let Yg = 0;
function qg(n, e) {
  const t = n.split(`
`), i = [], s = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    i.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return i.join(`
`);
}
const Zl = new Ne();
function Zg(n) {
  Xe._getMatrix(Zl, Xe.workingColorSpace, n);
  const e = `mat3( ${Zl.elements.map((t) => t.toFixed(4))} )`;
  switch (Xe.getTransfer(n)) {
    case xr:
      return [e, "LinearTransferOETF"];
    case nt:
      return [e, "sRGBTransferOETF"];
    default:
      return De("WebGLProgram: Unsupported color space: ", n), [e, "LinearTransferOETF"];
  }
}
function Kl(n, e, t) {
  const i = n.getShaderParameter(e, n.COMPILE_STATUS), r = (n.getShaderInfoLog(e) || "").trim();
  if (i && r === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + r + `

` + qg(n.getShaderSource(e), o);
  } else return r;
}
function Kg(n, e) {
  const t = Zg(e);
  return [`vec4 ${n}( vec4 value ) {`, `	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`, "}"].join(`
`);
}
const Jg = { [gc]: "Linear", [_c]: "Reinhard", [vc]: "Cineon", [xc]: "ACESFilmic", [Mc]: "AgX", [Ec]: "Neutral", [Sc]: "Custom" };
function $g(n, e) {
  const t = Jg[e];
  return t === void 0 ? (De("WebGLProgram: Unsupported toneMapping:", e), "vec3 " + n + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + n + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const sr = new L();
function Qg() {
  Xe.getLuminanceCoefficients(sr);
  const n = sr.x.toFixed(4), e = sr.y.toFixed(4), t = sr.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${n}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function jg(n) {
  return [n.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(ns).join(`
`);
}
function e0(n) {
  const e = [];
  for (const t in n) {
    const i = n[t];
    i !== false && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function t0(n, e) {
  const t = {}, i = n.getProgramParameter(e, n.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < i; s++) {
    const r = n.getActiveAttrib(e, s), a = r.name;
    let o = 1;
    r.type === n.FLOAT_MAT2 && (o = 2), r.type === n.FLOAT_MAT3 && (o = 3), r.type === n.FLOAT_MAT4 && (o = 4), t[a] = { type: r.type, location: n.getAttribLocation(e, a), locationSize: o };
  }
  return t;
}
function ns(n) {
  return n !== "";
}
function Jl(n, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return n.replace(/NUM_SUN_LIGHTS/g, e.numSunLights).replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g, e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g, e.numLightProbeGrids);
}
function $l(n, e) {
  return n.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const n0 = /^[ \t]*#include +<([\w\d./]+)>/gm;
function so(n) {
  return n.replace(n0, i0);
}
function i0(n, e) {
  const t = Be[e];
  if (t === void 0) throw new Error("THREE.WebGLProgram: Can not resolve #include <" + e + ">");
  return so(t);
}
const s0 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ql(n) {
  return n.replace(s0, r0);
}
function r0(n, e, t, i) {
  let s = "";
  for (let r = parseInt(e); r < parseInt(t); r++) s += i.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function jl(n) {
  let e = `precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;
  return n.precision === "highp" ? e += `
#define HIGH_PRECISION` : n.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : n.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
const a0 = { [or]: "SHADOWMAP_TYPE_PCF", [es]: "SHADOWMAP_TYPE_VSM" };
function o0(n) {
  return a0[n.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const l0 = { [us]: "ENVMAP_MODE_REFRACTION" };
function c0(n) {
  return n.envMap === false ? "ENVMAP_MODE_REFLECTION" : l0[n.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const h0 = { [mc]: "ENVMAP_BLENDING_MULTIPLY", [Jh]: "ENVMAP_BLENDING_MIX", [$h]: "ENVMAP_BLENDING_ADD" };
function u0(n) {
  return n.envMap === false ? "ENVMAP_BLENDING_NONE" : h0[n.combine] || "ENVMAP_BLENDING_NONE";
}
function f0(n, e, t, i) {
  const s = n.getContext(), r = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = o0(t), l = t.envMapPMREM === true ? "ENVMAP_TYPE_PMREM" : "ENVMAP_TYPE_CUBE", h = c0(t), u = u0(t), d = jg(t), f = e0(r), g = s.createProgram();
  let S, p, m = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (S = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, f].filter(ns).join(`
`), S.length > 0 && (S += `
`), p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, f].filter(ns).join(`
`), p.length > 0 && (p += `
`)) : (S = [jl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, f, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.diffuseRoughnessMap ? "#define USE_DIFFUSE_ROUGHNESSMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.diffuseRoughnessMapUv ? "#define DIFFUSE_ROUGHNESSMAP_UV " + t.diffuseRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexNormals ? "#define HAS_NORMAL" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(ns).join(`
`), p = [jl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, f, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + l : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", t.envMapPMREM ? "#define ENVMAP_MAX_LOD " + t.envMapMaxLod + ".0" : "", t.envMapPMREM ? "#define ENVMAP_SIZE " + t.envMapSize + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.diffuseRoughness ? "#define USE_DIFFUSE_ROUGHNESS" : "", t.diffuseRoughnessMap ? "#define USE_DIFFUSE_ROUGHNESSMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.retroreflection ? "#define USE_RETROREFLECTION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas || t.batchingColor ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== In ? "#define TONE_MAPPING" : "", t.toneMapping !== In ? Be.tonemapping_pars_fragment : "", t.toneMapping !== In ? $g("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Be.colorspace_pars_fragment, Kg("linearToOutputTexel", t.outputColorSpace), Qg(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(ns).join(`
`)), a = so(a), a = Jl(a, t), a = $l(a, t), o = so(o), o = Jl(o, t), o = $l(o, t), a = Ql(a), o = Ql(o), t.isRawShaderMaterial !== true && (m = `#version 300 es
`, S = [d, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + S, p = ["#define varying in", t.glslVersion === ko ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === ko ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + p);
  const M = m + S + a, T = m + p + o, E = ql(s, s.VERTEX_SHADER, M), R = ql(s, s.FRAGMENT_SHADER, T);
  s.attachShader(g, E), s.attachShader(g, R), t.index0AttributeName !== void 0 ? s.bindAttribLocation(g, 0, t.index0AttributeName) : t.hasPositionAttribute === true && s.bindAttribLocation(g, 0, "position"), s.linkProgram(g);
  function A(P) {
    if (n.debug.checkShaderErrors) {
      const I = s.getProgramInfoLog(g) || "", F = s.getShaderInfoLog(E) || "", G = s.getShaderInfoLog(R) || "", C = I.trim(), W = F.trim(), k = G.trim();
      let H = true, ee = true;
      if (s.getProgramParameter(g, s.LINK_STATUS) === false) if (H = false, typeof n.debug.onShaderError == "function") n.debug.onShaderError(s, g, E, R);
      else {
        const X = Kl(s, E, "vertex"), Q = Kl(s, R, "fragment");
        Ze("WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(g, s.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + C + `
` + X + `
` + Q);
      }
      else C !== "" ? De("WebGLProgram: Program Info Log:", C) : (W === "" || k === "") && (ee = false);
      ee && (P.diagnostics = { runnable: H, programLog: C, vertexShader: { log: W, prefix: S }, fragmentShader: { log: k, prefix: p } });
    }
    s.deleteShader(E), s.deleteShader(R), _ = new dr(s, g), y = t0(s, g);
  }
  let _;
  this.getUniforms = function() {
    return _ === void 0 && A(this), _;
  };
  let y;
  this.getAttributes = function() {
    return y === void 0 && A(this), y;
  };
  let N = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return N === false && (N = s.getProgramParameter(g, Xg)), N;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), s.deleteProgram(g), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Yg++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = E, this.fragmentShader = R, this;
}
let d0 = 0;
class p0 {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e, t, i) {
    const s = this._getShaderCacheForMaterial(e);
    return s.has(t) === false && (s.add(t), t.usedTimes++), s.has(i) === false && (s.add(i), i.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t) i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderStage(e) {
    return this._getShaderStage(e.vertexShader);
  }
  getFragmentShaderStage(e) {
    return this._getShaderStage(e.fragmentShader);
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let i = t.get(e);
    return i === void 0 && (i = /* @__PURE__ */ new Set(), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let i = t.get(e);
    return i === void 0 && (i = new m0(e), t.set(e, i)), i;
  }
}
class m0 {
  constructor(e) {
    this.id = d0++, this.code = e, this.usedTimes = 0;
  }
}
function g0(n) {
  return n === ai || n === _r || n === vr;
}
function _0(n, e, t, i, s, r) {
  const a = new vo(), o = new p0(), c = /* @__PURE__ */ new Set(), l = [], h = /* @__PURE__ */ new Map(), u = i.logarithmicDepthBuffer, d = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distance", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function f(_) {
    return c.add(_), _ === 0 ? "uv" : `uv${_}`;
  }
  function g(_, y, N, P, I, F) {
    const G = P.fog, C = I.geometry, W = _.isMeshStandardMaterial || _.isMeshLambertMaterial || _.isMeshPhongMaterial ? P.environment : null, k = _.isMeshStandardMaterial || _.isMeshLambertMaterial && !_.envMap || _.isMeshPhongMaterial && !_.envMap, H = e.get(_.envMap || W, k), ee = d[_.type];
    let X = i.precision;
    _.precision !== null && (X = i.getMaxPrecision(_.precision), X !== _.precision && De("WebGLProgram.getParameters:", _.precision, "not supported, using", X, "instead."));
    const Q = C.morphAttributes.position || C.morphAttributes.normal || C.morphAttributes.color, j = Q !== void 0 ? Q.length : 0;
    let Se = 0;
    C.morphAttributes.position !== void 0 && (Se = 1), C.morphAttributes.normal !== void 0 && (Se = 2), C.morphAttributes.color !== void 0 && (Se = 3);
    let Le, q, de, ve;
    if (ee) {
      const me = gn[ee];
      Le = me.vertexShader, q = me.fragmentShader;
    } else {
      Le = _.vertexShader, q = _.fragmentShader;
      const me = o.getVertexShaderStage(_), tt = o.getFragmentShaderStage(_);
      o.update(_, me, tt), de = me.id, ve = tt.id;
    }
    const Ae = n.getRenderTarget(), pe = n.state.buffers.depth.getReversed(), be = I.isInstancedMesh === true, Ke = I.isBatchedMesh === true, we = !!_.map, et = !!_.matcap, it = !!H, Ge = it && H.isPMREMTexture === true, Pt = !!_.aoMap, vt = !!_.lightMap, Vt = !!_.bumpMap && _.wireframe === false, ct = !!_.normalMap, dn = !!_.displacementMap, Tt = !!_.emissiveMap, Jt = !!_.metalnessMap, $t = !!_.roughnessMap, Qt = _.anisotropy > 0, U = _.clearcoat > 0, jt = _.diffuseRoughness > 0, at = _.dispersion > 0, ot = _.retroreflectivity > 0, fe = _.iridescence > 0, xt = _.sheen > 0, Pe = _.transmission > 0, Ie = Qt && !!_.anisotropyMap, b = U && !!_.clearcoatMap, v = U && !!_.clearcoatNormalMap, B = U && !!_.clearcoatRoughnessMap, te = jt && !!_.diffuseRoughnessMap, $ = fe && !!_.iridescenceMap, re = fe && !!_.iridescenceThicknessMap, he = xt && !!_.sheenColorMap, Z = xt && !!_.sheenRoughnessMap, K = !!_.specularMap, oe = !!_.specularColorMap, w = !!_.specularIntensityMap, J = Pe && !!_.transmissionMap, Y = Pe && !!_.thicknessMap, le = !!_.gradientMap, se = !!_.alphaMap, ae = _.alphaTest > 0, Te = !!_.alphaHash, Oe = !!_.extensions;
    let ie = In;
    _.toneMapped && (Ae === null || Ae.isXRRenderTarget === true) && (ie = n.toneMapping);
    const Re = Ge ? H.isCompressedCubeTexture ? H.image[0].mipmaps : H.mipmaps : null, Fe = { shaderID: ee, shaderType: _.type, shaderName: _.name, vertexShader: Le, fragmentShader: q, defines: _.defines, customVertexShaderID: de, customFragmentShaderID: ve, isRawShaderMaterial: _.isRawShaderMaterial === true, glslVersion: _.glslVersion, precision: X, batching: Ke, batchingColor: Ke && I._colorsTexture !== null, instancing: be, instancingColor: be && I.instanceColor !== null, instancingMorph: be && I.morphTexture !== null, outputColorSpace: Ae === null ? n.outputColorSpace : Ae.isXRRenderTarget === true ? Ae.texture.colorSpace : Xe.workingColorSpace, alphaToCoverage: !!_.alphaToCoverage, map: we, matcap: et, envMap: it, envMapMode: it && H.mapping, envMapPMREM: Ge, envMapMaxLod: Ge ? Re.length - 1 : null, envMapSize: Ge ? Re[0].width : null, aoMap: Pt, lightMap: vt, bumpMap: Vt, normalMap: ct, displacementMap: dn, emissiveMap: Tt, normalMapObjectSpace: ct && _.normalMapType === jh, normalMapTangentSpace: ct && _.normalMapType === Qa, packedNormalMap: ct && _.normalMapType === Qa && g0(_.normalMap.format), metalnessMap: Jt, roughnessMap: $t, anisotropy: Qt, anisotropyMap: Ie, clearcoat: U, clearcoatMap: b, clearcoatNormalMap: v, clearcoatRoughnessMap: B, diffuseRoughness: jt, diffuseRoughnessMap: te, dispersion: at, retroreflection: ot, iridescence: fe, iridescenceMap: $, iridescenceThicknessMap: re, sheen: xt, sheenColorMap: he, sheenRoughnessMap: Z, specularMap: K, specularColorMap: oe, specularIntensityMap: w, transmission: Pe, transmissionMap: J, thicknessMap: Y, gradientMap: le, opaque: _.transparent === false && _.blending === is && _.alphaToCoverage === false, alphaMap: se, alphaTest: ae, alphaHash: Te, combine: _.combine, mapUv: we && f(_.map.channel), aoMapUv: Pt && f(_.aoMap.channel), lightMapUv: vt && f(_.lightMap.channel), bumpMapUv: Vt && f(_.bumpMap.channel), normalMapUv: ct && f(_.normalMap.channel), displacementMapUv: dn && f(_.displacementMap.channel), emissiveMapUv: Tt && f(_.emissiveMap.channel), metalnessMapUv: Jt && f(_.metalnessMap.channel), roughnessMapUv: $t && f(_.roughnessMap.channel), anisotropyMapUv: Ie && f(_.anisotropyMap.channel), clearcoatMapUv: b && f(_.clearcoatMap.channel), clearcoatNormalMapUv: v && f(_.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: B && f(_.clearcoatRoughnessMap.channel), diffuseRoughnessMapUv: te && f(_.diffuseRoughnessMap.channel), iridescenceMapUv: $ && f(_.iridescenceMap.channel), iridescenceThicknessMapUv: re && f(_.iridescenceThicknessMap.channel), sheenColorMapUv: he && f(_.sheenColorMap.channel), sheenRoughnessMapUv: Z && f(_.sheenRoughnessMap.channel), specularMapUv: K && f(_.specularMap.channel), specularColorMapUv: oe && f(_.specularColorMap.channel), specularIntensityMapUv: w && f(_.specularIntensityMap.channel), transmissionMapUv: J && f(_.transmissionMap.channel), thicknessMapUv: Y && f(_.thicknessMap.channel), alphaMapUv: se && f(_.alphaMap.channel), vertexTangents: !!C.attributes.tangent && (ct || Qt), vertexNormals: !!C.attributes.normal, vertexColors: _.vertexColors, vertexAlphas: _.vertexColors === true && !!C.attributes.color && C.attributes.color.itemSize === 4, pointsUvs: I.isPoints === true && !!C.attributes.uv && (we || se), fog: !!G, useFog: _.fog === true, fogExp2: !!G && G.isFogExp2, flatShading: _.wireframe === false && (_.flatShading === true || C.attributes.normal === void 0 && ct === false && (_.isMeshLambertMaterial || _.isMeshPhongMaterial || _.isMeshStandardMaterial || _.isMeshPhysicalMaterial)), sizeAttenuation: _.sizeAttenuation === true, logarithmicDepthBuffer: u, reversedDepthBuffer: pe, skinning: I.isSkinnedMesh === true, hasPositionAttribute: C.attributes.position !== void 0, morphTargets: C.morphAttributes.position !== void 0, morphNormals: C.morphAttributes.normal !== void 0, morphColors: C.morphAttributes.color !== void 0, morphTargetsCount: j, morphTextureStride: Se, numSunLights: y.sun.length, numDirLights: y.directional.length, numPointLights: y.point.length, numSpotLights: y.spot.length, numSpotLightMaps: y.spotLightMap.length, numRectAreaLights: y.rectArea.length, numHemiLights: y.hemi.length, numSunLightShadows: y.sunShadowMap.length, numDirLightShadows: y.directionalShadowMap.length, numPointLightShadows: y.pointShadowMap.length, numSpotLightShadows: y.spotShadowMap.length, numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps, numLightProbes: y.numLightProbes, numLightProbeGrids: F.filter((me) => me.texture !== null).length, numClippingPlanes: r.numPlanes, numClipIntersection: r.numIntersection, dithering: _.dithering, shadowMapEnabled: n.shadowMap.enabled && N.length > 0, shadowMapType: n.shadowMap.type, toneMapping: ie, decodeVideoTexture: we && _.map.isVideoTexture === true && Xe.getTransfer(_.map.colorSpace) === nt, decodeVideoTextureEmissive: Tt && _.emissiveMap.isVideoTexture === true && Xe.getTransfer(_.emissiveMap.colorSpace) === nt, premultipliedAlpha: _.premultipliedAlpha, doubleSided: _.side === Zt, flipSided: _.side === wt, useDepthPacking: _.depthPacking >= 0, depthPacking: _.depthPacking || 0, index0AttributeName: _.index0AttributeName, extensionClipCullDistance: Oe && _.extensions.clipCullDistance === true && t.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Oe && _.extensions.multiDraw === true || Ke) && t.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: t.has("KHR_parallel_shader_compile"), customProgramCacheKey: _.customProgramCacheKey() };
    return Fe.vertexUv1s = c.has(1), Fe.vertexUv2s = c.has(2), Fe.vertexUv3s = c.has(3), c.clear(), Fe;
  }
  function S(_) {
    const y = [];
    if (_.shaderID ? y.push(_.shaderID) : (y.push(_.customVertexShaderID), y.push(_.customFragmentShaderID)), _.defines !== void 0) for (const N in _.defines) y.push(N), y.push(_.defines[N]);
    return _.isRawShaderMaterial === false && (p(y, _), m(y, _), y.push(n.outputColorSpace)), y.push(_.customProgramCacheKey), y.join();
  }
  function p(_, y) {
    _.push(y.precision), _.push(y.outputColorSpace), _.push(y.envMapMode), _.push(y.envMapPMREM), _.push(y.envMapMaxLod), _.push(y.envMapSize), _.push(y.mapUv), _.push(y.alphaMapUv), _.push(y.lightMapUv), _.push(y.aoMapUv), _.push(y.bumpMapUv), _.push(y.normalMapUv), _.push(y.displacementMapUv), _.push(y.emissiveMapUv), _.push(y.metalnessMapUv), _.push(y.roughnessMapUv), _.push(y.anisotropyMapUv), _.push(y.clearcoatMapUv), _.push(y.clearcoatNormalMapUv), _.push(y.clearcoatRoughnessMapUv), _.push(y.diffuseRoughnessMapUv), _.push(y.iridescenceMapUv), _.push(y.iridescenceThicknessMapUv), _.push(y.sheenColorMapUv), _.push(y.sheenRoughnessMapUv), _.push(y.specularMapUv), _.push(y.specularColorMapUv), _.push(y.specularIntensityMapUv), _.push(y.transmissionMapUv), _.push(y.thicknessMapUv), _.push(y.combine), _.push(y.fogExp2), _.push(y.sizeAttenuation), _.push(y.morphTargetsCount), _.push(y.numSunLights), _.push(y.numDirLights), _.push(y.numPointLights), _.push(y.numSpotLights), _.push(y.numSpotLightMaps), _.push(y.numHemiLights), _.push(y.numRectAreaLights), _.push(y.numSunLightShadows), _.push(y.numDirLightShadows), _.push(y.numPointLightShadows), _.push(y.numSpotLightShadows), _.push(y.numSpotLightShadowsWithMaps), _.push(y.numLightProbes), _.push(y.numLightProbeGrids), _.push(y.shadowMapType), _.push(y.toneMapping), _.push(y.numClippingPlanes), _.push(y.numClipIntersection), _.push(y.depthPacking);
  }
  function m(_, y) {
    a.disableAll(), y.instancing && a.enable(0), y.instancingColor && a.enable(1), y.instancingMorph && a.enable(2), y.matcap && a.enable(3), y.envMap && a.enable(4), y.normalMapObjectSpace && a.enable(5), y.normalMapTangentSpace && a.enable(6), y.clearcoat && a.enable(7), y.iridescence && a.enable(8), y.alphaTest && a.enable(9), y.vertexColors && a.enable(10), y.vertexAlphas && a.enable(11), y.vertexUv1s && a.enable(12), y.vertexUv2s && a.enable(13), y.vertexUv3s && a.enable(14), y.vertexTangents && a.enable(15), y.anisotropy && a.enable(16), y.alphaHash && a.enable(17), y.batching && a.enable(18), y.dispersion && a.enable(19), y.retroreflection && a.enable(24), y.diffuseRoughness && a.enable(25), y.batchingColor && a.enable(20), y.gradientMap && a.enable(21), y.packedNormalMap && a.enable(22), y.vertexNormals && a.enable(23), _.push(a.mask), a.disableAll(), y.fog && a.enable(0), y.useFog && a.enable(1), y.flatShading && a.enable(2), y.logarithmicDepthBuffer && a.enable(3), y.reversedDepthBuffer && a.enable(4), y.skinning && a.enable(5), y.morphTargets && a.enable(6), y.morphNormals && a.enable(7), y.morphColors && a.enable(8), y.premultipliedAlpha && a.enable(9), y.shadowMapEnabled && a.enable(10), y.doubleSided && a.enable(11), y.flipSided && a.enable(12), y.useDepthPacking && a.enable(13), y.dithering && a.enable(14), y.transmission && a.enable(15), y.sheen && a.enable(16), y.opaque && a.enable(17), y.pointsUvs && a.enable(18), y.decodeVideoTexture && a.enable(19), y.decodeVideoTextureEmissive && a.enable(20), y.alphaToCoverage && a.enable(21), y.numLightProbeGrids > 0 && a.enable(22), y.hasPositionAttribute && a.enable(23), _.push(a.mask);
  }
  function M(_) {
    const y = d[_.type];
    let N;
    if (y) {
      const P = gn[y];
      N = Nf.clone(P.uniforms);
    } else N = _.uniforms;
    return N;
  }
  function T(_, y) {
    let N = h.get(y);
    return N !== void 0 ? ++N.usedTimes : (N = new f0(n, y, _, s), l.push(N), h.set(y, N)), N;
  }
  function E(_) {
    if (--_.usedTimes === 0) {
      const y = l.indexOf(_);
      l[y] = l[l.length - 1], l.pop(), h.delete(_.cacheKey), _.destroy();
    }
  }
  function R(_) {
    o.remove(_);
  }
  function A() {
    o.dispose();
  }
  return { getParameters: g, getProgramCacheKey: S, getUniforms: M, acquireProgram: T, releaseProgram: E, releaseShaderCache: R, programs: l, dispose: A };
}
function v0() {
  let n = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return n.has(a);
  }
  function t(a) {
    let o = n.get(a);
    return o === void 0 && (o = {}, n.set(a, o)), o;
  }
  function i(a) {
    n.delete(a);
  }
  function s(a, o, c) {
    n.get(a)[o] = c;
  }
  function r() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: i, update: s, dispose: r };
}
function x0(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.material.id !== e.material.id ? n.material.id - e.material.id : n.materialVariant !== e.materialVariant ? n.materialVariant - e.materialVariant : n.z !== e.z ? n.z - e.z : n.id - e.id;
}
function ec(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.z !== e.z ? e.z - n.z : n.id - e.id;
}
function tc() {
  const n = [];
  let e = 0;
  const t = [], i = [], s = [];
  function r() {
    e = 0, t.length = 0, i.length = 0, s.length = 0;
  }
  function a(d) {
    let f = 0;
    return d.isInstancedMesh && (f += 2), d.isSkinnedMesh && (f += 1), f;
  }
  function o(d, f, g, S, p, m) {
    let M = n[e];
    return M === void 0 ? (M = { id: d.id, object: d, geometry: f, material: g, materialVariant: a(d), groupOrder: S, renderOrder: d.renderOrder, z: p, group: m }, n[e] = M) : (M.id = d.id, M.object = d, M.geometry = f, M.material = g, M.materialVariant = a(d), M.groupOrder = S, M.renderOrder = d.renderOrder, M.z = p, M.group = m), e++, M;
  }
  function c(d, f, g, S, p, m, M) {
    M.reversedDepth === true && (p = -p);
    const T = o(d, f, g, S, p, m);
    g.transmission > 0 ? i.push(T) : g.transparent === true ? s.push(T) : t.push(T);
  }
  function l(d, f, g, S, p, m) {
    const M = o(d, f, g, S, p, m);
    g.transmission > 0 ? i.unshift(M) : g.transparent === true ? s.unshift(M) : t.unshift(M);
  }
  function h(d, f) {
    t.length > 1 && t.sort(d || x0), i.length > 1 && i.sort(f || ec), s.length > 1 && s.sort(f || ec);
  }
  function u() {
    for (let d = e, f = n.length; d < f; d++) {
      const g = n[d];
      if (g.id === null) break;
      g.id = null, g.object = null, g.geometry = null, g.material = null, g.group = null;
    }
  }
  return { opaque: t, transmissive: i, transparent: s, init: r, push: c, unshift: l, finish: u, sort: h };
}
function S0() {
  let n = /* @__PURE__ */ new WeakMap();
  function e(i, s) {
    const r = n.get(i);
    let a;
    return r === void 0 ? (a = new tc(), n.set(i, [a])) : s >= r.length ? (a = new tc(), r.push(a)) : a = r[s], a;
  }
  function t() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function M0() {
  const n = {};
  return { get: function(e) {
    if (n[e.id] !== void 0) return n[e.id];
    let t;
    switch (e.type) {
      case "SunLight":
      case "DirectionalLight":
        t = { direction: new L(), color: new He() };
        break;
      case "SpotLight":
        t = { position: new L(), direction: new L(), color: new He(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new L(), color: new He(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new L(), skyColor: new He(), groundColor: new He() };
        break;
      case "RectAreaLight":
        t = { color: new He(), position: new L(), halfWidth: new L(), halfHeight: new L() };
        break;
    }
    return n[e.id] = t, t;
  } };
}
function E0() {
  const n = {};
  return { get: function(e) {
    if (n[e.id] !== void 0) return n[e.id];
    let t;
    switch (e.type) {
      case "SunLight":
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ne() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ne() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new ne(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return n[e.id] = t, t;
  } };
}
let y0 = 0;
function T0(n, e) {
  return (e.castShadow ? 2 : 0) - (n.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (n.map ? 1 : 0);
}
function b0(n) {
  const e = new M0(), t = E0(), i = { version: 0, hash: { sunLength: -1, directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numSunShadows: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], sun: [], sunShadow: [], sunShadowMap: [], sunShadowMatrix: [], sunShadowCascade: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let l = 0; l < 9; l++) i.probe.push(new L());
  const s = new L(), r = new $e(), a = new $e();
  function o(l) {
    let h = 0, u = 0, d = 0;
    for (let F = 0; F < 9; F++) i.probe[F].set(0, 0, 0);
    let f = 0, g = 0, S = 0, p = 0, m = 0, M = 0, T = 0, E = 0, R = 0, A = 0, _ = 0, y = 0, N = 0, P = 0;
    l.sort(T0);
    for (let F = 0, G = l.length; F < G; F++) {
      const C = l[F], W = C.color, k = C.intensity, H = C.distance;
      let ee = null;
      if (C.shadow && C.shadow.map && (C.shadow.map.texture.format === ai ? ee = C.shadow.map.texture : ee = C.shadow.map.depthTexture || C.shadow.map.texture), C.isAmbientLight) h += W.r * k, u += W.g * k, d += W.b * k;
      else if (C.isLightProbe) {
        for (let X = 0; X < 9; X++) i.probe[X].addScaledVector(C.sh.coefficients[X], k);
        P++;
      } else if (C.isSunLight) {
        const X = e.get(C);
        if (X.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow) {
          const Q = C.shadow, j = t.get(C);
          j.shadowIntensity = Q.intensity, j.shadowBias = Q.bias, j.shadowNormalBias = Q.normalBias, j.shadowRadius = Q.radius, j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()), i.sunShadow[g] = j, i.sunShadowMap[g] = ee;
          const Se = Q.getViewportCount();
          for (let Le = 0; Le < Se; Le++) i.sunShadowMatrix[S + Le] = Q.getMatrix(Le), i.sunShadowCascade[S + Le] = Q._cascadeData[Le];
          S += Se, g++;
        }
        i.sun[f] = X, f++;
      } else if (C.isDirectionalLight) {
        const X = e.get(C);
        if (X.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow) {
          const Q = C.shadow, j = t.get(C);
          j.shadowIntensity = Q.intensity, j.shadowBias = Q.bias, j.shadowNormalBias = Q.normalBias, j.shadowRadius = Q.radius, j.shadowMapSize = Q.mapSize, i.directionalShadow[p] = j, i.directionalShadowMap[p] = ee, i.directionalShadowMatrix[p] = C.shadow.matrix, R++;
        }
        i.directional[p] = X, p++;
      } else if (C.isSpotLight) {
        const X = e.get(C);
        X.position.setFromMatrixPosition(C.matrixWorld), X.color.copy(W).multiplyScalar(k), X.distance = H, X.coneCos = Math.cos(C.angle), X.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), X.decay = C.decay, i.spot[M] = X;
        const Q = C.shadow;
        if (C.map && (i.spotLightMap[y] = C.map, y++, Q.updateMatrices(C), C.castShadow && N++), i.spotLightMatrix[M] = Q.matrix, C.castShadow) {
          const j = t.get(C);
          j.shadowIntensity = Q.intensity, j.shadowBias = Q.bias, j.shadowNormalBias = Q.normalBias, j.shadowRadius = Q.radius, j.shadowMapSize = Q.mapSize, i.spotShadow[M] = j, i.spotShadowMap[M] = ee, _++;
        }
        M++;
      } else if (C.isRectAreaLight) {
        const X = e.get(C);
        X.color.copy(W).multiplyScalar(k), X.halfWidth.set(C.width * 0.5, 0, 0), X.halfHeight.set(0, C.height * 0.5, 0), i.rectArea[T] = X, T++;
      } else if (C.isPointLight) {
        const X = e.get(C);
        if (X.color.copy(C.color).multiplyScalar(C.intensity), X.distance = C.distance, X.decay = C.decay, C.castShadow) {
          const Q = C.shadow, j = t.get(C);
          j.shadowIntensity = Q.intensity, j.shadowBias = Q.bias, j.shadowNormalBias = Q.normalBias, j.shadowRadius = Q.radius, j.shadowMapSize = Q.mapSize, j.shadowCameraNear = Q.camera.near, j.shadowCameraFar = Q.camera.far, i.pointShadow[m] = j, i.pointShadowMap[m] = ee, i.pointShadowMatrix[m] = C.shadow.matrix, A++;
        }
        i.point[m] = X, m++;
      } else if (C.isHemisphereLight) {
        const X = e.get(C);
        X.skyColor.copy(C.color).multiplyScalar(k), X.groundColor.copy(C.groundColor).multiplyScalar(k), i.hemi[E] = X, E++;
      }
    }
    T > 0 && (n.has("OES_texture_float_linear") === true ? (i.rectAreaLTC1 = ge.LTC_FLOAT_1, i.rectAreaLTC2 = ge.LTC_FLOAT_2) : (i.rectAreaLTC1 = ge.LTC_HALF_1, i.rectAreaLTC2 = ge.LTC_HALF_2)), i.ambient[0] = h, i.ambient[1] = u, i.ambient[2] = d;
    const I = i.hash;
    (I.sunLength !== f || I.directionalLength !== p || I.pointLength !== m || I.spotLength !== M || I.rectAreaLength !== T || I.hemiLength !== E || I.numSunShadows !== g || I.numDirectionalShadows !== R || I.numPointShadows !== A || I.numSpotShadows !== _ || I.numSpotMaps !== y || I.numLightProbes !== P) && (i.sun.length = f, i.directional.length = p, i.spot.length = M, i.rectArea.length = T, i.point.length = m, i.hemi.length = E, i.sunShadow.length = g, i.sunShadowMap.length = g, i.sunShadowMatrix.length = S, i.sunShadowCascade.length = S, i.directionalShadow.length = R, i.directionalShadowMap.length = R, i.directionalShadowMatrix.length = R, i.pointShadow.length = A, i.pointShadowMap.length = A, i.pointShadowMatrix.length = A, i.spotShadow.length = _, i.spotShadowMap.length = _, i.spotLightMatrix.length = _ + y - N, i.spotLightMap.length = y, i.numSpotLightShadowsWithMaps = N, i.numLightProbes = P, I.sunLength = f, I.directionalLength = p, I.pointLength = m, I.spotLength = M, I.rectAreaLength = T, I.hemiLength = E, I.numSunShadows = g, I.numDirectionalShadows = R, I.numPointShadows = A, I.numSpotShadows = _, I.numSpotMaps = y, I.numLightProbes = P, i.version = y0++);
  }
  function c(l, h) {
    let u = 0, d = 0, f = 0, g = 0, S = 0, p = 0;
    const m = h.matrixWorldInverse;
    for (let M = 0, T = l.length; M < T; M++) {
      const E = l[M];
      if (E.isSunLight) {
        const R = i.sun[u];
        R.direction.setFromMatrixPosition(E.matrixWorld), R.direction.transformDirection(m), u++;
      } else if (E.isDirectionalLight) {
        const R = i.directional[d];
        R.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), R.direction.sub(s), R.direction.transformDirection(m), d++;
      } else if (E.isSpotLight) {
        const R = i.spot[g];
        R.position.setFromMatrixPosition(E.matrixWorld), R.position.applyMatrix4(m), R.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), R.direction.sub(s), R.direction.transformDirection(m), g++;
      } else if (E.isRectAreaLight) {
        const R = i.rectArea[S];
        R.position.setFromMatrixPosition(E.matrixWorld), R.position.applyMatrix4(m), a.identity(), r.copy(E.matrixWorld), r.premultiply(m), a.extractRotation(r), R.halfWidth.set(E.width * 0.5, 0, 0), R.halfHeight.set(0, E.height * 0.5, 0), R.halfWidth.applyMatrix4(a), R.halfHeight.applyMatrix4(a), S++;
      } else if (E.isPointLight) {
        const R = i.point[f];
        R.position.setFromMatrixPosition(E.matrixWorld), R.position.applyMatrix4(m), f++;
      } else if (E.isHemisphereLight) {
        const R = i.hemi[p];
        R.direction.setFromMatrixPosition(E.matrixWorld), R.direction.transformDirection(m), p++;
      }
    }
  }
  return { setup: o, setupView: c, state: i };
}
function nc(n) {
  const e = new b0(n), t = [], i = [], s = [];
  function r(u) {
    h.camera = u, t.length = 0, i.length = 0, s.length = 0;
  }
  function a(u) {
    u.isLightProbeGrid ? s.push(u) : t.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function c() {
    e.setup(t), s.sort((u, d) => u.priority - d.priority || u.id - d.id);
  }
  function l(u) {
    e.setupView(t, u);
  }
  const h = { lightsArray: t, shadowsArray: i, lightProbeGridArray: s, camera: null, lights: e, transmissionRenderTarget: {}, textureUnits: 0 };
  return { init: r, state: h, setupLights: c, setupLightsView: l, pushLight: a, pushShadow: o };
}
function A0(n) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(s, r = 0) {
    const a = e.get(s);
    let o;
    return a === void 0 ? (o = new nc(n), e.set(s, [o])) : r >= a.length ? (o = new nc(n), a.push(o)) : o = a[r], o;
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: i };
}
const R0 = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, w0 = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`, C0 = [new L(1, 0, 0), new L(-1, 0, 0), new L(0, 1, 0), new L(0, -1, 0), new L(0, 0, 1), new L(0, 0, -1)], P0 = [new L(0, -1, 0), new L(0, -1, 0), new L(0, 0, 1), new L(0, 0, -1), new L(0, -1, 0), new L(0, -1, 0)], ic = new $e(), Qi = new L(), ca = new L();
function D0(n, e, t) {
  let i = new gs();
  const s = new ne(), r = new ne(), a = new ut(), o = new Hf(), c = new Gf(), l = {}, h = t.maxTextureSize, u = { [Zn]: wt, [wt]: Zn, [Zt]: Zt }, d = new It({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new ne() }, radius: { value: 4 } }, vertexShader: R0, fragmentShader: w0 }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const g = new kt();
  g.setAttribute("position", new hn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const S = new un(g, d), p = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = or;
  let m = this.type;
  this.render = function(A, _, y) {
    if (p.enabled === false || p.autoUpdate === false && p.needsUpdate === false || A.length === 0) return;
    this.type === Dh && (De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."), this.type = or);
    const N = n.getRenderTarget(), P = n.getActiveCubeFace(), I = n.getActiveMipmapLevel(), F = n.state;
    F.setBlending(Gt), F.buffers.depth.getReversed() === true ? F.buffers.color.setClear(0, 0, 0, 0) : F.buffers.color.setClear(1, 1, 1, 1), F.buffers.depth.setTest(true), F.setScissorTest(false);
    const G = m !== this.type;
    G && _.traverse(function(C) {
      C.material && (Array.isArray(C.material) ? C.material.forEach((W) => W.needsUpdate = true) : C.material.needsUpdate = true);
    });
    for (let C = 0, W = A.length; C < W; C++) {
      const k = A[C], H = k.shadow;
      if (H === void 0) {
        De("WebGLShadowMap:", k, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === false && H.needsUpdate === false) continue;
      s.copy(H.mapSize);
      const ee = H.getFrameExtents();
      s.multiply(ee), r.copy(H.mapSize), (s.x > h || s.y > h) && (s.x > h && (r.x = Math.floor(h / ee.x), s.x = r.x * ee.x, H.mapSize.x = r.x), s.y > h && (r.y = Math.floor(h / ee.y), s.y = r.y * ee.y, H.mapSize.y = r.y));
      const X = n.state.buffers.depth.getReversed();
      if (H.camera._reversedDepth = X, H.map === null || G === true) {
        if (H.map !== null && (H.map.depthTexture !== null && (H.map.depthTexture.dispose(), H.map.depthTexture = null), H.map.dispose()), this.type === es) {
          if (k.isPointLight) {
            De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          H.map = new gt(s.x, s.y, { format: ai, type: Sn, minFilter: Ct, magFilter: Ct, generateMipmaps: false }), H.map.texture.name = k.name + ".shadowMap", H.map.depthTexture = new Nn(s.x, s.y, nn), H.map.depthTexture.name = k.name + ".shadowMapDepth", H.map.depthTexture.format = Kn, H.map.depthTexture.compareFunction = null, H.map.depthTexture.minFilter = Lt, H.map.depthTexture.magFilter = Lt;
        } else k.isPointLight ? (H.map = new bo(s.x), H.map.depthTexture = new Vc(s.x, xn)) : (H.map = new gt(s.x, s.y), H.map.depthTexture = new Nn(s.x, s.y, xn)), H.map.depthTexture.name = k.name + ".shadowMap", H.map.depthTexture.format = Kn, this.type === or ? (H.map.depthTexture.compareFunction = X ? Dc : Pc, H.map.depthTexture.minFilter = Ct, H.map.depthTexture.magFilter = Ct) : (H.map.depthTexture.compareFunction = null, H.map.depthTexture.minFilter = Lt, H.map.depthTexture.magFilter = Lt);
        H.camera.updateProjectionMatrix();
      }
      H.map.isWebGLCubeRenderTarget !== true && (H.map.width !== s.x || H.map.height !== s.y) && H.map.setSize(s.x, s.y);
      const Q = H.map.isWebGLCubeRenderTarget ? 6 : H.getViewportCount();
      k.isPointLight !== true && H.updateMatrices(k, y);
      const j = (H.camera.layers.mask & 4294967294) !== 0 ? H.camera.layers : y.layers;
      for (let Se = 0; Se < Q; Se++) {
        const Le = H.getCamera(Se);
        if (k.isPointLight) {
          const q = H.camera, de = H.matrix, ve = k.distance || q.far;
          ve !== q.far && (q.far = ve, q.updateProjectionMatrix()), Qi.setFromMatrixPosition(k.matrixWorld), q.position.copy(Qi), ca.copy(q.position), ca.add(C0[Se]), q.up.copy(P0[Se]), q.lookAt(ca), q.updateMatrixWorld(), de.makeTranslation(-Qi.x, -Qi.y, -Qi.z), ic.multiplyMatrices(q.projectionMatrix, q.matrixWorldInverse), H._frustum.setFromProjectionMatrix(ic, q.coordinateSystem, q.reversedDepth);
        }
        if (H.map.isWebGLCubeRenderTarget) n.setRenderTarget(H.map, Se), n.clear();
        else {
          Se === 0 && (n.setRenderTarget(H.map), n.clear());
          const q = H.getViewport(Se);
          a.set(r.x * q.x, r.y * q.y, r.x * q.z, r.y * q.w), F.viewport(a);
        }
        i = H.getFrustum(Se), E(_, y, Le, k, j, this.type);
      }
      H.isPointLightShadow !== true && this.type === es && M(H, y), H.needsUpdate = false;
    }
    m = this.type, p.needsUpdate = false, n.setRenderTarget(N, P, I);
  };
  function M(A, _) {
    const y = e.update(S);
    d.defines.VSM_SAMPLES !== A.blurSamples && (d.defines.VSM_SAMPLES = A.blurSamples, f.defines.VSM_SAMPLES = A.blurSamples, d.needsUpdate = true, f.needsUpdate = true), A.mapPass === null ? A.mapPass = new gt(s.x, s.y, { format: ai, type: Sn }) : (A.mapPass.width !== A.map.width || A.mapPass.height !== A.map.height) && A.mapPass.setSize(A.map.width, A.map.height), d.uniforms.shadow_pass.value = A.map.depthTexture, d.uniforms.resolution.value.set(A.map.width, A.map.height), d.uniforms.radius.value = A.radius, n.setRenderTarget(A.mapPass), n.clear(), n.renderBufferDirect(_, null, y, d, S, null), f.uniforms.shadow_pass.value = A.mapPass.texture, f.uniforms.resolution.value.set(A.map.width, A.map.height), f.uniforms.radius.value = A.radius, n.setRenderTarget(A.map), n.clear(), n.renderBufferDirect(_, null, y, f, S, null);
  }
  function T(A, _, y, N) {
    let P = null;
    const I = y.isPointLight === true ? A.customDistanceMaterial : A.customDepthMaterial;
    if (I !== void 0) P = I;
    else if (P = y.isPointLight === true ? c : o, n.localClippingEnabled && _.clipShadows === true && Array.isArray(_.clippingPlanes) && _.clippingPlanes.length !== 0 || _.displacementMap && _.displacementScale !== 0 || _.alphaMap && _.alphaTest > 0 || _.map && _.alphaTest > 0 || _.alphaToCoverage === true) {
      const F = P.uuid, G = _.uuid;
      let C = l[F];
      C === void 0 && (C = {}, l[F] = C);
      let W = C[G];
      W === void 0 && (W = P.clone(), C[G] = W, _.addEventListener("dispose", R)), P = W;
    }
    if (P.visible = _.visible, P.wireframe = _.wireframe, N === es ? P.side = _.shadowSide !== null ? _.shadowSide : _.side : P.side = _.shadowSide !== null ? _.shadowSide : u[_.side], P.alphaMap = _.alphaMap, P.alphaTest = _.alphaToCoverage === true ? 0.5 : _.alphaTest, P.map = _.map, P.clipShadows = _.clipShadows, P.clippingPlanes = _.clippingPlanes, P.clipIntersection = _.clipIntersection, P.displacementMap = _.displacementMap, P.displacementScale = _.displacementScale, P.displacementBias = _.displacementBias, P.wireframeLinewidth = _.wireframeLinewidth, P.linewidth = _.linewidth, y.isPointLight === true && P.isMeshDistanceMaterial === true) {
      const F = n.properties.get(P);
      F.light = y;
    }
    return P;
  }
  function E(A, _, y, N, P, I) {
    if (A.visible === false) return;
    if (A.layers.test(P) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && I === es) && (!A.frustumCulled || A.intersectsFrustum(i))) {
      A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse, A.matrixWorld);
      const C = e.update(A), W = A.material;
      if (Array.isArray(W)) {
        const k = C.groups;
        for (let H = 0, ee = k.length; H < ee; H++) {
          const X = k[H], Q = W[X.materialIndex];
          if (Q && Q.visible) {
            const j = T(A, Q, N, I);
            A.onBeforeShadow(n, A, _, y, C, j, X), n.renderBufferDirect(y, null, C, j, A, X), A.onAfterShadow(n, A, _, y, C, j, X);
          }
        }
      } else if (W.visible) {
        const k = T(A, W, N, I);
        A.onBeforeShadow(n, A, _, y, C, k, null), n.renderBufferDirect(y, null, C, k, A, null), A.onAfterShadow(n, A, _, y, C, k, null);
      }
    }
    const G = A.children;
    for (let C = 0, W = G.length; C < W; C++) E(G[C], _, y, N, P, I);
  }
  function R(A) {
    A.target.removeEventListener("dispose", R);
    for (const y in l) {
      const N = l[y], P = A.target.uuid;
      P in N && (N[P].dispose(), delete N[P]);
    }
  }
}
function L0(n, e) {
  function t() {
    let w = false;
    const J = new ut();
    let Y = null;
    const le = new ut(0, 0, 0, 0);
    return { setMask: function(se) {
      Y !== se && !w && (n.colorMask(se, se, se, se), Y = se);
    }, setLocked: function(se) {
      w = se;
    }, setClear: function(se, ae, Te, Oe, ie) {
      ie === true && (se *= Oe, ae *= Oe, Te *= Oe), J.set(se, ae, Te, Oe), le.equals(J) === false && (n.clearColor(se, ae, Te, Oe), le.copy(J));
    }, reset: function() {
      w = false, Y = null, le.set(-1, 0, 0, 0);
    } };
  }
  function i() {
    let w = false, J = false, Y = null, le = null, se = null;
    return { setReversed: function(ae) {
      if (J !== ae) {
        const Te = e.get("EXT_clip_control");
        ae ? Te.clipControlEXT(Te.LOWER_LEFT_EXT, Te.ZERO_TO_ONE_EXT) : Te.clipControlEXT(Te.LOWER_LEFT_EXT, Te.NEGATIVE_ONE_TO_ONE_EXT), J = ae;
        const Oe = se;
        se = null, this.setClear(Oe);
      }
    }, getReversed: function() {
      return J;
    }, setTest: function(ae) {
      ae ? pe(n.DEPTH_TEST) : be(n.DEPTH_TEST);
    }, setMask: function(ae) {
      Y !== ae && !w && (n.depthMask(ae), Y = ae);
    }, setFunc: function(ae) {
      if (J && (ae = cu[ae]), le !== ae) {
        switch (ae) {
          case pa:
            n.depthFunc(n.NEVER);
            break;
          case gr:
            n.depthFunc(n.ALWAYS);
            break;
          case ma:
            n.depthFunc(n.LESS);
            break;
          case hs:
            n.depthFunc(n.LEQUAL);
            break;
          case ga:
            n.depthFunc(n.EQUAL);
            break;
          case _a:
            n.depthFunc(n.GEQUAL);
            break;
          case va:
            n.depthFunc(n.GREATER);
            break;
          case xa:
            n.depthFunc(n.NOTEQUAL);
            break;
          default:
            n.depthFunc(n.LEQUAL);
        }
        le = ae;
      }
    }, setLocked: function(ae) {
      w = ae;
    }, setClear: function(ae) {
      se !== ae && (se = ae, J && (ae = 1 - ae), n.clearDepth(ae));
    }, reset: function() {
      w = false, Y = null, le = null, se = null, J = false;
    } };
  }
  function s() {
    let w = false, J = null, Y = null, le = null, se = null, ae = null, Te = null, Oe = null, ie = null;
    return { setTest: function(Re) {
      w || (Re ? pe(n.STENCIL_TEST) : be(n.STENCIL_TEST));
    }, setMask: function(Re) {
      J !== Re && !w && (n.stencilMask(Re), J = Re);
    }, setFunc: function(Re, Fe, me) {
      (Y !== Re || le !== Fe || se !== me) && (n.stencilFunc(Re, Fe, me), Y = Re, le = Fe, se = me);
    }, setOp: function(Re, Fe, me) {
      (ae !== Re || Te !== Fe || Oe !== me) && (n.stencilOp(Re, Fe, me), ae = Re, Te = Fe, Oe = me);
    }, setLocked: function(Re) {
      w = Re;
    }, setClear: function(Re) {
      ie !== Re && (n.clearStencil(Re), ie = Re);
    }, reset: function() {
      w = false, J = null, Y = null, le = null, se = null, ae = null, Te = null, Oe = null, ie = null;
    } };
  }
  const r = new t(), a = new i(), o = new s();
  let c = {};
  const l = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), g = [], S = null, p = false, m = null, M = null, T = null, E = null, R = null, A = null, _ = null, y = new He(0, 0, 0), N = 0, P = false, I = null, F = null, G = null, C = null, W = null;
  const k = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let H = false, ee = 0;
  const X = n.getParameter(n.VERSION);
  X.indexOf("WebGL") !== -1 ? (ee = parseFloat(/^WebGL (\d)/.exec(X)[1]), H = ee >= 1) : X.indexOf("OpenGL ES") !== -1 && (ee = parseFloat(/^OpenGL ES (\d)/.exec(X)[1]), H = ee >= 2);
  let Q = null, j = {};
  const Se = n.getParameter(n.SCISSOR_BOX), Le = n.getParameter(n.VIEWPORT), q = new ut().fromArray(Se), de = new ut().fromArray(Le);
  function ve(w, J, Y, le) {
    const se = new Uint8Array(4), ae = n.createTexture();
    n.bindTexture(w, ae), n.texParameteri(w, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(w, n.TEXTURE_MAG_FILTER, n.NEAREST);
    for (let Te = 0; Te < Y; Te++) w === n.TEXTURE_3D || w === n.TEXTURE_2D_ARRAY ? n.texImage3D(J, 0, n.RGBA, 1, 1, le, 0, n.RGBA, n.UNSIGNED_BYTE, se) : n.texImage2D(J + Te, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, se);
    return ae;
  }
  const Ae = {};
  Ae[n.TEXTURE_2D] = ve(n.TEXTURE_2D, n.TEXTURE_2D, 1), Ae[n.TEXTURE_CUBE_MAP] = ve(n.TEXTURE_CUBE_MAP, n.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Ae[n.TEXTURE_2D_ARRAY] = ve(n.TEXTURE_2D_ARRAY, n.TEXTURE_2D_ARRAY, 1, 1), Ae[n.TEXTURE_3D] = ve(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), pe(n.DEPTH_TEST), a.setFunc(hs), Vt(false), ct(Bo), pe(n.CULL_FACE), Pt(Gt);
  function pe(w) {
    h[w] !== true && (n.enable(w), h[w] = true);
  }
  function be(w) {
    h[w] !== false && (n.disable(w), h[w] = false);
  }
  function Ke(w, J) {
    return d[w] !== J ? (n.bindFramebuffer(w, J), d[w] = J, w === n.DRAW_FRAMEBUFFER && (d[n.FRAMEBUFFER] = J), w === n.FRAMEBUFFER && (d[n.DRAW_FRAMEBUFFER] = J), true) : false;
  }
  function we(w, J) {
    let Y = g, le = false;
    if (w) {
      Y = f.get(J), Y === void 0 && (Y = [], f.set(J, Y));
      const se = w.textures;
      if (Y.length !== se.length || Y[0] !== n.COLOR_ATTACHMENT0) {
        for (let ae = 0, Te = se.length; ae < Te; ae++) Y[ae] = n.COLOR_ATTACHMENT0 + ae;
        Y.length = se.length, le = true;
      }
    } else Y[0] !== n.BACK && (Y[0] = n.BACK, le = true);
    le && n.drawBuffers(Y);
  }
  function et(w) {
    return S !== w ? (n.useProgram(w), S = w, true) : false;
  }
  const it = { [Li]: n.FUNC_ADD, [Ih]: n.FUNC_SUBTRACT, [Uh]: n.FUNC_REVERSE_SUBTRACT };
  it[Nh] = n.MIN, it[Fh] = n.MAX;
  const Ge = { [Oh]: n.ZERO, [Bh]: n.ONE, [zh]: n.SRC_COLOR, [dc]: n.SRC_ALPHA, [Xh]: n.SRC_ALPHA_SATURATE, [Vh]: n.DST_COLOR, [Gh]: n.DST_ALPHA, [Hh]: n.ONE_MINUS_SRC_COLOR, [pc]: n.ONE_MINUS_SRC_ALPHA, [Wh]: n.ONE_MINUS_DST_COLOR, [kh]: n.ONE_MINUS_DST_ALPHA, [Yh]: n.CONSTANT_COLOR, [qh]: n.ONE_MINUS_CONSTANT_COLOR, [Zh]: n.CONSTANT_ALPHA, [Kh]: n.ONE_MINUS_CONSTANT_ALPHA };
  function Pt(w, J, Y, le, se, ae, Te, Oe, ie, Re) {
    if (w === Gt) {
      p === true && (be(n.BLEND), p = false);
      return;
    }
    if (p === false && (pe(n.BLEND), p = true), w !== Lh) {
      if (w !== m || Re !== P) {
        if ((M !== Li || R !== Li) && (n.blendEquation(n.FUNC_ADD), M = Li, R = Li), Re) switch (w) {
          case is:
            n.blendFuncSeparate(n.ONE, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
            break;
          case zo:
            n.blendFunc(n.ONE, n.ONE);
            break;
          case Ho:
            n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
            break;
          case Go:
            n.blendFuncSeparate(n.DST_COLOR, n.ONE_MINUS_SRC_ALPHA, n.ZERO, n.ONE);
            break;
          default:
            Ze("WebGLState: Invalid blending: ", w);
            break;
        }
        else switch (w) {
          case is:
            n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
            break;
          case zo:
            n.blendFuncSeparate(n.SRC_ALPHA, n.ONE, n.ONE, n.ONE);
            break;
          case Ho:
            Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case Go:
            Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            Ze("WebGLState: Invalid blending: ", w);
            break;
        }
        T = null, E = null, A = null, _ = null, y.set(0, 0, 0), N = 0, m = w, P = Re;
      }
      return;
    }
    se = se || J, ae = ae || Y, Te = Te || le, (J !== M || se !== R) && (n.blendEquationSeparate(it[J], it[se]), M = J, R = se), (Y !== T || le !== E || ae !== A || Te !== _) && (n.blendFuncSeparate(Ge[Y], Ge[le], Ge[ae], Ge[Te]), T = Y, E = le, A = ae, _ = Te), (Oe.equals(y) === false || ie !== N) && (n.blendColor(Oe.r, Oe.g, Oe.b, ie), y.copy(Oe), N = ie), m = w, P = false;
  }
  function vt(w, J) {
    w.side === Zt ? be(n.CULL_FACE) : pe(n.CULL_FACE);
    let Y = w.side === wt;
    J && (Y = !Y), Vt(Y), w.blending === is && w.transparent === false ? Pt(Gt) : Pt(w.blending, w.blendEquation, w.blendSrc, w.blendDst, w.blendEquationAlpha, w.blendSrcAlpha, w.blendDstAlpha, w.blendColor, w.blendAlpha, w.premultipliedAlpha), a.setFunc(w.depthFunc), a.setTest(w.depthTest), a.setMask(w.depthWrite), r.setMask(w.colorWrite);
    const le = w.stencilWrite;
    o.setTest(le), le && (o.setMask(w.stencilWriteMask), o.setFunc(w.stencilFunc, w.stencilRef, w.stencilFuncMask), o.setOp(w.stencilFail, w.stencilZFail, w.stencilZPass)), Tt(w.polygonOffset, w.polygonOffsetFactor, w.polygonOffsetUnits), w.alphaToCoverage === true ? pe(n.SAMPLE_ALPHA_TO_COVERAGE) : be(n.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Vt(w) {
    I !== w && (w ? n.frontFace(n.CW) : n.frontFace(n.CCW), I = w);
  }
  function ct(w) {
    w !== Ch ? (pe(n.CULL_FACE), w !== F && (w === Bo ? n.cullFace(n.BACK) : w === Ph ? n.cullFace(n.FRONT) : n.cullFace(n.FRONT_AND_BACK))) : be(n.CULL_FACE), F = w;
  }
  function dn(w) {
    w !== G && (H && n.lineWidth(w), G = w);
  }
  function Tt(w, J, Y) {
    w ? (pe(n.POLYGON_OFFSET_FILL), (C !== J || W !== Y) && (C = J, W = Y, a.getReversed() && (J = -J, Y = -Y), n.polygonOffset(J, Y))) : be(n.POLYGON_OFFSET_FILL);
  }
  function Jt(w) {
    w ? pe(n.SCISSOR_TEST) : be(n.SCISSOR_TEST);
  }
  function $t(w) {
    w === void 0 && (w = n.TEXTURE0 + k - 1), Q !== w && (n.activeTexture(w), Q = w);
  }
  function Qt(w, J, Y) {
    Y === void 0 && (Q === null ? Y = n.TEXTURE0 + k - 1 : Y = Q);
    let le = j[Y];
    le === void 0 && (le = { type: void 0, texture: void 0 }, j[Y] = le), (le.type !== w || le.texture !== J) && (Q !== Y && (n.activeTexture(Y), Q = Y), n.bindTexture(w, J || Ae[w]), le.type = w, le.texture = J);
  }
  function U() {
    const w = j[Q];
    w !== void 0 && w.type !== void 0 && (n.bindTexture(w.type, null), w.type = void 0, w.texture = void 0);
  }
  function jt() {
    try {
      n.compressedTexImage2D(...arguments);
    } catch (w) {
      Ze("WebGLState:", w);
    }
  }
  function at() {
    try {
      n.compressedTexImage3D(...arguments);
    } catch (w) {
      Ze("WebGLState:", w);
    }
  }
  function ot() {
    try {
      n.texSubImage2D(...arguments);
    } catch (w) {
      Ze("WebGLState:", w);
    }
  }
  function fe() {
    try {
      n.texSubImage3D(...arguments);
    } catch (w) {
      Ze("WebGLState:", w);
    }
  }
  function xt() {
    try {
      n.compressedTexSubImage2D(...arguments);
    } catch (w) {
      Ze("WebGLState:", w);
    }
  }
  function Pe() {
    try {
      n.compressedTexSubImage3D(...arguments);
    } catch (w) {
      Ze("WebGLState:", w);
    }
  }
  function Ie() {
    try {
      n.texStorage2D(...arguments);
    } catch (w) {
      Ze("WebGLState:", w);
    }
  }
  function b() {
    try {
      n.texStorage3D(...arguments);
    } catch (w) {
      Ze("WebGLState:", w);
    }
  }
  function v() {
    try {
      n.texImage2D(...arguments);
    } catch (w) {
      Ze("WebGLState:", w);
    }
  }
  function B() {
    try {
      n.texImage3D(...arguments);
    } catch (w) {
      Ze("WebGLState:", w);
    }
  }
  function te(w) {
    return u[w] !== void 0 ? u[w] : n.getParameter(w);
  }
  function $(w, J) {
    u[w] !== J && (n.pixelStorei(w, J), u[w] = J);
  }
  function re(w) {
    q.equals(w) === false && (n.scissor(w.x, w.y, w.z, w.w), q.copy(w));
  }
  function he(w) {
    de.equals(w) === false && (n.viewport(w.x, w.y, w.z, w.w), de.copy(w));
  }
  function Z(w, J) {
    let Y = l.get(J);
    Y === void 0 && (Y = /* @__PURE__ */ new WeakMap(), l.set(J, Y));
    let le = Y.get(w);
    le === void 0 && (le = n.getUniformBlockIndex(J, w.name), n.uniformBlockBinding(J, le, le), Y.set(w, le));
  }
  function K(w, J, Y) {
    const se = l.get(J).get(w);
    c[se] !== Y && (n.bindBufferBase(n.UNIFORM_BUFFER, se, Y), c[se] = Y);
  }
  function oe() {
    n.disable(n.BLEND), n.disable(n.CULL_FACE), n.disable(n.DEPTH_TEST), n.disable(n.POLYGON_OFFSET_FILL), n.disable(n.SCISSOR_TEST), n.disable(n.STENCIL_TEST), n.disable(n.SAMPLE_ALPHA_TO_COVERAGE), n.blendEquation(n.FUNC_ADD), n.blendFunc(n.ONE, n.ZERO), n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO), n.blendColor(0, 0, 0, 0), n.colorMask(true, true, true, true), n.clearColor(0, 0, 0, 0), n.depthMask(true), n.depthFunc(n.LESS), a.setReversed(false), n.clearDepth(1), n.stencilMask(4294967295), n.stencilFunc(n.ALWAYS, 0, 4294967295), n.stencilOp(n.KEEP, n.KEEP, n.KEEP), n.clearStencil(0), n.cullFace(n.BACK), n.frontFace(n.CCW), n.polygonOffset(0, 0), n.activeTexture(n.TEXTURE0), n.bindFramebuffer(n.FRAMEBUFFER, null), n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), n.bindFramebuffer(n.READ_FRAMEBUFFER, null), n.useProgram(null), n.lineWidth(1), n.scissor(0, 0, n.canvas.width, n.canvas.height), n.viewport(0, 0, n.canvas.width, n.canvas.height), n.pixelStorei(n.PACK_ALIGNMENT, 4), n.pixelStorei(n.UNPACK_ALIGNMENT, 4), n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, false), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, n.BROWSER_DEFAULT_WEBGL), n.pixelStorei(n.PACK_ROW_LENGTH, 0), n.pixelStorei(n.PACK_SKIP_PIXELS, 0), n.pixelStorei(n.PACK_SKIP_ROWS, 0), n.pixelStorei(n.UNPACK_ROW_LENGTH, 0), n.pixelStorei(n.UNPACK_IMAGE_HEIGHT, 0), n.pixelStorei(n.UNPACK_SKIP_PIXELS, 0), n.pixelStorei(n.UNPACK_SKIP_ROWS, 0), n.pixelStorei(n.UNPACK_SKIP_IMAGES, 0), h = {}, u = {}, Q = null, j = {}, d = {}, c = {}, f = /* @__PURE__ */ new WeakMap(), g = [], S = null, p = false, m = null, M = null, T = null, E = null, R = null, A = null, _ = null, y = new He(0, 0, 0), N = 0, P = false, I = null, F = null, G = null, C = null, W = null, q.set(0, 0, n.canvas.width, n.canvas.height), de.set(0, 0, n.canvas.width, n.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: r, depth: a, stencil: o }, enable: pe, disable: be, bindFramebuffer: Ke, drawBuffers: we, useProgram: et, setBlending: Pt, setMaterial: vt, setFlipSided: Vt, setCullFace: ct, setLineWidth: dn, setPolygonOffset: Tt, setScissorTest: Jt, activeTexture: $t, bindTexture: Qt, unbindTexture: U, compressedTexImage2D: jt, compressedTexImage3D: at, texImage2D: v, texImage3D: B, pixelStorei: $, getParameter: te, updateUBOMapping: Z, uniformBlockBinding: K, texStorage2D: Ie, texStorage3D: b, texSubImage2D: ot, texSubImage3D: fe, compressedTexSubImage2D: xt, compressedTexSubImage3D: Pe, scissor: re, viewport: he, reset: oe };
}
function I0(n, e, t, i, s, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), l = new ne(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new Set();
  let d;
  const f = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new Set(), S = new FinalizationRegistry((b) => g.delete(b));
  let p = false;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function m(b, v) {
    return p ? new OffscreenCanvas(b, v) : ps("canvas");
  }
  function M(b, v, B) {
    let te = 1;
    const $ = Ie(b);
    if (($.width > B || $.height > B) && (te = B / Math.max($.width, $.height)), te < 1) if (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && b instanceof ImageBitmap || typeof VideoFrame < "u" && b instanceof VideoFrame) {
      const re = Math.floor(te * $.width), he = Math.floor(te * $.height);
      d === void 0 && (d = m(re, he));
      const Z = v ? m(re, he) : d;
      return Z.width = re, Z.height = he, Z.getContext("2d").drawImage(b, 0, 0, re, he), De("WebGLRenderer: Texture has been resized from (" + $.width + "x" + $.height + ") to (" + re + "x" + he + ")."), Z;
    } else return "data" in b && De("WebGLRenderer: Image in DataTexture is too big (" + $.width + "x" + $.height + ")."), b;
    return b;
  }
  function T(b) {
    return b.generateMipmaps;
  }
  function E(b) {
    n.generateMipmap(b);
  }
  function R(b) {
    return b.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : b.isWebGL3DRenderTarget ? n.TEXTURE_3D : b.isWebGLArrayRenderTarget || b.isCompressedArrayTexture ? n.TEXTURE_2D_ARRAY : n.TEXTURE_2D;
  }
  function A(b, v, B, te, $, re = false) {
    if (b !== null) {
      if (n[b] !== void 0) return n[b];
      De("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + b + "'");
    }
    let he;
    te && (he = e.get("EXT_texture_norm16"), he || De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let Z = v;
    if (v === n.RED && (B === n.FLOAT && (Z = n.R32F), B === n.HALF_FLOAT && (Z = n.R16F), B === n.UNSIGNED_BYTE && (Z = n.R8), B === n.UNSIGNED_SHORT && he && (Z = he.R16_EXT), B === n.SHORT && he && (Z = he.R16_SNORM_EXT)), v === n.RED_INTEGER && (B === n.UNSIGNED_BYTE && (Z = n.R8UI), B === n.UNSIGNED_SHORT && (Z = n.R16UI), B === n.UNSIGNED_INT && (Z = n.R32UI), B === n.BYTE && (Z = n.R8I), B === n.SHORT && (Z = n.R16I), B === n.INT && (Z = n.R32I)), v === n.RG && (B === n.FLOAT && (Z = n.RG32F), B === n.HALF_FLOAT && (Z = n.RG16F), B === n.UNSIGNED_BYTE && (Z = n.RG8), B === n.UNSIGNED_SHORT && he && (Z = he.RG16_EXT), B === n.SHORT && he && (Z = he.RG16_SNORM_EXT)), v === n.RG_INTEGER && (B === n.UNSIGNED_BYTE && (Z = n.RG8UI), B === n.UNSIGNED_SHORT && (Z = n.RG16UI), B === n.UNSIGNED_INT && (Z = n.RG32UI), B === n.BYTE && (Z = n.RG8I), B === n.SHORT && (Z = n.RG16I), B === n.INT && (Z = n.RG32I)), v === n.RGB_INTEGER && (B === n.UNSIGNED_BYTE && (Z = n.RGB8UI), B === n.UNSIGNED_SHORT && (Z = n.RGB16UI), B === n.UNSIGNED_INT && (Z = n.RGB32UI), B === n.BYTE && (Z = n.RGB8I), B === n.SHORT && (Z = n.RGB16I), B === n.INT && (Z = n.RGB32I)), v === n.RGBA_INTEGER && (B === n.UNSIGNED_BYTE && (Z = n.RGBA8UI), B === n.UNSIGNED_SHORT && (Z = n.RGBA16UI), B === n.UNSIGNED_INT && (Z = n.RGBA32UI), B === n.BYTE && (Z = n.RGBA8I), B === n.SHORT && (Z = n.RGBA16I), B === n.INT && (Z = n.RGBA32I)), v === n.RGB && (B === n.UNSIGNED_SHORT && he && (Z = he.RGB16_EXT), B === n.SHORT && he && (Z = he.RGB16_SNORM_EXT), B === n.UNSIGNED_INT_5_9_9_9_REV && (Z = n.RGB9_E5), B === n.UNSIGNED_INT_10F_11F_11F_REV && (Z = n.R11F_G11F_B10F)), v === n.RGBA) {
      const K = re ? xr : Xe.getTransfer($);
      B === n.FLOAT && (Z = n.RGBA32F), B === n.HALF_FLOAT && (Z = n.RGBA16F), B === n.UNSIGNED_BYTE && (Z = K === nt ? n.SRGB8_ALPHA8 : n.RGBA8), B === n.UNSIGNED_SHORT && he && (Z = he.RGBA16_EXT), B === n.SHORT && he && (Z = he.RGBA16_SNORM_EXT), B === n.UNSIGNED_SHORT_4_4_4_4 && (Z = n.RGBA4), B === n.UNSIGNED_SHORT_5_5_5_1 && (Z = n.RGB5_A1);
    }
    return (Z === n.R16F || Z === n.R32F || Z === n.RG16F || Z === n.RG32F || Z === n.RGBA16F || Z === n.RGBA32F) && e.get("EXT_color_buffer_float"), Z;
  }
  function _(b, v) {
    let B;
    return b ? v === null || v === xn || v === ri ? B = n.DEPTH24_STENCIL8 : v === nn ? B = n.DEPTH32F_STENCIL8 : v === fs && (B = n.DEPTH24_STENCIL8, De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === xn || v === ri ? B = n.DEPTH_COMPONENT24 : v === nn ? B = n.DEPTH_COMPONENT32F : v === fs && (B = n.DEPTH_COMPONENT16), B;
  }
  function y(b, v) {
    return T(b) === true || b.isFramebufferTexture && b.minFilter !== Lt && b.minFilter !== Ct ? Math.log2(Math.max(v.width, v.height)) + 1 : b.mipmaps.length > 0 ? b.mipmaps.length : b.isCompressedTexture && Array.isArray(b.image) ? v.mipmaps.length : 1;
  }
  function N(b) {
    const v = new WeakRef(b);
    i.get(b).__ref = v, g.add(v), S.register(b, v, v);
  }
  function P(b) {
    const v = i.get(b).__ref;
    v !== void 0 && (g.delete(v), S.unregister(v));
  }
  function I(b) {
    G(b.target);
  }
  function F(b) {
    C(b.target);
  }
  function G(b) {
    b.removeEventListener("dispose", I), P(b), k(b), b.isVideoTexture && h.delete(b), b.isHTMLTexture && u.delete(b);
  }
  function C(b) {
    b.removeEventListener("dispose", F), P(b), ee(b);
  }
  function W() {
    for (const b of g) {
      const v = b.deref();
      v !== void 0 && (v.isRenderTarget === true ? C(v) : G(v));
    }
    g.clear(), u.clear();
  }
  function k(b) {
    const v = i.get(b);
    if (v.__webglInit === void 0) return;
    const B = b.source, te = f.get(B);
    if (te) {
      const $ = te[v.__cacheKey];
      $.usedTimes--, $.usedTimes === 0 && H(b), Object.keys(te).length === 0 && f.delete(B);
    }
    i.remove(b);
  }
  function H(b) {
    const v = i.get(b);
    n.deleteTexture(v.__webglTexture);
    const B = b.source, te = f.get(B);
    delete te[v.__cacheKey], a.memory.textures--;
  }
  function ee(b) {
    const v = i.get(b);
    v.__depthDisposeCallback && v.__depthDisposeCallback();
    const B = b.depthTexture;
    if (B && B.renderTarget === b && G(B), b.isWebGLCubeRenderTarget) for (let $ = 0; $ < 6; $++) {
      if (Array.isArray(v.__webglFramebuffer[$])) for (let re = 0; re < v.__webglFramebuffer[$].length; re++) n.deleteFramebuffer(v.__webglFramebuffer[$][re]);
      else n.deleteFramebuffer(v.__webglFramebuffer[$]);
      v.__webglDepthbuffer && n.deleteRenderbuffer(v.__webglDepthbuffer[$]);
    }
    else {
      if (Array.isArray(v.__webglFramebuffer)) for (let $ = 0; $ < v.__webglFramebuffer.length; $++) n.deleteFramebuffer(v.__webglFramebuffer[$]);
      else n.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && n.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && n.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer) for (let $ = 0; $ < v.__webglColorRenderbuffer.length; $++) v.__webglColorRenderbuffer[$] && n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);
      v.__webglDepthRenderbuffer && n.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const te = b.textures;
    for (let $ = 0, re = te.length; $ < re; $++) {
      const he = i.get(te[$]);
      he.__webglTexture && (n.deleteTexture(he.__webglTexture), a.memory.textures--), i.remove(te[$]);
    }
    i.remove(b);
  }
  let X = 0;
  function Q() {
    X = 0;
  }
  function j() {
    return X;
  }
  function Se(b) {
    X = b;
  }
  function Le() {
    const b = X;
    return b >= s.maxTextures && De("WebGLTextures: Trying to use " + (b + 1) + " texture units while this GPU supports only " + s.maxTextures), X += 1, b;
  }
  function q(b) {
    const v = [];
    return v.push(b.wrapS), v.push(b.wrapT), v.push(b.wrapR || 0), v.push(b.magFilter), v.push(b.minFilter), v.push(b.anisotropy), v.push(b.internalFormat), v.push(b.format), v.push(b.type), v.push(b.generateMipmaps), v.push(b.mipmapsAutoUpdate), v.push(b.premultiplyAlpha), v.push(b.flipY), v.push(b.unpackAlignment), v.push(b.colorSpace), v.join();
  }
  function de(b, v) {
    const B = i.get(b);
    if (b.isVideoTexture && xt(b), b.isRenderTargetTexture === false && b.isExternalTexture !== true && b.version > 0 && B.__version !== b.version) {
      const te = b.image;
      if (te === null) De("WebGLRenderer: Texture marked for update but no image data found.");
      else if (te.complete === false) De("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        vt(B, b, v);
        return;
      }
    } else b.isExternalTexture && (B.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
    t.bindTexture(n.TEXTURE_2D, B.__webglTexture, n.TEXTURE0 + v);
  }
  function ve(b, v) {
    const B = i.get(b);
    if (b.isRenderTargetTexture === false && b.version > 0 && B.__version !== b.version) {
      vt(B, b, v);
      return;
    } else b.isExternalTexture && (B.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
    t.bindTexture(n.TEXTURE_2D_ARRAY, B.__webglTexture, n.TEXTURE0 + v);
  }
  function Ae(b, v) {
    const B = i.get(b);
    if (b.isRenderTargetTexture === false && b.version > 0 && B.__version !== b.version) {
      vt(B, b, v);
      return;
    }
    t.bindTexture(n.TEXTURE_3D, B.__webglTexture, n.TEXTURE0 + v);
  }
  function pe(b, v) {
    const B = i.get(b);
    if (b.version > 0 && B.__version !== b.version) {
      Vt(B, b, v);
      return;
    }
    t.bindTexture(n.TEXTURE_CUBE_MAP, B.__webglTexture, n.TEXTURE0 + v);
  }
  const be = { [Sa]: n.REPEAT, [Dn]: n.CLAMP_TO_EDGE, [Ma]: n.MIRRORED_REPEAT }, Ke = { [Lt]: n.NEAREST, [Qh]: n.NEAREST_MIPMAP_NEAREST, [Rs]: n.NEAREST_MIPMAP_LINEAR, [Ct]: n.LINEAR, [Ur]: n.LINEAR_MIPMAP_NEAREST, [Yn]: n.LINEAR_MIPMAP_LINEAR }, we = { [tu]: n.NEVER, [Lc]: n.ALWAYS, [nu]: n.LESS, [Pc]: n.LEQUAL, [iu]: n.EQUAL, [Dc]: n.GEQUAL, [su]: n.GREATER, [ru]: n.NOTEQUAL };
  function et(b, v) {
    if (v.type === nn && e.has("OES_texture_float_linear") === false && (v.magFilter === Ct || v.magFilter === Ur || v.magFilter === Rs || v.magFilter === Yn || v.minFilter === Ct || v.minFilter === Ur || v.minFilter === Rs || v.minFilter === Yn) && De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), n.texParameteri(b, n.TEXTURE_WRAP_S, be[v.wrapS]), n.texParameteri(b, n.TEXTURE_WRAP_T, be[v.wrapT]), (b === n.TEXTURE_3D || b === n.TEXTURE_2D_ARRAY) && n.texParameteri(b, n.TEXTURE_WRAP_R, be[v.wrapR]), n.texParameteri(b, n.TEXTURE_MAG_FILTER, Ke[v.magFilter]), n.texParameteri(b, n.TEXTURE_MIN_FILTER, Ke[v.minFilter]), v.compareFunction && (n.texParameteri(b, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE), n.texParameteri(b, n.TEXTURE_COMPARE_FUNC, we[v.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (v.magFilter === Lt || v.minFilter !== Rs && v.minFilter !== Yn || v.type === nn && e.has("OES_texture_float_linear") === false) return;
      if (v.anisotropy > 1 || i.get(v).__currentAnisotropy) {
        const B = e.get("EXT_texture_filter_anisotropic");
        n.texParameterf(b, B.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, s.getMaxAnisotropy())), i.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function it(b, v) {
    let B = false;
    b.__webglInit === void 0 && (b.__webglInit = true, v.addEventListener("dispose", I), N(v));
    const te = v.source;
    let $ = f.get(te);
    $ === void 0 && ($ = {}, f.set(te, $));
    const re = q(v);
    if (re !== b.__cacheKey) {
      $[re] === void 0 && ($[re] = { texture: n.createTexture(), usedTimes: 0 }, a.memory.textures++, B = true), $[re].usedTimes++;
      const he = $[b.__cacheKey];
      he !== void 0 && ($[b.__cacheKey].usedTimes--, he.usedTimes === 0 && H(v)), b.__cacheKey = re, b.__webglTexture = $[re].texture;
    }
    return B;
  }
  function Ge(b, v, B) {
    return Math.floor(Math.floor(b / B) / v);
  }
  function Pt(b, v, B, te) {
    const re = b.updateRanges;
    if (re.length === 0) t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, v.width, v.height, B, te, v.data);
    else {
      re.sort((w, J) => w.start - J.start);
      let he = 0;
      for (let w = 1; w < re.length; w++) {
        const J = re[he], Y = re[w], le = J.start + J.count, se = Ge(Y.start, v.width, 4), ae = Ge(J.start, v.width, 4);
        Y.start <= le + 1 && se === ae && Ge(Y.start + Y.count - 1, v.width, 4) === se ? J.count = Math.max(J.count, Y.start + Y.count - J.start) : (++he, re[he] = Y);
      }
      re.length = he + 1;
      const Z = t.getParameter(n.UNPACK_ROW_LENGTH), K = t.getParameter(n.UNPACK_SKIP_PIXELS), oe = t.getParameter(n.UNPACK_SKIP_ROWS);
      t.pixelStorei(n.UNPACK_ROW_LENGTH, v.width);
      for (let w = 0, J = re.length; w < J; w++) {
        const Y = re[w], le = Math.floor(Y.start / 4), se = Math.ceil(Y.count / 4), ae = le % v.width, Te = Math.floor(le / v.width), Oe = se, ie = 1;
        t.pixelStorei(n.UNPACK_SKIP_PIXELS, ae), t.pixelStorei(n.UNPACK_SKIP_ROWS, Te), t.texSubImage2D(n.TEXTURE_2D, 0, ae, Te, Oe, ie, B, te, v.data);
      }
      b.clearUpdateRanges(), t.pixelStorei(n.UNPACK_ROW_LENGTH, Z), t.pixelStorei(n.UNPACK_SKIP_PIXELS, K), t.pixelStorei(n.UNPACK_SKIP_ROWS, oe);
    }
  }
  function vt(b, v, B) {
    let te = n.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (te = n.TEXTURE_2D_ARRAY), v.isData3DTexture && (te = n.TEXTURE_3D);
    const $ = it(b, v), re = v.source;
    t.bindTexture(te, b.__webglTexture, n.TEXTURE0 + B);
    const he = i.get(re);
    if (re.version !== he.__version || $ === true) {
      if (t.activeTexture(n.TEXTURE0 + B), (typeof ImageBitmap < "u" && v.image instanceof ImageBitmap) === false) {
        const ie = Xe.getPrimaries(Xe.workingColorSpace), Re = v.colorSpace === _n ? null : Xe.getPrimaries(v.colorSpace), Fe = v.colorSpace === _n || ie === Re ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
        t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, v.flipY), t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, Fe);
      }
      t.pixelStorei(n.UNPACK_ALIGNMENT, v.unpackAlignment);
      let K = M(v.image, false, s.maxTextureSize);
      K = Pe(v, K);
      const oe = r.convert(v.format, v.colorSpace), w = r.convert(v.type);
      let J = A(v.internalFormat, oe, w, v.normalized, v.colorSpace, v.isVideoTexture);
      et(te, v);
      let Y;
      const le = v.mipmaps, se = v.isVideoTexture !== true, ae = he.__version === void 0 || $ === true, Te = re.dataReady, Oe = y(v, K);
      if (v.isDepthTexture) J = _(v.format === Ln, v.type), ae && (se ? t.texStorage2D(n.TEXTURE_2D, 1, J, K.width, K.height) : t.texImage2D(n.TEXTURE_2D, 0, J, K.width, K.height, 0, oe, w, null));
      else if (v.isDataTexture) if (le.length > 0) {
        se && ae && t.texStorage2D(n.TEXTURE_2D, Oe, J, le[0].width, le[0].height);
        for (let ie = 0, Re = le.length; ie < Re; ie++) Y = le[ie], se ? Te && t.texSubImage2D(n.TEXTURE_2D, ie, 0, 0, Y.width, Y.height, oe, w, Y.data) : t.texImage2D(n.TEXTURE_2D, ie, J, Y.width, Y.height, 0, oe, w, Y.data);
        v.generateMipmaps = false;
      } else se ? (ae && t.texStorage2D(n.TEXTURE_2D, Oe, J, K.width, K.height), Te && Pt(v, K, oe, w)) : t.texImage2D(n.TEXTURE_2D, 0, J, K.width, K.height, 0, oe, w, K.data);
      else if (v.isCompressedTexture) if (v.isCompressedArrayTexture) {
        se && ae && t.texStorage3D(n.TEXTURE_2D_ARRAY, Oe, J, le[0].width, le[0].height, K.depth);
        for (let ie = 0, Re = le.length; ie < Re; ie++) if (Y = le[ie], v.format !== vn) if (oe !== null) if (se) {
          if (Te) if (v.layerUpdates.size > 0) {
            const Fe = Fl(Y.width, Y.height, v.format, v.type);
            for (const me of v.layerUpdates) {
              const tt = Y.data.subarray(me * Fe / Y.data.BYTES_PER_ELEMENT, (me + 1) * Fe / Y.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, ie, 0, 0, me, Y.width, Y.height, 1, oe, tt);
            }
          } else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, ie, 0, 0, 0, Y.width, Y.height, K.depth, oe, Y.data);
        } else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY, ie, J, Y.width, Y.height, K.depth, 0, Y.data, 0, 0);
        else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else se ? Te && t.texSubImage3D(n.TEXTURE_2D_ARRAY, ie, 0, 0, 0, Y.width, Y.height, K.depth, oe, w, Y.data) : t.texImage3D(n.TEXTURE_2D_ARRAY, ie, J, Y.width, Y.height, K.depth, 0, oe, w, Y.data);
        v.layerUpdates.size > 0 && v.clearLayerUpdates();
      } else {
        se && ae && t.texStorage2D(n.TEXTURE_2D, Oe, J, le[0].width, le[0].height);
        for (let ie = 0, Re = le.length; ie < Re; ie++) Y = le[ie], v.format !== vn ? oe !== null ? se ? Te && t.compressedTexSubImage2D(n.TEXTURE_2D, ie, 0, 0, Y.width, Y.height, oe, Y.data) : t.compressedTexImage2D(n.TEXTURE_2D, ie, J, Y.width, Y.height, 0, Y.data) : De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : se ? Te && t.texSubImage2D(n.TEXTURE_2D, ie, 0, 0, Y.width, Y.height, oe, w, Y.data) : t.texImage2D(n.TEXTURE_2D, ie, J, Y.width, Y.height, 0, oe, w, Y.data);
      }
      else if (v.isDataArrayTexture) if (se) {
        if (ae && t.texStorage3D(n.TEXTURE_2D_ARRAY, Oe, J, K.width, K.height, K.depth), Te) if (v.layerUpdates.size > 0) {
          const ie = Fl(K.width, K.height, v.format, v.type);
          for (const Re of v.layerUpdates) {
            const Fe = K.data.subarray(Re * ie / K.data.BYTES_PER_ELEMENT, (Re + 1) * ie / K.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, Re, K.width, K.height, 1, oe, w, Fe);
          }
          v.clearLayerUpdates();
        } else t.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, 0, K.width, K.height, K.depth, oe, w, K.data);
      } else t.texImage3D(n.TEXTURE_2D_ARRAY, 0, J, K.width, K.height, K.depth, 0, oe, w, K.data);
      else if (v.isData3DTexture) se ? (ae && t.texStorage3D(n.TEXTURE_3D, Oe, J, K.width, K.height, K.depth), Te && t.texSubImage3D(n.TEXTURE_3D, 0, 0, 0, 0, K.width, K.height, K.depth, oe, w, K.data)) : t.texImage3D(n.TEXTURE_3D, 0, J, K.width, K.height, K.depth, 0, oe, w, K.data);
      else if (v.isFramebufferTexture) {
        if (ae) if (se) t.texStorage2D(n.TEXTURE_2D, Oe, J, K.width, K.height);
        else {
          let ie = K.width, Re = K.height;
          for (let Fe = 0; Fe < Oe; Fe++) t.texImage2D(n.TEXTURE_2D, Fe, J, ie, Re, 0, oe, w, null), ie >>= 1, Re >>= 1;
        }
      } else if (v.isHTMLTexture) {
        if ("texElementImage2D" in n) {
          const ie = n.canvas;
          if (ie.hasAttribute("layoutsubtree") || ie.setAttribute("layoutsubtree", "true"), K.parentNode !== ie) {
            ie.appendChild(K), u.add(v), ie.onpaint = (Re) => {
              const Fe = Re.changedElements;
              for (const me of u) Fe.includes(me.image) && (me.needsUpdate = true);
            }, ie.requestPaint();
            return;
          }
          if (n.texElementImage2D.length === 3) n.texElementImage2D(n.TEXTURE_2D, n.RGBA8, K);
          else {
            const Fe = n.RGBA, me = n.RGBA, tt = n.UNSIGNED_BYTE;
            n.texElementImage2D(n.TEXTURE_2D, 0, Fe, me, tt, K);
          }
          n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE);
        }
      } else if (le.length > 0) {
        if (se && ae) {
          const ie = Ie(le[0]);
          t.texStorage2D(n.TEXTURE_2D, Oe, J, ie.width, ie.height);
        }
        for (let ie = 0, Re = le.length; ie < Re; ie++) Y = le[ie], se ? Te && t.texSubImage2D(n.TEXTURE_2D, ie, 0, 0, oe, w, Y) : t.texImage2D(n.TEXTURE_2D, ie, J, oe, w, Y);
        v.generateMipmaps = false;
      } else if (se) {
        if (ae) {
          const ie = Ie(K);
          t.texStorage2D(n.TEXTURE_2D, Oe, J, ie.width, ie.height);
        }
        Te && t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, oe, w, K);
      } else t.texImage2D(n.TEXTURE_2D, 0, J, oe, w, K);
      T(v) && v.mipmapsAutoUpdate === true && E(te), he.__version = re.version, v.onUpdate && v.onUpdate(v);
    }
    b.__version = v.version;
  }
  function Vt(b, v, B) {
    if (v.image.length !== 6) return;
    const te = it(b, v), $ = v.source;
    t.bindTexture(n.TEXTURE_CUBE_MAP, b.__webglTexture, n.TEXTURE0 + B);
    const re = i.get($);
    if ($.version !== re.__version || te === true) {
      t.activeTexture(n.TEXTURE0 + B);
      const he = Xe.getPrimaries(Xe.workingColorSpace), Z = v.colorSpace === _n ? null : Xe.getPrimaries(v.colorSpace), K = v.colorSpace === _n || he === Z ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, v.flipY), t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), t.pixelStorei(n.UNPACK_ALIGNMENT, v.unpackAlignment), t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, K);
      const oe = v.isCompressedTexture || v.image[0].isCompressedTexture, w = v.image[0] && v.image[0].isDataTexture, J = [];
      for (let me = 0; me < 6; me++) !oe && !w ? J[me] = M(v.image[me], true, s.maxCubemapSize) : J[me] = w ? v.image[me].image : v.image[me], J[me] = Pe(v, J[me]);
      const Y = J[0], le = r.convert(v.format, v.colorSpace), se = r.convert(v.type);
      let ae = A(v.internalFormat, le, se, v.normalized, v.colorSpace);
      const Te = v.isVideoTexture !== true, Oe = re.__version === void 0 || te === true, ie = $.dataReady;
      let Re = y(v, Y);
      et(n.TEXTURE_CUBE_MAP, v);
      let Fe;
      if (v.isDepthTexture) {
        if (ae = _(v.format === Ln, v.type), Oe) if (Te) t.texStorage2D(n.TEXTURE_CUBE_MAP, 1, ae, Y.width, Y.height);
        else for (let me = 0; me < 6; me++) t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + me, 0, ae, Y.width, Y.height, 0, le, se, null);
      } else if (oe) {
        Te && Oe && t.texStorage2D(n.TEXTURE_CUBE_MAP, Re, ae, Y.width, Y.height);
        for (let me = 0; me < 6; me++) {
          Fe = J[me].mipmaps;
          for (let tt = 0; tt < Fe.length; tt++) {
            const bt = Fe[tt];
            v.format !== vn ? le !== null ? Te ? ie && t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + me, tt, 0, 0, bt.width, bt.height, le, bt.data) : t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + me, tt, ae, bt.width, bt.height, 0, bt.data) : De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Te ? ie && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + me, tt, 0, 0, bt.width, bt.height, le, se, bt.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + me, tt, ae, bt.width, bt.height, 0, le, se, bt.data);
          }
        }
      } else {
        if (Fe = v.mipmaps, Te && Oe) {
          Fe.length > 0 && Re++;
          const me = Ie(J[0]);
          t.texStorage2D(n.TEXTURE_CUBE_MAP, Re, ae, me.width, me.height);
        }
        for (let me = 0; me < 6; me++) if (w) {
          Te ? ie && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + me, 0, 0, 0, J[me].width, J[me].height, le, se, J[me].data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + me, 0, ae, J[me].width, J[me].height, 0, le, se, J[me].data);
          for (let tt = 0; tt < Fe.length; tt++) {
            const Bn = Fe[tt].image[me].image;
            Te ? ie && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + me, tt + 1, 0, 0, Bn.width, Bn.height, le, se, Bn.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + me, tt + 1, ae, Bn.width, Bn.height, 0, le, se, Bn.data);
          }
        } else {
          Te ? ie && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + me, 0, 0, 0, le, se, J[me]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + me, 0, ae, le, se, J[me]);
          for (let tt = 0; tt < Fe.length; tt++) {
            const bt = Fe[tt];
            Te ? ie && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + me, tt + 1, 0, 0, le, se, bt.image[me]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + me, tt + 1, ae, le, se, bt.image[me]);
          }
        }
      }
      T(v) && v.mipmapsAutoUpdate === true && E(n.TEXTURE_CUBE_MAP), re.__version = $.version, v.onUpdate && v.onUpdate(v);
    }
    b.__version = v.version;
  }
  function ct(b, v, B, te, $, re) {
    const he = r.convert(B.format, B.colorSpace), Z = r.convert(B.type), K = A(B.internalFormat, he, Z, B.normalized, B.colorSpace), oe = i.get(v), w = i.get(B);
    if (w.__renderTarget = v, !oe.__hasExternalTextures) {
      const J = Math.max(1, v.width >> re), Y = Math.max(1, v.height >> re);
      $ === n.TEXTURE_3D || $ === n.TEXTURE_2D_ARRAY ? t.texImage3D($, re, K, J, Y, v.depth, 0, he, Z, null) : t.texImage2D($, re, K, J, Y, 0, he, Z, null);
    }
    t.bindFramebuffer(n.FRAMEBUFFER, b), fe(v) ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, te, $, w.__webglTexture, 0, ot(v)) : ($ === n.TEXTURE_2D || $ >= n.TEXTURE_CUBE_MAP_POSITIVE_X && $ <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z) && n.framebufferTexture2D(n.FRAMEBUFFER, te, $, w.__webglTexture, re), t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function dn(b, v, B) {
    if (n.bindRenderbuffer(n.RENDERBUFFER, b), v.depthBuffer) {
      const te = v.depthTexture, $ = te && te.isDepthTexture ? te.type : null, re = _(v.stencilBuffer, $), he = v.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
      fe(v) ? o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, ot(v), re, v.width, v.height) : B ? n.renderbufferStorageMultisample(n.RENDERBUFFER, ot(v), re, v.width, v.height) : n.renderbufferStorage(n.RENDERBUFFER, re, v.width, v.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, he, n.RENDERBUFFER, b);
    } else {
      const te = v.textures;
      for (let $ = 0; $ < te.length; $++) {
        const re = te[$], he = r.convert(re.format, re.colorSpace), Z = r.convert(re.type), K = A(re.internalFormat, he, Z, re.normalized, re.colorSpace);
        fe(v) ? o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, ot(v), K, v.width, v.height) : B ? n.renderbufferStorageMultisample(n.RENDERBUFFER, ot(v), K, v.width, v.height) : n.renderbufferStorage(n.RENDERBUFFER, K, v.width, v.height);
      }
    }
    n.bindRenderbuffer(n.RENDERBUFFER, null);
  }
  function Tt(b, v, B) {
    const te = v.isWebGLCubeRenderTarget === true;
    if (t.bindFramebuffer(n.FRAMEBUFFER, b), !(v.depthTexture && v.depthTexture.isDepthTexture)) throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
    const $ = i.get(v.depthTexture);
    $.__renderTarget = v;
    const re = te ? v.depthTexture.image[0] : v.depthTexture.image;
    (!$.__webglTexture || re.width !== v.width || re.height !== v.height) && (re.width = v.width, re.height = v.height, v.depthTexture.needsUpdate = true), te ? pe(v.depthTexture, 0) : de(v.depthTexture, 0);
    const he = $.__webglTexture, Z = ot(v), K = te ? n.TEXTURE_CUBE_MAP_POSITIVE_X + B : n.TEXTURE_2D, oe = v.depthTexture.format === Ln ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
    if (v.depthTexture.format === Kn) fe(v) ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, oe, K, he, 0, Z) : n.framebufferTexture2D(n.FRAMEBUFFER, oe, K, he, 0);
    else if (v.depthTexture.format === Ln) fe(v) ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, oe, K, he, 0, Z) : n.framebufferTexture2D(n.FRAMEBUFFER, oe, K, he, 0);
    else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
  }
  function Jt(b) {
    const v = i.get(b), B = b.isWebGLCubeRenderTarget === true;
    if (v.__boundDepthTexture !== b.depthTexture) {
      const te = b.depthTexture;
      if (v.__depthDisposeCallback && v.__depthDisposeCallback(), te) {
        const $ = () => {
          delete v.__boundDepthTexture, delete v.__depthDisposeCallback, te.removeEventListener("dispose", $);
        };
        te.addEventListener("dispose", $), v.__depthDisposeCallback = $;
      }
      v.__boundDepthTexture = te;
    }
    if (b.depthTexture && !v.__autoAllocateDepthBuffer) if (B) for (let te = 0; te < 6; te++) Tt(v.__webglFramebuffer[te], b, te);
    else b.texture.mipmaps.length > 0 ? Tt(v.__webglFramebuffer[0], b, 0) : Tt(v.__webglFramebuffer, b, 0);
    else if (B) {
      v.__webglDepthbuffer = [];
      for (let te = 0; te < 6; te++) if (t.bindFramebuffer(n.FRAMEBUFFER, v.__webglFramebuffer[te]), v.__webglDepthbuffer[te] === void 0) v.__webglDepthbuffer[te] = n.createRenderbuffer(), dn(v.__webglDepthbuffer[te], b, false);
      else {
        const $ = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, re = v.__webglDepthbuffer[te];
        n.bindRenderbuffer(n.RENDERBUFFER, re), n.framebufferRenderbuffer(n.FRAMEBUFFER, $, n.RENDERBUFFER, re);
      }
    } else if (b.texture.mipmaps.length > 0 ? t.bindFramebuffer(n.FRAMEBUFFER, v.__webglFramebuffer[0]) : t.bindFramebuffer(n.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0) v.__webglDepthbuffer = n.createRenderbuffer(), dn(v.__webglDepthbuffer, b, false);
    else {
      const $ = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, re = v.__webglDepthbuffer;
      n.bindRenderbuffer(n.RENDERBUFFER, re), n.framebufferRenderbuffer(n.FRAMEBUFFER, $, n.RENDERBUFFER, re);
    }
    t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function $t(b, v, B) {
    const te = i.get(b);
    v !== void 0 && ct(te.__webglFramebuffer, b, b.texture, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, 0), B !== void 0 && Jt(b);
  }
  function Qt(b) {
    const v = b.texture, B = i.get(b), te = i.get(v);
    b.addEventListener("dispose", F), N(b);
    const $ = b.textures, re = b.isWebGLCubeRenderTarget === true, he = $.length > 1;
    if (he || (te.__webglTexture === void 0 && (te.__webglTexture = n.createTexture()), te.__version = v.version, a.memory.textures++), re) {
      B.__webglFramebuffer = [];
      for (let Z = 0; Z < 6; Z++) if (v.mipmaps.length > 0) {
        B.__webglFramebuffer[Z] = [];
        for (let K = 0; K < v.mipmaps.length; K++) B.__webglFramebuffer[Z][K] = n.createFramebuffer();
      } else B.__webglFramebuffer[Z] = n.createFramebuffer();
    } else {
      if (v.mipmaps.length > 0) {
        B.__webglFramebuffer = [];
        for (let Z = 0; Z < v.mipmaps.length; Z++) B.__webglFramebuffer[Z] = n.createFramebuffer();
      } else B.__webglFramebuffer = n.createFramebuffer();
      if (he) for (let Z = 0, K = $.length; Z < K; Z++) {
        const oe = i.get($[Z]);
        oe.__webglTexture === void 0 && (oe.__webglTexture = n.createTexture(), a.memory.textures++);
      }
      if (b.samples > 0 && fe(b) === false) {
        B.__webglMultisampledFramebuffer = n.createFramebuffer(), B.__webglColorRenderbuffer = [], t.bindFramebuffer(n.FRAMEBUFFER, B.__webglMultisampledFramebuffer);
        for (let Z = 0; Z < $.length; Z++) {
          const K = $[Z];
          B.__webglColorRenderbuffer[Z] = n.createRenderbuffer(), n.bindRenderbuffer(n.RENDERBUFFER, B.__webglColorRenderbuffer[Z]);
          const oe = r.convert(K.format, K.colorSpace), w = r.convert(K.type), J = A(K.internalFormat, oe, w, K.normalized, K.colorSpace, b.isXRRenderTarget === true), Y = ot(b);
          n.renderbufferStorageMultisample(n.RENDERBUFFER, Y, J, b.width, b.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + Z, n.RENDERBUFFER, B.__webglColorRenderbuffer[Z]);
        }
        n.bindRenderbuffer(n.RENDERBUFFER, null), b.depthBuffer && (B.__webglDepthRenderbuffer = n.createRenderbuffer(), dn(B.__webglDepthRenderbuffer, b, true)), t.bindFramebuffer(n.FRAMEBUFFER, null);
      }
    }
    if (re) {
      t.bindTexture(n.TEXTURE_CUBE_MAP, te.__webglTexture), et(n.TEXTURE_CUBE_MAP, v);
      for (let Z = 0; Z < 6; Z++) if (v.mipmaps.length > 0) for (let K = 0; K < v.mipmaps.length; K++) ct(B.__webglFramebuffer[Z][K], b, v, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, K);
      else ct(B.__webglFramebuffer[Z], b, v, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0);
      T(v) ? E(n.TEXTURE_CUBE_MAP) : v.mipmaps.length > 0 && n.texParameteri(n.TEXTURE_CUBE_MAP, n.TEXTURE_MAX_LEVEL, v.mipmaps.length - 1), t.unbindTexture();
    } else if (he) {
      for (let Z = 0, K = $.length; Z < K; Z++) {
        const oe = $[Z], w = i.get(oe);
        let J = n.TEXTURE_2D;
        (b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (J = b.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY), t.bindTexture(J, w.__webglTexture), et(J, oe), ct(B.__webglFramebuffer, b, oe, n.COLOR_ATTACHMENT0 + Z, J, 0), T(oe) && E(J);
      }
      t.unbindTexture();
    } else {
      let Z = n.TEXTURE_2D;
      if ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (Z = b.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY), t.bindTexture(Z, te.__webglTexture), et(Z, v), v.mipmaps.length > 0) for (let K = 0; K < v.mipmaps.length; K++) ct(B.__webglFramebuffer[K], b, v, n.COLOR_ATTACHMENT0, Z, K);
      else ct(B.__webglFramebuffer, b, v, n.COLOR_ATTACHMENT0, Z, 0);
      T(v) ? E(Z) : v.mipmaps.length > 0 && n.texParameteri(Z, n.TEXTURE_MAX_LEVEL, v.mipmaps.length - 1), t.unbindTexture();
    }
    b.depthBuffer && Jt(b);
  }
  function U(b) {
    const v = b.textures;
    for (let B = 0, te = v.length; B < te; B++) {
      const $ = v[B];
      if (T($) && $.mipmapsAutoUpdate === true) {
        const re = R(b), he = i.get($).__webglTexture;
        t.bindTexture(re, he), E(re), t.unbindTexture();
      }
    }
  }
  const jt = [];
  function at(b) {
    if (b.samples > 0) {
      if (fe(b) === false) {
        const v = b.textures, B = b.width, te = b.height;
        let $ = n.COLOR_BUFFER_BIT;
        const re = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, he = i.get(b), Z = v.length > 1;
        if (Z) for (let oe = 0; oe < v.length; oe++) t.bindFramebuffer(n.FRAMEBUFFER, he.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + oe, n.RENDERBUFFER, null), t.bindFramebuffer(n.FRAMEBUFFER, he.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + oe, n.TEXTURE_2D, null, 0);
        t.bindFramebuffer(n.READ_FRAMEBUFFER, he.__webglMultisampledFramebuffer), b.texture.mipmaps.length > 0 ? t.bindFramebuffer(n.DRAW_FRAMEBUFFER, he.__webglFramebuffer[0]) : t.bindFramebuffer(n.DRAW_FRAMEBUFFER, he.__webglFramebuffer);
        for (let oe = 0; oe < v.length; oe++) {
          if (b.resolveDepthBuffer && (b.depthBuffer && ($ |= n.DEPTH_BUFFER_BIT), b.stencilBuffer && b.resolveStencilBuffer && ($ |= n.STENCIL_BUFFER_BIT)), Z) {
            n.framebufferRenderbuffer(n.READ_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.RENDERBUFFER, he.__webglColorRenderbuffer[oe]);
            const w = i.get(v[oe]).__webglTexture;
            n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, w, 0);
          }
          n.blitFramebuffer(0, 0, B, te, 0, 0, B, te, $, n.NEAREST), c === true && (jt.length = 0, jt.push(n.COLOR_ATTACHMENT0 + oe), b.depthBuffer && b.storeMultisampledDepthBuffer === false && jt.push(re), n.invalidateFramebuffer(n.READ_FRAMEBUFFER, jt));
        }
        if (t.bindFramebuffer(n.READ_FRAMEBUFFER, null), t.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), Z) for (let oe = 0; oe < v.length; oe++) {
          t.bindFramebuffer(n.FRAMEBUFFER, he.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + oe, n.RENDERBUFFER, he.__webglColorRenderbuffer[oe]);
          const w = i.get(v[oe]).__webglTexture;
          t.bindFramebuffer(n.FRAMEBUFFER, he.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + oe, n.TEXTURE_2D, w, 0);
        }
        t.bindFramebuffer(n.DRAW_FRAMEBUFFER, he.__webglMultisampledFramebuffer);
      } else if (b.depthBuffer && b.storeMultisampledDepthBuffer === false && c) {
        const v = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
        n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function ot(b) {
    return Math.min(s.maxSamples, b.samples);
  }
  function fe(b) {
    const v = i.get(b);
    return b.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && v.__useRenderToTexture !== false;
  }
  function xt(b) {
    const v = a.render.frame;
    h.get(b) !== v && (h.set(b, v), b.update());
  }
  function Pe(b, v) {
    const B = b.colorSpace, te = b.format, $ = b.type;
    return b.isCompressedTexture === true || b.isVideoTexture === true || B !== Oi && B !== _n && (Xe.getTransfer(B) === nt ? (te !== vn || $ !== lt) && De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : Ze("WebGLTextures: Unsupported texture color space:", B)), v;
  }
  function Ie(b) {
    return typeof HTMLImageElement < "u" && b instanceof HTMLImageElement ? (l.width = b.naturalWidth || b.width, l.height = b.naturalHeight || b.height) : typeof VideoFrame < "u" && b instanceof VideoFrame ? (l.width = b.displayWidth, l.height = b.displayHeight) : (l.width = b.width, l.height = b.height), l;
  }
  this.allocateTextureUnit = Le, this.resetTextureUnits = Q, this.getTextureUnits = j, this.setTextureUnits = Se, this.setTexture2D = de, this.setTexture2DArray = ve, this.setTexture3D = Ae, this.setTextureCube = pe, this.rebindTextures = $t, this.setupRenderTarget = Qt, this.updateRenderTargetMipmap = U, this.updateMultisampleRenderTarget = at, this.setupDepthRenderbuffer = Jt, this.setupFrameBufferTexture = ct, this.useMultisampledRTT = fe, this.dispose = W;
}
function U0(n, e) {
  function t(i, s = _n) {
    let r;
    const a = Xe.getTransfer(s);
    if (i === lt) return n.UNSIGNED_BYTE;
    if (i === oo) return n.UNSIGNED_SHORT_4_4_4_4;
    if (i === lo) return n.UNSIGNED_SHORT_5_5_5_1;
    if (i === Ac) return n.UNSIGNED_INT_5_9_9_9_REV;
    if (i === Rc) return n.UNSIGNED_INT_10F_11F_11F_REV;
    if (i === Tc) return n.BYTE;
    if (i === bc) return n.SHORT;
    if (i === fs) return n.UNSIGNED_SHORT;
    if (i === ao) return n.INT;
    if (i === xn) return n.UNSIGNED_INT;
    if (i === nn) return n.FLOAT;
    if (i === Sn) return n.HALF_FLOAT;
    if (i === wc) return n.ALPHA;
    if (i === Cc) return n.RGB;
    if (i === vn) return n.RGBA;
    if (i === Kn) return n.DEPTH_COMPONENT;
    if (i === Ln) return n.DEPTH_STENCIL;
    if (i === co) return n.RED;
    if (i === ho) return n.RED_INTEGER;
    if (i === ai) return n.RG;
    if (i === uo) return n.RG_INTEGER;
    if (i === fo) return n.RGBA_INTEGER;
    if (i === lr || i === cr || i === hr || i === ur) if (a === nt) if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (i === lr) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (i === cr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (i === hr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (i === ur) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (i === lr) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (i === cr) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (i === hr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (i === ur) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (i === Ea || i === ya || i === Ta || i === ba) if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (i === Ea) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (i === ya) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (i === Ta) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (i === ba) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (i === Aa || i === Ra || i === wa || i === Ca || i === Pa || i === _r || i === Da) if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (i === Aa || i === Ra) return a === nt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (i === wa) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      if (i === Ca) return r.COMPRESSED_R11_EAC;
      if (i === Pa) return r.COMPRESSED_SIGNED_R11_EAC;
      if (i === _r) return r.COMPRESSED_RG11_EAC;
      if (i === Da) return r.COMPRESSED_SIGNED_RG11_EAC;
    } else return null;
    if (i === La || i === Ia || i === Ua || i === Na || i === Fa || i === Oa || i === Ba || i === za || i === Ha || i === Ga || i === ka || i === Va || i === Wa || i === Xa) if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (i === La) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (i === Ia) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (i === Ua) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (i === Na) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (i === Fa) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (i === Oa) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (i === Ba) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (i === za) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (i === Ha) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (i === Ga) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (i === ka) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (i === Va) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (i === Wa) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (i === Xa) return a === nt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (i === Ya || i === qa || i === Za) if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
      if (i === Ya) return a === nt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (i === qa) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (i === Za) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (i === Ka || i === Ja || i === vr || i === $a) if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
      if (i === Ka) return r.COMPRESSED_RED_RGTC1_EXT;
      if (i === Ja) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (i === vr) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (i === $a) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return i === ri ? n.UNSIGNED_INT_24_8 : n[i] !== void 0 ? n[i] : null;
  }
  return { convert: t };
}
const N0 = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, F0 = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class O0 {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      const i = new Wc(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, i = new It({ vertexShader: N0, fragmentShader: F0, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new un(new Ar(20, 20), i);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class B0 extends fn {
  constructor(e, t) {
    super();
    const i = this;
    let s = null, r = 1, a = null, o = "local-floor", c = 1, l = null, h = null, u = null, d = null, f = null, g = null;
    const S = typeof XRWebGLBinding < "u", p = new O0(), m = {}, M = t.getContextAttributes();
    let T = null, E = null;
    const R = [], A = [], _ = new ne();
    let y = null, N = null;
    const P = new qt();
    P.viewport = new ut();
    const I = new qt();
    I.viewport = new ut();
    const F = [P, I], G = new Kf();
    let C = null, W = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(q) {
      let de = R[q];
      return de === void 0 && (de = new Gr(), R[q] = de), de.getTargetRaySpace();
    }, this.getControllerGrip = function(q) {
      let de = R[q];
      return de === void 0 && (de = new Gr(), R[q] = de), de.getGripSpace();
    }, this.getHand = function(q) {
      let de = R[q];
      return de === void 0 && (de = new Gr(), R[q] = de), de.getHandSpace();
    };
    function k(q) {
      const de = A.indexOf(q.inputSource);
      if (de === -1) return;
      const ve = R[de];
      ve !== void 0 && (ve.update(q.inputSource, q.frame, l || a), ve.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function H() {
      s.removeEventListener("select", k), s.removeEventListener("selectstart", k), s.removeEventListener("selectend", k), s.removeEventListener("squeeze", k), s.removeEventListener("squeezestart", k), s.removeEventListener("squeezeend", k), s.removeEventListener("end", H), s.removeEventListener("inputsourceschange", ee);
      for (let q = 0; q < R.length; q++) {
        const de = A[q];
        de !== null && (A[q] = null, R[q].disconnect(de));
      }
      C = null, W = null, p.reset();
      for (const q in m) delete m[q];
      if (e.setRenderTarget(T), f = null, d = null, u = null, s = null, E = null, Le.stop(), i.isPresenting = false, e.setPixelRatio(y), e.setSize(_.width, _.height, false), N !== null) {
        const q = N.camera;
        q.fov = N.fov, q.zoom = N.zoom, q.updateProjectionMatrix(), N = null;
      }
      i.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(q) {
      r = q, i.isPresenting === true && De("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(q) {
      o = q, i.isPresenting === true && De("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(q) {
      l = q;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u === null && S && (u = new XRWebGLBinding(s, t)), u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(q) {
      if (s = q, s !== null) {
        if (T = e.getRenderTarget(), s.addEventListener("select", k), s.addEventListener("selectstart", k), s.addEventListener("selectend", k), s.addEventListener("squeeze", k), s.addEventListener("squeezestart", k), s.addEventListener("squeezeend", k), s.addEventListener("end", H), s.addEventListener("inputsourceschange", ee), M.xrCompatible !== true && await t.makeXRCompatible(), y = e.getPixelRatio(), e.getSize(_), S && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let ve = null, Ae = null, pe = null;
          M.depth && (pe = M.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ve = M.stencil ? Ln : Kn, Ae = M.stencil ? ri : xn);
          const be = { colorFormat: t.RGBA8, depthFormat: pe, scaleFactor: r };
          u = this.getBinding(), d = u.createProjectionLayer(be), s.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, false), E = new gt(d.textureWidth, d.textureHeight, { format: vn, type: lt, depthTexture: new Nn(d.textureWidth, d.textureHeight, Ae, void 0, void 0, void 0, void 0, void 0, void 0, ve), stencilBuffer: M.stencil, colorSpace: e.outputColorSpace, samples: M.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === false, resolveStencilBuffer: d.ignoreDepthValues === false, storeMultisampledDepthBuffer: d.ignoreDepthValues === false, storeMultisampledStencilBuffer: d.ignoreDepthValues === false });
        } else {
          const ve = { antialias: M.antialias, alpha: true, depth: M.depth, stencil: M.stencil, framebufferScaleFactor: r };
          f = new XRWebGLLayer(s, t, ve), s.updateRenderState({ baseLayer: f }), e.setPixelRatio(1), e.setSize(f.framebufferWidth, f.framebufferHeight, false), E = new gt(f.framebufferWidth, f.framebufferHeight, { format: vn, type: lt, colorSpace: e.outputColorSpace, stencilBuffer: M.stencil, resolveDepthBuffer: f.ignoreDepthValues === false, resolveStencilBuffer: f.ignoreDepthValues === false, storeMultisampledDepthBuffer: f.ignoreDepthValues === false, storeMultisampledStencilBuffer: f.ignoreDepthValues === false });
        }
        E.isXRRenderTarget = true, this.setFoveation(c), l = null, a = await s.requestReferenceSpace(o), Le.setContext(s), Le.start(), i.isPresenting = true, i.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null) return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return p.getDepthTexture();
    };
    function ee(q) {
      for (let de = 0; de < q.removed.length; de++) {
        const ve = q.removed[de], Ae = A.indexOf(ve);
        Ae >= 0 && (A[Ae] = null, R[Ae].disconnect(ve));
      }
      for (let de = 0; de < q.added.length; de++) {
        const ve = q.added[de];
        let Ae = A.indexOf(ve);
        if (Ae === -1) {
          for (let be = 0; be < R.length; be++) if (be >= A.length) {
            A.push(ve), Ae = be;
            break;
          } else if (A[be] === null) {
            A[be] = ve, Ae = be;
            break;
          }
          if (Ae === -1) break;
        }
        const pe = R[Ae];
        pe && pe.connect(ve);
      }
    }
    function X(q, de) {
      de === null ? q.matrixWorld.copy(q.matrix) : q.matrixWorld.multiplyMatrices(de.matrixWorld, q.matrix), q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function(q) {
      if (s === null) return;
      let de = q.near, ve = q.far;
      p.texture !== null && (p.depthNear > 0 && (de = p.depthNear), p.depthFar > 0 && (ve = p.depthFar)), G.near = I.near = P.near = de, G.far = I.far = P.far = ve, (C !== G.near || W !== G.far) && (s.updateRenderState({ depthNear: G.near, depthFar: G.far }), C = G.near, W = G.far), G.layers.mask = q.layers.mask | 6, P.layers.mask = G.layers.mask & -5, I.layers.mask = G.layers.mask & -3;
      const Ae = q.parent, pe = G.cameras;
      X(G, Ae);
      for (let be = 0; be < pe.length; be++) X(pe[be], Ae);
      G.projectionMatrix.copy(P.projectionMatrix), G.projectionMatrixInverse.copy(P.projectionMatrixInverse), N === null && q.isPerspectiveCamera && (N = { camera: q, fov: q.fov, zoom: q.zoom }), Q(q, G, Ae);
    };
    function Q(q, de, ve) {
      ve === null ? q.matrix.copy(de.matrixWorld) : (q.matrix.copy(ve.matrixWorld), q.matrix.invert(), q.matrix.multiply(de.matrixWorld)), q.matrix.decompose(q.position, q.quaternion, q.scale), q.updateMatrixWorld(true), q.projectionMatrix.copy(de.projectionMatrix), q.projectionMatrixInverse.copy(de.projectionMatrixInverse), q.isPerspectiveCamera && (q.fov = ms * 2 * Math.atan(1 / q.projectionMatrix.elements[5]), q.zoom = 1);
    }
    this.getCamera = function() {
      return G;
    }, this.getFoveation = function() {
      if (!(d === null && f === null)) return c;
    }, this.setFoveation = function(q) {
      c = q, d !== null && (d.fixedFoveation = q), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = q);
    }, this.hasDepthSensing = function() {
      return p.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return p.getMesh(G);
    }, this.getCameraTexture = function(q) {
      return m[q];
    };
    let j = null;
    function Se(q, de) {
      if (h = de.getViewerPose(l || a), g = de, h !== null) {
        const ve = h.views;
        f !== null && (e.setRenderTargetFramebuffer(E, f.framebuffer), e.setRenderTarget(E));
        let Ae = false;
        ve.length !== G.cameras.length && (G.cameras.length = 0, Ae = true);
        for (let we = 0; we < ve.length; we++) {
          const et = ve[we];
          let it = null;
          if (f !== null) it = f.getViewport(et);
          else {
            const Pt = u.getViewSubImage(d, et);
            it = Pt.viewport, we === 0 && (e.setRenderTargetTextures(E, Pt.colorTexture, Pt.depthStencilTexture), e.setRenderTarget(E));
          }
          let Ge = F[we];
          Ge === void 0 && (Ge = new qt(), Ge.layers.enable(we), Ge.viewport = new ut(), F[we] = Ge), Ge.matrix.fromArray(et.transform.matrix), Ge.matrix.decompose(Ge.position, Ge.quaternion, Ge.scale), Ge.projectionMatrix.fromArray(et.projectionMatrix), Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(), Ge.viewport.set(it.x, it.y, it.width, it.height), we === 0 && (G.matrix.copy(Ge.matrix), G.matrix.decompose(G.position, G.quaternion, G.scale)), Ae === true && G.cameras.push(Ge);
        }
        const pe = s.enabledFeatures;
        if (pe && pe.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && S) {
          u = i.getBinding();
          const we = u.getDepthInformation(ve[0]);
          we && we.isValid && we.texture && p.init(we, s.renderState);
        }
        if (pe && pe.includes("camera-access") && S) {
          e.state.unbindTexture(), u = i.getBinding();
          for (let we = 0; we < ve.length; we++) {
            const et = ve[we].camera;
            if (et) {
              let it = m[et];
              it || (it = new Wc(), m[et] = it);
              const Ge = u.getCameraImage(et);
              it.sourceTexture = Ge;
            }
          }
        }
      }
      for (let ve = 0; ve < R.length; ve++) {
        const Ae = A[ve], pe = R[ve];
        Ae !== null && pe !== void 0 && pe.update(Ae, de, l || a);
      }
      j && j(q, de), de.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: de }), g = null;
    }
    const Le = new ah();
    Le.setAnimationLoop(Se), this.setAnimationLoop = function(q) {
      j = q;
    }, this.dispose = function() {
    };
  }
}
const z0 = new $e(), gh = new Ne();
gh.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function H0(n, e) {
  function t(p, m) {
    p.matrixAutoUpdate === true && p.updateMatrix(), m.value.copy(p.matrix);
  }
  function i(p, m) {
    m.color.getRGB(p.fogColor.value, nh(n)), m.isFog ? (p.fogNear.value = m.near, p.fogFar.value = m.far) : m.isFogExp2 && (p.fogDensity.value = m.density);
  }
  function s(p, m, M, T, E) {
    m.isNodeMaterial ? m.uniformsNeedUpdate = false : m.isMeshBasicMaterial ? r(p, m) : m.isMeshLambertMaterial ? (r(p, m), m.envMap && (p.envMapIntensity.value = m.envMapIntensity)) : m.isMeshToonMaterial ? (r(p, m), u(p, m)) : m.isMeshPhongMaterial ? (r(p, m), h(p, m), m.envMap && (p.envMapIntensity.value = m.envMapIntensity)) : m.isMeshStandardMaterial ? (r(p, m), d(p, m), m.isMeshPhysicalMaterial && f(p, m, E)) : m.isMeshMatcapMaterial ? (r(p, m), g(p, m)) : m.isMeshDepthMaterial ? r(p, m) : m.isMeshDistanceMaterial ? (r(p, m), S(p, m)) : m.isMeshNormalMaterial ? r(p, m) : m.isLineBasicMaterial ? (a(p, m), m.isLineDashedMaterial && o(p, m)) : m.isPointsMaterial ? c(p, m, M, T) : m.isSpriteMaterial ? l(p, m) : m.isShadowMaterial ? (p.color.value.copy(m.color), p.opacity.value = m.opacity) : m.isShaderMaterial && (m.uniformsNeedUpdate = false);
  }
  function r(p, m) {
    p.opacity.value = m.opacity, m.color && p.diffuse.value.copy(m.color), m.emissive && p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity), m.map && (p.map.value = m.map, t(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.bumpMap && (p.bumpMap.value = m.bumpMap, t(m.bumpMap, p.bumpMapTransform), p.bumpScale.value = m.bumpScale, m.side === wt && (p.bumpScale.value *= -1)), m.normalMap && (p.normalMap.value = m.normalMap, t(m.normalMap, p.normalMapTransform), p.normalScale.value.copy(m.normalScale), m.side === wt && p.normalScale.value.negate()), m.displacementMap && (p.displacementMap.value = m.displacementMap, t(m.displacementMap, p.displacementMapTransform), p.displacementScale.value = m.displacementScale, p.displacementBias.value = m.displacementBias), m.emissiveMap && (p.emissiveMap.value = m.emissiveMap, t(m.emissiveMap, p.emissiveMapTransform)), m.specularMap && (p.specularMap.value = m.specularMap, t(m.specularMap, p.specularMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
    const M = e.get(m), T = M.envMap, E = M.envMapRotation;
    T && (p.envMap.value = T, p.envMapRotation.value.setFromMatrix4(z0.makeRotationFromEuler(E)).transpose(), T.isCubeTexture && T.isRenderTargetTexture === false && p.envMapRotation.value.premultiply(gh), p.reflectivity.value = m.reflectivity, p.ior.value = m.ior, p.refractionRatio.value = m.refractionRatio), m.lightMap && (p.lightMap.value = m.lightMap, p.lightMapIntensity.value = m.lightMapIntensity, t(m.lightMap, p.lightMapTransform)), m.aoMap && (p.aoMap.value = m.aoMap, p.aoMapIntensity.value = m.aoMapIntensity, t(m.aoMap, p.aoMapTransform));
  }
  function a(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, m.map && (p.map.value = m.map, t(m.map, p.mapTransform));
  }
  function o(p, m) {
    p.dashSize.value = m.dashSize, p.totalSize.value = m.dashSize + m.gapSize, p.scale.value = m.scale;
  }
  function c(p, m, M, T) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.size.value = m.size * M, p.scale.value = T * 0.5, m.map && (p.map.value = m.map, t(m.map, p.uvTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function l(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.rotation.value = m.rotation, m.map && (p.map.value = m.map, t(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function h(p, m) {
    p.specular.value.copy(m.specular), p.shininess.value = Math.max(m.shininess, 1e-4);
  }
  function u(p, m) {
    m.gradientMap && (p.gradientMap.value = m.gradientMap);
  }
  function d(p, m) {
    p.metalness.value = m.metalness, m.metalnessMap && (p.metalnessMap.value = m.metalnessMap, t(m.metalnessMap, p.metalnessMapTransform)), p.roughness.value = m.roughness, m.roughnessMap && (p.roughnessMap.value = m.roughnessMap, t(m.roughnessMap, p.roughnessMapTransform)), m.envMap && (p.envMapIntensity.value = m.envMapIntensity);
  }
  function f(p, m, M) {
    p.ior.value = m.ior, m.diffuseRoughness > 0 && (p.diffuseRoughness.value = m.diffuseRoughness, m.diffuseRoughnessMap && (p.diffuseRoughnessMap.value = m.diffuseRoughnessMap, t(m.diffuseRoughnessMap, p.diffuseRoughnessMapTransform))), m.sheen > 0 && (p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen), p.sheenRoughness.value = m.sheenRoughness, m.sheenColorMap && (p.sheenColorMap.value = m.sheenColorMap, t(m.sheenColorMap, p.sheenColorMapTransform)), m.sheenRoughnessMap && (p.sheenRoughnessMap.value = m.sheenRoughnessMap, t(m.sheenRoughnessMap, p.sheenRoughnessMapTransform))), m.clearcoat > 0 && (p.clearcoat.value = m.clearcoat, p.clearcoatRoughness.value = m.clearcoatRoughness, m.clearcoatMap && (p.clearcoatMap.value = m.clearcoatMap, t(m.clearcoatMap, p.clearcoatMapTransform)), m.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap, t(m.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), m.clearcoatNormalMap && (p.clearcoatNormalMap.value = m.clearcoatNormalMap, t(m.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale), m.side === wt && p.clearcoatNormalScale.value.negate())), m.dispersion > 0 && (p.dispersion.value = m.dispersion), m.retroreflectivity > 0 && (p.retroreflectivity.value = m.retroreflectivity), m.iridescence > 0 && (p.iridescence.value = m.iridescence, p.iridescenceIOR.value = m.iridescenceIOR, p.iridescenceThicknessMinimum.value = m.iridescenceThicknessMinimum, p.iridescenceThicknessMaximum.value = m.iridescenceThicknessMaximum, m.iridescenceMap && (p.iridescenceMap.value = m.iridescenceMap, t(m.iridescenceMap, p.iridescenceMapTransform)), m.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = m.iridescenceThicknessMap, t(m.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), m.transmission > 0 && (p.transmission.value = m.transmission, p.transmissionSamplerMap.value = M.texture, p.transmissionSamplerSize.value.set(M.width, M.height), m.transmissionMap && (p.transmissionMap.value = m.transmissionMap, t(m.transmissionMap, p.transmissionMapTransform)), p.thickness.value = m.thickness, m.thicknessMap && (p.thicknessMap.value = m.thicknessMap, t(m.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = m.attenuationDistance, p.attenuationColor.value.copy(m.attenuationColor)), m.anisotropy > 0 && (p.anisotropyVector.value.set(m.anisotropy * Math.cos(m.anisotropyRotation), m.anisotropy * Math.sin(m.anisotropyRotation)), m.anisotropyMap && (p.anisotropyMap.value = m.anisotropyMap, t(m.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = m.specularIntensity, p.specularColor.value.copy(m.specularColor), m.specularColorMap && (p.specularColorMap.value = m.specularColorMap, t(m.specularColorMap, p.specularColorMapTransform)), m.specularIntensityMap && (p.specularIntensityMap.value = m.specularIntensityMap, t(m.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, m) {
    m.matcap && (p.matcap.value = m.matcap);
  }
  function S(p, m) {
    const M = e.get(m).light;
    p.referencePosition.value.setFromMatrixPosition(M.matrixWorld), p.nearDistance.value = M.shadow.camera.near, p.farDistance.value = M.shadow.camera.far;
  }
  return { refreshFogUniforms: i, refreshMaterialUniforms: s };
}
function G0(n, e, t, i) {
  let s = {}, r = {};
  function a(M, T) {
    const E = T.program;
    i.uniformBlockBinding(M, E, s[M.id]);
  }
  function o(M, T) {
    let E = s[M.id];
    E === void 0 && (g(M), E = c(M), s[M.id] = E, M.addEventListener("dispose", p));
    const R = T.program;
    i.updateUBOMapping(M, R);
    const A = e.render.frame;
    r[M.id] !== A && (l(M), r[M.id] = A);
  }
  function c(M) {
    const T = n.createBuffer(), E = M.__size, R = M.usage;
    return n.bindBuffer(n.UNIFORM_BUFFER, T), n.bufferData(n.UNIFORM_BUFFER, E, R), n.bindBuffer(n.UNIFORM_BUFFER, null), T;
  }
  function l(M) {
    const T = s[M.id], E = M.uniforms, R = M.__cache;
    n.bindBuffer(n.UNIFORM_BUFFER, T);
    for (let A = 0, _ = E.length; A < _; A++) {
      const y = E[A];
      if (Array.isArray(y)) for (let N = 0, P = y.length; N < P; N++) h(y[N], A, N, R);
      else h(y, A, 0, R);
    }
    n.bindBuffer(n.UNIFORM_BUFFER, null);
  }
  function h(M, T, E, R) {
    if (d(M, T, E, R) === true) {
      const A = M.__offset, _ = M.value;
      if (Array.isArray(_)) {
        let y = 0;
        for (let N = 0; N < _.length; N++) {
          const P = _[N], I = S(P, true);
          u(P, M.__data, y), y += I.storage / Float32Array.BYTES_PER_ELEMENT;
        }
      } else u(_, M.__data, 0);
      n.bufferSubData(n.UNIFORM_BUFFER, A, M.__data);
    }
  }
  function u(M, T, E) {
    typeof M == "number" || typeof M == "boolean" ? T[E] = M : M.isMatrix3 ? (T[E] = M.elements[0], T[E + 1] = M.elements[1], T[E + 2] = M.elements[2], T[E + 3] = 0, T[E + 4] = M.elements[3], T[E + 5] = M.elements[4], T[E + 6] = M.elements[5], T[E + 7] = 0, T[E + 8] = M.elements[6], T[E + 9] = M.elements[7], T[E + 10] = M.elements[8], T[E + 11] = 0) : ArrayBuffer.isView(M) ? T.set(M.subarray(0, T.length - E), E) : M.toArray(T, E);
  }
  function d(M, T, E, R) {
    const A = M.value, _ = T + "_" + E;
    if (Array.isArray(A)) {
      R[_] === void 0 && (R[_] = []);
      const y = R[_];
      let N = false;
      for (let P = 0; P < A.length; P++) f(A[P], y, P) === true && (N = true);
      return N;
    }
    return f(A, R, _);
  }
  function f(M, T, E) {
    if (T[E] === void 0) return typeof M == "number" || typeof M == "boolean" ? T[E] = M : ArrayBuffer.isView(M) ? T[E] = M.slice() : T[E] = M.clone(), true;
    {
      const R = T[E];
      if (typeof M == "number" || typeof M == "boolean") {
        if (R !== M) return T[E] = M, true;
      } else {
        if (ArrayBuffer.isView(M)) return true;
        if (R.equals(M) === false) return R.copy(M), true;
      }
    }
    return false;
  }
  function g(M) {
    const T = M.uniforms;
    let E = 0;
    const R = 16;
    for (let _ = 0, y = T.length; _ < y; _++) {
      const N = Array.isArray(T[_]) ? T[_] : [T[_]];
      for (let P = 0, I = N.length; P < I; P++) {
        const F = N[P], G = Array.isArray(F.value) ? F.value : [F.value], C = Array.isArray(T[_]) || Array.isArray(F.value);
        let W = E;
        for (let H = 0, ee = G.length; H < ee; H++) {
          const X = G[H], Q = S(X, C), j = E % R, Se = j % Q.boundary, Le = j + Se;
          E += Se, Le !== 0 && R - Le < Q.storage && (E += R - Le), H === 0 && (W = E), E += Q.storage;
        }
        const k = F.type === "int" ? Int32Array : F.type === "uint" ? Uint32Array : Float32Array;
        F.__data = new k((E - W) / Float32Array.BYTES_PER_ELEMENT), F.__offset = W;
      }
    }
    const A = E % R;
    return A > 0 && (E += R - A), M.__size = E, M.__cache = {}, this;
  }
  function S(M, T) {
    const E = { boundary: 0, storage: 0 };
    return typeof M == "number" || typeof M == "boolean" ? (E.boundary = 4, E.storage = 4) : M.isVector2 ? (E.boundary = 8, E.storage = 8) : M.isVector3 || M.isColor ? (E.boundary = 16, E.storage = 12) : M.isVector4 ? (E.boundary = 16, E.storage = 16) : M.isMatrix3 ? (E.boundary = 16, E.storage = 48) : M.isMatrix4 ? (E.boundary = 16, E.storage = 64) : M.isTexture ? De("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(M) ? (E.boundary = 16, E.storage = M.byteLength) : De("WebGLRenderer: Unsupported uniform value type.", M), T === true && (E.boundary = 16, E.storage = Math.ceil(E.storage / 16) * 16), E;
  }
  function p(M) {
    const T = M.target;
    T.removeEventListener("dispose", p), n.deleteBuffer(s[T.id]), delete s[T.id], delete r[T.id];
  }
  function m() {
    for (const M in s) n.deleteBuffer(s[M]);
    s = {}, r = {};
  }
  return { bind: a, update: o, dispose: m };
}
const k0 = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183]);
let mn = null;
function V0() {
  return mn === null && (mn = new Gc(k0, 16, 16, ai, Sn), mn.name = "DFG_LUT", mn.minFilter = Ct, mn.magFilter = Ct, mn.wrapS = Dn, mn.wrapT = Dn, mn.generateMipmaps = false, mn.needsUpdate = true), mn;
}
class Bv {
  constructor(e = {}) {
    const { canvas: t = ou(), context: i = null, depth: s = true, stencil: r = false, alpha: a = false, antialias: o = false, premultipliedAlpha: c = true, preserveDrawingBuffer: l = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false, reversedDepthBuffer: d = false, outputBufferType: f = lt } = e;
    this.isWebGLRenderer = true;
    let g;
    if (i !== null) {
      if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      g = i.getContextAttributes().alpha;
    } else g = a;
    const S = f, p = /* @__PURE__ */ new Set([fo, uo, ho]), m = /* @__PURE__ */ new Set([lt, xn, fs, ri, oo, lo]), M = new Uint32Array(4), T = new Int32Array(4), E = { textures: [], min: [], max: [], resolution: [] };
    let R = null, A = null;
    const _ = [], y = [];
    let N = null;
    this.domElement = t, this.debug = { checkShaderErrors: true, diagnostics: { keywords: false }, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = In, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const P = this;
    let I = false, F = null, G = null, C = null, W = null;
    this._outputColorSpace = Ye;
    let k = 0, H = 0, ee = null, X = -1, Q = null;
    const j = new ut(), Se = new ut();
    let Le = null;
    const q = new He(0);
    let de = 0, ve = t.width, Ae = t.height, pe = 1, be = null, Ke = null;
    const we = new ut(0, 0, ve, Ae), et = new ut(0, 0, ve, Ae);
    let it = false;
    const Ge = new gs(), Pt = new xo();
    let vt = false, Vt = false;
    const ct = new $e(), dn = new L(), Tt = new ut(), Jt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let $t = false;
    function Qt() {
      return ee === null ? pe : 1;
    }
    let U = i;
    function jt(x, D) {
      return t.getContext(x, D);
    }
    let at, ot, fe, xt, Pe, Ie, b, v, B, te, $, re, he, Z, K, oe, w, J, Y, le, se, ae, Te;
    try {
      const x = { alpha: true, depth: s, stencil: r, antialias: o, premultipliedAlpha: c, preserveDrawingBuffer: l, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r187"), t.addEventListener("webglcontextlost", Re, false), t.addEventListener("webglcontextrestored", Fe, false), t.addEventListener("webglcontextcreationerror", me, false), U === null) {
        const D = "webgl2";
        if (U = jt(D, x), U === null) throw jt(D) ? new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
      }
      Oe();
    } catch (x) {
      throw t.removeEventListener("webglcontextlost", Re, false), t.removeEventListener("webglcontextrestored", Fe, false), t.removeEventListener("webglcontextcreationerror", me, false), Ze("WebGLRenderer: " + x.message), x;
    }
    function Oe() {
      at = new qm(U), at.init(), se = new U0(U, at), ot = new Fm(U, at, e, se), fe = new L0(U, at), ot.reversedDepthBuffer && d && fe.buffers.depth.setReversed(true), G = U.createFramebuffer(), C = U.createFramebuffer(), W = U.createFramebuffer(), xt = new Jm(U), Pe = new v0(), Ie = new I0(U, at, fe, Pe, ot, se, xt), b = new Ym(P), v = new Qf(U), ae = new Um(U, v), B = new Zm(U, v, xt, ae), te = new Qm(U, B, v, ae, xt), J = new $m(U, ot, Ie), K = new Om(Pe), $ = new _0(P, b, at, ot, ae, K), re = new H0(P, Pe), he = new S0(), Z = new A0(at), w = new Im(P, b, fe, te, g, c), oe = new D0(P, te, ot), Te = new G0(U, xt, ot, fe), Y = new Nm(U, at, xt), le = new Km(U, at, xt), xt.programs = $.programs, P.capabilities = ot, P.extensions = at, P.properties = Pe, P.renderLists = he, P.shadowMap = oe, P.state = fe, P.info = xt;
    }
    S !== lt && (N = new eg(S, t.width, t.height, o, s, r));
    const ie = new B0(P, U);
    this.xr = ie, this.getContext = function() {
      return U;
    }, this.getContextAttributes = function() {
      return U.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = at.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = at.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return pe;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (pe = x, this.setSize(ve, Ae, false));
    }, this.getSize = function(x) {
      return x.set(ve, Ae);
    }, this.setSize = function(x, D, V = true) {
      if (ie.isPresenting) {
        De("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      ve = x, Ae = D, t.width = Math.floor(x * pe), t.height = Math.floor(D * pe), V === true && (t.style.width = x + "px", t.style.height = D + "px"), N !== null && N.setSize(t.width, t.height), this.setViewport(0, 0, x, D);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(ve * pe, Ae * pe).floor();
    }, this.setDrawingBufferSize = function(x, D, V) {
      ve = x, Ae = D, pe = V, t.width = Math.floor(x * V), t.height = Math.floor(D * V), this.setViewport(0, 0, x, D);
    }, this.setEffects = function(x) {
      if (S === lt) {
        Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (x) {
        for (let D = 0; D < x.length; D++) if (x[D].isOutputPass === true) {
          De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
          break;
        }
      }
      N.setEffects(x || []);
    }, this.getCurrentViewport = function(x) {
      return x.copy(j);
    }, this.getViewport = function(x) {
      return x.copy(we);
    }, this.setViewport = function(x, D, V, O) {
      x.isVector4 ? we.set(x.x, x.y, x.z, x.w) : we.set(x, D, V, O), fe.viewport(j.copy(we).multiplyScalar(Qt()).round());
    }, this.getScissor = function(x) {
      return x.copy(et);
    }, this.setScissor = function(x, D, V, O) {
      x.isVector4 ? et.set(x.x, x.y, x.z, x.w) : et.set(x, D, V, O), fe.scissor(Se.copy(et).multiplyScalar(Qt()).round());
    }, this.getScissorTest = function() {
      return it;
    }, this.setScissorTest = function(x) {
      fe.setScissorTest(it = x);
    }, this.setOpaqueSort = function(x) {
      be = x;
    }, this.setTransparentSort = function(x) {
      Ke = x;
    }, this.getClearColor = function(x) {
      return x.copy(w.getClearColor());
    }, this.setClearColor = function() {
      w.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return w.getClearAlpha();
    }, this.setClearAlpha = function() {
      w.setClearAlpha(...arguments);
    }, this.clear = function(x = true, D = true, V = true) {
      let O = 0;
      if (x) {
        let z = false;
        if (ee !== null) {
          const ue = ee.texture.format;
          z = p.has(ue);
        }
        if (z) {
          const ue = ee.texture.type, xe = m.has(ue), ce = w.getClearColor(), _e = w.getClearAlpha(), ye = ce.r, Ue = ce.g, ke = ce.b;
          xe ? (M[0] = ye, M[1] = Ue, M[2] = ke, M[3] = _e, U.clearBufferuiv(U.COLOR, 0, M)) : (T[0] = ye, T[1] = Ue, T[2] = ke, T[3] = _e, U.clearBufferiv(U.COLOR, 0, T));
        } else O |= U.COLOR_BUFFER_BIT;
      }
      D && (O |= U.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(true)), V && (O |= U.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), O !== 0 && U.clear(O);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.setNodesHandler = function(x) {
      x.setRenderer(this), F = x;
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Re, false), t.removeEventListener("webglcontextrestored", Fe, false), t.removeEventListener("webglcontextcreationerror", me, false), w.dispose(), he.dispose(), Z.dispose(), Ie.dispose(), Pe.dispose(), b.dispose(), te.dispose(), B.dispose(), ae.dispose(), Te.dispose(), $.dispose(), ie.dispose(), ie.removeEventListener("sessionstart", wo), ie.removeEventListener("sessionend", Co), $n.stop();
    };
    function Re(x) {
      x.preventDefault(), Sr("WebGLRenderer: Context Lost."), I = true;
    }
    function Fe() {
      Sr("WebGLRenderer: Context Restored."), I = false;
      const x = xt.autoReset, D = oe.enabled, V = oe.autoUpdate, O = oe.needsUpdate, z = oe.type;
      Oe(), xt.autoReset = x, oe.enabled = D, oe.autoUpdate = V, oe.needsUpdate = O, oe.type = z;
    }
    function me(x) {
      Ze("WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function tt(x) {
      const D = x.target;
      D.removeEventListener("dispose", tt), bt(D);
    }
    function bt(x) {
      Bn(x), Pe.remove(x);
    }
    function Bn(x) {
      const D = Pe.get(x).programs;
      D !== void 0 && (D.forEach(function(V) {
        $.releaseProgram(V);
      }), x.isShaderMaterial && $.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, D, V, O, z, ue) {
      D === null && (D = Jt);
      const xe = z.isMesh && z.matrixWorld.determinantAffine() < 0, ce = Ah(x, D, V, O, z);
      fe.setMaterial(O, xe);
      let _e = V.index, ye = 1;
      if (O.wireframe === true) {
        if (_e = B.getWireframeAttribute(V), _e === void 0) return;
        ye = 2;
      }
      const Ue = V.drawRange, ke = V.attributes.position;
      let Me = Ue.start * ye, Ve = (Ue.start + Ue.count) * ye;
      ue !== null && (Me = Math.max(Me, ue.start * ye), Ve = Math.min(Ve, (ue.start + ue.count) * ye)), _e !== null ? (Me = Math.max(Me, 0), Ve = Math.min(Ve, _e.count)) : ke != null && (Me = Math.max(Me, 0), Ve = Math.min(Ve, ke.count));
      const pt = Ve - Me;
      if (pt < 0 || pt === 1 / 0) return;
      ae.setup(z, O, ce, V, _e);
      let rt, st = Y;
      if (_e !== null && (rt = v.get(_e), st = le, st.setIndex(rt)), z.isMesh) O.wireframe === true ? (fe.setLineWidth(O.wireframeLinewidth * Qt()), st.setMode(U.LINES)) : st.setMode(U.TRIANGLES);
      else if (z.isLine) {
        let Ut = O.linewidth;
        Ut === void 0 && (Ut = 1), fe.setLineWidth(Ut * Qt()), z.isLineSegments ? st.setMode(U.LINES) : z.isLineLoop ? st.setMode(U.LINE_LOOP) : st.setMode(U.LINE_STRIP);
      } else z.isPoints ? st.setMode(U.POINTS) : z.isSprite && st.setMode(U.TRIANGLES);
      if (z.isBatchedMesh) if (at.get("WEBGL_multi_draw")) st.renderMultiDraw(z._multiDrawStarts, z._multiDrawCounts, z._multiDrawCount);
      else {
        const Ut = z._multiDrawStarts, Ee = z._multiDrawCounts, Bt = z._multiDrawCount, Qe = _e ? v.get(_e).bytesPerElement : 1, Qn = Pe.get(O).currentProgram.getUniforms();
        for (let Nt = 0; Nt < Bt; Nt++) Qn.setValue(U, "_gl_DrawID", Nt), st.render(Ut[Nt] / Qe, Ee[Nt]);
      }
      else if (z.isInstancedMesh) st.renderInstances(Me, pt, z.count);
      else if (V.isInstancedBufferGeometry) {
        const Ut = V._maxInstanceCount !== void 0 ? V._maxInstanceCount : 1 / 0, Ee = Math.min(V.instanceCount, Ut);
        st.renderInstances(Me, pt, Ee);
      } else st.render(Me, pt);
    };
    function Ro(x, D, V, O) {
      F !== null && x.isNodeMaterial && F.setObject(O, x), vt === true && K.setState(x, V, false), x.transparent === true && x.side === Zt && x.forceSinglePass === false ? (x.side = wt, x.needsUpdate = true, Gi(x, D, O), x.side = Zn, x.needsUpdate = true, Gi(x, D, O), x.side = Zt) : Gi(x, D, O);
    }
    this.compile = function(x, D, V = null) {
      V === null && (V = x), F !== null && F.renderStart(x, D, V), A = Z.get(V), A.init(D), y.push(A), V.traverseVisible(function(z) {
        z.isLight && z.layers.test(D.layers) && (A.pushLight(z), z.castShadow && A.pushShadow(z));
      }), x !== V && x.traverseVisible(function(z) {
        z.isLight && z.layers.test(D.layers) && (A.pushLight(z), z.castShadow && A.pushShadow(z));
      }), A.setupLights(), F !== null && F.updateLights(A.state.lightsArray), Vt = this.localClippingEnabled, vt = K.init(this.clippingPlanes, Vt), vt === true && K.setGlobalState(this.clippingPlanes, D), F !== null && oe.render(A.state.shadowsArray, V, D);
      const O = /* @__PURE__ */ new Set();
      return x.traverse(function(z) {
        if (!(z.isMesh || z.isPoints || z.isLine || z.isSprite)) return;
        const ue = z.material;
        if (ue) if (Array.isArray(ue)) for (let xe = 0; xe < ue.length; xe++) {
          const ce = ue[xe];
          Ro(ce, V, D, z), O.add(ce);
        }
        else Ro(ue, V, D, z), O.add(ue);
      }), A = y.pop(), F !== null && F.renderEnd(), O;
    }, this.compileAsync = function(x, D, V = null) {
      const O = this.compile(x, D, V);
      return new Promise((z) => {
        function ue() {
          if (O.forEach(function(xe) {
            const _e = Pe.get(xe).currentProgram;
            (_e === void 0 || _e.isReady()) && O.delete(xe);
          }), O.size === 0) {
            z(x);
            return;
          }
          setTimeout(ue, 10);
        }
        at.get("KHR_parallel_shader_compile") !== null ? ue() : setTimeout(ue, 10);
      });
    };
    let Pr = null;
    function Th(x) {
      Pr && Pr(x);
    }
    function wo() {
      $n.stop();
    }
    function Co() {
      $n.start();
    }
    const $n = new ah();
    $n.setAnimationLoop(Th), typeof self < "u" && $n.setContext(self), this.setAnimationLoop = function(x) {
      Pr = x, ie.setAnimationLoop(x), x === null ? $n.stop() : $n.start();
    }, ie.addEventListener("sessionstart", wo), ie.addEventListener("sessionend", Co), this.render = function(x, D) {
      if (D !== void 0 && D.isCamera !== true) {
        Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (I === true) return;
      F !== null && F.renderStart(x, D);
      const V = ie.enabled === true && ie.isPresenting === true, O = N !== null && (ee === null || V) && N.begin(P, ee);
      if (x.matrixWorldAutoUpdate === true && x.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === true && D.updateMatrixWorld(), ie.enabled === true && ie.isPresenting === true && (N === null || N.isCompositing() === false) && (ie.cameraAutoUpdate === true && ie.updateCamera(D), D = ie.getCamera()), x.isScene === true && x.onBeforeRender(P, x, D, ee), A = Z.get(x, y.length), A.init(D), A.state.textureUnits = Ie.getTextureUnits(), y.push(A), ct.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), D.isArrayCamera ? Pt.setFromArrayCamera(D) : Ge.setFromProjectionMatrix(ct, cn, D.reversedDepth), Vt = this.localClippingEnabled, vt = K.init(this.clippingPlanes, Vt), R = he.get(x, _.length), R.init(), _.push(R), this.info.render.frame++, ie.enabled === true && ie.isPresenting === true) {
        const xe = P.xr.getDepthSensingMesh();
        xe !== null && Dr(xe, D, -1 / 0, P.sortObjects);
      }
      Dr(x, D, 0, P.sortObjects), R.finish(), F !== null && F.updateLights(A.state.lightsArray), P.sortObjects === true && R.sort(be, Ke), $t = ie.enabled === false || ie.isPresenting === false || ie.hasDepthSensing() === false, $t && w.addToRenderList(R, x), this.info.autoReset === true && this.info.reset(), vt === true && K.beginShadows();
      const z = A.state.shadowsArray;
      if (oe.render(z, x, D), vt === true && K.endShadows(), (O && N.hasRenderPass()) === false) {
        const xe = R.opaque, ce = R.transmissive;
        if (A.setupLights(), D.isArrayCamera) {
          const _e = D.cameras;
          if (ce.length > 0) for (let ye = 0, Ue = _e.length; ye < Ue; ye++) {
            const ke = _e[ye];
            Do(xe, ce, x, ke);
          }
          $t && w.render(x);
          for (let ye = 0, Ue = _e.length; ye < Ue; ye++) {
            const ke = _e[ye];
            Po(R, x, ke, ke.viewport);
          }
        } else ce.length > 0 && Do(xe, ce, x, D), $t && w.render(x), Po(R, x, D);
      }
      ee !== null && H === 0 && (Ie.updateMultisampleRenderTarget(ee), Ie.updateRenderTargetMipmap(ee)), O && N.end(P), x.isScene === true && x.onAfterRender(P, x, D), ae.resetDefaultState(), X = -1, Q = null, y.pop(), y.length > 0 ? (A = y[y.length - 1], Ie.setTextureUnits(A.state.textureUnits), vt === true && K.setGlobalState(P.clippingPlanes, A.state.camera)) : A = null, _.pop(), _.length > 0 ? R = _[_.length - 1] : R = null, F !== null && F.renderEnd();
    };
    function Dr(x, D, V, O) {
      if (x.visible === false) return;
      if (x.layers.test(D.layers)) {
        if (x.isGroup) V = x.renderOrder;
        else if (x.isLOD) x.autoUpdate === true && x.update(D);
        else if (x.isLight) A.pushLight(x), x.castShadow && A.pushShadow(x);
        else if (x.isSprite) {
          const xe = D.isArrayCamera ? Pt : Ge;
          if (!x.frustumCulled || x.intersectsFrustum(xe)) {
            O && Tt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ct);
            const ce = te.update(x), _e = x.material;
            _e.visible && R.push(x, ce, _e, V, Tt.z, null, D);
          }
        } else if (x.isMesh || x.isLine || x.isPoints) {
          const xe = D.isArrayCamera ? Pt : Ge;
          if (!x.frustumCulled || x.intersectsFrustum(xe)) {
            const ce = te.update(x), _e = x.material;
            if (O && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), Tt.copy(x.boundingSphere.center)) : (ce.boundingSphere === null && ce.computeBoundingSphere(), Tt.copy(ce.boundingSphere.center)), Tt.applyMatrix4(x.matrixWorld).applyMatrix4(ct)), Array.isArray(_e)) {
              const ye = ce.groups;
              for (let Ue = 0, ke = ye.length; Ue < ke; Ue++) {
                const Me = ye[Ue], Ve = _e[Me.materialIndex];
                Ve && Ve.visible && R.push(x, ce, Ve, V, Tt.z, Me, D);
              }
            } else _e.visible && R.push(x, ce, _e, V, Tt.z, null, D);
          }
        }
      }
      const ue = x.children;
      for (let xe = 0, ce = ue.length; xe < ce; xe++) Dr(ue[xe], D, V, O);
    }
    function Po(x, D, V, O) {
      const { opaque: z, transmissive: ue, transparent: xe } = x;
      A.setupLightsView(V), vt === true && K.setGlobalState(P.clippingPlanes, V), O && fe.viewport(j.copy(O)), z.length > 0 && bs(z, D, V), ue.length > 0 && bs(ue, D, V), xe.length > 0 && bs(xe, D, V), fe.buffers.depth.setTest(true), fe.buffers.depth.setMask(true), fe.buffers.color.setMask(true), fe.setPolygonOffset(false);
    }
    function Do(x, D, V, O) {
      if ((V.isScene === true ? V.overrideMaterial : null) !== null) return;
      if (A.state.transmissionRenderTarget[O.id] === void 0) {
        const Me = at.has("EXT_color_buffer_half_float") || at.has("EXT_color_buffer_float");
        A.state.transmissionRenderTarget[O.id] = new gt(1, 1, { generateMipmaps: true, type: Me ? Sn : lt, minFilter: Yn, samples: Math.max(4, ot.samples), stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, storeMultisampledDepthBuffer: false, storeMultisampledStencilBuffer: false, colorSpace: Xe.workingColorSpace });
      }
      const ue = A.state.transmissionRenderTarget[O.id], xe = O.viewport || j;
      ue.setSize(xe.z * P.transmissionResolutionScale, xe.w * P.transmissionResolutionScale);
      const ce = P.getRenderTarget(), _e = P.getActiveCubeFace(), ye = P.getActiveMipmapLevel();
      P.setRenderTarget(ue), P.getClearColor(q), de = P.getClearAlpha(), de < 1 && P.setClearColor(16777215, 0.5), P.clear(), $t && w.render(V);
      const Ue = P.toneMapping;
      P.toneMapping = In;
      const ke = O.viewport;
      if (O.viewport !== void 0 && (O.viewport = void 0), A.setupLightsView(O), vt === true && K.setGlobalState(P.clippingPlanes, O), bs(x, V, O), Ie.updateMultisampleRenderTarget(ue), Ie.updateRenderTargetMipmap(ue), at.has("WEBGL_multisampled_render_to_texture") === false) {
        let Me = false;
        for (let Ve = 0, pt = D.length; Ve < pt; Ve++) {
          const rt = D[Ve], { object: st, geometry: Ut, material: Ee, group: Bt } = rt;
          if (Ee.side === Zt && st.layers.test(O.layers)) {
            const Qe = Ee.side;
            Ee.side = wt, Ee.needsUpdate = true, Lo(st, V, O, Ut, Ee, Bt), Ee.side = Qe, Ee.needsUpdate = true, Me = true;
          }
        }
        Me === true && (Ie.updateMultisampleRenderTarget(ue), Ie.updateRenderTargetMipmap(ue));
      }
      P.setRenderTarget(ce, _e, ye), P.setClearColor(q, de), ke !== void 0 && (O.viewport = ke), P.toneMapping = Ue;
    }
    function bs(x, D, V) {
      const O = D.isScene === true ? D.overrideMaterial : null;
      for (let z = 0, ue = x.length; z < ue; z++) {
        const xe = x[z], { object: ce, geometry: _e, group: ye } = xe;
        let Ue = xe.material;
        Ue.allowOverride === true && O !== null && (Ue = O), ce.layers.test(V.layers) && Lo(ce, D, V, _e, Ue, ye);
      }
    }
    function Lo(x, D, V, O, z, ue) {
      F !== null && z.isNodeMaterial && F.setObject(x, z), x.onBeforeRender(P, D, V, O, z, ue), x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), z.onBeforeRender(P, D, V, O, x, ue), z.transparent === true && z.side === Zt && z.forceSinglePass === false ? (z.side = wt, z.needsUpdate = true, P.renderBufferDirect(V, D, O, z, x, ue), z.side = Zn, z.needsUpdate = true, P.renderBufferDirect(V, D, O, z, x, ue), z.side = Zt) : P.renderBufferDirect(V, D, O, z, x, ue), x.onAfterRender(P, D, V, O, z, ue);
    }
    function Io(x) {
      let D = 0;
      for (const V of x) V.texture !== null && D++;
      return D;
    }
    function Gi(x, D, V) {
      D.isScene !== true && (D = Jt);
      const O = Pe.get(x), z = A.state.lights, ue = A.state.shadowsArray, xe = z.state.version, ce = $.getParameters(x, z.state, ue, D, V, A.state.lightProbeGridArray), _e = $.getProgramCacheKey(ce);
      let ye = O.programs;
      O.environment = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? D.environment : null, O.fog = D.fog;
      const Ue = x.isMeshStandardMaterial || x.isMeshLambertMaterial && !x.envMap || x.isMeshPhongMaterial && !x.envMap;
      O.envMap = b.get(x.envMap || O.environment, Ue), O.envMapRotation = O.environment !== null && x.envMap === null ? D.environmentRotation : x.envMapRotation, ye === void 0 && (x.addEventListener("dispose", tt), ye = /* @__PURE__ */ new Map(), O.programs = ye, O.programVariants = /* @__PURE__ */ new Map());
      let ke = ye.get(_e);
      if (ke !== void 0) {
        if (O.currentProgram === ke && O.lightsStateVersion === xe) return No(x, ce), ke;
      } else ce.uniforms = $.getUniforms(x), F !== null && x.isNodeMaterial && F.build(x, V, ce), x.onBeforeCompile(ce, P), ke = $.acquireProgram(ce, _e), ye.set(_e, ke), O.uniforms = ce.uniforms;
      const Me = O.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === true) && (Me.clippingPlanes = K.uniform), No(x, ce), O.needsLights = wh(x), O.lightsStateVersion = xe, O.needsLights && (Me.ambientLightColor.value = z.state.ambient, Me.lightProbe.value = z.state.probe, Me.sunLights.value = z.state.sun, Me.sunLightShadows.value = z.state.sunShadow, Me.directionalLights.value = z.state.directional, Me.directionalLightShadows.value = z.state.directionalShadow, Me.spotLights.value = z.state.spot, Me.spotLightShadows.value = z.state.spotShadow, Me.rectAreaLights.value = z.state.rectArea, Me.ltc_1.value = z.state.rectAreaLTC1, Me.ltc_2.value = z.state.rectAreaLTC2, Me.pointLights.value = z.state.point, Me.pointLightShadows.value = z.state.pointShadow, Me.hemisphereLights.value = z.state.hemi, Me.sunShadowMatrix.value = z.state.sunShadowMatrix, Me.sunShadowCascade.value = z.state.sunShadowCascade, Me.directionalShadowMatrix.value = z.state.directionalShadowMatrix, Me.spotLightMatrix.value = z.state.spotLightMatrix, Me.spotLightMap.value = z.state.spotLightMap, Me.pointShadowMatrix.value = z.state.pointShadowMatrix), O.numLightProbeGrids = Io(A.state.lightProbeGridArray), O.currentProgram = ke, O.uniformsList = null, ke;
    }
    function bh(x, D, V, O, z) {
      const ue = Pe.get(x), xe = ue.currentProgram.id + "," + O + "," + z;
      let ce = ue.programVariants.get(xe);
      return ce === void 0 ? (ce = Gi(x, D, V), ue.programVariants.set(xe, ce)) : (ue.currentProgram = ce, ue.uniformsList = null, ue.outputColorSpace = O, ue.toneMapping = z), ce;
    }
    function Uo(x) {
      if (x.uniformsList === null) {
        const D = x.currentProgram.getUniforms();
        x.uniformsList = dr.seqWithValue(D.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function No(x, D) {
      const V = Pe.get(x);
      V.outputColorSpace = D.outputColorSpace, V.batching = D.batching, V.batchingColor = D.batchingColor, V.instancing = D.instancing, V.instancingColor = D.instancingColor, V.instancingMorph = D.instancingMorph, V.skinning = D.skinning, V.morphTargets = D.morphTargets, V.morphNormals = D.morphNormals, V.morphColors = D.morphColors, V.morphTargetsCount = D.morphTargetsCount, V.numClippingPlanes = D.numClippingPlanes, V.numIntersection = D.numClipIntersection, V.vertexAlphas = D.vertexAlphas, V.vertexTangents = D.vertexTangents, V.toneMapping = D.toneMapping;
    }
    function Ah(x, D, V, O, z) {
      D.isScene !== true && (D = Jt), Ie.resetTextureUnits();
      const ue = D.fog, xe = O.isMeshStandardMaterial || O.isMeshLambertMaterial || O.isMeshPhongMaterial ? D.environment : null, ce = ee === null ? P.outputColorSpace : ee.isXRRenderTarget === true ? ee.texture.colorSpace : Xe.workingColorSpace, _e = O.isMeshStandardMaterial || O.isMeshLambertMaterial && !O.envMap || O.isMeshPhongMaterial && !O.envMap, ye = b.get(O.envMap || xe, _e), Ue = O.vertexColors === true && !!V.attributes.color && V.attributes.color.itemSize === 4, ke = !!V.attributes.tangent && (!!O.normalMap || O.anisotropy > 0), Me = !!V.morphAttributes.position, Ve = !!V.morphAttributes.normal, pt = !!V.morphAttributes.color;
      let rt = In;
      O.toneMapped && (ee === null || ee.isXRRenderTarget === true) && (rt = P.toneMapping);
      const st = V.morphAttributes.position || V.morphAttributes.normal || V.morphAttributes.color, Ut = st !== void 0 ? st.length : 0, Ee = Pe.get(O), Bt = A.state.lights;
      if (vt === true && (Vt === true || x !== Q)) {
        const ht = x === Q && O.id === X;
        K.setState(O, x, ht);
      }
      let Qe = false, Qn = false;
      O.version === Ee.__version ? Ee.needsLights && Ee.lightsStateVersion !== Bt.state.version || z.isBatchedMesh && Ee.batching === false || !z.isBatchedMesh && Ee.batching === true || z.isBatchedMesh && Ee.batchingColor === true && z._colorsTexture === null || z.isBatchedMesh && Ee.batchingColor === false && z._colorsTexture !== null || z.isInstancedMesh && Ee.instancing === false || !z.isInstancedMesh && Ee.instancing === true || z.isSkinnedMesh && Ee.skinning === false || !z.isSkinnedMesh && Ee.skinning === true || z.isInstancedMesh && Ee.instancingColor === true && z.instanceColor === null || z.isInstancedMesh && Ee.instancingColor === false && z.instanceColor !== null || z.isInstancedMesh && Ee.instancingMorph === true && z.morphTexture === null || z.isInstancedMesh && Ee.instancingMorph === false && z.morphTexture !== null || Ee.envMap !== ye || O.fog === true && Ee.fog !== ue || Ee.numClippingPlanes !== void 0 && (Ee.numClippingPlanes !== K.numPlanes || Ee.numIntersection !== K.numIntersection) || Ee.vertexAlphas !== Ue || Ee.vertexTangents !== ke || Ee.morphTargets !== Me || Ee.morphNormals !== Ve || Ee.morphColors !== pt || Ee.morphTargetsCount !== Ut || Ee.numLightProbeGrids !== Io(A.state.lightProbeGridArray) ? Qe = true : (Ee.outputColorSpace !== ce || Ee.toneMapping !== rt) && (Qn = true) : (Qe = true, Ee.__version = O.version);
      let Nt = Ee.currentProgram;
      (Qe === true || Qn === true) && (Nt = Qn === true ? bh(O, D, z, ce, rt) : Gi(O, D, z), F && O.isNodeMaterial && F.onUpdateProgram(O, Nt, Ee));
      let As = false, zn = false, jn = false;
      const qe = Nt.getUniforms(), Dt = Ee.uniforms;
      if (fe.useProgram(Nt.program) && (As = true, zn = true, jn = true), O.id !== X && (X = O.id, zn = true), As || Q !== x) {
        fe.buffers.depth.getReversed() && x.reversedDepth !== true && (x._reversedDepth = true, x.updateProjectionMatrix()), qe.setValue(U, "projectionMatrix", x.projectionMatrix), qe.setValue(U, "viewMatrix", x.matrixWorldInverse);
        const At = qe.map.cameraPosition;
        At !== void 0 && At.setValue(U, dn.setFromMatrixPosition(x.matrixWorld)), ot.logarithmicDepthBuffer && qe.setValue(U, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2)), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O.isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O.isShaderMaterial) && qe.setValue(U, "isOrthographic", x.isOrthographicCamera === true), Q !== x && (Q = x, zn = true, jn = true);
      }
      if (Ee.needsLights && (Bt.state.sunShadowMap.length > 0 && qe.setValue(U, "sunShadowMap", Bt.state.sunShadowMap, Ie), Bt.state.directionalShadowMap.length > 0 && qe.setValue(U, "directionalShadowMap", Bt.state.directionalShadowMap, Ie), Bt.state.spotShadowMap.length > 0 && qe.setValue(U, "spotShadowMap", Bt.state.spotShadowMap, Ie), Bt.state.pointShadowMap.length > 0 && qe.setValue(U, "pointShadowMap", Bt.state.pointShadowMap, Ie)), z.isSkinnedMesh) {
        qe.setOptional(U, z, "bindMatrix"), qe.setOptional(U, z, "bindMatrixInverse");
        const ht = z.skeleton;
        ht && (ht.boneTexture === null && ht.computeBoneTexture(), qe.setValue(U, "boneTexture", ht.boneTexture, Ie));
      }
      z.isBatchedMesh && (qe.setOptional(U, z, "batchingTexture"), qe.setValue(U, "batchingTexture", z._matricesTexture, Ie), qe.setOptional(U, z, "batchingIdTexture"), qe.setValue(U, "batchingIdTexture", z._indirectTexture, Ie), qe.setOptional(U, z, "batchingColorTexture"), z._colorsTexture !== null && qe.setValue(U, "batchingColorTexture", z._colorsTexture, Ie));
      const rn = V.morphAttributes;
      if ((rn.position !== void 0 || rn.normal !== void 0 || rn.color !== void 0) && J.update(z, V, Nt), (zn || Ee.receiveShadow !== z.receiveShadow) && (Ee.receiveShadow = z.receiveShadow, qe.setValue(U, "receiveShadow", z.receiveShadow)), (O.isMeshStandardMaterial || O.isMeshLambertMaterial || O.isMeshPhongMaterial) && O.envMap === null && D.environment !== null && (Dt.envMapIntensity.value = D.environmentIntensity), Dt.dfgLUT !== void 0 && (Dt.dfgLUT.value = V0()), zn) {
        if (qe.setValue(U, "toneMappingExposure", P.toneMappingExposure), Ee.needsLights && Rh(Dt, jn), ue && O.fog === true && re.refreshFogUniforms(Dt, ue), re.refreshMaterialUniforms(Dt, O, pe, Ae, A.state.transmissionRenderTarget[x.id]), Ee.needsLights && Ee.numLightProbeGrids > 0) {
          const ht = E;
          let At = 0;
          for (const yn of A.state.lightProbeGridArray) yn.texture !== null && (ht.textures[At] = yn.texture, ht.min[At] = yn.boundingBox.min, ht.max[At] = yn.boundingBox.max, ht.resolution[At] = yn.resolution, At++);
          for (const yn in ht) ht[yn].length = At;
          Dt.probesSH.value = ht.textures, Dt.probesMin.value = ht.min, Dt.probesMax.value = ht.max, Dt.probesResolution.value = ht.resolution;
        }
        dr.upload(U, Uo(Ee), Dt, Ie);
      }
      if (O.isShaderMaterial && O.uniformsNeedUpdate === true && (dr.upload(U, Uo(Ee), Dt, Ie), O.uniformsNeedUpdate = false), O.isSpriteMaterial && qe.setValue(U, "center", z.center), qe.setValue(U, "modelViewMatrix", z.modelViewMatrix), qe.setValue(U, "normalMatrix", z.normalMatrix), qe.setValue(U, "modelMatrix", z.matrixWorld), O.uniformsGroups !== void 0) {
        const ht = O.uniformsGroups;
        for (let At = 0, yn = ht.length; At < yn; At++) {
          const Oo = ht[At];
          Te.update(Oo, Nt), Te.bind(Oo, Nt);
        }
      }
      return Nt;
    }
    function Rh(x, D) {
      x.ambientLightColor.needsUpdate = D, x.lightProbe.needsUpdate = D, x.sunLights.needsUpdate = D, x.sunLightShadows.needsUpdate = D, x.directionalLights.needsUpdate = D, x.directionalLightShadows.needsUpdate = D, x.pointLights.needsUpdate = D, x.pointLightShadows.needsUpdate = D, x.spotLights.needsUpdate = D, x.spotLightShadows.needsUpdate = D, x.rectAreaLights.needsUpdate = D, x.hemisphereLights.needsUpdate = D;
    }
    function wh(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === true;
    }
    this.getActiveCubeFace = function() {
      return k;
    }, this.getActiveMipmapLevel = function() {
      return H;
    }, this.getRenderTarget = function() {
      return ee;
    }, this.setRenderTargetTextures = function(x, D, V) {
      const O = Pe.get(x);
      O.__autoAllocateDepthBuffer = x.resolveDepthBuffer === false, O.__autoAllocateDepthBuffer === false && (O.__useRenderToTexture = false), Pe.get(x.texture).__webglTexture = D, Pe.get(x.depthTexture).__webglTexture = O.__autoAllocateDepthBuffer ? void 0 : V, O.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(x, D) {
      const V = Pe.get(x);
      V.__webglFramebuffer = D, V.__useDefaultFramebuffer = D === void 0;
    }, this.setRenderTarget = function(x, D = 0, V = 0) {
      ee = x, k = D, H = V;
      let O = null, z = false, ue = false;
      if (x) {
        const ce = Pe.get(x);
        if (ce.__useDefaultFramebuffer !== void 0) {
          fe.bindFramebuffer(U.FRAMEBUFFER, ce.__webglFramebuffer), j.copy(x.viewport), Se.copy(x.scissor), Le = x.scissorTest, fe.viewport(j), fe.scissor(Se), fe.setScissorTest(Le), X = -1;
          return;
        } else if (ce.__webglFramebuffer === void 0) Ie.setupRenderTarget(x);
        else if (ce.__hasExternalTextures) Ie.rebindTextures(x, Pe.get(x.texture).__webglTexture, Pe.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const Ue = x.depthTexture;
          if (ce.__boundDepthTexture !== Ue) {
            if (Ue !== null && Pe.has(Ue) && (x.width !== Ue.image.width || x.height !== Ue.image.height)) throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
            Ie.setupDepthRenderbuffer(x);
          }
        }
        const _e = x.texture;
        (_e.isData3DTexture || _e.isDataArrayTexture || _e.isCompressedArrayTexture) && (ue = true);
        const ye = Pe.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(ye[D]) ? O = ye[D][V] : O = ye[D], z = true) : x.samples > 0 && Ie.useMultisampledRTT(x) === false ? O = Pe.get(x).__webglMultisampledFramebuffer : Array.isArray(ye) ? O = ye[V] : O = ye, j.copy(x.viewport), Se.copy(x.scissor), Le = x.scissorTest;
      } else j.copy(we).multiplyScalar(pe).floor(), Se.copy(et).multiplyScalar(pe).floor(), Le = it;
      if (V !== 0 && (O = G), fe.bindFramebuffer(U.FRAMEBUFFER, O) && fe.drawBuffers(x, O), fe.viewport(j), fe.scissor(Se), fe.setScissorTest(Le), z) {
        const ce = Pe.get(x.texture);
        U.framebufferTexture2D(U.FRAMEBUFFER, U.COLOR_ATTACHMENT0, U.TEXTURE_CUBE_MAP_POSITIVE_X + D, ce.__webglTexture, V);
      } else if (ue) {
        const ce = D;
        for (let _e = 0; _e < x.textures.length; _e++) {
          const ye = Pe.get(x.textures[_e]);
          U.framebufferTextureLayer(U.FRAMEBUFFER, U.COLOR_ATTACHMENT0 + _e, ye.__webglTexture, V, ce);
        }
      } else if (x !== null && V !== 0) {
        const ce = Pe.get(x.texture);
        U.framebufferTexture2D(U.FRAMEBUFFER, U.COLOR_ATTACHMENT0, U.TEXTURE_2D, ce.__webglTexture, V);
      }
      X = -1;
    };
    function Fo(x) {
      const D = Pe.get(x);
      return (D.__readFormat !== x.format || D.__readType !== x.type) && (D.__readFormat = x.format, D.__readType = x.type, D.__formatReadable = ot.textureFormatReadable(x.format), D.__typeReadable = ot.textureTypeReadable(x.type)), D;
    }
    this.readRenderTargetPixels = function(x, D, V, O, z, ue, xe, ce = 0) {
      if (!(x && x.isWebGLRenderTarget)) {
        Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let _e = Pe.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && xe !== void 0 && (_e = _e[xe], Array.isArray(_e) && (_e = _e[0])), _e) {
        fe.bindFramebuffer(U.FRAMEBUFFER, _e);
        try {
          const ye = x.textures[ce], Ue = ye.format, ke = ye.type;
          x.textures.length > 1 && U.readBuffer(U.COLOR_ATTACHMENT0 + ce);
          const Me = Fo(ye);
          if (Me.__formatReadable === false) {
            Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (Me.__typeReadable === false) {
            Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          D >= 0 && D <= x.width - O && V >= 0 && V <= x.height - z && U.readPixels(D, V, O, z, se.convert(Ue), se.convert(ke), ue);
        } finally {
          const ye = ee !== null ? Pe.get(ee).__webglFramebuffer : null;
          fe.bindFramebuffer(U.FRAMEBUFFER, ye);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, D, V, O, z, ue, xe, ce = 0) {
      if (!(x && x.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let _e = Pe.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && xe !== void 0 && (_e = _e[xe], Array.isArray(_e) && (_e = _e[0])), _e) if (D >= 0 && D <= x.width - O && V >= 0 && V <= x.height - z) {
        fe.bindFramebuffer(U.FRAMEBUFFER, _e);
        const ye = x.textures[ce], Ue = ye.format, ke = ye.type;
        x.textures.length > 1 && U.readBuffer(U.COLOR_ATTACHMENT0 + ce);
        const Me = Fo(ye);
        if (Me.__formatReadable === false) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (Me.__typeReadable === false) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const Ve = U.createBuffer();
        U.bindBuffer(U.PIXEL_PACK_BUFFER, Ve), U.bufferData(U.PIXEL_PACK_BUFFER, ue.byteLength, U.STREAM_READ), U.readPixels(D, V, O, z, se.convert(Ue), se.convert(ke), 0), U.bindBuffer(U.PIXEL_PACK_BUFFER, null);
        const pt = ee !== null ? Pe.get(ee).__webglFramebuffer : null;
        fe.bindFramebuffer(U.FRAMEBUFFER, pt);
        const rt = U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return U.flush(), await lu(U, rt, 4), U.bindBuffer(U.PIXEL_PACK_BUFFER, Ve), U.getBufferSubData(U.PIXEL_PACK_BUFFER, 0, ue), U.bindBuffer(U.PIXEL_PACK_BUFFER, null), U.deleteBuffer(Ve), U.deleteSync(rt), ue;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(x, D = null, V = 0) {
      const O = Math.pow(2, -V), z = Math.floor(x.image.width * O), ue = Math.floor(x.image.height * O), xe = D !== null ? D.x : 0, ce = D !== null ? D.y : 0;
      Ie.setTexture2D(x, 0), U.copyTexSubImage2D(U.TEXTURE_2D, V, 0, 0, xe, ce, z, ue), fe.unbindTexture();
    }, this.copyTextureToTexture = function(x, D, V = null, O = null, z = 0, ue = 0) {
      let xe, ce, _e, ye, Ue, ke, Me, Ve, pt;
      const rt = x.isCompressedTexture ? x.mipmaps[ue] : x.image;
      if (V !== null) xe = V.max.x - V.min.x, ce = V.max.y - V.min.y, _e = V.isBox3 ? V.max.z - V.min.z : 1, ye = V.min.x, Ue = V.min.y, ke = V.isBox3 ? V.min.z : 0;
      else {
        const qe = Math.pow(2, -z);
        xe = Math.floor(rt.width * qe), ce = Math.floor(rt.height * qe), x.isDataArrayTexture ? _e = rt.depth : x.isData3DTexture ? _e = Math.floor(rt.depth * qe) : _e = 1, ye = 0, Ue = 0, ke = 0;
      }
      O !== null ? (Me = O.x, Ve = O.y, pt = O.z) : (Me = 0, Ve = 0, pt = 0);
      const st = se.convert(D.format), Ut = se.convert(D.type);
      let Ee;
      D.isData3DTexture ? (Ie.setTexture3D(D, 0), Ee = U.TEXTURE_3D) : D.isDataArrayTexture || D.isCompressedArrayTexture ? (Ie.setTexture2DArray(D, 0), Ee = U.TEXTURE_2D_ARRAY) : (Ie.setTexture2D(D, 0), Ee = U.TEXTURE_2D), fe.activeTexture(U.TEXTURE0), fe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL, D.flipY), fe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha), fe.pixelStorei(U.UNPACK_ALIGNMENT, D.unpackAlignment);
      const Bt = fe.getParameter(U.UNPACK_ROW_LENGTH), Qe = fe.getParameter(U.UNPACK_IMAGE_HEIGHT), Qn = fe.getParameter(U.UNPACK_SKIP_PIXELS), Nt = fe.getParameter(U.UNPACK_SKIP_ROWS), As = fe.getParameter(U.UNPACK_SKIP_IMAGES);
      fe.pixelStorei(U.UNPACK_ROW_LENGTH, rt.width), fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT, rt.height), fe.pixelStorei(U.UNPACK_SKIP_PIXELS, ye), fe.pixelStorei(U.UNPACK_SKIP_ROWS, Ue), fe.pixelStorei(U.UNPACK_SKIP_IMAGES, ke);
      const zn = x.isDataArrayTexture || x.isData3DTexture, jn = D.isDataArrayTexture || D.isData3DTexture;
      if (x.isDepthTexture) {
        const qe = Pe.get(x), Dt = Pe.get(D), rn = Pe.get(qe.__renderTarget), ht = Pe.get(Dt.__renderTarget);
        fe.bindFramebuffer(U.READ_FRAMEBUFFER, rn.__webglFramebuffer), fe.bindFramebuffer(U.DRAW_FRAMEBUFFER, ht.__webglFramebuffer);
        for (let At = 0; At < _e; At++) zn && (U.framebufferTextureLayer(U.READ_FRAMEBUFFER, U.COLOR_ATTACHMENT0, Pe.get(x).__webglTexture, z, ke + At), U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER, U.COLOR_ATTACHMENT0, Pe.get(D).__webglTexture, ue, pt + At)), U.blitFramebuffer(ye, Ue, ye + xe, Ue + ce, Me, Ve, Me + xe, Ve + ce, U.DEPTH_BUFFER_BIT, U.NEAREST);
        fe.bindFramebuffer(U.READ_FRAMEBUFFER, null), fe.bindFramebuffer(U.DRAW_FRAMEBUFFER, null);
      } else if (z !== 0 || x.isRenderTargetTexture || Pe.has(x)) {
        const qe = Pe.get(x), Dt = Pe.get(D);
        fe.bindFramebuffer(U.READ_FRAMEBUFFER, C), fe.bindFramebuffer(U.DRAW_FRAMEBUFFER, W);
        for (let rn = 0; rn < _e; rn++) zn ? U.framebufferTextureLayer(U.READ_FRAMEBUFFER, U.COLOR_ATTACHMENT0, qe.__webglTexture, z, ke + rn) : U.framebufferTexture2D(U.READ_FRAMEBUFFER, U.COLOR_ATTACHMENT0, U.TEXTURE_2D, qe.__webglTexture, z), jn ? U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER, U.COLOR_ATTACHMENT0, Dt.__webglTexture, ue, pt + rn) : U.framebufferTexture2D(U.DRAW_FRAMEBUFFER, U.COLOR_ATTACHMENT0, U.TEXTURE_2D, Dt.__webglTexture, ue), z !== 0 ? U.blitFramebuffer(ye, Ue, ye + xe, Ue + ce, Me, Ve, Me + xe, Ve + ce, U.COLOR_BUFFER_BIT, U.NEAREST) : jn ? U.copyTexSubImage3D(Ee, ue, Me, Ve, pt + rn, ye, Ue, xe, ce) : U.copyTexSubImage2D(Ee, ue, Me, Ve, ye, Ue, xe, ce);
        fe.bindFramebuffer(U.READ_FRAMEBUFFER, null), fe.bindFramebuffer(U.DRAW_FRAMEBUFFER, null);
      } else jn ? x.isDataTexture || x.isData3DTexture ? U.texSubImage3D(Ee, ue, Me, Ve, pt, xe, ce, _e, st, Ut, rt.data) : D.isCompressedArrayTexture ? U.compressedTexSubImage3D(Ee, ue, Me, Ve, pt, xe, ce, _e, st, rt.data) : U.texSubImage3D(Ee, ue, Me, Ve, pt, xe, ce, _e, st, Ut, rt) : x.isDataTexture ? U.texSubImage2D(U.TEXTURE_2D, ue, Me, Ve, xe, ce, st, Ut, rt.data) : x.isCompressedTexture ? U.compressedTexSubImage2D(U.TEXTURE_2D, ue, Me, Ve, rt.width, rt.height, st, rt.data) : U.texSubImage2D(U.TEXTURE_2D, ue, Me, Ve, xe, ce, st, Ut, rt);
      fe.pixelStorei(U.UNPACK_ROW_LENGTH, Bt), fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT, Qe), fe.pixelStorei(U.UNPACK_SKIP_PIXELS, Qn), fe.pixelStorei(U.UNPACK_SKIP_ROWS, Nt), fe.pixelStorei(U.UNPACK_SKIP_IMAGES, As), ue === 0 && D.generateMipmaps === true && D.mipmapsAutoUpdate === true && U.generateMipmap(Ee), fe.unbindTexture();
    }, this.initRenderTarget = function(x) {
      Pe.get(x).__webglFramebuffer === void 0 && Ie.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? Ie.setTextureCube(x, 0) : x.isData3DTexture ? Ie.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? Ie.setTexture2DArray(x, 0) : Ie.setTexture2D(x, 0), fe.unbindTexture();
    }, this.resetState = function() {
      k = 0, H = 0, ee = null, fe.reset(), ae.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return cn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = Xe._getDrawingBufferColorSpace(e), t.unpackColorSpace = Xe._getUnpackColorSpace();
  }
}
/**
* postprocessing v6.39.6 build Sun Nov 01 2026
* https://github.com/pmndrs/postprocessing
* Copyright 2015-2026 Raoul van Rüschen
* @license Zlib
*/
var W0 = (() => {
  const n = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), e = new Float32Array([0, 0, 2, 0, 0, 2]), t = new kt();
  return t.setAttribute("position", new hn(n, 3)), t.setAttribute("uv", new hn(e, 2)), t;
})(), sn = class ro {
  static get fullscreenGeometry() {
    return W0;
  }
  constructor(e = "Pass", t = new tl(), i = new To()) {
    this.name = e, this.renderer = null, this.scene = t, this.camera = i, this.screen = null, this.rtt = true, this.needsSwap = true, this.needsDepthBlit = false, this.needsDepthTexture = false, this.enabled = true;
  }
  get renderToScreen() {
    return !this.rtt;
  }
  set renderToScreen(e) {
    if (this.rtt === e) {
      const t = this.fullscreenMaterial;
      t !== null && (t.needsUpdate = true), this.rtt = !e;
    }
  }
  set mainScene(e) {
  }
  set mainCamera(e) {
  }
  setRenderer(e) {
    this.renderer = e;
  }
  isEnabled() {
    return this.enabled;
  }
  setEnabled(e) {
    this.enabled = e;
  }
  get fullscreenMaterial() {
    return this.screen !== null ? this.screen.material : null;
  }
  set fullscreenMaterial(e) {
    let t = this.screen;
    t !== null ? t.material = e : (t = new un(ro.fullscreenGeometry, e), t.frustumCulled = false, this.scene === null && (this.scene = new tl()), this.scene.add(t), this.screen = t);
  }
  getFullscreenMaterial() {
    return this.fullscreenMaterial;
  }
  setFullscreenMaterial(e) {
    this.fullscreenMaterial = e;
  }
  getDepthTexture() {
    return null;
  }
  setDepthTexture(e, t = li) {
  }
  render(e, t, i, s, r) {
    throw new Error("Render method not implemented!");
  }
  setSize(e, t) {
  }
  initialize(e, t, i) {
  }
  dispose() {
    for (const e of Object.keys(this)) {
      const t = this[e];
      (t instanceof gt || t instanceof Mn || t instanceof Mt || t instanceof ro) && this[e].dispose();
    }
    this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose();
  }
}, X0 = class extends sn {
  constructor() {
    super("ClearMaskPass", null, null), this.needsSwap = false;
  }
  render(n, e, t, i, s) {
    const r = n.state.buffers.stencil;
    r.setLocked(false), r.setTest(false);
  }
}, Y0 = `#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`, Ts = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}", _h = class extends It {
  constructor() {
    super({ name: "CopyMaterial", defines: { COLOR_SPACE_CONVERSION: "1", DEPTH_PACKING: "0", COLOR_WRITE: "1" }, uniforms: { inputBuffer: new Ce(null), depthBuffer: new Ce(null), channelWeights: new Ce(null), opacity: new Ce(1) }, blending: Gt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Y0, vertexShader: Ts }), this.depthFunc = gr;
  }
  get inputBuffer() {
    return this.uniforms.inputBuffer.value;
  }
  set inputBuffer(n) {
    const e = n !== null;
    this.colorWrite !== e && (e ? this.defines.COLOR_WRITE = true : delete this.defines.COLOR_WRITE, this.colorWrite = e, this.needsUpdate = true), this.uniforms.inputBuffer.value = n;
  }
  get depthBuffer() {
    return this.uniforms.depthBuffer.value;
  }
  set depthBuffer(n) {
    const e = n !== null;
    this.depthWrite !== e && (e ? this.defines.DEPTH_WRITE = true : delete this.defines.DEPTH_WRITE, this.depthTest = e, this.depthWrite = e, this.needsUpdate = true), this.uniforms.depthBuffer.value = n;
  }
  set depthPacking(n) {
    this.defines.DEPTH_PACKING = n.toFixed(0), this.needsUpdate = true;
  }
  get colorSpaceConversion() {
    return this.defines.COLOR_SPACE_CONVERSION !== void 0;
  }
  set colorSpaceConversion(n) {
    this.colorSpaceConversion !== n && (n ? this.defines.COLOR_SPACE_CONVERSION = true : delete this.defines.COLOR_SPACE_CONVERSION, this.needsUpdate = true);
  }
  get channelWeights() {
    return this.uniforms.channelWeights.value;
  }
  set channelWeights(n) {
    n !== null ? (this.defines.USE_WEIGHTS = "1", this.uniforms.channelWeights.value = n) : delete this.defines.USE_WEIGHTS, this.needsUpdate = true;
  }
  setInputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  getOpacity(n) {
    return this.uniforms.opacity.value;
  }
  setOpacity(n) {
    this.uniforms.opacity.value = n;
  }
}, q0 = class extends sn {
  constructor(n, e = true) {
    super("CopyPass"), this.fullscreenMaterial = new _h(), this.needsSwap = false, this.renderTarget = n, n === void 0 && (this.renderTarget = new gt(1, 1, { minFilter: Ct, magFilter: Ct, stencilBuffer: false, depthBuffer: false }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = e;
  }
  get resize() {
    return this.autoResize;
  }
  set resize(n) {
    this.autoResize = n;
  }
  get texture() {
    return this.renderTarget.texture;
  }
  getTexture() {
    return this.renderTarget.texture;
  }
  setAutoResizeEnabled(n) {
    this.autoResize = n;
  }
  render(n, e, t, i, s) {
    this.fullscreenMaterial.inputBuffer = e.texture, n.setRenderTarget(this.renderToScreen ? null : this.renderTarget), n.render(this.scene, this.camera);
  }
  setSize(n, e) {
    this.autoResize && this.renderTarget.setSize(n, e);
  }
  initialize(n, e, t) {
    t !== void 0 && (this.renderTarget.texture.type = t, t !== lt ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : n !== null && n.outputColorSpace === Ye && (this.renderTarget.texture.colorSpace = Ye));
  }
}, sc = new He(), vh = class extends sn {
  constructor(n = true, e = true, t = false) {
    super("ClearPass", null, null), this.needsSwap = false, this.color = n, this.depth = e, this.stencil = t, this.overrideClearColor = null, this.overrideClearAlpha = -1;
  }
  setClearFlags(n, e, t) {
    this.color = n, this.depth = e, this.stencil = t;
  }
  getOverrideClearColor() {
    return this.overrideClearColor;
  }
  setOverrideClearColor(n) {
    this.overrideClearColor = n;
  }
  getOverrideClearAlpha() {
    return this.overrideClearAlpha;
  }
  setOverrideClearAlpha(n) {
    this.overrideClearAlpha = n;
  }
  render(n, e, t, i, s) {
    const r = this.overrideClearColor, a = this.overrideClearAlpha, o = n.getClearAlpha(), c = r !== null, l = a >= 0;
    c ? (n.getClearColor(sc), n.setClearColor(r, l ? a : o)) : l && n.setClearAlpha(a), n.setRenderTarget(this.renderToScreen ? null : e), n.clear(this.color, this.depth, this.stencil), c ? n.setClearColor(sc, o) : l && n.setClearAlpha(o);
  }
}, Z0 = class extends sn {
  constructor(n, e) {
    super("MaskPass", n, e), this.needsSwap = false, this.clearPass = new vh(false, false, true), this.inverse = false;
  }
  set mainScene(n) {
    this.scene = n;
  }
  set mainCamera(n) {
    this.camera = n;
  }
  get inverted() {
    return this.inverse;
  }
  set inverted(n) {
    this.inverse = n;
  }
  get clear() {
    return this.clearPass.enabled;
  }
  set clear(n) {
    this.clearPass.enabled = n;
  }
  getClearPass() {
    return this.clearPass;
  }
  isInverted() {
    return this.inverted;
  }
  setInverted(n) {
    this.inverted = n;
  }
  render(n, e, t, i, s) {
    const r = n.getContext(), a = n.state.buffers, o = this.scene, c = this.camera, l = this.clearPass, h = this.inverted ? 0 : 1, u = 1 - h;
    a.color.setMask(false), a.depth.setMask(false), a.color.setLocked(true), a.depth.setLocked(true), a.stencil.setTest(true), a.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE), a.stencil.setFunc(r.ALWAYS, h, 4294967295), a.stencil.setClear(u), a.stencil.setLocked(true), this.clearPass.enabled && (this.renderToScreen ? l.render(n, null) : (l.render(n, e), l.render(n, t))), this.renderToScreen ? (n.setRenderTarget(null), n.render(o, c)) : (n.setRenderTarget(e), n.render(o, c), n.setRenderTarget(t), n.render(o, c)), a.color.setLocked(false), a.depth.setLocked(false), a.stencil.setLocked(false), a.stencil.setFunc(r.EQUAL, 1, 4294967295), a.stencil.setOp(r.KEEP, r.KEEP, r.KEEP), a.stencil.setLocked(true);
  }
};
function K0(n, e) {
  const t = n.getContext();
  if (e <= 0 || typeof t.renderbufferStorageMultisample != "function") return 0;
  const i = t.getParameter(t.MAX_SAMPLES), s = Math.min(e, i);
  if (s <= 0) return 0;
  const r = t.getParameter(t.RENDERBUFFER_BINDING), a = t.createRenderbuffer();
  try {
    return t.bindRenderbuffer(t.RENDERBUFFER, a), t.renderbufferStorageMultisample(t.RENDERBUFFER, s, t.RGBA8, 1, 1), s;
  } catch {
    return 0;
  } finally {
    t.bindRenderbuffer(t.RENDERBUFFER, r), t.deleteRenderbuffer(a);
  }
}
var ha = 1 / 1e3, J0 = 1e3, $0 = class {
  constructor() {
    this.startTime = performance.now(), this.previousTime = 0, this.currentTime = 0, this._delta = 0, this._elapsed = 0, this._fixedDelta = 1e3 / 60, this.timescale = 1, this.useFixedDelta = false, this._autoReset = false;
  }
  get autoReset() {
    return this._autoReset;
  }
  set autoReset(n) {
    typeof document < "u" && document.hidden !== void 0 && (n ? document.addEventListener("visibilitychange", this) : document.removeEventListener("visibilitychange", this), this._autoReset = n);
  }
  get delta() {
    return this._delta * ha;
  }
  get fixedDelta() {
    return this._fixedDelta * ha;
  }
  set fixedDelta(n) {
    this._fixedDelta = n * J0;
  }
  get elapsed() {
    return this._elapsed * ha;
  }
  update(n) {
    this.useFixedDelta ? this._delta = this.fixedDelta : (this.previousTime = this.currentTime, this.currentTime = (n !== void 0 ? n : performance.now()) - this.startTime, this._delta = this.currentTime - this.previousTime), this._delta *= this.timescale, this._elapsed += this._delta;
  }
  reset() {
    this._delta = 0, this._elapsed = 0, this.currentTime = performance.now() - this.startTime;
  }
  getDelta() {
    return this.delta;
  }
  getElapsed() {
    return this.elapsed;
  }
  handleEvent(n) {
    document.hidden || (this.currentTime = performance.now() - this.startTime);
  }
  dispose() {
    this.autoReset = false;
  }
}, zv = class {
  constructor(n = null, { depthBuffer: e = true, stencilBuffer: t = false, multisampling: i = 0, frameBufferType: s = lt } = {}) {
    this.renderer = null, this.inputBuffer = this.createBuffer(e, t, s, i), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new q0(), this.depthRenderTarget = null, this.passes = [], this.timer = new $0(), this.autoRenderToScreen = true, this.setRenderer(n);
  }
  get stableDepthTexture() {
    return this.depthRenderTarget === null ? null : this.depthRenderTarget.depthTexture;
  }
  get multisampling() {
    return this.inputBuffer.samples;
  }
  set multisampling(n) {
    const e = this.renderer === null ? n : K0(this.renderer, n);
    this.multisampling !== e && (this.inputBuffer.samples = e, this.outputBuffer.samples = e, this.inputBuffer.dispose(), this.outputBuffer.dispose());
  }
  getTimer() {
    return this.timer;
  }
  getRenderer() {
    return this.renderer;
  }
  setRenderer(n) {
    if (this.renderer = n, n !== null) {
      const e = n.getSize(new ne()), t = n.getContext().getContextAttributes().alpha, i = this.inputBuffer.texture.type;
      i === lt && n.outputColorSpace === Ye && (this.inputBuffer.texture.colorSpace = Ye, this.outputBuffer.texture.colorSpace = Ye, this.inputBuffer.dispose(), this.outputBuffer.dispose());
      const s = this.multisampling;
      this.multisampling = s, n.autoClear = false, this.setSize(e.width, e.height);
      for (const r of this.passes) r.initialize(n, t, i);
    }
  }
  replaceRenderer(n, e = true) {
    const t = this.renderer, i = t.domElement.parentNode;
    return this.setRenderer(n), e && i !== null && (i.removeChild(t.domElement), i.appendChild(n.domElement)), t;
  }
  createDepthTexture() {
    const n = new Nn();
    n.name = "EffectComposer.InputDepth", this.inputBuffer.stencilBuffer ? (n.format = Ln, n.type = ri) : n.type = nn;
    const e = new Nn();
    e.format = n.format, e.type = n.type, e.name = "EffectComposer.OutputDepth";
    const t = new Nn();
    t.format = n.format, t.type = n.type, t.name = "EffectComposer.StableDepth", this.inputBuffer.depthTexture = n, this.outputBuffer.depthTexture = e, this.inputBuffer.dispose(), this.outputBuffer.dispose();
    const { width: i, height: s } = this.inputBuffer;
    this.depthRenderTarget = new gt(i, s, { depthBuffer: true, stencilBuffer: this.inputBuffer.stencilBuffer, depthTexture: t });
  }
  blitDepthBuffer(n) {
    const e = this.renderer, t = this.depthRenderTarget, i = e.properties, s = e.getContext();
    e.setRenderTarget(t);
    const r = i.get(n).__webglFramebuffer, a = i.get(t).__webglFramebuffer, o = n.stencilBuffer ? s.DEPTH_BUFFER_BIT | s.STENCIL_BUFFER_BIT : s.DEPTH_BUFFER_BIT;
    s.bindFramebuffer(s.READ_FRAMEBUFFER, r), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, a), s.blitFramebuffer(0, 0, n.width, n.height, 0, 0, t.width, t.height, o, s.NEAREST), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), e.setRenderTarget(null);
  }
  deleteDepthTexture() {
    const n = this.stableDepthTexture;
    for (const e of this.passes) e.getDepthTexture() === n && e.setDepthTexture(null);
    this.depthRenderTarget !== null && (this.depthRenderTarget.dispose(), this.depthRenderTarget = null), this.inputBuffer.depthTexture !== null && (this.inputBuffer.depthTexture.dispose(), this.inputBuffer.depthTexture = null), this.outputBuffer.depthTexture !== null && (this.outputBuffer.depthTexture.dispose(), this.outputBuffer.depthTexture = null);
  }
  createBuffer(n, e, t, i) {
    const s = this.renderer, r = s === null ? new ne() : s.getDrawingBufferSize(new ne()), a = new gt(r.width, r.height, { minFilter: Ct, magFilter: Ct, samples: i, stencilBuffer: e, depthBuffer: n, type: t });
    return t === lt && s !== null && s.outputColorSpace === Ye && (a.texture.colorSpace = Ye), a.texture.name = "EffectComposer.Buffer", a.texture.generateMipmaps = false, a;
  }
  setMainScene(n) {
    for (const e of this.passes) e.mainScene = n;
  }
  setMainCamera(n) {
    for (const e of this.passes) e.mainCamera = n;
  }
  addPass(n, e) {
    const t = this.passes, i = this.renderer, s = i.getDrawingBufferSize(new ne()), r = i.getContext().getContextAttributes().alpha, a = this.inputBuffer.texture.type;
    if (n.renderer = i, n.setSize(s.width, s.height), n.initialize(i, r, a), this.autoRenderToScreen && (t.length > 0 && (t[t.length - 1].renderToScreen = false), n.renderToScreen && (this.autoRenderToScreen = false)), e !== void 0 ? t.splice(e, 0, n) : t.push(n), this.autoRenderToScreen && (t[t.length - 1].renderToScreen = true), n.needsDepthTexture || this.depthRenderTarget !== null) if (this.depthRenderTarget === null) {
      this.createDepthTexture();
      for (const o of t) o.setDepthTexture(this.stableDepthTexture);
    } else n.setDepthTexture(this.stableDepthTexture);
  }
  removePass(n) {
    const e = this.passes, t = e.indexOf(n);
    if (t !== -1 && e.splice(t, 1).length > 0) {
      const r = this.stableDepthTexture;
      if (r !== null) {
        const a = (c, l) => c || l.needsDepthTexture;
        e.reduce(a, false) || (n.getDepthTexture() === r && n.setDepthTexture(null), this.deleteDepthTexture());
      }
      this.autoRenderToScreen && t === e.length && (n.renderToScreen = false, e.length > 0 && (e[e.length - 1].renderToScreen = true));
    }
  }
  removeAllPasses() {
    const n = this.passes;
    this.deleteDepthTexture(), n.length > 0 && (this.autoRenderToScreen && (n[n.length - 1].renderToScreen = false), this.passes = []);
  }
  render(n) {
    const e = this.renderer, t = this.copyPass;
    let i = this.inputBuffer, s = this.outputBuffer, r, a = false;
    n === void 0 && (this.timer.update(), n = this.timer.getDelta());
    for (const o of this.passes) if (o.enabled) {
      if (o.render(e, i, s, n, a), o.needsDepthBlit && this.depthRenderTarget !== null && this.blitDepthBuffer(i), o.needsSwap) {
        if (a) {
          t.renderToScreen = o.renderToScreen;
          const c = e.getContext(), l = e.state.buffers.stencil;
          l.setFunc(c.NOTEQUAL, 1, 4294967295), t.render(e, i, s, n, a), l.setFunc(c.EQUAL, 1, 4294967295);
        }
        r = i, i = s, s = r;
      }
      o instanceof Z0 ? a = true : o instanceof X0 && (a = false);
    }
  }
  setSize(n, e, t) {
    const i = this.renderer, s = i.getSize(new ne());
    (n === void 0 || e === void 0) && (n = s.width, e = s.height), (s.width !== n || s.height !== e) && i.setSize(n, e, t);
    const r = i.getDrawingBufferSize(new ne());
    this.inputBuffer.setSize(r.width, r.height), this.outputBuffer.setSize(r.width, r.height), this.depthRenderTarget !== null && this.depthRenderTarget.setSize(r.width, r.height);
    for (const a of this.passes) a.setSize(r.width, r.height);
  }
  reset() {
    this.dispose(), this.autoRenderToScreen = true;
  }
  dispose() {
    for (const n of this.passes) n.dispose();
    this.deleteDepthTexture(), this.inputBuffer.dispose(), this.outputBuffer.dispose(), this.copyPass.dispose(), this.timer.dispose(), this.passes = [], sn.fullscreenGeometry.dispose();
  }
}, qn = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 }, Je = { FRAGMENT_HEAD: "FRAGMENT_HEAD", FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV", FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE", VERTEX_HEAD: "VERTEX_HEAD", VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT" }, Q0 = class {
  constructor() {
    this.shaderParts = /* @__PURE__ */ new Map([[Je.FRAGMENT_HEAD, null], [Je.FRAGMENT_MAIN_UV, null], [Je.FRAGMENT_MAIN_IMAGE, null], [Je.VERTEX_HEAD, null], [Je.VERTEX_MAIN_SUPPORT, null]]), this.defines = /* @__PURE__ */ new Map(), this.uniforms = /* @__PURE__ */ new Map(), this.blendModes = /* @__PURE__ */ new Map(), this.extensions = /* @__PURE__ */ new Set(), this.attributes = qn.NONE, this.varyings = /* @__PURE__ */ new Set(), this.uvTransformation = false, this.readDepth = false, this.colorSpace = Oi;
  }
}, ua = false, rc = class {
  constructor(n = null) {
    this.originalMaterials = /* @__PURE__ */ new Map(), this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(n), this.meshCount = 0, this.replaceMaterial = (e) => {
      if (e.isMesh) {
        let t;
        if (e.material.flatShading) switch (e.material.side) {
          case Zt:
            t = this.materialsFlatShadedDoubleSide;
            break;
          case wt:
            t = this.materialsFlatShadedBackSide;
            break;
          default:
            t = this.materialsFlatShaded;
            break;
        }
        else switch (e.material.side) {
          case Zt:
            t = this.materialsDoubleSide;
            break;
          case wt:
            t = this.materialsBackSide;
            break;
          default:
            t = this.materials;
            break;
        }
        this.originalMaterials.set(e, e.material), e.isSkinnedMesh ? e.material = t[2] : e.isInstancedMesh ? e.material = t[1] : e.material = t[0], ++this.meshCount;
      }
    };
  }
  cloneMaterial(n) {
    if (!(n instanceof It)) return n.clone();
    const e = n.uniforms, t = /* @__PURE__ */ new Map();
    for (const s in e) {
      const r = e[s].value;
      r.isRenderTargetTexture && (e[s].value = null, t.set(s, r));
    }
    const i = n.clone();
    for (const s of t) e[s[0]].value = s[1], i.uniforms[s[0]].value = s[1];
    return i;
  }
  setMaterial(n) {
    if (this.disposeMaterials(), this.material = n, n !== null) {
      const e = this.materials = [this.cloneMaterial(n), this.cloneMaterial(n), this.cloneMaterial(n)];
      for (const t of e) t.uniforms = Object.assign({}, n.uniforms), t.side = Zn;
      e[2].skinning = true, this.materialsBackSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.side = wt, i;
      }), this.materialsDoubleSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.side = Zt, i;
      }), this.materialsFlatShaded = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.flatShading = true, i;
      }), this.materialsFlatShadedBackSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.flatShading = true, i.side = wt, i;
      }), this.materialsFlatShadedDoubleSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.flatShading = true, i.side = Zt, i;
      });
    }
  }
  render(n, e, t) {
    const i = n.shadowMap.enabled;
    if (n.shadowMap.enabled = false, ua) {
      const s = this.originalMaterials;
      this.meshCount = 0, e.traverse(this.replaceMaterial), n.render(e, t);
      for (const r of s) r[0].material = r[1];
      this.meshCount !== s.size && s.clear();
    } else {
      const s = e.overrideMaterial;
      e.overrideMaterial = this.material, n.render(e, t), e.overrideMaterial = s;
    }
    n.shadowMap.enabled = i;
  }
  disposeMaterials() {
    if (this.material !== null) {
      const n = this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);
      for (const e of n) e.dispose();
    }
  }
  dispose() {
    this.originalMaterials.clear(), this.disposeMaterials();
  }
  static get workaroundEnabled() {
    return ua;
  }
  static set workaroundEnabled(n) {
    ua = n;
  }
}, Xn = -1, Kt = class extends fn {
  constructor(n = null, e = Xn, t = Xn, i = 1) {
    super(), n !== null && this.addEventListener("change", () => n.setSize(this.baseSize.width, this.baseSize.height)), this.baseSize = new ne(1, 1), this.preferredSize = new ne(e, t), this.target = this.preferredSize, this.s = i, this.effectiveSize = new ne(), this.addEventListener("change", () => this.updateEffectiveSize()), this.updateEffectiveSize();
  }
  updateEffectiveSize() {
    const n = this.baseSize, e = this.preferredSize, t = this.effectiveSize, i = this.scale;
    e.width !== Xn ? t.width = e.width : e.height !== Xn ? t.width = Math.round(e.height * (n.width / Math.max(n.height, 1))) : t.width = Math.round(n.width * i), e.height !== Xn ? t.height = e.height : e.width !== Xn ? t.height = Math.round(e.width / Math.max(n.width / Math.max(n.height, 1), 1)) : t.height = Math.round(n.height * i);
  }
  get width() {
    return this.effectiveSize.width;
  }
  set width(n) {
    this.preferredWidth = n;
  }
  get height() {
    return this.effectiveSize.height;
  }
  set height(n) {
    this.preferredHeight = n;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  get scale() {
    return this.s;
  }
  set scale(n) {
    this.s !== n && (this.s = n, this.preferredSize.setScalar(Xn), this.dispatchEvent({ type: "change" }));
  }
  getScale() {
    return this.scale;
  }
  setScale(n) {
    this.scale = n;
  }
  get baseWidth() {
    return this.baseSize.width;
  }
  set baseWidth(n) {
    this.baseSize.width !== n && (this.baseSize.width = n, this.dispatchEvent({ type: "change" }));
  }
  getBaseWidth() {
    return this.baseWidth;
  }
  setBaseWidth(n) {
    this.baseWidth = n;
  }
  get baseHeight() {
    return this.baseSize.height;
  }
  set baseHeight(n) {
    this.baseSize.height !== n && (this.baseSize.height = n, this.dispatchEvent({ type: "change" }));
  }
  getBaseHeight() {
    return this.baseHeight;
  }
  setBaseHeight(n) {
    this.baseHeight = n;
  }
  setBaseSize(n, e) {
    (this.baseSize.width !== n || this.baseSize.height !== e) && (this.baseSize.set(n, e), this.dispatchEvent({ type: "change" }));
  }
  get preferredWidth() {
    return this.preferredSize.width;
  }
  set preferredWidth(n) {
    this.preferredSize.width !== n && (this.preferredSize.width = n, this.dispatchEvent({ type: "change" }));
  }
  getPreferredWidth() {
    return this.preferredWidth;
  }
  setPreferredWidth(n) {
    this.preferredWidth = n;
  }
  get preferredHeight() {
    return this.preferredSize.height;
  }
  set preferredHeight(n) {
    this.preferredSize.height !== n && (this.preferredSize.height = n, this.dispatchEvent({ type: "change" }));
  }
  getPreferredHeight() {
    return this.preferredHeight;
  }
  setPreferredHeight(n) {
    this.preferredHeight = n;
  }
  setPreferredSize(n, e) {
    (this.preferredSize.width !== n || this.preferredSize.height !== e) && (this.preferredSize.set(n, e), this.dispatchEvent({ type: "change" }));
  }
  copy(n) {
    this.s = n.scale, this.baseSize.set(n.baseWidth, n.baseHeight), this.preferredSize.set(n.preferredWidth, n.preferredHeight), this.dispatchEvent({ type: "change" });
  }
  static get AUTO_SIZE() {
    return Xn;
  }
}, We = { ADD: 0, ALPHA: 1, AVERAGE: 2, COLOR: 3, COLOR_BURN: 4, COLOR_DODGE: 5, DARKEN: 6, DIFFERENCE: 7, DIVIDE: 8, DST: 9, EXCLUSION: 10, HARD_LIGHT: 11, HARD_MIX: 12, HUE: 13, INVERT: 14, INVERT_RGB: 15, LIGHTEN: 16, LINEAR_BURN: 17, LINEAR_DODGE: 18, LINEAR_LIGHT: 19, LUMINOSITY: 20, MULTIPLY: 21, NEGATION: 22, NORMAL: 23, OVERLAY: 24, PIN_LIGHT: 25, REFLECT: 26, SATURATION: 27, SCREEN: 28, SOFT_LIGHT: 29, SRC: 30, SUBTRACT: 31, VIVID_LIGHT: 32 }, j0 = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", e_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}", t_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", n_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", i_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", s_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", r_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", a_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", o_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", l_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", c_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", h_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", u_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", f_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", d_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", p_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", m_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", g_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", __ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", v_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", x_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", S_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", M_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}", E_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", y_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", T_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", b_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", A_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", R_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", w_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}", C_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", P_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", D_ = /* @__PURE__ */ new Map([[We.ADD, j0], [We.ALPHA, e_], [We.AVERAGE, t_], [We.COLOR, n_], [We.COLOR_BURN, i_], [We.COLOR_DODGE, s_], [We.DARKEN, r_], [We.DIFFERENCE, a_], [We.DIVIDE, o_], [We.DST, null], [We.EXCLUSION, l_], [We.HARD_LIGHT, c_], [We.HARD_MIX, h_], [We.HUE, u_], [We.INVERT, f_], [We.INVERT_RGB, d_], [We.LIGHTEN, p_], [We.LINEAR_BURN, m_], [We.LINEAR_DODGE, g_], [We.LINEAR_LIGHT, __], [We.LUMINOSITY, v_], [We.MULTIPLY, x_], [We.NEGATION, S_], [We.NORMAL, M_], [We.OVERLAY, E_], [We.PIN_LIGHT, y_], [We.REFLECT, T_], [We.SATURATION, b_], [We.SCREEN, A_], [We.SOFT_LIGHT, R_], [We.SRC, w_], [We.SUBTRACT, C_], [We.VIVID_LIGHT, P_]]), L_ = class extends fn {
  constructor(n, e = 1) {
    super(), this._blendFunction = n, this.opacity = new Ce(e);
  }
  getOpacity() {
    return this.opacity.value;
  }
  setOpacity(n) {
    this.opacity.value = n;
  }
  get blendFunction() {
    return this._blendFunction;
  }
  set blendFunction(n) {
    this._blendFunction = n, this.dispatchEvent({ type: "change" });
  }
  getBlendFunction() {
    return this.blendFunction;
  }
  setBlendFunction(n) {
    this.blendFunction = n;
  }
  getShaderCode() {
    return D_.get(this.blendFunction);
  }
}, xh = class extends fn {
  constructor(n, e, { attributes: t = qn.NONE, blendFunction: i = We.NORMAL, defines: s = /* @__PURE__ */ new Map(), uniforms: r = /* @__PURE__ */ new Map(), extensions: a = null, vertexShader: o = null } = {}) {
    super(), this.name = n, this.renderer = null, this.attributes = t, this.fragmentShader = e, this.vertexShader = o, this.defines = s, this.uniforms = r, this.extensions = a, this.blendMode = new L_(i), this.blendMode.addEventListener("change", (c) => this.setChanged()), this._inputColorSpace = Oi, this._outputColorSpace = _n;
  }
  get inputColorSpace() {
    return this._inputColorSpace;
  }
  set inputColorSpace(n) {
    this._inputColorSpace = n, this.setChanged();
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(n) {
    this._outputColorSpace = n, this.setChanged();
  }
  set mainScene(n) {
  }
  set mainCamera(n) {
  }
  getName() {
    return this.name;
  }
  setRenderer(n) {
    this.renderer = n;
  }
  getDefines() {
    return this.defines;
  }
  getUniforms() {
    return this.uniforms;
  }
  getExtensions() {
    return this.extensions;
  }
  getBlendMode() {
    return this.blendMode;
  }
  getAttributes() {
    return this.attributes;
  }
  setAttributes(n) {
    this.attributes = n, this.setChanged();
  }
  getFragmentShader() {
    return this.fragmentShader;
  }
  setFragmentShader(n) {
    this.fragmentShader = n, this.setChanged();
  }
  getVertexShader() {
    return this.vertexShader;
  }
  setVertexShader(n) {
    this.vertexShader = n, this.setChanged();
  }
  setChanged() {
    this.dispatchEvent({ type: "change" });
  }
  setDepthTexture(n, e = li) {
  }
  update(n, e, t) {
  }
  setSize(n, e) {
  }
  initialize(n, e, t) {
  }
  dispose() {
    for (const n of Object.keys(this)) {
      const e = this[n];
      (e instanceof gt || e instanceof Mn || e instanceof Mt || e instanceof sn) && this[n].dispose();
    }
  }
}, Cr = { MEDIUM: 2, LARGE: 3 }, I_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`, U_ = "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}", N_ = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])], F_ = class extends It {
  constructor(n = new ut()) {
    super({ name: "KawaseBlurMaterial", uniforms: { inputBuffer: new Ce(null), texelSize: new Ce(new ut()), scale: new Ce(1), kernel: new Ce(0) }, blending: Gt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: I_, vertexShader: U_ }), this.setTexelSize(n.x, n.y), this.kernelSize = Cr.MEDIUM;
  }
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  setInputBuffer(n) {
    this.inputBuffer = n;
  }
  get kernelSequence() {
    return N_[this.kernelSize];
  }
  get scale() {
    return this.uniforms.scale.value;
  }
  set scale(n) {
    this.uniforms.scale.value = n;
  }
  getScale() {
    return this.uniforms.scale.value;
  }
  setScale(n) {
    this.uniforms.scale.value = n;
  }
  getKernel() {
    return null;
  }
  get kernel() {
    return this.uniforms.kernel.value;
  }
  set kernel(n) {
    this.uniforms.kernel.value = n;
  }
  setKernel(n) {
    this.kernel = n;
  }
  setTexelSize(n, e) {
    this.uniforms.texelSize.value.set(n, e, n * 0.5, e * 0.5);
  }
  setSize(n, e) {
    const t = 1 / n, i = 1 / e;
    this.uniforms.texelSize.value.set(t, i, t * 0.5, i * 0.5);
  }
}, Sh = class extends sn {
  constructor({ kernelSize: n = Cr.MEDIUM, resolutionScale: e = 0.5, width: t = Kt.AUTO_SIZE, height: i = Kt.AUTO_SIZE, resolutionX: s = t, resolutionY: r = i } = {}) {
    super("KawaseBlurPass"), this.renderTargetA = new gt(1, 1, { depthBuffer: false }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
    const a = this.resolution = new Kt(this, s, r, e);
    a.addEventListener("change", (o) => this.setSize(a.baseWidth, a.baseHeight)), this._blurMaterial = new F_(), this._blurMaterial.kernelSize = n, this.copyMaterial = new _h();
  }
  getResolution() {
    return this.resolution;
  }
  get blurMaterial() {
    return this._blurMaterial;
  }
  set blurMaterial(n) {
    this._blurMaterial = n;
  }
  get dithering() {
    return this.copyMaterial.dithering;
  }
  set dithering(n) {
    this.copyMaterial.dithering = n;
  }
  get kernelSize() {
    return this.blurMaterial.kernelSize;
  }
  set kernelSize(n) {
    this.blurMaterial.kernelSize = n;
  }
  get width() {
    return this.resolution.width;
  }
  set width(n) {
    this.resolution.preferredWidth = n;
  }
  get height() {
    return this.resolution.height;
  }
  set height(n) {
    this.resolution.preferredHeight = n;
  }
  get scale() {
    return this.blurMaterial.scale;
  }
  set scale(n) {
    this.blurMaterial.scale = n;
  }
  getScale() {
    return this.blurMaterial.scale;
  }
  setScale(n) {
    this.blurMaterial.scale = n;
  }
  getKernelSize() {
    return this.kernelSize;
  }
  setKernelSize(n) {
    this.kernelSize = n;
  }
  getResolutionScale() {
    return this.resolution.scale;
  }
  setResolutionScale(n) {
    this.resolution.scale = n;
  }
  render(n, e, t, i, s) {
    const r = this.scene, a = this.camera, o = this.renderTargetA, c = this.renderTargetB, l = this.blurMaterial, h = l.kernelSequence;
    let u = e;
    this.fullscreenMaterial = l;
    for (let d = 0, f = h.length; d < f; ++d) {
      const g = (d & 1) === 0 ? o : c;
      l.kernel = h[d], l.inputBuffer = u.texture, n.setRenderTarget(g), n.render(r, a), u = g;
    }
    this.fullscreenMaterial = this.copyMaterial, this.copyMaterial.inputBuffer = u.texture, n.setRenderTarget(this.renderToScreen ? null : t), n.render(r, a);
  }
  setSize(n, e) {
    const t = this.resolution;
    t.setBaseSize(n, e);
    const i = t.width, s = t.height;
    this.renderTargetA.setSize(i, s), this.renderTargetB.setSize(i, s), this.blurMaterial.setSize(n, e);
  }
  initialize(n, e, t) {
    t !== void 0 && (this.renderTargetA.texture.type = t, this.renderTargetB.texture.type = t, t !== lt ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : n !== null && n.outputColorSpace === Ye && (this.renderTargetA.texture.colorSpace = Ye, this.renderTargetB.texture.colorSpace = Ye));
  }
  static get AUTO_SIZE() {
    return Kt.AUTO_SIZE;
  }
}, O_ = `#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`, B_ = class extends It {
  constructor(n = false, e = null) {
    super({ name: "LuminanceMaterial", defines: { THREE_REVISION: "187".replace(/\D+/g, "") }, uniforms: { inputBuffer: new Ce(null), threshold: new Ce(0), smoothing: new Ce(1), range: new Ce(null) }, blending: Gt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: O_, vertexShader: Ts }), this.colorOutput = n, this.luminanceRange = e;
  }
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  setInputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  get threshold() {
    return this.uniforms.threshold.value;
  }
  set threshold(n) {
    this.smoothing > 0 || n > 0 ? this.defines.THRESHOLD = "1" : delete this.defines.THRESHOLD, this.uniforms.threshold.value = n;
  }
  getThreshold() {
    return this.threshold;
  }
  setThreshold(n) {
    this.threshold = n;
  }
  get smoothing() {
    return this.uniforms.smoothing.value;
  }
  set smoothing(n) {
    this.threshold > 0 || n > 0 ? this.defines.THRESHOLD = "1" : delete this.defines.THRESHOLD, this.uniforms.smoothing.value = n;
  }
  getSmoothingFactor() {
    return this.smoothing;
  }
  setSmoothingFactor(n) {
    this.smoothing = n;
  }
  get useThreshold() {
    return this.threshold > 0 || this.smoothing > 0;
  }
  set useThreshold(n) {
  }
  get colorOutput() {
    return this.defines.COLOR !== void 0;
  }
  set colorOutput(n) {
    n ? this.defines.COLOR = "1" : delete this.defines.COLOR, this.needsUpdate = true;
  }
  isColorOutputEnabled(n) {
    return this.colorOutput;
  }
  setColorOutputEnabled(n) {
    this.colorOutput = n;
  }
  get useRange() {
    return this.luminanceRange !== null;
  }
  set useRange(n) {
    this.luminanceRange = null;
  }
  get luminanceRange() {
    return this.uniforms.range.value;
  }
  set luminanceRange(n) {
    n !== null ? this.defines.RANGE = "1" : delete this.defines.RANGE, this.uniforms.range.value = n, this.needsUpdate = true;
  }
  getLuminanceRange() {
    return this.luminanceRange;
  }
  setLuminanceRange(n) {
    this.luminanceRange = n;
  }
}, z_ = class extends sn {
  constructor({ renderTarget: n, luminanceRange: e, colorOutput: t, resolutionScale: i = 1, width: s = Kt.AUTO_SIZE, height: r = Kt.AUTO_SIZE, resolutionX: a = s, resolutionY: o = r } = {}) {
    super("LuminancePass"), this.fullscreenMaterial = new B_(t, e), this.needsSwap = false, this.renderTarget = n, this.renderTarget === void 0 && (this.renderTarget = new gt(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "LuminancePass.Target");
    const c = this.resolution = new Kt(this, a, o, i);
    c.addEventListener("change", (l) => this.setSize(c.baseWidth, c.baseHeight));
  }
  get texture() {
    return this.renderTarget.texture;
  }
  getTexture() {
    return this.renderTarget.texture;
  }
  getResolution() {
    return this.resolution;
  }
  render(n, e, t, i, s) {
    const r = this.fullscreenMaterial;
    r.inputBuffer = e.texture, n.setRenderTarget(this.renderToScreen ? null : this.renderTarget), n.render(this.scene, this.camera);
  }
  setSize(n, e) {
    const t = this.resolution;
    t.setBaseSize(n, e), this.renderTarget.setSize(t.width, t.height);
  }
  initialize(n, e, t) {
    t !== void 0 && t !== lt && (this.renderTarget.texture.type = t, this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, H_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`, G_ = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}", k_ = class extends It {
  constructor() {
    super({ name: "DownsamplingMaterial", uniforms: { inputBuffer: new Ce(null), texelSize: new Ce(new ne()) }, blending: Gt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: H_, vertexShader: G_ });
  }
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  setSize(n, e) {
    this.uniforms.texelSize.value.set(1 / n, 1 / e);
  }
}, V_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`, W_ = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}", X_ = class extends It {
  constructor() {
    super({ name: "UpsamplingMaterial", uniforms: { inputBuffer: new Ce(null), supportBuffer: new Ce(null), texelSize: new Ce(new ne()), radius: new Ce(0.85) }, blending: Gt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: V_, vertexShader: W_ });
  }
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  set supportBuffer(n) {
    this.uniforms.supportBuffer.value = n;
  }
  get radius() {
    return this.uniforms.radius.value;
  }
  set radius(n) {
    this.uniforms.radius.value = n;
  }
  setSize(n, e) {
    this.uniforms.texelSize.value.set(1 / n, 1 / e);
  }
}, Y_ = class extends sn {
  constructor() {
    super("MipmapBlurPass"), this.needsSwap = false, this.renderTarget = new gt(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Upsampling.Mipmap0", this.downsamplingMipmaps = [], this.upsamplingMipmaps = [], this.downsamplingMaterial = new k_(), this.upsamplingMaterial = new X_(), this.resolution = new ne();
  }
  get texture() {
    return this.renderTarget.texture;
  }
  get levels() {
    return this.downsamplingMipmaps.length;
  }
  set levels(n) {
    if (this.levels !== n) {
      const e = this.renderTarget;
      this.dispose(), this.downsamplingMipmaps = [], this.upsamplingMipmaps = [];
      for (let t = 0; t < n; ++t) {
        const i = e.clone();
        i.texture.name = "Downsampling.Mipmap" + t, this.downsamplingMipmaps.push(i);
      }
      this.upsamplingMipmaps.push(e);
      for (let t = 1, i = n - 1; t < i; ++t) {
        const s = e.clone();
        s.texture.name = "Upsampling.Mipmap" + t, this.upsamplingMipmaps.push(s);
      }
      this.setSize(this.resolution.x, this.resolution.y);
    }
  }
  get radius() {
    return this.upsamplingMaterial.radius;
  }
  set radius(n) {
    this.upsamplingMaterial.radius = n;
  }
  render(n, e, t, i, s) {
    const { scene: r, camera: a } = this, { downsamplingMaterial: o, upsamplingMaterial: c } = this, { downsamplingMipmaps: l, upsamplingMipmaps: h } = this;
    let u = e;
    this.fullscreenMaterial = o;
    for (let d = 0, f = l.length; d < f; ++d) {
      const g = l[d];
      o.setSize(u.width, u.height), o.inputBuffer = u.texture, n.setRenderTarget(g), n.render(r, a), u = g;
    }
    this.fullscreenMaterial = c;
    for (let d = h.length - 1; d >= 0; --d) {
      const f = h[d];
      c.setSize(u.width, u.height), c.inputBuffer = u.texture, c.supportBuffer = l[d].texture, n.setRenderTarget(f), n.render(r, a), u = f;
    }
  }
  setSize(n, e) {
    const t = this.resolution;
    t.set(n, e);
    let i = t.width, s = t.height;
    for (let r = 0, a = this.downsamplingMipmaps.length; r < a; ++r) i = Math.round(i * 0.5), s = Math.round(s * 0.5), this.downsamplingMipmaps[r].setSize(i, s), r < this.upsamplingMipmaps.length && this.upsamplingMipmaps[r].setSize(i, s);
  }
  initialize(n, e, t) {
    if (t !== void 0) {
      const i = this.downsamplingMipmaps.concat(this.upsamplingMipmaps);
      for (const s of i) s.texture.type = t;
      if (t !== lt) this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      else if (n !== null && n.outputColorSpace === Ye) for (const s of i) s.texture.colorSpace = Ye;
    }
  }
  dispose() {
    super.dispose();
    for (const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) n.dispose();
  }
}, q_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`, Hv = class extends xh {
  constructor({ blendFunction: n = We.SCREEN, luminanceThreshold: e = 1, luminanceSmoothing: t = 0.03, mipmapBlur: i = true, intensity: s = 1, radius: r = 0.85, levels: a = 8, kernelSize: o = Cr.LARGE, resolutionScale: c = 0.5, width: l = Kt.AUTO_SIZE, height: h = Kt.AUTO_SIZE, resolutionX: u = l, resolutionY: d = h } = {}) {
    super("BloomEffect", q_, { blendFunction: n, uniforms: /* @__PURE__ */ new Map([["map", new Ce(null)], ["intensity", new Ce(s)]]) }), this.renderTarget = new gt(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Bloom.Target", this.blurPass = new Sh({ kernelSize: o }), this.luminancePass = new z_({ colorOutput: true }), this.luminanceMaterial.threshold = e, this.luminanceMaterial.smoothing = t, this.mipmapBlurPass = new Y_(), this.mipmapBlurPass.enabled = i, this.mipmapBlurPass.radius = r, this.mipmapBlurPass.levels = a, this.uniforms.get("map").value = i ? this.mipmapBlurPass.texture : this.renderTarget.texture;
    const f = this.resolution = new Kt(this, u, d, c);
    f.addEventListener("change", (g) => this.setSize(f.baseWidth, f.baseHeight));
  }
  get texture() {
    return this.mipmapBlurPass.enabled ? this.mipmapBlurPass.texture : this.renderTarget.texture;
  }
  getTexture() {
    return this.texture;
  }
  getResolution() {
    return this.resolution;
  }
  getBlurPass() {
    return this.blurPass;
  }
  getLuminancePass() {
    return this.luminancePass;
  }
  get luminanceMaterial() {
    return this.luminancePass.fullscreenMaterial;
  }
  getLuminanceMaterial() {
    return this.luminancePass.fullscreenMaterial;
  }
  get width() {
    return this.resolution.width;
  }
  set width(n) {
    this.resolution.preferredWidth = n;
  }
  get height() {
    return this.resolution.height;
  }
  set height(n) {
    this.resolution.preferredHeight = n;
  }
  get dithering() {
    return this.blurPass.dithering;
  }
  set dithering(n) {
    this.blurPass.dithering = n;
  }
  get kernelSize() {
    return this.blurPass.kernelSize;
  }
  set kernelSize(n) {
    this.blurPass.kernelSize = n;
  }
  get distinction() {
    return console.warn(this.name, "distinction was removed"), 1;
  }
  set distinction(n) {
    console.warn(this.name, "distinction was removed");
  }
  get intensity() {
    return this.uniforms.get("intensity").value;
  }
  set intensity(n) {
    this.uniforms.get("intensity").value = n;
  }
  getIntensity() {
    return this.intensity;
  }
  setIntensity(n) {
    this.intensity = n;
  }
  getResolutionScale() {
    return this.resolution.scale;
  }
  setResolutionScale(n) {
    this.resolution.scale = n;
  }
  update(n, e, t) {
    const i = this.renderTarget, s = this.luminancePass;
    s.enabled ? (s.render(n, e), this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(n, s.renderTarget) : this.blurPass.render(n, s.renderTarget, i)) : this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(n, e) : this.blurPass.render(n, e, i);
  }
  setSize(n, e) {
    const t = this.resolution;
    t.setBaseSize(n, e), this.renderTarget.setSize(t.width, t.height), this.blurPass.resolution.copy(t), this.luminancePass.setSize(n, e), this.mipmapBlurPass.setSize(n, e);
  }
  initialize(n, e, t) {
    this.blurPass.initialize(n, e, t), this.luminancePass.initialize(n, e, t), this.mipmapBlurPass.initialize(n, e, t), t !== void 0 && (this.renderTarget.texture.type = t, n !== null && n.outputColorSpace === Ye && (this.renderTarget.texture.colorSpace = Ye));
  }
}, Mh = { RED: 0, GREEN: 1 }, Eh = { DISCARD: 0, MULTIPLY_RGB: 3 }, Z_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if PASS == 1
uniform vec4 kernel64[32];
#else
uniform vec4 kernel16[8];
#endif
uniform lowp sampler2D cocBuffer;uniform vec2 texelSize;uniform float scale;varying vec2 vUv;void main(){
#ifdef FOREGROUND
vec2 cocNearFar=texture2D(cocBuffer,vUv).rg*scale;float coc=cocNearFar.x;
#else
float coc=texture2D(cocBuffer,vUv).g*scale;
#endif
if(coc==0.0){gl_FragColor=texture2D(inputBuffer,vUv);}else{
#ifdef FOREGROUND
vec2 step=texelSize*max(cocNearFar.x,cocNearFar.y);
#else
vec2 step=texelSize*coc;
#endif
#if PASS == 1
vec4 acc=vec4(0.0);for(int i=0;i<32;++i){vec4 kernel=kernel64[i];vec2 uv=step*kernel.xy+vUv;acc+=texture2D(inputBuffer,uv);uv=step*kernel.zw+vUv;acc+=texture2D(inputBuffer,uv);}gl_FragColor=acc/64.0;
#else
vec4 maxValue=texture2D(inputBuffer,vUv);for(int i=0;i<8;++i){vec4 kernel=kernel16[i];vec2 uv=step*kernel.xy+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);uv=step*kernel.zw+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);}gl_FragColor=maxValue;
#endif
}}`, rr = class extends It {
  constructor(n = false, e = false) {
    super({ name: "BokehMaterial", defines: { PASS: n ? "2" : "1" }, uniforms: { inputBuffer: new Ce(null), cocBuffer: new Ce(null), texelSize: new Ce(new ne()), kernel64: new Ce(null), kernel16: new Ce(null), scale: new Ce(1) }, blending: Gt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Z_, vertexShader: Ts }), e && (this.defines.FOREGROUND = "1"), this.generateKernel();
  }
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  setInputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  set cocBuffer(n) {
    this.uniforms.cocBuffer.value = n;
  }
  setCoCBuffer(n) {
    this.uniforms.cocBuffer.value = n;
  }
  get scale() {
    return this.uniforms.scale.value;
  }
  set scale(n) {
    this.uniforms.scale.value = n;
  }
  getScale(n) {
    return this.scale;
  }
  setScale(n) {
    this.scale = n;
  }
  generateKernel() {
    const n = 2.39996323, e = new Float64Array(128), t = new Float64Array(32);
    let i = 0, s = 0;
    for (let r = 0, a = Math.sqrt(80); r < 80; ++r) {
      const o = r * n, c = Math.sqrt(r) / a, l = c * Math.cos(o), h = c * Math.sin(o);
      r % 5 === 0 ? (t[s++] = l, t[s++] = h) : (e[i++] = l, e[i++] = h);
    }
    this.uniforms.kernel64.value = e, this.uniforms.kernel16.value = t;
  }
  setTexelSize(n, e) {
    this.uniforms.texelSize.value.set(n, e);
  }
  setSize(n, e) {
    this.uniforms.texelSize.value.set(1 / n, 1 / e);
  }
}, K_ = `#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform mat4 projectionMatrix;uniform mat4 projectionMatrixInverse;uniform float cameraNear;uniform float cameraFar;uniform float focusDistance;uniform float focusRange;varying vec2 vUv;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}
#ifdef PERSPECTIVE_CAMERA
#define getViewZ(depth) perspectiveDepthToViewZ(depth, cameraNear, cameraFar)
#else
#define getViewZ(depth) orthographicDepthToViewZ(depth, cameraNear, cameraFar)
#endif
vec3 getViewPosition(const in vec2 screenPosition,const in float depth,const in float viewZ){vec4 clipPosition=vec4(vec3(screenPosition,depth)*2.0-1.0,1.0);float clipW=projectionMatrix[2][3]*viewZ+projectionMatrix[3][3];clipPosition*=clipW;return(projectionMatrixInverse*clipPosition).xyz;}vec3 getViewPosition(const in vec2 screenPosition,const in float depth){return getViewPosition(screenPosition,depth,getViewZ(depth));}
#define getDistance(viewPosition) length(viewPosition)
void main(){float depth=readDepth(vUv);vec3 viewPosition=getViewPosition(vUv,depth);float distance=getDistance(viewPosition);float signedDistance=distance-focusDistance;float magnitude=smoothstep(0.0,focusRange,abs(signedDistance));gl_FragColor.rg=magnitude*vec2(step(signedDistance,0.0),step(0.0,signedDistance));}`, J_ = class extends It {
  constructor(n = null) {
    super({ name: "CircleOfConfusionMaterial", defines: { DEPTH_PACKING: "0" }, uniforms: { depthBuffer: new Ce(null), projectionMatrix: new Ce(null), projectionMatrixInverse: new Ce(null), cameraNear: new Ce(0.3), cameraFar: new Ce(1e3), focusDistance: new Ce(0), focusRange: new Ce(0) }, blending: Gt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: K_, vertexShader: Ts }), this.uniforms.focalLength = this.uniforms.focusRange, n !== null && this.copyCameraSettings(n);
  }
  set depthBuffer(n) {
    this.uniforms.depthBuffer.value = n;
  }
  set depthPacking(n) {
    this.defines.DEPTH_PACKING = n.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(n, e = li) {
    this.depthBuffer = n, this.depthPacking = e;
  }
  get focusDistance() {
    return this.uniforms.focusDistance.value;
  }
  set focusDistance(n) {
    this.uniforms.focusDistance.value = n;
  }
  get worldFocusDistance() {
    return this.focusDistance;
  }
  set worldFocusDistance(n) {
    this.focusDistance = n;
  }
  getFocusDistance(n) {
    this.uniforms.focusDistance.value = n;
  }
  setFocusDistance(n) {
    this.uniforms.focusDistance.value = n;
  }
  get focalLength() {
    return this.focusRange;
  }
  set focalLength(n) {
    this.focusRange = n;
  }
  get focusRange() {
    return this.uniforms.focusRange.value;
  }
  set focusRange(n) {
    this.uniforms.focusRange.value = n;
  }
  get worldFocusRange() {
    return this.focusRange;
  }
  set worldFocusRange(n) {
    this.focusRange = n;
  }
  getFocalLength(n) {
    return this.focusRange;
  }
  setFocalLength(n) {
    this.focusRange = n;
  }
  adoptCameraSettings(n) {
    this.copyCameraSettings(n);
  }
  copyCameraSettings(n) {
    this.uniforms.projectionMatrix.value = n.projectionMatrix, this.uniforms.projectionMatrixInverse.value = n.projectionMatrixInverse, this.uniforms.cameraNear.value = n.near, this.uniforms.cameraFar.value = n.far;
    const e = this.defines.PERSPECTIVE_CAMERA !== void 0;
    n instanceof qt ? e || (this.defines.PERSPECTIVE_CAMERA = true, this.needsUpdate = true) : e && (delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = true);
  }
}, $_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef MASK_PRECISION_HIGH
uniform mediump sampler2D maskTexture;
#else
uniform lowp sampler2D maskTexture;
#endif
#if MASK_FUNCTION != 0
uniform float strength;
#endif
varying vec2 vUv;void main(){
#if COLOR_CHANNEL == 0
float mask=texture2D(maskTexture,vUv).r;
#elif COLOR_CHANNEL == 1
float mask=texture2D(maskTexture,vUv).g;
#elif COLOR_CHANNEL == 2
float mask=texture2D(maskTexture,vUv).b;
#else
float mask=texture2D(maskTexture,vUv).a;
#endif
#if MASK_FUNCTION == 0
#ifdef INVERTED
mask=(mask>0.0)?0.0:1.0;
#else
mask=(mask>0.0)?1.0:0.0;
#endif
#else
mask=clamp(mask*strength,0.0,1.0);
#ifdef INVERTED
mask=1.0-mask;
#endif
#endif
#if MASK_FUNCTION == 3
vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=vec4(mask*texel.rgb,texel.a);
#elif MASK_FUNCTION == 2
gl_FragColor=vec4(mask*texture2D(inputBuffer,vUv).rgb,mask);
#else
gl_FragColor=mask*texture2D(inputBuffer,vUv);
#endif
}`, Q_ = class extends It {
  constructor(n = null) {
    super({ name: "MaskMaterial", uniforms: { maskTexture: new Ce(n), inputBuffer: new Ce(null), strength: new Ce(1) }, blending: Gt, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: $_, vertexShader: Ts }), this.colorChannel = Mh.RED, this.maskFunction = Eh.DISCARD;
  }
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  setInputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  set maskTexture(n) {
    this.uniforms.maskTexture.value = n, delete this.defines.MASK_PRECISION_HIGH, n.type !== lt && (this.defines.MASK_PRECISION_HIGH = "1"), this.needsUpdate = true;
  }
  setMaskTexture(n) {
    this.maskTexture = n;
  }
  set colorChannel(n) {
    this.defines.COLOR_CHANNEL = n.toFixed(0), this.needsUpdate = true;
  }
  setColorChannel(n) {
    this.colorChannel = n;
  }
  set maskFunction(n) {
    this.defines.MASK_FUNCTION = n.toFixed(0), this.needsUpdate = true;
  }
  setMaskFunction(n) {
    this.maskFunction = n;
  }
  get inverted() {
    return this.defines.INVERTED !== void 0;
  }
  set inverted(n) {
    this.inverted && !n ? delete this.defines.INVERTED : n && (this.defines.INVERTED = "1"), this.needsUpdate = true;
  }
  isInverted() {
    return this.inverted;
  }
  setInverted(n) {
    this.inverted = n;
  }
  get strength() {
    return this.uniforms.strength.value;
  }
  set strength(n) {
    this.uniforms.strength.value = n;
  }
  getStrength() {
    return this.strength;
  }
  setStrength(n) {
    this.strength = n;
  }
}, Ci = class extends sn {
  constructor(n, e = "inputBuffer") {
    super("ShaderPass"), this.fullscreenMaterial = n, this.input = e;
  }
  setInput(n) {
    this.input = n;
  }
  render(n, e, t, i, s) {
    const r = this.fullscreenMaterial.uniforms;
    e !== null && r !== void 0 && r[this.input] !== void 0 && (r[this.input].value = e.texture), n.setRenderTarget(this.renderToScreen ? null : t), n.render(this.scene, this.camera);
  }
  initialize(n, e, t) {
    t !== void 0 && t !== lt && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, j_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D nearColorBuffer;uniform mediump sampler2D farColorBuffer;
#else
uniform lowp sampler2D nearColorBuffer;uniform lowp sampler2D farColorBuffer;
#endif
#if MASK_FUNCTION != 1 && MASK_FUNCTION != 2
uniform lowp sampler2D farCoCBuffer;
#endif
uniform lowp sampler2D nearCoCBuffer;uniform float scale;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 colorNear=texture2D(nearColorBuffer,uv);vec4 colorFar=texture2D(farColorBuffer,uv);
#if MASK_FUNCTION == 1 || MASK_FUNCTION == 2
vec2 cocNearFar=vec2(texture2D(nearCoCBuffer,uv).r,colorFar.a);cocNearFar.x=min(cocNearFar.x*scale,1.0);
#else
vec2 cocNearFar=vec2(texture2D(nearCoCBuffer,uv).r,texture2D(farCoCBuffer,uv).g);cocNearFar=min(cocNearFar*scale,1.0);colorFar.a*=cocNearFar.y;
#endif
vec4 result=inputColor*(1.0-cocNearFar.y)+colorFar;result=mix(result,colorNear,cocNearFar.x);outputColor=result;}`, ev = new L(), Gv = class extends xh {
  constructor(n, { blendFunction: e, worldFocusDistance: t, worldFocusRange: i, focalLength: s, focusDistance: r = t || 3, focusRange: a = i || s || 2, bokehScale: o = 1, resolutionScale: c = 0.5, width: l, height: h, resolutionX: u = l || Kt.AUTO_SIZE, resolutionY: d = h || Kt.AUTO_SIZE } = {}) {
    super("DepthOfFieldEffect", j_, { blendFunction: e, attributes: qn.DEPTH, uniforms: /* @__PURE__ */ new Map([["nearColorBuffer", new Ce(null)], ["farColorBuffer", new Ce(null)], ["nearCoCBuffer", new Ce(null)], ["farCoCBuffer", new Ce(null)], ["scale", new Ce(1)]]) }), this.camera = n, this.renderTarget = new gt(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "DoF.Intermediate", this.renderTargetMasked = this.renderTarget.clone(), this.renderTargetMasked.texture.name = "DoF.Masked.Far", this.renderTargetNear = this.renderTarget.clone(), this.renderTargetNear.texture.name = "DoF.Bokeh.Near", this.uniforms.get("nearColorBuffer").value = this.renderTargetNear.texture, this.renderTargetFar = this.renderTarget.clone(), this.renderTargetFar.texture.name = "DoF.Bokeh.Far", this.uniforms.get("farColorBuffer").value = this.renderTargetFar.texture, this.renderTargetCoC = this.renderTarget.clone(), this.renderTargetCoC.texture.name = "DoF.CoC", this.uniforms.get("farCoCBuffer").value = this.renderTargetCoC.texture, this.renderTargetCoCBlurred = this.renderTargetCoC.clone(), this.renderTargetCoCBlurred.texture.name = "DoF.CoC.Blurred", this.uniforms.get("nearCoCBuffer").value = this.renderTargetCoCBlurred.texture, this.cocPass = new Ci(new J_(n));
    const f = this.cocMaterial;
    f.focusDistance = r, f.focusRange = a, this.blurPass = new Sh({ resolutionScale: c, resolutionX: u, resolutionY: d, kernelSize: Cr.MEDIUM }), this.maskPass = new Ci(new Q_(this.renderTargetCoC.texture));
    const g = this.maskPass.fullscreenMaterial;
    g.colorChannel = Mh.GREEN, this.maskFunction = Eh.MULTIPLY_RGB, this.bokehNearBasePass = new Ci(new rr(false, true)), this.bokehNearBasePass.fullscreenMaterial.cocBuffer = this.renderTargetCoCBlurred.texture, this.bokehNearFillPass = new Ci(new rr(true, true)), this.bokehNearFillPass.fullscreenMaterial.cocBuffer = this.renderTargetCoCBlurred.texture, this.bokehFarBasePass = new Ci(new rr(false, false)), this.bokehFarBasePass.fullscreenMaterial.cocBuffer = this.renderTargetCoC.texture, this.bokehFarFillPass = new Ci(new rr(true, false)), this.bokehFarFillPass.fullscreenMaterial.cocBuffer = this.renderTargetCoC.texture, this.target = null;
    const S = this.resolution = new Kt(this, u, d, c);
    S.addEventListener("change", (p) => this.setSize(S.baseWidth, S.baseHeight)), this.bokehScale = o;
  }
  set mainCamera(n) {
    this.camera = n, this.cocMaterial.copyCameraSettings(n);
  }
  get cocTexture() {
    return this.renderTargetCoC.texture;
  }
  get maskFunction() {
    return this.maskPass.fullscreenMaterial.maskFunction;
  }
  set maskFunction(n) {
    this.maskFunction !== n && (this.defines.set("MASK_FUNCTION", n.toFixed(0)), this.maskPass.fullscreenMaterial.maskFunction = n, this.setChanged());
  }
  get cocMaterial() {
    return this.cocPass.fullscreenMaterial;
  }
  get circleOfConfusionMaterial() {
    return this.cocMaterial;
  }
  getCircleOfConfusionMaterial() {
    return this.cocMaterial;
  }
  getBlurPass() {
    return this.blurPass;
  }
  getResolution() {
    return this.resolution;
  }
  get bokehScale() {
    return this.uniforms.get("scale").value;
  }
  set bokehScale(n) {
    this.bokehNearBasePass.fullscreenMaterial.scale = n, this.bokehNearFillPass.fullscreenMaterial.scale = n, this.bokehFarBasePass.fullscreenMaterial.scale = n, this.bokehFarFillPass.fullscreenMaterial.scale = n, this.maskPass.fullscreenMaterial.strength = n, this.uniforms.get("scale").value = n;
  }
  getBokehScale() {
    return this.bokehScale;
  }
  setBokehScale(n) {
    this.bokehScale = n;
  }
  getTarget() {
    return this.target;
  }
  setTarget(n) {
    this.target = n;
  }
  calculateFocusDistance(n) {
    return this.camera.getWorldPosition(ev).distanceTo(n);
  }
  setDepthTexture(n, e = li) {
    this.cocMaterial.depthBuffer = n, this.cocMaterial.depthPacking = e;
  }
  update(n, e, t) {
    const i = this.renderTarget, s = this.renderTargetCoC, r = this.renderTargetCoCBlurred, a = this.renderTargetMasked;
    if (this.target !== null) {
      const o = this.calculateFocusDistance(this.target);
      this.cocMaterial.focusDistance = o;
    }
    this.cocPass.render(n, null, s), this.blurPass.render(n, s, r), this.maskPass.render(n, e, a), this.bokehFarBasePass.render(n, a, i), this.bokehFarFillPass.render(n, i, this.renderTargetFar), this.bokehNearBasePass.render(n, e, i), this.bokehNearFillPass.render(n, i, this.renderTargetNear);
  }
  setSize(n, e) {
    const t = this.resolution;
    t.setBaseSize(n, e);
    const i = t.width, s = t.height;
    this.cocPass.setSize(n, e), this.blurPass.setSize(n, e), this.maskPass.setSize(n, e), this.renderTargetFar.setSize(n, e), this.renderTargetCoC.setSize(n, e), this.renderTargetMasked.setSize(n, e), this.renderTarget.setSize(i, s), this.renderTargetNear.setSize(i, s), this.renderTargetCoCBlurred.setSize(i, s), this.bokehNearBasePass.fullscreenMaterial.setSize(n, e), this.bokehNearFillPass.fullscreenMaterial.setSize(n, e), this.bokehFarBasePass.fullscreenMaterial.setSize(n, e), this.bokehFarFillPass.fullscreenMaterial.setSize(n, e);
  }
  initialize(n, e, t) {
    this.cocPass.initialize(n, e, t), this.maskPass.initialize(n, e, t), this.bokehNearBasePass.initialize(n, e, t), this.bokehNearFillPass.initialize(n, e, t), this.bokehFarBasePass.initialize(n, e, t), this.bokehFarFillPass.initialize(n, e, t), this.blurPass.initialize(n, e, lt), n.capabilities.logarithmicDepthBuffer && (this.cocPass.fullscreenMaterial.defines.LOG_DEPTH = "1"), t !== void 0 && (this.renderTarget.texture.type = t, this.renderTargetNear.texture.type = t, this.renderTargetFar.texture.type = t, this.renderTargetMasked.texture.type = t, n !== null && n.outputColorSpace === Ye && (this.renderTarget.texture.colorSpace = Ye, this.renderTargetNear.texture.colorSpace = Ye, this.renderTargetFar.texture.colorSpace = Ye, this.renderTargetMasked.texture.colorSpace = Ye));
  }
}, kv = class extends sn {
  constructor(n, e, t = null) {
    super("RenderPass", n, e), this.needsSwap = false, this.needsDepthBlit = true, this.clearPass = new vh(), this.overrideMaterialManager = t === null ? null : new rc(t), this.ignoreBackground = false, this.skipShadowMapUpdate = false, this.selection = null;
  }
  set mainScene(n) {
    this.scene = n;
  }
  set mainCamera(n) {
    this.camera = n;
  }
  get renderToScreen() {
    return super.renderToScreen;
  }
  set renderToScreen(n) {
    super.renderToScreen = n, this.clearPass.renderToScreen = n;
  }
  get overrideMaterial() {
    const n = this.overrideMaterialManager;
    return n !== null ? n.material : null;
  }
  set overrideMaterial(n) {
    const e = this.overrideMaterialManager;
    n !== null ? e !== null ? e.setMaterial(n) : this.overrideMaterialManager = new rc(n) : e !== null && (e.dispose(), this.overrideMaterialManager = null);
  }
  getOverrideMaterial() {
    return this.overrideMaterial;
  }
  setOverrideMaterial(n) {
    this.overrideMaterial = n;
  }
  get clear() {
    return this.clearPass.enabled;
  }
  set clear(n) {
    this.clearPass.enabled = n;
  }
  getSelection() {
    return this.selection;
  }
  setSelection(n) {
    this.selection = n;
  }
  isBackgroundDisabled() {
    return this.ignoreBackground;
  }
  setBackgroundDisabled(n) {
    this.ignoreBackground = n;
  }
  isShadowMapDisabled() {
    return this.skipShadowMapUpdate;
  }
  setShadowMapDisabled(n) {
    this.skipShadowMapUpdate = n;
  }
  getClearPass() {
    return this.clearPass;
  }
  render(n, e, t, i, s) {
    const r = this.scene, a = this.camera, o = this.selection, c = a.layers.mask, l = r.background, h = n.shadowMap.autoUpdate, u = this.renderToScreen ? null : e;
    o !== null && a.layers.set(o.getLayer()), this.skipShadowMapUpdate && (n.shadowMap.autoUpdate = false), (this.ignoreBackground || this.clearPass.overrideClearColor !== null) && (r.background = null), this.clearPass.enabled && this.clearPass.render(n, e), n.setRenderTarget(u), this.overrideMaterialManager !== null ? this.overrideMaterialManager.render(n, r, a) : n.render(r, a), a.layers.mask = c, r.background = l, n.shadowMap.autoUpdate = h;
  }
}, tv = `#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`, nv = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}", iv = class extends It {
  constructor(n, e, t, i, s = false) {
    super({ name: "EffectMaterial", defines: { THREE_REVISION: "187".replace(/\D+/g, ""), DEPTH_PACKING: "0", ENCODE_OUTPUT: "1" }, uniforms: { inputBuffer: new Ce(null), depthBuffer: new Ce(null), resolution: new Ce(new ne()), texelSize: new Ce(new ne()), cameraNear: new Ce(0.3), cameraFar: new Ce(1e3), aspect: new Ce(1), time: new Ce(0) }, blending: Gt, toneMapped: false, depthWrite: false, depthTest: false, dithering: s }), n && this.setShaderParts(n), e && this.setDefines(e), t && this.setUniforms(t), this.copyCameraSettings(i);
  }
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  setInputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  get depthBuffer() {
    return this.uniforms.depthBuffer.value;
  }
  set depthBuffer(n) {
    this.uniforms.depthBuffer.value = n;
  }
  get depthPacking() {
    return Number(this.defines.DEPTH_PACKING);
  }
  set depthPacking(n) {
    this.defines.DEPTH_PACKING = n.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(n, e = li) {
    this.depthBuffer = n, this.depthPacking = e;
  }
  setShaderData(n) {
    this.setShaderParts(n.shaderParts), this.setDefines(n.defines), this.setUniforms(n.uniforms), this.setExtensions(n.extensions);
  }
  setShaderParts(n) {
    return this.fragmentShader = tv.replace(Je.FRAGMENT_HEAD, n.get(Je.FRAGMENT_HEAD) || "").replace(Je.FRAGMENT_MAIN_UV, n.get(Je.FRAGMENT_MAIN_UV) || "").replace(Je.FRAGMENT_MAIN_IMAGE, n.get(Je.FRAGMENT_MAIN_IMAGE) || ""), this.vertexShader = nv.replace(Je.VERTEX_HEAD, n.get(Je.VERTEX_HEAD) || "").replace(Je.VERTEX_MAIN_SUPPORT, n.get(Je.VERTEX_MAIN_SUPPORT) || ""), this.needsUpdate = true, this;
  }
  setDefines(n) {
    for (const e of n.entries()) this.defines[e[0]] = e[1];
    return this.needsUpdate = true, this;
  }
  setUniforms(n) {
    for (const e of n.entries()) this.uniforms[e[0]] = e[1];
    return this;
  }
  setExtensions(n) {
    this.extensions = {};
    for (const e of n) this.extensions[e] = true;
    return this;
  }
  get encodeOutput() {
    return this.defines.ENCODE_OUTPUT !== void 0;
  }
  set encodeOutput(n) {
    this.encodeOutput !== n && (n ? this.defines.ENCODE_OUTPUT = "1" : delete this.defines.ENCODE_OUTPUT, this.needsUpdate = true);
  }
  isOutputEncodingEnabled(n) {
    return this.encodeOutput;
  }
  setOutputEncodingEnabled(n) {
    this.encodeOutput = n;
  }
  get time() {
    return this.uniforms.time.value;
  }
  set time(n) {
    this.uniforms.time.value = n;
  }
  setDeltaTime(n) {
    this.uniforms.time.value += n;
  }
  adoptCameraSettings(n) {
    this.copyCameraSettings(n);
  }
  copyCameraSettings(n) {
    n && (this.uniforms.cameraNear.value = n.near, this.uniforms.cameraFar.value = n.far, n instanceof qt ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = true);
  }
  setSize(n, e) {
    const t = this.uniforms;
    t.resolution.value.set(n, e), t.texelSize.value.set(1 / n, 1 / e), t.aspect.value = n / e;
  }
  static get Section() {
    return Je;
  }
};
function ac(n, e, t) {
  for (const i of e) {
    const s = "$1" + n + i.charAt(0).toUpperCase() + i.slice(1), r = new RegExp("([^\\.])(\\b" + i + "\\b)", "g");
    for (const a of t.entries()) a[1] !== null && t.set(a[0], a[1].replace(r, s));
  }
}
function sv(n, e, t) {
  let i = e.getFragmentShader(), s = e.getVertexShader();
  const r = i !== void 0 && /mainImage/.test(i), a = i !== void 0 && /mainUv/.test(i);
  if (t.attributes |= e.getAttributes(), i === void 0) throw new Error(`Missing fragment shader (${e.name})`);
  if (a && (t.attributes & qn.CONVOLUTION) !== 0) throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);
  if (!r && !a) throw new Error(`Could not find mainImage or mainUv function (${e.name})`);
  {
    const o = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g, c = t.shaderParts;
    let l = c.get(Je.FRAGMENT_HEAD) || "", h = c.get(Je.FRAGMENT_MAIN_UV) || "", u = c.get(Je.FRAGMENT_MAIN_IMAGE) || "", d = c.get(Je.VERTEX_HEAD) || "", f = c.get(Je.VERTEX_MAIN_SUPPORT) || "";
    const g = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set();
    if (a && (h += `	${n}MainUv(UV);
`, t.uvTransformation = true), s !== null && /mainSupport/.test(s)) {
      const M = /mainSupport *\([\w\s]*?uv\s*?\)/.test(s);
      f += `	${n}MainSupport(`, f += M ? `vUv);
` : `);
`;
      for (const T of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)) for (const E of T[1].split(/\s*,\s*/)) t.varyings.add(E), g.add(E), S.add(E);
      for (const T of s.matchAll(o)) S.add(T[1]);
    }
    for (const M of i.matchAll(o)) S.add(M[1]);
    for (const M of e.defines.keys()) S.add(M.replace(/\([\w\s,]*\)/g, ""));
    for (const M of e.uniforms.keys()) S.add(M);
    S.delete("while"), S.delete("for"), S.delete("if"), e.uniforms.forEach((M, T) => t.uniforms.set(n + T.charAt(0).toUpperCase() + T.slice(1), M)), e.defines.forEach((M, T) => t.defines.set(n + T.charAt(0).toUpperCase() + T.slice(1), M));
    const p = /* @__PURE__ */ new Map([["fragment", i], ["vertex", s]]);
    ac(n, S, t.defines), ac(n, S, p), i = p.get("fragment"), s = p.get("vertex");
    const m = e.blendMode;
    if (t.blendModes.set(m.blendFunction, m), r) {
      e.inputColorSpace !== null && e.inputColorSpace !== t.colorSpace && (u += e.inputColorSpace === Ye ? `color0 = sRGBTransferOETF(color0);
	` : `color0 = sRGBToLinear(color0);
	`), e.outputColorSpace !== _n ? t.colorSpace = e.outputColorSpace : e.inputColorSpace !== null && (t.colorSpace = e.inputColorSpace);
      const M = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
      u += `${n}MainImage(color0, UV, `, (t.attributes & qn.DEPTH) !== 0 && M.test(i) && (u += "depth, ", t.readDepth = true), u += `color1);
	`;
      const T = n + "BlendOpacity";
      t.uniforms.set(T, m.opacity), u += `color0 = blend${m.blendFunction}(color0, color1, ${T});

	`, l += `uniform float ${T};

`;
    }
    if (l += i + `
`, s !== null && (d += s + `
`), c.set(Je.FRAGMENT_HEAD, l), c.set(Je.FRAGMENT_MAIN_UV, h), c.set(Je.FRAGMENT_MAIN_IMAGE, u), c.set(Je.VERTEX_HEAD, d), c.set(Je.VERTEX_MAIN_SUPPORT, f), e.extensions !== null) for (const M of e.extensions) t.extensions.add(M);
  }
}
var Vv = class extends sn {
  constructor(n, ...e) {
    super("EffectPass"), this.fullscreenMaterial = new iv(null, null, null, n), this.listener = (t) => this.handleEvent(t), this.effects = [], this.setEffects(e), this.skipRendering = false, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY, this.timeScale = 1;
  }
  set mainScene(n) {
    for (const e of this.effects) e.mainScene = n;
  }
  set mainCamera(n) {
    this.fullscreenMaterial.copyCameraSettings(n);
    for (const e of this.effects) e.mainCamera = n;
  }
  get encodeOutput() {
    return this.fullscreenMaterial.encodeOutput;
  }
  set encodeOutput(n) {
    this.fullscreenMaterial.encodeOutput = n;
  }
  get dithering() {
    return this.fullscreenMaterial.dithering;
  }
  set dithering(n) {
    const e = this.fullscreenMaterial;
    e.dithering = n, e.needsUpdate = true;
  }
  setEffects(n) {
    for (const e of this.effects) e.removeEventListener("change", this.listener);
    this.effects = n.sort((e, t) => t.attributes - e.attributes);
    for (const e of this.effects) e.addEventListener("change", this.listener);
  }
  updateMaterial() {
    const n = new Q0();
    let e = 0;
    for (const a of this.effects) if (a.blendMode.blendFunction === We.DST) n.attributes |= a.getAttributes() & qn.DEPTH;
    else {
      if ((n.attributes & a.getAttributes() & qn.CONVOLUTION) !== 0) throw new Error(`Convolution effects cannot be merged (${a.name})`);
      sv("e" + e++, a, n);
    }
    let t = n.shaderParts.get(Je.FRAGMENT_HEAD), i = n.shaderParts.get(Je.FRAGMENT_MAIN_IMAGE), s = n.shaderParts.get(Je.FRAGMENT_MAIN_UV);
    const r = /\bblend\b/g;
    for (const a of n.blendModes.values()) t += a.getShaderCode().replace(r, `blend${a.blendFunction}`) + `
`;
    (n.attributes & qn.DEPTH) !== 0 ? (n.readDepth && (i = `float depth = readDepth(UV);

	` + i), this.needsDepthTexture = this.getDepthTexture() === null) : this.needsDepthTexture = false, n.colorSpace === Ye && (i += `color0 = sRGBToLinear(color0);
	`), n.uvTransformation ? (s = `vec2 transformedUv = vUv;
` + s, n.defines.set("UV", "transformedUv")) : n.defines.set("UV", "vUv"), n.shaderParts.set(Je.FRAGMENT_HEAD, t), n.shaderParts.set(Je.FRAGMENT_MAIN_IMAGE, i), n.shaderParts.set(Je.FRAGMENT_MAIN_UV, s);
    for (const [a, o] of n.shaderParts) o !== null && n.shaderParts.set(a, o.trim().replace(/^#/, `
#`));
    this.skipRendering = e === 0, this.needsSwap = !this.skipRendering, this.fullscreenMaterial.setShaderData(n);
  }
  recompile() {
    this.updateMaterial();
  }
  getDepthTexture() {
    return this.fullscreenMaterial.depthBuffer;
  }
  setDepthTexture(n, e = li) {
    this.fullscreenMaterial.depthBuffer = n, this.fullscreenMaterial.depthPacking = e;
    for (const t of this.effects) t.setDepthTexture(n, e);
  }
  render(n, e, t, i, s) {
    for (const r of this.effects) r.update(n, e, i);
    if (!this.skipRendering || this.renderToScreen) {
      const r = this.fullscreenMaterial;
      r.inputBuffer = e.texture, r.time += i * this.timeScale, n.setRenderTarget(this.renderToScreen ? null : t), n.render(this.scene, this.camera);
    }
  }
  setSize(n, e) {
    this.fullscreenMaterial.setSize(n, e);
    for (const t of this.effects) t.setSize(n, e);
  }
  initialize(n, e, t) {
    this.renderer = n;
    for (const i of this.effects) i.initialize(n, e, t);
    this.updateMaterial(), t !== void 0 && t !== lt && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
  dispose() {
    super.dispose();
    for (const n of this.effects) n.removeEventListener("change", this.listener), n.dispose();
  }
  handleEvent(n) {
    switch (n.type) {
      case "change":
        this.recompile();
        break;
    }
  }
}, pr = function() {
  var n = 0, e = document.createElement("div");
  e.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", e.addEventListener("click", function(h) {
    h.preventDefault(), i(++n % e.children.length);
  }, false);
  function t(h) {
    return e.appendChild(h.dom), h;
  }
  function i(h) {
    for (var u = 0; u < e.children.length; u++) e.children[u].style.display = u === h ? "block" : "none";
    n = h;
  }
  var s = (performance || Date).now(), r = s, a = 0, o = t(new pr.Panel("FPS", "#0ff", "#002")), c = t(new pr.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var l = t(new pr.Panel("MB", "#f08", "#201"));
  return i(0), { REVISION: 16, dom: e, addPanel: t, showPanel: i, begin: function() {
    s = (performance || Date).now();
  }, end: function() {
    a++;
    var h = (performance || Date).now();
    if (c.update(h - s, 200), h >= r + 1e3 && (o.update(a * 1e3 / (h - r), 100), r = h, a = 0, l)) {
      var u = performance.memory;
      l.update(u.usedJSHeapSize / 1048576, u.jsHeapSizeLimit / 1048576);
    }
    return h;
  }, update: function() {
    s = this.end();
  }, domElement: e, setMode: i };
};
pr.Panel = function(n, e, t) {
  var i = 1 / 0, s = 0, r = Math.round, a = r(window.devicePixelRatio || 1), o = 80 * a, c = 48 * a, l = 3 * a, h = 2 * a, u = 3 * a, d = 15 * a, f = 74 * a, g = 30 * a, S = document.createElement("canvas");
  S.width = o, S.height = c, S.style.cssText = "width:80px;height:48px";
  var p = S.getContext("2d");
  return p.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", p.textBaseline = "top", p.fillStyle = t, p.fillRect(0, 0, o, c), p.fillStyle = e, p.fillText(n, l, h), p.fillRect(u, d, f, g), p.fillStyle = t, p.globalAlpha = 0.9, p.fillRect(u, d, f, g), { dom: S, update: function(m, M) {
    i = Math.min(i, m), s = Math.max(s, m), p.fillStyle = t, p.globalAlpha = 1, p.fillRect(0, 0, o, d), p.fillStyle = e, p.fillText(r(m) + " " + n + " (" + r(i) + "-" + r(s) + ")", l, h), p.drawImage(S, u + a, d, f - a, g, u, d, f - a, g), p.fillRect(u + f - a, d, a, g), p.fillStyle = t, p.globalAlpha = 0.9, p.fillRect(u + f - a, d, a, r((1 - m / M) * g));
  } };
};
const oc = { type: "change" }, Ao = { type: "start" }, yh = { type: "end" }, ar = new Ss(), lc = new Pn(), rv = Math.cos(70 * bu.DEG2RAD), St = new L(), Wt = 2 * Math.PI, je = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, fa = 1e-6;
class Wv extends rh {
  constructor(e, t = null) {
    super(e, t), this.state = je.NONE, this.target = new L(), this.cursor = new L(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Ui.ROTATE, MIDDLE: Ui.DOLLY, RIGHT: Ui.PAN }, this.touches = { ONE: Ii.ROTATE, TWO: Ii.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new L(), this._lastQuaternion = new Jn(), this._lastTargetPosition = new L(), this._quat = new Jn().setFromUnitVectors(e.up, new L(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Nl(), this._sphericalDelta = new Nl(), this._scale = 1, this._panOffset = new L(), this._rotateStart = new ne(), this._rotateEnd = new ne(), this._rotateDelta = new ne(), this._panStart = new ne(), this._panEnd = new ne(), this._panDelta = new ne(), this._dollyStart = new ne(), this._dollyEnd = new ne(), this._dollyDelta = new ne(), this._dollyDirection = new L(), this._mouse = new ne(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = ov.bind(this), this._onPointerDown = av.bind(this), this._onPointerUp = lv.bind(this), this._onContextMenu = mv.bind(this), this._onMouseWheel = uv.bind(this), this._onKeyDown = fv.bind(this), this._onTouchStart = dv.bind(this), this._onTouchMove = pv.bind(this), this._onMouseDown = cv.bind(this), this._onMouseMove = hv.bind(this), this._interceptControlDown = gv.bind(this), this._interceptControlUp = _v.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  set cursorStyle(e) {
    this._cursorStyle = e, e === "grab" ? this.domElement.style.cursor = "grab" : this.domElement.style.cursor = "auto";
  }
  get cursorStyle() {
    return this._cursorStyle;
  }
  connect(e) {
    super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.ownerDocument.addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.state = je.NONE, this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.ownerDocument.removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.ownerDocument.removeEventListener("keyup", this._interceptControlUp, { capture: true }), this._controlActive = false, this._pointers.length = 0, this._pointerPositions = {}, this.domElement.style.touchAction = "", this.domElement.style.cursor = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(oc), this.update(), this.state = je.NONE;
  }
  pan(e, t) {
    this._pan(e, t), this.update();
  }
  dollyIn(e) {
    this._dollyIn(e), this.update();
  }
  dollyOut(e) {
    this._dollyOut(e), this.update();
  }
  rotateLeft(e) {
    this._rotateLeft(e), this.update();
  }
  rotateUp(e) {
    this._rotateUp(e), this.update();
  }
  update(e = null) {
    const t = this.object.position;
    St.copy(t).sub(this.target), St.applyQuaternion(this._quat), this._spherical.setFromVector3(St), this.autoRotate && this.state === je.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let i = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(i) && isFinite(s) && (i < -Math.PI ? i += Wt : i > Math.PI && (i -= Wt), s < -Math.PI ? s += Wt : s > Math.PI && (s -= Wt), i <= s ? this._spherical.theta = Math.max(i, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (i + s) / 2 ? Math.max(i, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (St.setFromSpherical(this._spherical), St.applyQuaternion(this._quatInverse), t.copy(this.target).add(St), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = St.length();
        a = this._clampDistance(o * this._scale);
        const c = o - a;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), r = !!c;
      } else if (this.object.isOrthographicCamera) {
        const o = new L(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = c !== this.object.zoom;
        const l = new L(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object), this.object.position.sub(l).add(o), this.object.updateMatrixWorld(), a = St.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (ar.origin.copy(this.object.position), ar.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(ar.direction)) < rv ? this.object.lookAt(this.target) : (lc.setFromNormalAndCoplanarPoint(this.object.up, this.target), ar.intersectPlane(lc, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > fa || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > fa || this._lastTargetPosition.distanceToSquared(this.target) > fa ? (this.dispatchEvent(oc), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? Wt / 60 * this.autoRotateSpeed * e : Wt / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    St.setFromMatrixColumn(t, 0), St.multiplyScalar(-e), this._panOffset.add(St);
  }
  _panUp(e, t) {
    this.screenSpacePanning === true ? St.setFromMatrixColumn(t, 1) : (St.setFromMatrixColumn(t, 0), St.crossVectors(this.object.up, St)), St.multiplyScalar(e), this._panOffset.add(St);
  }
  _pan(e, t) {
    const i = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      St.copy(s).sub(this.target);
      let r = St.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * r / i.clientHeight, this.object.matrix), this._panUp(2 * t * r / i.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / i.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / i.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const i = this.domElement.getBoundingClientRect(), s = e - i.left, r = t - i.top, a = i.width, o = i.height;
    this._mouse.x = s / a * 2 - 1, this._mouse.y = -(r / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientY), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Wt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Wt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.zoomToCursor && (this._performCursorZoom = true, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize()), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = false;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(Wt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = true;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-Wt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = true;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(Wt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = true;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-Wt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = true;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), i = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(i, s);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), i = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._panStart.set(i, s);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), i = e.pageX - t.x, s = e.pageY - t.y, r = Math.sqrt(i * i + s * s);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const i = this._getSecondPointerPosition(e), s = 0.5 * (e.pageX + i.x), r = 0.5 * (e.pageY + i.y);
      this._rotateEnd.set(s, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Wt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Wt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), i = 0.5 * (e.pageX + t.x), s = 0.5 * (e.pageY + t.y);
      this._panEnd.set(i, s);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), i = e.pageX - t.x, s = e.pageY - t.y, r = Math.sqrt(i * i + s * s);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (e.pageX + t.x) * 0.5, o = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
      this._pointers.splice(t, 1);
      return;
    }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return true;
    return false;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new ne(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    const t = e.deltaMode, i = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
    switch (t) {
      case 1:
        i.deltaY *= 16;
        break;
      case 2:
        i.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (i.deltaY *= 10), i;
  }
}
function av(n) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(n.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(n) && (this._addPointer(n), n.pointerType === "touch" ? this._onTouchStart(n) : this._onMouseDown(n), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
}
function ov(n) {
  this.enabled !== false && (n.pointerType === "touch" ? this._onTouchMove(n) : this._onMouseMove(n));
}
function lv(n) {
  switch (this._removePointer(n), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(n.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(yh), this.state = je.NONE, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function cv(n) {
  let e;
  switch (n.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case Ui.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(n), this.state = je.DOLLY;
      break;
    case Ui.ROTATE:
      if (n.ctrlKey || n.metaKey || n.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(n), this.state = je.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(n), this.state = je.ROTATE;
      }
      break;
    case Ui.PAN:
      if (n.ctrlKey || n.metaKey || n.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(n), this.state = je.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(n), this.state = je.PAN;
      }
      break;
    default:
      this.state = je.NONE;
  }
  this.state !== je.NONE && this.dispatchEvent(Ao);
}
function hv(n) {
  switch (this.state) {
    case je.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(n);
      break;
    case je.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(n);
      break;
    case je.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(n);
      break;
  }
}
function uv(n) {
  this.enabled === false || this.enableZoom === false || this.state !== je.NONE || (n.preventDefault(), this.dispatchEvent(Ao), this._handleMouseWheel(this._customWheelEvent(n)), this.dispatchEvent(yh));
}
function fv(n) {
  this.enabled !== false && this._handleKeyDown(n);
}
function dv(n) {
  switch (this._trackPointer(n), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Ii.ROTATE:
          if (this.enableRotate === false) {
            this.state = je.NONE;
            break;
          }
          this._handleTouchStartRotate(n), this.state = je.TOUCH_ROTATE;
          break;
        case Ii.PAN:
          if (this.enablePan === false) {
            this.state = je.NONE;
            break;
          }
          this._handleTouchStartPan(n), this.state = je.TOUCH_PAN;
          break;
        default:
          this.state = je.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Ii.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(n), this.state = je.TOUCH_DOLLY_PAN;
          break;
        case Ii.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(n), this.state = je.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = je.NONE;
      }
      break;
    default:
      this.state = je.NONE;
  }
  this.state !== je.NONE && this.dispatchEvent(Ao);
}
function pv(n) {
  switch (this._trackPointer(n), this.state) {
    case je.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(n), this.update();
      break;
    case je.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(n), this.update();
      break;
    case je.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(n), this.update();
      break;
    case je.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(n), this.update();
      break;
    default:
      this.state = je.NONE;
  }
}
function mv(n) {
  this.enabled !== false && n.preventDefault();
}
function gv(n) {
  n.key === "Control" && (this._controlActive = true, this.domElement.ownerDocument.addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function _v(n) {
  n.key === "Control" && (this._controlActive = false, this.domElement.ownerDocument.removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
const Pi = new Fn(0, 0, 0, "YXZ"), Di = new L(), vv = { type: "change" }, xv = { type: "lock" }, Sv = { type: "unlock" }, cc = 2e-3, hc = Math.PI / 2;
class Xv extends rh {
  constructor(e, t = null) {
    super(e, t), this.isLocked = false, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.pointerSpeed = 1, this._onMouseMove = Mv.bind(this), this._onPointerlockChange = Ev.bind(this), this._onPointerlockError = yv.bind(this), this.domElement !== null && this.connect(this.domElement);
  }
  connect(e) {
    super.connect(e), this.domElement.ownerDocument.addEventListener("mousemove", this._onMouseMove), this.domElement.ownerDocument.addEventListener("pointerlockchange", this._onPointerlockChange), this.domElement.ownerDocument.addEventListener("pointerlockerror", this._onPointerlockError);
  }
  disconnect() {
    this.domElement.ownerDocument.removeEventListener("mousemove", this._onMouseMove), this.domElement.ownerDocument.removeEventListener("pointerlockchange", this._onPointerlockChange), this.domElement.ownerDocument.removeEventListener("pointerlockerror", this._onPointerlockError);
  }
  dispose() {
    this.disconnect();
  }
  getDirection(e) {
    return e.set(0, 0, -1).applyQuaternion(this.object.quaternion);
  }
  moveForward(e) {
    if (this.enabled === false) return;
    const t = this.object;
    Di.setFromMatrixColumn(t.matrix, 0), Di.crossVectors(t.up, Di), t.position.addScaledVector(Di, e);
  }
  moveRight(e) {
    if (this.enabled === false) return;
    const t = this.object;
    Di.setFromMatrixColumn(t.matrix, 0), t.position.addScaledVector(Di, e);
  }
  lock(e = false) {
    this.domElement.requestPointerLock({ unadjustedMovement: e });
  }
  unlock() {
    this.domElement.ownerDocument.exitPointerLock();
  }
}
function Mv(n) {
  if (this.enabled === false || this.isLocked === false) return;
  const e = this.object;
  Pi.setFromQuaternion(e.quaternion), Pi.y -= n.movementX * cc * this.pointerSpeed, Pi.x -= n.movementY * cc * this.pointerSpeed, Pi.x = Math.max(hc - this.maxPolarAngle, Math.min(hc - this.minPolarAngle, Pi.x)), e.quaternion.setFromEuler(Pi), this.dispatchEvent(vv);
}
function Ev() {
  this.domElement.ownerDocument.pointerLockElement === this.domElement ? (this.dispatchEvent(xv), this.isLocked = true) : (this.dispatchEvent(Sv), this.isLocked = false);
}
function yv() {
  console.error("THREE.PointerLockControls: Unable to use Pointer Lock API");
}
function uc(n, e) {
  const t = n.getUint32(e, true);
  e += 4;
  let i = "";
  for (let s = 0; s < t; s++) i += String.fromCharCode(n.getUint8(e++));
  return { value: i, size: 4 + t };
}
function ji(n, e) {
  const t = {}, i = n.getUint32(e, true);
  e += 4;
  let s = 4;
  for (let r = 0; r < i; r++) {
    const a = uc(n, e);
    e += a.size, s += a.size;
    const o = uc(n, e);
    e += o.size, s += o.size, t[a.value] = o.value;
  }
  return { value: t, size: s };
}
function Tv(n) {
  const e = n & 3, t = n >> 2 & 3, i = n >> 4 & 1 ? -1 : 1, s = n >> 5 & 1 ? -1 : 1, r = n >> 6 & 1 ? -1 : 1, a = 3 - e - t, o = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  o[0][e] = i, o[1][t] = s, o[2][a] = r;
  const c = new $e();
  return c.set(o[0][0], o[0][2], -o[0][1], 0, o[2][0], o[2][2], -o[2][1], 0, -o[1][0], -o[1][2], o[1][1], 0, 0, 0, 0, 1), c;
}
function fc(n, e) {
  if (e.attributes._name && (n.name = e.attributes._name), e.frames.length > 0) {
    const t = e.frames[0];
    t.rotation && n.applyMatrix4(t.rotation), t.translation && n.position.set(t.translation.x, t.translation.z, -t.translation.y);
  }
}
function mr(n, e, t) {
  const i = e[n];
  if (i.type === "transform") {
    const s = e[i.childNodeId], r = i.frames[0], a = r && (r.rotation || r.translation);
    if (s.type === "shape" && s.models.length === 1) {
      const l = t[s.models[0].modelId], h = da(l);
      return fc(h, i), h;
    }
    if (!a) {
      const l = mr(i.childNodeId, e, t);
      return l && i.attributes._name && (l.name = i.attributes._name), l;
    }
    const o = new si();
    fc(o, i);
    const c = mr(i.childNodeId, e, t);
    return c && o.add(c), o;
  } else if (i.type === "group") {
    const s = new si();
    for (const r of i.childIds) {
      const a = mr(r, e, t);
      a && s.add(a);
    }
    return s;
  } else if (i.type === "shape") {
    if (i.models.length === 1) {
      const r = t[i.models[0].modelId];
      return da(r);
    }
    const s = new si();
    for (const r of i.models) {
      const a = t[r.modelId];
      s.add(da(a));
    }
    return s;
  }
  return null;
}
class Yv extends Es {
  load(e, t, i, s) {
    const r = this, a = new Xf(r.manager);
    a.setPriority(r.priority), a.setCache(r.cache), a.setPath(r.path), a.setResponseType("arraybuffer"), a.setRequestHeader(r.requestHeader), a.setWithCredentials(r.withCredentials), a.load(e, function(o) {
      try {
        t(r.parse(o));
      } catch (c) {
        s ? s(c) : console.error(c), r.manager.itemError(e);
      }
    }, i, s);
  }
  parse(e) {
    const t = new DataView(e), i = t.getUint32(0, true), s = t.getUint32(4, true);
    if (i !== 542658390) {
      console.error("THREE.VOXLoader: Invalid VOX file.");
      return;
    }
    if (s !== 150 && s !== 200) {
      console.error("THREE.VOXLoader: Invalid VOX file. Unsupported version:", s);
      return;
    }
    const r = [0, 4294967295, 4291624959, 4288282623, 4284940287, 4281597951, 4278255615, 4294954239, 4291611903, 4288269567, 4284927231, 4281584895, 4278242559, 4294941183, 4291598847, 4288256511, 4284914175, 4281571839, 4278229503, 4294928127, 4291585791, 4288243455, 4284901119, 4281558783, 4278216447, 4294915071, 4291572735, 4288230399, 4284888063, 4281545727, 4278203391, 4294902015, 4291559679, 4288217343, 4284875007, 4281532671, 4278190335, 4294967244, 4291624908, 4288282572, 4284940236, 4281597900, 4278255564, 4294954188, 4291611852, 4288269516, 4284927180, 4281584844, 4278242508, 4294941132, 4291598796, 4288256460, 4284914124, 4281571788, 4278229452, 4294928076, 4291585740, 4288243404, 4284901068, 4281558732, 4278216396, 4294915020, 4291572684, 4288230348, 4284888012, 4281545676, 4278203340, 4294901964, 4291559628, 4288217292, 4284874956, 4281532620, 4278190284, 4294967193, 4291624857, 4288282521, 4284940185, 4281597849, 4278255513, 4294954137, 4291611801, 4288269465, 4284927129, 4281584793, 4278242457, 4294941081, 4291598745, 4288256409, 4284914073, 4281571737, 4278229401, 4294928025, 4291585689, 4288243353, 4284901017, 4281558681, 4278216345, 4294914969, 4291572633, 4288230297, 4284887961, 4281545625, 4278203289, 4294901913, 4291559577, 4288217241, 4284874905, 4281532569, 4278190233, 4294967142, 4291624806, 4288282470, 4284940134, 4281597798, 4278255462, 4294954086, 4291611750, 4288269414, 4284927078, 4281584742, 4278242406, 4294941030, 4291598694, 4288256358, 4284914022, 4281571686, 4278229350, 4294927974, 4291585638, 4288243302, 4284900966, 4281558630, 4278216294, 4294914918, 4291572582, 4288230246, 4284887910, 4281545574, 4278203238, 4294901862, 4291559526, 4288217190, 4284874854, 4281532518, 4278190182, 4294967091, 4291624755, 4288282419, 4284940083, 4281597747, 4278255411, 4294954035, 4291611699, 4288269363, 4284927027, 4281584691, 4278242355, 4294940979, 4291598643, 4288256307, 4284913971, 4281571635, 4278229299, 4294927923, 4291585587, 4288243251, 4284900915, 4281558579, 4278216243, 4294914867, 4291572531, 4288230195, 4284887859, 4281545523, 4278203187, 4294901811, 4291559475, 4288217139, 4284874803, 4281532467, 4278190131, 4294967040, 4291624704, 4288282368, 4284940032, 4281597696, 4278255360, 4294953984, 4291611648, 4288269312, 4284926976, 4281584640, 4278242304, 4294940928, 4291598592, 4288256256, 4284913920, 4281571584, 4278229248, 4294927872, 4291585536, 4288243200, 4284900864, 4281558528, 4278216192, 4294914816, 4291572480, 4288230144, 4284887808, 4281545472, 4278203136, 4294901760, 4291559424, 4288217088, 4284874752, 4281532416, 4278190318, 4278190301, 4278190267, 4278190250, 4278190216, 4278190199, 4278190165, 4278190148, 4278190114, 4278190097, 4278251008, 4278246656, 4278237952, 4278233600, 4278224896, 4278220544, 4278211840, 4278207488, 4278198784, 4278194432, 4293787648, 4292673536, 4290445312, 4289331200, 4287102976, 4285988864, 4283760640, 4282646528, 4280418304, 4279304192, 4293848814, 4292730333, 4290493371, 4289374890, 4287137928, 4286019447, 4283782485, 4282664004, 4280427042, 4279308561];
    let a = 8, o;
    const c = [], l = {};
    let h = r;
    for (; a < t.byteLength; ) {
      let g = "";
      for (let p = 0; p < 4; p++) g += String.fromCharCode(t.getUint8(a++));
      const S = t.getUint32(a, true);
      if (a += 4, a += 4, g === "SIZE") {
        const p = t.getUint32(a, true);
        a += 4;
        const m = t.getUint32(a, true);
        a += 4;
        const M = t.getUint32(a, true);
        a += 4, o = { palette: r, size: { x: p, y: m, z: M } }, c.push(o), a += S - 12;
      } else if (g === "XYZI") {
        const p = t.getUint32(a, true);
        a += 4, o.data = new Uint8Array(e, a, p * 4), a += p * 4;
      } else if (g === "RGBA") {
        h = [0];
        for (let p = 0; p < 256; p++) h[p + 1] = t.getUint32(a, true), a += 4;
        o.palette = h;
      } else if (g === "nTRN") {
        const p = t.getUint32(a, true);
        a += 4;
        const m = ji(t, a);
        a += m.size;
        const M = t.getUint32(a, true);
        a += 4, a += 4;
        const T = t.getInt32(a, true);
        a += 4;
        const E = t.getUint32(a, true);
        a += 4;
        const R = [];
        for (let A = 0; A < E; A++) {
          const _ = ji(t, a);
          a += _.size;
          const y = { rotation: null, translation: null };
          if (_.value._r !== void 0 && (y.rotation = Tv(parseInt(_.value._r))), _.value._t !== void 0) {
            const N = _.value._t.split(" ").map(Number);
            y.translation = { x: N[0], y: N[1], z: N[2] };
          }
          R.push(y);
        }
        l[p] = { type: "transform", id: p, attributes: m.value, childNodeId: M, layerId: T, frames: R };
      } else if (g === "nGRP") {
        const p = t.getUint32(a, true);
        a += 4;
        const m = ji(t, a);
        a += m.size;
        const M = t.getUint32(a, true);
        a += 4;
        const T = [];
        for (let E = 0; E < M; E++) T.push(t.getUint32(a, true)), a += 4;
        l[p] = { type: "group", id: p, attributes: m.value, childIds: T };
      } else if (g === "nSHP") {
        const p = t.getUint32(a, true);
        a += 4;
        const m = ji(t, a);
        a += m.size;
        const M = t.getUint32(a, true);
        a += 4;
        const T = [];
        for (let E = 0; E < M; E++) {
          const R = t.getUint32(a, true);
          a += 4;
          const A = ji(t, a);
          a += A.size, T.push({ modelId: R, attributes: A.value });
        }
        l[p] = { type: "shape", id: p, attributes: m.value, models: T };
      } else a += S;
    }
    for (let g = 0; g < c.length; g++) c[g].palette = h;
    let u = null;
    Object.keys(l).length > 0 && (u = mr(0, l, c));
    const d = { chunks: c, scene: u };
    let f = false;
    return new Proxy(d, { get(g, S) {
      return typeof S == "string" && /^\d+$/.test(S) ? (f || (console.warn("THREE.VOXLoader: Accessing result as an array is deprecated. Use result.chunks[] instead."), f = true), g.chunks[parseInt(S)]) : S === "length" ? (f || (console.warn("THREE.VOXLoader: Accessing result as an array is deprecated. Use result.chunks instead."), f = true), g.chunks.length) : S === Symbol.iterator ? (f || (console.warn("THREE.VOXLoader: Iterating result as an array is deprecated. Use result.chunks instead."), f = true), g.chunks[Symbol.iterator].bind(g.chunks)) : g[S];
    } });
  }
}
function da(n) {
  const e = n.data, t = n.size, i = n.palette, s = t.x, r = t.y, a = t.z, o = new Uint8Array(s * r * a);
  for (let p = 0; p < e.length; p += 4) {
    const m = e[p + 0], M = e[p + 1], T = e[p + 2], E = e[p + 3];
    o[m + M * s + T * s * r] = E;
  }
  const c = [], l = [], h = [], u = new He();
  let d = false;
  const f = [s, r, a];
  for (let p = 0; p < 3; p++) {
    const m = (p + 1) % 3, M = (p + 2) % 3, T = f[p], E = f[m], R = f[M], A = [0, 0, 0], _ = new Int16Array(E * R);
    A[p] = 1;
    for (let y = 0; y <= T; y++) {
      let N = 0;
      for (let P = 0; P < R; P++) for (let I = 0; I < E; I++) {
        const F = [0, 0, 0];
        F[p] = y, F[m] = I, F[M] = P;
        const G = F[0], C = F[1], W = F[2], k = y > 0 ? o[G - A[0] + (C - A[1]) * s + (W - A[2]) * s * r] : 0, H = y < T ? o[G + C * s + W * s * r] : 0;
        k > 0 && H === 0 ? _[N] = k : H > 0 && k === 0 ? _[N] = -H : _[N] = 0, N++;
      }
      N = 0;
      for (let P = 0; P < R; P++) for (let I = 0; I < E; ) {
        const F = _[N];
        if (F !== 0) {
          let G = 1;
          for (; I + G < E && _[N + G] === F; ) G++;
          let C = 1, W = false;
          for (; P + C < R && !W; ) {
            for (let Ke = 0; Ke < G; Ke++) if (_[N + Ke + C * E] !== F) {
              W = true;
              break;
            }
            W || C++;
          }
          const k = [0, 0, 0];
          k[p] = y, k[m] = I, k[M] = P;
          const H = [0, 0, 0], ee = [0, 0, 0];
          H[m] = G, ee[M] = C;
          const X = Math.abs(F), Q = i[X], j = (Q >> 0 & 255) / 255, Se = (Q >> 8 & 255) / 255, Le = (Q >> 16 & 255) / 255;
          (j > 0 || Se > 0 || Le > 0) && (d = true), u.setRGB(j, Se, Le, Ye);
          const q = (Ke) => [Ke[0] - s / 2, Ke[2] - a / 2, -Ke[1] + r / 2], de = q(k), ve = q([k[0] + H[0], k[1] + H[1], k[2] + H[2]]), Ae = q([k[0] + H[0] + ee[0], k[1] + H[1] + ee[1], k[2] + H[2] + ee[2]]), pe = q([k[0] + ee[0], k[1] + ee[1], k[2] + ee[2]]), be = c.length / 3;
          F > 0 ? (c.push(...de, ...ve, ...Ae, ...pe), l.push(be, be + 1, be + 2, be, be + 2, be + 3)) : (c.push(...de, ...pe, ...Ae, ...ve), l.push(be, be + 1, be + 2, be, be + 2, be + 3)), h.push(u.r, u.g, u.b, u.r, u.g, u.b, u.r, u.g, u.b, u.r, u.g, u.b);
          for (let Ke = 0; Ke < C; Ke++) for (let we = 0; we < G; we++) _[N + we + Ke * E] = 0;
          I += G, N += G;
        } else I++, N++;
      }
    }
  }
  const g = new kt();
  g.setAttribute("position", new dt(c, 3)), g.setIndex(l), g.computeVertexNormals();
  const S = new zf();
  return d && (g.setAttribute("color", new dt(h, 3)), S.vertexColors = true), new un(g, S);
}
export {
  hn as $,
  gr as A,
  kt as B,
  Pv as C,
  Zt as D,
  zv as E,
  co as F,
  ko as G,
  lt as H,
  Rv as I,
  Dn as J,
  vn as K,
  Ct as L,
  un as M,
  Lt as N,
  To as O,
  qt as P,
  oo as Q,
  kv as R,
  tl as S,
  Nv as T,
  Ce as U,
  ne as V,
  Bv as W,
  pc as X,
  Bh as Y,
  Lh as Z,
  zo as _,
  Ar as a,
  Iv as a0,
  Ms as a1,
  sn as a2,
  gt as a3,
  Sn as a4,
  Gc as a5,
  Sa as a6,
  Dv as a7,
  _n as a8,
  Oi as a9,
  Yn as aa,
  Hf as ab,
  bv as ac,
  Gv as ad,
  Hv as ae,
  or as af,
  pr as ag,
  Lv as ah,
  Uv as ai,
  Nl as aj,
  Wv as ak,
  Xv as al,
  Jn as am,
  Yv as an,
  Ui as ao,
  dt as ap,
  wv as aq,
  Xc as ar,
  It as b,
  bu as c,
  He as d,
  Vv as e,
  xh as f,
  Ss as g,
  L as h,
  Ye as i,
  Qu as j,
  Cv as k,
  si as l,
  Ov as m,
  qu as n,
  th as o,
  So as p,
  zf as q,
  $u as r,
  $e as s,
  Pn as t,
  Yu as u,
  Av as v,
  pf as w,
  yl as x,
  eh as y,
  Du as z
};
