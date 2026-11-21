let g, E;
let __tla = (async ()=>{
    var ee = "/assets/voxel_mesher_bg-CGXW4aGl.wasm", te = async (_ = {}, e)=>{
        let t;
        if (e.startsWith("data:")) {
            const r = e.replace(/^data:.*?base64,/, "");
            let s;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") s = Buffer.from(r, "base64");
            else if (typeof atob == "function") {
                const l = atob(r);
                s = new Uint8Array(l.length);
                for(let o = 0; o < l.length; o++)s[o] = l.charCodeAt(o);
            } else throw new Error("Cannot decode base64-encoded data URL");
            t = await WebAssembly.instantiate(s, _);
        } else {
            const r = await fetch(e), s = r.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && s.startsWith("application/wasm")) t = await WebAssembly.instantiateStreaming(r, _);
            else {
                const l = await r.arrayBuffer();
                t = await WebAssembly.instantiate(l, _);
            }
        }
        return t.instance.exports;
    };
    g = class {
        static __wrap(e) {
            const t = Object.create(g.prototype);
            return t.__wbg_ptr = e, z.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, z.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            n.__wbg_meshbuild_free(e, 0);
        }
        bucket_count() {
            return n.meshbuild_bucket_count(this.__wbg_ptr) >>> 0;
        }
        bucket_id(e) {
            return n.meshbuild_bucket_id(this.__wbg_ptr, e) >>> 0;
        }
        glow_region() {
            const e = n.meshbuild_glow_region(this.__wbg_ptr);
            var t = U(e[0], e[1]).slice();
            return n.__wbindgen_free(e[0], e[1] * 4, 4), t;
        }
        occupancy_height() {
            return n.meshbuild_occupancy_height(this.__wbg_ptr) >>> 0;
        }
        occupancy_length() {
            return n.meshbuild_occupancy_length(this.__wbg_ptr) >>> 0;
        }
        occupancy_width() {
            return n.meshbuild_occupancy_width(this.__wbg_ptr) >>> 0;
        }
        sky_region() {
            const e = n.meshbuild_sky_region(this.__wbg_ptr);
            var t = U(e[0], e[1]).slice();
            return n.__wbindgen_free(e[0], e[1] * 4, 4), t;
        }
        take_colors(e) {
            const t = n.meshbuild_take_colors(this.__wbg_ptr, e);
            let r;
            return t[0] !== 0 && (r = u(t[0], t[1]).slice(), n.__wbindgen_free(t[0], t[1] * 4, 4)), r;
        }
        take_fog() {
            const e = n.meshbuild_take_fog(this.__wbg_ptr);
            let t;
            return e[0] !== 0 && (t = T(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
        }
        take_glow() {
            const e = n.meshbuild_take_glow(this.__wbg_ptr);
            var t = ie(e[0], e[1]).slice();
            return n.__wbindgen_free(e[0], e[1] * 2, 2), t;
        }
        take_highlights(e) {
            const t = n.meshbuild_take_highlights(this.__wbg_ptr, e);
            var r = u(t[0], t[1]).slice();
            return n.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        take_indices(e) {
            const t = n.meshbuild_take_indices(this.__wbg_ptr, e);
            var r = U(t[0], t[1]).slice();
            return n.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        take_normals(e) {
            const t = n.meshbuild_take_normals(this.__wbg_ptr, e);
            var r = u(t[0], t[1]).slice();
            return n.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        take_occupancy() {
            const e = n.meshbuild_take_occupancy(this.__wbg_ptr);
            var t = T(e[0], e[1]).slice();
            return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
        }
        take_positions(e) {
            const t = n.meshbuild_take_positions(this.__wbg_ptr, e);
            var r = u(t[0], t[1]).slice();
            return n.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        take_sky() {
            const e = n.meshbuild_take_sky(this.__wbg_ptr);
            var t = T(e[0], e[1]).slice();
            return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
        }
        take_surface_deform(e) {
            const t = n.meshbuild_take_surface_deform(this.__wbg_ptr, e);
            let r;
            return t[0] !== 0 && (r = u(t[0], t[1]).slice(), n.__wbindgen_free(t[0], t[1] * 4, 4)), r;
        }
        take_tile_heights(e) {
            const t = n.meshbuild_take_tile_heights(this.__wbg_ptr, e);
            var r = u(t[0], t[1]).slice();
            return n.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        voxel_count() {
            return n.meshbuild_voxel_count(this.__wbg_ptr) >>> 0;
        }
    };
    Symbol.dispose && (g.prototype[Symbol.dispose] = g.prototype.free);
    E = class {
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, B.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            n.__wbg_voxelmesher_free(e, 0);
        }
        build(e, t, r, s, l, o, c, a, m) {
            const f = S(e, n.__wbindgen_malloc), w = i, F = b(t, n.__wbindgen_malloc), M = i, W = n.voxelmesher_build(this.__wbg_ptr, f, w, F, M, r, s, l, o, c, a, m);
            return g.__wrap(W);
        }
        build_from_svo(e, t, r, s, l, o, c, a) {
            const m = b(e, n.__wbindgen_malloc), f = i, w = n.voxelmesher_build_from_svo(this.__wbg_ptr, m, f, t, r, s, l, o, c, a);
            return g.__wrap(w);
        }
        constructor(e, t, r, s, l, o, c, a, m){
            const f = S(e, n.__wbindgen_malloc), w = i, F = S(t, n.__wbindgen_malloc), M = i, W = b(r, n.__wbindgen_malloc), V = i, j = b(s, n.__wbindgen_malloc), G = i, X = b(l, n.__wbindgen_malloc), N = i, Y = b(o, n.__wbindgen_malloc), $ = i, q = le(c, n.__wbindgen_malloc), H = i, J = b(a, n.__wbindgen_malloc), K = i, P = b(m, n.__wbindgen_malloc), Q = i, Z = n.voxelmesher_new(f, w, F, M, W, V, j, G, X, N, Y, $, q, H, J, K, P, Q);
            return this.__wbg_ptr = Z, B.register(this, this.__wbg_ptr, this), this;
        }
    };
    Symbol.dispose && (E.prototype[Symbol.dispose] = E.prototype.free);
    function _e(_, e) {
        throw new Error(L(_, e));
    }
    function ne(_, e) {
        let t, r;
        try {
            t = _, r = e, console.error(L(_, e));
        } finally{
            n.__wbindgen_free(t, r, 1);
        }
    }
    function re() {
        return new Error;
    }
    function se(_, e) {
        const t = e.stack, r = ae(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = i;
        D().setInt32(_ + 4, s, !0), D().setInt32(_ + 0, r, !0);
    }
    function oe() {
        const _ = n.__wbindgen_externrefs, e = _.grow(4);
        _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, !0), _.set(e + 3, !1);
    }
    const z = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((_)=>n.__wbg_meshbuild_free(_, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((_)=>n.__wbg_svodecode_free(_, 1));
    const B = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((_)=>n.__wbg_voxelmesher_free(_, 1));
    function u(_, e) {
        return _ = _ >>> 0, C().subarray(_ / 4, _ / 4 + e);
    }
    function ie(_, e) {
        return _ = _ >>> 0, ce().subarray(_ / 2, _ / 2 + e);
    }
    function U(_, e) {
        return _ = _ >>> 0, I().subarray(_ / 4, _ / 4 + e);
    }
    function T(_, e) {
        return _ = _ >>> 0, h().subarray(_ / 1, _ / 1 + e);
    }
    let d = null;
    function D() {
        return (d === null || d.buffer.detached === !0 || d.buffer.detached === void 0 && d.buffer !== n.memory.buffer) && (d = new DataView(n.memory.buffer)), d;
    }
    let p = null;
    function C() {
        return (p === null || p.byteLength === 0) && (p = new Float32Array(n.memory.buffer)), p;
    }
    function L(_, e) {
        return ue(_ >>> 0, e);
    }
    let k = null;
    function ce() {
        return (k === null || k.byteLength === 0) && (k = new Uint16Array(n.memory.buffer)), k;
    }
    let v = null;
    function I() {
        return (v === null || v.byteLength === 0) && (v = new Uint32Array(n.memory.buffer)), v;
    }
    let x = null;
    function h() {
        return (x === null || x.byteLength === 0) && (x = new Uint8Array(n.memory.buffer)), x;
    }
    function S(_, e) {
        const t = e(_.length * 4, 4) >>> 0;
        return I().set(_, t / 4), i = _.length, t;
    }
    function b(_, e) {
        const t = e(_.length * 1, 1) >>> 0;
        return h().set(_, t / 1), i = _.length, t;
    }
    function le(_, e) {
        const t = e(_.length * 4, 4) >>> 0;
        return C().set(_, t / 4), i = _.length, t;
    }
    function ae(_, e, t) {
        if (t === void 0) {
            const c = y.encode(_), a = e(c.length, 1) >>> 0;
            return h().subarray(a, a + c.length).set(c), i = c.length, a;
        }
        let r = _.length, s = e(r, 1) >>> 0;
        const l = h();
        let o = 0;
        for(; o < r; o++){
            const c = _.charCodeAt(o);
            if (c > 127) break;
            l[s + o] = c;
        }
        if (o !== r) {
            o !== 0 && (_ = _.slice(o)), s = t(s, r, r = o + _.length * 3, 1) >>> 0;
            const c = h().subarray(s + o, s + r), a = y.encodeInto(_, c);
            o += a.written, s = t(s, r, o, 1) >>> 0;
        }
        return i = o, s;
    }
    let A = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    A.decode();
    const be = 2146435072;
    let R = 0;
    function ue(_, e) {
        return R += e, R >= be && (A = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), A.decode(), R = e), A.decode(h().subarray(_, _ + e));
    }
    const y = new TextEncoder;
    "encodeInto" in y || (y.encodeInto = function(_, e) {
        const t = y.encode(_);
        return e.set(t), {
            read: _.length,
            written: t.length
        };
    });
    let i = 0, n;
    function de(_) {
        n = _;
    }
    URL = globalThis.URL;
    const he = await te({
        "./voxel_mesher_bg.js": {
            __wbg_new_227d7c05414eb861: re,
            __wbg_stack_3b0d974bbf31e44f: se,
            __wbg_error_a6fa202b58aa1cd3: ne,
            __wbg___wbindgen_throw_1506f2235d1bdba0: _e,
            __wbindgen_init_externref_table: oe
        }
    }, ee), { memory: ge, __wbg_meshbuild_free: me, __wbg_svodecode_free: fe, __wbg_voxelmesher_free: we, decode_svo_wasm: ye, encode_svo_wasm: pe, meshbuild_bucket_count: ke, meshbuild_bucket_id: ve, meshbuild_glow_region: xe, meshbuild_occupancy_height: Ae, meshbuild_occupancy_length: Fe, meshbuild_occupancy_width: Me, meshbuild_sky_region: We, meshbuild_take_colors: Ue, meshbuild_take_fog: Te, meshbuild_take_glow: Se, meshbuild_take_highlights: Re, meshbuild_take_indices: Ee, meshbuild_take_normals: ze, meshbuild_take_occupancy: Be, meshbuild_take_positions: De, meshbuild_take_sky: Ce, meshbuild_take_surface_deform: Le, meshbuild_take_tile_heights: Ie, meshbuild_voxel_count: Oe, svodecode_take_positions: Ve, voxelmesher_build: je, voxelmesher_build_from_svo: Ge, voxelmesher_new: Xe, svodecode_take_colors: Ne, __wbindgen_free: Ye, __wbindgen_malloc: $e, __wbindgen_realloc: qe, __wbindgen_externrefs: He, __wbindgen_start: O } = he;
    var Je = Object.freeze({
        __proto__: null,
        __wbg_meshbuild_free: me,
        __wbg_svodecode_free: fe,
        __wbg_voxelmesher_free: we,
        __wbindgen_externrefs: He,
        __wbindgen_free: Ye,
        __wbindgen_malloc: $e,
        __wbindgen_realloc: qe,
        __wbindgen_start: O,
        decode_svo_wasm: ye,
        encode_svo_wasm: pe,
        memory: ge,
        meshbuild_bucket_count: ke,
        meshbuild_bucket_id: ve,
        meshbuild_glow_region: xe,
        meshbuild_occupancy_height: Ae,
        meshbuild_occupancy_length: Fe,
        meshbuild_occupancy_width: Me,
        meshbuild_sky_region: We,
        meshbuild_take_colors: Ue,
        meshbuild_take_fog: Te,
        meshbuild_take_glow: Se,
        meshbuild_take_highlights: Re,
        meshbuild_take_indices: Ee,
        meshbuild_take_normals: ze,
        meshbuild_take_occupancy: Be,
        meshbuild_take_positions: De,
        meshbuild_take_sky: Ce,
        meshbuild_take_surface_deform: Le,
        meshbuild_take_tile_heights: Ie,
        meshbuild_voxel_count: Oe,
        svodecode_take_colors: Ne,
        svodecode_take_positions: Ve,
        voxelmesher_build: je,
        voxelmesher_build_from_svo: Ge,
        voxelmesher_new: Xe
    });
    de(Je);
    O();
})();
export { g as MeshBuild, E as VoxelMesher, __tla };
