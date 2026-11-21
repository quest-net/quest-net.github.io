(async ()=>{
    const I = "srgb", Ct = "srgb-linear", Wt = "linear", Xe = "srgb";
    function Tt(o) {
        return document.createElementNS("http://www.w3.org/1999/xhtml", o);
    }
    const Bt = {};
    function Li(o) {
        const e = o[0];
        if (typeof e == "string" && e.startsWith("TSL:")) {
            const t = o[1];
            t && t.isStackTrace ? o[0] += " " + t.getLocation() : o[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
        }
        return o;
    }
    function z(...o) {
        o = Li(o);
        const e = "THREE." + o.shift();
        {
            const t = o[0];
            t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...o);
        }
    }
    function Vt(...o) {
        o = Li(o);
        const e = "THREE." + o.shift();
        {
            const t = o[0];
            t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...o);
        }
    }
    function Ye(...o) {
        const e = o.join(" ");
        e in Bt || (Bt[e] = !0, z(...o));
    }
    class Nt {
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
                const s = n.indexOf(t);
                s !== -1 && n.splice(s, 1);
            }
        }
        dispatchEvent(e) {
            const t = this._listeners;
            if (t === void 0) return;
            const i = t[e.type];
            if (i !== void 0) {
                e.target = this;
                const n = i.slice(0);
                for(let s = 0, r = n.length; s < r; s++)n[s].call(this, e);
                e.target = null;
            }
        }
    }
    const C = [
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
        return (C[o & 255] + C[o >> 8 & 255] + C[o >> 16 & 255] + C[o >> 24 & 255] + "-" + C[e & 255] + C[e >> 8 & 255] + "-" + C[e >> 16 & 15 | 64] + C[e >> 24 & 255] + "-" + C[t & 63 | 128] + C[t >> 8 & 255] + "-" + C[t >> 16 & 255] + C[t >> 24 & 255] + C[i & 255] + C[i >> 8 & 255] + C[i >> 16 & 255] + C[i >> 24 & 255]).toLowerCase();
    }
    function M(o, e, t) {
        return Math.max(e, Math.min(t, o));
    }
    function Qi(o, e) {
        return (o % e + e) % e;
    }
    function Ze(o, e, t) {
        return (1 - t) * o + t * e;
    }
    class fe {
        static{
            this.prototype.isVector2 = !0;
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
            return this.x = M(this.x, e.x, t.x), this.y = M(this.y, e.y, t.y), this;
        }
        clampScalar(e, t) {
            return this.x = M(this.x, e, t), this.y = M(this.y, e, t), this;
        }
        clampLength(e, t) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(M(i, e, t));
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
            return Math.acos(M(i, -1, 1));
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
            const i = Math.cos(t), n = Math.sin(t), s = this.x - e.x, r = this.y - e.y;
            return this.x = s * i - r * n + e.x, this.y = s * n + r * i + e.y, this;
        }
        random() {
            return this.x = Math.random(), this.y = Math.random(), this;
        }
        *[Symbol.iterator]() {
            yield this.x, yield this.y;
        }
    }
    class Ee {
        constructor(e = 0, t = 0, i = 0, n = 1){
            this.isQuaternion = !0, this._x = e, this._y = t, this._z = i, this._w = n;
        }
        static slerpFlat(e, t, i, n, s, r, a) {
            let h = i[n + 0], l = i[n + 1], c = i[n + 2], u = i[n + 3], m = s[r + 0], f = s[r + 1], d = s[r + 2], p = s[r + 3];
            if (u !== p || h !== m || l !== f || c !== d) {
                let x = h * m + l * f + c * d + u * p;
                x < 0 && (m = -m, f = -f, d = -d, p = -p, x = -x);
                let g = 1 - a;
                if (x < .9995) {
                    const y = Math.acos(x), _ = Math.sin(y);
                    g = Math.sin(g * y) / _, a = Math.sin(a * y) / _, h = h * g + m * a, l = l * g + f * a, c = c * g + d * a, u = u * g + p * a;
                } else {
                    h = h * g + m * a, l = l * g + f * a, c = c * g + d * a, u = u * g + p * a;
                    const y = 1 / Math.sqrt(h * h + l * l + c * c + u * u);
                    h *= y, l *= y, c *= y, u *= y;
                }
            }
            e[t] = h, e[t + 1] = l, e[t + 2] = c, e[t + 3] = u;
        }
        static multiplyQuaternionsFlat(e, t, i, n, s, r) {
            const a = i[n], h = i[n + 1], l = i[n + 2], c = i[n + 3], u = s[r], m = s[r + 1], f = s[r + 2], d = s[r + 3];
            return e[t] = a * d + c * u + h * f - l * m, e[t + 1] = h * d + c * m + l * u - a * f, e[t + 2] = l * d + c * f + a * m - h * u, e[t + 3] = c * d - a * u - h * m - l * f, e;
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
            const i = e._x, n = e._y, s = e._z, r = e._order, a = Math.cos, h = Math.sin, l = a(i / 2), c = a(n / 2), u = a(s / 2), m = h(i / 2), f = h(n / 2), d = h(s / 2);
            switch(r){
                case "XYZ":
                    this._x = m * c * u + l * f * d, this._y = l * f * u - m * c * d, this._z = l * c * d + m * f * u, this._w = l * c * u - m * f * d;
                    break;
                case "YXZ":
                    this._x = m * c * u + l * f * d, this._y = l * f * u - m * c * d, this._z = l * c * d - m * f * u, this._w = l * c * u + m * f * d;
                    break;
                case "ZXY":
                    this._x = m * c * u - l * f * d, this._y = l * f * u + m * c * d, this._z = l * c * d + m * f * u, this._w = l * c * u - m * f * d;
                    break;
                case "ZYX":
                    this._x = m * c * u - l * f * d, this._y = l * f * u + m * c * d, this._z = l * c * d - m * f * u, this._w = l * c * u + m * f * d;
                    break;
                case "YZX":
                    this._x = m * c * u + l * f * d, this._y = l * f * u + m * c * d, this._z = l * c * d - m * f * u, this._w = l * c * u - m * f * d;
                    break;
                case "XZY":
                    this._x = m * c * u - l * f * d, this._y = l * f * u - m * c * d, this._z = l * c * d + m * f * u, this._w = l * c * u + m * f * d;
                    break;
                default:
                    z("Quaternion: .setFromEuler() encountered an unknown order: " + r);
            }
            return t === !0 && this._onChangeCallback(), this;
        }
        setFromAxisAngle(e, t) {
            const i = t / 2, n = Math.sin(i);
            return this._x = e.x * n, this._y = e.y * n, this._z = e.z * n, this._w = Math.cos(i), this._onChangeCallback(), this;
        }
        setFromRotationMatrix(e) {
            const t = e.elements, i = t[0], n = t[4], s = t[8], r = t[1], a = t[5], h = t[9], l = t[2], c = t[6], u = t[10], m = i + a + u;
            if (m > 0) {
                const f = .5 / Math.sqrt(m + 1);
                this._w = .25 / f, this._x = (c - h) * f, this._y = (s - l) * f, this._z = (r - n) * f;
            } else if (i > a && i > u) {
                const f = 2 * Math.sqrt(1 + i - a - u);
                this._w = (c - h) / f, this._x = .25 * f, this._y = (n + r) / f, this._z = (s + l) / f;
            } else if (a > u) {
                const f = 2 * Math.sqrt(1 + a - i - u);
                this._w = (s - l) / f, this._x = (n + r) / f, this._y = .25 * f, this._z = (h + c) / f;
            } else {
                const f = 2 * Math.sqrt(1 + u - i - a);
                this._w = (r - n) / f, this._x = (s + l) / f, this._y = (h + c) / f, this._z = .25 * f;
            }
            return this._onChangeCallback(), this;
        }
        setFromUnitVectors(e, t) {
            let i = e.dot(t) + 1;
            return i < 1e-8 ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
        }
        angleTo(e) {
            return 2 * Math.acos(Math.abs(M(this.dot(e), -1, 1)));
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
            const i = e._x, n = e._y, s = e._z, r = e._w, a = t._x, h = t._y, l = t._z, c = t._w;
            return this._x = i * c + r * a + n * l - s * h, this._y = n * c + r * h + s * a - i * l, this._z = s * c + r * l + i * h - n * a, this._w = r * c - i * a - n * h - s * l, this._onChangeCallback(), this;
        }
        slerp(e, t) {
            let i = e._x, n = e._y, s = e._z, r = e._w, a = this.dot(e);
            a < 0 && (i = -i, n = -n, s = -s, r = -r, a = -a);
            let h = 1 - t;
            if (a < .9995) {
                const l = Math.acos(a), c = Math.sin(l);
                h = Math.sin(h * l) / c, t = Math.sin(t * l) / c, this._x = this._x * h + i * t, this._y = this._y * h + n * t, this._z = this._z * h + s * t, this._w = this._w * h + r * t, this._onChangeCallback();
            } else this._x = this._x * h + i * t, this._y = this._y * h + n * t, this._z = this._z * h + s * t, this._w = this._w * h + r * t, this.normalize();
            return this;
        }
        slerpQuaternions(e, t, i) {
            return this.copy(e).slerp(t, i);
        }
        random() {
            const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), i = Math.random(), n = Math.sqrt(1 - i), s = Math.sqrt(i);
            return this.set(n * Math.sin(e), n * Math.cos(e), s * Math.sin(t), s * Math.cos(t));
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
    class F {
        static{
            this.prototype.isVector3 = !0;
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
            return this.applyQuaternion(Gt.setFromEuler(e));
        }
        applyAxisAngle(e, t) {
            return this.applyQuaternion(Gt.setFromAxisAngle(e, t));
        }
        applyMatrix3(e) {
            const t = this.x, i = this.y, n = this.z, s = e.elements;
            return this.x = s[0] * t + s[3] * i + s[6] * n, this.y = s[1] * t + s[4] * i + s[7] * n, this.z = s[2] * t + s[5] * i + s[8] * n, this;
        }
        applyNormalMatrix(e) {
            return this.applyMatrix3(e).normalize();
        }
        applyMatrix4(e) {
            const t = this.x, i = this.y, n = this.z, s = e.elements, r = 1 / (s[3] * t + s[7] * i + s[11] * n + s[15]);
            return this.x = (s[0] * t + s[4] * i + s[8] * n + s[12]) * r, this.y = (s[1] * t + s[5] * i + s[9] * n + s[13]) * r, this.z = (s[2] * t + s[6] * i + s[10] * n + s[14]) * r, this;
        }
        applyQuaternion(e) {
            const t = this.x, i = this.y, n = this.z, s = e.x, r = e.y, a = e.z, h = e.w, l = 2 * (r * n - a * i), c = 2 * (a * t - s * n), u = 2 * (s * i - r * t);
            return this.x = t + h * l + r * u - a * c, this.y = i + h * c + a * l - s * u, this.z = n + h * u + s * c - r * l, this;
        }
        project(e) {
            return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
        }
        unproject(e) {
            return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
        }
        transformDirection(e) {
            const t = this.x, i = this.y, n = this.z, s = e.elements;
            return this.x = s[0] * t + s[4] * i + s[8] * n, this.y = s[1] * t + s[5] * i + s[9] * n, this.z = s[2] * t + s[6] * i + s[10] * n, this.normalize();
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
            return this.x = M(this.x, e.x, t.x), this.y = M(this.y, e.y, t.y), this.z = M(this.z, e.z, t.z), this;
        }
        clampScalar(e, t) {
            return this.x = M(this.x, e, t), this.y = M(this.y, e, t), this.z = M(this.z, e, t), this;
        }
        clampLength(e, t) {
            const i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(M(i, e, t));
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
            const i = e.x, n = e.y, s = e.z, r = t.x, a = t.y, h = t.z;
            return this.x = n * h - s * a, this.y = s * r - i * h, this.z = i * a - n * r, this;
        }
        projectOnVector(e) {
            const t = e.lengthSq();
            if (t === 0) return this.set(0, 0, 0);
            const i = e.dot(this) / t;
            return this.copy(e).multiplyScalar(i);
        }
        projectOnPlane(e) {
            return Je.copy(this).projectOnVector(e), this.sub(Je);
        }
        reflect(e) {
            return this.sub(Je.copy(e).multiplyScalar(2 * this.dot(e)));
        }
        angleTo(e) {
            const t = Math.sqrt(this.lengthSq() * e.lengthSq());
            if (t === 0) return Math.PI / 2;
            const i = this.dot(e) / t;
            return Math.acos(M(i, -1, 1));
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
    const Je = new F, Gt = new Ee;
    class we {
        static{
            this.prototype.isMatrix3 = !0;
        }
        constructor(e, t, i, n, s, r, a, h, l){
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
            ], e !== void 0 && this.set(e, t, i, n, s, r, a, h, l);
        }
        set(e, t, i, n, s, r, a, h, l) {
            const c = this.elements;
            return c[0] = e, c[1] = n, c[2] = a, c[3] = t, c[4] = s, c[5] = h, c[6] = i, c[7] = r, c[8] = l, this;
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
            const i = e.elements, n = t.elements, s = this.elements, r = i[0], a = i[3], h = i[6], l = i[1], c = i[4], u = i[7], m = i[2], f = i[5], d = i[8], p = n[0], x = n[3], g = n[6], y = n[1], _ = n[4], b = n[7], v = n[2], S = n[5], w = n[8];
            return s[0] = r * p + a * y + h * v, s[3] = r * x + a * _ + h * S, s[6] = r * g + a * b + h * w, s[1] = l * p + c * y + u * v, s[4] = l * x + c * _ + u * S, s[7] = l * g + c * b + u * w, s[2] = m * p + f * y + d * v, s[5] = m * x + f * _ + d * S, s[8] = m * g + f * b + d * w, this;
        }
        multiplyScalar(e) {
            const t = this.elements;
            return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
        }
        determinant() {
            const e = this.elements, t = e[0], i = e[1], n = e[2], s = e[3], r = e[4], a = e[5], h = e[6], l = e[7], c = e[8];
            return t * r * c - t * a * l - i * s * c + i * a * h + n * s * l - n * r * h;
        }
        invert() {
            const e = this.elements, t = e[0], i = e[1], n = e[2], s = e[3], r = e[4], a = e[5], h = e[6], l = e[7], c = e[8], u = c * r - a * l, m = a * h - c * s, f = l * s - r * h, d = t * u + i * m + n * f;
            if (d === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const p = 1 / d;
            return e[0] = u * p, e[1] = (n * l - c * i) * p, e[2] = (a * i - n * r) * p, e[3] = m * p, e[4] = (c * t - n * h) * p, e[5] = (n * s - a * t) * p, e[6] = f * p, e[7] = (i * h - l * t) * p, e[8] = (r * t - i * s) * p, this;
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
        setUvTransform(e, t, i, n, s, r, a) {
            const h = Math.cos(s), l = Math.sin(s);
            return this.set(i * h, i * l, -i * (h * r + l * a) + r + e, -n * l, n * h, -n * (-l * r + h * a) + a + t, 0, 0, 1), this;
        }
        scale(e, t) {
            return Ye("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(Ke.makeScale(e, t)), this;
        }
        rotate(e) {
            return Ye("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(Ke.makeRotation(-e)), this;
        }
        translate(e, t) {
            return Ye("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(Ke.makeTranslation(e, t)), this;
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
    const Ke = new we, $t = new we().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), qt = new we().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
    function ji() {
        const o = {
            enabled: !0,
            workingColorSpace: Ct,
            spaces: {},
            convert: function(n, s, r) {
                return this.enabled === !1 || s === r || !s || !r || (this.spaces[s].transfer === Xe && (n.r = oe(n.r), n.g = oe(n.g), n.b = oe(n.b)), this.spaces[s].primaries !== this.spaces[r].primaries && (n.applyMatrix3(this.spaces[s].toXYZ), n.applyMatrix3(this.spaces[r].fromXYZ)), this.spaces[r].transfer === Xe && (n.r = Me(n.r), n.g = Me(n.g), n.b = Me(n.b))), n;
            },
            workingToColorSpace: function(n, s) {
                return this.convert(n, this.workingColorSpace, s);
            },
            colorSpaceToWorking: function(n, s) {
                return this.convert(n, s, this.workingColorSpace);
            },
            getPrimaries: function(n) {
                return this.spaces[n].primaries;
            },
            getTransfer: function(n) {
                return n === "" ? Wt : this.spaces[n].transfer;
            },
            getToneMappingMode: function(n) {
                return this.spaces[n].outputColorSpaceConfig.toneMappingMode || "standard";
            },
            getLuminanceCoefficients: function(n, s = this.workingColorSpace) {
                return n.fromArray(this.spaces[s].luminanceCoefficients);
            },
            define: function(n) {
                Object.assign(this.spaces, n);
            },
            _getMatrix: function(n, s, r) {
                return n.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ);
            },
            _getDrawingBufferColorSpace: function(n) {
                return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace;
            },
            _getUnpackColorSpace: function(n = this.workingColorSpace) {
                return this.spaces[n].workingColorSpaceConfig.unpackColorSpace;
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
                toXYZ: $t,
                fromXYZ: qt,
                luminanceCoefficients: t,
                workingColorSpaceConfig: {
                    unpackColorSpace: I
                },
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: I
                }
            },
            [I]: {
                primaries: e,
                whitePoint: i,
                transfer: Xe,
                toXYZ: $t,
                fromXYZ: qt,
                luminanceCoefficients: t,
                outputColorSpaceConfig: {
                    drawingBufferColorSpace: I
                }
            }
        }), o;
    }
    const Z = ji();
    function oe(o) {
        return o < .04045 ? o * .0773993808 : Math.pow(o * .9478672986 + .0521327014, 2.4);
    }
    function Me(o) {
        return o < .0031308 ? o * 12.92 : 1.055 * Math.pow(o, .41666) - .055;
    }
    let xe;
    class en {
        static getDataURL(e, t = "image/png") {
            if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
            let i;
            if (e instanceof HTMLCanvasElement) i = e;
            else {
                xe === void 0 && (xe = Tt("canvas")), xe.width = e.width, xe.height = e.height;
                const n = xe.getContext("2d");
                e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), i = xe;
            }
            return i.toDataURL(t);
        }
        static sRGBToLinear(e) {
            if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
                const t = Tt("canvas");
                t.width = e.width, t.height = e.height;
                const i = t.getContext("2d");
                i.drawImage(e, 0, 0, e.width, e.height);
                const n = i.getImageData(0, 0, e.width, e.height), s = n.data;
                for(let r = 0; r < s.length; r++)s[r] = oe(s[r] / 255) * 255;
                return i.putImageData(n, 0, 0), t;
            } else if (e.data) {
                const t = e.data.slice(0);
                for(let i = 0; i < t.length; i++)t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(oe(t[i] / 255) * 255) : t[i] = oe(t[i]);
                return {
                    data: t,
                    width: e.width,
                    height: e.height
                };
            } else return z("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
        }
    }
    let tn = 0;
    class nn {
        constructor(e = null){
            this.isTextureSource = !0, Object.defineProperty(this, "id", {
                value: tn++
            }), this.uuid = Ge(), this.data = e, this.dataReady = !0, this.version = 0;
        }
        getSize(e) {
            const t = this.data;
            return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t !== null ? e.set(t.width || 0, t.height || 0, t.depth || 0) : e.set(0, 0, 0), e;
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
                let s;
                if (Array.isArray(n)) {
                    s = [];
                    for(let r = 0, a = n.length; r < a; r++)n[r].isDataTexture ? s.push(Qe(n[r].image)) : s.push(Qe(n[r]));
                } else s = Qe(n);
                i.url = s;
            }
            return t || (e.images[this.uuid] = i), i;
        }
    }
    function Qe(o) {
        return typeof HTMLImageElement < "u" && o instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && o instanceof ImageBitmap ? en.getDataURL(o) : o.data ? {
            data: Array.from(o.data),
            width: o.width,
            height: o.height,
            type: o.data.constructor.name
        } : (z("Texture: Unable to serialize Texture."), {});
    }
    let sn = 0;
    const je = new F;
    class ae extends Nt {
        constructor(e = ae.DEFAULT_IMAGE, t = ae.DEFAULT_MAPPING, i = 1001, n = 1001, s = 1006, r = 1008, a = 1023, h = 1009, l = ae.DEFAULT_ANISOTROPY, c = ""){
            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                value: sn++
            }), this.uuid = Ge(), this.name = "", this.source = new nn(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = i, this.wrapT = n, this.magFilter = s, this.minFilter = r, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = h, this.offset = new fe(0, 0), this.repeat = new fe(1, 1), this.center = new fe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new we, this.generateMipmaps = !0, this.mipmapsAutoUpdate = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = c, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0, this.isPMREMTexture = !1, this.normalized = !1;
        }
        get width() {
            return this.source.getSize(je).x;
        }
        get height() {
            return this.source.getSize(je).y;
        }
        get depth() {
            return this.source.getSize(je).z;
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
            return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.mipmapsAutoUpdate = e.mipmapsAutoUpdate, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isPMREMTexture = e.isPMREMTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
        }
        setValues(e) {
            for(const t in e){
                const i = e[t];
                if (i === void 0) {
                    z(`Texture.setValues(): parameter '${t}' has value of undefined.`);
                    continue;
                }
                const n = this[t];
                if (n === void 0) {
                    z(`Texture.setValues(): property '${t}' does not exist.`);
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
                normalized: this.normalized,
                colorSpace: this.colorSpace,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                generateMipmaps: this.generateMipmaps,
                mipmapsAutoUpdate: this.mipmapsAutoUpdate,
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
    ae.DEFAULT_IMAGE = null;
    ae.DEFAULT_MAPPING = 300;
    ae.DEFAULT_ANISOTROPY = 1;
    class rn extends ae {
        constructor(e = null, t = 1, i = 1, n = 1){
            super(null), this.isData3DTexture = !0, this.image = {
                data: e,
                width: t,
                height: i,
                depth: n
            }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
        }
        copy(e) {
            return super.copy(e), this.wrapR = e.wrapR, this;
        }
    }
    class ue {
        static{
            this.prototype.isMatrix4 = !0;
        }
        constructor(e, t, i, n, s, r, a, h, l, c, u, m, f, d, p, x){
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
            ], e !== void 0 && this.set(e, t, i, n, s, r, a, h, l, c, u, m, f, d, p, x);
        }
        set(e, t, i, n, s, r, a, h, l, c, u, m, f, d, p, x) {
            const g = this.elements;
            return g[0] = e, g[4] = t, g[8] = i, g[12] = n, g[1] = s, g[5] = r, g[9] = a, g[13] = h, g[2] = l, g[6] = c, g[10] = u, g[14] = m, g[3] = f, g[7] = d, g[11] = p, g[15] = x, this;
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
        }
        clone() {
            return new ue().fromArray(this.elements);
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
            const t = this.elements, i = e.elements, n = 1 / ve.setFromMatrixColumn(e, 0).length(), s = 1 / ve.setFromMatrixColumn(e, 1).length(), r = 1 / ve.setFromMatrixColumn(e, 2).length();
            return t[0] = i[0] * n, t[1] = i[1] * n, t[2] = i[2] * n, t[3] = 0, t[4] = i[4] * s, t[5] = i[5] * s, t[6] = i[6] * s, t[7] = 0, t[8] = i[8] * r, t[9] = i[9] * r, t[10] = i[10] * r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
        }
        makeRotationFromEuler(e) {
            const t = this.elements, i = e.x, n = e.y, s = e.z, r = Math.cos(i), a = Math.sin(i), h = Math.cos(n), l = Math.sin(n), c = Math.cos(s), u = Math.sin(s);
            if (e.order === "XYZ") {
                const m = r * c, f = r * u, d = a * c, p = a * u;
                t[0] = h * c, t[4] = -h * u, t[8] = l, t[1] = f + d * l, t[5] = m - p * l, t[9] = -a * h, t[2] = p - m * l, t[6] = d + f * l, t[10] = r * h;
            } else if (e.order === "YXZ") {
                const m = h * c, f = h * u, d = l * c, p = l * u;
                t[0] = m + p * a, t[4] = d * a - f, t[8] = r * l, t[1] = r * u, t[5] = r * c, t[9] = -a, t[2] = f * a - d, t[6] = p + m * a, t[10] = r * h;
            } else if (e.order === "ZXY") {
                const m = h * c, f = h * u, d = l * c, p = l * u;
                t[0] = m - p * a, t[4] = -r * u, t[8] = d + f * a, t[1] = f + d * a, t[5] = r * c, t[9] = p - m * a, t[2] = -r * l, t[6] = a, t[10] = r * h;
            } else if (e.order === "ZYX") {
                const m = r * c, f = r * u, d = a * c, p = a * u;
                t[0] = h * c, t[4] = d * l - f, t[8] = m * l + p, t[1] = h * u, t[5] = p * l + m, t[9] = f * l - d, t[2] = -l, t[6] = a * h, t[10] = r * h;
            } else if (e.order === "YZX") {
                const m = r * h, f = r * l, d = a * h, p = a * l;
                t[0] = h * c, t[4] = p - m * u, t[8] = d * u + f, t[1] = u, t[5] = r * c, t[9] = -a * c, t[2] = -l * c, t[6] = f * u + d, t[10] = m - p * u;
            } else if (e.order === "XZY") {
                const m = r * h, f = r * l, d = a * h, p = a * l;
                t[0] = h * c, t[4] = -u, t[8] = l * c, t[1] = m * u + p, t[5] = r * c, t[9] = f * u - d, t[2] = d * u - f, t[6] = a * c, t[10] = p * u + m;
            }
            return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
        }
        makeRotationFromQuaternion(e) {
            return this.compose(on, e, an);
        }
        lookAt(e, t, i) {
            const n = this.elements;
            return P.subVectors(e, t), P.lengthSq() === 0 && (P.z = 1), P.normalize(), he.crossVectors(i, P), he.lengthSq() === 0 && (Math.abs(i.z) === 1 ? P.x += 1e-4 : P.z += 1e-4, P.normalize(), he.crossVectors(i, P)), he.normalize(), ze.crossVectors(P, he), n[0] = he.x, n[4] = ze.x, n[8] = P.x, n[1] = he.y, n[5] = ze.y, n[9] = P.y, n[2] = he.z, n[6] = ze.z, n[10] = P.z, this;
        }
        multiply(e) {
            return this.multiplyMatrices(this, e);
        }
        premultiply(e) {
            return this.multiplyMatrices(e, this);
        }
        multiplyMatrices(e, t) {
            const i = e.elements, n = t.elements, s = this.elements, r = i[0], a = i[4], h = i[8], l = i[12], c = i[1], u = i[5], m = i[9], f = i[13], d = i[2], p = i[6], x = i[10], g = i[14], y = i[3], _ = i[7], b = i[11], v = i[15], S = n[0], w = n[4], k = n[8], L = n[12], O = n[1], D = n[5], H = n[9], U = n[13], de = n[2], A = n[6], Ce = n[10], Te = n[14], Re = n[3], Le = n[7], Oe = n[11], Ie = n[15];
            return s[0] = r * S + a * O + h * de + l * Re, s[4] = r * w + a * D + h * A + l * Le, s[8] = r * k + a * H + h * Ce + l * Oe, s[12] = r * L + a * U + h * Te + l * Ie, s[1] = c * S + u * O + m * de + f * Re, s[5] = c * w + u * D + m * A + f * Le, s[9] = c * k + u * H + m * Ce + f * Oe, s[13] = c * L + u * U + m * Te + f * Ie, s[2] = d * S + p * O + x * de + g * Re, s[6] = d * w + p * D + x * A + g * Le, s[10] = d * k + p * H + x * Ce + g * Oe, s[14] = d * L + p * U + x * Te + g * Ie, s[3] = y * S + _ * O + b * de + v * Re, s[7] = y * w + _ * D + b * A + v * Le, s[11] = y * k + _ * H + b * Ce + v * Oe, s[15] = y * L + _ * U + b * Te + v * Ie, this;
        }
        multiplyScalar(e) {
            const t = this.elements;
            return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
        }
        determinant() {
            const e = this.elements, t = e[0], i = e[4], n = e[8], s = e[12], r = e[1], a = e[5], h = e[9], l = e[13], c = e[2], u = e[6], m = e[10], f = e[14], d = e[3], p = e[7], x = e[11], g = e[15], y = h * f - l * m, _ = a * f - l * u, b = a * m - h * u, v = r * f - l * c, S = r * m - h * c, w = r * u - a * c;
            return t * (p * y - x * _ + g * b) - i * (d * y - x * v + g * S) + n * (d * _ - p * v + g * w) - s * (d * b - p * S + x * w);
        }
        determinantAffine() {
            const e = this.elements, t = e[0], i = e[4], n = e[8], s = e[1], r = e[5], a = e[9], h = e[2], l = e[6], c = e[10];
            return t * (r * c - a * l) - i * (s * c - a * h) + n * (s * l - r * h);
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
            const e = this.elements, t = e[0], i = e[1], n = e[2], s = e[3], r = e[4], a = e[5], h = e[6], l = e[7], c = e[8], u = e[9], m = e[10], f = e[11], d = e[12], p = e[13], x = e[14], g = e[15], y = t * a - i * r, _ = t * h - n * r, b = t * l - s * r, v = i * h - n * a, S = i * l - s * a, w = n * l - s * h, k = c * p - u * d, L = c * x - m * d, O = c * g - f * d, D = u * x - m * p, H = u * g - f * p, U = m * g - f * x, de = y * U - _ * H + b * D + v * O - S * L + w * k;
            if (de === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const A = 1 / de;
            return e[0] = (a * U - h * H + l * D) * A, e[1] = (n * H - i * U - s * D) * A, e[2] = (p * w - x * S + g * v) * A, e[3] = (m * S - u * w - f * v) * A, e[4] = (h * O - r * U - l * L) * A, e[5] = (t * U - n * O + s * L) * A, e[6] = (x * b - d * w - g * _) * A, e[7] = (c * w - m * b + f * _) * A, e[8] = (r * H - a * O + l * k) * A, e[9] = (i * O - t * H - s * k) * A, e[10] = (d * S - p * b + g * y) * A, e[11] = (u * b - c * S - f * y) * A, e[12] = (a * L - r * D - h * k) * A, e[13] = (t * D - i * L + n * k) * A, e[14] = (p * _ - d * v - x * y) * A, e[15] = (c * v - u * _ + m * y) * A, this;
        }
        scale(e) {
            const t = this.elements, i = e.x, n = e.y, s = e.z;
            return t[0] *= i, t[4] *= n, t[8] *= s, t[1] *= i, t[5] *= n, t[9] *= s, t[2] *= i, t[6] *= n, t[10] *= s, t[3] *= i, t[7] *= n, t[11] *= s, this;
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
            const i = Math.cos(t), n = Math.sin(t), s = 1 - i, r = e.x, a = e.y, h = e.z, l = s * r, c = s * a;
            return this.set(l * r + i, l * a - n * h, l * h + n * a, 0, l * a + n * h, c * a + i, c * h - n * r, 0, l * h - n * a, c * h + n * r, s * h * h + i, 0, 0, 0, 0, 1), this;
        }
        makeScale(e, t, i) {
            return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
        }
        makeShear(e, t, i, n, s, r) {
            return this.set(1, i, s, 0, e, 1, r, 0, t, n, 1, 0, 0, 0, 0, 1), this;
        }
        compose(e, t, i) {
            const n = this.elements, s = t._x, r = t._y, a = t._z, h = t._w, l = s + s, c = r + r, u = a + a, m = s * l, f = s * c, d = s * u, p = r * c, x = r * u, g = a * u, y = h * l, _ = h * c, b = h * u, v = i.x, S = i.y, w = i.z;
            return n[0] = (1 - (p + g)) * v, n[1] = (f + b) * v, n[2] = (d - _) * v, n[3] = 0, n[4] = (f - b) * S, n[5] = (1 - (m + g)) * S, n[6] = (x + y) * S, n[7] = 0, n[8] = (d + _) * w, n[9] = (x - y) * w, n[10] = (1 - (m + p)) * w, n[11] = 0, n[12] = e.x, n[13] = e.y, n[14] = e.z, n[15] = 1, this;
        }
        decompose(e, t, i) {
            const n = this.elements;
            e.x = n[12], e.y = n[13], e.z = n[14];
            const s = this.determinantAffine();
            if (s === 0) return i.set(1, 1, 1), t.identity(), this;
            let r = ve.set(n[0], n[1], n[2]).length();
            const a = ve.set(n[4], n[5], n[6]).length(), h = ve.set(n[8], n[9], n[10]).length();
            s < 0 && (r = -r), J.copy(this);
            const l = 1 / r, c = 1 / a, u = 1 / h;
            return J.elements[0] *= l, J.elements[1] *= l, J.elements[2] *= l, J.elements[4] *= c, J.elements[5] *= c, J.elements[6] *= c, J.elements[8] *= u, J.elements[9] *= u, J.elements[10] *= u, t.setFromRotationMatrix(J), i.x = r, i.y = a, i.z = h, this;
        }
        makePerspective(e, t, i, n, s, r, a = 2e3, h = !1) {
            const l = this.elements, c = 2 * s / (t - e), u = 2 * s / (i - n), m = (t + e) / (t - e), f = (i + n) / (i - n);
            let d, p;
            if (h) d = s / (r - s), p = r * s / (r - s);
            else if (a === 2e3) d = -(r + s) / (r - s), p = -2 * r * s / (r - s);
            else if (a === 2001) d = -r / (r - s), p = -r * s / (r - s);
            else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
            return l[0] = c, l[4] = 0, l[8] = m, l[12] = 0, l[1] = 0, l[5] = u, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = d, l[14] = p, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
        }
        makeOrthographic(e, t, i, n, s, r, a = 2e3, h = !1) {
            const l = this.elements, c = 2 / (t - e), u = 2 / (i - n), m = -(t + e) / (t - e), f = -(i + n) / (i - n);
            let d, p;
            if (h) d = 1 / (r - s), p = r / (r - s);
            else if (a === 2e3) d = -2 / (r - s), p = -(r + s) / (r - s);
            else if (a === 2001) d = -1 / (r - s), p = -s / (r - s);
            else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
            return l[0] = c, l[4] = 0, l[8] = 0, l[12] = m, l[1] = 0, l[5] = u, l[9] = 0, l[13] = f, l[2] = 0, l[6] = 0, l[10] = d, l[14] = p, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
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
    const ve = new F, J = new ue, on = new F(0, 0, 0), an = new F(1, 1, 1), he = new F, ze = new F, P = new F, Xt = new ue, Yt = new Ee;
    class Ae {
        constructor(e = 0, t = 0, i = 0, n = Ae.DEFAULT_ORDER){
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
            const n = e.elements, s = n[0], r = n[4], a = n[8], h = n[1], l = n[5], c = n[9], u = n[2], m = n[6], f = n[10];
            switch(t){
                case "XYZ":
                    this._y = Math.asin(M(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-c, f), this._z = Math.atan2(-r, s)) : (this._x = Math.atan2(m, l), this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-M(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(h, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(M(m, -1, 1)), Math.abs(m) < .9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-r, l)) : (this._y = 0, this._z = Math.atan2(h, s));
                    break;
                case "ZYX":
                    this._y = Math.asin(-M(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(m, f), this._z = Math.atan2(h, s)) : (this._x = 0, this._z = Math.atan2(-r, l));
                    break;
                case "YZX":
                    this._z = Math.asin(M(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(a, f));
                    break;
                case "XZY":
                    this._z = Math.asin(-M(r, -1, 1)), Math.abs(r) < .9999999 ? (this._x = Math.atan2(m, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-c, f), this._y = 0);
                    break;
                default:
                    z("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
            }
            return this._order = t, i === !0 && this._onChangeCallback(), this;
        }
        setFromQuaternion(e, t, i) {
            return Xt.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Xt, t, i);
        }
        setFromVector3(e, t = this._order) {
            return this.set(e.x, e.y, e.z, t);
        }
        reorder(e) {
            return Yt.setFromEuler(this), this.setFromQuaternion(Yt, e);
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
    Ae.DEFAULT_ORDER = "XYZ";
    class ln {
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
    let hn = 0;
    const Zt = new F, ye = new Ee, se = new ue, Ne = new F, Fe = new F, cn = new F, un = new Ee, Jt = new F(1, 0, 0), Kt = new F(0, 1, 0), Qt = new F(0, 0, 1), jt = {
        type: "added"
    }, dn = {
        type: "removed"
    }, _e = {
        type: "childadded",
        child: null
    }, et = {
        type: "childremoved",
        child: null
    };
    class me extends Nt {
        constructor(){
            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                value: hn++
            }), this.uuid = Ge(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = me.DEFAULT_UP.clone();
            const e = new F, t = new Ae, i = new Ee, n = new F(1, 1, 1);
            function s() {
                i.setFromEuler(t, !1);
            }
            function r() {
                t.setFromQuaternion(i, void 0, !1);
            }
            t._onChange(s), i._onChange(r), Object.defineProperties(this, {
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
                    value: new ue
                },
                normalMatrix: {
                    value: new we
                }
            }), this.matrix = new ue, this.matrixWorld = new ue, this.matrixAutoUpdate = me.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new ln, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
        }
        onBeforeShadow() {}
        onAfterShadow() {}
        onBeforeRender() {}
        onAfterRender() {}
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
            this.quaternion.setFromEuler(e, !0);
        }
        setRotationFromMatrix(e) {
            this.quaternion.setFromRotationMatrix(e);
        }
        setRotationFromQuaternion(e) {
            this.quaternion.copy(e);
        }
        rotateOnAxis(e, t) {
            return ye.setFromAxisAngle(e, t), this.quaternion.multiply(ye), this;
        }
        rotateOnWorldAxis(e, t) {
            return ye.setFromAxisAngle(e, t), this.quaternion.premultiply(ye), this;
        }
        rotateX(e) {
            return this.rotateOnAxis(Jt, e);
        }
        rotateY(e) {
            return this.rotateOnAxis(Kt, e);
        }
        rotateZ(e) {
            return this.rotateOnAxis(Qt, e);
        }
        translateOnAxis(e, t) {
            return Zt.copy(e).applyQuaternion(this.quaternion), this.position.add(Zt.multiplyScalar(t)), this;
        }
        translateX(e) {
            return this.translateOnAxis(Jt, e);
        }
        translateY(e) {
            return this.translateOnAxis(Kt, e);
        }
        translateZ(e) {
            return this.translateOnAxis(Qt, e);
        }
        localToWorld(e) {
            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
        }
        worldToLocal(e) {
            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(se.copy(this.matrixWorld).invert());
        }
        lookAt(e, t, i) {
            e.isVector3 ? Ne.copy(e) : Ne.set(e, t, i);
            const n = this.parent;
            this.updateWorldMatrix(!0, !1), Fe.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? se.lookAt(Fe, Ne, this.up) : se.lookAt(Ne, Fe, this.up), this.quaternion.setFromRotationMatrix(se), n && (se.extractRotation(n.matrixWorld), ye.setFromRotationMatrix(se), this.quaternion.premultiply(ye.invert()));
        }
        add(e) {
            if (arguments.length > 1) {
                for(let t = 0; t < arguments.length; t++)this.add(arguments[t]);
                return this;
            }
            return e === this ? (Vt("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(jt), _e.child = e, this.dispatchEvent(_e), _e.child = null) : Vt("Object3D.add: object not an instance of THREE.Object3D.", e), this);
        }
        remove(e) {
            if (arguments.length > 1) {
                for(let i = 0; i < arguments.length; i++)this.remove(arguments[i]);
                return this;
            }
            const t = this.children.indexOf(e);
            return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(dn), et.child = e, this.dispatchEvent(et), et.child = null), this;
        }
        removeFromParent() {
            const e = this.parent;
            return e !== null && e.remove(this), this;
        }
        clear() {
            return this.remove(...this.children);
        }
        attach(e) {
            return this.updateWorldMatrix(!0, !1), se.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), se.multiply(e.parent.matrixWorld)), e.applyMatrix4(se), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(jt), _e.child = e, this.dispatchEvent(_e), _e.child = null, this;
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
                const r = this.children[i].getObjectByProperty(e, t);
                if (r !== void 0) return r;
            }
        }
        getObjectsByProperty(e, t, i = []) {
            this[e] === t && i.push(this);
            const n = this.children;
            for(let s = 0, r = n.length; s < r; s++)n[s].getObjectsByProperty(e, t, i);
            return i;
        }
        getWorldPosition(e) {
            return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
        }
        getWorldQuaternion(e) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Fe, e, cn), e;
        }
        getWorldScale(e) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Fe, un, e), e;
        }
        getWorldDirection(e) {
            this.updateWorldMatrix(!0, !1);
            const t = this.matrixWorld.elements;
            return e.set(t[8], t[9], t[10]).normalize();
        }
        raycast() {}
        intersectsFrustum() {
            return !0;
        }
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
            this.matrix.compose(this.position, this.quaternion, this.scale);
            const e = this.pivot;
            if (e !== null) {
                const t = e.x, i = e.y, n = e.z, s = this.matrix.elements;
                s[12] += t - s[0] * t - s[4] * i - s[8] * n, s[13] += i - s[1] * t - s[5] * i - s[9] * n, s[14] += n - s[2] * t - s[6] * i - s[10] * n;
            }
            this.matrixWorldNeedsUpdate = !0;
        }
        updateMatrixWorld(e) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
            const t = this.children;
            for(let i = 0, n = t.length; i < n; i++)t[i].updateMatrixWorld(e);
        }
        updateWorldMatrix(e, t, i = !1) {
            const n = this.parent;
            if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || i) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, i = !0), t === !0) {
                const s = this.children;
                for(let r = 0, a = s.length; r < a; r++)s[r].updateWorldMatrix(!1, !0, i);
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
            n.uuid = this.uuid, n.type = this.type, n.name = this.name, n.castShadow = this.castShadow, n.receiveShadow = this.receiveShadow, n.visible = this.visible, n.frustumCulled = this.frustumCulled, n.renderOrder = this.renderOrder, n.static = this.static, n.matrixAutoUpdate = this.matrixAutoUpdate, Object.keys(this.userData).length > 0 && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), n.up = this.up.toArray(), this.pivot !== null && (n.pivot = this.pivot.toArray()), this.morphTargetDictionary !== void 0 && (n.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (n.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (n.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (n.type = "BatchedMesh", n.perObjectFrustumCulled = this.perObjectFrustumCulled, n.sortObjects = this.sortObjects, n.drawRanges = this._drawRanges, n.reservedRanges = this._reservedRanges, n.geometryInfo = this._geometryInfo.map((a)=>({
                    ...a,
                    boundingBox: a.boundingBox ? a.boundingBox.toJSON() : void 0,
                    boundingSphere: a.boundingSphere ? a.boundingSphere.toJSON() : void 0
                })), n.instanceInfo = this._instanceInfo.map((a)=>({
                    ...a
                })), n.availableInstanceIds = this._availableInstanceIds.slice(), n.availableGeometryIds = this._availableGeometryIds.slice(), n.nextIndexStart = this._nextIndexStart, n.nextVertexStart = this._nextVertexStart, n.geometryCount = this._geometryCount, n.maxInstanceCount = this._maxInstanceCount, n.maxVertexCount = this._maxVertexCount, n.maxIndexCount = this._maxIndexCount, n.geometryInitialized = this._geometryInitialized, n.matricesTexture = this._matricesTexture.toJSON(e), n.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (n.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (n.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (n.boundingBox = this.boundingBox.toJSON()));
            function s(a, h) {
                return a[h.uuid] === void 0 && (a[h.uuid] = h.toJSON(e)), h.uuid;
            }
            if (this.isScene) this.background && (this.background.isColor ? n.background = this.background.toJSON() : this.background.isTexture && (n.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (n.environment = this.environment.toJSON(e).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
                n.geometry = s(e.geometries, this.geometry);
                const a = this.geometry.parameters;
                if (a !== void 0 && a.shapes !== void 0) {
                    const h = a.shapes;
                    if (Array.isArray(h)) for(let l = 0, c = h.length; l < c; l++){
                        const u = h[l];
                        s(e.shapes, u);
                    }
                    else s(e.shapes, h);
                }
            }
            if (this.isSkinnedMesh && (n.bindMode = this.bindMode, n.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), n.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
                const a = [];
                for(let h = 0, l = this.material.length; h < l; h++)a.push(s(e.materials, this.material[h]));
                n.material = a;
            } else n.material = s(e.materials, this.material);
            if (this.children.length > 0) {
                n.children = [];
                for(let a = 0; a < this.children.length; a++)n.children.push(this.children[a].toJSON(e).object);
            }
            if (this.animations.length > 0) {
                n.animations = [];
                for(let a = 0; a < this.animations.length; a++){
                    const h = this.animations[a];
                    n.animations.push(s(e.animations, h));
                }
            }
            if (t) {
                const a = r(e.geometries), h = r(e.materials), l = r(e.textures), c = r(e.images), u = r(e.shapes), m = r(e.skeletons), f = r(e.animations), d = r(e.nodes);
                a.length > 0 && (i.geometries = a), h.length > 0 && (i.materials = h), l.length > 0 && (i.textures = l), c.length > 0 && (i.images = c), u.length > 0 && (i.shapes = u), m.length > 0 && (i.skeletons = m), f.length > 0 && (i.animations = f), d.length > 0 && (i.nodes = d);
            }
            return i.object = n, i;
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
                const n = e.children[i];
                this.add(n.clone());
            }
            return this;
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            });
        }
    }
    me.DEFAULT_UP = new F(0, 1, 0);
    me.DEFAULT_MATRIX_AUTO_UPDATE = !0;
    me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
    const Oi = {
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
    }, ce = {
        h: 0,
        s: 0,
        l: 0
    }, ke = {
        h: 0,
        s: 0,
        l: 0
    };
    function tt(o, e, t) {
        return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? o + (e - o) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? o + (e - o) * 6 * (2 / 3 - t) : o;
    }
    class le {
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
        setHex(e, t = I) {
            return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Z.colorSpaceToWorking(this, t), this;
        }
        setRGB(e, t, i, n = Z.workingColorSpace) {
            return this.r = e, this.g = t, this.b = i, Z.colorSpaceToWorking(this, n), this;
        }
        setHSL(e, t, i, n = Z.workingColorSpace) {
            if (e = Qi(e, 1), t = M(t, 0, 1), i = M(i, 0, 1), t === 0) this.r = this.g = this.b = i;
            else {
                const s = i <= .5 ? i * (1 + t) : i + t - i * t, r = 2 * i - s;
                this.r = tt(r, s, e + 1 / 3), this.g = tt(r, s, e), this.b = tt(r, s, e - 1 / 3);
            }
            return Z.colorSpaceToWorking(this, n), this;
        }
        setStyle(e, t = I) {
            function i(s) {
                s !== void 0 && parseFloat(s) < 1 && z("Color: Alpha component of " + e + " will be ignored.");
            }
            let n;
            if (n = /^(\w+)\(([^\)]*)\)/.exec(e)) {
                let s;
                const r = n[1], a = n[2];
                switch(r){
                    case "rgb":
                    case "rgba":
                        if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a)) return i(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t);
                        if (s = /^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a)) return i(s[4]), this.setRGB(Math.min(100, parseFloat(s[1])) / 100, Math.min(100, parseFloat(s[2])) / 100, Math.min(100, parseFloat(s[3])) / 100, t);
                        break;
                    case "hsl":
                    case "hsla":
                        if (s = /^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a)) return i(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
                        break;
                    default:
                        z("Color: Unknown color model " + e);
                }
            } else if (n = /^\#([A-Fa-f\d]+)$/.exec(e)) {
                const s = n[1], r = s.length;
                if (r === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
                if (r === 6) return this.setHex(parseInt(s, 16), t);
                z("Color: Invalid hex color " + e);
            } else if (e && e.length > 0) return this.setColorName(e, t);
            return this;
        }
        setColorName(e, t = I) {
            const i = Oi[e.toLowerCase()];
            return i !== void 0 ? this.setHex(i, t) : z("Color: Unknown color " + e), this;
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b);
        }
        copy(e) {
            return this.r = e.r, this.g = e.g, this.b = e.b, this;
        }
        copySRGBToLinear(e) {
            return this.r = oe(e.r), this.g = oe(e.g), this.b = oe(e.b), this;
        }
        copyLinearToSRGB(e) {
            return this.r = Me(e.r), this.g = Me(e.g), this.b = Me(e.b), this;
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
        }
        getHex(e = I) {
            return Z.workingToColorSpace(T.copy(this), e), Math.round(M(T.r * 255, 0, 255)) * 65536 + Math.round(M(T.g * 255, 0, 255)) * 256 + Math.round(M(T.b * 255, 0, 255));
        }
        getHexString(e = I) {
            return ("000000" + this.getHex(e).toString(16)).slice(-6);
        }
        getHSL(e, t = Z.workingColorSpace) {
            Z.workingToColorSpace(T.copy(this), t);
            const i = T.r, n = T.g, s = T.b, r = Math.max(i, n, s), a = Math.min(i, n, s);
            let h, l;
            const c = (a + r) / 2;
            if (a === r) h = 0, l = 0;
            else {
                const u = r - a;
                switch(l = c <= .5 ? u / (r + a) : u / (2 - r - a), r){
                    case i:
                        h = (n - s) / u + (n < s ? 6 : 0);
                        break;
                    case n:
                        h = (s - i) / u + 2;
                        break;
                    case s:
                        h = (i - n) / u + 4;
                        break;
                }
                h /= 6;
            }
            return e.h = h, e.s = l, e.l = c, e;
        }
        getRGB(e, t = Z.workingColorSpace) {
            return Z.workingToColorSpace(T.copy(this), t), e.r = T.r, e.g = T.g, e.b = T.b, e;
        }
        getStyle(e = I) {
            Z.workingToColorSpace(T.copy(this), e);
            const t = T.r, i = T.g, n = T.b;
            return e !== I ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(n * 255)})`;
        }
        offsetHSL(e, t, i) {
            return this.getHSL(ce), this.setHSL(ce.h + e, ce.s + t, ce.l + i);
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
            this.getHSL(ce), e.getHSL(ke);
            const i = Ze(ce.h, ke.h, t), n = Ze(ce.s, ke.s, t), s = Ze(ce.l, ke.l, t);
            return this.setHSL(i, n, s), this;
        }
        setFromVector3(e) {
            return this.r = e.x, this.g = e.y, this.b = e.z, this;
        }
        applyMatrix3(e) {
            const t = this.r, i = this.g, n = this.b, s = e.elements;
            return this.r = s[0] * t + s[3] * i + s[6] * n, this.g = s[1] * t + s[4] * i + s[7] * n, this.b = s[2] * t + s[5] * i + s[8] * n, this;
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
    const T = new le;
    le.NAMES = Oi;
    const it = new F, fn = new F, mn = new we;
    class pn {
        constructor(e = new F(1, 0, 0), t = 0){
            this.isPlane = !0, this.normal = e, this.constant = t;
        }
        set(e, t) {
            return this.normal.copy(e), this.constant = t, this;
        }
        setComponents(e, t, i, n) {
            return this.normal.set(e, t, i), this.constant = n, this;
        }
        setFromNormalAndCoplanarPoint(e, t) {
            return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
        }
        setFromCoplanarPoints(e, t, i) {
            const n = it.subVectors(i, t).cross(fn.subVectors(e, t)).normalize();
            return this.setFromNormalAndCoplanarPoint(n, e), this;
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
        intersectLine(e, t, i = !0) {
            const n = e.delta(it), s = this.normal.dot(n);
            if (s === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
            const r = -(e.start.dot(this.normal) + this.constant) / s;
            return i === !0 && (r < 0 || r > 1) ? null : t.copy(e.start).addScaledVector(n, r);
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
            const i = t || mn.getNormalMatrix(e), n = this.coplanarPoint(it).applyMatrix4(e), s = this.normal.applyMatrix3(i).normalize();
            return this.constant = -n.dot(s), this;
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
            return {
                normal: this.normal.toArray(),
                constant: this.constant
            };
        }
        fromJSON(e) {
            return this.normal.fromArray(e.normal), this.constant = e.constant, this;
        }
    }
    let gn = 0;
    class Ii extends Nt {
        constructor(){
            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                value: gn++
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
                    z(`Material: parameter '${t}' has value of undefined.`);
                    continue;
                }
                const n = this[t];
                if (n === void 0) {
                    z(`Material: '${t}' is not a property of THREE.${this.type}.`);
                    continue;
                }
                n && n.isColor ? n.set(i) : n && n.isVector2 && i && i.isVector2 || n && n.isEuler && i && i.isEuler || n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[t] = i;
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
            i.uuid = this.uuid, i.type = this.type, i.blending = this.blending, i.side = this.side, i.shadowSide = this.shadowSide, i.vertexColors = this.vertexColors, i.opacity = this.opacity, i.transparent = this.transparent, i.blendSrc = this.blendSrc, i.blendDst = this.blendDst, i.blendEquation = this.blendEquation, i.blendSrcAlpha = this.blendSrcAlpha, i.blendDstAlpha = this.blendDstAlpha, i.blendEquationAlpha = this.blendEquationAlpha, i.blendColor = this.blendColor.getHex(), i.blendAlpha = this.blendAlpha, i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, i.colorWrite = this.colorWrite, i.clipIntersection = this.clipIntersection, i.clipShadows = this.clipShadows, i.stencilWriteMask = this.stencilWriteMask, i.stencilFunc = this.stencilFunc, i.stencilRef = this.stencilRef, i.stencilFuncMask = this.stencilFuncMask, i.stencilFail = this.stencilFail, i.stencilZFail = this.stencilZFail, i.stencilZPass = this.stencilZPass, i.stencilWrite = this.stencilWrite, i.polygonOffset = this.polygonOffset, i.polygonOffsetFactor = this.polygonOffsetFactor, i.polygonOffsetUnits = this.polygonOffsetUnits, i.dithering = this.dithering, i.alphaTest = this.alphaTest, i.alphaHash = this.alphaHash, i.alphaToCoverage = this.alphaToCoverage, i.premultipliedAlpha = this.premultipliedAlpha, i.forceSinglePass = this.forceSinglePass, i.allowOverride = this.allowOverride, i.visible = this.visible, i.toneMapped = this.toneMapped, i.name = this.name, this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.diffuseRoughness !== void 0 && (i.diffuseRoughness = this.diffuseRoughness), this.diffuseRoughnessMap && this.diffuseRoughnessMap.isTexture && (i.diffuseRoughnessMap = this.diffuseRoughnessMap.toJSON(e).uuid), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (i.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (i.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.retroreflectivity !== void 0 && (i.retroreflectivity = this.retroreflectivity), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessMinimum !== void 0 && (i.iridescenceThicknessMinimum = this.iridescenceThicknessMinimum), this.iridescenceThicknessMaximum !== void 0 && (i.iridescenceThicknessMaximum = this.iridescenceThicknessMaximum), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), Array.isArray(this.clippingPlanes) && this.clippingPlanes.length > 0 && (i.clippingPlanes = this.clippingPlanes.map((s)=>s.toJSON())), this.rotation !== void 0 && (i.rotation = this.rotation), this.depthPacking !== void 0 && (i.depthPacking = this.depthPacking), this.linewidth !== void 0 && (i.linewidth = this.linewidth), this.linecap !== void 0 && (i.linecap = this.linecap), this.linejoin !== void 0 && (i.linejoin = this.linejoin), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.wireframe !== void 0 && (i.wireframe = this.wireframe), this.wireframeLinewidth !== void 0 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== void 0 && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== void 0 && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading !== void 0 && (i.flatShading = this.flatShading), this.fog !== void 0 && (i.fog = this.fog), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
            function n(s) {
                const r = [];
                for(const a in s){
                    const h = s[a];
                    delete h.metadata, r.push(h);
                }
                return r;
            }
            if (t) {
                const s = n(e.textures), r = n(e.images);
                s.length > 0 && (i.textures = s), r.length > 0 && (i.images = r);
            }
            return i;
        }
        fromJSON(e, t) {
            if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new le().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.diffuseRoughness !== void 0 && (this.diffuseRoughness = e.diffuseRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.retroreflectivity !== void 0 && (this.retroreflectivity = e.retroreflectivity), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessMinimum !== void 0 && (this.iridescenceThicknessMinimum = e.iridescenceThicknessMinimum), e.iridescenceThicknessMaximum !== void 0 && (this.iridescenceThicknessMaximum = e.iridescenceThicknessMaximum), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0], this.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1]), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.clippingPlanes !== void 0 && (this.clippingPlanes = e.clippingPlanes.map((i)=>new pn().fromJSON(i))), e.clipIntersection !== void 0 && (this.clipIntersection = e.clipIntersection), e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows), e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.linecap !== void 0 && (this.linecap = e.linecap), e.linejoin !== void 0 && (this.linejoin = e.linejoin), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? this.vertexColors = e.vertexColors > 0 : this.vertexColors = e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
                let i = e.normalScale;
                Array.isArray(i) === !1 && (i = [
                    i,
                    i
                ]), this.normalScale = new fe().fromArray(i);
            }
            return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new fe().fromArray(e.clearcoatNormalScale)), e.diffuseRoughnessMap !== void 0 && (this.diffuseRoughnessMap = t[e.diffuseRoughnessMap] || null), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
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
                for(let s = 0; s !== n; ++s)i[s] = t[s].clone();
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
    class R extends Ii {
        constructor(e){
            super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = {
                STANDARD: ""
            }, this.color = new le(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new le(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new fe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Ae, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
        }
        copy(e) {
            return super.copy(e), this.defines = {
                STANDARD: ""
            }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
        }
    }
    class xn extends Ii {
        constructor(e){
            super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
        }
        copy(e) {
            return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
        }
    }
    const nt = {
        enabled: !1,
        files: {},
        add: function(o, e) {
            this.enabled !== !1 && (ei(o) || (this.files[o] = e));
        },
        get: function(o) {
            if (this.enabled !== !1 && !ei(o)) return this.files[o];
        },
        remove: function(o) {
            delete this.files[o];
        },
        clear: function() {
            this.files = {};
        }
    };
    function ei(o) {
        try {
            const e = o.slice(o.indexOf(":") + 1);
            return new URL(e).protocol === "blob:";
        } catch  {
            return !1;
        }
    }
    class vn {
        constructor(e, t, i){
            const n = this;
            let s = !1, r = 0, a = 0, h;
            const l = [];
            this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this._abortController = null, this.itemStart = function(c) {
                a++, s === !1 && n.onStart !== void 0 && n.onStart(c, r, a), s = !0;
            }, this.itemEnd = function(c) {
                r++, n.onProgress !== void 0 && n.onProgress(c, r, a), r === a && (s = !1, n.onLoad !== void 0 && n.onLoad());
            }, this.itemError = function(c) {
                n.onError !== void 0 && n.onError(c);
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
                for(let u = 0, m = l.length; u < m; u += 2){
                    const f = l[u], d = l[u + 1];
                    if (f.global && (f.lastIndex = 0), f.test(c)) return d;
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
    const yn = new vn;
    class kt {
        constructor(e){
            this.manager = e !== void 0 ? e : yn, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, this.priority = "auto", this.cache = "default", typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                detail: this
            }));
        }
        load() {}
        loadAsync(e, t) {
            const i = this;
            return new Promise(function(n, s) {
                i.load(e, n, t, s);
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
    kt.DEFAULT_MATERIAL_NAME = "__DEFAULT";
    const Se = new WeakMap;
    class _n extends kt {
        constructor(e){
            super(e);
        }
        load(e, t, i, n) {
            this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
            const s = this, r = nt.get(`image:${e}`);
            if (r !== void 0) {
                if (r.complete === !0) s.manager.itemStart(e), setTimeout(function() {
                    t && t(r), s.manager.itemEnd(e);
                }, 0);
                else {
                    let u = Se.get(r);
                    u === void 0 && (u = [], Se.set(r, u)), u.push({
                        onLoad: t,
                        onError: n
                    });
                }
                return r;
            }
            const a = Tt("img");
            function h() {
                c(), t && t(this);
                const u = Se.get(this) || [];
                for(let m = 0; m < u.length; m++){
                    const f = u[m];
                    f.onLoad && f.onLoad(this);
                }
                Se.delete(this), s.manager.itemEnd(e);
            }
            function l(u) {
                c(), n && n(u), nt.remove(`image:${e}`);
                const m = Se.get(this) || [];
                for(let f = 0; f < m.length; f++){
                    const d = m[f];
                    d.onError && d.onError(u);
                }
                Se.delete(this), s.manager.itemError(e), s.manager.itemEnd(e);
            }
            function c() {
                a.removeEventListener("load", h, !1), a.removeEventListener("error", l, !1);
            }
            return a.addEventListener("load", h, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), nt.add(`image:${e}`, a), s.manager.itemStart(e), a.fetchPriority = this.priority, a.src = e, a;
        }
    }
    class pe extends kt {
        constructor(e){
            super(e);
        }
        load(e, t, i, n) {
            const s = new ae, r = new _n(this.manager);
            return r.setPriority(this.priority), r.setCache(this.cache), r.setCrossOrigin(this.crossOrigin), r.setPath(this.path), r.load(e, function(a) {
                s.image = a, s.needsUpdate = !0, t !== void 0 && t(s);
            }, i, n), s;
        }
    }
    typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
        detail: {
            revision: "187"
        }
    }));
    typeof window < "u" && (window.__THREE__ ? z("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "187");
    const Sn = 256;
    function Mn(o, e = Sn) {
        let t = 1;
        for(; Math.ceil(o / t) > e;)t *= 2;
        return t;
    }
    let zi = {
        editorColors: new Map
    };
    function wn(o) {
        zi = o;
    }
    function Fn(o) {
        return zi.editorColors.get(o);
    }
    const bn = .25, We = {
        SKY_RADIUS_TILES: 3,
        GLOW_RADIUS_TILES: 5,
        SKY_FLOOR: .15,
        GLOW_INTENSITY: 2.5
    }, W = [
        "varying vec3 vVoxelAoWorldPosition;",
        "varying vec3 vVoxelAoWorldNormal;"
    ], B = [
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
        ], En = Ni(.45), An = Ni(.52);
    function N(o = !1) {
        return o ? An : En;
    }
    const E = "computeVoxelAo(vVoxelAoWorldPosition, vVoxelAoWorldNormal)";
    function V(o, e) {
        o.uniforms.voxelAoOccupancy = {
            value: e.texture
        }, o.uniforms.voxelAoOrigin = {
            value: e.origin
        }, o.uniforms.voxelAoSize = {
            value: e.size
        }, o.uniforms.voxelAoRadius = {
            value: bn
        }, o.uniforms.voxelAoVoxelSize = {
            value: e.voxelSize
        };
    }
    function Cn(o, e) {
        if (o.fragmentShader.includes("uniform vec3 voxelAoOrigin;")) {
            if (!o.fragmentShader.includes("void main() {") || !o.fragmentShader.includes("#include <lights_fragment_maps>")) {
                console.warn("Voxel light: shader anchor missing; light field is off");
                return;
            }
            o.uniforms.voxelSkyField = {
                value: e.sky.texture
            }, o.uniforms.voxelSkyOrigin = {
                value: e.sky.origin
            }, o.uniforms.voxelSkySize = {
                value: e.sky.size
            }, o.uniforms.voxelGlowField = {
                value: e.glow.texture
            }, o.uniforms.voxelGlowOrigin = {
                value: e.glow.origin
            }, o.uniforms.voxelGlowSize = {
                value: e.glow.size
            }, o.fragmentShader = o.fragmentShader.replace("void main() {", [
                "uniform highp sampler3D voxelSkyField;",
                "uniform vec3 voxelSkyOrigin;",
                "uniform vec3 voxelSkySize;",
                "uniform highp sampler3D voxelGlowField;",
                "uniform vec3 voxelGlowOrigin;",
                "uniform vec3 voxelGlowSize;",
                "bool voxelLightInBox(vec3 uvw) {",
                "	return all(greaterThanEqual(uvw, vec3(0.0))) && all(lessThanEqual(uvw, vec3(1.0)));",
                "}",
                "vec4 sampleVoxelLight(vec3 worldPos, vec3 normal) {",
                "	vec3 p = worldPos + normal * (voxelAoVoxelSize * 0.5);",
                "	vec3 uvw = (p - voxelAoOrigin) / voxelAoSize;",
                "	if (!voxelLightInBox(uvw)) return vec4(0.0, 0.0, 0.0, 1.0);",
                "	vec3 skyUvw = (p - voxelSkyOrigin) / voxelSkySize;",
                "	float sky = voxelLightInBox(skyUvw) ? textureLod(voxelSkyField, skyUvw, 0.0).r : 1.0;",
                "	vec3 glowUvw = (p - voxelGlowOrigin) / voxelGlowSize;",
                "	vec3 glow = voxelLightInBox(glowUvw) ? textureLod(voxelGlowField, glowUvw, 0.0).rgb : vec3(0.0);",
                "	float openShare = max(1.0 - textureLod(voxelAoOccupancy, uvw, 0.0).r, 0.25);",
                "	return min(vec4(glow, sky) / openShare, vec4(1.0));",
                "}",
                "void main() {"
            ].join(`
