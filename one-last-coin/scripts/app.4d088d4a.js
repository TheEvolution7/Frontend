(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [function (t, e, a) {
    "use strict";

    function i(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }

    function r(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    /*!
     * GSAP 3.7.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    a.d(e, "g", (function () {
      return Ue
    })), a.d(e, "n", (function () {
      return ba
    })), a.d(e, "V", (function () {
      return Da
    })), a.d(e, "i", (function () {
      return La
    })), a.d(e, "j", (function () {
      return Ea
    })), a.d(e, "k", (function () {
      return Aa
    })), a.d(e, "l", (function () {
      return Ta
    })), a.d(e, "m", (function () {
      return Ca
    })), a.d(e, "h", (function () {
      return _a
    })), a.d(e, "o", (function () {
      return Sa
    })), a.d(e, "d", (function () {
      return ka
    })), a.d(e, "p", (function () {
      return Pa
    })), a.d(e, "q", (function () {
      return Oa
    })), a.d(e, "t", (function () {
      return Ha
    })), a.d(e, "e", (function () {
      return Va
    })), a.d(e, "a", (function () {
      return Fa
    })), a.d(e, "s", (function () {
      return Ba
    })), a.d(e, "b", (function () {
      return Ia
    })), a.d(e, "r", (function () {
      return $a
    })), a.d(e, "f", (function () {
      return ja
    })), a.d(e, "c", (function () {
      return Ra
    })), a.d(e, "w", (function () {
      return oa
    })), a.d(e, "v", (function () {
      return Qe
    })), a.d(e, "u", (function () {
      return Qe
    })), a.d(e, "S", (function () {
      return Da
    })), a.d(e, "hb", (function () {
      return we
    })), a.d(e, "ib", (function () {
      return be
    })), a.d(e, "T", (function () {
      return he
    })), a.d(e, "ab", (function () {
      return ge
    })), a.d(e, "db", (function () {
      return pe
    })), a.d(e, "Y", (function () {
      return ve
    })), a.d(e, "U", (function () {
      return ie
    })), a.d(e, "R", (function () {
      return re
    })), a.d(e, "eb", (function () {
      return _e
    })), a.d(e, "fb", (function () {
      return le
    })), a.d(e, "bb", (function () {
      return ce
    })), a.d(e, "X", (function () {
      return Me
    })), a.d(e, "Z", (function () {
      return fe
    })), a.d(e, "gb", (function () {
      return me
    })), a.d(e, "W", (function () {
      return ze
    })), a.d(e, "cb", (function () {
      return de
    })), a.d(e, "D", (function () {
      return Mt
    })), a.d(e, "I", (function () {
      return Z
    })), a.d(e, "J", (function () {
      return tt
    })), a.d(e, "F", (function () {
      return R
    })), a.d(e, "G", (function () {
      return X
    })), a.d(e, "M", (function () {
      return ga
    })), a.d(e, "L", (function () {
      return at
    })), a.d(e, "B", (function () {
      return zt
    })), a.d(e, "P", (function () {
      return wa
    })), a.d(e, "z", (function () {
      return He
    })), a.d(e, "N", (function () {
      return xe
    })), a.d(e, "x", (function () {
      return ea
    })), a.d(e, "K", (function () {
      return ft
    })), a.d(e, "Q", (function () {
      return Ve
    })), a.d(e, "A", (function () {
      return P
    })), a.d(e, "O", (function () {
      return Dt
    })), a.d(e, "H", (function () {
      return lt
    })), a.d(e, "E", (function () {
      return ha
    })), a.d(e, "C", (function () {
      return xt
    })), a.d(e, "y", (function () {
      return Pe
    }));
    var n, o, s, l, c, d, h, u, p, g, f, m, v, y, w, b, x, M, z, D, L, E, A, T, C, _, S, k, P = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
          lineHeight: ""
        }
      },
      O = {
        duration: .5,
        overwrite: !1,
        delay: 0
      },
      H = 1e8,
      V = 2 * Math.PI,
      F = V / 4,
      B = 0,
      I = Math.sqrt,
      $ = Math.cos,
      j = Math.sin,
      R = function (t) {
        return "string" == typeof t
      },
      N = function (t) {
        return "function" == typeof t
      },
      Y = function (t) {
        return "number" == typeof t
      },
      X = function (t) {
        return void 0 === t
      },
      q = function (t) {
        return "object" == typeof t
      },
      W = function (t) {
        return !1 !== t
      },
      G = function () {
        return "undefined" != typeof window
      },
      U = function (t) {
        return N(t) || R(t)
      },
      K = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
      Q = Array.isArray,
      J = /(?:-?\.?\d|\.)+/gi,
      Z = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      et = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      at = /[+-]=-?[.\d]+/,
      it = /[^,'"\[\]\s]+/gi,
      rt = /[\d.+\-=]+(?:e[-+]\d*)*/i,
      nt = {},
      ot = {},
      st = function (t) {
        return (ot = kt(t, nt)) && Da
      },
      lt = function (t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
      },
      ct = function (t, e) {
        return !e && console.warn(t)
      },
      dt = function (t, e) {
        return t && (nt[t] = e) && ot && (ot[t] = e) || nt
      },
      ht = function () {
        return 0
      },
      ut = {},
      pt = [],
      gt = {},
      ft = {},
      mt = {},
      vt = 30,
      yt = [],
      wt = "",
      bt = function (t) {
        var e, a, i = t[0];
        if (q(i) || N(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
          for (a = yt.length; a-- && !yt[a].targetTest(i););
          e = yt[a]
        }
        for (a = t.length; a--;) t[a] && (t[a]._gsap || (t[a]._gsap = new Ue(t[a], e))) || t.splice(a, 1);
        return t
      },
      xt = function (t) {
        return t._gsap || bt(le(t))[0]._gsap
      },
      Mt = function (t, e, a) {
        return (a = t[e]) && N(a) ? t[e]() : X(a) && t.getAttribute && t.getAttribute(e) || a
      },
      zt = function (t, e) {
        return (t = t.split(",")).forEach(e) || t
      },
      Dt = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0
      },
      Lt = function (t, e) {
        for (var a = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < a;);
        return i < a
      },
      Et = function () {
        var t, e, a = pt.length,
          i = pt.slice(0);
        for (gt = {}, pt.length = 0, t = 0; t < a; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
      },
      At = function (t, e, a, i) {
        pt.length && Et(), t.render(e, a, i), pt.length && Et()
      },
      Tt = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(it).length < 2 ? e : R(t) ? t.trim() : t
      },
      Ct = function (t) {
        return t
      },
      _t = function (t, e) {
        for (var a in e) a in t || (t[a] = e[a]);
        return t
      },
      St = function (t, e) {
        for (var a in e) a in t || "duration" === a || "ease" === a || (t[a] = e[a])
      },
      kt = function (t, e) {
        for (var a in e) t[a] = e[a];
        return t
      },
      Pt = function t(e, a) {
        for (var i in a) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = q(a[i]) ? t(e[i] || (e[i] = {}), a[i]) : a[i]);
        return e
      },
      Ot = function (t, e) {
        var a, i = {};
        for (a in t) a in e || (i[a] = t[a]);
        return i
      },
      Ht = function (t) {
        var e = t.parent || o,
          a = t.keyframes ? St : _t;
        if (W(t.inherit))
          for (; e;) a(t, e.vars.defaults), e = e.parent || e._dp;
        return t
      },
      Vt = function (t, e, a, i) {
        void 0 === a && (a = "_first"), void 0 === i && (i = "_last");
        var r = e._prev,
          n = e._next;
        r ? r._next = n : t[a] === e && (t[a] = n), n ? n._prev = r : t[i] === e && (t[i] = r), e._next = e._prev = e.parent = null
      },
      Ft = function (t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
      },
      Bt = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
          for (var a = t; a;) a._dirty = 1, a = a.parent;
        return t
      },
      It = function (t) {
        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
        return t
      },
      $t = function (t) {
        return t._repeat ? jt(t._tTime, t = t.duration() + t._rDelay) * t : 0
      },
      jt = function (t, e) {
        var a = Math.floor(t /= e);
        return t && a === t ? a - 1 : a
      },
      Rt = function (t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      },
      Nt = function (t) {
        return t._end = Dt(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
      },
      Yt = function (t, e) {
        var a = t._dp;
        return a && a.smoothChildTiming && t._ts && (t._start = Dt(a._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Nt(t), a._dirty || Bt(a, t)), t
      },
      Xt = function (t, e) {
        var a;
        if ((e._time || e._initted && !e._dur) && (a = Rt(t.rawTime(), e), (!e._dur || ae(0, e.totalDuration(), a) - e._tTime > 1e-8) && e.render(a, !0)), Bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
          if (t._dur < t.duration())
            for (a = t; a._dp;) a.rawTime() >= 0 && a.totalTime(a._tTime), a = a._dp;
          t._zTime = -1e-8
        }
      },
      qt = function (t, e, a, i) {
        return e.parent && Ft(e), e._start = Dt((Y(a) ? a : a || t !== o ? Zt(t, a, e) : t._time) + e._delay), e._end = Dt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
          function (t, e, a, i, r) {
            void 0 === a && (a = "_first"), void 0 === i && (i = "_last");
            var n, o = t[i];
            if (r)
              for (n = e[r]; o && o[r] > n;) o = o._prev;
            o ? (e._next = o._next, o._next = e) : (e._next = t[a], t[a] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = o, e.parent = e._dp = t
          }(t, e, "_first", "_last", t._sort ? "_start" : 0), Ut(e) || (t._recent = e), i || Xt(t, e), t
      },
      Wt = function (t, e) {
        return (nt.ScrollTrigger || lt("scrollTrigger", e)) && nt.ScrollTrigger.create(e, t)
      },
      Gt = function (t, e, a, i) {
        return aa(t, e), t._initted ? !a && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && h !== Ve.frame ? (pt.push(t), t._lazy = [e, i], 1) : void 0 : 1
      },
      Ut = function (t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e
      },
      Kt = function (t, e, a, i) {
        var r = t._repeat,
          n = Dt(e) || 0,
          o = t._tTime / t._tDur;
        return o && !i && (t._time *= n / t._dur), t._dur = n, t._tDur = r ? r < 0 ? 1e10 : Dt(n * (r + 1) + t._rDelay * r) : n, o && !i ? Yt(t, t._tTime = t._tDur * o) : t.parent && Nt(t), a || Bt(t.parent, t), t
      },
      Qt = function (t) {
        return t instanceof Qe ? Bt(t) : Kt(t, t._dur)
      },
      Jt = {
        _start: 0,
        endTime: ht,
        totalDuration: ht
      },
      Zt = function t(e, a, i) {
        var r, n, o, s = e.labels,
          l = e._recent || Jt,
          c = e.duration() >= H ? l.endTime(!1) : e._dur;
        return R(a) && (isNaN(a) || a in s) ? (n = a.charAt(0), o = "%" === a.substr(-1), r = a.indexOf("="), "<" === n || ">" === n ? (r >= 0 && (a = a.replace(/=/, "")), ("<" === n ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(a.substr(1)) || 0) * (o ? (r < 0 ? l : i).totalDuration() / 100 : 1)) : r < 0 ? (a in s || (s[a] = c), s[a]) : (n = parseFloat(a.charAt(r - 1) + a.substr(r + 1)), o && i && (n = n / 100 * (Q(i) ? i[0] : i).totalDuration()), r > 1 ? t(e, a.substr(0, r - 1), i) + n : c + n)) : null == a ? c : +a
      },
      te = function (t, e, a) {
        var i, r, n = Y(e[1]),
          o = (n ? 2 : 1) + (t < 2 ? 0 : 1),
          s = e[o];
        if (n && (s.duration = e[1]), s.parent = a, t) {
          for (i = s, r = a; r && !("immediateRender" in i);) i = r.vars.defaults || {}, r = W(r.vars.inherit) && r.parent;
          s.immediateRender = W(i.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[o - 1]
        }
        return new oa(e[0], s, e[o + 1])
      },
      ee = function (t, e) {
        return t || 0 === t ? e(t) : e
      },
      ae = function (t, e, a) {
        return a < t ? t : a > e ? e : a
      },
      ie = function (t) {
        if ("string" != typeof t) return "";
        var e = rt.exec(t);
        return e ? t.substr(e.index + e[0].length) : ""
      },
      re = function (t, e, a) {
        return ee(a, (function (a) {
          return ae(t, e, a)
        }))
      },
      ne = [].slice,
      oe = function (t, e) {
        return t && q(t) && "length" in t && (!e && !t.length || t.length - 1 in t && q(t[0])) && !t.nodeType && t !== s
      },
      se = function (t, e, a) {
        return void 0 === a && (a = []), t.forEach((function (t) {
          var i;
          return R(t) && !e || oe(t, 1) ? (i = a).push.apply(i, le(t)) : a.push(t)
        })) || a
      },
      le = function (t, e, a) {
        return !R(t) || a || !l && Fe() ? Q(t) ? se(t, a) : oe(t) ? ne.call(t, 0) : t ? [t] : [] : ne.call((e || c).querySelectorAll(t), 0)
      },
      ce = function (t) {
        return t = le(t)[0] || ct("Invalid scope") || {},
          function (e) {
            var a = t.current || t.nativeElement || t;
            return le(e, a.querySelectorAll ? a : a === t ? ct("Invalid scope") || c.createElement("div") : t)
          }
      },
      de = function (t) {
        return t.sort((function () {
          return .5 - Math.random()
        }))
      },
      he = function (t) {
        if (N(t)) return t;
        var e = q(t) ? t : {
            each: t
          },
          a = Ye(e.ease),
          i = e.from || 0,
          r = parseFloat(e.base) || 0,
          n = {},
          o = i > 0 && i < 1,
          s = isNaN(i) || o,
          l = e.axis,
          c = i,
          d = i;
        return R(i) ? c = d = {
            center: .5,
            edges: .5,
            end: 1
          } [i] || 0 : !o && s && (c = i[0], d = i[1]),
          function (t, o, h) {
            var u, p, g, f, m, v, y, w, b, x = (h || e).length,
              M = n[x];
            if (!M) {
              if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, H])[1])) {
                for (y = -H; y < (y = h[b++].getBoundingClientRect().left) && b < x;);
                b--
              }
              for (M = n[x] = [], u = s ? Math.min(b, x) * c - .5 : i % b, p = s ? x * d / b - .5 : i / b | 0, y = 0, w = H, v = 0; v < x; v++) g = v % b - u, f = p - (v / b | 0), M[v] = m = l ? Math.abs("y" === l ? f : g) : I(g * g + f * f), m > y && (y = m), m < w && (w = m);
              "random" === i && de(M), M.max = y - w, M.min = w, M.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (b > x ? x - 1 : l ? "y" === l ? x / b : b : Math.max(b, x / b)) || 0) * ("edges" === i ? -1 : 1), M.b = x < 0 ? r - x : r, M.u = ie(e.amount || e.each) || 0, a = a && x < 0 ? Re(a) : a
            }
            return x = (M[t] - M.min) / M.max || 0, Dt(M.b + (a ? a(x) : x) * M.v) + M.u
          }
      },
      ue = function (t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function (a) {
          var i = Math.round(parseFloat(a) / t) * t * e;
          return (i - i % 1) / e + (Y(a) ? 0 : ie(a))
        }
      },
      pe = function (t, e) {
        var a, i, r = Q(t);
        return !r && q(t) && (a = r = t.radius || H, t.values ? (t = le(t.values), (i = !Y(t[0])) && (a *= a)) : t = ue(t.increment)), ee(e, r ? N(t) ? function (e) {
          return i = t(e), Math.abs(i - e) <= a ? i : e
        } : function (e) {
          for (var r, n, o = parseFloat(i ? e.x : e), s = parseFloat(i ? e.y : 0), l = H, c = 0, d = t.length; d--;)(r = i ? (r = t[d].x - o) * r + (n = t[d].y - s) * n : Math.abs(t[d] - o)) < l && (l = r, c = d);
          return c = !a || l <= a ? t[c] : e, i || c === e || Y(e) ? c : c + ie(e)
        } : ue(t))
      },
      ge = function (t, e, a, i) {
        return ee(Q(t) ? !e : !0 === a ? !!(a = 0) : !i, (function () {
          return Q(t) ? t[~~(Math.random() * t.length)] : (a = a || 1e-5) && (i = a < 1 ? Math.pow(10, (a + "").length - 2) : 1) && Math.floor(Math.round((t - a / 2 + Math.random() * (e - t + .99 * a)) / a) * a * i) / i
        }))
      },
      fe = function () {
        for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
        return function (t) {
          return e.reduce((function (t, e) {
            return e(t)
          }), t)
        }
      },
      me = function (t, e) {
        return function (a) {
          return t(parseFloat(a)) + (e || ie(a))
        }
      },
      ve = function (t, e, a) {
        return Me(t, e, 0, 1, a)
      },
      ye = function (t, e, a) {
        return ee(a, (function (a) {
          return t[~~e(a)]
        }))
      },
      we = function t(e, a, i) {
        var r = a - e;
        return Q(e) ? ye(e, t(0, e.length), a) : ee(i, (function (t) {
          return (r + (t - e) % r) % r + e
        }))
      },
      be = function t(e, a, i) {
        var r = a - e,
          n = 2 * r;
        return Q(e) ? ye(e, t(0, e.length - 1), a) : ee(i, (function (t) {
          return e + ((t = (n + (t - e) % n) % n || 0) > r ? n - t : t)
        }))
      },
      xe = function (t) {
        for (var e, a, i, r, n = 0, o = ""; ~(e = t.indexOf("random(", n));) i = t.indexOf(")", e), r = "[" === t.charAt(e + 7), a = t.substr(e + 7, i - e - 7).match(r ? it : J), o += t.substr(n, e - n) + ge(r ? a : +a[0], r ? 0 : +a[1], +a[2] || 1e-5), n = i + 1;
        return o + t.substr(n, t.length - n)
      },
      Me = function (t, e, a, i, r) {
        var n = e - t,
          o = i - a;
        return ee(r, (function (e) {
          return a + ((e - t) / n * o || 0)
        }))
      },
      ze = function t(e, a, i, r) {
        var n = isNaN(e + a) ? 0 : function (t) {
          return (1 - t) * e + t * a
        };
        if (!n) {
          var o, s, l, c, d, h = R(e),
            u = {};
          if (!0 === i && (r = 1) && (i = null), h) e = {
            p: e
          }, a = {
            p: a
          };
          else if (Q(e) && !Q(a)) {
            for (l = [], c = e.length, d = c - 2, s = 1; s < c; s++) l.push(t(e[s - 1], e[s]));
            c--, n = function (t) {
              t *= c;
              var e = Math.min(d, ~~t);
              return l[e](t - e)
            }, i = a
          } else r || (e = kt(Q(e) ? [] : {}, e));
          if (!l) {
            for (o in a) ta.call(u, e, o, "get", a[o]);
            n = function (t) {
              return fa(t, u) || (h ? e.p : e)
            }
          }
        }
        return ee(i, n)
      },
      De = function (t, e, a) {
        var i, r, n, o = t.labels,
          s = H;
        for (i in o)(r = o[i] - e) < 0 == !!a && r && s > (r = Math.abs(r)) && (n = i, s = r);
        return n
      },
      Le = function (t, e, a) {
        var i, r, n = t.vars,
          o = n[e];
        if (o) return i = n[e + "Params"], r = n.callbackScope || t, a && pt.length && Et(), i ? o.apply(r, i) : o.call(r)
      },
      Ee = function (t) {
        return Ft(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Le(t, "onInterrupt"), t
      },
      Ae = function (t) {
        var e = (t = !t.name && t.default || t).name,
          a = N(t),
          i = e && !a && t.init ? function () {
            this._props = []
          } : t,
          r = {
            init: ht,
            render: fa,
            add: ta,
            kill: va,
            modifier: ma,
            rawVars: 0
          },
          n = {
            targetTest: 0,
            get: 0,
            getSetter: ha,
            aliases: {},
            register: 0
          };
        if (Fe(), t !== i) {
          if (ft[e]) return;
          _t(i, _t(Ot(t, r), n)), kt(i.prototype, kt(r, Ot(t, n))), ft[i.prop = e] = i, t.targetTest && (yt.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
        }
        dt(e, i), t.register && t.register(Da, i, ba)
      },
      Te = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0]
      },
      Ce = function (t, e, a) {
        return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (a - e) * t * 6 : t < .5 ? a : 3 * t < 2 ? e + (a - e) * (2 / 3 - t) * 6 : e) + .5 | 0
      },
      _e = function (t, e, a) {
        var i, r, n, o, s, l, c, d, h, u, p = t ? Y(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : Te.black;
        if (!p) {
          if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Te[t]) p = Te[t];
          else if ("#" === t.charAt(0)) {
            if (t.length < 6 && (i = t.charAt(1), r = t.charAt(2), n = t.charAt(3), t = "#" + i + i + r + r + n + n + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & 255, 255 & p, parseInt(t.substr(7), 16) / 255];
            p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
          } else if ("hsl" === t.substr(0, 3))
            if (p = u = t.match(J), e) {
              if (~t.indexOf("=")) return p = t.match(Z), a && p.length < 4 && (p[3] = 1), p
            } else o = +p[0] % 360 / 360, s = +p[1] / 100, i = 2 * (l = +p[2] / 100) - (r = l <= .5 ? l * (s + 1) : l + s - l * s), p.length > 3 && (p[3] *= 1), p[0] = Ce(o + 1 / 3, i, r), p[1] = Ce(o, i, r), p[2] = Ce(o - 1 / 3, i, r);
          else p = t.match(J) || Te.transparent;
          p = p.map(Number)
        }
        return e && !u && (i = p[0] / 255, r = p[1] / 255, n = p[2] / 255, l = ((c = Math.max(i, r, n)) + (d = Math.min(i, r, n))) / 2, c === d ? o = s = 0 : (h = c - d, s = l > .5 ? h / (2 - c - d) : h / (c + d), o = c === i ? (r - n) / h + (r < n ? 6 : 0) : c === r ? (n - i) / h + 2 : (i - r) / h + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * s + .5), p[2] = ~~(100 * l + .5)), a && p.length < 4 && (p[3] = 1), p
      },
      Se = function (t) {
        var e = [],
          a = [],
          i = -1;
        return t.split(Pe).forEach((function (t) {
          var r = t.match(tt) || [];
          e.push.apply(e, r), a.push(i += r.length + 1)
        })), e.c = a, e
      },
      ke = function (t, e, a) {
        var i, r, n, o, s = "",
          l = (t + s).match(Pe),
          c = e ? "hsla(" : "rgba(",
          d = 0;
        if (!l) return t;
        if (l = l.map((function (t) {
            return (t = _e(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
          })), a && (n = Se(t), (i = a.c).join(s) !== n.c.join(s)))
          for (o = (r = t.replace(Pe, "1").split(tt)).length - 1; d < o; d++) s += r[d] + (~i.indexOf(d) ? l.shift() || c + "0,0,0,0)" : (n.length ? n : l.length ? l : a).shift());
        if (!r)
          for (o = (r = t.split(Pe)).length - 1; d < o; d++) s += r[d] + l[d];
        return s + r[o]
      },
      Pe = function () {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in Te) e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi")
      }(),
      Oe = /hsl[a]?\(/,
      He = function (t) {
        var e, a = t.join(" ");
        if (Pe.lastIndex = 0, Pe.test(a)) return e = Oe.test(a), t[1] = ke(t[1], e), t[0] = ke(t[0], e, Se(t[1])), !0
      },
      Ve = (b = Date.now, x = 500, M = 33, z = b(), D = z, E = L = 1e3 / 240, T = function t(e) {
        var a, i, r, n, o = b() - D,
          s = !0 === e;
        if (o > x && (z += o - M), ((a = (r = (D += o) - z) - E) > 0 || s) && (n = ++v.frame, y = r - 1e3 * v.time, v.time = r /= 1e3, E += a + (a >= L ? 4 : L - a), i = 1), s || (g = f(t)), i)
          for (w = 0; w < A.length; w++) A[w](r, y, n, e)
      }, v = {
        time: 0,
        frame: 0,
        tick: function () {
          T(!0)
        },
        deltaRatio: function (t) {
          return y / (1e3 / (t || 60))
        },
        wake: function () {
          d && (!l && G() && (s = l = window, c = s.document || {}, nt.gsap = Da, (s.gsapVersions || (s.gsapVersions = [])).push(Da.version), st(ot || s.GreenSockGlobals || !s.gsap && s || {}), m = s.requestAnimationFrame), g && v.sleep(), f = m || function (t) {
            return setTimeout(t, E - 1e3 * v.time + 1 | 0)
          }, p = 1, T(2))
        },
        sleep: function () {
          (m ? s.cancelAnimationFrame : clearTimeout)(g), p = 0, f = ht
        },
        lagSmoothing: function (t, e) {
          x = t || 1 / 1e-8, M = Math.min(e, x, 0)
        },
        fps: function (t) {
          L = 1e3 / (t || 240), E = 1e3 * v.time + L
        },
        add: function (t) {
          A.indexOf(t) < 0 && A.push(t), Fe()
        },
        remove: function (t) {
          var e;
          ~(e = A.indexOf(t)) && A.splice(e, 1) && w >= e && w--
        },
        _listeners: A = []
      }),
      Fe = function () {
        return !p && Ve.wake()
      },
      Be = {},
      Ie = /^[\d.\-M][\d.\-,\s]/,
      $e = /["']/g,
      je = function (t) {
        for (var e, a, i, r = {}, n = t.substr(1, t.length - 3).split(":"), o = n[0], s = 1, l = n.length; s < l; s++) a = n[s], e = s !== l - 1 ? a.lastIndexOf(",") : a.length, i = a.substr(0, e), r[o] = isNaN(i) ? i.replace($e, "").trim() : +i, o = a.substr(e + 1).trim();
        return r
      },
      Re = function (t) {
        return function (e) {
          return 1 - t(1 - e)
        }
      },
      Ne = function t(e, a) {
        for (var i, r = e._first; r;) r instanceof Qe ? t(r, a) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === a || (r.timeline ? t(r.timeline, a) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = a)), r = r._next
      },
      Ye = function (t, e) {
        return t && (N(t) ? t : Be[t] || function (t) {
          var e, a, i, r, n = (t + "").split("("),
            o = Be[n[0]];
          return o && n.length > 1 && o.config ? o.config.apply(null, ~t.indexOf("{") ? [je(n[1])] : (e = t, a = e.indexOf("(") + 1, i = e.indexOf(")"), r = e.indexOf("(", a), e.substring(a, ~r && r < i ? e.indexOf(")", i + 1) : i)).split(",").map(Tt)) : Be._CE && Ie.test(t) ? Be._CE("", t) : o
        }(t)) || e
      },
      Xe = function (t, e, a, i) {
        void 0 === a && (a = function (t) {
          return 1 - e(1 - t)
        }), void 0 === i && (i = function (t) {
          return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var r, n = {
          easeIn: e,
          easeOut: a,
          easeInOut: i
        };
        return zt(t, (function (t) {
          for (var e in Be[t] = nt[t] = n, Be[r = t.toLowerCase()] = a, n) Be[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Be[t + "." + e] = n[e]
        })), n
      },
      qe = function (t) {
        return function (e) {
          return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
      },
      We = function t(e, a, i) {
        var r = a >= 1 ? a : 1,
          n = (i || (e ? .3 : .45)) / (a < 1 ? a : 1),
          o = n / V * (Math.asin(1 / r) || 0),
          s = function (t) {
            return 1 === t ? 1 : r * Math.pow(2, -10 * t) * j((t - o) * n) + 1
          },
          l = "out" === e ? s : "in" === e ? function (t) {
            return 1 - s(1 - t)
          } : qe(s);
        return n = V / n, l.config = function (a, i) {
          return t(e, a, i)
        }, l
      },
      Ge = function t(e, a) {
        void 0 === a && (a = 1.70158);
        var i = function (t) {
            return t ? --t * t * ((a + 1) * t + a) + 1 : 0
          },
          r = "out" === e ? i : "in" === e ? function (t) {
            return 1 - i(1 - t)
          } : qe(i);
        return r.config = function (a) {
          return t(e, a)
        }, r
      };
    zt("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
      var a = e < 5 ? e + 1 : e;
      Xe(t + ",Power" + (a - 1), e ? function (t) {
        return Math.pow(t, a)
      } : function (t) {
        return t
      }, (function (t) {
        return 1 - Math.pow(1 - t, a)
      }), (function (t) {
        return t < .5 ? Math.pow(2 * t, a) / 2 : 1 - Math.pow(2 * (1 - t), a) / 2
      }))
    })), Be.Linear.easeNone = Be.none = Be.Linear.easeIn, Xe("Elastic", We("in"), We("out"), We()), C = 7.5625, S = 1 / (_ = 2.75), Xe("Bounce", (function (t) {
      return 1 - k(1 - t)
    }), k = function (t) {
      return t < S ? C * t * t : t < .7272727272727273 ? C * Math.pow(t - 1.5 / _, 2) + .75 : t < .9090909090909092 ? C * (t -= 2.25 / _) * t + .9375 : C * Math.pow(t - 2.625 / _, 2) + .984375
    }), Xe("Expo", (function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0
    })), Xe("Circ", (function (t) {
      return -(I(1 - t * t) - 1)
    })), Xe("Sine", (function (t) {
      return 1 === t ? 1 : 1 - $(t * F)
    })), Xe("Back", Ge("in"), Ge("out"), Ge()), Be.SteppedEase = Be.steps = nt.SteppedEase = {
      config: function (t, e) {
        void 0 === t && (t = 1);
        var a = 1 / t,
          i = t + (e ? 0 : 1),
          r = e ? 1 : 0;
        return function (t) {
          return ((i * ae(0, 1 - 1e-8, t) | 0) + r) * a
        }
      }
    }, O.ease = Be["quad.out"], zt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
      return wt += t + "," + t + "Params,"
    }));
    var Ue = function (t, e) {
        this.id = B++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Mt, this.set = e ? e.getSetter : ha
      },
      Ke = function () {
        function t(t) {
          this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Kt(this, +t.duration, 1, 1), this.data = t.data, p || Ve.wake()
        }
        var e = t.prototype;
        return e.delay = function (t) {
          return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, e.duration = function (t) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, e.totalDuration = function (t) {
          return arguments.length ? (this._dirty = 0, Kt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function (t, e) {
          if (Fe(), !arguments.length) return this._tTime;
          var a = this._dp;
          if (a && a.smoothChildTiming && this._ts) {
            for (Yt(this, t), !a._dp || a.parent || Xt(a, this); a.parent;) a.parent._time !== a._start + (a._ts >= 0 ? a._tTime / a._ts : (a.totalDuration() - a._tTime) / -a._ts) && a.totalTime(a._tTime, !0), a = a.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && qt(this._dp, this, this._start - this._delay)
          }
          return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), At(this, t, e)), this
        }, e.time = function (t, e) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + $t(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, e.totalProgress = function (t, e) {
          return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, e.progress = function (t, e) {
          return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + $t(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, e.iteration = function (t, e) {
          var a = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (t - 1) * a, e) : this._repeat ? jt(this._tTime, a) + 1 : 1
        }, e.timeScale = function (t) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === t) return this;
          var e = this.parent && this._ts ? Rt(this.parent._time, this) : this._tTime;
          return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, It(this.totalTime(ae(-this._delay, this._tDur, e), !0))
        }, e.paused = function (t) {
          return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Fe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps
        }, e.startTime = function (t) {
          if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return e && (e._sort || !this.parent) && qt(e, this, t - this._delay), this
          }
          return this._start
        }, e.endTime = function (t) {
          return this._start + (W(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        }, e.rawTime = function (t) {
          var e = this.parent || this._dp;
          return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Rt(e.rawTime(t), this) : this._tTime : this._tTime
        }, e.globalTime = function (t) {
          for (var e = this, a = arguments.length ? t : e.rawTime(); e;) a = e._start + a / (e._ts || 1), e = e._dp;
          return a
        }, e.repeat = function (t) {
          return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Qt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, e.repeatDelay = function (t) {
          if (arguments.length) {
            var e = this._time;
            return this._rDelay = t, Qt(this), e ? this.time(e) : this
          }
          return this._rDelay
        }, e.yoyo = function (t) {
          return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, e.seek = function (t, e) {
          return this.totalTime(Zt(this, t), W(e))
        }, e.restart = function (t, e) {
          return this.play().totalTime(t ? -this._delay : 0, W(e))
        }, e.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, e.reverse = function (t, e) {
          return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, e.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0)
        }, e.resume = function () {
          return this.paused(!1)
        }, e.reversed = function (t) {
          return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
        }, e.invalidate = function () {
          return this._initted = this._act = 0, this._zTime = -1e-8, this
        }, e.isActive = function () {
          var t, e = this.parent || this._dp,
            a = this._start;
          return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= a && t < this.endTime(!0) - 1e-8))
        }, e.eventCallback = function (t, e, a) {
          var i = this.vars;
          return arguments.length > 1 ? (e ? (i[t] = e, a && (i[t + "Params"] = a), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, e.then = function (t) {
          var e = this;
          return new Promise((function (a) {
            var i = N(t) ? t : Ct,
              r = function () {
                var t = e.then;
                e.then = null, N(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), a(i), e.then = t
              };
            e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
          }))
        }, e.kill = function () {
          Ee(this)
        }, t
      }();
    _t(Ke.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1
    });
    var Qe = function (t) {
      function e(e, a) {
        var r;
        return void 0 === e && (e = {}), (r = t.call(this, e) || this).labels = {}, r.smoothChildTiming = !!e.smoothChildTiming, r.autoRemoveChildren = !!e.autoRemoveChildren, r._sort = W(e.sortChildren), o && qt(e.parent || o, i(r), a), e.reversed && r.reverse(), e.paused && r.paused(!0), e.scrollTrigger && Wt(i(r), e.scrollTrigger), r
      }
      r(e, t);
      var a = e.prototype;
      return a.to = function (t, e, a) {
        return te(0, arguments, this), this
      }, a.from = function (t, e, a) {
        return te(1, arguments, this), this
      }, a.fromTo = function (t, e, a, i) {
        return te(2, arguments, this), this
      }, a.set = function (t, e, a) {
        return e.duration = 0, e.parent = this, Ht(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new oa(t, e, Zt(this, a), 1), this
      }, a.call = function (t, e, a) {
        return qt(this, oa.delayedCall(0, t, e), a)
      }, a.staggerTo = function (t, e, a, i, r, n, o) {
        return a.duration = e, a.stagger = a.stagger || i, a.onComplete = n, a.onCompleteParams = o, a.parent = this, new oa(t, a, Zt(this, r)), this
      }, a.staggerFrom = function (t, e, a, i, r, n, o) {
        return a.runBackwards = 1, Ht(a).immediateRender = W(a.immediateRender), this.staggerTo(t, e, a, i, r, n, o)
      }, a.staggerFromTo = function (t, e, a, i, r, n, o, s) {
        return i.startAt = a, Ht(i).immediateRender = W(i.immediateRender), this.staggerTo(t, e, i, r, n, o, s)
      }, a.render = function (t, e, a) {
        var i, r, n, s, l, c, d, h, u, p, g, f, m = this._time,
          v = this._dirty ? this.totalDuration() : this._tDur,
          y = this._dur,
          w = this !== o && t > v - 1e-8 && t >= 0 ? v : t < 1e-8 ? 0 : t,
          b = this._zTime < 0 != t < 0 && (this._initted || !y);
        if (w !== this._tTime || a || b) {
          if (m !== this._time && y && (w += this._time - m, t += this._time - m), i = w, u = this._start, c = !(h = this._ts), b && (y || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
            if (g = this._yoyo, l = y + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * l + t, e, a);
            if (i = Dt(w % l), w === v ? (s = this._repeat, i = y) : ((s = ~~(w / l)) && s === w / l && (i = y, s--), i > y && (i = y)), p = jt(this._tTime, l), !m && this._tTime && p !== s && (p = s), g && 1 & s && (i = y - i, f = 1), s !== p && !this._lock) {
              var x = g && 1 & p,
                M = x === (g && 1 & s);
              if (s < p && (x = !x), m = x ? 0 : y, this._lock = 1, this.render(m || (f ? 0 : Dt(s * l)), e, !y)._lock = 0, this._tTime = w, !e && this.parent && Le(this, "onRepeat"), this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1), m && m !== this._time || c !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
              if (y = this._dur, v = this._tDur, M && (this._lock = 2, m = x ? y : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !f && this.invalidate()), this._lock = 0, !this._ts && !c) return this;
              Ne(this, f)
            }
          }
          if (this._hasPause && !this._forcing && this._lock < 2 && (d = function (t, e, a) {
              var i;
              if (a > e)
                for (i = t._first; i && i._start <= a;) {
                  if (!i._dur && "isPause" === i.data && i._start > e) return i;
                  i = i._next
                } else
                  for (i = t._last; i && i._start >= a;) {
                    if (!i._dur && "isPause" === i.data && i._start < e) return i;
                    i = i._prev
                  }
            }(this, Dt(m), Dt(i))) && (w -= i - (i = d._start)), this._tTime = w, this._time = i, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, m = 0), !m && i && !e && (Le(this, "onStart"), this._tTime !== w)) return this;
          if (i >= m && t >= 0)
            for (r = this._first; r;) {
              if (n = r._next, (r._act || i >= r._start) && r._ts && d !== r) {
                if (r.parent !== this) return this.render(t, e, a);
                if (r.render(r._ts > 0 ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, a), i !== this._time || !this._ts && !c) {
                  d = 0, n && (w += this._zTime = -1e-8);
                  break
                }
              }
              r = n
            } else {
              r = this._last;
              for (var z = t < 0 ? t : i; r;) {
                if (n = r._prev, (r._act || z <= r._end) && r._ts && d !== r) {
                  if (r.parent !== this) return this.render(t, e, a);
                  if (r.render(r._ts > 0 ? (z - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (z - r._start) * r._ts, e, a), i !== this._time || !this._ts && !c) {
                    d = 0, n && (w += this._zTime = z ? -1e-8 : 1e-8);
                    break
                  }
                }
                r = n
              }
            }
          if (d && !e && (this.pause(), d.render(i >= m ? 0 : -1e-8)._zTime = i >= m ? 1 : -1, this._ts)) return this._start = u, Nt(this), this.render(t, e, a);
          this._onUpdate && !e && Le(this, "onUpdate", !0), (w === v && v >= this.totalDuration() || !w && m) && (u !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || ((t || !y) && (w === v && this._ts > 0 || !w && this._ts < 0) && Ft(this, 1), e || t < 0 && !m || !w && !m && v || (Le(this, w === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(w < v && this.timeScale() > 0) && this._prom())))
        }
        return this
      }, a.add = function (t, e) {
        var a = this;
        if (Y(e) || (e = Zt(this, e, t)), !(t instanceof Ke)) {
          if (Q(t)) return t.forEach((function (t) {
            return a.add(t, e)
          })), this;
          if (R(t)) return this.addLabel(t, e);
          if (!N(t)) return this;
          t = oa.delayedCall(0, t)
        }
        return this !== t ? qt(this, t, e) : this
      }, a.getChildren = function (t, e, a, i) {
        void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === a && (a = !0), void 0 === i && (i = -H);
        for (var r = [], n = this._first; n;) n._start >= i && (n instanceof oa ? e && r.push(n) : (a && r.push(n), t && r.push.apply(r, n.getChildren(!0, e, a)))), n = n._next;
        return r
      }, a.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), a = e.length; a--;)
          if (e[a].vars.id === t) return e[a]
      }, a.remove = function (t) {
        return R(t) ? this.removeLabel(t) : N(t) ? this.killTweensOf(t) : (Vt(this, t), t === this._recent && (this._recent = this._last), Bt(this))
      }, a.totalTime = function (e, a) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Dt(Ve.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, a), this._forcing = 0, this) : this._tTime
      }, a.addLabel = function (t, e) {
        return this.labels[t] = Zt(this, e), this
      }, a.removeLabel = function (t) {
        return delete this.labels[t], this
      }, a.addPause = function (t, e, a) {
        var i = oa.delayedCall(0, e || ht, a);
        return i.data = "isPause", this._hasPause = 1, qt(this, i, Zt(this, t))
      }, a.removePause = function (t) {
        var e = this._first;
        for (t = Zt(this, t); e;) e._start === t && "isPause" === e.data && Ft(e), e = e._next
      }, a.killTweensOf = function (t, e, a) {
        for (var i = this.getTweensOf(t, a), r = i.length; r--;) Je !== i[r] && i[r].kill(t, e);
        return this
      }, a.getTweensOf = function (t, e) {
        for (var a, i = [], r = le(t), n = this._first, o = Y(e); n;) n instanceof oa ? Lt(n._targets, r) && (o ? (!Je || n._initted && n._ts) && n.globalTime(0) <= e && n.globalTime(n.totalDuration()) > e : !e || n.isActive()) && i.push(n) : (a = n.getTweensOf(r, e)).length && i.push.apply(i, a), n = n._next;
        return i
      }, a.tweenTo = function (t, e) {
        e = e || {};
        var a, i = this,
          r = Zt(i, t),
          n = e,
          o = n.startAt,
          s = n.onStart,
          l = n.onStartParams,
          c = n.immediateRender,
          d = oa.to(i, _t({
            ease: e.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: r,
            overwrite: "auto",
            duration: e.duration || Math.abs((r - (o && "time" in o ? o.time : i._time)) / i.timeScale()) || 1e-8,
            onStart: function () {
              if (i.pause(), !a) {
                var t = e.duration || Math.abs((r - (o && "time" in o ? o.time : i._time)) / i.timeScale());
                d._dur !== t && Kt(d, t, 0, 1).render(d._time, !0, !0), a = 1
              }
              s && s.apply(d, l || [])
            }
          }, e));
        return c ? d.render(0) : d
      }, a.tweenFromTo = function (t, e, a) {
        return this.tweenTo(e, _t({
          startAt: {
            time: Zt(this, t)
          }
        }, a))
      }, a.recent = function () {
        return this._recent
      }, a.nextLabel = function (t) {
        return void 0 === t && (t = this._time), De(this, Zt(this, t))
      }, a.previousLabel = function (t) {
        return void 0 === t && (t = this._time), De(this, Zt(this, t), 1)
      }, a.currentLabel = function (t) {
        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
      }, a.shiftChildren = function (t, e, a) {
        void 0 === a && (a = 0);
        for (var i, r = this._first, n = this.labels; r;) r._start >= a && (r._start += t, r._end += t), r = r._next;
        if (e)
          for (i in n) n[i] >= a && (n[i] += t);
        return Bt(this)
      }, a.invalidate = function () {
        var e = this._first;
        for (this._lock = 0; e;) e.invalidate(), e = e._next;
        return t.prototype.invalidate.call(this)
      }, a.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, a = this._first; a;) e = a._next, this.remove(a), a = e;
        return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Bt(this)
      }, a.totalDuration = function (t) {
        var e, a, i, r = 0,
          n = this,
          s = n._last,
          l = H;
        if (arguments.length) return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -t : t));
        if (n._dirty) {
          for (i = n.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (a = s._start) > l && n._sort && s._ts && !n._lock ? (n._lock = 1, qt(n, s, a - s._delay, 1)._lock = 0) : l = a, a < 0 && s._ts && (r -= a, (!i && !n._dp || i && i.smoothChildTiming) && (n._start += a / n._ts, n._time -= a, n._tTime -= a), n.shiftChildren(-a, !1, -Infinity), l = 0), s._end > r && s._ts && (r = s._end), s = e;
          Kt(n, n === o && n._time > r ? n._time : r, 1, 1), n._dirty = 0
        }
        return n._tDur
      }, e.updateRoot = function (t) {
        if (o._ts && (At(o, Rt(t, o)), h = Ve.frame), Ve.frame >= vt) {
          vt += P.autoSleep || 120;
          var e = o._first;
          if ((!e || !e._ts) && P.autoSleep && Ve._listeners.length < 2) {
            for (; e && !e._ts;) e = e._next;
            e || Ve.sleep()
          }
        }
      }, e
    }(Ke);
    _t(Qe.prototype, {
      _lock: 0,
      _hasPause: 0,
      _forcing: 0
    });
    var Je, Ze = function (t, e, a, i, r, n, o) {
        var s, l, c, d, h, u, p, g, f = new ba(this._pt, t, e, 0, 1, ga, null, r),
          m = 0,
          v = 0;
        for (f.b = a, f.e = i, a += "", (p = ~(i += "").indexOf("random(")) && (i = xe(i)), n && (n(g = [a, i], t, e), a = g[0], i = g[1]), l = a.match(et) || []; s = et.exec(i);) d = s[0], h = i.substring(m, s.index), c ? c = (c + 1) % 5 : "rgba(" === h.substr(-5) && (c = 1), d !== l[v++] && (u = parseFloat(l[v - 1]) || 0, f._pt = {
          _next: f._pt,
          p: h || 1 === v ? h : ",",
          s: u,
          c: "=" === d.charAt(1) ? parseFloat(d.substr(2)) * ("-" === d.charAt(0) ? -1 : 1) : parseFloat(d) - u,
          m: c && c < 4 ? Math.round : 0
        }, m = et.lastIndex);
        return f.c = m < i.length ? i.substring(m, i.length) : "", f.fp = o, (at.test(i) || p) && (f.e = 0), this._pt = f, f
      },
      ta = function (t, e, a, i, r, n, o, s, l) {
        N(i) && (i = i(r || 0, t, n));
        var c, d = t[e],
          h = "get" !== a ? a : N(d) ? l ? t[e.indexOf("set") || !N(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
          u = N(d) ? l ? ca : la : sa;
        if (R(i) && (~i.indexOf("random(") && (i = xe(i)), "=" === i.charAt(1) && ((c = parseFloat(h) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (ie(h) || 0)) || 0 === c) && (i = c)), h !== i) return isNaN(h * i) || "" === i ? (!d && !(e in t) && lt(e, i), Ze.call(this, t, e, h, i, u, s || P.stringFilter, l)) : (c = new ba(this._pt, t, e, +h || 0, i - (h || 0), "boolean" == typeof d ? pa : ua, 0, u), l && (c.fp = l), o && c.modifier(o, this, t), this._pt = c)
      },
      ea = function (t, e, a, i, r, n) {
        var o, s, l, c;
        if (ft[t] && !1 !== (o = new ft[t]).init(r, o.rawVars ? e[t] : function (t, e, a, i, r) {
            if (N(t) && (t = ia(t, r, e, a, i)), !q(t) || t.style && t.nodeType || Q(t) || K(t)) return R(t) ? ia(t, r, e, a, i) : t;
            var n, o = {};
            for (n in t) o[n] = ia(t[n], r, e, a, i);
            return o
          }(e[t], i, r, n, a), a, i, n) && (a._pt = s = new ba(a._pt, r, t, 0, 1, o.render, o, 0, o.priority), a !== u))
          for (l = a._ptLookup[a._targets.indexOf(r)], c = o._props.length; c--;) l[o._props[c]] = s;
        return o
      },
      aa = function t(e, a) {
        var i, r, s, l, c, d, h, u, p, g, f, m, v, y = e.vars,
          w = y.ease,
          b = y.startAt,
          x = y.immediateRender,
          M = y.lazy,
          z = y.onUpdate,
          D = y.onUpdateParams,
          L = y.callbackScope,
          E = y.runBackwards,
          A = y.yoyoEase,
          T = y.keyframes,
          C = y.autoRevert,
          _ = e._dur,
          S = e._startAt,
          k = e._targets,
          P = e.parent,
          H = P && "nested" === P.data ? P.parent._targets : k,
          V = "auto" === e._overwrite && !n,
          F = e.timeline;
        if (F && (!T || !w) && (w = "none"), e._ease = Ye(w, O.ease), e._yEase = A ? Re(Ye(!0 === A ? w : A, O.ease)) : 0, A && e._yoyo && !e._repeat && (A = e._yEase, e._yEase = e._ease, e._ease = A), e._from = !F && !!y.runBackwards, !F) {
          if (m = (u = k[0] ? xt(k[0]).harness : 0) && y[u.prop], i = Ot(y, ut), S && S.render(-1, !0).kill(), b)
            if (Ft(e._startAt = oa.set(k, _t({
                data: "isStart",
                overwrite: !1,
                parent: P,
                immediateRender: !0,
                lazy: W(M),
                startAt: null,
                delay: 0,
                onUpdate: z,
                onUpdateParams: D,
                callbackScope: L,
                stagger: 0
              }, b))), a < 0 && !x && !C && e._startAt.render(-1, !0), x) {
              if (a > 0 && !C && (e._startAt = 0), _ && a <= 0) return void(a && (e._zTime = a))
            } else !1 === C && (e._startAt = 0);
          else if (E && _)
            if (S) !C && (e._startAt = 0);
            else if (a && (x = !1), s = _t({
              overwrite: !1,
              data: "isFromStart",
              lazy: x && W(M),
              immediateRender: x,
              stagger: 0,
              parent: P
            }, i), m && (s[u.prop] = m), Ft(e._startAt = oa.set(k, s)), a < 0 && e._startAt.render(-1, !0), x) {
            if (!a) return
          } else t(e._startAt, 1e-8);
          for (e._pt = 0, M = _ && W(M) || M && !_, r = 0; r < k.length; r++) {
            if (h = (c = k[r])._gsap || bt(k)[r]._gsap, e._ptLookup[r] = g = {}, gt[h.id] && pt.length && Et(), f = H === k ? r : H.indexOf(c), u && !1 !== (p = new u).init(c, m || i, e, f, H) && (e._pt = l = new ba(e._pt, c, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach((function (t) {
                g[t] = l
              })), p.priority && (d = 1)), !u || m)
              for (s in i) ft[s] && (p = ea(s, i, e, f, c, H)) ? p.priority && (d = 1) : g[s] = l = ta.call(e, c, s, "get", i[s], f, H, 0, y.stringFilter);
            e._op && e._op[r] && e.kill(c, e._op[r]), V && e._pt && (Je = e, o.killTweensOf(c, g, e.globalTime(0)), v = !e.parent, Je = 0), e._pt && M && (gt[h.id] = 1)
          }
          d && wa(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = z, e._initted = (!e._op || e._pt) && !v
      },
      ia = function (t, e, a, i, r) {
        return N(t) ? t.call(e, a, i, r) : R(t) && ~t.indexOf("random(") ? xe(t) : t
      },
      ra = wt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      na = (ra + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
      oa = function (t) {
        function e(e, a, r, s) {
          var l;
          "number" == typeof a && (r.duration = a, a = r, r = null);
          var c, d, h, u, p, g, f, m, v = (l = t.call(this, s ? a : Ht(a)) || this).vars,
            y = v.duration,
            w = v.delay,
            b = v.immediateRender,
            x = v.stagger,
            M = v.overwrite,
            z = v.keyframes,
            D = v.defaults,
            L = v.scrollTrigger,
            E = v.yoyoEase,
            A = a.parent || o,
            T = (Q(e) || K(e) ? Y(e[0]) : "length" in a) ? [e] : le(e);
          if (l._targets = T.length ? bt(T) : ct("GSAP target " + e + " not found. https://greensock.com", !P.nullTargetWarn) || [], l._ptLookup = [], l._overwrite = M, z || x || U(y) || U(w)) {
            if (a = l.vars, (c = l.timeline = new Qe({
                data: "nested",
                defaults: D || {}
              })).kill(), c.parent = c._dp = i(l), c._start = 0, z) _t(c.vars.defaults, {
              ease: "none"
            }), x ? T.forEach((function (t, e) {
              return z.forEach((function (a, i) {
                return c.to(t, a, i ? ">" : e * x)
              }))
            })) : z.forEach((function (t) {
              return c.to(T, t, ">")
            }));
            else {
              if (u = T.length, f = x ? he(x) : ht, q(x))
                for (p in x) ~ra.indexOf(p) && (m || (m = {}), m[p] = x[p]);
              for (d = 0; d < u; d++) {
                for (p in h = {}, a) na.indexOf(p) < 0 && (h[p] = a[p]);
                h.stagger = 0, E && (h.yoyoEase = E), m && kt(h, m), g = T[d], h.duration = +ia(y, i(l), d, g, T), h.delay = (+ia(w, i(l), d, g, T) || 0) - l._delay, !x && 1 === u && h.delay && (l._delay = w = h.delay, l._start += w, h.delay = 0), c.to(g, h, f(d, g, T))
              }
              c.duration() ? y = w = 0 : l.timeline = 0
            }
            y || l.duration(y = c.duration())
          } else l.timeline = 0;
          return !0 !== M || n || (Je = i(l), o.killTweensOf(T), Je = 0), qt(A, i(l), r), a.reversed && l.reverse(), a.paused && l.paused(!0), (b || !y && !z && l._start === Dt(A._time) && W(b) && function t(e) {
            return !e || e._ts && t(e.parent)
          }(i(l)) && "nested" !== A.data) && (l._tTime = -1e-8, l.render(Math.max(0, -w))), L && Wt(i(l), L), l
        }
        r(e, t);
        var a = e.prototype;
        return a.render = function (t, e, a) {
          var i, r, n, o, s, l, c, d, h, u = this._time,
            p = this._tDur,
            g = this._dur,
            f = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
          if (g) {
            if (f !== this._tTime || !t || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
              if (i = f, d = this.timeline, this._repeat) {
                if (o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, a);
                if (i = Dt(f % o), f === p ? (n = this._repeat, i = g) : ((n = ~~(f / o)) && n === f / o && (i = g, n--), i > g && (i = g)), (l = this._yoyo && 1 & n) && (h = this._yEase, i = g - i), s = jt(this._tTime, o), i === u && !a && this._initted) return this;
                n !== s && (d && this._yEase && Ne(d, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = a = 1, this.render(Dt(o * n), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Gt(this, t < 0 ? t : i, a, e)) return this._tTime = 0, this;
                if (g !== this._dur) return this.render(t, e, a)
              }
              if (this._tTime = f, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (h || this._ease)(i / g), this._from && (this.ratio = c = 1 - c), i && !u && !e && (Le(this, "onStart"), this._tTime !== f)) return this;
              for (r = this._pt; r;) r.r(c, r.d), r = r._next;
              d && d.render(t < 0 ? t : !i && l ? -1e-8 : d._dur * c, e, a) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, a), Le(this, "onUpdate")), this._repeat && n !== s && this.vars.onRepeat && !e && this.parent && Le(this, "onRepeat"), f !== this._tDur && f || this._tTime !== f || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !g) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && Ft(this, 1), e || t < 0 && !u || !f && !u || (Le(this, f === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < p && this.timeScale() > 0) && this._prom()))
            }
          } else ! function (t, e, a, i) {
            var r, n, o, s = t.ratio,
              l = e < 0 || !e && (!t._start && function t(e) {
                var a = e.parent;
                return a && a._ts && a._initted && !a._lock && (a.rawTime() < 0 || t(a))
              }(t) && (t._initted || !Ut(t)) || (t._ts < 0 || t._dp._ts < 0) && !Ut(t)) ? 0 : 1,
              c = t._rDelay,
              d = 0;
            if (c && t._repeat && (d = ae(0, t._tDur, e), n = jt(d, c), o = jt(t._tTime, c), t._yoyo && 1 & n && (l = 1 - l), n !== o && (s = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== s || i || 1e-8 === t._zTime || !e && t._zTime) {
              if (!t._initted && Gt(t, e, i, a)) return;
              for (o = t._zTime, t._zTime = e || (a ? 1e-8 : 0), a || (a = e && !o), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = d, r = t._pt; r;) r.r(l, r.d), r = r._next;
              t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !a && Le(t, "onUpdate"), d && t._repeat && !a && t.parent && Le(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && Ft(t, 1), a || (Le(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
          }(this, t, e, a);
          return this
        }, a.targets = function () {
          return this._targets
        }, a.invalidate = function () {
          return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
        }, a.kill = function (t, e) {
          if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? Ee(this) : this;
          if (this.timeline) {
            var a = this.timeline.totalDuration();
            return this.timeline.killTweensOf(t, e, Je && !0 !== Je.vars.overwrite)._first || Ee(this), this.parent && a !== this.timeline.totalDuration() && Kt(this, this._dur * this.timeline._tDur / a, 0, 1), this
          }
          var i, r, n, o, s, l, c, d = this._targets,
            h = t ? le(t) : d,
            u = this._ptLookup,
            p = this._pt;
          if ((!e || "all" === e) && function (t, e) {
              for (var a = t.length, i = a === e.length; i && a-- && t[a] === e[a];);
              return a < 0
            }(d, h)) return "all" === e && (this._pt = 0), Ee(this);
          for (i = this._op = this._op || [], "all" !== e && (R(e) && (s = {}, zt(e, (function (t) {
              return s[t] = 1
            })), e = s), e = function (t, e) {
              var a, i, r, n, o = t[0] ? xt(t[0]).harness : 0,
                s = o && o.aliases;
              if (!s) return e;
              for (i in a = kt({}, e), s)
                if (i in a)
                  for (r = (n = s[i].split(",")).length; r--;) a[n[r]] = a[i];
              return a
            }(d, e)), c = d.length; c--;)
            if (~h.indexOf(d[c]))
              for (s in r = u[c], "all" === e ? (i[c] = e, o = r, n = {}) : (n = i[c] = i[c] || {}, o = e), o)(l = r && r[s]) && ("kill" in l.d && !0 !== l.d.kill(s) || Vt(this, l, "_pt"), delete r[s]), "all" !== n && (n[s] = 1);
          return this._initted && !this._pt && p && Ee(this), this
        }, e.to = function (t, a) {
          return new e(t, a, arguments[2])
        }, e.from = function (t, e) {
          return te(1, arguments)
        }, e.delayedCall = function (t, a, i, r) {
          return new e(a, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: a,
            onReverseComplete: a,
            onCompleteParams: i,
            onReverseCompleteParams: i,
            callbackScope: r
          })
        }, e.fromTo = function (t, e, a) {
          return te(2, arguments)
        }, e.set = function (t, a) {
          return a.duration = 0, a.repeatDelay || (a.repeat = 0), new e(t, a)
        }, e.killTweensOf = function (t, e, a) {
          return o.killTweensOf(t, e, a)
        }, e
      }(Ke);
    _t(oa.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0
    }), zt("staggerTo,staggerFrom,staggerFromTo", (function (t) {
      oa[t] = function () {
        var e = new Qe,
          a = ne.call(arguments, 0);
        return a.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, a)
      }
    }));
    var sa = function (t, e, a) {
        return t[e] = a
      },
      la = function (t, e, a) {
        return t[e](a)
      },
      ca = function (t, e, a, i) {
        return t[e](i.fp, a)
      },
      da = function (t, e, a) {
        return t.setAttribute(e, a)
      },
      ha = function (t, e) {
        return N(t[e]) ? la : X(t[e]) && t.setAttribute ? da : sa
      },
      ua = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
      },
      pa = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
      },
      ga = function (t, e) {
        var a = e._pt,
          i = "";
        if (!t && e.b) i = e.b;
        else if (1 === t && e.e) i = e.e;
        else {
          for (; a;) i = a.p + (a.m ? a.m(a.s + a.c * t) : Math.round(1e4 * (a.s + a.c * t)) / 1e4) + i, a = a._next;
          i += e.c
        }
        e.set(e.t, e.p, i, e)
      },
      fa = function (t, e) {
        for (var a = e._pt; a;) a.r(t, a.d), a = a._next
      },
      ma = function (t, e, a, i) {
        for (var r, n = this._pt; n;) r = n._next, n.p === i && n.modifier(t, e, a), n = r
      },
      va = function (t) {
        for (var e, a, i = this._pt; i;) a = i._next, i.p === t && !i.op || i.op === t ? Vt(this, i, "_pt") : i.dep || (e = 1), i = a;
        return !e
      },
      ya = function (t, e, a, i) {
        i.mSet(t, e, i.m.call(i.tween, a, i.mt), i)
      },
      wa = function (t) {
        for (var e, a, i, r, n = t._pt; n;) {
          for (e = n._next, a = i; a && a.pr > n.pr;) a = a._next;
          (n._prev = a ? a._prev : r) ? n._prev._next = n: i = n, (n._next = a) ? a._prev = n : r = n, n = e
        }
        t._pt = i
      },
      ba = function () {
        function t(t, e, a, i, r, n, o, s, l) {
          this.t = e, this.s = i, this.c = r, this.p = a, this.r = n || ua, this.d = o || this, this.set = s || sa, this.pr = l || 0, this._next = t, t && (t._prev = this)
        }
        return t.prototype.modifier = function (t, e, a) {
          this.mSet = this.mSet || this.set, this.set = ya, this.m = t, this.mt = a, this.tween = e
        }, t
      }();
    zt(wt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
      return ut[t] = 1
    })), nt.TweenMax = nt.TweenLite = oa, nt.TimelineLite = nt.TimelineMax = Qe, o = new Qe({
      sortChildren: !1,
      defaults: O,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0
    }), P.stringFilter = He;
    var xa = {
      registerPlugin: function () {
        for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
        e.forEach((function (t) {
          return Ae(t)
        }))
      },
      timeline: function (t) {
        return new Qe(t)
      },
      getTweensOf: function (t, e) {
        return o.getTweensOf(t, e)
      },
      getProperty: function (t, e, a, i) {
        R(t) && (t = le(t)[0]);
        var r = xt(t || {}).get,
          n = a ? Ct : Tt;
        return "native" === a && (a = ""), t ? e ? n((ft[e] && ft[e].get || r)(t, e, a, i)) : function (e, a, i) {
          return n((ft[e] && ft[e].get || r)(t, e, a, i))
        } : t
      },
      quickSetter: function (t, e, a) {
        if ((t = le(t)).length > 1) {
          var i = t.map((function (t) {
              return Da.quickSetter(t, e, a)
            })),
            r = i.length;
          return function (t) {
            for (var e = r; e--;) i[e](t)
          }
        }
        t = t[0] || {};
        var n = ft[e],
          o = xt(t),
          s = o.harness && (o.harness.aliases || {})[e] || e,
          l = n ? function (e) {
            var i = new n;
            u._pt = 0, i.init(t, a ? e + a : e, u, 0, [t]), i.render(1, i), u._pt && fa(1, u)
          } : o.set(t, s);
        return n ? l : function (e) {
          return l(t, s, a ? e + a : e, o, 1)
        }
      },
      isTweening: function (t) {
        return o.getTweensOf(t, !0).length > 0
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Ye(t.ease, O.ease)), Pt(O, t || {})
      },
      config: function (t) {
        return Pt(P, t || {})
      },
      registerEffect: function (t) {
        var e = t.name,
          a = t.effect,
          i = t.plugins,
          r = t.defaults,
          n = t.extendTimeline;
        (i || "").split(",").forEach((function (t) {
          return t && !ft[t] && !nt[t] && ct(e + " effect requires " + t + " plugin.")
        })), mt[e] = function (t, e, i) {
          return a(le(t), _t(e || {}, r), i)
        }, n && (Qe.prototype[e] = function (t, a, i) {
          return this.add(mt[e](t, q(a) ? a : (i = a) && {}, this), i)
        })
      },
      registerEase: function (t, e) {
        Be[t] = Ye(e)
      },
      parseEase: function (t, e) {
        return arguments.length ? Ye(t, e) : Be
      },
      getById: function (t) {
        return o.getById(t)
      },
      exportRoot: function (t, e) {
        void 0 === t && (t = {});
        var a, i, r = new Qe(t);
        for (r.smoothChildTiming = W(t.smoothChildTiming), o.remove(r), r._dp = 0, r._time = r._tTime = o._time, a = o._first; a;) i = a._next, !e && !a._dur && a instanceof oa && a.vars.onComplete === a._targets[0] || qt(r, a, a._start - a._delay), a = i;
        return qt(o, r, 0), r
      },
      utils: {
        wrap: we,
        wrapYoyo: be,
        distribute: he,
        random: ge,
        snap: pe,
        normalize: ve,
        getUnit: ie,
        clamp: re,
        splitColor: _e,
        toArray: le,
        selector: ce,
        mapRange: Me,
        pipe: fe,
        unitize: me,
        interpolate: ze,
        shuffle: de
      },
      install: st,
      effects: mt,
      ticker: Ve,
      updateRoot: Qe.updateRoot,
      plugins: ft,
      globalTimeline: o,
      core: {
        PropTween: ba,
        globals: dt,
        Tween: oa,
        Timeline: Qe,
        Animation: Ke,
        getCache: xt,
        _removeLinkedListItem: Vt,
        suppressOverwrites: function (t) {
          return n = t
        }
      }
    };
    zt("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
      return xa[t] = oa[t]
    })), Ve.add(Qe.updateRoot), u = xa.to({}, {
      duration: 0
    });
    var Ma = function (t, e) {
        for (var a = t._pt; a && a.p !== e && a.op !== e && a.fp !== e;) a = a._next;
        return a
      },
      za = function (t, e) {
        return {
          name: t,
          rawVars: 1,
          init: function (t, a, i) {
            i._onInit = function (t) {
              var i, r;
              if (R(a) && (i = {}, zt(a, (function (t) {
                  return i[t] = 1
                })), a = i), e) {
                for (r in i = {}, a) i[r] = e(a[r]);
                a = i
              }! function (t, e) {
                var a, i, r, n = t._targets;
                for (a in e)
                  for (i = n.length; i--;)(r = t._ptLookup[i][a]) && (r = r.d) && (r._pt && (r = Ma(r, a)), r && r.modifier && r.modifier(e[a], t, n[i], a))
              }(t, a)
            }
          }
        }
      },
      Da = xa.registerPlugin({
        name: "attr",
        init: function (t, e, a, i, r) {
          var n, o;
          for (n in e)(o = this.add(t, "setAttribute", (t.getAttribute(n) || 0) + "", e[n], i, r, 0, 0, n)) && (o.op = n), this._props.push(n)
        }
      }, {
        name: "endArray",
        init: function (t, e) {
          for (var a = e.length; a--;) this.add(t, a, t[a] || 0, e[a])
        }
      }, za("roundProps", ue), za("modifiers"), za("snap", pe)) || xa;
    oa.version = Qe.version = Da.version = "3.7.1", d = 1, G() && Fe();
    var La = Be.Power0,
      Ea = Be.Power1,
      Aa = Be.Power2,
      Ta = Be.Power3,
      Ca = Be.Power4,
      _a = Be.Linear,
      Sa = Be.Quad,
      ka = Be.Cubic,
      Pa = Be.Quart,
      Oa = Be.Quint,
      Ha = Be.Strong,
      Va = Be.Elastic,
      Fa = Be.Back,
      Ba = Be.SteppedEase,
      Ia = Be.Bounce,
      $a = Be.Sine,
      ja = Be.Expo,
      Ra = Be.Circ
  }, function (t, e, a) {
    "use strict";
    a.r(e), a.d(e, "getRawPath", (function () {
      return E
    })), a.d(e, "copyRawPath", (function () {
      return A
    })), a.d(e, "reverseSegment", (function () {
      return T
    })), a.d(e, "convertToPath", (function () {
      return _
    })), a.d(e, "getRotationAtProgress", (function () {
      return S
    })), a.d(e, "sliceRawPath", (function () {
      return P
    })), a.d(e, "cacheRawPathMeasurements", (function () {
      return H
    })), a.d(e, "subdivideSegment", (function () {
      return V
    })), a.d(e, "getPositionOnPath", (function () {
      return B
    })), a.d(e, "transformRawPath", (function () {
      return I
    })), a.d(e, "stringToRawPath", (function () {
      return j
    })), a.d(e, "bezierToPoints", (function () {
      return R
    })), a.d(e, "flatPointsToSegment", (function () {
      return N
    })), a.d(e, "pointsToSegment", (function () {
      return Y
    })), a.d(e, "simplifyPoints", (function () {
      return X
    })), a.d(e, "getClosestData", (function () {
      return W
    })), a.d(e, "subdivideSegmentNear", (function () {
      return G
    })), a.d(e, "rawPathToString", (function () {
      return U
    }));
    /*!
     * paths 3.7.1
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var i, r = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      n = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      o = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
      s = /(^[#\.][a-z]|[a-y][a-z])/i,
      l = Math.PI / 180,
      c = 180 / Math.PI,
      d = Math.sin,
      h = Math.cos,
      u = Math.abs,
      p = Math.sqrt,
      g = Math.atan2,
      f = function (t) {
        return "string" == typeof t
      },
      m = function (t) {
        return "number" == typeof t
      },
      v = {},
      y = {},
      w = function (t) {
        return Math.round((t + 1e8) % 1 * 1e5) / 1e5 || (t < 0 ? 0 : 1)
      },
      b = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0
      },
      x = function (t) {
        return Math.round(1e10 * t) / 1e10 || 0
      },
      M = function (t, e, a, i) {
        var r = t[e],
          n = 1 === i ? 6 : V(r, a, i);
        if (n && n + a + 2 < r.length) return t.splice(e, 0, r.slice(0, a + n + 2)), r.splice(0, a + n), 1
      },
      z = function (t, e, a) {
        var i = t.length,
          r = ~~(a * i);
        if (t[r] > e)
          for (; --r && t[r] > e;);
        else
          for (; t[++r] < e && r < i;);
        return r
      },
      D = function (t, e) {
        return e.totalLength = t.totalLength, t.samples ? (e.samples = t.samples.slice(0), e.lookup = t.lookup.slice(0), e.minLength = t.minLength, e.resolution = t.resolution) : t.totalPoints && (e.totalPoints = t.totalPoints), e
      },
      L = function (t, e) {
        var a = t.length,
          i = t[a - 1] || [],
          r = i.length;
        a && e[0] === i[r - 2] && e[1] === i[r - 1] && (e = i.concat(e.slice(2)), a--), t[a] = e
      };

    function E(t) {
      var e, a = (t = f(t) && s.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;
      return a && (t = t.getAttribute("d")) ? (a._gsPath || (a._gsPath = {}), (e = a._gsPath[t]) && !e._dirty ? e : a._gsPath[t] = j(t)) : t ? f(t) ? j(t) : m(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string")
    }

    function A(t) {
      for (var e = [], a = 0; a < t.length; a++) e[a] = D(t[a], t[a].slice(0));
      return D(t, e)
    }

    function T(t) {
      var e, a = 0;
      for (t.reverse(); a < t.length; a += 2) e = t[a], t[a] = t[a + 1], t[a + 1] = e;
      t.reversed = !t.reversed
    }
    var C = {
      rect: "rx,ry,x,y,width,height",
      circle: "r,cx,cy",
      ellipse: "rx,ry,cx,cy",
      line: "x1,x2,y1,y2"
    };

    function _(t, e) {
      var a, i, r, o, s, l, c, d, h, u, p, g, f, m, v, y, w, b, x, M, z, D, L = t.tagName.toLowerCase(),
        E = .552284749831;
      return "path" !== L && t.getBBox ? (l = function (t, e) {
        var a, i = document.createElementNS("http://www.w3.org/2000/svg", "path"),
          r = [].slice.call(t.attributes),
          n = r.length;
        for (e = "," + e + ","; --n > -1;) a = r[n].nodeName.toLowerCase(), e.indexOf("," + a + ",") < 0 && i.setAttributeNS(null, a, r[n].nodeValue);
        return i
      }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), D = function (t, e) {
        for (var a = e ? e.split(",") : [], i = {}, r = a.length; --r > -1;) i[a[r]] = +t.getAttribute(a[r]) || 0;
        return i
      }(t, C[L]), "rect" === L ? (o = D.rx, s = D.ry || o, i = D.x, r = D.y, u = D.width - 2 * o, p = D.height - 2 * s, a = o || s ? "M" + (y = (m = (f = i + o) + u) + o) + "," + (b = r + s) + " V" + (x = b + p) + " C" + [y, M = x + s * E, v = m + o * E, z = x + s, m, z, m - (m - f) / 3, z, f + (m - f) / 3, z, f, z, g = i + o * (1 - E), z, i, M, i, x, i, x - (x - b) / 3, i, b + (x - b) / 3, i, b, i, w = r + s * (1 - E), g, r, f, r, f + (m - f) / 3, r, m - (m - f) / 3, r, m, r, v, r, y, w, y, b].join(",") + "z" : "M" + (i + u) + "," + r + " v" + p + " h" + -u + " v" + -p + " h" + u + "z") : "circle" === L || "ellipse" === L ? ("circle" === L ? d = (o = s = D.r) * E : (o = D.rx, d = (s = D.ry) * E), a = "M" + ((i = D.cx) + o) + "," + (r = D.cy) + " C" + [i + o, r + d, i + (c = o * E), r + s, i, r + s, i - c, r + s, i - o, r + d, i - o, r, i - o, r - d, i - c, r - s, i, r - s, i + c, r - s, i + o, r - d, i + o, r].join(",") + "z") : "line" === L ? a = "M" + D.x1 + "," + D.y1 + " L" + D.x2 + "," + D.y2 : "polyline" !== L && "polygon" !== L || (a = "M" + (i = (h = (t.getAttribute("points") + "").match(n) || []).shift()) + "," + (r = h.shift()) + " L" + h.join(","), "polygon" === L && (a += "," + i + "," + r + "z")), l.setAttribute("d", U(l._gsRawPath = j(a))), e && t.parentNode && (t.parentNode.insertBefore(l, t), t.parentNode.removeChild(t)), l) : t
    }

    function S(t, e) {
      var a = F(t, e >= 1 ? 1 - 1e-9 : e || 1e-9);
      return k(a.segment, a.i, a.t)
    }

    function k(t, e, a) {
      var i, r = t[e],
        n = t[e + 2],
        o = t[e + 4];
      return r += (n - r) * a, r += ((n += (o - n) * a) - r) * a, i = n + (o + (t[e + 6] - o) * a - n) * a - r, r = t[e + 1], r += ((n = t[e + 3]) - r) * a, r += ((n += ((o = t[e + 5]) - n) * a) - r) * a, b(g(n + (o + (t[e + 7] - o) * a - n) * a - r, i) * c)
    }

    function P(t, e, a) {
      a = void 0 === a ? 1 : x(a) || 0, e = x(e) || 0;
      var i = Math.max(0, ~~(u(a - e) - 1e-8)),
        r = A(t);
      if (e > a && (e = 1 - e, a = 1 - a, function (t, e) {
          var a = t.length;
          for (e || t.reverse(); a--;) t[a].reversed || T(t[a])
        }(r), r.totalLength = 0), e < 0 || a < 0) {
        var n = Math.abs(~~Math.min(e, a)) + 1;
        e += n, a += n
      }
      r.totalLength || H(r);
      var o, s, l, c, d, h, p, g, f = a > 1,
        m = F(r, e, v, !0),
        w = F(r, a, y),
        b = w.segment,
        z = m.segment,
        D = w.segIndex,
        E = m.segIndex,
        C = w.i,
        _ = m.i,
        S = E === D,
        P = C === _ && S;
      if (f || i) {
        for (o = D < E || S && C < _ || P && w.t < m.t, M(r, E, _, m.t) && (E++, o || (D++, P ? (w.t = (w.t - m.t) / (1 - m.t), C = 0) : S && (C -= _))), 1 - (a - e) < 1e-5 ? D = E - 1 : !w.t && D ? D-- : M(r, D, C, w.t) && o && E++, 1 === m.t && (E = (E + 1) % r.length), d = [], p = 1 + (h = r.length) * i, g = E, p += (h - E + D) % h, c = 0; c < p; c++) L(d, r[g++ % h]);
        r = d
      } else if (l = 1 === w.t ? 6 : V(b, C, w.t), e !== a)
        for (s = V(z, _, P ? m.t / w.t : m.t), S && (l += s), b.splice(C + l + 2), (s || _) && z.splice(0, _ + s), c = r.length; c--;)(c < E || c > D) && r.splice(c, 1);
      else b.angle = k(b, C + l, 0), m = b[C += l], w = b[C + 1], b.length = b.totalLength = 0, b.totalPoints = r.totalPoints = 8, b.push(m, w, m, w, m, w, m, w);
      return r.totalLength = 0, r
    }

    function O(t, e, a) {
      e = e || 0, t.samples || (t.samples = [], t.lookup = []);
      var i, r, n, o, s, l, c, d, h, g, f, m, v, y, w, b, x, M = ~~t.resolution || 12,
        z = 1 / M,
        D = a ? e + 6 * a + 1 : t.length,
        L = t[e],
        E = t[e + 1],
        A = e ? e / 6 * M : 0,
        T = t.samples,
        C = t.lookup,
        _ = (e ? t.minLength : 1e8) || 1e8,
        S = T[A + a * M - 1],
        k = e ? T[A - 1] : 0;
      for (T.length = C.length = 0, r = e + 2; r < D; r += 6) {
        if (n = t[r + 4] - L, o = t[r + 2] - L, s = t[r] - L, d = t[r + 5] - E, h = t[r + 3] - E, g = t[r + 1] - E, l = c = f = m = 0, u(n) < .01 && u(d) < .01 && u(s) + u(g) < .01) t.length > 8 && (t.splice(r, 6), r -= 6, D -= 6);
        else
          for (i = 1; i <= M; i++) l = c - (c = ((y = z * i) * y * n + 3 * (v = 1 - y) * (y * o + v * s)) * y), f = m - (m = (y * y * d + 3 * v * (y * h + v * g)) * y), (b = p(f * f + l * l)) < _ && (_ = b), k += b, T[A++] = k;
        L += n, E += d
      }
      if (S)
        for (S -= k; A < T.length; A++) T[A] += S;
      if (T.length && _) {
        if (t.totalLength = x = T[T.length - 1] || 0, t.minLength = _, x / _ < 9999)
          for (b = w = 0, i = 0; i < x; i += _) C[b++] = T[w] < i ? ++w : w
      } else t.totalLength = T[0] = 0;
      return e ? k - T[e / 2 - 1] : k
    }

    function H(t, e) {
      var a, i, r;
      for (r = a = i = 0; r < t.length; r++) t[r].resolution = ~~e || 12, i += t[r].length, a += O(t[r]);
      return t.totalPoints = i, t.totalLength = a, t
    }

    function V(t, e, a) {
      if (a <= 0 || a >= 1) return 0;
      var i = t[e],
        r = t[e + 1],
        n = t[e + 2],
        o = t[e + 3],
        s = t[e + 4],
        l = t[e + 5],
        c = i + (n - i) * a,
        d = n + (s - n) * a,
        h = r + (o - r) * a,
        u = o + (l - o) * a,
        p = c + (d - c) * a,
        g = h + (u - h) * a,
        f = s + (t[e + 6] - s) * a,
        m = l + (t[e + 7] - l) * a;
      return d += (f - d) * a, u += (m - u) * a, t.splice(e + 2, 4, b(c), b(h), b(p), b(g), b(p + (d - p) * a), b(g + (u - g) * a), b(d), b(u), b(f), b(m)), t.samples && t.samples.splice(e / 6 * t.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6
    }

    function F(t, e, a, i) {
      a = a || {}, t.totalLength || H(t), (e < 0 || e > 1) && (e = w(e));
      var r, n, o, s, l, c, d, h = 0,
        u = t[0];
      if (e)
        if (1 === e) d = 1, c = (u = t[h = t.length - 1]).length - 8;
        else {
          if (t.length > 1) {
            for (o = t.totalLength * e, l = c = 0;
              (l += t[c++].totalLength) < o;) h = c;
            e = (o - (s = l - (u = t[h]).totalLength)) / (l - s) || 0
          }
          r = u.samples, n = u.resolution, o = u.totalLength * e, s = (c = u.lookup.length ? u.lookup[~~(o / u.minLength)] || 0 : z(r, o, e)) ? r[c - 1] : 0, (l = r[c]) < o && (s = l, l = r[++c]), d = 1 / n * ((o - s) / (l - s) + c % n), c = 6 * ~~(c / n), i && 1 === d && (c + 6 < u.length ? (c += 6, d = 0) : h + 1 < t.length && (c = d = 0, u = t[++h]))
        }
      else d = c = h = 0, u = t[0];
      return a.t = d, a.i = c, a.path = t, a.segment = u, a.segIndex = h, a
    }

    function B(t, e, a, i) {
      var r, n, o, s, l, c, d, h, u, p = t[0],
        g = i || {};
      if ((e < 0 || e > 1) && (e = w(e)), t.length > 1) {
        for (o = t.totalLength * e, l = c = 0;
          (l += t[c++].totalLength) < o;) p = t[c];
        e = (o - (s = l - p.totalLength)) / (l - s) || 0
      }
      return r = p.samples, n = p.resolution, o = p.totalLength * e, s = (c = p.lookup.length ? p.lookup[e < 1 ? ~~(o / p.minLength) : p.lookup.length - 1] || 0 : z(r, o, e)) ? r[c - 1] : 0, (l = r[c]) < o && (s = l, l = r[++c]), u = 1 - (d = 1 / n * ((o - s) / (l - s) + c % n) || 0), h = p[c = 6 * ~~(c / n)], g.x = b((d * d * (p[c + 6] - h) + 3 * u * (d * (p[c + 4] - h) + u * (p[c + 2] - h))) * d + h), g.y = b((d * d * (p[c + 7] - (h = p[c + 1])) + 3 * u * (d * (p[c + 5] - h) + u * (p[c + 3] - h))) * d + h), a && (g.angle = p.totalLength ? k(p, c, d >= 1 ? 1 - 1e-9 : d || 1e-9) : p.angle || 0), g
    }

    function I(t, e, a, i, r, n, o) {
      for (var s, l, c, d, h, u = t.length; --u > -1;)
        for (l = (s = t[u]).length, c = 0; c < l; c += 2) d = s[c], h = s[c + 1], s[c] = d * e + h * i + n, s[c + 1] = d * a + h * r + o;
      return t._dirty = 1, t
    }

    function $(t, e, a, i, r, n, o, s, c) {
      if (t !== s || e !== c) {
        a = u(a), i = u(i);
        var g = r % 360 * l,
          f = h(g),
          m = d(g),
          v = Math.PI,
          y = 2 * v,
          w = (t - s) / 2,
          b = (e - c) / 2,
          x = f * w + m * b,
          M = -m * w + f * b,
          z = x * x,
          D = M * M,
          L = z / (a * a) + D / (i * i);
        L > 1 && (a = p(L) * a, i = p(L) * i);
        var E = a * a,
          A = i * i,
          T = (E * A - E * D - A * z) / (E * D + A * z);
        T < 0 && (T = 0);
        var C = (n === o ? -1 : 1) * p(T),
          _ = C * (a * M / i),
          S = C * (-i * x / a),
          k = (t + s) / 2 + (f * _ - m * S),
          P = (e + c) / 2 + (m * _ + f * S),
          O = (x - _) / a,
          H = (M - S) / i,
          V = (-x - _) / a,
          F = (-M - S) / i,
          B = O * O + H * H,
          I = (H < 0 ? -1 : 1) * Math.acos(O / p(B)),
          $ = (O * F - H * V < 0 ? -1 : 1) * Math.acos((O * V + H * F) / p(B * (V * V + F * F)));
        isNaN($) && ($ = v), !o && $ > 0 ? $ -= y : o && $ < 0 && ($ += y), I %= y, $ %= y;
        var j, R = Math.ceil(u($) / (y / 4)),
          N = [],
          Y = $ / R,
          X = 4 / 3 * d(Y / 2) / (1 + h(Y / 2)),
          q = f * a,
          W = m * a,
          G = m * -i,
          U = f * i;
        for (j = 0; j < R; j++) x = h(r = I + j * Y), M = d(r), O = h(r += Y), H = d(r), N.push(x - X * M, M + X * x, O + X * H, H - X * O, O, H);
        for (j = 0; j < N.length; j += 2) x = N[j], M = N[j + 1], N[j] = x * q + M * G + k, N[j + 1] = x * W + M * U + P;
        return N[j - 2] = s, N[j - 1] = c, N
      }
    }

    function j(t) {
      var e, a, i, n, s, l, c, d, h, p, g, f, m, v, y, w = (t + "").replace(o, (function (t) {
          var e = +t;
          return e < 1e-4 && e > -1e-4 ? 0 : e
        })).match(r) || [],
        b = [],
        x = 0,
        M = 0,
        z = w.length,
        D = 0,
        L = "ERROR: malformed path: " + t,
        E = function (t, e, a, i) {
          p = (a - t) / 3, g = (i - e) / 3, c.push(t + p, e + g, a - p, i - g, a, i)
        };
      if (!t || !isNaN(w[0]) || isNaN(w[1])) return console.log(L), b;
      for (e = 0; e < z; e++)
        if (m = s, isNaN(w[e]) ? l = (s = w[e].toUpperCase()) !== w[e] : e--, i = +w[e + 1], n = +w[e + 2], l && (i += x, n += M), e || (d = i, h = n), "M" === s) c && (c.length < 8 ? b.length -= 1 : D += c.length), x = d = i, M = h = n, c = [i, n], b.push(c), e += 2, s = "L";
        else if ("C" === s) c || (c = [0, 0]), l || (x = M = 0), c.push(i, n, x + 1 * w[e + 3], M + 1 * w[e + 4], x += 1 * w[e + 5], M += 1 * w[e + 6]), e += 6;
      else if ("S" === s) p = x, g = M, "C" !== m && "S" !== m || (p += x - c[c.length - 4], g += M - c[c.length - 3]), l || (x = M = 0), c.push(p, g, i, n, x += 1 * w[e + 3], M += 1 * w[e + 4]), e += 4;
      else if ("Q" === s) p = x + 2 / 3 * (i - x), g = M + 2 / 3 * (n - M), l || (x = M = 0), x += 1 * w[e + 3], M += 1 * w[e + 4], c.push(p, g, x + 2 / 3 * (i - x), M + 2 / 3 * (n - M), x, M), e += 4;
      else if ("T" === s) p = x - c[c.length - 4], g = M - c[c.length - 3], c.push(x + p, M + g, i + 2 / 3 * (x + 1.5 * p - i), n + 2 / 3 * (M + 1.5 * g - n), x = i, M = n), e += 2;
      else if ("H" === s) E(x, M, x = i, M), e += 1;
      else if ("V" === s) E(x, M, x, M = i + (l ? M - x : 0)), e += 1;
      else if ("L" === s || "Z" === s) "Z" === s && (i = d, n = h, c.closed = !0), ("L" === s || u(x - i) > .5 || u(M - n) > .5) && (E(x, M, i, n), "L" === s && (e += 2)), x = i, M = n;
      else if ("A" === s) {
        if (v = w[e + 4], y = w[e + 5], p = w[e + 6], g = w[e + 7], a = 7, v.length > 1 && (v.length < 3 ? (g = p, p = y, a--) : (g = y, p = v.substr(2), a -= 2), y = v.charAt(1), v = v.charAt(0)), f = $(x, M, +w[e + 1], +w[e + 2], +w[e + 3], +v, +y, (l ? x : 0) + 1 * p, (l ? M : 0) + 1 * g), e += a, f)
          for (a = 0; a < f.length; a++) c.push(f[a]);
        x = c[c.length - 2], M = c[c.length - 1]
      } else console.log(L);
      return (e = c.length) < 6 ? (b.pop(), e = 0) : c[0] === c[e - 2] && c[1] === c[e - 1] && (c.closed = !0), b.totalPoints = D + e, b
    }

    function R(t, e, a, i, r, n, o, s, l, c, d) {
      var h, p = (t + a) / 2,
        g = (e + i) / 2,
        f = (a + r) / 2,
        m = (i + n) / 2,
        v = (r + o) / 2,
        y = (n + s) / 2,
        w = (p + f) / 2,
        b = (g + m) / 2,
        x = (f + v) / 2,
        M = (m + y) / 2,
        z = (w + x) / 2,
        D = (b + M) / 2,
        L = o - t,
        E = s - e,
        A = u((a - o) * E - (i - s) * L),
        T = u((r - o) * E - (n - s) * L);
      return c || (c = [t, e, o, s], d = 2), c.splice(d || c.length - 2, 0, z, D), (A + T) * (A + T) > l * (L * L + E * E) && (h = c.length, R(t, e, p, g, w, b, z, D, l, c, d), R(z, D, x, M, v, y, o, s, l, c, d + 2 + (c.length - h))), c
    }

    function N(t, e) {
      void 0 === e && (e = 1);
      for (var a = t[0], i = 0, r = [a, i], n = 2; n < t.length; n += 2) r.push(a, i, t[n], i = (t[n] - a) * e / 2, a = t[n], -i);
      return r
    }

    function Y(t, e, a) {
      u(t[0] - t[2]) < 1e-4 && u(t[1] - t[3]) < 1e-4 && (t = t.slice(2));
      var i, r, n, o, s, l, c, f, m, v, y, w, x, M, z = t.length - 2,
        D = +t[0],
        L = +t[1],
        E = +t[2],
        A = +t[3],
        T = [D, L, D, L],
        C = E - D,
        _ = A - L,
        S = Math.abs(t[z] - D) < .001 && Math.abs(t[z + 1] - L) < .001;
      for (isNaN(a) && (a = Math.PI / 10), S && (t.push(E, A), E = D, A = L, D = t[z - 2], L = t[z - 1], t.unshift(D, L), z += 4), e = e || 0 === e ? +e : 1, s = 2; s < z; s += 2) i = D, r = L, D = E, L = A, E = +t[s + 2], A = +t[s + 3], D === E && L === A || (w = (l = C) * l + (f = _) * f, x = (C = E - D) * C + (_ = A - L) * _, M = (c = E - i) * c + (m = A - r) * m, y = (n = Math.acos((w + x - M) / p(4 * w * x))) / Math.PI * e, v = p(w) * y, y *= p(x), D === i && L === r || (n > a ? (o = g(m, c), T.push(b(D - h(o) * v), b(L - d(o) * v), b(D), b(L), b(D + h(o) * y), b(L + d(o) * y))) : (o = g(f, l), T.push(b(D - h(o) * v), b(L - d(o) * v)), o = g(_, C), T.push(b(D), b(L), b(D + h(o) * y), b(L + d(o) * y)))));
      return D !== E || L !== A || T.length < 4 ? T.push(b(E), b(A), b(E), b(A)) : T.length -= 2, S && (T.splice(0, 6), T.length = T.length - 6), T
    }

    function X(t, e) {
      var a, i, r, n, o, s, l, c = parseFloat(t[0]),
        d = parseFloat(t[1]),
        h = [c, d],
        u = t.length - 2;
      for (e = Math.pow(e || 1, 2), a = 2; a < u; a += 2)(n = c - (i = parseFloat(t[a]))) * n + (o = d - (r = parseFloat(t[a + 1]))) * o > e && (h.push(i, r), c = i, d = r);
      return h.push(parseFloat(t[u]), parseFloat(t[u + 1])),
        function t(e, a, i, r, n) {
          var o, s, l, c, d, h, u, p, g, f, m, v, y = r,
            w = e[a],
            b = e[a + 1],
            x = e[i],
            M = e[i + 1];
          for (s = a + 2; s < i; s += 2) c = e[s], d = e[s + 1], f = void 0, m = void 0, v = void 0, v = (g = M) - (u = b), ((m = (p = x) - (h = w)) || v) && ((f = ((c - h) * m + (d - u) * v) / (m * m + v * v)) > 1 ? (h = p, u = g) : f > 0 && (h += m * f, u += v * f)), (l = Math.pow(c - h, 2) + Math.pow(d - u, 2)) > y && (o = s, y = l);
          y > r && (o - a > 2 && t(e, a, o, r, n), n.push(e[o], e[o + 1]), i - o > 2 && t(e, o, i, r, n))
        }(h, 0, l = h.length - 2, e, s = [h[0], h[1]]), s.push(h[l], h[l + 1]), s
    }

    function q(t, e, a, r, n, o, s, l, c, d, h, u, p, g) {
      var f, m, v, y, w = (n - r) / o,
        b = 0,
        x = r;
      for (i = 1e8; x <= n;)(f = (m = (y = 1 - x) * y * y * s + 3 * y * y * x * c + 3 * y * x * x * h + x * x * x * p - e) * m + (v = y * y * y * l + 3 * y * y * x * d + 3 * y * x * x * u + x * x * x * g - a) * v) < i && (i = f, b = x), x += w;
      return t > 1 ? q(t - 1, e, a, Math.max(b - w, 0), Math.min(b + w, 1), o, s, l, c, d, h, u, p, g) : b
    }

    function W(t, e, a, r) {
      var n, o, s, l, c = {
          j: 0,
          i: 0,
          t: 0
        },
        d = 1e8;
      for (o = 0; o < t.length; o++)
        for (l = t[o], n = 0; n < l.length; n += 6) s = q(1, e, a, 0, 1, r || 20, l[n], l[n + 1], l[n + 2], l[n + 3], l[n + 4], l[n + 5], l[n + 6], l[n + 7]), d > i && (d = i, c.j = o, c.i = n, c.t = s);
      return c
    }

    function G(t, e, a, r, n) {
      var o, s, l = a.length,
        c = 1e8,
        d = 0,
        h = 0;
      for (r = r || 20, n = n || 3, s = 0; s < l; s += 6) o = q(1, t, e, 0, 1, r, a[s], a[s + 1], a[s + 2], a[s + 3], a[s + 4], a[s + 5], a[s + 6], a[s + 7]), c > i && (c = i, d = o, h = s);
      return V(a, h, o = q(n, t, e, d - .05, d + .05, r, a[h], a[h + 1], a[h + 2], a[h + 3], a[h + 4], a[h + 5], a[h + 6], a[h + 7])), h + 6
    }

    function U(t) {
      m(t[0]) && (t = [t]);
      var e, a, i, r, n = "",
        o = t.length;
      for (a = 0; a < o; a++) {
        for (r = t[a], n += "M" + b(r[0]) + "," + b(r[1]) + " C", e = r.length, i = 2; i < e; i++) n += b(r[i++]) + "," + b(r[i++]) + " " + b(r[i++]) + "," + b(r[i++]) + " " + b(r[i++]) + "," + b(r[i]) + " ";
        r.closed && (n += "z")
      }
      return n
    }
  }, function (t, e) {
    t.exports = function (t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }, t.exports.default = t.exports, t.exports.__esModule = !0
  }, function (t, e) {
    t.exports = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }, t.exports.default = t.exports, t.exports.__esModule = !0
  }, function (t, e) {
    function a(t, e) {
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }
    t.exports = function (t, e, i) {
      return e && a(t.prototype, e), i && a(t, i), t
    }, t.exports.default = t.exports, t.exports.__esModule = !0
  }, function (t, e, a) {
    "use strict";
    a.d(e, "a", (function () {
      return x
    })), a.d(e, "b", (function () {
      return M
    }));
    /*!
     * matrix 3.7.1
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var i, r, n, o, s, l, c, d, h, u = "transform",
      p = u + "Origin",
      g = function (t) {
        var e = t.ownerDocument || t;
        !(u in t.style) && "msTransform" in t.style && (p = (u = "msTransform") + "Origin");
        for (; e.parentNode && (e = e.parentNode););
        if (r = window, c = new x, e) {
          i = e, n = e.documentElement, o = e.body, (d = i.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
          var a = e.createElement("div"),
            s = e.createElement("div");
          o.appendChild(a), a.appendChild(s), a.style.position = "static", a.style[u] = "translate3d(0,0,1px)", h = s.offsetParent !== a, o.removeChild(a)
        }
        return e
      },
      f = [],
      m = [],
      v = function (t) {
        return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
      },
      y = function t(e, a) {
        if (e.parentNode && (i || g(e))) {
          var r = v(e),
            n = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
            o = r ? a ? "rect" : "g" : "div",
            c = 2 !== a ? 0 : 100,
            d = 3 === a ? 100 : 0,
            h = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
            u = i.createElementNS ? i.createElementNS(n.replace(/^https/, "http"), o) : i.createElement(o);
          return a && (r ? (l || (l = t(e)), u.setAttribute("width", .01), u.setAttribute("height", .01), u.setAttribute("transform", "translate(" + c + "," + d + ")"), l.appendChild(u)) : (s || ((s = t(e)).style.cssText = h), u.style.cssText = h + "width:0.1px;height:0.1px;top:" + d + "px;left:" + c + "px", s.appendChild(u))), u
        }
        throw "Need document and parent."
      },
      w = function (t, e) {
        var a, i, n, o, g, w, b = v(t),
          M = t === b,
          z = b ? f : m,
          D = t.parentNode;
        if (t === r) return t;
        if (z.length || z.push(y(t, 1), y(t, 2), y(t, 3)), a = b ? l : s, b) M ? (o = -(n = function (t) {
          var e, a = t.getCTM();
          return a || (e = t.style[u], t.style[u] = "none", t.appendChild(d), a = d.getCTM(), t.removeChild(d), e ? t.style[u] = e : t.style.removeProperty(u.replace(/([A-Z])/g, "-$1").toLowerCase())), a
        }(t)).e / n.a, g = -n.f / n.d, i = c) : (n = t.getBBox(), o = (i = (i = t.transform ? t.transform.baseVal : {}).numberOfItems ? i.numberOfItems > 1 ? function (t) {
          for (var e = new x, a = 0; a < t.numberOfItems; a++) e.multiply(t.getItem(a).matrix);
          return e
        }(i) : i.getItem(0).matrix : c).a * n.x + i.c * n.y, g = i.b * n.x + i.d * n.y), e && "g" === t.tagName.toLowerCase() && (o = g = 0), (M ? b : D).appendChild(a), a.setAttribute("transform", "matrix(" + i.a + "," + i.b + "," + i.c + "," + i.d + "," + (i.e + o) + "," + (i.f + g) + ")");
        else {
          if (o = g = 0, h)
            for (i = t.offsetParent, n = t; n && (n = n.parentNode) && n !== i && n.parentNode;)(r.getComputedStyle(n)[u] + "").length > 4 && (o = n.offsetLeft, g = n.offsetTop, n = 0);
          if ("absolute" !== (w = r.getComputedStyle(t)).position && "fixed" !== w.position)
            for (i = t.offsetParent; D && D !== i;) o += D.scrollLeft || 0, g += D.scrollTop || 0, D = D.parentNode;
          (n = a.style).top = t.offsetTop - g + "px", n.left = t.offsetLeft - o + "px", n[u] = w[u], n[p] = w[p], n.position = "fixed" === w.position ? "fixed" : "absolute", t.parentNode.appendChild(a)
        }
        return a
      },
      b = function (t, e, a, i, r, n, o) {
        return t.a = e, t.b = a, t.c = i, t.d = r, t.e = n, t.f = o, t
      },
      x = function () {
        function t(t, e, a, i, r, n) {
          void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === a && (a = 0), void 0 === i && (i = 1), void 0 === r && (r = 0), void 0 === n && (n = 0), b(this, t, e, a, i, r, n)
        }
        var e = t.prototype;
        return e.inverse = function () {
          var t = this.a,
            e = this.b,
            a = this.c,
            i = this.d,
            r = this.e,
            n = this.f,
            o = t * i - e * a || 1e-10;
          return b(this, i / o, -e / o, -a / o, t / o, (a * n - i * r) / o, -(t * n - e * r) / o)
        }, e.multiply = function (t) {
          var e = this.a,
            a = this.b,
            i = this.c,
            r = this.d,
            n = this.e,
            o = this.f,
            s = t.a,
            l = t.c,
            c = t.b,
            d = t.d,
            h = t.e,
            u = t.f;
          return b(this, s * e + c * i, s * a + c * r, l * e + d * i, l * a + d * r, n + h * e + u * i, o + h * a + u * r)
        }, e.clone = function () {
          return new t(this.a, this.b, this.c, this.d, this.e, this.f)
        }, e.equals = function (t) {
          var e = this.a,
            a = this.b,
            i = this.c,
            r = this.d,
            n = this.e,
            o = this.f;
          return e === t.a && a === t.b && i === t.c && r === t.d && n === t.e && o === t.f
        }, e.apply = function (t, e) {
          void 0 === e && (e = {});
          var a = t.x,
            i = t.y,
            r = this.a,
            n = this.b,
            o = this.c,
            s = this.d,
            l = this.e,
            c = this.f;
          return e.x = a * r + i * o + l || 0, e.y = a * n + i * s + c || 0, e
        }, t
      }();

    function M(t, e, a, s) {
      if (!t || !t.parentNode || (i || g(t)).documentElement === t) return new x;
      var l = function (t) {
          for (var e, a; t && t !== o;)(a = t._gsap) && a.uncache && a.get(t, "x"), a && !a.scaleX && !a.scaleY && a.renderTransform && (a.scaleX = a.scaleY = 1e-4, a.renderTransform(1, a), e ? e.push(a) : e = [a]), t = t.parentNode;
          return e
        }(t),
        c = v(t) ? f : m,
        d = w(t, a),
        h = c[0].getBoundingClientRect(),
        u = c[1].getBoundingClientRect(),
        p = c[2].getBoundingClientRect(),
        y = d.parentNode,
        b = !s && function t(e) {
          return "fixed" === r.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
        }(t),
        M = new x((u.left - h.left) / 100, (u.top - h.top) / 100, (p.left - h.left) / 100, (p.top - h.top) / 100, h.left + (b ? 0 : r.pageXOffset || i.scrollLeft || n.scrollLeft || o.scrollLeft || 0), h.top + (b ? 0 : r.pageYOffset || i.scrollTop || n.scrollTop || o.scrollTop || 0));
      if (y.removeChild(d), l)
        for (h = l.length; h--;)(u = l[h]).scaleX = u.scaleY = 0, u.renderTransform(1, u);
      return e ? M.inverse() : M
    }
  }, function (t, e, a) {
    "use strict";
    a.r(e), a.d(e, "gsap", (function () {
      return n
    })), a.d(e, "default", (function () {
      return n
    })), a.d(e, "TweenMax", (function () {
      return o
    }));
    var i = a(0);
    a.d(e, "TweenLite", (function () {
      return i.w
    })), a.d(e, "TimelineMax", (function () {
      return i.v
    })), a.d(e, "TimelineLite", (function () {
      return i.u
    })), a.d(e, "Power0", (function () {
      return i.i
    })), a.d(e, "Power1", (function () {
      return i.j
    })), a.d(e, "Power2", (function () {
      return i.k
    })), a.d(e, "Power3", (function () {
      return i.l
    })), a.d(e, "Power4", (function () {
      return i.m
    })), a.d(e, "Linear", (function () {
      return i.h
    })), a.d(e, "Quad", (function () {
      return i.o
    })), a.d(e, "Cubic", (function () {
      return i.d
    })), a.d(e, "Quart", (function () {
      return i.p
    })), a.d(e, "Quint", (function () {
      return i.q
    })), a.d(e, "Strong", (function () {
      return i.t
    })), a.d(e, "Elastic", (function () {
      return i.e
    })), a.d(e, "Back", (function () {
      return i.a
    })), a.d(e, "SteppedEase", (function () {
      return i.s
    })), a.d(e, "Bounce", (function () {
      return i.b
    })), a.d(e, "Sine", (function () {
      return i.r
    })), a.d(e, "Expo", (function () {
      return i.f
    })), a.d(e, "Circ", (function () {
      return i.c
    }));
    var r = a(10);
    a.d(e, "CSSPlugin", (function () {
      return r.a
    }));
    var n = i.V.registerPlugin(r.a) || i.V,
      o = n.core.Tween
  }, function (t, e) {
    t.exports = function (t, e, a) {
      return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = a, t
    }, t.exports.default = t.exports, t.exports.__esModule = !0
  }, function (t, e, a) {
    "use strict";
    a.r(e), a.d(e, "default", (function () {
      return w
    }));
    var i = /iPhone/i,
      r = /iPod/i,
      n = /iPad/i,
      o = /\biOS-universal(?:.+)Mac\b/i,
      s = /\bAndroid(?:.+)Mobile\b/i,
      l = /Android/i,
      c = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
      d = /Silk/i,
      h = /Windows Phone/i,
      u = /\bWindows(?:.+)ARM\b/i,
      p = /BlackBerry/i,
      g = /BB10/i,
      f = /Opera Mini/i,
      m = /\b(CriOS|Chrome)(?:.+)Mobile/i,
      v = /Mobile(?:.+)Firefox\b/i,
      y = function (t) {
        return void 0 !== t && "MacIntel" === t.platform && "number" == typeof t.maxTouchPoints && t.maxTouchPoints > 1 && "undefined" == typeof MSStream
      };

    function w(t) {
      var e = {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
      };
      t || "undefined" == typeof navigator ? "string" == typeof t ? e.userAgent = t : t && t.userAgent && (e = {
        userAgent: t.userAgent,
        platform: t.platform,
        maxTouchPoints: t.maxTouchPoints || 0
      }) : e = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0
      };
      var a = e.userAgent,
        w = a.split("[FBAN");
      void 0 !== w[1] && (a = w[0]), void 0 !== (w = a.split("Twitter"))[1] && (a = w[0]);
      var b = function (t) {
          return function (e) {
            return e.test(t)
          }
        }(a),
        x = {
          apple: {
            phone: b(i) && !b(h),
            ipod: b(r),
            tablet: !b(i) && (b(n) || y(e)) && !b(h),
            universal: b(o),
            device: (b(i) || b(r) || b(n) || b(o) || y(e)) && !b(h)
          },
          amazon: {
            phone: b(c),
            tablet: !b(c) && b(d),
            device: b(c) || b(d)
          },
          android: {
            phone: !b(h) && b(c) || !b(h) && b(s),
            tablet: !b(h) && !b(c) && !b(s) && (b(d) || b(l)),
            device: !b(h) && (b(c) || b(d) || b(s) || b(l)) || b(/\bokhttp\b/i)
          },
          windows: {
            phone: b(h),
            tablet: b(u),
            device: b(h) || b(u)
          },
          other: {
            blackberry: b(p),
            blackberry10: b(g),
            opera: b(f),
            firefox: b(v),
            chrome: b(m),
            device: b(p) || b(g) || b(f) || b(v) || b(m)
          },
          any: !1,
          phone: !1,
          tablet: !1
        };
      return x.any = x.apple.device || x.android.device || x.windows.device || x.other.device, x.phone = x.apple.phone || x.android.phone || x.windows.phone, x.tablet = x.apple.tablet || x.android.tablet || x.windows.tablet, x
    }
  }, function (t, e, a) {
    var i = a(20),
      r = a(21),
      n = a(22),
      o = a(23);
    t.exports = function (t) {
      return i(t) || r(t) || n(t) || o()
    }, t.exports.default = t.exports, t.exports.__esModule = !0
  }, function (t, e, a) {
    "use strict";
    a.d(e, "a", (function () {
      return gt
    })), a.d(e, "b", (function () {
      return gt
    }));
    var i, r, n, o, s, l, c, d = a(0),
      h = {},
      u = 180 / Math.PI,
      p = Math.PI / 180,
      g = Math.atan2,
      f = /([A-Z])/g,
      m = /(?:left|right|width|margin|padding|x)/i,
      v = /[\s,\(]\S/,
      y = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
      },
      w = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
      },
      b = function (t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
      },
      x = function (t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
      },
      M = function (t, e) {
        var a = e.s + e.c * t;
        e.set(e.t, e.p, ~~(a + (a < 0 ? -.5 : .5)) + e.u, e)
      },
      z = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
      },
      D = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
      },
      L = function (t, e, a) {
        return t.style[e] = a
      },
      E = function (t, e, a) {
        return t.style.setProperty(e, a)
      },
      A = function (t, e, a) {
        return t._gsap[e] = a
      },
      T = function (t, e, a) {
        return t._gsap.scaleX = t._gsap.scaleY = a
      },
      C = function (t, e, a, i, r) {
        var n = t._gsap;
        n.scaleX = n.scaleY = a, n.renderTransform(r, n)
      },
      _ = function (t, e, a, i, r) {
        var n = t._gsap;
        n[e] = a, n.renderTransform(r, n)
      },
      S = "transform",
      k = S + "Origin",
      P = function (t, e) {
        var a = r.createElementNS ? r.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : r.createElement(t);
        return a.style ? a : r.createElement(t)
      },
      O = function t(e, a, i) {
        var r = getComputedStyle(e);
        return r[a] || r.getPropertyValue(a.replace(f, "-$1").toLowerCase()) || r.getPropertyValue(a) || !i && t(e, V(a) || a, 1) || ""
      },
      H = "O,Moz,ms,Ms,Webkit".split(","),
      V = function (t, e, a) {
        var i = (e || s).style,
          r = 5;
        if (t in i && !a) return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(H[r] + t in i););
        return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? H[r] : "") + t
      },
      F = function () {
        "undefined" != typeof window && window.document && (i = window, r = i.document, n = r.documentElement, s = P("div") || {
          style: {}
        }, P("div"), S = V(S), k = S + "Origin", s.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", c = !!V("perspective"), o = 1)
      },
      B = function t(e) {
        var a, i = P("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
          r = this.parentNode,
          o = this.nextSibling,
          s = this.style.cssText;
        if (n.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
          a = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
        } catch (t) {} else this._gsapBBox && (a = this._gsapBBox());
        return r && (o ? r.insertBefore(this, o) : r.appendChild(this)), n.removeChild(i), this.style.cssText = s, a
      },
      I = function (t, e) {
        for (var a = e.length; a--;)
          if (t.hasAttribute(e[a])) return t.getAttribute(e[a])
      },
      $ = function (t) {
        var e;
        try {
          e = t.getBBox()
        } catch (a) {
          e = B.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === B || (e = B.call(t, !0)), !e || e.width || e.x || e.y ? e : {
          x: +I(t, ["x", "cx", "x1"]) || 0,
          y: +I(t, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0
        }
      },
      j = function (t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !$(t))
      },
      R = function (t, e) {
        if (e) {
          var a = t.style;
          e in h && e !== k && (e = S), a.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), a.removeProperty(e.replace(f, "-$1").toLowerCase())) : a.removeAttribute(e)
        }
      },
      N = function (t, e, a, i, r, n) {
        var o = new d.n(t._pt, e, a, 0, 1, n ? D : z);
        return t._pt = o, o.b = i, o.e = r, t._props.push(a), o
      },
      Y = {
        deg: 1,
        rad: 1,
        turn: 1
      },
      X = function t(e, a, i, n) {
        var o, l, c, u, p = parseFloat(i) || 0,
          g = (i + "").trim().substr((p + "").length) || "px",
          f = s.style,
          v = m.test(a),
          y = "svg" === e.tagName.toLowerCase(),
          w = (y ? "client" : "offset") + (v ? "Width" : "Height"),
          b = "px" === n,
          x = "%" === n;
        return n === g || !p || Y[n] || Y[g] ? p : ("px" !== g && !b && (p = t(e, a, i, "px")), u = e.getCTM && j(e), !x && "%" !== g || !h[a] && !~a.indexOf("adius") ? (f[v ? "width" : "height"] = 100 + (b ? g : n), l = ~a.indexOf("adius") || "em" === n && e.appendChild && !y ? e : e.parentNode, u && (l = (e.ownerSVGElement || {}).parentNode), l && l !== r && l.appendChild || (l = r.body), (c = l._gsap) && x && c.width && v && c.time === d.Q.time ? Object(d.O)(p / c.width * 100) : ((x || "%" === g) && (f.position = O(e, "position")), l === e && (f.position = "static"), l.appendChild(s), o = s[w], l.removeChild(s), f.position = "absolute", v && x && ((c = Object(d.C)(l)).time = d.Q.time, c.width = l[w]), Object(d.O)(b ? o * p / 100 : o && p ? 100 / o * p : 0))) : (o = u ? e.getBBox()[v ? "width" : "height"] : e[w], Object(d.O)(x ? p / o * 100 : p / 100 * o)))
      },
      q = function (t, e, a, i) {
        var r;
        return o || F(), e in y && "transform" !== e && ~(e = y[e]).indexOf(",") && (e = e.split(",")[0]), h[e] && "transform" !== e ? (r = it(t, i), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : rt(O(t, k)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || i || ~(r + "").indexOf("calc(")) && (r = K[e] && K[e](t, e, a) || O(t, e) || Object(d.D)(t, e) || ("opacity" === e ? 1 : 0)), a && !~(r + "").trim().indexOf(" ") ? X(t, e, r, a) + a : r
      },
      W = function (t, e, a, i) {
        if (!a || "none" === a) {
          var r = V(e, t, 1),
            n = r && O(t, r, 1);
          n && n !== a ? (e = r, a = n) : "borderColor" === e && (a = O(t, "borderTopColor"))
        }
        var o, s, l, c, h, u, p, g, f, m, v, y, w = new d.n(this._pt, t.style, e, 0, 1, d.M),
          b = 0,
          x = 0;
        if (w.b = a, w.e = i, a += "", "auto" === (i += "") && (t.style[e] = i, i = O(t, e) || i, t.style[e] = a), o = [a, i], Object(d.z)(o), i = o[1], l = (a = o[0]).match(d.J) || [], (i.match(d.J) || []).length) {
          for (; s = d.J.exec(i);) p = s[0], f = i.substring(b, s.index), h ? h = (h + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (h = 1), p !== (u = l[x++] || "") && (c = parseFloat(u) || 0, v = u.substr((c + "").length), (y = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)), g = parseFloat(p), m = p.substr((g + "").length), b = d.J.lastIndex - m.length, m || (m = m || d.A.units[e] || v, b === i.length && (i += m, w.e += m)), v !== m && (c = X(t, e, u, m) || 0), w._pt = {
            _next: w._pt,
            p: f || 1 === x ? f : ",",
            s: c,
            c: y ? y * g : g - c,
            m: h && h < 4 || "zIndex" === e ? Math.round : 0
          });
          w.c = b < i.length ? i.substring(b, i.length) : ""
        } else w.r = "display" === e && "none" === i ? D : z;
        return d.L.test(i) && (w.e = 0), this._pt = w, w
      },
      G = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
      },
      U = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var a, i, r, n = e.t,
            o = n.style,
            s = e.u,
            l = n._gsap;
          if ("all" === s || !0 === s) o.cssText = "", i = 1;
          else
            for (r = (s = s.split(",")).length; --r > -1;) a = s[r], h[a] && (i = 1, a = "transformOrigin" === a ? k : S), R(n, a);
          i && (R(n, S), l && (l.svg && n.removeAttribute("transform"), it(n, 1), l.uncache = 1))
        }
      },
      K = {
        clearProps: function (t, e, a, i, r) {
          if ("isFromStart" !== r.data) {
            var n = t._pt = new d.n(t._pt, e, a, 0, 0, U);
            return n.u = i, n.pr = -10, n.tween = r, t._props.push(a), 1
          }
        }
      },
      Q = [1, 0, 0, 1, 0, 0],
      J = {},
      Z = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
      },
      tt = function (t) {
        var e = O(t, S);
        return Z(e) ? Q : e.substr(7).match(d.I).map(d.O)
      },
      et = function (t, e) {
        var a, i, r, o, s = t._gsap || Object(d.C)(t),
          l = t.style,
          c = tt(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (c = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? Q : c : (c !== Q || t.offsetParent || t === n || s.svg || (r = l.display, l.display = "block", (a = t.parentNode) && t.offsetParent || (o = 1, i = t.nextSibling, n.appendChild(t)), c = tt(t), r ? l.display = r : R(t, "display"), o && (i ? a.insertBefore(t, i) : a ? a.appendChild(t) : n.removeChild(t))), e && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c)
      },
      at = function (t, e, a, i, r, n) {
        var o, s, l, c = t._gsap,
          d = r || et(t, !0),
          h = c.xOrigin || 0,
          u = c.yOrigin || 0,
          p = c.xOffset || 0,
          g = c.yOffset || 0,
          f = d[0],
          m = d[1],
          v = d[2],
          y = d[3],
          w = d[4],
          b = d[5],
          x = e.split(" "),
          M = parseFloat(x[0]) || 0,
          z = parseFloat(x[1]) || 0;
        a ? d !== Q && (s = f * y - m * v) && (l = M * (-m / s) + z * (f / s) - (f * b - m * w) / s, M = M * (y / s) + z * (-v / s) + (v * b - y * w) / s, z = l) : (M = (o = $(t)).x + (~x[0].indexOf("%") ? M / 100 * o.width : M), z = o.y + (~(x[1] || x[0]).indexOf("%") ? z / 100 * o.height : z)), i || !1 !== i && c.smooth ? (w = M - h, b = z - u, c.xOffset = p + (w * f + b * v) - w, c.yOffset = g + (w * m + b * y) - b) : c.xOffset = c.yOffset = 0, c.xOrigin = M, c.yOrigin = z, c.smooth = !!i, c.origin = e, c.originIsAbsolute = !!a, t.style[k] = "0px 0px", n && (N(n, c, "xOrigin", h, M), N(n, c, "yOrigin", u, z), N(n, c, "xOffset", p, c.xOffset), N(n, c, "yOffset", g, c.yOffset)), t.setAttribute("data-svg-origin", M + " " + z)
      },
      it = function (t, e) {
        var a = t._gsap || new d.g(t);
        if ("x" in a && !e && !a.uncache) return a;
        var i, r, n, o, s, l, h, f, m, v, y, w, b, x, M, z, D, L, E, A, T, C, _, P, H, V, F, B, I, $, R, N, Y = t.style,
          X = a.scaleX < 0,
          q = O(t, k) || "0";
        return i = r = n = l = h = f = m = v = y = 0, o = s = 1, a.svg = !(!t.getCTM || !j(t)), x = et(t, a.svg), a.svg && (P = (!a.uncache || "0px 0px" === q) && !e && t.getAttribute("data-svg-origin"), at(t, P || q, !!P || a.originIsAbsolute, !1 !== a.smooth, x)), w = a.xOrigin || 0, b = a.yOrigin || 0, x !== Q && (L = x[0], E = x[1], A = x[2], T = x[3], i = C = x[4], r = _ = x[5], 6 === x.length ? (o = Math.sqrt(L * L + E * E), s = Math.sqrt(T * T + A * A), l = L || E ? g(E, L) * u : 0, (m = A || T ? g(A, T) * u + l : 0) && (s *= Math.abs(Math.cos(m * p))), a.svg && (i -= w - (w * L + b * A), r -= b - (w * E + b * T))) : (N = x[6], $ = x[7], F = x[8], B = x[9], I = x[10], R = x[11], i = x[12], r = x[13], n = x[14], h = (M = g(N, I)) * u, M && (P = C * (z = Math.cos(-M)) + F * (D = Math.sin(-M)), H = _ * z + B * D, V = N * z + I * D, F = C * -D + F * z, B = _ * -D + B * z, I = N * -D + I * z, R = $ * -D + R * z, C = P, _ = H, N = V), f = (M = g(-A, I)) * u, M && (z = Math.cos(-M), R = T * (D = Math.sin(-M)) + R * z, L = P = L * z - F * D, E = H = E * z - B * D, A = V = A * z - I * D), l = (M = g(E, L)) * u, M && (P = L * (z = Math.cos(M)) + E * (D = Math.sin(M)), H = C * z + _ * D, E = E * z - L * D, _ = _ * z - C * D, L = P, C = H), h && Math.abs(h) + Math.abs(l) > 359.9 && (h = l = 0, f = 180 - f), o = Object(d.O)(Math.sqrt(L * L + E * E + A * A)), s = Object(d.O)(Math.sqrt(_ * _ + N * N)), M = g(C, _), m = Math.abs(M) > 2e-4 ? M * u : 0, y = R ? 1 / (R < 0 ? -R : R) : 0), a.svg && (P = t.getAttribute("transform"), a.forceCSS = t.setAttribute("transform", "") || !Z(O(t, S)), P && t.setAttribute("transform", P))), Math.abs(m) > 90 && Math.abs(m) < 270 && (X ? (o *= -1, m += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (s *= -1, m += m <= 0 ? 180 : -180)), a.x = i - ((a.xPercent = i && (a.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * a.xPercent / 100 : 0) + "px", a.y = r - ((a.yPercent = r && (a.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * a.yPercent / 100 : 0) + "px", a.z = n + "px", a.scaleX = Object(d.O)(o), a.scaleY = Object(d.O)(s), a.rotation = Object(d.O)(l) + "deg", a.rotationX = Object(d.O)(h) + "deg", a.rotationY = Object(d.O)(f) + "deg", a.skewX = m + "deg", a.skewY = v + "deg", a.transformPerspective = y + "px", (a.zOrigin = parseFloat(q.split(" ")[2]) || 0) && (Y[k] = rt(q)), a.xOffset = a.yOffset = 0, a.force3D = d.A.force3D, a.renderTransform = a.svg ? lt : c ? st : ot, a.uncache = 0, a
      },
      rt = function (t) {
        return (t = t.split(" "))[0] + " " + t[1]
      },
      nt = function (t, e, a) {
        var i = Object(d.U)(e);
        return Object(d.O)(parseFloat(e) + parseFloat(X(t, "x", a + "px", i))) + i
      },
      ot = function (t, e) {
        e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, st(t, e)
      },
      st = function (t, e) {
        var a = e || this,
          i = a.xPercent,
          r = a.yPercent,
          n = a.x,
          o = a.y,
          s = a.z,
          l = a.rotation,
          c = a.rotationY,
          d = a.rotationX,
          h = a.skewX,
          u = a.skewY,
          g = a.scaleX,
          f = a.scaleY,
          m = a.transformPerspective,
          v = a.force3D,
          y = a.target,
          w = a.zOrigin,
          b = "",
          x = "auto" === v && t && 1 !== t || !0 === v;
        if (w && ("0deg" !== d || "0deg" !== c)) {
          var M, z = parseFloat(c) * p,
            D = Math.sin(z),
            L = Math.cos(z);
          z = parseFloat(d) * p, M = Math.cos(z), n = nt(y, n, D * M * -w), o = nt(y, o, -Math.sin(z) * -w), s = nt(y, s, L * M * -w + w)
        }
        "0px" !== m && (b += "perspective(" + m + ") "), (i || r) && (b += "translate(" + i + "%, " + r + "%) "), (x || "0px" !== n || "0px" !== o || "0px" !== s) && (b += "0px" !== s || x ? "translate3d(" + n + ", " + o + ", " + s + ") " : "translate(" + n + ", " + o + ") "), "0deg" !== l && (b += "rotate(" + l + ") "), "0deg" !== c && (b += "rotateY(" + c + ") "), "0deg" !== d && (b += "rotateX(" + d + ") "), "0deg" === h && "0deg" === u || (b += "skew(" + h + ", " + u + ") "), 1 === g && 1 === f || (b += "scale(" + g + ", " + f + ") "), y.style[S] = b || "translate(0, 0)"
      },
      lt = function (t, e) {
        var a, i, r, n, o, s = e || this,
          l = s.xPercent,
          c = s.yPercent,
          h = s.x,
          u = s.y,
          g = s.rotation,
          f = s.skewX,
          m = s.skewY,
          v = s.scaleX,
          y = s.scaleY,
          w = s.target,
          b = s.xOrigin,
          x = s.yOrigin,
          M = s.xOffset,
          z = s.yOffset,
          D = s.forceCSS,
          L = parseFloat(h),
          E = parseFloat(u);
        g = parseFloat(g), f = parseFloat(f), (m = parseFloat(m)) && (f += m = parseFloat(m), g += m), g || f ? (g *= p, f *= p, a = Math.cos(g) * v, i = Math.sin(g) * v, r = Math.sin(g - f) * -y, n = Math.cos(g - f) * y, f && (m *= p, o = Math.tan(f - m), r *= o = Math.sqrt(1 + o * o), n *= o, m && (o = Math.tan(m), a *= o = Math.sqrt(1 + o * o), i *= o)), a = Object(d.O)(a), i = Object(d.O)(i), r = Object(d.O)(r), n = Object(d.O)(n)) : (a = v, n = y, i = r = 0), (L && !~(h + "").indexOf("px") || E && !~(u + "").indexOf("px")) && (L = X(w, "x", h, "px"), E = X(w, "y", u, "px")), (b || x || M || z) && (L = Object(d.O)(L + b - (b * a + x * r) + M), E = Object(d.O)(E + x - (b * i + x * n) + z)), (l || c) && (o = w.getBBox(), L = Object(d.O)(L + l / 100 * o.width), E = Object(d.O)(E + c / 100 * o.height)), o = "matrix(" + a + "," + i + "," + r + "," + n + "," + L + "," + E + ")", w.setAttribute("transform", o), D && (w.style[S] = o)
      },
      ct = function (t, e, a, i, r, n) {
        var o, s, l = Object(d.F)(r),
          c = parseFloat(r) * (l && ~r.indexOf("rad") ? u : 1),
          h = n ? c * n : c - i,
          p = i + h + "deg";
        return l && ("short" === (o = r.split("_")[1]) && (h %= 360) !== h % 180 && (h += h < 0 ? 360 : -360), "cw" === o && h < 0 ? h = (h + 36e9) % 360 - 360 * ~~(h / 360) : "ccw" === o && h > 0 && (h = (h - 36e9) % 360 - 360 * ~~(h / 360))), t._pt = s = new d.n(t._pt, e, a, i, h, b), s.e = p, s.u = "deg", t._props.push(a), s
      },
      dt = function (t, e) {
        for (var a in e) t[a] = e[a];
        return t
      },
      ht = function (t, e, a) {
        var i, r, n, o, s, l, c, u = dt({}, a._gsap),
          p = a.style;
        for (r in u.svg ? (n = a.getAttribute("transform"), a.setAttribute("transform", ""), p[S] = e, i = it(a, 1), R(a, S), a.setAttribute("transform", n)) : (n = getComputedStyle(a)[S], p[S] = e, i = it(a, 1), p[S] = n), h)(n = u[r]) !== (o = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (s = Object(d.U)(n) !== (c = Object(d.U)(o)) ? X(a, r, n, c) : parseFloat(n), l = parseFloat(o), t._pt = new d.n(t._pt, i, r, s, l - s, w), t._pt.u = c || 0, t._props.push(r));
        dt(i, u)
      };
    /*!
     * CSSPlugin 3.7.1
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    Object(d.B)("padding,margin,Width,Radius", (function (t, e) {
      var a = "Top",
        i = "Right",
        r = "Bottom",
        n = "Left",
        o = (e < 3 ? [a, i, r, n] : [a + n, a + i, r + i, r + n]).map((function (a) {
          return e < 2 ? t + a : "border" + a + t
        }));
      K[e > 1 ? "border" + t : t] = function (t, e, a, i, r) {
        var n, s;
        if (arguments.length < 4) return n = o.map((function (e) {
          return q(t, e, a)
        })), 5 === (s = n.join(" ")).split(n[0]).length ? n[0] : s;
        n = (i + "").split(" "), s = {}, o.forEach((function (t, e) {
          return s[t] = n[e] = n[e] || n[(e - 1) / 2 | 0]
        })), t.init(e, s, r)
      }
    }));
    var ut, pt, gt = {
      name: "css",
      register: F,
      targetTest: function (t) {
        return t.style && t.nodeType
      },
      init: function (t, e, a, i, r) {
        var n, s, l, c, u, p, g, f, m, b, z, D, L, E, A, T, C, _, k, P = this._props,
          O = t.style,
          H = a.vars.startAt;
        for (g in o || F(), e)
          if ("autoRound" !== g && (s = e[g], !d.K[g] || !Object(d.x)(g, e, a, i, t, r)))
            if (u = typeof s, p = K[g], "function" === u && (u = typeof (s = s.call(a, i, t, r))), "string" === u && ~s.indexOf("random(") && (s = Object(d.N)(s)), p) p(this, t, g, s, a) && (A = 1);
            else if ("--" === g.substr(0, 2)) n = (getComputedStyle(t).getPropertyValue(g) + "").trim(), s += "", d.y.lastIndex = 0, d.y.test(n) || (f = Object(d.U)(n), m = Object(d.U)(s)), m ? f !== m && (n = X(t, g, n, m) + m) : f && (s += f), this.add(O, "setProperty", n, s, i, r, 0, 0, g), P.push(g);
        else if ("undefined" !== u) {
          if (H && g in H ? (n = "function" == typeof H[g] ? H[g].call(a, i, t, r) : H[g], g in d.A.units && !Object(d.U)(n) && (n += d.A.units[g]), "=" === (n + "").charAt(1) && (n = q(t, g))) : n = q(t, g), c = parseFloat(n), (b = "string" === u && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), l = parseFloat(s), g in y && ("autoAlpha" === g && (1 === c && "hidden" === q(t, "visibility") && l && (c = 0), N(this, O, "visibility", c ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)), "scale" !== g && "transform" !== g && ~(g = y[g]).indexOf(",") && (g = g.split(",")[0])), z = g in h)
            if (D || ((L = t._gsap).renderTransform && !e.parseTransform || it(t, e.parseTransform), E = !1 !== e.smoothOrigin && L.smooth, (D = this._pt = new d.n(this._pt, O, S, 0, 1, L.renderTransform, L, 0, -1)).dep = 1), "scale" === g) this._pt = new d.n(this._pt, L, "scaleY", L.scaleY, (b ? b * l : l - L.scaleY) || 0), P.push("scaleY", g), g += "X";
            else {
              if ("transformOrigin" === g) {
                C = void 0, _ = void 0, k = void 0, C = (T = s).split(" "), _ = C[0], k = C[1] || "50%", "top" !== _ && "bottom" !== _ && "left" !== k && "right" !== k || (T = _, _ = k, k = T), C[0] = G[_] || _, C[1] = G[k] || k, s = C.join(" "), L.svg ? at(t, s, 0, E, 0, this) : ((m = parseFloat(s.split(" ")[2]) || 0) !== L.zOrigin && N(this, L, "zOrigin", L.zOrigin, m), N(this, O, g, rt(n), rt(s)));
                continue
              }
              if ("svgOrigin" === g) {
                at(t, s, 1, E, 0, this);
                continue
              }
              if (g in J) {
                ct(this, L, g, c, s, b);
                continue
              }
              if ("smoothOrigin" === g) {
                N(this, L, "smooth", L.smooth, s);
                continue
              }
              if ("force3D" === g) {
                L[g] = s;
                continue
              }
              if ("transform" === g) {
                ht(this, s, t);
                continue
              }
            }
          else g in O || (g = V(g) || g);
          if (z || (l || 0 === l) && (c || 0 === c) && !v.test(s) && g in O) l || (l = 0), (f = (n + "").substr((c + "").length)) !== (m = Object(d.U)(s) || (g in d.A.units ? d.A.units[g] : f)) && (c = X(t, g, n, m)), this._pt = new d.n(this._pt, z ? L : O, g, c, b ? b * l : l - c, z || "px" !== m && "zIndex" !== g || !1 === e.autoRound ? w : M), this._pt.u = m || 0, f !== m && (this._pt.b = n, this._pt.r = x);
          else if (g in O) W.call(this, t, g, n, s);
          else {
            if (!(g in t)) {
              Object(d.H)(g, s);
              continue
            }
            this.add(t, g, n || t[g], s, i, r)
          }
          P.push(g)
        }
        A && Object(d.P)(this)
      },
      get: q,
      aliases: y,
      getSetter: function (t, e, a) {
        var i = y[e];
        return i && i.indexOf(",") < 0 && (e = i), e in h && e !== k && (t._gsap.x || q(t, "x")) ? a && l === a ? "scale" === e ? T : A : (l = a || {}) && ("scale" === e ? C : _) : t.style && !Object(d.G)(t.style[e]) ? L : ~e.indexOf("-") ? E : Object(d.E)(t, e)
      },
      core: {
        _removeProperty: R,
        _getMatrix: et
      }
    };
    d.V.utils.checkPrefix = V, ut = "rotation,rotationX,rotationY,skewX,skewY", pt = Object(d.B)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + ut + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
      h[t] = 1
    })), Object(d.B)(ut, (function (t) {
      d.A.units[t] = "deg", J[t] = 1
    })), y[pt[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + ut, Object(d.B)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
      var e = t.split(":");
      y[e[1]] = pt[e[0]]
    })), Object(d.B)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
      d.A.units[t] = "px"
    })), d.V.registerPlugin(gt)
  }, function (t, e, a) {
    ! function (e, a) {
      var i = function (t, e, a) {
        "use strict";
        var i, r;
        if (function () {
            var e, a = {
              lazyClass: "lazyload",
              loadedClass: "lazyloaded",
              loadingClass: "lazyloading",
              preloadClass: "lazypreload",
              errorClass: "lazyerror",
              autosizesClass: "lazyautosizes",
              fastLoadedClass: "ls-is-cached",
              iframeLoadMode: 0,
              srcAttr: "data-src",
              srcsetAttr: "data-srcset",
              sizesAttr: "data-sizes",
              minSize: 40,
              customMedia: {},
              init: !0,
              expFactor: 1.5,
              hFac: .8,
              loadMode: 2,
              loadHidden: !0,
              ricTimeout: 0,
              throttleDelay: 125
            };
            for (e in r = t.lazySizesConfig || t.lazysizesConfig || {}, a) e in r || (r[e] = a[e])
          }(), !e || !e.getElementsByClassName) return {
          init: function () {},
          cfg: r,
          noSupport: !0
        };
        var n = e.documentElement,
          o = t.HTMLPictureElement,
          s = t.addEventListener.bind(t),
          l = t.setTimeout,
          c = t.requestAnimationFrame || l,
          d = t.requestIdleCallback,
          h = /^picture$/i,
          u = ["load", "error", "lazyincluded", "_lazyloaded"],
          p = {},
          g = Array.prototype.forEach,
          f = function (t, e) {
            return p[e] || (p[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), p[e].test(t.getAttribute("class") || "") && p[e]
          },
          m = function (t, e) {
            f(t, e) || t.setAttribute("class", (t.getAttribute("class") || "").trim() + " " + e)
          },
          v = function (t, e) {
            var a;
            (a = f(t, e)) && t.setAttribute("class", (t.getAttribute("class") || "").replace(a, " "))
          },
          y = function (t, e, a) {
            var i = a ? "addEventListener" : "removeEventListener";
            a && y(t, e), u.forEach((function (a) {
              t[i](a, e)
            }))
          },
          w = function (t, a, r, n, o) {
            var s = e.createEvent("Event");
            return r || (r = {}), r.instance = i, s.initEvent(a, !n, !o), s.detail = r, t.dispatchEvent(s), s
          },
          b = function (e, a) {
            var i;
            !o && (i = t.picturefill || r.pf) ? (a && a.src && !e.getAttribute("srcset") && e.setAttribute("srcset", a.src), i({
              reevaluate: !0,
              elements: [e]
            })) : a && a.src && (e.src = a.src)
          },
          x = function (t, e) {
            return (getComputedStyle(t, null) || {})[e]
          },
          M = function (t, e, a) {
            for (a = a || t.offsetWidth; a < r.minSize && e && !t._lazysizesWidth;) a = e.offsetWidth, e = e.parentNode;
            return a
          },
          z = (pt = [], gt = [], ft = pt, mt = function () {
            var t = ft;
            for (ft = pt.length ? gt : pt, ht = !0, ut = !1; t.length;) t.shift()();
            ht = !1
          }, vt = function (t, a) {
            ht && !a ? t.apply(this, arguments) : (ft.push(t), ut || (ut = !0, (e.hidden ? l : c)(mt)))
          }, vt._lsFlush = mt, vt),
          D = function (t, e) {
            return e ? function () {
              z(t)
            } : function () {
              var e = this,
                a = arguments;
              z((function () {
                t.apply(e, a)
              }))
            }
          },
          L = function (t) {
            var e, i, r = function () {
                e = null, t()
              },
              n = function () {
                var t = a.now() - i;
                t < 99 ? l(n, 99 - t) : (d || r)(r)
              };
            return function () {
              i = a.now(), e || (e = l(n, 99))
            }
          },
          E = (X = /^img$/i, q = /^iframe$/i, W = "onscroll" in t && !/(gle|ing)bot/.test(navigator.userAgent), G = 0, U = 0, K = -1, Q = function (t) {
            U--, (!t || U < 0 || !t.target) && (U = 0)
          }, J = function (t) {
            return null == Y && (Y = "hidden" == x(e.body, "visibility")), Y || !("hidden" == x(t.parentNode, "visibility") && "hidden" == x(t, "visibility"))
          }, Z = function (t, a) {
            var i, r = t,
              o = J(t);
            for ($ -= a, N += a, j -= a, R += a; o && (r = r.offsetParent) && r != e.body && r != n;)(o = (x(r, "opacity") || 1) > 0) && "visible" != x(r, "overflow") && (i = r.getBoundingClientRect(), o = R > i.left && j < i.right && N > i.top - 1 && $ < i.bottom + 1);
            return o
          }, tt = function () {
            var t, a, o, s, l, c, d, h, u, p, g, f, m = i.elements;
            if ((V = r.loadMode) && U < 8 && (t = m.length)) {
              for (a = 0, K++; a < t; a++)
                if (m[a] && !m[a]._lazyRace)
                  if (!W || i.prematureUnveil && i.prematureUnveil(m[a])) st(m[a]);
                  else if ((h = m[a].getAttribute("data-expand")) && (c = 1 * h) || (c = G), p || (p = !r.expand || r.expand < 1 ? n.clientHeight > 500 && n.clientWidth > 500 ? 500 : 370 : r.expand, i._defEx = p, g = p * r.expFactor, f = r.hFac, Y = null, G < g && U < 1 && K > 2 && V > 2 && !e.hidden ? (G = g, K = 0) : G = V > 1 && K > 1 && U < 6 ? p : 0), u !== c && (B = innerWidth + c * f, I = innerHeight + c, d = -1 * c, u = c), o = m[a].getBoundingClientRect(), (N = o.bottom) >= d && ($ = o.top) <= I && (R = o.right) >= d * f && (j = o.left) <= B && (N || R || j || $) && (r.loadHidden || J(m[a])) && (O && U < 3 && !h && (V < 3 || K < 4) || Z(m[a], c))) {
                if (st(m[a]), l = !0, U > 9) break
              } else !l && O && !s && U < 4 && K < 4 && V > 2 && (P[0] || r.preloadAfterLoad) && (P[0] || !h && (N || R || j || $ || "auto" != m[a].getAttribute(r.sizesAttr))) && (s = P[0] || m[a]);
              s && !l && st(s)
            }
          }, et = function (t) {
            var e, i = 0,
              n = r.throttleDelay,
              o = r.ricTimeout,
              s = function () {
                e = !1, i = a.now(), t()
              },
              c = d && o > 49 ? function () {
                d(s, {
                  timeout: o
                }), o !== r.ricTimeout && (o = r.ricTimeout)
              } : D((function () {
                l(s)
              }), !0);
            return function (t) {
              var r;
              (t = !0 === t) && (o = 33), e || (e = !0, (r = n - (a.now() - i)) < 0 && (r = 0), t || r < 9 ? c() : l(c, r))
            }
          }(tt), at = function (t) {
            var e = t.target;
            e._lazyCache ? delete e._lazyCache : (Q(t), m(e, r.loadedClass), v(e, r.loadingClass), y(e, rt), w(e, "lazyloaded"))
          }, it = D(at), rt = function (t) {
            it({
              target: t.target
            })
          }, nt = function (t) {
            var e, a = t.getAttribute(r.srcsetAttr);
            (e = r.customMedia[t.getAttribute("data-media") || t.getAttribute("media")]) && t.setAttribute("media", e), a && t.setAttribute("srcset", a)
          }, ot = D((function (t, e, a, i, n) {
            var o, s, c, d, u, p;
            (u = w(t, "lazybeforeunveil", e)).defaultPrevented || (i && (a ? m(t, r.autosizesClass) : t.setAttribute("sizes", i)), s = t.getAttribute(r.srcsetAttr), o = t.getAttribute(r.srcAttr), n && (d = (c = t.parentNode) && h.test(c.nodeName || "")), p = e.firesLoad || "src" in t && (s || o || d), u = {
              target: t
            }, m(t, r.loadingClass), p && (clearTimeout(H), H = l(Q, 2500), y(t, rt, !0)), d && g.call(c.getElementsByTagName("source"), nt), s ? t.setAttribute("srcset", s) : o && !d && (q.test(t.nodeName) ? function (t, e) {
              var a = t.getAttribute("data-load-mode") || r.iframeLoadMode;
              0 == a ? t.contentWindow.location.replace(e) : 1 == a && (t.src = e)
            }(t, o) : t.src = o), n && (s || d) && b(t, {
              src: o
            })), t._lazyRace && delete t._lazyRace, v(t, r.lazyClass), z((function () {
              var e = t.complete && t.naturalWidth > 1;
              p && !e || (e && m(t, r.fastLoadedClass), at(u), t._lazyCache = !0, l((function () {
                "_lazyCache" in t && delete t._lazyCache
              }), 9)), "lazy" == t.loading && U--
            }), !0)
          })), st = function (t) {
            if (!t._lazyRace) {
              var e, a = X.test(t.nodeName),
                i = a && (t.getAttribute(r.sizesAttr) || t.getAttribute("sizes")),
                n = "auto" == i;
              (!n && O || !a || !t.getAttribute("src") && !t.srcset || t.complete || f(t, r.errorClass) || !f(t, r.lazyClass)) && (e = w(t, "lazyunveilread").detail, n && A.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, U++, ot(t, e, n, i, a))
            }
          }, lt = L((function () {
            r.loadMode = 3, et()
          })), ct = function () {
            3 == r.loadMode && (r.loadMode = 2), lt()
          }, dt = function () {
            O || (a.now() - F < 999 ? l(dt, 999) : (O = !0, r.loadMode = 3, et(), s("scroll", ct, !0)))
          }, {
            _: function () {
              F = a.now(), i.elements = e.getElementsByClassName(r.lazyClass), P = e.getElementsByClassName(r.lazyClass + " " + r.preloadClass), s("scroll", et, !0), s("resize", et, !0), s("pageshow", (function (t) {
                if (t.persisted) {
                  var a = e.querySelectorAll("." + r.loadingClass);
                  a.length && a.forEach && c((function () {
                    a.forEach((function (t) {
                      t.complete && st(t)
                    }))
                  }))
                }
              })), t.MutationObserver ? new MutationObserver(et).observe(n, {
                childList: !0,
                subtree: !0,
                attributes: !0
              }) : (n.addEventListener("DOMNodeInserted", et, !0), n.addEventListener("DOMAttrModified", et, !0), setInterval(et, 999)), s("hashchange", et, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function (t) {
                e.addEventListener(t, et, !0)
              })), /d$|^c/.test(e.readyState) ? dt() : (s("load", dt), e.addEventListener("DOMContentLoaded", et), l(dt, 2e4)), i.elements.length ? (tt(), z._lsFlush()) : et()
            },
            checkElems: et,
            unveil: st,
            _aLSL: ct
          }),
          A = (_ = D((function (t, e, a, i) {
            var r, n, o;
            if (t._lazysizesWidth = i, i += "px", t.setAttribute("sizes", i), h.test(e.nodeName || ""))
              for (n = 0, o = (r = e.getElementsByTagName("source")).length; n < o; n++) r[n].setAttribute("sizes", i);
            a.detail.dataAttr || b(t, a.detail)
          })), S = function (t, e, a) {
            var i, r = t.parentNode;
            r && (a = M(t, r, a), (i = w(t, "lazybeforesizes", {
              width: a,
              dataAttr: !!e
            })).defaultPrevented || (a = i.detail.width) && a !== t._lazysizesWidth && _(t, r, i, a))
          }, k = L((function () {
            var t, e = C.length;
            if (e)
              for (t = 0; t < e; t++) S(C[t])
          })), {
            _: function () {
              C = e.getElementsByClassName(r.autosizesClass), s("resize", k)
            },
            checkElems: k,
            updateElem: S
          }),
          T = function () {
            !T.i && e.getElementsByClassName && (T.i = !0, A._(), E._())
          };
        var C, _, S, k;
        var P, O, H, V, F, B, I, $, j, R, N, Y, X, q, W, G, U, K, Q, J, Z, tt, et, at, it, rt, nt, ot, st, lt, ct, dt;
        var ht, ut, pt, gt, ft, mt, vt;
        return l((function () {
          r.init && T()
        })), i = {
          cfg: r,
          autoSizer: A,
          loader: E,
          init: T,
          uP: b,
          aC: m,
          rC: v,
          hC: f,
          fire: w,
          gW: M,
          rAF: z
        }
      }(e, e.document, Date);
      e.lazySizes = i, t.exports && (t.exports = i)
    }("undefined" != typeof window ? window : {})
  }, function (t, e, a) {
    "use strict";
    a.r(e), a.d(e, "Draggable", (function () {
      return zt
    })), a.d(e, "default", (function () {
      return zt
    }));
    var i = a(5);
    /*!
     * Draggable 3.7.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var r, n, o, s, l, c, d, h, u, p, g, f, m, v, y, w, b, x, M, z, D, L = function () {
        return "undefined" != typeof window
      },
      E = function () {
        return r || L() && (r = window.gsap) && r.registerPlugin && r
      },
      A = function (t) {
        return "function" == typeof t
      },
      T = function (t) {
        return "object" == typeof t
      },
      C = function (t) {
        return void 0 === t
      },
      _ = function () {
        return !1
      },
      S = "transform",
      k = "transformOrigin",
      P = function (t) {
        return Math.round(1e4 * t) / 1e4
      },
      O = Array.isArray,
      H = function (t, e) {
        var a = o.createElementNS ? o.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : o.createElement(t);
        return a.style ? a : o.createElement(t)
      },
      V = 180 / Math.PI,
      F = 1e20,
      B = new i.a,
      I = Date.now || function () {
        return (new Date).getTime()
      },
      $ = [],
      j = {},
      R = 0,
      N = /^(?:a|input|textarea|button|select)$/i,
      Y = 0,
      X = {},
      q = {},
      W = function (t, e) {
        var a, i = {};
        for (a in t) i[a] = e ? t[a] * e : t[a];
        return i
      },
      G = function t(e, a) {
        for (var i, r = e.length; r--;) a ? e[r].style.touchAction = a : e[r].style.removeProperty("touch-action"), (i = e[r].children) && i.length && t(i, a)
      },
      U = function () {
        return $.forEach((function (t) {
          return t()
        }))
      },
      K = function () {
        return !$.length && r.ticker.remove(U)
      },
      Q = function (t) {
        for (var e = $.length; e--;) $[e] === t && $.splice(e, 1);
        r.to(K, {
          overwrite: !0,
          delay: 15,
          duration: 0,
          onComplete: K,
          data: "_draggable"
        })
      },
      J = function (t, e, a, i) {
        if (t.addEventListener) {
          var r = m[e];
          i = i || (g ? {
            passive: !1
          } : null), t.addEventListener(r || e, a, i), r && e !== r && t.addEventListener(e, a, i)
        }
      },
      Z = function (t, e, a) {
        if (t.removeEventListener) {
          var i = m[e];
          t.removeEventListener(i || e, a), i && e !== i && t.removeEventListener(e, a)
        }
      },
      tt = function (t) {
        t.preventDefault && t.preventDefault(), t.preventManipulation && t.preventManipulation()
      },
      et = function t(e) {
        y = e.touches && v < e.touches.length, Z(e.target, "touchend", t)
      },
      at = function (t) {
        y = t.touches && v < t.touches.length, J(t.target, "touchend", et)
      },
      it = function (t) {
        return n.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0
      },
      rt = function (t) {
        return n.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0
      },
      nt = function t(e, a) {
        J(e, "scroll", a), st(e.parentNode) || t(e.parentNode, a)
      },
      ot = function t(e, a) {
        Z(e, "scroll", a), st(e.parentNode) || t(e.parentNode, a)
      },
      st = function (t) {
        return !(t && t !== s && 9 !== t.nodeType && t !== o.body && t !== n && t.nodeType && t.parentNode)
      },
      lt = function (t, e) {
        var a = "x" === e ? "Width" : "Height",
          i = "scroll" + a,
          r = "client" + a;
        return Math.max(0, st(t) ? Math.max(s[i], l[i]) - (n["inner" + a] || s[r] || l[r]) : t[i] - t[r])
      },
      ct = function t(e, a) {
        var i = lt(e, "x"),
          r = lt(e, "y");
        st(e) ? e = q : t(e.parentNode, a), e._gsMaxScrollX = i, e._gsMaxScrollY = r, a || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0)
      },
      dt = function (t, e, a) {
        var i = t.style;
        i && (C(i[e]) && (e = u(e, t) || e), null == a ? i.removeProperty && i.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : i[e] = a)
      },
      ht = function (t) {
        return n.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t)
      },
      ut = {},
      pt = function (t) {
        if (t === n) return ut.left = ut.top = 0, ut.width = ut.right = s.clientWidth || t.innerWidth || l.clientWidth || 0, ut.height = ut.bottom = (t.innerHeight || 0) - 20 < s.clientHeight ? s.clientHeight : t.innerHeight || l.clientHeight || 0, ut;
        var e = t.ownerDocument || o,
          a = C(t.pageX) ? t.nodeType || C(t.left) || C(t.top) ? p(t)[0].getBoundingClientRect() : t : {
            left: t.pageX - rt(e),
            top: t.pageY - it(e),
            right: t.pageX - rt(e) + 1,
            bottom: t.pageY - it(e) + 1
          };
        return C(a.right) && !C(a.width) ? (a.right = a.left + a.width, a.bottom = a.top + a.height) : C(a.width) && (a = {
          width: a.right - a.left,
          height: a.bottom - a.top,
          right: a.right,
          left: a.left,
          bottom: a.bottom,
          top: a.top
        }), a
      },
      gt = function (t, e, a) {
        var i, r = t.vars,
          n = r[a],
          o = t._listeners[e];
        return A(n) && (i = n.apply(r.callbackScope || t, r[a + "Params"] || [t.pointerEvent])), o && !1 === t.dispatchEvent(e) && (i = !1), i
      },
      ft = function (t, e) {
        var a, i, r, o = p(t)[0];
        return o.nodeType || o === n ? vt(o, e) : C(t.left) ? {
          left: i = t.min || t.minX || t.minRotation || 0,
          top: a = t.min || t.minY || 0,
          width: (t.max || t.maxX || t.maxRotation || 0) - i,
          height: (t.max || t.maxY || 0) - a
        } : (r = {
          x: 0,
          y: 0
        }, {
          left: t.left - r.x,
          top: t.top - r.y,
          width: t.width,
          height: t.height
        })
      },
      mt = {},
      vt = function (t, e) {
        e = p(e)[0];
        var a, r, s, l, c, d, h, u, g, f, m, v, y, w, b = t.getBBox && t.ownerSVGElement,
          x = t.ownerDocument || o;
        if (t === n) s = it(x), r = (a = rt(x)) + (x.documentElement.clientWidth || t.innerWidth || x.body.clientWidth || 0), l = s + ((t.innerHeight || 0) - 20 < x.documentElement.clientHeight ? x.documentElement.clientHeight : t.innerHeight || x.body.clientHeight || 0);
        else {
          if (e === n || C(e)) return t.getBoundingClientRect();
          a = s = 0, b ? (m = (f = t.getBBox()).width, v = f.height) : (t.viewBox && (f = t.viewBox.baseVal) && (a = f.x || 0, s = f.y || 0, m = f.width, v = f.height), m || (f = "border-box" === (y = ht(t)).boxSizing, m = (parseFloat(y.width) || t.clientWidth || 0) + (f ? 0 : parseFloat(y.borderLeftWidth) + parseFloat(y.borderRightWidth)), v = (parseFloat(y.height) || t.clientHeight || 0) + (f ? 0 : parseFloat(y.borderTopWidth) + parseFloat(y.borderBottomWidth)))), r = m, l = v
        }
        return t === e ? {
          left: a,
          top: s,
          width: r - a,
          height: l - s
        } : (d = (c = Object(i.b)(e, !0).multiply(Object(i.b)(t))).apply({
          x: a,
          y: s
        }), h = c.apply({
          x: r,
          y: s
        }), u = c.apply({
          x: r,
          y: l
        }), g = c.apply({
          x: a,
          y: l
        }), a = Math.min(d.x, h.x, u.x, g.x), s = Math.min(d.y, h.y, u.y, g.y), {
          left: a + ((w = e.parentNode || {}).scrollLeft || 0),
          top: s + (w.scrollTop || 0),
          width: Math.max(d.x, h.x, u.x, g.x) - a,
          height: Math.max(d.y, h.y, u.y, g.y) - s
        })
      },
      yt = function (t, e, a, i, r, n) {
        var o, s, l, c = {};
        if (e)
          if (1 !== r && e instanceof Array) {
            if (c.end = o = [], l = e.length, T(e[0]))
              for (s = 0; s < l; s++) o[s] = W(e[s], r);
            else
              for (s = 0; s < l; s++) o[s] = e[s] * r;
            a += 1.1, i -= 1.1
          } else A(e) ? c.end = function (a) {
            var i, n, o = e.call(t, a);
            if (1 !== r)
              if (T(o)) {
                for (n in i = {}, o) i[n] = o[n] * r;
                o = i
              } else o *= r;
            return o
          } : c.end = e;
        return (a || 0 === a) && (c.max = a), (i || 0 === i) && (c.min = i), n && (c.velocity = 0), c
      },
      wt = function t(e) {
        var a;
        return !(!e || !e.getAttribute || e === l) && (!("true" !== (a = e.getAttribute("data-clickable")) && ("false" === a || !e.onclick && !N.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || t(e.parentNode))
      },
      bt = function (t, e) {
        for (var a, i = t.length; i--;)(a = t[i]).ondragstart = a.onselectstart = e ? null : _, r.set(a, {
          lazy: !0,
          userSelect: e ? "text" : "none"
        })
      },
      xt = function (t, e) {
        t = r.utils.toArray(t)[0], e = e || {};
        var a, i, n, o, s, l, c = document.createElement("div"),
          d = c.style,
          h = t.firstChild,
          u = 0,
          p = 0,
          g = t.scrollTop,
          f = t.scrollLeft,
          m = t.scrollWidth,
          v = t.scrollHeight,
          y = 0,
          w = 0,
          b = 0;
        z && !1 !== e.force3D ? (s = "translate3d(", l = "px,0px)") : S && (s = "translate(", l = "px)"), this.scrollTop = function (t, e) {
          if (!arguments.length) return -this.top();
          this.top(-t, e)
        }, this.scrollLeft = function (t, e) {
          if (!arguments.length) return -this.left();
          this.left(-t, e)
        }, this.left = function (a, i) {
          if (!arguments.length) return -(t.scrollLeft + p);
          var n = t.scrollLeft - f,
            o = p;
          if ((n > 2 || n < -2) && !i) return f = t.scrollLeft, r.killTweensOf(this, {
            left: 1,
            scrollLeft: 1
          }), this.left(-f), void(e.onKill && e.onKill());
          (a = -a) < 0 ? (p = a - .5 | 0, a = 0) : a > w ? (p = a - w | 0, a = w) : p = 0, (p || o) && (this._skip || (d[S] = s + -p + "px," + -u + l), p + y >= 0 && (d.paddingRight = p + y + "px")), t.scrollLeft = 0 | a, f = t.scrollLeft
        }, this.top = function (a, i) {
          if (!arguments.length) return -(t.scrollTop + u);
          var n = t.scrollTop - g,
            o = u;
          if ((n > 2 || n < -2) && !i) return g = t.scrollTop, r.killTweensOf(this, {
            top: 1,
            scrollTop: 1
          }), this.top(-g), void(e.onKill && e.onKill());
          (a = -a) < 0 ? (u = a - .5 | 0, a = 0) : a > b ? (u = a - b | 0, a = b) : u = 0, (u || o) && (this._skip || (d[S] = s + -p + "px," + -u + l)), t.scrollTop = 0 | a, g = t.scrollTop
        }, this.maxScrollTop = function () {
          return b
        }, this.maxScrollLeft = function () {
          return w
        }, this.disable = function () {
          for (h = c.firstChild; h;) o = h.nextSibling, t.appendChild(h), h = o;
          t === c.parentNode && t.removeChild(c)
        }, this.enable = function () {
          if ((h = t.firstChild) !== c) {
            for (; h;) o = h.nextSibling, c.appendChild(h), h = o;
            t.appendChild(c), this.calibrate()
          }
        }, this.calibrate = function (e) {
          var r, o, s, l = t.clientWidth === a;
          g = t.scrollTop, f = t.scrollLeft, l && t.clientHeight === i && c.offsetHeight === n && m === t.scrollWidth && v === t.scrollHeight && !e || ((u || p) && (o = this.left(), s = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), r = ht(t), l && !e || (d.display = "block", d.width = "auto", d.paddingRight = "0px", (y = Math.max(0, t.scrollWidth - t.clientWidth)) && (y += parseFloat(r.paddingLeft) + (D ? parseFloat(r.paddingRight) : 0))), d.display = "inline-block", d.position = "relative", d.overflow = "visible", d.verticalAlign = "top", d.boxSizing = "content-box", d.width = "100%", d.paddingRight = y + "px", D && (d.paddingBottom = r.paddingBottom), a = t.clientWidth, i = t.clientHeight, m = t.scrollWidth, v = t.scrollHeight, w = t.scrollWidth - a, b = t.scrollHeight - i, n = c.offsetHeight, d.display = "block", (o || s) && (this.left(o), this.top(s)))
        }, this.content = c, this.element = t, this._skip = !1, this.enable()
      },
      Mt = function (t) {
        if (L() && document.body) {
          var e = window && window.navigator;
          n = window, o = document, s = o.documentElement, l = o.body, c = H("div"), M = !!window.PointerEvent, (d = H("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", x = "grab" === d.style.cursor ? "grab" : "move", w = e && -1 !== e.userAgent.toLowerCase().indexOf("android"), f = "ontouchstart" in s && "orientation" in n || e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0), i = H("div"), v = H("div"), y = v.style, A = l, y.display = "inline-block", y.position = "relative", i.style.cssText = v.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", i.appendChild(v), A.appendChild(i), a = v.offsetHeight + 18 > i.scrollHeight, A.removeChild(i), D = a, m = function (t) {
            for (var e = t.split(","), a = (("onpointerdown" in c ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in c ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(",")), i = {}, r = 4; --r > -1;) i[e[r]] = a[r], i[a[r]] = e[r];
            try {
              s.addEventListener("test", null, Object.defineProperty({}, "passive", {
                get: function () {
                  g = 1
                }
              }))
            } catch (t) {}
            return i
          }("touchstart,touchmove,touchend,touchcancel"), J(o, "touchcancel", _), J(n, "touchmove", _), l && l.addEventListener("touchstart", _), J(o, "contextmenu", (function () {
            for (var t in j) j[t].isPressed && j[t].endDrag()
          })), r = h = E()
        }
        var a, i, v, y, A;
        r ? (b = r.plugins.inertia, u = r.utils.checkPrefix, S = u(S), k = u(k), p = r.utils.toArray, z = !!u("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)")
      },
      zt = function (t) {
        var e, a;

        function l(e, a) {
          var c;
          c = t.call(this) || this, h || Mt(1), e = p(e)[0], b || (b = r.plugins.inertia), c.vars = a = W(a || {}), c.target = e, c.x = c.y = c.rotation = 0, c.dragResistance = parseFloat(a.dragResistance) || 0, c.edgeResistance = isNaN(a.edgeResistance) ? 1 : parseFloat(a.edgeResistance) || 0, c.lockAxis = a.lockAxis, c.autoScroll = a.autoScroll || 0, c.lockedAxis = null, c.allowEventDefault = !!a.allowEventDefault, r.getProperty(e, "x");
          var u, g, z, D, L, E, _, S, H, N, K, et, lt, ut, vt, zt, Dt, Lt, Et, At, Tt, Ct, _t, St, kt, Pt, Ot, Ht, Vt, Ft, Bt, It, $t = (a.type || "x,y").toLowerCase(),
            jt = ~$t.indexOf("x") || ~$t.indexOf("y"),
            Rt = -1 !== $t.indexOf("rotation"),
            Nt = Rt ? "rotation" : jt ? "x" : "left",
            Yt = jt ? "y" : "top",
            Xt = !(!~$t.indexOf("x") && !~$t.indexOf("left") && "scroll" !== $t),
            qt = !(!~$t.indexOf("y") && !~$t.indexOf("top") && "scroll" !== $t),
            Wt = a.minimumMovement || 2,
            Gt = function (t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t
            }(c),
            Ut = p(a.trigger || a.handle || e),
            Kt = {},
            Qt = 0,
            Jt = !1,
            Zt = a.autoScrollMarginTop || 40,
            te = a.autoScrollMarginRight || 40,
            ee = a.autoScrollMarginBottom || 40,
            ae = a.autoScrollMarginLeft || 40,
            ie = a.clickableTest || wt,
            re = 0,
            ne = e._gsap || r.core.getCache(e),
            oe = function t(e) {
              return "fixed" === ht(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
            }(e),
            se = function (t, a) {
              return parseFloat(ne.get(e, t, a))
            },
            le = e.ownerDocument || o,
            ce = function (t) {
              return tt(t), t.stopImmediatePropagation && t.stopImmediatePropagation(), !1
            },
            de = function t(a) {
              if (Gt.autoScroll && Gt.isDragging && (Jt || Dt)) {
                var i, r, o, l, c, d, h, u, p = e,
                  f = 15 * Gt.autoScroll;
                for (Jt = !1, q.scrollTop = null != n.pageYOffset ? n.pageYOffset : null != le.documentElement.scrollTop ? le.documentElement.scrollTop : le.body.scrollTop, q.scrollLeft = null != n.pageXOffset ? n.pageXOffset : null != le.documentElement.scrollLeft ? le.documentElement.scrollLeft : le.body.scrollLeft, l = Gt.pointerX - q.scrollLeft, c = Gt.pointerY - q.scrollTop; p && !r;) i = (r = st(p.parentNode)) ? q : p.parentNode, o = r ? {
                  bottom: Math.max(s.clientHeight, n.innerHeight || 0),
                  right: Math.max(s.clientWidth, n.innerWidth || 0),
                  left: 0,
                  top: 0
                } : i.getBoundingClientRect(), d = h = 0, qt && ((u = i._gsMaxScrollY - i.scrollTop) < 0 ? h = u : c > o.bottom - ee && u ? (Jt = !0, h = Math.min(u, f * (1 - Math.max(0, o.bottom - c) / ee) | 0)) : c < o.top + Zt && i.scrollTop && (Jt = !0, h = -Math.min(i.scrollTop, f * (1 - Math.max(0, c - o.top) / Zt) | 0)), h && (i.scrollTop += h)), Xt && ((u = i._gsMaxScrollX - i.scrollLeft) < 0 ? d = u : l > o.right - te && u ? (Jt = !0, d = Math.min(u, f * (1 - Math.max(0, o.right - l) / te) | 0)) : l < o.left + ae && i.scrollLeft && (Jt = !0, d = -Math.min(i.scrollLeft, f * (1 - Math.max(0, l - o.left) / ae) | 0)), d && (i.scrollLeft += d)), r && (d || h) && (n.scrollTo(i.scrollLeft, i.scrollTop), ze(Gt.pointerX + d, Gt.pointerY + h)), p = i
              }
              if (Dt) {
                var m = Gt.x,
                  v = Gt.y;
                Rt ? (Gt.deltaX = m - parseFloat(ne.rotation), Gt.rotation = m, ne.rotation = m + "deg", ne.renderTransform(1, ne)) : g ? (qt && (Gt.deltaY = v - g.top(), g.top(v)), Xt && (Gt.deltaX = m - g.left(), g.left(m))) : jt ? (qt && (Gt.deltaY = v - parseFloat(ne.y), ne.y = v + "px"), Xt && (Gt.deltaX = m - parseFloat(ne.x), ne.x = m + "px"), ne.renderTransform(1, ne)) : (qt && (Gt.deltaY = v - parseFloat(e.style.top || 0), e.style.top = v + "px"), Xt && (Gt.deltaX = m - parseFloat(e.style.left || 0), e.style.left = m + "px")), !S || a || Ht || (Ht = !0, !1 === gt(Gt, "drag", "onDrag") && (Xt && (Gt.x -= Gt.deltaX), qt && (Gt.y -= Gt.deltaY), t(!0)), Ht = !1)
              }
              Dt = !1
            },
            he = function (t, a) {
              var i, n, o = Gt.x,
                s = Gt.y;
              e._gsap || (ne = r.core.getCache(e)), ne.uncache && r.getProperty(e, "x"), jt ? (Gt.x = parseFloat(ne.x), Gt.y = parseFloat(ne.y)) : Rt ? Gt.x = Gt.rotation = parseFloat(ne.rotation) : g ? (Gt.y = g.top(), Gt.x = g.left()) : (Gt.y = parseFloat(e.style.top || (n = ht(e)) && n.top) || 0, Gt.x = parseFloat(e.style.left || (n || {}).left) || 0), (Et || At || Tt) && !a && (Gt.isDragging || Gt.isThrowing) && (Tt && (X.x = Gt.x, X.y = Gt.y, (i = Tt(X)).x !== Gt.x && (Gt.x = i.x, Dt = !0), i.y !== Gt.y && (Gt.y = i.y, Dt = !0)), Et && (i = Et(Gt.x)) !== Gt.x && (Gt.x = i, Rt && (Gt.rotation = i), Dt = !0), At && ((i = At(Gt.y)) !== Gt.y && (Gt.y = i), Dt = !0)), Dt && de(!0), t || (Gt.deltaX = Gt.x - o, Gt.deltaY = Gt.y - s, gt(Gt, "throwupdate", "onThrowUpdate"))
            },
            ue = function (t, e, a, i) {
              return null == e && (e = -F), null == a && (a = F), A(t) ? function (r) {
                var n = Gt.isPressed ? 1 - Gt.edgeResistance : 1;
                return t.call(Gt, r > a ? a + (r - a) * n : r < e ? e + (r - e) * n : r) * i
              } : O(t) ? function (i) {
                for (var r, n, o = t.length, s = 0, l = F; --o > -1;)(n = (r = t[o]) - i) < 0 && (n = -n), n < l && r >= e && r <= a && (s = o, l = n);
                return t[s]
              } : isNaN(t) ? function (t) {
                return t
              } : function () {
                return t * i
              }
            },
            pe = function () {
              var t, i, r, n;
              _ = !1, g ? (g.calibrate(), Gt.minX = K = -g.maxScrollLeft(), Gt.minY = lt = -g.maxScrollTop(), Gt.maxX = N = Gt.maxY = et = 0, _ = !0) : a.bounds && (t = ft(a.bounds, e.parentNode), Rt ? (Gt.minX = K = t.left, Gt.maxX = N = t.left + t.width, Gt.minY = lt = Gt.maxY = et = 0) : C(a.bounds.maxX) && C(a.bounds.maxY) ? (i = ft(e, e.parentNode), Gt.minX = K = Math.round(se(Nt, "px") + t.left - i.left - .5), Gt.minY = lt = Math.round(se(Yt, "px") + t.top - i.top - .5), Gt.maxX = N = Math.round(K + (t.width - i.width)), Gt.maxY = et = Math.round(lt + (t.height - i.height))) : (t = a.bounds, Gt.minX = K = t.minX, Gt.minY = lt = t.minY, Gt.maxX = N = t.maxX, Gt.maxY = et = t.maxY), K > N && (Gt.minX = N, Gt.maxX = N = K, K = Gt.minX), lt > et && (Gt.minY = et, Gt.maxY = et = lt, lt = Gt.minY), Rt && (Gt.minRotation = K, Gt.maxRotation = N), _ = !0), a.liveSnap && (r = !0 === a.liveSnap ? a.snap || {} : a.liveSnap, n = O(r) || A(r), Rt ? (Et = ue(n ? r : r.rotation, K, N, 1), At = null) : r.points ? Tt = function (t, e, a, i, r, n, o) {
                return n = n && n < F ? n * n : F, A(t) ? function (s) {
                  var l, c, d, h = Gt.isPressed ? 1 - Gt.edgeResistance : 1,
                    u = s.x,
                    p = s.y;
                  return s.x = u = u > a ? a + (u - a) * h : u < e ? e + (u - e) * h : u, s.y = p = p > r ? r + (p - r) * h : p < i ? i + (p - i) * h : p, (l = t.call(Gt, s)) !== s && (s.x = l.x, s.y = l.y), 1 !== o && (s.x *= o, s.y *= o), n < F && (c = s.x - u) * c + (d = s.y - p) * d > n && (s.x = u, s.y = p), s
                } : O(t) ? function (e) {
                  for (var a, i, r, o, s = t.length, l = 0, c = F; --s > -1;)(o = (a = (r = t[s]).x - e.x) * a + (i = r.y - e.y) * i) < c && (l = s, c = o);
                  return c <= n ? t[l] : e
                } : function (t) {
                  return t
                }
              }(n ? r : r.points, K, N, lt, et, r.radius, g ? -1 : 1) : (Xt && (Et = ue(n ? r : r.x || r.left || r.scrollLeft, K, N, g ? -1 : 1)), qt && (At = ue(n ? r : r.y || r.top || r.scrollTop, lt, et, g ? -1 : 1))))
            },
            ge = function () {
              Gt.isThrowing = !1, gt(Gt, "throwcomplete", "onThrowComplete")
            },
            fe = function () {
              Gt.isThrowing = !1
            },
            me = function (t, i) {
              var n, o, s, l;
              t && b ? (!0 === t && (n = a.snap || a.liveSnap || {}, o = O(n) || A(n), t = {
                resistance: (a.throwResistance || a.resistance || 1e3) / (Rt ? 10 : 1)
              }, Rt ? t.rotation = yt(Gt, o ? n : n.rotation, N, K, 1, i) : (Xt && (t[Nt] = yt(Gt, o ? n : n.points || n.x || n.left, N, K, g ? -1 : 1, i || "x" === Gt.lockedAxis)), qt && (t[Yt] = yt(Gt, o ? n : n.points || n.y || n.top, et, lt, g ? -1 : 1, i || "y" === Gt.lockedAxis)), (n.points || O(n) && T(n[0])) && (t.linkedProps = Nt + "," + Yt, t.radius = n.radius))), Gt.isThrowing = !0, l = isNaN(a.overshootTolerance) ? 1 === a.edgeResistance ? 0 : 1 - Gt.edgeResistance + .2 : a.overshootTolerance, t.duration || (t.duration = {
                max: Math.max(a.minDuration || 0, "maxDuration" in a ? a.maxDuration : 2),
                min: isNaN(a.minDuration) ? 0 === l || T(t) && t.resistance > 1e3 ? 0 : .5 : a.minDuration,
                overshoot: l
              }), Gt.tween = s = r.to(g || e, {
                inertia: t,
                data: "_draggable",
                onComplete: ge,
                onInterrupt: fe,
                onUpdate: a.fastMode ? gt : he,
                onUpdateParams: a.fastMode ? [Gt, "onthrowupdate", "onThrowUpdate"] : n && n.radius ? [!1, !0] : []
              }), a.fastMode || (g && (g._skip = !0), s.render(1e9, !0, !0), he(!0, !0), Gt.endX = Gt.x, Gt.endY = Gt.y, Rt && (Gt.endRotation = Gt.x), s.play(0), he(!0, !0), g && (g._skip = !1))) : _ && Gt.applyBounds()
            },
            ve = function (t) {
              var a, r = St;
              St = Object(i.b)(e.parentNode, !0), t && Gt.isPressed && !St.equals(r || new i.a) && (a = r.inverse().apply({
                x: z,
                y: D
              }), St.apply(a, a), z = a.x, D = a.y), St.equals(B) && (St = null)
            },
            ye = function () {
              var t, a, r, n = 1 - Gt.edgeResistance,
                o = oe ? rt(le) : 0,
                s = oe ? it(le) : 0;
              ve(!1), mt.x = Gt.pointerX - o, mt.y = Gt.pointerY - s, St && St.apply(mt, mt), z = mt.x, D = mt.y, Dt && (ze(Gt.pointerX, Gt.pointerY), de(!0)), It = Object(i.b)(e), g ? (pe(), E = g.top(), L = g.left()) : (we() ? (he(!0, !0), pe()) : Gt.applyBounds(), Rt ? (t = e.ownerSVGElement ? [ne.xOrigin - e.getBBox().x, ne.yOrigin - e.getBBox().y] : (ht(e)[k] || "0 0").split(" "), zt = Gt.rotationOrigin = Object(i.b)(e).apply({
                x: parseFloat(t[0]) || 0,
                y: parseFloat(t[1]) || 0
              }), he(!0, !0), a = Gt.pointerX - zt.x - o, r = zt.y - Gt.pointerY + s, L = Gt.x, E = Gt.y = Math.atan2(r, a) * V) : (E = se(Yt, "px"), L = se(Nt, "px"))), _ && n && (L > N ? L = N + (L - N) / n : L < K && (L = K - (K - L) / n), Rt || (E > et ? E = et + (E - et) / n : E < lt && (E = lt - (lt - E) / n))), Gt.startX = L = P(L), Gt.startY = E = P(E)
            },
            we = function () {
              return Gt.tween && Gt.tween.isActive()
            },
            be = function () {
              !d.parentNode || we() || Gt.isDragging || d.parentNode.removeChild(d)
            },
            xe = function (t, i) {
              var o;
              if (!u || Gt.isPressed || !t || !("mousedown" !== t.type && "pointerdown" !== t.type || i) && I() - re < 30 && m[Gt.pointerEvent.type]) Bt && t && u && tt(t);
              else {
                if (kt = we(), Gt.pointerEvent = t, m[t.type] ? (_t = ~t.type.indexOf("touch") ? t.currentTarget || t.target : le, J(_t, "touchend", De), J(_t, "touchmove", Me), J(_t, "touchcancel", De), J(le, "touchstart", at)) : (_t = null, J(le, "mousemove", Me)), Ot = null, M && _t || (J(le, "mouseup", De), t && t.target && J(t.target, "mouseup", De)), Ct = ie.call(Gt, t.target) && !1 === a.dragClickables && !i) return J(t.target, "change", De), gt(Gt, "pressInit", "onPressInit"), gt(Gt, "press", "onPress"), bt(Ut, !0), void(Bt = !1);
                var s;
                if (Pt = !(!_t || Xt === qt || !1 === Gt.vars.allowNativeTouchScrolling || Gt.vars.allowContextMenu && t && (t.ctrlKey || t.which > 2)) && (Xt ? "y" : "x"), (Bt = !Pt && !Gt.allowEventDefault) && (tt(t), J(n, "touchforcechange", tt)), t.changedTouches ? (t = ut = t.changedTouches[0], vt = t.identifier) : t.pointerId ? vt = t.pointerId : ut = vt = null, v++, s = de, $.push(s), 1 === $.length && r.ticker.add(U), D = Gt.pointerY = t.pageY, z = Gt.pointerX = t.pageX, gt(Gt, "pressInit", "onPressInit"), (Pt || Gt.autoScroll) && ct(e.parentNode), !e.parentNode || !Gt.autoScroll || g || Rt || !e.parentNode._gsMaxScrollX || d.parentNode || e.getBBox || (d.style.width = e.parentNode.scrollWidth + "px", e.parentNode.appendChild(d)), ye(), Gt.tween && Gt.tween.kill(), Gt.isThrowing = !1, r.killTweensOf(g || e, Kt, !0), g && r.killTweensOf(e, {
                    scrollTo: 1
                  }, !0), Gt.tween = Gt.lockedAxis = null, (a.zIndexBoost || !Rt && !g && !1 !== a.zIndexBoost) && (e.style.zIndex = l.zIndex++), Gt.isPressed = !0, S = !(!a.onDrag && !Gt._listeners.drag), H = !(!a.onMove && !Gt._listeners.move), !1 !== a.cursor || a.activeCursor)
                  for (o = Ut.length; --o > -1;) r.set(Ut[o], {
                    cursor: a.activeCursor || a.cursor || ("grab" === x ? "grabbing" : x)
                  });
                gt(Gt, "press", "onPress")
              }
            },
            Me = function (t) {
              var a, i, r, o, s, l, c = t;
              if (u && !y && Gt.isPressed && t) {
                if (Gt.pointerEvent = t, a = t.changedTouches) {
                  if ((t = a[0]) !== ut && t.identifier !== vt) {
                    for (o = a.length; --o > -1 && (t = a[o]).identifier !== vt && t.target !== e;);
                    if (o < 0) return
                  }
                } else if (t.pointerId && vt && t.pointerId !== vt) return;
                _t && Pt && !Ot && (mt.x = t.pageX - (oe ? rt(le) : 0), mt.y = t.pageY - (oe ? it(le) : 0), St && St.apply(mt, mt), i = mt.x, r = mt.y, ((s = Math.abs(i - z)) !== (l = Math.abs(r - D)) && (s > Wt || l > Wt) || w && Pt === Ot) && (Ot = s > l && Xt ? "x" : "y", Pt && Ot !== Pt && J(n, "touchforcechange", tt), !1 !== Gt.vars.lockAxisOnTouchScroll && Xt && qt && (Gt.lockedAxis = "x" === Ot ? "y" : "x", A(Gt.vars.onLockAxis) && Gt.vars.onLockAxis.call(Gt, c)), w && Pt === Ot)) ? De(c) : (Gt.allowEventDefault || Pt && (!Ot || Pt === Ot) || !1 === c.cancelable ? Bt && (Bt = !1) : (tt(c), Bt = !0), Gt.autoScroll && (Jt = !0), ze(t.pageX, t.pageY, H))
              } else Bt && t && u && tt(t)
            },
            ze = function (t, e, a) {
              var i, r, n, o, s, l, c = 1 - Gt.dragResistance,
                d = 1 - Gt.edgeResistance,
                h = Gt.pointerX,
                u = Gt.pointerY,
                p = E,
                g = Gt.x,
                f = Gt.y,
                m = Gt.endX,
                v = Gt.endY,
                y = Gt.endRotation,
                w = Dt;
              Gt.pointerX = t, Gt.pointerY = e, oe && (t -= rt(le), e -= it(le)), Rt ? (o = Math.atan2(zt.y - e, t - zt.x) * V, (s = Gt.y - o) > 180 ? (E -= 360, Gt.y = o) : s < -180 && (E += 360, Gt.y = o), Gt.x !== L || Math.abs(E - o) > Wt ? (Gt.y = o, n = L + (E - o) * c) : n = L) : (St && (l = t * St.a + e * St.c + St.e, e = t * St.b + e * St.d + St.f, t = l), (r = e - D) < Wt && r > -Wt && (r = 0), (i = t - z) < Wt && i > -Wt && (i = 0), (Gt.lockAxis || Gt.lockedAxis) && (i || r) && ((l = Gt.lockedAxis) || (Gt.lockedAxis = l = Xt && Math.abs(i) > Math.abs(r) ? "y" : qt ? "x" : null, l && A(Gt.vars.onLockAxis) && Gt.vars.onLockAxis.call(Gt, Gt.pointerEvent)), "y" === l ? r = 0 : "x" === l && (i = 0)), n = P(L + i * c), o = P(E + r * c)), (Et || At || Tt) && (Gt.x !== n || Gt.y !== o && !Rt) ? (Tt && (X.x = n, X.y = o, l = Tt(X), n = P(l.x), o = P(l.y)), Et && (n = P(Et(n))), At && (o = P(At(o)))) : _ && (n > N ? n = N + Math.round((n - N) * d) : n < K && (n = K + Math.round((n - K) * d)), Rt || (o > et ? o = Math.round(et + (o - et) * d) : o < lt && (o = Math.round(lt + (o - lt) * d)))), (Gt.x !== n || Gt.y !== o && !Rt) && (Rt ? (Gt.endRotation = Gt.x = Gt.endX = n, Dt = !0) : (qt && (Gt.y = Gt.endY = o, Dt = !0), Xt && (Gt.x = Gt.endX = n, Dt = !0)), a && !1 === gt(Gt, "move", "onMove") ? (Gt.pointerX = h, Gt.pointerY = u, E = p, Gt.x = g, Gt.y = f, Gt.endX = m, Gt.endY = v, Gt.endRotation = y, Dt = w) : !Gt.isDragging && Gt.isPressed && (Gt.isDragging = !0, gt(Gt, "dragstart", "onDragStart")))
            },
            De = function t(i, o) {
              if (u && Gt.isPressed && (!i || null == vt || o || !(i.pointerId && i.pointerId !== vt && i.target !== e || i.changedTouches && ! function (t, e) {
                  for (var a = t.length; a--;)
                    if (t[a].identifier === e) return !0
                }(i.changedTouches, vt)))) {
                Gt.isPressed = !1;
                var s, l, c, d, h, p = i,
                  g = Gt.isDragging,
                  f = Gt.vars.allowContextMenu && i && (i.ctrlKey || i.which > 2),
                  m = r.delayedCall(.001, be);
                if (_t ? (Z(_t, "touchend", t), Z(_t, "touchmove", Me), Z(_t, "touchcancel", t), Z(le, "touchstart", at)) : Z(le, "mousemove", Me), Z(n, "touchforcechange", tt), M && _t || (Z(le, "mouseup", t), i && i.target && Z(i.target, "mouseup", t)), Dt = !1, g && (Qt = Y = I(), Gt.isDragging = !1), Ct && !f) return i && (Z(i.target, "change", t), Gt.pointerEvent = p), bt(Ut, !1), gt(Gt, "release", "onRelease"), gt(Gt, "click", "onClick"), void(Ct = !1);
                for (Q(de), l = Ut.length; --l > -1;) dt(Ut[l], "cursor", a.cursor || (!1 !== a.cursor ? x : null));
                if (v--, i) {
                  if ((s = i.changedTouches) && (i = s[0]) !== ut && i.identifier !== vt) {
                    for (l = s.length; --l > -1 && (i = s[l]).identifier !== vt && i.target !== e;);
                    if (l < 0) return
                  }
                  Gt.pointerEvent = p, Gt.pointerX = i.pageX, Gt.pointerY = i.pageY
                }
                return f && p ? (tt(p), Bt = !0, gt(Gt, "release", "onRelease")) : p && !g ? (Bt = !1, kt && (a.snap || a.bounds) && me(a.inertia || a.throwProps), gt(Gt, "release", "onRelease"), w && "touchmove" === p.type || -1 !== p.type.indexOf("cancel") || (gt(Gt, "click", "onClick"), I() - re < 300 && gt(Gt, "doubleclick", "onDoubleClick"), d = p.target || e, re = I(), h = function () {
                  re === Vt || !Gt.enabled() || Gt.isPressed || p.defaultPrevented || (d.click ? d.click() : le.createEvent && ((c = le.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, n, 1, Gt.pointerEvent.screenX, Gt.pointerEvent.screenY, Gt.pointerX, Gt.pointerY, !1, !1, !1, !1, 0, null), d.dispatchEvent(c)))
                }, w || p.defaultPrevented || r.delayedCall(.05, h))) : (me(a.inertia || a.throwProps), Gt.allowEventDefault || !p || !1 === a.dragClickables && ie.call(Gt, p.target) || !g || Pt && (!Ot || Pt !== Ot) || !1 === p.cancelable ? Bt = !1 : (Bt = !0, tt(p)), gt(Gt, "release", "onRelease")), we() && m.duration(Gt.tween.duration()), g && gt(Gt, "dragend", "onDragEnd"), !0
              }
              Bt && i && u && tt(i)
            },
            Le = function (t) {
              if (t && Gt.isDragging && !g) {
                var a = t.target || e.parentNode,
                  i = a.scrollLeft - a._gsScrollX,
                  r = a.scrollTop - a._gsScrollY;
                (i || r) && (St ? (z -= i * St.a + r * St.c, D -= r * St.d + i * St.b) : (z -= i, D -= r), a._gsScrollX += i, a._gsScrollY += r, ze(Gt.pointerX, Gt.pointerY))
              }
            },
            Ee = function (t) {
              var e = I(),
                a = e - re < 40,
                i = e - Qt < 40,
                r = a && Vt === re,
                n = Gt.pointerEvent && Gt.pointerEvent.defaultPrevented,
                o = a && Ft === re,
                s = t.isTrusted || null == t.isTrusted && a && r;
              if ((r || i && !1 !== Gt.vars.suppressClickOnDrag) && t.stopImmediatePropagation && t.stopImmediatePropagation(), a && (!Gt.pointerEvent || !Gt.pointerEvent.defaultPrevented) && (!r || s && !o)) return s && r && (Ft = re), void(Vt = re);
              (Gt.isPressed || i || a) && (s && t.detail && a && !n || tt(t)), a || i || (t && t.target && (Gt.pointerEvent = t), gt(Gt, "click", "onClick"))
            },
            Ae = function (t) {
              return St ? {
                x: t.x * St.a + t.y * St.c + St.e,
                y: t.x * St.b + t.y * St.d + St.f
              } : {
                x: t.x,
                y: t.y
              }
            };
          return (Lt = l.get(e)) && Lt.kill(), c.startDrag = function (t, a) {
            var i, r, n, o;
            xe(t || Gt.pointerEvent, !0), a && !Gt.hitTest(t || Gt.pointerEvent) && (i = pt(t || Gt.pointerEvent), r = pt(e), n = Ae({
              x: i.left + i.width / 2,
              y: i.top + i.height / 2
            }), o = Ae({
              x: r.left + r.width / 2,
              y: r.top + r.height / 2
            }), z -= n.x - o.x, D -= n.y - o.y), Gt.isDragging || (Gt.isDragging = !0, gt(Gt, "dragstart", "onDragStart"))
          }, c.drag = Me, c.endDrag = function (t) {
            return De(t || Gt.pointerEvent, !0)
          }, c.timeSinceDrag = function () {
            return Gt.isDragging ? 0 : (I() - Qt) / 1e3
          }, c.timeSinceClick = function () {
            return (I() - re) / 1e3
          }, c.hitTest = function (t, e) {
            return l.hitTest(Gt.target, t, e)
          }, c.getDirection = function (t, a) {
            var i, r, n, o, s, l, c = "velocity" === t && b ? t : T(t) && !Rt ? "element" : "start";
            return "element" === c && (s = pt(Gt.target), l = pt(t)), i = "start" === c ? Gt.x - L : "velocity" === c ? b.getVelocity(e, Nt) : s.left + s.width / 2 - (l.left + l.width / 2), Rt ? i < 0 ? "counter-clockwise" : "clockwise" : (a = a || 2, r = "start" === c ? Gt.y - E : "velocity" === c ? b.getVelocity(e, Yt) : s.top + s.height / 2 - (l.top + l.height / 2), o = (n = Math.abs(i / r)) < 1 / a ? "" : i < 0 ? "left" : "right", n < a && ("" !== o && (o += "-"), o += r < 0 ? "up" : "down"), o)
          }, c.applyBounds = function (t, i) {
            var r, o, s, l, c, d;
            if (t && a.bounds !== t) return a.bounds = t, Gt.update(!0, i);
            if (he(!0), pe(), _ && !we()) {
              if (r = Gt.x, o = Gt.y, r > N ? r = N : r < K && (r = K), o > et ? o = et : o < lt && (o = lt), (Gt.x !== r || Gt.y !== o) && (s = !0, Gt.x = Gt.endX = r, Rt ? Gt.endRotation = r : Gt.y = Gt.endY = o, Dt = !0, de(!0), Gt.autoScroll && !Gt.isDragging))
                for (ct(e.parentNode), l = e, q.scrollTop = null != n.pageYOffset ? n.pageYOffset : null != le.documentElement.scrollTop ? le.documentElement.scrollTop : le.body.scrollTop, q.scrollLeft = null != n.pageXOffset ? n.pageXOffset : null != le.documentElement.scrollLeft ? le.documentElement.scrollLeft : le.body.scrollLeft; l && !d;) c = (d = st(l.parentNode)) ? q : l.parentNode, qt && c.scrollTop > c._gsMaxScrollY && (c.scrollTop = c._gsMaxScrollY), Xt && c.scrollLeft > c._gsMaxScrollX && (c.scrollLeft = c._gsMaxScrollX), l = c;
              Gt.isThrowing && (s || Gt.endX > N || Gt.endX < K || Gt.endY > et || Gt.endY < lt) && me(a.inertia || a.throwProps, s)
            }
            return Gt
          }, c.update = function (t, a, r) {
            if (a && Gt.isPressed) {
              var n = Object(i.b)(e),
                o = It.apply({
                  x: Gt.x - L,
                  y: Gt.y - E
                }),
                s = Object(i.b)(e.parentNode, !0);
              s.apply({
                x: n.e - o.x,
                y: n.f - o.y
              }, o), Gt.x -= o.x - s.e, Gt.y -= o.y - s.f, de(!0), ye()
            }
            var l = Gt.x,
              c = Gt.y;
            return ve(!a), t ? Gt.applyBounds() : (Dt && r && de(!0), he(!0)), a && (ze(Gt.pointerX, Gt.pointerY), Dt && de(!0)), Gt.isPressed && !a && (Xt && Math.abs(l - Gt.x) > .01 || qt && Math.abs(c - Gt.y) > .01 && !Rt) && ye(), Gt.autoScroll && (ct(e.parentNode, Gt.isDragging), Jt = Gt.isDragging, de(!0), ot(e, Le), nt(e, Le)), Gt
          }, c.enable = function (t) {
            var i, n, o, s = {
              lazy: !0
            };
            if (!1 !== a.cursor && (s.cursor = a.cursor || x), r.utils.checkPrefix("touchCallout") && (s.touchCallout = "none"), "soft" !== t) {
              for (G(Ut, Xt === qt ? "none" : a.allowNativeTouchScrolling && e.scrollHeight === e.clientHeight == (e.scrollWidth === e.clientHeight) || a.allowEventDefault ? "manipulation" : Xt ? "pan-y" : "pan-x"), n = Ut.length; --n > -1;) o = Ut[n], M || J(o, "mousedown", xe), J(o, "touchstart", xe), J(o, "click", Ee, !0), r.set(o, s), o.getBBox && o.ownerSVGElement && r.set(o.ownerSVGElement, {
                touchAction: Xt === qt ? "none" : a.allowNativeTouchScrolling || a.allowEventDefault ? "manipulation" : Xt ? "pan-y" : "pan-x"
              }), a.allowContextMenu || J(o, "contextmenu", ce);
              bt(Ut, !1)
            }
            return nt(e, Le), u = !0, b && "soft" !== t && b.track(g || e, jt ? "x,y" : Rt ? "rotation" : "top,left"), e._gsDragID = i = "d" + R++, j[i] = Gt, g && (g.enable(), g.element._gsDragID = i), (a.bounds || Rt) && ye(), a.bounds && Gt.applyBounds(), Gt
          }, c.disable = function (t) {
            for (var a, i = Gt.isDragging, r = Ut.length; --r > -1;) dt(Ut[r], "cursor", null);
            if ("soft" !== t) {
              for (G(Ut, null), r = Ut.length; --r > -1;) a = Ut[r], dt(a, "touchCallout", null), Z(a, "mousedown", xe), Z(a, "touchstart", xe), Z(a, "click", Ee), Z(a, "contextmenu", ce);
              bt(Ut, !0), _t && (Z(_t, "touchcancel", De), Z(_t, "touchend", De), Z(_t, "touchmove", Me)), Z(le, "mouseup", De), Z(le, "mousemove", Me)
            }
            return ot(e, Le), u = !1, b && "soft" !== t && b.untrack(g || e, jt ? "x,y" : Rt ? "rotation" : "top,left"), g && g.disable(), Q(de), Gt.isDragging = Gt.isPressed = Ct = !1, i && gt(Gt, "dragend", "onDragEnd"), Gt
          }, c.enabled = function (t, e) {
            return arguments.length ? t ? Gt.enable(e) : Gt.disable(e) : u
          }, c.kill = function () {
            return Gt.isThrowing = !1, Gt.tween && Gt.tween.kill(), Gt.disable(), r.set(Ut, {
              clearProps: "userSelect"
            }), delete j[e._gsDragID], Gt
          }, ~$t.indexOf("scroll") && (g = c.scrollProxy = new xt(e, function (t, e) {
            for (var a in e) a in t || (t[a] = e[a]);
            return t
          }({
            onKill: function () {
              Gt.isPressed && De(null)
            }
          }, a)), e.style.overflowY = qt && !f ? "auto" : "hidden", e.style.overflowX = Xt && !f ? "auto" : "hidden", e = g.content), Rt ? Kt.rotation = 1 : (Xt && (Kt[Nt] = 1), qt && (Kt[Yt] = 1)), ne.force3D = !("force3D" in a) || a.force3D, c.enable(), c
        }
        return a = t, (e = l).prototype = Object.create(a.prototype), e.prototype.constructor = e, e.__proto__ = a, l.register = function (t) {
          r = t, Mt()
        }, l.create = function (t, e) {
          return h || Mt(!0), p(t).map((function (t) {
            return new l(t, e)
          }))
        }, l.get = function (t) {
          return j[(p(t)[0] || {})._gsDragID]
        }, l.timeSinceDrag = function () {
          return (I() - Y) / 1e3
        }, l.hitTest = function (t, e, a) {
          if (t === e) return !1;
          var i, r, n, o = pt(t),
            s = pt(e),
            l = o.top,
            c = o.left,
            d = o.right,
            h = o.bottom,
            u = o.width,
            p = o.height,
            g = s.left > d || s.right < c || s.top > h || s.bottom < l;
          return g || !a ? !g : (n = -1 !== (a + "").indexOf("%"), a = parseFloat(a) || 0, (i = {
            left: Math.max(c, s.left),
            top: Math.max(l, s.top)
          }).width = Math.min(d, s.right) - i.left, i.height = Math.min(h, s.bottom) - i.top, !(i.width < 0 || i.height < 0) && (n ? (a *= .01, (r = i.width * i.height) >= u * p * a || r >= s.width * s.height * a) : i.width > a && i.height > a))
        }, l
      }(function () {
        function t(t) {
          this._listeners = {}, this.target = t || this
        }
        var e = t.prototype;
        return e.addEventListener = function (t, e) {
          var a = this._listeners[t] || (this._listeners[t] = []);
          ~a.indexOf(e) || a.push(e)
        }, e.removeEventListener = function (t, e) {
          var a = this._listeners[t],
            i = a && a.indexOf(e) || -1;
          i > -1 && a.splice(i, 1)
        }, e.dispatchEvent = function (t) {
          var e, a = this;
          return (this._listeners[t] || []).forEach((function (i) {
            return !1 === i.call(a, {
              type: t,
              target: a.target
            }) && (e = !1)
          })), e
        }, t
      }());
    ! function (t, e) {
      for (var a in e) a in t || (t[a] = e[a])
    }(zt.prototype, {
      pointerX: 0,
      pointerY: 0,
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
      isDragging: !1,
      isPressed: !1
    }), zt.zIndex = 1e3, zt.version = "3.7.1", E() && r.registerPlugin(zt)
  }, function (t, e) {
    t.exports = function (t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var a = 0, i = new Array(e); a < e; a++) i[a] = t[a];
      return i
    }, t.exports.default = t.exports, t.exports.__esModule = !0
  }, function (t, e) {
    function a(e) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (t.exports = a = function (t) {
        return typeof t
      }, t.exports.default = t.exports, t.exports.__esModule = !0) : (t.exports = a = function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      }, t.exports.default = t.exports, t.exports.__esModule = !0), a(e)
    }
    t.exports = a, t.exports.default = t.exports, t.exports.__esModule = !0
  }, function (t, e, a) {
    "use strict";
    a.r(e), a.d(e, "gsap", (function () {
      return fi
    })), a.d(e, "default", (function () {
      return fi
    })), a.d(e, "CSSPlugin", (function () {
      return l.b
    })), a.d(e, "TweenMax", (function () {
      return mi
    })), a.d(e, "TweenLite", (function () {
      return s.w
    })), a.d(e, "TimelineMax", (function () {
      return s.v
    })), a.d(e, "TimelineLite", (function () {
      return s.u
    })), a.d(e, "Power0", (function () {
      return s.i
    })), a.d(e, "Power1", (function () {
      return s.j
    })), a.d(e, "Power2", (function () {
      return s.k
    })), a.d(e, "Power3", (function () {
      return s.l
    })), a.d(e, "Power4", (function () {
      return s.m
    })), a.d(e, "Linear", (function () {
      return s.h
    })), a.d(e, "Quad", (function () {
      return s.o
    })), a.d(e, "Cubic", (function () {
      return s.d
    })), a.d(e, "Quart", (function () {
      return s.p
    })), a.d(e, "Quint", (function () {
      return s.q
    })), a.d(e, "Strong", (function () {
      return s.t
    })), a.d(e, "Elastic", (function () {
      return s.e
    })), a.d(e, "Back", (function () {
      return s.a
    })), a.d(e, "SteppedEase", (function () {
      return s.s
    })), a.d(e, "Bounce", (function () {
      return s.b
    })), a.d(e, "Sine", (function () {
      return s.r
    })), a.d(e, "Expo", (function () {
      return s.f
    })), a.d(e, "Circ", (function () {
      return s.c
    })), a.d(e, "wrap", (function () {
      return s.hb
    })), a.d(e, "wrapYoyo", (function () {
      return s.ib
    })), a.d(e, "distribute", (function () {
      return s.T
    })), a.d(e, "random", (function () {
      return s.ab
    })), a.d(e, "snap", (function () {
      return s.db
    })), a.d(e, "normalize", (function () {
      return s.Y
    })), a.d(e, "getUnit", (function () {
      return s.U
    })), a.d(e, "clamp", (function () {
      return s.R
    })), a.d(e, "splitColor", (function () {
      return s.eb
    })), a.d(e, "toArray", (function () {
      return s.fb
    })), a.d(e, "mapRange", (function () {
      return s.X
    })), a.d(e, "pipe", (function () {
      return s.Z
    })), a.d(e, "unitize", (function () {
      return s.gb
    })), a.d(e, "interpolate", (function () {
      return s.W
    })), a.d(e, "shuffle", (function () {
      return s.cb
    })), a.d(e, "selector", (function () {
      return s.bb
    })), a.d(e, "Draggable", (function () {
      return c.Draggable
    })), a.d(e, "CSSRulePlugin", (function () {
      return g
    })), a.d(e, "EaselPlugin", (function () {
      return H
    })), a.d(e, "SlowMo", (function () {
      return X
    })), a.d(e, "ExpoScaleEase", (function () {
      return q
    })), a.d(e, "RoughEase", (function () {
      return W
    })), a.d(e, "EasePack", (function () {
      return G
    })), a.d(e, "MotionPathPlugin", (function () {
      return ft
    })), a.d(e, "PixiPlugin", (function () {
      return Jt
    })), a.d(e, "ScrollToPlugin", (function () {
      return fe
    })), a.d(e, "ScrollTrigger", (function () {
      return si
    })), a.d(e, "TextPlugin", (function () {
      return gi
    }));
    var i, r, n, o, s = a(0),
      l = a(10),
      c = a(12),
      d = function () {
        return "undefined" != typeof window
      },
      h = function () {
        return i || d() && (i = window.gsap) && i.registerPlugin && i
      },
      u = function () {
        return r || (p(), o || console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")), r
      },
      p = function (t) {
        i = t || h(), d() && (window, n = document), i && (o = i.plugins.css) && (r = 1)
      },
      g = {
        version: "3.7.1",
        name: "cssRule",
        init: function (t, e, a, i, r) {
          if (!u() || void 0 === t.cssText) return !1;
          var s = t._gsProxy = t._gsProxy || n.createElement("div");
          this.ss = t, this.style = s.style, s.style.cssText = t.cssText, o.prototype.init.call(this, s, e, a, i, r)
        },
        render: function (t, e) {
          for (var a, i = e._pt, r = e.style, n = e.ss; i;) i.r(t, i.d), i = i._next;
          for (a = r.length; --a > -1;) n[r[a]] = r[r[a]]
        },
        getRule: function (t) {
          u();
          var e, a, i, r, o = n.all ? "rules" : "cssRules",
            s = n.styleSheets,
            l = s.length,
            c = ":" === t.charAt(0);
          for (t = (c ? "" : ",") + t.split("::").join(":").toLowerCase() + ",", c && (r = []); l--;) {
            try {
              if (!(a = s[l][o])) continue;
              e = a.length
            } catch (t) {
              console.warn(t);
              continue
            }
            for (; --e > -1;)
              if ((i = a[e]).selectorText && -1 !== ("," + i.selectorText.split("::").join(":").toLowerCase() + ",").indexOf(t)) {
                if (!c) return i.style;
                r.push(i.style)
              }
          }
          return r
        },
        register: p
      };
    h() && i.registerPlugin(g);
    /*!
     * EaselPlugin 3.7.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var f, m, v, y, w, b, x = "redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(","),
      M = function () {
        return "undefined" != typeof window
      },
      z = function () {
        return f || M() && (f = window.gsap) && f.registerPlugin && f
      },
      D = function () {
        return y || v && v.createjs || v || {}
      },
      L = function (t) {
        return console.warn(t)
      },
      E = function (t) {
        var e = t.getBounds && t.getBounds();
        e || (e = t.nominalBounds || {
          x: 0,
          y: 0,
          width: 100,
          height: 100
        }, t.setBounds && t.setBounds(e.x, e.y, e.width, e.height)), t.cache && t.cache(e.x, e.y, e.width, e.height), L("EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. " + t)
      },
      A = function (t, e, a) {
        w || (w = D().ColorFilter) || L("EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.");
        for (var i, r, n, o, s, l, c = t.filters || [], d = c.length; d--;)
          if (c[d] instanceof w) {
            r = c[d];
            break
          } if (r || (r = new w, c.push(r), t.filters = c), n = r.clone(), null != e.tint) i = f.utils.splitColor(e.tint), o = null != e.tintAmount ? +e.tintAmount : 1, n.redOffset = +i[0] * o, n.greenOffset = +i[1] * o, n.blueOffset = +i[2] * o, n.redMultiplier = n.greenMultiplier = n.blueMultiplier = 1 - o;
        else
          for (s in e) "exposure" !== s && "brightness" !== s && (n[s] = +e[s]);
        for (null != e.exposure ? (n.redOffset = n.greenOffset = n.blueOffset = 255 * (+e.exposure - 1), n.redMultiplier = n.greenMultiplier = n.blueMultiplier = 1) : null != e.brightness && (o = +e.brightness - 1, n.redOffset = n.greenOffset = n.blueOffset = o > 0 ? 255 * o : 0, n.redMultiplier = n.greenMultiplier = n.blueMultiplier = 1 - Math.abs(o)), d = 8; d--;) r[s = x[d]] !== n[s] && (l = a.add(r, s, r[s], n[s])) && (l.op = "easel_colorFilter");
        a._props.push("easel_colorFilter"), t.cacheID || E(t)
      },
      T = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      C = .212671,
      _ = .71516,
      S = .072169,
      k = function (t, e) {
        if (!(t instanceof Array && e instanceof Array)) return e;
        var a, i, r = [],
          n = 0,
          o = 0;
        for (a = 0; a < 4; a++) {
          for (i = 0; i < 5; i++) o = 4 === i ? t[n + 4] : 0, r[n + i] = t[n] * e[i] + t[n + 1] * e[i + 5] + t[n + 2] * e[i + 10] + t[n + 3] * e[i + 15] + o;
          n += 5
        }
        return r
      },
      P = function (t, e, a) {
        b || (b = D().ColorMatrixFilter) || L("EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.");
        for (var i, r, n, o, s, l, c = t.filters || [], d = c.length; --d > -1;)
          if (c[d] instanceof b) {
            n = c[d];
            break
          } for (n || (n = new b(T.slice()), c.push(n), t.filters = c), r = n.matrix, i = T.slice(), null != e.colorize && (i = function (t, e, a) {
            isNaN(a) && (a = 1);
            var i = f.utils.splitColor(e),
              r = i[0] / 255,
              n = i[1] / 255,
              o = i[2] / 255,
              s = 1 - a;
            return k([s + a * r * C, a * r * _, a * r * S, 0, 0, a * n * C, s + a * n * _, a * n * S, 0, 0, a * o * C, a * o * _, s + a * o * S, 0, 0, 0, 0, 0, 1, 0], t)
          }(i, e.colorize, Number(e.colorizeAmount))), null != e.contrast && (s = i, l = Number(e.contrast), i = isNaN(l) ? s : k([l += .01, 0, 0, 0, 128 * (1 - l), 0, l, 0, 0, 128 * (1 - l), 0, 0, l, 0, 128 * (1 - l), 0, 0, 0, 1, 0], s)), null != e.hue && (i = function (t, e) {
            if (isNaN(e)) return t;
            e *= Math.PI / 180;
            var a = Math.cos(e),
              i = Math.sin(e);
            return k([C + a * (1 - C) + i * -C, _ + a * -_ + i * -_, S + a * -S + i * (1 - S), 0, 0, C + a * -C + .143 * i, _ + a * (1 - _) + .14 * i, S + a * -S + -.283 * i, 0, 0, C + a * -C + i * -(1 - C), _ + a * -_ + i * _, S + a * (1 - S) + i * S, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], t)
          }(i, Number(e.hue))), null != e.saturation && (i = function (t, e) {
            if (isNaN(e)) return t;
            var a = 1 - e,
              i = a * C,
              r = a * _,
              n = a * S;
            return k([i + e, r, n, 0, 0, i, r + e, n, 0, 0, i, r, n + e, 0, 0, 0, 0, 0, 1, 0], t)
          }(i, Number(e.saturation))), d = i.length; --d > -1;) i[d] !== r[d] && (o = a.add(r, d, r[d], i[d])) && (o.op = "easel_colorMatrixFilter");
        a._props.push("easel_colorMatrixFilter"), t.cacheID || E(), a._matrix = r
      },
      O = function (t) {
        f = t || z(), M() && (v = window), f && (m = 1)
      },
      H = {
        version: "3.7.1",
        name: "easel",
        init: function (t, e, a, i, r) {
          var n, o, s, l, c, d, h;
          for (n in m || (O(), f || L("Please gsap.registerPlugin(EaselPlugin)")), this.target = t, e)
            if (c = e[n], "colorFilter" === n || "tint" === n || "tintAmount" === n || "exposure" === n || "brightness" === n) s || (A(t, e.colorFilter || e, this), s = !0);
            else if ("saturation" === n || "contrast" === n || "hue" === n || "colorize" === n || "colorizeAmount" === n) l || (P(t, e.colorMatrixFilter || e, this), l = !0);
          else if ("frame" === n) {
            if ("string" == typeof c && "=" !== c.charAt(1) && (d = t.labels))
              for (h = 0; h < d.length; h++) d[h].label === c && (c = d[h].position);
            (o = this.add(t, "gotoAndStop", t.currentFrame, c, i, r, Math.round)) && (o.op = n)
          } else null != t[n] && this.add(t, n, "get", c)
        },
        render: function (t, e) {
          for (var a = e._pt; a;) a.r(t, a.d), a = a._next;
          e.target.cacheID && e.target.updateCache()
        },
        register: O,
        registerCreateJS: function (t) {
          y = t
        }
      };
    z() && f.registerPlugin(H);
    /*!
     * EasePack 3.7.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var V, F, B = function () {
        return V || "undefined" != typeof window && (V = window.gsap) && V.registerPlugin && V
      },
      I = function (t, e) {
        return !!(void 0 === t ? e : t && !~(t + "").indexOf("false"))
      },
      $ = function (t) {
        if (V = t || B()) {
          F = V.registerEase;
          var e, a = V.parseEase(),
            i = function (t) {
              return function (e) {
                var a = .5 + e / 2;
                t.config = function (e) {
                  return t(2 * (1 - e) * e * a + e * e)
                }
              }
            };
          for (e in a) a[e].config || i(a[e]);
          for (e in F("slow", X), F("expoScale", q), F("rough", W), G) "version" !== e && V.core.globals(e, G[e]);
          1
        }
      },
      j = function (t, e, a) {
        var i = (t = Math.min(1, t || .7)) < 1 ? e || 0 === e ? e : .7 : 0,
          r = (1 - t) / 2,
          n = r + t,
          o = I(a);
        return function (t) {
          var e = t + (.5 - t) * i;
          return t < r ? o ? 1 - (t = 1 - t / r) * t : e - (t = 1 - t / r) * t * t * t * e : t > n ? o ? 1 === t ? 0 : 1 - (t = (t - n) / r) * t : e + (t - e) * (t = (t - n) / r) * t * t * t : o ? 1 : e
        }
      },
      R = function (t, e, a) {
        var i = Math.log(e / t),
          r = e - t;
        return a && (a = V.parseEase(a)),
          function (e) {
            return (t * Math.exp(i * (a ? a(e) : e)) - t) / r
          }
      },
      N = function (t, e, a) {
        this.t = t, this.v = e, a && (this.next = a, a.prev = this, this.c = a.v - e, this.gap = a.t - t)
      },
      Y = function (t) {
        "object" != typeof t && (t = {
          points: +t || 20
        });
        for (var e, a, i, r, n, o, s, l = t.taper || "none", c = [], d = 0, h = 0 | (+t.points || 20), u = h, p = I(t.randomize, !0), g = I(t.clamp), f = V ? V.parseEase(t.template) : 0, m = .4 * (+t.strength || 1); --u > -1;) e = p ? Math.random() : 1 / h * u, a = f ? f(e) : e, i = "none" === l ? m : "out" === l ? (r = 1 - e) * r * m : "in" === l ? e * e * m : e < .5 ? (r = 2 * e) * r * .5 * m : (r = 2 * (1 - e)) * r * .5 * m, p ? a += Math.random() * i - .5 * i : u % 2 ? a += .5 * i : a -= .5 * i, g && (a > 1 ? a = 1 : a < 0 && (a = 0)), c[d++] = {
          x: e,
          y: a
        };
        for (c.sort((function (t, e) {
            return t.x - e.x
          })), o = new N(1, 1, null), u = h; u--;) n = c[u], o = new N(n.x, n.y, o);
        return s = new N(0, 0, o.t ? o : o.next),
          function (t) {
            var e = s;
            if (t > e.t) {
              for (; e.next && t >= e.t;) e = e.next;
              e = e.prev
            } else
              for (; e.prev && t <= e.t;) e = e.prev;
            return s = e, e.v + (t - e.t) / e.gap * e.c
          }
      },
      X = j(.7);
    X.ease = X, X.config = j;
    var q = R(1, 2);
    q.config = R;
    var W = Y();
    W.ease = W, W.config = Y;
    var G = {
      SlowMo: X,
      RoughEase: W,
      ExpoScaleEase: q
    };
    for (var U in G) G[U].register = $, G[U].version = "3.7.1";
    B() && V.registerPlugin(X);
    var K, Q, J, Z, tt = a(1),
      et = a(5),
      at = "x,translateX,left,marginLeft,xPercent".split(","),
      it = "y,translateY,top,marginTop,yPercent".split(","),
      rt = Math.PI / 180,
      nt = function (t, e, a, i) {
        for (var r = e.length, n = 2 === i ? 0 : i, o = 0; o < r; o++) t[n] = parseFloat(e[o][a]), 2 === i && (t[n + 1] = 0), n += 2;
        return t
      },
      ot = function (t, e, a) {
        return parseFloat(t._gsap.get(t, e, a || "px")) || 0
      },
      st = function (t) {
        var e, a = t[0],
          i = t[1];
        for (e = 2; e < t.length; e += 2) a = t[e] += a, i = t[e + 1] += i
      },
      lt = function (t, e, a, i, r, n, o, s, l) {
        "cubic" === o.type ? e = [e] : (!1 !== o.fromCurrent && e.unshift(ot(a, i, s), r ? ot(a, r, l) : 0), o.relative && st(e), e = [(r ? tt.pointsToSegment : tt.flatPointsToSegment)(e, o.curviness)]);
        return e = n(pt(e, a, o)), gt(t, a, i, e, "x", s), r && gt(t, a, r, e, "y", l), Object(tt.cacheRawPathMeasurements)(e, o.resolution || (0 === o.curviness ? 20 : 12))
      },
      ct = function (t) {
        return t
      },
      dt = /[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,
      ht = function (t, e, a) {
        var i, r, n, o = Object(et.b)(t);
        return "svg" === (t.tagName + "").toLowerCase() ? (r = (i = t.viewBox.baseVal).x, n = i.y, i.width || (i = {
          width: +t.getAttribute("width"),
          height: +t.getAttribute("height")
        })) : (i = e && t.getBBox && t.getBBox(), r = n = 0), e && "auto" !== e && (r += e.push ? e[0] * (i ? i.width : t.offsetWidth || 0) : e.x, n += e.push ? e[1] * (i ? i.height : t.offsetHeight || 0) : e.y), a.apply(r || n ? o.apply({
          x: r,
          y: n
        }) : {
          x: o.e,
          y: o.f
        })
      },
      ut = function (t, e, a, i) {
        var r, n = Object(et.b)(t.parentNode, !0, !0),
          o = n.clone().multiply(Object(et.b)(e)),
          s = ht(t, a, n),
          l = ht(e, i, n),
          c = l.x,
          d = l.y;
        return o.e = o.f = 0, "auto" === i && e.getTotalLength && "path" === e.tagName.toLowerCase() && (r = e.getAttribute("d").match(dt) || [], c += (r = o.apply({
          x: +r[0],
          y: +r[1]
        })).x, d += r.y), (r || e.getBBox && t.getBBox && e.ownerSVGElement === t.ownerSVGElement) && (c -= (r = o.apply(e.getBBox())).x, d -= r.y), o.e = c - s.x, o.f = d - s.y, o
      },
      pt = function (t, e, a) {
        var i, r, n, o = a.align,
          s = a.matrix,
          l = a.offsetX,
          c = a.offsetY,
          d = a.alignOrigin,
          h = t[0][0],
          u = t[0][1],
          p = ot(e, "x"),
          g = ot(e, "y");
        return t && t.length ? (o && ("self" === o || (i = Z(o)[0] || e) === e ? Object(tt.transformRawPath)(t, 1, 0, 0, 1, p - h, g - u) : (d && !1 !== d[2] ? K.set(e, {
          transformOrigin: 100 * d[0] + "% " + 100 * d[1] + "%"
        }) : d = [ot(e, "xPercent") / -100, ot(e, "yPercent") / -100], n = (r = ut(e, i, d, "auto")).apply({
          x: h,
          y: u
        }), Object(tt.transformRawPath)(t, r.a, r.b, r.c, r.d, p + r.e - (n.x - r.e), g + r.f - (n.y - r.f)))), s ? Object(tt.transformRawPath)(t, s.a, s.b, s.c, s.d, s.e, s.f) : (l || c) && Object(tt.transformRawPath)(t, 1, 0, 0, 1, l || 0, c || 0), t) : Object(tt.getRawPath)("M0,0L0,0")
      },
      gt = function (t, e, a, i, r, n) {
        var o = e._gsap,
          s = o.harness,
          l = s && s.aliases && s.aliases[a],
          c = l && l.indexOf(",") < 0 ? l : a,
          d = t._pt = new Q(t._pt, e, c, 0, 0, ct, 0, o.set(e, c, t));
        d.u = J(o.get(e, c, n)) || 0, d.path = i, d.pp = r, t._props.push(c)
      },
      ft = {
        version: "3.7.1",
        name: "motionPath",
        register: function (t, e, a) {
          J = (K = t).utils.getUnit, Z = K.utils.toArray, Q = a
        },
        init: function (t, e) {
          if (!K) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
          "object" == typeof e && !e.style && e.path || (e = {
            path: e
          });
          var a, i, r, n, o = [],
            s = e,
            l = s.path,
            c = s.autoRotate,
            d = s.unitX,
            h = s.unitY,
            u = s.x,
            p = s.y,
            g = l[0],
            f = (r = e.start, n = "end" in e ? e.end : 1, function (t) {
              return r || 1 !== n ? Object(tt.sliceRawPath)(t, r, n) : t
            });
          if (this.rawPaths = o, this.target = t, (this.rotate = c || 0 === c) && (this.rOffset = parseFloat(c) || 0, this.radians = !!e.useRadians, this.rProp = e.rotation || "rotation", this.rSet = t._gsap.set(t, this.rProp, this), this.ru = J(t._gsap.get(t, this.rProp)) || 0), Array.isArray(l) && !("closed" in l) && "number" != typeof g) {
            for (i in g) !u && ~at.indexOf(i) ? u = i : !p && ~it.indexOf(i) && (p = i);
            for (i in u && p ? o.push(lt(this, nt(nt([], l, u, 0), l, p, 1), t, u, p, f, e, d || J(l[0][u]), h || J(l[0][p]))) : u = p = 0, g) i !== u && i !== p && o.push(lt(this, nt([], l, i, 2), t, i, 0, f, e, J(l[0][i])))
          } else a = f(pt(Object(tt.getRawPath)(e.path), t, e)), Object(tt.cacheRawPathMeasurements)(a, e.resolution), o.push(a), gt(this, t, e.x || "x", a, "x", e.unitX || "px"), gt(this, t, e.y || "y", a, "y", e.unitY || "px")
        },
        render: function (t, e) {
          var a = e.rawPaths,
            i = a.length,
            r = e._pt;
          for (t > 1 ? t = 1 : t < 0 && (t = 0); i--;) Object(tt.getPositionOnPath)(a[i], t, !i && e.rotate, a[i]);
          for (; r;) r.set(r.t, r.p, r.path[r.pp] + r.u, r.d, t), r = r._next;
          e.rotate && e.rSet(e.target, e.rProp, a[0].angle * (e.radians ? rt : 1) + e.rOffset + e.ru, e, t)
        },
        getLength: function (t) {
          return Object(tt.cacheRawPathMeasurements)(Object(tt.getRawPath)(t)).totalLength
        },
        sliceRawPath: tt.sliceRawPath,
        getRawPath: tt.getRawPath,
        pointsToSegment: tt.pointsToSegment,
        stringToRawPath: tt.stringToRawPath,
        rawPathToString: tt.rawPathToString,
        transformRawPath: tt.transformRawPath,
        getGlobalMatrix: et.b,
        getPositionOnPath: tt.getPositionOnPath,
        cacheRawPathMeasurements: tt.cacheRawPathMeasurements,
        convertToPath: function (t, e) {
          return Z(t).map((function (t) {
            return Object(tt.convertToPath)(t, !1 !== e)
          }))
        },
        convertCoordinates: function (t, e, a) {
          var i = Object(et.b)(e, !0, !0).multiply(Object(et.b)(t));
          return a ? i.apply(a) : i
        },
        getAlignMatrix: ut,
        getRelativePosition: function (t, e, a, i) {
          var r = ut(t, e, a, i);
          return {
            x: r.e,
            y: r.f
          }
        },
        arrayToRawPath: function (t, e) {
          var a = nt(nt([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1);
          return e.relative && st(a), ["cubic" === e.type ? a : Object(tt.pointsToSegment)(a, e.curviness)]
        }
      };
    (K || "undefined" != typeof window && (K = window.gsap) && K.registerPlugin && K) && K.registerPlugin(ft);
    /*!
     * PixiPlugin 3.7.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var mt, vt, yt, wt, bt, xt, Mt, zt, Dt = function () {
        return "undefined" != typeof window
      },
      Lt = function () {
        return mt || Dt() && (mt = window.gsap) && mt.registerPlugin && mt
      },
      Et = function (t) {
        return "function" == typeof t
      },
      At = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      Tt = function (t, e) {
        var a, i, r = [],
          n = 0,
          o = 0;
        for (a = 0; a < 4; a++) {
          for (i = 0; i < 5; i++) o = 4 === i ? t[n + 4] : 0, r[n + i] = t[n] * e[i] + t[n + 1] * e[i + 5] + t[n + 2] * e[i + 10] + t[n + 3] * e[i + 15] + o;
          n += 5
        }
        return r
      },
      Ct = function (t, e) {
        var a = 1 - e,
          i = .212671 * a,
          r = .71516 * a,
          n = .072169 * a;
        return Tt([i + e, r, n, 0, 0, i, r + e, n, 0, 0, i, r, n + e, 0, 0, 0, 0, 0, 1, 0], t)
      },
      _t = function (t, e, a) {
        var i = yt(e),
          r = i[0] / 255,
          n = i[1] / 255,
          o = i[2] / 255,
          s = 1 - a;
        return Tt([s + a * r * .212671, a * r * .71516, a * r * .072169, 0, 0, a * n * .212671, s + a * n * .71516, a * n * .072169, 0, 0, a * o * .212671, a * o * .71516, s + a * o * .072169, 0, 0, 0, 0, 0, 1, 0], t)
      },
      St = function (t, e) {
        e *= Math.PI / 180;
        var a = Math.cos(e),
          i = Math.sin(e);
        return Tt([.212671 + .787329 * a + -.212671 * i, .71516 + -.71516 * a + -.71516 * i, .072169 + -.072169 * a + .927831 * i, 0, 0, .212671 + -.212671 * a + .143 * i, .71516 + .28484 * a + .14 * i, .072169 + -.072169 * a + -.283 * i, 0, 0, .212671 + -.212671 * a + -.787329 * i, .71516 + -.71516 * a + .71516 * i, .072169 + .927831 * a + .072169 * i, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], t)
      },
      kt = function (t, e) {
        return Tt([e, 0, 0, 0, .5 * (1 - e), 0, e, 0, 0, .5 * (1 - e), 0, 0, e, 0, .5 * (1 - e), 0, 0, 0, 1, 0], t)
      },
      Pt = function (t, e) {
        var a, i, r = wt.filters[e],
          n = t.filters || [],
          o = n.length;
        for (r || (i = e + " not found. PixiPlugin.registerPIXI(PIXI)", console.warn(i)); --o > -1;)
          if (n[o] instanceof r) return n[o];
        return a = new r, "BlurFilter" === e && (a.blur = 0), n.push(a), t.filters = n, a
      },
      Ot = function (t, e, a, i) {
        e.add(a, t, a[t], i[t]), e._props.push(t)
      },
      Ht = function (t, e) {
        var a = new wt.filters.ColorMatrixFilter;
        return a.matrix = e, a.brightness(t, !0), a.matrix
      },
      Vt = {
        contrast: 1,
        saturation: 1,
        colorizeAmount: 0,
        colorize: "rgb(255,255,255)",
        hue: 0,
        brightness: 1
      },
      Ft = function (t, e, a) {
        var i, r, n, o = Pt(t, "ColorMatrixFilter"),
          s = t._gsColorMatrixFilter = t._gsColorMatrixFilter || function (t) {
            var e, a = {};
            for (e in t) a[e] = t[e];
            return a
          }(Vt),
          l = e.combineCMF && !("colorMatrixFilter" in e && !e.colorMatrixFilter);
        n = o.matrix, e.resolution && (o.resolution = e.resolution), e.matrix && e.matrix.length === n.length ? (r = e.matrix, 1 !== s.contrast && Ot("contrast", a, s, Vt), s.hue && Ot("hue", a, s, Vt), 1 !== s.brightness && Ot("brightness", a, s, Vt), s.colorizeAmount && (Ot("colorize", a, s, Vt), Ot("colorizeAmount", a, s, Vt)), 1 !== s.saturation && Ot("saturation", a, s, Vt)) : (r = At.slice(), null != e.contrast ? (r = kt(r, +e.contrast), Ot("contrast", a, s, e)) : 1 !== s.contrast && (l ? r = kt(r, s.contrast) : Ot("contrast", a, s, Vt)), null != e.hue ? (r = St(r, +e.hue), Ot("hue", a, s, e)) : s.hue && (l ? r = St(r, s.hue) : Ot("hue", a, s, Vt)), null != e.brightness ? (r = Ht(+e.brightness, r), Ot("brightness", a, s, e)) : 1 !== s.brightness && (l ? r = Ht(s.brightness, r) : Ot("brightness", a, s, Vt)), null != e.colorize ? (e.colorizeAmount = "colorizeAmount" in e ? +e.colorizeAmount : 1, r = _t(r, e.colorize, e.colorizeAmount), Ot("colorize", a, s, e), Ot("colorizeAmount", a, s, e)) : s.colorizeAmount && (l ? r = _t(r, s.colorize, s.colorizeAmount) : (Ot("colorize", a, s, Vt), Ot("colorizeAmount", a, s, Vt))), null != e.saturation ? (r = Ct(r, +e.saturation), Ot("saturation", a, s, e)) : 1 !== s.saturation && (l ? r = Ct(r, s.saturation) : Ot("saturation", a, s, Vt))), i = r.length;
        for (; --i > -1;) r[i] !== n[i] && a.add(n, i, n[i], r[i], "colorMatrixFilter");
        a._props.push("colorMatrixFilter")
      },
      Bt = function (t, e) {
        var a = e.t,
          i = e.p,
          r = e.color;
        (0, e.set)(a, i, r[0] << 16 | r[1] << 8 | r[2])
      },
      It = function (t, e) {
        var a = e.g;
        a && (a.dirty++, a.clearDirty++)
      },
      $t = function (t, e) {
        e.t.visible = !!e.t.alpha
      },
      jt = function (t, e, a, i) {
        var r = t[e],
          n = yt(Et(r) ? t[e.indexOf("set") || !Et(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)]() : r),
          o = yt(a);
        i._pt = new bt(i._pt, t, e, 0, 0, Bt, {
          t: t,
          p: e,
          color: n,
          set: xt(t, e)
        }), i.add(n, 0, n[0], o[0]), i.add(n, 1, n[1], o[1]), i.add(n, 2, n[2], o[2])
      },
      Rt = {
        tint: 1,
        lineColor: 1,
        fillColor: 1
      },
      Nt = "position,scale,skew,pivot,anchor,tilePosition,tileScale".split(","),
      Yt = {
        x: "position",
        y: "position",
        tileX: "tilePosition",
        tileY: "tilePosition"
      },
      Xt = {
        colorMatrixFilter: 1,
        saturation: 1,
        contrast: 1,
        hue: 1,
        colorize: 1,
        colorizeAmount: 1,
        brightness: 1,
        combineCMF: 1
      },
      qt = Math.PI / 180,
      Wt = function (t) {
        return "string" == typeof t
      },
      Gt = function (t) {
        return Wt(t) && "=" === t.charAt(1) ? t.substr(0, 2) + parseFloat(t.substr(2)) * qt : t * qt
      },
      Ut = function (t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e5 * (e.s + e.c * t)) / 1e5, e)
      },
      Kt = function (t, e, a, i, r, n) {
        var o, s, l = 360 * (n ? qt : 1),
          c = Wt(r),
          d = c && "=" === r.charAt(1) ? +(r.charAt(0) + "1") : 0,
          h = parseFloat(d ? r.substr(2) : r) * (n ? qt : 1),
          u = d ? h * d : h - i,
          p = i + u;
        return c && ("short" === (o = r.split("_")[1]) && (u %= l) !== u % (l / 2) && (u += u < 0 ? l : -l), "cw" === o && u < 0 ? u = (u + 1e10 * l) % l - ~~(u / l) * l : "ccw" === o && u > 0 && (u = (u - 1e10 * l) % l - ~~(u / l) * l)), t._pt = s = new bt(t._pt, e, a, i, u, Ut), s.e = p, s
      },
      Qt = function () {
        Dt() && (vt = window, mt = Lt(), wt = wt || vt.PIXI, yt = function (t) {
          return mt.utils.splitColor("0x" === (t + "").substr(0, 2) ? "#" + t.substr(2) : t)
        })
      };
    for (Mt = 0; Mt < Nt.length; Mt++) zt = Nt[Mt], Yt[zt + "X"] = zt, Yt[zt + "Y"] = zt;
    var Jt = {
      version: "3.7.1",
      name: "pixi",
      register: function (t, e, a) {
        mt = t, bt = a, xt = e.getSetter, Qt()
      },
      registerPIXI: function (t) {
        wt = t
      },
      init: function (t, e, a, i, r) {
        if (wt || Qt(), !t instanceof wt.DisplayObject) return !1;
        var n, o, s, l, c, d, h, u, p, g = "4" === wt.VERSION.charAt(0);
        for (d in e) {
          if (n = Yt[d], s = e[d], n) o = ~d.charAt(d.length - 1).toLowerCase().indexOf("x") ? "x" : "y", this.add(t[n], o, t[n][o], "skew" === n ? Gt(s) : s);
          else if ("scale" === d || "anchor" === d || "pivot" === d || "tileScale" === d) this.add(t[d], "x", t[d].x, s), this.add(t[d], "y", t[d].y, s);
          else if ("rotation" === d || "angle" === d) Kt(this, t, d, t[d], s, "rotation" === d);
          else if (Xt[d]) l || (Ft(t, e.colorMatrixFilter || e, this), l = !0);
          else if ("blur" === d || "blurX" === d || "blurY" === d || "blurPadding" === d) {
            if (c = Pt(t, "BlurFilter"), this.add(c, d, c[d], s), 0 !== e.blurPadding)
              for (h = e.blurPadding || 2 * Math.max(c[d], s), u = t.filters.length; --u > -1;) t.filters[u].padding = Math.max(t.filters[u].padding, h)
          } else if (Rt[d])
            if (("lineColor" === d || "fillColor" === d) && t instanceof wt.Graphics)
              for (p = (t.geometry || t).graphicsData, this._pt = new bt(this._pt, t, d, 0, 0, It, {
                  g: t.geometry || t
                }), u = p.length; --u > -1;) jt(g ? p[u] : p[u][d.substr(0, 4) + "Style"], g ? d : "color", s, this);
            else jt(t, d, s, this);
          else "autoAlpha" === d ? (this._pt = new bt(this._pt, t, "visible", 0, 0, $t), this.add(t, "alpha", t.alpha, s), this._props.push("alpha", "visible")) : "resolution" !== d && this.add(t, d, "get", s);
          this._props.push(d)
        }
      }
    };
    Lt() && mt.registerPlugin(Jt);
    /*!
     * ScrollToPlugin 3.7.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Zt, te, ee, ae, ie, re, ne, oe = function () {
        return "undefined" != typeof window
      },
      se = function () {
        return Zt || oe() && (Zt = window.gsap) && Zt.registerPlugin && Zt
      },
      le = function (t) {
        return "string" == typeof t
      },
      ce = function (t) {
        return "function" == typeof t
      },
      de = function (t, e) {
        var a = "x" === e ? "Width" : "Height",
          i = "scroll" + a,
          r = "client" + a;
        return t === ee || t === ae || t === ie ? Math.max(ae[i], ie[i]) - (ee["inner" + a] || ae[r] || ie[r]) : t[i] - t["offset" + a]
      },
      he = function (t, e) {
        var a = "scroll" + ("x" === e ? "Left" : "Top");
        return t === ee && (null != t.pageXOffset ? a = "page" + e.toUpperCase() + "Offset" : t = null != ae[a] ? ae : ie),
          function () {
            return t[a]
          }
      },
      ue = function (t, e) {
        if (!(t = re(t)[0]) || !t.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
          x: 0,
          y: 0
        };
        var a = t.getBoundingClientRect(),
          i = !e || e === ee || e === ie,
          r = i ? {
            top: ae.clientTop - (ee.pageYOffset || ae.scrollTop || ie.scrollTop || 0),
            left: ae.clientLeft - (ee.pageXOffset || ae.scrollLeft || ie.scrollLeft || 0)
          } : e.getBoundingClientRect(),
          n = {
            x: a.left - r.left,
            y: a.top - r.top
          };
        return !i && e && (n.x += he(e, "x")(), n.y += he(e, "y")()), n
      },
      pe = function (t, e, a, i, r) {
        return isNaN(t) || "object" == typeof t ? le(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + i - r : "max" === t ? de(e, a) - r : Math.min(de(e, a), ue(t, e)[a] - r) : parseFloat(t) - r
      },
      ge = function () {
        Zt = se(), oe() && Zt && document.body && (ee = window, ie = document.body, ae = document.documentElement, re = Zt.utils.toArray, Zt.config({
          autoKillThreshold: 7
        }), ne = Zt.config(), te = 1)
      },
      fe = {
        version: "3.7.1",
        name: "scrollTo",
        rawVars: 1,
        register: function (t) {
          Zt = t, ge()
        },
        init: function (t, e, a, i, r) {
          te || ge();
          var n = Zt.getProperty(t, "scrollSnapType");
          this.isWin = t === ee, this.target = t, this.tween = a, e = function (t, e, a, i) {
            if (ce(t) && (t = t(e, a, i)), "object" != typeof t) return le(t) && "max" !== t && "=" !== t.charAt(1) ? {
              x: t,
              y: t
            } : {
              y: t
            };
            if (t.nodeType) return {
              y: t,
              x: t
            };
            var r, n = {};
            for (r in t) n[r] = "onAutoKill" !== r && ce(t[r]) ? t[r](e, a, i) : t[r];
            return n
          }(e, i, t, r), this.vars = e, this.autoKill = !!e.autoKill, this.getX = he(t, "x"), this.getY = he(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), n && "none" !== n && (this.snap = 1, this.snapInline = t.style.scrollSnapType, t.style.scrollSnapType = "none"), null != e.x ? (this.add(this, "x", this.x, pe(e.x, t, "x", this.x, e.offsetX || 0), i, r), this._props.push("scrollTo_x")) : this.skipX = 1, null != e.y ? (this.add(this, "y", this.y, pe(e.y, t, "y", this.y, e.offsetY || 0), i, r), this._props.push("scrollTo_y")) : this.skipY = 1
        },
        render: function (t, e) {
          for (var a, i, r, n, o, s = e._pt, l = e.target, c = e.tween, d = e.autoKill, h = e.xPrev, u = e.yPrev, p = e.isWin, g = e.snap, f = e.snapInline; s;) s.r(t, s.d), s = s._next;
          a = p || !e.skipX ? e.getX() : h, r = (i = p || !e.skipY ? e.getY() : u) - u, n = a - h, o = ne.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), d && (!e.skipX && (n > o || n < -o) && a < de(l, "x") && (e.skipX = 1), !e.skipY && (r > o || r < -o) && i < de(l, "y") && (e.skipY = 1), e.skipX && e.skipY && (c.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(c, e.vars.onAutoKillParams || []))), p ? ee.scrollTo(e.skipX ? a : e.x, e.skipY ? i : e.y) : (e.skipY || (l.scrollTop = e.y), e.skipX || (l.scrollLeft = e.x)), !g || 1 !== t && 0 !== t || (i = l.scrollTop, a = l.scrollLeft, f ? l.style.scrollSnapType = f : l.style.removeProperty("scroll-snap-type"), l.scrollTop = i + 1, l.scrollLeft = a + 1, l.scrollTop = i, l.scrollLeft = a), e.xPrev = e.x, e.yPrev = e.y
        },
        kill: function (t) {
          var e = "scrollTo" === t;
          (e || "scrollTo_x" === t) && (this.skipX = 1), (e || "scrollTo_y" === t) && (this.skipY = 1)
        }
      };
    fe.max = de, fe.getOffset = ue, fe.buildGetter = he, se() && Zt.registerPlugin(fe);
    /*!
     * ScrollTrigger 3.7.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var me, ve, ye, we, be, xe, Me, ze, De, Le, Ee, Ae, Te, Ce, _e, Se, ke, Pe, Oe, He, Ve, Fe, Be, Ie, $e, je, Re, Ne, Ye = 1,
      Xe = [],
      qe = [],
      We = Date.now,
      Ge = We(),
      Ue = 0,
      Ke = 1,
      Qe = function (t) {
        return t
      },
      Je = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0
      },
      Ze = function () {
        return "undefined" != typeof window
      },
      ta = function () {
        return me || Ze() && (me = window.gsap) && me.registerPlugin && me
      },
      ea = function (t) {
        return !!~Me.indexOf(t)
      },
      aa = function (t, e) {
        return ~Xe.indexOf(t) && Xe[Xe.indexOf(t) + 1][e]
      },
      ia = function (t, e) {
        var a = e.s,
          i = e.sc,
          r = qe.indexOf(t),
          n = i === va.sc ? 1 : 2;
        return !~r && (r = qe.push(t) - 1), qe[r + n] || (qe[r + n] = aa(t, a) || (ea(t) ? i : function (e) {
          return arguments.length ? t[a] = e : t[a]
        }))
      },
      ra = function (t) {
        return aa(t, "getBoundingClientRect") || (ea(t) ? function () {
          return ai.width = ye.innerWidth, ai.height = ye.innerHeight, ai
        } : function () {
          return ba(t)
        })
      },
      na = function (t, e) {
        var a = e.s,
          i = e.d2,
          r = e.d,
          n = e.a;
        return (a = "scroll" + i) && (n = aa(t, a)) ? n() - ra(t)()[r] : ea(t) ? Math.max(be[a], xe[a]) - (ye["inner" + i] || be["client" + i] || xe["client" + i]) : t[a] - t["offset" + i]
      },
      oa = function (t, e) {
        for (var a = 0; a < Ve.length; a += 3)(!e || ~e.indexOf(Ve[a + 1])) && t(Ve[a], Ve[a + 1], Ve[a + 2])
      },
      sa = function (t) {
        return "string" == typeof t
      },
      la = function (t) {
        return "function" == typeof t
      },
      ca = function (t) {
        return "number" == typeof t
      },
      da = function (t) {
        return "object" == typeof t
      },
      ha = function (t) {
        return la(t) && t()
      },
      ua = function (t, e) {
        return function () {
          var a = ha(t),
            i = ha(e);
          return function () {
            ha(a), ha(i)
          }
        }
      },
      pa = Math.abs,
      ga = "padding",
      fa = "px",
      ma = {
        s: "scrollLeft",
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: function (t) {
          return arguments.length ? ye.scrollTo(t, va.sc()) : ye.pageXOffset || we.scrollLeft || be.scrollLeft || xe.scrollLeft || 0
        }
      },
      va = {
        s: "scrollTop",
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: ma,
        sc: function (t) {
          return arguments.length ? ye.scrollTo(ma.sc(), t) : ye.pageYOffset || we.scrollTop || be.scrollTop || xe.scrollTop || 0
        }
      },
      ya = function (t) {
        return ye.getComputedStyle(t)
      },
      wa = function (t, e) {
        for (var a in e) a in t || (t[a] = e[a]);
        return t
      },
      ba = function (t, e) {
        var a = e && "matrix(1, 0, 0, 1, 0, 0)" !== ya(t)[ke] && me.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
          }).progress(1),
          i = t.getBoundingClientRect();
        return a && a.progress(0).kill(), i
      },
      xa = function (t, e) {
        var a = e.d2;
        return t["offset" + a] || t["client" + a] || 0
      },
      Ma = function (t) {
        var e, a = [],
          i = t.labels,
          r = t.duration();
        for (e in i) a.push(i[e] / r);
        return a
      },
      za = function (t, e, a, i) {
        return a.split(",").forEach((function (a) {
          return t(e, a, i)
        }))
      },
      Da = function (t, e, a) {
        return t.addEventListener(e, a, {
          passive: !0
        })
      },
      La = function (t, e, a) {
        return t.removeEventListener(e, a)
      },
      Ea = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
      },
      Aa = {
        toggleActions: "play",
        anticipatePin: 0
      },
      Ta = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
      },
      Ca = function (t, e) {
        if (sa(t)) {
          var a = t.indexOf("="),
            i = ~a ? +(t.charAt(a - 1) + 1) * parseFloat(t.substr(a + 1)) : 0;
          ~a && (t.indexOf("%") > a && (i *= e / 100), t = t.substr(0, a - 1)), t = i + (t in Ta ? Ta[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
        }
        return t
      },
      _a = function (t, e, a, i, r, n, o) {
        var s = r.startColor,
          l = r.endColor,
          c = r.fontSize,
          d = r.indent,
          h = r.fontWeight,
          u = we.createElement("div"),
          p = ea(a) || "fixed" === aa(a, "pinType"),
          g = -1 !== t.indexOf("scroller"),
          f = p ? xe : a,
          m = -1 !== t.indexOf("start"),
          v = m ? s : l,
          y = "border-color:" + v + ";font-size:" + c + ";color:" + v + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return y += "position:" + (g && p ? "fixed;" : "absolute;"), (g || !p) && (y += (i === va ? "right" : "bottom") + ":" + (n + parseFloat(d)) + "px;"), o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), u._isStart = m, u.setAttribute("class", "gsap-marker-" + t), u.style.cssText = y, u.innerText = e || 0 === e ? t + "-" + e : t, f.children[0] ? f.insertBefore(u, f.children[0]) : f.appendChild(u), u._offset = u["offset" + i.op.d2], Sa(u, 0, i, m), u
      },
      Sa = function (t, e, a, i) {
        var r = {
            display: "block"
          },
          n = a[i ? "os2" : "p2"],
          o = a[i ? "p2" : "os2"];
        t._isFlipped = i, r[a.a + "Percent"] = i ? -100 : 0, r[a.a] = i ? "1px" : 0, r["border" + n + "Width"] = 1, r["border" + o + "Width"] = 0, r[a.p] = e + "px", me.set(t, r)
      },
      ka = [],
      Pa = {},
      Oa = function () {
        return Le || (Le = De(Ua))
      },
      Ha = function () {
        Le || (Le = De(Ua), Ue || Ra("scrollStart"), Ue = We())
      },
      Va = function () {
        return !_e && !Ie && !we.fullscreenElement && ze.restart(!0)
      },
      Fa = {},
      Ba = [],
      Ia = [],
      $a = function (t) {
        var e, a = me.ticker.frame,
          i = [],
          r = 0;
        if (Re !== a || Ye) {
          for (Xa(); r < Ia.length; r += 4)(e = ye.matchMedia(Ia[r]).matches) !== Ia[r + 3] && (Ia[r + 3] = e, e ? i.push(r) : Xa(1, Ia[r]) || la(Ia[r + 2]) && Ia[r + 2]());
          for (Ya(), r = 0; r < i.length; r++) e = i[r], je = Ia[e], Ia[e + 2] = Ia[e + 1](t);
          je = 0, ve && qa(0, 1), Re = a, Ra("matchMedia")
        }
      },
      ja = function t() {
        return La(si, "scrollEnd", t) || qa(!0)
      },
      Ra = function (t) {
        return Fa[t] && Fa[t].map((function (t) {
          return t()
        })) || Ba
      },
      Na = [],
      Ya = function (t) {
        for (var e = 0; e < Na.length; e += 5) t && Na[e + 4] !== t || (Na[e].style.cssText = Na[e + 1], Na[e].getBBox && Na[e].setAttribute("transform", Na[e + 2] || ""), Na[e + 3].uncache = 1)
      },
      Xa = function (t, e) {
        var a;
        for (Pe = 0; Pe < ka.length; Pe++) a = ka[Pe], e && a.media !== e || (t ? a.kill(1) : a.revert());
        e && Ya(e), e || Ra("revert")
      },
      qa = function (t, e) {
        if (!Ue || t) {
          Ne = !0;
          var a = Ra("refreshInit");
          Fe && si.sort(), e || Xa(), ka.forEach((function (t) {
            return t.refresh()
          })), a.forEach((function (t) {
            return t && t.render && t.render(-1)
          })), qe.forEach((function (t) {
            return "function" == typeof t && (t.rec = 0)
          })), ze.pause(), Ne = !1, Ra("refresh")
        } else Da(si, "scrollEnd", ja)
      },
      Wa = 0,
      Ga = 1,
      Ua = function () {
        if (!Ne) {
          var t = ka.length,
            e = We(),
            a = e - Ge >= 50,
            i = t && ka[0].scroll();
          if (Ga = Wa > i ? -1 : 1, Wa = i, a && (Ue && !Se && e - Ue > 200 && (Ue = 0, Ra("scrollEnd")), Te = Ge, Ge = e), Ga < 0) {
            for (Pe = t; Pe-- > 0;) ka[Pe] && ka[Pe].update(0, a);
            Ga = 1
          } else
            for (Pe = 0; Pe < t; Pe++) ka[Pe] && ka[Pe].update(0, a);
          Le = 0
        }
      },
      Ka = ["left", "top", "bottom", "right", "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end", "grid-area", "justify-self", "align-self", "place-self"],
      Qa = Ka.concat(["width", "height", "boxSizing", "maxWidth", "maxHeight", "position", "margin", ga, ga + "Top", ga + "Right", ga + "Bottom", ga + "Left"]),
      Ja = function (t, e, a, i) {
        if (t.parentNode !== e) {
          for (var r, n = Ka.length, o = e.style, s = t.style; n--;) o[r = Ka[n]] = a[r];
          o.position = "absolute" === a.position ? "absolute" : "relative", "inline" === a.display && (o.display = "inline-block"), s.bottom = s.right = "auto", o.overflow = "visible", o.boxSizing = "border-box", o.width = xa(t, ma) + fa, o.height = xa(t, va) + fa, o[ga] = s.margin = s.top = s.left = "0", ti(i), s.width = s.maxWidth = a.width, s.height = s.maxHeight = a.height, s[ga] = a[ga], t.parentNode.insertBefore(e, t), e.appendChild(t)
        }
      },
      Za = /([A-Z])/g,
      ti = function (t) {
        if (t) {
          var e, a, i = t.t.style,
            r = t.length,
            n = 0;
          for ((t.t._gsap || me.core.getCache(t.t)).uncache = 1; n < r; n += 2) a = t[n + 1], e = t[n], a ? i[e] = a : i[e] && i.removeProperty(e.replace(Za, "-$1").toLowerCase())
        }
      },
      ei = function (t) {
        for (var e = Qa.length, a = t.style, i = [], r = 0; r < e; r++) i.push(Qa[r], a[Qa[r]]);
        return i.t = t, i
      },
      ai = {
        left: 0,
        top: 0
      },
      ii = function (t, e, a, i, r, n, o, s, l, c, d, h) {
        if (la(t) && (t = t(s)), sa(t) && "max" === t.substr(0, 3) && (t = h + ("=" === t.charAt(4) ? Ca("0" + t.substr(3), a) : 0)), ca(t)) o && Sa(o, a, i, !0);
        else {
          la(e) && (e = e(s));
          var u, p, g, f = Ee(e)[0] || xe,
            m = ba(f) || {},
            v = t.split(" ");
          m && (m.left || m.top) || "none" !== ya(f).display || (g = f.style.display, f.style.display = "block", m = ba(f), g ? f.style.display = g : f.style.removeProperty("display")), u = Ca(v[0], m[i.d]), p = Ca(v[1] || "0", a), t = m[i.p] - l[i.p] - c + u + r - p, o && Sa(o, p, i, a - p < 20 || o._isStart && p > 20), a -= a - p
        }
        if (n) {
          var y = t + a,
            w = n._isStart;
          h = "scroll" + i.d2, Sa(n, y, i, w && y > 20 || !w && (d ? Math.max(xe[h], be[h]) : n.parentNode[h]) <= y + 1), d && (l = ba(o), d && (n.style[i.op.p] = l[i.op.p] - i.op.m - n._offset + fa))
        }
        return Math.round(t)
      },
      ri = /(?:webkit|moz|length|cssText|inset)/i,
      ni = function (t, e, a, i) {
        if (t.parentNode !== e) {
          var r, n, o = t.style;
          if (e === xe) {
            for (r in t._stOrig = o.cssText, n = ya(t)) + r || ri.test(r) || !n[r] || "string" != typeof o[r] || "0" === r || (o[r] = n[r]);
            o.top = a, o.left = i
          } else o.cssText = t._stOrig;
          me.core.getCache(t).uncache = 1, e.appendChild(t)
        }
      },
      oi = function (t, e) {
        var a, i, r = ia(t, e),
          n = "_scroll" + e.p2,
          o = function e(o, s, l, c, d) {
            var h = e.tween,
              u = s.onComplete,
              p = {};
            return h && h.kill(), a = Math.round(l), s[n] = o, s.modifiers = p, p[n] = function (t) {
              return (t = Je(r())) !== a && t !== i && Math.abs(t - a) > 2 ? (h.kill(), e.tween = 0) : t = l + c * h.ratio + d * h.ratio * h.ratio, i = a, a = Je(t)
            }, s.onComplete = function () {
              e.tween = 0, u && u.call(h)
            }, h = e.tween = me.to(t, s)
          };
        return t[n] = r, t.addEventListener("wheel", (function () {
          return o.tween && o.tween.kill() && (o.tween = 0)
        }), {
          passive: !0
        }), o
      };
    ma.op = va;
    var si = function () {
      function t(e, a) {
        ve || t.register(me) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, a)
      }
      return t.prototype.init = function (e, a) {
        if (this.progress = this.start = 0, this.vars && this.kill(1), Ke) {
          var i, r, n, o, s, l, c, d, h, u, p, g, f, m, v, y, w, b, x, M, z, D, L, E, A, T, C, _, S, k, P, O, H, V, F, B, I, $, j, R = (e = wa(sa(e) || ca(e) || e.nodeType ? {
              trigger: e
            } : e, Aa)).horizontal ? ma : va,
            N = e,
            Y = N.onUpdate,
            X = N.toggleClass,
            q = N.id,
            W = N.onToggle,
            G = N.onRefresh,
            U = N.scrub,
            K = N.trigger,
            Q = N.pin,
            J = N.pinSpacing,
            Z = N.invalidateOnRefresh,
            tt = N.anticipatePin,
            et = N.onScrubComplete,
            at = N.onSnapComplete,
            it = N.once,
            rt = N.snap,
            nt = N.pinReparent,
            ot = !U && 0 !== U,
            st = Ee(e.scroller || ye)[0],
            lt = me.core.getCache(st),
            ct = ea(st),
            dt = "pinType" in e ? "fixed" === e.pinType : ct || "fixed" === aa(st, "pinType"),
            ht = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            ut = ot && e.toggleActions.split(" "),
            pt = "markers" in e ? e.markers : Aa.markers,
            gt = ct ? 0 : parseFloat(ya(st)["border" + R.p2 + "Width"]) || 0,
            ft = this,
            mt = e.onRefreshInit && function () {
              return e.onRefreshInit(ft)
            },
            vt = function (t, e, a) {
              var i = a.d,
                r = a.d2,
                n = a.a;
              return (n = aa(t, "getBoundingClientRect")) ? function () {
                return n()[i]
              } : function () {
                return (e ? ye["inner" + r] : t["client" + r]) || 0
              }
            }(st, ct, R),
            yt = function (t, e) {
              return !e || ~Xe.indexOf(t) ? ra(t) : function () {
                return ai
              }
            }(st, ct),
            wt = 0;
          ft.media = je, tt *= 45, ft.scroller = st, ft.scroll = ia(st, R), o = ft.scroll(), ft.vars = e, a = a || e.animation, "refreshPriority" in e && (Fe = 1), lt.tweenScroll = lt.tweenScroll || {
            top: oi(st, va),
            left: oi(st, ma)
          }, ft.tweenTo = i = lt.tweenScroll[R.p], a && (a.vars.lazy = !1, a._initted || !1 !== a.vars.immediateRender && !1 !== e.immediateRender && a.render(0, !0, !0), ft.animation = a.pause(), a.scrollTrigger = ft, (P = ca(U) && U) && (k = me.to(a, {
            ease: "power3",
            duration: P,
            onComplete: function () {
              return et && et(ft)
            }
          })), _ = 0, q || (q = a.vars.id)), ka.push(ft), rt && (da(rt) && !rt.push || (rt = {
            snapTo: rt
          }), "scrollBehavior" in xe.style && me.set(ct ? [xe, be] : st, {
            scrollBehavior: "auto"
          }), n = la(rt.snapTo) ? rt.snapTo : "labels" === rt.snapTo ? function (t) {
            return function (e) {
              return me.utils.snap(Ma(t), e)
            }
          }(a) : "labelsDirectional" === rt.snapTo ? (I = a, function (t, e) {
            var a, i = Ma(I);
            if (i.sort((function (t, e) {
                return t - e
              })), e.direction > 0) {
              for (t -= 1e-4, a = 0; a < i.length; a++)
                if (i[a] >= t) return i[a];
              return i.pop()
            }
            for (a = i.length, t += 1e-4; a--;)
              if (i[a] <= t) return i[a];
            return i[0]
          }) : me.utils.snap(rt.snapTo), O = rt.duration || {
            min: .1,
            max: 2
          }, O = da(O) ? Ae(O.min, O.max) : Ae(O, O), H = me.delayedCall(rt.delay || P / 2 || .1, (function () {
            if (Math.abs(ft.getVelocity()) < 10 && !Se && wt !== ft.scroll()) {
              var t = a && !ot ? a.totalProgress() : ft.progress,
                e = (t - S) / (We() - Te) * 1e3 || 0,
                r = me.utils.clamp(-ft.progress, 1 - ft.progress, pa(e / 2) * e / .185),
                o = ft.progress + (!1 === rt.inertia ? 0 : r),
                s = Ae(0, 1, n(o, ft)),
                d = ft.scroll(),
                h = Math.round(l + s * f),
                u = rt,
                p = u.onStart,
                g = u.onInterrupt,
                m = u.onComplete,
                v = i.tween;
              if (d <= c && d >= l && h !== d) {
                if (v && !v._initted && v.data <= Math.abs(h - d)) return;
                !1 === rt.inertia && (r = s - ft.progress), i(h, {
                  duration: O(pa(.185 * Math.max(pa(o - t), pa(s - t)) / e / .05 || 0)),
                  ease: rt.ease || "power3",
                  data: Math.abs(h - d),
                  onInterrupt: function () {
                    return H.restart(!0) && g && g(ft)
                  },
                  onComplete: function () {
                    wt = ft.scroll(), _ = S = a && !ot ? a.totalProgress() : ft.progress, at && at(ft), m && m(ft)
                  }
                }, d, r * f, h - d - r * f), p && p(ft, i.tween)
              }
            } else ft.isActive && H.restart(!0)
          })).pause()), q && (Pa[q] = ft), K = ft.trigger = Ee(K || Q)[0], Q = !0 === Q ? K : Ee(Q)[0], sa(X) && (X = {
            targets: K,
            className: X
          }), Q && (!1 === J || "margin" === J || (J = !(!J && "flex" === ya(Q.parentNode).display) && ga), ft.pin = Q, !1 !== e.force3D && me.set(Q, {
            force3D: !0
          }), (r = me.core.getCache(Q)).spacer ? m = r.pinState : (r.spacer = w = we.createElement("div"), w.setAttribute("class", "pin-spacer" + (q ? " pin-spacer-" + q : "")), r.pinState = m = ei(Q)), ft.spacer = w = r.spacer, C = ya(Q), L = C[J + R.os2], x = me.getProperty(Q), M = me.quickSetter(Q, R.a, fa), Ja(Q, w, C), y = ei(Q)), pt && (g = da(pt) ? wa(pt, Ea) : Ea, u = _a("scroller-start", q, st, R, g, 0), p = _a("scroller-end", q, st, R, g, 0, u), b = u["offset" + R.op.d2], d = _a("start", q, st, R, g, b), h = _a("end", q, st, R, g, b), dt || Xe.length && !0 === aa(st, "fixedMarkers") || (j = ya($ = ct ? xe : st).position, $.style.position = "absolute" === j || "fixed" === j ? j : "relative", me.set([u, p], {
            force3D: !0
          }), A = me.quickSetter(u, R.a, fa), T = me.quickSetter(p, R.a, fa))), ft.revert = function (t) {
            var e = !1 !== t || !ft.enabled,
              i = _e;
            e !== ft.isReverted && (e && (ft.scroll.rec || (ft.scroll.rec = ft.scroll()), F = Math.max(ft.scroll(), ft.scroll.rec || 0), V = ft.progress, B = a && a.progress()), d && [d, h, u, p].forEach((function (t) {
              return t.style.display = e ? "none" : "block"
            })), e && (_e = 1), ft.update(e), _e = i, Q && (e ? function (t, e, a) {
              if (ti(a), t.parentNode === e) {
                var i = e.parentNode;
                i && (i.insertBefore(t, e), i.removeChild(e))
              }
            }(Q, w, m) : (!nt || !ft.isActive) && Ja(Q, w, ya(Q), E)), ft.isReverted = e)
          }, ft.refresh = function (i, r) {
            if (!_e && ft.enabled || r)
              if (Q && i && Ue) Da(t, "scrollEnd", ja);
              else {
                _e = 1, k && k.pause(), Z && a && a.progress(0).invalidate(), ft.isReverted || ft.revert();
                for (var n, g, b, M, L, A, T, C, _, S, P = vt(), O = yt(), H = na(st, R), I = 0, $ = 0, j = e.end, N = e.endTrigger || K, Y = e.start || (0 !== e.start && K ? Q ? "0 0" : "0 100%" : 0), X = e.pinnedContainer && Ee(e.pinnedContainer)[0], q = K && Math.max(0, ka.indexOf(ft)) || 0, W = q; W--;)(A = ka[W]).end || A.refresh(0, 1) || (_e = 1), !(T = A.pin) || T !== K && T !== Q || A.isReverted || (S || (S = []), S.unshift(A), A.revert());
                for (l = ii(Y, K, P, R, ft.scroll(), d, u, ft, O, gt, dt, H) || (Q ? -.001 : 0), la(j) && (j = j(ft)), sa(j) && !j.indexOf("+=") && (~j.indexOf(" ") ? j = (sa(Y) ? Y.split(" ")[0] : "") + j : (I = Ca(j.substr(2), P), j = sa(Y) ? Y : l + I, N = K)), c = Math.max(l, ii(j || (N ? "100% 0" : H), N, P, R, ft.scroll() + I, h, p, ft, O, gt, dt, H)) || -.001, f = c - l || (l -= .01) && .001, I = 0, W = q; W--;)(T = (A = ka[W]).pin) && A.start - A._pinPush < l && (n = A.end - A.start, (T === K || T === X) && (I += n), T === Q && ($ += n));
                if (l += I, c += I, ft._pinPush = $, d && I && ((n = {})[R.a] = "+=" + I, X && (n[R.p] = "-=" + ft.scroll()), me.set([d, h], n)), Q) n = ya(Q), M = R === va, b = ft.scroll(), z = parseFloat(x(R.a)) + $, !H && c > 1 && ((ct ? xe : st).style["overflow-" + R.a] = "scroll"), Ja(Q, w, n), y = ei(Q), g = ba(Q, !0), C = dt && ia(st, M ? ma : va)(), J && ((E = [J + R.os2, f + $ + fa]).t = w, (W = J === ga ? xa(Q, R) + f + $ : 0) && E.push(R.d, W + fa), ti(E), dt && ft.scroll(F)), dt && ((L = {
                  top: g.top + (M ? b - l : C) + fa,
                  left: g.left + (M ? C : b - l) + fa,
                  boxSizing: "border-box",
                  position: "fixed"
                }).width = L.maxWidth = Math.ceil(g.width) + fa, L.height = L.maxHeight = Math.ceil(g.height) + fa, L.margin = L.marginTop = L.marginRight = L.marginBottom = L.marginLeft = "0", L[ga] = n[ga], L[ga + "Top"] = n[ga + "Top"], L[ga + "Right"] = n[ga + "Right"], L[ga + "Bottom"] = n[ga + "Bottom"], L[ga + "Left"] = n[ga + "Left"], v = function (t, e, a) {
                  for (var i, r = [], n = t.length, o = a ? 8 : 0; o < n; o += 2) i = t[o], r.push(i, i in e ? e[i] : t[o + 1]);
                  return r.t = t.t, r
                }(m, L, nt)), a ? (_ = a._initted, Be(1), a.render(a.duration(), !0, !0), D = x(R.a) - z + f + $, f !== D && v.splice(v.length - 2, 2), a.render(0, !0, !0), _ || a.invalidate(), Be(0)) : D = f;
                else if (K && ft.scroll())
                  for (g = K.parentNode; g && g !== xe;) g._pinOffset && (l -= g._pinOffset, c -= g._pinOffset), g = g.parentNode;
                S && S.forEach((function (t) {
                  return t.revert(!1)
                })), ft.start = l, ft.end = c, (o = s = ft.scroll()) < F && ft.scroll(F), ft.revert(!1), _e = 0, a && ot && a._initted && a.progress() !== B && a.progress(B, !0).render(a.time(), !0, !0), V !== ft.progress && (k && a.totalProgress(V, !0), ft.progress = V, ft.update()), Q && J && (w._pinOffset = Math.round(ft.progress * D)), G && G(ft)
              }
          }, ft.getVelocity = function () {
            return (ft.scroll() - s) / (We() - Te) * 1e3 || 0
          }, ft.update = function (t, e) {
            var r, n, d, h, p, g = ft.scroll(),
              m = t ? 0 : (g - l) / f,
              b = m < 0 ? 0 : m > 1 ? 1 : m || 0,
              x = ft.progress;
            if (e && (s = o, o = g, rt && (S = _, _ = a && !ot ? a.totalProgress() : b)), tt && !b && Q && !_e && !Ye && Ue && l < g + (g - s) / (We() - Te) * tt && (b = 1e-4), b !== x && ft.enabled) {
              if (h = (p = (r = ft.isActive = !!b && b < 1) !== (!!x && x < 1)) || !!b != !!x, ft.direction = b > x ? 1 : -1, ft.progress = b, ot || (!k || _e || Ye ? a && a.totalProgress(b, !!_e) : (k.vars.totalProgress = b, k.invalidate().restart())), Q)
                if (t && J && (w.style[J + R.os2] = L), dt) {
                  if (h) {
                    if (d = !t && b > x && c + 1 > g && g + 1 >= na(st, R), nt)
                      if (t || !r && !d) ni(Q, w);
                      else {
                        var E = ba(Q, !0),
                          C = g - l;
                        ni(Q, xe, E.top + (R === va ? C : 0) + fa, E.left + (R === va ? 0 : C) + fa)
                      } ti(r || d ? v : y), D !== f && b < 1 && r || M(z + (1 !== b || d ? 0 : D))
                  }
                } else M(z + D * b);
              rt && !i.tween && !_e && !Ye && H.restart(!0), X && (p || it && b && (b < 1 || !$e)) && Ee(X.targets).forEach((function (t) {
                return t.classList[r || it ? "add" : "remove"](X.className)
              })), Y && !ot && !t && Y(ft), h && !_e ? (n = b && !x ? 0 : 1 === b ? 1 : 1 === x ? 2 : 3, ot && (d = !p && "none" !== ut[n + 1] && ut[n + 1] || ut[n], a && ("complete" === d || "reset" === d || d in a) && ("complete" === d ? a.pause().totalProgress(1) : "reset" === d ? a.restart(!0).pause() : "restart" === d ? a.restart(!0) : a[d]()), Y && Y(ft)), !p && $e || (W && p && W(ft), ht[n] && ht[n](ft), it && (1 === b ? ft.kill(!1, 1) : ht[n] = 0), p || ht[n = 1 === b ? 1 : 3] && ht[n](ft))) : ot && Y && !_e && Y(ft)
            }
            T && (A(g + (u._isFlipped ? 1 : 0)), T(g))
          }, ft.enable = function (e, a) {
            ft.enabled || (ft.enabled = !0, Da(st, "resize", Va), Da(st, "scroll", Ha), mt && Da(t, "refreshInit", mt), !1 !== e && (ft.progress = V = 0, o = s = wt = ft.scroll()), !1 !== a && ft.refresh())
          }, ft.getTween = function (t) {
            return t && i ? i.tween : k
          }, ft.disable = function (e, a) {
            if (ft.enabled && (!1 !== e && ft.revert(), ft.enabled = ft.isActive = !1, a || k && k.pause(), F = 0, r && (r.uncache = 1), mt && La(t, "refreshInit", mt), H && (H.pause(), i.tween && i.tween.kill() && (i.tween = 0)), !ct)) {
              for (var n = ka.length; n--;)
                if (ka[n].scroller === st && ka[n] !== ft) return;
              La(st, "resize", Va), La(st, "scroll", Ha)
            }
          }, ft.kill = function (t, e) {
            ft.disable(t, e), q && delete Pa[q];
            var i = ka.indexOf(ft);
            ka.splice(i, 1), i === Pe && Ga > 0 && Pe--, i = 0, ka.forEach((function (t) {
              return t.scroller === ft.scroller && (i = 1)
            })), i || (ft.scroll.rec = 0), a && (a.scrollTrigger = null, t && a.render(-1), e || a.kill()), d && [d, h, u, p].forEach((function (t) {
              return t.parentNode && t.parentNode.removeChild(t)
            })), Q && (r && (r.uncache = 1), i = 0, ka.forEach((function (t) {
              return t.pin === Q && i++
            })), i || (r.spacer = 0))
          }, ft.enable(!1, !1), a && a.add && !f ? me.delayedCall(.01, (function () {
            return l || c || ft.refresh()
          })) && (f = .01) && (l = c = 0) : ft.refresh()
        } else this.update = this.refresh = this.kill = Qe
      }, t.register = function (e) {
        if (!ve && (me = e || ta(), Ze() && window.document && (ye = window, we = document, be = we.documentElement, xe = we.body), me && (Ee = me.utils.toArray, Ae = me.utils.clamp, Be = me.core.suppressOverwrites || Qe, me.core.globals("ScrollTrigger", t), xe))) {
          De = ye.requestAnimationFrame || function (t) {
            return setTimeout(t, 16)
          }, Da(ye, "wheel", Ha), Me = [ye, we, be, xe], Da(we, "scroll", Ha);
          var a, i = xe.style,
            r = i.borderTop;
          i.borderTop = "1px solid #000", a = ba(xe), va.m = Math.round(a.top + va.sc()) || 0, ma.m = Math.round(a.left + ma.sc()) || 0, r ? i.borderTop = r : i.removeProperty("border-top"), Ce = setInterval(Oa, 200), me.delayedCall(.5, (function () {
            return Ye = 0
          })), Da(we, "touchcancel", Qe), Da(xe, "touchstart", Qe), za(Da, we, "pointerdown,touchstart,mousedown", (function () {
            return Se = 1
          })), za(Da, we, "pointerup,touchend,mouseup", (function () {
            return Se = 0
          })), ke = me.utils.checkPrefix("transform"), Qa.push(ke), ve = We(), ze = me.delayedCall(.2, qa).pause(), Ve = [we, "visibilitychange", function () {
            var t = ye.innerWidth,
              e = ye.innerHeight;
            we.hidden ? (Oe = t, He = e) : Oe === t && He === e || Va()
          }, we, "DOMContentLoaded", qa, ye, "load", function () {
            return Ue || qa()
          }, ye, "resize", Va], oa(Da)
        }
        return ve
      }, t.defaults = function (t) {
        for (var e in t) Aa[e] = t[e]
      }, t.kill = function () {
        Ke = 0, ka.slice(0).forEach((function (t) {
          return t.kill(1)
        }))
      }, t.config = function (t) {
        "limitCallbacks" in t && ($e = !!t.limitCallbacks);
        var e = t.syncInterval;
        e && clearInterval(Ce) || (Ce = e) && setInterval(Oa, e), "autoRefreshEvents" in t && (oa(La) || oa(Da, t.autoRefreshEvents || "none"), Ie = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
      }, t.scrollerProxy = function (t, e) {
        var a = Ee(t)[0],
          i = qe.indexOf(a),
          r = ea(a);
        ~i && qe.splice(i, r ? 6 : 2), r ? Xe.unshift(ye, e, xe, e, be, e) : Xe.unshift(a, e)
      }, t.matchMedia = function (t) {
        var e, a, i, r, n;
        for (a in t) i = Ia.indexOf(a), r = t[a], je = a, "all" === a ? r() : (e = ye.matchMedia(a)) && (e.matches && (n = r()), ~i ? (Ia[i + 1] = ua(Ia[i + 1], r), Ia[i + 2] = ua(Ia[i + 2], n)) : (i = Ia.length, Ia.push(a, r, n), e.addListener ? e.addListener($a) : e.addEventListener("change", $a)), Ia[i + 3] = e.matches), je = 0;
        return Ia
      }, t.clearMatchMedia = function (t) {
        t || (Ia.length = 0), (t = Ia.indexOf(t)) >= 0 && Ia.splice(t, 4)
      }, t
    }();
    si.version = "3.7.1", si.saveStyles = function (t) {
      return t ? Ee(t).forEach((function (t) {
        if (t && t.style) {
          var e = Na.indexOf(t);
          e >= 0 && Na.splice(e, 5), Na.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), me.core.getCache(t), je)
        }
      })) : Na
    }, si.revert = function (t, e) {
      return Xa(!t, e)
    }, si.create = function (t, e) {
      return new si(t, e)
    }, si.refresh = function (t) {
      return t ? Va() : qa(!0)
    }, si.update = Ua, si.maxScroll = function (t, e) {
      return na(t, e ? ma : va)
    }, si.getScrollFunc = function (t, e) {
      return ia(Ee(t)[0], e ? ma : va)
    }, si.getById = function (t) {
      return Pa[t]
    }, si.getAll = function () {
      return ka.slice(0)
    }, si.isScrolling = function () {
      return !!Ue
    }, si.addEventListener = function (t, e) {
      var a = Fa[t] || (Fa[t] = []);
      ~a.indexOf(e) || a.push(e)
    }, si.removeEventListener = function (t, e) {
      var a = Fa[t],
        i = a && a.indexOf(e);
      i >= 0 && a.splice(i, 1)
    }, si.batch = function (t, e) {
      var a, i = [],
        r = {},
        n = e.interval || .016,
        o = e.batchMax || 1e9,
        s = function (t, e) {
          var a = [],
            i = [],
            r = me.delayedCall(n, (function () {
              e(a, i), a = [], i = []
            })).pause();
          return function (t) {
            a.length || r.restart(!0), a.push(t.trigger), i.push(t), o <= a.length && r.progress(1)
          }
        };
      for (a in e) r[a] = "on" === a.substr(0, 2) && la(e[a]) && "onRefreshInit" !== a ? s(0, e[a]) : e[a];
      return la(o) && (o = o(), Da(si, "refresh", (function () {
        return o = e.batchMax()
      }))), Ee(t).forEach((function (t) {
        var e = {};
        for (a in r) e[a] = r[a];
        e.trigger = t, i.push(si.create(e))
      })), i
    }, si.sort = function (t) {
      return ka.sort(t || function (t, e) {
        return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
      })
    }, ta() && me.registerPlugin(si);
    /*!
     * strings: 3.7.1
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var li = /(^\s+|\s+$)/g,
      ci = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

    function di(t, e, a) {
      for (var i = t.firstChild, r = []; i;) 3 === i.nodeType ? r.push.apply(r, hi((i.nodeValue + "").replace(/^\n+/g, "").replace(/\s+/g, " "), e, a)) : "br" === (i.nodeName + "").toLowerCase() ? r[r.length - 1] += "<br>" : r.push(i.outerHTML), i = i.nextSibling;
      return r
    }

    function hi(t, e, a) {
      if (t += "", a && (t = t.replace(li, "")), e && "" !== e) return t.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
      for (var i, r, n = [], o = t.length, s = 0; s < o; s++)((r = t.charAt(s)).charCodeAt(0) >= 55296 && r.charCodeAt(0) <= 56319 || t.charCodeAt(s + 1) >= 65024 && t.charCodeAt(s + 1) <= 65039) && (i = ((t.substr(s, 12).split(ci) || [])[1] || "").length || 2, r = t.substr(s, i), n.emoji = 1, s += i - 1), n.push(">" === r ? "&gt;" : "<" === r ? "&lt;" : r);
      return n
    }
    /*!
     * TextPlugin 3.7.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var ui, pi, gi = {
      version: "3.7.1",
      name: "text",
      init: function (t, e, a) {
        var i, r, n, o, s, l, c, d, h = t.nodeName.toUpperCase();
        if (this.svg = t.getBBox && ("TEXT" === h || "TSPAN" === h), !("innerHTML" in t) && !this.svg) return !1;
        if (this.target = t, "object" != typeof e && (e = {
            value: e
          }), "value" in e) {
          for (this.delimiter = e.delimiter || "", n = di(t, this.delimiter), pi || (pi = document.createElement("div")), pi.innerHTML = e.value, r = di(pi, this.delimiter), this.from = a._from, this.from && (h = n, n = r, r = h), this.hasClass = !(!e.newClass && !e.oldClass), this.newClass = e.newClass, this.oldClass = e.oldClass, i = (h = n.length - r.length) < 0 ? n : r, this.fillChar = e.fillChar || (e.padSpace ? "&nbsp;" : ""), h < 0 && (h = -h); --h > -1;) i.push(this.fillChar);
          if ("diff" === e.type) {
            for (o = 0, s = [], l = [], c = "", h = 0; h < r.length; h++)(d = r[h]) === n[h] ? c += d : (s[o] = c + d, l[o++] = c + n[h], c = "");
            r = s, n = l, c && (r.push(c), n.push(c))
          }
          e.speed && a.duration(Math.min(.05 / e.speed * i.length, e.maxDuration || 9999)), this.original = n, this.text = r, this._props.push("text")
        } else this.text = this.original = [""]
      },
      render: function (t, e) {
        t > 1 ? t = 1 : t < 0 && (t = 0), e.from && (t = 1 - t);
        var a, i, r, n = e.text,
          o = e.hasClass,
          s = e.newClass,
          l = e.oldClass,
          c = e.delimiter,
          d = e.target,
          h = e.fillChar,
          u = e.original,
          p = n.length,
          g = t * p + .5 | 0;
        o ? (i = l && g !== p, r = ((a = s && g) ? "<span class='" + s + "'>" : "") + n.slice(0, g).join(c) + (a ? "</span>" : "") + (i ? "<span class='" + l + "'>" : "") + c + u.slice(g).join(c) + (i ? "</span>" : "")) : r = n.slice(0, g).join(c) + c + u.slice(g).join(c), e.svg ? d.textContent = r : d.innerHTML = "&nbsp;" === h && ~r.indexOf("  ") ? r.split("  ").join("&nbsp;&nbsp;") : r
      }
    };
    gi.splitInnerHTML = di, gi.emojiSafeSplit = hi, gi.getText = function t(e) {
      var a = e.nodeType,
        i = "";
      if (1 === a || 9 === a || 11 === a) {
        if ("string" == typeof e.textContent) return e.textContent;
        for (e = e.firstChild; e; e = e.nextSibling) i += t(e)
      } else if (3 === a || 4 === a) return e.nodeValue;
      return i
    }, (ui || "undefined" != typeof window && (ui = window.gsap) && ui.registerPlugin && ui) && ui.registerPlugin(gi);
    var fi = s.S.registerPlugin(l.b) || s.S,
      mi = fi.core.Tween
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    a(17), a(11), a(18);
    var r = i(a(19)),
      n = i(a(8)),
      o = i(a(24)),
      s = i(a(41)),
      l = i(a(43)),
      c = a(44),
      d = i(a(50));
    (window.onload = function () {
      new c.LocomotiveInit, new s.default, (new o.default).init(), (new d.default).events(), new l.default
    }, 0 == (0, n.default)(n.default.phone).any) && (new r.default).init()
  }, function (t, e, a) {
    "use strict";
    a.r(e)
  }, function (t, e, a) {
    var i, r, n;
    ! function (o, s) {
      if (o) {
        s = s.bind(null, o, o.document), t.exports ? s(a(11)) : (r = [a(11)], void 0 === (n = "function" == typeof (i = s) ? i.apply(e, r) : i) || (t.exports = n))
      }
    }("undefined" != typeof window ? window : 0, (function (t, e, a) {
      "use strict";
      if (t.addEventListener) {
        var i = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
          r = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
          n = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
          o = /^picture$/i,
          s = a.cfg,
          l = {
            getParent: function (e, a) {
              var i = e,
                r = e.parentNode;
              return a && "prev" != a || !r || !o.test(r.nodeName || "") || (r = r.parentNode), "self" != a && (i = "prev" == a ? e.previousElementSibling : a && (r.closest || t.jQuery) && (r.closest ? r.closest(a) : jQuery(r).closest(a)[0]) || r), i
            },
            getFit: function (t) {
              var e, a, i = getComputedStyle(t, null) || {},
                o = i.content || i.fontFamily,
                s = {
                  fit: t._lazysizesParentFit || t.getAttribute("data-parent-fit")
                };
              return !s.fit && o && (e = o.match(r)) && (s.fit = e[1]), s.fit ? (!(a = t._lazysizesParentContainer || t.getAttribute("data-parent-container")) && o && (e = o.match(n)) && (a = e[1]), s.parent = l.getParent(t, a)) : s.fit = i.objectFit, s
            },
            getImageRatio: function (e) {
              var a, r, n, l, c, d, h, u = e.parentNode,
                p = u && o.test(u.nodeName || "") ? u.querySelectorAll("source, img") : [e];
              for (a = 0; a < p.length; a++)
                if (r = (e = p[a]).getAttribute(s.srcsetAttr) || e.getAttribute("srcset") || e.getAttribute("data-pfsrcset") || e.getAttribute("data-risrcset") || "", n = e._lsMedia || e.getAttribute("media"), n = s.customMedia[e.getAttribute("data-media") || n] || n, r && (!n || (t.matchMedia && matchMedia(n) || {}).matches)) {
                  (l = parseFloat(e.getAttribute("data-aspectratio"))) || ((c = r.match(i)) ? "w" == c[2] ? (d = c[1], h = c[3]) : (d = c[3], h = c[1]) : (d = e.getAttribute("width"), h = e.getAttribute("height")), l = d / h);
                  break
                } return l
            },
            calculateSize: function (t, e) {
              var a, i, r, n = this.getFit(t),
                o = n.fit,
                s = n.parent;
              return "width" == o || ("contain" == o || "cover" == o) && (i = this.getImageRatio(t)) ? (s ? e = s.clientWidth : s = t, r = e, "width" == o ? r = e : (a = e / s.clientHeight) && ("cover" == o && a < i || "contain" == o && a > i) && (r = e * (i / a)), r) : e
            }
          };
        a.parentFit = l, e.addEventListener("lazybeforesizes", (function (t) {
          if (!t.defaultPrevented && t.detail.instance == a) {
            var e = t.target;
            t.detail.width = l.calculateSize(e, t.detail.width)
          }
        }))
      }
    }))
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(9)),
      n = i(a(3)),
      o = i(a(4)),
      s = i(a(7)),
      l = i(a(6)),
      c = function () {
        function t() {
          var e = this;
          (0, n.default)(this, t), (0, s.default)(this, "render", (function () {
            e.pX += .1 * (e.tX - e.pX - e.icon.clientWidth / 2), e.pY += .1 * (e.tY - e.pY - e.icon.clientHeight / 2), e.cursor.style.transform = "translate3d(".concat(e.pX, "px, ").concat(e.pY, "px, 0)")
          })), (0, s.default)(this, "createInner", (function (t) {
            return "" == t ? '<div class="cursor-icon"><div>' : '<p class="cursor-text">'.concat(t, "<p>")
          })), (0, s.default)(this, "enter", (function (t) {
            var a = t.target;
            l.default.to([e.icon, e.cursor], {
              opacity: 1,
              duration: .3
            }), "link" === a.getAttribute("data-cursor") && e.icon.classList.add("c-link"), "more" === a.getAttribute("data-cursor") && e.icon.classList.add("c-more"), "close" === a.getAttribute("data-cursor") && e.icon.classList.add("c-close"), "video-close" === a.getAttribute("data-cursor") && e.icon.classList.add("c-more"), "zoom" === a.getAttribute("data-cursor") && e.icon.classList.add("c-zoom"), "timeline-wrapper" === a.getAttribute("data-cursor") && (e.icon.classList.add("timeline-wrapper"), e.icon.innerHTML = e.createInner("")), "team-slider" === a.getAttribute("data-cursor") && (e.icon.classList.add("team-slider"), e.icon.innerHTML = e.createInner("")), "previous-project" === a.getAttribute("data-cursor") && (e.icon.classList.add("project-nav"), e.icon.innerHTML = e.createInner("previous")), "next-project" === a.getAttribute("data-cursor") && (e.icon.classList.add("project-nav"), e.icon.innerHTML = e.createInner("next"))
          })), (0, s.default)(this, "leave", (function () {
            e.icon.setAttribute("class", "cursor-ball_main"), e.icon.innerHTML = "", l.default.to([e.icon, e.cursor], {
              opacity: 0,
              duration: .1
            })
          })), (0, s.default)(this, "events", (function () {
            e.targets = document.querySelectorAll("[data-cursor]"), (0, r.default)(e.targets).forEach((function (t) {
              t.addEventListener("mouseenter", (function (t) {
                e.enter(t)
              })), t.addEventListener("mouseleave", e.leave)
            })), e.leave()
          })), this.cursor = document.createElement("div"), this.icon = document.createElement("div"), this.cursor.className = "cursor-ball", this.icon.className = "cursor-ball_main", document.body.appendChild(this.cursor), this.cursor.appendChild(this.icon), this.tX = 0, this.tY = 0, this.pX = 0, this.pY = -100
        }
        return (0, o.default)(t, [{
          key: "init",
          value: function () {
            var t = this;
            window.addEventListener("mousemove", (function (e) {
              t.tX = e.clientX, t.tY = e.clientY
            })), this.events(), l.default.ticker.add(this.render)
          }
        }]), t
      }();
    e.default = c
  }, function (t, e, a) {
    var i = a(13);
    t.exports = function (t) {
      if (Array.isArray(t)) return i(t)
    }, t.exports.default = t.exports, t.exports.__esModule = !0
  }, function (t, e) {
    t.exports = function (t) {
      if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
    }, t.exports.default = t.exports, t.exports.__esModule = !0
  }, function (t, e, a) {
    var i = a(13);
    t.exports = function (t, e) {
      if (t) {
        if ("string" == typeof t) return i(t, e);
        var a = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? i(t, e) : void 0
      }
    }, t.exports.default = t.exports, t.exports.__esModule = !0
  }, function (t, e) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }, t.exports.default = t.exports, t.exports.__esModule = !0
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(3)),
      n = i(a(4)),
      o = i(a(7)),
      s = i(a(8)),
      l = i(a(25)),
      c = i(a(26)),
      d = i(a(28)),
      h = i(a(29)),
      u = i(a(30)),
      p = i(a(33)),
      g = i(a(34)),
      f = i(a(35)),
      m = i(a(36)),
      v = i(a(37));
    a(38);
    var y = i(a(39)),
      w = function () {
        function t() {
          var e = this;
          (0, r.default)(this, t), (0, o.default)(this, "destroy", (function () {
            e.video && e.video.destroy(), e.fullview && e.fullview.destroy()
          })), this.video = document.querySelector(".s-video"), this.portfolio1 = document.getElementById("portfolio01"), this.portfolio3 = document.querySelector(".portfolio-title__list"), this.fullview = document.querySelector(".c-fullview"), this.team = document.querySelector(".c-team"), this.title = document.querySelector(".c-banner_wrapper"), this.instagram = document.querySelector(".instagram-wrapper"), this.timeline = document.querySelector(".timeline-wrapper"), this.faq = document.querySelector(".c-tabs--wrapper"), this.sliderHover = document.querySelector(".nsd-service__main"), this.map = document.getElementById("map")
        }
        return (0, n.default)(t, [{
          key: "init",
          value: function () {
            (this.instagram && (this.instagram = new g.default({
              accessToken: "IGQVJXR2l0dnpNRncwZAVc2NWlEMDR5T2dINjJqX1phZAVNoelJ4aWtBMjVnZAVI2VjhaWW9tMG9BZAi1rMmlpcTdrWE10cjhidEs4THE0bGFxQ1pBeVR4M1ZA4djV1TFdzb1NaRHF5dTNjbThHWGR5TzFJWgZDZD",
              target: "instagram-wrapper",
              template: '<div class="single-post"><a class="single-link" target="_blank" href="{{link}}"><img title="{{caption}}" src="{{image}}" /></div></a>'
            }), this.instagram.run()), this.timeline) && (new l.default).init();
            (this.video && (this.video = new c.default, this.video.init()), this.fullview && (0, s.default)(s.default.phone) && (this.fullview = new u.default, this.fullview.init()), this.team) && (new p.default).init();
            this.faq && (new v.default).init();
            this.portfolio1 && (new d.default).init();
            this.portfolio3 && new h.default(document.querySelector(".portfolio-title__list")), this.sliderHover && new m.default, this.map && new y.default, new f.default
          }
        }]), t
      }();
    e.default = w
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(3)),
      n = i(a(4)),
      o = a(15),
      s = i(a(12));
    o.gsap.registerPlugin(s.default);
    var l = function () {
      function t() {
        (0, r.default)(this, t)
      }
      return (0, n.default)(t, [{
        key: "init",
        value: function () {
          s.default.create(".timeline-wrapper", {
            type: "scrollLeft",
            edgeResistance: 1,
            throwProps: !0,
            maxDuration: 1.2,
            minDuration: 1.2,
            lockAxis: !0,
            inertia: !0,
            bounds: ".timeline"
          }), o.TweenMax.set(".timeline-wrapper", {
            overflow: "hidden"
          })
        }
      }]), t
    }();
    e.default = l
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(3)),
      n = i(a(4)),
      o = i(a(7)),
      s = (i(a(6)), i(a(8))),
      l = i(a(27)),
      c = function () {
        function t() {
          (0, r.default)(this, t), (0, o.default)(this, "fmtMSS", (function (t) {
            return (t - (t %= 60)) / 60 + (9 < t ? ":" : ":0") + t
          })), this.page = document.querySelector(".a-page"), this.section = document.querySelector(".s-video"), this.pulse = document.querySelectorAll(".pulse div"), this.preview = document.querySelector(".s-video-preview"), this.duration = document.getElementById("c-video_duration"), this.durationText = document.querySelector(".c-video_duration")
        }
        return (0, n.default)(t, [{
          key: "init",
          value: function () {
            var t = parseInt(this.duration.duration),
              e = this.fmtMSS(t);
            this.durationText.innerHTML = e, (new l.default).init(), (0, s.default)(s.default.phone).any
          }
        }]), t
      }();
    e.default = c
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(3)),
      n = i(a(4)),
      o = i(a(7)),
      s = i(a(6)),
      l = i(a(8)),
      c = function () {
        function t() {
          var e = this;
          (0, r.default)(this, t), (0, o.default)(this, "load", (function () {
            e.src.innerHTML = '<video autoplay="" src="./static/Waterfall.mp4" class="p-video"></video>', e.video = e.src.querySelector("video"), e.ui()
          })), (0, o.default)(this, "ui", (function () {
            e.range = document.createElement("input"), e.range.classList.add("p-range"), e.range.type = "range", e.range.min = 0, e.range.value = 0, e.range.step = .05, e.progress = document.createElement("progress"), e.progress.classList.add("p-progress"), e.progress.max = 100, e.pause = document.createElement("button"), e.pause.classList.add("p-pause"), e.pause.innerHTML = "Pause", e.controls.appendChild(e.range), e.controls.appendChild(e.progress), e.controls.appendChild(e.pause), e.range.addEventListener("input", (function () {
              e.updateProgress = null, e.video.currentTime = e.range.value / 10
            })), e.video.addEventListener("play", (function () {
              e.range.max = Math.round(10 * e.video.duration), e.progress.max = Math.round(10 * e.video.duration)
            })), e.src.addEventListener("mouseenter", e.enter), e.src.addEventListener("mouseleave", e.leave), e.pause.addEventListener("click", (function () {
              e.video.paused ? (e.video.play(), e.pause.innerHTML = "Pause") : (e.video.pause(), e.pause.innerHTML = "Play")
            })), e.video.addEventListener("click", e.hide), e.video.addEventListener("ended", e.hide), s.default.ticker.add(e.render)
          })), (0, o.default)(this, "enter", (function () {
            0 == (0, l.default)(l.default.phone).any && (e.cursor.classList.add("c-close", "c-more"), e.cursor.style.opacity = 1, e.cursorWrapper.style.opacity = 1)
          })), (0, o.default)(this, "leave", (function () {
            0 == (0, l.default)(l.default.phone).any && (e.cursor.classList.remove("c-close", "c-more"), e.cursor.style.opacity = 0, e.cursorWrapper.style.opacity = 0)
          })), (0, o.default)(this, "render", (function () {
            e.range.value = 10 * e.video.currentTime, e.progress.value = 10 * e.video.currentTime
          })), (0, o.default)(this, "hide", (function () {
            e.leave(), s.default.to(e.player, {
              opacity: 0,
              duration: 1,
              onComplete: function () {
                e.destroy()
              }
            })
          })), (0, o.default)(this, "create", (function () {
            e.player || (e.player = document.createElement("div"), e.player.setAttribute("id", "player"), e.src = document.createElement("div"), e.src.classList.add("p-src"), e.player.appendChild(e.src), e.controls = document.createElement("div"), e.controls.classList.add("p-controls"), e.player.appendChild(e.controls), e.app.insertAdjacentElement("afterEnd", e.player), s.default.set(e.player, {
              opacity: 0
            }), e.load(), document.body.style.overflow = "hidden", s.default.to(e.player, {
              opacity: 1
            }), e.header && window.scrollTo(0, 0))
          })), (0, o.default)(this, "destroy", (function () {
            e.player.remove(), e.player = null, s.default.ticker.remove(e.render), document.body.style.overflow = ""
          })), (0, o.default)(this, "events", (function () {
            e.header && e.header.addEventListener("click", e.create), e.banner && e.banner.addEventListener("click", e.create)
          })), this.app = document.getElementById("app"), this.page = document.querySelector(".app-wrapper"), this.banner = document.querySelector(".s-video"), this.header = document.querySelector(".s-header-preview"), this.cursor = document.querySelector(".cursor-ball_main"), this.cursorWrapper = document.querySelector(".cursor-ball"), this.visible = !1
        }
        return (0, n.default)(t, [{
          key: "init",
          value: function () {
            this.events()
          }
        }]), t
      }();
    e.default = c
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(9)),
      n = i(a(3)),
      o = i(a(4)),
      s = i(a(7)),
      l = i(a(6)),
      c = i(a(8)),
      d = function () {
        function t() {
          var e = this;
          (0, n.default)(this, t), (0, s.default)(this, "set", (function () {
            e.animating = !1, (0, c.default)(c.default.device).phone && e.video && e.video.pause(), e.ww = window.innerWidth, e.wh = window.innerHeight, e.objects[e.active].classList.add("is-active")
          })), (0, s.default)(this, "show", (function () {
            e.wrapper.style.display = "flex";
            l.default.timeline({
              defaults: {
                duration: 1,
                ease: "power3.inOut",
                clearProps: "transform"
              },
              onComplete: function () {
                e.animating = !1, e.menu.style.pointerEvents = ""
              }
            })
          })), (0, s.default)(this, "enter", (function (t) {
            var a = document.querySelector(".single-image .is-active");
            t !== e.active && (e.video && e.video.pause(), (0, r.default)(e.objects).forEach((function (t) {
              t.style.zIndex = 1
            })), (0, c.default)(c.default.device).phone || (a.style.zIndex = 2), e.active = t, a.classList.remove("is-active"), l.default.fromTo(e.objects[e.active], {
              zIndex: 3,
              scale: 1.1,
              opacity: 0
            }, {
              opacity: 1,
              scale: 1,
              ease: "power3.out",
              duration: 1.5
            }), e.objects[e.active].classList.add("is-active"))
          })), (0, s.default)(this, "events", (function () {
            window.addEventListener("load", e.show()), (0, r.default)(e.buttons).forEach((function (t) {
              t.setAttribute("data-transition", "navigation")
            })), (0, r.default)(e.buttons).forEach((function (t, a) {
              t.addEventListener("mouseenter", (function () {
                window.clearTimeout(e.timeout), e.timeout = setTimeout((function () {
                  t.classList.add("-is-active"), e.enter(a)
                }), 250)
              })), t.addEventListener("mouseleave", (function () {
                t.classList.remove("-is-active"), window.clearTimeout(e.timeout)
              }))
            }))
          })), this.app = document.getElementById("app"), this.wrapper = document.getElementById("portfolio01"), this.menu = document.querySelector(".single-portfolio"), this.figure = document.querySelector(".portfolio-figure"), this.image = document.querySelectorAll(".single-image"), this.gallery = document.querySelector(".portfolio-images"), this.video = document.querySelector(".portfolio-figure video"), this.images = document.querySelectorAll(".portfolio-figure img"), this.objects = document.querySelectorAll(".single-image > *"), this.buttons = document.querySelectorAll(".single-portfolio__wrapper a"), this.visible = !1, this.animating = !1, this.location = location.href, this.active = 0, (0, c.default)(c.default.device).phone && this.figure.remove()
        }
        return (0, o.default)(t, [{
          key: "init",
          value: function () {
            this.set(), this.events()
          }
        }]), t
      }();
    e.default = d
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(9)),
      n = i(a(4)),
      o = i(a(3)),
      s = a(6),
      l = function t(e) {
        (0, o.default)(this, t), this.DOM = {
          el: e
        }, this.DOM.full = this.DOM.el.querySelector(".screen--full")
      },
      c = function () {
        function t(e) {
          var a = this;
          (0, o.default)(this, t), this.DOM = {
            links: (0, r.default)(e.querySelectorAll("a"))
          }, this.screens = [], (0, r.default)(document.querySelectorAll(".screen__item")).forEach((function (t) {
            return a.screens.push(new l(t))
          })), this.current = 0, this.initEvents()
        }
        return (0, n.default)(t, [{
          key: "initEvents",
          value: function () {
            var t = this;
            this.onMouseEnter = function (e) {
              var a = t.DOM.links.indexOf(e.target);
              if (a === t.current) return !1;
              var i = t.screens[t.current],
                r = t.screens[a];
              t.current = a, s.gsap.killTweensOf([i.DOM.el, r.DOM.el]), t.hideScreen(i), t.showScreen(r)
            }, this.DOM.links.forEach((function (e) {
              e.addEventListener("mouseenter", t.onMouseEnter)
            }))
          }
        }, {
          key: "showScreen",
          value: function (t) {
            s.gsap.timeline().set(t.DOM.el, {
              opacity: 1,
              zIndex: 1
            }).to(t.DOM.full, {
              duration: 1.8,
              ease: "Power2.easeOut",
              startAt: {
                scale: 1.07
              },
              scale: 1
            })
          }
        }, {
          key: "hideScreen",
          value: function (t) {
            s.gsap.timeline().set(t.DOM.el, {
              zIndex: 10
            }).to(t.DOM.el, {
              duration: .4,
              ease: "Power2.easeOut",
              opacity: 0,
              onComplete: function () {
                return s.gsap.set(t.DOM.el, {
                  zIndex: 1
                })
              }
            })
          }
        }]), t
      }();
    e.default = c
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(9)),
      n = i(a(3)),
      o = i(a(4)),
      s = i(a(7)),
      l = i(a(6)),
      c = i(a(8)),
      d = i(a(31)),
      h = i(a(32));
    l.default.registerPlugin(d.default);
    var u = function () {
      function t() {
        var e = this;
        (0, n.default)(this, t), (0, s.default)(this, "events", (function () {
          (0, r.default)(e.sections).forEach((function (t) {
            t.addEventListener("click", (function () {
              e.element = t, e.create(t)
            }))
          }))
        })), (0, s.default)(this, "create", (function (t) {
          document.body.style.overflow = "hidden", e.cache = Math.abs(document.querySelector(".a-page").getBoundingClientRect().top), e.fullview = document.createElement("div"), e.fullview.setAttribute("id", "fullview"), e.fullview.setAttribute("data-cursor", "close"), document.body.appendChild(e.fullview), e.viewer = document.createElement("div"), e.viewer.classList.add("o-viewer"), e.fullview.appendChild(e.viewer), e.image = document.createElement("img"), e.image.classList.add("l-image"), e.image.src = e.element.dataset.image, e.image.style.visibility = "hidden", e.viewer.appendChild(e.image), e.set()
        })), (0, s.default)(this, "set", (function () {
          e.sb = e.image.getBoundingClientRect(), e.eb = e.element.getBoundingClientRect(), l.default.set(e.image, {
            scale: e.eb.width / e.sb.width
          }), e.tx = e.sb.width / (e.sb.width - e.eb.width) * (e.eb.left - 0 * e.eb.width / e.sb.width), e.ty = e.sb.height / (e.sb.height - e.eb.height) * (e.eb.top - 0 * e.eb.height / e.sb.height), e.image.style.transformOrigin = "".concat(e.tx, "px ").concat(e.ty, "px"), e.image.style.visibility = "inherit", l.default.set(e.viewer, {
            clip: "rect(".concat(e.eb.top, "px ").concat(e.eb.left + e.eb.width, "px ").concat(e.eb.bottom, "px ").concat(e.eb.left, "px)")
          }), e.open()
        })), (0, s.default)(this, "open", (function () {
          l.default.to(e.image, {
            scale: 1,
            ease: "exo",
            duration: 1.5,
            autoRound: !1
          }), l.default.to(e.viewer, {
            delay: .1,
            ease: "exo",
            duration: 1.5,
            autoRound: !1,
            onStart: e.cursorEnter,
            onComplete: e.load,
            clip: "rect(0px ".concat(e.ww, "px ").concat(e.wh, "px 0px)")
          })
        })), (0, s.default)(this, "cursorEnter", (function () {
          e.cursor.classList.add("c-more"), l.default.to([e.cursor, e.cursorWrapper], {
            opacity: 1,
            duration: .01
          })
        })), (0, s.default)(this, "load", (function () {
          e.mover(), e.scroller(), e.cursor.classList.add("c-close", "c-more"), e.smoothDisabled()
        })), (0, s.default)(this, "smoothDisabled", (function () {
          if (null == document.querySelector(".has-scroll-smooth"))
            for (var t = document.querySelectorAll(".o-viewer"), e = 0; e < t.length; e++) t[e].classList.add("-is-higher")
        })), (0, s.default)(this, "mover", (function () {
          window.addEventListener("mousemove", e.mouse), l.default.ticker.add(e.raf)
        })), (0, s.default)(this, "leave", (function () {
          e.cursor.classList.remove("c-close", "c-more"), l.default.to([e.cursor, e.cursorWrapper], {
            opacity: 0,
            duration: .5
          })
        })), (0, s.default)(this, "scroller", (function () {
          document.body.style.overflow = "", e.scroll = new h.default, e.image.addEventListener("mouseleave", e.leave), e.image.addEventListener("click", e.close), e.image.addEventListener("mouseenter", (function () {
            e.cursor.classList.add("c-close", "c-more"), l.default.to(e.cursor, {
              opacity: 1,
              duration: .5
            })
          }))
        })), (0, s.default)(this, "transition", (function () {
          l.default.ticker.remove(e.raf), e.scroll.destroy(), e.image.style.pointerEvents = "none";
          var t = e.product.querySelector("a").href,
            a = e.element.parentElement.querySelector(".js-product");
          a.href = t, a.click()
        })), (0, s.default)(this, "close", (function () {
          l.default.to(e.image, {
            opacity: 0,
            duration: .5
          }), l.default.ticker.remove(e.raf), e.scroll.destroy(), e.leave(), setTimeout((function () {
            e.reset()
          }), 500)
        })), (0, s.default)(this, "mouse", (function (t) {
          e.tY = t.clientY
        })), (0, s.default)(this, "raf", (function () {
          e.pY += .07 * (e.tY - e.pY), e.transform = (e.wh - e.sb.height) * (e.pY / e.wh), e.image.style.transform = "translate3d(0, ".concat(e.transform, "px, 0)")
        })), (0, s.default)(this, "reset", (function () {
          document.body.style.overflow = "", window.removeEventListener("mousemove", e.mouse), e.tY = 0, e.pY = 0, e.scroll = new h.default(e.cache), e.scroll.init(), e.fullview.remove()
        })), (0, s.default)(this, "destroy", (function () {
          e.fullview && (e.fullview.remove(), e.fullview = void 0, l.default.ticker.remove(e.raf))
        })), this.sections = document.querySelectorAll(".c-fullview"), this.cursor = document.querySelector(".cursor-ball_main"), this.cursorWrapper = document.querySelector(".cursor-ball"), this.ease = "M0,0 C0,0 0.05506,0.00231 0.0875,0.00809 0.11176,0.01241 0.1283,0.01701 0.15051,0.0268 0.17504,0.03762 0.19222,0.04708 0.21316,0.0635 0.23519,0.08078 0.2517,0.095 0.26676,0.11797 0.29108,0.15506 0.30651,0.18433 0.32142,0.2286 0.37985,0.40217 0.40411,0.5212 0.46004,0.69208 0.46738,0.71452 0.47734,0.72761 0.49122,0.74743 0.51762,0.78511 0.5345,0.80999 0.56551,0.84264 0.59155,0.87006 0.61189,0.88712 0.64337,0.90762 0.67606,0.9289 0.7006,0.94111 0.7376,0.95466 0.78311,0.97134 0.81451,0.97967 0.86275,0.988 0.91406,0.99687 1,1 1,1", d.default.create("exo", this.ease), this.tY = 0, this.pY = 0, this.ww = window.innerWidth, this.wh = window.innerHeight
      }
      return (0, o.default)(t, [{
        key: "init",
        value: function () {
          1 != (0, c.default)(c.default.phone).any && 0 !== this.sections.length && this.events()
        }
      }]), t
    }();
    e.default = u
  }, function (t, e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = e.CustomEase = void 0;
    var i, r, n = a(1),
      o = function () {
        return i || "undefined" != typeof window && (i = window.gsap) && i.registerPlugin && i
      },
      s = function () {
        (i = o()) ? (i.registerEase("_CE", u.create), r = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
      },
      l = function (t) {
        return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3
      },
      c = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      d = /[cLlsSaAhHvVtTqQ]/g,
      h = function t(e, a, i, r, n, o, s, l, c, d, h) {
        var u, p = (e + i) / 2,
          g = (a + r) / 2,
          f = (i + n) / 2,
          m = (r + o) / 2,
          v = (n + s) / 2,
          y = (o + l) / 2,
          w = (p + f) / 2,
          b = (g + m) / 2,
          x = (f + v) / 2,
          M = (m + y) / 2,
          z = (w + x) / 2,
          D = (b + M) / 2,
          L = s - e,
          E = l - a,
          A = Math.abs((i - s) * E - (r - l) * L),
          T = Math.abs((n - s) * E - (o - l) * L);
        return d || (d = [{
          x: e,
          y: a
        }, {
          x: s,
          y: l
        }], h = 1), d.splice(h || d.length - 1, 0, {
          x: z,
          y: D
        }), (A + T) * (A + T) > c * (L * L + E * E) && (u = d.length, t(e, a, p, g, w, b, z, D, c, d, h), t(z, D, x, M, v, y, s, l, c, d, h + 1 + (d.length - u))), d
      },
      u = function () {
        function t(t, e, a) {
          r || s(), this.id = t, this.setData(e, a)
        }
        var e = t.prototype;
        return e.setData = function (t, e) {
          e = e || {};
          var a, r, o, s, l, u, p, g, f, m = (t = t || "0,0,1,1").match(c),
            v = 1,
            y = [],
            w = [],
            b = e.precision || 1,
            x = b <= 1;
          if (this.data = t, (d.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (m = (0, n.stringToRawPath)(t)[0]), 4 === (a = m.length)) m.unshift(0, 0), m.push(1, 1), a = 8;
          else if ((a - 2) % 6) throw "Invalid CustomEase";
          for (0 == +m[0] && 1 == +m[a - 2] || function (t, e, a) {
              a || 0 === a || (a = Math.max(+t[t.length - 1], +t[1]));
              var i, r = -1 * +t[0],
                n = -a,
                o = t.length,
                s = 1 / (+t[o - 2] + r),
                l = -e || (Math.abs(+t[o - 1] - +t[1]) < .01 * (+t[o - 2] - +t[0]) ? function (t) {
                  var e, a = t.length,
                    i = 1e20;
                  for (e = 1; e < a; e += 6) + t[e] < i && (i = +t[e]);
                  return i
                }(t) + n : +t[o - 1] + n);
              for (l = l ? 1 / l : -s, i = 0; i < o; i += 2) t[i] = (+t[i] + r) * s, t[i + 1] = (+t[i + 1] + n) * l
            }(m, e.height, e.originY), this.segment = m, s = 2; s < a; s += 6) r = {
            x: +m[s - 2],
            y: +m[s - 1]
          }, o = {
            x: +m[s + 4],
            y: +m[s + 5]
          }, y.push(r, o), h(r.x, r.y, +m[s], +m[s + 1], +m[s + 2], +m[s + 3], o.x, o.y, 1 / (2e5 * b), y, y.length - 1);
          for (a = y.length, s = 0; s < a; s++) p = y[s], g = y[s - 1] || p, (p.x > g.x || g.y !== p.y && g.x === p.x || p === g) && p.x <= 1 ? (g.cx = p.x - g.x, g.cy = p.y - g.y, g.n = p, g.nx = p.x, x && s > 1 && Math.abs(g.cy / g.cx - y[s - 2].cy / y[s - 2].cx) > 2 && (x = 0), g.cx < v && (g.cx ? v = g.cx : (g.cx = .001, s === a - 1 && (g.x -= .001, v = Math.min(v, .001), x = 0)))) : (y.splice(s--, 1), a--);
          if (l = 1 / (a = 1 / v + 1 | 0), u = 0, p = y[0], x) {
            for (s = 0; s < a; s++) f = s * l, p.nx < f && (p = y[++u]), r = p.y + (f - p.x) / p.cx * p.cy, w[s] = {
              x: f,
              cx: l,
              y: r,
              cy: 0,
              nx: 9
            }, s && (w[s - 1].cy = r - w[s - 1].y);
            w[a - 1].cy = y[y.length - 1].y - r
          } else {
            for (s = 0; s < a; s++) p.nx < s * l && (p = y[++u]), w[s] = p;
            u < y.length - 1 && (w[s - 1] = y[y.length - 2])
          }
          return this.ease = function (t) {
            var e = w[t * a | 0] || w[a - 1];
            return e.nx < t && (e = e.n), e.y + (t - e.x) / e.cx * e.cy
          }, this.ease.custom = this, this.id && i.registerEase(this.id, this.ease), this
        }, e.getSVGData = function (e) {
          return t.getSVGData(this, e)
        }, t.create = function (e, a, i) {
          return new t(e, a, i).ease
        }, t.register = function (t) {
          i = t, s()
        }, t.get = function (t) {
          return i.parseEase(t)
        }, t.getSVGData = function (e, a) {
          var r, o, s, c, d, h, u, p, g, f, m = (a = a || {}).width || 100,
            v = a.height || 100,
            y = a.x || 0,
            w = (a.y || 0) + v,
            b = i.utils.toArray(a.path)[0];
          if (a.invert && (v = -v, w = 0), "string" == typeof e && (e = i.parseEase(e)), e.custom && (e = e.custom), e instanceof t) r = (0, n.rawPathToString)((0, n.transformRawPath)([e.segment], m, 0, 0, -v, y, w));
          else {
            for (r = [y, w], c = 1 / (u = Math.max(5, 200 * (a.precision || 1))), p = 5 / (u += 2), g = l(y + c * m), o = ((f = l(w + e(c) * -v)) - w) / (g - y), s = 2; s < u; s++) d = l(y + s * c * m), h = l(w + e(s * c) * -v), (Math.abs((h - f) / (d - g) - o) > p || s === u - 1) && (r.push(g, f), o = (h - f) / (d - g)), g = d, f = h;
            r = "M" + r.join(",")
          }
          return b && b.setAttribute("d", r), r
        }, t
      }();
    /*!
     * CustomEase 3.5.1
     * https://greensock.com
     *
     * @license Copyright 2008-2020, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    e.default = e.CustomEase = u, o() && i.registerPlugin(u), u.version = "3.5.1"
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(9)),
      n = i(a(3)),
      o = i(a(4)),
      s = i(a(7)),
      l = i(a(6)),
      c = function () {
        function t(e) {
          var a = this;
          (0, n.default)(this, t), (0, s.default)(this, "resize", (function () {
            a.set(), a.scroll()
          })), (0, s.default)(this, "scroll", (function () {
            a.data.current = window.scrollY
          })), (0, s.default)(this, "check", (function () {
            if (Math.round(a.data.last) === Math.round(a.data.current)) {
              if (!1 === a.scrolling) return;
              a.scrolling = !1, document.body.classList.remove("is-scrolling")
            } else {
              if (!0 === a.scrolling) return;
              a.scrolling = !0, document.body.classList.add("is-scrolling")
            }
          })), (0, s.default)(this, "render", (function () {
            a.data.last = a.math.lerp(a.data.last, a.data.current, a.data.ease), a.data.last < .1 && (a.data.last = 0), a.dom.page.style.transform = "translate3d(0, -".concat(a.data.last, "px, 0)")
          })), (0, s.default)(this, "create", (function () {
            a.set(), a.events(), l.default.ticker.add(a.render)
          })), this.data = {
            last: this.cache,
            ease: .1,
            current: 0
          }, this.cache = e, this.math = {
            lerp: function (t, e, a) {
              return (1 - a) * t + a * e
            }
          }, this.dom = {
            page: document.querySelector(".a-page")
          }, this.scrolling = !1, this.links = document.querySelectorAll(".c-fullview")
        }
        return (0, o.default)(t, [{
          key: "set",
          value: function () {
            document.body.style.height = "".concat(this.dom.page.offsetHeight, "px"), this.cache && (window.scrollTo(0, this.cache), this.dom.page.style.transform = "translate3d(0, -".concat(this.data.last, "px, 0)"))
          }
        }, {
          key: "destroy",
          value: function () {
            document.body.style.height = "", this.data = null, l.default.ticker.remove(this.render), this.remove()
          }
        }, {
          key: "events",
          value: function () {
            var t = this;
            window.addEventListener("resize", this.resize, {
              passive: !0
            }), window.addEventListener("scroll", this.scroll, {
              passive: !0
            }), (0, r.default)(this.links).forEach((function (e) {
              e.addEventListener("click", (function () {
                t.destroy()
              }))
            }))
          }
        }, {
          key: "remove",
          value: function () {
            window.removeEventListener("resize", this.resize, {
              passive: !0
            }), window.removeEventListener("scroll", this.scroll, {
              passive: !0
            })
          }
        }, {
          key: "init",
          value: function () {
            this.set(), this.create()
          }
        }]), t
      }();
    e.default = c
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(9)),
      n = i(a(3)),
      o = i(a(4)),
      s = i(a(7)),
      l = a(6),
      c = i(a(8)),
      d = function () {
        function t() {
          var e = this;
          (0, n.default)(this, t), (0, s.default)(this, "lerp", (function (t, e, a) {
            return (1 - a) * t + a * e
          })), (0, s.default)(this, "track", (function (t) {
            e.tX = t.clientX - e.DOM.svg.clientWidth / 2, e.tY = t.clientY - e.DOM.svg.clientHeight / 2
          })), (0, s.default)(this, "render", (function () {
            e.wY = e.section.getBoundingClientRect().top, e.wX = e.section.getBoundingClientRect().left, !0 === e.following ? (e.pY = e.lerp(e.pY, e.tY - e.wY, .05), e.pX = e.lerp(e.pX, e.tX - e.wX, .05), e.DOM.svg.style.transform = "translate3d(".concat(e.pX, "px, ").concat(e.pY, "px, 0)")) : (e.pY = e.lerp(e.pY, e.tY, .05), e.DOM.svg.style.transform = "translate3d(".concat(e.pX, "px, ").concat(e.pY, "px, 0)"))
          })), (0, s.default)(this, "events", (function () {
            e.section.addEventListener("mousemove", e.track)
          })), (0, s.default)(this, "create", (function () {
            l.gsap.ticker.add(e.render), e.section.addEventListener("mouseenter", (function () {
              e.following = !0
            })), e.section.addEventListener("mouseleave", (function () {
              e.following = !1
            }))
          })), this.DOM = {
            svg: document.querySelector(".distort"),
            team: document.querySelector(".team")
          }, this.DOM.imgs = (0, r.default)(this.DOM.svg.querySelectorAll(".distort__img")), this.DOM.teamSingle = (0, r.default)(this.DOM.team.querySelectorAll(".team__link")), this.section = document.querySelector(".c-team"), this.following = !1, this.tX = this.section.clientWidth / 2 - this.DOM.svg.clientWidth / 2, this.tY = this.section.clientHeight / 2 - this.DOM.svg.clientHeight / 2, this.pX = this.section.clientWidth / 2 - this.DOM.svg.clientWidth / 2, this.pY = this.section.clientHeight / 2 - this.DOM.svg.clientHeight / 2, this.current = -1
        }
        return (0, o.default)(t, [{
          key: "init",
          value: function () {
            var t = this;
            if (1 != (0, c.default)(c.default.phone).any && !(0, c.default)(c.default.tablet).any) {
              this.DOM.teamSingle.forEach((function (e, a) {
                e.addEventListener("mouseenter", (function () {
                  -1 !== t.current && l.gsap.set(t.DOM.imgs[t.current], {
                    opacity: 0
                  }), t.current = a, t.fade ? (l.gsap.to(t.DOM.imgs[t.current], .01, {
                    ease: l.Quad.easeOut,
                    opacity: 1
                  }), t.fade = !1) : l.gsap.set(t.DOM.imgs[t.current], {
                    ease: l.Quad.easeOut,
                    opacity: 1
                  })
                }))
              }));
              this.DOM.team.addEventListener("mouseenter", (function () {
                return t.fade = !0
              })), this.DOM.team.addEventListener("mouseleave", (function () {
                l.gsap.to(t.DOM.imgs[t.current], .01, {
                  ease: l.Quad.easeOut,
                  opacity: 0
                })
              })), this.events(), this.create()
            }
          }
        }]), t
      }();
    e.default = d
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(14));

    function n(t, e) {
      if (!t) throw new Error(e)
    }

    function o(t) {
      n(!t || "object" === (0, r.default)(t), "options must be an object, got " + t + " (" + (0, r.default)(t) + ")");
      var e = {
        accessToken: null,
        accessTokenTimeout: 1e4,
        after: null,
        apiTimeout: 1e4,
        apiLimit: null,
        before: null,
        debug: !1,
        error: null,
        filter: null,
        limit: null,
        mock: !1,
        render: null,
        sort: null,
        success: null,
        target: "instafeed",
        template: '<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',
        templateBoundaries: ["{{", "}}"],
        transform: null
      };
      if (t)
        for (var a in e) void 0 !== t[a] && (e[a] = t[a]);
      n("string" == typeof e.target || "object" === (0, r.default)(e.target), "target must be a string or DOM node, got " + e.target + " (" + (0, r.default)(e.target) + ")"), n("string" == typeof e.accessToken || "function" == typeof e.accessToken, "accessToken must be a string or function, got " + e.accessToken + " (" + (0, r.default)(e.accessToken) + ")"), n("number" == typeof e.accessTokenTimeout, "accessTokenTimeout must be a number, got " + e.accessTokenTimeout + " (" + (0, r.default)(e.accessTokenTimeout) + ")"), n("number" == typeof e.apiTimeout, "apiTimeout must be a number, got " + e.apiTimeout + " (" + (0, r.default)(e.apiTimeout) + ")"), n("boolean" == typeof e.debug, "debug must be true or false, got " + e.debug + " (" + (0, r.default)(e.debug) + ")"), n("boolean" == typeof e.mock, "mock must be true or false, got " + e.mock + " (" + (0, r.default)(e.mock) + ")"), n("object" === (0, r.default)(e.templateBoundaries) && 2 === e.templateBoundaries.length && "string" == typeof e.templateBoundaries[0] && "string" == typeof e.templateBoundaries[1], "templateBoundaries must be an array of 2 strings, got " + e.templateBoundaries + " (" + (0, r.default)(e.templateBoundaries) + ")"), n(!e.template || "string" == typeof e.template, "template must null or string, got " + e.template + " (" + (0, r.default)(e.template) + ")"), n(!e.error || "function" == typeof e.error, "error must be null or function, got " + e.error + " (" + (0, r.default)(e.error) + ")"), n(!e.before || "function" == typeof e.before, "before must be null or function, got " + e.before + " (" + (0, r.default)(e.before) + ")"), n(!e.after || "function" == typeof e.after, "after must be null or function, got " + e.after + " (" + (0, r.default)(e.after) + ")"), n(!e.success || "function" == typeof e.success, "success must be null or function, got " + e.success + " (" + (0, r.default)(e.success) + ")"), n(!e.filter || "function" == typeof e.filter, "filter must be null or function, got " + e.filter + " (" + (0, r.default)(e.filter) + ")"), n(!e.transform || "function" == typeof e.transform, "transform must be null or function, got " + e.transform + " (" + (0, r.default)(e.transform) + ")"), n(!e.sort || "function" == typeof e.sort, "sort must be null or function, got " + e.sort + " (" + (0, r.default)(e.sort) + ")"), n(!e.render || "function" == typeof e.render, "render must be null or function, got " + e.render + " (" + (0, r.default)(e.render) + ")"), n(!e.limit || "number" == typeof e.limit, "limit must be null or number, got " + e.limit + " (" + (0, r.default)(e.limit) + ")"), n(!e.apiLimit || "number" == typeof e.apiLimit, "apiLimit must null or number, got " + e.apiLimit + " (" + (0, r.default)(e.apiLimit) + ")"), this._state = {
        running: !1,
        node: null,
        token: null,
        paging: null,
        pool: []
      }, this._options = e
    }
    o.prototype.run = function () {
      var t = this;
      return this._debug("run", "options", this._options), this._debug("run", "state", this._state), this._state.running ? (this._debug("run", "already running, skipping"), !1) : (this._start(), this._debug("run", "getting dom node"), "string" == typeof this._options.target ? this._state.node = document.getElementById(this._options.target) : this._state.node = this._options.target, this._state.node ? (this._debug("run", "got dom node", this._state.node), this._debug("run", "getting access token"), this._getAccessToken((function (e, a) {
        if (e) return t._debug("onTokenReceived", "error", e), void t._fail(new Error("error getting access token: " + e.message));
        t._debug("onTokenReceived", "got token", a), t._state.token = a, t._showNext((function (e) {
          if (e) return t._debug("onNextShown", "error", e), void t._fail(e);
          t._finish()
        }))
      })), !0) : (this._fail(new Error("no element found with ID " + this._options.target)), !1))
    }, o.prototype.hasNext = function () {
      var t = this._state.paging,
        e = this._state.pool;
      return this._debug("hasNext", "paging", t), this._debug("hasNext", "pool", e.length, e), e.length > 0 || t && "string" == typeof t.next
    }, o.prototype.next = function () {
      var t = this;
      return t.hasNext() ? t._state.running ? (t._debug("next", "already running, skipping"), !1) : (t._start(), void t._showNext((function (e) {
        if (e) return t._debug("onNextShown", "error", e), void t._fail(e);
        t._finish()
      }))) : (t._debug("next", "hasNext is false, skipping"), !1)
    }, o.prototype._showNext = function (t) {
      var e = this,
        a = null,
        i = null,
        r = "number" == typeof this._options.limit;
      if (e._debug("showNext", "pool", e._state.pool.length, e._state.pool), e._state.pool.length > 0) {
        if (i = r ? e._state.pool.splice(0, e._options.limit) : e._state.pool.splice(0), e._debug("showNext", "items from pool", i.length, i), e._debug("showNext", "updated pool", e._state.pool.length, e._state.pool), e._options.mock) e._debug("showNext", "mock enabled, skipping render");
        else try {
          e._renderData(i)
        } catch (e) {
          return void t(e)
        }
        t(null)
      } else e._state.paging && "string" == typeof e._state.paging.next ? a = e._state.paging.next : (a = "https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=" + e._state.token, e._options.apiLimit || "number" != typeof e._options.limit ? "number" == typeof e._options.apiLimit && (e._debug("showNext", "apiLimit set, overriding limit", e._options.apiLimit, e._options.limit), a = a + "&limit=" + e._options.apiLimit) : (e._debug("showNext", "no apiLimit set, falling back to limit", e._options.apiLimit, e._options.limit), a = a + "&limit=" + e._options.limit)), e._debug("showNext", "making request", a), e._makeApiRequest(a, (function (a, i) {
        var r = null;
        if (a) return e._debug("onResponseReceived", "error", a), void t(new Error("api request error: " + a.message));
        e._debug("onResponseReceived", "data", i), e._success(i), e._debug("onResponseReceived", "setting paging", i.paging), e._state.paging = i.paging;
        try {
          if (r = e._processData(i), e._debug("onResponseReceived", "processed data", r), r.unused && r.unused.length > 0) {
            e._debug("onResponseReceived", "saving unused to pool", r.unused.length, r.unused);
            for (var n = 0; n < r.unused.length; n++) e._state.pool.push(r.unused[n])
          }
        } catch (e) {
          return void t(e)
        }
        if (e._options.mock) e._debug("onResponseReceived", "mock enabled, skipping append");
        else try {
          e._renderData(r.items)
        } catch (e) {
          return void t(e)
        }
        t(null)
      }))
    }, o.prototype._processData = function (t) {
      var e = "function" == typeof this._options.transform,
        a = "function" == typeof this._options.filter,
        i = "function" == typeof this._options.sort,
        n = "number" == typeof this._options.limit,
        o = [],
        s = null,
        l = null,
        c = null,
        d = null,
        h = null;
      if (this._debug("processData", "hasFilter", a, "hasTransform", e, "hasSort", i, "hasLimit", n), "object" !== (0, r.default)(t) || "object" !== (0, r.default)(t.data) || t.data.length <= 0) return null;
      for (var u = 0; u < t.data.length; u++) {
        if (l = this._getItemData(t.data[u]), e) try {
          c = this._options.transform(l), this._debug("processData", "transformed item", l, c)
        } catch (t) {
          throw this._debug("processData", "error calling transform", t), new Error("error in transform: " + t.message)
        } else c = l;
        if (a) {
          try {
            d = this._options.filter(c), this._debug("processData", "filter item result", c, d)
          } catch (t) {
            throw this._debug("processData", "error calling filter", t), new Error("error in filter: " + t.message)
          }
          d && o.push(c)
        } else o.push(c)
      }
      if (i) try {
        o.sort(this._options.sort)
      } catch (t) {
        throw this._debug("processData", "error calling sort", t), new Error("error in sort: " + t.message)
      }
      return n && (s = o.length - this._options.limit, this._debug("processData", "checking limit", o.length, this._options.limit, s), s > 0 && (h = o.slice(o.length - s), this._debug("processData", "unusedItems", h.length, h), o.splice(o.length - s, s))), {
        items: o,
        unused: h
      }
    }, o.prototype._extractTags = function (t) {
      var e = /#([^\s]+)/gi,
        a = /[~`!@#$%^&*\(\)\-\+={}\[\]:;"'<>\?,\./|\\\s]+/i,
        i = [],
        r = null;
      if ("string" == typeof t)
        for (; null !== (r = e.exec(t));) !1 === a.test(r[1]) && i.push(r[1]);
      return i
    }, o.prototype._getItemData = function (t) {
      var e = null,
        a = null;
      switch (t.media_type) {
        case "IMAGE":
          e = "image", a = t.media_url;
          break;
        case "VIDEO":
          e = "video", a = t.thumbnail_url;
          break;
        case "CAROUSEL_ALBUM":
          e = "album", a = t.media_url
      }
      return {
        caption: t.caption,
        tags: this._extractTags(t.caption),
        id: t.id,
        image: a,
        link: t.permalink,
        model: t,
        timestamp: t.timestamp,
        type: e,
        username: t.username
      }
    }, o.prototype._renderData = function (t) {
      var e = "string" == typeof this._options.template,
        a = "function" == typeof this._options.render,
        i = null,
        n = null,
        o = null,
        s = "";
      if (this._debug("renderData", "hasTemplate", e, "hasRender", a), !("object" !== (0, r.default)(t) || t.length <= 0)) {
        for (var l = 0; l < t.length; l++) {
          if (i = t[l], a) try {
            n = this._options.render(i, this._options), this._debug("renderData", "custom render result", i, n)
          } catch (t) {
            throw this._debug("renderData", "error calling render", t), new Error("error in render: " + t.message)
          } else e && (n = this._basicRender(i));
          n ? s += n : this._debug("renderData", "render item did not return any content", i)
        }
        for (this._debug("renderData", "html content", s), (o = document.createElement("div")).innerHTML = s, this._debug("renderData", "container", o, o.childNodes.length, o.childNodes); o.childNodes.length > 0;) this._debug("renderData", "appending child", o.childNodes[0]), this._state.node.appendChild(o.childNodes[0])
      }
    }, o.prototype._basicRender = function (t) {
      for (var e = new RegExp(this._options.templateBoundaries[0] + "([\\s\\w.]+)" + this._options.templateBoundaries[1], "gm"), a = this._options.template, i = null, r = "", n = 0, o = null, s = null; null !== (i = e.exec(a));) o = i[1], r += a.slice(n, i.index), (s = this._valueForKeyPath(o, t)) && (r += s.toString()), n = e.lastIndex;
      return n < a.length && (r += a.slice(n, a.length)), r
    }, o.prototype._valueForKeyPath = function (t, e) {
      for (var a = /([\w]+)/gm, i = null, n = e; null !== (i = a.exec(t));) {
        if ("object" !== (0, r.default)(n)) return null;
        n = n[i[1]]
      }
      return n
    }, o.prototype._fail = function (t) {
      !this._runHook("error", t) && console && "function" == typeof console.error && console.error(t), this._state.running = !1
    }, o.prototype._start = function () {
      this._state.running = !0, this._runHook("before")
    }, o.prototype._finish = function () {
      this._runHook("after"), this._state.running = !1
    }, o.prototype._success = function (t) {
      this._runHook("success", t), this._state.running = !1
    }, o.prototype._makeApiRequest = function (t, e) {
      var a = !1,
        i = this,
        r = null,
        n = function (t, i) {
          a || (a = !0, e(t, i))
        };
      (r = new XMLHttpRequest).ontimeout = function () {
        n(new Error("api request timed out"))
      }, r.onerror = function () {
        n(new Error("api connection error"))
      }, r.onload = function (t) {
        var e = r.getResponseHeader("Content-Type"),
          a = null;
        if (i._debug("apiRequestOnLoad", "loaded", t), i._debug("apiRequestOnLoad", "response status", r.status), i._debug("apiRequestOnLoad", "response content type", e), e.indexOf("application/json") >= 0) try {
          a = JSON.parse(r.responseText)
        } catch (t) {
          return i._debug("apiRequestOnLoad", "json parsing error", t, r.responseText), void n(new Error("error parsing response json"))
        }
        200 === r.status ? n(null, a) : a && a.error ? n(new Error(a.error.code + " " + a.error.message)) : n(new Error("status code " + r.status))
      }, r.open("GET", t, !0), r.timeout = this._options.apiTimeout, r.send()
    }, o.prototype._getAccessToken = function (t) {
      var e = !1,
        a = this,
        i = null,
        n = function (a, r) {
          e || (e = !0, clearTimeout(i), t(a, r))
        };
      if ("function" == typeof this._options.accessToken) {
        this._debug("getAccessToken", "calling accessToken as function"), i = setTimeout((function () {
          a._debug("getAccessToken", "timeout check", e), n(new Error("accessToken timed out"), null)
        }), this._options.accessTokenTimeout);
        try {
          this._options.accessToken((function (t, i) {
            a._debug("getAccessToken", "received accessToken callback", e, t, i), n(t, i)
          }))
        } catch (t) {
          this._debug("getAccessToken", "error invoking the accessToken as function", t), n(t, null)
        }
      } else this._debug("getAccessToken", "treating accessToken as static", (0, r.default)(this._options.accessToken)), n(null, this._options.accessToken)
    }, o.prototype._debug = function () {
      var t = null;
      this._options.debug && console && "function" == typeof console.log && ((t = [].slice.call(arguments))[0] = "[Instafeed] [" + t[0] + "]")
    }, o.prototype._runHook = function (t, e) {
      var a = !1;
      if ("function" == typeof this._options[t]) try {
        this._options[t](e), a = !0
      } catch (e) {
        this._debug("runHook", "error calling hook", t, e)
      }
      return a
    };
    var s = o;
    e.default = s
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(3)),
      n = i(a(7)),
      o = a(6),
      s = new o.TimelineMax({
        paused: !0
      });
    e.default = function t() {
      var e = this;
      (0, r.default)(this, t), (0, n.default)(this, "linkSubmenu", (function () {
        Array.from(e.menuItemWithChild).forEach((function (t) {
          t.addEventListener("click", (function (e) {
            var a = t.parentElement,
              i = a.childNodes[1];
            a.classList.contains("menu-item-has-children") && (a.classList.toggle("open-sub"), i.classList.toggle("is-active"))
          }))
        }))
      })), (0, n.default)(this, "loadEffect", (function () {
        o.gsap.set(e.menuOverlay, {
          yPercent: -100
        }), o.gsap.set(e.menuSocialIcons, {
          yPercent: -100,
          opacity: 0
        }), o.gsap.set(e.menuOverlayItems, {
          opacity: 0
        }), s.to(e.menuOverlay, .5, {
          yPercent: 0
        }).to(e.menuOverlayItems, {
          opacity: 1,
          stagger: .1
        }, "-=0.1").to(e.menuSocialIcons, .5, {
          stagger: .1,
          yPercent: 0,
          opacity: 1
        }).to(".nsd-menu-overlay__content--part__right", .5, {
          y: 0,
          opacity: 1
        }, "-=0.5"), s.reverse()
      })), (0, n.default)(this, "events", (function () {
        var t = e;
        e.menuToggle.addEventListener("click", (function (e) {
          t.menuToggle.classList.toggle("active"), s.reversed(!s.reversed()), document.body.classList.toggle("scroll-disabled")
        }))
      })), this.menuItemWithChild = document.querySelectorAll(".nsd-menu-fullscreen .has-sub>a"), this.menuOverlay = document.querySelector(".nsd-menu-overlay"), this.menuOverlayRight = document.querySelector(".nsd-menu-overlay__content"), this.menuOverlayItems = document.querySelectorAll(".nsd-menu-overlay__content ul .fullscreen-single__item"), this.menuSocialIcons = document.querySelectorAll(".nsd-menu-overlay__content .c-social-set__single"), this.menuToggle = document.querySelector(".menu-toggle"), this.loadEffect(), this.events(), this.linkSubmenu()
    }
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(3)),
      n = i(a(4)),
      o = i(a(6)),
      s = function () {
        function t() {
          (0, r.default)(this, t), this.selector = 1, this.init()
        }
        return (0, n.default)(t, [{
          key: "init",
          value: function () {
            o.default.defaults({
              overwrite: !0
            }), document.querySelectorAll(".js-marquee").forEach((function (t) {
              var e = t.querySelector("span"),
                a = e.cloneNode(!0);
              e.after(a)
            })), document.querySelectorAll(".js-marquee").forEach((function (t) {
              var e = t.querySelectorAll(".nsd-service__heroWrap");
              o.default.set(e, {
                xPercent: 10
              }), t.addEventListener("mouseenter", (function () {
                o.default.to(e, {
                  duration: 10,
                  xPercent: -100,
                  ease: "none",
                  repeat: -1
                })
              })), t.addEventListener("mouseleave", (function () {
                o.default.to(e, {
                  duration: .5,
                  xPercent: 10,
                  ease: "none"
                })
              }))
            }))
          }
        }]), t
      }();
    e.default = s
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(9)),
      n = i(a(3)),
      o = i(a(4)),
      s = i(a(7)),
      l = i(a(6)),
      c = i(a(8)),
      d = function () {
        function t() {
          var e = this;
          (0, n.default)(this, t), (0, s.default)(this, "toggle", (function (t) {
            var a = 0;
            if (l.default.to(e.section.querySelectorAll(".c-tab__title svg"), {
                rotation: 90,
                duration: 1,
                ease: "expo.inOut",
                transformOrigin: "50% 50%"
              }), l.default.to(e.section.querySelectorAll(".plus-button__line"), {
                rotation: 0,
                duration: 1,
                ease: "expo.inOut",
                transformOrigin: "50% 50%"
              }), 1 == (0, c.default)(c.default.phone).any) a = Math.round(t.clientHeight + .08333 * window.innerWidth), (0, r.default)(e.locations).forEach((function (t) {
              var e = t.querySelector(".c-tab__title").clientHeight;
              l.default.to(t, {
                height: e,
                duration: 1,
                ease: "expo.inOut"
              })
            }));
            else {
              e.cursor.classList.add("tab-toggle"), e.cursor.classList.remove("-tab-active"), a = t.clientHeight;
              for (var i = 0; i < e.titles.length; i++) e.titles[i].classList.remove("-is-active");
              l.default.to(e.locations, {
                height: a,
                duration: 1,
                ease: "expo.inOut",
                onComplete: function () {
                  document.body.style.height = "".concat(e.page.clientHeight, "px")
                }
              })
            }
            t.parentElement.clientHeight > a || (a = t.parentElement.querySelector(".c-tabs--single__content").clientHeight, a += t.clientHeight, l.default.to(t.parentElement, {
              height: a,
              duration: 1,
              ease: "expo.inOut"
            }), l.default.to([t.parentElement.querySelector(".c-tab__title svg"), t.parentElement.querySelector(".plus-button__line")], {
              rotation: -90,
              duration: 1,
              ease: "expo.inOut",
              transformOrigin: "50% 50%"
            }), 0 == (0, c.default)(c.default.phone).any && (t.classList.add("-is-active"), e.cursor.classList.remove("tab-toggle")), (0, c.default)(c.default.phone).any)
          })), (0, s.default)(this, "createCursor", (function (t) {
            e.cursor.classList.add("-is-white"), e.cursor.classList.add("tab-toggle");
            l.default.set([e.cursor, e.cursorWrapper], {
              opacity: 1
            }), e.cursor.innerHTML = '<svg class="plus-button js-button" viewBox="0 0 43.344 43.344"><path d="M0 21.672h43.344" fill="none" stroke="#3b3d44"></path><path class="plus-button__line js-line" d="M21.672 0v43.344" fill="none" stroke="#3b3d44"></path></svg>', t.classList.contains("-is-active") && e.cursor.classList.add("-tab-active")
          })), (0, s.default)(this, "destroyCursor", (function (t) {
            e.cursor.classList.remove("-is-white"), e.cursor.classList.remove("-tab-toggle"), l.default.set([e.cursor, e.cursorWrapper], {
              opacity: 0
            }), e.cursor.innerHTML = "", e.cursor.classList.remove("-tab-active")
          })), (0, s.default)(this, "events", (function () {
            (0, r.default)(e.titles).forEach((function (t) {
              t.addEventListener("click", (function () {
                e.toggle(t)
              }))
            })), 0 == (0, c.default)(c.default.phone).any && ((0, r.default)(e.titles).forEach((function (t) {
              t.addEventListener("mouseenter", (function () {
                e.createCursor(t)
              }))
            })), (0, r.default)(e.titles).forEach((function (t) {
              t.addEventListener("mouseleave", (function () {
                e.destroyCursor(t)
              }))
            })))
          })), this.page = document.querySelector(".a-page"), this.section = document.querySelector(".c-tabs"), this.cursor = document.querySelector(".cursor-ball_main"), this.cursorWrapper = document.querySelector(".cursor-ball"), this.locations = this.section.querySelectorAll(".c-tabs--single"), this.titles = this.section.querySelectorAll(".c-tabs--single .c-tab__title")
        }
        return (0, o.default)(t, [{
          key: "init",
          value: function () {
            this.events()
          }
        }]), t
      }();
    e.default = d
  }, function (t, e, a) {}, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(3)),
      n = i(a(4)),
      o = a(40),
      s = function () {
        function t() {
          (0, r.default)(this, t), this.initMap()
        }
        return (0, n.default)(t, [{
          key: "initMap",
          value: function () {
            var t = new o.Loader({
                apiKey: "AIzaSyAFr5NCSvFGAwv1k25w-899B6uUWZGLE1o"
              }),
              e = {
                center: {
                  lat: 40.67,
                  lng: -74.28
                },
                zoom: 11,
                styles: localStorage.getItem("darkmode") ? [{
                  featureType: "all",
                  elementType: "labels.text.fill",
                  stylers: [{
                    saturation: 36
                  }, {
                    color: "#000000"
                  }, {
                    lightness: 40
                  }]
                }, {
                  featureType: "all",
                  elementType: "labels.text.stroke",
                  stylers: [{
                    visibility: "on"
                  }, {
                    color: "#000000"
                  }, {
                    lightness: 16
                  }]
                }, {
                  featureType: "all",
                  elementType: "labels.icon",
                  stylers: [{
                    visibility: "off"
                  }]
                }, {
                  featureType: "administrative",
                  elementType: "geometry.fill",
                  stylers: [{
                    color: "#000000"
                  }, {
                    lightness: 20
                  }]
                }, {
                  featureType: "administrative",
                  elementType: "geometry.stroke",
                  stylers: [{
                    color: "#000000"
                  }, {
                    lightness: 17
                  }, {
                    weight: 1.2
                  }]
                }, {
                  featureType: "administrative",
                  elementType: "labels.text.fill",
                  stylers: [{
                    visibility: "on"
                  }, {
                    color: "#bcbcbc"
                  }]
                }, {
                  featureType: "landscape",
                  elementType: "geometry",
                  stylers: [{
                    color: "#000000"
                  }, {
                    lightness: 20
                  }]
                }, {
                  featureType: "poi",
                  elementType: "geometry",
                  stylers: [{
                    color: "#000000"
                  }, {
                    lightness: 21
                  }]
                }, {
                  featureType: "poi.attraction",
                  elementType: "labels.text",
                  stylers: [{
                    visibility: "on"
                  }]
                }, {
                  featureType: "road",
                  elementType: "geometry.fill",
                  stylers: [{
                    color: "#b9761b"
                  }]
                }, {
                  featureType: "road.highway",
                  elementType: "geometry.fill",
                  stylers: [{
                    lightness: 17
                  }]
                }, {
                  featureType: "road.highway",
                  elementType: "geometry.stroke",
                  stylers: [{
                    color: "#000000"
                  }, {
                    lightness: 29
                  }, {
                    weight: .2
                  }]
                }, {
                  featureType: "road.arterial",
                  elementType: "geometry",
                  stylers: [{
                    color: "#000000"
                  }, {
                    lightness: 18
                  }]
                }, {
                  featureType: "road.arterial",
                  elementType: "geometry.fill",
                  stylers: [{
                    color: "#6e6e6e"
                  }]
                }, {
                  featureType: "road.arterial",
                  elementType: "labels.text.fill",
                  stylers: [{
                    color: "#525252"
                  }]
                }, {
                  featureType: "road.arterial",
                  elementType: "labels.text.stroke",
                  stylers: [{
                    saturation: "100"
                  }, {
                    lightness: "-33"
                  }, {
                    gamma: "10.00"
                  }, {
                    visibility: "on"
                  }, {
                    color: "#202020"
                  }]
                }, {
                  featureType: "road.local",
                  elementType: "geometry",
                  stylers: [{
                    color: "#000000"
                  }, {
                    lightness: 16
                  }]
                }, {
                  featureType: "transit",
                  elementType: "geometry",
                  stylers: [{
                    color: "#000000"
                  }, {
                    lightness: 19
                  }]
                }, {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [{
                    color: "#000000"
                  }, {
                    lightness: 17
                  }]
                }, {
                  featureType: "water",
                  elementType: "geometry.fill",
                  stylers: [{
                    color: "#565656"
                  }]
                }] : [{
                  featureType: "all",
                  elementType: "geometry.fill",
                  stylers: [{
                    weight: "2.00"
                  }]
                }, {
                  featureType: "all",
                  elementType: "geometry.stroke",
                  stylers: [{
                    color: "#9c9c9c"
                  }]
                }, {
                  featureType: "all",
                  elementType: "labels.text",
                  stylers: [{
                    visibility: "on"
                  }]
                }, {
                  featureType: "landscape",
                  elementType: "all",
                  stylers: [{
                    color: "#f2f2f2"
                  }]
                }, {
                  featureType: "landscape",
                  elementType: "geometry.fill",
                  stylers: [{
                    color: "#efeeee"
                  }]
                }, {
                  featureType: "landscape.man_made",
                  elementType: "geometry.fill",
                  stylers: [{
                    color: "#efeeee"
                  }]
                }, {
                  featureType: "poi",
                  elementType: "all",
                  stylers: [{
                    visibility: "off"
                  }]
                }, {
                  featureType: "road",
                  elementType: "all",
                  stylers: [{
                    saturation: -100
                  }, {
                    lightness: 45
                  }, {
                    visibility: "off"
                  }, {
                    hue: "#ff0000"
                  }]
                }, {
                  featureType: "road",
                  elementType: "geometry.fill",
                  stylers: [{
                    color: "#faebe3"
                  }]
                }, {
                  featureType: "road",
                  elementType: "labels.text.fill",
                  stylers: [{
                    color: "#7b7b7b"
                  }]
                }, {
                  featureType: "road",
                  elementType: "labels.text.stroke",
                  stylers: [{
                    color: "#ffffff"
                  }]
                }, {
                  featureType: "road.highway",
                  elementType: "all",
                  stylers: [{
                    visibility: "simplified"
                  }]
                }, {
                  featureType: "road.arterial",
                  elementType: "geometry.fill",
                  stylers: [{
                    visibility: "on"
                  }, {
                    color: "#e9d7c1"
                  }]
                }, {
                  featureType: "road.arterial",
                  elementType: "labels.icon",
                  stylers: [{
                    visibility: "off"
                  }]
                }, {
                  featureType: "road.local",
                  elementType: "geometry.fill",
                  stylers: [{
                    visibility: "off"
                  }, {
                    color: "#f1b060"
                  }]
                }, {
                  featureType: "transit",
                  elementType: "all",
                  stylers: [{
                    visibility: "off"
                  }]
                }, {
                  featureType: "transit.line",
                  elementType: "geometry.fill",
                  stylers: [{
                    visibility: "on"
                  }, {
                    color: "#f1b060"
                  }]
                }, {
                  featureType: "transit.line",
                  elementType: "labels.text.fill",
                  stylers: [{
                    visibility: "on"
                  }]
                }, {
                  featureType: "transit.line",
                  elementType: "labels.icon",
                  stylers: [{
                    visibility: "on"
                  }]
                }, {
                  featureType: "water",
                  elementType: "all",
                  stylers: [{
                    visibility: "on"
                  }, {
                    color: "#a8abb3"
                  }]
                }, {
                  featureType: "water",
                  elementType: "geometry.fill",
                  stylers: [{
                    color: "#d1e4e4"
                  }]
                }, {
                  featureType: "water",
                  elementType: "labels.text.fill",
                  stylers: [{
                    color: "#000000"
                  }]
                }, {
                  featureType: "water",
                  elementType: "labels.text.stroke",
                  stylers: [{
                    color: "#ffffff"
                  }]
                }]
              };
            t.load().then((function () {
              var t = new google.maps.Map(document.getElementById("map"), e);
              new google.maps.Marker({
                position: new google.maps.LatLng(40.67, -73.94),
                map: t,
                icon: "./static/icon.svg"
              })
            }))
          }
        }]), t
      }();
    e.default = s
  }, function (t, e, a) {
    "use strict";
    a.r(e), a.d(e, "DEFAULT_ID", (function () {
      return i
    })), a.d(e, "Loader", (function () {
      return r
    }));
    const i = "__googleMapsScriptId";
    class r {
      constructor({
        apiKey: t,
        channel: e,
        client: a,
        id: n = i,
        libraries: o = [],
        language: s,
        region: l,
        version: c,
        mapIds: d,
        nonce: h,
        retries: u = 3,
        url: p = "https://maps.googleapis.com/maps/api/js"
      }) {
        if (this.CALLBACK = "__googleMapsCallback", this.callbacks = [], this.done = !1, this.loading = !1, this.errors = [], this.version = c, this.apiKey = t, this.channel = e, this.client = a, this.id = n || i, this.libraries = o, this.language = s, this.region = l, this.mapIds = d, this.nonce = h, this.retries = u, this.url = p, r.instance) {
          if (! function t(e, a) {
              if (e === a) return !0;
              if (e && a && "object" == typeof e && "object" == typeof a) {
                if (e.constructor !== a.constructor) return !1;
                var i, r, n;
                if (Array.isArray(e)) {
                  if ((i = e.length) != a.length) return !1;
                  for (r = i; 0 != r--;)
                    if (!t(e[r], a[r])) return !1;
                  return !0
                }
                if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
                if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === a.valueOf();
                if (e.toString !== Object.prototype.toString) return e.toString() === a.toString();
                if ((i = (n = Object.keys(e)).length) !== Object.keys(a).length) return !1;
                for (r = i; 0 != r--;)
                  if (!Object.prototype.hasOwnProperty.call(a, n[r])) return !1;
                for (r = i; 0 != r--;) {
                  var o = n[r];
                  if (!t(e[o], a[o])) return !1
                }
                return !0
              }
              return e != e && a != a
            }(this.options, r.instance.options)) throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(r.instance.options)}`);
          return r.instance
        }
        r.instance = this
      }
      get options() {
        return {
          version: this.version,
          apiKey: this.apiKey,
          channel: this.channel,
          client: this.client,
          id: this.id,
          libraries: this.libraries,
          language: this.language,
          region: this.region,
          mapIds: this.mapIds,
          nonce: this.nonce,
          url: this.url
        }
      }
      get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1
      }
      createUrl() {
        let t = this.url;
        return t += "?callback=" + this.CALLBACK, this.apiKey && (t += "&key=" + this.apiKey), this.channel && (t += "&channel=" + this.channel), this.client && (t += "&client=" + this.client), this.libraries.length > 0 && (t += "&libraries=" + this.libraries.join(",")), this.language && (t += "&language=" + this.language), this.region && (t += "&region=" + this.region), this.version && (t += "&v=" + this.version), this.mapIds && (t += "&map_ids=" + this.mapIds.join(",")), t
      }
      deleteScript() {
        const t = document.getElementById(this.id);
        t && t.remove()
      }
      load() {
        return this.loadPromise()
      }
      loadPromise() {
        return new Promise((t, e) => {
          this.loadCallback(a => {
            a ? e(a.error) : t(window.google)
          })
        })
      }
      loadCallback(t) {
        this.callbacks.push(t), this.execute()
      }
      setScript() {
        if (document.getElementById(this.id)) return void this.callback();
        const t = this.createUrl(),
          e = document.createElement("script");
        e.id = this.id, e.type = "text/javascript", e.src = t, e.onerror = this.loadErrorCallback.bind(this), e.defer = !0, e.async = !0, this.nonce && (e.nonce = this.nonce), document.head.appendChild(e)
      }
      reset() {
        this.deleteScript(), this.done = !1, this.loading = !1, this.errors = [], this.onerrorEvent = null
      }
      resetIfRetryingFailed() {
        this.failed && this.reset()
      }
      loadErrorCallback(t) {
        if (this.errors.push(t), this.errors.length <= this.retries) {
          const t = this.errors.length * Math.pow(2, this.errors.length);
          console.log(`Failed to load Google Maps script, retrying in ${t} ms.`), setTimeout(() => {
            this.deleteScript(), this.setScript()
          }, t)
        } else this.onerrorEvent = t, this.callback()
      }
      setCallback() {
        window.__googleMapsCallback = this.callback.bind(this)
      }
      callback() {
        this.done = !0, this.loading = !1, this.callbacks.forEach(t => {
          t(this.onerrorEvent)
        }), this.callbacks = []
      }
      execute() {
        if (this.resetIfRetryingFailed(), this.done) this.callback();
        else {
          if (window.google && window.google.maps && window.google.maps.version) return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."), void this.callback();
          this.loading || (this.loading = !0, this.setCallback(), this.setScript())
        }
      }
    }
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(3)),
      n = i(a(4)),
      o = i(a(52));
    a(42);
    var s = i(a(8)),
      l = a(15),
      c = function () {
        function t() {
          (0, r.default)(this, t), this.projectSlider(), this.portfolioThree(), this.galleryOne(), this.testimonial(), this.singleTeam(), this.iconBox()
        }
        return (0, n.default)(t, [{
          key: "projectSlider",
          value: function () {
            new o.default(".nsd-project-slider", {
              breakpoints: {
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                  speed: 1500,
                  centeredSlides: !0
                },
                980: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  speed: 2e3,
                  centeredSlides: !1
                },
                736: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  speed: 1e3,
                  centeredSlides: !1
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  speed: 500,
                  centeredSlides: !1
                }
              },
              navigation: {
                nextEl: document.querySelector(".portfolio-button-next"),
                prevEl: document.querySelector(".portfolio-button-prev")
              },
              on: {
                init: function () {
                  l.gsap.set(".portfolio-button-prev", {
                    opacity: 0
                  }), 1 == (0, s.default)(s.default.device).tablet && l.gsap.set(".swiper-slide-next .project-card .project-card__visual", {
                    xPercent: 0
                  }), 1 == (0, s.default)(s.default.device).phone ? l.gsap.to(".project-card .project-card__visual", {
                    yPercent: 100
                  }) : (l.gsap.to(".swiper-slide-active .project-card__visual", {
                    xPercent: 100
                  }), l.gsap.set(".swiper-slide-next .project-card .project-card__content", {
                    xPercent: 100
                  }), l.gsap.set(".swiper-slide-next .project-card .project-card__content", {
                    xPercent: 15
                  }), l.gsap.set(".swiper-slide-next .project-card .project-card__visual", {
                    xPercent: 15
                  }))
                },
                reachEnd: function () {
                  l.gsap.set(".portfolio-button-next", {
                    opacity: 0
                  })
                },
                reachBeginning: function () {
                  l.gsap.set(".portfolio-button-prev", {
                    opacity: 0
                  })
                },
                slideNextTransitionStart: function () {
                  l.gsap.set(".portfolio-button-prev", {
                    opacity: 1
                  });
                  0 == (0, s.default)(s.default.device).phone && (l.gsap.set(".swiper-slide-next .project-card .project-card__visual", {
                    xPercent: 15
                  }), l.gsap.set(".swiper-slide-next .project-card .project-card__content", {
                    xPercent: 15
                  }), l.gsap.to(".swiper-slide-active .project-card .project-card__content", .5, {
                    xPercent: 0
                  }), l.gsap.to(".swiper-slide-active .project-card .project-card__visual", 1.5, {
                    xPercent: 100
                  }), l.gsap.to(".swiper-slide-prev .project-card .project-card__content", {
                    xPercent: 85,
                    force3D: !1,
                    duration: .5
                  }), l.gsap.to(".swiper-slide-prev .project-card .project-card__visual", {
                    xPercent: 85,
                    force3D: !1,
                    duration: 1.5
                  }))
                },
                slidePrevTransitionStart: function () {
                  l.gsap.set(".portfolio-button-next", {
                    opacity: 1
                  }), 1 == (0, s.default)(s.default.device).phone ? l.gsap.to(".project-card .project-card__visual", {
                    yPercent: 100
                  }) : (l.gsap.to(".swiper-slide-next .project-card .project-card__visual", 1.5, {
                    xPercent: 15
                  }), l.gsap.to(".swiper-slide-next .project-card .project-card__content", .5, {
                    xPercent: 15
                  }), l.gsap.to(".swiper-slide-active .project-card .project-card__visual", {
                    xPercent: 100,
                    duration: 1
                  }), l.gsap.to(".swiper-slide-active .project-card .project-card__content", .5, {
                    xPercent: 0
                  }))
                }
              }
            })
          }
        }, {
          key: "portfolioThree",
          value: function () {
            new o.default(".portfolio-three", {
              effect: "fade",
              spaceBetween: 0,
              speed: 0,
              loop: !0,
              navigation: {
                nextEl: ".nsd-portfolio__btn-next",
                prevEl: ".nsd-portfolio__btn-prev"
              },
              pagination: {
                el: ".horizontal-pagination",
                type: "progressbar"
              },
              on: {
                init: function () {
                  var t = new l.TimelineMax({
                    delay: .1
                  });
                  document.querySelector(".final-slider").innerHTML = "0".concat(this.slides.length - 2), t.to(".second-word", .4, {
                    opacity: 1
                  }).to(".img-single", .4, {
                    opacity: 1
                  }).to(".first-word", .4, {
                    opacity: 1
                  }).to(".third-word", .4, {
                    opacity: 1
                  }, "-=0.2").to(".read-btn", .2, {
                    opacity: 1
                  })
                },
                transitionEnd: function () {
                  var t = document.querySelectorAll(".swiper-slide-active .text__second .word");
                  l.gsap.set(".first-word", {
                    opacity: 0
                  }), l.gsap.set(".third-word", {
                    opacity: 0
                  }), l.gsap.set(".read-btn", {
                    opacity: 0
                  }), l.gsap.set(".img-single", {
                    opacity: 0
                  }), l.gsap.set(t, {
                    y: "100%"
                  }), (new l.TimelineMax).to(".img-single", .4, {
                    opacity: 1
                  }).to(".second-word", .4, {
                    opacity: 1
                  }).to(".first-word", .4, {
                    opacity: 1
                  }).to(".third-word", .4, {
                    opacity: 1
                  }, "-=0.2").to(".read-btn", .2, {
                    opacity: 1
                  }), l.TweenMax.staggerTo(t, .4, {
                    y: "0%"
                  }, .1)
                }
              }
            })
          }
        }, {
          key: "galleryOne",
          value: function () {
            new o.default(".swiper-gallery-1", {
              loop: !0,
              speed: 1e3,
              grabCursor: !0,
              watchSlidesProgress: !0,
              mousewheelControl: !0,
              keyboardControl: !0,
              dynamicBullets: !0,
              navigation: {
                nextEl: document.querySelector(".gallery-button-next"),
                prevEl: document.querySelector(".gallery-button-prev")
              },
              on: {
                progress: function () {
                  for (var t = 0; t < this.slides.length; t++) {
                    var e = this.slides[t].progress * (.5 * this.width);
                    this.slides[t].querySelector(".slide-inner").style.transform = "translate3d(" + e + "px, 0, 0)"
                  }
                },
                touchStart: function () {
                  for (var t = 0; t < this.slides.length; t++) this.slides[t].style.transition = ""
                },
                setTransition: function (t) {
                  for (var e = 0; e < this.slides.length; e++) this.slides[e].style.transition = t + "ms", this.slides[e].querySelector(".slide-inner").style.transition = t + "ms"
                }
              }
            })
          }
        }, {
          key: "testimonial",
          value: function () {
            var t = document.querySelectorAll(".nsd-test-img--item"),
              e = document.querySelectorAll(".nsd-test-img--tab");
            new o.default(".nsd-testimonial-slider", {
              spaceBetween: 30,
              effect: "fade",
              allowTouchMove: !1,
              navigation: {
                nextEl: ".nsd-testimonial-slider__btn-next",
                prevEl: ".nsd-testimonial-slider__btn-prev"
              },
              preventClicks: !1,
              preventClicksPropagation: !1,
              loop: !0,
              pagination: {
                el: ".nsd-testimonial-slider__pagination",
                clickable: !0
              }
            });

            function a() {
              var a = this.classList.contains("nsd-test-img--tab") ? this : this.parentElement,
                i = a.dataset.imgGroup,
                r = a.dataset.imgId;
              e.forEach((function (t) {
                t.dataset.imgGroup === i && (t.dataset.imgId === r ? t.classList.add("nsd-test-img--active") : t.classList.remove("nsd-test-img--active"))
              })), t.forEach((function (t) {
                var e = t;
                e.dataset.imgGroup === i && (e.dataset.imgId === r ? e.classList.add("nsd-test-img--active") : e.classList.remove("nsd-test-img--active"))
              }))
            }
            t.forEach((function (t) {
              t.addEventListener("click", a)
            })), e.forEach((function (t) {
              t.addEventListener("click", a)
            }))
          }
        }, {
          key: "singleTeam",
          value: function () {
            new o.default(".single-team", {
              breakpoints: {
                480: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  slidesPerGroup: 1
                },
                736: {
                  slidesPerView: 2,
                  spaceBetween: 45,
                  slidesPerGroup: 2
                }
              },
              loop: !0,
              navigation: {
                nextEl: ".team-btn__left",
                prevEl: ".team-btn__next"
              },
              pagination: {
                el: ".horizontal-pagination",
                type: "progressbar"
              }
            })
          }
        }, {
          key: "iconBox",
          value: function () {
            new o.default(".nsd-icon-box-wrap", {
              spaceBetween: 30,
              loop: !0,
              breakpoints: {
                480: {
                  slidesPerView: 1
                },
                736: {
                  slidesPerView: 2,
                  spaceBetween: 0
                },
                1366: {
                  slidesPerView: 2
                },
                1920: {
                  slidesPerView: 4,
                  spaceBetween: 0
                }
              },
              pagination: {
                el: ".nsd-icon-box-pagination",
                clickable: !0
              },
              navigation: {
                nextEl: ".next-icon",
                prevEl: ".prev-icon"
              }
            })
          }
        }]), t
      }();
    e.default = c
  }, function (t, e, a) {
    "use strict";
    a.r(e)
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(3)),
      n = i(a(7)),
      o = a(6);
    e.default = function t() {
      var e = this;
      (0, r.default)(this, t), (0, n.default)(this, "animateValue", (function (t, e, a, i) {
        var r = a - e,
          n = e,
          o = a > e ? 1 : 0,
          s = Math.abs(Math.floor(i / r)),
          l = setInterval((function () {
            n += o, t.innerHTML = n.toString(), n == a && clearInterval(l)
          }), s)
      })), (0, n.default)(this, "pageLoad", (function () {
        document.body.classList.remove(".nsd-hidden-opacity");
        var t = document.getElementById("percent"),
          a = window.performance.timing,
          i = -(a.loadEventEnd - a.navigationStart) / 1e3 % 50 * 100;
          // e.animateValue(t, 0, 100, i), 
        setTimeout((function () {
          o.gsap.to(e.wrapper, .5, {
            opacity: 0,
            ease: o.Power4
          }), o.gsap.set(e.wrapper, {
            visibility: "hidden",
            delay: .6
          })
        }), i)
      })), this.wrapper = ".nsd-preloader-wrap", this.pageLoad()
    }
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.LocomotiveInit = void 0;
    var r = i(a(3)),
      n = i(a(4)),
      o = i(a(45)),
      s = a(6),
      l = i(a(47)),
      c = i(a(48));
    s.gsap.registerPlugin(l.default);
    var d = function () {
      function t() {
        (0, r.default)(this, t), this.init(), this.scrollTriggerInit(), this.scrollActions(), (new c.default).init()
      }
      return (0, n.default)(t, [{
        key: "init",
        value: function () {
          this.scroll = new o.default({
            el: document.getElementById("js-scroll"),
            smooth: 0
          })
        }
      }, {
        key: "scrollTriggerInit",
        value: function () {
          this.scroll.on("scroll", l.default.update);
          var t = this;
          l.default.scrollerProxy("#app", {
            scrollTop: function (e) {
              return arguments.length ? t.scroll.scrollTo(e, 0, 0) : t.scroll.scroll.instance.scroll.y
            },
            getBoundingClientRect: function () {
              return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
              }
            },
            pinType: document.getElementById("app").style.transform ? "transf orm" : "fixed"
          })
        }
      }, {
        key: "scrollActions",
        value: function () {
          document.querySelector(".c-badge-outline") && s.gsap.utils.toArray(".c-badge-outline").forEach((function (t) {
            s.gsap.timeline({
              scrollTrigger: {
                trigger: t,
                scroller: "#app",
                start: "top 100%",
                end: "bottom 0%",
                scrub: !0
              }
            }).from(t, {
              duration: 3,
              rotation: 200
            })
          }));
          var t = document.querySelector(".o-resize__content");
          t && s.gsap.timeline({
            scrollTrigger: {
              trigger: t,
              scroller: "#app",
              start: "top 100%",
              end: "bottom 100%",
              scrub: !0
            }
          }).from(t, {
            clipPath: "inset(25% 30% 25% 30%)"
          });
          var e = document.querySelector(".single-team__first");
          e && (s.gsap.to(".single-team__first", 1.2, {
            scrollTrigger: {
              trigger: e,
              scroller: "#app",
              start: "top 100%",
              end: "bottom 100%"
            },
            clipPath: "inset(0px 0px 0px 0%)",
            ease: s.Quad.easeOut
          }), s.gsap.to(".single-team__first-wrapper", 1.7, {
            scrollTrigger: {
              trigger: e,
              scroller: "#app",
              start: "top 100%",
              end: "bottom 100%"
            },
            width: "0%",
            ease: s.Quad.easeOut
          }));
          var a = document.querySelector(".nsd-logo-parent");
          if (a) {
            var i = Array.from(document.querySelectorAll(".nsd-logo-child"));
            s.gsap.set(i, {
              autoAlpha: 0
            }), s.gsap.to(i, 1.2, {
              scrollTrigger: {
                trigger: a,
                scroller: "#app",
                start: "top 100%",
                end: "bottom 100%"
              },
              autoAlpha: 1,
              ease: s.Quad.easeOut,
              stagger: .2
            }), s.gsap.to(".single-team__first-wrapper", 1.7, {
              scrollTrigger: {
                trigger: e,
                scroller: "#app",
                start: "top 100%",
                end: "bottom 100%"
              },
              width: "0%",
              ease: s.Quad.easeOut
            })
          }
        }
      }]), t
    }();
    e.LocomotiveInit = d
  }, function (t, e, a) {
    "use strict";
    a.r(e),
      function (t) {
        function i(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
          for (var a = 0; a < e.length; a++) {
            var i = e[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
          }
        }

        function n(t, e, a) {
          return e && r(t.prototype, e), a && r(t, a), t
        }

        function o(t, e, a) {
          return e in t ? Object.defineProperty(t, e, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = a, t
        }

        function s(t, e) {
          var a = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), a.push.apply(a, i)
          }
          return a
        }

        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2 ? s(Object(a), !0).forEach((function (e) {
              o(t, e, a[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : s(Object(a)).forEach((function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
            }))
          }
          return t
        }

        function c(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && h(t, e)
        }

        function d(t) {
          return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          })(t)
        }

        function h(t, e) {
          return (h = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
          })(t, e)
        }

        function u(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }

        function p(t, e) {
          return !e || "object" != typeof e && "function" != typeof e ? u(t) : e
        }

        function g(t) {
          var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
            } catch (t) {
              return !1
            }
          }();
          return function () {
            var a, i = d(t);
            if (e) {
              var r = d(this).constructor;
              a = Reflect.construct(i, arguments, r)
            } else a = i.apply(this, arguments);
            return p(this, a)
          }
        }

        function f(t, e, a) {
          return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, a) {
            var i = function (t, e) {
              for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = d(t)););
              return t
            }(t, e);
            if (i) {
              var r = Object.getOwnPropertyDescriptor(i, e);
              return r.get ? r.get.call(a) : r.value
            }
          })(t, e, a || t)
        }

        function m(t, e) {
          return function (t) {
            if (Array.isArray(t)) return t
          }(t) || function (t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var a = [],
              i = !0,
              r = !1,
              n = void 0;
            try {
              for (var o, s = t[Symbol.iterator](); !(i = (o = s.next()).done) && (a.push(o.value), !e || a.length !== e); i = !0);
            } catch (t) {
              r = !0, n = t
            } finally {
              try {
                i || null == s.return || s.return()
              } finally {
                if (r) throw n
              }
            }
            return a
          }(t, e) || y(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function v(t) {
          return function (t) {
            if (Array.isArray(t)) return w(t)
          }(t) || function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
          }(t) || y(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function y(t, e) {
          if (t) {
            if ("string" == typeof t) return w(t, e);
            var a = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? w(t, e) : void 0
          }
        }

        function w(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var a = 0, i = new Array(e); a < e; a++) i[a] = t[a];
          return i
        }
        a.d(e, "Native", (function () {
          return gt
        })), a.d(e, "Smooth", (function () {
          return pt
        }));
        var b = {
            el: document,
            name: "scroll",
            offset: [0, 0],
            repeat: !1,
            smooth: !1,
            initPosition: {
              x: 0,
              y: 0
            },
            direction: "vertical",
            gestureDirection: "vertical",
            reloadOnContextChange: !1,
            lerp: .1,
            class: "is-inview",
            scrollbarContainer: !1,
            scrollbarClass: "c-scrollbar",
            scrollingClass: "has-scroll-scrolling",
            draggingClass: "has-scroll-dragging",
            smoothClass: "has-scroll-smooth",
            initClass: "has-scroll-init",
            getSpeed: !1,
            getDirection: !1,
            scrollFromAnywhere: !1,
            multiplier: 1,
            firefoxMultiplier: 50,
            touchMultiplier: 2,
            resetNativeScroll: !0,
            tablet: {
              smooth: !1,
              direction: "vertical",
              gestureDirection: "vertical",
              breakpoint: 1024
            },
            smartphone: {
              smooth: !1,
              direction: "vertical",
              gestureDirection: "vertical"
            }
          },
          x = function () {
            function t() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              i(this, t), Object.assign(this, b, e), this.smartphone = b.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = b.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
                x: this.windowWidth / 2,
                y: this.windowHeight / 2
              }, this.els = {}, this.currentElements = {}, this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
                scroll: {
                  x: 0,
                  y: 0
                },
                limit: {
                  x: this.html.offsetWidth,
                  y: this.html.offsetHeight
                },
                currentElements: this.currentElements
              }, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", this.isMobile && (this.direction = this[this.context].direction), "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y", this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1)
            }
            return n(t, [{
              key: "init",
              value: function () {
                this.initEvents()
              }
            }, {
              key: "checkScroll",
              value: function () {
                this.dispatchScroll()
              }
            }, {
              key: "checkResize",
              value: function () {
                var t = this;
                this.resizeTick || (this.resizeTick = !0, requestAnimationFrame((function () {
                  t.resize(), t.resizeTick = !1
                })))
              }
            }, {
              key: "resize",
              value: function () {}
            }, {
              key: "checkContext",
              value: function () {
                if (this.reloadOnContextChange) {
                  this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                  var t = this.context;
                  if (this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", t != this.context)("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
                }
              }
            }, {
              key: "initEvents",
              value: function () {
                var t = this;
                this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach((function (e) {
                  e.addEventListener("click", t.setScrollTo, !1)
                }))
              }
            }, {
              key: "setScrollTo",
              value: function (t) {
                t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                  offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                })
              }
            }, {
              key: "addElements",
              value: function () {}
            }, {
              key: "detectElements",
              value: function (t) {
                var e = this,
                  a = this.instance.scroll.y,
                  i = a + this.windowHeight,
                  r = this.instance.scroll.x,
                  n = r + this.windowWidth;
                Object.entries(this.els).forEach((function (o) {
                  var s = m(o, 2),
                    l = s[0],
                    c = s[1];
                  if (!c || c.inView && !t || ("horizontal" === e.direction ? n >= c.left && r < c.right && e.setInView(c, l) : i >= c.top && a < c.bottom && e.setInView(c, l)), c && c.inView)
                    if ("horizontal" === e.direction) {
                      var d = c.right - c.left;
                      c.progress = (e.instance.scroll.x - (c.left - e.windowWidth)) / (d + e.windowWidth), (n < c.left || r > c.right) && e.setOutOfView(c, l)
                    } else {
                      var h = c.bottom - c.top;
                      c.progress = (e.instance.scroll.y - (c.top - e.windowHeight)) / (h + e.windowHeight), (i < c.top || a > c.bottom) && e.setOutOfView(c, l)
                    }
                })), this.hasScrollTicking = !1
              }
            }, {
              key: "setInView",
              value: function (t, e) {
                this.els[e].inView = !0, t.el.classList.add(t.class), this.currentElements[e] = t, t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1))
              }
            }, {
              key: "setOutOfView",
              value: function (t, e) {
                var a = this;
                this.els[e].inView = !1, Object.keys(this.currentElements).forEach((function (t) {
                  t === e && delete a.currentElements[t]
                })), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class)
              }
            }, {
              key: "dispatchCall",
              value: function (t, e) {
                this.callWay = e, this.callValue = t.call.split(",").map((function (t) {
                  return t.trim()
                })), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
                var a = new Event(this.namespace + "call");
                this.el.dispatchEvent(a)
              }
            }, {
              key: "dispatchScroll",
              value: function () {
                var t = new Event(this.namespace + "scroll");
                this.el.dispatchEvent(t)
              }
            }, {
              key: "setEvents",
              value: function (t, e) {
                this.listeners[t] || (this.listeners[t] = []);
                var a = this.listeners[t];
                a.push(e), 1 === a.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0))
              }
            }, {
              key: "unsetEvents",
              value: function (t, e) {
                if (this.listeners[t]) {
                  var a = this.listeners[t],
                    i = a.indexOf(e);
                  i < 0 || (a.splice(i, 1), 0 === a.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                }
              }
            }, {
              key: "checkEvent",
              value: function (t) {
                var e = this,
                  a = t.type.replace(this.namespace, ""),
                  i = this.listeners[a];
                i && 0 !== i.length && i.forEach((function (t) {
                  switch (a) {
                    case "scroll":
                      return t(e.instance);
                    case "call":
                      return t(e.callValue, e.callWay, e.callObj);
                    default:
                      return t()
                  }
                }))
              }
            }, {
              key: "startScroll",
              value: function () {}
            }, {
              key: "stopScroll",
              value: function () {}
            }, {
              key: "setScroll",
              value: function (t, e) {
                this.instance.scroll = {
                  x: 0,
                  y: 0
                }
              }
            }, {
              key: "destroy",
              value: function () {
                var t = this;
                window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach((function (e) {
                  t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
                })), this.listeners = {}, this.scrollToEls.forEach((function (e) {
                  e.removeEventListener("click", t.setScrollTo, !1)
                })), this.html.classList.remove(this.initClass)
              }
            }]), t
          }(),
          M = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};

        function z(t, e) {
          return t(e = {
            exports: {}
          }, e.exports), e.exports
        }
        var D = z((function (t, e) {
            t.exports = {
              polyfill: function () {
                var t = window,
                  e = document;
                if (!("scrollBehavior" in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                  var a, i = t.HTMLElement || t.Element,
                    r = {
                      scroll: t.scroll || t.scrollTo,
                      scrollBy: t.scrollBy,
                      elementScroll: i.prototype.scroll || s,
                      scrollIntoView: i.prototype.scrollIntoView
                    },
                    n = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                    o = (a = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(a) ? 1 : 0);
                  t.scroll = t.scrollTo = function () {
                    void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? g.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : r.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                  }, t.scrollBy = function () {
                    void 0 !== arguments[0] && (l(arguments[0]) ? r.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : g.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                  }, i.prototype.scroll = i.prototype.scrollTo = function () {
                    if (void 0 !== arguments[0])
                      if (!0 !== l(arguments[0])) {
                        var t = arguments[0].left,
                          e = arguments[0].top;
                        g.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                      } else {
                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                        r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                      }
                  }, i.prototype.scrollBy = function () {
                    void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                      left: ~~arguments[0].left + this.scrollLeft,
                      top: ~~arguments[0].top + this.scrollTop,
                      behavior: arguments[0].behavior
                    }) : r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                  }, i.prototype.scrollIntoView = function () {
                    if (!0 !== l(arguments[0])) {
                      var a = u(this),
                        i = a.getBoundingClientRect(),
                        n = this.getBoundingClientRect();
                      a !== e.body ? (g.call(this, a, a.scrollLeft + n.left - i.left, a.scrollTop + n.top - i.top), "fixed" !== t.getComputedStyle(a).position && t.scrollBy({
                        left: i.left,
                        top: i.top,
                        behavior: "smooth"
                      })) : t.scrollBy({
                        left: n.left,
                        top: n.top,
                        behavior: "smooth"
                      })
                    } else r.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                  }
                }

                function s(t, e) {
                  this.scrollLeft = t, this.scrollTop = e
                }

                function l(t) {
                  if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                  if ("object" == typeof t && "smooth" === t.behavior) return !1;
                  throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                }

                function c(t, e) {
                  return "Y" === e ? t.clientHeight + o < t.scrollHeight : "X" === e ? t.clientWidth + o < t.scrollWidth : void 0
                }

                function d(e, a) {
                  var i = t.getComputedStyle(e, null)["overflow" + a];
                  return "auto" === i || "scroll" === i
                }

                function h(t) {
                  var e = c(t, "Y") && d(t, "Y"),
                    a = c(t, "X") && d(t, "X");
                  return e || a
                }

                function u(t) {
                  for (; t !== e.body && !1 === h(t);) t = t.parentNode || t.host;
                  return t
                }

                function p(e) {
                  var a, i, r, o, s = (n() - e.startTime) / 468;
                  o = s = s > 1 ? 1 : s, a = .5 * (1 - Math.cos(Math.PI * o)), i = e.startX + (e.x - e.startX) * a, r = e.startY + (e.y - e.startY) * a, e.method.call(e.scrollable, i, r), i === e.x && r === e.y || t.requestAnimationFrame(p.bind(t, e))
                }

                function g(a, i, o) {
                  var l, c, d, h, u = n();
                  a === e.body ? (l = t, c = t.scrollX || t.pageXOffset, d = t.scrollY || t.pageYOffset, h = r.scroll) : (l = a, c = a.scrollLeft, d = a.scrollTop, h = s), p({
                    scrollable: l,
                    method: h,
                    startTime: u,
                    startX: c,
                    startY: d,
                    x: i,
                    y: o
                  })
                }
              }
            }
          })),
          L = (D.polyfill, function (t) {
            c(a, t);
            var e = g(a);

            function a() {
              var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return i(this, a), (t = e.call(this, r)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)), window.addEventListener("scroll", t.checkScroll, !1), void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = D, window.smoothscrollPolyfill.polyfill()), t
            }
            return n(a, [{
              key: "init",
              value: function () {
                this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), f(d(a.prototype), "init", this).call(this)
              }
            }, {
              key: "checkScroll",
              value: function () {
                var t = this;
                f(d(a.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.instance.scroll.y = window.pageYOffset, Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function () {
                  t.detectElements()
                })), this.hasScrollTicking = !0))
              }
            }, {
              key: "addDirection",
              value: function () {
                window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
              }
            }, {
              key: "addSpeed",
              value: function () {
                window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
              }
            }, {
              key: "resize",
              value: function () {
                Object.entries(this.els).length && (this.windowHeight = window.innerHeight, this.updateElements())
              }
            }, {
              key: "addElements",
              value: function () {
                var t = this;
                this.els = {}, this.el.querySelectorAll("[data-" + this.name + "]").forEach((function (e, a) {
                  e.getBoundingClientRect();
                  var i, r, n, o = e.dataset[t.name + "Class"] || t.class,
                    s = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : a,
                    l = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                    c = e.dataset[t.name + "Repeat"],
                    d = e.dataset[t.name + "Call"],
                    h = e.dataset[t.name + "Target"],
                    u = (n = void 0 !== h ? document.querySelector("".concat(h)) : e).getBoundingClientRect();
                  i = u.top + t.instance.scroll.y, r = u.left + t.instance.scroll.x;
                  var p = i + n.offsetHeight,
                    g = r + n.offsetWidth;
                  c = "false" != c && (null != c || t.repeat);
                  var f = t.getRelativeOffset(l),
                    m = {
                      el: e,
                      targetEl: n,
                      id: s,
                      class: o,
                      top: i += f[0],
                      bottom: p -= f[1],
                      left: r,
                      right: g,
                      offset: l,
                      progress: 0,
                      repeat: c,
                      inView: !1,
                      call: d
                    };
                  t.els[s] = m, e.classList.contains(o) && t.setInView(t.els[s], s)
                }))
              }
            }, {
              key: "updateElements",
              value: function () {
                var t = this;
                Object.entries(this.els).forEach((function (e) {
                  var a = m(e, 2),
                    i = a[0],
                    r = a[1],
                    n = r.targetEl.getBoundingClientRect().top + t.instance.scroll.y,
                    o = n + r.targetEl.offsetHeight,
                    s = t.getRelativeOffset(r.offset);
                  t.els[i].top = n + s[0], t.els[i].bottom = o - s[1]
                })), this.hasScrollTicking = !1
              }
            }, {
              key: "getRelativeOffset",
              value: function (t) {
                var e = [0, 0];
                if (t)
                  for (var a = 0; a < t.length; a++) "string" == typeof t[a] ? t[a].includes("%") ? e[a] = parseInt(t[a].replace("%", "") * this.windowHeight / 100) : e[a] = parseInt(t[a]) : e[a] = t[a];
                return e
              }
            }, {
              key: "scrollTo",
              value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  a = parseInt(e.offset) || 0,
                  i = !!e.callback && e.callback;
                if ("string" == typeof t) {
                  if ("top" === t) t = this.html;
                  else if ("bottom" === t) t = this.html.offsetHeight - window.innerHeight;
                  else if (!(t = document.querySelector(t))) return
                } else if ("number" == typeof t) t = parseInt(t);
                else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                a = "number" != typeof t ? t.getBoundingClientRect().top + a + this.instance.scroll.y : t + a;
                var r = function () {
                  return parseInt(window.pageYOffset) === parseInt(a)
                };
                if (i) {
                  if (r()) return void i();
                  var n = function t() {
                    r() && (window.removeEventListener("scroll", t), i())
                  };
                  window.addEventListener("scroll", n)
                }
                window.scrollTo({
                  top: a,
                  behavior: "smooth"
                })
              }
            }, {
              key: "update",
              value: function () {
                this.addElements(), this.detectElements()
              }
            }, {
              key: "destroy",
              value: function () {
                f(d(a.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1)
              }
            }]), a
          }(x)),
          E = Object.getOwnPropertySymbols,
          A = Object.prototype.hasOwnProperty,
          T = Object.prototype.propertyIsEnumerable;

        function C(t) {
          if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(t)
        }
        var _ = function () {
          try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, a = 0; a < 10; a++) e["_" + String.fromCharCode(a)] = a;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map((function (t) {
                return e[t]
              })).join("")) return !1;
            var i = {};
            return "abcdefghijklmnopqrst".split("").forEach((function (t) {
              i[t] = t
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
          } catch (t) {
            return !1
          }
        }() ? Object.assign : function (t, e) {
          for (var a, i, r = C(t), n = 1; n < arguments.length; n++) {
            for (var o in a = Object(arguments[n])) A.call(a, o) && (r[o] = a[o]);
            if (E) {
              i = E(a);
              for (var s = 0; s < i.length; s++) T.call(a, i[s]) && (r[i[s]] = a[i[s]])
            }
          }
          return r
        };

        function S() {}
        S.prototype = {
          on: function (t, e, a) {
            var i = this.e || (this.e = {});
            return (i[t] || (i[t] = [])).push({
              fn: e,
              ctx: a
            }), this
          },
          once: function (t, e, a) {
            var i = this;

            function r() {
              i.off(t, r), e.apply(a, arguments)
            }
            return r._ = e, this.on(t, r, a)
          },
          emit: function (t) {
            for (var e = [].slice.call(arguments, 1), a = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, r = a.length; i < r; i++) a[i].fn.apply(a[i].ctx, e);
            return this
          },
          off: function (t, e) {
            var a = this.e || (this.e = {}),
              i = a[t],
              r = [];
            if (i && e)
              for (var n = 0, o = i.length; n < o; n++) i[n].fn !== e && i[n].fn._ !== e && r.push(i[n]);
            return r.length ? a[t] = r : delete a[t], this
          }
        };
        var k = S,
          P = z((function (t, e) {
            (function () {
              (null !== e ? e : this).Lethargy = function () {
                function t(t, e, a, i) {
                  this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != a ? 1 + Math.abs(a) : 1.1, this.delay = null != i ? i : 150, this.lastUpDeltas = function () {
                    var t, e, a;
                    for (a = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) a.push(null);
                    return a
                  }.call(this), this.lastDownDeltas = function () {
                    var t, e, a;
                    for (a = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) a.push(null);
                    return a
                  }.call(this), this.deltasTimestamp = function () {
                    var t, e, a;
                    for (a = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--) a.push(null);
                    return a
                  }.call(this)
                }
                return t.prototype.check = function (t) {
                  var e;
                  return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), e > 0 ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
                }, t.prototype.isInertia = function (t) {
                  var e, a, i, r, n, o, s;
                  return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (i = e.slice(0, this.stability), a = e.slice(this.stability, 2 * this.stability), s = i.reduce((function (t, e) {
                    return t + e
                  })), n = a.reduce((function (t, e) {
                    return t + e
                  })), o = s / i.length, r = n / a.length, Math.abs(o) < Math.abs(r * this.tolerance) && this.sensitivity < Math.abs(r) && t)
                }, t.prototype.showLastUpDeltas = function () {
                  return this.lastUpDeltas
                }, t.prototype.showLastDownDeltas = function () {
                  return this.lastDownDeltas
                }, t
              }()
            }).call(M)
          })),
          O = {
            hasWheelEvent: "onwheel" in document,
            hasMouseWheelEvent: "onmousewheel" in document,
            hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
            hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
            hasPointer: !!window.navigator.msPointerEnabled,
            hasKeyDown: "onkeydown" in document,
            isFirefox: navigator.userAgent.indexOf("Firefox") > -1
          },
          H = Object.prototype.toString,
          V = Object.prototype.hasOwnProperty;

        function F(t, e) {
          return function () {
            return t.apply(e, arguments)
          }
        }
        var B = P.Lethargy,
          I = "virtualscroll",
          $ = q,
          j = 37,
          R = 38,
          N = 39,
          Y = 40,
          X = 32;

        function q(t) {
          ! function (t) {
            if (!t) return console.warn("bindAll requires at least one argument.");
            var e = Array.prototype.slice.call(arguments, 1);
            if (0 === e.length)
              for (var a in t) V.call(t, a) && "function" == typeof t[a] && "[object Function]" == H.call(t[a]) && e.push(a);
            for (var i = 0; i < e.length; i++) {
              var r = e[i];
              t[r] = F(t[r], t)
            }
          }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = _({
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: !1,
            unpreventTouchClass: "vs-touchmove-allowed",
            limitInertia: !1,
            useKeyboard: !0,
            useTouch: !0
          }, t), this.options.limitInertia && (this._lethargy = new B), this._emitter = new k, this._event = {
            y: 0,
            x: 0,
            deltaX: 0,
            deltaY: 0
          }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
            passive: this.options.passive
          })
        }

        function W(t, e, a) {
          return (1 - a) * t + a * e
        }

        function G(t) {
          var e = {};
          if (window.getComputedStyle) {
            var a = getComputedStyle(t),
              i = a.transform || a.webkitTransform || a.mozTransform,
              r = i.match(/^matrix3d\((.+)\)$/);
            return r ? (e.x = r ? parseFloat(r[1].split(", ")[12]) : 0, e.y = r ? parseFloat(r[1].split(", ")[13]) : 0) : (r = i.match(/^matrix\((.+)\)$/), e.x = r ? parseFloat(r[1].split(", ")[4]) : 0, e.y = r ? parseFloat(r[1].split(", ")[5]) : 0), e
          }
        }

        function U(t) {
          for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
          return e
        }
        q.prototype._notify = function (t) {
          var e = this._event;
          e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(I, {
            x: e.x,
            y: e.y,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            originalEvent: t
          })
        }, q.prototype._onWheel = function (t) {
          var e = this.options;
          if (!this._lethargy || !1 !== this._lethargy.check(t)) {
            var a = this._event;
            a.deltaX = t.wheelDeltaX || -1 * t.deltaX, a.deltaY = t.wheelDeltaY || -1 * t.deltaY, O.isFirefox && 1 == t.deltaMode && (a.deltaX *= e.firefoxMultiplier, a.deltaY *= e.firefoxMultiplier), a.deltaX *= e.mouseMultiplier, a.deltaY *= e.mouseMultiplier, this._notify(t)
          }
        }, q.prototype._onMouseWheel = function (t) {
          if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
            var e = this._event;
            e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
          }
        }, q.prototype._onTouchStart = function (t) {
          var e = t.targetTouches ? t.targetTouches[0] : t;
          this.touchStartX = e.pageX, this.touchStartY = e.pageY
        }, q.prototype._onTouchMove = function (t) {
          var e = this.options;
          e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
          var a = this._event,
            i = t.targetTouches ? t.targetTouches[0] : t;
          a.deltaX = (i.pageX - this.touchStartX) * e.touchMultiplier, a.deltaY = (i.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = i.pageX, this.touchStartY = i.pageY, this._notify(t)
        }, q.prototype._onKeyDown = function (t) {
          var e = this._event;
          e.deltaX = e.deltaY = 0;
          var a = window.innerHeight - 40;
          switch (t.keyCode) {
            case j:
            case R:
              e.deltaY = this.options.keyStep;
              break;
            case N:
            case Y:
              e.deltaY = -this.options.keyStep;
              break;
            case t.shiftKey:
              e.deltaY = a;
              break;
            case X:
              e.deltaY = -a;
              break;
            default:
              return
          }
          this._notify(t)
        }, q.prototype._bind = function () {
          O.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), O.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), O.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), O.hasPointer && O.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), O.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
        }, q.prototype._unbind = function () {
          O.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), O.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), O.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), O.hasPointer && O.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), O.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
        }, q.prototype.on = function (t, e) {
          this._emitter.on(I, t, e);
          var a = this._emitter.e;
          a && a[I] && 1 === a[I].length && this._bind()
        }, q.prototype.off = function (t, e) {
          this._emitter.off(I, t, e);
          var a = this._emitter.e;
          (!a[I] || a[I].length <= 0) && this._unbind()
        }, q.prototype.reset = function () {
          var t = this._event;
          t.x = 0, t.y = 0
        }, q.prototype.destroy = function () {
          this._emitter.off(), this._unbind()
        };
        var K = "function" == typeof Float32Array;

        function Q(t, e) {
          return 1 - 3 * e + 3 * t
        }

        function J(t, e) {
          return 3 * e - 6 * t
        }

        function Z(t) {
          return 3 * t
        }

        function tt(t, e, a) {
          return ((Q(e, a) * t + J(e, a)) * t + Z(e)) * t
        }

        function et(t, e, a) {
          return 3 * Q(e, a) * t * t + 2 * J(e, a) * t + Z(e)
        }

        function at(t) {
          return t
        }
        var it = function (t, e, a, i) {
            if (!(0 <= t && t <= 1 && 0 <= a && a <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            if (t === e && a === i) return at;
            for (var r = K ? new Float32Array(11) : new Array(11), n = 0; n < 11; ++n) r[n] = tt(.1 * n, t, a);

            function o(e) {
              for (var i = 0, n = 1; 10 !== n && r[n] <= e; ++n) i += .1;
              --n;
              var o = i + .1 * ((e - r[n]) / (r[n + 1] - r[n])),
                s = et(o, t, a);
              return s >= .001 ? function (t, e, a, i) {
                for (var r = 0; r < 4; ++r) {
                  var n = et(e, a, i);
                  if (0 === n) return e;
                  e -= (tt(e, a, i) - t) / n
                }
                return e
              }(e, o, t, a) : 0 === s ? o : function (t, e, a, i, r) {
                var n, o, s = 0;
                do {
                  (n = tt(o = e + (a - e) / 2, i, r) - t) > 0 ? a = o : e = o
                } while (Math.abs(n) > 1e-7 && ++s < 10);
                return o
              }(e, i, i + .1, t, a)
            }
            return function (t) {
              return 0 === t ? 0 : 1 === t ? 1 : tt(o(t), e, i)
            }
          },
          rt = 38,
          nt = 40,
          ot = 32,
          st = 9,
          lt = 33,
          ct = 34,
          dt = 36,
          ht = 35,
          ut = function (t) {
            c(a, t);
            var e = g(a);

            function a() {
              var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return i(this, a), history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), (t = e.call(this, r)).inertia && (t.lerp = .1 * t.inertia), t.isScrolling = !1, t.isDraggingScrollbar = !1, t.isTicking = !1, t.hasScrollTicking = !1, t.parallaxElements = {}, t.stop = !1, t.scrollbarContainer = r.scrollbarContainer, t.checkKey = t.checkKey.bind(u(t)), window.addEventListener("keydown", t.checkKey, !1), t
            }
            return n(a, [{
              key: "init",
              value: function () {
                var t = this;
                this.html.classList.add(this.smoothClass), this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction), this.instance = l({
                  delta: {
                    x: this.initPosition.x,
                    y: this.initPosition.y
                  },
                  scroll: {
                    x: this.initPosition.x,
                    y: this.initPosition.y
                  }
                }, this.instance), this.vs = new $({
                  el: this.scrollFromAnywhere ? document : this.el,
                  mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                  firefoxMultiplier: this.firefoxMultiplier,
                  touchMultiplier: this.touchMultiplier,
                  useKeyboard: !1,
                  passive: !0
                }), this.vs.on((function (e) {
                  t.stop || t.isDraggingScrollbar || requestAnimationFrame((function () {
                    t.updateDelta(e), t.isScrolling || t.startScrolling()
                  }))
                })), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.checkScroll(!0), this.transformElements(!0, !0), f(d(a.prototype), "init", this).call(this)
              }
            }, {
              key: "setScrollLimit",
              value: function () {
                if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight, "horizontal" === this.direction) {
                  for (var t = 0, e = this.el.children, a = 0; a < e.length; a++) t += e[a].offsetWidth;
                  this.instance.limit.x = t - this.windowWidth
                }
              }
            }, {
              key: "startScrolling",
              value: function () {
                this.startScrollTs = Date.now(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
              }
            }, {
              key: "stopScrolling",
              value: function () {
                cancelAnimationFrame(this.checkScrollRaf), this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass)
              }
            }, {
              key: "checkKey",
              value: function (t) {
                var e = this;
                if (this.stop) t.keyCode == st && requestAnimationFrame((function () {
                  e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0
                }));
                else {
                  switch (t.keyCode) {
                    case st:
                      requestAnimationFrame((function () {
                        e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0, e.scrollTo(document.activeElement, {
                          offset: -window.innerHeight / 2
                        })
                      }));
                      break;
                    case rt:
                      this.instance.delta[this.directionAxis] -= 240;
                      break;
                    case nt:
                      this.instance.delta[this.directionAxis] += 240;
                      break;
                    case lt:
                      this.instance.delta[this.directionAxis] -= window.innerHeight;
                      break;
                    case ct:
                      this.instance.delta[this.directionAxis] += window.innerHeight;
                      break;
                    case dt:
                      this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                      break;
                    case ht:
                      this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                      break;
                    case ot:
                      document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                      break;
                    default:
                      return
                  }
                  this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]), this.stopScrolling(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass)
                }
              }
            }, {
              key: "checkScroll",
              value: function () {
                var t = this,
                  e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e || this.isScrolling || this.isDraggingScrollbar) {
                  this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame((function () {
                    return t.checkScroll()
                  })), this.hasScrollTicking = !0), this.updateScroll();
                  var i = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]),
                    r = Date.now() - this.startScrollTs;
                  if (!this.animatingScroll && r > 100 && (i < .5 && 0 != this.instance.delta[this.directionAxis] || i < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(), Object.entries(this.sections).forEach((function (a) {
                      var i = m(a, 2),
                        r = (i[0], i[1]);
                      r.persistent || t.instance.scroll[t.directionAxis] > r.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < r.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(r.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(r.el, 0, -t.instance.scroll[t.directionAxis]), r.inView || (r.inView = !0, r.el.style.opacity = 1, r.el.style.pointerEvents = "all", r.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : ((r.inView || e) && (r.inView = !1, r.el.style.opacity = 0, r.el.style.pointerEvents = "none", r.el.removeAttribute("data-".concat(t.name, "-section-inview"))), t.transform(r.el, 0, 0))
                    })), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.detectElements(), this.transformElements(), this.hasScrollbar) {
                    var n = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                    "horizontal" === this.direction ? this.transform(this.scrollbarThumb, n, 0) : this.transform(this.scrollbarThumb, 0, n)
                  }
                  f(d(a.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1
                }
              }
            }, {
              key: "resize",
              value: function () {
                this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.checkContext(), this.windowMiddle = {
                  x: this.windowWidth / 2,
                  y: this.windowHeight / 2
                }, this.update()
              }
            }, {
              key: "updateDelta",
              value: function (t) {
                var e, a = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                e = "both" === a ? t.deltaX + t.deltaY : "vertical" === a ? t.deltaY : "horizontal" === a ? t.deltaX : t.deltaY, this.instance.delta[this.directionAxis] -= e * this.multiplier, this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
              }
            }, {
              key: "updateScroll",
              value: function (t) {
                this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = W(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
              }
            }, {
              key: "addDirection",
              value: function () {
                this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"), this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
              }
            }, {
              key: "addSpeed",
              value: function () {
                this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
              }
            }, {
              key: "initScrollBar",
              value: function () {
                if (this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.hasScrollbar = !1, "horizontal" == this.direction) {
                  if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                }
              }
            }, {
              key: "reinitScrollBar",
              value: function () {
                if (this.hasScrollbar = !1, "horizontal" == this.direction) {
                  if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return
                } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                }
              }
            }, {
              key: "destroyScrollBar",
              value: function () {
                this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove()
              }
            }, {
              key: "getScrollBar",
              value: function (t) {
                this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass)
              }
            }, {
              key: "releaseScrollBar",
              value: function (t) {
                this.isDraggingScrollbar = !1, this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass)
              }
            }, {
              key: "moveScrollBar",
              value: function (t) {
                var e = this;
                this.isDraggingScrollbar && requestAnimationFrame((function () {
                  var a = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100,
                    i = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
                  i > 0 && i < e.instance.limit.y && (e.instance.delta.y = i), a > 0 && a < e.instance.limit.x && (e.instance.delta.x = a)
                }))
              }
            }, {
              key: "addElements",
              value: function () {
                var t = this;
                this.els = {}, this.parallaxElements = {}, this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach((function (e, a) {
                  var i, r, n, o = U(e),
                    s = Object.entries(t.sections).map((function (t) {
                      var e = m(t, 2);
                      e[0];
                      return e[1]
                    })).find((function (t) {
                      return o.includes(t.el)
                    })),
                    l = e.dataset[t.name + "Class"] || t.class,
                    c = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + a,
                    d = e.dataset[t.name + "Repeat"],
                    h = e.dataset[t.name + "Call"],
                    u = e.dataset[t.name + "Position"],
                    p = e.dataset[t.name + "Delay"],
                    g = e.dataset[t.name + "Direction"],
                    f = "string" == typeof e.dataset[t.name + "Sticky"],
                    v = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10,
                    y = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset,
                    w = e.dataset[t.name + "Target"],
                    b = (n = void 0 !== w ? document.querySelector("".concat(w)) : e).getBoundingClientRect();
                  null === s || s.inView ? (i = b.top + t.instance.scroll.y - G(n).y, r = b.left + t.instance.scroll.x - G(n).x) : (i = b.top - G(s.el).y - G(n).y, r = b.left - G(s.el).x - G(n).x);
                  var x = i + n.offsetHeight,
                    M = r + n.offsetWidth,
                    z = {
                      x: (M - r) / 2 + r,
                      y: (x - i) / 2 + i
                    };
                  if (f) {
                    var D = e.getBoundingClientRect(),
                      L = D.top,
                      E = D.left,
                      A = {
                        x: E - r,
                        y: L - i
                      };
                    i += window.innerHeight, r += window.innerWidth, x = L + n.offsetHeight - e.offsetHeight - A[t.directionAxis], z = {
                      x: ((M = E + n.offsetWidth - e.offsetWidth - A[t.directionAxis]) - r) / 2 + r,
                      y: (x - i) / 2 + i
                    }
                  }
                  d = "false" != d && (null != d || t.repeat);
                  var T = [0, 0];
                  if (y)
                    if ("horizontal" === t.direction) {
                      for (var C = 0; C < y.length; C++) "string" == typeof y[C] ? y[C].includes("%") ? T[C] = parseInt(y[C].replace("%", "") * t.windowWidth / 100) : T[C] = parseInt(y[C]) : T[C] = y[C];
                      r += T[0], M -= T[1]
                    } else {
                      for (C = 0; C < y.length; C++) "string" == typeof y[C] ? y[C].includes("%") ? T[C] = parseInt(y[C].replace("%", "") * t.windowHeight / 100) : T[C] = parseInt(y[C]) : T[C] = y[C];
                      i += T[0], x -= T[1]
                    } var _ = {
                    el: e,
                    id: c,
                    class: l,
                    section: s,
                    top: i,
                    middle: z,
                    bottom: x,
                    left: r,
                    right: M,
                    offset: y,
                    progress: 0,
                    repeat: d,
                    inView: !1,
                    call: h,
                    speed: v,
                    delay: p,
                    position: u,
                    target: n,
                    direction: g,
                    sticky: f
                  };
                  t.els[c] = _, e.classList.contains(l) && t.setInView(t.els[c], c), (!1 !== v || f) && (t.parallaxElements[c] = _)
                }))
              }
            }, {
              key: "addSections",
              value: function () {
                var t = this;
                this.sections = {};
                var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                0 === e.length && (e = [this.el]), e.forEach((function (e, a) {
                  var i = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + a,
                    r = e.getBoundingClientRect(),
                    n = {
                      x: r.left - 1.5 * window.innerWidth - G(e).x,
                      y: r.top - 1.5 * window.innerHeight - G(e).y
                    },
                    o = {
                      x: n.x + r.width + 2 * window.innerWidth,
                      y: n.y + r.height + 2 * window.innerHeight
                    },
                    s = "string" == typeof e.dataset[t.name + "Persistent"];
                  e.setAttribute("data-scroll-section-id", i);
                  var l = {
                    el: e,
                    offset: n,
                    limit: o,
                    inView: !1,
                    persistent: s,
                    id: i
                  };
                  t.sections[i] = l
                }))
              }
            }, {
              key: "transform",
              value: function (t, e, a, i) {
                var r;
                if (i) {
                  var n = G(t),
                    o = W(n.x, e, i),
                    s = W(n.y, a, i);
                  r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(o, ",").concat(s, ",0,1)")
                } else r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(a, ",0,1)");
                t.style.webkitTransform = r, t.style.msTransform = r, t.style.transform = r
              }
            }, {
              key: "transformElements",
              value: function (t) {
                var e = this,
                  a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  i = this.instance.scroll.x + this.windowWidth,
                  r = this.instance.scroll.y + this.windowHeight,
                  n = {
                    x: this.instance.scroll.x + this.windowMiddle.x,
                    y: this.instance.scroll.y + this.windowMiddle.y
                  };
                Object.entries(this.parallaxElements).forEach((function (o) {
                  var s = m(o, 2),
                    l = (s[0], s[1]),
                    c = !1;
                  if (t && (c = 0), l.inView || a) switch (l.position) {
                    case "top":
                      c = e.instance.scroll[e.directionAxis] * -l.speed;
                      break;
                    case "elementTop":
                      c = (r - l.top) * -l.speed;
                      break;
                    case "bottom":
                      c = (e.instance.limit[e.directionAxis] - r + e.windowHeight) * l.speed;
                      break;
                    case "left":
                      c = e.instance.scroll[e.directionAxis] * -l.speed;
                      break;
                    case "elementLeft":
                      c = (i - l.left) * -l.speed;
                      break;
                    case "right":
                      c = (e.instance.limit[e.directionAxis] - i + e.windowHeight) * l.speed;
                      break;
                    default:
                      c = (n[e.directionAxis] - l.middle[e.directionAxis]) * -l.speed
                  }
                  l.sticky && (c = l.inView ? "horizontal" === e.direction ? e.instance.scroll.x - l.left + window.innerWidth : e.instance.scroll.y - l.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < l.left - window.innerWidth && e.instance.scroll.x < l.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > l.right && e.instance.scroll.x > l.right + 100 && l.right - l.left + window.innerWidth : e.instance.scroll.y < l.top - window.innerHeight && e.instance.scroll.y < l.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > l.bottom && e.instance.scroll.y > l.bottom + 100 && l.bottom - l.top + window.innerHeight), !1 !== c && ("horizontal" === l.direction || "horizontal" === e.direction && "vertical" !== l.direction ? e.transform(l.el, c, 0, !t && l.delay) : e.transform(l.el, 0, c, !t && l.delay))
                }))
              }
            }, {
              key: "scrollTo",
              value: function (t) {
                var e = this,
                  a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  i = parseInt(a.offset) || 0,
                  r = isNaN(parseInt(a.duration)) ? 1e3 : parseInt(a.duration),
                  n = a.easing || [.25, 0, .35, 1],
                  o = !!a.disableLerp,
                  s = !!a.callback && a.callback;
                if (n = it.apply(void 0, v(n)), "string" == typeof t) {
                  if ("top" === t) t = 0;
                  else if ("bottom" === t) t = this.instance.limit.y;
                  else if ("left" === t) t = 0;
                  else if ("right" === t) t = this.instance.limit.x;
                  else if (!(t = document.querySelector(t))) return
                } else if ("number" == typeof t) t = parseInt(t);
                else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");
                if ("number" != typeof t) {
                  var l = U(t).includes(this.el);
                  if (!l) return;
                  var c = t.getBoundingClientRect(),
                    d = c.top,
                    h = c.left,
                    u = U(t),
                    p = u.find((function (t) {
                      return Object.entries(e.sections).map((function (t) {
                        var e = m(t, 2);
                        e[0];
                        return e[1]
                      })).find((function (e) {
                        return e.el == t
                      }))
                    })),
                    g = 0;
                  g = p ? G(p)[this.directionAxis] : -this.instance.scroll[this.directionAxis], i = "horizontal" === this.direction ? h + i - g : d + i - g
                } else i = t + i;
                var f = parseFloat(this.instance.delta[this.directionAxis]),
                  y = Math.max(0, Math.min(i, this.instance.limit[this.directionAxis])),
                  w = y - f,
                  b = function (t) {
                    o ? "horizontal" === e.direction ? e.setScroll(f + w * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, f + w * t) : e.instance.delta[e.directionAxis] = f + w * t
                  };
                this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();
                var x = Date.now(),
                  M = function t() {
                    var a = (Date.now() - x) / r;
                    a > 1 ? (b(1), e.animatingScroll = !1, 0 == r && e.update(), s && s()) : (e.scrollToRaf = requestAnimationFrame(t), b(n(a)))
                  };
                M()
              }
            }, {
              key: "update",
              value: function () {
                this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0)
              }
            }, {
              key: "startScroll",
              value: function () {
                this.stop = !1
              }
            }, {
              key: "stopScroll",
              value: function () {
                this.stop = !0
              }
            }, {
              key: "setScroll",
              value: function (t, e) {
                this.instance = l(l({}, this.instance), {}, {
                  scroll: {
                    x: t,
                    y: e
                  },
                  delta: {
                    x: t,
                    y: e
                  },
                  speed: 0
                })
              }
            }, {
              key: "destroy",
              value: function () {
                f(d(a.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1)
              }
            }]), a
          }(x),
          pt = function () {
            function t() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              i(this, t), this.options = e, Object.assign(this, b, e), this.smartphone = b.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = b.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.smooth || "horizontal" != this.direction || console.warn("ðŸš¨ `smooth:false` & `horizontal` direction are not yet compatible"), this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("ðŸš¨ `smooth:false` & `horizontal` direction are not yet compatible (tablet)"), this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("ðŸš¨ `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"), this.init()
            }
            return n(t, [{
              key: "init",
              value: function () {
                if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint, this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint, this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new ut(this.options) : this.scroll = new L(this.options), this.scroll.init(), window.location.hash) {
                  var t = window.location.hash.slice(1, window.location.hash.length),
                    e = document.getElementById(t);
                  e && this.scroll.scrollTo(e)
                }
              }
            }, {
              key: "update",
              value: function () {
                this.scroll.update()
              }
            }, {
              key: "start",
              value: function () {
                this.scroll.startScroll()
              }
            }, {
              key: "stop",
              value: function () {
                this.scroll.stopScroll()
              }
            }, {
              key: "scrollTo",
              value: function (t, e) {
                this.scroll.scrollTo(t, e)
              }
            }, {
              key: "setScroll",
              value: function (t, e) {
                this.scroll.setScroll(t, e)
              }
            }, {
              key: "on",
              value: function (t, e) {
                this.scroll.setEvents(t, e)
              }
            }, {
              key: "off",
              value: function (t, e) {
                this.scroll.unsetEvents(t, e)
              }
            }, {
              key: "destroy",
              value: function () {
                this.scroll.destroy()
              }
            }]), t
          }(),
          gt = function () {
            function t() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              i(this, t), this.options = e, Object.assign(this, b, e), this.smartphone = b.smartphone, e.smartphone && Object.assign(this.smartphone, e.smartphone), this.tablet = b.tablet, e.tablet && Object.assign(this.tablet, e.tablet), this.init()
            }
            return n(t, [{
              key: "init",
              value: function () {
                if (this.scroll = new L(this.options), this.scroll.init(), window.location.hash) {
                  var t = window.location.hash.slice(1, window.location.hash.length),
                    e = document.getElementById(t);
                  e && this.scroll.scrollTo(e)
                }
              }
            }, {
              key: "update",
              value: function () {
                this.scroll.update()
              }
            }, {
              key: "start",
              value: function () {
                this.scroll.startScroll()
              }
            }, {
              key: "stop",
              value: function () {
                this.scroll.stopScroll()
              }
            }, {
              key: "scrollTo",
              value: function (t, e) {
                this.scroll.scrollTo(t, e)
              }
            }, {
              key: "setScroll",
              value: function (t, e) {
                this.scroll.setScroll(t, e)
              }
            }, {
              key: "on",
              value: function (t, e) {
                this.scroll.setEvents(t, e)
              }
            }, {
              key: "off",
              value: function (t, e) {
                this.scroll.unsetEvents(t, e)
              }
            }, {
              key: "destroy",
              value: function () {
                this.scroll.destroy()
              }
            }]), t
          }();
        e.default = pt
      }.call(this, a(46))
  }, function (t, e) {
    var a;
    a = function () {
      return this
    }();
    try {
      a = a || new Function("return this")()
    } catch (t) {
      "object" == typeof window && (a = window)
    }
    t.exports = a
  }, function (t, e, a) {
    "use strict";
    a.r(e), a.d(e, "ScrollTrigger", (function () {
      return Gt
    })), a.d(e, "default", (function () {
      return Gt
    }));
    /*!
     * ScrollTrigger 3.7.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    let i, r, n, o, s, l, c, d, h, u, p, g, f, m, v, y, w, b, x, M, z, D, L, E, A, T, C, _, S = 1,
      k = [],
      P = [],
      O = Date.now,
      H = O(),
      V = 0,
      F = 1,
      B = t => t,
      I = t => Math.round(1e5 * t) / 1e5 || 0,
      $ = () => "undefined" != typeof window,
      j = () => i || $() && (i = window.gsap) && i.registerPlugin && i,
      R = t => !!~c.indexOf(t),
      N = (t, e) => ~k.indexOf(t) && k[k.indexOf(t) + 1][e],
      Y = (t, {
        s: e,
        sc: a
      }) => {
        let i = P.indexOf(t),
          r = a === rt.sc ? 1 : 2;
        return !~i && (i = P.push(t) - 1), P[i + r] || (P[i + r] = N(t, e) || (R(t) ? a : function (a) {
          return arguments.length ? t[e] = a : t[e]
        }))
      },
      X = t => N(t, "getBoundingClientRect") || (R(t) ? () => (Nt.width = n.innerWidth, Nt.height = n.innerHeight, Nt) : () => st(t)),
      q = (t, {
        s: e,
        d2: a,
        d: i,
        a: r
      }) => (e = "scroll" + a) && (r = N(t, e)) ? r() - X(t)()[i] : R(t) ? Math.max(s[e], l[e]) - (n["inner" + a] || s["client" + a] || l["client" + a]) : t[e] - t["offset" + a],
      W = (t, e) => {
        for (let a = 0; a < z.length; a += 3)(!e || ~e.indexOf(z[a + 1])) && t(z[a], z[a + 1], z[a + 2])
      },
      G = t => "string" == typeof t,
      U = t => "function" == typeof t,
      K = t => "number" == typeof t,
      Q = t => "object" == typeof t,
      J = t => U(t) && t(),
      Z = (t, e) => () => {
        let a = J(t),
          i = J(e);
        return () => {
          J(a), J(i)
        }
      },
      tt = Math.abs,
      et = "padding",
      at = "px",
      it = {
        s: "scrollLeft",
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: function (t) {
          return arguments.length ? n.scrollTo(t, rt.sc()) : n.pageXOffset || o.scrollLeft || s.scrollLeft || l.scrollLeft || 0
        }
      },
      rt = {
        s: "scrollTop",
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: it,
        sc: function (t) {
          return arguments.length ? n.scrollTo(it.sc(), t) : n.pageYOffset || o.scrollTop || s.scrollTop || l.scrollTop || 0
        }
      },
      nt = t => n.getComputedStyle(t),
      ot = (t, e) => {
        for (let a in e) a in t || (t[a] = e[a]);
        return t
      },
      st = (t, e) => {
        let a = e && "matrix(1, 0, 0, 1, 0, 0)" !== nt(t)[w] && i.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
          }).progress(1),
          r = t.getBoundingClientRect();
        return a && a.progress(0).kill(), r
      },
      lt = (t, {
        d2: e
      }) => t["offset" + e] || t["client" + e] || 0,
      ct = t => {
        let e, a = [],
          i = t.labels,
          r = t.duration();
        for (e in i) a.push(i[e] / r);
        return a
      },
      dt = (t, e, a, i) => a.split(",").forEach(a => t(e, a, i)),
      ht = (t, e, a) => t.addEventListener(e, a, {
        passive: !0
      }),
      ut = (t, e, a) => t.removeEventListener(e, a),
      pt = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
      },
      gt = {
        toggleActions: "play",
        anticipatePin: 0
      },
      ft = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
      },
      mt = (t, e) => {
        if (G(t)) {
          let a = t.indexOf("="),
            i = ~a ? +(t.charAt(a - 1) + 1) * parseFloat(t.substr(a + 1)) : 0;
          ~a && (t.indexOf("%") > a && (i *= e / 100), t = t.substr(0, a - 1)), t = i + (t in ft ? ft[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
        }
        return t
      },
      vt = (t, e, a, i, {
        startColor: r,
        endColor: n,
        fontSize: s,
        indent: c,
        fontWeight: d
      }, h, u) => {
        let p = o.createElement("div"),
          g = R(a) || "fixed" === N(a, "pinType"),
          f = -1 !== t.indexOf("scroller"),
          m = g ? l : a,
          v = -1 !== t.indexOf("start"),
          y = v ? r : n,
          w = "border-color:" + y + ";font-size:" + s + ";color:" + y + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return w += "position:" + (f && g ? "fixed;" : "absolute;"), (f || !g) && (w += (i === rt ? "right" : "bottom") + ":" + (h + parseFloat(c)) + "px;"), u && (w += "box-sizing:border-box;text-align:left;width:" + u.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + t), p.style.cssText = w, p.innerText = e || 0 === e ? t + "-" + e : t, m.children[0] ? m.insertBefore(p, m.children[0]) : m.appendChild(p), p._offset = p["offset" + i.op.d2], yt(p, 0, i, v), p
      },
      yt = (t, e, a, r) => {
        let n = {
            display: "block"
          },
          o = a[r ? "os2" : "p2"],
          s = a[r ? "p2" : "os2"];
        t._isFlipped = r, n[a.a + "Percent"] = r ? -100 : 0, n[a.a] = r ? "1px" : 0, n["border" + o + "Width"] = 1, n["border" + s + "Width"] = 0, n[a.p] = e + "px", i.set(t, n)
      },
      wt = [],
      bt = {},
      xt = () => u || (u = h(Vt)),
      Mt = () => {
        u || (u = h(Vt), V || Ct("scrollStart"), V = O())
      },
      zt = () => !v && !E && !o.fullscreenElement && d.restart(!0),
      Dt = {},
      Lt = [],
      Et = [],
      At = t => {
        let e, a = i.ticker.frame,
          o = [],
          s = 0;
        if (C !== a || S) {
          for (kt(); s < Et.length; s += 4) e = n.matchMedia(Et[s]).matches, e !== Et[s + 3] && (Et[s + 3] = e, e ? o.push(s) : kt(1, Et[s]) || U(Et[s + 2]) && Et[s + 2]());
          for (St(), s = 0; s < o.length; s++) e = o[s], T = Et[e], Et[e + 2] = Et[e + 1](t);
          T = 0, r && Pt(0, 1), C = a, Ct("matchMedia")
        }
      },
      Tt = () => ut(Gt, "scrollEnd", Tt) || Pt(!0),
      Ct = t => Dt[t] && Dt[t].map(t => t()) || Lt,
      _t = [],
      St = t => {
        for (let e = 0; e < _t.length; e += 5) t && _t[e + 4] !== t || (_t[e].style.cssText = _t[e + 1], _t[e].getBBox && _t[e].setAttribute("transform", _t[e + 2] || ""), _t[e + 3].uncache = 1)
      },
      kt = (t, e) => {
        let a;
        for (b = 0; b < wt.length; b++) a = wt[b], e && a.media !== e || (t ? a.kill(1) : a.revert());
        e && St(e), e || Ct("revert")
      },
      Pt = (t, e) => {
        if (V && !t) return void ht(Gt, "scrollEnd", Tt);
        _ = !0;
        let a = Ct("refreshInit");
        D && Gt.sort(), e || kt(), wt.forEach(t => t.refresh()), a.forEach(t => t && t.render && t.render(-1)), P.forEach(t => "function" == typeof t && (t.rec = 0)), d.pause(), _ = !1, Ct("refresh")
      },
      Ot = 0,
      Ht = 1,
      Vt = () => {
        if (!_) {
          let t = wt.length,
            e = O(),
            a = e - H >= 50,
            i = t && wt[0].scroll();
          if (Ht = Ot > i ? -1 : 1, Ot = i, a && (V && !y && e - V > 200 && (V = 0, Ct("scrollEnd")), f = H, H = e), Ht < 0) {
            for (b = t; b-- > 0;) wt[b] && wt[b].update(0, a);
            Ht = 1
          } else
            for (b = 0; b < t; b++) wt[b] && wt[b].update(0, a);
          u = 0
        }
      },
      Ft = ["left", "top", "bottom", "right", "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end", "grid-area", "justify-self", "align-self", "place-self"],
      Bt = Ft.concat(["width", "height", "boxSizing", "maxWidth", "maxHeight", "position", "margin", et, et + "Top", et + "Right", et + "Bottom", et + "Left"]),
      It = (t, e, a, i) => {
        if (t.parentNode !== e) {
          let r, n = Ft.length,
            o = e.style,
            s = t.style;
          for (; n--;) r = Ft[n], o[r] = a[r];
          o.position = "absolute" === a.position ? "absolute" : "relative", "inline" === a.display && (o.display = "inline-block"), s.bottom = s.right = "auto", o.overflow = "visible", o.boxSizing = "border-box", o.width = lt(t, it) + at, o.height = lt(t, rt) + at, o[et] = s.margin = s.top = s.left = "0", jt(i), s.width = s.maxWidth = a.width, s.height = s.maxHeight = a.height, s[et] = a[et], t.parentNode.insertBefore(e, t), e.appendChild(t)
        }
      },
      $t = /([A-Z])/g,
      jt = t => {
        if (t) {
          let e, a, r = t.t.style,
            n = t.length,
            o = 0;
          for ((t.t._gsap || i.core.getCache(t.t)).uncache = 1; o < n; o += 2) a = t[o + 1], e = t[o], a ? r[e] = a : r[e] && r.removeProperty(e.replace($t, "-$1").toLowerCase())
        }
      },
      Rt = t => {
        let e = Bt.length,
          a = t.style,
          i = [],
          r = 0;
        for (; r < e; r++) i.push(Bt[r], a[Bt[r]]);
        return i.t = t, i
      },
      Nt = {
        left: 0,
        top: 0
      },
      Yt = (t, e, a, i, r, n, o, c, d, h, u, g) => {
        if (U(t) && (t = t(c)), G(t) && "max" === t.substr(0, 3) && (t = g + ("=" === t.charAt(4) ? mt("0" + t.substr(3), a) : 0)), K(t)) o && yt(o, a, i, !0);
        else {
          U(e) && (e = e(c));
          let n, s, u, g = p(e)[0] || l,
            f = st(g) || {},
            m = t.split(" ");
          f && (f.left || f.top) || "none" !== nt(g).display || (u = g.style.display, g.style.display = "block", f = st(g), u ? g.style.display = u : g.style.removeProperty("display")), n = mt(m[0], f[i.d]), s = mt(m[1] || "0", a), t = f[i.p] - d[i.p] - h + n + r - s, o && yt(o, s, i, a - s < 20 || o._isStart && s > 20), a -= a - s
        }
        if (n) {
          let e = t + a,
            r = n._isStart;
          g = "scroll" + i.d2, yt(n, e, i, r && e > 20 || !r && (u ? Math.max(l[g], s[g]) : n.parentNode[g]) <= e + 1), u && (d = st(o), u && (n.style[i.op.p] = d[i.op.p] - i.op.m - n._offset + at))
        }
        return Math.round(t)
      },
      Xt = /(?:webkit|moz|length|cssText|inset)/i,
      qt = (t, e, a, r) => {
        if (t.parentNode !== e) {
          let n, o, s = t.style;
          if (e === l) {
            for (n in t._stOrig = s.cssText, o = nt(t), o) + n || Xt.test(n) || !o[n] || "string" != typeof s[n] || "0" === n || (s[n] = o[n]);
            s.top = a, s.left = r
          } else s.cssText = t._stOrig;
          i.core.getCache(t).uncache = 1, e.appendChild(t)
        }
      },
      Wt = (t, e) => {
        let a, r, n = Y(t, e),
          o = "_scroll" + e.p2,
          s = (e, l, c, d, h) => {
            let u = s.tween,
              p = l.onComplete,
              g = {};
            return u && u.kill(), a = Math.round(c), l[o] = e, l.modifiers = g, g[o] = t => ((t = I(n())) !== a && t !== r && Math.abs(t - a) > 2 ? (u.kill(), s.tween = 0) : t = c + d * u.ratio + h * u.ratio * u.ratio, r = a, a = I(t)), l.onComplete = () => {
              s.tween = 0, p && p.call(u)
            }, u = s.tween = i.to(t, l), u
          };
        return t[o] = n, t.addEventListener("wheel", () => s.tween && s.tween.kill() && (s.tween = 0), {
          passive: !0
        }), s
      };
    it.op = rt;
    class Gt {
      constructor(t, e) {
        r || Gt.register(i) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(t, e)
      }
      init(t, e) {
        if (this.progress = this.start = 0, this.vars && this.kill(1), !F) return void(this.update = this.refresh = this.kill = B);
        let a, r, c, d, h, u, m, w, x, M, z, E, C, _, P, H, I, $, j, W, J, Z, dt, ft, yt, xt, Dt, Lt, Et, At, Ct, _t, St, kt, Pt, Ot, Vt = (t = ot(G(t) || K(t) || t.nodeType ? {
            trigger: t
          } : t, gt)).horizontal ? it : rt,
          {
            onUpdate: Ft,
            toggleClass: Bt,
            id: $t,
            onToggle: Xt,
            onRefresh: Ut,
            scrub: Kt,
            trigger: Qt,
            pin: Jt,
            pinSpacing: Zt,
            invalidateOnRefresh: te,
            anticipatePin: ee,
            onScrubComplete: ae,
            onSnapComplete: ie,
            once: re,
            snap: ne,
            pinReparent: oe
          } = t,
          se = !Kt && 0 !== Kt,
          le = p(t.scroller || n)[0],
          ce = i.core.getCache(le),
          de = R(le),
          he = "pinType" in t ? "fixed" === t.pinType : de || "fixed" === N(le, "pinType"),
          ue = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
          pe = se && t.toggleActions.split(" "),
          ge = "markers" in t ? t.markers : gt.markers,
          fe = de ? 0 : parseFloat(nt(le)["border" + Vt.p2 + "Width"]) || 0,
          me = this,
          ve = t.onRefreshInit && (() => t.onRefreshInit(me)),
          ye = ((t, e, {
            d: a,
            d2: i,
            a: r
          }) => (r = N(t, "getBoundingClientRect")) ? () => r()[a] : () => (e ? n["inner" + i] : t["client" + i]) || 0)(le, de, Vt),
          we = ((t, e) => !e || ~k.indexOf(t) ? X(t) : () => Nt)(le, de),
          be = 0;
        var xe;
        me.media = T, ee *= 45, me.scroller = le, me.scroll = Y(le, Vt), d = me.scroll(), me.vars = t, e = e || t.animation, "refreshPriority" in t && (D = 1), ce.tweenScroll = ce.tweenScroll || {
          top: Wt(le, rt),
          left: Wt(le, it)
        }, me.tweenTo = a = ce.tweenScroll[Vt.p], e && (e.vars.lazy = !1, e._initted || !1 !== e.vars.immediateRender && !1 !== t.immediateRender && e.render(0, !0, !0), me.animation = e.pause(), e.scrollTrigger = me, Ct = K(Kt) && Kt, Ct && (At = i.to(e, {
          ease: "power3",
          duration: Ct,
          onComplete: () => ae && ae(me)
        })), Lt = 0, $t || ($t = e.vars.id)), wt.push(me), ne && (Q(ne) && !ne.push || (ne = {
          snapTo: ne
        }), "scrollBehavior" in l.style && i.set(de ? [l, s] : le, {
          scrollBehavior: "auto"
        }), c = U(ne.snapTo) ? ne.snapTo : "labels" === ne.snapTo ? (t => e => i.utils.snap(ct(t), e))(e) : "labelsDirectional" === ne.snapTo ? (xe = e, (t, e) => {
          let a, i = ct(xe);
          if (i.sort((t, e) => t - e), e.direction > 0) {
            for (t -= 1e-4, a = 0; a < i.length; a++)
              if (i[a] >= t) return i[a];
            return i.pop()
          }
          for (a = i.length, t += 1e-4; a--;)
            if (i[a] <= t) return i[a];
          return i[0]
        }) : i.utils.snap(ne.snapTo), _t = ne.duration || {
          min: .1,
          max: 2
        }, _t = Q(_t) ? g(_t.min, _t.max) : g(_t, _t), St = i.delayedCall(ne.delay || Ct / 2 || .1, () => {
          if (Math.abs(me.getVelocity()) < 10 && !y && be !== me.scroll()) {
            let t = e && !se ? e.totalProgress() : me.progress,
              r = (t - Et) / (O() - f) * 1e3 || 0,
              n = i.utils.clamp(-me.progress, 1 - me.progress, tt(r / 2) * r / .185),
              o = me.progress + (!1 === ne.inertia ? 0 : n),
              s = g(0, 1, c(o, me)),
              l = me.scroll(),
              d = Math.round(u + s * C),
              {
                onStart: h,
                onInterrupt: p,
                onComplete: v
              } = ne,
              y = a.tween;
            if (l <= m && l >= u && d !== l) {
              if (y && !y._initted && y.data <= Math.abs(d - l)) return;
              !1 === ne.inertia && (n = s - me.progress), a(d, {
                duration: _t(tt(.185 * Math.max(tt(o - t), tt(s - t)) / r / .05 || 0)),
                ease: ne.ease || "power3",
                data: Math.abs(d - l),
                onInterrupt: () => St.restart(!0) && p && p(me),
                onComplete: () => {
                  be = me.scroll(), Lt = Et = e && !se ? e.totalProgress() : me.progress, ie && ie(me), v && v(me)
                }
              }, l, n * C, d - l - n * C), h && h(me, a.tween)
            }
          } else me.isActive && St.restart(!0)
        }).pause()), $t && (bt[$t] = me), Qt = me.trigger = p(Qt || Jt)[0], Jt = !0 === Jt ? Qt : p(Jt)[0], G(Bt) && (Bt = {
          targets: Qt,
          className: Bt
        }), Jt && (!1 === Zt || "margin" === Zt || (Zt = !(!Zt && "flex" === nt(Jt.parentNode).display) && et), me.pin = Jt, !1 !== t.force3D && i.set(Jt, {
          force3D: !0
        }), r = i.core.getCache(Jt), r.spacer ? _ = r.pinState : (r.spacer = I = o.createElement("div"), I.setAttribute("class", "pin-spacer" + ($t ? " pin-spacer-" + $t : "")), r.pinState = _ = Rt(Jt)), me.spacer = I = r.spacer, Dt = nt(Jt), dt = Dt[Zt + Vt.os2], j = i.getProperty(Jt), W = i.quickSetter(Jt, Vt.a, at), It(Jt, I, Dt), H = Rt(Jt)), ge && (E = Q(ge) ? ot(ge, pt) : pt, M = vt("scroller-start", $t, le, Vt, E, 0), z = vt("scroller-end", $t, le, Vt, E, 0, M), $ = M["offset" + Vt.op.d2], w = vt("start", $t, le, Vt, E, $), x = vt("end", $t, le, Vt, E, $), he || k.length && !0 === N(le, "fixedMarkers") || ((t => {
          let e = nt(t).position;
          t.style.position = "absolute" === e || "fixed" === e ? e : "relative"
        })(de ? l : le), i.set([M, z], {
          force3D: !0
        }), yt = i.quickSetter(M, Vt.a, at), xt = i.quickSetter(z, Vt.a, at))), me.revert = t => {
          let a = !1 !== t || !me.enabled,
            i = v;
          a !== me.isReverted && (a && (me.scroll.rec || (me.scroll.rec = me.scroll()), Pt = Math.max(me.scroll(), me.scroll.rec || 0), kt = me.progress, Ot = e && e.progress()), w && [w, x, M, z].forEach(t => t.style.display = a ? "none" : "block"), a && (v = 1), me.update(a), v = i, Jt && (a ? ((t, e, a) => {
            if (jt(a), t.parentNode === e) {
              let a = e.parentNode;
              a && (a.insertBefore(t, e), a.removeChild(e))
            }
          })(Jt, I, _) : (!oe || !me.isActive) && It(Jt, I, nt(Jt), ft)), me.isReverted = a)
        }, me.refresh = (a, r) => {
          if ((v || !me.enabled) && !r) return;
          if (Jt && a && V) return void ht(Gt, "scrollEnd", Tt);
          v = 1, At && At.pause(), te && e && e.progress(0).invalidate(), me.isReverted || me.revert();
          let n, o, s, c, g, f, y, b, D, E, A = ye(),
            T = we(),
            S = q(le, Vt),
            k = 0,
            O = 0,
            F = t.end,
            B = t.endTrigger || Qt,
            $ = t.start || (0 !== t.start && Qt ? Jt ? "0 0" : "0 100%" : 0),
            R = t.pinnedContainer && p(t.pinnedContainer)[0],
            N = Qt && Math.max(0, wt.indexOf(me)) || 0,
            X = N;
          for (; X--;) f = wt[X], f.end || f.refresh(0, 1) || (v = 1), y = f.pin, !y || y !== Qt && y !== Jt || f.isReverted || (E || (E = []), E.unshift(f), f.revert());
          for (u = Yt($, Qt, A, Vt, me.scroll(), w, M, me, T, fe, he, S) || (Jt ? -.001 : 0), U(F) && (F = F(me)), G(F) && !F.indexOf("+=") && (~F.indexOf(" ") ? F = (G($) ? $.split(" ")[0] : "") + F : (k = mt(F.substr(2), A), F = G($) ? $ : u + k, B = Qt)), m = Math.max(u, Yt(F || (B ? "100% 0" : S), B, A, Vt, me.scroll() + k, x, z, me, T, fe, he, S)) || -.001, C = m - u || (u -= .01) && .001, k = 0, X = N; X--;) f = wt[X], y = f.pin, y && f.start - f._pinPush < u && (n = f.end - f.start, (y === Qt || y === R) && (k += n), y === Jt && (O += n));
          if (u += k, m += k, me._pinPush = O, w && k && (n = {}, n[Vt.a] = "+=" + k, R && (n[Vt.p] = "-=" + me.scroll()), i.set([w, x], n)), Jt) n = nt(Jt), c = Vt === rt, s = me.scroll(), J = parseFloat(j(Vt.a)) + O, !S && m > 1 && ((de ? l : le).style["overflow-" + Vt.a] = "scroll"), It(Jt, I, n), H = Rt(Jt), o = st(Jt, !0), b = he && Y(le, c ? it : rt)(), Zt && (ft = [Zt + Vt.os2, C + O + at], ft.t = I, X = Zt === et ? lt(Jt, Vt) + C + O : 0, X && ft.push(Vt.d, X + at), jt(ft), he && me.scroll(Pt)), he && (g = {
            top: o.top + (c ? s - u : b) + at,
            left: o.left + (c ? b : s - u) + at,
            boxSizing: "border-box",
            position: "fixed"
          }, g.width = g.maxWidth = Math.ceil(o.width) + at, g.height = g.maxHeight = Math.ceil(o.height) + at, g.margin = g.marginTop = g.marginRight = g.marginBottom = g.marginLeft = "0", g[et] = n[et], g[et + "Top"] = n[et + "Top"], g[et + "Right"] = n[et + "Right"], g[et + "Bottom"] = n[et + "Bottom"], g[et + "Left"] = n[et + "Left"], P = ((t, e, a) => {
            let i, r = [],
              n = t.length,
              o = a ? 8 : 0;
            for (; o < n; o += 2) i = t[o], r.push(i, i in e ? e[i] : t[o + 1]);
            return r.t = t.t, r
          })(_, g, oe)), e ? (D = e._initted, L(1), e.render(e.duration(), !0, !0), Z = j(Vt.a) - J + C + O, C !== Z && P.splice(P.length - 2, 2), e.render(0, !0, !0), D || e.invalidate(), L(0)) : Z = C;
          else if (Qt && me.scroll())
            for (o = Qt.parentNode; o && o !== l;) o._pinOffset && (u -= o._pinOffset, m -= o._pinOffset), o = o.parentNode;
          E && E.forEach(t => t.revert(!1)), me.start = u, me.end = m, d = h = me.scroll(), d < Pt && me.scroll(Pt), me.revert(!1), v = 0, e && se && e._initted && e.progress() !== Ot && e.progress(Ot, !0).render(e.time(), !0, !0), kt !== me.progress && (At && e.totalProgress(kt, !0), me.progress = kt, me.update()), Jt && Zt && (I._pinOffset = Math.round(me.progress * Z)), Ut && Ut(me)
        }, me.getVelocity = () => (me.scroll() - h) / (O() - f) * 1e3 || 0, me.update = (t, i) => {
          let r, n, o, s, c, g, y = me.scroll(),
            w = t ? 0 : (y - u) / C,
            b = w < 0 ? 0 : w > 1 ? 1 : w || 0,
            x = me.progress;
          if (i && (h = d, d = y, ne && (Et = Lt, Lt = e && !se ? e.totalProgress() : b)), ee && !b && Jt && !v && !S && V && u < y + (y - h) / (O() - f) * ee && (b = 1e-4), b !== x && me.enabled) {
            if (r = me.isActive = !!b && b < 1, n = !!x && x < 1, g = r !== n, c = g || !!b != !!x, me.direction = b > x ? 1 : -1, me.progress = b, se || (!At || v || S ? e && e.totalProgress(b, !!v) : (At.vars.totalProgress = b, At.invalidate().restart())), Jt)
              if (t && Zt && (I.style[Zt + Vt.os2] = dt), he) {
                if (c) {
                  if (s = !t && b > x && m + 1 > y && y + 1 >= q(le, Vt), oe)
                    if (t || !r && !s) qt(Jt, I);
                    else {
                      let t = st(Jt, !0),
                        e = y - u;
                      qt(Jt, l, t.top + (Vt === rt ? e : 0) + at, t.left + (Vt === rt ? 0 : e) + at)
                    } jt(r || s ? P : H), Z !== C && b < 1 && r || W(J + (1 !== b || s ? 0 : Z))
                }
              } else W(J + Z * b);
            ne && !a.tween && !v && !S && St.restart(!0), Bt && (g || re && b && (b < 1 || !A)) && p(Bt.targets).forEach(t => t.classList[r || re ? "add" : "remove"](Bt.className)), Ft && !se && !t && Ft(me), c && !v ? (o = b && !x ? 0 : 1 === b ? 1 : 1 === x ? 2 : 3, se && (s = !g && "none" !== pe[o + 1] && pe[o + 1] || pe[o], e && ("complete" === s || "reset" === s || s in e) && ("complete" === s ? e.pause().totalProgress(1) : "reset" === s ? e.restart(!0).pause() : "restart" === s ? e.restart(!0) : e[s]()), Ft && Ft(me)), !g && A || (Xt && g && Xt(me), ue[o] && ue[o](me), re && (1 === b ? me.kill(!1, 1) : ue[o] = 0), g || (o = 1 === b ? 1 : 3, ue[o] && ue[o](me)))) : se && Ft && !v && Ft(me)
          }
          xt && (yt(y + (M._isFlipped ? 1 : 0)), xt(y))
        }, me.enable = (t, e) => {
          me.enabled || (me.enabled = !0, ht(le, "resize", zt), ht(le, "scroll", Mt), ve && ht(Gt, "refreshInit", ve), !1 !== t && (me.progress = kt = 0, d = h = be = me.scroll()), !1 !== e && me.refresh())
        }, me.getTween = t => t && a ? a.tween : At, me.disable = (t, e) => {
          if (me.enabled && (!1 !== t && me.revert(), me.enabled = me.isActive = !1, e || At && At.pause(), Pt = 0, r && (r.uncache = 1), ve && ut(Gt, "refreshInit", ve), St && (St.pause(), a.tween && a.tween.kill() && (a.tween = 0)), !de)) {
            let t = wt.length;
            for (; t--;)
              if (wt[t].scroller === le && wt[t] !== me) return;
            ut(le, "resize", zt), ut(le, "scroll", Mt)
          }
        }, me.kill = (t, a) => {
          me.disable(t, a), $t && delete bt[$t];
          let i = wt.indexOf(me);
          wt.splice(i, 1), i === b && Ht > 0 && b--, i = 0, wt.forEach(t => t.scroller === me.scroller && (i = 1)), i || (me.scroll.rec = 0), e && (e.scrollTrigger = null, t && e.render(-1), a || e.kill()), w && [w, x, M, z].forEach(t => t.parentNode && t.parentNode.removeChild(t)), Jt && (r && (r.uncache = 1), i = 0, wt.forEach(t => t.pin === Jt && i++), i || (r.spacer = 0))
        }, me.enable(!1, !1), e && e.add && !C ? i.delayedCall(.01, () => u || m || me.refresh()) && (C = .01) && (u = m = 0) : me.refresh()
      }
      static register(t) {
        if (!r && (i = t || j(), $() && window.document && (n = window, o = document, s = o.documentElement, l = o.body), i && (p = i.utils.toArray, g = i.utils.clamp, L = i.core.suppressOverwrites || B, i.core.globals("ScrollTrigger", Gt), l))) {
          h = n.requestAnimationFrame || (t => setTimeout(t, 16)), ht(n, "wheel", Mt), c = [n, o, s, l], ht(o, "scroll", Mt);
          let t, e = l.style,
            a = e.borderTop;
          e.borderTop = "1px solid #000", t = st(l), rt.m = Math.round(t.top + rt.sc()) || 0, it.m = Math.round(t.left + it.sc()) || 0, a ? e.borderTop = a : e.removeProperty("border-top"), m = setInterval(xt, 200), i.delayedCall(.5, () => S = 0), ht(o, "touchcancel", B), ht(l, "touchstart", B), dt(ht, o, "pointerdown,touchstart,mousedown", () => y = 1), dt(ht, o, "pointerup,touchend,mouseup", () => y = 0), w = i.utils.checkPrefix("transform"), Bt.push(w), r = O(), d = i.delayedCall(.2, Pt).pause(), z = [o, "visibilitychange", () => {
            let t = n.innerWidth,
              e = n.innerHeight;
            o.hidden ? (x = t, M = e) : x === t && M === e || zt()
          }, o, "DOMContentLoaded", Pt, n, "load", () => V || Pt(), n, "resize", zt], W(ht)
        }
        return r
      }
      static defaults(t) {
        for (let e in t) gt[e] = t[e]
      }
      static kill() {
        F = 0, wt.slice(0).forEach(t => t.kill(1))
      }
      static config(t) {
        "limitCallbacks" in t && (A = !!t.limitCallbacks);
        let e = t.syncInterval;
        e && clearInterval(m) || (m = e) && setInterval(xt, e), "autoRefreshEvents" in t && (W(ut) || W(ht, t.autoRefreshEvents || "none"), E = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
      }
      static scrollerProxy(t, e) {
        let a = p(t)[0],
          i = P.indexOf(a),
          r = R(a);
        ~i && P.splice(i, r ? 6 : 2), r ? k.unshift(n, e, l, e, s, e) : k.unshift(a, e)
      }
      static matchMedia(t) {
        let e, a, i, r, o;
        for (a in t) i = Et.indexOf(a), r = t[a], T = a, "all" === a ? r() : (e = n.matchMedia(a), e && (e.matches && (o = r()), ~i ? (Et[i + 1] = Z(Et[i + 1], r), Et[i + 2] = Z(Et[i + 2], o)) : (i = Et.length, Et.push(a, r, o), e.addListener ? e.addListener(At) : e.addEventListener("change", At)), Et[i + 3] = e.matches)), T = 0;
        return Et
      }
      static clearMatchMedia(t) {
        t || (Et.length = 0), (t = Et.indexOf(t)) >= 0 && Et.splice(t, 4)
      }
    }
    Gt.version = "3.7.1", Gt.saveStyles = t => t ? p(t).forEach(t => {
      if (t && t.style) {
        let e = _t.indexOf(t);
        e >= 0 && _t.splice(e, 5), _t.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), i.core.getCache(t), T)
      }
    }) : _t, Gt.revert = (t, e) => kt(!t, e), Gt.create = (t, e) => new Gt(t, e), Gt.refresh = t => t ? zt() : Pt(!0), Gt.update = Vt, Gt.maxScroll = (t, e) => q(t, e ? it : rt), Gt.getScrollFunc = (t, e) => Y(p(t)[0], e ? it : rt), Gt.getById = t => bt[t], Gt.getAll = () => wt.slice(0), Gt.isScrolling = () => !!V, Gt.addEventListener = (t, e) => {
      let a = Dt[t] || (Dt[t] = []);
      ~a.indexOf(e) || a.push(e)
    }, Gt.removeEventListener = (t, e) => {
      let a = Dt[t],
        i = a && a.indexOf(e);
      i >= 0 && a.splice(i, 1)
    }, Gt.batch = (t, e) => {
      let a, r = [],
        n = {},
        o = e.interval || .016,
        s = e.batchMax || 1e9,
        l = (t, e) => {
          let a = [],
            r = [],
            n = i.delayedCall(o, () => {
              e(a, r), a = [], r = []
            }).pause();
          return t => {
            a.length || n.restart(!0), a.push(t.trigger), r.push(t), s <= a.length && n.progress(1)
          }
        };
      for (a in e) n[a] = "on" === a.substr(0, 2) && U(e[a]) && "onRefreshInit" !== a ? l(0, e[a]) : e[a];
      return U(s) && (s = s(), ht(Gt, "refresh", () => s = e.batchMax())), p(t).forEach(t => {
        let e = {};
        for (a in n) e[a] = n[a];
        e.trigger = t, r.push(Gt.create(e))
      }), r
    }, Gt.sort = t => wt.sort(t || ((t, e) => -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0)))), j() && i.registerPlugin(Gt)
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(3)),
      n = i(a(4)),
      o = a(6),
      s = i(a(49)),
      l = function () {
        function t() {
          (0, r.default)(this, t)
        }
        return (0, n.default)(t, [{
          key: "init",
          value: function () {
            var t = new s.default({
              words: 1,
              chars: 1,
              spacing: "0.33em"
            });
            o.gsap.utils.toArray(".title-split").forEach((function (e) {
              var a = t.split(e),
                i = o.gsap.timeline({
                  scrollTrigger: {
                    trigger: e,
                    scroller: "#app",
                    start: "top 80%",
                    end: "bottom 10%"
                  }
                });
              i.set(e, {
                perspective: 200
              }), i.from(a.chars, {
                duration: .7,
                y: 80,
                stagger: .04,
                opacity: 0,
                transformOrigin: "0% 100%",
                ease: "power4.Out"
              })
            })), document.querySelectorAll(".single-portfolio__wrapper li").forEach((function (e) {
              var a = e.querySelector("a span:first-of-type"),
                i = e.querySelector("a span:nth-of-type(2)"),
                r = e.querySelector(".single-project"),
                n = t.split(a),
                s = t.split(i);
              o.gsap.set(e, {
                perspective: 400
              }), o.gsap.set(s.chars, {
                x: 50,
                rotationX: -90,
                opacity: 0,
                transformOrigin: "0% 50% -50"
              }), e.addEventListener("mouseenter", (function () {
                o.gsap.to(n.chars, {
                  x: 50,
                  stagger: .02,
                  duration: .5,
                  rotationX: 90,
                  transformOrigin: "0% 50% -50",
                  opacity: 0,
                  ease: "power2"
                }), o.gsap.to(s.chars, {
                  x: 0,
                  stagger: .02,
                  duration: .5,
                  skewX: -20,
                  rotationX: 0,
                  opacity: 1,
                  ease: "power2"
                }), o.gsap.to(r, {
                  opacity: 1
                })
              })), e.addEventListener("mouseleave", (function () {
                o.gsap.to(n.chars, {
                  x: 0,
                  stagger: .02,
                  duration: .5,
                  rotationX: 0,
                  transformOrigin: "0% 50% -50",
                  opacity: 1,
                  ease: "power2"
                }), o.gsap.to(s.chars, {
                  x: -50,
                  stagger: .02,
                  duration: .5,
                  rotationX: -90,
                  opacity: 0,
                  ease: "power2"
                }), o.gsap.to(r, {
                  opacity: 0
                })
              }))
            })), document.querySelectorAll(".navigation-container li").forEach((function (e) {
              var a = e.querySelector("a span:first-of-type"),
                i = e.querySelector("a span:nth-of-type(2)"),
                r = e.querySelector(".single-project"),
                n = t.split(a),
                s = t.split(i);
              o.gsap.set(e, {
                perspective: 400
              }), o.gsap.set(s.chars, {
                x: 50,
                rotationX: -90,
                opacity: 0,
                transformOrigin: "0% 50% -50"
              }), e.addEventListener("mouseenter", (function () {
                o.gsap.to(n.chars, {
                  x: 50,
                  stagger: .02,
                  duration: .5,
                  rotationX: 90,
                  transformOrigin: "0% 50% -50",
                  opacity: 0,
                  ease: "power2"
                }), o.gsap.to(s.chars, {
                  x: 0,
                  stagger: .02,
                  duration: .5,
                  skewX: -20,
                  rotationX: 0,
                  opacity: 1,
                  ease: "power2"
                }), o.gsap.to(r, {
                  opacity: 1
                })
              })), e.addEventListener("mouseleave", (function () {
                o.gsap.to(n.chars, {
                  x: 0,
                  stagger: .02,
                  duration: .5,
                  rotationX: 0,
                  transformOrigin: "0% 50% -50",
                  opacity: 1,
                  ease: "power2"
                }), o.gsap.to(s.chars, {
                  x: -50,
                  stagger: .02,
                  duration: .5,
                  rotationX: -90,
                  opacity: 0,
                  ease: "power2"
                }), o.gsap.to(r, {
                  opacity: 0
                })
              }))
            }))
          }
        }]), t
      }();
    e.default = l
  }, function (t, e, a) {
    "use strict";
    var i = a(2);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = i(a(3)),
      n = i(a(4)),
      o = function () {
        function t(e) {
          (0, r.default)(this, t), e.hasOwnProperty("words") || (e.words = 1), e.hasOwnProperty("chars") || (e.chars = 1), e.hasOwnProperty("spacing") || (e.spacing = 5), this.options = e
        }
        return (0, n.default)(t, [{
          key: "split",
          value: function (t) {
            var e = this.searchTextNodes(t);
            return this.splitTextNodes(e)
          }
        }, {
          key: "searchTextNodes",
          value: function (t) {
            var e = this,
              a = [];
            return null == t || null == t || t.childNodes.forEach((function (t) {
              "#text" == t.nodeName ? a.push(t) : a = a.concat(e.searchTextNodes(t))
            })), a
          }
        }, {
          key: "createElement",
          value: function (t, e) {
            var a = document.createElement("div"),
              i = document.createTextNode(t);
            if (a.nodeText = i, a.appendChild(i), a.style.display = "inline-block", a.style.position = "relative", "" == t.trim())
              if ("string" == typeof this.options.spacing) a.style.width = this.options.spacing;
              else {
                if ("number" != typeof this.options.spacing) throw TypeError("Wrong options.spacing data type!");
                a.style.width = "".concat(this.options.spacing, " px")
              } return e.parentNode.insertBefore(a, e), a
          }
        }, {
          key: "splitCharacters",
          value: function (t) {
            var e = t.nodeValue,
              a = [];
            if ("" != e.trim()) {
              for (var i = 0; i < e.length; i++) {
                var r = e.substr(i, 1),
                  n = this.createElement(r, t);
                "" != r.trim() && a.push(n)
              }
              t.parentNode.removeChild(t)
            }
            return a
          }
        }, {
          key: "splitWords",
          value: function (t) {
            for (var e = t.nodeValue.split(" "), a = [], i = 0; i < e.length; i++) {
              var r = e[i],
                n = this.createElement(r.trim(), t);
              "" != r.trim() && a.push(n), i < e.length - 1 && this.createElement(" ", t)
            }
            return t.parentNode.removeChild(t), a
          }
        }, {
          key: "splitTextNodes",
          value: function (t) {
            var e = this,
              a = {
                words: [],
                chars: []
              };
            return t.forEach((function (t) {
              if (0 == e.options.words) a.chars = a.chars.concat(e.splitCharacters(t));
              else {
                var i = e.splitWords(t);
                if (1 == e.options.chars)
                  for (var r = 0; r <= i.length - 1; r++) {
                    var n = i[r],
                      o = e.splitCharacters(n.nodeText);
                    a.chars = a.chars.concat(o), n.chars = o
                  }
                a.words = a.words.concat(i)
              }
            })), a
          }
        }]), t
      }();
    e.default = o
  }, function (t, e, a) {
    "use strict";
    var i = a(2),
      r = a(14);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = i(a(3)),
      o = i(a(7));
    ! function (t, e) {
      if (!e && t && t.__esModule) return t;
      if (null === t || "object" !== r(t) && "function" != typeof t) return {
        default: t
      };
      var a = s(e);
      if (a && a.has(t)) return a.get(t);
      var i = {},
        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in t)
        if ("default" !== o && Object.prototype.hasOwnProperty.call(t, o)) {
          var l = n ? Object.getOwnPropertyDescriptor(t, o) : null;
          l && (l.get || l.set) ? Object.defineProperty(i, o, l) : i[o] = t[o]
        } i.default = t, a && a.set(t, i)
    }(a(51));

    function s(t) {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap,
        a = new WeakMap;
      return (s = function (t) {
        return t ? a : e
      })(t)
    }
    e.default = function t() {
      var e = this;
      (0, n.default)(this, t), (0, o.default)(this, "render", (function () {
        e.switch.classList.add("checkbox"), e.switch.setAttribute("id", "switch"), e.app.appendChild(e.switch), e.checkbox.setAttribute("type", "checkbox"), e.checkbox.setAttribute("id", "chk"), e.checkbox.classList.add("checkbox"), e.switch.appendChild(e.checkbox), e.label.classList.add("label"), e.label.setAttribute("for", "chk"), e.switch.appendChild(e.label), e.moon.innerHTML = e.moonContent, e.label.appendChild(e.moon), e.sun.innerHTML = e.sunContent, e.label.appendChild(e.sun), e.ball.classList.add("ball"), e.label.appendChild(e.ball)
      })), (0, o.default)(this, "events", (function () {
        e.switch.addEventListener("change", (function () {
          1 == e.checkbox.checked ? (document.body.classList.add("-is-darkmode"), localStorage.setItem("darkmode", !0)) : (document.body.classList.remove("-is-darkmode"), localStorage.removeItem("darkmode"))
        })), localStorage.getItem("darkmode") && (e.checkbox.checked = !0, document.body.classList.add("-is-darkmode"))
      })), this.app = document.getElementById("app"), this.page = document.querySelector(".app-wrapper"), this.switch = document.createElement("div"), this.checkbox = document.createElement("input"), this.label = document.createElement("label"), this.moon = document.createElement("div"), this.moonContent = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-moon-outline" fill="#fff"><g data-name="Layer 2"><g data-name="moon"><rect width="24" height="24" opacity="0"></rect><path d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3zM7.46 4.92a7.93 7.93 0 0 0-1.37 1.22 8.44 8.44 0 0 0 .2 11.32A8.29 8.29 0 0 0 12.22 20h.08a8.34 8.34 0 0 0 6.78-3.49A10.37 10.37 0 0 1 7.46 4.92z"></path></g></g></svg>', this.sun = document.createElement("i"), this.sunContent = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="eva eva-sun" fill="#f39c12"><g data-name="Layer 2"><g data-name="sun"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z"></path><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"></path><path d="M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z"></path><path d="M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z"></path><path d="M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z"></path><path d="M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"></path><path d="M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z"></path><path d="M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z"></path><path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"></path></g></g></svg>', this.ball = document.createElement("div"), this.render()
    }
  }, function (t, e, a) {
    var i;
    "undefined" != typeof self && self, i = function () {
      return function (t) {
        var e = {};

        function a(i) {
          if (e[i]) return e[i].exports;
          var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
          };
          return t[i].call(r.exports, r, r.exports, a), r.l = !0, r.exports
        }
        return a.m = t, a.c = e, a.d = function (t, e, i) {
          a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
          })
        }, a.r = function (t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(t, "__esModule", {
            value: !0
          })
        }, a.t = function (t, e) {
          if (1 & e && (t = a(t)), 8 & e) return t;
          if (4 & e && "object" == typeof t && t && t.__esModule) return t;
          var i = Object.create(null);
          if (a.r(i), Object.defineProperty(i, "default", {
              enumerable: !0,
              value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) a.d(i, r, function (e) {
              return t[e]
            }.bind(null, r));
          return i
        }, a.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default
          } : function () {
            return t
          };
          return a.d(e, "a", e), e
        }, a.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }, a.p = "", a(a.s = "./package/src/index.js")
      }({
        "./node_modules/classnames/dedupe.js":
          /*!*******************************************!*\
            !*** ./node_modules/classnames/dedupe.js ***!
            \*******************************************/
          /*! no static exports found */
          function (t, e, a) {
            var i;
            /*!
              Copyright (c) 2017 Jed Watson.
              Licensed under the MIT License (MIT), see
              http://jedwatson.github.io/classnames
            */
            ! function () {
              "use strict";
              var a = function () {
                function t() {}

                function e(t, e) {
                  for (var a = e.length, i = 0; i < a; ++i) r(t, e[i])
                }
                t.prototype = Object.create(null);
                var a = {}.hasOwnProperty,
                  i = /\s+/;

                function r(t, r) {
                  if (r) {
                    var n = typeof r;
                    "string" === n ? function (t, e) {
                      for (var a = e.split(i), r = a.length, n = 0; n < r; ++n) t[a[n]] = !0
                    }(t, r) : Array.isArray(r) ? e(t, r) : "object" === n ? function (t, e) {
                      for (var i in e) a.call(e, i) && (t[i] = !!e[i])
                    }(t, r) : "number" === n && function (t, e) {
                      t[e] = !0
                    }(t, r)
                  }
                }
                return function () {
                  for (var a = arguments.length, i = Array(a), r = 0; r < a; r++) i[r] = arguments[r];
                  var n = new t;
                  e(n, i);
                  var o = [];
                  for (var s in n) n[s] && o.push(s);
                  return o.join(" ")
                }
              }();
              void 0 !== t && t.exports ? (a.default = a, t.exports = a) : void 0 === (i = function () {
                return a
              }.apply(e, [])) || (t.exports = i)
            }()
          },
        "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./package/src/animation.scss":
          /*!*******************************************************************************************************!*\
            !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./package/src/animation.scss ***!
            \*******************************************************************************************************/
          /*! no static exports found */
          function (t, e, a) {
            (t.exports = a( /*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(!1)).push([t.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n.eva-animation {\n  animation-duration: 1s;\n  animation-fill-mode: both; }\n\n.eva-infinite {\n  animation-iteration-count: infinite; }\n\n.eva-icon-shake {\n  animation-name: eva-shake; }\n\n.eva-icon-zoom {\n  animation-name: eva-zoomIn; }\n\n.eva-icon-pulse {\n  animation-name: eva-pulse; }\n\n.eva-icon-flip {\n  animation-name: eva-flipInY; }\n\n.eva-hover {\n  display: inline-block; }\n\n.eva-hover:hover .eva-icon-hover-shake, .eva-parent-hover:hover .eva-icon-hover-shake {\n  animation-name: eva-shake; }\n\n.eva-hover:hover .eva-icon-hover-zoom, .eva-parent-hover:hover .eva-icon-hover-zoom {\n  animation-name: eva-zoomIn; }\n\n.eva-hover:hover .eva-icon-hover-pulse, .eva-parent-hover:hover .eva-icon-hover-pulse {\n  animation-name: eva-pulse; }\n\n.eva-hover:hover .eva-icon-hover-flip, .eva-parent-hover:hover .eva-icon-hover-flip {\n  animation-name: eva-flipInY; }\n\n@keyframes eva-flipInY {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in; }\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1; }\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg); }\n  to {\n    transform: perspective(400px); } }\n\n@keyframes eva-shake {\n  from,\n  to {\n    transform: translate3d(0, 0, 0); }\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translate3d(-3px, 0, 0); }\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translate3d(3px, 0, 0); } }\n\n@keyframes eva-pulse {\n  from {\n    transform: scale3d(1, 1, 1); }\n  50% {\n    transform: scale3d(1.2, 1.2, 1.2); }\n  to {\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes eva-zoomIn {\n  from {\n    opacity: 1;\n    transform: scale3d(0.5, 0.5, 0.5); }\n  50% {\n    opacity: 1; } }\n", ""])
          },
        "./node_modules/css-loader/lib/css-base.js":
          /*!*************************************************!*\
            !*** ./node_modules/css-loader/lib/css-base.js ***!
            \*************************************************/
          /*! no static exports found */
          function (t, e) {
            t.exports = function (t) {
              var e = [];
              return e.toString = function () {
                return this.map((function (e) {
                  var a = function (t, e) {
                    var a, i = t[1] || "",
                      r = t[3];
                    if (!r) return i;
                    if (e && "function" == typeof btoa) {
                      var n = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                        o = r.sources.map((function (t) {
                          return "/*# sourceURL=" + r.sourceRoot + t + " */"
                        }));
                      return [i].concat(o).concat([n]).join("\n")
                    }
                    return [i].join("\n")
                  }(e, t);
                  return e[2] ? "@media " + e[2] + "{" + a + "}" : a
                })).join("")
              }, e.i = function (t, a) {
                "string" == typeof t && (t = [
                  [null, t, ""]
                ]);
                for (var i = {}, r = 0; r < this.length; r++) {
                  var n = this[r][0];
                  "number" == typeof n && (i[n] = !0)
                }
                for (r = 0; r < t.length; r++) {
                  var o = t[r];
                  "number" == typeof o[0] && i[o[0]] || (a && !o[2] ? o[2] = a : a && (o[2] = "(" + o[2] + ") and (" + a + ")"), e.push(o))
                }
              }, e
            }
          },
        "./node_modules/isomorphic-style-loader/insertCss.js":
          /*!***********************************************************!*\
            !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
            \***********************************************************/
          /*! no static exports found */
          function (t, e, a) {
            "use strict";
            /*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */
            var i = {};

            function r(t) {
              t.forEach((function (t) {
                if (--i[t] <= 0) {
                  var e = document.getElementById(t);
                  e && e.parentNode.removeChild(e)
                }
              }))
            }
            t.exports = function (t, e) {
              for (var a, n = void 0 === e ? {} : e, o = n.replace, s = void 0 !== o && o, l = n.prepend, c = void 0 !== l && l, d = n.prefix, h = void 0 === d ? "s" : d, u = [], p = 0; p < t.length; p++) {
                var g = t[p],
                  f = g[0],
                  m = g[1],
                  v = g[2],
                  y = g[3],
                  w = "" + h + f + "-" + p;
                if (u.push(w), !i[w] || s) {
                  i[w] = 1;
                  var b = document.getElementById(w),
                    x = !1;
                  b || (x = !0, (b = document.createElement("style")).setAttribute("type", "text/css"), b.id = w, v && b.setAttribute("media", v));
                  var M = m;
                  y && "function" == typeof btoa && (M += "\n/*# sourceMappingURL=data:application/json;base64," + (a = JSON.stringify(y), btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g, (function (t, e) {
                    return String.fromCharCode("0x" + e)
                  }))) + "*/"), M += "\n/*# sourceURL=" + y.file + "?" + w + "*/"), "textContent" in b ? b.textContent = M : b.styleSheet.cssText = M, x && (c ? document.head.insertBefore(b, document.head.childNodes[0]) : document.head.appendChild(b))
                } else i[w]++
              }
              return r.bind(null, u)
            }
          },
        "./package-build/eva-icons.json":
          /*!**************************************!*\
            !*** ./package-build/eva-icons.json ***!
            \**************************************/
          /*! exports provided: activity, alert-circle, alert-triangle, archive, arrow-back, arrow-circle-down, arrow-circle-left, arrow-circle-right, arrow-circle-up, arrow-down, arrow-downward, arrow-forward, arrow-ios-back, arrow-ios-downward, arrow-ios-forward, arrow-ios-upward, arrow-left, arrow-right, arrow-up, arrow-upward, arrowhead-down, arrowhead-left, arrowhead-right, arrowhead-up, at, attach-2, attach, award, backspace, bar-chart-2, bar-chart, battery, behance, bell-off, bell, bluetooth, book-open, book, bookmark, briefcase, browser, brush, bulb, calendar, camera, car, cast, charging, checkmark-circle-2, checkmark-circle, checkmark-square-2, checkmark-square, checkmark, chevron-down, chevron-left, chevron-right, chevron-up, clipboard, clock, close-circle, close-square, close, cloud-download, cloud-upload, code-download, code, collapse, color-palette, color-picker, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, credit-card, crop, cube, diagonal-arrow-left-down, diagonal-arrow-left-up, diagonal-arrow-right-down, diagonal-arrow-right-up, done-all, download, droplet-off, droplet, edit-2, edit, email, expand, external-link, eye-off-2, eye-off, eye, facebook, file-add, file-remove, file-text, file, film, flag, flash-off, flash, flip-2, flip, folder-add, folder-remove, folder, funnel, gift, github, globe-2, globe-3, globe, google, grid, hard-drive, hash, headphones, heart, home, image-2, image, inbox, info, keypad, layers, layout, link-2, link, linkedin, list, lock, log-in, log-out, map, maximize, menu-2, menu-arrow, menu, message-circle, message-square, mic-off, mic, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, npm, options-2, options, pantone, paper-plane, pause-circle, people, percent, person-add, person-delete, person-done, person-remove, person, phone-call, phone-missed, phone-off, phone, pie-chart-2, pie-chart, pin, play-circle, plus-circle, plus-square, plus, power, pricetags, printer, question-mark-circle, question-mark, radio-button-off, radio-button-on, radio, recording, refresh, repeat, rewind-left, rewind-right, save, scissors, search, settings-2, settings, shake, share, shield-off, shield, shopping-bag, shopping-cart, shuffle-2, shuffle, skip-back, skip-forward, slash, smartphone, smiling-face, speaker, square, star, stop-circle, sun, swap, sync, text, thermometer-minus, thermometer-plus, thermometer, toggle-left, toggle-right, trash-2, trash, trending-down, trending-up, tv, twitter, umbrella, undo, unlock, upload, video-off, video, volume-down, volume-mute, volume-off, volume-up, wifi-off, wifi, activity-outline, alert-circle-outline, alert-triangle-outline, archive-outline, arrow-back-outline, arrow-circle-down-outline, arrow-circle-left-outline, arrow-circle-right-outline, arrow-circle-up-outline, arrow-down-outline, arrow-downward-outline, arrow-forward-outline, arrow-ios-back-outline, arrow-ios-downward-outline, arrow-ios-forward-outline, arrow-ios-upward-outline, arrow-left-outline, arrow-right-outline, arrow-up-outline, arrow-upward-outline, arrowhead-down-outline, arrowhead-left-outline, arrowhead-right-outline, arrowhead-up-outline, at-outline, attach-2-outline, attach-outline, award-outline, backspace-outline, bar-chart-2-outline, bar-chart-outline, battery-outline, behance-outline, bell-off-outline, bell-outline, bluetooth-outline, book-open-outline, book-outline, bookmark-outline, briefcase-outline, browser-outline, brush-outline, bulb-outline, calendar-outline, camera-outline, car-outline, cast-outline, charging-outline, checkmark-circle-2-outline, checkmark-circle-outline, checkmark-outline, checkmark-square-2-outline, checkmark-square-outline, chevron-down-outline, chevron-left-outline, chevron-right-outline, chevron-up-outline, clipboard-outline, clock-outline, close-circle-outline, close-outline, close-square-outline, cloud-download-outline, cloud-upload-outline, code-download-outline, code-outline, collapse-outline, color-palette-outline, color-picker-outline, compass-outline, copy-outline, corner-down-left-outline, corner-down-right-outline, corner-left-down-outline, corner-left-up-outline, corner-right-down-outline, corner-right-up-outline, corner-up-left-outline, corner-up-right-outline, credit-card-outline, crop-outline, cube-outline, diagonal-arrow-left-down-outline, diagonal-arrow-left-up-outline, diagonal-arrow-right-down-outline, diagonal-arrow-right-up-outline, done-all-outline, download-outline, droplet-off-outline, droplet-outline, edit-2-outline, edit-outline, email-outline, expand-outline, external-link-outline, eye-off-2-outline, eye-off-outline, eye-outline, facebook-outline, file-add-outline, file-outline, file-remove-outline, file-text-outline, film-outline, flag-outline, flash-off-outline, flash-outline, flip-2-outline, flip-outline, folder-add-outline, folder-outline, folder-remove-outline, funnel-outline, gift-outline, github-outline, globe-2-outline, globe-outline, google-outline, grid-outline, hard-drive-outline, hash-outline, headphones-outline, heart-outline, home-outline, image-outline, inbox-outline, info-outline, keypad-outline, layers-outline, layout-outline, link-2-outline, link-outline, linkedin-outline, list-outline, loader-outline, lock-outline, log-in-outline, log-out-outline, map-outline, maximize-outline, menu-2-outline, menu-arrow-outline, menu-outline, message-circle-outline, message-square-outline, mic-off-outline, mic-outline, minimize-outline, minus-circle-outline, minus-outline, minus-square-outline, monitor-outline, moon-outline, more-horizontal-outline, more-vertical-outline, move-outline, music-outline, navigation-2-outline, navigation-outline, npm-outline, options-2-outline, options-outline, pantone-outline, paper-plane-outline, pause-circle-outline, people-outline, percent-outline, person-add-outline, person-delete-outline, person-done-outline, person-outline, person-remove-outline, phone-call-outline, phone-missed-outline, phone-off-outline, phone-outline, pie-chart-outline, pin-outline, play-circle-outline, plus-circle-outline, plus-outline, plus-square-outline, power-outline, pricetags-outline, printer-outline, question-mark-circle-outline, question-mark-outline, radio-button-off-outline, radio-button-on-outline, radio-outline, recording-outline, refresh-outline, repeat-outline, rewind-left-outline, rewind-right-outline, save-outline, scissors-outline, search-outline, settings-2-outline, settings-outline, shake-outline, share-outline, shield-off-outline, shield-outline, shopping-bag-outline, shopping-cart-outline, shuffle-2-outline, shuffle-outline, skip-back-outline, skip-forward-outline, slash-outline, smartphone-outline, smiling-face-outline, speaker-outline, square-outline, star-outline, stop-circle-outline, sun-outline, swap-outline, sync-outline, text-outline, thermometer-minus-outline, thermometer-outline, thermometer-plus-outline, toggle-left-outline, toggle-right-outline, trash-2-outline, trash-outline, trending-down-outline, trending-up-outline, tv-outline, twitter-outline, umbrella-outline, undo-outline, unlock-outline, upload-outline, video-off-outline, video-outline, volume-down-outline, volume-mute-outline, volume-off-outline, volume-up-outline, wifi-off-outline, wifi-outline, default */
          function (t) {
            t.exports = {
              activity: '<g data-name="Layer 2"><g data-name="activity"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 0 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20z"/></g></g>',
              "alert-circle": '<g data-name="Layer 2"><g data-name="alert-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0z"/></g></g>',
              "alert-triangle": '<g data-name="Layer 2"><g data-name="alert-triangle"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zM12 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-4a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z"/></g></g>',
              archive: '<g data-name="Layer 2"><g data-name="archive"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M18 3H6a3 3 0 0 0-2 5.22V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.22A3 3 0 0 0 18 3zm-3 10.13a.87.87 0 0 1-.87.87H9.87a.87.87 0 0 1-.87-.87v-.26a.87.87 0 0 1 .87-.87h4.26a.87.87 0 0 1 .87.87zM18 7H6a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"/></g></g>',
              "arrow-back": '<g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/></g></g>',
              "arrow-circle-down": '<g data-name="Layer 2"><g data-name="arrow-circle-down"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.69 11.86l-3 2.86a.49.49 0 0 1-.15.1.54.54 0 0 1-.16.1.94.94 0 0 1-.76 0 1 1 0 0 1-.33-.21l-3-3a1 1 0 0 1 1.42-1.42l1.29 1.3V8a1 1 0 0 1 2 0v5.66l1.31-1.25a1 1 0 0 1 1.38 1.45z"/></g></g>',
              "arrow-circle-left": '<g data-name="Layer 2"><g data-name="arrow-circle-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M22 12a10 10 0 1 0-10 10 10 10 0 0 0 10-10zm-11.86 3.69l-2.86-3a.49.49 0 0 1-.1-.15.54.54 0 0 1-.1-.16.94.94 0 0 1 0-.76 1 1 0 0 1 .21-.33l3-3a1 1 0 0 1 1.42 1.42L10.41 11H16a1 1 0 0 1 0 2h-5.66l1.25 1.31a1 1 0 0 1-1.45 1.38z"/></g></g>',
              "arrow-circle-right": '<g data-name="Layer 2"><g data-name="arrow-circle-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12zm11.86-3.69l2.86 3a.49.49 0 0 1 .1.15.54.54 0 0 1 .1.16.94.94 0 0 1 0 .76 1 1 0 0 1-.21.33l-3 3a1 1 0 0 1-1.42-1.42l1.3-1.29H8a1 1 0 0 1 0-2h5.66l-1.25-1.31a1 1 0 0 1 1.45-1.38z"/></g></g>',
              "arrow-circle-up": '<g data-name="Layer 2"><g data-name="arrow-circle-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 22A10 10 0 1 0 2 12a10 10 0 0 0 10 10zM8.31 10.14l3-2.86a.49.49 0 0 1 .15-.1.54.54 0 0 1 .16-.1.94.94 0 0 1 .76 0 1 1 0 0 1 .33.21l3 3a1 1 0 0 1-1.42 1.42L13 10.41V16a1 1 0 0 1-2 0v-5.66l-1.31 1.25a1 1 0 0 1-1.38-1.45z"/></g></g>',
              "arrow-down": '<g data-name="Layer 2"><g data-name="arrow-downward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"/></g></g>',
              "arrow-downward": '<g data-name="Layer 2"><g data-name="arrow-down"><rect width="24" height="24" opacity="0"/><path d="M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5 .15.09.13.07a1 1 0 0 0 .72 0l.13-.07.15-.09 6-5a1 1 0 0 0 .13-1.41z"/></g></g>',
              "arrow-forward": '<g data-name="Layer 2"><g data-name="arrow-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"/></g></g>',
              "arrow-ios-back": '<g data-name="Layer 2"><g data-name="arrow-ios-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/></g></g>',
              "arrow-ios-downward": '<g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"/><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"/></g></g>',
              "arrow-ios-forward": '<g data-name="Layer 2"><g data-name="arrow-ios-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"/></g></g>',
              "arrow-ios-upward": '<g data-name="Layer 2"><g data-name="arrow-ios-upward"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15 1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15z"/></g></g>',
              "arrow-left": '<g data-name="Layer 2"><g data-name="arrow-left"><rect width="24" height="24" opacity="0"/><path d="M13.54 18a2.06 2.06 0 0 1-1.3-.46l-5.1-4.21a1.7 1.7 0 0 1 0-2.66l5.1-4.21a2.1 2.1 0 0 1 2.21-.26 1.76 1.76 0 0 1 1.05 1.59v8.42a1.76 1.76 0 0 1-1.05 1.59 2.23 2.23 0 0 1-.91.2z"/></g></g>',
              "arrow-right": '<g data-name="Layer 2"><g data-name="arrow-right"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z"/></g></g>',
              "arrow-up": '<g data-name="Layer 2"><g data-name="arrow-up"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1z"/></g></g>',
              "arrow-upward": '<g data-name="Layer 2"><g data-name="arrow-upward"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M5.23 10.64a1 1 0 0 0 1.41.13L11 7.14V19a1 1 0 0 0 2 0V7.14l4.36 3.63a1 1 0 1 0 1.28-1.54l-6-5-.15-.09-.13-.07a1 1 0 0 0-.72 0l-.13.07-.15.09-6 5a1 1 0 0 0-.13 1.41z"/></g></g>',
              "arrowhead-down": '<g data-name="Layer 2"><g data-name="arrowhead-down"><rect width="24" height="24" opacity="0"/><path d="M17.37 12.39L12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z"/><path d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z"/></g></g>',
              "arrowhead-left": '<g data-name="Layer 2"><g data-name="arrowhead-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M11.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L7.29 12l4.48-5.37a1 1 0 0 0-.13-1.4z"/><path d="M14.29 12l4.48-5.37a1 1 0 0 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z"/></g></g>',
              "arrowhead-right": '<g data-name="Layer 2"><g data-name="arrowhead-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"/><path d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27z"/></g></g>',
              "arrowhead-up": '<g data-name="Layer 2"><g data-name="arrowhead-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M6.63 11.61L12 7.29l5.37 4.48A1 1 0 0 0 18 12a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41l-6-5a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.14z"/><path d="M12.64 12.23a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.15L12 14.29l5.37 4.48A1 1 0 0 0 18 19a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41z"/></g></g>',
              at: '<g data-name="Layer 2"><g data-name="at"><rect width="24" height="24" opacity="0"/><path d="M13 2a10 10 0 0 0-5 19.1 10.15 10.15 0 0 0 4 .9 10 10 0 0 0 6.08-2.06 1 1 0 0 0 .19-1.4 1 1 0 0 0-1.41-.19A8 8 0 1 1 12.77 4 8.17 8.17 0 0 1 20 12.22v.68a1.71 1.71 0 0 1-1.78 1.7 1.82 1.82 0 0 1-1.62-1.88V8.4a1 1 0 0 0-1-1 1 1 0 0 0-1 .87 5 5 0 0 0-3.44-1.36A5.09 5.09 0 1 0 15.31 15a3.6 3.6 0 0 0 5.55.61A3.67 3.67 0 0 0 22 12.9v-.68A10.2 10.2 0 0 0 13 2zm-1.82 13.09A3.09 3.09 0 1 1 14.27 12a3.1 3.1 0 0 1-3.09 3.09z"/></g></g>',
              "attach-2": '<g data-name="Layer 2"><g data-name="attach-2"><rect width="24" height="24" opacity="0"/><path d="M12 22a5.86 5.86 0 0 1-6-5.7V6.13A4.24 4.24 0 0 1 10.33 2a4.24 4.24 0 0 1 4.34 4.13v10.18a2.67 2.67 0 0 1-5.33 0V6.92a1 1 0 0 1 1-1 1 1 0 0 1 1 1v9.39a.67.67 0 0 0 1.33 0V6.13A2.25 2.25 0 0 0 10.33 4 2.25 2.25 0 0 0 8 6.13V16.3a3.86 3.86 0 0 0 4 3.7 3.86 3.86 0 0 0 4-3.7V6.13a1 1 0 1 1 2 0V16.3a5.86 5.86 0 0 1-6 5.7z"/></g></g>',
              attach: '<g data-name="Layer 2"><g data-name="attach"><rect width="24" height="24" opacity="0"/><path d="M9.29 21a6.23 6.23 0 0 1-4.43-1.88 6 6 0 0 1-.22-8.49L12 3.2A4.11 4.11 0 0 1 15 2a4.48 4.48 0 0 1 3.19 1.35 4.36 4.36 0 0 1 .15 6.13l-7.4 7.43a2.54 2.54 0 0 1-1.81.75 2.72 2.72 0 0 1-1.95-.82 2.68 2.68 0 0 1-.08-3.77l6.83-6.86a1 1 0 0 1 1.37 1.41l-6.83 6.86a.68.68 0 0 0 .08.95.78.78 0 0 0 .53.23.56.56 0 0 0 .4-.16l7.39-7.43a2.36 2.36 0 0 0-.15-3.31 2.38 2.38 0 0 0-3.27-.15L6.06 12a4 4 0 0 0 .22 5.67 4.22 4.22 0 0 0 3 1.29 3.67 3.67 0 0 0 2.61-1.06l7.39-7.43a1 1 0 1 1 1.42 1.41l-7.39 7.43A5.65 5.65 0 0 1 9.29 21z"/></g></g>',
              award: '<g data-name="Layer 2"><g data-name="award"><rect width="24" height="24" opacity="0"/><path d="M19 20.75l-2.31-9A5.94 5.94 0 0 0 18 8 6 6 0 0 0 6 8a5.94 5.94 0 0 0 1.34 3.77L5 20.75a1 1 0 0 0 1.48 1.11l5.33-3.13 5.68 3.14A.91.91 0 0 0 18 22a1 1 0 0 0 1-1.25zM12 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4z"/></g></g>',
              backspace: '<g data-name="Layer 2"><g data-name="backspace"><rect width="24" height="24" opacity="0"/><path d="M20.14 4h-9.77a3 3 0 0 0-2 .78l-.1.11-6 7.48a1 1 0 0 0 .11 1.37l6 5.48a3 3 0 0 0 2 .78h9.77A1.84 1.84 0 0 0 22 18.18V5.82A1.84 1.84 0 0 0 20.14 4zm-3.43 9.29a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0L14 13.41l-1.29 1.3a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42l1.3-1.29-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3 1.29-1.3a1 1 0 0 1 1.42 1.42L15.41 12z"/></g></g>',
              "bar-chart-2": '<g data-name="Layer 2"><g data-name="bar-chart-2"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M12 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/><path d="M19 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"/><path d="M5 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z"/></g></g>',
              "bar-chart": '<g data-name="Layer 2"><g data-name="bar-chart"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M12 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"/><path d="M19 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z"/><path d="M5 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/></g></g>',
              battery: '<g data-name="Layer 2"><g data-name="battery"><rect width="24" height="24" opacity="0"/><path d="M15.83 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h11.66A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6z"/><path d="M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z"/></g></g>',
              behance: '<g data-name="Layer 2"><g data-name="behance"><rect width="24" height="24" opacity="0"/><path d="M14.76 11.19a1 1 0 0 0-1 1.09h2.06a1 1 0 0 0-1.06-1.09z"/><path d="M9.49 12.3H8.26v1.94h1c1 0 1.44-.33 1.44-1s-.46-.94-1.21-.94z"/><path d="M10.36 10.52c0-.53-.35-.85-.95-.85H8.26v1.74h.85c.89 0 1.25-.32 1.25-.89z"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zM9.7 15.2H7V8.7h2.7c1.17 0 1.94.61 1.94 1.6a1.4 1.4 0 0 1-1.12 1.43A1.52 1.52 0 0 1 12 13.37c0 1.16-1 1.83-2.3 1.83zm3.55-6h3v.5h-3zM17 13.05h-3.3v.14a1.07 1.07 0 0 0 1.09 1.19.9.9 0 0 0 1-.63H17a2 2 0 0 1-2.17 1.55 2.15 2.15 0 0 1-2.36-2.3v-.44a2.11 2.11 0 0 1 2.28-2.25A2.12 2.12 0 0 1 17 12.58z"/></g></g>',
              "bell-off": '<g data-name="Layer 2"><g data-name="bell-off"><rect width="24" height="24" opacity="0"/><path d="M15.88 18.71l-.59-.59L14 16.78l-.07-.07L6.58 9.4 5.31 8.14a5.68 5.68 0 0 0 0 .59v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.88 3.88 0 0 0 4-3.22zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4z"/><path d="M7.13 4.3l1.46 1.46 9.53 9.53 2 2 .31.3a1.58 1.58 0 0 0 .45-.6 1.62 1.62 0 0 0-.35-1.78l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.83-6.88 6.71 6.71 0 0 0-5.32 1.61 6.88 6.88 0 0 0-.58.54z"/><path d="M20.71 19.29L19.41 18l-2-2-9.52-9.53L6.42 5 4.71 3.29a1 1 0 0 0-1.42 1.42L5.53 7l1.75 1.7 7.31 7.3.07.07L16 17.41l.59.59 2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
              bell: '<g data-name="Layer 2"><g data-name="bell"><rect width="24" height="24" opacity="0"/><path d="M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4z"/></g></g>',
              bluetooth: '<g data-name="Layer 2"><g data-name="bluetooth"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.63 12l4-3.79a1.14 1.14 0 0 0-.13-1.77l-4.67-3.23a1.17 1.17 0 0 0-1.21-.08 1.15 1.15 0 0 0-.62 1v6.2l-3.19-4a1 1 0 0 0-1.56 1.3L9.72 12l-3.5 4.43a1 1 0 0 0 .16 1.4A1 1 0 0 0 7 18a1 1 0 0 0 .78-.38L11 13.56v6.29A1.16 1.16 0 0 0 12.16 21a1.16 1.16 0 0 0 .67-.21l4.64-3.18a1.17 1.17 0 0 0 .49-.85 1.15 1.15 0 0 0-.34-.91zM13 5.76l2.5 1.73L13 9.85zm0 12.49v-4.07l2.47 2.38z"/></g></g>',
              "book-open": '<g data-name="Layer 2"><g data-name="book-open"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M21 4.34a1.24 1.24 0 0 0-1.08-.23L13 5.89v14.27l7.56-1.94A1.25 1.25 0 0 0 21.5 17V5.32a1.25 1.25 0 0 0-.5-.98z"/><path d="M11 5.89L4.06 4.11A1.27 1.27 0 0 0 3 4.34a1.25 1.25 0 0 0-.48 1V17a1.25 1.25 0 0 0 .94 1.21L11 20.16z"/></g></g>',
              book: '<g data-name="Layer 2"><g data-name="book"><rect width="24" height="24" opacity="0"/><path d="M19 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 19a1 1 0 0 1 0-2h11v2z"/></g></g>',
              bookmark: '<g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86 1 1 0 0 1-1 0l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21z"/></g></g>',
              briefcase: '<g data-name="Layer 2"><g data-name="briefcase"><rect width="24" height="24" opacity="0"/><path d="M7 21h10V7h-1V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H7zm3-15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4z"/><path d="M19 7v14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3z"/><path d="M5 7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z"/></g></g>',
              browser: '<g data-name="Layer 2"><g data-name="browser"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-6 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM8 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm11 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14z"/></g></g>',
              brush: '<g data-name="Layer 2"><g data-name="brush"><rect width="24" height="24" opacity="0"/><path d="M7.12 12.55a4 4 0 0 0-3.07 3.86v3.11a.47.47 0 0 0 .48.48l3.24-.06a3.78 3.78 0 0 0 3.44-2.2 3.65 3.65 0 0 0-4.09-5.19z"/><path d="M19.26 4.46a2.14 2.14 0 0 0-2.88.21L10 11.08a.47.47 0 0 0 0 .66L12.25 14a.47.47 0 0 0 .66 0l6.49-6.47a2.06 2.06 0 0 0 .6-1.47 2 2 0 0 0-.74-1.6z"/></g></g>',
              bulb: '<g data-name="Layer 2"><g data-name="bulb"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 7a5 5 0 0 0-3 9v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a5 5 0 0 0-3-9z"/><path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z"/><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M5 11H3a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M7.66 6.42L6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.06-1.41z"/><path d="M19.19 5.05a1 1 0 0 0-1.41 0l-1.44 1.37a1 1 0 0 0 0 1.41 1 1 0 0 0 .72.31 1 1 0 0 0 .69-.28l1.44-1.39a1 1 0 0 0 0-1.42z"/></g></g>',
              calendar: '<g data-name="Layer 2"><g data-name="calendar"><rect width="24" height="24" opacity="0"/><path d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM8 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm8 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm3-6H5V7a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1z"/></g></g>',
              camera: '<g data-name="Layer 2"><g data-name="camera"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="14" r="1.5"/><path d="M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-9-1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zm2 12a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z"/></g></g>',
              car: '<g data-name="Layer 2"><g data-name="car"><rect width="24" height="24" opacity="0"/><path d="M21.6 11.22L17 7.52V5a1.91 1.91 0 0 0-1.81-2H3.79A1.91 1.91 0 0 0 2 5v10a2 2 0 0 0 1.2 1.88 3 3 0 1 0 5.6.12h6.36a3 3 0 1 0 5.64 0h.2a1 1 0 0 0 1-1v-4a1 1 0 0 0-.4-.78zM20 12.48V15h-3v-4.92zM7 18a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm12 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"/></g></g>',
              cast: '<g data-name="Layer 2"><g data-name="cast"><polyline points="24 24 0 24 0 0" opacity="0"/><path d="M18.4 3H5.6A2.7 2.7 0 0 0 3 5.78V7a1 1 0 0 0 2 0V5.78A.72.72 0 0 1 5.6 5h12.8a.72.72 0 0 1 .6.78v12.44a.72.72 0 0 1-.6.78H17a1 1 0 0 0 0 2h1.4a2.7 2.7 0 0 0 2.6-2.78V5.78A2.7 2.7 0 0 0 18.4 3z"/><path d="M3.86 14A1 1 0 0 0 3 15.17a1 1 0 0 0 1.14.83 2.49 2.49 0 0 1 2.12.72 2.52 2.52 0 0 1 .51 2.84 1 1 0 0 0 .48 1.33 1.06 1.06 0 0 0 .42.09 1 1 0 0 0 .91-.58A4.52 4.52 0 0 0 3.86 14z"/><path d="M3.86 10.08a1 1 0 0 0 .28 2 6 6 0 0 1 5.09 1.71 6 6 0 0 1 1.53 5.95 1 1 0 0 0 .68 1.26.9.9 0 0 0 .28 0 1 1 0 0 0 1-.72 8 8 0 0 0-8.82-10.2z"/><circle cx="4" cy="19" r="1"/></g></g>',
              charging: '<g data-name="Layer 2"><g data-name="charging"><rect width="24" height="24" opacity="0"/><path d="M11.28 13H7a1 1 0 0 1-.86-.5 1 1 0 0 1 0-1L9.28 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h4.25z"/><path d="M15.83 6h-4.25l-2.86 5H13a1 1 0 0 1 .86.5 1 1 0 0 1 0 1L10.72 18h5.11A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6z"/><path d="M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z"/></g></g>',
              "checkmark-circle-2": '<g data-name="Layer 2"><g data-name="checkmark-circle-2"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z"/></g></g>',
              "checkmark-circle": '<g data-name="Layer 2"><g data-name="checkmark-circle"><rect width="24" height="24" opacity="0"/><path d="M9.71 11.29a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .72-.34l7-8a1 1 0 0 0-1.5-1.32L12 13.54z"/><path d="M21 11a1 1 0 0 0-1 1 8 8 0 0 1-8 8A8 8 0 0 1 6.33 6.36 7.93 7.93 0 0 1 12 4a8.79 8.79 0 0 1 1.9.22 1 1 0 1 0 .47-1.94A10.54 10.54 0 0 0 12 2a10 10 0 0 0-7 17.09A9.93 9.93 0 0 0 12 22a10 10 0 0 0 10-10 1 1 0 0 0-1-1z"/></g></g>',
              "checkmark-square-2": '<g data-name="Layer 2"><g data-name="checkmark-square-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-1.7 6.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z"/></g></g>',
              "checkmark-square": '<g data-name="Layer 2"><g data-name="checkmark-square"><rect width="24" height="24" opacity="0"/><path d="M20 11.83a1 1 0 0 0-1 1v5.57a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6h9.57a1 1 0 1 0 0-2H5.6A2.61 2.61 0 0 0 3 5.6v12.8A2.61 2.61 0 0 0 5.6 21h12.8a2.61 2.61 0 0 0 2.6-2.6v-5.57a1 1 0 0 0-1-1z"/><path d="M10.72 11a1 1 0 0 0-1.44 1.38l2.22 2.33a1 1 0 0 0 .72.31 1 1 0 0 0 .72-.3l6.78-7a1 1 0 1 0-1.44-1.4l-6.05 6.26z"/></g></g>',
              checkmark: '<g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g>',
              "chevron-down": '<g data-name="Layer 2"><g data-name="chevron-down"><rect width="24" height="24" opacity="0"/><path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"/></g></g>',
              "chevron-left": '<g data-name="Layer 2"><g data-name="chevron-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z"/></g></g>',
              "chevron-right": '<g data-name="Layer 2"><g data-name="chevron-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z"/></g></g>',
              "chevron-up": '<g data-name="Layer 2"><g data-name="chevron-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M16 14.5a1 1 0 0 1-.71-.29L12 10.9l-3.3 3.18a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.42 1 1 0 0 1-.69.28z"/></g></g>',
              clipboard: '<g data-name="Layer 2"><g data-name="clipboard"><rect width="24" height="24" opacity="0"/><path d="M18 4v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z"/><rect x="7" y="2" width="10" height="6" rx="1" ry="1"/></g></g>',
              clock: '<g data-name="Layer 2"><g data-name="clock"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4 11h-4a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2z"/></g></g>',
              "close-circle": '<g data-name="Layer 2"><g data-name="close-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm2.71 11.29a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42l1.3-1.29-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3 1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12z"/></g></g>',
              "close-square": '<g data-name="Layer 2"><g data-name="close-square"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-3.29 10.29a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42l1.3-1.29-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3 1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12z"/></g></g>',
              close: '<g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
              "cloud-download": '<g data-name="Layer 2"><g data-name="cloud-download"><rect width="24" height="24" opacity="0"/><path d="M21.9 11c0-.11-.06-.22-.09-.33a4.17 4.17 0 0 0-.18-.57c-.05-.12-.12-.24-.18-.37s-.15-.3-.24-.44S21 9.08 21 9s-.2-.25-.31-.37-.21-.2-.32-.3L20 8l-.36-.24a3.68 3.68 0 0 0-.44-.23l-.39-.18a4.13 4.13 0 0 0-.5-.15 3 3 0 0 0-.41-.09h-.18A6 6 0 0 0 6.33 7h-.18a3 3 0 0 0-.41.09 4.13 4.13 0 0 0-.5.15l-.39.18a3.68 3.68 0 0 0-.44.23L4.05 8l-.37.31c-.11.1-.22.19-.32.3s-.21.25-.31.37-.18.23-.26.36-.16.29-.24.44-.13.25-.18.37a4.17 4.17 0 0 0-.18.57c0 .11-.07.22-.09.33A5.23 5.23 0 0 0 2 12a5.5 5.5 0 0 0 .09.91c0 .1.05.19.07.29a5.58 5.58 0 0 0 .18.58l.12.29a5 5 0 0 0 .3.56l.14.22a.56.56 0 0 0 .05.08L3 15a5 5 0 0 0 4 2 2 2 0 0 1 .59-1.41A2 2 0 0 1 9 15a1.92 1.92 0 0 1 1 .27V12a2 2 0 0 1 4 0v3.37a2 2 0 0 1 1-.27 2.05 2.05 0 0 1 1.44.61A2 2 0 0 1 17 17a5 5 0 0 0 4-2l.05-.05a.56.56 0 0 0 .05-.08l.14-.22a5 5 0 0 0 .3-.56l.12-.29a5.58 5.58 0 0 0 .18-.58c0-.1.05-.19.07-.29A5.5 5.5 0 0 0 22 12a5.23 5.23 0 0 0-.1-1z"/><path d="M14.31 16.38L13 17.64V12a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 21a1 1 0 0 0 .69-.28l3-2.9a1 1 0 1 0-1.38-1.44z"/><rect width="24" height="24" opacity="0"/><path d="M21.9 11c0-.11-.06-.22-.09-.33a4.17 4.17 0 0 0-.18-.57c-.05-.12-.12-.24-.18-.37s-.15-.3-.24-.44S21 9.08 21 9s-.2-.25-.31-.37-.21-.2-.32-.3L20 8l-.36-.24a3.68 3.68 0 0 0-.44-.23l-.39-.18a4.13 4.13 0 0 0-.5-.15 3 3 0 0 0-.41-.09h-.18A6 6 0 0 0 6.33 7h-.18a3 3 0 0 0-.41.09 4.13 4.13 0 0 0-.5.15l-.39.18a3.68 3.68 0 0 0-.44.23L4.05 8l-.37.31c-.11.1-.22.19-.32.3s-.21.25-.31.37-.18.23-.26.36-.16.29-.24.44-.13.25-.18.37a4.17 4.17 0 0 0-.18.57c0 .11-.07.22-.09.33A5.23 5.23 0 0 0 2 12a5.5 5.5 0 0 0 .09.91c0 .1.05.19.07.29a5.58 5.58 0 0 0 .18.58l.12.29a5 5 0 0 0 .3.56l.14.22a.56.56 0 0 0 .05.08L3 15a5 5 0 0 0 4 2 2 2 0 0 1 .59-1.41A2 2 0 0 1 9 15a1.92 1.92 0 0 1 1 .27V12a2 2 0 0 1 4 0v3.37a2 2 0 0 1 1-.27 2.05 2.05 0 0 1 1.44.61A2 2 0 0 1 17 17a5 5 0 0 0 4-2l.05-.05a.56.56 0 0 0 .05-.08l.14-.22a5 5 0 0 0 .3-.56l.12-.29a5.58 5.58 0 0 0 .18-.58c0-.1.05-.19.07-.29A5.5 5.5 0 0 0 22 12a5.23 5.23 0 0 0-.1-1z"/><path d="M14.31 16.38L13 17.64V12a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 21a1 1 0 0 0 .69-.28l3-2.9a1 1 0 1 0-1.38-1.44z"/></g></g>',
              "cloud-upload": '<g data-name="Layer 2"><g data-name="cloud-upload"><rect width="24" height="24" opacity="0"/><path d="M21.9 12c0-.11-.06-.22-.09-.33a4.17 4.17 0 0 0-.18-.57c-.05-.12-.12-.24-.18-.37s-.15-.3-.24-.44S21 10.08 21 10s-.2-.25-.31-.37-.21-.2-.32-.3L20 9l-.36-.24a3.68 3.68 0 0 0-.44-.23l-.39-.18a4.13 4.13 0 0 0-.5-.15 3 3 0 0 0-.41-.09L17.67 8A6 6 0 0 0 6.33 8l-.18.05a3 3 0 0 0-.41.09 4.13 4.13 0 0 0-.5.15l-.39.18a3.68 3.68 0 0 0-.44.23l-.36.3-.37.31c-.11.1-.22.19-.32.3s-.21.25-.31.37-.18.23-.26.36-.16.29-.24.44-.13.25-.18.37a4.17 4.17 0 0 0-.18.57c0 .11-.07.22-.09.33A5.23 5.23 0 0 0 2 13a5.5 5.5 0 0 0 .09.91c0 .1.05.19.07.29a5.58 5.58 0 0 0 .18.58l.12.29a5 5 0 0 0 .3.56l.14.22a.56.56 0 0 0 .05.08L3 16a5 5 0 0 0 4 2h3v-1.37a2 2 0 0 1-1 .27 2.05 2.05 0 0 1-1.44-.61 2 2 0 0 1 .05-2.83l3-2.9A2 2 0 0 1 12 10a2 2 0 0 1 1.41.59l3 3a2 2 0 0 1 0 2.82A2 2 0 0 1 15 17a1.92 1.92 0 0 1-1-.27V18h3a5 5 0 0 0 4-2l.05-.05a.56.56 0 0 0 .05-.08l.14-.22a5 5 0 0 0 .3-.56l.12-.29a5.58 5.58 0 0 0 .18-.58c0-.1.05-.19.07-.29A5.5 5.5 0 0 0 22 13a5.23 5.23 0 0 0-.1-1z"/><path d="M12.71 11.29a1 1 0 0 0-1.4 0l-3 2.9a1 1 0 1 0 1.38 1.44L11 14.36V20a1 1 0 0 0 2 0v-5.59l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
              "code-download": '<g data-name="Layer 2"><g data-name="code-download"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M4.29 12l4.48-5.36a1 1 0 1 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z"/><path d="M21.78 11.37l-4.78-6a1 1 0 0 0-1.56 1.26L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"/><path d="M15.72 11.41a1 1 0 0 0-1.41 0L13 12.64V8a1 1 0 0 0-2 0v4.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .69-.28l3-2.9a1 1 0 0 0 .03-1.41z"/></g></g>',
              code: '<g data-name="Layer 2"><g data-name="code"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M8.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L4.29 12l4.48-5.36a1 1 0 0 0-.13-1.41z"/><path d="M21.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"/></g></g>',
              collapse: '<g data-name="Layer 2"><g data-name="collapse"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 9h-2.58l3.29-3.29a1 1 0 1 0-1.42-1.42L15 7.57V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2z"/><path d="M10 13H5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L9 16.42V19a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"/></g></g>',
              "color-palette": '<g data-name="Layer 2"><g data-name="color-palette"><rect width="24" height="24" opacity="0"/><path d="M19.54 5.08A10.61 10.61 0 0 0 11.91 2a10 10 0 0 0-.05 20 2.58 2.58 0 0 0 2.53-1.89 2.52 2.52 0 0 0-.57-2.28.5.5 0 0 1 .37-.83h1.65A6.15 6.15 0 0 0 22 11.33a8.48 8.48 0 0 0-2.46-6.25zm-12.7 9.66a1.5 1.5 0 1 1 .4-2.08 1.49 1.49 0 0 1-.4 2.08zM8.3 9.25a1.5 1.5 0 1 1-.55-2 1.5 1.5 0 0 1 .55 2zM11 7a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 11 7zm5.75.8a1.5 1.5 0 1 1 .55-2 1.5 1.5 0 0 1-.55 2z"/></g></g>',
              "color-picker": '<g data-name="Layer 2"><g data-name="color-picker"><rect width="24" height="24" opacity="0"/><path d="M19.4 7.34L16.66 4.6A1.92 1.92 0 0 0 14 4.53l-2 2-1.29-1.24a1 1 0 0 0-1.42 1.42L10.53 8 5 13.53a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l5.58-5.58 1.24 1.24a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-1.24-1.24 2-2a1.92 1.92 0 0 0-.07-2.71zm-13 7.6L12 9.36l2.69 2.7-2.79 2.79"/></g></g>',
              compass: '<g data-name="Layer 2"><g data-name="compass"><rect width="24" height="24" opacity="0"/><polygon points="10.8 13.21 12.49 12.53 13.2 10.79 11.51 11.47 10.8 13.21"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.93 7.42l-1.75 4.26a1 1 0 0 1-.55.55l-4.21 1.7A1 1 0 0 1 9 16a1 1 0 0 1-.71-.31h-.05a1 1 0 0 1-.18-1l1.75-4.26a1 1 0 0 1 .55-.55l4.21-1.7a1 1 0 0 1 1.1.25 1 1 0 0 1 .26.99z"/></g></g>',
              copy: '<g data-name="Layer 2"><g data-name="copy"><rect width="24" height="24" opacity="0"/><path d="M18 9h-3V5.67A2.68 2.68 0 0 0 12.33 3H5.67A2.68 2.68 0 0 0 3 5.67v6.66A2.68 2.68 0 0 0 5.67 15H9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3zm-9 3v1H5.67a.67.67 0 0 1-.67-.67V5.67A.67.67 0 0 1 5.67 5h6.66a.67.67 0 0 1 .67.67V9h-1a3 3 0 0 0-3 3z"/></g></g>',
              "corner-down-left": '<g data-name="Layer 2"><g data-name="corner-down-left"><rect x=".05" y=".05" width="24" height="24" transform="rotate(-89.76 12.05 12.05)" opacity="0"/><path d="M20 6a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 1-.29.71A1 1 0 0 1 17 12H8.08l2.69-3.39a1 1 0 0 0-1.52-1.17l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78.37 1 1 0 0 0 .62-.22 1 1 0 0 0 .15-1.41l-2.66-3.36h8.92a3 3 0 0 0 3-3z"/></g></g>',
              "corner-down-right": '<g data-name="Layer 2"><g data-name="corner-down-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M19.78 12.38l-4-5a1 1 0 0 0-1.56 1.24l2.7 3.38H8a1 1 0 0 1-1-1V6a1 1 0 0 0-2 0v5a3 3 0 0 0 3 3h8.92l-2.7 3.38a1 1 0 0 0 .16 1.4A1 1 0 0 0 15 19a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0 0-1.24z"/></g></g>',
              "corner-left-down": '<g data-name="Layer 2"><g data-name="corner-left-down"><rect width="24" height="24" opacity="0"/><path d="M18 5h-5a3 3 0 0 0-3 3v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 1 0-1.24-1.56L12 16.92V8a1 1 0 0 1 1-1h5a1 1 0 0 0 0-2z"/></g></g>',
              "corner-left-up": '<g data-name="Layer 2"><g data-name="corner-left-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 17h-5a1 1 0 0 1-1-1V7.08l3.38 2.7A1 1 0 0 0 16 10a1 1 0 0 0 .78-.38 1 1 0 0 0-.16-1.4l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L10 7.08V16a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2z"/></g></g>',
              "corner-right-down": '<g data-name="Layer 2"><g data-name="corner-right-down"><rect width="24" height="24" opacity="0"/><path d="M18.78 14.38a1 1 0 0 0-1.4-.16L14 16.92V8a3 3 0 0 0-3-3H6a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 0 0 .16-1.4z"/></g></g>',
              "corner-right-up": '<g data-name="Layer 2"><g data-name="corner-right-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18.62 8.22l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L12 7.08V16a1 1 0 0 1-1 1H6a1 1 0 0 0 0 2h5a3 3 0 0 0 3-3V7.08l3.38 2.7A1 1 0 0 0 18 10a1 1 0 0 0 .78-.38 1 1 0 0 0-.16-1.4z"/></g></g>',
              "corner-up-left": '<g data-name="Layer 2"><g data-name="corner-up-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M16 10H7.08l2.7-3.38a1 1 0 1 0-1.56-1.24l-4 5a1 1 0 0 0 0 1.24l4 5A1 1 0 0 0 9 17a1 1 0 0 0 .62-.22 1 1 0 0 0 .16-1.4L7.08 12H16a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0v-5a3 3 0 0 0-3-3z"/></g></g>',
              "corner-up-right": '<g data-name="Layer 2"><g data-name="corner-up-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M19.78 10.38l-4-5a1 1 0 0 0-1.56 1.24l2.7 3.38H8a3 3 0 0 0-3 3v5a1 1 0 0 0 2 0v-5a1 1 0 0 1 1-1h8.92l-2.7 3.38a1 1 0 0 0 .16 1.4A1 1 0 0 0 15 17a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0 0-1.24z"/></g></g>',
              "credit-card": '<g data-name="Layer 2"><g data-name="credit-card"><rect width="24" height="24" opacity="0"/><path d="M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-8 10H7a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm6 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm3-6H4V8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"/></g></g>',
              crop: '<g data-name="Layer 2"><g data-name="crop"><rect width="24" height="24" opacity="0"/><path d="M21 16h-3V8.56A2.56 2.56 0 0 0 15.44 6H8V3a1 1 0 0 0-2 0v3H3a1 1 0 0 0 0 2h3v7.44A2.56 2.56 0 0 0 8.56 18H16v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2zM8.56 16a.56.56 0 0 1-.56-.56V8h7.44a.56.56 0 0 1 .56.56V16z"/></g></g>',
              cube: '<g data-name="Layer 2"><g data-name="cube"><rect width="24" height="24" opacity="0"/><path d="M11.25 11.83L3 8.36v7.73a1.69 1.69 0 0 0 1 1.52L11.19 21h.06z"/><path d="M12 10.5l8.51-3.57a1.62 1.62 0 0 0-.51-.38l-7.2-3.37a1.87 1.87 0 0 0-1.6 0L4 6.55a1.62 1.62 0 0 0-.51.38z"/><path d="M12.75 11.83V21h.05l7.2-3.39a1.69 1.69 0 0 0 1-1.51V8.36z"/></g></g>',
              "diagonal-arrow-left-down": '<g data-name="Layer 2"><g data-name="diagonal-arrow-left-down"><rect width="24" height="24" opacity="0"/><path d="M17.71 6.29a1 1 0 0 0-1.42 0L8 14.59V9a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2H9.41l8.3-8.29a1 1 0 0 0 0-1.42z"/></g></g>',
              "diagonal-arrow-left-up": '<g data-name="Layer 2"><g data-name="diagonal-arrow-left-up"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M17.71 16.29L9.42 8H15a1 1 0 0 0 0-2H7.05a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H7a1 1 0 0 0 1-1V9.45l8.26 8.26a1 1 0 0 0 1.42 0 1 1 0 0 0 .03-1.42z"/></g></g>',
              "diagonal-arrow-right-down": '<g data-name="Layer 2"><g data-name="diagonal-arrow-right-down"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M17 8a1 1 0 0 0-1 1v5.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29H9a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"/></g></g>',
              "diagonal-arrow-right-up": '<g data-name="Layer 2"><g data-name="diagonal-arrow-right-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/></g></g>',
              "done-all": '<g data-name="Layer 2"><g data-name="done-all"><rect width="24" height="24" opacity="0"/><path d="M16.62 6.21a1 1 0 0 0-1.41.17l-7 9-3.43-4.18a1 1 0 1 0-1.56 1.25l4.17 5.18a1 1 0 0 0 .78.37 1 1 0 0 0 .83-.38l7.83-10a1 1 0 0 0-.21-1.41z"/><path d="M21.62 6.21a1 1 0 0 0-1.41.17l-7 9-.61-.75-1.26 1.62 1.1 1.37a1 1 0 0 0 .78.37 1 1 0 0 0 .78-.38l7.83-10a1 1 0 0 0-.21-1.4z"/><path d="M8.71 13.06L10 11.44l-.2-.24a1 1 0 0 0-1.43-.2 1 1 0 0 0-.15 1.41z"/></g></g>',
              download: '<g data-name="Layer 2"><g data-name="download"><rect width="24" height="24" opacity="0"/><rect x="4" y="18" width="16" height="2" rx="1" ry="1"/><rect x="3" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 5 18)"/><rect x="17" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 19 18)"/><path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39 1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"/><path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"/></g></g>',
              "droplet-off": '<g data-name="Layer 2"><g data-name="droplet-off"><rect width="24" height="24" opacity="0"/><path d="M19 16.14A7.73 7.73 0 0 0 17.34 8l-4.56-4.69a1 1 0 0 0-.71-.31 1 1 0 0 0-.72.3L8.74 5.92z"/><path d="M6 8.82a7.73 7.73 0 0 0 .64 9.9A7.44 7.44 0 0 0 11.92 21a7.34 7.34 0 0 0 4.64-1.6z"/><path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
              droplet: '<g data-name="Layer 2"><g data-name="droplet"><rect x=".1" y=".1" width="24" height="24" transform="rotate(.48 11.987 11.887)" opacity="0"/><path d="M12 21.1a7.4 7.4 0 0 1-5.28-2.28 7.73 7.73 0 0 1 .1-10.77l4.64-4.65a.94.94 0 0 1 .71-.3 1 1 0 0 1 .71.31l4.56 4.72a7.73 7.73 0 0 1-.09 10.77A7.33 7.33 0 0 1 12 21.1z"/></g></g>',
              "edit-2": '<g data-name="Layer 2"><g data-name="edit-2"><rect width="24" height="24" opacity="0"/><path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"/><path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6z"/></g></g>',
              edit: '<g data-name="Layer 2"><g data-name="edit"><rect width="24" height="24" opacity="0"/><path d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM16 10.68L13.32 8l1.95-2L18 8.73z"/></g></g>',
              email: '<g data-name="Layer 2"><g data-name="email"><rect width="24" height="24" opacity="0"/><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm0 2l-6.5 4.47a1 1 0 0 1-1 0L5 6z"/></g></g>',
              expand: '<g data-name="Layer 2"><g data-name="expand"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20 5a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42V10a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/><path d="M10.71 13.29a1 1 0 0 0-1.42 0L6 16.57V14a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1 1 0 0 0 0-1.42z"/></g></g>',
              "external-link": '<g data-name="Layer 2"><g data-name="external-link"><rect width="24" height="24" opacity="0"/><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"/><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"/></g></g>',
              "eye-off-2": '<g data-name="Layer 2"><g data-name="eye-off-2"><rect width="24" height="24" opacity="0"/><path d="M17.81 13.39A8.93 8.93 0 0 0 21 7.62a1 1 0 1 0-2-.24 7.07 7.07 0 0 1-14 0 1 1 0 1 0-2 .24 8.93 8.93 0 0 0 3.18 5.77l-2.3 2.32a1 1 0 0 0 1.41 1.41l2.61-2.6a9.06 9.06 0 0 0 3.1.92V19a1 1 0 0 0 2 0v-3.56a9.06 9.06 0 0 0 3.1-.92l2.61 2.6a1 1 0 0 0 1.41-1.41z"/></g></g>',
              "eye-off": '<g data-name="Layer 2"><g data-name="eye-off"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="12" r="1.5"/><path d="M15.29 18.12L14 16.78l-.07-.07-1.27-1.27a4.07 4.07 0 0 1-.61.06A3.5 3.5 0 0 1 8.5 12a4.07 4.07 0 0 1 .06-.61l-2-2L5 7.87a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.48 9.48 0 0 0 3.23-.67z"/><path d="M8.59 5.76l2.8 2.8A4.07 4.07 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 4.07 4.07 0 0 1-.06.61l2.68 2.68.84.84a15.89 15.89 0 0 0 2.91-3.63 1 1 0 0 0 0-1c-.64-1.11-4.16-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67z"/><path d="M20.71 19.29L19.41 18l-2-2-9.52-9.53L6.42 5 4.71 3.29a1 1 0 0 0-1.42 1.42L5.53 7l1.75 1.7 7.31 7.3.07.07L16 17.41l.59.59 2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
              eye: '<g data-name="Layer 2"><g data-name="eye"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="12" r="1.5"/><path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zm-9.87 4a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z"/></g></g>',
              facebook: '<g data-name="Layer 2"><g data-name="facebook"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"/></g></g>',
              "file-add": '<g data-name="Layer 2"><g data-name="file-add"><rect width="24" height="24" opacity="0"/><path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2zm.71-7a.79.79 0 0 1-.71-.85V4l3.74 4z"/></g></g>',
              "file-remove": '<g data-name="Layer 2"><g data-name="file-remove"><rect width="24" height="24" opacity="0"/><path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM14 15h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm.71-7a.79.79 0 0 1-.71-.85V4l3.74 4z"/></g></g>',
              "file-text": '<g data-name="Layer 2"><g data-name="file-text"><rect width="24" height="24" opacity="0"/><path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM9 12h3a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm6 6H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-.29-10a.79.79 0 0 1-.71-.85V4l3.74 4z"/></g></g>',
              file: '<g data-name="Layer 2"><g data-name="file"><rect width="24" height="24" opacity="0"/><path d="M19.74 7.33l-4.44-5a1 1 0 0 0-.74-.33h-8A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V8a1 1 0 0 0-.26-.67zM14 4l3.74 4h-3a.79.79 0 0 1-.74-.85z"/></g></g>',
              film: '<g data-name="Layer 2"><g data-name="film"><rect width="24" height="24" opacity="0"/><path d="M18.26 3H5.74A2.74 2.74 0 0 0 3 5.74v12.52A2.74 2.74 0 0 0 5.74 21h12.52A2.74 2.74 0 0 0 21 18.26V5.74A2.74 2.74 0 0 0 18.26 3zM7 11H5V9h2zm-2 2h2v2H5zm14-2h-2V9h2zm-2 2h2v2h-2zm2-7.26V7h-2V5h1.26a.74.74 0 0 1 .74.74zM5.74 5H7v2H5V5.74A.74.74 0 0 1 5.74 5zM5 18.26V17h2v2H5.74a.74.74 0 0 1-.74-.74zm14 0a.74.74 0 0 1-.74.74H17v-2h2z"/></g></g>',
              flag: '<g data-name="Layer 2"><g data-name="flag"><polyline points="24 24 0 24 0 0" opacity="0"/><path d="M19.27 4.68a1.79 1.79 0 0 0-1.6-.25 7.53 7.53 0 0 1-2.17.28 8.54 8.54 0 0 1-3.13-.78A10.15 10.15 0 0 0 8.5 3c-2.89 0-4 1-4.2 1.14a1 1 0 0 0-.3.72V20a1 1 0 0 0 2 0v-4.3a6.28 6.28 0 0 1 2.5-.41 8.54 8.54 0 0 1 3.13.78 10.15 10.15 0 0 0 3.87.93 7.66 7.66 0 0 0 3.5-.7 1.74 1.74 0 0 0 1-1.55V6.11a1.77 1.77 0 0 0-.73-1.43z"/></g></g>',
              "flash-off": '<g data-name="Layer 2"><g data-name="flash-off"><rect width="24" height="24" opacity="0"/><path d="M17.33 14.5l2.5-3.74A1 1 0 0 0 19 9.2h-5.89l.77-7.09a1 1 0 0 0-.65-1 1 1 0 0 0-1.17.38L8.94 6.11z"/><path d="M6.67 9.5l-2.5 3.74A1 1 0 0 0 5 14.8h5.89l-.77 7.09a1 1 0 0 0 .65 1.05 1 1 0 0 0 .34.06 1 1 0 0 0 .83-.44l3.12-4.67z"/><path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
              flash: '<g data-name="Layer 2"><g data-name="flash"><rect width="24" height="24" opacity="0"/><path d="M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44z"/></g></g>',
              "flip-2": '<g data-name="Layer 2"><g data-name="flip-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M6.09 19h12l-1.3 1.29a1 1 0 0 0 1.42 1.42l3-3a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19z"/><path d="M5.79 9.71a1 1 0 1 0 1.42-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5h-12l1.3-1.29a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 0 1.42z"/></g></g>',
              flip: '<g data-name="Layer 2"><g data-name="flip-in"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M5 6.09v12l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0L7 18.09v-12A1.56 1.56 0 0 1 8.53 4.5H11a1 1 0 0 0 0-2H8.53A3.56 3.56 0 0 0 5 6.09z"/><path d="M14.29 5.79a1 1 0 0 0 1.42 1.42L17 5.91v12a1.56 1.56 0 0 1-1.53 1.59H13a1 1 0 0 0 0 2h2.47A3.56 3.56 0 0 0 19 17.91v-12l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0z"/></g></g>',
              "folder-add": '<g data-name="Layer 2"><g data-name="folder-add"><rect width="24" height="24" opacity="0"/><path d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43zM14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2z"/></g></g>',
              "folder-remove": '<g data-name="Layer 2"><g data-name="folder-remove"><rect width="24" height="24" opacity="0"/><path d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43zM14 15h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"/></g></g>',
              folder: '<g data-name="Layer 2"><g data-name="folder"><rect width="24" height="24" opacity="0"/><path d="M19.5 20.5h-15A2.47 2.47 0 0 1 2 18.07V5.93A2.47 2.47 0 0 1 4.5 3.5h4.6a1 1 0 0 1 .77.37l2.6 3.18h7A2.47 2.47 0 0 1 22 9.48v8.59a2.47 2.47 0 0 1-2.5 2.43z"/></g></g>',
              funnel: '<g data-name="Layer 2"><g data-name="funnel"><rect width="24" height="24" opacity="0"/><path d="M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49 1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9 1 1 0 0 1-.41.1z"/></g></g>',
              gift: '<g data-name="Layer 2"><g data-name="gift"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M4.64 15.27v4.82a.92.92 0 0 0 .92.91h5.62v-5.73z"/><path d="M12.82 21h5.62a.92.92 0 0 0 .92-.91v-4.82h-6.54z"/><path d="M20.1 7.09h-1.84a2.82 2.82 0 0 0 .29-1.23A2.87 2.87 0 0 0 15.68 3 4.21 4.21 0 0 0 12 5.57 4.21 4.21 0 0 0 8.32 3a2.87 2.87 0 0 0-2.87 2.86 2.82 2.82 0 0 0 .29 1.23H3.9c-.5 0-.9.59-.9 1.31v3.93c0 .72.4 1.31.9 1.31h7.28V7.09h1.64v6.55h7.28c.5 0 .9-.59.9-1.31V8.4c0-.72-.4-1.31-.9-1.31zm-11.78 0a1.23 1.23 0 1 1 0-2.45c1.4 0 2.19 1.44 2.58 2.45zm7.36 0H13.1c.39-1 1.18-2.45 2.58-2.45a1.23 1.23 0 1 1 0 2.45z"/></g></g>',
              github: '<g data-name="Layer 2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" data-name="github"/></g>',
              "globe-2": '<g data-name="Layer 2"><g data-name="globe-2"><rect width="24" height="24" opacity="0"/><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 2a8.19 8.19 0 0 1 1.79.21 2.61 2.61 0 0 1-.78 1c-.22.17-.46.31-.7.46a4.56 4.56 0 0 0-1.85 1.67 6.49 6.49 0 0 0-.62 3.3c0 1.36 0 2.16-.95 2.87-1.37 1.07-3.46.47-4.76-.07A8.33 8.33 0 0 1 4 12a8 8 0 0 1 8-8zm4.89 14.32a6.79 6.79 0 0 0-.63-1.14c-.11-.16-.22-.32-.32-.49-.39-.68-.25-1 .38-2l.1-.17a4.77 4.77 0 0 0 .58-2.43 5.42 5.42 0 0 1 .09-1c.16-.73 1.71-.93 2.67-1a7.94 7.94 0 0 1-2.86 8.28z"/></g></g>',
              "globe-3": '<g data-name="Layer 2"><g data-name="globe-3"><rect width="24" height="24" opacity="0"/><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zM5 15.8a8.42 8.42 0 0 0 2 .27 5 5 0 0 0 3.14-1c1.71-1.34 1.71-3.06 1.71-4.44a4.76 4.76 0 0 1 .37-2.34 2.86 2.86 0 0 1 1.12-.91 9.75 9.75 0 0 0 .92-.61 4.55 4.55 0 0 0 1.4-1.87A8 8 0 0 1 19 8.12c-1.43.2-3.46.67-3.86 2.53A7 7 0 0 0 15 12a2.93 2.93 0 0 1-.29 1.47l-.1.17c-.65 1.08-1.38 2.31-.39 4 .12.21.25.41.38.61a2.29 2.29 0 0 1 .52 1.08A7.89 7.89 0 0 1 12 20a8 8 0 0 1-7-4.2z"/></g></g>',
              globe: '<g data-name="Layer 2"><g data-name="globe"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"/></g></g>',
              google: '<g data-name="Layer 2"><g data-name="google"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M17.5 14a5.51 5.51 0 0 1-4.5 3.93 6.15 6.15 0 0 1-7-5.45A6 6 0 0 1 12 6a6.12 6.12 0 0 1 2.27.44.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.29 10.12 10.12 0 0 0 11.57 22 10 10 0 0 0 22 12.52v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5"/></g></g>',
              grid: '<g data-name="Layer 2"><g data-name="grid"><rect width="24" height="24" opacity="0"/><path d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M19 3h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M9 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"/><path d="M19 13h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"/></g></g>',
              "hard-drive": '<g data-name="Layer 2"><g data-name="hard-drive"><rect width="24" height="24" opacity="0"/><path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8 17a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm8 0h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM5.62 11l2.72-5.45a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11z"/></g></g>',
              hash: '<g data-name="Layer 2"><g data-name="hash"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20 14h-4.3l.73-4H20a1 1 0 0 0 0-2h-3.21l.69-3.81A1 1 0 0 0 16.64 3a1 1 0 0 0-1.22.82L14.67 8h-3.88l.69-3.81A1 1 0 0 0 10.64 3a1 1 0 0 0-1.22.82L8.67 8H4a1 1 0 0 0 0 2h4.3l-.73 4H4a1 1 0 0 0 0 2h3.21l-.69 3.81A1 1 0 0 0 7.36 21a1 1 0 0 0 1.22-.82L9.33 16h3.88l-.69 3.81a1 1 0 0 0 .84 1.19 1 1 0 0 0 1.22-.82l.75-4.18H20a1 1 0 0 0 0-2zM9.7 14l.73-4h3.87l-.73 4z"/></g></g>',
              headphones: '<g data-name="Layer 2"><g data-name="headphones"><rect width="24" height="24" opacity="0"/><path d="M12 2A10.2 10.2 0 0 0 2 12.37V17a4 4 0 1 0 4-4 3.91 3.91 0 0 0-2 .56v-1.19A8.2 8.2 0 0 1 12 4a8.2 8.2 0 0 1 8 8.37v1.19a3.91 3.91 0 0 0-2-.56 4 4 0 1 0 4 4v-4.63A10.2 10.2 0 0 0 12 2z"/></g></g>',
              heart: '<g data-name="Layer 2"><g data-name="heart"><rect width="24" height="24" opacity="0"/><path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21z"/></g></g>',
              home: '<g data-name="Layer 2"><g data-name="home"><rect width="24" height="24" opacity="0"/><rect x="10" y="14" width="4" height="7"/><path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2H8v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h3.11A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44z"/></g></g>',
              "image-2": '<g data-name="Layer 2"><g data-name="image-2"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM8 7a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 7zm11 10.83A1.09 1.09 0 0 1 18 19H6l7.57-6.82a.69.69 0 0 1 .93 0l4.5 4.48z"/></g></g>',
              image: '<g data-name="Layer 2"><g data-name="image"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0-3.52 0L5 17.7V6a1 1 0 0 1 1-1z"/><circle cx="8" cy="8.5" r="1.5"/></g></g>',
              inbox: '<g data-name="Layer 2"><g data-name="inbox"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z"/></g></g>',
              info: '<g data-name="Layer 2"><g data-name="info"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm-1-7a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
              keypad: '<g data-name="Layer 2"><g data-name="keypad"><rect width="24" height="24" opacity="0"/><path d="M5 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="M12 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="M19 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3z"/><path d="M5 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="M12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="M19 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="M5 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="M12 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/><path d="M19 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"/></g></g>',
              layers: '<g data-name="Layer 2"><g data-name="layers"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M3.24 7.29l8.52 4.63a.51.51 0 0 0 .48 0l8.52-4.63a.44.44 0 0 0-.05-.81L12.19 3a.5.5 0 0 0-.38 0L3.29 6.48a.44.44 0 0 0-.05.81z"/><path d="M20.71 10.66l-1.83-.78-6.64 3.61a.51.51 0 0 1-.48 0L5.12 9.88l-1.83.78a.48.48 0 0 0 0 .85l8.52 4.9a.46.46 0 0 0 .48 0l8.52-4.9a.48.48 0 0 0-.1-.85z"/><path d="M20.71 15.1l-1.56-.68-6.91 3.76a.51.51 0 0 1-.48 0l-6.91-3.76-1.56.68a.49.49 0 0 0 0 .87l8.52 5a.51.51 0 0 0 .48 0l8.52-5a.49.49 0 0 0-.1-.87z"/></g></g>',
              layout: '<g data-name="Layer 2"><g data-name="layout"><rect width="24" height="24" opacity="0"/><path d="M21 8V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2z"/><path d="M3 10v8a3 3 0 0 0 3 3h5V10z"/><path d="M13 10v11h5a3 3 0 0 0 3-3v-8z"/></g></g>',
              "link-2": '<g data-name="Layer 2"><g data-name="link-2"><rect width="24" height="24" opacity="0"/><path d="M13.29 9.29l-4 4a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42z"/><path d="M12.28 17.4L11 18.67a4.2 4.2 0 0 1-5.58.4 4 4 0 0 1-.27-5.93l1.42-1.43a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-1.27 1.28a6.15 6.15 0 0 0-.67 8.07 6.06 6.06 0 0 0 9.07.6l1.42-1.42a1 1 0 0 0-1.42-1.42z"/><path d="M19.66 3.22a6.18 6.18 0 0 0-8.13.68L10.45 5a1.09 1.09 0 0 0-.17 1.61 1 1 0 0 0 1.42 0L13 5.3a4.17 4.17 0 0 1 5.57-.4 4 4 0 0 1 .27 5.95l-1.42 1.43a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.42-1.42a6.06 6.06 0 0 0-.6-9.06z"/></g></g>',
              link: '<g data-name="Layer 2"><g data-name="link"><rect width="24" height="24" opacity="0"/><path d="M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1z"/><path d="M9 16H7.21A4.13 4.13 0 0 1 3 12.37 4 4 0 0 1 7 8h2a1 1 0 0 0 0-2H7.21a6.15 6.15 0 0 0-6.16 5.21A6 6 0 0 0 7 18h2a1 1 0 0 0 0-2z"/><path d="M23 11.24A6.16 6.16 0 0 0 16.76 6h-1.51C14.44 6 14 6.45 14 7a1 1 0 0 0 1 1h1.79A4.13 4.13 0 0 1 21 11.63 4 4 0 0 1 17 16h-2a1 1 0 0 0 0 2h2a6 6 0 0 0 6-6.76z"/></g></g>',
              linkedin: '<g data-name="Layer 2"><g data-name="linkedin"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93 2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82z"/><rect x="3" y="9.3" width="4.5" height="11.7" rx=".9" ry=".9"/><circle cx="5.25" cy="5.25" r="2.25"/></g></g>',
              list: '<g data-name="Layer 2"><g data-name="list"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><circle cx="4" cy="7" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="17" r="1"/><rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"/><rect x="7" y="16" width="14" height="2" rx=".94" ry=".94"/><rect x="7" y="6" width="14" height="2" rx=".94" ry=".94"/></g></g>',
              lock: '<g data-name="Layer 2"><g data-name="lock"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="15" r="1"/><path d="M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4zM12 18a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/></g></g>',
              "log-in": '<g data-name="Layer 2"><g data-name="log-in"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M19 4h-2a1 1 0 0 0 0 2h1v12h-1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/><path d="M11.8 7.4a1 1 0 0 0-1.6 1.2L12 11H4a1 1 0 0 0 0 2h8.09l-1.72 2.44a1 1 0 0 0 .24 1.4 1 1 0 0 0 .58.18 1 1 0 0 0 .81-.42l2.82-4a1 1 0 0 0 0-1.18z"/></g></g>',
              "log-out": '<g data-name="Layer 2"><g data-name="log-out"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z"/><path d="M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z"/></g></g>',
              map: '<g data-name="Layer 2"><g data-name="map"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20.41 5.89l-4-1.8H15.59L12 5.7 8.41 4.09h-.05L8.24 4h-.6l-4 1.8a1 1 0 0 0-.64 1V19a1 1 0 0 0 .46.84A1 1 0 0 0 4 20a1 1 0 0 0 .41-.09L8 18.3l3.59 1.61h.05a.85.85 0 0 0 .72 0h.05L16 18.3l3.59 1.61A1 1 0 0 0 20 20a1 1 0 0 0 .54-.16A1 1 0 0 0 21 19V6.8a1 1 0 0 0-.59-.91zM9 6.55l2 .89v10l-2-.89zm10 10.9l-2-.89v-10l2 .89z"/></g></g>',
              maximize: '<g data-name="Layer 2"><g data-name="maximize"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM13 12h-1v1a1 1 0 0 1-2 0v-1H9a1 1 0 0 1 0-2h1V9a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2z"/></g></g>',
              "menu-2": '<g data-name="Layer 2"><g data-name="menu-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><circle cx="4" cy="12" r="1"/><rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"/><rect x="3" y="16" width="18" height="2" rx=".94" ry=".94"/><rect x="3" y="6" width="18" height="2" rx=".94" ry=".94"/></g></g>',
              "menu-arrow": '<g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20.05 11H5.91l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 13h14.14a1 1 0 0 0 .95-.95V12a1 1 0 0 0-.95-1z"/><rect x="3" y="17" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="5" width="18" height="2" rx=".95" ry=".95"/></g></g>',
              menu: '<g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"/></g></g>',
              "message-circle": '<g data-name="Layer 2"><g data-name="message-circle"><rect width="24" height="24" opacity="0"/><path d="M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zM8 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
              "message-square": '<g data-name="Layer 2"><g data-name="message-square"><rect width="24" height="24" opacity="0"/><path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM8 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
              "mic-off": '<g data-name="Layer 2"><g data-name="mic-off"><rect width="24" height="24" opacity="0"/><path d="M15.58 12.75A4 4 0 0 0 16 11V6a4 4 0 0 0-7.92-.75"/><path d="M19 11a1 1 0 0 0-2 0 4.86 4.86 0 0 1-.69 2.48L17.78 15A7 7 0 0 0 19 11z"/><path d="M12 15h.16L8 10.83V11a4 4 0 0 0 4 4z"/><path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M15 20h-2v-2.08a7 7 0 0 0 1.65-.44l-1.6-1.6A4.57 4.57 0 0 1 12 16a5 5 0 0 1-5-5 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"/></g></g>',
              mic: '<g data-name="Layer 2"><g data-name="mic"><rect width="24" height="24" opacity="0"/><path d="M12 15a4 4 0 0 0 4-4V6a4 4 0 0 0-8 0v5a4 4 0 0 0 4 4z"/><path d="M19 11a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H8.89a.89.89 0 0 0-.89.89v.22a.89.89 0 0 0 .89.89h6.22a.89.89 0 0 0 .89-.89v-.22a.89.89 0 0 0-.89-.89H13v-2.08A7 7 0 0 0 19 11z"/></g></g>',
              minimize: '<g data-name="Layer 2"><g data-name="minimize"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM13 12H9a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"/></g></g>',
              "minus-circle": '<g data-name="Layer 2"><g data-name="minus-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3 11H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"/></g></g>',
              "minus-square": '<g data-name="Layer 2"><g data-name="minus-square"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-3 10H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"/></g></g>',
              minus: '<g data-name="Layer 2"><g data-name="minus"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z"/></g></g>',
              monitor: '<g data-name="Layer 2"><g data-name="monitor"><rect width="24" height="24" opacity="0"/><path d="M19 3H5a3 3 0 0 0-3 3v5h20V6a3 3 0 0 0-3-3z"/><path d="M2 14a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3v-1H2z"/></g></g>',
              moon: '<g data-name="Layer 2"><g data-name="moon"><rect width="24" height="24" opacity="0"/><path d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z"/></g></g>',
              "more-horizontal": '<g data-name="Layer 2"><g data-name="more-horizotnal"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="5" cy="12" r="2"/></g></g>',
              "more-vertical": '<g data-name="Layer 2"><g data-name="more-vertical"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/></g></g>',
              move: '<g data-name="Layer 2"><g data-name="move"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M21.71 11.31l-3-3a1 1 0 0 0-1.42 1.42L18.58 11H13V5.41l1.29 1.3A1 1 0 0 0 15 7a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42l-3-3A1 1 0 0 0 12 2a1 1 0 0 0-.7.29l-3 3a1 1 0 0 0 1.41 1.42L11 5.42V11H5.41l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3A1 1 0 0 0 2 12a1 1 0 0 0 .29.71l3 3A1 1 0 0 0 6 16a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42L5.42 13H11v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 22a1 1 0 0 0 .7-.29l3-3a1 1 0 0 0-1.42-1.42L13 18.58V13h5.59l-1.3 1.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 16a1 1 0 0 0 .71-.29l3-3A1 1 0 0 0 22 12a1 1 0 0 0-.29-.69z"/></g></g>',
              music: '<g data-name="Layer 2"><g data-name="music"><rect width="24" height="24" opacity="0"/><path d="M19 15V4a1 1 0 0 0-.38-.78 1 1 0 0 0-.84-.2l-9 2A1 1 0 0 0 8 6v8.34a3.49 3.49 0 1 0 2 3.18 4.36 4.36 0 0 0 0-.52V6.8l7-1.55v7.09a3.49 3.49 0 1 0 2 3.17 4.57 4.57 0 0 0 0-.51z"/></g></g>',
              "navigation-2": '<g data-name="Layer 2"><g data-name="navigation-2"><rect width="24" height="24" opacity="0"/><path d="M13.67 22h-.06a1 1 0 0 1-.92-.8l-1.54-7.57a1 1 0 0 0-.78-.78L2.8 11.31a1 1 0 0 1-.12-1.93l16-5.33A1 1 0 0 1 20 5.32l-5.33 16a1 1 0 0 1-1 .68z"/></g></g>',
              navigation: '<g data-name="Layer 2"><g data-name="navigation"><rect width="24" height="24" opacity="0"/><path d="M20 20a.94.94 0 0 1-.55-.17l-6.9-4.56a1 1 0 0 0-1.1 0l-6.9 4.56a1 1 0 0 1-1.44-1.28l8-16a1 1 0 0 1 1.78 0l8 16a1 1 0 0 1-.23 1.2A1 1 0 0 1 20 20z"/></g></g>',
              npm: '<g data-name="Layer 2"><g data-name="npm"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h7V11h4v10h1a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"/></g></g>',
              "options-2": '<g data-name="Layer 2"><g data-name="options-2"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 9a3 3 0 0 0-2.82 2H3a1 1 0 0 0 0 2h13.18A3 3 0 1 0 19 9z"/><path d="M3 7h1.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2H9.82a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2z"/><path d="M21 17h-7.18a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2h5.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2z"/></g></g>',
              options: '<g data-name="Layer 2"><g data-name="options"><rect width="24" height="24" opacity="0"/><path d="M7 14.18V3a1 1 0 0 0-2 0v11.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 0-5.64z"/><path d="M21 13a3 3 0 0 0-2-2.82V3a1 1 0 0 0-2 0v7.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-5.18A3 3 0 0 0 21 13z"/><path d="M15 5a3 3 0 1 0-4 2.82V21a1 1 0 0 0 2 0V7.82A3 3 0 0 0 15 5z"/></g></g>',
              pantone: '<g data-name="Layer 2"><g data-name="pantone"><rect width="24" height="24" opacity="0"/><path d="M20 13.18h-2.7l-1.86 2L11.88 19l-1.41 1.52L10 21h10a1 1 0 0 0 1-1v-5.82a1 1 0 0 0-1-1z"/><path d="M18.19 9.3l-4.14-3.86a.89.89 0 0 0-.71-.26 1 1 0 0 0-.7.31l-.82.89v10.71a5.23 5.23 0 0 1-.06.57l6.48-6.95a1 1 0 0 0-.05-1.41z"/><path d="M10.82 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13.09a3.91 3.91 0 0 0 7.82 0zm-2 13.09a1.91 1.91 0 0 1-3.82 0V15h3.82zm0-4.09H5v-3h3.82zm0-5H5V5h3.82z"/></g></g>',
              "paper-plane": '<g data-name="Layer 2"><g data-name="paper-plane"><rect width="24" height="24" opacity="0"/><path d="M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z"/></g></g>',
              "pause-circle": '<g data-name="Layer 2"><g data-name="pause-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 13a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0zm6 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z"/></g></g>',
              people: '<g data-name="Layer 2"><g data-name="people"><rect width="24" height="24" opacity="0"/><path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3z"/><path d="M21 20a1 1 0 0 0 1-1 5 5 0 0 0-8.06-3.95A7 7 0 0 0 2 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"/></g></g>',
              percent: '<g data-name="Layer 2"><g data-name="percent"><rect width="24" height="24" opacity="0"/><path d="M8 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 8 11zm0-5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 6z"/><path d="M16 14a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 14zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 19z"/><path d="M19.74 4.26a.89.89 0 0 0-1.26 0L4.26 18.48a.91.91 0 0 0-.26.63.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26z"/></g></g>',
              "person-add": '<g data-name="Layer 2"><g data-name="person-add"><rect width="24" height="24" opacity="0"/><path d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"/></g></g>',
              "person-delete": '<g data-name="Layer 2"><g data-name="person-delete"><rect width="24" height="24" opacity="0"/><path d="M20.47 7.5l.73-.73a1 1 0 0 0-1.47-1.47L19 6l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73-.73.73a1 1 0 0 0 1.47 1.47L19 9l.73.73a1 1 0 0 0 1.47-1.5z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"/></g></g>',
              "person-done": '<g data-name="Layer 2"><g data-name="person-done"><rect width="24" height="24" opacity="0"/><path d="M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33 1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"/></g></g>',
              "person-remove": '<g data-name="Layer 2"><g data-name="person-remove"><rect width="24" height="24" opacity="0"/><path d="M21 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"/></g></g>',
              person: '<g data-name="Layer 2"><g data-name="person"><rect width="24" height="24" opacity="0"/><path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"/></g></g>',
              "phone-call": '<g data-name="Layer 2"><g data-name="phone-call"><rect width="24" height="24" opacity="0"/><path d="M13 8a3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5 1 1 0 0 0 0 2z"/><path d="M13 4a7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9 1 1 0 0 0 0 2z"/><path d="M21.75 15.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76 4.34 4.34 0 0 0-.19-.73z"/></g></g>',
              "phone-missed": '<g data-name="Layer 2"><g data-name="phone-missed"><rect width="24" height="24" opacity="0"/><path d="M21.94 16.64a4.34 4.34 0 0 0-.19-.73 1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10 10 0 0 1-4.88-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76z"/><path d="M15.8 8.7a1.05 1.05 0 0 0 1.47 0L18 8l.73.73a1 1 0 0 0 1.47-1.5l-.73-.73.73-.73a1 1 0 0 0-1.47-1.47L18 5l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73-.73.73a1.05 1.05 0 0 0 0 1.47z"/></g></g>',
              "phone-off": '<g data-name="Layer 2"><g data-name="phone-off"><rect width="24" height="24" opacity="0"/><path d="M9.27 12.06a10.37 10.37 0 0 1-.8-1.42C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6a15.33 15.33 0 0 0 3.27 9.46z"/><path d="M21.94 16.64a4.34 4.34 0 0 0-.19-.73 1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10.88 10.88 0 0 1-1.41-.8l-4 4A15.33 15.33 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76z"/><path d="M19.74 4.26a.89.89 0 0 0-1.26 0L4.26 18.48a.91.91 0 0 0-.26.63.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26z"/></g></g>',
              phone: '<g data-name="Layer 2"><g data-name="phone"><rect width="24" height="24" opacity="0"/><path d="M17.4 22A15.42 15.42 0 0 1 2 6.6 4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07 3.79 3.79 0 0 1 .72.18 1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65 4.34 4.34 0 0 1 .19.73 4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22z"/></g></g>',
              "pie-chart-2": '<g data-name="Layer 2"><g data-name="pie-chart-2"><rect width="24" height="24" opacity="0"/><path d="M14.5 10.33h6.67A.83.83 0 0 0 22 9.5 7.5 7.5 0 0 0 14.5 2a.83.83 0 0 0-.83.83V9.5a.83.83 0 0 0 .83.83zm.83-6.6a5.83 5.83 0 0 1 4.94 4.94h-4.94z"/><path d="M21.08 12h-8.15a.91.91 0 0 1-.91-.91V2.92A.92.92 0 0 0 11 2a10 10 0 1 0 11 11 .92.92 0 0 0-.92-1z"/></g></g>',
              "pie-chart": '<g data-name="Layer 2"><g data-name="pie-chart"><rect width="24" height="24" opacity="0"/><path d="M14.5 10.33h6.67A.83.83 0 0 0 22 9.5 7.5 7.5 0 0 0 14.5 2a.83.83 0 0 0-.83.83V9.5a.83.83 0 0 0 .83.83z"/><path d="M21.08 12h-8.15a.91.91 0 0 1-.91-.91V2.92A.92.92 0 0 0 11 2a10 10 0 1 0 11 11 .92.92 0 0 0-.92-1z"/></g></g>',
              pin: '<g data-name="Layer 2"><g data-name="pin"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="9.5" r="1.5"/><path d="M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2zm0 11a3.5 3.5 0 1 1 3.5-3.5A3.5 3.5 0 0 1 12 13z"/></g></g>',
              "play-circle": '<g data-name="Layer 2"><g data-name="play-circle"><rect width="24" height="24" opacity="0"/><polygon points="11.5 14.6 14.31 12 11.5 9.4 11.5 14.6"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4 11.18l-3.64 3.37a1.74 1.74 0 0 1-1.16.45 1.68 1.68 0 0 1-.69-.15 1.6 1.6 0 0 1-1-1.48V8.63a1.6 1.6 0 0 1 1-1.48 1.7 1.7 0 0 1 1.85.3L16 10.82a1.6 1.6 0 0 1 0 2.36z"/></g></g>',
              "plus-circle": '<g data-name="Layer 2"><g data-name="plus-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3 11h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z"/></g></g>',
              "plus-square": '<g data-name="Layer 2"><g data-name="plus-square"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-3 10h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2z"/></g></g>',
              plus: '<g data-name="Layer 2"><g data-name="plus"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/></g></g>',
              power: '<g data-name="Layer 2"><g data-name="power"><rect width="24" height="24" opacity="0"/><path d="M12 13a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1z"/><path d="M16.59 3.11a1 1 0 0 0-.92 1.78 8 8 0 1 1-7.34 0 1 1 0 1 0-.92-1.78 10 10 0 1 0 9.18 0z"/></g></g>',
              pricetags: '<g data-name="Layer 2"><g data-name="pricetags"><rect width="24" height="24" opacity="0"/><path d="M21.47 11.58l-6.42-6.41a1 1 0 0 0-.61-.29L5.09 4a1 1 0 0 0-.8.29 1 1 0 0 0-.29.8l.88 9.35a1 1 0 0 0 .29.61l6.41 6.42a1.84 1.84 0 0 0 1.29.53 1.82 1.82 0 0 0 1.28-.53l7.32-7.32a1.82 1.82 0 0 0 0-2.57zm-9.91 0a1.5 1.5 0 1 1 0-2.12 1.49 1.49 0 0 1 0 2.1z"/></g></g>',
              printer: '<g data-name="Layer 2"><g data-name="printer"><rect width="24" height="24" opacity="0"/><path d="M19.36 7H18V5a1.92 1.92 0 0 0-1.83-2H7.83A1.92 1.92 0 0 0 6 5v2H4.64A2.66 2.66 0 0 0 2 9.67v6.66A2.66 2.66 0 0 0 4.64 19h.86a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2h.86A2.66 2.66 0 0 0 22 16.33V9.67A2.66 2.66 0 0 0 19.36 7zM8 5h8v2H8zm-.5 14v-4h9v4z"/></g></g>',
              "question-mark-circle": '<g data-name="Layer 2"><g data-name="menu-arrow-circle"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5.16V14a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.5-1.5 1 1 0 0 1-2 0 3.5 3.5 0 1 1 4.5 3.34z"/></g></g>',
              "question-mark": '<g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"/><circle cx="12" cy="19" r="1"/></g></g>',
              "radio-button-off": '<g data-name="Layer 2"><g data-name="radio-button-off"><rect width="24" height="24" opacity="0"/><path d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"/></g></g>',
              "radio-button-on": '<g data-name="Layer 2"><g data-name="radio-button-on"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5z"/></g></g>',
              radio: '<g data-name="Layer 2"><g data-name="radio"><rect width="24" height="24" opacity="0"/><path d="M12 8a3 3 0 0 0-1 5.83 1 1 0 0 0 0 .17v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 0-.17A3 3 0 0 0 12 8z"/><path d="M3.5 11a6.87 6.87 0 0 1 2.64-5.23 1 1 0 1 0-1.28-1.54A8.84 8.84 0 0 0 1.5 11a8.84 8.84 0 0 0 3.36 6.77 1 1 0 1 0 1.28-1.54A6.87 6.87 0 0 1 3.5 11z"/><path d="M16.64 6.24a1 1 0 0 0-1.28 1.52A4.28 4.28 0 0 1 17 11a4.28 4.28 0 0 1-1.64 3.24A1 1 0 0 0 16 16a1 1 0 0 0 .64-.24A6.2 6.2 0 0 0 19 11a6.2 6.2 0 0 0-2.36-4.76z"/><path d="M8.76 6.36a1 1 0 0 0-1.4-.12A6.2 6.2 0 0 0 5 11a6.2 6.2 0 0 0 2.36 4.76 1 1 0 0 0 1.4-.12 1 1 0 0 0-.12-1.4A4.28 4.28 0 0 1 7 11a4.28 4.28 0 0 1 1.64-3.24 1 1 0 0 0 .12-1.4z"/><path d="M19.14 4.23a1 1 0 1 0-1.28 1.54A6.87 6.87 0 0 1 20.5 11a6.87 6.87 0 0 1-2.64 5.23 1 1 0 0 0 1.28 1.54A8.84 8.84 0 0 0 22.5 11a8.84 8.84 0 0 0-3.36-6.77z"/></g></g>',
              recording: '<g data-name="Layer 2"><g data-name="recording"><rect width="24" height="24" opacity="0"/><path d="M18 8a4 4 0 0 0-4 4 3.91 3.91 0 0 0 .56 2H9.44a3.91 3.91 0 0 0 .56-2 4 4 0 1 0-4 4h12a4 4 0 0 0 0-8z"/></g></g>',
              refresh: '<g data-name="Layer 2"><g data-name="refresh"><rect width="24" height="24" opacity="0"/><path d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z"/></g></g>',
              repeat: '<g data-name="Layer 2"><g data-name="repeat"><rect width="24" height="24" opacity="0"/><path d="M17.91 5h-12l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5z"/><path d="M18.21 14.29a1 1 0 0 0-1.42 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19h12l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42z"/></g></g>',
              "rewind-left": '<g data-name="Layer 2"><g data-name="rewind-left"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18.45 6.2a2.1 2.1 0 0 0-2.21.26l-4.74 3.92V7.79a1.76 1.76 0 0 0-1.05-1.59 2.1 2.1 0 0 0-2.21.26l-5.1 4.21a1.7 1.7 0 0 0 0 2.66l5.1 4.21a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59v-2.59l4.74 3.92a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59z"/></g></g>',
              "rewind-right": '<g data-name="Layer 2"><g data-name="rewind-right"><rect width="24" height="24" opacity="0"/><path d="M20.86 10.67l-5.1-4.21a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1.05 1.59v2.59L7.76 6.46a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l4.74-3.92v2.59a1.76 1.76 0 0 0 1.05 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l5.1-4.21a1.7 1.7 0 0 0 0-2.66z"/></g></g>',
              save: '<g data-name="Layer 2"><g data-name="save"><rect width="24" height="24" opacity="0"/><rect x="10" y="17" width="4" height="4"/><path d="M20.12 8.71l-4.83-4.83A3 3 0 0 0 13.17 3H10v6h5a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1V3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h2a3 3 0 0 0 3-3v-7.17a3 3 0 0 0-.88-2.12z"/></g></g>',
              scissors: '<g data-name="Layer 2"><g data-name="scissors"><rect width="24" height="24" opacity="0"/><path d="M20.21 5.71a1 1 0 1 0-1.42-1.42l-6.28 6.31-3.3-3.31A3 3 0 0 0 9.5 6a3 3 0 1 0-3 3 3 3 0 0 0 1.29-.3L11.1 12l-3.29 3.3A3 3 0 0 0 6.5 15a3 3 0 1 0 3 3 3 3 0 0 0-.29-1.26zM6.5 7a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M15.21 13.29a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
              search: '<g data-name="Layer 2"><g data-name="search"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/></g></g>',
              "settings-2": '<g data-name="Layer 2"><g data-name="settings-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><circle cx="12" cy="12" r="1.5"/><path d="M20.32 9.37h-1.09c-.14 0-.24-.11-.3-.26a.34.34 0 0 1 0-.37l.81-.74a1.63 1.63 0 0 0 .5-1.18 1.67 1.67 0 0 0-.5-1.19L18.4 4.26a1.67 1.67 0 0 0-2.37 0l-.77.74a.38.38 0 0 1-.41 0 .34.34 0 0 1-.22-.29V3.68A1.68 1.68 0 0 0 13 2h-1.94a1.69 1.69 0 0 0-1.69 1.68v1.09c0 .14-.11.24-.26.3a.34.34 0 0 1-.37 0L8 4.26a1.72 1.72 0 0 0-1.19-.5 1.65 1.65 0 0 0-1.18.5L4.26 5.6a1.67 1.67 0 0 0 0 2.4l.74.74a.38.38 0 0 1 0 .41.34.34 0 0 1-.29.22H3.68A1.68 1.68 0 0 0 2 11.05v1.89a1.69 1.69 0 0 0 1.68 1.69h1.09c.14 0 .24.11.3.26a.34.34 0 0 1 0 .37l-.81.74a1.72 1.72 0 0 0-.5 1.19 1.66 1.66 0 0 0 .5 1.19l1.34 1.36a1.67 1.67 0 0 0 2.37 0l.77-.74a.38.38 0 0 1 .41 0 .34.34 0 0 1 .22.29v1.09A1.68 1.68 0 0 0 11.05 22h1.89a1.69 1.69 0 0 0 1.69-1.68v-1.09c0-.14.11-.24.26-.3a.34.34 0 0 1 .37 0l.76.77a1.72 1.72 0 0 0 1.19.5 1.65 1.65 0 0 0 1.18-.5l1.34-1.34a1.67 1.67 0 0 0 0-2.37l-.73-.73a.34.34 0 0 1 0-.37.34.34 0 0 1 .29-.22h1.09A1.68 1.68 0 0 0 22 13v-1.94a1.69 1.69 0 0 0-1.68-1.69zM12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z"/></g></g>',
              settings: '<g data-name="Layer 2"><g data-name="settings"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="12" r="1.5"/><path d="M21.89 10.32L21.1 7.8a2.26 2.26 0 0 0-2.88-1.51l-.34.11a1.74 1.74 0 0 1-1.59-.26l-.11-.08a1.76 1.76 0 0 1-.69-1.43v-.28a2.37 2.37 0 0 0-.68-1.68 2.26 2.26 0 0 0-1.6-.67h-2.55a2.32 2.32 0 0 0-2.29 2.33v.24a1.94 1.94 0 0 1-.73 1.51l-.13.1a1.93 1.93 0 0 1-1.78.29 2.14 2.14 0 0 0-1.68.12 2.18 2.18 0 0 0-1.12 1.33l-.82 2.6a2.34 2.34 0 0 0 1.48 2.94h.16a1.83 1.83 0 0 1 1.12 1.22l.06.16a2.06 2.06 0 0 1-.23 1.86 2.37 2.37 0 0 0 .49 3.3l2.07 1.57a2.25 2.25 0 0 0 1.35.43A2 2 0 0 0 9 22a2.25 2.25 0 0 0 1.47-1l.23-.33a1.8 1.8 0 0 1 1.43-.77 1.75 1.75 0 0 1 1.5.78l.12.17a2.24 2.24 0 0 0 3.22.53L19 19.86a2.38 2.38 0 0 0 .5-3.23l-.26-.38A2 2 0 0 1 19 14.6a1.89 1.89 0 0 1 1.21-1.28l.2-.07a2.36 2.36 0 0 0 1.48-2.93zM12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z"/></g></g>',
              shake: '<g data-name="Layer 2"><g data-name="shake"><rect width="24" height="24" opacity="0"/><path d="M5.5 18a1 1 0 0 1-.64-.24A8.81 8.81 0 0 1 1.5 11a8.81 8.81 0 0 1 3.36-6.76 1 1 0 1 1 1.28 1.52A6.9 6.9 0 0 0 3.5 11a6.9 6.9 0 0 0 2.64 5.24 1 1 0 0 1 .13 1.4 1 1 0 0 1-.77.36z"/><path d="M12 7a4.09 4.09 0 0 1 1 .14V3a1 1 0 0 0-2 0v4.14A4.09 4.09 0 0 1 12 7z"/><path d="M12 15a4.09 4.09 0 0 1-1-.14V20a1 1 0 0 0 2 0v-5.14a4.09 4.09 0 0 1-1 .14z"/><path d="M16 16a1 1 0 0 1-.77-.36 1 1 0 0 1 .13-1.4A4.28 4.28 0 0 0 17 11a4.28 4.28 0 0 0-1.64-3.24 1 1 0 1 1 1.28-1.52A6.2 6.2 0 0 1 19 11a6.2 6.2 0 0 1-2.36 4.76A1 1 0 0 1 16 16z"/><path d="M8 16a1 1 0 0 1-.64-.24A6.2 6.2 0 0 1 5 11a6.2 6.2 0 0 1 2.36-4.76 1 1 0 1 1 1.28 1.52A4.28 4.28 0 0 0 7 11a4.28 4.28 0 0 0 1.64 3.24 1 1 0 0 1 .13 1.4A1 1 0 0 1 8 16z"/><path d="M18.5 18a1 1 0 0 1-.77-.36 1 1 0 0 1 .13-1.4A6.9 6.9 0 0 0 20.5 11a6.9 6.9 0 0 0-2.64-5.24 1 1 0 1 1 1.28-1.52A8.81 8.81 0 0 1 22.5 11a8.81 8.81 0 0 1-3.36 6.76 1 1 0 0 1-.64.24z"/><path d="M12 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-1zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0z"/></g></g>',
              share: '<g data-name="Layer 2"><g data-name="share"><rect width="24" height="24" opacity="0"/><path d="M18 15a3 3 0 0 0-2.1.86L8 12.34V12v-.33l7.9-3.53A3 3 0 1 0 15 6v.34L7.1 9.86a3 3 0 1 0 0 4.28l7.9 3.53V18a3 3 0 1 0 3-3z"/></g></g>',
              "shield-off": '<g data-name="Layer 2"><g data-name="shield-off"><rect width="24" height="24" opacity="0"/><path d="M3.73 6.56A2 2 0 0 0 3 8.09v.14a15.17 15.17 0 0 0 7.72 13.2l.3.17a2 2 0 0 0 2 0l.3-.17a15.22 15.22 0 0 0 3-2.27z"/><path d="M18.84 16A15.08 15.08 0 0 0 21 8.23v-.14a2 2 0 0 0-1-1.75L13 2.4a2 2 0 0 0-2 0L7.32 4.49z"/><path d="M4.71 3.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
              shield: '<g data-name="Layer 2"><g data-name="shield"><rect width="24" height="24" opacity="0"/><path d="M12 21.85a2 2 0 0 1-1-.25l-.3-.17A15.17 15.17 0 0 1 3 8.23v-.14a2 2 0 0 1 1-1.75l7-3.94a2 2 0 0 1 2 0l7 3.94a2 2 0 0 1 1 1.75v.14a15.17 15.17 0 0 1-7.72 13.2l-.3.17a2 2 0 0 1-.98.25z"/></g></g>',
              "shopping-bag": '<g data-name="Layer 2"><g data-name="shopping-bag"><rect width="24" height="24" opacity="0"/><path d="M20.12 6.71l-2.83-2.83A3 3 0 0 0 15.17 3H8.83a3 3 0 0 0-2.12.88L3.88 6.71A3 3 0 0 0 3 8.83V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.83a3 3 0 0 0-.88-2.12zM12 16a4 4 0 0 1-4-4 1 1 0 0 1 2 0 2 2 0 0 0 4 0 1 1 0 0 1 2 0 4 4 0 0 1-4 4zM6.41 7l1.71-1.71A1.05 1.05 0 0 1 8.83 5h6.34a1.05 1.05 0 0 1 .71.29L17.59 7z"/></g></g>',
              "shopping-cart": '<g data-name="Layer 2"><g data-name="shopping-cart"><rect width="24" height="24" opacity="0"/><path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7z"/><circle cx="7.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></g></g>',
              "shuffle-2": '<g data-name="Layer 2"><g data-name="shuffle-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18.71 14.29a1 1 0 0 0-1.42 1.42l.29.29H16a4 4 0 0 1 0-8h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 10a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 7a1 1 0 0 0-.29-.71l-2-2a1 1 0 0 0-1.42 1.42l.29.29H16a6 6 0 0 0-5 2.69A6 6 0 0 0 6 6H4a1 1 0 0 0 0 2h2a4 4 0 0 1 0 8H4a1 1 0 0 0 0 2h2a6 6 0 0 0 5-2.69A6 6 0 0 0 16 18h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 20a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 17a1 1 0 0 0-.29-.71z"/></g></g>',
              shuffle: '<g data-name="Layer 2"><g data-name="shuffle"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 9.31a1 1 0 0 0 1 1 1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4.3a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1.89L12 10.59 6.16 4.76a1 1 0 0 0-1.41 1.41L10.58 12l-6.29 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42z"/><path d="M19 13.68a1 1 0 0 0-1 1v1.91l-2.78-2.79a1 1 0 0 0-1.42 1.42L16.57 18h-1.88a1 1 0 0 0 0 2H19a1 1 0 0 0 1-1.11v-4.21a1 1 0 0 0-1-1z"/></g></g>',
              "skip-back": '<g data-name="Layer 2"><g data-name="skip-back"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M16.45 6.2a2.1 2.1 0 0 0-2.21.26l-5.1 4.21-.14.15V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-3.82l.14.15 5.1 4.21a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59z"/></g></g>',
              "skip-forward": '<g data-name="Layer 2"><g data-name="skip-forward"><rect width="24" height="24" opacity="0"/><path d="M16 6a1 1 0 0 0-1 1v3.82l-.14-.15-5.1-4.21a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l5.1-4.21.14-.15V17a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1z"/></g></g>',
              slash: '<g data-name="Layer 2"><g data-name="slash"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm8 10a7.92 7.92 0 0 1-1.69 4.9L7.1 5.69A7.92 7.92 0 0 1 12 4a8 8 0 0 1 8 8zM4 12a7.92 7.92 0 0 1 1.69-4.9L16.9 18.31A7.92 7.92 0 0 1 12 20a8 8 0 0 1-8-8z"/></g></g>',
              smartphone: '<g data-name="Layer 2"><g data-name="smartphone"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-5 16a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 18zm2.5-10h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2z"/></g></g>',
              "smiling-face": '<defs><style/></defs><g id="Layer_2" data-name="Layer 2"><g id="smiling-face"><g id="smiling-face" data-name="smiling-face"><rect width="24" height="24" opacity="0"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm5 9a5 5 0 0 1-10 0z" id="&#x1F3A8;-Icon-&#x421;olor"/></g></g></g>',
              speaker: '<g data-name="Layer 2"><g data-name="speaker"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><circle cx="12" cy="15.5" r="1.5"/><circle cx="12" cy="8" r="1"/><path d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-5 3a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm0 14a3.5 3.5 0 1 1 3.5-3.5A3.5 3.5 0 0 1 12 19z"/></g></g>',
              square: '<g data-name="Layer 2"><g data-name="square"><rect width="24" height="24" opacity="0"/><path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/></g></g>',
              star: '<g data-name="Layer 2"><g data-name="star"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18z"/></g></g>',
              "stop-circle": '<g data-name="Layer 2"><g data-name="stop-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4 12.75A1.25 1.25 0 0 1 14.75 16h-5.5A1.25 1.25 0 0 1 8 14.75v-5.5A1.25 1.25 0 0 1 9.25 8h5.5A1.25 1.25 0 0 1 16 9.25z"/><rect x="10" y="10" width="4" height="4"/></g></g>',
              sun: '<g data-name="Layer 2"><g data-name="sun"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z"/><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z"/><path d="M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z"/><path d="M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z"/><path d="M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"/><path d="M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z"/><path d="M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z"/><path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"/></g></g>',
              swap: '<g data-name="Layer 2"><g data-name="swap"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M4 9h13l-1.6 1.2a1 1 0 0 0-.2 1.4 1 1 0 0 0 .8.4 1 1 0 0 0 .6-.2l4-3a1 1 0 0 0 0-1.59l-3.86-3a1 1 0 0 0-1.23 1.58L17.08 7H4a1 1 0 0 0 0 2z"/><path d="M20 16H7l1.6-1.2a1 1 0 0 0-1.2-1.6l-4 3a1 1 0 0 0 0 1.59l3.86 3a1 1 0 0 0 .61.21 1 1 0 0 0 .79-.39 1 1 0 0 0-.17-1.4L6.92 18H20a1 1 0 0 0 0-2z"/></g></g>',
              sync: '<g data-name="Layer 2"><g data-name="sync"><rect width="24" height="24" opacity="0"/><path d="M21.66 10.37a.62.62 0 0 0 .07-.19l.75-4a1 1 0 0 0-2-.36l-.37 2a9.22 9.22 0 0 0-16.58.84 1 1 0 0 0 .55 1.3 1 1 0 0 0 1.31-.55A7.08 7.08 0 0 1 12.07 5a7.17 7.17 0 0 1 6.24 3.58l-1.65-.27a1 1 0 1 0-.32 2l4.25.71h.16a.93.93 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.08-.1a1.07 1.07 0 0 0 .14-.16.58.58 0 0 0 .05-.16z"/><path d="M19.88 14.07a1 1 0 0 0-1.31.56A7.08 7.08 0 0 1 11.93 19a7.17 7.17 0 0 1-6.24-3.58l1.65.27h.16a1 1 0 0 0 .16-2L3.41 13a.91.91 0 0 0-.33 0H3a1.15 1.15 0 0 0-.32.14 1 1 0 0 0-.18.18l-.09.1a.84.84 0 0 0-.07.19.44.44 0 0 0-.07.17l-.75 4a1 1 0 0 0 .8 1.22h.18a1 1 0 0 0 1-.82l.37-2a9.22 9.22 0 0 0 16.58-.83 1 1 0 0 0-.57-1.28z"/></g></g>',
              text: '<g data-name="Layer 2"><g data-name="text"><rect width="24" height="24" opacity="0"/><path d="M20 4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h6v13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V6h6v2a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"/></g></g>',
              "thermometer-minus": '<g data-name="Layer 2"><g data-name="thermometer-minus"><rect width="24" height="24" opacity="0"/><rect x="2" y="5" width="6" height="2" rx="1" ry="1"/><path d="M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm1-12.46V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4a1 1 0 0 0-1 1v4.54z"/></g></g>',
              "thermometer-plus": '<g data-name="Layer 2"><g data-name="thermometer-plus"><rect width="24" height="24" opacity="0"/><rect x="2" y="5" width="6" height="2" rx="1" ry="1"/><rect x="2" y="5" width="6" height="2" rx="1" ry="1" transform="rotate(-90 5 6)"/><path d="M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm1-12.46V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4a1 1 0 0 0-1 1v4.54z"/></g></g>',
              thermometer: '<g data-name="Layer 2"><g data-name="thermometer"><rect width="24" height="24" opacity="0"/><path d="M12 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm1-12.46V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 12 4a1 1 0 0 0-1 1v4.54z"/></g></g>',
              "toggle-left": '<g data-name="Layer 2"><g data-name="toggle-left"><rect x=".02" y=".02" width="23.97" height="23.97" transform="rotate(179.92 12.002 11.998)" opacity="0"/><path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zM9 15a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/><path d="M9 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></g></g>',
              "toggle-right": '<g data-name="Layer 2"><g data-name="toggle-right"><rect width="24" height="24" opacity="0"/><circle cx="15" cy="12" r="1"/><path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zm0 10a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/></g></g>',
              "trash-2": '<g data-name="Layer 2"><g data-name="trash-2"><rect width="24" height="24" opacity="0"/><path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0zm0-11.67c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM16 16a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0z"/></g></g>',
              trash: '<g data-name="Layer 2"><g data-name="trash"><rect width="24" height="24" opacity="0"/><path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4z"/></g></g>',
              "trending-down": '<g data-name="Layer 2"><g data-name="trending-down"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M21 12a1 1 0 0 0-2 0v2.3l-4.24-5a1 1 0 0 0-1.27-.21L9.22 11.7 4.77 6.36a1 1 0 1 0-1.54 1.28l5 6a1 1 0 0 0 1.28.22l4.28-2.57 4 4.71H15a1 1 0 0 0 0 2h5a1.1 1.1 0 0 0 .36-.07l.14-.08a1.19 1.19 0 0 0 .15-.09.75.75 0 0 0 .14-.17 1.1 1.1 0 0 0 .09-.14.64.64 0 0 0 .05-.17A.78.78 0 0 0 21 17z"/></g></g>',
              "trending-up": '<g data-name="Layer 2"><g data-name="trending-up"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M21 7a.78.78 0 0 0 0-.21.64.64 0 0 0-.05-.17 1.1 1.1 0 0 0-.09-.14.75.75 0 0 0-.14-.17l-.12-.07a.69.69 0 0 0-.19-.1h-.2A.7.7 0 0 0 20 6h-5a1 1 0 0 0 0 2h2.83l-4 4.71-4.32-2.57a1 1 0 0 0-1.28.22l-5 6a1 1 0 0 0 .13 1.41A1 1 0 0 0 4 18a1 1 0 0 0 .77-.36l4.45-5.34 4.27 2.56a1 1 0 0 0 1.27-.21L19 9.7V12a1 1 0 0 0 2 0V7z"/></g></g>',
              tv: '<g data-name="Layer 2"><g data-name="tv"><rect width="24" height="24" opacity="0"/><path d="M18 6h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42L12 5.59l-3.29-3.3a1 1 0 1 0-1.42 1.42L9.59 6H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/></g></g>',
              twitter: '<g data-name="Layer 2"><g data-name="twitter"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"/></g></g>',
              umbrella: '<g data-name="Layer 2"><g data-name="umbrella"><rect width="24" height="24" opacity="0"/><path d="M12 2A10 10 0 0 0 2 12a1 1 0 0 0 1 1h8v6a3 3 0 0 0 6 0 1 1 0 0 0-2 0 1 1 0 0 1-2 0v-6h8a1 1 0 0 0 1-1A10 10 0 0 0 12 2z"/></g></g>',
              undo: '<g data-name="Layer 2"><g data-name="undo"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M20.22 21a1 1 0 0 1-1-.76 8.91 8.91 0 0 0-7.8-6.69v1.12a1.78 1.78 0 0 1-1.09 1.64A2 2 0 0 1 8.18 16l-5.06-4.41a1.76 1.76 0 0 1 0-2.68l5.06-4.42a2 2 0 0 1 2.18-.3 1.78 1.78 0 0 1 1.09 1.64V7A10.89 10.89 0 0 1 21.5 17.75a10.29 10.29 0 0 1-.31 2.49 1 1 0 0 1-1 .76z"/></g></g>',
              unlock: '<g data-name="Layer 2"><g data-name="unlock"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="15" r="1"/><path d="M17 8h-7V6a2 2 0 0 1 4 0 1 1 0 0 0 2 0 4 4 0 0 0-8 0v2H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-5 10a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/></g></g>',
              upload: '<g data-name="Layer 2"><g data-name="upload"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect x="4" y="4" width="16" height="2" rx="1" ry="1" transform="rotate(180 12 5)"/><rect x="17" y="5" width="4" height="2" rx="1" ry="1" transform="rotate(90 19 6)"/><rect x="3" y="5" width="4" height="2" rx="1" ry="1" transform="rotate(90 5 6)"/><path d="M8 14a1 1 0 0 1-.8-.4 1 1 0 0 1 .2-1.4l4-3a1 1 0 0 1 1.18 0l4 2.82a1 1 0 0 1 .24 1.39 1 1 0 0 1-1.4.24L12 11.24 8.6 13.8a1 1 0 0 1-.6.2z"/><path d="M12 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"/></g></g>',
              "video-off": '<g data-name="Layer 2"><g data-name="video-off"><rect width="24" height="24" opacity="0"/><path d="M14.22 17.05L4.88 7.71 3.12 6 3 5.8A3 3 0 0 0 2 8v8a3 3 0 0 0 3 3h9a2.94 2.94 0 0 0 1.66-.51z"/><path d="M21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H7.83l1.29 1.29 6.59 6.59 2 2 2 2a1.73 1.73 0 0 0 .6.11 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48V8.63a1.6 1.6 0 0 0-1-1.48z"/><path d="M17 15.59l-2-2L8.41 7l-2-2-1.7-1.71a1 1 0 0 0-1.42 1.42l.54.53L5.59 7l9.34 9.34 1.46 1.46 2.9 2.91a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
              video: '<g data-name="Layer 2"><g data-name="video"><rect width="24" height="24" opacity="0"/><path d="M21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-1.45l2.16 2a1.74 1.74 0 0 0 1.16.45 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48V8.63A1.6 1.6 0 0 0 21 7.15z"/></g></g>',
              "volume-down": '<g data-name="Layer 2"><g data-name="volume-down"><rect width="24" height="24" opacity="0"/><path d="M20.78 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 20 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z"/><path d="M16.47 3.12a1 1 0 0 0-1 0L9 7.57H4a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 16 21a1 1 0 0 0 1-1V4a1 1 0 0 0-.53-.88z"/></g></g>',
              "volume-mute": '<g data-name="Layer 2"><g data-name="volume-mute"><rect width="24" height="24" opacity="0"/><path d="M17 21a1.06 1.06 0 0 1-.57-.17L10 16.43H5a1 1 0 0 1-1-1V8.57a1 1 0 0 1 1-1h5l6.41-4.4A1 1 0 0 1 18 4v16a1 1 0 0 1-1 1z"/></g></g>',
              "volume-off": '<g data-name="Layer 2"><g data-name="volume-off"><rect width="24" height="24" opacity="0"/><path d="M16.91 14.08l1.44 1.44a6 6 0 0 0-.07-7.15 1 1 0 1 0-1.56 1.26 4 4 0 0 1 .19 4.45z"/><path d="M21 12a6.51 6.51 0 0 1-1.78 4.39l1.42 1.42A8.53 8.53 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77 1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12z"/><path d="M15 12.17V4a1 1 0 0 0-1.57-.83L9 6.2z"/><path d="M4.74 7.57H2a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 14 21a1 1 0 0 0 1-1v-2.17z"/><path d="M4.71 3.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
              "volume-up": '<g data-name="Layer 2"><g data-name="volume-up"><rect width="24" height="24" opacity="0"/><path d="M18.28 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z"/><path d="M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23 1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77z"/><path d="M14.47 3.12a1 1 0 0 0-1 0L7 7.57H2a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 14 21a1 1 0 0 0 1-1V4a1 1 0 0 0-.53-.88z"/></g></g>',
              "wifi-off": '<g data-name="Layer 2"><g data-name="wifi-off"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="19" r="1"/><path d="M12.44 11l-1.9-1.89-2.46-2.44-1.55-1.55-1.82-1.83a1 1 0 0 0-1.42 1.42l1.38 1.37 1.46 1.46 2.23 2.24 1.55 1.54 2.74 2.74 2.79 2.8 3.85 3.85a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M21.72 7.93A13.93 13.93 0 0 0 12 4a14.1 14.1 0 0 0-4.44.73l1.62 1.62a11.89 11.89 0 0 1 11.16 3 1 1 0 0 0 .69.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.03-1.39z"/><path d="M3.82 6.65a14.32 14.32 0 0 0-1.54 1.28 1 1 0 0 0 1.38 1.44 13.09 13.09 0 0 1 1.6-1.29z"/><path d="M17 13.14a1 1 0 0 0 .71.3 1 1 0 0 0 .72-1.69A9 9 0 0 0 12 9h-.16l2.35 2.35A7 7 0 0 1 17 13.14z"/><path d="M7.43 10.26a8.8 8.8 0 0 0-1.9 1.49A1 1 0 0 0 7 13.14a7.3 7.3 0 0 1 2-1.41z"/><path d="M8.53 15.4a1 1 0 1 0 1.39 1.44 3.06 3.06 0 0 1 3.84-.25l-2.52-2.52a5 5 0 0 0-2.71 1.33z"/></g></g>',
              wifi: '<g data-name="Layer 2"><g data-name="wifi"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="19" r="1"/><path d="M12 14a5 5 0 0 0-3.47 1.4 1 1 0 1 0 1.39 1.44 3.08 3.08 0 0 1 4.16 0 1 1 0 1 0 1.39-1.44A5 5 0 0 0 12 14z"/><path d="M12 9a9 9 0 0 0-6.47 2.75A1 1 0 0 0 7 13.14a7 7 0 0 1 10.08 0 1 1 0 0 0 .71.3 1 1 0 0 0 .72-1.69A9 9 0 0 0 12 9z"/><path d="M21.72 7.93a14 14 0 0 0-19.44 0 1 1 0 0 0 1.38 1.44 12 12 0 0 1 16.68 0 1 1 0 0 0 .69.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.03-1.41z"/></g></g>',
              "activity-outline": '<g data-name="Layer 2"><g data-name="activity"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M14.33 20h-.21a2 2 0 0 1-1.76-1.58L9.68 6l-2.76 6.4A1 1 0 0 1 6 13H3a1 1 0 0 1 0-2h2.34l2.51-5.79a2 2 0 0 1 3.79.38L14.32 18l2.76-6.38A1 1 0 0 1 18 11h3a1 1 0 0 1 0 2h-2.34l-2.51 5.79A2 2 0 0 1 14.33 20z"/></g></g>',
              "alert-circle-outline": '<g data-name="Layer 2"><g data-name="alert-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><circle cx="12" cy="16" r="1"/><path d="M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z"/></g></g>',
              "alert-triangle-outline": '<g data-name="Layer 2"><g data-name="alert-triangle"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M22.56 16.3L14.89 3.58a3.43 3.43 0 0 0-5.78 0L1.44 16.3a3 3 0 0 0-.05 3A3.37 3.37 0 0 0 4.33 21h15.34a3.37 3.37 0 0 0 2.94-1.66 3 3 0 0 0-.05-3.04zm-1.7 2.05a1.31 1.31 0 0 1-1.19.65H4.33a1.31 1.31 0 0 1-1.19-.65 1 1 0 0 1 0-1l7.68-12.73a1.48 1.48 0 0 1 2.36 0l7.67 12.72a1 1 0 0 1 .01 1.01z"/><circle cx="12" cy="16" r="1"/><path d="M12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/></g></g>',
              "archive-outline": '<g data-name="Layer 2"><g data-name="archive"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-2 5.22V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.22A3 3 0 0 0 21 6zM6 5h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2zm12 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h12z"/><rect x="9" y="12" width="6" height="2" rx=".87" ry=".87"/></g></g>',
              "arrow-back-outline": '<g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/></g></g>',
              "arrow-circle-down-outline": '<g data-name="Layer 2"><g data-name="arrow-circle-down"><rect width="24" height="24" opacity="0"/><path d="M14.31 12.41L13 13.66V8a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 .54.54 0 0 0 .16-.1.49.49 0 0 0 .15-.1l3-2.86a1 1 0 0 0-1.38-1.45z"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></g></g>',
              "arrow-circle-left-outline": '<g data-name="Layer 2"><g data-name="arrow-circle-left"><rect width="24" height="24" opacity="0"/><path d="M16 11h-5.66l1.25-1.31a1 1 0 0 0-1.45-1.38l-2.86 3a1 1 0 0 0-.09.13.72.72 0 0 0-.11.19.88.88 0 0 0-.06.28L7 12a1 1 0 0 0 .08.38 1 1 0 0 0 .21.32l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L10.41 13H16a1 1 0 0 0 0-2z"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></g></g>',
              "arrow-circle-right-outline": '<g data-name="Layer 2"><g data-name="arrow-circle-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M17 12v-.09a.88.88 0 0 0-.06-.28.72.72 0 0 0-.11-.19 1 1 0 0 0-.09-.13l-2.86-3a1 1 0 0 0-1.45 1.38L13.66 11H8a1 1 0 0 0 0 2h5.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .21-.32A1 1 0 0 0 17 12z"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></g></g>',
              "arrow-circle-up-outline": '<g data-name="Layer 2"><g data-name="arrow-circle-up"><rect width="24" height="24" opacity="0"/><path d="M12.71 7.29a1 1 0 0 0-.32-.21A1 1 0 0 0 12 7h-.1a.82.82 0 0 0-.27.06.72.72 0 0 0-.19.11 1 1 0 0 0-.13.09l-3 2.86a1 1 0 0 0 1.38 1.45L11 10.34V16a1 1 0 0 0 2 0v-5.59l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></g></g>',
              "arrow-down-outline": '<g data-name="Layer 2"><g data-name="arrow-down"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17zm-3.91-7L12 14.82 16 10z"/></g></g>',
              "arrow-downward-outline": '<g data-name="Layer 2"><g data-name="arrow-downward"><rect width="24" height="24" opacity="0"/><path d="M18.77 13.36a1 1 0 0 0-1.41-.13L13 16.86V5a1 1 0 0 0-2 0v11.86l-4.36-3.63a1 1 0 1 0-1.28 1.54l6 5 .15.09.13.07a1 1 0 0 0 .72 0l.13-.07.15-.09 6-5a1 1 0 0 0 .13-1.41z"/></g></g>',
              "arrow-forward-outline": '<g data-name="Layer 2"><g data-name="arrow-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"/></g></g>',
              "arrow-ios-back-outline": '<g data-name="Layer 2"><g data-name="arrow-ios-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/></g></g>',
              "arrow-ios-downward-outline": '<g data-name="Layer 2"><g data-name="arrow-ios-downward"><rect width="24" height="24" opacity="0"/><path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z"/></g></g>',
              "arrow-ios-forward-outline": '<g data-name="Layer 2"><g data-name="arrow-ios-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"/></g></g>',
              "arrow-ios-upward-outline": '<g data-name="Layer 2"><g data-name="arrow-ios-upward"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15 1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15z"/></g></g>',
              "arrow-left-outline": '<g data-name="Layer 2"><g data-name="arrow-left"><rect width="24" height="24" opacity="0"/><path d="M13.54 18a2.06 2.06 0 0 1-1.3-.46l-5.1-4.21a1.7 1.7 0 0 1 0-2.66l5.1-4.21a2.1 2.1 0 0 1 2.21-.26 1.76 1.76 0 0 1 1.05 1.59v8.42a1.76 1.76 0 0 1-1.05 1.59 2.23 2.23 0 0 1-.91.2zm-4.86-6l4.82 4V8.09z"/></g></g>',
              "arrow-right-outline": '<g data-name="Layer 2"><g data-name="arrow-right"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46zm0-10v7.9l4.86-3.9z"/></g></g>',
              "arrow-up-outline": '<g data-name="Layer 2"><g data-name="arrow-up"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M16.21 16H7.79a1.76 1.76 0 0 1-1.59-1 2.1 2.1 0 0 1 .26-2.21l4.21-5.1a1.76 1.76 0 0 1 2.66 0l4.21 5.1A2.1 2.1 0 0 1 17.8 15a1.76 1.76 0 0 1-1.59 1zM8 14h7.9L12 9.18z"/></g></g>',
              "arrow-upward-outline": '<g data-name="Layer 2"><g data-name="arrow-upward"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M5.23 10.64a1 1 0 0 0 1.41.13L11 7.14V19a1 1 0 0 0 2 0V7.14l4.36 3.63a1 1 0 1 0 1.28-1.54l-6-5-.15-.09-.13-.07a1 1 0 0 0-.72 0l-.13.07-.15.09-6 5a1 1 0 0 0-.13 1.41z"/></g></g>',
              "arrowhead-down-outline": '<g data-name="Layer 2"><g data-name="arrowhead-down"><rect width="24" height="24" opacity="0"/><path d="M17.37 12.39L12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z"/><path d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z"/></g></g>',
              "arrowhead-left-outline": '<g data-name="Layer 2"><g data-name="arrowhead-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M11.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L7.29 12l4.48-5.37a1 1 0 0 0-.13-1.4z"/><path d="M14.29 12l4.48-5.37a1 1 0 0 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z"/></g></g>',
              "arrowhead-right-outline": '<g data-name="Layer 2"><g data-name="arrowhead-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"/><path d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27z"/></g></g>',
              "arrowhead-up-outline": '<g data-name="Layer 2"><g data-name="arrowhead-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M6.63 11.61L12 7.29l5.37 4.48A1 1 0 0 0 18 12a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41l-6-5a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.14z"/><path d="M12.64 12.23a1 1 0 0 0-1.27 0l-6 4.83a1 1 0 0 0-.15 1.41 1 1 0 0 0 1.41.15L12 14.29l5.37 4.48A1 1 0 0 0 18 19a1 1 0 0 0 .77-.36 1 1 0 0 0-.13-1.41z"/></g></g>',
              "at-outline": '<g data-name="Layer 2"><g data-name="at"><rect width="24" height="24" opacity="0"/><path d="M13 2a10 10 0 0 0-5 19.1 10.15 10.15 0 0 0 4 .9 10 10 0 0 0 6.08-2.06 1 1 0 0 0 .19-1.4 1 1 0 0 0-1.41-.19A8 8 0 1 1 12.77 4 8.17 8.17 0 0 1 20 12.22v.68a1.71 1.71 0 0 1-1.78 1.7 1.82 1.82 0 0 1-1.62-1.88V8.4a1 1 0 0 0-1-1 1 1 0 0 0-1 .87 5 5 0 0 0-3.44-1.36A5.09 5.09 0 1 0 15.31 15a3.6 3.6 0 0 0 5.55.61A3.67 3.67 0 0 0 22 12.9v-.68A10.2 10.2 0 0 0 13 2zm-1.82 13.09A3.09 3.09 0 1 1 14.27 12a3.1 3.1 0 0 1-3.09 3.09z"/></g></g>',
              "attach-2-outline": '<g data-name="Layer 2"><g data-name="attach-2"><rect width="24" height="24" opacity="0"/><path d="M12 22a5.86 5.86 0 0 1-6-5.7V6.13A4.24 4.24 0 0 1 10.33 2a4.24 4.24 0 0 1 4.34 4.13v10.18a2.67 2.67 0 0 1-5.33 0V6.92a1 1 0 0 1 1-1 1 1 0 0 1 1 1v9.39a.67.67 0 0 0 1.33 0V6.13A2.25 2.25 0 0 0 10.33 4 2.25 2.25 0 0 0 8 6.13V16.3a3.86 3.86 0 0 0 4 3.7 3.86 3.86 0 0 0 4-3.7V6.13a1 1 0 1 1 2 0V16.3a5.86 5.86 0 0 1-6 5.7z"/></g></g>',
              "attach-outline": '<g data-name="Layer 2"><g data-name="attach"><rect width="24" height="24" opacity="0"/><path d="M9.29 21a6.23 6.23 0 0 1-4.43-1.88 6 6 0 0 1-.22-8.49L12 3.2A4.11 4.11 0 0 1 15 2a4.48 4.48 0 0 1 3.19 1.35 4.36 4.36 0 0 1 .15 6.13l-7.4 7.43a2.54 2.54 0 0 1-1.81.75 2.72 2.72 0 0 1-1.95-.82 2.68 2.68 0 0 1-.08-3.77l6.83-6.86a1 1 0 0 1 1.37 1.41l-6.83 6.86a.68.68 0 0 0 .08.95.78.78 0 0 0 .53.23.56.56 0 0 0 .4-.16l7.39-7.43a2.36 2.36 0 0 0-.15-3.31 2.38 2.38 0 0 0-3.27-.15L6.06 12a4 4 0 0 0 .22 5.67 4.22 4.22 0 0 0 3 1.29 3.67 3.67 0 0 0 2.61-1.06l7.39-7.43a1 1 0 1 1 1.42 1.41l-7.39 7.43A5.65 5.65 0 0 1 9.29 21z"/></g></g>',
              "award-outline": '<g data-name="Layer 2"><g data-name="award"><rect width="24" height="24" opacity="0"/><path d="M19 20.75l-2.31-9A5.94 5.94 0 0 0 18 8 6 6 0 0 0 6 8a5.94 5.94 0 0 0 1.34 3.77L5 20.75a1 1 0 0 0 1.48 1.11l5.33-3.13 5.68 3.14A.91.91 0 0 0 18 22a1 1 0 0 0 1-1.25zM12 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm.31 12.71a1 1 0 0 0-1 0l-3.75 2.2L9 13.21a5.94 5.94 0 0 0 5.92 0L16.45 19z"/></g></g>',
              "backspace-outline": '<g data-name="Layer 2"><g data-name="backspace"><rect width="24" height="24" opacity="0"/><path d="M20.14 4h-9.77a3 3 0 0 0-2 .78l-.1.11-6 7.48a1 1 0 0 0 .11 1.37l6 5.48a3 3 0 0 0 2 .78h9.77A1.84 1.84 0 0 0 22 18.18V5.82A1.84 1.84 0 0 0 20.14 4zM20 18h-9.63a1 1 0 0 1-.67-.26l-5.33-4.85 5.38-6.67a1 1 0 0 1 .62-.22H20z"/><path d="M11.29 14.71a1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L15.41 12l1.3-1.29a1 1 0 0 0-1.42-1.42L14 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 0 1.42z"/></g></g>',
              "bar-chart-2-outline": '<g data-name="Layer 2"><g data-name="bar-chart-2"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M12 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/><path d="M19 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"/><path d="M5 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z"/></g></g>',
              "bar-chart-outline": '<g data-name="Layer 2"><g data-name="bar-chart"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M12 4a1 1 0 0 0-1 1v15a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"/><path d="M19 12a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1z"/><path d="M5 8a1 1 0 0 0-1 1v11a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/></g></g>',
              "battery-outline": '<g data-name="Layer 2"><g data-name="battery"><rect width="24" height="24" opacity="0"/><path d="M15.83 6H4.17A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h11.66A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6zm.17 9.57a.52.52 0 0 1-.17.43H4.18a.5.5 0 0 1-.18-.43V8.43A.53.53 0 0 1 4.17 8h11.65a.5.5 0 0 1 .18.43z"/><path d="M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z"/></g></g>',
              "behance-outline": '<g data-name="Layer 2"><g data-name="behance"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M10.52 11.78a1.4 1.4 0 0 0 1.12-1.43c0-1-.77-1.6-1.94-1.6H7v6.5h2.7c1.3-.05 2.3-.72 2.3-1.88a1.52 1.52 0 0 0-1.48-1.59zM8.26 9.67h1.15c.6 0 .95.32.95.85s-.38.89-1.25.89h-.85zm1 4.57h-1V12.3h1.23c.75 0 1.17.38 1.17 1s-.42.94-1.44.94z"/><path d="M14.75 10.3a2.11 2.11 0 0 0-2.28 2.25V13a2.15 2.15 0 0 0 2.34 2.31A2 2 0 0 0 17 13.75h-1.21a.9.9 0 0 1-1 .63 1.07 1.07 0 0 1-1.09-1.19v-.14H17v-.47a2.12 2.12 0 0 0-2.25-2.28zm1 2h-2.02a1 1 0 0 1 1-1.09 1 1 0 0 1 1 1.09z"/><rect x="13.25" y="9.2" width="3" height=".5"/></g></g>',
              "bell-off-outline": '<g data-name="Layer 2"><g data-name="bell-off"><rect width="24" height="24" opacity="0"/><path d="M8.9 5.17A4.67 4.67 0 0 1 12.64 4a4.86 4.86 0 0 1 4.08 4.9v4.5a1.92 1.92 0 0 0 .1.59l3.6 3.6a1.58 1.58 0 0 0 .45-.6 1.62 1.62 0 0 0-.35-1.78l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.71 6.71 0 0 0-5.32 1.61 6.88 6.88 0 0 0-.58.54l1.47 1.43a4.79 4.79 0 0 1 .43-.47z"/><path d="M14 16.86l-.83-.86H5.51l1.18-1.18a2 2 0 0 0 .59-1.42v-3.29l-2-2a5.68 5.68 0 0 0 0 .59v4.7l-1.8 1.81A1.63 1.63 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.88 3.88 0 0 0 4-3.22l-.83-.78zM12 20a1.88 1.88 0 0 1-2-1.66V18h4v.34A1.88 1.88 0 0 1 12 20z"/><path d="M20.71 19.29L19.41 18l-2-2-9.52-9.53L6.42 5 4.71 3.29a1 1 0 0 0-1.42 1.42L5.53 7l1.75 1.7 7.31 7.3.07.07L16 17.41l.59.59 2.7 2.71a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
              "bell-outline": '<g data-name="Layer 2"><g data-name="bell"><rect width="24" height="24" opacity="0"/><path d="M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4zM5.51 16l1.18-1.18a2 2 0 0 0 .59-1.42V8.73A4.73 4.73 0 0 1 8.9 5.17 4.67 4.67 0 0 1 12.64 4a4.86 4.86 0 0 1 4.08 4.9v4.5a2 2 0 0 0 .58 1.42L18.49 16z"/></g></g>',
              "bluetooth-outline": '<g data-name="Layer 2"><g data-name="bluetooth"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.63 12l4-3.79a1.14 1.14 0 0 0-.13-1.77l-4.67-3.23a1.17 1.17 0 0 0-1.21-.08 1.15 1.15 0 0 0-.62 1v6.2l-3.19-4a1 1 0 0 0-1.56 1.3L9.72 12l-3.5 4.43a1 1 0 0 0 .16 1.4A1 1 0 0 0 7 18a1 1 0 0 0 .78-.38L11 13.56v6.29A1.16 1.16 0 0 0 12.16 21a1.16 1.16 0 0 0 .67-.21l4.64-3.18a1.17 1.17 0 0 0 .49-.85 1.15 1.15 0 0 0-.34-.91zM13 5.76l2.5 1.73L13 9.85zm0 12.49v-4.07l2.47 2.38z"/></g></g>',
              "book-open-outline": '<g data-name="Layer 2"><g data-name="book-open"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20.62 4.22a1 1 0 0 0-.84-.2L12 5.77 4.22 4A1 1 0 0 0 3 5v12.2a1 1 0 0 0 .78 1l8 1.8h.44l8-1.8a1 1 0 0 0 .78-1V5a1 1 0 0 0-.38-.78zM5 6.25l6 1.35v10.15L5 16.4zM19 16.4l-6 1.35V7.6l6-1.35z"/></g></g>',
              "book-outline": '<g data-name="Layer 2"><g data-name="book"><rect width="24" height="24" opacity="0"/><path d="M19 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 5h11v10H7a3 3 0 0 0-1 .18V6a1 1 0 0 1 1-1zm0 14a1 1 0 0 1 0-2h11v2z"/></g></g>',
              "bookmark-outline": '<g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g>',
              "briefcase-outline": '<g data-name="Layer 2"><g data-name="briefcase"><rect width="24" height="24" opacity="0"/><path d="M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-4 2v10H9V9zm-5-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zM4 18v-8a1 1 0 0 1 1-1h2v10H5a1 1 0 0 1-1-1zm16 0a1 1 0 0 1-1 1h-2V9h2a1 1 0 0 1 1 1z"/></g></g>',
              "browser-outline": '<g data-name="Layer 2"><g data-name="browser"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14zM5 9V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3z"/><circle cx="8" cy="7.03" r="1"/><circle cx="12" cy="7.03" r="1"/></g></g>',
              "brush-outline": '<g data-name="Layer 2"><g data-name="brush"><rect width="24" height="24" opacity="0"/><path d="M20 6.83a2.76 2.76 0 0 0-.82-2 2.89 2.89 0 0 0-4 0l-6.6 6.6h-.22a4.42 4.42 0 0 0-4.3 4.31L4 19a1 1 0 0 0 .29.73A1.05 1.05 0 0 0 5 20l3.26-.06a4.42 4.42 0 0 0 4.31-4.3v-.23l6.61-6.6A2.74 2.74 0 0 0 20 6.83zM8.25 17.94L6 18v-2.23a2.4 2.4 0 0 1 2.4-2.36 2.15 2.15 0 0 1 2.15 2.19 2.4 2.4 0 0 1-2.3 2.34zm9.52-10.55l-5.87 5.87a4.55 4.55 0 0 0-.52-.64 3.94 3.94 0 0 0-.64-.52l5.87-5.86a.84.84 0 0 1 1.16 0 .81.81 0 0 1 .23.59.79.79 0 0 1-.23.56z"/></g></g>',
              "bulb-outline": '<g data-name="Layer 2"><g data-name="bulb"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 7a5 5 0 0 0-3 9v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a5 5 0 0 0-3-9zm1.5 7.59a1 1 0 0 0-.5.87V20h-2v-4.54a1 1 0 0 0-.5-.87A3 3 0 0 1 9 12a3 3 0 0 1 6 0 3 3 0 0 1-1.5 2.59z"/><path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z"/><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M5 11H3a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M7.66 6.42L6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.06-1.41z"/><path d="M19.19 5.05a1 1 0 0 0-1.41 0l-1.44 1.37a1 1 0 0 0 0 1.41 1 1 0 0 0 .72.31 1 1 0 0 0 .69-.28l1.44-1.39a1 1 0 0 0 0-1.42z"/></g></g>',
              "calendar-outline": '<g data-name="Layer 2"><g data-name="calendar"><rect width="24" height="24" opacity="0"/><path d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM6 6h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1v4H5V7a1 1 0 0 1 1-1zm12 14H6a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1z"/><circle cx="8" cy="16" r="1"/><path d="M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/></g></g>',
              "camera-outline": '<g data-name="Layer 2"><g data-name="camera"><rect width="24" height="24" opacity="0"/><path d="M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-9-1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zM20 18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"/><path d="M12 10.5a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></g></g>',
              "car-outline": '<g data-name="Layer 2"><g data-name="car"><rect width="24" height="24" opacity="0"/><path d="M21.6 11.22L17 7.52V5a1.91 1.91 0 0 0-1.81-2H3.79A1.91 1.91 0 0 0 2 5v10a2 2 0 0 0 1.2 1.88 3 3 0 1 0 5.6.12h6.36a3 3 0 1 0 5.64 0h.2a1 1 0 0 0 1-1v-4a1 1 0 0 0-.4-.78zM20 12.48V15h-3v-4.92zM7 18a1 1 0 1 1-1-1 1 1 0 0 1 1 1zm5-3H4V5h11v10zm7 3a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"/></g></g>',
              "cast-outline": '<g data-name="Layer 2"><g data-name="cast"><polyline points="24 24 0 24 0 0" opacity="0"/><path d="M18.4 3H5.6A2.7 2.7 0 0 0 3 5.78V7a1 1 0 0 0 2 0V5.78A.72.72 0 0 1 5.6 5h12.8a.72.72 0 0 1 .6.78v12.44a.72.72 0 0 1-.6.78H17a1 1 0 0 0 0 2h1.4a2.7 2.7 0 0 0 2.6-2.78V5.78A2.7 2.7 0 0 0 18.4 3z"/><path d="M3.86 14A1 1 0 0 0 3 15.17a1 1 0 0 0 1.14.83 2.49 2.49 0 0 1 2.12.72 2.52 2.52 0 0 1 .51 2.84 1 1 0 0 0 .48 1.33 1.06 1.06 0 0 0 .42.09 1 1 0 0 0 .91-.58A4.52 4.52 0 0 0 3.86 14z"/><path d="M3.86 10.08a1 1 0 0 0 .28 2 6 6 0 0 1 5.09 1.71 6 6 0 0 1 1.53 5.95 1 1 0 0 0 .68 1.26.9.9 0 0 0 .28 0 1 1 0 0 0 1-.72 8 8 0 0 0-8.82-10.2z"/><circle cx="4" cy="19" r="1"/></g></g>',
              "charging-outline": '<g data-name="Layer 2"><g data-name="charging"><rect width="24" height="24" opacity="0"/><path d="M21 9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1z"/><path d="M15.83 6h-3.1l-1.14 2h4.23a.5.5 0 0 1 .18.43v7.14a.52.52 0 0 1-.17.43H13l-1.15 2h4A2.31 2.31 0 0 0 18 15.57V8.43A2.31 2.31 0 0 0 15.83 6z"/><path d="M4 15.57V8.43A.53.53 0 0 1 4.17 8H7l1.13-2h-4A2.31 2.31 0 0 0 2 8.43v7.14A2.31 2.31 0 0 0 4.17 18h3.1l1.14-2H4.18a.5.5 0 0 1-.18-.43z"/><path d="M9 20a1 1 0 0 1-.87-1.5l3.15-5.5H7a1 1 0 0 1-.86-.5 1 1 0 0 1 0-1l4-7a1 1 0 0 1 1.74 1L8.72 11H13a1 1 0 0 1 .86.5 1 1 0 0 1 0 1l-4 7A1 1 0 0 1 9 20z"/></g></g>',
              "checkmark-circle-2-outline": '<g data-name="Layer 2"><g data-name="checkmark-circle-2"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M14.7 8.39l-3.78 5-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38 1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22z"/></g></g>',
              "checkmark-circle-outline": '<g data-name="Layer 2"><g data-name="checkmark-circle"><rect width="24" height="24" opacity="0"/><path d="M9.71 11.29a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .72-.34l7-8a1 1 0 0 0-1.5-1.32L12 13.54z"/><path d="M21 11a1 1 0 0 0-1 1 8 8 0 0 1-8 8A8 8 0 0 1 6.33 6.36 7.93 7.93 0 0 1 12 4a8.79 8.79 0 0 1 1.9.22 1 1 0 1 0 .47-1.94A10.54 10.54 0 0 0 12 2a10 10 0 0 0-7 17.09A9.93 9.93 0 0 0 12 22a10 10 0 0 0 10-10 1 1 0 0 0-1-1z"/></g></g>',
              "checkmark-outline": '<g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g>',
              "checkmark-square-2-outline": '<g data-name="Layer 2"><g data-name="checkmark-square-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/><path d="M14.7 8.39l-3.78 5-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38 1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22z"/></g></g>',
              "checkmark-square-outline": '<g data-name="Layer 2"><g data-name="checkmark-square"><rect width="24" height="24" opacity="0"/><path d="M20 11.83a1 1 0 0 0-1 1v5.57a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6h9.57a1 1 0 1 0 0-2H5.6A2.61 2.61 0 0 0 3 5.6v12.8A2.61 2.61 0 0 0 5.6 21h12.8a2.61 2.61 0 0 0 2.6-2.6v-5.57a1 1 0 0 0-1-1z"/><path d="M10.72 11a1 1 0 0 0-1.44 1.38l2.22 2.33a1 1 0 0 0 .72.31 1 1 0 0 0 .72-.3l6.78-7a1 1 0 1 0-1.44-1.4l-6.05 6.26z"/></g></g>',
              "chevron-down-outline": '<g data-name="Layer 2"><g data-name="chevron-down"><rect width="24" height="24" opacity="0"/><path d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z"/></g></g>',
              "chevron-left-outline": '<g data-name="Layer 2"><g data-name="chevron-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z"/></g></g>',
              "chevron-right-outline": '<g data-name="Layer 2"><g data-name="chevron-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z"/></g></g>',
              "chevron-up-outline": '<g data-name="Layer 2"><g data-name="chevron-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M16 14.5a1 1 0 0 1-.71-.29L12 10.9l-3.3 3.18a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.42 1 1 0 0 1-.69.28z"/></g></g>',
              "clipboard-outline": '<g data-name="Layer 2"><g data-name="clipboard"><rect width="24" height="24" opacity="0"/><path d="M18 5V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM8 4h8v4H8V4zm11 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a1 1 0 0 1 1 1z"/></g></g>',
              "clock-outline": '<g data-name="Layer 2"><g data-name="clock"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2z"/></g></g>',
              "close-circle-outline": '<g data-name="Layer 2"><g data-name="close-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M14.71 9.29a1 1 0 0 0-1.42 0L12 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12l1.3-1.29a1 1 0 0 0 0-1.42z"/></g></g>',
              "close-outline": '<g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
              "close-square-outline": '<g data-name="Layer 2"><g data-name="close-square"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/><path d="M14.71 9.29a1 1 0 0 0-1.42 0L12 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12l1.3-1.29a1 1 0 0 0 0-1.42z"/></g></g>',
              "cloud-download-outline": '<g data-name="Layer 2"><g data-name="cloud-download"><rect width="24" height="24" opacity="0"/><path d="M14.31 16.38L13 17.64V12a1 1 0 0 0-2 0v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 21a1 1 0 0 0 .69-.28l3-2.9a1 1 0 1 0-1.38-1.44z"/><path d="M17.67 7A6 6 0 0 0 6.33 7a5 5 0 0 0-3.08 8.27A1 1 0 1 0 4.75 14 3 3 0 0 1 7 9h.1a1 1 0 0 0 1-.8 4 4 0 0 1 7.84 0 1 1 0 0 0 1 .8H17a3 3 0 0 1 2.25 5 1 1 0 0 0 .09 1.42 1 1 0 0 0 .66.25 1 1 0 0 0 .75-.34A5 5 0 0 0 17.67 7z"/></g></g>',
              "cloud-upload-outline": '<g data-name="Layer 2"><g data-name="cloud-upload"><rect width="24" height="24" opacity="0"/><path d="M12.71 11.29a1 1 0 0 0-1.4 0l-3 2.9a1 1 0 1 0 1.38 1.44L11 14.36V20a1 1 0 0 0 2 0v-5.59l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M17.67 7A6 6 0 0 0 6.33 7a5 5 0 0 0-3.08 8.27A1 1 0 1 0 4.75 14 3 3 0 0 1 7 9h.1a1 1 0 0 0 1-.8 4 4 0 0 1 7.84 0 1 1 0 0 0 1 .8H17a3 3 0 0 1 2.25 5 1 1 0 0 0 .09 1.42 1 1 0 0 0 .66.25 1 1 0 0 0 .75-.34A5 5 0 0 0 17.67 7z"/></g></g>',
              "code-download-outline": '<g data-name="Layer 2"><g data-name="code-download"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M4.29 12l4.48-5.36a1 1 0 1 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z"/><path d="M21.78 11.37l-4.78-6a1 1 0 0 0-1.56 1.26L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"/><path d="M15.72 11.41a1 1 0 0 0-1.41 0L13 12.64V8a1 1 0 0 0-2 0v4.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 16a1 1 0 0 0 .69-.28l3-2.9a1 1 0 0 0 .03-1.41z"/></g></g>',
              "code-outline": '<g data-name="Layer 2"><g data-name="code"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M8.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L4.29 12l4.48-5.36a1 1 0 0 0-.13-1.41z"/><path d="M21.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"/></g></g>',
              "collapse-outline": '<g data-name="Layer 2"><g data-name="collapse"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 9h-2.58l3.29-3.29a1 1 0 1 0-1.42-1.42L15 7.57V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2z"/><path d="M10 13H5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L9 16.42V19a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"/></g></g>',
              "color-palette-outline": '<g data-name="Layer 2"><g data-name="color-palette"><rect width="24" height="24" opacity="0"/><path d="M19.54 5.08A10.61 10.61 0 0 0 11.91 2a10 10 0 0 0-.05 20 2.58 2.58 0 0 0 2.53-1.89 2.52 2.52 0 0 0-.57-2.28.5.5 0 0 1 .37-.83h1.65A6.15 6.15 0 0 0 22 11.33a8.48 8.48 0 0 0-2.46-6.25zM15.88 15h-1.65a2.49 2.49 0 0 0-1.87 4.15.49.49 0 0 1 .12.49c-.05.21-.28.34-.59.36a8 8 0 0 1-7.82-9.11A8.1 8.1 0 0 1 11.92 4H12a8.47 8.47 0 0 1 6.1 2.48 6.5 6.5 0 0 1 1.9 4.77A4.17 4.17 0 0 1 15.88 15z"/><circle cx="12" cy="6.5" r="1.5"/><path d="M15.25 7.2a1.5 1.5 0 1 0 2.05.55 1.5 1.5 0 0 0-2.05-.55z"/><path d="M8.75 7.2a1.5 1.5 0 1 0 .55 2.05 1.5 1.5 0 0 0-.55-2.05z"/><path d="M6.16 11.26a1.5 1.5 0 1 0 2.08.4 1.49 1.49 0 0 0-2.08-.4z"/></g></g>',
              "color-picker-outline": '<g data-name="Layer 2"><g data-name="color-picker"><rect width="24" height="24" opacity="0"/><path d="M19.4 7.34L16.66 4.6A1.92 1.92 0 0 0 14 4.53l-2 2-1.29-1.24a1 1 0 0 0-1.42 1.42L10.53 8 5 13.53a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l5.58-5.58 1.24 1.24a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-1.24-1.24 2-2a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.36l2.69 2.7zm7-7L13.36 8l1.91-2L18 8.73z"/></g></g>',
              "compass-outline": '<g data-name="Layer 2"><g data-name="compass"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M15.68 8.32a1 1 0 0 0-1.1-.25l-4.21 1.7a1 1 0 0 0-.55.55l-1.75 4.26a1 1 0 0 0 .18 1h.05A1 1 0 0 0 9 16a1 1 0 0 0 .38-.07l4.21-1.7a1 1 0 0 0 .55-.55l1.75-4.26a1 1 0 0 0-.21-1.1zm-4.88 4.89l.71-1.74 1.69-.68-.71 1.74z"/></g></g>',
              "copy-outline": '<g data-name="Layer 2"><g data-name="copy"><rect width="24" height="24" opacity="0"/><path d="M18 21h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zm-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z"/><path d="M9.73 15H5.67A2.68 2.68 0 0 1 3 12.33V5.67A2.68 2.68 0 0 1 5.67 3h6.66A2.68 2.68 0 0 1 15 5.67V9.4h-2V5.67a.67.67 0 0 0-.67-.67H5.67a.67.67 0 0 0-.67.67v6.66a.67.67 0 0 0 .67.67h4.06z"/></g></g>',
              "corner-down-left-outline": '<g data-name="Layer 2"><g data-name="corner-down-left"><rect x=".05" y=".05" width="24" height="24" transform="rotate(-89.76 12.05 12.05)" opacity="0"/><path d="M20 6a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 1-.29.71A1 1 0 0 1 17 12H8.08l2.69-3.39a1 1 0 0 0-1.52-1.17l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78.37 1 1 0 0 0 .62-.22 1 1 0 0 0 .15-1.41l-2.66-3.36h8.92a3 3 0 0 0 3-3z"/></g></g>',
              "corner-down-right-outline": '<g data-name="Layer 2"><g data-name="corner-down-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M19.78 12.38l-4-5a1 1 0 0 0-1.56 1.24l2.7 3.38H8a1 1 0 0 1-1-1V6a1 1 0 0 0-2 0v5a3 3 0 0 0 3 3h8.92l-2.7 3.38a1 1 0 0 0 .16 1.4A1 1 0 0 0 15 19a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0 0-1.24z"/></g></g>',
              "corner-left-down-outline": '<g data-name="Layer 2"><g data-name="corner-left-down"><rect width="24" height="24" opacity="0"/><path d="M18 5h-5a3 3 0 0 0-3 3v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 1 0-1.24-1.56L12 16.92V8a1 1 0 0 1 1-1h5a1 1 0 0 0 0-2z"/></g></g>',
              "corner-left-up-outline": '<g data-name="Layer 2"><g data-name="corner-left-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 17h-5a1 1 0 0 1-1-1V7.08l3.38 2.7A1 1 0 0 0 16 10a1 1 0 0 0 .78-.38 1 1 0 0 0-.16-1.4l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L10 7.08V16a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2z"/></g></g>',
              "corner-right-down-outline": '<g data-name="Layer 2"><g data-name="corner-right-down"><rect width="24" height="24" opacity="0"/><path d="M18.78 14.38a1 1 0 0 0-1.4-.16L14 16.92V8a3 3 0 0 0-3-3H6a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v8.92l-3.38-2.7a1 1 0 0 0-1.24 1.56l5 4a1 1 0 0 0 1.24 0l5-4a1 1 0 0 0 .16-1.4z"/></g></g>',
              "corner-right-up-outline": '<g data-name="Layer 2"><g data-name="corner-right-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18.62 8.22l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L12 7.08V16a1 1 0 0 1-1 1H6a1 1 0 0 0 0 2h5a3 3 0 0 0 3-3V7.08l3.38 2.7A1 1 0 0 0 18 10a1 1 0 0 0 .78-.38 1 1 0 0 0-.16-1.4z"/></g></g>',
              "corner-up-left-outline": '<g data-name="Layer 2"><g data-name="corner-up-left"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M16 10H7.08l2.7-3.38a1 1 0 1 0-1.56-1.24l-4 5a1 1 0 0 0 0 1.24l4 5A1 1 0 0 0 9 17a1 1 0 0 0 .62-.22 1 1 0 0 0 .16-1.4L7.08 12H16a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0v-5a3 3 0 0 0-3-3z"/></g></g>',
              "corner-up-right-outline": '<g data-name="Layer 2"><g data-name="corner-up-right"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M19.78 10.38l-4-5a1 1 0 0 0-1.56 1.24l2.7 3.38H8a3 3 0 0 0-3 3v5a1 1 0 0 0 2 0v-5a1 1 0 0 1 1-1h8.92l-2.7 3.38a1 1 0 0 0 .16 1.4A1 1 0 0 0 15 17a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0 0-1.24z"/></g></g>',
              "credit-card-outline": '<g data-name="Layer 2"><g data-name="credit-card"><rect width="24" height="24" opacity="0"/><path d="M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4zm16 8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h16z"/><path d="M7 15h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2z"/><path d="M15 15h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2z"/></g></g>',
              "crop-outline": '<g data-name="Layer 2"><g data-name="crop"><rect width="24" height="24" opacity="0"/><path d="M21 16h-3V8.56A2.56 2.56 0 0 0 15.44 6H8V3a1 1 0 0 0-2 0v3H3a1 1 0 0 0 0 2h3v7.44A2.56 2.56 0 0 0 8.56 18H16v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2zM8.56 16a.56.56 0 0 1-.56-.56V8h7.44a.56.56 0 0 1 .56.56V16z"/></g></g>',
              "cube-outline": '<g data-name="Layer 2"><g data-name="cube"><rect width="24" height="24" opacity="0"/><path d="M20.66 7.26c0-.07-.1-.14-.15-.21l-.09-.1a2.5 2.5 0 0 0-.86-.68l-6.4-3a2.7 2.7 0 0 0-2.26 0l-6.4 3a2.6 2.6 0 0 0-.86.68L3.52 7a1 1 0 0 0-.15.2A2.39 2.39 0 0 0 3 8.46v7.06a2.49 2.49 0 0 0 1.46 2.26l6.4 3a2.7 2.7 0 0 0 2.27 0l6.4-3A2.49 2.49 0 0 0 21 15.54V8.46a2.39 2.39 0 0 0-.34-1.2zm-8.95-2.2a.73.73 0 0 1 .58 0l5.33 2.48L12 10.15 6.38 7.54zM5.3 16a.47.47 0 0 1-.3-.43V9.1l6 2.79v6.72zm13.39 0L13 18.61v-6.72l6-2.79v6.44a.48.48 0 0 1-.31.46z"/></g></g>',
              "diagonal-arrow-left-down-outline": '<g data-name="Layer 2"><g data-name="diagonal-arrow-left-down"><rect width="24" height="24" opacity="0"/><path d="M17.71 6.29a1 1 0 0 0-1.42 0L8 14.59V9a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2H9.41l8.3-8.29a1 1 0 0 0 0-1.42z"/></g></g>',
              "diagonal-arrow-left-up-outline": '<g data-name="Layer 2"><g data-name="diagonal-arrow-left-up"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M17.71 16.29L9.42 8H15a1 1 0 0 0 0-2H7.05a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H7a1 1 0 0 0 1-1V9.45l8.26 8.26a1 1 0 0 0 1.42 0 1 1 0 0 0 .03-1.42z"/></g></g>',
              "diagonal-arrow-right-down-outline": '<g data-name="Layer 2"><g data-name="diagonal-arrow-right-down"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M17 8a1 1 0 0 0-1 1v5.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29H9a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"/></g></g>',
              "diagonal-arrow-right-up-outline": '<g data-name="Layer 2"><g data-name="diagonal-arrow-right-up"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/></g></g>',
              "done-all-outline": '<g data-name="Layer 2"><g data-name="done-all"><rect width="24" height="24" opacity="0"/><path d="M16.62 6.21a1 1 0 0 0-1.41.17l-7 9-3.43-4.18a1 1 0 1 0-1.56 1.25l4.17 5.18a1 1 0 0 0 .78.37 1 1 0 0 0 .83-.38l7.83-10a1 1 0 0 0-.21-1.41z"/><path d="M21.62 6.21a1 1 0 0 0-1.41.17l-7 9-.61-.75-1.26 1.62 1.1 1.37a1 1 0 0 0 .78.37 1 1 0 0 0 .78-.38l7.83-10a1 1 0 0 0-.21-1.4z"/><path d="M8.71 13.06L10 11.44l-.2-.24a1 1 0 0 0-1.43-.2 1 1 0 0 0-.15 1.41z"/></g></g>',
              "download-outline": '<g data-name="Layer 2"><g data-name="download"><rect width="24" height="24" opacity="0"/><rect x="4" y="18" width="16" height="2" rx="1" ry="1"/><rect x="3" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 5 18)"/><rect x="17" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 19 18)"/><path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39 1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"/><path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"/></g></g>',
              "droplet-off-outline": '<g data-name="Layer 2"><g data-name="droplet-off-outline"><rect width="24" height="24" opacity="0"/><path d="M12 19a5.4 5.4 0 0 1-3.88-1.64 5.73 5.73 0 0 1-.69-7.11L6 8.82a7.74 7.74 0 0 0 .7 9.94A7.37 7.37 0 0 0 12 21a7.36 7.36 0 0 0 4.58-1.59L15.15 18A5.43 5.43 0 0 1 12 19z"/><path d="M12 5.43l3.88 4a5.71 5.71 0 0 1 1.49 5.15L19 16.15A7.72 7.72 0 0 0 17.31 8l-4.6-4.7A1 1 0 0 0 12 3a1 1 0 0 0-.72.3L8.73 5.9l1.42 1.42z"/><path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
              "droplet-outline": '<g data-name="Layer 2"><g data-name="droplet-outline"><rect x=".1" y=".1" width="24" height="24" transform="rotate(.48 11.987 11.887)" opacity="0"/><path d="M12 21.1a7.4 7.4 0 0 1-5.28-2.28 7.73 7.73 0 0 1 .1-10.77l4.64-4.65a.94.94 0 0 1 .71-.3 1 1 0 0 1 .71.31l4.56 4.72a7.73 7.73 0 0 1-.09 10.77A7.33 7.33 0 0 1 12 21.1zm.13-15.57L8.24 9.45a5.74 5.74 0 0 0-.07 8A5.43 5.43 0 0 0 12 19.1a5.42 5.42 0 0 0 3.9-1.61 5.72 5.72 0 0 0 .06-8z"/></g></g>',
              "edit-2-outline": '<g data-name="Layer 2"><g data-name="edit-2"><rect width="24" height="24" opacity="0"/><path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"/><path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z"/></g></g>',
              "edit-outline": '<g data-name="Layer 2"><g data-name="edit"><rect width="24" height="24" opacity="0"/><path d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z"/></g></g>',
              "email-outline": '<g data-name="Layer 2"><g data-name="email"><rect width="24" height="24" opacity="0"/><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"/></g></g>',
              "expand-outline": '<g data-name="Layer 2"><g data-name="expand"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20 5a1 1 0 0 0-1-1h-5a1 1 0 0 0 0 2h2.57l-3.28 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42V10a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/><path d="M10.71 13.29a1 1 0 0 0-1.42 0L6 16.57V14a1 1 0 0 0-1-1 1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H7.42l3.29-3.29a1 1 0 0 0 0-1.42z"/></g></g>',
              "external-link-outline": '<g data-name="Layer 2"><g data-name="external-link"><rect width="24" height="24" opacity="0"/><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"/><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"/></g></g>',
              "eye-off-2-outline": '<g data-name="Layer 2"><g data-name="eye-off-2"><rect width="24" height="24" opacity="0"/><path d="M17.81 13.39A8.93 8.93 0 0 0 21 7.62a1 1 0 1 0-2-.24 7.07 7.07 0 0 1-14 0 1 1 0 1 0-2 .24 8.93 8.93 0 0 0 3.18 5.77l-2.3 2.32a1 1 0 0 0 1.41 1.41l2.61-2.6a9.06 9.06 0 0 0 3.1.92V19a1 1 0 0 0 2 0v-3.56a9.06 9.06 0 0 0 3.1-.92l2.61 2.6a1 1 0 0 0 1.41-1.41z"/></g></g>',
              "eye-off-outline": '<g data-name="Layer 2"><g data-name="eye-off"><rect width="24" height="24" opacity="0"/><path d="M4.71 3.29a1 1 0 0 0-1.42 1.42l5.63 5.63a3.5 3.5 0 0 0 4.74 4.74l5.63 5.63a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM12 13.5a1.5 1.5 0 0 1-1.5-1.5v-.07l1.56 1.56z"/><path d="M12.22 17c-4.3.1-7.12-3.59-8-5a13.7 13.7 0 0 1 2.24-2.72L5 7.87a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.48 9.48 0 0 0 3.23-.67l-1.58-1.58a7.74 7.74 0 0 1-1.7.25z"/><path d="M21.87 11.5c-.64-1.11-4.17-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67l1.58 1.58a7.74 7.74 0 0 1 1.7-.25c4.29-.11 7.11 3.59 8 5a13.7 13.7 0 0 1-2.29 2.72L19 16.13a15.89 15.89 0 0 0 2.91-3.63 1 1 0 0 0-.04-1z"/></g></g>',
              "eye-outline": '<g data-name="Layer 2"><g data-name="eye"><rect width="24" height="24" opacity="0"/><path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z"/><path d="M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></g></g>',
              "facebook-outline": '<g data-name="Layer 2"><g data-name="facebook"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13 22H9a1 1 0 0 1-1-1v-6.2H6a1 1 0 0 1-1-1v-3.6a1 1 0 0 1 1-1h2V7.5A5.77 5.77 0 0 1 14 2h3a1 1 0 0 1 1 1v3.6a1 1 0 0 1-1 1h-3v1.6h3a1 1 0 0 1 .8.39 1 1 0 0 1 .16.88l-1 3.6a1 1 0 0 1-1 .73H14V21a1 1 0 0 1-1 1zm-3-2h2v-6.2a1 1 0 0 1 1-1h2.24l.44-1.6H13a1 1 0 0 1-1-1V7.5a2 2 0 0 1 2-1.9h2V4h-2a3.78 3.78 0 0 0-4 3.5v2.7a1 1 0 0 1-1 1H7v1.6h2a1 1 0 0 1 1 1z"/></g></g>',
              "file-add-outline": '<g data-name="Layer 2"><g data-name="file-add"><rect width="24" height="24" opacity="0"/><path d="M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z"/><path d="M14 13h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z"/></g></g>',
              "file-outline": '<g data-name="Layer 2"><g data-name="file"><rect width="24" height="24" opacity="0"/><path d="M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM17.65 9h-3.94a.79.79 0 0 1-.71-.85V4h.11zm-.21 11H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H11v4.15A2.79 2.79 0 0 0 13.71 11H18v8.5a.53.53 0 0 1-.56.5z"/></g></g>',
              "file-remove-outline": '<g data-name="Layer 2"><g data-name="file-remove"><rect width="24" height="24" opacity="0"/><path d="M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z"/><path d="M14 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/></g></g>',
              "file-text-outline": '<g data-name="Layer 2"><g data-name="file-text"><rect width="24" height="24" opacity="0"/><path d="M15 16H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"/><path d="M9 14h3a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2z"/><path d="M19.74 8.33l-5.44-6a1 1 0 0 0-.74-.33h-7A2.53 2.53 0 0 0 4 4.5v15A2.53 2.53 0 0 0 6.56 22h10.88A2.53 2.53 0 0 0 20 19.5V9a1 1 0 0 0-.26-.67zM14 5l2.74 3h-2a.79.79 0 0 1-.74-.85zm3.44 15H6.56a.53.53 0 0 1-.56-.5v-15a.53.53 0 0 1 .56-.5H12v3.15A2.79 2.79 0 0 0 14.71 10H18v9.5a.53.53 0 0 1-.56.5z"/></g></g>',
              "film-outline": '<g data-name="Layer 2"><g data-name="film"><rect width="24" height="24" opacity="0"/><path d="M18.26 3H5.74A2.74 2.74 0 0 0 3 5.74v12.52A2.74 2.74 0 0 0 5.74 21h12.52A2.74 2.74 0 0 0 21 18.26V5.74A2.74 2.74 0 0 0 18.26 3zM7 11H5V9h2zm-2 2h2v2H5zm4-8h6v14H9zm10 6h-2V9h2zm-2 2h2v2h-2zm2-7.26V7h-2V5h1.26a.74.74 0 0 1 .74.74zM5.74 5H7v2H5V5.74A.74.74 0 0 1 5.74 5zM5 18.26V17h2v2H5.74a.74.74 0 0 1-.74-.74zm14 0a.74.74 0 0 1-.74.74H17v-2h2z"/></g></g>',
              "flag-outline": '<g data-name="Layer 2"><g data-name="flag"><polyline points="24 24 0 24 0 0" opacity="0"/><path d="M19.27 4.68a1.79 1.79 0 0 0-1.6-.25 7.53 7.53 0 0 1-2.17.28 8.54 8.54 0 0 1-3.13-.78A10.15 10.15 0 0 0 8.5 3c-2.89 0-4 1-4.2 1.14a1 1 0 0 0-.3.72V20a1 1 0 0 0 2 0v-4.3a6.28 6.28 0 0 1 2.5-.41 8.54 8.54 0 0 1 3.13.78 10.15 10.15 0 0 0 3.87.93 7.66 7.66 0 0 0 3.5-.7 1.74 1.74 0 0 0 1-1.55V6.11a1.77 1.77 0 0 0-.73-1.43zM18 14.59a6.32 6.32 0 0 1-2.5.41 8.36 8.36 0 0 1-3.13-.79 10.34 10.34 0 0 0-3.87-.92 9.51 9.51 0 0 0-2.5.29V5.42A6.13 6.13 0 0 1 8.5 5a8.36 8.36 0 0 1 3.13.79 10.34 10.34 0 0 0 3.87.92 9.41 9.41 0 0 0 2.5-.3z"/></g></g>',
              "flash-off-outline": '<g data-name="Layer 2"><g data-name="flash-off"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M12.54 18.06l.27-2.42L10 12.8H6.87l1.24-1.86L6.67 9.5l-2.5 3.74A1 1 0 0 0 5 14.8h5.89l-.77 7.09a1 1 0 0 0 .65 1.05 1 1 0 0 0 .34.06 1 1 0 0 0 .83-.44l3.12-4.67-1.44-1.44z"/><path d="M11.46 5.94l-.27 2.42L14 11.2h3.1l-1.24 1.86 1.44 1.44 2.5-3.74A1 1 0 0 0 19 9.2h-5.89l.77-7.09a1 1 0 0 0-.65-1 1 1 0 0 0-1.17.38L8.94 6.11l1.44 1.44z"/></g></g>',
              "flash-outline": '<g data-name="Layer 2"><g data-name="flash"><rect width="24" height="24" opacity="0"/><path d="M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44zM6.87 12.8H12a1 1 0 0 1 .74.33 1 1 0 0 1 .25.78l-.45 4.15 4.59-6.86H12a1 1 0 0 1-1-1.11l.45-4.15z"/></g></g>',
              "flip-2-outline": '<g data-name="Layer 2"><g data-name="flip-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M6.09 19h12l-1.3 1.29a1 1 0 0 0 1.42 1.42l3-3a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19z"/><path d="M5.79 9.71a1 1 0 1 0 1.42-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5h-12l1.3-1.29a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 0 1.42z"/></g></g>',
              "flip-outline": '<g data-name="Layer 2"><g data-name="flip-in"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M5 6.09v12l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3a1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0L7 18.09v-12A1.56 1.56 0 0 1 8.53 4.5H11a1 1 0 0 0 0-2H8.53A3.56 3.56 0 0 0 5 6.09z"/><path d="M14.29 5.79a1 1 0 0 0 1.42 1.42L17 5.91v12a1.56 1.56 0 0 1-1.53 1.59H13a1 1 0 0 0 0 2h2.47A3.56 3.56 0 0 0 19 17.91v-12l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0z"/></g></g>',
              "folder-add-outline": '<g data-name="Layer 2"><g data-name="folder-add"><rect width="24" height="24" opacity="0"/><path d="M14 13h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z"/><path d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43zm.5 11a.46.46 0 0 1-.5.43h-15a.46.46 0 0 1-.5-.43V5.93a.46.46 0 0 1 .5-.43h4.13l2.6 3.18a1 1 0 0 0 .77.37h7.5a.46.46 0 0 1 .5.43z"/></g></g>',
              "folder-outline": '<g data-name="Layer 2"><g data-name="folder"><rect width="24" height="24" opacity="0"/><path d="M19.5 20.5h-15A2.47 2.47 0 0 1 2 18.07V5.93A2.47 2.47 0 0 1 4.5 3.5h4.6a1 1 0 0 1 .77.37l2.6 3.18h7A2.47 2.47 0 0 1 22 9.48v8.59a2.47 2.47 0 0 1-2.5 2.43zM4 13.76v4.31a.46.46 0 0 0 .5.43h15a.46.46 0 0 0 .5-.43V9.48a.46.46 0 0 0-.5-.43H12a1 1 0 0 1-.77-.37L8.63 5.5H4.5a.46.46 0 0 0-.5.43z"/></g></g>',
              "folder-remove-outline": '<g data-name="Layer 2"><g data-name="folder-remove"><rect width="24" height="24" opacity="0"/><path d="M14 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/><path d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43zm.5 11a.46.46 0 0 1-.5.43h-15a.46.46 0 0 1-.5-.43V5.93a.46.46 0 0 1 .5-.43h4.13l2.6 3.18a1 1 0 0 0 .77.37h7.5a.46.46 0 0 1 .5.43z"/></g></g>',
              "funnel-outline": '<g data-name="Layer 2"><g data-name="funnel"><rect width="24" height="24" opacity="0"/><path d="M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49 1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9 1 1 0 0 1-.41.1zm-3-4.54l2 1.53v-4.55A1 1 0 0 1 13 14l4.3-8H6.64l4.13 8a1 1 0 0 1 .11.46z"/></g></g>',
              "gift-outline": '<g data-name="Layer 2"><g data-name="gift"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19.2 7h-.39A3 3 0 0 0 19 6a3.08 3.08 0 0 0-3.14-3A4.46 4.46 0 0 0 12 5.4 4.46 4.46 0 0 0 8.14 3 3.08 3.08 0 0 0 5 6a3 3 0 0 0 .19 1H4.8A2 2 0 0 0 3 9.2v3.6A2.08 2.08 0 0 0 4.5 15v4.37A1.75 1.75 0 0 0 6.31 21h11.38a1.75 1.75 0 0 0 1.81-1.67V15a2.08 2.08 0 0 0 1.5-2.2V9.2A2 2 0 0 0 19.2 7zM19 9.2v3.6a.56.56 0 0 1 0 .2h-6V9h6a.56.56 0 0 1 0 .2zM15.86 5A1.08 1.08 0 0 1 17 6a1.08 1.08 0 0 1-1.14 1H13.4a2.93 2.93 0 0 1 2.46-2zM7 6a1.08 1.08 0 0 1 1.14-1 2.93 2.93 0 0 1 2.45 2H8.14A1.08 1.08 0 0 1 7 6zM5 9.2A.56.56 0 0 1 5 9h6v4H5a.56.56 0 0 1 0-.2zM6.5 15H11v4H6.5zm6.5 4v-4h4.5v4z"/></g></g>',
              "github-outline": '<g data-name="Layer 2"><rect width="24" height="24" opacity="0"/><path d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z"/></g>',
              "globe-2-outline": '<g data-name="Layer 2"><g data-name="globe-2"><rect width="24" height="24" opacity="0"/><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 2a8.19 8.19 0 0 1 1.79.21 2.61 2.61 0 0 1-.78 1c-.22.17-.46.31-.7.46a4.56 4.56 0 0 0-1.85 1.67 6.49 6.49 0 0 0-.62 3.3c0 1.36 0 2.16-.95 2.87-1.37 1.07-3.46.47-4.76-.07A8.33 8.33 0 0 1 4 12a8 8 0 0 1 8-8zM5 15.8a8.42 8.42 0 0 0 2 .27 5 5 0 0 0 3.14-1c1.71-1.34 1.71-3.06 1.71-4.44a4.76 4.76 0 0 1 .37-2.34 2.86 2.86 0 0 1 1.12-.91 9.75 9.75 0 0 0 .92-.61 4.55 4.55 0 0 0 1.4-1.87A8 8 0 0 1 19 8.12c-1.43.2-3.46.67-3.86 2.53A7 7 0 0 0 15 12a2.93 2.93 0 0 1-.29 1.47l-.1.17c-.65 1.08-1.38 2.31-.39 4 .12.21.25.41.38.61a2.29 2.29 0 0 1 .52 1.08A7.89 7.89 0 0 1 12 20a8 8 0 0 1-7-4.2zm11.93 2.52a6.79 6.79 0 0 0-.63-1.14c-.11-.16-.22-.32-.32-.49-.39-.68-.25-1 .38-2l.1-.17a4.77 4.77 0 0 0 .54-2.43 5.42 5.42 0 0 1 .09-1c.16-.73 1.71-.93 2.67-1a7.94 7.94 0 0 1-2.86 8.28z"/></g></g>',
              "globe-outline": '<g data-name="Layer 2"><g data-name="globe"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0 0 20 10 10 0 0 0 10-10zm-2.07-1H17a12.91 12.91 0 0 0-2.33-6.54A8 8 0 0 1 19.93 11zM9.08 13H15a11.44 11.44 0 0 1-3 6.61A11 11 0 0 1 9.08 13zm0-2A11.4 11.4 0 0 1 12 4.4a11.19 11.19 0 0 1 3 6.6zm.36-6.57A13.18 13.18 0 0 0 7.07 11h-3a8 8 0 0 1 5.37-6.57zM4.07 13h3a12.86 12.86 0 0 0 2.35 6.56A8 8 0 0 1 4.07 13zm10.55 6.55A13.14 13.14 0 0 0 17 13h2.95a8 8 0 0 1-5.33 6.55z"/></g></g>',
              "google-outline": '<g data-name="Layer 2"><g data-name="google"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M12 22h-.43A10.16 10.16 0 0 1 2 12.29a10 10 0 0 1 14.12-9.41 1.48 1.48 0 0 1 .77.86 1.47 1.47 0 0 1-.1 1.16L15.5 7.28a1.44 1.44 0 0 1-1.83.64A4.5 4.5 0 0 0 8.77 9a4.41 4.41 0 0 0-1.16 3.34 4.36 4.36 0 0 0 1.66 3 4.52 4.52 0 0 0 3.45 1 3.89 3.89 0 0 0 2.63-1.57h-2.9A1.45 1.45 0 0 1 11 13.33v-2.68a1.45 1.45 0 0 1 1.45-1.45h8.1A1.46 1.46 0 0 1 22 10.64v1.88A10 10 0 0 1 12 22zm0-18a8 8 0 0 0-8 8.24A8.12 8.12 0 0 0 11.65 20 8 8 0 0 0 20 12.42V11.2h-7v1.58h5.31l-.41 1.3a6 6 0 0 1-4.9 4.25A6.58 6.58 0 0 1 8 17a6.33 6.33 0 0 1-.72-9.3A6.52 6.52 0 0 1 14 5.91l.77-1.43A7.9 7.9 0 0 0 12 4z"/></g></g>',
              "grid-outline": '<g data-name="Layer 2"><g data-name="grid"><rect width="24" height="24" opacity="0"/><path d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM5 9V5h4v4z"/><path d="M19 3h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-4 6V5h4v4z"/><path d="M9 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 6v-4h4v4z"/><path d="M19 13h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 6v-4h4v4z"/></g></g>',
              "hard-drive-outline": '<g data-name="Layer 2"><g data-name="hard-drive"><rect width="24" height="24" opacity="0"/><path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H5.62zM18 19H6a1 1 0 0 1-1-1v-5h14v5a1 1 0 0 1-1 1z"/><path d="M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/><circle cx="8" cy="16" r="1"/></g></g>',
              "hash-outline": '<g data-name="Layer 2"><g data-name="hash"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20 14h-4.3l.73-4H20a1 1 0 0 0 0-2h-3.21l.69-3.81A1 1 0 0 0 16.64 3a1 1 0 0 0-1.22.82L14.67 8h-3.88l.69-3.81A1 1 0 0 0 10.64 3a1 1 0 0 0-1.22.82L8.67 8H4a1 1 0 0 0 0 2h4.3l-.73 4H4a1 1 0 0 0 0 2h3.21l-.69 3.81A1 1 0 0 0 7.36 21a1 1 0 0 0 1.22-.82L9.33 16h3.88l-.69 3.81a1 1 0 0 0 .84 1.19 1 1 0 0 0 1.22-.82l.75-4.18H20a1 1 0 0 0 0-2zM9.7 14l.73-4h3.87l-.73 4z"/></g></g>',
              "headphones-outline": '<g data-name="Layer 2"><g data-name="headphones"><rect width="24" height="24" opacity="0"/><path d="M12 2A10.2 10.2 0 0 0 2 12.37V17a4 4 0 1 0 4-4 3.91 3.91 0 0 0-2 .56v-1.19A8.2 8.2 0 0 1 12 4a8.2 8.2 0 0 1 8 8.37v1.19a3.91 3.91 0 0 0-2-.56 4 4 0 1 0 4 4v-4.63A10.2 10.2 0 0 0 12 2zM6 15a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm12 4a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/></g></g>',
              "heart-outline": '<g data-name="Layer 2"><g data-name="heart"><rect width="24" height="24" opacity="0"/><path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21zM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6z"/></g></g>',
              "home-outline": '<g data-name="Layer 2"><g data-name="home"><rect width="24" height="24" opacity="0"/><path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z"/></g></g>',
              "image-outline": '<g data-name="Layer 2"><g data-name="image"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0-3.52 0L5 17.7V6a1 1 0 0 1 1-1zm12 14H6.56l7-5.84a.78.78 0 0 1 .93 0L19 17v1a1 1 0 0 1-1 1z"/><circle cx="8" cy="8.5" r="1.5"/></g></g>',
              "inbox-outline": '<g data-name="Layer 2"><g data-name="inbox"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v3H9v-3a1 1 0 0 0-1-1H5.62zM18 19H6a1 1 0 0 1-1-1v-5h2v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3h2v5a1 1 0 0 1-1 1z"/></g></g>',
              "info-outline": '<g data-name="Layer 2"><g data-name="info"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><circle cx="12" cy="8" r="1"/><path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1z"/></g></g>',
              "keypad-outline": '<g data-name="Layer 2"><g data-name="keypad"><rect width="24" height="24" opacity="0"/><path d="M5 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M12 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M19 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/><path d="M5 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M12 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M19 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M5 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M12 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M19 16a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
              "layers-outline": '<g data-name="Layer 2"><g data-name="layers"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M21 11.35a1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-8-3.41a1 1 0 0 0-.78 0l-8 3.41a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l8 4.6a1 1 0 0 0 1 0l8-4.6a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92zm-9-6.26l5.76 2.45L12 10.85 6.24 7.54zm-.5 7.78a1 1 0 0 0 1 0l3.57-2 1.69.72L12 14.85l-5.76-3.31 1.69-.72zm6.26 2.67L12 18.85l-5.76-3.31 1.69-.72 3.57 2.05a1 1 0 0 0 1 0l3.57-2.05z"/></g></g>',
              "layout-outline": '<g data-name="Layer 2"><g data-name="layout"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v2H5V6a1 1 0 0 1 1-1zM5 18v-8h6v9H6a1 1 0 0 1-1-1zm13 1h-5v-9h6v8a1 1 0 0 1-1 1z"/></g></g>',
              "link-2-outline": '<g data-name="Layer 2"><g data-name="link-2"><rect width="24" height="24" opacity="0"/><path d="M13.29 9.29l-4 4a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42z"/><path d="M12.28 17.4L11 18.67a4.2 4.2 0 0 1-5.58.4 4 4 0 0 1-.27-5.93l1.42-1.43a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-1.27 1.28a6.15 6.15 0 0 0-.67 8.07 6.06 6.06 0 0 0 9.07.6l1.42-1.42a1 1 0 0 0-1.42-1.42z"/><path d="M19.66 3.22a6.18 6.18 0 0 0-8.13.68L10.45 5a1.09 1.09 0 0 0-.17 1.61 1 1 0 0 0 1.42 0L13 5.3a4.17 4.17 0 0 1 5.57-.4 4 4 0 0 1 .27 5.95l-1.42 1.43a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.42-1.42a6.06 6.06 0 0 0-.6-9.06z"/></g></g>',
              "link-outline": '<g data-name="Layer 2"><g data-name="link"><rect width="24" height="24" opacity="0"/><path d="M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1z"/><path d="M9 16H7.21A4.13 4.13 0 0 1 3 12.37 4 4 0 0 1 7 8h2a1 1 0 0 0 0-2H7.21a6.15 6.15 0 0 0-6.16 5.21A6 6 0 0 0 7 18h2a1 1 0 0 0 0-2z"/><path d="M23 11.24A6.16 6.16 0 0 0 16.76 6h-1.51C14.44 6 14 6.45 14 7a1 1 0 0 0 1 1h1.79A4.13 4.13 0 0 1 21 11.63 4 4 0 0 1 17 16h-2a1 1 0 0 0 0 2h2a6 6 0 0 0 6-6.76z"/></g></g>',
              "linkedin-outline": '<g data-name="Layer 2"><g data-name="linkedin"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20 22h-1.67a2 2 0 0 1-2-2v-5.37a.92.92 0 0 0-.69-.93.84.84 0 0 0-.67.19.85.85 0 0 0-.3.65V20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-5.46a6.5 6.5 0 1 1 13 0V20a2 2 0 0 1-2 2zm-4.5-10.31a3.73 3.73 0 0 1 .47 0 2.91 2.91 0 0 1 2.36 2.9V20H20v-5.46a4.5 4.5 0 1 0-9 0V20h1.67v-5.46a2.85 2.85 0 0 1 2.83-2.85z"/><path d="M6 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zM4 10v10h2V10z"/><path d="M5 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/></g></g>',
              "list-outline": '<g data-name="Layer 2"><g data-name="list"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><circle cx="4" cy="7" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="17" r="1"/><rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"/><rect x="7" y="16" width="14" height="2" rx=".94" ry=".94"/><rect x="7" y="6" width="14" height="2" rx=".94" ry=".94"/></g></g>',
              "loader-outline": '<g data-name="Layer 2"><g data-name="loader"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1z"/><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z"/><path d="M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z"/><path d="M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z"/><path d="M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"/><path d="M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z"/><path d="M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z"/></g></g>',
              "lock-outline": '<g data-name="Layer 2"><g data-name="lock"><rect width="24" height="24" opacity="0"/><path d="M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"/><path d="M12 12a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
              "log-in-outline": '<g data-name="Layer 2"><g data-name="log-in"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M19 4h-2a1 1 0 0 0 0 2h1v12h-1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/><path d="M11.8 7.4a1 1 0 0 0-1.6 1.2L12 11H4a1 1 0 0 0 0 2h8.09l-1.72 2.44a1 1 0 0 0 .24 1.4 1 1 0 0 0 .58.18 1 1 0 0 0 .81-.42l2.82-4a1 1 0 0 0 0-1.18z"/></g></g>',
              "log-out-outline": '<g data-name="Layer 2"><g data-name="log-out"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z"/><path d="M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z"/></g></g>',
              "map-outline": '<g data-name="Layer 2"><g data-name="map"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20.41 5.89l-4-1.8H15.59L12 5.7 8.41 4.09h-.05L8.24 4h-.6l-4 1.8a1 1 0 0 0-.64 1V19a1 1 0 0 0 .46.84A1 1 0 0 0 4 20a1 1 0 0 0 .41-.09L8 18.3l3.59 1.61h.05a.85.85 0 0 0 .72 0h.05L16 18.3l3.59 1.61A1 1 0 0 0 20 20a1 1 0 0 0 .54-.16A1 1 0 0 0 21 19V6.8a1 1 0 0 0-.59-.91zM5 7.44l2-.89v10l-2 .89zm4-.89l2 .89v10l-2-.89zm4 .89l2-.89v10l-2 .89zm6 10l-2-.89v-10l2 .89z"/></g></g>',
              "maximize-outline": '<g data-name="Layer 2"><g data-name="maximize"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/><path d="M13 10h-1V9a1 1 0 0 0-2 0v1H9a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2z"/></g></g>',
              "menu-2-outline": '<g data-name="Layer 2"><g data-name="menu-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><circle cx="4" cy="12" r="1"/><rect x="7" y="11" width="14" height="2" rx=".94" ry=".94"/><rect x="3" y="16" width="18" height="2" rx=".94" ry=".94"/><rect x="3" y="6" width="18" height="2" rx=".94" ry=".94"/></g></g>',
              "menu-arrow-outline": '<g data-name="Layer 2"><g data-name="menu-arrow"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M20.05 11H5.91l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 13h14.14a1 1 0 0 0 .95-.95V12a1 1 0 0 0-.95-1z"/><rect x="3" y="17" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="5" width="18" height="2" rx=".95" ry=".95"/></g></g>',
              "menu-outline": '<g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"/></g></g>',
              "message-circle-outline": '<g data-name="Layer 2"><g data-name="message-circle"><circle cx="12" cy="12" r="1"/><circle cx="16" cy="12" r="1"/><circle cx="8" cy="12" r="1"/><path d="M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zm.83 8.36a8 8 0 0 1-11 6.08 3.26 3.26 0 0 0-1.25-.26 3.43 3.43 0 0 0-.56.05l-2.82.57.57-2.82a3.09 3.09 0 0 0-.21-1.81 8 8 0 0 1 6.08-11 8 8 0 0 1 9.19 9.19z"/><rect width="24" height="24" opacity="0"/></g></g>',
              "message-square-outline": '<g data-name="Layer 2"><g data-name="message-square"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="11" r="1"/><circle cx="16" cy="11" r="1"/><circle cx="8" cy="11" r="1"/><path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H8.55a3 3 0 0 0-1.55.43l-3 1.8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"/></g></g>',
              "mic-off-outline": '<g data-name="Layer 2"><g data-name="mic-off"><rect width="24" height="24" opacity="0"/><path d="M10 6a2 2 0 0 1 4 0v5a1 1 0 0 1 0 .16l1.6 1.59A4 4 0 0 0 16 11V6a4 4 0 0 0-7.92-.75L10 7.17z"/><path d="M19 11a1 1 0 0 0-2 0 4.86 4.86 0 0 1-.69 2.48L17.78 15A7 7 0 0 0 19 11z"/><path d="M12 15h.16L8 10.83V11a4 4 0 0 0 4 4z"/><path d="M20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M15 20h-2v-2.08a7 7 0 0 0 1.65-.44l-1.6-1.6A4.57 4.57 0 0 1 12 16a5 5 0 0 1-5-5 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"/></g></g>',
              "mic-outline": '<g data-name="Layer 2"><g data-name="mic"><rect width="24" height="24" opacity="0"/><path d="M12 15a4 4 0 0 0 4-4V6a4 4 0 0 0-8 0v5a4 4 0 0 0 4 4zm-2-9a2 2 0 0 1 4 0v5a2 2 0 0 1-4 0z"/><path d="M19 11a1 1 0 0 0-2 0 5 5 0 0 1-10 0 1 1 0 0 0-2 0 7 7 0 0 0 6 6.92V20H8.89a.89.89 0 0 0-.89.89v.22a.89.89 0 0 0 .89.89h6.22a.89.89 0 0 0 .89-.89v-.22a.89.89 0 0 0-.89-.89H13v-2.08A7 7 0 0 0 19 11z"/></g></g>',
              "minimize-outline": '<g data-name="Layer 2"><g data-name="minimize"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/><path d="M13 10H9a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/></g></g>',
              "minus-circle-outline": '<g data-name="Layer 2"><g data-name="minus-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"/></g></g>',
              "minus-outline": '<g data-name="Layer 2"><g data-name="minus"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z"/></g></g>',
              "minus-square-outline": '<g data-name="Layer 2"><g data-name="minus-square"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/><path d="M15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"/></g></g>',
              "monitor-outline": '<g data-name="Layer 2"><g data-name="monitor"><rect width="24" height="24" opacity="0"/><path d="M19 3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"/></g></g>',
              "moon-outline": '<g data-name="Layer 2"><g data-name="moon"><rect width="24" height="24" opacity="0"/><path d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3zM7.46 4.92a7.93 7.93 0 0 0-1.37 1.22 8.44 8.44 0 0 0 .2 11.32A8.29 8.29 0 0 0 12.22 20h.08a8.34 8.34 0 0 0 6.78-3.49A10.37 10.37 0 0 1 7.46 4.92z"/></g></g>',
              "more-horizontal-outline": '<g data-name="Layer 2"><g data-name="more-horizotnal"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="5" cy="12" r="2"/></g></g>',
              "more-vertical-outline": '<g data-name="Layer 2"><g data-name="more-vertical"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="19" r="2"/></g></g>',
              "move-outline": '<g data-name="Layer 2"><g data-name="move"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M21.71 11.31l-3-3a1 1 0 0 0-1.42 1.42L18.58 11H13V5.41l1.29 1.3A1 1 0 0 0 15 7a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42l-3-3A1 1 0 0 0 12 2a1 1 0 0 0-.7.29l-3 3a1 1 0 0 0 1.41 1.42L11 5.42V11H5.41l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3A1 1 0 0 0 2 12a1 1 0 0 0 .29.71l3 3A1 1 0 0 0 6 16a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42L5.42 13H11v5.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l3 3A1 1 0 0 0 12 22a1 1 0 0 0 .7-.29l3-3a1 1 0 0 0-1.42-1.42L13 18.58V13h5.59l-1.3 1.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 16a1 1 0 0 0 .71-.29l3-3A1 1 0 0 0 22 12a1 1 0 0 0-.29-.69z"/></g></g>',
              "music-outline": '<g data-name="Layer 2"><g data-name="music"><rect width="24" height="24" opacity="0"/><path d="M19 15V4a1 1 0 0 0-.38-.78 1 1 0 0 0-.84-.2l-9 2A1 1 0 0 0 8 6v8.34a3.49 3.49 0 1 0 2 3.18 4.36 4.36 0 0 0 0-.52V6.8l7-1.55v7.09a3.49 3.49 0 1 0 2 3.17 4.57 4.57 0 0 0 0-.51zM6.54 19A1.49 1.49 0 1 1 8 17.21a1.53 1.53 0 0 1 0 .3A1.49 1.49 0 0 1 6.54 19zm9-2A1.5 1.5 0 1 1 17 15.21a1.53 1.53 0 0 1 0 .3A1.5 1.5 0 0 1 15.51 17z"/></g></g>',
              "navigation-2-outline": '<g data-name="Layer 2"><g data-name="navigation-2"><rect width="24" height="24" opacity="0"/><path d="M13.67 22h-.06a1 1 0 0 1-.92-.8L11 13l-8.2-1.69a1 1 0 0 1-.12-1.93l16-5.33A1 1 0 0 1 20 5.32l-5.33 16a1 1 0 0 1-1 .68zm-6.8-11.9l5.19 1.06a1 1 0 0 1 .79.78l1.05 5.19 3.52-10.55z"/></g></g>',
              "navigation-outline": '<g data-name="Layer 2"><g data-name="navigation"><rect width="24" height="24" opacity="0"/><path d="M20 20a.94.94 0 0 1-.55-.17L12 14.9l-7.45 4.93a1 1 0 0 1-1.44-1.28l8-16a1 1 0 0 1 1.78 0l8 16a1 1 0 0 1-.23 1.2A1 1 0 0 1 20 20zm-8-7.3a1 1 0 0 1 .55.17l4.88 3.23L12 5.24 6.57 16.1l4.88-3.23a1 1 0 0 1 .55-.17z"/></g></g>',
              "npm-outline": '<g data-name="Layer 2"><g data-name="npm"><rect width="24" height="24" opacity="0"/><path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/><rect x="12" y="9" width="4" height="10"/></g></g>',
              "options-2-outline": '<g data-name="Layer 2"><g data-name="options-2"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 9a3 3 0 0 0-2.82 2H3a1 1 0 0 0 0 2h13.18A3 3 0 1 0 19 9zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M3 7h1.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2H9.82a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2zm4-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/><path d="M21 17h-7.18a3 3 0 0 0-5.64 0H3a1 1 0 0 0 0 2h5.18a3 3 0 0 0 5.64 0H21a1 1 0 0 0 0-2zm-10 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
              "options-outline": '<g data-name="Layer 2"><g data-name="options"><rect width="24" height="24" opacity="0"/><path d="M7 14.18V3a1 1 0 0 0-2 0v11.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-1.18a3 3 0 0 0 0-5.64zM6 18a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M21 13a3 3 0 0 0-2-2.82V3a1 1 0 0 0-2 0v7.18a3 3 0 0 0 0 5.64V21a1 1 0 0 0 2 0v-5.18A3 3 0 0 0 21 13zm-3 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M15 5a3 3 0 1 0-4 2.82V21a1 1 0 0 0 2 0V7.82A3 3 0 0 0 15 5zm-3 1a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
              "pantone-outline": '<g data-name="Layer 2"><g data-name="pantone"><rect width="24" height="24" opacity="0"/><path d="M20 13.18h-4.06l2.3-2.47a1 1 0 0 0 0-1.41l-4.19-3.86a.93.93 0 0 0-.71-.26 1 1 0 0 0-.7.31l-1.82 2V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13.09A3.91 3.91 0 0 0 6.91 21H20a1 1 0 0 0 1-1v-5.82a1 1 0 0 0-1-1zm-6.58-5.59l2.67 2.49-5.27 5.66v-5.36zM8.82 10v3H5v-3zm0-5v3H5V5zM5 17.09V15h3.82v2.09a1.91 1.91 0 0 1-3.82 0zM19 19h-8.49l3.56-3.82H19z"/></g></g>',
              "paper-plane-outline": '<g data-name="Layer 2"><g data-name="paper-plane"><rect width="24" height="24" opacity="0"/><path d="M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z"/></g></g>',
              "pause-circle-outline": '<g data-name="Layer 2"><g data-name="pause-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M15 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/><path d="M9 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/></g></g>',
              "people-outline": '<g data-name="Layer 2"><g data-name="people"><rect width="24" height="24" opacity="0"/><path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/><path d="M17 14a5 5 0 0 0-3.06 1.05A7 7 0 0 0 2 20a1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 6.9 6.9 0 0 0-.86-3.35A3 3 0 0 1 20 19a1 1 0 0 0 2 0 5 5 0 0 0-5-5z"/></g></g>',
              "percent-outline": '<g data-name="Layer 2"><g data-name="percent"><rect width="24" height="24" opacity="0"/><path d="M8 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 8 11zm0-5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 6z"/><path d="M16 14a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 16 14zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 19z"/><path d="M19.74 4.26a.89.89 0 0 0-1.26 0L4.26 18.48a.91.91 0 0 0-.26.63.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26z"/></g></g>',
              "person-add-outline": '<g data-name="Layer 2"><g data-name="person-add"><rect width="24" height="24" opacity="0"/><path d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g></g>',
              "person-delete-outline": '<g data-name="Layer 2"><g data-name="person-delete"><rect width="24" height="24" opacity="0"/><path d="M20.47 7.5l.73-.73a1 1 0 0 0-1.47-1.47L19 6l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73-.73.73a1 1 0 0 0 1.47 1.47L19 9l.73.73a1 1 0 0 0 1.47-1.5z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g></g>',
              "person-done-outline": '<g data-name="Layer 2"><g data-name="person-done"><rect width="24" height="24" opacity="0"/><path d="M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33 1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g></g>',
              "person-outline": '<g data-name="Layer 2"><g data-name="person"><rect width="24" height="24" opacity="0"/><path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g></g>',
              "person-remove-outline": '<g data-name="Layer 2"><g data-name="person-remove"><rect width="24" height="24" opacity="0"/><path d="M21 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"/><path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M10 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g></g>',
              "phone-call-outline": '<g data-name="Layer 2"><g data-name="phone-call"><rect width="24" height="24" opacity="0"/><path d="M13 8a3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5 1 1 0 0 0 0 2z"/><path d="M13 4a7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9 1 1 0 0 0 0 2z"/><path d="M21.75 15.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76 4.34 4.34 0 0 0-.19-.73zM17.4 20A13.41 13.41 0 0 1 4 6.6 2.61 2.61 0 0 1 6.6 4h.33L8 8.64l-.54.28c-.86.45-1.54.81-1.18 1.59a11.85 11.85 0 0 0 7.18 7.21c.84.34 1.17-.29 1.62-1.16l.29-.55L20 17.07v.33a2.61 2.61 0 0 1-2.6 2.6z"/></g></g>',
              "phone-missed-outline": '<g data-name="Layer 2"><g data-name="phone-missed"><rect width="24" height="24" opacity="0"/><path d="M21.94 16.64a4.34 4.34 0 0 0-.19-.73 1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10 10 0 0 1-4.88-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76zM17.4 20A13.41 13.41 0 0 1 4 6.6 2.61 2.61 0 0 1 6.6 4h.33L8 8.64l-.55.29c-.87.45-1.5.78-1.17 1.58a11.85 11.85 0 0 0 7.18 7.21c.84.34 1.17-.29 1.62-1.16l.29-.55L20 17.07v.33a2.61 2.61 0 0 1-2.6 2.6z"/><path d="M15.8 8.7a1.05 1.05 0 0 0 1.47 0L18 8l.73.73a1 1 0 0 0 1.47-1.5l-.73-.73.73-.73a1 1 0 0 0-1.47-1.47L18 5l-.73-.73a1 1 0 0 0-1.47 1.5l.73.73-.73.73a1.05 1.05 0 0 0 0 1.47z"/></g></g>',
              "phone-off-outline": '<g data-name="Layer 2"><g data-name="phone-off"><rect width="24" height="24" opacity="0"/><path d="M19.74 4.26a.89.89 0 0 0-1.26 0L4.26 18.48a.91.91 0 0 0-.26.63.89.89 0 0 0 1.52.63L19.74 5.52a.89.89 0 0 0 0-1.26z"/><path d="M6.7 14.63A13.29 13.29 0 0 1 4 6.6 2.61 2.61 0 0 1 6.6 4h.33L8 8.64l-.55.29c-.87.45-1.5.78-1.17 1.58a11.57 11.57 0 0 0 1.57 3l1.43-1.42a10.37 10.37 0 0 1-.8-1.42C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6a15.33 15.33 0 0 0 3.27 9.46z"/><path d="M21.94 16.64a4.34 4.34 0 0 0-.19-.73 1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a10.88 10.88 0 0 1-1.41-.8l-1.43 1.43a11.52 11.52 0 0 0 2.94 1.56c.84.34 1.17-.29 1.62-1.16l.29-.55L20 17.07v.33a2.61 2.61 0 0 1-2.6 2.6 13.29 13.29 0 0 1-8-2.7l-1.46 1.43A15.33 15.33 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76z"/></g></g>',
              "phone-outline": '<g data-name="Layer 2"><g data-name="phone"><rect width="24" height="24" opacity="0"/><path d="M17.4 22A15.42 15.42 0 0 1 2 6.6 4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07 3.79 3.79 0 0 1 .72.18 1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65 4.34 4.34 0 0 1 .19.73 4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22zM6.6 4A2.61 2.61 0 0 0 4 6.6 13.41 13.41 0 0 0 17.4 20a2.61 2.61 0 0 0 2.6-2.6v-.33L15.36 16l-.29.55c-.45.87-.78 1.5-1.62 1.16a11.85 11.85 0 0 1-7.18-7.21c-.36-.78.32-1.14 1.18-1.59L8 8.64 6.93 4z"/></g></g>',
              "pie-chart-outline": '<g data-name="Layer 2"><g data-name="pie-chart"><rect width="24" height="24" opacity="0"/><path d="M13 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 9 9 0 0 0-9-9zm1 8V4.07A7 7 0 0 1 19.93 10z"/><path d="M20.82 14.06a1 1 0 0 0-1.28.61A8 8 0 1 1 9.33 4.46a1 1 0 0 0-.66-1.89 10 10 0 1 0 12.76 12.76 1 1 0 0 0-.61-1.27z"/></g></g>',
              "pin-outline": '<g data-name="Layer 2"><g data-name="pin"><rect width="24" height="24" opacity="0"/><path d="M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2zm0 17.65c-1.67-1.59-6-6-6-9.73a6 6 0 0 1 12 0c0 3.7-4.33 8.14-6 9.73z"/><path d="M12 6a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 6zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 11z"/></g></g>',
              "play-circle-outline": '<g data-name="Layer 2"><g data-name="play-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12.34 7.45a1.7 1.7 0 0 0-1.85-.3 1.6 1.6 0 0 0-1 1.48v6.74a1.6 1.6 0 0 0 1 1.48 1.68 1.68 0 0 0 .69.15 1.74 1.74 0 0 0 1.16-.45L16 13.18a1.6 1.6 0 0 0 0-2.36zm-.84 7.15V9.4l2.81 2.6z"/></g></g>',
              "plus-circle-outline": '<g data-name="Layer 2"><g data-name="plus-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z"/></g></g>',
              "plus-outline": '<g data-name="Layer 2"><g data-name="plus"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/></g></g>',
              "plus-square-outline": '<g data-name="Layer 2"><g data-name="plus-square"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/><path d="M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z"/></g></g>',
              "power-outline": '<g data-name="Layer 2"><g data-name="power"><rect width="24" height="24" opacity="0"/><path d="M12 13a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1z"/><path d="M16.59 3.11a1 1 0 0 0-.92 1.78 8 8 0 1 1-7.34 0 1 1 0 1 0-.92-1.78 10 10 0 1 0 9.18 0z"/></g></g>',
              "pricetags-outline": '<g data-name="Layer 2"><g data-name="pricetags"><rect width="24" height="24" opacity="0"/><path d="M12.87 22a1.84 1.84 0 0 1-1.29-.53l-6.41-6.42a1 1 0 0 1-.29-.61L4 5.09a1 1 0 0 1 .29-.8 1 1 0 0 1 .8-.29l9.35.88a1 1 0 0 1 .61.29l6.42 6.41a1.82 1.82 0 0 1 0 2.57l-7.32 7.32a1.82 1.82 0 0 1-1.28.53zm-6-8.11l6 6 7.05-7.05-6-6-7.81-.73z"/><circle cx="10.5" cy="10.5" r="1.5"/></g></g>',
              "printer-outline": '<g data-name="Layer 2"><g data-name="printer"><rect width="24" height="24" opacity="0"/><path d="M19.36 7H18V5a1.92 1.92 0 0 0-1.83-2H7.83A1.92 1.92 0 0 0 6 5v2H4.64A2.66 2.66 0 0 0 2 9.67v6.66A2.66 2.66 0 0 0 4.64 19h.86a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2h.86A2.66 2.66 0 0 0 22 16.33V9.67A2.66 2.66 0 0 0 19.36 7zM8 5h8v2H8zm-.5 14v-4h9v4zM20 16.33a.66.66 0 0 1-.64.67h-.86v-2a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v2h-.86a.66.66 0 0 1-.64-.67V9.67A.66.66 0 0 1 4.64 9h14.72a.66.66 0 0 1 .64.67z"/></g></g>',
              "question-mark-circle-outline": '<g data-name="Layer 2"><g data-name="menu-arrow-circle"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6a3.5 3.5 0 0 0-3.5 3.5 1 1 0 0 0 2 0A1.5 1.5 0 1 1 12 11a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.16A3.49 3.49 0 0 0 12 6z"/><circle cx="12" cy="17" r="1"/></g></g>',
              "question-mark-outline": '<g data-name="Layer 2"><g data-name="question-mark"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"/><circle cx="12" cy="19" r="1"/></g></g>',
              "radio-button-off-outline": '<g data-name="Layer 2"><g data-name="radio-button-off"><rect width="24" height="24" opacity="0"/><path d="M12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm0-18a8 8 0 1 0 8 8 8 8 0 0 0-8-8z"/></g></g>',
              "radio-button-on-outline": '<g data-name="Layer 2"><g data-name="radio-button-on"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/></g></g>',
              "radio-outline": '<g data-name="Layer 2"><g data-name="radio"><rect width="24" height="24" opacity="0"/><path d="M12 8a3 3 0 0 0-1 5.83 1 1 0 0 0 0 .17v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 0-.17A3 3 0 0 0 12 8zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M3.5 11a6.87 6.87 0 0 1 2.64-5.23 1 1 0 1 0-1.28-1.54A8.84 8.84 0 0 0 1.5 11a8.84 8.84 0 0 0 3.36 6.77 1 1 0 1 0 1.28-1.54A6.87 6.87 0 0 1 3.5 11z"/><path d="M16.64 6.24a1 1 0 0 0-1.28 1.52A4.28 4.28 0 0 1 17 11a4.28 4.28 0 0 1-1.64 3.24A1 1 0 0 0 16 16a1 1 0 0 0 .64-.24A6.2 6.2 0 0 0 19 11a6.2 6.2 0 0 0-2.36-4.76z"/><path d="M8.76 6.36a1 1 0 0 0-1.4-.12A6.2 6.2 0 0 0 5 11a6.2 6.2 0 0 0 2.36 4.76 1 1 0 0 0 1.4-.12 1 1 0 0 0-.12-1.4A4.28 4.28 0 0 1 7 11a4.28 4.28 0 0 1 1.64-3.24 1 1 0 0 0 .12-1.4z"/><path d="M19.14 4.23a1 1 0 1 0-1.28 1.54A6.87 6.87 0 0 1 20.5 11a6.87 6.87 0 0 1-2.64 5.23 1 1 0 0 0 1.28 1.54A8.84 8.84 0 0 0 22.5 11a8.84 8.84 0 0 0-3.36-6.77z"/></g></g>',
              "recording-outline": '<g data-name="Layer 2"><g data-name="recording"><rect width="24" height="24" opacity="0"/><path d="M18 8a4 4 0 0 0-4 4 3.91 3.91 0 0 0 .56 2H9.44a3.91 3.91 0 0 0 .56-2 4 4 0 1 0-4 4h12a4 4 0 0 0 0-8zM4 12a2 2 0 1 1 2 2 2 2 0 0 1-2-2zm14 2a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/></g></g>',
              "refresh-outline": '<g data-name="Layer 2"><g data-name="refresh"><rect width="24" height="24" opacity="0"/><path d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z"/></g></g>',
              "repeat-outline": '<g data-name="Layer 2"><g data-name="repeat"><rect width="24" height="24" opacity="0"/><path d="M17.91 5h-12l1.3-1.29a1 1 0 0 0-1.42-1.42l-3 3a1 1 0 0 0 0 1.42l3 3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5z"/><path d="M18.21 14.29a1 1 0 0 0-1.42 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19h12l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 0-1.42z"/></g></g>',
              "rewind-left-outline": '<g data-name="Layer 2"><g data-name="rewind-left"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18.45 6.2a2.1 2.1 0 0 0-2.21.26l-4.74 3.92V7.79a1.76 1.76 0 0 0-1.05-1.59 2.1 2.1 0 0 0-2.21.26l-5.1 4.21a1.7 1.7 0 0 0 0 2.66l5.1 4.21a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59v-2.59l4.74 3.92a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59zM9.5 16l-4.82-4L9.5 8.09zm8 0l-4.82-4 4.82-3.91z"/></g></g>',
              "rewind-right-outline": '<g data-name="Layer 2"><g data-name="rewind-right"><rect width="24" height="24" opacity="0"/><path d="M20.86 10.67l-5.1-4.21a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1.05 1.59v2.59L7.76 6.46a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l4.74-3.92v2.59a1.76 1.76 0 0 0 1.05 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l5.1-4.21a1.7 1.7 0 0 0 0-2.66zM6.5 15.91V8l4.82 4zm8 0V8l4.82 4z"/></g></g>',
              "save-outline": '<g data-name="Layer 2"><g data-name="save"><rect width="24" height="24" opacity="0"/><path d="M20.12 8.71l-4.83-4.83A3 3 0 0 0 13.17 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7.17a3 3 0 0 0-.88-2.12zM10 19v-2h4v2zm9-1a1 1 0 0 1-1 1h-2v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2v5a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2h-3V5h3.17a1.05 1.05 0 0 1 .71.29l4.83 4.83a1 1 0 0 1 .29.71z"/></g></g>',
              "scissors-outline": '<g data-name="Layer 2"><g data-name="scissors"><rect width="24" height="24" opacity="0"/><path d="M20.21 5.71a1 1 0 1 0-1.42-1.42l-6.28 6.31-3.3-3.31A3 3 0 0 0 9.5 6a3 3 0 1 0-3 3 3 3 0 0 0 1.29-.3L11.1 12l-3.29 3.3A3 3 0 0 0 6.5 15a3 3 0 1 0 3 3 3 3 0 0 0-.29-1.26zM6.5 7a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path d="M15.21 13.29a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g>',
              "search-outline": '<g data-name="Layer 2"><g data-name="search"><rect width="24" height="24" opacity="0"/><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"/></g></g>',
              "settings-2-outline": '<g data-name="Layer 2"><g data-name="settings-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12.94 22h-1.89a1.68 1.68 0 0 1-1.68-1.68v-1.09a.34.34 0 0 0-.22-.29.38.38 0 0 0-.41 0l-.74.8a1.67 1.67 0 0 1-2.37 0L4.26 18.4a1.66 1.66 0 0 1-.5-1.19 1.72 1.72 0 0 1 .5-1.21l.74-.74a.34.34 0 0 0 0-.37c-.06-.15-.16-.26-.3-.26H3.68A1.69 1.69 0 0 1 2 12.94v-1.89a1.68 1.68 0 0 1 1.68-1.68h1.09a.34.34 0 0 0 .29-.22.38.38 0 0 0 0-.41L4.26 8a1.67 1.67 0 0 1 0-2.37L5.6 4.26a1.65 1.65 0 0 1 1.18-.5 1.72 1.72 0 0 1 1.22.5l.74.74a.34.34 0 0 0 .37 0c.15-.06.26-.16.26-.3V3.68A1.69 1.69 0 0 1 11.06 2H13a1.68 1.68 0 0 1 1.68 1.68v1.09a.34.34 0 0 0 .22.29.38.38 0 0 0 .41 0l.69-.8a1.67 1.67 0 0 1 2.37 0l1.37 1.34a1.67 1.67 0 0 1 .5 1.19 1.63 1.63 0 0 1-.5 1.21l-.74.74a.34.34 0 0 0 0 .37c.06.15.16.26.3.26h1.09A1.69 1.69 0 0 1 22 11.06V13a1.68 1.68 0 0 1-1.68 1.68h-1.09a.34.34 0 0 0-.29.22.34.34 0 0 0 0 .37l.77.77a1.67 1.67 0 0 1 0 2.37l-1.31 1.33a1.65 1.65 0 0 1-1.18.5 1.72 1.72 0 0 1-1.19-.5l-.77-.74a.34.34 0 0 0-.37 0c-.15.06-.26.16-.26.3v1.09A1.69 1.69 0 0 1 12.94 22zm-1.57-2h1.26v-.77a2.33 2.33 0 0 1 1.46-2.14 2.36 2.36 0 0 1 2.59.47l.54.54.88-.88-.54-.55a2.34 2.34 0 0 1-.48-2.56 2.33 2.33 0 0 1 2.14-1.45H20v-1.29h-.77a2.33 2.33 0 0 1-2.14-1.46 2.36 2.36 0 0 1 .47-2.59l.54-.54-.88-.88-.55.54a2.39 2.39 0 0 1-4-1.67V4h-1.3v.77a2.33 2.33 0 0 1-1.46 2.14 2.36 2.36 0 0 1-2.59-.47l-.54-.54-.88.88.54.55a2.39 2.39 0 0 1-1.67 4H4v1.26h.77a2.33 2.33 0 0 1 2.14 1.46 2.36 2.36 0 0 1-.47 2.59l-.54.54.88.88.55-.54a2.39 2.39 0 0 1 4 1.67z" data-name="&lt;Group&gt;"/><path d="M12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z"/></g></g>',
              "settings-outline": '<g data-name="Layer 2"><g data-name="settings"><rect width="24" height="24" opacity="0"/><path d="M8.61 22a2.25 2.25 0 0 1-1.35-.46L5.19 20a2.37 2.37 0 0 1-.49-3.22 2.06 2.06 0 0 0 .23-1.86l-.06-.16a1.83 1.83 0 0 0-1.12-1.22h-.16a2.34 2.34 0 0 1-1.48-2.94L2.93 8a2.18 2.18 0 0 1 1.12-1.41 2.14 2.14 0 0 1 1.68-.12 1.93 1.93 0 0 0 1.78-.29l.13-.1a1.94 1.94 0 0 0 .73-1.51v-.24A2.32 2.32 0 0 1 10.66 2h2.55a2.26 2.26 0 0 1 1.6.67 2.37 2.37 0 0 1 .68 1.68v.28a1.76 1.76 0 0 0 .69 1.43l.11.08a1.74 1.74 0 0 0 1.59.26l.34-.11A2.26 2.26 0 0 1 21.1 7.8l.79 2.52a2.36 2.36 0 0 1-1.46 2.93l-.2.07A1.89 1.89 0 0 0 19 14.6a2 2 0 0 0 .25 1.65l.26.38a2.38 2.38 0 0 1-.5 3.23L17 21.41a2.24 2.24 0 0 1-3.22-.53l-.12-.17a1.75 1.75 0 0 0-1.5-.78 1.8 1.8 0 0 0-1.43.77l-.23.33A2.25 2.25 0 0 1 9 22a2 2 0 0 1-.39 0zM4.4 11.62a3.83 3.83 0 0 1 2.38 2.5v.12a4 4 0 0 1-.46 3.62.38.38 0 0 0 0 .51L8.47 20a.25.25 0 0 0 .37-.07l.23-.33a3.77 3.77 0 0 1 6.2 0l.12.18a.3.3 0 0 0 .18.12.25.25 0 0 0 .19-.05l2.06-1.56a.36.36 0 0 0 .07-.49l-.26-.38A4 4 0 0 1 17.1 14a3.92 3.92 0 0 1 2.49-2.61l.2-.07a.34.34 0 0 0 .19-.44l-.78-2.49a.35.35 0 0 0-.2-.19.21.21 0 0 0-.19 0l-.34.11a3.74 3.74 0 0 1-3.43-.57L15 7.65a3.76 3.76 0 0 1-1.49-3v-.31a.37.37 0 0 0-.1-.26.31.31 0 0 0-.21-.08h-2.54a.31.31 0 0 0-.29.33v.25a3.9 3.9 0 0 1-1.52 3.09l-.13.1a3.91 3.91 0 0 1-3.63.59.22.22 0 0 0-.14 0 .28.28 0 0 0-.12.15L4 11.12a.36.36 0 0 0 .22.45z" data-name="&lt;Group&gt;"/><path d="M12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z"/></g></g>',
              "shake-outline": '<g data-name="Layer 2"><g data-name="shake"><rect width="24" height="24" opacity="0"/><path d="M5.5 18a1 1 0 0 1-.64-.24A8.81 8.81 0 0 1 1.5 11a8.81 8.81 0 0 1 3.36-6.76 1 1 0 1 1 1.28 1.52A6.9 6.9 0 0 0 3.5 11a6.9 6.9 0 0 0 2.64 5.24 1 1 0 0 1 .13 1.4 1 1 0 0 1-.77.36z"/><path d="M12 7a4.09 4.09 0 0 1 1 .14V3a1 1 0 0 0-2 0v4.14A4.09 4.09 0 0 1 12 7z"/><path d="M12 15a4.09 4.09 0 0 1-1-.14V20a1 1 0 0 0 2 0v-5.14a4.09 4.09 0 0 1-1 .14z"/><path d="M16 16a1 1 0 0 1-.77-.36 1 1 0 0 1 .13-1.4A4.28 4.28 0 0 0 17 11a4.28 4.28 0 0 0-1.64-3.24 1 1 0 1 1 1.28-1.52A6.2 6.2 0 0 1 19 11a6.2 6.2 0 0 1-2.36 4.76A1 1 0 0 1 16 16z"/><path d="M8 16a1 1 0 0 1-.64-.24A6.2 6.2 0 0 1 5 11a6.2 6.2 0 0 1 2.36-4.76 1 1 0 1 1 1.28 1.52A4.28 4.28 0 0 0 7 11a4.28 4.28 0 0 0 1.64 3.24 1 1 0 0 1 .13 1.4A1 1 0 0 1 8 16z"/><path d="M18.5 18a1 1 0 0 1-.77-.36 1 1 0 0 1 .13-1.4A6.9 6.9 0 0 0 20.5 11a6.9 6.9 0 0 0-2.64-5.24 1 1 0 1 1 1.28-1.52A8.81 8.81 0 0 1 22.5 11a8.81 8.81 0 0 1-3.36 6.76 1 1 0 0 1-.64.24z"/><path d="M12 12a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0-1zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0z"/></g></g>',
              "share-outline": '<g data-name="Layer 2"><g data-name="share"><rect width="24" height="24" opacity="0"/><path d="M18 15a3 3 0 0 0-2.1.86L8 12.34V12v-.33l7.9-3.53A3 3 0 1 0 15 6v.34L7.1 9.86a3 3 0 1 0 0 4.28l7.9 3.53V18a3 3 0 1 0 3-3zm0-10a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM5 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm13 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
              "shield-off-outline": '<g data-name="Layer 2"><g data-name="shield-off"><rect width="24" height="24" opacity="0"/><path d="M4.71 3.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M12.3 19.68l-.3.17-.3-.17A13.15 13.15 0 0 1 5 8.23v-.14L5.16 8 3.73 6.56A2 2 0 0 0 3 8.09v.14a15.17 15.17 0 0 0 7.72 13.2l.3.17a2 2 0 0 0 2 0l.3-.17a15.22 15.22 0 0 0 3-2.27l-1.42-1.42a12.56 12.56 0 0 1-2.6 1.94z"/><path d="M20 6.34L13 2.4a2 2 0 0 0-2 0L7.32 4.49 8.78 6 12 4.15l7 3.94v.14a13 13 0 0 1-1.63 6.31L18.84 16A15.08 15.08 0 0 0 21 8.23v-.14a2 2 0 0 0-1-1.75z"/></g></g>',
              "shield-outline": '<g data-name="Layer 2"><g data-name="shield"><rect width="24" height="24" opacity="0"/><path d="M12 21.85a2 2 0 0 1-1-.25l-.3-.17A15.17 15.17 0 0 1 3 8.23v-.14a2 2 0 0 1 1-1.75l7-3.94a2 2 0 0 1 2 0l7 3.94a2 2 0 0 1 1 1.75v.14a15.17 15.17 0 0 1-7.72 13.2l-.3.17a2 2 0 0 1-.98.25zm0-17.7L5 8.09v.14a13.15 13.15 0 0 0 6.7 11.45l.3.17.3-.17A13.15 13.15 0 0 0 19 8.23v-.14z"/></g></g>',
              "shopping-bag-outline": '<g data-name="Layer 2"><g data-name="shopping-bag"><rect width="24" height="24" opacity="0"/><path d="M20.12 6.71l-2.83-2.83A3 3 0 0 0 15.17 3H8.83a3 3 0 0 0-2.12.88L3.88 6.71A3 3 0 0 0 3 8.83V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.83a3 3 0 0 0-.88-2.12zm-12-1.42A1.05 1.05 0 0 1 8.83 5h6.34a1.05 1.05 0 0 1 .71.29L17.59 7H6.41zM18 19H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1z"/><path d="M15 11a1 1 0 0 0-1 1 2 2 0 0 1-4 0 1 1 0 0 0-2 0 4 4 0 0 0 8 0 1 1 0 0 0-1-1z"/></g></g>',
              "shopping-cart-outline": '<g data-name="Layer 2"><g data-name="shopping-cart"><rect width="24" height="24" opacity="0"/><path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z"/><circle cx="7.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></g></g>',
              "shuffle-2-outline": '<g data-name="Layer 2"><g data-name="shuffle-2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18.71 14.29a1 1 0 0 0-1.42 1.42l.29.29H16a4 4 0 0 1 0-8h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 10a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 7a1 1 0 0 0-.29-.71l-2-2a1 1 0 0 0-1.42 1.42l.29.29H16a6 6 0 0 0-5 2.69A6 6 0 0 0 6 6H4a1 1 0 0 0 0 2h2a4 4 0 0 1 0 8H4a1 1 0 0 0 0 2h2a6 6 0 0 0 5-2.69A6 6 0 0 0 16 18h1.59l-.3.29a1 1 0 0 0 0 1.42A1 1 0 0 0 18 20a1 1 0 0 0 .71-.29l2-2A1 1 0 0 0 21 17a1 1 0 0 0-.29-.71z"/></g></g>',
              "shuffle-outline": '<g data-name="Layer 2"><g data-name="shuffle"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M18 9.31a1 1 0 0 0 1 1 1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4.3a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1.89L12 10.59 6.16 4.76a1 1 0 0 0-1.41 1.41L10.58 12l-6.29 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L18 7.42z"/><path d="M19 13.68a1 1 0 0 0-1 1v1.91l-2.78-2.79a1 1 0 0 0-1.42 1.42L16.57 18h-1.88a1 1 0 0 0 0 2H19a1 1 0 0 0 1-1.11v-4.21a1 1 0 0 0-1-1z"/></g></g>',
              "skip-back-outline": '<g data-name="Layer 2"><g data-name="skip-back"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M16.45 6.2a2.1 2.1 0 0 0-2.21.26l-5.1 4.21-.14.15V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-3.82l.14.15 5.1 4.21a2.06 2.06 0 0 0 1.3.46 2.23 2.23 0 0 0 .91-.2 1.76 1.76 0 0 0 1.05-1.59V7.79a1.76 1.76 0 0 0-1.05-1.59zM15.5 16l-4.82-4 4.82-3.91z"/></g></g>',
              "skip-forward-outline": '<g data-name="Layer 2"><g data-name="skip-forward"><rect width="24" height="24" opacity="0"/><path d="M16 6a1 1 0 0 0-1 1v3.82l-.14-.15-5.1-4.21a2.1 2.1 0 0 0-2.21-.26 1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59 2.23 2.23 0 0 0 .91.2 2.06 2.06 0 0 0 1.3-.46l5.1-4.21.14-.15V17a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1zm-7.5 9.91V8l4.82 4z"/></g></g>',
              "slash-outline": '<g data-name="Layer 2"><g data-name="slash"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm8 10a7.92 7.92 0 0 1-1.69 4.9L7.1 5.69A7.92 7.92 0 0 1 12 4a8 8 0 0 1 8 8zM4 12a7.92 7.92 0 0 1 1.69-4.9L16.9 18.31A7.92 7.92 0 0 1 12 20a8 8 0 0 1-8-8z"/></g></g>',
              "smartphone-outline": '<g data-name="Layer 2"><g data-name="smartphone"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"/><circle cx="12" cy="16.5" r="1.5"/><path d="M14.5 6h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2z"/></g></g>',
              "smiling-face-outline": '<defs><style/></defs><g id="Layer_2" data-name="Layer 2"><g id="smiling-face"><g id="smiling-face" data-name="smiling-face"><rect width="24" height="24" opacity="0"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm5 9a5 5 0 0 1-10 0z" id="&#x1F3A8;-Icon-&#x421;olor"/></g></g></g>',
              "speaker-outline": '<g data-name="Layer 2"><g data-name="speaker"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M12 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/><path d="M12 12a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 12zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 17z"/><path d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"/></g></g>',
              "square-outline": '<g data-name="Layer 2"><g data-name="square"><rect width="24" height="24" opacity="0"/><path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/></g></g>',
              "star-outline": '<g data-name="Layer 2"><g data-name="star"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18zM12 16.1a.92.92 0 0 1 .46.11l3.77 2-.72-4.21a1 1 0 0 1 .29-.89l3-2.93-4.2-.62a1 1 0 0 1-.71-.56L12 5.25 10.11 9a1 1 0 0 1-.75.54l-4.2.62 3 2.93a1 1 0 0 1 .29.89l-.72 4.16 3.77-2a.92.92 0 0 1 .5-.04z"/></g></g>',
              "stop-circle-outline": '<g data-name="Layer 2"><g data-name="stop-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M14.75 8h-5.5A1.25 1.25 0 0 0 8 9.25v5.5A1.25 1.25 0 0 0 9.25 16h5.5A1.25 1.25 0 0 0 16 14.75v-5.5A1.25 1.25 0 0 0 14.75 8zM14 14h-4v-4h4z"/></g></g>',
              "sun-outline": '<g data-name="Layer 2"><g data-name="sun"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z"/><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z"/><path d="M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z"/><path d="M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z"/><path d="M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"/><path d="M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z"/><path d="M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z"/><path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/></g></g>',
              "swap-outline": '<g data-name="Layer 2"><g data-name="swap"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M4 9h13l-1.6 1.2a1 1 0 0 0-.2 1.4 1 1 0 0 0 .8.4 1 1 0 0 0 .6-.2l4-3a1 1 0 0 0 0-1.59l-3.86-3a1 1 0 0 0-1.23 1.58L17.08 7H4a1 1 0 0 0 0 2z"/><path d="M20 16H7l1.6-1.2a1 1 0 0 0-1.2-1.6l-4 3a1 1 0 0 0 0 1.59l3.86 3a1 1 0 0 0 .61.21 1 1 0 0 0 .79-.39 1 1 0 0 0-.17-1.4L6.92 18H20a1 1 0 0 0 0-2z"/></g></g>',
              "sync-outline": '<g data-name="Layer 2"><g data-name="sync"><rect width="24" height="24" opacity="0"/><path d="M21.66 10.37a.62.62 0 0 0 .07-.19l.75-4a1 1 0 0 0-2-.36l-.37 2a9.22 9.22 0 0 0-16.58.84 1 1 0 0 0 .55 1.3 1 1 0 0 0 1.31-.55A7.08 7.08 0 0 1 12.07 5a7.17 7.17 0 0 1 6.24 3.58l-1.65-.27a1 1 0 1 0-.32 2l4.25.71h.16a.93.93 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.08-.1a1.07 1.07 0 0 0 .14-.16.58.58 0 0 0 .05-.16z"/><path d="M19.88 14.07a1 1 0 0 0-1.31.56A7.08 7.08 0 0 1 11.93 19a7.17 7.17 0 0 1-6.24-3.58l1.65.27h.16a1 1 0 0 0 .16-2L3.41 13a.91.91 0 0 0-.33 0H3a1.15 1.15 0 0 0-.32.14 1 1 0 0 0-.18.18l-.09.1a.84.84 0 0 0-.07.19.44.44 0 0 0-.07.17l-.75 4a1 1 0 0 0 .8 1.22h.18a1 1 0 0 0 1-.82l.37-2a9.22 9.22 0 0 0 16.58-.83 1 1 0 0 0-.57-1.28z"/></g></g>',
              "text-outline": '<g data-name="Layer 2"><g data-name="text"><rect width="24" height="24" opacity="0"/><path d="M20 4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h6v13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V6h6v2a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"/></g></g>',
              "thermometer-minus-outline": '<g data-name="Layer 2"><g data-name="thermometer-minus"><rect width="24" height="24" opacity="0"/><rect x="2" y="5" width="6" height="2" rx="1" ry="1"/><path d="M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm0-18a1 1 0 0 0-1 1v8.54a1 1 0 0 1-.5.87A3 3 0 0 0 11 17a3 3 0 0 0 6 0 3 3 0 0 0-1.5-2.59 1 1 0 0 1-.5-.87V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4z"/></g></g>',
              "thermometer-outline": '<g data-name="Layer 2"><g data-name="thermometer"><rect width="24" height="24" opacity="0"/><path d="M12 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm0-18a1 1 0 0 0-1 1v8.54a1 1 0 0 1-.5.87A3 3 0 0 0 9 17a3 3 0 0 0 6 0 3 3 0 0 0-1.5-2.59 1 1 0 0 1-.5-.87V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 12 4z"/></g></g>',
              "thermometer-plus-outline": '<g data-name="Layer 2"><g data-name="thermometer-plus"><rect width="24" height="24" opacity="0"/><rect x="2" y="5" width="6" height="2" rx="1" ry="1"/><rect x="2" y="5" width="6" height="2" rx="1" ry="1" transform="rotate(-90 5 6)"/><path d="M14 22a5 5 0 0 1-3-9V5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v8a5 5 0 0 1-3 9zm0-18a1 1 0 0 0-1 1v8.54a1 1 0 0 1-.5.87A3 3 0 0 0 11 17a3 3 0 0 0 6 0 3 3 0 0 0-1.5-2.59 1 1 0 0 1-.5-.87V5a.93.93 0 0 0-.29-.69A1 1 0 0 0 14 4z"/></g></g>',
              "toggle-left-outline": '<g data-name="Layer 2"><g data-name="toggle-left"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zm0 12H9A5 5 0 0 1 9 7h6a5 5 0 0 1 0 10z"/><path d="M9 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
              "toggle-right-outline": '<g data-name="Layer 2"><g data-name="toggle-right"><rect width="24" height="24" opacity="0"/><path d="M15 5H9a7 7 0 0 0 0 14h6a7 7 0 0 0 0-14zm0 12H9A5 5 0 0 1 9 7h6a5 5 0 0 1 0 10z"/><path d="M15 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
              "trash-2-outline": '<g data-name="Layer 2"><g data-name="trash-2"><rect width="24" height="24" opacity="0"/><path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"/><path d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"/><path d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"/></g></g>',
              "trash-outline": '<g data-name="Layer 2"><g data-name="trash"><rect width="24" height="24" opacity="0"/><path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"/></g></g>',
              "trending-down-outline": '<g data-name="Layer 2"><g data-name="trending-down"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M21 12a1 1 0 0 0-2 0v2.3l-4.24-5a1 1 0 0 0-1.27-.21L9.22 11.7 4.77 6.36a1 1 0 1 0-1.54 1.28l5 6a1 1 0 0 0 1.28.22l4.28-2.57 4 4.71H15a1 1 0 0 0 0 2h5a1.1 1.1 0 0 0 .36-.07l.14-.08a1.19 1.19 0 0 0 .15-.09.75.75 0 0 0 .14-.17 1.1 1.1 0 0 0 .09-.14.64.64 0 0 0 .05-.17A.78.78 0 0 0 21 17z"/></g></g>',
              "trending-up-outline": '<g data-name="Layer 2"><g data-name="trending-up"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M21 7a.78.78 0 0 0 0-.21.64.64 0 0 0-.05-.17 1.1 1.1 0 0 0-.09-.14.75.75 0 0 0-.14-.17l-.12-.07a.69.69 0 0 0-.19-.1h-.2A.7.7 0 0 0 20 6h-5a1 1 0 0 0 0 2h2.83l-4 4.71-4.32-2.57a1 1 0 0 0-1.28.22l-5 6a1 1 0 0 0 .13 1.41A1 1 0 0 0 4 18a1 1 0 0 0 .77-.36l4.45-5.34 4.27 2.56a1 1 0 0 0 1.27-.21L19 9.7V12a1 1 0 0 0 2 0V7z"/></g></g>',
              "tv-outline": '<g data-name="Layer 2"><g data-name="tv"><rect width="24" height="24" opacity="0"/><path d="M18 6h-3.59l2.3-2.29a1 1 0 1 0-1.42-1.42L12 5.59l-3.29-3.3a1 1 0 1 0-1.42 1.42L9.59 6H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z"/></g></g>',
              "twitter-outline": '<g data-name="Layer 2"><g data-name="twitter"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M8.51 20h-.08a10.87 10.87 0 0 1-4.65-1.09A1.38 1.38 0 0 1 3 17.47a1.41 1.41 0 0 1 1.16-1.18 6.63 6.63 0 0 0 2.54-.89 9.49 9.49 0 0 1-3.51-9.07 1.41 1.41 0 0 1 1-1.15 1.35 1.35 0 0 1 1.43.41 7.09 7.09 0 0 0 4.88 2.75 4.5 4.5 0 0 1 1.41-3.1 4.47 4.47 0 0 1 6.37.19.7.7 0 0 0 .78.1A1.39 1.39 0 0 1 21 7.13a6.66 6.66 0 0 1-1.28 2.6A10.79 10.79 0 0 1 8.51 20zm0-2h.08a8.79 8.79 0 0 0 9.09-8.59 1.32 1.32 0 0 1 .37-.85 5.19 5.19 0 0 0 .62-1 2.56 2.56 0 0 1-1.91-.85A2.45 2.45 0 0 0 15 6a2.5 2.5 0 0 0-1.79.69 2.53 2.53 0 0 0-.72 2.42l.26 1.14-1.17.08a8.3 8.3 0 0 1-6.54-2.4 7.12 7.12 0 0 0 3.73 6.46l.95.54-.63.9a5.62 5.62 0 0 1-2.68 1.92A8.34 8.34 0 0 0 8.5 18zM19 6.65z"/></g></g>',
              "umbrella-outline": '<g data-name="Layer 2"><g data-name="umbrella"><rect width="24" height="24" opacity="0"/><path d="M12 2A10 10 0 0 0 2 12a1 1 0 0 0 1 1h8v6a3 3 0 0 0 6 0 1 1 0 0 0-2 0 1 1 0 0 1-2 0v-6h8a1 1 0 0 0 1-1A10 10 0 0 0 12 2zm-7.94 9a8 8 0 0 1 15.88 0z"/></g></g>',
              "undo-outline": '<g data-name="Layer 2"><g data-name="undo"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M20.22 21a1 1 0 0 1-1-.76 8.91 8.91 0 0 0-7.8-6.69v1.12a1.78 1.78 0 0 1-1.09 1.64A2 2 0 0 1 8.18 16l-5.06-4.41a1.76 1.76 0 0 1 0-2.68l5.06-4.42a2 2 0 0 1 2.18-.3 1.78 1.78 0 0 1 1.09 1.64V7A10.89 10.89 0 0 1 21.5 17.75a10.29 10.29 0 0 1-.31 2.49 1 1 0 0 1-1 .76zm-9.77-9.5a11.07 11.07 0 0 1 8.81 4.26A9 9 0 0 0 10.45 9a1 1 0 0 1-1-1V6.08l-4.82 4.17 4.82 4.21v-2a1 1 0 0 1 1-.96z"/></g></g>',
              "unlock-outline": '<g data-name="Layer 2"><g data-name="unlock"><rect width="24" height="24" opacity="0"/><path d="M17 8h-7V6a2 2 0 0 1 4 0 1 1 0 0 0 2 0 4 4 0 0 0-8 0v2H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm1 11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z"/><path d="M12 12a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/></g></g>',
              "upload-outline": '<g data-name="Layer 2"><g data-name="upload"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect x="4" y="4" width="16" height="2" rx="1" ry="1" transform="rotate(180 12 5)"/><rect x="17" y="5" width="4" height="2" rx="1" ry="1" transform="rotate(90 19 6)"/><rect x="3" y="5" width="4" height="2" rx="1" ry="1" transform="rotate(90 5 6)"/><path d="M8 14a1 1 0 0 1-.8-.4 1 1 0 0 1 .2-1.4l4-3a1 1 0 0 1 1.18 0l4 2.82a1 1 0 0 1 .24 1.39 1 1 0 0 1-1.4.24L12 11.24 8.6 13.8a1 1 0 0 1-.6.2z"/><path d="M12 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"/></g></g>',
              "video-off-outline": '<g data-name="Layer 2"><g data-name="video-off"><rect width="24" height="24" opacity="0"/><path d="M17 15.59l-2-2L8.41 7l-2-2-1.7-1.71a1 1 0 0 0-1.42 1.42l.54.53L5.59 7l9.34 9.34 1.46 1.46 2.9 2.91a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M14 17H5a1 1 0 0 1-1-1V8a1 1 0 0 1 .4-.78L3 5.8A3 3 0 0 0 2 8v8a3 3 0 0 0 3 3h9a2.94 2.94 0 0 0 1.66-.51L14.14 17a.7.7 0 0 1-.14 0z"/><path d="M21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H7.83l2 2H14a1 1 0 0 1 1 1v4.17l4.72 4.72a1.73 1.73 0 0 0 .6.11 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48V8.63A1.6 1.6 0 0 0 21 7.15zm-1 7.45L17.19 12 20 9.4z"/></g></g>',
              "video-outline": '<g data-name="Layer 2"><g data-name="video"><rect width="24" height="24" opacity="0"/><path d="M21 7.15a1.7 1.7 0 0 0-1.85.3l-2.15 2V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-1.45l2.16 2a1.74 1.74 0 0 0 1.16.45 1.68 1.68 0 0 0 .69-.15 1.6 1.6 0 0 0 1-1.48V8.63A1.6 1.6 0 0 0 21 7.15zM15 16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1zm5-1.4L17.19 12 20 9.4z"/></g></g>',
              "volume-down-outline": '<g data-name="Layer 2"><g data-name="volume-down"><rect width="24" height="24" opacity="0"/><path d="M20.78 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 20 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z"/><path d="M16.47 3.12a1 1 0 0 0-1 0L9 7.57H4a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4A1.06 1.06 0 0 0 16 21a1 1 0 0 0 1-1V4a1 1 0 0 0-.53-.88zM15 18.1l-5.1-3.5a1 1 0 0 0-.57-.17H5V9.57h4.33a1 1 0 0 0 .57-.17L15 5.9z"/></g></g>',
              "volume-mute-outline": '<g data-name="Layer 2"><g data-name="volume-mute"><rect width="24" height="24" opacity="0"/><path d="M17 21a1.06 1.06 0 0 1-.57-.17L10 16.43H5a1 1 0 0 1-1-1V8.57a1 1 0 0 1 1-1h5l6.41-4.4A1 1 0 0 1 18 4v16a1 1 0 0 1-1 1zM6 14.43h4.33a1 1 0 0 1 .57.17l5.1 3.5V5.9l-5.1 3.5a1 1 0 0 1-.57.17H6z"/></g></g>',
              "volume-off-outline": '<g data-name="Layer 2"><g data-name="volume-off"><rect width="24" height="24" opacity="0"/><path d="M4.71 3.29a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M16.91 14.08l1.44 1.44a6 6 0 0 0-.07-7.15 1 1 0 1 0-1.56 1.26 4 4 0 0 1 .19 4.45z"/><path d="M21 12a6.51 6.51 0 0 1-1.78 4.39l1.42 1.42A8.53 8.53 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77 1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12z"/><path d="M13.5 18.1l-5.1-3.5a1 1 0 0 0-.57-.17H3.5V9.57h3.24l-2-2H2.5a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4a1.06 1.06 0 0 0 .57.17 1 1 0 0 0 1-1v-1.67l-2-2z"/><path d="M13.5 5.9v4.77l2 2V4a1 1 0 0 0-1.57-.83L9.23 6.4l1.44 1.44z"/></g></g>',
              "volume-up-outline": '<g data-name="Layer 2"><g data-name="volume-up"><rect width="24" height="24" opacity="0"/><path d="M18.28 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z"/><path d="M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23 1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77z"/><path d="M15 3.12a1 1 0 0 0-1 0L7.52 7.57h-5a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4a1.06 1.06 0 0 0 .57.17 1 1 0 0 0 1-1V4a1 1 0 0 0-.5-.88zm-1.47 15L8.4 14.6a1 1 0 0 0-.57-.17H3.5V9.57h4.33a1 1 0 0 0 .57-.17l5.1-3.5z"/></g></g>',
              "wifi-off-outline": '<g data-name="Layer 2"><g data-name="wifi-off"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="19" r="1"/><path d="M12.44 11l-1.9-1.89-2.46-2.44-1.55-1.55-1.82-1.83a1 1 0 0 0-1.42 1.42l1.38 1.37 1.46 1.46 2.23 2.24 1.55 1.54 2.74 2.74 2.79 2.8 3.85 3.85a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/><path d="M21.72 7.93A13.93 13.93 0 0 0 12 4a14.1 14.1 0 0 0-4.44.73l1.62 1.62a11.89 11.89 0 0 1 11.16 3 1 1 0 0 0 .69.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.03-1.39z"/><path d="M3.82 6.65a14.32 14.32 0 0 0-1.54 1.28 1 1 0 0 0 1.38 1.44 13.09 13.09 0 0 1 1.6-1.29z"/><path d="M17 13.14a1 1 0 0 0 .71.3 1 1 0 0 0 .72-1.69A9 9 0 0 0 12 9h-.16l2.35 2.35A7 7 0 0 1 17 13.14z"/><path d="M7.43 10.26a8.8 8.8 0 0 0-1.9 1.49A1 1 0 0 0 7 13.14a7.3 7.3 0 0 1 2-1.41z"/><path d="M8.53 15.4a1 1 0 1 0 1.39 1.44 3.06 3.06 0 0 1 3.84-.25l-2.52-2.52a5 5 0 0 0-2.71 1.33z"/></g></g>',
              "wifi-outline": '<g data-name="Layer 2"><g data-name="wifi"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="19" r="1"/><path d="M12 14a5 5 0 0 0-3.47 1.4 1 1 0 1 0 1.39 1.44 3.08 3.08 0 0 1 4.16 0 1 1 0 1 0 1.39-1.44A5 5 0 0 0 12 14z"/><path d="M12 9a9 9 0 0 0-6.47 2.75A1 1 0 0 0 7 13.14a7 7 0 0 1 10.08 0 1 1 0 0 0 .71.3 1 1 0 0 0 .72-1.69A9 9 0 0 0 12 9z"/><path d="M21.72 7.93a14 14 0 0 0-19.44 0 1 1 0 0 0 1.38 1.44 12 12 0 0 1 16.68 0 1 1 0 0 0 .69.28 1 1 0 0 0 .72-.31 1 1 0 0 0-.03-1.41z"/></g></g>'
            }
          },
        "./package/src/animation.scss":
          /*!************************************!*\
            !*** ./package/src/animation.scss ***!
            \************************************/
          /*! no static exports found */
          function (t, e, a) {
            var i = a( /*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./animation.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./package/src/animation.scss"),
              r = a( /*! ../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js"),
              n = "string" == typeof i ? [
                [t.i, i, ""]
              ] : i;
            (e = t.exports = i.locals || {})._getContent = function () {
              return n
            }, e._getCss = function () {
              return "" + i
            }, e._insertCss = function (t) {
              return r(n, t)
            }
          },
        "./package/src/default-attrs.json":
          /*!****************************************!*\
            !*** ./package/src/default-attrs.json ***!
            \****************************************/
          /*! exports provided: xmlns, width, height, viewBox, default */
          function (t) {
            t.exports = {
              xmlns: "http://www.w3.org/2000/svg",
              width: 24,
              height: 24,
              viewBox: "0 0 24 24"
            }
          },
        "./package/src/icon.js":
          /*!*****************************!*\
            !*** ./package/src/icon.js ***!
            \*****************************/
          /*! exports provided: default */
          function (t, e, a) {
            "use strict";
            a.r(e);
            var i = a( /*! classnames/dedupe */ "./node_modules/classnames/dedupe.js"),
              r = a.n(i),
              n = a( /*! ./default-attrs.json */ "./package/src/default-attrs.json");

            function o(t, e) {
              if (null == t) return {};
              var a, i, r = function (t, e) {
                if (null == t) return {};
                var a, i, r = {},
                  n = Object.keys(t);
                for (i = 0; i < n.length; i++) a = n[i], e.indexOf(a) >= 0 || (r[a] = t[a]);
                return r
              }(t, e);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                for (i = 0; i < n.length; i++) a = n[i], e.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(t, a) && (r[a] = t[a])
              }
              return r
            }

            function s(t) {
              for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {},
                  i = Object.keys(a);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter((function (t) {
                  return Object.getOwnPropertyDescriptor(a, t).enumerable
                })))), i.forEach((function (e) {
                  l(t, e, a[e])
                }))
              }
              return t
            }

            function l(t, e, a) {
              return e in t ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = a, t
            }

            function c(t, e) {
              for (var a = 0; a < e.length; a++) {
                var i = e[a];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
              }
            }
            /**
             * @license
             * Copyright Akveo. All Rights Reserved.
             * Licensed under the MIT License. See License.txt in the project root for license information.
             */
            var d = {
                hover: !0
              },
              h = function (t) {
                return "string" == typeof t || t instanceof String
              },
              u = function () {
                function t(e, a) {
                  ! function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                  }(this, t), this.name = e, this.contents = a, this.attrs = s({}, n, {
                    class: "eva eva-".concat(e)
                  })
                }
                var e, a, i;
                return e = t, (a = [{
                  key: "toSvg",
                  value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                      e = t.animation,
                      a = o(t, ["animation"]),
                      i = p(e),
                      n = i ? i.class : "",
                      l = s({}, this.attrs, a, {
                        class: r()(this.attrs.class, t.class, n)
                      }),
                      c = "<svg ".concat(g(l), ">").concat(this.contents, "</svg>");
                    return i && i.hover ? '<i class="eva-hover">'.concat(c, "</i>") : c
                  }
                }, {
                  key: "toString",
                  value: function () {
                    return this.contents
                  }
                }]) && c(e.prototype, a), i && c(e, i), t
              }();

            function p(t) {
              if (!t) return null;
              t.hover && (t.hover = h(t.hover) ? JSON.parse(t.hover) : t.hover);
              var e = s({}, d, t),
                a = e.hover ? "eva-icon-hover-".concat(e.type) : "eva-icon-".concat(e.type);
              return e.class = r()({
                "eva-animation": !0,
                "eva-infinite": h(t.infinite) ? JSON.parse(t.infinite) : t.infinite
              }, a), e
            }

            function g(t) {
              return Object.keys(t).map((function (e) {
                return "".concat(e, '="').concat(t[e], '"')
              })).join(" ")
            }
            e.default = u
          },
        "./package/src/icons.js":
          /*!******************************!*\
            !*** ./package/src/icons.js ***!
            \******************************/
          /*! exports provided: default */
          function (t, e, a) {
            "use strict";
            a.r(e);
            var i = a( /*! ./icon */ "./package/src/icon.js"),
              r = a( /*! ../../package-build/eva-icons.json */ "./package-build/eva-icons.json");
            /**
             * @license
             * Copyright Akveo. All Rights Reserved.
             * Licensed under the MIT License. See License.txt in the project root for license information.
             */
            e.default = Object.keys(r).map((function (t) {
              return new i.default(t, r[t])
            })).reduce((function (t, e) {
              return t[e.name] = e, t
            }), {})
          },
        "./package/src/index.js":
          /*!******************************!*\
            !*** ./package/src/index.js ***!
            \******************************/
          /*! exports provided: icons, replace */
          function (t, e, a) {
            "use strict";
            a.r(e);
            var i = a( /*! ./icons */ "./package/src/icons.js");
            a.d(e, "icons", (function () {
              return i.default
            }));
            var r = a( /*! ./replace */ "./package/src/replace.js");
            a.d(e, "replace", (function () {
              return r.default
            }));
            var n = a( /*! ./animation.scss */ "./package/src/animation.scss");
            /**
             * @license
             * Copyright Akveo. All Rights Reserved.
             * Licensed under the MIT License. See License.txt in the project root for license information.
             */
            "undefined" != typeof window && a.n(n).a._insertCss()
          },
        "./package/src/replace.js":
          /*!********************************!*\
            !*** ./package/src/replace.js ***!
            \********************************/
          /*! exports provided: default */
          function (t, e, a) {
            "use strict";
            a.r(e);
            var i = a( /*! classnames/dedupe */ "./node_modules/classnames/dedupe.js"),
              r = a.n(i),
              n = a( /*! ./icons */ "./package/src/icons.js");

            function o(t) {
              for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {},
                  i = Object.keys(a);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter((function (t) {
                  return Object.getOwnPropertyDescriptor(a, t).enumerable
                })))), i.forEach((function (e) {
                  s(t, e, a[e])
                }))
              }
              return t
            }

            function s(t, e, a) {
              return e in t ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : t[e] = a, t
            }

            function l(t, e) {
              if (null == t) return {};
              var a, i, r = function (t, e) {
                if (null == t) return {};
                var a, i, r = {},
                  n = Object.keys(t);
                for (i = 0; i < n.length; i++) a = n[i], e.indexOf(a) >= 0 || (r[a] = t[a]);
                return r
              }
              /**
               * @license
               * Copyright Akveo. All Rights Reserved.
               * Licensed under the MIT License. See License.txt in the project root for license information.
               */
              (t, e);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                for (i = 0; i < n.length; i++) a = n[i], e.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(t, a) && (r[a] = t[a])
              }
              return r
            }
            var c = {
                "data-eva-animation": "type",
                "data-eva-hover": "hover",
                "data-eva-infinite": "infinite"
              },
              d = {
                "data-eva": "name",
                "data-eva-width": "width",
                "data-eva-height": "height",
                "data-eva-fill": "fill"
              };

            function h(t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = u(t),
                i = a.name,
                s = l(a, ["name"]),
                c = n.default[i].toSvg(o({}, e, s, {
                  animation: p(e.animation, s.animation)
                }, {
                  class: r()(e.class, s.class)
                })),
                d = (new DOMParser).parseFromString(c, "text/html"),
                h = d.querySelector(".eva-hover") || d.querySelector("svg");
              t.parentNode.replaceChild(h, t)
            }

            function u(t) {
              return Array.from(t.attributes).reduce((function (t, e) {
                return c[e.name] ? t.animation = o({}, t.animation, s({}, c[e.name], e.value)) : t = o({}, t, function (t) {
                  return d[t.name] ? s({}, d[t.name], t.value) : s({}, t.name, t.value)
                }(e)), t
              }), {})
            }

            function p(t, e) {
              return t || e ? o({}, t, e) : null
            }
            e.default = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              if ("undefined" == typeof document) throw new Error("`eva.replace()` only works in a browser environment.");
              var e = document.querySelectorAll("[data-eva]");
              Array.from(e).forEach((function (e) {
                return h(e, t)
              }))
            }
          }
      })
    }, t.exports = i()
  }, function (t, e, a) {
    "use strict";

    function i(t) {
      return null !== t && "object" == typeof t && "constructor" in t && t.constructor === Object
    }

    function r(t, e) {
      void 0 === t && (t = {}), void 0 === e && (e = {}), Object.keys(e).forEach((function (a) {
        void 0 === t[a] ? t[a] = e[a] : i(e[a]) && i(t[a]) && Object.keys(e[a]).length > 0 && r(t[a], e[a])
      }))
    }
    a.r(e);
    var n = "undefined" != typeof document ? document : {},
      o = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: {
          blur: function () {},
          nodeName: ""
        },
        querySelector: function () {
          return null
        },
        querySelectorAll: function () {
          return []
        },
        getElementById: function () {
          return null
        },
        createEvent: function () {
          return {
            initEvent: function () {}
          }
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return []
            }
          }
        },
        createElementNS: function () {
          return {}
        },
        importNode: function () {
          return null
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };
    r(n, o);
    var s = "undefined" != typeof window ? window : {};
    r(s, {
      document: o,
      navigator: {
        userAgent: ""
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      },
      history: {
        replaceState: function () {},
        pushState: function () {},
        go: function () {},
        back: function () {}
      },
      CustomEvent: function () {
        return this
      },
      addEventListener: function () {},
      removeEventListener: function () {},
      getComputedStyle: function () {
        return {
          getPropertyValue: function () {
            return ""
          }
        }
      },
      Image: function () {},
      Date: function () {},
      screen: {},
      setTimeout: function () {},
      clearTimeout: function () {},
      matchMedia: function () {
        return {}
      }
    });
    class l {
      constructor(t) {
        const e = this;
        for (let a = 0; a < t.length; a += 1) e[a] = t[a];
        return e.length = t.length, this
      }
    }

    function c(t, e) {
      const a = [];
      let i = 0;
      if (t && !e && t instanceof l) return t;
      if (t)
        if ("string" == typeof t) {
          let r, o;
          const s = t.trim();
          if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
            let t = "div";
            for (0 === s.indexOf("<li") && (t = "ul"), 0 === s.indexOf("<tr") && (t = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (t = "tr"), 0 === s.indexOf("<tbody") && (t = "table"), 0 === s.indexOf("<option") && (t = "select"), o = n.createElement(t), o.innerHTML = s, i = 0; i < o.childNodes.length; i += 1) a.push(o.childNodes[i])
          } else
            for (r = e || "#" !== t[0] || t.match(/[ .<>:~]/) ? (e || n).querySelectorAll(t.trim()) : [n.getElementById(t.trim().split("#")[1])], i = 0; i < r.length; i += 1) r[i] && a.push(r[i])
        } else if (t.nodeType || t === s || t === n) a.push(t);
      else if (t.length > 0 && t[0].nodeType)
        for (i = 0; i < t.length; i += 1) a.push(t[i]);
      return new l(a)
    }

    function d(t) {
      const e = [];
      for (let a = 0; a < t.length; a += 1) - 1 === e.indexOf(t[a]) && e.push(t[a]);
      return e
    }
    c.fn = l.prototype, c.Class = l, c.Dom7 = l;
    "resize scroll".split(" ");
    const h = {
      addClass: function (t) {
        if (void 0 === t) return this;
        const e = t.split(" ");
        for (let t = 0; t < e.length; t += 1)
          for (let a = 0; a < this.length; a += 1) void 0 !== this[a] && void 0 !== this[a].classList && this[a].classList.add(e[t]);
        return this
      },
      removeClass: function (t) {
        const e = t.split(" ");
        for (let t = 0; t < e.length; t += 1)
          for (let a = 0; a < this.length; a += 1) void 0 !== this[a] && void 0 !== this[a].classList && this[a].classList.remove(e[t]);
        return this
      },
      hasClass: function (t) {
        return !!this[0] && this[0].classList.contains(t)
      },
      toggleClass: function (t) {
        const e = t.split(" ");
        for (let t = 0; t < e.length; t += 1)
          for (let a = 0; a < this.length; a += 1) void 0 !== this[a] && void 0 !== this[a].classList && this[a].classList.toggle(e[t]);
        return this
      },
      attr: function (t, e) {
        if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
        for (let a = 0; a < this.length; a += 1)
          if (2 === arguments.length) this[a].setAttribute(t, e);
          else
            for (const e in t) this[a][e] = t[e], this[a].setAttribute(e, t[e]);
        return this
      },
      removeAttr: function (t) {
        for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
        return this
      },
      data: function (t, e) {
        let a;
        if (void 0 !== e) {
          for (let i = 0; i < this.length; i += 1) a = this[i], a.dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[t] = e;
          return this
        }
        if (a = this[0], a) {
          if (a.dom7ElementDataStorage && t in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[t];
          const e = a.getAttribute("data-" + t);
          return e || void 0
        }
      },
      transform: function (t) {
        for (let e = 0; e < this.length; e += 1) {
          const a = this[e].style;
          a.webkitTransform = t, a.transform = t
        }
        return this
      },
      transition: function (t) {
        "string" != typeof t && (t += "ms");
        for (let e = 0; e < this.length; e += 1) {
          const a = this[e].style;
          a.webkitTransitionDuration = t, a.transitionDuration = t
        }
        return this
      },
      on: function (...t) {
        let [e, a, i, r] = t;

        function n(t) {
          const e = t.target;
          if (!e) return;
          const r = t.target.dom7EventData || [];
          if (r.indexOf(t) < 0 && r.unshift(t), c(e).is(a)) i.apply(e, r);
          else {
            const t = c(e).parents();
            for (let e = 0; e < t.length; e += 1) c(t[e]).is(a) && i.apply(t[e], r)
          }
        }

        function o(t) {
          const e = t && t.target && t.target.dom7EventData || [];
          e.indexOf(t) < 0 && e.unshift(t), i.apply(this, e)
        }
        "function" == typeof t[1] && ([e, i, r] = t, a = void 0), r || (r = !1);
        const s = e.split(" ");
        let l;
        for (let t = 0; t < this.length; t += 1) {
          const e = this[t];
          if (a)
            for (l = 0; l < s.length; l += 1) {
              const t = s[l];
              e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({
                listener: i,
                proxyListener: n
              }), e.addEventListener(t, n, r)
            } else
              for (l = 0; l < s.length; l += 1) {
                const t = s[l];
                e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({
                  listener: i,
                  proxyListener: o
                }), e.addEventListener(t, o, r)
              }
        }
        return this
      },
      off: function (...t) {
        let [e, a, i, r] = t;
        "function" == typeof t[1] && ([e, i, r] = t, a = void 0), r || (r = !1);
        const n = e.split(" ");
        for (let t = 0; t < n.length; t += 1) {
          const e = n[t];
          for (let t = 0; t < this.length; t += 1) {
            const n = this[t];
            let o;
            if (!a && n.dom7Listeners ? o = n.dom7Listeners[e] : a && n.dom7LiveListeners && (o = n.dom7LiveListeners[e]), o && o.length)
              for (let t = o.length - 1; t >= 0; t -= 1) {
                const a = o[t];
                i && a.listener === i || i && a.listener && a.listener.dom7proxy && a.listener.dom7proxy === i ? (n.removeEventListener(e, a.proxyListener, r), o.splice(t, 1)) : i || (n.removeEventListener(e, a.proxyListener, r), o.splice(t, 1))
              }
          }
        }
        return this
      },
      trigger: function (...t) {
        const e = t[0].split(" "),
          a = t[1];
        for (let i = 0; i < e.length; i += 1) {
          const r = e[i];
          for (let e = 0; e < this.length; e += 1) {
            const i = this[e];
            let o;
            try {
              o = new s.CustomEvent(r, {
                detail: a,
                bubbles: !0,
                cancelable: !0
              })
            } catch (t) {
              o = n.createEvent("Event"), o.initEvent(r, !0, !0), o.detail = a
            }
            i.dom7EventData = t.filter((t, e) => e > 0), i.dispatchEvent(o), i.dom7EventData = [], delete i.dom7EventData
          }
        }
        return this
      },
      transitionEnd: function (t) {
        const e = ["webkitTransitionEnd", "transitionend"],
          a = this;
        let i;

        function r(n) {
          if (n.target === this)
            for (t.call(this, n), i = 0; i < e.length; i += 1) a.off(e[i], r)
        }
        if (t)
          for (i = 0; i < e.length; i += 1) a.on(e[i], r);
        return this
      },
      outerWidth: function (t) {
        if (this.length > 0) {
          if (t) {
            const t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
          }
          return this[0].offsetWidth
        }
        return null
      },
      outerHeight: function (t) {
        if (this.length > 0) {
          if (t) {
            const t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
          }
          return this[0].offsetHeight
        }
        return null
      },
      offset: function () {
        if (this.length > 0) {
          const t = this[0],
            e = t.getBoundingClientRect(),
            a = n.body,
            i = t.clientTop || a.clientTop || 0,
            r = t.clientLeft || a.clientLeft || 0,
            o = t === s ? s.scrollY : t.scrollTop,
            l = t === s ? s.scrollX : t.scrollLeft;
          return {
            top: e.top + o - i,
            left: e.left + l - r
          }
        }
        return null
      },
      css: function (t, e) {
        let a;
        if (1 === arguments.length) {
          if ("string" != typeof t) {
            for (a = 0; a < this.length; a += 1)
              for (let e in t) this[a].style[e] = t[e];
            return this
          }
          if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(t)
        }
        if (2 === arguments.length && "string" == typeof t) {
          for (a = 0; a < this.length; a += 1) this[a].style[t] = e;
          return this
        }
        return this
      },
      each: function (t) {
        if (!t) return this;
        for (let e = 0; e < this.length; e += 1)
          if (!1 === t.call(this[e], e, this[e])) return this;
        return this
      },
      html: function (t) {
        if (void 0 === t) return this[0] ? this[0].innerHTML : void 0;
        for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
        return this
      },
      text: function (t) {
        if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
        for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
        return this
      },
      is: function (t) {
        const e = this[0];
        let a, i;
        if (!e || void 0 === t) return !1;
        if ("string" == typeof t) {
          if (e.matches) return e.matches(t);
          if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t);
          if (e.msMatchesSelector) return e.msMatchesSelector(t);
          for (a = c(t), i = 0; i < a.length; i += 1)
            if (a[i] === e) return !0;
          return !1
        }
        if (t === n) return e === n;
        if (t === s) return e === s;
        if (t.nodeType || t instanceof l) {
          for (a = t.nodeType ? [t] : t, i = 0; i < a.length; i += 1)
            if (a[i] === e) return !0;
          return !1
        }
        return !1
      },
      index: function () {
        let t, e = this[0];
        if (e) {
          for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1);
          return t
        }
      },
      eq: function (t) {
        if (void 0 === t) return this;
        const e = this.length;
        let a;
        return t > e - 1 ? new l([]) : t < 0 ? (a = e + t, new l(a < 0 ? [] : [this[a]])) : new l([this[t]])
      },
      append: function (...t) {
        let e;
        for (let a = 0; a < t.length; a += 1) {
          e = t[a];
          for (let t = 0; t < this.length; t += 1)
            if ("string" == typeof e) {
              const a = n.createElement("div");
              for (a.innerHTML = e; a.firstChild;) this[t].appendChild(a.firstChild)
            } else if (e instanceof l)
            for (let a = 0; a < e.length; a += 1) this[t].appendChild(e[a]);
          else this[t].appendChild(e)
        }
        return this
      },
      prepend: function (t) {
        let e, a;
        for (e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const i = n.createElement("div");
            for (i.innerHTML = t, a = i.childNodes.length - 1; a >= 0; a -= 1) this[e].insertBefore(i.childNodes[a], this[e].childNodes[0])
          } else if (t instanceof l)
          for (a = 0; a < t.length; a += 1) this[e].insertBefore(t[a], this[e].childNodes[0]);
        else this[e].insertBefore(t, this[e].childNodes[0]);
        return this
      },
      next: function (t) {
        return this.length > 0 ? t ? this[0].nextElementSibling && c(this[0].nextElementSibling).is(t) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
      },
      nextAll: function (t) {
        const e = [];
        let a = this[0];
        if (!a) return new l([]);
        for (; a.nextElementSibling;) {
          const i = a.nextElementSibling;
          t ? c(i).is(t) && e.push(i) : e.push(i), a = i
        }
        return new l(e)
      },
      prev: function (t) {
        if (this.length > 0) {
          const e = this[0];
          return t ? e.previousElementSibling && c(e.previousElementSibling).is(t) ? new l([e.previousElementSibling]) : new l([]) : e.previousElementSibling ? new l([e.previousElementSibling]) : new l([])
        }
        return new l([])
      },
      prevAll: function (t) {
        const e = [];
        let a = this[0];
        if (!a) return new l([]);
        for (; a.previousElementSibling;) {
          const i = a.previousElementSibling;
          t ? c(i).is(t) && e.push(i) : e.push(i), a = i
        }
        return new l(e)
      },
      parent: function (t) {
        const e = [];
        for (let a = 0; a < this.length; a += 1) null !== this[a].parentNode && (t ? c(this[a].parentNode).is(t) && e.push(this[a].parentNode) : e.push(this[a].parentNode));
        return c(d(e))
      },
      parents: function (t) {
        const e = [];
        for (let a = 0; a < this.length; a += 1) {
          let i = this[a].parentNode;
          for (; i;) t ? c(i).is(t) && e.push(i) : e.push(i), i = i.parentNode
        }
        return c(d(e))
      },
      closest: function (t) {
        let e = this;
        return void 0 === t ? new l([]) : (e.is(t) || (e = e.parents(t).eq(0)), e)
      },
      find: function (t) {
        const e = [];
        for (let a = 0; a < this.length; a += 1) {
          const i = this[a].querySelectorAll(t);
          for (let t = 0; t < i.length; t += 1) e.push(i[t])
        }
        return new l(e)
      },
      children: function (t) {
        const e = [];
        for (let a = 0; a < this.length; a += 1) {
          const i = this[a].childNodes;
          for (let a = 0; a < i.length; a += 1) t ? 1 === i[a].nodeType && c(i[a]).is(t) && e.push(i[a]) : 1 === i[a].nodeType && e.push(i[a])
        }
        return new l(d(e))
      },
      filter: function (t) {
        const e = [],
          a = this;
        for (let i = 0; i < a.length; i += 1) t.call(a[i], i, a[i]) && e.push(a[i]);
        return new l(e)
      },
      remove: function () {
        for (let t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
        return this
      },
      add: function (...t) {
        const e = this;
        let a, i;
        for (a = 0; a < t.length; a += 1) {
          const r = c(t[a]);
          for (i = 0; i < r.length; i += 1) e[e.length] = r[i], e.length += 1
        }
        return e
      },
      styles: function () {
        return this[0] ? s.getComputedStyle(this[0], null) : {}
      }
    };
    Object.keys(h).forEach(t => {
      c.fn[t] = c.fn[t] || h[t]
    });
    const u = {
        deleteProps(t) {
          const e = t;
          Object.keys(e).forEach(t => {
            try {
              e[t] = null
            } catch (t) {}
            try {
              delete e[t]
            } catch (t) {}
          })
        },
        nextTick: (t, e = 0) => setTimeout(t, e),
        now: () => Date.now(),
        getTranslate(t, e = "x") {
          let a, i, r;
          const n = s.getComputedStyle(t, null);
          return s.WebKitCSSMatrix ? (i = n.transform || n.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(t => t.replace(",", ".")).join(", ")), r = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = r.toString().split(",")), "x" === e && (i = s.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === e && (i = s.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
        },
        parseUrlQuery(t) {
          const e = {};
          let a, i, r, n, o = t || s.location.href;
          if ("string" == typeof o && o.length)
            for (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "", i = o.split("&").filter(t => "" !== t), n = i.length, a = 0; a < n; a += 1) r = i[a].replace(/#\S+/g, "").split("="), e[decodeURIComponent(r[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || "";
          return e
        },
        isObject: t => "object" == typeof t && null !== t && t.constructor && t.constructor === Object,
        extend(...t) {
          const e = Object(t[0]);
          for (let a = 1; a < t.length; a += 1) {
            const i = t[a];
            if (null != i) {
              const t = Object.keys(Object(i));
              for (let a = 0, r = t.length; a < r; a += 1) {
                const r = t[a],
                  n = Object.getOwnPropertyDescriptor(i, r);
                void 0 !== n && n.enumerable && (u.isObject(e[r]) && u.isObject(i[r]) ? u.extend(e[r], i[r]) : !u.isObject(e[r]) && u.isObject(i[r]) ? (e[r] = {}, u.extend(e[r], i[r])) : e[r] = i[r])
              }
            }
          }
          return e
        }
      },
      p = {
        touch: !!("ontouchstart" in s || s.DocumentTouch && n instanceof s.DocumentTouch),
        pointerEvents: !!s.PointerEvent && "maxTouchPoints" in s.navigator && s.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in s || "WebkitMutationObserver" in s,
        passiveListener: function () {
          let t = !1;
          try {
            const e = Object.defineProperty({}, "passive", {
              get() {
                t = !0
              }
            });
            s.addEventListener("testPassiveListener", null, e)
          } catch (t) {}
          return t
        }(),
        gestures: "ongesturestart" in s
      };
    class g {
      constructor(t = {}) {
        const e = this;
        e.params = t, e.eventsListeners = {}, e.params && e.params.on && Object.keys(e.params.on).forEach(t => {
          e.on(t, e.params.on[t])
        })
      }
      on(t, e, a) {
        const i = this;
        if ("function" != typeof e) return i;
        const r = a ? "unshift" : "push";
        return t.split(" ").forEach(t => {
          i.eventsListeners[t] || (i.eventsListeners[t] = []), i.eventsListeners[t][r](e)
        }), i
      }
      once(t, e, a) {
        const i = this;
        if ("function" != typeof e) return i;

        function r(...a) {
          i.off(t, r), r.f7proxy && delete r.f7proxy, e.apply(i, a)
        }
        return r.f7proxy = e, i.on(t, r, a)
      }
      off(t, e) {
        const a = this;
        return a.eventsListeners ? (t.split(" ").forEach(t => {
          void 0 === e ? a.eventsListeners[t] = [] : a.eventsListeners[t] && a.eventsListeners[t].length && a.eventsListeners[t].forEach((i, r) => {
            (i === e || i.f7proxy && i.f7proxy === e) && a.eventsListeners[t].splice(r, 1)
          })
        }), a) : a
      }
      emit(...t) {
        const e = this;
        if (!e.eventsListeners) return e;
        let a, i, r;
        "string" == typeof t[0] || Array.isArray(t[0]) ? (a = t[0], i = t.slice(1, t.length), r = e) : (a = t[0].events, i = t[0].data, r = t[0].context || e);
        return (Array.isArray(a) ? a : a.split(" ")).forEach(t => {
          if (e.eventsListeners && e.eventsListeners[t]) {
            const a = [];
            e.eventsListeners[t].forEach(t => {
              a.push(t)
            }), a.forEach(t => {
              t.apply(r, i)
            })
          }
        }), e
      }
      useModulesParams(t) {
        const e = this;
        e.modules && Object.keys(e.modules).forEach(a => {
          const i = e.modules[a];
          i.params && u.extend(t, i.params)
        })
      }
      useModules(t = {}) {
        const e = this;
        e.modules && Object.keys(e.modules).forEach(a => {
          const i = e.modules[a],
            r = t[a] || {};
          i.instance && Object.keys(i.instance).forEach(t => {
            const a = i.instance[t];
            e[t] = "function" == typeof a ? a.bind(e) : a
          }), i.on && e.on && Object.keys(i.on).forEach(t => {
            e.on(t, i.on[t])
          }), i.create && i.create.bind(e)(r)
        })
      }
      static set components(t) {
        this.use && this.use(t)
      }
      static installModule(t, ...e) {
        const a = this;
        a.prototype.modules || (a.prototype.modules = {});
        const i = t.name || `${Object.keys(a.prototype.modules).length}_${u.now()}`;
        return a.prototype.modules[i] = t, t.proto && Object.keys(t.proto).forEach(e => {
          a.prototype[e] = t.proto[e]
        }), t.static && Object.keys(t.static).forEach(e => {
          a[e] = t.static[e]
        }), t.install && t.install.apply(a, e), a
      }
      static use(t, ...e) {
        const a = this;
        return Array.isArray(t) ? (t.forEach(t => a.installModule(t)), a) : a.installModule(t, ...e)
      }
    }
    var f = {
      updateSize: function () {
        const t = this;
        let e, a;
        const i = t.$el;
        e = void 0 !== t.params.width ? t.params.width : i[0].clientWidth, a = void 0 !== t.params.height ? t.params.height : i[0].clientHeight, 0 === e && t.isHorizontal() || 0 === a && t.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), a = a - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), u.extend(t, {
          width: e,
          height: a,
          size: t.isHorizontal() ? e : a
        }))
      },
      updateSlides: function () {
        const t = this,
          e = t.params,
          {
            $wrapperEl: a,
            size: i,
            rtlTranslate: r,
            wrongRTL: n
          } = t,
          o = t.virtual && e.virtual.enabled,
          l = o ? t.virtual.slides.length : t.slides.length,
          c = a.children("." + t.params.slideClass),
          d = o ? t.virtual.slides.length : c.length;
        let h = [];
        const p = [],
          g = [];

        function f(t) {
          return !e.cssMode || t !== c.length - 1
        }
        let m = e.slidesOffsetBefore;
        "function" == typeof m && (m = e.slidesOffsetBefore.call(t));
        let v = e.slidesOffsetAfter;
        "function" == typeof v && (v = e.slidesOffsetAfter.call(t));
        const y = t.snapGrid.length,
          w = t.snapGrid.length;
        let b, x, M = e.spaceBetween,
          z = -m,
          D = 0,
          L = 0;
        if (void 0 === i) return;
        "string" == typeof M && M.indexOf("%") >= 0 && (M = parseFloat(M.replace("%", "")) / 100 * i), t.virtualSize = -M, r ? c.css({
          marginLeft: "",
          marginTop: ""
        }) : c.css({
          marginRight: "",
          marginBottom: ""
        }), e.slidesPerColumn > 1 && (b = Math.floor(d / e.slidesPerColumn) === d / t.params.slidesPerColumn ? d : Math.ceil(d / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (b = Math.max(b, e.slidesPerView * e.slidesPerColumn)));
        const E = e.slidesPerColumn,
          A = b / E,
          T = Math.floor(d / e.slidesPerColumn);
        for (let a = 0; a < d; a += 1) {
          x = 0;
          const r = c.eq(a);
          if (e.slidesPerColumn > 1) {
            let i, n, o;
            if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
              const t = Math.floor(a / (e.slidesPerGroup * e.slidesPerColumn)),
                s = a - e.slidesPerColumn * e.slidesPerGroup * t,
                l = 0 === t ? e.slidesPerGroup : Math.min(Math.ceil((d - t * E * e.slidesPerGroup) / E), e.slidesPerGroup);
              o = Math.floor(s / l), n = s - o * l + t * e.slidesPerGroup, i = n + o * b / E, r.css({
                "-webkit-box-ordinal-group": i,
                "-moz-box-ordinal-group": i,
                "-ms-flex-order": i,
                "-webkit-order": i,
                order: i
              })
            } else "column" === e.slidesPerColumnFill ? (n = Math.floor(a / E), o = a - n * E, (n > T || n === T && o === E - 1) && (o += 1, o >= E && (o = 0, n += 1))) : (o = Math.floor(a / A), n = a - o * A);
            r.css("margin-" + (t.isHorizontal() ? "top" : "left"), 0 !== o && e.spaceBetween && e.spaceBetween + "px")
          }
          if ("none" !== r.css("display")) {
            if ("auto" === e.slidesPerView) {
              const a = s.getComputedStyle(r[0], null),
                i = r[0].style.transform,
                n = r[0].style.webkitTransform;
              if (i && (r[0].style.transform = "none"), n && (r[0].style.webkitTransform = "none"), e.roundLengths) x = t.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
              else if (t.isHorizontal()) {
                const t = parseFloat(a.getPropertyValue("width")),
                  e = parseFloat(a.getPropertyValue("padding-left")),
                  i = parseFloat(a.getPropertyValue("padding-right")),
                  r = parseFloat(a.getPropertyValue("margin-left")),
                  n = parseFloat(a.getPropertyValue("margin-right")),
                  o = a.getPropertyValue("box-sizing");
                x = o && "border-box" === o ? t + r + n : t + e + i + r + n
              } else {
                const t = parseFloat(a.getPropertyValue("height")),
                  e = parseFloat(a.getPropertyValue("padding-top")),
                  i = parseFloat(a.getPropertyValue("padding-bottom")),
                  r = parseFloat(a.getPropertyValue("margin-top")),
                  n = parseFloat(a.getPropertyValue("margin-bottom")),
                  o = a.getPropertyValue("box-sizing");
                x = o && "border-box" === o ? t + r + n : t + e + i + r + n
              }
              i && (r[0].style.transform = i), n && (r[0].style.webkitTransform = n), e.roundLengths && (x = Math.floor(x))
            } else x = (i - (e.slidesPerView - 1) * M) / e.slidesPerView, e.roundLengths && (x = Math.floor(x)), c[a] && (t.isHorizontal() ? c[a].style.width = x + "px" : c[a].style.height = x + "px");
            c[a] && (c[a].swiperSlideSize = x), g.push(x), e.centeredSlides ? (z = z + x / 2 + D / 2 + M, 0 === D && 0 !== a && (z = z - i / 2 - M), 0 === a && (z = z - i / 2 - M), Math.abs(z) < .001 && (z = 0), e.roundLengths && (z = Math.floor(z)), L % e.slidesPerGroup == 0 && h.push(z), p.push(z)) : (e.roundLengths && (z = Math.floor(z)), (L - Math.min(t.params.slidesPerGroupSkip, L)) % t.params.slidesPerGroup == 0 && h.push(z), p.push(z), z = z + x + M), t.virtualSize += x + M, D = x, L += 1
          }
        }
        let C;
        if (t.virtualSize = Math.max(t.virtualSize, i) + v, r && n && ("slide" === e.effect || "coverflow" === e.effect) && a.css({
            width: t.virtualSize + e.spaceBetween + "px"
          }), e.setWrapperSize && (t.isHorizontal() ? a.css({
            width: t.virtualSize + e.spaceBetween + "px"
          }) : a.css({
            height: t.virtualSize + e.spaceBetween + "px"
          })), e.slidesPerColumn > 1 && (t.virtualSize = (x + e.spaceBetween) * b, t.virtualSize = Math.ceil(t.virtualSize / e.slidesPerColumn) - e.spaceBetween, t.isHorizontal() ? a.css({
            width: t.virtualSize + e.spaceBetween + "px"
          }) : a.css({
            height: t.virtualSize + e.spaceBetween + "px"
          }), e.centeredSlides)) {
          C = [];
          for (let a = 0; a < h.length; a += 1) {
            let i = h[a];
            e.roundLengths && (i = Math.floor(i)), h[a] < t.virtualSize + h[0] && C.push(i)
          }
          h = C
        }
        if (!e.centeredSlides) {
          C = [];
          for (let a = 0; a < h.length; a += 1) {
            let r = h[a];
            e.roundLengths && (r = Math.floor(r)), h[a] <= t.virtualSize - i && C.push(r)
          }
          h = C, Math.floor(t.virtualSize - i) - Math.floor(h[h.length - 1]) > 1 && h.push(t.virtualSize - i)
        }
        if (0 === h.length && (h = [0]), 0 !== e.spaceBetween && (t.isHorizontal() ? r ? c.filter(f).css({
            marginLeft: M + "px"
          }) : c.filter(f).css({
            marginRight: M + "px"
          }) : c.filter(f).css({
            marginBottom: M + "px"
          })), e.centeredSlides && e.centeredSlidesBounds) {
          let t = 0;
          g.forEach(a => {
            t += a + (e.spaceBetween ? e.spaceBetween : 0)
          }), t -= e.spaceBetween;
          const a = t - i;
          h = h.map(t => t < 0 ? -m : t > a ? a + v : t)
        }
        if (e.centerInsufficientSlides) {
          let t = 0;
          if (g.forEach(a => {
              t += a + (e.spaceBetween ? e.spaceBetween : 0)
            }), t -= e.spaceBetween, t < i) {
            const e = (i - t) / 2;
            h.forEach((t, a) => {
              h[a] = t - e
            }), p.forEach((t, a) => {
              p[a] = t + e
            })
          }
        }
        u.extend(t, {
          slides: c,
          snapGrid: h,
          slidesGrid: p,
          slidesSizesGrid: g
        }), d !== l && t.emit("slidesLengthChange"), h.length !== y && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), p.length !== w && t.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && t.updateSlidesOffset()
      },
      updateAutoHeight: function (t) {
        const e = this,
          a = [];
        let i, r = 0;
        if ("number" == typeof t ? e.setTransition(t) : !0 === t && e.setTransition(e.params.speed), "auto" !== e.params.slidesPerView && e.params.slidesPerView > 1)
          if (e.params.centeredSlides) e.visibleSlides.each((t, e) => {
            a.push(e)
          });
          else
            for (i = 0; i < Math.ceil(e.params.slidesPerView); i += 1) {
              const t = e.activeIndex + i;
              if (t > e.slides.length) break;
              a.push(e.slides.eq(t)[0])
            } else a.push(e.slides.eq(e.activeIndex)[0]);
        for (i = 0; i < a.length; i += 1)
          if (void 0 !== a[i]) {
            const t = a[i].offsetHeight;
            r = t > r ? t : r
          } r && e.$wrapperEl.css("height", r + "px")
      },
      updateSlidesOffset: function () {
        const t = this,
          e = t.slides;
        for (let a = 0; a < e.length; a += 1) e[a].swiperSlideOffset = t.isHorizontal() ? e[a].offsetLeft : e[a].offsetTop
      },
      updateSlidesProgress: function (t = this && this.translate || 0) {
        const e = this,
          a = e.params,
          {
            slides: i,
            rtlTranslate: r
          } = e;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && e.updateSlidesOffset();
        let n = -t;
        r && (n = t), i.removeClass(a.slideVisibleClass), e.visibleSlidesIndexes = [], e.visibleSlides = [];
        for (let t = 0; t < i.length; t += 1) {
          const o = i[t],
            s = (n + (a.centeredSlides ? e.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
          if (a.watchSlidesVisibility || a.centeredSlides && a.autoHeight) {
            const r = -(n - o.swiperSlideOffset),
              s = r + e.slidesSizesGrid[t];
            (r >= 0 && r < e.size - 1 || s > 1 && s <= e.size || r <= 0 && s >= e.size) && (e.visibleSlides.push(o), e.visibleSlidesIndexes.push(t), i.eq(t).addClass(a.slideVisibleClass))
          }
          o.progress = r ? -s : s
        }
        e.visibleSlides = c(e.visibleSlides)
      },
      updateProgress: function (t) {
        const e = this;
        if (void 0 === t) {
          const a = e.rtlTranslate ? -1 : 1;
          t = e && e.translate && e.translate * a || 0
        }
        const a = e.params,
          i = e.maxTranslate() - e.minTranslate();
        let {
          progress: r,
          isBeginning: n,
          isEnd: o
        } = e;
        const s = n,
          l = o;
        0 === i ? (r = 0, n = !0, o = !0) : (r = (t - e.minTranslate()) / i, n = r <= 0, o = r >= 1), u.extend(e, {
          progress: r,
          isBeginning: n,
          isEnd: o
        }), (a.watchSlidesProgress || a.watchSlidesVisibility || a.centeredSlides && a.autoHeight) && e.updateSlidesProgress(t), n && !s && e.emit("reachBeginning toEdge"), o && !l && e.emit("reachEnd toEdge"), (s && !n || l && !o) && e.emit("fromEdge"), e.emit("progress", r)
      },
      updateSlidesClasses: function () {
        const t = this,
          {
            slides: e,
            params: a,
            $wrapperEl: i,
            activeIndex: r,
            realIndex: n
          } = t,
          o = t.virtual && a.virtual.enabled;
        let s;
        e.removeClass(`${a.slideActiveClass} ${a.slideNextClass} ${a.slidePrevClass} ${a.slideDuplicateActiveClass} ${a.slideDuplicateNextClass} ${a.slideDuplicatePrevClass}`), s = o ? t.$wrapperEl.find(`.${a.slideClass}[data-swiper-slide-index="${r}"]`) : e.eq(r), s.addClass(a.slideActiveClass), a.loop && (s.hasClass(a.slideDuplicateClass) ? i.children(`.${a.slideClass}:not(.${a.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(a.slideDuplicateActiveClass) : i.children(`.${a.slideClass}.${a.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(a.slideDuplicateActiveClass));
        let l = s.nextAll("." + a.slideClass).eq(0).addClass(a.slideNextClass);
        a.loop && 0 === l.length && (l = e.eq(0), l.addClass(a.slideNextClass));
        let c = s.prevAll("." + a.slideClass).eq(0).addClass(a.slidePrevClass);
        a.loop && 0 === c.length && (c = e.eq(-1), c.addClass(a.slidePrevClass)), a.loop && (l.hasClass(a.slideDuplicateClass) ? i.children(`.${a.slideClass}:not(.${a.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(a.slideDuplicateNextClass) : i.children(`.${a.slideClass}.${a.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(a.slideDuplicateNextClass), c.hasClass(a.slideDuplicateClass) ? i.children(`.${a.slideClass}:not(.${a.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(a.slideDuplicatePrevClass) : i.children(`.${a.slideClass}.${a.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(a.slideDuplicatePrevClass))
      },
      updateActiveIndex: function (t) {
        const e = this,
          a = e.rtlTranslate ? e.translate : -e.translate,
          {
            slidesGrid: i,
            snapGrid: r,
            params: n,
            activeIndex: o,
            realIndex: s,
            snapIndex: l
          } = e;
        let c, d = t;
        if (void 0 === d) {
          for (let t = 0; t < i.length; t += 1) void 0 !== i[t + 1] ? a >= i[t] && a < i[t + 1] - (i[t + 1] - i[t]) / 2 ? d = t : a >= i[t] && a < i[t + 1] && (d = t + 1) : a >= i[t] && (d = t);
          n.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
        }
        if (r.indexOf(a) >= 0) c = r.indexOf(a);
        else {
          const t = Math.min(n.slidesPerGroupSkip, d);
          c = t + Math.floor((d - t) / n.slidesPerGroup)
        }
        if (c >= r.length && (c = r.length - 1), d === o) return void(c !== l && (e.snapIndex = c, e.emit("snapIndexChange")));
        const h = parseInt(e.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
        u.extend(e, {
          snapIndex: c,
          realIndex: h,
          previousIndex: o,
          activeIndex: d
        }), e.emit("activeIndexChange"), e.emit("snapIndexChange"), s !== h && e.emit("realIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange")
      },
      updateClickedSlide: function (t) {
        const e = this,
          a = e.params,
          i = c(t.target).closest("." + a.slideClass)[0];
        let r = !1;
        if (i)
          for (let t = 0; t < e.slides.length; t += 1) e.slides[t] === i && (r = !0);
        if (!i || !r) return e.clickedSlide = void 0, void(e.clickedIndex = void 0);
        e.clickedSlide = i, e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(c(i).attr("data-swiper-slide-index"), 10) : e.clickedIndex = c(i).index(), a.slideToClickedSlide && void 0 !== e.clickedIndex && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
      }
    };
    var m = {
      getTranslate: function (t = (this.isHorizontal() ? "x" : "y")) {
        const {
          params: e,
          rtlTranslate: a,
          translate: i,
          $wrapperEl: r
        } = this;
        if (e.virtualTranslate) return a ? -i : i;
        if (e.cssMode) return i;
        let n = u.getTranslate(r[0], t);
        return a && (n = -n), n || 0
      },
      setTranslate: function (t, e) {
        const a = this,
          {
            rtlTranslate: i,
            params: r,
            $wrapperEl: n,
            wrapperEl: o,
            progress: s
          } = a;
        let l, c = 0,
          d = 0;
        a.isHorizontal() ? c = i ? -t : t : d = t, r.roundLengths && (c = Math.floor(c), d = Math.floor(d)), r.cssMode ? o[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -c : -d : r.virtualTranslate || n.transform(`translate3d(${c}px, ${d}px, 0px)`), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? c : d;
        const h = a.maxTranslate() - a.minTranslate();
        l = 0 === h ? 0 : (t - a.minTranslate()) / h, l !== s && a.updateProgress(t), a.emit("setTranslate", a.translate, e)
      },
      minTranslate: function () {
        return -this.snapGrid[0]
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1]
      },
      translateTo: function (t = 0, e = this.params.speed, a = !0, i = !0, r) {
        const n = this,
          {
            params: o,
            wrapperEl: s
          } = n;
        if (n.animating && o.preventInteractionOnTransition) return !1;
        const l = n.minTranslate(),
          c = n.maxTranslate();
        let d;
        if (d = i && t > l ? l : i && t < c ? c : t, n.updateProgress(d), o.cssMode) {
          const t = n.isHorizontal();
          return 0 === e ? s[t ? "scrollLeft" : "scrollTop"] = -d : s.scrollTo ? s.scrollTo({
            [t ? "left" : "top"]: -d,
            behavior: "smooth"
          }) : s[t ? "scrollLeft" : "scrollTop"] = -d, !0
        }
        return 0 === e ? (n.setTransition(0), n.setTranslate(d), a && (n.emit("beforeTransitionStart", e, r), n.emit("transitionEnd"))) : (n.setTransition(e), n.setTranslate(d), a && (n.emit("beforeTransitionStart", e, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (t) {
          n && !n.destroyed && t.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, a && n.emit("transitionEnd"))
        }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
      }
    };
    var v = {
      setTransition: function (t, e) {
        const a = this;
        a.params.cssMode || a.$wrapperEl.transition(t), a.emit("setTransition", t, e)
      },
      transitionStart: function (t = !0, e) {
        const a = this,
          {
            activeIndex: i,
            params: r,
            previousIndex: n
          } = a;
        if (r.cssMode) return;
        r.autoHeight && a.updateAutoHeight();
        let o = e;
        if (o || (o = i > n ? "next" : i < n ? "prev" : "reset"), a.emit("transitionStart"), t && i !== n) {
          if ("reset" === o) return void a.emit("slideResetTransitionStart");
          a.emit("slideChangeTransitionStart"), "next" === o ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
        }
      },
      transitionEnd: function (t = !0, e) {
        const a = this,
          {
            activeIndex: i,
            previousIndex: r,
            params: n
          } = a;
        if (a.animating = !1, n.cssMode) return;
        a.setTransition(0);
        let o = e;
        if (o || (o = i > r ? "next" : i < r ? "prev" : "reset"), a.emit("transitionEnd"), t && i !== r) {
          if ("reset" === o) return void a.emit("slideResetTransitionEnd");
          a.emit("slideChangeTransitionEnd"), "next" === o ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
        }
      }
    };
    var y = {
      slideTo: function (t = 0, e = this.params.speed, a = !0, i) {
        const r = this;
        let n = t;
        n < 0 && (n = 0);
        const {
          params: o,
          snapGrid: s,
          slidesGrid: l,
          previousIndex: c,
          activeIndex: d,
          rtlTranslate: h,
          wrapperEl: u
        } = r;
        if (r.animating && o.preventInteractionOnTransition) return !1;
        const p = Math.min(r.params.slidesPerGroupSkip, n);
        let g = p + Math.floor((n - p) / r.params.slidesPerGroup);
        g >= s.length && (g = s.length - 1), (d || o.initialSlide || 0) === (c || 0) && a && r.emit("beforeSlideChangeStart");
        const f = -s[g];
        if (r.updateProgress(f), o.normalizeSlideIndex)
          for (let t = 0; t < l.length; t += 1) - Math.floor(100 * f) >= Math.floor(100 * l[t]) && (n = t);
        if (r.initialized && n !== d) {
          if (!r.allowSlideNext && f < r.translate && f < r.minTranslate()) return !1;
          if (!r.allowSlidePrev && f > r.translate && f > r.maxTranslate() && (d || 0) !== n) return !1
        }
        let m;
        if (m = n > d ? "next" : n < d ? "prev" : "reset", h && -f === r.translate || !h && f === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(f), "reset" !== m && (r.transitionStart(a, m), r.transitionEnd(a, m)), !1;
        if (o.cssMode) {
          const t = r.isHorizontal();
          let a = -f;
          return h && (a = u.scrollWidth - u.offsetWidth - a), 0 === e ? u[t ? "scrollLeft" : "scrollTop"] = a : u.scrollTo ? u.scrollTo({
            [t ? "left" : "top"]: a,
            behavior: "smooth"
          }) : u[t ? "scrollLeft" : "scrollTop"] = a, !0
        }
        return 0 === e ? (r.setTransition(0), r.setTranslate(f), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, i), r.transitionStart(a, m), r.transitionEnd(a, m)) : (r.setTransition(e), r.setTranslate(f), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, i), r.transitionStart(a, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (t) {
          r && !r.destroyed && t.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(a, m))
        }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
      },
      slideToLoop: function (t = 0, e = this.params.speed, a = !0, i) {
        const r = this;
        let n = t;
        return r.params.loop && (n += r.loopedSlides), r.slideTo(n, e, a, i)
      },
      slideNext: function (t = this.params.speed, e = !0, a) {
        const i = this,
          {
            params: r,
            animating: n
          } = i,
          o = i.activeIndex < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup;
        if (r.loop) {
          if (n) return !1;
          i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
        }
        return i.slideTo(i.activeIndex + o, t, e, a)
      },
      slidePrev: function (t = this.params.speed, e = !0, a) {
        const i = this,
          {
            params: r,
            animating: n,
            snapGrid: o,
            slidesGrid: s,
            rtlTranslate: l
          } = i;
        if (r.loop) {
          if (n) return !1;
          i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
        }

        function c(t) {
          return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
        }
        const d = c(l ? i.translate : -i.translate),
          h = o.map(t => c(t));
        s.map(t => c(t)), o[h.indexOf(d)];
        let u, p = o[h.indexOf(d) - 1];
        return void 0 === p && r.cssMode && o.forEach(t => {
          !p && d >= t && (p = t)
        }), void 0 !== p && (u = s.indexOf(p), u < 0 && (u = i.activeIndex - 1)), i.slideTo(u, t, e, a)
      },
      slideReset: function (t = this.params.speed, e = !0, a) {
        return this.slideTo(this.activeIndex, t, e, a)
      },
      slideToClosest: function (t = this.params.speed, e = !0, a, i = .5) {
        const r = this;
        let n = r.activeIndex;
        const o = Math.min(r.params.slidesPerGroupSkip, n),
          s = o + Math.floor((n - o) / r.params.slidesPerGroup),
          l = r.rtlTranslate ? r.translate : -r.translate;
        if (l >= r.snapGrid[s]) {
          const t = r.snapGrid[s];
          l - t > (r.snapGrid[s + 1] - t) * i && (n += r.params.slidesPerGroup)
        } else {
          const t = r.snapGrid[s - 1];
          l - t <= (r.snapGrid[s] - t) * i && (n -= r.params.slidesPerGroup)
        }
        return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, t, e, a)
      },
      slideToClickedSlide: function () {
        const t = this,
          {
            params: e,
            $wrapperEl: a
          } = t,
          i = "auto" === e.slidesPerView ? t.slidesPerViewDynamic() : e.slidesPerView;
        let r, n = t.clickedIndex;
        if (e.loop) {
          if (t.animating) return;
          r = parseInt(c(t.clickedSlide).attr("data-swiper-slide-index"), 10), e.centeredSlides ? n < t.loopedSlides - i / 2 || n > t.slides.length - t.loopedSlides + i / 2 ? (t.loopFix(), n = a.children(`.${e.slideClass}[data-swiper-slide-index="${r}"]:not(.${e.slideDuplicateClass})`).eq(0).index(), u.nextTick(() => {
            t.slideTo(n)
          })) : t.slideTo(n) : n > t.slides.length - i ? (t.loopFix(), n = a.children(`.${e.slideClass}[data-swiper-slide-index="${r}"]:not(.${e.slideDuplicateClass})`).eq(0).index(), u.nextTick(() => {
            t.slideTo(n)
          })) : t.slideTo(n)
        } else t.slideTo(n)
      }
    };
    var w = {
      loopCreate: function () {
        const t = this,
          {
            params: e,
            $wrapperEl: a
          } = t;
        a.children(`.${e.slideClass}.${e.slideDuplicateClass}`).remove();
        let i = a.children("." + e.slideClass);
        if (e.loopFillGroupWithBlank) {
          const t = e.slidesPerGroup - i.length % e.slidesPerGroup;
          if (t !== e.slidesPerGroup) {
            for (let i = 0; i < t; i += 1) {
              const t = c(n.createElement("div")).addClass(`${e.slideClass} ${e.slideBlankClass}`);
              a.append(t)
            }
            i = a.children("." + e.slideClass)
          }
        }
        "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = i.length), t.loopedSlides = Math.ceil(parseFloat(e.loopedSlides || e.slidesPerView, 10)), t.loopedSlides += e.loopAdditionalSlides, t.loopedSlides > i.length && (t.loopedSlides = i.length);
        const r = [],
          o = [];
        i.each((e, a) => {
          const n = c(a);
          e < t.loopedSlides && o.push(a), e < i.length && e >= i.length - t.loopedSlides && r.push(a), n.attr("data-swiper-slide-index", e)
        });
        for (let t = 0; t < o.length; t += 1) a.append(c(o[t].cloneNode(!0)).addClass(e.slideDuplicateClass));
        for (let t = r.length - 1; t >= 0; t -= 1) a.prepend(c(r[t].cloneNode(!0)).addClass(e.slideDuplicateClass))
      },
      loopFix: function () {
        const t = this;
        t.emit("beforeLoopFix");
        const {
          activeIndex: e,
          slides: a,
          loopedSlides: i,
          allowSlidePrev: r,
          allowSlideNext: n,
          snapGrid: o,
          rtlTranslate: s
        } = t;
        let l;
        t.allowSlidePrev = !0, t.allowSlideNext = !0;
        const c = -o[e] - t.getTranslate();
        if (e < i) {
          l = a.length - 3 * i + e, l += i;
          t.slideTo(l, 0, !1, !0) && 0 !== c && t.setTranslate((s ? -t.translate : t.translate) - c)
        } else if (e >= a.length - i) {
          l = -a.length + e + i, l += i;
          t.slideTo(l, 0, !1, !0) && 0 !== c && t.setTranslate((s ? -t.translate : t.translate) - c)
        }
        t.allowSlidePrev = r, t.allowSlideNext = n, t.emit("loopFix")
      },
      loopDestroy: function () {
        const {
          $wrapperEl: t,
          params: e,
          slides: a
        } = this;
        t.children(`.${e.slideClass}.${e.slideDuplicateClass},.${e.slideClass}.${e.slideBlankClass}`).remove(), a.removeAttr("data-swiper-slide-index")
      }
    };
    var b = {
      setGrabCursor: function (t) {
        if (p.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
        const e = this.el;
        e.style.cursor = "move", e.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab", e.style.cursor = t ? "-moz-grabbin" : "-moz-grab", e.style.cursor = t ? "grabbing" : "grab"
      },
      unsetGrabCursor: function () {
        p.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
      }
    };
    var x = {
      appendSlide: function (t) {
        const e = this,
          {
            $wrapperEl: a,
            params: i
          } = e;
        if (i.loop && e.loopDestroy(), "object" == typeof t && "length" in t)
          for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
        else a.append(t);
        i.loop && e.loopCreate(), i.observer && p.observer || e.update()
      },
      prependSlide: function (t) {
        const e = this,
          {
            params: a,
            $wrapperEl: i,
            activeIndex: r
          } = e;
        a.loop && e.loopDestroy();
        let n = r + 1;
        if ("object" == typeof t && "length" in t) {
          for (let e = 0; e < t.length; e += 1) t[e] && i.prepend(t[e]);
          n = r + t.length
        } else i.prepend(t);
        a.loop && e.loopCreate(), a.observer && p.observer || e.update(), e.slideTo(n, 0, !1)
      },
      addSlide: function (t, e) {
        const a = this,
          {
            $wrapperEl: i,
            params: r,
            activeIndex: n
          } = a;
        let o = n;
        r.loop && (o -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + r.slideClass));
        const s = a.slides.length;
        if (t <= 0) return void a.prependSlide(e);
        if (t >= s) return void a.appendSlide(e);
        let l = o > t ? o + 1 : o;
        const c = [];
        for (let e = s - 1; e >= t; e -= 1) {
          const t = a.slides.eq(e);
          t.remove(), c.unshift(t)
        }
        if ("object" == typeof e && "length" in e) {
          for (let t = 0; t < e.length; t += 1) e[t] && i.append(e[t]);
          l = o > t ? o + e.length : o
        } else i.append(e);
        for (let t = 0; t < c.length; t += 1) i.append(c[t]);
        r.loop && a.loopCreate(), r.observer && p.observer || a.update(), r.loop ? a.slideTo(l + a.loopedSlides, 0, !1) : a.slideTo(l, 0, !1)
      },
      removeSlide: function (t) {
        const e = this,
          {
            params: a,
            $wrapperEl: i,
            activeIndex: r
          } = e;
        let n = r;
        a.loop && (n -= e.loopedSlides, e.loopDestroy(), e.slides = i.children("." + a.slideClass));
        let o, s = n;
        if ("object" == typeof t && "length" in t) {
          for (let a = 0; a < t.length; a += 1) o = t[a], e.slides[o] && e.slides.eq(o).remove(), o < s && (s -= 1);
          s = Math.max(s, 0)
        } else o = t, e.slides[o] && e.slides.eq(o).remove(), o < s && (s -= 1), s = Math.max(s, 0);
        a.loop && e.loopCreate(), a.observer && p.observer || e.update(), a.loop ? e.slideTo(s + e.loopedSlides, 0, !1) : e.slideTo(s, 0, !1)
      },
      removeAllSlides: function () {
        const t = this,
          e = [];
        for (let a = 0; a < t.slides.length; a += 1) e.push(a);
        t.removeSlide(e)
      }
    };
    const M = function () {
      const t = s.navigator.platform,
        e = s.navigator.userAgent,
        a = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          edge: !1,
          ie: !1,
          firefox: !1,
          macos: !1,
          windows: !1,
          cordova: !(!s.cordova && !s.phonegap),
          phonegap: !(!s.cordova && !s.phonegap),
          electron: !1
        },
        i = s.screen.width,
        r = s.screen.height,
        n = e.match(/(Android);?[\s\/]+([\d.]+)?/);
      let o = e.match(/(iPad).*OS\s([\d_]+)/);
      const l = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        c = !o && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        d = e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0,
        h = e.indexOf("Edge/") >= 0,
        u = e.indexOf("Gecko/") >= 0 && e.indexOf("Firefox/") >= 0,
        g = "Win32" === t,
        f = e.toLowerCase().indexOf("electron") >= 0;
      let m = "MacIntel" === t;
      return !o && m && p.touch && (1024 === i && 1366 === r || 834 === i && 1194 === r || 834 === i && 1112 === r || 768 === i && 1024 === r) && (o = e.match(/(Version)\/([\d.]+)/), m = !1), a.ie = d, a.edge = h, a.firefox = u, n && !g && (a.os = "android", a.osVersion = n[2], a.android = !0, a.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (o || c || l) && (a.os = "ios", a.ios = !0), c && !l && (a.osVersion = c[2].replace(/_/g, "."), a.iphone = !0), o && (a.osVersion = o[2].replace(/_/g, "."), a.ipad = !0), l && (a.osVersion = l[3] ? l[3].replace(/_/g, ".") : null, a.ipod = !0), a.ios && a.osVersion && e.indexOf("Version/") >= 0 && "10" === a.osVersion.split(".")[0] && (a.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), a.webView = !(!(c || o || l) || !e.match(/.*AppleWebKit(?!.*Safari)/i) && !s.navigator.standalone) || s.matchMedia && s.matchMedia("(display-mode: standalone)").matches, a.webview = a.webView, a.standalone = a.webView, a.desktop = !(a.ios || a.android) || f, a.desktop && (a.electron = f, a.macos = m, a.windows = g, a.macos && (a.os = "macos"), a.windows && (a.os = "windows")), a.pixelRatio = s.devicePixelRatio || 1, a
    }();

    function z(t) {
      const e = this,
        a = e.touchEventsData,
        {
          params: i,
          touches: r
        } = e;
      if (e.animating && i.preventInteractionOnTransition) return;
      let o = t;
      o.originalEvent && (o = o.originalEvent);
      const l = c(o.target);
      if ("wrapper" === i.touchEventsTarget && !l.closest(e.wrapperEl).length) return;
      if (a.isTouchEvent = "touchstart" === o.type, !a.isTouchEvent && "which" in o && 3 === o.which) return;
      if (!a.isTouchEvent && "button" in o && o.button > 0) return;
      if (a.isTouched && a.isMoved) return;
      if (i.noSwiping && l.closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) return void(e.allowClick = !0);
      if (i.swipeHandler && !l.closest(i.swipeHandler)[0]) return;
      r.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, r.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
      const d = r.currentX,
        h = r.currentY,
        p = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
        g = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
      if (!p || !(d <= g || d >= s.screen.width - g)) {
        if (u.extend(a, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), r.startX = d, r.startY = h, a.touchStartTime = u.now(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, i.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== o.type) {
          let t = !0;
          l.is(a.formElements) && (t = !1), n.activeElement && c(n.activeElement).is(a.formElements) && n.activeElement !== l[0] && n.activeElement.blur();
          const r = t && e.allowTouchMove && i.touchStartPreventDefault;
          (i.touchStartForcePreventDefault || r) && o.preventDefault()
        }
        e.emit("touchStart", o)
      }
    }

    function D(t) {
      const e = this,
        a = e.touchEventsData,
        {
          params: i,
          touches: r,
          rtlTranslate: o
        } = e;
      let s = t;
      if (s.originalEvent && (s = s.originalEvent), !a.isTouched) return void(a.startMoving && a.isScrolling && e.emit("touchMoveOpposite", s));
      if (a.isTouchEvent && "touchmove" !== s.type) return;
      const l = "touchmove" === s.type && s.targetTouches && (s.targetTouches[0] || s.changedTouches[0]),
        d = "touchmove" === s.type ? l.pageX : s.pageX,
        h = "touchmove" === s.type ? l.pageY : s.pageY;
      if (s.preventedByNestedSwiper) return r.startX = d, void(r.startY = h);
      if (!e.allowTouchMove) return e.allowClick = !1, void(a.isTouched && (u.extend(r, {
        startX: d,
        startY: h,
        currentX: d,
        currentY: h
      }), a.touchStartTime = u.now()));
      if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
        if (e.isVertical()) {
          if (h < r.startY && e.translate <= e.maxTranslate() || h > r.startY && e.translate >= e.minTranslate()) return a.isTouched = !1, void(a.isMoved = !1)
        } else if (d < r.startX && e.translate <= e.maxTranslate() || d > r.startX && e.translate >= e.minTranslate()) return;
      if (a.isTouchEvent && n.activeElement && s.target === n.activeElement && c(s.target).is(a.formElements)) return a.isMoved = !0, void(e.allowClick = !1);
      if (a.allowTouchCallbacks && e.emit("touchMove", s), s.targetTouches && s.targetTouches.length > 1) return;
      r.currentX = d, r.currentY = h;
      const p = r.currentX - r.startX,
        g = r.currentY - r.startY;
      if (e.params.threshold && Math.sqrt(p ** 2 + g ** 2) < e.params.threshold) return;
      if (void 0 === a.isScrolling) {
        let t;
        e.isHorizontal() && r.currentY === r.startY || e.isVertical() && r.currentX === r.startX ? a.isScrolling = !1 : p * p + g * g >= 25 && (t = 180 * Math.atan2(Math.abs(g), Math.abs(p)) / Math.PI, a.isScrolling = e.isHorizontal() ? t > i.touchAngle : 90 - t > i.touchAngle)
      }
      if (a.isScrolling && e.emit("touchMoveOpposite", s), void 0 === a.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (a.startMoving = !0)), a.isScrolling) return void(a.isTouched = !1);
      if (!a.startMoving) return;
      e.allowClick = !1, !i.cssMode && s.cancelable && s.preventDefault(), i.touchMoveStopPropagation && !i.nested && s.stopPropagation(), a.isMoved || (i.loop && e.loopFix(), a.startTranslate = e.getTranslate(), e.setTransition(0), e.animating && e.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== e.allowSlideNext && !0 !== e.allowSlidePrev || e.setGrabCursor(!0), e.emit("sliderFirstMove", s)), e.emit("sliderMove", s), a.isMoved = !0;
      let f = e.isHorizontal() ? p : g;
      r.diff = f, f *= i.touchRatio, o && (f = -f), e.swipeDirection = f > 0 ? "prev" : "next", a.currentTranslate = f + a.startTranslate;
      let m = !0,
        v = i.resistanceRatio;
      if (i.touchReleaseOnEdges && (v = 0), f > 0 && a.currentTranslate > e.minTranslate() ? (m = !1, i.resistance && (a.currentTranslate = e.minTranslate() - 1 + (-e.minTranslate() + a.startTranslate + f) ** v)) : f < 0 && a.currentTranslate < e.maxTranslate() && (m = !1, i.resistance && (a.currentTranslate = e.maxTranslate() + 1 - (e.maxTranslate() - a.startTranslate - f) ** v)), m && (s.preventedByNestedSwiper = !0), !e.allowSlideNext && "next" === e.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !e.allowSlidePrev && "prev" === e.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), i.threshold > 0) {
        if (!(Math.abs(f) > i.threshold || a.allowThresholdMove)) return void(a.currentTranslate = a.startTranslate);
        if (!a.allowThresholdMove) return a.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, a.currentTranslate = a.startTranslate, void(r.diff = e.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
      }
      i.followFinger && !i.cssMode && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (e.updateActiveIndex(), e.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
        position: r[e.isHorizontal() ? "startX" : "startY"],
        time: a.touchStartTime
      }), a.velocities.push({
        position: r[e.isHorizontal() ? "currentX" : "currentY"],
        time: u.now()
      })), e.updateProgress(a.currentTranslate), e.setTranslate(a.currentTranslate))
    }

    function L(t) {
      const e = this,
        a = e.touchEventsData,
        {
          params: i,
          touches: r,
          rtlTranslate: n,
          $wrapperEl: o,
          slidesGrid: s,
          snapGrid: l
        } = e;
      let c = t;
      if (c.originalEvent && (c = c.originalEvent), a.allowTouchCallbacks && e.emit("touchEnd", c), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && e.setGrabCursor(!1), a.isMoved = !1, void(a.startMoving = !1);
      i.grabCursor && a.isMoved && a.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
      const d = u.now(),
        h = d - a.touchStartTime;
      if (e.allowClick && (e.updateClickedSlide(c), e.emit("tap click", c), h < 300 && d - a.lastClickTime < 300 && e.emit("doubleTap doubleClick", c)), a.lastClickTime = u.now(), u.nextTick(() => {
          e.destroyed || (e.allowClick = !0)
        }), !a.isTouched || !a.isMoved || !e.swipeDirection || 0 === r.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void(a.startMoving = !1);
      let p;
      if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? n ? e.translate : -e.translate : -a.currentTranslate, i.cssMode) return;
      if (i.freeMode) {
        if (p < -e.minTranslate()) return void e.slideTo(e.activeIndex);
        if (p > -e.maxTranslate()) return void(e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1));
        if (i.freeModeMomentum) {
          if (a.velocities.length > 1) {
            const t = a.velocities.pop(),
              r = a.velocities.pop(),
              n = t.position - r.position,
              o = t.time - r.time;
            e.velocity = n / o, e.velocity /= 2, Math.abs(e.velocity) < i.freeModeMinimumVelocity && (e.velocity = 0), (o > 150 || u.now() - t.time > 300) && (e.velocity = 0)
          } else e.velocity = 0;
          e.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
          let t = 1e3 * i.freeModeMomentumRatio;
          const r = e.velocity * t;
          let s = e.translate + r;
          n && (s = -s);
          let c, d = !1;
          const h = 20 * Math.abs(e.velocity) * i.freeModeMomentumBounceRatio;
          let p;
          if (s < e.maxTranslate()) i.freeModeMomentumBounce ? (s + e.maxTranslate() < -h && (s = e.maxTranslate() - h), c = e.maxTranslate(), d = !0, a.allowMomentumBounce = !0) : s = e.maxTranslate(), i.loop && i.centeredSlides && (p = !0);
          else if (s > e.minTranslate()) i.freeModeMomentumBounce ? (s - e.minTranslate() > h && (s = e.minTranslate() + h), c = e.minTranslate(), d = !0, a.allowMomentumBounce = !0) : s = e.minTranslate(), i.loop && i.centeredSlides && (p = !0);
          else if (i.freeModeSticky) {
            let t;
            for (let e = 0; e < l.length; e += 1)
              if (l[e] > -s) {
                t = e;
                break
              } s = Math.abs(l[t] - s) < Math.abs(l[t - 1] - s) || "next" === e.swipeDirection ? l[t] : l[t - 1], s = -s
          }
          if (p && e.once("transitionEnd", () => {
              e.loopFix()
            }), 0 !== e.velocity) {
            if (t = n ? Math.abs((-s - e.translate) / e.velocity) : Math.abs((s - e.translate) / e.velocity), i.freeModeSticky) {
              const a = Math.abs((n ? -s : s) - e.translate),
                r = e.slidesSizesGrid[e.activeIndex];
              t = a < r ? i.speed : a < 2 * r ? 1.5 * i.speed : 2.5 * i.speed
            }
          } else if (i.freeModeSticky) return void e.slideToClosest();
          i.freeModeMomentumBounce && d ? (e.updateProgress(c), e.setTransition(t), e.setTranslate(s), e.transitionStart(!0, e.swipeDirection), e.animating = !0, o.transitionEnd(() => {
            e && !e.destroyed && a.allowMomentumBounce && (e.emit("momentumBounce"), e.setTransition(i.speed), setTimeout(() => {
              e.setTranslate(c), o.transitionEnd(() => {
                e && !e.destroyed && e.transitionEnd()
              })
            }, 0))
          })) : e.velocity ? (e.updateProgress(s), e.setTransition(t), e.setTranslate(s), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, o.transitionEnd(() => {
            e && !e.destroyed && e.transitionEnd()
          }))) : e.updateProgress(s), e.updateActiveIndex(), e.updateSlidesClasses()
        } else if (i.freeModeSticky) return void e.slideToClosest();
        return void((!i.freeModeMomentum || h >= i.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses()))
      }
      let g = 0,
        f = e.slidesSizesGrid[0];
      for (let t = 0; t < s.length; t += t < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
        const e = t < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== s[t + e] ? p >= s[t] && p < s[t + e] && (g = t, f = s[t + e] - s[t]) : p >= s[t] && (g = t, f = s[s.length - 1] - s[s.length - 2])
      }
      const m = (p - s[g]) / f,
        v = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (h > i.longSwipesMs) {
        if (!i.longSwipes) return void e.slideTo(e.activeIndex);
        "next" === e.swipeDirection && (m >= i.longSwipesRatio ? e.slideTo(g + v) : e.slideTo(g)), "prev" === e.swipeDirection && (m > 1 - i.longSwipesRatio ? e.slideTo(g + v) : e.slideTo(g))
      } else {
        if (!i.shortSwipes) return void e.slideTo(e.activeIndex);
        e.navigation && (c.target === e.navigation.nextEl || c.target === e.navigation.prevEl) ? c.target === e.navigation.nextEl ? e.slideTo(g + v) : e.slideTo(g) : ("next" === e.swipeDirection && e.slideTo(g + v), "prev" === e.swipeDirection && e.slideTo(g))
      }
    }

    function E() {
      const t = this,
        {
          params: e,
          el: a
        } = t;
      if (a && 0 === a.offsetWidth) return;
      e.breakpoints && t.setBreakpoint();
      const {
        allowSlideNext: i,
        allowSlidePrev: r,
        snapGrid: n
      } = t;
      t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.run(), t.allowSlidePrev = r, t.allowSlideNext = i, t.params.watchOverflow && n !== t.snapGrid && t.checkOverflow()
    }

    function A(t) {
      const e = this;
      e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation()))
    }

    function T() {
      const t = this,
        {
          wrapperEl: e,
          rtlTranslate: a
        } = t;
      let i;
      t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = a ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : t.translate = -e.scrollTop, -0 === t.translate && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
      const r = t.maxTranslate() - t.minTranslate();
      i = 0 === r ? 0 : (t.translate - t.minTranslate()) / r, i !== t.progress && t.updateProgress(a ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1)
    }
    let C = !1;

    function _() {}
    var S = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0
    };
    const k = {
        update: f,
        translate: m,
        transition: v,
        slide: y,
        loop: w,
        grabCursor: b,
        manipulation: x,
        events: {
          attachEvents: function () {
            const t = this,
              {
                params: e,
                touchEvents: a,
                el: i,
                wrapperEl: r
              } = t;
            t.onTouchStart = z.bind(t), t.onTouchMove = D.bind(t), t.onTouchEnd = L.bind(t), e.cssMode && (t.onScroll = T.bind(t)), t.onClick = A.bind(t);
            const o = !!e.nested;
            if (!p.touch && p.pointerEvents) i.addEventListener(a.start, t.onTouchStart, !1), n.addEventListener(a.move, t.onTouchMove, o), n.addEventListener(a.end, t.onTouchEnd, !1);
            else {
              if (p.touch) {
                const r = !("touchstart" !== a.start || !p.passiveListener || !e.passiveListeners) && {
                  passive: !0,
                  capture: !1
                };
                i.addEventListener(a.start, t.onTouchStart, r), i.addEventListener(a.move, t.onTouchMove, p.passiveListener ? {
                  passive: !1,
                  capture: o
                } : o), i.addEventListener(a.end, t.onTouchEnd, r), a.cancel && i.addEventListener(a.cancel, t.onTouchEnd, r), C || (n.addEventListener("touchstart", _), C = !0)
              }(e.simulateTouch && !M.ios && !M.android || e.simulateTouch && !p.touch && M.ios) && (i.addEventListener("mousedown", t.onTouchStart, !1), n.addEventListener("mousemove", t.onTouchMove, o), n.addEventListener("mouseup", t.onTouchEnd, !1))
            }(e.preventClicks || e.preventClicksPropagation) && i.addEventListener("click", t.onClick, !0), e.cssMode && r.addEventListener("scroll", t.onScroll), e.updateOnWindowResize ? t.on(M.ios || M.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", E, !0) : t.on("observerUpdate", E, !0)
          },
          detachEvents: function () {
            const t = this,
              {
                params: e,
                touchEvents: a,
                el: i,
                wrapperEl: r
              } = t,
              o = !!e.nested;
            if (!p.touch && p.pointerEvents) i.removeEventListener(a.start, t.onTouchStart, !1), n.removeEventListener(a.move, t.onTouchMove, o), n.removeEventListener(a.end, t.onTouchEnd, !1);
            else {
              if (p.touch) {
                const r = !("onTouchStart" !== a.start || !p.passiveListener || !e.passiveListeners) && {
                  passive: !0,
                  capture: !1
                };
                i.removeEventListener(a.start, t.onTouchStart, r), i.removeEventListener(a.move, t.onTouchMove, o), i.removeEventListener(a.end, t.onTouchEnd, r), a.cancel && i.removeEventListener(a.cancel, t.onTouchEnd, r)
              }(e.simulateTouch && !M.ios && !M.android || e.simulateTouch && !p.touch && M.ios) && (i.removeEventListener("mousedown", t.onTouchStart, !1), n.removeEventListener("mousemove", t.onTouchMove, o), n.removeEventListener("mouseup", t.onTouchEnd, !1))
            }(e.preventClicks || e.preventClicksPropagation) && i.removeEventListener("click", t.onClick, !0), e.cssMode && r.removeEventListener("scroll", t.onScroll), t.off(M.ios || M.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", E)
          }
        },
        breakpoints: {
          setBreakpoint: function () {
            const t = this,
              {
                activeIndex: e,
                initialized: a,
                loopedSlides: i = 0,
                params: r,
                $el: n
              } = t,
              o = r.breakpoints;
            if (!o || o && 0 === Object.keys(o).length) return;
            const s = t.getBreakpoint(o);
            if (s && t.currentBreakpoint !== s) {
              const l = s in o ? o[s] : void 0;
              l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(t => {
                const e = l[t];
                void 0 !== e && (l[t] = "slidesPerView" !== t || "AUTO" !== e && "auto" !== e ? "slidesPerView" === t ? parseFloat(e) : parseInt(e, 10) : "auto")
              });
              const c = l || t.originalParams,
                d = r.slidesPerColumn > 1,
                h = c.slidesPerColumn > 1;
              d && !h ? n.removeClass(`${r.containerModifierClass}multirow ${r.containerModifierClass}multirow-column`) : !d && h && (n.addClass(r.containerModifierClass + "multirow"), "column" === c.slidesPerColumnFill && n.addClass(r.containerModifierClass + "multirow-column"));
              const p = c.direction && c.direction !== r.direction,
                g = r.loop && (c.slidesPerView !== r.slidesPerView || p);
              p && a && t.changeDirection(), u.extend(t.params, c), u.extend(t, {
                allowTouchMove: t.params.allowTouchMove,
                allowSlideNext: t.params.allowSlideNext,
                allowSlidePrev: t.params.allowSlidePrev
              }), t.currentBreakpoint = s, g && a && (t.loopDestroy(), t.loopCreate(), t.updateSlides(), t.slideTo(e - i + t.loopedSlides, 0, !1)), t.emit("breakpoint", c)
            }
          },
          getBreakpoint: function (t) {
            if (!t) return;
            let e = !1;
            const a = Object.keys(t).map(t => {
              if ("string" == typeof t && 0 === t.indexOf("@")) {
                const e = parseFloat(t.substr(1));
                return {
                  value: s.innerHeight * e,
                  point: t
                }
              }
              return {
                value: t,
                point: t
              }
            });
            a.sort((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10));
            for (let t = 0; t < a.length; t += 1) {
              const {
                point: i,
                value: r
              } = a[t];
              r <= s.innerWidth && (e = i)
            }
            return e || "max"
          }
        },
        checkOverflow: {
          checkOverflow: function () {
            const t = this,
              e = t.params,
              a = t.isLocked,
              i = t.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (t.slides.length - 1) + t.slides[0].offsetWidth * t.slides.length;
            e.slidesOffsetBefore && e.slidesOffsetAfter && i ? t.isLocked = i <= t.size : t.isLocked = 1 === t.snapGrid.length, t.allowSlideNext = !t.isLocked, t.allowSlidePrev = !t.isLocked, a !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock"), a && a !== t.isLocked && (t.isEnd = !1, t.navigation && t.navigation.update())
          }
        },
        classes: {
          addClasses: function () {
            const {
              classNames: t,
              params: e,
              rtl: a,
              $el: i
            } = this, r = [];
            r.push("initialized"), r.push(e.direction), e.freeMode && r.push("free-mode"), e.autoHeight && r.push("autoheight"), a && r.push("rtl"), e.slidesPerColumn > 1 && (r.push("multirow"), "column" === e.slidesPerColumnFill && r.push("multirow-column")), M.android && r.push("android"), M.ios && r.push("ios"), e.cssMode && r.push("css-mode"), r.forEach(a => {
              t.push(e.containerModifierClass + a)
            }), i.addClass(t.join(" "))
          },
          removeClasses: function () {
            const {
              $el: t,
              classNames: e
            } = this;
            t.removeClass(e.join(" "))
          }
        },
        images: {
          loadImage: function (t, e, a, i, r, n) {
            let o;

            function l() {
              n && n()
            }
            c(t).parent("picture")[0] || t.complete && r ? l() : e ? (o = new s.Image, o.onload = l, o.onerror = l, i && (o.sizes = i), a && (o.srcset = a), e && (o.src = e)) : l()
          },
          preloadImages: function () {
            const t = this;

            function e() {
              null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
            }
            t.imagesToLoad = t.$el.find("img");
            for (let a = 0; a < t.imagesToLoad.length; a += 1) {
              const i = t.imagesToLoad[a];
              t.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, e)
            }
          }
        }
      },
      P = {};
    class O extends g {
      constructor(...t) {
        let e, a;
        1 === t.length && t[0].constructor && t[0].constructor === Object ? a = t[0] : [e, a] = t, a || (a = {}), a = u.extend({}, a), e && !a.el && (a.el = e), super(a), Object.keys(k).forEach(t => {
          Object.keys(k[t]).forEach(e => {
            O.prototype[e] || (O.prototype[e] = k[t][e])
          })
        });
        const i = this;
        void 0 === i.modules && (i.modules = {}), Object.keys(i.modules).forEach(t => {
          const e = i.modules[t];
          if (e.params) {
            const t = Object.keys(e.params)[0],
              i = e.params[t];
            if ("object" != typeof i || null === i) return;
            if (!(t in a) || !("enabled" in i)) return;
            !0 === a[t] && (a[t] = {
              enabled: !0
            }), "object" != typeof a[t] || "enabled" in a[t] || (a[t].enabled = !0), a[t] || (a[t] = {
              enabled: !1
            })
          }
        });
        const r = u.extend({}, S);
        i.useModulesParams(r), i.params = u.extend({}, r, P, a), i.originalParams = u.extend({}, i.params), i.passedParams = u.extend({}, a), i.$ = c;
        const n = c(i.params.el);
        if (e = n[0], !e) return;
        if (n.length > 1) {
          const t = [];
          return n.each((e, i) => {
            const r = u.extend({}, a, {
              el: i
            });
            t.push(new O(r))
          }), t
        }
        let o;
        return e.swiper = i, n.data("swiper", i), e && e.shadowRoot && e.shadowRoot.querySelector ? (o = c(e.shadowRoot.querySelector("." + i.params.wrapperClass)), o.children = t => n.children(t)) : o = n.children("." + i.params.wrapperClass), u.extend(i, {
          $el: n,
          el: e,
          $wrapperEl: o,
          wrapperEl: o[0],
          classNames: [],
          slides: c(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === i.params.direction,
          isVertical: () => "vertical" === i.params.direction,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
          rtlTranslate: "horizontal" === i.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
          wrongRTL: "-webkit-box" === o.css("display"),
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: i.params.allowSlideNext,
          allowSlidePrev: i.params.allowSlidePrev,
          touchEvents: function () {
            const t = ["touchstart", "touchmove", "touchend", "touchcancel"];
            let e = ["mousedown", "mousemove", "mouseup"];
            return p.pointerEvents && (e = ["pointerdown", "pointermove", "pointerup"]), i.touchEventsTouch = {
              start: t[0],
              move: t[1],
              end: t[2],
              cancel: t[3]
            }, i.touchEventsDesktop = {
              start: e[0],
              move: e[1],
              end: e[2]
            }, p.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop
          }(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            formElements: "input, select, option, textarea, button, video, label",
            lastClickTime: u.now(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: i.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), i.useModules(), i.params.init && i.init(), i
      }
      slidesPerViewDynamic() {
        const {
          params: t,
          slides: e,
          slidesGrid: a,
          size: i,
          activeIndex: r
        } = this;
        let n = 1;
        if (t.centeredSlides) {
          let t, a = e[r].swiperSlideSize;
          for (let o = r + 1; o < e.length; o += 1) e[o] && !t && (a += e[o].swiperSlideSize, n += 1, a > i && (t = !0));
          for (let o = r - 1; o >= 0; o -= 1) e[o] && !t && (a += e[o].swiperSlideSize, n += 1, a > i && (t = !0))
        } else
          for (let t = r + 1; t < e.length; t += 1) a[t] - a[r] < i && (n += 1);
        return n
      }
      update() {
        const t = this;
        if (!t || t.destroyed) return;
        const {
          snapGrid: e,
          params: a
        } = t;

        function i() {
          const e = t.rtlTranslate ? -1 * t.translate : t.translate,
            a = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
          t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses()
        }
        let r;
        a.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode ? (i(), t.params.autoHeight && t.updateAutoHeight()) : (r = ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), r || i()), a.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update")
      }
      changeDirection(t, e = !0) {
        const a = this,
          i = a.params.direction;
        return t || (t = "horizontal" === i ? "vertical" : "horizontal"), t === i || "horizontal" !== t && "vertical" !== t || (a.$el.removeClass(`${a.params.containerModifierClass}${i}`).addClass(`${a.params.containerModifierClass}${t}`), a.params.direction = t, a.slides.each((e, a) => {
          "vertical" === t ? a.style.width = "" : a.style.height = ""
        }), a.emit("changeDirection"), e && a.update()), a
      }
      init() {
        const t = this;
        t.initialized || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit), t.attachEvents(), t.initialized = !0, t.emit("init"))
      }
      destroy(t = !0, e = !0) {
        const a = this,
          {
            params: i,
            $el: r,
            $wrapperEl: n,
            slides: o
          } = a;
        return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), e && (a.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), o && o.length && o.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(t => {
          a.off(t)
        }), !1 !== t && (a.$el[0].swiper = null, a.$el.data("swiper", null), u.deleteProps(a)), a.destroyed = !0), null
      }
      static extendDefaults(t) {
        u.extend(P, t)
      }
      static get extendedDefaults() {
        return P
      }
      static get defaults() {
        return S
      }
      static get Class() {
        return g
      }
      static get $() {
        return c
      }
    }
    var H = {
        name: "device",
        proto: {
          device: M
        },
        static: {
          device: M
        }
      },
      V = {
        name: "support",
        proto: {
          support: p
        },
        static: {
          support: p
        }
      };
    const F = {
      isEdge: !!s.navigator.userAgent.match(/Edge/g),
      isSafari: function () {
        const t = s.navigator.userAgent.toLowerCase();
        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
      }(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)
    };
    var B = {
        name: "browser",
        proto: {
          browser: F
        },
        static: {
          browser: F
        }
      },
      I = {
        name: "resize",
        create() {
          const t = this;
          u.extend(t, {
            resize: {
              resizeHandler() {
                t && !t.destroyed && t.initialized && (t.emit("beforeResize"), t.emit("resize"))
              },
              orientationChangeHandler() {
                t && !t.destroyed && t.initialized && t.emit("orientationchange")
              }
            }
          })
        },
        on: {
          init() {
            s.addEventListener("resize", this.resize.resizeHandler), s.addEventListener("orientationchange", this.resize.orientationChangeHandler)
          },
          destroy() {
            s.removeEventListener("resize", this.resize.resizeHandler), s.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
          }
        }
      };
    const $ = {
      func: s.MutationObserver || s.WebkitMutationObserver,
      attach(t, e = {}) {
        const a = this,
          i = new(0, $.func)(t => {
            if (1 === t.length) return void a.emit("observerUpdate", t[0]);
            const e = function () {
              a.emit("observerUpdate", t[0])
            };
            s.requestAnimationFrame ? s.requestAnimationFrame(e) : s.setTimeout(e, 0)
          });
        i.observe(t, {
          attributes: void 0 === e.attributes || e.attributes,
          childList: void 0 === e.childList || e.childList,
          characterData: void 0 === e.characterData || e.characterData
        }), a.observer.observers.push(i)
      },
      init() {
        const t = this;
        if (p.observer && t.params.observer) {
          if (t.params.observeParents) {
            const e = t.$el.parents();
            for (let a = 0; a < e.length; a += 1) t.observer.attach(e[a])
          }
          t.observer.attach(t.$el[0], {
            childList: t.params.observeSlideChildren
          }), t.observer.attach(t.$wrapperEl[0], {
            attributes: !1
          })
        }
      },
      destroy() {
        this.observer.observers.forEach(t => {
          t.disconnect()
        }), this.observer.observers = []
      }
    };
    var j = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      },
      create() {
        u.extend(this, {
          observer: {
            init: $.init.bind(this),
            attach: $.attach.bind(this),
            destroy: $.destroy.bind(this),
            observers: []
          }
        })
      },
      on: {
        init() {
          this.observer.init()
        },
        destroy() {
          this.observer.destroy()
        }
      }
    };
    const R = {
      update(t) {
        const e = this,
          {
            slidesPerView: a,
            slidesPerGroup: i,
            centeredSlides: r
          } = e.params,
          {
            addSlidesBefore: n,
            addSlidesAfter: o
          } = e.params.virtual,
          {
            from: s,
            to: l,
            slides: c,
            slidesGrid: d,
            renderSlide: h,
            offset: p
          } = e.virtual;
        e.updateActiveIndex();
        const g = e.activeIndex || 0;
        let f, m, v;
        f = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top", r ? (m = Math.floor(a / 2) + i + n, v = Math.floor(a / 2) + i + o) : (m = a + (i - 1) + n, v = i + o);
        const y = Math.max((g || 0) - v, 0),
          w = Math.min((g || 0) + m, c.length - 1),
          b = (e.slidesGrid[y] || 0) - (e.slidesGrid[0] || 0);

        function x() {
          e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load()
        }
        if (u.extend(e.virtual, {
            from: y,
            to: w,
            offset: b,
            slidesGrid: e.slidesGrid
          }), s === y && l === w && !t) return e.slidesGrid !== d && b !== p && e.slides.css(f, b + "px"), void e.updateProgress();
        if (e.params.virtual.renderExternal) return e.params.virtual.renderExternal.call(e, {
          offset: b,
          from: y,
          to: w,
          slides: function () {
            const t = [];
            for (let e = y; e <= w; e += 1) t.push(c[e]);
            return t
          }()
        }), void x();
        const M = [],
          z = [];
        if (t) e.$wrapperEl.find("." + e.params.slideClass).remove();
        else
          for (let t = s; t <= l; t += 1)(t < y || t > w) && e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();
        for (let e = 0; e < c.length; e += 1) e >= y && e <= w && (void 0 === l || t ? z.push(e) : (e > l && z.push(e), e < s && M.push(e)));
        z.forEach(t => {
          e.$wrapperEl.append(h(c[t], t))
        }), M.sort((t, e) => e - t).forEach(t => {
          e.$wrapperEl.prepend(h(c[t], t))
        }), e.$wrapperEl.children(".swiper-slide").css(f, b + "px"), x()
      },
      renderSlide(t, e) {
        const a = this,
          i = a.params.virtual;
        if (i.cache && a.virtual.cache[e]) return a.virtual.cache[e];
        const r = i.renderSlide ? c(i.renderSlide.call(a, t, e)) : c(`<div class="${a.params.slideClass}" data-swiper-slide-index="${e}">${t}</div>`);
        return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", e), i.cache && (a.virtual.cache[e] = r), r
      },
      appendSlide(t) {
        const e = this;
        if ("object" == typeof t && "length" in t)
          for (let a = 0; a < t.length; a += 1) t[a] && e.virtual.slides.push(t[a]);
        else e.virtual.slides.push(t);
        e.virtual.update(!0)
      },
      prependSlide(t) {
        const e = this,
          a = e.activeIndex;
        let i = a + 1,
          r = 1;
        if (Array.isArray(t)) {
          for (let a = 0; a < t.length; a += 1) t[a] && e.virtual.slides.unshift(t[a]);
          i = a + t.length, r = t.length
        } else e.virtual.slides.unshift(t);
        if (e.params.virtual.cache) {
          const t = e.virtual.cache,
            a = {};
          Object.keys(t).forEach(e => {
            const i = t[e],
              n = i.attr("data-swiper-slide-index");
            n && i.attr("data-swiper-slide-index", parseInt(n, 10) + 1), a[parseInt(e, 10) + r] = i
          }), e.virtual.cache = a
        }
        e.virtual.update(!0), e.slideTo(i, 0)
      },
      removeSlide(t) {
        const e = this;
        if (null == t) return;
        let a = e.activeIndex;
        if (Array.isArray(t))
          for (let i = t.length - 1; i >= 0; i -= 1) e.virtual.slides.splice(t[i], 1), e.params.virtual.cache && delete e.virtual.cache[t[i]], t[i] < a && (a -= 1), a = Math.max(a, 0);
        else e.virtual.slides.splice(t, 1), e.params.virtual.cache && delete e.virtual.cache[t], t < a && (a -= 1), a = Math.max(a, 0);
        e.virtual.update(!0), e.slideTo(a, 0)
      },
      removeAllSlides() {
        const t = this;
        t.virtual.slides = [], t.params.virtual.cache && (t.virtual.cache = {}), t.virtual.update(!0), t.slideTo(0, 0)
      }
    };
    var N = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create() {
        u.extend(this, {
          virtual: {
            update: R.update.bind(this),
            appendSlide: R.appendSlide.bind(this),
            prependSlide: R.prependSlide.bind(this),
            removeSlide: R.removeSlide.bind(this),
            removeAllSlides: R.removeAllSlides.bind(this),
            renderSlide: R.renderSlide.bind(this),
            slides: this.params.virtual.slides,
            cache: {}
          }
        })
      },
      on: {
        beforeInit() {
          const t = this;
          if (!t.params.virtual.enabled) return;
          t.classNames.push(t.params.containerModifierClass + "virtual");
          const e = {
            watchSlidesProgress: !0
          };
          u.extend(t.params, e), u.extend(t.originalParams, e), t.params.initialSlide || t.virtual.update()
        },
        setTranslate() {
          this.params.virtual.enabled && this.virtual.update()
        }
      }
    };
    const Y = {
      handle(t) {
        const e = this,
          {
            rtlTranslate: a
          } = e;
        let i = t;
        i.originalEvent && (i = i.originalEvent);
        const r = i.keyCode || i.charCode,
          o = e.params.keyboard.pageUpDown,
          l = o && 33 === r,
          c = o && 34 === r,
          d = 37 === r,
          h = 39 === r,
          u = 38 === r,
          p = 40 === r;
        if (!e.allowSlideNext && (e.isHorizontal() && h || e.isVertical() && p || c)) return !1;
        if (!e.allowSlidePrev && (e.isHorizontal() && d || e.isVertical() && u || l)) return !1;
        if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase()))) {
          if (e.params.keyboard.onlyInViewport && (l || c || d || h || u || p)) {
            let t = !1;
            if (e.$el.parents("." + e.params.slideClass).length > 0 && 0 === e.$el.parents("." + e.params.slideActiveClass).length) return;
            const i = s.innerWidth,
              r = s.innerHeight,
              n = e.$el.offset();
            a && (n.left -= e.$el[0].scrollLeft);
            const o = [
              [n.left, n.top],
              [n.left + e.width, n.top],
              [n.left, n.top + e.height],
              [n.left + e.width, n.top + e.height]
            ];
            for (let e = 0; e < o.length; e += 1) {
              const a = o[e];
              a[0] >= 0 && a[0] <= i && a[1] >= 0 && a[1] <= r && (t = !0)
            }
            if (!t) return
          }
          e.isHorizontal() ? ((l || c || d || h) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), ((c || h) && !a || (l || d) && a) && e.slideNext(), ((l || d) && !a || (c || h) && a) && e.slidePrev()) : ((l || c || u || p) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (c || p) && e.slideNext(), (l || u) && e.slidePrev()), e.emit("keyPress", r)
        }
      },
      enable() {
        this.keyboard.enabled || (c(n).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
      },
      disable() {
        this.keyboard.enabled && (c(n).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
      }
    };
    var X = {
      name: "keyboard",
      params: {
        keyboard: {
          enabled: !1,
          onlyInViewport: !0,
          pageUpDown: !0
        }
      },
      create() {
        u.extend(this, {
          keyboard: {
            enabled: !1,
            enable: Y.enable.bind(this),
            disable: Y.disable.bind(this),
            handle: Y.handle.bind(this)
          }
        })
      },
      on: {
        init() {
          const t = this;
          t.params.keyboard.enabled && t.keyboard.enable()
        },
        destroy() {
          const t = this;
          t.keyboard.enabled && t.keyboard.disable()
        }
      }
    };
    const q = {
      lastScrollTime: u.now(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: () => s.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
        let t = "onwheel" in n;
        if (!t) {
          const e = n.createElement("div");
          e.setAttribute("onwheel", "return;"), t = "function" == typeof e.onwheel
        }
        return !t && n.implementation && n.implementation.hasFeature && !0 !== n.implementation.hasFeature("", "") && (t = n.implementation.hasFeature("Events.wheel", "3.0")), t
      }() ? "wheel" : "mousewheel",
      normalize(t) {
        let e = 0,
          a = 0,
          i = 0,
          r = 0;
        return "detail" in t && (a = t.detail), "wheelDelta" in t && (a = -t.wheelDelta / 120), "wheelDeltaY" in t && (a = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = a, a = 0), i = 10 * e, r = 10 * a, "deltaY" in t && (r = t.deltaY), "deltaX" in t && (i = t.deltaX), t.shiftKey && !i && (i = r, r = 0), (i || r) && t.deltaMode && (1 === t.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !e && (e = i < 1 ? -1 : 1), r && !a && (a = r < 1 ? -1 : 1), {
          spinX: e,
          spinY: a,
          pixelX: i,
          pixelY: r
        }
      },
      handleMouseEnter() {
        this.mouseEntered = !0
      },
      handleMouseLeave() {
        this.mouseEntered = !1
      },
      handle(t) {
        let e = t;
        const a = this,
          i = a.params.mousewheel;
        a.params.cssMode && e.preventDefault();
        let r = a.$el;
        if ("container" !== a.params.mousewheel.eventsTarged && (r = c(a.params.mousewheel.eventsTarged)), !a.mouseEntered && !r[0].contains(e.target) && !i.releaseOnEdges) return !0;
        e.originalEvent && (e = e.originalEvent);
        let n = 0;
        const o = a.rtlTranslate ? -1 : 1,
          s = q.normalize(e);
        if (i.forceToAxis)
          if (a.isHorizontal()) {
            if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return !0;
            n = -s.pixelX * o
          } else {
            if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return !0;
            n = -s.pixelY
          }
        else n = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * o : -s.pixelY;
        if (0 === n) return !0;
        if (i.invert && (n = -n), a.params.freeMode) {
          const t = {
              time: u.now(),
              delta: Math.abs(n),
              direction: Math.sign(n)
            },
            {
              lastEventBeforeSnap: r
            } = a.mousewheel,
            o = r && t.time < r.time + 500 && t.delta <= r.delta && t.direction === r.direction;
          if (!o) {
            a.mousewheel.lastEventBeforeSnap = void 0, a.params.loop && a.loopFix();
            let r = a.getTranslate() + n * i.sensitivity;
            const s = a.isBeginning,
              l = a.isEnd;
            if (r >= a.minTranslate() && (r = a.minTranslate()), r <= a.maxTranslate() && (r = a.maxTranslate()), a.setTransition(0), a.setTranslate(r), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!s && a.isBeginning || !l && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky) {
              clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = void 0;
              const e = a.mousewheel.recentWheelEvents;
              e.length >= 15 && e.shift();
              const i = e.length ? e[e.length - 1] : void 0,
                r = e[0];
              if (e.push(t), i && (t.delta > i.delta || t.direction !== i.direction)) e.splice(0);
              else if (e.length >= 15 && t.time - r.time < 500 && r.delta - t.delta >= 1 && t.delta <= 6) {
                const i = n > 0 ? .8 : .2;
                a.mousewheel.lastEventBeforeSnap = t, e.splice(0), a.mousewheel.timeout = u.nextTick(() => {
                  a.slideToClosest(a.params.speed, !0, void 0, i)
                }, 0)
              }
              a.mousewheel.timeout || (a.mousewheel.timeout = u.nextTick(() => {
                a.mousewheel.lastEventBeforeSnap = t, e.splice(0), a.slideToClosest(a.params.speed, !0, void 0, .5)
              }, 500))
            }
            if (o || a.emit("scroll", e), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), r === a.minTranslate() || r === a.maxTranslate()) return !0
          }
        } else {
          const e = {
              time: u.now(),
              delta: Math.abs(n),
              direction: Math.sign(n),
              raw: t
            },
            i = a.mousewheel.recentWheelEvents;
          i.length >= 2 && i.shift();
          const r = i.length ? i[i.length - 1] : void 0;
          if (i.push(e), r ? (e.direction !== r.direction || e.delta > r.delta || e.time > r.time + 150) && a.mousewheel.animateSlider(e) : a.mousewheel.animateSlider(e), a.mousewheel.releaseScroll(e)) return !0
        }
        return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
      },
      animateSlider(t) {
        const e = this;
        return t.delta >= 6 && u.now() - e.mousewheel.lastScrollTime < 60 || (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(), e.emit("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(), e.emit("scroll", t.raw)), e.mousewheel.lastScrollTime = (new s.Date).getTime(), !1)
      },
      releaseScroll(t) {
        const e = this,
          a = e.params.mousewheel;
        if (t.direction < 0) {
          if (e.isEnd && !e.params.loop && a.releaseOnEdges) return !0
        } else if (e.isBeginning && !e.params.loop && a.releaseOnEdges) return !0;
        return !1
      },
      enable() {
        const t = this,
          e = q.event();
        if (t.params.cssMode) return t.wrapperEl.removeEventListener(e, t.mousewheel.handle), !0;
        if (!e) return !1;
        if (t.mousewheel.enabled) return !1;
        let a = t.$el;
        return "container" !== t.params.mousewheel.eventsTarged && (a = c(t.params.mousewheel.eventsTarged)), a.on("mouseenter", t.mousewheel.handleMouseEnter), a.on("mouseleave", t.mousewheel.handleMouseLeave), a.on(e, t.mousewheel.handle), t.mousewheel.enabled = !0, !0
      },
      disable() {
        const t = this,
          e = q.event();
        if (t.params.cssMode) return t.wrapperEl.addEventListener(e, t.mousewheel.handle), !0;
        if (!e) return !1;
        if (!t.mousewheel.enabled) return !1;
        let a = t.$el;
        return "container" !== t.params.mousewheel.eventsTarged && (a = c(t.params.mousewheel.eventsTarged)), a.off(e, t.mousewheel.handle), t.mousewheel.enabled = !1, !0
      }
    };
    const W = {
      update() {
        const t = this,
          e = t.params.navigation;
        if (t.params.loop) return;
        const {
          $nextEl: a,
          $prevEl: i
        } = t.navigation;
        i && i.length > 0 && (t.isBeginning ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](e.lockClass)), a && a.length > 0 && (t.isEnd ? a.addClass(e.disabledClass) : a.removeClass(e.disabledClass), a[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](e.lockClass))
      },
      onPrevClick(t) {
        t.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
      },
      onNextClick(t) {
        t.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
      },
      init() {
        const t = this,
          e = t.params.navigation;
        if (!e.nextEl && !e.prevEl) return;
        let a, i;
        e.nextEl && (a = c(e.nextEl), t.params.uniqueNavElements && "string" == typeof e.nextEl && a.length > 1 && 1 === t.$el.find(e.nextEl).length && (a = t.$el.find(e.nextEl))), e.prevEl && (i = c(e.prevEl), t.params.uniqueNavElements && "string" == typeof e.prevEl && i.length > 1 && 1 === t.$el.find(e.prevEl).length && (i = t.$el.find(e.prevEl))), a && a.length > 0 && a.on("click", t.navigation.onNextClick), i && i.length > 0 && i.on("click", t.navigation.onPrevClick), u.extend(t.navigation, {
          $nextEl: a,
          nextEl: a && a[0],
          $prevEl: i,
          prevEl: i && i[0]
        })
      },
      destroy() {
        const t = this,
          {
            $nextEl: e,
            $prevEl: a
          } = t.navigation;
        e && e.length && (e.off("click", t.navigation.onNextClick), e.removeClass(t.params.navigation.disabledClass)), a && a.length && (a.off("click", t.navigation.onPrevClick), a.removeClass(t.params.navigation.disabledClass))
      }
    };
    const G = {
      update() {
        const t = this,
          e = t.rtl,
          a = t.params.pagination;
        if (!a.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length) return;
        const i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
          r = t.pagination.$el;
        let n;
        const o = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
        if (t.params.loop ? (n = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), n > i - 1 - 2 * t.loopedSlides && (n -= i - 2 * t.loopedSlides), n > o - 1 && (n -= o), n < 0 && "bullets" !== t.params.paginationType && (n = o + n)) : n = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === a.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
          const i = t.pagination.bullets;
          let o, s, l;
          if (a.dynamicBullets && (t.pagination.bulletSize = i.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", t.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"), a.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (t.pagination.dynamicBulletIndex += n - t.previousIndex, t.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1 ? t.pagination.dynamicBulletIndex = a.dynamicMainBullets - 1 : t.pagination.dynamicBulletIndex < 0 && (t.pagination.dynamicBulletIndex = 0)), o = n - t.pagination.dynamicBulletIndex, s = o + (Math.min(i.length, a.dynamicMainBullets) - 1), l = (s + o) / 2), i.removeClass(`${a.bulletActiveClass} ${a.bulletActiveClass}-next ${a.bulletActiveClass}-next-next ${a.bulletActiveClass}-prev ${a.bulletActiveClass}-prev-prev ${a.bulletActiveClass}-main`), r.length > 1) i.each((t, e) => {
            const i = c(e),
              r = i.index();
            r === n && i.addClass(a.bulletActiveClass), a.dynamicBullets && (r >= o && r <= s && i.addClass(a.bulletActiveClass + "-main"), r === o && i.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), r === s && i.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"))
          });
          else {
            const e = i.eq(n),
              r = e.index();
            if (e.addClass(a.bulletActiveClass), a.dynamicBullets) {
              const e = i.eq(o),
                n = i.eq(s);
              for (let t = o; t <= s; t += 1) i.eq(t).addClass(a.bulletActiveClass + "-main");
              if (t.params.loop)
                if (r >= i.length - a.dynamicMainBullets) {
                  for (let t = a.dynamicMainBullets; t >= 0; t -= 1) i.eq(i.length - t).addClass(a.bulletActiveClass + "-main");
                  i.eq(i.length - a.dynamicMainBullets - 1).addClass(a.bulletActiveClass + "-prev")
                } else e.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), n.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
              else e.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), n.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next")
            }
          }
          if (a.dynamicBullets) {
            const r = Math.min(i.length, a.dynamicMainBullets + 4),
              n = (t.pagination.bulletSize * r - t.pagination.bulletSize) / 2 - l * t.pagination.bulletSize,
              o = e ? "right" : "left";
            i.css(t.isHorizontal() ? o : "top", n + "px")
          }
        }
        if ("fraction" === a.type && (r.find("." + a.currentClass).text(a.formatFractionCurrent(n + 1)), r.find("." + a.totalClass).text(a.formatFractionTotal(o))), "progressbar" === a.type) {
          let e;
          e = a.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
          const i = (n + 1) / o;
          let s = 1,
            l = 1;
          "horizontal" === e ? s = i : l = i, r.find("." + a.progressbarFillClass).transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${l})`).transition(t.params.speed)
        }
        "custom" === a.type && a.renderCustom ? (r.html(a.renderCustom(t, n + 1, o)), t.emit("paginationRender", t, r[0])) : t.emit("paginationUpdate", t, r[0]), r[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](a.lockClass)
      },
      render() {
        const t = this,
          e = t.params.pagination;
        if (!e.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length) return;
        const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
          i = t.pagination.$el;
        let r = "";
        if ("bullets" === e.type) {
          const n = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
          for (let a = 0; a < n; a += 1) e.renderBullet ? r += e.renderBullet.call(t, a, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
          i.html(r), t.pagination.bullets = i.find("." + e.bulletClass)
        }
        "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, i.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, i.html(r)), "custom" !== e.type && t.emit("paginationRender", t.pagination.$el[0])
      },
      init() {
        const t = this,
          e = t.params.pagination;
        if (!e.el) return;
        let a = c(e.el);
        0 !== a.length && (t.params.uniqueNavElements && "string" == typeof e.el && a.length > 1 && (a = t.$el.find(e.el)), "bullets" === e.type && e.clickable && a.addClass(e.clickableClass), a.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (a.addClass(`${e.modifierClass}${e.type}-dynamic`), t.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && a.addClass(e.progressbarOppositeClass), e.clickable && a.on("click", "." + e.bulletClass, (function (e) {
          e.preventDefault();
          let a = c(this).index() * t.params.slidesPerGroup;
          t.params.loop && (a += t.loopedSlides), t.slideTo(a)
        })), u.extend(t.pagination, {
          $el: a,
          el: a[0]
        }))
      },
      destroy() {
        const t = this.params.pagination;
        if (!t.el || !this.pagination.el || !this.pagination.$el || 0 === this.pagination.$el.length) return;
        const e = this.pagination.$el;
        e.removeClass(t.hiddenClass), e.removeClass(t.modifierClass + t.type), this.pagination.bullets && this.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && e.off("click", "." + t.bulletClass)
      }
    };
    const U = {
      setTranslate() {
        const t = this;
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const {
          scrollbar: e,
          rtlTranslate: a,
          progress: i
        } = t, {
          dragSize: r,
          trackSize: n,
          $dragEl: o,
          $el: s
        } = e, l = t.params.scrollbar;
        let c = r,
          d = (n - r) * i;
        a ? (d = -d, d > 0 ? (c = r - d, d = 0) : -d + r > n && (c = n + d)) : d < 0 ? (c = r + d, d = 0) : d + r > n && (c = n - d), t.isHorizontal() ? (o.transform(`translate3d(${d}px, 0, 0)`), o[0].style.width = c + "px") : (o.transform(`translate3d(0px, ${d}px, 0)`), o[0].style.height = c + "px"), l.hide && (clearTimeout(t.scrollbar.timeout), s[0].style.opacity = 1, t.scrollbar.timeout = setTimeout(() => {
          s[0].style.opacity = 0, s.transition(400)
        }, 1e3))
      },
      setTransition(t) {
        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(t)
      },
      updateSize() {
        const t = this;
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const {
          scrollbar: e
        } = t, {
          $dragEl: a,
          $el: i
        } = e;
        a[0].style.width = "", a[0].style.height = "";
        const r = t.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
          n = t.size / t.virtualSize,
          o = n * (r / t.size);
        let s;
        s = "auto" === t.params.scrollbar.dragSize ? r * n : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = n >= 1 ? "none" : "", t.params.scrollbar.hide && (i[0].style.opacity = 0), u.extend(e, {
          trackSize: r,
          divider: n,
          moveDivider: o,
          dragSize: s
        }), e.$el[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
      },
      getPointerPosition(t) {
        return this.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY
      },
      setDragPosition(t) {
        const {
          scrollbar: e,
          rtlTranslate: a
        } = this, {
          $el: i,
          dragSize: r,
          trackSize: n,
          dragStartPos: o
        } = e;
        let s;
        s = (e.getPointerPosition(t) - i.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), s = Math.max(Math.min(s, 1), 0), a && (s = 1 - s);
        const l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * s;
        this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
      },
      onDragStart(t) {
        const e = this,
          a = e.params.scrollbar,
          {
            scrollbar: i,
            $wrapperEl: r
          } = e,
          {
            $el: n,
            $dragEl: o
          } = i;
        e.scrollbar.isTouched = !0, e.scrollbar.dragStartPos = t.target === o[0] || t.target === o ? i.getPointerPosition(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), r.transition(100), o.transition(100), i.setDragPosition(t), clearTimeout(e.scrollbar.dragTimeout), n.transition(0), a.hide && n.css("opacity", 1), e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"), e.emit("scrollbarDragStart", t)
      },
      onDragMove(t) {
        const {
          scrollbar: e,
          $wrapperEl: a
        } = this, {
          $el: i,
          $dragEl: r
        } = e;
        this.scrollbar.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), a.transition(0), i.transition(0), r.transition(0), this.emit("scrollbarDragMove", t))
      },
      onDragEnd(t) {
        const e = this,
          a = e.params.scrollbar,
          {
            scrollbar: i,
            $wrapperEl: r
          } = e,
          {
            $el: n
          } = i;
        e.scrollbar.isTouched && (e.scrollbar.isTouched = !1, e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")), a.hide && (clearTimeout(e.scrollbar.dragTimeout), e.scrollbar.dragTimeout = u.nextTick(() => {
          n.css("opacity", 0), n.transition(400)
        }, 1e3)), e.emit("scrollbarDragEnd", t), a.snapOnRelease && e.slideToClosest())
      },
      enableDraggable() {
        const t = this;
        if (!t.params.scrollbar.el) return;
        const {
          scrollbar: e,
          touchEventsTouch: a,
          touchEventsDesktop: i,
          params: r
        } = t, o = e.$el[0], s = !(!p.passiveListener || !r.passiveListeners) && {
          passive: !1,
          capture: !1
        }, l = !(!p.passiveListener || !r.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        p.touch ? (o.addEventListener(a.start, t.scrollbar.onDragStart, s), o.addEventListener(a.move, t.scrollbar.onDragMove, s), o.addEventListener(a.end, t.scrollbar.onDragEnd, l)) : (o.addEventListener(i.start, t.scrollbar.onDragStart, s), n.addEventListener(i.move, t.scrollbar.onDragMove, s), n.addEventListener(i.end, t.scrollbar.onDragEnd, l))
      },
      disableDraggable() {
        const t = this;
        if (!t.params.scrollbar.el) return;
        const {
          scrollbar: e,
          touchEventsTouch: a,
          touchEventsDesktop: i,
          params: r
        } = t, o = e.$el[0], s = !(!p.passiveListener || !r.passiveListeners) && {
          passive: !1,
          capture: !1
        }, l = !(!p.passiveListener || !r.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        p.touch ? (o.removeEventListener(a.start, t.scrollbar.onDragStart, s), o.removeEventListener(a.move, t.scrollbar.onDragMove, s), o.removeEventListener(a.end, t.scrollbar.onDragEnd, l)) : (o.removeEventListener(i.start, t.scrollbar.onDragStart, s), n.removeEventListener(i.move, t.scrollbar.onDragMove, s), n.removeEventListener(i.end, t.scrollbar.onDragEnd, l))
      },
      init() {
        const t = this;
        if (!t.params.scrollbar.el) return;
        const {
          scrollbar: e,
          $el: a
        } = t, i = t.params.scrollbar;
        let r = c(i.el);
        t.params.uniqueNavElements && "string" == typeof i.el && r.length > 1 && 1 === a.find(i.el).length && (r = a.find(i.el));
        let n = r.find("." + t.params.scrollbar.dragClass);
        0 === n.length && (n = c(`<div class="${t.params.scrollbar.dragClass}"></div>`), r.append(n)), u.extend(e, {
          $el: r,
          el: r[0],
          $dragEl: n,
          dragEl: n[0]
        }), i.draggable && e.enableDraggable()
      },
      destroy() {
        this.scrollbar.disableDraggable()
      }
    };
    const K = {
      setTransform(t, e) {
        const {
          rtl: a
        } = this, i = c(t), r = a ? -1 : 1, n = i.attr("data-swiper-parallax") || "0";
        let o = i.attr("data-swiper-parallax-x"),
          s = i.attr("data-swiper-parallax-y");
        const l = i.attr("data-swiper-parallax-scale"),
          d = i.attr("data-swiper-parallax-opacity");
        if (o || s ? (o = o || "0", s = s || "0") : this.isHorizontal() ? (o = n, s = "0") : (s = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * e * r + "%" : o * e * r + "px", s = s.indexOf("%") >= 0 ? parseInt(s, 10) * e + "%" : s * e + "px", null != d) {
          const t = d - (d - 1) * (1 - Math.abs(e));
          i[0].style.opacity = t
        }
        if (null == l) i.transform(`translate3d(${o}, ${s}, 0px)`);
        else {
          const t = l - (l - 1) * (1 - Math.abs(e));
          i.transform(`translate3d(${o}, ${s}, 0px) scale(${t})`)
        }
      },
      setTranslate() {
        const t = this,
          {
            $el: e,
            slides: a,
            progress: i,
            snapGrid: r
          } = t;
        e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e, a) => {
          t.parallax.setTransform(a, i)
        }), a.each((e, a) => {
          let n = a.progress;
          t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(e / 2) - i * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), c(a).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e, a) => {
            t.parallax.setTransform(a, n)
          })
        })
      },
      setTransition(t = this.params.speed) {
        const {
          $el: e
        } = this;
        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e, a) => {
          const i = c(a);
          let r = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
          0 === t && (r = 0), i.transition(r)
        })
      }
    };
    const Q = {
      getDistanceBetweenTouches(t) {
        if (t.targetTouches.length < 2) return 1;
        const e = t.targetTouches[0].pageX,
          a = t.targetTouches[0].pageY,
          i = t.targetTouches[1].pageX,
          r = t.targetTouches[1].pageY;
        return Math.sqrt((i - e) ** 2 + (r - a) ** 2)
      },
      onGestureStart(t) {
        const e = this,
          a = e.params.zoom,
          i = e.zoom,
          {
            gesture: r
          } = i;
        if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !p.gestures) {
          if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
          i.fakeGestureTouched = !0, r.scaleStart = Q.getDistanceBetweenTouches(t)
        }
        r.$slideEl && r.$slideEl.length || (r.$slideEl = c(t.target).closest("." + e.params.slideClass), 0 === r.$slideEl.length && (r.$slideEl = e.slides.eq(e.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent("." + a.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl && r.$imageEl.transition(0), e.zoom.isScaling = !0) : r.$imageEl = void 0
      },
      onGestureChange(t) {
        const e = this.params.zoom,
          a = this.zoom,
          {
            gesture: i
          } = a;
        if (!p.gestures) {
          if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
          a.fakeGestureMoved = !0, i.scaleMove = Q.getDistanceBetweenTouches(t)
        }
        i.$imageEl && 0 !== i.$imageEl.length && (a.scale = p.gestures ? t.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + (a.scale - i.maxRatio + 1) ** .5), a.scale < e.minRatio && (a.scale = e.minRatio + 1 - (e.minRatio - a.scale + 1) ** .5), i.$imageEl.transform(`translate3d(0,0,0) scale(${a.scale})`))
      },
      onGestureEnd(t) {
        const e = this.params.zoom,
          a = this.zoom,
          {
            gesture: i
          } = a;
        if (!p.gestures) {
          if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
          if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !M.android) return;
          a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
        }
        i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), e.minRatio), i.$imageEl.transition(this.params.speed).transform(`translate3d(0,0,0) scale(${a.scale})`), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0))
      },
      onTouchStart(t) {
        const e = this.zoom,
          {
            gesture: a,
            image: i
          } = e;
        a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (M.android && t.cancelable && t.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, i.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
      },
      onTouchMove(t) {
        const e = this,
          a = e.zoom,
          {
            gesture: i,
            image: r,
            velocity: n
          } = a;
        if (!i.$imageEl || 0 === i.$imageEl.length) return;
        if (e.allowClick = !1, !r.isTouched || !i.$slideEl) return;
        r.isMoved || (r.width = i.$imageEl[0].offsetWidth, r.height = i.$imageEl[0].offsetHeight, r.startX = u.getTranslate(i.$imageWrapEl[0], "x") || 0, r.startY = u.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), e.rtl && (r.startX = -r.startX, r.startY = -r.startY));
        const o = r.width * a.scale,
          s = r.height * a.scale;
        if (!(o < i.slideWidth && s < i.slideHeight)) {
          if (r.minX = Math.min(i.slideWidth / 2 - o / 2, 0), r.maxX = -r.minX, r.minY = Math.min(i.slideHeight / 2 - s / 2, 0), r.maxY = -r.minY, r.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, r.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !r.isMoved && !a.isScaling) {
            if (e.isHorizontal() && (Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x || Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x)) return void(r.isTouched = !1);
            if (!e.isHorizontal() && (Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y || Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y)) return void(r.isTouched = !1)
          }
          t.cancelable && t.preventDefault(), t.stopPropagation(), r.isMoved = !0, r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX, r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY, r.currentX < r.minX && (r.currentX = r.minX + 1 - (r.minX - r.currentX + 1) ** .8), r.currentX > r.maxX && (r.currentX = r.maxX - 1 + (r.currentX - r.maxX + 1) ** .8), r.currentY < r.minY && (r.currentY = r.minY + 1 - (r.minY - r.currentY + 1) ** .8), r.currentY > r.maxY && (r.currentY = r.maxY - 1 + (r.currentY - r.maxY + 1) ** .8), n.prevPositionX || (n.prevPositionX = r.touchesCurrent.x), n.prevPositionY || (n.prevPositionY = r.touchesCurrent.y), n.prevTime || (n.prevTime = Date.now()), n.x = (r.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2, n.y = (r.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2, Math.abs(r.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0), Math.abs(r.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0), n.prevPositionX = r.touchesCurrent.x, n.prevPositionY = r.touchesCurrent.y, n.prevTime = Date.now(), i.$imageWrapEl.transform(`translate3d(${r.currentX}px, ${r.currentY}px,0)`)
        }
      },
      onTouchEnd() {
        const t = this.zoom,
          {
            gesture: e,
            image: a,
            velocity: i
          } = t;
        if (!e.$imageEl || 0 === e.$imageEl.length) return;
        if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
        a.isTouched = !1, a.isMoved = !1;
        let r = 300,
          n = 300;
        const o = i.x * r,
          s = a.currentX + o,
          l = i.y * n,
          c = a.currentY + l;
        0 !== i.x && (r = Math.abs((s - a.currentX) / i.x)), 0 !== i.y && (n = Math.abs((c - a.currentY) / i.y));
        const d = Math.max(r, n);
        a.currentX = s, a.currentY = c;
        const h = a.width * t.scale,
          u = a.height * t.scale;
        a.minX = Math.min(e.slideWidth / 2 - h / 2, 0), a.maxX = -a.minX, a.minY = Math.min(e.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), e.$imageWrapEl.transition(d).transform(`translate3d(${a.currentX}px, ${a.currentY}px,0)`)
      },
      onTransitionEnd() {
        const t = this.zoom,
          {
            gesture: e
          } = t;
        e.$slideEl && this.previousIndex !== this.activeIndex && (e.$imageEl && e.$imageEl.transform("translate3d(0,0,0) scale(1)"), e.$imageWrapEl && e.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, e.$slideEl = void 0, e.$imageEl = void 0, e.$imageWrapEl = void 0)
      },
      toggle(t) {
        const e = this.zoom;
        e.scale && 1 !== e.scale ? e.out() : e.in(t)
      },
      in (t) {
        const e = this,
          a = e.zoom,
          i = e.params.zoom,
          {
            gesture: r,
            image: n
          } = a;
        if (r.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? r.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : r.$slideEl = e.slides.eq(e.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)), !r.$imageEl || 0 === r.$imageEl.length) return;
        let o, s, l, c, d, h, u, p, g, f, m, v, y, w, b, x, M, z;
        r.$slideEl.addClass("" + i.zoomedSlideClass), void 0 === n.touchesStart.x && t ? (o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, s = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (o = n.touchesStart.x, s = n.touchesStart.y), a.scale = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, a.currentScale = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, t ? (M = r.$slideEl[0].offsetWidth, z = r.$slideEl[0].offsetHeight, l = r.$slideEl.offset().left, c = r.$slideEl.offset().top, d = l + M / 2 - o, h = c + z / 2 - s, g = r.$imageEl[0].offsetWidth, f = r.$imageEl[0].offsetHeight, m = g * a.scale, v = f * a.scale, y = Math.min(M / 2 - m / 2, 0), w = Math.min(z / 2 - v / 2, 0), b = -y, x = -w, u = d * a.scale, p = h * a.scale, u < y && (u = y), u > b && (u = b), p < w && (p = w), p > x && (p = x)) : (u = 0, p = 0), r.$imageWrapEl.transition(300).transform(`translate3d(${u}px, ${p}px,0)`), r.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${a.scale})`)
      },
      out() {
        const t = this,
          e = t.zoom,
          a = t.params.zoom,
          {
            gesture: i
          } = e;
        i.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? i.$slideEl = t.$wrapperEl.children("." + t.params.slideActiveClass) : i.$slideEl = t.slides.eq(t.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
      },
      enable() {
        const t = this,
          e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const a = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && {
            passive: !0,
            capture: !1
          },
          i = !p.passiveListener || {
            passive: !1,
            capture: !0
          },
          r = "." + t.params.slideClass;
        p.gestures ? (t.$wrapperEl.on("gesturestart", r, e.onGestureStart, a), t.$wrapperEl.on("gesturechange", r, e.onGestureChange, a), t.$wrapperEl.on("gestureend", r, e.onGestureEnd, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, e.onGestureStart, a), t.$wrapperEl.on(t.touchEvents.move, r, e.onGestureChange, i), t.$wrapperEl.on(t.touchEvents.end, r, e.onGestureEnd, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, e.onGestureEnd, a)), t.$wrapperEl.on(t.touchEvents.move, "." + t.params.zoom.containerClass, e.onTouchMove, i)
      },
      disable() {
        const t = this,
          e = t.zoom;
        if (!e.enabled) return;
        t.zoom.enabled = !1;
        const a = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && {
            passive: !0,
            capture: !1
          },
          i = !p.passiveListener || {
            passive: !1,
            capture: !0
          },
          r = "." + t.params.slideClass;
        p.gestures ? (t.$wrapperEl.off("gesturestart", r, e.onGestureStart, a), t.$wrapperEl.off("gesturechange", r, e.onGestureChange, a), t.$wrapperEl.off("gestureend", r, e.onGestureEnd, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, e.onGestureStart, a), t.$wrapperEl.off(t.touchEvents.move, r, e.onGestureChange, i), t.$wrapperEl.off(t.touchEvents.end, r, e.onGestureEnd, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, e.onGestureEnd, a)), t.$wrapperEl.off(t.touchEvents.move, "." + t.params.zoom.containerClass, e.onTouchMove, i)
      }
    };
    const J = {
      loadInSlide(t, e = !0) {
        const a = this,
          i = a.params.lazy;
        if (void 0 === t) return;
        if (0 === a.slides.length) return;
        const r = a.virtual && a.params.virtual.enabled ? a.$wrapperEl.children(`.${a.params.slideClass}[data-swiper-slide-index="${t}"]`) : a.slides.eq(t);
        let n = r.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
        !r.hasClass(i.elementClass) || r.hasClass(i.loadedClass) || r.hasClass(i.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each((t, n) => {
          const o = c(n);
          o.addClass(i.loadingClass);
          const s = o.attr("data-background"),
            l = o.attr("data-src"),
            d = o.attr("data-srcset"),
            h = o.attr("data-sizes"),
            u = o.parent("picture");
          a.loadImage(o[0], l || s, d, h, !1, () => {
            if (null != a && a && (!a || a.params) && !a.destroyed) {
              if (s ? (o.css("background-image", `url("${s}")`), o.removeAttr("data-background")) : (d && (o.attr("srcset", d), o.removeAttr("data-srcset")), h && (o.attr("sizes", h), o.removeAttr("data-sizes")), u.length && u.children("source").each((t, e) => {
                  const a = c(e);
                  a.attr("data-srcset") && (a.attr("srcset", a.attr("data-srcset")), a.removeAttr("data-srcset"))
                }), l && (o.attr("src", l), o.removeAttr("data-src"))), o.addClass(i.loadedClass).removeClass(i.loadingClass), r.find("." + i.preloaderClass).remove(), a.params.loop && e) {
                const t = r.attr("data-swiper-slide-index");
                if (r.hasClass(a.params.slideDuplicateClass)) {
                  const e = a.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${a.params.slideDuplicateClass})`);
                  a.lazy.loadInSlide(e.index(), !1)
                } else {
                  const e = a.$wrapperEl.children(`.${a.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`);
                  a.lazy.loadInSlide(e.index(), !1)
                }
              }
              a.emit("lazyImageReady", r[0], o[0]), a.params.autoHeight && a.updateAutoHeight()
            }
          }), a.emit("lazyImageLoad", r[0], o[0])
        })
      },
      load() {
        const t = this,
          {
            $wrapperEl: e,
            params: a,
            slides: i,
            activeIndex: r
          } = t,
          n = t.virtual && a.virtual.enabled,
          o = a.lazy;
        let s = a.slidesPerView;

        function l(t) {
          if (n) {
            if (e.children(`.${a.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0
          } else if (i[t]) return !0;
          return !1
        }

        function d(t) {
          return n ? c(t).attr("data-swiper-slide-index") : c(t).index()
        }
        if ("auto" === s && (s = 0), t.lazy.initialImageLoaded || (t.lazy.initialImageLoaded = !0), t.params.watchSlidesVisibility) e.children("." + a.slideVisibleClass).each((e, a) => {
          const i = n ? c(a).attr("data-swiper-slide-index") : c(a).index();
          t.lazy.loadInSlide(i)
        });
        else if (s > 1)
          for (let e = r; e < r + s; e += 1) l(e) && t.lazy.loadInSlide(e);
        else t.lazy.loadInSlide(r);
        if (o.loadPrevNext)
          if (s > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
            const e = o.loadPrevNextAmount,
              a = s,
              n = Math.min(r + a + Math.max(e, a), i.length),
              c = Math.max(r - Math.max(a, e), 0);
            for (let e = r + s; e < n; e += 1) l(e) && t.lazy.loadInSlide(e);
            for (let e = c; e < r; e += 1) l(e) && t.lazy.loadInSlide(e)
          } else {
            const i = e.children("." + a.slideNextClass);
            i.length > 0 && t.lazy.loadInSlide(d(i));
            const r = e.children("." + a.slidePrevClass);
            r.length > 0 && t.lazy.loadInSlide(d(r))
          }
      }
    };
    const Z = {
      LinearSpline: function (t, e) {
        const a = function () {
          let t, e, a;
          return (i, r) => {
            for (e = -1, t = i.length; t - e > 1;) a = t + e >> 1, i[a] <= r ? e = a : t = a;
            return t
          }
        }();
        let i, r;
        return this.x = t, this.y = e, this.lastIndex = t.length - 1, this.interpolate = function (t) {
          return t ? (r = a(this.x, t), i = r - 1, (t - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0
        }, this
      },
      getInterpolateFunction(t) {
        const e = this;
        e.controller.spline || (e.controller.spline = e.params.loop ? new Z.LinearSpline(e.slidesGrid, t.slidesGrid) : new Z.LinearSpline(e.snapGrid, t.snapGrid))
      },
      setTranslate(t, e) {
        const a = this,
          i = a.controller.control;
        let r, n;

        function o(t) {
          const e = a.rtlTranslate ? -a.translate : a.translate;
          "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(t), n = -a.controller.spline.interpolate(-e)), n && "container" !== a.params.controller.by || (r = (t.maxTranslate() - t.minTranslate()) / (a.maxTranslate() - a.minTranslate()), n = (e - a.minTranslate()) * r + t.minTranslate()), a.params.controller.inverse && (n = t.maxTranslate() - n), t.updateProgress(n), t.setTranslate(n, a), t.updateActiveIndex(), t.updateSlidesClasses()
        }
        if (Array.isArray(i))
          for (let t = 0; t < i.length; t += 1) i[t] !== e && i[t] instanceof O && o(i[t]);
        else i instanceof O && e !== i && o(i)
      },
      setTransition(t, e) {
        const a = this,
          i = a.controller.control;
        let r;

        function n(e) {
          e.setTransition(t, a), 0 !== t && (e.transitionStart(), e.params.autoHeight && u.nextTick(() => {
            e.updateAutoHeight()
          }), e.$wrapperEl.transitionEnd(() => {
            i && (e.params.loop && "slide" === a.params.controller.by && e.loopFix(), e.transitionEnd())
          }))
        }
        if (Array.isArray(i))
          for (r = 0; r < i.length; r += 1) i[r] !== e && i[r] instanceof O && n(i[r]);
        else i instanceof O && e !== i && n(i)
      }
    };
    const tt = {
      makeElFocusable: t => (t.attr("tabIndex", "0"), t),
      makeElNotFocusable: t => (t.attr("tabIndex", "-1"), t),
      addElRole: (t, e) => (t.attr("role", e), t),
      addElLabel: (t, e) => (t.attr("aria-label", e), t),
      disableEl: t => (t.attr("aria-disabled", !0), t),
      enableEl: t => (t.attr("aria-disabled", !1), t),
      onEnterKey(t) {
        const e = this,
          a = e.params.a11y;
        if (13 !== t.keyCode) return;
        const i = c(t.target);
        e.navigation && e.navigation.$nextEl && i.is(e.navigation.$nextEl) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? e.a11y.notify(a.lastSlideMessage) : e.a11y.notify(a.nextSlideMessage)), e.navigation && e.navigation.$prevEl && i.is(e.navigation.$prevEl) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? e.a11y.notify(a.firstSlideMessage) : e.a11y.notify(a.prevSlideMessage)), e.pagination && i.is("." + e.params.pagination.bulletClass) && i[0].click()
      },
      notify(t) {
        const e = this.a11y.liveRegion;
        0 !== e.length && (e.html(""), e.html(t))
      },
      updateNavigation() {
        const t = this;
        if (t.params.loop || !t.navigation) return;
        const {
          $nextEl: e,
          $prevEl: a
        } = t.navigation;
        a && a.length > 0 && (t.isBeginning ? (t.a11y.disableEl(a), t.a11y.makeElNotFocusable(a)) : (t.a11y.enableEl(a), t.a11y.makeElFocusable(a))), e && e.length > 0 && (t.isEnd ? (t.a11y.disableEl(e), t.a11y.makeElNotFocusable(e)) : (t.a11y.enableEl(e), t.a11y.makeElFocusable(e)))
      },
      updatePagination() {
        const t = this,
          e = t.params.a11y;
        t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each((a, i) => {
          const r = c(i);
          t.a11y.makeElFocusable(r), t.a11y.addElRole(r, "button"), t.a11y.addElLabel(r, e.paginationBulletMessage.replace(/\{\{index\}\}/, r.index() + 1))
        })
      },
      init() {
        const t = this;
        t.$el.append(t.a11y.liveRegion);
        const e = t.params.a11y;
        let a, i;
        t.navigation && t.navigation.$nextEl && (a = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (i = t.navigation.$prevEl), a && (t.a11y.makeElFocusable(a), t.a11y.addElRole(a, "button"), t.a11y.addElLabel(a, e.nextSlideMessage), a.on("keydown", t.a11y.onEnterKey)), i && (t.a11y.makeElFocusable(i), t.a11y.addElRole(i, "button"), t.a11y.addElLabel(i, e.prevSlideMessage), i.on("keydown", t.a11y.onEnterKey)), t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.$el.on("keydown", "." + t.params.pagination.bulletClass, t.a11y.onEnterKey)
      },
      destroy() {
        const t = this;
        let e, a;
        t.a11y.liveRegion && t.a11y.liveRegion.length > 0 && t.a11y.liveRegion.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (a = t.navigation.$prevEl), e && e.off("keydown", t.a11y.onEnterKey), a && a.off("keydown", t.a11y.onEnterKey), t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.$el.off("keydown", "." + t.params.pagination.bulletClass, t.a11y.onEnterKey)
      }
    };
    const et = {
      init() {
        const t = this;
        if (!t.params.history) return;
        if (!s.history || !s.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
        const e = t.history;
        e.initialized = !0, e.paths = et.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, t.params.runCallbacksOnInit), t.params.history.replaceState || s.addEventListener("popstate", t.history.setHistoryPopState))
      },
      destroy() {
        const t = this;
        t.params.history.replaceState || s.removeEventListener("popstate", t.history.setHistoryPopState)
      },
      setHistoryPopState() {
        this.history.paths = et.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
      },
      getPathValues() {
        const t = s.location.pathname.slice(1).split("/").filter(t => "" !== t),
          e = t.length;
        return {
          key: t[e - 2],
          value: t[e - 1]
        }
      },
      setHistory(t, e) {
        if (!this.history.initialized || !this.params.history.enabled) return;
        const a = this.slides.eq(e);
        let i = et.slugify(a.attr("data-history"));
        s.location.pathname.includes(t) || (i = `${t}/${i}`);
        const r = s.history.state;
        r && r.value === i || (this.params.history.replaceState ? s.history.replaceState({
          value: i
        }, null, i) : s.history.pushState({
          value: i
        }, null, i))
      },
      slugify: t => t.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
      scrollToSlide(t, e, a) {
        const i = this;
        if (e)
          for (let r = 0, n = i.slides.length; r < n; r += 1) {
            const n = i.slides.eq(r);
            if (et.slugify(n.attr("data-history")) === e && !n.hasClass(i.params.slideDuplicateClass)) {
              const e = n.index();
              i.slideTo(e, t, a)
            }
          } else i.slideTo(0, t, a)
      }
    };
    const at = {
      onHashCange() {
        const t = this;
        t.emit("hashChange");
        const e = n.location.hash.replace("#", "");
        if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
          const a = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
          if (void 0 === a) return;
          t.slideTo(a)
        }
      },
      setHash() {
        const t = this;
        if (t.hashNavigation.initialized && t.params.hashNavigation.enabled)
          if (t.params.hashNavigation.replaceState && s.history && s.history.replaceState) s.history.replaceState(null, null, "#" + t.slides.eq(t.activeIndex).attr("data-hash") || ""), t.emit("hashSet");
          else {
            const e = t.slides.eq(t.activeIndex),
              a = e.attr("data-hash") || e.attr("data-history");
            n.location.hash = a || "", t.emit("hashSet")
          }
      },
      init() {
        const t = this;
        if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
        t.hashNavigation.initialized = !0;
        const e = n.location.hash.replace("#", "");
        if (e) {
          const a = 0;
          for (let i = 0, r = t.slides.length; i < r; i += 1) {
            const r = t.slides.eq(i);
            if ((r.attr("data-hash") || r.attr("data-history")) === e && !r.hasClass(t.params.slideDuplicateClass)) {
              const e = r.index();
              t.slideTo(e, a, t.params.runCallbacksOnInit, !0)
            }
          }
        }
        t.params.hashNavigation.watchState && c(s).on("hashchange", t.hashNavigation.onHashCange)
      },
      destroy() {
        const t = this;
        t.params.hashNavigation.watchState && c(s).off("hashchange", t.hashNavigation.onHashCange)
      }
    };
    const it = {
      run() {
        const t = this,
          e = t.slides.eq(t.activeIndex);
        let a = t.params.autoplay.delay;
        e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || t.params.autoplay.delay), clearTimeout(t.autoplay.timeout), t.autoplay.timeout = u.nextTick(() => {
          t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(), t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.params.loop ? (t.loopFix(), t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")), t.params.cssMode && t.autoplay.running && t.autoplay.run()
        }, a)
      },
      start() {
        return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
      },
      stop() {
        const t = this;
        return !!t.autoplay.running && (void 0 !== t.autoplay.timeout && (t.autoplay.timeout && (clearTimeout(t.autoplay.timeout), t.autoplay.timeout = void 0), t.autoplay.running = !1, t.emit("autoplayStop"), !0))
      },
      pause(t) {
        const e = this;
        e.autoplay.running && (e.autoplay.paused || (e.autoplay.timeout && clearTimeout(e.autoplay.timeout), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? (e.$wrapperEl[0].addEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].addEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd)) : (e.autoplay.paused = !1, e.autoplay.run())))
      }
    };
    const rt = {
      setTranslate() {
        const t = this,
          {
            slides: e
          } = t;
        for (let a = 0; a < e.length; a += 1) {
          const e = t.slides.eq(a);
          let i = -e[0].swiperSlideOffset;
          t.params.virtualTranslate || (i -= t.translate);
          let r = 0;
          t.isHorizontal() || (r = i, i = 0);
          const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
          e.css({
            opacity: n
          }).transform(`translate3d(${i}px, ${r}px, 0px)`)
        }
      },
      setTransition(t) {
        const e = this,
          {
            slides: a,
            $wrapperEl: i
          } = e;
        if (a.transition(t), e.params.virtualTranslate && 0 !== t) {
          let t = !1;
          a.transitionEnd(() => {
            if (t) return;
            if (!e || e.destroyed) return;
            t = !0, e.animating = !1;
            const a = ["webkitTransitionEnd", "transitionend"];
            for (let t = 0; t < a.length; t += 1) i.trigger(a[t])
          })
        }
      }
    };
    const nt = {
      setTranslate() {
        const {
          $el: t,
          $wrapperEl: e,
          slides: a,
          width: i,
          height: r,
          rtlTranslate: n,
          size: o
        } = this, s = this.params.cubeEffect, l = this.isHorizontal(), d = this.virtual && this.params.virtual.enabled;
        let h, u = 0;
        s.shadow && (l ? (h = e.find(".swiper-cube-shadow"), 0 === h.length && (h = c('<div class="swiper-cube-shadow"></div>'), e.append(h)), h.css({
          height: i + "px"
        })) : (h = t.find(".swiper-cube-shadow"), 0 === h.length && (h = c('<div class="swiper-cube-shadow"></div>'), t.append(h))));
        for (let t = 0; t < a.length; t += 1) {
          const e = a.eq(t);
          let i = t;
          d && (i = parseInt(e.attr("data-swiper-slide-index"), 10));
          let r = 90 * i,
            h = Math.floor(r / 360);
          n && (r = -r, h = Math.floor(-r / 360));
          const p = Math.max(Math.min(e[0].progress, 1), -1);
          let g = 0,
            f = 0,
            m = 0;
          i % 4 == 0 ? (g = 4 * -h * o, m = 0) : (i - 1) % 4 == 0 ? (g = 0, m = 4 * -h * o) : (i - 2) % 4 == 0 ? (g = o + 4 * h * o, m = o) : (i - 3) % 4 == 0 && (g = -o, m = 3 * o + 4 * o * h), n && (g = -g), l || (f = g, g = 0);
          const v = `rotateX(${l?0:-r}deg) rotateY(${l?r:0}deg) translate3d(${g}px, ${f}px, ${m}px)`;
          if (p <= 1 && p > -1 && (u = 90 * i + 90 * p, n && (u = 90 * -i - 90 * p)), e.transform(v), s.slideShadows) {
            let t = l ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
              a = l ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === t.length && (t = c(`<div class="swiper-slide-shadow-${l?"left":"top"}"></div>`), e.append(t)), 0 === a.length && (a = c(`<div class="swiper-slide-shadow-${l?"right":"bottom"}"></div>`), e.append(a)), t.length && (t[0].style.opacity = Math.max(-p, 0)), a.length && (a[0].style.opacity = Math.max(p, 0))
          }
        }
        if (e.css({
            "-webkit-transform-origin": `50% 50% -${o/2}px`,
            "-moz-transform-origin": `50% 50% -${o/2}px`,
            "-ms-transform-origin": `50% 50% -${o/2}px`,
            "transform-origin": `50% 50% -${o/2}px`
          }), s.shadow)
          if (l) h.transform(`translate3d(0px, ${i/2+s.shadowOffset}px, ${-i/2}px) rotateX(90deg) rotateZ(0deg) scale(${s.shadowScale})`);
          else {
            const t = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              e = 1.5 - (Math.sin(2 * t * Math.PI / 360) / 2 + Math.cos(2 * t * Math.PI / 360) / 2),
              a = s.shadowScale,
              i = s.shadowScale / e,
              n = s.shadowOffset;
            h.transform(`scale3d(${a}, 1, ${i}) translate3d(0px, ${r/2+n}px, ${-r/2/i}px) rotateX(-90deg)`)
          } const p = F.isSafari || F.isWebView ? -o / 2 : 0;
        e.transform(`translate3d(0px,0,${p}px) rotateX(${this.isHorizontal()?0:u}deg) rotateY(${this.isHorizontal()?-u:0}deg)`)
      },
      setTransition(t) {
        const {
          $el: e,
          slides: a
        } = this;
        a.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), this.params.cubeEffect.shadow && !this.isHorizontal() && e.find(".swiper-cube-shadow").transition(t)
      }
    };
    const ot = {
      setTranslate() {
        const t = this,
          {
            slides: e,
            rtlTranslate: a
          } = t;
        for (let i = 0; i < e.length; i += 1) {
          const r = e.eq(i);
          let n = r[0].progress;
          t.params.flipEffect.limitRotation && (n = Math.max(Math.min(r[0].progress, 1), -1));
          let o = -180 * n,
            s = 0,
            l = -r[0].swiperSlideOffset,
            d = 0;
          if (t.isHorizontal() ? a && (o = -o) : (d = l, l = 0, s = -o, o = 0), r[0].style.zIndex = -Math.abs(Math.round(n)) + e.length, t.params.flipEffect.slideShadows) {
            let e = t.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
              a = t.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
            0 === e.length && (e = c(`<div class="swiper-slide-shadow-${t.isHorizontal()?"left":"top"}"></div>`), r.append(e)), 0 === a.length && (a = c(`<div class="swiper-slide-shadow-${t.isHorizontal()?"right":"bottom"}"></div>`), r.append(a)), e.length && (e[0].style.opacity = Math.max(-n, 0)), a.length && (a[0].style.opacity = Math.max(n, 0))
          }
          r.transform(`translate3d(${l}px, ${d}px, 0px) rotateX(${s}deg) rotateY(${o}deg)`)
        }
      },
      setTransition(t) {
        const e = this,
          {
            slides: a,
            activeIndex: i,
            $wrapperEl: r
          } = e;
        if (a.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.virtualTranslate && 0 !== t) {
          let t = !1;
          a.eq(i).transitionEnd((function () {
            if (t) return;
            if (!e || e.destroyed) return;
            t = !0, e.animating = !1;
            const a = ["webkitTransitionEnd", "transitionend"];
            for (let t = 0; t < a.length; t += 1) r.trigger(a[t])
          }))
        }
      }
    };
    const st = {
      setTranslate() {
        const {
          width: t,
          height: e,
          slides: a,
          $wrapperEl: i,
          slidesSizesGrid: r
        } = this, n = this.params.coverflowEffect, o = this.isHorizontal(), s = this.translate, l = o ? t / 2 - s : e / 2 - s, d = o ? n.rotate : -n.rotate, h = n.depth;
        for (let t = 0, e = a.length; t < e; t += 1) {
          const e = a.eq(t),
            i = r[t],
            s = (l - e[0].swiperSlideOffset - i / 2) / i * n.modifier;
          let u = o ? d * s : 0,
            p = o ? 0 : d * s,
            g = -h * Math.abs(s),
            f = n.stretch;
          "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(n.stretch) / 100 * i);
          let m = o ? 0 : f * s,
            v = o ? f * s : 0,
            y = 1 - (1 - n.scale) * Math.abs(s);
          Math.abs(v) < .001 && (v = 0), Math.abs(m) < .001 && (m = 0), Math.abs(g) < .001 && (g = 0), Math.abs(u) < .001 && (u = 0), Math.abs(p) < .001 && (p = 0), Math.abs(y) < .001 && (y = 0);
          const w = `translate3d(${v}px,${m}px,${g}px)  rotateX(${p}deg) rotateY(${u}deg) scale(${y})`;
          if (e.transform(w), e[0].style.zIndex = 1 - Math.abs(Math.round(s)), n.slideShadows) {
            let t = o ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
              a = o ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === t.length && (t = c(`<div class="swiper-slide-shadow-${o?"left":"top"}"></div>`), e.append(t)), 0 === a.length && (a = c(`<div class="swiper-slide-shadow-${o?"right":"bottom"}"></div>`), e.append(a)), t.length && (t[0].style.opacity = s > 0 ? s : 0), a.length && (a[0].style.opacity = -s > 0 ? -s : 0)
          }
        }
        if (p.pointerEvents || p.prefixedPointerEvents) {
          i[0].style.perspectiveOrigin = l + "px 50%"
        }
      },
      setTransition(t) {
        this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
      }
    };
    const lt = {
      init() {
        const t = this,
          {
            thumbs: e
          } = t.params,
          a = t.constructor;
        e.swiper instanceof a ? (t.thumbs.swiper = e.swiper, u.extend(t.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), u.extend(t.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })) : u.isObject(e.swiper) && (t.thumbs.swiper = new a(u.extend({}, e.swiper, {
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })), t.thumbs.swiperCreated = !0), t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", t.thumbs.onThumbClick)
      },
      onThumbClick() {
        const t = this,
          e = t.thumbs.swiper;
        if (!e) return;
        const a = e.clickedIndex,
          i = e.clickedSlide;
        if (i && c(i).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
        if (null == a) return;
        let r;
        if (r = e.params.loop ? parseInt(c(e.clickedSlide).attr("data-swiper-slide-index"), 10) : a, t.params.loop) {
          let e = t.activeIndex;
          t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
          const a = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${r}"]`).eq(0).index(),
            i = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${r}"]`).eq(0).index();
          r = void 0 === a ? i : void 0 === i ? a : i - e < e - a ? i : a
        }
        t.slideTo(r)
      },
      update(t) {
        const e = this,
          a = e.thumbs.swiper;
        if (!a) return;
        const i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView,
          r = e.params.thumbs.autoScrollOffset,
          n = r && !a.params.loop;
        if (e.realIndex !== a.realIndex || n) {
          let o, s, l = a.activeIndex;
          if (a.params.loop) {
            a.slides.eq(l).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, l = a.activeIndex);
            const t = a.slides.eq(l).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),
              i = a.slides.eq(l).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();
            o = void 0 === t ? i : void 0 === i ? t : i - l == l - t ? l : i - l < l - t ? i : t, s = e.activeIndex > e.previousIndex ? "next" : "prev"
          } else o = e.realIndex, s = o > e.previousIndex ? "next" : "prev";
          n && (o += "next" === s ? r : -1 * r), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(o) < 0 && (a.params.centeredSlides ? o = o > l ? o - Math.floor(i / 2) + 1 : o + Math.floor(i / 2) - 1 : o > l && (o = o - i + 1), a.slideTo(o, t ? 0 : void 0))
        }
        let o = 1;
        const s = e.params.thumbs.slideThumbActiveClass;
        if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (o = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (o = 1), o = Math.floor(o), a.slides.removeClass(s), a.params.loop || a.params.virtual && a.params.virtual.enabled)
          for (let t = 0; t < o; t += 1) a.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+t}"]`).addClass(s);
        else
          for (let t = 0; t < o; t += 1) a.slides.eq(e.realIndex + t).addClass(s)
      }
    };
    const ct = [H, V, B, I, j, N, X, {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarged: "container"
        }
      },
      create() {
        u.extend(this, {
          mousewheel: {
            enabled: !1,
            enable: q.enable.bind(this),
            disable: q.disable.bind(this),
            handle: q.handle.bind(this),
            handleMouseEnter: q.handleMouseEnter.bind(this),
            handleMouseLeave: q.handleMouseLeave.bind(this),
            animateSlider: q.animateSlider.bind(this),
            releaseScroll: q.releaseScroll.bind(this),
            lastScrollTime: u.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: []
          }
        })
      },
      on: {
        init() {
          const t = this;
          !t.params.mousewheel.enabled && t.params.cssMode && t.mousewheel.disable(), t.params.mousewheel.enabled && t.mousewheel.enable()
        },
        destroy() {
          const t = this;
          t.params.cssMode && t.mousewheel.enable(), t.mousewheel.enabled && t.mousewheel.disable()
        }
      }
    }, {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock"
        }
      },
      create() {
        u.extend(this, {
          navigation: {
            init: W.init.bind(this),
            update: W.update.bind(this),
            destroy: W.destroy.bind(this),
            onNextClick: W.onNextClick.bind(this),
            onPrevClick: W.onPrevClick.bind(this)
          }
        })
      },
      on: {
        init() {
          this.navigation.init(), this.navigation.update()
        },
        toEdge() {
          this.navigation.update()
        },
        fromEdge() {
          this.navigation.update()
        },
        destroy() {
          this.navigation.destroy()
        },
        click(t) {
          const e = this,
            {
              $nextEl: a,
              $prevEl: i
            } = e.navigation;
          if (e.params.navigation.hideOnClick && !c(t.target).is(i) && !c(t.target).is(a)) {
            let t;
            a ? t = a.hasClass(e.params.navigation.hiddenClass) : i && (t = i.hasClass(e.params.navigation.hiddenClass)), !0 === t ? e.emit("navigationShow", e) : e.emit("navigationHide", e), a && a.toggleClass(e.params.navigation.hiddenClass), i && i.toggleClass(e.params.navigation.hiddenClass)
          }
        }
      }
    }, {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: t => t,
          formatFractionTotal: t => t,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock"
        }
      },
      create() {
        u.extend(this, {
          pagination: {
            init: G.init.bind(this),
            render: G.render.bind(this),
            update: G.update.bind(this),
            destroy: G.destroy.bind(this),
            dynamicBulletIndex: 0
          }
        })
      },
      on: {
        init() {
          this.pagination.init(), this.pagination.render(), this.pagination.update()
        },
        activeIndexChange() {
          const t = this;
          (t.params.loop || void 0 === t.snapIndex) && t.pagination.update()
        },
        snapIndexChange() {
          const t = this;
          t.params.loop || t.pagination.update()
        },
        slidesLengthChange() {
          const t = this;
          t.params.loop && (t.pagination.render(), t.pagination.update())
        },
        snapGridLengthChange() {
          const t = this;
          t.params.loop || (t.pagination.render(), t.pagination.update())
        },
        destroy() {
          this.pagination.destroy()
        },
        click(t) {
          const e = this;
          if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !c(t.target).hasClass(e.params.pagination.bulletClass)) {
            !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow", e) : e.emit("paginationHide", e), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)
          }
        }
      }
    }, {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag"
        }
      },
      create() {
        u.extend(this, {
          scrollbar: {
            init: U.init.bind(this),
            destroy: U.destroy.bind(this),
            updateSize: U.updateSize.bind(this),
            setTranslate: U.setTranslate.bind(this),
            setTransition: U.setTransition.bind(this),
            enableDraggable: U.enableDraggable.bind(this),
            disableDraggable: U.disableDraggable.bind(this),
            setDragPosition: U.setDragPosition.bind(this),
            getPointerPosition: U.getPointerPosition.bind(this),
            onDragStart: U.onDragStart.bind(this),
            onDragMove: U.onDragMove.bind(this),
            onDragEnd: U.onDragEnd.bind(this),
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }
        })
      },
      on: {
        init() {
          this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
        },
        update() {
          this.scrollbar.updateSize()
        },
        resize() {
          this.scrollbar.updateSize()
        },
        observerUpdate() {
          this.scrollbar.updateSize()
        },
        setTranslate() {
          this.scrollbar.setTranslate()
        },
        setTransition(t) {
          this.scrollbar.setTransition(t)
        },
        destroy() {
          this.scrollbar.destroy()
        }
      }
    }, {
      name: "parallax",
      params: {
        parallax: {
          enabled: !1
        }
      },
      create() {
        u.extend(this, {
          parallax: {
            setTransform: K.setTransform.bind(this),
            setTranslate: K.setTranslate.bind(this),
            setTransition: K.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit() {
          this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
        },
        init() {
          this.params.parallax.enabled && this.parallax.setTranslate()
        },
        setTranslate() {
          this.params.parallax.enabled && this.parallax.setTranslate()
        },
        setTransition(t) {
          this.params.parallax.enabled && this.parallax.setTransition(t)
        }
      }
    }, {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      },
      create() {
        const t = this,
          e = {
            enabled: !1,
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0
            }
          };
        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(a => {
          e[a] = Q[a].bind(t)
        }), u.extend(t, {
          zoom: e
        });
        let a = 1;
        Object.defineProperty(t.zoom, "scale", {
          get: () => a,
          set(e) {
            if (a !== e) {
              const a = t.zoom.gesture.$imageEl ? t.zoom.gesture.$imageEl[0] : void 0,
                i = t.zoom.gesture.$slideEl ? t.zoom.gesture.$slideEl[0] : void 0;
              t.emit("zoomChange", e, a, i)
            }
            a = e
          }
        })
      },
      on: {
        init() {
          const t = this;
          t.params.zoom.enabled && t.zoom.enable()
        },
        destroy() {
          this.zoom.disable()
        },
        touchStart(t) {
          this.zoom.enabled && this.zoom.onTouchStart(t)
        },
        touchEnd(t) {
          this.zoom.enabled && this.zoom.onTouchEnd(t)
        },
        doubleTap(t) {
          const e = this;
          e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t)
        },
        transitionEnd() {
          const t = this;
          t.zoom.enabled && t.params.zoom.enabled && t.zoom.onTransitionEnd()
        },
        slideChange() {
          const t = this;
          t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && t.zoom.onTransitionEnd()
        }
      }
    }, {
      name: "lazy",
      params: {
        lazy: {
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      },
      create() {
        u.extend(this, {
          lazy: {
            initialImageLoaded: !1,
            load: J.load.bind(this),
            loadInSlide: J.loadInSlide.bind(this)
          }
        })
      },
      on: {
        beforeInit() {
          const t = this;
          t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
        },
        init() {
          const t = this;
          t.params.lazy.enabled && !t.params.loop && 0 === t.params.initialSlide && t.lazy.load()
        },
        scroll() {
          const t = this;
          t.params.freeMode && !t.params.freeModeSticky && t.lazy.load()
        },
        resize() {
          const t = this;
          t.params.lazy.enabled && t.lazy.load()
        },
        scrollbarDragMove() {
          const t = this;
          t.params.lazy.enabled && t.lazy.load()
        },
        transitionStart() {
          const t = this;
          t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !t.lazy.initialImageLoaded) && t.lazy.load()
        },
        transitionEnd() {
          const t = this;
          t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && t.lazy.load()
        },
        slideChange() {
          const t = this;
          t.params.lazy.enabled && t.params.cssMode && t.lazy.load()
        }
      }
    }, {
      name: "controller",
      params: {
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      },
      create() {
        u.extend(this, {
          controller: {
            control: this.params.controller.control,
            getInterpolateFunction: Z.getInterpolateFunction.bind(this),
            setTranslate: Z.setTranslate.bind(this),
            setTransition: Z.setTransition.bind(this)
          }
        })
      },
      on: {
        update() {
          const t = this;
          t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        },
        resize() {
          const t = this;
          t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        },
        observerUpdate() {
          const t = this;
          t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        },
        setTranslate(t, e) {
          this.controller.control && this.controller.setTranslate(t, e)
        },
        setTransition(t, e) {
          this.controller.control && this.controller.setTransition(t, e)
        }
      }
    }, {
      name: "a11y",
      params: {
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}"
        }
      },
      create() {
        const t = this;
        u.extend(t, {
          a11y: {
            liveRegion: c(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
          }
        }), Object.keys(tt).forEach(e => {
          t.a11y[e] = tt[e].bind(t)
        })
      },
      on: {
        init() {
          this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
        },
        toEdge() {
          this.params.a11y.enabled && this.a11y.updateNavigation()
        },
        fromEdge() {
          this.params.a11y.enabled && this.a11y.updateNavigation()
        },
        paginationUpdate() {
          this.params.a11y.enabled && this.a11y.updatePagination()
        },
        destroy() {
          this.params.a11y.enabled && this.a11y.destroy()
        }
      }
    }, {
      name: "history",
      params: {
        history: {
          enabled: !1,
          replaceState: !1,
          key: "slides"
        }
      },
      create() {
        u.extend(this, {
          history: {
            init: et.init.bind(this),
            setHistory: et.setHistory.bind(this),
            setHistoryPopState: et.setHistoryPopState.bind(this),
            scrollToSlide: et.scrollToSlide.bind(this),
            destroy: et.destroy.bind(this)
          }
        })
      },
      on: {
        init() {
          const t = this;
          t.params.history.enabled && t.history.init()
        },
        destroy() {
          const t = this;
          t.params.history.enabled && t.history.destroy()
        },
        transitionEnd() {
          const t = this;
          t.history.initialized && t.history.setHistory(t.params.history.key, t.activeIndex)
        },
        slideChange() {
          const t = this;
          t.history.initialized && t.params.cssMode && t.history.setHistory(t.params.history.key, t.activeIndex)
        }
      }
    }, {
      name: "hash-navigation",
      params: {
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      },
      create() {
        u.extend(this, {
          hashNavigation: {
            initialized: !1,
            init: at.init.bind(this),
            destroy: at.destroy.bind(this),
            setHash: at.setHash.bind(this),
            onHashCange: at.onHashCange.bind(this)
          }
        })
      },
      on: {
        init() {
          const t = this;
          t.params.hashNavigation.enabled && t.hashNavigation.init()
        },
        destroy() {
          const t = this;
          t.params.hashNavigation.enabled && t.hashNavigation.destroy()
        },
        transitionEnd() {
          const t = this;
          t.hashNavigation.initialized && t.hashNavigation.setHash()
        },
        slideChange() {
          const t = this;
          t.hashNavigation.initialized && t.params.cssMode && t.hashNavigation.setHash()
        }
      }
    }, {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1
        }
      },
      create() {
        const t = this;
        u.extend(t, {
          autoplay: {
            running: !1,
            paused: !1,
            run: it.run.bind(t),
            start: it.start.bind(t),
            stop: it.stop.bind(t),
            pause: it.pause.bind(t),
            onVisibilityChange() {
              "hidden" === document.visibilityState && t.autoplay.running && t.autoplay.pause(), "visible" === document.visibilityState && t.autoplay.paused && (t.autoplay.run(), t.autoplay.paused = !1)
            },
            onTransitionEnd(e) {
              t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
            }
          }
        })
      },
      on: {
        init() {
          const t = this;
          t.params.autoplay.enabled && (t.autoplay.start(), document.addEventListener("visibilitychange", t.autoplay.onVisibilityChange))
        },
        beforeTransitionStart(t, e) {
          const a = this;
          a.autoplay.running && (e || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(t) : a.autoplay.stop())
        },
        sliderFirstMove() {
          const t = this;
          t.autoplay.running && (t.params.autoplay.disableOnInteraction ? t.autoplay.stop() : t.autoplay.pause())
        },
        touchEnd() {
          const t = this;
          t.params.cssMode && t.autoplay.paused && !t.params.autoplay.disableOnInteraction && t.autoplay.run()
        },
        destroy() {
          const t = this;
          t.autoplay.running && t.autoplay.stop(), document.removeEventListener("visibilitychange", t.autoplay.onVisibilityChange)
        }
      }
    }, {
      name: "effect-fade",
      params: {
        fadeEffect: {
          crossFade: !1
        }
      },
      create() {
        u.extend(this, {
          fadeEffect: {
            setTranslate: rt.setTranslate.bind(this),
            setTransition: rt.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit() {
          if ("fade" !== this.params.effect) return;
          this.classNames.push(this.params.containerModifierClass + "fade");
          const t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          u.extend(this.params, t), u.extend(this.originalParams, t)
        },
        setTranslate() {
          "fade" === this.params.effect && this.fadeEffect.setTranslate()
        },
        setTransition(t) {
          "fade" === this.params.effect && this.fadeEffect.setTransition(t)
        }
      }
    }, {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      },
      create() {
        u.extend(this, {
          cubeEffect: {
            setTranslate: nt.setTranslate.bind(this),
            setTransition: nt.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit() {
          if ("cube" !== this.params.effect) return;
          this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
          const t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
          };
          u.extend(this.params, t), u.extend(this.originalParams, t)
        },
        setTranslate() {
          "cube" === this.params.effect && this.cubeEffect.setTranslate()
        },
        setTransition(t) {
          "cube" === this.params.effect && this.cubeEffect.setTransition(t)
        }
      }
    }, {
      name: "effect-flip",
      params: {
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      },
      create() {
        u.extend(this, {
          flipEffect: {
            setTranslate: ot.setTranslate.bind(this),
            setTransition: ot.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit() {
          if ("flip" !== this.params.effect) return;
          this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
          const t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          u.extend(this.params, t), u.extend(this.originalParams, t)
        },
        setTranslate() {
          "flip" === this.params.effect && this.flipEffect.setTranslate()
        },
        setTransition(t) {
          "flip" === this.params.effect && this.flipEffect.setTransition(t)
        }
      }
    }, {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0
        }
      },
      create() {
        u.extend(this, {
          coverflowEffect: {
            setTranslate: st.setTranslate.bind(this),
            setTransition: st.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit() {
          "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
        },
        setTranslate() {
          "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
        },
        setTransition(t) {
          "coverflow" === this.params.effect && this.coverflowEffect.setTransition(t)
        }
      }
    }, {
      name: "thumbs",
      params: {
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-container-thumbs"
        }
      },
      create() {
        u.extend(this, {
          thumbs: {
            swiper: null,
            init: lt.init.bind(this),
            update: lt.update.bind(this),
            onThumbClick: lt.onThumbClick.bind(this)
          }
        })
      },
      on: {
        beforeInit() {
          const {
            thumbs: t
          } = this.params;
          t && t.swiper && (this.thumbs.init(), this.thumbs.update(!0))
        },
        slideChange() {
          this.thumbs.swiper && this.thumbs.update()
        },
        update() {
          this.thumbs.swiper && this.thumbs.update()
        },
        resize() {
          this.thumbs.swiper && this.thumbs.update()
        },
        observerUpdate() {
          this.thumbs.swiper && this.thumbs.update()
        },
        setTransition(t) {
          const e = this.thumbs.swiper;
          e && e.setTransition(t)
        },
        beforeDestroy() {
          const t = this.thumbs.swiper;
          t && this.thumbs.swiperCreated && t && t.destroy()
        }
      }
    }];
    void 0 === O.use && (O.use = O.Class.use, O.installModule = O.Class.installModule), O.use(ct);
    e.default = O
  }],
  [
    [16, 1]
  ]
]);
