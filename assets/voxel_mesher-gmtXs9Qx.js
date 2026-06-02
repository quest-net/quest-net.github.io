let w, m, T, je, Oe;
let __tla = (async () => {
  const q = "/assets/voxel_mesher_bg-ce6FZj3H.wasm", G = async (n = {}, e) => {
    let t;
    if (e.startsWith("data:")) {
      const r = e.replace(/^data:.*?base64,/, "");
      let o;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const a = atob(r);
        o = new Uint8Array(a.length);
        for (let s = 0; s < a.length; s++) o[s] = a.charCodeAt(s);
      } else throw new Error("Cannot decode base64-encoded data URL");
      t = await WebAssembly.instantiate(o, n);
    } else {
      const r = await fetch(e), o = r.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) t = await WebAssembly.instantiateStreaming(r, n);
      else {
        const a = await r.arrayBuffer();
        t = await WebAssembly.instantiate(a, n);
      }
    }
    return t.instance.exports;
  };
  w = class {
    static __wrap(e) {
      const t = Object.create(w.prototype);
      return t.__wbg_ptr = e, W.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, W.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      _.__wbg_meshbuild_free(e, 0);
    }
    bucket_count() {
      return _.meshbuild_bucket_count(this.__wbg_ptr) >>> 0;
    }
    bucket_id(e) {
      return _.meshbuild_bucket_id(this.__wbg_ptr, e) >>> 0;
    }
    take_colors(e) {
      const t = _.meshbuild_take_colors(this.__wbg_ptr, e);
      let r;
      return t[0] !== 0 && (r = b(t[0], t[1]).slice(), _.__wbindgen_free(t[0], t[1] * 4, 4)), r;
    }
    take_fog() {
      const e = _.meshbuild_take_fog(this.__wbg_ptr);
      let t;
      return e[0] !== 0 && (t = x(e[0], e[1]).slice(), _.__wbindgen_free(e[0], e[1] * 1, 1)), t;
    }
    take_highlights(e) {
      const t = _.meshbuild_take_highlights(this.__wbg_ptr, e);
      var r = b(t[0], t[1]).slice();
      return _.__wbindgen_free(t[0], t[1] * 4, 4), r;
    }
    take_indices(e) {
      const t = _.meshbuild_take_indices(this.__wbg_ptr, e);
      var r = D(t[0], t[1]).slice();
      return _.__wbindgen_free(t[0], t[1] * 4, 4), r;
    }
    take_normals(e) {
      const t = _.meshbuild_take_normals(this.__wbg_ptr, e);
      var r = b(t[0], t[1]).slice();
      return _.__wbindgen_free(t[0], t[1] * 4, 4), r;
    }
    take_occupancy() {
      const e = _.meshbuild_take_occupancy(this.__wbg_ptr);
      var t = x(e[0], e[1]).slice();
      return _.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    take_positions(e) {
      const t = _.meshbuild_take_positions(this.__wbg_ptr, e);
      var r = b(t[0], t[1]).slice();
      return _.__wbindgen_free(t[0], t[1] * 4, 4), r;
    }
    take_surface_deform(e) {
      const t = _.meshbuild_take_surface_deform(this.__wbg_ptr, e);
      let r;
      return t[0] !== 0 && (r = b(t[0], t[1]).slice(), _.__wbindgen_free(t[0], t[1] * 4, 4)), r;
    }
    take_tile_heights(e) {
      const t = _.meshbuild_take_tile_heights(this.__wbg_ptr, e);
      var r = b(t[0], t[1]).slice();
      return _.__wbindgen_free(t[0], t[1] * 4, 4), r;
    }
    voxel_count() {
      return _.meshbuild_voxel_count(this.__wbg_ptr) >>> 0;
    }
  };
  Symbol.dispose && (w.prototype[Symbol.dispose] = w.prototype.free);
  m = class {
    static __wrap(e) {
      const t = Object.create(m.prototype);
      return t.__wbg_ptr = e, U.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, U.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      _.__wbg_svodecode_free(e, 0);
    }
    take_colors() {
      const e = _.svodecode_take_colors(this.__wbg_ptr);
      var t = x(e[0], e[1]).slice();
      return _.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    take_positions() {
      const e = _.svodecode_take_positions(this.__wbg_ptr);
      var t = D(e[0], e[1]).slice();
      return _.__wbindgen_free(e[0], e[1] * 4, 4), t;
    }
  };
  Symbol.dispose && (m.prototype[Symbol.dispose] = m.prototype.free);
  T = class {
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, R.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      _.__wbg_voxelmesher_free(e, 0);
    }
    build(e, t, r, o, a, s) {
      const c = v(e, _.__wbindgen_malloc), l = i, A = d(t, _.__wbindgen_malloc), F = i, M = _.voxelmesher_build(this.__wbg_ptr, c, l, A, F, r, o, a, s);
      return w.__wrap(M);
    }
    build_from_svo(e, t, r, o, a) {
      const s = d(e, _.__wbindgen_malloc), c = i, l = _.voxelmesher_build_from_svo(this.__wbg_ptr, s, c, t, r, o, a);
      return w.__wrap(l);
    }
    constructor(e, t, r, o, a, s, c) {
      const l = v(e, _.__wbindgen_malloc), A = i, F = v(t, _.__wbindgen_malloc), M = i, C = d(r, _.__wbindgen_malloc), L = i, I = d(o, _.__wbindgen_malloc), V = i, $ = d(a, _.__wbindgen_malloc), H = i, N = d(s, _.__wbindgen_malloc), P = i, X = ne(c, _.__wbindgen_malloc), Y = i, Z = _.voxelmesher_new(l, A, F, M, C, L, I, V, $, H, N, P, X, Y);
      return this.__wbg_ptr = Z, R.register(this, this.__wbg_ptr, this), this;
    }
  };
  Symbol.dispose && (T.prototype[Symbol.dispose] = T.prototype.free);
  je = function(n) {
    const e = d(n, _.__wbindgen_malloc), t = i, r = _.decode_svo_wasm(e, t);
    return m.__wrap(r);
  };
  Oe = function(n, e) {
    const t = v(n, _.__wbindgen_malloc), r = i, o = d(e, _.__wbindgen_malloc), a = i, s = _.encode_svo_wasm(t, r, o, a);
    var c = x(s[0], s[1]).slice();
    return _.__wbindgen_free(s[0], s[1] * 1, 1), c;
  };
  function J(n, e) {
    throw new Error(B(n, e));
  }
  function K(n, e) {
    let t, r;
    try {
      t = n, r = e, console.error(B(n, e));
    } finally {
      _.__wbindgen_free(t, r, 1);
    }
  }
  function Q() {
    return new Error();
  }
  function ee(n, e) {
    const t = e.stack, r = _e(t, _.__wbindgen_malloc, _.__wbindgen_realloc), o = i;
    z().setInt32(n + 4, o, true), z().setInt32(n + 0, r, true);
  }
  function te() {
    const n = _.__wbindgen_externrefs, e = n.grow(4);
    n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, true), n.set(e + 3, false);
  }
  const W = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => _.__wbg_meshbuild_free(n, 1)), U = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => _.__wbg_svodecode_free(n, 1)), R = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => _.__wbg_voxelmesher_free(n, 1));
  function b(n, e) {
    return n = n >>> 0, E().subarray(n / 4, n / 4 + e);
  }
  function D(n, e) {
    return n = n >>> 0, j().subarray(n / 4, n / 4 + e);
  }
  function x(n, e) {
    return n = n >>> 0, f().subarray(n / 1, n / 1 + e);
  }
  let u = null;
  function z() {
    return (u === null || u.buffer.detached === true || u.buffer.detached === void 0 && u.buffer !== _.memory.buffer) && (u = new DataView(_.memory.buffer)), u;
  }
  let h = null;
  function E() {
    return (h === null || h.byteLength === 0) && (h = new Float32Array(_.memory.buffer)), h;
  }
  function B(n, e) {
    return se(n >>> 0, e);
  }
  let p = null;
  function j() {
    return (p === null || p.byteLength === 0) && (p = new Uint32Array(_.memory.buffer)), p;
  }
  let y = null;
  function f() {
    return (y === null || y.byteLength === 0) && (y = new Uint8Array(_.memory.buffer)), y;
  }
  function v(n, e) {
    const t = e(n.length * 4, 4) >>> 0;
    return j().set(n, t / 4), i = n.length, t;
  }
  function d(n, e) {
    const t = e(n.length * 1, 1) >>> 0;
    return f().set(n, t / 1), i = n.length, t;
  }
  function ne(n, e) {
    const t = e(n.length * 4, 4) >>> 0;
    return E().set(n, t / 4), i = n.length, t;
  }
  function _e(n, e, t) {
    if (t === void 0) {
      const c = g.encode(n), l = e(c.length, 1) >>> 0;
      return f().subarray(l, l + c.length).set(c), i = c.length, l;
    }
    let r = n.length, o = e(r, 1) >>> 0;
    const a = f();
    let s = 0;
    for (; s < r; s++) {
      const c = n.charCodeAt(s);
      if (c > 127) break;
      a[o + s] = c;
    }
    if (s !== r) {
      s !== 0 && (n = n.slice(s)), o = t(o, r, r = s + n.length * 3, 1) >>> 0;
      const c = f().subarray(o + s, o + r), l = g.encodeInto(n, c);
      s += l.written, o = t(o, r, s, 1) >>> 0;
    }
    return i = s, o;
  }
  let k = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  k.decode();
  const re = 2146435072;
  let S = 0;
  function se(n, e) {
    return S += e, S >= re && (k = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), k.decode(), S = e), k.decode(f().subarray(n, n + e));
  }
  const g = new TextEncoder();
  "encodeInto" in g || (g.encodeInto = function(n, e) {
    const t = g.encode(n);
    return e.set(t), {
      read: n.length,
      written: t.length
    };
  });
  let i = 0, _;
  function oe(n) {
    _ = n;
  }
  URL = globalThis.URL;
  const ie = await G({
    "./voxel_mesher_bg.js": {
      __wbg_new_227d7c05414eb861: Q,
      __wbg_stack_3b0d974bbf31e44f: ee,
      __wbg_error_a6fa202b58aa1cd3: K,
      __wbg___wbindgen_throw_1506f2235d1bdba0: J,
      __wbindgen_init_externref_table: te
    }
  }, q), { memory: ce, __wbg_meshbuild_free: ae, __wbg_svodecode_free: le, __wbg_voxelmesher_free: de, decode_svo_wasm: be, encode_svo_wasm: ue, meshbuild_bucket_count: fe, meshbuild_bucket_id: we, meshbuild_take_colors: ge, meshbuild_take_fog: me, meshbuild_take_highlights: he, meshbuild_take_indices: pe, meshbuild_take_normals: ye, meshbuild_take_occupancy: ve, meshbuild_take_positions: ke, meshbuild_take_surface_deform: xe, meshbuild_take_tile_heights: Ae, meshbuild_voxel_count: Fe, svodecode_take_positions: Me, voxelmesher_build: Se, voxelmesher_build_from_svo: Te, voxelmesher_new: We, svodecode_take_colors: Ue, __wbindgen_free: Re, __wbindgen_malloc: ze, __wbindgen_realloc: De, __wbindgen_externrefs: Ee, __wbindgen_start: O } = ie, Be = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_meshbuild_free: ae,
    __wbg_svodecode_free: le,
    __wbg_voxelmesher_free: de,
    __wbindgen_externrefs: Ee,
    __wbindgen_free: Re,
    __wbindgen_malloc: ze,
    __wbindgen_realloc: De,
    __wbindgen_start: O,
    decode_svo_wasm: be,
    encode_svo_wasm: ue,
    memory: ce,
    meshbuild_bucket_count: fe,
    meshbuild_bucket_id: we,
    meshbuild_take_colors: ge,
    meshbuild_take_fog: me,
    meshbuild_take_highlights: he,
    meshbuild_take_indices: pe,
    meshbuild_take_normals: ye,
    meshbuild_take_occupancy: ve,
    meshbuild_take_positions: ke,
    meshbuild_take_surface_deform: xe,
    meshbuild_take_tile_heights: Ae,
    meshbuild_voxel_count: Fe,
    svodecode_take_colors: Ue,
    svodecode_take_positions: Me,
    voxelmesher_build: Se,
    voxelmesher_build_from_svo: Te,
    voxelmesher_new: We
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  oe(Be);
  O();
})();
export {
  w as MeshBuild,
  m as SvoDecode,
  T as VoxelMesher,
  __tla,
  je as decode_svo_wasm,
  Oe as encode_svo_wasm
};
