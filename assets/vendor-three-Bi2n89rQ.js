/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Bi = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Oi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, wh = 0, Vo = 1, Ch = 2, hr = 1, Ph = 2, ls = 3, Dn = 0, Ut = 1, Kt = 2, It = 0, zi = 1, Wo = 2, Xo = 3, Yo = 4, Dh = 5, ti = 100, Uh = 101, Ih = 102, Lh = 103, Nh = 104, Fh = 200, Oh = 201, Bh = 202, zh = 203, Ma = 204, Ea = 205, Hh = 206, kh = 207, Gh = 208, Vh = 209, Wh = 210, Xh = 211, Yh = 212, qh = 213, Zh = 214, ya = 0, vr = 1, Ta = 2, Gi = 3, ba = 4, Aa = 5, Ra = 6, wa = 7, xc = 0, Kh = 1, Jh = 2, vn = 0, Sc = 1, Mc = 2, Ec = 3, yc = 4, Tc = 5, bc = 6, Ac = 7, Rc = 300, ri = 301, Vi = 302, Lr = 303, Nr = 304, Ar = 306, Ca = 1e3, Cn = 1001, Pa = 1002, Nt = 1003, $h = 1004, Ps = 1005, Mt = 1006, Fr = 1007, ii = 1008, ct = 1009, wc = 1010, Cc = 1011, _s = 1012, _o = 1013, Sn = 1014, tn = 1015, Un = 1016, vo = 1017, xo = 1018, Wi = 1020, Pc = 35902, Dc = 35899, Uc = 1021, Ic = 1022, ln = 1023, In = 1026, Yn = 1027, So = 1028, Mo = 1029, ai = 1030, Eo = 1031, yo = 1033, ur = 33776, fr = 33777, dr = 33778, pr = 33779, Da = 35840, Ua = 35841, Ia = 35842, La = 35843, Na = 36196, Fa = 37492, Oa = 37496, Ba = 37488, za = 37489, xr = 37490, Ha = 37491, ka = 37808, Ga = 37809, Va = 37810, Wa = 37811, Xa = 37812, Ya = 37813, qa = 37814, Za = 37815, Ka = 37816, Ja = 37817, $a = 37818, Qa = 37819, ja = 37820, eo = 37821, to = 36492, no = 36494, io = 36495, so = 36283, ro = 36284, Sr = 36285, ao = 36286, ci = 3200, oo = 0, Qh = 1, gn = "", Xe = "srgb", Xi = "srgb-linear", Mr = "linear", Qe = "srgb", pi = 7680, qo = 519, jh = 512, eu = 513, tu = 514, To = 515, nu = 516, iu = 517, bo = 518, su = 519, lo = 35044, Zo = "300 es", _n = 2e3, vs = 2001;
function ru(n) {
  for (let e = n.length - 1; e >= 0; --e) if (n[e] >= 65535) return true;
  return false;
}
function xs(n) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", n);
}
function au() {
  const n = xs("canvas");
  return n.style.display = "block", n;
}
const Ko = {};
function Er(...n) {
  const e = "THREE." + n.shift();
  console.log(e, ...n);
}
function Lc(n) {
  const e = n[0];
  if (typeof e == "string" && e.startsWith("TSL:")) {
    const t = n[1];
    t && t.isStackTrace ? n[0] += " " + t.getLocation() : n[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return n;
}
function Ce(...n) {
  n = Lc(n);
  const e = "THREE." + n.shift();
  {
    const t = n[0];
    t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...n);
  }
}
function ke(...n) {
  n = Lc(n);
  const e = "THREE." + n.shift();
  {
    const t = n[0];
    t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...n);
  }
}
function Hi(...n) {
  const e = n.join(" ");
  e in Ko || (Ko[e] = true, Ce(...n));
}
function ou(n, e, t) {
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
const lu = { [ya]: vr, [Ta]: Ra, [ba]: wa, [Gi]: Aa, [vr]: ya, [Ra]: Ta, [wa]: ba, [Aa]: Gi };
class cn {
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
const Bt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Jo = 1234567;
const us = Math.PI / 180, Ss = 180 / Math.PI;
function xn() {
  const n = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (Bt[n & 255] + Bt[n >> 8 & 255] + Bt[n >> 16 & 255] + Bt[n >> 24 & 255] + "-" + Bt[e & 255] + Bt[e >> 8 & 255] + "-" + Bt[e >> 16 & 15 | 64] + Bt[e >> 24 & 255] + "-" + Bt[t & 63 | 128] + Bt[t >> 8 & 255] + "-" + Bt[t >> 16 & 255] + Bt[t >> 24 & 255] + Bt[i & 255] + Bt[i >> 8 & 255] + Bt[i >> 16 & 255] + Bt[i >> 24 & 255]).toLowerCase();
}
function Fe(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function Ao(n, e) {
  return (n % e + e) % e;
}
function cu(n, e, t, i, s) {
  return i + (n - e) * (s - i) / (t - e);
}
function hu(n, e, t) {
  return n !== e ? (t - n) / (e - n) : 0;
}
function fs(n, e, t) {
  return (1 - t) * n + t * e;
}
function uu(n, e, t, i) {
  return fs(n, e, 1 - Math.exp(-t * i));
}
function fu(n, e = 1) {
  return e - Math.abs(Ao(n, e * 2) - e);
}
function du(n, e, t) {
  return n <= e ? 0 : n >= t ? 1 : (n = (n - e) / (t - e), n * n * (3 - 2 * n));
}
function pu(n, e, t) {
  return n <= e ? 0 : n >= t ? 1 : (n = (n - e) / (t - e), n * n * n * (n * (n * 6 - 15) + 10));
}
function mu(n, e) {
  return n + Math.floor(Math.random() * (e - n + 1));
}
function gu(n, e) {
  return n + Math.random() * (e - n);
}
function _u(n) {
  return n * (0.5 - Math.random());
}
function vu(n) {
  n !== void 0 && (Jo = n);
  let e = Jo += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function xu(n) {
  return n * us;
}
function Su(n) {
  return n * Ss;
}
function Mu(n) {
  return (n & n - 1) === 0 && n !== 0;
}
function Eu(n) {
  return Math.pow(2, Math.ceil(Math.log(n) / Math.LN2));
}
function yu(n) {
  return Math.pow(2, Math.floor(Math.log(n) / Math.LN2));
}
function Tu(n, e, t, i, s) {
  const r = Math.cos, a = Math.sin, o = r(t / 2), l = a(t / 2), c = r((e + i) / 2), h = a((e + i) / 2), f = r((e - i) / 2), u = a((e - i) / 2), d = r((i - e) / 2), g = a((i - e) / 2);
  switch (s) {
    case "XYX":
      n.set(o * h, l * f, l * u, o * c);
      break;
    case "YZY":
      n.set(l * u, o * h, l * f, o * c);
      break;
    case "ZXZ":
      n.set(l * f, l * u, o * h, o * c);
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
      Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s);
  }
}
function on(n, e) {
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
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
function je(n, e) {
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
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
const bu = { DEG2RAD: us, RAD2DEG: Ss, generateUUID: xn, clamp: Fe, euclideanModulo: Ao, mapLinear: cu, inverseLerp: hu, lerp: fs, damp: uu, pingpong: fu, smoothstep: du, smootherstep: pu, randInt: mu, randFloat: gu, randFloatSpread: _u, seededRandom: vu, degToRad: xu, radToDeg: Su, isPowerOfTwo: Mu, ceilPowerOfTwo: Eu, floorPowerOfTwo: yu, setQuaternionFromProperEuler: Tu, normalize: je, denormalize: on };
const _j = class _j {
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
    return this.x = Fe(this.x, e.x, t.x), this.y = Fe(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = Fe(this.x, e, t), this.y = Fe(this.y, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Fe(i, e, t));
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
    return Math.acos(Fe(i, -1, 1));
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
_j.prototype.isVector2 = true;
let j = _j;
class Kn {
  constructor(e = 0, t = 0, i = 0, s = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = i, this._w = s;
  }
  static slerpFlat(e, t, i, s, r, a, o) {
    let l = i[s + 0], c = i[s + 1], h = i[s + 2], f = i[s + 3], u = r[a + 0], d = r[a + 1], g = r[a + 2], M = r[a + 3];
    if (f !== M || l !== u || c !== d || h !== g) {
      let p = l * u + c * d + h * g + f * M;
      p < 0 && (u = -u, d = -d, g = -g, M = -M, p = -p);
      let m = 1 - o;
      if (p < 0.9995) {
        const E = Math.acos(p), y = Math.sin(E);
        m = Math.sin(m * E) / y, o = Math.sin(o * E) / y, l = l * m + u * o, c = c * m + d * o, h = h * m + g * o, f = f * m + M * o;
      } else {
        l = l * m + u * o, c = c * m + d * o, h = h * m + g * o, f = f * m + M * o;
        const E = 1 / Math.sqrt(l * l + c * c + h * h + f * f);
        l *= E, c *= E, h *= E, f *= E;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = f;
  }
  static multiplyQuaternionsFlat(e, t, i, s, r, a) {
    const o = i[s], l = i[s + 1], c = i[s + 2], h = i[s + 3], f = r[a], u = r[a + 1], d = r[a + 2], g = r[a + 3];
    return e[t] = o * g + h * f + l * d - c * u, e[t + 1] = l * g + h * u + c * f - o * d, e[t + 2] = c * g + h * d + o * u - l * f, e[t + 3] = h * g - o * f - l * u - c * d, e;
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
    const i = e._x, s = e._y, r = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(i / 2), h = o(s / 2), f = o(r / 2), u = l(i / 2), d = l(s / 2), g = l(r / 2);
    switch (a) {
      case "XYZ":
        this._x = u * h * f + c * d * g, this._y = c * d * f - u * h * g, this._z = c * h * g + u * d * f, this._w = c * h * f - u * d * g;
        break;
      case "YXZ":
        this._x = u * h * f + c * d * g, this._y = c * d * f - u * h * g, this._z = c * h * g - u * d * f, this._w = c * h * f + u * d * g;
        break;
      case "ZXY":
        this._x = u * h * f - c * d * g, this._y = c * d * f + u * h * g, this._z = c * h * g + u * d * f, this._w = c * h * f - u * d * g;
        break;
      case "ZYX":
        this._x = u * h * f - c * d * g, this._y = c * d * f + u * h * g, this._z = c * h * g - u * d * f, this._w = c * h * f + u * d * g;
        break;
      case "YZX":
        this._x = u * h * f + c * d * g, this._y = c * d * f + u * h * g, this._z = c * h * g - u * d * f, this._w = c * h * f - u * d * g;
        break;
      case "XZY":
        this._x = u * h * f - c * d * g, this._y = c * d * f - u * h * g, this._z = c * h * g + u * d * f, this._w = c * h * f + u * d * g;
        break;
      default:
        Ce("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const i = t / 2, s = Math.sin(i);
    return this._x = e.x * s, this._y = e.y * s, this._z = e.z * s, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, i = t[0], s = t[4], r = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], f = t[10], u = i + o + f;
    if (u > 0) {
      const d = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / d, this._x = (h - l) * d, this._y = (r - c) * d, this._z = (a - s) * d;
    } else if (i > o && i > f) {
      const d = 2 * Math.sqrt(1 + i - o - f);
      this._w = (h - l) / d, this._x = 0.25 * d, this._y = (s + a) / d, this._z = (r + c) / d;
    } else if (o > f) {
      const d = 2 * Math.sqrt(1 + o - i - f);
      this._w = (r - c) / d, this._x = (s + a) / d, this._y = 0.25 * d, this._z = (l + h) / d;
    } else {
      const d = 2 * Math.sqrt(1 + f - i - o);
      this._w = (a - s) / d, this._x = (r + c) / d, this._y = (l + h) / d, this._z = 0.25 * d;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return i < 1e-8 ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Fe(this.dot(e), -1, 1)));
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
    let i = e._x, s = e._y, r = e._z, a = e._w, o = this.dot(e);
    o < 0 && (i = -i, s = -s, r = -r, a = -a, o = -o);
    let l = 1 - t;
    if (o < 0.9995) {
      const c = Math.acos(o), h = Math.sin(c);
      l = Math.sin(l * c) / h, t = Math.sin(t * c) / h, this._x = this._x * l + i * t, this._y = this._y * l + s * t, this._z = this._z * l + r * t, this._w = this._w * l + a * t, this._onChangeCallback();
    } else this._x = this._x * l + i * t, this._y = this._y * l + s * t, this._z = this._z * l + r * t, this._w = this._w * l + a * t, this.normalize();
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
const _C = class _C {
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
    return this.applyQuaternion($o.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion($o.setFromAxisAngle(e, t));
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
    const t = this.x, i = this.y, s = this.z, r = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * s - o * i), h = 2 * (o * t - r * s), f = 2 * (r * i - a * t);
    return this.x = t + l * c + a * f - o * h, this.y = i + l * h + o * c - r * f, this.z = s + l * f + r * h - a * c, this;
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
    return this.x = Fe(this.x, e.x, t.x), this.y = Fe(this.y, e.y, t.y), this.z = Fe(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = Fe(this.x, e, t), this.y = Fe(this.y, e, t), this.z = Fe(this.z, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Fe(i, e, t));
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
    return Or.copy(this).projectOnVector(e), this.sub(Or);
  }
  reflect(e) {
    return this.sub(Or.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(Fe(i, -1, 1));
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
_C.prototype.isVector3 = true;
let C = _C;
const Or = new C(), $o = new Kn();
const _Ue = class _Ue {
  constructor(e, t, i, s, r, a, o, l, c) {
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, i, s, r, a, o, l, c);
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
    const i = e.elements, s = t.elements, r = this.elements, a = i[0], o = i[3], l = i[6], c = i[1], h = i[4], f = i[7], u = i[2], d = i[5], g = i[8], M = s[0], p = s[3], m = s[6], E = s[1], y = s[4], x = s[7], R = s[2], A = s[5], w = s[8];
    return r[0] = a * M + o * E + l * R, r[3] = a * p + o * y + l * A, r[6] = a * m + o * x + l * w, r[1] = c * M + h * E + f * R, r[4] = c * p + h * y + f * A, r[7] = c * m + h * x + f * w, r[2] = u * M + d * E + g * R, r[5] = u * p + d * y + g * A, r[8] = u * m + d * x + g * w, this;
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
    const e = this.elements, t = e[0], i = e[1], s = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], f = h * a - o * c, u = o * l - h * r, d = c * r - a * l, g = t * f + i * u + s * d;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / g;
    return e[0] = f * M, e[1] = (s * c - h * i) * M, e[2] = (o * i - s * a) * M, e[3] = u * M, e[4] = (h * t - s * l) * M, e[5] = (s * r - o * t) * M, e[6] = d * M, e[7] = (i * l - c * t) * M, e[8] = (a * t - i * r) * M, this;
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
    return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(Br.makeScale(e, t)), this;
  }
  rotate(e) {
    return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(Br.makeRotation(-e)), this;
  }
  translate(e, t) {
    return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(Br.makeTranslation(e, t)), this;
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
_Ue.prototype.isMatrix3 = true;
let Ue = _Ue;
const Br = new Ue(), Qo = new Ue().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), jo = new Ue().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Au() {
  const n = { enabled: true, workingColorSpace: Xi, spaces: {}, convert: function(s, r, a) {
    return this.enabled === false || r === a || !r || !a || (this.spaces[r].transfer === Qe && (s.r = Pn(s.r), s.g = Pn(s.g), s.b = Pn(s.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Qe && (s.r = ki(s.r), s.g = ki(s.g), s.b = ki(s.b))), s;
  }, workingToColorSpace: function(s, r) {
    return this.convert(s, this.workingColorSpace, r);
  }, colorSpaceToWorking: function(s, r) {
    return this.convert(s, r, this.workingColorSpace);
  }, getPrimaries: function(s) {
    return this.spaces[s].primaries;
  }, getTransfer: function(s) {
    return s === gn ? Mr : this.spaces[s].transfer;
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
    return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), n.workingToColorSpace(s, r);
  }, toWorkingColorSpace: function(s, r) {
    return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), n.colorSpaceToWorking(s, r);
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], i = [0.3127, 0.329];
  return n.define({ [Xi]: { primaries: e, whitePoint: i, transfer: Mr, toXYZ: Qo, fromXYZ: jo, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: Xe }, outputColorSpaceConfig: { drawingBufferColorSpace: Xe } }, [Xe]: { primaries: e, whitePoint: i, transfer: Qe, toXYZ: Qo, fromXYZ: jo, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: Xe } } }), n;
}
const Ge = Au();
function Pn(n) {
  return n < 0.04045 ? n * 0.0773993808 : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function ki(n) {
  return n < 31308e-7 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
let mi;
class Ru {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let i;
    if (e instanceof HTMLCanvasElement) i = e;
    else {
      mi === void 0 && (mi = xs("canvas")), mi.width = e.width, mi.height = e.height;
      const s = mi.getContext("2d");
      e instanceof ImageData ? s.putImageData(e, 0, 0) : s.drawImage(e, 0, 0, e.width, e.height), i = mi;
    }
    return i.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = xs("canvas");
      t.width = e.width, t.height = e.height;
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const s = i.getImageData(0, 0, e.width, e.height), r = s.data;
      for (let a = 0; a < r.length; a++) r[a] = Pn(r[a] / 255) * 255;
      return i.putImageData(s, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(Pn(t[i] / 255) * 255) : t[i] = Pn(t[i]);
      return { data: t, width: e.width, height: e.height };
    } else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let wu = 0;
class Ro {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: wu++ }), this.uuid = xn(), this.data = e, this.dataReady = true, this.version = 0;
  }
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
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
        for (let a = 0, o = s.length; a < o; a++) s[a].isDataTexture ? r.push(zr(s[a].image)) : r.push(zr(s[a]));
      } else r = zr(s);
      i.url = r;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function zr(n) {
  return typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap ? Ru.getDataURL(n) : n.data ? { data: Array.from(n.data), width: n.width, height: n.height, type: n.data.constructor.name } : (Ce("Texture: Unable to serialize Texture."), {});
}
let Cu = 0;
const Hr = new C();
class Rt extends cn {
  constructor(e = Rt.DEFAULT_IMAGE, t = Rt.DEFAULT_MAPPING, i = Cn, s = Cn, r = Mt, a = ii, o = ln, l = ct, c = Rt.DEFAULT_ANISOTROPY, h = gn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Cu++ }), this.uuid = xn(), this.name = "", this.source = new Ro(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = i, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new j(0, 0), this.repeat = new j(1, 1), this.center = new j(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ue(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0, this.normalized = false;
  }
  get width() {
    return this.source.getSize(Hr).x;
  }
  get height() {
    return this.source.getSize(Hr).y;
  }
  get depth() {
    return this.source.getSize(Hr).z;
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
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  setValues(e) {
    for (const t in e) {
      const i = e[t];
      if (i === void 0) {
        Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const s = this[t];
      if (s === void 0) {
        Ce(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      s && i && s.isVector2 && i.isVector2 || s && i && s.isVector3 && i.isVector3 || s && i && s.isMatrix3 && i.isMatrix3 ? s.copy(i) : this[t] = i;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const i = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, normalized: this.normalized, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), t || (e.textures[this.uuid] = i), i;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Rc) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case Ca:
        e.x = e.x - Math.floor(e.x);
        break;
      case Cn:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case Pa:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case Ca:
        e.y = e.y - Math.floor(e.y);
        break;
      case Cn:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case Pa:
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
Rt.DEFAULT_IMAGE = null;
Rt.DEFAULT_MAPPING = Rc;
Rt.DEFAULT_ANISOTROPY = 1;
const _lt = class _lt {
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
    const l = e.elements, c = l[0], h = l[4], f = l[8], u = l[1], d = l[5], g = l[9], M = l[2], p = l[6], m = l[10];
    if (Math.abs(h - u) < 0.01 && Math.abs(f - M) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(h + u) < 0.1 && Math.abs(f + M) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + d + m - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const y = (c + 1) / 2, x = (d + 1) / 2, R = (m + 1) / 2, A = (h + u) / 4, w = (f + M) / 4, v = (g + p) / 4;
      return y > x && y > R ? y < 0.01 ? (i = 0, s = 0.707106781, r = 0.707106781) : (i = Math.sqrt(y), s = A / i, r = w / i) : x > R ? x < 0.01 ? (i = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(x), i = A / s, r = v / s) : R < 0.01 ? (i = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(R), i = w / r, s = v / r), this.set(i, s, r, t), this;
    }
    let E = Math.sqrt((p - g) * (p - g) + (f - M) * (f - M) + (u - h) * (u - h));
    return Math.abs(E) < 1e-3 && (E = 1), this.x = (p - g) / E, this.y = (f - M) / E, this.z = (u - h) / E, this.w = Math.acos((c + d + m - 1) / 2), this;
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
    return this.x = Fe(this.x, e.x, t.x), this.y = Fe(this.y, e.y, t.y), this.z = Fe(this.z, e.z, t.z), this.w = Fe(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = Fe(this.x, e, t), this.y = Fe(this.y, e, t), this.z = Fe(this.z, e, t), this.w = Fe(this.w, e, t), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Fe(i, e, t));
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
_lt.prototype.isVector4 = true;
let lt = _lt;
class Pu extends cn {
  constructor(e = 1, t = 1, i = {}) {
    super(), i = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Mt, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false, useArrayDepthTexture: false }, i), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = i.depth, this.scissor = new lt(0, 0, e, t), this.scissorTest = false, this.viewport = new lt(0, 0, e, t), this.textures = [];
    const s = { width: e, height: t, depth: i.depth }, r = new Rt(s), a = i.count;
    for (let o = 0; o < a; o++) this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = true, this.textures[o].renderTarget = this;
    this._setTextureOptions(i), this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.resolveDepthBuffer = i.resolveDepthBuffer, this.resolveStencilBuffer = i.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = i.depthTexture, this.samples = i.samples, this.multiview = i.multiview, this.useArrayDepthTexture = i.useArrayDepthTexture;
  }
  _setTextureOptions(e = {}) {
    const t = { minFilter: Mt, generateMipmaps: false, flipY: false, internalFormat: null };
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
      this.textures[t].source = new Ro(s);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this.multiview = e.multiview, this.useArrayDepthTexture = e.useArrayDepthTexture, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Et extends Pu {
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), this.isWebGLRenderTarget = true;
  }
}
class Nc extends Rt {
  constructor(e = null, t = 1, i = 1, s = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: i, depth: s }, this.magFilter = Nt, this.minFilter = Nt, this.wrapR = Cn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Du extends Rt {
  constructor(e = null, t = 1, i = 1, s = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: i, depth: s }, this.magFilter = Nt, this.minFilter = Nt, this.wrapR = Cn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const _Ke = class _Ke {
  constructor(e, t, i, s, r, a, o, l, c, h, f, u, d, g, M, p) {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, i, s, r, a, o, l, c, h, f, u, d, g, M, p);
  }
  set(e, t, i, s, r, a, o, l, c, h, f, u, d, g, M, p) {
    const m = this.elements;
    return m[0] = e, m[4] = t, m[8] = i, m[12] = s, m[1] = r, m[5] = a, m[9] = o, m[13] = l, m[2] = c, m[6] = h, m[10] = f, m[14] = u, m[3] = d, m[7] = g, m[11] = M, m[15] = p, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new _Ke().fromArray(this.elements);
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
    const t = this.elements, i = e.elements, s = 1 / gi.setFromMatrixColumn(e, 0).length(), r = 1 / gi.setFromMatrixColumn(e, 1).length(), a = 1 / gi.setFromMatrixColumn(e, 2).length();
    return t[0] = i[0] * s, t[1] = i[1] * s, t[2] = i[2] * s, t[3] = 0, t[4] = i[4] * r, t[5] = i[5] * r, t[6] = i[6] * r, t[7] = 0, t[8] = i[8] * a, t[9] = i[9] * a, t[10] = i[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, i = e.x, s = e.y, r = e.z, a = Math.cos(i), o = Math.sin(i), l = Math.cos(s), c = Math.sin(s), h = Math.cos(r), f = Math.sin(r);
    if (e.order === "XYZ") {
      const u = a * h, d = a * f, g = o * h, M = o * f;
      t[0] = l * h, t[4] = -l * f, t[8] = c, t[1] = d + g * c, t[5] = u - M * c, t[9] = -o * l, t[2] = M - u * c, t[6] = g + d * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const u = l * h, d = l * f, g = c * h, M = c * f;
      t[0] = u + M * o, t[4] = g * o - d, t[8] = a * c, t[1] = a * f, t[5] = a * h, t[9] = -o, t[2] = d * o - g, t[6] = M + u * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const u = l * h, d = l * f, g = c * h, M = c * f;
      t[0] = u - M * o, t[4] = -a * f, t[8] = g + d * o, t[1] = d + g * o, t[5] = a * h, t[9] = M - u * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const u = a * h, d = a * f, g = o * h, M = o * f;
      t[0] = l * h, t[4] = g * c - d, t[8] = u * c + M, t[1] = l * f, t[5] = M * c + u, t[9] = d * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const u = a * l, d = a * c, g = o * l, M = o * c;
      t[0] = l * h, t[4] = M - u * f, t[8] = g * f + d, t[1] = f, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = d * f + g, t[10] = u - M * f;
    } else if (e.order === "XZY") {
      const u = a * l, d = a * c, g = o * l, M = o * c;
      t[0] = l * h, t[4] = -f, t[8] = c * h, t[1] = u * f + M, t[5] = a * h, t[9] = d * f - g, t[2] = g * f - d, t[6] = o * h, t[10] = M * f + u;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Uu, e, Iu);
  }
  lookAt(e, t, i) {
    const s = this.elements;
    return Yt.subVectors(e, t), Yt.lengthSq() === 0 && (Yt.z = 1), Yt.normalize(), Bn.crossVectors(i, Yt), Bn.lengthSq() === 0 && (Math.abs(i.z) === 1 ? Yt.x += 1e-4 : Yt.z += 1e-4, Yt.normalize(), Bn.crossVectors(i, Yt)), Bn.normalize(), Ds.crossVectors(Yt, Bn), s[0] = Bn.x, s[4] = Ds.x, s[8] = Yt.x, s[1] = Bn.y, s[5] = Ds.y, s[9] = Yt.y, s[2] = Bn.z, s[6] = Ds.z, s[10] = Yt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements, s = t.elements, r = this.elements, a = i[0], o = i[4], l = i[8], c = i[12], h = i[1], f = i[5], u = i[9], d = i[13], g = i[2], M = i[6], p = i[10], m = i[14], E = i[3], y = i[7], x = i[11], R = i[15], A = s[0], w = s[4], v = s[8], T = s[12], D = s[1], P = s[5], L = s[9], W = s[13], X = s[2], O = s[6], k = s[10], G = s[14], $ = s[3], ee = s[7], re = s[11], fe = s[15];
    return r[0] = a * A + o * D + l * X + c * $, r[4] = a * w + o * P + l * O + c * ee, r[8] = a * v + o * L + l * k + c * re, r[12] = a * T + o * W + l * G + c * fe, r[1] = h * A + f * D + u * X + d * $, r[5] = h * w + f * P + u * O + d * ee, r[9] = h * v + f * L + u * k + d * re, r[13] = h * T + f * W + u * G + d * fe, r[2] = g * A + M * D + p * X + m * $, r[6] = g * w + M * P + p * O + m * ee, r[10] = g * v + M * L + p * k + m * re, r[14] = g * T + M * W + p * G + m * fe, r[3] = E * A + y * D + x * X + R * $, r[7] = E * w + y * P + x * O + R * ee, r[11] = E * v + y * L + x * k + R * re, r[15] = E * T + y * W + x * G + R * fe, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[4], s = e[8], r = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], f = e[6], u = e[10], d = e[14], g = e[3], M = e[7], p = e[11], m = e[15], E = l * d - c * u, y = o * d - c * f, x = o * u - l * f, R = a * d - c * h, A = a * u - l * h, w = a * f - o * h;
    return t * (M * E - p * y + m * x) - i * (g * E - p * R + m * A) + s * (g * y - M * R + m * w) - r * (g * x - M * A + p * w);
  }
  determinantAffine() {
    const e = this.elements, t = e[0], i = e[4], s = e[8], r = e[1], a = e[5], o = e[9], l = e[2], c = e[6], h = e[10];
    return t * (a * h - o * c) - i * (r * h - o * l) + s * (r * c - a * l);
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
    const e = this.elements, t = e[0], i = e[1], s = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], f = e[9], u = e[10], d = e[11], g = e[12], M = e[13], p = e[14], m = e[15], E = t * o - i * a, y = t * l - s * a, x = t * c - r * a, R = i * l - s * o, A = i * c - r * o, w = s * c - r * l, v = h * M - f * g, T = h * p - u * g, D = h * m - d * g, P = f * p - u * M, L = f * m - d * M, W = u * m - d * p, X = E * W - y * L + x * P + R * D - A * T + w * v;
    if (X === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const O = 1 / X;
    return e[0] = (o * W - l * L + c * P) * O, e[1] = (s * L - i * W - r * P) * O, e[2] = (M * w - p * A + m * R) * O, e[3] = (u * A - f * w - d * R) * O, e[4] = (l * D - a * W - c * T) * O, e[5] = (t * W - s * D + r * T) * O, e[6] = (p * x - g * w - m * y) * O, e[7] = (h * w - u * x + d * y) * O, e[8] = (a * L - o * D + c * v) * O, e[9] = (i * D - t * L - r * v) * O, e[10] = (g * A - M * x + m * E) * O, e[11] = (f * x - h * A - d * E) * O, e[12] = (o * T - a * P - l * v) * O, e[13] = (t * P - i * T + s * v) * O, e[14] = (M * y - g * R - p * E) * O, e[15] = (h * R - f * y + u * E) * O, this;
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
    const s = this.elements, r = t._x, a = t._y, o = t._z, l = t._w, c = r + r, h = a + a, f = o + o, u = r * c, d = r * h, g = r * f, M = a * h, p = a * f, m = o * f, E = l * c, y = l * h, x = l * f, R = i.x, A = i.y, w = i.z;
    return s[0] = (1 - (M + m)) * R, s[1] = (d + x) * R, s[2] = (g - y) * R, s[3] = 0, s[4] = (d - x) * A, s[5] = (1 - (u + m)) * A, s[6] = (p + E) * A, s[7] = 0, s[8] = (g + y) * w, s[9] = (p - E) * w, s[10] = (1 - (u + M)) * w, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
  }
  decompose(e, t, i) {
    const s = this.elements;
    e.x = s[12], e.y = s[13], e.z = s[14];
    const r = this.determinantAffine();
    if (r === 0) return i.set(1, 1, 1), t.identity(), this;
    let a = gi.set(s[0], s[1], s[2]).length();
    const o = gi.set(s[4], s[5], s[6]).length(), l = gi.set(s[8], s[9], s[10]).length();
    r < 0 && (a = -a), sn.copy(this);
    const c = 1 / a, h = 1 / o, f = 1 / l;
    return sn.elements[0] *= c, sn.elements[1] *= c, sn.elements[2] *= c, sn.elements[4] *= h, sn.elements[5] *= h, sn.elements[6] *= h, sn.elements[8] *= f, sn.elements[9] *= f, sn.elements[10] *= f, t.setFromRotationMatrix(sn), i.x = a, i.y = o, i.z = l, this;
  }
  makePerspective(e, t, i, s, r, a, o = _n, l = false) {
    const c = this.elements, h = 2 * r / (t - e), f = 2 * r / (i - s), u = (t + e) / (t - e), d = (i + s) / (i - s);
    let g, M;
    if (l) g = r / (a - r), M = a * r / (a - r);
    else if (o === _n) g = -(a + r) / (a - r), M = -2 * a * r / (a - r);
    else if (o === vs) g = -a / (a - r), M = -a * r / (a - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = h, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = f, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = g, c[14] = M, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, i, s, r, a, o = _n, l = false) {
    const c = this.elements, h = 2 / (t - e), f = 2 / (i - s), u = -(t + e) / (t - e), d = -(i + s) / (i - s);
    let g, M;
    if (l) g = 1 / (a - r), M = a / (a - r);
    else if (o === _n) g = -2 / (a - r), M = -(a + r) / (a - r);
    else if (o === vs) g = -1 / (a - r), M = -r / (a - r);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = h, c[4] = 0, c[8] = 0, c[12] = u, c[1] = 0, c[5] = f, c[9] = 0, c[13] = d, c[2] = 0, c[6] = 0, c[10] = g, c[14] = M, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
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
_Ke.prototype.isMatrix4 = true;
let Ke = _Ke;
const gi = new C(), sn = new Ke(), Uu = new C(0, 0, 0), Iu = new C(1, 1, 1), Bn = new C(), Ds = new C(), Yt = new C(), el = new Ke(), tl = new Kn();
class Ln {
  constructor(e = 0, t = 0, i = 0, s = Ln.DEFAULT_ORDER) {
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
    const s = e.elements, r = s[0], a = s[4], o = s[8], l = s[1], c = s[5], h = s[9], f = s[2], u = s[6], d = s[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Fe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(u, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Fe(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, d), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-f, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Fe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-f, d), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Fe(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Fe(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-f, r)) : (this._x = 0, this._y = Math.atan2(o, d));
        break;
      case "XZY":
        this._z = Math.asin(-Fe(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(u, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, d), this._y = 0);
        break;
      default:
        Ce("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, i === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, i) {
    return el.makeRotationFromQuaternion(e), this.setFromRotationMatrix(el, t, i);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return tl.setFromEuler(this), this.setFromQuaternion(tl, e);
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
Ln.DEFAULT_ORDER = "XYZ";
class wo {
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
let Lu = 0;
const nl = new C(), _i = new Kn(), yn = new Ke(), Us = new C(), Ki = new C(), Nu = new C(), Fu = new Kn(), il = new C(1, 0, 0), sl = new C(0, 1, 0), rl = new C(0, 0, 1), al = { type: "added" }, Ou = { type: "removed" }, vi = { type: "childadded", child: null }, kr = { type: "childremoved", child: null };
class yt extends cn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Lu++ }), this.uuid = xn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = yt.DEFAULT_UP.clone();
    const e = new C(), t = new Ln(), i = new Kn(), s = new C(1, 1, 1);
    function r() {
      i.setFromEuler(t, false);
    }
    function a() {
      t.setFromQuaternion(i, void 0, false);
    }
    t._onChange(r), i._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: i }, scale: { configurable: true, enumerable: true, value: s }, modelViewMatrix: { value: new Ke() }, normalMatrix: { value: new Ue() } }), this.matrix = new Ke(), this.matrixWorld = new Ke(), this.matrixAutoUpdate = yt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new wo(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = false, this.userData = {}, this.pivot = null;
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
    return _i.setFromAxisAngle(e, t), this.quaternion.multiply(_i), this;
  }
  rotateOnWorldAxis(e, t) {
    return _i.setFromAxisAngle(e, t), this.quaternion.premultiply(_i), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(il, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(sl, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(rl, e);
  }
  translateOnAxis(e, t) {
    return nl.copy(e).applyQuaternion(this.quaternion), this.position.add(nl.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(il, e);
  }
  translateY(e) {
    return this.translateOnAxis(sl, e);
  }
  translateZ(e) {
    return this.translateOnAxis(rl, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(yn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, i) {
    e.isVector3 ? Us.copy(e) : Us.set(e, t, i);
    const s = this.parent;
    this.updateWorldMatrix(true, false), Ki.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? yn.lookAt(Ki, Us, this.up) : yn.lookAt(Us, Ki, this.up), this.quaternion.setFromRotationMatrix(yn), s && (yn.extractRotation(s.matrixWorld), _i.setFromRotationMatrix(yn), this.quaternion.premultiply(_i.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (ke("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(al), vi.child = e, this.dispatchEvent(vi), vi.child = null) : ke("Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ou), kr.child = e, this.dispatchEvent(kr), kr.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), yn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), yn.multiply(e.parent.matrixWorld)), e.applyMatrix4(yn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(al), vi.child = e, this.dispatchEvent(vi), vi.child = null, this;
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
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ki, e, Nu), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ki, Fu, e), e;
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
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === true && (s.castShadow = true), this.receiveShadow === true && (s.receiveShadow = true), this.visible === false && (s.visible = false), this.frustumCulled === false && (s.frustumCulled = false), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), this.static !== false && (s.static = this.static), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.pivot !== null && (s.pivot = this.pivot.toArray()), this.matrixAutoUpdate === false && (s.matrixAutoUpdate = false), this.morphTargetDictionary !== void 0 && (s.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (s.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.geometryInfo = this._geometryInfo.map((o) => ({ ...o, boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0, boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0 })), s.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), s.availableInstanceIds = this._availableInstanceIds.slice(), s.availableGeometryIds = this._availableGeometryIds.slice(), s.nextIndexStart = this._nextIndexStart, s.nextVertexStart = this._nextVertexStart, s.geometryCount = this._geometryCount, s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.matricesTexture = this._matricesTexture.toJSON(e), s.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (s.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (s.boundingBox = this.boundingBox.toJSON()));
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
          const f = l[c];
          r(e.shapes, f);
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
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), f = a(e.shapes), u = a(e.skeletons), d = a(e.animations), g = a(e.nodes);
      o.length > 0 && (i.geometries = o), l.length > 0 && (i.materials = l), c.length > 0 && (i.textures = c), h.length > 0 && (i.images = h), f.length > 0 && (i.shapes = f), u.length > 0 && (i.skeletons = u), d.length > 0 && (i.animations = d), g.length > 0 && (i.nodes = g);
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
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot !== null ? e.pivot.clone() : null, this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let i = 0; i < e.children.length; i++) {
      const s = e.children[i];
      this.add(s.clone());
    }
    return this;
  }
}
yt.DEFAULT_UP = new C(0, 1, 0);
yt.DEFAULT_MATRIX_AUTO_UPDATE = true;
yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
class si extends yt {
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
    return this._targetRay === null && (this._targetRay = new si(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new C(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new C()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new si(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new C(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new C(), this._grip.eventsEnabled = false), this._grip;
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
        for (const M of e.hand.values()) {
          const p = t.getJointPose(M, i), m = this._getHandJoint(c, M);
          p !== null && (m.matrix.fromArray(p.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.matrixWorldNeedsUpdate = true, m.jointRadius = p.radius), m.visible = p !== null;
        }
        const h = c.joints["index-finger-tip"], f = c.joints["thumb-tip"], u = h.position.distanceTo(f.position), d = 0.02, g = 5e-3;
        c.inputState.pinching && u > d + g ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && u <= d - g && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, i), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false, l.eventsEnabled && l.dispatchEvent({ type: "gripUpdated", data: e, target: this })));
      o !== null && (s = t.getPose(e.targetRaySpace, i), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, s.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = false, s.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(Bu)));
    }
    return o !== null && (o.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const i = new si();
      i.matrixAutoUpdate = false, i.visible = false, e.joints[t.jointName] = i, e.add(i);
    }
    return e.joints[t.jointName];
  }
}
const Fc = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, zn = { h: 0, s: 0, l: 0 }, Is = { h: 0, s: 0, l: 0 };
function Vr(n, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + (e - n) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? n + (e - n) * 6 * (2 / 3 - t) : n;
}
class Be {
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
  setHex(e, t = Xe) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ge.colorSpaceToWorking(this, t), this;
  }
  setRGB(e, t, i, s = Ge.workingColorSpace) {
    return this.r = e, this.g = t, this.b = i, Ge.colorSpaceToWorking(this, s), this;
  }
  setHSL(e, t, i, s = Ge.workingColorSpace) {
    if (e = Ao(e, 1), t = Fe(t, 0, 1), i = Fe(i, 0, 1), t === 0) this.r = this.g = this.b = i;
    else {
      const r = i <= 0.5 ? i * (1 + t) : i + t - i * t, a = 2 * i - r;
      this.r = Vr(a, r, e + 1 / 3), this.g = Vr(a, r, e), this.b = Vr(a, r, e - 1 / 3);
    }
    return Ge.colorSpaceToWorking(this, s), this;
  }
  setStyle(e, t = Xe) {
    function i(r) {
      r !== void 0 && parseFloat(r) < 1 && Ce("Color: Alpha component of " + e + " will be ignored.");
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
          Ce("Color: Unknown color model " + e);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = s[1], a = r.length;
      if (a === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (a === 6) return this.setHex(parseInt(r, 16), t);
      Ce("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Xe) {
    const i = Fc[e.toLowerCase()];
    return i !== void 0 ? this.setHex(i, t) : Ce("Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Pn(e.r), this.g = Pn(e.g), this.b = Pn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ki(e.r), this.g = ki(e.g), this.b = ki(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Xe) {
    return Ge.workingToColorSpace(zt.copy(this), e), Math.round(Fe(zt.r * 255, 0, 255)) * 65536 + Math.round(Fe(zt.g * 255, 0, 255)) * 256 + Math.round(Fe(zt.b * 255, 0, 255));
  }
  getHexString(e = Xe) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ge.workingColorSpace) {
    Ge.workingToColorSpace(zt.copy(this), t);
    const i = zt.r, s = zt.g, r = zt.b, a = Math.max(i, s, r), o = Math.min(i, s, r);
    let l, c;
    const h = (o + a) / 2;
    if (o === a) l = 0, c = 0;
    else {
      const f = a - o;
      switch (c = h <= 0.5 ? f / (a + o) : f / (2 - a - o), a) {
        case i:
          l = (s - r) / f + (s < r ? 6 : 0);
          break;
        case s:
          l = (r - i) / f + 2;
          break;
        case r:
          l = (i - s) / f + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = Ge.workingColorSpace) {
    return Ge.workingToColorSpace(zt.copy(this), t), e.r = zt.r, e.g = zt.g, e.b = zt.b, e;
  }
  getStyle(e = Xe) {
    Ge.workingToColorSpace(zt.copy(this), e);
    const t = zt.r, i = zt.g, s = zt.b;
    return e !== Xe ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(e, t, i) {
    return this.getHSL(zn), this.setHSL(zn.h + e, zn.s + t, zn.l + i);
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
    this.getHSL(zn), e.getHSL(Is);
    const i = fs(zn.h, Is.h, t), s = fs(zn.s, Is.s, t), r = fs(zn.l, Is.l, t);
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
const zt = new Be();
Be.NAMES = Fc;
class ol extends yt {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Ln(), this.environmentIntensity = 1, this.environmentRotation = new Ln(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const rn = new C(), Tn = new C(), Wr = new C(), bn = new C(), xi = new C(), Si = new C(), ll = new C(), Xr = new C(), Yr = new C(), qr = new C(), Zr = new lt(), Kr = new lt(), Jr = new lt();
class en {
  constructor(e = new C(), t = new C(), i = new C()) {
    this.a = e, this.b = t, this.c = i;
  }
  static getNormal(e, t, i, s) {
    s.subVectors(i, t), rn.subVectors(e, t), s.cross(rn);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  static getBarycoord(e, t, i, s, r) {
    rn.subVectors(s, t), Tn.subVectors(i, t), Wr.subVectors(e, t);
    const a = rn.dot(rn), o = rn.dot(Tn), l = rn.dot(Wr), c = Tn.dot(Tn), h = Tn.dot(Wr), f = a * c - o * o;
    if (f === 0) return r.set(0, 0, 0), null;
    const u = 1 / f, d = (c * l - o * h) * u, g = (a * h - o * l) * u;
    return r.set(1 - d - g, g, d);
  }
  static containsPoint(e, t, i, s) {
    return this.getBarycoord(e, t, i, s, bn) === null ? false : bn.x >= 0 && bn.y >= 0 && bn.x + bn.y <= 1;
  }
  static getInterpolation(e, t, i, s, r, a, o, l) {
    return this.getBarycoord(e, t, i, s, bn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, bn.x), l.addScaledVector(a, bn.y), l.addScaledVector(o, bn.z), l);
  }
  static getInterpolatedAttribute(e, t, i, s, r, a) {
    return Zr.setScalar(0), Kr.setScalar(0), Jr.setScalar(0), Zr.fromBufferAttribute(e, t), Kr.fromBufferAttribute(e, i), Jr.fromBufferAttribute(e, s), a.setScalar(0), a.addScaledVector(Zr, r.x), a.addScaledVector(Kr, r.y), a.addScaledVector(Jr, r.z), a;
  }
  static isFrontFacing(e, t, i, s) {
    return rn.subVectors(i, t), Tn.subVectors(e, t), rn.cross(Tn).dot(s) < 0;
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
    return rn.subVectors(this.c, this.b), Tn.subVectors(this.a, this.b), rn.cross(Tn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return en.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return en.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, i, s, r) {
    return en.getInterpolation(e, this.a, this.b, this.c, t, i, s, r);
  }
  containsPoint(e) {
    return en.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return en.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a, s = this.b, r = this.c;
    let a, o;
    xi.subVectors(s, i), Si.subVectors(r, i), Xr.subVectors(e, i);
    const l = xi.dot(Xr), c = Si.dot(Xr);
    if (l <= 0 && c <= 0) return t.copy(i);
    Yr.subVectors(e, s);
    const h = xi.dot(Yr), f = Si.dot(Yr);
    if (h >= 0 && f <= h) return t.copy(s);
    const u = l * f - h * c;
    if (u <= 0 && l >= 0 && h <= 0) return a = l / (l - h), t.copy(i).addScaledVector(xi, a);
    qr.subVectors(e, r);
    const d = xi.dot(qr), g = Si.dot(qr);
    if (g >= 0 && d <= g) return t.copy(r);
    const M = d * c - l * g;
    if (M <= 0 && c >= 0 && g <= 0) return o = c / (c - g), t.copy(i).addScaledVector(Si, o);
    const p = h * g - d * f;
    if (p <= 0 && f - h >= 0 && d - g >= 0) return ll.subVectors(r, s), o = (f - h) / (f - h + (d - g)), t.copy(s).addScaledVector(ll, o);
    const m = 1 / (p + M + u);
    return a = M * m, o = u * m, t.copy(i).addScaledVector(xi, a).addScaledVector(Si, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
class hi {
  constructor(e = new C(1 / 0, 1 / 0, 1 / 0), t = new C(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3) this.expandByPoint(an.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++) this.expandByPoint(an.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = an.copy(t).multiplyScalar(0.5);
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
      if (t === true && r !== void 0 && e.isInstancedMesh !== true) for (let a = 0, o = r.count; a < o; a++) e.isMesh === true ? e.getVertexPosition(a, an) : an.fromBufferAttribute(r, a), an.applyMatrix4(e.matrixWorld), this.expandByPoint(an);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Ls.copy(e.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), Ls.copy(i.boundingBox)), Ls.applyMatrix4(e.matrixWorld), this.union(Ls);
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
    return this.clampPoint(e.center, an), an.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, i;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(Ji), Ns.subVectors(this.max, Ji), Mi.subVectors(e.a, Ji), Ei.subVectors(e.b, Ji), yi.subVectors(e.c, Ji), Hn.subVectors(Ei, Mi), kn.subVectors(yi, Ei), $n.subVectors(Mi, yi);
    let t = [0, -Hn.z, Hn.y, 0, -kn.z, kn.y, 0, -$n.z, $n.y, Hn.z, 0, -Hn.x, kn.z, 0, -kn.x, $n.z, 0, -$n.x, -Hn.y, Hn.x, 0, -kn.y, kn.x, 0, -$n.y, $n.x, 0];
    return !$r(t, Mi, Ei, yi, Ns) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !$r(t, Mi, Ei, yi, Ns)) ? false : (Fs.crossVectors(Hn, kn), t = [Fs.x, Fs.y, Fs.z], $r(t, Mi, Ei, yi, Ns));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, an).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(an).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (An[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), An[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), An[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), An[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), An[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), An[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), An[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), An[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(An), this);
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
const An = [new C(), new C(), new C(), new C(), new C(), new C(), new C(), new C()], an = new C(), Ls = new hi(), Mi = new C(), Ei = new C(), yi = new C(), Hn = new C(), kn = new C(), $n = new C(), Ji = new C(), Ns = new C(), Fs = new C(), Qn = new C();
function $r(n, e, t, i, s) {
  for (let r = 0, a = n.length - 3; r <= a; r += 3) {
    Qn.fromArray(n, r);
    const o = s.x * Math.abs(Qn.x) + s.y * Math.abs(Qn.y) + s.z * Math.abs(Qn.z), l = e.dot(Qn), c = t.dot(Qn), h = i.dot(Qn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return false;
  }
  return true;
}
const St = new C(), Os = new j();
let zu = 0;
class Wt extends cn {
  constructor(e, t, i = false) {
    if (super(), Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: zu++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = i, this.usage = lo, this.updateRanges = [], this.gpuType = tn, this.version = 0;
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
    if (this.itemSize === 2) for (let t = 0, i = this.count; t < i; t++) Os.fromBufferAttribute(this, t), Os.applyMatrix3(e), this.setXY(t, Os.x, Os.y);
    else if (this.itemSize === 3) for (let t = 0, i = this.count; t < i; t++) St.fromBufferAttribute(this, t), St.applyMatrix3(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++) St.fromBufferAttribute(this, t), St.applyMatrix4(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++) St.fromBufferAttribute(this, t), St.applyNormalMatrix(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++) St.fromBufferAttribute(this, t), St.transformDirection(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = on(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = je(i, this.array)), this.array[e * this.itemSize + t] = i, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = on(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = je(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = on(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = je(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = on(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = je(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = on(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = je(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, i) {
    return e *= this.itemSize, this.normalized && (t = je(t, this.array), i = je(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, s) {
    return e *= this.itemSize, this.normalized && (t = je(t, this.array), i = je(i, this.array), s = je(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = s, this;
  }
  setXYZW(e, t, i, s, r) {
    return e *= this.itemSize, this.normalized && (t = je(t, this.array), i = je(i, this.array), s = je(s, this.array), r = je(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = s, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== lo && (e.usage = this.usage), e;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Oc extends Wt {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class Bc extends Wt {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class pt extends Wt {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
const Hu = new hi(), $i = new C(), Qr = new C();
class ui {
  constructor(e = new C(), t = -1) {
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
    $i.subVectors(e, this.center);
    const t = $i.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t), s = (i - this.radius) * 0.5;
      this.center.addScaledVector($i, s / i), this.radius += s;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (Qr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint($i.copy(e.center).add(Qr)), this.expandByPoint($i.copy(e.center).sub(Qr))), this);
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
let ku = 0;
const jt = new Ke(), jr = new yt(), Ti = new C(), qt = new hi(), Qi = new hi(), Dt = new C();
class Ft extends cn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: ku++ }), this.uuid = xn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {}, this._transformed = false;
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (ru(e) ? Bc : Oc)(e, 1) : this.index = e, this;
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
      const r = new Ue().getNormalMatrix(e);
      i.applyNormalMatrix(r), i.needsUpdate = true;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(e), s.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = true, this;
  }
  applyQuaternion(e) {
    return jt.makeRotationFromQuaternion(e), this.applyMatrix4(jt), this;
  }
  rotateX(e) {
    return jt.makeRotationX(e), this.applyMatrix4(jt), this;
  }
  rotateY(e) {
    return jt.makeRotationY(e), this.applyMatrix4(jt), this;
  }
  rotateZ(e) {
    return jt.makeRotationZ(e), this.applyMatrix4(jt), this;
  }
  translate(e, t, i) {
    return jt.makeTranslation(e, t, i), this.applyMatrix4(jt), this;
  }
  scale(e, t, i) {
    return jt.makeScale(e, t, i), this.applyMatrix4(jt), this;
  }
  lookAt(e) {
    return jr.lookAt(e), jr.updateMatrix(), this.applyMatrix4(jr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ti).negate(), this.translate(Ti.x, Ti.y, Ti.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const i = [];
      for (let s = 0, r = e.length; s < r; s++) {
        const a = e[s];
        i.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new pt(i, 3));
    } else {
      const i = Math.min(e.length, t.count);
      for (let s = 0; s < i; s++) {
        const r = e[s];
        t.setXYZ(s, r.x, r.y, r.z || 0);
      }
      e.length > t.count && Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new hi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new C(-1 / 0, -1 / 0, -1 / 0), new C(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let i = 0, s = t.length; i < s; i++) {
        const r = t[i];
        qt.setFromBufferAttribute(r), this.morphTargetsRelative ? (Dt.addVectors(this.boundingBox.min, qt.min), this.boundingBox.expandByPoint(Dt), Dt.addVectors(this.boundingBox.max, qt.max), this.boundingBox.expandByPoint(Dt)) : (this.boundingBox.expandByPoint(qt.min), this.boundingBox.expandByPoint(qt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ui());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new C(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if (qt.setFromBufferAttribute(e), t) for (let r = 0, a = t.length; r < a; r++) {
        const o = t[r];
        Qi.setFromBufferAttribute(o), this.morphTargetsRelative ? (Dt.addVectors(qt.min, Qi.min), qt.expandByPoint(Dt), Dt.addVectors(qt.max, Qi.max), qt.expandByPoint(Dt)) : (qt.expandByPoint(Qi.min), qt.expandByPoint(Qi.max));
      }
      qt.getCenter(i);
      let s = 0;
      for (let r = 0, a = e.count; r < a; r++) Dt.fromBufferAttribute(e, r), s = Math.max(s, i.distanceToSquared(Dt));
      if (t) for (let r = 0, a = t.length; r < a; r++) {
        const o = t[r], l = this.morphTargetsRelative;
        for (let c = 0, h = o.count; c < h; c++) Dt.fromBufferAttribute(o, c), l && (Ti.fromBufferAttribute(e, c), Dt.add(Ti)), s = Math.max(s, i.distanceToSquared(Dt));
      }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = t.position, s = t.normal, r = t.uv;
    let a = this.getAttribute("tangent");
    (a === void 0 || a.count !== i.count) && (a = new Wt(new Float32Array(4 * i.count), 4), this.setAttribute("tangent", a));
    const o = [], l = [];
    for (let v = 0; v < i.count; v++) o[v] = new C(), l[v] = new C();
    const c = new C(), h = new C(), f = new C(), u = new j(), d = new j(), g = new j(), M = new C(), p = new C();
    function m(v, T, D) {
      c.fromBufferAttribute(i, v), h.fromBufferAttribute(i, T), f.fromBufferAttribute(i, D), u.fromBufferAttribute(r, v), d.fromBufferAttribute(r, T), g.fromBufferAttribute(r, D), h.sub(c), f.sub(c), d.sub(u), g.sub(u);
      const P = 1 / (d.x * g.y - g.x * d.y);
      isFinite(P) && (M.copy(h).multiplyScalar(g.y).addScaledVector(f, -d.y).multiplyScalar(P), p.copy(f).multiplyScalar(d.x).addScaledVector(h, -g.x).multiplyScalar(P), o[v].add(M), o[T].add(M), o[D].add(M), l[v].add(p), l[T].add(p), l[D].add(p));
    }
    let E = this.groups;
    E.length === 0 && (E = [{ start: 0, count: e.count }]);
    for (let v = 0, T = E.length; v < T; ++v) {
      const D = E[v], P = D.start, L = D.count;
      for (let W = P, X = P + L; W < X; W += 3) m(e.getX(W + 0), e.getX(W + 1), e.getX(W + 2));
    }
    const y = new C(), x = new C(), R = new C(), A = new C();
    function w(v) {
      R.fromBufferAttribute(s, v), A.copy(R);
      const T = o[v];
      y.copy(T), y.sub(R.multiplyScalar(R.dot(T))).normalize(), x.crossVectors(A, T);
      const P = x.dot(l[v]) < 0 ? -1 : 1;
      a.setXYZW(v, y.x, y.y, y.z, P);
    }
    for (let v = 0, T = E.length; v < T; ++v) {
      const D = E[v], P = D.start, L = D.count;
      for (let W = P, X = P + L; W < X; W += 3) w(e.getX(W + 0)), w(e.getX(W + 1)), w(e.getX(W + 2));
    }
    this._transformed = true;
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0 || i.count !== t.count) i = new Wt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", i);
      else for (let u = 0, d = i.count; u < d; u++) i.setXYZ(u, 0, 0, 0);
      const s = new C(), r = new C(), a = new C(), o = new C(), l = new C(), c = new C(), h = new C(), f = new C();
      if (e) for (let u = 0, d = e.count; u < d; u += 3) {
        const g = e.getX(u + 0), M = e.getX(u + 1), p = e.getX(u + 2);
        s.fromBufferAttribute(t, g), r.fromBufferAttribute(t, M), a.fromBufferAttribute(t, p), h.subVectors(a, r), f.subVectors(s, r), h.cross(f), o.fromBufferAttribute(i, g), l.fromBufferAttribute(i, M), c.fromBufferAttribute(i, p), o.add(h), l.add(h), c.add(h), i.setXYZ(g, o.x, o.y, o.z), i.setXYZ(M, l.x, l.y, l.z), i.setXYZ(p, c.x, c.y, c.z);
      }
      else for (let u = 0, d = t.count; u < d; u += 3) s.fromBufferAttribute(t, u + 0), r.fromBufferAttribute(t, u + 1), a.fromBufferAttribute(t, u + 2), h.subVectors(a, r), f.subVectors(s, r), h.cross(f), i.setXYZ(u + 0, h.x, h.y, h.z), i.setXYZ(u + 1, h.x, h.y, h.z), i.setXYZ(u + 2, h.x, h.y, h.z);
      this.normalizeNormals(), i.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++) Dt.fromBufferAttribute(e, t), Dt.normalize(), e.setXYZ(t, Dt.x, Dt.y, Dt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, f = o.normalized, u = new c.constructor(l.length * h);
      let d = 0, g = 0;
      for (let M = 0, p = l.length; M < p; M++) {
        o.isInterleavedBufferAttribute ? d = l[M] * o.data.stride + o.offset : d = l[M] * h;
        for (let m = 0; m < h; m++) u[g++] = c[d++];
      }
      return new Wt(u, h, f);
    }
    if (this.index === null) return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Ft(), i = this.index.array, s = this.attributes;
    for (const o in s) {
      const l = s[o], c = e(l, i);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
      for (let h = 0, f = c.length; h < f; h++) {
        const u = c[h], d = e(u, i);
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
    if (e.uuid = this.uuid, e.type = this.parameters !== void 0 && this._transformed === true ? "BufferGeometry" : this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0 && this._transformed !== true) {
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
      for (let f = 0, u = c.length; f < u; f++) {
        const d = c[f];
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
      const h = [], f = r[c];
      for (let u = 0, d = f.length; u < d; u++) h.push(f[u].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const f = a[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this._transformed = e._transformed, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Gu {
  constructor(e, t) {
    this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = lo, this.updateRanges = [], this.version = 0, this.uuid = xn();
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
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = xn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), i = new this.constructor(t, this.stride);
    return i.setUsage(this.usage), i;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = xn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const Ht = new C();
class yr {
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
    for (let t = 0, i = this.data.count; t < i; t++) Ht.fromBufferAttribute(this, t), Ht.applyMatrix4(e), this.setXYZ(t, Ht.x, Ht.y, Ht.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++) Ht.fromBufferAttribute(this, t), Ht.applyNormalMatrix(e), this.setXYZ(t, Ht.x, Ht.y, Ht.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++) Ht.fromBufferAttribute(this, t), Ht.transformDirection(e), this.setXYZ(t, Ht.x, Ht.y, Ht.z);
    return this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (i = on(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = je(i, this.array)), this.data.array[e * this.data.stride + this.offset + t] = i, this;
  }
  setX(e, t) {
    return this.normalized && (t = je(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = on(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = on(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = on(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = on(t, this.array)), t;
  }
  setXY(e, t, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = je(t, this.array), i = je(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = je(t, this.array), i = je(i, this.array), s = je(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = s, this;
  }
  setXYZW(e, t, i, s, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = je(t, this.array), i = je(i, this.array), s = je(s, this.array), r = je(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = s, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      Er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let i = 0; i < this.count; i++) {
        const s = i * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[s + r]);
      }
      return new Wt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new yr(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      Er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let i = 0; i < this.count; i++) {
        const s = i * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[s + r]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
let Vu = 0;
class Mn extends cn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Vu++ }), this.uuid = xn(), this.name = "", this.type = "Material", this.blending = zi, this.side = Dn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = Ma, this.blendDst = Ea, this.blendEquation = ti, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Be(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Gi, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = qo, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = pi, this.stencilZFail = pi, this.stencilZPass = pi, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
        Ce(`Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const s = this[t];
      if (s === void 0) {
        Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      s && s.isColor ? s.set(i) : s && s.isVector2 && i && i.isVector2 || s && s.isEuler && i && i.isEuler || s && s.isVector3 && i && i.isVector3 ? s.copy(i) : this[t] = i;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const i = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (i.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (i.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== zi && (i.blending = this.blending), this.side !== Dn && (i.side = this.side), this.vertexColors === true && (i.vertexColors = true), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === true && (i.transparent = true), this.blendSrc !== Ma && (i.blendSrc = this.blendSrc), this.blendDst !== Ea && (i.blendDst = this.blendDst), this.blendEquation !== ti && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== Gi && (i.depthFunc = this.depthFunc), this.depthTest === false && (i.depthTest = this.depthTest), this.depthWrite === false && (i.depthWrite = this.depthWrite), this.colorWrite === false && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== qo && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== pi && (i.stencilFail = this.stencilFail), this.stencilZFail !== pi && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== pi && (i.stencilZPass = this.stencilZPass), this.stencilWrite === true && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === true && (i.polygonOffset = true), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === true && (i.dithering = true), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === true && (i.alphaHash = true), this.alphaToCoverage === true && (i.alphaToCoverage = true), this.premultipliedAlpha === true && (i.premultipliedAlpha = true), this.forceSinglePass === true && (i.forceSinglePass = true), this.allowOverride === false && (i.allowOverride = false), this.wireframe === true && (i.wireframe = true), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (i.flatShading = true), this.visible === false && (i.visible = false), this.toneMapped === false && (i.toneMapped = false), this.fog === false && (i.fog = false), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
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
  fromJSON(e, t) {
    if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new Be().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? this.vertexColors = e.vertexColors > 0 : this.vertexColors = e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      let i = e.normalScale;
      Array.isArray(i) === false && (i = [i, i]), this.normalScale = new j().fromArray(i);
    }
    return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new j().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
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
class Wu extends Mn {
  constructor(e) {
    super(), this.isSpriteMaterial = true, this.type = "SpriteMaterial", this.color = new Be(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = true, this.transparent = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
let bi;
const ji = new C(), Ai = new C(), Ri = new C(), wi = new j(), es = new j(), zc = new Ke(), Bs = new C(), ts = new C(), zs = new C(), cl = new j(), ea = new j(), hl = new j();
class Rv extends yt {
  constructor(e = new Wu()) {
    if (super(), this.isSprite = true, this.type = "Sprite", bi === void 0) {
      bi = new Ft();
      const t = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), i = new Gu(t, 5);
      bi.setIndex([0, 1, 2, 0, 2, 3]), bi.setAttribute("position", new yr(i, 3, 0, false)), bi.setAttribute("uv", new yr(i, 2, 3, false));
    }
    this.geometry = bi, this.material = e, this.center = new j(0.5, 0.5), this.count = 1;
  }
  raycast(e, t) {
    e.camera === null && ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Ai.setFromMatrixScale(this.matrixWorld), zc.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), Ri.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && this.material.sizeAttenuation === false && Ai.multiplyScalar(-Ri.z);
    const i = this.material.rotation;
    let s, r;
    i !== 0 && (r = Math.cos(i), s = Math.sin(i));
    const a = this.center;
    Hs(Bs.set(-0.5, -0.5, 0), Ri, a, Ai, s, r), Hs(ts.set(0.5, -0.5, 0), Ri, a, Ai, s, r), Hs(zs.set(0.5, 0.5, 0), Ri, a, Ai, s, r), cl.set(0, 0), ea.set(1, 0), hl.set(1, 1);
    let o = e.ray.intersectTriangle(Bs, ts, zs, false, ji);
    if (o === null && (Hs(ts.set(-0.5, 0.5, 0), Ri, a, Ai, s, r), ea.set(0, 1), o = e.ray.intersectTriangle(Bs, zs, ts, false, ji), o === null)) return;
    const l = e.ray.origin.distanceTo(ji);
    l < e.near || l > e.far || t.push({ distance: l, point: ji.clone(), uv: en.getInterpolation(ji, Bs, ts, zs, cl, ea, hl, new j()), face: null, object: this });
  }
  copy(e, t) {
    return super.copy(e, t), e.center !== void 0 && this.center.copy(e.center), this.material = e.material, this;
  }
}
function Hs(n, e, t, i, s, r) {
  wi.subVectors(n, t).addScalar(0.5).multiply(i), s !== void 0 ? (es.x = r * wi.x - s * wi.y, es.y = s * wi.x + r * wi.y) : es.copy(wi), n.copy(e), n.x += es.x, n.y += es.y, n.applyMatrix4(zc);
}
const Rn = new C(), ta = new C(), ks = new C(), Gn = new C(), na = new C(), Gs = new C(), ia = new C();
class Ts {
  constructor(e = new C(), t = new C(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, Rn)), this;
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
    const t = Rn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Rn.copy(this.origin).addScaledVector(this.direction, t), Rn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, s) {
    ta.copy(e).add(t).multiplyScalar(0.5), ks.copy(t).sub(e).normalize(), Gn.copy(this.origin).sub(ta);
    const r = e.distanceTo(t) * 0.5, a = -this.direction.dot(ks), o = Gn.dot(this.direction), l = -Gn.dot(ks), c = Gn.lengthSq(), h = Math.abs(1 - a * a);
    let f, u, d, g;
    if (h > 0) if (f = a * l - o, u = a * o - l, g = r * h, f >= 0) if (u >= -g) if (u <= g) {
      const M = 1 / h;
      f *= M, u *= M, d = f * (f + a * u + 2 * o) + u * (a * f + u + 2 * l) + c;
    } else u = r, f = Math.max(0, -(a * u + o)), d = -f * f + u * (u + 2 * l) + c;
    else u = -r, f = Math.max(0, -(a * u + o)), d = -f * f + u * (u + 2 * l) + c;
    else u <= -g ? (f = Math.max(0, -(-a * r + o)), u = f > 0 ? -r : Math.min(Math.max(-r, -l), r), d = -f * f + u * (u + 2 * l) + c) : u <= g ? (f = 0, u = Math.min(Math.max(-r, -l), r), d = u * (u + 2 * l) + c) : (f = Math.max(0, -(a * r + o)), u = f > 0 ? r : Math.min(Math.max(-r, -l), r), d = -f * f + u * (u + 2 * l) + c);
    else u = a > 0 ? -r : r, f = Math.max(0, -(a * u + o)), d = -f * f + u * (u + 2 * l) + c;
    return i && i.copy(this.origin).addScaledVector(this.direction, f), s && s.copy(ta).addScaledVector(ks, u), d;
  }
  intersectSphere(e, t) {
    Rn.subVectors(e.center, this.origin);
    const i = Rn.dot(this.direction), s = Rn.dot(Rn) - i * i, r = e.radius * e.radius;
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
    const c = 1 / this.direction.x, h = 1 / this.direction.y, f = 1 / this.direction.z, u = this.origin;
    return c >= 0 ? (i = (e.min.x - u.x) * c, s = (e.max.x - u.x) * c) : (i = (e.max.x - u.x) * c, s = (e.min.x - u.x) * c), h >= 0 ? (r = (e.min.y - u.y) * h, a = (e.max.y - u.y) * h) : (r = (e.max.y - u.y) * h, a = (e.min.y - u.y) * h), i > a || r > s || ((r > i || isNaN(i)) && (i = r), (a < s || isNaN(s)) && (s = a), f >= 0 ? (o = (e.min.z - u.z) * f, l = (e.max.z - u.z) * f) : (o = (e.max.z - u.z) * f, l = (e.min.z - u.z) * f), i > l || o > s) || ((o > i || i !== i) && (i = o), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(i >= 0 ? i : s, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Rn) !== null;
  }
  intersectTriangle(e, t, i, s, r) {
    na.subVectors(t, e), Gs.subVectors(i, e), ia.crossVectors(na, Gs);
    let a = this.direction.dot(ia), o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    Gn.subVectors(this.origin, e);
    const l = o * this.direction.dot(Gs.crossVectors(Gn, Gs));
    if (l < 0) return null;
    const c = o * this.direction.dot(na.cross(Gn));
    if (c < 0 || l + c > a) return null;
    const h = -o * Gn.dot(ia);
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
class Hc extends Mn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Be(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ln(), this.combine = xc, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ul = new Ke(), jn = new Ts(), Vs = new ui(), fl = new C(), Ws = new C(), Xs = new C(), Ys = new C(), sa = new C(), qs = new C(), dl = new C(), Zs = new C();
class $t extends yt {
  constructor(e = new Ft(), t = new Hc()) {
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
      qs.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = o[l], f = r[l];
        h !== 0 && (sa.fromBufferAttribute(f, e), a ? qs.addScaledVector(sa, h) : qs.addScaledVector(sa.sub(t), h));
      }
      t.add(qs);
    }
    return t;
  }
  raycast(e, t) {
    const i = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), Vs.copy(i.boundingSphere), Vs.applyMatrix4(r), jn.copy(e.ray).recast(e.near), !(Vs.containsPoint(jn.origin) === false && (jn.intersectSphere(Vs, fl) === null || jn.origin.distanceToSquared(fl) > (e.far - e.near) ** 2)) && (ul.copy(r).invert(), jn.copy(e.ray).applyMatrix4(ul), !(i.boundingBox !== null && jn.intersectsBox(i.boundingBox) === false) && this._computeIntersections(e, t, jn)));
  }
  _computeIntersections(e, t, i) {
    let s;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, f = r.attributes.normal, u = r.groups, d = r.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let g = 0, M = u.length; g < M; g++) {
      const p = u[g], m = a[p.materialIndex], E = Math.max(p.start, d.start), y = Math.min(o.count, Math.min(p.start + p.count, d.start + d.count));
      for (let x = E, R = y; x < R; x += 3) {
        const A = o.getX(x), w = o.getX(x + 1), v = o.getX(x + 2);
        s = Ks(this, m, e, i, c, h, f, A, w, v), s && (s.faceIndex = Math.floor(x / 3), s.face.materialIndex = p.materialIndex, t.push(s));
      }
    }
    else {
      const g = Math.max(0, d.start), M = Math.min(o.count, d.start + d.count);
      for (let p = g, m = M; p < m; p += 3) {
        const E = o.getX(p), y = o.getX(p + 1), x = o.getX(p + 2);
        s = Ks(this, a, e, i, c, h, f, E, y, x), s && (s.faceIndex = Math.floor(p / 3), t.push(s));
      }
    }
    else if (l !== void 0) if (Array.isArray(a)) for (let g = 0, M = u.length; g < M; g++) {
      const p = u[g], m = a[p.materialIndex], E = Math.max(p.start, d.start), y = Math.min(l.count, Math.min(p.start + p.count, d.start + d.count));
      for (let x = E, R = y; x < R; x += 3) {
        const A = x, w = x + 1, v = x + 2;
        s = Ks(this, m, e, i, c, h, f, A, w, v), s && (s.faceIndex = Math.floor(x / 3), s.face.materialIndex = p.materialIndex, t.push(s));
      }
    }
    else {
      const g = Math.max(0, d.start), M = Math.min(l.count, d.start + d.count);
      for (let p = g, m = M; p < m; p += 3) {
        const E = p, y = p + 1, x = p + 2;
        s = Ks(this, a, e, i, c, h, f, E, y, x), s && (s.faceIndex = Math.floor(p / 3), t.push(s));
      }
    }
  }
}
function Xu(n, e, t, i, s, r, a, o) {
  let l;
  if (e.side === Ut ? l = i.intersectTriangle(a, r, s, true, o) : l = i.intersectTriangle(s, r, a, e.side === Dn, o), l === null) return null;
  Zs.copy(o), Zs.applyMatrix4(n.matrixWorld);
  const c = t.ray.origin.distanceTo(Zs);
  return c < t.near || c > t.far ? null : { distance: c, point: Zs.clone(), object: n };
}
function Ks(n, e, t, i, s, r, a, o, l, c) {
  n.getVertexPosition(o, Ws), n.getVertexPosition(l, Xs), n.getVertexPosition(c, Ys);
  const h = Xu(n, e, t, i, Ws, Xs, Ys, dl);
  if (h) {
    const f = new C();
    en.getBarycoord(dl, Ws, Xs, Ys, f), s && (h.uv = en.getInterpolatedAttribute(s, o, l, c, f, new j())), r && (h.uv1 = en.getInterpolatedAttribute(r, o, l, c, f, new j())), a && (h.normal = en.getInterpolatedAttribute(a, o, l, c, f, new C()), h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = { a: o, b: l, c, normal: new C(), materialIndex: 0 };
    en.getNormal(Ws, Xs, Ys, u.normal), h.face = u, h.barycoord = f;
  }
  return h;
}
class kc extends Rt {
  constructor(e = null, t = 1, i = 1, s, r, a, o, l, c = Nt, h = Nt, f, u) {
    super(null, a, o, l, c, h, s, r, f, u), this.isDataTexture = true, this.image = { data: e, width: t, height: i }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class pl extends Wt {
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
const Ci = new Ke(), ml = new Ke(), Js = [], gl = new hi(), Yu = new Ke(), ns = new $t(), is = new ui();
class wv extends $t {
  constructor(e, t, i) {
    super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new pl(new Float32Array(i * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = i, this.boundingBox = null, this.boundingSphere = null;
    for (let s = 0; s < i; s++) this.setMatrixAt(s, Yu);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new hi()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let i = 0; i < t; i++) this.getMatrixAt(i, Ci), gl.copy(e.boundingBox).applyMatrix4(Ci), this.boundingBox.union(gl);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new ui()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let i = 0; i < t; i++) this.getMatrixAt(i, Ci), is.copy(e.boundingSphere).applyMatrix4(Ci), this.boundingSphere.union(is);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
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
    if (ns.geometry = this.geometry, ns.material = this.material, ns.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), is.copy(this.boundingSphere), is.applyMatrix4(i), e.ray.intersectsSphere(is) !== false)) for (let r = 0; r < s; r++) {
      this.getMatrixAt(r, Ci), ml.multiplyMatrices(i, Ci), ns.matrixWorld = ml, ns.raycast(e, Js);
      for (let a = 0, o = Js.length; a < o; a++) {
        const l = Js[a];
        l.instanceId = r, l.object = this, t.push(l);
      }
      Js.length = 0;
    }
  }
  setColorAt(e, t) {
    return this.instanceColor === null && (this.instanceColor = new pl(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3), this;
  }
  setMatrixAt(e, t) {
    return t.toArray(this.instanceMatrix.array, e * 16), this;
  }
  setMorphAt(e, t) {
    const i = t.morphTargetInfluences, s = i.length + 1;
    this.morphTexture === null && (this.morphTexture = new kc(new Float32Array(s * this.count), s, this.count, So, tn));
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let c = 0; c < i.length; c++) a += i[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, l = s * e;
    return r[l] = o, r.set(i, l + 1), this;
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}
const ra = new C(), qu = new C(), Zu = new Ue();
class Xn {
  constructor(e = new C(1, 0, 0), t = 0) {
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
    const s = ra.subVectors(i, t).cross(qu.subVectors(e, t)).normalize();
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
    const s = e.delta(ra), r = this.normal.dot(s);
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
    const i = t || Zu.getNormalMatrix(e), s = this.coplanarPoint(ra).applyMatrix4(e), r = this.normal.applyMatrix3(i).normalize();
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
const ei = new ui(), Ku = new j(0.5, 0.5), $s = new C();
class Co {
  constructor(e = new Xn(), t = new Xn(), i = new Xn(), s = new Xn(), r = new Xn(), a = new Xn()) {
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
  setFromProjectionMatrix(e, t = _n, i = false) {
    const s = this.planes, r = e.elements, a = r[0], o = r[1], l = r[2], c = r[3], h = r[4], f = r[5], u = r[6], d = r[7], g = r[8], M = r[9], p = r[10], m = r[11], E = r[12], y = r[13], x = r[14], R = r[15];
    if (s[0].setComponents(c - a, d - h, m - g, R - E).normalize(), s[1].setComponents(c + a, d + h, m + g, R + E).normalize(), s[2].setComponents(c + o, d + f, m + M, R + y).normalize(), s[3].setComponents(c - o, d - f, m - M, R - y).normalize(), i) s[4].setComponents(l, u, p, x).normalize(), s[5].setComponents(c - l, d - u, m - p, R - x).normalize();
    else if (s[4].setComponents(c - l, d - u, m - p, R - x).normalize(), t === _n) s[5].setComponents(c + l, d + u, m + p, R + x).normalize();
    else if (t === vs) s[5].setComponents(l, u, p, x).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(ei);
  }
  intersectsSprite(e) {
    ei.center.set(0, 0, 0);
    const t = Ku.distanceTo(e.center);
    return ei.radius = 0.7071067811865476 + t, ei.applyMatrix4(e.matrixWorld), this.intersectsSphere(ei);
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
      if ($s.x = s.normal.x > 0 ? e.max.x : e.min.x, $s.y = s.normal.y > 0 ? e.max.y : e.min.y, $s.z = s.normal.z > 0 ? e.max.z : e.min.z, s.distanceToPoint($s) < 0) return false;
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
class Ju extends Mn {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Be(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Tr = new C(), br = new C(), _l = new Ke(), ss = new Ts(), Qs = new ui(), aa = new C(), vl = new C();
class $u extends yt {
  constructor(e = new Ft(), t = new Ju()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, i = [0];
      for (let s = 1, r = t.count; s < r; s++) Tr.fromBufferAttribute(t, s - 1), br.fromBufferAttribute(t, s), i[s] = i[s - 1], i[s] += Tr.distanceTo(br);
      e.setAttribute("lineDistance", new pt(i, 1));
    } else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const i = this.geometry, s = this.matrixWorld, r = e.params.Line.threshold, a = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Qs.copy(i.boundingSphere), Qs.applyMatrix4(s), Qs.radius += r, e.ray.intersectsSphere(Qs) === false) return;
    _l.copy(s).invert(), ss.copy(e.ray).applyMatrix4(_l);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, h = i.index, u = i.attributes.position;
    if (h !== null) {
      const d = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count);
      for (let M = d, p = g - 1; M < p; M += c) {
        const m = h.getX(M), E = h.getX(M + 1), y = js(this, e, ss, l, m, E, M);
        y && t.push(y);
      }
      if (this.isLineLoop) {
        const M = h.getX(g - 1), p = h.getX(d), m = js(this, e, ss, l, M, p, g - 1);
        m && t.push(m);
      }
    } else {
      const d = Math.max(0, a.start), g = Math.min(u.count, a.start + a.count);
      for (let M = d, p = g - 1; M < p; M += c) {
        const m = js(this, e, ss, l, M, M + 1, M);
        m && t.push(m);
      }
      if (this.isLineLoop) {
        const M = js(this, e, ss, l, g - 1, d, g - 1);
        M && t.push(M);
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
function js(n, e, t, i, s, r, a) {
  const o = n.geometry.attributes.position;
  if (Tr.fromBufferAttribute(o, s), br.fromBufferAttribute(o, r), t.distanceSqToSegment(Tr, br, aa, vl) > i) return;
  aa.applyMatrix4(n.matrixWorld);
  const c = e.ray.origin.distanceTo(aa);
  if (!(c < e.near || c > e.far)) return { distance: c, point: vl.clone().applyMatrix4(n.matrixWorld), index: a, face: null, faceIndex: null, barycoord: null, object: n };
}
const xl = new C(), Sl = new C();
class Cv extends $u {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, i = [];
      for (let s = 0, r = t.count; s < r; s += 2) xl.fromBufferAttribute(t, s), Sl.fromBufferAttribute(t, s + 1), i[s] = s === 0 ? 0 : i[s - 1], i[s + 1] = i[s] + xl.distanceTo(Sl);
      e.setAttribute("lineDistance", new pt(i, 1));
    } else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Qu extends Mn {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Be(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Ml = new Ke(), co = new Ts(), er = new ui(), tr = new C();
class Pv extends yt {
  constructor(e = new Ft(), t = new Qu()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const i = this.geometry, s = this.matrixWorld, r = e.params.Points.threshold, a = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), er.copy(i.boundingSphere), er.applyMatrix4(s), er.radius += r, e.ray.intersectsSphere(er) === false) return;
    Ml.copy(s).invert(), co.copy(e.ray).applyMatrix4(Ml);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = i.index, f = i.attributes.position;
    if (c !== null) {
      const u = Math.max(0, a.start), d = Math.min(c.count, a.start + a.count);
      for (let g = u, M = d; g < M; g++) {
        const p = c.getX(g);
        tr.fromBufferAttribute(f, p), El(tr, p, l, s, e, t, this);
      }
    } else {
      const u = Math.max(0, a.start), d = Math.min(f.count, a.start + a.count);
      for (let g = u, M = d; g < M; g++) tr.fromBufferAttribute(f, g), El(tr, g, l, s, e, t, this);
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
function El(n, e, t, i, s, r, a) {
  const o = co.distanceSqToPoint(n);
  if (o < t) {
    const l = new C();
    co.closestPointToPoint(n, l), l.applyMatrix4(i);
    const c = s.ray.origin.distanceTo(l);
    if (c < s.near || c > s.far) return;
    r.push({ distance: c, distanceToRay: Math.sqrt(o), point: l, index: e, face: null, faceIndex: null, barycoord: null, object: a });
  }
}
class Gc extends Rt {
  constructor(e = [], t = ri, i, s, r, a, o, l, c, h) {
    super(e, t, i, s, r, a, o, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Dv extends Rt {
  constructor(e, t, i, s, r, a, o, l, c) {
    super(e, t, i, s, r, a, o, l, c), this.isCanvasTexture = true, this.needsUpdate = true;
  }
}
class oi extends Rt {
  constructor(e, t, i = Sn, s, r, a, o = Nt, l = Nt, c, h = In, f = 1) {
    if (h !== In && h !== Yn) throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const u = { width: e, height: t, depth: f };
    super(u, s, r, a, o, l, h, i, c), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Ro(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class ju extends oi {
  constructor(e, t = Sn, i = ri, s, r, a = Nt, o = Nt, l, c = In) {
    const h = { width: e, height: e, depth: 1 }, f = [h, h, h, h, h, h];
    super(e, e, t, i, s, r, a, o, l, c), this.image = f, this.isCubeDepthTexture = true, this.isCubeTexture = true;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Vc extends Rt {
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = true;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class bs extends Ft {
  constructor(e = 1, t = 1, i = 1, s = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: i, widthSegments: s, heightSegments: r, depthSegments: a };
    const o = this;
    s = Math.floor(s), r = Math.floor(r), a = Math.floor(a);
    const l = [], c = [], h = [], f = [];
    let u = 0, d = 0;
    g("z", "y", "x", -1, -1, i, t, e, a, r, 0), g("z", "y", "x", 1, -1, i, t, -e, a, r, 1), g("x", "z", "y", 1, 1, e, i, t, s, a, 2), g("x", "z", "y", 1, -1, e, i, -t, s, a, 3), g("x", "y", "z", 1, -1, e, t, i, s, r, 4), g("x", "y", "z", -1, -1, e, t, -i, s, r, 5), this.setIndex(l), this.setAttribute("position", new pt(c, 3)), this.setAttribute("normal", new pt(h, 3)), this.setAttribute("uv", new pt(f, 2));
    function g(M, p, m, E, y, x, R, A, w, v, T) {
      const D = x / w, P = R / v, L = x / 2, W = R / 2, X = A / 2, O = w + 1, k = v + 1;
      let G = 0, $ = 0;
      const ee = new C();
      for (let re = 0; re < k; re++) {
        const fe = re * P - W;
        for (let _e = 0; _e < O; _e++) {
          const Ve = _e * D - L;
          ee[M] = Ve * E, ee[p] = fe * y, ee[m] = X, c.push(ee.x, ee.y, ee.z), ee[M] = 0, ee[p] = 0, ee[m] = A > 0 ? 1 : -1, h.push(ee.x, ee.y, ee.z), f.push(_e / w), f.push(1 - re / v), G += 1;
        }
      }
      for (let re = 0; re < v; re++) for (let fe = 0; fe < w; fe++) {
        const _e = u + fe + O * re, Ve = u + fe + O * (re + 1), nt = u + (fe + 1) + O * (re + 1), We = u + (fe + 1) + O * re;
        l.push(_e, Ve, We), l.push(Ve, nt, We), $ += 6;
      }
      o.addGroup(d, $, T), d += $, u += G;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new bs(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
class Po extends Ft {
  constructor(e = 1, t = 1, i = 1, s = 32, r = 1, a = false, o = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: e, radiusBottom: t, height: i, radialSegments: s, heightSegments: r, openEnded: a, thetaStart: o, thetaLength: l };
    const c = this;
    s = Math.floor(s), r = Math.floor(r);
    const h = [], f = [], u = [], d = [];
    let g = 0;
    const M = [], p = i / 2;
    let m = 0;
    E(), a === false && (e > 0 && y(true), t > 0 && y(false)), this.setIndex(h), this.setAttribute("position", new pt(f, 3)), this.setAttribute("normal", new pt(u, 3)), this.setAttribute("uv", new pt(d, 2));
    function E() {
      const x = new C(), R = new C();
      let A = 0;
      const w = (t - e) / i;
      for (let v = 0; v <= r; v++) {
        const T = [], D = v / r, P = D * (t - e) + e;
        for (let L = 0; L <= s; L++) {
          const W = L / s, X = W * l + o, O = Math.sin(X), k = Math.cos(X);
          R.x = P * O, R.y = -D * i + p, R.z = P * k, f.push(R.x, R.y, R.z), x.set(O, w, k).normalize(), u.push(x.x, x.y, x.z), d.push(W, 1 - D), T.push(g++);
        }
        M.push(T);
      }
      for (let v = 0; v < s; v++) for (let T = 0; T < r; T++) {
        const D = M[T][v], P = M[T + 1][v], L = M[T + 1][v + 1], W = M[T][v + 1];
        (e > 0 || T !== 0) && (h.push(D, P, W), A += 3), (t > 0 || T !== r - 1) && (h.push(P, L, W), A += 3);
      }
      c.addGroup(m, A, 0), m += A;
    }
    function y(x) {
      const R = g, A = new j(), w = new C();
      let v = 0;
      const T = x === true ? e : t, D = x === true ? 1 : -1;
      for (let L = 1; L <= s; L++) f.push(0, p * D, 0), u.push(0, D, 0), d.push(0.5, 0.5), g++;
      const P = g;
      for (let L = 0; L <= s; L++) {
        const X = L / s * l + o, O = Math.cos(X), k = Math.sin(X);
        w.x = T * k, w.y = p * D, w.z = T * O, f.push(w.x, w.y, w.z), u.push(0, D, 0), A.x = O * 0.5 + 0.5, A.y = k * 0.5 * D + 0.5, d.push(A.x, A.y), g++;
      }
      for (let L = 0; L < s; L++) {
        const W = R + L, X = P + L;
        x === true ? h.push(X, X + 1, W) : h.push(X + 1, X, W), v += 3;
      }
      c.addGroup(m, v, x === true ? 1 : 2), m += v;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Po(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Wc extends Po {
  constructor(e = 1, t = 1, i = 32, s = 1, r = false, a = 0, o = Math.PI * 2) {
    super(0, e, t, i, s, r, a, o), this.type = "ConeGeometry", this.parameters = { radius: e, height: t, radialSegments: i, heightSegments: s, openEnded: r, thetaStart: a, thetaLength: o };
  }
  static fromJSON(e) {
    return new Wc(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class En {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
  }
  getPoint() {
    Ce("Curve: .getPoint() not implemented.");
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
    const h = i[s], u = i[s + 1] - h, d = (a - h) / u;
    return (s + d) / (r - 1);
  }
  getTangent(e, t) {
    let s = e - 1e-4, r = e + 1e-4;
    s < 0 && (s = 0), r > 1 && (r = 1);
    const a = this.getPoint(s), o = this.getPoint(r), l = t || (a.isVector2 ? new j() : new C());
    return l.copy(o).sub(a).normalize(), l;
  }
  getTangentAt(e, t) {
    const i = this.getUtoTmapping(e);
    return this.getTangent(i, t);
  }
  computeFrenetFrames(e, t = false) {
    const i = new C(), s = [], r = [], a = [], o = new C(), l = new Ke();
    for (let d = 0; d <= e; d++) {
      const g = d / e;
      s[d] = this.getTangentAt(g, new C());
    }
    r[0] = new C(), a[0] = new C();
    let c = Number.MAX_VALUE;
    const h = Math.abs(s[0].x), f = Math.abs(s[0].y), u = Math.abs(s[0].z);
    h <= c && (c = h, i.set(1, 0, 0)), f <= c && (c = f, i.set(0, 1, 0)), u <= c && i.set(0, 0, 1), o.crossVectors(s[0], i).normalize(), r[0].crossVectors(s[0], o), a[0].crossVectors(s[0], r[0]);
    for (let d = 1; d <= e; d++) {
      if (r[d] = r[d - 1].clone(), a[d] = a[d - 1].clone(), o.crossVectors(s[d - 1], s[d]), o.length() > Number.EPSILON) {
        o.normalize();
        const g = Math.acos(Fe(s[d - 1].dot(s[d]), -1, 1));
        r[d].applyMatrix4(l.makeRotationAxis(o, g));
      }
      a[d].crossVectors(s[d], r[d]);
    }
    if (t === true) {
      let d = Math.acos(Fe(r[0].dot(r[e]), -1, 1));
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
class Do extends En {
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
      const h = Math.cos(this.aRotation), f = Math.sin(this.aRotation), u = l - this.aX, d = c - this.aY;
      l = u * h - d * f + this.aX, c = u * f + d * h + this.aY;
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
class ef extends Do {
  constructor(e, t, i, s, r, a) {
    super(e, t, i, i, s, r, a), this.isArcCurve = true, this.type = "ArcCurve";
  }
}
function Uo() {
  let n = 0, e = 0, t = 0, i = 0;
  function s(r, a, o, l) {
    n = r, e = o, t = -3 * r + 3 * a - 2 * o - l, i = 2 * r - 2 * a + o + l;
  }
  return { initCatmullRom: function(r, a, o, l, c) {
    s(a, o, c * (o - r), c * (l - a));
  }, initNonuniformCatmullRom: function(r, a, o, l, c, h, f) {
    let u = (a - r) / c - (o - r) / (c + h) + (o - a) / h, d = (o - a) / h - (l - a) / (h + f) + (l - o) / f;
    u *= h, d *= h, s(a, o, u, d);
  }, calc: function(r) {
    const a = r * r, o = a * r;
    return n + e * r + t * a + i * o;
  } };
}
const yl = new C(), Tl = new C(), oa = new Uo(), la = new Uo(), ca = new Uo();
class tf extends En {
  constructor(e = [], t = false, i = "centripetal", s = 0.5) {
    super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = i, this.tension = s;
  }
  getPoint(e, t = new C()) {
    const i = t, s = this.points, r = s.length, a = (r - (this.closed ? 0 : 1)) * e;
    let o = Math.floor(a), l = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r) + 1) * r : l === 0 && o === r - 1 && (o = r - 2, l = 1);
    let c, h;
    this.closed || o > 0 ? c = s[(o - 1) % r] : (Tl.subVectors(s[0], s[1]).add(s[0]), c = Tl);
    const f = s[o % r], u = s[(o + 1) % r];
    if (this.closed || o + 2 < r ? h = s[(o + 2) % r] : (yl.subVectors(s[r - 1], s[r - 2]).add(s[r - 1]), h = yl), this.curveType === "centripetal" || this.curveType === "chordal") {
      const d = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(c.distanceToSquared(f), d), M = Math.pow(f.distanceToSquared(u), d), p = Math.pow(u.distanceToSquared(h), d);
      M < 1e-4 && (M = 1), g < 1e-4 && (g = M), p < 1e-4 && (p = M), oa.initNonuniformCatmullRom(c.x, f.x, u.x, h.x, g, M, p), la.initNonuniformCatmullRom(c.y, f.y, u.y, h.y, g, M, p), ca.initNonuniformCatmullRom(c.z, f.z, u.z, h.z, g, M, p);
    } else this.curveType === "catmullrom" && (oa.initCatmullRom(c.x, f.x, u.x, h.x, this.tension), la.initCatmullRom(c.y, f.y, u.y, h.y, this.tension), ca.initCatmullRom(c.z, f.z, u.z, h.z, this.tension));
    return i.set(oa.calc(l), la.calc(l), ca.calc(l)), i;
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
      this.points.push(new C().fromArray(s));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function bl(n, e, t, i, s) {
  const r = (i - e) * 0.5, a = (s - t) * 0.5, o = n * n, l = n * o;
  return (2 * t - 2 * i + r + a) * l + (-3 * t + 3 * i - 2 * r - a) * o + r * n + t;
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
function ds(n, e, t, i) {
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
function ps(n, e, t, i, s) {
  return af(n, e) + of(n, t) + lf(n, i) + cf(n, s);
}
class Xc extends En {
  constructor(e = new j(), t = new j(), i = new j(), s = new j()) {
    super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = s;
  }
  getPoint(e, t = new j()) {
    const i = t, s = this.v0, r = this.v1, a = this.v2, o = this.v3;
    return i.set(ps(e, s.x, r.x, a.x, o.x), ps(e, s.y, r.y, a.y, o.y)), i;
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
  constructor(e = new C(), t = new C(), i = new C(), s = new C()) {
    super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = s;
  }
  getPoint(e, t = new C()) {
    const i = t, s = this.v0, r = this.v1, a = this.v2, o = this.v3;
    return i.set(ps(e, s.x, r.x, a.x, o.x), ps(e, s.y, r.y, a.y, o.y), ps(e, s.z, r.z, a.z, o.z)), i;
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
class Yc extends En {
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
class uf extends En {
  constructor(e = new C(), t = new C()) {
    super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new C()) {
    const i = t;
    return e === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(e).add(this.v1)), i;
  }
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new C()) {
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
class qc extends En {
  constructor(e = new j(), t = new j(), i = new j()) {
    super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i;
  }
  getPoint(e, t = new j()) {
    const i = t, s = this.v0, r = this.v1, a = this.v2;
    return i.set(ds(e, s.x, r.x, a.x), ds(e, s.y, r.y, a.y)), i;
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
  constructor(e = new C(), t = new C(), i = new C()) {
    super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i;
  }
  getPoint(e, t = new C()) {
    const i = t, s = this.v0, r = this.v1, a = this.v2;
    return i.set(ds(e, s.x, r.x, a.x), ds(e, s.y, r.y, a.y), ds(e, s.z, r.z, a.z)), i;
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
class Zc extends En {
  constructor(e = []) {
    super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new j()) {
    const i = t, s = this.points, r = (s.length - 1) * e, a = Math.floor(r), o = r - a, l = s[a === 0 ? a : a - 1], c = s[a], h = s[a > s.length - 2 ? s.length - 1 : a + 1], f = s[a > s.length - 3 ? s.length - 1 : a + 2];
    return i.set(bl(o, l.x, c.x, h.x, f.x), bl(o, l.y, c.y, h.y, f.y)), i;
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
var Al = Object.freeze({ __proto__: null, ArcCurve: ef, CatmullRomCurve3: tf, CubicBezierCurve: Xc, CubicBezierCurve3: hf, EllipseCurve: Do, LineCurve: Yc, LineCurve3: uf, QuadraticBezierCurve: qc, QuadraticBezierCurve3: ff, SplineCurve: Zc });
class df extends En {
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
      this.curves.push(new Al[i](t, e));
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
      this.curves.push(new Al[s.type]().fromJSON(s));
    }
    return this;
  }
}
class Rl extends df {
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
    const i = new Yc(this.currentPoint.clone(), new j(e, t));
    return this.curves.push(i), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, i, s) {
    const r = new qc(this.currentPoint.clone(), new j(e, t), new j(i, s));
    return this.curves.push(r), this.currentPoint.set(i, s), this;
  }
  bezierCurveTo(e, t, i, s, r, a) {
    const o = new Xc(this.currentPoint.clone(), new j(e, t), new j(i, s), new j(r, a));
    return this.curves.push(o), this.currentPoint.set(r, a), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), i = new Zc(t);
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
    const c = new Do(e, t, i, s, r, a, o, l);
    if (this.curves.length > 0) {
      const f = c.getPoint(0);
      f.equals(this.currentPoint) || this.lineTo(f.x, f.y);
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
class pf extends Rl {
  constructor(e) {
    super(e), this.uuid = xn(), this.type = "Shape", this.holes = [];
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
      this.holes.push(new Rl().fromJSON(s));
    }
    return this;
  }
}
function mf(n, e, t = 2) {
  const i = e && e.length, s = i ? e[0] * t : n.length;
  let r = Kc(n, 0, s, t, true);
  const a = [];
  if (!r || r.next === r.prev) return a;
  let o, l, c;
  if (i && (r = Sf(n, e, r, t)), n.length > 80 * t) {
    o = n[0], l = n[1];
    let h = o, f = l;
    for (let u = t; u < s; u += t) {
      const d = n[u], g = n[u + 1];
      d < o && (o = d), g < l && (l = g), d > h && (h = d), g > f && (f = g);
    }
    c = Math.max(h - o, f - l), c = c !== 0 ? 32767 / c : 0;
  }
  return Ms(r, a, t, o, l, c, 0), a;
}
function Kc(n, e, t, i, s) {
  let r;
  if (s === Df(n, e, t, i) > 0) for (let a = e; a < t; a += i) r = wl(a / i | 0, n[a], n[a + 1], r);
  else for (let a = t - i; a >= e; a -= i) r = wl(a / i | 0, n[a], n[a + 1], r);
  return r && Yi(r, r.next) && (ys(r), r = r.next), r;
}
function li(n, e) {
  if (!n) return n;
  e || (e = n);
  let t = n, i;
  do
    if (i = false, !t.steiner && (Yi(t, t.next) || ht(t.prev, t, t.next) === 0)) {
      if (ys(t), t = e = t.prev, t === t.next) break;
      i = true;
    } else t = t.next;
  while (i || t !== e);
  return e;
}
function Ms(n, e, t, i, s, r, a) {
  if (!n) return;
  !a && r && bf(n, i, s, r);
  let o = n;
  for (; n.prev !== n.next; ) {
    const l = n.prev, c = n.next;
    if (r ? _f(n, i, s, r) : gf(n)) {
      e.push(l.i, n.i, c.i), ys(n), n = c.next, o = c.next;
      continue;
    }
    if (n = c, n === o) {
      a ? a === 1 ? (n = vf(li(n), e), Ms(n, e, t, i, s, r, 2)) : a === 2 && xf(n, e, t, i, s, r) : Ms(li(n), e, t, i, s, r, 1);
      break;
    }
  }
}
function gf(n) {
  const e = n.prev, t = n, i = n.next;
  if (ht(e, t, i) >= 0) return false;
  const s = e.x, r = t.x, a = i.x, o = e.y, l = t.y, c = i.y, h = Math.min(s, r, a), f = Math.min(o, l, c), u = Math.max(s, r, a), d = Math.max(o, l, c);
  let g = i.next;
  for (; g !== e; ) {
    if (g.x >= h && g.x <= u && g.y >= f && g.y <= d && cs(s, o, r, l, a, c, g.x, g.y) && ht(g.prev, g, g.next) >= 0) return false;
    g = g.next;
  }
  return true;
}
function _f(n, e, t, i) {
  const s = n.prev, r = n, a = n.next;
  if (ht(s, r, a) >= 0) return false;
  const o = s.x, l = r.x, c = a.x, h = s.y, f = r.y, u = a.y, d = Math.min(o, l, c), g = Math.min(h, f, u), M = Math.max(o, l, c), p = Math.max(h, f, u), m = ho(d, g, e, t, i), E = ho(M, p, e, t, i);
  let y = n.prevZ, x = n.nextZ;
  for (; y && y.z >= m && x && x.z <= E; ) {
    if (y.x >= d && y.x <= M && y.y >= g && y.y <= p && y !== s && y !== a && cs(o, h, l, f, c, u, y.x, y.y) && ht(y.prev, y, y.next) >= 0 || (y = y.prevZ, x.x >= d && x.x <= M && x.y >= g && x.y <= p && x !== s && x !== a && cs(o, h, l, f, c, u, x.x, x.y) && ht(x.prev, x, x.next) >= 0)) return false;
    x = x.nextZ;
  }
  for (; y && y.z >= m; ) {
    if (y.x >= d && y.x <= M && y.y >= g && y.y <= p && y !== s && y !== a && cs(o, h, l, f, c, u, y.x, y.y) && ht(y.prev, y, y.next) >= 0) return false;
    y = y.prevZ;
  }
  for (; x && x.z <= E; ) {
    if (x.x >= d && x.x <= M && x.y >= g && x.y <= p && x !== s && x !== a && cs(o, h, l, f, c, u, x.x, x.y) && ht(x.prev, x, x.next) >= 0) return false;
    x = x.nextZ;
  }
  return true;
}
function vf(n, e) {
  let t = n;
  do {
    const i = t.prev, s = t.next.next;
    !Yi(i, s) && $c(i, t, t.next, s) && Es(i, s) && Es(s, i) && (e.push(i.i, t.i, s.i), ys(t), ys(t.next), t = n = s), t = t.next;
  } while (t !== n);
  return li(t);
}
function xf(n, e, t, i, s, r) {
  let a = n;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && wf(a, o)) {
        let l = Qc(a, o);
        a = li(a, a.next), l = li(l, l.next), Ms(a, e, t, i, s, r, 0), Ms(l, e, t, i, s, r, 0);
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
    const o = e[r] * i, l = r < a - 1 ? e[r + 1] * i : n.length, c = Kc(n, o, l, i, false);
    c === c.next && (c.steiner = true), s.push(Rf(c));
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
  const i = Qc(t, n);
  return li(i, i.next), li(t, t.next);
}
function yf(n, e) {
  let t = e;
  const i = n.x, s = n.y;
  let r = -1 / 0, a;
  if (Yi(n, t)) return t;
  do {
    if (Yi(n, t.next)) return t.next;
    if (s <= t.y && s >= t.next.y && t.next.y !== t.y) {
      const f = t.x + (s - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (f <= i && f > r && (r = f, a = t.x < t.next.x ? t : t.next, f === i)) return a;
    }
    t = t.next;
  } while (t !== e);
  if (!a) return null;
  const o = a, l = a.x, c = a.y;
  let h = 1 / 0;
  t = a;
  do {
    if (i >= t.x && t.x >= l && i !== t.x && Jc(s < c ? i : r, s, l, c, s < c ? r : i, s, t.x, t.y)) {
      const f = Math.abs(s - t.y) / (i - t.x);
      Es(t, n) && (f < h || f === h && (t.x > a.x || t.x === a.x && Tf(a, t))) && (a = t, h = f);
    }
    t = t.next;
  } while (t !== o);
  return a;
}
function Tf(n, e) {
  return ht(n.prev, n, e.prev) < 0 && ht(e.next, n, n.next) < 0;
}
function bf(n, e, t, i) {
  let s = n;
  do
    s.z === 0 && (s.z = ho(s.x, s.y, e, t, i)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next;
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
      for (let c = 0; c < t && (o++, a = a.nextZ, !!a); c++) ;
      let l = t;
      for (; o > 0 || l > 0 && a; ) o !== 0 && (l === 0 || !a || i.z <= a.z) ? (s = i, i = i.nextZ, o--) : (s = a, a = a.nextZ, l--), r ? r.nextZ = s : n = s, s.prevZ = r, r = s;
      i = a;
    }
    r.nextZ = null, t *= 2;
  } while (e > 1);
  return n;
}
function ho(n, e, t, i, s) {
  return n = (n - t) * s | 0, e = (e - i) * s | 0, n = (n | n << 8) & 16711935, n = (n | n << 4) & 252645135, n = (n | n << 2) & 858993459, n = (n | n << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, n | e << 1;
}
function Rf(n) {
  let e = n, t = n;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== n);
  return t;
}
function Jc(n, e, t, i, s, r, a, o) {
  return (s - a) * (e - o) >= (n - a) * (r - o) && (n - a) * (i - o) >= (t - a) * (e - o) && (t - a) * (r - o) >= (s - a) * (i - o);
}
function cs(n, e, t, i, s, r, a, o) {
  return !(n === a && e === o) && Jc(n, e, t, i, s, r, a, o);
}
function wf(n, e) {
  return n.next.i !== e.i && n.prev.i !== e.i && !Cf(n, e) && (Es(n, e) && Es(e, n) && Pf(n, e) && (ht(n.prev, n, e.prev) || ht(n, e.prev, e)) || Yi(n, e) && ht(n.prev, n, n.next) > 0 && ht(e.prev, e, e.next) > 0);
}
function ht(n, e, t) {
  return (e.y - n.y) * (t.x - e.x) - (e.x - n.x) * (t.y - e.y);
}
function Yi(n, e) {
  return n.x === e.x && n.y === e.y;
}
function $c(n, e, t, i) {
  const s = ir(ht(n, e, t)), r = ir(ht(n, e, i)), a = ir(ht(t, i, n)), o = ir(ht(t, i, e));
  return !!(s !== r && a !== o || s === 0 && nr(n, t, e) || r === 0 && nr(n, i, e) || a === 0 && nr(t, n, i) || o === 0 && nr(t, e, i));
}
function nr(n, e, t) {
  return e.x <= Math.max(n.x, t.x) && e.x >= Math.min(n.x, t.x) && e.y <= Math.max(n.y, t.y) && e.y >= Math.min(n.y, t.y);
}
function ir(n) {
  return n > 0 ? 1 : n < 0 ? -1 : 0;
}
function Cf(n, e) {
  let t = n;
  do {
    if (t.i !== n.i && t.next.i !== n.i && t.i !== e.i && t.next.i !== e.i && $c(t, t.next, n, e)) return true;
    t = t.next;
  } while (t !== n);
  return false;
}
function Es(n, e) {
  return ht(n.prev, n, n.next) < 0 ? ht(n, e, n.next) >= 0 && ht(n, n.prev, e) >= 0 : ht(n, e, n.prev) < 0 || ht(n, n.next, e) < 0;
}
function Pf(n, e) {
  let t = n, i = false;
  const s = (n.x + e.x) / 2, r = (n.y + e.y) / 2;
  do
    t.y > r != t.next.y > r && t.next.y !== t.y && s < (t.next.x - t.x) * (r - t.y) / (t.next.y - t.y) + t.x && (i = !i), t = t.next;
  while (t !== n);
  return i;
}
function Qc(n, e) {
  const t = uo(n.i, n.x, n.y), i = uo(e.i, e.x, e.y), s = n.next, r = e.prev;
  return n.next = e, e.prev = n, t.next = s, s.prev = t, i.next = t, t.prev = i, r.next = i, i.prev = r, i;
}
function wl(n, e, t, i) {
  const s = uo(n, e, t);
  return i ? (s.next = i.next, s.prev = i, i.next.prev = s, i.next = s) : (s.prev = s, s.next = s), s;
}
function ys(n) {
  n.next.prev = n.prev, n.prev.next = n.next, n.prevZ && (n.prevZ.nextZ = n.nextZ), n.nextZ && (n.nextZ.prevZ = n.prevZ);
}
function uo(n, e, t) {
  return { i: n, x: e, y: t, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: false };
}
function Df(n, e, t, i) {
  let s = 0;
  for (let r = e, a = t - i; r < t; r += i) s += (n[a] - n[r]) * (n[r + 1] + n[a + 1]), a = r;
  return s;
}
class Uf {
  static triangulate(e, t, i = 2) {
    return mf(e, t, i);
  }
}
class ms {
  static area(e) {
    const t = e.length;
    let i = 0;
    for (let s = t - 1, r = 0; r < t; s = r++) i += e[s].x * e[r].y - e[r].x * e[s].y;
    return i * 0.5;
  }
  static isClockWise(e) {
    return ms.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const i = [], s = [], r = [];
    Cl(e), Pl(i, e);
    let a = e.length;
    t.forEach(Cl);
    for (let l = 0; l < t.length; l++) s.push(a), a += t[l].length, Pl(i, t[l]);
    const o = Uf.triangulate(i, s);
    for (let l = 0; l < o.length; l += 3) r.push(o.slice(l, l + 3));
    return r;
  }
}
function Cl(n) {
  const e = n.length;
  e > 2 && n[e - 1].equals(n[0]) && n.pop();
}
function Pl(n, e) {
  for (let t = 0; t < e.length; t++) n.push(e[t].x), n.push(e[t].y);
}
class Rr extends Ft {
  constructor(e = 1, t = 1, i = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: i, heightSegments: s };
    const r = e / 2, a = t / 2, o = Math.floor(i), l = Math.floor(s), c = o + 1, h = l + 1, f = e / o, u = t / l, d = [], g = [], M = [], p = [];
    for (let m = 0; m < h; m++) {
      const E = m * u - a;
      for (let y = 0; y < c; y++) {
        const x = y * f - r;
        g.push(x, -E, 0), M.push(0, 0, 1), p.push(y / o), p.push(1 - m / l);
      }
    }
    for (let m = 0; m < l; m++) for (let E = 0; E < o; E++) {
      const y = E + c * m, x = E + c * (m + 1), R = E + 1 + c * (m + 1), A = E + 1 + c * m;
      d.push(y, x, A), d.push(x, R, A);
    }
    this.setIndex(d), this.setAttribute("position", new pt(g, 3)), this.setAttribute("normal", new pt(M, 3)), this.setAttribute("uv", new pt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Rr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class jc extends Ft {
  constructor(e = new pf([new j(0, 0.5), new j(-0.5, -0.5), new j(0.5, -0.5)]), t = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = { shapes: e, curveSegments: t };
    const i = [], s = [], r = [], a = [];
    let o = 0, l = 0;
    if (Array.isArray(e) === false) c(e);
    else for (let h = 0; h < e.length; h++) c(e[h]), this.addGroup(o, l, h), o += l, l = 0;
    this.setIndex(i), this.setAttribute("position", new pt(s, 3)), this.setAttribute("normal", new pt(r, 3)), this.setAttribute("uv", new pt(a, 2));
    function c(h) {
      const f = s.length / 3, u = h.extractPoints(t);
      let d = u.shape;
      const g = u.holes;
      ms.isClockWise(d) === false && (d = d.reverse());
      for (let p = 0, m = g.length; p < m; p++) {
        const E = g[p];
        ms.isClockWise(E) === true && (g[p] = E.reverse());
      }
      const M = ms.triangulateShape(d, g);
      for (let p = 0, m = g.length; p < m; p++) {
        const E = g[p];
        d = d.concat(E);
      }
      for (let p = 0, m = d.length; p < m; p++) {
        const E = d[p];
        s.push(E.x, E.y, 0), r.push(0, 0, 1), a.push(E.x, E.y);
      }
      for (let p = 0, m = M.length; p < m; p++) {
        const E = M[p], y = E[0] + f, x = E[1] + f, R = E[2] + f;
        i.push(y, x, R), l += 3;
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
    return new jc(i, e.curveSegments);
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
class eh extends Ft {
  constructor(e = 1, t = 0.4, i = 12, s = 48, r = Math.PI * 2, a = 0, o = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = { radius: e, tube: t, radialSegments: i, tubularSegments: s, arc: r, thetaStart: a, thetaLength: o }, i = Math.floor(i), s = Math.floor(s);
    const l = [], c = [], h = [], f = [], u = new C(), d = new C(), g = new C();
    for (let M = 0; M <= i; M++) {
      const p = a + M / i * o;
      for (let m = 0; m <= s; m++) {
        const E = m / s * r;
        d.x = (e + t * Math.cos(p)) * Math.cos(E), d.y = (e + t * Math.cos(p)) * Math.sin(E), d.z = t * Math.sin(p), c.push(d.x, d.y, d.z), u.x = e * Math.cos(E), u.y = e * Math.sin(E), g.subVectors(d, u).normalize(), h.push(g.x, g.y, g.z), f.push(m / s), f.push(M / i);
      }
    }
    for (let M = 1; M <= i; M++) for (let p = 1; p <= s; p++) {
      const m = (s + 1) * M + p - 1, E = (s + 1) * (M - 1) + p - 1, y = (s + 1) * (M - 1) + p, x = (s + 1) * M + p;
      l.push(m, E, x), l.push(E, y, x);
    }
    this.setIndex(l), this.setAttribute("position", new pt(c, 3)), this.setAttribute("normal", new pt(h, 3)), this.setAttribute("uv", new pt(f, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new eh(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
function qi(n) {
  const e = {};
  for (const t in n) {
    e[t] = {};
    for (const i in n[t]) {
      const s = n[t][i];
      if (Dl(s)) s.isRenderTargetTexture ? (Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][i] = null) : e[t][i] = s.clone();
      else if (Array.isArray(s)) if (Dl(s[0])) {
        const r = [];
        for (let a = 0, o = s.length; a < o; a++) r[a] = s[a].clone();
        e[t][i] = r;
      } else e[t][i] = s.slice();
      else e[t][i] = s;
    }
  }
  return e;
}
function kt(n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = qi(n[t]);
    for (const s in i) e[s] = i[s];
  }
  return e;
}
function Dl(n) {
  return n && (n.isColor || n.isMatrix3 || n.isMatrix4 || n.isVector2 || n.isVector3 || n.isVector4 || n.isTexture || n.isQuaternion);
}
function Lf(n) {
  const e = [];
  for (let t = 0; t < n.length; t++) e.push(n[t].clone());
  return e;
}
function th(n) {
  const e = n.getRenderTarget();
  return e === null ? n.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : Ge.workingColorSpace;
}
const Nf = { clone: qi, merge: kt };
var Ff = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Of = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Tt extends Mn {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ff, this.fragmentShader = Of, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = qi(e.uniforms), this.uniformsGroups = Lf(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
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
          this.uniforms[i].value = new Be().setHex(s.value);
          break;
        case "v2":
          this.uniforms[i].value = new j().fromArray(s.value);
          break;
        case "v3":
          this.uniforms[i].value = new C().fromArray(s.value);
          break;
        case "v4":
          this.uniforms[i].value = new lt().fromArray(s.value);
          break;
        case "m3":
          this.uniforms[i].value = new Ue().fromArray(s.value);
          break;
        case "m4":
          this.uniforms[i].value = new Ke().fromArray(s.value);
          break;
        default:
          this.uniforms[i].value = s.value;
      }
    }
    if (e.defines !== void 0 && (this.defines = e.defines), e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion), e.extensions !== void 0) for (const i in e.extensions) this.extensions[i] = e.extensions[i];
    return e.lights !== void 0 && (this.lights = e.lights), e.clipping !== void 0 && (this.clipping = e.clipping), this;
  }
}
class Bf extends Tt {
  constructor(e) {
    super(e), this.isRawShaderMaterial = true, this.type = "RawShaderMaterial";
  }
}
class zf extends Mn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Be(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Be(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = oo, this.normalScale = new j(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ln(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Hf extends Mn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = ci, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class kf extends Mn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const gs = { enabled: false, files: {}, add: function(n, e) {
  this.enabled !== false && (Ul(n) || (this.files[n] = e));
}, get: function(n) {
  if (this.enabled !== false && !Ul(n)) return this.files[n];
}, remove: function(n) {
  delete this.files[n];
}, clear: function() {
  this.files = {};
} };
function Ul(n) {
  try {
    const e = n.slice(n.indexOf(":") + 1);
    return new URL(e).protocol === "blob:";
  } catch {
    return false;
  }
}
class Gf {
  constructor(e, t, i) {
    const s = this;
    let r = false, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this._abortController = null, this.itemStart = function(h) {
      o++, r === false && s.onStart !== void 0 && s.onStart(h, a, o), r = true;
    }, this.itemEnd = function(h) {
      a++, s.onProgress !== void 0 && s.onProgress(h, a, o), a === o && (r = false, s.onLoad !== void 0 && s.onLoad());
    }, this.itemError = function(h) {
      s.onError !== void 0 && s.onError(h);
    }, this.resolveURL = function(h) {
      return h = h.normalize("NFC"), l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, f) {
      return c.push(h, f), this;
    }, this.removeHandler = function(h) {
      const f = c.indexOf(h);
      return f !== -1 && c.splice(f, 2), this;
    }, this.getHandler = function(h) {
      for (let f = 0, u = c.length; f < u; f += 2) {
        const d = c[f], g = c[f + 1];
        if (d.global && (d.lastIndex = 0), d.test(h)) return g;
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
const Vf = new Gf();
class As {
  constructor(e) {
    this.manager = e !== void 0 ? e : Vf, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
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
As.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const wn = {};
class Wf extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Xf extends As {
  constructor(e) {
    super(e), this.mimeType = "", this.responseType = "", this._abortController = new AbortController();
  }
  load(e, t, i, s) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = gs.get(`file:${e}`);
    if (r !== void 0) {
      this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0);
      return;
    }
    if (wn[e] !== void 0) {
      wn[e].push({ onLoad: t, onProgress: i, onError: s });
      return;
    }
    wn[e] = [], wn[e].push({ onLoad: t, onProgress: i, onError: s });
    const a = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin", signal: typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal }), o = this.mimeType, l = this.responseType;
    fetch(a).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && Ce("FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c;
        const h = wn[e], f = c.body.getReader(), u = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), d = u ? parseInt(u) : 0, g = d !== 0;
        let M = 0;
        const p = new ReadableStream({ start(m) {
          E();
          function E() {
            f.read().then(({ done: y, value: x }) => {
              if (y) m.close();
              else {
                M += x.byteLength;
                const R = new ProgressEvent("progress", { lengthComputable: g, loaded: M, total: d });
                for (let A = 0, w = h.length; A < w; A++) {
                  const v = h[A];
                  v.onProgress && v.onProgress(R);
                }
                m.enqueue(x), E();
              }
            }, (y) => {
              m.error(y);
            });
          }
        } });
        return new Response(p);
      } else throw new Wf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return c.json();
        default:
          if (o === "") return c.text();
          {
            const f = /charset="?([^;"\s]*)"?/i.exec(o), u = f && f[1] ? f[1].toLowerCase() : void 0, d = new TextDecoder(u);
            return c.arrayBuffer().then((g) => d.decode(g));
          }
      }
    }).then((c) => {
      gs.add(`file:${e}`, c);
      const h = wn[e];
      delete wn[e];
      for (let f = 0, u = h.length; f < u; f++) {
        const d = h[f];
        d.onLoad && d.onLoad(c);
      }
    }).catch((c) => {
      const h = wn[e];
      if (h === void 0) throw this.manager.itemError(e), c;
      delete wn[e];
      for (let f = 0, u = h.length; f < u; f++) {
        const d = h[f];
        d.onError && d.onError(c);
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
const Pi = /* @__PURE__ */ new WeakMap();
class Yf extends As {
  constructor(e) {
    super(e);
  }
  load(e, t, i, s) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = gs.get(`image:${e}`);
    if (a !== void 0) {
      if (a.complete === true) r.manager.itemStart(e), setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0);
      else {
        let f = Pi.get(a);
        f === void 0 && (f = [], Pi.set(a, f)), f.push({ onLoad: t, onError: s });
      }
      return a;
    }
    const o = xs("img");
    function l() {
      h(), t && t(this);
      const f = Pi.get(this) || [];
      for (let u = 0; u < f.length; u++) {
        const d = f[u];
        d.onLoad && d.onLoad(this);
      }
      Pi.delete(this), r.manager.itemEnd(e);
    }
    function c(f) {
      h(), s && s(f), gs.remove(`image:${e}`);
      const u = Pi.get(this) || [];
      for (let d = 0; d < u.length; d++) {
        const g = u[d];
        g.onError && g.onError(f);
      }
      Pi.delete(this), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", l, false), o.removeEventListener("error", c, false);
    }
    return o.addEventListener("load", l, false), o.addEventListener("error", c, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), gs.add(`image:${e}`, o), r.manager.itemStart(e), o.src = e, o;
  }
}
class Uv extends As {
  constructor(e) {
    super(e);
  }
  load(e, t, i, s) {
    const r = new Rt(), a = new Yf(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      r.image = o, r.needsUpdate = true, t !== void 0 && t(r);
    }, i, s), r;
  }
}
class nh extends yt {
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Be(e), this.intensity = t;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
  }
}
class Iv extends nh {
  constructor(e, t, i) {
    super(e, i), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(yt.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Be(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.groundColor = this.groundColor.getHex(), t;
  }
}
const ha = new Ke(), Il = new C(), Ll = new C();
class qf {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new j(512, 512), this.mapType = ct, this.map = null, this.mapPass = null, this.matrix = new Ke(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new Co(), this._frameExtents = new j(1, 1), this._viewportCount = 1, this._viewports = [new lt(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, i = this.matrix;
    Il.setFromMatrixPosition(e.matrixWorld), t.position.copy(Il), Ll.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Ll), t.updateMatrixWorld(), ha.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ha, t.coordinateSystem, t.reversedDepth), t.coordinateSystem === vs || t.reversedDepth ? i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1) : i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), i.multiply(ha);
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
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.biasNode = e.biasNode, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
  }
}
const sr = new C(), rr = new Kn(), dn = new C();
class ih extends yt {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Ke(), this.projectionMatrix = new Ke(), this.projectionMatrixInverse = new Ke(), this.coordinateSystem = _n, this._reversedDepth = false;
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
    super.updateMatrixWorld(e), this.matrixWorld.decompose(sr, rr, dn), dn.x === 1 && dn.y === 1 && dn.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(sr, rr, dn.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t, i = false) {
    super.updateWorldMatrix(e, t, i), this.matrixWorld.decompose(sr, rr, dn), dn.x === 1 && dn.y === 1 && dn.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(sr, rr, dn.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Vn = new C(), Nl = new j(), Fl = new j();
class Zt extends ih {
  constructor(e = 50, t = 1, i = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = s, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Ss * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(us * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Ss * 2 * Math.atan(Math.tan(us * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, i) {
    Vn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Vn.x, Vn.y).multiplyScalar(-e / Vn.z), Vn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(Vn.x, Vn.y).multiplyScalar(-e / Vn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Nl, Fl), t.subVectors(Fl, Nl);
  }
  setViewOffset(e, t, i, s, r, a) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(us * 0.5 * this.fov) / this.zoom, i = 2 * t, s = this.aspect * i, r = -0.5 * s;
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
class wr extends ih {
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
class Zf extends qf {
  constructor() {
    super(new wr(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class Lv extends nh {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(yt.DEFAULT_UP), this.updateMatrix(), this.target = new yt(), this.shadow = new Zf();
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
const Di = -90, Ui = 1;
class Kf extends yt {
  constructor(e, t, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Zt(Di, Ui, e, t);
    s.layers = this.layers, this.add(s);
    const r = new Zt(Di, Ui, e, t);
    r.layers = this.layers, this.add(r);
    const a = new Zt(Di, Ui, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Zt(Di, Ui, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Zt(Di, Ui, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Zt(Di, Ui, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [i, s, r, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === _n) i.up.set(0, 1, 0), i.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === vs) i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: s } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, l, c, h] = this.children, f = e.getRenderTarget(), u = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = false;
    const M = i.texture.generateMipmaps;
    i.texture.generateMipmaps = false;
    let p = false;
    e.isWebGLRenderer === true ? p = e.state.buffers.depth.getReversed() : p = e.reversedDepthBuffer, e.setRenderTarget(i, 0, s), p && e.autoClear === false && e.clearDepth(), e.render(t, r), e.setRenderTarget(i, 1, s), p && e.autoClear === false && e.clearDepth(), e.render(t, a), e.setRenderTarget(i, 2, s), p && e.autoClear === false && e.clearDepth(), e.render(t, o), e.setRenderTarget(i, 3, s), p && e.autoClear === false && e.clearDepth(), e.render(t, l), e.setRenderTarget(i, 4, s), p && e.autoClear === false && e.clearDepth(), e.render(t, c), i.texture.generateMipmaps = M, e.setRenderTarget(i, 5, s), p && e.autoClear === false && e.clearDepth(), e.render(t, h), e.setRenderTarget(f, u, d), e.xr.enabled = g, i.texture.needsPMREMUpdate = true;
  }
}
class Jf extends Zt {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = e;
  }
}
let Nv = class {
  constructor() {
    this._previousTime = 0, this._currentTime = 0, this._startTime = performance.now(), this._delta = 0, this._elapsed = 0, this._timescale = 1, this._document = null, this._pageVisibilityHandler = null;
  }
  connect(e) {
    this._document = e, e.hidden !== void 0 && (this._pageVisibilityHandler = $f.bind(this), e.addEventListener("visibilitychange", this._pageVisibilityHandler, false));
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
function $f() {
  this._document.hidden === false && this.reset();
}
class Pe {
  constructor(e) {
    this.value = e;
  }
  clone() {
    return new Pe(this.value.clone === void 0 ? this.value : this.value.clone());
  }
}
const Ol = new Ke();
class Ov {
  constructor(e, t, i = 0, s = 1 / 0) {
    this.ray = new Ts(e, t), this.near = i, this.far = s, this.camera = null, this.layers = new wo(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, t.projectionMatrix.elements[14]).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : ke("Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return Ol.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(Ol), this;
  }
  intersectObject(e, t = true, i = []) {
    return fo(e, this, i, t), i.sort(Bl), i;
  }
  intersectObjects(e, t = true, i = []) {
    for (let s = 0, r = e.length; s < r; s++) fo(e[s], this, i, t);
    return i.sort(Bl), i;
  }
}
function Bl(n, e) {
  return n.distance - e.distance;
}
function fo(n, e, t, i) {
  let s = true;
  if (n.layers.test(e.layers) && n.raycast(e, t) === false && (s = false), s === true && i === true) {
    const r = n.children;
    for (let a = 0, o = r.length; a < o; a++) fo(r[a], e, t, true);
  }
}
class zl {
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
    return this.phi = Fe(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, i) {
    return this.radius = Math.sqrt(e * e + t * t + i * i), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, i), this.phi = Math.acos(Fe(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _sh = class _sh {
  constructor(e, t, i, s) {
    this.elements = [1, 0, 0, 1], e !== void 0 && this.set(e, t, i, s);
  }
  identity() {
    return this.set(1, 0, 0, 1), this;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 4; i++) this.elements[i] = e[i + t];
    return this;
  }
  set(e, t, i, s) {
    const r = this.elements;
    return r[0] = e, r[2] = t, r[1] = i, r[3] = s, this;
  }
};
_sh.prototype.isMatrix2 = true;
let sh = _sh;
class rh extends cn {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(e) {
    if (e === void 0) {
      Ce("Controls: connect() now requires an element.");
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
function Hl(n, e, t, i) {
  const s = Qf(i);
  switch (t) {
    case Uc:
      return n * e;
    case So:
      return n * e / s.components * s.byteLength;
    case Mo:
      return n * e / s.components * s.byteLength;
    case ai:
      return n * e * 2 / s.components * s.byteLength;
    case Eo:
      return n * e * 2 / s.components * s.byteLength;
    case Ic:
      return n * e * 3 / s.components * s.byteLength;
    case ln:
      return n * e * 4 / s.components * s.byteLength;
    case yo:
      return n * e * 4 / s.components * s.byteLength;
    case ur:
    case fr:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case dr:
    case pr:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ua:
    case La:
      return Math.max(n, 16) * Math.max(e, 8) / 4;
    case Da:
    case Ia:
      return Math.max(n, 8) * Math.max(e, 8) / 2;
    case Na:
    case Fa:
    case Ba:
    case za:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Oa:
    case xr:
    case Ha:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ka:
      return Math.floor((n + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ga:
      return Math.floor((n + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Va:
      return Math.floor((n + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Wa:
      return Math.floor((n + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Xa:
      return Math.floor((n + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Ya:
      return Math.floor((n + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case qa:
      return Math.floor((n + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Za:
      return Math.floor((n + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Ka:
      return Math.floor((n + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Ja:
      return Math.floor((n + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case $a:
      return Math.floor((n + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Qa:
      return Math.floor((n + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case ja:
      return Math.floor((n + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case eo:
      return Math.floor((n + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case to:
    case no:
    case io:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
    case so:
    case ro:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 8;
    case Sr:
    case ao:
      return Math.ceil(n / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function Qf(n) {
  switch (n) {
    case ct:
    case wc:
      return { byteLength: 1, components: 1 };
    case _s:
    case Cc:
    case Un:
      return { byteLength: 2, components: 1 };
    case vo:
    case xo:
      return { byteLength: 2, components: 4 };
    case Sn:
    case _o:
    case tn:
      return { byteLength: 4, components: 1 };
    case Pc:
    case Dc:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "185" } }));
typeof window < "u" && (window.__THREE__ ? Ce("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "185");
/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function ah() {
  let n = null, e = false, t = null, i = null;
  function s(r, a) {
    t(r, a), i = n.requestAnimationFrame(s);
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
function jf(n) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, h = o.usage, f = c.byteLength, u = n.createBuffer();
    n.bindBuffer(l, u), n.bufferData(l, c, h), o.onUploadCallback();
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
    return { buffer: u, type: d, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: f };
  }
  function i(o, l, c) {
    const h = l.array, f = l.updateRanges;
    if (n.bindBuffer(c, o), f.length === 0) n.bufferSubData(c, 0, h);
    else {
      f.sort((d, g) => d.start - g.start);
      let u = 0;
      for (let d = 1; d < f.length; d++) {
        const g = f[u], M = f[d];
        M.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, M.start + M.count - g.start) : (++u, f[u] = M);
      }
      f.length = u + 1;
      for (let d = 0, g = f.length; d < g; d++) {
        const M = f[d];
        n.bufferSubData(c, M.start * h.BYTES_PER_ELEMENT, h, M.start, M.count);
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
var ed = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, td = `#ifdef USE_ALPHAHASH
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
#endif`, nd = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, id = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, sd = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, rd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, ad = `#ifdef USE_AOMAP
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
#endif`, od = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, ld = `#ifdef USE_BATCHING
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
#endif`, cd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, hd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, ud = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, fd = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, dd = `#ifdef USE_IRIDESCENCE
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
#endif`, pd = `#ifdef USE_BUMPMAP
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
#endif`, md = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, gd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, _d = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, vd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, xd = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, Sd = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, Md = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, Ed = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`, yd = `#define PI 3.141592653589793
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
} // validated`, Td = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, bd = `vec3 transformedNormal = objectNormal;
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
#endif`, Ad = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Rd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, wd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Cd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Pd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Dd = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Ud = `#ifdef USE_ENVMAP
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
#endif`, Id = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
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
#endif`, Nd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Fd = `#ifdef USE_ENVMAP
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
#endif`, Od = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Bd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, zd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Hd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, kd = `#ifdef USE_GRADIENTMAP
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
}`, Gd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Vd = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Wd = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Xd = `uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`, Yd = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`, qd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Zd = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Kd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Jd = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, $d = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
#endif`, Qd = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
	vec3 f0 = material.specularColorBlended;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`, jd = `
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, ep = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`, tp = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, np = `#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`, ip = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, sp = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, rp = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, ap = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, op = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, lp = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, cp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, hp = `#if defined( USE_POINTS_UV )
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
#endif`, up = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, fp = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, dp = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, pp = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, mp = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, gp = `#ifdef USE_MORPHTARGETS
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
#endif`, _p = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, vp = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, xp = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Sp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Mp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ep = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`, yp = `#ifdef USE_NORMALMAP
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
#endif`, Tp = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, bp = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Ap = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Rp = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, wp = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Cp = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Pp = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Dp = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Up = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Ip = `#ifdef DITHERING
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
#endif`, Np = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Fp = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`, Op = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Bp = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`, zp = `float getShadowMask() {
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
}`, Hp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, kp = `#ifdef USE_SKINNING
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
#endif`, Gp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Vp = `#ifdef USE_SKINNING
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
#endif`, Wp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Xp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Yp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, qp = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Zp = `#ifdef USE_TRANSMISSION
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
#endif`, Kp = `#ifdef USE_TRANSMISSION
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
#endif`, Jp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, $p = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Qp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, jp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const em = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, tm = `uniform sampler2D t2D;
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
}`, nm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, im = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, sm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, rm = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, am = `#include <common>
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
}`, om = `#if DEPTH_PACKING == 3200
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
}`, lm = `#define DISTANCE
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
}`, cm = `#define DISTANCE
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
}`, hm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, um = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, fm = `uniform float scale;
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
}`, dm = `uniform vec3 diffuse;
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
}`, pm = `#include <common>
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
}`, mm = `uniform vec3 diffuse;
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
}`, gm = `#define LAMBERT
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
}`, _m = `#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`, vm = `#define MATCAP
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
}`, xm = `#define MATCAP
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
}`, Sm = `#define NORMAL
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
}`, Mm = `#define NORMAL
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
}`, Em = `#define PHONG
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
}`, ym = `#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`, Tm = `#define STANDARD
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
}`, bm = `#define STANDARD
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
}`, Am = `#define TOON
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
}`, Rm = `#define TOON
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
}`, wm = `uniform float size;
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
}`, Cm = `uniform vec3 diffuse;
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
}`, Pm = `#include <common>
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
}`, Dm = `uniform vec3 color;
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
}`, Um = `uniform float rotation;
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
}`, Im = `uniform vec3 diffuse;
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
}`, Ne = { alphahash_fragment: ed, alphahash_pars_fragment: td, alphamap_fragment: nd, alphamap_pars_fragment: id, alphatest_fragment: sd, alphatest_pars_fragment: rd, aomap_fragment: ad, aomap_pars_fragment: od, batching_pars_vertex: ld, batching_vertex: cd, begin_vertex: hd, beginnormal_vertex: ud, bsdfs: fd, iridescence_fragment: dd, bumpmap_pars_fragment: pd, clipping_planes_fragment: md, clipping_planes_pars_fragment: gd, clipping_planes_pars_vertex: _d, clipping_planes_vertex: vd, color_fragment: xd, color_pars_fragment: Sd, color_pars_vertex: Md, color_vertex: Ed, common: yd, cube_uv_reflection_fragment: Td, defaultnormal_vertex: bd, displacementmap_pars_vertex: Ad, displacementmap_vertex: Rd, emissivemap_fragment: wd, emissivemap_pars_fragment: Cd, colorspace_fragment: Pd, colorspace_pars_fragment: Dd, envmap_fragment: Ud, envmap_common_pars_fragment: Id, envmap_pars_fragment: Ld, envmap_pars_vertex: Nd, envmap_physical_pars_fragment: Yd, envmap_vertex: Fd, fog_vertex: Od, fog_pars_vertex: Bd, fog_fragment: zd, fog_pars_fragment: Hd, gradientmap_pars_fragment: kd, lightmap_pars_fragment: Gd, lights_lambert_fragment: Vd, lights_lambert_pars_fragment: Wd, lights_pars_begin: Xd, lights_toon_fragment: qd, lights_toon_pars_fragment: Zd, lights_phong_fragment: Kd, lights_phong_pars_fragment: Jd, lights_physical_fragment: $d, lights_physical_pars_fragment: Qd, lights_fragment_begin: jd, lights_fragment_maps: ep, lights_fragment_end: tp, lightprobes_pars_fragment: np, logdepthbuf_fragment: ip, logdepthbuf_pars_fragment: sp, logdepthbuf_pars_vertex: rp, logdepthbuf_vertex: ap, map_fragment: op, map_pars_fragment: lp, map_particle_fragment: cp, map_particle_pars_fragment: hp, metalnessmap_fragment: up, metalnessmap_pars_fragment: fp, morphinstance_vertex: dp, morphcolor_vertex: pp, morphnormal_vertex: mp, morphtarget_pars_vertex: gp, morphtarget_vertex: _p, normal_fragment_begin: vp, normal_fragment_maps: xp, normal_pars_fragment: Sp, normal_pars_vertex: Mp, normal_vertex: Ep, normalmap_pars_fragment: yp, clearcoat_normal_fragment_begin: Tp, clearcoat_normal_fragment_maps: bp, clearcoat_pars_fragment: Ap, iridescence_pars_fragment: Rp, opaque_fragment: wp, packing: Cp, premultiplied_alpha_fragment: Pp, project_vertex: Dp, dithering_fragment: Up, dithering_pars_fragment: Ip, roughnessmap_fragment: Lp, roughnessmap_pars_fragment: Np, shadowmap_pars_fragment: Fp, shadowmap_pars_vertex: Op, shadowmap_vertex: Bp, shadowmask_pars_fragment: zp, skinbase_vertex: Hp, skinning_pars_vertex: kp, skinning_vertex: Gp, skinnormal_vertex: Vp, specularmap_fragment: Wp, specularmap_pars_fragment: Xp, tonemapping_fragment: Yp, tonemapping_pars_fragment: qp, transmission_fragment: Zp, transmission_pars_fragment: Kp, uv_pars_fragment: Jp, uv_pars_vertex: $p, uv_vertex: Qp, worldpos_vertex: jp, background_vert: em, background_frag: tm, backgroundCube_vert: nm, backgroundCube_frag: im, cube_vert: sm, cube_frag: rm, depth_vert: am, depth_frag: om, distance_vert: lm, distance_frag: cm, equirect_vert: hm, equirect_frag: um, linedashed_vert: fm, linedashed_frag: dm, meshbasic_vert: pm, meshbasic_frag: mm, meshlambert_vert: gm, meshlambert_frag: _m, meshmatcap_vert: vm, meshmatcap_frag: xm, meshnormal_vert: Sm, meshnormal_frag: Mm, meshphong_vert: Em, meshphong_frag: ym, meshphysical_vert: Tm, meshphysical_frag: bm, meshtoon_vert: Am, meshtoon_frag: Rm, points_vert: wm, points_frag: Cm, shadow_vert: Pm, shadow_frag: Dm, sprite_vert: Um, sprite_frag: Im }, ue = { common: { diffuse: { value: new Be(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ue() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ue() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ue() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ue() }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 }, dfgLUT: { value: null } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ue() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ue() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ue() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ue() }, normalScale: { value: new j(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ue() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ue() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ue() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ue() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Be(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null }, probesSH: { value: null }, probesMin: { value: new C() }, probesMax: { value: new C() }, probesResolution: { value: new C() } }, points: { diffuse: { value: new Be(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ue() }, alphaTest: { value: 0 }, uvTransform: { value: new Ue() } }, sprite: { diffuse: { value: new Be(16777215) }, opacity: { value: 1 }, center: { value: new j(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ue() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ue() }, alphaTest: { value: 0 } } }, mn = { basic: { uniforms: kt([ue.common, ue.specularmap, ue.envmap, ue.aomap, ue.lightmap, ue.fog]), vertexShader: Ne.meshbasic_vert, fragmentShader: Ne.meshbasic_frag }, lambert: { uniforms: kt([ue.common, ue.specularmap, ue.envmap, ue.aomap, ue.lightmap, ue.emissivemap, ue.bumpmap, ue.normalmap, ue.displacementmap, ue.fog, ue.lights, { emissive: { value: new Be(0) }, envMapIntensity: { value: 1 } }]), vertexShader: Ne.meshlambert_vert, fragmentShader: Ne.meshlambert_frag }, phong: { uniforms: kt([ue.common, ue.specularmap, ue.envmap, ue.aomap, ue.lightmap, ue.emissivemap, ue.bumpmap, ue.normalmap, ue.displacementmap, ue.fog, ue.lights, { emissive: { value: new Be(0) }, specular: { value: new Be(1118481) }, shininess: { value: 30 }, envMapIntensity: { value: 1 } }]), vertexShader: Ne.meshphong_vert, fragmentShader: Ne.meshphong_frag }, standard: { uniforms: kt([ue.common, ue.envmap, ue.aomap, ue.lightmap, ue.emissivemap, ue.bumpmap, ue.normalmap, ue.displacementmap, ue.roughnessmap, ue.metalnessmap, ue.fog, ue.lights, { emissive: { value: new Be(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ne.meshphysical_vert, fragmentShader: Ne.meshphysical_frag }, toon: { uniforms: kt([ue.common, ue.aomap, ue.lightmap, ue.emissivemap, ue.bumpmap, ue.normalmap, ue.displacementmap, ue.gradientmap, ue.fog, ue.lights, { emissive: { value: new Be(0) } }]), vertexShader: Ne.meshtoon_vert, fragmentShader: Ne.meshtoon_frag }, matcap: { uniforms: kt([ue.common, ue.bumpmap, ue.normalmap, ue.displacementmap, ue.fog, { matcap: { value: null } }]), vertexShader: Ne.meshmatcap_vert, fragmentShader: Ne.meshmatcap_frag }, points: { uniforms: kt([ue.points, ue.fog]), vertexShader: Ne.points_vert, fragmentShader: Ne.points_frag }, dashed: { uniforms: kt([ue.common, ue.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ne.linedashed_vert, fragmentShader: Ne.linedashed_frag }, depth: { uniforms: kt([ue.common, ue.displacementmap]), vertexShader: Ne.depth_vert, fragmentShader: Ne.depth_frag }, normal: { uniforms: kt([ue.common, ue.bumpmap, ue.normalmap, ue.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ne.meshnormal_vert, fragmentShader: Ne.meshnormal_frag }, sprite: { uniforms: kt([ue.sprite, ue.fog]), vertexShader: Ne.sprite_vert, fragmentShader: Ne.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ue() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ne.background_vert, fragmentShader: Ne.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ue() } }, vertexShader: Ne.backgroundCube_vert, fragmentShader: Ne.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ne.cube_vert, fragmentShader: Ne.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ne.equirect_vert, fragmentShader: Ne.equirect_frag }, distance: { uniforms: kt([ue.common, ue.displacementmap, { referencePosition: { value: new C() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ne.distance_vert, fragmentShader: Ne.distance_frag }, shadow: { uniforms: kt([ue.lights, ue.fog, { color: { value: new Be(0) }, opacity: { value: 1 } }]), vertexShader: Ne.shadow_vert, fragmentShader: Ne.shadow_frag } };
mn.physical = { uniforms: kt([mn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ue() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ue() }, clearcoatNormalScale: { value: new j(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ue() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ue() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ue() }, sheen: { value: 0 }, sheenColor: { value: new Be(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ue() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ue() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ue() }, transmissionSamplerSize: { value: new j() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ue() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Be(0) }, specularColor: { value: new Be(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ue() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ue() }, anisotropyVector: { value: new j() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ue() } }]), vertexShader: Ne.meshphysical_vert, fragmentShader: Ne.meshphysical_frag };
const ar = { r: 0, b: 0, g: 0 }, Lm = new Ke(), oh = new Ue();
oh.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Nm(n, e, t, i, s, r) {
  const a = new Be(0);
  let o = s === true ? 0 : 1, l, c, h = null, f = 0, u = null;
  function d(E) {
    let y = E.isScene === true ? E.background : null;
    if (y && y.isTexture) {
      const x = E.backgroundBlurriness > 0;
      y = e.get(y, x);
    }
    return y;
  }
  function g(E) {
    let y = false;
    const x = d(E);
    x === null ? p(a, o) : x && x.isColor && (p(x, 1), y = true);
    const R = n.xr.getEnvironmentBlendMode();
    R === "additive" ? t.buffers.color.setClear(0, 0, 0, 1, r) : R === "alpha-blend" && t.buffers.color.setClear(0, 0, 0, 0, r), (n.autoClear || y) && (t.buffers.depth.setTest(true), t.buffers.depth.setMask(true), t.buffers.color.setMask(true), n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil));
  }
  function M(E, y) {
    const x = d(y);
    x && (x.isCubeTexture || x.mapping === Ar) ? (c === void 0 && (c = new $t(new bs(1, 1, 1), new Tt({ name: "BackgroundCubeMaterial", uniforms: qi(mn.backgroundCube.uniforms), vertexShader: mn.backgroundCube.vertexShader, fragmentShader: mn.backgroundCube.fragmentShader, side: Ut, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(R, A, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(c.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), i.update(c)), c.material.uniforms.envMap.value = x, c.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness, c.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, c.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(y.backgroundRotation)).transpose(), x.isCubeTexture && x.isRenderTargetTexture === false && c.material.uniforms.backgroundRotation.value.premultiply(oh), c.material.toneMapped = Ge.getTransfer(x.colorSpace) !== Qe, (h !== x || f !== x.version || u !== n.toneMapping) && (c.material.needsUpdate = true, h = x, f = x.version, u = n.toneMapping), c.layers.enableAll(), E.unshift(c, c.geometry, c.material, 0, 0, null)) : x && x.isTexture && (l === void 0 && (l = new $t(new Rr(2, 2), new Tt({ name: "BackgroundMaterial", uniforms: qi(mn.background.uniforms), vertexShader: mn.background.vertexShader, fragmentShader: mn.background.fragmentShader, side: Dn, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), i.update(l)), l.material.uniforms.t2D.value = x, l.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, l.material.toneMapped = Ge.getTransfer(x.colorSpace) !== Qe, x.matrixAutoUpdate === true && x.updateMatrix(), l.material.uniforms.uvTransform.value.copy(x.matrix), (h !== x || f !== x.version || u !== n.toneMapping) && (l.material.needsUpdate = true, h = x, f = x.version, u = n.toneMapping), l.layers.enableAll(), E.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function p(E, y) {
    E.getRGB(ar, th(n)), t.buffers.color.setClear(ar.r, ar.g, ar.b, y, r);
  }
  function m() {
    c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return { getClearColor: function() {
    return a;
  }, setClearColor: function(E, y = 1) {
    a.set(E), o = y, p(a, o);
  }, getClearAlpha: function() {
    return o;
  }, setClearAlpha: function(E) {
    o = E, p(a, o);
  }, render: g, addToRenderList: M, dispose: m };
}
function Fm(n, e) {
  const t = n.getParameter(n.MAX_VERTEX_ATTRIBS), i = {}, s = u(null);
  let r = s, a = false;
  function o(P, L, W, X, O) {
    let k = false;
    const G = f(P, X, W, L);
    r !== G && (r = G, c(r.object)), k = d(P, X, W, O), k && g(P, X, W, O), O !== null && e.update(O, n.ELEMENT_ARRAY_BUFFER), (k || a) && (a = false, x(P, L, W, X), O !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.get(O).buffer));
  }
  function l() {
    return n.createVertexArray();
  }
  function c(P) {
    return n.bindVertexArray(P);
  }
  function h(P) {
    return n.deleteVertexArray(P);
  }
  function f(P, L, W, X) {
    const O = X.wireframe === true;
    let k = i[L.id];
    k === void 0 && (k = {}, i[L.id] = k);
    const G = P.isInstancedMesh === true ? P.id : 0;
    let $ = k[G];
    $ === void 0 && ($ = {}, k[G] = $);
    let ee = $[W.id];
    ee === void 0 && (ee = {}, $[W.id] = ee);
    let re = ee[O];
    return re === void 0 && (re = u(l()), ee[O] = re), re;
  }
  function u(P) {
    const L = [], W = [], X = [];
    for (let O = 0; O < t; O++) L[O] = 0, W[O] = 0, X[O] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: L, enabledAttributes: W, attributeDivisors: X, object: P, attributes: {}, index: null };
  }
  function d(P, L, W, X) {
    const O = r.attributes, k = L.attributes;
    let G = 0;
    const $ = W.getAttributes();
    for (const ee in $) if ($[ee].location >= 0) {
      const fe = O[ee];
      let _e = k[ee];
      if (_e === void 0 && (ee === "instanceMatrix" && P.instanceMatrix && (_e = P.instanceMatrix), ee === "instanceColor" && P.instanceColor && (_e = P.instanceColor)), fe === void 0 || fe.attribute !== _e || _e && fe.data !== _e.data) return true;
      G++;
    }
    return r.attributesNum !== G || r.index !== X;
  }
  function g(P, L, W, X) {
    const O = {}, k = L.attributes;
    let G = 0;
    const $ = W.getAttributes();
    for (const ee in $) if ($[ee].location >= 0) {
      let fe = k[ee];
      fe === void 0 && (ee === "instanceMatrix" && P.instanceMatrix && (fe = P.instanceMatrix), ee === "instanceColor" && P.instanceColor && (fe = P.instanceColor));
      const _e = {};
      _e.attribute = fe, fe && fe.data && (_e.data = fe.data), O[ee] = _e, G++;
    }
    r.attributes = O, r.attributesNum = G, r.index = X;
  }
  function M() {
    const P = r.newAttributes;
    for (let L = 0, W = P.length; L < W; L++) P[L] = 0;
  }
  function p(P) {
    m(P, 0);
  }
  function m(P, L) {
    const W = r.newAttributes, X = r.enabledAttributes, O = r.attributeDivisors;
    W[P] = 1, X[P] === 0 && (n.enableVertexAttribArray(P), X[P] = 1), O[P] !== L && (n.vertexAttribDivisor(P, L), O[P] = L);
  }
  function E() {
    const P = r.newAttributes, L = r.enabledAttributes;
    for (let W = 0, X = L.length; W < X; W++) L[W] !== P[W] && (n.disableVertexAttribArray(W), L[W] = 0);
  }
  function y(P, L, W, X, O, k, G) {
    G === true ? n.vertexAttribIPointer(P, L, W, O, k) : n.vertexAttribPointer(P, L, W, X, O, k);
  }
  function x(P, L, W, X) {
    M();
    const O = X.attributes, k = W.getAttributes(), G = L.defaultAttributeValues;
    for (const $ in k) {
      const ee = k[$];
      if (ee.location >= 0) {
        let re = O[$];
        if (re === void 0 && ($ === "instanceMatrix" && P.instanceMatrix && (re = P.instanceMatrix), $ === "instanceColor" && P.instanceColor && (re = P.instanceColor)), re !== void 0) {
          const fe = re.normalized, _e = re.itemSize, Ve = e.get(re);
          if (Ve === void 0) continue;
          const nt = Ve.buffer, We = Ve.type, Z = Ve.bytesPerElement, ie = We === n.INT || We === n.UNSIGNED_INT || re.gpuType === _o;
          if (re.isInterleavedBufferAttribute) {
            const te = re.data, Me = te.stride, Ae = re.offset;
            if (te.isInstancedInterleavedBuffer) {
              for (let Re = 0; Re < ee.locationSize; Re++) m(ee.location + Re, te.meshPerAttribute);
              P.isInstancedMesh !== true && X._maxInstanceCount === void 0 && (X._maxInstanceCount = te.meshPerAttribute * te.count);
            } else for (let Re = 0; Re < ee.locationSize; Re++) p(ee.location + Re);
            n.bindBuffer(n.ARRAY_BUFFER, nt);
            for (let Re = 0; Re < ee.locationSize; Re++) y(ee.location + Re, _e / ee.locationSize, We, fe, Me * Z, (Ae + _e / ee.locationSize * Re) * Z, ie);
          } else {
            if (re.isInstancedBufferAttribute) {
              for (let te = 0; te < ee.locationSize; te++) m(ee.location + te, re.meshPerAttribute);
              P.isInstancedMesh !== true && X._maxInstanceCount === void 0 && (X._maxInstanceCount = re.meshPerAttribute * re.count);
            } else for (let te = 0; te < ee.locationSize; te++) p(ee.location + te);
            n.bindBuffer(n.ARRAY_BUFFER, nt);
            for (let te = 0; te < ee.locationSize; te++) y(ee.location + te, _e / ee.locationSize, We, fe, _e * Z, _e / ee.locationSize * te * Z, ie);
          }
        } else if (G !== void 0) {
          const fe = G[$];
          if (fe !== void 0) switch (fe.length) {
            case 2:
              n.vertexAttrib2fv(ee.location, fe);
              break;
            case 3:
              n.vertexAttrib3fv(ee.location, fe);
              break;
            case 4:
              n.vertexAttrib4fv(ee.location, fe);
              break;
            default:
              n.vertexAttrib1fv(ee.location, fe);
          }
        }
      }
    }
    E();
  }
  function R() {
    T();
    for (const P in i) {
      const L = i[P];
      for (const W in L) {
        const X = L[W];
        for (const O in X) {
          const k = X[O];
          for (const G in k) h(k[G].object), delete k[G];
          delete X[O];
        }
      }
      delete i[P];
    }
  }
  function A(P) {
    if (i[P.id] === void 0) return;
    const L = i[P.id];
    for (const W in L) {
      const X = L[W];
      for (const O in X) {
        const k = X[O];
        for (const G in k) h(k[G].object), delete k[G];
        delete X[O];
      }
    }
    delete i[P.id];
  }
  function w(P) {
    for (const L in i) {
      const W = i[L];
      for (const X in W) {
        const O = W[X];
        if (O[P.id] === void 0) continue;
        const k = O[P.id];
        for (const G in k) h(k[G].object), delete k[G];
        delete O[P.id];
      }
    }
  }
  function v(P) {
    for (const L in i) {
      const W = i[L], X = P.isInstancedMesh === true ? P.id : 0, O = W[X];
      if (O !== void 0) {
        for (const k in O) {
          const G = O[k];
          for (const $ in G) h(G[$].object), delete G[$];
          delete O[k];
        }
        delete W[X], Object.keys(W).length === 0 && delete i[L];
      }
    }
  }
  function T() {
    D(), a = true, r !== s && (r = s, c(r.object));
  }
  function D() {
    s.geometry = null, s.program = null, s.wireframe = false;
  }
  return { setup: o, reset: T, resetDefaultState: D, dispose: R, releaseStatesOfGeometry: A, releaseStatesOfObject: v, releaseStatesOfProgram: w, initAttributes: M, enableAttribute: p, disableUnusedAttributes: E };
}
function Om(n, e, t) {
  let i;
  function s(l) {
    i = l;
  }
  function r(l, c) {
    n.drawArrays(i, l, c), t.update(c, i, 1);
  }
  function a(l, c, h) {
    h !== 0 && (n.drawArraysInstanced(i, l, c, h), t.update(c, i, h));
  }
  function o(l, c, h) {
    if (h === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, l, 0, c, 0, h);
    let u = 0;
    for (let d = 0; d < h; d++) u += c[d];
    t.update(u, i, 1);
  }
  this.setMode = s, this.render = r, this.renderInstances = a, this.renderMultiDraw = o;
}
function Bm(n, e, t, i) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const w = e.get("EXT_texture_filter_anisotropic");
      s = n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else s = 0;
    return s;
  }
  function a(w) {
    return !(w !== ln && i.convert(w) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const v = w === Un && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== ct && i.convert(w) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE) && w !== tn && !v);
  }
  function l(w) {
    if (w === "highp") {
      if (n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision > 0) return "highp";
      w = "mediump";
    }
    return w === "mediump" && n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (Ce("WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const f = t.logarithmicDepthBuffer === true, u = t.reversedDepthBuffer === true && e.has("EXT_clip_control");
  t.reversedDepthBuffer === true && u === false && Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
  const d = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS), g = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS), M = n.getParameter(n.MAX_TEXTURE_SIZE), p = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE), m = n.getParameter(n.MAX_VERTEX_ATTRIBS), E = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS), y = n.getParameter(n.MAX_VARYING_VECTORS), x = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS), R = n.getParameter(n.MAX_SAMPLES), A = n.getParameter(n.SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: f, reversedDepthBuffer: u, maxTextures: d, maxVertexTextures: g, maxTextureSize: M, maxCubemapSize: p, maxAttributes: m, maxVertexUniforms: E, maxVaryings: y, maxFragmentUniforms: x, maxSamples: R, samples: A };
}
function zm(n) {
  const e = this;
  let t = null, i = 0, s = false, r = false;
  const a = new Xn(), o = new Ue(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, u) {
    const d = f.length !== 0 || u || i !== 0 || s;
    return s = u, i = f.length, d;
  }, this.beginShadows = function() {
    r = true, h(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(f, u) {
    t = h(f, u, 0);
  }, this.setState = function(f, u, d) {
    const g = f.clippingPlanes, M = f.clipIntersection, p = f.clipShadows, m = n.get(f);
    if (!s || g === null || g.length === 0 || r && !p) r ? h(null) : c();
    else {
      const E = r ? 0 : i, y = E * 4;
      let x = m.clippingState || null;
      l.value = x, x = h(g, u, y, d);
      for (let R = 0; R !== y; ++R) x[R] = t[R];
      m.clippingState = x, this.numIntersection = M ? this.numPlanes : 0, this.numPlanes += E;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
  }
  function h(f, u, d, g) {
    const M = f !== null ? f.length : 0;
    let p = null;
    if (M !== 0) {
      if (p = l.value, g !== true || p === null) {
        const m = d + M * 4, E = u.matrixWorldInverse;
        o.getNormalMatrix(E), (p === null || p.length < m) && (p = new Float32Array(m));
        for (let y = 0, x = d; y !== M; ++y, x += 4) a.copy(f[y]).applyMatrix4(E, o), a.normal.toArray(p, x), p[x + 3] = a.constant;
      }
      l.value = p, l.needsUpdate = true;
    }
    return e.numPlanes = M, e.numIntersection = 0, p;
  }
}
const qn = 4, kl = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], ni = 20, Hm = 256, rs = new wr(), Gl = new Be();
let ua = null, fa = 0, da = 0, pa = false;
const km = new C();
class Vl {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  fromScene(e, t = 0, i = 0.1, s = 100, r = {}) {
    const { size: a = 256, position: o = km } = r;
    ua = this._renderer.getRenderTarget(), fa = this._renderer.getActiveCubeFace(), da = this._renderer.getActiveMipmapLevel(), pa = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Yl(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Xl(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodMeshes.length; e++) this._lodMeshes[e].geometry.dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(ua, fa, da), this._renderer.xr.enabled = pa, e.scissorTest = false, Ii(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ri || e.mapping === Vi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), ua = this._renderer.getRenderTarget(), fa = this._renderer.getActiveCubeFace(), da = this._renderer.getActiveMipmapLevel(), pa = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const i = t || this._allocateTargets();
    return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, i = { magFilter: Mt, minFilter: Mt, generateMipmaps: false, type: Un, format: ln, colorSpace: Xi, depthBuffer: false }, s = Wl(e, t, i);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Wl(e, t, i);
      const { _lodMax: r } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas } = Gm(r)), this._blurMaterial = Wm(r, e, t), this._ggxMaterial = Vm(r, e, t);
    }
    return s;
  }
  _compileMaterial(e) {
    const t = new $t(new Ft(), e);
    this._renderer.compile(t, rs);
  }
  _sceneToCubeUV(e, t, i, s, r) {
    const l = new Zt(90, 1, t, i), c = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], f = this._renderer, u = f.autoClear, d = f.toneMapping;
    f.getClearColor(Gl), f.toneMapping = vn, f.autoClear = false, f.state.buffers.depth.getReversed() && (f.setRenderTarget(s), f.clearDepth(), f.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new $t(new bs(), new Hc({ name: "PMREM.Background", side: Ut, depthWrite: false, depthTest: false })));
    const M = this._backgroundBox, p = M.material;
    let m = false;
    const E = e.background;
    E ? E.isColor && (p.color.copy(E), e.background = null, m = true) : (p.color.copy(Gl), m = true);
    for (let y = 0; y < 6; y++) {
      const x = y % 3;
      x === 0 ? (l.up.set(0, c[y], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x + h[y], r.y, r.z)) : x === 1 ? (l.up.set(0, 0, c[y]), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y + h[y], r.z)) : (l.up.set(0, c[y], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y, r.z + h[y]));
      const R = this._cubeSize;
      Ii(s, x * R, y > 2 ? R : 0, R, R), f.setRenderTarget(s), m && f.render(M, l), f.render(e, l);
    }
    f.toneMapping = d, f.autoClear = u, e.background = E;
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer, s = e.mapping === ri || e.mapping === Vi;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Yl()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Xl());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
    a.material = r;
    const o = r.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Ii(t, 0, 0, 3 * l, 2 * l), i.setRenderTarget(t), i.render(a, rs);
  }
  _applyPMREM(e) {
    const t = this._renderer, i = t.autoClear;
    t.autoClear = false;
    const s = this._lodMeshes.length;
    for (let r = 1; r < s; r++) this._applyGGXFilter(e, r - 1, r);
    t.autoClear = i;
  }
  _applyGGXFilter(e, t, i) {
    const s = this._renderer, r = this._pingPongRenderTarget, a = this._ggxMaterial, o = this._lodMeshes[i];
    o.material = a;
    const l = a.uniforms, c = i / (this._lodMeshes.length - 1), h = t / (this._lodMeshes.length - 1), f = Math.sqrt(c * c - h * h), u = 0 + c * 1.25, d = f * u, { _lodMax: g } = this, M = this._sizeLods[i], p = 3 * M * (i > g - qn ? i - g + qn : 0), m = 4 * (this._cubeSize - M);
    l.envMap.value = e.texture, l.roughness.value = d, l.mipInt.value = g - t, Ii(r, p, m, 3 * M, 2 * M), s.setRenderTarget(r), s.render(o, rs), l.envMap.value = r.texture, l.roughness.value = 0, l.mipInt.value = g - i, Ii(e, p, m, 3 * M, 2 * M), s.setRenderTarget(e), s.render(o, rs);
  }
  _blur(e, t, i, s, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, i, s, "latitudinal", r), this._halfBlur(a, e, i, i, s, "longitudinal", r);
  }
  _halfBlur(e, t, i, s, r, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && ke("blur direction must be either latitudinal or longitudinal!");
    const h = 3, f = this._lodMeshes[s];
    f.material = c;
    const u = c.uniforms, d = this._sizeLods[i] - 1, g = isFinite(r) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * ni - 1), M = r / g, p = isFinite(r) ? 1 + Math.floor(h * M) : ni;
    p > ni && Ce(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ni}`);
    const m = [];
    let E = 0;
    for (let w = 0; w < ni; ++w) {
      const v = w / M, T = Math.exp(-v * v / 2);
      m.push(T), w === 0 ? E += T : w < p && (E += 2 * T);
    }
    for (let w = 0; w < m.length; w++) m[w] = m[w] / E;
    u.envMap.value = e.texture, u.samples.value = p, u.weights.value = m, u.latitudinal.value = a === "latitudinal", o && (u.poleAxis.value = o);
    const { _lodMax: y } = this;
    u.dTheta.value = g, u.mipInt.value = y - i;
    const x = this._sizeLods[s], R = 3 * x * (s > y - qn ? s - y + qn : 0), A = 4 * (this._cubeSize - x);
    Ii(t, R, A, 3 * x, 2 * x), l.setRenderTarget(t), l.render(f, rs);
  }
}
function Gm(n) {
  const e = [], t = [], i = [];
  let s = n;
  const r = n - qn + 1 + kl.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    e.push(o);
    let l = 1 / o;
    a > n - qn ? l = kl[a - n + qn - 1] : a === 0 && (l = 0), t.push(l);
    const c = 1 / (o - 2), h = -c, f = 1 + c, u = [h, h, f, h, f, f, h, h, f, f, h, f], d = 6, g = 6, M = 3, p = 2, m = 1, E = new Float32Array(M * g * d), y = new Float32Array(p * g * d), x = new Float32Array(m * g * d);
    for (let A = 0; A < d; A++) {
      const w = A % 3 * 2 / 3 - 1, v = A > 2 ? 0 : -1, T = [w, v, 0, w + 2 / 3, v, 0, w + 2 / 3, v + 1, 0, w, v, 0, w + 2 / 3, v + 1, 0, w, v + 1, 0];
      E.set(T, M * g * A), y.set(u, p * g * A);
      const D = [A, A, A, A, A, A];
      x.set(D, m * g * A);
    }
    const R = new Ft();
    R.setAttribute("position", new Wt(E, M)), R.setAttribute("uv", new Wt(y, p)), R.setAttribute("faceIndex", new Wt(x, m)), i.push(new $t(R, null)), s > qn && s--;
  }
  return { lodMeshes: i, sizeLods: e, sigmas: t };
}
function Wl(n, e, t) {
  const i = new Et(n, e, t);
  return i.texture.mapping = Ar, i.texture.name = "PMREM.cubeUv", i.scissorTest = true, i;
}
function Ii(n, e, t, i, s) {
  n.viewport.set(e, t, i, s), n.scissor.set(e, t, i, s);
}
function Vm(n, e, t) {
  return new Tt({ name: "PMREMGGXConvolution", defines: { GGX_SAMPLES: Hm, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${n}.0` }, uniforms: { envMap: { value: null }, roughness: { value: 0 }, mipInt: { value: 0 } }, vertexShader: Cr(), fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`, blending: It, depthTest: false, depthWrite: false });
}
function Wm(n, e, t) {
  const i = new Float32Array(ni), s = new C(0, 1, 0);
  return new Tt({ name: "SphericalGaussianBlur", defines: { n: ni, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${n}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: i }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: s } }, vertexShader: Cr(), fragmentShader: `

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
		`, blending: It, depthTest: false, depthWrite: false });
}
function Xl() {
  return new Tt({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Cr(), fragmentShader: `

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
		`, blending: It, depthTest: false, depthWrite: false });
}
function Yl() {
  return new Tt({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Cr(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: It, depthTest: false, depthWrite: false });
}
function Cr() {
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
class lh extends Et {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const i = { width: e, height: e, depth: 1 }, s = [i, i, i, i, i, i];
    this.texture = new Gc(s), this._setTextureOptions(t), this.texture.isRenderTargetTexture = true;
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
			` }, s = new bs(5, 5, 5), r = new Tt({ name: "CubemapFromEquirect", uniforms: qi(i.uniforms), vertexShader: i.vertexShader, fragmentShader: i.fragmentShader, side: Ut, blending: It });
    r.uniforms.tEquirect.value = t;
    const a = new $t(s, r), o = t.minFilter;
    return t.minFilter === ii && (t.minFilter = Mt), new Kf(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t = true, i = true, s = true) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, i, s);
    e.setRenderTarget(r);
  }
}
function Xm(n) {
  let e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), i = null;
  function s(u, d = false) {
    return u == null ? null : d ? a(u) : r(u);
  }
  function r(u) {
    if (u && u.isTexture) {
      const d = u.mapping;
      if (d === Lr || d === Nr) if (e.has(u)) {
        const g = e.get(u).texture;
        return o(g, u.mapping);
      } else {
        const g = u.image;
        if (g && g.height > 0) {
          const M = new lh(g.height);
          return M.fromEquirectangularTexture(n, u), e.set(u, M), u.addEventListener("dispose", c), o(M.texture, u.mapping);
        } else return null;
      }
    }
    return u;
  }
  function a(u) {
    if (u && u.isTexture) {
      const d = u.mapping, g = d === Lr || d === Nr, M = d === ri || d === Vi;
      if (g || M) {
        let p = t.get(u);
        const m = p !== void 0 ? p.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== m) return i === null && (i = new Vl(n)), p = g ? i.fromEquirectangular(u, p) : i.fromCubemap(u, p), p.texture.pmremVersion = u.pmremVersion, t.set(u, p), p.texture;
        if (p !== void 0) return p.texture;
        {
          const E = u.image;
          return g && E && E.height > 0 || M && E && l(E) ? (i === null && (i = new Vl(n)), p = g ? i.fromEquirectangular(u) : i.fromCubemap(u), p.texture.pmremVersion = u.pmremVersion, t.set(u, p), u.addEventListener("dispose", h), p.texture) : null;
        }
      }
    }
    return u;
  }
  function o(u, d) {
    return d === Lr ? u.mapping = ri : d === Nr && (u.mapping = Vi), u;
  }
  function l(u) {
    let d = 0;
    const g = 6;
    for (let M = 0; M < g; M++) u[M] !== void 0 && d++;
    return d === g;
  }
  function c(u) {
    const d = u.target;
    d.removeEventListener("dispose", c);
    const g = e.get(d);
    g !== void 0 && (e.delete(d), g.dispose());
  }
  function h(u) {
    const d = u.target;
    d.removeEventListener("dispose", h);
    const g = t.get(d);
    g !== void 0 && (t.delete(d), g.dispose());
  }
  function f() {
    e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), i !== null && (i.dispose(), i = null);
  }
  return { get: s, dispose: f };
}
function Ym(n) {
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
    return s === null && Hi("WebGLRenderer: " + i + " extension not supported."), s;
  } };
}
function qm(n, e, t, i) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function a(f) {
    const u = f.target;
    u.index !== null && e.remove(u.index);
    for (const g in u.attributes) e.remove(u.attributes[g]);
    u.removeEventListener("dispose", a), delete s[u.id];
    const d = r.get(u);
    d && (e.remove(d), r.delete(u)), i.releaseStatesOfGeometry(u), u.isInstancedBufferGeometry === true && delete u._maxInstanceCount, t.memory.geometries--;
  }
  function o(f, u) {
    return s[u.id] === true || (u.addEventListener("dispose", a), s[u.id] = true, t.memory.geometries++), u;
  }
  function l(f) {
    const u = f.attributes;
    for (const d in u) e.update(u[d], n.ARRAY_BUFFER);
  }
  function c(f) {
    const u = [], d = f.index, g = f.attributes.position;
    let M = 0;
    if (g === void 0) return;
    if (d !== null) {
      const E = d.array;
      M = d.version;
      for (let y = 0, x = E.length; y < x; y += 3) {
        const R = E[y + 0], A = E[y + 1], w = E[y + 2];
        u.push(R, A, A, w, w, R);
      }
    } else {
      const E = g.array;
      M = g.version;
      for (let y = 0, x = E.length / 3 - 1; y < x; y += 3) {
        const R = y + 0, A = y + 1, w = y + 2;
        u.push(R, A, A, w, w, R);
      }
    }
    const p = new (g.count >= 65535 ? Bc : Oc)(u, 1);
    p.version = M;
    const m = r.get(f);
    m && e.remove(m), r.set(f, p);
  }
  function h(f) {
    const u = r.get(f);
    if (u) {
      const d = f.index;
      d !== null && u.version < d.version && c(f);
    } else c(f);
    return r.get(f);
  }
  return { get: o, update: l, getWireframeAttribute: h };
}
function Zm(n, e, t) {
  let i;
  function s(f) {
    i = f;
  }
  let r, a;
  function o(f) {
    r = f.type, a = f.bytesPerElement;
  }
  function l(f, u) {
    n.drawElements(i, u, r, f * a), t.update(u, i, 1);
  }
  function c(f, u, d) {
    d !== 0 && (n.drawElementsInstanced(i, u, r, f * a, d), t.update(u, i, d));
  }
  function h(f, u, d) {
    if (d === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, u, 0, r, f, 0, d);
    let M = 0;
    for (let p = 0; p < d; p++) M += u[p];
    t.update(M, i, 1);
  }
  this.setMode = s, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h;
}
function Km(n) {
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
        ke("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function s() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: s, update: i };
}
function Jm(n, e, t) {
  const i = /* @__PURE__ */ new WeakMap(), s = new lt();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, f = h !== void 0 ? h.length : 0;
    let u = i.get(o);
    if (u === void 0 || u.count !== f) {
      let T = function() {
        w.dispose(), i.delete(o), o.removeEventListener("dispose", T);
      };
      u !== void 0 && u.texture.dispose();
      const d = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, M = o.morphAttributes.color !== void 0, p = o.morphAttributes.position || [], m = o.morphAttributes.normal || [], E = o.morphAttributes.color || [];
      let y = 0;
      d === true && (y = 1), g === true && (y = 2), M === true && (y = 3);
      let x = o.attributes.position.count * y, R = 1;
      x > e.maxTextureSize && (R = Math.ceil(x / e.maxTextureSize), x = e.maxTextureSize);
      const A = new Float32Array(x * R * 4 * f), w = new Nc(A, x, R, f);
      w.type = tn, w.needsUpdate = true;
      const v = y * 4;
      for (let D = 0; D < f; D++) {
        const P = p[D], L = m[D], W = E[D], X = x * R * 4 * D;
        for (let O = 0; O < P.count; O++) {
          const k = O * v;
          d === true && (s.fromBufferAttribute(P, O), A[X + k + 0] = s.x, A[X + k + 1] = s.y, A[X + k + 2] = s.z, A[X + k + 3] = 0), g === true && (s.fromBufferAttribute(L, O), A[X + k + 4] = s.x, A[X + k + 5] = s.y, A[X + k + 6] = s.z, A[X + k + 7] = 0), M === true && (s.fromBufferAttribute(W, O), A[X + k + 8] = s.x, A[X + k + 9] = s.y, A[X + k + 10] = s.z, A[X + k + 11] = W.itemSize === 4 ? s.w : 1);
        }
      }
      u = { count: f, texture: w, size: new j(x, R) }, i.set(o, u), o.addEventListener("dispose", T);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) l.getUniforms().setValue(n, "morphTexture", a.morphTexture, t);
    else {
      let d = 0;
      for (let M = 0; M < c.length; M++) d += c[M];
      const g = o.morphTargetsRelative ? 1 : 1 - d;
      l.getUniforms().setValue(n, "morphTargetBaseInfluence", g), l.getUniforms().setValue(n, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(n, "morphTargetsTexture", u.texture, t), l.getUniforms().setValue(n, "morphTargetsTextureSize", u.size);
  }
  return { update: r };
}
function $m(n, e, t, i, s) {
  let r = /* @__PURE__ */ new WeakMap();
  function a(c) {
    const h = s.render.frame, f = c.geometry, u = e.get(c, f);
    if (r.get(u) !== h && (e.update(u), r.set(u, h)), c.isInstancedMesh && (c.hasEventListener("dispose", l) === false && c.addEventListener("dispose", l), r.get(c) !== h && (t.update(c.instanceMatrix, n.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, n.ARRAY_BUFFER), r.set(c, h))), c.isSkinnedMesh) {
      const d = c.skeleton;
      r.get(d) !== h && (d.update(), r.set(d, h));
    }
    return u;
  }
  function o() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function l(c) {
    const h = c.target;
    h.removeEventListener("dispose", l), i.releaseStatesOfObject(h), t.remove(h.instanceMatrix), h.instanceColor !== null && t.remove(h.instanceColor);
  }
  return { update: a, dispose: o };
}
const Qm = { [Sc]: "LINEAR_TONE_MAPPING", [Mc]: "REINHARD_TONE_MAPPING", [Ec]: "CINEON_TONE_MAPPING", [yc]: "ACES_FILMIC_TONE_MAPPING", [bc]: "AGX_TONE_MAPPING", [Ac]: "NEUTRAL_TONE_MAPPING", [Tc]: "CUSTOM_TONE_MAPPING" };
function jm(n, e, t, i, s, r) {
  const a = new Et(e, t, { type: n, depthBuffer: s, stencilBuffer: r, samples: i ? 4 : 0, depthTexture: s ? new oi(e, t) : void 0 }), o = new Et(e, t, { type: Un, depthBuffer: false, stencilBuffer: false }), l = new Ft();
  l.setAttribute("position", new pt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), l.setAttribute("uv", new pt([0, 2, 0, 0, 2, 0], 2));
  const c = new Bf({ uniforms: { tDiffuse: { value: null } }, vertexShader: `
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
			}`, depthTest: false, depthWrite: false }), h = new $t(l, c), f = new wr(-1, 1, 1, -1, 0, 1);
  let u = null, d = null, g = false, M, p = null, m = [], E = false;
  this.setSize = function(y, x) {
    a.setSize(y, x), o.setSize(y, x);
    for (let R = 0; R < m.length; R++) {
      const A = m[R];
      A.setSize && A.setSize(y, x);
    }
  }, this.setEffects = function(y) {
    m = y, E = m.length > 0 && m[0].isRenderPass === true;
    const x = a.width, R = a.height;
    for (let A = 0; A < m.length; A++) {
      const w = m[A];
      w.setSize && w.setSize(x, R);
    }
  }, this.begin = function(y, x) {
    if (g || y.toneMapping === vn && m.length === 0) return false;
    if (p = x, x !== null) {
      const R = x.width, A = x.height;
      (a.width !== R || a.height !== A) && this.setSize(R, A);
    }
    return E === false && y.setRenderTarget(a), M = y.toneMapping, y.toneMapping = vn, true;
  }, this.hasRenderPass = function() {
    return E;
  }, this.end = function(y, x) {
    y.toneMapping = M, g = true;
    let R = a, A = o;
    for (let w = 0; w < m.length; w++) {
      const v = m[w];
      if (v.enabled !== false && (v.render(y, A, R, x), v.needsSwap !== false)) {
        const T = R;
        R = A, A = T;
      }
    }
    if (u !== y.outputColorSpace || d !== y.toneMapping) {
      u = y.outputColorSpace, d = y.toneMapping, c.defines = {}, Ge.getTransfer(u) === Qe && (c.defines.SRGB_TRANSFER = "");
      const w = Qm[d];
      w && (c.defines[w] = ""), c.needsUpdate = true;
    }
    c.uniforms.tDiffuse.value = R.texture, y.setRenderTarget(p), y.render(h, f), p = null, g = false;
  }, this.isCompositing = function() {
    return g;
  }, this.dispose = function() {
    a.depthTexture && a.depthTexture.dispose(), a.dispose(), o.dispose(), l.dispose(), c.dispose();
  };
}
const ch = new Rt(), po = new oi(1, 1), hh = new Nc(), uh = new Du(), fh = new Gc(), ql = [], Zl = [], Kl = new Float32Array(16), Jl = new Float32Array(9), $l = new Float32Array(4);
function Zi(n, e, t) {
  const i = n[0];
  if (i <= 0 || i > 0) return n;
  const s = e * t;
  let r = ql[s];
  if (r === void 0 && (r = new Float32Array(s), ql[s] = r), e !== 0) {
    i.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a) o += t, n[a].toArray(r, o);
  }
  return r;
}
function wt(n, e) {
  if (n.length !== e.length) return false;
  for (let t = 0, i = n.length; t < i; t++) if (n[t] !== e[t]) return false;
  return true;
}
function Ct(n, e) {
  for (let t = 0, i = e.length; t < i; t++) n[t] = e[t];
}
function Pr(n, e) {
  let t = Zl[e];
  t === void 0 && (t = new Int32Array(e), Zl[e] = t);
  for (let i = 0; i !== e; ++i) t[i] = n.allocateTextureUnit();
  return t;
}
function eg(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1f(this.addr, e), t[0] = e);
}
function tg(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (n.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (wt(t, e)) return;
    n.uniform2fv(this.addr, e), Ct(t, e);
  }
}
function ng(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (n.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (wt(t, e)) return;
    n.uniform3fv(this.addr, e), Ct(t, e);
  }
}
function ig(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (wt(t, e)) return;
    n.uniform4fv(this.addr, e), Ct(t, e);
  }
}
function sg(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (wt(t, e)) return;
    n.uniformMatrix2fv(this.addr, false, e), Ct(t, e);
  } else {
    if (wt(t, i)) return;
    $l.set(i), n.uniformMatrix2fv(this.addr, false, $l), Ct(t, i);
  }
}
function rg(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (wt(t, e)) return;
    n.uniformMatrix3fv(this.addr, false, e), Ct(t, e);
  } else {
    if (wt(t, i)) return;
    Jl.set(i), n.uniformMatrix3fv(this.addr, false, Jl), Ct(t, i);
  }
}
function ag(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (wt(t, e)) return;
    n.uniformMatrix4fv(this.addr, false, e), Ct(t, e);
  } else {
    if (wt(t, i)) return;
    Kl.set(i), n.uniformMatrix4fv(this.addr, false, Kl), Ct(t, i);
  }
}
function og(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1i(this.addr, e), t[0] = e);
}
function lg(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (n.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (wt(t, e)) return;
    n.uniform2iv(this.addr, e), Ct(t, e);
  }
}
function cg(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (wt(t, e)) return;
    n.uniform3iv(this.addr, e), Ct(t, e);
  }
}
function hg(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (wt(t, e)) return;
    n.uniform4iv(this.addr, e), Ct(t, e);
  }
}
function ug(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1ui(this.addr, e), t[0] = e);
}
function fg(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (n.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (wt(t, e)) return;
    n.uniform2uiv(this.addr, e), Ct(t, e);
  }
}
function dg(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (wt(t, e)) return;
    n.uniform3uiv(this.addr, e), Ct(t, e);
  }
}
function pg(n, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (wt(t, e)) return;
    n.uniform4uiv(this.addr, e), Ct(t, e);
  }
}
function mg(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s);
  let r;
  this.type === n.SAMPLER_2D_SHADOW ? (po.compareFunction = t.isReversedDepthBuffer() ? bo : To, r = po) : r = ch, t.setTexture2D(e || r, s);
}
function gg(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), t.setTexture3D(e || uh, s);
}
function _g(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), t.setTextureCube(e || fh, s);
}
function vg(n, e, t) {
  const i = this.cache, s = t.allocateTextureUnit();
  i[0] !== s && (n.uniform1i(this.addr, s), i[0] = s), t.setTexture2DArray(e || hh, s);
}
function xg(n) {
  switch (n) {
    case 5126:
      return eg;
    case 35664:
      return tg;
    case 35665:
      return ng;
    case 35666:
      return ig;
    case 35674:
      return sg;
    case 35675:
      return rg;
    case 35676:
      return ag;
    case 5124:
    case 35670:
      return og;
    case 35667:
    case 35671:
      return lg;
    case 35668:
    case 35672:
      return cg;
    case 35669:
    case 35673:
      return hg;
    case 5125:
      return ug;
    case 36294:
      return fg;
    case 36295:
      return dg;
    case 36296:
      return pg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return mg;
    case 35679:
    case 36299:
    case 36307:
      return gg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return _g;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return vg;
  }
}
function Sg(n, e) {
  n.uniform1fv(this.addr, e);
}
function Mg(n, e) {
  const t = Zi(e, this.size, 2);
  n.uniform2fv(this.addr, t);
}
function Eg(n, e) {
  const t = Zi(e, this.size, 3);
  n.uniform3fv(this.addr, t);
}
function yg(n, e) {
  const t = Zi(e, this.size, 4);
  n.uniform4fv(this.addr, t);
}
function Tg(n, e) {
  const t = Zi(e, this.size, 4);
  n.uniformMatrix2fv(this.addr, false, t);
}
function bg(n, e) {
  const t = Zi(e, this.size, 9);
  n.uniformMatrix3fv(this.addr, false, t);
}
function Ag(n, e) {
  const t = Zi(e, this.size, 16);
  n.uniformMatrix4fv(this.addr, false, t);
}
function Rg(n, e) {
  n.uniform1iv(this.addr, e);
}
function wg(n, e) {
  n.uniform2iv(this.addr, e);
}
function Cg(n, e) {
  n.uniform3iv(this.addr, e);
}
function Pg(n, e) {
  n.uniform4iv(this.addr, e);
}
function Dg(n, e) {
  n.uniform1uiv(this.addr, e);
}
function Ug(n, e) {
  n.uniform2uiv(this.addr, e);
}
function Ig(n, e) {
  n.uniform3uiv(this.addr, e);
}
function Lg(n, e) {
  n.uniform4uiv(this.addr, e);
}
function Ng(n, e, t) {
  const i = this.cache, s = e.length, r = Pr(t, s);
  wt(i, r) || (n.uniform1iv(this.addr, r), Ct(i, r));
  let a;
  this.type === n.SAMPLER_2D_SHADOW ? a = po : a = ch;
  for (let o = 0; o !== s; ++o) t.setTexture2D(e[o] || a, r[o]);
}
function Fg(n, e, t) {
  const i = this.cache, s = e.length, r = Pr(t, s);
  wt(i, r) || (n.uniform1iv(this.addr, r), Ct(i, r));
  for (let a = 0; a !== s; ++a) t.setTexture3D(e[a] || uh, r[a]);
}
function Og(n, e, t) {
  const i = this.cache, s = e.length, r = Pr(t, s);
  wt(i, r) || (n.uniform1iv(this.addr, r), Ct(i, r));
  for (let a = 0; a !== s; ++a) t.setTextureCube(e[a] || fh, r[a]);
}
function Bg(n, e, t) {
  const i = this.cache, s = e.length, r = Pr(t, s);
  wt(i, r) || (n.uniform1iv(this.addr, r), Ct(i, r));
  for (let a = 0; a !== s; ++a) t.setTexture2DArray(e[a] || hh, r[a]);
}
function zg(n) {
  switch (n) {
    case 5126:
      return Sg;
    case 35664:
      return Mg;
    case 35665:
      return Eg;
    case 35666:
      return yg;
    case 35674:
      return Tg;
    case 35675:
      return bg;
    case 35676:
      return Ag;
    case 5124:
    case 35670:
      return Rg;
    case 35667:
    case 35671:
      return wg;
    case 35668:
    case 35672:
      return Cg;
    case 35669:
    case 35673:
      return Pg;
    case 5125:
      return Dg;
    case 36294:
      return Ug;
    case 36295:
      return Ig;
    case 36296:
      return Lg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Ng;
    case 35679:
    case 36299:
    case 36307:
      return Fg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Og;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Bg;
  }
}
class Hg {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.setValue = xg(t.type);
  }
}
class kg {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = zg(t.type);
  }
}
class Gg {
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
const ma = /(\w+)(\])?(\[|\.)?/g;
function Ql(n, e) {
  n.seq.push(e), n.map[e.id] = e;
}
function Vg(n, e, t) {
  const i = n.name, s = i.length;
  for (ma.lastIndex = 0; ; ) {
    const r = ma.exec(i), a = ma.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === s) {
      Ql(t, c === void 0 ? new Hg(o, n, e) : new kg(o, n, e));
      break;
    } else {
      let f = t.map[o];
      f === void 0 && (f = new Gg(o), Ql(t, f)), t = f;
    }
  }
}
class mr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < i; ++a) {
      const o = e.getActiveUniform(t, a), l = e.getUniformLocation(t, o.name);
      Vg(o, l, this);
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
function jl(n, e, t) {
  const i = n.createShader(e);
  return n.shaderSource(i, t), n.compileShader(i), i;
}
const Wg = 37297;
let Xg = 0;
function Yg(n, e) {
  const t = n.split(`
`), i = [], s = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    i.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return i.join(`
`);
}
const ec = new Ue();
function qg(n) {
  Ge._getMatrix(ec, Ge.workingColorSpace, n);
  const e = `mat3( ${ec.elements.map((t) => t.toFixed(4))} )`;
  switch (Ge.getTransfer(n)) {
    case Mr:
      return [e, "LinearTransferOETF"];
    case Qe:
      return [e, "sRGBTransferOETF"];
    default:
      return Ce("WebGLProgram: Unsupported color space: ", n), [e, "LinearTransferOETF"];
  }
}
function tc(n, e, t) {
  const i = n.getShaderParameter(e, n.COMPILE_STATUS), r = (n.getShaderInfoLog(e) || "").trim();
  if (i && r === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const o = parseInt(a[1]);
    return t.toUpperCase() + `

` + r + `

` + Yg(n.getShaderSource(e), o);
  } else return r;
}
function Zg(n, e) {
  const t = qg(e);
  return [`vec4 ${n}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
const Kg = { [Sc]: "Linear", [Mc]: "Reinhard", [Ec]: "Cineon", [yc]: "ACESFilmic", [bc]: "AgX", [Ac]: "Neutral", [Tc]: "Custom" };
function Jg(n, e) {
  const t = Kg[e];
  return t === void 0 ? (Ce("WebGLProgram: Unsupported toneMapping:", e), "vec3 " + n + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + n + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const or = new C();
function $g() {
  Ge.getLuminanceCoefficients(or);
  const n = or.x.toFixed(4), e = or.y.toFixed(4), t = or.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${n}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function Qg(n) {
  return [n.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(hs).join(`
`);
}
function jg(n) {
  const e = [];
  for (const t in n) {
    const i = n[t];
    i !== false && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function e0(n, e) {
  const t = {}, i = n.getProgramParameter(e, n.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < i; s++) {
    const r = n.getActiveAttrib(e, s), a = r.name;
    let o = 1;
    r.type === n.FLOAT_MAT2 && (o = 2), r.type === n.FLOAT_MAT3 && (o = 3), r.type === n.FLOAT_MAT4 && (o = 4), t[a] = { type: r.type, location: n.getAttribLocation(e, a), locationSize: o };
  }
  return t;
}
function hs(n) {
  return n !== "";
}
function nc(n, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return n.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function ic(n, e) {
  return n.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const t0 = /^[ \t]*#include +<([\w\d./]+)>/gm;
function mo(n) {
  return n.replace(t0, i0);
}
const n0 = /* @__PURE__ */ new Map();
function i0(n, e) {
  let t = Ne[e];
  if (t === void 0) {
    const i = n0.get(e);
    if (i !== void 0) t = Ne[i], Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, i);
    else throw new Error("THREE.WebGLProgram: Can not resolve #include <" + e + ">");
  }
  return mo(t);
}
const s0 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function sc(n) {
  return n.replace(s0, r0);
}
function r0(n, e, t, i) {
  let s = "";
  for (let r = parseInt(e); r < parseInt(t); r++) s += i.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function rc(n) {
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
const a0 = { [hr]: "SHADOWMAP_TYPE_PCF", [ls]: "SHADOWMAP_TYPE_VSM" };
function o0(n) {
  return a0[n.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const l0 = { [ri]: "ENVMAP_TYPE_CUBE", [Vi]: "ENVMAP_TYPE_CUBE", [Ar]: "ENVMAP_TYPE_CUBE_UV" };
function c0(n) {
  return n.envMap === false ? "ENVMAP_TYPE_CUBE" : l0[n.envMapMode] || "ENVMAP_TYPE_CUBE";
}
const h0 = { [Vi]: "ENVMAP_MODE_REFRACTION" };
function u0(n) {
  return n.envMap === false ? "ENVMAP_MODE_REFLECTION" : h0[n.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const f0 = { [xc]: "ENVMAP_BLENDING_MULTIPLY", [Kh]: "ENVMAP_BLENDING_MIX", [Jh]: "ENVMAP_BLENDING_ADD" };
function d0(n) {
  return n.envMap === false ? "ENVMAP_BLENDING_NONE" : f0[n.combine] || "ENVMAP_BLENDING_NONE";
}
function p0(n) {
  const e = n.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, i = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: i, maxMip: t };
}
function m0(n, e, t, i) {
  const s = n.getContext(), r = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = o0(t), c = c0(t), h = u0(t), f = d0(t), u = p0(t), d = Qg(t), g = jg(r), M = s.createProgram();
  let p, m, E = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(hs).join(`
`), p.length > 0 && (p += `
`), m = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(hs).join(`
`), m.length > 0 && (m += `
`)) : (p = [rc(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexNormals ? "#define HAS_NORMAL" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(hs).join(`
`), m = [rc(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + f : "", u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "", u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "", u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas || t.batchingColor ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== vn ? "#define TONE_MAPPING" : "", t.toneMapping !== vn ? Ne.tonemapping_pars_fragment : "", t.toneMapping !== vn ? Jg("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ne.colorspace_pars_fragment, Zg("linearToOutputTexel", t.outputColorSpace), $g(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(hs).join(`
`)), a = mo(a), a = nc(a, t), a = ic(a, t), o = mo(o), o = nc(o, t), o = ic(o, t), a = sc(a), o = sc(o), t.isRawShaderMaterial !== true && (E = `#version 300 es
`, p = [d, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p, m = ["#define varying in", t.glslVersion === Zo ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Zo ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + m);
  const y = E + p + a, x = E + m + o, R = jl(s, s.VERTEX_SHADER, y), A = jl(s, s.FRAGMENT_SHADER, x);
  s.attachShader(M, R), s.attachShader(M, A), t.index0AttributeName !== void 0 ? s.bindAttribLocation(M, 0, t.index0AttributeName) : t.hasPositionAttribute === true && s.bindAttribLocation(M, 0, "position"), s.linkProgram(M);
  function w(P) {
    if (n.debug.checkShaderErrors) {
      const L = s.getProgramInfoLog(M) || "", W = s.getShaderInfoLog(R) || "", X = s.getShaderInfoLog(A) || "", O = L.trim(), k = W.trim(), G = X.trim();
      let $ = true, ee = true;
      if (s.getProgramParameter(M, s.LINK_STATUS) === false) if ($ = false, typeof n.debug.onShaderError == "function") n.debug.onShaderError(s, M, R, A);
      else {
        const re = tc(s, R, "vertex"), fe = tc(s, A, "fragment");
        ke("WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(M, s.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + O + `
` + re + `
` + fe);
      }
      else O !== "" ? Ce("WebGLProgram: Program Info Log:", O) : (k === "" || G === "") && (ee = false);
      ee && (P.diagnostics = { runnable: $, programLog: O, vertexShader: { log: k, prefix: p }, fragmentShader: { log: G, prefix: m } });
    }
    s.deleteShader(R), s.deleteShader(A), v = new mr(s, M), T = e0(s, M);
  }
  let v;
  this.getUniforms = function() {
    return v === void 0 && w(this), v;
  };
  let T;
  this.getAttributes = function() {
    return T === void 0 && w(this), T;
  };
  let D = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return D === false && (D = s.getProgramParameter(M, Wg)), D;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), s.deleteProgram(M), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Xg++, this.cacheKey = e, this.usedTimes = 1, this.program = M, this.vertexShader = R, this.fragmentShader = A, this;
}
let g0 = 0;
class _0 {
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
    return i === void 0 && (i = new v0(e), t.set(e, i)), i;
  }
}
class v0 {
  constructor(e) {
    this.id = g0++, this.code = e, this.usedTimes = 0;
  }
}
function x0(n) {
  return n === ai || n === xr || n === Sr;
}
function S0(n, e, t, i, s, r) {
  const a = new wo(), o = new _0(), l = /* @__PURE__ */ new Set(), c = [], h = /* @__PURE__ */ new Map(), f = i.logarithmicDepthBuffer;
  let u = i.precision;
  const d = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distance", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function g(v) {
    return l.add(v), v === 0 ? "uv" : `uv${v}`;
  }
  function M(v, T, D, P, L, W) {
    const X = P.fog, O = L.geometry, k = v.isMeshStandardMaterial || v.isMeshLambertMaterial || v.isMeshPhongMaterial ? P.environment : null, G = v.isMeshStandardMaterial || v.isMeshLambertMaterial && !v.envMap || v.isMeshPhongMaterial && !v.envMap, $ = e.get(v.envMap || k, G), ee = $ && $.mapping === Ar ? $.image.height : null, re = d[v.type];
    v.precision !== null && (u = i.getMaxPrecision(v.precision), u !== v.precision && Ce("WebGLProgram.getParameters:", v.precision, "not supported, using", u, "instead."));
    const fe = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, _e = fe !== void 0 ? fe.length : 0;
    let Ve = 0;
    O.morphAttributes.position !== void 0 && (Ve = 1), O.morphAttributes.normal !== void 0 && (Ve = 2), O.morphAttributes.color !== void 0 && (Ve = 3);
    let nt, We, Z, ie;
    if (re) {
      const xe = mn[re];
      nt = xe.vertexShader, We = xe.fragmentShader;
    } else {
      nt = v.vertexShader, We = v.fragmentShader;
      const xe = o.getVertexShaderStage(v), ft = o.getFragmentShaderStage(v);
      o.update(v, xe, ft), Z = xe.id, ie = ft.id;
    }
    const te = n.getRenderTarget(), Me = n.state.buffers.depth.getReversed(), Ae = L.isInstancedMesh === true, Re = L.isBatchedMesh === true, mt = !!v.map, ze = !!v.matcap, it = !!$, Je = !!v.aoMap, Ye = !!v.lightMap, vt = !!v.bumpMap && v.wireframe === false, bt = !!v.normalMap, Pt = !!v.displacementMap, Lt = !!v.emissiveMap, ut = !!v.metalnessMap, xt = !!v.roughnessMap, I = v.anisotropy > 0, Gt = v.clearcoat > 0, $e = v.dispersion > 0, b = v.iridescence > 0, _ = v.sheen > 0, F = v.transmission > 0, H = I && !!v.anisotropyMap, Y = Gt && !!v.clearcoatMap, ne = Gt && !!v.clearcoatNormalMap, ae = Gt && !!v.clearcoatRoughnessMap, q = b && !!v.iridescenceMap, J = b && !!v.iridescenceThicknessMap, oe = _ && !!v.sheenColorMap, ye = _ && !!v.sheenRoughnessMap, he = !!v.specularMap, le = !!v.specularColorMap, we = !!v.specularIntensityMap, De = F && !!v.transmissionMap, Ie = F && !!v.thicknessMap, U = !!v.gradientMap, se = !!v.alphaMap, K = v.alphaTest > 0, ce = !!v.alphaHash, me = !!v.extensions;
    let Q = vn;
    v.toneMapped && (te === null || te.isXRRenderTarget === true) && (Q = n.toneMapping);
    const Ee = { shaderID: re, shaderType: v.type, shaderName: v.name, vertexShader: nt, fragmentShader: We, defines: v.defines, customVertexShaderID: Z, customFragmentShaderID: ie, isRawShaderMaterial: v.isRawShaderMaterial === true, glslVersion: v.glslVersion, precision: u, batching: Re, batchingColor: Re && L._colorsTexture !== null, instancing: Ae, instancingColor: Ae && L.instanceColor !== null, instancingMorph: Ae && L.morphTexture !== null, outputColorSpace: te === null ? n.outputColorSpace : te.isXRRenderTarget === true ? te.texture.colorSpace : Ge.workingColorSpace, alphaToCoverage: !!v.alphaToCoverage, map: mt, matcap: ze, envMap: it, envMapMode: it && $.mapping, envMapCubeUVHeight: ee, aoMap: Je, lightMap: Ye, bumpMap: vt, normalMap: bt, displacementMap: Pt, emissiveMap: Lt, normalMapObjectSpace: bt && v.normalMapType === Qh, normalMapTangentSpace: bt && v.normalMapType === oo, packedNormalMap: bt && v.normalMapType === oo && x0(v.normalMap.format), metalnessMap: ut, roughnessMap: xt, anisotropy: I, anisotropyMap: H, clearcoat: Gt, clearcoatMap: Y, clearcoatNormalMap: ne, clearcoatRoughnessMap: ae, dispersion: $e, iridescence: b, iridescenceMap: q, iridescenceThicknessMap: J, sheen: _, sheenColorMap: oe, sheenRoughnessMap: ye, specularMap: he, specularColorMap: le, specularIntensityMap: we, transmission: F, transmissionMap: De, thicknessMap: Ie, gradientMap: U, opaque: v.transparent === false && v.blending === zi && v.alphaToCoverage === false, alphaMap: se, alphaTest: K, alphaHash: ce, combine: v.combine, mapUv: mt && g(v.map.channel), aoMapUv: Je && g(v.aoMap.channel), lightMapUv: Ye && g(v.lightMap.channel), bumpMapUv: vt && g(v.bumpMap.channel), normalMapUv: bt && g(v.normalMap.channel), displacementMapUv: Pt && g(v.displacementMap.channel), emissiveMapUv: Lt && g(v.emissiveMap.channel), metalnessMapUv: ut && g(v.metalnessMap.channel), roughnessMapUv: xt && g(v.roughnessMap.channel), anisotropyMapUv: H && g(v.anisotropyMap.channel), clearcoatMapUv: Y && g(v.clearcoatMap.channel), clearcoatNormalMapUv: ne && g(v.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: ae && g(v.clearcoatRoughnessMap.channel), iridescenceMapUv: q && g(v.iridescenceMap.channel), iridescenceThicknessMapUv: J && g(v.iridescenceThicknessMap.channel), sheenColorMapUv: oe && g(v.sheenColorMap.channel), sheenRoughnessMapUv: ye && g(v.sheenRoughnessMap.channel), specularMapUv: he && g(v.specularMap.channel), specularColorMapUv: le && g(v.specularColorMap.channel), specularIntensityMapUv: we && g(v.specularIntensityMap.channel), transmissionMapUv: De && g(v.transmissionMap.channel), thicknessMapUv: Ie && g(v.thicknessMap.channel), alphaMapUv: se && g(v.alphaMap.channel), vertexTangents: !!O.attributes.tangent && (bt || I), vertexNormals: !!O.attributes.normal, vertexColors: v.vertexColors, vertexAlphas: v.vertexColors === true && !!O.attributes.color && O.attributes.color.itemSize === 4, pointsUvs: L.isPoints === true && !!O.attributes.uv && (mt || se), fog: !!X, useFog: v.fog === true, fogExp2: !!X && X.isFogExp2, flatShading: v.wireframe === false && (v.flatShading === true || O.attributes.normal === void 0 && bt === false && (v.isMeshLambertMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isMeshPhysicalMaterial)), sizeAttenuation: v.sizeAttenuation === true, logarithmicDepthBuffer: f, reversedDepthBuffer: Me, skinning: L.isSkinnedMesh === true, hasPositionAttribute: O.attributes.position !== void 0, morphTargets: O.morphAttributes.position !== void 0, morphNormals: O.morphAttributes.normal !== void 0, morphColors: O.morphAttributes.color !== void 0, morphTargetsCount: _e, morphTextureStride: Ve, numDirLights: T.directional.length, numPointLights: T.point.length, numSpotLights: T.spot.length, numSpotLightMaps: T.spotLightMap.length, numRectAreaLights: T.rectArea.length, numHemiLights: T.hemi.length, numDirLightShadows: T.directionalShadowMap.length, numPointLightShadows: T.pointShadowMap.length, numSpotLightShadows: T.spotShadowMap.length, numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps, numLightProbes: T.numLightProbes, numLightProbeGrids: W.length, numClippingPlanes: r.numPlanes, numClipIntersection: r.numIntersection, dithering: v.dithering, shadowMapEnabled: n.shadowMap.enabled && D.length > 0, shadowMapType: n.shadowMap.type, toneMapping: Q, decodeVideoTexture: mt && v.map.isVideoTexture === true && Ge.getTransfer(v.map.colorSpace) === Qe, decodeVideoTextureEmissive: Lt && v.emissiveMap.isVideoTexture === true && Ge.getTransfer(v.emissiveMap.colorSpace) === Qe, premultipliedAlpha: v.premultipliedAlpha, doubleSided: v.side === Kt, flipSided: v.side === Ut, useDepthPacking: v.depthPacking >= 0, depthPacking: v.depthPacking || 0, index0AttributeName: v.index0AttributeName, extensionClipCullDistance: me && v.extensions.clipCullDistance === true && t.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (me && v.extensions.multiDraw === true || Re) && t.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: t.has("KHR_parallel_shader_compile"), customProgramCacheKey: v.customProgramCacheKey() };
    return Ee.vertexUv1s = l.has(1), Ee.vertexUv2s = l.has(2), Ee.vertexUv3s = l.has(3), l.clear(), Ee;
  }
  function p(v) {
    const T = [];
    if (v.shaderID ? T.push(v.shaderID) : (T.push(v.customVertexShaderID), T.push(v.customFragmentShaderID)), v.defines !== void 0) for (const D in v.defines) T.push(D), T.push(v.defines[D]);
    return v.isRawShaderMaterial === false && (m(T, v), E(T, v), T.push(n.outputColorSpace)), T.push(v.customProgramCacheKey), T.join();
  }
  function m(v, T) {
    v.push(T.precision), v.push(T.outputColorSpace), v.push(T.envMapMode), v.push(T.envMapCubeUVHeight), v.push(T.mapUv), v.push(T.alphaMapUv), v.push(T.lightMapUv), v.push(T.aoMapUv), v.push(T.bumpMapUv), v.push(T.normalMapUv), v.push(T.displacementMapUv), v.push(T.emissiveMapUv), v.push(T.metalnessMapUv), v.push(T.roughnessMapUv), v.push(T.anisotropyMapUv), v.push(T.clearcoatMapUv), v.push(T.clearcoatNormalMapUv), v.push(T.clearcoatRoughnessMapUv), v.push(T.iridescenceMapUv), v.push(T.iridescenceThicknessMapUv), v.push(T.sheenColorMapUv), v.push(T.sheenRoughnessMapUv), v.push(T.specularMapUv), v.push(T.specularColorMapUv), v.push(T.specularIntensityMapUv), v.push(T.transmissionMapUv), v.push(T.thicknessMapUv), v.push(T.combine), v.push(T.fogExp2), v.push(T.sizeAttenuation), v.push(T.morphTargetsCount), v.push(T.morphAttributeCount), v.push(T.numDirLights), v.push(T.numPointLights), v.push(T.numSpotLights), v.push(T.numSpotLightMaps), v.push(T.numHemiLights), v.push(T.numRectAreaLights), v.push(T.numDirLightShadows), v.push(T.numPointLightShadows), v.push(T.numSpotLightShadows), v.push(T.numSpotLightShadowsWithMaps), v.push(T.numLightProbes), v.push(T.shadowMapType), v.push(T.toneMapping), v.push(T.numClippingPlanes), v.push(T.numClipIntersection), v.push(T.depthPacking);
  }
  function E(v, T) {
    a.disableAll(), T.instancing && a.enable(0), T.instancingColor && a.enable(1), T.instancingMorph && a.enable(2), T.matcap && a.enable(3), T.envMap && a.enable(4), T.normalMapObjectSpace && a.enable(5), T.normalMapTangentSpace && a.enable(6), T.clearcoat && a.enable(7), T.iridescence && a.enable(8), T.alphaTest && a.enable(9), T.vertexColors && a.enable(10), T.vertexAlphas && a.enable(11), T.vertexUv1s && a.enable(12), T.vertexUv2s && a.enable(13), T.vertexUv3s && a.enable(14), T.vertexTangents && a.enable(15), T.anisotropy && a.enable(16), T.alphaHash && a.enable(17), T.batching && a.enable(18), T.dispersion && a.enable(19), T.batchingColor && a.enable(20), T.gradientMap && a.enable(21), T.packedNormalMap && a.enable(22), T.vertexNormals && a.enable(23), v.push(a.mask), a.disableAll(), T.fog && a.enable(0), T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(3), T.reversedDepthBuffer && a.enable(4), T.skinning && a.enable(5), T.morphTargets && a.enable(6), T.morphNormals && a.enable(7), T.morphColors && a.enable(8), T.premultipliedAlpha && a.enable(9), T.shadowMapEnabled && a.enable(10), T.doubleSided && a.enable(11), T.flipSided && a.enable(12), T.useDepthPacking && a.enable(13), T.dithering && a.enable(14), T.transmission && a.enable(15), T.sheen && a.enable(16), T.opaque && a.enable(17), T.pointsUvs && a.enable(18), T.decodeVideoTexture && a.enable(19), T.decodeVideoTextureEmissive && a.enable(20), T.alphaToCoverage && a.enable(21), T.numLightProbeGrids > 0 && a.enable(22), T.hasPositionAttribute && a.enable(23), v.push(a.mask);
  }
  function y(v) {
    const T = d[v.type];
    let D;
    if (T) {
      const P = mn[T];
      D = Nf.clone(P.uniforms);
    } else D = v.uniforms;
    return D;
  }
  function x(v, T) {
    let D = h.get(T);
    return D !== void 0 ? ++D.usedTimes : (D = new m0(n, T, v, s), c.push(D), h.set(T, D)), D;
  }
  function R(v) {
    if (--v.usedTimes === 0) {
      const T = c.indexOf(v);
      c[T] = c[c.length - 1], c.pop(), h.delete(v.cacheKey), v.destroy();
    }
  }
  function A(v) {
    o.remove(v);
  }
  function w() {
    o.dispose();
  }
  return { getParameters: M, getProgramCacheKey: p, getUniforms: y, acquireProgram: x, releaseProgram: R, releaseShaderCache: A, programs: c, dispose: w };
}
function M0() {
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
function E0(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.material.id !== e.material.id ? n.material.id - e.material.id : n.materialVariant !== e.materialVariant ? n.materialVariant - e.materialVariant : n.z !== e.z ? n.z - e.z : n.id - e.id;
}
function ac(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.z !== e.z ? e.z - n.z : n.id - e.id;
}
function oc() {
  const n = [];
  let e = 0;
  const t = [], i = [], s = [];
  function r() {
    e = 0, t.length = 0, i.length = 0, s.length = 0;
  }
  function a(u) {
    let d = 0;
    return u.isInstancedMesh && (d += 2), u.isSkinnedMesh && (d += 1), d;
  }
  function o(u, d, g, M, p, m) {
    let E = n[e];
    return E === void 0 ? (E = { id: u.id, object: u, geometry: d, material: g, materialVariant: a(u), groupOrder: M, renderOrder: u.renderOrder, z: p, group: m }, n[e] = E) : (E.id = u.id, E.object = u, E.geometry = d, E.material = g, E.materialVariant = a(u), E.groupOrder = M, E.renderOrder = u.renderOrder, E.z = p, E.group = m), e++, E;
  }
  function l(u, d, g, M, p, m) {
    const E = o(u, d, g, M, p, m);
    g.transmission > 0 ? i.push(E) : g.transparent === true ? s.push(E) : t.push(E);
  }
  function c(u, d, g, M, p, m) {
    const E = o(u, d, g, M, p, m);
    g.transmission > 0 ? i.unshift(E) : g.transparent === true ? s.unshift(E) : t.unshift(E);
  }
  function h(u, d, g) {
    t.length > 1 && t.sort(u || E0), i.length > 1 && i.sort(d || ac), s.length > 1 && s.sort(d || ac), g && (t.reverse(), i.reverse(), s.reverse());
  }
  function f() {
    for (let u = e, d = n.length; u < d; u++) {
      const g = n[u];
      if (g.id === null) break;
      g.id = null, g.object = null, g.geometry = null, g.material = null, g.group = null;
    }
  }
  return { opaque: t, transmissive: i, transparent: s, init: r, push: l, unshift: c, finish: f, sort: h };
}
function y0() {
  let n = /* @__PURE__ */ new WeakMap();
  function e(i, s) {
    const r = n.get(i);
    let a;
    return r === void 0 ? (a = new oc(), n.set(i, [a])) : s >= r.length ? (a = new oc(), r.push(a)) : a = r[s], a;
  }
  function t() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function T0() {
  const n = {};
  return { get: function(e) {
    if (n[e.id] !== void 0) return n[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new C(), color: new Be() };
        break;
      case "SpotLight":
        t = { position: new C(), direction: new C(), color: new Be(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new C(), color: new Be(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new C(), skyColor: new Be(), groundColor: new Be() };
        break;
      case "RectAreaLight":
        t = { color: new Be(), position: new C(), halfWidth: new C(), halfHeight: new C() };
        break;
    }
    return n[e.id] = t, t;
  } };
}
function b0() {
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
let A0 = 0;
function R0(n, e) {
  return (e.castShadow ? 2 : 0) - (n.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (n.map ? 1 : 0);
}
function w0(n) {
  const e = new T0(), t = b0(), i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) i.probe.push(new C());
  const s = new C(), r = new Ke(), a = new Ke();
  function o(c) {
    let h = 0, f = 0, u = 0;
    for (let T = 0; T < 9; T++) i.probe[T].set(0, 0, 0);
    let d = 0, g = 0, M = 0, p = 0, m = 0, E = 0, y = 0, x = 0, R = 0, A = 0, w = 0;
    c.sort(R0);
    for (let T = 0, D = c.length; T < D; T++) {
      const P = c[T], L = P.color, W = P.intensity, X = P.distance;
      let O = null;
      if (P.shadow && P.shadow.map && (P.shadow.map.texture.format === ai ? O = P.shadow.map.texture : O = P.shadow.map.depthTexture || P.shadow.map.texture), P.isAmbientLight) h += L.r * W, f += L.g * W, u += L.b * W;
      else if (P.isLightProbe) {
        for (let k = 0; k < 9; k++) i.probe[k].addScaledVector(P.sh.coefficients[k], W);
        w++;
      } else if (P.isDirectionalLight) {
        const k = e.get(P);
        if (k.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
          const G = P.shadow, $ = t.get(P);
          $.shadowIntensity = G.intensity, $.shadowBias = G.bias, $.shadowNormalBias = G.normalBias, $.shadowRadius = G.radius, $.shadowMapSize = G.mapSize, i.directionalShadow[d] = $, i.directionalShadowMap[d] = O, i.directionalShadowMatrix[d] = P.shadow.matrix, E++;
        }
        i.directional[d] = k, d++;
      } else if (P.isSpotLight) {
        const k = e.get(P);
        k.position.setFromMatrixPosition(P.matrixWorld), k.color.copy(L).multiplyScalar(W), k.distance = X, k.coneCos = Math.cos(P.angle), k.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), k.decay = P.decay, i.spot[M] = k;
        const G = P.shadow;
        if (P.map && (i.spotLightMap[R] = P.map, R++, G.updateMatrices(P), P.castShadow && A++), i.spotLightMatrix[M] = G.matrix, P.castShadow) {
          const $ = t.get(P);
          $.shadowIntensity = G.intensity, $.shadowBias = G.bias, $.shadowNormalBias = G.normalBias, $.shadowRadius = G.radius, $.shadowMapSize = G.mapSize, i.spotShadow[M] = $, i.spotShadowMap[M] = O, x++;
        }
        M++;
      } else if (P.isRectAreaLight) {
        const k = e.get(P);
        k.color.copy(L).multiplyScalar(W), k.halfWidth.set(P.width * 0.5, 0, 0), k.halfHeight.set(0, P.height * 0.5, 0), i.rectArea[p] = k, p++;
      } else if (P.isPointLight) {
        const k = e.get(P);
        if (k.color.copy(P.color).multiplyScalar(P.intensity), k.distance = P.distance, k.decay = P.decay, P.castShadow) {
          const G = P.shadow, $ = t.get(P);
          $.shadowIntensity = G.intensity, $.shadowBias = G.bias, $.shadowNormalBias = G.normalBias, $.shadowRadius = G.radius, $.shadowMapSize = G.mapSize, $.shadowCameraNear = G.camera.near, $.shadowCameraFar = G.camera.far, i.pointShadow[g] = $, i.pointShadowMap[g] = O, i.pointShadowMatrix[g] = P.shadow.matrix, y++;
        }
        i.point[g] = k, g++;
      } else if (P.isHemisphereLight) {
        const k = e.get(P);
        k.skyColor.copy(P.color).multiplyScalar(W), k.groundColor.copy(P.groundColor).multiplyScalar(W), i.hemi[m] = k, m++;
      }
    }
    p > 0 && (n.has("OES_texture_float_linear") === true ? (i.rectAreaLTC1 = ue.LTC_FLOAT_1, i.rectAreaLTC2 = ue.LTC_FLOAT_2) : (i.rectAreaLTC1 = ue.LTC_HALF_1, i.rectAreaLTC2 = ue.LTC_HALF_2)), i.ambient[0] = h, i.ambient[1] = f, i.ambient[2] = u;
    const v = i.hash;
    (v.directionalLength !== d || v.pointLength !== g || v.spotLength !== M || v.rectAreaLength !== p || v.hemiLength !== m || v.numDirectionalShadows !== E || v.numPointShadows !== y || v.numSpotShadows !== x || v.numSpotMaps !== R || v.numLightProbes !== w) && (i.directional.length = d, i.spot.length = M, i.rectArea.length = p, i.point.length = g, i.hemi.length = m, i.directionalShadow.length = E, i.directionalShadowMap.length = E, i.pointShadow.length = y, i.pointShadowMap.length = y, i.spotShadow.length = x, i.spotShadowMap.length = x, i.directionalShadowMatrix.length = E, i.pointShadowMatrix.length = y, i.spotLightMatrix.length = x + R - A, i.spotLightMap.length = R, i.numSpotLightShadowsWithMaps = A, i.numLightProbes = w, v.directionalLength = d, v.pointLength = g, v.spotLength = M, v.rectAreaLength = p, v.hemiLength = m, v.numDirectionalShadows = E, v.numPointShadows = y, v.numSpotShadows = x, v.numSpotMaps = R, v.numLightProbes = w, i.version = A0++);
  }
  function l(c, h) {
    let f = 0, u = 0, d = 0, g = 0, M = 0;
    const p = h.matrixWorldInverse;
    for (let m = 0, E = c.length; m < E; m++) {
      const y = c[m];
      if (y.isDirectionalLight) {
        const x = i.directional[f];
        x.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), x.direction.sub(s), x.direction.transformDirection(p), f++;
      } else if (y.isSpotLight) {
        const x = i.spot[d];
        x.position.setFromMatrixPosition(y.matrixWorld), x.position.applyMatrix4(p), x.direction.setFromMatrixPosition(y.matrixWorld), s.setFromMatrixPosition(y.target.matrixWorld), x.direction.sub(s), x.direction.transformDirection(p), d++;
      } else if (y.isRectAreaLight) {
        const x = i.rectArea[g];
        x.position.setFromMatrixPosition(y.matrixWorld), x.position.applyMatrix4(p), a.identity(), r.copy(y.matrixWorld), r.premultiply(p), a.extractRotation(r), x.halfWidth.set(y.width * 0.5, 0, 0), x.halfHeight.set(0, y.height * 0.5, 0), x.halfWidth.applyMatrix4(a), x.halfHeight.applyMatrix4(a), g++;
      } else if (y.isPointLight) {
        const x = i.point[u];
        x.position.setFromMatrixPosition(y.matrixWorld), x.position.applyMatrix4(p), u++;
      } else if (y.isHemisphereLight) {
        const x = i.hemi[M];
        x.direction.setFromMatrixPosition(y.matrixWorld), x.direction.transformDirection(p), M++;
      }
    }
  }
  return { setup: o, setupView: l, state: i };
}
function lc(n) {
  const e = new w0(n), t = [], i = [], s = [];
  function r(u) {
    f.camera = u, t.length = 0, i.length = 0, s.length = 0;
  }
  function a(u) {
    t.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function l(u) {
    s.push(u);
  }
  function c() {
    e.setup(t);
  }
  function h(u) {
    e.setupView(t, u);
  }
  const f = { lightsArray: t, shadowsArray: i, lightProbeGridArray: s, camera: null, lights: e, transmissionRenderTarget: {}, textureUnits: 0 };
  return { init: r, state: f, setupLights: c, setupLightsView: h, pushLight: a, pushShadow: o, pushLightProbeGrid: l };
}
function C0(n) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(s, r = 0) {
    const a = e.get(s);
    let o;
    return a === void 0 ? (o = new lc(n), e.set(s, [o])) : r >= a.length ? (o = new lc(n), a.push(o)) : o = a[r], o;
  }
  function i() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: i };
}
const P0 = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, D0 = `uniform sampler2D shadow_pass;
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
}`, U0 = [new C(1, 0, 0), new C(-1, 0, 0), new C(0, 1, 0), new C(0, -1, 0), new C(0, 0, 1), new C(0, 0, -1)], I0 = [new C(0, -1, 0), new C(0, -1, 0), new C(0, 0, 1), new C(0, 0, -1), new C(0, -1, 0), new C(0, -1, 0)], cc = new Ke(), as = new C(), ga = new C();
function L0(n, e, t) {
  let i = new Co();
  const s = new j(), r = new j(), a = new lt(), o = new Hf(), l = new kf(), c = {}, h = t.maxTextureSize, f = { [Dn]: Ut, [Ut]: Dn, [Kt]: Kt }, u = new Tt({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new j() }, radius: { value: 4 } }, vertexShader: P0, fragmentShader: D0 }), d = u.clone();
  d.defines.HORIZONTAL_PASS = 1;
  const g = new Ft();
  g.setAttribute("position", new Wt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const M = new $t(g, u), p = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = hr;
  let m = this.type;
  this.render = function(A, w, v) {
    if (p.enabled === false || p.autoUpdate === false && p.needsUpdate === false || A.length === 0) return;
    this.type === Ph && (Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = hr);
    const T = n.getRenderTarget(), D = n.getActiveCubeFace(), P = n.getActiveMipmapLevel(), L = n.state;
    L.setBlending(It), L.buffers.depth.getReversed() === true ? L.buffers.color.setClear(0, 0, 0, 0) : L.buffers.color.setClear(1, 1, 1, 1), L.buffers.depth.setTest(true), L.setScissorTest(false);
    const W = m !== this.type;
    W && w.traverse(function(X) {
      X.material && (Array.isArray(X.material) ? X.material.forEach((O) => O.needsUpdate = true) : X.material.needsUpdate = true);
    });
    for (let X = 0, O = A.length; X < O; X++) {
      const k = A[X], G = k.shadow;
      if (G === void 0) {
        Ce("WebGLShadowMap:", k, "has no shadow.");
        continue;
      }
      if (G.autoUpdate === false && G.needsUpdate === false) continue;
      s.copy(G.mapSize);
      const $ = G.getFrameExtents();
      s.multiply($), r.copy(G.mapSize), (s.x > h || s.y > h) && (s.x > h && (r.x = Math.floor(h / $.x), s.x = r.x * $.x, G.mapSize.x = r.x), s.y > h && (r.y = Math.floor(h / $.y), s.y = r.y * $.y, G.mapSize.y = r.y));
      const ee = n.state.buffers.depth.getReversed();
      if (G.camera._reversedDepth = ee, G.map === null || W === true) {
        if (G.map !== null && (G.map.depthTexture !== null && (G.map.depthTexture.dispose(), G.map.depthTexture = null), G.map.dispose()), this.type === ls) {
          if (k.isPointLight) {
            Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          G.map = new Et(s.x, s.y, { format: ai, type: Un, minFilter: Mt, magFilter: Mt, generateMipmaps: false }), G.map.texture.name = k.name + ".shadowMap", G.map.depthTexture = new oi(s.x, s.y, tn), G.map.depthTexture.name = k.name + ".shadowMapDepth", G.map.depthTexture.format = In, G.map.depthTexture.compareFunction = null, G.map.depthTexture.minFilter = Nt, G.map.depthTexture.magFilter = Nt;
        } else k.isPointLight ? (G.map = new lh(s.x), G.map.depthTexture = new ju(s.x, Sn)) : (G.map = new Et(s.x, s.y), G.map.depthTexture = new oi(s.x, s.y, Sn)), G.map.depthTexture.name = k.name + ".shadowMap", G.map.depthTexture.format = In, this.type === hr ? (G.map.depthTexture.compareFunction = ee ? bo : To, G.map.depthTexture.minFilter = Mt, G.map.depthTexture.magFilter = Mt) : (G.map.depthTexture.compareFunction = null, G.map.depthTexture.minFilter = Nt, G.map.depthTexture.magFilter = Nt);
        G.camera.updateProjectionMatrix();
      }
      const re = G.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let fe = 0; fe < re; fe++) {
        if (G.map.isWebGLCubeRenderTarget) n.setRenderTarget(G.map, fe), n.clear();
        else {
          fe === 0 && (n.setRenderTarget(G.map), n.clear());
          const _e = G.getViewport(fe);
          a.set(r.x * _e.x, r.y * _e.y, r.x * _e.z, r.y * _e.w), L.viewport(a);
        }
        if (k.isPointLight) {
          const _e = G.camera, Ve = G.matrix, nt = k.distance || _e.far;
          nt !== _e.far && (_e.far = nt, _e.updateProjectionMatrix()), as.setFromMatrixPosition(k.matrixWorld), _e.position.copy(as), ga.copy(_e.position), ga.add(U0[fe]), _e.up.copy(I0[fe]), _e.lookAt(ga), _e.updateMatrixWorld(), Ve.makeTranslation(-as.x, -as.y, -as.z), cc.multiplyMatrices(_e.projectionMatrix, _e.matrixWorldInverse), G._frustum.setFromProjectionMatrix(cc, _e.coordinateSystem, _e.reversedDepth);
        } else G.updateMatrices(k);
        i = G.getFrustum(), x(w, v, G.camera, k, this.type);
      }
      G.isPointLightShadow !== true && this.type === ls && E(G, v), G.needsUpdate = false;
    }
    m = this.type, p.needsUpdate = false, n.setRenderTarget(T, D, P);
  };
  function E(A, w) {
    const v = e.update(M);
    u.defines.VSM_SAMPLES !== A.blurSamples && (u.defines.VSM_SAMPLES = A.blurSamples, d.defines.VSM_SAMPLES = A.blurSamples, u.needsUpdate = true, d.needsUpdate = true), A.mapPass === null && (A.mapPass = new Et(s.x, s.y, { format: ai, type: Un })), u.uniforms.shadow_pass.value = A.map.depthTexture, u.uniforms.resolution.value = A.mapSize, u.uniforms.radius.value = A.radius, n.setRenderTarget(A.mapPass), n.clear(), n.renderBufferDirect(w, null, v, u, M, null), d.uniforms.shadow_pass.value = A.mapPass.texture, d.uniforms.resolution.value = A.mapSize, d.uniforms.radius.value = A.radius, n.setRenderTarget(A.map), n.clear(), n.renderBufferDirect(w, null, v, d, M, null);
  }
  function y(A, w, v, T) {
    let D = null;
    const P = v.isPointLight === true ? A.customDistanceMaterial : A.customDepthMaterial;
    if (P !== void 0) D = P;
    else if (D = v.isPointLight === true ? l : o, n.localClippingEnabled && w.clipShadows === true && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0 || w.alphaToCoverage === true) {
      const L = D.uuid, W = w.uuid;
      let X = c[L];
      X === void 0 && (X = {}, c[L] = X);
      let O = X[W];
      O === void 0 && (O = D.clone(), X[W] = O, w.addEventListener("dispose", R)), D = O;
    }
    if (D.visible = w.visible, D.wireframe = w.wireframe, T === ls ? D.side = w.shadowSide !== null ? w.shadowSide : w.side : D.side = w.shadowSide !== null ? w.shadowSide : f[w.side], D.alphaMap = w.alphaMap, D.alphaTest = w.alphaToCoverage === true ? 0.5 : w.alphaTest, D.map = w.map, D.clipShadows = w.clipShadows, D.clippingPlanes = w.clippingPlanes, D.clipIntersection = w.clipIntersection, D.displacementMap = w.displacementMap, D.displacementScale = w.displacementScale, D.displacementBias = w.displacementBias, D.wireframeLinewidth = w.wireframeLinewidth, D.linewidth = w.linewidth, v.isPointLight === true && D.isMeshDistanceMaterial === true) {
      const L = n.properties.get(D);
      L.light = v;
    }
    return D;
  }
  function x(A, w, v, T, D) {
    if (A.visible === false) return;
    if (A.layers.test(w.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && D === ls) && (!A.frustumCulled || i.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse, A.matrixWorld);
      const W = e.update(A), X = A.material;
      if (Array.isArray(X)) {
        const O = W.groups;
        for (let k = 0, G = O.length; k < G; k++) {
          const $ = O[k], ee = X[$.materialIndex];
          if (ee && ee.visible) {
            const re = y(A, ee, T, D);
            A.onBeforeShadow(n, A, w, v, W, re, $), n.renderBufferDirect(v, null, W, re, A, $), A.onAfterShadow(n, A, w, v, W, re, $);
          }
        }
      } else if (X.visible) {
        const O = y(A, X, T, D);
        A.onBeforeShadow(n, A, w, v, W, O, null), n.renderBufferDirect(v, null, W, O, A, null), A.onAfterShadow(n, A, w, v, W, O, null);
      }
    }
    const L = A.children;
    for (let W = 0, X = L.length; W < X; W++) x(L[W], w, v, T, D);
  }
  function R(A) {
    A.target.removeEventListener("dispose", R);
    for (const v in c) {
      const T = c[v], D = A.target.uuid;
      D in T && (T[D].dispose(), delete T[D]);
    }
  }
}
function N0(n, e) {
  function t() {
    let U = false;
    const se = new lt();
    let K = null;
    const ce = new lt(0, 0, 0, 0);
    return { setMask: function(me) {
      K !== me && !U && (n.colorMask(me, me, me, me), K = me);
    }, setLocked: function(me) {
      U = me;
    }, setClear: function(me, Q, Ee, xe, ft) {
      ft === true && (me *= xe, Q *= xe, Ee *= xe), se.set(me, Q, Ee, xe), ce.equals(se) === false && (n.clearColor(me, Q, Ee, xe), ce.copy(se));
    }, reset: function() {
      U = false, K = null, ce.set(-1, 0, 0, 0);
    } };
  }
  function i() {
    let U = false, se = false, K = null, ce = null, me = null;
    return { setReversed: function(Q) {
      if (se !== Q) {
        const Ee = e.get("EXT_clip_control");
        Q ? Ee.clipControlEXT(Ee.LOWER_LEFT_EXT, Ee.ZERO_TO_ONE_EXT) : Ee.clipControlEXT(Ee.LOWER_LEFT_EXT, Ee.NEGATIVE_ONE_TO_ONE_EXT), se = Q;
        const xe = me;
        me = null, this.setClear(xe);
      }
    }, getReversed: function() {
      return se;
    }, setTest: function(Q) {
      Q ? te(n.DEPTH_TEST) : Me(n.DEPTH_TEST);
    }, setMask: function(Q) {
      K !== Q && !U && (n.depthMask(Q), K = Q);
    }, setFunc: function(Q) {
      if (se && (Q = lu[Q]), ce !== Q) {
        switch (Q) {
          case ya:
            n.depthFunc(n.NEVER);
            break;
          case vr:
            n.depthFunc(n.ALWAYS);
            break;
          case Ta:
            n.depthFunc(n.LESS);
            break;
          case Gi:
            n.depthFunc(n.LEQUAL);
            break;
          case ba:
            n.depthFunc(n.EQUAL);
            break;
          case Aa:
            n.depthFunc(n.GEQUAL);
            break;
          case Ra:
            n.depthFunc(n.GREATER);
            break;
          case wa:
            n.depthFunc(n.NOTEQUAL);
            break;
          default:
            n.depthFunc(n.LEQUAL);
        }
        ce = Q;
      }
    }, setLocked: function(Q) {
      U = Q;
    }, setClear: function(Q) {
      me !== Q && (me = Q, se && (Q = 1 - Q), n.clearDepth(Q));
    }, reset: function() {
      U = false, K = null, ce = null, me = null, se = false;
    } };
  }
  function s() {
    let U = false, se = null, K = null, ce = null, me = null, Q = null, Ee = null, xe = null, ft = null;
    return { setTest: function(at) {
      U || (at ? te(n.STENCIL_TEST) : Me(n.STENCIL_TEST));
    }, setMask: function(at) {
      se !== at && !U && (n.stencilMask(at), se = at);
    }, setFunc: function(at, hn, un) {
      (K !== at || ce !== hn || me !== un) && (n.stencilFunc(at, hn, un), K = at, ce = hn, me = un);
    }, setOp: function(at, hn, un) {
      (Q !== at || Ee !== hn || xe !== un) && (n.stencilOp(at, hn, un), Q = at, Ee = hn, xe = un);
    }, setLocked: function(at) {
      U = at;
    }, setClear: function(at) {
      ft !== at && (n.clearStencil(at), ft = at);
    }, reset: function() {
      U = false, se = null, K = null, ce = null, me = null, Q = null, Ee = null, xe = null, ft = null;
    } };
  }
  const r = new t(), a = new i(), o = new s(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, f = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), g = [], M = null, p = false, m = null, E = null, y = null, x = null, R = null, A = null, w = null, v = new Be(0, 0, 0), T = 0, D = false, P = null, L = null, W = null, X = null, O = null;
  const k = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let G = false, $ = 0;
  const ee = n.getParameter(n.VERSION);
  ee.indexOf("WebGL") !== -1 ? ($ = parseFloat(/^WebGL (\d)/.exec(ee)[1]), G = $ >= 1) : ee.indexOf("OpenGL ES") !== -1 && ($ = parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]), G = $ >= 2);
  let re = null, fe = {};
  const _e = n.getParameter(n.SCISSOR_BOX), Ve = n.getParameter(n.VIEWPORT), nt = new lt().fromArray(_e), We = new lt().fromArray(Ve);
  function Z(U, se, K, ce) {
    const me = new Uint8Array(4), Q = n.createTexture();
    n.bindTexture(U, Q), n.texParameteri(U, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(U, n.TEXTURE_MAG_FILTER, n.NEAREST);
    for (let Ee = 0; Ee < K; Ee++) U === n.TEXTURE_3D || U === n.TEXTURE_2D_ARRAY ? n.texImage3D(se, 0, n.RGBA, 1, 1, ce, 0, n.RGBA, n.UNSIGNED_BYTE, me) : n.texImage2D(se + Ee, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, me);
    return Q;
  }
  const ie = {};
  ie[n.TEXTURE_2D] = Z(n.TEXTURE_2D, n.TEXTURE_2D, 1), ie[n.TEXTURE_CUBE_MAP] = Z(n.TEXTURE_CUBE_MAP, n.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ie[n.TEXTURE_2D_ARRAY] = Z(n.TEXTURE_2D_ARRAY, n.TEXTURE_2D_ARRAY, 1, 1), ie[n.TEXTURE_3D] = Z(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), te(n.DEPTH_TEST), a.setFunc(Gi), vt(false), bt(Vo), te(n.CULL_FACE), Je(It);
  function te(U) {
    h[U] !== true && (n.enable(U), h[U] = true);
  }
  function Me(U) {
    h[U] !== false && (n.disable(U), h[U] = false);
  }
  function Ae(U, se) {
    return u[U] !== se ? (n.bindFramebuffer(U, se), u[U] = se, U === n.DRAW_FRAMEBUFFER && (u[n.FRAMEBUFFER] = se), U === n.FRAMEBUFFER && (u[n.DRAW_FRAMEBUFFER] = se), true) : false;
  }
  function Re(U, se) {
    let K = g, ce = false;
    if (U) {
      K = d.get(se), K === void 0 && (K = [], d.set(se, K));
      const me = U.textures;
      if (K.length !== me.length || K[0] !== n.COLOR_ATTACHMENT0) {
        for (let Q = 0, Ee = me.length; Q < Ee; Q++) K[Q] = n.COLOR_ATTACHMENT0 + Q;
        K.length = me.length, ce = true;
      }
    } else K[0] !== n.BACK && (K[0] = n.BACK, ce = true);
    ce && n.drawBuffers(K);
  }
  function mt(U) {
    return M !== U ? (n.useProgram(U), M = U, true) : false;
  }
  const ze = { [ti]: n.FUNC_ADD, [Uh]: n.FUNC_SUBTRACT, [Ih]: n.FUNC_REVERSE_SUBTRACT };
  ze[Lh] = n.MIN, ze[Nh] = n.MAX;
  const it = { [Fh]: n.ZERO, [Oh]: n.ONE, [Bh]: n.SRC_COLOR, [Ma]: n.SRC_ALPHA, [Wh]: n.SRC_ALPHA_SATURATE, [Gh]: n.DST_COLOR, [Hh]: n.DST_ALPHA, [zh]: n.ONE_MINUS_SRC_COLOR, [Ea]: n.ONE_MINUS_SRC_ALPHA, [Vh]: n.ONE_MINUS_DST_COLOR, [kh]: n.ONE_MINUS_DST_ALPHA, [Xh]: n.CONSTANT_COLOR, [Yh]: n.ONE_MINUS_CONSTANT_COLOR, [qh]: n.CONSTANT_ALPHA, [Zh]: n.ONE_MINUS_CONSTANT_ALPHA };
  function Je(U, se, K, ce, me, Q, Ee, xe, ft, at) {
    if (U === It) {
      p === true && (Me(n.BLEND), p = false);
      return;
    }
    if (p === false && (te(n.BLEND), p = true), U !== Dh) {
      if (U !== m || at !== D) {
        if ((E !== ti || R !== ti) && (n.blendEquation(n.FUNC_ADD), E = ti, R = ti), at) switch (U) {
          case zi:
            n.blendFuncSeparate(n.ONE, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
            break;
          case Wo:
            n.blendFunc(n.ONE, n.ONE);
            break;
          case Xo:
            n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
            break;
          case Yo:
            n.blendFuncSeparate(n.DST_COLOR, n.ONE_MINUS_SRC_ALPHA, n.ZERO, n.ONE);
            break;
          default:
            ke("WebGLState: Invalid blending: ", U);
            break;
        }
        else switch (U) {
          case zi:
            n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
            break;
          case Wo:
            n.blendFuncSeparate(n.SRC_ALPHA, n.ONE, n.ONE, n.ONE);
            break;
          case Xo:
            ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case Yo:
            ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            ke("WebGLState: Invalid blending: ", U);
            break;
        }
        y = null, x = null, A = null, w = null, v.set(0, 0, 0), T = 0, m = U, D = at;
      }
      return;
    }
    me = me || se, Q = Q || K, Ee = Ee || ce, (se !== E || me !== R) && (n.blendEquationSeparate(ze[se], ze[me]), E = se, R = me), (K !== y || ce !== x || Q !== A || Ee !== w) && (n.blendFuncSeparate(it[K], it[ce], it[Q], it[Ee]), y = K, x = ce, A = Q, w = Ee), (xe.equals(v) === false || ft !== T) && (n.blendColor(xe.r, xe.g, xe.b, ft), v.copy(xe), T = ft), m = U, D = false;
  }
  function Ye(U, se) {
    U.side === Kt ? Me(n.CULL_FACE) : te(n.CULL_FACE);
    let K = U.side === Ut;
    se && (K = !K), vt(K), U.blending === zi && U.transparent === false ? Je(It) : Je(U.blending, U.blendEquation, U.blendSrc, U.blendDst, U.blendEquationAlpha, U.blendSrcAlpha, U.blendDstAlpha, U.blendColor, U.blendAlpha, U.premultipliedAlpha), a.setFunc(U.depthFunc), a.setTest(U.depthTest), a.setMask(U.depthWrite), r.setMask(U.colorWrite);
    const ce = U.stencilWrite;
    o.setTest(ce), ce && (o.setMask(U.stencilWriteMask), o.setFunc(U.stencilFunc, U.stencilRef, U.stencilFuncMask), o.setOp(U.stencilFail, U.stencilZFail, U.stencilZPass)), Lt(U.polygonOffset, U.polygonOffsetFactor, U.polygonOffsetUnits), U.alphaToCoverage === true ? te(n.SAMPLE_ALPHA_TO_COVERAGE) : Me(n.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function vt(U) {
    P !== U && (U ? n.frontFace(n.CW) : n.frontFace(n.CCW), P = U);
  }
  function bt(U) {
    U !== wh ? (te(n.CULL_FACE), U !== L && (U === Vo ? n.cullFace(n.BACK) : U === Ch ? n.cullFace(n.FRONT) : n.cullFace(n.FRONT_AND_BACK))) : Me(n.CULL_FACE), L = U;
  }
  function Pt(U) {
    U !== W && (G && n.lineWidth(U), W = U);
  }
  function Lt(U, se, K) {
    U ? (te(n.POLYGON_OFFSET_FILL), (X !== se || O !== K) && (X = se, O = K, a.getReversed() && (se = -se), n.polygonOffset(se, K))) : Me(n.POLYGON_OFFSET_FILL);
  }
  function ut(U) {
    U ? te(n.SCISSOR_TEST) : Me(n.SCISSOR_TEST);
  }
  function xt(U) {
    U === void 0 && (U = n.TEXTURE0 + k - 1), re !== U && (n.activeTexture(U), re = U);
  }
  function I(U, se, K) {
    K === void 0 && (re === null ? K = n.TEXTURE0 + k - 1 : K = re);
    let ce = fe[K];
    ce === void 0 && (ce = { type: void 0, texture: void 0 }, fe[K] = ce), (ce.type !== U || ce.texture !== se) && (re !== K && (n.activeTexture(K), re = K), n.bindTexture(U, se || ie[U]), ce.type = U, ce.texture = se);
  }
  function Gt() {
    const U = fe[re];
    U !== void 0 && U.type !== void 0 && (n.bindTexture(U.type, null), U.type = void 0, U.texture = void 0);
  }
  function $e() {
    try {
      n.compressedTexImage2D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function b() {
    try {
      n.compressedTexImage3D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function _() {
    try {
      n.texSubImage2D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function F() {
    try {
      n.texSubImage3D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function H() {
    try {
      n.compressedTexSubImage2D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function Y() {
    try {
      n.compressedTexSubImage3D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function ne() {
    try {
      n.texStorage2D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function ae() {
    try {
      n.texStorage3D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function q() {
    try {
      n.texImage2D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function J() {
    try {
      n.texImage3D(...arguments);
    } catch (U) {
      ke("WebGLState:", U);
    }
  }
  function oe(U) {
    return f[U] !== void 0 ? f[U] : n.getParameter(U);
  }
  function ye(U, se) {
    f[U] !== se && (n.pixelStorei(U, se), f[U] = se);
  }
  function he(U) {
    nt.equals(U) === false && (n.scissor(U.x, U.y, U.z, U.w), nt.copy(U));
  }
  function le(U) {
    We.equals(U) === false && (n.viewport(U.x, U.y, U.z, U.w), We.copy(U));
  }
  function we(U, se) {
    let K = c.get(se);
    K === void 0 && (K = /* @__PURE__ */ new WeakMap(), c.set(se, K));
    let ce = K.get(U);
    ce === void 0 && (ce = n.getUniformBlockIndex(se, U.name), K.set(U, ce));
  }
  function De(U, se) {
    const ce = c.get(se).get(U);
    l.get(se) !== ce && (n.uniformBlockBinding(se, ce, U.__bindingPointIndex), l.set(se, ce));
  }
  function Ie() {
    n.disable(n.BLEND), n.disable(n.CULL_FACE), n.disable(n.DEPTH_TEST), n.disable(n.POLYGON_OFFSET_FILL), n.disable(n.SCISSOR_TEST), n.disable(n.STENCIL_TEST), n.disable(n.SAMPLE_ALPHA_TO_COVERAGE), n.blendEquation(n.FUNC_ADD), n.blendFunc(n.ONE, n.ZERO), n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO), n.blendColor(0, 0, 0, 0), n.colorMask(true, true, true, true), n.clearColor(0, 0, 0, 0), n.depthMask(true), n.depthFunc(n.LESS), a.setReversed(false), n.clearDepth(1), n.stencilMask(4294967295), n.stencilFunc(n.ALWAYS, 0, 4294967295), n.stencilOp(n.KEEP, n.KEEP, n.KEEP), n.clearStencil(0), n.cullFace(n.BACK), n.frontFace(n.CCW), n.polygonOffset(0, 0), n.activeTexture(n.TEXTURE0), n.bindFramebuffer(n.FRAMEBUFFER, null), n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), n.bindFramebuffer(n.READ_FRAMEBUFFER, null), n.useProgram(null), n.lineWidth(1), n.scissor(0, 0, n.canvas.width, n.canvas.height), n.viewport(0, 0, n.canvas.width, n.canvas.height), n.pixelStorei(n.PACK_ALIGNMENT, 4), n.pixelStorei(n.UNPACK_ALIGNMENT, 4), n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, false), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, n.BROWSER_DEFAULT_WEBGL), n.pixelStorei(n.PACK_ROW_LENGTH, 0), n.pixelStorei(n.PACK_SKIP_PIXELS, 0), n.pixelStorei(n.PACK_SKIP_ROWS, 0), n.pixelStorei(n.UNPACK_ROW_LENGTH, 0), n.pixelStorei(n.UNPACK_IMAGE_HEIGHT, 0), n.pixelStorei(n.UNPACK_SKIP_PIXELS, 0), n.pixelStorei(n.UNPACK_SKIP_ROWS, 0), n.pixelStorei(n.UNPACK_SKIP_IMAGES, 0), h = {}, f = {}, re = null, fe = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), g = [], M = null, p = false, m = null, E = null, y = null, x = null, R = null, A = null, w = null, v = new Be(0, 0, 0), T = 0, D = false, P = null, L = null, W = null, X = null, O = null, nt.set(0, 0, n.canvas.width, n.canvas.height), We.set(0, 0, n.canvas.width, n.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: r, depth: a, stencil: o }, enable: te, disable: Me, bindFramebuffer: Ae, drawBuffers: Re, useProgram: mt, setBlending: Je, setMaterial: Ye, setFlipSided: vt, setCullFace: bt, setLineWidth: Pt, setPolygonOffset: Lt, setScissorTest: ut, activeTexture: xt, bindTexture: I, unbindTexture: Gt, compressedTexImage2D: $e, compressedTexImage3D: b, texImage2D: q, texImage3D: J, pixelStorei: ye, getParameter: oe, updateUBOMapping: we, uniformBlockBinding: De, texStorage2D: ne, texStorage3D: ae, texSubImage2D: _, texSubImage3D: F, compressedTexSubImage2D: H, compressedTexSubImage3D: Y, scissor: he, viewport: le, reset: Ie };
}
function F0(n, e, t, i, s, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new j(), h = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new Set();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let g = false;
  try {
    g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function M(b, _) {
    return g ? new OffscreenCanvas(b, _) : xs("canvas");
  }
  function p(b, _, F) {
    let H = 1;
    const Y = $e(b);
    if ((Y.width > F || Y.height > F) && (H = F / Math.max(Y.width, Y.height)), H < 1) if (typeof HTMLImageElement < "u" && b instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && b instanceof ImageBitmap || typeof VideoFrame < "u" && b instanceof VideoFrame) {
      const ne = Math.floor(H * Y.width), ae = Math.floor(H * Y.height);
      u === void 0 && (u = M(ne, ae));
      const q = _ ? M(ne, ae) : u;
      return q.width = ne, q.height = ae, q.getContext("2d").drawImage(b, 0, 0, ne, ae), Ce("WebGLRenderer: Texture has been resized from (" + Y.width + "x" + Y.height + ") to (" + ne + "x" + ae + ")."), q;
    } else return "data" in b && Ce("WebGLRenderer: Image in DataTexture is too big (" + Y.width + "x" + Y.height + ")."), b;
    return b;
  }
  function m(b) {
    return b.generateMipmaps;
  }
  function E(b) {
    n.generateMipmap(b);
  }
  function y(b) {
    return b.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : b.isWebGL3DRenderTarget ? n.TEXTURE_3D : b.isWebGLArrayRenderTarget || b.isCompressedArrayTexture ? n.TEXTURE_2D_ARRAY : n.TEXTURE_2D;
  }
  function x(b, _, F, H, Y, ne = false) {
    if (b !== null) {
      if (n[b] !== void 0) return n[b];
      Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + b + "'");
    }
    let ae;
    H && (ae = e.get("EXT_texture_norm16"), ae || Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let q = _;
    if (_ === n.RED && (F === n.FLOAT && (q = n.R32F), F === n.HALF_FLOAT && (q = n.R16F), F === n.UNSIGNED_BYTE && (q = n.R8), F === n.UNSIGNED_SHORT && ae && (q = ae.R16_EXT), F === n.SHORT && ae && (q = ae.R16_SNORM_EXT)), _ === n.RED_INTEGER && (F === n.UNSIGNED_BYTE && (q = n.R8UI), F === n.UNSIGNED_SHORT && (q = n.R16UI), F === n.UNSIGNED_INT && (q = n.R32UI), F === n.BYTE && (q = n.R8I), F === n.SHORT && (q = n.R16I), F === n.INT && (q = n.R32I)), _ === n.RG && (F === n.FLOAT && (q = n.RG32F), F === n.HALF_FLOAT && (q = n.RG16F), F === n.UNSIGNED_BYTE && (q = n.RG8), F === n.UNSIGNED_SHORT && ae && (q = ae.RG16_EXT), F === n.SHORT && ae && (q = ae.RG16_SNORM_EXT)), _ === n.RG_INTEGER && (F === n.UNSIGNED_BYTE && (q = n.RG8UI), F === n.UNSIGNED_SHORT && (q = n.RG16UI), F === n.UNSIGNED_INT && (q = n.RG32UI), F === n.BYTE && (q = n.RG8I), F === n.SHORT && (q = n.RG16I), F === n.INT && (q = n.RG32I)), _ === n.RGB_INTEGER && (F === n.UNSIGNED_BYTE && (q = n.RGB8UI), F === n.UNSIGNED_SHORT && (q = n.RGB16UI), F === n.UNSIGNED_INT && (q = n.RGB32UI), F === n.BYTE && (q = n.RGB8I), F === n.SHORT && (q = n.RGB16I), F === n.INT && (q = n.RGB32I)), _ === n.RGBA_INTEGER && (F === n.UNSIGNED_BYTE && (q = n.RGBA8UI), F === n.UNSIGNED_SHORT && (q = n.RGBA16UI), F === n.UNSIGNED_INT && (q = n.RGBA32UI), F === n.BYTE && (q = n.RGBA8I), F === n.SHORT && (q = n.RGBA16I), F === n.INT && (q = n.RGBA32I)), _ === n.RGB && (F === n.UNSIGNED_SHORT && ae && (q = ae.RGB16_EXT), F === n.SHORT && ae && (q = ae.RGB16_SNORM_EXT), F === n.UNSIGNED_INT_5_9_9_9_REV && (q = n.RGB9_E5), F === n.UNSIGNED_INT_10F_11F_11F_REV && (q = n.R11F_G11F_B10F)), _ === n.RGBA) {
      const J = ne ? Mr : Ge.getTransfer(Y);
      F === n.FLOAT && (q = n.RGBA32F), F === n.HALF_FLOAT && (q = n.RGBA16F), F === n.UNSIGNED_BYTE && (q = J === Qe ? n.SRGB8_ALPHA8 : n.RGBA8), F === n.UNSIGNED_SHORT && ae && (q = ae.RGBA16_EXT), F === n.SHORT && ae && (q = ae.RGBA16_SNORM_EXT), F === n.UNSIGNED_SHORT_4_4_4_4 && (q = n.RGBA4), F === n.UNSIGNED_SHORT_5_5_5_1 && (q = n.RGB5_A1);
    }
    return (q === n.R16F || q === n.R32F || q === n.RG16F || q === n.RG32F || q === n.RGBA16F || q === n.RGBA32F) && e.get("EXT_color_buffer_float"), q;
  }
  function R(b, _) {
    let F;
    return b ? _ === null || _ === Sn || _ === Wi ? F = n.DEPTH24_STENCIL8 : _ === tn ? F = n.DEPTH32F_STENCIL8 : _ === _s && (F = n.DEPTH24_STENCIL8, Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === Sn || _ === Wi ? F = n.DEPTH_COMPONENT24 : _ === tn ? F = n.DEPTH_COMPONENT32F : _ === _s && (F = n.DEPTH_COMPONENT16), F;
  }
  function A(b, _) {
    return m(b) === true || b.isFramebufferTexture && b.minFilter !== Nt && b.minFilter !== Mt ? Math.log2(Math.max(_.width, _.height)) + 1 : b.mipmaps !== void 0 && b.mipmaps.length > 0 ? b.mipmaps.length : b.isCompressedTexture && Array.isArray(b.image) ? _.mipmaps.length : 1;
  }
  function w(b) {
    const _ = b.target;
    _.removeEventListener("dispose", w), T(_), _.isVideoTexture && h.delete(_), _.isHTMLTexture && f.delete(_);
  }
  function v(b) {
    const _ = b.target;
    _.removeEventListener("dispose", v), P(_);
  }
  function T(b) {
    const _ = i.get(b);
    if (_.__webglInit === void 0) return;
    const F = b.source, H = d.get(F);
    if (H) {
      const Y = H[_.__cacheKey];
      Y.usedTimes--, Y.usedTimes === 0 && D(b), Object.keys(H).length === 0 && d.delete(F);
    }
    i.remove(b);
  }
  function D(b) {
    const _ = i.get(b);
    n.deleteTexture(_.__webglTexture);
    const F = b.source, H = d.get(F);
    delete H[_.__cacheKey], a.memory.textures--;
  }
  function P(b) {
    const _ = i.get(b);
    if (b.depthTexture && (b.depthTexture.dispose(), i.remove(b.depthTexture)), b.isWebGLCubeRenderTarget) for (let H = 0; H < 6; H++) {
      if (Array.isArray(_.__webglFramebuffer[H])) for (let Y = 0; Y < _.__webglFramebuffer[H].length; Y++) n.deleteFramebuffer(_.__webglFramebuffer[H][Y]);
      else n.deleteFramebuffer(_.__webglFramebuffer[H]);
      _.__webglDepthbuffer && n.deleteRenderbuffer(_.__webglDepthbuffer[H]);
    }
    else {
      if (Array.isArray(_.__webglFramebuffer)) for (let H = 0; H < _.__webglFramebuffer.length; H++) n.deleteFramebuffer(_.__webglFramebuffer[H]);
      else n.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && n.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && n.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer) for (let H = 0; H < _.__webglColorRenderbuffer.length; H++) _.__webglColorRenderbuffer[H] && n.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);
      _.__webglDepthRenderbuffer && n.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const F = b.textures;
    for (let H = 0, Y = F.length; H < Y; H++) {
      const ne = i.get(F[H]);
      ne.__webglTexture && (n.deleteTexture(ne.__webglTexture), a.memory.textures--), i.remove(F[H]);
    }
    i.remove(b);
  }
  let L = 0;
  function W() {
    L = 0;
  }
  function X() {
    return L;
  }
  function O(b) {
    L = b;
  }
  function k() {
    const b = L;
    return b >= s.maxTextures && Ce("WebGLTextures: Trying to use " + b + " texture units while this GPU supports only " + s.maxTextures), L += 1, b;
  }
  function G(b) {
    const _ = [];
    return _.push(b.wrapS), _.push(b.wrapT), _.push(b.wrapR || 0), _.push(b.magFilter), _.push(b.minFilter), _.push(b.anisotropy), _.push(b.internalFormat), _.push(b.format), _.push(b.type), _.push(b.generateMipmaps), _.push(b.premultiplyAlpha), _.push(b.flipY), _.push(b.unpackAlignment), _.push(b.colorSpace), _.join();
  }
  function $(b, _) {
    const F = i.get(b);
    if (b.isVideoTexture && I(b), b.isRenderTargetTexture === false && b.isExternalTexture !== true && b.version > 0 && F.__version !== b.version) {
      const H = b.image;
      if (H === null) Ce("WebGLRenderer: Texture marked for update but no image data found.");
      else if (H.complete === false) Ce("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Me(F, b, _);
        return;
      }
    } else b.isExternalTexture && (F.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
    t.bindTexture(n.TEXTURE_2D, F.__webglTexture, n.TEXTURE0 + _);
  }
  function ee(b, _) {
    const F = i.get(b);
    if (b.isRenderTargetTexture === false && b.version > 0 && F.__version !== b.version) {
      Me(F, b, _);
      return;
    } else b.isExternalTexture && (F.__webglTexture = b.sourceTexture ? b.sourceTexture : null);
    t.bindTexture(n.TEXTURE_2D_ARRAY, F.__webglTexture, n.TEXTURE0 + _);
  }
  function re(b, _) {
    const F = i.get(b);
    if (b.isRenderTargetTexture === false && b.version > 0 && F.__version !== b.version) {
      Me(F, b, _);
      return;
    }
    t.bindTexture(n.TEXTURE_3D, F.__webglTexture, n.TEXTURE0 + _);
  }
  function fe(b, _) {
    const F = i.get(b);
    if (b.isCubeDepthTexture !== true && b.version > 0 && F.__version !== b.version) {
      Ae(F, b, _);
      return;
    }
    t.bindTexture(n.TEXTURE_CUBE_MAP, F.__webglTexture, n.TEXTURE0 + _);
  }
  const _e = { [Ca]: n.REPEAT, [Cn]: n.CLAMP_TO_EDGE, [Pa]: n.MIRRORED_REPEAT }, Ve = { [Nt]: n.NEAREST, [$h]: n.NEAREST_MIPMAP_NEAREST, [Ps]: n.NEAREST_MIPMAP_LINEAR, [Mt]: n.LINEAR, [Fr]: n.LINEAR_MIPMAP_NEAREST, [ii]: n.LINEAR_MIPMAP_LINEAR }, nt = { [jh]: n.NEVER, [su]: n.ALWAYS, [eu]: n.LESS, [To]: n.LEQUAL, [tu]: n.EQUAL, [bo]: n.GEQUAL, [nu]: n.GREATER, [iu]: n.NOTEQUAL };
  function We(b, _) {
    if (_.type === tn && e.has("OES_texture_float_linear") === false && (_.magFilter === Mt || _.magFilter === Fr || _.magFilter === Ps || _.magFilter === ii || _.minFilter === Mt || _.minFilter === Fr || _.minFilter === Ps || _.minFilter === ii) && Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), n.texParameteri(b, n.TEXTURE_WRAP_S, _e[_.wrapS]), n.texParameteri(b, n.TEXTURE_WRAP_T, _e[_.wrapT]), (b === n.TEXTURE_3D || b === n.TEXTURE_2D_ARRAY) && n.texParameteri(b, n.TEXTURE_WRAP_R, _e[_.wrapR]), n.texParameteri(b, n.TEXTURE_MAG_FILTER, Ve[_.magFilter]), n.texParameteri(b, n.TEXTURE_MIN_FILTER, Ve[_.minFilter]), _.compareFunction && (n.texParameteri(b, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE), n.texParameteri(b, n.TEXTURE_COMPARE_FUNC, nt[_.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (_.magFilter === Nt || _.minFilter !== Ps && _.minFilter !== ii || _.type === tn && e.has("OES_texture_float_linear") === false) return;
      if (_.anisotropy > 1 || i.get(_).__currentAnisotropy) {
        const F = e.get("EXT_texture_filter_anisotropic");
        n.texParameterf(b, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, s.getMaxAnisotropy())), i.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function Z(b, _) {
    let F = false;
    b.__webglInit === void 0 && (b.__webglInit = true, _.addEventListener("dispose", w));
    const H = _.source;
    let Y = d.get(H);
    Y === void 0 && (Y = {}, d.set(H, Y));
    const ne = G(_);
    if (ne !== b.__cacheKey) {
      Y[ne] === void 0 && (Y[ne] = { texture: n.createTexture(), usedTimes: 0 }, a.memory.textures++, F = true), Y[ne].usedTimes++;
      const ae = Y[b.__cacheKey];
      ae !== void 0 && (Y[b.__cacheKey].usedTimes--, ae.usedTimes === 0 && D(_)), b.__cacheKey = ne, b.__webglTexture = Y[ne].texture;
    }
    return F;
  }
  function ie(b, _, F) {
    return Math.floor(Math.floor(b / F) / _);
  }
  function te(b, _, F, H) {
    const ne = b.updateRanges;
    if (ne.length === 0) t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, _.width, _.height, F, H, _.data);
    else {
      ne.sort((ye, he) => ye.start - he.start);
      let ae = 0;
      for (let ye = 1; ye < ne.length; ye++) {
        const he = ne[ae], le = ne[ye], we = he.start + he.count, De = ie(le.start, _.width, 4), Ie = ie(he.start, _.width, 4);
        le.start <= we + 1 && De === Ie && ie(le.start + le.count - 1, _.width, 4) === De ? he.count = Math.max(he.count, le.start + le.count - he.start) : (++ae, ne[ae] = le);
      }
      ne.length = ae + 1;
      const q = t.getParameter(n.UNPACK_ROW_LENGTH), J = t.getParameter(n.UNPACK_SKIP_PIXELS), oe = t.getParameter(n.UNPACK_SKIP_ROWS);
      t.pixelStorei(n.UNPACK_ROW_LENGTH, _.width);
      for (let ye = 0, he = ne.length; ye < he; ye++) {
        const le = ne[ye], we = Math.floor(le.start / 4), De = Math.ceil(le.count / 4), Ie = we % _.width, U = Math.floor(we / _.width), se = De, K = 1;
        t.pixelStorei(n.UNPACK_SKIP_PIXELS, Ie), t.pixelStorei(n.UNPACK_SKIP_ROWS, U), t.texSubImage2D(n.TEXTURE_2D, 0, Ie, U, se, K, F, H, _.data);
      }
      b.clearUpdateRanges(), t.pixelStorei(n.UNPACK_ROW_LENGTH, q), t.pixelStorei(n.UNPACK_SKIP_PIXELS, J), t.pixelStorei(n.UNPACK_SKIP_ROWS, oe);
    }
  }
  function Me(b, _, F) {
    let H = n.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (H = n.TEXTURE_2D_ARRAY), _.isData3DTexture && (H = n.TEXTURE_3D);
    const Y = Z(b, _), ne = _.source;
    t.bindTexture(H, b.__webglTexture, n.TEXTURE0 + F);
    const ae = i.get(ne);
    if (ne.version !== ae.__version || Y === true) {
      if (t.activeTexture(n.TEXTURE0 + F), (typeof ImageBitmap < "u" && _.image instanceof ImageBitmap) === false) {
        const K = Ge.getPrimaries(Ge.workingColorSpace), ce = _.colorSpace === gn ? null : Ge.getPrimaries(_.colorSpace), me = _.colorSpace === gn || K === ce ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
        t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, _.flipY), t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, me);
      }
      t.pixelStorei(n.UNPACK_ALIGNMENT, _.unpackAlignment);
      let J = p(_.image, false, s.maxTextureSize);
      J = Gt(_, J);
      const oe = r.convert(_.format, _.colorSpace), ye = r.convert(_.type);
      let he = x(_.internalFormat, oe, ye, _.normalized, _.colorSpace, _.isVideoTexture);
      We(H, _);
      let le;
      const we = _.mipmaps, De = _.isVideoTexture !== true, Ie = ae.__version === void 0 || Y === true, U = ne.dataReady, se = A(_, J);
      if (_.isDepthTexture) he = R(_.format === Yn, _.type), Ie && (De ? t.texStorage2D(n.TEXTURE_2D, 1, he, J.width, J.height) : t.texImage2D(n.TEXTURE_2D, 0, he, J.width, J.height, 0, oe, ye, null));
      else if (_.isDataTexture) if (we.length > 0) {
        De && Ie && t.texStorage2D(n.TEXTURE_2D, se, he, we[0].width, we[0].height);
        for (let K = 0, ce = we.length; K < ce; K++) le = we[K], De ? U && t.texSubImage2D(n.TEXTURE_2D, K, 0, 0, le.width, le.height, oe, ye, le.data) : t.texImage2D(n.TEXTURE_2D, K, he, le.width, le.height, 0, oe, ye, le.data);
        _.generateMipmaps = false;
      } else De ? (Ie && t.texStorage2D(n.TEXTURE_2D, se, he, J.width, J.height), U && te(_, J, oe, ye)) : t.texImage2D(n.TEXTURE_2D, 0, he, J.width, J.height, 0, oe, ye, J.data);
      else if (_.isCompressedTexture) if (_.isCompressedArrayTexture) {
        De && Ie && t.texStorage3D(n.TEXTURE_2D_ARRAY, se, he, we[0].width, we[0].height, J.depth);
        for (let K = 0, ce = we.length; K < ce; K++) if (le = we[K], _.format !== ln) if (oe !== null) if (De) {
          if (U) if (_.layerUpdates.size > 0) {
            const me = Hl(le.width, le.height, _.format, _.type);
            for (const Q of _.layerUpdates) {
              const Ee = le.data.subarray(Q * me / le.data.BYTES_PER_ELEMENT, (Q + 1) * me / le.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, K, 0, 0, Q, le.width, le.height, 1, oe, Ee);
            }
            _.clearLayerUpdates();
          } else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, K, 0, 0, 0, le.width, le.height, J.depth, oe, le.data);
        } else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY, K, he, le.width, le.height, J.depth, 0, le.data, 0, 0);
        else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else De ? U && t.texSubImage3D(n.TEXTURE_2D_ARRAY, K, 0, 0, 0, le.width, le.height, J.depth, oe, ye, le.data) : t.texImage3D(n.TEXTURE_2D_ARRAY, K, he, le.width, le.height, J.depth, 0, oe, ye, le.data);
      } else {
        De && Ie && t.texStorage2D(n.TEXTURE_2D, se, he, we[0].width, we[0].height);
        for (let K = 0, ce = we.length; K < ce; K++) le = we[K], _.format !== ln ? oe !== null ? De ? U && t.compressedTexSubImage2D(n.TEXTURE_2D, K, 0, 0, le.width, le.height, oe, le.data) : t.compressedTexImage2D(n.TEXTURE_2D, K, he, le.width, le.height, 0, le.data) : Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : De ? U && t.texSubImage2D(n.TEXTURE_2D, K, 0, 0, le.width, le.height, oe, ye, le.data) : t.texImage2D(n.TEXTURE_2D, K, he, le.width, le.height, 0, oe, ye, le.data);
      }
      else if (_.isDataArrayTexture) if (De) {
        if (Ie && t.texStorage3D(n.TEXTURE_2D_ARRAY, se, he, J.width, J.height, J.depth), U) if (_.layerUpdates.size > 0) {
          const K = Hl(J.width, J.height, _.format, _.type);
          for (const ce of _.layerUpdates) {
            const me = J.data.subarray(ce * K / J.data.BYTES_PER_ELEMENT, (ce + 1) * K / J.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, ce, J.width, J.height, 1, oe, ye, me);
          }
          _.clearLayerUpdates();
        } else t.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, 0, J.width, J.height, J.depth, oe, ye, J.data);
      } else t.texImage3D(n.TEXTURE_2D_ARRAY, 0, he, J.width, J.height, J.depth, 0, oe, ye, J.data);
      else if (_.isData3DTexture) De ? (Ie && t.texStorage3D(n.TEXTURE_3D, se, he, J.width, J.height, J.depth), U && t.texSubImage3D(n.TEXTURE_3D, 0, 0, 0, 0, J.width, J.height, J.depth, oe, ye, J.data)) : t.texImage3D(n.TEXTURE_3D, 0, he, J.width, J.height, J.depth, 0, oe, ye, J.data);
      else if (_.isFramebufferTexture) {
        if (Ie) if (De) t.texStorage2D(n.TEXTURE_2D, se, he, J.width, J.height);
        else {
          let K = J.width, ce = J.height;
          for (let me = 0; me < se; me++) t.texImage2D(n.TEXTURE_2D, me, he, K, ce, 0, oe, ye, null), K >>= 1, ce >>= 1;
        }
      } else if (_.isHTMLTexture) {
        if ("texElementImage2D" in n) {
          const K = n.canvas;
          if (K.hasAttribute("layoutsubtree") || K.setAttribute("layoutsubtree", "true"), J.parentNode !== K) {
            K.appendChild(J), f.add(_), K.onpaint = (ce) => {
              const me = ce.changedElements;
              for (const Q of f) me.includes(Q.image) && (Q.needsUpdate = true);
            }, K.requestPaint();
            return;
          }
          if (n.texElementImage2D.length === 3) n.texElementImage2D(n.TEXTURE_2D, n.RGBA8, J);
          else {
            const me = n.RGBA, Q = n.RGBA, Ee = n.UNSIGNED_BYTE;
            n.texElementImage2D(n.TEXTURE_2D, 0, me, Q, Ee, J);
          }
          n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE);
        }
      } else if (we.length > 0) {
        if (De && Ie) {
          const K = $e(we[0]);
          t.texStorage2D(n.TEXTURE_2D, se, he, K.width, K.height);
        }
        for (let K = 0, ce = we.length; K < ce; K++) le = we[K], De ? U && t.texSubImage2D(n.TEXTURE_2D, K, 0, 0, oe, ye, le) : t.texImage2D(n.TEXTURE_2D, K, he, oe, ye, le);
        _.generateMipmaps = false;
      } else if (De) {
        if (Ie) {
          const K = $e(J);
          t.texStorage2D(n.TEXTURE_2D, se, he, K.width, K.height);
        }
        U && t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, oe, ye, J);
      } else t.texImage2D(n.TEXTURE_2D, 0, he, oe, ye, J);
      m(_) && E(H), ae.__version = ne.version, _.onUpdate && _.onUpdate(_);
    }
    b.__version = _.version;
  }
  function Ae(b, _, F) {
    if (_.image.length !== 6) return;
    const H = Z(b, _), Y = _.source;
    t.bindTexture(n.TEXTURE_CUBE_MAP, b.__webglTexture, n.TEXTURE0 + F);
    const ne = i.get(Y);
    if (Y.version !== ne.__version || H === true) {
      t.activeTexture(n.TEXTURE0 + F);
      const ae = Ge.getPrimaries(Ge.workingColorSpace), q = _.colorSpace === gn ? null : Ge.getPrimaries(_.colorSpace), J = _.colorSpace === gn || ae === q ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, _.flipY), t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), t.pixelStorei(n.UNPACK_ALIGNMENT, _.unpackAlignment), t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, J);
      const oe = _.isCompressedTexture || _.image[0].isCompressedTexture, ye = _.image[0] && _.image[0].isDataTexture, he = [];
      for (let Q = 0; Q < 6; Q++) !oe && !ye ? he[Q] = p(_.image[Q], true, s.maxCubemapSize) : he[Q] = ye ? _.image[Q].image : _.image[Q], he[Q] = Gt(_, he[Q]);
      const le = he[0], we = r.convert(_.format, _.colorSpace), De = r.convert(_.type), Ie = x(_.internalFormat, we, De, _.normalized, _.colorSpace), U = _.isVideoTexture !== true, se = ne.__version === void 0 || H === true, K = Y.dataReady;
      let ce = A(_, le);
      We(n.TEXTURE_CUBE_MAP, _);
      let me;
      if (oe) {
        U && se && t.texStorage2D(n.TEXTURE_CUBE_MAP, ce, Ie, le.width, le.height);
        for (let Q = 0; Q < 6; Q++) {
          me = he[Q].mipmaps;
          for (let Ee = 0; Ee < me.length; Ee++) {
            const xe = me[Ee];
            _.format !== ln ? we !== null ? U ? K && t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Q, Ee, 0, 0, xe.width, xe.height, we, xe.data) : t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Q, Ee, Ie, xe.width, xe.height, 0, xe.data) : Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : U ? K && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Q, Ee, 0, 0, xe.width, xe.height, we, De, xe.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Q, Ee, Ie, xe.width, xe.height, 0, we, De, xe.data);
          }
        }
      } else {
        if (me = _.mipmaps, U && se) {
          me.length > 0 && ce++;
          const Q = $e(he[0]);
          t.texStorage2D(n.TEXTURE_CUBE_MAP, ce, Ie, Q.width, Q.height);
        }
        for (let Q = 0; Q < 6; Q++) if (ye) {
          U ? K && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, 0, 0, he[Q].width, he[Q].height, we, De, he[Q].data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, Ie, he[Q].width, he[Q].height, 0, we, De, he[Q].data);
          for (let Ee = 0; Ee < me.length; Ee++) {
            const ft = me[Ee].image[Q].image;
            U ? K && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Q, Ee + 1, 0, 0, ft.width, ft.height, we, De, ft.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Q, Ee + 1, Ie, ft.width, ft.height, 0, we, De, ft.data);
          }
        } else {
          U ? K && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, 0, 0, we, De, he[Q]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Q, 0, Ie, we, De, he[Q]);
          for (let Ee = 0; Ee < me.length; Ee++) {
            const xe = me[Ee];
            U ? K && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Q, Ee + 1, 0, 0, we, De, xe.image[Q]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + Q, Ee + 1, Ie, we, De, xe.image[Q]);
          }
        }
      }
      m(_) && E(n.TEXTURE_CUBE_MAP), ne.__version = Y.version, _.onUpdate && _.onUpdate(_);
    }
    b.__version = _.version;
  }
  function Re(b, _, F, H, Y, ne) {
    const ae = r.convert(F.format, F.colorSpace), q = r.convert(F.type), J = x(F.internalFormat, ae, q, F.normalized, F.colorSpace), oe = i.get(_), ye = i.get(F);
    if (ye.__renderTarget = _, !oe.__hasExternalTextures) {
      const he = Math.max(1, _.width >> ne), le = Math.max(1, _.height >> ne);
      Y === n.TEXTURE_3D || Y === n.TEXTURE_2D_ARRAY ? t.texImage3D(Y, ne, J, he, le, _.depth, 0, ae, q, null) : t.texImage2D(Y, ne, J, he, le, 0, ae, q, null);
    }
    t.bindFramebuffer(n.FRAMEBUFFER, b), xt(_) ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, H, Y, ye.__webglTexture, 0, ut(_)) : (Y === n.TEXTURE_2D || Y >= n.TEXTURE_CUBE_MAP_POSITIVE_X && Y <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z) && n.framebufferTexture2D(n.FRAMEBUFFER, H, Y, ye.__webglTexture, ne), t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function mt(b, _, F) {
    if (n.bindRenderbuffer(n.RENDERBUFFER, b), _.depthBuffer) {
      const H = _.depthTexture, Y = H && H.isDepthTexture ? H.type : null, ne = R(_.stencilBuffer, Y), ae = _.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
      xt(_) ? o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, ut(_), ne, _.width, _.height) : F ? n.renderbufferStorageMultisample(n.RENDERBUFFER, ut(_), ne, _.width, _.height) : n.renderbufferStorage(n.RENDERBUFFER, ne, _.width, _.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, ae, n.RENDERBUFFER, b);
    } else {
      const H = _.textures;
      for (let Y = 0; Y < H.length; Y++) {
        const ne = H[Y], ae = r.convert(ne.format, ne.colorSpace), q = r.convert(ne.type), J = x(ne.internalFormat, ae, q, ne.normalized, ne.colorSpace);
        xt(_) ? o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, ut(_), J, _.width, _.height) : F ? n.renderbufferStorageMultisample(n.RENDERBUFFER, ut(_), J, _.width, _.height) : n.renderbufferStorage(n.RENDERBUFFER, J, _.width, _.height);
      }
    }
    n.bindRenderbuffer(n.RENDERBUFFER, null);
  }
  function ze(b, _, F) {
    const H = _.isWebGLCubeRenderTarget === true;
    if (t.bindFramebuffer(n.FRAMEBUFFER, b), !(_.depthTexture && _.depthTexture.isDepthTexture)) throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
    const Y = i.get(_.depthTexture);
    if (Y.__renderTarget = _, (!Y.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = true), H) {
      if (Y.__webglInit === void 0 && (Y.__webglInit = true, _.depthTexture.addEventListener("dispose", w)), Y.__webglTexture === void 0) {
        Y.__webglTexture = n.createTexture(), t.bindTexture(n.TEXTURE_CUBE_MAP, Y.__webglTexture), We(n.TEXTURE_CUBE_MAP, _.depthTexture);
        const oe = r.convert(_.depthTexture.format), ye = r.convert(_.depthTexture.type);
        let he;
        _.depthTexture.format === In ? he = n.DEPTH_COMPONENT24 : _.depthTexture.format === Yn && (he = n.DEPTH24_STENCIL8);
        for (let le = 0; le < 6; le++) n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + le, 0, he, _.width, _.height, 0, oe, ye, null);
      }
    } else $(_.depthTexture, 0);
    const ne = Y.__webglTexture, ae = ut(_), q = H ? n.TEXTURE_CUBE_MAP_POSITIVE_X + F : n.TEXTURE_2D, J = _.depthTexture.format === Yn ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
    if (_.depthTexture.format === In) xt(_) ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, J, q, ne, 0, ae) : n.framebufferTexture2D(n.FRAMEBUFFER, J, q, ne, 0);
    else if (_.depthTexture.format === Yn) xt(_) ? o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, J, q, ne, 0, ae) : n.framebufferTexture2D(n.FRAMEBUFFER, J, q, ne, 0);
    else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
  }
  function it(b) {
    const _ = i.get(b), F = b.isWebGLCubeRenderTarget === true;
    if (_.__boundDepthTexture !== b.depthTexture) {
      const H = b.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), H) {
        const Y = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, H.removeEventListener("dispose", Y);
        };
        H.addEventListener("dispose", Y), _.__depthDisposeCallback = Y;
      }
      _.__boundDepthTexture = H;
    }
    if (b.depthTexture && !_.__autoAllocateDepthBuffer) if (F) for (let H = 0; H < 6; H++) ze(_.__webglFramebuffer[H], b, H);
    else {
      const H = b.texture.mipmaps;
      H && H.length > 0 ? ze(_.__webglFramebuffer[0], b, 0) : ze(_.__webglFramebuffer, b, 0);
    }
    else if (F) {
      _.__webglDepthbuffer = [];
      for (let H = 0; H < 6; H++) if (t.bindFramebuffer(n.FRAMEBUFFER, _.__webglFramebuffer[H]), _.__webglDepthbuffer[H] === void 0) _.__webglDepthbuffer[H] = n.createRenderbuffer(), mt(_.__webglDepthbuffer[H], b, false);
      else {
        const Y = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, ne = _.__webglDepthbuffer[H];
        n.bindRenderbuffer(n.RENDERBUFFER, ne), n.framebufferRenderbuffer(n.FRAMEBUFFER, Y, n.RENDERBUFFER, ne);
      }
    } else {
      const H = b.texture.mipmaps;
      if (H && H.length > 0 ? t.bindFramebuffer(n.FRAMEBUFFER, _.__webglFramebuffer[0]) : t.bindFramebuffer(n.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0) _.__webglDepthbuffer = n.createRenderbuffer(), mt(_.__webglDepthbuffer, b, false);
      else {
        const Y = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, ne = _.__webglDepthbuffer;
        n.bindRenderbuffer(n.RENDERBUFFER, ne), n.framebufferRenderbuffer(n.FRAMEBUFFER, Y, n.RENDERBUFFER, ne);
      }
    }
    t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function Je(b, _, F) {
    const H = i.get(b);
    _ !== void 0 && Re(H.__webglFramebuffer, b, b.texture, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, 0), F !== void 0 && it(b);
  }
  function Ye(b) {
    const _ = b.texture, F = i.get(b), H = i.get(_);
    b.addEventListener("dispose", v);
    const Y = b.textures, ne = b.isWebGLCubeRenderTarget === true, ae = Y.length > 1;
    if (ae || (H.__webglTexture === void 0 && (H.__webglTexture = n.createTexture()), H.__version = _.version, a.memory.textures++), ne) {
      F.__webglFramebuffer = [];
      for (let q = 0; q < 6; q++) if (_.mipmaps && _.mipmaps.length > 0) {
        F.__webglFramebuffer[q] = [];
        for (let J = 0; J < _.mipmaps.length; J++) F.__webglFramebuffer[q][J] = n.createFramebuffer();
      } else F.__webglFramebuffer[q] = n.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let q = 0; q < _.mipmaps.length; q++) F.__webglFramebuffer[q] = n.createFramebuffer();
      } else F.__webglFramebuffer = n.createFramebuffer();
      if (ae) for (let q = 0, J = Y.length; q < J; q++) {
        const oe = i.get(Y[q]);
        oe.__webglTexture === void 0 && (oe.__webglTexture = n.createTexture(), a.memory.textures++);
      }
      if (b.samples > 0 && xt(b) === false) {
        F.__webglMultisampledFramebuffer = n.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(n.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let q = 0; q < Y.length; q++) {
          const J = Y[q];
          F.__webglColorRenderbuffer[q] = n.createRenderbuffer(), n.bindRenderbuffer(n.RENDERBUFFER, F.__webglColorRenderbuffer[q]);
          const oe = r.convert(J.format, J.colorSpace), ye = r.convert(J.type), he = x(J.internalFormat, oe, ye, J.normalized, J.colorSpace, b.isXRRenderTarget === true), le = ut(b);
          n.renderbufferStorageMultisample(n.RENDERBUFFER, le, he, b.width, b.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + q, n.RENDERBUFFER, F.__webglColorRenderbuffer[q]);
        }
        n.bindRenderbuffer(n.RENDERBUFFER, null), b.depthBuffer && (F.__webglDepthRenderbuffer = n.createRenderbuffer(), mt(F.__webglDepthRenderbuffer, b, true)), t.bindFramebuffer(n.FRAMEBUFFER, null);
      }
    }
    if (ne) {
      t.bindTexture(n.TEXTURE_CUBE_MAP, H.__webglTexture), We(n.TEXTURE_CUBE_MAP, _);
      for (let q = 0; q < 6; q++) if (_.mipmaps && _.mipmaps.length > 0) for (let J = 0; J < _.mipmaps.length; J++) Re(F.__webglFramebuffer[q][J], b, _, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + q, J);
      else Re(F.__webglFramebuffer[q], b, _, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0);
      m(_) && E(n.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ae) {
      for (let q = 0, J = Y.length; q < J; q++) {
        const oe = Y[q], ye = i.get(oe);
        let he = n.TEXTURE_2D;
        (b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (he = b.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY), t.bindTexture(he, ye.__webglTexture), We(he, oe), Re(F.__webglFramebuffer, b, oe, n.COLOR_ATTACHMENT0 + q, he, 0), m(oe) && E(he);
      }
      t.unbindTexture();
    } else {
      let q = n.TEXTURE_2D;
      if ((b.isWebGL3DRenderTarget || b.isWebGLArrayRenderTarget) && (q = b.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY), t.bindTexture(q, H.__webglTexture), We(q, _), _.mipmaps && _.mipmaps.length > 0) for (let J = 0; J < _.mipmaps.length; J++) Re(F.__webglFramebuffer[J], b, _, n.COLOR_ATTACHMENT0, q, J);
      else Re(F.__webglFramebuffer, b, _, n.COLOR_ATTACHMENT0, q, 0);
      m(_) && E(q), t.unbindTexture();
    }
    b.depthBuffer && it(b);
  }
  function vt(b) {
    const _ = b.textures;
    for (let F = 0, H = _.length; F < H; F++) {
      const Y = _[F];
      if (m(Y)) {
        const ne = y(b), ae = i.get(Y).__webglTexture;
        t.bindTexture(ne, ae), E(ne), t.unbindTexture();
      }
    }
  }
  const bt = [], Pt = [];
  function Lt(b) {
    if (b.samples > 0) {
      if (xt(b) === false) {
        const _ = b.textures, F = b.width, H = b.height;
        let Y = n.COLOR_BUFFER_BIT;
        const ne = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, ae = i.get(b), q = _.length > 1;
        if (q) for (let oe = 0; oe < _.length; oe++) t.bindFramebuffer(n.FRAMEBUFFER, ae.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + oe, n.RENDERBUFFER, null), t.bindFramebuffer(n.FRAMEBUFFER, ae.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + oe, n.TEXTURE_2D, null, 0);
        t.bindFramebuffer(n.READ_FRAMEBUFFER, ae.__webglMultisampledFramebuffer);
        const J = b.texture.mipmaps;
        J && J.length > 0 ? t.bindFramebuffer(n.DRAW_FRAMEBUFFER, ae.__webglFramebuffer[0]) : t.bindFramebuffer(n.DRAW_FRAMEBUFFER, ae.__webglFramebuffer);
        for (let oe = 0; oe < _.length; oe++) {
          if (b.resolveDepthBuffer && (b.depthBuffer && (Y |= n.DEPTH_BUFFER_BIT), b.stencilBuffer && b.resolveStencilBuffer && (Y |= n.STENCIL_BUFFER_BIT)), q) {
            n.framebufferRenderbuffer(n.READ_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.RENDERBUFFER, ae.__webglColorRenderbuffer[oe]);
            const ye = i.get(_[oe]).__webglTexture;
            n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, ye, 0);
          }
          n.blitFramebuffer(0, 0, F, H, 0, 0, F, H, Y, n.NEAREST), l === true && (bt.length = 0, Pt.length = 0, bt.push(n.COLOR_ATTACHMENT0 + oe), b.depthBuffer && b.resolveDepthBuffer === false && (bt.push(ne), Pt.push(ne), n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, Pt)), n.invalidateFramebuffer(n.READ_FRAMEBUFFER, bt));
        }
        if (t.bindFramebuffer(n.READ_FRAMEBUFFER, null), t.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), q) for (let oe = 0; oe < _.length; oe++) {
          t.bindFramebuffer(n.FRAMEBUFFER, ae.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + oe, n.RENDERBUFFER, ae.__webglColorRenderbuffer[oe]);
          const ye = i.get(_[oe]).__webglTexture;
          t.bindFramebuffer(n.FRAMEBUFFER, ae.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + oe, n.TEXTURE_2D, ye, 0);
        }
        t.bindFramebuffer(n.DRAW_FRAMEBUFFER, ae.__webglMultisampledFramebuffer);
      } else if (b.depthBuffer && b.resolveDepthBuffer === false && l) {
        const _ = b.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
        n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function ut(b) {
    return Math.min(s.maxSamples, b.samples);
  }
  function xt(b) {
    const _ = i.get(b);
    return b.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && _.__useRenderToTexture !== false;
  }
  function I(b) {
    const _ = a.render.frame;
    h.get(b) !== _ && (h.set(b, _), b.update());
  }
  function Gt(b, _) {
    const F = b.colorSpace, H = b.format, Y = b.type;
    return b.isCompressedTexture === true || b.isVideoTexture === true || F !== Xi && F !== gn && (Ge.getTransfer(F) === Qe ? (H !== ln || Y !== ct) && Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : ke("WebGLTextures: Unsupported texture color space:", F)), _;
  }
  function $e(b) {
    return typeof HTMLImageElement < "u" && b instanceof HTMLImageElement ? (c.width = b.naturalWidth || b.width, c.height = b.naturalHeight || b.height) : typeof VideoFrame < "u" && b instanceof VideoFrame ? (c.width = b.displayWidth, c.height = b.displayHeight) : (c.width = b.width, c.height = b.height), c;
  }
  this.allocateTextureUnit = k, this.resetTextureUnits = W, this.getTextureUnits = X, this.setTextureUnits = O, this.setTexture2D = $, this.setTexture2DArray = ee, this.setTexture3D = re, this.setTextureCube = fe, this.rebindTextures = Je, this.setupRenderTarget = Ye, this.updateRenderTargetMipmap = vt, this.updateMultisampleRenderTarget = Lt, this.setupDepthRenderbuffer = it, this.setupFrameBufferTexture = Re, this.useMultisampledRTT = xt, this.isReversedDepthBuffer = function() {
    return t.buffers.depth.getReversed();
  };
}
function O0(n, e) {
  function t(i, s = gn) {
    let r;
    const a = Ge.getTransfer(s);
    if (i === ct) return n.UNSIGNED_BYTE;
    if (i === vo) return n.UNSIGNED_SHORT_4_4_4_4;
    if (i === xo) return n.UNSIGNED_SHORT_5_5_5_1;
    if (i === Pc) return n.UNSIGNED_INT_5_9_9_9_REV;
    if (i === Dc) return n.UNSIGNED_INT_10F_11F_11F_REV;
    if (i === wc) return n.BYTE;
    if (i === Cc) return n.SHORT;
    if (i === _s) return n.UNSIGNED_SHORT;
    if (i === _o) return n.INT;
    if (i === Sn) return n.UNSIGNED_INT;
    if (i === tn) return n.FLOAT;
    if (i === Un) return n.HALF_FLOAT;
    if (i === Uc) return n.ALPHA;
    if (i === Ic) return n.RGB;
    if (i === ln) return n.RGBA;
    if (i === In) return n.DEPTH_COMPONENT;
    if (i === Yn) return n.DEPTH_STENCIL;
    if (i === So) return n.RED;
    if (i === Mo) return n.RED_INTEGER;
    if (i === ai) return n.RG;
    if (i === Eo) return n.RG_INTEGER;
    if (i === yo) return n.RGBA_INTEGER;
    if (i === ur || i === fr || i === dr || i === pr) if (a === Qe) if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (i === ur) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (i === fr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (i === dr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (i === pr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (i === ur) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (i === fr) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (i === dr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (i === pr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (i === Da || i === Ua || i === Ia || i === La) if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (i === Da) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (i === Ua) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (i === Ia) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (i === La) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (i === Na || i === Fa || i === Oa || i === Ba || i === za || i === xr || i === Ha) if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (i === Na || i === Fa) return a === Qe ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (i === Oa) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      if (i === Ba) return r.COMPRESSED_R11_EAC;
      if (i === za) return r.COMPRESSED_SIGNED_R11_EAC;
      if (i === xr) return r.COMPRESSED_RG11_EAC;
      if (i === Ha) return r.COMPRESSED_SIGNED_RG11_EAC;
    } else return null;
    if (i === ka || i === Ga || i === Va || i === Wa || i === Xa || i === Ya || i === qa || i === Za || i === Ka || i === Ja || i === $a || i === Qa || i === ja || i === eo) if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (i === ka) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (i === Ga) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (i === Va) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (i === Wa) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (i === Xa) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (i === Ya) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (i === qa) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (i === Za) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (i === Ka) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (i === Ja) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (i === $a) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (i === Qa) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (i === ja) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (i === eo) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (i === to || i === no || i === io) if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
      if (i === to) return a === Qe ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (i === no) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (i === io) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (i === so || i === ro || i === Sr || i === ao) if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
      if (i === so) return r.COMPRESSED_RED_RGTC1_EXT;
      if (i === ro) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (i === Sr) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (i === ao) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return i === Wi ? n.UNSIGNED_INT_24_8 : n[i] !== void 0 ? n[i] : null;
  }
  return { convert: t };
}
const B0 = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, z0 = `
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
class H0 {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      const i = new Vc(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, i = new Tt({ vertexShader: B0, fragmentShader: z0, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new $t(new Rr(20, 20), i);
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
class k0 extends cn {
  constructor(e, t) {
    super();
    const i = this;
    let s = null, r = 1, a = null, o = "local-floor", l = 1, c = null, h = null, f = null, u = null, d = null, g = null;
    const M = typeof XRWebGLBinding < "u", p = new H0(), m = {}, E = t.getContextAttributes();
    let y = null, x = null;
    const R = [], A = [], w = new j();
    let v = null;
    const T = new Zt();
    T.viewport = new lt();
    const D = new Zt();
    D.viewport = new lt();
    const P = [T, D], L = new Jf();
    let W = null, X = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(Z) {
      let ie = R[Z];
      return ie === void 0 && (ie = new Gr(), R[Z] = ie), ie.getTargetRaySpace();
    }, this.getControllerGrip = function(Z) {
      let ie = R[Z];
      return ie === void 0 && (ie = new Gr(), R[Z] = ie), ie.getGripSpace();
    }, this.getHand = function(Z) {
      let ie = R[Z];
      return ie === void 0 && (ie = new Gr(), R[Z] = ie), ie.getHandSpace();
    };
    function O(Z) {
      const ie = A.indexOf(Z.inputSource);
      if (ie === -1) return;
      const te = R[ie];
      te !== void 0 && (te.update(Z.inputSource, Z.frame, c || a), te.dispatchEvent({ type: Z.type, data: Z.inputSource }));
    }
    function k() {
      s.removeEventListener("select", O), s.removeEventListener("selectstart", O), s.removeEventListener("selectend", O), s.removeEventListener("squeeze", O), s.removeEventListener("squeezestart", O), s.removeEventListener("squeezeend", O), s.removeEventListener("end", k), s.removeEventListener("inputsourceschange", G);
      for (let Z = 0; Z < R.length; Z++) {
        const ie = A[Z];
        ie !== null && (A[Z] = null, R[Z].disconnect(ie));
      }
      W = null, X = null, p.reset();
      for (const Z in m) delete m[Z];
      e.setRenderTarget(y), d = null, u = null, f = null, s = null, x = null, We.stop(), i.isPresenting = false, e.setPixelRatio(v), e.setSize(w.width, w.height, false), i.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Z) {
      r = Z, i.isPresenting === true && Ce("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Z) {
      o = Z, i.isPresenting === true && Ce("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(Z) {
      c = Z;
    }, this.getBaseLayer = function() {
      return u !== null ? u : d;
    }, this.getBinding = function() {
      return f === null && M && (f = new XRWebGLBinding(s, t)), f;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(Z) {
      if (s = Z, s !== null) {
        if (y = e.getRenderTarget(), s.addEventListener("select", O), s.addEventListener("selectstart", O), s.addEventListener("selectend", O), s.addEventListener("squeeze", O), s.addEventListener("squeezestart", O), s.addEventListener("squeezeend", O), s.addEventListener("end", k), s.addEventListener("inputsourceschange", G), E.xrCompatible !== true && await t.makeXRCompatible(), v = e.getPixelRatio(), e.getSize(w), M && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let te = null, Me = null, Ae = null;
          E.depth && (Ae = E.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, te = E.stencil ? Yn : In, Me = E.stencil ? Wi : Sn);
          const Re = { colorFormat: t.RGBA8, depthFormat: Ae, scaleFactor: r };
          f = this.getBinding(), u = f.createProjectionLayer(Re), s.updateRenderState({ layers: [u] }), e.setPixelRatio(1), e.setSize(u.textureWidth, u.textureHeight, false), x = new Et(u.textureWidth, u.textureHeight, { format: ln, type: ct, depthTexture: new oi(u.textureWidth, u.textureHeight, Me, void 0, void 0, void 0, void 0, void 0, void 0, te), stencilBuffer: E.stencil, colorSpace: e.outputColorSpace, samples: E.antialias ? 4 : 0, resolveDepthBuffer: u.ignoreDepthValues === false, resolveStencilBuffer: u.ignoreDepthValues === false });
        } else {
          const te = { antialias: E.antialias, alpha: true, depth: E.depth, stencil: E.stencil, framebufferScaleFactor: r };
          d = new XRWebGLLayer(s, t, te), s.updateRenderState({ baseLayer: d }), e.setPixelRatio(1), e.setSize(d.framebufferWidth, d.framebufferHeight, false), x = new Et(d.framebufferWidth, d.framebufferHeight, { format: ln, type: ct, colorSpace: e.outputColorSpace, stencilBuffer: E.stencil, resolveDepthBuffer: d.ignoreDepthValues === false, resolveStencilBuffer: d.ignoreDepthValues === false });
        }
        x.isXRRenderTarget = true, this.setFoveation(l), c = null, a = await s.requestReferenceSpace(o), We.setContext(s), We.start(), i.isPresenting = true, i.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null) return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return p.getDepthTexture();
    };
    function G(Z) {
      for (let ie = 0; ie < Z.removed.length; ie++) {
        const te = Z.removed[ie], Me = A.indexOf(te);
        Me >= 0 && (A[Me] = null, R[Me].disconnect(te));
      }
      for (let ie = 0; ie < Z.added.length; ie++) {
        const te = Z.added[ie];
        let Me = A.indexOf(te);
        if (Me === -1) {
          for (let Re = 0; Re < R.length; Re++) if (Re >= A.length) {
            A.push(te), Me = Re;
            break;
          } else if (A[Re] === null) {
            A[Re] = te, Me = Re;
            break;
          }
          if (Me === -1) break;
        }
        const Ae = R[Me];
        Ae && Ae.connect(te);
      }
    }
    const $ = new C(), ee = new C();
    function re(Z, ie, te) {
      $.setFromMatrixPosition(ie.matrixWorld), ee.setFromMatrixPosition(te.matrixWorld);
      const Me = $.distanceTo(ee), Ae = ie.projectionMatrix.elements, Re = te.projectionMatrix.elements, mt = Ae[14] / (Ae[10] - 1), ze = Ae[14] / (Ae[10] + 1), it = (Ae[9] + 1) / Ae[5], Je = (Ae[9] - 1) / Ae[5], Ye = (Ae[8] - 1) / Ae[0], vt = (Re[8] + 1) / Re[0], bt = mt * Ye, Pt = mt * vt, Lt = Me / (-Ye + vt), ut = Lt * -Ye;
      if (ie.matrixWorld.decompose(Z.position, Z.quaternion, Z.scale), Z.translateX(ut), Z.translateZ(Lt), Z.matrixWorld.compose(Z.position, Z.quaternion, Z.scale), Z.matrixWorldInverse.copy(Z.matrixWorld).invert(), Ae[10] === -1) Z.projectionMatrix.copy(ie.projectionMatrix), Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse);
      else {
        const xt = mt + Lt, I = ze + Lt, Gt = bt - ut, $e = Pt + (Me - ut), b = it * ze / I * xt, _ = Je * ze / I * xt;
        Z.projectionMatrix.makePerspective(Gt, $e, b, _, xt, I), Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert();
      }
    }
    function fe(Z, ie) {
      ie === null ? Z.matrixWorld.copy(Z.matrix) : Z.matrixWorld.multiplyMatrices(ie.matrixWorld, Z.matrix), Z.matrixWorldInverse.copy(Z.matrixWorld).invert();
    }
    this.updateCamera = function(Z) {
      if (s === null) return;
      let ie = Z.near, te = Z.far;
      p.texture !== null && (p.depthNear > 0 && (ie = p.depthNear), p.depthFar > 0 && (te = p.depthFar)), L.near = D.near = T.near = ie, L.far = D.far = T.far = te, (W !== L.near || X !== L.far) && (s.updateRenderState({ depthNear: L.near, depthFar: L.far }), W = L.near, X = L.far), L.layers.mask = Z.layers.mask | 6, T.layers.mask = L.layers.mask & -5, D.layers.mask = L.layers.mask & -3;
      const Me = Z.parent, Ae = L.cameras;
      fe(L, Me);
      for (let Re = 0; Re < Ae.length; Re++) fe(Ae[Re], Me);
      Ae.length === 2 ? re(L, T, D) : L.projectionMatrix.copy(T.projectionMatrix), _e(Z, L, Me);
    };
    function _e(Z, ie, te) {
      te === null ? Z.matrix.copy(ie.matrixWorld) : (Z.matrix.copy(te.matrixWorld), Z.matrix.invert(), Z.matrix.multiply(ie.matrixWorld)), Z.matrix.decompose(Z.position, Z.quaternion, Z.scale), Z.updateMatrixWorld(true), Z.projectionMatrix.copy(ie.projectionMatrix), Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse), Z.isPerspectiveCamera && (Z.fov = Ss * 2 * Math.atan(1 / Z.projectionMatrix.elements[5]), Z.zoom = 1);
    }
    this.getCamera = function() {
      return L;
    }, this.getFoveation = function() {
      if (!(u === null && d === null)) return l;
    }, this.setFoveation = function(Z) {
      l = Z, u !== null && (u.fixedFoveation = Z), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = Z);
    }, this.hasDepthSensing = function() {
      return p.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return p.getMesh(L);
    }, this.getCameraTexture = function(Z) {
      return m[Z];
    };
    let Ve = null;
    function nt(Z, ie) {
      if (h = ie.getViewerPose(c || a), g = ie, h !== null) {
        const te = h.views;
        d !== null && (e.setRenderTargetFramebuffer(x, d.framebuffer), e.setRenderTarget(x));
        let Me = false;
        te.length !== L.cameras.length && (L.cameras.length = 0, Me = true);
        for (let ze = 0; ze < te.length; ze++) {
          const it = te[ze];
          let Je = null;
          if (d !== null) Je = d.getViewport(it);
          else {
            const vt = f.getViewSubImage(u, it);
            Je = vt.viewport, ze === 0 && (e.setRenderTargetTextures(x, vt.colorTexture, vt.depthStencilTexture), e.setRenderTarget(x));
          }
          let Ye = P[ze];
          Ye === void 0 && (Ye = new Zt(), Ye.layers.enable(ze), Ye.viewport = new lt(), P[ze] = Ye), Ye.matrix.fromArray(it.transform.matrix), Ye.matrix.decompose(Ye.position, Ye.quaternion, Ye.scale), Ye.projectionMatrix.fromArray(it.projectionMatrix), Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(), Ye.viewport.set(Je.x, Je.y, Je.width, Je.height), ze === 0 && (L.matrix.copy(Ye.matrix), L.matrix.decompose(L.position, L.quaternion, L.scale)), Me === true && L.cameras.push(Ye);
        }
        const Ae = s.enabledFeatures;
        if (Ae && Ae.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && M) {
          f = i.getBinding();
          const ze = f.getDepthInformation(te[0]);
          ze && ze.isValid && ze.texture && p.init(ze, s.renderState);
        }
        if (Ae && Ae.includes("camera-access") && M) {
          e.state.unbindTexture(), f = i.getBinding();
          for (let ze = 0; ze < te.length; ze++) {
            const it = te[ze].camera;
            if (it) {
              let Je = m[it];
              Je || (Je = new Vc(), m[it] = Je);
              const Ye = f.getCameraImage(it);
              Je.sourceTexture = Ye;
            }
          }
        }
      }
      for (let te = 0; te < R.length; te++) {
        const Me = A[te], Ae = R[te];
        Me !== null && Ae !== void 0 && Ae.update(Me, ie, c || a);
      }
      Ve && Ve(Z, ie), ie.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: ie }), g = null;
    }
    const We = new ah();
    We.setAnimationLoop(nt), this.setAnimationLoop = function(Z) {
      Ve = Z;
    }, this.dispose = function() {
    };
  }
}
const G0 = new Ke(), dh = new Ue();
dh.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function V0(n, e) {
  function t(p, m) {
    p.matrixAutoUpdate === true && p.updateMatrix(), m.value.copy(p.matrix);
  }
  function i(p, m) {
    m.color.getRGB(p.fogColor.value, th(n)), m.isFog ? (p.fogNear.value = m.near, p.fogFar.value = m.far) : m.isFogExp2 && (p.fogDensity.value = m.density);
  }
  function s(p, m, E, y, x) {
    m.isNodeMaterial ? m.uniformsNeedUpdate = false : m.isMeshBasicMaterial ? r(p, m) : m.isMeshLambertMaterial ? (r(p, m), m.envMap && (p.envMapIntensity.value = m.envMapIntensity)) : m.isMeshToonMaterial ? (r(p, m), f(p, m)) : m.isMeshPhongMaterial ? (r(p, m), h(p, m), m.envMap && (p.envMapIntensity.value = m.envMapIntensity)) : m.isMeshStandardMaterial ? (r(p, m), u(p, m), m.isMeshPhysicalMaterial && d(p, m, x)) : m.isMeshMatcapMaterial ? (r(p, m), g(p, m)) : m.isMeshDepthMaterial ? r(p, m) : m.isMeshDistanceMaterial ? (r(p, m), M(p, m)) : m.isMeshNormalMaterial ? r(p, m) : m.isLineBasicMaterial ? (a(p, m), m.isLineDashedMaterial && o(p, m)) : m.isPointsMaterial ? l(p, m, E, y) : m.isSpriteMaterial ? c(p, m) : m.isShadowMaterial ? (p.color.value.copy(m.color), p.opacity.value = m.opacity) : m.isShaderMaterial && (m.uniformsNeedUpdate = false);
  }
  function r(p, m) {
    p.opacity.value = m.opacity, m.color && p.diffuse.value.copy(m.color), m.emissive && p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity), m.map && (p.map.value = m.map, t(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.bumpMap && (p.bumpMap.value = m.bumpMap, t(m.bumpMap, p.bumpMapTransform), p.bumpScale.value = m.bumpScale, m.side === Ut && (p.bumpScale.value *= -1)), m.normalMap && (p.normalMap.value = m.normalMap, t(m.normalMap, p.normalMapTransform), p.normalScale.value.copy(m.normalScale), m.side === Ut && p.normalScale.value.negate()), m.displacementMap && (p.displacementMap.value = m.displacementMap, t(m.displacementMap, p.displacementMapTransform), p.displacementScale.value = m.displacementScale, p.displacementBias.value = m.displacementBias), m.emissiveMap && (p.emissiveMap.value = m.emissiveMap, t(m.emissiveMap, p.emissiveMapTransform)), m.specularMap && (p.specularMap.value = m.specularMap, t(m.specularMap, p.specularMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
    const E = e.get(m), y = E.envMap, x = E.envMapRotation;
    y && (p.envMap.value = y, p.envMapRotation.value.setFromMatrix4(G0.makeRotationFromEuler(x)).transpose(), y.isCubeTexture && y.isRenderTargetTexture === false && p.envMapRotation.value.premultiply(dh), p.reflectivity.value = m.reflectivity, p.ior.value = m.ior, p.refractionRatio.value = m.refractionRatio), m.lightMap && (p.lightMap.value = m.lightMap, p.lightMapIntensity.value = m.lightMapIntensity, t(m.lightMap, p.lightMapTransform)), m.aoMap && (p.aoMap.value = m.aoMap, p.aoMapIntensity.value = m.aoMapIntensity, t(m.aoMap, p.aoMapTransform));
  }
  function a(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, m.map && (p.map.value = m.map, t(m.map, p.mapTransform));
  }
  function o(p, m) {
    p.dashSize.value = m.dashSize, p.totalSize.value = m.dashSize + m.gapSize, p.scale.value = m.scale;
  }
  function l(p, m, E, y) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.size.value = m.size * E, p.scale.value = y * 0.5, m.map && (p.map.value = m.map, t(m.map, p.uvTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function c(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.rotation.value = m.rotation, m.map && (p.map.value = m.map, t(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, t(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function h(p, m) {
    p.specular.value.copy(m.specular), p.shininess.value = Math.max(m.shininess, 1e-4);
  }
  function f(p, m) {
    m.gradientMap && (p.gradientMap.value = m.gradientMap);
  }
  function u(p, m) {
    p.metalness.value = m.metalness, m.metalnessMap && (p.metalnessMap.value = m.metalnessMap, t(m.metalnessMap, p.metalnessMapTransform)), p.roughness.value = m.roughness, m.roughnessMap && (p.roughnessMap.value = m.roughnessMap, t(m.roughnessMap, p.roughnessMapTransform)), m.envMap && (p.envMapIntensity.value = m.envMapIntensity);
  }
  function d(p, m, E) {
    p.ior.value = m.ior, m.sheen > 0 && (p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen), p.sheenRoughness.value = m.sheenRoughness, m.sheenColorMap && (p.sheenColorMap.value = m.sheenColorMap, t(m.sheenColorMap, p.sheenColorMapTransform)), m.sheenRoughnessMap && (p.sheenRoughnessMap.value = m.sheenRoughnessMap, t(m.sheenRoughnessMap, p.sheenRoughnessMapTransform))), m.clearcoat > 0 && (p.clearcoat.value = m.clearcoat, p.clearcoatRoughness.value = m.clearcoatRoughness, m.clearcoatMap && (p.clearcoatMap.value = m.clearcoatMap, t(m.clearcoatMap, p.clearcoatMapTransform)), m.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap, t(m.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), m.clearcoatNormalMap && (p.clearcoatNormalMap.value = m.clearcoatNormalMap, t(m.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale), m.side === Ut && p.clearcoatNormalScale.value.negate())), m.dispersion > 0 && (p.dispersion.value = m.dispersion), m.iridescence > 0 && (p.iridescence.value = m.iridescence, p.iridescenceIOR.value = m.iridescenceIOR, p.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1], m.iridescenceMap && (p.iridescenceMap.value = m.iridescenceMap, t(m.iridescenceMap, p.iridescenceMapTransform)), m.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = m.iridescenceThicknessMap, t(m.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), m.transmission > 0 && (p.transmission.value = m.transmission, p.transmissionSamplerMap.value = E.texture, p.transmissionSamplerSize.value.set(E.width, E.height), m.transmissionMap && (p.transmissionMap.value = m.transmissionMap, t(m.transmissionMap, p.transmissionMapTransform)), p.thickness.value = m.thickness, m.thicknessMap && (p.thicknessMap.value = m.thicknessMap, t(m.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = m.attenuationDistance, p.attenuationColor.value.copy(m.attenuationColor)), m.anisotropy > 0 && (p.anisotropyVector.value.set(m.anisotropy * Math.cos(m.anisotropyRotation), m.anisotropy * Math.sin(m.anisotropyRotation)), m.anisotropyMap && (p.anisotropyMap.value = m.anisotropyMap, t(m.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = m.specularIntensity, p.specularColor.value.copy(m.specularColor), m.specularColorMap && (p.specularColorMap.value = m.specularColorMap, t(m.specularColorMap, p.specularColorMapTransform)), m.specularIntensityMap && (p.specularIntensityMap.value = m.specularIntensityMap, t(m.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, m) {
    m.matcap && (p.matcap.value = m.matcap);
  }
  function M(p, m) {
    const E = e.get(m).light;
    p.referencePosition.value.setFromMatrixPosition(E.matrixWorld), p.nearDistance.value = E.shadow.camera.near, p.farDistance.value = E.shadow.camera.far;
  }
  return { refreshFogUniforms: i, refreshMaterialUniforms: s };
}
function W0(n, e, t, i) {
  let s = {}, r = {}, a = [];
  const o = n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(x, R) {
    const A = R.program;
    i.uniformBlockBinding(x, A);
  }
  function c(x, R) {
    let A = s[x.id];
    A === void 0 && (p(x), A = h(x), s[x.id] = A, x.addEventListener("dispose", E));
    const w = R.program;
    i.updateUBOMapping(x, w);
    const v = e.render.frame;
    r[x.id] !== v && (u(x), r[x.id] = v);
  }
  function h(x) {
    const R = f();
    x.__bindingPointIndex = R;
    const A = n.createBuffer(), w = x.__size, v = x.usage;
    return n.bindBuffer(n.UNIFORM_BUFFER, A), n.bufferData(n.UNIFORM_BUFFER, w, v), n.bindBuffer(n.UNIFORM_BUFFER, null), n.bindBufferBase(n.UNIFORM_BUFFER, R, A), A;
  }
  function f() {
    for (let x = 0; x < o; x++) if (a.indexOf(x) === -1) return a.push(x), x;
    return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function u(x) {
    const R = s[x.id], A = x.uniforms, w = x.__cache;
    n.bindBuffer(n.UNIFORM_BUFFER, R);
    for (let v = 0, T = A.length; v < T; v++) {
      const D = A[v];
      if (Array.isArray(D)) for (let P = 0, L = D.length; P < L; P++) d(D[P], v, P, w);
      else d(D, v, 0, w);
    }
    n.bindBuffer(n.UNIFORM_BUFFER, null);
  }
  function d(x, R, A, w) {
    if (M(x, R, A, w) === true) {
      const v = x.__offset, T = x.value;
      if (Array.isArray(T)) {
        let D = 0;
        for (let P = 0; P < T.length; P++) {
          const L = T[P], W = m(L);
          g(L, x.__data, D), typeof L != "number" && typeof L != "boolean" && !L.isMatrix3 && !ArrayBuffer.isView(L) && (D += W.storage / Float32Array.BYTES_PER_ELEMENT);
        }
      } else g(T, x.__data, 0);
      n.bufferSubData(n.UNIFORM_BUFFER, v, x.__data);
    }
  }
  function g(x, R, A) {
    typeof x == "number" || typeof x == "boolean" ? R[0] = x : x.isMatrix3 ? (R[0] = x.elements[0], R[1] = x.elements[1], R[2] = x.elements[2], R[3] = 0, R[4] = x.elements[3], R[5] = x.elements[4], R[6] = x.elements[5], R[7] = 0, R[8] = x.elements[6], R[9] = x.elements[7], R[10] = x.elements[8], R[11] = 0) : ArrayBuffer.isView(x) ? R.set(new x.constructor(x.buffer, x.byteOffset, R.length)) : x.toArray(R, A);
  }
  function M(x, R, A, w) {
    const v = x.value, T = R + "_" + A;
    if (w[T] === void 0) return typeof v == "number" || typeof v == "boolean" ? w[T] = v : ArrayBuffer.isView(v) ? w[T] = v.slice() : w[T] = v.clone(), true;
    {
      const D = w[T];
      if (typeof v == "number" || typeof v == "boolean") {
        if (D !== v) return w[T] = v, true;
      } else {
        if (ArrayBuffer.isView(v)) return true;
        if (D.equals(v) === false) return D.copy(v), true;
      }
    }
    return false;
  }
  function p(x) {
    const R = x.uniforms;
    let A = 0;
    const w = 16;
    for (let T = 0, D = R.length; T < D; T++) {
      const P = Array.isArray(R[T]) ? R[T] : [R[T]];
      for (let L = 0, W = P.length; L < W; L++) {
        const X = P[L], O = Array.isArray(X.value) ? X.value : [X.value];
        for (let k = 0, G = O.length; k < G; k++) {
          const $ = O[k], ee = m($), re = A % w, fe = re % ee.boundary, _e = re + fe;
          A += fe, _e !== 0 && w - _e < ee.storage && (A += w - _e), X.__data = new Float32Array(ee.storage / Float32Array.BYTES_PER_ELEMENT), X.__offset = A, A += ee.storage;
        }
      }
    }
    const v = A % w;
    return v > 0 && (A += w - v), x.__size = A, x.__cache = {}, this;
  }
  function m(x) {
    const R = { boundary: 0, storage: 0 };
    return typeof x == "number" || typeof x == "boolean" ? (R.boundary = 4, R.storage = 4) : x.isVector2 ? (R.boundary = 8, R.storage = 8) : x.isVector3 || x.isColor ? (R.boundary = 16, R.storage = 12) : x.isVector4 ? (R.boundary = 16, R.storage = 16) : x.isMatrix3 ? (R.boundary = 48, R.storage = 48) : x.isMatrix4 ? (R.boundary = 64, R.storage = 64) : x.isTexture ? Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(x) ? (R.boundary = 16, R.storage = x.byteLength) : Ce("WebGLRenderer: Unsupported uniform value type.", x), R;
  }
  function E(x) {
    const R = x.target;
    R.removeEventListener("dispose", E);
    const A = a.indexOf(R.__bindingPointIndex);
    a.splice(A, 1), n.deleteBuffer(s[R.id]), delete s[R.id], delete r[R.id];
  }
  function y() {
    for (const x in s) n.deleteBuffer(s[x]);
    a = [], s = {}, r = {};
  }
  return { bind: l, update: c, dispose: y };
}
const X0 = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183]);
let pn = null;
function Y0() {
  return pn === null && (pn = new kc(X0, 16, 16, ai, Un), pn.name = "DFG_LUT", pn.minFilter = Mt, pn.magFilter = Mt, pn.wrapS = Cn, pn.wrapT = Cn, pn.generateMipmaps = false, pn.needsUpdate = true), pn;
}
class Bv {
  constructor(e = {}) {
    const { canvas: t = au(), context: i = null, depth: s = true, stencil: r = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: f = false, reversedDepthBuffer: u = false, outputBufferType: d = ct } = e;
    this.isWebGLRenderer = true;
    let g;
    if (i !== null) {
      if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      g = i.getContextAttributes().alpha;
    } else g = a;
    const M = d, p = /* @__PURE__ */ new Set([yo, Eo, Mo]), m = /* @__PURE__ */ new Set([ct, Sn, _s, Wi, vo, xo]), E = new Uint32Array(4), y = new Int32Array(4), x = new C();
    let R = null, A = null;
    const w = [], v = [];
    let T = null;
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = vn, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const D = this;
    let P = false, L = null, W = null, X = null, O = null;
    this._outputColorSpace = Xe;
    let k = 0, G = 0, $ = null, ee = -1, re = null;
    const fe = new lt(), _e = new lt();
    let Ve = null;
    const nt = new Be(0);
    let We = 0, Z = t.width, ie = t.height, te = 1, Me = null, Ae = null;
    const Re = new lt(0, 0, Z, ie), mt = new lt(0, 0, Z, ie);
    let ze = false;
    const it = new Co();
    let Je = false, Ye = false;
    const vt = new Ke(), bt = new C(), Pt = new lt(), Lt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let ut = false;
    function xt() {
      return $ === null ? te : 1;
    }
    let I = i;
    function Gt(S, N) {
      return t.getContext(S, N);
    }
    try {
      const S = { alpha: true, depth: s, stencil: r, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: f };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r185"), t.addEventListener("webglcontextlost", ft, false), t.addEventListener("webglcontextrestored", at, false), t.addEventListener("webglcontextcreationerror", hn, false), I === null) {
        const N = "webgl2";
        if (I = Gt(N, S), I === null) throw Gt(N) ? new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
      }
    } catch (S) {
      throw ke("WebGLRenderer: " + S.message), S;
    }
    let $e, b, _, F, H, Y, ne, ae, q, J, oe, ye, he, le, we, De, Ie, U, se, K, ce, me, Q;
    function Ee() {
      $e = new Ym(I), $e.init(), ce = new O0(I, $e), b = new Bm(I, $e, e, ce), _ = new N0(I, $e), b.reversedDepthBuffer && u && _.buffers.depth.setReversed(true), W = I.createFramebuffer(), X = I.createFramebuffer(), O = I.createFramebuffer(), F = new Km(I), H = new M0(), Y = new F0(I, $e, _, H, b, ce, F), ne = new Xm(D), ae = new jf(I), me = new Fm(I, ae), q = new qm(I, ae, F, me), J = new $m(I, q, ae, me, F), U = new Jm(I, b, Y), we = new zm(H), oe = new S0(D, ne, $e, b, me, we), ye = new V0(D, H), he = new y0(), le = new C0($e), Ie = new Nm(D, ne, _, J, g, l), De = new L0(D, J, b), Q = new W0(I, F, b, _), se = new Om(I, $e, F), K = new Zm(I, $e, F), F.programs = oe.programs, D.capabilities = b, D.extensions = $e, D.properties = H, D.renderLists = he, D.shadowMap = De, D.state = _, D.info = F;
    }
    Ee(), M !== ct && (T = new jm(M, t.width, t.height, o, s, r));
    const xe = new k0(D, I);
    this.xr = xe, this.getContext = function() {
      return I;
    }, this.getContextAttributes = function() {
      return I.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = $e.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = $e.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return te;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (te = S, this.setSize(Z, ie, false));
    }, this.getSize = function(S) {
      return S.set(Z, ie);
    }, this.setSize = function(S, N, V = true) {
      if (xe.isPresenting) {
        Ce("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Z = S, ie = N, t.width = Math.floor(S * te), t.height = Math.floor(N * te), V === true && (t.style.width = S + "px", t.style.height = N + "px"), T !== null && T.setSize(t.width, t.height), this.setViewport(0, 0, S, N);
    }, this.getDrawingBufferSize = function(S) {
      return S.set(Z * te, ie * te).floor();
    }, this.setDrawingBufferSize = function(S, N, V) {
      Z = S, ie = N, te = V, t.width = Math.floor(S * V), t.height = Math.floor(N * V), this.setViewport(0, 0, S, N);
    }, this.setEffects = function(S) {
      if (M === ct) {
        ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (S) {
        for (let N = 0; N < S.length; N++) if (S[N].isOutputPass === true) {
          Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
          break;
        }
      }
      T.setEffects(S || []);
    }, this.getCurrentViewport = function(S) {
      return S.copy(fe);
    }, this.getViewport = function(S) {
      return S.copy(Re);
    }, this.setViewport = function(S, N, V, B) {
      S.isVector4 ? Re.set(S.x, S.y, S.z, S.w) : Re.set(S, N, V, B), _.viewport(fe.copy(Re).multiplyScalar(te).round());
    }, this.getScissor = function(S) {
      return S.copy(mt);
    }, this.setScissor = function(S, N, V, B) {
      S.isVector4 ? mt.set(S.x, S.y, S.z, S.w) : mt.set(S, N, V, B), _.scissor(_e.copy(mt).multiplyScalar(te).round());
    }, this.getScissorTest = function() {
      return ze;
    }, this.setScissorTest = function(S) {
      _.setScissorTest(ze = S);
    }, this.setOpaqueSort = function(S) {
      Me = S;
    }, this.setTransparentSort = function(S) {
      Ae = S;
    }, this.getClearColor = function(S) {
      return S.copy(Ie.getClearColor());
    }, this.setClearColor = function() {
      Ie.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return Ie.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ie.setClearAlpha(...arguments);
    }, this.clear = function(S = true, N = true, V = true) {
      let B = 0;
      if (S) {
        let z = false;
        if ($ !== null) {
          const pe = $.texture.format;
          z = p.has(pe);
        }
        if (z) {
          const pe = $.texture.type, ve = m.has(pe), de = Ie.getClearColor(), Se = Ie.getClearAlpha(), Te = de.r, Le = de.g, Oe = de.b;
          ve ? (E[0] = Te, E[1] = Le, E[2] = Oe, E[3] = Se, I.clearBufferuiv(I.COLOR, 0, E)) : (y[0] = Te, y[1] = Le, y[2] = Oe, y[3] = Se, I.clearBufferiv(I.COLOR, 0, y));
        } else B |= I.COLOR_BUFFER_BIT;
      }
      N && (B |= I.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(true)), V && (B |= I.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), B !== 0 && I.clear(B);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.setNodesHandler = function(S) {
      S.setRenderer(this), L = S;
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ft, false), t.removeEventListener("webglcontextrestored", at, false), t.removeEventListener("webglcontextcreationerror", hn, false), Ie.dispose(), he.dispose(), le.dispose(), H.dispose(), ne.dispose(), J.dispose(), me.dispose(), Q.dispose(), oe.dispose(), xe.dispose(), xe.removeEventListener("sessionstart", No), xe.removeEventListener("sessionend", Fo), Jn.stop();
    };
    function ft(S) {
      S.preventDefault(), Er("WebGLRenderer: Context Lost."), P = true;
    }
    function at() {
      Er("WebGLRenderer: Context Restored."), P = false;
      const S = F.autoReset, N = De.enabled, V = De.autoUpdate, B = De.needsUpdate, z = De.type;
      Ee(), F.autoReset = S, De.enabled = N, De.autoUpdate = V, De.needsUpdate = B, De.type = z;
    }
    function hn(S) {
      ke("WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function un(S) {
      const N = S.target;
      N.removeEventListener("dispose", un), Mh(N);
    }
    function Mh(S) {
      Eh(S), H.remove(S);
    }
    function Eh(S) {
      const N = H.get(S).programs;
      N !== void 0 && (N.forEach(function(V) {
        oe.releaseProgram(V);
      }), S.isShaderMaterial && oe.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, N, V, B, z, pe) {
      N === null && (N = Lt);
      const ve = z.isMesh && z.matrixWorld.determinantAffine() < 0, de = bh(S, N, V, B, z);
      _.setMaterial(B, ve);
      let Se = V.index, Te = 1;
      if (B.wireframe === true) {
        if (Se = q.getWireframeAttribute(V), Se === void 0) return;
        Te = 2;
      }
      const Le = V.drawRange, Oe = V.attributes.position;
      let be = Le.start * Te, et = (Le.start + Le.count) * Te;
      pe !== null && (be = Math.max(be, pe.start * Te), et = Math.min(et, (pe.start + pe.count) * Te)), Se !== null ? (be = Math.max(be, 0), et = Math.min(et, Se.count)) : Oe != null && (be = Math.max(be, 0), et = Math.min(et, Oe.count));
      const gt = et - be;
      if (gt < 0 || gt === 1 / 0) return;
      me.setup(z, B, de, V, Se);
      let dt, st = se;
      if (Se !== null && (dt = ae.get(Se), st = K, st.setIndex(dt)), z.isMesh) B.wireframe === true ? (_.setLineWidth(B.wireframeLinewidth * xt()), st.setMode(I.LINES)) : st.setMode(I.TRIANGLES);
      else if (z.isLine) {
        let Ot = B.linewidth;
        Ot === void 0 && (Ot = 1), _.setLineWidth(Ot * xt()), z.isLineSegments ? st.setMode(I.LINES) : z.isLineLoop ? st.setMode(I.LINE_LOOP) : st.setMode(I.LINE_STRIP);
      } else z.isPoints ? st.setMode(I.POINTS) : z.isSprite && st.setMode(I.TRIANGLES);
      if (z.isBatchedMesh) if ($e.get("WEBGL_multi_draw")) st.renderMultiDraw(z._multiDrawStarts, z._multiDrawCounts, z._multiDrawCount);
      else {
        const Ot = z._multiDrawStarts, ge = z._multiDrawCounts, Xt = z._multiDrawCount, qe = Se ? ae.get(Se).bytesPerElement : 1, Qt = H.get(B).currentProgram.getUniforms();
        for (let fn = 0; fn < Xt; fn++) Qt.setValue(I, "_gl_DrawID", fn), st.render(Ot[fn] / qe, ge[fn]);
      }
      else if (z.isInstancedMesh) st.renderInstances(be, gt, z.count);
      else if (V.isInstancedBufferGeometry) {
        const Ot = V._maxInstanceCount !== void 0 ? V._maxInstanceCount : 1 / 0, ge = Math.min(V.instanceCount, Ot);
        st.renderInstances(be, gt, ge);
      } else st.render(be, gt);
    };
    function Lo(S, N, V) {
      S.transparent === true && S.side === Kt && S.forceSinglePass === false ? (S.side = Ut, S.needsUpdate = true, Cs(S, N, V), S.side = Dn, S.needsUpdate = true, Cs(S, N, V), S.side = Kt) : Cs(S, N, V);
    }
    this.compile = function(S, N, V = null) {
      V === null && (V = S), A = le.get(V), A.init(N), v.push(A), V.traverseVisible(function(z) {
        z.isLight && z.layers.test(N.layers) && (A.pushLight(z), z.castShadow && A.pushShadow(z));
      }), S !== V && S.traverseVisible(function(z) {
        z.isLight && z.layers.test(N.layers) && (A.pushLight(z), z.castShadow && A.pushShadow(z));
      }), A.setupLights();
      const B = /* @__PURE__ */ new Set();
      return S.traverse(function(z) {
        if (!(z.isMesh || z.isPoints || z.isLine || z.isSprite)) return;
        const pe = z.material;
        if (pe) if (Array.isArray(pe)) for (let ve = 0; ve < pe.length; ve++) {
          const de = pe[ve];
          Lo(de, V, z), B.add(de);
        }
        else Lo(pe, V, z), B.add(pe);
      }), A = v.pop(), B;
    }, this.compileAsync = function(S, N, V = null) {
      const B = this.compile(S, N, V);
      return new Promise((z) => {
        function pe() {
          if (B.forEach(function(ve) {
            H.get(ve).currentProgram.isReady() && B.delete(ve);
          }), B.size === 0) {
            z(S);
            return;
          }
          setTimeout(pe, 10);
        }
        $e.get("KHR_parallel_shader_compile") !== null ? pe() : setTimeout(pe, 10);
      });
    };
    let Ur = null;
    function yh(S) {
      Ur && Ur(S);
    }
    function No() {
      Jn.stop();
    }
    function Fo() {
      Jn.start();
    }
    const Jn = new ah();
    Jn.setAnimationLoop(yh), typeof self < "u" && Jn.setContext(self), this.setAnimationLoop = function(S) {
      Ur = S, xe.setAnimationLoop(S), S === null ? Jn.stop() : Jn.start();
    }, xe.addEventListener("sessionstart", No), xe.addEventListener("sessionend", Fo), this.render = function(S, N) {
      if (N !== void 0 && N.isCamera !== true) {
        ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (P === true) return;
      L !== null && L.renderStart(S, N);
      const V = xe.enabled === true && xe.isPresenting === true, B = T !== null && ($ === null || V) && T.begin(D, $);
      if (S.matrixWorldAutoUpdate === true && S.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === true && N.updateMatrixWorld(), xe.enabled === true && xe.isPresenting === true && (T === null || T.isCompositing() === false) && (xe.cameraAutoUpdate === true && xe.updateCamera(N), N = xe.getCamera()), S.isScene === true && S.onBeforeRender(D, S, N, $), A = le.get(S, v.length), A.init(N), A.state.textureUnits = Y.getTextureUnits(), v.push(A), vt.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), it.setFromProjectionMatrix(vt, _n, N.reversedDepth), Ye = this.localClippingEnabled, Je = we.init(this.clippingPlanes, Ye), R = he.get(S, w.length), R.init(), w.push(R), xe.enabled === true && xe.isPresenting === true) {
        const ve = D.xr.getDepthSensingMesh();
        ve !== null && Ir(ve, N, -1 / 0, D.sortObjects);
      }
      Ir(S, N, 0, D.sortObjects), R.finish(), D.sortObjects === true && R.sort(Me, Ae, N.reversedDepth), ut = xe.enabled === false || xe.isPresenting === false || xe.hasDepthSensing() === false, ut && Ie.addToRenderList(R, S), this.info.render.frame++, this.info.autoReset === true && this.info.reset(), Je === true && we.beginShadows();
      const z = A.state.shadowsArray;
      if (De.render(z, S, N), Je === true && we.endShadows(), (B && T.hasRenderPass()) === false) {
        const ve = R.opaque, de = R.transmissive;
        if (A.setupLights(), N.isArrayCamera) {
          const Se = N.cameras;
          if (de.length > 0) for (let Te = 0, Le = Se.length; Te < Le; Te++) {
            const Oe = Se[Te];
            Bo(ve, de, S, Oe);
          }
          ut && Ie.render(S);
          for (let Te = 0, Le = Se.length; Te < Le; Te++) {
            const Oe = Se[Te];
            Oo(R, S, Oe, Oe.viewport);
          }
        } else de.length > 0 && Bo(ve, de, S, N), ut && Ie.render(S), Oo(R, S, N);
      }
      $ !== null && G === 0 && (Y.updateMultisampleRenderTarget($), Y.updateRenderTargetMipmap($)), B && T.end(D), S.isScene === true && S.onAfterRender(D, S, N), me.resetDefaultState(), ee = -1, re = null, v.pop(), v.length > 0 ? (A = v[v.length - 1], Y.setTextureUnits(A.state.textureUnits), Je === true && we.setGlobalState(D.clippingPlanes, A.state.camera)) : A = null, w.pop(), w.length > 0 ? R = w[w.length - 1] : R = null, L !== null && L.renderEnd();
    };
    function Ir(S, N, V, B) {
      if (S.visible === false) return;
      if (S.layers.test(N.layers)) {
        if (S.isGroup) V = S.renderOrder;
        else if (S.isLOD) S.autoUpdate === true && S.update(N);
        else if (S.isLightProbeGrid) A.pushLightProbeGrid(S);
        else if (S.isLight) A.pushLight(S), S.castShadow && A.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || it.intersectsSprite(S)) {
            B && Pt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(vt);
            const ve = J.update(S), de = S.material;
            de.visible && R.push(S, ve, de, V, Pt.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || it.intersectsObject(S))) {
          const ve = J.update(S), de = S.material;
          if (B && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), Pt.copy(S.boundingSphere.center)) : (ve.boundingSphere === null && ve.computeBoundingSphere(), Pt.copy(ve.boundingSphere.center)), Pt.applyMatrix4(S.matrixWorld).applyMatrix4(vt)), Array.isArray(de)) {
            const Se = ve.groups;
            for (let Te = 0, Le = Se.length; Te < Le; Te++) {
              const Oe = Se[Te], be = de[Oe.materialIndex];
              be && be.visible && R.push(S, ve, be, V, Pt.z, Oe);
            }
          } else de.visible && R.push(S, ve, de, V, Pt.z, null);
        }
      }
      const pe = S.children;
      for (let ve = 0, de = pe.length; ve < de; ve++) Ir(pe[ve], N, V, B);
    }
    function Oo(S, N, V, B) {
      const { opaque: z, transmissive: pe, transparent: ve } = S;
      A.setupLightsView(V), Je === true && we.setGlobalState(D.clippingPlanes, V), B && _.viewport(fe.copy(B)), z.length > 0 && ws(z, N, V), pe.length > 0 && ws(pe, N, V), ve.length > 0 && ws(ve, N, V), _.buffers.depth.setTest(true), _.buffers.depth.setMask(true), _.buffers.color.setMask(true), _.setPolygonOffset(false);
    }
    function Bo(S, N, V, B) {
      if ((V.isScene === true ? V.overrideMaterial : null) !== null) return;
      if (A.state.transmissionRenderTarget[B.id] === void 0) {
        const be = $e.has("EXT_color_buffer_half_float") || $e.has("EXT_color_buffer_float");
        A.state.transmissionRenderTarget[B.id] = new Et(1, 1, { generateMipmaps: true, type: be ? Un : ct, minFilter: ii, samples: Math.max(4, b.samples), stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Ge.workingColorSpace });
      }
      const pe = A.state.transmissionRenderTarget[B.id], ve = B.viewport || fe;
      pe.setSize(ve.z * D.transmissionResolutionScale, ve.w * D.transmissionResolutionScale);
      const de = D.getRenderTarget(), Se = D.getActiveCubeFace(), Te = D.getActiveMipmapLevel();
      D.setRenderTarget(pe), D.getClearColor(nt), We = D.getClearAlpha(), We < 1 && D.setClearColor(16777215, 0.5), D.clear(), ut && Ie.render(V);
      const Le = D.toneMapping;
      D.toneMapping = vn;
      const Oe = B.viewport;
      if (B.viewport !== void 0 && (B.viewport = void 0), A.setupLightsView(B), Je === true && we.setGlobalState(D.clippingPlanes, B), ws(S, V, B), Y.updateMultisampleRenderTarget(pe), Y.updateRenderTargetMipmap(pe), $e.has("WEBGL_multisampled_render_to_texture") === false) {
        let be = false;
        for (let et = 0, gt = N.length; et < gt; et++) {
          const dt = N[et], { object: st, geometry: Ot, material: ge, group: Xt } = dt;
          if (ge.side === Kt && st.layers.test(B.layers)) {
            const qe = ge.side;
            ge.side = Ut, ge.needsUpdate = true, zo(st, V, B, Ot, ge, Xt), ge.side = qe, ge.needsUpdate = true, be = true;
          }
        }
        be === true && (Y.updateMultisampleRenderTarget(pe), Y.updateRenderTargetMipmap(pe));
      }
      D.setRenderTarget(de, Se, Te), D.setClearColor(nt, We), Oe !== void 0 && (B.viewport = Oe), D.toneMapping = Le;
    }
    function ws(S, N, V) {
      const B = N.isScene === true ? N.overrideMaterial : null;
      for (let z = 0, pe = S.length; z < pe; z++) {
        const ve = S[z], { object: de, geometry: Se, group: Te } = ve;
        let Le = ve.material;
        Le.allowOverride === true && B !== null && (Le = B), de.layers.test(V.layers) && zo(de, N, V, Se, Le, Te);
      }
    }
    function zo(S, N, V, B, z, pe) {
      S.onBeforeRender(D, N, V, B, z, pe), S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), z.onBeforeRender(D, N, V, B, S, pe), z.transparent === true && z.side === Kt && z.forceSinglePass === false ? (z.side = Ut, z.needsUpdate = true, D.renderBufferDirect(V, N, B, z, S, pe), z.side = Dn, z.needsUpdate = true, D.renderBufferDirect(V, N, B, z, S, pe), z.side = Kt) : D.renderBufferDirect(V, N, B, z, S, pe), S.onAfterRender(D, N, V, B, z, pe);
    }
    function Cs(S, N, V) {
      N.isScene !== true && (N = Lt);
      const B = H.get(S), z = A.state.lights, pe = A.state.shadowsArray, ve = z.state.version, de = oe.getParameters(S, z.state, pe, N, V, A.state.lightProbeGridArray), Se = oe.getProgramCacheKey(de);
      let Te = B.programs;
      B.environment = S.isMeshStandardMaterial || S.isMeshLambertMaterial || S.isMeshPhongMaterial ? N.environment : null, B.fog = N.fog;
      const Le = S.isMeshStandardMaterial || S.isMeshLambertMaterial && !S.envMap || S.isMeshPhongMaterial && !S.envMap;
      B.envMap = ne.get(S.envMap || B.environment, Le), B.envMapRotation = B.environment !== null && S.envMap === null ? N.environmentRotation : S.envMapRotation, Te === void 0 && (S.addEventListener("dispose", un), Te = /* @__PURE__ */ new Map(), B.programs = Te);
      let Oe = Te.get(Se);
      if (Oe !== void 0) {
        if (B.currentProgram === Oe && B.lightsStateVersion === ve) return ko(S, de), Oe;
      } else de.uniforms = oe.getUniforms(S), L !== null && S.isNodeMaterial && L.build(S, V, de), S.onBeforeCompile(de, D), Oe = oe.acquireProgram(de, Se), Te.set(Se, Oe), B.uniforms = de.uniforms;
      const be = B.uniforms;
      return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === true) && (be.clippingPlanes = we.uniform), ko(S, de), B.needsLights = Rh(S), B.lightsStateVersion = ve, B.needsLights && (be.ambientLightColor.value = z.state.ambient, be.lightProbe.value = z.state.probe, be.directionalLights.value = z.state.directional, be.directionalLightShadows.value = z.state.directionalShadow, be.spotLights.value = z.state.spot, be.spotLightShadows.value = z.state.spotShadow, be.rectAreaLights.value = z.state.rectArea, be.ltc_1.value = z.state.rectAreaLTC1, be.ltc_2.value = z.state.rectAreaLTC2, be.pointLights.value = z.state.point, be.pointLightShadows.value = z.state.pointShadow, be.hemisphereLights.value = z.state.hemi, be.directionalShadowMatrix.value = z.state.directionalShadowMatrix, be.spotLightMatrix.value = z.state.spotLightMatrix, be.spotLightMap.value = z.state.spotLightMap, be.pointShadowMatrix.value = z.state.pointShadowMatrix), B.lightProbeGrid = A.state.lightProbeGridArray.length > 0, B.currentProgram = Oe, B.uniformsList = null, Oe;
    }
    function Ho(S) {
      if (S.uniformsList === null) {
        const N = S.currentProgram.getUniforms();
        S.uniformsList = mr.seqWithValue(N.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function ko(S, N) {
      const V = H.get(S);
      V.outputColorSpace = N.outputColorSpace, V.batching = N.batching, V.batchingColor = N.batchingColor, V.instancing = N.instancing, V.instancingColor = N.instancingColor, V.instancingMorph = N.instancingMorph, V.skinning = N.skinning, V.morphTargets = N.morphTargets, V.morphNormals = N.morphNormals, V.morphColors = N.morphColors, V.morphTargetsCount = N.morphTargetsCount, V.numClippingPlanes = N.numClippingPlanes, V.numIntersection = N.numClipIntersection, V.vertexAlphas = N.vertexAlphas, V.vertexTangents = N.vertexTangents, V.toneMapping = N.toneMapping;
    }
    function Th(S, N) {
      if (S.length === 0) return null;
      if (S.length === 1) return S[0].texture !== null ? S[0] : null;
      x.setFromMatrixPosition(N.matrixWorld);
      for (let V = 0, B = S.length; V < B; V++) {
        const z = S[V];
        if (z.texture !== null && z.boundingBox.containsPoint(x)) return z;
      }
      return null;
    }
    function bh(S, N, V, B, z) {
      N.isScene !== true && (N = Lt), Y.resetTextureUnits();
      const pe = N.fog, ve = B.isMeshStandardMaterial || B.isMeshLambertMaterial || B.isMeshPhongMaterial ? N.environment : null, de = $ === null ? D.outputColorSpace : $.isXRRenderTarget === true ? $.texture.colorSpace : Ge.workingColorSpace, Se = B.isMeshStandardMaterial || B.isMeshLambertMaterial && !B.envMap || B.isMeshPhongMaterial && !B.envMap, Te = ne.get(B.envMap || ve, Se), Le = B.vertexColors === true && !!V.attributes.color && V.attributes.color.itemSize === 4, Oe = !!V.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), be = !!V.morphAttributes.position, et = !!V.morphAttributes.normal, gt = !!V.morphAttributes.color;
      let dt = vn;
      B.toneMapped && ($ === null || $.isXRRenderTarget === true) && (dt = D.toneMapping);
      const st = V.morphAttributes.position || V.morphAttributes.normal || V.morphAttributes.color, Ot = st !== void 0 ? st.length : 0, ge = H.get(B), Xt = A.state.lights;
      if (Je === true && (Ye === true || S !== re)) {
        const ot = S === re && B.id === ee;
        we.setState(B, S, ot);
      }
      let qe = false;
      B.version === ge.__version ? (ge.needsLights && ge.lightsStateVersion !== Xt.state.version || ge.outputColorSpace !== de || z.isBatchedMesh && ge.batching === false || !z.isBatchedMesh && ge.batching === true || z.isBatchedMesh && ge.batchingColor === true && z.colorTexture === null || z.isBatchedMesh && ge.batchingColor === false && z.colorTexture !== null || z.isInstancedMesh && ge.instancing === false || !z.isInstancedMesh && ge.instancing === true || z.isSkinnedMesh && ge.skinning === false || !z.isSkinnedMesh && ge.skinning === true || z.isInstancedMesh && ge.instancingColor === true && z.instanceColor === null || z.isInstancedMesh && ge.instancingColor === false && z.instanceColor !== null || z.isInstancedMesh && ge.instancingMorph === true && z.morphTexture === null || z.isInstancedMesh && ge.instancingMorph === false && z.morphTexture !== null || ge.envMap !== Te || B.fog === true && ge.fog !== pe || ge.numClippingPlanes !== void 0 && (ge.numClippingPlanes !== we.numPlanes || ge.numIntersection !== we.numIntersection) || ge.vertexAlphas !== Le || ge.vertexTangents !== Oe || ge.morphTargets !== be || ge.morphNormals !== et || ge.morphColors !== gt || ge.toneMapping !== dt || ge.morphTargetsCount !== Ot || !!ge.lightProbeGrid != A.state.lightProbeGridArray.length > 0) && (qe = true) : (qe = true, ge.__version = B.version);
      let Qt = ge.currentProgram;
      qe === true && (Qt = Cs(B, N, z), L && B.isNodeMaterial && L.onUpdateProgram(B, Qt, ge));
      let fn = false, Nn = false, fi = false;
      const rt = Qt.getUniforms(), _t = ge.uniforms;
      if (_.useProgram(Qt.program) && (fn = true, Nn = true, fi = true), B.id !== ee && (ee = B.id, Nn = true), ge.needsLights) {
        const ot = Th(A.state.lightProbeGridArray, z);
        ge.lightProbeGrid !== ot && (ge.lightProbeGrid = ot, Nn = true);
      }
      if (fn || re !== S) {
        _.buffers.depth.getReversed() && S.reversedDepth !== true && (S._reversedDepth = true, S.updateProjectionMatrix()), rt.setValue(I, "projectionMatrix", S.projectionMatrix), rt.setValue(I, "viewMatrix", S.matrixWorldInverse);
        const On = rt.map.cameraPosition;
        On !== void 0 && On.setValue(I, bt.setFromMatrixPosition(S.matrixWorld)), b.logarithmicDepthBuffer && rt.setValue(I, "logDepthBufFC", 2 / (Math.log(S.far + 1) / Math.LN2)), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && rt.setValue(I, "isOrthographic", S.isOrthographicCamera === true), re !== S && (re = S, Nn = true, fi = true);
      }
      if (ge.needsLights && (Xt.state.directionalShadowMap.length > 0 && rt.setValue(I, "directionalShadowMap", Xt.state.directionalShadowMap, Y), Xt.state.spotShadowMap.length > 0 && rt.setValue(I, "spotShadowMap", Xt.state.spotShadowMap, Y), Xt.state.pointShadowMap.length > 0 && rt.setValue(I, "pointShadowMap", Xt.state.pointShadowMap, Y)), z.isSkinnedMesh) {
        rt.setOptional(I, z, "bindMatrix"), rt.setOptional(I, z, "bindMatrixInverse");
        const ot = z.skeleton;
        ot && (ot.boneTexture === null && ot.computeBoneTexture(), rt.setValue(I, "boneTexture", ot.boneTexture, Y));
      }
      z.isBatchedMesh && (rt.setOptional(I, z, "batchingTexture"), rt.setValue(I, "batchingTexture", z._matricesTexture, Y), rt.setOptional(I, z, "batchingIdTexture"), rt.setValue(I, "batchingIdTexture", z._indirectTexture, Y), rt.setOptional(I, z, "batchingColorTexture"), z._colorsTexture !== null && rt.setValue(I, "batchingColorTexture", z._colorsTexture, Y));
      const Fn = V.morphAttributes;
      if ((Fn.position !== void 0 || Fn.normal !== void 0 || Fn.color !== void 0) && U.update(z, V, Qt), (Nn || ge.receiveShadow !== z.receiveShadow) && (ge.receiveShadow = z.receiveShadow, rt.setValue(I, "receiveShadow", z.receiveShadow)), (B.isMeshStandardMaterial || B.isMeshLambertMaterial || B.isMeshPhongMaterial) && B.envMap === null && N.environment !== null && (_t.envMapIntensity.value = N.environmentIntensity), _t.dfgLUT !== void 0 && (_t.dfgLUT.value = Y0()), Nn) {
        if (rt.setValue(I, "toneMappingExposure", D.toneMappingExposure), ge.needsLights && Ah(_t, fi), pe && B.fog === true && ye.refreshFogUniforms(_t, pe), ye.refreshMaterialUniforms(_t, B, te, ie, A.state.transmissionRenderTarget[S.id]), ge.needsLights && ge.lightProbeGrid) {
          const ot = ge.lightProbeGrid;
          _t.probesSH.value = ot.texture, _t.probesMin.value.copy(ot.boundingBox.min), _t.probesMax.value.copy(ot.boundingBox.max), _t.probesResolution.value.copy(ot.resolution);
        }
        mr.upload(I, Ho(ge), _t, Y);
      }
      if (B.isShaderMaterial && B.uniformsNeedUpdate === true && (mr.upload(I, Ho(ge), _t, Y), B.uniformsNeedUpdate = false), B.isSpriteMaterial && rt.setValue(I, "center", z.center), rt.setValue(I, "modelViewMatrix", z.modelViewMatrix), rt.setValue(I, "normalMatrix", z.normalMatrix), rt.setValue(I, "modelMatrix", z.matrixWorld), B.uniformsGroups !== void 0) {
        const ot = B.uniformsGroups;
        for (let On = 0, di = ot.length; On < di; On++) {
          const Go = ot[On];
          Q.update(Go, Qt), Q.bind(Go, Qt);
        }
      }
      return Qt;
    }
    function Ah(S, N) {
      S.ambientLightColor.needsUpdate = N, S.lightProbe.needsUpdate = N, S.directionalLights.needsUpdate = N, S.directionalLightShadows.needsUpdate = N, S.pointLights.needsUpdate = N, S.pointLightShadows.needsUpdate = N, S.spotLights.needsUpdate = N, S.spotLightShadows.needsUpdate = N, S.rectAreaLights.needsUpdate = N, S.hemisphereLights.needsUpdate = N;
    }
    function Rh(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === true;
    }
    this.getActiveCubeFace = function() {
      return k;
    }, this.getActiveMipmapLevel = function() {
      return G;
    }, this.getRenderTarget = function() {
      return $;
    }, this.setRenderTargetTextures = function(S, N, V) {
      const B = H.get(S);
      B.__autoAllocateDepthBuffer = S.resolveDepthBuffer === false, B.__autoAllocateDepthBuffer === false && (B.__useRenderToTexture = false), H.get(S.texture).__webglTexture = N, H.get(S.depthTexture).__webglTexture = B.__autoAllocateDepthBuffer ? void 0 : V, B.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(S, N) {
      const V = H.get(S);
      V.__webglFramebuffer = N, V.__useDefaultFramebuffer = N === void 0;
    }, this.setRenderTarget = function(S, N = 0, V = 0) {
      $ = S, k = N, G = V;
      let B = null, z = false, pe = false;
      if (S) {
        const de = H.get(S);
        if (de.__useDefaultFramebuffer !== void 0) {
          _.bindFramebuffer(I.FRAMEBUFFER, de.__webglFramebuffer), fe.copy(S.viewport), _e.copy(S.scissor), Ve = S.scissorTest, _.viewport(fe), _.scissor(_e), _.setScissorTest(Ve), ee = -1;
          return;
        } else if (de.__webglFramebuffer === void 0) Y.setupRenderTarget(S);
        else if (de.__hasExternalTextures) Y.rebindTextures(S, H.get(S.texture).__webglTexture, H.get(S.depthTexture).__webglTexture);
        else if (S.depthBuffer) {
          const Le = S.depthTexture;
          if (de.__boundDepthTexture !== Le) {
            if (Le !== null && H.has(Le) && (S.width !== Le.image.width || S.height !== Le.image.height)) throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
            Y.setupDepthRenderbuffer(S);
          }
        }
        const Se = S.texture;
        (Se.isData3DTexture || Se.isDataArrayTexture || Se.isCompressedArrayTexture) && (pe = true);
        const Te = H.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Array.isArray(Te[N]) ? B = Te[N][V] : B = Te[N], z = true) : S.samples > 0 && Y.useMultisampledRTT(S) === false ? B = H.get(S).__webglMultisampledFramebuffer : Array.isArray(Te) ? B = Te[V] : B = Te, fe.copy(S.viewport), _e.copy(S.scissor), Ve = S.scissorTest;
      } else fe.copy(Re).multiplyScalar(te).floor(), _e.copy(mt).multiplyScalar(te).floor(), Ve = ze;
      if (V !== 0 && (B = W), _.bindFramebuffer(I.FRAMEBUFFER, B) && _.drawBuffers(S, B), _.viewport(fe), _.scissor(_e), _.setScissorTest(Ve), z) {
        const de = H.get(S.texture);
        I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_CUBE_MAP_POSITIVE_X + N, de.__webglTexture, V);
      } else if (pe) {
        const de = N;
        for (let Se = 0; Se < S.textures.length; Se++) {
          const Te = H.get(S.textures[Se]);
          I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0 + Se, Te.__webglTexture, V, de);
        }
      } else if (S !== null && V !== 0) {
        const de = H.get(S.texture);
        I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, de.__webglTexture, V);
      }
      ee = -1;
    }, this.readRenderTargetPixels = function(S, N, V, B, z, pe, ve, de = 0) {
      if (!(S && S.isWebGLRenderTarget)) {
        ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Se = H.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && ve !== void 0 && (Se = Se[ve]), Se) {
        _.bindFramebuffer(I.FRAMEBUFFER, Se);
        try {
          const Te = S.textures[de], Le = Te.format, Oe = Te.type;
          if (S.textures.length > 1 && I.readBuffer(I.COLOR_ATTACHMENT0 + de), !b.textureFormatReadable(Le)) {
            ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!b.textureTypeReadable(Oe)) {
            ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          N >= 0 && N <= S.width - B && V >= 0 && V <= S.height - z && I.readPixels(N, V, B, z, ce.convert(Le), ce.convert(Oe), pe);
        } finally {
          const Te = $ !== null ? H.get($).__webglFramebuffer : null;
          _.bindFramebuffer(I.FRAMEBUFFER, Te);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(S, N, V, B, z, pe, ve, de = 0) {
      if (!(S && S.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Se = H.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && ve !== void 0 && (Se = Se[ve]), Se) if (N >= 0 && N <= S.width - B && V >= 0 && V <= S.height - z) {
        _.bindFramebuffer(I.FRAMEBUFFER, Se);
        const Te = S.textures[de], Le = Te.format, Oe = Te.type;
        if (S.textures.length > 1 && I.readBuffer(I.COLOR_ATTACHMENT0 + de), !b.textureFormatReadable(Le)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!b.textureTypeReadable(Oe)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const be = I.createBuffer();
        I.bindBuffer(I.PIXEL_PACK_BUFFER, be), I.bufferData(I.PIXEL_PACK_BUFFER, pe.byteLength, I.STREAM_READ), I.readPixels(N, V, B, z, ce.convert(Le), ce.convert(Oe), 0);
        const et = $ !== null ? H.get($).__webglFramebuffer : null;
        _.bindFramebuffer(I.FRAMEBUFFER, et);
        const gt = I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return I.flush(), await ou(I, gt, 4), I.bindBuffer(I.PIXEL_PACK_BUFFER, be), I.getBufferSubData(I.PIXEL_PACK_BUFFER, 0, pe), I.deleteBuffer(be), I.deleteSync(gt), pe;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(S, N = null, V = 0) {
      const B = Math.pow(2, -V), z = Math.floor(S.image.width * B), pe = Math.floor(S.image.height * B), ve = N !== null ? N.x : 0, de = N !== null ? N.y : 0;
      Y.setTexture2D(S, 0), I.copyTexSubImage2D(I.TEXTURE_2D, V, 0, 0, ve, de, z, pe), _.unbindTexture();
    }, this.copyTextureToTexture = function(S, N, V = null, B = null, z = 0, pe = 0) {
      let ve, de, Se, Te, Le, Oe, be, et, gt;
      const dt = S.isCompressedTexture ? S.mipmaps[pe] : S.image;
      if (V !== null) ve = V.max.x - V.min.x, de = V.max.y - V.min.y, Se = V.isBox3 ? V.max.z - V.min.z : 1, Te = V.min.x, Le = V.min.y, Oe = V.isBox3 ? V.min.z : 0;
      else {
        const _t = Math.pow(2, -z);
        ve = Math.floor(dt.width * _t), de = Math.floor(dt.height * _t), S.isDataArrayTexture ? Se = dt.depth : S.isData3DTexture ? Se = Math.floor(dt.depth * _t) : Se = 1, Te = 0, Le = 0, Oe = 0;
      }
      B !== null ? (be = B.x, et = B.y, gt = B.z) : (be = 0, et = 0, gt = 0);
      const st = ce.convert(N.format), Ot = ce.convert(N.type);
      let ge;
      N.isData3DTexture ? (Y.setTexture3D(N, 0), ge = I.TEXTURE_3D) : N.isDataArrayTexture || N.isCompressedArrayTexture ? (Y.setTexture2DArray(N, 0), ge = I.TEXTURE_2D_ARRAY) : (Y.setTexture2D(N, 0), ge = I.TEXTURE_2D), _.activeTexture(I.TEXTURE0), _.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, N.flipY), _.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha), _.pixelStorei(I.UNPACK_ALIGNMENT, N.unpackAlignment);
      const Xt = _.getParameter(I.UNPACK_ROW_LENGTH), qe = _.getParameter(I.UNPACK_IMAGE_HEIGHT), Qt = _.getParameter(I.UNPACK_SKIP_PIXELS), fn = _.getParameter(I.UNPACK_SKIP_ROWS), Nn = _.getParameter(I.UNPACK_SKIP_IMAGES);
      _.pixelStorei(I.UNPACK_ROW_LENGTH, dt.width), _.pixelStorei(I.UNPACK_IMAGE_HEIGHT, dt.height), _.pixelStorei(I.UNPACK_SKIP_PIXELS, Te), _.pixelStorei(I.UNPACK_SKIP_ROWS, Le), _.pixelStorei(I.UNPACK_SKIP_IMAGES, Oe);
      const fi = S.isDataArrayTexture || S.isData3DTexture, rt = N.isDataArrayTexture || N.isData3DTexture;
      if (S.isDepthTexture) {
        const _t = H.get(S), Fn = H.get(N), ot = H.get(_t.__renderTarget), On = H.get(Fn.__renderTarget);
        _.bindFramebuffer(I.READ_FRAMEBUFFER, ot.__webglFramebuffer), _.bindFramebuffer(I.DRAW_FRAMEBUFFER, On.__webglFramebuffer);
        for (let di = 0; di < Se; di++) fi && (I.framebufferTextureLayer(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, H.get(S).__webglTexture, z, Oe + di), I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, H.get(N).__webglTexture, pe, gt + di)), I.blitFramebuffer(Te, Le, ve, de, be, et, ve, de, I.DEPTH_BUFFER_BIT, I.NEAREST);
        _.bindFramebuffer(I.READ_FRAMEBUFFER, null), _.bindFramebuffer(I.DRAW_FRAMEBUFFER, null);
      } else if (z !== 0 || S.isRenderTargetTexture || H.has(S)) {
        const _t = H.get(S), Fn = H.get(N);
        _.bindFramebuffer(I.READ_FRAMEBUFFER, X), _.bindFramebuffer(I.DRAW_FRAMEBUFFER, O);
        for (let ot = 0; ot < Se; ot++) fi ? I.framebufferTextureLayer(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, _t.__webglTexture, z, Oe + ot) : I.framebufferTexture2D(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, _t.__webglTexture, z), rt ? I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, Fn.__webglTexture, pe, gt + ot) : I.framebufferTexture2D(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_2D, Fn.__webglTexture, pe), z !== 0 ? I.blitFramebuffer(Te, Le, ve, de, be, et, ve, de, I.COLOR_BUFFER_BIT, I.NEAREST) : rt ? I.copyTexSubImage3D(ge, pe, be, et, gt + ot, Te, Le, ve, de) : I.copyTexSubImage2D(ge, pe, be, et, Te, Le, ve, de);
        _.bindFramebuffer(I.READ_FRAMEBUFFER, null), _.bindFramebuffer(I.DRAW_FRAMEBUFFER, null);
      } else rt ? S.isDataTexture || S.isData3DTexture ? I.texSubImage3D(ge, pe, be, et, gt, ve, de, Se, st, Ot, dt.data) : N.isCompressedArrayTexture ? I.compressedTexSubImage3D(ge, pe, be, et, gt, ve, de, Se, st, dt.data) : I.texSubImage3D(ge, pe, be, et, gt, ve, de, Se, st, Ot, dt) : S.isDataTexture ? I.texSubImage2D(I.TEXTURE_2D, pe, be, et, ve, de, st, Ot, dt.data) : S.isCompressedTexture ? I.compressedTexSubImage2D(I.TEXTURE_2D, pe, be, et, dt.width, dt.height, st, dt.data) : I.texSubImage2D(I.TEXTURE_2D, pe, be, et, ve, de, st, Ot, dt);
      _.pixelStorei(I.UNPACK_ROW_LENGTH, Xt), _.pixelStorei(I.UNPACK_IMAGE_HEIGHT, qe), _.pixelStorei(I.UNPACK_SKIP_PIXELS, Qt), _.pixelStorei(I.UNPACK_SKIP_ROWS, fn), _.pixelStorei(I.UNPACK_SKIP_IMAGES, Nn), pe === 0 && N.generateMipmaps && I.generateMipmap(ge), _.unbindTexture();
    }, this.initRenderTarget = function(S) {
      H.get(S).__webglFramebuffer === void 0 && Y.setupRenderTarget(S);
    }, this.initTexture = function(S) {
      S.isCubeTexture ? Y.setTextureCube(S, 0) : S.isData3DTexture ? Y.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? Y.setTexture2DArray(S, 0) : Y.setTexture2D(S, 0), _.unbindTexture();
    }, this.resetState = function() {
      k = 0, G = 0, $ = null, _.reset(), me.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return _n;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = Ge._getDrawingBufferColorSpace(e), t.unpackColorSpace = Ge._getUnpackColorSpace();
  }
}
/**
* postprocessing v6.39.4 build Mon Jul 27 2026
* https://github.com/pmndrs/postprocessing
* Copyright 2015-2026 Raoul van Rüschen
* @license Zlib
*/
var q0 = (() => {
  const n = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), e = new Float32Array([0, 0, 2, 0, 0, 2]), t = new Ft();
  return t.setAttribute("position", new Wt(n, 3)), t.setAttribute("uv", new Wt(e, 2)), t;
})(), nn = class go {
  static get fullscreenGeometry() {
    return q0;
  }
  constructor(e = "Pass", t = new ol(), i = new wr()) {
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
    t !== null ? t.material = e : (t = new $t(go.fullscreenGeometry, e), t.frustumCulled = false, this.scene === null && (this.scene = new ol()), this.scene.add(t), this.screen = t);
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
  setDepthTexture(e, t = ci) {
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
      (t instanceof Et || t instanceof Mn || t instanceof Rt || t instanceof go) && this[e].dispose();
    }
    this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose();
  }
}, Z0 = class extends nn {
  constructor() {
    super("ClearMaskPass", null, null), this.needsSwap = false;
  }
  render(n, e, t, i, s) {
    const r = n.state.buffers.stencil;
    r.setLocked(false), r.setTest(false);
  }
}, K0 = `#ifdef COLOR_WRITE
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
}`, Rs = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}", ph = class extends Tt {
  constructor() {
    super({ name: "CopyMaterial", defines: { COLOR_SPACE_CONVERSION: "1", DEPTH_PACKING: "0", COLOR_WRITE: "1" }, uniforms: { inputBuffer: new Pe(null), depthBuffer: new Pe(null), channelWeights: new Pe(null), opacity: new Pe(1) }, blending: It, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: K0, vertexShader: Rs }), this.depthFunc = vr;
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
}, J0 = class extends nn {
  constructor(n, e = true) {
    super("CopyPass"), this.fullscreenMaterial = new ph(), this.needsSwap = false, this.renderTarget = n, n === void 0 && (this.renderTarget = new Et(1, 1, { minFilter: Mt, magFilter: Mt, stencilBuffer: false, depthBuffer: false }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = e;
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
    t !== void 0 && (this.renderTarget.texture.type = t, t !== ct ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : n !== null && n.outputColorSpace === Xe && (this.renderTarget.texture.colorSpace = Xe));
  }
}, hc = new Be(), mh = class extends nn {
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
    l ? (n.getClearColor(hc), n.setClearColor(r, c ? a : o)) : c && n.setClearAlpha(a), n.setRenderTarget(this.renderToScreen ? null : e), n.clear(this.color, this.depth, this.stencil), l ? n.setClearColor(hc, o) : c && n.setClearAlpha(o);
  }
}, $0 = class extends nn {
  constructor(n, e) {
    super("MaskPass", n, e), this.needsSwap = false, this.clearPass = new mh(false, false, true), this.inverse = false;
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
    const r = n.getContext(), a = n.state.buffers, o = this.scene, l = this.camera, c = this.clearPass, h = this.inverted ? 0 : 1, f = 1 - h;
    a.color.setMask(false), a.depth.setMask(false), a.color.setLocked(true), a.depth.setLocked(true), a.stencil.setTest(true), a.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE), a.stencil.setFunc(r.ALWAYS, h, 4294967295), a.stencil.setClear(f), a.stencil.setLocked(true), this.clearPass.enabled && (this.renderToScreen ? c.render(n, null) : (c.render(n, e), c.render(n, t))), this.renderToScreen ? (n.setRenderTarget(null), n.render(o, l)) : (n.setRenderTarget(e), n.render(o, l), n.setRenderTarget(t), n.render(o, l)), a.color.setLocked(false), a.depth.setLocked(false), a.stencil.setLocked(false), a.stencil.setFunc(r.EQUAL, 1, 4294967295), a.stencil.setOp(r.KEEP, r.KEEP, r.KEEP), a.stencil.setLocked(true);
  }
}, _a = 1 / 1e3, Q0 = 1e3, j0 = class {
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
    return this._delta * _a;
  }
  get fixedDelta() {
    return this._fixedDelta * _a;
  }
  set fixedDelta(n) {
    this._fixedDelta = n * Q0;
  }
  get elapsed() {
    return this._elapsed * _a;
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
  constructor(n = null, { depthBuffer: e = true, stencilBuffer: t = false, multisampling: i = 0, frameBufferType: s } = {}) {
    this.renderer = null, this.inputBuffer = this.createBuffer(e, t, s, i), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new J0(), this.depthRenderTarget = null, this.passes = [], this.timer = new j0(), this.autoRenderToScreen = true, this.setRenderer(n);
  }
  get stableDepthTexture() {
    return this.depthRenderTarget === null ? null : this.depthRenderTarget.depthTexture;
  }
  get multisampling() {
    return this.inputBuffer.samples;
  }
  set multisampling(n) {
    this.multisampling !== n && (this.inputBuffer.samples = n, this.outputBuffer.samples = n, this.inputBuffer.dispose(), this.outputBuffer.dispose());
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
      i === ct && n.outputColorSpace === Xe && (this.inputBuffer.texture.colorSpace = Xe, this.outputBuffer.texture.colorSpace = Xe, this.inputBuffer.dispose(), this.outputBuffer.dispose()), n.autoClear = false, this.setSize(e.width, e.height);
      for (const s of this.passes) s.initialize(n, t, i);
    }
  }
  replaceRenderer(n, e = true) {
    const t = this.renderer, i = t.domElement.parentNode;
    return this.setRenderer(n), e && i !== null && (i.removeChild(t.domElement), i.appendChild(n.domElement)), t;
  }
  createDepthTexture() {
    const n = new oi();
    n.name = "EffectComposer.InputDepth", this.inputBuffer.stencilBuffer ? (n.format = Yn, n.type = Wi) : n.type = tn;
    const e = n.clone();
    e.name = "EffectComposer.OutputDepth";
    const t = n.clone();
    t.name = "EffectComposer.StableDepth", this.inputBuffer.depthTexture = n, this.outputBuffer.depthTexture = e, this.inputBuffer.dispose(), this.outputBuffer.dispose();
    const { width: i, height: s } = this.inputBuffer;
    this.depthRenderTarget = new Et(i, s, { depthBuffer: true, stencilBuffer: this.inputBuffer.stencilBuffer, depthTexture: t });
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
    const s = this.renderer, r = s === null ? new j() : s.getDrawingBufferSize(new j()), a = new Et(r.width, r.height, { minFilter: Mt, magFilter: Mt, samples: i, stencilBuffer: e, depthBuffer: n, type: t });
    return t === ct && s !== null && s.outputColorSpace === Xe && (a.texture.colorSpace = Xe), a.texture.name = "EffectComposer.Buffer", a.texture.generateMipmaps = false, a;
  }
  setMainScene(n) {
    for (const e of this.passes) e.mainScene = n;
  }
  setMainCamera(n) {
    for (const e of this.passes) e.mainCamera = n;
  }
  addPass(n, e) {
    const t = this.passes, i = this.renderer, s = i.getDrawingBufferSize(new j()), r = i.getContext().getContextAttributes().alpha, a = this.inputBuffer.texture.type;
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
        const a = (l, c) => l || c.needsDepthTexture;
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
          const l = e.getContext(), c = e.state.buffers.stencil;
          c.setFunc(l.NOTEQUAL, 1, 4294967295), t.render(e, i, s, n, a), c.setFunc(l.EQUAL, 1, 4294967295);
        }
        r = i, i = s, s = r;
      }
      o instanceof $0 ? a = true : o instanceof Z0 && (a = false);
    }
  }
  setSize(n, e, t) {
    const i = this.renderer, s = i.getSize(new j());
    (n === void 0 || e === void 0) && (n = s.width, e = s.height), (s.width !== n || s.height !== e) && i.setSize(n, e, t);
    const r = i.getDrawingBufferSize(new j());
    this.inputBuffer.setSize(r.width, r.height), this.outputBuffer.setSize(r.width, r.height), this.depthRenderTarget !== null && this.depthRenderTarget.setSize(r.width, r.height);
    for (const a of this.passes) a.setSize(r.width, r.height);
  }
  reset() {
    this.dispose(), this.autoRenderToScreen = true;
  }
  dispose() {
    for (const n of this.passes) n.dispose();
    this.deleteDepthTexture(), this.inputBuffer.dispose(), this.outputBuffer.dispose(), this.copyPass.dispose(), this.timer.dispose(), this.passes = [], nn.fullscreenGeometry.dispose();
  }
}, Zn = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 }, Ze = { FRAGMENT_HEAD: "FRAGMENT_HEAD", FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV", FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE", VERTEX_HEAD: "VERTEX_HEAD", VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT" }, e_ = class {
  constructor() {
    this.shaderParts = /* @__PURE__ */ new Map([[Ze.FRAGMENT_HEAD, null], [Ze.FRAGMENT_MAIN_UV, null], [Ze.FRAGMENT_MAIN_IMAGE, null], [Ze.VERTEX_HEAD, null], [Ze.VERTEX_MAIN_SUPPORT, null]]), this.defines = /* @__PURE__ */ new Map(), this.uniforms = /* @__PURE__ */ new Map(), this.blendModes = /* @__PURE__ */ new Map(), this.extensions = /* @__PURE__ */ new Set(), this.attributes = Zn.NONE, this.varyings = /* @__PURE__ */ new Set(), this.uvTransformation = false, this.readDepth = false, this.colorSpace = Xi;
  }
}, va = false, uc = class {
  constructor(n = null) {
    this.originalMaterials = /* @__PURE__ */ new Map(), this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(n), this.meshCount = 0, this.replaceMaterial = (e) => {
      if (e.isMesh) {
        let t;
        if (e.material.flatShading) switch (e.material.side) {
          case Kt:
            t = this.materialsFlatShadedDoubleSide;
            break;
          case Ut:
            t = this.materialsFlatShadedBackSide;
            break;
          default:
            t = this.materialsFlatShaded;
            break;
        }
        else switch (e.material.side) {
          case Kt:
            t = this.materialsDoubleSide;
            break;
          case Ut:
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
    if (!(n instanceof Tt)) return n.clone();
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
      for (const t of e) t.uniforms = Object.assign({}, n.uniforms), t.side = Dn;
      e[2].skinning = true, this.materialsBackSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.side = Ut, i;
      }), this.materialsDoubleSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.side = Kt, i;
      }), this.materialsFlatShaded = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.flatShading = true, i;
      }), this.materialsFlatShadedBackSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.flatShading = true, i.side = Ut, i;
      }), this.materialsFlatShadedDoubleSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.flatShading = true, i.side = Kt, i;
      });
    }
  }
  render(n, e, t) {
    const i = n.shadowMap.enabled;
    if (n.shadowMap.enabled = false, va) {
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
    return va;
  }
  static set workaroundEnabled(n) {
    va = n;
  }
}, Wn = -1, Jt = class extends cn {
  constructor(n = null, e = Wn, t = Wn, i = 1) {
    super(), n !== null && this.addEventListener("change", () => n.setSize(this.baseSize.width, this.baseSize.height)), this.baseSize = new j(1, 1), this.preferredSize = new j(e, t), this.target = this.preferredSize, this.s = i, this.effectiveSize = new j(), this.addEventListener("change", () => this.updateEffectiveSize()), this.updateEffectiveSize();
  }
  updateEffectiveSize() {
    const n = this.baseSize, e = this.preferredSize, t = this.effectiveSize, i = this.scale;
    e.width !== Wn ? t.width = e.width : e.height !== Wn ? t.width = Math.round(e.height * (n.width / Math.max(n.height, 1))) : t.width = Math.round(n.width * i), e.height !== Wn ? t.height = e.height : e.width !== Wn ? t.height = Math.round(e.width / Math.max(n.width / Math.max(n.height, 1), 1)) : t.height = Math.round(n.height * i);
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
    this.s !== n && (this.s = n, this.preferredSize.setScalar(Wn), this.dispatchEvent({ type: "change" }));
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
    return Wn;
  }
}, He = { ADD: 0, ALPHA: 1, AVERAGE: 2, COLOR: 3, COLOR_BURN: 4, COLOR_DODGE: 5, DARKEN: 6, DIFFERENCE: 7, DIVIDE: 8, DST: 9, EXCLUSION: 10, HARD_LIGHT: 11, HARD_MIX: 12, HUE: 13, INVERT: 14, INVERT_RGB: 15, LIGHTEN: 16, LINEAR_BURN: 17, LINEAR_DODGE: 18, LINEAR_LIGHT: 19, LUMINOSITY: 20, MULTIPLY: 21, NEGATION: 22, NORMAL: 23, OVERLAY: 24, PIN_LIGHT: 25, REFLECT: 26, SATURATION: 27, SCREEN: 28, SOFT_LIGHT: 29, SRC: 30, SUBTRACT: 31, VIVID_LIGHT: 32 }, t_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", n_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}", i_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", s_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", r_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", a_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", o_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", l_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", c_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", h_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", u_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", f_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", d_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", p_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", m_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", g_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", __ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", v_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", x_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", S_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", M_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", E_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", y_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}", T_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", b_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", A_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", R_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", w_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", C_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", P_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}", D_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", U_ = "vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}", I_ = /* @__PURE__ */ new Map([[He.ADD, t_], [He.ALPHA, n_], [He.AVERAGE, i_], [He.COLOR, s_], [He.COLOR_BURN, r_], [He.COLOR_DODGE, a_], [He.DARKEN, o_], [He.DIFFERENCE, l_], [He.DIVIDE, c_], [He.DST, null], [He.EXCLUSION, h_], [He.HARD_LIGHT, u_], [He.HARD_MIX, f_], [He.HUE, d_], [He.INVERT, p_], [He.INVERT_RGB, m_], [He.LIGHTEN, g_], [He.LINEAR_BURN, __], [He.LINEAR_DODGE, v_], [He.LINEAR_LIGHT, x_], [He.LUMINOSITY, S_], [He.MULTIPLY, M_], [He.NEGATION, E_], [He.NORMAL, y_], [He.OVERLAY, T_], [He.PIN_LIGHT, b_], [He.REFLECT, A_], [He.SATURATION, R_], [He.SCREEN, w_], [He.SOFT_LIGHT, C_], [He.SRC, P_], [He.SUBTRACT, D_], [He.VIVID_LIGHT, U_]]), L_ = class extends cn {
  constructor(n, e = 1) {
    super(), this._blendFunction = n, this.opacity = new Pe(e);
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
    return I_.get(this.blendFunction);
  }
}, gh = class extends cn {
  constructor(n, e, { attributes: t = Zn.NONE, blendFunction: i = He.NORMAL, defines: s = /* @__PURE__ */ new Map(), uniforms: r = /* @__PURE__ */ new Map(), extensions: a = null, vertexShader: o = null } = {}) {
    super(), this.name = n, this.renderer = null, this.attributes = t, this.fragmentShader = e, this.vertexShader = o, this.defines = s, this.uniforms = r, this.extensions = a, this.blendMode = new L_(i), this.blendMode.addEventListener("change", (l) => this.setChanged()), this._inputColorSpace = Xi, this._outputColorSpace = gn;
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
  setDepthTexture(n, e = ci) {
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
      (e instanceof Et || e instanceof Mn || e instanceof Rt || e instanceof nn) && this[n].dispose();
    }
  }
}, Dr = { MEDIUM: 2, LARGE: 3 }, N_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`, F_ = "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}", O_ = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])], B_ = class extends Tt {
  constructor(n = new lt()) {
    super({ name: "KawaseBlurMaterial", uniforms: { inputBuffer: new Pe(null), texelSize: new Pe(new lt()), scale: new Pe(1), kernel: new Pe(0) }, blending: It, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: N_, vertexShader: F_ }), this.setTexelSize(n.x, n.y), this.kernelSize = Dr.MEDIUM;
  }
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  setInputBuffer(n) {
    this.inputBuffer = n;
  }
  get kernelSequence() {
    return O_[this.kernelSize];
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
}, _h = class extends nn {
  constructor({ kernelSize: n = Dr.MEDIUM, resolutionScale: e = 0.5, width: t = Jt.AUTO_SIZE, height: i = Jt.AUTO_SIZE, resolutionX: s = t, resolutionY: r = i } = {}) {
    super("KawaseBlurPass"), this.renderTargetA = new Et(1, 1, { depthBuffer: false }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
    const a = this.resolution = new Jt(this, s, r, e);
    a.addEventListener("change", (o) => this.setSize(a.baseWidth, a.baseHeight)), this._blurMaterial = new B_(), this._blurMaterial.kernelSize = n, this.copyMaterial = new ph();
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
    let f = e;
    this.fullscreenMaterial = c;
    for (let u = 0, d = h.length; u < d; ++u) {
      const g = (u & 1) === 0 ? o : l;
      c.kernel = h[u], c.inputBuffer = f.texture, n.setRenderTarget(g), n.render(r, a), f = g;
    }
    this.fullscreenMaterial = this.copyMaterial, this.copyMaterial.inputBuffer = f.texture, n.setRenderTarget(this.renderToScreen ? null : t), n.render(r, a);
  }
  setSize(n, e) {
    const t = this.resolution;
    t.setBaseSize(n, e);
    const i = t.width, s = t.height;
    this.renderTargetA.setSize(i, s), this.renderTargetB.setSize(i, s), this.blurMaterial.setSize(n, e);
  }
  initialize(n, e, t) {
    t !== void 0 && (this.renderTargetA.texture.type = t, this.renderTargetB.texture.type = t, t !== ct ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : n !== null && n.outputColorSpace === Xe && (this.renderTargetA.texture.colorSpace = Xe, this.renderTargetB.texture.colorSpace = Xe));
  }
  static get AUTO_SIZE() {
    return Jt.AUTO_SIZE;
  }
}, z_ = `#include <common>
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
}`, H_ = class extends Tt {
  constructor(n = false, e = null) {
    super({ name: "LuminanceMaterial", defines: { THREE_REVISION: "185".replace(/\D+/g, "") }, uniforms: { inputBuffer: new Pe(null), threshold: new Pe(0), smoothing: new Pe(1), range: new Pe(null) }, blending: It, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: z_, vertexShader: Rs }), this.colorOutput = n, this.luminanceRange = e;
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
}, k_ = class extends nn {
  constructor({ renderTarget: n, luminanceRange: e, colorOutput: t, resolutionScale: i = 1, width: s = Jt.AUTO_SIZE, height: r = Jt.AUTO_SIZE, resolutionX: a = s, resolutionY: o = r } = {}) {
    super("LuminancePass"), this.fullscreenMaterial = new H_(t, e), this.needsSwap = false, this.renderTarget = n, this.renderTarget === void 0 && (this.renderTarget = new Et(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "LuminancePass.Target");
    const l = this.resolution = new Jt(this, a, o, i);
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
    t !== void 0 && t !== ct && (this.renderTarget.texture.type = t, this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, G_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`, V_ = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}", W_ = class extends Tt {
  constructor() {
    super({ name: "DownsamplingMaterial", uniforms: { inputBuffer: new Pe(null), texelSize: new Pe(new j()) }, blending: It, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: G_, vertexShader: V_ });
  }
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  setSize(n, e) {
    this.uniforms.texelSize.value.set(1 / n, 1 / e);
  }
}, X_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`, Y_ = "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}", q_ = class extends Tt {
  constructor() {
    super({ name: "UpsamplingMaterial", uniforms: { inputBuffer: new Pe(null), supportBuffer: new Pe(null), texelSize: new Pe(new j()), radius: new Pe(0.85) }, blending: It, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: X_, vertexShader: Y_ });
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
}, Z_ = class extends nn {
  constructor() {
    super("MipmapBlurPass"), this.needsSwap = false, this.renderTarget = new Et(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Upsampling.Mipmap0", this.downsamplingMipmaps = [], this.upsamplingMipmaps = [], this.downsamplingMaterial = new W_(), this.upsamplingMaterial = new q_(), this.resolution = new j();
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
    let f = e;
    this.fullscreenMaterial = o;
    for (let u = 0, d = c.length; u < d; ++u) {
      const g = c[u];
      o.setSize(f.width, f.height), o.inputBuffer = f.texture, n.setRenderTarget(g), n.render(r, a), f = g;
    }
    this.fullscreenMaterial = l;
    for (let u = h.length - 1; u >= 0; --u) {
      const d = h[u];
      l.setSize(f.width, f.height), l.inputBuffer = f.texture, l.supportBuffer = c[u].texture, n.setRenderTarget(d), n.render(r, a), f = d;
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
      if (t !== ct) this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
      else if (n !== null && n.outputColorSpace === Xe) for (const s of i) s.texture.colorSpace = Xe;
    }
  }
  dispose() {
    super.dispose();
    for (const n of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) n.dispose();
  }
}, K_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`, Hv = class extends gh {
  constructor({ blendFunction: n = He.SCREEN, luminanceThreshold: e = 1, luminanceSmoothing: t = 0.03, mipmapBlur: i = true, intensity: s = 1, radius: r = 0.85, levels: a = 8, kernelSize: o = Dr.LARGE, resolutionScale: l = 0.5, width: c = Jt.AUTO_SIZE, height: h = Jt.AUTO_SIZE, resolutionX: f = c, resolutionY: u = h } = {}) {
    super("BloomEffect", K_, { blendFunction: n, uniforms: /* @__PURE__ */ new Map([["map", new Pe(null)], ["intensity", new Pe(s)]]) }), this.renderTarget = new Et(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "Bloom.Target", this.blurPass = new _h({ kernelSize: o }), this.luminancePass = new k_({ colorOutput: true }), this.luminanceMaterial.threshold = e, this.luminanceMaterial.smoothing = t, this.mipmapBlurPass = new Z_(), this.mipmapBlurPass.enabled = i, this.mipmapBlurPass.radius = r, this.mipmapBlurPass.levels = a, this.uniforms.get("map").value = i ? this.mipmapBlurPass.texture : this.renderTarget.texture;
    const d = this.resolution = new Jt(this, f, u, l);
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
    this.blurPass.initialize(n, e, t), this.luminancePass.initialize(n, e, t), this.mipmapBlurPass.initialize(n, e, t), t !== void 0 && (this.renderTarget.texture.type = t, n !== null && n.outputColorSpace === Xe && (this.renderTarget.texture.colorSpace = Xe));
  }
}, vh = { RED: 0, GREEN: 1 }, xh = { DISCARD: 0, MULTIPLY_RGB: 3 }, J_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
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
}}`, lr = class extends Tt {
  constructor(n = false, e = false) {
    super({ name: "BokehMaterial", defines: { PASS: n ? "2" : "1" }, uniforms: { inputBuffer: new Pe(null), cocBuffer: new Pe(null), texelSize: new Pe(new j()), kernel64: new Pe(null), kernel16: new Pe(null), scale: new Pe(1) }, blending: It, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: J_, vertexShader: Rs }), e && (this.defines.FOREGROUND = "1"), this.generateKernel();
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
}, $_ = `#include <common>
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
void main(){float depth=readDepth(vUv);vec3 viewPosition=getViewPosition(vUv,depth);float distance=getDistance(viewPosition);float signedDistance=distance-focusDistance;float magnitude=smoothstep(0.0,focusRange,abs(signedDistance));gl_FragColor.rg=magnitude*vec2(step(signedDistance,0.0),step(0.0,signedDistance));}`, Q_ = class extends Tt {
  constructor(n = null) {
    super({ name: "CircleOfConfusionMaterial", defines: { DEPTH_PACKING: "0" }, uniforms: { depthBuffer: new Pe(null), projectionMatrix: new Pe(null), projectionMatrixInverse: new Pe(null), cameraNear: new Pe(0.3), cameraFar: new Pe(1e3), focusDistance: new Pe(0), focusRange: new Pe(0) }, blending: It, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: $_, vertexShader: Rs }), this.uniforms.focalLength = this.uniforms.focusRange, n !== null && this.copyCameraSettings(n);
  }
  set depthBuffer(n) {
    this.uniforms.depthBuffer.value = n;
  }
  set depthPacking(n) {
    this.defines.DEPTH_PACKING = n.toFixed(0), this.needsUpdate = true;
  }
  setDepthBuffer(n, e = ci) {
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
    n instanceof Zt ? e || (this.defines.PERSPECTIVE_CAMERA = true, this.needsUpdate = true) : e && (delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = true);
  }
}, j_ = `#ifdef FRAMEBUFFER_PRECISION_HIGH
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
}`, ev = class extends Tt {
  constructor(n = null) {
    super({ name: "MaskMaterial", uniforms: { maskTexture: new Pe(n), inputBuffer: new Pe(null), strength: new Pe(1) }, blending: It, toneMapped: false, depthWrite: false, depthTest: false, fragmentShader: j_, vertexShader: Rs }), this.colorChannel = vh.RED, this.maskFunction = xh.DISCARD;
  }
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  setInputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  set maskTexture(n) {
    this.uniforms.maskTexture.value = n, delete this.defines.MASK_PRECISION_HIGH, n.type !== ct && (this.defines.MASK_PRECISION_HIGH = "1"), this.needsUpdate = true;
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
}, Li = class extends nn {
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
    t !== void 0 && t !== ct && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, tv = `#ifdef FRAMEBUFFER_PRECISION_HIGH
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
vec4 result=inputColor*(1.0-cocNearFar.y)+colorFar;result=mix(result,colorNear,cocNearFar.x);outputColor=result;}`, nv = new C(), kv = class extends gh {
  constructor(n, { blendFunction: e, worldFocusDistance: t, worldFocusRange: i, focalLength: s, focusDistance: r = t || 3, focusRange: a = i || s || 2, bokehScale: o = 1, resolutionScale: l = 0.5, width: c, height: h, resolutionX: f = c || Jt.AUTO_SIZE, resolutionY: u = h || Jt.AUTO_SIZE } = {}) {
    super("DepthOfFieldEffect", tv, { blendFunction: e, attributes: Zn.DEPTH, uniforms: /* @__PURE__ */ new Map([["nearColorBuffer", new Pe(null)], ["farColorBuffer", new Pe(null)], ["nearCoCBuffer", new Pe(null)], ["farCoCBuffer", new Pe(null)], ["scale", new Pe(1)]]) }), this.camera = n, this.renderTarget = new Et(1, 1, { depthBuffer: false }), this.renderTarget.texture.name = "DoF.Intermediate", this.renderTargetMasked = this.renderTarget.clone(), this.renderTargetMasked.texture.name = "DoF.Masked.Far", this.renderTargetNear = this.renderTarget.clone(), this.renderTargetNear.texture.name = "DoF.Bokeh.Near", this.uniforms.get("nearColorBuffer").value = this.renderTargetNear.texture, this.renderTargetFar = this.renderTarget.clone(), this.renderTargetFar.texture.name = "DoF.Bokeh.Far", this.uniforms.get("farColorBuffer").value = this.renderTargetFar.texture, this.renderTargetCoC = this.renderTarget.clone(), this.renderTargetCoC.texture.name = "DoF.CoC", this.uniforms.get("farCoCBuffer").value = this.renderTargetCoC.texture, this.renderTargetCoCBlurred = this.renderTargetCoC.clone(), this.renderTargetCoCBlurred.texture.name = "DoF.CoC.Blurred", this.uniforms.get("nearCoCBuffer").value = this.renderTargetCoCBlurred.texture, this.cocPass = new Li(new Q_(n));
    const d = this.cocMaterial;
    d.focusDistance = r, d.focusRange = a, this.blurPass = new _h({ resolutionScale: l, resolutionX: f, resolutionY: u, kernelSize: Dr.MEDIUM }), this.maskPass = new Li(new ev(this.renderTargetCoC.texture));
    const g = this.maskPass.fullscreenMaterial;
    g.colorChannel = vh.GREEN, this.maskFunction = xh.MULTIPLY_RGB, this.bokehNearBasePass = new Li(new lr(false, true)), this.bokehNearBasePass.fullscreenMaterial.cocBuffer = this.renderTargetCoCBlurred.texture, this.bokehNearFillPass = new Li(new lr(true, true)), this.bokehNearFillPass.fullscreenMaterial.cocBuffer = this.renderTargetCoCBlurred.texture, this.bokehFarBasePass = new Li(new lr(false, false)), this.bokehFarBasePass.fullscreenMaterial.cocBuffer = this.renderTargetCoC.texture, this.bokehFarFillPass = new Li(new lr(true, false)), this.bokehFarFillPass.fullscreenMaterial.cocBuffer = this.renderTargetCoC.texture, this.target = null;
    const M = this.resolution = new Jt(this, f, u, l);
    M.addEventListener("change", (p) => this.setSize(M.baseWidth, M.baseHeight)), this.bokehScale = o;
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
    return this.camera.getWorldPosition(nv).distanceTo(n);
  }
  setDepthTexture(n, e = ci) {
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
    this.cocPass.initialize(n, e, t), this.maskPass.initialize(n, e, t), this.bokehNearBasePass.initialize(n, e, t), this.bokehNearFillPass.initialize(n, e, t), this.bokehFarBasePass.initialize(n, e, t), this.bokehFarFillPass.initialize(n, e, t), this.blurPass.initialize(n, e, ct), n.capabilities.logarithmicDepthBuffer && (this.cocPass.fullscreenMaterial.defines.LOG_DEPTH = "1"), t !== void 0 && (this.renderTarget.texture.type = t, this.renderTargetNear.texture.type = t, this.renderTargetFar.texture.type = t, this.renderTargetMasked.texture.type = t, n !== null && n.outputColorSpace === Xe && (this.renderTarget.texture.colorSpace = Xe, this.renderTargetNear.texture.colorSpace = Xe, this.renderTargetFar.texture.colorSpace = Xe, this.renderTargetMasked.texture.colorSpace = Xe));
  }
}, Gv = class extends nn {
  constructor(n, e, t = null) {
    super("RenderPass", n, e), this.needsSwap = false, this.needsDepthBlit = true, this.clearPass = new mh(), this.overrideMaterialManager = t === null ? null : new uc(t), this.ignoreBackground = false, this.skipShadowMapUpdate = false, this.selection = null;
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
    n !== null ? e !== null ? e.setMaterial(n) : this.overrideMaterialManager = new uc(n) : e !== null && (e.dispose(), this.overrideMaterialManager = null);
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
    const r = this.scene, a = this.camera, o = this.selection, l = a.layers.mask, c = r.background, h = n.shadowMap.autoUpdate, f = this.renderToScreen ? null : e;
    o !== null && a.layers.set(o.getLayer()), this.skipShadowMapUpdate && (n.shadowMap.autoUpdate = false), (this.ignoreBackground || this.clearPass.overrideClearColor !== null) && (r.background = null), this.clearPass.enabled && this.clearPass.render(n, e), n.setRenderTarget(f), this.overrideMaterialManager !== null ? this.overrideMaterialManager.render(n, r, a) : n.render(r, a), a.layers.mask = l, r.background = c, n.shadowMap.autoUpdate = h;
  }
}, iv = `#include <common>
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
}`, sv = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}", rv = class extends Tt {
  constructor(n, e, t, i, s = false) {
    super({ name: "EffectMaterial", defines: { THREE_REVISION: "185".replace(/\D+/g, ""), DEPTH_PACKING: "0", ENCODE_OUTPUT: "1" }, uniforms: { inputBuffer: new Pe(null), depthBuffer: new Pe(null), resolution: new Pe(new j()), texelSize: new Pe(new j()), cameraNear: new Pe(0.3), cameraFar: new Pe(1e3), aspect: new Pe(1), time: new Pe(0) }, blending: It, toneMapped: false, depthWrite: false, depthTest: false, dithering: s }), n && this.setShaderParts(n), e && this.setDefines(e), t && this.setUniforms(t), this.copyCameraSettings(i);
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
  setDepthBuffer(n, e = ci) {
    this.depthBuffer = n, this.depthPacking = e;
  }
  setShaderData(n) {
    this.setShaderParts(n.shaderParts), this.setDefines(n.defines), this.setUniforms(n.uniforms), this.setExtensions(n.extensions);
  }
  setShaderParts(n) {
    return this.fragmentShader = iv.replace(Ze.FRAGMENT_HEAD, n.get(Ze.FRAGMENT_HEAD) || "").replace(Ze.FRAGMENT_MAIN_UV, n.get(Ze.FRAGMENT_MAIN_UV) || "").replace(Ze.FRAGMENT_MAIN_IMAGE, n.get(Ze.FRAGMENT_MAIN_IMAGE) || ""), this.vertexShader = sv.replace(Ze.VERTEX_HEAD, n.get(Ze.VERTEX_HEAD) || "").replace(Ze.VERTEX_MAIN_SUPPORT, n.get(Ze.VERTEX_MAIN_SUPPORT) || ""), this.needsUpdate = true, this;
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
    n && (this.uniforms.cameraNear.value = n.near, this.uniforms.cameraFar.value = n.far, n instanceof Zt ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = true);
  }
  setSize(n, e) {
    const t = this.uniforms;
    t.resolution.value.set(n, e), t.texelSize.value.set(1 / n, 1 / e), t.aspect.value = n / e;
  }
  static get Section() {
    return Ze;
  }
};
function fc(n, e, t) {
  for (const i of e) {
    const s = "$1" + n + i.charAt(0).toUpperCase() + i.slice(1), r = new RegExp("([^\\.])(\\b" + i + "\\b)", "g");
    for (const a of t.entries()) a[1] !== null && t.set(a[0], a[1].replace(r, s));
  }
}
function av(n, e, t) {
  let i = e.getFragmentShader(), s = e.getVertexShader();
  const r = i !== void 0 && /mainImage/.test(i), a = i !== void 0 && /mainUv/.test(i);
  if (t.attributes |= e.getAttributes(), i === void 0) throw new Error(`Missing fragment shader (${e.name})`);
  if (a && (t.attributes & Zn.CONVOLUTION) !== 0) throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);
  if (!r && !a) throw new Error(`Could not find mainImage or mainUv function (${e.name})`);
  {
    const o = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g, l = t.shaderParts;
    let c = l.get(Ze.FRAGMENT_HEAD) || "", h = l.get(Ze.FRAGMENT_MAIN_UV) || "", f = l.get(Ze.FRAGMENT_MAIN_IMAGE) || "", u = l.get(Ze.VERTEX_HEAD) || "", d = l.get(Ze.VERTEX_MAIN_SUPPORT) || "";
    const g = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
    if (a && (h += `	${n}MainUv(UV);
`, t.uvTransformation = true), s !== null && /mainSupport/.test(s)) {
      const E = /mainSupport *\([\w\s]*?uv\s*?\)/.test(s);
      d += `	${n}MainSupport(`, d += E ? `vUv);
` : `);
`;
      for (const y of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)) for (const x of y[1].split(/\s*,\s*/)) t.varyings.add(x), g.add(x), M.add(x);
      for (const y of s.matchAll(o)) M.add(y[1]);
    }
    for (const E of i.matchAll(o)) M.add(E[1]);
    for (const E of e.defines.keys()) M.add(E.replace(/\([\w\s,]*\)/g, ""));
    for (const E of e.uniforms.keys()) M.add(E);
    M.delete("while"), M.delete("for"), M.delete("if"), e.uniforms.forEach((E, y) => t.uniforms.set(n + y.charAt(0).toUpperCase() + y.slice(1), E)), e.defines.forEach((E, y) => t.defines.set(n + y.charAt(0).toUpperCase() + y.slice(1), E));
    const p = /* @__PURE__ */ new Map([["fragment", i], ["vertex", s]]);
    fc(n, M, t.defines), fc(n, M, p), i = p.get("fragment"), s = p.get("vertex");
    const m = e.blendMode;
    if (t.blendModes.set(m.blendFunction, m), r) {
      e.inputColorSpace !== null && e.inputColorSpace !== t.colorSpace && (f += e.inputColorSpace === Xe ? `color0 = sRGBTransferOETF(color0);
	` : `color0 = sRGBToLinear(color0);
	`), e.outputColorSpace !== gn ? t.colorSpace = e.outputColorSpace : e.inputColorSpace !== null && (t.colorSpace = e.inputColorSpace);
      const E = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
      f += `${n}MainImage(color0, UV, `, (t.attributes & Zn.DEPTH) !== 0 && E.test(i) && (f += "depth, ", t.readDepth = true), f += `color1);
	`;
      const y = n + "BlendOpacity";
      t.uniforms.set(y, m.opacity), f += `color0 = blend${m.blendFunction}(color0, color1, ${y});

	`, c += `uniform float ${y};

`;
    }
    if (c += i + `
`, s !== null && (u += s + `
`), l.set(Ze.FRAGMENT_HEAD, c), l.set(Ze.FRAGMENT_MAIN_UV, h), l.set(Ze.FRAGMENT_MAIN_IMAGE, f), l.set(Ze.VERTEX_HEAD, u), l.set(Ze.VERTEX_MAIN_SUPPORT, d), e.extensions !== null) for (const E of e.extensions) t.extensions.add(E);
  }
}
var Vv = class extends nn {
  constructor(n, ...e) {
    super("EffectPass"), this.fullscreenMaterial = new rv(null, null, null, n), this.listener = (t) => this.handleEvent(t), this.effects = [], this.setEffects(e), this.skipRendering = false, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY, this.timeScale = 1;
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
    const n = new e_();
    let e = 0;
    for (const a of this.effects) if (a.blendMode.blendFunction === He.DST) n.attributes |= a.getAttributes() & Zn.DEPTH;
    else {
      if ((n.attributes & a.getAttributes() & Zn.CONVOLUTION) !== 0) throw new Error(`Convolution effects cannot be merged (${a.name})`);
      av("e" + e++, a, n);
    }
    let t = n.shaderParts.get(Ze.FRAGMENT_HEAD), i = n.shaderParts.get(Ze.FRAGMENT_MAIN_IMAGE), s = n.shaderParts.get(Ze.FRAGMENT_MAIN_UV);
    const r = /\bblend\b/g;
    for (const a of n.blendModes.values()) t += a.getShaderCode().replace(r, `blend${a.blendFunction}`) + `
`;
    (n.attributes & Zn.DEPTH) !== 0 ? (n.readDepth && (i = `float depth = readDepth(UV);

	` + i), this.needsDepthTexture = this.getDepthTexture() === null) : this.needsDepthTexture = false, n.colorSpace === Xe && (i += `color0 = sRGBToLinear(color0);
	`), n.uvTransformation ? (s = `vec2 transformedUv = vUv;
` + s, n.defines.set("UV", "transformedUv")) : n.defines.set("UV", "vUv"), n.shaderParts.set(Ze.FRAGMENT_HEAD, t), n.shaderParts.set(Ze.FRAGMENT_MAIN_IMAGE, i), n.shaderParts.set(Ze.FRAGMENT_MAIN_UV, s);
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
  setDepthTexture(n, e = ci) {
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
    this.updateMaterial(), t !== void 0 && t !== ct && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
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
}, gr = function() {
  var n = 0, e = document.createElement("div");
  e.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", e.addEventListener("click", function(h) {
    h.preventDefault(), i(++n % e.children.length);
  }, false);
  function t(h) {
    return e.appendChild(h.dom), h;
  }
  function i(h) {
    for (var f = 0; f < e.children.length; f++) e.children[f].style.display = f === h ? "block" : "none";
    n = h;
  }
  var s = (performance || Date).now(), r = s, a = 0, o = t(new gr.Panel("FPS", "#0ff", "#002")), l = t(new gr.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var c = t(new gr.Panel("MB", "#f08", "#201"));
  return i(0), { REVISION: 16, dom: e, addPanel: t, showPanel: i, begin: function() {
    s = (performance || Date).now();
  }, end: function() {
    a++;
    var h = (performance || Date).now();
    if (l.update(h - s, 200), h >= r + 1e3 && (o.update(a * 1e3 / (h - r), 100), r = h, a = 0, c)) {
      var f = performance.memory;
      c.update(f.usedJSHeapSize / 1048576, f.jsHeapSizeLimit / 1048576);
    }
    return h;
  }, update: function() {
    s = this.end();
  }, domElement: e, setMode: i };
};
gr.Panel = function(n, e, t) {
  var i = 1 / 0, s = 0, r = Math.round, a = r(window.devicePixelRatio || 1), o = 80 * a, l = 48 * a, c = 3 * a, h = 2 * a, f = 3 * a, u = 15 * a, d = 74 * a, g = 30 * a, M = document.createElement("canvas");
  M.width = o, M.height = l, M.style.cssText = "width:80px;height:48px";
  var p = M.getContext("2d");
  return p.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", p.textBaseline = "top", p.fillStyle = t, p.fillRect(0, 0, o, l), p.fillStyle = e, p.fillText(n, c, h), p.fillRect(f, u, d, g), p.fillStyle = t, p.globalAlpha = 0.9, p.fillRect(f, u, d, g), { dom: M, update: function(m, E) {
    i = Math.min(i, m), s = Math.max(s, m), p.fillStyle = t, p.globalAlpha = 1, p.fillRect(0, 0, o, u), p.fillStyle = e, p.fillText(r(m) + " " + n + " (" + r(i) + "-" + r(s) + ")", c, h), p.drawImage(M, f + a, u, d - a, g, f, u, d - a, g), p.fillRect(f + d - a, u, a, g), p.fillStyle = t, p.globalAlpha = 0.9, p.fillRect(f + d - a, u, a, r((1 - m / E) * g));
  } };
};
const dc = { type: "change" }, Io = { type: "start" }, Sh = { type: "end" }, cr = new Ts(), pc = new Xn(), ov = Math.cos(70 * bu.DEG2RAD), At = new C(), Vt = 2 * Math.PI, tt = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, xa = 1e-6;
class Wv extends rh {
  constructor(e, t = null) {
    super(e, t), this.state = tt.NONE, this.target = new C(), this.cursor = new C(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Bi.ROTATE, MIDDLE: Bi.DOLLY, RIGHT: Bi.PAN }, this.touches = { ONE: Oi.ROTATE, TWO: Oi.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new C(), this._lastQuaternion = new Kn(), this._lastTargetPosition = new C(), this._quat = new Kn().setFromUnitVectors(e.up, new C(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new zl(), this._sphericalDelta = new zl(), this._scale = 1, this._panOffset = new C(), this._rotateStart = new j(), this._rotateEnd = new j(), this._rotateDelta = new j(), this._panStart = new j(), this._panEnd = new j(), this._panDelta = new j(), this._dollyStart = new j(), this._dollyEnd = new j(), this._dollyDelta = new j(), this._dollyDirection = new C(), this._mouse = new j(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = cv.bind(this), this._onPointerDown = lv.bind(this), this._onPointerUp = hv.bind(this), this._onContextMenu = _v.bind(this), this._onMouseWheel = dv.bind(this), this._onKeyDown = pv.bind(this), this._onTouchStart = mv.bind(this), this._onTouchMove = gv.bind(this), this._onMouseDown = uv.bind(this), this._onMouseMove = fv.bind(this), this._interceptControlDown = vv.bind(this), this._interceptControlUp = xv.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  set cursorStyle(e) {
    this._cursorStyle = e, e === "grab" ? this.domElement.style.cursor = "grab" : this.domElement.style.cursor = "auto";
  }
  get cursorStyle() {
    return this._cursorStyle;
  }
  connect(e) {
    super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "";
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(dc), this.update(), this.state = tt.NONE;
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
    At.copy(t).sub(this.target), At.applyQuaternion(this._quat), this._spherical.setFromVector3(At), this.autoRotate && this.state === tt.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let i = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(i) && isFinite(s) && (i < -Math.PI ? i += Vt : i > Math.PI && (i -= Vt), s < -Math.PI ? s += Vt : s > Math.PI && (s -= Vt), i <= s ? this._spherical.theta = Math.max(i, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (i + s) / 2 ? Math.max(i, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (At.setFromSpherical(this._spherical), At.applyQuaternion(this._quatInverse), t.copy(this.target).add(At), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = At.length();
        a = this._clampDistance(o * this._scale);
        const l = o - a;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const o = new C(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new C(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(o), this.object.updateMatrixWorld(), a = At.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (cr.origin.copy(this.object.position), cr.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(cr.direction)) < ov ? this.object.lookAt(this.target) : (pc.setFromNormalAndCoplanarPoint(this.object.up, this.target), cr.intersectPlane(pc, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > xa || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > xa || this._lastTargetPosition.distanceToSquared(this.target) > xa ? (this.dispatchEvent(dc), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? Vt / 60 * this.autoRotateSpeed * e : Vt / 60 / 60 * this.autoRotateSpeed;
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
    At.setFromMatrixColumn(t, 0), At.multiplyScalar(-e), this._panOffset.add(At);
  }
  _panUp(e, t) {
    this.screenSpacePanning === true ? At.setFromMatrixColumn(t, 1) : (At.setFromMatrixColumn(t, 0), At.crossVectors(this.object.up, At)), At.multiplyScalar(e), this._panOffset.add(At);
  }
  _pan(e, t) {
    const i = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      At.copy(s).sub(this.target);
      let r = At.length();
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
    this._rotateLeft(Vt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Vt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(Vt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = true;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-Vt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = true;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(Vt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = true;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-Vt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = true;
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
    this._rotateLeft(Vt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Vt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
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
function lv(n) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(n.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(n) && (this._addPointer(n), n.pointerType === "touch" ? this._onTouchStart(n) : this._onMouseDown(n), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
}
function cv(n) {
  this.enabled !== false && (n.pointerType === "touch" ? this._onTouchMove(n) : this._onMouseMove(n));
}
function hv(n) {
  switch (this._removePointer(n), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(n.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Sh), this.state = tt.NONE, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function uv(n) {
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
    case Bi.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(n), this.state = tt.DOLLY;
      break;
    case Bi.ROTATE:
      if (n.ctrlKey || n.metaKey || n.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(n), this.state = tt.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(n), this.state = tt.ROTATE;
      }
      break;
    case Bi.PAN:
      if (n.ctrlKey || n.metaKey || n.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(n), this.state = tt.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(n), this.state = tt.PAN;
      }
      break;
    default:
      this.state = tt.NONE;
  }
  this.state !== tt.NONE && this.dispatchEvent(Io);
}
function fv(n) {
  switch (this.state) {
    case tt.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(n);
      break;
    case tt.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(n);
      break;
    case tt.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(n);
      break;
  }
}
function dv(n) {
  this.enabled === false || this.enableZoom === false || this.state !== tt.NONE || (n.preventDefault(), this.dispatchEvent(Io), this._handleMouseWheel(this._customWheelEvent(n)), this.dispatchEvent(Sh));
}
function pv(n) {
  this.enabled !== false && this._handleKeyDown(n);
}
function mv(n) {
  switch (this._trackPointer(n), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Oi.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(n), this.state = tt.TOUCH_ROTATE;
          break;
        case Oi.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(n), this.state = tt.TOUCH_PAN;
          break;
        default:
          this.state = tt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Oi.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(n), this.state = tt.TOUCH_DOLLY_PAN;
          break;
        case Oi.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(n), this.state = tt.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = tt.NONE;
      }
      break;
    default:
      this.state = tt.NONE;
  }
  this.state !== tt.NONE && this.dispatchEvent(Io);
}
function gv(n) {
  switch (this._trackPointer(n), this.state) {
    case tt.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(n), this.update();
      break;
    case tt.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(n), this.update();
      break;
    case tt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(n), this.update();
      break;
    case tt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(n), this.update();
      break;
    default:
      this.state = tt.NONE;
  }
}
function _v(n) {
  this.enabled !== false && n.preventDefault();
}
function vv(n) {
  n.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function xv(n) {
  n.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
const Ni = new Ln(0, 0, 0, "YXZ"), Fi = new C(), Sv = { type: "change" }, Mv = { type: "lock" }, Ev = { type: "unlock" }, mc = 2e-3, gc = Math.PI / 2;
class Xv extends rh {
  constructor(e, t = null) {
    super(e, t), this.isLocked = false, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.pointerSpeed = 1, this._onMouseMove = yv.bind(this), this._onPointerlockChange = Tv.bind(this), this._onPointerlockError = bv.bind(this), this.domElement !== null && this.connect(this.domElement);
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
    Fi.setFromMatrixColumn(t.matrix, 0), Fi.crossVectors(t.up, Fi), t.position.addScaledVector(Fi, e);
  }
  moveRight(e) {
    if (this.enabled === false) return;
    const t = this.object;
    Fi.setFromMatrixColumn(t.matrix, 0), t.position.addScaledVector(Fi, e);
  }
  lock(e = false) {
    this.domElement.requestPointerLock({ unadjustedMovement: e });
  }
  unlock() {
    this.domElement.ownerDocument.exitPointerLock();
  }
}
function yv(n) {
  if (this.enabled === false || this.isLocked === false) return;
  const e = this.object;
  Ni.setFromQuaternion(e.quaternion), Ni.y -= n.movementX * mc * this.pointerSpeed, Ni.x -= n.movementY * mc * this.pointerSpeed, Ni.x = Math.max(gc - this.maxPolarAngle, Math.min(gc - this.minPolarAngle, Ni.x)), e.quaternion.setFromEuler(Ni), this.dispatchEvent(Sv);
}
function Tv() {
  this.domElement.ownerDocument.pointerLockElement === this.domElement ? (this.dispatchEvent(Mv), this.isLocked = true) : (this.dispatchEvent(Ev), this.isLocked = false);
}
function bv() {
  console.error("THREE.PointerLockControls: Unable to use Pointer Lock API");
}
function _c(n, e) {
  const t = n.getUint32(e, true);
  e += 4;
  let i = "";
  for (let s = 0; s < t; s++) i += String.fromCharCode(n.getUint8(e++));
  return { value: i, size: 4 + t };
}
function os(n, e) {
  const t = {}, i = n.getUint32(e, true);
  e += 4;
  let s = 4;
  for (let r = 0; r < i; r++) {
    const a = _c(n, e);
    e += a.size, s += a.size;
    const o = _c(n, e);
    e += o.size, s += o.size, t[a.value] = o.value;
  }
  return { value: t, size: s };
}
function Av(n) {
  const e = n & 3, t = n >> 2 & 3, i = n >> 4 & 1 ? -1 : 1, s = n >> 5 & 1 ? -1 : 1, r = n >> 6 & 1 ? -1 : 1, a = 3 - e - t, o = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  o[0][e] = i, o[1][t] = s, o[2][a] = r;
  const l = new Ke();
  return l.set(o[0][0], o[0][2], -o[0][1], 0, o[2][0], o[2][2], -o[2][1], 0, -o[1][0], -o[1][2], o[1][1], 0, 0, 0, 0, 1), l;
}
function vc(n, e) {
  if (e.attributes._name && (n.name = e.attributes._name), e.frames.length > 0) {
    const t = e.frames[0];
    t.rotation && n.applyMatrix4(t.rotation), t.translation && n.position.set(t.translation.x, t.translation.z, -t.translation.y);
  }
}
function _r(n, e, t) {
  const i = e[n];
  if (i.type === "transform") {
    const s = e[i.childNodeId], r = i.frames[0], a = r && (r.rotation || r.translation);
    if (s.type === "shape" && s.models.length === 1) {
      const c = t[s.models[0].modelId], h = Sa(c);
      return vc(h, i), h;
    }
    if (!a) {
      const c = _r(i.childNodeId, e, t);
      return c && i.attributes._name && (c.name = i.attributes._name), c;
    }
    const o = new si();
    vc(o, i);
    const l = _r(i.childNodeId, e, t);
    return l && o.add(l), o;
  } else if (i.type === "group") {
    const s = new si();
    for (const r of i.childIds) {
      const a = _r(r, e, t);
      a && s.add(a);
    }
    return s;
  } else if (i.type === "shape") {
    if (i.models.length === 1) {
      const r = t[i.models[0].modelId];
      return Sa(r);
    }
    const s = new si();
    for (const r of i.models) {
      const a = t[r.modelId];
      s.add(Sa(a));
    }
    return s;
  }
  return null;
}
class Yv extends As {
  load(e, t, i, s) {
    const r = this, a = new Xf(r.manager);
    a.setPath(r.path), a.setResponseType("arraybuffer"), a.setRequestHeader(r.requestHeader), a.load(e, function(o) {
      try {
        t(r.parse(o));
      } catch (l) {
        s ? s(l) : console.error(l), r.manager.itemError(e);
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
    const l = [], c = {};
    let h = r;
    for (; a < t.byteLength; ) {
      let g = "";
      for (let p = 0; p < 4; p++) g += String.fromCharCode(t.getUint8(a++));
      const M = t.getUint32(a, true);
      if (a += 4, a += 4, g === "SIZE") {
        const p = t.getUint32(a, true);
        a += 4;
        const m = t.getUint32(a, true);
        a += 4;
        const E = t.getUint32(a, true);
        a += 4, o = { palette: r, size: { x: p, y: m, z: E } }, l.push(o), a += M - 12;
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
        const m = os(t, a);
        a += m.size;
        const E = t.getUint32(a, true);
        a += 4, a += 4;
        const y = t.getInt32(a, true);
        a += 4;
        const x = t.getUint32(a, true);
        a += 4;
        const R = [];
        for (let A = 0; A < x; A++) {
          const w = os(t, a);
          a += w.size;
          const v = { rotation: null, translation: null };
          if (w.value._r !== void 0 && (v.rotation = Av(parseInt(w.value._r))), w.value._t !== void 0) {
            const T = w.value._t.split(" ").map(Number);
            v.translation = { x: T[0], y: T[1], z: T[2] };
          }
          R.push(v);
        }
        c[p] = { type: "transform", id: p, attributes: m.value, childNodeId: E, layerId: y, frames: R };
      } else if (g === "nGRP") {
        const p = t.getUint32(a, true);
        a += 4;
        const m = os(t, a);
        a += m.size;
        const E = t.getUint32(a, true);
        a += 4;
        const y = [];
        for (let x = 0; x < E; x++) y.push(t.getUint32(a, true)), a += 4;
        c[p] = { type: "group", id: p, attributes: m.value, childIds: y };
      } else if (g === "nSHP") {
        const p = t.getUint32(a, true);
        a += 4;
        const m = os(t, a);
        a += m.size;
        const E = t.getUint32(a, true);
        a += 4;
        const y = [];
        for (let x = 0; x < E; x++) {
          const R = t.getUint32(a, true);
          a += 4;
          const A = os(t, a);
          a += A.size, y.push({ modelId: R, attributes: A.value });
        }
        c[p] = { type: "shape", id: p, attributes: m.value, models: y };
      } else a += M;
    }
    for (let g = 0; g < l.length; g++) l[g].palette = h;
    let f = null;
    Object.keys(c).length > 0 && (f = _r(0, c, l));
    const u = { chunks: l, scene: f };
    let d = false;
    return new Proxy(u, { get(g, M) {
      return typeof M == "string" && /^\d+$/.test(M) ? (d || (console.warn("THREE.VOXLoader: Accessing result as an array is deprecated. Use result.chunks[] instead."), d = true), g.chunks[parseInt(M)]) : M === "length" ? (d || (console.warn("THREE.VOXLoader: Accessing result as an array is deprecated. Use result.chunks instead."), d = true), g.chunks.length) : M === Symbol.iterator ? (d || (console.warn("THREE.VOXLoader: Iterating result as an array is deprecated. Use result.chunks instead."), d = true), g.chunks[Symbol.iterator].bind(g.chunks)) : g[M];
    } });
  }
}
function Sa(n) {
  const e = n.data, t = n.size, i = n.palette, s = t.x, r = t.y, a = t.z, o = new Uint8Array(s * r * a);
  for (let p = 0; p < e.length; p += 4) {
    const m = e[p + 0], E = e[p + 1], y = e[p + 2], x = e[p + 3];
    o[m + E * s + y * s * r] = x;
  }
  const l = [], c = [], h = [], f = new Be();
  let u = false;
  const d = [s, r, a];
  for (let p = 0; p < 3; p++) {
    const m = (p + 1) % 3, E = (p + 2) % 3, y = d[p], x = d[m], R = d[E], A = [0, 0, 0], w = new Int16Array(x * R);
    A[p] = 1;
    for (let v = 0; v <= y; v++) {
      let T = 0;
      for (let D = 0; D < R; D++) for (let P = 0; P < x; P++) {
        const L = [0, 0, 0];
        L[p] = v, L[m] = P, L[E] = D;
        const W = L[0], X = L[1], O = L[2], k = v > 0 ? o[W - A[0] + (X - A[1]) * s + (O - A[2]) * s * r] : 0, G = v < y ? o[W + X * s + O * s * r] : 0;
        k > 0 && G === 0 ? w[T] = k : G > 0 && k === 0 ? w[T] = -G : w[T] = 0, T++;
      }
      T = 0;
      for (let D = 0; D < R; D++) for (let P = 0; P < x; ) {
        const L = w[T];
        if (L !== 0) {
          let W = 1;
          for (; P + W < x && w[T + W] === L; ) W++;
          let X = 1, O = false;
          for (; D + X < R && !O; ) {
            for (let Ae = 0; Ae < W; Ae++) if (w[T + Ae + X * x] !== L) {
              O = true;
              break;
            }
            O || X++;
          }
          const k = [0, 0, 0];
          k[p] = v, k[m] = P, k[E] = D;
          const G = [0, 0, 0], $ = [0, 0, 0];
          G[m] = W, $[E] = X;
          const ee = Math.abs(L), re = i[ee], fe = (re >> 0 & 255) / 255, _e = (re >> 8 & 255) / 255, Ve = (re >> 16 & 255) / 255;
          (fe > 0 || _e > 0 || Ve > 0) && (u = true), f.setRGB(fe, _e, Ve, Xe);
          const nt = (Ae) => [Ae[0] - s / 2, Ae[2] - a / 2, -Ae[1] + r / 2], We = nt(k), Z = nt([k[0] + G[0], k[1] + G[1], k[2] + G[2]]), ie = nt([k[0] + G[0] + $[0], k[1] + G[1] + $[1], k[2] + G[2] + $[2]]), te = nt([k[0] + $[0], k[1] + $[1], k[2] + $[2]]), Me = l.length / 3;
          L > 0 ? (l.push(...We, ...Z, ...ie, ...te), c.push(Me, Me + 1, Me + 2, Me, Me + 2, Me + 3)) : (l.push(...We, ...te, ...ie, ...Z), c.push(Me, Me + 1, Me + 2, Me, Me + 2, Me + 3)), h.push(f.r, f.g, f.b, f.r, f.g, f.b, f.r, f.g, f.b, f.r, f.g, f.b);
          for (let Ae = 0; Ae < X; Ae++) for (let Re = 0; Re < W; Re++) w[T + Re + Ae * x] = 0;
          P += W, T += W;
        } else P++, T++;
      }
    }
  }
  const g = new Ft();
  g.setAttribute("position", new pt(l, 3)), g.setIndex(c), g.computeVertexNormals();
  const M = new zf();
  return u && (g.setAttribute("color", new pt(h, 3)), M.vertexColors = true), new $t(g, M);
}
export {
  Ca as $,
  vr as A,
  Ft as B,
  Dv as C,
  Kt as D,
  zv as E,
  Du as F,
  Zo as G,
  nn as H,
  wv as I,
  Et as J,
  ln as K,
  Mt as L,
  $t as M,
  Nt as N,
  wr as O,
  Zt as P,
  Un as Q,
  Gv as R,
  ol as S,
  Nv as T,
  Pe as U,
  j as V,
  Bv as W,
  So as X,
  ct as Y,
  Cn as Z,
  kc as _,
  Rr as a,
  Uv as a0,
  gn as a1,
  Xi as a2,
  ii as a3,
  kv as a4,
  Hv as a5,
  hr as a6,
  gr as a7,
  Iv as a8,
  Lv as a9,
  zl as aa,
  Wv as ab,
  Xv as ac,
  Kn as ad,
  Yv as ae,
  Bi as af,
  pt as ag,
  Cv as ah,
  Wc as ai,
  Tt as b,
  bu as c,
  Be as d,
  Vv as e,
  gh as f,
  Xe as g,
  C as h,
  $u as i,
  Pv as j,
  si as k,
  Ov as l,
  Hc as m,
  eh as n,
  Po as o,
  zf as p,
  Ju as q,
  Ke as r,
  Xn as s,
  Wu as t,
  Rv as u,
  pf as v,
  Rl as w,
  jc as x,
  bs as y,
  Wt as z
};