`)).replace("#include <lights_fragment_maps>", [
                "#include <lights_fragment_maps>",
                "#if defined( RE_IndirectDiffuse )",
                "{",
                "	vec4 voxelLight = sampleVoxelLight(vVoxelAoWorldPosition, vVoxelAoWorldNormal);",
                `	irradiance *= mix(${We.SKY_FLOOR.toFixed(3)}, 1.0, voxelLight.a);`,
                `	irradiance += voxelLight.rgb * voxelLight.rgb * ${We.GLOW_INTENSITY.toFixed(3)};`,
                "}",
                "#endif"
            ].join(`
`));
        }
    }
    const Tn = {
        DEFAULT: 1.25
    }, ge = {
        ROUGHNESS: .85,
        METALNESS: 0
    }, Pe = {
        RADIUS: Tn.DEFAULT,
        CONE_SCALE: 2.6,
        FEATHER: .7,
        ACTOR_MARGIN: .6
    };
    let De = null;
    function Rn() {
        if (De) return De;
        const o = new Uint8Array(4), e = new rn(o, 1, 1, 1);
        return e.format = 1023, e.type = 1009, e.magFilter = 1003, e.minFilter = 1003, e.wrapS = 1001, e.wrapT = 1001, e.wrapR = 1001, e.generateMipmaps = !1, e.needsUpdate = !0, De = {
            texture: e,
            data: o,
            width: 1,
            heightLevels: 1,
            length: 1
        }, De;
    }
    const Q = [
        "attribute float tileHeight;",
        "attribute float highlightStrength;",
        "varying float vMovementHighlightHeight;",
        "varying float vMovementHighlightStrength;"
    ], j = [
        "vMovementHighlightHeight = tileHeight;",
        "vMovementHighlightStrength = highlightStrength;"
    ], ee = [
        "uniform highp sampler3D movementHighlightMap;",
        "uniform vec2 movementHighlightSize;",
        "uniform float movementHighlightHeightLevels;",
        "uniform float uHighlightEnabled;",
        "varying float vMovementHighlightHeight;",
        "varying float vMovementHighlightStrength;"
    ], te = [
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
    function ie(o, e) {
        const t = e ?? Rn();
        o.uniforms.movementHighlightMap = {
            value: t.texture
        }, o.uniforms.movementHighlightSize = {
            value: new fe(t.width, t.length)
        }, o.uniforms.movementHighlightHeightLevels = {
            value: t.heightLevels
        }, o.uniforms.uHighlightEnabled = {
            value: e ? 1 : 0
        };
    }
    function Ln() {
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
    let st = null;
    function On() {
        return st || (st = Ln()), st;
    }
    const G = [
        "varying vec3 vHeroWorldPos;"
    ], $ = [
        "vHeroWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;"
    ], q = [
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
    ], X = [
        "#include <clipping_planes_fragment>",
        "if (uHeroEnabled > 0.5 && heroOccluded(vHeroWorldPos)) discard;"
    ];
    function Y(o, e) {
        const t = e ?? On();
        o.uniforms.uHeroEnabled = t.enabled, o.uniforms.uHeroActorPos = t.actorPos, o.uniforms.uHeroCamPos = t.camPos, o.uniforms.uHeroRadius = t.radius, o.uniforms.uHeroConeScale = t.coneScale, o.uniforms.uHeroFeather = t.feather, o.uniforms.uHeroCutY = t.cutY, o.uniforms.uHeroCutSign = t.cutSign;
    }
    function ki(o, e) {
        o.onBeforeCompile = (t)=>{
            Y(t, e), t.vertexShader = t.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...G
            ].join(`
