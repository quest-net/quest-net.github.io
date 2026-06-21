(async ()=>{
    const C = "srgb", ve = "srgb-linear", Te = "linear", Wt = "srgb";
    class we {
        addEventListener(t, e) {
            this._listeners === void 0 && (this._listeners = {});
            const i = this._listeners;
            i[t] === void 0 && (i[t] = []), i[t].indexOf(e) === -1 && i[t].push(e);
        }
        hasEventListener(t, e) {
            const i = this._listeners;
            return i === void 0 ? !1 : i[t] !== void 0 && i[t].indexOf(e) !== -1;
        }
        removeEventListener(t, e) {
            const i = this._listeners;
            if (i === void 0) return;
            const s = i[t];
            if (s !== void 0) {
                const n = s.indexOf(e);
                n !== -1 && s.splice(n, 1);
            }
        }
        dispatchEvent(t) {
            const e = this._listeners;
            if (e === void 0) return;
            const i = e[t.type];
            if (i !== void 0) {
                t.target = this;
                const s = i.slice(0);
                for(let n = 0, o = s.length; n < o; n++)s[n].call(this, t);
                t.target = null;
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
    function Nt() {
        const r = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
        return (E[r & 255] + E[r >> 8 & 255] + E[r >> 16 & 255] + E[r >> 24 & 255] + "-" + E[t & 255] + E[t >> 8 & 255] + "-" + E[t >> 16 & 15 | 64] + E[t >> 24 & 255] + "-" + E[e & 63 | 128] + E[e >> 8 & 255] + "-" + E[e >> 16 & 255] + E[e >> 24 & 255] + E[i & 255] + E[i >> 8 & 255] + E[i >> 16 & 255] + E[i >> 24 & 255]).toLowerCase();
    }
    function S(r, t, e) {
        return Math.max(t, Math.min(e, r));
    }
    function Ai(r, t) {
        return (r % t + t) % t;
    }
    function Dt(r, t, e) {
        return (1 - e) * r + e * t;
    }
    class nt {
        constructor(t = 0, e = 0){
            nt.prototype.isVector2 = !0, this.x = t, this.y = e;
        }
        get width() {
            return this.x;
        }
        set width(t) {
            this.x = t;
        }
        get height() {
            return this.y;
        }
        set height(t) {
            this.y = t;
        }
        set(t, e) {
            return this.x = t, this.y = e, this;
        }
        setScalar(t) {
            return this.x = t, this.y = t, this;
        }
        setX(t) {
            return this.x = t, this;
        }
        setY(t) {
            return this.y = t, this;
        }
        setComponent(t, e) {
            switch(t){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch(t){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y);
        }
        copy(t) {
            return this.x = t.x, this.y = t.y, this;
        }
        add(t) {
            return this.x += t.x, this.y += t.y, this;
        }
        addScalar(t) {
            return this.x += t, this.y += t, this;
        }
        addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this;
        }
        addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this;
        }
        sub(t) {
            return this.x -= t.x, this.y -= t.y, this;
        }
        subScalar(t) {
            return this.x -= t, this.y -= t, this;
        }
        subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this;
        }
        multiply(t) {
            return this.x *= t.x, this.y *= t.y, this;
        }
        multiplyScalar(t) {
            return this.x *= t, this.y *= t, this;
        }
        divide(t) {
            return this.x /= t.x, this.y /= t.y, this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        applyMatrix3(t) {
            const e = this.x, i = this.y, s = t.elements;
            return this.x = s[0] * e + s[3] * i + s[6], this.y = s[1] * e + s[4] * i + s[7], this;
        }
        min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
        }
        max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
        }
        clamp(t, e) {
            return this.x = S(this.x, t.x, e.x), this.y = S(this.y, t.y, e.y), this;
        }
        clampScalar(t, e) {
            return this.x = S(this.x, t, e), this.y = S(this.y, t, e), this;
        }
        clampLength(t, e) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(S(i, t, e));
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
        dot(t) {
            return this.x * t.x + this.y * t.y;
        }
        cross(t) {
            return this.x * t.y - this.y * t.x;
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
        angleTo(t) {
            const e = Math.sqrt(this.lengthSq() * t.lengthSq());
            if (e === 0) return Math.PI / 2;
            const i = this.dot(t) / e;
            return Math.acos(S(i, -1, 1));
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
            const e = this.x - t.x, i = this.y - t.y;
            return e * e + i * i;
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
        }
        lerpVectors(t, e, i) {
            return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y;
        }
        fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t;
        }
        fromBufferAttribute(t, e) {
            return this.x = t.getX(e), this.y = t.getY(e), this;
        }
        rotateAround(t, e) {
            const i = Math.cos(e), s = Math.sin(e), n = this.x - t.x, o = this.y - t.y;
            return this.x = n * i - o * s + t.x, this.y = n * s + o * i + t.y, this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y;
        }
    }
    class gt {
        constructor(t = 0, e = 0, i = 0, s = 1){
            this.isQuaternion = !0, this._x = t, this._y = e, this._z = i, this._w = s;
        }
        static slerpFlat(t, e, i, s, n, o, a) {
            let h = i[s + 0], l = i[s + 1], c = i[s + 2], u = i[s + 3];
            const m = n[o + 0], d = n[o + 1], p = n[o + 2], f = n[o + 3];
            if (a === 0) {
                t[e + 0] = h, t[e + 1] = l, t[e + 2] = c, t[e + 3] = u;
                return;
            }
            if (a === 1) {
                t[e + 0] = m, t[e + 1] = d, t[e + 2] = p, t[e + 3] = f;
                return;
            }
            if (u !== f || h !== m || l !== d || c !== p) {
                let x = 1 - a;
                const g = h * m + l * d + c * p + u * f, b = g >= 0 ? 1 : -1, v = 1 - g * g;
                if (v > Number.EPSILON) {
                    const _ = Math.sqrt(v), w = Math.atan2(_, g * b);
                    x = Math.sin(x * w) / _, a = Math.sin(a * w) / _;
                }
                const M = a * b;
                if (h = h * x + m * M, l = l * x + d * M, c = c * x + p * M, u = u * x + f * M, x === 1 - a) {
                    const _ = 1 / Math.sqrt(h * h + l * l + c * c + u * u);
                    h *= _, l *= _, c *= _, u *= _;
                }
            }
            t[e] = h, t[e + 1] = l, t[e + 2] = c, t[e + 3] = u;
        }
        static multiplyQuaternionsFlat(t, e, i, s, n, o) {
            const a = i[s], h = i[s + 1], l = i[s + 2], c = i[s + 3], u = n[o], m = n[o + 1], d = n[o + 2], p = n[o + 3];
            return t[e] = a * p + c * u + h * d - l * m, t[e + 1] = h * p + c * m + l * u - a * d, t[e + 2] = l * p + c * d + a * m - h * u, t[e + 3] = c * p - a * u - h * m - l * d, t;
        }
        get x() {
            return this._x;
        }
        set x(t) {
            this._x = t, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t) {
            this._y = t, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t) {
            this._z = t, this._onChangeCallback();
        }
        get w() {
            return this._w;
        }
        set w(t) {
            this._w = t, this._onChangeCallback();
        }
        set(t, e, i, s) {
            return this._x = t, this._y = e, this._z = i, this._w = s, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
        }
        setFromEuler(t, e = !0) {
            const i = t._x, s = t._y, n = t._z, o = t._order, a = Math.cos, h = Math.sin, l = a(i / 2), c = a(s / 2), u = a(n / 2), m = h(i / 2), d = h(s / 2), p = h(n / 2);
            switch(o){
                case "XYZ":
                    this._x = m * c * u + l * d * p, this._y = l * d * u - m * c * p, this._z = l * c * p + m * d * u, this._w = l * c * u - m * d * p;
                    break;
                case "YXZ":
                    this._x = m * c * u + l * d * p, this._y = l * d * u - m * c * p, this._z = l * c * p - m * d * u, this._w = l * c * u + m * d * p;
                    break;
                case "ZXY":
                    this._x = m * c * u - l * d * p, this._y = l * d * u + m * c * p, this._z = l * c * p + m * d * u, this._w = l * c * u - m * d * p;
                    break;
                case "ZYX":
                    this._x = m * c * u - l * d * p, this._y = l * d * u + m * c * p, this._z = l * c * p - m * d * u, this._w = l * c * u + m * d * p;
                    break;
                case "YZX":
                    this._x = m * c * u + l * d * p, this._y = l * d * u + m * c * p, this._z = l * c * p - m * d * u, this._w = l * c * u - m * d * p;
                    break;
                case "XZY":
                    this._x = m * c * u - l * d * p, this._y = l * d * u - m * c * p, this._z = l * c * p + m * d * u, this._w = l * c * u + m * d * p;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
            }
            return e === !0 && this._onChangeCallback(), this;
        }
        setFromAxisAngle(t, e) {
            const i = e / 2, s = Math.sin(i);
            return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(i), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t) {
            const e = t.elements, i = e[0], s = e[4], n = e[8], o = e[1], a = e[5], h = e[9], l = e[2], c = e[6], u = e[10], m = i + a + u;
            if (m > 0) {
                const d = .5 / Math.sqrt(m + 1);
                this._w = .25 / d, this._x = (c - h) * d, this._y = (n - l) * d, this._z = (o - s) * d;
            } else if (i > a && i > u) {
                const d = 2 * Math.sqrt(1 + i - a - u);
                this._w = (c - h) / d, this._x = .25 * d, this._y = (s + o) / d, this._z = (n + l) / d;
            } else if (a > u) {
                const d = 2 * Math.sqrt(1 + a - i - u);
                this._w = (n - l) / d, this._x = (s + o) / d, this._y = .25 * d, this._z = (h + c) / d;
            } else {
                const d = 2 * Math.sqrt(1 + u - i - a);
                this._w = (o - s) / d, this._x = (n + l) / d, this._y = (h + c) / d, this._z = .25 * d;
            }
            return this._onChangeCallback(), this;
        }
        setFromUnitVectors(t, e) {
            let i = t.dot(e) + 1;
            return i < 1e-8 ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = i), this.normalize();
        }
        angleTo(t) {
            return 2 * Math.acos(Math.abs(S(this.dot(t), -1, 1)));
        }
        rotateTowards(t, e) {
            const i = this.angleTo(t);
            if (i === 0) return this;
            const s = Math.min(1, e / i);
            return this.slerp(t, s), this;
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
        dot(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
        }
        normalize() {
            let t = this.length();
            return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
        }
        multiply(t) {
            return this.multiplyQuaternions(this, t);
        }
        premultiply(t) {
            return this.multiplyQuaternions(t, this);
        }
        multiplyQuaternions(t, e) {
            const i = t._x, s = t._y, n = t._z, o = t._w, a = e._x, h = e._y, l = e._z, c = e._w;
            return this._x = i * c + o * a + s * l - n * h, this._y = s * c + o * h + n * a - i * l, this._z = n * c + o * l + i * h - s * a, this._w = o * c - i * a - s * h - n * l, this._onChangeCallback(), this;
        }
        slerp(t, e) {
            if (e === 0) return this;
            if (e === 1) return this.copy(t);
            const i = this._x, s = this._y, n = this._z, o = this._w;
            let a = o * t._w + i * t._x + s * t._y + n * t._z;
            if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = o, this._x = i, this._y = s, this._z = n, this;
            const h = 1 - a * a;
            if (h <= Number.EPSILON) {
                const d = 1 - e;
                return this._w = d * o + e * this._w, this._x = d * i + e * this._x, this._y = d * s + e * this._y, this._z = d * n + e * this._z, this.normalize(), this;
            }
            const l = Math.sqrt(h), c = Math.atan2(l, a), u = Math.sin((1 - e) * c) / l, m = Math.sin(e * c) / l;
            return this._w = o * u + this._w * m, this._x = i * u + this._x * m, this._y = s * u + this._y * m, this._z = n * u + this._z * m, this._onChangeCallback(), this;
        }
        slerpQuaternions(t, e, i) {
            return this.copy(t).slerp(e, i);
        }
        random() {
            const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), i = Math.random(), s = Math.sqrt(1 - i), n = Math.sqrt(i);
            return this.set(s * Math.sin(t), s * Math.cos(t), n * Math.sin(e), n * Math.cos(e));
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
        }
        fromArray(t, e = 0) {
            return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
        }
        fromBufferAttribute(t, e) {
            return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
        }
        toJSON() {
            return this.toArray();
        }
        _onChange(t) {
            return this._onChangeCallback = t, this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._w;
        }
    }
    class F {
        constructor(t = 0, e = 0, i = 0){
            F.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = i;
        }
        set(t, e, i) {
            return i === void 0 && (i = this.z), this.x = t, this.y = e, this.z = i, this;
        }
        setScalar(t) {
            return this.x = t, this.y = t, this.z = t, this;
        }
        setX(t) {
            return this.x = t, this;
        }
        setY(t) {
            return this.y = t, this;
        }
        setZ(t) {
            return this.z = t, this;
        }
        setComponent(t, e) {
            switch(t){
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t);
            }
            return this;
        }
        getComponent(t) {
            switch(t){
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z);
        }
        copy(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this;
        }
        add(t) {
            return this.x += t.x, this.y += t.y, this.z += t.z, this;
        }
        addScalar(t) {
            return this.x += t, this.y += t, this.z += t, this;
        }
        addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
        }
        addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
        }
        sub(t) {
            return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
        }
        subScalar(t) {
            return this.x -= t, this.y -= t, this.z -= t, this;
        }
        subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
        }
        multiply(t) {
            return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
        }
        multiplyScalar(t) {
            return this.x *= t, this.y *= t, this.z *= t, this;
        }
        multiplyVectors(t, e) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
        }
        applyEuler(t) {
            return this.applyQuaternion(Ce.setFromEuler(t));
        }
        applyAxisAngle(t, e) {
            return this.applyQuaternion(Ce.setFromAxisAngle(t, e));
        }
        applyMatrix3(t) {
            const e = this.x, i = this.y, s = this.z, n = t.elements;
            return this.x = n[0] * e + n[3] * i + n[6] * s, this.y = n[1] * e + n[4] * i + n[7] * s, this.z = n[2] * e + n[5] * i + n[8] * s, this;
        }
        applyNormalMatrix(t) {
            return this.applyMatrix3(t).normalize();
        }
        applyMatrix4(t) {
            const e = this.x, i = this.y, s = this.z, n = t.elements, o = 1 / (n[3] * e + n[7] * i + n[11] * s + n[15]);
            return this.x = (n[0] * e + n[4] * i + n[8] * s + n[12]) * o, this.y = (n[1] * e + n[5] * i + n[9] * s + n[13]) * o, this.z = (n[2] * e + n[6] * i + n[10] * s + n[14]) * o, this;
        }
        applyQuaternion(t) {
            const e = this.x, i = this.y, s = this.z, n = t.x, o = t.y, a = t.z, h = t.w, l = 2 * (o * s - a * i), c = 2 * (a * e - n * s), u = 2 * (n * i - o * e);
            return this.x = e + h * l + o * u - a * c, this.y = i + h * c + a * l - n * u, this.z = s + h * u + n * c - o * l, this;
        }
        project(t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
        }
        unproject(t) {
            return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
        }
        transformDirection(t) {
            const e = this.x, i = this.y, s = this.z, n = t.elements;
            return this.x = n[0] * e + n[4] * i + n[8] * s, this.y = n[1] * e + n[5] * i + n[9] * s, this.z = n[2] * e + n[6] * i + n[10] * s, this.normalize();
        }
        divide(t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
        }
        max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
        }
        clamp(t, e) {
            return this.x = S(this.x, t.x, e.x), this.y = S(this.y, t.y, e.y), this.z = S(this.z, t.z, e.z), this;
        }
        clampScalar(t, e) {
            return this.x = S(this.x, t, e), this.y = S(this.y, t, e), this.z = S(this.z, t, e), this;
        }
        clampLength(t, e) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(S(i, t, e));
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
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z;
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
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
        }
        lerpVectors(t, e, i) {
            return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this;
        }
        cross(t) {
            return this.crossVectors(this, t);
        }
        crossVectors(t, e) {
            const i = t.x, s = t.y, n = t.z, o = e.x, a = e.y, h = e.z;
            return this.x = s * h - n * a, this.y = n * o - i * h, this.z = i * a - s * o, this;
        }
        projectOnVector(t) {
            const e = t.lengthSq();
            if (e === 0) return this.set(0, 0, 0);
            const i = t.dot(this) / e;
            return this.copy(t).multiplyScalar(i);
        }
        projectOnPlane(t) {
            return Ut.copy(this).projectOnVector(t), this.sub(Ut);
        }
        reflect(t) {
            return this.sub(Ut.copy(t).multiplyScalar(2 * this.dot(t)));
        }
        angleTo(t) {
            const e = Math.sqrt(this.lengthSq() * t.lengthSq());
            if (e === 0) return Math.PI / 2;
            const i = this.dot(t) / e;
            return Math.acos(S(i, -1, 1));
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t));
        }
        distanceToSquared(t) {
            const e = this.x - t.x, i = this.y - t.y, s = this.z - t.z;
            return e * e + i * i + s * s;
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
        }
        setFromSpherical(t) {
            return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
        }
        setFromSphericalCoords(t, e, i) {
            const s = Math.sin(e) * t;
            return this.x = s * Math.sin(i), this.y = Math.cos(e) * t, this.z = s * Math.cos(i), this;
        }
        setFromCylindrical(t) {
            return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
        }
        setFromCylindricalCoords(t, e, i) {
            return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this;
        }
        setFromMatrixPosition(t) {
            const e = t.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this;
        }
        setFromMatrixScale(t) {
            const e = this.setFromMatrixColumn(t, 0).length(), i = this.setFromMatrixColumn(t, 1).length(), s = this.setFromMatrixColumn(t, 2).length();
            return this.x = e, this.y = i, this.z = s, this;
        }
        setFromMatrixColumn(t, e) {
            return this.fromArray(t.elements, e * 4);
        }
        setFromMatrix3Column(t, e) {
            return this.fromArray(t.elements, e * 3);
        }
        setFromEuler(t) {
            return this.x = t._x, this.y = t._y, this.z = t._z, this;
        }
        setFromColor(t) {
            return this.x = t.r, this.y = t.g, this.z = t.b, this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z;
        }
        fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
        }
        fromBufferAttribute(t, e) {
            return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
        }
        randomDirection() {
            const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, i = Math.sqrt(1 - e * e);
            return this.x = i * Math.cos(t), this.y = e, this.z = i * Math.sin(t), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z;
        }
    }
    const Ut = new F, Ce = new gt;
    class at {
        constructor(t, e, i, s, n, o, a, h, l){
            at.prototype.isMatrix3 = !0, this.elements = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], t !== void 0 && this.set(t, e, i, s, n, o, a, h, l);
        }
        set(t, e, i, s, n, o, a, h, l) {
            const c = this.elements;
            return c[0] = t, c[1] = s, c[2] = a, c[3] = e, c[4] = n, c[5] = h, c[6] = i, c[7] = o, c[8] = l, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
        }
        copy(t) {
            const e = this.elements, i = t.elements;
            return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this;
        }
        extractBasis(t, e, i) {
            return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
        }
        setFromMatrix4(t) {
            const e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
        }
        multiply(t) {
            return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
            const i = t.elements, s = e.elements, n = this.elements, o = i[0], a = i[3], h = i[6], l = i[1], c = i[4], u = i[7], m = i[2], d = i[5], p = i[8], f = s[0], x = s[3], g = s[6], b = s[1], v = s[4], M = s[7], _ = s[2], w = s[5], y = s[8];
            return n[0] = o * f + a * b + h * _, n[3] = o * x + a * v + h * w, n[6] = o * g + a * M + h * y, n[1] = l * f + c * b + u * _, n[4] = l * x + c * v + u * w, n[7] = l * g + c * M + u * y, n[2] = m * f + d * b + p * _, n[5] = m * x + d * v + p * w, n[8] = m * g + d * M + p * y, this;
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
        }
        determinant() {
            const t = this.elements, e = t[0], i = t[1], s = t[2], n = t[3], o = t[4], a = t[5], h = t[6], l = t[7], c = t[8];
            return e * o * c - e * a * l - i * n * c + i * a * h + s * n * l - s * o * h;
        }
        invert() {
            const t = this.elements, e = t[0], i = t[1], s = t[2], n = t[3], o = t[4], a = t[5], h = t[6], l = t[7], c = t[8], u = c * o - a * l, m = a * h - c * n, d = l * n - o * h, p = e * u + i * m + s * d;
            if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const f = 1 / p;
            return t[0] = u * f, t[1] = (s * l - c * i) * f, t[2] = (a * i - s * o) * f, t[3] = m * f, t[4] = (c * e - s * h) * f, t[5] = (s * n - a * e) * f, t[6] = d * f, t[7] = (i * h - l * e) * f, t[8] = (o * e - i * n) * f, this;
        }
        transpose() {
            let t;
            const e = this.elements;
            return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
        }
        getNormalMatrix(t) {
            return this.setFromMatrix4(t).invert().transpose();
        }
        transposeIntoArray(t) {
            const e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
        }
        setUvTransform(t, e, i, s, n, o, a) {
            const h = Math.cos(n), l = Math.sin(n);
            return this.set(i * h, i * l, -i * (h * o + l * a) + o + t, -s * l, s * h, -s * (-l * o + h * a) + a + e, 0, 0, 1), this;
        }
        scale(t, e) {
            return this.premultiply(Pt.makeScale(t, e)), this;
        }
        rotate(t) {
            return this.premultiply(Pt.makeRotation(-t)), this;
        }
        translate(t, e) {
            return this.premultiply(Pt.makeTranslation(t, e)), this;
        }
        makeTranslation(t, e) {
            return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this;
        }
        makeRotation(t) {
            const e = Math.cos(t), i = Math.sin(t);
            return this.set(e, -i, 0, i, e, 0, 0, 0, 1), this;
        }
        makeScale(t, e) {
            return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
        }
        equals(t) {
            const e = this.elements, i = t.elements;
            for(let s = 0; s < 9; s++)if (e[s] !== i[s]) return !1;
            return !0;
        }
        fromArray(t, e = 0) {
            for(let i = 0; i < 9; i++)this.elements[i] = t[i + e];
            return this;
        }
        toArray(t = [], e = 0) {
            const i = this.elements;
            return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t;
        }
        clone() {
            return new this.constructor().fromArray(this.elements);
        }
    }
    const Pt = new at;
    function _e(r) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", r);
    }
    const Re = {};
    function Le(r) {
        r in Re || (Re[r] = !0, console.warn(r));
    }
    const ze = new at().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), Oe = new at().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
    function Ei() {
        const r = {
            enabled: !0,
            workingColorSpace: ve,
            spaces: {},
            convert: function(s, n, o) {
                return this.enabled === !1 || n === o || !n || !o || (this.spaces[n].transfer === Wt && (s.r = q(s.r), s.g = q(s.g), s.b = q(s.b)), this.spaces[n].primaries !== this.spaces[o].primaries && (s.applyMatrix3(this.spaces[n].toXYZ), s.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === Wt && (s.r = mt(s.r), s.g = mt(s.g), s.b = mt(s.b))), s;
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
                return s === "" ? Te : this.spaces[s].transfer;
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
            _getMatrix: function(s, n, o) {
                return s.copy(this.spaces[n].toXYZ).multiply(this.spaces[o].fromXYZ);
            },
            _getDrawingBufferColorSpace: function(s) {
                return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
            },
            _getUnpackColorSpace: function(s = this.workingColorSpace) {
                return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
            },
            fromWorkingColorSpace: function(s, n) {
                return Le("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), r.workingToColorSpace(s, n);
            },
            toWorkingColorSpace: function(s, n) {
                return Le("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), r.colorSpaceToWorking(s, n);
            }
        }, t = [
            .64,
            .33,
            .3,
            .6,
            .15,
            .06
        ], e = [
            .2126,
            .7152,
            .0722
        ], i = [
            .3127,
            .329
        ];
        return r.define({
            [ve]: {
                primaries: t,
                whitePoint: i,
                transfer: Te,
                toXYZ: ze,
                fromXYZ: Oe,
                luminanceCoefficients: e,
                workingColorSpaceConfig: {
                    unpackColorSpace: C
                },
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: C
                }
            },
            [C]: {
                primaries: t,
                whitePoint: i,
                transfer: Wt,
                toXYZ: ze,
                fromXYZ: Oe,
                luminanceCoefficients: e,
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: C
                }
            }
        }), r;
    }
    const O = Ei();
    function q(r) {
        return r < .04045 ? r * .0773993808 : Math.pow(r * .9478672986 + .0521327014, 2.4);
    }
    function mt(r) {
        return r < .0031308 ? r * 12.92 : 1.055 * Math.pow(r, .41666) - .055;
    }
    let lt;
    class Ti {
        static getDataURL(t, e = "image/png") {
            if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
            let i;
            if (t instanceof HTMLCanvasElement) i = t;
            else {
                lt === void 0 && (lt = _e("canvas")), lt.width = t.width, lt.height = t.height;
                const s = lt.getContext("2d");
                t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0, t.width, t.height), i = lt;
            }
            return i.toDataURL(e);
        }
        static sRGBToLinear(t) {
            if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
                const e = _e("canvas");
                e.width = t.width, e.height = t.height;
                const i = e.getContext("2d");
                i.drawImage(t, 0, 0, t.width, t.height);
                const s = i.getImageData(0, 0, t.width, t.height), n = s.data;
                for(let o = 0; o < n.length; o++)n[o] = q(n[o] / 255) * 255;
                return i.putImageData(s, 0, 0), e;
            } else if (t.data) {
                const e = t.data.slice(0);
                for(let i = 0; i < e.length; i++)e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[i] = Math.floor(q(e[i] / 255) * 255) : e[i] = q(e[i]);
                return {
                    data: e,
                    width: t.width,
                    height: t.height
                };
            } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
        }
    }
    let Ci = 0;
    class Ri {
        constructor(t = null){
            this.isSource = !0, Object.defineProperty(this, "id", {
                value: Ci++
            }), this.uuid = Nt(), this.data = t, this.dataReady = !0, this.version = 0;
        }
        getSize(t) {
            const e = this.data;
            return typeof HTMLVideoElement < "u" && e instanceof HTMLVideoElement ? t.set(e.videoWidth, e.videoHeight, 0) : e instanceof VideoFrame ? t.set(e.displayHeight, e.displayWidth, 0) : e !== null ? t.set(e.width, e.height, e.depth || 0) : t.set(0, 0, 0), t;
        }
        set needsUpdate(t) {
            t === !0 && this.version++;
        }
        toJSON(t) {
            const e = t === void 0 || typeof t == "string";
            if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
            const i = {
                uuid: this.uuid,
                url: ""
            }, s = this.data;
            if (s !== null) {
                let n;
                if (Array.isArray(s)) {
                    n = [];
                    for(let o = 0, a = s.length; o < a; o++)s[o].isDataTexture ? n.push(Bt(s[o].image)) : n.push(Bt(s[o]));
                } else n = Bt(s);
                i.url = n;
            }
            return e || (t.images[this.uuid] = i), i;
        }
    }
    function Bt(r) {
        return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Ti.getDataURL(r) : r.data ? {
            data: Array.from(r.data),
            width: r.width,
            height: r.height,
            type: r.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
    }
    let Li = 0;
    const Ht = new F;
    class j extends we {
        constructor(t = j.DEFAULT_IMAGE, e = j.DEFAULT_MAPPING, i = 1001, s = 1001, n = 1006, o = 1008, a = 1023, h = 1009, l = j.DEFAULT_ANISOTROPY, c = ""){
            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                value: Li++
            }), this.uuid = Nt(), this.name = "", this.source = new Ri(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = i, this.wrapT = s, this.magFilter = n, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = h, this.offset = new nt(0, 0), this.repeat = new nt(1, 1), this.center = new nt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new at, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = c, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0;
        }
        get width() {
            return this.source.getSize(Ht).x;
        }
        get height() {
            return this.source.getSize(Ht).y;
        }
        get depth() {
            return this.source.getSize(Ht).z;
        }
        get image() {
            return this.source.data;
        }
        set image(t = null) {
            this.source.data = t;
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
        }
        addUpdateRange(t, e) {
            this.updateRanges.push({
                start: t,
                count: e
            });
        }
        clearUpdateRanges() {
            this.updateRanges.length = 0;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(t) {
            return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isArrayTexture = t.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
        }
        setValues(t) {
            for(const e in t){
                const i = t[e];
                if (i === void 0) {
                    console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);
                    continue;
                }
                const s = this[e];
                if (s === void 0) {
                    console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);
                    continue;
                }
                s && i && s.isVector2 && i.isVector2 || s && i && s.isVector3 && i.isVector3 || s && i && s.isMatrix3 && i.isMatrix3 ? s.copy(i) : this[e] = i;
            }
        }
        toJSON(t) {
            const e = t === void 0 || typeof t == "string";
            if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
            const i = {
                metadata: {
                    version: 4.7,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                image: this.source.toJSON(t).uuid,
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
            return Object.keys(this.userData).length > 0 && (i.userData = this.userData), e || (t.textures[this.uuid] = i), i;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        transformUv(t) {
            if (this.mapping !== 300) return t;
            if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch(this.wrapS){
                case 1e3:
                    t.x = t.x - Math.floor(t.x);
                    break;
                case 1001:
                    t.x = t.x < 0 ? 0 : 1;
                    break;
                case 1002:
                    Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
                    break;
            }
            if (t.y < 0 || t.y > 1) switch(this.wrapT){
                case 1e3:
                    t.y = t.y - Math.floor(t.y);
                    break;
                case 1001:
                    t.y = t.y < 0 ? 0 : 1;
                    break;
                case 1002:
                    Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
                    break;
            }
            return this.flipY && (t.y = 1 - t.y), t;
        }
        set needsUpdate(t) {
            t === !0 && (this.version++, this.source.needsUpdate = !0);
        }
        set needsPMREMUpdate(t) {
            t === !0 && this.pmremVersion++;
        }
    }
    j.DEFAULT_IMAGE = null;
    j.DEFAULT_MAPPING = 300;
    j.DEFAULT_ANISOTROPY = 1;
    class zi extends j {
        constructor(t = null, e = 1, i = 1, s = 1){
            super(null), this.isData3DTexture = !0, this.image = {
                data: t,
                width: e,
                height: i,
                depth: s
            }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    class X {
        constructor(t, e, i, s, n, o, a, h, l, c, u, m, d, p, f, x){
            X.prototype.isMatrix4 = !0, this.elements = [
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
            ], t !== void 0 && this.set(t, e, i, s, n, o, a, h, l, c, u, m, d, p, f, x);
        }
        set(t, e, i, s, n, o, a, h, l, c, u, m, d, p, f, x) {
            const g = this.elements;
            return g[0] = t, g[4] = e, g[8] = i, g[12] = s, g[1] = n, g[5] = o, g[9] = a, g[13] = h, g[2] = l, g[6] = c, g[10] = u, g[14] = m, g[3] = d, g[7] = p, g[11] = f, g[15] = x, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
            return new X().fromArray(this.elements);
        }
        copy(t) {
            const e = this.elements, i = t.elements;
            return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this;
        }
        copyPosition(t) {
            const e = this.elements, i = t.elements;
            return e[12] = i[12], e[13] = i[13], e[14] = i[14], this;
        }
        setFromMatrix3(t) {
            const e = t.elements;
            return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
        }
        extractBasis(t, e, i) {
            return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
        }
        makeBasis(t, e, i) {
            return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this;
        }
        extractRotation(t) {
            const e = this.elements, i = t.elements, s = 1 / ht.setFromMatrixColumn(t, 0).length(), n = 1 / ht.setFromMatrixColumn(t, 1).length(), o = 1 / ht.setFromMatrixColumn(t, 2).length();
            return e[0] = i[0] * s, e[1] = i[1] * s, e[2] = i[2] * s, e[3] = 0, e[4] = i[4] * n, e[5] = i[5] * n, e[6] = i[6] * n, e[7] = 0, e[8] = i[8] * o, e[9] = i[9] * o, e[10] = i[10] * o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromEuler(t) {
            const e = this.elements, i = t.x, s = t.y, n = t.z, o = Math.cos(i), a = Math.sin(i), h = Math.cos(s), l = Math.sin(s), c = Math.cos(n), u = Math.sin(n);
            if (t.order === "XYZ") {
                const m = o * c, d = o * u, p = a * c, f = a * u;
                e[0] = h * c, e[4] = -h * u, e[8] = l, e[1] = d + p * l, e[5] = m - f * l, e[9] = -a * h, e[2] = f - m * l, e[6] = p + d * l, e[10] = o * h;
            } else if (t.order === "YXZ") {
                const m = h * c, d = h * u, p = l * c, f = l * u;
                e[0] = m + f * a, e[4] = p * a - d, e[8] = o * l, e[1] = o * u, e[5] = o * c, e[9] = -a, e[2] = d * a - p, e[6] = f + m * a, e[10] = o * h;
            } else if (t.order === "ZXY") {
                const m = h * c, d = h * u, p = l * c, f = l * u;
                e[0] = m - f * a, e[4] = -o * u, e[8] = p + d * a, e[1] = d + p * a, e[5] = o * c, e[9] = f - m * a, e[2] = -o * l, e[6] = a, e[10] = o * h;
            } else if (t.order === "ZYX") {
                const m = o * c, d = o * u, p = a * c, f = a * u;
                e[0] = h * c, e[4] = p * l - d, e[8] = m * l + f, e[1] = h * u, e[5] = f * l + m, e[9] = d * l - p, e[2] = -l, e[6] = a * h, e[10] = o * h;
            } else if (t.order === "YZX") {
                const m = o * h, d = o * l, p = a * h, f = a * l;
                e[0] = h * c, e[4] = f - m * u, e[8] = p * u + d, e[1] = u, e[5] = o * c, e[9] = -a * c, e[2] = -l * c, e[6] = d * u + p, e[10] = m - f * u;
            } else if (t.order === "XZY") {
                const m = o * h, d = o * l, p = a * h, f = a * l;
                e[0] = h * c, e[4] = -u, e[8] = l * c, e[1] = m * u + f, e[5] = o * c, e[9] = d * u - p, e[2] = p * u - d, e[6] = a * c, e[10] = f * u + m;
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromQuaternion(t) {
            return this.compose(Oi, t, Ii);
        }
        lookAt(t, e, i) {
            const s = this.elements;
            return R.subVectors(t, e), R.lengthSq() === 0 && (R.z = 1), R.normalize(), J.crossVectors(i, R), J.lengthSq() === 0 && (Math.abs(i.z) === 1 ? R.x += 1e-4 : R.z += 1e-4, R.normalize(), J.crossVectors(i, R)), J.normalize(), Tt.crossVectors(R, J), s[0] = J.x, s[4] = Tt.x, s[8] = R.x, s[1] = J.y, s[5] = Tt.y, s[9] = R.y, s[2] = J.z, s[6] = Tt.z, s[10] = R.z, this;
        }
        multiply(t) {
            return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
            const i = t.elements, s = e.elements, n = this.elements, o = i[0], a = i[4], h = i[8], l = i[12], c = i[1], u = i[5], m = i[9], d = i[13], p = i[2], f = i[6], x = i[10], g = i[14], b = i[3], v = i[7], M = i[11], _ = i[15], w = s[0], y = s[4], Z = s[8], tt = s[12], et = s[1], it = s[5], yt = s[9], vt = s[13], _t = s[2], St = s[6], Mt = s[10], wt = s[14], Ft = s[3], bt = s[7], At = s[11], Et = s[15];
            return n[0] = o * w + a * et + h * _t + l * Ft, n[4] = o * y + a * it + h * St + l * bt, n[8] = o * Z + a * yt + h * Mt + l * At, n[12] = o * tt + a * vt + h * wt + l * Et, n[1] = c * w + u * et + m * _t + d * Ft, n[5] = c * y + u * it + m * St + d * bt, n[9] = c * Z + u * yt + m * Mt + d * At, n[13] = c * tt + u * vt + m * wt + d * Et, n[2] = p * w + f * et + x * _t + g * Ft, n[6] = p * y + f * it + x * St + g * bt, n[10] = p * Z + f * yt + x * Mt + g * At, n[14] = p * tt + f * vt + x * wt + g * Et, n[3] = b * w + v * et + M * _t + _ * Ft, n[7] = b * y + v * it + M * St + _ * bt, n[11] = b * Z + v * yt + M * Mt + _ * At, n[15] = b * tt + v * vt + M * wt + _ * Et, this;
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
        }
        determinant() {
            const t = this.elements, e = t[0], i = t[4], s = t[8], n = t[12], o = t[1], a = t[5], h = t[9], l = t[13], c = t[2], u = t[6], m = t[10], d = t[14], p = t[3], f = t[7], x = t[11], g = t[15];
            return p * (+n * h * u - s * l * u - n * a * m + i * l * m + s * a * d - i * h * d) + f * (+e * h * d - e * l * m + n * o * m - s * o * d + s * l * c - n * h * c) + x * (+e * l * u - e * a * d - n * o * u + i * o * d + n * a * c - i * l * c) + g * (-s * a * c - e * h * u + e * a * m + s * o * u - i * o * m + i * h * c);
        }
        transpose() {
            const t = this.elements;
            let e;
            return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
        }
        setPosition(t, e, i) {
            const s = this.elements;
            return t.isVector3 ? (s[12] = t.x, s[13] = t.y, s[14] = t.z) : (s[12] = t, s[13] = e, s[14] = i), this;
        }
        invert() {
            const t = this.elements, e = t[0], i = t[1], s = t[2], n = t[3], o = t[4], a = t[5], h = t[6], l = t[7], c = t[8], u = t[9], m = t[10], d = t[11], p = t[12], f = t[13], x = t[14], g = t[15], b = u * x * l - f * m * l + f * h * d - a * x * d - u * h * g + a * m * g, v = p * m * l - c * x * l - p * h * d + o * x * d + c * h * g - o * m * g, M = c * f * l - p * u * l + p * a * d - o * f * d - c * a * g + o * u * g, _ = p * u * h - c * f * h - p * a * m + o * f * m + c * a * x - o * u * x, w = e * b + i * v + s * M + n * _;
            if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const y = 1 / w;
            return t[0] = b * y, t[1] = (f * m * n - u * x * n - f * s * d + i * x * d + u * s * g - i * m * g) * y, t[2] = (a * x * n - f * h * n + f * s * l - i * x * l - a * s * g + i * h * g) * y, t[3] = (u * h * n - a * m * n - u * s * l + i * m * l + a * s * d - i * h * d) * y, t[4] = v * y, t[5] = (c * x * n - p * m * n + p * s * d - e * x * d - c * s * g + e * m * g) * y, t[6] = (p * h * n - o * x * n - p * s * l + e * x * l + o * s * g - e * h * g) * y, t[7] = (o * m * n - c * h * n + c * s * l - e * m * l - o * s * d + e * h * d) * y, t[8] = M * y, t[9] = (p * u * n - c * f * n - p * i * d + e * f * d + c * i * g - e * u * g) * y, t[10] = (o * f * n - p * a * n + p * i * l - e * f * l - o * i * g + e * a * g) * y, t[11] = (c * a * n - o * u * n - c * i * l + e * u * l + o * i * d - e * a * d) * y, t[12] = _ * y, t[13] = (c * f * s - p * u * s + p * i * m - e * f * m - c * i * x + e * u * x) * y, t[14] = (p * a * s - o * f * s - p * i * h + e * f * h + o * i * x - e * a * x) * y, t[15] = (o * u * s - c * a * s + c * i * h - e * u * h - o * i * m + e * a * m) * y, this;
        }
        scale(t) {
            const e = this.elements, i = t.x, s = t.y, n = t.z;
            return e[0] *= i, e[4] *= s, e[8] *= n, e[1] *= i, e[5] *= s, e[9] *= n, e[2] *= i, e[6] *= s, e[10] *= n, e[3] *= i, e[7] *= s, e[11] *= n, this;
        }
        getMaxScaleOnAxis() {
            const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, i, s));
        }
        makeTranslation(t, e, i) {
            return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this;
        }
        makeRotationX(t) {
            const e = Math.cos(t), i = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationY(t) {
            const e = Math.cos(t), i = Math.sin(t);
            return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this;
        }
        makeRotationZ(t) {
            const e = Math.cos(t), i = Math.sin(t);
            return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        makeRotationAxis(t, e) {
            const i = Math.cos(e), s = Math.sin(e), n = 1 - i, o = t.x, a = t.y, h = t.z, l = n * o, c = n * a;
            return this.set(l * o + i, l * a - s * h, l * h + s * a, 0, l * a + s * h, c * a + i, c * h - s * o, 0, l * h - s * a, c * h + s * o, n * h * h + i, 0, 0, 0, 0, 1), this;
        }
        makeScale(t, e, i) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
        }
        makeShear(t, e, i, s, n, o) {
            return this.set(1, i, n, 0, t, 1, o, 0, e, s, 1, 0, 0, 0, 0, 1), this;
        }
        compose(t, e, i) {
            const s = this.elements, n = e._x, o = e._y, a = e._z, h = e._w, l = n + n, c = o + o, u = a + a, m = n * l, d = n * c, p = n * u, f = o * c, x = o * u, g = a * u, b = h * l, v = h * c, M = h * u, _ = i.x, w = i.y, y = i.z;
            return s[0] = (1 - (f + g)) * _, s[1] = (d + M) * _, s[2] = (p - v) * _, s[3] = 0, s[4] = (d - M) * w, s[5] = (1 - (m + g)) * w, s[6] = (x + b) * w, s[7] = 0, s[8] = (p + v) * y, s[9] = (x - b) * y, s[10] = (1 - (m + f)) * y, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
        }
        decompose(t, e, i) {
            const s = this.elements;
            let n = ht.set(s[0], s[1], s[2]).length();
            const o = ht.set(s[4], s[5], s[6]).length(), a = ht.set(s[8], s[9], s[10]).length();
            this.determinant() < 0 && (n = -n), t.x = s[12], t.y = s[13], t.z = s[14], I.copy(this);
            const l = 1 / n, c = 1 / o, u = 1 / a;
            return I.elements[0] *= l, I.elements[1] *= l, I.elements[2] *= l, I.elements[4] *= c, I.elements[5] *= c, I.elements[6] *= c, I.elements[8] *= u, I.elements[9] *= u, I.elements[10] *= u, e.setFromRotationMatrix(I), i.x = n, i.y = o, i.z = a, this;
        }
        makePerspective(t, e, i, s, n, o, a = 2e3, h = !1) {
            const l = this.elements, c = 2 * n / (e - t), u = 2 * n / (i - s), m = (e + t) / (e - t), d = (i + s) / (i - s);
            let p, f;
            if (h) p = n / (o - n), f = o * n / (o - n);
            else if (a === 2e3) p = -(o + n) / (o - n), f = -2 * o * n / (o - n);
            else if (a === 2001) p = -o / (o - n), f = -o * n / (o - n);
            else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
            return l[0] = c, l[4] = 0, l[8] = m, l[12] = 0, l[1] = 0, l[5] = u, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = f, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
        }
        makeOrthographic(t, e, i, s, n, o, a = 2e3, h = !1) {
            const l = this.elements, c = 2 / (e - t), u = 2 / (i - s), m = -(e + t) / (e - t), d = -(i + s) / (i - s);
            let p, f;
            if (h) p = 1 / (o - n), f = o / (o - n);
            else if (a === 2e3) p = -2 / (o - n), f = -(o + n) / (o - n);
            else if (a === 2001) p = -1 / (o - n), f = -n / (o - n);
            else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
            return l[0] = c, l[4] = 0, l[8] = 0, l[12] = m, l[1] = 0, l[5] = u, l[9] = 0, l[13] = d, l[2] = 0, l[6] = 0, l[10] = p, l[14] = f, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
        }
        equals(t) {
            const e = this.elements, i = t.elements;
            for(let s = 0; s < 16; s++)if (e[s] !== i[s]) return !1;
            return !0;
        }
        fromArray(t, e = 0) {
            for(let i = 0; i < 16; i++)this.elements[i] = t[i + e];
            return this;
        }
        toArray(t = [], e = 0) {
            const i = this.elements;
            return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t;
        }
    }
    const ht = new F, I = new X, Oi = new F(0, 0, 0), Ii = new F(1, 1, 1), J = new F, Tt = new F, R = new F, Ie = new X, Ne = new gt;
    class xt {
        constructor(t = 0, e = 0, i = 0, s = xt.DEFAULT_ORDER){
            this.isEuler = !0, this._x = t, this._y = e, this._z = i, this._order = s;
        }
        get x() {
            return this._x;
        }
        set x(t) {
            this._x = t, this._onChangeCallback();
        }
        get y() {
            return this._y;
        }
        set y(t) {
            this._y = t, this._onChangeCallback();
        }
        get z() {
            return this._z;
        }
        set z(t) {
            this._z = t, this._onChangeCallback();
        }
        get order() {
            return this._order;
        }
        set order(t) {
            this._order = t, this._onChangeCallback();
        }
        set(t, e, i, s = this._order) {
            return this._x = t, this._y = e, this._z = i, this._order = s, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(t) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t, e = this._order, i = !0) {
            const s = t.elements, n = s[0], o = s[4], a = s[8], h = s[1], l = s[5], c = s[9], u = s[2], m = s[6], d = s[10];
            switch(e){
                case "XYZ":
                    this._y = Math.asin(S(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-o, n)) : (this._x = Math.atan2(m, l), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-S(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(h, l)) : (this._y = Math.atan2(-u, n), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(S(m, -1, 1)), Math.abs(m) < .9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(h, n));
                    break;
                case "ZYX":
                    this._y = Math.asin(-S(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(m, d), this._z = Math.atan2(h, n)) : (this._x = 0, this._z = Math.atan2(-o, l));
                    break;
                case "YZX":
                    this._z = Math.asin(S(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-u, n)) : (this._x = 0, this._y = Math.atan2(a, d));
                    break;
                case "XZY":
                    this._z = Math.asin(-S(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(m, l), this._y = Math.atan2(a, n)) : (this._x = Math.atan2(-c, d), this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
            }
            return this._order = e, i === !0 && this._onChangeCallback(), this;
        }
        setFromQuaternion(t, e, i) {
            return Ie.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Ie, e, i);
        }
        setFromVector3(t, e = this._order) {
            return this.set(t.x, t.y, t.z, e);
        }
        reorder(t) {
            return Ne.setFromEuler(this), this.setFromQuaternion(Ne, t);
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
        }
        fromArray(t) {
            return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
        }
        _onChange(t) {
            return this._onChangeCallback = t, this;
        }
        _onChangeCallback() {}
        *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._order;
        }
    }
    xt.DEFAULT_ORDER = "XYZ";
    class Ni {
        constructor(){
            this.mask = 1;
        }
        set(t) {
            this.mask = (1 << t | 0) >>> 0;
        }
        enable(t) {
            this.mask |= 1 << t | 0;
        }
        enableAll() {
            this.mask = -1;
        }
        toggle(t) {
            this.mask ^= 1 << t | 0;
        }
        disable(t) {
            this.mask &= ~(1 << t | 0);
        }
        disableAll() {
            this.mask = 0;
        }
        test(t) {
            return (this.mask & t.mask) !== 0;
        }
        isEnabled(t) {
            return (this.mask & (1 << t | 0)) !== 0;
        }
    }
    let ki = 0;
    const ke = new F, ct = new gt, G = new X, Ct = new F, pt = new F, Wi = new F, Di = new gt, We = new F(1, 0, 0), De = new F(0, 1, 0), Ue = new F(0, 0, 1), Pe = {
        type: "added"
    }, Ui = {
        type: "removed"
    }, ut = {
        type: "childadded",
        child: null
    }, Vt = {
        type: "childremoved",
        child: null
    };
    class rt extends we {
        constructor(){
            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                value: ki++
            }), this.uuid = Nt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = rt.DEFAULT_UP.clone();
            const t = new F, e = new xt, i = new gt, s = new F(1, 1, 1);
            function n() {
                i.setFromEuler(e, !1);
            }
            function o() {
                e.setFromQuaternion(i, void 0, !1);
            }
            e._onChange(n), i._onChange(o), Object.defineProperties(this, {
                position: {
                    configurable: !0,
                    enumerable: !0,
                    value: t
                },
                rotation: {
                    configurable: !0,
                    enumerable: !0,
                    value: e
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
                    value: new X
                },
                normalMatrix: {
                    value: new at
                }
            }), this.matrix = new X, this.matrixWorld = new X, this.matrixAutoUpdate = rt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Ni, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
        }
        onBeforeShadow() {}
        onAfterShadow() {}
        onBeforeRender() {}
        onAfterRender() {}
        applyMatrix4(t) {
            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
        }
        applyQuaternion(t) {
            return this.quaternion.premultiply(t), this;
        }
        setRotationFromAxisAngle(t, e) {
            this.quaternion.setFromAxisAngle(t, e);
        }
        setRotationFromEuler(t) {
            this.quaternion.setFromEuler(t, !0);
        }
        setRotationFromMatrix(t) {
            this.quaternion.setFromRotationMatrix(t);
        }
        setRotationFromQuaternion(t) {
            this.quaternion.copy(t);
        }
        rotateOnAxis(t, e) {
            return ct.setFromAxisAngle(t, e), this.quaternion.multiply(ct), this;
        }
        rotateOnWorldAxis(t, e) {
            return ct.setFromAxisAngle(t, e), this.quaternion.premultiply(ct), this;
        }
        rotateX(t) {
            return this.rotateOnAxis(We, t);
        }
        rotateY(t) {
            return this.rotateOnAxis(De, t);
        }
        rotateZ(t) {
            return this.rotateOnAxis(Ue, t);
        }
        translateOnAxis(t, e) {
            return ke.copy(t).applyQuaternion(this.quaternion), this.position.add(ke.multiplyScalar(e)), this;
        }
        translateX(t) {
            return this.translateOnAxis(We, t);
        }
        translateY(t) {
            return this.translateOnAxis(De, t);
        }
        translateZ(t) {
            return this.translateOnAxis(Ue, t);
        }
        localToWorld(t) {
            return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(t) {
            return this.updateWorldMatrix(!0, !1), t.applyMatrix4(G.copy(this.matrixWorld).invert());
        }
        lookAt(t, e, i) {
            t.isVector3 ? Ct.copy(t) : Ct.set(t, e, i);
            const s = this.parent;
            this.updateWorldMatrix(!0, !1), pt.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? G.lookAt(pt, Ct, this.up) : G.lookAt(Ct, pt, this.up), this.quaternion.setFromRotationMatrix(G), s && (G.extractRotation(s.matrixWorld), ct.setFromRotationMatrix(G), this.quaternion.premultiply(ct.invert()));
        }
        add(t) {
            if (arguments.length > 1) {
                for(let e = 0; e < arguments.length; e++)this.add(arguments[e]);
                return this;
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Pe), ut.child = t, this.dispatchEvent(ut), ut.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
        }
        remove(t) {
            if (arguments.length > 1) {
                for(let i = 0; i < arguments.length; i++)this.remove(arguments[i]);
                return this;
            }
            const e = this.children.indexOf(t);
            return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Ui), Vt.child = t, this.dispatchEvent(Vt), Vt.child = null), this;
        }
        removeFromParent() {
            const t = this.parent;
            return t !== null && t.remove(this), this;
        }
        clear() {
            return this.remove(...this.children);
        }
        attach(t) {
            return this.updateWorldMatrix(!0, !1), G.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), G.multiply(t.parent.matrixWorld)), t.applyMatrix4(G), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Pe), ut.child = t, this.dispatchEvent(ut), ut.child = null, this;
        }
        getObjectById(t) {
            return this.getObjectByProperty("id", t);
        }
        getObjectByName(t) {
            return this.getObjectByProperty("name", t);
        }
        getObjectByProperty(t, e) {
            if (this[t] === e) return this;
            for(let i = 0, s = this.children.length; i < s; i++){
                const o = this.children[i].getObjectByProperty(t, e);
                if (o !== void 0) return o;
            }
        }
        getObjectsByProperty(t, e, i = []) {
            this[t] === e && i.push(this);
            const s = this.children;
            for(let n = 0, o = s.length; n < o; n++)s[n].getObjectsByProperty(t, e, i);
            return i;
        }
        getWorldPosition(t) {
            return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
        }
        getWorldQuaternion(t) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(pt, t, Wi), t;
        }
        getWorldScale(t) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(pt, Di, t), t;
        }
        getWorldDirection(t) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize();
        }
        raycast() {}
        traverse(t) {
            t(this);
            const e = this.children;
            for(let i = 0, s = e.length; i < s; i++)e[i].traverse(t);
        }
        traverseVisible(t) {
            if (this.visible === !1) return;
            t(this);
            const e = this.children;
            for(let i = 0, s = e.length; i < s; i++)e[i].traverseVisible(t);
        }
        traverseAncestors(t) {
            const e = this.parent;
            e !== null && (t(e), e.traverseAncestors(t));
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
        }
        updateMatrixWorld(t) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
            const e = this.children;
            for(let i = 0, s = e.length; i < s; i++)e[i].updateMatrixWorld(t);
        }
        updateWorldMatrix(t, e) {
            const i = this.parent;
            if (t === !0 && i !== null && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === !0) {
                const s = this.children;
                for(let n = 0, o = s.length; n < o; n++)s[n].updateWorldMatrix(!1, !0);
            }
        }
        toJSON(t) {
            const e = t === void 0 || typeof t == "string", i = {};
            e && (t = {
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
                })), s.availableInstanceIds = this._availableInstanceIds.slice(), s.availableGeometryIds = this._availableGeometryIds.slice(), s.nextIndexStart = this._nextIndexStart, s.nextVertexStart = this._nextVertexStart, s.geometryCount = this._geometryCount, s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.matricesTexture = this._matricesTexture.toJSON(t), s.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (s.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (s.boundingBox = this.boundingBox.toJSON()));
            function n(a, h) {
                return a[h.uuid] === void 0 && (a[h.uuid] = h.toJSON(t)), h.uuid;
            }
            if (this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(t).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                s.geometry = n(t.geometries, this.geometry);
                const a = this.geometry.parameters;
                if (a !== void 0 && a.shapes !== void 0) {
                    const h = a.shapes;
                    if (Array.isArray(h)) for(let l = 0, c = h.length; l < c; l++){
                        const u = h[l];
                        n(t.shapes, u);
                    }
                    else n(t.shapes, h);
                }
            }
            if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (n(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
                const a = [];
                for(let h = 0, l = this.material.length; h < l; h++)a.push(n(t.materials, this.material[h]));
                s.material = a;
            } else s.material = n(t.materials, this.material);
            if (this.children.length > 0) {
                s.children = [];
                for(let a = 0; a < this.children.length; a++)s.children.push(this.children[a].toJSON(t).object);
            }
            if (this.animations.length > 0) {
                s.animations = [];
                for(let a = 0; a < this.animations.length; a++){
                    const h = this.animations[a];
                    s.animations.push(n(t.animations, h));
                }
            }
            if (e) {
                const a = o(t.geometries), h = o(t.materials), l = o(t.textures), c = o(t.images), u = o(t.shapes), m = o(t.skeletons), d = o(t.animations), p = o(t.nodes);
                a.length > 0 && (i.geometries = a), h.length > 0 && (i.materials = h), l.length > 0 && (i.textures = l), c.length > 0 && (i.images = c), u.length > 0 && (i.shapes = u), m.length > 0 && (i.skeletons = m), d.length > 0 && (i.animations = d), p.length > 0 && (i.nodes = p);
            }
            return i.object = s, i;
            function o(a) {
                const h = [];
                for(const l in a){
                    const c = a[l];
                    delete c.metadata, h.push(c);
                }
                return h;
            }
        }
        clone(t) {
            return new this.constructor().copy(this, t);
        }
        copy(t, e = !0) {
            if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0) for(let i = 0; i < t.children.length; i++){
                const s = t.children[i];
                this.add(s.clone());
            }
            return this;
        }
    }
    rt.DEFAULT_UP = new F(0, 1, 0);
    rt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
    rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
    const xi = {
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
    }, K = {
        h: 0,
        s: 0,
        l: 0
    }, Rt = {
        h: 0,
        s: 0,
        l: 0
    };
    function Gt(r, t, e) {
        return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? r + (t - r) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? r + (t - r) * 6 * (2 / 3 - e) : r;
    }
    class Q {
        constructor(t, e, i){
            return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, i);
        }
        set(t, e, i) {
            if (e === void 0 && i === void 0) {
                const s = t;
                s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
            } else this.setRGB(t, e, i);
            return this;
        }
        setScalar(t) {
            return this.r = t, this.g = t, this.b = t, this;
        }
        setHex(t, e = C) {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, O.colorSpaceToWorking(this, e), this;
        }
        setRGB(t, e, i, s = O.workingColorSpace) {
            return this.r = t, this.g = e, this.b = i, O.colorSpaceToWorking(this, s), this;
        }
        setHSL(t, e, i, s = O.workingColorSpace) {
            if (t = Ai(t, 1), e = S(e, 0, 1), i = S(i, 0, 1), e === 0) this.r = this.g = this.b = i;
            else {
                const n = i <= .5 ? i * (1 + e) : i + e - i * e, o = 2 * i - n;
                this.r = Gt(o, n, t + 1 / 3), this.g = Gt(o, n, t), this.b = Gt(o, n, t - 1 / 3);
            }
            return O.colorSpaceToWorking(this, s), this;
        }
        setStyle(t, e = C) {
            function i(n) {
                n !== void 0 && parseFloat(n) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
            }
            let s;
            if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) {
                let n;
                const o = s[1], a = s[2];
                switch(o){
                    case "rgb":
                    case "rgba":
                        if (n = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(n[4]), this.setRGB(Math.min(255, parseInt(n[1], 10)) / 255, Math.min(255, parseInt(n[2], 10)) / 255, Math.min(255, parseInt(n[3], 10)) / 255, e);
                        if (n = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(n[4]), this.setRGB(Math.min(100, parseInt(n[1], 10)) / 100, Math.min(100, parseInt(n[2], 10)) / 100, Math.min(100, parseInt(n[3], 10)) / 100, e);
                        break;
                    case "hsl":
                    case "hsla":
                        if (n = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(n[4]), this.setHSL(parseFloat(n[1]) / 360, parseFloat(n[2]) / 100, parseFloat(n[3]) / 100, e);
                        break;
                    default:
                        console.warn("THREE.Color: Unknown color model " + t);
                }
            } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
                const n = s[1], o = n.length;
                if (o === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, e);
                if (o === 6) return this.setHex(parseInt(n, 16), e);
                console.warn("THREE.Color: Invalid hex color " + t);
            } else if (t && t.length > 0) return this.setColorName(t, e);
            return this;
        }
        setColorName(t, e = C) {
            const i = xi[t.toLowerCase()];
            return i !== void 0 ? this.setHex(i, e) : console.warn("THREE.Color: Unknown color " + t), this;
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b);
        }
        copy(t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this;
        }
        copySRGBToLinear(t) {
            return this.r = q(t.r), this.g = q(t.g), this.b = q(t.b), this;
        }
        copyLinearToSRGB(t) {
            return this.r = mt(t.r), this.g = mt(t.g), this.b = mt(t.b), this;
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
        }
        getHex(t = C) {
            return O.workingToColorSpace(T.copy(this), t), Math.round(S(T.r * 255, 0, 255)) * 65536 + Math.round(S(T.g * 255, 0, 255)) * 256 + Math.round(S(T.b * 255, 0, 255));
        }
        getHexString(t = C) {
            return ("000000" + this.getHex(t).toString(16)).slice(-6);
        }
        getHSL(t, e = O.workingColorSpace) {
            O.workingToColorSpace(T.copy(this), e);
            const i = T.r, s = T.g, n = T.b, o = Math.max(i, s, n), a = Math.min(i, s, n);
            let h, l;
            const c = (a + o) / 2;
            if (a === o) h = 0, l = 0;
            else {
                const u = o - a;
                switch(l = c <= .5 ? u / (o + a) : u / (2 - o - a), o){
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
            return t.h = h, t.s = l, t.l = c, t;
        }
        getRGB(t, e = O.workingColorSpace) {
            return O.workingToColorSpace(T.copy(this), e), t.r = T.r, t.g = T.g, t.b = T.b, t;
        }
        getStyle(t = C) {
            O.workingToColorSpace(T.copy(this), t);
            const e = T.r, i = T.g, s = T.b;
            return t !== C ? `color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(i * 255)},${Math.round(s * 255)})`;
        }
        offsetHSL(t, e, i) {
            return this.getHSL(K), this.setHSL(K.h + t, K.s + e, K.l + i);
        }
        add(t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this;
        }
        addColors(t, e) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
        }
        addScalar(t) {
            return this.r += t, this.g += t, this.b += t, this;
        }
        sub(t) {
            return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
        }
        multiply(t) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
        }
        multiplyScalar(t) {
            return this.r *= t, this.g *= t, this.b *= t, this;
        }
        lerp(t, e) {
            return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
        }
        lerpColors(t, e, i) {
            return this.r = t.r + (e.r - t.r) * i, this.g = t.g + (e.g - t.g) * i, this.b = t.b + (e.b - t.b) * i, this;
        }
        lerpHSL(t, e) {
            this.getHSL(K), t.getHSL(Rt);
            const i = Dt(K.h, Rt.h, e), s = Dt(K.s, Rt.s, e), n = Dt(K.l, Rt.l, e);
            return this.setHSL(i, s, n), this;
        }
        setFromVector3(t) {
            return this.r = t.x, this.g = t.y, this.b = t.z, this;
        }
        applyMatrix3(t) {
            const e = this.r, i = this.g, s = this.b, n = t.elements;
            return this.r = n[0] * e + n[3] * i + n[6] * s, this.g = n[1] * e + n[4] * i + n[7] * s, this.b = n[2] * e + n[5] * i + n[8] * s, this;
        }
        equals(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b;
        }
        fromArray(t, e = 0) {
            return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
        }
        fromBufferAttribute(t, e) {
            return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
        }
        toJSON() {
            return this.getHex();
        }
        *[Symbol.iterator]() {
            yield this.r, yield this.g, yield this.b;
        }
    }
    const T = new Q;
    Q.NAMES = xi;
    let Pi = 0;
    class Bi extends we {
        constructor(){
            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                value: Pi++
            }), this.uuid = Nt(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Q(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
        }
        get alphaTest() {
            return this._alphaTest;
        }
        set alphaTest(t) {
            this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
        }
        onBeforeRender() {}
        onBeforeCompile() {}
        customProgramCacheKey() {
            return this.onBeforeCompile.toString();
        }
        setValues(t) {
            if (t !== void 0) for(const e in t){
                const i = t[e];
                if (i === void 0) {
                    console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
                    continue;
                }
                const s = this[e];
                if (s === void 0) {
                    console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
                    continue;
                }
                s && s.isColor ? s.set(i) : s && s.isVector3 && i && i.isVector3 ? s.copy(i) : this[e] = i;
            }
        }
        toJSON(t) {
            const e = t === void 0 || typeof t == "string";
            e && (t = {
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
            i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (i.sheenColorMap = this.sheenColorMap.toJSON(t).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (i.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (i.blending = this.blending), this.side !== 0 && (i.side = this.side), this.vertexColors === !0 && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = !0), this.blendSrc !== 204 && (i.blendSrc = this.blendSrc), this.blendDst !== 205 && (i.blendDst = this.blendDst), this.blendEquation !== 100 && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (i.depthFunc = this.depthFunc), this.depthTest === !1 && (i.depthTest = this.depthTest), this.depthWrite === !1 && (i.depthWrite = this.depthWrite), this.colorWrite === !1 && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (i.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (i.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === !0 && (i.alphaHash = !0), this.alphaToCoverage === !0 && (i.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0), this.forceSinglePass === !0 && (i.forceSinglePass = !0), this.wireframe === !0 && (i.wireframe = !0), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = !0), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
            function s(n) {
                const o = [];
                for(const a in n){
                    const h = n[a];
                    delete h.metadata, o.push(h);
                }
                return o;
            }
            if (e) {
                const n = s(t.textures), o = s(t.images);
                n.length > 0 && (i.textures = n), o.length > 0 && (i.images = o);
            }
            return i;
        }
        clone() {
            return new this.constructor().copy(this);
        }
        copy(t) {
            this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
            const e = t.clippingPlanes;
            let i = null;
            if (e !== null) {
                const s = e.length;
                i = new Array(s);
                for(let n = 0; n !== s; ++n)i[n] = e[n].clone();
            }
            return this.clippingPlanes = i, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
        set needsUpdate(t) {
            t === !0 && this.version++;
        }
    }
    class z extends Bi {
        constructor(t){
            super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = {
                STANDARD: ""
            }, this.color = new Q(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Q(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new nt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new xt, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.defines = {
                STANDARD: ""
            }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
        }
    }
    const $t = {
        enabled: !1,
        files: {},
        add: function(r, t) {
            this.enabled !== !1 && (this.files[r] = t);
        },
        get: function(r) {
            if (this.enabled !== !1) return this.files[r];
        },
        remove: function(r) {
            delete this.files[r];
        },
        clear: function() {
            this.files = {};
        }
    };
    class Hi {
        constructor(t, e, i){
            const s = this;
            let n = !1, o = 0, a = 0, h;
            const l = [];
            this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.abortController = new AbortController, this.itemStart = function(c) {
                a++, n === !1 && s.onStart !== void 0 && s.onStart(c, o, a), n = !0;
            }, this.itemEnd = function(c) {
                o++, s.onProgress !== void 0 && s.onProgress(c, o, a), o === a && (n = !1, s.onLoad !== void 0 && s.onLoad());
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
                for(let u = 0, m = l.length; u < m; u += 2){
                    const d = l[u], p = l[u + 1];
                    if (d.global && (d.lastIndex = 0), d.test(c)) return p;
                }
                return null;
            }, this.abort = function() {
                return this.abortController.abort(), this.abortController = new AbortController, this;
            };
        }
    }
    const Vi = new Hi;
    class Fe {
        constructor(t){
            this.manager = t !== void 0 ? t : Vi, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
        }
        load() {}
        loadAsync(t, e) {
            const i = this;
            return new Promise(function(s, n) {
                i.load(t, s, e, n);
            });
        }
        parse() {}
        setCrossOrigin(t) {
            return this.crossOrigin = t, this;
        }
        setWithCredentials(t) {
            return this.withCredentials = t, this;
        }
        setPath(t) {
            return this.path = t, this;
        }
        setResourcePath(t) {
            return this.resourcePath = t, this;
        }
        setRequestHeader(t) {
            return this.requestHeader = t, this;
        }
        abort() {
            return this;
        }
    }
    Fe.DEFAULT_MATERIAL_NAME = "__DEFAULT";
    const dt = new WeakMap;
    class Gi extends Fe {
        constructor(t){
            super(t);
        }
        load(t, e, i, s) {
            this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
            const n = this, o = $t.get(`image:${t}`);
            if (o !== void 0) {
                if (o.complete === !0) n.manager.itemStart(t), setTimeout(function() {
                    e && e(o), n.manager.itemEnd(t);
                }, 0);
                else {
                    let u = dt.get(o);
                    u === void 0 && (u = [], dt.set(o, u)), u.push({
                        onLoad: e,
                        onError: s
                    });
                }
                return o;
            }
            const a = _e("img");
            function h() {
                c(), e && e(this);
                const u = dt.get(this) || [];
                for(let m = 0; m < u.length; m++){
                    const d = u[m];
                    d.onLoad && d.onLoad(this);
                }
                dt.delete(this), n.manager.itemEnd(t);
            }
            function l(u) {
                c(), s && s(u), $t.remove(`image:${t}`);
                const m = dt.get(this) || [];
                for(let d = 0; d < m.length; d++){
                    const p = m[d];
                    p.onError && p.onError(u);
                }
                dt.delete(this), n.manager.itemError(t), n.manager.itemEnd(t);
            }
            function c() {
                a.removeEventListener("load", h, !1), a.removeEventListener("error", l, !1);
            }
            return a.addEventListener("load", h, !1), a.addEventListener("error", l, !1), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), $t.add(`image:${t}`, a), n.manager.itemStart(t), a.src = t, a;
        }
    }
    class L extends Fe {
        constructor(t){
            super(t);
        }
        load(t, e, i, s) {
            const n = new j, o = new Gi(this.manager);
            return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(t, function(a) {
                n.image = a, n.needsUpdate = !0, e !== void 0 && e(n);
            }, i, s), n;
        }
    }
    typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: "180"
        }
    }));
    typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "180");
    const $i = 256;
    function qi(r, t = $i) {
        let e = 1;
        for(; Math.ceil(r / e) > t;)e *= 2;
        return e;
    }
    let yi = {
        editorColors: new Map
    };
    function ji(r) {
        yi = r;
    }
    function Xi(r) {
        return yi.editorColors.get(r);
    }
    const ot = {
        ROUGHNESS: .85,
        METALNESS: 0
    }, Yi = .25, k = [
        "varying vec3 vVoxelAoWorldPosition;",
        "varying vec3 vVoxelAoWorldNormal;"
    ], W = [
        "vVoxelAoWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
        "vVoxelAoWorldNormal = normalize(mat3(modelMatrix) * normal);"
    ], Zi = [
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
    ], Ji = [
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
    function N(r = !1) {
        return r ? Ji : Zi;
    }
    const A = "computeVoxelAo(vVoxelAoWorldPosition, vVoxelAoWorldNormal)";
    function D(r, t) {
        r.uniforms.voxelAoOccupancy = {
            value: t.texture
        }, r.uniforms.voxelAoOrigin = {
            value: t.origin
        }, r.uniforms.voxelAoSize = {
            value: t.size
        }, r.uniforms.voxelAoRadius = {
            value: Yi
        }, r.uniforms.voxelAoVoxelSize = {
            value: t.voxelSize
        };
    }
    let Lt = null;
    function Ki() {
        if (Lt) return Lt;
        const r = new Uint8Array(4), t = new zi(r, 1, 1, 1);
        return t.format = 1023, t.type = 1009, t.magFilter = 1003, t.minFilter = 1003, t.wrapS = 1001, t.wrapT = 1001, t.wrapR = 1001, t.generateMipmaps = !1, t.needsUpdate = !0, Lt = {
            texture: t,
            data: r,
            width: 1,
            heightLevels: 1,
            length: 1
        }, Lt;
    }
    const U = [
        "attribute float tileHeight;",
        "attribute float highlightStrength;",
        "varying float vMovementHighlightHeight;",
        "varying float vMovementHighlightStrength;"
    ], P = [
        "vMovementHighlightHeight = tileHeight;",
        "vMovementHighlightStrength = highlightStrength;"
    ], B = [
        "uniform highp sampler3D movementHighlightMap;",
        "uniform vec2 movementHighlightSize;",
        "uniform float movementHighlightHeightLevels;",
        "uniform float uHighlightEnabled;",
        "varying float vMovementHighlightHeight;",
        "varying float vMovementHighlightStrength;"
    ], H = [
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
    function V(r, t) {
        const e = t ?? Ki();
        r.uniforms.movementHighlightMap = {
            value: e.texture
        }, r.uniforms.movementHighlightSize = {
            value: new nt(e.width, e.length)
        }, r.uniforms.movementHighlightHeightLevels = {
            value: e.heightLevels
        }, r.uniforms.uHighlightEnabled = {
            value: t ? 1 : 0
        };
    }
    function Qi(r, t, e, i) {
        r.onBeforeCompile = (s)=>{
            D(s, t), V(s, e), s.vertexShader = s.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...k,
                ...U
            ].join(`
`)), s.vertexShader = s.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...W,
                ...P
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...N(i),
                ...B
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <color_fragment>", `#include <color_fragment>
diffuseColor.rgb *= ${A};`), s.fragmentShader = s.fragmentShader.replace("#include <dithering_fragment>", H.join(`
`));
        };
    }
    const ts = (r)=>{
        const { movementHighlight: t, voxelAo: e, performanceMode: i = !1 } = r, s = new z({
            roughness: ot.ROUGHNESS,
            metalness: ot.METALNESS,
            vertexColors: !0
        });
        return Qi(s, e, t, i), {
            material: s,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Ot = {
        bucketKey: "default",
        occlusionGroup: "solid",
        shaderVersion: 2,
        factory: ts
    }, es = "/materials/flesh_250/flesh_noise_64x64.png", is = "#cc2244", ss = .45, ns = .7, rs = 0, os = .4, Be = .5, as = .25, ls = 1.2;
    let qt = null;
    function hs() {
        if (!qt) {
            const r = new L().load(es);
            r.colorSpace = ve, r.wrapS = 1e3, r.wrapT = 1e3, r.magFilter = 1006, r.minFilter = 1006, r.generateMipmaps = !1, qt = r;
        }
        return qt;
    }
    const cs = [
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
        `        q = u * frequency + t * ${os.toFixed(4)}`,
        `          + fleshAperiodicSin(t * ${Be.toFixed(4)} - centeredDot * 1.2) * 0.4 * ${Be.toFixed(4)}`,
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
    function us() {
        return [
            ...k,
            "uniform float uFleshTime;"
        ];
    }
    function ds() {
        return [
            ...W
        ];
    }
    function ms(r) {
        return [
            ...N(r),
            "uniform float uFleshTime;",
            "uniform sampler2D uFleshNoise;",
            "vec2 getFleshUv(vec3 worldPos, vec3 worldNormal) {",
            "    vec3 n = abs(normalize(worldNormal));",
            "    if (n.y >= n.x && n.y >= n.z) return worldPos.xz;",
            "    if (n.x >= n.z) return worldPos.zy;",
            "    return worldPos.xy;",
            "}",
            cs
        ];
    }
    function ps(r) {
        return [
            "#include <color_fragment>",
            `vec2 fleshUvWorld = getFleshUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${ss.toFixed(4)};`,
            `float fleshOriginalNoise = fleshFBM(fleshUvWorld, uFleshTime, ${r ? "false" : "true"});`,
            "float fleshNoise = clamp(fleshOriginalNoise, 0.0, 1.0);",
            `float fleshFluidNoiseAngle = fleshOriginalNoise * 13.05 + uFleshTime * ${as.toFixed(4)};`,
            "vec2 fleshFluidOffset = vec2(",
            "    cos(fleshFluidNoiseAngle) + fleshOriginalNoise * 14.0,",
            `    sin(fleshFluidNoiseAngle) + uFleshTime * ${ls.toFixed(4)}`,
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
            `fleshBaseColor *= ${A};`,
            "diffuseColor = vec4(clamp(fleshBaseColor, 0.0, 1.0), 1.0);"
        ];
    }
    const fs = [
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
    function gs() {
        return fs + `
` + H.join(`
`);
    }
    function xs(r, t, e, i, s, n) {
        r.onBeforeCompile = (o)=>{
            D(o, i), o.uniforms.uFleshTime = e, o.uniforms.uFleshNoise = {
                value: t
            }, V(o, s), o.vertexShader = o.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...us(),
                ...U
            ].join(`
`)), o.vertexShader = o.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...ds(),
                ...P
            ].join(`
`)), o.fragmentShader = o.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...ms(n),
                ...B
            ].join(`
`)), o.fragmentShader = o.fragmentShader.replace("#include <color_fragment>", ps(n).join(`
`)), o.fragmentShader = o.fragmentShader.replace("#include <dithering_fragment>", gs());
        };
    }
    const ys = (r)=>{
        const { movementHighlight: t, voxelAo: e, performanceMode: i = !1 } = r, s = hs(), n = {
            value: 0
        }, o = new z({
            roughness: ns,
            metalness: rs,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return xs(o, s, n, e, t, i), {
            material: o,
            onAnimationFrame: (h)=>{
                n.value = h * .001;
            },
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, vs = {
        bucketKey: "flesh_250",
        occlusionGroup: "flesh_250",
        shaderVersion: 4,
        geometry: {
            vertexColors: !1
        },
        factory: ys,
        special: {
            paletteIndex: 250,
            label: "Flesh",
            swatchColor: is
        }
    }, _s = "#cfd4dc", Ss = {
        bucketKey: "fog_251",
        occlusionGroup: "fog_251",
        shaderVersion: 1,
        passable: !0,
        volumetric: !0,
        special: {
            paletteIndex: 251,
            label: "Fog",
            swatchColor: _s
        }
    }, Ms = "#a8d8f0", ws = "#cce8ff", Fs = .05, bs = 0, As = .22, Es = (r)=>({
            material: new z({
                color: ws,
                roughness: Fs,
                metalness: bs,
                vertexColors: !1,
                transparent: !0,
                opacity: As,
                depthWrite: !1
            }),
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 2
        }), Ts = {
        bucketKey: "glass_246",
        occlusionGroup: "glass_246",
        shaderVersion: 1,
        geometry: {
            vertexColors: !1
        },
        factory: Es,
        special: {
            paletteIndex: 246,
            label: "Glass",
            swatchColor: Ms,
            category: "buildings"
        }
    }, vi = "#CFB53B", jt = .6, Xt = [
        .9,
        .72,
        .12
    ], Yt = [
        .6,
        .32,
        .04
    ], Cs = .5, Rs = 0, Ls = "#aa4400", zs = .25, Os = [
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
    function Is() {
        return [
            ...k
        ];
    }
    function Ns() {
        return [
            ...W
        ];
    }
    function ks(r) {
        return [
            ...N(r),
            Os,
            `const vec3 G_COL1 = vec3(${Xt[0].toFixed(3)}, ${Xt[1].toFixed(3)}, ${Xt[2].toFixed(3)});`,
            `const vec3 G_COL2 = vec3(${Yt[0].toFixed(3)}, ${Yt[1].toFixed(3)}, ${Yt[2].toFixed(3)});`
        ];
    }
    function Ws(r) {
        const t = [
            "vec3 gNrm = normalize(vVoxelAoWorldNormal);",
            "bool gIsBottom = gNrm.y < -0.5;",
            "vec2 gUv = vec2(0.0);",
            "if (!gIsBottom) {",
            "	if (abs(gNrm.x) > abs(gNrm.z) && abs(gNrm.x) > abs(gNrm.y)) {",
            `		gUv = vVoxelAoWorldPosition.zy * ${jt.toFixed(3)};`,
            "	} else if (abs(gNrm.z) > abs(gNrm.y)) {",
            `		gUv = vVoxelAoWorldPosition.xy * ${jt.toFixed(3)};`,
            "	} else {",
            `		gUv = vVoxelAoWorldPosition.xz * ${jt.toFixed(3)};`,
            "	}",
            "}"
        ], i = [
            "	vec2 gQ = vec2(0.0), gR = vec2(0.0);",
            `	${r ? "float gF = goldPatternLow(gUv, gQ, gR);" : "float gF = goldPattern(gUv, gQ, gR);"}`,
            "	vec3 gC = mix(G_COL1, vec3(0.0), pow(smoothstep(0., 0.9, gF), 2.));",
            "	gC += G_COL2 * pow(smoothstep(0., 0.8, dot(gQ, gR)*0.6), 3.) * 1.5;",
            "	gC *= pow(dot(gQ, gR) + 0.3, 3.);",
            "	gC *= gF * 1.5;",
            `	gC *= ${A};`,
            "	diffuseColor = vec4(gC, 1.0);"
        ];
        return [
            ...t,
            "if (gIsBottom) {",
            `	diffuseColor = vec4(G_COL2 * 0.3 * ${A}, 1.0);`,
            "} else {",
            ...i,
            "}"
        ];
    }
    function Ds(r, t, e, i) {
        r.onBeforeCompile = (s)=>{
            D(s, t), V(s, e), s.vertexShader = s.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Is(),
                ...U
            ].join(`
`)), s.vertexShader = s.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Ns(),
                ...P
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...ks(i),
                ...B
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <color_fragment>", Ws(i).join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <dithering_fragment>", H.join(`
`));
        };
    }
    const Us = (r)=>{
        const { movementHighlight: t, voxelAo: e, performanceMode: i = !1 } = r, s = new z({
            color: vi,
            emissive: new Q(Ls),
            emissiveIntensity: zs,
            roughness: Cs,
            metalness: Rs,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return Ds(s, e, t, i), {
            material: s,
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, Ps = {
        bucketKey: "gold_247",
        occlusionGroup: "solid",
        shaderVersion: 3,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !1,
            deformSurface: !1
        },
        factory: Us,
        special: {
            paletteIndex: 247,
            label: "Gold",
            swatchColor: vi,
            category: "metals"
        }
    }, He = "/materials/grass_242/grass_02_base_1k.png", Bs = "/materials/grass_242/grass_02_normal_gl_1k.png", Hs = "/materials/grass_242/grass_02_roughness_1k.png", Vs = "/materials/grass_242/grass_02_amibent_occlusion_1k.png", Gs = "#4f8f37", be = .75, $s = 1.45, qs = .45, Ve = .86, Se = 1, js = 8, Xs = 1;
    let Zt = null, Jt = null, Kt = null, Qt = null, te = null;
    function ft(r, t = !1) {
        return r.wrapS = 1e3, r.wrapT = 1e3, r.magFilter = 1006, r.minFilter = t ? 1006 : 1008, r.anisotropy = t ? Xs : js, r.generateMipmaps = !t, r;
    }
    function Ys(r) {
        if (r) {
            if (!Jt) {
                const e = ft(new L().load(He), !0);
                e.colorSpace = C, Jt = e;
            }
            return Jt;
        }
        if (Zt) return Zt;
        const t = ft(new L().load(He), !1);
        return t.colorSpace = C, Zt = t, t;
    }
    function Zs() {
        if (Kt) return Kt;
        const r = ft(new L().load(Bs), !1);
        return Kt = r, r;
    }
    function Js() {
        if (Qt) return Qt;
        const r = ft(new L().load(Hs), !1);
        return Qt = r, r;
    }
    function Ks() {
        if (te) return te;
        const r = ft(new L().load(Vs), !1);
        return te = r, r;
    }
    function Qs() {
        return [
            ...k
        ];
    }
    function tn() {
        return [
            ...W
        ];
    }
    function en(r) {
        const t = [
            ...N(!1),
            "uniform sampler2D grassMap;"
        ];
        return r ? [
            ...N(!0),
            "uniform sampler2D grassMap;",
            "vec2 getGrassUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ] : [
            ...t,
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
    function sn(r) {
        const t = [
            "#include <color_fragment>",
            `vec2 grassUv = getGrassUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${be.toFixed(2)};`,
            "vec4 grassTexel = texture2D(grassMap, grassUv);",
            "diffuseColor.rgb *= grassTexel.rgb;",
            "diffuseColor.a *= grassTexel.a;",
            `diffuseColor.rgb *= ${A};`
        ];
        return r || t.splice(3, 0, "float grassMicroAo = mix(1.0, texture2D(grassAoMap, grassUv).r, " + qs.toFixed(2) + ");", "diffuseColor.rgb *= grassMicroAo;"), t;
    }
    function nn() {
        return [
            "#include <roughnessmap_fragment>",
            `vec2 grassRoughnessUv = getGrassUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${be.toFixed(2)};`,
            "float grassRoughnessSample = texture2D(grassRoughnessMap, grassRoughnessUv).g;",
            `roughnessFactor = clamp(mix(${Ve.toFixed(2)}, ${Se.toFixed(2)}, grassRoughnessSample), ${Ve.toFixed(2)}, ${Se.toFixed(2)});`
        ];
    }
    function rn() {
        return [
            `vec2 grassNormalUv = getGrassUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${be.toFixed(2)};`,
            "vec3 grassMapNormal = texture2D(grassNormalMap, grassNormalUv).xyz * 2.0 - 1.0;",
            `grassMapNormal.xy *= ${$s.toFixed(2)};`,
            "normal = normalize(grassGetTangentFrame(-vViewPosition, normal, grassNormalUv) * normalize(grassMapNormal));"
        ];
    }
    function on(r, t, e, i, s, n, o, a) {
        r.onBeforeCompile = (h)=>{
            D(h, n), h.uniforms.grassMap = {
                value: t
            }, !a && e && i && s && (h.uniforms.grassNormalMap = {
                value: e
            }, h.uniforms.grassRoughnessMap = {
                value: i
            }, h.uniforms.grassAoMap = {
                value: s
            }), V(h, o), h.vertexShader = h.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Qs(),
                ...U
            ].join(`
`)), h.vertexShader = h.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...tn(),
                ...P
            ].join(`
`)), h.fragmentShader = h.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...en(a),
                ...B
            ].join(`
`)), h.fragmentShader = h.fragmentShader.replace("#include <color_fragment>", sn(a).join(`
`)), a || (h.fragmentShader = h.fragmentShader.replace("#include <roughnessmap_fragment>", nn().join(`
`)), h.fragmentShader = h.fragmentShader.replace("#include <normal_fragment_maps>", rn().join(`
`))), h.fragmentShader = h.fragmentShader.replace("#include <dithering_fragment>", H.join(`
`));
        };
    }
    const an = (r)=>{
        const { movementHighlight: t, voxelAo: e, performanceMode: i = !1 } = r, s = Ys(i), n = i ? null : Zs(), o = i ? null : Js(), a = i ? null : Ks(), h = new z({
            roughness: Se,
            metalness: ot.METALNESS,
            vertexColors: !1
        });
        return on(h, s, n, o, a, e, t, i), {
            material: h,
            castShadow: !0,
            receiveShadow: !0
        };
    }, ln = {
        bucketKey: "grass_242",
        occlusionGroup: "solid",
        shaderVersion: 4,
        geometry: {
            vertexColors: !1
        },
        factory: an,
        special: {
            paletteIndex: 242,
            label: "Grass",
            swatchColor: Gs,
            category: "nature"
        }
    }, Ge = "/materials/iron_bars_249/iron_bars_256x256.png", hn = "#6b6b6b", cn = 1, un = 8, dn = 1, mn = .55, pn = .45, fn = .5;
    let ee = null, ie = null;
    function $e(r, t) {
        return r.colorSpace = C, r.wrapS = 1e3, r.wrapT = 1e3, r.magFilter = 1006, r.minFilter = t ? 1006 : 1008, r.anisotropy = t ? dn : un, r.generateMipmaps = !t, r;
    }
    function gn(r) {
        return r ? (ie || (ie = $e(new L().load(Ge), !0)), ie) : (ee || (ee = $e(new L().load(Ge), !1)), ee);
    }
    function xn() {
        return [
            ...k
        ];
    }
    function yn() {
        return [
            ...W
        ];
    }
    function vn(r) {
        return [
            ...N(r),
            "uniform sampler2D ironBarsMap;",
            "vec2 getIronBarsUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function _n() {
        return [
            "#include <color_fragment>",
            `vec2 ironBarsUv = getIronBarsUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${cn.toFixed(1)};`,
            "vec4 ironBarsTexel = texture2D(ironBarsMap, ironBarsUv);",
            "diffuseColor.rgb *= ironBarsTexel.rgb;",
            "diffuseColor.a *= ironBarsTexel.a;",
            `diffuseColor.rgb *= ${A};`
        ];
    }
    function Sn(r, t, e, i, s) {
        r.onBeforeCompile = (n)=>{
            D(n, e), n.uniforms.ironBarsMap = {
                value: t
            }, V(n, i), n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...xn(),
                ...U
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...yn(),
                ...P
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...vn(s),
                ...B
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", _n().join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <dithering_fragment>", H.join(`
`));
        };
    }
    const Mn = (r)=>{
        const { movementHighlight: t, voxelAo: e, performanceMode: i = !1 } = r, s = gn(i), n = new z({
            roughness: mn,
            metalness: pn,
            vertexColors: !1,
            alphaTest: fn
        });
        return Sn(n, s, e, t, i), {
            material: n,
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 2
        };
    }, wn = {
        bucketKey: "ironbars_249",
        occlusionGroup: "ironbars_249",
        shaderVersion: 2,
        geometry: {
            vertexColors: !1
        },
        factory: Mn,
        special: {
            paletteIndex: 249,
            label: "Iron Bars",
            swatchColor: hn,
            category: "buildings"
        }
    }, _i = "#cc3300", Fn = 1.6, bn = .85, se = [
        .02,
        0,
        0
    ], ne = [
        .88,
        .22,
        0
    ], re = [
        1,
        .9,
        .25
    ], qe = .97, je = .9, An = .055, En = .018, Xe = 1.8, Ye = .35, Ze = 1, Je = 1.5, Ke = .4, Tn = .45, Cn = 0, Rn = "#ff3300", Ln = 3.2, zn = [
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
    function On() {
        return [
            "attribute float surfaceDeformStrength;",
            ...k,
            "uniform float uLavaTime;"
        ];
    }
    function In(r) {
        const t = r ? En : An;
        return [
            "vec3 lavaWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            `float lavaRippleA = sin(lavaWorld.x * ${Xe.toFixed(3)} + uLavaTime * ${Ye.toFixed(3)});`,
            `float lavaRippleB = cos(lavaWorld.z * ${Xe.toFixed(3)} * 1.17 + uLavaTime * ${Ye.toFixed(3)} * 0.83);`,
            `float lavaDisplacement = (lavaRippleA + lavaRippleB) * 0.5 * ${t.toFixed(4)} * surfaceDeformStrength;`,
            "transformed.y += lavaDisplacement;",
            ...W
        ];
    }
    function Nn(r) {
        const t = [
            ...N(r),
            "uniform float uLavaTime;",
            `const vec3 L_CRUST  = vec3(${se[0].toFixed(3)}, ${se[1].toFixed(3)}, ${se[2].toFixed(3)});`,
            `const vec3 L_MID    = vec3(${ne[0].toFixed(3)}, ${ne[1].toFixed(3)}, ${ne[2].toFixed(3)});`,
            `const vec3 L_BRIGHT = vec3(${re[0].toFixed(3)}, ${re[1].toFixed(3)}, ${re[2].toFixed(3)});`
        ];
        return r || t.push(zn), t;
    }
    function kn(r) {
        return r ? [
            "vec3 lNrm = normalize(vVoxelAoWorldNormal);",
            "bool lIsTop    = lNrm.y >  0.5;",
            "bool lIsBottom = lNrm.y < -0.5;",
            "if (lIsBottom) {",
            `	diffuseColor = vec4(L_CRUST * ${A}, ${je.toFixed(3)});`,
            "} else {",
            "float lGlow = 0.0;",
            "if (lIsTop) {",
            "	vec2 lUv = vVoxelAoWorldPosition.xz;",
            "	lGlow = 0.5 + 0.5 * sin(lUv.x * 2.8 + uLavaTime * 0.5 + cos(lUv.y * 1.6 + uLavaTime * 0.35));",
            "} else {",
            "	float lFallH = (abs(lNrm.x) > abs(lNrm.z)) ? vVoxelAoWorldPosition.z : vVoxelAoWorldPosition.x;",
            `	vec2 lFallUv = vec2(lFallH / ${Ze.toFixed(3)}, vVoxelAoWorldPosition.y / ${Je.toFixed(3)} + uLavaTime * ${Ke.toFixed(3)});`,
            "	float lFallA = 0.5 + 0.5 * sin(lFallUv.y * 5.2 + lFallUv.x * 1.8);",
            "	float lFallB = 0.5 + 0.5 * sin(lFallUv.y * 9.0 + uLavaTime * 0.4);",
            "	lGlow = clamp(lFallA * 0.65 + lFallB * 0.35, 0.0, 1.0);",
            "}",
            "vec3 lColor = mix(L_MID, L_BRIGHT, lGlow * 0.7);",
            `lColor *= ${A};`,
            `diffuseColor = vec4(lColor, ${qe.toFixed(3)});`,
            "}"
        ] : [
            "vec3 lNrm = normalize(vVoxelAoWorldNormal);",
            "bool lIsTop    = lNrm.y >  0.5;",
            "bool lIsBottom = lNrm.y < -0.5;",
            "float lGlowMask  = 0.0;",
            "float lCrustMask = 0.0;",
            "if (lIsBottom) {",
            `	diffuseColor = vec4(L_CRUST * ${A}, ${je.toFixed(3)});`,
            "} else {",
            "if (lIsTop) {",
            `	vec2 lUvCrust = vVoxelAoWorldPosition.xz / ${Fn.toFixed(3)};`,
            `	vec2 lUvGlow  = vVoxelAoWorldPosition.xz / ${bn.toFixed(3)};`,
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
            `	vec2 lFallUv = vec2(lFallH / ${Ze.toFixed(3)}, lFallV / ${Je.toFixed(3)} + uLavaTime * ${Ke.toFixed(3)});`,
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
            `lColor *= ${A};`,
            `diffuseColor = vec4(lColor, ${qe.toFixed(3)});`,
            "}"
        ];
    }
    function Wn() {
        return [
            "float lavaEmissivePulse = 0.78 + 0.22 * sin(uLavaTime * 1.05);",
            "totalEmissiveRadiance *= lavaEmissivePulse;"
        ];
    }
    function Dn(r, t, e, i, s) {
        r.onBeforeCompile = (n)=>{
            D(n, e), n.uniforms.uLavaTime = t, V(n, i), n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...On(),
                ...U
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...In(s),
                ...P
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Nn(s),
                ...B
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", kn(s).join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <emissivemap_fragment>", Wn().join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <dithering_fragment>", H.join(`
`));
        };
    }
    const Un = (r)=>{
        const { movementHighlight: t, voxelAo: e, performanceMode: i = !1 } = r, s = {
            value: 0
        }, n = new z({
            color: _i,
            emissive: new Q(Rn),
            emissiveIntensity: Ln,
            roughness: Tn,
            metalness: Cn,
            vertexColors: !1,
            transparent: !0,
            depthWrite: !0
        });
        return Dn(n, s, e, t, i), {
            material: n,
            onAnimationFrame: (a)=>{
                s.value = a * .001;
            },
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 1
        };
    }, Pn = {
        bucketKey: "lava_245",
        occlusionGroup: "lava_245",
        shaderVersion: 2,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !0,
            deformSurface: !0
        },
        passable: !0,
        factory: Un,
        special: {
            paletteIndex: 245,
            label: "Lava",
            swatchColor: _i,
            category: "liquids"
        }
    }, Me = "#ffd166", Bn = .35, Hn = 0, Vn = 3.5, Gn = (r)=>({
            material: new z({
                color: Me,
                emissive: Me,
                emissiveIntensity: Vn,
                roughness: Bn,
                metalness: Hn,
                vertexColors: !1
            }),
            castShadow: !1,
            receiveShadow: !1
        }), $n = {
        bucketKey: "light_243",
        occlusionGroup: "solid",
        shaderVersion: 1,
        geometry: {
            vertexColors: !1
        },
        passable: !0,
        factory: Gn,
        special: {
            paletteIndex: 243,
            label: "Light",
            swatchColor: Me
        }
    }, Si = "#A8B8C8", oe = .5, ae = [
        .8,
        .82,
        .86
    ], le = [
        .22,
        .3,
        .45
    ], qn = .35, jn = 0, Xn = [
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
    function Yn() {
        return [
            ...k
        ];
    }
    function Zn() {
        return [
            ...W
        ];
    }
    function Jn(r) {
        return [
            ...N(r),
            Xn,
            `const vec3 S_COL1 = vec3(${ae[0].toFixed(3)}, ${ae[1].toFixed(3)}, ${ae[2].toFixed(3)});`,
            `const vec3 S_COL2 = vec3(${le[0].toFixed(3)}, ${le[1].toFixed(3)}, ${le[2].toFixed(3)});`
        ];
    }
    function Kn(r) {
        const t = [
            "vec3 sNrm = normalize(vVoxelAoWorldNormal);",
            "bool sIsBottom = sNrm.y < -0.5;",
            "vec2 sUv = vec2(0.0);",
            "if (!sIsBottom) {",
            "	if (abs(sNrm.x) > abs(sNrm.z) && abs(sNrm.x) > abs(sNrm.y)) {",
            `		sUv = vVoxelAoWorldPosition.zy * ${oe.toFixed(3)};`,
            "	} else if (abs(sNrm.z) > abs(sNrm.y)) {",
            `		sUv = vVoxelAoWorldPosition.xy * ${oe.toFixed(3)};`,
            "	} else {",
            `		sUv = vVoxelAoWorldPosition.xz * ${oe.toFixed(3)};`,
            "	}",
            "}"
        ], i = [
            "	vec2 sQ = vec2(0.0), sR = vec2(0.0);",
            `	${r ? "float sF = silverPatternLow(sUv, sQ, sR);" : "float sF = silverPattern(sUv, sQ, sR);"}`,
            "	vec3 sC = mix(S_COL1, vec3(0.0), pow(smoothstep(0., 0.9, sF), 2.));",
            "	sC += S_COL2 * pow(smoothstep(0., 0.8, dot(sQ, sR)*0.6), 3.) * 1.5;",
            "	sC *= pow(dot(sQ, sR) + 0.3, 3.);",
            "	sC *= sF * 1.5;",
            `	sC *= ${A};`,
            "	diffuseColor = vec4(sC, 1.0);"
        ];
        return [
            ...t,
            "if (sIsBottom) {",
            `	diffuseColor = vec4(S_COL2 * 0.3 * ${A}, 1.0);`,
            "} else {",
            ...i,
            "}"
        ];
    }
    function Qn(r, t, e, i) {
        r.onBeforeCompile = (s)=>{
            D(s, t), V(s, e), s.vertexShader = s.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Yn(),
                ...U
            ].join(`
`)), s.vertexShader = s.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Zn(),
                ...P
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Jn(i),
                ...B
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <color_fragment>", Kn(i).join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <dithering_fragment>", H.join(`
`));
        };
    }
    const tr = (r)=>{
        const { movementHighlight: t, voxelAo: e, performanceMode: i = !1 } = r, s = new z({
            color: Si,
            roughness: qn,
            metalness: jn,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return Qn(s, e, t, i), {
            material: s,
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, er = {
        bucketKey: "silver_248",
        occlusionGroup: "solid",
        shaderVersion: 3,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !1,
            deformSurface: !1
        },
        factory: tr,
        special: {
            paletteIndex: 248,
            label: "Silver",
            swatchColor: Si,
            category: "metals"
        }
    }, Qe = "/materials/bricks_240/bricks_256x256.png", ir = "#8f8f8f", sr = 1, nr = 8, rr = 1;
    let he = null, ce = null;
    function ti(r, t) {
        return r.colorSpace = C, r.wrapS = 1e3, r.wrapT = 1e3, r.magFilter = 1006, r.minFilter = t ? 1006 : 1008, r.anisotropy = t ? rr : nr, r.generateMipmaps = !t, r;
    }
    function or(r) {
        return r ? (ce || (ce = ti(new L().load(Qe), !0)), ce) : (he || (he = ti(new L().load(Qe), !1)), he);
    }
    function ar() {
        return [
            ...k
        ];
    }
    function lr() {
        return [
            ...W
        ];
    }
    function hr(r) {
        return [
            ...N(r),
            "uniform sampler2D stoneBricksMap;",
            "vec2 getStoneBricksUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function cr() {
        return [
            "#include <color_fragment>",
            `vec2 stoneBricksUv = getStoneBricksUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${sr.toFixed(1)};`,
            "vec4 stoneBricksTexel = texture2D(stoneBricksMap, stoneBricksUv);",
            "diffuseColor.rgb *= stoneBricksTexel.rgb;",
            "diffuseColor.a *= stoneBricksTexel.a;",
            `diffuseColor.rgb *= ${A};`
        ];
    }
    function ur(r, t, e, i, s) {
        r.onBeforeCompile = (n)=>{
            D(n, e), n.uniforms.stoneBricksMap = {
                value: t
            }, V(n, i), n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...ar(),
                ...U
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...lr(),
                ...P
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...hr(s),
                ...B
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", cr().join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <dithering_fragment>", H.join(`
`));
        };
    }
    const dr = (r)=>{
        const { movementHighlight: t, voxelAo: e, performanceMode: i = !1 } = r, s = or(i), n = new z({
            roughness: ot.ROUGHNESS,
            metalness: ot.METALNESS,
            vertexColors: !1
        });
        return ur(n, s, e, t, i), {
            material: n,
            castShadow: !0,
            receiveShadow: !0
        };
    }, mr = {
        bucketKey: "stonebricks_240",
        occlusionGroup: "solid",
        shaderVersion: 3,
        geometry: {
            vertexColors: !1
        },
        factory: dr,
        special: {
            paletteIndex: 240,
            label: "Stone Bricks",
            swatchColor: ir,
            category: "buildings"
        }
    }, pr = "#1a6699", fr = 2, gr = 1.1, ue = [
        .9,
        .9,
        .95
    ], de = [
        .1,
        .4,
        .6
    ], me = [
        0,
        .2,
        .4
    ], ei = .86, ii = .75, si = .48, xr = .115, yr = .045, ni = 2.4, ri = 1.6, oi = .8, ai = 1.2, li = 1.4, vr = .2, _r = 0, Sr = [
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
    function Mr() {
        return [
            "attribute float surfaceDeformStrength;",
            ...k,
            "uniform float uWaterTime;"
        ];
    }
    function wr(r) {
        const t = r ? yr : xr;
        return [
            "vec3 waterWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            `float waterRippleA = sin(waterWorld.x * ${ni.toFixed(3)} + uWaterTime * ${ri.toFixed(3)});`,
            `float waterRippleB = cos(waterWorld.z * ${ni.toFixed(3)} * 1.13 + uWaterTime * ${ri.toFixed(3)} * 0.87);`,
            `float waterDisplacement = (waterRippleA + waterRippleB) * 0.5 * ${t.toFixed(4)} * surfaceDeformStrength;`,
            "transformed.y += waterDisplacement;",
            ...W
        ];
    }
    function Fr(r) {
        const t = [
            ...N(r),
            "uniform float uWaterTime;",
            `const vec3 W_FOAM = vec3(${ue[0].toFixed(3)}, ${ue[1].toFixed(3)}, ${ue[2].toFixed(3)});`,
            `const vec3 W_MAIN = vec3(${de[0].toFixed(3)}, ${de[1].toFixed(3)}, ${de[2].toFixed(3)});`,
            `const vec3 W_DARK = vec3(${me[0].toFixed(3)}, ${me[1].toFixed(3)}, ${me[2].toFixed(3)});`
        ];
        return r || t.push(Sr), t;
    }
    function br(r) {
        return r ? [
            "vec3 wNrm = normalize(vVoxelAoWorldNormal);",
            "bool wIsTopSurface = wNrm.y > 0.5;",
            "bool wIsBottomSurface = wNrm.y < -0.5;",
            "if (wIsBottomSurface) {",
            `	diffuseColor = vec4(W_MAIN * ${A}, ${si.toFixed(3)});`,
            "} else {",
            "float wWave = 0.0;",
            "float wFoamMask = 0.0;",
            "if (wIsTopSurface) {",
            "	vec2 wUv = vVoxelAoWorldPosition.xz;",
            "	wWave = 0.5 + 0.5 * sin(wUv.x * 4.0 + uWaterTime * 1.7 + cos(wUv.y * 2.0));",
            "	wFoamMask = smoothstep(0.88, 1.0, wWave);",
            "} else {",
            "	float wFallH = (abs(wNrm.x) > abs(wNrm.z)) ? vVoxelAoWorldPosition.z : vVoxelAoWorldPosition.x;",
            `	vec2 wFallUv = vec2(wFallH / ${oi.toFixed(3)}, vVoxelAoWorldPosition.y / ${ai.toFixed(3)} + uWaterTime * ${li.toFixed(3)});`,
            "	float wFallColumn = sin(wFallUv.x * 6.283);",
            "	float wFallA = 0.5 + 0.5 * sin(wFallUv.y * 6.283 + wFallColumn * 1.1);",
            "	float wFallB = 0.5 + 0.5 * sin(wFallUv.y * 11.0 + wFallUv.x * 2.3);",
            "	wWave = clamp(wFallA * 0.72 + wFallB * 0.28, 0.0, 1.0);",
            "	wFoamMask = 0.0;",
            "}",
            "vec3 wBody = mix(W_DARK, W_MAIN, wWave);",
            "vec3 wColor = mix(wBody, W_FOAM, wFoamMask * 0.65);",
            `wColor *= ${A};`,
            `float wAlpha = mix(${ei.toFixed(3)}, ${ii.toFixed(3)}, wFoamMask);`,
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
            `	diffuseColor = vec4(W_MAIN * ${A}, ${si.toFixed(3)});`,
            "} else {",
            "if (wIsTopSurface) {",
            `	vec2 wUvFoam   = vVoxelAoWorldPosition.xz / ${fr.toFixed(3)};`,
            `	vec2 wUvRipple = vVoxelAoWorldPosition.xz / ${gr.toFixed(3)};`,
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
            `	vec2 wUvRipple = vec2(wFallH / ${oi.toFixed(3)}, wFallV / ${ai.toFixed(3)} + uWaterTime * ${li.toFixed(3)});`,
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
            `wColor *= ${A};`,
            `float wAlpha = mix(${ei.toFixed(3)}, ${ii.toFixed(3)}, wFoamMask);`,
            "diffuseColor = vec4(wColor, wAlpha);",
            "}"
        ];
    }
    function Ar(r, t, e, i, s) {
        r.onBeforeCompile = (n)=>{
            D(n, e), n.uniforms.uWaterTime = t, V(n, i), n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Mr(),
                ...U
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...wr(s),
                ...P
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Fr(s),
                ...B
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", br(s).join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <dithering_fragment>", H.join(`
`));
        };
    }
    const Er = (r)=>{
        const { movementHighlight: t, voxelAo: e, performanceMode: i = !1 } = r, s = {
            value: 0
        }, n = new z({
            roughness: vr,
            metalness: _r,
            vertexColors: !1,
            transparent: !0,
            depthWrite: !0
        });
        return Ar(n, s, e, t, i), {
            material: n,
            onAnimationFrame: (a)=>{
                s.value = a * .001;
            },
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 1
        };
    }, Tr = {
        bucketKey: "water_241",
        occlusionGroup: "water_241",
        shaderVersion: 8,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !0,
            deformSurface: !0
        },
        passable: !0,
        factory: Er,
        special: {
            paletteIndex: 241,
            label: "Water",
            swatchColor: pr,
            category: "liquids"
        }
    }, hi = "/materials/wood_244/wood_256x256.png", Cr = "#8b5a2b", Rr = 1, Lr = 8, zr = 1;
    let pe = null, fe = null;
    function ci(r, t) {
        return r.colorSpace = C, r.wrapS = 1e3, r.wrapT = 1e3, r.magFilter = 1006, r.minFilter = t ? 1006 : 1008, r.anisotropy = t ? zr : Lr, r.generateMipmaps = !t, r;
    }
    function Or(r) {
        return r ? (fe || (fe = ci(new L().load(hi), !0)), fe) : (pe || (pe = ci(new L().load(hi), !1)), pe);
    }
    function Ir() {
        return [
            ...k
        ];
    }
    function Nr() {
        return [
            ...W
        ];
    }
    function kr(r) {
        return [
            ...N(r),
            "uniform sampler2D woodMap;",
            "vec2 getWoodUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function Wr() {
        return [
            "#include <color_fragment>",
            `vec2 woodUv = getWoodUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Rr.toFixed(1)};`,
            "vec4 woodTexel = texture2D(woodMap, woodUv);",
            "diffuseColor.rgb *= woodTexel.rgb;",
            "diffuseColor.a *= woodTexel.a;",
            `diffuseColor.rgb *= ${A};`
        ];
    }
    function Dr(r, t, e, i, s) {
        r.onBeforeCompile = (n)=>{
            D(n, e), n.uniforms.woodMap = {
                value: t
            }, V(n, i), n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Ir(),
                ...U
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Nr(),
                ...P
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...kr(s),
                ...B
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", Wr().join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <dithering_fragment>", H.join(`
`));
        };
    }
    const Ur = (r)=>{
        const { movementHighlight: t, voxelAo: e, performanceMode: i = !1 } = r, s = Or(i), n = new z({
            roughness: ot.ROUGHNESS,
            metalness: ot.METALNESS,
            vertexColors: !1
        });
        return Dr(n, s, e, t, i), {
            material: n,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Pr = {
        bucketKey: "wood_244",
        occlusionGroup: "solid",
        shaderVersion: 2,
        geometry: {
            vertexColors: !1
        },
        factory: Ur,
        special: {
            paletteIndex: 244,
            label: "Wood",
            swatchColor: Cr,
            category: "nature"
        }
    }, Y = [
        Ot,
        mr,
        Tr,
        ln,
        $n,
        Pr,
        Pn,
        Ts,
        Ps,
        er,
        wn,
        vs,
        Ss
    ];
    Y.filter((r)=>r.special !== void 0).map((r)=>({
            index: r.special.paletteIndex,
            label: r.special.label,
            color: r.special.swatchColor,
            category: r.special.category ?? "miscellaneous"
        }));
    const Br = new Map(Y.filter((r)=>r.special !== void 0).map((r)=>[
            r.special.paletteIndex,
            r.bucketKey
        ])), Hr = Ot.occlusionGroup ?? Ot.bucketKey, Vr = new Map(Y.filter((r)=>r.special !== void 0).map((r)=>[
            r.special.paletteIndex,
            r.occlusionGroup ?? r.bucketKey
        ])), Ae = new Map(Y.filter((r)=>r.special !== void 0).map((r)=>[
            r.special.paletteIndex,
            r.geometry
        ])), Ee = Ot.geometry, Mi = new Set(Y.filter((r)=>r.special !== void 0).filter((r)=>r.passable === !0).map((r)=>r.special.paletteIndex));
    function Gr(r) {
        return Mi.has(r);
    }
    const $r = new Set(Y.filter((r)=>r.special !== void 0).filter((r)=>r.volumetric === !0).map((r)=>r.special.paletteIndex));
    function qr(r) {
        return $r.has(r);
    }
    function jr(r) {
        return Br.get(r) ?? "default";
    }
    function Xr(r) {
        return Vr.get(r) ?? Hr;
    }
    function Yr(r) {
        return (Ae.get(r) ?? Ee)?.deformSurface === !0;
    }
    function Zr(r) {
        return (Ae.get(r) ?? Ee)?.vertexColors !== !1;
    }
    function Jr(r) {
        return (Ae.get(r) ?? Ee)?.preserveVoxelFaces === !0;
    }
    function Kr() {
        const r = new Map, t = [], e = (m)=>{
            let d = r.get(m);
            return d === void 0 && (d = t.length, r.set(m, d), t.push(m)), d;
        }, i = new Map, s = (m)=>{
            let d = i.get(m);
            return d === void 0 && (d = i.size, i.set(m, d)), d;
        }, n = new Int32Array(256), o = new Int32Array(256), a = new Uint8Array(256), h = new Uint8Array(256), l = new Uint8Array(256), c = new Uint8Array(256), u = new Uint8Array(256);
        for(let m = 0; m < 256; m++)n[m] = e(jr(m)), o[m] = s(Xr(m)), a[m] = Zr(m) ? 1 : 0, h[m] = Yr(m) ? 1 : 0, l[m] = Jr(m) ? 1 : 0, c[m] = qr(m) ? 1 : 0, u[m] = Gr(m) ? 1 : 0;
        return {
            bucketId: n,
            occlusionId: o,
            usesVertexColors: a,
            deformsSurface: h,
            preservesVoxelFaces: l,
            isVolumetric: c,
            isPassable: u,
            bucketKeyById: t
        };
    }
    const st = Kr(), Qr = new Map(Y.filter((r)=>r.special !== void 0).map((r)=>[
            r.special.paletteIndex,
            parseInt(r.special.swatchColor.slice(1), 16)
        ]));
    ji({
        passableIndices: Mi,
        editorColors: Qr
    });
    function to(r) {
        const { bucketKey: t, shaderVersion: e, factory: i } = r;
        return (s)=>{
            const n = i(s), o = [
                "terrain",
                t,
                `v${e}`,
                s.performanceMode ? "perf" : "full"
            ].join("-");
            return n.material.customProgramCacheKey = ()=>o, n.material.needsUpdate = !0, n;
        };
    }
    {
        const r = new Set, t = new Set;
        for (const e of Y){
            if (r.has(e.bucketKey)) throw new Error(`Duplicate terrain material bucketKey: "${e.bucketKey}"`);
            if (r.add(e.bucketKey), e.special) {
                const { paletteIndex: i } = e.special;
                if (i < 240 || i > 255) throw new Error(`Special material "${e.bucketKey}" has paletteIndex ${i} outside the 240-255 range.`);
                if (t.has(i)) throw new Error(`Duplicate special material paletteIndex: ${i}`);
                t.add(i);
            }
        }
    }
    new Map(Y.filter((r)=>r.factory !== void 0).map((r)=>[
            r.bucketKey,
            to(r)
        ]));
    const ui = 1;
    function eo(r) {
        return Math.max(ui, r.Resolution ?? ui);
    }
    const kt = 12, di = .22, io = .88, so = .18, mi = .34, no = .9, ro = .98, oo = [
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
        }, (r, t)=>[
                so,
                t * 20
            ])
    ];
    function ge(r) {
        const t = Math.max(0, Math.min(1, r));
        return t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055;
    }
    function xe(r) {
        return Math.round(Math.max(0, Math.min(1, r)) * 255).toString(16).padStart(2, "0");
    }
    function wi(r, t, e) {
        const i = e * Math.PI / 180, s = t * Math.cos(i), n = t * Math.sin(i), o = r + .3963377774 * s + .2158037573 * n, a = r - .1055613458 * s - .0638541728 * n, h = r - .0894841775 * s - 1.291485548 * n, l = o ** 3, c = a ** 3, u = h ** 3;
        return [
            4.0767416621 * l - 3.3077115913 * c + .2309699292 * u,
            -1.2684380046 * l + 2.6097574011 * c - .3413193965 * u,
            -.0041960863 * l - .7034186147 * c + 1.707614701 * u
        ];
    }
    function ao(r, t, e) {
        const [i, s, n] = wi(r, t, e), o = ge(i), a = ge(s), h = ge(n);
        return `#${xe(o)}${xe(a)}${xe(h)}`;
    }
    function lo(r, t, e) {
        const [i, s, n] = wi(r, t, e);
        return i >= 0 && i <= 1 && s >= 0 && s <= 1 && n >= 0 && n <= 1;
    }
    function ho(r, t) {
        let e = 0, i = .4;
        for(let s = 0; s < 16; s++){
            const n = (e + i) / 2;
            lo(r, n, t) ? e = n : i = n;
        }
        return e * ro;
    }
    function Fi(r) {
        const t = r / (kt - 1);
        return di + t * (io - di);
    }
    function co(r, t, e) {
        if (t <= 0 || e === null) return 0;
        const i = r / (kt - 1), s = Math.pow(Math.sin(Math.PI * i), no), n = t * (mi + (1 - mi) * s);
        return Math.min(n, ho(Fi(r), e));
    }
    function uo() {
        const r = [];
        for (const [t, e] of oo)for(let i = 0; i < kt; i++){
            const s = Fi(i), n = co(i, t, e);
            r.push(ao(s, n, e ?? 0));
        }
        return r;
    }
    const It = uo(), bi = kt - 1;
    function mo(r) {
        return It[r] ?? It[bi];
    }
    function pi(r) {
        const t = r.replace("#", "");
        return {
            r: parseInt(t.slice(0, 2), 16),
            g: parseInt(t.slice(2, 4), 16),
            b: parseInt(t.slice(4, 6), 16)
        };
    }
    function po(r) {
        return `#${(r & 16777215).toString(16).padStart(6, "0")}`;
    }
    function ye(r) {
        const t = r / 255;
        return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
    }
    function fi(r, t, e) {
        const i = ye(r), s = ye(t), n = ye(e), o = Math.cbrt(.4122214708 * i + .5363325363 * s + .0514459929 * n), a = Math.cbrt(.2119034982 * i + .6806995451 * s + .1073969566 * n), h = Math.cbrt(.0883024619 * i + .2817188376 * s + .6299787005 * n);
        return [
            .2104542553 * o + .793617785 * a - .0040720468 * h,
            1.9779984951 * o - 2.428592205 * a + .4505937099 * h,
            .0259040371 * o + .7827717662 * a - .808675766 * h
        ];
    }
    function fo(r) {
        const t = Xi(r);
        return t !== void 0 ? t : parseInt(mo(r).slice(1), 16);
    }
    function go(r) {
        const { r: t, g: e, b: i } = pi(po(r)), [s, n, o] = fi(t, e, i);
        let a = bi, h = 1 / 0;
        for(let l = 0; l < It.length; l++){
            const c = pi(It[l]), [u, m, d] = fi(c.r, c.g, c.b), p = s - u, f = n - m, x = o - d, g = p * p + f * f + x * x;
            g < h && (h = g, a = l);
        }
        return a;
    }
    function xo(r) {
        const t = Math.floor(r);
        return t >= 0 && t <= 255 ? t : go(r);
    }
    const yo = st.bucketKeyById;
    let zt = null;
    function vo() {
        return zt || (zt = (async ()=>{
            const { VoxelMesher: t } = await import("./voxel_mesher-8kBYlObl.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), e = new Float32Array(256 * 3);
            for(let i = 0; i < 256; i++){
                const s = new Q(fo(xo(i)));
                e[i * 3] = s.r, e[i * 3 + 1] = s.g, e[i * 3 + 2] = s.b;
            }
            return new t(st.bucketId, st.occlusionId, st.usesVertexColors, st.deformsSurface, st.preservesVoxelFaces, st.isVolumetric, e);
        })().catch((t)=>{
            throw zt = null, t;
        })), zt;
    }
    function $(r) {
        const { buffer: t } = r;
        if (t instanceof ArrayBuffer) return t;
        throw new Error("Cannot transfer SharedArrayBuffer-backed voxel geometry buffers.");
    }
    function _o(r) {
        return r instanceof Error ? r.message : String(r);
    }
    function gi(r, t, e) {
        self.postMessage({
            buildId: r,
            error: `Failed to ${t}: ${_o(e)}`
        });
    }
    self.onmessage = async (r)=>{
        const { buildId: t, terrain: e, voxels: i } = r.data;
        let s;
        try {
            s = await vo();
        } catch (n) {
            console.error("[voxel-build] WASM mesher init FAILED:", n), gi(t, "initialize the WebAssembly terrain mesher", n);
            return;
        }
        try {
            So(s, t, e, i);
        } catch (n) {
            console.error("[voxel-build] WASM build FAILED:", n), gi(t, "build the terrain geometry", n);
        }
    };
    function So(r, t, e, i) {
        const s = eo(e), n = Math.max(e.Width, e.Height, e.Length) * s, o = qi(n), a = r.build_from_svo(i, e.Width, e.Height, e.Length, s, o), h = [], l = [];
        let c, u, m, d, p;
        try {
            const b = a.bucket_count();
            for(let v = 0; v < b; v++){
                const M = yo[a.bucket_id(v)], _ = a.take_positions(v), w = a.take_normals(v), y = a.take_colors(v), Z = a.take_surface_deform(v), tt = a.take_tile_heights(v), et = a.take_highlights(v), it = a.take_indices(v);
                h.push({
                    key: M,
                    positions: _,
                    normals: w,
                    colors: y,
                    surfaceDeformStrength: Z,
                    tileHeights: tt,
                    highlightStrengths: et,
                    indices: it
                }), l.push($(_)), l.push($(w)), y && l.push($(y)), Z && l.push($(Z)), l.push($(tt)), l.push($(et)), l.push($(it));
            }
            c = a.take_occupancy(), u = a.take_fog() ?? null, m = a.occupancy_width(), d = a.occupancy_height(), p = a.occupancy_length();
        } finally{
            a.free();
        }
        const f = {
            voxelWidth: m,
            voxelHeight: d,
            voxelLength: p,
            worldOriginX: -e.Width / 2,
            worldOriginY: -.5,
            worldOriginZ: -e.Length / 2,
            worldSizeX: e.Width,
            worldSizeY: e.Height,
            worldSizeZ: e.Length,
            voxelSize: 1 / s
        }, x = {
            data: c,
            ...f
        }, g = u ? {
            data: u,
            ...f
        } : null;
        l.push($(x.data)), g && l.push($(g.data)), self.postMessage({
            buildId: t,
            buckets: h,
            occupancy: x,
            fogVolume: g
        }, l);
    }
})();
