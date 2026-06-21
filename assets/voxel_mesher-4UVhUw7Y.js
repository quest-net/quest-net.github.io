let w, m, W, Le, Ie;
let __tla = (async () => {
  const H = "/assets/voxel_mesher_bg-BCkxX9Sk.wasm", J = async (n = {}, e) => {
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
      return t.__wbg_ptr = e, U.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, U.unregister(this), e;
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
    occupancy_height() {
      return _.meshbuild_occupancy_height(this.__wbg_ptr) >>> 0;
    }
    occupancy_length() {
      return _.meshbuild_occupancy_length(this.__wbg_ptr) >>> 0;
    }
    occupancy_width() {
      return _.meshbuild_occupancy_width(this.__wbg_ptr) >>> 0;
    }
    take_colors(e) {
      const t = _.meshbuild_take_colors(this.__wbg_ptr, e);
      let r;
      return t[0] !== 0 && (r = b(t[0], t[1]).slice(), _.__wbindgen_free(t[0], t[1] * 4, 4)), r;
    }
    take_fog() {
      const e = _.meshbuild_take_fog(this.__wbg_ptr);
      let t;
      return e[0] !== 0 && (t = A(e[0], e[1]).slice(), _.__wbindgen_free(e[0], e[1] * 1, 1)), t;
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
      var t = A(e[0], e[1]).slice();
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
      return t.__wbg_ptr = e, R.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, R.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      _.__wbg_svodecode_free(e, 0);
    }
    take_colors() {
      const e = _.svodecode_take_colors(this.__wbg_ptr);
      var t = A(e[0], e[1]).slice();
      return _.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    take_positions() {
      const e = _.svodecode_take_positions(this.__wbg_ptr);
      var t = D(e[0], e[1]).slice();
      return _.__wbindgen_free(e[0], e[1] * 4, 4), t;
    }
  };
  Symbol.dispose && (m.prototype[Symbol.dispose] = m.prototype.free);
  W = class {
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, z.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      _.__wbg_voxelmesher_free(e, 0);
    }
    build(e, t, r, o, a, s, c) {
      const l = k(e, _.__wbindgen_malloc), g = i, F = d(t, _.__wbindgen_malloc), S = i, M = _.voxelmesher_build(this.__wbg_ptr, l, g, F, S, r, o, a, s, c);
      return w.__wrap(M);
    }
    build_from_svo(e, t, r, o, a, s) {
      const c = d(e, _.__wbindgen_malloc), l = i, g = _.voxelmesher_build_from_svo(this.__wbg_ptr, c, l, t, r, o, a, s);
      return w.__wrap(g);
    }
    constructor(e, t, r, o, a, s, c) {
      const l = k(e, _.__wbindgen_malloc), g = i, F = k(t, _.__wbindgen_malloc), S = i, M = d(r, _.__wbindgen_malloc), L = i, I = d(o, _.__wbindgen_malloc), V = i, $ = d(a, _.__wbindgen_malloc), X = i, N = d(s, _.__wbindgen_malloc), P = i, Y = ne(c, _.__wbindgen_malloc), q = i, G = _.voxelmesher_new(l, g, F, S, M, L, I, V, $, X, N, P, Y, q);
      return this.__wbg_ptr = G, z.register(this, this.__wbg_ptr, this), this;
    }
  };
  Symbol.dispose && (W.prototype[Symbol.dispose] = W.prototype.free);
  Le = function(n) {
    const e = d(n, _.__wbindgen_malloc), t = i, r = _.decode_svo_wasm(e, t);
    return m.__wrap(r);
  };
  Ie = function(n, e) {
    const t = k(n, _.__wbindgen_malloc), r = i, o = d(e, _.__wbindgen_malloc), a = i, s = _.encode_svo_wasm(t, r, o, a);
    var c = A(s[0], s[1]).slice();
    return _.__wbindgen_free(s[0], s[1] * 1, 1), c;
  };
  function K(n, e) {
    throw new Error(C(n, e));
  }
  function Q(n, e) {
    let t, r;
    try {
      t = n, r = e, console.error(C(n, e));
    } finally {
      _.__wbindgen_free(t, r, 1);
    }
  }
  function Z() {
    return new Error();
  }
  function ee(n, e) {
    const t = e.stack, r = _e(t, _.__wbindgen_malloc, _.__wbindgen_realloc), o = i;
    B().setInt32(n + 4, o, true), B().setInt32(n + 0, r, true);
  }
  function te() {
    const n = _.__wbindgen_externrefs, e = n.grow(4);
    n.set(0, void 0), n.set(e + 0, void 0), n.set(e + 1, null), n.set(e + 2, true), n.set(e + 3, false);
  }
  const U = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => _.__wbg_meshbuild_free(n, 1)), R = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => _.__wbg_svodecode_free(n, 1)), z = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((n) => _.__wbg_voxelmesher_free(n, 1));
  function b(n, e) {
    return n = n >>> 0, E().subarray(n / 4, n / 4 + e);
  }
  function D(n, e) {
    return n = n >>> 0, O().subarray(n / 4, n / 4 + e);
  }
  function A(n, e) {
    return n = n >>> 0, f().subarray(n / 1, n / 1 + e);
  }
  let u = null;
  function B() {
    return (u === null || u.buffer.detached === true || u.buffer.detached === void 0 && u.buffer !== _.memory.buffer) && (u = new DataView(_.memory.buffer)), u;
  }
  let p = null;
  function E() {
    return (p === null || p.byteLength === 0) && (p = new Float32Array(_.memory.buffer)), p;
  }
  function C(n, e) {
    return se(n >>> 0, e);
  }
  let y = null;
  function O() {
    return (y === null || y.byteLength === 0) && (y = new Uint32Array(_.memory.buffer)), y;
  }
  let v = null;
  function f() {
    return (v === null || v.byteLength === 0) && (v = new Uint8Array(_.memory.buffer)), v;
  }
  function k(n, e) {
    const t = e(n.length * 4, 4) >>> 0;
    return O().set(n, t / 4), i = n.length, t;
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
      const c = h.encode(n), l = e(c.length, 1) >>> 0;
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
      const c = f().subarray(o + s, o + r), l = h.encodeInto(n, c);
      s += l.written, o = t(o, r, s, 1) >>> 0;
    }
    return i = s, o;
  }
  let x = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  x.decode();
  const re = 2146435072;
  let T = 0;
  function se(n, e) {
    return T += e, T >= re && (x = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), x.decode(), T = e), x.decode(f().subarray(n, n + e));
  }
  const h = new TextEncoder();
  "encodeInto" in h || (h.encodeInto = function(n, e) {
    const t = h.encode(n);
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
  const ie = await J({
    "./voxel_mesher_bg.js": {
      __wbg_new_227d7c05414eb861: Z,
      __wbg_stack_3b0d974bbf31e44f: ee,
      __wbg_error_a6fa202b58aa1cd3: Q,
      __wbg___wbindgen_throw_1506f2235d1bdba0: K,
      __wbindgen_init_externref_table: te
    }
  }, H), { memory: ce, __wbg_meshbuild_free: ae, __wbg_svodecode_free: le, __wbg_voxelmesher_free: de, decode_svo_wasm: be, encode_svo_wasm: ue, meshbuild_bucket_count: fe, meshbuild_bucket_id: we, meshbuild_occupancy_height: ge, meshbuild_occupancy_length: he, meshbuild_occupancy_width: me, meshbuild_take_colors: pe, meshbuild_take_fog: ye, meshbuild_take_highlights: ve, meshbuild_take_indices: ke, meshbuild_take_normals: xe, meshbuild_take_occupancy: Ae, meshbuild_take_positions: Fe, meshbuild_take_surface_deform: Se, meshbuild_take_tile_heights: Me, meshbuild_voxel_count: Te, svodecode_take_positions: We, voxelmesher_build: Ue, voxelmesher_build_from_svo: Re, voxelmesher_new: ze, svodecode_take_colors: Be, __wbindgen_free: De, __wbindgen_malloc: Ee, __wbindgen_realloc: Ce, __wbindgen_externrefs: Oe, __wbindgen_start: j } = ie, je = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_meshbuild_free: ae,
    __wbg_svodecode_free: le,
    __wbg_voxelmesher_free: de,
    __wbindgen_externrefs: Oe,
    __wbindgen_free: De,
    __wbindgen_malloc: Ee,
    __wbindgen_realloc: Ce,
    __wbindgen_start: j,
    decode_svo_wasm: be,
    encode_svo_wasm: ue,
    memory: ce,
    meshbuild_bucket_count: fe,
    meshbuild_bucket_id: we,
    meshbuild_occupancy_height: ge,
    meshbuild_occupancy_length: he,
    meshbuild_occupancy_width: me,
    meshbuild_take_colors: pe,
    meshbuild_take_fog: ye,
    meshbuild_take_highlights: ve,
    meshbuild_take_indices: ke,
    meshbuild_take_normals: xe,
    meshbuild_take_occupancy: Ae,
    meshbuild_take_positions: Fe,
    meshbuild_take_surface_deform: Se,
    meshbuild_take_tile_heights: Me,
    meshbuild_voxel_count: Te,
    svodecode_take_colors: Be,
    svodecode_take_positions: We,
    voxelmesher_build: Ue,
    voxelmesher_build_from_svo: Re,
    voxelmesher_new: ze
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  oe(je);
  j();
})();
export {
  w as MeshBuild,
  m as SvoDecode,
  W as VoxelMesher,
  __tla,
  Le as decode_svo_wasm,
  Ie as encode_svo_wasm
};