`)), t.vertexShader = t.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...$
            ].join(`
`)), t.fragmentShader = t.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...q
            ].join(`
`)), t.fragmentShader = t.fragmentShader.replace("#include <clipping_planes_fragment>", X.join(`
`));
        };
    }
    function In(o, e, t, i, n) {
        o.onBeforeCompile = (s)=>{
            V(s, e), ie(s, t), Y(s, i), s.vertexShader = s.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...W,
                ...Q,
                ...G
            ].join(`
`)), s.vertexShader = s.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...B,
                ...j,
                ...$
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...N(n),
                ...ee,
                ...q
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <clipping_planes_fragment>", X.join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <color_fragment>", `#include <color_fragment>
diffuseColor.rgb *= ${E};`), s.fragmentShader = s.fragmentShader.replace("#include <dithering_fragment>", te.join(`
`));
        };
    }
    const zn = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: n = !1 } = o, s = new R({
            roughness: ge.ROUGHNESS,
            metalness: ge.METALNESS,
            vertexColors: !0
        });
        return In(s, t, e, i, n), {
            material: s,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Be = {
        bucketKey: "default",
        occlusionGroup: "solid",
        shaderVersion: 4,
        factory: zn
    }, Nn = 1, ti = 5, ii = 1.6, kn = 5.5, Dn = .07, Hn = 14, ni = [
        .01,
        -.006
    ], Un = .52, Pn = .78, Wn = [
        .035,
        .03,
        .028
    ], Bn = [
        .13,
        .12,
        .115
    ], Vn = [
        .9,
        .14,
        .01
    ], Gn = [
        2.2,
        .85,
        .16
    ], $n = .02, si = .45, qn = 1, Xn = 0, Yn = [
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
        `	return 1.0 - smoothstep(0.0, ${Dn.toFixed(3)}, d2 - d1);`,
        "}",
        "float embersRidge(vec2 p) {",
        "	float n = embersNoise(p);",
        "	return pow(1.0 - abs(2.0 * n - 1.0), 18.0);",
        "}"
    ].join(`
