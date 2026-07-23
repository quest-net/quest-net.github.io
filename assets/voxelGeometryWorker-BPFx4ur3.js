(async ()=>{
    const T = "srgb", bt = "srgb-linear", Nt = "linear", Ve = "srgb";
    class Rt {
        addEventListener(e, t) {
            this._listeners === void 0 && (this._listeners = {});
            const i = this._listeners;
            i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
        }
        hasEventListener(e, t) {
            const i = this._listeners;
            return i === void 0 ? !1 : i[e] !== void 0 && i[e].indexOf(t) !== -1;
        }
        removeEventListener(e, t) {
            const i = this._listeners;
            if (i === void 0) return;
            const s = i[e];
            if (s !== void 0) {
                const n = s.indexOf(t);
                n !== -1 && s.splice(n, 1);
            }
        }
        dispatchEvent(e) {
            const t = this._listeners;
            if (t === void 0) return;
            const i = t[e.type];
            if (i !== void 0) {
                e.target = this;
                const s = i.slice(0);
                for(let n = 0, r = s.length; n < r; n++)s[n].call(this, e);
                e.target = null;
            }
        }
    }
    const E = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "0a",
        "0b",
        "0c",
        "0d",
        "0e",
        "0f",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "1a",
        "1b",
        "1c",
        "1d",
        "1e",
        "1f",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "2a",
        "2b",
        "2c",
        "2d",
        "2e",
        "2f",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "3a",
        "3b",
        "3c",
        "3d",
        "3e",
        "3f",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "4a",
        "4b",
        "4c",
        "4d",
        "4e",
        "4f",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "5a",
        "5b",
        "5c",
        "5d",
        "5e",
        "5f",
        "60",
        "61",
        "62",
        "63",
        "64",
        "65",
        "66",
        "67",
        "68",
        "69",
        "6a",
        "6b",
        "6c",
        "6d",
        "6e",
        "6f",
        "70",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "78",
        "79",
        "7a",
        "7b",
        "7c",
        "7d",
        "7e",
        "7f",
        "80",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
        "89",
        "8a",
        "8b",
        "8c",
        "8d",
        "8e",
        "8f",
        "90",
        "91",
        "92",
        "93",
        "94",
        "95",
        "96",
        "97",
        "98",
        "99",
        "9a",
        "9b",
        "9c",
        "9d",
        "9e",
        "9f",
        "a0",
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "a7",
        "a8",
        "a9",
        "aa",
        "ab",
        "ac",
        "ad",
        "ae",
        "af",
        "b0",
        "b1",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "b7",
        "b8",
        "b9",
        "ba",
        "bb",
        "bc",
        "bd",
        "be",
        "bf",
        "c0",
        "c1",
        "c2",
        "c3",
        "c4",
        "c5",
        "c6",
        "c7",
        "c8",
        "c9",
        "ca",
        "cb",
        "cc",
        "cd",
        "ce",
        "cf",
        "d0",
        "d1",
        "d2",
        "d3",
        "d4",
        "d5",
        "d6",
        "d7",
        "d8",
        "d9",
        "da",
        "db",
        "dc",
        "dd",
        "de",
        "df",
        "e0",
        "e1",
        "e2",
        "e3",
        "e4",
        "e5",
        "e6",
        "e7",
        "e8",
        "e9",
        "ea",
        "eb",
        "ec",
        "ed",
        "ee",
        "ef",
        "f0",
        "f1",
        "f2",
        "f3",
        "f4",
        "f5",
        "f6",
        "f7",
        "f8",
        "f9",
        "fa",
        "fb",
        "fc",
        "fd",
        "fe",
        "ff"
    ];
    function Ue() {
        const o = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
        return (E[o & 255] + E[o >> 8 & 255] + E[o >> 16 & 255] + E[o >> 24 & 255] + "-" + E[e & 255] + E[e >> 8 & 255] + "-" + E[e >> 16 & 15 | 64] + E[e >> 24 & 255] + "-" + E[t & 63 | 128] + E[t >> 8 & 255] + "-" + E[t >> 16 & 255] + E[t >> 24 & 255] + E[i & 255] + E[i >> 8 & 255] + E[i >> 16 & 255] + E[i >> 24 & 255]).toLowerCase();
    }
    function S(o, e, t) {
        return Math.max(e, Math.min(t, o));
    }
    function zi(o, e) {
        return (o % e + e) % e;
    }
    function Ge(o, e, t) {
        return (1 - t) * o + t * e;
    }
    class he {
        constructor(e = 0, t = 0){
            he.prototype.isVector2 = !0, this.x = e, this.y = t;
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
            switch(e){
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
            switch(e){
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
            return this.x = S(this.x, e.x, t.x), this.y = S(this.y, e.y, t.y), this;
        }
        clampScalar(e, t) {
            return this.x = S(this.x, e, t), this.y = S(this.y, e, t), this;
        }
        clampLength(e, t) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(S(i, e, t));
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
            return Math.acos(S(i, -1, 1));
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
            const i = Math.cos(t), s = Math.sin(t), n = this.x - e.x, r = this.y - e.y;
            return this.x = n * i - r * s + e.x, this.y = n * s + r * i + e.y, this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y;
        }
    }
    class Se {
        constructor(e = 0, t = 0, i = 0, s = 1){
            this.isQuaternion = !0, this._x = e, this._y = t, this._z = i, this._w = s;
        }
        static slerpFlat(e, t, i, s, n, r, a) {
            let h = i[s + 0], l = i[s + 1], c = i[s + 2], u = i[s + 3];
            const f = n[r + 0], d = n[r + 1], m = n[r + 2], p = n[r + 3];
            if (a === 0) {
                e[t + 0] = h, e[t + 1] = l, e[t + 2] = c, e[t + 3] = u;
                return;
            }
            if (a === 1) {
                e[t + 0] = f, e[t + 1] = d, e[t + 2] = m, e[t + 3] = p;
                return;
            }
            if (u !== p || h !== f || l !== d || c !== m) {
                let x = 1 - a;
                const g = h * f + l * d + c * m + u * p, A = g >= 0 ? 1 : -1, v = 1 - g * g;
                if (v > Number.EPSILON) {
                    const _ = Math.sqrt(v), F = Math.atan2(_, g * A);
                    x = Math.sin(x * F) / _, a = Math.sin(a * F) / _;
                }
                const w = a * A;
                if (h = h * x + f * w, l = l * x + d * w, c = c * x + m * w, u = u * x + p * w, x === 1 - a) {
                    const _ = 1 / Math.sqrt(h * h + l * l + c * c + u * u);
                    h *= _, l *= _, c *= _, u *= _;
                }
            }
            e[t] = h, e[t + 1] = l, e[t + 2] = c, e[t + 3] = u;
        }
        static multiplyQuaternionsFlat(e, t, i, s, n, r) {
            const a = i[s], h = i[s + 1], l = i[s + 2], c = i[s + 3], u = n[r], f = n[r + 1], d = n[r + 2], m = n[r + 3];
            return e[t] = a * m + c * u + h * d - l * f, e[t + 1] = h * m + c * f + l * u - a * d, e[t + 2] = l * m + c * d + a * f - h * u, e[t + 3] = c * m - a * u - h * f - l * d, e;
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
        setFromEuler(e, t = !0) {
            const i = e._x, s = e._y, n = e._z, r = e._order, a = Math.cos, h = Math.sin, l = a(i / 2), c = a(s / 2), u = a(n / 2), f = h(i / 2), d = h(s / 2), m = h(n / 2);
            switch(r){
                case "XYZ":
                    this._x = f * c * u + l * d * m, this._y = l * d * u - f * c * m, this._z = l * c * m + f * d * u, this._w = l * c * u - f * d * m;
                    break;
                case "YXZ":
                    this._x = f * c * u + l * d * m, this._y = l * d * u - f * c * m, this._z = l * c * m - f * d * u, this._w = l * c * u + f * d * m;
                    break;
                case "ZXY":
                    this._x = f * c * u - l * d * m, this._y = l * d * u + f * c * m, this._z = l * c * m + f * d * u, this._w = l * c * u - f * d * m;
                    break;
                case "ZYX":
                    this._x = f * c * u - l * d * m, this._y = l * d * u + f * c * m, this._z = l * c * m - f * d * u, this._w = l * c * u + f * d * m;
                    break;
                case "YZX":
                    this._x = f * c * u + l * d * m, this._y = l * d * u + f * c * m, this._z = l * c * m - f * d * u, this._w = l * c * u - f * d * m;
                    break;
                case "XZY":
                    this._x = f * c * u - l * d * m, this._y = l * d * u - f * c * m, this._z = l * c * m + f * d * u, this._w = l * c * u + f * d * m;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + r);
            }
            return t === !0 && this._onChangeCallback(), this;
        }
        setFromAxisAngle(e, t) {
            const i = t / 2, s = Math.sin(i);
            return this._x = e.x * s, this._y = e.y * s, this._z = e.z * s, this._w = Math.cos(i), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(e) {
            const t = e.elements, i = t[0], s = t[4], n = t[8], r = t[1], a = t[5], h = t[9], l = t[2], c = t[6], u = t[10], f = i + a + u;
            if (f > 0) {
                const d = .5 / Math.sqrt(f + 1);
                this._w = .25 / d, this._x = (c - h) * d, this._y = (n - l) * d, this._z = (r - s) * d;
            } else if (i > a && i > u) {
                const d = 2 * Math.sqrt(1 + i - a - u);
                this._w = (c - h) / d, this._x = .25 * d, this._y = (s + r) / d, this._z = (n + l) / d;
            } else if (a > u) {
                const d = 2 * Math.sqrt(1 + a - i - u);
                this._w = (n - l) / d, this._x = (s + r) / d, this._y = .25 * d, this._z = (h + c) / d;
            } else {
                const d = 2 * Math.sqrt(1 + u - i - a);
                this._w = (r - s) / d, this._x = (n + l) / d, this._y = (h + c) / d, this._z = .25 * d;
            }
            return this._onChangeCallback(), this;
        }
        setFromUnitVectors(e, t) {
            let i = e.dot(t) + 1;
            return i < 1e-8 ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
        }
        angleTo(e) {
            return 2 * Math.acos(Math.abs(S(this.dot(e), -1, 1)));
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
            const i = e._x, s = e._y, n = e._z, r = e._w, a = t._x, h = t._y, l = t._z, c = t._w;
            return this._x = i * c + r * a + s * l - n * h, this._y = s * c + r * h + n * a - i * l, this._z = n * c + r * l + i * h - s * a, this._w = r * c - i * a - s * h - n * l, this._onChangeCallback(), this;
        }
        slerp(e, t) {
            if (t === 0) return this;
            if (t === 1) return this.copy(e);
            const i = this._x, s = this._y, n = this._z, r = this._w;
            let a = r * e._w + i * e._x + s * e._y + n * e._z;
            if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = r, this._x = i, this._y = s, this._z = n, this;
            const h = 1 - a * a;
            if (h <= Number.EPSILON) {
                const d = 1 - t;
                return this._w = d * r + t * this._w, this._x = d * i + t * this._x, this._y = d * s + t * this._y, this._z = d * n + t * this._z, this.normalize(), this;
            }
            const l = Math.sqrt(h), c = Math.atan2(l, a), u = Math.sin((1 - t) * c) / l, f = Math.sin(t * c) / l;
            return this._w = r * u + this._w * f, this._x = i * u + this._x * f, this._y = s * u + this._y * f, this._z = n * u + this._z * f, this._onChangeCallback(), this;
        }
        slerpQuaternions(e, t, i) {
            return this.copy(e).slerp(t, i);
        }
        random() {
            const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), i = Math.random(), s = Math.sqrt(1 - i), n = Math.sqrt(i);
            return this.set(s * Math.sin(e), s * Math.cos(e), n * Math.sin(t), n * Math.cos(t));
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
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._w;
        }
    }
    class M {
        constructor(e = 0, t = 0, i = 0){
            M.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = i;
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
            switch(e){
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
            switch(e){
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
            return this.applyQuaternion(kt.setFromEuler(e));
        }
        applyAxisAngle(e, t) {
            return this.applyQuaternion(kt.setFromAxisAngle(e, t));
        }
        applyMatrix3(e) {
            const t = this.x, i = this.y, s = this.z, n = e.elements;
            return this.x = n[0] * t + n[3] * i + n[6] * s, this.y = n[1] * t + n[4] * i + n[7] * s, this.z = n[2] * t + n[5] * i + n[8] * s, this;
        }
        applyNormalMatrix(e) {
            return this.applyMatrix3(e).normalize();
        }
        applyMatrix4(e) {
            const t = this.x, i = this.y, s = this.z, n = e.elements, r = 1 / (n[3] * t + n[7] * i + n[11] * s + n[15]);
            return this.x = (n[0] * t + n[4] * i + n[8] * s + n[12]) * r, this.y = (n[1] * t + n[5] * i + n[9] * s + n[13]) * r, this.z = (n[2] * t + n[6] * i + n[10] * s + n[14]) * r, this;
        }
        applyQuaternion(e) {
            const t = this.x, i = this.y, s = this.z, n = e.x, r = e.y, a = e.z, h = e.w, l = 2 * (r * s - a * i), c = 2 * (a * t - n * s), u = 2 * (n * i - r * t);
            return this.x = t + h * l + r * u - a * c, this.y = i + h * c + a * l - n * u, this.z = s + h * u + n * c - r * l, this;
        }
        project(e) {
            return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
        }
        unproject(e) {
            return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
        }
        transformDirection(e) {
            const t = this.x, i = this.y, s = this.z, n = e.elements;
            return this.x = n[0] * t + n[4] * i + n[8] * s, this.y = n[1] * t + n[5] * i + n[9] * s, this.z = n[2] * t + n[6] * i + n[10] * s, this.normalize();
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
            return this.x = S(this.x, e.x, t.x), this.y = S(this.y, e.y, t.y), this.z = S(this.z, e.z, t.z), this;
        }
        clampScalar(e, t) {
            return this.x = S(this.x, e, t), this.y = S(this.y, e, t), this.z = S(this.z, e, t), this;
        }
        clampLength(e, t) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(S(i, e, t));
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
            const i = e.x, s = e.y, n = e.z, r = t.x, a = t.y, h = t.z;
            return this.x = s * h - n * a, this.y = n * r - i * h, this.z = i * a - s * r, this;
        }
        projectOnVector(e) {
            const t = e.lengthSq();
            if (t === 0) return this.set(0, 0, 0);
            const i = e.dot(this) / t;
            return this.copy(e).multiplyScalar(i);
        }
        projectOnPlane(e) {
            return $e.copy(this).projectOnVector(e), this.sub($e);
        }
        reflect(e) {
            return this.sub($e.copy(e).multiplyScalar(2 * this.dot(e)));
        }
        angleTo(e) {
            const t = Math.sqrt(this.lengthSq() * e.lengthSq());
            if (t === 0) return Math.PI / 2;
            const i = this.dot(e) / t;
            return Math.acos(S(i, -1, 1));
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
    const $e = new M, kt = new Se;
    class de {
        constructor(e, t, i, s, n, r, a, h, l){
            de.prototype.isMatrix3 = !0, this.elements = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], e !== void 0 && this.set(e, t, i, s, n, r, a, h, l);
        }
        set(e, t, i, s, n, r, a, h, l) {
            const c = this.elements;
            return c[0] = e, c[1] = s, c[2] = a, c[3] = t, c[4] = n, c[5] = h, c[6] = i, c[7] = r, c[8] = l, this;
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
            const i = e.elements, s = t.elements, n = this.elements, r = i[0], a = i[3], h = i[6], l = i[1], c = i[4], u = i[7], f = i[2], d = i[5], m = i[8], p = s[0], x = s[3], g = s[6], A = s[1], v = s[4], w = s[7], _ = s[2], F = s[5], y = s[8];
            return n[0] = r * p + a * A + h * _, n[3] = r * x + a * v + h * F, n[6] = r * g + a * w + h * y, n[1] = l * p + c * A + u * _, n[4] = l * x + c * v + u * F, n[7] = l * g + c * w + u * y, n[2] = f * p + d * A + m * _, n[5] = f * x + d * v + m * F, n[8] = f * g + d * w + m * y, this;
        }
        multiplyScalar(e) {
            const t = this.elements;
            return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
        }
        determinant() {
            const e = this.elements, t = e[0], i = e[1], s = e[2], n = e[3], r = e[4], a = e[5], h = e[6], l = e[7], c = e[8];
            return t * r * c - t * a * l - i * n * c + i * a * h + s * n * l - s * r * h;
        }
        invert() {
            const e = this.elements, t = e[0], i = e[1], s = e[2], n = e[3], r = e[4], a = e[5], h = e[6], l = e[7], c = e[8], u = c * r - a * l, f = a * h - c * n, d = l * n - r * h, m = t * u + i * f + s * d;
            if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const p = 1 / m;
            return e[0] = u * p, e[1] = (s * l - c * i) * p, e[2] = (a * i - s * r) * p, e[3] = f * p, e[4] = (c * t - s * h) * p, e[5] = (s * n - a * t) * p, e[6] = d * p, e[7] = (i * h - l * t) * p, e[8] = (r * t - i * n) * p, this;
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
        setUvTransform(e, t, i, s, n, r, a) {
            const h = Math.cos(n), l = Math.sin(n);
            return this.set(i * h, i * l, -i * (h * r + l * a) + r + e, -s * l, s * h, -s * (-l * r + h * a) + a + t, 0, 0, 1), this;
        }
        scale(e, t) {
            return this.premultiply(qe.makeScale(e, t)), this;
        }
        rotate(e) {
            return this.premultiply(qe.makeRotation(-e)), this;
        }
        translate(e, t) {
            return this.premultiply(qe.makeTranslation(e, t)), this;
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
            for(let s = 0; s < 9; s++)if (t[s] !== i[s]) return !1;
            return !0;
        }
        fromArray(e, t = 0) {
            for(let i = 0; i < 9; i++)this.elements[i] = e[i + t];
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
    const qe = new de;
    function Et(o) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", o);
    }
    const Ht = {};
    function Wt(o) {
        o in Ht || (Ht[o] = !0, console.warn(o));
    }
    const Dt = new de().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), Pt = new de().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
    function Ii() {
        const o = {
            enabled: !0,
            workingColorSpace: bt,
            spaces: {},
            convert: function(s, n, r) {
                return this.enabled === !1 || n === r || !n || !r || (this.spaces[n].transfer === Ve && (s.r = J(s.r), s.g = J(s.g), s.b = J(s.b)), this.spaces[n].primaries !== this.spaces[r].primaries && (s.applyMatrix3(this.spaces[n].toXYZ), s.applyMatrix3(this.spaces[r].fromXYZ)), this.spaces[r].transfer === Ve && (s.r = ye(s.r), s.g = ye(s.g), s.b = ye(s.b))), s;
            },
            workingToColorSpace: function(s, n) {
                return this.convert(s, this.workingColorSpace, n);
            },
            colorSpaceToWorking: function(s, n) {
                return this.convert(s, n, this.workingColorSpace);
            },
            getPrimaries: function(s) {
                return this.spaces[s].primaries;
            },
            getTransfer: function(s) {
                return s === "" ? Nt : this.spaces[s].transfer;
            },
            getToneMappingMode: function(s) {
                return this.spaces[s].outputColorSpaceConfig.toneMappingMode || "standard";
            },
            getLuminanceCoefficients: function(s, n = this.workingColorSpace) {
                return s.fromArray(this.spaces[n].luminanceCoefficients);
            },
            define: function(s) {
                Object.assign(this.spaces, s);
            },
            _getMatrix: function(s, n, r) {
                return s.copy(this.spaces[n].toXYZ).multiply(this.spaces[r].fromXYZ);
            },
            _getDrawingBufferColorSpace: function(s) {
                return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
            },
            _getUnpackColorSpace: function(s = this.workingColorSpace) {
                return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
            },
            fromWorkingColorSpace: function(s, n) {
                return Wt("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), o.workingToColorSpace(s, n);
            },
            toWorkingColorSpace: function(s, n) {
                return Wt("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), o.colorSpaceToWorking(s, n);
            }
        }, e = [
            .64,
            .33,
            .3,
            .6,
            .15,
            .06
        ], t = [
            .2126,
            .7152,
            .0722
        ], i = [
            .3127,
            .329
        ];
        return o.define({
            [bt]: {
                primaries: e,
                whitePoint: i,
                transfer: Nt,
                toXYZ: Dt,
                fromXYZ: Pt,
                luminanceCoefficients: t,
                workingColorSpaceConfig: {
                    unpackColorSpace: T
                },
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: T
                }
            },
            [T]: {
                primaries: e,
                whitePoint: i,
                transfer: Ve,
                toXYZ: Dt,
                fromXYZ: Pt,
                luminanceCoefficients: t,
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: T
                }
            }
        }), o;
    }
    const W = Ii();
    function J(o) {
        return o < .04045 ? o * .0773993808 : Math.pow(o * .9478672986 + .0521327014, 2.4);
    }
    function ye(o) {
        return o < .0031308 ? o * 12.92 : 1.055 * Math.pow(o, .41666) - .055;
    }
    let fe;
    class Ni {
        static getDataURL(e, t = "image/png") {
            if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
            let i;
            if (e instanceof HTMLCanvasElement) i = e;
            else {
                fe === void 0 && (fe = Et("canvas")), fe.width = e.width, fe.height = e.height;
                const s = fe.getContext("2d");
                e instanceof ImageData ? s.putImageData(e, 0, 0) : s.drawImage(e, 0, 0, e.width, e.height), i = fe;
            }
            return i.toDataURL(t);
        }
        static sRGBToLinear(e) {
            if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
                const t = Et("canvas");
                t.width = e.width, t.height = e.height;
                const i = t.getContext("2d");
                i.drawImage(e, 0, 0, e.width, e.height);
                const s = i.getImageData(0, 0, e.width, e.height), n = s.data;
                for(let r = 0; r < n.length; r++)n[r] = J(n[r] / 255) * 255;
                return i.putImageData(s, 0, 0), t;
            } else if (e.data) {
                const t = e.data.slice(0);
                for(let i = 0; i < t.length; i++)t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(J(t[i] / 255) * 255) : t[i] = J(t[i]);
                return {
                    data: t,
                    width: e.width,
                    height: e.height
                };
            } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
        }
    }
    let ki = 0;
    class Hi {
        constructor(e = null){
            this.isSource = !0, Object.defineProperty(this, "id", {
                value: ki++
            }), this.uuid = Ue(), this.data = e, this.dataReady = !0, this.version = 0;
        }
        getSize(e) {
            const t = this.data;
            return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
        }
        set needsUpdate(e) {
            e === !0 && this.version++;
        }
        toJSON(e) {
            const t = e === void 0 || typeof e == "string";
            if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
            const i = {
                uuid: this.uuid,
                url: ""
            }, s = this.data;
            if (s !== null) {
                let n;
                if (Array.isArray(s)) {
                    n = [];
                    for(let r = 0, a = s.length; r < a; r++)s[r].isDataTexture ? n.push(je(s[r].image)) : n.push(je(s[r]));
                } else n = je(s);
                i.url = n;
            }
            return t || (e.images[this.uuid] = i), i;
        }
    }
    function je(o) {
        return typeof HTMLImageElement < "u" && o instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && o instanceof ImageBitmap ? Ni.getDataURL(o) : o.data ? {
            data: Array.from(o.data),
            width: o.width,
            height: o.height,
            type: o.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
    }
    let Wi = 0;
    const Ye = new M;
    class K extends Rt {
        constructor(e = K.DEFAULT_IMAGE, t = K.DEFAULT_MAPPING, i = 1001, s = 1001, n = 1006, r = 1008, a = 1023, h = 1009, l = K.DEFAULT_ANISOTROPY, c = ""){
            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                value: Wi++
            }), this.uuid = Ue(), this.name = "", this.source = new Hi(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = i, this.wrapT = s, this.magFilter = n, this.minFilter = r, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = h, this.offset = new he(0, 0), this.repeat = new he(1, 1), this.center = new he(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new de, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = c, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0;
        }
        get width() {
            return this.source.getSize(Ye).x;
        }
        get height() {
            return this.source.getSize(Ye).y;
        }
        get depth() {
            return this.source.getSize(Ye).z;
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
            this.updateRanges.push({
                start: e,
                count: t
            });
        }
        clearUpdateRanges() {
            this.updateRanges.length = 0;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(e) {
            return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
        }
        setValues(e) {
            for(const t in e){
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
            const i = {
                metadata: {
                    version: 4.7,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                image: this.source.toJSON(e).uuid,
                mapping: this.mapping,
                channel: this.channel,
                repeat: [
                    this.repeat.x,
                    this.repeat.y
                ],
                offset: [
                    this.offset.x,
                    this.offset.y
                ],
                center: [
                    this.center.x,
                    this.center.y
                ],
                rotation: this.rotation,
                wrap: [
                    this.wrapS,
                    this.wrapT
                ],
                format: this.format,
                internalFormat: this.internalFormat,
                type: this.type,
                colorSpace: this.colorSpace,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                generateMipmaps: this.generateMipmaps,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            return Object.keys(this.userData).length > 0 && (i.userData = this.userData), t || (e.textures[this.uuid] = i), i;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        transformUv(e) {
            if (this.mapping !== 300) return e;
            if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch(this.wrapS){
                case 1e3:
                    e.x = e.x - Math.floor(e.x);
                    break;
                case 1001:
                    e.x = e.x < 0 ? 0 : 1;
                    break;
                case 1002:
                    Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
                    break;
            }
            if (e.y < 0 || e.y > 1) switch(this.wrapT){
                case 1e3:
                    e.y = e.y - Math.floor(e.y);
                    break;
                case 1001:
                    e.y = e.y < 0 ? 0 : 1;
                    break;
                case 1002:
                    Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
                    break;
            }
            return this.flipY && (e.y = 1 - e.y), e;
        }
        set needsUpdate(e) {
            e === !0 && (this.version++, this.source.needsUpdate = !0);
        }
        set needsPMREMUpdate(e) {
            e === !0 && this.pmremVersion++;
        }
    }
    K.DEFAULT_IMAGE = null;
    K.DEFAULT_MAPPING = 300;
    K.DEFAULT_ANISOTROPY = 1;
    class Di extends K {
        constructor(e = null, t = 1, i = 1, s = 1){
            super(null), this.isData3DTexture = !0, this.image = {
                data: e,
                width: t,
                height: i,
                depth: s
            }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    class Q {
        constructor(e, t, i, s, n, r, a, h, l, c, u, f, d, m, p, x){
            Q.prototype.isMatrix4 = !0, this.elements = [
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                0,
                1
            ], e !== void 0 && this.set(e, t, i, s, n, r, a, h, l, c, u, f, d, m, p, x);
        }
        set(e, t, i, s, n, r, a, h, l, c, u, f, d, m, p, x) {
            const g = this.elements;
            return g[0] = e, g[4] = t, g[8] = i, g[12] = s, g[1] = n, g[5] = r, g[9] = a, g[13] = h, g[2] = l, g[6] = c, g[10] = u, g[14] = f, g[3] = d, g[7] = m, g[11] = p, g[15] = x, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
            return new Q().fromArray(this.elements);
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
            const t = this.elements, i = e.elements, s = 1 / me.setFromMatrixColumn(e, 0).length(), n = 1 / me.setFromMatrixColumn(e, 1).length(), r = 1 / me.setFromMatrixColumn(e, 2).length();
            return t[0] = i[0] * s, t[1] = i[1] * s, t[2] = i[2] * s, t[3] = 0, t[4] = i[4] * n, t[5] = i[5] * n, t[6] = i[6] * n, t[7] = 0, t[8] = i[8] * r, t[9] = i[9] * r, t[10] = i[10] * r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
        }
        makeRotationFromEuler(e) {
            const t = this.elements, i = e.x, s = e.y, n = e.z, r = Math.cos(i), a = Math.sin(i), h = Math.cos(s), l = Math.sin(s), c = Math.cos(n), u = Math.sin(n);
            if (e.order === "XYZ") {
                const f = r * c, d = r * u, m = a * c, p = a * u;
                t[0] = h * c, t[4] = -h * u, t[8] = l, t[1] = d + m * l, t[5] = f - p * l, t[9] = -a * h, t[2] = p - f * l, t[6] = m + d * l, t[10] = r * h;
            } else if (e.order === "YXZ") {
                const f = h * c, d = h * u, m = l * c, p = l * u;
                t[0] = f + p * a, t[4] = m * a - d, t[8] = r * l, t[1] = r * u, t[5] = r * c, t[9] = -a, t[2] = d * a - m, t[6] = p + f * a, t[10] = r * h;
            } else if (e.order === "ZXY") {
                const f = h * c, d = h * u, m = l * c, p = l * u;
                t[0] = f - p * a, t[4] = -r * u, t[8] = m + d * a, t[1] = d + m * a, t[5] = r * c, t[9] = p - f * a, t[2] = -r * l, t[6] = a, t[10] = r * h;
            } else if (e.order === "ZYX") {
                const f = r * c, d = r * u, m = a * c, p = a * u;
                t[0] = h * c, t[4] = m * l - d, t[8] = f * l + p, t[1] = h * u, t[5] = p * l + f, t[9] = d * l - m, t[2] = -l, t[6] = a * h, t[10] = r * h;
            } else if (e.order === "YZX") {
                const f = r * h, d = r * l, m = a * h, p = a * l;
                t[0] = h * c, t[4] = p - f * u, t[8] = m * u + d, t[1] = u, t[5] = r * c, t[9] = -a * c, t[2] = -l * c, t[6] = d * u + m, t[10] = f - p * u;
            } else if (e.order === "XZY") {
                const f = r * h, d = r * l, m = a * h, p = a * l;
                t[0] = h * c, t[4] = -u, t[8] = l * c, t[1] = f * u + p, t[5] = r * c, t[9] = d * u - m, t[2] = m * u - d, t[6] = a * c, t[10] = p * u + f;
            }
            return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
        }
        makeRotationFromQuaternion(e) {
            return this.compose(Pi, e, Ui);
        }
        lookAt(e, t, i) {
            const s = this.elements;
            return R.subVectors(e, t), R.lengthSq() === 0 && (R.z = 1), R.normalize(), ie.crossVectors(i, R), ie.lengthSq() === 0 && (Math.abs(i.z) === 1 ? R.x += 1e-4 : R.z += 1e-4, R.normalize(), ie.crossVectors(i, R)), ie.normalize(), ze.crossVectors(R, ie), s[0] = ie.x, s[4] = ze.x, s[8] = R.x, s[1] = ie.y, s[5] = ze.y, s[9] = R.y, s[2] = ie.z, s[6] = ze.z, s[10] = R.z, this;
        }
        multiply(e) {
            return this.multiplyMatrices(this, e);
        }
        premultiply(e) {
            return this.multiplyMatrices(e, this);
        }
        multiplyMatrices(e, t) {
            const i = e.elements, s = t.elements, n = this.elements, r = i[0], a = i[4], h = i[8], l = i[12], c = i[1], u = i[5], f = i[9], d = i[13], m = i[2], p = i[6], x = i[10], g = i[14], A = i[3], v = i[7], w = i[11], _ = i[15], F = s[0], y = s[4], te = s[8], re = s[12], oe = s[1], ae = s[5], we = s[9], Fe = s[13], Ae = s[2], be = s[6], Ee = s[10], Ce = s[14], Te = s[3], Re = s[7], Le = s[11], Oe = s[15];
            return n[0] = r * F + a * oe + h * Ae + l * Te, n[4] = r * y + a * ae + h * be + l * Re, n[8] = r * te + a * we + h * Ee + l * Le, n[12] = r * re + a * Fe + h * Ce + l * Oe, n[1] = c * F + u * oe + f * Ae + d * Te, n[5] = c * y + u * ae + f * be + d * Re, n[9] = c * te + u * we + f * Ee + d * Le, n[13] = c * re + u * Fe + f * Ce + d * Oe, n[2] = m * F + p * oe + x * Ae + g * Te, n[6] = m * y + p * ae + x * be + g * Re, n[10] = m * te + p * we + x * Ee + g * Le, n[14] = m * re + p * Fe + x * Ce + g * Oe, n[3] = A * F + v * oe + w * Ae + _ * Te, n[7] = A * y + v * ae + w * be + _ * Re, n[11] = A * te + v * we + w * Ee + _ * Le, n[15] = A * re + v * Fe + w * Ce + _ * Oe, this;
        }
        multiplyScalar(e) {
            const t = this.elements;
            return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
        }
        determinant() {
            const e = this.elements, t = e[0], i = e[4], s = e[8], n = e[12], r = e[1], a = e[5], h = e[9], l = e[13], c = e[2], u = e[6], f = e[10], d = e[14], m = e[3], p = e[7], x = e[11], g = e[15];
            return m * (+n * h * u - s * l * u - n * a * f + i * l * f + s * a * d - i * h * d) + p * (+t * h * d - t * l * f + n * r * f - s * r * d + s * l * c - n * h * c) + x * (+t * l * u - t * a * d - n * r * u + i * r * d + n * a * c - i * l * c) + g * (-s * a * c - t * h * u + t * a * f + s * r * u - i * r * f + i * h * c);
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
            const e = this.elements, t = e[0], i = e[1], s = e[2], n = e[3], r = e[4], a = e[5], h = e[6], l = e[7], c = e[8], u = e[9], f = e[10], d = e[11], m = e[12], p = e[13], x = e[14], g = e[15], A = u * x * l - p * f * l + p * h * d - a * x * d - u * h * g + a * f * g, v = m * f * l - c * x * l - m * h * d + r * x * d + c * h * g - r * f * g, w = c * p * l - m * u * l + m * a * d - r * p * d - c * a * g + r * u * g, _ = m * u * h - c * p * h - m * a * f + r * p * f + c * a * x - r * u * x, F = t * A + i * v + s * w + n * _;
            if (F === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const y = 1 / F;
            return e[0] = A * y, e[1] = (p * f * n - u * x * n - p * s * d + i * x * d + u * s * g - i * f * g) * y, e[2] = (a * x * n - p * h * n + p * s * l - i * x * l - a * s * g + i * h * g) * y, e[3] = (u * h * n - a * f * n - u * s * l + i * f * l + a * s * d - i * h * d) * y, e[4] = v * y, e[5] = (c * x * n - m * f * n + m * s * d - t * x * d - c * s * g + t * f * g) * y, e[6] = (m * h * n - r * x * n - m * s * l + t * x * l + r * s * g - t * h * g) * y, e[7] = (r * f * n - c * h * n + c * s * l - t * f * l - r * s * d + t * h * d) * y, e[8] = w * y, e[9] = (m * u * n - c * p * n - m * i * d + t * p * d + c * i * g - t * u * g) * y, e[10] = (r * p * n - m * a * n + m * i * l - t * p * l - r * i * g + t * a * g) * y, e[11] = (c * a * n - r * u * n - c * i * l + t * u * l + r * i * d - t * a * d) * y, e[12] = _ * y, e[13] = (c * p * s - m * u * s + m * i * f - t * p * f - c * i * x + t * u * x) * y, e[14] = (m * a * s - r * p * s - m * i * h + t * p * h + r * i * x - t * a * x) * y, e[15] = (r * u * s - c * a * s + c * i * h - t * u * h - r * i * f + t * a * f) * y, this;
        }
        scale(e) {
            const t = this.elements, i = e.x, s = e.y, n = e.z;
            return t[0] *= i, t[4] *= s, t[8] *= n, t[1] *= i, t[5] *= s, t[9] *= n, t[2] *= i, t[6] *= s, t[10] *= n, t[3] *= i, t[7] *= s, t[11] *= n, this;
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
            const i = Math.cos(t), s = Math.sin(t), n = 1 - i, r = e.x, a = e.y, h = e.z, l = n * r, c = n * a;
            return this.set(l * r + i, l * a - s * h, l * h + s * a, 0, l * a + s * h, c * a + i, c * h - s * r, 0, l * h - s * a, c * h + s * r, n * h * h + i, 0, 0, 0, 0, 1), this;
        }
        makeScale(e, t, i) {
            return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
        }
        makeShear(e, t, i, s, n, r) {
            return this.set(1, i, n, 0, e, 1, r, 0, t, s, 1, 0, 0, 0, 0, 1), this;
        }
        compose(e, t, i) {
            const s = this.elements, n = t._x, r = t._y, a = t._z, h = t._w, l = n + n, c = r + r, u = a + a, f = n * l, d = n * c, m = n * u, p = r * c, x = r * u, g = a * u, A = h * l, v = h * c, w = h * u, _ = i.x, F = i.y, y = i.z;
            return s[0] = (1 - (p + g)) * _, s[1] = (d + w) * _, s[2] = (m - v) * _, s[3] = 0, s[4] = (d - w) * F, s[5] = (1 - (f + g)) * F, s[6] = (x + A) * F, s[7] = 0, s[8] = (m + v) * y, s[9] = (x - A) * y, s[10] = (1 - (f + p)) * y, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
        }
        decompose(e, t, i) {
            const s = this.elements;
            let n = me.set(s[0], s[1], s[2]).length();
            const r = me.set(s[4], s[5], s[6]).length(), a = me.set(s[8], s[9], s[10]).length();
            this.determinant() < 0 && (n = -n), e.x = s[12], e.y = s[13], e.z = s[14], D.copy(this);
            const l = 1 / n, c = 1 / r, u = 1 / a;
            return D.elements[0] *= l, D.elements[1] *= l, D.elements[2] *= l, D.elements[4] *= c, D.elements[5] *= c, D.elements[6] *= c, D.elements[8] *= u, D.elements[9] *= u, D.elements[10] *= u, t.setFromRotationMatrix(D), i.x = n, i.y = r, i.z = a, this;
        }
        makePerspective(e, t, i, s, n, r, a = 2e3, h = !1) {
            const l = this.elements, c = 2 * n / (t - e), u = 2 * n / (i - s), f = (t + e) / (t - e), d = (i + s) / (i - s);
            let m, p;
            if (h) m = n / (r - n), p = r * n / (r - n);
            else if (a === 2e3) m = -(r + n) / (r - n), p = -2 * r * n / (r - n);
            else if (a === 2001) m = -r / (r - n), p = -r * n / (r - n);
            else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
            return l[0] = c, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = u, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = p, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
        }
        makeOrthographic(e, t, i, s, n, r, a = 2e3, h = !1) {
            const l = this.elements, c = 2 / (t - e), u = 2 / (i - s), f = -(t + e) / (t - e), d = -(i + s) / (i - s);
            let m, p;
            if (h) m = 1 / (r - n), p = r / (r - n);
            else if (a === 2e3) m = -2 / (r - n), p = -(r + n) / (r - n);
            else if (a === 2001) m = -1 / (r - n), p = -n / (r - n);
            else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
            return l[0] = c, l[4] = 0, l[8] = 0, l[12] = f, l[1] = 0, l[5] = u, l[9] = 0, l[13] = d, l[2] = 0, l[6] = 0, l[10] = m, l[14] = p, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
        }
        equals(e) {
            const t = this.elements, i = e.elements;
            for(let s = 0; s < 16; s++)if (t[s] !== i[s]) return !1;
            return !0;
        }
        fromArray(e, t = 0) {
            for(let i = 0; i < 16; i++)this.elements[i] = e[i + t];
            return this;
        }
        toArray(e = [], t = 0) {
            const i = this.elements;
            return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e;
        }
    }
    const me = new M, D = new Q, Pi = new M(0, 0, 0), Ui = new M(1, 1, 1), ie = new M, ze = new M, R = new M, Ut = new Q, Bt = new Se;
    class Me {
        constructor(e = 0, t = 0, i = 0, s = Me.DEFAULT_ORDER){
            this.isEuler = !0, this._x = e, this._y = t, this._z = i, this._order = s;
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
        setFromRotationMatrix(e, t = this._order, i = !0) {
            const s = e.elements, n = s[0], r = s[4], a = s[8], h = s[1], l = s[5], c = s[9], u = s[2], f = s[6], d = s[10];
            switch(t){
                case "XYZ":
                    this._y = Math.asin(S(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-r, n)) : (this._x = Math.atan2(f, l), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-S(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(h, l)) : (this._y = Math.atan2(-u, n), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(S(f, -1, 1)), Math.abs(f) < .9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-r, l)) : (this._y = 0, this._z = Math.atan2(h, n));
                    break;
                case "ZYX":
                    this._y = Math.asin(-S(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(h, n)) : (this._x = 0, this._z = Math.atan2(-r, l));
                    break;
                case "YZX":
                    this._z = Math.asin(S(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-u, n)) : (this._x = 0, this._y = Math.atan2(a, d));
                    break;
                case "XZY":
                    this._z = Math.asin(-S(r, -1, 1)), Math.abs(r) < .9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(a, n)) : (this._x = Math.atan2(-c, d), this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
            }
            return this._order = t, i === !0 && this._onChangeCallback(), this;
        }
        setFromQuaternion(e, t, i) {
            return Ut.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ut, t, i);
        }
        setFromVector3(e, t = this._order) {
            return this.set(e.x, e.y, e.z, t);
        }
        reorder(e) {
            return Bt.setFromEuler(this), this.setFromQuaternion(Bt, e);
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
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._order;
        }
    }
    Me.DEFAULT_ORDER = "XYZ";
    class Bi {
        constructor(){
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
    let Vi = 0;
    const Vt = new M, pe = new Se, X = new Q, Ie = new M, ve = new M, Gi = new M, $i = new Se, Gt = new M(1, 0, 0), $t = new M(0, 1, 0), qt = new M(0, 0, 1), jt = {
        type: "added"
    }, qi = {
        type: "removed"
    }, ge = {
        type: "childadded",
        child: null
    }, Xe = {
        type: "childremoved",
        child: null
    };
    class ce extends Rt {
        constructor(){
            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                value: Vi++
            }), this.uuid = Ue(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ce.DEFAULT_UP.clone();
            const e = new M, t = new Me, i = new Se, s = new M(1, 1, 1);
            function n() {
                i.setFromEuler(t, !1);
            }
            function r() {
                t.setFromQuaternion(i, void 0, !1);
            }
            t._onChange(n), i._onChange(r), Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: t
                },
                quaternion: {
                    configurable: !0,
                    enumerable: !0,
                    value: i
                },
                scale: {
                    configurable: !0,
                    enumerable: !0,
                    value: s
                },
                modelViewMatrix: {
                    value: new Q
                },
                normalMatrix: {
                    value: new de
                }
            }), this.matrix = new Q, this.matrixWorld = new Q, this.matrixAutoUpdate = ce.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Bi, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
        }
        onBeforeShadow() {}
        onAfterShadow() {}
        onBeforeRender() {}
        onAfterRender() {}
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
            this.quaternion.setFromEuler(e, !0);
        }
        setRotationFromMatrix(e) {
            this.quaternion.setFromRotationMatrix(e);
        }
        setRotationFromQuaternion(e) {
            this.quaternion.copy(e);
        }
        rotateOnAxis(e, t) {
            return pe.setFromAxisAngle(e, t), this.quaternion.multiply(pe), this;
        }
        rotateOnWorldAxis(e, t) {
            return pe.setFromAxisAngle(e, t), this.quaternion.premultiply(pe), this;
        }
        rotateX(e) {
            return this.rotateOnAxis(Gt, e);
        }
        rotateY(e) {
            return this.rotateOnAxis($t, e);
        }
        rotateZ(e) {
            return this.rotateOnAxis(qt, e);
        }
        translateOnAxis(e, t) {
            return Vt.copy(e).applyQuaternion(this.quaternion), this.position.add(Vt.multiplyScalar(t)), this;
        }
        translateX(e) {
            return this.translateOnAxis(Gt, e);
        }
        translateY(e) {
            return this.translateOnAxis($t, e);
        }
        translateZ(e) {
            return this.translateOnAxis(qt, e);
        }
        localToWorld(e) {
            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(e) {
            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(X.copy(this.matrixWorld).invert());
        }
        lookAt(e, t, i) {
            e.isVector3 ? Ie.copy(e) : Ie.set(e, t, i);
            const s = this.parent;
            this.updateWorldMatrix(!0, !1), ve.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? X.lookAt(ve, Ie, this.up) : X.lookAt(Ie, ve, this.up), this.quaternion.setFromRotationMatrix(X), s && (X.extractRotation(s.matrixWorld), pe.setFromRotationMatrix(X), this.quaternion.premultiply(pe.invert()));
        }
        add(e) {
            if (arguments.length > 1) {
                for(let t = 0; t < arguments.length; t++)this.add(arguments[t]);
                return this;
            }
            return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(jt), ge.child = e, this.dispatchEvent(ge), ge.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
        }
        remove(e) {
            if (arguments.length > 1) {
                for(let i = 0; i < arguments.length; i++)this.remove(arguments[i]);
                return this;
            }
            const t = this.children.indexOf(e);
            return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(qi), Xe.child = e, this.dispatchEvent(Xe), Xe.child = null), this;
        }
        removeFromParent() {
            const e = this.parent;
            return e !== null && e.remove(this), this;
        }
        clear() {
            return this.remove(...this.children);
        }
        attach(e) {
            return this.updateWorldMatrix(!0, !1), X.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), X.multiply(e.parent.matrixWorld)), e.applyMatrix4(X), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(jt), ge.child = e, this.dispatchEvent(ge), ge.child = null, this;
        }
        getObjectById(e) {
            return this.getObjectByProperty("id", e);
        }
        getObjectByName(e) {
            return this.getObjectByProperty("name", e);
        }
        getObjectByProperty(e, t) {
            if (this[e] === t) return this;
            for(let i = 0, s = this.children.length; i < s; i++){
                const r = this.children[i].getObjectByProperty(e, t);
                if (r !== void 0) return r;
            }
        }
        getObjectsByProperty(e, t, i = []) {
            this[e] === t && i.push(this);
            const s = this.children;
            for(let n = 0, r = s.length; n < r; n++)s[n].getObjectsByProperty(e, t, i);
            return i;
        }
        getWorldPosition(e) {
            return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
        }
        getWorldQuaternion(e) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ve, e, Gi), e;
        }
        getWorldScale(e) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ve, $i, e), e;
        }
        getWorldDirection(e) {
            this.updateWorldMatrix(!0, !1);
            const t = this.matrixWorld.elements;
            return e.set(t[8], t[9], t[10]).normalize();
        }
        raycast() {}
        traverse(e) {
            e(this);
            const t = this.children;
            for(let i = 0, s = t.length; i < s; i++)t[i].traverse(e);
        }
        traverseVisible(e) {
            if (this.visible === !1) return;
            e(this);
            const t = this.children;
            for(let i = 0, s = t.length; i < s; i++)t[i].traverseVisible(e);
        }
        traverseAncestors(e) {
            const t = this.parent;
            t !== null && (e(t), t.traverseAncestors(e));
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
        }
        updateMatrixWorld(e) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
            const t = this.children;
            for(let i = 0, s = t.length; i < s; i++)t[i].updateMatrixWorld(e);
        }
        updateWorldMatrix(e, t) {
            const i = this.parent;
            if (e === !0 && i !== null && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
                const s = this.children;
                for(let n = 0, r = s.length; n < r; n++)s[n].updateWorldMatrix(!1, !0);
            }
        }
        toJSON(e) {
            const t = e === void 0 || typeof e == "string", i = {};
            t && (e = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {},
                nodes: {}
            }, i.metadata = {
                version: 4.7,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            const s = {};
            s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.geometryInfo = this._geometryInfo.map((a)=>({
                    ...a,
                    boundingBox: a.boundingBox ? a.boundingBox.toJSON() : void 0,
                    boundingSphere: a.boundingSphere ? a.boundingSphere.toJSON() : void 0
                })), s.instanceInfo = this._instanceInfo.map((a)=>({
                    ...a
                })), s.availableInstanceIds = this._availableInstanceIds.slice(), s.availableGeometryIds = this._availableGeometryIds.slice(), s.nextIndexStart = this._nextIndexStart, s.nextVertexStart = this._nextVertexStart, s.geometryCount = this._geometryCount, s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.matricesTexture = this._matricesTexture.toJSON(e), s.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (s.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (s.boundingBox = this.boundingBox.toJSON()));
            function n(a, h) {
                return a[h.uuid] === void 0 && (a[h.uuid] = h.toJSON(e)), h.uuid;
            }
            if (this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(e).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                s.geometry = n(e.geometries, this.geometry);
                const a = this.geometry.parameters;
                if (a !== void 0 && a.shapes !== void 0) {
                    const h = a.shapes;
                    if (Array.isArray(h)) for(let l = 0, c = h.length; l < c; l++){
                        const u = h[l];
                        n(e.shapes, u);
                    }
                    else n(e.shapes, h);
                }
            }
            if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (n(e.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
                const a = [];
                for(let h = 0, l = this.material.length; h < l; h++)a.push(n(e.materials, this.material[h]));
                s.material = a;
            } else s.material = n(e.materials, this.material);
            if (this.children.length > 0) {
                s.children = [];
                for(let a = 0; a < this.children.length; a++)s.children.push(this.children[a].toJSON(e).object);
            }
            if (this.animations.length > 0) {
                s.animations = [];
                for(let a = 0; a < this.animations.length; a++){
                    const h = this.animations[a];
                    s.animations.push(n(e.animations, h));
                }
            }
            if (t) {
                const a = r(e.geometries), h = r(e.materials), l = r(e.textures), c = r(e.images), u = r(e.shapes), f = r(e.skeletons), d = r(e.animations), m = r(e.nodes);
                a.length > 0 && (i.geometries = a), h.length > 0 && (i.materials = h), l.length > 0 && (i.textures = l), c.length > 0 && (i.images = c), u.length > 0 && (i.shapes = u), f.length > 0 && (i.skeletons = f), d.length > 0 && (i.animations = d), m.length > 0 && (i.nodes = m);
            }
            return i.object = s, i;
            function r(a) {
                const h = [];
                for(const l in a){
                    const c = a[l];
                    delete c.metadata, h.push(c);
                }
                return h;
            }
        }
        clone(e) {
            return new this.constructor().copy(this, e);
        }
        copy(e, t = !0) {
            if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for(let i = 0; i < e.children.length; i++){
                const s = e.children[i];
                this.add(s.clone());
            }
            return this;
        }
    }
    ce.DEFAULT_UP = new M(0, 1, 0);
    ce.DEFAULT_MATRIX_AUTO_UPDATE = !0;
    ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
    const Fi = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }, se = {
        h: 0,
        s: 0,
        l: 0
    }, Ne = {
        h: 0,
        s: 0,
        l: 0
    };
    function Ze(o, e, t) {
        return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? o + (e - o) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? o + (e - o) * 6 * (2 / 3 - t) : o;
    }
    class ne {
        constructor(e, t, i){
            return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, i);
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
        setHex(e, t = T) {
            return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, W.colorSpaceToWorking(this, t), this;
        }
        setRGB(e, t, i, s = W.workingColorSpace) {
            return this.r = e, this.g = t, this.b = i, W.colorSpaceToWorking(this, s), this;
        }
        setHSL(e, t, i, s = W.workingColorSpace) {
            if (e = zi(e, 1), t = S(t, 0, 1), i = S(i, 0, 1), t === 0) this.r = this.g = this.b = i;
            else {
                const n = i <= .5 ? i * (1 + t) : i + t - i * t, r = 2 * i - n;
                this.r = Ze(r, n, e + 1 / 3), this.g = Ze(r, n, e), this.b = Ze(r, n, e - 1 / 3);
            }
            return W.colorSpaceToWorking(this, s), this;
        }
        setStyle(e, t = T) {
            function i(n) {
                n !== void 0 && parseFloat(n) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
            }
            let s;
            if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
                let n;
                const r = s[1], a = s[2];
                switch(r){
                    case "rgb":
                    case "rgba":
                        if (n = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(n[4]), this.setRGB(Math.min(255, parseInt(n[1], 10)) / 255, Math.min(255, parseInt(n[2], 10)) / 255, Math.min(255, parseInt(n[3], 10)) / 255, t);
                        if (n = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(n[4]), this.setRGB(Math.min(100, parseInt(n[1], 10)) / 100, Math.min(100, parseInt(n[2], 10)) / 100, Math.min(100, parseInt(n[3], 10)) / 100, t);
                        break;
                    case "hsl":
                    case "hsla":
                        if (n = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(n[4]), this.setHSL(parseFloat(n[1]) / 360, parseFloat(n[2]) / 100, parseFloat(n[3]) / 100, t);
                        break;
                    default:
                        console.warn("THREE.Color: Unknown color model " + e);
                }
            } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
                const n = s[1], r = n.length;
                if (r === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
                if (r === 6) return this.setHex(parseInt(n, 16), t);
                console.warn("THREE.Color: Invalid hex color " + e);
            } else if (e && e.length > 0) return this.setColorName(e, t);
            return this;
        }
        setColorName(e, t = T) {
            const i = Fi[e.toLowerCase()];
            return i !== void 0 ? this.setHex(i, t) : console.warn("THREE.Color: Unknown color " + e), this;
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b);
        }
        copy(e) {
            return this.r = e.r, this.g = e.g, this.b = e.b, this;
        }
        copySRGBToLinear(e) {
            return this.r = J(e.r), this.g = J(e.g), this.b = J(e.b), this;
        }
        copyLinearToSRGB(e) {
            return this.r = ye(e.r), this.g = ye(e.g), this.b = ye(e.b), this;
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
        }
        getHex(e = T) {
            return W.workingToColorSpace(C.copy(this), e), Math.round(S(C.r * 255, 0, 255)) * 65536 + Math.round(S(C.g * 255, 0, 255)) * 256 + Math.round(S(C.b * 255, 0, 255));
        }
        getHexString(e = T) {
            return ("000000" + this.getHex(e).toString(16)).slice(-6);
        }
        getHSL(e, t = W.workingColorSpace) {
            W.workingToColorSpace(C.copy(this), t);
            const i = C.r, s = C.g, n = C.b, r = Math.max(i, s, n), a = Math.min(i, s, n);
            let h, l;
            const c = (a + r) / 2;
            if (a === r) h = 0, l = 0;
            else {
                const u = r - a;
                switch(l = c <= .5 ? u / (r + a) : u / (2 - r - a), r){
                    case i:
                        h = (s - n) / u + (s < n ? 6 : 0);
                        break;
                    case s:
                        h = (n - i) / u + 2;
                        break;
                    case n:
                        h = (i - s) / u + 4;
                        break;
                }
                h /= 6;
            }
            return e.h = h, e.s = l, e.l = c, e;
        }
        getRGB(e, t = W.workingColorSpace) {
            return W.workingToColorSpace(C.copy(this), t), e.r = C.r, e.g = C.g, e.b = C.b, e;
        }
        getStyle(e = T) {
            W.workingToColorSpace(C.copy(this), e);
            const t = C.r, i = C.g, s = C.b;
            return e !== T ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(s * 255)})`;
        }
        offsetHSL(e, t, i) {
            return this.getHSL(se), this.setHSL(se.h + e, se.s + t, se.l + i);
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
            this.getHSL(se), e.getHSL(Ne);
            const i = Ge(se.h, Ne.h, t), s = Ge(se.s, Ne.s, t), n = Ge(se.l, Ne.l, t);
            return this.setHSL(i, s, n), this;
        }
        setFromVector3(e) {
            return this.r = e.x, this.g = e.y, this.b = e.z, this;
        }
        applyMatrix3(e) {
            const t = this.r, i = this.g, s = this.b, n = e.elements;
            return this.r = n[0] * t + n[3] * i + n[6] * s, this.g = n[1] * t + n[4] * i + n[7] * s, this.b = n[2] * t + n[5] * i + n[8] * s, this;
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
    const C = new ne;
    ne.NAMES = Fi;
    let ji = 0;
    class Yi extends Rt {
        constructor(){
            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                value: ji++
            }), this.uuid = Ue(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ne(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
        }
        get alphaTest() {
            return this._alphaTest;
        }
        set alphaTest(e) {
            this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
        }
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
            return this.onBeforeCompile.toString();
        }
        setValues(e) {
            if (e !== void 0) for(const t in e){
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
            t && (e = {
                textures: {},
                images: {}
            });
            const i = {
                metadata: {
                    version: 4.7,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (i.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (i.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (i.blending = this.blending), this.side !== 0 && (i.side = this.side), this.vertexColors === !0 && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = !0), this.blendSrc !== 204 && (i.blendSrc = this.blendSrc), this.blendDst !== 205 && (i.blendDst = this.blendDst), this.blendEquation !== 100 && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (i.depthFunc = this.depthFunc), this.depthTest === !1 && (i.depthTest = this.depthTest), this.depthWrite === !1 && (i.depthWrite = this.depthWrite), this.colorWrite === !1 && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (i.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (i.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === !0 && (i.alphaHash = !0), this.alphaToCoverage === !0 && (i.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0), this.forceSinglePass === !0 && (i.forceSinglePass = !0), this.wireframe === !0 && (i.wireframe = !0), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = !0), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
            function s(n) {
                const r = [];
                for(const a in n){
                    const h = n[a];
                    delete h.metadata, r.push(h);
                }
                return r;
            }
            if (t) {
                const n = s(e.textures), r = s(e.images);
                n.length > 0 && (i.textures = n), r.length > 0 && (i.images = r);
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
                for(let n = 0; n !== s; ++n)i[n] = t[n].clone();
            }
            return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        set needsUpdate(e) {
            e === !0 && this.version++;
        }
    }
    class O extends Yi {
        constructor(e){
            super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = {
                STANDARD: ""
            }, this.color = new ne(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ne(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new he(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Me, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
        }
        copy(e) {
            return super.copy(e), this.defines = {
                STANDARD: ""
            }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
        }
    }
    const Je = {
        enabled: !1,
        files: {},
        add: function(o, e) {
            this.enabled !== !1 && (this.files[o] = e);
        },
        get: function(o) {
            if (this.enabled !== !1) return this.files[o];
        },
        remove: function(o) {
            delete this.files[o];
        },
        clear: function() {
            this.files = {};
        }
    };
    class Xi {
        constructor(e, t, i){
            const s = this;
            let n = !1, r = 0, a = 0, h;
            const l = [];
            this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this.abortController = new AbortController, this.itemStart = function(c) {
                a++, n === !1 && s.onStart !== void 0 && s.onStart(c, r, a), n = !0;
            }, this.itemEnd = function(c) {
                r++, s.onProgress !== void 0 && s.onProgress(c, r, a), r === a && (n = !1, s.onLoad !== void 0 && s.onLoad());
            }, this.itemError = function(c) {
                s.onError !== void 0 && s.onError(c);
            }, this.resolveURL = function(c) {
                return h ? h(c) : c;
            }, this.setURLModifier = function(c) {
                return h = c, this;
            }, this.addHandler = function(c, u) {
                return l.push(c, u), this;
            }, this.removeHandler = function(c) {
                const u = l.indexOf(c);
                return u !== -1 && l.splice(u, 2), this;
            }, this.getHandler = function(c) {
                for(let u = 0, f = l.length; u < f; u += 2){
                    const d = l[u], m = l[u + 1];
                    if (d.global && (d.lastIndex = 0), d.test(c)) return m;
                }
                return null;
            }, this.abort = function() {
                return this.abortController.abort(), this.abortController = new AbortController, this;
            };
        }
    }
    const Zi = new Xi;
    class Lt {
        constructor(e){
            this.manager = e !== void 0 ? e : Zi, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
        }
        load() {}
        loadAsync(e, t) {
            const i = this;
            return new Promise(function(s, n) {
                i.load(e, s, t, n);
            });
        }
        parse() {}
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
    Lt.DEFAULT_MATERIAL_NAME = "__DEFAULT";
    const xe = new WeakMap;
    class Ji extends Lt {
        constructor(e){
            super(e);
        }
        load(e, t, i, s) {
            this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
            const n = this, r = Je.get(`image:${e}`);
            if (r !== void 0) {
                if (r.complete === !0) n.manager.itemStart(e), setTimeout(function() {
                    t && t(r), n.manager.itemEnd(e);
                }, 0);
                else {
                    let u = xe.get(r);
                    u === void 0 && (u = [], xe.set(r, u)), u.push({
                        onLoad: t,
                        onError: s
                    });
                }
                return r;
            }
            const a = Et("img");
            function h() {
                c(), t && t(this);
                const u = xe.get(this) || [];
                for(let f = 0; f < u.length; f++){
                    const d = u[f];
                    d.onLoad && d.onLoad(this);
                }
                xe.delete(this), n.manager.itemEnd(e);
            }
            function l(u) {
                c(), s && s(u), Je.remove(`image:${e}`);
                const f = xe.get(this) || [];
                for(let d = 0; d < f.length; d++){
                    const m = f[d];
                    m.onError && m.onError(u);
                }
                xe.delete(this), n.manager.itemError(e), n.manager.itemEnd(e);
            }
            function c() {
                a.removeEventListener("load", h, !1), a.removeEventListener("error", l, !1);
            }
            return a.addEventListener("load", h, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), Je.add(`image:${e}`, a), n.manager.itemStart(e), a.src = e, a;
        }
    }
    class L extends Lt {
        constructor(e){
            super(e);
        }
        load(e, t, i, s) {
            const n = new K, r = new Ji(this.manager);
            return r.setCrossOrigin(this.crossOrigin), r.setPath(this.path), r.load(e, function(a) {
                n.image = a, n.needsUpdate = !0, t !== void 0 && t(n);
            }, i, s), n;
        }
    }
    typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: "180"
        }
    }));
    typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "180");
    const Ki = 256;
    function Qi(o, e = Ki) {
        let t = 1;
        for(; Math.ceil(o / t) > e;)t *= 2;
        return t;
    }
    let Ai = {
        editorColors: new Map
    };
    function es(o) {
        Ai = o;
    }
    function ts(o) {
        return Ai.editorColors.get(o);
    }
    const ue = {
        ROUGHNESS: .85,
        METALNESS: 0
    }, We = {
        RADIUS: 1.25,
        CONE_SCALE: 2.6,
        FEATHER: .7,
        ACTOR_MARGIN: .6
    }, is = .25, U = [
        "varying vec3 vVoxelAoWorldPosition;",
        "varying vec3 vVoxelAoWorldNormal;"
    ], B = [
        "vVoxelAoWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
        "vVoxelAoWorldNormal = normalize(mat3(modelMatrix) * normal);"
    ], ss = [
        "uniform highp sampler3D voxelAoOccupancy;",
        "uniform vec3 voxelAoOrigin;",
        "uniform vec3 voxelAoSize;",
        "uniform float voxelAoRadius;",
        "uniform float voxelAoVoxelSize;",
        "varying vec3 vVoxelAoWorldPosition;",
        "varying vec3 vVoxelAoWorldNormal;",
        "float sampleVoxelAoOccupancy(vec3 worldPos) {",
        "	vec3 uvw = (worldPos - voxelAoOrigin) / voxelAoSize;",
        "	if (any(lessThan(uvw, vec3(0.0))) || any(greaterThan(uvw, vec3(1.0)))) return 0.0;",
        "	return texture(voxelAoOccupancy, uvw).r;",
        "}",
        "float computeVoxelAo(vec3 worldPos, vec3 normal) {",
        "	vec3 absN = abs(normal);",
        "	vec3 T1; vec3 T2;",
        "	if (absN.y > 0.5)      { T1 = vec3(1.0, 0.0, 0.0); T2 = vec3(0.0, 0.0, 1.0); }",
        "	else if (absN.x > 0.5) { T1 = vec3(0.0, 1.0, 0.0); T2 = vec3(0.0, 0.0, 1.0); }",
        "	else                   { T1 = vec3(1.0, 0.0, 0.0); T2 = vec3(0.0, 1.0, 0.0); }",
        "	vec3 base = worldPos + normal * (voxelAoVoxelSize * 0.5);",
        "	float r = voxelAoRadius;",
        "	float sides = 0.0;",
        "	sides += sampleVoxelAoOccupancy(base + T1 * r);",
        "	sides += sampleVoxelAoOccupancy(base - T1 * r);",
        "	sides += sampleVoxelAoOccupancy(base + T2 * r);",
        "	sides += sampleVoxelAoOccupancy(base - T2 * r);",
        "	float occ = sides / 4.0;",
        "	return mix(0.45, 1.0, 1.0 - occ);",
        "}"
    ], ns = [
        "uniform highp sampler3D voxelAoOccupancy;",
        "uniform vec3 voxelAoOrigin;",
        "uniform vec3 voxelAoSize;",
        "uniform float voxelAoRadius;",
        "uniform float voxelAoVoxelSize;",
        "varying vec3 vVoxelAoWorldPosition;",
        "varying vec3 vVoxelAoWorldNormal;",
        "float sampleVoxelAoOccupancy(vec3 worldPos) {",
        "	vec3 uvw = (worldPos - voxelAoOrigin) / voxelAoSize;",
        "	if (any(lessThan(uvw, vec3(0.0))) || any(greaterThan(uvw, vec3(1.0)))) return 0.0;",
        "	return texture(voxelAoOccupancy, uvw).r;",
        "}",
        "float computeVoxelAo(vec3 worldPos, vec3 normal) {",
        "	vec3 absN = abs(normal);",
        "	vec3 T1; vec3 T2;",
        "	if (absN.y > 0.5)      { T1 = vec3(1.0, 0.0, 0.0); T2 = vec3(0.0, 0.0, 1.0); }",
        "	else if (absN.x > 0.5) { T1 = vec3(0.0, 1.0, 0.0); T2 = vec3(0.0, 0.0, 1.0); }",
        "	else                   { T1 = vec3(1.0, 0.0, 0.0); T2 = vec3(0.0, 1.0, 0.0); }",
        "	vec3 base = worldPos + normal * (voxelAoVoxelSize * 0.5);",
        "	float r = voxelAoRadius;",
        "	float sides = 0.0;",
        "	sides += sampleVoxelAoOccupancy(base + T1 * r);",
        "	sides += sampleVoxelAoOccupancy(base - T1 * r);",
        "	sides += sampleVoxelAoOccupancy(base + T2 * r);",
        "	sides += sampleVoxelAoOccupancy(base - T2 * r);",
        "	float occ = sides / 4.0;",
        "	return mix(0.52, 1.0, 1.0 - occ);",
        "}"
    ];
    function P(o = !1) {
        return o ? ns : ss;
    }
    const b = "computeVoxelAo(vVoxelAoWorldPosition, vVoxelAoWorldNormal)";
    function V(o, e) {
        o.uniforms.voxelAoOccupancy = {
            value: e.texture
        }, o.uniforms.voxelAoOrigin = {
            value: e.origin
        }, o.uniforms.voxelAoSize = {
            value: e.size
        }, o.uniforms.voxelAoRadius = {
            value: is
        }, o.uniforms.voxelAoVoxelSize = {
            value: e.voxelSize
        };
    }
    let ke = null;
    function rs() {
        if (ke) return ke;
        const o = new Uint8Array(4), e = new Di(o, 1, 1, 1);
        return e.format = 1023, e.type = 1009, e.magFilter = 1003, e.minFilter = 1003, e.wrapS = 1001, e.wrapT = 1001, e.wrapR = 1001, e.generateMipmaps = !1, e.needsUpdate = !0, ke = {
            texture: e,
            data: o,
            width: 1,
            heightLevels: 1,
            length: 1
        }, ke;
    }
    const G = [
        "attribute float tileHeight;",
        "attribute float highlightStrength;",
        "varying float vMovementHighlightHeight;",
        "varying float vMovementHighlightStrength;"
    ], $ = [
        "vMovementHighlightHeight = tileHeight;",
        "vMovementHighlightStrength = highlightStrength;"
    ], q = [
        "uniform highp sampler3D movementHighlightMap;",
        "uniform vec2 movementHighlightSize;",
        "uniform float movementHighlightHeightLevels;",
        "uniform float uHighlightEnabled;",
        "varying float vMovementHighlightHeight;",
        "varying float vMovementHighlightStrength;"
    ], j = [
        "if (uHighlightEnabled > 0.5) {",
        "	vec3 movementOwnerPosition = vVoxelAoWorldPosition - vVoxelAoWorldNormal * 0.002;",
        "	vec2 movementTileCoord = clamp(",
        "		floor(movementOwnerPosition.xz + movementHighlightSize * 0.5),",
        "		vec2(0.0),",
        "		movementHighlightSize - vec2(1.0)",
        "	);",
        "	float movementTileHeight = clamp(vMovementHighlightHeight, 0.0, movementHighlightHeightLevels - 1.0);",
        "	vec3 movementHighlightUvw = vec3(",
        "		(movementTileCoord.x + 0.5) / movementHighlightSize.x,",
        "		(movementTileHeight + 0.5) / movementHighlightHeightLevels,",
        "		(movementTileCoord.y + 0.5) / movementHighlightSize.y",
        "	);",
        "	vec4 movementHighlight = texture(movementHighlightMap, movementHighlightUvw);",
        "	if (movementHighlight.a > 0.0 && vMovementHighlightStrength > 0.0) {",
        "		vec3 baseColor = gl_FragColor.rgb;",
        "		float baseLuma = dot(baseColor, vec3(0.2126, 0.7152, 0.0722));",
        "		vec2 tileLocal = fract(movementOwnerPosition.xz + movementHighlightSize * 0.5);",
        "		float edgeDistance = min(min(tileLocal.x, 1.0 - tileLocal.x), min(tileLocal.y, 1.0 - tileLocal.y));",
        "		float edgeBand = 1.0 - smoothstep(0.025, 0.11, edgeDistance);",
        "		float markAlpha = clamp(movementHighlight.a * (1.35 + edgeBand * 0.75) * vMovementHighlightStrength, 0.0, 0.92);",
        "		vec3 screened = 1.0 - (1.0 - baseColor) * (1.0 - movementHighlight.rgb * 0.85);",
        "		vec3 marked = mix(baseColor, screened, markAlpha);",
        "		marked = max(marked, movementHighlight.rgb * movementHighlight.a * (0.65 + 0.55 * vMovementHighlightStrength));",
        "		vec3 contrastEdge = mix(vec3(1.0), vec3(0.035), step(0.58, baseLuma));",
        "		vec3 edgeColor = mix(movementHighlight.rgb, contrastEdge, 0.45);",
        "		gl_FragColor.rgb = mix(marked, edgeColor, edgeBand * movementHighlight.a * 0.7 * vMovementHighlightStrength);",
        "	}",
        "}",
        "#include <dithering_fragment>"
    ];
    function Y(o, e) {
        const t = e ?? rs();
        o.uniforms.movementHighlightMap = {
            value: t.texture
        }, o.uniforms.movementHighlightSize = {
            value: new he(t.width, t.length)
        }, o.uniforms.movementHighlightHeightLevels = {
            value: t.heightLevels
        }, o.uniforms.uHighlightEnabled = {
            value: e ? 1 : 0
        };
    }
    function os() {
        return {
            enabled: {
                value: 0
            },
            actorPos: {
                value: new M
            },
            camPos: {
                value: new M
            },
            radius: {
                value: We.RADIUS
            },
            coneScale: {
                value: We.CONE_SCALE
            },
            feather: {
                value: We.FEATHER
            },
            cutY: {
                value: 0
            },
            cutSign: {
                value: 1
            }
        };
    }
    let Ke = null;
    function as() {
        return Ke || (Ke = os()), Ke;
    }
    const z = [
        "varying vec3 vHeroWorldPos;"
    ], I = [
        "vHeroWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;"
    ], N = [
        "uniform float uHeroEnabled;",
        "uniform vec3 uHeroActorPos;",
        "uniform vec3 uHeroCamPos;",
        "uniform float uHeroRadius;",
        "uniform float uHeroConeScale;",
        "uniform float uHeroFeather;",
        "uniform float uHeroCutY;",
        "uniform float uHeroCutSign;",
        "varying vec3 vHeroWorldPos;",
        "float heroDither(vec2 fc) {",
        "	return fract(52.9829189 * fract(dot(fc, vec2(0.06711056, 0.00583715))));",
        "}",
        "bool heroOccluded(vec3 P) {",
        "	if ((P.y - uHeroCutY) * uHeroCutSign < 0.0) return false;",
        "	vec3 toActor = uHeroActorPos - uHeroCamPos;",
        "	float distAct = length(toActor);",
        "	if (distAct < 0.0001) return false;",
        "	vec3 axis = toActor / distAct;",
        "	float t = dot(P - uHeroCamPos, axis);",
        `	if (t <= 0.0 || t >= distAct - ${We.ACTOR_MARGIN.toFixed(3)}) return false;`,
        "	float radial = length((P - uHeroCamPos) - axis * t);",
        "	float coneR = uHeroRadius * mix(1.0, uHeroConeScale, 1.0 - t / distAct);",
        "	if (radial > coneR + uHeroFeather) return false;",
        "	float edge = smoothstep(coneR + uHeroFeather, coneR, radial);",
        "	return edge > heroDither(gl_FragCoord.xy);",
        "}"
    ], k = [
        "#include <clipping_planes_fragment>",
        "if (uHeroEnabled > 0.5 && heroOccluded(vHeroWorldPos)) discard;"
    ];
    function H(o, e) {
        const t = e ?? as();
        o.uniforms.uHeroEnabled = t.enabled, o.uniforms.uHeroActorPos = t.actorPos, o.uniforms.uHeroCamPos = t.camPos, o.uniforms.uHeroRadius = t.radius, o.uniforms.uHeroConeScale = t.coneScale, o.uniforms.uHeroFeather = t.feather, o.uniforms.uHeroCutY = t.cutY, o.uniforms.uHeroCutSign = t.cutSign;
    }
    function ls(o, e, t, i, s) {
        o.onBeforeCompile = (n)=>{
            V(n, e), Y(n, t), H(n, i), n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...U,
                ...G,
                ...z
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...B,
                ...$,
                ...I
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...P(s),
                ...q,
                ...N
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <clipping_planes_fragment>", k.join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", `#include <color_fragment>
diffuseColor.rgb *= ${b};`), n.fragmentShader = n.fragmentShader.replace("#include <dithering_fragment>", j.join(`
`));
        };
    }
    const hs = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = new O({
            roughness: ue.ROUGHNESS,
            metalness: ue.METALNESS,
            vertexColors: !0
        });
        return ls(n, t, e, i, s), {
            material: n,
            castShadow: !0,
            receiveShadow: !0
        };
    }, De = {
        bucketKey: "default",
        occlusionGroup: "solid",
        shaderVersion: 4,
        factory: hs
    }, cs = "/materials/flesh_250/flesh_noise_64x64.png", us = "#cc2244", ds = .45, fs = .7, ms = 0, ps = .4, Yt = .5, gs = .25, xs = 1.2;
    let Qe = null;
    function ys() {
        if (!Qe) {
            const o = new L().load(cs);
            o.colorSpace = bt, o.wrapS = 1e3, o.wrapT = 1e3, o.magFilter = 1006, o.minFilter = 1006, o.generateMipmaps = !1, Qe = o;
        }
        return Qe;
    }
    const vs = [
        "mat2 fleshRM2D(float a) {",
        "    return mat2(cos(a), sin(a), -sin(a), cos(a));",
        "}",
        "float fleshAperiodicSin(float x) {",
        "    float eOver2 = 1.3591409;",
        "    float pi = 3.141592;",
        "    return sin(eOver2 * x + 1.04) * sin(pi * x);",
        "}",
        "float fleshFBM(vec2 uv, float t, bool highQuality) {",
        "    vec2 n, q, u = uv;",
        "    float centeredDot = 0.25;",
        "    float frequency = 15.0 - (0.5 - centeredDot) * 8.0;",
        "    float result = 0.0;",
        "    mat2 matrix = fleshRM2D(5.0);",
        "    float iters = highQuality ? 16.0 : 8.0;",
        "    for (float i = 0.0; i < 16.0; i++) {",
        "        if (i >= iters) break;",
        "        u = matrix * u;",
        "        n = matrix * n;",
        `        q = u * frequency + t * ${ps.toFixed(4)}`,
        `          + fleshAperiodicSin(t * ${Yt.toFixed(4)} - centeredDot * 1.2) * 0.4 * ${Yt.toFixed(4)}`,
        "          + i + n;",
        "        result += dot(cos(q) / frequency, vec2(2.0, 2.0));",
        "        n -= sin(q);",
        "        frequency *= 1.18;",
        "    }",
        "    return result;",
        "}",
        "float fleshDiffuse(vec3 n, vec3 lightDir) {",
        "    return pow(max(dot(n, lightDir), 0.0), 20.0) * 0.3;",
        "}",
        "float fleshSpecular(vec3 n, vec3 lightDir, vec3 pos) {",
        "    vec3 src = vec3(0.9, 0.1, 1.0);",
        "    vec3 refl = reflect(-lightDir, n);",
        "    vec3 viewDir = normalize(src - pos);",
        "    return pow(max(dot(viewDir, refl), 0.0), 50.0);",
        "}"
    ].join(`
`);
    function _s() {
        return [
            ...U,
            "uniform float uFleshTime;"
        ];
    }
    function Ss() {
        return [
            ...B
        ];
    }
    function Ms(o) {
        return [
            ...P(o),
            "uniform float uFleshTime;",
            "uniform sampler2D uFleshNoise;",
            "vec2 getFleshUv(vec3 worldPos, vec3 worldNormal) {",
            "    vec3 n = abs(normalize(worldNormal));",
            "    if (n.y >= n.x && n.y >= n.z) return worldPos.xz;",
            "    if (n.x >= n.z) return worldPos.zy;",
            "    return worldPos.xy;",
            "}",
            vs
        ];
    }
    function ws(o) {
        return [
            "#include <color_fragment>",
            `vec2 fleshUvWorld = getFleshUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${ds.toFixed(4)};`,
            `float fleshOriginalNoise = fleshFBM(fleshUvWorld, uFleshTime, ${o ? "false" : "true"});`,
            "float fleshNoise = clamp(fleshOriginalNoise, 0.0, 1.0);",
            `float fleshFluidNoiseAngle = fleshOriginalNoise * 13.05 + uFleshTime * ${gs.toFixed(4)};`,
            "vec2 fleshFluidOffset = vec2(",
            "    cos(fleshFluidNoiseAngle) + fleshOriginalNoise * 14.0,",
            `    sin(fleshFluidNoiseAngle) + uFleshTime * ${xs.toFixed(4)}`,
            ") / 681.72;",
            "float fleshFluidSample = texture2D(uFleshNoise, fleshUvWorld * 0.12 + fleshFluidOffset).x;",
            "float fleshFluidNoise = pow(fleshFluidSample, 5.5 * 0.5) * 0.27;",
            "fleshNoise += fleshFluidNoise * smoothstep(0.4, 0.0, fleshNoise);",
            "vec3 fleshLightSrc = vec3(0.76, 0.7, 0.0);",
            "vec3 fleshPos3 = vec3(fract(fleshUvWorld) - 0.5, 1.0);",
            "vec3 fleshLightDir = normalize(fleshPos3 - fleshLightSrc);",
            "vec3 fleshNormalVec = normalize(vec3(dFdx(fleshNoise), dFdy(fleshNoise), clamp(fleshOriginalNoise * 0.01, 0.0, 1.0)));",
            "float fleshBrightness = fleshDiffuse(fleshNormalVec, fleshLightDir);",
            "fleshNoise += fleshBrightness;",
            "vec3 fleshBaseColor = vec3(fleshNoise * 1.0, 0.0, fleshNoise * 0.2);",
            `fleshBaseColor *= ${b};`,
            "diffuseColor = vec4(clamp(fleshBaseColor, 0.0, 1.0), 1.0);"
        ];
    }
    const Fs = [
        "gl_FragColor.rgb += vec3(1.0, 0.35, 0.2) * fleshBrightness;",
        "float fleshSpecVal = fleshSpecular(fleshNormalVec, fleshLightDir, fleshPos3);",
        "float fleshSpecBase = 1.0 - clamp(dot(normalize(vec3(0.9, 0.1, 1.0) - fleshPos3), reflect(-fleshLightDir, fleshNormalVec)), 0.0, 1.0);",
        "float fleshSpecExp = pow(fleshSpecBase, 0.2);",
        "float fleshSpecR = fleshSpecExp + 4.0 * (1.0 - fleshSpecExp);",
        "gl_FragColor.rgb += vec3(1.0, 0.8, 0.8) * 0.4 * fleshSpecVal * fleshSpecR;",
        "vec3 fleshFresnelNrm = normalize(fleshNormalVec);",
        "float fleshFresnelBase = 1.0 - dot(normalize(vec3(0.9, 0.1, 1.0) - fleshPos3), fleshFresnelNrm);",
        "float fleshFresnelExp = pow(fleshFresnelBase, 0.2);",
        "float fleshFresnelR = (fleshFresnelExp + 1.0 * (1.0 - fleshFresnelExp)) * 0.05;",
        "gl_FragColor.rgb += vec3(1.0, 0.05, 0.2) * clamp(fleshFresnelR, 0.04, 1.0);",
        "gl_FragColor.rgb += vec3(1.0, 0.05, 0.2) * 0.02;"
    ].join(`
`);
    function As() {
        return Fs + `
` + j.join(`
`);
    }
    function bs(o, e, t, i, s, n, r) {
        o.onBeforeCompile = (a)=>{
            V(a, i), a.uniforms.uFleshTime = t, a.uniforms.uFleshNoise = {
                value: e
            }, Y(a, s), H(a, n), a.vertexShader = a.vertexShader.replace("#include <common>", [
                "#include <common>",
                ..._s(),
                ...G,
                ...z
            ].join(`
`)), a.vertexShader = a.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Ss(),
                ...$,
                ...I
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Ms(r),
                ...q,
                ...N
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <clipping_planes_fragment>", k.join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <color_fragment>", ws(r).join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <dithering_fragment>", As());
        };
    }
    const Es = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = ys(), r = {
            value: 0
        }, a = new O({
            roughness: fs,
            metalness: ms,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return bs(a, n, r, t, e, i, s), {
            material: a,
            onAnimationFrame: (l)=>{
                r.value = l * .001;
            },
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, Cs = {
        bucketKey: "flesh_250",
        occlusionGroup: "flesh_250",
        shaderVersion: 6,
        geometry: {
            vertexColors: !1
        },
        factory: Es,
        special: {
            paletteIndex: 250,
            label: "Flesh",
            swatchColor: us
        }
    }, Ts = "#cfd4dc", Rs = {
        bucketKey: "fog_251",
        occlusionGroup: "fog_251",
        shaderVersion: 1,
        passable: !0,
        volumetric: !0,
        special: {
            paletteIndex: 251,
            label: "Fog",
            swatchColor: Ts
        }
    }, Ls = "#a8d8f0", Os = "#cce8ff", zs = .05, Is = 0, Ns = .22;
    function ks(o, e) {
        o.onBeforeCompile = (t)=>{
            H(t, e), t.vertexShader = t.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...z
            ].join(`
`)), t.vertexShader = t.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...I
            ].join(`
`)), t.fragmentShader = t.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...N
            ].join(`
`)), t.fragmentShader = t.fragmentShader.replace("#include <clipping_planes_fragment>", k.join(`
`));
        };
    }
    const Hs = (o)=>{
        const { heroOcclusion: e } = o, t = new O({
            color: Os,
            roughness: zs,
            metalness: Is,
            vertexColors: !1,
            transparent: !0,
            opacity: Ns,
            depthWrite: !1
        });
        return ks(t, e), {
            material: t,
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 2
        };
    }, Ws = {
        bucketKey: "glass_246",
        occlusionGroup: "glass_246",
        shaderVersion: 3,
        geometry: {
            vertexColors: !1
        },
        factory: Hs,
        special: {
            paletteIndex: 246,
            label: "Glass",
            swatchColor: Ls,
            category: "buildings"
        }
    }, bi = "#CFB53B", et = .6, tt = [
        .9,
        .72,
        .12
    ], it = [
        .6,
        .32,
        .04
    ], Ds = .5, Ps = 0, Us = "#aa4400", Bs = .25, Vs = [
        "mat2 goldRot(float a) { return mat2(sin(a), cos(a), -cos(a), sin(a)); }",
        "float goldNoise(in vec2 x) { return smoothstep(0.,1.,sin(1.5*x.x)*sin(1.5*x.y)); }",
        "float goldFbm(vec2 p) {",
        "	mat2 m = goldRot(0.4);",
        "	float f = 0.0;",
        "	f += 0.500000*(0.5+0.5*goldNoise(p)); p = m*p*2.02;",
        "	f += 0.250000*(0.5+0.5*goldNoise(p)); p = m*p*2.03;",
        "	f += 0.125000*(0.5+0.5*goldNoise(p)); p = m*p*2.01;",
        "	f += 0.015625*(0.5+0.5*goldNoise(p));",
        "	return f/0.96875;",
        "}",
        "float goldFbmLow(vec2 p) {",
        "	mat2 m = goldRot(0.4);",
        "	float f = 0.0;",
        "	f += 0.500000*(0.5+0.5*goldNoise(p)); p = m*p*2.02;",
        "	f += 0.250000*(0.5+0.5*goldNoise(p));",
        "	return f/0.75;",
        "}",
        "float goldPattern(in vec2 p, out vec2 q, out vec2 r) {",
        "	q.x = goldFbm( 2.0*p );",
        "	q.y = goldFbm( 1.5*p + vec2(5.2, 1.3) );",
        "	r.x = goldFbm( p + 4.*q + vec2(1.7, 9.2) + 0.9*sin(30.*length(q)) );",
        "	r.y = goldFbm( p + 8.*q + vec2(9.3, 2.8) + 0.9*sin(20.*length(q)) );",
        "	return goldFbm( p + 7.*r*goldRot(0.0) );",
        "}",
        "float goldPatternLow(in vec2 p, out vec2 q, out vec2 r) {",
        "	q.x = goldFbmLow( 2.0*p );",
        "	q.y = goldFbmLow( 1.5*p + vec2(5.2, 1.3) );",
        "	r.x = goldFbmLow( p + 4.*q + vec2(1.7, 9.2) );",
        "	r.y = goldFbmLow( p + 8.*q + vec2(9.3, 2.8) );",
        "	return goldFbmLow( p + 7.*r*goldRot(0.0) );",
        "}"
    ].join(`
`);
    function Gs() {
        return [
            ...U
        ];
    }
    function $s() {
        return [
            ...B
        ];
    }
    function qs(o) {
        return [
            ...P(o),
            Vs,
            `const vec3 G_COL1 = vec3(${tt[0].toFixed(3)}, ${tt[1].toFixed(3)}, ${tt[2].toFixed(3)});`,
            `const vec3 G_COL2 = vec3(${it[0].toFixed(3)}, ${it[1].toFixed(3)}, ${it[2].toFixed(3)});`
        ];
    }
    function js(o) {
        const e = [
            "vec3 gNrm = normalize(vVoxelAoWorldNormal);",
            "bool gIsBottom = gNrm.y < -0.5;",
            "vec2 gUv = vec2(0.0);",
            "if (!gIsBottom) {",
            "	if (abs(gNrm.x) > abs(gNrm.z) && abs(gNrm.x) > abs(gNrm.y)) {",
            `		gUv = vVoxelAoWorldPosition.zy * ${et.toFixed(3)};`,
            "	} else if (abs(gNrm.z) > abs(gNrm.y)) {",
            `		gUv = vVoxelAoWorldPosition.xy * ${et.toFixed(3)};`,
            "	} else {",
            `		gUv = vVoxelAoWorldPosition.xz * ${et.toFixed(3)};`,
            "	}",
            "}"
        ], i = [
            "	vec2 gQ = vec2(0.0), gR = vec2(0.0);",
            `	${o ? "float gF = goldPatternLow(gUv, gQ, gR);" : "float gF = goldPattern(gUv, gQ, gR);"}`,
            "	vec3 gC = mix(G_COL1, vec3(0.0), pow(smoothstep(0., 0.9, gF), 2.));",
            "	gC += G_COL2 * pow(smoothstep(0., 0.8, dot(gQ, gR)*0.6), 3.) * 1.5;",
            "	gC *= pow(dot(gQ, gR) + 0.3, 3.);",
            "	gC *= gF * 1.5;",
            `	gC *= ${b};`,
            "	diffuseColor = vec4(gC, 1.0);"
        ];
        return [
            ...e,
            "if (gIsBottom) {",
            `	diffuseColor = vec4(G_COL2 * 0.3 * ${b}, 1.0);`,
            "} else {",
            ...i,
            "}"
        ];
    }
    function Ys(o, e, t, i, s) {
        o.onBeforeCompile = (n)=>{
            V(n, e), Y(n, t), H(n, i), n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Gs(),
                ...G,
                ...z
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...$s(),
                ...$,
                ...I
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...qs(s),
                ...q,
                ...N
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", js(s).join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <clipping_planes_fragment>", k.join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <dithering_fragment>", j.join(`
`));
        };
    }
    const Xs = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = new O({
            color: bi,
            emissive: new ne(Us),
            emissiveIntensity: Bs,
            roughness: Ds,
            metalness: Ps,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return Ys(n, t, e, i, s), {
            material: n,
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, Zs = {
        bucketKey: "gold_247",
        occlusionGroup: "solid",
        shaderVersion: 5,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !1,
            deformSurface: !1
        },
        factory: Xs,
        special: {
            paletteIndex: 247,
            label: "Gold",
            swatchColor: bi,
            category: "metals"
        }
    }, Xt = "/materials/grass_242/grass_02_base_1k.png", Js = "/materials/grass_242/grass_02_normal_gl_1k.png", Ks = "/materials/grass_242/grass_02_roughness_1k.png", Qs = "/materials/grass_242/grass_02_amibent_occlusion_1k.png", en = "#4f8f37", Ot = .75, tn = 1.45, sn = .45, Zt = .86, Ct = 1, nn = 8, rn = 1;
    let st = null, nt = null, rt = null, ot = null, at = null;
    function _e(o, e = !1) {
        return o.wrapS = 1e3, o.wrapT = 1e3, o.magFilter = 1006, o.minFilter = e ? 1006 : 1008, o.anisotropy = e ? rn : nn, o.generateMipmaps = !e, o;
    }
    function on(o) {
        if (o) {
            if (!nt) {
                const t = _e(new L().load(Xt), !0);
                t.colorSpace = T, nt = t;
            }
            return nt;
        }
        if (st) return st;
        const e = _e(new L().load(Xt), !1);
        return e.colorSpace = T, st = e, e;
    }
    function an() {
        if (rt) return rt;
        const o = _e(new L().load(Js), !1);
        return rt = o, o;
    }
    function ln() {
        if (ot) return ot;
        const o = _e(new L().load(Ks), !1);
        return ot = o, o;
    }
    function hn() {
        if (at) return at;
        const o = _e(new L().load(Qs), !1);
        return at = o, o;
    }
    function cn() {
        return [
            ...U
        ];
    }
    function un() {
        return [
            ...B
        ];
    }
    function dn(o) {
        const e = [
            ...P(!1),
            "uniform sampler2D grassMap;"
        ];
        return o ? [
            ...P(!0),
            "uniform sampler2D grassMap;",
            "vec2 getGrassUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ] : [
            ...e,
            "uniform sampler2D grassNormalMap;",
            "uniform sampler2D grassRoughnessMap;",
            "uniform sampler2D grassAoMap;",
            "vec2 getGrassUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}",
            "mat3 grassGetTangentFrame(vec3 eyePosition, vec3 surfaceNormal, vec2 uv) {",
            "	vec3 q0 = dFdx(eyePosition.xyz);",
            "	vec3 q1 = dFdy(eyePosition.xyz);",
            "	vec2 st0 = dFdx(uv.st);",
            "	vec2 st1 = dFdy(uv.st);",
            "	vec3 q1perp = cross(q1, surfaceNormal);",
            "	vec3 q0perp = cross(surfaceNormal, q0);",
            "	vec3 tangent = q1perp * st0.x + q0perp * st1.x;",
            "	vec3 bitangent = q1perp * st0.y + q0perp * st1.y;",
            "	float determinant = max(dot(tangent, tangent), dot(bitangent, bitangent));",
            "	float scale = determinant == 0.0 ? 0.0 : inversesqrt(determinant);",
            "	return mat3(tangent * scale, bitangent * scale, surfaceNormal);",
            "}"
        ];
    }
    function fn(o) {
        const e = [
            "#include <color_fragment>",
            `vec2 grassUv = getGrassUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Ot.toFixed(2)};`,
            "vec4 grassTexel = texture2D(grassMap, grassUv);",
            "diffuseColor.rgb *= grassTexel.rgb;",
            "diffuseColor.a *= grassTexel.a;",
            `diffuseColor.rgb *= ${b};`
        ];
        return o || e.splice(3, 0, "float grassMicroAo = mix(1.0, texture2D(grassAoMap, grassUv).r, " + sn.toFixed(2) + ");", "diffuseColor.rgb *= grassMicroAo;"), e;
    }
    function mn() {
        return [
            "#include <roughnessmap_fragment>",
            `vec2 grassRoughnessUv = getGrassUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Ot.toFixed(2)};`,
            "float grassRoughnessSample = texture2D(grassRoughnessMap, grassRoughnessUv).g;",
            `roughnessFactor = clamp(mix(${Zt.toFixed(2)}, ${Ct.toFixed(2)}, grassRoughnessSample), ${Zt.toFixed(2)}, ${Ct.toFixed(2)});`
        ];
    }
    function pn() {
        return [
            `vec2 grassNormalUv = getGrassUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Ot.toFixed(2)};`,
            "vec3 grassMapNormal = texture2D(grassNormalMap, grassNormalUv).xyz * 2.0 - 1.0;",
            `grassMapNormal.xy *= ${tn.toFixed(2)};`,
            "normal = normalize(grassGetTangentFrame(-vViewPosition, normal, grassNormalUv) * normalize(grassMapNormal));"
        ];
    }
    function gn(o, e, t, i, s, n, r, a, h) {
        o.onBeforeCompile = (l)=>{
            V(l, n), l.uniforms.grassMap = {
                value: e
            }, !h && t && i && s && (l.uniforms.grassNormalMap = {
                value: t
            }, l.uniforms.grassRoughnessMap = {
                value: i
            }, l.uniforms.grassAoMap = {
                value: s
            }), Y(l, r), H(l, a), l.vertexShader = l.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...cn(),
                ...G,
                ...z
            ].join(`
`)), l.vertexShader = l.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...un(),
                ...$,
                ...I
            ].join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...dn(h),
                ...q,
                ...N
            ].join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <color_fragment>", fn(h).join(`
`)), h || (l.fragmentShader = l.fragmentShader.replace("#include <roughnessmap_fragment>", mn().join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <normal_fragment_maps>", pn().join(`
`))), l.fragmentShader = l.fragmentShader.replace("#include <clipping_planes_fragment>", k.join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <dithering_fragment>", j.join(`
`));
        };
    }
    const xn = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = on(s), r = s ? null : an(), a = s ? null : ln(), h = s ? null : hn(), l = new O({
            roughness: Ct,
            metalness: ue.METALNESS,
            vertexColors: !1
        });
        return gn(l, n, r, a, h, t, e, i, s), {
            material: l,
            castShadow: !0,
            receiveShadow: !0
        };
    }, yn = {
        bucketKey: "grass_242",
        occlusionGroup: "solid",
        shaderVersion: 6,
        geometry: {
            vertexColors: !1
        },
        factory: xn,
        special: {
            paletteIndex: 242,
            label: "Grass",
            swatchColor: en,
            category: "nature"
        }
    }, Jt = "/materials/iron_bars_249/iron_bars_256x256.png", vn = "#6b6b6b", _n = 1, Sn = 8, Mn = 1, wn = .55, Fn = .45, An = .5;
    let lt = null, ht = null;
    function Kt(o, e) {
        return o.colorSpace = T, o.wrapS = 1e3, o.wrapT = 1e3, o.magFilter = 1006, o.minFilter = e ? 1006 : 1008, o.anisotropy = e ? Mn : Sn, o.generateMipmaps = !e, o;
    }
    function bn(o) {
        return o ? (ht || (ht = Kt(new L().load(Jt), !0)), ht) : (lt || (lt = Kt(new L().load(Jt), !1)), lt);
    }
    function En() {
        return [
            ...U
        ];
    }
    function Cn() {
        return [
            ...B
        ];
    }
    function Tn(o) {
        return [
            ...P(o),
            "uniform sampler2D ironBarsMap;",
            "vec2 getIronBarsUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function Rn() {
        return [
            "#include <color_fragment>",
            `vec2 ironBarsUv = getIronBarsUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${_n.toFixed(1)};`,
            "vec4 ironBarsTexel = texture2D(ironBarsMap, ironBarsUv);",
            "diffuseColor.rgb *= ironBarsTexel.rgb;",
            "diffuseColor.a *= ironBarsTexel.a;",
            `diffuseColor.rgb *= ${b};`
        ];
    }
    function Ln(o, e, t, i, s, n) {
        o.onBeforeCompile = (r)=>{
            V(r, t), r.uniforms.ironBarsMap = {
                value: e
            }, Y(r, i), H(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...En(),
                ...G,
                ...z
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Cn(),
                ...$,
                ...I
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Tn(n),
                ...q,
                ...N
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", Rn().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", k.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", j.join(`
`));
        };
    }
    const On = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = bn(s), r = new O({
            roughness: wn,
            metalness: Fn,
            vertexColors: !1,
            alphaTest: An
        });
        return Ln(r, n, t, e, i, s), {
            material: r,
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 2
        };
    }, zn = {
        bucketKey: "ironbars_249",
        occlusionGroup: "ironbars_249",
        shaderVersion: 4,
        geometry: {
            vertexColors: !1
        },
        factory: On,
        special: {
            paletteIndex: 249,
            label: "Iron Bars",
            swatchColor: vn,
            category: "buildings"
        }
    }, Ei = "#cc3300", In = 1.6, Nn = .85, ct = [
        .02,
        0,
        0
    ], ut = [
        .88,
        .22,
        0
    ], dt = [
        1,
        .9,
        .25
    ], Qt = .97, ei = .9, kn = .055, Hn = .018, ti = 1.8, ii = .35, si = 1, ni = 1.5, ri = .4, Wn = .45, Dn = 0, Pn = "#ff3300", Un = 3.2, Bn = [
        "float lavaVoronoi(vec2 uv) {",
        "	vec2 i = floor(uv);",
        "	vec2 f = fract(uv);",
        "	float d1 = 1.0;",
        "	float d2 = 1.0;",
        "	for (int y = -1; y <= 1; y++) {",
        "		for (int x = -1; x <= 1; x++) {",
        "			vec2 neighbor = vec2(float(x), float(y));",
        "			vec2 point = vec2(fract(sin(dot(i + neighbor, vec2(127.1, 311.7))) * 43758.5453));",
        "			vec2 diff = neighbor + point - f;",
        "			float dist = length(diff);",
        "			float s1 = 1.0 - step(d1, dist);",
        "			float s2 = 1.0 - step(d2, dist);",
        "			d2 = d1 * s1 + (1.0 - s1) * (s2 * dist) + ((1.0 - s1) * (1.0 - s2)) * d2;",
        "			d1 = dist * s1 + (1.0 - s1) * d1;",
        "		}",
        "	}",
        "	return d2 - d1;",
        "}"
    ].join(`
`);
    function Vn() {
        return [
            "attribute float surfaceDeformStrength;",
            ...U,
            "uniform float uLavaTime;"
        ];
    }
    function Gn(o) {
        const e = o ? Hn : kn;
        return [
            "vec3 lavaWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            `float lavaRippleA = sin(lavaWorld.x * ${ti.toFixed(3)} + uLavaTime * ${ii.toFixed(3)});`,
            `float lavaRippleB = cos(lavaWorld.z * ${ti.toFixed(3)} * 1.17 + uLavaTime * ${ii.toFixed(3)} * 0.83);`,
            `float lavaDisplacement = (lavaRippleA + lavaRippleB) * 0.5 * ${e.toFixed(4)} * surfaceDeformStrength;`,
            "transformed.y += lavaDisplacement;",
            ...B
        ];
    }
    function $n(o) {
        const e = [
            ...P(o),
            "uniform float uLavaTime;",
            `const vec3 L_CRUST  = vec3(${ct[0].toFixed(3)}, ${ct[1].toFixed(3)}, ${ct[2].toFixed(3)});`,
            `const vec3 L_MID    = vec3(${ut[0].toFixed(3)}, ${ut[1].toFixed(3)}, ${ut[2].toFixed(3)});`,
            `const vec3 L_BRIGHT = vec3(${dt[0].toFixed(3)}, ${dt[1].toFixed(3)}, ${dt[2].toFixed(3)});`
        ];
        return o || e.push(Bn), e;
    }
    function qn(o) {
        return o ? [
            "vec3 lNrm = normalize(vVoxelAoWorldNormal);",
            "bool lIsTop    = lNrm.y >  0.5;",
            "bool lIsBottom = lNrm.y < -0.5;",
            "if (lIsBottom) {",
            `	diffuseColor = vec4(L_CRUST * ${b}, ${ei.toFixed(3)});`,
            "} else {",
            "float lGlow = 0.0;",
            "if (lIsTop) {",
            "	vec2 lUv = vVoxelAoWorldPosition.xz;",
            "	lGlow = 0.5 + 0.5 * sin(lUv.x * 2.8 + uLavaTime * 0.5 + cos(lUv.y * 1.6 + uLavaTime * 0.35));",
            "} else {",
            "	float lFallH = (abs(lNrm.x) > abs(lNrm.z)) ? vVoxelAoWorldPosition.z : vVoxelAoWorldPosition.x;",
            `	vec2 lFallUv = vec2(lFallH / ${si.toFixed(3)}, vVoxelAoWorldPosition.y / ${ni.toFixed(3)} + uLavaTime * ${ri.toFixed(3)});`,
            "	float lFallA = 0.5 + 0.5 * sin(lFallUv.y * 5.2 + lFallUv.x * 1.8);",
            "	float lFallB = 0.5 + 0.5 * sin(lFallUv.y * 9.0 + uLavaTime * 0.4);",
            "	lGlow = clamp(lFallA * 0.65 + lFallB * 0.35, 0.0, 1.0);",
            "}",
            "vec3 lColor = mix(L_MID, L_BRIGHT, lGlow * 0.7);",
            `lColor *= ${b};`,
            `diffuseColor = vec4(lColor, ${Qt.toFixed(3)});`,
            "}"
        ] : [
            "vec3 lNrm = normalize(vVoxelAoWorldNormal);",
            "bool lIsTop    = lNrm.y >  0.5;",
            "bool lIsBottom = lNrm.y < -0.5;",
            "float lGlowMask  = 0.0;",
            "float lCrustMask = 0.0;",
            "if (lIsBottom) {",
            `	diffuseColor = vec4(L_CRUST * ${b}, ${ei.toFixed(3)});`,
            "} else {",
            "if (lIsTop) {",
            `	vec2 lUvCrust = vVoxelAoWorldPosition.xz / ${In.toFixed(3)};`,
            `	vec2 lUvGlow  = vVoxelAoWorldPosition.xz / ${Nn.toFixed(3)};`,
            "	vec2 lUvCrustW = lUvCrust + vec2(",
            "		sin(uLavaTime * 0.28 + lUvCrust.y * 3.1) * 0.11,",
            "		cos(uLavaTime * 0.23 + lUvCrust.x * 2.8) * 0.11",
            "	);",
            "	vec2 lUvGlowW = lUvGlow + vec2(",
            "		cos(uLavaTime * 0.38 + lUvGlow.y * 2.4) * 0.09,",
            "		sin(uLavaTime * 0.32 + lUvGlow.x * 2.4) * 0.09",
            "	);",
            "	float lEdgeCrust = lavaVoronoi(lUvCrustW);",
            "	float lEdgeGlow  = lavaVoronoi(lUvGlowW);",
            "	lCrustMask = 1.0 - smoothstep(0.03, 0.16, lEdgeCrust);",
            "	lGlowMask  = smoothstep(0.10, 0.30, lEdgeGlow);",
            "	float lPulse = 0.75 + 0.25 * sin(uLavaTime * 1.05);",
            "	lGlowMask *= lPulse;",
            "} else {",
            "	float lFallH = (abs(lNrm.x) > abs(lNrm.z)) ? vVoxelAoWorldPosition.z : vVoxelAoWorldPosition.x;",
            "	float lFallV = vVoxelAoWorldPosition.y;",
            `	vec2 lFallUv = vec2(lFallH / ${si.toFixed(3)}, lFallV / ${ni.toFixed(3)} + uLavaTime * ${ri.toFixed(3)});`,
            "	vec2 lFallUvW = lFallUv + vec2(",
            "		cos(lFallUv.y * 3.2 + uLavaTime * 0.55) * 0.07,",
            "		sin(lFallUv.x * 2.2 + uLavaTime * 0.48) * 0.14",
            "	);",
            "	float lFallEdge = lavaVoronoi(lFallUvW);",
            "	lGlowMask  = smoothstep(0.10, 0.32, lFallEdge) * 0.80;",
            "	lCrustMask = 1.0 - smoothstep(0.03, 0.10, lFallEdge);",
            "}",
            "vec3 lBodyColor = mix(L_MID, L_BRIGHT, lGlowMask);",
            "vec3 lColor     = mix(lBodyColor, L_CRUST, lCrustMask);",
            `lColor *= ${b};`,
            `diffuseColor = vec4(lColor, ${Qt.toFixed(3)});`,
            "}"
        ];
    }
    function jn() {
        return [
            "float lavaEmissivePulse = 0.78 + 0.22 * sin(uLavaTime * 1.05);",
            "totalEmissiveRadiance *= lavaEmissivePulse;"
        ];
    }
    function Yn(o, e, t, i, s, n) {
        o.onBeforeCompile = (r)=>{
            V(r, t), r.uniforms.uLavaTime = e, Y(r, i), H(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Vn(),
                ...G,
                ...z
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Gn(n),
                ...$,
                ...I
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...$n(n),
                ...q,
                ...N
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", qn(n).join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <emissivemap_fragment>", jn().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", k.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", j.join(`
`));
        };
    }
    const Xn = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = {
            value: 0
        }, r = new O({
            color: Ei,
            emissive: new ne(Pn),
            emissiveIntensity: Un,
            roughness: Wn,
            metalness: Dn,
            vertexColors: !1,
            transparent: !0,
            depthWrite: !0
        });
        return Yn(r, n, t, e, i, s), {
            material: r,
            onAnimationFrame: (h)=>{
                n.value = h * .001;
            },
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 1
        };
    }, Zn = {
        bucketKey: "lava_245",
        occlusionGroup: "lava_245",
        shaderVersion: 4,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !0,
            deformSurface: !0
        },
        passable: !0,
        factory: Xn,
        special: {
            paletteIndex: 245,
            label: "Lava",
            swatchColor: Ei,
            category: "liquids"
        }
    }, Tt = "#ffd166", Jn = .35, Kn = 0, Qn = 3.5;
    function er(o, e) {
        o.onBeforeCompile = (t)=>{
            H(t, e), t.vertexShader = t.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...z
            ].join(`
`)), t.vertexShader = t.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...I
            ].join(`
`)), t.fragmentShader = t.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...N
            ].join(`
`)), t.fragmentShader = t.fragmentShader.replace("#include <clipping_planes_fragment>", k.join(`
`));
        };
    }
    const tr = (o)=>{
        const { heroOcclusion: e } = o, t = new O({
            color: Tt,
            emissive: Tt,
            emissiveIntensity: Qn,
            roughness: Jn,
            metalness: Kn,
            vertexColors: !1
        });
        return er(t, e), {
            material: t,
            castShadow: !1,
            receiveShadow: !1
        };
    }, ir = {
        bucketKey: "light_243",
        occlusionGroup: "solid",
        shaderVersion: 3,
        geometry: {
            vertexColors: !1
        },
        passable: !0,
        factory: tr,
        special: {
            paletteIndex: 243,
            label: "Light",
            swatchColor: Tt
        }
    }, Ci = "#A8B8C8", ft = .5, mt = [
        .8,
        .82,
        .86
    ], pt = [
        .22,
        .3,
        .45
    ], sr = .35, nr = 0, rr = [
        "mat2 silverRot(float a) { return mat2(sin(a), cos(a), -cos(a), sin(a)); }",
        "float silverNoise(in vec2 x) { return smoothstep(0.,1.,sin(1.5*x.x)*sin(1.5*x.y)); }",
        "float silverFbm(vec2 p) {",
        "	mat2 m = silverRot(0.4);",
        "	float f = 0.0;",
        "	f += 0.500000*(0.5+0.5*silverNoise(p)); p = m*p*2.02;",
        "	f += 0.250000*(0.5+0.5*silverNoise(p)); p = m*p*2.03;",
        "	f += 0.125000*(0.5+0.5*silverNoise(p)); p = m*p*2.01;",
        "	f += 0.015625*(0.5+0.5*silverNoise(p));",
        "	return f/0.96875;",
        "}",
        "float silverFbmLow(vec2 p) {",
        "	mat2 m = silverRot(0.4);",
        "	float f = 0.0;",
        "	f += 0.500000*(0.5+0.5*silverNoise(p)); p = m*p*2.02;",
        "	f += 0.250000*(0.5+0.5*silverNoise(p));",
        "	return f/0.75;",
        "}",
        "float silverPattern(in vec2 p, out vec2 q, out vec2 r) {",
        "	q.x = silverFbm( 2.0*p );",
        "	q.y = silverFbm( 1.5*p + vec2(3.1, 4.8) );",
        "	r.x = silverFbm( p + 4.*q + vec2(1.7, 9.2) + 0.9*sin(30.*length(q)) );",
        "	r.y = silverFbm( p + 8.*q + vec2(7.1, 1.4) + 0.9*sin(20.*length(q)) );",
        "	return silverFbm( p + 7.*r*silverRot(0.0) );",
        "}",
        "float silverPatternLow(in vec2 p, out vec2 q, out vec2 r) {",
        "	q.x = silverFbmLow( 2.0*p );",
        "	q.y = silverFbmLow( 1.5*p + vec2(3.1, 4.8) );",
        "	r.x = silverFbmLow( p + 4.*q + vec2(1.7, 9.2) );",
        "	r.y = silverFbmLow( p + 8.*q + vec2(7.1, 1.4) );",
        "	return silverFbmLow( p + 7.*r*silverRot(0.0) );",
        "}"
    ].join(`
`);
    function or() {
        return [
            ...U
        ];
    }
    function ar() {
        return [
            ...B
        ];
    }
    function lr(o) {
        return [
            ...P(o),
            rr,
            `const vec3 S_COL1 = vec3(${mt[0].toFixed(3)}, ${mt[1].toFixed(3)}, ${mt[2].toFixed(3)});`,
            `const vec3 S_COL2 = vec3(${pt[0].toFixed(3)}, ${pt[1].toFixed(3)}, ${pt[2].toFixed(3)});`
        ];
    }
    function hr(o) {
        const e = [
            "vec3 sNrm = normalize(vVoxelAoWorldNormal);",
            "bool sIsBottom = sNrm.y < -0.5;",
            "vec2 sUv = vec2(0.0);",
            "if (!sIsBottom) {",
            "	if (abs(sNrm.x) > abs(sNrm.z) && abs(sNrm.x) > abs(sNrm.y)) {",
            `		sUv = vVoxelAoWorldPosition.zy * ${ft.toFixed(3)};`,
            "	} else if (abs(sNrm.z) > abs(sNrm.y)) {",
            `		sUv = vVoxelAoWorldPosition.xy * ${ft.toFixed(3)};`,
            "	} else {",
            `		sUv = vVoxelAoWorldPosition.xz * ${ft.toFixed(3)};`,
            "	}",
            "}"
        ], i = [
            "	vec2 sQ = vec2(0.0), sR = vec2(0.0);",
            `	${o ? "float sF = silverPatternLow(sUv, sQ, sR);" : "float sF = silverPattern(sUv, sQ, sR);"}`,
            "	vec3 sC = mix(S_COL1, vec3(0.0), pow(smoothstep(0., 0.9, sF), 2.));",
            "	sC += S_COL2 * pow(smoothstep(0., 0.8, dot(sQ, sR)*0.6), 3.) * 1.5;",
            "	sC *= pow(dot(sQ, sR) + 0.3, 3.);",
            "	sC *= sF * 1.5;",
            `	sC *= ${b};`,
            "	diffuseColor = vec4(sC, 1.0);"
        ];
        return [
            ...e,
            "if (sIsBottom) {",
            `	diffuseColor = vec4(S_COL2 * 0.3 * ${b}, 1.0);`,
            "} else {",
            ...i,
            "}"
        ];
    }
    function cr(o, e, t, i, s) {
        o.onBeforeCompile = (n)=>{
            V(n, e), Y(n, t), H(n, i), n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...or(),
                ...G,
                ...z
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...ar(),
                ...$,
                ...I
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...lr(s),
                ...q,
                ...N
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", hr(s).join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <clipping_planes_fragment>", k.join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <dithering_fragment>", j.join(`
`));
        };
    }
    const ur = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = new O({
            color: Ci,
            roughness: sr,
            metalness: nr,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return cr(n, t, e, i, s), {
            material: n,
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, dr = {
        bucketKey: "silver_248",
        occlusionGroup: "solid",
        shaderVersion: 5,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !1,
            deformSurface: !1
        },
        factory: ur,
        special: {
            paletteIndex: 248,
            label: "Silver",
            swatchColor: Ci,
            category: "metals"
        }
    }, oi = "/materials/bricks_240/bricks_256x256.png", fr = "#8f8f8f", mr = 1, pr = 8, gr = 1;
    let gt = null, xt = null;
    function ai(o, e) {
        return o.colorSpace = T, o.wrapS = 1e3, o.wrapT = 1e3, o.magFilter = 1006, o.minFilter = e ? 1006 : 1008, o.anisotropy = e ? gr : pr, o.generateMipmaps = !e, o;
    }
    function xr(o) {
        return o ? (xt || (xt = ai(new L().load(oi), !0)), xt) : (gt || (gt = ai(new L().load(oi), !1)), gt);
    }
    function yr() {
        return [
            ...U
        ];
    }
    function vr() {
        return [
            ...B
        ];
    }
    function _r(o) {
        return [
            ...P(o),
            "uniform sampler2D stoneBricksMap;",
            "vec2 getStoneBricksUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function Sr() {
        return [
            "#include <color_fragment>",
            `vec2 stoneBricksUv = getStoneBricksUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${mr.toFixed(1)};`,
            "vec4 stoneBricksTexel = texture2D(stoneBricksMap, stoneBricksUv);",
            "diffuseColor.rgb *= stoneBricksTexel.rgb;",
            "diffuseColor.a *= stoneBricksTexel.a;",
            `diffuseColor.rgb *= ${b};`
        ];
    }
    function Mr(o, e, t, i, s, n) {
        o.onBeforeCompile = (r)=>{
            V(r, t), r.uniforms.stoneBricksMap = {
                value: e
            }, Y(r, i), H(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...yr(),
                ...G,
                ...z
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...vr(),
                ...$,
                ...I
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ..._r(n),
                ...q,
                ...N
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", k.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", Sr().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", j.join(`
`));
        };
    }
    const wr = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = xr(s), r = new O({
            roughness: ue.ROUGHNESS,
            metalness: ue.METALNESS,
            vertexColors: !1
        });
        return Mr(r, n, t, e, i, s), {
            material: r,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Fr = {
        bucketKey: "stonebricks_240",
        occlusionGroup: "solid",
        shaderVersion: 5,
        geometry: {
            vertexColors: !1
        },
        factory: wr,
        special: {
            paletteIndex: 240,
            label: "Stone Bricks",
            swatchColor: fr,
            category: "buildings"
        }
    }, Ar = "#1a6699", br = 2, Er = 1.1, yt = [
        .9,
        .9,
        .95
    ], vt = [
        .1,
        .4,
        .6
    ], _t = [
        0,
        .2,
        .4
    ], li = .86, hi = .75, ci = .48, Cr = .115, Tr = .045, ui = 2.4, di = 1.6, fi = .8, mi = 1.2, pi = 1.4, Rr = .2, Lr = 0, Or = [
        "float waterVoronoi(vec2 uv) {",
        "	vec2 i = floor(uv);",
        "	vec2 f = fract(uv);",
        "	float d1 = 1.0;",
        "	float d2 = 1.0;",
        "	for (int y = -1; y <= 1; y++) {",
        "		for (int x = -1; x <= 1; x++) {",
        "			vec2 neighbor = vec2(float(x), float(y));",
        "			vec2 point = vec2(fract(sin(dot(i + neighbor, vec2(127.1, 311.7))) * 43758.5453));",
        "			vec2 diff = neighbor + point - f;",
        "			float dist = length(diff);",
        "			float s1 = 1.0 - step(d1, dist);",
        "			float s2 = 1.0 - step(d2, dist);",
        "			d2 = d1 * s1 + (1.0 - s1) * (s2 * dist) + ((1.0 - s1) * (1.0 - s2)) * d2;",
        "			d1 = dist * s1 + (1.0 - s1) * d1;",
        "		}",
        "	}",
        "	return d2 - d1;",
        "}"
    ].join(`
`);
    function zr() {
        return [
            "attribute float surfaceDeformStrength;",
            ...U,
            "uniform float uWaterTime;"
        ];
    }
    function Ir(o) {
        const e = o ? Tr : Cr;
        return [
            "vec3 waterWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            `float waterRippleA = sin(waterWorld.x * ${ui.toFixed(3)} + uWaterTime * ${di.toFixed(3)});`,
            `float waterRippleB = cos(waterWorld.z * ${ui.toFixed(3)} * 1.13 + uWaterTime * ${di.toFixed(3)} * 0.87);`,
            `float waterDisplacement = (waterRippleA + waterRippleB) * 0.5 * ${e.toFixed(4)} * surfaceDeformStrength;`,
            "transformed.y += waterDisplacement;",
            ...B
        ];
    }
    function Nr(o) {
        const e = [
            ...P(o),
            "uniform float uWaterTime;",
            `const vec3 W_FOAM = vec3(${yt[0].toFixed(3)}, ${yt[1].toFixed(3)}, ${yt[2].toFixed(3)});`,
            `const vec3 W_MAIN = vec3(${vt[0].toFixed(3)}, ${vt[1].toFixed(3)}, ${vt[2].toFixed(3)});`,
            `const vec3 W_DARK = vec3(${_t[0].toFixed(3)}, ${_t[1].toFixed(3)}, ${_t[2].toFixed(3)});`
        ];
        return o || e.push(Or), e;
    }
    function kr(o) {
        return o ? [
            "vec3 wNrm = normalize(vVoxelAoWorldNormal);",
            "bool wIsTopSurface = wNrm.y > 0.5;",
            "bool wIsBottomSurface = wNrm.y < -0.5;",
            "if (wIsBottomSurface) {",
            `	diffuseColor = vec4(W_MAIN * ${b}, ${ci.toFixed(3)});`,
            "} else {",
            "float wWave = 0.0;",
            "float wFoamMask = 0.0;",
            "if (wIsTopSurface) {",
            "	vec2 wUv = vVoxelAoWorldPosition.xz;",
            "	wWave = 0.5 + 0.5 * sin(wUv.x * 4.0 + uWaterTime * 1.7 + cos(wUv.y * 2.0));",
            "	wFoamMask = smoothstep(0.88, 1.0, wWave);",
            "} else {",
            "	float wFallH = (abs(wNrm.x) > abs(wNrm.z)) ? vVoxelAoWorldPosition.z : vVoxelAoWorldPosition.x;",
            `	vec2 wFallUv = vec2(wFallH / ${fi.toFixed(3)}, vVoxelAoWorldPosition.y / ${mi.toFixed(3)} + uWaterTime * ${pi.toFixed(3)});`,
            "	float wFallColumn = sin(wFallUv.x * 6.283);",
            "	float wFallA = 0.5 + 0.5 * sin(wFallUv.y * 6.283 + wFallColumn * 1.1);",
            "	float wFallB = 0.5 + 0.5 * sin(wFallUv.y * 11.0 + wFallUv.x * 2.3);",
            "	wWave = clamp(wFallA * 0.72 + wFallB * 0.28, 0.0, 1.0);",
            "	wFoamMask = 0.0;",
            "}",
            "vec3 wBody = mix(W_DARK, W_MAIN, wWave);",
            "vec3 wColor = mix(wBody, W_FOAM, wFoamMask * 0.65);",
            `wColor *= ${b};`,
            `float wAlpha = mix(${li.toFixed(3)}, ${hi.toFixed(3)}, wFoamMask);`,
            "diffuseColor = vec4(wColor, wAlpha);",
            "}"
        ] : [
            "vec3 wNrm = normalize(vVoxelAoWorldNormal);",
            "bool wIsTopSurface = wNrm.y > 0.5;",
            "bool wIsBottomSurface = wNrm.y < -0.5;",
            "float wRippleMask = 0.0;",
            "float wFoamMask = 0.0;",
            "float wFoamHalo = 0.0;",
            "if (wIsBottomSurface) {",
            `	diffuseColor = vec4(W_MAIN * ${b}, ${ci.toFixed(3)});`,
            "} else {",
            "if (wIsTopSurface) {",
            `	vec2 wUvFoam   = vVoxelAoWorldPosition.xz / ${br.toFixed(3)};`,
            `	vec2 wUvRipple = vVoxelAoWorldPosition.xz / ${Er.toFixed(3)};`,
            "	vec2 wUvFoamD = wUvFoam + vec2(",
            "		sin(uWaterTime * 2.0 + wUvFoam.y * 5.0) * 0.10,",
            "		cos(uWaterTime * 2.0 + wUvFoam.x * 5.0) * 0.10",
            "	);",
            "	vec2 wUvRippleD = wUvRipple + vec2(",
            "		cos(uWaterTime * 1.5 + wUvRipple.y * 4.0) * 0.15,",
            "		sin(uWaterTime * 1.5 + wUvRipple.x * 4.0) * 0.15",
            "	);",
            "	float wEdge1 = waterVoronoi(wUvFoamD);",
            "	float wEdge2 = waterVoronoi(wUvRippleD);",
            "	wRippleMask = 1.0 - smoothstep(0.03, 0.07, wEdge2);",
            "	wFoamMask   = 1.0 - smoothstep(0.02, 0.05, wEdge1);",
            "	wFoamHalo   = 1.0 - smoothstep(0.10, 0.50, wEdge1);",
            "} else {",
            "	float wFallH = (abs(wNrm.x) > abs(wNrm.z)) ? vVoxelAoWorldPosition.z : vVoxelAoWorldPosition.x;",
            "	float wFallV = vVoxelAoWorldPosition.y;",
            `	vec2 wUvRipple = vec2(wFallH / ${fi.toFixed(3)}, wFallV / ${mi.toFixed(3)} + uWaterTime * ${pi.toFixed(3)});`,
            "	vec2 wUvRippleD = wUvRipple + vec2(",
            "		cos(wUvRipple.y * 4.2 + uWaterTime * 1.2) * 0.08,",
            "		sin(wUvRipple.x * 3.0 + uWaterTime * 1.4) * 0.20",
            "	);",
            "	float wEdge2 = waterVoronoi(wUvRippleD);",
            "	wRippleMask = 1.0 - smoothstep(0.03, 0.07, wEdge2);",
            "}",
            "vec3 wBody = mix(W_DARK, W_MAIN, wRippleMask);",
            "vec3 wColor = mix(wBody, W_FOAM, wFoamMask);",
            "wColor *= 1.0 - wFoamHalo * 0.10;",
            `wColor *= ${b};`,
            `float wAlpha = mix(${li.toFixed(3)}, ${hi.toFixed(3)}, wFoamMask);`,
            "diffuseColor = vec4(wColor, wAlpha);",
            "}"
        ];
    }
    function Hr(o, e, t, i, s, n) {
        o.onBeforeCompile = (r)=>{
            V(r, t), r.uniforms.uWaterTime = e, Y(r, i), H(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...zr(),
                ...G,
                ...z
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Ir(n),
                ...$,
                ...I
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Nr(n),
                ...q,
                ...N
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", kr(n).join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", k.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", j.join(`
`));
        };
    }
    const Wr = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = {
            value: 0
        }, r = new O({
            roughness: Rr,
            metalness: Lr,
            vertexColors: !1,
            transparent: !0,
            depthWrite: !0
        });
        return Hr(r, n, t, e, i, s), {
            material: r,
            onAnimationFrame: (h)=>{
                n.value = h * .001;
            },
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 1
        };
    }, Dr = {
        bucketKey: "water_241",
        occlusionGroup: "water_241",
        shaderVersion: 10,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !0,
            deformSurface: !0
        },
        passable: !0,
        factory: Wr,
        special: {
            paletteIndex: 241,
            label: "Water",
            swatchColor: Ar,
            category: "liquids"
        }
    }, gi = "/materials/wood_244/wood_256x256.png", Pr = "#8b5a2b", Ur = 1, Br = 8, Vr = 1;
    let St = null, Mt = null;
    function xi(o, e) {
        return o.colorSpace = T, o.wrapS = 1e3, o.wrapT = 1e3, o.magFilter = 1006, o.minFilter = e ? 1006 : 1008, o.anisotropy = e ? Vr : Br, o.generateMipmaps = !e, o;
    }
    function Gr(o) {
        return o ? (Mt || (Mt = xi(new L().load(gi), !0)), Mt) : (St || (St = xi(new L().load(gi), !1)), St);
    }
    function $r() {
        return [
            ...U
        ];
    }
    function qr() {
        return [
            ...B
        ];
    }
    function jr(o) {
        return [
            ...P(o),
            "uniform sampler2D woodMap;",
            "vec2 getWoodUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function Yr() {
        return [
            "#include <color_fragment>",
            `vec2 woodUv = getWoodUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Ur.toFixed(1)};`,
            "vec4 woodTexel = texture2D(woodMap, woodUv);",
            "diffuseColor.rgb *= woodTexel.rgb;",
            "diffuseColor.a *= woodTexel.a;",
            `diffuseColor.rgb *= ${b};`
        ];
    }
    function Xr(o, e, t, i, s, n) {
        o.onBeforeCompile = (r)=>{
            V(r, t), r.uniforms.woodMap = {
                value: e
            }, Y(r, i), H(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...$r(),
                ...G,
                ...z
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...qr(),
                ...$,
                ...I
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...jr(n),
                ...q,
                ...N
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", Yr().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", k.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", j.join(`
`));
        };
    }
    const Zr = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = Gr(s), r = new O({
            roughness: ue.ROUGHNESS,
            metalness: ue.METALNESS,
            vertexColors: !1
        });
        return Xr(r, n, t, e, i, s), {
            material: r,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Jr = {
        bucketKey: "wood_244",
        occlusionGroup: "solid",
        shaderVersion: 4,
        geometry: {
            vertexColors: !1
        },
        factory: Zr,
        special: {
            paletteIndex: 244,
            label: "Wood",
            swatchColor: Pr,
            category: "nature"
        }
    }, ee = [
        De,
        Fr,
        Dr,
        yn,
        ir,
        Jr,
        Zn,
        Ws,
        Zs,
        dr,
        zn,
        Cs,
        Rs
    ];
    ee.filter((o)=>o.special !== void 0).map((o)=>({
            index: o.special.paletteIndex,
            label: o.special.label,
            color: o.special.swatchColor,
            category: o.special.category ?? "miscellaneous"
        }));
    const Kr = new Map(ee.filter((o)=>o.special !== void 0).map((o)=>[
            o.special.paletteIndex,
            o.bucketKey
        ])), Qr = De.occlusionGroup ?? De.bucketKey, eo = new Map(ee.filter((o)=>o.special !== void 0).map((o)=>[
            o.special.paletteIndex,
            o.occlusionGroup ?? o.bucketKey
        ])), zt = new Map(ee.filter((o)=>o.special !== void 0).map((o)=>[
            o.special.paletteIndex,
            o.geometry
        ])), It = De.geometry, Ti = new Set(ee.filter((o)=>o.special !== void 0).filter((o)=>o.passable === !0).map((o)=>o.special.paletteIndex));
    function to(o) {
        return Ti.has(o);
    }
    const io = new Set(ee.filter((o)=>o.special !== void 0).filter((o)=>o.volumetric === !0).map((o)=>o.special.paletteIndex));
    function so(o) {
        return io.has(o);
    }
    function no(o) {
        return Kr.get(o) ?? "default";
    }
    function ro(o) {
        return eo.get(o) ?? Qr;
    }
    function oo(o) {
        return (zt.get(o) ?? It)?.deformSurface === !0;
    }
    function ao(o) {
        return (zt.get(o) ?? It)?.vertexColors !== !1;
    }
    function lo(o) {
        return (zt.get(o) ?? It)?.preserveVoxelFaces === !0;
    }
    function ho() {
        const o = new Map, e = [], t = (f)=>{
            let d = o.get(f);
            return d === void 0 && (d = e.length, o.set(f, d), e.push(f)), d;
        }, i = new Map, s = (f)=>{
            let d = i.get(f);
            return d === void 0 && (d = i.size, i.set(f, d)), d;
        }, n = new Int32Array(256), r = new Int32Array(256), a = new Uint8Array(256), h = new Uint8Array(256), l = new Uint8Array(256), c = new Uint8Array(256), u = new Uint8Array(256);
        for(let f = 0; f < 256; f++)n[f] = t(no(f)), r[f] = s(ro(f)), a[f] = ao(f) ? 1 : 0, h[f] = oo(f) ? 1 : 0, l[f] = lo(f) ? 1 : 0, c[f] = so(f) ? 1 : 0, u[f] = to(f) ? 1 : 0;
        return {
            bucketId: n,
            occlusionId: r,
            usesVertexColors: a,
            deformsSurface: h,
            preservesVoxelFaces: l,
            isVolumetric: c,
            isPassable: u,
            bucketKeyById: e
        };
    }
    const le = ho(), co = new Map(ee.filter((o)=>o.special !== void 0).map((o)=>[
            o.special.paletteIndex,
            parseInt(o.special.swatchColor.slice(1), 16)
        ]));
    es({
        passableIndices: Ti,
        editorColors: co
    });
    function uo(o) {
        const { bucketKey: e, shaderVersion: t, factory: i } = o;
        return (s)=>{
            const n = i(s), r = [
                "terrain",
                e,
                `v${t}`,
                s.performanceMode ? "perf" : "full"
            ].join("-");
            return n.material.customProgramCacheKey = ()=>r, n.material.needsUpdate = !0, n;
        };
    }
    {
        const o = new Set, e = new Set;
        for (const t of ee){
            if (o.has(t.bucketKey)) throw new Error(`Duplicate terrain material bucketKey: "${t.bucketKey}"`);
            if (o.add(t.bucketKey), t.special) {
                const { paletteIndex: i } = t.special;
                if (i < 240 || i > 255) throw new Error(`Special material "${t.bucketKey}" has paletteIndex ${i} outside the 240-255 range.`);
                if (e.has(i)) throw new Error(`Duplicate special material paletteIndex: ${i}`);
                e.add(i);
            }
        }
    }
    new Map(ee.filter((o)=>o.factory !== void 0).map((o)=>[
            o.bucketKey,
            uo(o)
        ]));
    const yi = 1;
    function fo(o) {
        return Math.max(yi, o.Resolution ?? yi);
    }
    const Be = 12, vi = .22, mo = .88, po = .18, _i = .34, go = .9, xo = .98, yo = [
        [
            0,
            null
        ],
        [
            .04,
            60
        ],
        ...Array.from({
            length: 18
        }, (o, e)=>[
                po,
                e * 20
            ])
    ];
    function wt(o) {
        const e = Math.max(0, Math.min(1, o));
        return e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055;
    }
    function Ft(o) {
        return Math.round(Math.max(0, Math.min(1, o)) * 255).toString(16).padStart(2, "0");
    }
    function Ri(o, e, t) {
        const i = t * Math.PI / 180, s = e * Math.cos(i), n = e * Math.sin(i), r = o + .3963377774 * s + .2158037573 * n, a = o - .1055613458 * s - .0638541728 * n, h = o - .0894841775 * s - 1.291485548 * n, l = r ** 3, c = a ** 3, u = h ** 3;
        return [
            4.0767416621 * l - 3.3077115913 * c + .2309699292 * u,
            -1.2684380046 * l + 2.6097574011 * c - .3413193965 * u,
            -.0041960863 * l - .7034186147 * c + 1.707614701 * u
        ];
    }
    function vo(o, e, t) {
        const [i, s, n] = Ri(o, e, t), r = wt(i), a = wt(s), h = wt(n);
        return `#${Ft(r)}${Ft(a)}${Ft(h)}`;
    }
    function _o(o, e, t) {
        const [i, s, n] = Ri(o, e, t);
        return i >= 0 && i <= 1 && s >= 0 && s <= 1 && n >= 0 && n <= 1;
    }
    function So(o, e) {
        let t = 0, i = .4;
        for(let s = 0; s < 16; s++){
            const n = (t + i) / 2;
            _o(o, n, e) ? t = n : i = n;
        }
        return t * xo;
    }
    function Li(o) {
        const e = o / (Be - 1);
        return vi + e * (mo - vi);
    }
    function Mo(o, e, t) {
        if (e <= 0 || t === null) return 0;
        const i = o / (Be - 1), s = Math.pow(Math.sin(Math.PI * i), go), n = e * (_i + (1 - _i) * s);
        return Math.min(n, So(Li(o), t));
    }
    function wo() {
        const o = [];
        for (const [e, t] of yo)for(let i = 0; i < Be; i++){
            const s = Li(i), n = Mo(i, e, t);
            o.push(vo(s, n, t ?? 0));
        }
        return o;
    }
    const Pe = wo(), Oi = Be - 1;
    function Fo(o) {
        return Pe[o] ?? Pe[Oi];
    }
    function Si(o) {
        const e = o.replace("#", "");
        return {
            r: parseInt(e.slice(0, 2), 16),
            g: parseInt(e.slice(2, 4), 16),
            b: parseInt(e.slice(4, 6), 16)
        };
    }
    function Ao(o) {
        return `#${(o & 16777215).toString(16).padStart(6, "0")}`;
    }
    function At(o) {
        const e = o / 255;
        return e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4);
    }
    function Mi(o, e, t) {
        const i = At(o), s = At(e), n = At(t), r = Math.cbrt(.4122214708 * i + .5363325363 * s + .0514459929 * n), a = Math.cbrt(.2119034982 * i + .6806995451 * s + .1073969566 * n), h = Math.cbrt(.0883024619 * i + .2817188376 * s + .6299787005 * n);
        return [
            .2104542553 * r + .793617785 * a - .0040720468 * h,
            1.9779984951 * r - 2.428592205 * a + .4505937099 * h,
            .0259040371 * r + .7827717662 * a - .808675766 * h
        ];
    }
    function bo(o) {
        const e = ts(o);
        return e !== void 0 ? e : parseInt(Fo(o).slice(1), 16);
    }
    function Eo(o) {
        const { r: e, g: t, b: i } = Si(Ao(o)), [s, n, r] = Mi(e, t, i);
        let a = Oi, h = 1 / 0;
        for(let l = 0; l < Pe.length; l++){
            const c = Si(Pe[l]), [u, f, d] = Mi(c.r, c.g, c.b), m = s - u, p = n - f, x = r - d, g = m * m + p * p + x * x;
            g < h && (h = g, a = l);
        }
        return a;
    }
    function Co(o) {
        const e = Math.floor(o);
        return e >= 0 && e <= 255 ? e : Eo(o);
    }
    const To = le.bucketKeyById;
    let He = null;
    function Ro() {
        return He || (He = (async ()=>{
            const { VoxelMesher: e } = await import("./voxel_mesher-8kBYlObl.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), t = new Float32Array(256 * 3);
            for(let i = 0; i < 256; i++){
                const s = new ne(bo(Co(i)));
                t[i * 3] = s.r, t[i * 3 + 1] = s.g, t[i * 3 + 2] = s.b;
            }
            return new e(le.bucketId, le.occlusionId, le.usesVertexColors, le.deformsSurface, le.preservesVoxelFaces, le.isVolumetric, t);
        })().catch((e)=>{
            throw He = null, e;
        })), He;
    }
    function Z(o) {
        const { buffer: e } = o;
        if (e instanceof ArrayBuffer) return e;
        throw new Error("Cannot transfer SharedArrayBuffer-backed voxel geometry buffers.");
    }
    function Lo(o) {
        return o instanceof Error ? o.message : String(o);
    }
    function wi(o, e, t) {
        self.postMessage({
            buildId: o,
            error: `Failed to ${e}: ${Lo(t)}`
        });
    }
    self.onmessage = async (o)=>{
        const { buildId: e, terrain: t, voxels: i } = o.data;
        let s;
        try {
            s = await Ro();
        } catch (n) {
            console.error("[voxel-build] WASM mesher init FAILED:", n), wi(e, "initialize the WebAssembly terrain mesher", n);
            return;
        }
        try {
            Oo(s, e, t, i);
        } catch (n) {
            console.error("[voxel-build] WASM build FAILED:", n), wi(e, "build the terrain geometry", n);
        }
    };
    function Oo(o, e, t, i) {
        const s = fo(t), n = Math.max(t.Width, t.Height, t.Length) * s, r = Qi(n), a = o.build_from_svo(i, t.Width, t.Height, t.Length, s, r), h = [], l = [];
        let c, u, f, d, m;
        try {
            const A = a.bucket_count();
            for(let v = 0; v < A; v++){
                const w = To[a.bucket_id(v)], _ = a.take_positions(v), F = a.take_normals(v), y = a.take_colors(v), te = a.take_surface_deform(v), re = a.take_tile_heights(v), oe = a.take_highlights(v), ae = a.take_indices(v);
                h.push({
                    key: w,
                    positions: _,
                    normals: F,
                    colors: y,
                    surfaceDeformStrength: te,
                    tileHeights: re,
                    highlightStrengths: oe,
                    indices: ae
                }), l.push(Z(_)), l.push(Z(F)), y && l.push(Z(y)), te && l.push(Z(te)), l.push(Z(re)), l.push(Z(oe)), l.push(Z(ae));
            }
            c = a.take_occupancy(), u = a.take_fog() ?? null, f = a.occupancy_width(), d = a.occupancy_height(), m = a.occupancy_length();
        } finally{
            a.free();
        }
        const p = {
            voxelWidth: f,
            voxelHeight: d,
            voxelLength: m,
            worldOriginX: -t.Width / 2,
            worldOriginY: -.5,
            worldOriginZ: -t.Length / 2,
            worldSizeX: t.Width,
            worldSizeY: t.Height,
            worldSizeZ: t.Length,
            voxelSize: 1 / s
        }, x = {
            data: c,
            ...p
        }, g = u ? {
            data: u,
            ...p
        } : null;
        l.push(Z(x.data)), g && l.push(Z(g.data)), self.postMessage({
            buildId: e,
            buckets: h,
            occupancy: x,
            fogVolume: g
        }, l);
    }
})();
