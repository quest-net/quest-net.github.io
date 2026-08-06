(async ()=>{
    const z = "srgb", Se = "srgb-linear", Oe = "linear", $t = "srgb";
    function we(o) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", o);
    }
    const Ie = {};
    function xi(o) {
        const t = o[0];
        if (typeof t == "string" && t.startsWith("TSL:")) {
            const e = o[1];
            e && e.isStackTrace ? o[0] += " " + e.getLocation() : o[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
        }
        return o;
    }
    function L(...o) {
        o = xi(o);
        const t = "THREE." + o.shift();
        {
            const e = o[0];
            e && e.isStackTrace ? console.warn(e.getError(t)) : console.warn(t, ...o);
        }
    }
    function Ne(...o) {
        o = xi(o);
        const t = "THREE." + o.shift();
        {
            const e = o[0];
            e && e.isStackTrace ? console.error(e.getError(t)) : console.error(t, ...o);
        }
    }
    function Ft(...o) {
        const t = o.join(" ");
        t in Ie || (Ie[t] = !0, L(...o));
    }
    class Ae {
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
                for(let n = 0, r = s.length; n < r; n++)s[n].call(this, t);
                t.target = null;
            }
        }
    }
    const T = [
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
    function Vt() {
        const o = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
        return (T[o & 255] + T[o >> 8 & 255] + T[o >> 16 & 255] + T[o >> 24 & 255] + "-" + T[t & 255] + T[t >> 8 & 255] + "-" + T[t >> 16 & 15 | 64] + T[t >> 24 & 255] + "-" + T[e & 63 | 128] + T[e >> 8 & 255] + "-" + T[e >> 16 & 255] + T[e >> 24 & 255] + T[i & 255] + T[i >> 8 & 255] + T[i >> 16 & 255] + T[i >> 24 & 255]).toLowerCase();
    }
    function v(o, t, e) {
        return Math.max(t, Math.min(e, o));
    }
    function zi(o, t) {
        return (o % t + t) % t;
    }
    function qt(o, t, e) {
        return (1 - e) * o + e * t;
    }
    class nt {
        static{
            nt.prototype.isVector2 = !0;
        }
        constructor(t = 0, e = 0){
            this.x = t, this.y = e;
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
                    throw new Error("THREE.Vector2: index is out of range: " + t);
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
                    throw new Error("THREE.Vector2: index is out of range: " + t);
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
            return this.x = v(this.x, t.x, e.x), this.y = v(this.y, t.y, e.y), this;
        }
        clampScalar(t, e) {
            return this.x = v(this.x, t, e), this.y = v(this.y, t, e), this;
        }
        clampLength(t, e) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(v(i, t, e));
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
            return Math.acos(v(i, -1, 1));
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
            const i = Math.cos(e), s = Math.sin(e), n = this.x - t.x, r = this.y - t.y;
            return this.x = n * i - r * s + t.x, this.y = n * s + r * i + t.y, this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y;
        }
    }
    class Ct {
        constructor(t = 0, e = 0, i = 0, s = 1){
            this.isQuaternion = !0, this._x = t, this._y = e, this._z = i, this._w = s;
        }
        static slerpFlat(t, e, i, s, n, r, a) {
            let h = i[s + 0], l = i[s + 1], c = i[s + 2], u = i[s + 3], f = n[r + 0], d = n[r + 1], p = n[r + 2], m = n[r + 3];
            if (u !== m || h !== f || l !== d || c !== p) {
                let x = h * f + l * d + c * p + u * m;
                x < 0 && (f = -f, d = -d, p = -p, m = -m, x = -x);
                let g = 1 - a;
                if (x < .9995) {
                    const M = Math.acos(x), y = Math.sin(M);
                    g = Math.sin(g * M) / y, a = Math.sin(a * M) / y, h = h * g + f * a, l = l * g + d * a, c = c * g + p * a, u = u * g + m * a;
                } else {
                    h = h * g + f * a, l = l * g + d * a, c = c * g + p * a, u = u * g + m * a;
                    const M = 1 / Math.sqrt(h * h + l * l + c * c + u * u);
                    h *= M, l *= M, c *= M, u *= M;
                }
            }
            t[e] = h, t[e + 1] = l, t[e + 2] = c, t[e + 3] = u;
        }
        static multiplyQuaternionsFlat(t, e, i, s, n, r) {
            const a = i[s], h = i[s + 1], l = i[s + 2], c = i[s + 3], u = n[r], f = n[r + 1], d = n[r + 2], p = n[r + 3];
            return t[e] = a * p + c * u + h * d - l * f, t[e + 1] = h * p + c * f + l * u - a * d, t[e + 2] = l * p + c * d + a * f - h * u, t[e + 3] = c * p - a * u - h * f - l * d, t;
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
            const i = t._x, s = t._y, n = t._z, r = t._order, a = Math.cos, h = Math.sin, l = a(i / 2), c = a(s / 2), u = a(n / 2), f = h(i / 2), d = h(s / 2), p = h(n / 2);
            switch(r){
                case "XYZ":
                    this._x = f * c * u + l * d * p, this._y = l * d * u - f * c * p, this._z = l * c * p + f * d * u, this._w = l * c * u - f * d * p;
                    break;
                case "YXZ":
                    this._x = f * c * u + l * d * p, this._y = l * d * u - f * c * p, this._z = l * c * p - f * d * u, this._w = l * c * u + f * d * p;
                    break;
                case "ZXY":
                    this._x = f * c * u - l * d * p, this._y = l * d * u + f * c * p, this._z = l * c * p + f * d * u, this._w = l * c * u - f * d * p;
                    break;
                case "ZYX":
                    this._x = f * c * u - l * d * p, this._y = l * d * u + f * c * p, this._z = l * c * p - f * d * u, this._w = l * c * u + f * d * p;
                    break;
                case "YZX":
                    this._x = f * c * u + l * d * p, this._y = l * d * u + f * c * p, this._z = l * c * p - f * d * u, this._w = l * c * u - f * d * p;
                    break;
                case "XZY":
                    this._x = f * c * u - l * d * p, this._y = l * d * u - f * c * p, this._z = l * c * p + f * d * u, this._w = l * c * u + f * d * p;
                    break;
                default:
                    L("Quaternion: .setFromEuler() encountered an unknown order: " + r);
            }
            return e === !0 && this._onChangeCallback(), this;
        }
        setFromAxisAngle(t, e) {
            const i = e / 2, s = Math.sin(i);
            return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(i), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(t) {
            const e = t.elements, i = e[0], s = e[4], n = e[8], r = e[1], a = e[5], h = e[9], l = e[2], c = e[6], u = e[10], f = i + a + u;
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
        setFromUnitVectors(t, e) {
            let i = t.dot(e) + 1;
            return i < 1e-8 ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = i), this.normalize();
        }
        angleTo(t) {
            return 2 * Math.acos(Math.abs(v(this.dot(t), -1, 1)));
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
            const i = t._x, s = t._y, n = t._z, r = t._w, a = e._x, h = e._y, l = e._z, c = e._w;
            return this._x = i * c + r * a + s * l - n * h, this._y = s * c + r * h + n * a - i * l, this._z = n * c + r * l + i * h - s * a, this._w = r * c - i * a - s * h - n * l, this._onChangeCallback(), this;
        }
        slerp(t, e) {
            let i = t._x, s = t._y, n = t._z, r = t._w, a = this.dot(t);
            a < 0 && (i = -i, s = -s, n = -n, r = -r, a = -a);
            let h = 1 - e;
            if (a < .9995) {
                const l = Math.acos(a), c = Math.sin(l);
                h = Math.sin(h * l) / c, e = Math.sin(e * l) / c, this._x = this._x * h + i * e, this._y = this._y * h + s * e, this._z = this._z * h + n * e, this._w = this._w * h + r * e, this._onChangeCallback();
            } else this._x = this._x * h + i * e, this._y = this._y * h + s * e, this._z = this._z * h + n * e, this._w = this._w * h + r * e, this.normalize();
            return this;
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
        static{
            F.prototype.isVector3 = !0;
        }
        constructor(t = 0, e = 0, i = 0){
            this.x = t, this.y = e, this.z = i;
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
                    throw new Error("THREE.Vector3: index is out of range: " + t);
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
                    throw new Error("THREE.Vector3: index is out of range: " + t);
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
            return this.applyQuaternion(ke.setFromEuler(t));
        }
        applyAxisAngle(t, e) {
            return this.applyQuaternion(ke.setFromAxisAngle(t, e));
        }
        applyMatrix3(t) {
            const e = this.x, i = this.y, s = this.z, n = t.elements;
            return this.x = n[0] * e + n[3] * i + n[6] * s, this.y = n[1] * e + n[4] * i + n[7] * s, this.z = n[2] * e + n[5] * i + n[8] * s, this;
        }
        applyNormalMatrix(t) {
            return this.applyMatrix3(t).normalize();
        }
        applyMatrix4(t) {
            const e = this.x, i = this.y, s = this.z, n = t.elements, r = 1 / (n[3] * e + n[7] * i + n[11] * s + n[15]);
            return this.x = (n[0] * e + n[4] * i + n[8] * s + n[12]) * r, this.y = (n[1] * e + n[5] * i + n[9] * s + n[13]) * r, this.z = (n[2] * e + n[6] * i + n[10] * s + n[14]) * r, this;
        }
        applyQuaternion(t) {
            const e = this.x, i = this.y, s = this.z, n = t.x, r = t.y, a = t.z, h = t.w, l = 2 * (r * s - a * i), c = 2 * (a * e - n * s), u = 2 * (n * i - r * e);
            return this.x = e + h * l + r * u - a * c, this.y = i + h * c + a * l - n * u, this.z = s + h * u + n * c - r * l, this;
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
            return this.x = v(this.x, t.x, e.x), this.y = v(this.y, t.y, e.y), this.z = v(this.z, t.z, e.z), this;
        }
        clampScalar(t, e) {
            return this.x = v(this.x, t, e), this.y = v(this.y, t, e), this.z = v(this.z, t, e), this;
        }
        clampLength(t, e) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(v(i, t, e));
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
            const i = t.x, s = t.y, n = t.z, r = e.x, a = e.y, h = e.z;
            return this.x = s * h - n * a, this.y = n * r - i * h, this.z = i * a - s * r, this;
        }
        projectOnVector(t) {
            const e = t.lengthSq();
            if (e === 0) return this.set(0, 0, 0);
            const i = t.dot(this) / e;
            return this.copy(t).multiplyScalar(i);
        }
        projectOnPlane(t) {
            return Xt.copy(this).projectOnVector(t), this.sub(Xt);
        }
        reflect(t) {
            return this.sub(Xt.copy(t).multiplyScalar(2 * this.dot(t)));
        }
        angleTo(t) {
            const e = Math.sqrt(this.lengthSq() * t.lengthSq());
            if (e === 0) return Math.PI / 2;
            const i = this.dot(t) / e;
            return Math.acos(v(i, -1, 1));
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
    const Xt = new F, ke = new Ct;
    class gt {
        static{
            gt.prototype.isMatrix3 = !0;
        }
        constructor(t, e, i, s, n, r, a, h, l){
            this.elements = [
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1
            ], t !== void 0 && this.set(t, e, i, s, n, r, a, h, l);
        }
        set(t, e, i, s, n, r, a, h, l) {
            const c = this.elements;
            return c[0] = t, c[1] = s, c[2] = a, c[3] = e, c[4] = n, c[5] = h, c[6] = i, c[7] = r, c[8] = l, this;
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
            const i = t.elements, s = e.elements, n = this.elements, r = i[0], a = i[3], h = i[6], l = i[1], c = i[4], u = i[7], f = i[2], d = i[5], p = i[8], m = s[0], x = s[3], g = s[6], M = s[1], y = s[4], w = s[7], _ = s[2], b = s[5], S = s[8];
            return n[0] = r * m + a * M + h * _, n[3] = r * x + a * y + h * b, n[6] = r * g + a * w + h * S, n[1] = l * m + c * M + u * _, n[4] = l * x + c * y + u * b, n[7] = l * g + c * w + u * S, n[2] = f * m + d * M + p * _, n[5] = f * x + d * y + p * b, n[8] = f * g + d * w + p * S, this;
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
        }
        determinant() {
            const t = this.elements, e = t[0], i = t[1], s = t[2], n = t[3], r = t[4], a = t[5], h = t[6], l = t[7], c = t[8];
            return e * r * c - e * a * l - i * n * c + i * a * h + s * n * l - s * r * h;
        }
        invert() {
            const t = this.elements, e = t[0], i = t[1], s = t[2], n = t[3], r = t[4], a = t[5], h = t[6], l = t[7], c = t[8], u = c * r - a * l, f = a * h - c * n, d = l * n - r * h, p = e * u + i * f + s * d;
            if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const m = 1 / p;
            return t[0] = u * m, t[1] = (s * l - c * i) * m, t[2] = (a * i - s * r) * m, t[3] = f * m, t[4] = (c * e - s * h) * m, t[5] = (s * n - a * e) * m, t[6] = d * m, t[7] = (i * h - l * e) * m, t[8] = (r * e - i * n) * m, this;
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
        setUvTransform(t, e, i, s, n, r, a) {
            const h = Math.cos(n), l = Math.sin(n);
            return this.set(i * h, i * l, -i * (h * r + l * a) + r + t, -s * l, s * h, -s * (-l * r + h * a) + a + e, 0, 0, 1), this;
        }
        scale(t, e) {
            return Ft("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(Yt.makeScale(t, e)), this;
        }
        rotate(t) {
            return Ft("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(Yt.makeRotation(-t)), this;
        }
        translate(t, e) {
            return Ft("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(Yt.makeTranslation(t, e)), this;
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
    const Yt = new gt, He = new gt().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), De = new gt().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
    function Li() {
        const o = {
            enabled: !0,
            workingColorSpace: Se,
            spaces: {},
            convert: function(s, n, r) {
                return this.enabled === !1 || n === r || !n || !r || (this.spaces[n].transfer === $t && (s.r = rt(s.r), s.g = rt(s.g), s.b = rt(s.b)), this.spaces[n].primaries !== this.spaces[r].primaries && (s.applyMatrix3(this.spaces[n].toXYZ), s.applyMatrix3(this.spaces[r].fromXYZ)), this.spaces[r].transfer === $t && (s.r = wt(s.r), s.g = wt(s.g), s.b = wt(s.b))), s;
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
                return s === "" ? Oe : this.spaces[s].transfer;
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
                return Ft("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), o.workingToColorSpace(s, n);
            },
            toWorkingColorSpace: function(s, n) {
                return Ft("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), o.colorSpaceToWorking(s, n);
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
        return o.define({
            [Se]: {
                primaries: t,
                whitePoint: i,
                transfer: Oe,
                toXYZ: He,
                fromXYZ: De,
                luminanceCoefficients: e,
                workingColorSpaceConfig: {
                    unpackColorSpace: z
                },
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: z
                }
            },
            [z]: {
                primaries: t,
                whitePoint: i,
                transfer: $t,
                toXYZ: He,
                fromXYZ: De,
                luminanceCoefficients: e,
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: z
                }
            }
        }), o;
    }
    const D = Li();
    function rt(o) {
        return o < .04045 ? o * .0773993808 : Math.pow(o * .9478672986 + .0521327014, 2.4);
    }
    function wt(o) {
        return o < .0031308 ? o * 12.92 : 1.055 * Math.pow(o, .41666) - .055;
    }
    let yt;
    class Oi {
        static getDataURL(t, e = "image/png") {
            if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
            let i;
            if (t instanceof HTMLCanvasElement) i = t;
            else {
                yt === void 0 && (yt = we("canvas")), yt.width = t.width, yt.height = t.height;
                const s = yt.getContext("2d");
                t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0, t.width, t.height), i = yt;
            }
            return i.toDataURL(e);
        }
        static sRGBToLinear(t) {
            if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
                const e = we("canvas");
                e.width = t.width, e.height = t.height;
                const i = e.getContext("2d");
                i.drawImage(t, 0, 0, t.width, t.height);
                const s = i.getImageData(0, 0, t.width, t.height), n = s.data;
                for(let r = 0; r < n.length; r++)n[r] = rt(n[r] / 255) * 255;
                return i.putImageData(s, 0, 0), e;
            } else if (t.data) {
                const e = t.data.slice(0);
                for(let i = 0; i < e.length; i++)e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[i] = Math.floor(rt(e[i] / 255) * 255) : e[i] = rt(e[i]);
                return {
                    data: e,
                    width: t.width,
                    height: t.height
                };
            } else return L("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
        }
    }
    let Ii = 0;
    class Ni {
        constructor(t = null){
            this.isSource = !0, Object.defineProperty(this, "id", {
                value: Ii++
            }), this.uuid = Vt(), this.data = t, this.dataReady = !0, this.version = 0;
        }
        getSize(t) {
            const e = this.data;
            return typeof HTMLVideoElement < "u" && e instanceof HTMLVideoElement ? t.set(e.videoWidth, e.videoHeight, 0) : typeof VideoFrame < "u" && e instanceof VideoFrame ? t.set(e.displayWidth, e.displayHeight, 0) : e !== null ? t.set(e.width, e.height, e.depth || 0) : t.set(0, 0, 0), t;
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
                    for(let r = 0, a = s.length; r < a; r++)s[r].isDataTexture ? n.push(Zt(s[r].image)) : n.push(Zt(s[r]));
                } else n = Zt(s);
                i.url = n;
            }
            return e || (t.images[this.uuid] = i), i;
        }
    }
    function Zt(o) {
        return typeof HTMLImageElement < "u" && o instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && o instanceof ImageBitmap ? Oi.getDataURL(o) : o.data ? {
            data: Array.from(o.data),
            width: o.width,
            height: o.height,
            type: o.data.constructor.name
        } : (L("Texture: Unable to serialize Texture."), {});
    }
    let ki = 0;
    const Jt = new F;
    class ot extends Ae {
        constructor(t = ot.DEFAULT_IMAGE, e = ot.DEFAULT_MAPPING, i = 1001, s = 1001, n = 1006, r = 1008, a = 1023, h = 1009, l = ot.DEFAULT_ANISOTROPY, c = ""){
            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                value: ki++
            }), this.uuid = Vt(), this.name = "", this.source = new Ni(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = i, this.wrapT = s, this.magFilter = n, this.minFilter = r, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = h, this.offset = new nt(0, 0), this.repeat = new nt(1, 1), this.center = new nt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new gt, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = c, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.normalized = !1;
        }
        get width() {
            return this.source.getSize(Jt).x;
        }
        get height() {
            return this.source.getSize(Jt).y;
        }
        get depth() {
            return this.source.getSize(Jt).z;
        }
        get image() {
            return this.source.data;
        }
        set image(t) {
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
            return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.normalized = t.normalized, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isArrayTexture = t.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
        }
        setValues(t) {
            for(const e in t){
                const i = t[e];
                if (i === void 0) {
                    L(`Texture.setValues(): parameter '${e}' has value of undefined.`);
                    continue;
                }
                const s = this[e];
                if (s === void 0) {
                    L(`Texture.setValues(): property '${e}' does not exist.`);
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
                normalized: this.normalized,
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
    ot.DEFAULT_IMAGE = null;
    ot.DEFAULT_MAPPING = 300;
    ot.DEFAULT_ANISOTROPY = 1;
    class yi {
        static{
            yi.prototype.isVector4 = !0;
        }
        constructor(t = 0, e = 0, i = 0, s = 1){
            this.x = t, this.y = e, this.z = i, this.w = s;
        }
        get width() {
            return this.z;
        }
        set width(t) {
            this.z = t;
        }
        get height() {
            return this.w;
        }
        set height(t) {
            this.w = t;
        }
        set(t, e, i, s) {
            return this.x = t, this.y = e, this.z = i, this.w = s, this;
        }
        setScalar(t) {
            return this.x = t, this.y = t, this.z = t, this.w = t, this;
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
        setW(t) {
            return this.w = t, this;
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
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("THREE.Vector4: index is out of range: " + t);
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
                case 3:
                    return this.w;
                default:
                    throw new Error("THREE.Vector4: index is out of range: " + t);
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z, this.w);
        }
        copy(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
        }
        add(t) {
            return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
        }
        addScalar(t) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this;
        }
        addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
        }
        addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
        }
        sub(t) {
            return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
        }
        subScalar(t) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
        }
        subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
        }
        multiply(t) {
            return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
        }
        multiplyScalar(t) {
            return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
        }
        applyMatrix4(t) {
            const e = this.x, i = this.y, s = this.z, n = this.w, r = t.elements;
            return this.x = r[0] * e + r[4] * i + r[8] * s + r[12] * n, this.y = r[1] * e + r[5] * i + r[9] * s + r[13] * n, this.z = r[2] * e + r[6] * i + r[10] * s + r[14] * n, this.w = r[3] * e + r[7] * i + r[11] * s + r[15] * n, this;
        }
        divide(t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t);
        }
        setAxisAngleFromQuaternion(t) {
            this.w = 2 * Math.acos(t.w);
            const e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
        }
        setAxisAngleFromRotationMatrix(t) {
            let e, i, s, n;
            const h = t.elements, l = h[0], c = h[4], u = h[8], f = h[1], d = h[5], p = h[9], m = h[2], x = h[6], g = h[10];
            if (Math.abs(c - f) < .01 && Math.abs(u - m) < .01 && Math.abs(p - x) < .01) {
                if (Math.abs(c + f) < .1 && Math.abs(u + m) < .1 && Math.abs(p + x) < .1 && Math.abs(l + d + g - 3) < .1) return this.set(1, 0, 0, 0), this;
                e = Math.PI;
                const y = (l + 1) / 2, w = (d + 1) / 2, _ = (g + 1) / 2, b = (c + f) / 4, S = (u + m) / 4, E = (p + x) / 4;
                return y > w && y > _ ? y < .01 ? (i = 0, s = .707106781, n = .707106781) : (i = Math.sqrt(y), s = b / i, n = S / i) : w > _ ? w < .01 ? (i = .707106781, s = 0, n = .707106781) : (s = Math.sqrt(w), i = b / s, n = E / s) : _ < .01 ? (i = .707106781, s = .707106781, n = 0) : (n = Math.sqrt(_), i = S / n, s = E / n), this.set(i, s, n, e), this;
            }
            let M = Math.sqrt((x - p) * (x - p) + (u - m) * (u - m) + (f - c) * (f - c));
            return Math.abs(M) < .001 && (M = 1), this.x = (x - p) / M, this.y = (u - m) / M, this.z = (f - c) / M, this.w = Math.acos((l + d + g - 1) / 2), this;
        }
        setFromMatrixPosition(t) {
            const e = t.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
        }
        min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
        }
        max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
        }
        clamp(t, e) {
            return this.x = v(this.x, t.x, e.x), this.y = v(this.y, t.y, e.y), this.z = v(this.z, t.z, e.z), this.w = v(this.w, t.w, e.w), this;
        }
        clampScalar(t, e) {
            return this.x = v(this.x, t, e), this.y = v(this.y, t, e), this.z = v(this.z, t, e), this.w = v(this.w, t, e), this;
        }
        clampLength(t, e) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(v(i, t, e));
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
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
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
        setLength(t) {
            return this.normalize().multiplyScalar(t);
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
        }
        lerpVectors(t, e, i) {
            return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this.w = t.w + (e.w - t.w) * i, this;
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
        }
        fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
        }
        fromBufferAttribute(t, e) {
            return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z, yield this.w;
        }
    }
    class Hi extends ot {
        constructor(t = null, e = 1, i = 1, s = 1){
            super(null), this.isData3DTexture = !0, this.image = {
                data: t,
                width: e,
                height: i,
                depth: s
            }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    class at {
        static{
            at.prototype.isMatrix4 = !0;
        }
        constructor(t, e, i, s, n, r, a, h, l, c, u, f, d, p, m, x){
            this.elements = [
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
            ], t !== void 0 && this.set(t, e, i, s, n, r, a, h, l, c, u, f, d, p, m, x);
        }
        set(t, e, i, s, n, r, a, h, l, c, u, f, d, p, m, x) {
            const g = this.elements;
            return g[0] = t, g[4] = e, g[8] = i, g[12] = s, g[1] = n, g[5] = r, g[9] = a, g[13] = h, g[2] = l, g[6] = c, g[10] = u, g[14] = f, g[3] = d, g[7] = p, g[11] = m, g[15] = x, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
            return new at().fromArray(this.elements);
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
            return this.determinantAffine() === 0 ? (t.set(1, 0, 0), e.set(0, 1, 0), i.set(0, 0, 1), this) : (t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this);
        }
        makeBasis(t, e, i) {
            return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this;
        }
        extractRotation(t) {
            if (t.determinantAffine() === 0) return this.identity();
            const e = this.elements, i = t.elements, s = 1 / Mt.setFromMatrixColumn(t, 0).length(), n = 1 / Mt.setFromMatrixColumn(t, 1).length(), r = 1 / Mt.setFromMatrixColumn(t, 2).length();
            return e[0] = i[0] * s, e[1] = i[1] * s, e[2] = i[2] * s, e[3] = 0, e[4] = i[4] * n, e[5] = i[5] * n, e[6] = i[6] * n, e[7] = 0, e[8] = i[8] * r, e[9] = i[9] * r, e[10] = i[10] * r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromEuler(t) {
            const e = this.elements, i = t.x, s = t.y, n = t.z, r = Math.cos(i), a = Math.sin(i), h = Math.cos(s), l = Math.sin(s), c = Math.cos(n), u = Math.sin(n);
            if (t.order === "XYZ") {
                const f = r * c, d = r * u, p = a * c, m = a * u;
                e[0] = h * c, e[4] = -h * u, e[8] = l, e[1] = d + p * l, e[5] = f - m * l, e[9] = -a * h, e[2] = m - f * l, e[6] = p + d * l, e[10] = r * h;
            } else if (t.order === "YXZ") {
                const f = h * c, d = h * u, p = l * c, m = l * u;
                e[0] = f + m * a, e[4] = p * a - d, e[8] = r * l, e[1] = r * u, e[5] = r * c, e[9] = -a, e[2] = d * a - p, e[6] = m + f * a, e[10] = r * h;
            } else if (t.order === "ZXY") {
                const f = h * c, d = h * u, p = l * c, m = l * u;
                e[0] = f - m * a, e[4] = -r * u, e[8] = p + d * a, e[1] = d + p * a, e[5] = r * c, e[9] = m - f * a, e[2] = -r * l, e[6] = a, e[10] = r * h;
            } else if (t.order === "ZYX") {
                const f = r * c, d = r * u, p = a * c, m = a * u;
                e[0] = h * c, e[4] = p * l - d, e[8] = f * l + m, e[1] = h * u, e[5] = m * l + f, e[9] = d * l - p, e[2] = -l, e[6] = a * h, e[10] = r * h;
            } else if (t.order === "YZX") {
                const f = r * h, d = r * l, p = a * h, m = a * l;
                e[0] = h * c, e[4] = m - f * u, e[8] = p * u + d, e[1] = u, e[5] = r * c, e[9] = -a * c, e[2] = -l * c, e[6] = d * u + p, e[10] = f - m * u;
            } else if (t.order === "XZY") {
                const f = r * h, d = r * l, p = a * h, m = a * l;
                e[0] = h * c, e[4] = -u, e[8] = l * c, e[1] = f * u + m, e[5] = r * c, e[9] = d * u - p, e[2] = p * u - d, e[6] = a * c, e[10] = m * u + f;
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
        }
        makeRotationFromQuaternion(t) {
            return this.compose(Di, t, Wi);
        }
        lookAt(t, e, i) {
            const s = this.elements;
            return k.subVectors(t, e), k.lengthSq() === 0 && (k.z = 1), k.normalize(), ht.crossVectors(i, k), ht.lengthSq() === 0 && (Math.abs(i.z) === 1 ? k.x += 1e-4 : k.z += 1e-4, k.normalize(), ht.crossVectors(i, k)), ht.normalize(), Nt.crossVectors(k, ht), s[0] = ht.x, s[4] = Nt.x, s[8] = k.x, s[1] = ht.y, s[5] = Nt.y, s[9] = k.y, s[2] = ht.z, s[6] = Nt.z, s[10] = k.z, this;
        }
        multiply(t) {
            return this.multiplyMatrices(this, t);
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this);
        }
        multiplyMatrices(t, e) {
            const i = t.elements, s = e.elements, n = this.elements, r = i[0], a = i[4], h = i[8], l = i[12], c = i[1], u = i[5], f = i[9], d = i[13], p = i[2], m = i[6], x = i[10], g = i[14], M = i[3], y = i[7], w = i[11], _ = i[15], b = s[0], S = s[4], E = s[8], O = s[12], I = s[1], N = s[5], q = s[9], X = s[13], ut = s[2], A = s[6], Tt = s[10], Rt = s[14], zt = s[3], Lt = s[7], Ot = s[11], It = s[15];
            return n[0] = r * b + a * I + h * ut + l * zt, n[4] = r * S + a * N + h * A + l * Lt, n[8] = r * E + a * q + h * Tt + l * Ot, n[12] = r * O + a * X + h * Rt + l * It, n[1] = c * b + u * I + f * ut + d * zt, n[5] = c * S + u * N + f * A + d * Lt, n[9] = c * E + u * q + f * Tt + d * Ot, n[13] = c * O + u * X + f * Rt + d * It, n[2] = p * b + m * I + x * ut + g * zt, n[6] = p * S + m * N + x * A + g * Lt, n[10] = p * E + m * q + x * Tt + g * Ot, n[14] = p * O + m * X + x * Rt + g * It, n[3] = M * b + y * I + w * ut + _ * zt, n[7] = M * S + y * N + w * A + _ * Lt, n[11] = M * E + y * q + w * Tt + _ * Ot, n[15] = M * O + y * X + w * Rt + _ * It, this;
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
        }
        determinant() {
            const t = this.elements, e = t[0], i = t[4], s = t[8], n = t[12], r = t[1], a = t[5], h = t[9], l = t[13], c = t[2], u = t[6], f = t[10], d = t[14], p = t[3], m = t[7], x = t[11], g = t[15], M = h * d - l * f, y = a * d - l * u, w = a * f - h * u, _ = r * d - l * c, b = r * f - h * c, S = r * u - a * c;
            return e * (m * M - x * y + g * w) - i * (p * M - x * _ + g * b) + s * (p * y - m * _ + g * S) - n * (p * w - m * b + x * S);
        }
        determinantAffine() {
            const t = this.elements, e = t[0], i = t[4], s = t[8], n = t[1], r = t[5], a = t[9], h = t[2], l = t[6], c = t[10];
            return e * (r * c - a * l) - i * (n * c - a * h) + s * (n * l - r * h);
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
            const t = this.elements, e = t[0], i = t[1], s = t[2], n = t[3], r = t[4], a = t[5], h = t[6], l = t[7], c = t[8], u = t[9], f = t[10], d = t[11], p = t[12], m = t[13], x = t[14], g = t[15], M = e * a - i * r, y = e * h - s * r, w = e * l - n * r, _ = i * h - s * a, b = i * l - n * a, S = s * l - n * h, E = c * m - u * p, O = c * x - f * p, I = c * g - d * p, N = u * x - f * m, q = u * g - d * m, X = f * g - d * x, ut = M * X - y * q + w * N + _ * I - b * O + S * E;
            if (ut === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const A = 1 / ut;
            return t[0] = (a * X - h * q + l * N) * A, t[1] = (s * q - i * X - n * N) * A, t[2] = (m * S - x * b + g * _) * A, t[3] = (f * b - u * S - d * _) * A, t[4] = (h * I - r * X - l * O) * A, t[5] = (e * X - s * I + n * O) * A, t[6] = (x * w - p * S - g * y) * A, t[7] = (c * S - f * w + d * y) * A, t[8] = (r * q - a * I + l * E) * A, t[9] = (i * I - e * q - n * E) * A, t[10] = (p * b - m * w + g * M) * A, t[11] = (u * w - c * b - d * M) * A, t[12] = (a * O - r * N - h * E) * A, t[13] = (e * N - i * O + s * E) * A, t[14] = (m * y - p * _ - x * M) * A, t[15] = (c * _ - u * y + f * M) * A, this;
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
            const i = Math.cos(e), s = Math.sin(e), n = 1 - i, r = t.x, a = t.y, h = t.z, l = n * r, c = n * a;
            return this.set(l * r + i, l * a - s * h, l * h + s * a, 0, l * a + s * h, c * a + i, c * h - s * r, 0, l * h - s * a, c * h + s * r, n * h * h + i, 0, 0, 0, 0, 1), this;
        }
        makeScale(t, e, i) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
        }
        makeShear(t, e, i, s, n, r) {
            return this.set(1, i, n, 0, t, 1, r, 0, e, s, 1, 0, 0, 0, 0, 1), this;
        }
        compose(t, e, i) {
            const s = this.elements, n = e._x, r = e._y, a = e._z, h = e._w, l = n + n, c = r + r, u = a + a, f = n * l, d = n * c, p = n * u, m = r * c, x = r * u, g = a * u, M = h * l, y = h * c, w = h * u, _ = i.x, b = i.y, S = i.z;
            return s[0] = (1 - (m + g)) * _, s[1] = (d + w) * _, s[2] = (p - y) * _, s[3] = 0, s[4] = (d - w) * b, s[5] = (1 - (f + g)) * b, s[6] = (x + M) * b, s[7] = 0, s[8] = (p + y) * S, s[9] = (x - M) * S, s[10] = (1 - (f + m)) * S, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
        }
        decompose(t, e, i) {
            const s = this.elements;
            t.x = s[12], t.y = s[13], t.z = s[14];
            const n = this.determinantAffine();
            if (n === 0) return i.set(1, 1, 1), e.identity(), this;
            let r = Mt.set(s[0], s[1], s[2]).length();
            const a = Mt.set(s[4], s[5], s[6]).length(), h = Mt.set(s[8], s[9], s[10]).length();
            n < 0 && (r = -r), W.copy(this);
            const l = 1 / r, c = 1 / a, u = 1 / h;
            return W.elements[0] *= l, W.elements[1] *= l, W.elements[2] *= l, W.elements[4] *= c, W.elements[5] *= c, W.elements[6] *= c, W.elements[8] *= u, W.elements[9] *= u, W.elements[10] *= u, e.setFromRotationMatrix(W), i.x = r, i.y = a, i.z = h, this;
        }
        makePerspective(t, e, i, s, n, r, a = 2e3, h = !1) {
            const l = this.elements, c = 2 * n / (e - t), u = 2 * n / (i - s), f = (e + t) / (e - t), d = (i + s) / (i - s);
            let p, m;
            if (h) p = n / (r - n), m = r * n / (r - n);
            else if (a === 2e3) p = -(r + n) / (r - n), m = -2 * r * n / (r - n);
            else if (a === 2001) p = -r / (r - n), m = -r * n / (r - n);
            else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
            return l[0] = c, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = u, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = m, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
        }
        makeOrthographic(t, e, i, s, n, r, a = 2e3, h = !1) {
            const l = this.elements, c = 2 / (e - t), u = 2 / (i - s), f = -(e + t) / (e - t), d = -(i + s) / (i - s);
            let p, m;
            if (h) p = 1 / (r - n), m = r / (r - n);
            else if (a === 2e3) p = -2 / (r - n), m = -(r + n) / (r - n);
            else if (a === 2001) p = -1 / (r - n), m = -n / (r - n);
            else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
            return l[0] = c, l[4] = 0, l[8] = 0, l[12] = f, l[1] = 0, l[5] = u, l[9] = 0, l[13] = d, l[2] = 0, l[6] = 0, l[10] = p, l[14] = m, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
    const Mt = new F, W = new at, Di = new F(0, 0, 0), Wi = new F(1, 1, 1), ht = new F, Nt = new F, k = new F, We = new at, Ue = new Ct;
    class Et {
        constructor(t = 0, e = 0, i = 0, s = Et.DEFAULT_ORDER){
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
            const s = t.elements, n = s[0], r = s[4], a = s[8], h = s[1], l = s[5], c = s[9], u = s[2], f = s[6], d = s[10];
            switch(e){
                case "XYZ":
                    this._y = Math.asin(v(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-r, n)) : (this._x = Math.atan2(f, l), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-v(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(h, l)) : (this._y = Math.atan2(-u, n), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(v(f, -1, 1)), Math.abs(f) < .9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-r, l)) : (this._y = 0, this._z = Math.atan2(h, n));
                    break;
                case "ZYX":
                    this._y = Math.asin(-v(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(h, n)) : (this._x = 0, this._z = Math.atan2(-r, l));
                    break;
                case "YZX":
                    this._z = Math.asin(v(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-u, n)) : (this._x = 0, this._y = Math.atan2(a, d));
                    break;
                case "XZY":
                    this._z = Math.asin(-v(r, -1, 1)), Math.abs(r) < .9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(a, n)) : (this._x = Math.atan2(-c, d), this._y = 0);
                    break;
                default:
                    L("Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
            }
            return this._order = e, i === !0 && this._onChangeCallback(), this;
        }
        setFromQuaternion(t, e, i) {
            return We.makeRotationFromQuaternion(t), this.setFromRotationMatrix(We, e, i);
        }
        setFromVector3(t, e = this._order) {
            return this.set(t.x, t.y, t.z, e);
        }
        reorder(t) {
            return Ue.setFromEuler(this), this.setFromQuaternion(Ue, t);
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
    Et.DEFAULT_ORDER = "XYZ";
    class Ui {
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
    let Pi = 0;
    const Pe = new F, vt = new Ct, it = new at, kt = new F, bt = new F, Bi = new F, Vi = new Ct, Be = new F(1, 0, 0), Ve = new F(0, 1, 0), Ge = new F(0, 0, 1), $e = {
        type: "added"
    }, Gi = {
        type: "removed"
    }, _t = {
        type: "childadded",
        child: null
    }, Kt = {
        type: "childremoved",
        child: null
    };
    class ft extends Ae {
        constructor(){
            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                value: Pi++
            }), this.uuid = Vt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ft.DEFAULT_UP.clone();
            const t = new F, e = new Et, i = new Ct, s = new F(1, 1, 1);
            function n() {
                i.setFromEuler(e, !1);
            }
            function r() {
                e.setFromQuaternion(i, void 0, !1);
            }
            e._onChange(n), i._onChange(r), Object.defineProperties(this, {
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
                    value: new at
                },
                normalMatrix: {
                    value: new gt
                }
            }), this.matrix = new at, this.matrixWorld = new at, this.matrixAutoUpdate = ft.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Ui, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
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
            return vt.setFromAxisAngle(t, e), this.quaternion.multiply(vt), this;
        }
        rotateOnWorldAxis(t, e) {
            return vt.setFromAxisAngle(t, e), this.quaternion.premultiply(vt), this;
        }
        rotateX(t) {
            return this.rotateOnAxis(Be, t);
        }
        rotateY(t) {
            return this.rotateOnAxis(Ve, t);
        }
        rotateZ(t) {
            return this.rotateOnAxis(Ge, t);
        }
        translateOnAxis(t, e) {
            return Pe.copy(t).applyQuaternion(this.quaternion), this.position.add(Pe.multiplyScalar(e)), this;
        }
        translateX(t) {
            return this.translateOnAxis(Be, t);
        }
        translateY(t) {
            return this.translateOnAxis(Ve, t);
        }
        translateZ(t) {
            return this.translateOnAxis(Ge, t);
        }
        localToWorld(t) {
            return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(t) {
            return this.updateWorldMatrix(!0, !1), t.applyMatrix4(it.copy(this.matrixWorld).invert());
        }
        lookAt(t, e, i) {
            t.isVector3 ? kt.copy(t) : kt.set(t, e, i);
            const s = this.parent;
            this.updateWorldMatrix(!0, !1), bt.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? it.lookAt(bt, kt, this.up) : it.lookAt(kt, bt, this.up), this.quaternion.setFromRotationMatrix(it), s && (it.extractRotation(s.matrixWorld), vt.setFromRotationMatrix(it), this.quaternion.premultiply(vt.invert()));
        }
        add(t) {
            if (arguments.length > 1) {
                for(let e = 0; e < arguments.length; e++)this.add(arguments[e]);
                return this;
            }
            return t === this ? (Ne("Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent($e), _t.child = t, this.dispatchEvent(_t), _t.child = null) : Ne("Object3D.add: object not an instance of THREE.Object3D.", t), this);
        }
        remove(t) {
            if (arguments.length > 1) {
                for(let i = 0; i < arguments.length; i++)this.remove(arguments[i]);
                return this;
            }
            const e = this.children.indexOf(t);
            return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Gi), Kt.child = t, this.dispatchEvent(Kt), Kt.child = null), this;
        }
        removeFromParent() {
            const t = this.parent;
            return t !== null && t.remove(this), this;
        }
        clear() {
            return this.remove(...this.children);
        }
        attach(t) {
            return this.updateWorldMatrix(!0, !1), it.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), it.multiply(t.parent.matrixWorld)), t.applyMatrix4(it), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent($e), _t.child = t, this.dispatchEvent(_t), _t.child = null, this;
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
                const r = this.children[i].getObjectByProperty(t, e);
                if (r !== void 0) return r;
            }
        }
        getObjectsByProperty(t, e, i = []) {
            this[t] === e && i.push(this);
            const s = this.children;
            for(let n = 0, r = s.length; n < r; n++)s[n].getObjectsByProperty(t, e, i);
            return i;
        }
        getWorldPosition(t) {
            return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
        }
        getWorldQuaternion(t) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(bt, t, Bi), t;
        }
        getWorldScale(t) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(bt, Vi, t), t;
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
            this.matrix.compose(this.position, this.quaternion, this.scale);
            const t = this.pivot;
            if (t !== null) {
                const e = t.x, i = t.y, s = t.z, n = this.matrix.elements;
                n[12] += e - n[0] * e - n[4] * i - n[8] * s, n[13] += i - n[1] * e - n[5] * i - n[9] * s, n[14] += s - n[2] * e - n[6] * i - n[10] * s;
            }
            this.matrixWorldNeedsUpdate = !0;
        }
        updateMatrixWorld(t) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
            const e = this.children;
            for(let i = 0, s = e.length; i < s; i++)e[i].updateMatrixWorld(t);
        }
        updateWorldMatrix(t, e, i = !1) {
            const s = this.parent;
            if (t === !0 && s !== null && s.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || i) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, i = !0), e === !0) {
                const n = this.children;
                for(let r = 0, a = n.length; r < a; r++)n[r].updateWorldMatrix(!1, !0, i);
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
            s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), this.static !== !1 && (s.static = this.static), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.pivot !== null && (s.pivot = this.pivot.toArray()), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.morphTargetDictionary !== void 0 && (s.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (s.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.geometryInfo = this._geometryInfo.map((a)=>({
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
                const a = r(t.geometries), h = r(t.materials), l = r(t.textures), c = r(t.images), u = r(t.shapes), f = r(t.skeletons), d = r(t.animations), p = r(t.nodes);
                a.length > 0 && (i.geometries = a), h.length > 0 && (i.materials = h), l.length > 0 && (i.textures = l), c.length > 0 && (i.images = c), u.length > 0 && (i.shapes = u), f.length > 0 && (i.skeletons = f), d.length > 0 && (i.animations = d), p.length > 0 && (i.nodes = p);
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
        clone(t) {
            return new this.constructor().copy(this, t);
        }
        copy(t, e = !0) {
            if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.pivot = t.pivot !== null ? t.pivot.clone() : null, this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.static = t.static, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0) for(let i = 0; i < t.children.length; i++){
                const s = t.children[i];
                this.add(s.clone());
            }
            return this;
        }
    }
    ft.DEFAULT_UP = new F(0, 1, 0);
    ft.DEFAULT_MATRIX_AUTO_UPDATE = !0;
    ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
    const Mi = {
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
    }, ct = {
        h: 0,
        s: 0,
        l: 0
    }, Ht = {
        h: 0,
        s: 0,
        l: 0
    };
    function Qt(o, t, e) {
        return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? o + (t - o) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? o + (t - o) * 6 * (2 / 3 - e) : o;
    }
    class lt {
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
        setHex(t, e = z) {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, D.colorSpaceToWorking(this, e), this;
        }
        setRGB(t, e, i, s = D.workingColorSpace) {
            return this.r = t, this.g = e, this.b = i, D.colorSpaceToWorking(this, s), this;
        }
        setHSL(t, e, i, s = D.workingColorSpace) {
            if (t = zi(t, 1), e = v(e, 0, 1), i = v(i, 0, 1), e === 0) this.r = this.g = this.b = i;
            else {
                const n = i <= .5 ? i * (1 + e) : i + e - i * e, r = 2 * i - n;
                this.r = Qt(r, n, t + 1 / 3), this.g = Qt(r, n, t), this.b = Qt(r, n, t - 1 / 3);
            }
            return D.colorSpaceToWorking(this, s), this;
        }
        setStyle(t, e = z) {
            function i(n) {
                n !== void 0 && parseFloat(n) < 1 && L("Color: Alpha component of " + t + " will be ignored.");
            }
            let s;
            if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) {
                let n;
                const r = s[1], a = s[2];
                switch(r){
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
                        L("Color: Unknown color model " + t);
                }
            } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
                const n = s[1], r = n.length;
                if (r === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, e);
                if (r === 6) return this.setHex(parseInt(n, 16), e);
                L("Color: Invalid hex color " + t);
            } else if (t && t.length > 0) return this.setColorName(t, e);
            return this;
        }
        setColorName(t, e = z) {
            const i = Mi[t.toLowerCase()];
            return i !== void 0 ? this.setHex(i, e) : L("Color: Unknown color " + t), this;
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b);
        }
        copy(t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this;
        }
        copySRGBToLinear(t) {
            return this.r = rt(t.r), this.g = rt(t.g), this.b = rt(t.b), this;
        }
        copyLinearToSRGB(t) {
            return this.r = wt(t.r), this.g = wt(t.g), this.b = wt(t.b), this;
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
        }
        getHex(t = z) {
            return D.workingToColorSpace(R.copy(this), t), Math.round(v(R.r * 255, 0, 255)) * 65536 + Math.round(v(R.g * 255, 0, 255)) * 256 + Math.round(v(R.b * 255, 0, 255));
        }
        getHexString(t = z) {
            return ("000000" + this.getHex(t).toString(16)).slice(-6);
        }
        getHSL(t, e = D.workingColorSpace) {
            D.workingToColorSpace(R.copy(this), e);
            const i = R.r, s = R.g, n = R.b, r = Math.max(i, s, n), a = Math.min(i, s, n);
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
            return t.h = h, t.s = l, t.l = c, t;
        }
        getRGB(t, e = D.workingColorSpace) {
            return D.workingToColorSpace(R.copy(this), e), t.r = R.r, t.g = R.g, t.b = R.b, t;
        }
        getStyle(t = z) {
            D.workingToColorSpace(R.copy(this), t);
            const e = R.r, i = R.g, s = R.b;
            return t !== z ? `color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(i * 255)},${Math.round(s * 255)})`;
        }
        offsetHSL(t, e, i) {
            return this.getHSL(ct), this.setHSL(ct.h + t, ct.s + e, ct.l + i);
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
            this.getHSL(ct), t.getHSL(Ht);
            const i = qt(ct.h, Ht.h, e), s = qt(ct.s, Ht.s, e), n = qt(ct.l, Ht.l, e);
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
    const R = new lt;
    lt.NAMES = Mi;
    let $i = 0;
    class qi extends Ae {
        constructor(){
            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                value: $i++
            }), this.uuid = Vt(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new lt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
                    L(`Material: parameter '${e}' has value of undefined.`);
                    continue;
                }
                const s = this[e];
                if (s === void 0) {
                    L(`Material: '${e}' is not a property of THREE.${this.type}.`);
                    continue;
                }
                s && s.isColor ? s.set(i) : s && s.isVector2 && i && i.isVector2 || s && s.isEuler && i && i.isEuler || s && s.isVector3 && i && i.isVector3 ? s.copy(i) : this[e] = i;
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
            i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (i.sheenColorMap = this.sheenColorMap.toJSON(t).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (i.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (i.blending = this.blending), this.side !== 0 && (i.side = this.side), this.vertexColors === !0 && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = !0), this.blendSrc !== 204 && (i.blendSrc = this.blendSrc), this.blendDst !== 205 && (i.blendDst = this.blendDst), this.blendEquation !== 100 && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (i.depthFunc = this.depthFunc), this.depthTest === !1 && (i.depthTest = this.depthTest), this.depthWrite === !1 && (i.depthWrite = this.depthWrite), this.colorWrite === !1 && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (i.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (i.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === !0 && (i.alphaHash = !0), this.alphaToCoverage === !0 && (i.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0), this.forceSinglePass === !0 && (i.forceSinglePass = !0), this.allowOverride === !1 && (i.allowOverride = !1), this.wireframe === !0 && (i.wireframe = !0), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = !0), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
            function s(n) {
                const r = [];
                for(const a in n){
                    const h = n[a];
                    delete h.metadata, r.push(h);
                }
                return r;
            }
            if (e) {
                const n = s(t.textures), r = s(t.images);
                n.length > 0 && (i.textures = n), r.length > 0 && (i.images = r);
            }
            return i;
        }
        fromJSON(t, e) {
            if (t.uuid !== void 0 && (this.uuid = t.uuid), t.name !== void 0 && (this.name = t.name), t.color !== void 0 && this.color !== void 0 && this.color.setHex(t.color), t.roughness !== void 0 && (this.roughness = t.roughness), t.metalness !== void 0 && (this.metalness = t.metalness), t.sheen !== void 0 && (this.sheen = t.sheen), t.sheenColor !== void 0 && (this.sheenColor = new lt().setHex(t.sheenColor)), t.sheenRoughness !== void 0 && (this.sheenRoughness = t.sheenRoughness), t.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(t.emissive), t.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(t.specular), t.specularIntensity !== void 0 && (this.specularIntensity = t.specularIntensity), t.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(t.specularColor), t.shininess !== void 0 && (this.shininess = t.shininess), t.clearcoat !== void 0 && (this.clearcoat = t.clearcoat), t.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = t.clearcoatRoughness), t.dispersion !== void 0 && (this.dispersion = t.dispersion), t.iridescence !== void 0 && (this.iridescence = t.iridescence), t.iridescenceIOR !== void 0 && (this.iridescenceIOR = t.iridescenceIOR), t.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = t.iridescenceThicknessRange), t.transmission !== void 0 && (this.transmission = t.transmission), t.thickness !== void 0 && (this.thickness = t.thickness), t.attenuationDistance !== void 0 && (this.attenuationDistance = t.attenuationDistance), t.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(t.attenuationColor), t.anisotropy !== void 0 && (this.anisotropy = t.anisotropy), t.anisotropyRotation !== void 0 && (this.anisotropyRotation = t.anisotropyRotation), t.fog !== void 0 && (this.fog = t.fog), t.flatShading !== void 0 && (this.flatShading = t.flatShading), t.blending !== void 0 && (this.blending = t.blending), t.combine !== void 0 && (this.combine = t.combine), t.side !== void 0 && (this.side = t.side), t.shadowSide !== void 0 && (this.shadowSide = t.shadowSide), t.opacity !== void 0 && (this.opacity = t.opacity), t.transparent !== void 0 && (this.transparent = t.transparent), t.alphaTest !== void 0 && (this.alphaTest = t.alphaTest), t.alphaHash !== void 0 && (this.alphaHash = t.alphaHash), t.depthFunc !== void 0 && (this.depthFunc = t.depthFunc), t.depthTest !== void 0 && (this.depthTest = t.depthTest), t.depthWrite !== void 0 && (this.depthWrite = t.depthWrite), t.colorWrite !== void 0 && (this.colorWrite = t.colorWrite), t.blendSrc !== void 0 && (this.blendSrc = t.blendSrc), t.blendDst !== void 0 && (this.blendDst = t.blendDst), t.blendEquation !== void 0 && (this.blendEquation = t.blendEquation), t.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = t.blendSrcAlpha), t.blendDstAlpha !== void 0 && (this.blendDstAlpha = t.blendDstAlpha), t.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = t.blendEquationAlpha), t.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(t.blendColor), t.blendAlpha !== void 0 && (this.blendAlpha = t.blendAlpha), t.stencilWriteMask !== void 0 && (this.stencilWriteMask = t.stencilWriteMask), t.stencilFunc !== void 0 && (this.stencilFunc = t.stencilFunc), t.stencilRef !== void 0 && (this.stencilRef = t.stencilRef), t.stencilFuncMask !== void 0 && (this.stencilFuncMask = t.stencilFuncMask), t.stencilFail !== void 0 && (this.stencilFail = t.stencilFail), t.stencilZFail !== void 0 && (this.stencilZFail = t.stencilZFail), t.stencilZPass !== void 0 && (this.stencilZPass = t.stencilZPass), t.stencilWrite !== void 0 && (this.stencilWrite = t.stencilWrite), t.wireframe !== void 0 && (this.wireframe = t.wireframe), t.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = t.wireframeLinewidth), t.wireframeLinecap !== void 0 && (this.wireframeLinecap = t.wireframeLinecap), t.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = t.wireframeLinejoin), t.rotation !== void 0 && (this.rotation = t.rotation), t.linewidth !== void 0 && (this.linewidth = t.linewidth), t.dashSize !== void 0 && (this.dashSize = t.dashSize), t.gapSize !== void 0 && (this.gapSize = t.gapSize), t.scale !== void 0 && (this.scale = t.scale), t.polygonOffset !== void 0 && (this.polygonOffset = t.polygonOffset), t.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = t.polygonOffsetFactor), t.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = t.polygonOffsetUnits), t.dithering !== void 0 && (this.dithering = t.dithering), t.alphaToCoverage !== void 0 && (this.alphaToCoverage = t.alphaToCoverage), t.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = t.premultipliedAlpha), t.forceSinglePass !== void 0 && (this.forceSinglePass = t.forceSinglePass), t.allowOverride !== void 0 && (this.allowOverride = t.allowOverride), t.visible !== void 0 && (this.visible = t.visible), t.toneMapped !== void 0 && (this.toneMapped = t.toneMapped), t.userData !== void 0 && (this.userData = t.userData), t.vertexColors !== void 0 && (typeof t.vertexColors == "number" ? this.vertexColors = t.vertexColors > 0 : this.vertexColors = t.vertexColors), t.size !== void 0 && (this.size = t.size), t.sizeAttenuation !== void 0 && (this.sizeAttenuation = t.sizeAttenuation), t.map !== void 0 && (this.map = e[t.map] || null), t.matcap !== void 0 && (this.matcap = e[t.matcap] || null), t.alphaMap !== void 0 && (this.alphaMap = e[t.alphaMap] || null), t.bumpMap !== void 0 && (this.bumpMap = e[t.bumpMap] || null), t.bumpScale !== void 0 && (this.bumpScale = t.bumpScale), t.normalMap !== void 0 && (this.normalMap = e[t.normalMap] || null), t.normalMapType !== void 0 && (this.normalMapType = t.normalMapType), t.normalScale !== void 0) {
                let i = t.normalScale;
                Array.isArray(i) === !1 && (i = [
                    i,
                    i
                ]), this.normalScale = new nt().fromArray(i);
            }
            return t.displacementMap !== void 0 && (this.displacementMap = e[t.displacementMap] || null), t.displacementScale !== void 0 && (this.displacementScale = t.displacementScale), t.displacementBias !== void 0 && (this.displacementBias = t.displacementBias), t.roughnessMap !== void 0 && (this.roughnessMap = e[t.roughnessMap] || null), t.metalnessMap !== void 0 && (this.metalnessMap = e[t.metalnessMap] || null), t.emissiveMap !== void 0 && (this.emissiveMap = e[t.emissiveMap] || null), t.emissiveIntensity !== void 0 && (this.emissiveIntensity = t.emissiveIntensity), t.specularMap !== void 0 && (this.specularMap = e[t.specularMap] || null), t.specularIntensityMap !== void 0 && (this.specularIntensityMap = e[t.specularIntensityMap] || null), t.specularColorMap !== void 0 && (this.specularColorMap = e[t.specularColorMap] || null), t.envMap !== void 0 && (this.envMap = e[t.envMap] || null), t.envMapRotation !== void 0 && this.envMapRotation.fromArray(t.envMapRotation), t.envMapIntensity !== void 0 && (this.envMapIntensity = t.envMapIntensity), t.reflectivity !== void 0 && (this.reflectivity = t.reflectivity), t.refractionRatio !== void 0 && (this.refractionRatio = t.refractionRatio), t.lightMap !== void 0 && (this.lightMap = e[t.lightMap] || null), t.lightMapIntensity !== void 0 && (this.lightMapIntensity = t.lightMapIntensity), t.aoMap !== void 0 && (this.aoMap = e[t.aoMap] || null), t.aoMapIntensity !== void 0 && (this.aoMapIntensity = t.aoMapIntensity), t.gradientMap !== void 0 && (this.gradientMap = e[t.gradientMap] || null), t.clearcoatMap !== void 0 && (this.clearcoatMap = e[t.clearcoatMap] || null), t.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = e[t.clearcoatRoughnessMap] || null), t.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = e[t.clearcoatNormalMap] || null), t.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new nt().fromArray(t.clearcoatNormalScale)), t.iridescenceMap !== void 0 && (this.iridescenceMap = e[t.iridescenceMap] || null), t.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = e[t.iridescenceThicknessMap] || null), t.transmissionMap !== void 0 && (this.transmissionMap = e[t.transmissionMap] || null), t.thicknessMap !== void 0 && (this.thicknessMap = e[t.thicknessMap] || null), t.anisotropyMap !== void 0 && (this.anisotropyMap = e[t.anisotropyMap] || null), t.sheenColorMap !== void 0 && (this.sheenColorMap = e[t.sheenColorMap] || null), t.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = e[t.sheenRoughnessMap] || null), this;
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
            return this.clippingPlanes = i, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.allowOverride = t.allowOverride, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
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
    class H extends qi {
        constructor(t){
            super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = {
                STANDARD: ""
            }, this.color = new lt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new lt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new nt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Et, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
        }
        copy(t) {
            return super.copy(t), this.defines = {
                STANDARD: ""
            }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
        }
    }
    const jt = {
        enabled: !1,
        files: {},
        add: function(o, t) {
            this.enabled !== !1 && (qe(o) || (this.files[o] = t));
        },
        get: function(o) {
            if (this.enabled !== !1 && !qe(o)) return this.files[o];
        },
        remove: function(o) {
            delete this.files[o];
        },
        clear: function() {
            this.files = {};
        }
    };
    function qe(o) {
        try {
            const t = o.slice(o.indexOf(":") + 1);
            return new URL(t).protocol === "blob:";
        } catch  {
            return !1;
        }
    }
    class Xi {
        constructor(t, e, i){
            const s = this;
            let n = !1, r = 0, a = 0, h;
            const l = [];
            this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this._abortController = null, this.itemStart = function(c) {
                a++, n === !1 && s.onStart !== void 0 && s.onStart(c, r, a), n = !0;
            }, this.itemEnd = function(c) {
                r++, s.onProgress !== void 0 && s.onProgress(c, r, a), r === a && (n = !1, s.onLoad !== void 0 && s.onLoad());
            }, this.itemError = function(c) {
                s.onError !== void 0 && s.onError(c);
            }, this.resolveURL = function(c) {
                return c = c.normalize("NFC"), h ? h(c) : c;
            }, this.setURLModifier = function(c) {
                return h = c, this;
            }, this.addHandler = function(c, u) {
                return l.push(c, u), this;
            }, this.removeHandler = function(c) {
                const u = l.indexOf(c);
                return u !== -1 && l.splice(u, 2), this;
            }, this.getHandler = function(c) {
                for(let u = 0, f = l.length; u < f; u += 2){
                    const d = l[u], p = l[u + 1];
                    if (d.global && (d.lastIndex = 0), d.test(c)) return p;
                }
                return null;
            }, this.abort = function() {
                return this.abortController.abort(), this._abortController = null, this;
            };
        }
        get abortController() {
            return this._abortController || (this._abortController = new AbortController), this._abortController;
        }
    }
    const Yi = new Xi;
    class Ce {
        constructor(t){
            this.manager = t !== void 0 ? t : Yi, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }));
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
    Ce.DEFAULT_MATERIAL_NAME = "__DEFAULT";
    const St = new WeakMap;
    class Zi extends Ce {
        constructor(t){
            super(t);
        }
        load(t, e, i, s) {
            this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
            const n = this, r = jt.get(`image:${t}`);
            if (r !== void 0) {
                if (r.complete === !0) n.manager.itemStart(t), setTimeout(function() {
                    e && e(r), n.manager.itemEnd(t);
                }, 0);
                else {
                    let u = St.get(r);
                    u === void 0 && (u = [], St.set(r, u)), u.push({
                        onLoad: e,
                        onError: s
                    });
                }
                return r;
            }
            const a = we("img");
            function h() {
                c(), e && e(this);
                const u = St.get(this) || [];
                for(let f = 0; f < u.length; f++){
                    const d = u[f];
                    d.onLoad && d.onLoad(this);
                }
                St.delete(this), n.manager.itemEnd(t);
            }
            function l(u) {
                c(), s && s(u), jt.remove(`image:${t}`);
                const f = St.get(this) || [];
                for(let d = 0; d < f.length; d++){
                    const p = f[d];
                    p.onError && p.onError(u);
                }
                St.delete(this), n.manager.itemError(t), n.manager.itemEnd(t);
            }
            function c() {
                a.removeEventListener("load", h, !1), a.removeEventListener("error", l, !1);
            }
            return a.addEventListener("load", h, !1), a.addEventListener("error", l, !1), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), jt.add(`image:${t}`, a), n.manager.itemStart(t), a.src = t, a;
        }
    }
    class pt extends Ce {
        constructor(t){
            super(t);
        }
        load(t, e, i, s) {
            const n = new ot, r = new Zi(this.manager);
            return r.setCrossOrigin(this.crossOrigin), r.setPath(this.path), r.load(t, function(a) {
                n.image = a, n.needsUpdate = !0, e !== void 0 && e(n);
            }, i, s), n;
        }
    }
    class vi {
        static{
            vi.prototype.isMatrix2 = !0;
        }
        constructor(t, e, i, s){
            this.elements = [
                1,
                0,
                0,
                1
            ], t !== void 0 && this.set(t, e, i, s);
        }
        identity() {
            return this.set(1, 0, 0, 1), this;
        }
        fromArray(t, e = 0) {
            for(let i = 0; i < 4; i++)this.elements[i] = t[i + e];
            return this;
        }
        set(t, e, i, s) {
            const n = this.elements;
            return n[0] = t, n[2] = e, n[1] = i, n[3] = s, this;
        }
    }
    typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: "185"
        }
    }));
    typeof window < "u" && (window.__THREE__ ? L("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "185");
    const Ji = 256;
    function Ki(o, t = Ji) {
        let e = 1;
        for(; Math.ceil(o / e) > t;)e *= 2;
        return e;
    }
    let _i = {
        editorColors: new Map
    };
    function Qi(o) {
        _i = o;
    }
    function ji(o) {
        return _i.editorColors.get(o);
    }
    const ts = {
        DEFAULT: 1.25
    }, mt = {
        ROUGHNESS: .85,
        METALNESS: 0
    }, Ut = {
        RADIUS: ts.DEFAULT,
        CONE_SCALE: 2.6,
        FEATHER: .7,
        ACTOR_MARGIN: .6
    }, es = .25, Y = [
        "varying vec3 vVoxelAoWorldPosition;",
        "varying vec3 vVoxelAoWorldNormal;"
    ], Z = [
        "vVoxelAoWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
        "vVoxelAoWorldNormal = normalize(mat3(modelMatrix) * normal);"
    ], Si = (o)=>[
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
            `	return mix(${o.toFixed(2)}, 1.0, 1.0 - occ);`,
            "}"
        ], is = Si(.45), ss = Si(.52);
    function U(o = !1) {
        return o ? ss : is;
    }
    const C = "computeVoxelAo(vVoxelAoWorldPosition, vVoxelAoWorldNormal)";
    function J(o, t) {
        o.uniforms.voxelAoOccupancy = {
            value: t.texture
        }, o.uniforms.voxelAoOrigin = {
            value: t.origin
        }, o.uniforms.voxelAoSize = {
            value: t.size
        }, o.uniforms.voxelAoRadius = {
            value: es
        }, o.uniforms.voxelAoVoxelSize = {
            value: t.voxelSize
        };
    }
    let Dt = null;
    function ns() {
        if (Dt) return Dt;
        const o = new Uint8Array(4), t = new Hi(o, 1, 1, 1);
        return t.format = 1023, t.type = 1009, t.magFilter = 1003, t.minFilter = 1003, t.wrapS = 1001, t.wrapT = 1001, t.wrapR = 1001, t.generateMipmaps = !1, t.needsUpdate = !0, Dt = {
            texture: t,
            data: o,
            width: 1,
            heightLevels: 1,
            length: 1
        }, Dt;
    }
    const K = [
        "attribute float tileHeight;",
        "attribute float highlightStrength;",
        "varying float vMovementHighlightHeight;",
        "varying float vMovementHighlightStrength;"
    ], Q = [
        "vMovementHighlightHeight = tileHeight;",
        "vMovementHighlightStrength = highlightStrength;"
    ], j = [
        "uniform highp sampler3D movementHighlightMap;",
        "uniform vec2 movementHighlightSize;",
        "uniform float movementHighlightHeightLevels;",
        "uniform float uHighlightEnabled;",
        "varying float vMovementHighlightHeight;",
        "varying float vMovementHighlightStrength;"
    ], tt = [
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
    function et(o, t) {
        const e = t ?? ns();
        o.uniforms.movementHighlightMap = {
            value: e.texture
        }, o.uniforms.movementHighlightSize = {
            value: new nt(e.width, e.length)
        }, o.uniforms.movementHighlightHeightLevels = {
            value: e.heightLevels
        }, o.uniforms.uHighlightEnabled = {
            value: t ? 1 : 0
        };
    }
    function rs() {
        return {
            enabled: {
                value: 0
            },
            actorPos: {
                value: new F
            },
            camPos: {
                value: new F
            },
            radius: {
                value: Ut.RADIUS
            },
            coneScale: {
                value: Ut.CONE_SCALE
            },
            feather: {
                value: Ut.FEATHER
            },
            cutY: {
                value: 0
            },
            cutSign: {
                value: 1
            }
        };
    }
    let te = null;
    function os() {
        return te || (te = rs()), te;
    }
    const P = [
        "varying vec3 vHeroWorldPos;"
    ], B = [
        "vHeroWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;"
    ], V = [
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
        `	if (t <= 0.0 || t >= distAct - ${Ut.ACTOR_MARGIN.toFixed(3)}) return false;`,
        "	float radial = length((P - uHeroCamPos) - axis * t);",
        "	float coneR = uHeroRadius * mix(1.0, uHeroConeScale, 1.0 - t / distAct);",
        "	if (radial > coneR + uHeroFeather) return false;",
        "	float edge = smoothstep(coneR + uHeroFeather, coneR, radial);",
        "	return edge > heroDither(gl_FragCoord.xy);",
        "}"
    ], G = [
        "#include <clipping_planes_fragment>",
        "if (uHeroEnabled > 0.5 && heroOccluded(vHeroWorldPos)) discard;"
    ];
    function $(o, t) {
        const e = t ?? os();
        o.uniforms.uHeroEnabled = e.enabled, o.uniforms.uHeroActorPos = e.actorPos, o.uniforms.uHeroCamPos = e.camPos, o.uniforms.uHeroRadius = e.radius, o.uniforms.uHeroConeScale = e.coneScale, o.uniforms.uHeroFeather = e.feather, o.uniforms.uHeroCutY = e.cutY, o.uniforms.uHeroCutSign = e.cutSign;
    }
    function wi(o, t) {
        o.onBeforeCompile = (e)=>{
            $(e, t), e.vertexShader = e.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...P
            ].join(`
`)), e.vertexShader = e.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...B
            ].join(`
`)), e.fragmentShader = e.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...V
            ].join(`
`)), e.fragmentShader = e.fragmentShader.replace("#include <clipping_planes_fragment>", G.join(`
`));
        };
    }
    function as(o, t, e, i, s) {
        o.onBeforeCompile = (n)=>{
            J(n, t), et(n, e), $(n, i), n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Y,
                ...K,
                ...P
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Z,
                ...Q,
                ...B
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...U(s),
                ...j,
                ...V
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <clipping_planes_fragment>", G.join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", `#include <color_fragment>
diffuseColor.rgb *= ${C};`), n.fragmentShader = n.fragmentShader.replace("#include <dithering_fragment>", tt.join(`
`));
        };
    }
    const ls = (o)=>{
        const { movementHighlight: t, voxelAo: e, heroOcclusion: i, performanceMode: s = !1 } = o, n = new H({
            roughness: mt.ROUGHNESS,
            metalness: mt.METALNESS,
            vertexColors: !0
        });
        return as(n, e, t, i, s), {
            material: n,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Pt = {
        bucketKey: "default",
        occlusionGroup: "solid",
        shaderVersion: 4,
        factory: ls
    }, hs = "/materials/flesh_250/flesh_noise_64x64.png", cs = "#cc2244", us = .45, ds = .7, fs = 0, ps = .4, Xe = .5, ms = .25, gs = 1.2;
    let ee = null;
    function xs() {
        if (!ee) {
            const o = new pt().load(hs);
            o.colorSpace = Se, o.wrapS = 1e3, o.wrapT = 1e3, o.magFilter = 1006, o.minFilter = 1006, o.generateMipmaps = !1, ee = o;
        }
        return ee;
    }
    const ys = [
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
        `          + fleshAperiodicSin(t * ${Xe.toFixed(4)} - centeredDot * 1.2) * 0.4 * ${Xe.toFixed(4)}`,
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
    function Ms() {
        return [
            ...Y,
            "uniform float uFleshTime;"
        ];
    }
    function vs() {
        return [
            ...Z
        ];
    }
    function _s(o) {
        return [
            ...U(o),
            "uniform float uFleshTime;",
            "uniform sampler2D uFleshNoise;",
            "vec2 getFleshUv(vec3 worldPos, vec3 worldNormal) {",
            "    vec3 n = abs(normalize(worldNormal));",
            "    if (n.y >= n.x && n.y >= n.z) return worldPos.xz;",
            "    if (n.x >= n.z) return worldPos.zy;",
            "    return worldPos.xy;",
            "}",
            ys
        ];
    }
    function Ss(o) {
        return [
            "#include <color_fragment>",
            `vec2 fleshUvWorld = getFleshUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${us.toFixed(4)};`,
            `float fleshOriginalNoise = fleshFBM(fleshUvWorld, uFleshTime, ${o ? "false" : "true"});`,
            "float fleshNoise = clamp(fleshOriginalNoise, 0.0, 1.0);",
            `float fleshFluidNoiseAngle = fleshOriginalNoise * 13.05 + uFleshTime * ${ms.toFixed(4)};`,
            "vec2 fleshFluidOffset = vec2(",
            "    cos(fleshFluidNoiseAngle) + fleshOriginalNoise * 14.0,",
            `    sin(fleshFluidNoiseAngle) + uFleshTime * ${gs.toFixed(4)}`,
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
    const ws = [
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
    function bs() {
        return ws + `
` + tt.join(`
`);
    }
    function Fs(o, t, e, i, s, n, r) {
        o.onBeforeCompile = (a)=>{
            J(a, i), a.uniforms.uFleshTime = e, a.uniforms.uFleshNoise = {
                value: t
            }, et(a, s), $(a, n), a.vertexShader = a.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Ms(),
                ...K,
                ...P
            ].join(`
`)), a.vertexShader = a.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...vs(),
                ...Q,
                ...B
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ..._s(r),
                ...j,
                ...V
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <clipping_planes_fragment>", G.join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <color_fragment>", Ss(r).join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <dithering_fragment>", bs());
        };
    }
    const As = (o)=>{
        const { movementHighlight: t, voxelAo: e, heroOcclusion: i, performanceMode: s = !1 } = o, n = xs(), r = {
            value: 0
        }, a = new H({
            roughness: ds,
            metalness: fs,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return Fs(a, n, r, e, t, i, s), {
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
        factory: As,
        special: {
            paletteIndex: 250,
            label: "Flesh",
            swatchColor: cs
        }
    }, Es = "#cfd4dc", Ts = {
        bucketKey: "fog_251",
        occlusionGroup: "fog_251",
        shaderVersion: 1,
        passable: !0,
        volumetric: !0,
        special: {
            paletteIndex: 251,
            label: "Fog",
            swatchColor: Es
        }
    }, Rs = "#a8d8f0", zs = "#cce8ff", Ls = .05, Os = 0, Is = .22, Ns = (o)=>{
        const { heroOcclusion: t } = o, e = new H({
            color: zs,
            roughness: Ls,
            metalness: Os,
            vertexColors: !1,
            transparent: !0,
            opacity: Is,
            depthWrite: !1
        });
        return wi(e, t), {
            material: e,
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 2
        };
    }, ks = {
        bucketKey: "glass_246",
        occlusionGroup: "glass_246",
        shaderVersion: 3,
        geometry: {
            vertexColors: !1
        },
        factory: Ns,
        special: {
            paletteIndex: 246,
            label: "Glass",
            swatchColor: Rs,
            category: "buildings"
        }
    }, bi = "#CFB53B", ie = .6, se = [
        .9,
        .72,
        .12
    ], ne = [
        .6,
        .32,
        .04
    ], Hs = .5, Ds = 0, Ws = "#aa4400", Us = .25, Ps = [
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
    function Bs() {
        return [
            ...Y
        ];
    }
    function Vs() {
        return [
            ...Z
        ];
    }
    function Gs(o) {
        return [
            ...U(o),
            Ps,
            `const vec3 G_COL1 = vec3(${se[0].toFixed(3)}, ${se[1].toFixed(3)}, ${se[2].toFixed(3)});`,
            `const vec3 G_COL2 = vec3(${ne[0].toFixed(3)}, ${ne[1].toFixed(3)}, ${ne[2].toFixed(3)});`
        ];
    }
    function $s(o) {
        const t = [
            "vec3 gNrm = normalize(vVoxelAoWorldNormal);",
            "bool gIsBottom = gNrm.y < -0.5;",
            "vec2 gUv = vec2(0.0);",
            "if (!gIsBottom) {",
            "	if (abs(gNrm.x) > abs(gNrm.z) && abs(gNrm.x) > abs(gNrm.y)) {",
            `		gUv = vVoxelAoWorldPosition.zy * ${ie.toFixed(3)};`,
            "	} else if (abs(gNrm.z) > abs(gNrm.y)) {",
            `		gUv = vVoxelAoWorldPosition.xy * ${ie.toFixed(3)};`,
            "	} else {",
            `		gUv = vVoxelAoWorldPosition.xz * ${ie.toFixed(3)};`,
            "	}",
            "}"
        ], i = [
            "	vec2 gQ = vec2(0.0), gR = vec2(0.0);",
            `	${o ? "float gF = goldPatternLow(gUv, gQ, gR);" : "float gF = goldPattern(gUv, gQ, gR);"}`,
            "	vec3 gC = mix(G_COL1, vec3(0.0), pow(smoothstep(0., 0.9, gF), 2.));",
            "	gC += G_COL2 * pow(smoothstep(0., 0.8, dot(gQ, gR)*0.6), 3.) * 1.5;",
            "	gC *= pow(dot(gQ, gR) + 0.3, 3.);",
            "	gC *= gF * 1.5;",
            `	gC *= ${C};`,
            "	diffuseColor = vec4(gC, 1.0);"
        ];
        return [
            ...t,
            "if (gIsBottom) {",
            `	diffuseColor = vec4(G_COL2 * 0.3 * ${C}, 1.0);`,
            "} else {",
            ...i,
            "}"
        ];
    }
    function qs(o, t, e, i, s) {
        o.onBeforeCompile = (n)=>{
            J(n, t), et(n, e), $(n, i), n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Bs(),
                ...K,
                ...P
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Vs(),
                ...Q,
                ...B
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Gs(s),
                ...j,
                ...V
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", $s(s).join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <clipping_planes_fragment>", G.join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <dithering_fragment>", tt.join(`
`));
        };
    }
    const Xs = (o)=>{
        const { movementHighlight: t, voxelAo: e, heroOcclusion: i, performanceMode: s = !1 } = o, n = new H({
            color: bi,
            emissive: new lt(Ws),
            emissiveIntensity: Us,
            roughness: Hs,
            metalness: Ds,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return qs(n, e, t, i, s), {
            material: n,
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, Ys = {
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
    }, Ye = "/materials/grass_242/grass_02_base_1k.png", Zs = "/materials/grass_242/grass_02_normal_gl_1k.png", Js = "/materials/grass_242/grass_02_roughness_1k.png", Ks = "/materials/grass_242/grass_02_amibent_occlusion_1k.png", Qs = "#4f8f37", Ee = .75, js = 1.45, tn = .45, Ze = .86, be = 1, en = 8, sn = 1;
    let re = null, oe = null, ae = null, le = null, he = null;
    function At(o, t = !1) {
        return o.wrapS = 1e3, o.wrapT = 1e3, o.magFilter = 1006, o.minFilter = t ? 1006 : 1008, o.anisotropy = t ? sn : en, o.generateMipmaps = !t, o;
    }
    function nn(o) {
        if (o) {
            if (!oe) {
                const e = At(new pt().load(Ye), !0);
                e.colorSpace = z, oe = e;
            }
            return oe;
        }
        if (re) return re;
        const t = At(new pt().load(Ye), !1);
        return t.colorSpace = z, re = t, t;
    }
    function rn() {
        if (ae) return ae;
        const o = At(new pt().load(Zs), !1);
        return ae = o, o;
    }
    function on() {
        if (le) return le;
        const o = At(new pt().load(Js), !1);
        return le = o, o;
    }
    function an() {
        if (he) return he;
        const o = At(new pt().load(Ks), !1);
        return he = o, o;
    }
    function ln() {
        return [
            ...Y
        ];
    }
    function hn() {
        return [
            ...Z
        ];
    }
    function cn(o) {
        const t = [
            ...U(!1),
            "uniform sampler2D grassMap;"
        ];
        return o ? [
            ...U(!0),
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
    function un(o) {
        const t = [
            "#include <color_fragment>",
            `vec2 grassUv = getGrassUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Ee.toFixed(2)};`,
            "vec4 grassTexel = texture2D(grassMap, grassUv);",
            "diffuseColor.rgb *= grassTexel.rgb;",
            "diffuseColor.a *= grassTexel.a;",
            `diffuseColor.rgb *= ${C};`
        ];
        return o || t.splice(3, 0, "float grassMicroAo = mix(1.0, texture2D(grassAoMap, grassUv).r, " + tn.toFixed(2) + ");", "diffuseColor.rgb *= grassMicroAo;"), t;
    }
    function dn() {
        return [
            "#include <roughnessmap_fragment>",
            `vec2 grassRoughnessUv = getGrassUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Ee.toFixed(2)};`,
            "float grassRoughnessSample = texture2D(grassRoughnessMap, grassRoughnessUv).g;",
            `roughnessFactor = clamp(mix(${Ze.toFixed(2)}, ${be.toFixed(2)}, grassRoughnessSample), ${Ze.toFixed(2)}, ${be.toFixed(2)});`
        ];
    }
    function fn() {
        return [
            `vec2 grassNormalUv = getGrassUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Ee.toFixed(2)};`,
            "vec3 grassMapNormal = texture2D(grassNormalMap, grassNormalUv).xyz * 2.0 - 1.0;",
            `grassMapNormal.xy *= ${js.toFixed(2)};`,
            "normal = normalize(grassGetTangentFrame(-vViewPosition, normal, grassNormalUv) * normalize(grassMapNormal));"
        ];
    }
    function pn(o, t, e, i, s, n, r, a, h) {
        o.onBeforeCompile = (l)=>{
            J(l, n), l.uniforms.grassMap = {
                value: t
            }, !h && e && i && s && (l.uniforms.grassNormalMap = {
                value: e
            }, l.uniforms.grassRoughnessMap = {
                value: i
            }, l.uniforms.grassAoMap = {
                value: s
            }), et(l, r), $(l, a), l.vertexShader = l.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...ln(),
                ...K,
                ...P
            ].join(`
`)), l.vertexShader = l.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...hn(),
                ...Q,
                ...B
            ].join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...cn(h),
                ...j,
                ...V
            ].join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <color_fragment>", un(h).join(`
`)), h || (l.fragmentShader = l.fragmentShader.replace("#include <roughnessmap_fragment>", dn().join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <normal_fragment_maps>", fn().join(`
`))), l.fragmentShader = l.fragmentShader.replace("#include <clipping_planes_fragment>", G.join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <dithering_fragment>", tt.join(`
`));
        };
    }
    const mn = (o)=>{
        const { movementHighlight: t, voxelAo: e, heroOcclusion: i, performanceMode: s = !1 } = o, n = nn(s), r = s ? null : rn(), a = s ? null : on(), h = s ? null : an(), l = new H({
            roughness: be,
            metalness: mt.METALNESS,
            vertexColors: !1
        });
        return pn(l, n, r, a, h, e, t, i, s), {
            material: l,
            castShadow: !0,
            receiveShadow: !0
        };
    }, gn = {
        bucketKey: "grass_242",
        occlusionGroup: "solid",
        shaderVersion: 6,
        geometry: {
            vertexColors: !1
        },
        factory: mn,
        special: {
            paletteIndex: 242,
            label: "Grass",
            swatchColor: Qs,
            category: "nature"
        }
    };
    function Te(o, t = 8, e = 1) {
        let i = null, s = null;
        const n = (r)=>{
            const a = new pt().load(o);
            return a.colorSpace = z, a.wrapS = 1e3, a.wrapT = 1e3, a.magFilter = 1006, a.minFilter = r ? 1006 : 1008, a.anisotropy = r ? e : t, a.generateMipmaps = !r, a;
        };
        return (r)=>r ? s ??= n(!0) : i ??= n(!1);
    }
    const xn = "/materials/iron_bars_249/iron_bars_256x256.png", yn = "#6b6b6b", Mn = 1, vn = .55, _n = .45, Sn = .5, wn = Te(xn);
    function bn() {
        return [
            ...Y
        ];
    }
    function Fn() {
        return [
            ...Z
        ];
    }
    function An(o) {
        return [
            ...U(o),
            "uniform sampler2D ironBarsMap;",
            "vec2 getIronBarsUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function Cn() {
        return [
            "#include <color_fragment>",
            `vec2 ironBarsUv = getIronBarsUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Mn.toFixed(1)};`,
            "vec4 ironBarsTexel = texture2D(ironBarsMap, ironBarsUv);",
            "diffuseColor.rgb *= ironBarsTexel.rgb;",
            "diffuseColor.a *= ironBarsTexel.a;",
            `diffuseColor.rgb *= ${C};`
        ];
    }
    function En(o, t, e, i, s, n) {
        o.onBeforeCompile = (r)=>{
            J(r, e), r.uniforms.ironBarsMap = {
                value: t
            }, et(r, i), $(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...bn(),
                ...K,
                ...P
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Fn(),
                ...Q,
                ...B
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...An(n),
                ...j,
                ...V
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", Cn().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", G.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", tt.join(`
`));
        };
    }
    const Tn = (o)=>{
        const { movementHighlight: t, voxelAo: e, heroOcclusion: i, performanceMode: s = !1 } = o, n = wn(s), r = new H({
            roughness: vn,
            metalness: _n,
            vertexColors: !1,
            alphaTest: Sn
        });
        return En(r, n, e, t, i, s), {
            material: r,
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 2
        };
    }, Rn = {
        bucketKey: "ironbars_249",
        occlusionGroup: "ironbars_249",
        shaderVersion: 4,
        geometry: {
            vertexColors: !1
        },
        factory: Tn,
        special: {
            paletteIndex: 249,
            label: "Iron Bars",
            swatchColor: yn,
            category: "buildings"
        }
    }, Fi = "#cc3300", zn = 1.6, Ln = .85, ce = [
        .02,
        0,
        0
    ], ue = [
        .88,
        .22,
        0
    ], de = [
        1,
        .9,
        .25
    ], Je = .97, Ke = .9, On = .055, In = .018, Qe = 1.8, je = .35, ti = 1, ei = 1.5, ii = .4, Nn = .45, kn = 0, Hn = "#ff3300", Dn = 3.2, Wn = [
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
    function Un() {
        return [
            "attribute float surfaceDeformStrength;",
            ...Y,
            "uniform float uLavaTime;"
        ];
    }
    function Pn(o) {
        const t = o ? In : On;
        return [
            "vec3 lavaWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            `float lavaRippleA = sin(lavaWorld.x * ${Qe.toFixed(3)} + uLavaTime * ${je.toFixed(3)});`,
            `float lavaRippleB = cos(lavaWorld.z * ${Qe.toFixed(3)} * 1.17 + uLavaTime * ${je.toFixed(3)} * 0.83);`,
            `float lavaDisplacement = (lavaRippleA + lavaRippleB) * 0.5 * ${t.toFixed(4)} * surfaceDeformStrength;`,
            "transformed.y += lavaDisplacement;",
            ...Z
        ];
    }
    function Bn(o) {
        const t = [
            ...U(o),
            "uniform float uLavaTime;",
            `const vec3 L_CRUST  = vec3(${ce[0].toFixed(3)}, ${ce[1].toFixed(3)}, ${ce[2].toFixed(3)});`,
            `const vec3 L_MID    = vec3(${ue[0].toFixed(3)}, ${ue[1].toFixed(3)}, ${ue[2].toFixed(3)});`,
            `const vec3 L_BRIGHT = vec3(${de[0].toFixed(3)}, ${de[1].toFixed(3)}, ${de[2].toFixed(3)});`
        ];
        return o || t.push(Wn), t;
    }
    function Vn(o) {
        return o ? [
            "vec3 lNrm = normalize(vVoxelAoWorldNormal);",
            "bool lIsTop    = lNrm.y >  0.5;",
            "bool lIsBottom = lNrm.y < -0.5;",
            "if (lIsBottom) {",
            `	diffuseColor = vec4(L_CRUST * ${C}, ${Ke.toFixed(3)});`,
            "} else {",
            "float lGlow = 0.0;",
            "if (lIsTop) {",
            "	vec2 lUv = vVoxelAoWorldPosition.xz;",
            "	lGlow = 0.5 + 0.5 * sin(lUv.x * 2.8 + uLavaTime * 0.5 + cos(lUv.y * 1.6 + uLavaTime * 0.35));",
            "} else {",
            "	float lFallH = (abs(lNrm.x) > abs(lNrm.z)) ? vVoxelAoWorldPosition.z : vVoxelAoWorldPosition.x;",
            `	vec2 lFallUv = vec2(lFallH / ${ti.toFixed(3)}, vVoxelAoWorldPosition.y / ${ei.toFixed(3)} + uLavaTime * ${ii.toFixed(3)});`,
            "	float lFallA = 0.5 + 0.5 * sin(lFallUv.y * 5.2 + lFallUv.x * 1.8);",
            "	float lFallB = 0.5 + 0.5 * sin(lFallUv.y * 9.0 + uLavaTime * 0.4);",
            "	lGlow = clamp(lFallA * 0.65 + lFallB * 0.35, 0.0, 1.0);",
            "}",
            "vec3 lColor = mix(L_MID, L_BRIGHT, lGlow * 0.7);",
            `lColor *= ${C};`,
            `diffuseColor = vec4(lColor, ${Je.toFixed(3)});`,
            "}"
        ] : [
            "vec3 lNrm = normalize(vVoxelAoWorldNormal);",
            "bool lIsTop    = lNrm.y >  0.5;",
            "bool lIsBottom = lNrm.y < -0.5;",
            "float lGlowMask  = 0.0;",
            "float lCrustMask = 0.0;",
            "if (lIsBottom) {",
            `	diffuseColor = vec4(L_CRUST * ${C}, ${Ke.toFixed(3)});`,
            "} else {",
            "if (lIsTop) {",
            `	vec2 lUvCrust = vVoxelAoWorldPosition.xz / ${zn.toFixed(3)};`,
            `	vec2 lUvGlow  = vVoxelAoWorldPosition.xz / ${Ln.toFixed(3)};`,
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
            `	vec2 lFallUv = vec2(lFallH / ${ti.toFixed(3)}, lFallV / ${ei.toFixed(3)} + uLavaTime * ${ii.toFixed(3)});`,
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
            `diffuseColor = vec4(lColor, ${Je.toFixed(3)});`,
            "}"
        ];
    }
    function Gn() {
        return [
            "float lavaEmissivePulse = 0.78 + 0.22 * sin(uLavaTime * 1.05);",
            "totalEmissiveRadiance *= lavaEmissivePulse;"
        ];
    }
    function $n(o, t, e, i, s, n) {
        o.onBeforeCompile = (r)=>{
            J(r, e), r.uniforms.uLavaTime = t, et(r, i), $(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Un(),
                ...K,
                ...P
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Pn(n),
                ...Q,
                ...B
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Bn(n),
                ...j,
                ...V
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", Vn(n).join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <emissivemap_fragment>", Gn().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", G.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", tt.join(`
`));
        };
    }
    const qn = (o)=>{
        const { movementHighlight: t, voxelAo: e, heroOcclusion: i, performanceMode: s = !1 } = o, n = {
            value: 0
        }, r = new H({
            color: Fi,
            emissive: new lt(Hn),
            emissiveIntensity: Dn,
            roughness: Nn,
            metalness: kn,
            vertexColors: !1,
            transparent: !0,
            depthWrite: !0
        });
        return $n(r, n, e, t, i, s), {
            material: r,
            onAnimationFrame: (h)=>{
                n.value = h * .001;
            },
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 1
        };
    }, Xn = {
        bucketKey: "lava_245",
        occlusionGroup: "lava_245",
        shaderVersion: 4,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !0,
            deformSurface: !0
        },
        passable: !0,
        factory: qn,
        special: {
            paletteIndex: 245,
            label: "Lava",
            swatchColor: Fi,
            category: "liquids"
        }
    }, Fe = "#ffd166", Yn = .35, Zn = 0, Jn = 3.5, Kn = (o)=>{
        const { heroOcclusion: t } = o, e = new H({
            color: Fe,
            emissive: Fe,
            emissiveIntensity: Jn,
            roughness: Yn,
            metalness: Zn,
            vertexColors: !1
        });
        return wi(e, t), {
            material: e,
            castShadow: !1,
            receiveShadow: !1
        };
    }, Qn = {
        bucketKey: "light_243",
        occlusionGroup: "solid",
        shaderVersion: 3,
        geometry: {
            vertexColors: !1
        },
        passable: !0,
        factory: Kn,
        special: {
            paletteIndex: 243,
            label: "Light",
            swatchColor: Fe
        }
    }, Ai = "#A8B8C8", fe = .5, pe = [
        .8,
        .82,
        .86
    ], me = [
        .22,
        .3,
        .45
    ], jn = .35, tr = 0, er = [
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
    function ir() {
        return [
            ...Y
        ];
    }
    function sr() {
        return [
            ...Z
        ];
    }
    function nr(o) {
        return [
            ...U(o),
            er,
            `const vec3 S_COL1 = vec3(${pe[0].toFixed(3)}, ${pe[1].toFixed(3)}, ${pe[2].toFixed(3)});`,
            `const vec3 S_COL2 = vec3(${me[0].toFixed(3)}, ${me[1].toFixed(3)}, ${me[2].toFixed(3)});`
        ];
    }
    function rr(o) {
        const t = [
            "vec3 sNrm = normalize(vVoxelAoWorldNormal);",
            "bool sIsBottom = sNrm.y < -0.5;",
            "vec2 sUv = vec2(0.0);",
            "if (!sIsBottom) {",
            "	if (abs(sNrm.x) > abs(sNrm.z) && abs(sNrm.x) > abs(sNrm.y)) {",
            `		sUv = vVoxelAoWorldPosition.zy * ${fe.toFixed(3)};`,
            "	} else if (abs(sNrm.z) > abs(sNrm.y)) {",
            `		sUv = vVoxelAoWorldPosition.xy * ${fe.toFixed(3)};`,
            "	} else {",
            `		sUv = vVoxelAoWorldPosition.xz * ${fe.toFixed(3)};`,
            "	}",
            "}"
        ], i = [
            "	vec2 sQ = vec2(0.0), sR = vec2(0.0);",
            `	${o ? "float sF = silverPatternLow(sUv, sQ, sR);" : "float sF = silverPattern(sUv, sQ, sR);"}`,
            "	vec3 sC = mix(S_COL1, vec3(0.0), pow(smoothstep(0., 0.9, sF), 2.));",
            "	sC += S_COL2 * pow(smoothstep(0., 0.8, dot(sQ, sR)*0.6), 3.) * 1.5;",
            "	sC *= pow(dot(sQ, sR) + 0.3, 3.);",
            "	sC *= sF * 1.5;",
            `	sC *= ${C};`,
            "	diffuseColor = vec4(sC, 1.0);"
        ];
        return [
            ...t,
            "if (sIsBottom) {",
            `	diffuseColor = vec4(S_COL2 * 0.3 * ${C}, 1.0);`,
            "} else {",
            ...i,
            "}"
        ];
    }
    function or(o, t, e, i, s) {
        o.onBeforeCompile = (n)=>{
            J(n, t), et(n, e), $(n, i), n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...ir(),
                ...K,
                ...P
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...sr(),
                ...Q,
                ...B
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...nr(s),
                ...j,
                ...V
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", rr(s).join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <clipping_planes_fragment>", G.join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <dithering_fragment>", tt.join(`
`));
        };
    }
    const ar = (o)=>{
        const { movementHighlight: t, voxelAo: e, heroOcclusion: i, performanceMode: s = !1 } = o, n = new H({
            color: Ai,
            roughness: jn,
            metalness: tr,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return or(n, e, t, i, s), {
            material: n,
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, lr = {
        bucketKey: "silver_248",
        occlusionGroup: "solid",
        shaderVersion: 5,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !1,
            deformSurface: !1
        },
        factory: ar,
        special: {
            paletteIndex: 248,
            label: "Silver",
            swatchColor: Ai,
            category: "metals"
        }
    }, hr = "/materials/bricks_240/bricks_256x256.png", cr = "#8f8f8f", ur = 1, dr = Te(hr);
    function fr() {
        return [
            ...Y
        ];
    }
    function pr() {
        return [
            ...Z
        ];
    }
    function mr(o) {
        return [
            ...U(o),
            "uniform sampler2D stoneBricksMap;",
            "vec2 getStoneBricksUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function gr() {
        return [
            "#include <color_fragment>",
            `vec2 stoneBricksUv = getStoneBricksUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${ur.toFixed(1)};`,
            "vec4 stoneBricksTexel = texture2D(stoneBricksMap, stoneBricksUv);",
            "diffuseColor.rgb *= stoneBricksTexel.rgb;",
            "diffuseColor.a *= stoneBricksTexel.a;",
            `diffuseColor.rgb *= ${C};`
        ];
    }
    function xr(o, t, e, i, s, n) {
        o.onBeforeCompile = (r)=>{
            J(r, e), r.uniforms.stoneBricksMap = {
                value: t
            }, et(r, i), $(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...fr(),
                ...K,
                ...P
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...pr(),
                ...Q,
                ...B
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...mr(n),
                ...j,
                ...V
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", G.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", gr().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", tt.join(`
`));
        };
    }
    const yr = (o)=>{
        const { movementHighlight: t, voxelAo: e, heroOcclusion: i, performanceMode: s = !1 } = o, n = dr(s), r = new H({
            roughness: mt.ROUGHNESS,
            metalness: mt.METALNESS,
            vertexColors: !1
        });
        return xr(r, n, e, t, i, s), {
            material: r,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Mr = {
        bucketKey: "stonebricks_240",
        occlusionGroup: "solid",
        shaderVersion: 5,
        geometry: {
            vertexColors: !1
        },
        factory: yr,
        special: {
            paletteIndex: 240,
            label: "Stone Bricks",
            swatchColor: cr,
            category: "buildings"
        }
    }, vr = "#1a6699", _r = 2, Sr = 1.1, ge = [
        .9,
        .9,
        .95
    ], xe = [
        .1,
        .4,
        .6
    ], ye = [
        0,
        .2,
        .4
    ], si = .86, ni = .75, ri = .48, wr = .115, br = .045, oi = 2.4, ai = 1.6, li = .8, hi = 1.2, ci = 1.4, Fr = .2, Ar = 0, Cr = [
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
    function Er() {
        return [
            "attribute float surfaceDeformStrength;",
            ...Y,
            "uniform float uWaterTime;"
        ];
    }
    function Tr(o) {
        const t = o ? br : wr;
        return [
            "vec3 waterWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            `float waterRippleA = sin(waterWorld.x * ${oi.toFixed(3)} + uWaterTime * ${ai.toFixed(3)});`,
            `float waterRippleB = cos(waterWorld.z * ${oi.toFixed(3)} * 1.13 + uWaterTime * ${ai.toFixed(3)} * 0.87);`,
            `float waterDisplacement = (waterRippleA + waterRippleB) * 0.5 * ${t.toFixed(4)} * surfaceDeformStrength;`,
            "transformed.y += waterDisplacement;",
            ...Z
        ];
    }
    function Rr(o) {
        const t = [
            ...U(o),
            "uniform float uWaterTime;",
            `const vec3 W_FOAM = vec3(${ge[0].toFixed(3)}, ${ge[1].toFixed(3)}, ${ge[2].toFixed(3)});`,
            `const vec3 W_MAIN = vec3(${xe[0].toFixed(3)}, ${xe[1].toFixed(3)}, ${xe[2].toFixed(3)});`,
            `const vec3 W_DARK = vec3(${ye[0].toFixed(3)}, ${ye[1].toFixed(3)}, ${ye[2].toFixed(3)});`
        ];
        return o || t.push(Cr), t;
    }
    function zr(o) {
        return o ? [
            "vec3 wNrm = normalize(vVoxelAoWorldNormal);",
            "bool wIsTopSurface = wNrm.y > 0.5;",
            "bool wIsBottomSurface = wNrm.y < -0.5;",
            "if (wIsBottomSurface) {",
            `	diffuseColor = vec4(W_MAIN * ${C}, ${ri.toFixed(3)});`,
            "} else {",
            "float wWave = 0.0;",
            "float wFoamMask = 0.0;",
            "if (wIsTopSurface) {",
            "	vec2 wUv = vVoxelAoWorldPosition.xz;",
            "	wWave = 0.5 + 0.5 * sin(wUv.x * 4.0 + uWaterTime * 1.7 + cos(wUv.y * 2.0));",
            "	wFoamMask = smoothstep(0.88, 1.0, wWave);",
            "} else {",
            "	float wFallH = (abs(wNrm.x) > abs(wNrm.z)) ? vVoxelAoWorldPosition.z : vVoxelAoWorldPosition.x;",
            `	vec2 wFallUv = vec2(wFallH / ${li.toFixed(3)}, vVoxelAoWorldPosition.y / ${hi.toFixed(3)} + uWaterTime * ${ci.toFixed(3)});`,
            "	float wFallColumn = sin(wFallUv.x * 6.283);",
            "	float wFallA = 0.5 + 0.5 * sin(wFallUv.y * 6.283 + wFallColumn * 1.1);",
            "	float wFallB = 0.5 + 0.5 * sin(wFallUv.y * 11.0 + wFallUv.x * 2.3);",
            "	wWave = clamp(wFallA * 0.72 + wFallB * 0.28, 0.0, 1.0);",
            "	wFoamMask = 0.0;",
            "}",
            "vec3 wBody = mix(W_DARK, W_MAIN, wWave);",
            "vec3 wColor = mix(wBody, W_FOAM, wFoamMask * 0.65);",
            `wColor *= ${C};`,
            `float wAlpha = mix(${si.toFixed(3)}, ${ni.toFixed(3)}, wFoamMask);`,
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
            `	diffuseColor = vec4(W_MAIN * ${C}, ${ri.toFixed(3)});`,
            "} else {",
            "if (wIsTopSurface) {",
            `	vec2 wUvFoam   = vVoxelAoWorldPosition.xz / ${_r.toFixed(3)};`,
            `	vec2 wUvRipple = vVoxelAoWorldPosition.xz / ${Sr.toFixed(3)};`,
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
            `	vec2 wUvRipple = vec2(wFallH / ${li.toFixed(3)}, wFallV / ${hi.toFixed(3)} + uWaterTime * ${ci.toFixed(3)});`,
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
            `float wAlpha = mix(${si.toFixed(3)}, ${ni.toFixed(3)}, wFoamMask);`,
            "diffuseColor = vec4(wColor, wAlpha);",
            "}"
        ];
    }
    function Lr(o, t, e, i, s, n) {
        o.onBeforeCompile = (r)=>{
            J(r, e), r.uniforms.uWaterTime = t, et(r, i), $(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Er(),
                ...K,
                ...P
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Tr(n),
                ...Q,
                ...B
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Rr(n),
                ...j,
                ...V
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", zr(n).join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", G.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", tt.join(`
`));
        };
    }
    const Or = (o)=>{
        const { movementHighlight: t, voxelAo: e, heroOcclusion: i, performanceMode: s = !1 } = o, n = {
            value: 0
        }, r = new H({
            roughness: Fr,
            metalness: Ar,
            vertexColors: !1,
            transparent: !0,
            depthWrite: !0
        });
        return Lr(r, n, e, t, i, s), {
            material: r,
            onAnimationFrame: (h)=>{
                n.value = h * .001;
            },
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 1
        };
    }, Ir = {
        bucketKey: "water_241",
        occlusionGroup: "water_241",
        shaderVersion: 10,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !0,
            deformSurface: !0
        },
        passable: !0,
        factory: Or,
        special: {
            paletteIndex: 241,
            label: "Water",
            swatchColor: vr,
            category: "liquids"
        }
    }, Nr = "/materials/wood_244/wood_256x256.png", kr = "#8b5a2b", Hr = 1, Dr = Te(Nr);
    function Wr() {
        return [
            ...Y
        ];
    }
    function Ur() {
        return [
            ...Z
        ];
    }
    function Pr(o) {
        return [
            ...U(o),
            "uniform sampler2D woodMap;",
            "vec2 getWoodUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function Br() {
        return [
            "#include <color_fragment>",
            `vec2 woodUv = getWoodUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Hr.toFixed(1)};`,
            "vec4 woodTexel = texture2D(woodMap, woodUv);",
            "diffuseColor.rgb *= woodTexel.rgb;",
            "diffuseColor.a *= woodTexel.a;",
            `diffuseColor.rgb *= ${C};`
        ];
    }
    function Vr(o, t, e, i, s, n) {
        o.onBeforeCompile = (r)=>{
            J(r, e), r.uniforms.woodMap = {
                value: t
            }, et(r, i), $(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Wr(),
                ...K,
                ...P
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Ur(),
                ...Q,
                ...B
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Pr(n),
                ...j,
                ...V
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", Br().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", G.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", tt.join(`
`));
        };
    }
    const Gr = (o)=>{
        const { movementHighlight: t, voxelAo: e, heroOcclusion: i, performanceMode: s = !1 } = o, n = Dr(s), r = new H({
            roughness: mt.ROUGHNESS,
            metalness: mt.METALNESS,
            vertexColors: !1
        });
        return Vr(r, n, e, t, i, s), {
            material: r,
            castShadow: !0,
            receiveShadow: !0
        };
    }, $r = {
        bucketKey: "wood_244",
        occlusionGroup: "solid",
        shaderVersion: 4,
        geometry: {
            vertexColors: !1
        },
        factory: Gr,
        special: {
            paletteIndex: 244,
            label: "Wood",
            swatchColor: kr,
            category: "nature"
        }
    }, Re = [
        Pt,
        Mr,
        Ir,
        gn,
        Qn,
        $r,
        Xn,
        ks,
        Ys,
        lr,
        Rn,
        Cs,
        Ts
    ], xt = Re.filter((o)=>o.special !== void 0);
    xt.map((o)=>({
            index: o.special.paletteIndex,
            label: o.special.label,
            color: o.special.swatchColor,
            category: o.special.category ?? "miscellaneous"
        }));
    const qr = new Map(xt.map((o)=>[
            o.special.paletteIndex,
            o.bucketKey
        ])), Xr = Pt.occlusionGroup ?? Pt.bucketKey, Yr = new Map(xt.map((o)=>[
            o.special.paletteIndex,
            o.occlusionGroup ?? o.bucketKey
        ])), ze = new Map(xt.map((o)=>[
            o.special.paletteIndex,
            o.geometry
        ])), Le = Pt.geometry, Ci = new Set(xt.filter((o)=>o.passable === !0).map((o)=>o.special.paletteIndex));
    function Zr(o) {
        return Ci.has(o);
    }
    const Jr = new Set(xt.filter((o)=>o.volumetric === !0).map((o)=>o.special.paletteIndex));
    function Kr(o) {
        return Jr.has(o);
    }
    function Qr(o) {
        return qr.get(o) ?? "default";
    }
    function jr(o) {
        return Yr.get(o) ?? Xr;
    }
    function to(o) {
        return (ze.get(o) ?? Le)?.deformSurface === !0;
    }
    function eo(o) {
        return (ze.get(o) ?? Le)?.vertexColors !== !1;
    }
    function io(o) {
        return (ze.get(o) ?? Le)?.preserveVoxelFaces === !0;
    }
    function so() {
        const o = new Map, t = [], e = (f)=>{
            let d = o.get(f);
            return d === void 0 && (d = t.length, o.set(f, d), t.push(f)), d;
        }, i = new Map, s = (f)=>{
            let d = i.get(f);
            return d === void 0 && (d = i.size, i.set(f, d)), d;
        }, n = new Int32Array(256), r = new Int32Array(256), a = new Uint8Array(256), h = new Uint8Array(256), l = new Uint8Array(256), c = new Uint8Array(256), u = new Uint8Array(256);
        for(let f = 0; f < 256; f++)n[f] = e(Qr(f)), r[f] = s(jr(f)), a[f] = eo(f) ? 1 : 0, h[f] = to(f) ? 1 : 0, l[f] = io(f) ? 1 : 0, c[f] = Kr(f) ? 1 : 0, u[f] = Zr(f) ? 1 : 0;
        return {
            bucketId: n,
            occlusionId: r,
            usesVertexColors: a,
            deformsSurface: h,
            preservesVoxelFaces: l,
            isVolumetric: c,
            isPassable: u,
            bucketKeyById: t
        };
    }
    const dt = so(), no = new Map(xt.map((o)=>[
            o.special.paletteIndex,
            parseInt(o.special.swatchColor.slice(1), 16)
        ]));
    Qi({
        passableIndices: Ci,
        editorColors: no
    });
    function ro(o) {
        const { bucketKey: t, shaderVersion: e, factory: i } = o;
        return (s)=>{
            const n = i(s), r = [
                "terrain",
                t,
                `v${e}`,
                s.performanceMode ? "perf" : "full"
            ].join("-");
            return n.material.customProgramCacheKey = ()=>r, n.material.needsUpdate = !0, n;
        };
    }
    {
        const o = new Set, t = new Set;
        for (const e of Re){
            if (o.has(e.bucketKey)) throw new Error(`Duplicate terrain material bucketKey: "${e.bucketKey}"`);
            if (o.add(e.bucketKey), e.special) {
                const { paletteIndex: i } = e.special;
                if (i < 240 || i > 255) throw new Error(`Special material "${e.bucketKey}" has paletteIndex ${i} outside the 240-255 range.`);
                if (t.has(i)) throw new Error(`Duplicate special material paletteIndex: ${i}`);
                t.add(i);
            }
        }
    }
    new Map(Re.filter((o)=>o.factory !== void 0).map((o)=>[
            o.bucketKey,
            ro(o)
        ]));
    const ui = 1;
    function oo(o) {
        return Math.max(ui, o.Resolution ?? ui);
    }
    const Gt = 12, di = .22, ao = .88, lo = .18, fi = .34, ho = .9, co = .98, uo = [
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
        }, (o, t)=>[
                lo,
                t * 20
            ])
    ];
    function Me(o) {
        const t = Math.max(0, Math.min(1, o));
        return t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055;
    }
    function ve(o) {
        return Math.round(Math.max(0, Math.min(1, o)) * 255).toString(16).padStart(2, "0");
    }
    function Ei(o, t, e) {
        const i = e * Math.PI / 180, s = t * Math.cos(i), n = t * Math.sin(i), r = o + .3963377774 * s + .2158037573 * n, a = o - .1055613458 * s - .0638541728 * n, h = o - .0894841775 * s - 1.291485548 * n, l = r ** 3, c = a ** 3, u = h ** 3;
        return [
            4.0767416621 * l - 3.3077115913 * c + .2309699292 * u,
            -1.2684380046 * l + 2.6097574011 * c - .3413193965 * u,
            -.0041960863 * l - .7034186147 * c + 1.707614701 * u
        ];
    }
    function fo(o, t, e) {
        const [i, s, n] = Ei(o, t, e), r = Me(i), a = Me(s), h = Me(n);
        return `#${ve(r)}${ve(a)}${ve(h)}`;
    }
    function po(o, t, e) {
        const [i, s, n] = Ei(o, t, e);
        return i >= 0 && i <= 1 && s >= 0 && s <= 1 && n >= 0 && n <= 1;
    }
    function mo(o, t) {
        let e = 0, i = .4;
        for(let s = 0; s < 16; s++){
            const n = (e + i) / 2;
            po(o, n, t) ? e = n : i = n;
        }
        return e * co;
    }
    function Ti(o) {
        const t = o / (Gt - 1);
        return di + t * (ao - di);
    }
    function go(o, t, e) {
        if (t <= 0 || e === null) return 0;
        const i = o / (Gt - 1), s = Math.pow(Math.sin(Math.PI * i), ho), n = t * (fi + (1 - fi) * s);
        return Math.min(n, mo(Ti(o), e));
    }
    function xo() {
        const o = [];
        for (const [t, e] of uo)for(let i = 0; i < Gt; i++){
            const s = Ti(i), n = go(i, t, e);
            o.push(fo(s, n, e ?? 0));
        }
        return o;
    }
    const Bt = xo(), Ri = Gt - 1;
    function yo(o) {
        return Bt[o] ?? Bt[Ri];
    }
    function pi(o) {
        const t = o.replace("#", "");
        return {
            r: parseInt(t.slice(0, 2), 16),
            g: parseInt(t.slice(2, 4), 16),
            b: parseInt(t.slice(4, 6), 16)
        };
    }
    function Mo(o) {
        return `#${(o & 16777215).toString(16).padStart(6, "0")}`;
    }
    function _e(o) {
        const t = o / 255;
        return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
    }
    function mi(o, t, e) {
        const i = _e(o), s = _e(t), n = _e(e), r = Math.cbrt(.4122214708 * i + .5363325363 * s + .0514459929 * n), a = Math.cbrt(.2119034982 * i + .6806995451 * s + .1073969566 * n), h = Math.cbrt(.0883024619 * i + .2817188376 * s + .6299787005 * n);
        return [
            .2104542553 * r + .793617785 * a - .0040720468 * h,
            1.9779984951 * r - 2.428592205 * a + .4505937099 * h,
            .0259040371 * r + .7827717662 * a - .808675766 * h
        ];
    }
    function vo(o) {
        const t = ji(o);
        return t !== void 0 ? t : parseInt(yo(o).slice(1), 16);
    }
    function _o(o) {
        const { r: t, g: e, b: i } = pi(Mo(o)), [s, n, r] = mi(t, e, i);
        let a = Ri, h = 1 / 0;
        for(let l = 0; l < Bt.length; l++){
            const c = pi(Bt[l]), [u, f, d] = mi(c.r, c.g, c.b), p = s - u, m = n - f, x = r - d, g = p * p + m * m + x * x;
            g < h && (h = g, a = l);
        }
        return a;
    }
    function So(o) {
        const t = Math.floor(o);
        return t >= 0 && t <= 255 ? t : _o(o);
    }
    const wo = dt.bucketKeyById;
    let Wt = null;
    function bo() {
        return Wt || (Wt = (async ()=>{
            const { VoxelMesher: t } = await import("./voxel_mesher-8kBYlObl.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), e = new Float32Array(256 * 3);
            for(let i = 0; i < 256; i++){
                const s = new lt(vo(So(i)));
                e[i * 3] = s.r, e[i * 3 + 1] = s.g, e[i * 3 + 2] = s.b;
            }
            return new t(dt.bucketId, dt.occlusionId, dt.usesVertexColors, dt.deformsSurface, dt.preservesVoxelFaces, dt.isVolumetric, e);
        })().catch((t)=>{
            throw Wt = null, t;
        })), Wt;
    }
    function st(o) {
        const { buffer: t } = o;
        if (t instanceof ArrayBuffer) return t;
        throw new Error("Cannot transfer SharedArrayBuffer-backed voxel geometry buffers.");
    }
    function Fo(o) {
        return o instanceof Error ? o.message : String(o);
    }
    function gi(o, t, e) {
        self.postMessage({
            buildId: o,
            error: `Failed to ${t}: ${Fo(e)}`
        });
    }
    self.onmessage = async (o)=>{
        const { buildId: t, terrain: e, voxels: i } = o.data;
        let s;
        try {
            s = await bo();
        } catch (n) {
            console.error("[voxel-build] WASM mesher init FAILED:", n), gi(t, "initialize the WebAssembly terrain mesher", n);
            return;
        }
        try {
            Ao(s, t, e, i);
        } catch (n) {
            console.error("[voxel-build] WASM build FAILED:", n), gi(t, "build the terrain geometry", n);
        }
    };
    function Ao(o, t, e, i) {
        const s = oo(e), n = Math.max(e.Width, e.Height, e.Length) * s, r = Ki(n), a = o.build_from_svo(i, e.Width, e.Height, e.Length, s, r), h = [], l = [];
        let c, u, f, d, p;
        try {
            const M = a.bucket_count();
            for(let y = 0; y < M; y++){
                const w = wo[a.bucket_id(y)], _ = a.take_positions(y), b = a.take_normals(y), S = a.take_colors(y), E = a.take_surface_deform(y), O = a.take_tile_heights(y), I = a.take_highlights(y), N = a.take_indices(y);
                h.push({
                    key: w,
                    positions: _,
                    normals: b,
                    colors: S,
                    surfaceDeformStrength: E,
                    tileHeights: O,
                    highlightStrengths: I,
                    indices: N
                }), l.push(st(_)), l.push(st(b)), S && l.push(st(S)), E && l.push(st(E)), l.push(st(O)), l.push(st(I)), l.push(st(N));
            }
            c = a.take_occupancy(), u = a.take_fog() ?? null, f = a.occupancy_width(), d = a.occupancy_height(), p = a.occupancy_length();
        } finally{
            a.free();
        }
        const m = {
            voxelWidth: f,
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
            ...m
        }, g = u ? {
            data: u,
            ...m
        } : null;
        l.push(st(x.data)), g && l.push(st(g.data)), self.postMessage({
            buildId: t,
            buckets: h,
            occupancy: x,
            fogVolume: g
        }, l);
    }
})();
