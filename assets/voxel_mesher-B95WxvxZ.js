let w, v, D, Qe, Ze;
let __tla = (async () => {
  const _e = "/assets/voxel_mesher_bg-CGXW4aGl.wasm", ne = async (_ = {}, e) => {
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
      t = await WebAssembly.instantiate(o, _);
    } else {
      const r = await fetch(e), o = r.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) t = await WebAssembly.instantiateStreaming(r, _);
      else {
        const a = await r.arrayBuffer();
        t = await WebAssembly.instantiate(a, _);
      }
    }
    return t.instance.exports;
  };
  w = class {
    static __wrap(e) {
      const t = Object.create(w.prototype);
      return t.__wbg_ptr = e, E.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, E.unregister(this), e;
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
      var t = M(e[0], e[1]).slice();
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
      var t = M(e[0], e[1]).slice();
      return n.__wbindgen_free(e[0], e[1] * 4, 4), t;
    }
    take_colors(e) {
      const t = n.meshbuild_take_colors(this.__wbg_ptr, e);
      let r;
      return t[0] !== 0 && (r = d(t[0], t[1]).slice(), n.__wbindgen_free(t[0], t[1] * 4, 4)), r;
    }
    take_fog() {
      const e = n.meshbuild_take_fog(this.__wbg_ptr);
      let t;
      return e[0] !== 0 && (t = y(e[0], e[1]).slice(), n.__wbindgen_free(e[0], e[1] * 1, 1)), t;
    }
    take_glow() {
      const e = n.meshbuild_take_glow(this.__wbg_ptr);
      var t = ae(e[0], e[1]).slice();
      return n.__wbindgen_free(e[0], e[1] * 2, 2), t;
    }
    take_highlights(e) {
      const t = n.meshbuild_take_highlights(this.__wbg_ptr, e);
      var r = d(t[0], t[1]).slice();
      return n.__wbindgen_free(t[0], t[1] * 4, 4), r;
    }
    take_indices(e) {
      const t = n.meshbuild_take_indices(this.__wbg_ptr, e);
      var r = M(t[0], t[1]).slice();
      return n.__wbindgen_free(t[0], t[1] * 4, 4), r;
    }
    take_normals(e) {
      const t = n.meshbuild_take_normals(this.__wbg_ptr, e);
      var r = d(t[0], t[1]).slice();
      return n.__wbindgen_free(t[0], t[1] * 4, 4), r;
    }
    take_occupancy() {
      const e = n.meshbuild_take_occupancy(this.__wbg_ptr);
      var t = y(e[0], e[1]).slice();
      return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    take_positions(e) {
      const t = n.meshbuild_take_positions(this.__wbg_ptr, e);
      var r = d(t[0], t[1]).slice();
      return n.__wbindgen_free(t[0], t[1] * 4, 4), r;
    }
    take_sky() {
      const e = n.meshbuild_take_sky(this.__wbg_ptr);
      var t = y(e[0], e[1]).slice();
      return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    take_surface_deform(e) {
      const t = n.meshbuild_take_surface_deform(this.__wbg_ptr, e);
      let r;
      return t[0] !== 0 && (r = d(t[0], t[1]).slice(), n.__wbindgen_free(t[0], t[1] * 4, 4)), r;
    }
    take_tile_heights(e) {
      const t = n.meshbuild_take_tile_heights(this.__wbg_ptr, e);
      var r = d(t[0], t[1]).slice();
      return n.__wbindgen_free(t[0], t[1] * 4, 4), r;
    }
    voxel_count() {
      return n.meshbuild_voxel_count(this.__wbg_ptr) >>> 0;
    }
  };
  Symbol.dispose && (w.prototype[Symbol.dispose] = w.prototype.free);
  v = class {
    static __wrap(e) {
      const t = Object.create(v.prototype);
      return t.__wbg_ptr = e, B.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, B.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      n.__wbg_svodecode_free(e, 0);
    }
    take_colors() {
      const e = n.svodecode_take_colors(this.__wbg_ptr);
      var t = y(e[0], e[1]).slice();
      return n.__wbindgen_free(e[0], e[1] * 1, 1), t;
    }
    take_positions() {
      const e = n.svodecode_take_positions(this.__wbg_ptr);
      var t = M(e[0], e[1]).slice();
      return n.__wbindgen_free(e[0], e[1] * 4, 4), t;
    }
  };
  Symbol.dispose && (v.prototype[Symbol.dispose] = v.prototype.free);
  D = class {
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, C.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      n.__wbg_voxelmesher_free(e, 0);
    }
    build(e, t, r, o, a, s, c, l, f) {
      const h = W(e, n.__wbindgen_malloc), m = i, U = b(t, n.__wbindgen_malloc), T = i, R = n.voxelmesher_build(this.__wbg_ptr, h, m, U, T, r, o, a, s, c, l, f);
      return w.__wrap(R);
    }
    build_from_svo(e, t, r, o, a, s, c, l) {
      const f = b(e, n.__wbindgen_malloc), h = i, m = n.voxelmesher_build_from_svo(this.__wbg_ptr, f, h, t, r, o, a, s, c, l);
      return w.__wrap(m);
    }
    constructor(e, t, r, o, a, s, c, l, f) {
      const h = W(e, n.__wbindgen_malloc), m = i, U = W(t, n.__wbindgen_malloc), T = i, R = b(r, n.__wbindgen_malloc), $ = i, G = b(o, n.__wbindgen_malloc), X = i, N = b(a, n.__wbindgen_malloc), P = i, Y = b(s, n.__wbindgen_malloc), q = i, H = be(c, n.__wbindgen_malloc), J = i, K = b(l, n.__wbindgen_malloc), Q = i, Z = b(f, n.__wbindgen_malloc), ee = i, te = n.voxelmesher_new(h, m, U, T, R, $, G, X, N, P, Y, q, H, J, K, Q, Z, ee);
      return this.__wbg_ptr = te, C.register(this, this.__wbg_ptr, this), this;
    }
  };
  Symbol.dispose && (D.prototype[Symbol.dispose] = D.prototype.free);
  Qe = function(_) {
    const e = b(_, n.__wbindgen_malloc), t = i, r = n.decode_svo_wasm(e, t);
    return v.__wrap(r);
  };
  Ze = function(_, e) {
    const t = W(_, n.__wbindgen_malloc), r = i, o = b(e, n.__wbindgen_malloc), a = i, s = n.encode_svo_wasm(t, r, o, a);
    var c = y(s[0], s[1]).slice();
    return n.__wbindgen_free(s[0], s[1] * 1, 1), c;
  };
  function re(_, e) {
    throw new Error(j(_, e));
  }
  function se(_, e) {
    let t, r;
    try {
      t = _, r = e, console.error(j(_, e));
    } finally {
      n.__wbindgen_free(t, r, 1);
    }
  }
  function oe() {
    return new Error();
  }
  function ie(_, e) {
    const t = e.stack, r = de(t, n.__wbindgen_malloc, n.__wbindgen_realloc), o = i;
    L().setInt32(_ + 4, o, true), L().setInt32(_ + 0, r, true);
  }
  function ce() {
    const _ = n.__wbindgen_externrefs, e = _.grow(4);
    _.set(0, void 0), _.set(e + 0, void 0), _.set(e + 1, null), _.set(e + 2, true), _.set(e + 3, false);
  }
  const E = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => n.__wbg_meshbuild_free(_, 1)), B = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => n.__wbg_svodecode_free(_, 1)), C = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((_) => n.__wbg_voxelmesher_free(_, 1));
  function d(_, e) {
    return _ = _ >>> 0, O().subarray(_ / 4, _ / 4 + e);
  }
  function ae(_, e) {
    return _ = _ >>> 0, le().subarray(_ / 2, _ / 2 + e);
  }
  function M(_, e) {
    return _ = _ >>> 0, I().subarray(_ / 4, _ / 4 + e);
  }
  function y(_, e) {
    return _ = _ >>> 0, g().subarray(_ / 1, _ / 1 + e);
  }
  let u = null;
  function L() {
    return (u === null || u.buffer.detached === true || u.buffer.detached === void 0 && u.buffer !== n.memory.buffer) && (u = new DataView(n.memory.buffer)), u;
  }
  let k = null;
  function O() {
    return (k === null || k.byteLength === 0) && (k = new Float32Array(n.memory.buffer)), k;
  }
  function j(_, e) {
    return ge(_ >>> 0, e);
  }
  let A = null;
  function le() {
    return (A === null || A.byteLength === 0) && (A = new Uint16Array(n.memory.buffer)), A;
  }
  let x = null;
  function I() {
    return (x === null || x.byteLength === 0) && (x = new Uint32Array(n.memory.buffer)), x;
  }
  let F = null;
  function g() {
    return (F === null || F.byteLength === 0) && (F = new Uint8Array(n.memory.buffer)), F;
  }
  function W(_, e) {
    const t = e(_.length * 4, 4) >>> 0;
    return I().set(_, t / 4), i = _.length, t;
  }
  function b(_, e) {
    const t = e(_.length * 1, 1) >>> 0;
    return g().set(_, t / 1), i = _.length, t;
  }
  function be(_, e) {
    const t = e(_.length * 4, 4) >>> 0;
    return O().set(_, t / 4), i = _.length, t;
  }
  function de(_, e, t) {
    if (t === void 0) {
      const c = p.encode(_), l = e(c.length, 1) >>> 0;
      return g().subarray(l, l + c.length).set(c), i = c.length, l;
    }
    let r = _.length, o = e(r, 1) >>> 0;
    const a = g();
    let s = 0;
    for (; s < r; s++) {
      const c = _.charCodeAt(s);
      if (c > 127) break;
      a[o + s] = c;
    }
    if (s !== r) {
      s !== 0 && (_ = _.slice(s)), o = t(o, r, r = s + _.length * 3, 1) >>> 0;
      const c = g().subarray(o + s, o + r), l = p.encodeInto(_, c);
      s += l.written, o = t(o, r, s, 1) >>> 0;
    }
    return i = s, o;
  }
  let S = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  S.decode();
  const ue = 2146435072;
  let z = 0;
  function ge(_, e) {
    return z += e, z >= ue && (S = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), S.decode(), z = e), S.decode(g().subarray(_, _ + e));
  }
  const p = new TextEncoder();
  "encodeInto" in p || (p.encodeInto = function(_, e) {
    const t = p.encode(_);
    return e.set(t), {
      read: _.length,
      written: t.length
    };
  });
  let i = 0, n;
  function we(_) {
    n = _;
  }
  URL = globalThis.URL;
  const fe = await ne({
    "./voxel_mesher_bg.js": {
      __wbg_new_227d7c05414eb861: oe,
      __wbg_stack_3b0d974bbf31e44f: ie,
      __wbg_error_a6fa202b58aa1cd3: se,
      __wbg___wbindgen_throw_1506f2235d1bdba0: re,
      __wbindgen_init_externref_table: ce
    }
  }, _e), { memory: he, __wbg_meshbuild_free: me, __wbg_svodecode_free: ye, __wbg_voxelmesher_free: pe, decode_svo_wasm: ve, encode_svo_wasm: ke, meshbuild_bucket_count: Ae, meshbuild_bucket_id: xe, meshbuild_glow_region: Fe, meshbuild_occupancy_height: Me, meshbuild_occupancy_length: We, meshbuild_occupancy_width: Se, meshbuild_sky_region: Ue, meshbuild_take_colors: Te, meshbuild_take_fog: Re, meshbuild_take_glow: ze, meshbuild_take_highlights: De, meshbuild_take_indices: Ee, meshbuild_take_normals: Be, meshbuild_take_occupancy: Ce, meshbuild_take_positions: Le, meshbuild_take_sky: Oe, meshbuild_take_surface_deform: je, meshbuild_take_tile_heights: Ie, meshbuild_voxel_count: Ve, svodecode_take_positions: $e, voxelmesher_build: Ge, voxelmesher_build_from_svo: Xe, voxelmesher_new: Ne, svodecode_take_colors: Pe, __wbindgen_free: Ye, __wbindgen_malloc: qe, __wbindgen_realloc: He, __wbindgen_externrefs: Je, __wbindgen_start: V } = fe, Ke = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_meshbuild_free: me,
    __wbg_svodecode_free: ye,
    __wbg_voxelmesher_free: pe,
    __wbindgen_externrefs: Je,
    __wbindgen_free: Ye,
    __wbindgen_malloc: qe,
    __wbindgen_realloc: He,
    __wbindgen_start: V,
    decode_svo_wasm: ve,
    encode_svo_wasm: ke,
    memory: he,
    meshbuild_bucket_count: Ae,
    meshbuild_bucket_id: xe,
    meshbuild_glow_region: Fe,
    meshbuild_occupancy_height: Me,
    meshbuild_occupancy_length: We,
    meshbuild_occupancy_width: Se,
    meshbuild_sky_region: Ue,
    meshbuild_take_colors: Te,
    meshbuild_take_fog: Re,
    meshbuild_take_glow: ze,
    meshbuild_take_highlights: De,
    meshbuild_take_indices: Ee,
    meshbuild_take_normals: Be,
    meshbuild_take_occupancy: Ce,
    meshbuild_take_positions: Le,
    meshbuild_take_sky: Oe,
    meshbuild_take_surface_deform: je,
    meshbuild_take_tile_heights: Ie,
    meshbuild_voxel_count: Ve,
    svodecode_take_colors: Pe,
    svodecode_take_positions: $e,
    voxelmesher_build: Ge,
    voxelmesher_build_from_svo: Xe,
    voxelmesher_new: Ne
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  we(Ke);
  V();
})();
export {
  w as MeshBuild,
  v as SvoDecode,
  D as VoxelMesher,
  __tla,
  Qe as decode_svo_wasm,
  Ze as encode_svo_wasm
};
