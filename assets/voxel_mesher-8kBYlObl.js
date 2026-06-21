let f, W;
let __tla = (async ()=>{
    var q = "/assets/voxel_mesher_bg-BCkxX9Sk.wasm", G = async (_ = {}, e)=>{
        let t;
        if (e.startsWith("data:")) {
            const r = e.replace(/^data:.*?base64,/, "");
            let s;
            if (typeof Buffer == "function" && typeof Buffer.from == "function") s = Buffer.from(r, "base64");
            else if (typeof atob == "function") {
                const a = atob(r);
                s = new Uint8Array(a.length);
                for(let o = 0; o < a.length; o++)s[o] = a.charCodeAt(o);
            } else throw new Error("Cannot decode base64-encoded data URL");
            t = await WebAssembly.instantiate(s, _);
        } else {
            const r = await fetch(e), s = r.headers.get("Content-Type") || "";
            if ("instantiateStreaming" in WebAssembly && s.startsWith("application/wasm")) t = await WebAssembly.instantiateStreaming(r, _);
            else {
                const a = await r.arrayBuffer();
                t = await WebAssembly.instantiate(a, _);
            }
        }
        return t.instance.exports;
    };
    f = class {
        static __wrap(e) {
            const t = Object.create(f.prototype);
            return t.__wbg_ptr = e, T.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, T.unregister(this), e;
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
        occupancy_height() {
            return n.meshbuild_occupancy_height(this.__wbg_ptr) >>> 0;
        }
        occupancy_length() {
            return n.meshbuild_occupancy_length(this.__wbg_ptr) >>> 0;
        }
        occupancy_width() {
            return n.meshbuild_occupancy_width(this.__wbg_ptr) >>> 0;
        }
        take_colors(e) {
            const t = n.meshbuild_take_colors(this.__wbg_ptr, e);
            let r;
            return t[0] !== 0 && (r = b(t[0], t[1]).slice(), n.__wbindgen_free(t[0], t[1] * 4, 4)), r;
        }
        take_fog() {
            const e = n.meshbuild_take_fog(this.__wbg_ptr);
            let t;
            return e[0] !== 0 && (t = U(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
        }
        take_highlights(e) {
            const t = n.meshbuild_take_highlights(this.__wbg_ptr, e);
            var r = b(t[0], t[1]).slice();
            return n.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        take_indices(e) {
            const t = n.meshbuild_take_indices(this.__wbg_ptr, e);
            var r = Z(t[0], t[1]).slice();
            return n.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        take_normals(e) {
            const t = n.meshbuild_take_normals(this.__wbg_ptr, e);
            var r = b(t[0], t[1]).slice();
            return n.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        take_occupancy() {
            const e = n.meshbuild_take_occupancy(this.__wbg_ptr);
            var t = U(e[0], e[1]).slice();
            return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
        }
        take_positions(e) {
            const t = n.meshbuild_take_positions(this.__wbg_ptr, e);
            var r = b(t[0], t[1]).slice();
            return n.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        take_surface_deform(e) {
            const t = n.meshbuild_take_surface_deform(this.__wbg_ptr, e);
            let r;
            return t[0] !== 0 && (r = b(t[0], t[1]).slice(), n.__wbindgen_free(t[0], t[1] * 4, 4)), r;
        }
        take_tile_heights(e) {
            const t = n.meshbuild_take_tile_heights(this.__wbg_ptr, e);
            var r = b(t[0], t[1]).slice();
            return n.__wbindgen_free(t[0], t[1] * 4, 4), r;
        }
        voxel_count() {
            return n.meshbuild_voxel_count(this.__wbg_ptr) >>> 0;
        }
    };
    Symbol.dispose && (f.prototype[Symbol.dispose] = f.prototype.free);
    W = class {
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, S.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            n.__wbg_voxelmesher_free(e, 0);
        }
        build(e, t, r, s, a, o, c) {
            const l = F(e, n.__wbindgen_malloc), m = i, k = u(t, n.__wbindgen_malloc), x = i, A = n.voxelmesher_build(this.__wbg_ptr, l, m, k, x, r, s, a, o, c);
            return f.__wrap(A);
        }
        build_from_svo(e, t, r, s, a, o) {
            const c = u(e, n.__wbindgen_malloc), l = i, m = n.voxelmesher_build_from_svo(this.__wbg_ptr, c, l, t, r, s, a, o);
            return f.__wrap(m);
        }
        constructor(e, t, r, s, a, o, c){
            const l = F(e, n.__wbindgen_malloc), m = i, k = F(t, n.__wbindgen_malloc), x = i, A = u(r, n.__wbindgen_malloc), C = i, L = u(s, n.__wbindgen_malloc), I = i, O = u(a, n.__wbindgen_malloc), V = i, j = u(o, n.__wbindgen_malloc), X = i, N = ee(c, n.__wbindgen_malloc), Y = i, $ = n.voxelmesher_new(l, m, k, x, A, C, L, I, O, V, j, X, N, Y);
            return this.__wbg_ptr = $, S.register(this, this.__wbg_ptr, this), this;
        }
    };
    Symbol.dispose && (W.prototype[Symbol.dispose] = W.prototype.free);
    function H(_, e) {
        throw new Error(E(_, e));
    }
    function J(_, e) {
        let t, r;
        try {
            t = _, r = e, console.error(E(_, e));
        } finally{
            n.__wbindgen_free(t, r, 1);
        }
    }
    function K() {
        return new Error;
    }
    function P(_, e) {
        const t = e.stack, r = te(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = i;
        R().setInt32(_ + 4, s, !0), R().setInt32(_ + 0, r, !0);
    }
    function Q() {
        const _ = n.__wbindgen_externrefs, e = _.grow(4);
        _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, !0), _.set(e + 3, !1);
    }
    const T = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((_)=>n.__wbg_meshbuild_free(_, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((_)=>n.__wbg_svodecode_free(_, 1));
    const S = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((_)=>n.__wbg_voxelmesher_free(_, 1));
    function b(_, e) {
        return _ = _ >>> 0, B().subarray(_ / 4, _ / 4 + e);
    }
    function Z(_, e) {
        return _ = _ >>> 0, z().subarray(_ / 4, _ / 4 + e);
    }
    function U(_, e) {
        return _ = _ >>> 0, h().subarray(_ / 1, _ / 1 + e);
    }
    let d = null;
    function R() {
        return (d === null || d.buffer.detached === !0 || d.buffer.detached === void 0 && d.buffer !== n.memory.buffer) && (d = new DataView(n.memory.buffer)), d;
    }
    let w = null;
    function B() {
        return (w === null || w.byteLength === 0) && (w = new Float32Array(n.memory.buffer)), w;
    }
    function E(_, e) {
        return ne(_ >>> 0, e);
    }
    let y = null;
    function z() {
        return (y === null || y.byteLength === 0) && (y = new Uint32Array(n.memory.buffer)), y;
    }
    let p = null;
    function h() {
        return (p === null || p.byteLength === 0) && (p = new Uint8Array(n.memory.buffer)), p;
    }
    function F(_, e) {
        const t = e(_.length * 4, 4) >>> 0;
        return z().set(_, t / 4), i = _.length, t;
    }
    function u(_, e) {
        const t = e(_.length * 1, 1) >>> 0;
        return h().set(_, t / 1), i = _.length, t;
    }
    function ee(_, e) {
        const t = e(_.length * 4, 4) >>> 0;
        return B().set(_, t / 4), i = _.length, t;
    }
    function te(_, e, t) {
        if (t === void 0) {
            const c = g.encode(_), l = e(c.length, 1) >>> 0;
            return h().subarray(l, l + c.length).set(c), i = c.length, l;
        }
        let r = _.length, s = e(r, 1) >>> 0;
        const a = h();
        let o = 0;
        for(; o < r; o++){
            const c = _.charCodeAt(o);
            if (c > 127) break;
            a[s + o] = c;
        }
        if (o !== r) {
            o !== 0 && (_ = _.slice(o)), s = t(s, r, r = o + _.length * 3, 1) >>> 0;
            const c = h().subarray(s + o, s + r), l = g.encodeInto(_, c);
            o += l.written, s = t(s, r, o, 1) >>> 0;
        }
        return i = o, s;
    }
    let v = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    v.decode();
    const _e = 2146435072;
    let M = 0;
    function ne(_, e) {
        return M += e, M >= _e && (v = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), v.decode(), M = e), v.decode(h().subarray(_, _ + e));
    }
    const g = new TextEncoder;
    "encodeInto" in g || (g.encodeInto = function(_, e) {
        const t = g.encode(_);
        return e.set(t), {
            read: _.length,
            written: t.length
        };
    });
    let i = 0, n;
    function re(_) {
        n = _;
    }
    URL = globalThis.URL;
    const se = await G({
        "./voxel_mesher_bg.js": {
            __wbg_new_227d7c05414eb861: K,
            __wbg_stack_3b0d974bbf31e44f: P,
            __wbg_error_a6fa202b58aa1cd3: J,
            __wbg___wbindgen_throw_1506f2235d1bdba0: H,
            __wbindgen_init_externref_table: Q
        }
    }, q), { memory: oe, __wbg_meshbuild_free: ie, __wbg_svodecode_free: ce, __wbg_voxelmesher_free: ae, decode_svo_wasm: le, encode_svo_wasm: be, meshbuild_bucket_count: de, meshbuild_bucket_id: ue, meshbuild_occupancy_height: he, meshbuild_occupancy_length: fe, meshbuild_occupancy_width: me, meshbuild_take_colors: ge, meshbuild_take_fog: we, meshbuild_take_highlights: ye, meshbuild_take_indices: pe, meshbuild_take_normals: ve, meshbuild_take_occupancy: ke, meshbuild_take_positions: xe, meshbuild_take_surface_deform: Ae, meshbuild_take_tile_heights: Fe, meshbuild_voxel_count: Me, svodecode_take_positions: We, voxelmesher_build: Te, voxelmesher_build_from_svo: Se, voxelmesher_new: Ue, svodecode_take_colors: Re, __wbindgen_free: Be, __wbindgen_malloc: Ee, __wbindgen_realloc: ze, __wbindgen_externrefs: De, __wbindgen_start: D } = se;
    var Ce = Object.freeze({
        __proto__: null,
        __wbg_meshbuild_free: ie,
        __wbg_svodecode_free: ce,
        __wbg_voxelmesher_free: ae,
        __wbindgen_externrefs: De,
        __wbindgen_free: Be,
        __wbindgen_malloc: Ee,
        __wbindgen_realloc: ze,
        __wbindgen_start: D,
        decode_svo_wasm: le,
        encode_svo_wasm: be,
        memory: oe,
        meshbuild_bucket_count: de,
        meshbuild_bucket_id: ue,
        meshbuild_occupancy_height: he,
        meshbuild_occupancy_length: fe,
        meshbuild_occupancy_width: me,
        meshbuild_take_colors: ge,
        meshbuild_take_fog: we,
        meshbuild_take_highlights: ye,
        meshbuild_take_indices: pe,
        meshbuild_take_normals: ve,
        meshbuild_take_occupancy: ke,
        meshbuild_take_positions: xe,
        meshbuild_take_surface_deform: Ae,
        meshbuild_take_tile_heights: Fe,
        meshbuild_voxel_count: Me,
        svodecode_take_colors: Re,
        svodecode_take_positions: We,
        voxelmesher_build: Te,
        voxelmesher_build_from_svo: Se,
        voxelmesher_new: Ue
    });
    re(Ce);
    D();
})();
export { f as MeshBuild, W as VoxelMesher, __tla };