`);
    function He(o) {
        return `vec3(${o[0].toFixed(3)}, ${o[1].toFixed(3)}, ${o[2].toFixed(3)})`;
    }
    function Zn() {
        return [
            ...W,
            "varying vec3 vEmbersWorldPosition;"
        ];
    }
    function Jn() {
        return [
            "vEmbersWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            ...B
        ];
    }
    function Kn(o) {
        return [
            ...N(o),
            "varying vec3 vEmbersWorldPosition;",
            "uniform float uEmbersTime;",
            `const vec3 E_SOOT = ${He(Wn)};`,
            `const vec3 E_ASH = ${He(Bn)};`,
            `const vec3 E_GLOW_EDGE = ${He(Vn)};`,
            `const vec3 E_GLOW_CORE = ${He(Gn)};`,
            "vec3 eEmberGlow = vec3(0.0);",
            Yn
        ];
    }
    function Qn(o) {
        const e = [
            "vec2 eXz = vEmbersWorldPosition.xz;",
            `float eChar = embersNoise(eXz / ${ti.toFixed(3)}) * 0.7 + embersNoise(eXz / ${(ti * .31).toFixed(3)}) * 0.3;`,
            "vec3 eColor = mix(E_SOOT, E_ASH, smoothstep(0.55, 0.9, eChar));",
            `vec2 eHeatUv = eXz / ${Hn.toFixed(3)} + uEmbersTime * vec2(${ni[0].toFixed(4)}, ${ni[1].toFixed(4)});`,
            `float eHeat = smoothstep(${Un.toFixed(3)}, ${Pn.toFixed(3)}, embersNoise(eHeatUv) * 0.7 + embersNoise(eHeatUv * 2.3 + 3.1) * 0.3);`
        ];
        return e.push(o ? `float eCrack = embersRidge(eXz / ${ii.toFixed(3)});` : `float eCrack = max(embersCrack(eXz / ${ii.toFixed(3)}), embersCrack(eXz / ${kn.toFixed(3)} + 11.7) * 1.3);`), e.push("float eFlicker = 0.7 + 0.2 * sin(uEmbersTime * 1.3 + eChar * 9.0) + 0.1 * sin(uEmbersTime * 4.7 + eXz.x * 0.8);", "float eAlong = smoothstep(0.25, 0.75, embersNoise(eXz * 0.9 + vec2(uEmbersTime * 0.15, 0.0)));", "float eGlow = clamp(eCrack * eHeat * eFlicker * (0.2 + 0.8 * eAlong), 0.0, 1.5);", "eEmberGlow = mix(E_GLOW_EDGE, E_GLOW_CORE, smoothstep(0.5, 1.2, eGlow)) * eGlow;"), o || e.push(`vec2 eCoalCell = floor(eXz / ${si.toFixed(3)});`, "float eCoalSeed = embersHash(eCoalCell);", `float eCoal = step(1.0 - ${$n.toFixed(3)}, eCoalSeed) * eHeat;`, "eCoal *= 0.5 + 0.5 * sin(uEmbersTime * (2.0 + eCoalSeed * 6.0) + eCoalSeed * 40.0);", `vec2 eCoalLocal = fract(eXz / ${si.toFixed(3)}) - 0.5;`, "eCoal *= 1.0 - smoothstep(0.15, 0.4, length(eCoalLocal));", "eEmberGlow += E_GLOW_CORE * eCoal;"), e.push("eColor += E_GLOW_EDGE * 0.04 * eHeat;", `eColor *= ${E};`, "diffuseColor = vec4(eColor, 1.0);"), e;
    }
    const jn = [
        "totalEmissiveRadiance = eEmberGlow;"
    ], es = (o)=>{
        const { voxelAo: e, performanceMode: t = !1 } = o, i = {
            value: 0
        }, n = new R({
            roughness: qn,
            metalness: Xn,
            vertexColors: !1
        });
        n.onBeforeCompile = (a)=>{
            V(a, e), a.uniforms.uEmbersTime = i, a.vertexShader = a.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Zn()
            ].join(`
