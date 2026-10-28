(async ()=>{
    const z = "srgb", Ct = "srgb-linear", Wt = "linear", Xe = "srgb";
    function At(o) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", o);
    }
    const Ut = {};
    function Ti(o) {
        const e = o[0];
        if (typeof e == "string" && e.startsWith("TSL:")) {
            const t = o[1];
            t && t.isStackTrace ? o[0] += " " + t.getLocation() : o[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
        }
        return o;
    }
    function O(...o) {
        o = Ti(o);
        const e = "THREE." + o.shift();
        {
            const t = o[0];
            t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...o);
        }
    }
    function Pt(...o) {
        o = Ti(o);
        const e = "THREE." + o.shift();
        {
            const t = o[0];
            t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...o);
        }
    }
    function Fe(...o) {
        const e = o.join(" ");
        e in Ut || (Ut[e] = !0, O(...o));
    }
    class Ot {
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
    function Ge() {
        const o = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
        return (T[o & 255] + T[o >> 8 & 255] + T[o >> 16 & 255] + T[o >> 24 & 255] + "-" + T[e & 255] + T[e >> 8 & 255] + "-" + T[e >> 16 & 15 | 64] + T[e >> 24 & 255] + "-" + T[t & 63 | 128] + T[t >> 8 & 255] + "-" + T[t >> 16 & 255] + T[t >> 24 & 255] + T[i & 255] + T[i >> 8 & 255] + T[i >> 16 & 255] + T[i >> 24 & 255]).toLowerCase();
    }
    function _(o, e, t) {
        return Math.max(e, Math.min(t, o));
    }
    function Ji(o, e) {
        return (o % e + e) % e;
    }
    function Ye(o, e, t) {
        return (1 - t) * o + t * e;
    }
    class ne {
        static{
            ne.prototype.isVector2 = !0;
        }
        constructor(e = 0, t = 0){
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
            switch(e){
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
            switch(e){
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
            return this.x = _(this.x, e.x, t.x), this.y = _(this.y, e.y, t.y), this;
        }
        clampScalar(e, t) {
            return this.x = _(this.x, e, t), this.y = _(this.y, e, t), this;
        }
        clampLength(e, t) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(_(i, e, t));
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
            return Math.acos(_(i, -1, 1));
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
    class Ae {
        constructor(e = 0, t = 0, i = 0, s = 1){
            this.isQuaternion = !0, this._x = e, this._y = t, this._z = i, this._w = s;
        }
        static slerpFlat(e, t, i, s, n, r, a) {
            let h = i[s + 0], l = i[s + 1], c = i[s + 2], u = i[s + 3], f = n[r + 0], d = n[r + 1], m = n[r + 2], p = n[r + 3];
            if (u !== p || h !== f || l !== d || c !== m) {
                let x = h * f + l * d + c * m + u * p;
                x < 0 && (f = -f, d = -d, m = -m, p = -p, x = -x);
                let g = 1 - a;
                if (x < .9995) {
                    const v = Math.acos(x), y = Math.sin(v);
                    g = Math.sin(g * v) / y, a = Math.sin(a * v) / y, h = h * g + f * a, l = l * g + d * a, c = c * g + m * a, u = u * g + p * a;
                } else {
                    h = h * g + f * a, l = l * g + d * a, c = c * g + m * a, u = u * g + p * a;
                    const v = 1 / Math.sqrt(h * h + l * l + c * c + u * u);
                    h *= v, l *= v, c *= v, u *= v;
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
                    O("Quaternion: .setFromEuler() encountered an unknown order: " + r);
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
            return 2 * Math.acos(Math.abs(_(this.dot(e), -1, 1)));
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
            let i = e._x, s = e._y, n = e._z, r = e._w, a = this.dot(e);
            a < 0 && (i = -i, s = -s, n = -n, r = -r, a = -a);
            let h = 1 - t;
            if (a < .9995) {
                const l = Math.acos(a), c = Math.sin(l);
                h = Math.sin(h * l) / c, t = Math.sin(t * l) / c, this._x = this._x * h + i * t, this._y = this._y * h + s * t, this._z = this._z * h + n * t, this._w = this._w * h + r * t, this._onChangeCallback();
            } else this._x = this._x * h + i * t, this._y = this._y * h + s * t, this._z = this._z * h + n * t, this._w = this._w * h + r * t, this.normalize();
            return this;
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
    class C {
        static{
            C.prototype.isVector3 = !0;
        }
        constructor(e = 0, t = 0, i = 0){
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
                    throw new Error("THREE.Vector3: index is out of range: " + e);
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
            return this.applyQuaternion(Bt.setFromEuler(e));
        }
        applyAxisAngle(e, t) {
            return this.applyQuaternion(Bt.setFromAxisAngle(e, t));
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
            return this.x = _(this.x, e.x, t.x), this.y = _(this.y, e.y, t.y), this.z = _(this.z, e.z, t.z), this;
        }
        clampScalar(e, t) {
            return this.x = _(this.x, e, t), this.y = _(this.y, e, t), this.z = _(this.z, e, t), this;
        }
        clampLength(e, t) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(_(i, e, t));
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
            return Ze.copy(this).projectOnVector(e), this.sub(Ze);
        }
        reflect(e) {
            return this.sub(Ze.copy(e).multiplyScalar(2 * this.dot(e)));
        }
        angleTo(e) {
            const t = Math.sqrt(this.lengthSq() * e.lengthSq());
            if (t === 0) return Math.PI / 2;
            const i = this.dot(e) / t;
            return Math.acos(_(i, -1, 1));
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
    const Ze = new C, Bt = new Ae;
    class xe {
        static{
            xe.prototype.isMatrix3 = !0;
        }
        constructor(e, t, i, s, n, r, a, h, l){
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
            const i = e.elements, s = t.elements, n = this.elements, r = i[0], a = i[3], h = i[6], l = i[1], c = i[4], u = i[7], f = i[2], d = i[5], m = i[8], p = s[0], x = s[3], g = s[6], v = s[1], y = s[4], w = s[7], S = s[2], b = s[5], M = s[8];
            return n[0] = r * p + a * v + h * S, n[3] = r * x + a * y + h * b, n[6] = r * g + a * w + h * M, n[1] = l * p + c * v + u * S, n[4] = l * x + c * y + u * b, n[7] = l * g + c * w + u * M, n[2] = f * p + d * v + m * S, n[5] = f * x + d * y + m * b, n[8] = f * g + d * w + m * M, this;
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
            return Fe("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(Ke.makeScale(e, t)), this;
        }
        rotate(e) {
            return Fe("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(Ke.makeRotation(-e)), this;
        }
        translate(e, t) {
            return Fe("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(Ke.makeTranslation(e, t)), this;
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
    const Ke = new xe, Vt = new xe().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), Gt = new xe().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
    function Qi() {
        const o = {
            enabled: !0,
            workingColorSpace: Ct,
            spaces: {},
            convert: function(s, n, r) {
                return this.enabled === !1 || n === r || !n || !r || (this.spaces[n].transfer === Xe && (s.r = re(s.r), s.g = re(s.g), s.b = re(s.b)), this.spaces[n].primaries !== this.spaces[r].primaries && (s.applyMatrix3(this.spaces[n].toXYZ), s.applyMatrix3(this.spaces[r].fromXYZ)), this.spaces[r].transfer === Xe && (s.r = we(s.r), s.g = we(s.g), s.b = we(s.b))), s;
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
                return s === "" ? Wt : this.spaces[s].transfer;
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
                return Fe("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), o.workingToColorSpace(s, n);
            },
            toWorkingColorSpace: function(s, n) {
                return Fe("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), o.colorSpaceToWorking(s, n);
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
            [Ct]: {
                primaries: e,
                whitePoint: i,
                transfer: Wt,
                toXYZ: Vt,
                fromXYZ: Gt,
                luminanceCoefficients: t,
                workingColorSpaceConfig: {
                    unpackColorSpace: z
                },
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: z
                }
            },
            [z]: {
                primaries: e,
                whitePoint: i,
                transfer: Xe,
                toXYZ: Vt,
                fromXYZ: Gt,
                luminanceCoefficients: t,
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: z
                }
            }
        }), o;
    }
    const X = Qi();
    function re(o) {
        return o < .04045 ? o * .0773993808 : Math.pow(o * .9478672986 + .0521327014, 2.4);
    }
    function we(o) {
        return o < .0031308 ? o * 12.92 : 1.055 * Math.pow(o, .41666) - .055;
    }
    let ye;
    class ji {
        static getDataURL(e, t = "image/png") {
            if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
            let i;
            if (e instanceof HTMLCanvasElement) i = e;
            else {
                ye === void 0 && (ye = At("canvas")), ye.width = e.width, ye.height = e.height;
                const s = ye.getContext("2d");
                e instanceof ImageData ? s.putImageData(e, 0, 0) : s.drawImage(e, 0, 0, e.width, e.height), i = ye;
            }
            return i.toDataURL(t);
        }
        static sRGBToLinear(e) {
            if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
                const t = At("canvas");
                t.width = e.width, t.height = e.height;
                const i = t.getContext("2d");
                i.drawImage(e, 0, 0, e.width, e.height);
                const s = i.getImageData(0, 0, e.width, e.height), n = s.data;
                for(let r = 0; r < n.length; r++)n[r] = re(n[r] / 255) * 255;
                return i.putImageData(s, 0, 0), t;
            } else if (e.data) {
                const t = e.data.slice(0);
                for(let i = 0; i < t.length; i++)t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(re(t[i] / 255) * 255) : t[i] = re(t[i]);
                return {
                    data: t,
                    width: e.width,
                    height: e.height
                };
            } else return O("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
        }
    }
    let es = 0;
    class ts {
        constructor(e = null){
            this.isSource = !0, Object.defineProperty(this, "id", {
                value: es++
            }), this.uuid = Ge(), this.data = e, this.dataReady = !0, this.version = 0;
        }
        getSize(e) {
            const t = this.data;
            return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
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
                    for(let r = 0, a = s.length; r < a; r++)s[r].isDataTexture ? n.push(Je(s[r].image)) : n.push(Je(s[r]));
                } else n = Je(s);
                i.url = n;
            }
            return t || (e.images[this.uuid] = i), i;
        }
    }
    function Je(o) {
        return typeof HTMLImageElement < "u" && o instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && o instanceof ImageBitmap ? ji.getDataURL(o) : o.data ? {
            data: Array.from(o.data),
            width: o.width,
            height: o.height,
            type: o.data.constructor.name
        } : (O("Texture: Unable to serialize Texture."), {});
    }
    let is = 0;
    const Qe = new C;
    class oe extends Ot {
        constructor(e = oe.DEFAULT_IMAGE, t = oe.DEFAULT_MAPPING, i = 1001, s = 1001, n = 1006, r = 1008, a = 1023, h = 1009, l = oe.DEFAULT_ANISOTROPY, c = ""){
            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                value: is++
            }), this.uuid = Ge(), this.name = "", this.source = new ts(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = i, this.wrapT = s, this.magFilter = n, this.minFilter = r, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = h, this.offset = new ne(0, 0), this.repeat = new ne(1, 1), this.center = new ne(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new xe, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = c, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0, this.normalized = !1;
        }
        get width() {
            return this.source.getSize(Qe).x;
        }
        get height() {
            return this.source.getSize(Qe).y;
        }
        get depth() {
            return this.source.getSize(Qe).z;
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
            return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
        }
        setValues(e) {
            for(const t in e){
                const i = e[t];
                if (i === void 0) {
                    O(`Texture.setValues(): parameter '${t}' has value of undefined.`);
                    continue;
                }
                const s = this[t];
                if (s === void 0) {
                    O(`Texture.setValues(): property '${t}' does not exist.`);
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
    oe.DEFAULT_IMAGE = null;
    oe.DEFAULT_MAPPING = 300;
    oe.DEFAULT_ANISOTROPY = 1;
    class Ri {
        static{
            Ri.prototype.isVector4 = !0;
        }
        constructor(e = 0, t = 0, i = 0, s = 1){
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
                case 3:
                    this.w = t;
                    break;
                default:
                    throw new Error("THREE.Vector4: index is out of range: " + e);
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
            const t = this.x, i = this.y, s = this.z, n = this.w, r = e.elements;
            return this.x = r[0] * t + r[4] * i + r[8] * s + r[12] * n, this.y = r[1] * t + r[5] * i + r[9] * s + r[13] * n, this.z = r[2] * t + r[6] * i + r[10] * s + r[14] * n, this.w = r[3] * t + r[7] * i + r[11] * s + r[15] * n, this;
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
            let t, i, s, n;
            const h = e.elements, l = h[0], c = h[4], u = h[8], f = h[1], d = h[5], m = h[9], p = h[2], x = h[6], g = h[10];
            if (Math.abs(c - f) < .01 && Math.abs(u - p) < .01 && Math.abs(m - x) < .01) {
                if (Math.abs(c + f) < .1 && Math.abs(u + p) < .1 && Math.abs(m + x) < .1 && Math.abs(l + d + g - 3) < .1) return this.set(1, 0, 0, 0), this;
                t = Math.PI;
                const y = (l + 1) / 2, w = (d + 1) / 2, S = (g + 1) / 2, b = (c + f) / 4, M = (u + p) / 4, E = (m + x) / 4;
                return y > w && y > S ? y < .01 ? (i = 0, s = .707106781, n = .707106781) : (i = Math.sqrt(y), s = b / i, n = M / i) : w > S ? w < .01 ? (i = .707106781, s = 0, n = .707106781) : (s = Math.sqrt(w), i = b / s, n = E / s) : S < .01 ? (i = .707106781, s = .707106781, n = 0) : (n = Math.sqrt(S), i = M / n, s = E / n), this.set(i, s, n, t), this;
            }
            let v = Math.sqrt((x - m) * (x - m) + (u - p) * (u - p) + (f - c) * (f - c));
            return Math.abs(v) < .001 && (v = 1), this.x = (x - m) / v, this.y = (u - p) / v, this.z = (f - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this;
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
            return this.x = _(this.x, e.x, t.x), this.y = _(this.y, e.y, t.y), this.z = _(this.z, e.z, t.z), this.w = _(this.w, e.w, t.w), this;
        }
        clampScalar(e, t) {
            return this.x = _(this.x, e, t), this.y = _(this.y, e, t), this.z = _(this.z, e, t), this.w = _(this.w, e, t), this;
        }
        clampLength(e, t) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(_(i, e, t));
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
    class ss extends oe {
        constructor(e = null, t = 1, i = 1, s = 1){
            super(null), this.isData3DTexture = !0, this.image = {
                data: e,
                width: t,
                height: i,
                depth: s
            }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
    }
    class ae {
        static{
            ae.prototype.isMatrix4 = !0;
        }
        constructor(e, t, i, s, n, r, a, h, l, c, u, f, d, m, p, x){
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
            return new ae().fromArray(this.elements);
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
            const t = this.elements, i = e.elements, s = 1 / ve.setFromMatrixColumn(e, 0).length(), n = 1 / ve.setFromMatrixColumn(e, 1).length(), r = 1 / ve.setFromMatrixColumn(e, 2).length();
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
            return this.compose(ns, e, rs);
        }
        lookAt(e, t, i) {
            const s = this.elements;
            return k.subVectors(e, t), k.lengthSq() === 0 && (k.z = 1), k.normalize(), ce.crossVectors(i, k), ce.lengthSq() === 0 && (Math.abs(i.z) === 1 ? k.x += 1e-4 : k.z += 1e-4, k.normalize(), ce.crossVectors(i, k)), ce.normalize(), Ne.crossVectors(k, ce), s[0] = ce.x, s[4] = Ne.x, s[8] = k.x, s[1] = ce.y, s[5] = Ne.y, s[9] = k.y, s[2] = ce.z, s[6] = Ne.z, s[10] = k.z, this;
        }
        multiply(e) {
            return this.multiplyMatrices(this, e);
        }
        premultiply(e) {
            return this.multiplyMatrices(e, this);
        }
        multiplyMatrices(e, t) {
            const i = e.elements, s = t.elements, n = this.elements, r = i[0], a = i[4], h = i[8], l = i[12], c = i[1], u = i[5], f = i[9], d = i[13], m = i[2], p = i[6], x = i[10], g = i[14], v = i[3], y = i[7], w = i[11], S = i[15], b = s[0], M = s[4], E = s[8], N = s[12], D = s[1], H = s[5], ee = s[9], te = s[13], de = s[2], A = s[6], Te = s[10], Re = s[14], Le = s[3], ze = s[7], Oe = s[11], Ie = s[15];
            return n[0] = r * b + a * D + h * de + l * Le, n[4] = r * M + a * H + h * A + l * ze, n[8] = r * E + a * ee + h * Te + l * Oe, n[12] = r * N + a * te + h * Re + l * Ie, n[1] = c * b + u * D + f * de + d * Le, n[5] = c * M + u * H + f * A + d * ze, n[9] = c * E + u * ee + f * Te + d * Oe, n[13] = c * N + u * te + f * Re + d * Ie, n[2] = m * b + p * D + x * de + g * Le, n[6] = m * M + p * H + x * A + g * ze, n[10] = m * E + p * ee + x * Te + g * Oe, n[14] = m * N + p * te + x * Re + g * Ie, n[3] = v * b + y * D + w * de + S * Le, n[7] = v * M + y * H + w * A + S * ze, n[11] = v * E + y * ee + w * Te + S * Oe, n[15] = v * N + y * te + w * Re + S * Ie, this;
        }
        multiplyScalar(e) {
            const t = this.elements;
            return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
        }
        determinant() {
            const e = this.elements, t = e[0], i = e[4], s = e[8], n = e[12], r = e[1], a = e[5], h = e[9], l = e[13], c = e[2], u = e[6], f = e[10], d = e[14], m = e[3], p = e[7], x = e[11], g = e[15], v = h * d - l * f, y = a * d - l * u, w = a * f - h * u, S = r * d - l * c, b = r * f - h * c, M = r * u - a * c;
            return t * (p * v - x * y + g * w) - i * (m * v - x * S + g * b) + s * (m * y - p * S + g * M) - n * (m * w - p * b + x * M);
        }
        determinantAffine() {
            const e = this.elements, t = e[0], i = e[4], s = e[8], n = e[1], r = e[5], a = e[9], h = e[2], l = e[6], c = e[10];
            return t * (r * c - a * l) - i * (n * c - a * h) + s * (n * l - r * h);
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
            const e = this.elements, t = e[0], i = e[1], s = e[2], n = e[3], r = e[4], a = e[5], h = e[6], l = e[7], c = e[8], u = e[9], f = e[10], d = e[11], m = e[12], p = e[13], x = e[14], g = e[15], v = t * a - i * r, y = t * h - s * r, w = t * l - n * r, S = i * h - s * a, b = i * l - n * a, M = s * l - n * h, E = c * p - u * m, N = c * x - f * m, D = c * g - d * m, H = u * x - f * p, ee = u * g - d * p, te = f * g - d * x, de = v * te - y * ee + w * H + S * D - b * N + M * E;
            if (de === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const A = 1 / de;
            return e[0] = (a * te - h * ee + l * H) * A, e[1] = (s * ee - i * te - n * H) * A, e[2] = (p * M - x * b + g * S) * A, e[3] = (f * b - u * M - d * S) * A, e[4] = (h * D - r * te - l * N) * A, e[5] = (t * te - s * D + n * N) * A, e[6] = (x * w - m * M - g * y) * A, e[7] = (c * M - f * w + d * y) * A, e[8] = (r * ee - a * D + l * E) * A, e[9] = (i * D - t * ee - n * E) * A, e[10] = (m * b - p * w + g * v) * A, e[11] = (u * w - c * b - d * v) * A, e[12] = (a * N - r * H - h * E) * A, e[13] = (t * H - i * N + s * E) * A, e[14] = (p * y - m * S - x * v) * A, e[15] = (c * S - u * y + f * v) * A, this;
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
            const s = this.elements, n = t._x, r = t._y, a = t._z, h = t._w, l = n + n, c = r + r, u = a + a, f = n * l, d = n * c, m = n * u, p = r * c, x = r * u, g = a * u, v = h * l, y = h * c, w = h * u, S = i.x, b = i.y, M = i.z;
            return s[0] = (1 - (p + g)) * S, s[1] = (d + w) * S, s[2] = (m - y) * S, s[3] = 0, s[4] = (d - w) * b, s[5] = (1 - (f + g)) * b, s[6] = (x + v) * b, s[7] = 0, s[8] = (m + y) * M, s[9] = (x - v) * M, s[10] = (1 - (f + p)) * M, s[11] = 0, s[12] = e.x, s[13] = e.y, s[14] = e.z, s[15] = 1, this;
        }
        decompose(e, t, i) {
            const s = this.elements;
            e.x = s[12], e.y = s[13], e.z = s[14];
            const n = this.determinantAffine();
            if (n === 0) return i.set(1, 1, 1), t.identity(), this;
            let r = ve.set(s[0], s[1], s[2]).length();
            const a = ve.set(s[4], s[5], s[6]).length(), h = ve.set(s[8], s[9], s[10]).length();
            n < 0 && (r = -r), Y.copy(this);
            const l = 1 / r, c = 1 / a, u = 1 / h;
            return Y.elements[0] *= l, Y.elements[1] *= l, Y.elements[2] *= l, Y.elements[4] *= c, Y.elements[5] *= c, Y.elements[6] *= c, Y.elements[8] *= u, Y.elements[9] *= u, Y.elements[10] *= u, t.setFromRotationMatrix(Y), i.x = r, i.y = a, i.z = h, this;
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
    const ve = new C, Y = new ae, ns = new C(0, 0, 0), rs = new C(1, 1, 1), ce = new C, Ne = new C, k = new C, $t = new ae, qt = new Ae;
    class Ee {
        constructor(e = 0, t = 0, i = 0, s = Ee.DEFAULT_ORDER){
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
                    this._y = Math.asin(_(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-r, n)) : (this._x = Math.atan2(f, l), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-_(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(h, l)) : (this._y = Math.atan2(-u, n), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(_(f, -1, 1)), Math.abs(f) < .9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-r, l)) : (this._y = 0, this._z = Math.atan2(h, n));
                    break;
                case "ZYX":
                    this._y = Math.asin(-_(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(f, d), this._z = Math.atan2(h, n)) : (this._x = 0, this._z = Math.atan2(-r, l));
                    break;
                case "YZX":
                    this._z = Math.asin(_(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-u, n)) : (this._x = 0, this._y = Math.atan2(a, d));
                    break;
                case "XZY":
                    this._z = Math.asin(-_(r, -1, 1)), Math.abs(r) < .9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(a, n)) : (this._x = Math.atan2(-c, d), this._y = 0);
                    break;
                default:
                    O("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
            }
            return this._order = t, i === !0 && this._onChangeCallback(), this;
        }
        setFromQuaternion(e, t, i) {
            return $t.makeRotationFromQuaternion(e), this.setFromRotationMatrix($t, t, i);
        }
        setFromVector3(e, t = this._order) {
            return this.set(e.x, e.y, e.z, t);
        }
        reorder(e) {
            return qt.setFromEuler(this), this.setFromQuaternion(qt, e);
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
    Ee.DEFAULT_ORDER = "XYZ";
    class os {
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
    let as = 0;
    const Xt = new C, _e = new Ae, ie = new ae, De = new C, be = new C, ls = new C, hs = new Ae, Yt = new C(1, 0, 0), Zt = new C(0, 1, 0), Kt = new C(0, 0, 1), Jt = {
        type: "added"
    }, cs = {
        type: "removed"
    }, Se = {
        type: "childadded",
        child: null
    }, je = {
        type: "childremoved",
        child: null
    };
    class me extends Ot {
        constructor(){
            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                value: as++
            }), this.uuid = Ge(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = me.DEFAULT_UP.clone();
            const e = new C, t = new Ee, i = new Ae, s = new C(1, 1, 1);
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
                    value: new ae
                },
                normalMatrix: {
                    value: new xe
                }
            }), this.matrix = new ae, this.matrixWorld = new ae, this.matrixAutoUpdate = me.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new os, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
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
            return _e.setFromAxisAngle(e, t), this.quaternion.multiply(_e), this;
        }
        rotateOnWorldAxis(e, t) {
            return _e.setFromAxisAngle(e, t), this.quaternion.premultiply(_e), this;
        }
        rotateX(e) {
            return this.rotateOnAxis(Yt, e);
        }
        rotateY(e) {
            return this.rotateOnAxis(Zt, e);
        }
        rotateZ(e) {
            return this.rotateOnAxis(Kt, e);
        }
        translateOnAxis(e, t) {
            return Xt.copy(e).applyQuaternion(this.quaternion), this.position.add(Xt.multiplyScalar(t)), this;
        }
        translateX(e) {
            return this.translateOnAxis(Yt, e);
        }
        translateY(e) {
            return this.translateOnAxis(Zt, e);
        }
        translateZ(e) {
            return this.translateOnAxis(Kt, e);
        }
        localToWorld(e) {
            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(e) {
            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(ie.copy(this.matrixWorld).invert());
        }
        lookAt(e, t, i) {
            e.isVector3 ? De.copy(e) : De.set(e, t, i);
            const s = this.parent;
            this.updateWorldMatrix(!0, !1), be.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ie.lookAt(be, De, this.up) : ie.lookAt(De, be, this.up), this.quaternion.setFromRotationMatrix(ie), s && (ie.extractRotation(s.matrixWorld), _e.setFromRotationMatrix(ie), this.quaternion.premultiply(_e.invert()));
        }
        add(e) {
            if (arguments.length > 1) {
                for(let t = 0; t < arguments.length; t++)this.add(arguments[t]);
                return this;
            }
            return e === this ? (Pt("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Jt), Se.child = e, this.dispatchEvent(Se), Se.child = null) : Pt("Object3D.add: object not an instance of THREE.Object3D.", e), this);
        }
        remove(e) {
            if (arguments.length > 1) {
                for(let i = 0; i < arguments.length; i++)this.remove(arguments[i]);
                return this;
            }
            const t = this.children.indexOf(e);
            return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(cs), je.child = e, this.dispatchEvent(je), je.child = null), this;
        }
        removeFromParent() {
            const e = this.parent;
            return e !== null && e.remove(this), this;
        }
        clear() {
            return this.remove(...this.children);
        }
        attach(e) {
            return this.updateWorldMatrix(!0, !1), ie.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), ie.multiply(e.parent.matrixWorld)), e.applyMatrix4(ie), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(Jt), Se.child = e, this.dispatchEvent(Se), Se.child = null, this;
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
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(be, e, ls), e;
        }
        getWorldScale(e) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(be, hs, e), e;
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
            this.matrix.compose(this.position, this.quaternion, this.scale);
            const e = this.pivot;
            if (e !== null) {
                const t = e.x, i = e.y, s = e.z, n = this.matrix.elements;
                n[12] += t - n[0] * t - n[4] * i - n[8] * s, n[13] += i - n[1] * t - n[5] * i - n[9] * s, n[14] += s - n[2] * t - n[6] * i - n[10] * s;
            }
            this.matrixWorldNeedsUpdate = !0;
        }
        updateMatrixWorld(e) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
            const t = this.children;
            for(let i = 0, s = t.length; i < s; i++)t[i].updateMatrixWorld(e);
        }
        updateWorldMatrix(e, t, i = !1) {
            const s = this.parent;
            if (e === !0 && s !== null && s.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || i) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, i = !0), t === !0) {
                const n = this.children;
                for(let r = 0, a = n.length; r < a; r++)n[r].updateWorldMatrix(!1, !0, i);
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
            s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === !0 && (s.castShadow = !0), this.receiveShadow === !0 && (s.receiveShadow = !0), this.visible === !1 && (s.visible = !1), this.frustumCulled === !1 && (s.frustumCulled = !1), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), this.static !== !1 && (s.static = this.static), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.pivot !== null && (s.pivot = this.pivot.toArray()), this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1), this.morphTargetDictionary !== void 0 && (s.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (s.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.geometryInfo = this._geometryInfo.map((a)=>({
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
            if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot !== null ? e.pivot.clone() : null, this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for(let i = 0; i < e.children.length; i++){
                const s = e.children[i];
                this.add(s.clone());
            }
            return this;
        }
    }
    me.DEFAULT_UP = new C(0, 1, 0);
    me.DEFAULT_MATRIX_AUTO_UPDATE = !0;
    me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
    const Li = {
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
    }, ue = {
        h: 0,
        s: 0,
        l: 0
    }, He = {
        h: 0,
        s: 0,
        l: 0
    };
    function et(o, e, t) {
        return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? o + (e - o) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? o + (e - o) * 6 * (2 / 3 - t) : o;
    }
    class le {
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
        setHex(e, t = z) {
            return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, X.colorSpaceToWorking(this, t), this;
        }
        setRGB(e, t, i, s = X.workingColorSpace) {
            return this.r = e, this.g = t, this.b = i, X.colorSpaceToWorking(this, s), this;
        }
        setHSL(e, t, i, s = X.workingColorSpace) {
            if (e = Ji(e, 1), t = _(t, 0, 1), i = _(i, 0, 1), t === 0) this.r = this.g = this.b = i;
            else {
                const n = i <= .5 ? i * (1 + t) : i + t - i * t, r = 2 * i - n;
                this.r = et(r, n, e + 1 / 3), this.g = et(r, n, e), this.b = et(r, n, e - 1 / 3);
            }
            return X.colorSpaceToWorking(this, s), this;
        }
        setStyle(e, t = z) {
            function i(n) {
                n !== void 0 && parseFloat(n) < 1 && O("Color: Alpha component of " + e + " will be ignored.");
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
                        O("Color: Unknown color model " + e);
                }
            } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
                const n = s[1], r = n.length;
                if (r === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
                if (r === 6) return this.setHex(parseInt(n, 16), t);
                O("Color: Invalid hex color " + e);
            } else if (e && e.length > 0) return this.setColorName(e, t);
            return this;
        }
        setColorName(e, t = z) {
            const i = Li[e.toLowerCase()];
            return i !== void 0 ? this.setHex(i, t) : O("Color: Unknown color " + e), this;
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b);
        }
        copy(e) {
            return this.r = e.r, this.g = e.g, this.b = e.b, this;
        }
        copySRGBToLinear(e) {
            return this.r = re(e.r), this.g = re(e.g), this.b = re(e.b), this;
        }
        copyLinearToSRGB(e) {
            return this.r = we(e.r), this.g = we(e.g), this.b = we(e.b), this;
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
        }
        getHex(e = z) {
            return X.workingToColorSpace(R.copy(this), e), Math.round(_(R.r * 255, 0, 255)) * 65536 + Math.round(_(R.g * 255, 0, 255)) * 256 + Math.round(_(R.b * 255, 0, 255));
        }
        getHexString(e = z) {
            return ("000000" + this.getHex(e).toString(16)).slice(-6);
        }
        getHSL(e, t = X.workingColorSpace) {
            X.workingToColorSpace(R.copy(this), t);
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
            return e.h = h, e.s = l, e.l = c, e;
        }
        getRGB(e, t = X.workingColorSpace) {
            return X.workingToColorSpace(R.copy(this), t), e.r = R.r, e.g = R.g, e.b = R.b, e;
        }
        getStyle(e = z) {
            X.workingToColorSpace(R.copy(this), e);
            const t = R.r, i = R.g, s = R.b;
            return e !== z ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(s * 255)})`;
        }
        offsetHSL(e, t, i) {
            return this.getHSL(ue), this.setHSL(ue.h + e, ue.s + t, ue.l + i);
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
            this.getHSL(ue), e.getHSL(He);
            const i = Ye(ue.h, He.h, t), s = Ye(ue.s, He.s, t), n = Ye(ue.l, He.l, t);
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
    const R = new le;
    le.NAMES = Li;
    let us = 0;
    class zi extends Ot {
        constructor(){
            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                value: us++
            }), this.uuid = Ge(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new le(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
                    O(`Material: parameter '${t}' has value of undefined.`);
                    continue;
                }
                const s = this[t];
                if (s === void 0) {
                    O(`Material: '${t}' is not a property of THREE.${this.type}.`);
                    continue;
                }
                s && s.isColor ? s.set(i) : s && s.isVector2 && i && i.isVector2 || s && s.isEuler && i && i.isEuler || s && s.isVector3 && i && i.isVector3 ? s.copy(i) : this[t] = i;
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
            i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (i.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (i.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (i.blending = this.blending), this.side !== 0 && (i.side = this.side), this.vertexColors === !0 && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = !0), this.blendSrc !== 204 && (i.blendSrc = this.blendSrc), this.blendDst !== 205 && (i.blendDst = this.blendDst), this.blendEquation !== 100 && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (i.depthFunc = this.depthFunc), this.depthTest === !1 && (i.depthTest = this.depthTest), this.depthWrite === !1 && (i.depthWrite = this.depthWrite), this.colorWrite === !1 && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (i.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (i.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === !0 && (i.alphaHash = !0), this.alphaToCoverage === !0 && (i.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0), this.forceSinglePass === !0 && (i.forceSinglePass = !0), this.allowOverride === !1 && (i.allowOverride = !1), this.wireframe === !0 && (i.wireframe = !0), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = !0), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
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
        fromJSON(e, t) {
            if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new le().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? this.vertexColors = e.vertexColors > 0 : this.vertexColors = e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
                let i = e.normalScale;
                Array.isArray(i) === !1 && (i = [
                    i,
                    i
                ]), this.normalScale = new ne().fromArray(i);
            }
            return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new ne().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
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
            return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
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
    class L extends zi {
        constructor(e){
            super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = {
                STANDARD: ""
            }, this.color = new le(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new le(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new ne(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ee, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
        }
        copy(e) {
            return super.copy(e), this.defines = {
                STANDARD: ""
            }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
        }
    }
    class ds extends zi {
        constructor(e){
            super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
        }
        copy(e) {
            return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
        }
    }
    const tt = {
        enabled: !1,
        files: {},
        add: function(o, e) {
            this.enabled !== !1 && (Qt(o) || (this.files[o] = e));
        },
        get: function(o) {
            if (this.enabled !== !1 && !Qt(o)) return this.files[o];
        },
        remove: function(o) {
            delete this.files[o];
        },
        clear: function() {
            this.files = {};
        }
    };
    function Qt(o) {
        try {
            const e = o.slice(o.indexOf(":") + 1);
            return new URL(e).protocol === "blob:";
        } catch  {
            return !1;
        }
    }
    class fs {
        constructor(e, t, i){
            const s = this;
            let n = !1, r = 0, a = 0, h;
            const l = [];
            this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this._abortController = null, this.itemStart = function(c) {
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
                    const d = l[u], m = l[u + 1];
                    if (d.global && (d.lastIndex = 0), d.test(c)) return m;
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
    const ms = new fs;
    class It {
        constructor(e){
            this.manager = e !== void 0 ? e : ms, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }));
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
    It.DEFAULT_MATERIAL_NAME = "__DEFAULT";
    const Me = new WeakMap;
    class ps extends It {
        constructor(e){
            super(e);
        }
        load(e, t, i, s) {
            this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
            const n = this, r = tt.get(`image:${e}`);
            if (r !== void 0) {
                if (r.complete === !0) n.manager.itemStart(e), setTimeout(function() {
                    t && t(r), n.manager.itemEnd(e);
                }, 0);
                else {
                    let u = Me.get(r);
                    u === void 0 && (u = [], Me.set(r, u)), u.push({
                        onLoad: t,
                        onError: s
                    });
                }
                return r;
            }
            const a = At("img");
            function h() {
                c(), t && t(this);
                const u = Me.get(this) || [];
                for(let f = 0; f < u.length; f++){
                    const d = u[f];
                    d.onLoad && d.onLoad(this);
                }
                Me.delete(this), n.manager.itemEnd(e);
            }
            function l(u) {
                c(), s && s(u), tt.remove(`image:${e}`);
                const f = Me.get(this) || [];
                for(let d = 0; d < f.length; d++){
                    const m = f[d];
                    m.onError && m.onError(u);
                }
                Me.delete(this), n.manager.itemError(e), n.manager.itemEnd(e);
            }
            function c() {
                a.removeEventListener("load", h, !1), a.removeEventListener("error", l, !1);
            }
            return a.addEventListener("load", h, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), tt.add(`image:${e}`, a), n.manager.itemStart(e), a.src = e, a;
        }
    }
    class pe extends It {
        constructor(e){
            super(e);
        }
        load(e, t, i, s) {
            const n = new oe, r = new ps(this.manager);
            return r.setCrossOrigin(this.crossOrigin), r.setPath(this.path), r.load(e, function(a) {
                n.image = a, n.needsUpdate = !0, t !== void 0 && t(n);
            }, i, s), n;
        }
    }
    class Oi {
        static{
            Oi.prototype.isMatrix2 = !0;
        }
        constructor(e, t, i, s){
            this.elements = [
                1,
                0,
                0,
                1
            ], e !== void 0 && this.set(e, t, i, s);
        }
        identity() {
            return this.set(1, 0, 0, 1), this;
        }
        fromArray(e, t = 0) {
            for(let i = 0; i < 4; i++)this.elements[i] = e[i + t];
            return this;
        }
        set(e, t, i, s) {
            const n = this.elements;
            return n[0] = e, n[2] = t, n[1] = i, n[3] = s, this;
        }
    }
    typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: "185"
        }
    }));
    typeof window < "u" && (window.__THREE__ ? O("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "185");
    const gs = 256;
    function xs(o, e = gs) {
        let t = 1;
        for(; Math.ceil(o / t) > e;)t *= 2;
        return t;
    }
    let Ii = {
        editorColors: new Map
    };
    function ys(o) {
        Ii = o;
    }
    function vs(o) {
        return Ii.editorColors.get(o);
    }
    const _s = {
        DEFAULT: 1.25
    }, ge = {
        ROUGHNESS: .85,
        METALNESS: 0
    }, Pe = {
        RADIUS: _s.DEFAULT,
        CONE_SCALE: 2.6,
        FEATHER: .7,
        ACTOR_MARGIN: .6
    }, Ss = .25, W = [
        "varying vec3 vVoxelAoWorldPosition;",
        "varying vec3 vVoxelAoWorldNormal;"
    ], U = [
        "vVoxelAoWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
        "vVoxelAoWorldNormal = normalize(mat3(modelMatrix) * normal);"
    ], Ni = (o)=>[
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
        ], Ms = Ni(.45), ws = Ni(.52);
    function I(o = !1) {
        return o ? ws : Ms;
    }
    const F = "computeVoxelAo(vVoxelAoWorldPosition, vVoxelAoWorldNormal)";
    function P(o, e) {
        o.uniforms.voxelAoOccupancy = {
            value: e.texture
        }, o.uniforms.voxelAoOrigin = {
            value: e.origin
        }, o.uniforms.voxelAoSize = {
            value: e.size
        }, o.uniforms.voxelAoRadius = {
            value: Ss
        }, o.uniforms.voxelAoVoxelSize = {
            value: e.voxelSize
        };
    }
    let ke = null;
    function bs() {
        if (ke) return ke;
        const o = new Uint8Array(4), e = new ss(o, 1, 1, 1);
        return e.format = 1023, e.type = 1009, e.magFilter = 1003, e.minFilter = 1003, e.wrapS = 1001, e.wrapT = 1001, e.wrapR = 1001, e.generateMipmaps = !1, e.needsUpdate = !0, ke = {
            texture: e,
            data: o,
            width: 1,
            heightLevels: 1,
            length: 1
        }, ke;
    }
    const Z = [
        "attribute float tileHeight;",
        "attribute float highlightStrength;",
        "varying float vMovementHighlightHeight;",
        "varying float vMovementHighlightStrength;"
    ], K = [
        "vMovementHighlightHeight = tileHeight;",
        "vMovementHighlightStrength = highlightStrength;"
    ], J = [
        "uniform highp sampler3D movementHighlightMap;",
        "uniform vec2 movementHighlightSize;",
        "uniform float movementHighlightHeightLevels;",
        "uniform float uHighlightEnabled;",
        "varying float vMovementHighlightHeight;",
        "varying float vMovementHighlightStrength;"
    ], Q = [
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
    function j(o, e) {
        const t = e ?? bs();
        o.uniforms.movementHighlightMap = {
            value: t.texture
        }, o.uniforms.movementHighlightSize = {
            value: new ne(t.width, t.length)
        }, o.uniforms.movementHighlightHeightLevels = {
            value: t.heightLevels
        }, o.uniforms.uHighlightEnabled = {
            value: e ? 1 : 0
        };
    }
    function Fs() {
        return {
            enabled: {
                value: 0
            },
            actorPos: {
                value: new C
            },
            camPos: {
                value: new C
            },
            radius: {
                value: Pe.RADIUS
            },
            coneScale: {
                value: Pe.CONE_SCALE
            },
            feather: {
                value: Pe.FEATHER
            },
            cutY: {
                value: 0
            },
            cutSign: {
                value: 1
            }
        };
    }
    let it = null;
    function Cs() {
        return it || (it = Fs()), it;
    }
    const B = [
        "varying vec3 vHeroWorldPos;"
    ], V = [
        "vHeroWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;"
    ], G = [
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
        `	if (t <= 0.0 || t >= distAct - ${Pe.ACTOR_MARGIN.toFixed(3)}) return false;`,
        "	float radial = length((P - uHeroCamPos) - axis * t);",
        "	float coneR = uHeroRadius * mix(1.0, uHeroConeScale, 1.0 - t / distAct);",
        "	if (radial > coneR + uHeroFeather) return false;",
        "	float edge = smoothstep(coneR + uHeroFeather, coneR, radial);",
        "	return edge > heroDither(gl_FragCoord.xy);",
        "}"
    ], $ = [
        "#include <clipping_planes_fragment>",
        "if (uHeroEnabled > 0.5 && heroOccluded(vHeroWorldPos)) discard;"
    ];
    function q(o, e) {
        const t = e ?? Cs();
        o.uniforms.uHeroEnabled = t.enabled, o.uniforms.uHeroActorPos = t.actorPos, o.uniforms.uHeroCamPos = t.camPos, o.uniforms.uHeroRadius = t.radius, o.uniforms.uHeroConeScale = t.coneScale, o.uniforms.uHeroFeather = t.feather, o.uniforms.uHeroCutY = t.cutY, o.uniforms.uHeroCutSign = t.cutSign;
    }
    function Di(o, e) {
        o.onBeforeCompile = (t)=>{
            q(t, e), t.vertexShader = t.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...B
            ].join(`
`)), t.vertexShader = t.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...V
            ].join(`
`)), t.fragmentShader = t.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...G
            ].join(`
`)), t.fragmentShader = t.fragmentShader.replace("#include <clipping_planes_fragment>", $.join(`
`));
        };
    }
    function As(o, e, t, i, s) {
        o.onBeforeCompile = (n)=>{
            P(n, e), j(n, t), q(n, i), n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...W,
                ...Z,
                ...B
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...U,
                ...K,
                ...V
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...I(s),
                ...J,
                ...G
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <clipping_planes_fragment>", $.join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", `#include <color_fragment>
diffuseColor.rgb *= ${F};`), n.fragmentShader = n.fragmentShader.replace("#include <dithering_fragment>", Q.join(`
`));
        };
    }
    const Es = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = new L({
            roughness: ge.ROUGHNESS,
            metalness: ge.METALNESS,
            vertexColors: !0
        });
        return As(n, t, e, i, s), {
            material: n,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Be = {
        bucketKey: "default",
        occlusionGroup: "solid",
        shaderVersion: 4,
        factory: Es
    }, Ts = 1, jt = 5, ei = 1.6, Rs = 5.5, Ls = .07, zs = 14, ti = [
        .01,
        -.006
    ], Os = .52, Is = .78, Ns = [
        .035,
        .03,
        .028
    ], Ds = [
        .13,
        .12,
        .115
    ], Hs = [
        .9,
        .14,
        .01
    ], ks = [
        2.2,
        .85,
        .16
    ], Ws = .02, ii = .45, Us = 1, Ps = 0, Bs = [
        "float embersHash(vec2 p) {",
        "	return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);",
        "}",
        "float embersNoise(vec2 p) {",
        "	vec2 i = floor(p);",
        "	vec2 f = fract(p);",
        "	vec2 u = f * f * (3.0 - 2.0 * f);",
        "	return mix(",
        "		mix(embersHash(i), embersHash(i + vec2(1.0, 0.0)), u.x),",
        "		mix(embersHash(i + vec2(0.0, 1.0)), embersHash(i + vec2(1.0, 1.0)), u.x),",
        "		u.y);",
        "}",
        "float embersCrack(vec2 p) {",
        "	p += vec2(embersNoise(p * 0.7), embersNoise(p * 0.7 + 5.3)) * 0.35;",
        "	vec2 i = floor(p);",
        "	vec2 f = fract(p);",
        "	float d1 = 8.0;",
        "	float d2 = 8.0;",
        "	for (int y = -1; y <= 1; y++) {",
        "		for (int x = -1; x <= 1; x++) {",
        "			vec2 g = vec2(float(x), float(y));",
        "			vec2 o = vec2(embersHash(i + g), embersHash(i + g + 19.19));",
        "			float d = length(g + o - f);",
        "			d2 = d < d1 ? d1 : min(d2, d);",
        "			d1 = min(d1, d);",
        "		}",
        "	}",
        `	return 1.0 - smoothstep(0.0, ${Ls.toFixed(3)}, d2 - d1);`,
        "}",
        "float embersRidge(vec2 p) {",
        "	float n = embersNoise(p);",
        "	return pow(1.0 - abs(2.0 * n - 1.0), 18.0);",
        "}"
    ].join(`
`);
    function We(o) {
        return `vec3(${o[0].toFixed(3)}, ${o[1].toFixed(3)}, ${o[2].toFixed(3)})`;
    }
    function Vs() {
        return [
            ...W,
            "varying vec3 vEmbersWorldPosition;"
        ];
    }
    function Gs() {
        return [
            "vEmbersWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            ...U
        ];
    }
    function $s(o) {
        return [
            ...I(o),
            "varying vec3 vEmbersWorldPosition;",
            "uniform float uEmbersTime;",
            `const vec3 E_SOOT = ${We(Ns)};`,
            `const vec3 E_ASH = ${We(Ds)};`,
            `const vec3 E_GLOW_EDGE = ${We(Hs)};`,
            `const vec3 E_GLOW_CORE = ${We(ks)};`,
            "vec3 eEmberGlow = vec3(0.0);",
            Bs
        ];
    }
    function qs(o) {
        const e = [
            "vec2 eXz = vEmbersWorldPosition.xz;",
            `float eChar = embersNoise(eXz / ${jt.toFixed(3)}) * 0.7 + embersNoise(eXz / ${(jt * .31).toFixed(3)}) * 0.3;`,
            "vec3 eColor = mix(E_SOOT, E_ASH, smoothstep(0.55, 0.9, eChar));",
            `vec2 eHeatUv = eXz / ${zs.toFixed(3)} + uEmbersTime * vec2(${ti[0].toFixed(4)}, ${ti[1].toFixed(4)});`,
            `float eHeat = smoothstep(${Os.toFixed(3)}, ${Is.toFixed(3)}, embersNoise(eHeatUv) * 0.7 + embersNoise(eHeatUv * 2.3 + 3.1) * 0.3);`
        ];
        return e.push(o ? `float eCrack = embersRidge(eXz / ${ei.toFixed(3)});` : `float eCrack = max(embersCrack(eXz / ${ei.toFixed(3)}), embersCrack(eXz / ${Rs.toFixed(3)} + 11.7) * 1.3);`), e.push("float eFlicker = 0.7 + 0.2 * sin(uEmbersTime * 1.3 + eChar * 9.0) + 0.1 * sin(uEmbersTime * 4.7 + eXz.x * 0.8);", "float eAlong = smoothstep(0.25, 0.75, embersNoise(eXz * 0.9 + vec2(uEmbersTime * 0.15, 0.0)));", "float eGlow = clamp(eCrack * eHeat * eFlicker * (0.2 + 0.8 * eAlong), 0.0, 1.5);", "eEmberGlow = mix(E_GLOW_EDGE, E_GLOW_CORE, smoothstep(0.5, 1.2, eGlow)) * eGlow;"), o || e.push(`vec2 eCoalCell = floor(eXz / ${ii.toFixed(3)});`, "float eCoalSeed = embersHash(eCoalCell);", `float eCoal = step(1.0 - ${Ws.toFixed(3)}, eCoalSeed) * eHeat;`, "eCoal *= 0.5 + 0.5 * sin(uEmbersTime * (2.0 + eCoalSeed * 6.0) + eCoalSeed * 40.0);", `vec2 eCoalLocal = fract(eXz / ${ii.toFixed(3)}) - 0.5;`, "eCoal *= 1.0 - smoothstep(0.15, 0.4, length(eCoalLocal));", "eEmberGlow += E_GLOW_CORE * eCoal;"), e.push("eColor += E_GLOW_EDGE * 0.04 * eHeat;", `eColor *= ${F};`, "diffuseColor = vec4(eColor, 1.0);"), e;
    }
    const Xs = [
        "totalEmissiveRadiance = eEmberGlow;"
    ], Ys = (o)=>{
        const { voxelAo: e, performanceMode: t = !1 } = o, i = {
            value: 0
        }, s = new L({
            roughness: Us,
            metalness: Ps,
            vertexColors: !1
        });
        s.onBeforeCompile = (a)=>{
            P(a, e), a.uniforms.uEmbersTime = i, a.vertexShader = a.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Vs()
            ].join(`
`)), a.vertexShader = a.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Gs()
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...$s(t)
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <color_fragment>", qs(t).join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <emissivemap_fragment>", Xs.join(`
`));
        };
        const n = [
            "surroundings-embers",
            `v${Ts}`,
            "nh",
            t ? "perf" : "full"
        ].join("-");
        return s.customProgramCacheKey = ()=>n, s.needsUpdate = !0, {
            material: s,
            onAnimationFrame: (a)=>{
                i.value = a * .001;
            },
            castShadow: !1,
            receiveShadow: !0
        };
    }, Zs = ()=>({
            material: new L({
                visible: !1
            }),
            castShadow: !1,
            receiveShadow: !1
        }), Ks = {
        bucketKey: "fire_253",
        occlusionGroup: "fire_253",
        shaderVersion: 1,
        geometry: {
            vertexColors: !1
        },
        passable: !0,
        factory: Zs,
        surroundingsFactory: Ys,
        special: {
            paletteIndex: 253,
            label: "Fire",
            swatchColor: "#ff7a1a",
            category: "miscellaneous"
        }
    }, Js = "/materials/flesh_250/flesh_noise_64x64.png", Qs = "#cc2244", js = .45, en = .7, tn = 0, sn = .4, si = .5, nn = .25, rn = 1.2;
    let st = null;
    function on() {
        if (!st) {
            const o = new pe().load(Js);
            o.colorSpace = Ct, o.wrapS = 1e3, o.wrapT = 1e3, o.magFilter = 1006, o.minFilter = 1006, o.generateMipmaps = !1, st = o;
        }
        return st;
    }
    const an = [
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
        `        q = u * frequency + t * ${sn.toFixed(4)}`,
        `          + fleshAperiodicSin(t * ${si.toFixed(4)} - centeredDot * 1.2) * 0.4 * ${si.toFixed(4)}`,
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
    function ln() {
        return [
            ...W,
            "uniform float uFleshTime;"
        ];
    }
    function hn() {
        return [
            ...U
        ];
    }
    function cn(o) {
        return [
            ...I(o),
            "uniform float uFleshTime;",
            "uniform sampler2D uFleshNoise;",
            "vec2 getFleshUv(vec3 worldPos, vec3 worldNormal) {",
            "    vec3 n = abs(normalize(worldNormal));",
            "    if (n.y >= n.x && n.y >= n.z) return worldPos.xz;",
            "    if (n.x >= n.z) return worldPos.zy;",
            "    return worldPos.xy;",
            "}",
            an
        ];
    }
    function un(o) {
        return [
            "#include <color_fragment>",
            `vec2 fleshUvWorld = getFleshUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${js.toFixed(4)};`,
            `float fleshOriginalNoise = fleshFBM(fleshUvWorld, uFleshTime, ${o ? "false" : "true"});`,
            "float fleshNoise = clamp(fleshOriginalNoise, 0.0, 1.0);",
            `float fleshFluidNoiseAngle = fleshOriginalNoise * 13.05 + uFleshTime * ${nn.toFixed(4)};`,
            "vec2 fleshFluidOffset = vec2(",
            "    cos(fleshFluidNoiseAngle) + fleshOriginalNoise * 14.0,",
            `    sin(fleshFluidNoiseAngle) + uFleshTime * ${rn.toFixed(4)}`,
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
            `fleshBaseColor *= ${F};`,
            "diffuseColor = vec4(clamp(fleshBaseColor, 0.0, 1.0), 1.0);"
        ];
    }
    const dn = [
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
    function fn() {
        return dn + `
` + Q.join(`
`);
    }
    function mn(o, e, t, i, s, n, r) {
        o.onBeforeCompile = (a)=>{
            P(a, i), a.uniforms.uFleshTime = t, a.uniforms.uFleshNoise = {
                value: e
            }, j(a, s), q(a, n), a.vertexShader = a.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...ln(),
                ...Z,
                ...B
            ].join(`
`)), a.vertexShader = a.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...hn(),
                ...K,
                ...V
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...cn(r),
                ...J,
                ...G
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <clipping_planes_fragment>", $.join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <color_fragment>", un(r).join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <dithering_fragment>", fn());
        };
    }
    const pn = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = on(), r = {
            value: 0
        }, a = new L({
            roughness: en,
            metalness: tn,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return mn(a, n, r, t, e, i, s), {
            material: a,
            onAnimationFrame: (l)=>{
                r.value = l * .001;
            },
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, gn = {
        bucketKey: "flesh_250",
        occlusionGroup: "flesh_250",
        shaderVersion: 6,
        geometry: {
            vertexColors: !1
        },
        factory: pn,
        special: {
            paletteIndex: 250,
            label: "Flesh",
            swatchColor: Qs
        }
    }, xn = 2, Hi = 16, ni = [
        .02,
        .009
    ], yn = .7, ki = .6, Et = .34, Tt = .88, nt = [
        .97,
        .97,
        1
    ], rt = [
        .58,
        .63,
        .76
    ], vn = .8, _n = .72, Sn = .3, Mn = .52, Wi = 1.25, wn = 1.6, ri = .06, bn = 1, Fn = 0, Cn = 5, An = 3, En = 3;
    function Ui(o) {
        return [
            "float cloudHash(vec2 p) {",
            "	return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);",
            "}",
            "float cloudNoise(vec2 p) {",
            "	vec2 i = floor(p);",
            "	vec2 f = fract(p);",
            "	vec2 u = f * f * (3.0 - 2.0 * f);",
            "	float a = cloudHash(i);",
            "	float b = cloudHash(i + vec2(1.0, 0.0));",
            "	float c = cloudHash(i + vec2(0.0, 1.0));",
            "	float d = cloudHash(i + vec2(1.0, 1.0));",
            "	return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);",
            "}",
            "float cloudBillow(vec2 p) {",
            "	return 1.0 - abs(2.0 * cloudNoise(p) - 1.0);",
            "}",
            "float cloudFbm(vec2 p, vec2 drift) {",
            "	float v = 0.0;",
            "	float amp = 0.5;",
            "	vec2 q = p + drift;",
            `	for (int i = 0; i < ${o}; i++) {`,
            "		v += amp * cloudBillow(q);",
            `		q = q * 2.03 + vec2(17.3, 9.1) + drift * ${yn.toFixed(3)};`,
            "		amp *= 0.5;",
            "	}",
            "	return v;",
            "}"
        ].join(`
`);
    }
    function Rt(o, e) {
        return [
            `vec2 ${e}Uv = ${o}.xz / ${Hi.toFixed(3)};`,
            `vec2 ${e}Drift = vec2(uCloudTime * ${ni[0].toFixed(4)}, uCloudTime * ${ni[1].toFixed(4)});`
        ];
    }
    function Tn() {
        return [
            "attribute float surfaceDeformStrength;",
            ...W,
            "varying vec3 vCloudWorldPosition;",
            "varying vec3 vCloudWorldNormal;",
            "uniform float uCloudTime;",
            Ui(En)
        ];
    }
    function Rn() {
        return [
            "vCloudWorldNormal = normalize(mat3(modelMatrix) * normal);",
            "vec3 cloudWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            ...Rt("cloudWorld", "cv"),
            "float cvWarp = cloudFbm(cvUv * 0.5, cvDrift * 0.6);",
            `vec2 cvUvW = cvUv + vec2(cvWarp, -cvWarp) * ${ki.toFixed(3)};`,
            "float cvDensity = cloudFbm(cvUvW, cvDrift);",
            `float cvPuff = smoothstep(${Et.toFixed(3)}, ${Tt.toFixed(3)}, cvDensity);`,
            `transformed.y += cvPuff * ${Wi.toFixed(3)} * surfaceDeformStrength;`,
            "vCloudWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            ...U
        ];
    }
    function Ln(o) {
        const e = o ? An : Cn;
        return [
            ...I(o),
            "varying vec3 vCloudWorldPosition;",
            "varying vec3 vCloudWorldNormal;",
            "uniform float uCloudTime;",
            `const vec3 C_TOP = vec3(${nt[0].toFixed(3)}, ${nt[1].toFixed(3)}, ${nt[2].toFixed(3)});`,
            `const vec3 C_SHADOW = vec3(${rt[0].toFixed(3)}, ${rt[1].toFixed(3)}, ${rt[2].toFixed(3)});`,
            "vec2 cCloudGrad = vec2(0.0);",
            Ui(e)
        ];
    }
    function zn(o) {
        const e = Et.toFixed(3), t = Tt.toFixed(3), i = `float cAlpha = mix(${_n.toFixed(3)}, ${vn.toFixed(3)}, smoothstep(${Sn.toFixed(3)}, ${Mn.toFixed(3)}, cDensity));`;
        if (o) return [
            ...Rt("vCloudWorldPosition", "c"),
            "float cDensity = cloudFbm(cUv, cDrift);",
            `float cTops = smoothstep(${e}, ${t}, cDensity);`,
            "vec3 cColor = mix(C_SHADOW, C_TOP, cTops);",
            `cColor *= ${F};`,
            i,
            "diffuseColor = vec4(cColor, cAlpha);"
        ];
        const s = ri.toFixed(4), n = (Wi * wn / (ri * Hi)).toFixed(4), r = (6 / (Tt - Et)).toFixed(4);
        return [
            ...Rt("vCloudWorldPosition", "c"),
            "float cWarp = cloudFbm(cUv * 0.5, cDrift * 0.6);",
            `vec2 cUvW = cUv + vec2(cWarp, -cWarp) * ${ki.toFixed(3)};`,
            "float cDensity = cloudFbm(cUvW, cDrift);",
            `float cTops = smoothstep(${e}, ${t}, cDensity);`,
            `float cDx = cloudFbm(cUvW + vec2(${s}, 0.0), cDrift);`,
            `float cDz = cloudFbm(cUvW + vec2(0.0, ${s}), cDrift);`,
            `float cT = clamp((cDensity - ${e}) / (${t} - ${e}), 0.0, 1.0);`,
            `float cSlopeGain = ${r} * cT * (1.0 - cT);`,
            `cCloudGrad = vec2(cDx - cDensity, cDz - cDensity) * (${n} * cSlopeGain);`,
            "vec3 cColor = mix(C_SHADOW, C_TOP, cTops);",
            `cColor *= ${F};`,
            i,
            "diffuseColor = vec4(cColor, cAlpha);"
        ];
    }
    const On = [
        "#include <normal_fragment_begin>",
        "if (vCloudWorldNormal.y > 0.5) {",
        "	vec3 cWorldN = normalize(vec3(-cCloudGrad.x, 1.0, -cCloudGrad.y));",
        "	normal = normalize((viewMatrix * vec4(cWorldN, 0.0)).xyz);",
        "}"
    ], In = (o)=>{
        const { voxelAo: e, performanceMode: t = !1 } = o, i = {
            value: 0
        }, s = new L({
            roughness: bn,
            metalness: Fn,
            vertexColors: !1,
            transparent: !0,
            depthWrite: !0
        });
        s.onBeforeCompile = (a)=>{
            P(a, e), a.uniforms.uCloudTime = i, a.vertexShader = a.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Tn()
            ].join(`
`)), a.vertexShader = a.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Rn()
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Ln(t)
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <color_fragment>", zn(t).join(`
`)), t || (a.fragmentShader = a.fragmentShader.replace("#include <normal_fragment_begin>", On.join(`
`)));
        };
        const n = [
            "surroundings-clouds",
            `v${xn}`,
            "nh",
            t ? "perf" : "full"
        ].join("-");
        return s.customProgramCacheKey = ()=>n, s.needsUpdate = !0, {
            material: s,
            onAnimationFrame: (a)=>{
                i.value = a * .001;
            },
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 1
        };
    }, Nn = "#cfd4dc", Dn = {
        bucketKey: "fog_251",
        occlusionGroup: "fog_251",
        shaderVersion: 1,
        passable: !0,
        volumetric: !0,
        surroundingsFactory: In,
        special: {
            paletteIndex: 251,
            label: "Fog",
            swatchColor: Nn
        }
    }, Hn = "#a8d8f0", kn = "#cce8ff", Wn = .05, Un = 0, Pn = .22, Bn = (o)=>{
        const { heroOcclusion: e } = o, t = new L({
            color: kn,
            roughness: Wn,
            metalness: Un,
            vertexColors: !1,
            transparent: !0,
            opacity: Pn,
            depthWrite: !1
        });
        return Di(t, e), {
            material: t,
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 2
        };
    }, Vn = {
        bucketKey: "glass_246",
        occlusionGroup: "glass_246",
        shaderVersion: 3,
        geometry: {
            vertexColors: !1
        },
        seeThrough: !0,
        factory: Bn,
        special: {
            paletteIndex: 246,
            label: "Glass",
            swatchColor: Hn,
            category: "buildings"
        }
    }, Pi = "#CFB53B", ot = .6, at = [
        .9,
        .72,
        .12
    ], lt = [
        .6,
        .32,
        .04
    ], Gn = .5, $n = 0, qn = "#aa4400", Xn = .25, Yn = [
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
    function Zn() {
        return [
            ...W
        ];
    }
    function Kn() {
        return [
            ...U
        ];
    }
    function Jn(o) {
        return [
            ...I(o),
            Yn,
            `const vec3 G_COL1 = vec3(${at[0].toFixed(3)}, ${at[1].toFixed(3)}, ${at[2].toFixed(3)});`,
            `const vec3 G_COL2 = vec3(${lt[0].toFixed(3)}, ${lt[1].toFixed(3)}, ${lt[2].toFixed(3)});`
        ];
    }
    function Qn(o) {
        const e = [
            "vec3 gNrm = normalize(vVoxelAoWorldNormal);",
            "bool gIsBottom = gNrm.y < -0.5;",
            "vec2 gUv = vec2(0.0);",
            "if (!gIsBottom) {",
            "	if (abs(gNrm.x) > abs(gNrm.z) && abs(gNrm.x) > abs(gNrm.y)) {",
            `		gUv = vVoxelAoWorldPosition.zy * ${ot.toFixed(3)};`,
            "	} else if (abs(gNrm.z) > abs(gNrm.y)) {",
            `		gUv = vVoxelAoWorldPosition.xy * ${ot.toFixed(3)};`,
            "	} else {",
            `		gUv = vVoxelAoWorldPosition.xz * ${ot.toFixed(3)};`,
            "	}",
            "}"
        ], i = [
            "	vec2 gQ = vec2(0.0), gR = vec2(0.0);",
            `	${o ? "float gF = goldPatternLow(gUv, gQ, gR);" : "float gF = goldPattern(gUv, gQ, gR);"}`,
            "	vec3 gC = mix(G_COL1, vec3(0.0), pow(smoothstep(0., 0.9, gF), 2.));",
            "	gC += G_COL2 * pow(smoothstep(0., 0.8, dot(gQ, gR)*0.6), 3.) * 1.5;",
            "	gC *= pow(dot(gQ, gR) + 0.3, 3.);",
            "	gC *= gF * 1.5;",
            `	gC *= ${F};`,
            "	diffuseColor = vec4(gC, 1.0);"
        ];
        return [
            ...e,
            "if (gIsBottom) {",
            `	diffuseColor = vec4(G_COL2 * 0.3 * ${F}, 1.0);`,
            "} else {",
            ...i,
            "}"
        ];
    }
    function jn(o, e, t, i, s) {
        o.onBeforeCompile = (n)=>{
            P(n, e), j(n, t), q(n, i), n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Zn(),
                ...Z,
                ...B
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Kn(),
                ...K,
                ...V
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Jn(s),
                ...J,
                ...G
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", Qn(s).join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <clipping_planes_fragment>", $.join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <dithering_fragment>", Q.join(`
`));
        };
    }
    const er = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = new L({
            color: Pi,
            emissive: new le(qn),
            emissiveIntensity: Xn,
            roughness: Gn,
            metalness: $n,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return jn(n, t, e, i, s), {
            material: n,
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, tr = {
        bucketKey: "gold_247",
        occlusionGroup: "solid",
        shaderVersion: 5,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !1,
            deformSurface: !1
        },
        factory: er,
        special: {
            paletteIndex: 247,
            label: "Gold",
            swatchColor: Pi,
            category: "metals"
        }
    }, oi = "/materials/grass_242/grass_02_base_1k.png", ir = "/materials/grass_242/grass_02_normal_gl_1k.png", sr = "/materials/grass_242/grass_02_roughness_1k.png", nr = "/materials/grass_242/grass_02_amibent_occlusion_1k.png", rr = "#4f8f37", Nt = .75, or = 1.45, ar = .45, ai = .86, Lt = 1, lr = 8, hr = 1;
    let ht = null, ct = null, ut = null, dt = null, ft = null;
    function Ce(o, e = !1) {
        return o.wrapS = 1e3, o.wrapT = 1e3, o.magFilter = 1006, o.minFilter = e ? 1006 : 1008, o.anisotropy = e ? hr : lr, o.generateMipmaps = !e, o;
    }
    function cr(o) {
        if (o) {
            if (!ct) {
                const t = Ce(new pe().load(oi), !0);
                t.colorSpace = z, ct = t;
            }
            return ct;
        }
        if (ht) return ht;
        const e = Ce(new pe().load(oi), !1);
        return e.colorSpace = z, ht = e, e;
    }
    function ur() {
        if (ut) return ut;
        const o = Ce(new pe().load(ir), !1);
        return ut = o, o;
    }
    function dr() {
        if (dt) return dt;
        const o = Ce(new pe().load(sr), !1);
        return dt = o, o;
    }
    function fr() {
        if (ft) return ft;
        const o = Ce(new pe().load(nr), !1);
        return ft = o, o;
    }
    function mr() {
        return [
            ...W
        ];
    }
    function pr() {
        return [
            ...U
        ];
    }
    function gr(o) {
        const e = [
            ...I(!1),
            "uniform sampler2D grassMap;"
        ];
        return o ? [
            ...I(!0),
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
    function xr(o) {
        const e = [
            "#include <color_fragment>",
            `vec2 grassUv = getGrassUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Nt.toFixed(2)};`,
            "vec4 grassTexel = texture2D(grassMap, grassUv);",
            "diffuseColor.rgb *= grassTexel.rgb;",
            "diffuseColor.a *= grassTexel.a;",
            `diffuseColor.rgb *= ${F};`
        ];
        return o || e.splice(3, 0, "float grassMicroAo = mix(1.0, texture2D(grassAoMap, grassUv).r, " + ar.toFixed(2) + ");", "diffuseColor.rgb *= grassMicroAo;"), e;
    }
    function yr() {
        return [
            "#include <roughnessmap_fragment>",
            `vec2 grassRoughnessUv = getGrassUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Nt.toFixed(2)};`,
            "float grassRoughnessSample = texture2D(grassRoughnessMap, grassRoughnessUv).g;",
            `roughnessFactor = clamp(mix(${ai.toFixed(2)}, ${Lt.toFixed(2)}, grassRoughnessSample), ${ai.toFixed(2)}, ${Lt.toFixed(2)});`
        ];
    }
    function vr() {
        return [
            `vec2 grassNormalUv = getGrassUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Nt.toFixed(2)};`,
            "vec3 grassMapNormal = texture2D(grassNormalMap, grassNormalUv).xyz * 2.0 - 1.0;",
            `grassMapNormal.xy *= ${or.toFixed(2)};`,
            "normal = normalize(grassGetTangentFrame(-vViewPosition, normal, grassNormalUv) * normalize(grassMapNormal));"
        ];
    }
    function _r(o, e, t, i, s, n, r, a, h) {
        o.onBeforeCompile = (l)=>{
            P(l, n), l.uniforms.grassMap = {
                value: e
            }, !h && t && i && s && (l.uniforms.grassNormalMap = {
                value: t
            }, l.uniforms.grassRoughnessMap = {
                value: i
            }, l.uniforms.grassAoMap = {
                value: s
            }), j(l, r), q(l, a), l.vertexShader = l.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...mr(),
                ...Z,
                ...B
            ].join(`
`)), l.vertexShader = l.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...pr(),
                ...K,
                ...V
            ].join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...gr(h),
                ...J,
                ...G
            ].join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <color_fragment>", xr(h).join(`
`)), h || (l.fragmentShader = l.fragmentShader.replace("#include <roughnessmap_fragment>", yr().join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <normal_fragment_maps>", vr().join(`
`))), l.fragmentShader = l.fragmentShader.replace("#include <clipping_planes_fragment>", $.join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <dithering_fragment>", Q.join(`
`));
        };
    }
    const Sr = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = cr(s), r = s ? null : ur(), a = s ? null : dr(), h = s ? null : fr(), l = new L({
            roughness: Lt,
            metalness: ge.METALNESS,
            vertexColors: !1
        });
        return _r(l, n, r, a, h, t, e, i, s), {
            material: l,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Mr = {
        bucketKey: "grass_242",
        occlusionGroup: "solid",
        shaderVersion: 6,
        geometry: {
            vertexColors: !1
        },
        factory: Sr,
        special: {
            paletteIndex: 242,
            label: "Grass",
            swatchColor: rr,
            category: "nature"
        }
    };
    function $e(o, e = 8, t = 1) {
        let i = null, s = null;
        const n = (r)=>{
            const a = new pe().load(o);
            return a.colorSpace = z, a.wrapS = 1e3, a.wrapT = 1e3, a.magFilter = 1006, a.minFilter = r ? 1006 : 1008, a.anisotropy = r ? t : e, a.generateMipmaps = !r, a;
        };
        return (r)=>r ? s ??= n(!0) : i ??= n(!1);
    }
    const wr = "/materials/iron_bars_249/iron_bars_256x256.png", br = "#6b6b6b", Fr = 1, Cr = .55, Ar = .45, Er = .5, Tr = $e(wr);
    function Rr() {
        return [
            ...W
        ];
    }
    function Lr() {
        return [
            ...U
        ];
    }
    function zr(o) {
        return [
            ...I(o),
            "uniform sampler2D ironBarsMap;",
            "vec2 getIronBarsUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function Or() {
        return [
            "#include <color_fragment>",
            `vec2 ironBarsUv = getIronBarsUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Fr.toFixed(1)};`,
            "vec4 ironBarsTexel = texture2D(ironBarsMap, ironBarsUv);",
            "diffuseColor.rgb *= ironBarsTexel.rgb;",
            "diffuseColor.a *= ironBarsTexel.a;",
            `diffuseColor.rgb *= ${F};`
        ];
    }
    function Ir(o, e, t, i, s, n) {
        o.onBeforeCompile = (r)=>{
            P(r, t), r.uniforms.ironBarsMap = {
                value: e
            }, j(r, i), q(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Rr(),
                ...Z,
                ...B
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Lr(),
                ...K,
                ...V
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...zr(n),
                ...J,
                ...G
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", Or().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", $.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", Q.join(`
`));
        };
    }
    const Nr = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = Tr(s), r = new L({
            roughness: Cr,
            metalness: Ar,
            vertexColors: !1,
            alphaTest: Er
        });
        return Ir(r, n, t, e, i, s), {
            material: r,
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 2
        };
    }, Dr = {
        bucketKey: "ironbars_249",
        occlusionGroup: "ironbars_249",
        shaderVersion: 4,
        geometry: {
            vertexColors: !1
        },
        seeThrough: !0,
        factory: Nr,
        special: {
            paletteIndex: 249,
            label: "Iron Bars",
            swatchColor: br,
            category: "buildings"
        }
    }, Bi = "#cc3300", Hr = 1.6, kr = .85, mt = [
        .02,
        0,
        0
    ], pt = [
        .88,
        .22,
        0
    ], gt = [
        1,
        .9,
        .25
    ], li = .97, hi = .9, Wr = .055, Ur = .018, ci = 1.8, ui = .35, di = 1, fi = 1.5, mi = .4, Pr = .45, Br = 0, Vr = "#ff3300", Gr = 3.2, $r = [
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
    function qr() {
        return [
            "attribute float surfaceDeformStrength;",
            ...W,
            "uniform float uLavaTime;"
        ];
    }
    function Xr(o) {
        const e = o ? Ur : Wr;
        return [
            "vec3 lavaWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            `float lavaRippleA = sin(lavaWorld.x * ${ci.toFixed(3)} + uLavaTime * ${ui.toFixed(3)});`,
            `float lavaRippleB = cos(lavaWorld.z * ${ci.toFixed(3)} * 1.17 + uLavaTime * ${ui.toFixed(3)} * 0.83);`,
            `float lavaDisplacement = (lavaRippleA + lavaRippleB) * 0.5 * ${e.toFixed(4)} * surfaceDeformStrength;`,
            "transformed.y += lavaDisplacement;",
            ...U
        ];
    }
    function Yr(o) {
        const e = [
            ...I(o),
            "uniform float uLavaTime;",
            `const vec3 L_CRUST  = vec3(${mt[0].toFixed(3)}, ${mt[1].toFixed(3)}, ${mt[2].toFixed(3)});`,
            `const vec3 L_MID    = vec3(${pt[0].toFixed(3)}, ${pt[1].toFixed(3)}, ${pt[2].toFixed(3)});`,
            `const vec3 L_BRIGHT = vec3(${gt[0].toFixed(3)}, ${gt[1].toFixed(3)}, ${gt[2].toFixed(3)});`
        ];
        return o || e.push($r), e;
    }
    function Zr(o) {
        return o ? [
            "vec3 lNrm = normalize(vVoxelAoWorldNormal);",
            "bool lIsTop    = lNrm.y >  0.5;",
            "bool lIsBottom = lNrm.y < -0.5;",
            "if (lIsBottom) {",
            `	diffuseColor = vec4(L_CRUST * ${F}, ${hi.toFixed(3)});`,
            "} else {",
            "float lGlow = 0.0;",
            "if (lIsTop) {",
            "	vec2 lUv = vVoxelAoWorldPosition.xz;",
            "	lGlow = 0.5 + 0.5 * sin(lUv.x * 2.8 + uLavaTime * 0.5 + cos(lUv.y * 1.6 + uLavaTime * 0.35));",
            "} else {",
            "	float lFallH = (abs(lNrm.x) > abs(lNrm.z)) ? vVoxelAoWorldPosition.z : vVoxelAoWorldPosition.x;",
            `	vec2 lFallUv = vec2(lFallH / ${di.toFixed(3)}, vVoxelAoWorldPosition.y / ${fi.toFixed(3)} + uLavaTime * ${mi.toFixed(3)});`,
            "	float lFallA = 0.5 + 0.5 * sin(lFallUv.y * 5.2 + lFallUv.x * 1.8);",
            "	float lFallB = 0.5 + 0.5 * sin(lFallUv.y * 9.0 + uLavaTime * 0.4);",
            "	lGlow = clamp(lFallA * 0.65 + lFallB * 0.35, 0.0, 1.0);",
            "}",
            "vec3 lColor = mix(L_MID, L_BRIGHT, lGlow * 0.7);",
            `lColor *= ${F};`,
            `diffuseColor = vec4(lColor, ${li.toFixed(3)});`,
            "}"
        ] : [
            "vec3 lNrm = normalize(vVoxelAoWorldNormal);",
            "bool lIsTop    = lNrm.y >  0.5;",
            "bool lIsBottom = lNrm.y < -0.5;",
            "float lGlowMask  = 0.0;",
            "float lCrustMask = 0.0;",
            "if (lIsBottom) {",
            `	diffuseColor = vec4(L_CRUST * ${F}, ${hi.toFixed(3)});`,
            "} else {",
            "if (lIsTop) {",
            `	vec2 lUvCrust = vVoxelAoWorldPosition.xz / ${Hr.toFixed(3)};`,
            `	vec2 lUvGlow  = vVoxelAoWorldPosition.xz / ${kr.toFixed(3)};`,
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
            `	vec2 lFallUv = vec2(lFallH / ${di.toFixed(3)}, lFallV / ${fi.toFixed(3)} + uLavaTime * ${mi.toFixed(3)});`,
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
            `lColor *= ${F};`,
            `diffuseColor = vec4(lColor, ${li.toFixed(3)});`,
            "}"
        ];
    }
    function Kr() {
        return [
            "float lavaEmissivePulse = 0.78 + 0.22 * sin(uLavaTime * 1.05);",
            "totalEmissiveRadiance *= lavaEmissivePulse;"
        ];
    }
    function Jr(o, e, t, i, s, n) {
        o.onBeforeCompile = (r)=>{
            P(r, t), r.uniforms.uLavaTime = e, j(r, i), q(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...qr(),
                ...Z,
                ...B
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Xr(n),
                ...K,
                ...V
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Yr(n),
                ...J,
                ...G
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", Zr(n).join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <emissivemap_fragment>", Kr().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", $.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", Q.join(`
`));
        };
    }
    const Qr = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = {
            value: 0
        }, r = new L({
            color: Bi,
            emissive: new le(Vr),
            emissiveIntensity: Gr,
            roughness: Pr,
            metalness: Br,
            vertexColors: !1,
            transparent: !0,
            depthWrite: !0
        });
        return Jr(r, n, t, e, i, s), {
            material: r,
            onAnimationFrame: (h)=>{
                n.value = h * .001;
            },
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 1
        };
    }, jr = {
        bucketKey: "lava_245",
        occlusionGroup: "lava_245",
        shaderVersion: 4,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !0,
            deformSurface: !0
        },
        passable: !0,
        factory: Qr,
        special: {
            paletteIndex: 245,
            label: "Lava",
            swatchColor: Bi,
            category: "liquids"
        }
    }, eo = "/materials/leaves_252/leaves_256x256.png", to = "#3f8f2a", io = 1, so = .8, no = 0, Vi = .5, ro = $e(eo), Gi = [
        "uniform sampler2D leavesMap;",
        "vec2 getLeavesUv(vec3 worldPosition, vec3 worldNormal) {",
        "	vec3 n = abs(normalize(worldNormal));",
        "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
        "	if (n.x >= n.z) return worldPosition.zy;",
        "	return worldPosition.xy;",
        "}"
    ], $i = io.toFixed(1);
    function oo(o, e, t, i, s, n) {
        o.onBeforeCompile = (r)=>{
            P(r, t), r.uniforms.leavesMap = {
                value: e
            }, j(r, i), q(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...W,
                ...Z,
                ...B
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...U,
                ...K,
                ...V
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...I(n),
                ...Gi,
                ...J,
                ...G
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", [
                "#include <color_fragment>",
                `vec4 leavesTexel = texture2D(leavesMap, getLeavesUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${$i});`,
                "diffuseColor.rgb *= leavesTexel.rgb;",
                "diffuseColor.a *= leavesTexel.a;",
                `diffuseColor.rgb *= ${F};`
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", $.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", Q.join(`
`));
        };
    }
    function ao(o) {
        const e = new ds({
            depthPacking: 3201,
            alphaTest: Vi,
            side: 2
        });
        return e.onBeforeCompile = (t)=>{
            t.uniforms.leavesMap = {
                value: o
            }, t.vertexShader = t.vertexShader.replace("#include <common>", [
                "#include <common>",
                "varying vec3 vLeavesWorldPosition;",
                "varying vec3 vLeavesWorldNormal;"
            ].join(`
`)).replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                "vLeavesWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
                "vLeavesWorldNormal = mat3(modelMatrix) * normal;"
            ].join(`
`)), t.fragmentShader = t.fragmentShader.replace("#include <common>", [
                "#include <common>",
                "varying vec3 vLeavesWorldPosition;",
                "varying vec3 vLeavesWorldNormal;",
                ...Gi
            ].join(`
`)).replace("#include <alphamap_fragment>", [
                "#include <alphamap_fragment>",
                `diffuseColor.a *= texture2D(leavesMap, getLeavesUv(vLeavesWorldPosition, vLeavesWorldNormal) * ${$i}).a;`
            ].join(`
`));
        }, e.customProgramCacheKey = ()=>"terrain-leaves_252-depth-v1", e;
    }
    const lo = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = ro(s), r = new L({
            roughness: so,
            metalness: no,
            vertexColors: !1,
            alphaTest: Vi,
            side: 2
        });
        return oo(r, n, t, e, i, s), {
            material: r,
            castShadow: !0,
            receiveShadow: !0,
            customDepthMaterial: ao(n),
            renderOrder: 2
        };
    }, ho = {
        bucketKey: "leaves_252",
        occlusionGroup: "leaves_252",
        shaderVersion: 1,
        geometry: {
            vertexColors: !1
        },
        seeThrough: !0,
        factory: lo,
        special: {
            paletteIndex: 252,
            label: "Leaves",
            swatchColor: to,
            category: "nature"
        }
    }, zt = "#ffd166", co = .35, uo = 0, fo = 3.5, mo = (o)=>{
        const { heroOcclusion: e } = o, t = new L({
            color: zt,
            emissive: zt,
            emissiveIntensity: fo,
            roughness: co,
            metalness: uo,
            vertexColors: !1
        });
        return Di(t, e), {
            material: t,
            castShadow: !1,
            receiveShadow: !1
        };
    }, po = {
        bucketKey: "light_243",
        occlusionGroup: "solid",
        shaderVersion: 3,
        geometry: {
            vertexColors: !1
        },
        passable: !0,
        factory: mo,
        special: {
            paletteIndex: 243,
            label: "Light",
            swatchColor: zt
        }
    }, qi = "#A8B8C8", xt = .5, yt = [
        .8,
        .82,
        .86
    ], vt = [
        .22,
        .3,
        .45
    ], go = .35, xo = 0, yo = [
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
    function vo() {
        return [
            ...W
        ];
    }
    function _o() {
        return [
            ...U
        ];
    }
    function So(o) {
        return [
            ...I(o),
            yo,
            `const vec3 S_COL1 = vec3(${yt[0].toFixed(3)}, ${yt[1].toFixed(3)}, ${yt[2].toFixed(3)});`,
            `const vec3 S_COL2 = vec3(${vt[0].toFixed(3)}, ${vt[1].toFixed(3)}, ${vt[2].toFixed(3)});`
        ];
    }
    function Mo(o) {
        const e = [
            "vec3 sNrm = normalize(vVoxelAoWorldNormal);",
            "bool sIsBottom = sNrm.y < -0.5;",
            "vec2 sUv = vec2(0.0);",
            "if (!sIsBottom) {",
            "	if (abs(sNrm.x) > abs(sNrm.z) && abs(sNrm.x) > abs(sNrm.y)) {",
            `		sUv = vVoxelAoWorldPosition.zy * ${xt.toFixed(3)};`,
            "	} else if (abs(sNrm.z) > abs(sNrm.y)) {",
            `		sUv = vVoxelAoWorldPosition.xy * ${xt.toFixed(3)};`,
            "	} else {",
            `		sUv = vVoxelAoWorldPosition.xz * ${xt.toFixed(3)};`,
            "	}",
            "}"
        ], i = [
            "	vec2 sQ = vec2(0.0), sR = vec2(0.0);",
            `	${o ? "float sF = silverPatternLow(sUv, sQ, sR);" : "float sF = silverPattern(sUv, sQ, sR);"}`,
            "	vec3 sC = mix(S_COL1, vec3(0.0), pow(smoothstep(0., 0.9, sF), 2.));",
            "	sC += S_COL2 * pow(smoothstep(0., 0.8, dot(sQ, sR)*0.6), 3.) * 1.5;",
            "	sC *= pow(dot(sQ, sR) + 0.3, 3.);",
            "	sC *= sF * 1.5;",
            `	sC *= ${F};`,
            "	diffuseColor = vec4(sC, 1.0);"
        ];
        return [
            ...e,
            "if (sIsBottom) {",
            `	diffuseColor = vec4(S_COL2 * 0.3 * ${F}, 1.0);`,
            "} else {",
            ...i,
            "}"
        ];
    }
    function wo(o, e, t, i, s) {
        o.onBeforeCompile = (n)=>{
            P(n, e), j(n, t), q(n, i), n.vertexShader = n.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...vo(),
                ...Z,
                ...B
            ].join(`
`)), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ..._o(),
                ...K,
                ...V
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...So(s),
                ...J,
                ...G
            ].join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <color_fragment>", Mo(s).join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <clipping_planes_fragment>", $.join(`
`)), n.fragmentShader = n.fragmentShader.replace("#include <dithering_fragment>", Q.join(`
`));
        };
    }
    const bo = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = new L({
            color: qi,
            roughness: go,
            metalness: xo,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return wo(n, t, e, i, s), {
            material: n,
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, Fo = {
        bucketKey: "silver_248",
        occlusionGroup: "solid",
        shaderVersion: 5,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !1,
            deformSurface: !1
        },
        factory: bo,
        special: {
            paletteIndex: 248,
            label: "Silver",
            swatchColor: qi,
            category: "metals"
        }
    }, Co = "/materials/bricks_240/bricks_256x256.png", Ao = "#8f8f8f", Eo = 1, To = $e(Co);
    function Ro() {
        return [
            ...W
        ];
    }
    function Lo() {
        return [
            ...U
        ];
    }
    function zo(o) {
        return [
            ...I(o),
            "uniform sampler2D stoneBricksMap;",
            "vec2 getStoneBricksUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function Oo() {
        return [
            "#include <color_fragment>",
            `vec2 stoneBricksUv = getStoneBricksUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Eo.toFixed(1)};`,
            "vec4 stoneBricksTexel = texture2D(stoneBricksMap, stoneBricksUv);",
            "diffuseColor.rgb *= stoneBricksTexel.rgb;",
            "diffuseColor.a *= stoneBricksTexel.a;",
            `diffuseColor.rgb *= ${F};`
        ];
    }
    function Io(o, e, t, i, s, n) {
        o.onBeforeCompile = (r)=>{
            P(r, t), r.uniforms.stoneBricksMap = {
                value: e
            }, j(r, i), q(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Ro(),
                ...Z,
                ...B
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Lo(),
                ...K,
                ...V
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...zo(n),
                ...J,
                ...G
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", $.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", Oo().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", Q.join(`
`));
        };
    }
    const No = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = To(s), r = new L({
            roughness: ge.ROUGHNESS,
            metalness: ge.METALNESS,
            vertexColors: !1
        });
        return Io(r, n, t, e, i, s), {
            material: r,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Do = {
        bucketKey: "stonebricks_240",
        occlusionGroup: "solid",
        shaderVersion: 5,
        geometry: {
            vertexColors: !1
        },
        factory: No,
        special: {
            paletteIndex: 240,
            label: "Stone Bricks",
            swatchColor: Ao,
            category: "buildings"
        }
    }, Ho = "#1a6699", ko = 2, Wo = 1.1, _t = [
        .9,
        .9,
        .95
    ], St = [
        .1,
        .4,
        .6
    ], Mt = [
        0,
        .2,
        .4
    ], pi = .86, gi = .75, xi = .48, Uo = .115, Po = .045, yi = 2.4, vi = 1.6, _i = .8, Si = 1.2, Mi = 1.4, Bo = .2, Vo = 0, Go = [
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
    function $o() {
        return [
            "attribute float surfaceDeformStrength;",
            ...W,
            "uniform float uWaterTime;"
        ];
    }
    function qo(o) {
        const e = o ? Po : Uo;
        return [
            "vec3 waterWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            `float waterRippleA = sin(waterWorld.x * ${yi.toFixed(3)} + uWaterTime * ${vi.toFixed(3)});`,
            `float waterRippleB = cos(waterWorld.z * ${yi.toFixed(3)} * 1.13 + uWaterTime * ${vi.toFixed(3)} * 0.87);`,
            `float waterDisplacement = (waterRippleA + waterRippleB) * 0.5 * ${e.toFixed(4)} * surfaceDeformStrength;`,
            "transformed.y += waterDisplacement;",
            ...U
        ];
    }
    function Xo(o) {
        const e = [
            ...I(o),
            "uniform float uWaterTime;",
            `const vec3 W_FOAM = vec3(${_t[0].toFixed(3)}, ${_t[1].toFixed(3)}, ${_t[2].toFixed(3)});`,
            `const vec3 W_MAIN = vec3(${St[0].toFixed(3)}, ${St[1].toFixed(3)}, ${St[2].toFixed(3)});`,
            `const vec3 W_DARK = vec3(${Mt[0].toFixed(3)}, ${Mt[1].toFixed(3)}, ${Mt[2].toFixed(3)});`
        ];
        return o || e.push(Go), e;
    }
    function Yo(o) {
        return o ? [
            "vec3 wNrm = normalize(vVoxelAoWorldNormal);",
            "bool wIsTopSurface = wNrm.y > 0.5;",
            "bool wIsBottomSurface = wNrm.y < -0.5;",
            "if (wIsBottomSurface) {",
            `	diffuseColor = vec4(W_MAIN * ${F}, ${xi.toFixed(3)});`,
            "} else {",
            "float wWave = 0.0;",
            "float wFoamMask = 0.0;",
            "if (wIsTopSurface) {",
            "	vec2 wUv = vVoxelAoWorldPosition.xz;",
            "	wWave = 0.5 + 0.5 * sin(wUv.x * 4.0 + uWaterTime * 1.7 + cos(wUv.y * 2.0));",
            "	wFoamMask = smoothstep(0.88, 1.0, wWave);",
            "} else {",
            "	float wFallH = (abs(wNrm.x) > abs(wNrm.z)) ? vVoxelAoWorldPosition.z : vVoxelAoWorldPosition.x;",
            `	vec2 wFallUv = vec2(wFallH / ${_i.toFixed(3)}, vVoxelAoWorldPosition.y / ${Si.toFixed(3)} + uWaterTime * ${Mi.toFixed(3)});`,
            "	float wFallColumn = sin(wFallUv.x * 6.283);",
            "	float wFallA = 0.5 + 0.5 * sin(wFallUv.y * 6.283 + wFallColumn * 1.1);",
            "	float wFallB = 0.5 + 0.5 * sin(wFallUv.y * 11.0 + wFallUv.x * 2.3);",
            "	wWave = clamp(wFallA * 0.72 + wFallB * 0.28, 0.0, 1.0);",
            "	wFoamMask = 0.0;",
            "}",
            "vec3 wBody = mix(W_DARK, W_MAIN, wWave);",
            "vec3 wColor = mix(wBody, W_FOAM, wFoamMask * 0.65);",
            `wColor *= ${F};`,
            `float wAlpha = mix(${pi.toFixed(3)}, ${gi.toFixed(3)}, wFoamMask);`,
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
            `	diffuseColor = vec4(W_MAIN * ${F}, ${xi.toFixed(3)});`,
            "} else {",
            "if (wIsTopSurface) {",
            `	vec2 wUvFoam   = vVoxelAoWorldPosition.xz / ${ko.toFixed(3)};`,
            `	vec2 wUvRipple = vVoxelAoWorldPosition.xz / ${Wo.toFixed(3)};`,
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
            `	vec2 wUvRipple = vec2(wFallH / ${_i.toFixed(3)}, wFallV / ${Si.toFixed(3)} + uWaterTime * ${Mi.toFixed(3)});`,
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
            `wColor *= ${F};`,
            `float wAlpha = mix(${pi.toFixed(3)}, ${gi.toFixed(3)}, wFoamMask);`,
            "diffuseColor = vec4(wColor, wAlpha);",
            "}"
        ];
    }
    function Zo(o, e, t, i, s, n) {
        o.onBeforeCompile = (r)=>{
            P(r, t), r.uniforms.uWaterTime = e, j(r, i), q(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...$o(),
                ...Z,
                ...B
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...qo(n),
                ...K,
                ...V
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Xo(n),
                ...J,
                ...G
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", Yo(n).join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", $.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", Q.join(`
`));
        };
    }
    const Ko = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = {
            value: 0
        }, r = new L({
            roughness: Bo,
            metalness: Vo,
            vertexColors: !1,
            transparent: !0,
            depthWrite: !0
        });
        return Zo(r, n, t, e, i, s), {
            material: r,
            onAnimationFrame: (h)=>{
                n.value = h * .001;
            },
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 1
        };
    }, Jo = {
        bucketKey: "water_241",
        occlusionGroup: "water_241",
        shaderVersion: 10,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !0,
            deformSurface: !0
        },
        passable: !0,
        factory: Ko,
        special: {
            paletteIndex: 241,
            label: "Water",
            swatchColor: Ho,
            category: "liquids"
        }
    }, Qo = "/materials/wood_244/wood_256x256.png", jo = "#8b5a2b", ea = 1, ta = $e(Qo);
    function ia() {
        return [
            ...W
        ];
    }
    function sa() {
        return [
            ...U
        ];
    }
    function na(o) {
        return [
            ...I(o),
            "uniform sampler2D woodMap;",
            "vec2 getWoodUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function ra() {
        return [
            "#include <color_fragment>",
            `vec2 woodUv = getWoodUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${ea.toFixed(1)};`,
            "vec4 woodTexel = texture2D(woodMap, woodUv);",
            "diffuseColor.rgb *= woodTexel.rgb;",
            "diffuseColor.a *= woodTexel.a;",
            `diffuseColor.rgb *= ${F};`
        ];
    }
    function oa(o, e, t, i, s, n) {
        o.onBeforeCompile = (r)=>{
            P(r, t), r.uniforms.woodMap = {
                value: e
            }, j(r, i), q(r, s), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...ia(),
                ...Z,
                ...B
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...sa(),
                ...K,
                ...V
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...na(n),
                ...J,
                ...G
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", ra().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", $.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", Q.join(`
`));
        };
    }
    const aa = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: s = !1 } = o, n = ta(s), r = new L({
            roughness: ge.ROUGHNESS,
            metalness: ge.METALNESS,
            vertexColors: !1
        });
        return oa(r, n, t, e, i, s), {
            material: r,
            castShadow: !0,
            receiveShadow: !0
        };
    }, la = {
        bucketKey: "wood_244",
        occlusionGroup: "solid",
        shaderVersion: 4,
        geometry: {
            vertexColors: !1
        },
        factory: aa,
        special: {
            paletteIndex: 244,
            label: "Wood",
            swatchColor: jo,
            category: "nature"
        }
    }, Dt = [
        Be,
        Do,
        Jo,
        Mr,
        po,
        la,
        jr,
        Vn,
        tr,
        Fo,
        Dr,
        gn,
        Dn,
        ho,
        Ks
    ], he = Dt.filter((o)=>o.special !== void 0);
    he.map((o)=>({
            index: o.special.paletteIndex,
            label: o.special.label,
            color: o.special.swatchColor,
            category: o.special.category ?? "miscellaneous"
        }));
    const ha = new Map(he.map((o)=>[
            o.special.paletteIndex,
            o.bucketKey
        ])), ca = Be.occlusionGroup ?? Be.bucketKey, ua = new Map(he.map((o)=>[
            o.special.paletteIndex,
            o.occlusionGroup ?? o.bucketKey
        ])), Ht = new Map(he.map((o)=>[
            o.special.paletteIndex,
            o.geometry
        ])), kt = Be.geometry, Xi = new Set(he.filter((o)=>o.passable === !0).map((o)=>o.special.paletteIndex));
    function da(o) {
        return Xi.has(o);
    }
    const fa = new Set(he.filter((o)=>o.seeThrough === !0).map((o)=>o.special.paletteIndex)), ma = new Set(he.filter((o)=>o.volumetric === !0).map((o)=>o.special.paletteIndex));
    function pa(o) {
        return ma.has(o);
    }
    function ga(o) {
        return ha.get(o) ?? "default";
    }
    function xa(o) {
        return ua.get(o) ?? ca;
    }
    function ya(o) {
        return (Ht.get(o) ?? kt)?.deformSurface === !0;
    }
    function va(o) {
        return (Ht.get(o) ?? kt)?.vertexColors !== !1;
    }
    function _a(o) {
        return (Ht.get(o) ?? kt)?.preserveVoxelFaces === !0;
    }
    function Sa() {
        const o = new Map, e = [], t = (f)=>{
            let d = o.get(f);
            return d === void 0 && (d = e.length, o.set(f, d), e.push(f)), d;
        }, i = new Map, s = (f)=>{
            let d = i.get(f);
            return d === void 0 && (d = i.size, i.set(f, d)), d;
        }, n = new Int32Array(256), r = new Int32Array(256), a = new Uint8Array(256), h = new Uint8Array(256), l = new Uint8Array(256), c = new Uint8Array(256), u = new Uint8Array(256);
        for(let f = 0; f < 256; f++)n[f] = t(ga(f)), r[f] = s(xa(f)), a[f] = va(f) ? 1 : 0, h[f] = ya(f) ? 1 : 0, l[f] = _a(f) ? 1 : 0, c[f] = pa(f) ? 1 : 0, u[f] = da(f) ? 1 : 0;
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
    const fe = Sa(), Ma = new Map(he.map((o)=>[
            o.special.paletteIndex,
            parseInt(o.special.swatchColor.slice(1), 16)
        ]));
    ys({
        passableIndices: Xi,
        seeThroughIndices: fa,
        editorColors: Ma
    });
    function wa(o) {
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
        for (const t of Dt){
            if (o.has(t.bucketKey)) throw new Error(`Duplicate terrain material bucketKey: "${t.bucketKey}"`);
            if (o.add(t.bucketKey), t.special) {
                const { paletteIndex: i } = t.special;
                if (i < 240 || i > 255) throw new Error(`Special material "${t.bucketKey}" has paletteIndex ${i} outside the 240-255 range.`);
                if (e.has(i)) throw new Error(`Duplicate special material paletteIndex: ${i}`);
                e.add(i);
            }
        }
    }
    new Map(Dt.filter((o)=>o.factory !== void 0).map((o)=>[
            o.bucketKey,
            wa(o)
        ]));
    new Map(he.filter((o)=>o.surroundingsFactory !== void 0).map((o)=>[
            o.special.paletteIndex,
            o.surroundingsFactory
        ]));
    const wi = 1;
    function ba(o) {
        return Math.max(wi, o.Resolution ?? wi);
    }
    const qe = 12, bi = .22, Fa = .88, Ca = .18, Fi = .34, Aa = .9, Ea = .98, Ta = [
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
                Ca,
                e * 20
            ])
    ];
    function wt(o) {
        const e = Math.max(0, Math.min(1, o));
        return e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055;
    }
    function bt(o) {
        return Math.round(Math.max(0, Math.min(1, o)) * 255).toString(16).padStart(2, "0");
    }
    function Yi(o, e, t) {
        const i = t * Math.PI / 180, s = e * Math.cos(i), n = e * Math.sin(i), r = o + .3963377774 * s + .2158037573 * n, a = o - .1055613458 * s - .0638541728 * n, h = o - .0894841775 * s - 1.291485548 * n, l = r ** 3, c = a ** 3, u = h ** 3;
        return [
            4.0767416621 * l - 3.3077115913 * c + .2309699292 * u,
            -1.2684380046 * l + 2.6097574011 * c - .3413193965 * u,
            -.0041960863 * l - .7034186147 * c + 1.707614701 * u
        ];
    }
    function Ra(o, e, t) {
        const [i, s, n] = Yi(o, e, t), r = wt(i), a = wt(s), h = wt(n);
        return `#${bt(r)}${bt(a)}${bt(h)}`;
    }
    function La(o, e, t) {
        const [i, s, n] = Yi(o, e, t);
        return i >= 0 && i <= 1 && s >= 0 && s <= 1 && n >= 0 && n <= 1;
    }
    function za(o, e) {
        let t = 0, i = .4;
        for(let s = 0; s < 16; s++){
            const n = (t + i) / 2;
            La(o, n, e) ? t = n : i = n;
        }
        return t * Ea;
    }
    function Zi(o) {
        const e = o / (qe - 1);
        return bi + e * (Fa - bi);
    }
    function Oa(o, e, t) {
        if (e <= 0 || t === null) return 0;
        const i = o / (qe - 1), s = Math.pow(Math.sin(Math.PI * i), Aa), n = e * (Fi + (1 - Fi) * s);
        return Math.min(n, za(Zi(o), t));
    }
    function Ia() {
        const o = [];
        for (const [e, t] of Ta)for(let i = 0; i < qe; i++){
            const s = Zi(i), n = Oa(i, e, t);
            o.push(Ra(s, n, t ?? 0));
        }
        return o;
    }
    const Ve = Ia(), Ki = qe - 1;
    function Na(o) {
        return Ve[o] ?? Ve[Ki];
    }
    function Ci(o) {
        const e = o.replace("#", "");
        return {
            r: parseInt(e.slice(0, 2), 16),
            g: parseInt(e.slice(2, 4), 16),
            b: parseInt(e.slice(4, 6), 16)
        };
    }
    function Da(o) {
        return `#${(o & 16777215).toString(16).padStart(6, "0")}`;
    }
    function Ft(o) {
        const e = o / 255;
        return e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4);
    }
    function Ai(o, e, t) {
        const i = Ft(o), s = Ft(e), n = Ft(t), r = Math.cbrt(.4122214708 * i + .5363325363 * s + .0514459929 * n), a = Math.cbrt(.2119034982 * i + .6806995451 * s + .1073969566 * n), h = Math.cbrt(.0883024619 * i + .2817188376 * s + .6299787005 * n);
        return [
            .2104542553 * r + .793617785 * a - .0040720468 * h,
            1.9779984951 * r - 2.428592205 * a + .4505937099 * h,
            .0259040371 * r + .7827717662 * a - .808675766 * h
        ];
    }
    function Ha(o) {
        const e = vs(o);
        return e !== void 0 ? e : parseInt(Na(o).slice(1), 16);
    }
    function ka(o) {
        const { r: e, g: t, b: i } = Ci(Da(o)), [s, n, r] = Ai(e, t, i);
        let a = Ki, h = 1 / 0;
        for(let l = 0; l < Ve.length; l++){
            const c = Ci(Ve[l]), [u, f, d] = Ai(c.r, c.g, c.b), m = s - u, p = n - f, x = r - d, g = m * m + p * p + x * x;
            g < h && (h = g, a = l);
        }
        return a;
    }
    function Wa(o) {
        const e = Math.floor(o);
        return e >= 0 && e <= 255 ? e : ka(o);
    }
    const Ua = fe.bucketKeyById;
    let Ue = null;
    function Pa() {
        return Ue || (Ue = (async ()=>{
            const { VoxelMesher: e } = await import("./voxel_mesher-8kBYlObl.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), t = new Float32Array(256 * 3);
            for(let i = 0; i < 256; i++){
                const s = new le(Ha(Wa(i)));
                t[i * 3] = s.r, t[i * 3 + 1] = s.g, t[i * 3 + 2] = s.b;
            }
            return new e(fe.bucketId, fe.occlusionId, fe.usesVertexColors, fe.deformsSurface, fe.preservesVoxelFaces, fe.isVolumetric, t);
        })().catch((e)=>{
            throw Ue = null, e;
        })), Ue;
    }
    function se(o) {
        const { buffer: e } = o;
        if (e instanceof ArrayBuffer) return e;
        throw new Error("Cannot transfer SharedArrayBuffer-backed voxel geometry buffers.");
    }
    function Ba(o) {
        return o instanceof Error ? o.message : String(o);
    }
    function Ei(o, e, t) {
        self.postMessage({
            buildId: o,
            error: `Failed to ${e}: ${Ba(t)}`
        });
    }
    self.onmessage = async (o)=>{
        const { buildId: e, terrain: t, voxels: i } = o.data;
        let s;
        try {
            s = await Pa();
        } catch (n) {
            console.error("[voxel-build] WASM mesher init FAILED:", n), Ei(e, "initialize the WebAssembly terrain mesher", n);
            return;
        }
        try {
            Va(s, e, t, i);
        } catch (n) {
            console.error("[voxel-build] WASM build FAILED:", n), Ei(e, "build the terrain geometry", n);
        }
    };
    function Va(o, e, t, i) {
        const s = ba(t), n = Math.max(t.Width, t.Height, t.Length) * s, r = xs(n), a = o.build_from_svo(i, t.Width, t.Height, t.Length, s, r), h = [], l = [];
        let c, u, f, d, m;
        try {
            const v = a.bucket_count();
            for(let y = 0; y < v; y++){
                const w = Ua[a.bucket_id(y)], S = a.take_positions(y), b = a.take_normals(y), M = a.take_colors(y), E = a.take_surface_deform(y), N = a.take_tile_heights(y), D = a.take_highlights(y), H = a.take_indices(y);
                h.push({
                    key: w,
                    positions: S,
                    normals: b,
                    colors: M,
                    surfaceDeformStrength: E,
                    tileHeights: N,
                    highlightStrengths: D,
                    indices: H
                }), l.push(se(S)), l.push(se(b)), M && l.push(se(M)), E && l.push(se(E)), l.push(se(N)), l.push(se(D)), l.push(se(H));
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
        l.push(se(x.data)), g && l.push(se(g.data)), self.postMessage({
            buildId: e,
            buckets: h,
            occupancy: x,
            fogVolume: g
        }, l);
    }
})();
