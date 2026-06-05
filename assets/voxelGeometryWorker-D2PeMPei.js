(async ()=>{
    const E = "srgb", dt = "srgb-linear", _t = "linear", Le = "srgb";
    class pt {
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
            const n = i[e];
            if (n !== void 0) {
                const o = n.indexOf(t);
                o !== -1 && n.splice(o, 1);
            }
        }
        dispatchEvent(e) {
            const t = this._listeners;
            if (t === void 0) return;
            const i = t[e.type];
            if (i !== void 0) {
                e.target = this;
                const n = i.slice(0);
                for(let o = 0, a = n.length; o < a; o++)n[o].call(this, e);
                e.target = null;
            }
        }
    }
    const A = [
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
    function Te() {
        const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
        return (A[r & 255] + A[r >> 8 & 255] + A[r >> 16 & 255] + A[r >> 24 & 255] + "-" + A[e & 255] + A[e >> 8 & 255] + "-" + A[e >> 16 & 15 | 64] + A[e >> 24 & 255] + "-" + A[t & 63 | 128] + A[t >> 8 & 255] + "-" + A[t >> 16 & 255] + A[t >> 24 & 255] + A[i & 255] + A[i >> 8 & 255] + A[i >> 16 & 255] + A[i >> 24 & 255]).toLowerCase();
    }
    function S(r, e, t) {
        return Math.max(e, Math.min(t, r));
    }
    function an(r, e) {
        return (r % e + e) % e;
    }
    function ze(r, e, t) {
        return (1 - t) * r + t * e;
    }
    class L {
        constructor(e = 0, t = 0){
            L.prototype.isVector2 = !0, this.x = e, this.y = t;
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
            const t = this.x, i = this.y, n = e.elements;
            return this.x = n[0] * t + n[3] * i + n[6], this.y = n[1] * t + n[4] * i + n[7], this;
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
            const i = Math.cos(t), n = Math.sin(t), o = this.x - e.x, a = this.y - e.y;
            return this.x = o * i - a * n + e.x, this.y = o * n + a * i + e.y, this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y;
        }
    }
    class he {
        constructor(e = 0, t = 0, i = 0, n = 1){
            this.isQuaternion = !0, this._x = e, this._y = t, this._z = i, this._w = n;
        }
        static slerpFlat(e, t, i, n, o, a, s) {
            let c = i[n + 0], l = i[n + 1], h = i[n + 2], m = i[n + 3];
            const d = o[a + 0], g = o[a + 1], u = o[a + 2], v = o[a + 3];
            if (s === 0) {
                e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = m;
                return;
            }
            if (s === 1) {
                e[t + 0] = d, e[t + 1] = g, e[t + 2] = u, e[t + 3] = v;
                return;
            }
            if (m !== v || c !== d || l !== g || h !== u) {
                let p = 1 - s;
                const f = c * d + l * g + h * u + m * v, H = f >= 0 ? 1 : -1, b = 1 - f * f;
                if (b > Number.EPSILON) {
                    const y = Math.sqrt(b), _ = Math.atan2(y, f * H);
                    p = Math.sin(p * _) / y, s = Math.sin(s * _) / y;
                }
                const M = s * H;
                if (c = c * p + d * M, l = l * p + g * M, h = h * p + u * M, m = m * p + v * M, p === 1 - s) {
                    const y = 1 / Math.sqrt(c * c + l * l + h * h + m * m);
                    c *= y, l *= y, h *= y, m *= y;
                }
            }
            e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = m;
        }
        static multiplyQuaternionsFlat(e, t, i, n, o, a) {
            const s = i[n], c = i[n + 1], l = i[n + 2], h = i[n + 3], m = o[a], d = o[a + 1], g = o[a + 2], u = o[a + 3];
            return e[t] = s * u + h * m + c * g - l * d, e[t + 1] = c * u + h * d + l * m - s * g, e[t + 2] = l * u + h * g + s * d - c * m, e[t + 3] = h * u - s * m - c * d - l * g, e;
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
        set(e, t, i, n) {
            return this._x = e, this._y = t, this._z = i, this._w = n, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._w);
        }
        copy(e) {
            return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
        }
        setFromEuler(e, t = !0) {
            const i = e._x, n = e._y, o = e._z, a = e._order, s = Math.cos, c = Math.sin, l = s(i / 2), h = s(n / 2), m = s(o / 2), d = c(i / 2), g = c(n / 2), u = c(o / 2);
            switch(a){
                case "XYZ":
                    this._x = d * h * m + l * g * u, this._y = l * g * m - d * h * u, this._z = l * h * u + d * g * m, this._w = l * h * m - d * g * u;
                    break;
                case "YXZ":
                    this._x = d * h * m + l * g * u, this._y = l * g * m - d * h * u, this._z = l * h * u - d * g * m, this._w = l * h * m + d * g * u;
                    break;
                case "ZXY":
                    this._x = d * h * m - l * g * u, this._y = l * g * m + d * h * u, this._z = l * h * u + d * g * m, this._w = l * h * m - d * g * u;
                    break;
                case "ZYX":
                    this._x = d * h * m - l * g * u, this._y = l * g * m + d * h * u, this._z = l * h * u - d * g * m, this._w = l * h * m + d * g * u;
                    break;
                case "YZX":
                    this._x = d * h * m + l * g * u, this._y = l * g * m + d * h * u, this._z = l * h * u - d * g * m, this._w = l * h * m - d * g * u;
                    break;
                case "XZY":
                    this._x = d * h * m - l * g * u, this._y = l * g * m - d * h * u, this._z = l * h * u + d * g * m, this._w = l * h * m + d * g * u;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
            }
            return t === !0 && this._onChangeCallback(), this;
        }
        setFromAxisAngle(e, t) {
            const i = t / 2, n = Math.sin(i);
            return this._x = e.x * n, this._y = e.y * n, this._z = e.z * n, this._w = Math.cos(i), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(e) {
            const t = e.elements, i = t[0], n = t[4], o = t[8], a = t[1], s = t[5], c = t[9], l = t[2], h = t[6], m = t[10], d = i + s + m;
            if (d > 0) {
                const g = .5 / Math.sqrt(d + 1);
                this._w = .25 / g, this._x = (h - c) * g, this._y = (o - l) * g, this._z = (a - n) * g;
            } else if (i > s && i > m) {
                const g = 2 * Math.sqrt(1 + i - s - m);
                this._w = (h - c) / g, this._x = .25 * g, this._y = (n + a) / g, this._z = (o + l) / g;
            } else if (s > m) {
                const g = 2 * Math.sqrt(1 + s - i - m);
                this._w = (o - l) / g, this._x = (n + a) / g, this._y = .25 * g, this._z = (c + h) / g;
            } else {
                const g = 2 * Math.sqrt(1 + m - i - s);
                this._w = (a - n) / g, this._x = (o + l) / g, this._y = (c + h) / g, this._z = .25 * g;
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
            const n = Math.min(1, t / i);
            return this.slerp(e, n), this;
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
            const i = e._x, n = e._y, o = e._z, a = e._w, s = t._x, c = t._y, l = t._z, h = t._w;
            return this._x = i * h + a * s + n * l - o * c, this._y = n * h + a * c + o * s - i * l, this._z = o * h + a * l + i * c - n * s, this._w = a * h - i * s - n * c - o * l, this._onChangeCallback(), this;
        }
        slerp(e, t) {
            if (t === 0) return this;
            if (t === 1) return this.copy(e);
            const i = this._x, n = this._y, o = this._z, a = this._w;
            let s = a * e._w + i * e._x + n * e._y + o * e._z;
            if (s < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, s = -s) : this.copy(e), s >= 1) return this._w = a, this._x = i, this._y = n, this._z = o, this;
            const c = 1 - s * s;
            if (c <= Number.EPSILON) {
                const g = 1 - t;
                return this._w = g * a + t * this._w, this._x = g * i + t * this._x, this._y = g * n + t * this._y, this._z = g * o + t * this._z, this.normalize(), this;
            }
            const l = Math.sqrt(c), h = Math.atan2(l, s), m = Math.sin((1 - t) * h) / l, d = Math.sin(t * h) / l;
            return this._w = a * m + this._w * d, this._x = i * m + this._x * d, this._y = n * m + this._y * d, this._z = o * m + this._z * d, this._onChangeCallback(), this;
        }
        slerpQuaternions(e, t, i) {
            return this.copy(e).slerp(t, i);
        }
        random() {
            const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), i = Math.random(), n = Math.sqrt(1 - i), o = Math.sqrt(i);
            return this.set(n * Math.sin(e), n * Math.cos(e), o * Math.sin(t), o * Math.cos(t));
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
    class w {
        constructor(e = 0, t = 0, i = 0){
            w.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = i;
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
            return this.applyQuaternion(bt.setFromEuler(e));
        }
        applyAxisAngle(e, t) {
            return this.applyQuaternion(bt.setFromAxisAngle(e, t));
        }
        applyMatrix3(e) {
            const t = this.x, i = this.y, n = this.z, o = e.elements;
            return this.x = o[0] * t + o[3] * i + o[6] * n, this.y = o[1] * t + o[4] * i + o[7] * n, this.z = o[2] * t + o[5] * i + o[8] * n, this;
        }
        applyNormalMatrix(e) {
            return this.applyMatrix3(e).normalize();
        }
        applyMatrix4(e) {
            const t = this.x, i = this.y, n = this.z, o = e.elements, a = 1 / (o[3] * t + o[7] * i + o[11] * n + o[15]);
            return this.x = (o[0] * t + o[4] * i + o[8] * n + o[12]) * a, this.y = (o[1] * t + o[5] * i + o[9] * n + o[13]) * a, this.z = (o[2] * t + o[6] * i + o[10] * n + o[14]) * a, this;
        }
        applyQuaternion(e) {
            const t = this.x, i = this.y, n = this.z, o = e.x, a = e.y, s = e.z, c = e.w, l = 2 * (a * n - s * i), h = 2 * (s * t - o * n), m = 2 * (o * i - a * t);
            return this.x = t + c * l + a * m - s * h, this.y = i + c * h + s * l - o * m, this.z = n + c * m + o * h - a * l, this;
        }
        project(e) {
            return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
        }
        unproject(e) {
            return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
        }
        transformDirection(e) {
            const t = this.x, i = this.y, n = this.z, o = e.elements;
            return this.x = o[0] * t + o[4] * i + o[8] * n, this.y = o[1] * t + o[5] * i + o[9] * n, this.z = o[2] * t + o[6] * i + o[10] * n, this.normalize();
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
            const i = e.x, n = e.y, o = e.z, a = t.x, s = t.y, c = t.z;
            return this.x = n * c - o * s, this.y = o * a - i * c, this.z = i * s - n * a, this;
        }
        projectOnVector(e) {
            const t = e.lengthSq();
            if (t === 0) return this.set(0, 0, 0);
            const i = e.dot(this) / t;
            return this.copy(e).multiplyScalar(i);
        }
        projectOnPlane(e) {
            return Re.copy(this).projectOnVector(e), this.sub(Re);
        }
        reflect(e) {
            return this.sub(Re.copy(e).multiplyScalar(2 * this.dot(e)));
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
            const t = this.x - e.x, i = this.y - e.y, n = this.z - e.z;
            return t * t + i * i + n * n;
        }
        manhattanDistanceTo(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
        }
        setFromSpherical(e) {
            return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
        }
        setFromSphericalCoords(e, t, i) {
            const n = Math.sin(t) * e;
            return this.x = n * Math.sin(i), this.y = Math.cos(t) * e, this.z = n * Math.cos(i), this;
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
            const t = this.setFromMatrixColumn(e, 0).length(), i = this.setFromMatrixColumn(e, 1).length(), n = this.setFromMatrixColumn(e, 2).length();
            return this.x = t, this.y = i, this.z = n, this;
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
    const Re = new w, bt = new he;
    class ee {
        constructor(e, t, i, n, o, a, s, c, l){
            ee.prototype.isMatrix3 = !0, this.elements = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], e !== void 0 && this.set(e, t, i, n, o, a, s, c, l);
        }
        set(e, t, i, n, o, a, s, c, l) {
            const h = this.elements;
            return h[0] = e, h[1] = n, h[2] = s, h[3] = t, h[4] = o, h[5] = c, h[6] = i, h[7] = a, h[8] = l, this;
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
            const i = e.elements, n = t.elements, o = this.elements, a = i[0], s = i[3], c = i[6], l = i[1], h = i[4], m = i[7], d = i[2], g = i[5], u = i[8], v = n[0], p = n[3], f = n[6], H = n[1], b = n[4], M = n[7], y = n[2], _ = n[5], x = n[8];
            return o[0] = a * v + s * H + c * y, o[3] = a * p + s * b + c * _, o[6] = a * f + s * M + c * x, o[1] = l * v + h * H + m * y, o[4] = l * p + h * b + m * _, o[7] = l * f + h * M + m * x, o[2] = d * v + g * H + u * y, o[5] = d * p + g * b + u * _, o[8] = d * f + g * M + u * x, this;
        }
        multiplyScalar(e) {
            const t = this.elements;
            return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
        }
        determinant() {
            const e = this.elements, t = e[0], i = e[1], n = e[2], o = e[3], a = e[4], s = e[5], c = e[6], l = e[7], h = e[8];
            return t * a * h - t * s * l - i * o * h + i * s * c + n * o * l - n * a * c;
        }
        invert() {
            const e = this.elements, t = e[0], i = e[1], n = e[2], o = e[3], a = e[4], s = e[5], c = e[6], l = e[7], h = e[8], m = h * a - s * l, d = s * c - h * o, g = l * o - a * c, u = t * m + i * d + n * g;
            if (u === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const v = 1 / u;
            return e[0] = m * v, e[1] = (n * l - h * i) * v, e[2] = (s * i - n * a) * v, e[3] = d * v, e[4] = (h * t - n * c) * v, e[5] = (n * o - s * t) * v, e[6] = g * v, e[7] = (i * c - l * t) * v, e[8] = (a * t - i * o) * v, this;
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
        setUvTransform(e, t, i, n, o, a, s) {
            const c = Math.cos(o), l = Math.sin(o);
            return this.set(i * c, i * l, -i * (c * a + l * s) + a + e, -n * l, n * c, -n * (-l * a + c * s) + s + t, 0, 0, 1), this;
        }
        scale(e, t) {
            return this.premultiply(We.makeScale(e, t)), this;
        }
        rotate(e) {
            return this.premultiply(We.makeRotation(-e)), this;
        }
        translate(e, t) {
            return this.premultiply(We.makeTranslation(e, t)), this;
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
            for(let n = 0; n < 9; n++)if (t[n] !== i[n]) return !1;
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
    const We = new ee;
    function ut(r) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", r);
    }
    const wt = {};
    function Ft(r) {
        r in wt || (wt[r] = !0, console.warn(r));
    }
    const Ht = new ee().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), Ct = new ee().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
    function ln() {
        const r = {
            enabled: !0,
            workingColorSpace: dt,
            spaces: {},
            convert: function(n, o, a) {
                return this.enabled === !1 || o === a || !o || !a || (this.spaces[o].transfer === Le && (n.r = U(n.r), n.g = U(n.g), n.b = U(n.b)), this.spaces[o].primaries !== this.spaces[a].primaries && (n.applyMatrix3(this.spaces[o].toXYZ), n.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Le && (n.r = se(n.r), n.g = se(n.g), n.b = se(n.b))), n;
            },
            workingToColorSpace: function(n, o) {
                return this.convert(n, this.workingColorSpace, o);
            },
            colorSpaceToWorking: function(n, o) {
                return this.convert(n, o, this.workingColorSpace);
            },
            getPrimaries: function(n) {
                return this.spaces[n].primaries;
            },
            getTransfer: function(n) {
                return n === "" ? _t : this.spaces[n].transfer;
            },
            getToneMappingMode: function(n) {
                return this.spaces[n].outputColorSpaceConfig.toneMappingMode || "standard";
            },
            getLuminanceCoefficients: function(n, o = this.workingColorSpace) {
                return n.fromArray(this.spaces[o].luminanceCoefficients);
            },
            define: function(n) {
                Object.assign(this.spaces, n);
            },
            _getMatrix: function(n, o, a) {
                return n.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ);
            },
            _getDrawingBufferColorSpace: function(n) {
                return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace;
            },
            _getUnpackColorSpace: function(n = this.workingColorSpace) {
                return this.spaces[n].workingColorSpaceConfig.unpackColorSpace;
            },
            fromWorkingColorSpace: function(n, o) {
                return Ft("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), r.workingToColorSpace(n, o);
            },
            toWorkingColorSpace: function(n, o) {
                return Ft("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), r.colorSpaceToWorking(n, o);
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
        return r.define({
            [dt]: {
                primaries: e,
                whitePoint: i,
                transfer: _t,
                toXYZ: Ht,
                fromXYZ: Ct,
                luminanceCoefficients: t,
                workingColorSpaceConfig: {
                    unpackColorSpace: E
                },
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: E
                }
            },
            [E]: {
                primaries: e,
                whitePoint: i,
                transfer: Le,
                toXYZ: Ht,
                fromXYZ: Ct,
                luminanceCoefficients: t,
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: E
                }
            }
        }), r;
    }
    const O = ln();
    function U(r) {
        return r < .04045 ? r * .0773993808 : Math.pow(r * .9478672986 + .0521327014, 2.4);
    }
    function se(r) {
        return r < .0031308 ? r * 12.92 : 1.055 * Math.pow(r, .41666) - .055;
    }
    let te;
    class hn {
        static getDataURL(e, t = "image/png") {
            if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
            let i;
            if (e instanceof HTMLCanvasElement) i = e;
            else {
                te === void 0 && (te = ut("canvas")), te.width = e.width, te.height = e.height;
                const n = te.getContext("2d");
                e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), i = te;
            }
            return i.toDataURL(t);
        }
        static sRGBToLinear(e) {
            if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
                const t = ut("canvas");
                t.width = e.width, t.height = e.height;
                const i = t.getContext("2d");
                i.drawImage(e, 0, 0, e.width, e.height);
                const n = i.getImageData(0, 0, e.width, e.height), o = n.data;
                for(let a = 0; a < o.length; a++)o[a] = U(o[a] / 255) * 255;
                return i.putImageData(n, 0, 0), t;
            } else if (e.data) {
                const t = e.data.slice(0);
                for(let i = 0; i < t.length; i++)t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(U(t[i] / 255) * 255) : t[i] = U(t[i]);
                return {
                    data: t,
                    width: e.width,
                    height: e.height
                };
            } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
        }
    }
    let cn = 0;
    class mn {
        constructor(e = null){
            this.isSource = !0, Object.defineProperty(this, "id", {
                value: cn++
            }), this.uuid = Te(), this.data = e, this.dataReady = !0, this.version = 0;
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
            }, n = this.data;
            if (n !== null) {
                let o;
                if (Array.isArray(n)) {
                    o = [];
                    for(let a = 0, s = n.length; a < s; a++)n[a].isDataTexture ? o.push(Ne(n[a].image)) : o.push(Ne(n[a]));
                } else o = Ne(n);
                i.url = o;
            }
            return t || (e.images[this.uuid] = i), i;
        }
    }
    function Ne(r) {
        return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? hn.getDataURL(r) : r.data ? {
            data: Array.from(r.data),
            width: r.width,
            height: r.height,
            type: r.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
    }
    let gn = 0;
    const Oe = new w;
    class q extends pt {
        constructor(e = q.DEFAULT_IMAGE, t = q.DEFAULT_MAPPING, i = 1001, n = 1001, o = 1006, a = 1008, s = 1023, c = 1009, l = q.DEFAULT_ANISOTROPY, h = ""){
            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                value: gn++
            }), this.uuid = Te(), this.name = "", this.source = new mn(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = i, this.wrapT = n, this.magFilter = o, this.minFilter = a, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = c, this.offset = new L(0, 0), this.repeat = new L(1, 1), this.center = new L(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ee, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0;
        }
        get width() {
            return this.source.getSize(Oe).x;
        }
        get height() {
            return this.source.getSize(Oe).y;
        }
        get depth() {
            return this.source.getSize(Oe).z;
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
                const n = this[t];
                if (n === void 0) {
                    console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);
                    continue;
                }
                n && i && n.isVector2 && i.isVector2 || n && i && n.isVector3 && i.isVector3 || n && i && n.isMatrix3 && i.isMatrix3 ? n.copy(i) : this[t] = i;
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
    q.DEFAULT_IMAGE = null;
    q.DEFAULT_MAPPING = 300;
    q.DEFAULT_ANISOTROPY = 1;
    class V {
        constructor(e, t, i, n, o, a, s, c, l, h, m, d, g, u, v, p){
            V.prototype.isMatrix4 = !0, this.elements = [
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
            ], e !== void 0 && this.set(e, t, i, n, o, a, s, c, l, h, m, d, g, u, v, p);
        }
        set(e, t, i, n, o, a, s, c, l, h, m, d, g, u, v, p) {
            const f = this.elements;
            return f[0] = e, f[4] = t, f[8] = i, f[12] = n, f[1] = o, f[5] = a, f[9] = s, f[13] = c, f[2] = l, f[6] = h, f[10] = m, f[14] = d, f[3] = g, f[7] = u, f[11] = v, f[15] = p, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
            return new V().fromArray(this.elements);
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
            const t = this.elements, i = e.elements, n = 1 / ie.setFromMatrixColumn(e, 0).length(), o = 1 / ie.setFromMatrixColumn(e, 1).length(), a = 1 / ie.setFromMatrixColumn(e, 2).length();
            return t[0] = i[0] * n, t[1] = i[1] * n, t[2] = i[2] * n, t[3] = 0, t[4] = i[4] * o, t[5] = i[5] * o, t[6] = i[6] * o, t[7] = 0, t[8] = i[8] * a, t[9] = i[9] * a, t[10] = i[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
        }
        makeRotationFromEuler(e) {
            const t = this.elements, i = e.x, n = e.y, o = e.z, a = Math.cos(i), s = Math.sin(i), c = Math.cos(n), l = Math.sin(n), h = Math.cos(o), m = Math.sin(o);
            if (e.order === "XYZ") {
                const d = a * h, g = a * m, u = s * h, v = s * m;
                t[0] = c * h, t[4] = -c * m, t[8] = l, t[1] = g + u * l, t[5] = d - v * l, t[9] = -s * c, t[2] = v - d * l, t[6] = u + g * l, t[10] = a * c;
            } else if (e.order === "YXZ") {
                const d = c * h, g = c * m, u = l * h, v = l * m;
                t[0] = d + v * s, t[4] = u * s - g, t[8] = a * l, t[1] = a * m, t[5] = a * h, t[9] = -s, t[2] = g * s - u, t[6] = v + d * s, t[10] = a * c;
            } else if (e.order === "ZXY") {
                const d = c * h, g = c * m, u = l * h, v = l * m;
                t[0] = d - v * s, t[4] = -a * m, t[8] = u + g * s, t[1] = g + u * s, t[5] = a * h, t[9] = v - d * s, t[2] = -a * l, t[6] = s, t[10] = a * c;
            } else if (e.order === "ZYX") {
                const d = a * h, g = a * m, u = s * h, v = s * m;
                t[0] = c * h, t[4] = u * l - g, t[8] = d * l + v, t[1] = c * m, t[5] = v * l + d, t[9] = g * l - u, t[2] = -l, t[6] = s * c, t[10] = a * c;
            } else if (e.order === "YZX") {
                const d = a * c, g = a * l, u = s * c, v = s * l;
                t[0] = c * h, t[4] = v - d * m, t[8] = u * m + g, t[1] = m, t[5] = a * h, t[9] = -s * h, t[2] = -l * h, t[6] = g * m + u, t[10] = d - v * m;
            } else if (e.order === "XZY") {
                const d = a * c, g = a * l, u = s * c, v = s * l;
                t[0] = c * h, t[4] = -m, t[8] = l * h, t[1] = d * m + v, t[5] = a * h, t[9] = g * m - u, t[2] = u * m - g, t[6] = s * h, t[10] = v * m + d;
            }
            return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
        }
        makeRotationFromQuaternion(e) {
            return this.compose(dn, e, un);
        }
        lookAt(e, t, i) {
            const n = this.elements;
            return z.subVectors(e, t), z.lengthSq() === 0 && (z.z = 1), z.normalize(), $.crossVectors(i, z), $.lengthSq() === 0 && (Math.abs(i.z) === 1 ? z.x += 1e-4 : z.z += 1e-4, z.normalize(), $.crossVectors(i, z)), $.normalize(), be.crossVectors(z, $), n[0] = $.x, n[4] = be.x, n[8] = z.x, n[1] = $.y, n[5] = be.y, n[9] = z.y, n[2] = $.z, n[6] = be.z, n[10] = z.z, this;
        }
        multiply(e) {
            return this.multiplyMatrices(this, e);
        }
        premultiply(e) {
            return this.multiplyMatrices(e, this);
        }
        multiplyMatrices(e, t) {
            const i = e.elements, n = t.elements, o = this.elements, a = i[0], s = i[4], c = i[8], l = i[12], h = i[1], m = i[5], d = i[9], g = i[13], u = i[2], v = i[6], p = i[10], f = i[14], H = i[3], b = i[7], M = i[11], y = i[15], _ = n[0], x = n[4], X = n[8], Z = n[12], me = n[1], ge = n[5], de = n[9], ue = n[13], ve = n[2], fe = n[6], pe = n[10], xe = n[14], ye = n[3], Se = n[7], Me = n[11], _e = n[15];
            return o[0] = a * _ + s * me + c * ve + l * ye, o[4] = a * x + s * ge + c * fe + l * Se, o[8] = a * X + s * de + c * pe + l * Me, o[12] = a * Z + s * ue + c * xe + l * _e, o[1] = h * _ + m * me + d * ve + g * ye, o[5] = h * x + m * ge + d * fe + g * Se, o[9] = h * X + m * de + d * pe + g * Me, o[13] = h * Z + m * ue + d * xe + g * _e, o[2] = u * _ + v * me + p * ve + f * ye, o[6] = u * x + v * ge + p * fe + f * Se, o[10] = u * X + v * de + p * pe + f * Me, o[14] = u * Z + v * ue + p * xe + f * _e, o[3] = H * _ + b * me + M * ve + y * ye, o[7] = H * x + b * ge + M * fe + y * Se, o[11] = H * X + b * de + M * pe + y * Me, o[15] = H * Z + b * ue + M * xe + y * _e, this;
        }
        multiplyScalar(e) {
            const t = this.elements;
            return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
        }
        determinant() {
            const e = this.elements, t = e[0], i = e[4], n = e[8], o = e[12], a = e[1], s = e[5], c = e[9], l = e[13], h = e[2], m = e[6], d = e[10], g = e[14], u = e[3], v = e[7], p = e[11], f = e[15];
            return u * (+o * c * m - n * l * m - o * s * d + i * l * d + n * s * g - i * c * g) + v * (+t * c * g - t * l * d + o * a * d - n * a * g + n * l * h - o * c * h) + p * (+t * l * m - t * s * g - o * a * m + i * a * g + o * s * h - i * l * h) + f * (-n * s * h - t * c * m + t * s * d + n * a * m - i * a * d + i * c * h);
        }
        transpose() {
            const e = this.elements;
            let t;
            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
        }
        setPosition(e, t, i) {
            const n = this.elements;
            return e.isVector3 ? (n[12] = e.x, n[13] = e.y, n[14] = e.z) : (n[12] = e, n[13] = t, n[14] = i), this;
        }
        invert() {
            const e = this.elements, t = e[0], i = e[1], n = e[2], o = e[3], a = e[4], s = e[5], c = e[6], l = e[7], h = e[8], m = e[9], d = e[10], g = e[11], u = e[12], v = e[13], p = e[14], f = e[15], H = m * p * l - v * d * l + v * c * g - s * p * g - m * c * f + s * d * f, b = u * d * l - h * p * l - u * c * g + a * p * g + h * c * f - a * d * f, M = h * v * l - u * m * l + u * s * g - a * v * g - h * s * f + a * m * f, y = u * m * c - h * v * c - u * s * d + a * v * d + h * s * p - a * m * p, _ = t * H + i * b + n * M + o * y;
            if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const x = 1 / _;
            return e[0] = H * x, e[1] = (v * d * o - m * p * o - v * n * g + i * p * g + m * n * f - i * d * f) * x, e[2] = (s * p * o - v * c * o + v * n * l - i * p * l - s * n * f + i * c * f) * x, e[3] = (m * c * o - s * d * o - m * n * l + i * d * l + s * n * g - i * c * g) * x, e[4] = b * x, e[5] = (h * p * o - u * d * o + u * n * g - t * p * g - h * n * f + t * d * f) * x, e[6] = (u * c * o - a * p * o - u * n * l + t * p * l + a * n * f - t * c * f) * x, e[7] = (a * d * o - h * c * o + h * n * l - t * d * l - a * n * g + t * c * g) * x, e[8] = M * x, e[9] = (u * m * o - h * v * o - u * i * g + t * v * g + h * i * f - t * m * f) * x, e[10] = (a * v * o - u * s * o + u * i * l - t * v * l - a * i * f + t * s * f) * x, e[11] = (h * s * o - a * m * o - h * i * l + t * m * l + a * i * g - t * s * g) * x, e[12] = y * x, e[13] = (h * v * n - u * m * n + u * i * d - t * v * d - h * i * p + t * m * p) * x, e[14] = (u * s * n - a * v * n - u * i * c + t * v * c + a * i * p - t * s * p) * x, e[15] = (a * m * n - h * s * n + h * i * c - t * m * c - a * i * d + t * s * d) * x, this;
        }
        scale(e) {
            const t = this.elements, i = e.x, n = e.y, o = e.z;
            return t[0] *= i, t[4] *= n, t[8] *= o, t[1] *= i, t[5] *= n, t[9] *= o, t[2] *= i, t[6] *= n, t[10] *= o, t[3] *= i, t[7] *= n, t[11] *= o, this;
        }
        getMaxScaleOnAxis() {
            const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
            return Math.sqrt(Math.max(t, i, n));
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
            const i = Math.cos(t), n = Math.sin(t), o = 1 - i, a = e.x, s = e.y, c = e.z, l = o * a, h = o * s;
            return this.set(l * a + i, l * s - n * c, l * c + n * s, 0, l * s + n * c, h * s + i, h * c - n * a, 0, l * c - n * s, h * c + n * a, o * c * c + i, 0, 0, 0, 0, 1), this;
        }
        makeScale(e, t, i) {
            return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
        }
        makeShear(e, t, i, n, o, a) {
            return this.set(1, i, o, 0, e, 1, a, 0, t, n, 1, 0, 0, 0, 0, 1), this;
        }
        compose(e, t, i) {
            const n = this.elements, o = t._x, a = t._y, s = t._z, c = t._w, l = o + o, h = a + a, m = s + s, d = o * l, g = o * h, u = o * m, v = a * h, p = a * m, f = s * m, H = c * l, b = c * h, M = c * m, y = i.x, _ = i.y, x = i.z;
            return n[0] = (1 - (v + f)) * y, n[1] = (g + M) * y, n[2] = (u - b) * y, n[3] = 0, n[4] = (g - M) * _, n[5] = (1 - (d + f)) * _, n[6] = (p + H) * _, n[7] = 0, n[8] = (u + b) * x, n[9] = (p - H) * x, n[10] = (1 - (d + v)) * x, n[11] = 0, n[12] = e.x, n[13] = e.y, n[14] = e.z, n[15] = 1, this;
        }
        decompose(e, t, i) {
            const n = this.elements;
            let o = ie.set(n[0], n[1], n[2]).length();
            const a = ie.set(n[4], n[5], n[6]).length(), s = ie.set(n[8], n[9], n[10]).length();
            this.determinant() < 0 && (o = -o), e.x = n[12], e.y = n[13], e.z = n[14], k.copy(this);
            const l = 1 / o, h = 1 / a, m = 1 / s;
            return k.elements[0] *= l, k.elements[1] *= l, k.elements[2] *= l, k.elements[4] *= h, k.elements[5] *= h, k.elements[6] *= h, k.elements[8] *= m, k.elements[9] *= m, k.elements[10] *= m, t.setFromRotationMatrix(k), i.x = o, i.y = a, i.z = s, this;
        }
        makePerspective(e, t, i, n, o, a, s = 2e3, c = !1) {
            const l = this.elements, h = 2 * o / (t - e), m = 2 * o / (i - n), d = (t + e) / (t - e), g = (i + n) / (i - n);
            let u, v;
            if (c) u = o / (a - o), v = a * o / (a - o);
            else if (s === 2e3) u = -(a + o) / (a - o), v = -2 * a * o / (a - o);
            else if (s === 2001) u = -a / (a - o), v = -a * o / (a - o);
            else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + s);
            return l[0] = h, l[4] = 0, l[8] = d, l[12] = 0, l[1] = 0, l[5] = m, l[9] = g, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = u, l[14] = v, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
        }
        makeOrthographic(e, t, i, n, o, a, s = 2e3, c = !1) {
            const l = this.elements, h = 2 / (t - e), m = 2 / (i - n), d = -(t + e) / (t - e), g = -(i + n) / (i - n);
            let u, v;
            if (c) u = 1 / (a - o), v = a / (a - o);
            else if (s === 2e3) u = -2 / (a - o), v = -(a + o) / (a - o);
            else if (s === 2001) u = -1 / (a - o), v = -o / (a - o);
            else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + s);
            return l[0] = h, l[4] = 0, l[8] = 0, l[12] = d, l[1] = 0, l[5] = m, l[9] = 0, l[13] = g, l[2] = 0, l[6] = 0, l[10] = u, l[14] = v, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
        }
        equals(e) {
            const t = this.elements, i = e.elements;
            for(let n = 0; n < 16; n++)if (t[n] !== i[n]) return !1;
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
    const ie = new w, k = new V, dn = new w(0, 0, 0), un = new w(1, 1, 1), $ = new w, be = new w, z = new w, At = new V, Tt = new he;
    class ce {
        constructor(e = 0, t = 0, i = 0, n = ce.DEFAULT_ORDER){
            this.isEuler = !0, this._x = e, this._y = t, this._z = i, this._order = n;
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
        set(e, t, i, n = this._order) {
            return this._x = e, this._y = t, this._z = i, this._order = n, this._onChangeCallback(), this;
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._order);
        }
        copy(e) {
            return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
        }
        setFromRotationMatrix(e, t = this._order, i = !0) {
            const n = e.elements, o = n[0], a = n[4], s = n[8], c = n[1], l = n[5], h = n[9], m = n[2], d = n[6], g = n[10];
            switch(t){
                case "XYZ":
                    this._y = Math.asin(S(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-h, g), this._z = Math.atan2(-a, o)) : (this._x = Math.atan2(d, l), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-S(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(s, g), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-m, o), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(S(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-m, g), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, o));
                    break;
                case "ZYX":
                    this._y = Math.asin(-S(m, -1, 1)), Math.abs(m) < .9999999 ? (this._x = Math.atan2(d, g), this._z = Math.atan2(c, o)) : (this._x = 0, this._z = Math.atan2(-a, l));
                    break;
                case "YZX":
                    this._z = Math.asin(S(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-m, o)) : (this._x = 0, this._y = Math.atan2(s, g));
                    break;
                case "XZY":
                    this._z = Math.asin(-S(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(s, o)) : (this._x = Math.atan2(-h, g), this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
            }
            return this._order = t, i === !0 && this._onChangeCallback(), this;
        }
        setFromQuaternion(e, t, i) {
            return At.makeRotationFromQuaternion(e), this.setFromRotationMatrix(At, t, i);
        }
        setFromVector3(e, t = this._order) {
            return this.set(e.x, e.y, e.z, t);
        }
        reorder(e) {
            return Tt.setFromEuler(this), this.setFromQuaternion(Tt, e);
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
    ce.DEFAULT_ORDER = "XYZ";
    class vn {
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
    let fn = 0;
    const Et = new w, ne = new he, B = new V, we = new w, ae = new w, pn = new w, xn = new he, Lt = new w(1, 0, 0), zt = new w(0, 1, 0), Rt = new w(0, 0, 1), Wt = {
        type: "added"
    }, yn = {
        type: "removed"
    }, oe = {
        type: "childadded",
        child: null
    }, ke = {
        type: "childremoved",
        child: null
    };
    class K extends pt {
        constructor(){
            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                value: fn++
            }), this.uuid = Te(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = K.DEFAULT_UP.clone();
            const e = new w, t = new ce, i = new he, n = new w(1, 1, 1);
            function o() {
                i.setFromEuler(t, !1);
            }
            function a() {
                t.setFromQuaternion(i, void 0, !1);
            }
            t._onChange(o), i._onChange(a), Object.defineProperties(this, {
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
                    value: n
                },
                modelViewMatrix: {
                    value: new V
                },
                normalMatrix: {
                    value: new ee
                }
            }), this.matrix = new V, this.matrixWorld = new V, this.matrixAutoUpdate = K.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = K.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new vn, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
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
            return ne.setFromAxisAngle(e, t), this.quaternion.multiply(ne), this;
        }
        rotateOnWorldAxis(e, t) {
            return ne.setFromAxisAngle(e, t), this.quaternion.premultiply(ne), this;
        }
        rotateX(e) {
            return this.rotateOnAxis(Lt, e);
        }
        rotateY(e) {
            return this.rotateOnAxis(zt, e);
        }
        rotateZ(e) {
            return this.rotateOnAxis(Rt, e);
        }
        translateOnAxis(e, t) {
            return Et.copy(e).applyQuaternion(this.quaternion), this.position.add(Et.multiplyScalar(t)), this;
        }
        translateX(e) {
            return this.translateOnAxis(Lt, e);
        }
        translateY(e) {
            return this.translateOnAxis(zt, e);
        }
        translateZ(e) {
            return this.translateOnAxis(Rt, e);
        }
        localToWorld(e) {
            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(e) {
            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(B.copy(this.matrixWorld).invert());
        }
        lookAt(e, t, i) {
            e.isVector3 ? we.copy(e) : we.set(e, t, i);
            const n = this.parent;
            this.updateWorldMatrix(!0, !1), ae.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? B.lookAt(ae, we, this.up) : B.lookAt(we, ae, this.up), this.quaternion.setFromRotationMatrix(B), n && (B.extractRotation(n.matrixWorld), ne.setFromRotationMatrix(B), this.quaternion.premultiply(ne.invert()));
        }
        add(e) {
            if (arguments.length > 1) {
                for(let t = 0; t < arguments.length; t++)this.add(arguments[t]);
                return this;
            }
            return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Wt), oe.child = e, this.dispatchEvent(oe), oe.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
        }
        remove(e) {
            if (arguments.length > 1) {
                for(let i = 0; i < arguments.length; i++)this.remove(arguments[i]);
                return this;
            }
            const t = this.children.indexOf(e);
            return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(yn), ke.child = e, this.dispatchEvent(ke), ke.child = null), this;
        }
        removeFromParent() {
            const e = this.parent;
            return e !== null && e.remove(this), this;
        }
        clear() {
            return this.remove(...this.children);
        }
        attach(e) {
            return this.updateWorldMatrix(!0, !1), B.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), B.multiply(e.parent.matrixWorld)), e.applyMatrix4(B), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Wt), oe.child = e, this.dispatchEvent(oe), oe.child = null, this;
        }
        getObjectById(e) {
            return this.getObjectByProperty("id", e);
        }
        getObjectByName(e) {
            return this.getObjectByProperty("name", e);
        }
        getObjectByProperty(e, t) {
            if (this[e] === t) return this;
            for(let i = 0, n = this.children.length; i < n; i++){
                const a = this.children[i].getObjectByProperty(e, t);
                if (a !== void 0) return a;
            }
        }
        getObjectsByProperty(e, t, i = []) {
            this[e] === t && i.push(this);
            const n = this.children;
            for(let o = 0, a = n.length; o < a; o++)n[o].getObjectsByProperty(e, t, i);
            return i;
        }
        getWorldPosition(e) {
            return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
        }
        getWorldQuaternion(e) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ae, e, pn), e;
        }
        getWorldScale(e) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ae, xn, e), e;
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
            for(let i = 0, n = t.length; i < n; i++)t[i].traverse(e);
        }
        traverseVisible(e) {
            if (this.visible === !1) return;
            e(this);
            const t = this.children;
            for(let i = 0, n = t.length; i < n; i++)t[i].traverseVisible(e);
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
            for(let i = 0, n = t.length; i < n; i++)t[i].updateMatrixWorld(e);
        }
        updateWorldMatrix(e, t) {
            const i = this.parent;
            if (e === !0 && i !== null && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
                const n = this.children;
                for(let o = 0, a = n.length; o < a; o++)n[o].updateWorldMatrix(!1, !0);
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
            const n = {};
            n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.castShadow === !0 && (n.castShadow = !0), this.receiveShadow === !0 && (n.receiveShadow = !0), this.visible === !1 && (n.visible = !1), this.frustumCulled === !1 && (n.frustumCulled = !1), this.renderOrder !== 0 && (n.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), n.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (n.matrixAutoUpdate = !1), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (n.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (n.type = "BatchedMesh", n.perObjectFrustumCulled = this.perObjectFrustumCulled, n.sortObjects = this.sortObjects, n.drawRanges = this._drawRanges, n.reservedRanges = this._reservedRanges, n.geometryInfo = this._geometryInfo.map((s)=>({
                    ...s,
                    boundingBox: s.boundingBox ? s.boundingBox.toJSON() : void 0,
                    boundingSphere: s.boundingSphere ? s.boundingSphere.toJSON() : void 0
                })), n.instanceInfo = this._instanceInfo.map((s)=>({
                    ...s
                })), n.availableInstanceIds = this._availableInstanceIds.slice(), n.availableGeometryIds = this._availableGeometryIds.slice(), n.nextIndexStart = this._nextIndexStart, n.nextVertexStart = this._nextVertexStart, n.geometryCount = this._geometryCount, n.maxInstanceCount = this._maxInstanceCount, n.maxVertexCount = this._maxVertexCount, n.maxIndexCount = this._maxIndexCount, n.geometryInitialized = this._geometryInitialized, n.matricesTexture = this._matricesTexture.toJSON(e), n.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (n.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (n.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (n.boundingBox = this.boundingBox.toJSON()));
            function o(s, c) {
                return s[c.uuid] === void 0 && (s[c.uuid] = c.toJSON(e)), c.uuid;
            }
            if (this.isScene) this.background && (this.background.isColor ? n.background = this.background.toJSON() : this.background.isTexture && (n.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (n.environment = this.environment.toJSON(e).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                n.geometry = o(e.geometries, this.geometry);
                const s = this.geometry.parameters;
                if (s !== void 0 && s.shapes !== void 0) {
                    const c = s.shapes;
                    if (Array.isArray(c)) for(let l = 0, h = c.length; l < h; l++){
                        const m = c[l];
                        o(e.shapes, m);
                    }
                    else o(e.shapes, c);
                }
            }
            if (this.isSkinnedMesh && (n.bindMode = this.bindMode, n.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (o(e.skeletons, this.skeleton), n.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
                const s = [];
                for(let c = 0, l = this.material.length; c < l; c++)s.push(o(e.materials, this.material[c]));
                n.material = s;
            } else n.material = o(e.materials, this.material);
            if (this.children.length > 0) {
                n.children = [];
                for(let s = 0; s < this.children.length; s++)n.children.push(this.children[s].toJSON(e).object);
            }
            if (this.animations.length > 0) {
                n.animations = [];
                for(let s = 0; s < this.animations.length; s++){
                    const c = this.animations[s];
                    n.animations.push(o(e.animations, c));
                }
            }
            if (t) {
                const s = a(e.geometries), c = a(e.materials), l = a(e.textures), h = a(e.images), m = a(e.shapes), d = a(e.skeletons), g = a(e.animations), u = a(e.nodes);
                s.length > 0 && (i.geometries = s), c.length > 0 && (i.materials = c), l.length > 0 && (i.textures = l), h.length > 0 && (i.images = h), m.length > 0 && (i.shapes = m), d.length > 0 && (i.skeletons = d), g.length > 0 && (i.animations = g), u.length > 0 && (i.nodes = u);
            }
            return i.object = n, i;
            function a(s) {
                const c = [];
                for(const l in s){
                    const h = s[l];
                    delete h.metadata, c.push(h);
                }
                return c;
            }
        }
        clone(e) {
            return new this.constructor().copy(this, e);
        }
        copy(e, t = !0) {
            if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for(let i = 0; i < e.children.length; i++){
                const n = e.children[i];
                this.add(n.clone());
            }
            return this;
        }
    }
    K.DEFAULT_UP = new w(0, 1, 0);
    K.DEFAULT_MATRIX_AUTO_UPDATE = !0;
    K.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
    const gi = {
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
    }, j = {
        h: 0,
        s: 0,
        l: 0
    }, Fe = {
        h: 0,
        s: 0,
        l: 0
    };
    function Ie(r, e, t) {
        return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
    }
    class Y {
        constructor(e, t, i){
            return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, i);
        }
        set(e, t, i) {
            if (t === void 0 && i === void 0) {
                const n = e;
                n && n.isColor ? this.copy(n) : typeof n == "number" ? this.setHex(n) : typeof n == "string" && this.setStyle(n);
            } else this.setRGB(e, t, i);
            return this;
        }
        setScalar(e) {
            return this.r = e, this.g = e, this.b = e, this;
        }
        setHex(e, t = E) {
            return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, O.colorSpaceToWorking(this, t), this;
        }
        setRGB(e, t, i, n = O.workingColorSpace) {
            return this.r = e, this.g = t, this.b = i, O.colorSpaceToWorking(this, n), this;
        }
        setHSL(e, t, i, n = O.workingColorSpace) {
            if (e = an(e, 1), t = S(t, 0, 1), i = S(i, 0, 1), t === 0) this.r = this.g = this.b = i;
            else {
                const o = i <= .5 ? i * (1 + t) : i + t - i * t, a = 2 * i - o;
                this.r = Ie(a, o, e + 1 / 3), this.g = Ie(a, o, e), this.b = Ie(a, o, e - 1 / 3);
            }
            return O.colorSpaceToWorking(this, n), this;
        }
        setStyle(e, t = E) {
            function i(o) {
                o !== void 0 && parseFloat(o) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
            }
            let n;
            if (n = /^(\w+)\(([^\)]*)\)/.exec(e)) {
                let o;
                const a = n[1], s = n[2];
                switch(a){
                    case "rgb":
                    case "rgba":
                        if (o = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return i(o[4]), this.setRGB(Math.min(255, parseInt(o[1], 10)) / 255, Math.min(255, parseInt(o[2], 10)) / 255, Math.min(255, parseInt(o[3], 10)) / 255, t);
                        if (o = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return i(o[4]), this.setRGB(Math.min(100, parseInt(o[1], 10)) / 100, Math.min(100, parseInt(o[2], 10)) / 100, Math.min(100, parseInt(o[3], 10)) / 100, t);
                        break;
                    case "hsl":
                    case "hsla":
                        if (o = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return i(o[4]), this.setHSL(parseFloat(o[1]) / 360, parseFloat(o[2]) / 100, parseFloat(o[3]) / 100, t);
                        break;
                    default:
                        console.warn("THREE.Color: Unknown color model " + e);
                }
            } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
                const o = n[1], a = o.length;
                if (a === 3) return this.setRGB(parseInt(o.charAt(0), 16) / 15, parseInt(o.charAt(1), 16) / 15, parseInt(o.charAt(2), 16) / 15, t);
                if (a === 6) return this.setHex(parseInt(o, 16), t);
                console.warn("THREE.Color: Invalid hex color " + e);
            } else if (e && e.length > 0) return this.setColorName(e, t);
            return this;
        }
        setColorName(e, t = E) {
            const i = gi[e.toLowerCase()];
            return i !== void 0 ? this.setHex(i, t) : console.warn("THREE.Color: Unknown color " + e), this;
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b);
        }
        copy(e) {
            return this.r = e.r, this.g = e.g, this.b = e.b, this;
        }
        copySRGBToLinear(e) {
            return this.r = U(e.r), this.g = U(e.g), this.b = U(e.b), this;
        }
        copyLinearToSRGB(e) {
            return this.r = se(e.r), this.g = se(e.g), this.b = se(e.b), this;
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
        }
        getHex(e = E) {
            return O.workingToColorSpace(T.copy(this), e), Math.round(S(T.r * 255, 0, 255)) * 65536 + Math.round(S(T.g * 255, 0, 255)) * 256 + Math.round(S(T.b * 255, 0, 255));
        }
        getHexString(e = E) {
            return ("000000" + this.getHex(e).toString(16)).slice(-6);
        }
        getHSL(e, t = O.workingColorSpace) {
            O.workingToColorSpace(T.copy(this), t);
            const i = T.r, n = T.g, o = T.b, a = Math.max(i, n, o), s = Math.min(i, n, o);
            let c, l;
            const h = (s + a) / 2;
            if (s === a) c = 0, l = 0;
            else {
                const m = a - s;
                switch(l = h <= .5 ? m / (a + s) : m / (2 - a - s), a){
                    case i:
                        c = (n - o) / m + (n < o ? 6 : 0);
                        break;
                    case n:
                        c = (o - i) / m + 2;
                        break;
                    case o:
                        c = (i - n) / m + 4;
                        break;
                }
                c /= 6;
            }
            return e.h = c, e.s = l, e.l = h, e;
        }
        getRGB(e, t = O.workingColorSpace) {
            return O.workingToColorSpace(T.copy(this), t), e.r = T.r, e.g = T.g, e.b = T.b, e;
        }
        getStyle(e = E) {
            O.workingToColorSpace(T.copy(this), e);
            const t = T.r, i = T.g, n = T.b;
            return e !== E ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(n * 255)})`;
        }
        offsetHSL(e, t, i) {
            return this.getHSL(j), this.setHSL(j.h + e, j.s + t, j.l + i);
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
            this.getHSL(j), e.getHSL(Fe);
            const i = ze(j.h, Fe.h, t), n = ze(j.s, Fe.s, t), o = ze(j.l, Fe.l, t);
            return this.setHSL(i, n, o), this;
        }
        setFromVector3(e) {
            return this.r = e.x, this.g = e.y, this.b = e.z, this;
        }
        applyMatrix3(e) {
            const t = this.r, i = this.g, n = this.b, o = e.elements;
            return this.r = o[0] * t + o[3] * i + o[6] * n, this.g = o[1] * t + o[4] * i + o[7] * n, this.b = o[2] * t + o[5] * i + o[8] * n, this;
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
    const T = new Y;
    Y.NAMES = gi;
    let Sn = 0;
    class Mn extends pt {
        constructor(){
            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                value: Sn++
            }), this.uuid = Te(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Y(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
                const n = this[t];
                if (n === void 0) {
                    console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
                    continue;
                }
                n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[t] = i;
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
            function n(o) {
                const a = [];
                for(const s in o){
                    const c = o[s];
                    delete c.metadata, a.push(c);
                }
                return a;
            }
            if (t) {
                const o = n(e.textures), a = n(e.images);
                o.length > 0 && (i.textures = o), a.length > 0 && (i.images = a);
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
                const n = t.length;
                i = new Array(n);
                for(let o = 0; o !== n; ++o)i[o] = t[o].clone();
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
    class R extends Mn {
        constructor(e){
            super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = {
                STANDARD: ""
            }, this.color = new Y(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Y(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new L(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ce, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
        }
        copy(e) {
            return super.copy(e), this.defines = {
                STANDARD: ""
            }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
        }
    }
    const Pe = {
        enabled: !1,
        files: {},
        add: function(r, e) {
            this.enabled !== !1 && (this.files[r] = e);
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
    class _n {
        constructor(e, t, i){
            const n = this;
            let o = !1, a = 0, s = 0, c;
            const l = [];
            this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this.abortController = new AbortController, this.itemStart = function(h) {
                s++, o === !1 && n.onStart !== void 0 && n.onStart(h, a, s), o = !0;
            }, this.itemEnd = function(h) {
                a++, n.onProgress !== void 0 && n.onProgress(h, a, s), a === s && (o = !1, n.onLoad !== void 0 && n.onLoad());
            }, this.itemError = function(h) {
                n.onError !== void 0 && n.onError(h);
            }, this.resolveURL = function(h) {
                return c ? c(h) : h;
            }, this.setURLModifier = function(h) {
                return c = h, this;
            }, this.addHandler = function(h, m) {
                return l.push(h, m), this;
            }, this.removeHandler = function(h) {
                const m = l.indexOf(h);
                return m !== -1 && l.splice(m, 2), this;
            }, this.getHandler = function(h) {
                for(let m = 0, d = l.length; m < d; m += 2){
                    const g = l[m], u = l[m + 1];
                    if (g.global && (g.lastIndex = 0), g.test(h)) return u;
                }
                return null;
            }, this.abort = function() {
                return this.abortController.abort(), this.abortController = new AbortController, this;
            };
        }
    }
    const bn = new _n;
    class xt {
        constructor(e){
            this.manager = e !== void 0 ? e : bn, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
        }
        load() {}
        loadAsync(e, t) {
            const i = this;
            return new Promise(function(n, o) {
                i.load(e, n, t, o);
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
    xt.DEFAULT_MATERIAL_NAME = "__DEFAULT";
    const re = new WeakMap;
    class wn extends xt {
        constructor(e){
            super(e);
        }
        load(e, t, i, n) {
            this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
            const o = this, a = Pe.get(`image:${e}`);
            if (a !== void 0) {
                if (a.complete === !0) o.manager.itemStart(e), setTimeout(function() {
                    t && t(a), o.manager.itemEnd(e);
                }, 0);
                else {
                    let m = re.get(a);
                    m === void 0 && (m = [], re.set(a, m)), m.push({
                        onLoad: t,
                        onError: n
                    });
                }
                return a;
            }
            const s = ut("img");
            function c() {
                h(), t && t(this);
                const m = re.get(this) || [];
                for(let d = 0; d < m.length; d++){
                    const g = m[d];
                    g.onLoad && g.onLoad(this);
                }
                re.delete(this), o.manager.itemEnd(e);
            }
            function l(m) {
                h(), n && n(m), Pe.remove(`image:${e}`);
                const d = re.get(this) || [];
                for(let g = 0; g < d.length; g++){
                    const u = d[g];
                    u.onError && u.onError(m);
                }
                re.delete(this), o.manager.itemError(e), o.manager.itemEnd(e);
            }
            function h() {
                s.removeEventListener("load", c, !1), s.removeEventListener("error", l, !1);
            }
            return s.addEventListener("load", c, !1), s.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (s.crossOrigin = this.crossOrigin), Pe.add(`image:${e}`, s), o.manager.itemStart(e), s.src = e, s;
        }
    }
    class W extends xt {
        constructor(e){
            super(e);
        }
        load(e, t, i, n) {
            const o = new q, a = new wn(this.manager);
            return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(s) {
                o.image = s, o.needsUpdate = !0, t !== void 0 && t(o);
            }, i, n), o;
        }
    }
    typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: "180"
        }
    }));
    typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "180");
    const Q = {
        ROUGHNESS: .85,
        METALNESS: 0
    }, Fn = .25, I = [
        "varying vec3 vVoxelAoWorldPosition;",
        "varying vec3 vVoxelAoWorldNormal;"
    ], P = [
        "vVoxelAoWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
        "vVoxelAoWorldNormal = normalize(mat3(modelMatrix) * normal);"
    ], Hn = [
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
    ], Cn = [
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
        return r ? Cn : Hn;
    }
    const C = "computeVoxelAo(vVoxelAoWorldPosition, vVoxelAoWorldNormal)";
    function F(r, e) {
        r.uniforms.voxelAoOccupancy = {
            value: e.texture
        }, r.uniforms.voxelAoOrigin = {
            value: e.origin
        }, r.uniforms.voxelAoSize = {
            value: e.size
        }, r.uniforms.voxelAoRadius = {
            value: Fn
        }, r.uniforms.voxelAoVoxelSize = {
            value: e.voxelSize
        };
    }
    function An(r, e, t = !1) {
        F(r, e), r.vertexShader = r.vertexShader.replace("#include <common>", [
            "#include <common>",
            ...I
        ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
            "#include <begin_vertex>",
            ...P
        ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
            "#include <common>",
            ...N(t)
        ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", `#include <color_fragment>
diffuseColor.rgb *= ${C};`);
    }
    function Tn(r, e, t) {
        r.onBeforeCompile = (i)=>{
            An(i, e, t);
        };
    }
    function En(r, e, t, i) {
        const n = new L(e.width, e.length), o = e.heightLevels;
        r.onBeforeCompile = (a)=>{
            F(a, t), a.uniforms.movementHighlightMap = {
                value: e.texture
            }, a.uniforms.movementHighlightSize = {
                value: n
            }, a.uniforms.movementHighlightHeightLevels = {
                value: o
            }, a.vertexShader = a.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...I,
                "uniform vec2 movementHighlightSize;",
                "attribute float tileHeight;",
                "attribute float highlightStrength;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), a.vertexShader = a.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...P,
                "vMovementHighlightHeight = tileHeight;",
                "vMovementHighlightStrength = highlightStrength;",
                "vMovementWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
                "vMovementWorldNormal = normalize(mat3(modelMatrix) * normal);"
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...N(i),
                "uniform highp sampler3D movementHighlightMap;",
                "uniform vec2 movementHighlightSize;",
                "uniform float movementHighlightHeightLevels;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <color_fragment>", `#include <color_fragment>
diffuseColor.rgb *= ${C};`), a.fragmentShader = a.fragmentShader.replace("#include <dithering_fragment>", [
                "vec3 movementOwnerPosition = vMovementWorldPosition - vMovementWorldNormal * 0.002;",
                "vec2 movementTileCoord = clamp(",
                "	floor(movementOwnerPosition.xz + movementHighlightSize * 0.5),",
                "	vec2(0.0),",
                "	movementHighlightSize - vec2(1.0)",
                ");",
                "float movementTileHeight = clamp(vMovementHighlightHeight, 0.0, movementHighlightHeightLevels - 1.0);",
                "vec3 movementHighlightUvw = vec3(",
                "	(movementTileCoord.x + 0.5) / movementHighlightSize.x,",
                "	(movementTileHeight + 0.5) / movementHighlightHeightLevels,",
                "	(movementTileCoord.y + 0.5) / movementHighlightSize.y",
                ");",
                "vec4 movementHighlight = texture(movementHighlightMap, movementHighlightUvw);",
                "if (movementHighlight.a > 0.0 && vMovementHighlightStrength > 0.0) {",
                "	vec3 baseColor = gl_FragColor.rgb;",
                "	float baseLuma = dot(baseColor, vec3(0.2126, 0.7152, 0.0722));",
                "	vec2 tileLocal = fract(movementOwnerPosition.xz + movementHighlightSize * 0.5);",
                "	float edgeDistance = min(min(tileLocal.x, 1.0 - tileLocal.x), min(tileLocal.y, 1.0 - tileLocal.y));",
                "	float edgeBand = 1.0 - smoothstep(0.025, 0.11, edgeDistance);",
                "	float markAlpha = clamp(movementHighlight.a * (1.35 + edgeBand * 0.75) * vMovementHighlightStrength, 0.0, 0.92);",
                "	vec3 screened = 1.0 - (1.0 - baseColor) * (1.0 - movementHighlight.rgb * 0.85);",
                "	vec3 marked = mix(baseColor, screened, markAlpha);",
                "	marked = max(marked, movementHighlight.rgb * movementHighlight.a * (0.65 + 0.55 * vMovementHighlightStrength));",
                "	vec3 contrastEdge = mix(vec3(1.0), vec3(0.035), step(0.58, baseLuma));",
                "	vec3 edgeColor = mix(movementHighlight.rgb, contrastEdge, 0.45);",
                "	gl_FragColor.rgb = mix(marked, edgeColor, edgeBand * movementHighlight.a * 0.7 * vMovementHighlightStrength);",
                "}",
                "#include <dithering_fragment>"
            ].join(`
`));
        };
    }
    const Ln = (r)=>{
        const { acceptsMovementHighlight: e, movementHighlight: t, voxelAo: i, performanceMode: n = !1 } = r, o = new R({
            roughness: Q.ROUGHNESS,
            metalness: Q.METALNESS,
            vertexColors: !0
        });
        return e && t ? En(o, t, i, n) : Tn(o, i, n), {
            material: o,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Ce = {
        bucketKey: "default",
        occlusionGroup: "solid",
        shaderVersion: 2,
        factory: Ln
    }, zn = "/materials/flesh_250/flesh_noise_64x64.png", Rn = "#cc2244", Wn = .45, Nn = .7, On = 0, kn = .4, Nt = .5, In = .25, Pn = 1.2;
    let Be = null;
    function Bn() {
        if (!Be) {
            const r = new W().load(zn);
            r.colorSpace = dt, r.wrapS = 1e3, r.wrapT = 1e3, r.magFilter = 1006, r.minFilter = 1006, r.generateMipmaps = !1, Be = r;
        }
        return Be;
    }
    const Dn = [
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
        `        q = u * frequency + t * ${kn.toFixed(4)}`,
        `          + fleshAperiodicSin(t * ${Nt.toFixed(4)} - centeredDot * 1.2) * 0.4 * ${Nt.toFixed(4)}`,
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
    function di() {
        return [
            ...I,
            "varying vec3 vFleshWorldPosition;",
            "varying vec3 vFleshWorldNormal;",
            "uniform float uFleshTime;"
        ];
    }
    function ui() {
        return [
            ...P,
            "vFleshWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            "vFleshWorldNormal = normalize(mat3(modelMatrix) * normal);"
        ];
    }
    function vi(r) {
        return [
            ...N(r),
            "varying vec3 vFleshWorldPosition;",
            "varying vec3 vFleshWorldNormal;",
            "uniform float uFleshTime;",
            "uniform sampler2D uFleshNoise;",
            "vec2 getFleshUv(vec3 worldPos, vec3 worldNormal) {",
            "    vec3 n = abs(normalize(worldNormal));",
            "    if (n.y >= n.x && n.y >= n.z) return worldPos.xz;",
            "    if (n.x >= n.z) return worldPos.zy;",
            "    return worldPos.xy;",
            "}",
            Dn
        ];
    }
    function fi(r) {
        return [
            "#include <color_fragment>",
            `vec2 fleshUvWorld = getFleshUv(vFleshWorldPosition, vFleshWorldNormal) * ${Wn.toFixed(4)};`,
            `float fleshOriginalNoise = fleshFBM(fleshUvWorld, uFleshTime, ${r ? "false" : "true"});`,
            "float fleshNoise = clamp(fleshOriginalNoise, 0.0, 1.0);",
            `float fleshFluidNoiseAngle = fleshOriginalNoise * 13.05 + uFleshTime * ${In.toFixed(4)};`,
            "vec2 fleshFluidOffset = vec2(",
            "    cos(fleshFluidNoiseAngle) + fleshOriginalNoise * 14.0,",
            `    sin(fleshFluidNoiseAngle) + uFleshTime * ${Pn.toFixed(4)}`,
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
            `fleshBaseColor *= ${C};`,
            "diffuseColor = vec4(clamp(fleshBaseColor, 0.0, 1.0), 1.0);"
        ];
    }
    const Ot = [
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
`), Un = [
        "vec3 fleshMovOwner = vMovementWorldPosition - vMovementWorldNormal * 0.002;",
        "vec2 fleshMovTile = clamp(",
        "    floor(fleshMovOwner.xz + movementHighlightSize * 0.5),",
        "    vec2(0.0),",
        "    movementHighlightSize - vec2(1.0)",
        ");",
        "float fleshMovTileH = clamp(vMovementHighlightHeight, 0.0, movementHighlightHeightLevels - 1.0);",
        "vec3 fleshMovUvw = vec3(",
        "    (fleshMovTile.x + 0.5) / movementHighlightSize.x,",
        "    (fleshMovTileH + 0.5) / movementHighlightHeightLevels,",
        "    (fleshMovTile.y + 0.5) / movementHighlightSize.y",
        ");",
        "vec4 fleshMovHL = texture(movementHighlightMap, fleshMovUvw);",
        "if (fleshMovHL.a > 0.0 && vMovementHighlightStrength > 0.0) {",
        "    vec3 fBase = gl_FragColor.rgb;",
        "    float fLuma = dot(fBase, vec3(0.2126, 0.7152, 0.0722));",
        "    vec2 fTileLoc = fract(fleshMovOwner.xz + movementHighlightSize * 0.5);",
        "    float fEdgeDist = min(min(fTileLoc.x, 1.0 - fTileLoc.x), min(fTileLoc.y, 1.0 - fTileLoc.y));",
        "    float fEdgeBand = 1.0 - smoothstep(0.025, 0.11, fEdgeDist);",
        "    float fMark = clamp(fleshMovHL.a * (1.35 + fEdgeBand * 0.75) * vMovementHighlightStrength, 0.0, 0.92);",
        "    vec3 fScreen = 1.0 - (1.0 - fBase) * (1.0 - fleshMovHL.rgb * 0.85);",
        "    vec3 fMarked = mix(fBase, fScreen, fMark);",
        "    fMarked = max(fMarked, fleshMovHL.rgb * fleshMovHL.a * (0.65 + 0.55 * vMovementHighlightStrength));",
        "    vec3 fContrast = mix(vec3(1.0), vec3(0.035), step(0.58, fLuma));",
        "    vec3 fEdgeCol = mix(fleshMovHL.rgb, fContrast, 0.45);",
        "    gl_FragColor.rgb = mix(fMarked, fEdgeCol, fEdgeBand * fleshMovHL.a * 0.7 * vMovementHighlightStrength);",
        "}",
        "#include <dithering_fragment>"
    ].join(`
`);
    function pi(r) {
        return r ? Ot + `
` + Un : Ot + `
#include <dithering_fragment>`;
    }
    function Vn(r, e, t, i, n) {
        r.onBeforeCompile = (o)=>{
            F(o, i), o.uniforms.uFleshTime = t, o.uniforms.uFleshNoise = {
                value: e
            }, o.vertexShader = o.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...di()
            ].join(`
`)), o.vertexShader = o.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...ui()
            ].join(`
`)), o.fragmentShader = o.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...vi(n)
            ].join(`
`)), o.fragmentShader = o.fragmentShader.replace("#include <color_fragment>", fi(n).join(`
`)), o.fragmentShader = o.fragmentShader.replace("#include <dithering_fragment>", pi(!1));
        };
    }
    function Gn(r, e, t, i, n, o) {
        const a = new L(i.width, i.length), s = i.heightLevels;
        r.onBeforeCompile = (c)=>{
            F(c, n), c.uniforms.uFleshTime = t, c.uniforms.uFleshNoise = {
                value: e
            }, c.uniforms.movementHighlightMap = {
                value: i.texture
            }, c.uniforms.movementHighlightSize = {
                value: a
            }, c.uniforms.movementHighlightHeightLevels = {
                value: s
            }, c.vertexShader = c.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...di(),
                "uniform vec2 movementHighlightSize;",
                "attribute float tileHeight;",
                "attribute float highlightStrength;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), c.vertexShader = c.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...ui(),
                "vMovementHighlightHeight = tileHeight;",
                "vMovementHighlightStrength = highlightStrength;",
                "vMovementWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
                "vMovementWorldNormal = normalize(mat3(modelMatrix) * normal);"
            ].join(`
`)), c.fragmentShader = c.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...vi(o),
                "uniform highp sampler3D movementHighlightMap;",
                "uniform vec2 movementHighlightSize;",
                "uniform float movementHighlightHeightLevels;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), c.fragmentShader = c.fragmentShader.replace("#include <color_fragment>", fi(o).join(`
`)), c.fragmentShader = c.fragmentShader.replace("#include <dithering_fragment>", pi(!0));
        };
    }
    const $n = (r)=>{
        const { acceptsMovementHighlight: e, movementHighlight: t, voxelAo: i, performanceMode: n = !1 } = r, o = Bn(), a = {
            value: 0
        }, s = new R({
            roughness: Nn,
            metalness: On,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return e && t ? Gn(s, o, a, t, i, n) : Vn(s, o, a, i, n), {
            material: s,
            onAnimationFrame: (l)=>{
                a.value = l * .001;
            },
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, jn = {
        bucketKey: "flesh_250",
        occlusionGroup: "flesh_250",
        shaderVersion: 3,
        geometry: {
            vertexColors: !1
        },
        factory: $n,
        special: {
            paletteIndex: 250,
            label: "Flesh",
            swatchColor: Rn
        }
    }, xi = "#cfd4dc", qn = (r)=>({
            material: new R({
                color: xi,
                transparent: !0,
                opacity: 0,
                depthWrite: !1,
                vertexColors: !1
            }),
            castShadow: !1,
            receiveShadow: !1
        }), Yn = {
        bucketKey: "fog_251",
        occlusionGroup: "fog_251",
        shaderVersion: 1,
        passable: !0,
        volumetric: !0,
        factory: qn,
        special: {
            paletteIndex: 251,
            label: "Fog",
            swatchColor: xi
        }
    }, Xn = "#a8d8f0", Zn = "#cce8ff", Jn = .05, Kn = 0, Qn = .22, eo = (r)=>({
            material: new R({
                color: Zn,
                roughness: Jn,
                metalness: Kn,
                vertexColors: !1,
                transparent: !0,
                opacity: Qn,
                depthWrite: !1
            }),
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 2
        }), to = {
        bucketKey: "glass_246",
        occlusionGroup: "glass_246",
        shaderVersion: 1,
        geometry: {
            vertexColors: !1
        },
        factory: eo,
        special: {
            paletteIndex: 246,
            label: "Glass",
            swatchColor: Xn,
            category: "buildings"
        }
    }, yi = "#CFB53B", De = .6, Ue = [
        .9,
        .72,
        .12
    ], Ve = [
        .6,
        .32,
        .04
    ], io = .5, no = 0, oo = "#aa4400", ro = .25, so = [
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
    function Si() {
        return [
            ...I,
            "varying vec3 vGoldWorldPosition;",
            "varying vec3 vGoldWorldNormal;"
        ];
    }
    function Mi() {
        return [
            "vGoldWorldNormal = normalize(mat3(modelMatrix) * normal);",
            "vGoldWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            ...P
        ];
    }
    function _i(r) {
        return [
            ...N(r),
            "varying vec3 vGoldWorldPosition;",
            "varying vec3 vGoldWorldNormal;",
            so,
            `const vec3 G_COL1 = vec3(${Ue[0].toFixed(3)}, ${Ue[1].toFixed(3)}, ${Ue[2].toFixed(3)});`,
            `const vec3 G_COL2 = vec3(${Ve[0].toFixed(3)}, ${Ve[1].toFixed(3)}, ${Ve[2].toFixed(3)});`
        ];
    }
    function bi(r) {
        const e = [
            "vec3 gNrm = normalize(vGoldWorldNormal);",
            "bool gIsBottom = gNrm.y < -0.5;",
            "vec2 gUv = vec2(0.0);",
            "if (!gIsBottom) {",
            "	if (abs(gNrm.x) > abs(gNrm.z) && abs(gNrm.x) > abs(gNrm.y)) {",
            `		gUv = vGoldWorldPosition.zy * ${De.toFixed(3)};`,
            "	} else if (abs(gNrm.z) > abs(gNrm.y)) {",
            `		gUv = vGoldWorldPosition.xy * ${De.toFixed(3)};`,
            "	} else {",
            `		gUv = vGoldWorldPosition.xz * ${De.toFixed(3)};`,
            "	}",
            "}"
        ], i = [
            "	vec2 gQ = vec2(0.0), gR = vec2(0.0);",
            `	${r ? "float gF = goldPatternLow(gUv, gQ, gR);" : "float gF = goldPattern(gUv, gQ, gR);"}`,
            "	vec3 gC = mix(G_COL1, vec3(0.0), pow(smoothstep(0., 0.9, gF), 2.));",
            "	gC += G_COL2 * pow(smoothstep(0., 0.8, dot(gQ, gR)*0.6), 3.) * 1.5;",
            "	gC *= pow(dot(gQ, gR) + 0.3, 3.);",
            "	gC *= gF * 1.5;",
            `	gC *= ${C};`,
            "	diffuseColor = vec4(gC, 1.0);"
        ];
        return [
            ...e,
            "if (gIsBottom) {",
            `	diffuseColor = vec4(G_COL2 * 0.3 * ${C}, 1.0);`,
            "} else {",
            ...i,
            "}"
        ];
    }
    const ao = [
        "vec3 movementOwnerPosition = vMovementWorldPosition - vMovementWorldNormal * 0.002;",
        "vec2 movementTileCoord = clamp(",
        "	floor(movementOwnerPosition.xz + movementHighlightSize * 0.5),",
        "	vec2(0.0),",
        "	movementHighlightSize - vec2(1.0)",
        ");",
        "float movementTileHeight = clamp(vMovementHighlightHeight, 0.0, movementHighlightHeightLevels - 1.0);",
        "vec3 movementHighlightUvw = vec3(",
        "	(movementTileCoord.x + 0.5) / movementHighlightSize.x,",
        "	(movementTileHeight + 0.5) / movementHighlightHeightLevels,",
        "	(movementTileCoord.y + 0.5) / movementHighlightSize.y",
        ");",
        "vec4 movementHighlight = texture(movementHighlightMap, movementHighlightUvw);",
        "if (movementHighlight.a > 0.0 && vMovementHighlightStrength > 0.0) {",
        "	vec3 baseColor = gl_FragColor.rgb;",
        "	float baseLuma = dot(baseColor, vec3(0.2126, 0.7152, 0.0722));",
        "	vec2 tileLocal = fract(movementOwnerPosition.xz + movementHighlightSize * 0.5);",
        "	float edgeDistance = min(min(tileLocal.x, 1.0 - tileLocal.x), min(tileLocal.y, 1.0 - tileLocal.y));",
        "	float edgeBand = 1.0 - smoothstep(0.025, 0.11, edgeDistance);",
        "	float markAlpha = clamp(movementHighlight.a * (1.35 + edgeBand * 0.75) * vMovementHighlightStrength, 0.0, 0.92);",
        "	vec3 screened = 1.0 - (1.0 - baseColor) * (1.0 - movementHighlight.rgb * 0.85);",
        "	vec3 marked = mix(baseColor, screened, markAlpha);",
        "	marked = max(marked, movementHighlight.rgb * movementHighlight.a * (0.65 + 0.55 * vMovementHighlightStrength));",
        "	vec3 contrastEdge = mix(vec3(1.0), vec3(0.035), step(0.58, baseLuma));",
        "	vec3 edgeColor = mix(movementHighlight.rgb, contrastEdge, 0.45);",
        "	gl_FragColor.rgb = mix(marked, edgeColor, edgeBand * movementHighlight.a * 0.7 * vMovementHighlightStrength);",
        "}",
        "#include <dithering_fragment>"
    ].join(`
`);
    function lo(r, e, t) {
        r.onBeforeCompile = (i)=>{
            F(i, e), i.vertexShader = i.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Si()
            ].join(`
`)), i.vertexShader = i.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Mi()
            ].join(`
`)), i.fragmentShader = i.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ..._i(t)
            ].join(`
`)), i.fragmentShader = i.fragmentShader.replace("#include <color_fragment>", bi(t).join(`
`));
        };
    }
    function ho(r, e, t, i) {
        const n = new L(e.width, e.length), o = e.heightLevels;
        r.onBeforeCompile = (a)=>{
            F(a, t), a.uniforms.movementHighlightMap = {
                value: e.texture
            }, a.uniforms.movementHighlightSize = {
                value: n
            }, a.uniforms.movementHighlightHeightLevels = {
                value: o
            }, a.vertexShader = a.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Si(),
                "uniform vec2 movementHighlightSize;",
                "attribute float tileHeight;",
                "attribute float highlightStrength;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), a.vertexShader = a.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Mi(),
                "vMovementHighlightHeight = tileHeight;",
                "vMovementHighlightStrength = highlightStrength;",
                "vMovementWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
                "vMovementWorldNormal = normalize(mat3(modelMatrix) * normal);"
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ..._i(i),
                "uniform highp sampler3D movementHighlightMap;",
                "uniform vec2 movementHighlightSize;",
                "uniform float movementHighlightHeightLevels;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <color_fragment>", bi(i).join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <dithering_fragment>", ao);
        };
    }
    const co = (r)=>{
        const { acceptsMovementHighlight: e, movementHighlight: t, voxelAo: i, performanceMode: n = !1 } = r, o = new R({
            color: yi,
            emissive: new Y(oo),
            emissiveIntensity: ro,
            roughness: io,
            metalness: no,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return e && t ? ho(o, t, i, n) : lo(o, i, n), {
            material: o,
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, mo = {
        bucketKey: "gold_247",
        occlusionGroup: "solid",
        shaderVersion: 2,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !1,
            deformSurface: !1
        },
        factory: co,
        special: {
            paletteIndex: 247,
            label: "Gold",
            swatchColor: yi,
            category: "metals"
        }
    }, kt = "/materials/grass_242/grass_02_base_1k.png", go = "/materials/grass_242/grass_02_normal_gl_1k.png", uo = "/materials/grass_242/grass_02_roughness_1k.png", vo = "/materials/grass_242/grass_02_amibent_occlusion_1k.png", fo = "#4f8f37", yt = .75, po = 1.45, xo = .45, It = .86, vt = 1, yo = 8, So = 1;
    let Ge = null, $e = null, je = null, qe = null, Ye = null;
    function le(r, e = !1) {
        return r.wrapS = 1e3, r.wrapT = 1e3, r.magFilter = 1006, r.minFilter = e ? 1006 : 1008, r.anisotropy = e ? So : yo, r.generateMipmaps = !e, r;
    }
    function Mo(r) {
        if (r) {
            if (!$e) {
                const t = le(new W().load(kt), !0);
                t.colorSpace = E, $e = t;
            }
            return $e;
        }
        if (Ge) return Ge;
        const e = le(new W().load(kt), !1);
        return e.colorSpace = E, Ge = e, e;
    }
    function _o() {
        if (je) return je;
        const r = le(new W().load(go), !1);
        return je = r, r;
    }
    function bo() {
        if (qe) return qe;
        const r = le(new W().load(uo), !1);
        return qe = r, r;
    }
    function wo() {
        if (Ye) return Ye;
        const r = le(new W().load(vo), !1);
        return Ye = r, r;
    }
    function wi() {
        return [
            ...I,
            "varying vec3 vGrassWorldPosition;",
            "varying vec3 vGrassWorldNormal;"
        ];
    }
    function Fi() {
        return [
            ...P,
            "vGrassWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            "vGrassWorldNormal = normalize(mat3(modelMatrix) * normal);"
        ];
    }
    function Hi(r) {
        const e = [
            ...N(!1),
            "varying vec3 vGrassWorldPosition;",
            "varying vec3 vGrassWorldNormal;",
            "uniform sampler2D grassMap;"
        ];
        return r ? [
            ...N(!0),
            "varying vec3 vGrassWorldPosition;",
            "varying vec3 vGrassWorldNormal;",
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
    function Ci(r) {
        const e = [
            "#include <color_fragment>",
            `vec2 grassUv = getGrassUv(vGrassWorldPosition, vGrassWorldNormal) * ${yt.toFixed(2)};`,
            "vec4 grassTexel = texture2D(grassMap, grassUv);",
            "diffuseColor.rgb *= grassTexel.rgb;",
            "diffuseColor.a *= grassTexel.a;",
            `diffuseColor.rgb *= ${C};`
        ];
        return r || e.splice(3, 0, "float grassMicroAo = mix(1.0, texture2D(grassAoMap, grassUv).r, " + xo.toFixed(2) + ");", "diffuseColor.rgb *= grassMicroAo;"), e;
    }
    function Ai() {
        return [
            "#include <roughnessmap_fragment>",
            `vec2 grassRoughnessUv = getGrassUv(vGrassWorldPosition, vGrassWorldNormal) * ${yt.toFixed(2)};`,
            "float grassRoughnessSample = texture2D(grassRoughnessMap, grassRoughnessUv).g;",
            `roughnessFactor = clamp(mix(${It.toFixed(2)}, ${vt.toFixed(2)}, grassRoughnessSample), ${It.toFixed(2)}, ${vt.toFixed(2)});`
        ];
    }
    function Ti() {
        return [
            `vec2 grassNormalUv = getGrassUv(vGrassWorldPosition, vGrassWorldNormal) * ${yt.toFixed(2)};`,
            "vec3 grassMapNormal = texture2D(grassNormalMap, grassNormalUv).xyz * 2.0 - 1.0;",
            `grassMapNormal.xy *= ${po.toFixed(2)};`,
            "normal = normalize(grassGetTangentFrame(-vViewPosition, normal, grassNormalUv) * normalize(grassMapNormal));"
        ];
    }
    function Fo(r, e, t, i, n, o, a) {
        r.onBeforeCompile = (s)=>{
            F(s, o), s.uniforms.grassMap = {
                value: e
            }, !a && t && i && n && (s.uniforms.grassNormalMap = {
                value: t
            }, s.uniforms.grassRoughnessMap = {
                value: i
            }, s.uniforms.grassAoMap = {
                value: n
            }), s.vertexShader = s.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...wi()
            ].join(`
`)), s.vertexShader = s.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Fi()
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Hi(a)
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <color_fragment>", Ci(a).join(`
`)), a || (s.fragmentShader = s.fragmentShader.replace("#include <roughnessmap_fragment>", Ai().join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <normal_fragment_maps>", Ti().join(`
`)));
        };
    }
    function Ho(r, e, t, i, n, o, a, s) {
        const c = new L(o.width, o.length), l = o.heightLevels;
        r.onBeforeCompile = (h)=>{
            F(h, a), h.uniforms.grassMap = {
                value: e
            }, !s && t && i && n && (h.uniforms.grassNormalMap = {
                value: t
            }, h.uniforms.grassRoughnessMap = {
                value: i
            }, h.uniforms.grassAoMap = {
                value: n
            }), h.uniforms.movementHighlightMap = {
                value: o.texture
            }, h.uniforms.movementHighlightSize = {
                value: c
            }, h.uniforms.movementHighlightHeightLevels = {
                value: l
            }, h.vertexShader = h.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...wi(),
                "uniform vec2 movementHighlightSize;",
                "attribute float tileHeight;",
                "attribute float highlightStrength;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), h.vertexShader = h.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Fi(),
                "vMovementHighlightHeight = tileHeight;",
                "vMovementHighlightStrength = highlightStrength;",
                "vMovementWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
                "vMovementWorldNormal = normalize(mat3(modelMatrix) * normal);"
            ].join(`
`)), h.fragmentShader = h.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Hi(s),
                "uniform highp sampler3D movementHighlightMap;",
                "uniform vec2 movementHighlightSize;",
                "uniform float movementHighlightHeightLevels;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), h.fragmentShader = h.fragmentShader.replace("#include <color_fragment>", Ci(s).join(`
`)), s || (h.fragmentShader = h.fragmentShader.replace("#include <roughnessmap_fragment>", Ai().join(`
`)), h.fragmentShader = h.fragmentShader.replace("#include <normal_fragment_maps>", Ti().join(`
`))), h.fragmentShader = h.fragmentShader.replace("#include <dithering_fragment>", [
                "vec3 movementOwnerPosition = vMovementWorldPosition - vMovementWorldNormal * 0.002;",
                "vec2 movementTileCoord = clamp(",
                "	floor(movementOwnerPosition.xz + movementHighlightSize * 0.5),",
                "	vec2(0.0),",
                "	movementHighlightSize - vec2(1.0)",
                ");",
                "float movementTileHeight = clamp(vMovementHighlightHeight, 0.0, movementHighlightHeightLevels - 1.0);",
                "vec3 movementHighlightUvw = vec3(",
                "	(movementTileCoord.x + 0.5) / movementHighlightSize.x,",
                "	(movementTileHeight + 0.5) / movementHighlightHeightLevels,",
                "	(movementTileCoord.y + 0.5) / movementHighlightSize.y",
                ");",
                "vec4 movementHighlight = texture(movementHighlightMap, movementHighlightUvw);",
                "if (movementHighlight.a > 0.0 && vMovementHighlightStrength > 0.0) {",
                "	vec3 baseColor = gl_FragColor.rgb;",
                "	float baseLuma = dot(baseColor, vec3(0.2126, 0.7152, 0.0722));",
                "	vec2 tileLocal = fract(movementOwnerPosition.xz + movementHighlightSize * 0.5);",
                "	float edgeDistance = min(min(tileLocal.x, 1.0 - tileLocal.x), min(tileLocal.y, 1.0 - tileLocal.y));",
                "	float edgeBand = 1.0 - smoothstep(0.025, 0.11, edgeDistance);",
                "	float markAlpha = clamp(movementHighlight.a * (1.35 + edgeBand * 0.75) * vMovementHighlightStrength, 0.0, 0.92);",
                "	vec3 screened = 1.0 - (1.0 - baseColor) * (1.0 - movementHighlight.rgb * 0.85);",
                "	vec3 marked = mix(baseColor, screened, markAlpha);",
                "	marked = max(marked, movementHighlight.rgb * movementHighlight.a * (0.65 + 0.55 * vMovementHighlightStrength));",
                "	vec3 contrastEdge = mix(vec3(1.0), vec3(0.035), step(0.58, baseLuma));",
                "	vec3 edgeColor = mix(movementHighlight.rgb, contrastEdge, 0.45);",
                "	gl_FragColor.rgb = mix(marked, edgeColor, edgeBand * movementHighlight.a * 0.7 * vMovementHighlightStrength);",
                "}",
                "#include <dithering_fragment>"
            ].join(`
`));
        };
    }
    const Co = (r)=>{
        const { acceptsMovementHighlight: e, movementHighlight: t, voxelAo: i, performanceMode: n = !1 } = r, o = Mo(n), a = n ? null : _o(), s = n ? null : bo(), c = n ? null : wo(), l = new R({
            roughness: vt,
            metalness: Q.METALNESS,
            vertexColors: !1
        });
        return e && t ? Ho(l, o, a, s, c, t, i, n) : Fo(l, o, a, s, c, i, n), {
            material: l,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Ao = {
        bucketKey: "grass_242",
        occlusionGroup: "solid",
        shaderVersion: 3,
        geometry: {
            vertexColors: !1
        },
        factory: Co,
        special: {
            paletteIndex: 242,
            label: "Grass",
            swatchColor: fo,
            category: "nature"
        }
    }, Pt = "/materials/iron_bars_249/iron_bars_256x256.png", To = "#6b6b6b", Eo = 1, Lo = 8, zo = 1, Ro = .55, Wo = .45, No = .5;
    let Xe = null, Ze = null;
    function Bt(r, e) {
        return r.colorSpace = E, r.wrapS = 1e3, r.wrapT = 1e3, r.magFilter = 1006, r.minFilter = e ? 1006 : 1008, r.anisotropy = e ? zo : Lo, r.generateMipmaps = !e, r;
    }
    function Oo(r) {
        return r ? (Ze || (Ze = Bt(new W().load(Pt), !0)), Ze) : (Xe || (Xe = Bt(new W().load(Pt), !1)), Xe);
    }
    function Ei() {
        return [
            ...I,
            "varying vec3 vIronBarsWorldPosition;",
            "varying vec3 vIronBarsWorldNormal;"
        ];
    }
    function Li() {
        return [
            ...P,
            "vIronBarsWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            "vIronBarsWorldNormal = normalize(mat3(modelMatrix) * normal);"
        ];
    }
    function zi(r) {
        return [
            ...N(r),
            "varying vec3 vIronBarsWorldPosition;",
            "varying vec3 vIronBarsWorldNormal;",
            "uniform sampler2D ironBarsMap;",
            "vec2 getIronBarsUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function Ri() {
        return [
            "#include <color_fragment>",
            `vec2 ironBarsUv = getIronBarsUv(vIronBarsWorldPosition, vIronBarsWorldNormal) * ${Eo.toFixed(1)};`,
            "vec4 ironBarsTexel = texture2D(ironBarsMap, ironBarsUv);",
            "diffuseColor.rgb *= ironBarsTexel.rgb;",
            "diffuseColor.a *= ironBarsTexel.a;",
            `diffuseColor.rgb *= ${C};`
        ];
    }
    function ko(r, e, t, i) {
        r.onBeforeCompile = (n)=>{
            F(n, t), n.uniforms.ironBarsMap = {
                value: e
            }, n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Ei()
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Li()
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...zi(i)
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", Ri().join(`
`));
        };
    }
    function Io(r, e, t, i, n) {
        const o = new L(t.width, t.length), a = t.heightLevels;
        r.onBeforeCompile = (s)=>{
            F(s, i), s.uniforms.ironBarsMap = {
                value: e
            }, s.uniforms.movementHighlightMap = {
                value: t.texture
            }, s.uniforms.movementHighlightSize = {
                value: o
            }, s.uniforms.movementHighlightHeightLevels = {
                value: a
            }, s.vertexShader = s.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Ei(),
                "uniform vec2 movementHighlightSize;",
                "attribute float tileHeight;",
                "attribute float highlightStrength;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), s.vertexShader = s.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Li(),
                "vMovementHighlightHeight = tileHeight;",
                "vMovementHighlightStrength = highlightStrength;",
                "vMovementWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
                "vMovementWorldNormal = normalize(mat3(modelMatrix) * normal);"
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...zi(n),
                "uniform highp sampler3D movementHighlightMap;",
                "uniform vec2 movementHighlightSize;",
                "uniform float movementHighlightHeightLevels;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <color_fragment>", Ri().join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <dithering_fragment>", [
                "vec3 movementOwnerPosition = vMovementWorldPosition - vMovementWorldNormal * 0.002;",
                "vec2 movementTileCoord = clamp(",
                "	floor(movementOwnerPosition.xz + movementHighlightSize * 0.5),",
                "	vec2(0.0),",
                "	movementHighlightSize - vec2(1.0)",
                ");",
                "float movementTileHeight = clamp(vMovementHighlightHeight, 0.0, movementHighlightHeightLevels - 1.0);",
                "vec3 movementHighlightUvw = vec3(",
                "	(movementTileCoord.x + 0.5) / movementHighlightSize.x,",
                "	(movementTileHeight + 0.5) / movementHighlightHeightLevels,",
                "	(movementTileCoord.y + 0.5) / movementHighlightSize.y",
                ");",
                "vec4 movementHighlight = texture(movementHighlightMap, movementHighlightUvw);",
                "if (movementHighlight.a > 0.0 && vMovementHighlightStrength > 0.0) {",
                "	vec3 baseColor = gl_FragColor.rgb;",
                "	float baseLuma = dot(baseColor, vec3(0.2126, 0.7152, 0.0722));",
                "	vec2 tileLocal = fract(movementOwnerPosition.xz + movementHighlightSize * 0.5);",
                "	float edgeDistance = min(min(tileLocal.x, 1.0 - tileLocal.x), min(tileLocal.y, 1.0 - tileLocal.y));",
                "	float edgeBand = 1.0 - smoothstep(0.025, 0.11, edgeDistance);",
                "	float markAlpha = clamp(movementHighlight.a * (1.35 + edgeBand * 0.75) * vMovementHighlightStrength, 0.0, 0.92);",
                "	vec3 screened = 1.0 - (1.0 - baseColor) * (1.0 - movementHighlight.rgb * 0.85);",
                "	vec3 marked = mix(baseColor, screened, markAlpha);",
                "	marked = max(marked, movementHighlight.rgb * movementHighlight.a * (0.65 + 0.55 * vMovementHighlightStrength));",
                "	vec3 contrastEdge = mix(vec3(1.0), vec3(0.035), step(0.58, baseLuma));",
                "	vec3 edgeColor = mix(movementHighlight.rgb, contrastEdge, 0.45);",
                "	gl_FragColor.rgb = mix(marked, edgeColor, edgeBand * movementHighlight.a * 0.7 * vMovementHighlightStrength);",
                "}",
                "#include <dithering_fragment>"
            ].join(`
`));
        };
    }
    const Po = (r)=>{
        const { acceptsMovementHighlight: e, movementHighlight: t, voxelAo: i, performanceMode: n = !1 } = r, o = Oo(n), a = new R({
            roughness: Ro,
            metalness: Wo,
            vertexColors: !1,
            alphaTest: No
        });
        return e && t ? Io(a, o, t, i, n) : ko(a, o, i, n), {
            material: a,
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 2
        };
    }, Bo = {
        bucketKey: "ironbars_249",
        occlusionGroup: "ironbars_249",
        shaderVersion: 1,
        geometry: {
            vertexColors: !1
        },
        factory: Po,
        special: {
            paletteIndex: 249,
            label: "Iron Bars",
            swatchColor: To,
            category: "buildings"
        }
    }, Wi = "#cc3300", Do = 1.6, Uo = .85, Je = [
        .02,
        0,
        0
    ], Ke = [
        .88,
        .22,
        0
    ], Qe = [
        1,
        .9,
        .25
    ], Dt = .97, Ut = .9, Vo = .055, Go = .018, Vt = 1.8, Gt = .35, $t = 1, jt = 1.5, qt = .4, $o = .45, jo = 0, qo = "#ff3300", Yo = 3.2, Xo = [
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
    function Ni() {
        return [
            "attribute float surfaceDeformStrength;",
            ...I,
            "varying vec3 vLavaWorldPosition;",
            "varying vec3 vLavaWorldNormal;",
            "uniform float uLavaTime;"
        ];
    }
    function Oi(r) {
        const e = r ? Go : Vo;
        return [
            "vLavaWorldNormal = normalize(mat3(modelMatrix) * normal);",
            "vec3 lavaWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            `float lavaRippleA = sin(lavaWorld.x * ${Vt.toFixed(3)} + uLavaTime * ${Gt.toFixed(3)});`,
            `float lavaRippleB = cos(lavaWorld.z * ${Vt.toFixed(3)} * 1.17 + uLavaTime * ${Gt.toFixed(3)} * 0.83);`,
            `float lavaDisplacement = (lavaRippleA + lavaRippleB) * 0.5 * ${e.toFixed(4)} * surfaceDeformStrength;`,
            "transformed.y += lavaDisplacement;",
            "vLavaWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            ...P
        ];
    }
    function ki(r) {
        const e = [
            ...N(r),
            "varying vec3 vLavaWorldPosition;",
            "varying vec3 vLavaWorldNormal;",
            "uniform float uLavaTime;",
            `const vec3 L_CRUST  = vec3(${Je[0].toFixed(3)}, ${Je[1].toFixed(3)}, ${Je[2].toFixed(3)});`,
            `const vec3 L_MID    = vec3(${Ke[0].toFixed(3)}, ${Ke[1].toFixed(3)}, ${Ke[2].toFixed(3)});`,
            `const vec3 L_BRIGHT = vec3(${Qe[0].toFixed(3)}, ${Qe[1].toFixed(3)}, ${Qe[2].toFixed(3)});`
        ];
        return r || e.push(Xo), e;
    }
    function Ii(r) {
        return r ? [
            "vec3 lNrm = normalize(vLavaWorldNormal);",
            "bool lIsTop    = lNrm.y >  0.5;",
            "bool lIsBottom = lNrm.y < -0.5;",
            "if (lIsBottom) {",
            `	diffuseColor = vec4(L_CRUST * ${C}, ${Ut.toFixed(3)});`,
            "} else {",
            "float lGlow = 0.0;",
            "if (lIsTop) {",
            "	vec2 lUv = vLavaWorldPosition.xz;",
            "	lGlow = 0.5 + 0.5 * sin(lUv.x * 2.8 + uLavaTime * 0.5 + cos(lUv.y * 1.6 + uLavaTime * 0.35));",
            "} else {",
            "	float lFallH = (abs(lNrm.x) > abs(lNrm.z)) ? vLavaWorldPosition.z : vLavaWorldPosition.x;",
            `	vec2 lFallUv = vec2(lFallH / ${$t.toFixed(3)}, vLavaWorldPosition.y / ${jt.toFixed(3)} + uLavaTime * ${qt.toFixed(3)});`,
            "	float lFallA = 0.5 + 0.5 * sin(lFallUv.y * 5.2 + lFallUv.x * 1.8);",
            "	float lFallB = 0.5 + 0.5 * sin(lFallUv.y * 9.0 + uLavaTime * 0.4);",
            "	lGlow = clamp(lFallA * 0.65 + lFallB * 0.35, 0.0, 1.0);",
            "}",
            "vec3 lColor = mix(L_MID, L_BRIGHT, lGlow * 0.7);",
            `lColor *= ${C};`,
            `diffuseColor = vec4(lColor, ${Dt.toFixed(3)});`,
            "}"
        ] : [
            "vec3 lNrm = normalize(vLavaWorldNormal);",
            "bool lIsTop    = lNrm.y >  0.5;",
            "bool lIsBottom = lNrm.y < -0.5;",
            "float lGlowMask  = 0.0;",
            "float lCrustMask = 0.0;",
            "if (lIsBottom) {",
            `	diffuseColor = vec4(L_CRUST * ${C}, ${Ut.toFixed(3)});`,
            "} else {",
            "if (lIsTop) {",
            `	vec2 lUvCrust = vLavaWorldPosition.xz / ${Do.toFixed(3)};`,
            `	vec2 lUvGlow  = vLavaWorldPosition.xz / ${Uo.toFixed(3)};`,
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
            "	float lFallH = (abs(lNrm.x) > abs(lNrm.z)) ? vLavaWorldPosition.z : vLavaWorldPosition.x;",
            "	float lFallV = vLavaWorldPosition.y;",
            `	vec2 lFallUv = vec2(lFallH / ${$t.toFixed(3)}, lFallV / ${jt.toFixed(3)} + uLavaTime * ${qt.toFixed(3)});`,
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
            `lColor *= ${C};`,
            `diffuseColor = vec4(lColor, ${Dt.toFixed(3)});`,
            "}"
        ];
    }
    function Pi() {
        return [
            "float lavaEmissivePulse = 0.78 + 0.22 * sin(uLavaTime * 1.05);",
            "totalEmissiveRadiance *= lavaEmissivePulse;"
        ];
    }
    function Zo(r, e, t, i) {
        r.onBeforeCompile = (n)=>{
            F(n, t), n.uniforms.uLavaTime = e, n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Ni()
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Oi(i)
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...ki(i)
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", Ii(i).join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <emissivemap_fragment>", Pi().join(`
`));
        };
    }
    function Jo(r, e, t, i, n) {
        const o = new L(t.width, t.length), a = t.heightLevels;
        r.onBeforeCompile = (s)=>{
            F(s, i), s.uniforms.uLavaTime = e, s.uniforms.movementHighlightMap = {
                value: t.texture
            }, s.uniforms.movementHighlightSize = {
                value: o
            }, s.uniforms.movementHighlightHeightLevels = {
                value: a
            }, s.vertexShader = s.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Ni(),
                "uniform vec2 movementHighlightSize;",
                "attribute float tileHeight;",
                "attribute float highlightStrength;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), s.vertexShader = s.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Oi(n),
                "vMovementHighlightHeight = tileHeight;",
                "vMovementHighlightStrength = highlightStrength;",
                "vMovementWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
                "vMovementWorldNormal = normalize(mat3(modelMatrix) * normal);"
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...ki(n),
                "uniform highp sampler3D movementHighlightMap;",
                "uniform vec2 movementHighlightSize;",
                "uniform float movementHighlightHeightLevels;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <color_fragment>", Ii(n).join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <emissivemap_fragment>", Pi().join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <dithering_fragment>", [
                "vec3 movementOwnerPosition = vMovementWorldPosition - vMovementWorldNormal * 0.002;",
                "vec2 movementTileCoord = clamp(",
                "	floor(movementOwnerPosition.xz + movementHighlightSize * 0.5),",
                "	vec2(0.0),",
                "	movementHighlightSize - vec2(1.0)",
                ");",
                "float movementTileHeight = clamp(vMovementHighlightHeight, 0.0, movementHighlightHeightLevels - 1.0);",
                "vec3 movementHighlightUvw = vec3(",
                "	(movementTileCoord.x + 0.5) / movementHighlightSize.x,",
                "	(movementTileHeight + 0.5) / movementHighlightHeightLevels,",
                "	(movementTileCoord.y + 0.5) / movementHighlightSize.y",
                ");",
                "vec4 movementHighlight = texture(movementHighlightMap, movementHighlightUvw);",
                "if (movementHighlight.a > 0.0 && vMovementHighlightStrength > 0.0) {",
                "	vec3 baseColor = gl_FragColor.rgb;",
                "	float baseLuma = dot(baseColor, vec3(0.2126, 0.7152, 0.0722));",
                "	vec2 tileLocal = fract(movementOwnerPosition.xz + movementHighlightSize * 0.5);",
                "	float edgeDistance = min(min(tileLocal.x, 1.0 - tileLocal.x), min(tileLocal.y, 1.0 - tileLocal.y));",
                "	float edgeBand = 1.0 - smoothstep(0.025, 0.11, edgeDistance);",
                "	float markAlpha = clamp(movementHighlight.a * (1.35 + edgeBand * 0.75) * vMovementHighlightStrength, 0.0, 0.92);",
                "	vec3 screened = 1.0 - (1.0 - baseColor) * (1.0 - movementHighlight.rgb * 0.85);",
                "	vec3 marked = mix(baseColor, screened, markAlpha);",
                "	marked = max(marked, movementHighlight.rgb * movementHighlight.a * (0.65 + 0.55 * vMovementHighlightStrength));",
                "	vec3 contrastEdge = mix(vec3(1.0), vec3(0.035), step(0.58, baseLuma));",
                "	vec3 edgeColor = mix(movementHighlight.rgb, contrastEdge, 0.45);",
                "	gl_FragColor.rgb = mix(marked, edgeColor, edgeBand * movementHighlight.a * 0.7 * vMovementHighlightStrength);",
                "}",
                "#include <dithering_fragment>"
            ].join(`
`));
        };
    }
    const Ko = (r)=>{
        const { acceptsMovementHighlight: e, movementHighlight: t, voxelAo: i, performanceMode: n = !1 } = r, o = {
            value: 0
        }, a = new R({
            color: Wi,
            emissive: new Y(qo),
            emissiveIntensity: Yo,
            roughness: $o,
            metalness: jo,
            vertexColors: !1,
            transparent: !0,
            depthWrite: !0
        });
        return e && t ? Jo(a, o, t, i, n) : Zo(a, o, i, n), {
            material: a,
            onAnimationFrame: (c)=>{
                o.value = c * .001;
            },
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 1
        };
    }, Qo = {
        bucketKey: "lava_245",
        occlusionGroup: "lava_245",
        shaderVersion: 1,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !0,
            deformSurface: !0
        },
        passable: !0,
        factory: Ko,
        special: {
            paletteIndex: 245,
            label: "Lava",
            swatchColor: Wi,
            category: "liquids"
        }
    }, ft = "#ffd166", er = .35, tr = 0, ir = 3.5, nr = (r)=>({
            material: new R({
                color: ft,
                emissive: ft,
                emissiveIntensity: ir,
                roughness: er,
                metalness: tr,
                vertexColors: !1
            }),
            castShadow: !1,
            receiveShadow: !1
        }), or = {
        bucketKey: "light_243",
        occlusionGroup: "solid",
        shaderVersion: 1,
        geometry: {
            vertexColors: !1
        },
        passable: !0,
        factory: nr,
        special: {
            paletteIndex: 243,
            label: "Light",
            swatchColor: ft
        }
    }, Bi = "#A8B8C8", et = .5, tt = [
        .8,
        .82,
        .86
    ], it = [
        .22,
        .3,
        .45
    ], rr = .35, sr = 0, ar = [
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
    function Di() {
        return [
            ...I,
            "varying vec3 vSilverWorldPosition;",
            "varying vec3 vSilverWorldNormal;"
        ];
    }
    function Ui() {
        return [
            "vSilverWorldNormal = normalize(mat3(modelMatrix) * normal);",
            "vSilverWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            ...P
        ];
    }
    function Vi(r) {
        return [
            ...N(r),
            "varying vec3 vSilverWorldPosition;",
            "varying vec3 vSilverWorldNormal;",
            ar,
            `const vec3 S_COL1 = vec3(${tt[0].toFixed(3)}, ${tt[1].toFixed(3)}, ${tt[2].toFixed(3)});`,
            `const vec3 S_COL2 = vec3(${it[0].toFixed(3)}, ${it[1].toFixed(3)}, ${it[2].toFixed(3)});`
        ];
    }
    function Gi(r) {
        const e = [
            "vec3 sNrm = normalize(vSilverWorldNormal);",
            "bool sIsBottom = sNrm.y < -0.5;",
            "vec2 sUv = vec2(0.0);",
            "if (!sIsBottom) {",
            "	if (abs(sNrm.x) > abs(sNrm.z) && abs(sNrm.x) > abs(sNrm.y)) {",
            `		sUv = vSilverWorldPosition.zy * ${et.toFixed(3)};`,
            "	} else if (abs(sNrm.z) > abs(sNrm.y)) {",
            `		sUv = vSilverWorldPosition.xy * ${et.toFixed(3)};`,
            "	} else {",
            `		sUv = vSilverWorldPosition.xz * ${et.toFixed(3)};`,
            "	}",
            "}"
        ], i = [
            "	vec2 sQ = vec2(0.0), sR = vec2(0.0);",
            `	${r ? "float sF = silverPatternLow(sUv, sQ, sR);" : "float sF = silverPattern(sUv, sQ, sR);"}`,
            "	vec3 sC = mix(S_COL1, vec3(0.0), pow(smoothstep(0., 0.9, sF), 2.));",
            "	sC += S_COL2 * pow(smoothstep(0., 0.8, dot(sQ, sR)*0.6), 3.) * 1.5;",
            "	sC *= pow(dot(sQ, sR) + 0.3, 3.);",
            "	sC *= sF * 1.5;",
            `	sC *= ${C};`,
            "	diffuseColor = vec4(sC, 1.0);"
        ];
        return [
            ...e,
            "if (sIsBottom) {",
            `	diffuseColor = vec4(S_COL2 * 0.3 * ${C}, 1.0);`,
            "} else {",
            ...i,
            "}"
        ];
    }
    const lr = [
        "vec3 movementOwnerPosition = vMovementWorldPosition - vMovementWorldNormal * 0.002;",
        "vec2 movementTileCoord = clamp(",
        "	floor(movementOwnerPosition.xz + movementHighlightSize * 0.5),",
        "	vec2(0.0),",
        "	movementHighlightSize - vec2(1.0)",
        ");",
        "float movementTileHeight = clamp(vMovementHighlightHeight, 0.0, movementHighlightHeightLevels - 1.0);",
        "vec3 movementHighlightUvw = vec3(",
        "	(movementTileCoord.x + 0.5) / movementHighlightSize.x,",
        "	(movementTileHeight + 0.5) / movementHighlightHeightLevels,",
        "	(movementTileCoord.y + 0.5) / movementHighlightSize.y",
        ");",
        "vec4 movementHighlight = texture(movementHighlightMap, movementHighlightUvw);",
        "if (movementHighlight.a > 0.0 && vMovementHighlightStrength > 0.0) {",
        "	vec3 baseColor = gl_FragColor.rgb;",
        "	float baseLuma = dot(baseColor, vec3(0.2126, 0.7152, 0.0722));",
        "	vec2 tileLocal = fract(movementOwnerPosition.xz + movementHighlightSize * 0.5);",
        "	float edgeDistance = min(min(tileLocal.x, 1.0 - tileLocal.x), min(tileLocal.y, 1.0 - tileLocal.y));",
        "	float edgeBand = 1.0 - smoothstep(0.025, 0.11, edgeDistance);",
        "	float markAlpha = clamp(movementHighlight.a * (1.35 + edgeBand * 0.75) * vMovementHighlightStrength, 0.0, 0.92);",
        "	vec3 screened = 1.0 - (1.0 - baseColor) * (1.0 - movementHighlight.rgb * 0.85);",
        "	vec3 marked = mix(baseColor, screened, markAlpha);",
        "	marked = max(marked, movementHighlight.rgb * movementHighlight.a * (0.65 + 0.55 * vMovementHighlightStrength));",
        "	vec3 contrastEdge = mix(vec3(1.0), vec3(0.035), step(0.58, baseLuma));",
        "	vec3 edgeColor = mix(movementHighlight.rgb, contrastEdge, 0.45);",
        "	gl_FragColor.rgb = mix(marked, edgeColor, edgeBand * movementHighlight.a * 0.7 * vMovementHighlightStrength);",
        "}",
        "#include <dithering_fragment>"
    ].join(`
`);
    function hr(r, e, t) {
        r.onBeforeCompile = (i)=>{
            F(i, e), i.vertexShader = i.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Di()
            ].join(`
`)), i.vertexShader = i.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Ui()
            ].join(`
`)), i.fragmentShader = i.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Vi(t)
            ].join(`
`)), i.fragmentShader = i.fragmentShader.replace("#include <color_fragment>", Gi(t).join(`
`));
        };
    }
    function cr(r, e, t, i) {
        const n = new L(e.width, e.length), o = e.heightLevels;
        r.onBeforeCompile = (a)=>{
            F(a, t), a.uniforms.movementHighlightMap = {
                value: e.texture
            }, a.uniforms.movementHighlightSize = {
                value: n
            }, a.uniforms.movementHighlightHeightLevels = {
                value: o
            }, a.vertexShader = a.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Di(),
                "uniform vec2 movementHighlightSize;",
                "attribute float tileHeight;",
                "attribute float highlightStrength;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), a.vertexShader = a.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Ui(),
                "vMovementHighlightHeight = tileHeight;",
                "vMovementHighlightStrength = highlightStrength;",
                "vMovementWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
                "vMovementWorldNormal = normalize(mat3(modelMatrix) * normal);"
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Vi(i),
                "uniform highp sampler3D movementHighlightMap;",
                "uniform vec2 movementHighlightSize;",
                "uniform float movementHighlightHeightLevels;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <color_fragment>", Gi(i).join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <dithering_fragment>", lr);
        };
    }
    const mr = (r)=>{
        const { acceptsMovementHighlight: e, movementHighlight: t, voxelAo: i, performanceMode: n = !1 } = r, o = new R({
            color: Bi,
            roughness: rr,
            metalness: sr,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return e && t ? cr(o, t, i, n) : hr(o, i, n), {
            material: o,
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, gr = {
        bucketKey: "silver_248",
        occlusionGroup: "solid",
        shaderVersion: 2,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !1,
            deformSurface: !1
        },
        factory: mr,
        special: {
            paletteIndex: 248,
            label: "Silver",
            swatchColor: Bi,
            category: "metals"
        }
    }, Yt = "/materials/bricks_240/bricks_256x256.png", dr = "#8f8f8f", ur = 1, vr = 8, fr = 1;
    let nt = null, ot = null;
    function Xt(r, e) {
        return r.colorSpace = E, r.wrapS = 1e3, r.wrapT = 1e3, r.magFilter = 1006, r.minFilter = e ? 1006 : 1008, r.anisotropy = e ? fr : vr, r.generateMipmaps = !e, r;
    }
    function pr(r) {
        return r ? (ot || (ot = Xt(new W().load(Yt), !0)), ot) : (nt || (nt = Xt(new W().load(Yt), !1)), nt);
    }
    function $i() {
        return [
            ...I,
            "varying vec3 vStoneBricksWorldPosition;",
            "varying vec3 vStoneBricksWorldNormal;"
        ];
    }
    function ji() {
        return [
            ...P,
            "vStoneBricksWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            "vStoneBricksWorldNormal = normalize(mat3(modelMatrix) * normal);"
        ];
    }
    function qi(r) {
        return [
            ...N(r),
            "varying vec3 vStoneBricksWorldPosition;",
            "varying vec3 vStoneBricksWorldNormal;",
            "uniform sampler2D stoneBricksMap;",
            "vec2 getStoneBricksUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function Yi() {
        return [
            "#include <color_fragment>",
            `vec2 stoneBricksUv = getStoneBricksUv(vStoneBricksWorldPosition, vStoneBricksWorldNormal) * ${ur.toFixed(1)};`,
            "vec4 stoneBricksTexel = texture2D(stoneBricksMap, stoneBricksUv);",
            "diffuseColor.rgb *= stoneBricksTexel.rgb;",
            "diffuseColor.a *= stoneBricksTexel.a;",
            `diffuseColor.rgb *= ${C};`
        ];
    }
    function xr(r, e, t, i) {
        r.onBeforeCompile = (n)=>{
            F(n, t), n.uniforms.stoneBricksMap = {
                value: e
            }, n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...$i()
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...ji()
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...qi(i)
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", Yi().join(`
`));
        };
    }
    function yr(r, e, t, i, n) {
        const o = new L(t.width, t.length), a = t.heightLevels;
        r.onBeforeCompile = (s)=>{
            F(s, i), s.uniforms.stoneBricksMap = {
                value: e
            }, s.uniforms.movementHighlightMap = {
                value: t.texture
            }, s.uniforms.movementHighlightSize = {
                value: o
            }, s.uniforms.movementHighlightHeightLevels = {
                value: a
            }, s.vertexShader = s.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...$i(),
                "uniform vec2 movementHighlightSize;",
                "attribute float tileHeight;",
                "attribute float highlightStrength;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), s.vertexShader = s.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...ji(),
                "vMovementHighlightHeight = tileHeight;",
                "vMovementHighlightStrength = highlightStrength;",
                "vMovementWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
                "vMovementWorldNormal = normalize(mat3(modelMatrix) * normal);"
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...qi(n),
                "uniform highp sampler3D movementHighlightMap;",
                "uniform vec2 movementHighlightSize;",
                "uniform float movementHighlightHeightLevels;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <color_fragment>", Yi().join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <dithering_fragment>", [
                "vec3 movementOwnerPosition = vMovementWorldPosition - vMovementWorldNormal * 0.002;",
                "vec2 movementTileCoord = clamp(",
                "	floor(movementOwnerPosition.xz + movementHighlightSize * 0.5),",
                "	vec2(0.0),",
                "	movementHighlightSize - vec2(1.0)",
                ");",
                "float movementTileHeight = clamp(vMovementHighlightHeight, 0.0, movementHighlightHeightLevels - 1.0);",
                "vec3 movementHighlightUvw = vec3(",
                "	(movementTileCoord.x + 0.5) / movementHighlightSize.x,",
                "	(movementTileHeight + 0.5) / movementHighlightHeightLevels,",
                "	(movementTileCoord.y + 0.5) / movementHighlightSize.y",
                ");",
                "vec4 movementHighlight = texture(movementHighlightMap, movementHighlightUvw);",
                "if (movementHighlight.a > 0.0 && vMovementHighlightStrength > 0.0) {",
                "	vec3 baseColor = gl_FragColor.rgb;",
                "	float baseLuma = dot(baseColor, vec3(0.2126, 0.7152, 0.0722));",
                "	vec2 tileLocal = fract(movementOwnerPosition.xz + movementHighlightSize * 0.5);",
                "	float edgeDistance = min(min(tileLocal.x, 1.0 - tileLocal.x), min(tileLocal.y, 1.0 - tileLocal.y));",
                "	float edgeBand = 1.0 - smoothstep(0.025, 0.11, edgeDistance);",
                "	float markAlpha = clamp(movementHighlight.a * (1.35 + edgeBand * 0.75) * vMovementHighlightStrength, 0.0, 0.92);",
                "	vec3 screened = 1.0 - (1.0 - baseColor) * (1.0 - movementHighlight.rgb * 0.85);",
                "	vec3 marked = mix(baseColor, screened, markAlpha);",
                "	marked = max(marked, movementHighlight.rgb * movementHighlight.a * (0.65 + 0.55 * vMovementHighlightStrength));",
                "	vec3 contrastEdge = mix(vec3(1.0), vec3(0.035), step(0.58, baseLuma));",
                "	vec3 edgeColor = mix(movementHighlight.rgb, contrastEdge, 0.45);",
                "	gl_FragColor.rgb = mix(marked, edgeColor, edgeBand * movementHighlight.a * 0.7 * vMovementHighlightStrength);",
                "}",
                "#include <dithering_fragment>"
            ].join(`
`));
        };
    }
    const Sr = (r)=>{
        const { acceptsMovementHighlight: e, movementHighlight: t, voxelAo: i, performanceMode: n = !1 } = r, o = pr(n), a = new R({
            roughness: Q.ROUGHNESS,
            metalness: Q.METALNESS,
            vertexColors: !1
        });
        return e && t ? yr(a, o, t, i, n) : xr(a, o, i, n), {
            material: a,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Mr = {
        bucketKey: "stonebricks_240",
        occlusionGroup: "solid",
        shaderVersion: 2,
        geometry: {
            vertexColors: !1
        },
        factory: Sr,
        special: {
            paletteIndex: 240,
            label: "Stone Bricks",
            swatchColor: dr,
            category: "buildings"
        }
    }, _r = "#1a6699", br = 2, wr = 1.1, rt = [
        .9,
        .9,
        .95
    ], st = [
        .1,
        .4,
        .6
    ], at = [
        0,
        .2,
        .4
    ], Zt = .86, Jt = .75, Kt = .48, Fr = .115, Hr = .045, Qt = 2.4, ei = 1.6, ti = .8, ii = 1.2, ni = 1.4, Cr = .2, Ar = 0, Tr = [
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
    function Xi() {
        return [
            "attribute float surfaceDeformStrength;",
            ...I,
            "varying vec3 vWaterWorldPosition;",
            "varying vec3 vWaterWorldNormal;",
            "uniform float uWaterTime;"
        ];
    }
    function Zi(r) {
        const e = r ? Hr : Fr;
        return [
            "vWaterWorldNormal = normalize(mat3(modelMatrix) * normal);",
            "vec3 waterWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            `float waterRippleA = sin(waterWorld.x * ${Qt.toFixed(3)} + uWaterTime * ${ei.toFixed(3)});`,
            `float waterRippleB = cos(waterWorld.z * ${Qt.toFixed(3)} * 1.13 + uWaterTime * ${ei.toFixed(3)} * 0.87);`,
            `float waterDisplacement = (waterRippleA + waterRippleB) * 0.5 * ${e.toFixed(4)} * surfaceDeformStrength;`,
            "transformed.y += waterDisplacement;",
            "vWaterWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            ...P
        ];
    }
    function Ji(r) {
        const e = [
            ...N(r),
            "varying vec3 vWaterWorldPosition;",
            "varying vec3 vWaterWorldNormal;",
            "uniform float uWaterTime;",
            `const vec3 W_FOAM = vec3(${rt[0].toFixed(3)}, ${rt[1].toFixed(3)}, ${rt[2].toFixed(3)});`,
            `const vec3 W_MAIN = vec3(${st[0].toFixed(3)}, ${st[1].toFixed(3)}, ${st[2].toFixed(3)});`,
            `const vec3 W_DARK = vec3(${at[0].toFixed(3)}, ${at[1].toFixed(3)}, ${at[2].toFixed(3)});`
        ];
        return r || e.push(Tr), e;
    }
    function Ki(r) {
        return r ? [
            "vec3 wNrm = normalize(vWaterWorldNormal);",
            "bool wIsTopSurface = wNrm.y > 0.5;",
            "bool wIsBottomSurface = wNrm.y < -0.5;",
            "if (wIsBottomSurface) {",
            `	diffuseColor = vec4(W_MAIN * ${C}, ${Kt.toFixed(3)});`,
            "} else {",
            "float wWave = 0.0;",
            "float wFoamMask = 0.0;",
            "if (wIsTopSurface) {",
            "	vec2 wUv = vWaterWorldPosition.xz;",
            "	wWave = 0.5 + 0.5 * sin(wUv.x * 4.0 + uWaterTime * 1.7 + cos(wUv.y * 2.0));",
            "	wFoamMask = smoothstep(0.88, 1.0, wWave);",
            "} else {",
            "	float wFallH = (abs(wNrm.x) > abs(wNrm.z)) ? vWaterWorldPosition.z : vWaterWorldPosition.x;",
            `	vec2 wFallUv = vec2(wFallH / ${ti.toFixed(3)}, vWaterWorldPosition.y / ${ii.toFixed(3)} + uWaterTime * ${ni.toFixed(3)});`,
            "	float wFallColumn = sin(wFallUv.x * 6.283);",
            "	float wFallA = 0.5 + 0.5 * sin(wFallUv.y * 6.283 + wFallColumn * 1.1);",
            "	float wFallB = 0.5 + 0.5 * sin(wFallUv.y * 11.0 + wFallUv.x * 2.3);",
            "	wWave = clamp(wFallA * 0.72 + wFallB * 0.28, 0.0, 1.0);",
            "	wFoamMask = 0.0;",
            "}",
            "vec3 wBody = mix(W_DARK, W_MAIN, wWave);",
            "vec3 wColor = mix(wBody, W_FOAM, wFoamMask * 0.65);",
            `wColor *= ${C};`,
            `float wAlpha = mix(${Zt.toFixed(3)}, ${Jt.toFixed(3)}, wFoamMask);`,
            "diffuseColor = vec4(wColor, wAlpha);",
            "}"
        ] : [
            "vec3 wNrm = normalize(vWaterWorldNormal);",
            "bool wIsTopSurface = wNrm.y > 0.5;",
            "bool wIsBottomSurface = wNrm.y < -0.5;",
            "float wRippleMask = 0.0;",
            "float wFoamMask = 0.0;",
            "float wFoamHalo = 0.0;",
            "if (wIsBottomSurface) {",
            `	diffuseColor = vec4(W_MAIN * ${C}, ${Kt.toFixed(3)});`,
            "} else {",
            "if (wIsTopSurface) {",
            `	vec2 wUvFoam   = vWaterWorldPosition.xz / ${br.toFixed(3)};`,
            `	vec2 wUvRipple = vWaterWorldPosition.xz / ${wr.toFixed(3)};`,
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
            "	float wFallH = (abs(wNrm.x) > abs(wNrm.z)) ? vWaterWorldPosition.z : vWaterWorldPosition.x;",
            "	float wFallV = vWaterWorldPosition.y;",
            `	vec2 wUvRipple = vec2(wFallH / ${ti.toFixed(3)}, wFallV / ${ii.toFixed(3)} + uWaterTime * ${ni.toFixed(3)});`,
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
            `wColor *= ${C};`,
            `float wAlpha = mix(${Zt.toFixed(3)}, ${Jt.toFixed(3)}, wFoamMask);`,
            "diffuseColor = vec4(wColor, wAlpha);",
            "}"
        ];
    }
    function Er(r, e, t, i) {
        r.onBeforeCompile = (n)=>{
            F(n, t), n.uniforms.uWaterTime = e, n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Xi()
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Zi(i)
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Ji(i)
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", Ki(i).join(`
`));
        };
    }
    function Lr(r, e, t, i, n) {
        const o = new L(t.width, t.length), a = t.heightLevels;
        r.onBeforeCompile = (s)=>{
            F(s, i), s.uniforms.uWaterTime = e, s.uniforms.movementHighlightMap = {
                value: t.texture
            }, s.uniforms.movementHighlightSize = {
                value: o
            }, s.uniforms.movementHighlightHeightLevels = {
                value: a
            }, s.vertexShader = s.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Xi(),
                "uniform vec2 movementHighlightSize;",
                "attribute float tileHeight;",
                "attribute float highlightStrength;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), s.vertexShader = s.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Zi(n),
                "vMovementHighlightHeight = tileHeight;",
                "vMovementHighlightStrength = highlightStrength;",
                "vMovementWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
                "vMovementWorldNormal = normalize(mat3(modelMatrix) * normal);"
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Ji(n),
                "uniform highp sampler3D movementHighlightMap;",
                "uniform vec2 movementHighlightSize;",
                "uniform float movementHighlightHeightLevels;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <color_fragment>", Ki(n).join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <dithering_fragment>", [
                "vec3 movementOwnerPosition = vMovementWorldPosition - vMovementWorldNormal * 0.002;",
                "vec2 movementTileCoord = clamp(",
                "	floor(movementOwnerPosition.xz + movementHighlightSize * 0.5),",
                "	vec2(0.0),",
                "	movementHighlightSize - vec2(1.0)",
                ");",
                "float movementTileHeight = clamp(vMovementHighlightHeight, 0.0, movementHighlightHeightLevels - 1.0);",
                "vec3 movementHighlightUvw = vec3(",
                "	(movementTileCoord.x + 0.5) / movementHighlightSize.x,",
                "	(movementTileHeight + 0.5) / movementHighlightHeightLevels,",
                "	(movementTileCoord.y + 0.5) / movementHighlightSize.y",
                ");",
                "vec4 movementHighlight = texture(movementHighlightMap, movementHighlightUvw);",
                "if (movementHighlight.a > 0.0 && vMovementHighlightStrength > 0.0) {",
                "	vec3 baseColor = gl_FragColor.rgb;",
                "	float baseLuma = dot(baseColor, vec3(0.2126, 0.7152, 0.0722));",
                "	vec2 tileLocal = fract(movementOwnerPosition.xz + movementHighlightSize * 0.5);",
                "	float edgeDistance = min(min(tileLocal.x, 1.0 - tileLocal.x), min(tileLocal.y, 1.0 - tileLocal.y));",
                "	float edgeBand = 1.0 - smoothstep(0.025, 0.11, edgeDistance);",
                "	float markAlpha = clamp(movementHighlight.a * (1.35 + edgeBand * 0.75) * vMovementHighlightStrength, 0.0, 0.92);",
                "	vec3 screened = 1.0 - (1.0 - baseColor) * (1.0 - movementHighlight.rgb * 0.85);",
                "	vec3 marked = mix(baseColor, screened, markAlpha);",
                "	marked = max(marked, movementHighlight.rgb * movementHighlight.a * (0.65 + 0.55 * vMovementHighlightStrength));",
                "	vec3 contrastEdge = mix(vec3(1.0), vec3(0.035), step(0.58, baseLuma));",
                "	vec3 edgeColor = mix(movementHighlight.rgb, contrastEdge, 0.45);",
                "	gl_FragColor.rgb = mix(marked, edgeColor, edgeBand * movementHighlight.a * 0.7 * vMovementHighlightStrength);",
                "}",
                "#include <dithering_fragment>"
            ].join(`
`));
        };
    }
    const zr = (r)=>{
        const { acceptsMovementHighlight: e, movementHighlight: t, voxelAo: i, performanceMode: n = !1 } = r, o = {
            value: 0
        }, a = new R({
            roughness: Cr,
            metalness: Ar,
            vertexColors: !1,
            transparent: !0,
            depthWrite: !0
        });
        return e && t ? Lr(a, o, t, i, n) : Er(a, o, i, n), {
            material: a,
            onAnimationFrame: (c)=>{
                o.value = c * .001;
            },
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 1
        };
    }, Rr = {
        bucketKey: "water_241",
        occlusionGroup: "water_241",
        shaderVersion: 7,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !0,
            deformSurface: !0
        },
        passable: !0,
        factory: zr,
        special: {
            paletteIndex: 241,
            label: "Water",
            swatchColor: _r,
            category: "liquids"
        }
    }, oi = "/materials/wood_244/wood_256x256.png", Wr = "#8b5a2b", Nr = 1, Or = 8, kr = 1;
    let lt = null, ht = null;
    function ri(r, e) {
        return r.colorSpace = E, r.wrapS = 1e3, r.wrapT = 1e3, r.magFilter = 1006, r.minFilter = e ? 1006 : 1008, r.anisotropy = e ? kr : Or, r.generateMipmaps = !e, r;
    }
    function Ir(r) {
        return r ? (ht || (ht = ri(new W().load(oi), !0)), ht) : (lt || (lt = ri(new W().load(oi), !1)), lt);
    }
    function Qi() {
        return [
            ...I,
            "varying vec3 vWoodWorldPosition;",
            "varying vec3 vWoodWorldNormal;"
        ];
    }
    function en() {
        return [
            ...P,
            "vWoodWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            "vWoodWorldNormal = normalize(mat3(modelMatrix) * normal);"
        ];
    }
    function tn(r) {
        return [
            ...N(r),
            "varying vec3 vWoodWorldPosition;",
            "varying vec3 vWoodWorldNormal;",
            "uniform sampler2D woodMap;",
            "vec2 getWoodUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function nn() {
        return [
            "#include <color_fragment>",
            `vec2 woodUv = getWoodUv(vWoodWorldPosition, vWoodWorldNormal) * ${Nr.toFixed(1)};`,
            "vec4 woodTexel = texture2D(woodMap, woodUv);",
            "diffuseColor.rgb *= woodTexel.rgb;",
            "diffuseColor.a *= woodTexel.a;",
            `diffuseColor.rgb *= ${C};`
        ];
    }
    function Pr(r, e, t, i) {
        r.onBeforeCompile = (n)=>{
            F(n, t), n.uniforms.woodMap = {
                value: e
            }, n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Qi()
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...en()
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...tn(i)
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", nn().join(`
`));
        };
    }
    function Br(r, e, t, i, n) {
        const o = new L(t.width, t.length), a = t.heightLevels;
        r.onBeforeCompile = (s)=>{
            F(s, i), s.uniforms.woodMap = {
                value: e
            }, s.uniforms.movementHighlightMap = {
                value: t.texture
            }, s.uniforms.movementHighlightSize = {
                value: o
            }, s.uniforms.movementHighlightHeightLevels = {
                value: a
            }, s.vertexShader = s.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Qi(),
                "uniform vec2 movementHighlightSize;",
                "attribute float tileHeight;",
                "attribute float highlightStrength;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), s.vertexShader = s.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...en(),
                "vMovementHighlightHeight = tileHeight;",
                "vMovementHighlightStrength = highlightStrength;",
                "vMovementWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
                "vMovementWorldNormal = normalize(mat3(modelMatrix) * normal);"
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...tn(n),
                "uniform highp sampler3D movementHighlightMap;",
                "uniform vec2 movementHighlightSize;",
                "uniform float movementHighlightHeightLevels;",
                "varying float vMovementHighlightHeight;",
                "varying float vMovementHighlightStrength;",
                "varying vec3 vMovementWorldPosition;",
                "varying vec3 vMovementWorldNormal;"
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <color_fragment>", nn().join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <dithering_fragment>", [
                "vec3 movementOwnerPosition = vMovementWorldPosition - vMovementWorldNormal * 0.002;",
                "vec2 movementTileCoord = clamp(",
                "	floor(movementOwnerPosition.xz + movementHighlightSize * 0.5),",
                "	vec2(0.0),",
                "	movementHighlightSize - vec2(1.0)",
                ");",
                "float movementTileHeight = clamp(vMovementHighlightHeight, 0.0, movementHighlightHeightLevels - 1.0);",
                "vec3 movementHighlightUvw = vec3(",
                "	(movementTileCoord.x + 0.5) / movementHighlightSize.x,",
                "	(movementTileHeight + 0.5) / movementHighlightHeightLevels,",
                "	(movementTileCoord.y + 0.5) / movementHighlightSize.y",
                ");",
                "vec4 movementHighlight = texture(movementHighlightMap, movementHighlightUvw);",
                "if (movementHighlight.a > 0.0 && vMovementHighlightStrength > 0.0) {",
                "	vec3 baseColor = gl_FragColor.rgb;",
                "	float baseLuma = dot(baseColor, vec3(0.2126, 0.7152, 0.0722));",
                "	vec2 tileLocal = fract(movementOwnerPosition.xz + movementHighlightSize * 0.5);",
                "	float edgeDistance = min(min(tileLocal.x, 1.0 - tileLocal.x), min(tileLocal.y, 1.0 - tileLocal.y));",
                "	float edgeBand = 1.0 - smoothstep(0.025, 0.11, edgeDistance);",
                "	float markAlpha = clamp(movementHighlight.a * (1.35 + edgeBand * 0.75) * vMovementHighlightStrength, 0.0, 0.92);",
                "	vec3 screened = 1.0 - (1.0 - baseColor) * (1.0 - movementHighlight.rgb * 0.85);",
                "	vec3 marked = mix(baseColor, screened, markAlpha);",
                "	marked = max(marked, movementHighlight.rgb * movementHighlight.a * (0.65 + 0.55 * vMovementHighlightStrength));",
                "	vec3 contrastEdge = mix(vec3(1.0), vec3(0.035), step(0.58, baseLuma));",
                "	vec3 edgeColor = mix(movementHighlight.rgb, contrastEdge, 0.45);",
                "	gl_FragColor.rgb = mix(marked, edgeColor, edgeBand * movementHighlight.a * 0.7 * vMovementHighlightStrength);",
                "}",
                "#include <dithering_fragment>"
            ].join(`
`));
        };
    }
    const Dr = (r)=>{
        const { acceptsMovementHighlight: e, movementHighlight: t, voxelAo: i, performanceMode: n = !1 } = r, o = Ir(n), a = new R({
            roughness: Q.ROUGHNESS,
            metalness: Q.METALNESS,
            vertexColors: !1
        });
        return e && t ? Br(a, o, t, i, n) : Pr(a, o, i, n), {
            material: a,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Ur = {
        bucketKey: "wood_244",
        occlusionGroup: "solid",
        shaderVersion: 1,
        geometry: {
            vertexColors: !1
        },
        factory: Dr,
        special: {
            paletteIndex: 244,
            label: "Wood",
            swatchColor: Wr,
            category: "nature"
        }
    }, G = [
        Ce,
        Mr,
        Rr,
        Ao,
        or,
        Ur,
        Qo,
        to,
        mo,
        gr,
        Bo,
        jn,
        Yn
    ];
    G.filter((r)=>r.special !== void 0).map((r)=>({
            index: r.special.paletteIndex,
            label: r.special.label,
            color: r.special.swatchColor,
            category: r.special.category ?? "miscellaneous"
        }));
    const Vr = new Map(G.filter((r)=>r.special !== void 0).map((r)=>[
            r.special.paletteIndex,
            r.bucketKey
        ])), Gr = Ce.occlusionGroup ?? Ce.bucketKey, $r = new Map(G.filter((r)=>r.special !== void 0).map((r)=>[
            r.special.paletteIndex,
            r.occlusionGroup ?? r.bucketKey
        ])), St = new Map(G.filter((r)=>r.special !== void 0).map((r)=>[
            r.special.paletteIndex,
            r.geometry
        ])), Mt = Ce.geometry, jr = new Set(G.filter((r)=>r.special !== void 0).filter((r)=>r.passable === !0).map((r)=>r.special.paletteIndex));
    function qr(r) {
        return jr.has(r);
    }
    const Yr = new Set(G.filter((r)=>r.special !== void 0).filter((r)=>r.volumetric === !0).map((r)=>r.special.paletteIndex));
    function Xr(r) {
        return Yr.has(r);
    }
    function Zr(r) {
        return Vr.get(r) ?? "default";
    }
    function Jr(r) {
        return $r.get(r) ?? Gr;
    }
    function Kr(r) {
        return (St.get(r) ?? Mt)?.deformSurface === !0;
    }
    function Qr(r) {
        return (St.get(r) ?? Mt)?.vertexColors !== !1;
    }
    function es(r) {
        return (St.get(r) ?? Mt)?.preserveVoxelFaces === !0;
    }
    function ts() {
        const r = new Map, e = [], t = (d)=>{
            let g = r.get(d);
            return g === void 0 && (g = e.length, r.set(d, g), e.push(d)), g;
        }, i = new Map, n = (d)=>{
            let g = i.get(d);
            return g === void 0 && (g = i.size, i.set(d, g)), g;
        }, o = new Int32Array(256), a = new Int32Array(256), s = new Uint8Array(256), c = new Uint8Array(256), l = new Uint8Array(256), h = new Uint8Array(256), m = new Uint8Array(256);
        for(let d = 0; d < 256; d++)o[d] = t(Zr(d)), a[d] = n(Jr(d)), s[d] = Qr(d) ? 1 : 0, c[d] = Kr(d) ? 1 : 0, l[d] = es(d) ? 1 : 0, h[d] = Xr(d) ? 1 : 0, m[d] = qr(d) ? 1 : 0;
        return {
            bucketId: o,
            occlusionId: a,
            usesVertexColors: s,
            deformsSurface: c,
            preservesVoxelFaces: l,
            isVolumetric: h,
            isPassable: m,
            bucketKeyById: e
        };
    }
    const J = ts(), is = new Map(G.filter((r)=>r.special !== void 0).map((r)=>[
            r.special.paletteIndex,
            parseInt(r.special.swatchColor.slice(1), 16)
        ]));
    function ns(r) {
        return is.get(r);
    }
    function os(r) {
        const { bucketKey: e, shaderVersion: t, factory: i } = r;
        return (n)=>{
            const o = i(n), a = [
                "terrain",
                e,
                `v${t}`,
                n.acceptsMovementHighlight ? "hl" : "nh",
                n.performanceMode ? "perf" : "full"
            ].join("-");
            return o.material.customProgramCacheKey = ()=>a, o.material.needsUpdate = !0, o;
        };
    }
    {
        const r = new Set, e = new Set;
        for (const t of G){
            if (r.has(t.bucketKey)) throw new Error(`Duplicate terrain material bucketKey: "${t.bucketKey}"`);
            if (r.add(t.bucketKey), t.special) {
                const { paletteIndex: i } = t.special;
                if (i < 240 || i > 255) throw new Error(`Special material "${t.bucketKey}" has paletteIndex ${i} outside the 240-255 range.`);
                if (e.has(i)) throw new Error(`Duplicate special material paletteIndex: ${i}`);
                e.add(i);
            }
        }
    }
    new Map(G.map((r)=>[
            r.bucketKey,
            os(r)
        ]));
    function rs(r) {
        if (!r) return new Uint8Array(0);
        const e = atob(r), t = new Uint8Array(e.length);
        for(let i = 0; i < e.length; i++)t[i] = e.charCodeAt(i);
        return t;
    }
    const si = 1;
    function ss(r) {
        return Math.max(si, r.Resolution ?? si);
    }
    const Ee = 12, ai = .22, as = .88, ls = .18, li = .34, hs = .9, cs = .98, ms = [
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
        }, (r, e)=>[
                ls,
                e * 20
            ])
    ];
    function ct(r) {
        const e = Math.max(0, Math.min(1, r));
        return e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055;
    }
    function mt(r) {
        return Math.round(Math.max(0, Math.min(1, r)) * 255).toString(16).padStart(2, "0");
    }
    function on(r, e, t) {
        const i = t * Math.PI / 180, n = e * Math.cos(i), o = e * Math.sin(i), a = r + .3963377774 * n + .2158037573 * o, s = r - .1055613458 * n - .0638541728 * o, c = r - .0894841775 * n - 1.291485548 * o, l = a ** 3, h = s ** 3, m = c ** 3;
        return [
            4.0767416621 * l - 3.3077115913 * h + .2309699292 * m,
            -1.2684380046 * l + 2.6097574011 * h - .3413193965 * m,
            -.0041960863 * l - .7034186147 * h + 1.707614701 * m
        ];
    }
    function gs(r, e, t) {
        const [i, n, o] = on(r, e, t), a = ct(i), s = ct(n), c = ct(o);
        return `#${mt(a)}${mt(s)}${mt(c)}`;
    }
    function ds(r, e, t) {
        const [i, n, o] = on(r, e, t);
        return i >= 0 && i <= 1 && n >= 0 && n <= 1 && o >= 0 && o <= 1;
    }
    function us(r, e) {
        let t = 0, i = .4;
        for(let n = 0; n < 16; n++){
            const o = (t + i) / 2;
            ds(r, o, e) ? t = o : i = o;
        }
        return t * cs;
    }
    function rn(r) {
        const e = r / (Ee - 1);
        return ai + e * (as - ai);
    }
    function vs(r, e, t) {
        if (e <= 0 || t === null) return 0;
        const i = r / (Ee - 1), n = Math.pow(Math.sin(Math.PI * i), hs), o = e * (li + (1 - li) * n);
        return Math.min(o, us(rn(r), t));
    }
    function fs() {
        const r = [];
        for (const [e, t] of ms)for(let i = 0; i < Ee; i++){
            const n = rn(i), o = vs(i, e, t);
            r.push(gs(n, o, t ?? 0));
        }
        return r;
    }
    const Ae = fs(), sn = Ee - 1;
    function ps(r) {
        return Ae[r] ?? Ae[sn];
    }
    function hi(r) {
        const e = r.replace("#", "");
        return {
            r: parseInt(e.slice(0, 2), 16),
            g: parseInt(e.slice(2, 4), 16),
            b: parseInt(e.slice(4, 6), 16)
        };
    }
    function xs(r) {
        return `#${(r & 16777215).toString(16).padStart(6, "0")}`;
    }
    function gt(r) {
        const e = r / 255;
        return e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4);
    }
    function ci(r, e, t) {
        const i = gt(r), n = gt(e), o = gt(t), a = Math.cbrt(.4122214708 * i + .5363325363 * n + .0514459929 * o), s = Math.cbrt(.2119034982 * i + .6806995451 * n + .1073969566 * o), c = Math.cbrt(.0883024619 * i + .2817188376 * n + .6299787005 * o);
        return [
            .2104542553 * a + .793617785 * s - .0040720468 * c,
            1.9779984951 * a - 2.428592205 * s + .4505937099 * c,
            .0259040371 * a + .7827717662 * s - .808675766 * c
        ];
    }
    function ys(r) {
        const e = ns(r);
        return e !== void 0 ? e : parseInt(ps(r).slice(1), 16);
    }
    function Ss(r) {
        const { r: e, g: t, b: i } = hi(xs(r)), [n, o, a] = ci(e, t, i);
        let s = sn, c = 1 / 0;
        for(let l = 0; l < Ae.length; l++){
            const h = hi(Ae[l]), [m, d, g] = ci(h.r, h.g, h.b), u = n - m, v = o - d, p = a - g, f = u * u + v * v + p * p;
            f < c && (c = f, s = l);
        }
        return s;
    }
    function Ms(r) {
        const e = Math.floor(r);
        return e >= 0 && e <= 255 ? e : Ss(r);
    }
    const _s = J.bucketKeyById;
    let He = null;
    function bs() {
        return He || (He = (async ()=>{
            const { VoxelMesher: e } = await import("./voxel_mesher-D8pJQEib.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), t = new Float32Array(256 * 3);
            for(let i = 0; i < 256; i++){
                const n = new Y(ys(Ms(i)));
                t[i * 3] = n.r, t[i * 3 + 1] = n.g, t[i * 3 + 2] = n.b;
            }
            return new e(J.bucketId, J.occlusionId, J.usesVertexColors, J.deformsSurface, J.preservesVoxelFaces, J.isVolumetric, t);
        })().catch((e)=>{
            throw He = null, e;
        })), He;
    }
    function D(r) {
        const { buffer: e } = r;
        if (e instanceof ArrayBuffer) return e;
        throw new Error("Cannot transfer SharedArrayBuffer-backed voxel geometry buffers.");
    }
    function ws(r) {
        return r instanceof Error ? r.message : String(r);
    }
    function mi(r, e, t) {
        self.postMessage({
            buildId: r,
            error: `Failed to ${e}: ${ws(t)}`
        });
    }
    self.onmessage = async (r)=>{
        const { buildId: e, terrain: t, voxels: i } = r.data;
        let n;
        try {
            n = await bs();
        } catch (o) {
            console.error("[voxel-build] WASM mesher init FAILED:", o), mi(e, "initialize the WebAssembly terrain mesher", o);
            return;
        }
        try {
            Fs(n, e, t, i);
        } catch (o) {
            console.error("[voxel-build] WASM build FAILED:", o), mi(e, "build the terrain geometry", o);
        }
    };
    function Fs(r, e, t, i) {
        const n = ss(t), o = r.build_from_svo(rs(i), t.Width, t.Height, t.Length, n), a = [], s = [];
        let c, l;
        try {
            const p = o.bucket_count();
            for(let f = 0; f < p; f++){
                const H = _s[o.bucket_id(f)], b = o.take_positions(f), M = o.take_normals(f), y = o.take_colors(f), _ = o.take_surface_deform(f), x = o.take_tile_heights(f), X = o.take_highlights(f), Z = o.take_indices(f);
                a.push({
                    key: H,
                    positions: b,
                    normals: M,
                    colors: y,
                    surfaceDeformStrength: _,
                    tileHeights: x,
                    highlightStrengths: X,
                    indices: Z
                }), s.push(D(b)), s.push(D(M)), y && s.push(D(y)), _ && s.push(D(_)), s.push(D(x)), s.push(D(X)), s.push(D(Z));
            }
            c = o.take_occupancy(), l = o.take_fog() ?? null;
        } finally{
            o.free();
        }
        const h = t.Width * n, m = t.Height * n, d = t.Length * n, g = {
            voxelWidth: h,
            voxelHeight: m,
            voxelLength: d,
            worldOriginX: -t.Width / 2,
            worldOriginY: -.5,
            worldOriginZ: -t.Length / 2,
            worldSizeX: t.Width,
            worldSizeY: t.Height,
            worldSizeZ: t.Length,
            voxelSize: 1 / n
        }, u = {
            data: c,
            ...g
        }, v = l ? {
            data: l,
            ...g
        } : null;
        s.push(D(u.data)), v && s.push(D(v.data)), self.postMessage({
            buildId: e,
            buckets: a,
            occupancy: u,
            fogVolume: v
        }, s);
    }
})();