`)), a.vertexShader = a.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Jn()
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Kn(t)
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <color_fragment>", Qn(t).join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <emissivemap_fragment>", jn.join(`
`));
        };
        const s = [
            "surroundings-embers",
            `v${Nn}`,
            "nh",
            t ? "perf" : "full"
        ].join("-");
        return n.customProgramCacheKey = ()=>s, n.needsUpdate = !0, {
            material: n,
            onAnimationFrame: (a)=>{
                i.value = a * .001;
            },
            castShadow: !1,
            receiveShadow: !0
        };
    }, ts = ()=>({
            material: new R({
                visible: !1
            }),
            castShadow: !1,
            receiveShadow: !1
        }), is = {
        bucketKey: "fire_253",
        occlusionGroup: "fire_253",
        shaderVersion: 1,
        geometry: {
            vertexColors: !1
        },
        passable: !0,
        lightEmission: "#ff7a26",
        factory: ts,
        surroundingsFactory: es,
        special: {
            paletteIndex: 253,
            label: "Fire",
            swatchColor: "#ff7a1a",
            category: "miscellaneous"
        }
    }, ns = "/materials/flesh_250/flesh_noise_64x64.png", ss = "#cc2244", rs = .45, os = .7, as = 0, ls = .4, ri = .5, hs = .25, cs = 1.2;
    let rt = null;
    function us() {
        if (!rt) {
            const o = new pe().load(ns);
            o.colorSpace = Ct, o.wrapS = 1e3, o.wrapT = 1e3, o.magFilter = 1006, o.minFilter = 1006, o.generateMipmaps = !1, rt = o;
        }
        return rt;
    }
    const ds = [
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
        `        q = u * frequency + t * ${ls.toFixed(4)}`,
        `          + fleshAperiodicSin(t * ${ri.toFixed(4)} - centeredDot * 1.2) * 0.4 * ${ri.toFixed(4)}`,
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
    function fs() {
        return [
            ...W,
            "uniform float uFleshTime;"
        ];
    }
    function ms() {
        return [
            ...B
        ];
    }
    function ps(o) {
        return [
            ...N(o),
            "uniform float uFleshTime;",
            "uniform sampler2D uFleshNoise;",
            "vec2 getFleshUv(vec3 worldPos, vec3 worldNormal) {",
            "    vec3 n = abs(normalize(worldNormal));",
            "    if (n.y >= n.x && n.y >= n.z) return worldPos.xz;",
            "    if (n.x >= n.z) return worldPos.zy;",
            "    return worldPos.xy;",
            "}",
            ds
        ];
    }
    function gs(o) {
        return [
            "#include <color_fragment>",
            `vec2 fleshUvWorld = getFleshUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${rs.toFixed(4)};`,
            `float fleshOriginalNoise = fleshFBM(fleshUvWorld, uFleshTime, ${o ? "false" : "true"});`,
            "float fleshNoise = clamp(fleshOriginalNoise, 0.0, 1.0);",
            `float fleshFluidNoiseAngle = fleshOriginalNoise * 13.05 + uFleshTime * ${hs.toFixed(4)};`,
            "vec2 fleshFluidOffset = vec2(",
            "    cos(fleshFluidNoiseAngle) + fleshOriginalNoise * 14.0,",
            `    sin(fleshFluidNoiseAngle) + uFleshTime * ${cs.toFixed(4)}`,
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
            `fleshBaseColor *= ${E};`,
            "diffuseColor = vec4(clamp(fleshBaseColor, 0.0, 1.0), 1.0);"
        ];
    }
    const xs = [
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
    function vs() {
        return xs + `
` + te.join(`
`);
    }
    function ys(o, e, t, i, n, s, r) {
        o.onBeforeCompile = (a)=>{
            V(a, i), a.uniforms.uFleshTime = t, a.uniforms.uFleshNoise = {
                value: e
            }, ie(a, n), Y(a, s), a.vertexShader = a.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...fs(),
                ...Q,
                ...G
            ].join(`
`)), a.vertexShader = a.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...ms(),
                ...j,
                ...$
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...ps(r),
                ...ee,
                ...q
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <clipping_planes_fragment>", X.join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <color_fragment>", gs(r).join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <dithering_fragment>", vs());
        };
    }
    const _s = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: n = !1 } = o, s = us(), r = {
            value: 0
        }, a = new R({
            roughness: os,
            metalness: as,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return ys(a, s, r, t, e, i, n), {
            material: a,
            onAnimationFrame: (l)=>{
                r.value = l * .001;
            },
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, Ss = {
        bucketKey: "flesh_250",
        occlusionGroup: "flesh_250",
        shaderVersion: 6,
        geometry: {
            vertexColors: !1
        },
        factory: _s,
        special: {
            paletteIndex: 250,
            label: "Flesh",
            swatchColor: ss
        }
    }, Ms = 2, Di = 16, oi = [
        .02,
        .009
    ], ws = .7, Hi = .6, Rt = .34, Lt = .88, ot = [
        .97,
        .97,
        1
    ], at = [
        .58,
        .63,
        .76
    ], Fs = .8, bs = .72, Es = .3, As = .52, Ui = 1.25, Cs = 1.6, ai = .06, Ts = 1, Rs = 0, Ls = 5, Os = 3, Is = 3;
    function Pi(o) {
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
            `		q = q * 2.03 + vec2(17.3, 9.1) + drift * ${ws.toFixed(3)};`,
            "		amp *= 0.5;",
            "	}",
            "	return v;",
            "}"
        ].join(`
`);
    }
    function Ot(o, e) {
        return [
            `vec2 ${e}Uv = ${o}.xz / ${Di.toFixed(3)};`,
            `vec2 ${e}Drift = vec2(uCloudTime * ${oi[0].toFixed(4)}, uCloudTime * ${oi[1].toFixed(4)});`
        ];
    }
    function zs() {
        return [
            "attribute float surfaceDeformStrength;",
            ...W,
            "varying vec3 vCloudWorldPosition;",
            "varying vec3 vCloudWorldNormal;",
            "uniform float uCloudTime;",
            Pi(Is)
        ];
    }
    function Ns() {
        return [
            "vCloudWorldNormal = normalize(mat3(modelMatrix) * normal);",
            "vec3 cloudWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            ...Ot("cloudWorld", "cv"),
            "float cvWarp = cloudFbm(cvUv * 0.5, cvDrift * 0.6);",
            `vec2 cvUvW = cvUv + vec2(cvWarp, -cvWarp) * ${Hi.toFixed(3)};`,
            "float cvDensity = cloudFbm(cvUvW, cvDrift);",
            `float cvPuff = smoothstep(${Rt.toFixed(3)}, ${Lt.toFixed(3)}, cvDensity);`,
            `transformed.y += cvPuff * ${Ui.toFixed(3)} * surfaceDeformStrength;`,
            "vCloudWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            ...B
        ];
    }
    function ks(o) {
        const e = o ? Os : Ls;
        return [
            ...N(o),
            "varying vec3 vCloudWorldPosition;",
            "varying vec3 vCloudWorldNormal;",
            "uniform float uCloudTime;",
            `const vec3 C_TOP = vec3(${ot[0].toFixed(3)}, ${ot[1].toFixed(3)}, ${ot[2].toFixed(3)});`,
            `const vec3 C_SHADOW = vec3(${at[0].toFixed(3)}, ${at[1].toFixed(3)}, ${at[2].toFixed(3)});`,
            "vec2 cCloudGrad = vec2(0.0);",
            Pi(e)
        ];
    }
    function Ds(o) {
        const e = Rt.toFixed(3), t = Lt.toFixed(3), i = `float cAlpha = mix(${bs.toFixed(3)}, ${Fs.toFixed(3)}, smoothstep(${Es.toFixed(3)}, ${As.toFixed(3)}, cDensity));`;
        if (o) return [
            ...Ot("vCloudWorldPosition", "c"),
            "float cDensity = cloudFbm(cUv, cDrift);",
            `float cTops = smoothstep(${e}, ${t}, cDensity);`,
            "vec3 cColor = mix(C_SHADOW, C_TOP, cTops);",
            `cColor *= ${E};`,
            i,
            "diffuseColor = vec4(cColor, cAlpha);"
        ];
        const n = ai.toFixed(4), s = (Ui * Cs / (ai * Di)).toFixed(4), r = (6 / (Lt - Rt)).toFixed(4);
        return [
            ...Ot("vCloudWorldPosition", "c"),
            "float cWarp = cloudFbm(cUv * 0.5, cDrift * 0.6);",
            `vec2 cUvW = cUv + vec2(cWarp, -cWarp) * ${Hi.toFixed(3)};`,
            "float cDensity = cloudFbm(cUvW, cDrift);",
            `float cTops = smoothstep(${e}, ${t}, cDensity);`,
            `float cDx = cloudFbm(cUvW + vec2(${n}, 0.0), cDrift);`,
            `float cDz = cloudFbm(cUvW + vec2(0.0, ${n}), cDrift);`,
            `float cT = clamp((cDensity - ${e}) / (${t} - ${e}), 0.0, 1.0);`,
            `float cSlopeGain = ${r} * cT * (1.0 - cT);`,
            `cCloudGrad = vec2(cDx - cDensity, cDz - cDensity) * (${s} * cSlopeGain);`,
            "vec3 cColor = mix(C_SHADOW, C_TOP, cTops);",
            `cColor *= ${E};`,
            i,
            "diffuseColor = vec4(cColor, cAlpha);"
        ];
    }
    const Hs = [
        "#include <normal_fragment_begin>",
        "if (vCloudWorldNormal.y > 0.5) {",
        "	vec3 cWorldN = normalize(vec3(-cCloudGrad.x, 1.0, -cCloudGrad.y));",
        "	normal = normalize((viewMatrix * vec4(cWorldN, 0.0)).xyz);",
        "}"
    ], Us = (o)=>{
        const { voxelAo: e, performanceMode: t = !1 } = o, i = {
            value: 0
        }, n = new R({
            roughness: Ts,
            metalness: Rs,
            vertexColors: !1,
            transparent: !0,
            depthWrite: !0
        });
        n.onBeforeCompile = (a)=>{
            V(a, e), a.uniforms.uCloudTime = i, a.vertexShader = a.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...zs()
            ].join(`
