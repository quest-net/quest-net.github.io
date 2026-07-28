import { r as M, j as _n } from "./vendor-react-7vkcqmaY.js";
function Ft(e15) {
  if (e15 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e15;
}
function Ro(e15, t) {
  e15.prototype = Object.create(t.prototype), e15.prototype.constructor = e15, e15.__proto__ = t;
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var mt = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } }, Ee = { duration: 0.5, overwrite: false, delay: 0 }, is, tt, I, bt = 1e8, L = 1 / bt, vn = Math.PI * 2, ul = vn / 4, ll = 0, Eo = Math.sqrt, cl = Math.cos, hl = Math.sin, Q = function(t) {
  return typeof t == "string";
}, W = function(t) {
  return typeof t == "function";
}, Bt = function(t) {
  return typeof t == "number";
}, ns = function(t) {
  return typeof t > "u";
}, Ot = function(t) {
  return typeof t == "object";
}, at = function(t) {
  return t !== false;
}, ss = function() {
  return typeof window < "u";
}, vi = function(t) {
  return W(t) || Q(t);
}, ko = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, nt = Array.isArray, xn = /(?:-?\.?\d|\.)+/gi, Oo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Te = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Xi = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Lo = /[+-]=-?[.\d]+/, Fo = /[^,'"\[\]\s]+/gi, fl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, N, Dt, Tn, rs, gt = {}, Vi = {}, Io, Bo = function(t) {
  return (Vi = ke(t, gt)) && ht;
}, os = function(t, i) {
  return console.warn("Invalid property", t, "set to", i, "Missing plugin? gsap.registerPlugin()");
}, ei = function(t, i) {
  return !i && console.warn(t);
}, No = function(t, i) {
  return t && (gt[t] = i) && Vi && (Vi[t] = i) || gt;
}, ii = function() {
  return 0;
}, dl = { suppressEvents: true, isStart: true, kill: false }, bi = { suppressEvents: true, kill: false }, pl = { suppressEvents: true }, as = {}, Yt = [], Pn = {}, jo, ft = {}, Hi = {}, ir = 30, wi = [], us = "", ls = function(t) {
  var i = t[0], n, s;
  if (Ot(i) || W(i) || (t = [t]), !(n = (i._gsap || {}).harness)) {
    for (s = wi.length; s-- && !wi[s].targetTest(i); ) ;
    n = wi[s];
  }
  for (s = t.length; s--; ) t[s] && (t[s]._gsap || (t[s]._gsap = new ca(t[s], n))) || t.splice(s, 1);
  return t;
}, he = function(t) {
  return t._gsap || ls(wt(t))[0]._gsap;
}, Uo = function(t, i, n) {
  return (n = t[i]) && W(n) ? t[i]() : ns(n) && t.getAttribute && t.getAttribute(i) || n;
}, ut = function(t, i) {
  return (t = t.split(",")).forEach(i) || t;
}, $ = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, Z = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, Me = function(t, i) {
  var n = i.charAt(0), s = parseFloat(i.substr(2));
  return t = parseFloat(t), n === "+" ? t + s : n === "-" ? t - s : n === "*" ? t * s : t / s;
}, ml = function(t, i) {
  for (var n = i.length, s = 0; t.indexOf(i[s]) < 0 && ++s < n; ) ;
  return s < n;
}, Ri = function() {
  var t = Yt.length, i = Yt.slice(0), n, s;
  for (Pn = {}, Yt.length = 0, n = 0; n < t; n++) s = i[n], s && s._lazy && (s.render(s._lazy[0], s._lazy[1], true)._lazy = 0);
}, cs = function(t) {
  return !!(t._initted || t._startAt || t.add);
}, zo = function(t, i, n, s) {
  Yt.length && !tt && Ri(), t.render(i, n, !!(tt && i < 0 && cs(t))), Yt.length && !tt && Ri();
}, Wo = function(t) {
  var i = parseFloat(t);
  return (i || i === 0) && (t + "").match(Fo).length < 2 ? i : Q(t) ? t.trim() : t;
}, Ko = function(t) {
  return t;
}, yt = function(t, i) {
  for (var n in i) n in t || (t[n] = i[n]);
  return t;
}, gl = function(t) {
  return function(i, n) {
    for (var s in n) s in i || s === "duration" && t || s === "ease" || (i[s] = n[s]);
  };
}, ke = function(t, i) {
  for (var n in i) t[n] = i[n];
  return t;
}, nr = function e(t, i) {
  for (var n in i) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (t[n] = Ot(i[n]) ? e(t[n] || (t[n] = {}), i[n]) : i[n]);
  return t;
}, Ei = function(t, i) {
  var n = {}, s;
  for (s in t) s in i || (n[s] = t[s]);
  return n;
}, $e = function(t) {
  var i = t.parent || N, n = t.keyframes ? gl(nt(t.keyframes)) : yt;
  if (at(t.inherit)) for (; i; ) n(t, i.vars.defaults), i = i.parent || i._dp;
  return t;
}, yl = function(t, i) {
  for (var n = t.length, s = n === i.length; s && n-- && t[n] === i[n]; ) ;
  return n < 0;
}, Go = function(t, i, n, s, r) {
  var o = t[s], a;
  if (r) for (a = i[r]; o && o[r] > a; ) o = o._prev;
  return o ? (i._next = o._next, o._next = i) : (i._next = t[n], t[n] = i), i._next ? i._next._prev = i : t[s] = i, i._prev = o, i.parent = i._dp = t, i;
}, zi = function(t, i, n, s) {
  n === void 0 && (n = "_first"), s === void 0 && (s = "_last");
  var r = i._prev, o = i._next;
  r ? r._next = o : t[n] === i && (t[n] = o), o ? o._prev = r : t[s] === i && (t[s] = r), i._next = i._prev = i.parent = null;
}, Xt = function(t, i) {
  t.parent && (!i || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, fe = function(t, i) {
  if (t && (!i || i._end > t._dur || i._start < 0)) for (var n = t; n; ) n._dirty = 1, n = n.parent;
  return t;
}, _l = function(t) {
  for (var i = t.parent; i && i.parent; ) i._dirty = 1, i.totalDuration(), i = i.parent;
  return t;
}, bn = function(t, i, n, s) {
  return t._startAt && (tt ? t._startAt.revert(bi) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(i, true, s));
}, vl = function e2(t) {
  return !t || t._ts && e2(t.parent);
}, sr = function(t) {
  return t._repeat ? Oe(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Oe = function(t, i) {
  var n = Math.floor(t = Z(t / i));
  return t && n === t ? n - 1 : n;
}, ki = function(t, i) {
  return (t - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
}, Wi = function(t) {
  return t._end = Z(t._start + (t._tDur / Math.abs(t._ts || t._rts || L) || 0));
}, Ki = function(t, i) {
  var n = t._dp;
  return n && n.smoothChildTiming && t._ts && (t._start = Z(n._time - (t._ts > 0 ? i / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts)), Wi(t), n._dirty || fe(n, t)), t;
}, Yo = function(t, i) {
  var n;
  if ((i._time || !i._dur && i._initted || i._start < t._time && (i._dur || !i.add)) && (n = ki(t.rawTime(), i), (!i._dur || pi(0, i.totalDuration(), n) - i._tTime > L) && i.render(n, true)), fe(t, i)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration()) for (n = t; n._dp; ) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
    t._zTime = -L;
  }
}, Vt = function(t, i, n, s) {
  return i.parent && Xt(i), i._start = Z((Bt(n) ? n : n || t !== N ? Tt(t, n, i) : t._time) + i._delay), i._end = Z(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)), Go(t, i, "_first", "_last", t._sort ? "_start" : 0), wn(i) || (t._recent = i), s || Yo(t, i), t._ts < 0 && Ki(t, t._tTime), t;
}, $o = function(t, i) {
  return (gt.ScrollTrigger || os("scrollTrigger", i)) && gt.ScrollTrigger.create(i, t);
}, Xo = function(t, i, n, s, r) {
  if (fs(t, i, r), !t._initted) return 1;
  if (!n && t._pt && !tt && (t._dur && t.vars.lazy !== false || !t._dur && t.vars.lazy) && jo !== dt.frame) return Yt.push(t), t._lazy = [r, s], 1;
}, xl = function e3(t) {
  var i = t.parent;
  return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || e3(i));
}, wn = function(t) {
  var i = t.data;
  return i === "isFromStart" || i === "isStart";
}, Tl = function(t, i, n, s) {
  var r = t.ratio, o = i < 0 || !i && (!t._start && xl(t) && !(!t._initted && wn(t)) || (t._ts < 0 || t._dp._ts < 0) && !wn(t)) ? 0 : 1, a = t._rDelay, u = 0, l, c, h;
  if (a && t._repeat && (u = pi(0, t._tDur, i), c = Oe(u, a), t._yoyo && c & 1 && (o = 1 - o), c !== Oe(t._tTime, a) && (r = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== r || tt || s || t._zTime === L || !i && t._zTime) {
    if (!t._initted && Xo(t, i, s, n, u)) return;
    for (h = t._zTime, t._zTime = i || (n ? L : 0), n || (n = i && !h), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = u, l = t._pt; l; ) l.r(o, l.d), l = l._next;
    i < 0 && bn(t, i, n, true), t._onUpdate && !n && pt(t, "onUpdate"), u && t._repeat && !n && t.parent && pt(t, "onRepeat"), (i >= t._tDur || i < 0) && t.ratio === o && (o && Xt(t, 1), !n && !tt && (pt(t, o ? "onComplete" : "onReverseComplete", true), t._prom && t._prom()));
  } else t._zTime || (t._zTime = i);
}, Pl = function(t, i, n) {
  var s;
  if (n > i) for (s = t._first; s && s._start <= n; ) {
    if (s.data === "isPause" && s._start > i) return s;
    s = s._next;
  }
  else for (s = t._last; s && s._start >= n; ) {
    if (s.data === "isPause" && s._start < i) return s;
    s = s._prev;
  }
}, Le = function(t, i, n, s) {
  var r = t._repeat, o = Z(i) || 0, a = t._tTime / t._tDur;
  return a && !s && (t._time *= o / t._dur), t._dur = o, t._tDur = r ? r < 0 ? 1e10 : Z(o * (r + 1) + t._rDelay * r) : o, a > 0 && !s && Ki(t, t._tTime = t._tDur * a), t.parent && Wi(t), n || fe(t.parent, t), t;
}, rr = function(t) {
  return t instanceof st ? fe(t) : Le(t, t._dur);
}, bl = { _start: 0, endTime: ii, totalDuration: ii }, Tt = function e4(t, i, n) {
  var s = t.labels, r = t._recent || bl, o = t.duration() >= bt ? r.endTime(false) : t._dur, a, u, l;
  return Q(i) && (isNaN(i) || i in s) ? (u = i.charAt(0), l = i.substr(-1) === "%", a = i.indexOf("="), u === "<" || u === ">" ? (a >= 0 && (i = i.replace(/=/, "")), (u === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (l ? (a < 0 ? r : n).totalDuration() / 100 : 1)) : a < 0 ? (i in s || (s[i] = o), s[i]) : (u = parseFloat(i.charAt(a - 1) + i.substr(a + 1)), l && n && (u = u / 100 * (nt(n) ? n[0] : n).totalDuration()), a > 1 ? e4(t, i.substr(0, a - 1), n) + u : o + u)) : i == null ? o : +i;
}, Xe = function(t, i, n) {
  var s = Bt(i[1]), r = (s ? 2 : 1) + (t < 2 ? 0 : 1), o = i[r], a, u;
  if (s && (o.duration = i[1]), o.parent = n, t) {
    for (a = o, u = n; u && !("immediateRender" in a); ) a = u.vars.defaults || {}, u = at(u.vars.inherit) && u.parent;
    o.immediateRender = at(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = i[r - 1];
  }
  return new q(i[0], o, i[r + 1]);
}, Qt = function(t, i) {
  return t || t === 0 ? i(t) : i;
}, pi = function(t, i, n) {
  return n < t ? t : n > i ? i : n;
}, et = function(t, i) {
  return !Q(t) || !(i = fl.exec(t)) ? "" : i[1];
}, wl = function(t, i, n) {
  return Qt(n, function(s) {
    return pi(t, i, s);
  });
}, Sn = [].slice, Ho = function(t, i) {
  return t && Ot(t) && "length" in t && (!i && !t.length || t.length - 1 in t && Ot(t[0])) && !t.nodeType && t !== Dt;
}, Sl = function(t, i, n) {
  return n === void 0 && (n = []), t.forEach(function(s) {
    var r;
    return Q(s) && !i || Ho(s, 1) ? (r = n).push.apply(r, wt(s)) : n.push(s);
  }) || n;
}, wt = function(t, i, n) {
  return I && !i && I.selector ? I.selector(t) : Q(t) && !n && (Tn || !Fe()) ? Sn.call((i || rs).querySelectorAll(t), 0) : nt(t) ? Sl(t, n) : Ho(t) ? Sn.call(t, 0) : t ? [t] : [];
}, An = function(t) {
  return t = wt(t)[0] || ei("Invalid scope") || {}, function(i) {
    var n = t.current || t.nativeElement || t;
    return wt(i, n.querySelectorAll ? n : n === t ? ei("Invalid scope") || rs.createElement("div") : t);
  };
}, qo = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Zo = function(t) {
  if (W(t)) return t;
  var i = Ot(t) ? t : { each: t }, n = de(i.ease), s = i.from || 0, r = parseFloat(i.base) || 0, o = {}, a = s > 0 && s < 1, u = isNaN(s) || a, l = i.axis, c = s, h = s;
  return Q(s) ? c = h = { center: 0.5, edges: 0.5, end: 1 }[s] || 0 : !a && u && (c = s[0], h = s[1]), function(f, p, m) {
    var d = (m || i).length, g = o[d], y, x, v, T, _, b, S, P, w;
    if (!g) {
      if (w = i.grid === "auto" ? 0 : (i.grid || [1, bt])[1], !w) {
        for (S = -bt; S < (S = m[w++].getBoundingClientRect().left) && w < d; ) ;
        w < d && w--;
      }
      for (g = o[d] = [], y = u ? Math.min(w, d) * c - 0.5 : s % w, x = w === bt ? 0 : u ? d * h / w - 0.5 : s / w | 0, S = 0, P = bt, b = 0; b < d; b++) v = b % w - y, T = x - (b / w | 0), g[b] = _ = l ? Math.abs(l === "y" ? T : v) : Eo(v * v + T * T), _ > S && (S = _), _ < P && (P = _);
      s === "random" && qo(g), g.max = S - P, g.min = P, g.v = d = (parseFloat(i.amount) || parseFloat(i.each) * (w > d ? d - 1 : l ? l === "y" ? d / w : w : Math.max(w, d / w)) || 0) * (s === "edges" ? -1 : 1), g.b = d < 0 ? r - d : r, g.u = et(i.amount || i.each) || 0, n = n && d < 0 ? aa(n) : n;
    }
    return d = (g[f] - g.min) / g.max || 0, Z(g.b + (n ? n(d) : d) * g.v) + g.u;
  };
}, Cn = function(t) {
  var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(n) {
    var s = Z(Math.round(parseFloat(n) / t) * t * i);
    return (s - s % 1) / i + (Bt(n) ? 0 : et(n));
  };
}, Qo = function(t, i) {
  var n = nt(t), s, r;
  return !n && Ot(t) && (s = n = t.radius || bt, t.values ? (t = wt(t.values), (r = !Bt(t[0])) && (s *= s)) : t = Cn(t.increment)), Qt(i, n ? W(t) ? function(o) {
    return r = t(o), Math.abs(r - o) <= s ? r : o;
  } : function(o) {
    for (var a = parseFloat(r ? o.x : o), u = parseFloat(r ? o.y : 0), l = bt, c = 0, h = t.length, f, p; h--; ) r ? (f = t[h].x - a, p = t[h].y - u, f = f * f + p * p) : f = Math.abs(t[h] - a), f < l && (l = f, c = h);
    return c = !s || l <= s ? t[c] : o, r || c === o || Bt(o) ? c : c + et(o);
  } : Cn(t));
}, Jo = function(t, i, n, s) {
  return Qt(nt(t) ? !i : n === true ? !!(n = 0) : !s, function() {
    return nt(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (s = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (i - t + n * 0.99)) / n) * n * s) / s;
  });
}, Al = function() {
  for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
  return function(s) {
    return i.reduce(function(r, o) {
      return o(r);
    }, s);
  };
}, Cl = function(t, i) {
  return function(n) {
    return t(parseFloat(n)) + (i || et(n));
  };
}, Ml = function(t, i, n) {
  return ea(t, i, 0, 1, n);
}, ta = function(t, i, n) {
  return Qt(n, function(s) {
    return t[~~i(s)];
  });
}, Dl = function e5(t, i, n) {
  var s = i - t;
  return nt(t) ? ta(t, e5(0, t.length), i) : Qt(n, function(r) {
    return (s + (r - t) % s) % s + t;
  });
}, Vl = function e6(t, i, n) {
  var s = i - t, r = s * 2;
  return nt(t) ? ta(t, e6(0, t.length - 1), i) : Qt(n, function(o) {
    return o = (r + (o - t) % r) % r || 0, t + (o > s ? r - o : o);
  });
}, ni = function(t) {
  for (var i = 0, n = "", s, r, o, a; ~(s = t.indexOf("random(", i)); ) o = t.indexOf(")", s), a = t.charAt(s + 7) === "[", r = t.substr(s + 7, o - s - 7).match(a ? Fo : xn), n += t.substr(i, s - i) + Jo(a ? r : +r[0], a ? 0 : +r[1], +r[2] || 1e-5), i = o + 1;
  return n + t.substr(i, t.length - i);
}, ea = function(t, i, n, s, r) {
  var o = i - t, a = s - n;
  return Qt(r, function(u) {
    return n + ((u - t) / o * a || 0);
  });
}, Rl = function e7(t, i, n, s) {
  var r = isNaN(t + i) ? 0 : function(p) {
    return (1 - p) * t + p * i;
  };
  if (!r) {
    var o = Q(t), a = {}, u, l, c, h, f;
    if (n === true && (s = 1) && (n = null), o) t = { p: t }, i = { p: i };
    else if (nt(t) && !nt(i)) {
      for (c = [], h = t.length, f = h - 2, l = 1; l < h; l++) c.push(e7(t[l - 1], t[l]));
      h--, r = function(m) {
        m *= h;
        var d = Math.min(f, ~~m);
        return c[d](m - d);
      }, n = i;
    } else s || (t = ke(nt(t) ? [] : {}, t));
    if (!c) {
      for (u in i) hs.call(a, t, u, "get", i[u]);
      r = function(m) {
        return ms(m, a) || (o ? t.p : t);
      };
    }
  }
  return Qt(n, r);
}, or = function(t, i, n) {
  var s = t.labels, r = bt, o, a, u;
  for (o in s) a = s[o] - i, a < 0 == !!n && a && r > (a = Math.abs(a)) && (u = o, r = a);
  return u;
}, pt = function(t, i, n) {
  var s = t.vars, r = s[i], o = I, a = t._ctx, u, l, c;
  if (r) return u = s[i + "Params"], l = s.callbackScope || t, n && Yt.length && Ri(), a && (I = a), c = u ? r.apply(l, u) : r.call(l), I = o, c;
}, Ke = function(t) {
  return Xt(t), t.scrollTrigger && t.scrollTrigger.kill(!!tt), t.progress() < 1 && pt(t, "onInterrupt"), t;
}, Pe, ia = [], na = function(t) {
  if (t) if (t = !t.name && t.default || t, ss() || t.headless) {
    var i = t.name, n = W(t), s = i && !n && t.init ? function() {
      this._props = [];
    } : t, r = { init: ii, render: ms, add: hs, kill: $l, modifier: Yl, rawVars: 0 }, o = { targetTest: 0, get: 0, getSetter: ps, aliases: {}, register: 0 };
    if (Fe(), t !== s) {
      if (ft[i]) return;
      yt(s, yt(Ei(t, r), o)), ke(s.prototype, ke(r, Ei(t, o))), ft[s.prop = i] = s, t.targetTest && (wi.push(s), as[i] = 1), i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin";
    }
    No(i, s), t.register && t.register(ht, s, lt);
  } else ia.push(t);
}, O = 255, Ge = { aqua: [0, O, O], lime: [0, O, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, O], navy: [0, 0, 128], white: [O, O, O], olive: [128, 128, 0], yellow: [O, O, 0], orange: [O, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [O, 0, 0], pink: [O, 192, 203], cyan: [0, O, O], transparent: [O, O, O, 0] }, qi = function(t, i, n) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? i + (n - i) * t * 6 : t < 0.5 ? n : t * 3 < 2 ? i + (n - i) * (2 / 3 - t) * 6 : i) * O + 0.5 | 0;
}, sa = function(t, i, n) {
  var s = t ? Bt(t) ? [t >> 16, t >> 8 & O, t & O] : 0 : Ge.black, r, o, a, u, l, c, h, f, p, m;
  if (!s) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Ge[t]) s = Ge[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (r = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + r + r + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return s = parseInt(t.substr(1, 6), 16), [s >> 16, s >> 8 & O, s & O, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), s = [t >> 16, t >> 8 & O, t & O];
    } else if (t.substr(0, 3) === "hsl") {
      if (s = m = t.match(xn), !i) u = +s[0] % 360 / 360, l = +s[1] / 100, c = +s[2] / 100, o = c <= 0.5 ? c * (l + 1) : c + l - c * l, r = c * 2 - o, s.length > 3 && (s[3] *= 1), s[0] = qi(u + 1 / 3, r, o), s[1] = qi(u, r, o), s[2] = qi(u - 1 / 3, r, o);
      else if (~t.indexOf("=")) return s = t.match(Oo), n && s.length < 4 && (s[3] = 1), s;
    } else s = t.match(xn) || Ge.transparent;
    s = s.map(Number);
  }
  return i && !m && (r = s[0] / O, o = s[1] / O, a = s[2] / O, h = Math.max(r, o, a), f = Math.min(r, o, a), c = (h + f) / 2, h === f ? u = l = 0 : (p = h - f, l = c > 0.5 ? p / (2 - h - f) : p / (h + f), u = h === r ? (o - a) / p + (o < a ? 6 : 0) : h === o ? (a - r) / p + 2 : (r - o) / p + 4, u *= 60), s[0] = ~~(u + 0.5), s[1] = ~~(l * 100 + 0.5), s[2] = ~~(c * 100 + 0.5)), n && s.length < 4 && (s[3] = 1), s;
}, ra = function(t) {
  var i = [], n = [], s = -1;
  return t.split($t).forEach(function(r) {
    var o = r.match(Te) || [];
    i.push.apply(i, o), n.push(s += o.length + 1);
  }), i.c = n, i;
}, ar = function(t, i, n) {
  var s = "", r = (t + s).match($t), o = i ? "hsla(" : "rgba(", a = 0, u, l, c, h;
  if (!r) return t;
  if (r = r.map(function(f) {
    return (f = sa(f, i, 1)) && o + (i ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
  }), n && (c = ra(t), u = n.c, u.join(s) !== c.c.join(s))) for (l = t.replace($t, "1").split(Te), h = l.length - 1; a < h; a++) s += l[a] + (~u.indexOf(a) ? r.shift() || o + "0,0,0,0)" : (c.length ? c : r.length ? r : n).shift());
  if (!l) for (l = t.split($t), h = l.length - 1; a < h; a++) s += l[a] + r[a];
  return s + l[h];
}, $t = (function() {
  var e15 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Ge) e15 += "|" + t + "\\b";
  return new RegExp(e15 + ")", "gi");
})(), El = /hsl[a]?\(/, oa = function(t) {
  var i = t.join(" "), n;
  if ($t.lastIndex = 0, $t.test(i)) return n = El.test(i), t[1] = ar(t[1], n), t[0] = ar(t[0], n, ra(t[1])), true;
}, si, dt = (function() {
  var e15 = Date.now, t = 500, i = 33, n = e15(), s = n, r = 1e3 / 240, o = r, a = [], u, l, c, h, f, p, m = function d(g) {
    var y = e15() - s, x = g === true, v, T, _, b;
    if ((y > t || y < 0) && (n += y - i), s += y, _ = s - n, v = _ - o, (v > 0 || x) && (b = ++h.frame, f = _ - h.time * 1e3, h.time = _ = _ / 1e3, o += v + (v >= r ? 4 : r - v), T = 1), x || (u = l(d)), T) for (p = 0; p < a.length; p++) a[p](_, f, b, g);
  };
  return h = { time: 0, frame: 0, tick: function() {
    m(true);
  }, deltaRatio: function(g) {
    return f / (1e3 / (g || 60));
  }, wake: function() {
    Io && (!Tn && ss() && (Dt = Tn = window, rs = Dt.document || {}, gt.gsap = ht, (Dt.gsapVersions || (Dt.gsapVersions = [])).push(ht.version), Bo(Vi || Dt.GreenSockGlobals || !Dt.gsap && Dt || {}), ia.forEach(na)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, u && h.sleep(), l = c || function(g) {
      return setTimeout(g, o - h.time * 1e3 + 1 | 0);
    }, si = 1, m(2));
  }, sleep: function() {
    (c ? cancelAnimationFrame : clearTimeout)(u), si = 0, l = ii;
  }, lagSmoothing: function(g, y) {
    t = g || 1 / 0, i = Math.min(y || 33, t);
  }, fps: function(g) {
    r = 1e3 / (g || 240), o = h.time * 1e3 + r;
  }, add: function(g, y, x) {
    var v = y ? function(T, _, b, S) {
      g(T, _, b, S), h.remove(v);
    } : g;
    return h.remove(g), a[x ? "unshift" : "push"](v), Fe(), v;
  }, remove: function(g, y) {
    ~(y = a.indexOf(g)) && a.splice(y, 1) && p >= y && p--;
  }, _listeners: a }, h;
})(), Fe = function() {
  return !si && dt.wake();
}, V = {}, kl = /^[\d.\-M][\d.\-,\s]/, Ol = /["']/g, Ll = function(t) {
  for (var i = {}, n = t.substr(1, t.length - 3).split(":"), s = n[0], r = 1, o = n.length, a, u, l; r < o; r++) u = n[r], a = r !== o - 1 ? u.lastIndexOf(",") : u.length, l = u.substr(0, a), i[s] = isNaN(l) ? l.replace(Ol, "").trim() : +l, s = u.substr(a + 1).trim();
  return i;
}, Fl = function(t) {
  var i = t.indexOf("(") + 1, n = t.indexOf(")"), s = t.indexOf("(", i);
  return t.substring(i, ~s && s < n ? t.indexOf(")", n + 1) : n);
}, Il = function(t) {
  var i = (t + "").split("("), n = V[i[0]];
  return n && i.length > 1 && n.config ? n.config.apply(null, ~t.indexOf("{") ? [Ll(i[1])] : Fl(t).split(",").map(Wo)) : V._CE && kl.test(t) ? V._CE("", t) : n;
}, aa = function(t) {
  return function(i) {
    return 1 - t(1 - i);
  };
}, ua = function e8(t, i) {
  for (var n = t._first, s; n; ) n instanceof st ? e8(n, i) : n.vars.yoyoEase && (!n._yoyo || !n._repeat) && n._yoyo !== i && (n.timeline ? e8(n.timeline, i) : (s = n._ease, n._ease = n._yEase, n._yEase = s, n._yoyo = i)), n = n._next;
}, de = function(t, i) {
  return t && (W(t) ? t : V[t] || Il(t)) || i;
}, ve = function(t, i, n, s) {
  n === void 0 && (n = function(u) {
    return 1 - i(1 - u);
  }), s === void 0 && (s = function(u) {
    return u < 0.5 ? i(u * 2) / 2 : 1 - i((1 - u) * 2) / 2;
  });
  var r = { easeIn: i, easeOut: n, easeInOut: s }, o;
  return ut(t, function(a) {
    V[a] = gt[a] = r, V[o = a.toLowerCase()] = n;
    for (var u in r) V[o + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = V[a + "." + u] = r[u];
  }), r;
}, la = function(t) {
  return function(i) {
    return i < 0.5 ? (1 - t(1 - i * 2)) / 2 : 0.5 + t((i - 0.5) * 2) / 2;
  };
}, Zi = function e9(t, i, n) {
  var s = i >= 1 ? i : 1, r = (n || (t ? 0.3 : 0.45)) / (i < 1 ? i : 1), o = r / vn * (Math.asin(1 / s) || 0), a = function(c) {
    return c === 1 ? 1 : s * Math.pow(2, -10 * c) * hl((c - o) * r) + 1;
  }, u = t === "out" ? a : t === "in" ? function(l) {
    return 1 - a(1 - l);
  } : la(a);
  return r = vn / r, u.config = function(l, c) {
    return e9(t, l, c);
  }, u;
}, Qi = function e10(t, i) {
  i === void 0 && (i = 1.70158);
  var n = function(o) {
    return o ? --o * o * ((i + 1) * o + i) + 1 : 0;
  }, s = t === "out" ? n : t === "in" ? function(r) {
    return 1 - n(1 - r);
  } : la(n);
  return s.config = function(r) {
    return e10(t, r);
  }, s;
};
ut("Linear,Quad,Cubic,Quart,Quint,Strong", function(e15, t) {
  var i = t < 5 ? t + 1 : t;
  ve(e15 + ",Power" + (i - 1), t ? function(n) {
    return Math.pow(n, i);
  } : function(n) {
    return n;
  }, function(n) {
    return 1 - Math.pow(1 - n, i);
  }, function(n) {
    return n < 0.5 ? Math.pow(n * 2, i) / 2 : 1 - Math.pow((1 - n) * 2, i) / 2;
  });
});
V.Linear.easeNone = V.none = V.Linear.easeIn;
ve("Elastic", Zi("in"), Zi("out"), Zi());
(function(e15, t) {
  var i = 1 / t, n = 2 * i, s = 2.5 * i, r = function(a) {
    return a < i ? e15 * a * a : a < n ? e15 * Math.pow(a - 1.5 / t, 2) + 0.75 : a < s ? e15 * (a -= 2.25 / t) * a + 0.9375 : e15 * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  ve("Bounce", function(o) {
    return 1 - r(1 - o);
  }, r);
})(7.5625, 2.75);
ve("Expo", function(e15) {
  return Math.pow(2, 10 * (e15 - 1)) * e15 + e15 * e15 * e15 * e15 * e15 * e15 * (1 - e15);
});
ve("Circ", function(e15) {
  return -(Eo(1 - e15 * e15) - 1);
});
ve("Sine", function(e15) {
  return e15 === 1 ? 1 : -cl(e15 * ul) + 1;
});
ve("Back", Qi("in"), Qi("out"), Qi());
V.SteppedEase = V.steps = gt.SteppedEase = { config: function(t, i) {
  t === void 0 && (t = 1);
  var n = 1 / t, s = t + (i ? 0 : 1), r = i ? 1 : 0, o = 1 - L;
  return function(a) {
    return ((s * pi(0, o, a) | 0) + r) * n;
  };
} };
Ee.ease = V["quad.out"];
ut("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e15) {
  return us += e15 + "," + e15 + "Params,";
});
var ca = function(t, i) {
  this.id = ll++, t._gsap = this, this.target = t, this.harness = i, this.get = i ? i.get : Uo, this.set = i ? i.getSetter : ps;
}, ri = (function() {
  function e15(i) {
    this.vars = i, this._delay = +i.delay || 0, (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) && (this._rDelay = i.repeatDelay || 0, this._yoyo = !!i.yoyo || !!i.yoyoEase), this._ts = 1, Le(this, +i.duration, 1, 1), this.data = i.data, I && (this._ctx = I, I.data.push(this)), si || dt.wake();
  }
  var t = e15.prototype;
  return t.delay = function(n) {
    return n || n === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay), this._delay = n, this) : this._delay;
  }, t.duration = function(n) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(n) {
    return arguments.length ? (this._dirty = 0, Le(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(n, s) {
    if (Fe(), !arguments.length) return this._tTime;
    var r = this._dp;
    if (r && r.smoothChildTiming && this._ts) {
      for (Ki(this, n), !r._dp || r.parent || Yo(r, this); r && r.parent; ) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, true), r = r.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && n < this._tDur || this._ts < 0 && n > 0 || !this._tDur && !n) && Vt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== n || !this._dur && !s || this._initted && Math.abs(this._zTime) === L || !n && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = n), zo(this, n, s)), this;
  }, t.time = function(n, s) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), n + sr(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0), s) : this._time;
  }, t.totalProgress = function(n, s) {
    return arguments.length ? this.totalTime(this.totalDuration() * n, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(n, s) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + sr(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(n, s) {
    var r = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (n - 1) * r, s) : this._repeat ? Oe(this._tTime, r) + 1 : 1;
  }, t.timeScale = function(n, s) {
    if (!arguments.length) return this._rts === -L ? 0 : this._rts;
    if (this._rts === n) return this;
    var r = this.parent && this._ts ? ki(this.parent._time, this) : this._tTime;
    return this._rts = +n || 0, this._ts = this._ps || n === -L ? 0 : this._rts, this.totalTime(pi(-Math.abs(this._delay), this.totalDuration(), r), s !== false), Wi(this), _l(this);
  }, t.paused = function(n) {
    return arguments.length ? (this._ps !== n && (this._ps = n, n ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Fe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== L && (this._tTime -= L)))), this) : this._ps;
  }, t.startTime = function(n) {
    if (arguments.length) {
      this._start = n;
      var s = this.parent || this._dp;
      return s && (s._sort || !this.parent) && Vt(s, this, n - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(n) {
    return this._start + (at(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(n) {
    var s = this.parent || this._dp;
    return s ? n && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ki(s.rawTime(n), this) : this._tTime : this._tTime;
  }, t.revert = function(n) {
    n === void 0 && (n = pl);
    var s = tt;
    return tt = n, cs(this) && (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)), this.data !== "nested" && n.kill !== false && this.kill(), tt = s, this;
  }, t.globalTime = function(n) {
    for (var s = this, r = arguments.length ? n : s.rawTime(); s; ) r = s._start + r / (Math.abs(s._ts) || 1), s = s._dp;
    return !this.parent && this._sat ? this._sat.globalTime(n) : r;
  }, t.repeat = function(n) {
    return arguments.length ? (this._repeat = n === 1 / 0 ? -2 : n, rr(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(n) {
    if (arguments.length) {
      var s = this._time;
      return this._rDelay = n, rr(this), s ? this.time(s) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(n) {
    return arguments.length ? (this._yoyo = n, this) : this._yoyo;
  }, t.seek = function(n, s) {
    return this.totalTime(Tt(this, n), at(s));
  }, t.restart = function(n, s) {
    return this.play().totalTime(n ? -this._delay : 0, at(s)), this._dur || (this._zTime = -L), this;
  }, t.play = function(n, s) {
    return n != null && this.seek(n, s), this.reversed(false).paused(false);
  }, t.reverse = function(n, s) {
    return n != null && this.seek(n || this.totalDuration(), s), this.reversed(true).paused(false);
  }, t.pause = function(n, s) {
    return n != null && this.seek(n, s), this.paused(true);
  }, t.resume = function() {
    return this.paused(false);
  }, t.reversed = function(n) {
    return arguments.length ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -L : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -L, this;
  }, t.isActive = function() {
    var n = this.parent || this._dp, s = this._start, r;
    return !!(!n || this._ts && this._initted && n.isActive() && (r = n.rawTime(true)) >= s && r < this.endTime(true) - L);
  }, t.eventCallback = function(n, s, r) {
    var o = this.vars;
    return arguments.length > 1 ? (s ? (o[n] = s, r && (o[n + "Params"] = r), n === "onUpdate" && (this._onUpdate = s)) : delete o[n], this) : o[n];
  }, t.then = function(n) {
    var s = this;
    return new Promise(function(r) {
      var o = W(n) ? n : Ko, a = function() {
        var l = s.then;
        s.then = null, W(o) && (o = o(s)) && (o.then || o === s) && (s.then = l), r(o), s.then = l;
      };
      s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? a() : s._prom = a;
    });
  }, t.kill = function() {
    Ke(this);
  }, e15;
})();
yt(ri.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: false, parent: null, _initted: false, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -L, _prom: 0, _ps: false, _rts: 1 });
var st = (function(e15) {
  Ro(t, e15);
  function t(n, s) {
    var r;
    return n === void 0 && (n = {}), r = e15.call(this, n) || this, r.labels = {}, r.smoothChildTiming = !!n.smoothChildTiming, r.autoRemoveChildren = !!n.autoRemoveChildren, r._sort = at(n.sortChildren), N && Vt(n.parent || N, Ft(r), s), n.reversed && r.reverse(), n.paused && r.paused(true), n.scrollTrigger && $o(Ft(r), n.scrollTrigger), r;
  }
  var i = t.prototype;
  return i.to = function(s, r, o) {
    return Xe(0, arguments, this), this;
  }, i.from = function(s, r, o) {
    return Xe(1, arguments, this), this;
  }, i.fromTo = function(s, r, o, a) {
    return Xe(2, arguments, this), this;
  }, i.set = function(s, r, o) {
    return r.duration = 0, r.parent = this, $e(r).repeatDelay || (r.repeat = 0), r.immediateRender = !!r.immediateRender, new q(s, r, Tt(this, o), 1), this;
  }, i.call = function(s, r, o) {
    return Vt(this, q.delayedCall(0, s, r), o);
  }, i.staggerTo = function(s, r, o, a, u, l, c) {
    return o.duration = r, o.stagger = o.stagger || a, o.onComplete = l, o.onCompleteParams = c, o.parent = this, new q(s, o, Tt(this, u)), this;
  }, i.staggerFrom = function(s, r, o, a, u, l, c) {
    return o.runBackwards = 1, $e(o).immediateRender = at(o.immediateRender), this.staggerTo(s, r, o, a, u, l, c);
  }, i.staggerFromTo = function(s, r, o, a, u, l, c, h) {
    return a.startAt = o, $e(a).immediateRender = at(a.immediateRender), this.staggerTo(s, r, a, u, l, c, h);
  }, i.render = function(s, r, o) {
    var a = this._time, u = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, c = s <= 0 ? 0 : Z(s), h = this._zTime < 0 != s < 0 && (this._initted || !l), f, p, m, d, g, y, x, v, T, _, b, S;
    if (this !== N && c > u && s >= 0 && (c = u), c !== this._tTime || o || h) {
      if (a !== this._time && l && (c += this._time - a, s += this._time - a), f = c, T = this._start, v = this._ts, y = !v, h && (l || (a = this._zTime), (s || !r) && (this._zTime = s)), this._repeat) {
        if (b = this._yoyo, g = l + this._rDelay, this._repeat < -1 && s < 0) return this.totalTime(g * 100 + s, r, o);
        if (f = Z(c % g), c === u ? (d = this._repeat, f = l) : (_ = Z(c / g), d = ~~_, d && d === _ && (f = l, d--), f > l && (f = l)), _ = Oe(this._tTime, g), !a && this._tTime && _ !== d && this._tTime - _ * g - this._dur <= 0 && (_ = d), b && d & 1 && (f = l - f, S = 1), d !== _ && !this._lock) {
          var P = b && _ & 1, w = P === (b && d & 1);
          if (d < _ && (P = !P), a = P ? 0 : c % l ? l : c, this._lock = 1, this.render(a || (S ? 0 : Z(d * g)), r, !l)._lock = 0, this._tTime = c, !r && this.parent && pt(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
          if (l = this._dur, u = this._tDur, w && (this._lock = 2, a = P ? l : -1e-4, this.render(a, true), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !y) return this;
          ua(this, S);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x = Pl(this, Z(a), Z(f)), x && (c -= f - (f = x._start))), this._tTime = c, this._time = f, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = s, a = 0), !a && c && !r && !_ && (pt(this, "onStart"), this._tTime !== c)) return this;
      if (f >= a && s >= 0) for (p = this._first; p; ) {
        if (m = p._next, (p._act || f >= p._start) && p._ts && x !== p) {
          if (p.parent !== this) return this.render(s, r, o);
          if (p.render(p._ts > 0 ? (f - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (f - p._start) * p._ts, r, o), f !== this._time || !this._ts && !y) {
            x = 0, m && (c += this._zTime = -L);
            break;
          }
        }
        p = m;
      }
      else {
        p = this._last;
        for (var C = s < 0 ? s : f; p; ) {
          if (m = p._prev, (p._act || C <= p._end) && p._ts && x !== p) {
            if (p.parent !== this) return this.render(s, r, o);
            if (p.render(p._ts > 0 ? (C - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (C - p._start) * p._ts, r, o || tt && cs(p)), f !== this._time || !this._ts && !y) {
              x = 0, m && (c += this._zTime = C ? -L : L);
              break;
            }
          }
          p = m;
        }
      }
      if (x && !r && (this.pause(), x.render(f >= a ? 0 : -L)._zTime = f >= a ? 1 : -1, this._ts)) return this._start = T, Wi(this), this.render(s, r, o);
      this._onUpdate && !r && pt(this, "onUpdate", true), (c === u && this._tTime >= this.totalDuration() || !c && a) && (T === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((s || !l) && (c === u && this._ts > 0 || !c && this._ts < 0) && Xt(this, 1), !r && !(s < 0 && !a) && (c || a || !u) && (pt(this, c === u && s >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(c < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, i.add = function(s, r) {
    var o = this;
    if (Bt(r) || (r = Tt(this, r, s)), !(s instanceof ri)) {
      if (nt(s)) return s.forEach(function(a) {
        return o.add(a, r);
      }), this;
      if (Q(s)) return this.addLabel(s, r);
      if (W(s)) s = q.delayedCall(0, s);
      else return this;
    }
    return this !== s ? Vt(this, s, r) : this;
  }, i.getChildren = function(s, r, o, a) {
    s === void 0 && (s = true), r === void 0 && (r = true), o === void 0 && (o = true), a === void 0 && (a = -bt);
    for (var u = [], l = this._first; l; ) l._start >= a && (l instanceof q ? r && u.push(l) : (o && u.push(l), s && u.push.apply(u, l.getChildren(true, r, o)))), l = l._next;
    return u;
  }, i.getById = function(s) {
    for (var r = this.getChildren(1, 1, 1), o = r.length; o--; ) if (r[o].vars.id === s) return r[o];
  }, i.remove = function(s) {
    return Q(s) ? this.removeLabel(s) : W(s) ? this.killTweensOf(s) : (s.parent === this && zi(this, s), s === this._recent && (this._recent = this._last), fe(this));
  }, i.totalTime = function(s, r) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Z(dt.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))), e15.prototype.totalTime.call(this, s, r), this._forcing = 0, this) : this._tTime;
  }, i.addLabel = function(s, r) {
    return this.labels[s] = Tt(this, r), this;
  }, i.removeLabel = function(s) {
    return delete this.labels[s], this;
  }, i.addPause = function(s, r, o) {
    var a = q.delayedCall(0, r || ii, o);
    return a.data = "isPause", this._hasPause = 1, Vt(this, a, Tt(this, s));
  }, i.removePause = function(s) {
    var r = this._first;
    for (s = Tt(this, s); r; ) r._start === s && r.data === "isPause" && Xt(r), r = r._next;
  }, i.killTweensOf = function(s, r, o) {
    for (var a = this.getTweensOf(s, o), u = a.length; u--; ) Wt !== a[u] && a[u].kill(s, r);
    return this;
  }, i.getTweensOf = function(s, r) {
    for (var o = [], a = wt(s), u = this._first, l = Bt(r), c; u; ) u instanceof q ? ml(u._targets, a) && (l ? (!Wt || u._initted && u._ts) && u.globalTime(0) <= r && u.globalTime(u.totalDuration()) > r : !r || u.isActive()) && o.push(u) : (c = u.getTweensOf(a, r)).length && o.push.apply(o, c), u = u._next;
    return o;
  }, i.tweenTo = function(s, r) {
    r = r || {};
    var o = this, a = Tt(o, s), u = r, l = u.startAt, c = u.onStart, h = u.onStartParams, f = u.immediateRender, p, m = q.to(o, yt({ ease: r.ease || "none", lazy: false, immediateRender: false, time: a, overwrite: "auto", duration: r.duration || Math.abs((a - (l && "time" in l ? l.time : o._time)) / o.timeScale()) || L, onStart: function() {
      if (o.pause(), !p) {
        var g = r.duration || Math.abs((a - (l && "time" in l ? l.time : o._time)) / o.timeScale());
        m._dur !== g && Le(m, g, 0, 1).render(m._time, true, true), p = 1;
      }
      c && c.apply(m, h || []);
    } }, r));
    return f ? m.render(0) : m;
  }, i.tweenFromTo = function(s, r, o) {
    return this.tweenTo(r, yt({ startAt: { time: Tt(this, s) } }, o));
  }, i.recent = function() {
    return this._recent;
  }, i.nextLabel = function(s) {
    return s === void 0 && (s = this._time), or(this, Tt(this, s));
  }, i.previousLabel = function(s) {
    return s === void 0 && (s = this._time), or(this, Tt(this, s), 1);
  }, i.currentLabel = function(s) {
    return arguments.length ? this.seek(s, true) : this.previousLabel(this._time + L);
  }, i.shiftChildren = function(s, r, o) {
    o === void 0 && (o = 0);
    for (var a = this._first, u = this.labels, l; a; ) a._start >= o && (a._start += s, a._end += s), a = a._next;
    if (r) for (l in u) u[l] >= o && (u[l] += s);
    return fe(this);
  }, i.invalidate = function(s) {
    var r = this._first;
    for (this._lock = 0; r; ) r.invalidate(s), r = r._next;
    return e15.prototype.invalidate.call(this, s);
  }, i.clear = function(s) {
    s === void 0 && (s = true);
    for (var r = this._first, o; r; ) o = r._next, this.remove(r), r = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), s && (this.labels = {}), fe(this);
  }, i.totalDuration = function(s) {
    var r = 0, o = this, a = o._last, u = bt, l, c, h;
    if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -s : s));
    if (o._dirty) {
      for (h = o.parent; a; ) l = a._prev, a._dirty && a.totalDuration(), c = a._start, c > u && o._sort && a._ts && !o._lock ? (o._lock = 1, Vt(o, a, c - a._delay, 1)._lock = 0) : u = c, c < 0 && a._ts && (r -= c, (!h && !o._dp || h && h.smoothChildTiming) && (o._start += c / o._ts, o._time -= c, o._tTime -= c), o.shiftChildren(-c, false, -1 / 0), u = 0), a._end > r && a._ts && (r = a._end), a = l;
      Le(o, o === N && o._time > r ? o._time : r, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, t.updateRoot = function(s) {
    if (N._ts && (zo(N, ki(s, N)), jo = dt.frame), dt.frame >= ir) {
      ir += mt.autoSleep || 120;
      var r = N._first;
      if ((!r || !r._ts) && mt.autoSleep && dt._listeners.length < 2) {
        for (; r && !r._ts; ) r = r._next;
        r || dt.sleep();
      }
    }
  }, t;
})(ri);
yt(st.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Bl = function(t, i, n, s, r, o, a) {
  var u = new lt(this._pt, t, i, 0, 1, ga, null, r), l = 0, c = 0, h, f, p, m, d, g, y, x;
  for (u.b = n, u.e = s, n += "", s += "", (y = ~s.indexOf("random(")) && (s = ni(s)), o && (x = [n, s], o(x, t, i), n = x[0], s = x[1]), f = n.match(Xi) || []; h = Xi.exec(s); ) m = h[0], d = s.substring(l, h.index), p ? p = (p + 1) % 5 : d.substr(-5) === "rgba(" && (p = 1), m !== f[c++] && (g = parseFloat(f[c - 1]) || 0, u._pt = { _next: u._pt, p: d || c === 1 ? d : ",", s: g, c: m.charAt(1) === "=" ? Me(g, m) - g : parseFloat(m) - g, m: p && p < 4 ? Math.round : 0 }, l = Xi.lastIndex);
  return u.c = l < s.length ? s.substring(l, s.length) : "", u.fp = a, (Lo.test(s) || y) && (u.e = 0), this._pt = u, u;
}, hs = function(t, i, n, s, r, o, a, u, l, c) {
  W(s) && (s = s(r || 0, t, o));
  var h = t[i], f = n !== "get" ? n : W(h) ? l ? t[i.indexOf("set") || !W(t["get" + i.substr(3)]) ? i : "get" + i.substr(3)](l) : t[i]() : h, p = W(h) ? l ? Wl : pa : ds, m;
  if (Q(s) && (~s.indexOf("random(") && (s = ni(s)), s.charAt(1) === "=" && (m = Me(f, s) + (et(f) || 0), (m || m === 0) && (s = m))), !c || f !== s || Mn) return !isNaN(f * s) && s !== "" ? (m = new lt(this._pt, t, i, +f || 0, s - (f || 0), typeof h == "boolean" ? Gl : ma, 0, p), l && (m.fp = l), a && m.modifier(a, this, t), this._pt = m) : (!h && !(i in t) && os(i, s), Bl.call(this, t, i, f, s, p, u || mt.stringFilter, l));
}, Nl = function(t, i, n, s, r) {
  if (W(t) && (t = He(t, r, i, n, s)), !Ot(t) || t.style && t.nodeType || nt(t) || ko(t)) return Q(t) ? He(t, r, i, n, s) : t;
  var o = {}, a;
  for (a in t) o[a] = He(t[a], r, i, n, s);
  return o;
}, ha = function(t, i, n, s, r, o) {
  var a, u, l, c;
  if (ft[t] && (a = new ft[t]()).init(r, a.rawVars ? i[t] : Nl(i[t], s, r, o, n), n, s, o) !== false && (n._pt = u = new lt(n._pt, r, t, 0, 1, a.render, a, 0, a.priority), n !== Pe)) for (l = n._ptLookup[n._targets.indexOf(r)], c = a._props.length; c--; ) l[a._props[c]] = u;
  return a;
}, Wt, Mn, fs = function e11(t, i, n) {
  var s = t.vars, r = s.ease, o = s.startAt, a = s.immediateRender, u = s.lazy, l = s.onUpdate, c = s.runBackwards, h = s.yoyoEase, f = s.keyframes, p = s.autoRevert, m = t._dur, d = t._startAt, g = t._targets, y = t.parent, x = y && y.data === "nested" ? y.vars.targets : g, v = t._overwrite === "auto" && !is, T = t.timeline, _, b, S, P, w, C, R, E, k, X, K, G, D;
  if (T && (!f || !r) && (r = "none"), t._ease = de(r, Ee.ease), t._yEase = h ? aa(de(h === true ? r : h, Ee.ease)) : 0, h && t._yoyo && !t._repeat && (h = t._yEase, t._yEase = t._ease, t._ease = h), t._from = !T && !!s.runBackwards, !T || f && !s.stagger) {
    if (E = g[0] ? he(g[0]).harness : 0, G = E && s[E.prop], _ = Ei(s, as), d && (d._zTime < 0 && d.progress(1), i < 0 && c && a && !p ? d.render(-1, true) : d.revert(c && m ? bi : dl), d._lazy = 0), o) {
      if (Xt(t._startAt = q.set(g, yt({ data: "isStart", overwrite: false, parent: y, immediateRender: true, lazy: !d && at(u), startAt: null, delay: 0, onUpdate: l && function() {
        return pt(t, "onUpdate");
      }, stagger: 0 }, o))), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (tt || !a && !p) && t._startAt.revert(bi), a && m && i <= 0 && n <= 0) {
        i && (t._zTime = i);
        return;
      }
    } else if (c && m && !d) {
      if (i && (a = false), S = yt({ overwrite: false, data: "isFromStart", lazy: a && !d && at(u), immediateRender: a, stagger: 0, parent: y }, _), G && (S[E.prop] = G), Xt(t._startAt = q.set(g, S)), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (tt ? t._startAt.revert(bi) : t._startAt.render(-1, true)), t._zTime = i, !a) e11(t._startAt, L, L);
      else if (!i) return;
    }
    for (t._pt = t._ptCache = 0, u = m && at(u) || u && !m, b = 0; b < g.length; b++) {
      if (w = g[b], R = w._gsap || ls(g)[b]._gsap, t._ptLookup[b] = X = {}, Pn[R.id] && Yt.length && Ri(), K = x === g ? b : x.indexOf(w), E && (k = new E()).init(w, G || _, t, K, x) !== false && (t._pt = P = new lt(t._pt, w, k.name, 0, 1, k.render, k, 0, k.priority), k._props.forEach(function(F) {
        X[F] = P;
      }), k.priority && (C = 1)), !E || G) for (S in _) ft[S] && (k = ha(S, _, t, K, w, x)) ? k.priority && (C = 1) : X[S] = P = hs.call(t, w, S, "get", _[S], K, x, 0, s.stringFilter);
      t._op && t._op[b] && t.kill(w, t._op[b]), v && t._pt && (Wt = t, N.killTweensOf(w, X, t.globalTime(i)), D = !t.parent, Wt = 0), t._pt && u && (Pn[R.id] = 1);
    }
    C && ya(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = l, t._initted = (!t._op || t._pt) && !D, f && i <= 0 && T.render(bt, true, true);
}, jl = function(t, i, n, s, r, o, a, u) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[i], c, h, f, p;
  if (!l) for (l = t._ptCache[i] = [], f = t._ptLookup, p = t._targets.length; p--; ) {
    if (c = f[p][i], c && c.d && c.d._pt) for (c = c.d._pt; c && c.p !== i && c.fp !== i; ) c = c._next;
    if (!c) return Mn = 1, t.vars[i] = "+=0", fs(t, a), Mn = 0, u ? ei(i + " not eligible for reset") : 1;
    l.push(c);
  }
  for (p = l.length; p--; ) h = l[p], c = h._pt || h, c.s = (s || s === 0) && !r ? s : c.s + (s || 0) + o * c.c, c.c = n - c.s, h.e && (h.e = $(n) + et(h.e)), h.b && (h.b = c.s + et(h.b));
}, Ul = function(t, i) {
  var n = t[0] ? he(t[0]).harness : 0, s = n && n.aliases, r, o, a, u;
  if (!s) return i;
  r = ke({}, i);
  for (o in s) if (o in r) for (u = s[o].split(","), a = u.length; a--; ) r[u[a]] = r[o];
  return r;
}, zl = function(t, i, n, s) {
  var r = i.ease || s || "power1.inOut", o, a;
  if (nt(i)) a = n[t] || (n[t] = []), i.forEach(function(u, l) {
    return a.push({ t: l / (i.length - 1) * 100, v: u, e: r });
  });
  else for (o in i) a = n[o] || (n[o] = []), o === "ease" || a.push({ t: parseFloat(t), v: i[o], e: r });
}, He = function(t, i, n, s, r) {
  return W(t) ? t.call(i, n, s, r) : Q(t) && ~t.indexOf("random(") ? ni(t) : t;
}, fa = us + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", da = {};
ut(fa + ",id,stagger,delay,duration,paused,scrollTrigger", function(e15) {
  return da[e15] = 1;
});
var q = (function(e15) {
  Ro(t, e15);
  function t(n, s, r, o) {
    var a;
    typeof s == "number" && (r.duration = s, s = r, r = null), a = e15.call(this, o ? s : $e(s)) || this;
    var u = a.vars, l = u.duration, c = u.delay, h = u.immediateRender, f = u.stagger, p = u.overwrite, m = u.keyframes, d = u.defaults, g = u.scrollTrigger, y = u.yoyoEase, x = s.parent || N, v = (nt(n) || ko(n) ? Bt(n[0]) : "length" in s) ? [n] : wt(n), T, _, b, S, P, w, C, R;
    if (a._targets = v.length ? ls(v) : ei("GSAP target " + n + " not found. https://gsap.com", !mt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = p, m || f || vi(l) || vi(c)) {
      if (s = a.vars, T = a.timeline = new st({ data: "nested", defaults: d || {}, targets: x && x.data === "nested" ? x.vars.targets : v }), T.kill(), T.parent = T._dp = Ft(a), T._start = 0, f || vi(l) || vi(c)) {
        if (S = v.length, C = f && Zo(f), Ot(f)) for (P in f) ~fa.indexOf(P) && (R || (R = {}), R[P] = f[P]);
        for (_ = 0; _ < S; _++) b = Ei(s, da), b.stagger = 0, y && (b.yoyoEase = y), R && ke(b, R), w = v[_], b.duration = +He(l, Ft(a), _, w, v), b.delay = (+He(c, Ft(a), _, w, v) || 0) - a._delay, !f && S === 1 && b.delay && (a._delay = c = b.delay, a._start += c, b.delay = 0), T.to(w, b, C ? C(_, w, v) : 0), T._ease = V.none;
        T.duration() ? l = c = 0 : a.timeline = 0;
      } else if (m) {
        $e(yt(T.vars.defaults, { ease: "none" })), T._ease = de(m.ease || s.ease || "none");
        var E = 0, k, X, K;
        if (nt(m)) m.forEach(function(G) {
          return T.to(v, G, ">");
        }), T.duration();
        else {
          b = {};
          for (P in m) P === "ease" || P === "easeEach" || zl(P, m[P], b, m.easeEach);
          for (P in b) for (k = b[P].sort(function(G, D) {
            return G.t - D.t;
          }), E = 0, _ = 0; _ < k.length; _++) X = k[_], K = { ease: X.e, duration: (X.t - (_ ? k[_ - 1].t : 0)) / 100 * l }, K[P] = X.v, T.to(v, K, E), E += K.duration;
          T.duration() < l && T.to({}, { duration: l - T.duration() });
        }
      }
      l || a.duration(l = T.duration());
    } else a.timeline = 0;
    return p === true && !is && (Wt = Ft(a), N.killTweensOf(v), Wt = 0), Vt(x, Ft(a), r), s.reversed && a.reverse(), s.paused && a.paused(true), (h || !l && !m && a._start === Z(x._time) && at(h) && vl(Ft(a)) && x.data !== "nested") && (a._tTime = -L, a.render(Math.max(0, -c) || 0)), g && $o(Ft(a), g), a;
  }
  var i = t.prototype;
  return i.render = function(s, r, o) {
    var a = this._time, u = this._tDur, l = this._dur, c = s < 0, h = s > u - L && !c ? u : s < L ? 0 : s, f, p, m, d, g, y, x, v, T;
    if (!l) Tl(this, s, r, o);
    else if (h !== this._tTime || !s || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (f = h, v = this.timeline, this._repeat) {
        if (d = l + this._rDelay, this._repeat < -1 && c) return this.totalTime(d * 100 + s, r, o);
        if (f = Z(h % d), h === u ? (m = this._repeat, f = l) : (g = Z(h / d), m = ~~g, m && m === g ? (f = l, m--) : f > l && (f = l)), y = this._yoyo && m & 1, y && (T = this._yEase, f = l - f), g = Oe(this._tTime, d), f === a && !o && this._initted && m === g) return this._tTime = h, this;
        m !== g && (v && this._yEase && ua(v, y), this.vars.repeatRefresh && !y && !this._lock && f !== d && this._initted && (this._lock = o = 1, this.render(Z(d * m), true).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Xo(this, c ? s : f, o, r, h)) return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && m !== g)) return this;
        if (l !== this._dur) return this.render(s, r, o);
      }
      if (this._tTime = h, this._time = f, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = x = (T || this._ease)(f / l), this._from && (this.ratio = x = 1 - x), !a && h && !r && !g && (pt(this, "onStart"), this._tTime !== h)) return this;
      for (p = this._pt; p; ) p.r(x, p.d), p = p._next;
      v && v.render(s < 0 ? s : v._dur * v._ease(f / this._dur), r, o) || this._startAt && (this._zTime = s), this._onUpdate && !r && (c && bn(this, s, r, o), pt(this, "onUpdate")), this._repeat && m !== g && this.vars.onRepeat && !r && this.parent && pt(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (c && !this._onUpdate && bn(this, s, true, true), (s || !l) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Xt(this, 1), !r && !(c && !a) && (h || a || y) && (pt(this, h === u ? "onComplete" : "onReverseComplete", true), this._prom && !(h < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, i.targets = function() {
    return this._targets;
  }, i.invalidate = function(s) {
    return (!s || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(s), e15.prototype.invalidate.call(this, s);
  }, i.resetTo = function(s, r, o, a, u) {
    si || dt.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || fs(this, l), c = this._ease(l / this._dur), jl(this, s, r, o, a, c, l, u) ? this.resetTo(s, r, o, a, 1) : (Ki(this, 0), this.parent || Go(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, i.kill = function(s, r) {
    if (r === void 0 && (r = "all"), !s && (!r || r === "all")) return this._lazy = this._pt = 0, this.parent ? Ke(this) : this.scrollTrigger && this.scrollTrigger.kill(!!tt), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(s, r, Wt && Wt.vars.overwrite !== true)._first || Ke(this), this.parent && o !== this.timeline.totalDuration() && Le(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, u = s ? wt(s) : a, l = this._ptLookup, c = this._pt, h, f, p, m, d, g, y;
    if ((!r || r === "all") && yl(a, u)) return r === "all" && (this._pt = 0), Ke(this);
    for (h = this._op = this._op || [], r !== "all" && (Q(r) && (d = {}, ut(r, function(x) {
      return d[x] = 1;
    }), r = d), r = Ul(a, r)), y = a.length; y--; ) if (~u.indexOf(a[y])) {
      f = l[y], r === "all" ? (h[y] = r, m = f, p = {}) : (p = h[y] = h[y] || {}, m = r);
      for (d in m) g = f && f[d], g && ((!("kill" in g.d) || g.d.kill(d) === true) && zi(this, g, "_pt"), delete f[d]), p !== "all" && (p[d] = 1);
    }
    return this._initted && !this._pt && c && Ke(this), this;
  }, t.to = function(s, r) {
    return new t(s, r, arguments[2]);
  }, t.from = function(s, r) {
    return Xe(1, arguments);
  }, t.delayedCall = function(s, r, o, a) {
    return new t(r, 0, { immediateRender: false, lazy: false, overwrite: false, delay: s, onComplete: r, onReverseComplete: r, onCompleteParams: o, onReverseCompleteParams: o, callbackScope: a });
  }, t.fromTo = function(s, r, o) {
    return Xe(2, arguments);
  }, t.set = function(s, r) {
    return r.duration = 0, r.repeatDelay || (r.repeat = 0), new t(s, r);
  }, t.killTweensOf = function(s, r, o) {
    return N.killTweensOf(s, r, o);
  }, t;
})(ri);
yt(q.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
ut("staggerTo,staggerFrom,staggerFromTo", function(e15) {
  q[e15] = function() {
    var t = new st(), i = Sn.call(arguments, 0);
    return i.splice(e15 === "staggerFromTo" ? 5 : 4, 0, 0), t[e15].apply(t, i);
  };
});
var ds = function(t, i, n) {
  return t[i] = n;
}, pa = function(t, i, n) {
  return t[i](n);
}, Wl = function(t, i, n, s) {
  return t[i](s.fp, n);
}, Kl = function(t, i, n) {
  return t.setAttribute(i, n);
}, ps = function(t, i) {
  return W(t[i]) ? pa : ns(t[i]) && t.setAttribute ? Kl : ds;
}, ma = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i);
}, Gl = function(t, i) {
  return i.set(i.t, i.p, !!(i.s + i.c * t), i);
}, ga = function(t, i) {
  var n = i._pt, s = "";
  if (!t && i.b) s = i.b;
  else if (t === 1 && i.e) s = i.e;
  else {
    for (; n; ) s = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round((n.s + n.c * t) * 1e4) / 1e4) + s, n = n._next;
    s += i.c;
  }
  i.set(i.t, i.p, s, i);
}, ms = function(t, i) {
  for (var n = i._pt; n; ) n.r(t, n.d), n = n._next;
}, Yl = function(t, i, n, s) {
  for (var r = this._pt, o; r; ) o = r._next, r.p === s && r.modifier(t, i, n), r = o;
}, $l = function(t) {
  for (var i = this._pt, n, s; i; ) s = i._next, i.p === t && !i.op || i.op === t ? zi(this, i, "_pt") : i.dep || (n = 1), i = s;
  return !n;
}, Xl = function(t, i, n, s) {
  s.mSet(t, i, s.m.call(s.tween, n, s.mt), s);
}, ya = function(t) {
  for (var i = t._pt, n, s, r, o; i; ) {
    for (n = i._next, s = r; s && s.pr > i.pr; ) s = s._next;
    (i._prev = s ? s._prev : o) ? i._prev._next = i : r = i, (i._next = s) ? s._prev = i : o = i, i = n;
  }
  t._pt = r;
}, lt = (function() {
  function e15(i, n, s, r, o, a, u, l, c) {
    this.t = n, this.s = r, this.c = o, this.p = s, this.r = a || ma, this.d = u || this, this.set = l || ds, this.pr = c || 0, this._next = i, i && (i._prev = this);
  }
  var t = e15.prototype;
  return t.modifier = function(n, s, r) {
    this.mSet = this.mSet || this.set, this.set = Xl, this.m = n, this.mt = r, this.tween = s;
  }, e15;
})();
ut(us + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e15) {
  return as[e15] = 1;
});
gt.TweenMax = gt.TweenLite = q;
gt.TimelineLite = gt.TimelineMax = st;
N = new st({ sortChildren: false, defaults: Ee, autoRemoveChildren: true, id: "root", smoothChildTiming: true });
mt.stringFilter = oa;
var pe = [], Si = {}, Hl = [], ur = 0, ql = 0, Ji = function(t) {
  return (Si[t] || Hl).map(function(i) {
    return i();
  });
}, Dn = function() {
  var t = Date.now(), i = [];
  t - ur > 2 && (Ji("matchMediaInit"), pe.forEach(function(n) {
    var s = n.queries, r = n.conditions, o, a, u, l;
    for (a in s) o = Dt.matchMedia(s[a]).matches, o && (u = 1), o !== r[a] && (r[a] = o, l = 1);
    l && (n.revert(), u && i.push(n));
  }), Ji("matchMediaRevert"), i.forEach(function(n) {
    return n.onMatch(n, function(s) {
      return n.add(null, s);
    });
  }), ur = t, Ji("matchMedia"));
}, _a = (function() {
  function e15(i, n) {
    this.selector = n && An(n), this.data = [], this._r = [], this.isReverted = false, this.id = ql++, i && this.add(i);
  }
  var t = e15.prototype;
  return t.add = function(n, s, r) {
    W(n) && (r = s, s = n, n = W);
    var o = this, a = function() {
      var l = I, c = o.selector, h;
      return l && l !== o && l.data.push(o), r && (o.selector = An(r)), I = o, h = s.apply(o, arguments), W(h) && o._r.push(h), I = l, o.selector = c, o.isReverted = false, h;
    };
    return o.last = a, n === W ? a(o, function(u) {
      return o.add(null, u);
    }) : n ? o[n] = a : a;
  }, t.ignore = function(n) {
    var s = I;
    I = null, n(this), I = s;
  }, t.getTweens = function() {
    var n = [];
    return this.data.forEach(function(s) {
      return s instanceof e15 ? n.push.apply(n, s.getTweens()) : s instanceof q && !(s.parent && s.parent.data === "nested") && n.push(s);
    }), n;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(n, s) {
    var r = this;
    if (n ? (function() {
      for (var a = r.getTweens(), u = r.data.length, l; u--; ) l = r.data[u], l.data === "isFlip" && (l.revert(), l.getChildren(true, true, false).forEach(function(c) {
        return a.splice(a.indexOf(c), 1);
      }));
      for (a.map(function(c) {
        return { g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0, t: c };
      }).sort(function(c, h) {
        return h.g - c.g || -1 / 0;
      }).forEach(function(c) {
        return c.t.revert(n);
      }), u = r.data.length; u--; ) l = r.data[u], l instanceof st ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof q) && l.revert && l.revert(n);
      r._r.forEach(function(c) {
        return c(n, r);
      }), r.isReverted = true;
    })() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), s) for (var o = pe.length; o--; ) pe[o].id === this.id && pe.splice(o, 1);
  }, t.revert = function(n) {
    this.kill(n || {});
  }, e15;
})(), Zl = (function() {
  function e15(i) {
    this.contexts = [], this.scope = i, I && I.data.push(this);
  }
  var t = e15.prototype;
  return t.add = function(n, s, r) {
    Ot(n) || (n = { matches: n });
    var o = new _a(0, r || this.scope), a = o.conditions = {}, u, l, c;
    I && !o.selector && (o.selector = I.selector), this.contexts.push(o), s = o.add("onMatch", s), o.queries = n;
    for (l in n) l === "all" ? c = 1 : (u = Dt.matchMedia(n[l]), u && (pe.indexOf(o) < 0 && pe.push(o), (a[l] = u.matches) && (c = 1), u.addListener ? u.addListener(Dn) : u.addEventListener("change", Dn)));
    return c && s(o, function(h) {
      return o.add(null, h);
    }), this;
  }, t.revert = function(n) {
    this.kill(n || {});
  }, t.kill = function(n) {
    this.contexts.forEach(function(s) {
      return s.kill(n, true);
    });
  }, e15;
})(), Oi = { registerPlugin: function() {
  for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
  i.forEach(function(s) {
    return na(s);
  });
}, timeline: function(t) {
  return new st(t);
}, getTweensOf: function(t, i) {
  return N.getTweensOf(t, i);
}, getProperty: function(t, i, n, s) {
  Q(t) && (t = wt(t)[0]);
  var r = he(t || {}).get, o = n ? Ko : Wo;
  return n === "native" && (n = ""), t && (i ? o((ft[i] && ft[i].get || r)(t, i, n, s)) : function(a, u, l) {
    return o((ft[a] && ft[a].get || r)(t, a, u, l));
  });
}, quickSetter: function(t, i, n) {
  if (t = wt(t), t.length > 1) {
    var s = t.map(function(c) {
      return ht.quickSetter(c, i, n);
    }), r = s.length;
    return function(c) {
      for (var h = r; h--; ) s[h](c);
    };
  }
  t = t[0] || {};
  var o = ft[i], a = he(t), u = a.harness && (a.harness.aliases || {})[i] || i, l = o ? function(c) {
    var h = new o();
    Pe._pt = 0, h.init(t, n ? c + n : c, Pe, 0, [t]), h.render(1, h), Pe._pt && ms(1, Pe);
  } : a.set(t, u);
  return o ? l : function(c) {
    return l(t, u, n ? c + n : c, a, 1);
  };
}, quickTo: function(t, i, n) {
  var s, r = ht.to(t, yt((s = {}, s[i] = "+=0.1", s.paused = true, s.stagger = 0, s), n || {})), o = function(u, l, c) {
    return r.resetTo(i, u, l, c);
  };
  return o.tween = r, o;
}, isTweening: function(t) {
  return N.getTweensOf(t, true).length > 0;
}, defaults: function(t) {
  return t && t.ease && (t.ease = de(t.ease, Ee.ease)), nr(Ee, t || {});
}, config: function(t) {
  return nr(mt, t || {});
}, registerEffect: function(t) {
  var i = t.name, n = t.effect, s = t.plugins, r = t.defaults, o = t.extendTimeline;
  (s || "").split(",").forEach(function(a) {
    return a && !ft[a] && !gt[a] && ei(i + " effect requires " + a + " plugin.");
  }), Hi[i] = function(a, u, l) {
    return n(wt(a), yt(u || {}, r), l);
  }, o && (st.prototype[i] = function(a, u, l) {
    return this.add(Hi[i](a, Ot(u) ? u : (l = u) && {}, this), l);
  });
}, registerEase: function(t, i) {
  V[t] = de(i);
}, parseEase: function(t, i) {
  return arguments.length ? de(t, i) : V;
}, getById: function(t) {
  return N.getById(t);
}, exportRoot: function(t, i) {
  t === void 0 && (t = {});
  var n = new st(t), s, r;
  for (n.smoothChildTiming = at(t.smoothChildTiming), N.remove(n), n._dp = 0, n._time = n._tTime = N._time, s = N._first; s; ) r = s._next, (i || !(!s._dur && s instanceof q && s.vars.onComplete === s._targets[0])) && Vt(n, s, s._start - s._delay), s = r;
  return Vt(N, n, 0), n;
}, context: function(t, i) {
  return t ? new _a(t, i) : I;
}, matchMedia: function(t) {
  return new Zl(t);
}, matchMediaRefresh: function() {
  return pe.forEach(function(t) {
    var i = t.conditions, n, s;
    for (s in i) i[s] && (i[s] = false, n = 1);
    n && t.revert();
  }) || Dn();
}, addEventListener: function(t, i) {
  var n = Si[t] || (Si[t] = []);
  ~n.indexOf(i) || n.push(i);
}, removeEventListener: function(t, i) {
  var n = Si[t], s = n && n.indexOf(i);
  s >= 0 && n.splice(s, 1);
}, utils: { wrap: Dl, wrapYoyo: Vl, distribute: Zo, random: Jo, snap: Qo, normalize: Ml, getUnit: et, clamp: wl, splitColor: sa, toArray: wt, selector: An, mapRange: ea, pipe: Al, unitize: Cl, interpolate: Rl, shuffle: qo }, install: Bo, effects: Hi, ticker: dt, updateRoot: st.updateRoot, plugins: ft, globalTimeline: N, core: { PropTween: lt, globals: No, Tween: q, Timeline: st, Animation: ri, getCache: he, _removeLinkedListItem: zi, reverting: function() {
  return tt;
}, context: function(t) {
  return t && I && (I.data.push(t), t._ctx = I), I;
}, suppressOverwrites: function(t) {
  return is = t;
} } };
ut("to,from,fromTo,delayedCall,set,killTweensOf", function(e15) {
  return Oi[e15] = q[e15];
});
dt.add(st.updateRoot);
Pe = Oi.to({}, { duration: 0 });
var Ql = function(t, i) {
  for (var n = t._pt; n && n.p !== i && n.op !== i && n.fp !== i; ) n = n._next;
  return n;
}, Jl = function(t, i) {
  var n = t._targets, s, r, o;
  for (s in i) for (r = n.length; r--; ) o = t._ptLookup[r][s], o && (o = o.d) && (o._pt && (o = Ql(o, s)), o && o.modifier && o.modifier(i[s], t, n[r], s));
}, tn = function(t, i) {
  return { name: t, headless: 1, rawVars: 1, init: function(s, r, o) {
    o._onInit = function(a) {
      var u, l;
      if (Q(r) && (u = {}, ut(r, function(c) {
        return u[c] = 1;
      }), r = u), i) {
        u = {};
        for (l in r) u[l] = i(r[l]);
        r = u;
      }
      Jl(a, r);
    };
  } };
}, ht = Oi.registerPlugin({ name: "attr", init: function(t, i, n, s, r) {
  var o, a, u;
  this.tween = n;
  for (o in i) u = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (u || 0) + "", i[o], s, r, 0, 0, o), a.op = o, a.b = u, this._props.push(o);
}, render: function(t, i) {
  for (var n = i._pt; n; ) tt ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), n = n._next;
} }, { name: "endArray", headless: 1, init: function(t, i) {
  for (var n = i.length; n--; ) this.add(t, n, t[n] || 0, i[n], 0, 0, 0, 0, 0, 1);
} }, tn("roundProps", Cn), tn("modifiers"), tn("snap", Qo)) || Oi;
q.version = st.version = ht.version = "3.13.0";
Io = 1;
ss() && Fe();
V.Power0;
V.Power1;
V.Power2;
V.Power3;
V.Power4;
V.Linear;
V.Quad;
V.Cubic;
V.Quart;
V.Quint;
V.Strong;
V.Elastic;
V.Back;
V.SteppedEase;
V.Bounce;
V.Sine;
V.Expo;
V.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var lr, Kt, De, gs, ue, cr, ys, tc = function() {
  return typeof window < "u";
}, Nt = {}, oe = 180 / Math.PI, Ve = Math.PI / 180, xe = Math.atan2, hr = 1e8, _s = /([A-Z])/g, ec = /(left|right|width|margin|padding|x)/i, ic = /[\s,\(]\S/, Rt = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" }, Vn = function(t, i) {
  return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, nc = function(t, i) {
  return i.set(i.t, i.p, t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i);
}, sc = function(t, i) {
  return i.set(i.t, i.p, t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i);
}, rc = function(t, i) {
  var n = i.s + i.c * t;
  i.set(i.t, i.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + i.u, i);
}, va = function(t, i) {
  return i.set(i.t, i.p, t ? i.e : i.b, i);
}, xa = function(t, i) {
  return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i);
}, oc = function(t, i, n) {
  return t.style[i] = n;
}, ac = function(t, i, n) {
  return t.style.setProperty(i, n);
}, uc = function(t, i, n) {
  return t._gsap[i] = n;
}, lc = function(t, i, n) {
  return t._gsap.scaleX = t._gsap.scaleY = n;
}, cc = function(t, i, n, s, r) {
  var o = t._gsap;
  o.scaleX = o.scaleY = n, o.renderTransform(r, o);
}, hc = function(t, i, n, s, r) {
  var o = t._gsap;
  o[i] = n, o.renderTransform(r, o);
}, j = "transform", ct = j + "Origin", fc = function e12(t, i) {
  var n = this, s = this.target, r = s.style, o = s._gsap;
  if (t in Nt && r) {
    if (this.tfm = this.tfm || {}, t !== "transform") t = Rt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
      return n.tfm[a] = It(s, a);
    }) : this.tfm[t] = o.x ? o[t] : It(s, t), t === ct && (this.tfm.zOrigin = o.zOrigin);
    else return Rt.transform.split(",").forEach(function(a) {
      return e12.call(n, a, i);
    });
    if (this.props.indexOf(j) >= 0) return;
    o.svg && (this.svgo = s.getAttribute("data-svg-origin"), this.props.push(ct, i, "")), t = j;
  }
  (r || i) && this.props.push(t, i, r[t]);
}, Ta = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, dc = function() {
  var t = this.props, i = this.target, n = i.style, s = i._gsap, r, o;
  for (r = 0; r < t.length; r += 3) t[r + 1] ? t[r + 1] === 2 ? i[t[r]](t[r + 2]) : i[t[r]] = t[r + 2] : t[r + 2] ? n[t[r]] = t[r + 2] : n.removeProperty(t[r].substr(0, 2) === "--" ? t[r] : t[r].replace(_s, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm) s[o] = this.tfm[o];
    s.svg && (s.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), r = ys(), (!r || !r.isStart) && !n[j] && (Ta(n), s.zOrigin && n[ct] && (n[ct] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1);
  }
}, Pa = function(t, i) {
  var n = { target: t, props: [], revert: dc, save: fc };
  return t._gsap || ht.core.getCache(t), i && t.style && t.nodeType && i.split(",").forEach(function(s) {
    return n.save(s);
  }), n;
}, ba, Rn = function(t, i) {
  var n = Kt.createElementNS ? Kt.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Kt.createElement(t);
  return n && n.style ? n : Kt.createElement(t);
}, St = function e13(t, i, n) {
  var s = getComputedStyle(t);
  return s[i] || s.getPropertyValue(i.replace(_s, "-$1").toLowerCase()) || s.getPropertyValue(i) || !n && e13(t, Ie(i) || i, 1) || "";
}, fr = "O,Moz,ms,Ms,Webkit".split(","), Ie = function(t, i, n) {
  var s = i || ue, r = s.style, o = 5;
  if (t in r && !n) return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(fr[o] + t in r); ) ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? fr[o] : "") + t;
}, En = function() {
  tc() && window.document && (lr = window, Kt = lr.document, De = Kt.documentElement, ue = Rn("div") || { style: {} }, Rn("div"), j = Ie(j), ct = j + "Origin", ue.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ba = !!Ie("perspective"), ys = ht.core.reverting, gs = 1);
}, dr = function(t) {
  var i = t.ownerSVGElement, n = Rn("svg", i && i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), s = t.cloneNode(true), r;
  s.style.display = "block", n.appendChild(s), De.appendChild(n);
  try {
    r = s.getBBox();
  } catch {
  }
  return n.removeChild(s), De.removeChild(n), r;
}, pr = function(t, i) {
  for (var n = i.length; n--; ) if (t.hasAttribute(i[n])) return t.getAttribute(i[n]);
}, wa = function(t) {
  var i, n;
  try {
    i = t.getBBox();
  } catch {
    i = dr(t), n = 1;
  }
  return i && (i.width || i.height) || n || (i = dr(t)), i && !i.width && !i.x && !i.y ? { x: +pr(t, ["x", "cx", "x1"]) || 0, y: +pr(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } : i;
}, Sa = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && wa(t));
}, ye = function(t, i) {
  if (i) {
    var n = t.style, s;
    i in Nt && i !== ct && (i = j), n.removeProperty ? (s = i.substr(0, 2), (s === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i), n.removeProperty(s === "--" ? i : i.replace(_s, "-$1").toLowerCase())) : n.removeAttribute(i);
  }
}, Gt = function(t, i, n, s, r, o) {
  var a = new lt(t._pt, i, n, 0, 1, o ? xa : va);
  return t._pt = a, a.b = s, a.e = r, t._props.push(n), a;
}, mr = { deg: 1, rad: 1, turn: 1 }, pc = { grid: 1, flex: 1 }, Ht = function e14(t, i, n, s) {
  var r = parseFloat(n) || 0, o = (n + "").trim().substr((r + "").length) || "px", a = ue.style, u = ec.test(i), l = t.tagName.toLowerCase() === "svg", c = (l ? "client" : "offset") + (u ? "Width" : "Height"), h = 100, f = s === "px", p = s === "%", m, d, g, y;
  if (s === o || !r || mr[s] || mr[o]) return r;
  if (o !== "px" && !f && (r = e14(t, i, n, "px")), y = t.getCTM && Sa(t), (p || o === "%") && (Nt[i] || ~i.indexOf("adius"))) return m = y ? t.getBBox()[u ? "width" : "height"] : t[c], $(p ? r / m * h : r / 100 * m);
  if (a[u ? "width" : "height"] = h + (f ? o : s), d = s !== "rem" && ~i.indexOf("adius") || s === "em" && t.appendChild && !l ? t : t.parentNode, y && (d = (t.ownerSVGElement || {}).parentNode), (!d || d === Kt || !d.appendChild) && (d = Kt.body), g = d._gsap, g && p && g.width && u && g.time === dt.time && !g.uncache) return $(r / g.width * h);
  if (p && (i === "height" || i === "width")) {
    var x = t.style[i];
    t.style[i] = h + s, m = t[c], x ? t.style[i] = x : ye(t, i);
  } else (p || o === "%") && !pc[St(d, "display")] && (a.position = St(t, "position")), d === t && (a.position = "static"), d.appendChild(ue), m = ue[c], d.removeChild(ue), a.position = "absolute";
  return u && p && (g = he(d), g.time = dt.time, g.width = d[c]), $(f ? m * r / h : m && r ? h / m * r : 0);
}, It = function(t, i, n, s) {
  var r;
  return gs || En(), i in Rt && i !== "transform" && (i = Rt[i], ~i.indexOf(",") && (i = i.split(",")[0])), Nt[i] && i !== "transform" ? (r = ai(t, s), r = i !== "transformOrigin" ? r[i] : r.svg ? r.origin : Fi(St(t, ct)) + " " + r.zOrigin + "px") : (r = t.style[i], (!r || r === "auto" || s || ~(r + "").indexOf("calc(")) && (r = Li[i] && Li[i](t, i, n) || St(t, i) || Uo(t, i) || (i === "opacity" ? 1 : 0))), n && !~(r + "").trim().indexOf(" ") ? Ht(t, i, r, n) + n : r;
}, mc = function(t, i, n, s) {
  if (!n || n === "none") {
    var r = Ie(i, t, 1), o = r && St(t, r, 1);
    o && o !== n ? (i = r, n = o) : i === "borderColor" && (n = St(t, "borderTopColor"));
  }
  var a = new lt(this._pt, t.style, i, 0, 1, ga), u = 0, l = 0, c, h, f, p, m, d, g, y, x, v, T, _;
  if (a.b = n, a.e = s, n += "", s += "", s.substring(0, 6) === "var(--" && (s = St(t, s.substring(4, s.indexOf(")")))), s === "auto" && (d = t.style[i], t.style[i] = s, s = St(t, i) || s, d ? t.style[i] = d : ye(t, i)), c = [n, s], oa(c), n = c[0], s = c[1], f = n.match(Te) || [], _ = s.match(Te) || [], _.length) {
    for (; h = Te.exec(s); ) g = h[0], x = s.substring(u, h.index), m ? m = (m + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (m = 1), g !== (d = f[l++] || "") && (p = parseFloat(d) || 0, T = d.substr((p + "").length), g.charAt(1) === "=" && (g = Me(p, g) + T), y = parseFloat(g), v = g.substr((y + "").length), u = Te.lastIndex - v.length, v || (v = v || mt.units[i] || T, u === s.length && (s += v, a.e += v)), T !== v && (p = Ht(t, i, d, v) || 0), a._pt = { _next: a._pt, p: x || l === 1 ? x : ",", s: p, c: y - p, m: m && m < 4 || i === "zIndex" ? Math.round : 0 });
    a.c = u < s.length ? s.substring(u, s.length) : "";
  } else a.r = i === "display" && s === "none" ? xa : va;
  return Lo.test(s) && (a.e = 0), this._pt = a, a;
}, gr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" }, gc = function(t) {
  var i = t.split(" "), n = i[0], s = i[1] || "50%";
  return (n === "top" || n === "bottom" || s === "left" || s === "right") && (t = n, n = s, s = t), i[0] = gr[n] || n, i[1] = gr[s] || s, i.join(" ");
}, yc = function(t, i) {
  if (i.tween && i.tween._time === i.tween._dur) {
    var n = i.t, s = n.style, r = i.u, o = n._gsap, a, u, l;
    if (r === "all" || r === true) s.cssText = "", u = 1;
    else for (r = r.split(","), l = r.length; --l > -1; ) a = r[l], Nt[a] && (u = 1, a = a === "transformOrigin" ? ct : j), ye(n, a);
    u && (ye(n, j), o && (o.svg && n.removeAttribute("transform"), s.scale = s.rotate = s.translate = "none", ai(n, 1), o.uncache = 1, Ta(s)));
  }
}, Li = { clearProps: function(t, i, n, s, r) {
  if (r.data !== "isFromStart") {
    var o = t._pt = new lt(t._pt, i, n, 0, 0, yc);
    return o.u = s, o.pr = -10, o.tween = r, t._props.push(n), 1;
  }
} }, oi = [1, 0, 0, 1, 0, 0], Aa = {}, Ca = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, yr = function(t) {
  var i = St(t, j);
  return Ca(i) ? oi : i.substr(7).match(Oo).map($);
}, vs = function(t, i) {
  var n = t._gsap || he(t), s = t.style, r = yr(t), o, a, u, l;
  return n.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix, r = [u.a, u.b, u.c, u.d, u.e, u.f], r.join(",") === "1,0,0,1,0,0" ? oi : r) : (r === oi && !t.offsetParent && t !== De && !n.svg && (u = s.display, s.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (l = 1, a = t.nextElementSibling, De.appendChild(t)), r = yr(t), u ? s.display = u : ye(t, "display"), l && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : De.removeChild(t))), i && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
}, kn = function(t, i, n, s, r, o) {
  var a = t._gsap, u = r || vs(t, true), l = a.xOrigin || 0, c = a.yOrigin || 0, h = a.xOffset || 0, f = a.yOffset || 0, p = u[0], m = u[1], d = u[2], g = u[3], y = u[4], x = u[5], v = i.split(" "), T = parseFloat(v[0]) || 0, _ = parseFloat(v[1]) || 0, b, S, P, w;
  n ? u !== oi && (S = p * g - m * d) && (P = T * (g / S) + _ * (-d / S) + (d * x - g * y) / S, w = T * (-m / S) + _ * (p / S) - (p * x - m * y) / S, T = P, _ = w) : (b = wa(t), T = b.x + (~v[0].indexOf("%") ? T / 100 * b.width : T), _ = b.y + (~(v[1] || v[0]).indexOf("%") ? _ / 100 * b.height : _)), s || s !== false && a.smooth ? (y = T - l, x = _ - c, a.xOffset = h + (y * p + x * d) - y, a.yOffset = f + (y * m + x * g) - x) : a.xOffset = a.yOffset = 0, a.xOrigin = T, a.yOrigin = _, a.smooth = !!s, a.origin = i, a.originIsAbsolute = !!n, t.style[ct] = "0px 0px", o && (Gt(o, a, "xOrigin", l, T), Gt(o, a, "yOrigin", c, _), Gt(o, a, "xOffset", h, a.xOffset), Gt(o, a, "yOffset", f, a.yOffset)), t.setAttribute("data-svg-origin", T + " " + _);
}, ai = function(t, i) {
  var n = t._gsap || new ca(t);
  if ("x" in n && !i && !n.uncache) return n;
  var s = t.style, r = n.scaleX < 0, o = "px", a = "deg", u = getComputedStyle(t), l = St(t, ct) || "0", c, h, f, p, m, d, g, y, x, v, T, _, b, S, P, w, C, R, E, k, X, K, G, D, F, _t, vt, te, ee, er, Lt, ie;
  return c = h = f = d = g = y = x = v = T = 0, p = m = 1, n.svg = !!(t.getCTM && Sa(t)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (s[j] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[j] !== "none" ? u[j] : "")), s.scale = s.rotate = s.translate = "none"), S = vs(t, n.svg), n.svg && (n.uncache ? (F = t.getBBox(), l = n.xOrigin - F.x + "px " + (n.yOrigin - F.y) + "px", D = "") : D = !i && t.getAttribute("data-svg-origin"), kn(t, D || l, !!D || n.originIsAbsolute, n.smooth !== false, S)), _ = n.xOrigin || 0, b = n.yOrigin || 0, S !== oi && (R = S[0], E = S[1], k = S[2], X = S[3], c = K = S[4], h = G = S[5], S.length === 6 ? (p = Math.sqrt(R * R + E * E), m = Math.sqrt(X * X + k * k), d = R || E ? xe(E, R) * oe : 0, x = k || X ? xe(k, X) * oe + d : 0, x && (m *= Math.abs(Math.cos(x * Ve))), n.svg && (c -= _ - (_ * R + b * k), h -= b - (_ * E + b * X))) : (ie = S[6], er = S[7], vt = S[8], te = S[9], ee = S[10], Lt = S[11], c = S[12], h = S[13], f = S[14], P = xe(ie, ee), g = P * oe, P && (w = Math.cos(-P), C = Math.sin(-P), D = K * w + vt * C, F = G * w + te * C, _t = ie * w + ee * C, vt = K * -C + vt * w, te = G * -C + te * w, ee = ie * -C + ee * w, Lt = er * -C + Lt * w, K = D, G = F, ie = _t), P = xe(-k, ee), y = P * oe, P && (w = Math.cos(-P), C = Math.sin(-P), D = R * w - vt * C, F = E * w - te * C, _t = k * w - ee * C, Lt = X * C + Lt * w, R = D, E = F, k = _t), P = xe(E, R), d = P * oe, P && (w = Math.cos(P), C = Math.sin(P), D = R * w + E * C, F = K * w + G * C, E = E * w - R * C, G = G * w - K * C, R = D, K = F), g && Math.abs(g) + Math.abs(d) > 359.9 && (g = d = 0, y = 180 - y), p = $(Math.sqrt(R * R + E * E + k * k)), m = $(Math.sqrt(G * G + ie * ie)), P = xe(K, G), x = Math.abs(P) > 2e-4 ? P * oe : 0, T = Lt ? 1 / (Lt < 0 ? -Lt : Lt) : 0), n.svg && (D = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !Ca(St(t, j)), D && t.setAttribute("transform", D))), Math.abs(x) > 90 && Math.abs(x) < 270 && (r ? (p *= -1, x += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (m *= -1, x += x <= 0 ? 180 : -180)), i = i || n.uncache, n.x = c - ((n.xPercent = c && (!i && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + o, n.y = h - ((n.yPercent = h && (!i && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + o, n.z = f + o, n.scaleX = $(p), n.scaleY = $(m), n.rotation = $(d) + a, n.rotationX = $(g) + a, n.rotationY = $(y) + a, n.skewX = x + a, n.skewY = v + a, n.transformPerspective = T + o, (n.zOrigin = parseFloat(l.split(" ")[2]) || !i && n.zOrigin || 0) && (s[ct] = Fi(l)), n.xOffset = n.yOffset = 0, n.force3D = mt.force3D, n.renderTransform = n.svg ? vc : ba ? Ma : _c, n.uncache = 0, n;
}, Fi = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, en = function(t, i, n) {
  var s = et(i);
  return $(parseFloat(i) + parseFloat(Ht(t, "x", n + "px", s))) + s;
}, _c = function(t, i) {
  i.z = "0px", i.rotationY = i.rotationX = "0deg", i.force3D = 0, Ma(t, i);
}, ne = "0deg", ze = "0px", se = ") ", Ma = function(t, i) {
  var n = i || this, s = n.xPercent, r = n.yPercent, o = n.x, a = n.y, u = n.z, l = n.rotation, c = n.rotationY, h = n.rotationX, f = n.skewX, p = n.skewY, m = n.scaleX, d = n.scaleY, g = n.transformPerspective, y = n.force3D, x = n.target, v = n.zOrigin, T = "", _ = y === "auto" && t && t !== 1 || y === true;
  if (v && (h !== ne || c !== ne)) {
    var b = parseFloat(c) * Ve, S = Math.sin(b), P = Math.cos(b), w;
    b = parseFloat(h) * Ve, w = Math.cos(b), o = en(x, o, S * w * -v), a = en(x, a, -Math.sin(b) * -v), u = en(x, u, P * w * -v + v);
  }
  g !== ze && (T += "perspective(" + g + se), (s || r) && (T += "translate(" + s + "%, " + r + "%) "), (_ || o !== ze || a !== ze || u !== ze) && (T += u !== ze || _ ? "translate3d(" + o + ", " + a + ", " + u + ") " : "translate(" + o + ", " + a + se), l !== ne && (T += "rotate(" + l + se), c !== ne && (T += "rotateY(" + c + se), h !== ne && (T += "rotateX(" + h + se), (f !== ne || p !== ne) && (T += "skew(" + f + ", " + p + se), (m !== 1 || d !== 1) && (T += "scale(" + m + ", " + d + se), x.style[j] = T || "translate(0, 0)";
}, vc = function(t, i) {
  var n = i || this, s = n.xPercent, r = n.yPercent, o = n.x, a = n.y, u = n.rotation, l = n.skewX, c = n.skewY, h = n.scaleX, f = n.scaleY, p = n.target, m = n.xOrigin, d = n.yOrigin, g = n.xOffset, y = n.yOffset, x = n.forceCSS, v = parseFloat(o), T = parseFloat(a), _, b, S, P, w;
  u = parseFloat(u), l = parseFloat(l), c = parseFloat(c), c && (c = parseFloat(c), l += c, u += c), u || l ? (u *= Ve, l *= Ve, _ = Math.cos(u) * h, b = Math.sin(u) * h, S = Math.sin(u - l) * -f, P = Math.cos(u - l) * f, l && (c *= Ve, w = Math.tan(l - c), w = Math.sqrt(1 + w * w), S *= w, P *= w, c && (w = Math.tan(c), w = Math.sqrt(1 + w * w), _ *= w, b *= w)), _ = $(_), b = $(b), S = $(S), P = $(P)) : (_ = h, P = f, b = S = 0), (v && !~(o + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (v = Ht(p, "x", o, "px"), T = Ht(p, "y", a, "px")), (m || d || g || y) && (v = $(v + m - (m * _ + d * S) + g), T = $(T + d - (m * b + d * P) + y)), (s || r) && (w = p.getBBox(), v = $(v + s / 100 * w.width), T = $(T + r / 100 * w.height)), w = "matrix(" + _ + "," + b + "," + S + "," + P + "," + v + "," + T + ")", p.setAttribute("transform", w), x && (p.style[j] = w);
}, xc = function(t, i, n, s, r) {
  var o = 360, a = Q(r), u = parseFloat(r) * (a && ~r.indexOf("rad") ? oe : 1), l = u - s, c = s + l + "deg", h, f;
  return a && (h = r.split("_")[1], h === "short" && (l %= o, l !== l % (o / 2) && (l += l < 0 ? o : -o)), h === "cw" && l < 0 ? l = (l + o * hr) % o - ~~(l / o) * o : h === "ccw" && l > 0 && (l = (l - o * hr) % o - ~~(l / o) * o)), t._pt = f = new lt(t._pt, i, n, s, l, nc), f.e = c, f.u = "deg", t._props.push(n), f;
}, _r = function(t, i) {
  for (var n in i) t[n] = i[n];
  return t;
}, Tc = function(t, i, n) {
  var s = _r({}, n._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", o = n.style, a, u, l, c, h, f, p, m;
  s.svg ? (l = n.getAttribute("transform"), n.setAttribute("transform", ""), o[j] = i, a = ai(n, 1), ye(n, j), n.setAttribute("transform", l)) : (l = getComputedStyle(n)[j], o[j] = i, a = ai(n, 1), o[j] = l);
  for (u in Nt) l = s[u], c = a[u], l !== c && r.indexOf(u) < 0 && (p = et(l), m = et(c), h = p !== m ? Ht(n, u, l, m) : parseFloat(l), f = parseFloat(c), t._pt = new lt(t._pt, a, u, h, f - h, Vn), t._pt.u = m || 0, t._props.push(u));
  _r(a, s);
};
ut("padding,margin,Width,Radius", function(e15, t) {
  var i = "Top", n = "Right", s = "Bottom", r = "Left", o = (t < 3 ? [i, n, s, r] : [i + r, i + n, s + n, s + r]).map(function(a) {
    return t < 2 ? e15 + a : "border" + a + e15;
  });
  Li[t > 1 ? "border" + e15 : e15] = function(a, u, l, c, h) {
    var f, p;
    if (arguments.length < 4) return f = o.map(function(m) {
      return It(a, m, l);
    }), p = f.join(" "), p.split(f[0]).length === 5 ? f[0] : p;
    f = (c + "").split(" "), p = {}, o.forEach(function(m, d) {
      return p[m] = f[d] = f[d] || f[(d - 1) / 2 | 0];
    }), a.init(u, p, h);
  };
});
var Da = { name: "css", register: En, targetTest: function(t) {
  return t.style && t.nodeType;
}, init: function(t, i, n, s, r) {
  var o = this._props, a = t.style, u = n.vars.startAt, l, c, h, f, p, m, d, g, y, x, v, T, _, b, S, P;
  gs || En(), this.styles = this.styles || Pa(t), P = this.styles.props, this.tween = n;
  for (d in i) if (d !== "autoRound" && (c = i[d], !(ft[d] && ha(d, i, n, s, t, r)))) {
    if (p = typeof c, m = Li[d], p === "function" && (c = c.call(n, s, t, r), p = typeof c), p === "string" && ~c.indexOf("random(") && (c = ni(c)), m) m(this, t, d, c, n) && (S = 1);
    else if (d.substr(0, 2) === "--") l = (getComputedStyle(t).getPropertyValue(d) + "").trim(), c += "", $t.lastIndex = 0, $t.test(l) || (g = et(l), y = et(c)), y ? g !== y && (l = Ht(t, d, l, y) + y) : g && (c += g), this.add(a, "setProperty", l, c, s, r, 0, 0, d), o.push(d), P.push(d, 0, a[d]);
    else if (p !== "undefined") {
      if (u && d in u ? (l = typeof u[d] == "function" ? u[d].call(n, s, t, r) : u[d], Q(l) && ~l.indexOf("random(") && (l = ni(l)), et(l + "") || l === "auto" || (l += mt.units[d] || et(It(t, d)) || ""), (l + "").charAt(1) === "=" && (l = It(t, d))) : l = It(t, d), f = parseFloat(l), x = p === "string" && c.charAt(1) === "=" && c.substr(0, 2), x && (c = c.substr(2)), h = parseFloat(c), d in Rt && (d === "autoAlpha" && (f === 1 && It(t, "visibility") === "hidden" && h && (f = 0), P.push("visibility", 0, a.visibility), Gt(this, a, "visibility", f ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), d !== "scale" && d !== "transform" && (d = Rt[d], ~d.indexOf(",") && (d = d.split(",")[0]))), v = d in Nt, v) {
        if (this.styles.save(d), p === "string" && c.substring(0, 6) === "var(--" && (c = St(t, c.substring(4, c.indexOf(")"))), h = parseFloat(c)), T || (_ = t._gsap, _.renderTransform && !i.parseTransform || ai(t, i.parseTransform), b = i.smoothOrigin !== false && _.smooth, T = this._pt = new lt(this._pt, a, j, 0, 1, _.renderTransform, _, 0, -1), T.dep = 1), d === "scale") this._pt = new lt(this._pt, _, "scaleY", _.scaleY, (x ? Me(_.scaleY, x + h) : h) - _.scaleY || 0, Vn), this._pt.u = 0, o.push("scaleY", d), d += "X";
        else if (d === "transformOrigin") {
          P.push(ct, 0, a[ct]), c = gc(c), _.svg ? kn(t, c, 0, b, 0, this) : (y = parseFloat(c.split(" ")[2]) || 0, y !== _.zOrigin && Gt(this, _, "zOrigin", _.zOrigin, y), Gt(this, a, d, Fi(l), Fi(c)));
          continue;
        } else if (d === "svgOrigin") {
          kn(t, c, 1, b, 0, this);
          continue;
        } else if (d in Aa) {
          xc(this, _, d, f, x ? Me(f, x + c) : c);
          continue;
        } else if (d === "smoothOrigin") {
          Gt(this, _, "smooth", _.smooth, c);
          continue;
        } else if (d === "force3D") {
          _[d] = c;
          continue;
        } else if (d === "transform") {
          Tc(this, c, t);
          continue;
        }
      } else d in a || (d = Ie(d) || d);
      if (v || (h || h === 0) && (f || f === 0) && !ic.test(c) && d in a) g = (l + "").substr((f + "").length), h || (h = 0), y = et(c) || (d in mt.units ? mt.units[d] : g), g !== y && (f = Ht(t, d, l, y)), this._pt = new lt(this._pt, v ? _ : a, d, f, (x ? Me(f, x + h) : h) - f, !v && (y === "px" || d === "zIndex") && i.autoRound !== false ? rc : Vn), this._pt.u = y || 0, g !== y && y !== "%" && (this._pt.b = l, this._pt.r = sc);
      else if (d in a) mc.call(this, t, d, l, x ? x + c : c);
      else if (d in t) this.add(t, d, l || t[d], x ? x + c : c, s, r);
      else if (d !== "parseTransform") {
        os(d, c);
        continue;
      }
      v || (d in a ? P.push(d, 0, a[d]) : typeof t[d] == "function" ? P.push(d, 2, t[d]()) : P.push(d, 1, l || t[d])), o.push(d);
    }
  }
  S && ya(this);
}, render: function(t, i) {
  if (i.tween._time || !ys()) for (var n = i._pt; n; ) n.r(t, n.d), n = n._next;
  else i.styles.revert();
}, get: It, aliases: Rt, getSetter: function(t, i, n) {
  var s = Rt[i];
  return s && s.indexOf(",") < 0 && (i = s), i in Nt && i !== ct && (t._gsap.x || It(t, "x")) ? n && cr === n ? i === "scale" ? lc : uc : (cr = n || {}) && (i === "scale" ? cc : hc) : t.style && !ns(t.style[i]) ? oc : ~i.indexOf("-") ? ac : ps(t, i);
}, core: { _removeProperty: ye, _getMatrix: vs } };
ht.utils.checkPrefix = Ie;
ht.core.getStyleSaver = Pa;
(function(e15, t, i, n) {
  var s = ut(e15 + "," + t + "," + i, function(r) {
    Nt[r] = 1;
  });
  ut(t, function(r) {
    mt.units[r] = "deg", Aa[r] = 1;
  }), Rt[s[13]] = e15 + "," + t, ut(n, function(r) {
    var o = r.split(":");
    Rt[o[1]] = s[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ut("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e15) {
  mt.units[e15] = "px";
});
ht.registerPlugin(Da);
var Pc = ht.registerPlugin(Da) || ht;
Pc.core.Tween;
const Va = M.createContext({});
function xs(e15) {
  const t = M.useRef(null);
  return t.current === null && (t.current = e15()), t.current;
}
const Ts = typeof window < "u", Ra = Ts ? M.useLayoutEffect : M.useEffect, Ps = M.createContext(null);
function bs(e15, t) {
  e15.indexOf(t) === -1 && e15.push(t);
}
function ws(e15, t) {
  const i = e15.indexOf(t);
  i > -1 && e15.splice(i, 1);
}
const jt = (e15, t, i) => i > t ? t : i < e15 ? e15 : i;
let Ss = () => {
};
const Ut = {}, Ea = (e15) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e15);
function ka(e15) {
  return typeof e15 == "object" && e15 !== null;
}
const Oa = (e15) => /^0[^.\s]+$/u.test(e15);
function As(e15) {
  let t;
  return () => (t === void 0 && (t = e15()), t);
}
const Ct = (e15) => e15, bc = (e15, t) => (i) => t(e15(i)), mi = (...e15) => e15.reduce(bc), ui = (e15, t, i) => {
  const n = t - e15;
  return n === 0 ? 1 : (i - e15) / n;
};
class Cs {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return bs(this.subscriptions, t), () => ws(this.subscriptions, t);
  }
  notify(t, i, n) {
    const s = this.subscriptions.length;
    if (s) if (s === 1) this.subscriptions[0](t, i, n);
    else for (let r = 0; r < s; r++) {
      const o = this.subscriptions[r];
      o && o(t, i, n);
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Et = (e15) => e15 * 1e3, At = (e15) => e15 / 1e3;
function La(e15, t) {
  return t ? e15 * (1e3 / t) : 0;
}
const Fa = (e15, t, i) => (((1 - 3 * i + 3 * t) * e15 + (3 * i - 6 * t)) * e15 + 3 * t) * e15, wc = 1e-7, Sc = 12;
function Ac(e15, t, i, n, s) {
  let r, o, a = 0;
  do
    o = t + (i - t) / 2, r = Fa(o, n, s) - e15, r > 0 ? i = o : t = o;
  while (Math.abs(r) > wc && ++a < Sc);
  return o;
}
function gi(e15, t, i, n) {
  if (e15 === t && i === n) return Ct;
  const s = (r) => Ac(r, 0, 1, e15, i);
  return (r) => r === 0 || r === 1 ? r : Fa(s(r), t, n);
}
const Ia = (e15) => (t) => t <= 0.5 ? e15(2 * t) / 2 : (2 - e15(2 * (1 - t))) / 2, Ba = (e15) => (t) => 1 - e15(1 - t), Na = gi(0.33, 1.53, 0.69, 0.99), Ms = Ba(Na), ja = Ia(Ms), Ua = (e15) => (e15 *= 2) < 1 ? 0.5 * Ms(e15) : 0.5 * (2 - Math.pow(2, -10 * (e15 - 1))), Ds = (e15) => 1 - Math.sin(Math.acos(e15)), za = Ba(Ds), Wa = Ia(Ds), Cc = gi(0.42, 0, 1, 1), Mc = gi(0, 0, 0.58, 1), Ka = gi(0.42, 0, 0.58, 1), Dc = (e15) => Array.isArray(e15) && typeof e15[0] != "number", Ga = (e15) => Array.isArray(e15) && typeof e15[0] == "number", Vc = { linear: Ct, easeIn: Cc, easeInOut: Ka, easeOut: Mc, circIn: Ds, circInOut: Wa, circOut: za, backIn: Ms, backInOut: ja, backOut: Na, anticipate: Ua }, Rc = (e15) => typeof e15 == "string", vr = (e15) => {
  if (Ga(e15)) {
    Ss(e15.length === 4);
    const [t, i, n, s] = e15;
    return gi(t, i, n, s);
  } else if (Rc(e15)) return Vc[e15];
  return e15;
}, xi = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function Ec(e15, t) {
  let i = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), s = false, r = false;
  const o = /* @__PURE__ */ new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: false };
  function u(c) {
    o.has(c) && (l.schedule(c), e15()), c(a);
  }
  const l = { schedule: (c, h = false, f = false) => {
    const m = f && s ? i : n;
    return h && o.add(c), m.has(c) || m.add(c), c;
  }, cancel: (c) => {
    n.delete(c), o.delete(c);
  }, process: (c) => {
    if (a = c, s) {
      r = true;
      return;
    }
    s = true, [i, n] = [n, i], i.forEach(u), i.clear(), s = false, r && (r = false, l.process(c));
  } };
  return l;
}
const kc = 40;
function Ya(e15, t) {
  let i = false, n = true;
  const s = { delta: 0, timestamp: 0, isProcessing: false }, r = () => i = true, o = xi.reduce((v, T) => (v[T] = Ec(r), v), {}), { setup: a, read: u, resolveKeyframes: l, preUpdate: c, update: h, preRender: f, render: p, postRender: m } = o, d = () => {
    const v = Ut.useManualTiming ? s.timestamp : performance.now();
    i = false, Ut.useManualTiming || (s.delta = n ? 1e3 / 60 : Math.max(Math.min(v - s.timestamp, kc), 1)), s.timestamp = v, s.isProcessing = true, a.process(s), u.process(s), l.process(s), c.process(s), h.process(s), f.process(s), p.process(s), m.process(s), s.isProcessing = false, i && t && (n = false, e15(d));
  }, g = () => {
    i = true, n = true, s.isProcessing || e15(d);
  };
  return { schedule: xi.reduce((v, T) => {
    const _ = o[T];
    return v[T] = (b, S = false, P = false) => (i || g(), _.schedule(b, S, P)), v;
  }, {}), cancel: (v) => {
    for (let T = 0; T < xi.length; T++) o[xi[T]].cancel(v);
  }, state: s, steps: o };
}
const { schedule: B, cancel: qt, state: J, steps: nn } = Ya(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ct, true);
let Ai;
function Oc() {
  Ai = void 0;
}
const ot = { now: () => (Ai === void 0 && ot.set(J.isProcessing || Ut.useManualTiming ? J.timestamp : performance.now()), Ai), set: (e15) => {
  Ai = e15, queueMicrotask(Oc);
} }, $a = (e15) => (t) => typeof t == "string" && t.startsWith(e15), Vs = $a("--"), Lc = $a("var(--"), Rs = (e15) => Lc(e15) ? Fc.test(e15.split("/*")[0].trim()) : false, Fc = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Ne = { test: (e15) => typeof e15 == "number", parse: parseFloat, transform: (e15) => e15 }, li = { ...Ne, transform: (e15) => jt(0, 1, e15) }, Ti = { ...Ne, default: 1 }, qe = (e15) => Math.round(e15 * 1e5) / 1e5, Es = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ic(e15) {
  return e15 == null;
}
const Bc = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, ks = (e15, t) => (i) => !!(typeof i == "string" && Bc.test(i) && i.startsWith(e15) || t && !Ic(i) && Object.prototype.hasOwnProperty.call(i, t)), Xa = (e15, t, i) => (n) => {
  if (typeof n != "string") return n;
  const [s, r, o, a] = n.match(Es);
  return { [e15]: parseFloat(s), [t]: parseFloat(r), [i]: parseFloat(o), alpha: a !== void 0 ? parseFloat(a) : 1 };
}, Nc = (e15) => jt(0, 255, e15), sn = { ...Ne, transform: (e15) => Math.round(Nc(e15)) }, le = { test: ks("rgb", "red"), parse: Xa("red", "green", "blue"), transform: ({ red: e15, green: t, blue: i, alpha: n = 1 }) => "rgba(" + sn.transform(e15) + ", " + sn.transform(t) + ", " + sn.transform(i) + ", " + qe(li.transform(n)) + ")" };
function jc(e15) {
  let t = "", i = "", n = "", s = "";
  return e15.length > 5 ? (t = e15.substring(1, 3), i = e15.substring(3, 5), n = e15.substring(5, 7), s = e15.substring(7, 9)) : (t = e15.substring(1, 2), i = e15.substring(2, 3), n = e15.substring(3, 4), s = e15.substring(4, 5), t += t, i += i, n += n, s += s), { red: parseInt(t, 16), green: parseInt(i, 16), blue: parseInt(n, 16), alpha: s ? parseInt(s, 16) / 255 : 1 };
}
const On = { test: ks("#"), parse: jc, transform: le.transform }, yi = (e15) => ({ test: (t) => typeof t == "string" && t.endsWith(e15) && t.split(" ").length === 1, parse: parseFloat, transform: (t) => `${t}${e15}` }), zt = yi("deg"), kt = yi("%"), A = yi("px"), Uc = yi("vh"), zc = yi("vw"), xr = { ...kt, parse: (e15) => kt.parse(e15) / 100, transform: (e15) => kt.transform(e15 * 100) }, be = { test: ks("hsl", "hue"), parse: Xa("hue", "saturation", "lightness"), transform: ({ hue: e15, saturation: t, lightness: i, alpha: n = 1 }) => "hsla(" + Math.round(e15) + ", " + kt.transform(qe(t)) + ", " + kt.transform(qe(i)) + ", " + qe(li.transform(n)) + ")" }, H = { test: (e15) => le.test(e15) || On.test(e15) || be.test(e15), parse: (e15) => le.test(e15) ? le.parse(e15) : be.test(e15) ? be.parse(e15) : On.parse(e15), transform: (e15) => typeof e15 == "string" ? e15 : e15.hasOwnProperty("red") ? le.transform(e15) : be.transform(e15), getAnimatableNone: (e15) => {
  const t = H.parse(e15);
  return t.alpha = 0, H.transform(t);
} }, Wc = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Kc(e15) {
  var _a2, _b;
  return isNaN(e15) && typeof e15 == "string" && (((_a2 = e15.match(Es)) == null ? void 0 : _a2.length) || 0) + (((_b = e15.match(Wc)) == null ? void 0 : _b.length) || 0) > 0;
}
const Ha = "number", qa = "color", Gc = "var", Yc = "var(", Tr = "${}", $c = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ci(e15) {
  const t = e15.toString(), i = [], n = { color: [], number: [], var: [] }, s = [];
  let r = 0;
  const a = t.replace($c, (u) => (H.test(u) ? (n.color.push(r), s.push(qa), i.push(H.parse(u))) : u.startsWith(Yc) ? (n.var.push(r), s.push(Gc), i.push(u)) : (n.number.push(r), s.push(Ha), i.push(parseFloat(u))), ++r, Tr)).split(Tr);
  return { values: i, split: a, indexes: n, types: s };
}
function Za(e15) {
  return ci(e15).values;
}
function Qa(e15) {
  const { split: t, types: i } = ci(e15), n = t.length;
  return (s) => {
    let r = "";
    for (let o = 0; o < n; o++) if (r += t[o], s[o] !== void 0) {
      const a = i[o];
      a === Ha ? r += qe(s[o]) : a === qa ? r += H.transform(s[o]) : r += s[o];
    }
    return r;
  };
}
const Xc = (e15) => typeof e15 == "number" ? 0 : H.test(e15) ? H.getAnimatableNone(e15) : e15;
function Hc(e15) {
  const t = Za(e15);
  return Qa(e15)(t.map(Xc));
}
const Zt = { test: Kc, parse: Za, createTransformer: Qa, getAnimatableNone: Hc };
function rn(e15, t, i) {
  return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e15 + (t - e15) * 6 * i : i < 1 / 2 ? t : i < 2 / 3 ? e15 + (t - e15) * (2 / 3 - i) * 6 : e15;
}
function qc({ hue: e15, saturation: t, lightness: i, alpha: n }) {
  e15 /= 360, t /= 100, i /= 100;
  let s = 0, r = 0, o = 0;
  if (!t) s = r = o = i;
  else {
    const a = i < 0.5 ? i * (1 + t) : i + t - i * t, u = 2 * i - a;
    s = rn(u, a, e15 + 1 / 3), r = rn(u, a, e15), o = rn(u, a, e15 - 1 / 3);
  }
  return { red: Math.round(s * 255), green: Math.round(r * 255), blue: Math.round(o * 255), alpha: n };
}
function Ii(e15, t) {
  return (i) => i > 0 ? t : e15;
}
const U = (e15, t, i) => e15 + (t - e15) * i, on = (e15, t, i) => {
  const n = e15 * e15, s = i * (t * t - n) + n;
  return s < 0 ? 0 : Math.sqrt(s);
}, Zc = [On, le, be], Qc = (e15) => Zc.find((t) => t.test(e15));
function Pr(e15) {
  const t = Qc(e15);
  if (!t) return false;
  let i = t.parse(e15);
  return t === be && (i = qc(i)), i;
}
const br = (e15, t) => {
  const i = Pr(e15), n = Pr(t);
  if (!i || !n) return Ii(e15, t);
  const s = { ...i };
  return (r) => (s.red = on(i.red, n.red, r), s.green = on(i.green, n.green, r), s.blue = on(i.blue, n.blue, r), s.alpha = U(i.alpha, n.alpha, r), le.transform(s));
}, Ln = /* @__PURE__ */ new Set(["none", "hidden"]);
function Jc(e15, t) {
  return Ln.has(e15) ? (i) => i <= 0 ? e15 : t : (i) => i >= 1 ? t : e15;
}
function th(e15, t) {
  return (i) => U(e15, t, i);
}
function Os(e15) {
  return typeof e15 == "number" ? th : typeof e15 == "string" ? Rs(e15) ? Ii : H.test(e15) ? br : nh : Array.isArray(e15) ? Ja : typeof e15 == "object" ? H.test(e15) ? br : eh : Ii;
}
function Ja(e15, t) {
  const i = [...e15], n = i.length, s = e15.map((r, o) => Os(r)(r, t[o]));
  return (r) => {
    for (let o = 0; o < n; o++) i[o] = s[o](r);
    return i;
  };
}
function eh(e15, t) {
  const i = { ...e15, ...t }, n = {};
  for (const s in i) e15[s] !== void 0 && t[s] !== void 0 && (n[s] = Os(e15[s])(e15[s], t[s]));
  return (s) => {
    for (const r in n) i[r] = n[r](s);
    return i;
  };
}
function ih(e15, t) {
  const i = [], n = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const r = t.types[s], o = e15.indexes[r][n[r]], a = e15.values[o] ?? 0;
    i[s] = a, n[r]++;
  }
  return i;
}
const nh = (e15, t) => {
  const i = Zt.createTransformer(t), n = ci(e15), s = ci(t);
  return n.indexes.var.length === s.indexes.var.length && n.indexes.color.length === s.indexes.color.length && n.indexes.number.length >= s.indexes.number.length ? Ln.has(e15) && !s.values.length || Ln.has(t) && !n.values.length ? Jc(e15, t) : mi(Ja(ih(n, s), s.values), i) : Ii(e15, t);
};
function tu(e15, t, i) {
  return typeof e15 == "number" && typeof t == "number" && typeof i == "number" ? U(e15, t, i) : Os(e15)(e15, t);
}
const sh = (e15) => {
  const t = ({ timestamp: i }) => e15(i);
  return { start: (i = true) => B.update(t, i), stop: () => qt(t), now: () => J.isProcessing ? J.timestamp : ot.now() };
}, eu = (e15, t, i = 10) => {
  let n = "";
  const s = Math.max(Math.round(t / i), 2);
  for (let r = 0; r < s; r++) n += Math.round(e15(r / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${n.substring(0, n.length - 2)})`;
}, Bi = 2e4;
function Ls(e15) {
  let t = 0;
  const i = 50;
  let n = e15.next(t);
  for (; !n.done && t < Bi; ) t += i, n = e15.next(t);
  return t >= Bi ? 1 / 0 : t;
}
function rh(e15, t = 100, i) {
  const n = i({ ...e15, keyframes: [0, t] }), s = Math.min(Ls(n), Bi);
  return { type: "keyframes", ease: (r) => n.next(s * r).value / t, duration: At(s) };
}
const oh = 5;
function iu(e15, t, i) {
  const n = Math.max(t - oh, 0);
  return La(i - e15(n), t - n);
}
const z = { stiffness: 100, damping: 10, mass: 1, velocity: 0, duration: 800, bounce: 0.3, visualDuration: 0.3, restSpeed: { granular: 0.01, default: 2 }, restDelta: { granular: 5e-3, default: 0.5 }, minDuration: 0.01, maxDuration: 10, minDamping: 0.05, maxDamping: 1 }, an = 1e-3;
function ah({ duration: e15 = z.duration, bounce: t = z.bounce, velocity: i = z.velocity, mass: n = z.mass }) {
  let s, r, o = 1 - t;
  o = jt(z.minDamping, z.maxDamping, o), e15 = jt(z.minDuration, z.maxDuration, At(e15)), o < 1 ? (s = (l) => {
    const c = l * o, h = c * e15, f = c - i, p = Fn(l, o), m = Math.exp(-h);
    return an - f / p * m;
  }, r = (l) => {
    const h = l * o * e15, f = h * i + i, p = Math.pow(o, 2) * Math.pow(l, 2) * e15, m = Math.exp(-h), d = Fn(Math.pow(l, 2), o);
    return (-s(l) + an > 0 ? -1 : 1) * ((f - p) * m) / d;
  }) : (s = (l) => {
    const c = Math.exp(-l * e15), h = (l - i) * e15 + 1;
    return -an + c * h;
  }, r = (l) => {
    const c = Math.exp(-l * e15), h = (i - l) * (e15 * e15);
    return c * h;
  });
  const a = 5 / e15, u = lh(s, r, a);
  if (e15 = Et(e15), isNaN(u)) return { stiffness: z.stiffness, damping: z.damping, duration: e15 };
  {
    const l = Math.pow(u, 2) * n;
    return { stiffness: l, damping: o * 2 * Math.sqrt(n * l), duration: e15 };
  }
}
const uh = 12;
function lh(e15, t, i) {
  let n = i;
  for (let s = 1; s < uh; s++) n = n - e15(n) / t(n);
  return n;
}
function Fn(e15, t) {
  return e15 * Math.sqrt(1 - t * t);
}
const ch = ["duration", "bounce"], hh = ["stiffness", "damping", "mass"];
function wr(e15, t) {
  return t.some((i) => e15[i] !== void 0);
}
function fh(e15) {
  let t = { velocity: z.velocity, stiffness: z.stiffness, damping: z.damping, mass: z.mass, isResolvedFromDuration: false, ...e15 };
  if (!wr(e15, hh) && wr(e15, ch)) if (e15.visualDuration) {
    const i = e15.visualDuration, n = 2 * Math.PI / (i * 1.2), s = n * n, r = 2 * jt(0.05, 1, 1 - (e15.bounce || 0)) * Math.sqrt(s);
    t = { ...t, mass: z.mass, stiffness: s, damping: r };
  } else {
    const i = ah(e15);
    t = { ...t, ...i, mass: z.mass }, t.isResolvedFromDuration = true;
  }
  return t;
}
function Ni(e15 = z.visualDuration, t = z.bounce) {
  const i = typeof e15 != "object" ? { visualDuration: e15, keyframes: [0, 1], bounce: t } : e15;
  let { restSpeed: n, restDelta: s } = i;
  const r = i.keyframes[0], o = i.keyframes[i.keyframes.length - 1], a = { done: false, value: r }, { stiffness: u, damping: l, mass: c, duration: h, velocity: f, isResolvedFromDuration: p } = fh({ ...i, velocity: -At(i.velocity || 0) }), m = f || 0, d = l / (2 * Math.sqrt(u * c)), g = o - r, y = At(Math.sqrt(u / c)), x = Math.abs(g) < 5;
  n || (n = x ? z.restSpeed.granular : z.restSpeed.default), s || (s = x ? z.restDelta.granular : z.restDelta.default);
  let v;
  if (d < 1) {
    const _ = Fn(y, d);
    v = (b) => {
      const S = Math.exp(-d * y * b);
      return o - S * ((m + d * y * g) / _ * Math.sin(_ * b) + g * Math.cos(_ * b));
    };
  } else if (d === 1) v = (_) => o - Math.exp(-y * _) * (g + (m + y * g) * _);
  else {
    const _ = y * Math.sqrt(d * d - 1);
    v = (b) => {
      const S = Math.exp(-d * y * b), P = Math.min(_ * b, 300);
      return o - S * ((m + d * y * g) * Math.sinh(P) + _ * g * Math.cosh(P)) / _;
    };
  }
  const T = { calculatedDuration: p && h || null, next: (_) => {
    const b = v(_);
    if (p) a.done = _ >= h;
    else {
      let S = _ === 0 ? m : 0;
      d < 1 && (S = _ === 0 ? Et(m) : iu(v, _, b));
      const P = Math.abs(S) <= n, w = Math.abs(o - b) <= s;
      a.done = P && w;
    }
    return a.value = a.done ? o : b, a;
  }, toString: () => {
    const _ = Math.min(Ls(T), Bi), b = eu((S) => T.next(_ * S).value, _, 30);
    return _ + "ms " + b;
  }, toTransition: () => {
  } };
  return T;
}
Ni.applyToOptions = (e15) => {
  const t = rh(e15, 100, Ni);
  return e15.ease = t.ease, e15.duration = Et(t.duration), e15.type = "keyframes", e15;
};
function In({ keyframes: e15, velocity: t = 0, power: i = 0.8, timeConstant: n = 325, bounceDamping: s = 10, bounceStiffness: r = 500, modifyTarget: o, min: a, max: u, restDelta: l = 0.5, restSpeed: c }) {
  const h = e15[0], f = { done: false, value: h }, p = (P) => a !== void 0 && P < a || u !== void 0 && P > u, m = (P) => a === void 0 ? u : u === void 0 || Math.abs(a - P) < Math.abs(u - P) ? a : u;
  let d = i * t;
  const g = h + d, y = o === void 0 ? g : o(g);
  y !== g && (d = y - h);
  const x = (P) => -d * Math.exp(-P / n), v = (P) => y + x(P), T = (P) => {
    const w = x(P), C = v(P);
    f.done = Math.abs(w) <= l, f.value = f.done ? y : C;
  };
  let _, b;
  const S = (P) => {
    p(f.value) && (_ = P, b = Ni({ keyframes: [f.value, m(f.value)], velocity: iu(v, P, f.value), damping: s, stiffness: r, restDelta: l, restSpeed: c }));
  };
  return S(0), { calculatedDuration: null, next: (P) => {
    let w = false;
    return !b && _ === void 0 && (w = true, T(P), S(P)), _ !== void 0 && P >= _ ? b.next(P - _) : (!w && T(P), f);
  } };
}
function dh(e15, t, i) {
  const n = [], s = i || Ut.mix || tu, r = e15.length - 1;
  for (let o = 0; o < r; o++) {
    let a = s(e15[o], e15[o + 1]);
    if (t) {
      const u = Array.isArray(t) ? t[o] || Ct : t;
      a = mi(u, a);
    }
    n.push(a);
  }
  return n;
}
function ph(e15, t, { clamp: i = true, ease: n, mixer: s } = {}) {
  const r = e15.length;
  if (Ss(r === t.length), r === 1) return () => t[0];
  if (r === 2 && t[0] === t[1]) return () => t[1];
  const o = e15[0] === e15[1];
  e15[0] > e15[r - 1] && (e15 = [...e15].reverse(), t = [...t].reverse());
  const a = dh(t, n, s), u = a.length, l = (c) => {
    if (o && c < e15[0]) return t[0];
    let h = 0;
    if (u > 1) for (; h < e15.length - 2 && !(c < e15[h + 1]); h++) ;
    const f = ui(e15[h], e15[h + 1], c);
    return a[h](f);
  };
  return i ? (c) => l(jt(e15[0], e15[r - 1], c)) : l;
}
function mh(e15, t) {
  const i = e15[e15.length - 1];
  for (let n = 1; n <= t; n++) {
    const s = ui(0, t, n);
    e15.push(U(i, 1, s));
  }
}
function gh(e15) {
  const t = [0];
  return mh(t, e15.length - 1), t;
}
function yh(e15, t) {
  return e15.map((i) => i * t);
}
function _h(e15, t) {
  return e15.map(() => t || Ka).splice(0, e15.length - 1);
}
function Ze({ duration: e15 = 300, keyframes: t, times: i, ease: n = "easeInOut" }) {
  const s = Dc(n) ? n.map(vr) : vr(n), r = { done: false, value: t[0] }, o = yh(i && i.length === t.length ? i : gh(t), e15), a = ph(o, t, { ease: Array.isArray(s) ? s : _h(t, s) });
  return { calculatedDuration: e15, next: (u) => (r.value = a(u), r.done = u >= e15, r) };
}
const vh = (e15) => e15 !== null;
function Fs(e15, { repeat: t, repeatType: i = "loop" }, n, s = 1) {
  const r = e15.filter(vh), a = s < 0 || t && i !== "loop" && t % 2 === 1 ? 0 : r.length - 1;
  return !a || n === void 0 ? r[a] : n;
}
const xh = { decay: In, inertia: In, tween: Ze, keyframes: Ze, spring: Ni };
function nu(e15) {
  typeof e15.type == "string" && (e15.type = xh[e15.type]);
}
class Is {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, i) {
    return this.finished.then(t, i);
  }
}
const Th = (e15) => e15 / 100;
class Bs extends Is {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var _a2, _b;
      const { motionValue: i } = this.options;
      i && i.updatedAt !== ot.now() && this.tick(ot.now()), this.isStopped = true, this.state !== "idle" && (this.teardown(), (_b = (_a2 = this.options).onStop) == null ? void 0 : _b.call(_a2));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === false && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    nu(t);
    const { type: i = Ze, repeat: n = 0, repeatDelay: s = 0, repeatType: r, velocity: o = 0 } = t;
    let { keyframes: a } = t;
    const u = i || Ze;
    u !== Ze && typeof a[0] != "number" && (this.mixKeyframes = mi(Th, tu(a[0], a[1])), a = [0, 100]);
    const l = u({ ...t, keyframes: a });
    r === "mirror" && (this.mirroredGenerator = u({ ...t, keyframes: [...a].reverse(), velocity: -o })), l.calculatedDuration === null && (l.calculatedDuration = Ls(l));
    const { calculatedDuration: c } = l;
    this.calculatedDuration = c, this.resolvedDuration = c + s, this.totalDuration = this.resolvedDuration * (n + 1) - s, this.generator = l;
  }
  updateTime(t) {
    const i = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = i;
  }
  tick(t, i = false) {
    const { generator: n, totalDuration: s, mixKeyframes: r, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: u } = this;
    if (this.startTime === null) return n.next(0);
    const { delay: l = 0, keyframes: c, repeat: h, repeatType: f, repeatDelay: p, type: m, onUpdate: d, finalKeyframe: g } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - s / this.speed, this.startTime)), i ? this.currentTime = t : this.updateTime(t);
    const y = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1), x = this.playbackSpeed >= 0 ? y < 0 : y > s;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let v = this.currentTime, T = n;
    if (h) {
      const P = Math.min(this.currentTime, s) / a;
      let w = Math.floor(P), C = P % 1;
      !C && P >= 1 && (C = 1), C === 1 && w--, w = Math.min(w, h + 1), !!(w % 2) && (f === "reverse" ? (C = 1 - C, p && (C -= p / a)) : f === "mirror" && (T = o)), v = jt(0, 1, C) * a;
    }
    const _ = x ? { done: false, value: c[0] } : T.next(v);
    r && (_.value = r(_.value));
    let { done: b } = _;
    !x && u !== null && (b = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const S = this.holdTime === null && (this.state === "finished" || this.state === "running" && b);
    return S && m !== In && (_.value = Fs(c, this.options, g, this.speed)), d && d(_.value), S && this.finish(), _;
  }
  then(t, i) {
    return this.finished.then(t, i);
  }
  get duration() {
    return At(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + At(t);
  }
  get time() {
    return At(this.currentTime);
  }
  set time(t) {
    var _a2;
    t = Et(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), (_a2 = this.driver) == null ? void 0 : _a2.start(false);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(ot.now());
    const i = this.playbackSpeed !== t;
    this.playbackSpeed = t, i && (this.time = At(this.currentTime));
  }
  play() {
    var _a2, _b;
    if (this.isStopped) return;
    const { driver: t = sh, startTime: i } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), (_b = (_a2 = this.options).onPlay) == null ? void 0 : _b.call(_a2);
    const n = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime !== null ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = i ?? n), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(ot.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var _a2, _b;
    this.notifyFinished(), this.teardown(), this.state = "finished", (_b = (_a2 = this.options).onComplete) == null ? void 0 : _b.call(_a2);
  }
  cancel() {
    var _a2, _b;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (_b = (_a2 = this.options).onCancel) == null ? void 0 : _b.call(_a2);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, true);
  }
  attachTimeline(t) {
    var _a2;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (_a2 = this.driver) == null ? void 0 : _a2.stop(), t.observe(this);
  }
}
function Ph(e15) {
  for (let t = 1; t < e15.length; t++) e15[t] ?? (e15[t] = e15[t - 1]);
}
const ce = (e15) => e15 * 180 / Math.PI, Bn = (e15) => {
  const t = ce(Math.atan2(e15[1], e15[0]));
  return Nn(t);
}, bh = { x: 4, y: 5, translateX: 4, translateY: 5, scaleX: 0, scaleY: 3, scale: (e15) => (Math.abs(e15[0]) + Math.abs(e15[3])) / 2, rotate: Bn, rotateZ: Bn, skewX: (e15) => ce(Math.atan(e15[1])), skewY: (e15) => ce(Math.atan(e15[2])), skew: (e15) => (Math.abs(e15[1]) + Math.abs(e15[2])) / 2 }, Nn = (e15) => (e15 = e15 % 360, e15 < 0 && (e15 += 360), e15), Sr = Bn, Ar = (e15) => Math.sqrt(e15[0] * e15[0] + e15[1] * e15[1]), Cr = (e15) => Math.sqrt(e15[4] * e15[4] + e15[5] * e15[5]), wh = { x: 12, y: 13, z: 14, translateX: 12, translateY: 13, translateZ: 14, scaleX: Ar, scaleY: Cr, scale: (e15) => (Ar(e15) + Cr(e15)) / 2, rotateX: (e15) => Nn(ce(Math.atan2(e15[6], e15[5]))), rotateY: (e15) => Nn(ce(Math.atan2(-e15[2], e15[0]))), rotateZ: Sr, rotate: Sr, skewX: (e15) => ce(Math.atan(e15[4])), skewY: (e15) => ce(Math.atan(e15[1])), skew: (e15) => (Math.abs(e15[1]) + Math.abs(e15[4])) / 2 };
function jn(e15) {
  return e15.includes("scale") ? 1 : 0;
}
function Un(e15, t) {
  if (!e15 || e15 === "none") return jn(t);
  const i = e15.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let n, s;
  if (i) n = wh, s = i;
  else {
    const a = e15.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    n = bh, s = a;
  }
  if (!s) return jn(t);
  const r = n[t], o = s[1].split(",").map(Ah);
  return typeof r == "function" ? r(o) : o[r];
}
const Sh = (e15, t) => {
  const { transform: i = "none" } = getComputedStyle(e15);
  return Un(i, t);
};
function Ah(e15) {
  return parseFloat(e15.trim());
}
const je = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], Ue = new Set(je), Mr = (e15) => e15 === Ne || e15 === A, Ch = /* @__PURE__ */ new Set(["x", "y", "z"]), Mh = je.filter((e15) => !Ch.has(e15));
function Dh(e15) {
  const t = [];
  return Mh.forEach((i) => {
    const n = e15.getValue(i);
    n !== void 0 && (t.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0));
  }), t;
}
const me = { width: ({ x: e15 }, { paddingLeft: t = "0", paddingRight: i = "0" }) => e15.max - e15.min - parseFloat(t) - parseFloat(i), height: ({ y: e15 }, { paddingTop: t = "0", paddingBottom: i = "0" }) => e15.max - e15.min - parseFloat(t) - parseFloat(i), top: (e15, { top: t }) => parseFloat(t), left: (e15, { left: t }) => parseFloat(t), bottom: ({ y: e15 }, { top: t }) => parseFloat(t) + (e15.max - e15.min), right: ({ x: e15 }, { left: t }) => parseFloat(t) + (e15.max - e15.min), x: (e15, { transform: t }) => Un(t, "x"), y: (e15, { transform: t }) => Un(t, "y") };
me.translateX = me.x;
me.translateY = me.y;
const ge = /* @__PURE__ */ new Set();
let zn = false, Wn = false, Kn = false;
function su() {
  if (Wn) {
    const e15 = Array.from(ge).filter((n) => n.needsMeasurement), t = new Set(e15.map((n) => n.element)), i = /* @__PURE__ */ new Map();
    t.forEach((n) => {
      const s = Dh(n);
      s.length && (i.set(n, s), n.render());
    }), e15.forEach((n) => n.measureInitialState()), t.forEach((n) => {
      n.render();
      const s = i.get(n);
      s && s.forEach(([r, o]) => {
        var _a2;
        (_a2 = n.getValue(r)) == null ? void 0 : _a2.set(o);
      });
    }), e15.forEach((n) => n.measureEndState()), e15.forEach((n) => {
      n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY);
    });
  }
  Wn = false, zn = false, ge.forEach((e15) => e15.complete(Kn)), ge.clear();
}
function ru() {
  ge.forEach((e15) => {
    e15.readKeyframes(), e15.needsMeasurement && (Wn = true);
  });
}
function Vh() {
  Kn = true, ru(), su(), Kn = false;
}
class Ns {
  constructor(t, i, n, s, r, o = false) {
    this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [...t], this.onComplete = i, this.name = n, this.motionValue = s, this.element = r, this.isAsync = o;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (ge.add(this), zn || (zn = true, B.read(ru), B.resolveKeyframes(su))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: i, element: n, motionValue: s } = this;
    if (t[0] === null) {
      const r = s == null ? void 0 : s.get(), o = t[t.length - 1];
      if (r !== void 0) t[0] = r;
      else if (n && i) {
        const a = n.readValue(i, o);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = o), s && r === void 0 && s.set(t[0]);
    }
    Ph(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = false) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), ge.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (ge.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Rh = (e15) => e15.startsWith("--");
function Eh(e15, t, i) {
  Rh(t) ? e15.style.setProperty(t, i) : e15.style[t] = i;
}
const kh = As(() => window.ScrollTimeline !== void 0), Oh = {};
function Lh(e15, t) {
  const i = As(e15);
  return () => Oh[t] ?? i();
}
const ou = Lh(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return false;
  }
  return true;
}, "linearEasing"), Ye = ([e15, t, i, n]) => `cubic-bezier(${e15}, ${t}, ${i}, ${n})`, Dr = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: Ye([0, 0.65, 0.55, 1]), circOut: Ye([0.55, 0, 1, 0.45]), backIn: Ye([0.31, 0.01, 0.66, -0.59]), backOut: Ye([0.33, 1.53, 0.69, 0.99]) };
function au(e15, t) {
  if (e15) return typeof e15 == "function" ? ou() ? eu(e15, t) : "ease-out" : Ga(e15) ? Ye(e15) : Array.isArray(e15) ? e15.map((i) => au(i, t) || Dr.easeOut) : Dr[e15];
}
function Fh(e15, t, i, { delay: n = 0, duration: s = 300, repeat: r = 0, repeatType: o = "loop", ease: a = "easeOut", times: u } = {}, l = void 0) {
  const c = { [t]: i };
  u && (c.offset = u);
  const h = au(a, s);
  Array.isArray(h) && (c.easing = h);
  const f = { delay: n, duration: s, easing: Array.isArray(h) ? "linear" : h, fill: "both", iterations: r + 1, direction: o === "reverse" ? "alternate" : "normal" };
  return l && (f.pseudoElement = l), e15.animate(c, f);
}
function uu(e15) {
  return typeof e15 == "function" && "applyToOptions" in e15;
}
function Ih({ type: e15, ...t }) {
  return uu(e15) && ou() ? e15.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Bh extends Is {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = false, !t) return;
    const { element: i, name: n, keyframes: s, pseudoElement: r, allowFlatten: o = false, finalKeyframe: a, onComplete: u } = t;
    this.isPseudoElement = !!r, this.allowFlatten = o, this.options = t, Ss(typeof t.type != "string");
    const l = Ih(t);
    this.animation = Fh(i, n, s, l, r), l.autoplay === false && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !r) {
        const c = Fs(s, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : Eh(i, n, c), this.animation.cancel();
      }
      u == null ? void 0 : u(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var _a2, _b;
    (_b = (_a2 = this.animation).finish) == null ? void 0 : _b.call(_a2);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = true;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var _a2, _b;
    this.isPseudoElement || ((_b = (_a2 = this.animation).commitStyles) == null ? void 0 : _b.call(_a2));
  }
  get duration() {
    var _a2, _b;
    const t = ((_b = (_a2 = this.animation.effect) == null ? void 0 : _a2.getComputedTiming) == null ? void 0 : _b.call(_a2).duration) || 0;
    return At(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + At(t);
  }
  get time() {
    return At(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = Et(t);
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: i }) {
    var _a2;
    return this.allowFlatten && ((_a2 = this.animation.effect) == null ? void 0 : _a2.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && kh() ? (this.animation.timeline = t, Ct) : i(this);
  }
}
const lu = { anticipate: Ua, backInOut: ja, circInOut: Wa };
function Nh(e15) {
  return e15 in lu;
}
function jh(e15) {
  typeof e15.ease == "string" && Nh(e15.ease) && (e15.ease = lu[e15.ease]);
}
const Vr = 10;
class Uh extends Bh {
  constructor(t) {
    jh(t), nu(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
  }
  updateMotionValue(t) {
    const { motionValue: i, onUpdate: n, onComplete: s, element: r, ...o } = this.options;
    if (!i) return;
    if (t !== void 0) {
      i.set(t);
      return;
    }
    const a = new Bs({ ...o, autoplay: false }), u = Et(this.finishedTime ?? this.time);
    i.setWithVelocity(a.sample(u - Vr).value, a.sample(u).value, Vr), a.stop();
  }
}
const Rr = (e15, t) => t === "zIndex" ? false : !!(typeof e15 == "number" || Array.isArray(e15) || typeof e15 == "string" && (Zt.test(e15) || e15 === "0") && !e15.startsWith("url("));
function zh(e15) {
  const t = e15[0];
  if (e15.length === 1) return true;
  for (let i = 0; i < e15.length; i++) if (e15[i] !== t) return true;
}
function Wh(e15, t, i, n) {
  const s = e15[0];
  if (s === null) return false;
  if (t === "display" || t === "visibility") return true;
  const r = e15[e15.length - 1], o = Rr(s, t), a = Rr(r, t);
  return !o || !a ? false : zh(e15) || (i === "spring" || uu(i)) && n;
}
function Gn(e15) {
  e15.duration = 0, e15.type = "keyframes";
}
const Kh = /* @__PURE__ */ new Set(["opacity", "clipPath", "filter", "transform"]), Gh = As(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Yh(e15) {
  var _a2;
  const { motionValue: t, name: i, repeatDelay: n, repeatType: s, damping: r, type: o } = e15;
  if (!(((_a2 = t == null ? void 0 : t.owner) == null ? void 0 : _a2.current) instanceof HTMLElement)) return false;
  const { onUpdate: u, transformTemplate: l } = t.owner.getProps();
  return Gh() && i && Kh.has(i) && (i !== "transform" || !l) && !u && !n && s !== "mirror" && r !== 0 && o !== "inertia";
}
const $h = 40;
class Xh extends Is {
  constructor({ autoplay: t = true, delay: i = 0, type: n = "keyframes", repeat: s = 0, repeatDelay: r = 0, repeatType: o = "loop", keyframes: a, name: u, motionValue: l, element: c, ...h }) {
    var _a2;
    super(), this.stop = () => {
      var _a3, _b;
      this._animation && (this._animation.stop(), (_a3 = this.stopTimeline) == null ? void 0 : _a3.call(this)), (_b = this.keyframeResolver) == null ? void 0 : _b.cancel();
    }, this.createdAt = ot.now();
    const f = { autoplay: t, delay: i, type: n, repeat: s, repeatDelay: r, repeatType: o, name: u, motionValue: l, element: c, ...h }, p = (c == null ? void 0 : c.KeyframeResolver) || Ns;
    this.keyframeResolver = new p(a, (m, d, g) => this.onKeyframesResolved(m, d, f, !g), u, l, c), (_a2 = this.keyframeResolver) == null ? void 0 : _a2.scheduleResolve();
  }
  onKeyframesResolved(t, i, n, s) {
    this.keyframeResolver = void 0;
    const { name: r, type: o, velocity: a, delay: u, isHandoff: l, onUpdate: c } = n;
    this.resolvedAt = ot.now(), Wh(t, r, o, a) || ((Ut.instantAnimations || !u) && (c == null ? void 0 : c(Fs(t, n, i))), t[0] = t[t.length - 1], Gn(n), n.repeat = 0);
    const f = { startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > $h ? this.resolvedAt : this.createdAt : this.createdAt : void 0, finalKeyframe: i, ...n, keyframes: t }, p = !l && Yh(f) ? new Uh({ ...f, element: f.motionValue.owner.current }) : new Bs(f);
    p.finished.then(() => this.notifyFinished()).catch(Ct), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, i) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    var _a2;
    return this._animation || ((_a2 = this.keyframeResolver) == null ? void 0 : _a2.resume(), Vh()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var _a2;
    this._animation && this.animation.cancel(), (_a2 = this.keyframeResolver) == null ? void 0 : _a2.cancel();
  }
}
const Hh = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function qh(e15) {
  const t = Hh.exec(e15);
  if (!t) return [,];
  const [, i, n, s] = t;
  return [`--${i ?? n}`, s];
}
function cu(e15, t, i = 1) {
  const [n, s] = qh(e15);
  if (!n) return;
  const r = window.getComputedStyle(t).getPropertyValue(n);
  if (r) {
    const o = r.trim();
    return Ea(o) ? parseFloat(o) : o;
  }
  return Rs(s) ? cu(s, t, i + 1) : s;
}
function js(e15, t) {
  return (e15 == null ? void 0 : e15[t]) ?? (e15 == null ? void 0 : e15.default) ?? e15;
}
const hu = /* @__PURE__ */ new Set(["width", "height", "top", "left", "right", "bottom", ...je]), Zh = { test: (e15) => e15 === "auto", parse: (e15) => e15 }, fu = (e15) => (t) => t.test(e15), du = [Ne, A, kt, zt, zc, Uc, Zh], Er = (e15) => du.find(fu(e15));
function Qh(e15) {
  return typeof e15 == "number" ? e15 === 0 : e15 !== null ? e15 === "none" || e15 === "0" || Oa(e15) : true;
}
const Jh = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function tf(e15) {
  const [t, i] = e15.slice(0, -1).split("(");
  if (t === "drop-shadow") return e15;
  const [n] = i.match(Es) || [];
  if (!n) return e15;
  const s = i.replace(n, "");
  let r = Jh.has(t) ? 1 : 0;
  return n !== i && (r *= 100), t + "(" + r + s + ")";
}
const ef = /\b([a-z-]*)\(.*?\)/gu, Yn = { ...Zt, getAnimatableNone: (e15) => {
  const t = e15.match(ef);
  return t ? t.map(tf).join(" ") : e15;
} }, kr = { ...Ne, transform: Math.round }, nf = { rotate: zt, rotateX: zt, rotateY: zt, rotateZ: zt, scale: Ti, scaleX: Ti, scaleY: Ti, scaleZ: Ti, skew: zt, skewX: zt, skewY: zt, distance: A, translateX: A, translateY: A, translateZ: A, x: A, y: A, z: A, perspective: A, transformPerspective: A, opacity: li, originX: xr, originY: xr, originZ: A }, Us = { borderWidth: A, borderTopWidth: A, borderRightWidth: A, borderBottomWidth: A, borderLeftWidth: A, borderRadius: A, radius: A, borderTopLeftRadius: A, borderTopRightRadius: A, borderBottomRightRadius: A, borderBottomLeftRadius: A, width: A, maxWidth: A, height: A, maxHeight: A, top: A, right: A, bottom: A, left: A, padding: A, paddingTop: A, paddingRight: A, paddingBottom: A, paddingLeft: A, margin: A, marginTop: A, marginRight: A, marginBottom: A, marginLeft: A, backgroundPositionX: A, backgroundPositionY: A, ...nf, zIndex: kr, fillOpacity: li, strokeOpacity: li, numOctaves: kr }, sf = { ...Us, color: H, backgroundColor: H, outlineColor: H, fill: H, stroke: H, borderColor: H, borderTopColor: H, borderRightColor: H, borderBottomColor: H, borderLeftColor: H, filter: Yn, WebkitFilter: Yn }, pu = (e15) => sf[e15];
function mu(e15, t) {
  let i = pu(e15);
  return i !== Yn && (i = Zt), i.getAnimatableNone ? i.getAnimatableNone(t) : void 0;
}
const rf = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function of(e15, t, i) {
  let n = 0, s;
  for (; n < e15.length && !s; ) {
    const r = e15[n];
    typeof r == "string" && !rf.has(r) && ci(r).values.length && (s = e15[n]), n++;
  }
  if (s && i) for (const r of t) e15[r] = mu(i, s);
}
class af extends Ns {
  constructor(t, i, n, s, r) {
    super(t, i, n, s, r, true);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: i, name: n } = this;
    if (!i || !i.current) return;
    super.readKeyframes();
    for (let u = 0; u < t.length; u++) {
      let l = t[u];
      if (typeof l == "string" && (l = l.trim(), Rs(l))) {
        const c = cu(l, i.current);
        c !== void 0 && (t[u] = c), u === t.length - 1 && (this.finalKeyframe = l);
      }
    }
    if (this.resolveNoneKeyframes(), !hu.has(n) || t.length !== 2) return;
    const [s, r] = t, o = Er(s), a = Er(r);
    if (o !== a) if (Mr(o) && Mr(a)) for (let u = 0; u < t.length; u++) {
      const l = t[u];
      typeof l == "string" && (t[u] = parseFloat(l));
    }
    else me[n] && (this.needsMeasurement = true);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: i } = this, n = [];
    for (let s = 0; s < t.length; s++) (t[s] === null || Qh(t[s])) && n.push(s);
    n.length && of(t, n, i);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: i, name: n } = this;
    if (!t || !t.current) return;
    n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = me[n](t.measureViewportBox(), window.getComputedStyle(t.current)), i[0] = this.measuredOrigin;
    const s = i[i.length - 1];
    s !== void 0 && t.getValue(n, s).jump(s, false);
  }
  measureEndState() {
    var _a2;
    const { element: t, name: i, unresolvedKeyframes: n } = this;
    if (!t || !t.current) return;
    const s = t.getValue(i);
    s && s.jump(this.measuredOrigin, false);
    const r = n.length - 1, o = n[r];
    n[r] = me[i](t.measureViewportBox(), window.getComputedStyle(t.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), ((_a2 = this.removedTransforms) == null ? void 0 : _a2.length) && this.removedTransforms.forEach(([a, u]) => {
      t.getValue(a).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function uf(e15, t, i) {
  if (e15 instanceof EventTarget) return [e15];
  if (typeof e15 == "string") {
    let n = document;
    const s = (i == null ? void 0 : i[e15]) ?? n.querySelectorAll(e15);
    return s ? Array.from(s) : [];
  }
  return Array.from(e15);
}
const gu = (e15, t) => t && typeof e15 == "number" ? t.transform(e15) : e15;
function lf(e15) {
  return ka(e15) && "offsetHeight" in e15;
}
const Or = 30, cf = (e15) => !isNaN(parseFloat(e15));
class hf {
  constructor(t, i = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (n) => {
      var _a2;
      const s = ot.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(n), this.current !== this.prev && ((_a2 = this.events.change) == null ? void 0 : _a2.notify(this.current), this.dependents)) for (const r of this.dependents) r.dirty();
    }, this.hasAnimated = false, this.setCurrent(t), this.owner = i.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = ot.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = cf(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, i) {
    this.events[t] || (this.events[t] = new Cs());
    const n = this.events[t].add(i);
    return t === "change" ? () => {
      n(), B.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, i) {
    this.passiveEffect = t, this.stopPassiveEffect = i;
  }
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, i, n) {
    this.set(i), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - n;
  }
  jump(t, i = true) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, i && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var _a2;
    (_a2 = this.events.change) == null ? void 0 : _a2.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = ot.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Or) return 0;
    const i = Math.min(this.updatedAt - this.prevUpdatedAt, Or);
    return La(parseFloat(this.current) - parseFloat(this.prevFrameValue), i);
  }
  start(t) {
    return this.stop(), new Promise((i) => {
      this.hasAnimated = true, this.animation = t(i), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var _a2, _b;
    (_a2 = this.dependents) == null ? void 0 : _a2.clear(), (_b = this.events.destroy) == null ? void 0 : _b.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function _e(e15, t) {
  return new hf(e15, t);
}
const { schedule: zs } = Ya(queueMicrotask, false), Mt = { x: false, y: false };
function yu() {
  return Mt.x || Mt.y;
}
function ff(e15) {
  return e15 === "x" || e15 === "y" ? Mt[e15] ? null : (Mt[e15] = true, () => {
    Mt[e15] = false;
  }) : Mt.x || Mt.y ? null : (Mt.x = Mt.y = true, () => {
    Mt.x = Mt.y = false;
  });
}
function _u(e15, t) {
  const i = uf(e15), n = new AbortController(), s = { passive: true, ...t, signal: n.signal };
  return [i, s, () => n.abort()];
}
function Lr(e15) {
  return !(e15.pointerType === "touch" || yu());
}
function df(e15, t, i = {}) {
  const [n, s, r] = _u(e15, i), o = (a) => {
    if (!Lr(a)) return;
    const { target: u } = a, l = t(u, a);
    if (typeof l != "function" || !u) return;
    const c = (h) => {
      Lr(h) && (l(h), u.removeEventListener("pointerleave", c));
    };
    u.addEventListener("pointerleave", c, s);
  };
  return n.forEach((a) => {
    a.addEventListener("pointerenter", o, s);
  }), r;
}
const vu = (e15, t) => t ? e15 === t ? true : vu(e15, t.parentElement) : false, Ws = (e15) => e15.pointerType === "mouse" ? typeof e15.button != "number" || e15.button <= 0 : e15.isPrimary !== false, pf = /* @__PURE__ */ new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function mf(e15) {
  return pf.has(e15.tagName) || e15.tabIndex !== -1;
}
const Ci = /* @__PURE__ */ new WeakSet();
function Fr(e15) {
  return (t) => {
    t.key === "Enter" && e15(t);
  };
}
function un(e15, t) {
  e15.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: true, bubbles: true }));
}
const gf = (e15, t) => {
  const i = e15.currentTarget;
  if (!i) return;
  const n = Fr(() => {
    if (Ci.has(i)) return;
    un(i, "down");
    const s = Fr(() => {
      un(i, "up");
    }), r = () => un(i, "cancel");
    i.addEventListener("keyup", s, t), i.addEventListener("blur", r, t);
  });
  i.addEventListener("keydown", n, t), i.addEventListener("blur", () => i.removeEventListener("keydown", n), t);
};
function Ir(e15) {
  return Ws(e15) && !yu();
}
function yf(e15, t, i = {}) {
  const [n, s, r] = _u(e15, i), o = (a) => {
    const u = a.currentTarget;
    if (!Ir(a)) return;
    Ci.add(u);
    const l = t(u, a), c = (p, m) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", f), Ci.has(u) && Ci.delete(u), Ir(p) && typeof l == "function" && l(p, { success: m });
    }, h = (p) => {
      c(p, u === window || u === document || i.useGlobalTarget || vu(u, p.target));
    }, f = (p) => {
      c(p, false);
    };
    window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", f, s);
  };
  return n.forEach((a) => {
    (i.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s), lf(a) && (a.addEventListener("focus", (l) => gf(l, s)), !mf(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), r;
}
function xu(e15) {
  return ka(e15) && "ownerSVGElement" in e15;
}
function _f(e15) {
  return xu(e15) && e15.tagName === "svg";
}
const it = (e15) => !!(e15 && e15.getVelocity), vf = [...du, H, Zt], xf = (e15) => vf.find(fu(e15)), Ks = M.createContext({ transformPagePoint: (e15) => e15, isStatic: false, reducedMotion: "never" });
function Tf(e15 = true) {
  const t = M.useContext(Ps);
  if (t === null) return [true, null];
  const { isPresent: i, onExitComplete: n, register: s } = t, r = M.useId();
  M.useEffect(() => {
    if (e15) return s(r);
  }, [e15]);
  const o = M.useCallback(() => e15 && n && n(r), [r, n, e15]);
  return !i && n ? [false, o] : [true];
}
const Tu = M.createContext({ strict: false }), Br = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] }, Be = {};
for (const e15 in Br) Be[e15] = { isEnabled: (t) => Br[e15].some((i) => !!t[i]) };
function Pf(e15) {
  for (const t in e15) Be[t] = { ...Be[t], ...e15[t] };
}
const bf = /* @__PURE__ */ new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function ji(e15) {
  return e15.startsWith("while") || e15.startsWith("drag") && e15 !== "draggable" || e15.startsWith("layout") || e15.startsWith("onTap") || e15.startsWith("onPan") || e15.startsWith("onLayout") || bf.has(e15);
}
let Pu = (e15) => !ji(e15);
function wf(e15) {
  typeof e15 == "function" && (Pu = (t) => t.startsWith("on") ? !ji(t) : e15(t));
}
try {
  wf(require("@emotion/is-prop-valid").default);
} catch {
}
function Sf(e15, t, i) {
  const n = {};
  for (const s in e15) s === "values" && typeof e15.values == "object" || (Pu(s) || i === true && ji(s) || !t && !ji(s) || e15.draggable && s.startsWith("onDrag")) && (n[s] = e15[s]);
  return n;
}
const Gi = M.createContext({});
function Yi(e15) {
  return e15 !== null && typeof e15 == "object" && typeof e15.start == "function";
}
function hi(e15) {
  return typeof e15 == "string" || Array.isArray(e15);
}
const Gs = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], Ys = ["initial", ...Gs];
function $i(e15) {
  return Yi(e15.animate) || Ys.some((t) => hi(e15[t]));
}
function bu(e15) {
  return !!($i(e15) || e15.variants);
}
function Af(e15, t) {
  if ($i(e15)) {
    const { initial: i, animate: n } = e15;
    return { initial: i === false || hi(i) ? i : void 0, animate: hi(n) ? n : void 0 };
  }
  return e15.inherit !== false ? t : {};
}
function Cf(e15) {
  const { initial: t, animate: i } = Af(e15, M.useContext(Gi));
  return M.useMemo(() => ({ initial: t, animate: i }), [Nr(t), Nr(i)]);
}
function Nr(e15) {
  return Array.isArray(e15) ? e15.join(" ") : e15;
}
const fi = {};
function Mf(e15) {
  for (const t in e15) fi[t] = e15[t], Vs(t) && (fi[t].isCSSVariable = true);
}
function wu(e15, { layout: t, layoutId: i }) {
  return Ue.has(e15) || e15.startsWith("origin") || (t || i !== void 0) && (!!fi[e15] || e15 === "opacity");
}
const Df = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }, Vf = je.length;
function Rf(e15, t, i) {
  let n = "", s = true;
  for (let r = 0; r < Vf; r++) {
    const o = je[r], a = e15[o];
    if (a === void 0) continue;
    let u = true;
    if (typeof a == "number" ? u = a === (o.startsWith("scale") ? 1 : 0) : u = parseFloat(a) === 0, !u || i) {
      const l = gu(a, Us[o]);
      if (!u) {
        s = false;
        const c = Df[o] || o;
        n += `${c}(${l}) `;
      }
      i && (t[o] = l);
    }
  }
  return n = n.trim(), i ? n = i(t, s ? "" : n) : s && (n = "none"), n;
}
function $s(e15, t, i) {
  const { style: n, vars: s, transformOrigin: r } = e15;
  let o = false, a = false;
  for (const u in t) {
    const l = t[u];
    if (Ue.has(u)) {
      o = true;
      continue;
    } else if (Vs(u)) {
      s[u] = l;
      continue;
    } else {
      const c = gu(l, Us[u]);
      u.startsWith("origin") ? (a = true, r[u] = c) : n[u] = c;
    }
  }
  if (t.transform || (o || i ? n.transform = Rf(t, e15.transform, i) : n.transform && (n.transform = "none")), a) {
    const { originX: u = "50%", originY: l = "50%", originZ: c = 0 } = r;
    n.transformOrigin = `${u} ${l} ${c}`;
  }
}
const Xs = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Su(e15, t, i) {
  for (const n in t) !it(t[n]) && !wu(n, i) && (e15[n] = t[n]);
}
function Ef({ transformTemplate: e15 }, t) {
  return M.useMemo(() => {
    const i = Xs();
    return $s(i, t, e15), Object.assign({}, i.vars, i.style);
  }, [t]);
}
function kf(e15, t) {
  const i = e15.style || {}, n = {};
  return Su(n, i, e15), Object.assign(n, Ef(e15, t)), n;
}
function Of(e15, t) {
  const i = {}, n = kf(e15, t);
  return e15.drag && e15.dragListener !== false && (i.draggable = false, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = e15.drag === true ? "none" : `pan-${e15.drag === "x" ? "y" : "x"}`), e15.tabIndex === void 0 && (e15.onTap || e15.onTapStart || e15.whileTap) && (i.tabIndex = 0), i.style = n, i;
}
const Lf = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, Ff = { offset: "strokeDashoffset", array: "strokeDasharray" };
function If(e15, t, i = 1, n = 0, s = true) {
  e15.pathLength = 1;
  const r = s ? Lf : Ff;
  e15[r.offset] = A.transform(-n);
  const o = A.transform(t), a = A.transform(i);
  e15[r.array] = `${o} ${a}`;
}
function Au(e15, { attrX: t, attrY: i, attrScale: n, pathLength: s, pathSpacing: r = 1, pathOffset: o = 0, ...a }, u, l, c) {
  if ($s(e15, a, l), u) {
    e15.style.viewBox && (e15.attrs.viewBox = e15.style.viewBox);
    return;
  }
  e15.attrs = e15.style, e15.style = {};
  const { attrs: h, style: f } = e15;
  h.transform && (f.transform = h.transform, delete h.transform), (f.transform || h.transformOrigin) && (f.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box", delete h.transformBox), t !== void 0 && (h.x = t), i !== void 0 && (h.y = i), n !== void 0 && (h.scale = n), s !== void 0 && If(h, s, r, o, false);
}
const Cu = () => ({ ...Xs(), attrs: {} }), Mu = (e15) => typeof e15 == "string" && e15.toLowerCase() === "svg";
function Bf(e15, t, i, n) {
  const s = M.useMemo(() => {
    const r = Cu();
    return Au(r, t, Mu(n), e15.transformTemplate, e15.style), { ...r.attrs, style: { ...r.style } };
  }, [t]);
  if (e15.style) {
    const r = {};
    Su(r, e15.style, e15), s.style = { ...r, ...s.style };
  }
  return s;
}
const Nf = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Hs(e15) {
  return typeof e15 != "string" || e15.includes("-") ? false : !!(Nf.indexOf(e15) > -1 || /[A-Z]/u.test(e15));
}
function jf(e15, t, i, { latestValues: n }, s, r = false) {
  const a = (Hs(e15) ? Bf : Of)(t, n, s, e15), u = Sf(t, typeof e15 == "string", r), l = e15 !== M.Fragment ? { ...u, ...a, ref: i } : {}, { children: c } = t, h = M.useMemo(() => it(c) ? c.get() : c, [c]);
  return M.createElement(e15, { ...l, children: h });
}
function jr(e15) {
  const t = [{}, {}];
  return e15 == null ? void 0 : e15.values.forEach((i, n) => {
    t[0][n] = i.get(), t[1][n] = i.getVelocity();
  }), t;
}
function qs(e15, t, i, n) {
  if (typeof t == "function") {
    const [s, r] = jr(n);
    t = t(i !== void 0 ? i : e15.custom, s, r);
  }
  if (typeof t == "string" && (t = e15.variants && e15.variants[t]), typeof t == "function") {
    const [s, r] = jr(n);
    t = t(i !== void 0 ? i : e15.custom, s, r);
  }
  return t;
}
function Mi(e15) {
  return it(e15) ? e15.get() : e15;
}
function Uf({ scrapeMotionValuesFromProps: e15, createRenderState: t }, i, n, s) {
  return { latestValues: zf(i, n, s, e15), renderState: t() };
}
function zf(e15, t, i, n) {
  const s = {}, r = n(e15, {});
  for (const f in r) s[f] = Mi(r[f]);
  let { initial: o, animate: a } = e15;
  const u = $i(e15), l = bu(e15);
  t && l && !u && e15.inherit !== false && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = i ? i.initial === false : false;
  c = c || o === false;
  const h = c ? a : o;
  if (h && typeof h != "boolean" && !Yi(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let p = 0; p < f.length; p++) {
      const m = qs(e15, f[p]);
      if (m) {
        const { transitionEnd: d, transition: g, ...y } = m;
        for (const x in y) {
          let v = y[x];
          if (Array.isArray(v)) {
            const T = c ? v.length - 1 : 0;
            v = v[T];
          }
          v !== null && (s[x] = v);
        }
        for (const x in d) s[x] = d[x];
      }
    }
  }
  return s;
}
const Du = (e15) => (t, i) => {
  const n = M.useContext(Gi), s = M.useContext(Ps), r = () => Uf(e15, t, n, s);
  return i ? r() : xs(r);
};
function Zs(e15, t, i) {
  var _a2;
  const { style: n } = e15, s = {};
  for (const r in n) (it(n[r]) || t.style && it(t.style[r]) || wu(r, e15) || ((_a2 = i == null ? void 0 : i.getValue(r)) == null ? void 0 : _a2.liveStyle) !== void 0) && (s[r] = n[r]);
  return s;
}
const Wf = Du({ scrapeMotionValuesFromProps: Zs, createRenderState: Xs });
function Vu(e15, t, i) {
  const n = Zs(e15, t, i);
  for (const s in e15) if (it(e15[s]) || it(t[s])) {
    const r = je.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
    n[r] = e15[s];
  }
  return n;
}
const Kf = Du({ scrapeMotionValuesFromProps: Vu, createRenderState: Cu }), Gf = Symbol.for("motionComponentSymbol");
function we(e15) {
  return e15 && typeof e15 == "object" && Object.prototype.hasOwnProperty.call(e15, "current");
}
function Yf(e15, t, i) {
  return M.useCallback((n) => {
    n && e15.onMount && e15.onMount(n), t && (n ? t.mount(n) : t.unmount()), i && (typeof i == "function" ? i(n) : we(i) && (i.current = n));
  }, [t]);
}
const Qs = (e15) => e15.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), $f = "framerAppearId", Ru = "data-" + Qs($f), Eu = M.createContext({});
function Xf(e15, t, i, n, s) {
  var _a2, _b;
  const { visualElement: r } = M.useContext(Gi), o = M.useContext(Tu), a = M.useContext(Ps), u = M.useContext(Ks).reducedMotion, l = M.useRef(null);
  n = n || o.renderer, !l.current && n && (l.current = n(e15, { visualState: t, parent: r, props: i, presenceContext: a, blockInitialAnimation: a ? a.initial === false : false, reducedMotionConfig: u }));
  const c = l.current, h = M.useContext(Eu);
  c && !c.projection && s && (c.type === "html" || c.type === "svg") && Hf(l.current, i, s, h);
  const f = M.useRef(false);
  M.useInsertionEffect(() => {
    c && f.current && c.update(i, a);
  });
  const p = i[Ru], m = M.useRef(!!p && !((_a2 = window.MotionHandoffIsComplete) == null ? void 0 : _a2.call(window, p)) && ((_b = window.MotionHasOptimisedAnimation) == null ? void 0 : _b.call(window, p)));
  return Ra(() => {
    c && (f.current = true, window.MotionIsMounted = true, c.updateFeatures(), c.scheduleRenderMicrotask(), m.current && c.animationState && c.animationState.animateChanges());
  }), M.useEffect(() => {
    c && (!m.current && c.animationState && c.animationState.animateChanges(), m.current && (queueMicrotask(() => {
      var _a3;
      (_a3 = window.MotionHandoffMarkAsComplete) == null ? void 0 : _a3.call(window, p);
    }), m.current = false), c.enteringChildren = void 0);
  }), c;
}
function Hf(e15, t, i, n) {
  const { layoutId: s, layout: r, drag: o, dragConstraints: a, layoutScroll: u, layoutRoot: l, layoutCrossfade: c } = t;
  e15.projection = new i(e15.latestValues, t["data-framer-portal-id"] ? void 0 : ku(e15.parent)), e15.projection.setOptions({ layoutId: s, layout: r, alwaysMeasureLayout: !!o || a && we(a), visualElement: e15, animationType: typeof r == "string" ? r : "both", initialPromotionConfig: n, crossfade: c, layoutScroll: u, layoutRoot: l });
}
function ku(e15) {
  if (e15) return e15.options.allowProjection !== false ? e15.projection : ku(e15.parent);
}
function ln(e15, { forwardMotionProps: t = false } = {}, i, n) {
  i && Pf(i);
  const s = Hs(e15) ? Kf : Wf;
  function r(a, u) {
    let l;
    const c = { ...M.useContext(Ks), ...a, layoutId: qf(a) }, { isStatic: h } = c, f = Cf(a), p = s(a, h);
    if (!h && Ts) {
      Zf();
      const m = Qf(c);
      l = m.MeasureLayout, f.visualElement = Xf(e15, p, c, n, m.ProjectionNode);
    }
    return _n.jsxs(Gi.Provider, { value: f, children: [l && f.visualElement ? _n.jsx(l, { visualElement: f.visualElement, ...c }) : null, jf(e15, a, Yf(p, f.visualElement, u), p, h, t)] });
  }
  r.displayName = `motion.${typeof e15 == "string" ? e15 : `create(${e15.displayName ?? e15.name ?? ""})`}`;
  const o = M.forwardRef(r);
  return o[Gf] = e15, o;
}
function qf({ layoutId: e15 }) {
  const t = M.useContext(Va).id;
  return t && e15 !== void 0 ? t + "-" + e15 : e15;
}
function Zf(e15, t) {
  M.useContext(Tu).strict;
}
function Qf(e15) {
  const { drag: t, layout: i } = Be;
  if (!t && !i) return {};
  const n = { ...t, ...i };
  return { MeasureLayout: (t == null ? void 0 : t.isEnabled(e15)) || (i == null ? void 0 : i.isEnabled(e15)) ? n.MeasureLayout : void 0, ProjectionNode: n.ProjectionNode };
}
function Jf(e15, t) {
  if (typeof Proxy > "u") return ln;
  const i = /* @__PURE__ */ new Map(), n = (r, o) => ln(r, o, e15, t), s = (r, o) => n(r, o);
  return new Proxy(s, { get: (r, o) => o === "create" ? n : (i.has(o) || i.set(o, ln(o, void 0, e15, t)), i.get(o)) });
}
function Ou({ top: e15, left: t, right: i, bottom: n }) {
  return { x: { min: t, max: i }, y: { min: e15, max: n } };
}
function td({ x: e15, y: t }) {
  return { top: t.min, right: e15.max, bottom: t.max, left: e15.min };
}
function ed(e15, t) {
  if (!t) return e15;
  const i = t({ x: e15.left, y: e15.top }), n = t({ x: e15.right, y: e15.bottom });
  return { top: i.y, left: i.x, bottom: n.y, right: n.x };
}
function cn(e15) {
  return e15 === void 0 || e15 === 1;
}
function $n({ scale: e15, scaleX: t, scaleY: i }) {
  return !cn(e15) || !cn(t) || !cn(i);
}
function ae(e15) {
  return $n(e15) || Lu(e15) || e15.z || e15.rotate || e15.rotateX || e15.rotateY || e15.skewX || e15.skewY;
}
function Lu(e15) {
  return Ur(e15.x) || Ur(e15.y);
}
function Ur(e15) {
  return e15 && e15 !== "0%";
}
function Ui(e15, t, i) {
  const n = e15 - i, s = t * n;
  return i + s;
}
function zr(e15, t, i, n, s) {
  return s !== void 0 && (e15 = Ui(e15, s, n)), Ui(e15, i, n) + t;
}
function Xn(e15, t = 0, i = 1, n, s) {
  e15.min = zr(e15.min, t, i, n, s), e15.max = zr(e15.max, t, i, n, s);
}
function Fu(e15, { x: t, y: i }) {
  Xn(e15.x, t.translate, t.scale, t.originPoint), Xn(e15.y, i.translate, i.scale, i.originPoint);
}
const Wr = 0.999999999999, Kr = 1.0000000000001;
function id(e15, t, i, n = false) {
  const s = i.length;
  if (!s) return;
  t.x = t.y = 1;
  let r, o;
  for (let a = 0; a < s; a++) {
    r = i[a], o = r.projectionDelta;
    const { visualElement: u } = r.options;
    u && u.props.style && u.props.style.display === "contents" || (n && r.options.layoutScroll && r.scroll && r !== r.root && Ae(e15, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }), o && (t.x *= o.x.scale, t.y *= o.y.scale, Fu(e15, o)), n && ae(r.latestValues) && Ae(e15, r.latestValues));
  }
  t.x < Kr && t.x > Wr && (t.x = 1), t.y < Kr && t.y > Wr && (t.y = 1);
}
function Se(e15, t) {
  e15.min = e15.min + t, e15.max = e15.max + t;
}
function Gr(e15, t, i, n, s = 0.5) {
  const r = U(e15.min, e15.max, s);
  Xn(e15, t, i, r, n);
}
function Ae(e15, t) {
  Gr(e15.x, t.x, t.scaleX, t.scale, t.originX), Gr(e15.y, t.y, t.scaleY, t.scale, t.originY);
}
function Iu(e15, t) {
  return Ou(ed(e15.getBoundingClientRect(), t));
}
function nd(e15, t, i) {
  const n = Iu(e15, i), { scroll: s } = t;
  return s && (Se(n.x, s.offset.x), Se(n.y, s.offset.y)), n;
}
const Yr = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }), Ce = () => ({ x: Yr(), y: Yr() }), $r = () => ({ min: 0, max: 0 }), Y = () => ({ x: $r(), y: $r() }), Hn = { current: null }, Bu = { current: false };
function sd() {
  if (Bu.current = true, !!Ts) if (window.matchMedia) {
    const e15 = window.matchMedia("(prefers-reduced-motion)"), t = () => Hn.current = e15.matches;
    e15.addEventListener("change", t), t();
  } else Hn.current = false;
}
const rd = /* @__PURE__ */ new WeakMap();
function od(e15, t, i) {
  for (const n in t) {
    const s = t[n], r = i[n];
    if (it(s)) e15.addValue(n, s);
    else if (it(r)) e15.addValue(n, _e(s, { owner: e15 }));
    else if (r !== s) if (e15.hasValue(n)) {
      const o = e15.getValue(n);
      o.liveStyle === true ? o.jump(s) : o.hasAnimated || o.set(s);
    } else {
      const o = e15.getStaticValue(n);
      e15.addValue(n, _e(o !== void 0 ? o : s, { owner: e15 }));
    }
  }
  for (const n in i) t[n] === void 0 && e15.removeValue(n);
  return t;
}
const Xr = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class ad {
  scrapeMotionValuesFromProps(t, i, n) {
    return {};
  }
  constructor({ parent: t, props: i, presenceContext: n, reducedMotionConfig: s, blockInitialAnimation: r, visualState: o }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ns, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = ot.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, B.render(this.render, false, true));
    };
    const { latestValues: u, renderState: l } = o;
    this.latestValues = u, this.baseTarget = { ...u }, this.initialValues = i.initial ? { ...u } : {}, this.renderState = l, this.parent = t, this.props = i, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!r, this.isControllingVariants = $i(i), this.isVariantNode = bu(i), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...h } = this.scrapeMotionValuesFromProps(i, {}, this);
    for (const f in h) {
      const p = h[f];
      u[f] !== void 0 && it(p) && p.set(u[f]);
    }
  }
  mount(t) {
    var _a2;
    this.current = t, rd.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((i, n) => this.bindToMotionValue(n, i)), Bu.current || sd(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : Hn.current, (_a2 = this.parent) == null ? void 0 : _a2.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    var _a2;
    this.projection && this.projection.unmount(), qt(this.notifyUpdate), qt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (_a2 = this.parent) == null ? void 0 : _a2.removeChild(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const i = this.features[t];
      i && (i.unmount(), i.isMounted = false);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, i) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const n = Ue.has(t);
    n && this.onBindTransform && this.onBindTransform();
    const s = i.on("change", (o) => {
      this.latestValues[t] = o, this.props.onUpdate && B.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = true), this.scheduleRender();
    });
    let r;
    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, t, i)), this.valueSubscriptions.set(t, () => {
      s(), r && r(), i.owner && i.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Be) {
      const i = Be[t];
      if (!i) continue;
      const { isEnabled: n, Feature: s } = i;
      if (!this.features[t] && s && n(this.props) && (this.features[t] = new s(this)), this.features[t]) {
        const r = this.features[t];
        r.isMounted ? r.update() : (r.mount(), r.isMounted = true);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Y();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, i) {
    this.latestValues[t] = i;
  }
  update(t, i) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = i;
    for (let n = 0; n < Xr.length; n++) {
      const s = Xr[n];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const r = "on" + s, o = t[r];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    this.prevMotionValues = od(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(t) {
    const i = this.getClosestVariantNode();
    if (i) return i.variantChildren && i.variantChildren.add(t), () => i.variantChildren.delete(t);
  }
  addValue(t, i) {
    const n = this.values.get(t);
    i !== n && (n && this.removeValue(t), this.bindToMotionValue(t, i), this.values.set(t, i), this.latestValues[t] = i.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const i = this.valueSubscriptions.get(t);
    i && (i(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, i) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let n = this.values.get(t);
    return n === void 0 && i !== void 0 && (n = _e(i === null ? void 0 : i, { owner: this }), this.addValue(t, n)), n;
  }
  readValue(t, i) {
    let n = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return n != null && (typeof n == "string" && (Ea(n) || Oa(n)) ? n = parseFloat(n) : !xf(n) && Zt.test(i) && (n = mu(t, i)), this.setBaseTarget(t, it(n) ? n.get() : n)), it(n) ? n.get() : n;
  }
  setBaseTarget(t, i) {
    this.baseTarget[t] = i;
  }
  getBaseTarget(t) {
    var _a2;
    const { initial: i } = this.props;
    let n;
    if (typeof i == "string" || typeof i == "object") {
      const r = qs(this.props, i, (_a2 = this.presenceContext) == null ? void 0 : _a2.custom);
      r && (n = r[t]);
    }
    if (i && n !== void 0) return n;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !it(s) ? s : this.initialValues[t] !== void 0 && n === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, i) {
    return this.events[t] || (this.events[t] = new Cs()), this.events[t].add(i);
  }
  notify(t, ...i) {
    this.events[t] && this.events[t].notify(...i);
  }
  scheduleRenderMicrotask() {
    zs.render(this.render);
  }
}
class Nu extends ad {
  constructor() {
    super(...arguments), this.KeyframeResolver = af;
  }
  sortInstanceNodePosition(t, i) {
    return t.compareDocumentPosition(i) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, i) {
    return t.style ? t.style[i] : void 0;
  }
  removeValueFromRenderState(t, { vars: i, style: n }) {
    delete i[t], delete n[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    it(t) && (this.childSubscription = t.on("change", (i) => {
      this.current && (this.current.textContent = `${i}`);
    }));
  }
}
function ju(e15, { style: t, vars: i }, n, s) {
  const r = e15.style;
  let o;
  for (o in t) r[o] = t[o];
  s == null ? void 0 : s.applyProjectionStyles(r, n);
  for (o in i) r.setProperty(o, i[o]);
}
function ud(e15) {
  return window.getComputedStyle(e15);
}
class ld extends Nu {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = ju;
  }
  readValueFromInstance(t, i) {
    var _a2;
    if (Ue.has(i)) return ((_a2 = this.projection) == null ? void 0 : _a2.isProjecting) ? jn(i) : Sh(t, i);
    {
      const n = ud(t), s = (Vs(i) ? n.getPropertyValue(i) : n[i]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: i }) {
    return Iu(t, i);
  }
  build(t, i, n) {
    $s(t, i, n.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, i, n) {
    return Zs(t, i, n);
  }
}
const Uu = /* @__PURE__ */ new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function cd(e15, t, i, n) {
  ju(e15, t, void 0, n);
  for (const s in t.attrs) e15.setAttribute(Uu.has(s) ? s : Qs(s), t.attrs[s]);
}
class hd extends Nu {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = Y;
  }
  getBaseTargetFromProps(t, i) {
    return t[i];
  }
  readValueFromInstance(t, i) {
    if (Ue.has(i)) {
      const n = pu(i);
      return n && n.default || 0;
    }
    return i = Uu.has(i) ? i : Qs(i), t.getAttribute(i);
  }
  scrapeMotionValuesFromProps(t, i, n) {
    return Vu(t, i, n);
  }
  build(t, i, n) {
    Au(t, i, this.isSVGTag, n.transformTemplate, n.style);
  }
  renderInstance(t, i, n, s) {
    cd(t, i, n, s);
  }
  mount(t) {
    this.isSVGTag = Mu(t.tagName), super.mount(t);
  }
}
const fd = (e15, t) => Hs(e15) ? new hd(t) : new ld(t, { allowProjection: e15 !== M.Fragment });
function Re(e15, t, i) {
  const n = e15.getProps();
  return qs(n, t, i !== void 0 ? i : n.custom, e15);
}
const qn = (e15) => Array.isArray(e15);
function dd(e15, t, i) {
  e15.hasValue(t) ? e15.getValue(t).set(i) : e15.addValue(t, _e(i));
}
function pd(e15) {
  return qn(e15) ? e15[e15.length - 1] || 0 : e15;
}
function Js(e15, t) {
  const i = Re(e15, t);
  let { transitionEnd: n = {}, transition: s = {}, ...r } = i || {};
  r = { ...r, ...n };
  for (const o in r) {
    const a = pd(r[o]);
    dd(e15, o, a);
  }
}
function md(e15) {
  return !!(it(e15) && e15.add);
}
function Zn(e15, t) {
  const i = e15.getValue("willChange");
  if (md(i)) return i.add(t);
  if (!i && Ut.WillChange) {
    const n = new Ut.WillChange("auto");
    e15.addValue("willChange", n), n.add(t);
  }
}
function zu(e15) {
  return e15.props[Ru];
}
const gd = (e15) => e15 !== null;
function yd(e15, { repeat: t, repeatType: i = "loop" }, n) {
  const s = e15.filter(gd), r = t && i !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return s[r];
}
const _d = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }, vd = (e15) => ({ type: "spring", stiffness: 550, damping: e15 === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }), xd = { type: "keyframes", duration: 0.8 }, Td = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }, Pd = (e15, { keyframes: t }) => t.length > 2 ? xd : Ue.has(e15) ? e15.startsWith("scale") ? vd(t[1]) : _d : Td;
function bd({ when: e15, delay: t, delayChildren: i, staggerChildren: n, staggerDirection: s, repeat: r, repeatType: o, repeatDelay: a, from: u, elapsed: l, ...c }) {
  return !!Object.keys(c).length;
}
const tr = (e15, t, i, n = {}, s, r) => (o) => {
  const a = js(n, e15) || {}, u = a.delay || n.delay || 0;
  let { elapsed: l = 0 } = n;
  l = l - Et(u);
  const c = { keyframes: Array.isArray(i) ? i : [null, i], ease: "easeOut", velocity: t.getVelocity(), ...a, delay: -l, onUpdate: (f) => {
    t.set(f), a.onUpdate && a.onUpdate(f);
  }, onComplete: () => {
    o(), a.onComplete && a.onComplete();
  }, name: e15, motionValue: t, element: r ? void 0 : s };
  bd(a) || Object.assign(c, Pd(e15, c)), c.duration && (c.duration = Et(c.duration)), c.repeatDelay && (c.repeatDelay = Et(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = false;
  if ((c.type === false || c.duration === 0 && !c.repeatDelay) && (Gn(c), c.delay === 0 && (h = true)), (Ut.instantAnimations || Ut.skipAnimations) && (h = true, Gn(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, h && !r && t.get() !== void 0) {
    const f = yd(c.keyframes, a);
    if (f !== void 0) {
      B.update(() => {
        c.onUpdate(f), c.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Bs(c) : new Xh(c);
};
function wd({ protectedKeys: e15, needsAnimating: t }, i) {
  const n = e15.hasOwnProperty(i) && t[i] !== true;
  return t[i] = false, n;
}
function Wu(e15, t, { delay: i = 0, transitionOverride: n, type: s } = {}) {
  let { transition: r = e15.getDefaultTransition(), transitionEnd: o, ...a } = t;
  n && (r = n);
  const u = [], l = s && e15.animationState && e15.animationState.getState()[s];
  for (const c in a) {
    const h = e15.getValue(c, e15.latestValues[c] ?? null), f = a[c];
    if (f === void 0 || l && wd(l, c)) continue;
    const p = { delay: i, ...js(r || {}, c) }, m = h.get();
    if (m !== void 0 && !h.isAnimating && !Array.isArray(f) && f === m && !p.velocity) continue;
    let d = false;
    if (window.MotionHandoffAnimation) {
      const y = zu(e15);
      if (y) {
        const x = window.MotionHandoffAnimation(y, c, B);
        x !== null && (p.startTime = x, d = true);
      }
    }
    Zn(e15, c), h.start(tr(c, h, f, e15.shouldReduceMotion && hu.has(c) ? { type: false } : p, e15, d));
    const g = h.animation;
    g && u.push(g);
  }
  return o && Promise.all(u).then(() => {
    B.update(() => {
      o && Js(e15, o);
    });
  }), u;
}
function Ku(e15, t, i, n = 0, s = 1) {
  const r = Array.from(e15).sort((l, c) => l.sortNodePosition(c)).indexOf(t), o = e15.size, a = (o - 1) * n;
  return typeof i == "function" ? i(r, o) : s === 1 ? r * n : a - r * n;
}
function Qn(e15, t, i = {}) {
  var _a2;
  const n = Re(e15, t, i.type === "exit" ? (_a2 = e15.presenceContext) == null ? void 0 : _a2.custom : void 0);
  let { transition: s = e15.getDefaultTransition() || {} } = n || {};
  i.transitionOverride && (s = i.transitionOverride);
  const r = n ? () => Promise.all(Wu(e15, n, i)) : () => Promise.resolve(), o = e15.variantChildren && e15.variantChildren.size ? (u = 0) => {
    const { delayChildren: l = 0, staggerChildren: c, staggerDirection: h } = s;
    return Sd(e15, t, u, l, c, h, i);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [u, l] = a === "beforeChildren" ? [r, o] : [o, r];
    return u().then(() => l());
  } else return Promise.all([r(), o(i.delay)]);
}
function Sd(e15, t, i = 0, n = 0, s = 0, r = 1, o) {
  const a = [];
  for (const u of e15.variantChildren) u.notify("AnimationStart", t), a.push(Qn(u, t, { ...o, delay: i + (typeof n == "function" ? 0 : n) + Ku(e15.variantChildren, u, n, s, r) }).then(() => u.notify("AnimationComplete", t)));
  return Promise.all(a);
}
function Gu(e15, t, i = {}) {
  e15.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const s = t.map((r) => Qn(e15, r, i));
    n = Promise.all(s);
  } else if (typeof t == "string") n = Qn(e15, t, i);
  else {
    const s = typeof t == "function" ? Re(e15, t, i.custom) : t;
    n = Promise.all(Wu(e15, s, i));
  }
  return n.then(() => {
    e15.notify("AnimationComplete", t);
  });
}
function Yu(e15, t) {
  if (!Array.isArray(t)) return false;
  const i = t.length;
  if (i !== e15.length) return false;
  for (let n = 0; n < i; n++) if (t[n] !== e15[n]) return false;
  return true;
}
const Ad = Ys.length;
function $u(e15) {
  if (!e15) return;
  if (!e15.isControllingVariants) {
    const i = e15.parent ? $u(e15.parent) || {} : {};
    return e15.props.initial !== void 0 && (i.initial = e15.props.initial), i;
  }
  const t = {};
  for (let i = 0; i < Ad; i++) {
    const n = Ys[i], s = e15.props[n];
    (hi(s) || s === false) && (t[n] = s);
  }
  return t;
}
const Cd = [...Gs].reverse(), Md = Gs.length;
function Dd(e15) {
  return (t) => Promise.all(t.map(({ animation: i, options: n }) => Gu(e15, i, n)));
}
function Vd(e15) {
  let t = Dd(e15), i = Hr(), n = true;
  const s = (u) => (l, c) => {
    var _a2;
    const h = Re(e15, c, u === "exit" ? (_a2 = e15.presenceContext) == null ? void 0 : _a2.custom : void 0);
    if (h) {
      const { transition: f, transitionEnd: p, ...m } = h;
      l = { ...l, ...m, ...p };
    }
    return l;
  };
  function r(u) {
    t = u(e15);
  }
  function o(u) {
    const { props: l } = e15, c = $u(e15.parent) || {}, h = [], f = /* @__PURE__ */ new Set();
    let p = {}, m = 1 / 0;
    for (let g = 0; g < Md; g++) {
      const y = Cd[g], x = i[y], v = l[y] !== void 0 ? l[y] : c[y], T = hi(v), _ = y === u ? x.isActive : null;
      _ === false && (m = g);
      let b = v === c[y] && v !== l[y] && T;
      if (b && n && e15.manuallyAnimateOnMount && (b = false), x.protectedKeys = { ...p }, !x.isActive && _ === null || !v && !x.prevProp || Yi(v) || typeof v == "boolean") continue;
      const S = Rd(x.prevProp, v);
      let P = S || y === u && x.isActive && !b && T || g > m && T, w = false;
      const C = Array.isArray(v) ? v : [v];
      let R = C.reduce(s(y), {});
      _ === false && (R = {});
      const { prevResolvedValues: E = {} } = x, k = { ...E, ...R }, X = (D) => {
        P = true, f.has(D) && (w = true, f.delete(D)), x.needsAnimating[D] = true;
        const F = e15.getValue(D);
        F && (F.liveStyle = false);
      };
      for (const D in k) {
        const F = R[D], _t = E[D];
        if (p.hasOwnProperty(D)) continue;
        let vt = false;
        qn(F) && qn(_t) ? vt = !Yu(F, _t) : vt = F !== _t, vt ? F != null ? X(D) : f.add(D) : F !== void 0 && f.has(D) ? X(D) : x.protectedKeys[D] = true;
      }
      x.prevProp = v, x.prevResolvedValues = R, x.isActive && (p = { ...p, ...R }), n && e15.blockInitialAnimation && (P = false);
      const K = b && S;
      P && (!K || w) && h.push(...C.map((D) => {
        const F = { type: y };
        if (typeof D == "string" && n && !K && e15.manuallyAnimateOnMount && e15.parent) {
          const { parent: _t } = e15, vt = Re(_t, D);
          if (_t.enteringChildren && vt) {
            const { delayChildren: te } = vt.transition || {};
            F.delay = Ku(_t.enteringChildren, e15, te);
          }
        }
        return { animation: D, options: F };
      }));
    }
    if (f.size) {
      const g = {};
      if (typeof l.initial != "boolean") {
        const y = Re(e15, Array.isArray(l.initial) ? l.initial[0] : l.initial);
        y && y.transition && (g.transition = y.transition);
      }
      f.forEach((y) => {
        const x = e15.getBaseTarget(y), v = e15.getValue(y);
        v && (v.liveStyle = true), g[y] = x ?? null;
      }), h.push({ animation: g });
    }
    let d = !!h.length;
    return n && (l.initial === false || l.initial === l.animate) && !e15.manuallyAnimateOnMount && (d = false), n = false, d ? t(h) : Promise.resolve();
  }
  function a(u, l) {
    var _a2;
    if (i[u].isActive === l) return Promise.resolve();
    (_a2 = e15.variantChildren) == null ? void 0 : _a2.forEach((h) => {
      var _a3;
      return (_a3 = h.animationState) == null ? void 0 : _a3.setActive(u, l);
    }), i[u].isActive = l;
    const c = o(u);
    for (const h in i) i[h].protectedKeys = {};
    return c;
  }
  return { animateChanges: o, setActive: a, setAnimateFunction: r, getState: () => i, reset: () => {
    i = Hr();
  } };
}
function Rd(e15, t) {
  return typeof t == "string" ? t !== e15 : Array.isArray(t) ? !Yu(t, e15) : false;
}
function re(e15 = false) {
  return { isActive: e15, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Hr() {
  return { animate: re(true), whileInView: re(), whileHover: re(), whileTap: re(), whileDrag: re(), whileFocus: re(), exit: re() };
}
class Jt {
  constructor(t) {
    this.isMounted = false, this.node = t;
  }
  update() {
  }
}
class Ed extends Jt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Vd(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Yi(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: i } = this.node.prevProps || {};
    t !== i && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var _a2;
    this.node.animationState.reset(), (_a2 = this.unmountControls) == null ? void 0 : _a2.call(this);
  }
}
let kd = 0;
class Od extends Jt {
  constructor() {
    super(...arguments), this.id = kd++;
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: i } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === n) return;
    const s = this.node.animationState.setActive("exit", !t);
    i && !t && s.then(() => {
      i(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: i } = this.node.presenceContext || {};
    i && i(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const Ld = { animation: { Feature: Ed }, exit: { Feature: Od } };
function di(e15, t, i, n = { passive: true }) {
  return e15.addEventListener(t, i, n), () => e15.removeEventListener(t, i);
}
function _i(e15) {
  return { point: { x: e15.pageX, y: e15.pageY } };
}
const Fd = (e15) => (t) => Ws(t) && e15(t, _i(t));
function Qe(e15, t, i, n) {
  return di(e15, t, Fd(i), n);
}
const Xu = 1e-4, Id = 1 - Xu, Bd = 1 + Xu, Hu = 0.01, Nd = 0 - Hu, jd = 0 + Hu;
function rt(e15) {
  return e15.max - e15.min;
}
function Ud(e15, t, i) {
  return Math.abs(e15 - t) <= i;
}
function qr(e15, t, i, n = 0.5) {
  e15.origin = n, e15.originPoint = U(t.min, t.max, e15.origin), e15.scale = rt(i) / rt(t), e15.translate = U(i.min, i.max, e15.origin) - e15.originPoint, (e15.scale >= Id && e15.scale <= Bd || isNaN(e15.scale)) && (e15.scale = 1), (e15.translate >= Nd && e15.translate <= jd || isNaN(e15.translate)) && (e15.translate = 0);
}
function Je(e15, t, i, n) {
  qr(e15.x, t.x, i.x, n ? n.originX : void 0), qr(e15.y, t.y, i.y, n ? n.originY : void 0);
}
function Zr(e15, t, i) {
  e15.min = i.min + t.min, e15.max = e15.min + rt(t);
}
function zd(e15, t, i) {
  Zr(e15.x, t.x, i.x), Zr(e15.y, t.y, i.y);
}
function Qr(e15, t, i) {
  e15.min = t.min - i.min, e15.max = e15.min + rt(t);
}
function ti(e15, t, i) {
  Qr(e15.x, t.x, i.x), Qr(e15.y, t.y, i.y);
}
function Pt(e15) {
  return [e15("x"), e15("y")];
}
const qu = ({ current: e15 }) => e15 ? e15.ownerDocument.defaultView : null, Jr = (e15, t) => Math.abs(e15 - t);
function Wd(e15, t) {
  const i = Jr(e15.x, t.x), n = Jr(e15.y, t.y);
  return Math.sqrt(i ** 2 + n ** 2);
}
class Zu {
  constructor(t, i, { transformPagePoint: n, contextWindow: s = window, dragSnapToOrigin: r = false, distanceThreshold: o = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const f = fn(this.lastMoveEventInfo, this.history), p = this.startEvent !== null, m = Wd(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!p && !m) return;
      const { point: d } = f, { timestamp: g } = J;
      this.history.push({ ...d, timestamp: g });
      const { onStart: y, onMove: x } = this.handlers;
      p || (y && y(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, p) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = hn(p, this.transformPagePoint), B.update(this.updatePoint, true);
    }, this.handlePointerUp = (f, p) => {
      this.end();
      const { onEnd: m, onSessionEnd: d, resumeAnimation: g } = this.handlers;
      if (this.dragSnapToOrigin && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const y = fn(f.type === "pointercancel" ? this.lastMoveEventInfo : hn(p, this.transformPagePoint), this.history);
      this.startEvent && m && m(f, y), d && d(f, y);
    }, !Ws(t)) return;
    this.dragSnapToOrigin = r, this.handlers = i, this.transformPagePoint = n, this.distanceThreshold = o, this.contextWindow = s || window;
    const a = _i(t), u = hn(a, this.transformPagePoint), { point: l } = u, { timestamp: c } = J;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: h } = i;
    h && h(t, fn(u, this.history)), this.removeListeners = mi(Qe(this.contextWindow, "pointermove", this.handlePointerMove), Qe(this.contextWindow, "pointerup", this.handlePointerUp), Qe(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), qt(this.updatePoint);
  }
}
function hn(e15, t) {
  return t ? { point: t(e15.point) } : e15;
}
function to(e15, t) {
  return { x: e15.x - t.x, y: e15.y - t.y };
}
function fn({ point: e15 }, t) {
  return { point: e15, delta: to(e15, Qu(t)), offset: to(e15, Kd(t)), velocity: Gd(t, 0.1) };
}
function Kd(e15) {
  return e15[0];
}
function Qu(e15) {
  return e15[e15.length - 1];
}
function Gd(e15, t) {
  if (e15.length < 2) return { x: 0, y: 0 };
  let i = e15.length - 1, n = null;
  const s = Qu(e15);
  for (; i >= 0 && (n = e15[i], !(s.timestamp - n.timestamp > Et(t))); ) i--;
  if (!n) return { x: 0, y: 0 };
  const r = At(s.timestamp - n.timestamp);
  if (r === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - n.x) / r, y: (s.y - n.y) / r };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Yd(e15, { min: t, max: i }, n) {
  return t !== void 0 && e15 < t ? e15 = n ? U(t, e15, n.min) : Math.max(e15, t) : i !== void 0 && e15 > i && (e15 = n ? U(i, e15, n.max) : Math.min(e15, i)), e15;
}
function eo(e15, t, i) {
  return { min: t !== void 0 ? e15.min + t : void 0, max: i !== void 0 ? e15.max + i - (e15.max - e15.min) : void 0 };
}
function $d(e15, { top: t, left: i, bottom: n, right: s }) {
  return { x: eo(e15.x, i, s), y: eo(e15.y, t, n) };
}
function io(e15, t) {
  let i = t.min - e15.min, n = t.max - e15.max;
  return t.max - t.min < e15.max - e15.min && ([i, n] = [n, i]), { min: i, max: n };
}
function Xd(e15, t) {
  return { x: io(e15.x, t.x), y: io(e15.y, t.y) };
}
function Hd(e15, t) {
  let i = 0.5;
  const n = rt(e15), s = rt(t);
  return s > n ? i = ui(t.min, t.max - n, e15.min) : n > s && (i = ui(e15.min, e15.max - s, t.min)), jt(0, 1, i);
}
function qd(e15, t) {
  const i = {};
  return t.min !== void 0 && (i.min = t.min - e15.min), t.max !== void 0 && (i.max = t.max - e15.min), i;
}
const Jn = 0.35;
function Zd(e15 = Jn) {
  return e15 === false ? e15 = 0 : e15 === true && (e15 = Jn), { x: no(e15, "left", "right"), y: no(e15, "top", "bottom") };
}
function no(e15, t, i) {
  return { min: so(e15, t), max: so(e15, i) };
}
function so(e15, t) {
  return typeof e15 == "number" ? e15 : e15[t] || 0;
}
const Qd = /* @__PURE__ */ new WeakMap();
class Jd {
  constructor(t) {
    this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = Y(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: i = false, distanceThreshold: n } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === false) return;
    const r = (h) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), i && this.snapToCursor(_i(h).point);
    }, o = (h, f) => {
      const { drag: p, dragPropagation: m, onDragStart: d } = this.getProps();
      if (p && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = ff(p), !this.openDragLock)) return;
      this.latestPointerEvent = h, this.latestPanInfo = f, this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), Pt((y) => {
        let x = this.getAxisMotionValue(y).get() || 0;
        if (kt.test(x)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const T = v.layout.layoutBox[y];
            T && (x = rt(T) * (parseFloat(x) / 100));
          }
        }
        this.originPoint[y] = x;
      }), d && B.postRender(() => d(h, f)), Zn(this.visualElement, "transform");
      const { animationState: g } = this.visualElement;
      g && g.setActive("whileDrag", true);
    }, a = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f;
      const { dragPropagation: p, dragDirectionLock: m, onDirectionLock: d, onDrag: g } = this.getProps();
      if (!p && !this.openDragLock) return;
      const { offset: y } = f;
      if (m && this.currentDirection === null) {
        this.currentDirection = tp(y), this.currentDirection !== null && d && d(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, y), this.updateAxis("y", f.point, y), this.visualElement.render(), g && g(h, f);
    }, u = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f, this.stop(h, f), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, l = () => Pt((h) => {
      var _a2;
      return this.getAnimationState(h) === "paused" && ((_a2 = this.getAxisMotionValue(h).animation) == null ? void 0 : _a2.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Zu(t, { onSessionStart: r, onStart: o, onMove: a, onSessionEnd: u, resumeAnimation: l }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: c, distanceThreshold: n, contextWindow: qu(this.visualElement) });
  }
  stop(t, i) {
    const n = t || this.latestPointerEvent, s = i || this.latestPanInfo, r = this.isDragging;
    if (this.cancel(), !r || !s || !n) return;
    const { velocity: o } = s;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && B.postRender(() => a(n, s));
  }
  cancel() {
    this.isDragging = false;
    const { projection: t, animationState: i } = this.visualElement;
    t && (t.isAnimationBlocked = false), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: n } = this.getProps();
    !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), i && i.setActive("whileDrag", false);
  }
  updateAxis(t, i, n) {
    const { drag: s } = this.getProps();
    if (!n || !Pi(t, s, this.currentDirection)) return;
    const r = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (o = Yd(o, this.constraints[t], this.elastic[t])), r.set(o);
  }
  resolveConstraints() {
    var _a2;
    const { dragConstraints: t, dragElastic: i } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a2 = this.visualElement.projection) == null ? void 0 : _a2.layout, s = this.constraints;
    t && we(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = $d(n.layoutBox, t) : this.constraints = false, this.elastic = Zd(i), s !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Pt((r) => {
      this.constraints !== false && this.getAxisMotionValue(r) && (this.constraints[r] = qd(n.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: i } = this.getProps();
    if (!t || !we(t)) return false;
    const n = t.current, { projection: s } = this.visualElement;
    if (!s || !s.layout) return false;
    const r = nd(n, s.root, this.visualElement.getTransformPagePoint());
    let o = Xd(s.layout.layoutBox, r);
    if (i) {
      const a = i(td(o));
      this.hasMutatedConstraints = !!a, a && (o = Ou(a));
    }
    return o;
  }
  startAnimation(t) {
    const { drag: i, dragMomentum: n, dragElastic: s, dragTransition: r, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), u = this.constraints || {}, l = Pt((c) => {
      if (!Pi(c, i, this.currentDirection)) return;
      let h = u && u[c] || {};
      o && (h = { min: 0, max: 0 });
      const f = s ? 200 : 1e6, p = s ? 40 : 1e7, m = { type: "inertia", velocity: n ? t[c] : 0, bounceStiffness: f, bounceDamping: p, timeConstant: 750, restDelta: 1, restSpeed: 10, ...r, ...h };
      return this.startAxisValueAnimation(c, m);
    });
    return Promise.all(l).then(a);
  }
  startAxisValueAnimation(t, i) {
    const n = this.getAxisMotionValue(t);
    return Zn(this.visualElement, t), n.start(tr(t, n, 0, i, this.visualElement, false));
  }
  stopAnimation() {
    Pt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Pt((t) => {
      var _a2;
      return (_a2 = this.getAxisMotionValue(t).animation) == null ? void 0 : _a2.pause();
    });
  }
  getAnimationState(t) {
    var _a2;
    return (_a2 = this.getAxisMotionValue(t).animation) == null ? void 0 : _a2.state;
  }
  getAxisMotionValue(t) {
    const i = `_drag${t.toUpperCase()}`, n = this.visualElement.getProps(), s = n[i];
    return s || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Pt((i) => {
      const { drag: n } = this.getProps();
      if (!Pi(i, n, this.currentDirection)) return;
      const { projection: s } = this.visualElement, r = this.getAxisMotionValue(i);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[i];
        r.set(t[i] - U(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: i } = this.getProps(), { projection: n } = this.visualElement;
    if (!we(i) || !n || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Pt((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== false) {
        const u = a.get();
        s[o] = Hd({ min: u, max: u }, this.constraints[o]);
      }
    });
    const { transformTemplate: r } = this.visualElement.getProps();
    this.visualElement.current.style.transform = r ? r({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Pt((o) => {
      if (!Pi(o, t, null)) return;
      const a = this.getAxisMotionValue(o), { min: u, max: l } = this.constraints[o];
      a.set(U(u, l, s[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Qd.set(this.visualElement, this);
    const t = this.visualElement.current, i = Qe(t, "pointerdown", (u) => {
      const { drag: l, dragListener: c = true } = this.getProps();
      l && c && this.start(u);
    }), n = () => {
      const { dragConstraints: u } = this.getProps();
      we(u) && u.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, r = s.addEventListener("measure", n);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), B.read(n);
    const o = di(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", (({ delta: u, hasLayoutChanged: l }) => {
      this.isDragging && l && (Pt((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += u[c].translate, h.set(h.get() + u[c].translate));
      }), this.visualElement.render());
    }));
    return () => {
      o(), i(), r(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: i = false, dragDirectionLock: n = false, dragPropagation: s = false, dragConstraints: r = false, dragElastic: o = Jn, dragMomentum: a = true } = t;
    return { ...t, drag: i, dragDirectionLock: n, dragPropagation: s, dragConstraints: r, dragElastic: o, dragMomentum: a };
  }
}
function Pi(e15, t, i) {
  return (t === true || t === e15) && (i === null || i === e15);
}
function tp(e15, t = 10) {
  let i = null;
  return Math.abs(e15.y) > t ? i = "y" : Math.abs(e15.x) > t && (i = "x"), i;
}
class ep extends Jt {
  constructor(t) {
    super(t), this.removeGroupControls = Ct, this.removeListeners = Ct, this.controls = new Jd(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ct;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ro = (e15) => (t, i) => {
  e15 && B.postRender(() => e15(t, i));
};
class ip extends Jt {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ct;
  }
  onPointerDown(t) {
    this.session = new Zu(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: qu(this.node) });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: i, onPan: n, onPanEnd: s } = this.node.getProps();
    return { onSessionStart: ro(t), onStart: ro(i), onMove: n, onEnd: (r, o) => {
      delete this.session, s && B.postRender(() => s(r, o));
    } };
  }
  mount() {
    this.removePointerDownListener = Qe(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Di = { hasAnimatedSinceResize: true, hasEverUpdated: false };
function oo(e15, t) {
  return t.max === t.min ? 0 : e15 / (t.max - t.min) * 100;
}
const We = { correct: (e15, t) => {
  if (!t.target) return e15;
  if (typeof e15 == "string") if (A.test(e15)) e15 = parseFloat(e15);
  else return e15;
  const i = oo(e15, t.target.x), n = oo(e15, t.target.y);
  return `${i}% ${n}%`;
} }, np = { correct: (e15, { treeScale: t, projectionDelta: i }) => {
  const n = e15, s = Zt.parse(e15);
  if (s.length > 5) return n;
  const r = Zt.createTransformer(e15), o = typeof s[0] != "number" ? 1 : 0, a = i.x.scale * t.x, u = i.y.scale * t.y;
  s[0 + o] /= a, s[1 + o] /= u;
  const l = U(a, u, 0.5);
  return typeof s[2 + o] == "number" && (s[2 + o] /= l), typeof s[3 + o] == "number" && (s[3 + o] /= l), r(s);
} };
let dn = false;
class sp extends M.Component {
  componentDidMount() {
    const { visualElement: t, layoutGroup: i, switchLayoutGroup: n, layoutId: s } = this.props, { projection: r } = t;
    Mf(rp), r && (i.group && i.group.add(r), n && n.register && s && n.register(r), dn && r.root.didUpdate(), r.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), r.setOptions({ ...r.options, onExitComplete: () => this.safeToRemove() })), Di.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: i, visualElement: n, drag: s, isPresent: r } = this.props, { projection: o } = n;
    return o && (o.isPresent = r, dn = true, s || t.layoutDependency !== i || i === void 0 || t.isPresent !== r ? o.willUpdate() : this.safeToRemove(), t.isPresent !== r && (r ? o.promote() : o.relegate() || B.postRender(() => {
      const a = o.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), zs.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: i, switchLayoutGroup: n } = this.props, { projection: s } = t;
    dn = true, s && (s.scheduleCheckAfterUnmount(), i && i.group && i.group.remove(s), n && n.deregister && n.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Ju(e15) {
  const [t, i] = Tf(), n = M.useContext(Va);
  return _n.jsx(sp, { ...e15, layoutGroup: n, switchLayoutGroup: M.useContext(Eu), isPresent: t, safeToRemove: i });
}
const rp = { borderRadius: { ...We, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: We, borderTopRightRadius: We, borderBottomLeftRadius: We, borderBottomRightRadius: We, boxShadow: np };
function op(e15, t, i) {
  const n = it(e15) ? e15 : _e(e15);
  return n.start(tr("", n, t, i)), n.animation;
}
const ap = (e15, t) => e15.depth - t.depth;
class up {
  constructor() {
    this.children = [], this.isDirty = false;
  }
  add(t) {
    bs(this.children, t), this.isDirty = true;
  }
  remove(t) {
    ws(this.children, t), this.isDirty = true;
  }
  forEach(t) {
    this.isDirty && this.children.sort(ap), this.isDirty = false, this.children.forEach(t);
  }
}
function lp(e15, t) {
  const i = ot.now(), n = ({ timestamp: s }) => {
    const r = s - i;
    r >= t && (qt(n), e15(r - t));
  };
  return B.setup(n, true), () => qt(n);
}
const tl = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], cp = tl.length, ao = (e15) => typeof e15 == "string" ? parseFloat(e15) : e15, uo = (e15) => typeof e15 == "number" || A.test(e15);
function hp(e15, t, i, n, s, r) {
  s ? (e15.opacity = U(0, i.opacity ?? 1, fp(n)), e15.opacityExit = U(t.opacity ?? 1, 0, dp(n))) : r && (e15.opacity = U(t.opacity ?? 1, i.opacity ?? 1, n));
  for (let o = 0; o < cp; o++) {
    const a = `border${tl[o]}Radius`;
    let u = lo(t, a), l = lo(i, a);
    if (u === void 0 && l === void 0) continue;
    u || (u = 0), l || (l = 0), u === 0 || l === 0 || uo(u) === uo(l) ? (e15[a] = Math.max(U(ao(u), ao(l), n), 0), (kt.test(l) || kt.test(u)) && (e15[a] += "%")) : e15[a] = l;
  }
  (t.rotate || i.rotate) && (e15.rotate = U(t.rotate || 0, i.rotate || 0, n));
}
function lo(e15, t) {
  return e15[t] !== void 0 ? e15[t] : e15.borderRadius;
}
const fp = el(0, 0.5, za), dp = el(0.5, 0.95, Ct);
function el(e15, t, i) {
  return (n) => n < e15 ? 0 : n > t ? 1 : i(ui(e15, t, n));
}
function co(e15, t) {
  e15.min = t.min, e15.max = t.max;
}
function xt(e15, t) {
  co(e15.x, t.x), co(e15.y, t.y);
}
function ho(e15, t) {
  e15.translate = t.translate, e15.scale = t.scale, e15.originPoint = t.originPoint, e15.origin = t.origin;
}
function fo(e15, t, i, n, s) {
  return e15 -= t, e15 = Ui(e15, 1 / i, n), s !== void 0 && (e15 = Ui(e15, 1 / s, n)), e15;
}
function pp(e15, t = 0, i = 1, n = 0.5, s, r = e15, o = e15) {
  if (kt.test(t) && (t = parseFloat(t), t = U(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
  let a = U(r.min, r.max, n);
  e15 === r && (a -= t), e15.min = fo(e15.min, t, i, a, s), e15.max = fo(e15.max, t, i, a, s);
}
function po(e15, t, [i, n, s], r, o) {
  pp(e15, t[i], t[n], t[s], t.scale, r, o);
}
const mp = ["x", "scaleX", "originX"], gp = ["y", "scaleY", "originY"];
function mo(e15, t, i, n) {
  po(e15.x, t, mp, i ? i.x : void 0, n ? n.x : void 0), po(e15.y, t, gp, i ? i.y : void 0, n ? n.y : void 0);
}
function go(e15) {
  return e15.translate === 0 && e15.scale === 1;
}
function il(e15) {
  return go(e15.x) && go(e15.y);
}
function yo(e15, t) {
  return e15.min === t.min && e15.max === t.max;
}
function yp(e15, t) {
  return yo(e15.x, t.x) && yo(e15.y, t.y);
}
function _o(e15, t) {
  return Math.round(e15.min) === Math.round(t.min) && Math.round(e15.max) === Math.round(t.max);
}
function nl(e15, t) {
  return _o(e15.x, t.x) && _o(e15.y, t.y);
}
function vo(e15) {
  return rt(e15.x) / rt(e15.y);
}
function xo(e15, t) {
  return e15.translate === t.translate && e15.scale === t.scale && e15.originPoint === t.originPoint;
}
class _p {
  constructor() {
    this.members = [];
  }
  add(t) {
    bs(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (ws(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const i = this.members[this.members.length - 1];
      i && this.promote(i);
    }
  }
  relegate(t) {
    const i = this.members.findIndex((s) => t === s);
    if (i === 0) return false;
    let n;
    for (let s = i; s >= 0; s--) {
      const r = this.members[s];
      if (r.isPresent !== false) {
        n = r;
        break;
      }
    }
    return n ? (this.promote(n), true) : false;
  }
  promote(t, i) {
    const n = this.lead;
    if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
      n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, i && (t.resumeFrom.preserveOpacity = true), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = true);
      const { crossfade: s } = t.options;
      s === false && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: i, resumingFrom: n } = t;
      i.onExitComplete && i.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(false);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function vp(e15, t, i) {
  let n = "";
  const s = e15.x.translate / t.x, r = e15.y.translate / t.y, o = (i == null ? void 0 : i.z) || 0;
  if ((s || r || o) && (n = `translate3d(${s}px, ${r}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), i) {
    const { transformPerspective: l, rotate: c, rotateX: h, rotateY: f, skewX: p, skewY: m } = i;
    l && (n = `perspective(${l}px) ${n}`), c && (n += `rotate(${c}deg) `), h && (n += `rotateX(${h}deg) `), f && (n += `rotateY(${f}deg) `), p && (n += `skewX(${p}deg) `), m && (n += `skewY(${m}deg) `);
  }
  const a = e15.x.scale * t.x, u = e15.y.scale * t.y;
  return (a !== 1 || u !== 1) && (n += `scale(${a}, ${u})`), n || "none";
}
const pn = ["", "X", "Y", "Z"], xp = 1e3;
let Tp = 0;
function mn(e15, t, i, n) {
  const { latestValues: s } = t;
  s[e15] && (i[e15] = s[e15], t.setStaticValue(e15, 0), n && (n[e15] = 0));
}
function sl(e15) {
  if (e15.hasCheckedOptimisedAppear = true, e15.root === e15) return;
  const { visualElement: t } = e15.options;
  if (!t) return;
  const i = zu(t);
  if (window.MotionHasOptimisedAnimation(i, "transform")) {
    const { layout: s, layoutId: r } = e15.options;
    window.MotionCancelOptimisedAnimation(i, "transform", B, !(s || r));
  }
  const { parent: n } = e15;
  n && !n.hasCheckedOptimisedAppear && sl(n);
}
function rl({ attachResizeListener: e15, defaultParent: t, measureScroll: i, checkIsScrollRoot: n, resetTransform: s }) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      this.id = Tp++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = false, this.nodes.forEach(wp), this.nodes.forEach(Mp), this.nodes.forEach(Dp), this.nodes.forEach(Sp);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let u = 0; u < this.path.length; u++) this.path[u].shouldResetTransform = true;
      this.root === this && (this.nodes = new up());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Cs()), this.eventHandlers.get(o).add(a);
    }
    notifyListeners(o, ...a) {
      const u = this.eventHandlers.get(o);
      u && u.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      this.isSVG = xu(o) && !_f(o), this.instance = o;
      const { layoutId: a, layout: u, visualElement: l } = this.options;
      if (l && !l.current && l.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (u || a) && (this.isLayoutDirty = true), e15) {
        let c, h = 0;
        const f = () => this.root.updateBlockedByResize = false;
        B.read(() => {
          h = window.innerWidth;
        }), e15(o, () => {
          const p = window.innerWidth;
          p !== h && (h = p, this.root.updateBlockedByResize = true, c && c(), c = lp(f, 250), Di.hasAnimatedSinceResize && (Di.hasAnimatedSinceResize = false, this.nodes.forEach(bo)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== false && l && (a || u) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: h, hasRelativeLayoutChanged: f, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || l.getDefaultTransition() || Op, { onLayoutAnimationStart: d, onLayoutAnimationComplete: g } = l.getProps(), y = !this.targetLayout || !nl(this.targetLayout, p), x = !h && f;
        if (this.options.layoutRoot || this.resumeFrom || x || h && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const v = { ...js(m, "layout"), onPlay: d, onComplete: g };
          (l.shouldReduceMotion || this.options.layoutRoot) && (v.delay = 0, v.type = false), this.startAnimation(v), this.setAnimationOrigin(c, x);
        } else h || bo(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), qt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(Vp), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = true) {
      if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && sl(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = true;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = true, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(false);
      }
      const { layoutId: a, layout: u } = this.options;
      if (a === void 0 && !u) return;
      const l = this.getTransformTemplate();
      this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = false, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(To);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Po);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(Cp), this.nodes.forEach(Pp), this.nodes.forEach(bp)) : this.nodes.forEach(Po), this.clearAllSnapshots();
      const a = ot.now();
      J.delta = jt(0, 1e3 / 60, a - J.timestamp), J.timestamp = a, J.isProcessing = true, nn.update.process(J), nn.preRender.process(J), nn.render.process(J), J.isProcessing = false;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = true, zs.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Ap), this.sharedNodes.forEach(Rp);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, B.preRender(this.updateProjection, false, true));
    }
    scheduleCheckAfterUnmount() {
      B.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !rt(this.snapshot.measuredBox.x) && !rt(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance) for (let u = 0; u < this.path.length; u++) this.path[u].updateScroll();
      const o = this.layout;
      this.layout = this.measure(false), this.layoutCorrected = Y(), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = false), a && this.instance) {
        const u = n(this.instance);
        this.scroll = { animationId: this.root.animationId, phase: o, isRoot: u, offset: i(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : u };
      }
    }
    resetTransform() {
      if (!s) return;
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !il(this.projectionDelta), u = this.getTransformTemplate(), l = u ? u(this.latestValues, "") : void 0, c = l !== this.prevTransformTemplateValue;
      o && this.instance && (a || ae(this.latestValues) || c) && (s(this.instance, l), this.shouldResetTransform = false, this.scheduleRender());
    }
    measure(o = true) {
      const a = this.measurePageBox();
      let u = this.removeElementScroll(a);
      return o && (u = this.removeTransform(u)), Lp(u), { animationId: this.root.animationId, measuredBox: a, layoutBox: u, latestValues: {}, source: this.id };
    }
    measurePageBox() {
      var _a2;
      const { visualElement: o } = this.options;
      if (!o) return Y();
      const a = o.measureViewportBox();
      if (!(((_a2 = this.scroll) == null ? void 0 : _a2.wasRoot) || this.path.some(Fp))) {
        const { scroll: l } = this.root;
        l && (Se(a.x, l.offset.x), Se(a.y, l.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var _a2;
      const a = Y();
      if (xt(a, o), (_a2 = this.scroll) == null ? void 0 : _a2.wasRoot) return a;
      for (let u = 0; u < this.path.length; u++) {
        const l = this.path[u], { scroll: c, options: h } = l;
        l !== this.root && c && h.layoutScroll && (c.wasRoot && xt(a, o), Se(a.x, c.offset.x), Se(a.y, c.offset.y));
      }
      return a;
    }
    applyTransform(o, a = false) {
      const u = Y();
      xt(u, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Ae(u, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }), ae(c.latestValues) && Ae(u, c.latestValues);
      }
      return ae(this.latestValues) && Ae(u, this.latestValues), u;
    }
    removeTransform(o) {
      const a = Y();
      xt(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const l = this.path[u];
        if (!l.instance || !ae(l.latestValues)) continue;
        $n(l.latestValues) && l.updateSnapshot();
        const c = Y(), h = l.measurePageBox();
        xt(c, h), mo(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, c);
      }
      return ae(this.latestValues) && mo(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
    }
    setOptions(o) {
      this.options = { ...this.options, ...o, crossfade: o.crossfade !== void 0 ? o.crossfade : true };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== J.timestamp && this.relativeParent.resolveTargetDelta(true);
    }
    resolveTargetDelta(o = false) {
      var _a2;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a2 = this.parent) == null ? void 0 : _a2.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const { layout: c, layoutId: h } = this.options;
      if (!(!this.layout || !(c || h))) {
        if (this.resolvedRelativeTargetAt = J.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), ti(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Y(), this.targetWithTransforms = Y()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), zd(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : xt(this.target, this.layout.layoutBox), Fu(this.target, this.targetDelta)) : xt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = false;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), ti(this.relativeTargetOrigin, this.target, f.target), xt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || $n(this.parent.latestValues) || Lu(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var _a2;
      const o = this.getLead(), a = !!this.resumingFrom || this !== o;
      let u = true;
      if ((this.isProjectionDirty || ((_a2 = this.parent) == null ? void 0 : _a2.isProjectionDirty)) && (u = false), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = false), this.resolvedRelativeTargetAt === J.timestamp && (u = false), u) return;
      const { layout: l, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(l || c)) return;
      xt(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, f = this.treeScale.y;
      id(this.layoutCorrected, this.treeScale, this.path, a), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = Y());
      const { target: p } = o;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ho(this.prevProjectionDelta.x, this.projectionDelta.x), ho(this.prevProjectionDelta.y, this.projectionDelta.y)), Je(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== f || !xo(this.projectionDelta.x, this.prevProjectionDelta.x) || !xo(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(o = true) {
      var _a2;
      if ((_a2 = this.options.visualElement) == null ? void 0 : _a2.scheduleRender(), o) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Ce(), this.projectionDelta = Ce(), this.projectionDeltaWithTransform = Ce();
    }
    setAnimationOrigin(o, a = false) {
      const u = this.snapshot, l = u ? u.latestValues : {}, c = { ...this.latestValues }, h = Ce();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = Y(), p = u ? u.source : void 0, m = this.layout ? this.layout.source : void 0, d = p !== m, g = this.getStack(), y = !g || g.members.length <= 1, x = !!(d && !y && this.options.crossfade === true && !this.path.some(kp));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (T) => {
        const _ = T / 1e3;
        wo(h.x, o.x, _), wo(h.y, o.y, _), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ti(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Ep(this.relativeTarget, this.relativeTargetOrigin, f, _), v && yp(this.relativeTarget, v) && (this.isProjectionDirty = false), v || (v = Y()), xt(v, this.relativeTarget)), d && (this.animationValues = c, hp(c, l, this.latestValues, _, x, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = _;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      var _a2, _b, _c2;
      this.notifyListeners("animationStart"), (_a2 = this.currentAnimation) == null ? void 0 : _a2.stop(), (_c2 = (_b = this.resumingFrom) == null ? void 0 : _b.currentAnimation) == null ? void 0 : _c2.stop(), this.pendingAnimation && (qt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = B.update(() => {
        Di.hasAnimatedSinceResize = true, this.motionValue || (this.motionValue = _e(0)), this.currentAnimation = op(this.motionValue, [0, 1e3], { ...o, velocity: 0, isSync: true, onUpdate: (a) => {
          this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
        }, onStop: () => {
        }, onComplete: () => {
          o.onComplete && o.onComplete(), this.completeAnimation();
        } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(xp), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: u, layout: l, latestValues: c } = o;
      if (!(!a || !u || !l)) {
        if (this !== o && this.layout && l && ol(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
          u = this.target || Y();
          const h = rt(this.layout.layoutBox.x);
          u.x.min = o.target.x.min, u.x.max = u.x.min + h;
          const f = rt(this.layout.layoutBox.y);
          u.y.min = o.target.y.min, u.y.max = u.y.min + f;
        }
        xt(a, u), Ae(a, c), Je(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new _p()), this.sharedNodes.get(o).add(a);
      const l = a.options.initialPromotionConfig;
      a.promote({ transition: l ? l.transition : void 0, preserveFollowOpacity: l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(a) : void 0 });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : true;
    }
    getLead() {
      var _a2;
      const { layoutId: o } = this.options;
      return o ? ((_a2 = this.getStack()) == null ? void 0 : _a2.lead) || this : this;
    }
    getPrevLead() {
      var _a2;
      const { layoutId: o } = this.options;
      return o ? (_a2 = this.getStack()) == null ? void 0 : _a2.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: u } = {}) {
      const l = this.getStack();
      l && l.promote(this, u), o && (this.projectionDelta = void 0, this.needsReset = true), a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : false;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = false;
      const { latestValues: u } = o;
      if ((u.z || u.rotate || u.rotateX || u.rotateY || u.rotateZ || u.skewX || u.skewY) && (a = true), !a) return;
      const l = {};
      u.z && mn("z", o, l, this.animationValues);
      for (let c = 0; c < pn.length; c++) mn(`rotate${pn[c]}`, o, l, this.animationValues), mn(`skew${pn[c]}`, o, l, this.animationValues);
      o.render();
      for (const c in l) o.setStaticValue(c, l[c]), this.animationValues && (this.animationValues[c] = l[c]);
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const u = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false, o.visibility = "", o.opacity = "", o.pointerEvents = Mi(a == null ? void 0 : a.pointerEvents) || "", o.transform = u ? u(this.latestValues, "") : "none";
        return;
      }
      const l = this.getLead();
      if (!this.projectionDelta || !this.layout || !l.target) {
        this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = Mi(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !ae(this.latestValues) && (o.transform = u ? u({}, "") : "none", this.hasProjected = false);
        return;
      }
      o.visibility = "";
      const c = l.animationValues || l.latestValues;
      this.applyTransformsToTarget();
      let h = vp(this.projectionDeltaWithTransform, this.treeScale, c);
      u && (h = u(c, h)), o.transform = h;
      const { x: f, y: p } = this.projectionDelta;
      o.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`, l.animationValues ? o.opacity = l === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : o.opacity = l === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const m in fi) {
        if (c[m] === void 0) continue;
        const { correct: d, applyTo: g, isCSSVariable: y } = fi[m], x = h === "none" ? c[m] : d(c[m], l);
        if (g) {
          const v = g.length;
          for (let T = 0; T < v; T++) o[g[T]] = x;
        } else y ? this.options.visualElement.renderState.vars[m] = x : o[m] = x;
      }
      this.options.layoutId && (o.pointerEvents = l === this ? Mi(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var _a2;
        return (_a2 = o.currentAnimation) == null ? void 0 : _a2.stop();
      }), this.root.nodes.forEach(To), this.root.sharedNodes.clear();
    }
  };
}
function Pp(e15) {
  e15.updateLayout();
}
function bp(e15) {
  var _a2;
  const t = ((_a2 = e15.resumeFrom) == null ? void 0 : _a2.snapshot) || e15.snapshot;
  if (e15.isLead() && e15.layout && t && e15.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: n } = e15.layout, { animationType: s } = e15.options, r = t.source !== e15.layout.source;
    s === "size" ? Pt((c) => {
      const h = r ? t.measuredBox[c] : t.layoutBox[c], f = rt(h);
      h.min = i[c].min, h.max = h.min + f;
    }) : ol(s, t.layoutBox, i) && Pt((c) => {
      const h = r ? t.measuredBox[c] : t.layoutBox[c], f = rt(i[c]);
      h.max = h.min + f, e15.relativeTarget && !e15.currentAnimation && (e15.isProjectionDirty = true, e15.relativeTarget[c].max = e15.relativeTarget[c].min + f);
    });
    const o = Ce();
    Je(o, i, t.layoutBox);
    const a = Ce();
    r ? Je(a, e15.applyTransform(n, true), t.measuredBox) : Je(a, i, t.layoutBox);
    const u = !il(o);
    let l = false;
    if (!e15.resumeFrom) {
      const c = e15.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: h, layout: f } = c;
        if (h && f) {
          const p = Y();
          ti(p, t.layoutBox, h.layoutBox);
          const m = Y();
          ti(m, i, f.layoutBox), nl(p, m) || (l = true), c.options.layoutRoot && (e15.relativeTarget = m, e15.relativeTargetOrigin = p, e15.relativeParent = c);
        }
      }
    }
    e15.notifyListeners("didUpdate", { layout: i, snapshot: t, delta: a, layoutDelta: o, hasLayoutChanged: u, hasRelativeLayoutChanged: l });
  } else if (e15.isLead()) {
    const { onExitComplete: i } = e15.options;
    i && i();
  }
  e15.options.transition = void 0;
}
function wp(e15) {
  e15.parent && (e15.isProjecting() || (e15.isProjectionDirty = e15.parent.isProjectionDirty), e15.isSharedProjectionDirty || (e15.isSharedProjectionDirty = !!(e15.isProjectionDirty || e15.parent.isProjectionDirty || e15.parent.isSharedProjectionDirty)), e15.isTransformDirty || (e15.isTransformDirty = e15.parent.isTransformDirty));
}
function Sp(e15) {
  e15.isProjectionDirty = e15.isSharedProjectionDirty = e15.isTransformDirty = false;
}
function Ap(e15) {
  e15.clearSnapshot();
}
function To(e15) {
  e15.clearMeasurements();
}
function Po(e15) {
  e15.isLayoutDirty = false;
}
function Cp(e15) {
  const { visualElement: t } = e15.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e15.resetTransform();
}
function bo(e15) {
  e15.finishAnimation(), e15.targetDelta = e15.relativeTarget = e15.target = void 0, e15.isProjectionDirty = true;
}
function Mp(e15) {
  e15.resolveTargetDelta();
}
function Dp(e15) {
  e15.calcProjection();
}
function Vp(e15) {
  e15.resetSkewAndRotation();
}
function Rp(e15) {
  e15.removeLeadSnapshot();
}
function wo(e15, t, i) {
  e15.translate = U(t.translate, 0, i), e15.scale = U(t.scale, 1, i), e15.origin = t.origin, e15.originPoint = t.originPoint;
}
function So(e15, t, i, n) {
  e15.min = U(t.min, i.min, n), e15.max = U(t.max, i.max, n);
}
function Ep(e15, t, i, n) {
  So(e15.x, t.x, i.x, n), So(e15.y, t.y, i.y, n);
}
function kp(e15) {
  return e15.animationValues && e15.animationValues.opacityExit !== void 0;
}
const Op = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }, Ao = (e15) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e15), Co = Ao("applewebkit/") && !Ao("chrome/") ? Math.round : Ct;
function Mo(e15) {
  e15.min = Co(e15.min), e15.max = Co(e15.max);
}
function Lp(e15) {
  Mo(e15.x), Mo(e15.y);
}
function ol(e15, t, i) {
  return e15 === "position" || e15 === "preserve-aspect" && !Ud(vo(t), vo(i), 0.2);
}
function Fp(e15) {
  var _a2;
  return e15 !== e15.root && ((_a2 = e15.scroll) == null ? void 0 : _a2.wasRoot);
}
const Ip = rl({ attachResizeListener: (e15, t) => di(e15, "resize", t), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => true }), gn = { current: void 0 }, al = rl({ measureScroll: (e15) => ({ x: e15.scrollLeft, y: e15.scrollTop }), defaultParent: () => {
  if (!gn.current) {
    const e15 = new Ip({});
    e15.mount(window), e15.setOptions({ layoutScroll: true }), gn.current = e15;
  }
  return gn.current;
}, resetTransform: (e15, t) => {
  e15.style.transform = t !== void 0 ? t : "none";
}, checkIsScrollRoot: (e15) => window.getComputedStyle(e15).position === "fixed" }), Bp = { pan: { Feature: ip }, drag: { Feature: ep, ProjectionNode: al, MeasureLayout: Ju } };
function Do(e15, t, i) {
  const { props: n } = e15;
  e15.animationState && n.whileHover && e15.animationState.setActive("whileHover", i === "Start");
  const s = "onHover" + i, r = n[s];
  r && B.postRender(() => r(t, _i(t)));
}
class Np extends Jt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = df(t, (i, n) => (Do(this.node, n, "Start"), (s) => Do(this.node, s, "End"))));
  }
  unmount() {
  }
}
class jp extends Jt {
  constructor() {
    super(...arguments), this.isActive = false;
  }
  onFocus() {
    let t = false;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = true;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", true), this.isActive = true);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", false), this.isActive = false);
  }
  mount() {
    this.unmount = mi(di(this.node.current, "focus", () => this.onFocus()), di(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Vo(e15, t, i) {
  const { props: n } = e15;
  if (e15.current instanceof HTMLButtonElement && e15.current.disabled) return;
  e15.animationState && n.whileTap && e15.animationState.setActive("whileTap", i === "Start");
  const s = "onTap" + (i === "End" ? "" : i), r = n[s];
  r && B.postRender(() => r(t, _i(t)));
}
class Up extends Jt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = yf(t, (i, n) => (Vo(this.node, n, "Start"), (s, { success: r }) => Vo(this.node, s, r ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const ts = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap(), zp = (e15) => {
  const t = ts.get(e15.target);
  t && t(e15);
}, Wp = (e15) => {
  e15.forEach(zp);
};
function Kp({ root: e15, ...t }) {
  const i = e15 || document;
  yn.has(i) || yn.set(i, {});
  const n = yn.get(i), s = JSON.stringify(t);
  return n[s] || (n[s] = new IntersectionObserver(Wp, { root: e15, ...t })), n[s];
}
function Gp(e15, t, i) {
  const n = Kp(t);
  return ts.set(e15, i), n.observe(e15), () => {
    ts.delete(e15), n.unobserve(e15);
  };
}
const Yp = { some: 0, all: 1 };
class $p extends Jt {
  constructor() {
    super(...arguments), this.hasEnteredView = false, this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: i, margin: n, amount: s = "some", once: r } = t, o = { root: i ? i.current : void 0, rootMargin: n, threshold: typeof s == "number" ? s : Yp[s] }, a = (u) => {
      const { isIntersecting: l } = u;
      if (this.isInView === l || (this.isInView = l, r && !l && this.hasEnteredView)) return;
      l && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", l);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), f = l ? c : h;
      f && f(u);
    };
    return Gp(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: i } = this.node;
    ["amount", "margin", "root"].some(Xp(t, i)) && this.startObserver();
  }
  unmount() {
  }
}
function Xp({ viewport: e15 = {} }, { viewport: t = {} } = {}) {
  return (i) => e15[i] !== t[i];
}
const Hp = { inView: { Feature: $p }, tap: { Feature: Up }, focus: { Feature: jp }, hover: { Feature: Np } }, qp = { layout: { ProjectionNode: al, MeasureLayout: Ju } }, Zp = { ...Ld, ...Hp, ...Bp, ...qp }, sm = Jf(Zp, fd);
function rm(e15) {
  const t = xs(() => _e(e15)), { isStatic: i } = M.useContext(Ks);
  if (i) {
    const [, n] = M.useState(e15);
    M.useEffect(() => t.on("change", n), []);
  }
  return t;
}
function Qp(e15) {
  e15.values.forEach((t) => t.stop());
}
function es(e15, t) {
  [...t].reverse().forEach((n) => {
    const s = e15.getVariant(n);
    s && Js(e15, s), e15.variantChildren && e15.variantChildren.forEach((r) => {
      es(r, t);
    });
  });
}
function Jp(e15, t) {
  if (Array.isArray(t)) return es(e15, t);
  if (typeof t == "string") return es(e15, [t]);
  Js(e15, t);
}
function tm() {
  const e15 = /* @__PURE__ */ new Set(), t = { subscribe(i) {
    return e15.add(i), () => void e15.delete(i);
  }, start(i, n) {
    const s = [];
    return e15.forEach((r) => {
      s.push(Gu(r, i, { transitionOverride: n }));
    }), Promise.all(s);
  }, set(i) {
    return e15.forEach((n) => {
      Jp(n, i);
    });
  }, stop() {
    e15.forEach((i) => {
      Qp(i);
    });
  }, mount() {
    return () => {
      t.stop();
    };
  } };
  return t;
}
function em() {
  const e15 = xs(tm);
  return Ra(e15.mount, []), e15;
}
const om = em;
export {
  rm as a,
  Pc as g,
  sm as m,
  om as u
};
