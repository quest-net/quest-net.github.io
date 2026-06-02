let h, M;
let __tla = (async ()=>{
    var Z = "/assets/voxel_mesher_bg-ce6FZj3H.wasm", $ = async (_ = {}, e)=>{
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
    h = class {
        static __wrap(e) {
            const t = Object.create(h.prototype);
            return t.__wbg_ptr = e, W.register(t, t.__wbg_ptr, t), t;
        }
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, W.unregister(this), e;
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
            var r = Q(t[0], t[1]).slice();
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
    Symbol.dispose && (h.prototype[Symbol.dispose] = h.prototype.free);
    M = class {
        __destroy_into_raw() {
            const e = this.__wbg_ptr;
            return this.__wbg_ptr = 0, T.unregister(this), e;
        }
        free() {
            const e = this.__destroy_into_raw();
            n.__wbg_voxelmesher_free(e, 0);
        }
        build(e, t, r, s, l, o) {
            const a = A(e, n.__wbindgen_malloc), c = i, v = u(t, n.__wbindgen_malloc), k = i, x = n.voxelmesher_build(this.__wbg_ptr, a, c, v, k, r, s, l, o);
            return h.__wrap(x);
        }
        build_from_svo(e, t, r, s, l) {
            const o = u(e, n.__wbindgen_malloc), a = i, c = n.voxelmesher_build_from_svo(this.__wbg_ptr, o, a, t, r, s, l);
            return h.__wrap(c);
        }
        constructor(e, t, r, s, l, o, a){
            const c = A(e, n.__wbindgen_malloc), v = i, k = A(t, n.__wbindgen_malloc), x = i, D = u(r, n.__wbindgen_malloc), C = i, L = u(s, n.__wbindgen_malloc), I = i, O = u(l, n.__wbindgen_malloc), V = i, j = u(o, n.__wbindgen_malloc), H = i, N = ee(a, n.__wbindgen_malloc), X = i, Y = n.voxelmesher_new(c, v, k, x, D, C, L, I, O, V, j, H, N, X);
            return this.__wbg_ptr = Y, T.register(this, this.__wbg_ptr, this), this;
        }
    };
    Symbol.dispose && (M.prototype[Symbol.dispose] = M.prototype.free);
    function q(_, e) {
        throw new Error(E(_, e));
    }
    function G(_, e) {
        let t, r;
        try {
            t = _, r = e, console.error(E(_, e));
        } finally{
            n.__wbindgen_free(t, r, 1);
        }
    }
    function J() {
        return new Error;
    }
    function K(_, e) {
        const t = e.stack, r = te(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = i;
        S().setInt32(_ + 4, s, !0), S().setInt32(_ + 0, r, !0);
    }
    function P() {
        const _ = n.__wbindgen_externrefs, e = _.grow(4);
        _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, !0), _.set(e + 3, !1);
    }
    const W = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((_)=>n.__wbg_meshbuild_free(_, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((_)=>n.__wbg_svodecode_free(_, 1));
    const T = typeof FinalizationRegistry > "u" ? {
        register: ()=>{},
        unregister: ()=>{}
    } : new FinalizationRegistry((_)=>n.__wbg_voxelmesher_free(_, 1));
    function b(_, e) {
        return _ = _ >>> 0, R().subarray(_ / 4, _ / 4 + e);
    }
    function Q(_, e) {
        return _ = _ >>> 0, z().subarray(_ / 4, _ / 4 + e);
    }
    function U(_, e) {
        return _ = _ >>> 0, f().subarray(_ / 1, _ / 1 + e);
    }
    let d = null;
    function S() {
        return (d === null || d.buffer.detached === !0 || d.buffer.detached === void 0 && d.buffer !== n.memory.buffer) && (d = new DataView(n.memory.buffer)), d;
    }
    let w = null;
    function R() {
        return (w === null || w.byteLength === 0) && (w = new Float32Array(n.memory.buffer)), w;
    }
    function E(_, e) {
        return ne(_ >>> 0, e);
    }
    let g = null;
    function z() {
        return (g === null || g.byteLength === 0) && (g = new Uint32Array(n.memory.buffer)), g;
    }
    let y = null;
    function f() {
        return (y === null || y.byteLength === 0) && (y = new Uint8Array(n.memory.buffer)), y;
    }
    function A(_, e) {
        const t = e(_.length * 4, 4) >>> 0;
        return z().set(_, t / 4), i = _.length, t;
    }
    function u(_, e) {
        const t = e(_.length * 1, 1) >>> 0;
        return f().set(_, t / 1), i = _.length, t;
    }
    function ee(_, e) {
        const t = e(_.length * 4, 4) >>> 0;
        return R().set(_, t / 4), i = _.length, t;
    }
    function te(_, e, t) {
        if (t === void 0) {
            const a = m.encode(_), c = e(a.length, 1) >>> 0;
            return f().subarray(c, c + a.length).set(a), i = a.length, c;
        }
        let r = _.length, s = e(r, 1) >>> 0;
        const l = f();
        let o = 0;
        for(; o < r; o++){
            const a = _.charCodeAt(o);
            if (a > 127) break;
            l[s + o] = a;
        }
        if (o !== r) {
            o !== 0 && (_ = _.slice(o)), s = t(s, r, r = o + _.length * 3, 1) >>> 0;
            const a = f().subarray(s + o, s + r), c = m.encodeInto(_, a);
            o += c.written, s = t(s, r, o, 1) >>> 0;
        }
        return i = o, s;
    }
    let p = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    });
    p.decode();
    const _e = 2146435072;
    let F = 0;
    function ne(_, e) {
        return F += e, F >= _e && (p = new TextDecoder("utf-8", {
            ignoreBOM: !0,
            fatal: !0
        }), p.decode(), F = e), p.decode(f().subarray(_, _ + e));
    }
    const m = new TextEncoder;
    "encodeInto" in m || (m.encodeInto = function(_, e) {
        const t = m.encode(_);
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
    const se = await $({
        "./voxel_mesher_bg.js": {
            __wbg_new_227d7c05414eb861: J,
            __wbg_stack_3b0d974bbf31e44f: K,
            __wbg_error_a6fa202b58aa1cd3: G,
            __wbg___wbindgen_throw_1506f2235d1bdba0: q,
            __wbindgen_init_externref_table: P
        }
    }, Z), { memory: oe, __wbg_meshbuild_free: ie, __wbg_svodecode_free: ae, __wbg_voxelmesher_free: le, decode_svo_wasm: ce, encode_svo_wasm: be, meshbuild_bucket_count: de, meshbuild_bucket_id: ue, meshbuild_take_colors: fe, meshbuild_take_fog: he, meshbuild_take_highlights: me, meshbuild_take_indices: we, meshbuild_take_normals: ge, meshbuild_take_occupancy: ye, meshbuild_take_positions: pe, meshbuild_take_surface_deform: ve, meshbuild_take_tile_heights: ke, meshbuild_voxel_count: xe, svodecode_take_positions: Ae, voxelmesher_build: Fe, voxelmesher_build_from_svo: Me, voxelmesher_new: We, svodecode_take_colors: Te, __wbindgen_free: Ue, __wbindgen_malloc: Se, __wbindgen_realloc: Re, __wbindgen_externrefs: Ee, __wbindgen_start: B } = se;
    var ze = Object.freeze({
        __proto__: null,
        __wbg_meshbuild_free: ie,
        __wbg_svodecode_free: ae,
        __wbg_voxelmesher_free: le,
        __wbindgen_externrefs: Ee,
        __wbindgen_free: Ue,
        __wbindgen_malloc: Se,
        __wbindgen_realloc: Re,
        __wbindgen_start: B,
        decode_svo_wasm: ce,
        encode_svo_wasm: be,
        memory: oe,
        meshbuild_bucket_count: de,
        meshbuild_bucket_id: ue,
        meshbuild_take_colors: fe,
        meshbuild_take_fog: he,
        meshbuild_take_highlights: me,
        meshbuild_take_indices: we,
        meshbuild_take_normals: ge,
        meshbuild_take_occupancy: ye,
        meshbuild_take_positions: pe,
        meshbuild_take_surface_deform: ve,
        meshbuild_take_tile_heights: ke,
        meshbuild_voxel_count: xe,
        svodecode_take_colors: Te,
        svodecode_take_positions: Ae,
        voxelmesher_build: Fe,
        voxelmesher_build_from_svo: Me,
        voxelmesher_new: We
    });
    re(ze);
    B();
})();
export { h as MeshBuild, M as VoxelMesher, __tla };