`)), a.vertexShader = a.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Ns()
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...ks(t)
            ].join(`
`)), a.fragmentShader = a.fragmentShader.replace("#include <color_fragment>", Ds(t).join(`
`)), t || (a.fragmentShader = a.fragmentShader.replace("#include <normal_fragment_begin>", Hs.join(`
`)));
        };
        const s = [
            "surroundings-clouds",
            `v${Ms}`,
            "nh",
            t ? "perf" : "full"
        ].join("-");
        return n.customProgramCacheKey = ()=>s, n.needsUpdate = !0, {
            material: n,
            onAnimationFrame: (a)=>{
                i.value = a * .001;
            },
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 1
        };
    }, Ps = "#cfd4dc", Ws = {
        bucketKey: "fog_251",
        occlusionGroup: "fog_251",
        shaderVersion: 1,
        passable: !0,
        volumetric: !0,
        surroundingsFactory: Us,
        special: {
            paletteIndex: 251,
            label: "Fog",
            swatchColor: Ps
        }
    }, Bs = "#a8d8f0", Vs = "#cce8ff", Gs = .05, $s = 0, qs = .22, Xs = (o)=>{
        const { heroOcclusion: e } = o, t = new R({
            color: Vs,
            roughness: Gs,
            metalness: $s,
            vertexColors: !1,
            transparent: !0,
            opacity: qs,
            depthWrite: !1
        });
        return ki(t, e), {
            material: t,
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 2
        };
    }, Ys = {
        bucketKey: "glass_246",
        occlusionGroup: "glass_246",
        shaderVersion: 3,
        geometry: {
            vertexColors: !1
        },
        seeThrough: !0,
        factory: Xs,
        special: {
            paletteIndex: 246,
            label: "Glass",
            swatchColor: Bs,
            category: "buildings"
        }
    }, Wi = "#CFB53B", lt = .6, ht = [
        .9,
        .72,
        .12
    ], ct = [
        .6,
        .32,
        .04
    ], Zs = .5, Js = 0, Ks = "#aa4400", Qs = .25, js = [
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
    function er() {
        return [
            ...W
        ];
    }
    function tr() {
        return [
            ...B
        ];
    }
    function ir(o) {
        return [
            ...N(o),
            js,
            `const vec3 G_COL1 = vec3(${ht[0].toFixed(3)}, ${ht[1].toFixed(3)}, ${ht[2].toFixed(3)});`,
            `const vec3 G_COL2 = vec3(${ct[0].toFixed(3)}, ${ct[1].toFixed(3)}, ${ct[2].toFixed(3)});`
        ];
    }
    function nr(o) {
        const e = [
            "vec3 gNrm = normalize(vVoxelAoWorldNormal);",
            "bool gIsBottom = gNrm.y < -0.5;",
            "vec2 gUv = vec2(0.0);",
            "if (!gIsBottom) {",
            "	if (abs(gNrm.x) > abs(gNrm.z) && abs(gNrm.x) > abs(gNrm.y)) {",
            `		gUv = vVoxelAoWorldPosition.zy * ${lt.toFixed(3)};`,
            "	} else if (abs(gNrm.z) > abs(gNrm.y)) {",
            `		gUv = vVoxelAoWorldPosition.xy * ${lt.toFixed(3)};`,
            "	} else {",
            `		gUv = vVoxelAoWorldPosition.xz * ${lt.toFixed(3)};`,
            "	}",
            "}"
        ], i = [
            "	vec2 gQ = vec2(0.0), gR = vec2(0.0);",
            `	${o ? "float gF = goldPatternLow(gUv, gQ, gR);" : "float gF = goldPattern(gUv, gQ, gR);"}`,
            "	vec3 gC = mix(G_COL1, vec3(0.0), pow(smoothstep(0., 0.9, gF), 2.));",
            "	gC += G_COL2 * pow(smoothstep(0., 0.8, dot(gQ, gR)*0.6), 3.) * 1.5;",
            "	gC *= pow(dot(gQ, gR) + 0.3, 3.);",
            "	gC *= gF * 1.5;",
            `	gC *= ${E};`,
            "	diffuseColor = vec4(gC, 1.0);"
        ];
        return [
            ...e,
            "if (gIsBottom) {",
            `	diffuseColor = vec4(G_COL2 * 0.3 * ${E}, 1.0);`,
            "} else {",
            ...i,
            "}"
        ];
    }
    function sr(o, e, t, i, n) {
        o.onBeforeCompile = (s)=>{
            V(s, e), ie(s, t), Y(s, i), s.vertexShader = s.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...er(),
                ...Q,
                ...G
            ].join(`
`)), s.vertexShader = s.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...tr(),
                ...j,
                ...$
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...ir(n),
                ...ee,
                ...q
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <color_fragment>", nr(n).join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <clipping_planes_fragment>", X.join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <dithering_fragment>", te.join(`
`));
        };
    }
    const rr = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: n = !1 } = o, s = new R({
            color: Wi,
            emissive: new le(Ks),
            emissiveIntensity: Qs,
            roughness: Zs,
            metalness: Js,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return sr(s, t, e, i, n), {
            material: s,
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, or = {
        bucketKey: "gold_247",
        occlusionGroup: "solid",
        shaderVersion: 5,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !1,
            deformSurface: !1
        },
        factory: rr,
        special: {
            paletteIndex: 247,
            label: "Gold",
            swatchColor: Wi,
            category: "metals"
        }
    }, li = "/materials/grass_242/grass_02_base_1k.png", ar = "/materials/grass_242/grass_02_normal_gl_1k.png", lr = "/materials/grass_242/grass_02_roughness_1k.png", hr = "/materials/grass_242/grass_02_amibent_occlusion_1k.png", cr = "#4f8f37", Dt = .75, ur = 1.45, dr = .45, hi = .86, It = 1, fr = 8, mr = 1;
    let ut = null, dt = null, ft = null, mt = null, pt = null;
    function be(o, e = !1) {
        return o.wrapS = 1e3, o.wrapT = 1e3, o.magFilter = 1006, o.minFilter = e ? 1006 : 1008, o.anisotropy = e ? mr : fr, o.generateMipmaps = !e, o;
    }
    function pr(o) {
        if (o) {
            if (!dt) {
                const t = be(new pe().load(li), !0);
                t.colorSpace = I, dt = t;
            }
            return dt;
        }
        if (ut) return ut;
        const e = be(new pe().load(li), !1);
        return e.colorSpace = I, ut = e, e;
    }
    function gr() {
        if (ft) return ft;
        const o = be(new pe().load(ar), !1);
        return ft = o, o;
    }
    function xr() {
        if (mt) return mt;
        const o = be(new pe().load(lr), !1);
        return mt = o, o;
    }
    function vr() {
        if (pt) return pt;
        const o = be(new pe().load(hr), !1);
        return pt = o, o;
    }
    function yr() {
        return [
            ...W
        ];
    }
    function _r() {
        return [
            ...B
        ];
    }
    function Sr(o) {
        const e = [
            ...N(!1),
            "uniform sampler2D grassMap;"
        ];
        return o ? [
            ...N(!0),
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
    function Mr(o) {
        const e = [
            "#include <color_fragment>",
            `vec2 grassUv = getGrassUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Dt.toFixed(2)};`,
            "vec4 grassTexel = texture2D(grassMap, grassUv);",
            "diffuseColor.rgb *= grassTexel.rgb;",
            "diffuseColor.a *= grassTexel.a;",
            `diffuseColor.rgb *= ${E};`
        ];
        return o || e.splice(3, 0, "float grassMicroAo = mix(1.0, texture2D(grassAoMap, grassUv).r, " + dr.toFixed(2) + ");", "diffuseColor.rgb *= grassMicroAo;"), e;
    }
    function wr() {
        return [
            "#include <roughnessmap_fragment>",
            `vec2 grassRoughnessUv = getGrassUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Dt.toFixed(2)};`,
            "float grassRoughnessSample = texture2D(grassRoughnessMap, grassRoughnessUv).g;",
            `roughnessFactor = clamp(mix(${hi.toFixed(2)}, ${It.toFixed(2)}, grassRoughnessSample), ${hi.toFixed(2)}, ${It.toFixed(2)});`
        ];
    }
    function Fr() {
        return [
            `vec2 grassNormalUv = getGrassUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Dt.toFixed(2)};`,
            "vec3 grassMapNormal = texture2D(grassNormalMap, grassNormalUv).xyz * 2.0 - 1.0;",
            `grassMapNormal.xy *= ${ur.toFixed(2)};`,
            "normal = normalize(grassGetTangentFrame(-vViewPosition, normal, grassNormalUv) * normalize(grassMapNormal));"
        ];
    }
    function br(o, e, t, i, n, s, r, a, h) {
        o.onBeforeCompile = (l)=>{
            V(l, s), l.uniforms.grassMap = {
                value: e
            }, !h && t && i && n && (l.uniforms.grassNormalMap = {
                value: t
            }, l.uniforms.grassRoughnessMap = {
                value: i
            }, l.uniforms.grassAoMap = {
                value: n
            }), ie(l, r), Y(l, a), l.vertexShader = l.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...yr(),
                ...Q,
                ...G
            ].join(`
`)), l.vertexShader = l.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ..._r(),
                ...j,
                ...$
            ].join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Sr(h),
                ...ee,
                ...q
            ].join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <color_fragment>", Mr(h).join(`
