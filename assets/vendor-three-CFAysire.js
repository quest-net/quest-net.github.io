/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ai = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Ti = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Xc = 0, xo = 1, Yc = 2, Xl = 1, qc = 2, Mn = 3, En = 0, Et = 1, Wt = 2, At = 0, wi = 1, So = 2, Mo = 3, yo = 4, Zc = 5, Xn = 100, Kc = 101, Jc = 102, jc = 103, $c = 104, Qc = 200, eh = 201, th = 202, nh = 203, $r = 204, Qr = 205, ih = 206, sh = 207, rh = 208, ah = 209, oh = 210, lh = 211, ch = 212, hh = 213, uh = 214, ea = 0, ta = 1, na = 2, Ci = 3, ia = 4, sa = 5, ra = 6, aa = 7, Yl = 0, fh = 1, dh = 2, Un = 0, ph = 1, mh = 2, gh = 3, _h = 4, vh = 5, xh = 6, Sh = 7, ql = 300, Pi = 301, Di = 302, oa = 303, la = 304, or = 306, ca = 1e3, qn = 1001, ha = 1002, Yt = 1003, Mh = 1004, ms = 1005, Ft = 1006, dr = 1007, Zn = 1008, gt = 1009, Zl = 1010, Kl = 1011, ts = 1012, qa = 1013, In = 1014, cn = 1015, cs = 1016, Za = 1017, Ka = 1018, Ui = 1020, Jl = 35902, jl = 35899, $l = 1021, Ql = 1022, sn = 1023, ns = 1026, Li = 1027, Ja = 1028, ja = 1029, ec = 1030, $a = 1031, Qa = 1033, Js = 33776, js = 33777, $s = 33778, Qs = 33779, ua = 35840, fa = 35841, da = 35842, pa = 35843, ma = 36196, ga = 37492, _a = 37496, va = 37808, xa = 37809, Sa = 37810, Ma = 37811, ya = 37812, Ea = 37813, Ta = 37814, ba = 37815, Aa = 37816, wa = 37817, Ra = 37818, Ca = 37819, Pa = 37820, Da = 37821, Ua = 36492, La = 36494, Ia = 36495, Na = 36283, Fa = 36284, Oa = 36285, Ba = 36286, jn = 3200, yh = 3201, tc = 0, Eh = 1, ln = "", We = "srgb", Nn = "srgb-linear", nr = "linear", Qe = "srgb", ti = 7680, Eo = 519, Th = 512, bh = 513, Ah = 514, nc = 515, wh = 516, Rh = 517, Ch = 518, Ph = 519, za = 35044, To = "300 es", hn = 2e3, ir = 2001;
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
const Rt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let bo = 1234567;
const Ji = Math.PI / 180, is = 180 / Math.PI;
function un() {
  const n = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (Rt[n & 255] + Rt[n >> 8 & 255] + Rt[n >> 16 & 255] + Rt[n >> 24 & 255] + "-" + Rt[e & 255] + Rt[e >> 8 & 255] + "-" + Rt[e >> 16 & 15 | 64] + Rt[e >> 24 & 255] + "-" + Rt[t & 63 | 128] + Rt[t >> 8 & 255] + "-" + Rt[t >> 16 & 255] + Rt[t >> 24 & 255] + Rt[i & 255] + Rt[i >> 8 & 255] + Rt[i >> 16 & 255] + Rt[i >> 24 & 255]).toLowerCase();
}
function Be(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function eo(n, e) {
  return (n % e + e) % e;
}
function Dh(n, e, t, i, s) {
  return i + (n - e) * (s - i) / (t - e);
}
function Uh(n, e, t) {
  return n !== e ? (t - n) / (e - n) : 0;
}
function ji(n, e, t) {
  return (1 - t) * n + t * e;
}
function Lh(n, e, t, i) {
  return ji(n, e, 1 - Math.exp(-t * i));
}
function Ih(n, e = 1) {
  return e - Math.abs(eo(n, e * 2) - e);
}
function Nh(n, e, t) {
  return n <= e ? 0 : n >= t ? 1 : (n = (n - e) / (t - e), n * n * (3 - 2 * n));
}
function Fh(n, e, t) {
  return n <= e ? 0 : n >= t ? 1 : (n = (n - e) / (t - e), n * n * n * (n * (n * 6 - 15) + 10));
}
function Oh(n, e) {
  return n + Math.floor(Math.random() * (e - n + 1));
}
function Bh(n, e) {
  return n + Math.random() * (e - n);
}
function zh(n) {
  return n * (0.5 - Math.random());
}
function Hh(n) {
  n !== void 0 && (bo = n);
  let e = bo += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function kh(n) {
  return n * Ji;
}
function Gh(n) {
  return n * is;
}
function Vh(n) {
  return (n & n - 1) === 0 && n !== 0;
}
function Wh(n) {
  return Math.pow(2, Math.ceil(Math.log(n) / Math.LN2));
}
function Xh(n) {
  return Math.pow(2, Math.floor(Math.log(n) / Math.LN2));
}
function Yh(n, e, t, i, s) {
  const r = Math.cos, a = Math.sin, o = r(t / 2), l = a(t / 2), c = r((e + i) / 2), h = a((e + i) / 2), u = r((e - i) / 2), f = a((e - i) / 2), d = r((i - e) / 2), g = a((i - e) / 2);
  switch (s) {
    case "XYX":
      n.set(o * h, l * u, l * f, o * c);
      break;
    case "YZY":
      n.set(l * f, o * h, l * u, o * c);
      break;
    case "ZXZ":
      n.set(l * u, l * f, o * h, o * c);
      break;
    case "XZX":
      n.set(o * h, l * g, l * d, o * c);
      break;
    case "YXY":
      n.set(l * d, o * h, l * g, o * c);
      break;
    case "ZYZ":
      n.set(l * g, l * d, o * h, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s);
  }
}
function nn(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return n / 4294967295;
    case Uint16Array:
      return n / 65535;
    case Uint8Array:
      return n / 255;
    case Int32Array:
      return Math.max(n / 2147483647, -1);
    case Int16Array:
      return Math.max(n / 32767, -1);
    case Int8Array:
      return Math.max(n / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Je(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return Math.round(n * 4294967295);
    case Uint16Array:
      return Math.round(n * 65535);
    case Uint8Array:
      return Math.round(n * 255);
    case Int32Array:
      return Math.round(n * 2147483647);
    case Int16Array:
      return Math.round(n * 32767);
    case Int8Array:
      return Math.round(n * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const qh = { DEG2RAD: Ji, RAD2DEG: is, generateUUID: un, clamp: Be, euclideanModulo: eo, mapLinear: Dh, inverseLerp: Uh, lerp: ji, damp: Lh, pingpong: Ih, smoothstep: Nh, smootherstep: Fh, randInt: Oh, randFloat: Bh, randFloatSpread: zh, seededRandom: Hh, degToRad: kh, radToDeg: Gh, isPowerOfTwo: Vh, ceilPowerOfTwo: Wh, floorPowerOfTwo: Xh, setQuaternionFromProperEuler: Yh, normalize: Je, denormalize: nn };
class j {
  constructor(e = 0, t = 0) {
    j.prototype.isVector2 = true, this.x = e, this.y = t;
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
        throw new Error("index is out of range: " + e);
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
        throw new Error("index is out of range: " + e);
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
    return this.x = Be(this.x, e.x, t.x), this.y = Be(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = Be(this.x, e, t), this.y = Be(this.y, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Be(i, e, t));
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
    return Math.acos(Be(i, -1, 1));
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
}
class Kn {
  constructor(e = 0, t = 0, i = 0, s = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = i, this._w = s;
  }
  static slerpFlat(e, t, i, s, r, a, o) {
    let l = i[s + 0], c = i[s + 1], h = i[s + 2], u = i[s + 3];
    const f = r[a + 0], d = r[a + 1], g = r[a + 2], v = r[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = f, e[t + 1] = d, e[t + 2] = g, e[t + 3] = v;
      return;
    }
    if (u !== v || l !== f || c !== d || h !== g) {
      let m = 1 - o;
      const p = l * f + c * d + h * g + u * v, b = p >= 0 ? 1 : -1, E = 1 - p * p;
      if (E > Number.EPSILON) {
        const P = Math.sqrt(E), w = Math.atan2(P, p * b);
        m = Math.sin(m * w) / P, o = Math.sin(o * w) / P;
      }
      const S = o * b;
      if (l = l * m + f * S, c = c * m + d * S, h = h * m + g * S, u = u * m + v * S, m === 1 - o) {
        const P = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= P, c *= P, h *= P, u *= P;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, i, s, r, a) {
    const o = i[s], l = i[s + 1], c = i[s + 2], h = i[s + 3], u = r[a], f = r[a + 1], d = r[a + 2], g = r[a + 3];
    return e[t] = o * g + h * u + l * d - c * f, e[t + 1] = l * g + h * f + c * u - o * d, e[t + 2] = c * g + h * d + o * f - l * u, e[t + 3] = h * g - o * u - l * f - c * d, e;
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
    const i = e._x, s = e._y, r = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(i / 2), h = o(s / 2), u = o(r / 2), f = l(i / 2), d = l(s / 2), g = l(r / 2);
    switch (a) {
      case "XYZ":
        this._x = f * h * u + c * d * g, this._y = c * d * u - f * h * g, this._z = c * h * g + f * d * u, this._w = c * h * u - f * d * g;
        break;
      case "YXZ":
        this._x = f * h * u + c * d * g, this._y = c * d * u - f * h * g, this._z = c * h * g - f * d * u, this._w = c * h * u + f * d * g;
        break;
      case "ZXY":
        this._x = f * h * u - c * d * g, this._y = c * d * u + f * h * g, this._z = c * h * g + f * d * u, this._w = c * h * u - f * d * g;
        break;
      case "ZYX":
        this._x = f * h * u - c * d * g, this._y = c * d * u + f * h * g, this._z = c * h * g - f * d * u, this._w = c * h * u + f * d * g;
        break;
      case "YZX":
        this._x = f * h * u + c * d * g, this._y = c * d * u + f * h * g, this._z = c * h * g - f * d * u, this._w = c * h * u - f * d * g;
        break;
      case "XZY":
        this._x = f * h * u - c * d * g, this._y = c * d * u - f * h * g, this._z = c * h * g + f * d * u, this._w = c * h * u + f * d * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const i = t / 2, s = Math.sin(i);
    return this._x = e.x * s, this._y = e.y * s, this._z = e.z * s, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, i = t[0], s = t[4], r = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], u = t[10], f = i + o + u;
    if (f > 0) {
      const d = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / d, this._x = (h - l) * d, this._y = (r - c) * d, this._z = (a - s) * d;
    } else if (i > o && i > u) {
      const d = 2 * Math.sqrt(1 + i - o - u);
      this._w = (h - l) / d, this._x = 0.25 * d, this._y = (s + a) / d, this._z = (r + c) / d;
    } else if (o > u) {
      const d = 2 * Math.sqrt(1 + o - i - u);
      this._w = (r - c) / d, this._x = (s + a) / d, this._y = 0.25 * d, this._z = (l + h) / d;
    } else {
      const d = 2 * Math.sqrt(1 + u - i - o);
      this._w = (a - s) / d, this._x = (r + c) / d, this._y = (l + h) / d, this._z = 0.25 * d;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return i < 1e-8 ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Be(this.dot(e), -1, 1)));
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
    const i = e._x, s = e._y, r = e._z, a = e._w, o = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = i * h + a * o + s * c - r * l, this._y = s * h + a * l + r * o - i * c, this._z = r * h + a * c + i * l - s * o, this._w = a * h - i * o - s * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const i = this._x, s = this._y, r = this._z, a = this._w;
    let o = a * e._w + i * e._x + s * e._y + r * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = i, this._y = s, this._z = r, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const d = 1 - t;
      return this._w = d * a + t * this._w, this._x = d * i + t * this._x, this._y = d * s + t * this._y, this._z = d * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - t) * h) / c, f = Math.sin(t * h) / c;
    return this._w = a * u + this._w * f, this._x = i * u + this._x * f, this._y = s * u + this._y * f, this._z = r * u + this._z * f, this._onChangeCallback(), this;
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
class R {
  constructor(e = 0, t = 0, i = 0) {
    R.prototype.isVector3 = true, this.x = e, this.y = t, this.z = i;
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
        throw new Error("index is out of range: " + e);
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
        throw new Error("index is out of range: " + e);
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
    return this.applyQuaternion(Ao.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ao.setFromAxisAngle(e, t));
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
    const t = this.x, i = this.y, s = this.z, r = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * s - o * i), h = 2 * (o * t - r * s), u = 2 * (r * i - a * t);
    return this.x = t + l * c + a * u - o * h, this.y = i + l * h + o * c - r * u, this.z = s + l * u + r * h - a * c, this;
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
    return this.x = Be(this.x, e.x, t.x), this.y = Be(this.y, e.y, t.y), this.z = Be(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = Be(this.x, e, t), this.y = Be(this.y, e, t), this.z = Be(this.z, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Be(i, e, t));
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
    const i = e.x, s = e.y, r = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = s * l - r * o, this.y = r * a - i * l, this.z = i * o - s * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return pr.copy(this).projectOnVector(e), this.sub(pr);
  }
  reflect(e) {
    return this.sub(pr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(Be(i, -1, 1));
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
}
const pr = new R(), Ao = new Kn();
class Ne {
  constructor(e, t, i, s, r, a, o, l, c) {
    Ne.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, i, s, r, a, o, l, c);
  }
  set(e, t, i, s, r, a, o, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = s, h[2] = o, h[3] = t, h[4] = r, h[5] = l, h[6] = i, h[7] = a, h[8] = c, this;
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
    const i = e.elements, s = t.elements, r = this.elements, a = i[0], o = i[3], l = i[6], c = i[1], h = i[4], u = i[7], f = i[2], d = i[5], g = i[8], v = s[0], m = s[3], p = s[6], b = s[1], E = s[4], S = s[7], P = s[2], w = s[5], U = s[8];
    return r[0] = a * v + o * b + l * P, r[3] = a * m + o * E + l * w, r[6] = a * p + o * S + l * U, r[1] = c * v + h * b + u * P, r[4] = c * m + h * E + u * w, r[7] = c * p + h * S + u * U, r[2] = f * v + d * b + g * P, r[5] = f * m + d * E + g * w, r[8] = f * p + d * S + g * U, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[1], s = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8];
    return t * a * h - t * o * c - i * r * h + i * o * l + s * r * c - s * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], i = e[1], s = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = h * a - o * c, f = o * l - h * r, d = c * r - a * l, g = t * u + i * f + s * d;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / g;
    return e[0] = u * v, e[1] = (s * c - h * i) * v, e[2] = (o * i - s * a) * v, e[3] = f * v, e[4] = (h * t - s * l) * v, e[5] = (s * r - o * t) * v, e[6] = d * v, e[7] = (i * l - c * t) * v, e[8] = (a * t - i * r) * v, this;
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
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(i * l, i * c, -i * (l * a + c * o) + a + e, -s * c, s * l, -s * (-c * a + l * o) + o + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(mr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(mr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(mr.makeTranslation(e, t)), this;
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
}
const mr = new Ne();
function ic(n) {
  for (let e = n.length - 1; e >= 0; --e) if (n[e] >= 65535) return true;
  return false;
}
function ss(n) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", n);
}
function Zh() {
  const n = ss("canvas");
  return n.style.display = "block", n;
}
const wo = {};
function rs(n) {
  n in wo || (wo[n] = true, console.warn(n));
}
function Kh(n, e, t) {
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
const Ro = new Ne().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), Co = new Ne().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Jh() {
  const n = { enabled: true, workingColorSpace: Nn, spaces: {}, convert: function(s, r, a) {
    return this.enabled === false || r === a || !r || !a || (this.spaces[r].transfer === Qe && (s.r = yn(s.r), s.g = yn(s.g), s.b = yn(s.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Qe && (s.r = Ri(s.r), s.g = Ri(s.g), s.b = Ri(s.b))), s;
  }, workingToColorSpace: function(s, r) {
    return this.convert(s, this.workingColorSpace, r);
  }, colorSpaceToWorking: function(s, r) {
    return this.convert(s, r, this.workingColorSpace);
  }, getPrimaries: function(s) {
    return this.spaces[s].primaries;
  }, getTransfer: function(s) {
    return s === ln ? nr : this.spaces[s].transfer;
  }, getToneMappingMode: function(s) {
    return this.spaces[s].outputColorSpaceConfig.toneMappingMode || "standard";
  }, getLuminanceCoefficients: function(s, r = this.workingColorSpace) {
    return s.fromArray(this.spaces[r].luminanceCoefficients);
  }, define: function(s) {
    Object.assign(this.spaces, s);
  }, _getMatrix: function(s, r, a) {
    return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ);
  }, _getDrawingBufferColorSpace: function(s) {
    return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(s = this.workingColorSpace) {
    return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
  }, fromWorkingColorSpace: function(s, r) {
    return rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), n.workingToColorSpace(s, r);
  }, toWorkingColorSpace: function(s, r) {
    return rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), n.colorSpaceToWorking(s, r);
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], i = [0.3127, 0.329];
  return n.define({ [Nn]: { primaries: e, whitePoint: i, transfer: nr, toXYZ: Ro, fromXYZ: Co, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: We }, outputColorSpaceConfig: { drawingBufferColorSpace: We } }, [We]: { primaries: e, whitePoint: i, transfer: Qe, toXYZ: Ro, fromXYZ: Co, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: We } } }), n;
}
const Ye = Jh();
function yn(n) {
  return n < 0.04045 ? n * 0.0773993808 : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function Ri(n) {
  return n < 31308e-7 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
let ni;
class jh {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let i;
    if (e instanceof HTMLCanvasElement) i = e;
    else {
      ni === void 0 && (ni = ss("canvas")), ni.width = e.width, ni.height = e.height;
      const s = ni.getContext("2d");
      e instanceof ImageData ? s.putImageData(e, 0, 0) : s.drawImage(e, 0, 0, e.width, e.height), i = ni;
    }
    return i.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = ss("canvas");
      t.width = e.width, t.height = e.height;
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const s = i.getImageData(0, 0, e.width, e.height), r = s.data;
      for (let a = 0; a < r.length; a++) r[a] = yn(r[a] / 255) * 255;
      return i.putImageData(s, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(yn(t[i] / 255) * 255) : t[i] = yn(t[i]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let $h = 0;
class to {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: $h++ }), this.uuid = un(), this.data = e, this.dataReady = true, this.version = 0;
  }
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
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
        for (let a = 0, o = s.length; a < o; a++) s[a].isDataTexture ? r.push(gr(s[a].image)) : r.push(gr(s[a]));
      } else r = gr(s);
      i.url = r;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function gr(n) {
  return typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap ? jh.getDataURL(n) : n.data ? { data: Array.from(n.data), width: n.width, height: n.height, type: n.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Qh = 0;
const _r = new R();
class vt extends fn {
  constructor(e = vt.DEFAULT_IMAGE, t = vt.DEFAULT_MAPPING, i = qn, s = qn, r = Ft, a = Zn, o = sn, l = gt, c = vt.DEFAULT_ANISOTROPY, h = ln) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Qh++ }), this.uuid = un(), this.name = "", this.source = new to(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = i, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new j(0, 0), this.repeat = new j(1, 1), this.center = new j(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ne(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(_r).x;
  }
  get height() {
    return this.source.getSize(_r).y;
  }
  get depth() {
    return this.source.getSize(_r).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
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
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  setValues(e) {
    for (const t in e) {
      const i = e[t];
      if (i === void 0) {
        console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const s = this[t];
      if (s === void 0) {
        console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      s && i && s.isVector2 && i.isVector2 || s && i && s.isVector3 && i.isVector3 || s && i && s.isMatrix3 && i.isMatrix3 ? s.copy(i) : this[t] = i;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const i = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), t || (e.textures[this.uuid] = i), i;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== ql) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case ca:
        e.x = e.x - Math.floor(e.x);
        break;
      case qn:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case ha:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case ca:
        e.y = e.y - Math.floor(e.y);
        break;
      case qn:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case ha:
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
vt.DEFAULT_IMAGE = null;
vt.DEFAULT_MAPPING = ql;
vt.DEFAULT_ANISOTROPY = 1;
class lt {
  constructor(e = 0, t = 0, i = 0, s = 1) {
    lt.prototype.isVector4 = true, this.x = e, this.y = t, this.z = i, this.w = s;
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
        throw new Error("index is out of range: " + e);
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
        throw new Error("index is out of range: " + e);
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
    const l = e.elements, c = l[0], h = l[4], u = l[8], f = l[1], d = l[5], g = l[9], v = l[2], m = l[6], p = l[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(u - v) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(u + v) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(c + d + p - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const E = (c + 1) / 2, S = (d + 1) / 2, P = (p + 1) / 2, w = (h + f) / 4, U = (u + v) / 4, N = (g + m) / 4;
      return E > S && E > P ? E < 0.01 ? (i = 0, s = 0.707106781, r = 0.707106781) : (i = Math.sqrt(E), s = w / i, r = U / i) : S > P ? S < 0.01 ? (i = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(S), i = w / s, r = N / s) : P < 0.01 ? (i = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(P), i = U / r, s = N / r), this.set(i, s, r, t), this;
    }
    let b = Math.sqrt((m - g) * (m - g) + (u - v) * (u - v) + (f - h) * (f - h));
    return Math.abs(b) < 1e-3 && (b = 1), this.x = (m - g) / b, this.y = (u - v) / b, this.z = (f - h) / b, this.w = Math.acos((c + d + p - 1) / 2), this;
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
    return this.x = Be(this.x, e.x, t.x), this.y = Be(this.y, e.y, t.y), this.z = Be(this.z, e.z, t.z), this.w = Be(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = Be(this.x, e, t), this.y = Be(this.y, e, t), this.z = Be(this.z, e, t), this.w = Be(this.w, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Be(i, e, t));
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
}
class eu extends fn {
  constructor(e = 1, t = 1, i = {}) {
    super(), i = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Ft, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, i), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = i.depth, this.scissor = new lt(0, 0, e, t), this.scissorTest = false, this.viewport = new lt(0, 0, e, t);
    const s = { width: e, height: t, depth: i.depth }, r = new vt(s);
    this.textures = [];
    const a = i.count;
    for (let o = 0; o < a; o++) this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = true, this.textures[o].renderTarget = this;
    this._setTextureOptions(i), this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.resolveDepthBuffer = i.resolveDepthBuffer, this.resolveStencilBuffer = i.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = i.depthTexture, this.samples = i.samples, this.multiview = i.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = { minFilter: Ft, generateMipmaps: false, flipY: false, internalFormat: null };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let i = 0; i < this.textures.length; i++) this.textures[i].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, i = 1) {
    if (this.width !== e || this.height !== t || this.depth !== i) {
      this.width = e, this.height = t, this.depth = i;
      for (let s = 0, r = this.textures.length; s < r; s++) this.textures[s].image.width = e, this.textures[s].image.height = t, this.textures[s].image.depth = i, this.textures[s].isArrayTexture = this.textures[s].image.depth > 1;
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
      this.textures[t].source = new to(s);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Pt extends eu {
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), this.isWebGLRenderTarget = true;
  }
}
class sc extends vt {
  constructor(e = null, t = 1, i = 1, s = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: i, depth: s }, this.magFilter = Yt, this.minFilter = Yt, this.wrapR = qn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class tu extends vt {
  constructor(e = null, t = 1, i = 1, s = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: i, depth: s }, this.magFilter = Yt, this.minFilter = Yt, this.wrapR = qn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class $n {
  constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3) this.expandByPoint(Qt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++) this.expandByPoint(Qt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = Qt.copy(t).multiplyScalar(0.5);
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
      if (t === true && r !== void 0 && e.isInstancedMesh !== true) for (let a = 0, o = r.count; a < o; a++) e.isMesh === true ? e.getVertexPosition(a, Qt) : Qt.fromBufferAttribute(r, a), Qt.applyMatrix4(e.matrixWorld), this.expandByPoint(Qt);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), gs.copy(e.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), gs.copy(i.boundingBox)), gs.applyMatrix4(e.matrixWorld), this.union(gs);
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
    return this.clampPoint(e.center, Qt), Qt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, i;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(Bi), _s.subVectors(this.max, Bi), ii.subVectors(e.a, Bi), si.subVectors(e.b, Bi), ri.subVectors(e.c, Bi), Tn.subVectors(si, ii), bn.subVectors(ri, si), Bn.subVectors(ii, ri);
    let t = [0, -Tn.z, Tn.y, 0, -bn.z, bn.y, 0, -Bn.z, Bn.y, Tn.z, 0, -Tn.x, bn.z, 0, -bn.x, Bn.z, 0, -Bn.x, -Tn.y, Tn.x, 0, -bn.y, bn.x, 0, -Bn.y, Bn.x, 0];
    return !vr(t, ii, si, ri, _s) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !vr(t, ii, si, ri, _s)) ? false : (vs.crossVectors(Tn, bn), t = [vs.x, vs.y, vs.z], vr(t, ii, si, ri, _s));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Qt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Qt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (gn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), gn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), gn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), gn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), gn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), gn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), gn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), gn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(gn), this);
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
const gn = [new R(), new R(), new R(), new R(), new R(), new R(), new R(), new R()], Qt = new R(), gs = new $n(), ii = new R(), si = new R(), ri = new R(), Tn = new R(), bn = new R(), Bn = new R(), Bi = new R(), _s = new R(), vs = new R(), zn = new R();
function vr(n, e, t, i, s) {
  for (let r = 0, a = n.length - 3; r <= a; r += 3) {
    zn.fromArray(n, r);
    const o = s.x * Math.abs(zn.x) + s.y * Math.abs(zn.y) + s.z * Math.abs(zn.z), l = e.dot(zn), c = t.dot(zn), h = i.dot(zn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return false;
  }
  return true;
}
const nu = new $n(), zi = new R(), xr = new R();
class Qn {
  constructor(e = new R(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : nu.setFromPoints(e).getCenter(i);
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
    zi.subVectors(e, this.center);
    const t = zi.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t), s = (i - this.radius) * 0.5;
      this.center.addScaledVector(zi, s / i), this.radius += s;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (xr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(zi.copy(e.center).add(xr)), this.expandByPoint(zi.copy(e.center).sub(xr))), this);
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
const _n = new R(), Sr = new R(), xs = new R(), An = new R(), Mr = new R(), Ss = new R(), yr = new R();
class hs {
  constructor(e = new R(), t = new R(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, _n)), this;
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
    const t = _n.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (_n.copy(this.origin).addScaledVector(this.direction, t), _n.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, s) {
    Sr.copy(e).add(t).multiplyScalar(0.5), xs.copy(t).sub(e).normalize(), An.copy(this.origin).sub(Sr);
    const r = e.distanceTo(t) * 0.5, a = -this.direction.dot(xs), o = An.dot(this.direction), l = -An.dot(xs), c = An.lengthSq(), h = Math.abs(1 - a * a);
    let u, f, d, g;
    if (h > 0) if (u = a * l - o, f = a * o - l, g = r * h, u >= 0) if (f >= -g) if (f <= g) {
      const v = 1 / h;
      u *= v, f *= v, d = u * (u + a * f + 2 * o) + f * (a * u + f + 2 * l) + c;
    } else f = r, u = Math.max(0, -(a * f + o)), d = -u * u + f * (f + 2 * l) + c;
    else f = -r, u = Math.max(0, -(a * f + o)), d = -u * u + f * (f + 2 * l) + c;
    else f <= -g ? (u = Math.max(0, -(-a * r + o)), f = u > 0 ? -r : Math.min(Math.max(-r, -l), r), d = -u * u + f * (f + 2 * l) + c) : f <= g ? (u = 0, f = Math.min(Math.max(-r, -l), r), d = f * (f + 2 * l) + c) : (u = Math.max(0, -(a * r + o)), f = u > 0 ? r : Math.min(Math.max(-r, -l), r), d = -u * u + f * (f + 2 * l) + c);
    else f = a > 0 ? -r : r, u = Math.max(0, -(a * f + o)), d = -u * u + f * (f + 2 * l) + c;
    return i && i.copy(this.origin).addScaledVector(this.direction, u), s && s.copy(Sr).addScaledVector(xs, f), d;
  }
  intersectSphere(e, t) {
    _n.subVectors(e.center, this.origin);
    const i = _n.dot(this.direction), s = _n.dot(_n) - i * i, r = e.radius * e.radius;
    if (s > r) return null;
    const a = Math.sqrt(r - s), o = i - a, l = i + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
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
    let i, s, r, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (i = (e.min.x - f.x) * c, s = (e.max.x - f.x) * c) : (i = (e.max.x - f.x) * c, s = (e.min.x - f.x) * c), h >= 0 ? (r = (e.min.y - f.y) * h, a = (e.max.y - f.y) * h) : (r = (e.max.y - f.y) * h, a = (e.min.y - f.y) * h), i > a || r > s || ((r > i || isNaN(i)) && (i = r), (a < s || isNaN(s)) && (s = a), u >= 0 ? (o = (e.min.z - f.z) * u, l = (e.max.z - f.z) * u) : (o = (e.max.z - f.z) * u, l = (e.min.z - f.z) * u), i > l || o > s) || ((o > i || i !== i) && (i = o), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(i >= 0 ? i : s, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, _n) !== null;
  }
  intersectTriangle(e, t, i, s, r) {
    Mr.subVectors(t, e), Ss.subVectors(i, e), yr.crossVectors(Mr, Ss);
    let a = this.direction.dot(yr), o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    An.subVectors(this.origin, e);
    const l = o * this.direction.dot(Ss.crossVectors(An, Ss));
    if (l < 0) return null;
    const c = o * this.direction.dot(Mr.cross(An));
    if (c < 0 || l + c > a) return null;
    const h = -o * An.dot(yr);
    return h < 0 ? null : this.at(h / a, r);
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
class je {
  constructor(e, t, i, s, r, a, o, l, c, h, u, f, d, g, v, m) {
    je.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, i, s, r, a, o, l, c, h, u, f, d, g, v, m);
  }
  set(e, t, i, s, r, a, o, l, c, h, u, f, d, g, v, m) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = i, p[12] = s, p[1] = r, p[5] = a, p[9] = o, p[13] = l, p[2] = c, p[6] = h, p[10] = u, p[14] = f, p[3] = d, p[7] = g, p[11] = v, p[15] = m, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new je().fromArray(this.elements);
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
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, i) {
    return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements, i = e.elements, s = 1 / ai.setFromMatrixColumn(e, 0).length(), r = 1 / ai.setFromMatrixColumn(e, 1).length(), a = 1 / ai.setFromMatrixColumn(e, 2).length();
    return t[0] = i[0] * s, t[1] = i[1] * s, t[2] = i[2] * s, t[3] = 0, t[4] = i[4] * r, t[5] = i[5] * r, t[6] = i[6] * r, t[7] = 0, t[8] = i[8] * a, t[9] = i[9] * a, t[10] = i[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, i = e.x, s = e.y, r = e.z, a = Math.cos(i), o = Math.sin(i), l = Math.cos(s), c = Math.sin(s), h = Math.cos(r), u = Math.sin(r);
    if (e.order === "XYZ") {
      const f = a * h, d = a * u, g = o * h, v = o * u;
      t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = d + g * c, t[5] = f - v * c, t[9] = -o * l, t[2] = v - f * c, t[6] = g + d * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const f = l * h, d = l * u, g = c * h, v = c * u;
      t[0] = f + v * o, t[4] = g * o - d, t[8] = a * c, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = d * o - g, t[6] = v + f * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const f = l * h, d = l * u, g = c * h, v = c * u;
      t[0] = f - v * o, t[4] = -a * u, t[8] = g + d * o, t[1] = d + g * o, t[5] = a * h, t[9] = v - f * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const f = a * h, d = a * u, g = o * h, v = o * u;
      t[0] = l * h, t[4] = g * c - d, t[8] = f * c + v, t[1] = l * u, t[5] = v * c + f, t[9] = d * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const f = a * l, d = a * c, g = o * l, v = o * c;
      t[0] = l * h, t[4] = v - f * u, t[8] = g * u + d, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = d * u + g, t[10] = f - v * u;
    } else if (e.order === "XZY") {
      const f = a * l, d = a * c, g = o * l, v = o * c;
      t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = f * u + v, t[5] = a * h, t[9] = d * u - g, t[2] = g * u - d, t[6] = o * h, t[10] = v * u + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(iu, e, su);
  }
  lookAt(e, t, i) {
    const s = this.elements;
    return kt.subVectors(e, t), kt.lengthSq() === 0 && (kt.z = 1), kt.normalize(), wn.crossVectors(i, kt), wn.lengthSq() === 0 && (Math.abs(i.z) === 1 ? kt.x += 1e-4 : kt.z += 1e-4, kt.normalize(), wn.crossVectors(i, kt)), wn.normalize(), Ms.crossVectors(kt, wn), s[0] = wn.x, s[4] = Ms.x, s[8] = kt.x, s[1] = wn.y, s[5] = Ms.y, s[9] = kt.y, s[2] = wn.z, s[6] = Ms.z, s[10] = kt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements, s = t.elements, r = this.elements, a = i[0], o = i[4], l = i[8], c = i[12], h = i[1], u = i[5], f = i[9], d = i[13], g = i[2], v = i[6], m = i[10], p = i[14], b = i[3], E = i[7], S = i[11], P = i[15], w = s[0], U = s[4], N = s[8], y = s[12], M = s[1], D = s[5], O = s[9], H = s[13], V = s[2], Y = s[6], W = s[10], ne = s[14], k = s[3], ae = s[7], he = s[11], Ee = s[15];
    return r[0] = a * w + o * M + l * V + c * k, r[4] = a * U + o * D + l * Y + c * ae, r[8] = a * N + o * O + l * W + c * he, r[12] = a * y + o * H + l * ne + c * Ee, r[1] = h * w + u * M + f * V + d * k, r[5] = h * U + u * D + f * Y + d * ae, r[9] = h * N + u * O + f * W + d * he, r[13] = h * y + u * H + f * ne + d * Ee, r[2] = g * w + v * M + m * V + p * k, r[6] = g * U + v * D + m * Y + p * ae, r[10] = g * N + v * O + m * W + p * he, r[14] = g * y + v * H + m * ne + p * Ee, r[3] = b * w + E * M + S * V + P * k, r[7] = b * U + E * D + S * Y + P * ae, r[11] = b * N + E * O + S * W + P * he, r[15] = b * y + E * H + S * ne + P * Ee, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[4], s = e[8], r = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], u = e[6], f = e[10], d = e[14], g = e[3], v = e[7], m = e[11], p = e[15];
    return g * (+r * l * u - s * c * u - r * o * f + i * c * f + s * o * d - i * l * d) + v * (+t * l * d - t * c * f + r * a * f - s * a * d + s * c * h - r * l * h) + m * (+t * c * u - t * o * d - r * a * u + i * a * d + r * o * h - i * c * h) + p * (-s * o * h - t * l * u + t * o * f + s * a * u - i * a * f + i * l * h);
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
    const e = this.elements, t = e[0], i = e[1], s = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = e[9], f = e[10], d = e[11], g = e[12], v = e[13], m = e[14], p = e[15], b = u * m * c - v * f * c + v * l * d - o * m * d - u * l * p + o * f * p, E = g * f * c - h * m * c - g * l * d + a * m * d + h * l * p - a * f * p, S = h * v * c - g * u * c + g * o * d - a * v * d - h * o * p + a * u * p, P = g * u * l - h * v * l - g * o * f + a * v * f + h * o * m - a * u * m, w = t * b + i * E + s * S + r * P;
    if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const U = 1 / w;
    return e[0] = b * U, e[1] = (v * f * r - u * m * r - v * s * d + i * m * d + u * s * p - i * f * p) * U, e[2] = (o * m * r - v * l * r + v * s * c - i * m * c - o * s * p + i * l * p) * U, e[3] = (u * l * r - o * f * r - u * s * c + i * f * c + o * s * d - i * l * d) * U, e[4] = E * U, e[5] = (h * m * r - g * f * r + g * s * d - t * m * d - h * s * p + t * f * p) * U, e[6] = (g * l * r - a * m * r - g * s * c + t * m * c + a * s * p - t * l * p) * U, e[7] = (a * f * r - h * l * r + h * s * c - t * f * c - a * s * d + t * l * d) * U, e[8] = S * U, e[9] = (g * u * r - h * v * r - g * i * d + t * v * d + h * i * p - t * u * p) * U, e[10] = (a * v * r - g * o * r + g * i * c - t * v * c - a * i * p + t * o * p) * U, e[11] = (h * o * r - a * u * r - h * i * c + t * u * c + a * i * d - t * o * d) * U, e[12] = P * U, e[13] = (h * v * s - g * u * s + g * i * f - t * v * f - h * i * m + t * u * m) * U, e[14] = (g * o * s - a * v * s - g * i * l + t * v * l + a * i * m - t * o * m) * U, e[15] = (a * u * s - h * o * s + h * i * l - t * u * l - a * i * f + t * o * f) * U, this;
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
    const i = Math.cos(t), s = Math.sin(t), r = 1 - i, a = e.x, o = e.y, l = e.z, c = r * a, h = r * o;
    return this.set(c * a + i, c * o - s * l, c * l + s * o, 0, c * o + s * l, h * o + i, h * l - s * a, 0, c * l - s * o, h * l + s * a, r * l * l + i, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, i) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, i, s, r, a) {
    return this.set(1, i, r, 0, e, 1, a, 0, t, s, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, i) {
    const s = this.elements, r = t._x, a = t._y, o = t._z, l = t._w, c = r + r, h = a + a, u = o + o, f = r * c, d = r * h, g = r * u, v = a * h, m = a * u, p = o * u, b = l * c, E = l * h, S = l * u, P = i.x, w = i.y, U = i.z;
    return s[0] = (1 - (v + p)) * P, s[1] = (d + S) * P, s[2] = (g - E) * P, s[3] = 0, s[4] = (d - S) * w, s[5] = (1 - (f + p)) * w, s[6] = (m + b) * w, s[7] = 0, s[8] = (g + E) * U, s[9] = (m - b) * U, s[10] = (1 - (f + v)) * U, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
  }
  decompose(e, t, i) {
    const s = this.elements;
    let r = ai.set(s[0], s[1], s[2]).length();
    const a = ai.set(s[4], s[5], s[6]).length(), o = ai.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), e.x = s[12], e.y = s[13], e.z = s[14], en.copy(this);
    const c = 1 / r, h = 1 / a, u = 1 / o;
    return en.elements[0] *= c, en.elements[1] *= c, en.elements[2] *= c, en.elements[4] *= h, en.elements[5] *= h, en.elements[6] *= h, en.elements[8] *= u, en.elements[9] *= u, en.elements[10] *= u, t.setFromRotationMatrix(en), i.x = r, i.y = a, i.z = o, this;
  }
  makePerspective(e, t, i, s, r, a, o = hn, l = false) {
    const c = this.elements, h = 2 * r / (t - e), u = 2 * r / (i - s), f = (t + e) / (t - e), d = (i + s) / (i - s);
    let g, v;
    if (l) g = r / (a - r), v = a * r / (a - r);
    else if (o === hn) g = -(a + r) / (a - r), v = -2 * a * r / (a - r);
    else if (o === ir) g = -a / (a - r), v = -a * r / (a - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = h, c[4] = 0, c[8] = f, c[12] = 0, c[1] = 0, c[5] = u, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = g, c[14] = v, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, i, s, r, a, o = hn, l = false) {
    const c = this.elements, h = 2 / (t - e), u = 2 / (i - s), f = -(t + e) / (t - e), d = -(i + s) / (i - s);
    let g, v;
    if (l) g = 1 / (a - r), v = a / (a - r);
    else if (o === hn) g = -2 / (a - r), v = -(a + r) / (a - r);
    else if (o === ir) g = -1 / (a - r), v = -r / (a - r);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = h, c[4] = 0, c[8] = 0, c[12] = f, c[1] = 0, c[5] = u, c[9] = 0, c[13] = d, c[2] = 0, c[6] = 0, c[10] = g, c[14] = v, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
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
}
const ai = new R(), en = new je(), iu = new R(0, 0, 0), su = new R(1, 1, 1), wn = new R(), Ms = new R(), kt = new R(), Po = new je(), Do = new Kn();
class rn {
  constructor(e = 0, t = 0, i = 0, s = rn.DEFAULT_ORDER) {
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
    const s = e.elements, r = s[0], a = s[4], o = s[8], l = s[1], c = s[5], h = s[9], u = s[2], f = s[6], d = s[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Be(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Be(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Be(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Be(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Be(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(o, d));
        break;
      case "XZY":
        this._z = Math.asin(-Be(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, d), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, i === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, i) {
    return Po.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Po, t, i);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Do.setFromEuler(this), this.setFromQuaternion(Do, e);
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
rn.DEFAULT_ORDER = "XYZ";
class no {
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
let ru = 0;
const Uo = new R(), oi = new Kn(), vn = new je(), ys = new R(), Hi = new R(), au = new R(), ou = new Kn(), Lo = new R(1, 0, 0), Io = new R(0, 1, 0), No = new R(0, 0, 1), Fo = { type: "added" }, lu = { type: "removed" }, li = { type: "childadded", child: null }, Er = { type: "childremoved", child: null };
class mt extends fn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: ru++ }), this.uuid = un(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = mt.DEFAULT_UP.clone();
    const e = new R(), t = new rn(), i = new Kn(), s = new R(1, 1, 1);
    function r() {
      i.setFromEuler(t, false);
    }
    function a() {
      t.setFromQuaternion(i, void 0, false);
    }
    t._onChange(r), i._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: i }, scale: { configurable: true, enumerable: true, value: s }, modelViewMatrix: { value: new je() }, normalMatrix: { value: new Ne() } }), this.matrix = new je(), this.matrixWorld = new je(), this.matrixAutoUpdate = mt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new no(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
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
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
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
    return oi.setFromAxisAngle(e, t), this.quaternion.multiply(oi), this;
  }
  rotateOnWorldAxis(e, t) {
    return oi.setFromAxisAngle(e, t), this.quaternion.premultiply(oi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Lo, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Io, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(No, e);
  }
  translateOnAxis(e, t) {
    return Uo.copy(e).applyQuaternion(this.quaternion), this.position.add(Uo.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Lo, e);
  }
  translateY(e) {
    return this.translateOnAxis(Io, e);
  }
  translateZ(e) {
    return this.translateOnAxis(No, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(vn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, i) {
    e.isVector3 ? ys.copy(e) : ys.set(e, t, i);
    const s = this.parent;
    this.updateWorldMatrix(true, false), Hi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? vn.lookAt(Hi, ys, this.up) : vn.lookAt(ys, Hi, this.up), this.quaternion.setFromRotationMatrix(vn), s && (vn.extractRotation(s.matrixWorld), oi.setFromRotationMatrix(vn), this.quaternion.premultiply(oi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Fo), li.child = e, this.dispatchEvent(li), li.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(lu), Er.child = e, this.dispatchEvent(Er), Er.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), vn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), vn.multiply(e.parent.matrixWorld)), e.applyMatrix4(vn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(Fo), li.child = e, this.dispatchEvent(li), li.child = null, this;
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
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Hi, e, au), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Hi, ou, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
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
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e = true);
    const t = this.children;
    for (let i = 0, s = t.length; i < s; i++) t[i].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (e === true && i !== null && i.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === true) {
      const s = this.children;
      for (let r = 0, a = s.length; r < a; r++) s[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", i = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, i.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === true && (s.castShadow = true), this.receiveShadow === true && (s.receiveShadow = true), this.visible === false && (s.visible = false), this.frustumCulled === false && (s.frustumCulled = false), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === false && (s.matrixAutoUpdate = false), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.geometryInfo = this._geometryInfo.map((o) => ({ ...o, boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0, boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0 })), s.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), s.availableInstanceIds = this._availableInstanceIds.slice(), s.availableGeometryIds = this._availableGeometryIds.slice(), s.nextIndexStart = this._nextIndexStart, s.nextVertexStart = this._nextVertexStart, s.geometryCount = this._geometryCount, s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.matricesTexture = this._matricesTexture.toJSON(e), s.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (s.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (s.boundingBox = this.boundingBox.toJSON()));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (s.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const u = l[c];
          r(e.shapes, u);
        }
        else r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let l = 0, c = this.material.length; l < c; l++) o.push(r(e.materials, this.material[l]));
      s.material = o;
    } else s.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let o = 0; o < this.children.length; o++) s.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        s.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), u = a(e.shapes), f = a(e.skeletons), d = a(e.animations), g = a(e.nodes);
      o.length > 0 && (i.geometries = o), l.length > 0 && (i.materials = l), c.length > 0 && (i.textures = c), h.length > 0 && (i.images = h), u.length > 0 && (i.shapes = u), f.length > 0 && (i.skeletons = f), d.length > 0 && (i.animations = d), g.length > 0 && (i.nodes = g);
    }
    return i.object = s, i;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let i = 0; i < e.children.length; i++) {
      const s = e.children[i];
      this.add(s.clone());
    }
    return this;
  }
}
mt.DEFAULT_UP = new R(0, 1, 0);
mt.DEFAULT_MATRIX_AUTO_UPDATE = true;
mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const tn = new R(), xn = new R(), Tr = new R(), Sn = new R(), ci = new R(), hi = new R(), Oo = new R(), br = new R(), Ar = new R(), wr = new R(), Rr = new lt(), Cr = new lt(), Pr = new lt();
class Jt {
  constructor(e = new R(), t = new R(), i = new R()) {
    this.a = e, this.b = t, this.c = i;
  }
  static getNormal(e, t, i, s) {
    s.subVectors(i, t), tn.subVectors(e, t), s.cross(tn);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  static getBarycoord(e, t, i, s, r) {
    tn.subVectors(s, t), xn.subVectors(i, t), Tr.subVectors(e, t);
    const a = tn.dot(tn), o = tn.dot(xn), l = tn.dot(Tr), c = xn.dot(xn), h = xn.dot(Tr), u = a * c - o * o;
    if (u === 0) return r.set(0, 0, 0), null;
    const f = 1 / u, d = (c * l - o * h) * f, g = (a * h - o * l) * f;
    return r.set(1 - d - g, g, d);
  }
  static containsPoint(e, t, i, s) {
    return this.getBarycoord(e, t, i, s, Sn) === null ? false : Sn.x >= 0 && Sn.y >= 0 && Sn.x + Sn.y <= 1;
  }
  static getInterpolation(e, t, i, s, r, a, o, l) {
    return this.getBarycoord(e, t, i, s, Sn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, Sn.x), l.addScaledVector(a, Sn.y), l.addScaledVector(o, Sn.z), l);
  }
  static getInterpolatedAttribute(e, t, i, s, r, a) {
    return Rr.setScalar(0), Cr.setScalar(0), Pr.setScalar(0), Rr.fromBufferAttribute(e, t), Cr.fromBufferAttribute(e, i), Pr.fromBufferAttribute(e, s), a.setScalar(0), a.addScaledVector(Rr, r.x), a.addScaledVector(Cr, r.y), a.addScaledVector(Pr, r.z), a;
  }
  static isFrontFacing(e, t, i, s) {
    return tn.subVectors(i, t), xn.subVectors(e, t), tn.cross(xn).dot(s) < 0;
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
    return tn.subVectors(this.c, this.b), xn.subVectors(this.a, this.b), tn.cross(xn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Jt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Jt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, i, s, r) {
    return Jt.getInterpolation(e, this.a, this.b, this.c, t, i, s, r);
  }
  containsPoint(e) {
    return Jt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Jt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a, s = this.b, r = this.c;
    let a, o;
    ci.subVectors(s, i), hi.subVectors(r, i), br.subVectors(e, i);
    const l = ci.dot(br), c = hi.dot(br);
    if (l <= 0 && c <= 0) return t.copy(i);
    Ar.subVectors(e, s);
    const h = ci.dot(Ar), u = hi.dot(Ar);
    if (h >= 0 && u <= h) return t.copy(s);
    const f = l * u - h * c;
    if (f <= 0 && l >= 0 && h <= 0) return a = l / (l - h), t.copy(i).addScaledVector(ci, a);
    wr.subVectors(e, r);
    const d = ci.dot(wr), g = hi.dot(wr);
    if (g >= 0 && d <= g) return t.copy(r);
    const v = d * c - l * g;
    if (v <= 0 && c >= 0 && g <= 0) return o = c / (c - g), t.copy(i).addScaledVector(hi, o);
    const m = h * g - d * u;
    if (m <= 0 && u - h >= 0 && d - g >= 0) return Oo.subVectors(r, s), o = (u - h) / (u - h + (d - g)), t.copy(s).addScaledVector(Oo, o);
    const p = 1 / (m + v + f);
    return a = v * p, o = f * p, t.copy(i).addScaledVector(ci, a).addScaledVector(hi, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const rc = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Rn = { h: 0, s: 0, l: 0 }, Es = { h: 0, s: 0, l: 0 };
function Dr(n, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + (e - n) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? n + (e - n) * 6 * (2 / 3 - t) : n;
}
class Ge {
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
  setHex(e, t = We) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ye.colorSpaceToWorking(this, t), this;
  }
  setRGB(e, t, i, s = Ye.workingColorSpace) {
    return this.r = e, this.g = t, this.b = i, Ye.colorSpaceToWorking(this, s), this;
  }
  setHSL(e, t, i, s = Ye.workingColorSpace) {
    if (e = eo(e, 1), t = Be(t, 0, 1), i = Be(i, 0, 1), t === 0) this.r = this.g = this.b = i;
    else {
      const r = i <= 0.5 ? i * (1 + t) : i + t - i * t, a = 2 * i - r;
      this.r = Dr(a, r, e + 1 / 3), this.g = Dr(a, r, e), this.b = Dr(a, r, e - 1 / 3);
    }
    return Ye.colorSpaceToWorking(this, s), this;
  }
  setStyle(e, t = We) {
    function i(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const a = s[1], o = s[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return i(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return i(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return i(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = s[1], a = r.length;
      if (a === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (a === 6) return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = We) {
    const i = rc[e.toLowerCase()];
    return i !== void 0 ? this.setHex(i, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = yn(e.r), this.g = yn(e.g), this.b = yn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ri(e.r), this.g = Ri(e.g), this.b = Ri(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = We) {
    return Ye.workingToColorSpace(Ct.copy(this), e), Math.round(Be(Ct.r * 255, 0, 255)) * 65536 + Math.round(Be(Ct.g * 255, 0, 255)) * 256 + Math.round(Be(Ct.b * 255, 0, 255));
  }
  getHexString(e = We) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ye.workingColorSpace) {
    Ye.workingToColorSpace(Ct.copy(this), t);
    const i = Ct.r, s = Ct.g, r = Ct.b, a = Math.max(i, s, r), o = Math.min(i, s, r);
    let l, c;
    const h = (o + a) / 2;
    if (o === a) l = 0, c = 0;
    else {
      const u = a - o;
      switch (c = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case i:
          l = (s - r) / u + (s < r ? 6 : 0);
          break;
        case s:
          l = (r - i) / u + 2;
          break;
        case r:
          l = (i - s) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = Ye.workingColorSpace) {
    return Ye.workingToColorSpace(Ct.copy(this), t), e.r = Ct.r, e.g = Ct.g, e.b = Ct.b, e;
  }
  getStyle(e = We) {
    Ye.workingToColorSpace(Ct.copy(this), e);
    const t = Ct.r, i = Ct.g, s = Ct.b;
    return e !== We ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, i) {
    return this.getHSL(Rn), this.setHSL(Rn.h + e, Rn.s + t, Rn.l + i);
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
    this.getHSL(Rn), e.getHSL(Es);
    const i = ji(Rn.h, Es.h, t), s = ji(Rn.s, Es.s, t), r = ji(Rn.l, Es.l, t);
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
const Ct = new Ge();
Ge.NAMES = rc;
let cu = 0;
class dn extends fn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: cu++ }), this.uuid = un(), this.name = "", this.type = "Material", this.blending = wi, this.side = En, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = $r, this.blendDst = Qr, this.blendEquation = Xn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ge(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Ci, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Eo, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ti, this.stencilZFail = ti, this.stencilZPass = ti, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
        console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const s = this[t];
      if (s === void 0) {
        console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      s && s.isColor ? s.set(i) : s && s.isVector3 && i && i.isVector3 ? s.copy(i) : this[t] = i;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const i = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (i.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (i.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== wi && (i.blending = this.blending), this.side !== En && (i.side = this.side), this.vertexColors === true && (i.vertexColors = true), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === true && (i.transparent = true), this.blendSrc !== $r && (i.blendSrc = this.blendSrc), this.blendDst !== Qr && (i.blendDst = this.blendDst), this.blendEquation !== Xn && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== Ci && (i.depthFunc = this.depthFunc), this.depthTest === false && (i.depthTest = this.depthTest), this.depthWrite === false && (i.depthWrite = this.depthWrite), this.colorWrite === false && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Eo && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== ti && (i.stencilFail = this.stencilFail), this.stencilZFail !== ti && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== ti && (i.stencilZPass = this.stencilZPass), this.stencilWrite === true && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === true && (i.polygonOffset = true), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === true && (i.dithering = true), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === true && (i.alphaHash = true), this.alphaToCoverage === true && (i.alphaToCoverage = true), this.premultipliedAlpha === true && (i.premultipliedAlpha = true), this.forceSinglePass === true && (i.forceSinglePass = true), this.wireframe === true && (i.wireframe = true), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (i.flatShading = true), this.visible === false && (i.visible = false), this.toneMapped === false && (i.toneMapped = false), this.fog === false && (i.fog = false), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function s(r) {
      const a = [];
      for (const o in r) {
        const l = r[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const r = s(e.textures), a = s(e.images);
      r.length > 0 && (i.textures = r), a.length > 0 && (i.images = a);
    }
    return i;
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
    return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
}
class ac extends dn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Ge(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new rn(), this.combine = Yl, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const pt = new R(), Ts = new j();
let hu = 0;
class Ot {
  constructor(e, t, i = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: hu++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = i, this.usage = za, this.updateRanges = [], this.gpuType = cn, this.version = 0;
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
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
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
    if (this.itemSize === 2) for (let t = 0, i = this.count; t < i; t++) Ts.fromBufferAttribute(this, t), Ts.applyMatrix3(e), this.setXY(t, Ts.x, Ts.y);
    else if (this.itemSize === 3) for (let t = 0, i = this.count; t < i; t++) pt.fromBufferAttribute(this, t), pt.applyMatrix3(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++) pt.fromBufferAttribute(this, t), pt.applyMatrix4(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++) pt.fromBufferAttribute(this, t), pt.applyNormalMatrix(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++) pt.fromBufferAttribute(this, t), pt.transformDirection(e), this.setXYZ(t, pt.x, pt.y, pt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = nn(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = Je(i, this.array)), this.array[e * this.itemSize + t] = i, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, i) {
    return e *= this.itemSize, this.normalized && (t = Je(t, this.array), i = Je(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, s) {
    return e *= this.itemSize, this.normalized && (t = Je(t, this.array), i = Je(i, this.array), s = Je(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = s, this;
  }
  setXYZW(e, t, i, s, r) {
    return e *= this.itemSize, this.normalized && (t = Je(t, this.array), i = Je(i, this.array), s = Je(s, this.array), r = Je(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = s, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== za && (e.usage = this.usage), e;
  }
}
class oc extends Ot {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class lc extends Ot {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class Tt extends Ot {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let uu = 0;
const Kt = new je(), Ur = new mt(), ui = new R(), Gt = new $n(), ki = new $n(), yt = new R();
class Bt extends fn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: uu++ }), this.uuid = un(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (ic(e) ? lc : oc)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
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
    return s !== void 0 && (s.transformDirection(e), s.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Kt.makeRotationFromQuaternion(e), this.applyMatrix4(Kt), this;
  }
  rotateX(e) {
    return Kt.makeRotationX(e), this.applyMatrix4(Kt), this;
  }
  rotateY(e) {
    return Kt.makeRotationY(e), this.applyMatrix4(Kt), this;
  }
  rotateZ(e) {
    return Kt.makeRotationZ(e), this.applyMatrix4(Kt), this;
  }
  translate(e, t, i) {
    return Kt.makeTranslation(e, t, i), this.applyMatrix4(Kt), this;
  }
  scale(e, t, i) {
    return Kt.makeScale(e, t, i), this.applyMatrix4(Kt), this;
  }
  lookAt(e) {
    return Ur.lookAt(e), Ur.updateMatrix(), this.applyMatrix4(Ur.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ui).negate(), this.translate(ui.x, ui.y, ui.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const i = [];
      for (let s = 0, r = e.length; s < r; s++) {
        const a = e[s];
        i.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Tt(i, 3));
    } else {
      const i = Math.min(e.length, t.count);
      for (let s = 0; s < i; s++) {
        const r = e[s];
        t.setXYZ(s, r.x, r.y, r.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new $n());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new R(-1 / 0, -1 / 0, -1 / 0), new R(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let i = 0, s = t.length; i < s; i++) {
        const r = t[i];
        Gt.setFromBufferAttribute(r), this.morphTargetsRelative ? (yt.addVectors(this.boundingBox.min, Gt.min), this.boundingBox.expandByPoint(yt), yt.addVectors(this.boundingBox.max, Gt.max), this.boundingBox.expandByPoint(yt)) : (this.boundingBox.expandByPoint(Gt.min), this.boundingBox.expandByPoint(Gt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Qn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if (Gt.setFromBufferAttribute(e), t) for (let r = 0, a = t.length; r < a; r++) {
        const o = t[r];
        ki.setFromBufferAttribute(o), this.morphTargetsRelative ? (yt.addVectors(Gt.min, ki.min), Gt.expandByPoint(yt), yt.addVectors(Gt.max, ki.max), Gt.expandByPoint(yt)) : (Gt.expandByPoint(ki.min), Gt.expandByPoint(ki.max));
      }
      Gt.getCenter(i);
      let s = 0;
      for (let r = 0, a = e.count; r < a; r++) yt.fromBufferAttribute(e, r), s = Math.max(s, i.distanceToSquared(yt));
      if (t) for (let r = 0, a = t.length; r < a; r++) {
        const o = t[r], l = this.morphTargetsRelative;
        for (let c = 0, h = o.count; c < h; c++) yt.fromBufferAttribute(o, c), l && (ui.fromBufferAttribute(e, c), yt.add(ui)), s = Math.max(s, i.distanceToSquared(yt));
      }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = t.position, s = t.normal, r = t.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Ot(new Float32Array(4 * i.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let N = 0; N < i.count; N++) o[N] = new R(), l[N] = new R();
    const c = new R(), h = new R(), u = new R(), f = new j(), d = new j(), g = new j(), v = new R(), m = new R();
    function p(N, y, M) {
      c.fromBufferAttribute(i, N), h.fromBufferAttribute(i, y), u.fromBufferAttribute(i, M), f.fromBufferAttribute(r, N), d.fromBufferAttribute(r, y), g.fromBufferAttribute(r, M), h.sub(c), u.sub(c), d.sub(f), g.sub(f);
      const D = 1 / (d.x * g.y - g.x * d.y);
      isFinite(D) && (v.copy(h).multiplyScalar(g.y).addScaledVector(u, -d.y).multiplyScalar(D), m.copy(u).multiplyScalar(d.x).addScaledVector(h, -g.x).multiplyScalar(D), o[N].add(v), o[y].add(v), o[M].add(v), l[N].add(m), l[y].add(m), l[M].add(m));
    }
    let b = this.groups;
    b.length === 0 && (b = [{ start: 0, count: e.count }]);
    for (let N = 0, y = b.length; N < y; ++N) {
      const M = b[N], D = M.start, O = M.count;
      for (let H = D, V = D + O; H < V; H += 3) p(e.getX(H + 0), e.getX(H + 1), e.getX(H + 2));
    }
    const E = new R(), S = new R(), P = new R(), w = new R();
    function U(N) {
      P.fromBufferAttribute(s, N), w.copy(P);
      const y = o[N];
      E.copy(y), E.sub(P.multiplyScalar(P.dot(y))).normalize(), S.crossVectors(w, y);
      const D = S.dot(l[N]) < 0 ? -1 : 1;
      a.setXYZW(N, E.x, E.y, E.z, D);
    }
    for (let N = 0, y = b.length; N < y; ++N) {
      const M = b[N], D = M.start, O = M.count;
      for (let H = D, V = D + O; H < V; H += 3) U(e.getX(H + 0)), U(e.getX(H + 1)), U(e.getX(H + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0) i = new Ot(new Float32Array(t.count * 3), 3), this.setAttribute("normal", i);
      else for (let f = 0, d = i.count; f < d; f++) i.setXYZ(f, 0, 0, 0);
      const s = new R(), r = new R(), a = new R(), o = new R(), l = new R(), c = new R(), h = new R(), u = new R();
      if (e) for (let f = 0, d = e.count; f < d; f += 3) {
        const g = e.getX(f + 0), v = e.getX(f + 1), m = e.getX(f + 2);
        s.fromBufferAttribute(t, g), r.fromBufferAttribute(t, v), a.fromBufferAttribute(t, m), h.subVectors(a, r), u.subVectors(s, r), h.cross(u), o.fromBufferAttribute(i, g), l.fromBufferAttribute(i, v), c.fromBufferAttribute(i, m), o.add(h), l.add(h), c.add(h), i.setXYZ(g, o.x, o.y, o.z), i.setXYZ(v, l.x, l.y, l.z), i.setXYZ(m, c.x, c.y, c.z);
      }
      else for (let f = 0, d = t.count; f < d; f += 3) s.fromBufferAttribute(t, f + 0), r.fromBufferAttribute(t, f + 1), a.fromBufferAttribute(t, f + 2), h.subVectors(a, r), u.subVectors(s, r), h.cross(u), i.setXYZ(f + 0, h.x, h.y, h.z), i.setXYZ(f + 1, h.x, h.y, h.z), i.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), i.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++) yt.fromBufferAttribute(e, t), yt.normalize(), e.setXYZ(t, yt.x, yt.y, yt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, u = o.normalized, f = new c.constructor(l.length * h);
      let d = 0, g = 0;
      for (let v = 0, m = l.length; v < m; v++) {
        o.isInterleavedBufferAttribute ? d = l[v] * o.data.stride + o.offset : d = l[v] * h;
        for (let p = 0; p < h; p++) f[g++] = c[d++];
      }
      return new Ot(f, h, u);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Bt(), i = this.index.array, s = this.attributes;
    for (const o in s) {
      const l = s[o], c = e(l, i);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
      for (let h = 0, u = c.length; h < u; h++) {
        const f = c[h], d = e(f, i);
        l.push(d);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const s = {};
    let r = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, f = c.length; u < f; u++) {
        const d = c[u];
        h.push(d.toJSON(e.data));
      }
      h.length > 0 && (s[l] = h, r = true);
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
    for (const c in s) {
      const h = s[c];
      this.setAttribute(c, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const h = [], u = r[c];
      for (let f = 0, d = u.length; f < d; f++) h.push(u[f].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Bo = new je(), Hn = new hs(), bs = new Qn(), zo = new R(), As = new R(), ws = new R(), Rs = new R(), Lr = new R(), Cs = new R(), Ho = new R(), Ps = new R();
class jt extends mt {
  constructor(e = new Bt(), t = new ac()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
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
      Cs.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = o[l], u = r[l];
        h !== 0 && (Lr.fromBufferAttribute(u, e), a ? Cs.addScaledVector(Lr, h) : Cs.addScaledVector(Lr.sub(t), h));
      }
      t.add(Cs);
    }
    return t;
  }
  raycast(e, t) {
    const i = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), bs.copy(i.boundingSphere), bs.applyMatrix4(r), Hn.copy(e.ray).recast(e.near), !(bs.containsPoint(Hn.origin) === false && (Hn.intersectSphere(bs, zo) === null || Hn.origin.distanceToSquared(zo) > (e.far - e.near) ** 2)) && (Bo.copy(r).invert(), Hn.copy(e.ray).applyMatrix4(Bo), !(i.boundingBox !== null && Hn.intersectsBox(i.boundingBox) === false) && this._computeIntersections(e, t, Hn)));
  }
  _computeIntersections(e, t, i) {
    let s;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, f = r.groups, d = r.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let g = 0, v = f.length; g < v; g++) {
      const m = f[g], p = a[m.materialIndex], b = Math.max(m.start, d.start), E = Math.min(o.count, Math.min(m.start + m.count, d.start + d.count));
      for (let S = b, P = E; S < P; S += 3) {
        const w = o.getX(S), U = o.getX(S + 1), N = o.getX(S + 2);
        s = Ds(this, p, e, i, c, h, u, w, U, N), s && (s.faceIndex = Math.floor(S / 3), s.face.materialIndex = m.materialIndex, t.push(s));
      }
    }
    else {
      const g = Math.max(0, d.start), v = Math.min(o.count, d.start + d.count);
      for (let m = g, p = v; m < p; m += 3) {
        const b = o.getX(m), E = o.getX(m + 1), S = o.getX(m + 2);
        s = Ds(this, a, e, i, c, h, u, b, E, S), s && (s.faceIndex = Math.floor(m / 3), t.push(s));
      }
    }
    else if (l !== void 0) if (Array.isArray(a)) for (let g = 0, v = f.length; g < v; g++) {
      const m = f[g], p = a[m.materialIndex], b = Math.max(m.start, d.start), E = Math.min(l.count, Math.min(m.start + m.count, d.start + d.count));
      for (let S = b, P = E; S < P; S += 3) {
        const w = S, U = S + 1, N = S + 2;
        s = Ds(this, p, e, i, c, h, u, w, U, N), s && (s.faceIndex = Math.floor(S / 3), s.face.materialIndex = m.materialIndex, t.push(s));
      }
    }
    else {
      const g = Math.max(0, d.start), v = Math.min(l.count, d.start + d.count);
      for (let m = g, p = v; m < p; m += 3) {
        const b = m, E = m + 1, S = m + 2;
        s = Ds(this, a, e, i, c, h, u, b, E, S), s && (s.faceIndex = Math.floor(m / 3), t.push(s));
      }
    }
  }
}
function fu(n, e, t, i, s, r, a, o) {
  let l;
  if (e.side === Et ? l = i.intersectTriangle(a, r, s, true, o) : l = i.intersectTriangle(s, r, a, e.side === En, o), l === null) return null;
  Ps.copy(o), Ps.applyMatrix4(n.matrixWorld);
  const c = t.ray.origin.distanceTo(Ps);
  return c < t.near || c > t.far ? null : { distance: c, point: Ps.clone(), object: n };
}
function Ds(n, e, t, i, s, r, a, o, l, c) {
  n.getVertexPosition(o, As), n.getVertexPosition(l, ws), n.getVertexPosition(c, Rs);
  const h = fu(n, e, t, i, As, ws, Rs, Ho);
  if (h) {
    const u = new R();
    Jt.getBarycoord(Ho, As, ws, Rs, u), s && (h.uv = Jt.getInterpolatedAttribute(s, o, l, c, u, new j())), r && (h.uv1 = Jt.getInterpolatedAttribute(r, o, l, c, u, new j())), a && (h.normal = Jt.getInterpolatedAttribute(a, o, l, c, u, new R()), h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
    const f = { a: o, b: l, c, normal: new R(), materialIndex: 0 };
    Jt.getNormal(As, ws, Rs, f.normal), h.face = f, h.barycoord = u;
  }
  return h;
}
class us extends Bt {
  constructor(e = 1, t = 1, i = 1, s = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: i, widthSegments: s, heightSegments: r, depthSegments: a };
    const o = this;
    s = Math.floor(s), r = Math.floor(r), a = Math.floor(a);
    const l = [], c = [], h = [], u = [];
    let f = 0, d = 0;
    g("z", "y", "x", -1, -1, i, t, e, a, r, 0), g("z", "y", "x", 1, -1, i, t, -e, a, r, 1), g("x", "z", "y", 1, 1, e, i, t, s, a, 2), g("x", "z", "y", 1, -1, e, i, -t, s, a, 3), g("x", "y", "z", 1, -1, e, t, i, s, r, 4), g("x", "y", "z", -1, -1, e, t, -i, s, r, 5), this.setIndex(l), this.setAttribute("position", new Tt(c, 3)), this.setAttribute("normal", new Tt(h, 3)), this.setAttribute("uv", new Tt(u, 2));
    function g(v, m, p, b, E, S, P, w, U, N, y) {
      const M = S / U, D = P / N, O = S / 2, H = P / 2, V = w / 2, Y = U + 1, W = N + 1;
      let ne = 0, k = 0;
      const ae = new R();
      for (let he = 0; he < W; he++) {
        const Ee = he * D - H;
        for (let ze = 0; ze < Y; ze++) {
          const nt = ze * M - O;
          ae[v] = nt * b, ae[m] = Ee * E, ae[p] = V, c.push(ae.x, ae.y, ae.z), ae[v] = 0, ae[m] = 0, ae[p] = w > 0 ? 1 : -1, h.push(ae.x, ae.y, ae.z), u.push(ze / U), u.push(1 - he / N), ne += 1;
        }
      }
      for (let he = 0; he < N; he++) for (let Ee = 0; Ee < U; Ee++) {
        const ze = f + Ee + Y * he, nt = f + Ee + Y * (he + 1), rt = f + (Ee + 1) + Y * (he + 1), Ze = f + (Ee + 1) + Y * he;
        l.push(ze, nt, Ze), l.push(nt, rt, Ze), k += 6;
      }
      o.addGroup(d, k, y), d += k, f += ne;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new us(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Ii(n) {
  const e = {};
  for (const t in n) {
    e[t] = {};
    for (const i in n[t]) {
      const s = n[t][i];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][i] = null) : e[t][i] = s.clone() : Array.isArray(s) ? e[t][i] = s.slice() : e[t][i] = s;
    }
  }
  return e;
}
function Lt(n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = Ii(n[t]);
    for (const s in i) e[s] = i[s];
  }
  return e;
}
function du(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) e.push(n[t].clone());
  return e;
}
function cc(n) {
  const e = n.getRenderTarget();
  return e === null ? n.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : Ye.workingColorSpace;
}
const pu = { clone: Ii, merge: Lt };
var mu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, gu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class bt extends dn {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = mu, this.fragmentShader = gu, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ii(e.uniforms), this.uniformsGroups = du(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
}
class io extends mt {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new je(), this.projectionMatrix = new je(), this.projectionMatrixInverse = new je(), this.coordinateSystem = hn, this._reversedDepth = false;
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
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Cn = new R(), ko = new j(), Go = new j();
class Vt extends io {
  constructor(e = 50, t = 1, i = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = s, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = is * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Ji * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return is * 2 * Math.atan(Math.tan(Ji * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, i) {
    Cn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Cn.x, Cn.y).multiplyScalar(-e / Cn.z), Cn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(Cn.x, Cn.y).multiplyScalar(-e / Cn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, ko, Go), t.subVectors(Go, ko);
  }
  setViewOffset(e, t, i, s, r, a) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Ji * 0.5 * this.fov) / this.zoom, i = 2 * t, s = this.aspect * i, r = -0.5 * s;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      r += a.offsetX * s / l, t -= a.offsetY * i / c, s *= a.width / l, i *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (r += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, t, t - i, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const fi = -90, di = 1;
class _u extends mt {
  constructor(e, t, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Vt(fi, di, e, t);
    s.layers = this.layers, this.add(s);
    const r = new Vt(fi, di, e, t);
    r.layers = this.layers, this.add(r);
    const a = new Vt(fi, di, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Vt(fi, di, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Vt(fi, di, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Vt(fi, di, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [i, s, r, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === hn) i.up.set(0, 1, 0), i.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === ir) i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: s } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, l, c, h] = this.children, u = e.getRenderTarget(), f = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = false;
    const v = i.texture.generateMipmaps;
    i.texture.generateMipmaps = false, e.setRenderTarget(i, 0, s), e.render(t, r), e.setRenderTarget(i, 1, s), e.render(t, a), e.setRenderTarget(i, 2, s), e.render(t, o), e.setRenderTarget(i, 3, s), e.render(t, l), e.setRenderTarget(i, 4, s), e.render(t, c), i.texture.generateMipmaps = v, e.setRenderTarget(i, 5, s), e.render(t, h), e.setRenderTarget(u, f, d), e.xr.enabled = g, i.texture.needsPMREMUpdate = true;
  }
}
class hc extends vt {
  constructor(e = [], t = Pi, i, s, r, a, o, l, c, h) {
    super(e, t, i, s, r, a, o, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class vu extends Pt {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const i = { width: e, height: e, depth: 1 }, s = [i, i, i, i, i, i];
    this.texture = new hc(s), this._setTextureOptions(t), this.texture.isRenderTargetTexture = true;
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
			` }, s = new us(5, 5, 5), r = new bt({ name: "CubemapFromEquirect", uniforms: Ii(i.uniforms), vertexShader: i.vertexShader, fragmentShader: i.fragmentShader, side: Et, blending: At });
    r.uniforms.tEquirect.value = t;
    const a = new jt(s, r), o = t.minFilter;
    return t.minFilter === Zn && (t.minFilter = Ft), new _u(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t = true, i = true, s = true) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, i, s);
    e.setRenderTarget(r);
  }
}
class Us extends mt {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const xu = { type: "move" };
class Ir {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Us(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Us(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Us(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new R()), this._grip;
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
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = true;
        for (const v of e.hand.values()) {
          const m = t.getJointPose(v, i), p = this._getHandJoint(c, v);
          m !== null && (p.matrix.fromArray(m.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = true, p.jointRadius = m.radius), p.visible = m !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], f = h.position.distanceTo(u.position), d = 0.02, g = 5e-3;
        c.inputState.pinching && f > d + g ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && f <= d - g && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, i), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false));
      o !== null && (s = t.getPose(e.targetRaySpace, i), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, s.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = false, s.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(xu)));
    }
    return o !== null && (o.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const i = new Us();
      i.matrixAutoUpdate = false, i.visible = false, e.joints[t.jointName] = i, e.add(i);
    }
    return e.joints[t.jointName];
  }
}
class Vo extends mt {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new rn(), this.environmentIntensity = 1, this.environmentRotation = new rn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class Su {
  constructor(e, t) {
    this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = za, this.updateRanges = [], this.version = 0, this.uuid = un();
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
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = un()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), i = new this.constructor(t, this.stride);
    return i.setUsage(this.usage), i;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = un()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const Ut = new R();
class sr {
  constructor(e, t, i, s = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = e, this.itemSize = t, this.offset = i, this.normalized = s;
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
    for (let t = 0, i = this.data.count; t < i; t++) Ut.fromBufferAttribute(this, t), Ut.applyMatrix4(e), this.setXYZ(t, Ut.x, Ut.y, Ut.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++) Ut.fromBufferAttribute(this, t), Ut.applyNormalMatrix(e), this.setXYZ(t, Ut.x, Ut.y, Ut.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++) Ut.fromBufferAttribute(this, t), Ut.transformDirection(e), this.setXYZ(t, Ut.x, Ut.y, Ut.z);
    return this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (i = nn(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = Je(i, this.array)), this.data.array[e * this.data.stride + this.offset + t] = i, this;
  }
  setX(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  setXY(e, t, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Je(t, this.array), i = Je(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Je(t, this.array), i = Je(i, this.array), s = Je(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = s, this;
  }
  setXYZW(e, t, i, s, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Je(t, this.array), i = Je(i, this.array), s = Je(s, this.array), r = Je(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = s, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let i = 0; i < this.count; i++) {
        const s = i * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[s + r]);
      }
      return new Ot(new this.array.constructor(t), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new sr(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let i = 0; i < this.count; i++) {
        const s = i * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[s + r]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
class Mu extends dn {
  constructor(e) {
    super(), this.isSpriteMaterial = true, this.type = "SpriteMaterial", this.color = new Ge(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = true, this.transparent = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let pi;
const Gi = new R(), mi = new R(), gi = new R(), _i = new j(), Vi = new j(), uc = new je(), Ls = new R(), Wi = new R(), Is = new R(), Wo = new j(), Nr = new j(), Xo = new j();
class Uv extends mt {
  constructor(e = new Mu()) {
    if (super(), this.isSprite = true, this.type = "Sprite", pi === void 0) {
      pi = new Bt();
      const t = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), i = new Su(t, 5);
      pi.setIndex([0, 1, 2, 0, 2, 3]), pi.setAttribute("position", new sr(i, 3, 0, false)), pi.setAttribute("uv", new sr(i, 2, 3, false));
    }
    this.geometry = pi, this.material = e, this.center = new j(0.5, 0.5), this.count = 1;
  }
  raycast(e, t) {
    e.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), mi.setFromMatrixScale(this.matrixWorld), uc.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), gi.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === false && mi.multiplyScalar(-gi.z);
    const i = this.material.rotation;
    let s, r;
    i !== 0 && (r = Math.cos(i), s = Math.sin(i));
    const a = this.center;
    Ns(Ls.set(-0.5, -0.5, 0), gi, a, mi, s, r), Ns(Wi.set(0.5, -0.5, 0), gi, a, mi, s, r), Ns(Is.set(0.5, 0.5, 0), gi, a, mi, s, r), Wo.set(0, 0), Nr.set(1, 0), Xo.set(1, 1);
    let o = e.ray.intersectTriangle(Ls, Wi, Is, false, Gi);
    if (o === null && (Ns(Wi.set(-0.5, 0.5, 0), gi, a, mi, s, r), Nr.set(0, 1), o = e.ray.intersectTriangle(Ls, Is, Wi, false, Gi), o === null)) return;
    const l = e.ray.origin.distanceTo(Gi);
    l < e.near || l > e.far || t.push({ distance: l, point: Gi.clone(), uv: Jt.getInterpolation(Gi, Ls, Wi, Is, Wo, Nr, Xo, new j()), face: null, object: this });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function Ns(n, e, t, i, s, r) {
  _i.subVectors(n, t).addScalar(0.5).multiply(i), s !== void 0 ? (Vi.x = r * _i.x - s * _i.y, Vi.y = s * _i.x + r * _i.y) : Vi.copy(_i), n.copy(e), n.x += Vi.x, n.y += Vi.y, n.applyMatrix4(uc);
}
class yu extends vt {
  constructor(e = null, t = 1, i = 1, s, r, a, o, l, c = Yt, h = Yt, u, f) {
    super(null, a, o, l, c, h, s, r, u, f), this.isDataTexture = true, this.image = { data: e, width: t, height: i }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Yo extends Ot {
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
const vi = new je(), qo = new je(), Fs = [], Zo = new $n(), Eu = new je(), Xi = new jt(), Yi = new Qn();
class Lv extends jt {
  constructor(e, t, i) {
    super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new Yo(new Float32Array(i * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = i, this.boundingBox = null, this.boundingSphere = null;
    for (let s = 0; s < i; s++) this.setMatrixAt(s, Eu);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new $n()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let i = 0; i < t; i++) this.getMatrixAt(i, vi), Zo.copy(e.boundingBox).applyMatrix4(vi), this.boundingBox.union(Zo);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Qn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let i = 0; i < t; i++) this.getMatrixAt(i, vi), Yi.copy(e.boundingSphere).applyMatrix4(vi), this.boundingSphere.union(Yi);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const i = t.morphTargetInfluences, s = this.morphTexture.source.data.data, r = i.length + 1, a = e * r + 1;
    for (let o = 0; o < i.length; o++) i[o] = s[a + o];
  }
  raycast(e, t) {
    const i = this.matrixWorld, s = this.count;
    if (Xi.geometry = this.geometry, Xi.material = this.material, Xi.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Yi.copy(this.boundingSphere), Yi.applyMatrix4(i), e.ray.intersectsSphere(Yi) !== false)) for (let r = 0; r < s; r++) {
      this.getMatrixAt(r, vi), qo.multiplyMatrices(i, vi), Xi.matrixWorld = qo, Xi.raycast(e, Fs);
      for (let a = 0, o = Fs.length; a < o; a++) {
        const l = Fs[a];
        l.instanceId = r, l.object = this, t.push(l);
      }
      Fs.length = 0;
    }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Yo(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const i = t.morphTargetInfluences, s = i.length + 1;
    this.morphTexture === null && (this.morphTexture = new yu(new Float32Array(s * this.count), s, this.count, Ja, cn));
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let c = 0; c < i.length; c++) a += i[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, l = s * e;
    r[l] = o, r.set(i, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}
const Fr = new R(), Tu = new R(), bu = new Ne();
class Dn {
  constructor(e = new R(1, 0, 0), t = 0) {
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
    const s = Fr.subVectors(i, t).cross(Tu.subVectors(e, t)).normalize();
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
  intersectLine(e, t) {
    const i = e.delta(Fr), s = this.normal.dot(i);
    if (s === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / s;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(i, r);
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
    const i = t || bu.getNormalMatrix(e), s = this.coplanarPoint(Fr).applyMatrix4(e), r = this.normal.applyMatrix3(i).normalize();
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
}
const kn = new Qn(), Au = new j(0.5, 0.5), Os = new R();
class so {
  constructor(e = new Dn(), t = new Dn(), i = new Dn(), s = new Dn(), r = new Dn(), a = new Dn()) {
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
  setFromProjectionMatrix(e, t = hn, i = false) {
    const s = this.planes, r = e.elements, a = r[0], o = r[1], l = r[2], c = r[3], h = r[4], u = r[5], f = r[6], d = r[7], g = r[8], v = r[9], m = r[10], p = r[11], b = r[12], E = r[13], S = r[14], P = r[15];
    if (s[0].setComponents(c - a, d - h, p - g, P - b).normalize(), s[1].setComponents(c + a, d + h, p + g, P + b).normalize(), s[2].setComponents(c + o, d + u, p + v, P + E).normalize(), s[3].setComponents(c - o, d - u, p - v, P - E).normalize(), i) s[4].setComponents(l, f, m, S).normalize(), s[5].setComponents(c - l, d - f, p - m, P - S).normalize();
    else if (s[4].setComponents(c - l, d - f, p - m, P - S).normalize(), t === hn) s[5].setComponents(c + l, d + f, p + m, P + S).normalize();
    else if (t === ir) s[5].setComponents(l, f, m, S).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(kn);
  }
  intersectsSprite(e) {
    kn.center.set(0, 0, 0);
    const t = Au.distanceTo(e.center);
    return kn.radius = 0.7071067811865476 + t, kn.applyMatrix4(e.matrixWorld), this.intersectsSphere(kn);
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
      if (Os.x = s.normal.x > 0 ? e.max.x : e.min.x, Os.y = s.normal.y > 0 ? e.max.y : e.min.y, Os.z = s.normal.z > 0 ? e.max.z : e.min.z, s.distanceToPoint(Os) < 0) return false;
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
class wu extends dn {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Ge(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const rr = new R(), ar = new R(), Ko = new je(), qi = new hs(), Bs = new Qn(), Or = new R(), Jo = new R();
class Ru extends mt {
  constructor(e = new Bt(), t = new wu()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, i = [0];
      for (let s = 1, r = t.count; s < r; s++) rr.fromBufferAttribute(t, s - 1), ar.fromBufferAttribute(t, s), i[s] = i[s - 1], i[s] += rr.distanceTo(ar);
      e.setAttribute("lineDistance", new Tt(i, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const i = this.geometry, s = this.matrixWorld, r = e.params.Line.threshold, a = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Bs.copy(i.boundingSphere), Bs.applyMatrix4(s), Bs.radius += r, e.ray.intersectsSphere(Bs) === false) return;
    Ko.copy(s).invert(), qi.copy(e.ray).applyMatrix4(Ko);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, h = i.index, f = i.attributes.position;
    if (h !== null) {
      const d = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count);
      for (let v = d, m = g - 1; v < m; v += c) {
        const p = h.getX(v), b = h.getX(v + 1), E = zs(this, e, qi, l, p, b, v);
        E && t.push(E);
      }
      if (this.isLineLoop) {
        const v = h.getX(g - 1), m = h.getX(d), p = zs(this, e, qi, l, v, m, g - 1);
        p && t.push(p);
      }
    } else {
      const d = Math.max(0, a.start), g = Math.min(f.count, a.start + a.count);
      for (let v = d, m = g - 1; v < m; v += c) {
        const p = zs(this, e, qi, l, v, v + 1, v);
        p && t.push(p);
      }
      if (this.isLineLoop) {
        const v = zs(this, e, qi, l, g - 1, d, g - 1);
        v && t.push(v);
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
function zs(n, e, t, i, s, r, a) {
  const o = n.geometry.attributes.position;
  if (rr.fromBufferAttribute(o, s), ar.fromBufferAttribute(o, r), t.distanceSqToSegment(rr, ar, Or, Jo) > i) return;
  Or.applyMatrix4(n.matrixWorld);
  const c = e.ray.origin.distanceTo(Or);
  if (!(c < e.near || c > e.far)) return { distance: c, point: Jo.clone().applyMatrix4(n.matrixWorld), index: a, face: null, faceIndex: null, barycoord: null, object: n };
}
const jo = new R(), $o = new R();
class Iv extends Ru {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, i = [];
      for (let s = 0, r = t.count; s < r; s += 2) jo.fromBufferAttribute(t, s), $o.fromBufferAttribute(t, s + 1), i[s] = s === 0 ? 0 : i[s - 1], i[s + 1] = i[s] + jo.distanceTo($o);
      e.setAttribute("lineDistance", new Tt(i, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Cu extends dn {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Ge(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Qo = new je(), Ha = new hs(), Hs = new Qn(), ks = new R();
class Nv extends mt {
  constructor(e = new Bt(), t = new Cu()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const i = this.geometry, s = this.matrixWorld, r = e.params.Points.threshold, a = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Hs.copy(i.boundingSphere), Hs.applyMatrix4(s), Hs.radius += r, e.ray.intersectsSphere(Hs) === false) return;
    Qo.copy(s).invert(), Ha.copy(e.ray).applyMatrix4(Qo);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = i.index, u = i.attributes.position;
    if (c !== null) {
      const f = Math.max(0, a.start), d = Math.min(c.count, a.start + a.count);
      for (let g = f, v = d; g < v; g++) {
        const m = c.getX(g);
        ks.fromBufferAttribute(u, m), el(ks, m, l, s, e, t, this);
      }
    } else {
      const f = Math.max(0, a.start), d = Math.min(u.count, a.start + a.count);
      for (let g = f, v = d; g < v; g++) ks.fromBufferAttribute(u, g), el(ks, g, l, s, e, t, this);
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
function el(n, e, t, i, s, r, a) {
  const o = Ha.distanceSqToPoint(n);
  if (o < t) {
    const l = new R();
    Ha.closestPointToPoint(n, l), l.applyMatrix4(i);
    const c = s.ray.origin.distanceTo(l);
    if (c < s.near || c > s.far) return;
    r.push({ distance: c, distanceToRay: Math.sqrt(o), point: l, index: e, face: null, faceIndex: null, barycoord: null, object: a });
  }
}
class Fv extends vt {
  constructor(e, t, i, s, r, a, o, l, c) {
    super(e, t, i, s, r, a, o, l, c), this.isCanvasTexture = true, this.needsUpdate = true;
  }
}
class ro extends vt {
  constructor(e, t, i = In, s, r, a, o = Yt, l = Yt, c, h = ns, u = 1) {
    if (h !== ns && h !== Li) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const f = { width: e, height: t, depth: u };
    super(f, s, r, a, o, l, h, i, c), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new to(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class fc extends vt {
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = true;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class ao extends Bt {
  constructor(e = 1, t = 1, i = 1, s = 32, r = 1, a = false, o = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: e, radiusBottom: t, height: i, radialSegments: s, heightSegments: r, openEnded: a, thetaStart: o, thetaLength: l };
    const c = this;
    s = Math.floor(s), r = Math.floor(r);
    const h = [], u = [], f = [], d = [];
    let g = 0;
    const v = [], m = i / 2;
    let p = 0;
    b(), a === false && (e > 0 && E(true), t > 0 && E(false)), this.setIndex(h), this.setAttribute("position", new Tt(u, 3)), this.setAttribute("normal", new Tt(f, 3)), this.setAttribute("uv", new Tt(d, 2));
    function b() {
      const S = new R(), P = new R();
      let w = 0;
      const U = (t - e) / i;
      for (let N = 0; N <= r; N++) {
        const y = [], M = N / r, D = M * (t - e) + e;
        for (let O = 0; O <= s; O++) {
          const H = O / s, V = H * l + o, Y = Math.sin(V), W = Math.cos(V);
          P.x = D * Y, P.y = -M * i + m, P.z = D * W, u.push(P.x, P.y, P.z), S.set(Y, U, W).normalize(), f.push(S.x, S.y, S.z), d.push(H, 1 - M), y.push(g++);
        }
        v.push(y);
      }
      for (let N = 0; N < s; N++) for (let y = 0; y < r; y++) {
        const M = v[y][N], D = v[y + 1][N], O = v[y + 1][N + 1], H = v[y][N + 1];
        (e > 0 || y !== 0) && (h.push(M, D, H), w += 3), (t > 0 || y !== r - 1) && (h.push(D, O, H), w += 3);
      }
      c.addGroup(p, w, 0), p += w;
    }
    function E(S) {
      const P = g, w = new j(), U = new R();
      let N = 0;
      const y = S === true ? e : t, M = S === true ? 1 : -1;
      for (let O = 1; O <= s; O++) u.push(0, m * M, 0), f.push(0, M, 0), d.push(0.5, 0.5), g++;
      const D = g;
      for (let O = 0; O <= s; O++) {
        const V = O / s * l + o, Y = Math.cos(V), W = Math.sin(V);
        U.x = y * W, U.y = m * M, U.z = y * Y, u.push(U.x, U.y, U.z), f.push(0, M, 0), w.x = Y * 0.5 + 0.5, w.y = W * 0.5 * M + 0.5, d.push(w.x, w.y), g++;
      }
      for (let O = 0; O < s; O++) {
        const H = P + O, V = D + O;
        S === true ? h.push(V, V + 1, H) : h.push(V + 1, V, H), N += 3;
      }
      c.addGroup(p, N, S === true ? 1 : 2), p += N;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ao(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class dc extends ao {
  constructor(e = 1, t = 1, i = 32, s = 1, r = false, a = 0, o = Math.PI * 2) {
    super(0, e, t, i, s, r, a, o), this.type = "ConeGeometry", this.parameters = { radius: e, height: t, radialSegments: i, heightSegments: s, openEnded: r, thetaStart: a, thetaLength: o };
  }
  static fromJSON(e) {
    return new dc(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class pn {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
  }
  getPoint() {
    console.warn("THREE.Curve: .getPoint() not implemented.");
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
    let o = 0, l = r - 1, c;
    for (; o <= l; ) if (s = Math.floor(o + (l - o) / 2), c = i[s] - a, c < 0) o = s + 1;
    else if (c > 0) l = s - 1;
    else {
      l = s;
      break;
    }
    if (s = l, i[s] === a) return s / (r - 1);
    const h = i[s], f = i[s + 1] - h, d = (a - h) / f;
    return (s + d) / (r - 1);
  }
  getTangent(e, t) {
    let s = e - 1e-4, r = e + 1e-4;
    s < 0 && (s = 0), r > 1 && (r = 1);
    const a = this.getPoint(s), o = this.getPoint(r), l = t || (a.isVector2 ? new j() : new R());
    return l.copy(o).sub(a).normalize(), l;
  }
  getTangentAt(e, t) {
    const i = this.getUtoTmapping(e);
    return this.getTangent(i, t);
  }
  computeFrenetFrames(e, t = false) {
    const i = new R(), s = [], r = [], a = [], o = new R(), l = new je();
    for (let d = 0; d <= e; d++) {
      const g = d / e;
      s[d] = this.getTangentAt(g, new R());
    }
    r[0] = new R(), a[0] = new R();
    let c = Number.MAX_VALUE;
    const h = Math.abs(s[0].x), u = Math.abs(s[0].y), f = Math.abs(s[0].z);
    h <= c && (c = h, i.set(1, 0, 0)), u <= c && (c = u, i.set(0, 1, 0)), f <= c && i.set(0, 0, 1), o.crossVectors(s[0], i).normalize(), r[0].crossVectors(s[0], o), a[0].crossVectors(s[0], r[0]);
    for (let d = 1; d <= e; d++) {
      if (r[d] = r[d - 1].clone(), a[d] = a[d - 1].clone(), o.crossVectors(s[d - 1], s[d]), o.length() > Number.EPSILON) {
        o.normalize();
        const g = Math.acos(Be(s[d - 1].dot(s[d]), -1, 1));
        r[d].applyMatrix4(l.makeRotationAxis(o, g));
      }
      a[d].crossVectors(s[d], r[d]);
    }
    if (t === true) {
      let d = Math.acos(Be(r[0].dot(r[e]), -1, 1));
      d /= e, s[0].dot(o.crossVectors(r[0], r[e])) > 0 && (d = -d);
      for (let g = 1; g <= e; g++) r[g].applyMatrix4(l.makeRotationAxis(s[g], d * g)), a[g].crossVectors(s[g], r[g]);
    }
    return { tangents: s, normals: r, binormals: a };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" } };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
class oo extends pn {
  constructor(e = 0, t = 0, i = 1, s = 1, r = 0, a = Math.PI * 2, o = false, l = 0) {
    super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = i, this.yRadius = s, this.aStartAngle = r, this.aEndAngle = a, this.aClockwise = o, this.aRotation = l;
  }
  getPoint(e, t = new j()) {
    const i = t, s = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += s;
    for (; r > s; ) r -= s;
    r < Number.EPSILON && (a ? r = 0 : r = s), this.aClockwise === true && !a && (r === s ? r = -s : r = r - s);
    const o = this.aStartAngle + e * r;
    let l = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), f = l - this.aX, d = c - this.aY;
      l = f * h - d * u + this.aX, c = f * u + d * h + this.aY;
    }
    return i.set(l, c);
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
class Pu extends oo {
  constructor(e, t, i, s, r, a) {
    super(e, t, i, i, s, r, a), this.isArcCurve = true, this.type = "ArcCurve";
  }
}
function lo() {
  let n = 0, e = 0, t = 0, i = 0;
  function s(r, a, o, l) {
    n = r, e = o, t = -3 * r + 3 * a - 2 * o - l, i = 2 * r - 2 * a + o + l;
  }
  return { initCatmullRom: function(r, a, o, l, c) {
    s(a, o, c * (o - r), c * (l - a));
  }, initNonuniformCatmullRom: function(r, a, o, l, c, h, u) {
    let f = (a - r) / c - (o - r) / (c + h) + (o - a) / h, d = (o - a) / h - (l - a) / (h + u) + (l - o) / u;
    f *= h, d *= h, s(a, o, f, d);
  }, calc: function(r) {
    const a = r * r, o = a * r;
    return n + e * r + t * a + i * o;
  } };
}
const Gs = new R(), Br = new lo(), zr = new lo(), Hr = new lo();
class Du extends pn {
  constructor(e = [], t = false, i = "centripetal", s = 0.5) {
    super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = i, this.tension = s;
  }
  getPoint(e, t = new R()) {
    const i = t, s = this.points, r = s.length, a = (r - (this.closed ? 0 : 1)) * e;
    let o = Math.floor(a), l = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r) + 1) * r : l === 0 && o === r - 1 && (o = r - 2, l = 1);
    let c, h;
    this.closed || o > 0 ? c = s[(o - 1) % r] : (Gs.subVectors(s[0], s[1]).add(s[0]), c = Gs);
    const u = s[o % r], f = s[(o + 1) % r];
    if (this.closed || o + 2 < r ? h = s[(o + 2) % r] : (Gs.subVectors(s[r - 1], s[r - 2]).add(s[r - 1]), h = Gs), this.curveType === "centripetal" || this.curveType === "chordal") {
      const d = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(c.distanceToSquared(u), d), v = Math.pow(u.distanceToSquared(f), d), m = Math.pow(f.distanceToSquared(h), d);
      v < 1e-4 && (v = 1), g < 1e-4 && (g = v), m < 1e-4 && (m = v), Br.initNonuniformCatmullRom(c.x, u.x, f.x, h.x, g, v, m), zr.initNonuniformCatmullRom(c.y, u.y, f.y, h.y, g, v, m), Hr.initNonuniformCatmullRom(c.z, u.z, f.z, h.z, g, v, m);
    } else this.curveType === "catmullrom" && (Br.initCatmullRom(c.x, u.x, f.x, h.x, this.tension), zr.initCatmullRom(c.y, u.y, f.y, h.y, this.tension), Hr.initCatmullRom(c.z, u.z, f.z, h.z, this.tension));
    return i.set(Br.calc(l), zr.calc(l), Hr.calc(l)), i;
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
      this.points.push(new R().fromArray(s));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function tl(n, e, t, i, s) {
  const r = (i - e) * 0.5, a = (s - t) * 0.5, o = n * n, l = n * o;
  return (2 * t - 2 * i + r + a) * l + (-3 * t + 3 * i - 2 * r - a) * o + r * n + t;
}
function Uu(n, e) {
  const t = 1 - n;
  return t * t * e;
}
function Lu(n, e) {
  return 2 * (1 - n) * n * e;
}
function Iu(n, e) {
  return n * n * e;
}
function $i(n, e, t, i) {
  return Uu(n, e) + Lu(n, t) + Iu(n, i);
}
function Nu(n, e) {
  const t = 1 - n;
  return t * t * t * e;
}
function Fu(n, e) {
  const t = 1 - n;
  return 3 * t * t * n * e;
}
function Ou(n, e) {
  return 3 * (1 - n) * n * n * e;
}
function Bu(n, e) {
  return n * n * n * e;
}
function Qi(n, e, t, i, s) {
  return Nu(n, e) + Fu(n, t) + Ou(n, i) + Bu(n, s);
}
class pc extends pn {
  constructor(e = new j(), t = new j(), i = new j(), s = new j()) {
    super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = s;
  }
  getPoint(e, t = new j()) {
    const i = t, s = this.v0, r = this.v1, a = this.v2, o = this.v3;
    return i.set(Qi(e, s.x, r.x, a.x, o.x), Qi(e, s.y, r.y, a.y, o.y)), i;
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
class zu extends pn {
  constructor(e = new R(), t = new R(), i = new R(), s = new R()) {
    super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = s;
  }
  getPoint(e, t = new R()) {
    const i = t, s = this.v0, r = this.v1, a = this.v2, o = this.v3;
    return i.set(Qi(e, s.x, r.x, a.x, o.x), Qi(e, s.y, r.y, a.y, o.y), Qi(e, s.z, r.z, a.z, o.z)), i;
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
class mc extends pn {
  constructor(e = new j(), t = new j()) {
    super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new j()) {
    const i = t;
    return e === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new j()) {
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
class Hu extends pn {
  constructor(e = new R(), t = new R()) {
    super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new R()) {
    const i = t;
    return e === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new R()) {
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
class gc extends pn {
  constructor(e = new j(), t = new j(), i = new j()) {
    super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i;
  }
  getPoint(e, t = new j()) {
    const i = t, s = this.v0, r = this.v1, a = this.v2;
    return i.set($i(e, s.x, r.x, a.x), $i(e, s.y, r.y, a.y)), i;
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
class ku extends pn {
  constructor(e = new R(), t = new R(), i = new R()) {
    super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i;
  }
  getPoint(e, t = new R()) {
    const i = t, s = this.v0, r = this.v1, a = this.v2;
    return i.set($i(e, s.x, r.x, a.x), $i(e, s.y, r.y, a.y), $i(e, s.z, r.z, a.z)), i;
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
class _c extends pn {
  constructor(e = []) {
    super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new j()) {
    const i = t, s = this.points, r = (s.length - 1) * e, a = Math.floor(r), o = r - a, l = s[a === 0 ? a : a - 1], c = s[a], h = s[a > s.length - 2 ? s.length - 1 : a + 1], u = s[a > s.length - 3 ? s.length - 1 : a + 2];
    return i.set(tl(o, l.x, c.x, h.x, u.x), tl(o, l.y, c.y, h.y, u.y)), i;
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
      this.points.push(new j().fromArray(s));
    }
    return this;
  }
}
var nl = Object.freeze({ __proto__: null, ArcCurve: Pu, CatmullRomCurve3: Du, CubicBezierCurve: pc, CubicBezierCurve3: zu, EllipseCurve: oo, LineCurve: mc, LineCurve3: Hu, QuadraticBezierCurve: gc, QuadraticBezierCurve3: ku, SplineCurve: _c });
class Gu extends pn {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      const i = e.isVector2 === true ? "LineCurve" : "LineCurve3";
      this.curves.push(new nl[i](t, e));
    }
    return this;
  }
  getPoint(e, t) {
    const i = e * this.getLength(), s = this.getCurveLengths();
    let r = 0;
    for (; r < s.length; ) {
      if (s[r] >= i) {
        const a = s[r] - i, o = this.curves[r], l = o.getLength(), c = l === 0 ? 0 : 1 - a / l;
        return o.getPointAt(c, t);
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
      const a = r[s], o = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e, l = a.getPoints(o);
      for (let c = 0; c < l.length; c++) {
        const h = l[c];
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
    return this.autoClose = e.autoClose, this;
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
      this.curves.push(new nl[s.type]().fromJSON(s));
    }
    return this;
  }
}
class il extends Gu {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new j(), e && this.setFromPoints(e);
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
    const i = new mc(this.currentPoint.clone(), new j(e, t));
    return this.curves.push(i), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, i, s) {
    const r = new gc(this.currentPoint.clone(), new j(e, t), new j(i, s));
    return this.curves.push(r), this.currentPoint.set(i, s), this;
  }
  bezierCurveTo(e, t, i, s, r, a) {
    const o = new pc(this.currentPoint.clone(), new j(e, t), new j(i, s), new j(r, a));
    return this.curves.push(o), this.currentPoint.set(r, a), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), i = new _c(t);
    return this.curves.push(i), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, i, s, r, a) {
    const o = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(e + o, t + l, i, s, r, a), this;
  }
  absarc(e, t, i, s, r, a) {
    return this.absellipse(e, t, i, i, s, r, a), this;
  }
  ellipse(e, t, i, s, r, a, o, l) {
    const c = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(e + c, t + h, i, s, r, a, o, l), this;
  }
  absellipse(e, t, i, s, r, a, o, l) {
    const c = new oo(e, t, i, s, r, a, o, l);
    if (this.curves.length > 0) {
      const u = c.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(c);
    const h = c.getPoint(1);
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
class Vu extends il {
  constructor(e) {
    super(e), this.uuid = un(), this.type = "Shape", this.holes = [];
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
      this.holes.push(new il().fromJSON(s));
    }
    return this;
  }
}
function Wu(n, e, t = 2) {
  const i = e && e.length, s = i ? e[0] * t : n.length;
  let r = vc(n, 0, s, t, true);
  const a = [];
  if (!r || r.next === r.prev) return a;
  let o, l, c;
  if (i && (r = Ku(n, e, r, t)), n.length > 80 * t) {
    o = 1 / 0, l = 1 / 0;
    let h = -1 / 0, u = -1 / 0;
    for (let f = t; f < s; f += t) {
      const d = n[f], g = n[f + 1];
      d < o && (o = d), g < l && (l = g), d > h && (h = d), g > u && (u = g);
    }
    c = Math.max(h - o, u - l), c = c !== 0 ? 32767 / c : 0;
  }
  return as(r, a, t, o, l, c, 0), a;
}
function vc(n, e, t, i, s) {
  let r;
  if (s === of(n, e, t, i) > 0) for (let a = e; a < t; a += i) r = sl(a / i | 0, n[a], n[a + 1], r);
  else for (let a = t - i; a >= e; a -= i) r = sl(a / i | 0, n[a], n[a + 1], r);
  return r && Ni(r, r.next) && (ls(r), r = r.next), r;
}
function Jn(n, e) {
  if (!n) return n;
  e || (e = n);
  let t = n, i;
  do
    if (i = false, !t.steiner && (Ni(t, t.next) || ut(t.prev, t, t.next) === 0)) {
      if (ls(t), t = e = t.prev, t === t.next) break;
      i = true;
    } else t = t.next;
  while (i || t !== e);
  return e;
}
function as(n, e, t, i, s, r, a) {
  if (!n) return;
  !a && r && ef(n, i, s, r);
  let o = n;
  for (; n.prev !== n.next; ) {
    const l = n.prev, c = n.next;
    if (r ? Yu(n, i, s, r) : Xu(n)) {
      e.push(l.i, n.i, c.i), ls(n), n = c.next, o = c.next;
      continue;
    }
    if (n = c, n === o) {
      a ? a === 1 ? (n = qu(Jn(n), e), as(n, e, t, i, s, r, 2)) : a === 2 && Zu(n, e, t, i, s, r) : as(Jn(n), e, t, i, s, r, 1);
      break;
    }
  }
}
function Xu(n) {
  const e = n.prev, t = n, i = n.next;
  if (ut(e, t, i) >= 0) return false;
  const s = e.x, r = t.x, a = i.x, o = e.y, l = t.y, c = i.y, h = Math.min(s, r, a), u = Math.min(o, l, c), f = Math.max(s, r, a), d = Math.max(o, l, c);
  let g = i.next;
  for (; g !== e; ) {
    if (g.x >= h && g.x <= f && g.y >= u && g.y <= d && Zi(s, o, r, l, a, c, g.x, g.y) && ut(g.prev, g, g.next) >= 0) return false;
    g = g.next;
  }
  return true;
}
function Yu(n, e, t, i) {
  const s = n.prev, r = n, a = n.next;
  if (ut(s, r, a) >= 0) return false;
  const o = s.x, l = r.x, c = a.x, h = s.y, u = r.y, f = a.y, d = Math.min(o, l, c), g = Math.min(h, u, f), v = Math.max(o, l, c), m = Math.max(h, u, f), p = ka(d, g, e, t, i), b = ka(v, m, e, t, i);
  let E = n.prevZ, S = n.nextZ;
  for (; E && E.z >= p && S && S.z <= b; ) {
    if (E.x >= d && E.x <= v && E.y >= g && E.y <= m && E !== s && E !== a && Zi(o, h, l, u, c, f, E.x, E.y) && ut(E.prev, E, E.next) >= 0 || (E = E.prevZ, S.x >= d && S.x <= v && S.y >= g && S.y <= m && S !== s && S !== a && Zi(o, h, l, u, c, f, S.x, S.y) && ut(S.prev, S, S.next) >= 0)) return false;
    S = S.nextZ;
  }
  for (; E && E.z >= p; ) {
    if (E.x >= d && E.x <= v && E.y >= g && E.y <= m && E !== s && E !== a && Zi(o, h, l, u, c, f, E.x, E.y) && ut(E.prev, E, E.next) >= 0) return false;
    E = E.prevZ;
  }
  for (; S && S.z <= b; ) {
    if (S.x >= d && S.x <= v && S.y >= g && S.y <= m && S !== s && S !== a && Zi(o, h, l, u, c, f, S.x, S.y) && ut(S.prev, S, S.next) >= 0) return false;
    S = S.nextZ;
  }
  return true;
}
function qu(n, e) {
  let t = n;
  do {
    const i = t.prev, s = t.next.next;
    !Ni(i, s) && Sc(i, t, t.next, s) && os(i, s) && os(s, i) && (e.push(i.i, t.i, s.i), ls(t), ls(t.next), t = n = s), t = t.next;
  } while (t !== n);
  return Jn(t);
}
function Zu(n, e, t, i, s, r) {
  let a = n;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && sf(a, o)) {
        let l = Mc(a, o);
        a = Jn(a, a.next), l = Jn(l, l.next), as(a, e, t, i, s, r, 0), as(l, e, t, i, s, r, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== n);
}
function Ku(n, e, t, i) {
  const s = [];
  for (let r = 0, a = e.length; r < a; r++) {
    const o = e[r] * i, l = r < a - 1 ? e[r + 1] * i : n.length, c = vc(n, o, l, i, false);
    c === c.next && (c.steiner = true), s.push(nf(c));
  }
  s.sort(Ju);
  for (let r = 0; r < s.length; r++) t = ju(s[r], t);
  return t;
}
function Ju(n, e) {
  let t = n.x - e.x;
  if (t === 0 && (t = n.y - e.y, t === 0)) {
    const i = (n.next.y - n.y) / (n.next.x - n.x), s = (e.next.y - e.y) / (e.next.x - e.x);
    t = i - s;
  }
  return t;
}
function ju(n, e) {
  const t = $u(n, e);
  if (!t) return e;
  const i = Mc(t, n);
  return Jn(i, i.next), Jn(t, t.next);
}
function $u(n, e) {
  let t = e;
  const i = n.x, s = n.y;
  let r = -1 / 0, a;
  if (Ni(n, t)) return t;
  do {
    if (Ni(n, t.next)) return t.next;
    if (s <= t.y && s >= t.next.y && t.next.y !== t.y) {
      const u = t.x + (s - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (u <= i && u > r && (r = u, a = t.x < t.next.x ? t : t.next, u === i)) return a;
    }
    t = t.next;
  } while (t !== e);
  if (!a) return null;
  const o = a, l = a.x, c = a.y;
  let h = 1 / 0;
  t = a;
  do {
    if (i >= t.x && t.x >= l && i !== t.x && xc(s < c ? i : r, s, l, c, s < c ? r : i, s, t.x, t.y)) {
      const u = Math.abs(s - t.y) / (i - t.x);
      os(t, n) && (u < h || u === h && (t.x > a.x || t.x === a.x && Qu(a, t))) && (a = t, h = u);
    }
    t = t.next;
  } while (t !== o);
  return a;
}
function Qu(n, e) {
  return ut(n.prev, n, e.prev) < 0 && ut(e.next, n, n.next) < 0;
}
function ef(n, e, t, i) {
  let s = n;
  do
    s.z === 0 && (s.z = ka(s.x, s.y, e, t, i)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next;
  while (s !== n);
  s.prevZ.nextZ = null, s.prevZ = null, tf(s);
}
function tf(n) {
  let e, t = 1;
  do {
    let i = n, s;
    n = null;
    let r = null;
    for (e = 0; i; ) {
      e++;
      let a = i, o = 0;
      for (let c = 0; c < t && (o++, a = a.nextZ, !!a); c++) ;
      let l = t;
      for (; o > 0 || l > 0 && a; ) o !== 0 && (l === 0 || !a || i.z <= a.z) ? (s = i, i = i.nextZ, o--) : (s = a, a = a.nextZ, l--), r ? r.nextZ = s : n = s, s.prevZ = r, r = s;
      i = a;
    }
    r.nextZ = null, t *= 2;
  } while (e > 1);
  return n;
}
function ka(n, e, t, i, s) {
  return n = (n - t) * s | 0, e = (e - i) * s | 0, n = (n | n << 8) & 16711935, n = (n | n << 4) & 252645135, n = (n | n << 2) & 858993459, n = (n | n << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, n | e << 1;
}
function nf(n) {
  let e = n, t = n;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== n);
  return t;
}
function xc(n, e, t, i, s, r, a, o) {
  return (s - a) * (e - o) >= (n - a) * (r - o) && (n - a) * (i - o) >= (t - a) * (e - o) && (t - a) * (r - o) >= (s - a) * (i - o);
}
function Zi(n, e, t, i, s, r, a, o) {
  return !(n === a && e === o) && xc(n, e, t, i, s, r, a, o);
}
function sf(n, e) {
  return n.next.i !== e.i && n.prev.i !== e.i && !rf(n, e) && (os(n, e) && os(e, n) && af(n, e) && (ut(n.prev, n, e.prev) || ut(n, e.prev, e)) || Ni(n, e) && ut(n.prev, n, n.next) > 0 && ut(e.prev, e, e.next) > 0);
}
function ut(n, e, t) {
  return (e.y - n.y) * (t.x - e.x) - (e.x - n.x) * (t.y - e.y);
}
function Ni(n, e) {
  return n.x === e.x && n.y === e.y;
}
function Sc(n, e, t, i) {
  const s = Ws(ut(n, e, t)), r = Ws(ut(n, e, i)), a = Ws(ut(t, i, n)), o = Ws(ut(t, i, e));
  return !!(s !== r && a !== o || s === 0 && Vs(n, t, e) || r === 0 && Vs(n, i, e) || a === 0 && Vs(t, n, i) || o === 0 && Vs(t, e, i));
}
function Vs(n, e, t) {
  return e.x <= Math.max(n.x, t.x) && e.x >= Math.min(n.x, t.x) && e.y <= Math.max(n.y, t.y) && e.y >= Math.min(n.y, t.y);
}
function Ws(n) {
  return n > 0 ? 1 : n < 0 ? -1 : 0;
}
function rf(n, e) {
  let t = n;
  do {
    if (t.i !== n.i && t.next.i !== n.i && t.i !== e.i && t.next.i !== e.i && Sc(t, t.next, n, e)) return true;
    t = t.next;
  } while (t !== n);
  return false;
}
function os(n, e) {
  return ut(n.prev, n, n.next) < 0 ? ut(n, e, n.next) >= 0 && ut(n, n.prev, e) >= 0 : ut(n, e, n.prev) < 0 || ut(n, n.next, e) < 0;
}
function af(n, e) {
  let t = n, i = false;
  const s = (n.x + e.x) / 2, r = (n.y + e.y) / 2;
  do
    t.y > r != t.next.y > r && t.next.y !== t.y && s < (t.next.x - t.x) * (r - t.y) / (t.next.y - t.y) + t.x && (i = !i), t = t.next;
  while (t !== n);
  return i;
}
function Mc(n, e) {
  const t = Ga(n.i, n.x, n.y), i = Ga(e.i, e.x, e.y), s = n.next, r = e.prev;
  return n.next = e, e.prev = n, t.next = s, s.prev = t, i.next = t, t.prev = i, r.next = i, i.prev = r, i;
}
function sl(n, e, t, i) {
  const s = Ga(n, e, t);
  return i ? (s.next = i.next, s.prev = i, i.next.prev = s, i.next = s) : (s.prev = s, s.next = s), s;
}
function ls(n) {
  n.next.prev = n.prev, n.prev.next = n.next, n.prevZ && (n.prevZ.nextZ = n.nextZ), n.nextZ && (n.nextZ.prevZ = n.prevZ);
}
function Ga(n, e, t) {
  return { i: n, x: e, y: t, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: false };
}
function of(n, e, t, i) {
  let s = 0;
  for (let r = e, a = t - i; r < t; r += i) s += (n[a] - n[r]) * (n[r + 1] + n[a + 1]), a = r;
  return s;
}
class lf {
  static triangulate(e, t, i = 2) {
    return Wu(e, t, i);
  }
}
class es {
  static area(e) {
    const t = e.length;
    let i = 0;
    for (let s = t - 1, r = 0; r < t; s = r++) i += e[s].x * e[r].y - e[r].x * e[s].y;
    return i * 0.5;
  }
  static isClockWise(e) {
    return es.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const i = [], s = [], r = [];
    rl(e), al(i, e);
    let a = e.length;
    t.forEach(rl);
    for (let l = 0; l < t.length; l++) s.push(a), a += t[l].length, al(i, t[l]);
    const o = lf.triangulate(i, s);
    for (let l = 0; l < o.length; l += 3) r.push(o.slice(l, l + 3));
    return r;
  }
}
function rl(n) {
  const e = n.length;
  e > 2 && n[e - 1].equals(n[0]) && n.pop();
}
function al(n, e) {
  for (let t = 0; t < e.length; t++) n.push(e[t].x), n.push(e[t].y);
}
class lr extends Bt {
  constructor(e = 1, t = 1, i = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: i, heightSegments: s };
    const r = e / 2, a = t / 2, o = Math.floor(i), l = Math.floor(s), c = o + 1, h = l + 1, u = e / o, f = t / l, d = [], g = [], v = [], m = [];
    for (let p = 0; p < h; p++) {
      const b = p * f - a;
      for (let E = 0; E < c; E++) {
        const S = E * u - r;
        g.push(S, -b, 0), v.push(0, 0, 1), m.push(E / o), m.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++) for (let b = 0; b < o; b++) {
      const E = b + c * p, S = b + c * (p + 1), P = b + 1 + c * (p + 1), w = b + 1 + c * p;
      d.push(E, S, w), d.push(S, P, w);
    }
    this.setIndex(d), this.setAttribute("position", new Tt(g, 3)), this.setAttribute("normal", new Tt(v, 3)), this.setAttribute("uv", new Tt(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new lr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class yc extends Bt {
  constructor(e = new Vu([new j(0, 0.5), new j(-0.5, -0.5), new j(0.5, -0.5)]), t = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = { shapes: e, curveSegments: t };
    const i = [], s = [], r = [], a = [];
    let o = 0, l = 0;
    if (Array.isArray(e) === false) c(e);
    else for (let h = 0; h < e.length; h++) c(e[h]), this.addGroup(o, l, h), o += l, l = 0;
    this.setIndex(i), this.setAttribute("position", new Tt(s, 3)), this.setAttribute("normal", new Tt(r, 3)), this.setAttribute("uv", new Tt(a, 2));
    function c(h) {
      const u = s.length / 3, f = h.extractPoints(t);
      let d = f.shape;
      const g = f.holes;
      es.isClockWise(d) === false && (d = d.reverse());
      for (let m = 0, p = g.length; m < p; m++) {
        const b = g[m];
        es.isClockWise(b) === true && (g[m] = b.reverse());
      }
      const v = es.triangulateShape(d, g);
      for (let m = 0, p = g.length; m < p; m++) {
        const b = g[m];
        d = d.concat(b);
      }
      for (let m = 0, p = d.length; m < p; m++) {
        const b = d[m];
        s.push(b.x, b.y, 0), r.push(0, 0, 1), a.push(b.x, b.y);
      }
      for (let m = 0, p = v.length; m < p; m++) {
        const b = v[m], E = b[0] + u, S = b[1] + u, P = b[2] + u;
        i.push(E, S, P), l += 3;
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes;
    return cf(t, e);
  }
  static fromJSON(e, t) {
    const i = [];
    for (let s = 0, r = e.shapes.length; s < r; s++) {
      const a = t[e.shapes[s]];
      i.push(a);
    }
    return new yc(i, e.curveSegments);
  }
}
function cf(n, e) {
  if (e.shapes = [], Array.isArray(n)) for (let t = 0, i = n.length; t < i; t++) {
    const s = n[t];
    e.shapes.push(s.uuid);
  }
  else e.shapes.push(n.uuid);
  return e;
}
class Ec extends Bt {
  constructor(e = 1, t = 0.4, i = 12, s = 48, r = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = { radius: e, tube: t, radialSegments: i, tubularSegments: s, arc: r }, i = Math.floor(i), s = Math.floor(s);
    const a = [], o = [], l = [], c = [], h = new R(), u = new R(), f = new R();
    for (let d = 0; d <= i; d++) for (let g = 0; g <= s; g++) {
      const v = g / s * r, m = d / i * Math.PI * 2;
      u.x = (e + t * Math.cos(m)) * Math.cos(v), u.y = (e + t * Math.cos(m)) * Math.sin(v), u.z = t * Math.sin(m), o.push(u.x, u.y, u.z), h.x = e * Math.cos(v), h.y = e * Math.sin(v), f.subVectors(u, h).normalize(), l.push(f.x, f.y, f.z), c.push(g / s), c.push(d / i);
    }
    for (let d = 1; d <= i; d++) for (let g = 1; g <= s; g++) {
      const v = (s + 1) * d + g - 1, m = (s + 1) * (d - 1) + g - 1, p = (s + 1) * (d - 1) + g, b = (s + 1) * d + g;
      a.push(v, m, b), a.push(m, p, b);
    }
    this.setIndex(a), this.setAttribute("position", new Tt(o, 3)), this.setAttribute("normal", new Tt(l, 3)), this.setAttribute("uv", new Tt(c, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ec(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class Ov extends dn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Ge(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ge(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = tc, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new rn(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class hf extends dn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = jn, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class uf extends dn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const kr = { enabled: false, files: {}, add: function(n, e) {
  this.enabled !== false && (this.files[n] = e);
}, get: function(n) {
  if (this.enabled !== false) return this.files[n];
}, remove: function(n) {
  delete this.files[n];
}, clear: function() {
  this.files = {};
} };
class ff {
  constructor(e, t, i) {
    const s = this;
    let r = false, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this.abortController = new AbortController(), this.itemStart = function(h) {
      o++, r === false && s.onStart !== void 0 && s.onStart(h, a, o), r = true;
    }, this.itemEnd = function(h) {
      a++, s.onProgress !== void 0 && s.onProgress(h, a, o), a === o && (r = false, s.onLoad !== void 0 && s.onLoad());
    }, this.itemError = function(h) {
      s.onError !== void 0 && s.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, u) {
      return c.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = c.indexOf(h);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, f = c.length; u < f; u += 2) {
        const d = c[u], g = c[u + 1];
        if (d.global && (d.lastIndex = 0), d.test(h)) return g;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this.abortController = new AbortController(), this;
    };
  }
}
const df = new ff();
class co {
  constructor(e) {
    this.manager = e !== void 0 ? e : df, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
  abort() {
    return this;
  }
}
co.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const xi = /* @__PURE__ */ new WeakMap();
class pf extends co {
  constructor(e) {
    super(e);
  }
  load(e, t, i, s) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = kr.get(`image:${e}`);
    if (a !== void 0) {
      if (a.complete === true) r.manager.itemStart(e), setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0);
      else {
        let u = xi.get(a);
        u === void 0 && (u = [], xi.set(a, u)), u.push({ onLoad: t, onError: s });
      }
      return a;
    }
    const o = ss("img");
    function l() {
      h(), t && t(this);
      const u = xi.get(this) || [];
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        d.onLoad && d.onLoad(this);
      }
      xi.delete(this), r.manager.itemEnd(e);
    }
    function c(u) {
      h(), s && s(u), kr.remove(`image:${e}`);
      const f = xi.get(this) || [];
      for (let d = 0; d < f.length; d++) {
        const g = f[d];
        g.onError && g.onError(u);
      }
      xi.delete(this), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", l, false), o.removeEventListener("error", c, false);
    }
    return o.addEventListener("load", l, false), o.addEventListener("error", c, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), kr.add(`image:${e}`, o), r.manager.itemStart(e), o.src = e, o;
  }
}
class Bv extends co {
  constructor(e) {
    super(e);
  }
  load(e, t, i, s) {
    const r = new vt(), a = new pf(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      r.image = o, r.needsUpdate = true, t !== void 0 && t(r);
    }, i, s), r;
  }
}
class Tc extends mt {
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Ge(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
class zv extends Tc {
  constructor(e, t, i) {
    super(e, i), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(mt.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Ge(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const Gr = new je(), ol = new R(), ll = new R();
class mf {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new j(512, 512), this.mapType = gt, this.map = null, this.mapPass = null, this.matrix = new je(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new so(), this._frameExtents = new j(1, 1), this._viewportCount = 1, this._viewports = [new lt(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, i = this.matrix;
    ol.setFromMatrixPosition(e.matrixWorld), t.position.copy(ol), ll.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ll), t.updateMatrixWorld(), Gr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Gr, t.coordinateSystem, t.reversedDepth), t.reversedDepth ? i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1) : i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), i.multiply(Gr);
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
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
  }
}
class bc extends io {
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
    let r = i - e, a = i + e, o = s + t, l = s - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, a = r + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class gf extends mf {
  constructor() {
    super(new bc(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class Hv extends Tc {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(mt.DEFAULT_UP), this.updateMatrix(), this.target = new mt(), this.shadow = new gf();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class _f extends Vt {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = e;
  }
}
class kv {
  constructor(e = true) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
  }
  start() {
    this.startTime = performance.now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
  }
  stop() {
    this.getElapsedTime(), this.running = false, this.autoStart = false;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = performance.now();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
class Re {
  constructor(e) {
    this.value = e;
  }
  clone() {
    return new Re(this.value.clone === void 0 ? this.value : this.value.clone());
  }
}
const cl = new je();
class Gv {
  constructor(e, t, i = 0, s = 1 / 0) {
    this.ray = new hs(e, t), this.near = i, this.far = s, this.camera = null, this.layers = new no(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return cl.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(cl), this;
  }
  intersectObject(e, t = true, i = []) {
    return Va(e, this, i, t), i.sort(hl), i;
  }
  intersectObjects(e, t = true, i = []) {
    for (let s = 0, r = e.length; s < r; s++) Va(e[s], this, i, t);
    return i.sort(hl), i;
  }
}
function hl(n, e) {
  return n.distance - e.distance;
}
function Va(n, e, t, i) {
  let s = true;
  if (n.layers.test(e.layers) && n.raycast(e, t) === false && (s = false), s === true && i === true) {
    const r = n.children;
    for (let a = 0, o = r.length; a < o; a++) Va(r[a], e, t, true);
  }
}
class ul {
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
    return this.phi = Be(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, i) {
    return this.radius = Math.sqrt(e * e + t * t + i * i), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, i), this.phi = Math.acos(Be(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ac extends fn {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(e) {
    if (e === void 0) {
      console.warn("THREE.Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), this.domElement = e;
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function fl(n, e, t, i) {
  const s = vf(i);
  switch (t) {
    case $l:
      return n * e;
    case Ja:
      return n * e / s.components * s.byteLength;
    case ja:
      return n * e / s.components * s.byteLength;
    case ec:
      return n * e * 2 / s.components * s.byteLength;
    case $a:
      return n * e * 2 / s.components * s.byteLength;
    case Ql:
      return n * e * 3 / s.components * s.byteLength;
    case sn:
      return n * e * 4 / s.components * s.byteLength;
    case Qa:
      return n * e * 4 / s.components * s.byteLength;
    case Js:
    case js:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case $s:
    case Qs:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case fa:
    case pa:
      return Math.max(n, 16) * Math.max(e, 8) / 4;
    case ua:
    case da:
      return Math.max(n, 8) * Math.max(e, 8) / 2;
    case ma:
    case ga:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case _a:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case va:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case xa:
      return Math.floor((n + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Sa:
      return Math.floor((n + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Ma:
      return Math.floor((n + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case ya:
      return Math.floor((n + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Ea:
      return Math.floor((n + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Ta:
      return Math.floor((n + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case ba:
      return Math.floor((n + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Aa:
      return Math.floor((n + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case wa:
      return Math.floor((n + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Ra:
      return Math.floor((n + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Ca:
      return Math.floor((n + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Pa:
      return Math.floor((n + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Da:
      return Math.floor((n + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Ua:
    case La:
    case Ia:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
    case Na:
    case Fa:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 8;
    case Oa:
    case Ba:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function vf(n) {
  switch (n) {
    case gt:
    case Zl:
      return { byteLength: 1, components: 1 };
    case ts:
    case Kl:
    case cs:
      return { byteLength: 2, components: 1 };
    case Za:
    case Ka:
      return { byteLength: 2, components: 4 };
    case In:
    case qa:
    case cn:
      return { byteLength: 4, components: 1 };
    case Jl:
    case jl:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${n}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "180" } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "180");
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function wc() {
  let n = null, e = false, t = null, i = null;
  function s(r, a) {
    t(r, a), i = n.requestAnimationFrame(s);
  }
  return { start: function() {
    e !== true && t !== null && (i = n.requestAnimationFrame(s), e = true);
  }, stop: function() {
    n.cancelAnimationFrame(i), e = false;
  }, setAnimationLoop: function(r) {
    t = r;
  }, setContext: function(r) {
    n = r;
  } };
}
function xf(n) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, h = o.usage, u = c.byteLength, f = n.createBuffer();
    n.bindBuffer(l, f), n.bufferData(l, c, h), o.onUploadCallback();
    let d;
    if (c instanceof Float32Array) d = n.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array) d = n.HALF_FLOAT;
    else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? d = n.HALF_FLOAT : d = n.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) d = n.SHORT;
    else if (c instanceof Uint32Array) d = n.UNSIGNED_INT;
    else if (c instanceof Int32Array) d = n.INT;
    else if (c instanceof Int8Array) d = n.BYTE;
    else if (c instanceof Uint8Array) d = n.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) d = n.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: f, type: d, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: u };
  }
  function i(o, l, c) {
    const h = l.array, u = l.updateRanges;
    if (n.bindBuffer(c, o), u.length === 0) n.bufferSubData(c, 0, h);
    else {
      u.sort((d, g) => d.start - g.start);
      let f = 0;
      for (let d = 1; d < u.length; d++) {
        const g = u[f], v = u[d];
        v.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, v.start + v.count - g.start) : (++f, u[f] = v);
      }
      u.length = f + 1;
      for (let d = 0, g = u.length; d < g; d++) {
        const v = u[d];
        n.bufferSubData(c, v.start * h.BYTES_PER_ELEMENT, h, v.start, v.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function s(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (n.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const c = e.get(o);
    if (c === void 0) e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      i(c.buffer, o, l), c.version = o.version;
    }
  }
  return { get: s, remove: r, update: a };
}
var Sf = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Mf = `#ifdef USE_ALPHAHASH
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
#endif`, yf = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Ef = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Tf = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, bf = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Af = `#ifdef USE_AOMAP
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
#endif`, wf = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Rf = `#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Cf = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Pf = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Df = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Uf = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Lf = `#ifdef USE_IRIDESCENCE
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
#endif`, If = `#ifdef USE_BUMPMAP
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
#endif`, Nf = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Ff = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Of = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Bf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, zf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Hf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, kf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Gf = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Vf = `#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`, Wf = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Xf = `vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Yf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, qf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Zf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Kf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Jf = "gl_FragColor = linearToOutputTexel( gl_FragColor );", jf = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, $f = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Qf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, ed = `#ifdef USE_ENVMAP
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
#endif`, td = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, nd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, id = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, sd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, rd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, ad = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, od = `#ifdef USE_GRADIENTMAP
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
}`, ld = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, cd = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, hd = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, ud = `uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`, fd = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, dd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, pd = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, md = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, gd = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, _d = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`, vd = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, xd = `
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Sd = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Md = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, yd = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Ed = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Td = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, bd = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Ad = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, wd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Rd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Cd = `#if defined( USE_POINTS_UV )
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
#endif`, Pd = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Dd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Ud = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Ld = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Id = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Nd = `#ifdef USE_MORPHTARGETS
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
#endif`, Fd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Od = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Bd = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, zd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Hd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, kd = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Gd = `#ifdef USE_NORMALMAP
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
#endif`, Vd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Wd = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Xd = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Yd = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, qd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Zd = `vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Kd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Jd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, jd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, $d = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Qd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, ep = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, tp = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, np = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`, ip = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`, sp = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`, rp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, ap = `#ifdef USE_SKINNING
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
#endif`, op = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, lp = `#ifdef USE_SKINNING
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
#endif`, cp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, hp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, up = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, fp = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, dp = `#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, pp = `#ifdef USE_TRANSMISSION
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
#endif`, mp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, gp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, _p = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, vp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const xp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Sp = `uniform sampler2D t2D;
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
}`, Mp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, yp = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ep = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Tp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, bp = `#include <common>
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
}`, Ap = `#if DEPTH_PACKING == 3200
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
}`, wp = `#define DISTANCE
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
}`, Rp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Cp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Pp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Dp = `uniform float scale;
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
}`, Up = `uniform vec3 diffuse;
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
}`, Lp = `#include <common>
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
}`, Ip = `uniform vec3 diffuse;
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
}`, Np = `#define LAMBERT
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
}`, Fp = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`, Op = `#define MATCAP
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
}`, Bp = `#define MATCAP
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
}`, zp = `#define NORMAL
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
}`, Hp = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, kp = `#define PHONG
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
}`, Gp = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`, Vp = `#define STANDARD
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
}`, Wp = `#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`, Xp = `#define TOON
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
}`, Yp = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`, qp = `uniform float size;
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
}`, Zp = `uniform vec3 diffuse;
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
}`, Kp = `#include <common>
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
}`, Jp = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`, jp = `uniform float rotation;
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
}`, $p = `uniform vec3 diffuse;
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
}`, Oe = { alphahash_fragment: Sf, alphahash_pars_fragment: Mf, alphamap_fragment: yf, alphamap_pars_fragment: Ef, alphatest_fragment: Tf, alphatest_pars_fragment: bf, aomap_fragment: Af, aomap_pars_fragment: wf, batching_pars_vertex: Rf, batching_vertex: Cf, begin_vertex: Pf, beginnormal_vertex: Df, bsdfs: Uf, iridescence_fragment: Lf, bumpmap_pars_fragment: If, clipping_planes_fragment: Nf, clipping_planes_pars_fragment: Ff, clipping_planes_pars_vertex: Of, clipping_planes_vertex: Bf, color_fragment: zf, color_pars_fragment: Hf, color_pars_vertex: kf, color_vertex: Gf, common: Vf, cube_uv_reflection_fragment: Wf, defaultnormal_vertex: Xf, displacementmap_pars_vertex: Yf, displacementmap_vertex: qf, emissivemap_fragment: Zf, emissivemap_pars_fragment: Kf, colorspace_fragment: Jf, colorspace_pars_fragment: jf, envmap_fragment: $f, envmap_common_pars_fragment: Qf, envmap_pars_fragment: ed, envmap_pars_vertex: td, envmap_physical_pars_fragment: fd, envmap_vertex: nd, fog_vertex: id, fog_pars_vertex: sd, fog_fragment: rd, fog_pars_fragment: ad, gradientmap_pars_fragment: od, lightmap_pars_fragment: ld, lights_lambert_fragment: cd, lights_lambert_pars_fragment: hd, lights_pars_begin: ud, lights_toon_fragment: dd, lights_toon_pars_fragment: pd, lights_phong_fragment: md, lights_phong_pars_fragment: gd, lights_physical_fragment: _d, lights_physical_pars_fragment: vd, lights_fragment_begin: xd, lights_fragment_maps: Sd, lights_fragment_end: Md, logdepthbuf_fragment: yd, logdepthbuf_pars_fragment: Ed, logdepthbuf_pars_vertex: Td, logdepthbuf_vertex: bd, map_fragment: Ad, map_pars_fragment: wd, map_particle_fragment: Rd, map_particle_pars_fragment: Cd, metalnessmap_fragment: Pd, metalnessmap_pars_fragment: Dd, morphinstance_vertex: Ud, morphcolor_vertex: Ld, morphnormal_vertex: Id, morphtarget_pars_vertex: Nd, morphtarget_vertex: Fd, normal_fragment_begin: Od, normal_fragment_maps: Bd, normal_pars_fragment: zd, normal_pars_vertex: Hd, normal_vertex: kd, normalmap_pars_fragment: Gd, clearcoat_normal_fragment_begin: Vd, clearcoat_normal_fragment_maps: Wd, clearcoat_pars_fragment: Xd, iridescence_pars_fragment: Yd, opaque_fragment: qd, packing: Zd, premultiplied_alpha_fragment: Kd, project_vertex: Jd, dithering_fragment: jd, dithering_pars_fragment: $d, roughnessmap_fragment: Qd, roughnessmap_pars_fragment: ep, shadowmap_pars_fragment: tp, shadowmap_pars_vertex: np, shadowmap_vertex: ip, shadowmask_pars_fragment: sp, skinbase_vertex: rp, skinning_pars_vertex: ap, skinning_vertex: op, skinnormal_vertex: lp, specularmap_fragment: cp, specularmap_pars_fragment: hp, tonemapping_fragment: up, tonemapping_pars_fragment: fp, transmission_fragment: dp, transmission_pars_fragment: pp, uv_pars_fragment: mp, uv_pars_vertex: gp, uv_vertex: _p, worldpos_vertex: vp, background_vert: xp, background_frag: Sp, backgroundCube_vert: Mp, backgroundCube_frag: yp, cube_vert: Ep, cube_frag: Tp, depth_vert: bp, depth_frag: Ap, distanceRGBA_vert: wp, distanceRGBA_frag: Rp, equirect_vert: Cp, equirect_frag: Pp, linedashed_vert: Dp, linedashed_frag: Up, meshbasic_vert: Lp, meshbasic_frag: Ip, meshlambert_vert: Np, meshlambert_frag: Fp, meshmatcap_vert: Op, meshmatcap_frag: Bp, meshnormal_vert: zp, meshnormal_frag: Hp, meshphong_vert: kp, meshphong_frag: Gp, meshphysical_vert: Vp, meshphysical_frag: Wp, meshtoon_vert: Xp, meshtoon_frag: Yp, points_vert: qp, points_frag: Zp, shadow_vert: Kp, shadow_frag: Jp, sprite_vert: jp, sprite_frag: $p }, re = { common: { diffuse: { value: new Ge(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ne() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ne() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ne() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ne() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ne() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ne() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ne() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ne() }, normalScale: { value: new j(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ne() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ne() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ne() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ne() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Ge(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Ge(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ne() }, alphaTest: { value: 0 }, uvTransform: { value: new Ne() } }, sprite: { diffuse: { value: new Ge(16777215) }, opacity: { value: 1 }, center: { value: new j(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ne() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ne() }, alphaTest: { value: 0 } } }, on = { basic: { uniforms: Lt([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.fog]), vertexShader: Oe.meshbasic_vert, fragmentShader: Oe.meshbasic_frag }, lambert: { uniforms: Lt([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.fog, re.lights, { emissive: { value: new Ge(0) } }]), vertexShader: Oe.meshlambert_vert, fragmentShader: Oe.meshlambert_frag }, phong: { uniforms: Lt([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.fog, re.lights, { emissive: { value: new Ge(0) }, specular: { value: new Ge(1118481) }, shininess: { value: 30 } }]), vertexShader: Oe.meshphong_vert, fragmentShader: Oe.meshphong_frag }, standard: { uniforms: Lt([re.common, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.roughnessmap, re.metalnessmap, re.fog, re.lights, { emissive: { value: new Ge(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Oe.meshphysical_vert, fragmentShader: Oe.meshphysical_frag }, toon: { uniforms: Lt([re.common, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.gradientmap, re.fog, re.lights, { emissive: { value: new Ge(0) } }]), vertexShader: Oe.meshtoon_vert, fragmentShader: Oe.meshtoon_frag }, matcap: { uniforms: Lt([re.common, re.bumpmap, re.normalmap, re.displacementmap, re.fog, { matcap: { value: null } }]), vertexShader: Oe.meshmatcap_vert, fragmentShader: Oe.meshmatcap_frag }, points: { uniforms: Lt([re.points, re.fog]), vertexShader: Oe.points_vert, fragmentShader: Oe.points_frag }, dashed: { uniforms: Lt([re.common, re.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Oe.linedashed_vert, fragmentShader: Oe.linedashed_frag }, depth: { uniforms: Lt([re.common, re.displacementmap]), vertexShader: Oe.depth_vert, fragmentShader: Oe.depth_frag }, normal: { uniforms: Lt([re.common, re.bumpmap, re.normalmap, re.displacementmap, { opacity: { value: 1 } }]), vertexShader: Oe.meshnormal_vert, fragmentShader: Oe.meshnormal_frag }, sprite: { uniforms: Lt([re.sprite, re.fog]), vertexShader: Oe.sprite_vert, fragmentShader: Oe.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ne() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Oe.background_vert, fragmentShader: Oe.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ne() } }, vertexShader: Oe.backgroundCube_vert, fragmentShader: Oe.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Oe.cube_vert, fragmentShader: Oe.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Oe.equirect_vert, fragmentShader: Oe.equirect_frag }, distanceRGBA: { uniforms: Lt([re.common, re.displacementmap, { referencePosition: { value: new R() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Oe.distanceRGBA_vert, fragmentShader: Oe.distanceRGBA_frag }, shadow: { uniforms: Lt([re.lights, re.fog, { color: { value: new Ge(0) }, opacity: { value: 1 } }]), vertexShader: Oe.shadow_vert, fragmentShader: Oe.shadow_frag } };
on.physical = { uniforms: Lt([on.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ne() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ne() }, clearcoatNormalScale: { value: new j(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ne() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ne() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ne() }, sheen: { value: 0 }, sheenColor: { value: new Ge(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ne() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ne() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ne() }, transmissionSamplerSize: { value: new j() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ne() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Ge(0) }, specularColor: { value: new Ge(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ne() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ne() }, anisotropyVector: { value: new j() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ne() } }]), vertexShader: Oe.meshphysical_vert, fragmentShader: Oe.meshphysical_frag };
const Xs = { r: 0, b: 0, g: 0 }, Gn = new rn(), Qp = new je();
function em(n, e, t, i, s, r, a) {
  const o = new Ge(0);
  let l = r === true ? 0 : 1, c, h, u = null, f = 0, d = null;
  function g(E) {
    let S = E.isScene === true ? E.background : null;
    return S && S.isTexture && (S = (E.backgroundBlurriness > 0 ? t : e).get(S)), S;
  }
  function v(E) {
    let S = false;
    const P = g(E);
    P === null ? p(o, l) : P && P.isColor && (p(P, 1), S = true);
    const w = n.xr.getEnvironmentBlendMode();
    w === "additive" ? i.buffers.color.setClear(0, 0, 0, 1, a) : w === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, a), (n.autoClear || S) && (i.buffers.depth.setTest(true), i.buffers.depth.setMask(true), i.buffers.color.setMask(true), n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil));
  }
  function m(E, S) {
    const P = g(S);
    P && (P.isCubeTexture || P.mapping === or) ? (h === void 0 && (h = new jt(new us(1, 1, 1), new bt({ name: "BackgroundCubeMaterial", uniforms: Ii(on.backgroundCube.uniforms), vertexShader: on.backgroundCube.vertexShader, fragmentShader: on.backgroundCube.fragmentShader, side: Et, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(w, U, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), s.update(h)), Gn.copy(S.backgroundRotation), Gn.x *= -1, Gn.y *= -1, Gn.z *= -1, P.isCubeTexture && P.isRenderTargetTexture === false && (Gn.y *= -1, Gn.z *= -1), h.material.uniforms.envMap.value = P, h.material.uniforms.flipEnvMap.value = P.isCubeTexture && P.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(Gn)), h.material.toneMapped = Ye.getTransfer(P.colorSpace) !== Qe, (u !== P || f !== P.version || d !== n.toneMapping) && (h.material.needsUpdate = true, u = P, f = P.version, d = n.toneMapping), h.layers.enableAll(), E.unshift(h, h.geometry, h.material, 0, 0, null)) : P && P.isTexture && (c === void 0 && (c = new jt(new lr(2, 2), new bt({ name: "BackgroundMaterial", uniforms: Ii(on.background.uniforms), vertexShader: on.background.vertexShader, fragmentShader: on.background.fragmentShader, side: En, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), s.update(c)), c.material.uniforms.t2D.value = P, c.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, c.material.toneMapped = Ye.getTransfer(P.colorSpace) !== Qe, P.matrixAutoUpdate === true && P.updateMatrix(), c.material.uniforms.uvTransform.value.copy(P.matrix), (u !== P || f !== P.version || d !== n.toneMapping) && (c.material.needsUpdate = true, u = P, f = P.version, d = n.toneMapping), c.layers.enableAll(), E.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(E, S) {
    E.getRGB(Xs, cc(n)), i.buffers.color.setClear(Xs.r, Xs.g, Xs.b, S, a);
  }
  function b() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(E, S = 1) {
    o.set(E), l = S, p(o, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(E) {
    l = E, p(o, l);
  }, render: v, addToRenderList: m, dispose: b };
}
function tm(n, e) {
  const t = n.getParameter(n.MAX_VERTEX_ATTRIBS), i = {}, s = f(null);
  let r = s, a = false;
  function o(M, D, O, H, V) {
    let Y = false;
    const W = u(H, O, D);
    r !== W && (r = W, c(r.object)), Y = d(M, H, O, V), Y && g(M, H, O, V), V !== null && e.update(V, n.ELEMENT_ARRAY_BUFFER), (Y || a) && (a = false, S(M, D, O, H), V !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.get(V).buffer));
  }
  function l() {
    return n.createVertexArray();
  }
  function c(M) {
    return n.bindVertexArray(M);
  }
  function h(M) {
    return n.deleteVertexArray(M);
  }
  function u(M, D, O) {
    const H = O.wireframe === true;
    let V = i[M.id];
    V === void 0 && (V = {}, i[M.id] = V);
    let Y = V[D.id];
    Y === void 0 && (Y = {}, V[D.id] = Y);
    let W = Y[H];
    return W === void 0 && (W = f(l()), Y[H] = W), W;
  }
  function f(M) {
    const D = [], O = [], H = [];
    for (let V = 0; V < t; V++) D[V] = 0, O[V] = 0, H[V] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: D, enabledAttributes: O, attributeDivisors: H, object: M, attributes: {}, index: null };
  }
  function d(M, D, O, H) {
    const V = r.attributes, Y = D.attributes;
    let W = 0;
    const ne = O.getAttributes();
    for (const k in ne) if (ne[k].location >= 0) {
      const he = V[k];
      let Ee = Y[k];
      if (Ee === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (Ee = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (Ee = M.instanceColor)), he === void 0 || he.attribute !== Ee || Ee && he.data !== Ee.data) return true;
      W++;
    }
    return r.attributesNum !== W || r.index !== H;
  }
  function g(M, D, O, H) {
    const V = {}, Y = D.attributes;
    let W = 0;
    const ne = O.getAttributes();
    for (const k in ne) if (ne[k].location >= 0) {
      let he = Y[k];
      he === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (he = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (he = M.instanceColor));
      const Ee = {};
      Ee.attribute = he, he && he.data && (Ee.data = he.data), V[k] = Ee, W++;
    }
    r.attributes = V, r.attributesNum = W, r.index = H;
  }
  function v() {
    const M = r.newAttributes;
    for (let D = 0, O = M.length; D < O; D++) M[D] = 0;
  }
  function m(M) {
    p(M, 0);
  }
  function p(M, D) {
    const O = r.newAttributes, H = r.enabledAttributes, V = r.attributeDivisors;
    O[M] = 1, H[M] === 0 && (n.enableVertexAttribArray(M), H[M] = 1), V[M] !== D && (n.vertexAttribDivisor(M, D), V[M] = D);
  }
  function b() {
    const M = r.newAttributes, D = r.enabledAttributes;
    for (let O = 0, H = D.length; O < H; O++) D[O] !== M[O] && (n.disableVertexAttribArray(O), D[O] = 0);
  }
  function E(M, D, O, H, V, Y, W) {
    W === true ? n.vertexAttribIPointer(M, D, O, V, Y) : n.vertexAttribPointer(M, D, O, H, V, Y);
  }
  function S(M, D, O, H) {
    v();
    const V = H.attributes, Y = O.getAttributes(), W = D.defaultAttributeValues;
    for (const ne in Y) {
      const k = Y[ne];
      if (k.location >= 0) {
        let ae = V[ne];
        if (ae === void 0 && (ne === "instanceMatrix" && M.instanceMatrix && (ae = M.instanceMatrix), ne === "instanceColor" && M.instanceColor && (ae = M.instanceColor)), ae !== void 0) {
          const he = ae.normalized, Ee = ae.itemSize, ze = e.get(ae);
          if (ze === void 0) continue;
          const nt = ze.buffer, rt = ze.type, Ze = ze.bytesPerElement, q = rt === n.INT || rt === n.UNSIGNED_INT || ae.gpuType === qa;
          if (ae.isInterleavedBufferAttribute) {
            const J = ae.data, de = J.stride, De = ae.offset;
            if (J.isInstancedInterleavedBuffer) {
              for (let ye = 0; ye < k.locationSize; ye++) p(k.location + ye, J.meshPerAttribute);
              M.isInstancedMesh !== true && H._maxInstanceCount === void 0 && (H._maxInstanceCount = J.meshPerAttribute * J.count);
            } else for (let ye = 0; ye < k.locationSize; ye++) m(k.location + ye);
            n.bindBuffer(n.ARRAY_BUFFER, nt);
            for (let ye = 0; ye < k.locationSize; ye++) E(k.location + ye, Ee / k.locationSize, rt, he, de * Ze, (De + Ee / k.locationSize * ye) * Ze, q);
          } else {
            if (ae.isInstancedBufferAttribute) {
              for (let J = 0; J < k.locationSize; J++) p(k.location + J, ae.meshPerAttribute);
              M.isInstancedMesh !== true && H._maxInstanceCount === void 0 && (H._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else for (let J = 0; J < k.locationSize; J++) m(k.location + J);
            n.bindBuffer(n.ARRAY_BUFFER, nt);
            for (let J = 0; J < k.locationSize; J++) E(k.location + J, Ee / k.locationSize, rt, he, Ee * Ze, Ee / k.locationSize * J * Ze, q);
          }
        } else if (W !== void 0) {
          const he = W[ne];
          if (he !== void 0) switch (he.length) {
            case 2:
              n.vertexAttrib2fv(k.location, he);
              break;
            case 3:
              n.vertexAttrib3fv(k.location, he);
              break;
            case 4:
              n.vertexAttrib4fv(k.location, he);
              break;
            default:
              n.vertexAttrib1fv(k.location, he);
          }
        }
      }
    }
    b();
  }
  function P() {
    N();
    for (const M in i) {
      const D = i[M];
      for (const O in D) {
        const H = D[O];
        for (const V in H) h(H[V].object), delete H[V];
        delete D[O];
      }
      delete i[M];
    }
  }
  function w(M) {
    if (i[M.id] === void 0) return;
    const D = i[M.id];
    for (const O in D) {
      const H = D[O];
      for (const V in H) h(H[V].object), delete H[V];
      delete D[O];
    }
    delete i[M.id];
  }
  function U(M) {
    for (const D in i) {
      const O = i[D];
      if (O[M.id] === void 0) continue;
      const H = O[M.id];
      for (const V in H) h(H[V].object), delete H[V];
      delete O[M.id];
    }
  }
  function N() {
    y(), a = true, r !== s && (r = s, c(r.object));
  }
  function y() {
    s.geometry = null, s.program = null, s.wireframe = false;
  }
  return { setup: o, reset: N, resetDefaultState: y, dispose: P, releaseStatesOfGeometry: w, releaseStatesOfProgram: U, initAttributes: v, enableAttribute: m, disableUnusedAttributes: b };
}
function nm(n, e, t) {
  let i;
  function s(c) {
    i = c;
  }
  function r(c, h) {
    n.drawArrays(i, c, h), t.update(h, i, 1);
  }
  function a(c, h, u) {
    u !== 0 && (n.drawArraysInstanced(i, c, h, u), t.update(h, i, u));
  }
  function o(c, h, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, c, 0, h, 0, u);
    let d = 0;
    for (let g = 0; g < u; g++) d += h[g];
    t.update(d, i, 1);
  }
  function l(c, h, u, f) {
    if (u === 0) return;
    const d = e.get("WEBGL_multi_draw");
    if (d === null) for (let g = 0; g < c.length; g++) a(c[g], h[g], f[g]);
    else {
      d.multiDrawArraysInstancedWEBGL(i, c, 0, h, 0, f, 0, u);
      let g = 0;
      for (let v = 0; v < u; v++) g += h[v] * f[v];
      t.update(g, i, 1);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function im(n, e, t, i) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const U = e.get("EXT_texture_filter_anisotropic");
      s = n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else s = 0;
    return s;
  }
  function a(U) {
    return !(U !== sn && i.convert(U) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(U) {
    const N = U === cs && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(U !== gt && i.convert(U) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE) && U !== cn && !N);
  }
  function l(U) {
    if (U === "highp") {
      if (n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision > 0) return "highp";
      U = "mediump";
    }
    return U === "mediump" && n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = t.logarithmicDepthBuffer === true, f = t.reversedDepthBuffer === true && e.has("EXT_clip_control"), d = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS), g = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS), v = n.getParameter(n.MAX_TEXTURE_SIZE), m = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE), p = n.getParameter(n.MAX_VERTEX_ATTRIBS), b = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS), E = n.getParameter(n.MAX_VARYING_VECTORS), S = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS), P = g > 0, w = n.getParameter(n.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: u, reversedDepthBuffer: f, maxTextures: d, maxVertexTextures: g, maxTextureSize: v, maxCubemapSize: m, maxAttributes: p, maxVertexUniforms: b, maxVaryings: E, maxFragmentUniforms: S, vertexTextures: P, maxSamples: w };
}
function sm(n) {
  const e = this;
  let t = null, i = 0, s = false, r = false;
  const a = new Dn(), o = new Ne(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, f) {
    const d = u.length !== 0 || f || i !== 0 || s;
    return s = f, i = u.length, d;
  }, this.beginShadows = function() {
    r = true, h(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(u, f) {
    t = h(u, f, 0);
  }, this.setState = function(u, f, d) {
    const g = u.clippingPlanes, v = u.clipIntersection, m = u.clipShadows, p = n.get(u);
    if (!s || g === null || g.length === 0 || r && !m) r ? h(null) : c();
    else {
      const b = r ? 0 : i, E = b * 4;
      let S = p.clippingState || null;
      l.value = S, S = h(g, f, E, d);
      for (let P = 0; P !== E; ++P) S[P] = t[P];
      p.clippingState = S, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += b;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
  }
  function h(u, f, d, g) {
    const v = u !== null ? u.length : 0;
    let m = null;
    if (v !== 0) {
      if (m = l.value, g !== true || m === null) {
        const p = d + v * 4, b = f.matrixWorldInverse;
        o.getNormalMatrix(b), (m === null || m.length < p) && (m = new Float32Array(p));
        for (let E = 0, S = d; E !== v; ++E, S += 4) a.copy(u[E]).applyMatrix4(b, o), a.normal.toArray(m, S), m[S + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = true;
    }
    return e.numPlanes = v, e.numIntersection = 0, m;
  }
}
function rm(n) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === oa ? a.mapping = Pi : o === la && (a.mapping = Di), a;
  }
  function i(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === oa || o === la) if (e.has(a)) {
        const l = e.get(a).texture;
        return t(l, a.mapping);
      } else {
        const l = a.image;
        if (l && l.height > 0) {
          const c = new vu(l.height);
          return c.fromEquirectangularTexture(n, a), e.set(a, c), a.addEventListener("dispose", s), t(c.texture, a.mapping);
        } else return null;
      }
    }
    return a;
  }
  function s(a) {
    const o = a.target;
    o.removeEventListener("dispose", s);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: i, dispose: r };
}
const bi = 4, dl = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Yn = 20, Vr = new bc(), pl = new Ge();
let Wr = null, Xr = 0, Yr = 0, qr = false;
const Wn = (1 + Math.sqrt(5)) / 2, Si = 1 / Wn, ml = [new R(-Wn, Si, 0), new R(Wn, Si, 0), new R(-Si, 0, Wn), new R(Si, 0, Wn), new R(0, Wn, -Si), new R(0, Wn, Si), new R(-1, 1, -1), new R(1, 1, -1), new R(-1, 1, 1), new R(1, 1, 1)], am = new R();
class gl {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, i = 0.1, s = 100, r = {}) {
    const { size: a = 256, position: o = am } = r;
    Wr = this._renderer.getRenderTarget(), Xr = this._renderer.getActiveCubeFace(), Yr = this._renderer.getActiveMipmapLevel(), qr = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a);
    const l = this._allocateTargets();
    return l.depthBuffer = true, this._sceneToCubeUV(e, i, s, l, o), t > 0 && this._blur(l, 0, 0, t), this._applyPMREM(l), this._cleanup(l), l;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = xl(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = vl(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Wr, Xr, Yr), this._renderer.xr.enabled = qr, e.scissorTest = false, Ys(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Pi || e.mapping === Di ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Wr = this._renderer.getRenderTarget(), Xr = this._renderer.getActiveCubeFace(), Yr = this._renderer.getActiveMipmapLevel(), qr = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const i = t || this._allocateTargets();
    return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, i = { magFilter: Ft, minFilter: Ft, generateMipmaps: false, type: cs, format: sn, colorSpace: Nn, depthBuffer: false }, s = _l(e, t, i);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = _l(e, t, i);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = om(r)), this._blurMaterial = lm(r, e, t);
    }
    return s;
  }
  _compileMaterial(e) {
    const t = new jt(this._lodPlanes[0], e);
    this._renderer.compile(t, Vr);
  }
  _sceneToCubeUV(e, t, i, s, r) {
    const l = new Vt(90, 1, t, i), c = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], u = this._renderer, f = u.autoClear, d = u.toneMapping;
    u.getClearColor(pl), u.toneMapping = Un, u.autoClear = false, u.state.buffers.depth.getReversed() && (u.setRenderTarget(s), u.clearDepth(), u.setRenderTarget(null));
    const v = new ac({ name: "PMREM.Background", side: Et, depthWrite: false, depthTest: false }), m = new jt(new us(), v);
    let p = false;
    const b = e.background;
    b ? b.isColor && (v.color.copy(b), e.background = null, p = true) : (v.color.copy(pl), p = true);
    for (let E = 0; E < 6; E++) {
      const S = E % 3;
      S === 0 ? (l.up.set(0, c[E], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x + h[E], r.y, r.z)) : S === 1 ? (l.up.set(0, 0, c[E]), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y + h[E], r.z)) : (l.up.set(0, c[E], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y, r.z + h[E]));
      const P = this._cubeSize;
      Ys(s, S * P, E > 2 ? P : 0, P, P), u.setRenderTarget(s), p && u.render(m, l), u.render(e, l);
    }
    m.geometry.dispose(), m.material.dispose(), u.toneMapping = d, u.autoClear = f, e.background = b;
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer, s = e.mapping === Pi || e.mapping === Di;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = xl()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = vl());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, a = new jt(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Ys(t, 0, 0, 3 * l, 2 * l), i.setRenderTarget(t), i.render(a, Vr);
  }
  _applyPMREM(e) {
    const t = this._renderer, i = t.autoClear;
    t.autoClear = false;
    const s = this._lodPlanes.length;
    for (let r = 1; r < s; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = ml[(s - r - 1) % ml.length];
      this._blur(e, r - 1, r, a, o);
    }
    t.autoClear = i;
  }
  _blur(e, t, i, s, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, i, s, "latitudinal", r), this._halfBlur(a, e, i, i, s, "longitudinal", r);
  }
  _halfBlur(e, t, i, s, r, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const h = 3, u = new jt(this._lodPlanes[s], c), f = c.uniforms, d = this._sizeLods[i] - 1, g = isFinite(r) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * Yn - 1), v = r / g, m = isFinite(r) ? 1 + Math.floor(h * v) : Yn;
    m > Yn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);
    const p = [];
    let b = 0;
    for (let U = 0; U < Yn; ++U) {
      const N = U / v, y = Math.exp(-N * N / 2);
      p.push(y), U === 0 ? b += y : U < m && (b += 2 * y);
    }
    for (let U = 0; U < p.length; U++) p[U] = p[U] / b;
    f.envMap.value = e.texture, f.samples.value = m, f.weights.value = p, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: E } = this;
    f.dTheta.value = g, f.mipInt.value = E - i;
    const S = this._sizeLods[s], P = 3 * S * (s > E - bi ? s - E + bi : 0), w = 4 * (this._cubeSize - S);
    Ys(t, P, w, 3 * S, 2 * S), l.setRenderTarget(t), l.render(u, Vr);
  }
}
function om(n) {
  const e = [], t = [], i = [];
  let s = n;
  const r = n - bi + 1 + dl.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    t.push(o);
    let l = 1 / o;
    a > n - bi ? l = dl[a - n + bi - 1] : a === 0 && (l = 0), i.push(l);
    const c = 1 / (o - 2), h = -c, u = 1 + c, f = [h, h, u, h, u, u, h, h, u, u, h, u], d = 6, g = 6, v = 3, m = 2, p = 1, b = new Float32Array(v * g * d), E = new Float32Array(m * g * d), S = new Float32Array(p * g * d);
    for (let w = 0; w < d; w++) {
      const U = w % 3 * 2 / 3 - 1, N = w > 2 ? 0 : -1, y = [U, N, 0, U + 2 / 3, N, 0, U + 2 / 3, N + 1, 0, U, N, 0, U + 2 / 3, N + 1, 0, U, N + 1, 0];
      b.set(y, v * g * w), E.set(f, m * g * w);
      const M = [w, w, w, w, w, w];
      S.set(M, p * g * w);
    }
    const P = new Bt();
    P.setAttribute("position", new Ot(b, v)), P.setAttribute("uv", new Ot(E, m)), P.setAttribute("faceIndex", new Ot(S, p)), e.push(P), s > bi && s--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function _l(n, e, t) {
  const i = new Pt(n, e, t);
  return i.texture.mapping = or, i.texture.name = "PMREM.cubeUv", i.scissorTest = true, i;
}
function Ys(n, e, t, i, s) {
  n.viewport.set(e, t, i, s), n.scissor.set(e, t, i, s);
}
function lm(n, e, t) {
  const i = new Float32Array(Yn), s = new R(0, 1, 0);
  return new bt({ name: "SphericalGaussianBlur", defines: { n: Yn, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${n}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: i }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: s } }, vertexShader: ho(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: At, depthTest: false, depthWrite: false });
}
function vl() {
  return new bt({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ho(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: At, depthTest: false, depthWrite: false });
}
function xl() {
  return new bt({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ho(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: At, depthTest: false, depthWrite: false });
}
function ho() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function cm(n) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function i(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === oa || l === la, h = l === Pi || l === Di;
      if (c || h) {
        let u = e.get(o);
        const f = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f) return t === null && (t = new gl(n)), u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), u.texture;
        if (u !== void 0) return u.texture;
        {
          const d = o.image;
          return c && d && d.height > 0 || h && d && s(d) ? (t === null && (t = new gl(n)), u = c ? t.fromEquirectangular(o) : t.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), o.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return o;
  }
  function s(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) o[h] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    const l = o.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: i, dispose: a };
}
function hm(n) {
  const e = {};
  function t(i) {
    if (e[i] !== void 0) return e[i];
    let s;
    switch (i) {
      case "WEBGL_depth_texture":
        s = n.getExtension("WEBGL_depth_texture") || n.getExtension("MOZ_WEBGL_depth_texture") || n.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        s = n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        s = n.getExtension("WEBGL_compressed_texture_s3tc") || n.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        s = n.getExtension("WEBGL_compressed_texture_pvrtc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        s = n.getExtension(i);
    }
    return e[i] = s, s;
  }
  return { has: function(i) {
    return t(i) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(i) {
    const s = t(i);
    return s === null && rs("THREE.WebGLRenderer: " + i + " extension not supported."), s;
  } };
}
function um(n, e, t, i) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const f = u.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes) e.remove(f.attributes[g]);
    f.removeEventListener("dispose", a), delete s[f.id];
    const d = r.get(f);
    d && (e.remove(d), r.delete(f)), i.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === true && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, f) {
    return s[f.id] === true || (f.addEventListener("dispose", a), s[f.id] = true, t.memory.geometries++), f;
  }
  function l(u) {
    const f = u.attributes;
    for (const d in f) e.update(f[d], n.ARRAY_BUFFER);
  }
  function c(u) {
    const f = [], d = u.index, g = u.attributes.position;
    let v = 0;
    if (d !== null) {
      const b = d.array;
      v = d.version;
      for (let E = 0, S = b.length; E < S; E += 3) {
        const P = b[E + 0], w = b[E + 1], U = b[E + 2];
        f.push(P, w, w, U, U, P);
      }
    } else if (g !== void 0) {
      const b = g.array;
      v = g.version;
      for (let E = 0, S = b.length / 3 - 1; E < S; E += 3) {
        const P = E + 0, w = E + 1, U = E + 2;
        f.push(P, w, w, U, U, P);
      }
    } else return;
    const m = new (ic(f) ? lc : oc)(f, 1);
    m.version = v;
    const p = r.get(u);
    p && e.remove(p), r.set(u, m);
  }
  function h(u) {
    const f = r.get(u);
    if (f) {
      const d = u.index;
      d !== null && f.version < d.version && c(u);
    } else c(u);
    return r.get(u);
  }
  return { get: o, update: l, getWireframeAttribute: h };
}
function fm(n, e, t) {
  let i;
  function s(f) {
    i = f;
  }
  let r, a;
  function o(f) {
    r = f.type, a = f.bytesPerElement;
  }
  function l(f, d) {
    n.drawElements(i, d, r, f * a), t.update(d, i, 1);
  }
  function c(f, d, g) {
    g !== 0 && (n.drawElementsInstanced(i, d, r, f * a, g), t.update(d, i, g));
  }
  function h(f, d, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, d, 0, r, f, 0, g);
    let m = 0;
    for (let p = 0; p < g; p++) m += d[p];
    t.update(m, i, 1);
  }
  function u(f, d, g, v) {
    if (g === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let p = 0; p < f.length; p++) c(f[p] / a, d[p], v[p]);
    else {
      m.multiDrawElementsInstancedWEBGL(i, d, 0, r, f, 0, v, 0, g);
      let p = 0;
      for (let b = 0; b < g; b++) p += d[b] * v[b];
      t.update(p, i, 1);
    }
  }
  this.setMode = s, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function dm(n) {
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
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function s() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: s, update: i };
}
function pm(n, e, t) {
  const i = /* @__PURE__ */ new WeakMap(), s = new lt();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let f = i.get(o);
    if (f === void 0 || f.count !== u) {
      let y = function() {
        U.dispose(), i.delete(o), o.removeEventListener("dispose", y);
      };
      f !== void 0 && f.texture.dispose();
      const d = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, v = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], p = o.morphAttributes.normal || [], b = o.morphAttributes.color || [];
      let E = 0;
      d === true && (E = 1), g === true && (E = 2), v === true && (E = 3);
      let S = o.attributes.position.count * E, P = 1;
      S > e.maxTextureSize && (P = Math.ceil(S / e.maxTextureSize), S = e.maxTextureSize);
      const w = new Float32Array(S * P * 4 * u), U = new sc(w, S, P, u);
      U.type = cn, U.needsUpdate = true;
      const N = E * 4;
      for (let M = 0; M < u; M++) {
        const D = m[M], O = p[M], H = b[M], V = S * P * 4 * M;
        for (let Y = 0; Y < D.count; Y++) {
          const W = Y * N;
          d === true && (s.fromBufferAttribute(D, Y), w[V + W + 0] = s.x, w[V + W + 1] = s.y, w[V + W + 2] = s.z, w[V + W + 3] = 0), g === true && (s.fromBufferAttribute(O, Y), w[V + W + 4] = s.x, w[V + W + 5] = s.y, w[V + W + 6] = s.z, w[V + W + 7] = 0), v === true && (s.fromBufferAttribute(H, Y), w[V + W + 8] = s.x, w[V + W + 9] = s.y, w[V + W + 10] = s.z, w[V + W + 11] = H.itemSize === 4 ? s.w : 1);
        }
      }
      f = { count: u, texture: U, size: new j(S, P) }, i.set(o, f), o.addEventListener("dispose", y);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) l.getUniforms().setValue(n, "morphTexture", a.morphTexture, t);
    else {
      let d = 0;
      for (let v = 0; v < c.length; v++) d += c[v];
      const g = o.morphTargetsRelative ? 1 : 1 - d;
      l.getUniforms().setValue(n, "morphTargetBaseInfluence", g), l.getUniforms().setValue(n, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(n, "morphTargetsTexture", f.texture, t), l.getUniforms().setValue(n, "morphTargetsTextureSize", f.size);
  }
  return { update: r };
}
function mm(n, e, t, i) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = i.render.frame, h = l.geometry, u = e.get(l, h);
    if (s.get(u) !== c && (e.update(u), s.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === false && l.addEventListener("dispose", o), s.get(l) !== c && (t.update(l.instanceMatrix, n.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, n.ARRAY_BUFFER), s.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      s.get(f) !== c && (f.update(), s.set(f, c));
    }
    return u;
  }
  function a() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: r, dispose: a };
}
const Rc = new vt(), Sl = new ro(1, 1), Cc = new sc(), Pc = new tu(), Dc = new hc(), Ml = [], yl = [], El = new Float32Array(16), Tl = new Float32Array(9), bl = new Float32Array(4);
function Fi(n, e, t) {
  const i = n[0];
  if (i <= 0 || i > 0) return n;
  const s = e * t;
  let r = Ml[s];
  if (r === void 0 && (r = new Float32Array(s), Ml[s] = r), e !== 0) {
    i.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a) o += t, n[a].toArray(r, o);
  }
  return r;
}
function xt(n, e) {
  if (n.length !== e.length) return false;
  for (let t = 0, i = n.length; t < i; t++) if (n[t] !== e[t]) return false;
  return true;
}
function St(n, e) {
  for (let t = 0, i = e.length; t < i; t++) n[t] = e[t];
}
function cr(n, e) {
  let t = yl[e];
  t === void 0 && (t = new Int32Array(e), yl[e] = t);
  for (let i = 0; i !== e; ++i) t[i] = n.allocateTextureUnit();
  return t;
}
function gm(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1f(this.addr, e), t[0] = e);
}
function _m(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (n.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (xt(t, e)) return;
    n.uniform2fv(this.addr, e), St(t, e);
  }
}
function vm(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (n.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (xt(t, e)) return;
    n.uniform3fv(this.addr, e), St(t, e);
  }
}
function xm(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (xt(t, e)) return;
    n.uniform4fv(this.addr, e), St(t, e);
  }
}
function Sm(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (xt(t, e)) return;
    n.uniformMatrix2fv(this.addr, false, e), St(t, e);
  } else {
    if (xt(t, i)) return;
    bl.set(i), n.uniformMatrix2fv(this.addr, false, bl), St(t, i);
  }
}
function Mm(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (xt(t, e)) return;
    n.uniformMatrix3fv(this.addr, false, e), St(t, e);
  } else {
    if (xt(t, i)) return;
    Tl.set(i), n.uniformMatrix3fv(this.addr, false, Tl), St(t, i);
  }
}
function ym(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (xt(t, e)) return;
    n.uniformMatrix4fv(this.addr, false, e), St(t, e);
  } else {
    if (xt(t, i)) return;
    El.set(i), n.uniformMatrix4fv(this.addr, false, El), St(t, i);
  }
}
function Em(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1i(this.addr, e), t[0] = e);
}
function Tm(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (n.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (xt(t, e)) return;
    n.uniform2iv(this.addr, e), St(t, e);
  }
}
function bm(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (xt(t, e)) return;
    n.uniform3iv(this.addr, e), St(t, e);
  }
}
function Am(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (xt(t, e)) return;
    n.uniform4iv(this.addr, e), St(t, e);
  }
}
function wm(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1ui(this.addr, e), t[0] = e);
}
function Rm(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (n.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (xt(t, e)) return;
    n.uniform2uiv(this.addr, e), St(t, e);
  }
}
function Cm(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (xt(t, e)) return;
    n.uniform3uiv(this.addr, e), St(t, e);
  }
}
function Pm(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (xt(t, e)) return;
    n.uniform4uiv(this.addr, e), St(t, e);
  }
}
function Dm(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s);
  let r;
  this.type === n.SAMPLER_2D_SHADOW ? (Sl.compareFunction = nc, r = Sl) : r = Rc, t.setTexture2D(e || r, s);
}
function Um(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), t.setTexture3D(e || Pc, s);
}
function Lm(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), t.setTextureCube(e || Dc, s);
}
function Im(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), t.setTexture2DArray(e || Cc, s);
}
function Nm(n) {
  switch (n) {
    case 5126:
      return gm;
    case 35664:
      return _m;
    case 35665:
      return vm;
    case 35666:
      return xm;
    case 35674:
      return Sm;
    case 35675:
      return Mm;
    case 35676:
      return ym;
    case 5124:
    case 35670:
      return Em;
    case 35667:
    case 35671:
      return Tm;
    case 35668:
    case 35672:
      return bm;
    case 35669:
    case 35673:
      return Am;
    case 5125:
      return wm;
    case 36294:
      return Rm;
    case 36295:
      return Cm;
    case 36296:
      return Pm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Dm;
    case 35679:
    case 36299:
    case 36307:
      return Um;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Lm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Im;
  }
}
function Fm(n, e) {
  n.uniform1fv(this.addr, e);
}
function Om(n, e) {
  const t = Fi(e, this.size, 2);
  n.uniform2fv(this.addr, t);
}
function Bm(n, e) {
  const t = Fi(e, this.size, 3);
  n.uniform3fv(this.addr, t);
}
function zm(n, e) {
  const t = Fi(e, this.size, 4);
  n.uniform4fv(this.addr, t);
}
function Hm(n, e) {
  const t = Fi(e, this.size, 4);
  n.uniformMatrix2fv(this.addr, false, t);
}
function km(n, e) {
  const t = Fi(e, this.size, 9);
  n.uniformMatrix3fv(this.addr, false, t);
}
function Gm(n, e) {
  const t = Fi(e, this.size, 16);
  n.uniformMatrix4fv(this.addr, false, t);
}
function Vm(n, e) {
  n.uniform1iv(this.addr, e);
}
function Wm(n, e) {
  n.uniform2iv(this.addr, e);
}
function Xm(n, e) {
  n.uniform3iv(this.addr, e);
}
function Ym(n, e) {
  n.uniform4iv(this.addr, e);
}
function qm(n, e) {
  n.uniform1uiv(this.addr, e);
}
function Zm(n, e) {
  n.uniform2uiv(this.addr, e);
}
function Km(n, e) {
  n.uniform3uiv(this.addr, e);
}
function Jm(n, e) {
  n.uniform4uiv(this.addr, e);
}
function jm(n, e, t) {
  const i = this.cache, s = e.length, r = cr(t, s);
  xt(i, r) || (n.uniform1iv(this.addr, r), St(i, r));
  for (let a = 0; a !== s; ++a) t.setTexture2D(e[a] || Rc, r[a]);
}
function $m(n, e, t) {
  const i = this.cache, s = e.length, r = cr(t, s);
  xt(i, r) || (n.uniform1iv(this.addr, r), St(i, r));
  for (let a = 0; a !== s; ++a) t.setTexture3D(e[a] || Pc, r[a]);
}
function Qm(n, e, t) {
  const i = this.cache, s = e.length, r = cr(t, s);
  xt(i, r) || (n.uniform1iv(this.addr, r), St(i, r));
  for (let a = 0; a !== s; ++a) t.setTextureCube(e[a] || Dc, r[a]);
}
function eg(n, e, t) {
  const i = this.cache, s = e.length, r = cr(t, s);
  xt(i, r) || (n.uniform1iv(this.addr, r), St(i, r));
  for (let a = 0; a !== s; ++a) t.setTexture2DArray(e[a] || Cc, r[a]);
}
function tg(n) {
  switch (n) {
    case 5126:
      return Fm;
    case 35664:
      return Om;
    case 35665:
      return Bm;
    case 35666:
      return zm;
    case 35674:
      return Hm;
    case 35675:
      return km;
    case 35676:
      return Gm;
    case 5124:
    case 35670:
      return Vm;
    case 35667:
    case 35671:
      return Wm;
    case 35668:
    case 35672:
      return Xm;
    case 35669:
    case 35673:
      return Ym;
    case 5125:
      return qm;
    case 36294:
      return Zm;
    case 36295:
      return Km;
    case 36296:
      return Jm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return jm;
    case 35679:
    case 36299:
    case 36307:
      return $m;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Qm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return eg;
  }
}
class ng {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.setValue = Nm(t.type);
  }
}
class ig {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = tg(t.type);
  }
}
class sg {
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
const Zr = /(\w+)(\])?(\[|\.)?/g;
function Al(n, e) {
  n.seq.push(e), n.map[e.id] = e;
}
function rg(n, e, t) {
  const i = n.name, s = i.length;
  for (Zr.lastIndex = 0; ; ) {
    const r = Zr.exec(i), a = Zr.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === s) {
      Al(t, c === void 0 ? new ng(o, n, e) : new ig(o, n, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new sg(o), Al(t, u)), t = u;
    }
  }
}
class er {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < i; ++s) {
      const r = e.getActiveUniform(t, s), a = e.getUniformLocation(t, r.name);
      rg(r, a, this);
    }
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
      const o = t[r], l = i[o.id];
      l.needsUpdate !== false && o.setValue(e, l.value, s);
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
function wl(n, e, t) {
  const i = n.createShader(e);
  return n.shaderSource(i, t), n.compileShader(i), i;
}
const ag = 37297;
let og = 0;
function lg(n, e) {
  const t = n.split(`
`), i = [], s = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    i.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return i.join(`
`);
}
const Rl = new Ne();
function cg(n) {
  Ye._getMatrix(Rl, Ye.workingColorSpace, n);
  const e = `mat3( ${Rl.elements.map((t) => t.toFixed(4))} )`;
  switch (Ye.getTransfer(n)) {
    case nr:
      return [e, "LinearTransferOETF"];
    case Qe:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", n), [e, "LinearTransferOETF"];
  }
}
function Cl(n, e, t) {
  const i = n.getShaderParameter(e, n.COMPILE_STATUS), r = (n.getShaderInfoLog(e) || "").trim();
  if (i && r === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + r + `

` + lg(n.getShaderSource(e), o);
  } else return r;
}
function hg(n, e) {
  const t = cg(e);
  return [`vec4 ${n}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
function ug(n, e) {
  let t;
  switch (e) {
    case ph:
      t = "Linear";
      break;
    case mh:
      t = "Reinhard";
      break;
    case gh:
      t = "Cineon";
      break;
    case _h:
      t = "ACESFilmic";
      break;
    case xh:
      t = "AgX";
      break;
    case Sh:
      t = "Neutral";
      break;
    case vh:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + n + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const qs = new R();
function fg() {
  Ye.getLuminanceCoefficients(qs);
  const n = qs.x.toFixed(4), e = qs.y.toFixed(4), t = qs.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${n}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function dg(n) {
  return [n.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Ki).join(`
`);
}
function pg(n) {
  const e = [];
  for (const t in n) {
    const i = n[t];
    i !== false && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function mg(n, e) {
  const t = {}, i = n.getProgramParameter(e, n.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < i; s++) {
    const r = n.getActiveAttrib(e, s), a = r.name;
    let o = 1;
    r.type === n.FLOAT_MAT2 && (o = 2), r.type === n.FLOAT_MAT3 && (o = 3), r.type === n.FLOAT_MAT4 && (o = 4), t[a] = { type: r.type, location: n.getAttribLocation(e, a), locationSize: o };
  }
  return t;
}
function Ki(n) {
  return n !== "";
}
function Pl(n, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return n.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Dl(n, e) {
  return n.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const gg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Wa(n) {
  return n.replace(gg, vg);
}
const _g = /* @__PURE__ */ new Map();
function vg(n, e) {
  let t = Oe[e];
  if (t === void 0) {
    const i = _g.get(e);
    if (i !== void 0) t = Oe[i], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, i);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Wa(t);
}
const xg = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ul(n) {
  return n.replace(xg, Sg);
}
function Sg(n, e, t, i) {
  let s = "";
  for (let r = parseInt(e); r < parseInt(t); r++) s += i.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function Ll(n) {
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
function Mg(n) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return n.shadowMapType === Xl ? e = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === qc ? e = "SHADOWMAP_TYPE_PCF_SOFT" : n.shadowMapType === Mn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function yg(n) {
  let e = "ENVMAP_TYPE_CUBE";
  if (n.envMap) switch (n.envMapMode) {
    case Pi:
    case Di:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case or:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function Eg(n) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (n.envMap) switch (n.envMapMode) {
    case Di:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function Tg(n) {
  let e = "ENVMAP_BLENDING_NONE";
  if (n.envMap) switch (n.combine) {
    case Yl:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case fh:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case dh:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function bg(n) {
  const e = n.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, i = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: i, maxMip: t };
}
function Ag(n, e, t, i) {
  const s = n.getContext(), r = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = Mg(t), c = yg(t), h = Eg(t), u = Tg(t), f = bg(t), d = dg(t), g = pg(r), v = s.createProgram();
  let m, p, b = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Ki).join(`
`), m.length > 0 && (m += `
`), p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Ki).join(`
`), p.length > 0 && (p += `
`)) : (m = [Ll(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Ki).join(`
`), p = [Ll(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Un ? "#define TONE_MAPPING" : "", t.toneMapping !== Un ? Oe.tonemapping_pars_fragment : "", t.toneMapping !== Un ? ug("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Oe.colorspace_pars_fragment, hg("linearToOutputTexel", t.outputColorSpace), fg(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Ki).join(`
`)), a = Wa(a), a = Pl(a, t), a = Dl(a, t), o = Wa(o), o = Pl(o, t), o = Dl(o, t), a = Ul(a), o = Ul(o), t.isRawShaderMaterial !== true && (b = `#version 300 es
`, m = [d, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + m, p = ["#define varying in", t.glslVersion === To ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === To ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + p);
  const E = b + m + a, S = b + p + o, P = wl(s, s.VERTEX_SHADER, E), w = wl(s, s.FRAGMENT_SHADER, S);
  s.attachShader(v, P), s.attachShader(v, w), t.index0AttributeName !== void 0 ? s.bindAttribLocation(v, 0, t.index0AttributeName) : t.morphTargets === true && s.bindAttribLocation(v, 0, "position"), s.linkProgram(v);
  function U(D) {
    if (n.debug.checkShaderErrors) {
      const O = s.getProgramInfoLog(v) || "", H = s.getShaderInfoLog(P) || "", V = s.getShaderInfoLog(w) || "", Y = O.trim(), W = H.trim(), ne = V.trim();
      let k = true, ae = true;
      if (s.getProgramParameter(v, s.LINK_STATUS) === false) if (k = false, typeof n.debug.onShaderError == "function") n.debug.onShaderError(s, v, P, w);
      else {
        const he = Cl(s, P, "vertex"), Ee = Cl(s, w, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(v, s.VALIDATE_STATUS) + `

Material Name: ` + D.name + `
Material Type: ` + D.type + `

Program Info Log: ` + Y + `
` + he + `
` + Ee);
      }
      else Y !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", Y) : (W === "" || ne === "") && (ae = false);
      ae && (D.diagnostics = { runnable: k, programLog: Y, vertexShader: { log: W, prefix: m }, fragmentShader: { log: ne, prefix: p } });
    }
    s.deleteShader(P), s.deleteShader(w), N = new er(s, v), y = mg(s, v);
  }
  let N;
  this.getUniforms = function() {
    return N === void 0 && U(this), N;
  };
  let y;
  this.getAttributes = function() {
    return y === void 0 && U(this), y;
  };
  let M = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return M === false && (M = s.getProgramParameter(v, ag)), M;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), s.deleteProgram(v), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = og++, this.cacheKey = e, this.usedTimes = 1, this.program = v, this.vertexShader = P, this.fragmentShader = w, this;
}
let wg = 0;
class Rg {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, i = e.fragmentShader, s = this._getShaderStage(t), r = this._getShaderStage(i), a = this._getShaderCacheForMaterial(e);
    return a.has(s) === false && (a.add(s), s.usedTimes++), a.has(r) === false && (a.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t) i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
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
    return i === void 0 && (i = new Cg(e), t.set(e, i)), i;
  }
}
class Cg {
  constructor(e) {
    this.id = wg++, this.code = e, this.usedTimes = 0;
  }
}
function Pg(n, e, t, i, s, r, a) {
  const o = new no(), l = new Rg(), c = /* @__PURE__ */ new Set(), h = [], u = s.logarithmicDepthBuffer, f = s.vertexTextures;
  let d = s.precision;
  const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function v(y) {
    return c.add(y), y === 0 ? "uv" : `uv${y}`;
  }
  function m(y, M, D, O, H) {
    const V = O.fog, Y = H.geometry, W = y.isMeshStandardMaterial ? O.environment : null, ne = (y.isMeshStandardMaterial ? t : e).get(y.envMap || W), k = ne && ne.mapping === or ? ne.image.height : null, ae = g[y.type];
    y.precision !== null && (d = s.getMaxPrecision(y.precision), d !== y.precision && console.warn("THREE.WebGLProgram.getParameters:", y.precision, "not supported, using", d, "instead."));
    const he = Y.morphAttributes.position || Y.morphAttributes.normal || Y.morphAttributes.color, Ee = he !== void 0 ? he.length : 0;
    let ze = 0;
    Y.morphAttributes.position !== void 0 && (ze = 1), Y.morphAttributes.normal !== void 0 && (ze = 2), Y.morphAttributes.color !== void 0 && (ze = 3);
    let nt, rt, Ze, q;
    if (ae) {
      const Ke = on[ae];
      nt = Ke.vertexShader, rt = Ke.fragmentShader;
    } else nt = y.vertexShader, rt = y.fragmentShader, l.update(y), Ze = l.getVertexShaderID(y), q = l.getFragmentShaderID(y);
    const J = n.getRenderTarget(), de = n.state.buffers.depth.getReversed(), De = H.isInstancedMesh === true, ye = H.isBatchedMesh === true, Ve = !!y.map, wt = !!y.matcap, A = !!ne, at = !!y.aoMap, Le = !!y.lightMap, Ce = !!y.bumpMap, ge = !!y.normalMap, ot = !!y.displacementMap, _e = !!y.emissiveMap, Fe = !!y.metalnessMap, Mt = !!y.roughnessMap, dt = y.anisotropy > 0, T = y.clearcoat > 0, _ = y.dispersion > 0, F = y.iridescence > 0, X = y.sheen > 0, K = y.transmission > 0, G = dt && !!y.anisotropyMap, Me = T && !!y.clearcoatMap, ie = T && !!y.clearcoatNormalMap, ve = T && !!y.clearcoatRoughnessMap, xe = F && !!y.iridescenceMap, ee = F && !!y.iridescenceThicknessMap, ce = X && !!y.sheenColorMap, we = X && !!y.sheenRoughnessMap, Se = !!y.specularMap, oe = !!y.specularColorMap, Ie = !!y.specularIntensityMap, C = K && !!y.transmissionMap, te = K && !!y.thicknessMap, se = !!y.gradientMap, fe = !!y.alphaMap, $ = y.alphaTest > 0, Z = !!y.alphaHash, me = !!y.extensions;
    let Ue = Un;
    y.toneMapped && (J === null || J.isXRRenderTarget === true) && (Ue = n.toneMapping);
    const it = { shaderID: ae, shaderType: y.type, shaderName: y.name, vertexShader: nt, fragmentShader: rt, defines: y.defines, customVertexShaderID: Ze, customFragmentShaderID: q, isRawShaderMaterial: y.isRawShaderMaterial === true, glslVersion: y.glslVersion, precision: d, batching: ye, batchingColor: ye && H._colorsTexture !== null, instancing: De, instancingColor: De && H.instanceColor !== null, instancingMorph: De && H.morphTexture !== null, supportsVertexTextures: f, outputColorSpace: J === null ? n.outputColorSpace : J.isXRRenderTarget === true ? J.texture.colorSpace : Nn, alphaToCoverage: !!y.alphaToCoverage, map: Ve, matcap: wt, envMap: A, envMapMode: A && ne.mapping, envMapCubeUVHeight: k, aoMap: at, lightMap: Le, bumpMap: Ce, normalMap: ge, displacementMap: f && ot, emissiveMap: _e, normalMapObjectSpace: ge && y.normalMapType === Eh, normalMapTangentSpace: ge && y.normalMapType === tc, metalnessMap: Fe, roughnessMap: Mt, anisotropy: dt, anisotropyMap: G, clearcoat: T, clearcoatMap: Me, clearcoatNormalMap: ie, clearcoatRoughnessMap: ve, dispersion: _, iridescence: F, iridescenceMap: xe, iridescenceThicknessMap: ee, sheen: X, sheenColorMap: ce, sheenRoughnessMap: we, specularMap: Se, specularColorMap: oe, specularIntensityMap: Ie, transmission: K, transmissionMap: C, thicknessMap: te, gradientMap: se, opaque: y.transparent === false && y.blending === wi && y.alphaToCoverage === false, alphaMap: fe, alphaTest: $, alphaHash: Z, combine: y.combine, mapUv: Ve && v(y.map.channel), aoMapUv: at && v(y.aoMap.channel), lightMapUv: Le && v(y.lightMap.channel), bumpMapUv: Ce && v(y.bumpMap.channel), normalMapUv: ge && v(y.normalMap.channel), displacementMapUv: ot && v(y.displacementMap.channel), emissiveMapUv: _e && v(y.emissiveMap.channel), metalnessMapUv: Fe && v(y.metalnessMap.channel), roughnessMapUv: Mt && v(y.roughnessMap.channel), anisotropyMapUv: G && v(y.anisotropyMap.channel), clearcoatMapUv: Me && v(y.clearcoatMap.channel), clearcoatNormalMapUv: ie && v(y.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: ve && v(y.clearcoatRoughnessMap.channel), iridescenceMapUv: xe && v(y.iridescenceMap.channel), iridescenceThicknessMapUv: ee && v(y.iridescenceThicknessMap.channel), sheenColorMapUv: ce && v(y.sheenColorMap.channel), sheenRoughnessMapUv: we && v(y.sheenRoughnessMap.channel), specularMapUv: Se && v(y.specularMap.channel), specularColorMapUv: oe && v(y.specularColorMap.channel), specularIntensityMapUv: Ie && v(y.specularIntensityMap.channel), transmissionMapUv: C && v(y.transmissionMap.channel), thicknessMapUv: te && v(y.thicknessMap.channel), alphaMapUv: fe && v(y.alphaMap.channel), vertexTangents: !!Y.attributes.tangent && (ge || dt), vertexColors: y.vertexColors, vertexAlphas: y.vertexColors === true && !!Y.attributes.color && Y.attributes.color.itemSize === 4, pointsUvs: H.isPoints === true && !!Y.attributes.uv && (Ve || fe), fog: !!V, useFog: y.fog === true, fogExp2: !!V && V.isFogExp2, flatShading: y.flatShading === true && y.wireframe === false, sizeAttenuation: y.sizeAttenuation === true, logarithmicDepthBuffer: u, reversedDepthBuffer: de, skinning: H.isSkinnedMesh === true, morphTargets: Y.morphAttributes.position !== void 0, morphNormals: Y.morphAttributes.normal !== void 0, morphColors: Y.morphAttributes.color !== void 0, morphTargetsCount: Ee, morphTextureStride: ze, numDirLights: M.directional.length, numPointLights: M.point.length, numSpotLights: M.spot.length, numSpotLightMaps: M.spotLightMap.length, numRectAreaLights: M.rectArea.length, numHemiLights: M.hemi.length, numDirLightShadows: M.directionalShadowMap.length, numPointLightShadows: M.pointShadowMap.length, numSpotLightShadows: M.spotShadowMap.length, numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps, numLightProbes: M.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: y.dithering, shadowMapEnabled: n.shadowMap.enabled && D.length > 0, shadowMapType: n.shadowMap.type, toneMapping: Ue, decodeVideoTexture: Ve && y.map.isVideoTexture === true && Ye.getTransfer(y.map.colorSpace) === Qe, decodeVideoTextureEmissive: _e && y.emissiveMap.isVideoTexture === true && Ye.getTransfer(y.emissiveMap.colorSpace) === Qe, premultipliedAlpha: y.premultipliedAlpha, doubleSided: y.side === Wt, flipSided: y.side === Et, useDepthPacking: y.depthPacking >= 0, depthPacking: y.depthPacking || 0, index0AttributeName: y.index0AttributeName, extensionClipCullDistance: me && y.extensions.clipCullDistance === true && i.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (me && y.extensions.multiDraw === true || ye) && i.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"), customProgramCacheKey: y.customProgramCacheKey() };
    return it.vertexUv1s = c.has(1), it.vertexUv2s = c.has(2), it.vertexUv3s = c.has(3), c.clear(), it;
  }
  function p(y) {
    const M = [];
    if (y.shaderID ? M.push(y.shaderID) : (M.push(y.customVertexShaderID), M.push(y.customFragmentShaderID)), y.defines !== void 0) for (const D in y.defines) M.push(D), M.push(y.defines[D]);
    return y.isRawShaderMaterial === false && (b(M, y), E(M, y), M.push(n.outputColorSpace)), M.push(y.customProgramCacheKey), M.join();
  }
  function b(y, M) {
    y.push(M.precision), y.push(M.outputColorSpace), y.push(M.envMapMode), y.push(M.envMapCubeUVHeight), y.push(M.mapUv), y.push(M.alphaMapUv), y.push(M.lightMapUv), y.push(M.aoMapUv), y.push(M.bumpMapUv), y.push(M.normalMapUv), y.push(M.displacementMapUv), y.push(M.emissiveMapUv), y.push(M.metalnessMapUv), y.push(M.roughnessMapUv), y.push(M.anisotropyMapUv), y.push(M.clearcoatMapUv), y.push(M.clearcoatNormalMapUv), y.push(M.clearcoatRoughnessMapUv), y.push(M.iridescenceMapUv), y.push(M.iridescenceThicknessMapUv), y.push(M.sheenColorMapUv), y.push(M.sheenRoughnessMapUv), y.push(M.specularMapUv), y.push(M.specularColorMapUv), y.push(M.specularIntensityMapUv), y.push(M.transmissionMapUv), y.push(M.thicknessMapUv), y.push(M.combine), y.push(M.fogExp2), y.push(M.sizeAttenuation), y.push(M.morphTargetsCount), y.push(M.morphAttributeCount), y.push(M.numDirLights), y.push(M.numPointLights), y.push(M.numSpotLights), y.push(M.numSpotLightMaps), y.push(M.numHemiLights), y.push(M.numRectAreaLights), y.push(M.numDirLightShadows), y.push(M.numPointLightShadows), y.push(M.numSpotLightShadows), y.push(M.numSpotLightShadowsWithMaps), y.push(M.numLightProbes), y.push(M.shadowMapType), y.push(M.toneMapping), y.push(M.numClippingPlanes), y.push(M.numClipIntersection), y.push(M.depthPacking);
  }
  function E(y, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), M.gradientMap && o.enable(22), y.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reversedDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), y.push(o.mask);
  }
  function S(y) {
    const M = g[y.type];
    let D;
    if (M) {
      const O = on[M];
      D = pu.clone(O.uniforms);
    } else D = y.uniforms;
    return D;
  }
  function P(y, M) {
    let D;
    for (let O = 0, H = h.length; O < H; O++) {
      const V = h[O];
      if (V.cacheKey === M) {
        D = V, ++D.usedTimes;
        break;
      }
    }
    return D === void 0 && (D = new Ag(n, M, y, r), h.push(D)), D;
  }
  function w(y) {
    if (--y.usedTimes === 0) {
      const M = h.indexOf(y);
      h[M] = h[h.length - 1], h.pop(), y.destroy();
    }
  }
  function U(y) {
    l.remove(y);
  }
  function N() {
    l.dispose();
  }
  return { getParameters: m, getProgramCacheKey: p, getUniforms: S, acquireProgram: P, releaseProgram: w, releaseShaderCache: U, programs: h, dispose: N };
}
function Dg() {
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
  function s(a, o, l) {
    n.get(a)[o] = l;
  }
  function r() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: i, update: s, dispose: r };
}
function Ug(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.material.id !== e.material.id ? n.material.id - e.material.id : n.z !== e.z ? n.z - e.z : n.id - e.id;
}
function Il(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.z !== e.z ? e.z - n.z : n.id - e.id;
}
function Nl() {
  const n = [];
  let e = 0;
  const t = [], i = [], s = [];
  function r() {
    e = 0, t.length = 0, i.length = 0, s.length = 0;
  }
  function a(u, f, d, g, v, m) {
    let p = n[e];
    return p === void 0 ? (p = { id: u.id, object: u, geometry: f, material: d, groupOrder: g, renderOrder: u.renderOrder, z: v, group: m }, n[e] = p) : (p.id = u.id, p.object = u, p.geometry = f, p.material = d, p.groupOrder = g, p.renderOrder = u.renderOrder, p.z = v, p.group = m), e++, p;
  }
  function o(u, f, d, g, v, m) {
    const p = a(u, f, d, g, v, m);
    d.transmission > 0 ? i.push(p) : d.transparent === true ? s.push(p) : t.push(p);
  }
  function l(u, f, d, g, v, m) {
    const p = a(u, f, d, g, v, m);
    d.transmission > 0 ? i.unshift(p) : d.transparent === true ? s.unshift(p) : t.unshift(p);
  }
  function c(u, f) {
    t.length > 1 && t.sort(u || Ug), i.length > 1 && i.sort(f || Il), s.length > 1 && s.sort(f || Il);
  }
  function h() {
    for (let u = e, f = n.length; u < f; u++) {
      const d = n[u];
      if (d.id === null) break;
      d.id = null, d.object = null, d.geometry = null, d.material = null, d.group = null;
    }
  }
  return { opaque: t, transmissive: i, transparent: s, init: r, push: o, unshift: l, finish: h, sort: c };
}
function Lg() {
  let n = /* @__PURE__ */ new WeakMap();
  function e(i, s) {
    const r = n.get(i);
    let a;
    return r === void 0 ? (a = new Nl(), n.set(i, [a])) : s >= r.length ? (a = new Nl(), r.push(a)) : a = r[s], a;
  }
  function t() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function Ig() {
  const n = {};
  return { get: function(e) {
    if (n[e.id] !== void 0) return n[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new R(), color: new Ge() };
        break;
      case "SpotLight":
        t = { position: new R(), direction: new R(), color: new Ge(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new R(), color: new Ge(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new R(), skyColor: new Ge(), groundColor: new Ge() };
        break;
      case "RectAreaLight":
        t = { color: new Ge(), position: new R(), halfWidth: new R(), halfHeight: new R() };
        break;
    }
    return n[e.id] = t, t;
  } };
}
function Ng() {
  const n = {};
  return { get: function(e) {
    if (n[e.id] !== void 0) return n[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new j() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new j() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new j(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return n[e.id] = t, t;
  } };
}
let Fg = 0;
function Og(n, e) {
  return (e.castShadow ? 2 : 0) - (n.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (n.map ? 1 : 0);
}
function Bg(n) {
  const e = new Ig(), t = Ng(), i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) i.probe.push(new R());
  const s = new R(), r = new je(), a = new je();
  function o(c) {
    let h = 0, u = 0, f = 0;
    for (let y = 0; y < 9; y++) i.probe[y].set(0, 0, 0);
    let d = 0, g = 0, v = 0, m = 0, p = 0, b = 0, E = 0, S = 0, P = 0, w = 0, U = 0;
    c.sort(Og);
    for (let y = 0, M = c.length; y < M; y++) {
      const D = c[y], O = D.color, H = D.intensity, V = D.distance, Y = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight) h += O.r * H, u += O.g * H, f += O.b * H;
      else if (D.isLightProbe) {
        for (let W = 0; W < 9; W++) i.probe[W].addScaledVector(D.sh.coefficients[W], H);
        U++;
      } else if (D.isDirectionalLight) {
        const W = e.get(D);
        if (W.color.copy(D.color).multiplyScalar(D.intensity), D.castShadow) {
          const ne = D.shadow, k = t.get(D);
          k.shadowIntensity = ne.intensity, k.shadowBias = ne.bias, k.shadowNormalBias = ne.normalBias, k.shadowRadius = ne.radius, k.shadowMapSize = ne.mapSize, i.directionalShadow[d] = k, i.directionalShadowMap[d] = Y, i.directionalShadowMatrix[d] = D.shadow.matrix, b++;
        }
        i.directional[d] = W, d++;
      } else if (D.isSpotLight) {
        const W = e.get(D);
        W.position.setFromMatrixPosition(D.matrixWorld), W.color.copy(O).multiplyScalar(H), W.distance = V, W.coneCos = Math.cos(D.angle), W.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), W.decay = D.decay, i.spot[v] = W;
        const ne = D.shadow;
        if (D.map && (i.spotLightMap[P] = D.map, P++, ne.updateMatrices(D), D.castShadow && w++), i.spotLightMatrix[v] = ne.matrix, D.castShadow) {
          const k = t.get(D);
          k.shadowIntensity = ne.intensity, k.shadowBias = ne.bias, k.shadowNormalBias = ne.normalBias, k.shadowRadius = ne.radius, k.shadowMapSize = ne.mapSize, i.spotShadow[v] = k, i.spotShadowMap[v] = Y, S++;
        }
        v++;
      } else if (D.isRectAreaLight) {
        const W = e.get(D);
        W.color.copy(O).multiplyScalar(H), W.halfWidth.set(D.width * 0.5, 0, 0), W.halfHeight.set(0, D.height * 0.5, 0), i.rectArea[m] = W, m++;
      } else if (D.isPointLight) {
        const W = e.get(D);
        if (W.color.copy(D.color).multiplyScalar(D.intensity), W.distance = D.distance, W.decay = D.decay, D.castShadow) {
          const ne = D.shadow, k = t.get(D);
          k.shadowIntensity = ne.intensity, k.shadowBias = ne.bias, k.shadowNormalBias = ne.normalBias, k.shadowRadius = ne.radius, k.shadowMapSize = ne.mapSize, k.shadowCameraNear = ne.camera.near, k.shadowCameraFar = ne.camera.far, i.pointShadow[g] = k, i.pointShadowMap[g] = Y, i.pointShadowMatrix[g] = D.shadow.matrix, E++;
        }
        i.point[g] = W, g++;
      } else if (D.isHemisphereLight) {
        const W = e.get(D);
        W.skyColor.copy(D.color).multiplyScalar(H), W.groundColor.copy(D.groundColor).multiplyScalar(H), i.hemi[p] = W, p++;
      }
    }
    m > 0 && (n.has("OES_texture_float_linear") === true ? (i.rectAreaLTC1 = re.LTC_FLOAT_1, i.rectAreaLTC2 = re.LTC_FLOAT_2) : (i.rectAreaLTC1 = re.LTC_HALF_1, i.rectAreaLTC2 = re.LTC_HALF_2)), i.ambient[0] = h, i.ambient[1] = u, i.ambient[2] = f;
    const N = i.hash;
    (N.directionalLength !== d || N.pointLength !== g || N.spotLength !== v || N.rectAreaLength !== m || N.hemiLength !== p || N.numDirectionalShadows !== b || N.numPointShadows !== E || N.numSpotShadows !== S || N.numSpotMaps !== P || N.numLightProbes !== U) && (i.directional.length = d, i.spot.length = v, i.rectArea.length = m, i.point.length = g, i.hemi.length = p, i.directionalShadow.length = b, i.directionalShadowMap.length = b, i.pointShadow.length = E, i.pointShadowMap.length = E, i.spotShadow.length = S, i.spotShadowMap.length = S, i.directionalShadowMatrix.length = b, i.pointShadowMatrix.length = E, i.spotLightMatrix.length = S + P - w, i.spotLightMap.length = P, i.numSpotLightShadowsWithMaps = w, i.numLightProbes = U, N.directionalLength = d, N.pointLength = g, N.spotLength = v, N.rectAreaLength = m, N.hemiLength = p, N.numDirectionalShadows = b, N.numPointShadows = E, N.numSpotShadows = S, N.numSpotMaps = P, N.numLightProbes = U, i.version = Fg++);
  }
  function l(c, h) {
    let u = 0, f = 0, d = 0, g = 0, v = 0;
    const m = h.matrixWorldInverse;
    for (let p = 0, b = c.length; p < b; p++) {
      const E = c[p];
      if (E.isDirectionalLight) {
        const S = i.directional[u];
        S.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(m), u++;
      } else if (E.isSpotLight) {
        const S = i.spot[d];
        S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(m), S.direction.setFromMatrixPosition(E.matrixWorld), s.setFromMatrixPosition(E.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(m), d++;
      } else if (E.isRectAreaLight) {
        const S = i.rectArea[g];
        S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(m), a.identity(), r.copy(E.matrixWorld), r.premultiply(m), a.extractRotation(r), S.halfWidth.set(E.width * 0.5, 0, 0), S.halfHeight.set(0, E.height * 0.5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), g++;
      } else if (E.isPointLight) {
        const S = i.point[f];
        S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(m), f++;
      } else if (E.isHemisphereLight) {
        const S = i.hemi[v];
        S.direction.setFromMatrixPosition(E.matrixWorld), S.direction.transformDirection(m), v++;
      }
    }
  }
  return { setup: o, setupView: l, state: i };
}
function Fl(n) {
  const e = new Bg(n), t = [], i = [];
  function s(h) {
    c.camera = h, t.length = 0, i.length = 0;
  }
  function r(h) {
    t.push(h);
  }
  function a(h) {
    i.push(h);
  }
  function o() {
    e.setup(t);
  }
  function l(h) {
    e.setupView(t, h);
  }
  const c = { lightsArray: t, shadowsArray: i, camera: null, lights: e, transmissionRenderTarget: {} };
  return { init: s, state: c, setupLights: o, setupLightsView: l, pushLight: r, pushShadow: a };
}
function zg(n) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(s, r = 0) {
    const a = e.get(s);
    let o;
    return a === void 0 ? (o = new Fl(n), e.set(s, [o])) : r >= a.length ? (o = new Fl(n), a.push(o)) : o = a[r], o;
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: i };
}
const Hg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, kg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Gg(n, e, t) {
  let i = new so();
  const s = new j(), r = new j(), a = new lt(), o = new hf({ depthPacking: yh }), l = new uf(), c = {}, h = t.maxTextureSize, u = { [En]: Et, [Et]: En, [Wt]: Wt }, f = new bt({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new j() }, radius: { value: 4 } }, vertexShader: Hg, fragmentShader: kg }), d = f.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const g = new Bt();
  g.setAttribute("position", new Ot(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const v = new jt(g, f), m = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Xl;
  let p = this.type;
  this.render = function(w, U, N) {
    if (m.enabled === false || m.autoUpdate === false && m.needsUpdate === false || w.length === 0) return;
    const y = n.getRenderTarget(), M = n.getActiveCubeFace(), D = n.getActiveMipmapLevel(), O = n.state;
    O.setBlending(At), O.buffers.depth.getReversed() === true ? O.buffers.color.setClear(0, 0, 0, 0) : O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(true), O.setScissorTest(false);
    const H = p !== Mn && this.type === Mn, V = p === Mn && this.type !== Mn;
    for (let Y = 0, W = w.length; Y < W; Y++) {
      const ne = w[Y], k = ne.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", ne, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === false && k.needsUpdate === false) continue;
      s.copy(k.mapSize);
      const ae = k.getFrameExtents();
      if (s.multiply(ae), r.copy(k.mapSize), (s.x > h || s.y > h) && (s.x > h && (r.x = Math.floor(h / ae.x), s.x = r.x * ae.x, k.mapSize.x = r.x), s.y > h && (r.y = Math.floor(h / ae.y), s.y = r.y * ae.y, k.mapSize.y = r.y)), k.map === null || H === true || V === true) {
        const Ee = this.type !== Mn ? { minFilter: Yt, magFilter: Yt } : {};
        k.map !== null && k.map.dispose(), k.map = new Pt(s.x, s.y, Ee), k.map.texture.name = ne.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      n.setRenderTarget(k.map), n.clear();
      const he = k.getViewportCount();
      for (let Ee = 0; Ee < he; Ee++) {
        const ze = k.getViewport(Ee);
        a.set(r.x * ze.x, r.y * ze.y, r.x * ze.z, r.y * ze.w), O.viewport(a), k.updateMatrices(ne, Ee), i = k.getFrustum(), S(U, N, k.camera, ne, this.type);
      }
      k.isPointLightShadow !== true && this.type === Mn && b(k, N), k.needsUpdate = false;
    }
    p = this.type, m.needsUpdate = false, n.setRenderTarget(y, M, D);
  };
  function b(w, U) {
    const N = e.update(v);
    f.defines.VSM_SAMPLES !== w.blurSamples && (f.defines.VSM_SAMPLES = w.blurSamples, d.defines.VSM_SAMPLES = w.blurSamples, f.needsUpdate = true, d.needsUpdate = true), w.mapPass === null && (w.mapPass = new Pt(s.x, s.y)), f.uniforms.shadow_pass.value = w.map.texture, f.uniforms.resolution.value = w.mapSize, f.uniforms.radius.value = w.radius, n.setRenderTarget(w.mapPass), n.clear(), n.renderBufferDirect(U, null, N, f, v, null), d.uniforms.shadow_pass.value = w.mapPass.texture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, n.setRenderTarget(w.map), n.clear(), n.renderBufferDirect(U, null, N, d, v, null);
  }
  function E(w, U, N, y) {
    let M = null;
    const D = N.isPointLight === true ? w.customDistanceMaterial : w.customDepthMaterial;
    if (D !== void 0) M = D;
    else if (M = N.isPointLight === true ? l : o, n.localClippingEnabled && U.clipShadows === true && Array.isArray(U.clippingPlanes) && U.clippingPlanes.length !== 0 || U.displacementMap && U.displacementScale !== 0 || U.alphaMap && U.alphaTest > 0 || U.map && U.alphaTest > 0 || U.alphaToCoverage === true) {
      const O = M.uuid, H = U.uuid;
      let V = c[O];
      V === void 0 && (V = {}, c[O] = V);
      let Y = V[H];
      Y === void 0 && (Y = M.clone(), V[H] = Y, U.addEventListener("dispose", P)), M = Y;
    }
    if (M.visible = U.visible, M.wireframe = U.wireframe, y === Mn ? M.side = U.shadowSide !== null ? U.shadowSide : U.side : M.side = U.shadowSide !== null ? U.shadowSide : u[U.side], M.alphaMap = U.alphaMap, M.alphaTest = U.alphaToCoverage === true ? 0.5 : U.alphaTest, M.map = U.map, M.clipShadows = U.clipShadows, M.clippingPlanes = U.clippingPlanes, M.clipIntersection = U.clipIntersection, M.displacementMap = U.displacementMap, M.displacementScale = U.displacementScale, M.displacementBias = U.displacementBias, M.wireframeLinewidth = U.wireframeLinewidth, M.linewidth = U.linewidth, N.isPointLight === true && M.isMeshDistanceMaterial === true) {
      const O = n.properties.get(M);
      O.light = N;
    }
    return M;
  }
  function S(w, U, N, y, M) {
    if (w.visible === false) return;
    if (w.layers.test(U.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && M === Mn) && (!w.frustumCulled || i.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, w.matrixWorld);
      const H = e.update(w), V = w.material;
      if (Array.isArray(V)) {
        const Y = H.groups;
        for (let W = 0, ne = Y.length; W < ne; W++) {
          const k = Y[W], ae = V[k.materialIndex];
          if (ae && ae.visible) {
            const he = E(w, ae, y, M);
            w.onBeforeShadow(n, w, U, N, H, he, k), n.renderBufferDirect(N, null, H, he, w, k), w.onAfterShadow(n, w, U, N, H, he, k);
          }
        }
      } else if (V.visible) {
        const Y = E(w, V, y, M);
        w.onBeforeShadow(n, w, U, N, H, Y, null), n.renderBufferDirect(N, null, H, Y, w, null), w.onAfterShadow(n, w, U, N, H, Y, null);
      }
    }
    const O = w.children;
    for (let H = 0, V = O.length; H < V; H++) S(O[H], U, N, y, M);
  }
  function P(w) {
    w.target.removeEventListener("dispose", P);
    for (const N in c) {
      const y = c[N], M = w.target.uuid;
      M in y && (y[M].dispose(), delete y[M]);
    }
  }
}
const Vg = { [ea]: ta, [na]: ra, [ia]: aa, [Ci]: sa, [ta]: ea, [ra]: na, [aa]: ia, [sa]: Ci };
function Wg(n, e) {
  function t() {
    let C = false;
    const te = new lt();
    let se = null;
    const fe = new lt(0, 0, 0, 0);
    return { setMask: function($) {
      se !== $ && !C && (n.colorMask($, $, $, $), se = $);
    }, setLocked: function($) {
      C = $;
    }, setClear: function($, Z, me, Ue, it) {
      it === true && ($ *= Ue, Z *= Ue, me *= Ue), te.set($, Z, me, Ue), fe.equals(te) === false && (n.clearColor($, Z, me, Ue), fe.copy(te));
    }, reset: function() {
      C = false, se = null, fe.set(-1, 0, 0, 0);
    } };
  }
  function i() {
    let C = false, te = false, se = null, fe = null, $ = null;
    return { setReversed: function(Z) {
      if (te !== Z) {
        const me = e.get("EXT_clip_control");
        Z ? me.clipControlEXT(me.LOWER_LEFT_EXT, me.ZERO_TO_ONE_EXT) : me.clipControlEXT(me.LOWER_LEFT_EXT, me.NEGATIVE_ONE_TO_ONE_EXT), te = Z;
        const Ue = $;
        $ = null, this.setClear(Ue);
      }
    }, getReversed: function() {
      return te;
    }, setTest: function(Z) {
      Z ? J(n.DEPTH_TEST) : de(n.DEPTH_TEST);
    }, setMask: function(Z) {
      se !== Z && !C && (n.depthMask(Z), se = Z);
    }, setFunc: function(Z) {
      if (te && (Z = Vg[Z]), fe !== Z) {
        switch (Z) {
          case ea:
            n.depthFunc(n.NEVER);
            break;
          case ta:
            n.depthFunc(n.ALWAYS);
            break;
          case na:
            n.depthFunc(n.LESS);
            break;
          case Ci:
            n.depthFunc(n.LEQUAL);
            break;
          case ia:
            n.depthFunc(n.EQUAL);
            break;
          case sa:
            n.depthFunc(n.GEQUAL);
            break;
          case ra:
            n.depthFunc(n.GREATER);
            break;
          case aa:
            n.depthFunc(n.NOTEQUAL);
            break;
          default:
            n.depthFunc(n.LEQUAL);
        }
        fe = Z;
      }
    }, setLocked: function(Z) {
      C = Z;
    }, setClear: function(Z) {
      $ !== Z && (te && (Z = 1 - Z), n.clearDepth(Z), $ = Z);
    }, reset: function() {
      C = false, se = null, fe = null, $ = null, te = false;
    } };
  }
  function s() {
    let C = false, te = null, se = null, fe = null, $ = null, Z = null, me = null, Ue = null, it = null;
    return { setTest: function(Ke) {
      C || (Ke ? J(n.STENCIL_TEST) : de(n.STENCIL_TEST));
    }, setMask: function(Ke) {
      te !== Ke && !C && (n.stencilMask(Ke), te = Ke);
    }, setFunc: function(Ke, mn, an) {
      (se !== Ke || fe !== mn || $ !== an) && (n.stencilFunc(Ke, mn, an), se = Ke, fe = mn, $ = an);
    }, setOp: function(Ke, mn, an) {
      (Z !== Ke || me !== mn || Ue !== an) && (n.stencilOp(Ke, mn, an), Z = Ke, me = mn, Ue = an);
    }, setLocked: function(Ke) {
      C = Ke;
    }, setClear: function(Ke) {
      it !== Ke && (n.clearStencil(Ke), it = Ke);
    }, reset: function() {
      C = false, te = null, se = null, fe = null, $ = null, Z = null, me = null, Ue = null, it = null;
    } };
  }
  const r = new t(), a = new i(), o = new s(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), d = [], g = null, v = false, m = null, p = null, b = null, E = null, S = null, P = null, w = null, U = new Ge(0, 0, 0), N = 0, y = false, M = null, D = null, O = null, H = null, V = null;
  const Y = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let W = false, ne = 0;
  const k = n.getParameter(n.VERSION);
  k.indexOf("WebGL") !== -1 ? (ne = parseFloat(/^WebGL (\d)/.exec(k)[1]), W = ne >= 1) : k.indexOf("OpenGL ES") !== -1 && (ne = parseFloat(/^OpenGL ES (\d)/.exec(k)[1]), W = ne >= 2);
  let ae = null, he = {};
  const Ee = n.getParameter(n.SCISSOR_BOX), ze = n.getParameter(n.VIEWPORT), nt = new lt().fromArray(Ee), rt = new lt().fromArray(ze);
  function Ze(C, te, se, fe) {
    const $ = new Uint8Array(4), Z = n.createTexture();
    n.bindTexture(C, Z), n.texParameteri(C, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(C, n.TEXTURE_MAG_FILTER, n.NEAREST);
    for (let me = 0; me < se; me++) C === n.TEXTURE_3D || C === n.TEXTURE_2D_ARRAY ? n.texImage3D(te, 0, n.RGBA, 1, 1, fe, 0, n.RGBA, n.UNSIGNED_BYTE, $) : n.texImage2D(te + me, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, $);
    return Z;
  }
  const q = {};
  q[n.TEXTURE_2D] = Ze(n.TEXTURE_2D, n.TEXTURE_2D, 1), q[n.TEXTURE_CUBE_MAP] = Ze(n.TEXTURE_CUBE_MAP, n.TEXTURE_CUBE_MAP_POSITIVE_X, 6), q[n.TEXTURE_2D_ARRAY] = Ze(n.TEXTURE_2D_ARRAY, n.TEXTURE_2D_ARRAY, 1, 1), q[n.TEXTURE_3D] = Ze(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), J(n.DEPTH_TEST), a.setFunc(Ci), Ce(false), ge(xo), J(n.CULL_FACE), at(At);
  function J(C) {
    h[C] !== true && (n.enable(C), h[C] = true);
  }
  function de(C) {
    h[C] !== false && (n.disable(C), h[C] = false);
  }
  function De(C, te) {
    return u[C] !== te ? (n.bindFramebuffer(C, te), u[C] = te, C === n.DRAW_FRAMEBUFFER && (u[n.FRAMEBUFFER] = te), C === n.FRAMEBUFFER && (u[n.DRAW_FRAMEBUFFER] = te), true) : false;
  }
  function ye(C, te) {
    let se = d, fe = false;
    if (C) {
      se = f.get(te), se === void 0 && (se = [], f.set(te, se));
      const $ = C.textures;
      if (se.length !== $.length || se[0] !== n.COLOR_ATTACHMENT0) {
        for (let Z = 0, me = $.length; Z < me; Z++) se[Z] = n.COLOR_ATTACHMENT0 + Z;
        se.length = $.length, fe = true;
      }
    } else se[0] !== n.BACK && (se[0] = n.BACK, fe = true);
    fe && n.drawBuffers(se);
  }
  function Ve(C) {
    return g !== C ? (n.useProgram(C), g = C, true) : false;
  }
  const wt = { [Xn]: n.FUNC_ADD, [Kc]: n.FUNC_SUBTRACT, [Jc]: n.FUNC_REVERSE_SUBTRACT };
  wt[jc] = n.MIN, wt[$c] = n.MAX;
  const A = { [Qc]: n.ZERO, [eh]: n.ONE, [th]: n.SRC_COLOR, [$r]: n.SRC_ALPHA, [oh]: n.SRC_ALPHA_SATURATE, [rh]: n.DST_COLOR, [ih]: n.DST_ALPHA, [nh]: n.ONE_MINUS_SRC_COLOR, [Qr]: n.ONE_MINUS_SRC_ALPHA, [ah]: n.ONE_MINUS_DST_COLOR, [sh]: n.ONE_MINUS_DST_ALPHA, [lh]: n.CONSTANT_COLOR, [ch]: n.ONE_MINUS_CONSTANT_COLOR, [hh]: n.CONSTANT_ALPHA, [uh]: n.ONE_MINUS_CONSTANT_ALPHA };
  function at(C, te, se, fe, $, Z, me, Ue, it, Ke) {
    if (C === At) {
      v === true && (de(n.BLEND), v = false);
      return;
    }
    if (v === false && (J(n.BLEND), v = true), C !== Zc) {
      if (C !== m || Ke !== y) {
        if ((p !== Xn || S !== Xn) && (n.blendEquation(n.FUNC_ADD), p = Xn, S = Xn), Ke) switch (C) {
          case wi:
            n.blendFuncSeparate(n.ONE, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
            break;
          case So:
            n.blendFunc(n.ONE, n.ONE);
            break;
          case Mo:
            n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
            break;
          case yo:
            n.blendFuncSeparate(n.DST_COLOR, n.ONE_MINUS_SRC_ALPHA, n.ZERO, n.ONE);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", C);
            break;
        }
        else switch (C) {
          case wi:
            n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
            break;
          case So:
            n.blendFuncSeparate(n.SRC_ALPHA, n.ONE, n.ONE, n.ONE);
            break;
          case Mo:
            console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case yo:
            console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", C);
            break;
        }
        b = null, E = null, P = null, w = null, U.set(0, 0, 0), N = 0, m = C, y = Ke;
      }
      return;
    }
    $ = $ || te, Z = Z || se, me = me || fe, (te !== p || $ !== S) && (n.blendEquationSeparate(wt[te], wt[$]), p = te, S = $), (se !== b || fe !== E || Z !== P || me !== w) && (n.blendFuncSeparate(A[se], A[fe], A[Z], A[me]), b = se, E = fe, P = Z, w = me), (Ue.equals(U) === false || it !== N) && (n.blendColor(Ue.r, Ue.g, Ue.b, it), U.copy(Ue), N = it), m = C, y = false;
  }
  function Le(C, te) {
    C.side === Wt ? de(n.CULL_FACE) : J(n.CULL_FACE);
    let se = C.side === Et;
    te && (se = !se), Ce(se), C.blending === wi && C.transparent === false ? at(At) : at(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha), a.setFunc(C.depthFunc), a.setTest(C.depthTest), a.setMask(C.depthWrite), r.setMask(C.colorWrite);
    const fe = C.stencilWrite;
    o.setTest(fe), fe && (o.setMask(C.stencilWriteMask), o.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), o.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), _e(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === true ? J(n.SAMPLE_ALPHA_TO_COVERAGE) : de(n.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ce(C) {
    M !== C && (C ? n.frontFace(n.CW) : n.frontFace(n.CCW), M = C);
  }
  function ge(C) {
    C !== Xc ? (J(n.CULL_FACE), C !== D && (C === xo ? n.cullFace(n.BACK) : C === Yc ? n.cullFace(n.FRONT) : n.cullFace(n.FRONT_AND_BACK))) : de(n.CULL_FACE), D = C;
  }
  function ot(C) {
    C !== O && (W && n.lineWidth(C), O = C);
  }
  function _e(C, te, se) {
    C ? (J(n.POLYGON_OFFSET_FILL), (H !== te || V !== se) && (n.polygonOffset(te, se), H = te, V = se)) : de(n.POLYGON_OFFSET_FILL);
  }
  function Fe(C) {
    C ? J(n.SCISSOR_TEST) : de(n.SCISSOR_TEST);
  }
  function Mt(C) {
    C === void 0 && (C = n.TEXTURE0 + Y - 1), ae !== C && (n.activeTexture(C), ae = C);
  }
  function dt(C, te, se) {
    se === void 0 && (ae === null ? se = n.TEXTURE0 + Y - 1 : se = ae);
    let fe = he[se];
    fe === void 0 && (fe = { type: void 0, texture: void 0 }, he[se] = fe), (fe.type !== C || fe.texture !== te) && (ae !== se && (n.activeTexture(se), ae = se), n.bindTexture(C, te || q[C]), fe.type = C, fe.texture = te);
  }
  function T() {
    const C = he[ae];
    C !== void 0 && C.type !== void 0 && (n.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function _() {
    try {
      n.compressedTexImage2D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function F() {
    try {
      n.compressedTexImage3D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function X() {
    try {
      n.texSubImage2D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function K() {
    try {
      n.texSubImage3D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function G() {
    try {
      n.compressedTexSubImage2D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Me() {
    try {
      n.compressedTexSubImage3D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ie() {
    try {
      n.texStorage2D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ve() {
    try {
      n.texStorage3D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function xe() {
    try {
      n.texImage2D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ee() {
    try {
      n.texImage3D(...arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ce(C) {
    nt.equals(C) === false && (n.scissor(C.x, C.y, C.z, C.w), nt.copy(C));
  }
  function we(C) {
    rt.equals(C) === false && (n.viewport(C.x, C.y, C.z, C.w), rt.copy(C));
  }
  function Se(C, te) {
    let se = c.get(te);
    se === void 0 && (se = /* @__PURE__ */ new WeakMap(), c.set(te, se));
    let fe = se.get(C);
    fe === void 0 && (fe = n.getUniformBlockIndex(te, C.name), se.set(C, fe));
  }
  function oe(C, te) {
    const fe = c.get(te).get(C);
    l.get(te) !== fe && (n.uniformBlockBinding(te, fe, C.__bindingPointIndex), l.set(te, fe));
  }
  function Ie() {
    n.disable(n.BLEND), n.disable(n.CULL_FACE), n.disable(n.DEPTH_TEST), n.disable(n.POLYGON_OFFSET_FILL), n.disable(n.SCISSOR_TEST), n.disable(n.STENCIL_TEST), n.disable(n.SAMPLE_ALPHA_TO_COVERAGE), n.blendEquation(n.FUNC_ADD), n.blendFunc(n.ONE, n.ZERO), n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO), n.blendColor(0, 0, 0, 0), n.colorMask(true, true, true, true), n.clearColor(0, 0, 0, 0), n.depthMask(true), n.depthFunc(n.LESS), a.setReversed(false), n.clearDepth(1), n.stencilMask(4294967295), n.stencilFunc(n.ALWAYS, 0, 4294967295), n.stencilOp(n.KEEP, n.KEEP, n.KEEP), n.clearStencil(0), n.cullFace(n.BACK), n.frontFace(n.CCW), n.polygonOffset(0, 0), n.activeTexture(n.TEXTURE0), n.bindFramebuffer(n.FRAMEBUFFER, null), n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), n.bindFramebuffer(n.READ_FRAMEBUFFER, null), n.useProgram(null), n.lineWidth(1), n.scissor(0, 0, n.canvas.width, n.canvas.height), n.viewport(0, 0, n.canvas.width, n.canvas.height), h = {}, ae = null, he = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), d = [], g = null, v = false, m = null, p = null, b = null, E = null, S = null, P = null, w = null, U = new Ge(0, 0, 0), N = 0, y = false, M = null, D = null, O = null, H = null, V = null, nt.set(0, 0, n.canvas.width, n.canvas.height), rt.set(0, 0, n.canvas.width, n.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: r, depth: a, stencil: o }, enable: J, disable: de, bindFramebuffer: De, drawBuffers: ye, useProgram: Ve, setBlending: at, setMaterial: Le, setFlipSided: Ce, setCullFace: ge, setLineWidth: ot, setPolygonOffset: _e, setScissorTest: Fe, activeTexture: Mt, bindTexture: dt, unbindTexture: T, compressedTexImage2D: _, compressedTexImage3D: F, texImage2D: xe, texImage3D: ee, updateUBOMapping: Se, uniformBlockBinding: oe, texStorage2D: ie, texStorage3D: ve, texSubImage2D: X, texSubImage3D: K, compressedTexSubImage2D: G, compressedTexSubImage3D: Me, scissor: ce, viewport: we, reset: Ie };
}
function Xg(n, e, t, i, s, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new j(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const f = /* @__PURE__ */ new WeakMap();
  let d = false;
  try {
    d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(T, _) {
    return d ? new OffscreenCanvas(T, _) : ss("canvas");
  }
  function v(T, _, F) {
    let X = 1;
    const K = dt(T);
    if ((K.width > F || K.height > F) && (X = F / Math.max(K.width, K.height)), X < 1) if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
      const G = Math.floor(X * K.width), Me = Math.floor(X * K.height);
      u === void 0 && (u = g(G, Me));
      const ie = _ ? g(G, Me) : u;
      return ie.width = G, ie.height = Me, ie.getContext("2d").drawImage(T, 0, 0, G, Me), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + K.width + "x" + K.height + ") to (" + G + "x" + Me + ")."), ie;
    } else return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + K.width + "x" + K.height + ")."), T;
    return T;
  }
  function m(T) {
    return T.generateMipmaps;
  }
  function p(T) {
    n.generateMipmap(T);
  }
  function b(T) {
    return T.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? n.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? n.TEXTURE_2D_ARRAY : n.TEXTURE_2D;
  }
  function E(T, _, F, X, K = false) {
    if (T !== null) {
      if (n[T] !== void 0) return n[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let G = _;
    if (_ === n.RED && (F === n.FLOAT && (G = n.R32F), F === n.HALF_FLOAT && (G = n.R16F), F === n.UNSIGNED_BYTE && (G = n.R8)), _ === n.RED_INTEGER && (F === n.UNSIGNED_BYTE && (G = n.R8UI), F === n.UNSIGNED_SHORT && (G = n.R16UI), F === n.UNSIGNED_INT && (G = n.R32UI), F === n.BYTE && (G = n.R8I), F === n.SHORT && (G = n.R16I), F === n.INT && (G = n.R32I)), _ === n.RG && (F === n.FLOAT && (G = n.RG32F), F === n.HALF_FLOAT && (G = n.RG16F), F === n.UNSIGNED_BYTE && (G = n.RG8)), _ === n.RG_INTEGER && (F === n.UNSIGNED_BYTE && (G = n.RG8UI), F === n.UNSIGNED_SHORT && (G = n.RG16UI), F === n.UNSIGNED_INT && (G = n.RG32UI), F === n.BYTE && (G = n.RG8I), F === n.SHORT && (G = n.RG16I), F === n.INT && (G = n.RG32I)), _ === n.RGB_INTEGER && (F === n.UNSIGNED_BYTE && (G = n.RGB8UI), F === n.UNSIGNED_SHORT && (G = n.RGB16UI), F === n.UNSIGNED_INT && (G = n.RGB32UI), F === n.BYTE && (G = n.RGB8I), F === n.SHORT && (G = n.RGB16I), F === n.INT && (G = n.RGB32I)), _ === n.RGBA_INTEGER && (F === n.UNSIGNED_BYTE && (G = n.RGBA8UI), F === n.UNSIGNED_SHORT && (G = n.RGBA16UI), F === n.UNSIGNED_INT && (G = n.RGBA32UI), F === n.BYTE && (G = n.RGBA8I), F === n.SHORT && (G = n.RGBA16I), F === n.INT && (G = n.RGBA32I)), _ === n.RGB && (F === n.UNSIGNED_INT_5_9_9_9_REV && (G = n.RGB9_E5), F === n.UNSIGNED_INT_10F_11F_11F_REV && (G = n.R11F_G11F_B10F)), _ === n.RGBA) {
      const Me = K ? nr : Ye.getTransfer(X);
      F === n.FLOAT && (G = n.RGBA32F), F === n.HALF_FLOAT && (G = n.RGBA16F), F === n.UNSIGNED_BYTE && (G = Me === Qe ? n.SRGB8_ALPHA8 : n.RGBA8), F === n.UNSIGNED_SHORT_4_4_4_4 && (G = n.RGBA4), F === n.UNSIGNED_SHORT_5_5_5_1 && (G = n.RGB5_A1);
    }
    return (G === n.R16F || G === n.R32F || G === n.RG16F || G === n.RG32F || G === n.RGBA16F || G === n.RGBA32F) && e.get("EXT_color_buffer_float"), G;
  }
  function S(T, _) {
    let F;
    return T ? _ === null || _ === In || _ === Ui ? F = n.DEPTH24_STENCIL8 : _ === cn ? F = n.DEPTH32F_STENCIL8 : _ === ts && (F = n.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === In || _ === Ui ? F = n.DEPTH_COMPONENT24 : _ === cn ? F = n.DEPTH_COMPONENT32F : _ === ts && (F = n.DEPTH_COMPONENT16), F;
  }
  function P(T, _) {
    return m(T) === true || T.isFramebufferTexture && T.minFilter !== Yt && T.minFilter !== Ft ? Math.log2(Math.max(_.width, _.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? _.mipmaps.length : 1;
  }
  function w(T) {
    const _ = T.target;
    _.removeEventListener("dispose", w), N(_), _.isVideoTexture && h.delete(_);
  }
  function U(T) {
    const _ = T.target;
    _.removeEventListener("dispose", U), M(_);
  }
  function N(T) {
    const _ = i.get(T);
    if (_.__webglInit === void 0) return;
    const F = T.source, X = f.get(F);
    if (X) {
      const K = X[_.__cacheKey];
      K.usedTimes--, K.usedTimes === 0 && y(T), Object.keys(X).length === 0 && f.delete(F);
    }
    i.remove(T);
  }
  function y(T) {
    const _ = i.get(T);
    n.deleteTexture(_.__webglTexture);
    const F = T.source, X = f.get(F);
    delete X[_.__cacheKey], a.memory.textures--;
  }
  function M(T) {
    const _ = i.get(T);
    if (T.depthTexture && (T.depthTexture.dispose(), i.remove(T.depthTexture)), T.isWebGLCubeRenderTarget) for (let X = 0; X < 6; X++) {
      if (Array.isArray(_.__webglFramebuffer[X])) for (let K = 0; K < _.__webglFramebuffer[X].length; K++) n.deleteFramebuffer(_.__webglFramebuffer[X][K]);
      else n.deleteFramebuffer(_.__webglFramebuffer[X]);
      _.__webglDepthbuffer && n.deleteRenderbuffer(_.__webglDepthbuffer[X]);
    }
    else {
      if (Array.isArray(_.__webglFramebuffer)) for (let X = 0; X < _.__webglFramebuffer.length; X++) n.deleteFramebuffer(_.__webglFramebuffer[X]);
      else n.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && n.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && n.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer) for (let X = 0; X < _.__webglColorRenderbuffer.length; X++) _.__webglColorRenderbuffer[X] && n.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);
      _.__webglDepthRenderbuffer && n.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const F = T.textures;
    for (let X = 0, K = F.length; X < K; X++) {
      const G = i.get(F[X]);
      G.__webglTexture && (n.deleteTexture(G.__webglTexture), a.memory.textures--), i.remove(F[X]);
    }
    i.remove(T);
  }
  let D = 0;
  function O() {
    D = 0;
  }
  function H() {
    const T = D;
    return T >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + s.maxTextures), D += 1, T;
  }
  function V(T) {
    const _ = [];
    return _.push(T.wrapS), _.push(T.wrapT), _.push(T.wrapR || 0), _.push(T.magFilter), _.push(T.minFilter), _.push(T.anisotropy), _.push(T.internalFormat), _.push(T.format), _.push(T.type), _.push(T.generateMipmaps), _.push(T.premultiplyAlpha), _.push(T.flipY), _.push(T.unpackAlignment), _.push(T.colorSpace), _.join();
  }
  function Y(T, _) {
    const F = i.get(T);
    if (T.isVideoTexture && Fe(T), T.isRenderTargetTexture === false && T.isExternalTexture !== true && T.version > 0 && F.__version !== T.version) {
      const X = T.image;
      if (X === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (X.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        q(F, T, _);
        return;
      }
    } else T.isExternalTexture && (F.__webglTexture = T.sourceTexture ? T.sourceTexture : null);
    t.bindTexture(n.TEXTURE_2D, F.__webglTexture, n.TEXTURE0 + _);
  }
  function W(T, _) {
    const F = i.get(T);
    if (T.isRenderTargetTexture === false && T.version > 0 && F.__version !== T.version) {
      q(F, T, _);
      return;
    }
    t.bindTexture(n.TEXTURE_2D_ARRAY, F.__webglTexture, n.TEXTURE0 + _);
  }
  function ne(T, _) {
    const F = i.get(T);
    if (T.isRenderTargetTexture === false && T.version > 0 && F.__version !== T.version) {
      q(F, T, _);
      return;
    }
    t.bindTexture(n.TEXTURE_3D, F.__webglTexture, n.TEXTURE0 + _);
  }
  function k(T, _) {
    const F = i.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      J(F, T, _);
      return;
    }
    t.bindTexture(n.TEXTURE_CUBE_MAP, F.__webglTexture, n.TEXTURE0 + _);
  }
  const ae = { [ca]: n.REPEAT, [qn]: n.CLAMP_TO_EDGE, [ha]: n.MIRRORED_REPEAT }, he = { [Yt]: n.NEAREST, [Mh]: n.NEAREST_MIPMAP_NEAREST, [ms]: n.NEAREST_MIPMAP_LINEAR, [Ft]: n.LINEAR, [dr]: n.LINEAR_MIPMAP_NEAREST, [Zn]: n.LINEAR_MIPMAP_LINEAR }, Ee = { [Th]: n.NEVER, [Ph]: n.ALWAYS, [bh]: n.LESS, [nc]: n.LEQUAL, [Ah]: n.EQUAL, [Ch]: n.GEQUAL, [wh]: n.GREATER, [Rh]: n.NOTEQUAL };
  function ze(T, _) {
    if (_.type === cn && e.has("OES_texture_float_linear") === false && (_.magFilter === Ft || _.magFilter === dr || _.magFilter === ms || _.magFilter === Zn || _.minFilter === Ft || _.minFilter === dr || _.minFilter === ms || _.minFilter === Zn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), n.texParameteri(T, n.TEXTURE_WRAP_S, ae[_.wrapS]), n.texParameteri(T, n.TEXTURE_WRAP_T, ae[_.wrapT]), (T === n.TEXTURE_3D || T === n.TEXTURE_2D_ARRAY) && n.texParameteri(T, n.TEXTURE_WRAP_R, ae[_.wrapR]), n.texParameteri(T, n.TEXTURE_MAG_FILTER, he[_.magFilter]), n.texParameteri(T, n.TEXTURE_MIN_FILTER, he[_.minFilter]), _.compareFunction && (n.texParameteri(T, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE), n.texParameteri(T, n.TEXTURE_COMPARE_FUNC, Ee[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (_.magFilter === Yt || _.minFilter !== ms && _.minFilter !== Zn || _.type === cn && e.has("OES_texture_float_linear") === false) return;
      if (_.anisotropy > 1 || i.get(_).__currentAnisotropy) {
        const F = e.get("EXT_texture_filter_anisotropic");
        n.texParameterf(T, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, s.getMaxAnisotropy())), i.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function nt(T, _) {
    let F = false;
    T.__webglInit === void 0 && (T.__webglInit = true, _.addEventListener("dispose", w));
    const X = _.source;
    let K = f.get(X);
    K === void 0 && (K = {}, f.set(X, K));
    const G = V(_);
    if (G !== T.__cacheKey) {
      K[G] === void 0 && (K[G] = { texture: n.createTexture(), usedTimes: 0 }, a.memory.textures++, F = true), K[G].usedTimes++;
      const Me = K[T.__cacheKey];
      Me !== void 0 && (K[T.__cacheKey].usedTimes--, Me.usedTimes === 0 && y(_)), T.__cacheKey = G, T.__webglTexture = K[G].texture;
    }
    return F;
  }
  function rt(T, _, F) {
    return Math.floor(Math.floor(T / F) / _);
  }
  function Ze(T, _, F, X) {
    const G = T.updateRanges;
    if (G.length === 0) t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, _.width, _.height, F, X, _.data);
    else {
      G.sort((ee, ce) => ee.start - ce.start);
      let Me = 0;
      for (let ee = 1; ee < G.length; ee++) {
        const ce = G[Me], we = G[ee], Se = ce.start + ce.count, oe = rt(we.start, _.width, 4), Ie = rt(ce.start, _.width, 4);
        we.start <= Se + 1 && oe === Ie && rt(we.start + we.count - 1, _.width, 4) === oe ? ce.count = Math.max(ce.count, we.start + we.count - ce.start) : (++Me, G[Me] = we);
      }
      G.length = Me + 1;
      const ie = n.getParameter(n.UNPACK_ROW_LENGTH), ve = n.getParameter(n.UNPACK_SKIP_PIXELS), xe = n.getParameter(n.UNPACK_SKIP_ROWS);
      n.pixelStorei(n.UNPACK_ROW_LENGTH, _.width);
      for (let ee = 0, ce = G.length; ee < ce; ee++) {
        const we = G[ee], Se = Math.floor(we.start / 4), oe = Math.ceil(we.count / 4), Ie = Se % _.width, C = Math.floor(Se / _.width), te = oe, se = 1;
        n.pixelStorei(n.UNPACK_SKIP_PIXELS, Ie), n.pixelStorei(n.UNPACK_SKIP_ROWS, C), t.texSubImage2D(n.TEXTURE_2D, 0, Ie, C, te, se, F, X, _.data);
      }
      T.clearUpdateRanges(), n.pixelStorei(n.UNPACK_ROW_LENGTH, ie), n.pixelStorei(n.UNPACK_SKIP_PIXELS, ve), n.pixelStorei(n.UNPACK_SKIP_ROWS, xe);
    }
  }
  function q(T, _, F) {
    let X = n.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (X = n.TEXTURE_2D_ARRAY), _.isData3DTexture && (X = n.TEXTURE_3D);
    const K = nt(T, _), G = _.source;
    t.bindTexture(X, T.__webglTexture, n.TEXTURE0 + F);
    const Me = i.get(G);
    if (G.version !== Me.__version || K === true) {
      t.activeTexture(n.TEXTURE0 + F);
      const ie = Ye.getPrimaries(Ye.workingColorSpace), ve = _.colorSpace === ln ? null : Ye.getPrimaries(_.colorSpace), xe = _.colorSpace === ln || ie === ve ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, _.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, _.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, xe);
      let ee = v(_.image, false, s.maxTextureSize);
      ee = Mt(_, ee);
      const ce = r.convert(_.format, _.colorSpace), we = r.convert(_.type);
      let Se = E(_.internalFormat, ce, we, _.colorSpace, _.isVideoTexture);
      ze(X, _);
      let oe;
      const Ie = _.mipmaps, C = _.isVideoTexture !== true, te = Me.__version === void 0 || K === true, se = G.dataReady, fe = P(_, ee);
      if (_.isDepthTexture) Se = S(_.format === Li, _.type), te && (C ? t.texStorage2D(n.TEXTURE_2D, 1, Se, ee.width, ee.height) : t.texImage2D(n.TEXTURE_2D, 0, Se, ee.width, ee.height, 0, ce, we, null));
      else if (_.isDataTexture) if (Ie.length > 0) {
        C && te && t.texStorage2D(n.TEXTURE_2D, fe, Se, Ie[0].width, Ie[0].height);
        for (let $ = 0, Z = Ie.length; $ < Z; $++) oe = Ie[$], C ? se && t.texSubImage2D(n.TEXTURE_2D, $, 0, 0, oe.width, oe.height, ce, we, oe.data) : t.texImage2D(n.TEXTURE_2D, $, Se, oe.width, oe.height, 0, ce, we, oe.data);
        _.generateMipmaps = false;
      } else C ? (te && t.texStorage2D(n.TEXTURE_2D, fe, Se, ee.width, ee.height), se && Ze(_, ee, ce, we)) : t.texImage2D(n.TEXTURE_2D, 0, Se, ee.width, ee.height, 0, ce, we, ee.data);
      else if (_.isCompressedTexture) if (_.isCompressedArrayTexture) {
        C && te && t.texStorage3D(n.TEXTURE_2D_ARRAY, fe, Se, Ie[0].width, Ie[0].height, ee.depth);
        for (let $ = 0, Z = Ie.length; $ < Z; $++) if (oe = Ie[$], _.format !== sn) if (ce !== null) if (C) {
          if (se) if (_.layerUpdates.size > 0) {
            const me = fl(oe.width, oe.height, _.format, _.type);
            for (const Ue of _.layerUpdates) {
              const it = oe.data.subarray(Ue * me / oe.data.BYTES_PER_ELEMENT, (Ue + 1) * me / oe.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, $, 0, 0, Ue, oe.width, oe.height, 1, ce, it);
            }
            _.clearLayerUpdates();
          } else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, $, 0, 0, 0, oe.width, oe.height, ee.depth, ce, oe.data);
        } else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY, $, Se, oe.width, oe.height, ee.depth, 0, oe.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else C ? se && t.texSubImage3D(n.TEXTURE_2D_ARRAY, $, 0, 0, 0, oe.width, oe.height, ee.depth, ce, we, oe.data) : t.texImage3D(n.TEXTURE_2D_ARRAY, $, Se, oe.width, oe.height, ee.depth, 0, ce, we, oe.data);
      } else {
        C && te && t.texStorage2D(n.TEXTURE_2D, fe, Se, Ie[0].width, Ie[0].height);
        for (let $ = 0, Z = Ie.length; $ < Z; $++) oe = Ie[$], _.format !== sn ? ce !== null ? C ? se && t.compressedTexSubImage2D(n.TEXTURE_2D, $, 0, 0, oe.width, oe.height, ce, oe.data) : t.compressedTexImage2D(n.TEXTURE_2D, $, Se, oe.width, oe.height, 0, oe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : C ? se && t.texSubImage2D(n.TEXTURE_2D, $, 0, 0, oe.width, oe.height, ce, we, oe.data) : t.texImage2D(n.TEXTURE_2D, $, Se, oe.width, oe.height, 0, ce, we, oe.data);
      }
      else if (_.isDataArrayTexture) if (C) {
        if (te && t.texStorage3D(n.TEXTURE_2D_ARRAY, fe, Se, ee.width, ee.height, ee.depth), se) if (_.layerUpdates.size > 0) {
          const $ = fl(ee.width, ee.height, _.format, _.type);
          for (const Z of _.layerUpdates) {
            const me = ee.data.subarray(Z * $ / ee.data.BYTES_PER_ELEMENT, (Z + 1) * $ / ee.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, Z, ee.width, ee.height, 1, ce, we, me);
          }
          _.clearLayerUpdates();
        } else t.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ee.width, ee.height, ee.depth, ce, we, ee.data);
      } else t.texImage3D(n.TEXTURE_2D_ARRAY, 0, Se, ee.width, ee.height, ee.depth, 0, ce, we, ee.data);
      else if (_.isData3DTexture) C ? (te && t.texStorage3D(n.TEXTURE_3D, fe, Se, ee.width, ee.height, ee.depth), se && t.texSubImage3D(n.TEXTURE_3D, 0, 0, 0, 0, ee.width, ee.height, ee.depth, ce, we, ee.data)) : t.texImage3D(n.TEXTURE_3D, 0, Se, ee.width, ee.height, ee.depth, 0, ce, we, ee.data);
      else if (_.isFramebufferTexture) {
        if (te) if (C) t.texStorage2D(n.TEXTURE_2D, fe, Se, ee.width, ee.height);
        else {
          let $ = ee.width, Z = ee.height;
          for (let me = 0; me < fe; me++) t.texImage2D(n.TEXTURE_2D, me, Se, $, Z, 0, ce, we, null), $ >>= 1, Z >>= 1;
        }
      } else if (Ie.length > 0) {
        if (C && te) {
          const $ = dt(Ie[0]);
          t.texStorage2D(n.TEXTURE_2D, fe, Se, $.width, $.height);
        }
        for (let $ = 0, Z = Ie.length; $ < Z; $++) oe = Ie[$], C ? se && t.texSubImage2D(n.TEXTURE_2D, $, 0, 0, ce, we, oe) : t.texImage2D(n.TEXTURE_2D, $, Se, ce, we, oe);
        _.generateMipmaps = false;
      } else if (C) {
        if (te) {
          const $ = dt(ee);
          t.texStorage2D(n.TEXTURE_2D, fe, Se, $.width, $.height);
        }
        se && t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, ce, we, ee);
      } else t.texImage2D(n.TEXTURE_2D, 0, Se, ce, we, ee);
      m(_) && p(X), Me.__version = G.version, _.onUpdate && _.onUpdate(_);
    }
    T.__version = _.version;
  }
  function J(T, _, F) {
    if (_.image.length !== 6) return;
    const X = nt(T, _), K = _.source;
    t.bindTexture(n.TEXTURE_CUBE_MAP, T.__webglTexture, n.TEXTURE0 + F);
    const G = i.get(K);
    if (K.version !== G.__version || X === true) {
      t.activeTexture(n.TEXTURE0 + F);
      const Me = Ye.getPrimaries(Ye.workingColorSpace), ie = _.colorSpace === ln ? null : Ye.getPrimaries(_.colorSpace), ve = _.colorSpace === ln || Me === ie ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, _.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, _.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, ve);
      const xe = _.isCompressedTexture || _.image[0].isCompressedTexture, ee = _.image[0] && _.image[0].isDataTexture, ce = [];
      for (let Z = 0; Z < 6; Z++) !xe && !ee ? ce[Z] = v(_.image[Z], true, s.maxCubemapSize) : ce[Z] = ee ? _.image[Z].image : _.image[Z], ce[Z] = Mt(_, ce[Z]);
      const we = ce[0], Se = r.convert(_.format, _.colorSpace), oe = r.convert(_.type), Ie = E(_.internalFormat, Se, oe, _.colorSpace), C = _.isVideoTexture !== true, te = G.__version === void 0 || X === true, se = K.dataReady;
      let fe = P(_, we);
      ze(n.TEXTURE_CUBE_MAP, _);
      let $;
      if (xe) {
        C && te && t.texStorage2D(n.TEXTURE_CUBE_MAP, fe, Ie, we.width, we.height);
        for (let Z = 0; Z < 6; Z++) {
          $ = ce[Z].mipmaps;
          for (let me = 0; me < $.length; me++) {
            const Ue = $[me];
            _.format !== sn ? Se !== null ? C ? se && t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, me, 0, 0, Ue.width, Ue.height, Se, Ue.data) : t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, me, Ie, Ue.width, Ue.height, 0, Ue.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : C ? se && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, me, 0, 0, Ue.width, Ue.height, Se, oe, Ue.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, me, Ie, Ue.width, Ue.height, 0, Se, oe, Ue.data);
          }
        }
      } else {
        if ($ = _.mipmaps, C && te) {
          $.length > 0 && fe++;
          const Z = dt(ce[0]);
          t.texStorage2D(n.TEXTURE_CUBE_MAP, fe, Ie, Z.width, Z.height);
        }
        for (let Z = 0; Z < 6; Z++) if (ee) {
          C ? se && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, ce[Z].width, ce[Z].height, Se, oe, ce[Z].data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, Ie, ce[Z].width, ce[Z].height, 0, Se, oe, ce[Z].data);
          for (let me = 0; me < $.length; me++) {
            const it = $[me].image[Z].image;
            C ? se && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, me + 1, 0, 0, it.width, it.height, Se, oe, it.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, me + 1, Ie, it.width, it.height, 0, Se, oe, it.data);
          }
        } else {
          C ? se && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, Se, oe, ce[Z]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, Ie, Se, oe, ce[Z]);
          for (let me = 0; me < $.length; me++) {
            const Ue = $[me];
            C ? se && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, me + 1, 0, 0, Se, oe, Ue.image[Z]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Z, me + 1, Ie, Se, oe, Ue.image[Z]);
          }
        }
      }
      m(_) && p(n.TEXTURE_CUBE_MAP), G.__version = K.version, _.onUpdate && _.onUpdate(_);
    }
    T.__version = _.version;
  }
  function de(T, _, F, X, K, G) {
    const Me = r.convert(F.format, F.colorSpace), ie = r.convert(F.type), ve = E(F.internalFormat, Me, ie, F.colorSpace), xe = i.get(_), ee = i.get(F);
    if (ee.__renderTarget = _, !xe.__hasExternalTextures) {
      const ce = Math.max(1, _.width >> G), we = Math.max(1, _.height >> G);
      K === n.TEXTURE_3D || K === n.TEXTURE_2D_ARRAY ? t.texImage3D(K, G, ve, ce, we, _.depth, 0, Me, ie, null) : t.texImage2D(K, G, ve, ce, we, 0, Me, ie, null);
    }
    t.bindFramebuffer(n.FRAMEBUFFER, T), _e(_) ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, X, K, ee.__webglTexture, 0, ot(_)) : (K === n.TEXTURE_2D || K >= n.TEXTURE_CUBE_MAP_POSITIVE_X && K <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z) && n.framebufferTexture2D(n.FRAMEBUFFER, X, K, ee.__webglTexture, G), t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function De(T, _, F) {
    if (n.bindRenderbuffer(n.RENDERBUFFER, T), _.depthBuffer) {
      const X = _.depthTexture, K = X && X.isDepthTexture ? X.type : null, G = S(_.stencilBuffer, K), Me = _.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, ie = ot(_);
      _e(_) ? o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, ie, G, _.width, _.height) : F ? n.renderbufferStorageMultisample(n.RENDERBUFFER, ie, G, _.width, _.height) : n.renderbufferStorage(n.RENDERBUFFER, G, _.width, _.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, Me, n.RENDERBUFFER, T);
    } else {
      const X = _.textures;
      for (let K = 0; K < X.length; K++) {
        const G = X[K], Me = r.convert(G.format, G.colorSpace), ie = r.convert(G.type), ve = E(G.internalFormat, Me, ie, G.colorSpace), xe = ot(_);
        F && _e(_) === false ? n.renderbufferStorageMultisample(n.RENDERBUFFER, xe, ve, _.width, _.height) : _e(_) ? o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, xe, ve, _.width, _.height) : n.renderbufferStorage(n.RENDERBUFFER, ve, _.width, _.height);
      }
    }
    n.bindRenderbuffer(n.RENDERBUFFER, null);
  }
  function ye(T, _) {
    if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(n.FRAMEBUFFER, T), !(_.depthTexture && _.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const X = i.get(_.depthTexture);
    X.__renderTarget = _, (!X.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = true), Y(_.depthTexture, 0);
    const K = X.__webglTexture, G = ot(_);
    if (_.depthTexture.format === ns) _e(_) ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, K, 0, G) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, K, 0);
    else if (_.depthTexture.format === Li) _e(_) ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, K, 0, G) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, K, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Ve(T) {
    const _ = i.get(T), F = T.isWebGLCubeRenderTarget === true;
    if (_.__boundDepthTexture !== T.depthTexture) {
      const X = T.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), X) {
        const K = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, X.removeEventListener("dispose", K);
        };
        X.addEventListener("dispose", K), _.__depthDisposeCallback = K;
      }
      _.__boundDepthTexture = X;
    }
    if (T.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      const X = T.texture.mipmaps;
      X && X.length > 0 ? ye(_.__webglFramebuffer[0], T) : ye(_.__webglFramebuffer, T);
    } else if (F) {
      _.__webglDepthbuffer = [];
      for (let X = 0; X < 6; X++) if (t.bindFramebuffer(n.FRAMEBUFFER, _.__webglFramebuffer[X]), _.__webglDepthbuffer[X] === void 0) _.__webglDepthbuffer[X] = n.createRenderbuffer(), De(_.__webglDepthbuffer[X], T, false);
      else {
        const K = T.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, G = _.__webglDepthbuffer[X];
        n.bindRenderbuffer(n.RENDERBUFFER, G), n.framebufferRenderbuffer(n.FRAMEBUFFER, K, n.RENDERBUFFER, G);
      }
    } else {
      const X = T.texture.mipmaps;
      if (X && X.length > 0 ? t.bindFramebuffer(n.FRAMEBUFFER, _.__webglFramebuffer[0]) : t.bindFramebuffer(n.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0) _.__webglDepthbuffer = n.createRenderbuffer(), De(_.__webglDepthbuffer, T, false);
      else {
        const K = T.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, G = _.__webglDepthbuffer;
        n.bindRenderbuffer(n.RENDERBUFFER, G), n.framebufferRenderbuffer(n.FRAMEBUFFER, K, n.RENDERBUFFER, G);
      }
    }
    t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function wt(T, _, F) {
    const X = i.get(T);
    _ !== void 0 && de(X.__webglFramebuffer, T, T.texture, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, 0), F !== void 0 && Ve(T);
  }
  function A(T) {
    const _ = T.texture, F = i.get(T), X = i.get(_);
    T.addEventListener("dispose", U);
    const K = T.textures, G = T.isWebGLCubeRenderTarget === true, Me = K.length > 1;
    if (Me || (X.__webglTexture === void 0 && (X.__webglTexture = n.createTexture()), X.__version = _.version, a.memory.textures++), G) {
      F.__webglFramebuffer = [];
      for (let ie = 0; ie < 6; ie++) if (_.mipmaps && _.mipmaps.length > 0) {
        F.__webglFramebuffer[ie] = [];
        for (let ve = 0; ve < _.mipmaps.length; ve++) F.__webglFramebuffer[ie][ve] = n.createFramebuffer();
      } else F.__webglFramebuffer[ie] = n.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let ie = 0; ie < _.mipmaps.length; ie++) F.__webglFramebuffer[ie] = n.createFramebuffer();
      } else F.__webglFramebuffer = n.createFramebuffer();
      if (Me) for (let ie = 0, ve = K.length; ie < ve; ie++) {
        const xe = i.get(K[ie]);
        xe.__webglTexture === void 0 && (xe.__webglTexture = n.createTexture(), a.memory.textures++);
      }
      if (T.samples > 0 && _e(T) === false) {
        F.__webglMultisampledFramebuffer = n.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(n.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let ie = 0; ie < K.length; ie++) {
          const ve = K[ie];
          F.__webglColorRenderbuffer[ie] = n.createRenderbuffer(), n.bindRenderbuffer(n.RENDERBUFFER, F.__webglColorRenderbuffer[ie]);
          const xe = r.convert(ve.format, ve.colorSpace), ee = r.convert(ve.type), ce = E(ve.internalFormat, xe, ee, ve.colorSpace, T.isXRRenderTarget === true), we = ot(T);
          n.renderbufferStorageMultisample(n.RENDERBUFFER, we, ce, T.width, T.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ie, n.RENDERBUFFER, F.__webglColorRenderbuffer[ie]);
        }
        n.bindRenderbuffer(n.RENDERBUFFER, null), T.depthBuffer && (F.__webglDepthRenderbuffer = n.createRenderbuffer(), De(F.__webglDepthRenderbuffer, T, true)), t.bindFramebuffer(n.FRAMEBUFFER, null);
      }
    }
    if (G) {
      t.bindTexture(n.TEXTURE_CUBE_MAP, X.__webglTexture), ze(n.TEXTURE_CUBE_MAP, _);
      for (let ie = 0; ie < 6; ie++) if (_.mipmaps && _.mipmaps.length > 0) for (let ve = 0; ve < _.mipmaps.length; ve++) de(F.__webglFramebuffer[ie][ve], T, _, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + ie, ve);
      else de(F.__webglFramebuffer[ie], T, _, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + ie, 0);
      m(_) && p(n.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Me) {
      for (let ie = 0, ve = K.length; ie < ve; ie++) {
        const xe = K[ie], ee = i.get(xe);
        let ce = n.TEXTURE_2D;
        (T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (ce = T.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY), t.bindTexture(ce, ee.__webglTexture), ze(ce, xe), de(F.__webglFramebuffer, T, xe, n.COLOR_ATTACHMENT0 + ie, ce, 0), m(xe) && p(ce);
      }
      t.unbindTexture();
    } else {
      let ie = n.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (ie = T.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY), t.bindTexture(ie, X.__webglTexture), ze(ie, _), _.mipmaps && _.mipmaps.length > 0) for (let ve = 0; ve < _.mipmaps.length; ve++) de(F.__webglFramebuffer[ve], T, _, n.COLOR_ATTACHMENT0, ie, ve);
      else de(F.__webglFramebuffer, T, _, n.COLOR_ATTACHMENT0, ie, 0);
      m(_) && p(ie), t.unbindTexture();
    }
    T.depthBuffer && Ve(T);
  }
  function at(T) {
    const _ = T.textures;
    for (let F = 0, X = _.length; F < X; F++) {
      const K = _[F];
      if (m(K)) {
        const G = b(T), Me = i.get(K).__webglTexture;
        t.bindTexture(G, Me), p(G), t.unbindTexture();
      }
    }
  }
  const Le = [], Ce = [];
  function ge(T) {
    if (T.samples > 0) {
      if (_e(T) === false) {
        const _ = T.textures, F = T.width, X = T.height;
        let K = n.COLOR_BUFFER_BIT;
        const G = T.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, Me = i.get(T), ie = _.length > 1;
        if (ie) for (let xe = 0; xe < _.length; xe++) t.bindFramebuffer(n.FRAMEBUFFER, Me.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + xe, n.RENDERBUFFER, null), t.bindFramebuffer(n.FRAMEBUFFER, Me.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + xe, n.TEXTURE_2D, null, 0);
        t.bindFramebuffer(n.READ_FRAMEBUFFER, Me.__webglMultisampledFramebuffer);
        const ve = T.texture.mipmaps;
        ve && ve.length > 0 ? t.bindFramebuffer(n.DRAW_FRAMEBUFFER, Me.__webglFramebuffer[0]) : t.bindFramebuffer(n.DRAW_FRAMEBUFFER, Me.__webglFramebuffer);
        for (let xe = 0; xe < _.length; xe++) {
          if (T.resolveDepthBuffer && (T.depthBuffer && (K |= n.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (K |= n.STENCIL_BUFFER_BIT)), ie) {
            n.framebufferRenderbuffer(n.READ_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.RENDERBUFFER, Me.__webglColorRenderbuffer[xe]);
            const ee = i.get(_[xe]).__webglTexture;
            n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, ee, 0);
          }
          n.blitFramebuffer(0, 0, F, X, 0, 0, F, X, K, n.NEAREST), l === true && (Le.length = 0, Ce.length = 0, Le.push(n.COLOR_ATTACHMENT0 + xe), T.depthBuffer && T.resolveDepthBuffer === false && (Le.push(G), Ce.push(G), n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, Ce)), n.invalidateFramebuffer(n.READ_FRAMEBUFFER, Le));
        }
        if (t.bindFramebuffer(n.READ_FRAMEBUFFER, null), t.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), ie) for (let xe = 0; xe < _.length; xe++) {
          t.bindFramebuffer(n.FRAMEBUFFER, Me.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + xe, n.RENDERBUFFER, Me.__webglColorRenderbuffer[xe]);
          const ee = i.get(_[xe]).__webglTexture;
          t.bindFramebuffer(n.FRAMEBUFFER, Me.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + xe, n.TEXTURE_2D, ee, 0);
        }
        t.bindFramebuffer(n.DRAW_FRAMEBUFFER, Me.__webglMultisampledFramebuffer);
      } else if (T.depthBuffer && T.resolveDepthBuffer === false && l) {
        const _ = T.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
        n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function ot(T) {
    return Math.min(s.maxSamples, T.samples);
  }
  function _e(T) {
    const _ = i.get(T);
    return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && _.__useRenderToTexture !== false;
  }
  function Fe(T) {
    const _ = a.render.frame;
    h.get(T) !== _ && (h.set(T, _), T.update());
  }
  function Mt(T, _) {
    const F = T.colorSpace, X = T.format, K = T.type;
    return T.isCompressedTexture === true || T.isVideoTexture === true || F !== Nn && F !== ln && (Ye.getTransfer(F) === Qe ? (X !== sn || K !== gt) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), _;
  }
  function dt(T) {
    return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (c.width = T.naturalWidth || T.width, c.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (c.width = T.displayWidth, c.height = T.displayHeight) : (c.width = T.width, c.height = T.height), c;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = O, this.setTexture2D = Y, this.setTexture2DArray = W, this.setTexture3D = ne, this.setTextureCube = k, this.rebindTextures = wt, this.setupRenderTarget = A, this.updateRenderTargetMipmap = at, this.updateMultisampleRenderTarget = ge, this.setupDepthRenderbuffer = Ve, this.setupFrameBufferTexture = de, this.useMultisampledRTT = _e;
}
function Yg(n, e) {
  function t(i, s = ln) {
    let r;
    const a = Ye.getTransfer(s);
    if (i === gt) return n.UNSIGNED_BYTE;
    if (i === Za) return n.UNSIGNED_SHORT_4_4_4_4;
    if (i === Ka) return n.UNSIGNED_SHORT_5_5_5_1;
    if (i === Jl) return n.UNSIGNED_INT_5_9_9_9_REV;
    if (i === jl) return n.UNSIGNED_INT_10F_11F_11F_REV;
    if (i === Zl) return n.BYTE;
    if (i === Kl) return n.SHORT;
    if (i === ts) return n.UNSIGNED_SHORT;
    if (i === qa) return n.INT;
    if (i === In) return n.UNSIGNED_INT;
    if (i === cn) return n.FLOAT;
    if (i === cs) return n.HALF_FLOAT;
    if (i === $l) return n.ALPHA;
    if (i === Ql) return n.RGB;
    if (i === sn) return n.RGBA;
    if (i === ns) return n.DEPTH_COMPONENT;
    if (i === Li) return n.DEPTH_STENCIL;
    if (i === Ja) return n.RED;
    if (i === ja) return n.RED_INTEGER;
    if (i === ec) return n.RG;
    if (i === $a) return n.RG_INTEGER;
    if (i === Qa) return n.RGBA_INTEGER;
    if (i === Js || i === js || i === $s || i === Qs) if (a === Qe) if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (i === Js) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (i === js) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (i === $s) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (i === Qs) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (i === Js) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (i === js) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (i === $s) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (i === Qs) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (i === ua || i === fa || i === da || i === pa) if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (i === ua) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (i === fa) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (i === da) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (i === pa) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (i === ma || i === ga || i === _a) if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (i === ma || i === ga) return a === Qe ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (i === _a) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (i === va || i === xa || i === Sa || i === Ma || i === ya || i === Ea || i === Ta || i === ba || i === Aa || i === wa || i === Ra || i === Ca || i === Pa || i === Da) if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (i === va) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (i === xa) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (i === Sa) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (i === Ma) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (i === ya) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (i === Ea) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (i === Ta) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (i === ba) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (i === Aa) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (i === wa) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (i === Ra) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (i === Ca) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (i === Pa) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (i === Da) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (i === Ua || i === La || i === Ia) if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
      if (i === Ua) return a === Qe ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (i === La) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (i === Ia) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (i === Na || i === Fa || i === Oa || i === Ba) if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
      if (i === Na) return r.COMPRESSED_RED_RGTC1_EXT;
      if (i === Fa) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (i === Oa) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (i === Ba) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return i === Ui ? n.UNSIGNED_INT_24_8 : n[i] !== void 0 ? n[i] : null;
  }
  return { convert: t };
}
const qg = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Zg = `
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
class Kg {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      const i = new fc(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, i = new bt({ vertexShader: qg, fragmentShader: Zg, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new jt(new lr(20, 20), i);
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
class Jg extends fn {
  constructor(e, t) {
    super();
    const i = this;
    let s = null, r = 1, a = null, o = "local-floor", l = 1, c = null, h = null, u = null, f = null, d = null, g = null;
    const v = typeof XRWebGLBinding < "u", m = new Kg(), p = {}, b = t.getContextAttributes();
    let E = null, S = null;
    const P = [], w = [], U = new j();
    let N = null;
    const y = new Vt();
    y.viewport = new lt();
    const M = new Vt();
    M.viewport = new lt();
    const D = [y, M], O = new _f();
    let H = null, V = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(q) {
      let J = P[q];
      return J === void 0 && (J = new Ir(), P[q] = J), J.getTargetRaySpace();
    }, this.getControllerGrip = function(q) {
      let J = P[q];
      return J === void 0 && (J = new Ir(), P[q] = J), J.getGripSpace();
    }, this.getHand = function(q) {
      let J = P[q];
      return J === void 0 && (J = new Ir(), P[q] = J), J.getHandSpace();
    };
    function Y(q) {
      const J = w.indexOf(q.inputSource);
      if (J === -1) return;
      const de = P[J];
      de !== void 0 && (de.update(q.inputSource, q.frame, c || a), de.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function W() {
      s.removeEventListener("select", Y), s.removeEventListener("selectstart", Y), s.removeEventListener("selectend", Y), s.removeEventListener("squeeze", Y), s.removeEventListener("squeezestart", Y), s.removeEventListener("squeezeend", Y), s.removeEventListener("end", W), s.removeEventListener("inputsourceschange", ne);
      for (let q = 0; q < P.length; q++) {
        const J = w[q];
        J !== null && (w[q] = null, P[q].disconnect(J));
      }
      H = null, V = null, m.reset();
      for (const q in p) delete p[q];
      e.setRenderTarget(E), d = null, f = null, u = null, s = null, S = null, Ze.stop(), i.isPresenting = false, e.setPixelRatio(N), e.setSize(U.width, U.height, false), i.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(q) {
      r = q, i.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(q) {
      o = q, i.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(q) {
      c = q;
    }, this.getBaseLayer = function() {
      return f !== null ? f : d;
    }, this.getBinding = function() {
      return u === null && v && (u = new XRWebGLBinding(s, t)), u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(q) {
      if (s = q, s !== null) {
        if (E = e.getRenderTarget(), s.addEventListener("select", Y), s.addEventListener("selectstart", Y), s.addEventListener("selectend", Y), s.addEventListener("squeeze", Y), s.addEventListener("squeezestart", Y), s.addEventListener("squeezeend", Y), s.addEventListener("end", W), s.addEventListener("inputsourceschange", ne), b.xrCompatible !== true && await t.makeXRCompatible(), N = e.getPixelRatio(), e.getSize(U), v && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let de = null, De = null, ye = null;
          b.depth && (ye = b.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, de = b.stencil ? Li : ns, De = b.stencil ? Ui : In);
          const Ve = { colorFormat: t.RGBA8, depthFormat: ye, scaleFactor: r };
          u = this.getBinding(), f = u.createProjectionLayer(Ve), s.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, false), S = new Pt(f.textureWidth, f.textureHeight, { format: sn, type: gt, depthTexture: new ro(f.textureWidth, f.textureHeight, De, void 0, void 0, void 0, void 0, void 0, void 0, de), stencilBuffer: b.stencil, colorSpace: e.outputColorSpace, samples: b.antialias ? 4 : 0, resolveDepthBuffer: f.ignoreDepthValues === false, resolveStencilBuffer: f.ignoreDepthValues === false });
        } else {
          const de = { antialias: b.antialias, alpha: true, depth: b.depth, stencil: b.stencil, framebufferScaleFactor: r };
          d = new XRWebGLLayer(s, t, de), s.updateRenderState({ baseLayer: d }), e.setPixelRatio(1), e.setSize(d.framebufferWidth, d.framebufferHeight, false), S = new Pt(d.framebufferWidth, d.framebufferHeight, { format: sn, type: gt, colorSpace: e.outputColorSpace, stencilBuffer: b.stencil, resolveDepthBuffer: d.ignoreDepthValues === false, resolveStencilBuffer: d.ignoreDepthValues === false });
        }
        S.isXRRenderTarget = true, this.setFoveation(l), c = null, a = await s.requestReferenceSpace(o), Ze.setContext(s), Ze.start(), i.isPresenting = true, i.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null) return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return m.getDepthTexture();
    };
    function ne(q) {
      for (let J = 0; J < q.removed.length; J++) {
        const de = q.removed[J], De = w.indexOf(de);
        De >= 0 && (w[De] = null, P[De].disconnect(de));
      }
      for (let J = 0; J < q.added.length; J++) {
        const de = q.added[J];
        let De = w.indexOf(de);
        if (De === -1) {
          for (let Ve = 0; Ve < P.length; Ve++) if (Ve >= w.length) {
            w.push(de), De = Ve;
            break;
          } else if (w[Ve] === null) {
            w[Ve] = de, De = Ve;
            break;
          }
          if (De === -1) break;
        }
        const ye = P[De];
        ye && ye.connect(de);
      }
    }
    const k = new R(), ae = new R();
    function he(q, J, de) {
      k.setFromMatrixPosition(J.matrixWorld), ae.setFromMatrixPosition(de.matrixWorld);
      const De = k.distanceTo(ae), ye = J.projectionMatrix.elements, Ve = de.projectionMatrix.elements, wt = ye[14] / (ye[10] - 1), A = ye[14] / (ye[10] + 1), at = (ye[9] + 1) / ye[5], Le = (ye[9] - 1) / ye[5], Ce = (ye[8] - 1) / ye[0], ge = (Ve[8] + 1) / Ve[0], ot = wt * Ce, _e = wt * ge, Fe = De / (-Ce + ge), Mt = Fe * -Ce;
      if (J.matrixWorld.decompose(q.position, q.quaternion, q.scale), q.translateX(Mt), q.translateZ(Fe), q.matrixWorld.compose(q.position, q.quaternion, q.scale), q.matrixWorldInverse.copy(q.matrixWorld).invert(), ye[10] === -1) q.projectionMatrix.copy(J.projectionMatrix), q.projectionMatrixInverse.copy(J.projectionMatrixInverse);
      else {
        const dt = wt + Fe, T = A + Fe, _ = ot - Mt, F = _e + (De - Mt), X = at * A / T * dt, K = Le * A / T * dt;
        q.projectionMatrix.makePerspective(_, F, X, K, dt, T), q.projectionMatrixInverse.copy(q.projectionMatrix).invert();
      }
    }
    function Ee(q, J) {
      J === null ? q.matrixWorld.copy(q.matrix) : q.matrixWorld.multiplyMatrices(J.matrixWorld, q.matrix), q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function(q) {
      if (s === null) return;
      let J = q.near, de = q.far;
      m.texture !== null && (m.depthNear > 0 && (J = m.depthNear), m.depthFar > 0 && (de = m.depthFar)), O.near = M.near = y.near = J, O.far = M.far = y.far = de, (H !== O.near || V !== O.far) && (s.updateRenderState({ depthNear: O.near, depthFar: O.far }), H = O.near, V = O.far), O.layers.mask = q.layers.mask | 6, y.layers.mask = O.layers.mask & 3, M.layers.mask = O.layers.mask & 5;
      const De = q.parent, ye = O.cameras;
      Ee(O, De);
      for (let Ve = 0; Ve < ye.length; Ve++) Ee(ye[Ve], De);
      ye.length === 2 ? he(O, y, M) : O.projectionMatrix.copy(y.projectionMatrix), ze(q, O, De);
    };
    function ze(q, J, de) {
      de === null ? q.matrix.copy(J.matrixWorld) : (q.matrix.copy(de.matrixWorld), q.matrix.invert(), q.matrix.multiply(J.matrixWorld)), q.matrix.decompose(q.position, q.quaternion, q.scale), q.updateMatrixWorld(true), q.projectionMatrix.copy(J.projectionMatrix), q.projectionMatrixInverse.copy(J.projectionMatrixInverse), q.isPerspectiveCamera && (q.fov = is * 2 * Math.atan(1 / q.projectionMatrix.elements[5]), q.zoom = 1);
    }
    this.getCamera = function() {
      return O;
    }, this.getFoveation = function() {
      if (!(f === null && d === null)) return l;
    }, this.setFoveation = function(q) {
      l = q, f !== null && (f.fixedFoveation = q), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = q);
    }, this.hasDepthSensing = function() {
      return m.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return m.getMesh(O);
    }, this.getCameraTexture = function(q) {
      return p[q];
    };
    let nt = null;
    function rt(q, J) {
      if (h = J.getViewerPose(c || a), g = J, h !== null) {
        const de = h.views;
        d !== null && (e.setRenderTargetFramebuffer(S, d.framebuffer), e.setRenderTarget(S));
        let De = false;
        de.length !== O.cameras.length && (O.cameras.length = 0, De = true);
        for (let A = 0; A < de.length; A++) {
          const at = de[A];
          let Le = null;
          if (d !== null) Le = d.getViewport(at);
          else {
            const ge = u.getViewSubImage(f, at);
            Le = ge.viewport, A === 0 && (e.setRenderTargetTextures(S, ge.colorTexture, ge.depthStencilTexture), e.setRenderTarget(S));
          }
          let Ce = D[A];
          Ce === void 0 && (Ce = new Vt(), Ce.layers.enable(A), Ce.viewport = new lt(), D[A] = Ce), Ce.matrix.fromArray(at.transform.matrix), Ce.matrix.decompose(Ce.position, Ce.quaternion, Ce.scale), Ce.projectionMatrix.fromArray(at.projectionMatrix), Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(), Ce.viewport.set(Le.x, Le.y, Le.width, Le.height), A === 0 && (O.matrix.copy(Ce.matrix), O.matrix.decompose(O.position, O.quaternion, O.scale)), De === true && O.cameras.push(Ce);
        }
        const ye = s.enabledFeatures;
        if (ye && ye.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && v) {
          u = i.getBinding();
          const A = u.getDepthInformation(de[0]);
          A && A.isValid && A.texture && m.init(A, s.renderState);
        }
        if (ye && ye.includes("camera-access") && v) {
          e.state.unbindTexture(), u = i.getBinding();
          for (let A = 0; A < de.length; A++) {
            const at = de[A].camera;
            if (at) {
              let Le = p[at];
              Le || (Le = new fc(), p[at] = Le);
              const Ce = u.getCameraImage(at);
              Le.sourceTexture = Ce;
            }
          }
        }
      }
      for (let de = 0; de < P.length; de++) {
        const De = w[de], ye = P[de];
        De !== null && ye !== void 0 && ye.update(De, J, c || a);
      }
      nt && nt(q, J), J.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: J }), g = null;
    }
    const Ze = new wc();
    Ze.setAnimationLoop(rt), this.setAnimationLoop = function(q) {
      nt = q;
    }, this.dispose = function() {
    };
  }
}
const Vn = new rn(), jg = new je();
function $g(n, e) {
  function t(m, p) {
    m.matrixAutoUpdate === true && m.updateMatrix(), p.value.copy(m.matrix);
  }
  function i(m, p) {
    p.color.getRGB(m.fogColor.value, cc(n)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function s(m, p, b, E, S) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(m, p) : p.isMeshToonMaterial ? (r(m, p), u(m, p)) : p.isMeshPhongMaterial ? (r(m, p), h(m, p)) : p.isMeshStandardMaterial ? (r(m, p), f(m, p), p.isMeshPhysicalMaterial && d(m, p, S)) : p.isMeshMatcapMaterial ? (r(m, p), g(m, p)) : p.isMeshDepthMaterial ? r(m, p) : p.isMeshDistanceMaterial ? (r(m, p), v(m, p)) : p.isMeshNormalMaterial ? r(m, p) : p.isLineBasicMaterial ? (a(m, p), p.isLineDashedMaterial && o(m, p)) : p.isPointsMaterial ? l(m, p, b, E) : p.isSpriteMaterial ? c(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = false);
  }
  function r(m, p) {
    m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, t(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === Et && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, t(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === Et && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, t(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, t(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const b = e.get(p), E = b.envMap, S = b.envMapRotation;
    E && (m.envMap.value = E, Vn.copy(S), Vn.x *= -1, Vn.y *= -1, Vn.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === false && (Vn.y *= -1, Vn.z *= -1), m.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(Vn)), m.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === false ? -1 : 1, m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap && (m.lightMap.value = p.lightMap, m.lightMapIntensity.value = p.lightMapIntensity, t(p.lightMap, m.lightMapTransform)), p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, m.aoMapTransform));
  }
  function a(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, p.map && (m.map.value = p.map, t(p.map, m.mapTransform));
  }
  function o(m, p) {
    m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale;
  }
  function l(m, p, b, E) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * b, m.scale.value = E * 0.5, p.map && (m.map.value = p.map, t(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function c(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map, t(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, t(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function h(m, p) {
    m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function f(m, p) {
    m.metalness.value = p.metalness, p.metalnessMap && (m.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, m.metalnessMapTransform)), m.roughness.value = p.roughness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, m.roughnessMapTransform)), p.envMap && (m.envMapIntensity.value = p.envMapIntensity);
  }
  function d(m, p, b) {
    m.ior.value = p.ior, p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === Et && m.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (m.dispersion.value = p.dispersion), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = b.texture, m.transmissionSamplerSize.value.set(b.width, b.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function v(m, p) {
    const b = e.get(p).light;
    m.referencePosition.value.setFromMatrixPosition(b.matrixWorld), m.nearDistance.value = b.shadow.camera.near, m.farDistance.value = b.shadow.camera.far;
  }
  return { refreshFogUniforms: i, refreshMaterialUniforms: s };
}
function Qg(n, e, t, i) {
  let s = {}, r = {}, a = [];
  const o = n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(b, E) {
    const S = E.program;
    i.uniformBlockBinding(b, S);
  }
  function c(b, E) {
    let S = s[b.id];
    S === void 0 && (g(b), S = h(b), s[b.id] = S, b.addEventListener("dispose", m));
    const P = E.program;
    i.updateUBOMapping(b, P);
    const w = e.render.frame;
    r[b.id] !== w && (f(b), r[b.id] = w);
  }
  function h(b) {
    const E = u();
    b.__bindingPointIndex = E;
    const S = n.createBuffer(), P = b.__size, w = b.usage;
    return n.bindBuffer(n.UNIFORM_BUFFER, S), n.bufferData(n.UNIFORM_BUFFER, P, w), n.bindBuffer(n.UNIFORM_BUFFER, null), n.bindBufferBase(n.UNIFORM_BUFFER, E, S), S;
  }
  function u() {
    for (let b = 0; b < o; b++) if (a.indexOf(b) === -1) return a.push(b), b;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(b) {
    const E = s[b.id], S = b.uniforms, P = b.__cache;
    n.bindBuffer(n.UNIFORM_BUFFER, E);
    for (let w = 0, U = S.length; w < U; w++) {
      const N = Array.isArray(S[w]) ? S[w] : [S[w]];
      for (let y = 0, M = N.length; y < M; y++) {
        const D = N[y];
        if (d(D, w, y, P) === true) {
          const O = D.__offset, H = Array.isArray(D.value) ? D.value : [D.value];
          let V = 0;
          for (let Y = 0; Y < H.length; Y++) {
            const W = H[Y], ne = v(W);
            typeof W == "number" || typeof W == "boolean" ? (D.__data[0] = W, n.bufferSubData(n.UNIFORM_BUFFER, O + V, D.__data)) : W.isMatrix3 ? (D.__data[0] = W.elements[0], D.__data[1] = W.elements[1], D.__data[2] = W.elements[2], D.__data[3] = 0, D.__data[4] = W.elements[3], D.__data[5] = W.elements[4], D.__data[6] = W.elements[5], D.__data[7] = 0, D.__data[8] = W.elements[6], D.__data[9] = W.elements[7], D.__data[10] = W.elements[8], D.__data[11] = 0) : (W.toArray(D.__data, V), V += ne.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          n.bufferSubData(n.UNIFORM_BUFFER, O, D.__data);
        }
      }
    }
    n.bindBuffer(n.UNIFORM_BUFFER, null);
  }
  function d(b, E, S, P) {
    const w = b.value, U = E + "_" + S;
    if (P[U] === void 0) return typeof w == "number" || typeof w == "boolean" ? P[U] = w : P[U] = w.clone(), true;
    {
      const N = P[U];
      if (typeof w == "number" || typeof w == "boolean") {
        if (N !== w) return P[U] = w, true;
      } else if (N.equals(w) === false) return N.copy(w), true;
    }
    return false;
  }
  function g(b) {
    const E = b.uniforms;
    let S = 0;
    const P = 16;
    for (let U = 0, N = E.length; U < N; U++) {
      const y = Array.isArray(E[U]) ? E[U] : [E[U]];
      for (let M = 0, D = y.length; M < D; M++) {
        const O = y[M], H = Array.isArray(O.value) ? O.value : [O.value];
        for (let V = 0, Y = H.length; V < Y; V++) {
          const W = H[V], ne = v(W), k = S % P, ae = k % ne.boundary, he = k + ae;
          S += ae, he !== 0 && P - he < ne.storage && (S += P - he), O.__data = new Float32Array(ne.storage / Float32Array.BYTES_PER_ELEMENT), O.__offset = S, S += ne.storage;
        }
      }
    }
    const w = S % P;
    return w > 0 && (S += P - w), b.__size = S, b.__cache = {}, this;
  }
  function v(b) {
    const E = { boundary: 0, storage: 0 };
    return typeof b == "number" || typeof b == "boolean" ? (E.boundary = 4, E.storage = 4) : b.isVector2 ? (E.boundary = 8, E.storage = 8) : b.isVector3 || b.isColor ? (E.boundary = 16, E.storage = 12) : b.isVector4 ? (E.boundary = 16, E.storage = 16) : b.isMatrix3 ? (E.boundary = 48, E.storage = 48) : b.isMatrix4 ? (E.boundary = 64, E.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), E;
  }
  function m(b) {
    const E = b.target;
    E.removeEventListener("dispose", m);
    const S = a.indexOf(E.__bindingPointIndex);
    a.splice(S, 1), n.deleteBuffer(s[E.id]), delete s[E.id], delete r[E.id];
  }
  function p() {
    for (const b in s) n.deleteBuffer(s[b]);
    a = [], s = {}, r = {};
  }
  return { bind: l, update: c, dispose: p };
}
class Vv {
  constructor(e = {}) {
    const { canvas: t = Zh(), context: i = null, depth: s = true, stencil: r = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false, reversedDepthBuffer: f = false } = e;
    this.isWebGLRenderer = true;
    let d;
    if (i !== null) {
      if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      d = i.getContextAttributes().alpha;
    } else d = a;
    const g = new Uint32Array(4), v = new Int32Array(4);
    let m = null, p = null;
    const b = [], E = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = Un, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const S = this;
    let P = false;
    this._outputColorSpace = We;
    let w = 0, U = 0, N = null, y = -1, M = null;
    const D = new lt(), O = new lt();
    let H = null;
    const V = new Ge(0);
    let Y = 0, W = t.width, ne = t.height, k = 1, ae = null, he = null;
    const Ee = new lt(0, 0, W, ne), ze = new lt(0, 0, W, ne);
    let nt = false;
    const rt = new so();
    let Ze = false, q = false;
    const J = new je(), de = new R(), De = new lt(), ye = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let Ve = false;
    function wt() {
      return N === null ? k : 1;
    }
    let A = i;
    function at(x, L) {
      return t.getContext(x, L);
    }
    try {
      const x = { alpha: true, depth: s, stencil: r, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r180"), t.addEventListener("webglcontextlost", se, false), t.addEventListener("webglcontextrestored", fe, false), t.addEventListener("webglcontextcreationerror", $, false), A === null) {
        const L = "webgl2";
        if (A = at(L, x), A === null) throw at(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let Le, Ce, ge, ot, _e, Fe, Mt, dt, T, _, F, X, K, G, Me, ie, ve, xe, ee, ce, we, Se, oe, Ie;
    function C() {
      Le = new hm(A), Le.init(), Se = new Yg(A, Le), Ce = new im(A, Le, e, Se), ge = new Wg(A, Le), Ce.reversedDepthBuffer && f && ge.buffers.depth.setReversed(true), ot = new dm(A), _e = new Dg(), Fe = new Xg(A, Le, ge, _e, Ce, Se, ot), Mt = new rm(S), dt = new cm(S), T = new xf(A), oe = new tm(A, T), _ = new um(A, T, ot, oe), F = new mm(A, _, T, ot), ee = new pm(A, Ce, Fe), ie = new sm(_e), X = new Pg(S, Mt, dt, Le, Ce, oe, ie), K = new $g(S, _e), G = new Lg(), Me = new zg(Le), xe = new em(S, Mt, dt, ge, F, d, l), ve = new Gg(S, F, Ce), Ie = new Qg(A, ot, Ce, ge), ce = new nm(A, Le, ot), we = new fm(A, Le, ot), ot.programs = X.programs, S.capabilities = Ce, S.extensions = Le, S.properties = _e, S.renderLists = G, S.shadowMap = ve, S.state = ge, S.info = ot;
    }
    C();
    const te = new Jg(S, A);
    this.xr = te, this.getContext = function() {
      return A;
    }, this.getContextAttributes = function() {
      return A.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = Le.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = Le.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return k;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (k = x, this.setSize(W, ne, false));
    }, this.getSize = function(x) {
      return x.set(W, ne);
    }, this.setSize = function(x, L, B = true) {
      if (te.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      W = x, ne = L, t.width = Math.floor(x * k), t.height = Math.floor(L * k), B === true && (t.style.width = x + "px", t.style.height = L + "px"), this.setViewport(0, 0, x, L);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(W * k, ne * k).floor();
    }, this.setDrawingBufferSize = function(x, L, B) {
      W = x, ne = L, k = B, t.width = Math.floor(x * B), t.height = Math.floor(L * B), this.setViewport(0, 0, x, L);
    }, this.getCurrentViewport = function(x) {
      return x.copy(D);
    }, this.getViewport = function(x) {
      return x.copy(Ee);
    }, this.setViewport = function(x, L, B, z) {
      x.isVector4 ? Ee.set(x.x, x.y, x.z, x.w) : Ee.set(x, L, B, z), ge.viewport(D.copy(Ee).multiplyScalar(k).round());
    }, this.getScissor = function(x) {
      return x.copy(ze);
    }, this.setScissor = function(x, L, B, z) {
      x.isVector4 ? ze.set(x.x, x.y, x.z, x.w) : ze.set(x, L, B, z), ge.scissor(O.copy(ze).multiplyScalar(k).round());
    }, this.getScissorTest = function() {
      return nt;
    }, this.setScissorTest = function(x) {
      ge.setScissorTest(nt = x);
    }, this.setOpaqueSort = function(x) {
      ae = x;
    }, this.setTransparentSort = function(x) {
      he = x;
    }, this.getClearColor = function(x) {
      return x.copy(xe.getClearColor());
    }, this.setClearColor = function() {
      xe.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return xe.getClearAlpha();
    }, this.setClearAlpha = function() {
      xe.setClearAlpha(...arguments);
    }, this.clear = function(x = true, L = true, B = true) {
      let z = 0;
      if (x) {
        let I = false;
        if (N !== null) {
          const Q = N.texture.format;
          I = Q === Qa || Q === $a || Q === ja;
        }
        if (I) {
          const Q = N.texture.type, le = Q === gt || Q === In || Q === ts || Q === Ui || Q === Za || Q === Ka, pe = xe.getClearColor(), ue = xe.getClearAlpha(), Ae = pe.r, Pe = pe.g, Te = pe.b;
          le ? (g[0] = Ae, g[1] = Pe, g[2] = Te, g[3] = ue, A.clearBufferuiv(A.COLOR, 0, g)) : (v[0] = Ae, v[1] = Pe, v[2] = Te, v[3] = ue, A.clearBufferiv(A.COLOR, 0, v));
        } else z |= A.COLOR_BUFFER_BIT;
      }
      L && (z |= A.DEPTH_BUFFER_BIT), B && (z |= A.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), A.clear(z);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", se, false), t.removeEventListener("webglcontextrestored", fe, false), t.removeEventListener("webglcontextcreationerror", $, false), xe.dispose(), G.dispose(), Me.dispose(), _e.dispose(), Mt.dispose(), dt.dispose(), F.dispose(), oe.dispose(), Ie.dispose(), X.dispose(), te.dispose(), te.removeEventListener("sessionstart", an), te.removeEventListener("sessionend", fo), Fn.stop();
    };
    function se(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), P = true;
    }
    function fe() {
      console.log("THREE.WebGLRenderer: Context Restored."), P = false;
      const x = ot.autoReset, L = ve.enabled, B = ve.autoUpdate, z = ve.needsUpdate, I = ve.type;
      C(), ot.autoReset = x, ve.enabled = L, ve.autoUpdate = B, ve.needsUpdate = z, ve.type = I;
    }
    function $(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function Z(x) {
      const L = x.target;
      L.removeEventListener("dispose", Z), me(L);
    }
    function me(x) {
      Ue(x), _e.remove(x);
    }
    function Ue(x) {
      const L = _e.get(x).programs;
      L !== void 0 && (L.forEach(function(B) {
        X.releaseProgram(B);
      }), x.isShaderMaterial && X.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, L, B, z, I, Q) {
      L === null && (L = ye);
      const le = I.isMesh && I.matrixWorld.determinant() < 0, pe = zc(x, L, B, z, I);
      ge.setMaterial(z, le);
      let ue = B.index, Ae = 1;
      if (z.wireframe === true) {
        if (ue = _.getWireframeAttribute(B), ue === void 0) return;
        Ae = 2;
      }
      const Pe = B.drawRange, Te = B.attributes.position;
      let He = Pe.start * Ae, $e = (Pe.start + Pe.count) * Ae;
      Q !== null && (He = Math.max(He, Q.start * Ae), $e = Math.min($e, (Q.start + Q.count) * Ae)), ue !== null ? (He = Math.max(He, 0), $e = Math.min($e, ue.count)) : Te != null && (He = Math.max(He, 0), $e = Math.min($e, Te.count));
      const ft = $e - He;
      if (ft < 0 || ft === 1 / 0) return;
      oe.setup(I, z, pe, B, ue);
      let st, tt = ce;
      if (ue !== null && (st = T.get(ue), tt = we, tt.setIndex(st)), I.isMesh) z.wireframe === true ? (ge.setLineWidth(z.wireframeLinewidth * wt()), tt.setMode(A.LINES)) : tt.setMode(A.TRIANGLES);
      else if (I.isLine) {
        let be = z.linewidth;
        be === void 0 && (be = 1), ge.setLineWidth(be * wt()), I.isLineSegments ? tt.setMode(A.LINES) : I.isLineLoop ? tt.setMode(A.LINE_LOOP) : tt.setMode(A.LINE_STRIP);
      } else I.isPoints ? tt.setMode(A.POINTS) : I.isSprite && tt.setMode(A.TRIANGLES);
      if (I.isBatchedMesh) if (I._multiDrawInstances !== null) rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), tt.renderMultiDrawInstances(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount, I._multiDrawInstances);
      else if (Le.get("WEBGL_multi_draw")) tt.renderMultiDraw(I._multiDrawStarts, I._multiDrawCounts, I._multiDrawCount);
      else {
        const be = I._multiDrawStarts, ct = I._multiDrawCounts, Xe = I._multiDrawCount, zt = ue ? T.get(ue).bytesPerElement : 1, ei = _e.get(z).currentProgram.getUniforms();
        for (let Ht = 0; Ht < Xe; Ht++) ei.setValue(A, "_gl_DrawID", Ht), tt.render(be[Ht] / zt, ct[Ht]);
      }
      else if (I.isInstancedMesh) tt.renderInstances(He, ft, I.count);
      else if (B.isInstancedBufferGeometry) {
        const be = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0, ct = Math.min(B.instanceCount, be);
        tt.renderInstances(He, ft, ct);
      } else tt.render(He, ft);
    };
    function it(x, L, B) {
      x.transparent === true && x.side === Wt && x.forceSinglePass === false ? (x.side = Et, x.needsUpdate = true, ps(x, L, B), x.side = En, x.needsUpdate = true, ps(x, L, B), x.side = Wt) : ps(x, L, B);
    }
    this.compile = function(x, L, B = null) {
      B === null && (B = x), p = Me.get(B), p.init(L), E.push(p), B.traverseVisible(function(I) {
        I.isLight && I.layers.test(L.layers) && (p.pushLight(I), I.castShadow && p.pushShadow(I));
      }), x !== B && x.traverseVisible(function(I) {
        I.isLight && I.layers.test(L.layers) && (p.pushLight(I), I.castShadow && p.pushShadow(I));
      }), p.setupLights();
      const z = /* @__PURE__ */ new Set();
      return x.traverse(function(I) {
        if (!(I.isMesh || I.isPoints || I.isLine || I.isSprite)) return;
        const Q = I.material;
        if (Q) if (Array.isArray(Q)) for (let le = 0; le < Q.length; le++) {
          const pe = Q[le];
          it(pe, B, I), z.add(pe);
        }
        else it(Q, B, I), z.add(Q);
      }), p = E.pop(), z;
    }, this.compileAsync = function(x, L, B = null) {
      const z = this.compile(x, L, B);
      return new Promise((I) => {
        function Q() {
          if (z.forEach(function(le) {
            _e.get(le).currentProgram.isReady() && z.delete(le);
          }), z.size === 0) {
            I(x);
            return;
          }
          setTimeout(Q, 10);
        }
        Le.get("KHR_parallel_shader_compile") !== null ? Q() : setTimeout(Q, 10);
      });
    };
    let Ke = null;
    function mn(x) {
      Ke && Ke(x);
    }
    function an() {
      Fn.stop();
    }
    function fo() {
      Fn.start();
    }
    const Fn = new wc();
    Fn.setAnimationLoop(mn), typeof self < "u" && Fn.setContext(self), this.setAnimationLoop = function(x) {
      Ke = x, te.setAnimationLoop(x), x === null ? Fn.stop() : Fn.start();
    }, te.addEventListener("sessionstart", an), te.addEventListener("sessionend", fo), this.render = function(x, L) {
      if (L !== void 0 && L.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (P === true) return;
      if (x.matrixWorldAutoUpdate === true && x.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === true && L.updateMatrixWorld(), te.enabled === true && te.isPresenting === true && (te.cameraAutoUpdate === true && te.updateCamera(L), L = te.getCamera()), x.isScene === true && x.onBeforeRender(S, x, L, N), p = Me.get(x, E.length), p.init(L), E.push(p), J.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), rt.setFromProjectionMatrix(J, hn, L.reversedDepth), q = this.localClippingEnabled, Ze = ie.init(this.clippingPlanes, q), m = G.get(x, b.length), m.init(), b.push(m), te.enabled === true && te.isPresenting === true) {
        const Q = S.xr.getDepthSensingMesh();
        Q !== null && ur(Q, L, -1 / 0, S.sortObjects);
      }
      ur(x, L, 0, S.sortObjects), m.finish(), S.sortObjects === true && m.sort(ae, he), Ve = te.enabled === false || te.isPresenting === false || te.hasDepthSensing() === false, Ve && xe.addToRenderList(m, x), this.info.render.frame++, Ze === true && ie.beginShadows();
      const B = p.state.shadowsArray;
      ve.render(B, x, L), Ze === true && ie.endShadows(), this.info.autoReset === true && this.info.reset();
      const z = m.opaque, I = m.transmissive;
      if (p.setupLights(), L.isArrayCamera) {
        const Q = L.cameras;
        if (I.length > 0) for (let le = 0, pe = Q.length; le < pe; le++) {
          const ue = Q[le];
          mo(z, I, x, ue);
        }
        Ve && xe.render(x);
        for (let le = 0, pe = Q.length; le < pe; le++) {
          const ue = Q[le];
          po(m, x, ue, ue.viewport);
        }
      } else I.length > 0 && mo(z, I, x, L), Ve && xe.render(x), po(m, x, L);
      N !== null && U === 0 && (Fe.updateMultisampleRenderTarget(N), Fe.updateRenderTargetMipmap(N)), x.isScene === true && x.onAfterRender(S, x, L), oe.resetDefaultState(), y = -1, M = null, E.pop(), E.length > 0 ? (p = E[E.length - 1], Ze === true && ie.setGlobalState(S.clippingPlanes, p.state.camera)) : p = null, b.pop(), b.length > 0 ? m = b[b.length - 1] : m = null;
    };
    function ur(x, L, B, z) {
      if (x.visible === false) return;
      if (x.layers.test(L.layers)) {
        if (x.isGroup) B = x.renderOrder;
        else if (x.isLOD) x.autoUpdate === true && x.update(L);
        else if (x.isLight) p.pushLight(x), x.castShadow && p.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || rt.intersectsSprite(x)) {
            z && De.setFromMatrixPosition(x.matrixWorld).applyMatrix4(J);
            const le = F.update(x), pe = x.material;
            pe.visible && m.push(x, le, pe, B, De.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || rt.intersectsObject(x))) {
          const le = F.update(x), pe = x.material;
          if (z && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), De.copy(x.boundingSphere.center)) : (le.boundingSphere === null && le.computeBoundingSphere(), De.copy(le.boundingSphere.center)), De.applyMatrix4(x.matrixWorld).applyMatrix4(J)), Array.isArray(pe)) {
            const ue = le.groups;
            for (let Ae = 0, Pe = ue.length; Ae < Pe; Ae++) {
              const Te = ue[Ae], He = pe[Te.materialIndex];
              He && He.visible && m.push(x, le, He, B, De.z, Te);
            }
          } else pe.visible && m.push(x, le, pe, B, De.z, null);
        }
      }
      const Q = x.children;
      for (let le = 0, pe = Q.length; le < pe; le++) ur(Q[le], L, B, z);
    }
    function po(x, L, B, z) {
      const I = x.opaque, Q = x.transmissive, le = x.transparent;
      p.setupLightsView(B), Ze === true && ie.setGlobalState(S.clippingPlanes, B), z && ge.viewport(D.copy(z)), I.length > 0 && ds(I, L, B), Q.length > 0 && ds(Q, L, B), le.length > 0 && ds(le, L, B), ge.buffers.depth.setTest(true), ge.buffers.depth.setMask(true), ge.buffers.color.setMask(true), ge.setPolygonOffset(false);
    }
    function mo(x, L, B, z) {
      if ((B.isScene === true ? B.overrideMaterial : null) !== null) return;
      p.state.transmissionRenderTarget[z.id] === void 0 && (p.state.transmissionRenderTarget[z.id] = new Pt(1, 1, { generateMipmaps: true, type: Le.has("EXT_color_buffer_half_float") || Le.has("EXT_color_buffer_float") ? cs : gt, minFilter: Zn, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Ye.workingColorSpace }));
      const Q = p.state.transmissionRenderTarget[z.id], le = z.viewport || D;
      Q.setSize(le.z * S.transmissionResolutionScale, le.w * S.transmissionResolutionScale);
      const pe = S.getRenderTarget(), ue = S.getActiveCubeFace(), Ae = S.getActiveMipmapLevel();
      S.setRenderTarget(Q), S.getClearColor(V), Y = S.getClearAlpha(), Y < 1 && S.setClearColor(16777215, 0.5), S.clear(), Ve && xe.render(B);
      const Pe = S.toneMapping;
      S.toneMapping = Un;
      const Te = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), p.setupLightsView(z), Ze === true && ie.setGlobalState(S.clippingPlanes, z), ds(x, B, z), Fe.updateMultisampleRenderTarget(Q), Fe.updateRenderTargetMipmap(Q), Le.has("WEBGL_multisampled_render_to_texture") === false) {
        let He = false;
        for (let $e = 0, ft = L.length; $e < ft; $e++) {
          const st = L[$e], tt = st.object, be = st.geometry, ct = st.material, Xe = st.group;
          if (ct.side === Wt && tt.layers.test(z.layers)) {
            const zt = ct.side;
            ct.side = Et, ct.needsUpdate = true, go(tt, B, z, be, ct, Xe), ct.side = zt, ct.needsUpdate = true, He = true;
          }
        }
        He === true && (Fe.updateMultisampleRenderTarget(Q), Fe.updateRenderTargetMipmap(Q));
      }
      S.setRenderTarget(pe, ue, Ae), S.setClearColor(V, Y), Te !== void 0 && (z.viewport = Te), S.toneMapping = Pe;
    }
    function ds(x, L, B) {
      const z = L.isScene === true ? L.overrideMaterial : null;
      for (let I = 0, Q = x.length; I < Q; I++) {
        const le = x[I], pe = le.object, ue = le.geometry, Ae = le.group;
        let Pe = le.material;
        Pe.allowOverride === true && z !== null && (Pe = z), pe.layers.test(B.layers) && go(pe, L, B, ue, Pe, Ae);
      }
    }
    function go(x, L, B, z, I, Q) {
      x.onBeforeRender(S, L, B, z, I, Q), x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), I.onBeforeRender(S, L, B, z, x, Q), I.transparent === true && I.side === Wt && I.forceSinglePass === false ? (I.side = Et, I.needsUpdate = true, S.renderBufferDirect(B, L, z, I, x, Q), I.side = En, I.needsUpdate = true, S.renderBufferDirect(B, L, z, I, x, Q), I.side = Wt) : S.renderBufferDirect(B, L, z, I, x, Q), x.onAfterRender(S, L, B, z, I, Q);
    }
    function ps(x, L, B) {
      L.isScene !== true && (L = ye);
      const z = _e.get(x), I = p.state.lights, Q = p.state.shadowsArray, le = I.state.version, pe = X.getParameters(x, I.state, Q, L, B), ue = X.getProgramCacheKey(pe);
      let Ae = z.programs;
      z.environment = x.isMeshStandardMaterial ? L.environment : null, z.fog = L.fog, z.envMap = (x.isMeshStandardMaterial ? dt : Mt).get(x.envMap || z.environment), z.envMapRotation = z.environment !== null && x.envMap === null ? L.environmentRotation : x.envMapRotation, Ae === void 0 && (x.addEventListener("dispose", Z), Ae = /* @__PURE__ */ new Map(), z.programs = Ae);
      let Pe = Ae.get(ue);
      if (Pe !== void 0) {
        if (z.currentProgram === Pe && z.lightsStateVersion === le) return vo(x, pe), Pe;
      } else pe.uniforms = X.getUniforms(x), x.onBeforeCompile(pe, S), Pe = X.acquireProgram(pe, ue), Ae.set(ue, Pe), z.uniforms = pe.uniforms;
      const Te = z.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === true) && (Te.clippingPlanes = ie.uniform), vo(x, pe), z.needsLights = kc(x), z.lightsStateVersion = le, z.needsLights && (Te.ambientLightColor.value = I.state.ambient, Te.lightProbe.value = I.state.probe, Te.directionalLights.value = I.state.directional, Te.directionalLightShadows.value = I.state.directionalShadow, Te.spotLights.value = I.state.spot, Te.spotLightShadows.value = I.state.spotShadow, Te.rectAreaLights.value = I.state.rectArea, Te.ltc_1.value = I.state.rectAreaLTC1, Te.ltc_2.value = I.state.rectAreaLTC2, Te.pointLights.value = I.state.point, Te.pointLightShadows.value = I.state.pointShadow, Te.hemisphereLights.value = I.state.hemi, Te.directionalShadowMap.value = I.state.directionalShadowMap, Te.directionalShadowMatrix.value = I.state.directionalShadowMatrix, Te.spotShadowMap.value = I.state.spotShadowMap, Te.spotLightMatrix.value = I.state.spotLightMatrix, Te.spotLightMap.value = I.state.spotLightMap, Te.pointShadowMap.value = I.state.pointShadowMap, Te.pointShadowMatrix.value = I.state.pointShadowMatrix), z.currentProgram = Pe, z.uniformsList = null, Pe;
    }
    function _o(x) {
      if (x.uniformsList === null) {
        const L = x.currentProgram.getUniforms();
        x.uniformsList = er.seqWithValue(L.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function vo(x, L) {
      const B = _e.get(x);
      B.outputColorSpace = L.outputColorSpace, B.batching = L.batching, B.batchingColor = L.batchingColor, B.instancing = L.instancing, B.instancingColor = L.instancingColor, B.instancingMorph = L.instancingMorph, B.skinning = L.skinning, B.morphTargets = L.morphTargets, B.morphNormals = L.morphNormals, B.morphColors = L.morphColors, B.morphTargetsCount = L.morphTargetsCount, B.numClippingPlanes = L.numClippingPlanes, B.numIntersection = L.numClipIntersection, B.vertexAlphas = L.vertexAlphas, B.vertexTangents = L.vertexTangents, B.toneMapping = L.toneMapping;
    }
    function zc(x, L, B, z, I) {
      L.isScene !== true && (L = ye), Fe.resetTextureUnits();
      const Q = L.fog, le = z.isMeshStandardMaterial ? L.environment : null, pe = N === null ? S.outputColorSpace : N.isXRRenderTarget === true ? N.texture.colorSpace : Nn, ue = (z.isMeshStandardMaterial ? dt : Mt).get(z.envMap || le), Ae = z.vertexColors === true && !!B.attributes.color && B.attributes.color.itemSize === 4, Pe = !!B.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), Te = !!B.morphAttributes.position, He = !!B.morphAttributes.normal, $e = !!B.morphAttributes.color;
      let ft = Un;
      z.toneMapped && (N === null || N.isXRRenderTarget === true) && (ft = S.toneMapping);
      const st = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, tt = st !== void 0 ? st.length : 0, be = _e.get(z), ct = p.state.lights;
      if (Ze === true && (q === true || x !== M)) {
        const Dt = x === M && z.id === y;
        ie.setState(z, x, Dt);
      }
      let Xe = false;
      z.version === be.__version ? (be.needsLights && be.lightsStateVersion !== ct.state.version || be.outputColorSpace !== pe || I.isBatchedMesh && be.batching === false || !I.isBatchedMesh && be.batching === true || I.isBatchedMesh && be.batchingColor === true && I.colorTexture === null || I.isBatchedMesh && be.batchingColor === false && I.colorTexture !== null || I.isInstancedMesh && be.instancing === false || !I.isInstancedMesh && be.instancing === true || I.isSkinnedMesh && be.skinning === false || !I.isSkinnedMesh && be.skinning === true || I.isInstancedMesh && be.instancingColor === true && I.instanceColor === null || I.isInstancedMesh && be.instancingColor === false && I.instanceColor !== null || I.isInstancedMesh && be.instancingMorph === true && I.morphTexture === null || I.isInstancedMesh && be.instancingMorph === false && I.morphTexture !== null || be.envMap !== ue || z.fog === true && be.fog !== Q || be.numClippingPlanes !== void 0 && (be.numClippingPlanes !== ie.numPlanes || be.numIntersection !== ie.numIntersection) || be.vertexAlphas !== Ae || be.vertexTangents !== Pe || be.morphTargets !== Te || be.morphNormals !== He || be.morphColors !== $e || be.toneMapping !== ft || be.morphTargetsCount !== tt) && (Xe = true) : (Xe = true, be.__version = z.version);
      let zt = be.currentProgram;
      Xe === true && (zt = ps(z, L, I));
      let ei = false, Ht = false, Oi = false;
      const ht = zt.getUniforms(), qt = be.uniforms;
      if (ge.useProgram(zt.program) && (ei = true, Ht = true, Oi = true), z.id !== y && (y = z.id, Ht = true), ei || M !== x) {
        ge.buffers.depth.getReversed() && x.reversedDepth !== true && (x._reversedDepth = true, x.updateProjectionMatrix()), ht.setValue(A, "projectionMatrix", x.projectionMatrix), ht.setValue(A, "viewMatrix", x.matrixWorldInverse);
        const It = ht.map.cameraPosition;
        It !== void 0 && It.setValue(A, de.setFromMatrixPosition(x.matrixWorld)), Ce.logarithmicDepthBuffer && ht.setValue(A, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2)), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && ht.setValue(A, "isOrthographic", x.isOrthographicCamera === true), M !== x && (M = x, Ht = true, Oi = true);
      }
      if (I.isSkinnedMesh) {
        ht.setOptional(A, I, "bindMatrix"), ht.setOptional(A, I, "bindMatrixInverse");
        const Dt = I.skeleton;
        Dt && (Dt.boneTexture === null && Dt.computeBoneTexture(), ht.setValue(A, "boneTexture", Dt.boneTexture, Fe));
      }
      I.isBatchedMesh && (ht.setOptional(A, I, "batchingTexture"), ht.setValue(A, "batchingTexture", I._matricesTexture, Fe), ht.setOptional(A, I, "batchingIdTexture"), ht.setValue(A, "batchingIdTexture", I._indirectTexture, Fe), ht.setOptional(A, I, "batchingColorTexture"), I._colorsTexture !== null && ht.setValue(A, "batchingColorTexture", I._colorsTexture, Fe));
      const Zt = B.morphAttributes;
      if ((Zt.position !== void 0 || Zt.normal !== void 0 || Zt.color !== void 0) && ee.update(I, B, zt), (Ht || be.receiveShadow !== I.receiveShadow) && (be.receiveShadow = I.receiveShadow, ht.setValue(A, "receiveShadow", I.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (qt.envMap.value = ue, qt.flipEnvMap.value = ue.isCubeTexture && ue.isRenderTargetTexture === false ? -1 : 1), z.isMeshStandardMaterial && z.envMap === null && L.environment !== null && (qt.envMapIntensity.value = L.environmentIntensity), Ht && (ht.setValue(A, "toneMappingExposure", S.toneMappingExposure), be.needsLights && Hc(qt, Oi), Q && z.fog === true && K.refreshFogUniforms(qt, Q), K.refreshMaterialUniforms(qt, z, k, ne, p.state.transmissionRenderTarget[x.id]), er.upload(A, _o(be), qt, Fe)), z.isShaderMaterial && z.uniformsNeedUpdate === true && (er.upload(A, _o(be), qt, Fe), z.uniformsNeedUpdate = false), z.isSpriteMaterial && ht.setValue(A, "center", I.center), ht.setValue(A, "modelViewMatrix", I.modelViewMatrix), ht.setValue(A, "normalMatrix", I.normalMatrix), ht.setValue(A, "modelMatrix", I.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const Dt = z.uniformsGroups;
        for (let It = 0, fr = Dt.length; It < fr; It++) {
          const On = Dt[It];
          Ie.update(On, zt), Ie.bind(On, zt);
        }
      }
      return zt;
    }
    function Hc(x, L) {
      x.ambientLightColor.needsUpdate = L, x.lightProbe.needsUpdate = L, x.directionalLights.needsUpdate = L, x.directionalLightShadows.needsUpdate = L, x.pointLights.needsUpdate = L, x.pointLightShadows.needsUpdate = L, x.spotLights.needsUpdate = L, x.spotLightShadows.needsUpdate = L, x.rectAreaLights.needsUpdate = L, x.hemisphereLights.needsUpdate = L;
    }
    function kc(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === true;
    }
    this.getActiveCubeFace = function() {
      return w;
    }, this.getActiveMipmapLevel = function() {
      return U;
    }, this.getRenderTarget = function() {
      return N;
    }, this.setRenderTargetTextures = function(x, L, B) {
      const z = _e.get(x);
      z.__autoAllocateDepthBuffer = x.resolveDepthBuffer === false, z.__autoAllocateDepthBuffer === false && (z.__useRenderToTexture = false), _e.get(x.texture).__webglTexture = L, _e.get(x.depthTexture).__webglTexture = z.__autoAllocateDepthBuffer ? void 0 : B, z.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(x, L) {
      const B = _e.get(x);
      B.__webglFramebuffer = L, B.__useDefaultFramebuffer = L === void 0;
    };
    const Gc = A.createFramebuffer();
    this.setRenderTarget = function(x, L = 0, B = 0) {
      N = x, w = L, U = B;
      let z = true, I = null, Q = false, le = false;
      if (x) {
        const ue = _e.get(x);
        if (ue.__useDefaultFramebuffer !== void 0) ge.bindFramebuffer(A.FRAMEBUFFER, null), z = false;
        else if (ue.__webglFramebuffer === void 0) Fe.setupRenderTarget(x);
        else if (ue.__hasExternalTextures) Fe.rebindTextures(x, _e.get(x.texture).__webglTexture, _e.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const Te = x.depthTexture;
          if (ue.__boundDepthTexture !== Te) {
            if (Te !== null && _e.has(Te) && (x.width !== Te.image.width || x.height !== Te.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            Fe.setupDepthRenderbuffer(x);
          }
        }
        const Ae = x.texture;
        (Ae.isData3DTexture || Ae.isDataArrayTexture || Ae.isCompressedArrayTexture) && (le = true);
        const Pe = _e.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Pe[L]) ? I = Pe[L][B] : I = Pe[L], Q = true) : x.samples > 0 && Fe.useMultisampledRTT(x) === false ? I = _e.get(x).__webglMultisampledFramebuffer : Array.isArray(Pe) ? I = Pe[B] : I = Pe, D.copy(x.viewport), O.copy(x.scissor), H = x.scissorTest;
      } else D.copy(Ee).multiplyScalar(k).floor(), O.copy(ze).multiplyScalar(k).floor(), H = nt;
      if (B !== 0 && (I = Gc), ge.bindFramebuffer(A.FRAMEBUFFER, I) && z && ge.drawBuffers(x, I), ge.viewport(D), ge.scissor(O), ge.setScissorTest(H), Q) {
        const ue = _e.get(x.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_CUBE_MAP_POSITIVE_X + L, ue.__webglTexture, B);
      } else if (le) {
        const ue = L;
        for (let Ae = 0; Ae < x.textures.length; Ae++) {
          const Pe = _e.get(x.textures[Ae]);
          A.framebufferTextureLayer(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0 + Ae, Pe.__webglTexture, B, ue);
        }
      } else if (x !== null && B !== 0) {
        const ue = _e.get(x.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, ue.__webglTexture, B);
      }
      y = -1;
    }, this.readRenderTargetPixels = function(x, L, B, z, I, Q, le, pe = 0) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ue = _e.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && le !== void 0 && (ue = ue[le]), ue) {
        ge.bindFramebuffer(A.FRAMEBUFFER, ue);
        try {
          const Ae = x.textures[pe], Pe = Ae.format, Te = Ae.type;
          if (!Ce.textureFormatReadable(Pe)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Ce.textureTypeReadable(Te)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= x.width - z && B >= 0 && B <= x.height - I && (x.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + pe), A.readPixels(L, B, z, I, Se.convert(Pe), Se.convert(Te), Q));
        } finally {
          const Ae = N !== null ? _e.get(N).__webglFramebuffer : null;
          ge.bindFramebuffer(A.FRAMEBUFFER, Ae);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, L, B, z, I, Q, le, pe = 0) {
      if (!(x && x.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ue = _e.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && le !== void 0 && (ue = ue[le]), ue) if (L >= 0 && L <= x.width - z && B >= 0 && B <= x.height - I) {
        ge.bindFramebuffer(A.FRAMEBUFFER, ue);
        const Ae = x.textures[pe], Pe = Ae.format, Te = Ae.type;
        if (!Ce.textureFormatReadable(Pe)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Ce.textureTypeReadable(Te)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const He = A.createBuffer();
        A.bindBuffer(A.PIXEL_PACK_BUFFER, He), A.bufferData(A.PIXEL_PACK_BUFFER, Q.byteLength, A.STREAM_READ), x.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + pe), A.readPixels(L, B, z, I, Se.convert(Pe), Se.convert(Te), 0);
        const $e = N !== null ? _e.get(N).__webglFramebuffer : null;
        ge.bindFramebuffer(A.FRAMEBUFFER, $e);
        const ft = A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return A.flush(), await Kh(A, ft, 4), A.bindBuffer(A.PIXEL_PACK_BUFFER, He), A.getBufferSubData(A.PIXEL_PACK_BUFFER, 0, Q), A.deleteBuffer(He), A.deleteSync(ft), Q;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(x, L = null, B = 0) {
      const z = Math.pow(2, -B), I = Math.floor(x.image.width * z), Q = Math.floor(x.image.height * z), le = L !== null ? L.x : 0, pe = L !== null ? L.y : 0;
      Fe.setTexture2D(x, 0), A.copyTexSubImage2D(A.TEXTURE_2D, B, 0, 0, le, pe, I, Q), ge.unbindTexture();
    };
    const Vc = A.createFramebuffer(), Wc = A.createFramebuffer();
    this.copyTextureToTexture = function(x, L, B = null, z = null, I = 0, Q = null) {
      Q === null && (I !== 0 ? (rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), Q = I, I = 0) : Q = 0);
      let le, pe, ue, Ae, Pe, Te, He, $e, ft;
      const st = x.isCompressedTexture ? x.mipmaps[Q] : x.image;
      if (B !== null) le = B.max.x - B.min.x, pe = B.max.y - B.min.y, ue = B.isBox3 ? B.max.z - B.min.z : 1, Ae = B.min.x, Pe = B.min.y, Te = B.isBox3 ? B.min.z : 0;
      else {
        const Zt = Math.pow(2, -I);
        le = Math.floor(st.width * Zt), pe = Math.floor(st.height * Zt), x.isDataArrayTexture ? ue = st.depth : x.isData3DTexture ? ue = Math.floor(st.depth * Zt) : ue = 1, Ae = 0, Pe = 0, Te = 0;
      }
      z !== null ? (He = z.x, $e = z.y, ft = z.z) : (He = 0, $e = 0, ft = 0);
      const tt = Se.convert(L.format), be = Se.convert(L.type);
      let ct;
      L.isData3DTexture ? (Fe.setTexture3D(L, 0), ct = A.TEXTURE_3D) : L.isDataArrayTexture || L.isCompressedArrayTexture ? (Fe.setTexture2DArray(L, 0), ct = A.TEXTURE_2D_ARRAY) : (Fe.setTexture2D(L, 0), ct = A.TEXTURE_2D), A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, L.flipY), A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), A.pixelStorei(A.UNPACK_ALIGNMENT, L.unpackAlignment);
      const Xe = A.getParameter(A.UNPACK_ROW_LENGTH), zt = A.getParameter(A.UNPACK_IMAGE_HEIGHT), ei = A.getParameter(A.UNPACK_SKIP_PIXELS), Ht = A.getParameter(A.UNPACK_SKIP_ROWS), Oi = A.getParameter(A.UNPACK_SKIP_IMAGES);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, st.width), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, st.height), A.pixelStorei(A.UNPACK_SKIP_PIXELS, Ae), A.pixelStorei(A.UNPACK_SKIP_ROWS, Pe), A.pixelStorei(A.UNPACK_SKIP_IMAGES, Te);
      const ht = x.isDataArrayTexture || x.isData3DTexture, qt = L.isDataArrayTexture || L.isData3DTexture;
      if (x.isDepthTexture) {
        const Zt = _e.get(x), Dt = _e.get(L), It = _e.get(Zt.__renderTarget), fr = _e.get(Dt.__renderTarget);
        ge.bindFramebuffer(A.READ_FRAMEBUFFER, It.__webglFramebuffer), ge.bindFramebuffer(A.DRAW_FRAMEBUFFER, fr.__webglFramebuffer);
        for (let On = 0; On < ue; On++) ht && (A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, _e.get(x).__webglTexture, I, Te + On), A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, _e.get(L).__webglTexture, Q, ft + On)), A.blitFramebuffer(Ae, Pe, le, pe, He, $e, le, pe, A.DEPTH_BUFFER_BIT, A.NEAREST);
        ge.bindFramebuffer(A.READ_FRAMEBUFFER, null), ge.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else if (I !== 0 || x.isRenderTargetTexture || _e.has(x)) {
        const Zt = _e.get(x), Dt = _e.get(L);
        ge.bindFramebuffer(A.READ_FRAMEBUFFER, Vc), ge.bindFramebuffer(A.DRAW_FRAMEBUFFER, Wc);
        for (let It = 0; It < ue; It++) ht ? A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Zt.__webglTexture, I, Te + It) : A.framebufferTexture2D(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Zt.__webglTexture, I), qt ? A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Dt.__webglTexture, Q, ft + It) : A.framebufferTexture2D(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Dt.__webglTexture, Q), I !== 0 ? A.blitFramebuffer(Ae, Pe, le, pe, He, $e, le, pe, A.COLOR_BUFFER_BIT, A.NEAREST) : qt ? A.copyTexSubImage3D(ct, Q, He, $e, ft + It, Ae, Pe, le, pe) : A.copyTexSubImage2D(ct, Q, He, $e, Ae, Pe, le, pe);
        ge.bindFramebuffer(A.READ_FRAMEBUFFER, null), ge.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else qt ? x.isDataTexture || x.isData3DTexture ? A.texSubImage3D(ct, Q, He, $e, ft, le, pe, ue, tt, be, st.data) : L.isCompressedArrayTexture ? A.compressedTexSubImage3D(ct, Q, He, $e, ft, le, pe, ue, tt, st.data) : A.texSubImage3D(ct, Q, He, $e, ft, le, pe, ue, tt, be, st) : x.isDataTexture ? A.texSubImage2D(A.TEXTURE_2D, Q, He, $e, le, pe, tt, be, st.data) : x.isCompressedTexture ? A.compressedTexSubImage2D(A.TEXTURE_2D, Q, He, $e, st.width, st.height, tt, st.data) : A.texSubImage2D(A.TEXTURE_2D, Q, He, $e, le, pe, tt, be, st);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, Xe), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, zt), A.pixelStorei(A.UNPACK_SKIP_PIXELS, ei), A.pixelStorei(A.UNPACK_SKIP_ROWS, Ht), A.pixelStorei(A.UNPACK_SKIP_IMAGES, Oi), Q === 0 && L.generateMipmaps && A.generateMipmap(ct), ge.unbindTexture();
    }, this.initRenderTarget = function(x) {
      _e.get(x).__webglFramebuffer === void 0 && Fe.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? Fe.setTextureCube(x, 0) : x.isData3DTexture ? Fe.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? Fe.setTexture2DArray(x, 0) : Fe.setTexture2D(x, 0), ge.unbindTexture();
    }, this.resetState = function() {
      w = 0, U = 0, N = null, ge.reset(), oe.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return hn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = Ye._getDrawingBufferColorSpace(e), t.unpackColorSpace = Ye._getUnpackColorSpace();
  }
}
/**
* postprocessing v6.37.8 build Fri Sep 12 2025
* https://github.com/pmndrs/postprocessing
* Copyright 2015-2025 Raoul van Rüschen
* @license Zlib
*/
var Kr = 1 / 1e3, e_ = 1e3, t_ = class {
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
    return this._delta * Kr;
  }
  get fixedDelta() {
    return this._fixedDelta * Kr;
  }
  set fixedDelta(n) {
    this._fixedDelta = n * e_;
  }
  get elapsed() {
    return this._elapsed * Kr;
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
}, n_ = (() => {
  const n = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), e = new Float32Array([0, 0, 2, 0, 0, 2]), t = new Bt();
  return t.setAttribute("position", new Ot(n, 3)), t.setAttribute("uv", new Ot(e, 2)), t;
})(), $t = class Xa {
  static get fullscreenGeometry() {
    return n_;
  }
  constructor(e = "Pass", t = new Vo(), i = new io()) {
    this.name = e, this.renderer = null, this.scene = t, this.camera = i, this.screen = null, this.rtt = true, this.needsSwap = true, this.needsDepthTexture = false, this.enabled = true;
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
    t !== null ? t.material = e : (t = new jt(Xa.fullscreenGeometry, e), t.frustumCulled = false, this.scene === null && (this.scene = new Vo()), this.scene.add(t), this.screen = t);
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
  setDepthTexture(e, t = jn) {
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
      (t instanceof Pt || t instanceof dn || t instanceof vt || t instanceof Xa) && this[e].dispose();
    }
    this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose();
  }
}, i_ = class extends $t {
  constructor() {
    super("ClearMaskPass", null, null), this.needsSwap = false;
  }
  render(n, e, t, i, s) {
    const r = n.state.buffers.stencil;
    r.setLocked(false), r.setTest(false);
  }
}, s_ = `#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`, fs = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}", Uc = class extends bt {
  constructor() {
    super({ name: "CopyMaterial", uniforms: { inputBuffer: new Re(null), opacity: new Re(1) }, blending: At, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: s_, vertexShader: fs });
  }
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
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
}, r_ = class extends $t {
  constructor(n, e = true) {
    super("CopyPass"), this.fullscreenMaterial = new Uc(), this.needsSwap = false, this.renderTarget = n, n === void 0 && (this.renderTarget = new Pt(1, 1, { minFilter: Ft, magFilter: Ft, stencilBuffer: false, depthBuffer: false }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = e;
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
    t !== void 0 && (this.renderTarget.texture.type = t, t !== gt ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : n !== null && n.outputColorSpace === We && (this.renderTarget.texture.colorSpace = We));
  }
}, Ol = new Ge(), Lc = class extends $t {
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
    const r = this.overrideClearColor, a = this.overrideClearAlpha, o = n.getClearAlpha(), l = r !== null, c = a >= 0;
    l ? (n.getClearColor(Ol), n.setClearColor(r, c ? a : o)) : c && n.setClearAlpha(a), n.setRenderTarget(this.renderToScreen ? null : e), n.clear(this.color, this.depth, this.stencil), l ? n.setClearColor(Ol, o) : c && n.setClearAlpha(o);
  }
}, a_ = class extends $t {
  constructor(n, e) {
    super("MaskPass", n, e), this.needsSwap = false, this.clearPass = new Lc(false, false, true), this.inverse = false;
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
    const r = n.getContext(), a = n.state.buffers, o = this.scene, l = this.camera, c = this.clearPass, h = this.inverted ? 0 : 1, u = 1 - h;
    a.color.setMask(false), a.depth.setMask(false), a.color.setLocked(true), a.depth.setLocked(true), a.stencil.setTest(true), a.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE), a.stencil.setFunc(r.ALWAYS, h, 4294967295), a.stencil.setClear(u), a.stencil.setLocked(true), this.clearPass.enabled && (this.renderToScreen ? c.render(n, null) : (c.render(n, e), c.render(n, t))), this.renderToScreen ? (n.setRenderTarget(null), n.render(o, l)) : (n.setRenderTarget(e), n.render(o, l), n.setRenderTarget(t), n.render(o, l)), a.color.setLocked(false), a.depth.setLocked(false), a.stencil.setLocked(false), a.stencil.setFunc(r.EQUAL, 1, 4294967295), a.stencil.setOp(r.KEEP, r.KEEP, r.KEEP), a.stencil.setLocked(true);
  }
}, Wv = class {
  constructor(n = null, { depthBuffer: e = true, stencilBuffer: t = false, multisampling: i = 0, frameBufferType: s } = {}) {
    this.renderer = null, this.inputBuffer = this.createBuffer(e, t, s, i), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new r_(), this.depthTexture = null, this.passes = [], this.timer = new t_(), this.autoRenderToScreen = true, this.setRenderer(n);
  }
  get multisampling() {
    return this.inputBuffer.samples || 0;
  }
  set multisampling(n) {
    const e = this.inputBuffer, t = this.multisampling;
    t > 0 && n > 0 ? (this.inputBuffer.samples = n, this.outputBuffer.samples = n, this.inputBuffer.dispose(), this.outputBuffer.dispose()) : t !== n && (this.inputBuffer.dispose(), this.outputBuffer.dispose(), this.inputBuffer = this.createBuffer(e.depthBuffer, e.stencilBuffer, e.texture.type, n), this.inputBuffer.depthTexture = this.depthTexture, this.outputBuffer = this.inputBuffer.clone());
  }
  getTimer() {
    return this.timer;
  }
  getRenderer() {
    return this.renderer;
  }
  setRenderer(n) {
    if (this.renderer = n, n !== null) {
      const e = n.getSize(new j()), t = n.getContext().getContextAttributes().alpha, i = this.inputBuffer.texture.type;
      i === gt && n.outputColorSpace === We && (this.inputBuffer.texture.colorSpace = We, this.outputBuffer.texture.colorSpace = We, this.inputBuffer.dispose(), this.outputBuffer.dispose()), n.autoClear = false, this.setSize(e.width, e.height);
      for (const s of this.passes) s.initialize(n, t, i);
    }
  }
  replaceRenderer(n, e = true) {
    const t = this.renderer, i = t.domElement.parentNode;
    return this.setRenderer(n), e && i !== null && (i.removeChild(t.domElement), i.appendChild(n.domElement)), t;
  }
  createDepthTexture() {
    const n = this.depthTexture = new ro();
    return this.inputBuffer.depthTexture = n, this.inputBuffer.dispose(), this.inputBuffer.stencilBuffer ? (n.format = Li, n.type = Ui) : n.type = In, n;
  }
  deleteDepthTexture() {
    if (this.depthTexture !== null) {
      this.depthTexture.dispose(), this.depthTexture = null, this.inputBuffer.depthTexture = null, this.inputBuffer.dispose();
      for (const n of this.passes) n.setDepthTexture(null);
    }
  }
  createBuffer(n, e, t, i) {
    const s = this.renderer, r = s === null ? new j() : s.getDrawingBufferSize(new j()), a = { minFilter: Ft, magFilter: Ft, stencilBuffer: e, depthBuffer: n, type: t }, o = new Pt(r.width, r.height, a);
    return i > 0 && (o.ignoreDepthForMultisampleCopy = false, o.samples = i), t === gt && s !== null && s.outputColorSpace === We && (o.texture.colorSpace = We), o.texture.name = "EffectComposer.Buffer", o.texture.generateMipmaps = false, o;
  }
  setMainScene(n) {
    for (const e of this.passes) e.mainScene = n;
  }
  setMainCamera(n) {
    for (const e of this.passes) e.mainCamera = n;
  }
  addPass(n, e) {
    const t = this.passes, i = this.renderer, s = i.getDrawingBufferSize(new j()), r = i.getContext().getContextAttributes().alpha, a = this.inputBuffer.texture.type;
    if (n.setRenderer(i), n.setSize(s.width, s.height), n.initialize(i, r, a), this.autoRenderToScreen && (t.length > 0 && (t[t.length - 1].renderToScreen = false), n.renderToScreen && (this.autoRenderToScreen = false)), e !== void 0 ? t.splice(e, 0, n) : t.push(n), this.autoRenderToScreen && (t[t.length - 1].renderToScreen = true), n.needsDepthTexture || this.depthTexture !== null) if (this.depthTexture === null) {
      const o = this.createDepthTexture();
      for (n of t) n.setDepthTexture(o);
    } else n.setDepthTexture(this.depthTexture);
  }
  removePass(n) {
    const e = this.passes, t = e.indexOf(n);
    if (t !== -1 && e.splice(t, 1).length > 0) {
      if (this.depthTexture !== null) {
        const r = (o, l) => o || l.needsDepthTexture;
        e.reduce(r, false) || (n.getDepthTexture() === this.depthTexture && n.setDepthTexture(null), this.deleteDepthTexture());
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
    let i = this.inputBuffer, s = this.outputBuffer, r = false, a, o, l;
    n === void 0 && (this.timer.update(), n = this.timer.getDelta());
    for (const c of this.passes) c.enabled && (c.render(e, i, s, n, r), c.needsSwap && (r && (t.renderToScreen = c.renderToScreen, a = e.getContext(), o = e.state.buffers.stencil, o.setFunc(a.NOTEQUAL, 1, 4294967295), t.render(e, i, s, n, r), o.setFunc(a.EQUAL, 1, 4294967295)), l = i, i = s, s = l), c instanceof a_ ? r = true : c instanceof i_ && (r = false));
  }
  setSize(n, e, t) {
    const i = this.renderer, s = i.getSize(new j());
    (n === void 0 || e === void 0) && (n = s.width, e = s.height), (s.width !== n || s.height !== e) && i.setSize(n, e, t);
    const r = i.getDrawingBufferSize(new j());
    this.inputBuffer.setSize(r.width, r.height), this.outputBuffer.setSize(r.width, r.height);
    for (const a of this.passes) a.setSize(r.width, r.height);
  }
  reset() {
    this.dispose(), this.autoRenderToScreen = true;
  }
  dispose() {
    for (const n of this.passes) n.dispose();
    this.passes = [], this.inputBuffer !== null && this.inputBuffer.dispose(), this.outputBuffer !== null && this.outputBuffer.dispose(), this.deleteDepthTexture(), this.copyPass.dispose(), this.timer.dispose(), $t.fullscreenGeometry.dispose();
  }
}, Ln = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 }, qe = { FRAGMENT_HEAD: "FRAGMENT_HEAD", FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV", FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE", VERTEX_HEAD: "VERTEX_HEAD", VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT" }, o_ = class {
  constructor() {
    this.shaderParts = /* @__PURE__ */ new Map([[qe.FRAGMENT_HEAD, null], [qe.FRAGMENT_MAIN_UV, null], [qe.FRAGMENT_MAIN_IMAGE, null], [qe.VERTEX_HEAD, null], [qe.VERTEX_MAIN_SUPPORT, null]]), this.defines = /* @__PURE__ */ new Map(), this.uniforms = /* @__PURE__ */ new Map(), this.blendModes = /* @__PURE__ */ new Map(), this.extensions = /* @__PURE__ */ new Set(), this.attributes = Ln.NONE, this.varyings = /* @__PURE__ */ new Set(), this.uvTransformation = false, this.readDepth = false, this.colorSpace = Nn;
  }
}, Jr = false, Bl = class {
  constructor(n = null) {
    this.originalMaterials = /* @__PURE__ */ new Map(), this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(n), this.meshCount = 0, this.replaceMaterial = (e) => {
      if (e.isMesh) {
        let t;
        if (e.material.flatShading) switch (e.material.side) {
          case Wt:
            t = this.materialsFlatShadedDoubleSide;
            break;
          case Et:
            t = this.materialsFlatShadedBackSide;
            break;
          default:
            t = this.materialsFlatShaded;
            break;
        }
        else switch (e.material.side) {
          case Wt:
            t = this.materialsDoubleSide;
            break;
          case Et:
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
    if (!(n instanceof bt)) return n.clone();
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
      for (const t of e) t.uniforms = Object.assign({}, n.uniforms), t.side = En;
      e[2].skinning = true, this.materialsBackSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.side = Et, i;
      }), this.materialsDoubleSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.side = Wt, i;
      }), this.materialsFlatShaded = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.flatShading = true, i;
      }), this.materialsFlatShadedBackSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.flatShading = true, i.side = Et, i;
      }), this.materialsFlatShadedDoubleSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.flatShading = true, i.side = Wt, i;
      });
    }
  }
  render(n, e, t) {
    const i = n.shadowMap.enabled;
    if (n.shadowMap.enabled = false, Jr) {
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
    return Jr;
  }
  static set workaroundEnabled(n) {
    Jr = n;
  }
}, Pn = -1, Xt = class extends fn {
  constructor(n, e = Pn, t = Pn, i = 1) {
    super(), this.resizable = n, this.baseSize = new j(1, 1), this.preferredSize = new j(e, t), this.target = this.preferredSize, this.s = i, this.effectiveSize = new j(), this.addEventListener("change", () => this.updateEffectiveSize()), this.updateEffectiveSize();
  }
  updateEffectiveSize() {
    const n = this.baseSize, e = this.preferredSize, t = this.effectiveSize, i = this.scale;
    e.width !== Pn ? t.width = e.width : e.height !== Pn ? t.width = Math.round(e.height * (n.width / Math.max(n.height, 1))) : t.width = Math.round(n.width * i), e.height !== Pn ? t.height = e.height : e.width !== Pn ? t.height = Math.round(e.width / Math.max(n.width / Math.max(n.height, 1), 1)) : t.height = Math.round(n.height * i);
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
    this.s !== n && (this.s = n, this.preferredSize.setScalar(Pn), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
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
    this.baseSize.width !== n && (this.baseSize.width = n, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
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
    this.baseSize.height !== n && (this.baseSize.height = n, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  getBaseHeight() {
    return this.baseHeight;
  }
  setBaseHeight(n) {
    this.baseHeight = n;
  }
  setBaseSize(n, e) {
    (this.baseSize.width !== n || this.baseSize.height !== e) && (this.baseSize.set(n, e), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  get preferredWidth() {
    return this.preferredSize.width;
  }
  set preferredWidth(n) {
    this.preferredSize.width !== n && (this.preferredSize.width = n, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
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
    this.preferredSize.height !== n && (this.preferredSize.height = n, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  getPreferredHeight() {
    return this.preferredHeight;
  }
  setPreferredHeight(n) {
    this.preferredHeight = n;
  }
  setPreferredSize(n, e) {
    (this.preferredSize.width !== n || this.preferredSize.height !== e) && (this.preferredSize.set(n, e), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  copy(n) {
    this.s = n.scale, this.baseSize.set(n.baseWidth, n.baseHeight), this.preferredSize.set(n.preferredWidth, n.preferredHeight), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height);
  }
  static get AUTO_SIZE() {
    return Pn;
  }
}, ke = { ADD: 0, ALPHA: 1, AVERAGE: 2, COLOR: 3, COLOR_BURN: 4, COLOR_DODGE: 5, DARKEN: 6, DIFFERENCE: 7, DIVIDE: 8, DST: 9, EXCLUSION: 10, HARD_LIGHT: 11, HARD_MIX: 12, HUE: 13, INVERT: 14, INVERT_RGB: 15, LIGHTEN: 16, LINEAR_BURN: 17, LINEAR_DODGE: 18, LINEAR_LIGHT: 19, LUMINOSITY: 20, MULTIPLY: 21, NEGATION: 22, NORMAL: 23, OVERLAY: 24, PIN_LIGHT: 25, REFLECT: 26, SATURATION: 27, SCREEN: 28, SOFT_LIGHT: 29, SRC: 30, SUBTRACT: 31, VIVID_LIGHT: 32 }, l_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),opacity);}", c_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}", h_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),opacity);}", u_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),opacity);}", f_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),opacity);}", d_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),opacity);}", p_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),opacity);}", m_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),opacity);}", g_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),opacity);}", __ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),opacity);}", v_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),opacity);}", x_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),opacity);}", S_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),opacity);}", M_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),opacity);}", y_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),opacity);}", E_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),opacity);}", T_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}", b_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),opacity);}", A_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}", w_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),opacity);}", R_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),opacity);}", C_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),opacity);}", P_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}", D_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),opacity);}", U_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),opacity);}", L_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),opacity);}", I_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),opacity);}", N_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),opacity);}", F_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),opacity);}", O_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}", B_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),opacity);}", z_ = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),opacity);}", H_ = /* @__PURE__ */ new Map([[ke.ADD, l_], [ke.ALPHA, c_], [ke.AVERAGE, h_], [ke.COLOR, u_], [ke.COLOR_BURN, f_], [ke.COLOR_DODGE, d_], [ke.DARKEN, p_], [ke.DIFFERENCE, m_], [ke.DIVIDE, g_], [ke.DST, null], [ke.EXCLUSION, __], [ke.HARD_LIGHT, v_], [ke.HARD_MIX, x_], [ke.HUE, S_], [ke.INVERT, M_], [ke.INVERT_RGB, y_], [ke.LIGHTEN, E_], [ke.LINEAR_BURN, T_], [ke.LINEAR_DODGE, b_], [ke.LINEAR_LIGHT, A_], [ke.LUMINOSITY, w_], [ke.MULTIPLY, R_], [ke.NEGATION, C_], [ke.NORMAL, P_], [ke.OVERLAY, D_], [ke.PIN_LIGHT, U_], [ke.REFLECT, L_], [ke.SATURATION, I_], [ke.SCREEN, N_], [ke.SOFT_LIGHT, F_], [ke.SRC, O_], [ke.SUBTRACT, B_], [ke.VIVID_LIGHT, z_]]), k_ = class extends fn {
  constructor(n, e = 1) {
    super(), this._blendFunction = n, this.opacity = new Re(e);
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
    return H_.get(this.blendFunction);
  }
}, Ic = class extends fn {
  constructor(n, e, { attributes: t = Ln.NONE, blendFunction: i = ke.NORMAL, defines: s = /* @__PURE__ */ new Map(), uniforms: r = /* @__PURE__ */ new Map(), extensions: a = null, vertexShader: o = null } = {}) {
    super(), this.name = n, this.renderer = null, this.attributes = t, this.fragmentShader = e, this.vertexShader = o, this.defines = s, this.uniforms = r, this.extensions = a, this.blendMode = new k_(i), this.blendMode.addEventListener("change", (l) => this.setChanged()), this._inputColorSpace = Nn, this._outputColorSpace = ln;
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
  setDepthTexture(n, e = jn) {
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
      (e instanceof Pt || e instanceof dn || e instanceof vt || e instanceof $t) && this[n].dispose();
    }
  }
}, hr = { MEDIUM: 2, LARGE: 3 }, G_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`, V_ = "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}", W_ = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])], X_ = class extends bt {
  constructor(n = new lt()) {
    super({ name: "KawaseBlurMaterial", uniforms: { inputBuffer: new Re(null), texelSize: new Re(new lt()), scale: new Re(1), kernel: new Re(0) }, blending: At, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: G_, vertexShader: V_ }), this.setTexelSize(n.x, n.y), this.kernelSize = hr.MEDIUM;
  }
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  setInputBuffer(n) {
    this.inputBuffer = n;
  }
  get kernelSequence() {
    return W_[this.kernelSize];
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
}, Nc = class extends $t {
  constructor({ kernelSize: n = hr.MEDIUM, resolutionScale: e = 0.5, width: t = Xt.AUTO_SIZE, height: i = Xt.AUTO_SIZE, resolutionX: s = t, resolutionY: r = i } = {}) {
    super("KawaseBlurPass"), this.renderTargetA = new Pt(1, 1, { depthBuffer: false }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
    const a = this.resolution = new Xt(this, s, r, e);
    a.addEventListener("change", (o) => this.setSize(a.baseWidth, a.baseHeight)), this._blurMaterial = new X_(), this._blurMaterial.kernelSize = n, this.copyMaterial = new Uc();
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
    const r = this.scene, a = this.camera, o = this.renderTargetA, l = this.renderTargetB, c = this.blurMaterial, h = c.kernelSequence;
    let u = e;
    this.fullscreenMaterial = c;
    for (let f = 0, d = h.length; f < d; ++f) {
      const g = (f & 1) === 0 ? o : l;
      c.kernel = h[f], c.inputBuffer = u.texture, n.setRenderTarget(g), n.render(r, a), u = g;
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
    t !== void 0 && (this.renderTargetA.texture.type = t, this.renderTargetB.texture.type = t, t !== gt ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : n !== null && n.outputColorSpace === We && (this.renderTargetA.texture.colorSpace = We, this.renderTargetB.texture.colorSpace = We));
  }
  static get AUTO_SIZE() {
    return Xt.AUTO_SIZE;
  }
}, Y_ = `#include <common>
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
}`, q_ = class extends bt {
  constructor(n = false, e = null) {
    super({ name: "LuminanceMaterial", defines: { THREE_REVISION: "180".replace(/\D+/g, "") }, uniforms: { inputBuffer: new Re(null), threshold: new Re(0), smoothing: new Re(1), range: new Re(null) }, blending: At, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: Y_, vertexShader: fs }), this.colorOutput = n, this.luminanceRange = e;
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
}, Z_ = class extends $t {
  constructor({ renderTarget: n, luminanceRange: e, colorOutput: t, resolutionScale: i = 1, width: s = Xt.AUTO_SIZE, height: r = Xt.AUTO_SIZE, resolutionX: a = s, resolutionY: o = r } = {}) {
    super("LuminancePass"), this.fullscreenMaterial = new q_(t, e), this.needsSwap = false, this.renderTarget = n, this.renderTarget === void 0 && (this.renderTarget = new Pt(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "LuminancePass.Target");
    const l = this.resolution = new Xt(this, a, o, i);
    l.addEventListener("change", (c) => this.setSize(l.baseWidth, l.baseHeight));
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
    t !== void 0 && t !== gt && (this.renderTarget.texture.type = t, this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, K_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`, J_ = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}", j_ = class extends bt {
  constructor() {
    super({ name: "DownsamplingMaterial", uniforms: { inputBuffer: new Re(null), texelSize: new Re(new j()) }, blending: At, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: K_, vertexShader: J_ });
  }
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  setSize(n, e) {
    this.uniforms.texelSize.value.set(1 / n, 1 / e);
  }
}, $_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`, Q_ = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}", ev = class extends bt {
  constructor() {
    super({ name: "UpsamplingMaterial", uniforms: { inputBuffer: new Re(null), supportBuffer: new Re(null), texelSize: new Re(new j()), radius: new Re(0.85) }, blending: At, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: $_, vertexShader: Q_ });
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
}, tv = class extends $t {
  constructor() {
    super("MipmapBlurPass"), this.needsSwap = false, this.renderTarget = new Pt(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Upsampling.Mipmap0", this.downsamplingMipmaps = [], this.upsamplingMipmaps = [], this.downsamplingMaterial = new j_(), this.upsamplingMaterial = new ev(), this.resolution = new j();
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
    const { scene: r, camera: a } = this, { downsamplingMaterial: o, upsamplingMaterial: l } = this, { downsamplingMipmaps: c, upsamplingMipmaps: h } = this;
    let u = e;
    this.fullscreenMaterial = o;
    for (let f = 0, d = c.length; f < d; ++f) {
      const g = c[f];
      o.setSize(u.width, u.height), o.inputBuffer = u.texture, n.setRenderTarget(g), n.render(r, a), u = g;
    }
    this.fullscreenMaterial = l;
    for (let f = h.length - 1; f >= 0; --f) {
      const d = h[f];
      l.setSize(u.width, u.height), l.inputBuffer = u.texture, l.supportBuffer = c[f].texture, n.setRenderTarget(d), n.render(r, a), u = d;
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
      if (t !== gt) this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      else if (n !== null && n.outputColorSpace === We) for (const s of i) s.texture.colorSpace = We;
    }
  }
  dispose() {
    super.dispose();
    for (const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) n.dispose();
  }
}, nv = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,max(inputColor.a,texel.a));}`, Xv = class extends Ic {
  constructor({ blendFunction: n = ke.SCREEN, luminanceThreshold: e = 1, luminanceSmoothing: t = 0.03, mipmapBlur: i = true, intensity: s = 1, radius: r = 0.85, levels: a = 8, kernelSize: o = hr.LARGE, resolutionScale: l = 0.5, width: c = Xt.AUTO_SIZE, height: h = Xt.AUTO_SIZE, resolutionX: u = c, resolutionY: f = h } = {}) {
    super("BloomEffect", nv, { blendFunction: n, uniforms: /* @__PURE__ */ new Map([["map", new Re(null)], ["intensity", new Re(s)]]) }), this.renderTarget = new Pt(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Bloom.Target", this.blurPass = new Nc({ kernelSize: o }), this.luminancePass = new Z_({ colorOutput: true }), this.luminanceMaterial.threshold = e, this.luminanceMaterial.smoothing = t, this.mipmapBlurPass = new tv(), this.mipmapBlurPass.enabled = i, this.mipmapBlurPass.radius = r, this.mipmapBlurPass.levels = a, this.uniforms.get("map").value = i ? this.mipmapBlurPass.texture : this.renderTarget.texture;
    const d = this.resolution = new Xt(this, u, f, l);
    d.addEventListener("change", (g) => this.setSize(d.baseWidth, d.baseHeight));
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
    this.blurPass.initialize(n, e, t), this.luminancePass.initialize(n, e, t), this.mipmapBlurPass.initialize(n, e, t), t !== void 0 && (this.renderTarget.texture.type = t, n !== null && n.outputColorSpace === We && (this.renderTarget.texture.colorSpace = We));
  }
}, Fc = { RED: 0, GREEN: 1 }, Oc = { DISCARD: 0, MULTIPLY_RGB: 3 }, iv = `#ifdef FRAMEBUFFER_PRECISION_HIGH
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
}}`, Zs = class extends bt {
  constructor(n = false, e = false) {
    super({ name: "BokehMaterial", defines: { PASS: n ? "2" : "1" }, uniforms: { inputBuffer: new Re(null), cocBuffer: new Re(null), texelSize: new Re(new j()), kernel64: new Re(null), kernel16: new Re(null), scale: new Re(1) }, blending: At, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: iv, vertexShader: fs }), e && (this.defines.FOREGROUND = "1"), this.generateKernel();
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
      const o = r * n, l = Math.sqrt(r) / a, c = l * Math.cos(o), h = l * Math.sin(o);
      r % 5 === 0 ? (t[s++] = c, t[s++] = h) : (e[i++] = c, e[i++] = h);
    }
    this.uniforms.kernel64.value = e, this.uniforms.kernel16.value = t;
  }
  setTexelSize(n, e) {
    this.uniforms.texelSize.value.set(n, e);
  }
  setSize(n, e) {
    this.uniforms.texelSize.value.set(1 / n, 1 / e);
  }
};
function zl(n, e, t) {
  return n * (e - t) - e;
}
function Ya(n, e, t) {
  return Math.min(Math.max((n + e) / (e - t), 0), 1);
}
var sv = `#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform float focusDistance;uniform float focusRange;uniform float cameraNear;uniform float cameraFar;varying vec2 vUv;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#ifdef LOG_DEPTH
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#endif
return depth;}void main(){float depth=readDepth(vUv);
#ifdef PERSPECTIVE_CAMERA
float viewZ=perspectiveDepthToViewZ(depth,cameraNear,cameraFar);float linearDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);
#else
float linearDepth=depth;
#endif
float signedDistance=linearDepth-focusDistance;float magnitude=smoothstep(0.0,focusRange,abs(signedDistance));gl_FragColor.rg=magnitude*vec2(step(signedDistance,0.0),step(0.0,signedDistance));}`, rv = class extends bt {
  constructor(n) {
    super({ name: "CircleOfConfusionMaterial", defines: { DEPTH_PACKING: "0" }, uniforms: { depthBuffer: new Re(null), focusDistance: new Re(0), focusRange: new Re(0), cameraNear: new Re(0.3), cameraFar: new Re(1e3) }, blending: At, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: sv, vertexShader: fs }), this.uniforms.focalLength = this.uniforms.focusRange, this.copyCameraSettings(n);
  }
  get near() {
    return this.uniforms.cameraNear.value;
  }
  get far() {
    return this.uniforms.cameraFar.value;
  }
  set depthBuffer(n) {
    this.uniforms.depthBuffer.value = n;
  }
  set depthPacking(n) {
    this.defines.DEPTH_PACKING = n.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(n, e = jn) {
    this.depthBuffer = n, this.depthPacking = e;
  }
  get focusDistance() {
    return this.uniforms.focusDistance.value;
  }
  set focusDistance(n) {
    this.uniforms.focusDistance.value = n;
  }
  get worldFocusDistance() {
    return -zl(this.focusDistance, this.near, this.far);
  }
  set worldFocusDistance(n) {
    this.focusDistance = Ya(-n, this.near, this.far);
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
    return -zl(this.focusRange, this.near, this.far);
  }
  set worldFocusRange(n) {
    this.focusRange = Ya(-n, this.near, this.far);
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
    n && (this.uniforms.cameraNear.value = n.near, this.uniforms.cameraFar.value = n.far, n instanceof Vt ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = true);
  }
}, av = `#ifdef FRAMEBUFFER_PRECISION_HIGH
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
mask=step(mask,0.0);
#else
mask=1.0-step(mask,0.0);
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
}`, ov = class extends bt {
  constructor(n = null) {
    super({ name: "MaskMaterial", uniforms: { maskTexture: new Re(n), inputBuffer: new Re(null), strength: new Re(1) }, blending: At, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: av, vertexShader: fs }), this.colorChannel = Fc.RED, this.maskFunction = Oc.DISCARD;
  }
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  setInputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  set maskTexture(n) {
    this.uniforms.maskTexture.value = n, delete this.defines.MASK_PRECISION_HIGH, n.type !== gt && (this.defines.MASK_PRECISION_HIGH = "1"), this.needsUpdate = true;
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
}, Mi = class extends $t {
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
    t !== void 0 && t !== gt && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, lv = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D nearColorBuffer;uniform mediump sampler2D farColorBuffer;
#else
uniform lowp sampler2D nearColorBuffer;uniform lowp sampler2D farColorBuffer;
#endif
uniform lowp sampler2D nearCoCBuffer;uniform lowp sampler2D farCoCBuffer;uniform float scale;void mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){vec4 colorNear=texture2D(nearColorBuffer,uv);vec4 colorFar=texture2D(farColorBuffer,uv);
#if MASK_FUNCTION == 1
vec2 cocNearFar=vec2(texture2D(nearCoCBuffer,uv).r,colorFar.a);cocNearFar.x=min(cocNearFar.x*scale,1.0);
#else
vec2 cocNearFar=vec2(texture2D(nearCoCBuffer,uv).r,texture2D(farCoCBuffer,uv).g);cocNearFar=min(cocNearFar*scale,1.0);
#endif
vec4 result=inputColor*(1.0-cocNearFar.y)+colorFar;result=mix(result,colorNear,cocNearFar.x);outputColor=result;}`, Yv = class extends Ic {
  constructor(n, { blendFunction: e, worldFocusDistance: t, worldFocusRange: i, focusDistance: s = 0, focalLength: r = 0.1, focusRange: a = r, bokehScale: o = 1, resolutionScale: l = 1, width: c = Xt.AUTO_SIZE, height: h = Xt.AUTO_SIZE, resolutionX: u = c, resolutionY: f = h } = {}) {
    super("DepthOfFieldEffect", lv, { blendFunction: e, attributes: Ln.DEPTH, uniforms: /* @__PURE__ */ new Map([["nearColorBuffer", new Re(null)], ["farColorBuffer", new Re(null)], ["nearCoCBuffer", new Re(null)], ["farCoCBuffer", new Re(null)], ["scale", new Re(1)]]) }), this.camera = n, this.renderTarget = new Pt(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "DoF.Intermediate", this.renderTargetMasked = this.renderTarget.clone(), this.renderTargetMasked.texture.name = "DoF.Masked.Far", this.renderTargetNear = this.renderTarget.clone(), this.renderTargetNear.texture.name = "DoF.Bokeh.Near", this.uniforms.get("nearColorBuffer").value = this.renderTargetNear.texture, this.renderTargetFar = this.renderTarget.clone(), this.renderTargetFar.texture.name = "DoF.Bokeh.Far", this.uniforms.get("farColorBuffer").value = this.renderTargetFar.texture, this.renderTargetCoC = this.renderTarget.clone(), this.renderTargetCoC.texture.name = "DoF.CoC", this.uniforms.get("farCoCBuffer").value = this.renderTargetCoC.texture, this.renderTargetCoCBlurred = this.renderTargetCoC.clone(), this.renderTargetCoCBlurred.texture.name = "DoF.CoC.Blurred", this.uniforms.get("nearCoCBuffer").value = this.renderTargetCoCBlurred.texture, this.cocPass = new Mi(new rv(n));
    const d = this.cocMaterial;
    d.focusDistance = s, d.focusRange = a, t !== void 0 && (d.worldFocusDistance = t), i !== void 0 && (d.worldFocusRange = i), this.blurPass = new Nc({ resolutionScale: l, resolutionX: u, resolutionY: f, kernelSize: hr.MEDIUM }), this.maskPass = new Mi(new ov(this.renderTargetCoC.texture));
    const g = this.maskPass.fullscreenMaterial;
    g.colorChannel = Fc.GREEN, this.maskFunction = Oc.MULTIPLY_RGB, this.bokehNearBasePass = new Mi(new Zs(false, true)), this.bokehNearBasePass.fullscreenMaterial.cocBuffer = this.renderTargetCoCBlurred.texture, this.bokehNearFillPass = new Mi(new Zs(true, true)), this.bokehNearFillPass.fullscreenMaterial.cocBuffer = this.renderTargetCoCBlurred.texture, this.bokehFarBasePass = new Mi(new Zs(false, false)), this.bokehFarBasePass.fullscreenMaterial.cocBuffer = this.renderTargetCoC.texture, this.bokehFarFillPass = new Mi(new Zs(true, false)), this.bokehFarFillPass.fullscreenMaterial.cocBuffer = this.renderTargetCoC.texture, this.target = null;
    const v = this.resolution = new Xt(this, u, f, l);
    v.addEventListener("change", (m) => this.setSize(v.baseWidth, v.baseHeight)), this.bokehScale = o;
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
    const e = this.camera, t = e.position.distanceTo(n);
    return Ya(-t, e.near, e.far);
  }
  setDepthTexture(n, e = jn) {
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
    this.cocPass.initialize(n, e, t), this.maskPass.initialize(n, e, t), this.bokehNearBasePass.initialize(n, e, t), this.bokehNearFillPass.initialize(n, e, t), this.bokehFarBasePass.initialize(n, e, t), this.bokehFarFillPass.initialize(n, e, t), this.blurPass.initialize(n, e, gt), n.capabilities.logarithmicDepthBuffer && (this.cocPass.fullscreenMaterial.defines.LOG_DEPTH = "1"), t !== void 0 && (this.renderTarget.texture.type = t, this.renderTargetNear.texture.type = t, this.renderTargetFar.texture.type = t, this.renderTargetMasked.texture.type = t, n !== null && n.outputColorSpace === We && (this.renderTarget.texture.colorSpace = We, this.renderTargetNear.texture.colorSpace = We, this.renderTargetFar.texture.colorSpace = We, this.renderTargetMasked.texture.colorSpace = We));
  }
}, qv = class extends $t {
  constructor(n, e, t = null) {
    super("RenderPass", n, e), this.needsSwap = false, this.clearPass = new Lc(), this.overrideMaterialManager = t === null ? null : new Bl(t), this.ignoreBackground = false, this.skipShadowMapUpdate = false, this.selection = null;
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
    n !== null ? e !== null ? e.setMaterial(n) : this.overrideMaterialManager = new Bl(n) : e !== null && (e.dispose(), this.overrideMaterialManager = null);
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
    const r = this.scene, a = this.camera, o = this.selection, l = a.layers.mask, c = r.background, h = n.shadowMap.autoUpdate, u = this.renderToScreen ? null : e;
    o !== null && a.layers.set(o.getLayer()), this.skipShadowMapUpdate && (n.shadowMap.autoUpdate = false), (this.ignoreBackground || this.clearPass.overrideClearColor !== null) && (r.background = null), this.clearPass.enabled && this.clearPass.render(n, e), n.setRenderTarget(u), this.overrideMaterialManager !== null ? this.overrideMaterialManager.render(n, r, a) : n.render(r, a), a.layers.mask = l, r.background = c, n.shadowMap.autoUpdate = h;
  }
}, cv = `#include <common>
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
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
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
}`, hv = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}", uv = class extends bt {
  constructor(n, e, t, i, s = false) {
    super({ name: "EffectMaterial", defines: { THREE_REVISION: "180".replace(/\D+/g, ""), DEPTH_PACKING: "0", ENCODE_OUTPUT: "1" }, uniforms: { inputBuffer: new Re(null), depthBuffer: new Re(null), resolution: new Re(new j()), texelSize: new Re(new j()), cameraNear: new Re(0.3), cameraFar: new Re(1e3), aspect: new Re(1), time: new Re(0) }, blending: At, toneMapped: false, depthWrite: false, depthTest: false, dithering: s }), n && this.setShaderParts(n), e && this.setDefines(e), t && this.setUniforms(t), this.copyCameraSettings(i);
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
  setDepthBuffer(n, e = jn) {
    this.depthBuffer = n, this.depthPacking = e;
  }
  setShaderData(n) {
    this.setShaderParts(n.shaderParts), this.setDefines(n.defines), this.setUniforms(n.uniforms), this.setExtensions(n.extensions);
  }
  setShaderParts(n) {
    return this.fragmentShader = cv.replace(qe.FRAGMENT_HEAD, n.get(qe.FRAGMENT_HEAD) || "").replace(qe.FRAGMENT_MAIN_UV, n.get(qe.FRAGMENT_MAIN_UV) || "").replace(qe.FRAGMENT_MAIN_IMAGE, n.get(qe.FRAGMENT_MAIN_IMAGE) || ""), this.vertexShader = hv.replace(qe.VERTEX_HEAD, n.get(qe.VERTEX_HEAD) || "").replace(qe.VERTEX_MAIN_SUPPORT, n.get(qe.VERTEX_MAIN_SUPPORT) || ""), this.needsUpdate = true, this;
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
    n && (this.uniforms.cameraNear.value = n.near, this.uniforms.cameraFar.value = n.far, n instanceof Vt ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = true);
  }
  setSize(n, e) {
    const t = this.uniforms;
    t.resolution.value.set(n, e), t.texelSize.value.set(1 / n, 1 / e), t.aspect.value = n / e;
  }
  static get Section() {
    return qe;
  }
};
function Hl(n, e, t) {
  for (const i of e) {
    const s = "$1" + n + i.charAt(0).toUpperCase() + i.slice(1), r = new RegExp("([^\\.])(\\b" + i + "\\b)", "g");
    for (const a of t.entries()) a[1] !== null && t.set(a[0], a[1].replace(r, s));
  }
}
function fv(n, e, t) {
  let i = e.getFragmentShader(), s = e.getVertexShader();
  const r = i !== void 0 && /mainImage/.test(i), a = i !== void 0 && /mainUv/.test(i);
  if (t.attributes |= e.getAttributes(), i === void 0) throw new Error(`Missing fragment shader (${e.name})`);
  if (a && (t.attributes & Ln.CONVOLUTION) !== 0) throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);
  if (!r && !a) throw new Error(`Could not find mainImage or mainUv function (${e.name})`);
  {
    const o = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g, l = t.shaderParts;
    let c = l.get(qe.FRAGMENT_HEAD) || "", h = l.get(qe.FRAGMENT_MAIN_UV) || "", u = l.get(qe.FRAGMENT_MAIN_IMAGE) || "", f = l.get(qe.VERTEX_HEAD) || "", d = l.get(qe.VERTEX_MAIN_SUPPORT) || "";
    const g = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
    if (a && (h += `	${n}MainUv(UV);
`, t.uvTransformation = true), s !== null && /mainSupport/.test(s)) {
      const b = /mainSupport *\([\w\s]*?uv\s*?\)/.test(s);
      d += `	${n}MainSupport(`, d += b ? `vUv);
` : `);
`;
      for (const E of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)) for (const S of E[1].split(/\s*,\s*/)) t.varyings.add(S), g.add(S), v.add(S);
      for (const E of s.matchAll(o)) v.add(E[1]);
    }
    for (const b of i.matchAll(o)) v.add(b[1]);
    for (const b of e.defines.keys()) v.add(b.replace(/\([\w\s,]*\)/g, ""));
    for (const b of e.uniforms.keys()) v.add(b);
    v.delete("while"), v.delete("for"), v.delete("if"), e.uniforms.forEach((b, E) => t.uniforms.set(n + E.charAt(0).toUpperCase() + E.slice(1), b)), e.defines.forEach((b, E) => t.defines.set(n + E.charAt(0).toUpperCase() + E.slice(1), b));
    const m = /* @__PURE__ */ new Map([["fragment", i], ["vertex", s]]);
    Hl(n, v, t.defines), Hl(n, v, m), i = m.get("fragment"), s = m.get("vertex");
    const p = e.blendMode;
    if (t.blendModes.set(p.blendFunction, p), r) {
      e.inputColorSpace !== null && e.inputColorSpace !== t.colorSpace && (u += e.inputColorSpace === We ? `color0 = sRGBTransferOETF(color0);
	` : `color0 = sRGBToLinear(color0);
	`), e.outputColorSpace !== ln ? t.colorSpace = e.outputColorSpace : e.inputColorSpace !== null && (t.colorSpace = e.inputColorSpace);
      const b = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
      u += `${n}MainImage(color0, UV, `, (t.attributes & Ln.DEPTH) !== 0 && b.test(i) && (u += "depth, ", t.readDepth = true), u += `color1);
	`;
      const E = n + "BlendOpacity";
      t.uniforms.set(E, p.opacity), u += `color0 = blend${p.blendFunction}(color0, color1, ${E});

	`, c += `uniform float ${E};

`;
    }
    if (c += i + `
`, s !== null && (f += s + `
`), l.set(qe.FRAGMENT_HEAD, c), l.set(qe.FRAGMENT_MAIN_UV, h), l.set(qe.FRAGMENT_MAIN_IMAGE, u), l.set(qe.VERTEX_HEAD, f), l.set(qe.VERTEX_MAIN_SUPPORT, d), e.extensions !== null) for (const b of e.extensions) t.extensions.add(b);
  }
}
var Zv = class extends $t {
  constructor(n, ...e) {
    super("EffectPass"), this.fullscreenMaterial = new uv(null, null, null, n), this.listener = (t) => this.handleEvent(t), this.effects = [], this.setEffects(e), this.skipRendering = false, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY, this.timeScale = 1;
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
    const n = new o_();
    let e = 0;
    for (const a of this.effects) if (a.blendMode.blendFunction === ke.DST) n.attributes |= a.getAttributes() & Ln.DEPTH;
    else {
      if ((n.attributes & a.getAttributes() & Ln.CONVOLUTION) !== 0) throw new Error(`Convolution effects cannot be merged (${a.name})`);
      fv("e" + e++, a, n);
    }
    let t = n.shaderParts.get(qe.FRAGMENT_HEAD), i = n.shaderParts.get(qe.FRAGMENT_MAIN_IMAGE), s = n.shaderParts.get(qe.FRAGMENT_MAIN_UV);
    const r = /\bblend\b/g;
    for (const a of n.blendModes.values()) t += a.getShaderCode().replace(r, `blend${a.blendFunction}`) + `
`;
    (n.attributes & Ln.DEPTH) !== 0 ? (n.readDepth && (i = `float depth = readDepth(UV);

	` + i), this.needsDepthTexture = this.getDepthTexture() === null) : this.needsDepthTexture = false, n.colorSpace === We && (i += `color0 = sRGBToLinear(color0);
	`), n.uvTransformation ? (s = `vec2 transformedUv = vUv;
` + s, n.defines.set("UV", "transformedUv")) : n.defines.set("UV", "vUv"), n.shaderParts.set(qe.FRAGMENT_HEAD, t), n.shaderParts.set(qe.FRAGMENT_MAIN_IMAGE, i), n.shaderParts.set(qe.FRAGMENT_MAIN_UV, s);
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
  setDepthTexture(n, e = jn) {
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
    this.updateMaterial(), t !== void 0 && t !== gt && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
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
}, tr = function() {
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
  var s = (performance || Date).now(), r = s, a = 0, o = t(new tr.Panel("FPS", "#0ff", "#002")), l = t(new tr.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var c = t(new tr.Panel("MB", "#f08", "#201"));
  return i(0), { REVISION: 16, dom: e, addPanel: t, showPanel: i, begin: function() {
    s = (performance || Date).now();
  }, end: function() {
    a++;
    var h = (performance || Date).now();
    if (l.update(h - s, 200), h >= r + 1e3 && (o.update(a * 1e3 / (h - r), 100), r = h, a = 0, c)) {
      var u = performance.memory;
      c.update(u.usedJSHeapSize / 1048576, u.jsHeapSizeLimit / 1048576);
    }
    return h;
  }, update: function() {
    s = this.end();
  }, domElement: e, setMode: i };
};
tr.Panel = function(n, e, t) {
  var i = 1 / 0, s = 0, r = Math.round, a = r(window.devicePixelRatio || 1), o = 80 * a, l = 48 * a, c = 3 * a, h = 2 * a, u = 3 * a, f = 15 * a, d = 74 * a, g = 30 * a, v = document.createElement("canvas");
  v.width = o, v.height = l, v.style.cssText = "width:80px;height:48px";
  var m = v.getContext("2d");
  return m.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", m.textBaseline = "top", m.fillStyle = t, m.fillRect(0, 0, o, l), m.fillStyle = e, m.fillText(n, c, h), m.fillRect(u, f, d, g), m.fillStyle = t, m.globalAlpha = 0.9, m.fillRect(u, f, d, g), { dom: v, update: function(p, b) {
    i = Math.min(i, p), s = Math.max(s, p), m.fillStyle = t, m.globalAlpha = 1, m.fillRect(0, 0, o, f), m.fillStyle = e, m.fillText(r(p) + " " + n + " (" + r(i) + "-" + r(s) + ")", c, h), m.drawImage(v, u + a, f, d - a, g, u, f, d - a, g), m.fillRect(u + d - a, f, a, g), m.fillStyle = t, m.globalAlpha = 0.9, m.fillRect(u + d - a, f, a, r((1 - p / b) * g));
  } };
};
const kl = { type: "change" }, uo = { type: "start" }, Bc = { type: "end" }, Ks = new hs(), Gl = new Dn(), dv = Math.cos(70 * qh.DEG2RAD), _t = new R(), Nt = 2 * Math.PI, et = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, jr = 1e-6;
class Kv extends Ac {
  constructor(e, t = null) {
    super(e, t), this.state = et.NONE, this.target = new R(), this.cursor = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Ai.ROTATE, MIDDLE: Ai.DOLLY, RIGHT: Ai.PAN }, this.touches = { ONE: Ti.ROTATE, TWO: Ti.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new R(), this._lastQuaternion = new Kn(), this._lastTargetPosition = new R(), this._quat = new Kn().setFromUnitVectors(e.up, new R(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new ul(), this._sphericalDelta = new ul(), this._scale = 1, this._panOffset = new R(), this._rotateStart = new j(), this._rotateEnd = new j(), this._rotateDelta = new j(), this._panStart = new j(), this._panEnd = new j(), this._panDelta = new j(), this._dollyStart = new j(), this._dollyEnd = new j(), this._dollyDelta = new j(), this._dollyDirection = new R(), this._mouse = new j(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = mv.bind(this), this._onPointerDown = pv.bind(this), this._onPointerUp = gv.bind(this), this._onContextMenu = Ev.bind(this), this._onMouseWheel = xv.bind(this), this._onKeyDown = Sv.bind(this), this._onTouchStart = Mv.bind(this), this._onTouchMove = yv.bind(this), this._onMouseDown = _v.bind(this), this._onMouseMove = vv.bind(this), this._interceptControlDown = Tv.bind(this), this._interceptControlUp = bv.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  connect(e) {
    super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(kl), this.update(), this.state = et.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    _t.copy(t).sub(this.target), _t.applyQuaternion(this._quat), this._spherical.setFromVector3(_t), this.autoRotate && this.state === et.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let i = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(i) && isFinite(s) && (i < -Math.PI ? i += Nt : i > Math.PI && (i -= Nt), s < -Math.PI ? s += Nt : s > Math.PI && (s -= Nt), i <= s ? this._spherical.theta = Math.max(i, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (i + s) / 2 ? Math.max(i, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (_t.setFromSpherical(this._spherical), _t.applyQuaternion(this._quatInverse), t.copy(this.target).add(_t), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = _t.length();
        a = this._clampDistance(o * this._scale);
        const l = o - a;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const o = new R(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new R(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(o), this.object.updateMatrixWorld(), a = _t.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (Ks.origin.copy(this.object.position), Ks.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Ks.direction)) < dv ? this.object.lookAt(this.target) : (Gl.setFromNormalAndCoplanarPoint(this.object.up, this.target), Ks.intersectPlane(Gl, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > jr || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > jr || this._lastTargetPosition.distanceToSquared(this.target) > jr ? (this.dispatchEvent(kl), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? Nt / 60 * this.autoRotateSpeed * e : Nt / 60 / 60 * this.autoRotateSpeed;
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
    _t.setFromMatrixColumn(t, 0), _t.multiplyScalar(-e), this._panOffset.add(_t);
  }
  _panUp(e, t) {
    this.screenSpacePanning === true ? _t.setFromMatrixColumn(t, 1) : (_t.setFromMatrixColumn(t, 0), _t.crossVectors(this.object.up, _t)), _t.multiplyScalar(e), this._panOffset.add(_t);
  }
  _pan(e, t) {
    const i = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      _t.copy(s).sub(this.target);
      let r = _t.length();
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
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Nt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Nt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
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
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(Nt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = true;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-Nt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = true;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(Nt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = true;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-Nt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = true;
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
    this._rotateLeft(Nt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Nt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
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
    t === void 0 && (t = new j(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
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
function pv(n) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(n.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(n) && (this._addPointer(n), n.pointerType === "touch" ? this._onTouchStart(n) : this._onMouseDown(n)));
}
function mv(n) {
  this.enabled !== false && (n.pointerType === "touch" ? this._onTouchMove(n) : this._onMouseMove(n));
}
function gv(n) {
  switch (this._removePointer(n), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(n.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Bc), this.state = et.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function _v(n) {
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
    case Ai.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(n), this.state = et.DOLLY;
      break;
    case Ai.ROTATE:
      if (n.ctrlKey || n.metaKey || n.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(n), this.state = et.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(n), this.state = et.ROTATE;
      }
      break;
    case Ai.PAN:
      if (n.ctrlKey || n.metaKey || n.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(n), this.state = et.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(n), this.state = et.PAN;
      }
      break;
    default:
      this.state = et.NONE;
  }
  this.state !== et.NONE && this.dispatchEvent(uo);
}
function vv(n) {
  switch (this.state) {
    case et.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(n);
      break;
    case et.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(n);
      break;
    case et.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(n);
      break;
  }
}
function xv(n) {
  this.enabled === false || this.enableZoom === false || this.state !== et.NONE || (n.preventDefault(), this.dispatchEvent(uo), this._handleMouseWheel(this._customWheelEvent(n)), this.dispatchEvent(Bc));
}
function Sv(n) {
  this.enabled !== false && this._handleKeyDown(n);
}
function Mv(n) {
  switch (this._trackPointer(n), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Ti.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(n), this.state = et.TOUCH_ROTATE;
          break;
        case Ti.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(n), this.state = et.TOUCH_PAN;
          break;
        default:
          this.state = et.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Ti.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(n), this.state = et.TOUCH_DOLLY_PAN;
          break;
        case Ti.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(n), this.state = et.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = et.NONE;
      }
      break;
    default:
      this.state = et.NONE;
  }
  this.state !== et.NONE && this.dispatchEvent(uo);
}
function yv(n) {
  switch (this._trackPointer(n), this.state) {
    case et.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(n), this.update();
      break;
    case et.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(n), this.update();
      break;
    case et.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(n), this.update();
      break;
    case et.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(n), this.update();
      break;
    default:
      this.state = et.NONE;
  }
}
function Ev(n) {
  this.enabled !== false && n.preventDefault();
}
function Tv(n) {
  n.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function bv(n) {
  n.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
const yi = new rn(0, 0, 0, "YXZ"), Ei = new R(), Av = { type: "change" }, wv = { type: "lock" }, Rv = { type: "unlock" }, Vl = 2e-3, Wl = Math.PI / 2;
class Jv extends Ac {
  constructor(e, t = null) {
    super(e, t), this.isLocked = false, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.pointerSpeed = 1, this._onMouseMove = Cv.bind(this), this._onPointerlockChange = Pv.bind(this), this._onPointerlockError = Dv.bind(this), this.domElement !== null && this.connect(this.domElement);
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
    Ei.setFromMatrixColumn(t.matrix, 0), Ei.crossVectors(t.up, Ei), t.position.addScaledVector(Ei, e);
  }
  moveRight(e) {
    if (this.enabled === false) return;
    const t = this.object;
    Ei.setFromMatrixColumn(t.matrix, 0), t.position.addScaledVector(Ei, e);
  }
  lock(e = false) {
    this.domElement.requestPointerLock({ unadjustedMovement: e });
  }
  unlock() {
    this.domElement.ownerDocument.exitPointerLock();
  }
}
function Cv(n) {
  if (this.enabled === false || this.isLocked === false) return;
  const e = this.object;
  yi.setFromQuaternion(e.quaternion), yi.y -= n.movementX * Vl * this.pointerSpeed, yi.x -= n.movementY * Vl * this.pointerSpeed, yi.x = Math.max(Wl - this.maxPolarAngle, Math.min(Wl - this.minPolarAngle, yi.x)), e.quaternion.setFromEuler(yi), this.dispatchEvent(Av);
}
function Pv() {
  this.domElement.ownerDocument.pointerLockElement === this.domElement ? (this.dispatchEvent(wv), this.isLocked = true) : (this.dispatchEvent(Rv), this.isLocked = false);
}
function Dv() {
  console.error("THREE.PointerLockControls: Unable to use Pointer Lock API");
}
export {
  yu as $,
  ta as A,
  Bt as B,
  Fv as C,
  Wt as D,
  Wv as E,
  Ot as F,
  To as G,
  tu as H,
  Lv as I,
  $t as J,
  Pt as K,
  Ft as L,
  jt as M,
  Yt as N,
  bc as O,
  Vt as P,
  sn as Q,
  qv as R,
  Vo as S,
  vt as T,
  Re as U,
  j as V,
  Vv as W,
  cs as X,
  Ja as Y,
  gt as Z,
  qn as _,
  lr as a,
  ca as a0,
  Bv as a1,
  ln as a2,
  Nn as a3,
  Zn as a4,
  Yv as a5,
  Xv as a6,
  qc as a7,
  tr as a8,
  zv as a9,
  Hv as aa,
  Kv as ab,
  Jv as ac,
  Kn as ad,
  Ai as ae,
  Tt as af,
  Iv as ag,
  dc as ah,
  bt as b,
  Ge as c,
  Zv as d,
  Ic as e,
  kv as f,
  We as g,
  R as h,
  Ru as i,
  Nv as j,
  Us as k,
  Gv as l,
  qh as m,
  ac as n,
  Ec as o,
  ao as p,
  Ov as q,
  wu as r,
  je as s,
  Dn as t,
  Mu as u,
  Uv as v,
  Vu as w,
  il as x,
  yc as y,
  us as z
};