`)), h || (l.fragmentShader = l.fragmentShader.replace("#include <roughnessmap_fragment>", wr().join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <normal_fragment_maps>", Fr().join(`
`))), l.fragmentShader = l.fragmentShader.replace("#include <clipping_planes_fragment>", X.join(`
`)), l.fragmentShader = l.fragmentShader.replace("#include <dithering_fragment>", te.join(`
`));
        };
    }
    const Er = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: n = !1 } = o, s = pr(n), r = n ? null : gr(), a = n ? null : xr(), h = n ? null : vr(), l = new R({
            roughness: It,
            metalness: ge.METALNESS,
            vertexColors: !1
        });
        return br(l, s, r, a, h, t, e, i, n), {
            material: l,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Ar = {
        bucketKey: "grass_242",
        occlusionGroup: "solid",
        shaderVersion: 6,
        geometry: {
            vertexColors: !1
        },
        factory: Er,
        special: {
            paletteIndex: 242,
            label: "Grass",
            swatchColor: cr,
            category: "nature"
        }
    };
    function $e(o, e = 8, t = 1) {
        let i = null, n = null;
        const s = (r)=>{
            const a = new pe().load(o);
            return a.colorSpace = I, a.wrapS = 1e3, a.wrapT = 1e3, a.magFilter = 1006, a.minFilter = r ? 1006 : 1008, a.anisotropy = r ? t : e, a.generateMipmaps = !r, a;
        };
        return (r)=>r ? n ??= s(!0) : i ??= s(!1);
    }
    const Cr = "/materials/iron_bars_249/iron_bars_256x256.png", Tr = "#6b6b6b", Rr = 1, Lr = .55, Or = .45, Ir = .5, zr = $e(Cr);
    function Nr() {
        return [
            ...W
        ];
    }
    function kr() {
        return [
            ...B
        ];
    }
    function Dr(o) {
        return [
            ...N(o),
            "uniform sampler2D ironBarsMap;",
            "vec2 getIronBarsUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function Hr() {
        return [
            "#include <color_fragment>",
            `vec2 ironBarsUv = getIronBarsUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Rr.toFixed(1)};`,
            "vec4 ironBarsTexel = texture2D(ironBarsMap, ironBarsUv);",
            "diffuseColor.rgb *= ironBarsTexel.rgb;",
            "diffuseColor.a *= ironBarsTexel.a;",
            `diffuseColor.rgb *= ${E};`
        ];
    }
    function Ur(o, e, t, i, n, s) {
        o.onBeforeCompile = (r)=>{
            V(r, t), r.uniforms.ironBarsMap = {
                value: e
            }, ie(r, i), Y(r, n), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Nr(),
                ...Q,
                ...G
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...kr(),
                ...j,
                ...$
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Dr(s),
                ...ee,
                ...q
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", Hr().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", X.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", te.join(`
`));
        };
    }
    const Pr = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: n = !1 } = o, s = zr(n), r = new R({
            roughness: Lr,
            metalness: Or,
            vertexColors: !1,
            alphaTest: Ir
        });
        return Ur(r, s, t, e, i, n), {
            material: r,
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 2
        };
    }, Wr = {
        bucketKey: "ironbars_249",
        occlusionGroup: "ironbars_249",
        shaderVersion: 4,
        geometry: {
            vertexColors: !1
        },
        seeThrough: !0,
        factory: Pr,
        special: {
            paletteIndex: 249,
            label: "Iron Bars",
            swatchColor: Tr,
            category: "buildings"
        }
    }, Bi = "#cc3300", Br = 1.6, Vr = .85, gt = [
        .02,
        0,
        0
    ], xt = [
        .88,
        .22,
        0
    ], vt = [
        1,
        .9,
        .25
    ], ci = .97, ui = .9, Gr = .055, $r = .018, di = 1.8, fi = .35, mi = 1, pi = 1.5, gi = .4, qr = .45, Xr = 0, Yr = "#ff3300", Zr = 3.2, Jr = [
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
    function Kr() {
        return [
            "attribute float surfaceDeformStrength;",
            ...W,
            "uniform float uLavaTime;"
        ];
    }
    function Qr(o) {
        const e = o ? $r : Gr;
        return [
            "vec3 lavaWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            `float lavaRippleA = sin(lavaWorld.x * ${di.toFixed(3)} + uLavaTime * ${fi.toFixed(3)});`,
            `float lavaRippleB = cos(lavaWorld.z * ${di.toFixed(3)} * 1.17 + uLavaTime * ${fi.toFixed(3)} * 0.83);`,
            `float lavaDisplacement = (lavaRippleA + lavaRippleB) * 0.5 * ${e.toFixed(4)} * surfaceDeformStrength;`,
            "transformed.y += lavaDisplacement;",
            ...B
        ];
    }
    function jr(o) {
        const e = [
            ...N(o),
            "uniform float uLavaTime;",
            `const vec3 L_CRUST  = vec3(${gt[0].toFixed(3)}, ${gt[1].toFixed(3)}, ${gt[2].toFixed(3)});`,
            `const vec3 L_MID    = vec3(${xt[0].toFixed(3)}, ${xt[1].toFixed(3)}, ${xt[2].toFixed(3)});`,
            `const vec3 L_BRIGHT = vec3(${vt[0].toFixed(3)}, ${vt[1].toFixed(3)}, ${vt[2].toFixed(3)});`
        ];
        return o || e.push(Jr), e;
    }
    function eo(o) {
        return o ? [
            "vec3 lNrm = normalize(vVoxelAoWorldNormal);",
            "bool lIsTop    = lNrm.y >  0.5;",
            "bool lIsBottom = lNrm.y < -0.5;",
            "if (lIsBottom) {",
            `	diffuseColor = vec4(L_CRUST * ${E}, ${ui.toFixed(3)});`,
            "} else {",
            "float lGlow = 0.0;",
            "if (lIsTop) {",
            "	vec2 lUv = vVoxelAoWorldPosition.xz;",
            "	lGlow = 0.5 + 0.5 * sin(lUv.x * 2.8 + uLavaTime * 0.5 + cos(lUv.y * 1.6 + uLavaTime * 0.35));",
            "} else {",
            "	float lFallH = (abs(lNrm.x) > abs(lNrm.z)) ? vVoxelAoWorldPosition.z : vVoxelAoWorldPosition.x;",
            `	vec2 lFallUv = vec2(lFallH / ${mi.toFixed(3)}, vVoxelAoWorldPosition.y / ${pi.toFixed(3)} + uLavaTime * ${gi.toFixed(3)});`,
            "	float lFallA = 0.5 + 0.5 * sin(lFallUv.y * 5.2 + lFallUv.x * 1.8);",
            "	float lFallB = 0.5 + 0.5 * sin(lFallUv.y * 9.0 + uLavaTime * 0.4);",
            "	lGlow = clamp(lFallA * 0.65 + lFallB * 0.35, 0.0, 1.0);",
            "}",
            "vec3 lColor = mix(L_MID, L_BRIGHT, lGlow * 0.7);",
            `lColor *= ${E};`,
            `diffuseColor = vec4(lColor, ${ci.toFixed(3)});`,
            "}"
        ] : [
            "vec3 lNrm = normalize(vVoxelAoWorldNormal);",
            "bool lIsTop    = lNrm.y >  0.5;",
            "bool lIsBottom = lNrm.y < -0.5;",
            "float lGlowMask  = 0.0;",
            "float lCrustMask = 0.0;",
            "if (lIsBottom) {",
            `	diffuseColor = vec4(L_CRUST * ${E}, ${ui.toFixed(3)});`,
            "} else {",
            "if (lIsTop) {",
            `	vec2 lUvCrust = vVoxelAoWorldPosition.xz / ${Br.toFixed(3)};`,
            `	vec2 lUvGlow  = vVoxelAoWorldPosition.xz / ${Vr.toFixed(3)};`,
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
            `	vec2 lFallUv = vec2(lFallH / ${mi.toFixed(3)}, lFallV / ${pi.toFixed(3)} + uLavaTime * ${gi.toFixed(3)});`,
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
            `lColor *= ${E};`,
            `diffuseColor = vec4(lColor, ${ci.toFixed(3)});`,
            "}"
        ];
    }
    function to() {
        return [
            "float lavaEmissivePulse = 0.78 + 0.22 * sin(uLavaTime * 1.05);",
            "totalEmissiveRadiance *= lavaEmissivePulse;"
        ];
    }
    function io(o, e, t, i, n, s) {
        o.onBeforeCompile = (r)=>{
            V(r, t), r.uniforms.uLavaTime = e, ie(r, i), Y(r, n), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Kr(),
                ...Q,
                ...G
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Qr(s),
                ...j,
                ...$
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...jr(s),
                ...ee,
                ...q
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", eo(s).join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <emissivemap_fragment>", to().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", X.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", te.join(`
`));
        };
    }
    const no = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: n = !1 } = o, s = {
            value: 0
        }, r = new R({
            color: Bi,
            emissive: new le(Yr),
            emissiveIntensity: Zr,
            roughness: qr,
            metalness: Xr,
            vertexColors: !1,
            transparent: !0,
            depthWrite: !0
        });
        return io(r, s, t, e, i, n), {
            material: r,
            onAnimationFrame: (h)=>{
                s.value = h * .001;
            },
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 1
        };
    }, so = {
        bucketKey: "lava_245",
        occlusionGroup: "lava_245",
        shaderVersion: 4,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !0,
            deformSurface: !0
        },
        passable: !0,
        lightEmission: "#ff5a10",
        factory: no,
        special: {
            paletteIndex: 245,
            label: "Lava",
            swatchColor: Bi,
            category: "liquids"
        }
    }, ro = "/materials/leaves_252/leaves_256x256.png", oo = "#3f8f2a", ao = 1, lo = .8, ho = 0, Vi = .5, co = $e(ro), Gi = [
        "uniform sampler2D leavesMap;",
        "vec2 getLeavesUv(vec3 worldPosition, vec3 worldNormal) {",
        "	vec3 n = abs(normalize(worldNormal));",
        "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
        "	if (n.x >= n.z) return worldPosition.zy;",
        "	return worldPosition.xy;",
        "}"
    ], $i = ao.toFixed(1);
    function uo(o, e, t, i, n, s) {
        o.onBeforeCompile = (r)=>{
            V(r, t), r.uniforms.leavesMap = {
                value: e
            }, ie(r, i), Y(r, n), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...W,
                ...Q,
                ...G
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...B,
                ...j,
                ...$
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...N(s),
                ...Gi,
                ...ee,
                ...q
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", [
                "#include <color_fragment>",
                `vec4 leavesTexel = texture2D(leavesMap, getLeavesUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${$i});`,
                "diffuseColor.rgb *= leavesTexel.rgb;",
                "diffuseColor.a *= leavesTexel.a;",
                `diffuseColor.rgb *= ${E};`
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", X.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", te.join(`
`));
        };
    }
    function fo(o) {
        const e = new xn({
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
    const mo = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: n = !1 } = o, s = co(n), r = new R({
            roughness: lo,
            metalness: ho,
            vertexColors: !1,
            alphaTest: Vi,
            side: 2
        });
        return uo(r, s, t, e, i, n), {
            material: r,
            castShadow: !0,
            receiveShadow: !0,
            customDepthMaterial: fo(s),
            renderOrder: 2
        };
    }, po = {
        bucketKey: "leaves_252",
        occlusionGroup: "leaves_252",
        shaderVersion: 1,
        geometry: {
            vertexColors: !1
        },
        seeThrough: !0,
        factory: mo,
        special: {
            paletteIndex: 252,
            label: "Leaves",
            swatchColor: oo,
            category: "nature"
        }
    }, zt = "#ffd166", go = .35, xo = 0, vo = 3.5, yo = (o)=>{
        const { heroOcclusion: e } = o, t = new R({
            color: zt,
            emissive: zt,
            emissiveIntensity: vo,
            roughness: go,
            metalness: xo,
            vertexColors: !1
        });
        return ki(t, e), {
            material: t,
            castShadow: !1,
            receiveShadow: !1
        };
    }, _o = {
        bucketKey: "light_243",
        occlusionGroup: "solid",
        shaderVersion: 3,
        geometry: {
            vertexColors: !1
        },
        passable: !0,
        lightEmission: "#ffe0b0",
        factory: yo,
        special: {
            paletteIndex: 243,
            label: "Light",
            swatchColor: zt
        }
    }, qi = "#A8B8C8", yt = .5, _t = [
        .8,
        .82,
        .86
    ], St = [
        .22,
        .3,
        .45
    ], So = .35, Mo = 0, wo = [
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
    function Fo() {
        return [
            ...W
        ];
    }
    function bo() {
        return [
            ...B
        ];
    }
    function Eo(o) {
        return [
            ...N(o),
            wo,
            `const vec3 S_COL1 = vec3(${_t[0].toFixed(3)}, ${_t[1].toFixed(3)}, ${_t[2].toFixed(3)});`,
            `const vec3 S_COL2 = vec3(${St[0].toFixed(3)}, ${St[1].toFixed(3)}, ${St[2].toFixed(3)});`
        ];
    }
    function Ao(o) {
        const e = [
            "vec3 sNrm = normalize(vVoxelAoWorldNormal);",
            "bool sIsBottom = sNrm.y < -0.5;",
            "vec2 sUv = vec2(0.0);",
            "if (!sIsBottom) {",
            "	if (abs(sNrm.x) > abs(sNrm.z) && abs(sNrm.x) > abs(sNrm.y)) {",
            `		sUv = vVoxelAoWorldPosition.zy * ${yt.toFixed(3)};`,
            "	} else if (abs(sNrm.z) > abs(sNrm.y)) {",
            `		sUv = vVoxelAoWorldPosition.xy * ${yt.toFixed(3)};`,
            "	} else {",
            `		sUv = vVoxelAoWorldPosition.xz * ${yt.toFixed(3)};`,
            "	}",
            "}"
        ], i = [
            "	vec2 sQ = vec2(0.0), sR = vec2(0.0);",
            `	${o ? "float sF = silverPatternLow(sUv, sQ, sR);" : "float sF = silverPattern(sUv, sQ, sR);"}`,
            "	vec3 sC = mix(S_COL1, vec3(0.0), pow(smoothstep(0., 0.9, sF), 2.));",
            "	sC += S_COL2 * pow(smoothstep(0., 0.8, dot(sQ, sR)*0.6), 3.) * 1.5;",
            "	sC *= pow(dot(sQ, sR) + 0.3, 3.);",
            "	sC *= sF * 1.5;",
            `	sC *= ${E};`,
            "	diffuseColor = vec4(sC, 1.0);"
        ];
        return [
            ...e,
            "if (sIsBottom) {",
            `	diffuseColor = vec4(S_COL2 * 0.3 * ${E}, 1.0);`,
            "} else {",
            ...i,
            "}"
        ];
    }
    function Co(o, e, t, i, n) {
        o.onBeforeCompile = (s)=>{
            V(s, e), ie(s, t), Y(s, i), s.vertexShader = s.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Fo(),
                ...Q,
                ...G
            ].join(`
`)), s.vertexShader = s.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...bo(),
                ...j,
                ...$
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Eo(n),
                ...ee,
                ...q
            ].join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <color_fragment>", Ao(n).join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <clipping_planes_fragment>", X.join(`
`)), s.fragmentShader = s.fragmentShader.replace("#include <dithering_fragment>", te.join(`
`));
        };
    }
    const To = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: n = !1 } = o, s = new R({
            color: qi,
            roughness: So,
            metalness: Mo,
            vertexColors: !1,
            transparent: !1,
            depthWrite: !0
        });
        return Co(s, t, e, i, n), {
            material: s,
            castShadow: !0,
            receiveShadow: !0,
            renderOrder: 0
        };
    }, Ro = {
        bucketKey: "silver_248",
        occlusionGroup: "solid",
        shaderVersion: 5,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !1,
            deformSurface: !1
        },
        factory: To,
        special: {
            paletteIndex: 248,
            label: "Silver",
            swatchColor: qi,
            category: "metals"
        }
    }, Lo = "/materials/bricks_240/bricks_256x256.png", Oo = "#8f8f8f", Io = 1, zo = $e(Lo);
    function No() {
        return [
            ...W
        ];
    }
    function ko() {
        return [
            ...B
        ];
    }
    function Do(o) {
        return [
            ...N(o),
            "uniform sampler2D stoneBricksMap;",
            "vec2 getStoneBricksUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function Ho() {
        return [
            "#include <color_fragment>",
            `vec2 stoneBricksUv = getStoneBricksUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${Io.toFixed(1)};`,
            "vec4 stoneBricksTexel = texture2D(stoneBricksMap, stoneBricksUv);",
            "diffuseColor.rgb *= stoneBricksTexel.rgb;",
            "diffuseColor.a *= stoneBricksTexel.a;",
            `diffuseColor.rgb *= ${E};`
        ];
    }
    function Uo(o, e, t, i, n, s) {
        o.onBeforeCompile = (r)=>{
            V(r, t), r.uniforms.stoneBricksMap = {
                value: e
            }, ie(r, i), Y(r, n), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...No(),
                ...Q,
                ...G
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...ko(),
                ...j,
                ...$
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Do(s),
                ...ee,
                ...q
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", X.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", Ho().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", te.join(`
`));
        };
    }
    const Po = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: n = !1 } = o, s = zo(n), r = new R({
            roughness: ge.ROUGHNESS,
            metalness: ge.METALNESS,
            vertexColors: !1
        });
        return Uo(r, s, t, e, i, n), {
            material: r,
            castShadow: !0,
            receiveShadow: !0
        };
    }, Wo = {
        bucketKey: "stonebricks_240",
        occlusionGroup: "solid",
        shaderVersion: 5,
        geometry: {
            vertexColors: !1
        },
        factory: Po,
        special: {
            paletteIndex: 240,
            label: "Stone Bricks",
            swatchColor: Oo,
            category: "buildings"
        }
    }, Bo = "#1a6699", Vo = 2, Go = 1.1, Mt = [
        .9,
        .9,
        .95
    ], wt = [
        .1,
        .4,
        .6
    ], Ft = [
        0,
        .2,
        .4
    ], xi = .86, vi = .75, yi = .48, $o = .115, qo = .045, _i = 2.4, Si = 1.6, Mi = .8, wi = 1.2, Fi = 1.4, Xo = .2, Yo = 0, Zo = [
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
    function Jo() {
        return [
            "attribute float surfaceDeformStrength;",
            ...W,
            "uniform float uWaterTime;"
        ];
    }
    function Ko(o) {
        const e = o ? qo : $o;
        return [
            "vec3 waterWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;",
            `float waterRippleA = sin(waterWorld.x * ${_i.toFixed(3)} + uWaterTime * ${Si.toFixed(3)});`,
            `float waterRippleB = cos(waterWorld.z * ${_i.toFixed(3)} * 1.13 + uWaterTime * ${Si.toFixed(3)} * 0.87);`,
            `float waterDisplacement = (waterRippleA + waterRippleB) * 0.5 * ${e.toFixed(4)} * surfaceDeformStrength;`,
            "transformed.y += waterDisplacement;",
            ...B
        ];
    }
    function Qo(o) {
        const e = [
            ...N(o),
            "uniform float uWaterTime;",
            `const vec3 W_FOAM = vec3(${Mt[0].toFixed(3)}, ${Mt[1].toFixed(3)}, ${Mt[2].toFixed(3)});`,
            `const vec3 W_MAIN = vec3(${wt[0].toFixed(3)}, ${wt[1].toFixed(3)}, ${wt[2].toFixed(3)});`,
            `const vec3 W_DARK = vec3(${Ft[0].toFixed(3)}, ${Ft[1].toFixed(3)}, ${Ft[2].toFixed(3)});`
        ];
        return o || e.push(Zo), e;
    }
    function jo(o) {
        return o ? [
            "vec3 wNrm = normalize(vVoxelAoWorldNormal);",
            "bool wIsTopSurface = wNrm.y > 0.5;",
            "bool wIsBottomSurface = wNrm.y < -0.5;",
            "if (wIsBottomSurface) {",
            `	diffuseColor = vec4(W_MAIN * ${E}, ${yi.toFixed(3)});`,
            "} else {",
            "float wWave = 0.0;",
            "float wFoamMask = 0.0;",
            "if (wIsTopSurface) {",
            "	vec2 wUv = vVoxelAoWorldPosition.xz;",
            "	wWave = 0.5 + 0.5 * sin(wUv.x * 4.0 + uWaterTime * 1.7 + cos(wUv.y * 2.0));",
            "	wFoamMask = smoothstep(0.88, 1.0, wWave);",
            "} else {",
            "	float wFallH = (abs(wNrm.x) > abs(wNrm.z)) ? vVoxelAoWorldPosition.z : vVoxelAoWorldPosition.x;",
            `	vec2 wFallUv = vec2(wFallH / ${Mi.toFixed(3)}, vVoxelAoWorldPosition.y / ${wi.toFixed(3)} + uWaterTime * ${Fi.toFixed(3)});`,
            "	float wFallColumn = sin(wFallUv.x * 6.283);",
            "	float wFallA = 0.5 + 0.5 * sin(wFallUv.y * 6.283 + wFallColumn * 1.1);",
            "	float wFallB = 0.5 + 0.5 * sin(wFallUv.y * 11.0 + wFallUv.x * 2.3);",
            "	wWave = clamp(wFallA * 0.72 + wFallB * 0.28, 0.0, 1.0);",
            "	wFoamMask = 0.0;",
            "}",
            "vec3 wBody = mix(W_DARK, W_MAIN, wWave);",
            "vec3 wColor = mix(wBody, W_FOAM, wFoamMask * 0.65);",
            `wColor *= ${E};`,
            `float wAlpha = mix(${xi.toFixed(3)}, ${vi.toFixed(3)}, wFoamMask);`,
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
            `	diffuseColor = vec4(W_MAIN * ${E}, ${yi.toFixed(3)});`,
            "} else {",
            "if (wIsTopSurface) {",
            `	vec2 wUvFoam   = vVoxelAoWorldPosition.xz / ${Vo.toFixed(3)};`,
            `	vec2 wUvRipple = vVoxelAoWorldPosition.xz / ${Go.toFixed(3)};`,
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
            `	vec2 wUvRipple = vec2(wFallH / ${Mi.toFixed(3)}, wFallV / ${wi.toFixed(3)} + uWaterTime * ${Fi.toFixed(3)});`,
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
            `wColor *= ${E};`,
            `float wAlpha = mix(${xi.toFixed(3)}, ${vi.toFixed(3)}, wFoamMask);`,
            "diffuseColor = vec4(wColor, wAlpha);",
            "}"
        ];
    }
    function ea(o, e, t, i, n, s) {
        o.onBeforeCompile = (r)=>{
            V(r, t), r.uniforms.uWaterTime = e, ie(r, i), Y(r, n), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...Jo(),
                ...Q,
                ...G
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...Ko(s),
                ...j,
                ...$
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...Qo(s),
                ...ee,
                ...q
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", jo(s).join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", X.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", te.join(`
`));
        };
    }
    const ta = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: n = !1 } = o, s = {
            value: 0
        }, r = new R({
            roughness: Xo,
            metalness: Yo,
            vertexColors: !1,
            transparent: !0,
            depthWrite: !0
        });
        return ea(r, s, t, e, i, n), {
            material: r,
            onAnimationFrame: (h)=>{
                s.value = h * .001;
            },
            castShadow: !1,
            receiveShadow: !0,
            renderOrder: 1
        };
    }, ia = {
        bucketKey: "water_241",
        occlusionGroup: "water_241",
        shaderVersion: 10,
        geometry: {
            vertexColors: !1,
            preserveVoxelFaces: !0,
            deformSurface: !0
        },
        passable: !0,
        factory: ta,
        special: {
            paletteIndex: 241,
            label: "Water",
            swatchColor: Bo,
            category: "liquids"
        }
    }, na = "/materials/wood_244/wood_256x256.png", sa = "#8b5a2b", ra = 1, oa = $e(na);
    function aa() {
        return [
            ...W
        ];
    }
    function la() {
        return [
            ...B
        ];
    }
    function ha(o) {
        return [
            ...N(o),
            "uniform sampler2D woodMap;",
            "vec2 getWoodUv(vec3 worldPosition, vec3 worldNormal) {",
            "	vec3 n = abs(normalize(worldNormal));",
            "	if (n.y >= n.x && n.y >= n.z) return worldPosition.xz;",
            "	if (n.x >= n.z) return worldPosition.zy;",
            "	return worldPosition.xy;",
            "}"
        ];
    }
    function ca() {
        return [
            "#include <color_fragment>",
            `vec2 woodUv = getWoodUv(vVoxelAoWorldPosition, vVoxelAoWorldNormal) * ${ra.toFixed(1)};`,
            "vec4 woodTexel = texture2D(woodMap, woodUv);",
            "diffuseColor.rgb *= woodTexel.rgb;",
            "diffuseColor.a *= woodTexel.a;",
            `diffuseColor.rgb *= ${E};`
        ];
    }
    function ua(o, e, t, i, n, s) {
        o.onBeforeCompile = (r)=>{
            V(r, t), r.uniforms.woodMap = {
                value: e
            }, ie(r, i), Y(r, n), r.vertexShader = r.vertexShader.replace("#include <common>", [
                "#include <common>",
                ...aa(),
                ...Q,
                ...G
            ].join(`
`)), r.vertexShader = r.vertexShader.replace("#include <begin_vertex>", [
                "#include <begin_vertex>",
                ...la(),
                ...j,
                ...$
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <common>", [
                "#include <common>",
                ...ha(s),
                ...ee,
                ...q
            ].join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <color_fragment>", ca().join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <clipping_planes_fragment>", X.join(`
`)), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", te.join(`
`));
        };
    }
    const da = (o)=>{
        const { movementHighlight: e, voxelAo: t, heroOcclusion: i, performanceMode: n = !1 } = o, s = oa(n), r = new R({
            roughness: ge.ROUGHNESS,
            metalness: ge.METALNESS,
            vertexColors: !1
        });
        return ua(r, s, t, e, i, n), {
            material: r,
            castShadow: !0,
            receiveShadow: !0
        };
    }, fa = {
        bucketKey: "wood_244",
        occlusionGroup: "solid",
        shaderVersion: 4,
        geometry: {
            vertexColors: !1
        },
        factory: da,
        special: {
            paletteIndex: 244,
            label: "Wood",
            swatchColor: sa,
            category: "nature"
        }
    }, Ht = [
        Be,
        Wo,
        ia,
        Ar,
        _o,
        fa,
        so,
        Ys,
        or,
        Ro,
        Wr,
        Ss,
        Ws,
        po,
        is
    ], ne = Ht.filter((o)=>o.special !== void 0);
    ne.map((o)=>({
            index: o.special.paletteIndex,
            label: o.special.label,
            color: o.special.swatchColor,
            category: o.special.category ?? "miscellaneous"
        }));
    const ma = new Map(ne.map((o)=>[
            o.special.paletteIndex,
            o.bucketKey
        ])), pa = Be.occlusionGroup ?? Be.bucketKey, ga = new Map(ne.map((o)=>[
            o.special.paletteIndex,
            o.occlusionGroup ?? o.bucketKey
        ])), Ut = new Map(ne.map((o)=>[
            o.special.paletteIndex,
            o.geometry
        ])), Pt = Be.geometry, Xi = new Set(ne.filter((o)=>o.passable === !0).map((o)=>o.special.paletteIndex));
    function xa(o) {
        return Xi.has(o);
    }
    const Yi = new Set(ne.filter((o)=>o.seeThrough === !0).map((o)=>o.special.paletteIndex)), va = new Set(ne.filter((o)=>o.volumetric === !0).map((o)=>o.special.paletteIndex));
    function ya(o) {
        return va.has(o);
    }
    function _a(o) {
        return ma.get(o) ?? "default";
    }
    function Sa(o) {
        return ga.get(o) ?? pa;
    }
    function Ma(o) {
        return (Ut.get(o) ?? Pt)?.deformSurface === !0;
    }
    function wa(o) {
        return (Ut.get(o) ?? Pt)?.vertexColors !== !1;
    }
    function Fa(o) {
        return (Ut.get(o) ?? Pt)?.preserveVoxelFaces === !0;
    }
    function ba() {
        const o = new Map, e = [], t = (d)=>{
            let p = o.get(d);
            return p === void 0 && (p = e.length, o.set(d, p), e.push(d)), p;
        }, i = new Map, n = (d)=>{
            let p = i.get(d);
            return p === void 0 && (p = i.size, i.set(d, p)), p;
        }, s = new Int32Array(256), r = new Int32Array(256), a = new Uint8Array(256), h = new Uint8Array(256), l = new Uint8Array(256), c = new Uint8Array(256), u = new Uint8Array(256), m = new Uint8Array(256), f = new Uint8Array(256 * 3);
        for (const d of ne){
            if (!d.lightEmission) continue;
            const p = parseInt(d.lightEmission.slice(1), 16);
            f.set([
                p >> 16,
                p >> 8 & 255,
                p & 255
            ], d.special.paletteIndex * 3);
        }
        for(let d = 0; d < 256; d++)s[d] = t(_a(d)), r[d] = n(Sa(d)), a[d] = wa(d) ? 1 : 0, h[d] = Ma(d) ? 1 : 0, l[d] = Fa(d) ? 1 : 0, c[d] = ya(d) ? 1 : 0, u[d] = xa(d) ? 1 : 0, m[d] = u[d] || c[d] || Yi.has(d) ? 0 : 1;
        return {
            bucketId: s,
            occlusionId: r,
            usesVertexColors: a,
            deformsSurface: h,
            preservesVoxelFaces: l,
            isVolumetric: c,
            isPassable: u,
            lightBlocks: m,
            lightEmission: f,
            bucketKeyById: e
        };
    }
    const re = ba(), Ea = new Map(ne.map((o)=>[
            o.special.paletteIndex,
            parseInt(o.special.swatchColor.slice(1), 16)
        ]));
    wn({
        passableIndices: Xi,
        seeThroughIndices: Yi,
        editorColors: Ea
    });
    function Aa(o) {
        const { bucketKey: e, shaderVersion: t, factory: i } = o;
        return (n)=>{
            const s = i(n), r = [
                "terrain",
                e,
                `v${t}`,
                n.performanceMode ? "perf" : "full"
            ].join("-");
            if (s.material.customProgramCacheKey = ()=>r, !n.performanceMode) {
                const a = s.material.onBeforeCompile;
                s.material.onBeforeCompile = (h, l)=>{
                    a.call(s.material, h, l), Cn(h, n.voxelAo);
                };
            }
            return s.material.needsUpdate = !0, s;
        };
    }
    {
        const o = new Set, e = new Set;
        for (const t of Ht){
            if (o.has(t.bucketKey)) throw new Error(`Duplicate terrain material bucketKey: "${t.bucketKey}"`);
            if (o.add(t.bucketKey), t.special) {
                const { paletteIndex: i } = t.special;
                if (i < 240 || i > 255) throw new Error(`Special material "${t.bucketKey}" has paletteIndex ${i} outside the 240-255 range.`);
                if (e.has(i)) throw new Error(`Duplicate special material paletteIndex: ${i}`);
                e.add(i);
            }
        }
    }
    new Map(Ht.filter((o)=>o.factory !== void 0).map((o)=>[
            o.bucketKey,
            Aa(o)
        ]));
    new Map(ne.filter((o)=>o.surroundingsFactory !== void 0).map((o)=>[
            o.special.paletteIndex,
            o.surroundingsFactory
        ]));
    const bi = 1;
    function Ca(o) {
        return Math.max(bi, o.Resolution ?? bi);
    }
    const qe = 12, Ei = .22, Ta = .88, Ra = .18, Ai = .34, La = .9, Oa = .98, Ia = [
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
                Ra,
                e * 20
            ])
    ];
    function bt(o) {
        const e = Math.max(0, Math.min(1, o));
        return e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055;
    }
    function Et(o) {
        return Math.round(Math.max(0, Math.min(1, o)) * 255).toString(16).padStart(2, "0");
    }
    function Zi(o, e, t) {
        const i = t * Math.PI / 180, n = e * Math.cos(i), s = e * Math.sin(i), r = o + .3963377774 * n + .2158037573 * s, a = o - .1055613458 * n - .0638541728 * s, h = o - .0894841775 * n - 1.291485548 * s, l = r ** 3, c = a ** 3, u = h ** 3;
        return [
            4.0767416621 * l - 3.3077115913 * c + .2309699292 * u,
            -1.2684380046 * l + 2.6097574011 * c - .3413193965 * u,
            -.0041960863 * l - .7034186147 * c + 1.707614701 * u
        ];
    }
    function za(o, e, t) {
        const [i, n, s] = Zi(o, e, t), r = bt(i), a = bt(n), h = bt(s);
        return `#${Et(r)}${Et(a)}${Et(h)}`;
    }
    function Na(o, e, t) {
        const [i, n, s] = Zi(o, e, t);
        return i >= 0 && i <= 1 && n >= 0 && n <= 1 && s >= 0 && s <= 1;
    }
    function ka(o, e) {
        let t = 0, i = .4;
        for(let n = 0; n < 16; n++){
            const s = (t + i) / 2;
            Na(o, s, e) ? t = s : i = s;
        }
        return t * Oa;
    }
    function Ji(o) {
        const e = o / (qe - 1);
        return Ei + e * (Ta - Ei);
    }
    function Da(o, e, t) {
        if (e <= 0 || t === null) return 0;
        const i = o / (qe - 1), n = Math.pow(Math.sin(Math.PI * i), La), s = e * (Ai + (1 - Ai) * n);
        return Math.min(s, ka(Ji(o), t));
    }
    function Ha() {
        const o = [];
        for (const [e, t] of Ia)for(let i = 0; i < qe; i++){
            const n = Ji(i), s = Da(i, e, t);
            o.push(za(n, s, t ?? 0));
        }
        return o;
    }
    const Ve = Ha(), Ki = qe - 1;
    function Ua(o) {
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
    function Pa(o) {
        return `#${(o & 16777215).toString(16).padStart(6, "0")}`;
    }
    function At(o) {
        const e = o / 255;
        return e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4);
    }
    function Ti(o, e, t) {
        const i = At(o), n = At(e), s = At(t), r = Math.cbrt(.4122214708 * i + .5363325363 * n + .0514459929 * s), a = Math.cbrt(.2119034982 * i + .6806995451 * n + .1073969566 * s), h = Math.cbrt(.0883024619 * i + .2817188376 * n + .6299787005 * s);
        return [
            .2104542553 * r + .793617785 * a - .0040720468 * h,
            1.9779984951 * r - 2.428592205 * a + .4505937099 * h,
            .0259040371 * r + .7827717662 * a - .808675766 * h
        ];
    }
    function Wa(o) {
        const e = Fn(o);
        return e !== void 0 ? e : parseInt(Ua(o).slice(1), 16);
    }
    function Ba(o) {
        const { r: e, g: t, b: i } = Ci(Pa(o)), [n, s, r] = Ti(e, t, i);
        let a = Ki, h = 1 / 0;
        for(let l = 0; l < Ve.length; l++){
            const c = Ci(Ve[l]), [u, m, f] = Ti(c.r, c.g, c.b), d = n - u, p = s - m, x = r - f, g = d * d + p * p + x * x;
            g < h && (h = g, a = l);
        }
        return a;
    }
    function Va(o) {
        const e = Math.floor(o);
        return e >= 0 && e <= 255 ? e : Ba(o);
    }
    const Ga = re.bucketKeyById;
    let Ue = null;
    function $a() {
        return Ue || (Ue = (async ()=>{
            const { VoxelMesher: e } = await import("./voxel_mesher-D1vlYdB0.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), t = new Float32Array(256 * 3);
            for(let i = 0; i < 256; i++){
                const n = new le(Wa(Va(i)));
                t[i * 3] = n.r, t[i * 3 + 1] = n.g, t[i * 3 + 2] = n.b;
            }
            return new e(re.bucketId, re.occlusionId, re.usesVertexColors, re.deformsSurface, re.preservesVoxelFaces, re.isVolumetric, t, re.lightBlocks, re.lightEmission);
        })().catch((e)=>{
            throw Ue = null, e;
        })), Ue;
    }
    function K(o) {
        const { buffer: e } = o;
        if (e instanceof ArrayBuffer) return e;
        throw new Error("Cannot transfer SharedArrayBuffer-backed voxel geometry buffers.");
    }
    function qa(o) {
        return o instanceof Error ? o.message : String(o);
    }
    function Ri(o, e, t) {
        self.postMessage({
            buildId: o,
            error: `Failed to ${e}: ${qa(t)}`
        });
    }
    self.onmessage = async (o)=>{
        const { buildId: e, terrain: t, voxels: i, performanceMode: n } = o.data;
        let s;
        try {
            s = await $a();
        } catch (r) {
            console.error("[voxel-build] WASM mesher init FAILED:", r), Ri(e, "initialize the WebAssembly terrain mesher", r);
            return;
        }
        try {
            Xa(s, e, t, i, n);
        } catch (r) {
            console.error("[voxel-build] WASM build FAILED:", r), Ri(e, "build the terrain geometry", r);
        }
    };
    function Xa(o, e, t, i, n) {
        const s = Ca(t), r = Math.max(t.Width, t.Height, t.Length) * s, a = Mn(r), h = o.build_from_svo(i, t.Width, t.Height, t.Length, s, a, n ? 0 : We.SKY_RADIUS_TILES, We.GLOW_RADIUS_TILES), l = [], c = [];
        let u, m, f, d, p, x;
        try {
            const b = h.bucket_count();
            for(let v = 0; v < b; v++){
                const S = Ga[h.bucket_id(v)], w = h.take_positions(v), k = h.take_normals(v), L = h.take_colors(v), O = h.take_surface_deform(v), D = h.take_tile_heights(v), H = h.take_highlights(v), U = h.take_indices(v);
                l.push({
                    key: S,
                    positions: w,
                    normals: k,
                    colors: L,
                    surfaceDeformStrength: O,
                    tileHeights: D,
                    highlightStrengths: H,
                    indices: U
                }), c.push(K(w)), c.push(K(k)), L && c.push(K(L)), O && c.push(K(O)), c.push(K(D)), c.push(K(H)), c.push(K(U));
            }
            if (u = h.take_occupancy(), !n) {
                const v = h.take_sky(), S = h.take_glow();
                m = {
                    sky: v.length > 0 ? {
                        data: v,
                        region: h.sky_region()
                    } : null,
                    glow: S.length > 0 ? {
                        data: S,
                        region: h.glow_region()
                    } : null
                }, m.sky && c.push(K(m.sky.data)), m.glow && c.push(K(m.glow.data));
            }
            f = h.take_fog() ?? null, d = h.occupancy_width(), p = h.occupancy_height(), x = h.occupancy_length();
        } finally{
            h.free();
        }
        const g = {
            voxelWidth: d,
            voxelHeight: p,
            voxelLength: x,
            worldOriginX: -t.Width / 2,
            worldOriginY: -.5,
            worldOriginZ: -t.Length / 2,
            worldSizeX: t.Width,
            worldSizeY: t.Height,
            worldSizeZ: t.Length,
            voxelSize: 1 / s
        }, y = {
            data: u,
            light: m,
            ...g
        }, _ = f ? {
            data: f,
            ...g
        } : null;
        c.push(K(y.data)), _ && c.push(K(_.data)), self.postMessage({
            buildId: e,
            buckets: l,
            occupancy: y,
            fogVolume: _
        }, c);
    }
})();
