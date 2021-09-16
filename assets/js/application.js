/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
function displayFullLoading() {
    0 === $("#full-loading").length && $("body").append('<div id="full-loading"><div id="full-loading-image"></div></div>')
}

function removeFullLoading() {
    $("#full-loading").remove()
}

!function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function i(t) {
        var e = !!t && "length" in t && t.length, i = pt.type(t);
        return "function" !== i && !pt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function n(t, e, i) {
        if (pt.isFunction(e)) return pt.grep(t, function (t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return pt.grep(t, function (t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (kt.test(e)) return pt.filter(e, t, i);
            e = pt.filter(e, t)
        }
        return pt.grep(t, function (t) {
            return pt.inArray(t, e) > -1 !== i
        })
    }

    function s(t, e) {
        do {
            t = t[e]
        } while (t && 1 !== t.nodeType);
        return t
    }

    function o(t) {
        var e = {};
        return pt.each(t.match(It) || [], function (t, i) {
            e[i] = !0
        }), e
    }

    function r() {
        nt.addEventListener ? (nt.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (nt.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (nt.addEventListener || "load" === t.event.type || "complete" === nt.readyState) && (r(), pt.ready())
    }

    function l(t, e, i) {
        if (i === undefined && 1 === t.nodeType) {
            var n = "data-" + e.replace(At, "-$1").toLowerCase();
            if ("string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Et.test(i) ? pt.parseJSON(i) : i)
                } catch (t) {
                }
                pt.data(t, e, i)
            } else i = undefined
        }
        return i
    }

    function h(t) {
        var e;
        for (e in t) if (("data" !== e || !pt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function u(t, e, i, n) {
        if (Nt(t)) {
            var s, o, r = pt.expando, a = t.nodeType, l = a ? pt.cache : t, h = a ? t[r] : t[r] && r;
            if (h && l[h] && (n || l[h].data) || i !== undefined || "string" != typeof e) return h || (h = a ? t[r] = it.pop() || pt.guid++ : r), l[h] || (l[h] = a ? {} : {toJSON: pt.noop}), "object" != typeof e && "function" != typeof e || (n ? l[h] = pt.extend(l[h], e) : l[h].data = pt.extend(l[h].data, e)), o = l[h], n || (o.data || (o.data = {}), o = o.data), i !== undefined && (o[pt.camelCase(e)] = i), "string" == typeof e ? null == (s = o[e]) && (s = o[pt.camelCase(e)]) : s = o, s
        }
    }

    function c(t, e, i) {
        if (Nt(t)) {
            var n, s, o = t.nodeType, r = o ? pt.cache : t, a = o ? t[pt.expando] : pt.expando;
            if (r[a]) {
                if (e && (n = i ? r[a] : r[a].data)) {
                    pt.isArray(e) ? e = e.concat(pt.map(e, pt.camelCase)) : e in n ? e = [e] : (e = pt.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length;
                    for (; s--;) delete n[e[s]];
                    if (i ? !h(n) : !pt.isEmptyObject(n)) return
                }
                (i || (delete r[a].data, h(r[a]))) && (o ? pt.cleanData([t], !0) : ct.deleteExpando || r != r.window ? delete r[a] : r[a] = undefined)
            }
        }
    }

    function d(t, e, i, n) {
        var s, o = 1, r = 20, a = n ? function () {
                return n.cur()
            } : function () {
                return pt.css(t, e, "")
            }, l = a(), h = i && i[3] || (pt.cssNumber[e] ? "" : "px"),
            u = (pt.cssNumber[e] || "px" !== h && +l) && Ot.exec(pt.css(t, e));
        if (u && u[3] !== h) {
            h = h || u[3], i = i || [], u = +l || 1;
            do {
                o = o || ".5", u /= o, pt.style(t, e, u + h)
            } while (o !== (o = a() / l) && 1 !== o && --r)
        }
        return i && (u = +u || +l || 0, s = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, n.start = u, n.end = s)), s
    }

    function p(t) {
        var e = Bt.split("|"), i = t.createDocumentFragment();
        if (i.createElement) for (; e.length;) i.createElement(e.pop());
        return i
    }

    function f(t, e) {
        var i, n, s = 0,
            o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : undefined;
        if (!o) for (o = [], i = t.childNodes || t; null != (n = i[s]); s++) !e || pt.nodeName(n, e) ? o.push(n) : pt.merge(o, f(n, e));
        return e === undefined || e && pt.nodeName(t, e) ? pt.merge([t], o) : o
    }

    function g(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) pt._data(i, "globalEval", !e || pt._data(e[n], "globalEval"))
    }

    function m(t) {
        Lt.test(t.type) && (t.defaultChecked = t.checked)
    }

    function v(t, e, i, n, s) {
        for (var o, r, a, l, h, u, c, d = t.length, v = p(e), _ = [], b = 0; b < d; b++) if ((r = t[b]) || 0 === r) if ("object" === pt.type(r)) pt.merge(_, r.nodeType ? [r] : r); else if ($t.test(r)) {
            for (l = l || v.appendChild(e.createElement("div")), h = (Ft.exec(r) || ["", ""])[1].toLowerCase(), c = Yt[h] || Yt._default, l.innerHTML = c[1] + pt.htmlPrefilter(r) + c[2], o = c[0]; o--;) l = l.lastChild;
            if (!ct.leadingWhitespace && Rt.test(r) && _.push(e.createTextNode(Rt.exec(r)[0])), !ct.tbody) for (r = "table" !== h || Ut.test(r) ? "<table>" !== c[1] || Ut.test(r) ? 0 : l : l.firstChild, o = r && r.childNodes.length; o--;) pt.nodeName(u = r.childNodes[o], "tbody") && !u.childNodes.length && r.removeChild(u);
            for (pt.merge(_, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = v.lastChild
        } else _.push(e.createTextNode(r));
        for (l && v.removeChild(l), ct.appendChecked || pt.grep(f(_, "input"), m), b = 0; r = _[b++];) if (n && pt.inArray(r, n) > -1) s && s.push(r); else if (a = pt.contains(r.ownerDocument, r), l = f(v.appendChild(r), "script"), a && g(l), i) for (o = 0; r = l[o++];) qt.test(r.type || "") && i.push(r);
        return l = null, v
    }

    function _() {
        return !0
    }

    function b() {
        return !1
    }

    function y() {
        try {
            return nt.activeElement
        } catch (t) {
        }
    }

    function w(t, e, i, n, s, o) {
        var r, a;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = undefined);
            for (a in e) w(t, a, i, n, e[a], o);
            return t
        }
        if (null == n && null == s ? (s = i, n = i = undefined) : null == s && ("string" == typeof i ? (s = n, n = undefined) : (s = n, n = i, i = undefined)), !1 === s) s = b; else if (!s) return t;
        return 1 === o && (r = s, s = function (t) {
            return pt().off(t), r.apply(this, arguments)
        }, s.guid = r.guid || (r.guid = pt.guid++)), t.each(function () {
            pt.event.add(this, e, s, n, i)
        })
    }

    function x(t, e) {
        return pt.nodeName(t, "table") && pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function k(t) {
        return t.type = (null !== pt.find.attr(t, "type")) + "/" + t.type, t
    }

    function C(t) {
        var e = ne.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function D(t, e) {
        if (1 === e.nodeType && pt.hasData(t)) {
            var i, n, s, o = pt._data(t), r = pt._data(e, o), a = o.events;
            if (a) {
                delete r.handle, r.events = {};
                for (i in a) for (n = 0, s = a[i].length; n < s; n++) pt.event.add(e, i, a[i][n])
            }
            r.data && (r.data = pt.extend({}, r.data))
        }
    }

    function T(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !ct.noCloneEvent && e[pt.expando]) {
                s = pt._data(e);
                for (n in s.events) pt.removeEvent(e, n, s.handle);
                e.removeAttribute(pt.expando)
            }
            "script" === i && e.text !== t.text ? (k(e).text = t.text, C(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ct.html5Clone && t.innerHTML && !pt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Lt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }
    }

    function S(t, e, i, n) {
        e = ot.apply([], e);
        var s, o, r, a, l, h, u = 0, c = t.length, d = c - 1, p = e[0], g = pt.isFunction(p);
        if (g || c > 1 && "string" == typeof p && !ct.checkClone && ie.test(p)) return t.each(function (s) {
            var o = t.eq(s);
            g && (e[0] = p.call(this, s, o.html())), S(o, e, i, n)
        });
        if (c && (h = v(e, t[0].ownerDocument, !1, t, n), s = h.firstChild, 1 === h.childNodes.length && (h = s), s || n)) {
            for (a = pt.map(f(h, "script"), k), r = a.length; u < c; u++) o = h, u !== d && (o = pt.clone(o, !0, !0), r && pt.merge(a, f(o, "script"))), i.call(t[u], o, u);
            if (r) for (l = a[a.length - 1].ownerDocument, pt.map(a, C), u = 0; u < r; u++) o = a[u], qt.test(o.type || "") && !pt._data(o, "globalEval") && pt.contains(l, o) && (o.src ? pt._evalUrl && pt._evalUrl(o.src) : pt.globalEval((o.text || o.textContent || o.innerHTML || "").replace(se, "")));
            h = s = null
        }
        return t
    }

    function I(t, e, i) {
        for (var n, s = e ? pt.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || pt.cleanData(f(n)), n.parentNode && (i && pt.contains(n.ownerDocument, n) && g(f(n, "script")), n.parentNode.removeChild(n));
        return t
    }

    function P(t, e) {
        var i = pt(e.createElement(t)).appendTo(e.body), n = pt.css(i[0], "display");
        return i.detach(), n
    }

    function M(t) {
        var e = nt, i = le[t];
        return i || (i = P(t, e), "none" !== i && i || (ae = (ae || pt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (ae[0].contentWindow || ae[0].contentDocument).document, e.write(), e.close(), i = P(t, e), ae.detach()), le[t] = i), i
    }

    function N(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function E(t) {
        if (t in ke) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), i = xe.length; i--;) if ((t = xe[i] + e) in ke) return t
    }

    function A(t, e) {
        for (var i, n, s, o = [], r = 0, a = t.length; r < a; r++) n = t[r], n.style && (o[r] = pt._data(n, "olddisplay"), i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && jt(n) && (o[r] = pt._data(n, "olddisplay", M(n.nodeName)))) : (s = jt(n), (i && "none" !== i || !s) && pt._data(n, "olddisplay", s ? i : pt.css(n, "display"))));
        for (r = 0; r < a; r++) n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none"));
        return t
    }

    function H(t, e, i) {
        var n = be.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function O(t, e, i, n, s) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; o < 4; o += 2) "margin" === i && (r += pt.css(t, i + zt[o], !0, s)), n ? ("content" === i && (r -= pt.css(t, "padding" + zt[o], !0, s)), "margin" !== i && (r -= pt.css(t, "border" + zt[o] + "Width", !0, s))) : (r += pt.css(t, "padding" + zt[o], !0, s), "padding" !== i && (r += pt.css(t, "border" + zt[o] + "Width", !0, s)));
        return r
    }

    function z(t, e, i) {
        var n = !0, s = "width" === e ? t.offsetWidth : t.offsetHeight, o = pe(t),
            r = ct.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, o);
        if (s <= 0 || null == s) {
            if (s = fe(t, e, o), (s < 0 || null == s) && (s = t.style[e]), ue.test(s)) return s;
            n = r && (ct.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + O(t, e, i || (r ? "border" : "content"), n, o) + "px"
    }

    function j(t, e, i, n, s) {
        return new j.prototype.init(t, e, i, n, s)
    }

    function W() {
        return t.setTimeout(function () {
            Ce = undefined
        }), Ce = pt.now()
    }

    function L(t, e) {
        var i, n = {height: t}, s = 0;
        for (e = e ? 1 : 0; s < 4; s += 2 - e) i = zt[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function F(t, e, i) {
        for (var n, s = (B.tweeners[e] || []).concat(B.tweeners["*"]), o = 0, r = s.length; o < r; o++) if (n = s[o].call(i, e, t)) return n
    }

    function q(t, e, i) {
        var n, s, o, r, a, l, h, u = this, c = {}, d = t.style, p = t.nodeType && jt(t), f = pt._data(t, "fxshow");
        i.queue || (a = pt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, u.always(function () {
            u.always(function () {
                a.unqueued--, pt.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], h = pt.css(t, "display"), "inline" === ("none" === h ? pt._data(t, "olddisplay") || M(t.nodeName) : h) && "none" === pt.css(t, "float") && (ct.inlineBlockNeedsLayout && "inline" !== M(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), i.overflow && (d.overflow = "hidden", ct.shrinkWrapBlocks() || u.always(function () {
            d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2]
        }));
        for (n in e) if (s = e[n], Te.exec(s)) {
            if (delete e[n], o = o || "toggle" === s, s === (p ? "hide" : "show")) {
                if ("show" !== s || !f || f[n] === undefined) continue;
                p = !0
            }
            c[n] = f && f[n] || pt.style(t, n)
        } else h = undefined;
        if (pt.isEmptyObject(c)) "inline" === ("none" === h ? M(t.nodeName) : h) && (d.display = h); else {
            f ? "hidden" in f && (p = f.hidden) : f = pt._data(t, "fxshow", {}), o && (f.hidden = !p), p ? pt(t).show() : u.done(function () {
                pt(t).hide()
            }), u.done(function () {
                var e;
                pt._removeData(t, "fxshow");
                for (e in c) pt.style(t, e, c[e])
            });
            for (n in c) r = F(p ? f[n] : 0, n, u), n in f || (f[n] = r.start, p && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function R(t, e) {
        var i, n, s, o, r;
        for (i in t) if (n = pt.camelCase(i), s = e[n], o = t[i], pt.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (r = pt.cssHooks[n]) && "expand" in r) {
            o = r.expand(o), delete t[n];
            for (i in o) i in t || (t[i] = o[i], e[i] = s)
        } else e[n] = s
    }

    function B(t, e, i) {
        var n, s, o = 0, r = B.prefilters.length, a = pt.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (s) return !1;
            for (var e = Ce || W(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, o = 1 - n, r = 0, l = h.tweens.length; r < l; r++) h.tweens[r].run(o);
            return a.notifyWith(t, [h, o, i]), o < 1 && l ? i : (a.resolveWith(t, [h]), !1)
        }, h = a.promise({
            elem: t,
            props: pt.extend({}, e),
            opts: pt.extend(!0, {specialEasing: {}, easing: pt.easing._default}, i),
            originalProperties: e,
            originalOptions: i,
            startTime: Ce || W(),
            duration: i.duration,
            tweens: [],
            createTween: function (e, i) {
                var n = pt.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(n), n
            },
            stop: function (e) {
                var i = 0, n = e ? h.tweens.length : 0;
                if (s) return this;
                for (s = !0; i < n; i++) h.tweens[i].run(1);
                return e ? (a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h, e])) : a.rejectWith(t, [h, e]), this
            }
        }), u = h.props;
        for (R(u, h.opts.specialEasing); o < r; o++) if (n = B.prefilters[o].call(h, t, u, h.opts)) return pt.isFunction(n.stop) && (pt._queueHooks(h.elem, h.opts.queue).stop = pt.proxy(n.stop, n)), n;
        return pt.map(u, F, h), pt.isFunction(h.opts.start) && h.opts.start.call(t, h), pt.fx.timer(pt.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    function Y(t) {
        return pt.attr(t, "class") || ""
    }

    function $(t) {
        return function (e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0, o = e.toLowerCase().match(It) || [];
            if (pt.isFunction(i)) for (; n = o[s++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function U(t, e, i, n) {
        function s(a) {
            var l;
            return o[a] = !0, pt.each(t[a] || [], function (t, a) {
                var h = a(e, i, n);
                return "string" != typeof h || r || o[h] ? r ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1)
            }), l
        }

        var o = {}, r = t === Ge;
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }

    function K(t, e) {
        var i, n, s = pt.ajaxSettings.flatOptions || {};
        for (n in e) e[n] !== undefined && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && pt.extend(!0, t, i), t
    }

    function V(t, e, i) {
        for (var n, s, o, r, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), s === undefined && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s) for (r in a) if (a[r] && a[r].test(s)) {
            l.unshift(r);
            break
        }
        if (l[0] in i) o = l[0]; else {
            for (r in i) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                n || (n = r)
            }
            o = o || n
        }
        if (o) return o !== l[0] && l.unshift(o), i[o]
    }

    function X(t, e, i, n) {
        var s, o, r, a, l, h = {}, u = t.dataTypes.slice();
        if (u[1]) for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
        for (o = u.shift(); o;) if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (!(r = h[l + " " + o] || h["* " + o])) for (s in h) if (a = s.split(" "), a[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
                !0 === r ? r = h[s] : !0 !== h[s] && (o = a[0], u.unshift(a[1]));
                break
            }
            if (!0 !== r) if (r && t.throws) e = r(e); else try {
                e = r(e)
            } catch (t) {
                return {state: "parsererror", error: r ? t : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: e}
    }

    function Q(t) {
        return t.style && t.style.display || pt.css(t, "display")
    }

    function G(t) {
        if (!pt.contains(t.ownerDocument || nt, t)) return !0;
        for (; t && 1 === t.nodeType;) {
            if ("none" === Q(t) || "hidden" === t.type) return !0;
            t = t.parentNode
        }
        return !1
    }

    function J(t, e, i, n) {
        var s;
        if (pt.isArray(e)) pt.each(e, function (e, s) {
            i || ii.test(t) ? n(t, s) : J(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n)
        }); else if (i || "object" !== pt.type(e)) n(t, e); else for (s in e) J(t + "[" + s + "]", e[s], i, n)
    }

    function Z() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {
        }
    }

    function tt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function et(t) {
        return pt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }

    var it = [], nt = t.document, st = it.slice, ot = it.concat, rt = it.push, at = it.indexOf, lt = {},
        ht = lt.toString, ut = lt.hasOwnProperty, ct = {}, dt = "1.12.4", pt = function (t, e) {
            return new pt.fn.init(t, e)
        }, ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, gt = /^-ms-/, mt = /-([\da-z])/gi, vt = function (t, e) {
            return e.toUpperCase()
        };
    pt.fn = pt.prototype = {
        jquery: dt, constructor: pt, selector: "", length: 0, toArray: function () {
            return st.call(this)
        }, get: function (t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : st.call(this)
        }, pushStack: function (t) {
            var e = pt.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        }, each: function (t) {
            return pt.each(this, t)
        }, map: function (t) {
            return this.pushStack(pt.map(this, function (e, i) {
                return t.call(e, i, e)
            }))
        }, slice: function () {
            return this.pushStack(st.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: rt, sort: it.sort, splice: it.splice
    }, pt.extend = pt.fn.extend = function () {
        var t, e, i, n, s, o, r = arguments[0] || {}, a = 1, l = arguments.length, h = !1;
        for ("boolean" == typeof r && (h = r, r = arguments[a] || {}, a++), "object" == typeof r || pt.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++) if (null != (s = arguments[a])) for (n in s) t = r[n], i = s[n], r !== i && (h && i && (pt.isPlainObject(i) || (e = pt.isArray(i))) ? (e ? (e = !1, o = t && pt.isArray(t) ? t : []) : o = t && pt.isPlainObject(t) ? t : {}, r[n] = pt.extend(h, o, i)) : i !== undefined && (r[n] = i));
        return r
    }, pt.extend({
        expando: "jQuery" + (dt + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === pt.type(t)
        }, isArray: Array.isArray || function (t) {
            return "array" === pt.type(t)
        }, isWindow: function (t) {
            return null != t && t == t.window
        }, isNumeric: function (t) {
            var e = t && t.toString();
            return !pt.isArray(t) && e - parseFloat(e) + 1 >= 0
        }, isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        }, isPlainObject: function (t) {
            var e;
            if (!t || "object" !== pt.type(t) || t.nodeType || pt.isWindow(t)) return !1;
            try {
                if (t.constructor && !ut.call(t, "constructor") && !ut.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            if (!ct.ownFirst) for (e in t) return ut.call(t, e);
            for (e in t) ;
            return e === undefined || ut.call(t, e)
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ht.call(t)] || "object" : typeof t
        }, globalEval: function (e) {
            e && pt.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        }, camelCase: function (t) {
            return t.replace(gt, "ms-").replace(mt, vt)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e) {
            var n, s = 0;
            if (i(t)) for (n = t.length; s < n && !1 !== e.call(t[s], s, t[s]); s++) ; else for (s in t) if (!1 === e.call(t[s], s, t[s])) break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(ft, "")
        }, makeArray: function (t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? pt.merge(n, "string" == typeof t ? [t] : t) : rt.call(n, t)), n
        }, inArray: function (t, e, i) {
            var n;
            if (e) {
                if (at) return at.call(e, t, i);
                for (n = e.length, i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++) if (i in e && e[i] === t) return i
            }
            return -1
        }, merge: function (t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i;) t[s++] = e[n++];
            if (i !== i) for (; e[n] !== undefined;) t[s++] = e[n++];
            return t.length = s, t
        }, grep: function (t, e, i) {
            for (var n = [], s = 0, o = t.length, r = !i; s < o; s++) !e(t[s], s) !== r && n.push(t[s]);
            return n
        }, map: function (t, e, n) {
            var s, o, r = 0, a = [];
            if (i(t)) for (s = t.length; r < s; r++) null != (o = e(t[r], r, n)) && a.push(o); else for (r in t) null != (o = e(t[r], r, n)) && a.push(o);
            return ot.apply([], a)
        }, guid: 1, proxy: function (t, e) {
            var i, n, s;
            return "string" == typeof e && (s = t[e], e = t, t = s), pt.isFunction(t) ? (i = st.call(arguments, 2), n = function () {
                return t.apply(e || this, i.concat(st.call(arguments)))
            }, n.guid = t.guid = t.guid || pt.guid++, n) : undefined
        }, now: function () {
            return +new Date
        }, support: ct
    }), "function" == typeof Symbol && (pt.fn[Symbol.iterator] = it[Symbol.iterator]), pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        lt["[object " + e + "]"] = e.toLowerCase()
    });
    var _t =/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
        function (t) {
            function e(t, e, i, n) {
                var s, o, r, a, l, h, c, p, f = e && e.ownerDocument, g = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return i;
                if (!n && ((e ? e.ownerDocument || e : F) !== E && N(e), e = e || E, H)) {
                    if (11 !== g && (h = vt.exec(t))) if (s = h[1]) {
                        if (9 === g) {
                            if (!(r = e.getElementById(s))) return i;
                            if (r.id === s) return i.push(r), i
                        } else if (f && (r = f.getElementById(s)) && W(e, r) && r.id === s) return i.push(r), i
                    } else {
                        if (h[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = h[3]) && w.getElementsByClassName && e.getElementsByClassName) return J.apply(i, e.getElementsByClassName(s)), i
                    }
                    if (w.qsa && !$[t + " "] && (!O || !O.test(t))) {
                        if (1 !== g) f = e, p = t; else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = L), c = D(t), o = c.length, l = dt.test(a) ? "#" + a : "[id='" + a + "']"; o--;) c[o] = l + " " + d(c[o]);
                            p = c.join(","), f = _t.test(t) && u(e.parentNode) || e
                        }
                        if (p) try {
                            return J.apply(i, f.querySelectorAll(p)), i
                        } catch (t) {
                        } finally {
                            a === L && e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(at, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
                }

                var e = [];
                return t
            }

            function n(t) {
                return t[L] = !0, t
            }

            function s(t) {
                var e = E.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var i = t.split("|"), n = i.length; n--;) x.attrHandle[i[n]] = e
            }

            function r(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || K) - (~t.sourceIndex || K);
                if (n) return n;
                if (i) for (; i = i.nextSibling;) if (i === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function h(t) {
                return n(function (e) {
                    return e = +e, n(function (i, n) {
                        for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function c() {
            }

            function d(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                return n
            }

            function p(t, e, i) {
                var n = e.dir, s = i && "parentNode" === n, o = R++;
                return e.first ? function (e, i, o) {
                    for (; e = e[n];) if (1 === e.nodeType || s) return t(e, i, o)
                } : function (e, i, r) {
                    var a, l, h, u = [q, o];
                    if (r) {
                        for (; e = e[n];) if ((1 === e.nodeType || s) && t(e, i, r)) return !0
                    } else for (; e = e[n];) if (1 === e.nodeType || s) {
                        if (h = e[L] || (e[L] = {}), l = h[e.uniqueID] || (h[e.uniqueID] = {}), (a = l[n]) && a[0] === q && a[1] === o) return u[2] = a[2];
                        if (l[n] = u, u[2] = t(e, i, r)) return !0
                    }
                }
            }

            function f(t) {
                return t.length > 1 ? function (e, i, n) {
                    for (var s = t.length; s--;) if (!t[s](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function g(t, i, n) {
                for (var s = 0, o = i.length; s < o; s++) e(t, i[s], n);
                return n
            }

            function m(t, e, i, n, s) {
                for (var o, r = [], a = 0, l = t.length, h = null != e; a < l; a++) (o = t[a]) && (i && !i(o, n, s) || (r.push(o), h && e.push(a)));
                return r
            }

            function v(t, e, i, s, o, r) {
                return s && !s[L] && (s = v(s)), o && !o[L] && (o = v(o, r)), n(function (n, r, a, l) {
                    var h, u, c, d = [], p = [], f = r.length, v = n || g(e || "*", a.nodeType ? [a] : a, []),
                        _ = !t || !n && e ? v : m(v, d, t, a, l), b = i ? o || (n ? t : f || s) ? [] : r : _;
                    if (i && i(_, b, a, l), s) for (h = m(b, p), s(h, [], a, l), u = h.length; u--;) (c = h[u]) && (b[p[u]] = !(_[p[u]] = c));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (h = [], u = b.length; u--;) (c = b[u]) && h.push(_[u] = c);
                                o(null, b = [], h, l)
                            }
                            for (u = b.length; u--;) (c = b[u]) && (h = o ? tt(n, c) : d[u]) > -1 && (n[h] = !(r[h] = c))
                        }
                    } else b = m(b === r ? b.splice(f, b.length) : b), o ? o(null, r, b, l) : J.apply(r, b)
                })
            }

            function _(t) {
                for (var e, i, n, s = t.length, o = x.relative[t[0].type], r = o || x.relative[" "], a = o ? 1 : 0, l = p(function (t) {
                    return t === e
                }, r, !0), h = p(function (t) {
                    return tt(e, t) > -1
                }, r, !0), u = [function (t, i, n) {
                    var s = !o && (n || i !== I) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                    return e = null, s
                }]; a < s; a++) if (i = x.relative[t[a].type]) u = [p(f(u), i)]; else {
                    if (i = x.filter[t[a].type].apply(null, t[a].matches), i[L]) {
                        for (n = ++a; n < s && !x.relative[t[n].type]; n++) ;
                        return v(a > 1 && f(u), a > 1 && d(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(at, "$1"), i, a < n && _(t.slice(a, n)), n < s && _(t = t.slice(n)), n < s && d(t))
                    }
                    u.push(i)
                }
                return f(u)
            }

            function b(t, i) {
                var s = i.length > 0, o = t.length > 0, r = function (n, r, a, l, h) {
                    var u, c, d, p = 0, f = "0", g = n && [], v = [], _ = I, b = n || o && x.find.TAG("*", h),
                        y = q += null == _ ? 1 : Math.random() || .1, w = b.length;
                    for (h && (I = r === E || r || h); f !== w && null != (u = b[f]); f++) {
                        if (o && u) {
                            for (c = 0, r || u.ownerDocument === E || (N(u), a = !H); d = t[c++];) if (d(u, r || E, a)) {
                                l.push(u);
                                break
                            }
                            h && (q = y)
                        }
                        s && ((u = !d && u) && p--, n && g.push(u))
                    }
                    if (p += f, s && f !== p) {
                        for (c = 0; d = i[c++];) d(g, v, r, a);
                        if (n) {
                            if (p > 0) for (; f--;) g[f] || v[f] || (v[f] = Q.call(l));
                            v = m(v)
                        }
                        J.apply(l, v), h && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return h && (q = y, I = _), g
                };
                return s ? n(r) : r
            }

            var y, w, x, k, C, D, T, S, I, P, M, N, E, A, H, O, z, j, W, L = "sizzle" + 1 * new Date, F = t.document,
                q = 0, R = 0, B = i(), Y = i(), $ = i(), U = function (t, e) {
                    return t === e && (M = !0), 0
                }, K = 1 << 31, V = {}.hasOwnProperty, X = [], Q = X.pop, G = X.push, J = X.push, Z = X.slice,
                tt = function (t, e) {
                    for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]", nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
                ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
                rt = new RegExp(it + "+", "g"),
                at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                lt = new RegExp("^" + it + "*," + it + "*"),
                ht = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ut = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"), ct = new RegExp(ot),
                dt = new RegExp("^" + nt + "$"), pt = {
                    ID: new RegExp("^#(" + nt + ")"),
                    CLASS: new RegExp("^\\.(" + nt + ")"),
                    TAG: new RegExp("^(" + nt + "|[*])"),
                    ATTR: new RegExp("^" + st),
                    PSEUDO: new RegExp("^" + ot),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                }, ft = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _t = /[+~]/, bt = /'|\\/g,
                yt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), wt = function (t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                }, xt = function () {
                    N()
                };
            try {
                J.apply(X = Z.call(F.childNodes), F.childNodes), X[F.childNodes.length].nodeType
            } catch (t) {
                J = {
                    apply: X.length ? function (t, e) {
                        G.apply(t, Z.call(e))
                    } : function (t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];) ;
                        t.length = i - 1
                    }
                }
            }
            w = e.support = {}, C = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, N = e.setDocument = function (t) {
                var e, i, n = t ? t.ownerDocument || t : F;
                return n !== E && 9 === n.nodeType && n.documentElement ? (E = n, A = E.documentElement, H = !C(E), (i = E.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", xt, !1) : i.attachEvent && i.attachEvent("onunload", xt)), w.attributes = s(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = s(function (t) {
                    return t.appendChild(E.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = mt.test(E.getElementsByClassName), w.getById = s(function (t) {
                    return A.appendChild(t).id = L, !E.getElementsByName || !E.getElementsByName(L).length
                }), w.getById ? (x.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && H) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }, x.filter.ID = function (t) {
                    var e = t.replace(yt, wt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete x.find.ID, x.filter.ID = function (t) {
                    var e = t.replace(yt, wt);
                    return function (t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), x.find.TAG = w.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var i, n = [], s = 0, o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, x.find.CLASS = w.getElementsByClassName && function (t, e) {
                    if ("undefined" != typeof e.getElementsByClassName && H) return e.getElementsByClassName(t)
                }, z = [], O = [], (w.qsa = mt.test(E.querySelectorAll)) && (s(function (t) {
                    A.appendChild(t).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + L + "-]").length || O.push("~="), t.querySelectorAll(":checked").length || O.push(":checked"), t.querySelectorAll("a#" + L + "+*").length || O.push(".#.+[+~]")
                }), s(function (t) {
                    var e = E.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
                })), (w.matchesSelector = mt.test(j = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && s(function (t) {
                    w.disconnectedMatch = j.call(t, "div"), j.call(t, "[s!='']:x"), z.push("!=", ot)
                }), O = O.length && new RegExp(O.join("|")), z = z.length && new RegExp(z.join("|")), e = mt.test(A.compareDocumentPosition), W = e || mt.test(A.contains) ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function (t, e) {
                    if (e) for (; e = e.parentNode;) if (e === t) return !0;
                    return !1
                }, U = e ? function (t, e) {
                    if (t === e) return M = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === E || t.ownerDocument === F && W(F, t) ? -1 : e === E || e.ownerDocument === F && W(F, e) ? 1 : P ? tt(P, t) - tt(P, e) : 0 : 4 & i ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return M = !0, 0;
                    var i, n = 0, s = t.parentNode, o = e.parentNode, a = [t], l = [e];
                    if (!s || !o) return t === E ? -1 : e === E ? 1 : s ? -1 : o ? 1 : P ? tt(P, t) - tt(P, e) : 0;
                    if (s === o) return r(t, e);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (; a[n] === l[n];) n++;
                    return n ? r(a[n], l[n]) : a[n] === F ? -1 : l[n] === F ? 1 : 0
                }, E) : E
            }, e.matches = function (t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function (t, i) {
                if ((t.ownerDocument || t) !== E && N(t), i = i.replace(ut, "='$1']"), w.matchesSelector && H && !$[i + " "] && (!z || !z.test(i)) && (!O || !O.test(i))) try {
                    var n = j.call(t, i);
                    if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {
                }
                return e(i, E, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== E && N(t), W(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== E && N(t);
                var i = x.attrHandle[e.toLowerCase()],
                    n = i && V.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !H) : undefined;
                return n !== undefined ? n : w.attributes || !H ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, i = [], n = 0, s = 0;
                if (M = !w.detectDuplicates, P = !w.sortStable && t.slice(0), t.sort(U), M) {
                    for (; e = t[s++];) e === t[s] && (n = i.push(s));
                    for (; n--;) t.splice(i[n], 1)
                }
                return P = null, t
            }, k = e.getText = function (t) {
                var e, i = "", n = 0, s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += k(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else for (; e = t[n++];) i += k(e);
                return i
            }, x = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: pt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(yt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var e, i = !t[6] && t[2];
                        return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = D(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(yt, wt).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && B(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    }, ATTR: function (t, i, n) {
                        return function (s) {
                            var o = e.attr(s, t);
                            return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    }, CHILD: function (t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
                        return 1 === n && 0 === s ? function (t) {
                            return !!t.parentNode
                        } : function (e, i, l) {
                            var h, u, c, d, p, f, g = o !== r ? "nextSibling" : "previousSibling", m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(), _ = !l && !a, b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (d = e; d = d[g];) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? m.firstChild : m.lastChild], r && _) {
                                    for (d = m, c = d[L] || (d[L] = {}), u = c[d.uniqueID] || (c[d.uniqueID] = {}), h = u[t] || [], p = h[0] === q && h[1], b = p && h[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || f.pop();) if (1 === d.nodeType && ++b && d === e) {
                                        u[t] = [q, p, b];
                                        break
                                    }
                                } else if (_ && (d = e, c = d[L] || (d[L] = {}), u = c[d.uniqueID] || (c[d.uniqueID] = {}), h = u[t] || [], p = h[0] === q && h[1], b = p), !1 === b) for (; (d = ++p && d && d[g] || (b = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (_ && (c = d[L] || (d[L] = {}), u = c[d.uniqueID] || (c[d.uniqueID] = {}), u[t] = [q, b]), d !== e));) ;
                                return (b -= s) === n || b % n == 0 && b / n >= 0
                            }
                        }
                    }, PSEUDO: function (t, i) {
                        var s, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[L] ? o(i) : o.length > 1 ? (s = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function (t, e) {
                            for (var n, s = o(t, i), r = s.length; r--;) n = tt(t, s[r]), t[n] = !(e[n] = s[r])
                        }) : function (t) {
                            return o(t, 0, s)
                        }) : o
                    }
                },
                pseudos: {
                    not: n(function (t) {
                        var e = [], i = [], s = T(t.replace(at, "$1"));
                        return s[L] ? n(function (t, e, i, n) {
                            for (var o, r = s(t, null, n, []), a = t.length; a--;) (o = r[a]) && (t[a] = !(e[a] = o))
                        }) : function (t, n, o) {
                            return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop()
                        }
                    }), has: n(function (t) {
                        return function (i) {
                            return e(t, i).length > 0
                        }
                    }), contains: n(function (t) {
                        return t = t.replace(yt, wt), function (e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                    }), lang: n(function (t) {
                        return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, wt).toLowerCase(), function (e) {
                            var i;
                            do {
                                if (i = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    }, root: function (t) {
                        return t === A
                    }, focus: function (t) {
                        return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: function (t) {
                        return !1 === t.disabled
                    }, disabled: function (t) {
                        return !0 === t.disabled
                    }, checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0
                    }, parent: function (t) {
                        return !x.pseudos.empty(t)
                    }, header: function (t) {
                        return gt.test(t.nodeName)
                    }, input: function (t) {
                        return ft.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: h(function () {
                        return [0]
                    }), last: h(function (t, e) {
                        return [e - 1]
                    }), eq: h(function (t, e, i) {
                        return [i < 0 ? i + e : i]
                    }), even: h(function (t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    }), odd: h(function (t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    }), lt: h(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }), gt: h(function (t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (y in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) x.pseudos[y] = a(y);
            for (y in {submit: !0, reset: !0}) x.pseudos[y] = l(y);
            return c.prototype = x.filters = x.pseudos, x.setFilters = new c, D = e.tokenize = function (t, i) {
                var n, s, o, r, a, l, h, u = Y[t + " "];
                if (u) return i ? 0 : u.slice(0);
                for (a = t, l = [], h = x.preFilter; a;) {
                    n && !(s = lt.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = ht.exec(a)) && (n = s.shift(), o.push({
                        value: n,
                        type: s[0].replace(at, " ")
                    }), a = a.slice(n.length));
                    for (r in x.filter) !(s = pt[r].exec(a)) || h[r] && !(s = h[r](s)) || (n = s.shift(), o.push({
                        value: n,
                        type: r,
                        matches: s
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : Y(t, l).slice(0)
            }, T = e.compile = function (t, e) {
                var i, n = [], s = [], o = $[t + " "];
                if (!o) {
                    for (e || (e = D(t)), i = e.length; i--;) o = _(e[i]), o[L] ? n.push(o) : s.push(o);
                    o = $(t, b(s, n)), o.selector = t
                }
                return o
            }, S = e.select = function (t, e, i, n) {
                var s, o, r, a, l, h = "function" == typeof t && t, c = !n && D(t = h.selector || t);
                if (i = i || [], 1 === c.length) {
                    if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && w.getById && 9 === e.nodeType && H && x.relative[o[1].type]) {
                        if (!(e = (x.find.ID(r.matches[0].replace(yt, wt), e) || [])[0])) return i;
                        h && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (s = pt.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !x.relative[a = r.type]);) if ((l = x.find[a]) && (n = l(r.matches[0].replace(yt, wt), _t.test(o[0].type) && u(e.parentNode) || e))) {
                        if (o.splice(s, 1), !(t = n.length && d(o))) return J.apply(i, n), i;
                        break
                    }
                }
                return (h || T(t, c))(n, e, !H, i, !e || _t.test(t) && u(e.parentNode) || e), i
            }, w.sortStable = L.split("").sort(U).join("") === L, w.detectDuplicates = !!M, N(), w.sortDetached = s(function (t) {
                return 1 & t.compareDocumentPosition(E.createElement("div"))
            }), s(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function (t, e, i) {
                if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && s(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function (t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), s(function (t) {
                return null == t.getAttribute("disabled")
            }) || o(et, function (t, e, i) {
                var n;
                if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
    pt.find = _t, pt.expr = _t.selectors, pt.expr[":"] = pt.expr.pseudos, pt.uniqueSort = pt.unique = _t.uniqueSort, pt.text = _t.getText, pt.isXMLDoc = _t.isXML, pt.contains = _t.contains;
    var bt = function (t, e, i) {
        for (var n = [], s = i !== undefined; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
            if (s && pt(t).is(i)) break;
            n.push(t)
        }
        return n
    }, yt = function (t, e) {
        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
        return i
    }, wt = pt.expr.match.needsContext, xt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, kt = /^.[^:#\[\.,]*$/;
    pt.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? pt.find.matchesSelector(n, t) ? [n] : [] : pt.find.matches(t, pt.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, pt.fn.extend({
        find: function (t) {
            var e, i = [], n = this, s = n.length;
            if ("string" != typeof t) return this.pushStack(pt(t).filter(function () {
                for (e = 0; e < s; e++) if (pt.contains(n[e], this)) return !0
            }));
            for (e = 0; e < s; e++) pt.find(t, n[e], i);
            return i = this.pushStack(s > 1 ? pt.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        }, filter: function (t) {
            return this.pushStack(n(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(n(this, t || [], !0))
        }, is: function (t) {
            return !!n(this, "string" == typeof t && wt.test(t) ? pt(t) : t || [], !1).length
        }
    });
    var Ct, Dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (pt.fn.init = function (t, e, i) {
        var n, s;
        if (!t) return this;
        if (i = i || Ct, "string" == typeof t) {
            if (!(n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Dt.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof pt ? e[0] : e, pt.merge(this, pt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : nt, !0)), xt.test(n[1]) && pt.isPlainObject(e)) for (n in e) pt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            if ((s = nt.getElementById(n[2])) && s.parentNode) {
                if (s.id !== n[2]) return Ct.find(t);
                this.length = 1, this[0] = s
            }
            return this.context = nt, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : pt.isFunction(t) ? "undefined" != typeof i.ready ? i.ready(t) : t(pt) : (t.selector !== undefined && (this.selector = t.selector, this.context = t.context), pt.makeArray(t, this))
    }).prototype = pt.fn, Ct = pt(nt);
    var Tt = /^(?:parents|prev(?:Until|All))/, St = {children: !0, contents: !0, next: !0, prev: !0};
    pt.fn.extend({
        has: function (t) {
            var e, i = pt(t, this), n = i.length;
            return this.filter(function () {
                for (e = 0; e < n; e++) if (pt.contains(this, i[e])) return !0
            })
        }, closest: function (t, e) {
            for (var i, n = 0, s = this.length, o = [], r = wt.test(t) || "string" != typeof t ? pt(t, e || this.context) : 0; n < s; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && pt.find.matchesSelector(i, t))) {
                o.push(i);
                break
            }
            return this.pushStack(o.length > 1 ? pt.uniqueSort(o) : o)
        }, index: function (t) {
            return t ? "string" == typeof t ? pt.inArray(this[0], pt(t)) : pt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), pt.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return bt(t, "parentNode")
        }, parentsUntil: function (t, e, i) {
            return bt(t, "parentNode", i)
        }, next: function (t) {
            return s(t, "nextSibling")
        }, prev: function (t) {
            return s(t, "previousSibling")
        }, nextAll: function (t) {
            return bt(t, "nextSibling")
        }, prevAll: function (t) {
            return bt(t, "previousSibling")
        }, nextUntil: function (t, e, i) {
            return bt(t, "nextSibling", i)
        }, prevUntil: function (t, e, i) {
            return bt(t, "previousSibling", i)
        }, siblings: function (t) {
            return yt((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return yt(t.firstChild)
        }, contents: function (t) {
            return pt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : pt.merge([], t.childNodes)
        }
    }, function (t, e) {
        pt.fn[t] = function (i, n) {
            var s = pt.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = pt.filter(n, s)), this.length > 1 && (St[t] || (s = pt.uniqueSort(s)), Tt.test(t) && (s = s.reverse())), this.pushStack(s)
        }
    });
    var It = /\S+/g;
    pt.Callbacks = function (t) {
        t = "string" == typeof t ? o(t) : pt.extend({}, t);
        var e, i, n, s, r = [], a = [], l = -1, h = function () {
            for (s = t.once, n = e = !0; a.length; l = -1) for (i = a.shift(); ++l < r.length;) !1 === r[l].apply(i[0], i[1]) && t.stopOnFalse && (l = r.length, i = !1);
            t.memory || (i = !1), e = !1, s && (r = i ? [] : "")
        }, u = {
            add: function () {
                return r && (i && !e && (l = r.length - 1, a.push(i)), function e(i) {
                    pt.each(i, function (i, n) {
                        pt.isFunction(n) ? t.unique && u.has(n) || r.push(n) : n && n.length && "string" !== pt.type(n) && e(n)
                    })
                }(arguments), i && !e && h()), this
            }, remove: function () {
                return pt.each(arguments, function (t, e) {
                    for (var i; (i = pt.inArray(e, r, i)) > -1;) r.splice(i, 1), i <= l && l--
                }), this
            }, has: function (t) {
                return t ? pt.inArray(t, r) > -1 : r.length > 0
            }, empty: function () {
                return r && (r = []), this
            }, disable: function () {
                return s = a = [], r = i = "", this
            }, disabled: function () {
                return !r
            }, lock: function () {
                return s = !0, i || u.disable(), this
            }, locked: function () {
                return !!s
            }, fireWith: function (t, i) {
                return s || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || h()), this
            }, fire: function () {
                return u.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return u
    }, pt.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", pt.Callbacks("once memory"), "resolved"], ["reject", "fail", pt.Callbacks("once memory"), "rejected"], ["notify", "progress", pt.Callbacks("memory")]],
                i = "pending", n = {
                    state: function () {
                        return i
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, then: function () {
                        var t = arguments;
                        return pt.Deferred(function (i) {
                            pt.each(e, function (e, o) {
                                var r = pt.isFunction(t[e]) && t[e];
                                s[o[1]](function () {
                                    var t = r && r.apply(this, arguments);
                                    t && pt.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? pt.extend(t, n) : n
                    }
                }, s = {};
            return n.pipe = n.then, pt.each(e, function (t, o) {
                var r = o[2], a = o[3];
                n[o[1]] = r.add, a && r.add(function () {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function () {
                    return s[o[0] + "With"](this === s ? n : this, arguments), this
                }, s[o[0] + "With"] = r.fireWith
            }), n.promise(s), t && t.call(s, s), s
        }, when: function (t) {
            var e, i, n, s = 0, o = st.call(arguments), r = o.length,
                a = 1 !== r || t && pt.isFunction(t.promise) ? r : 0, l = 1 === a ? t : pt.Deferred(),
                h = function (t, i, n) {
                    return function (s) {
                        i[t] = this, n[t] = arguments.length > 1 ? st.call(arguments) : s, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (r > 1) for (e = new Array(r), i = new Array(r), n = new Array(r); s < r; s++) o[s] && pt.isFunction(o[s].promise) ? o[s].promise().progress(h(s, i, e)).done(h(s, n, o)).fail(l.reject) : --a;
            return a || l.resolveWith(n, o), l.promise()
        }
    });
    var Pt;
    pt.fn.ready = function (t) {
        return pt.ready.promise().done(t), this
    }, pt.extend({
        isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? pt.readyWait++ : pt.ready(!0)
        }, ready: function (t) {
            (!0 === t ? --pt.readyWait : pt.isReady) || (pt.isReady = !0, !0 !== t && --pt.readyWait > 0 || (Pt.resolveWith(nt, [pt]), pt.fn.triggerHandler && (pt(nt).triggerHandler("ready"), pt(nt).off("ready"))))
        }
    }), pt.ready.promise = function (e) {
        if (!Pt) if (Pt = pt.Deferred(), "complete" === nt.readyState || "loading" !== nt.readyState && !nt.documentElement.doScroll) t.setTimeout(pt.ready); else if (nt.addEventListener) nt.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a); else {
            nt.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var i = !1;
            try {
                i = null == t.frameElement && nt.documentElement
            } catch (t) {
            }
            i && i.doScroll && function e() {
                if (!pt.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (i) {
                        return t.setTimeout(e, 50)
                    }
                    r(), pt.ready()
                }
            }()
        }
        return Pt.promise(e)
    }, pt.ready.promise();
    var Mt;
    for (Mt in pt(ct)) break;
    ct.ownFirst = "0" === Mt, ct.inlineBlockNeedsLayout = !1, pt(function () {
        var t, e, i, n;
        (i = nt.getElementsByTagName("body")[0]) && i.style && (e = nt.createElement("div"), n = nt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ct.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
    }), function () {
        var t = nt.createElement("div");
        ct.deleteExpando = !0;
        try {
            delete t.test
        } catch (t) {
            ct.deleteExpando = !1
        }
        t = null
    }();
    var Nt = function (t) {
        var e = pt.noData[(t.nodeName + " ").toLowerCase()], i = +t.nodeType || 1;
        return (1 === i || 9 === i) && (!e || !0 !== e && t.getAttribute("classid") === e)
    }, Et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, At = /([A-Z])/g;
    pt.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (t) {
            return !!(t = t.nodeType ? pt.cache[t[pt.expando]] : t[pt.expando]) && !h(t)
        },
        data: function (t, e, i) {
            return u(t, e, i)
        },
        removeData: function (t, e) {
            return c(t, e)
        },
        _data: function (t, e, i) {
            return u(t, e, i, !0)
        },
        _removeData: function (t, e) {
            return c(t, e, !0)
        }
    }), pt.fn.extend({
        data: function (t, e) {
            var i, n, s, o = this[0], r = o && o.attributes;
            if (t === undefined) {
                if (this.length && (s = pt.data(o), 1 === o.nodeType && !pt._data(o, "parsedAttrs"))) {
                    for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = pt.camelCase(n.slice(5)), l(o, n, s[n])));
                    pt._data(o, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function () {
                pt.data(this, t)
            }) : arguments.length > 1 ? this.each(function () {
                pt.data(this, t, e)
            }) : o ? l(o, t, pt.data(o, t)) : undefined
        }, removeData: function (t) {
            return this.each(function () {
                pt.removeData(this, t)
            })
        }
    }), pt.extend({
        queue: function (t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = pt._data(t, e), i && (!n || pt.isArray(i) ? n = pt._data(t, e, pt.makeArray(i)) : n.push(i)), n || []
        }, dequeue: function (t, e) {
            e = e || "fx";
            var i = pt.queue(t, e), n = i.length, s = i.shift(), o = pt._queueHooks(t, e), r = function () {
                pt.dequeue(t, e)
            };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, r, o)), !n && o && o.empty.fire()
        }, _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return pt._data(t, i) || pt._data(t, i, {
                empty: pt.Callbacks("once memory").add(function () {
                    pt._removeData(t, e + "queue"), pt._removeData(t, i)
                })
            })
        }
    }), pt.fn.extend({
        queue: function (t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? pt.queue(this[0], t) : e === undefined ? this : this.each(function () {
                var i = pt.queue(this, t, e);
                pt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && pt.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                pt.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var i, n = 1, s = pt.Deferred(), o = this, r = this.length, a = function () {
                --n || s.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = undefined), t = t || "fx"; r--;) (i = pt._data(o[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), s.promise(e)
        }
    }), function () {
        var t;
        ct.shrinkWrapBlocks = function () {
            if (null != t) return t;
            t = !1;
            var e, i, n;
            return (i = nt.getElementsByTagName("body")[0]) && i.style ? (e = nt.createElement("div"), n = nt.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(nt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
        }
    }();
    var Ht = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ot = new RegExp("^(?:([+-])=|)(" + Ht + ")([a-z%]*)$", "i"),
        zt = ["Top", "Right", "Bottom", "Left"], jt = function (t, e) {
            return t = e || t, "none" === pt.css(t, "display") || !pt.contains(t.ownerDocument, t)
        }, Wt = function (t, e, i, n, s, o, r) {
            var a = 0, l = t.length, h = null == i;
            if ("object" === pt.type(i)) {
                s = !0;
                for (a in i) Wt(t, e, a, i[a], !0, o, r)
            } else if (n !== undefined && (s = !0, pt.isFunction(n) || (r = !0), h && (r ? (e.call(t, n), e = null) : (h = e, e = function (t, e, i) {
                return h.call(pt(t), i)
            })), e)) for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
            return s ? t : h ? e.call(t) : l ? e(t[0], i) : o
        }, Lt = /^(?:checkbox|radio)$/i, Ft = /<([\w:-]+)/, qt = /^$|\/(?:java|ecma)script/i, Rt = /^\s+/,
        Bt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function () {
        var t = nt.createElement("div"), e = nt.createDocumentFragment(), i = nt.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ct.leadingWhitespace = 3 === t.firstChild.nodeType, ct.tbody = !t.getElementsByTagName("tbody").length, ct.htmlSerialize = !!t.getElementsByTagName("link").length, ct.html5Clone = "<:nav></:nav>" !== nt.createElement("nav").cloneNode(!0).outerHTML, i.type = "checkbox", i.checked = !0, e.appendChild(i), ct.appendChecked = i.checked, t.innerHTML = "<textarea>x</textarea>", ct.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), i = nt.createElement("input"), i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), ct.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ct.noCloneEvent = !!t.addEventListener, t[pt.expando] = 1, ct.attributes = !t.getAttribute(pt.expando)
    }();
    var Yt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ct.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td;
    var $t = /<|&#?\w+;/, Ut = /<tbody/i;
    !function () {
        var e, i, n = nt.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) i = "on" + e, (ct[e] = i in t) || (n.setAttribute(i, "t"), ct[e] = !1 === n.attributes[i].expando);
        n = null
    }();
    var Kt = /^(?:input|select|textarea)$/i, Vt = /^key/, Xt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Qt = /^(?:focusinfocus|focusoutblur)$/, Gt = /^([^.]*)(?:\.(.+)|)/;
    pt.event = {
        global: {},
        add: function (t, e, i, n, s) {
            var o, r, a, l, h, u, c, d, p, f, g, m = pt._data(t);
            if (m) {
                for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = pt.guid++), (r = m.events) || (r = m.events = {}), (u = m.handle) || (u = m.handle = function (t) {
                    return void 0 === pt || t && pt.event.triggered === t.type ? undefined : pt.event.dispatch.apply(u.elem, arguments)
                }, u.elem = t), e = (e || "").match(It) || [""], a = e.length; a--;) o = Gt.exec(e[a]) || [], p = g = o[1], f = (o[2] || "").split(".").sort(), p && (h = pt.event.special[p] || {}, p = (s ? h.delegateType : h.bindType) || p, h = pt.event.special[p] || {}, c = pt.extend({
                    type: p, origType: g, data: n, handler: i, guid: i.guid, selector: s,
                    needsContext: s && pt.expr.match.needsContext.test(s), namespace: f.join(".")
                }, l), (d = r[p]) || (d = r[p] = [], d.delegateCount = 0, h.setup && !1 !== h.setup.call(t, n, f, u) || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, c) : d.push(c), pt.event.global[p] = !0);
                t = null
            }
        },
        remove: function (t, e, i, n, s) {
            var o, r, a, l, h, u, c, d, p, f, g, m = pt.hasData(t) && pt._data(t);
            if (m && (u = m.events)) {
                for (e = (e || "").match(It) || [""], h = e.length; h--;) if (a = Gt.exec(e[h]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                    for (c = pt.event.special[p] || {}, p = (n ? c.delegateType : c.bindType) || p, d = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) r = d[o], !s && g !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (d.splice(o, 1), r.selector && d.delegateCount--, c.remove && c.remove.call(t, r));
                    l && !d.length && (c.teardown && !1 !== c.teardown.call(t, f, m.handle) || pt.removeEvent(t, p, m.handle), delete u[p])
                } else for (p in u) pt.event.remove(t, p + e[h], i, n, !0);
                pt.isEmptyObject(u) && (delete m.handle, pt._removeData(t, "events"))
            }
        },
        trigger: function (e, i, n, s) {
            var o, r, a, l, h, u, c, d = [n || nt], p = ut.call(e, "type") ? e.type : e,
                f = ut.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = u = n = n || nt, 3 !== n.nodeType && 8 !== n.nodeType && !Qt.test(p + pt.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), r = p.indexOf(":") < 0 && "on" + p, e = e[pt.expando] ? e : new pt.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = n), i = null == i ? [e] : pt.makeArray(i, [e]), h = pt.event.special[p] || {}, s || !h.trigger || !1 !== h.trigger.apply(n, i))) {
                if (!s && !h.noBubble && !pt.isWindow(n)) {
                    for (l = h.delegateType || p, Qt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;
                    u === (n.ownerDocument || nt) && d.push(u.defaultView || u.parentWindow || t)
                }
                for (c = 0; (a = d[c++]) && !e.isPropagationStopped();) e.type = c > 1 ? l : h.bindType || p, o = (pt._data(a, "events") || {})[e.type] && pt._data(a, "handle"), o && o.apply(a, i), (o = r && a[r]) && o.apply && Nt(a) && (e.result = o.apply(a, i), !1 === e.result && e.preventDefault());
                if (e.type = p, !s && !e.isDefaultPrevented() && (!h._default || !1 === h._default.apply(d.pop(), i)) && Nt(n) && r && n[p] && !pt.isWindow(n)) {
                    u = n[r], u && (n[r] = null), pt.event.triggered = p;
                    try {
                        n[p]()
                    } catch (t) {
                    }
                    pt.event.triggered = undefined, u && (n[r] = u)
                }
                return e.result
            }
        },
        dispatch: function (t) {
            t = pt.event.fix(t);
            var e, i, n, s, o, r = [], a = st.call(arguments), l = (pt._data(this, "events") || {})[t.type] || [],
                h = pt.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, t)) {
                for (r = pt.event.handlers.call(this, t, l), e = 0; (s = r[e++]) && !t.isPropagationStopped();) for (t.currentTarget = s.elem, i = 0; (o = s.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, (n = ((pt.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a)) !== undefined && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var i, n, s, o, r = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                for (n = [], i = 0; i < a; i++) o = e[i], s = o.selector + " ", n[s] === undefined && (n[s] = o.needsContext ? pt(s, this).index(l) > -1 : pt.find(s, this, null, [l]).length), n[s] && n.push(o);
                n.length && r.push({elem: l, handlers: n})
            }
            return a < e.length && r.push({elem: this, handlers: e.slice(a)}), r
        },
        fix: function (t) {
            if (t[pt.expando]) return t;
            var e, i, n, s = t.type, o = t, r = this.fixHooks[s];
            for (r || (this.fixHooks[s] = r = Xt.test(s) ? this.mouseHooks : Vt.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new pt.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
            return t.target || (t.target = o.srcElement || nt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var i, n, s, o = e.button, r = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || nt, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r), t.which || o === undefined || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== y() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === y() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (pt.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                }, _default: function (t) {
                    return pt.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    t.result !== undefined && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, i) {
            var n = pt.extend(new pt.Event, i, {type: t, isSimulated: !0});
            pt.event.trigger(n, null, e), n.isDefaultPrevented() && i.preventDefault()
        }
    }, pt.removeEvent = nt.removeEventListener ? function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    } : function (t, e, i) {
        var n = "on" + e;
        t.detachEvent && ("undefined" == typeof t[n] && (t[n] = null), t.detachEvent(n, i))
    }, pt.Event = function (t, e) {
        if (!(this instanceof pt.Event)) return new pt.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === undefined && !1 === t.returnValue ? _ : b) : this.type = t, e && pt.extend(this, e), this.timeStamp = t && t.timeStamp || pt.now(), this[pt.expando] = !0
    }, pt.Event.prototype = {
        constructor: pt.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = _, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = _, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = _, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, pt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        pt.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var i, n = this, s = t.relatedTarget, o = t.handleObj;
                return s && (s === n || pt.contains(n, s)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), ct.submit || (pt.event.special.submit = {
        setup: function () {
            if (pt.nodeName(this, "form")) return !1;
            pt.event.add(this, "click._submit keypress._submit", function (t) {
                var e = t.target,
                    i = pt.nodeName(e, "input") || pt.nodeName(e, "button") ? pt.prop(e, "form") : undefined;
                i && !pt._data(i, "submit") && (pt.event.add(i, "submit._submit", function (t) {
                    t._submitBubble = !0
                }), pt._data(i, "submit", !0))
            })
        }, postDispatch: function (t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && pt.event.simulate("submit", this.parentNode, t))
        }, teardown: function () {
            if (pt.nodeName(this, "form")) return !1;
            pt.event.remove(this, "._submit")
        }
    }), ct.change || (pt.event.special.change = {
        setup: function () {
            if (Kt.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (pt.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), pt.event.add(this, "click._change", function (t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1), pt.event.simulate("change", this, t)
            })), !1;
            pt.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                Kt.test(e.nodeName) && !pt._data(e, "change") && (pt.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || pt.event.simulate("change", this.parentNode, t)
                }), pt._data(e, "change", !0))
            })
        }, handle: function (t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return pt.event.remove(this, "._change"), !Kt.test(this.nodeName)
        }
    }), ct.focusin || pt.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var i = function (t) {
            pt.event.simulate(e, t.target, pt.event.fix(t))
        };
        pt.event.special[e] = {
            setup: function () {
                var n = this.ownerDocument || this, s = pt._data(n, e);
                s || n.addEventListener(t, i, !0), pt._data(n, e, (s || 0) + 1)
            }, teardown: function () {
                var n = this.ownerDocument || this, s = pt._data(n, e) - 1;
                s ? pt._data(n, e, s) : (n.removeEventListener(t, i, !0), pt._removeData(n, e))
            }
        }
    }), pt.fn.extend({
        on: function (t, e, i, n) {
            return w(this, t, e, i, n)
        }, one: function (t, e, i, n) {
            return w(this, t, e, i, n, 1)
        }, off: function (t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, pt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = undefined), !1 === i && (i = b), this.each(function () {
                pt.event.remove(this, t, i, e)
            })
        }, trigger: function (t, e) {
            return this.each(function () {
                pt.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return pt.event.trigger(t, e, i, !0)
        }
    });
    var Jt = / jQuery\d+="(?:null|\d+)"/g, Zt = new RegExp("<(?:" + Bt + ")[\\s/>]", "i"),
        te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, ee = /<script|<style|<link/i,
        ie = /checked\s*(?:[^=]|=\s*.checked.)/i, ne = /^true\/(.*)/, se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        oe = p(nt), re = oe.appendChild(nt.createElement("div"));
    pt.extend({
        htmlPrefilter: function (t) {
            return t.replace(te, "<$1></$2>")
        }, clone: function (t, e, i) {
            var n, s, o, r, a, l = pt.contains(t.ownerDocument, t);
            if (ct.html5Clone || pt.isXMLDoc(t) || !Zt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (re.innerHTML = t.outerHTML, re.removeChild(o = re.firstChild)), !(ct.noCloneEvent && ct.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pt.isXMLDoc(t))) for (n = f(o), a = f(t), r = 0; null != (s = a[r]); ++r) n[r] && T(s, n[r]);
            if (e) if (i) for (a = a || f(t), n = n || f(o), r = 0; null != (s = a[r]); r++) D(s, n[r]); else D(t, o);
            return n = f(o, "script"), n.length > 0 && g(n, !l && f(t, "script")), n = a = s = null, o
        }, cleanData: function (t, e) {
            for (var i, n, s, o, r = 0, a = pt.expando, l = pt.cache, h = ct.attributes, u = pt.event.special; null != (i = t[r]); r++) if ((e || Nt(i)) && (s = i[a], o = s && l[s])) {
                if (o.events) for (n in o.events) u[n] ? pt.event.remove(i, n) : pt.removeEvent(i, n, o.handle);
                l[s] && (delete l[s], h || "undefined" == typeof i.removeAttribute ? i[a] = undefined : i.removeAttribute(a), it.push(s))
            }
        }
    }), pt.fn.extend({
        domManip: S, detach: function (t) {
            return I(this, t, !0)
        }, remove: function (t) {
            return I(this, t)
        }, text: function (t) {
            return Wt(this, function (t) {
                return t === undefined ? pt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || nt).createTextNode(t))
            }, null, t, arguments.length)
        }, append: function () {
            return S(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    x(this, t).appendChild(t)
                }
            })
        }, prepend: function () {
            return S(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = x(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return S(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return S(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && pt.cleanData(f(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && pt.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return pt.clone(this, t, e)
            })
        }, html: function (t) {
            return Wt(this, function (t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (t === undefined) return 1 === e.nodeType ? e.innerHTML.replace(Jt, "") : undefined;
                if ("string" == typeof t && !ee.test(t) && (ct.htmlSerialize || !Zt.test(t)) && (ct.leadingWhitespace || !Rt.test(t)) && !Yt[(Ft.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = pt.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) e = this[i] || {}, 1 === e.nodeType && (pt.cleanData(f(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return S(this, arguments, function (e) {
                var i = this.parentNode;
                pt.inArray(this, t) < 0 && (pt.cleanData(f(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), pt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        pt.fn[t] = function (t) {
            for (var i, n = 0, s = [], o = pt(t), r = o.length - 1; n <= r; n++) i = n === r ? this : this.clone(!0), pt(o[n])[e](i), rt.apply(s, i.get());
            return this.pushStack(s)
        }
    });
    var ae, le = {HTML: "block", BODY: "block"}, he = /^margin/, ue = new RegExp("^(" + Ht + ")(?!px)[a-z%]+$", "i"),
        ce = function (t, e, i, n) {
            var s, o, r = {};
            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
            s = i.apply(t, n || []);
            for (o in e) t.style[o] = r[o];
            return s
        }, de = nt.documentElement;
    !function () {
        function e() {
            var e, u, c = nt.documentElement;
            c.appendChild(l), h.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i = s = a = !1, n = r = !0, t.getComputedStyle && (u = t.getComputedStyle(h), i = "1%" !== (u || {}).top, a = "2px" === (u || {}).marginLeft, s = "4px" === (u || {width: "4px"}).width, h.style.marginRight = "50%", n = "4px" === (u || {marginRight: "4px"}).marginRight, e = h.appendChild(nt.createElement("div")), e.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", h.style.width = "1px", r = !parseFloat((t.getComputedStyle(e) || {}).marginRight), h.removeChild(e)), h.style.display = "none", o = 0 === h.getClientRects().length, o && (h.style.display = "", h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", h.childNodes[0].style.borderCollapse = "separate", e = h.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), c.removeChild(l)
        }

        var i, n, s, o, r, a, l = nt.createElement("div"), h = nt.createElement("div");
        h.style && (h.style.cssText = "float:left;opacity:.5", ct.opacity = "0.5" === h.style.opacity, ct.cssFloat = !!h.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", ct.clearCloneStyle = "content-box" === h.style.backgroundClip, l = nt.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.innerHTML = "", l.appendChild(h), ct.boxSizing = "" === h.style.boxSizing || "" === h.style.MozBoxSizing || "" === h.style.WebkitBoxSizing, pt.extend(ct, {
            reliableHiddenOffsets: function () {
                return null == i && e(), o
            }, boxSizingReliable: function () {
                return null == i && e(), s
            }, pixelMarginRight: function () {
                return null == i && e(), n
            }, pixelPosition: function () {
                return null == i && e(), i
            }, reliableMarginRight: function () {
                return null == i && e(), r
            }, reliableMarginLeft: function () {
                return null == i && e(), a
            }
        }))
    }();
    var pe, fe, ge = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (pe = function (e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e)
    }, fe = function (t, e, i) {
        var n, s, o, r, a = t.style;
        return i = i || pe(t), r = i ? i.getPropertyValue(e) || i[e] : undefined, "" !== r && r !== undefined || pt.contains(t.ownerDocument, t) || (r = pt.style(t, e)), i && !ct.pixelMarginRight() && ue.test(r) && he.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o), r === undefined ? r : r + ""
    }) : de.currentStyle && (pe = function (t) {
        return t.currentStyle
    }, fe = function (t, e, i) {
        var n, s, o, r, a = t.style;
        return i = i || pe(t), r = i ? i[e] : undefined, null == r && a && a[e] && (r = a[e]), ue.test(r) && !ge.test(e) && (n = a.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : r, r = a.pixelLeft + "px", a.left = n, o && (s.left = o)), r === undefined ? r : r + "" || "auto"
    });
    var me = /alpha\([^)]*\)/i, ve = /opacity\s*=\s*([^)]*)/i, _e = /^(none|table(?!-c[ea]).+)/,
        be = new RegExp("^(" + Ht + ")(.*)$", "i"), ye = {position: "absolute", visibility: "hidden", display: "block"},
        we = {letterSpacing: "0", fontWeight: "400"}, xe = ["Webkit", "O", "Moz", "ms"],
        ke = nt.createElement("div").style;
    pt.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = fe(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: ct.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, r, a = pt.camelCase(e), l = t.style;
                if (e = pt.cssProps[a] || (pt.cssProps[a] = E(a) || a), r = pt.cssHooks[e] || pt.cssHooks[a], i === undefined) return r && "get" in r && (s = r.get(t, !1, n)) !== undefined ? s : l[e];
                if (o = typeof i, "string" === o && (s = Ot.exec(i)) && s[1] && (i = d(t, e, s), o = "number"), null != i && i === i && ("number" === o && (i += s && s[3] || (pt.cssNumber[a] ? "" : "px")), ct.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set" in r && (i = r.set(t, i, n)) === undefined))) try {
                    l[e] = i
                } catch (t) {
                }
            }
        },
        css: function (t, e, i, n) {
            var s, o, r, a = pt.camelCase(e);
            return e = pt.cssProps[a] || (pt.cssProps[a] = E(a) || a), r = pt.cssHooks[e] || pt.cssHooks[a], r && "get" in r && (o = r.get(t, !0, i)), o === undefined && (o = fe(t, e, n)), "normal" === o && e in we && (o = we[e]), "" === i || i ? (s = parseFloat(o), !0 === i || isFinite(s) ? s || 0 : o) : o
        }
    }), pt.each(["height", "width"], function (t, e) {
        pt.cssHooks[e] = {
            get: function (t, i, n) {
                if (i) return _e.test(pt.css(t, "display")) && 0 === t.offsetWidth ? ce(t, ye, function () {
                    return z(t, e, n)
                }) : z(t, e, n)
            }, set: function (t, i, n) {
                var s = n && pe(t);
                return H(t, i, n ? O(t, e, n, ct.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, s), s) : 0)
            }
        }
    }), ct.opacity || (pt.cssHooks.opacity = {
        get: function (t, e) {
            return ve.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        }, set: function (t, e) {
            var i = t.style, n = t.currentStyle, s = pt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === pt.trim(o.replace(me, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = me.test(o) ? o.replace(me, s) : o + " " + s)
        }
    }), pt.cssHooks.marginRight = N(ct.reliableMarginRight, function (t, e) {
        if (e) return ce(t, {display: "inline-block"}, fe, [t, "marginRight"])
    }), pt.cssHooks.marginLeft = N(ct.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(fe(t, "marginLeft")) || (pt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - ce(t, {marginLeft: 0}, function () {
            return t.getBoundingClientRect().left
        }) : 0)) + "px"
    }), pt.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        pt.cssHooks[t + e] = {
            expand: function (i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + zt[n] + e] = o[n] || o[n - 2] || o[0];
                return s
            }
        }, he.test(t) || (pt.cssHooks[t + e].set = H)
    }), pt.fn.extend({
        css: function (t, e) {
            return Wt(this, function (t, e, i) {
                var n, s, o = {}, r = 0;
                if (pt.isArray(e)) {
                    for (n = pe(t), s = e.length; r < s; r++) o[e[r]] = pt.css(t, e[r], !1, n);
                    return o
                }
                return i !== undefined ? pt.style(t, e, i) : pt.css(t, e)
            }, t, e, arguments.length > 1)
        }, show: function () {
            return A(this, !0)
        }, hide: function () {
            return A(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                jt(this) ? pt(this).show() : pt(this).hide()
            })
        }
    }), pt.Tween = j, j.prototype = {
        constructor: j, init: function (t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || pt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (pt.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var t = j.propHooks[this.prop];
            return t && t.get ? t.get(this) : j.propHooks._default.get(this)
        }, run: function (t) {
            var e, i = j.propHooks[this.prop];
            return this.options.duration ? this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = pt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            }, set: function (t) {
                pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[pt.cssProps[t.prop]] && !pt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : pt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, pt.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, pt.fx = j.prototype.init, pt.fx.step = {};
    var Ce, De, Te = /^(?:toggle|show|hide)$/, Se = /queueHooks$/;
    pt.Animation = pt.extend(B, {
        tweeners: {
            "*": [function (t, e) {
                var i = this.createTween(t, e);
                return d(i.elem, t, Ot.exec(e), i), i
            }]
        }, tweener: function (t, e) {
            pt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(It);
            for (var i, n = 0, s = t.length; n < s; n++) i = t[n], B.tweeners[i] = B.tweeners[i] || [], B.tweeners[i].unshift(e)
        }, prefilters: [q], prefilter: function (t, e) {
            e ? B.prefilters.unshift(t) : B.prefilters.push(t)
        }
    }), pt.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? pt.extend({}, t) : {
            complete: i || !i && e || pt.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !pt.isFunction(e) && e
        };
        return n.duration = pt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in pt.fx.speeds ? pt.fx.speeds[n.duration] : pt.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            pt.isFunction(n.old) && n.old.call(this), n.queue && pt.dequeue(this, n.queue)
        }, n
    }, pt.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(jt).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
        }, animate: function (t, e, i, n) {
            var s = pt.isEmptyObject(t), o = pt.speed(e, i, n), r = function () {
                var e = B(this, pt.extend({}, t), o);
                (s || pt._data(this, "finish")) && e.stop(!0)
            };
            return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        }, stop: function (t, e, i) {
            var n = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = e, e = t, t = undefined), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                var e = !0, s = null != t && t + "queueHooks", o = pt.timers, r = pt._data(this);
                if (s) r[s] && r[s].stop && n(r[s]); else for (s in r) r[s] && r[s].stop && Se.test(s) && n(r[s]);
                for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                !e && i || pt.dequeue(this, t)
            })
        }, finish: function (t) {
            return !1 !== t && (t = t || "fx"), this.each(function () {
                var e, i = pt._data(this), n = i[t + "queue"], s = i[t + "queueHooks"], o = pt.timers,
                    r = n ? n.length : 0;
                for (i.finish = !0, pt.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }), pt.each(["toggle", "show", "hide"], function (t, e) {
        var i = pt.fn[e];
        pt.fn[e] = function (t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(L(e, !0), t, n, s)
        }
    }), pt.each({
        slideDown: L("show"),
        slideUp: L("hide"),
        slideToggle: L("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        pt.fn[t] = function (t, i, n) {
            return this.animate(e, t, i, n)
        }
    }), pt.timers = [], pt.fx.tick = function () {
        var t, e = pt.timers, i = 0;
        for (Ce = pt.now(); i < e.length; i++) (t = e[i])() || e[i] !== t || e.splice(i--, 1);
        e.length || pt.fx.stop(), Ce = undefined
    }, pt.fx.timer = function (t) {
        pt.timers.push(t), t() ? pt.fx.start() : pt.timers.pop()
    }, pt.fx.interval = 13, pt.fx.start = function () {
        De || (De = t.setInterval(pt.fx.tick, pt.fx.interval))
    }, pt.fx.stop = function () {
        t.clearInterval(De), De = null
    }, pt.fx.speeds = {slow: 600, fast: 200, _default: 400}, pt.fn.delay = function (e, i) {
        return e = pt.fx ? pt.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function (i, n) {
            var s = t.setTimeout(i, e);
            n.stop = function () {
                t.clearTimeout(s)
            }
        })
    }, function () {
        var t, e = nt.createElement("input"), i = nt.createElement("div"), n = nt.createElement("select"),
            s = n.appendChild(nt.createElement("option"));
        i = nt.createElement("div"), i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = i.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), i.appendChild(e), t = i.getElementsByTagName("a")[0], t.style.cssText = "top:1px", ct.getSetAttribute = "t" !== i.className, ct.style = /top/.test(t.getAttribute("style")), ct.hrefNormalized = "/a" === t.getAttribute("href"), ct.checkOn = !!e.value, ct.optSelected = s.selected, ct.enctype = !!nt.createElement("form").enctype, n.disabled = !0, ct.optDisabled = !s.disabled, e = nt.createElement("input"), e.setAttribute("value", ""), ct.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ct.radioValue = "t" === e.value
    }();
    var Ie = /\r/g, Pe = /[\x20\t\r\n\f]+/g;
    pt.fn.extend({
        val: function (t) {
            var e, i, n, s = this[0];
            if (arguments.length) return n = pt.isFunction(t), this.each(function (i) {
                var s;
                1 === this.nodeType && (s = n ? t.call(this, i, pt(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : pt.isArray(s) && (s = pt.map(s, function (t) {
                    return null == t ? "" : t + ""
                })), (e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && e.set(this, s, "value") !== undefined || (this.value = s))
            });
            if (s) return (e = pt.valHooks[s.type] || pt.valHooks[s.nodeName.toLowerCase()]) && "get" in e && (i = e.get(s, "value")) !== undefined ? i : (i = s.value, "string" == typeof i ? i.replace(Ie, "") : null == i ? "" : i)
        }
    }), pt.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = pt.find.attr(t, "value");
                    return null != e ? e : pt.trim(pt.text(t)).replace(Pe, " ")
                }
            }, select: {
                get: function (t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || s < 0, r = o ? null : [], a = o ? s + 1 : n.length, l = s < 0 ? a : o ? s : 0; l < a; l++) if (i = n[l], (i.selected || l === s) && (ct.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !pt.nodeName(i.parentNode, "optgroup"))) {
                        if (e = pt(i).val(), o) return e;
                        r.push(e)
                    }
                    return r
                }, set: function (t, e) {
                    for (var i, n, s = t.options, o = pt.makeArray(e), r = s.length; r--;) if (n = s[r], pt.inArray(pt.valHooks.option.get(n), o) > -1) try {
                        n.selected = i = !0
                    } catch (t) {
                        n.scrollHeight
                    } else n.selected = !1;
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), pt.each(["radio", "checkbox"], function () {
        pt.valHooks[this] = {
            set: function (t, e) {
                if (pt.isArray(e)) return t.checked = pt.inArray(pt(t).val(), e) > -1
            }
        }, ct.checkOn || (pt.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Me, Ne, Ee = pt.expr.attrHandle, Ae = /^(?:checked|selected)$/i, He = ct.getSetAttribute, Oe = ct.input;
    pt.fn.extend({
        attr: function (t, e) {
            return Wt(this, pt.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                pt.removeAttr(this, t)
            })
        }
    }), pt.extend({
        attr: function (t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? pt.prop(t, e, i) : (1 === o && pt.isXMLDoc(t) || (e = e.toLowerCase(), s = pt.attrHooks[e] || (pt.expr.match.bool.test(e) ? Ne : Me)), i !== undefined ? null === i ? void pt.removeAttr(t, e) : s && "set" in s && (n = s.set(t, i, e)) !== undefined ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : (n = pt.find.attr(t, e), null == n ? undefined : n))
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ct.radioValue && "radio" === e && pt.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var i, n, s = 0, o = e && e.match(It);
            if (o && 1 === t.nodeType) for (; i = o[s++];) n = pt.propFix[i] || i, pt.expr.match.bool.test(i) ? Oe && He || !Ae.test(i) ? t[n] = !1 : t[pt.camelCase("default-" + i)] = t[n] = !1 : pt.attr(t, i, ""), t.removeAttribute(He ? i : n)
        }
    }), Ne = {
        set: function (t, e, i) {
            return !1 === e ? pt.removeAttr(t, i) : Oe && He || !Ae.test(i) ? t.setAttribute(!He && pt.propFix[i] || i, i) : t[pt.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, pt.each(pt.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var i = Ee[e] || pt.find.attr;
        Oe && He || !Ae.test(e) ? Ee[e] = function (t, e, n) {
            var s, o;
            return n || (o = Ee[e], Ee[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, Ee[e] = o), s
        } : Ee[e] = function (t, e, i) {
            if (!i) return t[pt.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Oe && He || (pt.attrHooks.value = {
        set: function (t, e, i) {
            if (!pt.nodeName(t, "input")) return Me && Me.set(t, e, i);
            t.defaultValue = e
        }
    }), He || (Me = {
        set: function (t, e, i) {
            var n = t.getAttributeNode(i);
            if (n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i)) return e
        }
    }, Ee.id = Ee.name = Ee.coords = function (t, e, i) {
        var n;
        if (!i) return (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
    }, pt.valHooks.button = {
        get: function (t, e) {
            var i = t.getAttributeNode(e);
            if (i && i.specified) return i.value
        }, set: Me.set
    }, pt.attrHooks.contenteditable = {
        set: function (t, e, i) {
            Me.set(t, "" !== e && e, i)
        }
    }, pt.each(["width", "height"], function (t, e) {
        pt.attrHooks[e] = {
            set: function (t, i) {
                if ("" === i) return t.setAttribute(e, "auto"), i
            }
        }
    })), ct.style || (pt.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || undefined
        }, set: function (t, e) {
            return t.style.cssText = e + ""
        }
    });
    var ze = /^(?:input|select|textarea|button|object)$/i, je = /^(?:a|area)$/i;
    pt.fn.extend({
        prop: function (t, e) {
            return Wt(this, pt.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return t = pt.propFix[t] || t, this.each(function () {
                try {
                    this[t] = undefined, delete this[t]
                } catch (t) {
                }
            })
        }
    }), pt.extend({
        prop: function (t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pt.isXMLDoc(t) || (e = pt.propFix[e] || e, s = pt.propHooks[e]), i !== undefined ? s && "set" in s && (n = s.set(t, i, e)) !== undefined ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = pt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ze.test(t.nodeName) || je.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), ct.hrefNormalized || pt.each(["href", "src"], function (t, e) {
        pt.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ct.optSelected || (pt.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }, set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        pt.propFix[this.toLowerCase()] = this
    }), ct.enctype || (pt.propFix.enctype = "encoding");
    var We = /[\t\r\n\f]/g;
    pt.fn.extend({
        addClass: function (t) {
            var e, i, n, s, o, r, a, l = 0;
            if (pt.isFunction(t)) return this.each(function (e) {
                pt(this).addClass(t.call(this, e, Y(this)))
            });
            if ("string" == typeof t && t) for (e = t.match(It) || []; i = this[l++];) if (s = Y(i), n = 1 === i.nodeType && (" " + s + " ").replace(We, " ")) {
                for (r = 0; o = e[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                a = pt.trim(n), s !== a && pt.attr(i, "class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, i, n, s, o, r, a, l = 0;
            if (pt.isFunction(t)) return this.each(function (e) {
                pt(this).removeClass(t.call(this, e, Y(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(It) || []; i = this[l++];) if (s = Y(i), n = 1 === i.nodeType && (" " + s + " ").replace(We, " ")) {
                for (r = 0; o = e[r++];) for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                a = pt.trim(n), s !== a && pt.attr(i, "class", a)
            }
            return this
        }, toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : pt.isFunction(t) ? this.each(function (i) {
                pt(this).toggleClass(t.call(this, i, Y(this), e), e)
            }) : this.each(function () {
                var e, n, s, o;
                if ("string" === i) for (n = 0, s = pt(this), o = t.match(It) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e); else t !== undefined && "boolean" !== i || (e = Y(this), e && pt._data(this, "__className__", e), pt.attr(this, "class", e || !1 === t ? "" : pt._data(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];) if (1 === i.nodeType && (" " + Y(i) + " ").replace(We, " ").indexOf(e) > -1) return !0;
            return !1
        }
    }), pt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        pt.fn[e] = function (t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), pt.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var Le = t.location, Fe = pt.now(), qe = /\?/,
        Re = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pt.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null, s = pt.trim(e + "");
        return s && !pt.trim(s.replace(Re, function (t, e, s, o) {
            return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !o - !s, "")
        })) ? Function("return " + s)() : pt.error("Invalid JSON: " + e)
    }, pt.parseXML = function (e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (n = new t.DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new t.ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
        } catch (t) {
            i = undefined
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + e), i
    };
    var Be = /#.*$/, Ye = /([?&])_=[^&]*/, $e = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ue = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ke = /^(?:GET|HEAD)$/, Ve = /^\/\//,
        Xe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Qe = {}, Ge = {}, Je = "*/".concat("*"),
        Ze = Le.href, ti = Xe.exec(Ze.toLowerCase()) || [];
    pt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ze,
            type: "GET",
            isLocal: Ue.test(ti[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Je,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": pt.parseJSON, "text xml": pt.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? K(K(t, pt.ajaxSettings), e) : K(pt.ajaxSettings, t)
        },
        ajaxPrefilter: $(Qe),
        ajaxTransport: $(Ge),
        ajax: function (e, i) {
            function n(e, i, n, s) {
                var o, c, _, b, w, k = i;
                2 !== y && (y = 2, l && t.clearTimeout(l), u = undefined, a = s || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, n && (b = V(d, x, n)), b = X(d, b, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (pt.lastModified[r] = w), (w = x.getResponseHeader("etag")) && (pt.etag[r] = w)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, c = b.data, _ = b.error, o = !_)) : (_ = k, !e && k || (k = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (i || k) + "", o ? g.resolveWith(p, [c, k, x]) : g.rejectWith(p, [x, k, _]), x.statusCode(v), v = undefined, h && f.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? c : _]), m.fireWith(p, [x, k]), h && (f.trigger("ajaxComplete", [x, d]), --pt.active || pt.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (i = e, e = undefined), i = i || {};
            var s, o, r, a, l, h, u, c, d = pt.ajaxSetup({}, i), p = d.context || d,
                f = d.context && (p.nodeType || p.jquery) ? pt(p) : pt.event, g = pt.Deferred(),
                m = pt.Callbacks("once memory"), v = d.statusCode || {}, _ = {}, b = {}, y = 0, w = "canceled", x = {
                    readyState: 0, getResponseHeader: function (t) {
                        var e;
                        if (2 === y) {
                            if (!c) for (c = {}; e = $e.exec(a);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    }, getAllResponseHeaders: function () {
                        return 2 === y ? a : null
                    }, setRequestHeader: function (t, e) {
                        var i = t.toLowerCase();
                        return y || (t = b[i] = b[i] || t, _[t] = e), this
                    }, overrideMimeType: function (t) {
                        return y || (d.mimeType = t), this
                    }, statusCode: function (t) {
                        var e;
                        if (t) if (y < 2) for (e in t) v[e] = [v[e], t[e]]; else x.always(t[x.status]);
                        return this
                    }, abort: function (t) {
                        var e = t || w;
                        return u && u.abort(e), n(0, e), this
                    }
                };
            if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || Ze) + "").replace(Be, "").replace(Ve, ti[1] + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = pt.trim(d.dataType || "*").toLowerCase().match(It) || [""], null == d.crossDomain && (s = Xe.exec(d.url.toLowerCase()), d.crossDomain = !(!s || s[1] === ti[1] && s[2] === ti[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (ti[3] || ("http:" === ti[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = pt.param(d.data, d.traditional)), U(Qe, d, i, x), 2 === y) return x;
            h = pt.event && d.global, h && 0 == pt.active++ && pt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ke.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (qe.test(r) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = Ye.test(r) ? r.replace(Ye, "$1_=" + Fe++) : r + (qe.test(r) ? "&" : "?") + "_=" + Fe++)), d.ifModified && (pt.lastModified[r] && x.setRequestHeader("If-Modified-Since", pt.lastModified[r]), pt.etag[r] && x.setRequestHeader("If-None-Match", pt.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || i.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Je + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (!1 === d.beforeSend.call(p, x, d) || 2 === y)) return x.abort();
            w = "abort";
            for (o in {success: 1, error: 1, complete: 1}) x[o](d[o]);
            if (u = U(Ge, d, i, x)) {
                if (x.readyState = 1, h && f.trigger("ajaxSend", [x, d]), 2 === y) return x;
                d.async && d.timeout > 0 && (l = t.setTimeout(function () {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    y = 1, u.send(_, n)
                } catch (t) {
                    if (!(y < 2)) throw t;
                    n(-1, t)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function (t, e, i) {
            return pt.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return pt.get(t, undefined, e, "script")
        }
    }), pt.each(["get", "post"], function (t, e) {
        pt[e] = function (t, i, n, s) {
            return pt.isFunction(i) && (s = s || n, n = i, i = undefined), pt.ajax(pt.extend({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            }, pt.isPlainObject(t) && t))
        }
    }), pt._evalUrl = function (t) {
        return pt.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, pt.fn.extend({
        wrapAll: function (t) {
            if (pt.isFunction(t)) return this.each(function (e) {
                pt(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = pt(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        }, wrapInner: function (t) {
            return pt.isFunction(t) ? this.each(function (e) {
                pt(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = pt(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = pt.isFunction(t);
            return this.each(function (i) {
                pt(this).wrapAll(e ? t.call(this, i) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes)
            }).end()
        }
    }), pt.expr.filters.hidden = function (t) {
        return ct.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : G(t)
    }, pt.expr.filters.visible = function (t) {
        return !pt.expr.filters.hidden(t)
    };
    var ei = /%20/g, ii = /\[\]$/, ni = /\r?\n/g, si = /^(?:submit|button|image|reset|file)$/i,
        oi = /^(?:input|select|textarea|keygen)/i;
    pt.param = function (t, e) {
        var i, n = [], s = function (t, e) {
            e = pt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (e === undefined && (e = pt.ajaxSettings && pt.ajaxSettings.traditional), pt.isArray(t) || t.jquery && !pt.isPlainObject(t)) pt.each(t, function () {
            s(this.name, this.value)
        }); else for (i in t) J(i, t[i], e, s);
        return n.join("&").replace(ei, "+")
    }, pt.fn.extend({
        serialize: function () {
            return pt.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = pt.prop(this, "elements");
                return t ? pt.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !pt(this).is(":disabled") && oi.test(this.nodeName) && !si.test(t) && (this.checked || !Lt.test(t))
            }).map(function (t, e) {
                var i = pt(this).val();
                return null == i ? null : pt.isArray(i) ? pt.map(i, function (t) {
                    return {name: e.name, value: t.replace(ni, "\r\n")}
                }) : {name: e.name, value: i.replace(ni, "\r\n")}
            }).get()
        }
    }), pt.ajaxSettings.xhr = t.ActiveXObject !== undefined ? function () {
        return this.isLocal ? tt() : nt.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
    } : Z;
    var ri = 0, ai = {}, li = pt.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function () {
        for (var t in ai) ai[t](undefined, !0)
    }), ct.cors = !!li && "withCredentials" in li, li = ct.ajax = !!li, li && pt.ajaxTransport(function (e) {
        if (!e.crossDomain || ct.cors) {
            var i;
            return {
                send: function (n, s) {
                    var o, r = e.xhr(), a = ++ri;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) r[o] = e.xhrFields[o];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) n[o] !== undefined && r.setRequestHeader(o, n[o] + "");
                    r.send(e.hasContent && e.data || null), i = function (t, n) {
                        var o, l, h;
                        if (i && (n || 4 === r.readyState)) if (delete ai[a], i = undefined, r.onreadystatechange = pt.noop, n) 4 !== r.readyState && r.abort(); else {
                            h = {}, o = r.status, "string" == typeof r.responseText && (h.text = r.responseText);
                            try {
                                l = r.statusText
                            } catch (t) {
                                l = ""
                            }
                            o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = h.text ? 200 : 404
                        }
                        h && s(o, l, h, r.getAllResponseHeaders())
                    }, e.async ? 4 === r.readyState ? t.setTimeout(i) : r.onreadystatechange = ai[a] = i : i()
                }, abort: function () {
                    i && i(undefined, !0)
                }
            }
        }
    }), pt.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return pt.globalEval(t), t
            }
        }
    }), pt.ajaxPrefilter("script", function (t) {
        t.cache === undefined && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), pt.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, i = nt.head || pt("head")[0] || nt.documentElement;
            return {
                send: function (n, s) {
                    e = nt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                    }, i.insertBefore(e, i.firstChild)
                }, abort: function () {
                    e && e.onload(undefined, !0)
                }
            }
        }
    });
    var hi = [], ui = /(=)\?(?=&|$)|\?\?/;
    pt.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = hi.pop() || pt.expando + "_" + Fe++;
            return this[t] = !0, t
        }
    }), pt.ajaxPrefilter("json jsonp", function (e, i, n) {
        var s, o, r,
            a = !1 !== e.jsonp && (ui.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ui.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = pt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ui, "$1" + s) : !1 !== e.jsonp && (e.url += (qe.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
            return r || pt.error(s + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = t[s], t[s] = function () {
            r = arguments
        }, n.always(function () {
            o === undefined ? pt(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, hi.push(s)), r && pt.isFunction(o) && o(r[0]), r = o = undefined
        }), "script"
    }), pt.parseHTML = function (t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || nt;
        var n = xt.exec(t), s = !i && [];
        return n ? [e.createElement(n[1])] : (n = v([t], e, s), s && s.length && pt(s).remove(), pt.merge([], n.childNodes))
    };
    var ci = pt.fn.load;
    pt.fn.load = function (t, e, i) {
        if ("string" != typeof t && ci) return ci.apply(this, arguments);
        var n, s, o, r = this, a = t.indexOf(" ");
        return a > -1 && (n = pt.trim(t.slice(a, t.length)), t = t.slice(0, a)), pt.isFunction(e) ? (i = e, e = undefined) : e && "object" == typeof e && (s = "POST"), r.length > 0 && pt.ajax({
            url: t,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, r.html(n ? pt("<div>").append(pt.parseHTML(t)).find(n) : t)
        }).always(i && function (t, e) {
            r.each(function () {
                i.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        pt.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), pt.expr.filters.animated = function (t) {
        return pt.grep(pt.timers, function (e) {
            return t === e.elem
        }).length
    }, pt.offset = {
        setOffset: function (t, e, i) {
            var n, s, o, r, a, l, h, u = pt.css(t, "position"), c = pt(t), d = {};
            "static" === u && (t.style.position = "relative"), a = c.offset(), o = pt.css(t, "top"), l = pt.css(t, "left"), h = ("absolute" === u || "fixed" === u) && pt.inArray("auto", [o, l]) > -1, h ? (n = c.position(), r = n.top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), pt.isFunction(e) && (e = e.call(t, i, pt.extend({}, a))), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + s), "using" in e ? e.using.call(t, d) : c.css(d)
        }
    }, pt.fn.extend({
        offset: function (t) {
            if (arguments.length) return t === undefined ? this : this.each(function (e) {
                pt.offset.setOffset(this, t, e)
            });
            var e, i, n = {top: 0, left: 0}, s = this[0], o = s && s.ownerDocument;
            if (o) return e = o.documentElement, pt.contains(e, s) ? ("undefined" != typeof s.getBoundingClientRect && (n = s.getBoundingClientRect()), i = et(o), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n
        }, position: function () {
            if (this[0]) {
                var t, e, i = {top: 0, left: 0}, n = this[0];
                return "fixed" === pt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), pt.nodeName(t[0], "html") || (i = t.offset()), i.top += pt.css(t[0], "borderTopWidth", !0), i.left += pt.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - pt.css(n, "marginTop", !0),
                    left: e.left - i.left - pt.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && !pt.nodeName(t, "html") && "static" === pt.css(t, "position");) t = t.offsetParent;
                return t || de
            })
        }
    }), pt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var i = /Y/.test(e);
        pt.fn[t] = function (n) {
            return Wt(this, function (t, n, s) {
                var o = et(t);
                if (s === undefined) return o ? e in o ? o[e] : o.document.documentElement[n] : t[n];
                o ? o.scrollTo(i ? pt(o).scrollLeft() : s, i ? s : pt(o).scrollTop()) : t[n] = s
            }, t, n, arguments.length, null)
        }
    }), pt.each(["top", "left"], function (t, e) {
        pt.cssHooks[e] = N(ct.pixelPosition, function (t, i) {
            if (i) return i = fe(t, e), ue.test(i) ? pt(t).position()[e] + "px" : i
        })
    }), pt.each({Height: "height", Width: "width"}, function (t, e) {
        pt.each({padding: "inner" + t, content: e, "": "outer" + t}, function (i, n) {
            pt.fn[n] = function (n, s) {
                var o = arguments.length && (i || "boolean" != typeof n),
                    r = i || (!0 === n || !0 === s ? "margin" : "border");
                return Wt(this, function (e, i, n) {
                    var s;
                    return pt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : n === undefined ? pt.css(e, i, r) : pt.style(e, i, n, r)
                }, e, o ? n : undefined, o, null)
            }
        })
    }), pt.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        }, undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), pt.fn.size = function () {
        return this.length
    }, pt.fn.andSelf = pt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return pt
    });
    var di = t.jQuery, pi = t.$;
    return pt.noConflict = function (e) {
        return t.$ === pt && (t.$ = pi), e && t.jQuery === pt && (t.jQuery = di), pt
    }, e || (t.jQuery = t.$ = pt), pt
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    return t.ui = t.ui || {}, t.ui.version = "1.12.1"
}),/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
    }(function (t) {
        return t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
                return function (i) {
                    return !!t.data(i, e)
                }
            }) : function (e, i, n) {
                return !!t.data(e, n[3])
            }
        })
    }),/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
    }(function (t) {
        return t.fn.extend({
            disableSelection: function () {
                var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function () {
                    return this.on(t + ".ui-disableSelection", function (t) {
                        t.preventDefault()
                    })
                }
            }(), enableSelection: function () {
                return this.off(".ui-disableSelection")
            }
        })
    }),/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
    }(function (t) {
        function e(t) {
            for (var e = t.css("visibility"); "inherit" === e;) t = t.parent(), e = t.css("visibility");
            return "hidden" !== e
        }

        return t.ui.focusable = function (i, n) {
            var s, o, r, a, l, h = i.nodeName.toLowerCase();
            return "area" === h ? (s = i.parentNode, o = s.name, !(!i.href || !o || "map" !== s.nodeName.toLowerCase()) && (r = t("img[usemap='#" + o + "']"), r.length > 0 && r.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(h) ? (a = !i.disabled) && (l = t(i).closest("fieldset")[0]) && (a = !l.disabled) : a = "a" === h ? i.href || n : n, a && t(i).is(":visible") && e(t(i)))
        }, t.extend(t.expr[":"], {
            focusable: function (e) {
                return t.ui.focusable(e, null != t.attr(e, "tabindex"))
            }
        }), t.ui.focusable
    }), function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
}(function (t) {
    return t.fn.form = function () {
        return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
    }
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
}(function (t) {
    return t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
}),/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
    }(function (t) {
        return t.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
}(function (t) {
    return t.ui.escapeSelector = function () {
        var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function (e) {
            return e.replace(t, "\\$1")
        }
    }()
}),/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./version", "./escape-selector"], t) : t(jQuery)
    }(function (t) {
        return t.fn.labels = function () {
            var e, i, n, s, o;
            return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), n = this.attr("id"), n && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), this.pushStack(s))
        }
    }),/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
    }(function (t) {
        "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function (e, i) {
            function n(e, i, n, o) {
                return t.each(s, function () {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }

            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], o = i.toLowerCase(), r = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
            t.fn["inner" + i] = function (e) {
                return e === undefined ? r["inner" + i].call(this) : this.each(function () {
                    t(this).css(o, n(this, e) + "px")
                })
            }, t.fn["outer" + i] = function (e, s) {
                return "number" != typeof e ? r["outer" + i].call(this, e) : this.each(function () {
                    t(this).css(o, n(this, e, !0, s) + "px")
                })
            }
        }), t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        })
    }), function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
}(function (t) {
    return t.ui.plugin = {
        add: function (e, i, n) {
            var s, o = t.ui[e].prototype;
            for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
        }, call: function (t, e, i, n) {
            var s, o = t.plugins[e];
            if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (s = 0; s < o.length; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
        }
    }
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
}(function (t) {
    return t.ui.safeActiveElement = function (t) {
        var e;
        try {
            e = t.activeElement
        } catch (i) {
            e = t.body
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e
    }
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
}(function (t) {
    return t.ui.safeBlur = function (e) {
        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
    }
}),/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
    }(function (t) {
        return t.fn.scrollParent = function (e) {
            var i = this.css("position"), n = "absolute" === i, s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                o = this.parents().filter(function () {
                    var e = t(this);
                    return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
        }
    }),/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./version", "./focusable"], t) : t(jQuery)
    }(function (t) {
        return t.extend(t.expr[":"], {
            tabbable: function (e) {
                var i = t.attr(e, "tabindex"), n = null != i;
                return (!n || i >= 0) && t.ui.focusable(e, n)
            }
        })
    }),/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
    }(function (t) {
        return t.fn.extend({
            uniqueId: function () {
                var t = 0;
                return function () {
                    return this.each(function () {
                        this.id || (this.id = "ui-id-" + ++t)
                    })
                }
            }(), removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                })
            }
        })
    }),/*!
 * jQuery UI Effects 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
    }(function (t) {
        var e = "ui-effects-", i = "ui-effects-style", n = "ui-effects-animated", s = t;/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
        return t.effects = {effect: {}}, function (t, e) {
            function i(t, e, i) {
                var n = c[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
            }

            function n(e) {
                var i = h(), n = i._rgba = [];
                return e = e.toLowerCase(), f(l, function (t, s) {
                    var o, r = s.re.exec(e), a = r && s.parse(r), l = s.space || "rgba";
                    if (a) return o = i[l](a), i[u[l].cache] = o[u[l].cache], n = i._rgba = o._rgba, !1
                }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), i) : o[e]
            }

            function s(t, e, i) {
                return i = (i + 1) % 1, 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            var o,
                r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                a = /^([\-+])=\s*(\d+\.?\d*)/, l = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }], h = t.Color = function (e, i, n, s) {
                    return new t.Color.fn.parse(e, i, n, s)
                }, u = {
                    rgba: {
                        props: {
                            red: {idx: 0, type: "byte"},
                            green: {idx: 1, type: "byte"},
                            blue: {idx: 2, type: "byte"}
                        }
                    },
                    hsla: {
                        props: {
                            hue: {idx: 0, type: "degrees"},
                            saturation: {idx: 1, type: "percent"},
                            lightness: {idx: 2, type: "percent"}
                        }
                    }
                }, c = {byte: {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, d = h.support = {},
                p = t("<p>")[0], f = t.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function (t, e) {
                e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
            }), h.fn = t.extend(h.prototype, {
                parse: function (s, r, a, l) {
                    if (s === e) return this._rgba = [null, null, null, null], this;
                    (s.jquery || s.nodeType) && (s = t(s).css(r), r = e);
                    var c = this, d = t.type(s), p = this._rgba = [];
                    return r !== e && (s = [s, r, a, l], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (f(u.rgba.props, function (t, e) {
                        p[e.idx] = i(s[e.idx], e)
                    }), this) : "object" === d ? (s instanceof h ? f(u, function (t, e) {
                        s[e.cache] && (c[e.cache] = s[e.cache].slice())
                    }) : f(u, function (e, n) {
                        var o = n.cache;
                        f(n.props, function (t, e) {
                            if (!c[o] && n.to) {
                                if ("alpha" === t || null == s[t]) return;
                                c[o] = n.to(c._rgba)
                            }
                            c[o][e.idx] = i(s[t], e, !0)
                        }), c[o] && t.inArray(null, c[o].slice(0, 3)) < 0 && (c[o][3] = 1, n.from && (c._rgba = n.from(c[o])))
                    }), this) : void 0
                }, is: function (t) {
                    var e = h(t), i = !0, n = this;
                    return f(u, function (t, s) {
                        var o, r = e[s.cache];
                        return r && (o = n[s.cache] || s.to && s.to(n._rgba) || [], f(s.props, function (t, e) {
                            if (null != r[e.idx]) return i = r[e.idx] === o[e.idx]
                        })), i
                    }), i
                }, _space: function () {
                    var t = [], e = this;
                    return f(u, function (i, n) {
                        e[n.cache] && t.push(i)
                    }), t.pop()
                }, transition: function (t, e) {
                    var n = h(t), s = n._space(), o = u[s], r = 0 === this.alpha() ? h("transparent") : this,
                        a = r[o.cache] || o.to(r._rgba), l = a.slice();
                    return n = n[o.cache], f(o.props, function (t, s) {
                        var o = s.idx, r = a[o], h = n[o], u = c[s.type] || {};
                        null !== h && (null === r ? l[o] = h : (u.mod && (h - r > u.mod / 2 ? r += u.mod : r - h > u.mod / 2 && (r -= u.mod)), l[o] = i((h - r) * e + r, s)))
                    }), this[s](l)
                }, blend: function (e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(), n = i.pop(), s = h(e)._rgba;
                    return h(t.map(i, function (t, e) {
                        return (1 - n) * s[e] + n * t
                    }))
                }, toRgbaString: function () {
                    var e = "rgba(", i = t.map(this._rgba, function (t, e) {
                        return null == t ? e > 2 ? 1 : 0 : t
                    });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                }, toHslaString: function () {
                    var e = "hsla(", i = t.map(this.hsla(), function (t, e) {
                        return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
                    });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                }, toHexString: function (e) {
                    var i = this._rgba.slice(), n = i.pop();
                    return e && i.push(~~(255 * n)), "#" + t.map(i, function (t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                }, toString: function () {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), h.fn.parse.prototype = h.fn, u.hsla.to = function (t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, n = t[0] / 255, s = t[1] / 255, o = t[2] / 255, r = t[3], a = Math.max(n, s, o),
                    l = Math.min(n, s, o), h = a - l, u = a + l, c = .5 * u;
                return e = l === a ? 0 : n === a ? 60 * (s - o) / h + 360 : s === a ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : c <= .5 ? h / u : h / (2 - u), [Math.round(e) % 360, i, c, null == r ? 1 : r]
            }, u.hsla.from = function (t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360, i = t[1], n = t[2], o = t[3], r = n <= .5 ? n * (1 + i) : n + i - n * i,
                    a = 2 * n - r;
                return [Math.round(255 * s(a, r, e + 1 / 3)), Math.round(255 * s(a, r, e)), Math.round(255 * s(a, r, e - 1 / 3)), o]
            }, f(u, function (n, s) {
                var o = s.props, r = s.cache, l = s.to, u = s.from;
                h.fn[n] = function (n) {
                    if (l && !this[r] && (this[r] = l(this._rgba)), n === e) return this[r].slice();
                    var s, a = t.type(n), c = "array" === a || "object" === a ? n : arguments, d = this[r].slice();
                    return f(o, function (t, e) {
                        var n = c["object" === a ? t : e.idx];
                        null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                    }), u ? (s = h(u(d)), s[r] = d, s) : h(d)
                }, f(o, function (e, i) {
                    h.fn[e] || (h.fn[e] = function (s) {
                        var o, r = t.type(s), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n, h = this[l](),
                            u = h[i.idx];
                        return "undefined" === r ? u : ("function" === r && (s = s.call(this, u), r = t.type(s)), null == s && i.empty ? this : ("string" === r && (o = a.exec(s)) && (s = u + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)), h[i.idx] = s, this[l](h)))
                    })
                })
            }), h.hook = function (e) {
                var i = e.split(" ");
                f(i, function (e, i) {
                    t.cssHooks[i] = {
                        set: function (e, s) {
                            var o, r, a = "";
                            if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                if (s = h(o || s), !d.rgba && 1 !== s._rgba[3]) {
                                    for (r = "backgroundColor" === i ? e.parentNode : e; ("" === a || "transparent" === a) && r && r.style;) try {
                                        a = t.css(r, "backgroundColor"), r = r.parentNode
                                    } catch (t) {
                                    }
                                    s = s.blend(a && "transparent" !== a ? a : "_default")
                                }
                                s = s.toRgbaString()
                            }
                            try {
                                e.style[i] = s
                            } catch (t) {
                            }
                        }
                    }, t.fx.step[i] = function (e) {
                        e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }, h.hook(r), t.cssHooks.borderColor = {
                expand: function (t) {
                    var e = {};
                    return f(["Top", "Right", "Bottom", "Left"], function (i, n) {
                        e["border" + n + "Color"] = t
                    }), e
                }
            }, o = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(s), function () {
            function e(e) {
                var i, n,
                    s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    o = {};
                if (s && s.length && s[0] && s[s[0]]) for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]); else for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                return o
            }

            function i(e, i) {
                var n, s, r = {};
                for (n in i) s = i[n], e[n] !== s && (o[n] || !t.fx.step[n] && isNaN(parseFloat(s)) || (r[n] = s));
                return r
            }

            var n = ["add", "remove", "toggle"], o = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
                t.fx.step[i] = function (t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (s.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.effects.animateClass = function (s, o, r, a) {
                var l = t.speed(o, r, a);
                return this.queue(function () {
                    var o, r = t(this), a = r.attr("class") || "", h = l.children ? r.find("*").addBack() : r;
                    h = h.map(function () {
                        return {el: t(this), start: e(this)}
                    }), o = function () {
                        t.each(n, function (t, e) {
                            s[e] && r[e + "Class"](s[e])
                        })
                    }, o(), h = h.map(function () {
                        return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
                    }), r.attr("class", a), h = h.map(function () {
                        var e = this, i = t.Deferred(), n = t.extend({}, l, {
                            queue: !1, complete: function () {
                                i.resolve(e)
                            }
                        });
                        return this.el.animate(this.diff, n), i.promise()
                    }), t.when.apply(t, h.get()).done(function () {
                        o(), t.each(arguments, function () {
                            var e = this.el;
                            t.each(this.diff, function (t) {
                                e.css(t, "")
                            })
                        }), l.complete.call(r[0])
                    })
                })
            }, t.fn.extend({
                addClass: function (e) {
                    return function (i, n, s, o) {
                        return n ? t.effects.animateClass.call(this, {add: i}, n, s, o) : e.apply(this, arguments)
                    }
                }(t.fn.addClass), removeClass: function (e) {
                    return function (i, n, s, o) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: i}, n, s, o) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass), toggleClass: function (e) {
                    return function (i, n, s, o, r) {
                        return "boolean" == typeof n || n === undefined ? s ? t.effects.animateClass.call(this, n ? {add: i} : {remove: i}, s, o, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: i}, n, s, o)
                    }
                }(t.fn.toggleClass), switchClass: function (e, i, n, s, o) {
                    return t.effects.animateClass.call(this, {add: i, remove: e}, n, s, o)
                }
            })
        }(), function () {
            function s(e, i, n, s) {
                return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e
            }

            function o(e) {
                return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
            }

            function r(t, e) {
                var i = e.outerWidth(), n = e.outerHeight(),
                    s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                    o = s.exec(t) || ["", 0, i, n, 0];
                return {
                    top: parseFloat(o[1]) || 0,
                    right: "auto" === o[2] ? i : parseFloat(o[2]),
                    bottom: "auto" === o[3] ? n : parseFloat(o[3]),
                    left: parseFloat(o[4]) || 0
                }
            }

            t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) {
                return function (i) {
                    return !!t(i).data(n) || e(i)
                }
            }(t.expr.filters.animated)), !1 !== t.uiBackCompat && t.extend(t.effects, {
                save: function (t, i) {
                    for (var n = 0, s = i.length; n < s; n++) null !== i[n] && t.data(e + i[n], t[0].style[i[n]])
                }, restore: function (t, i) {
                    for (var n, s = 0, o = i.length; s < o; s++) null !== i[s] && (n = t.data(e + i[s]), t.css(i[s], n))
                }, setMode: function (t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                }, createWrapper: function (e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = {width: e.outerWidth(!0), height: e.outerHeight(!0), float: e.css("float")},
                        n = t("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }), s = {width: e.width(), height: e.height()}, o = document.activeElement;
                    try {
                        o.id
                    } catch (t) {
                        o = document.body
                    }
                    return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), n = e.parent(), "static" === e.css("position") ? (n.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function (t, n) {
                        i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(s), n.css(i).show()
                }, removeWrapper: function (e) {
                    var i = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
                }
            }), t.extend(t.effects, {
                version: "1.12.1", define: function (e, i, n) {
                    return n || (n = i, i = "effect"), t.effects.effect[e] = n, t.effects.effect[e].mode = i, n
                }, scaledDimensions: function (t, e, i) {
                    if (0 === e) return {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
                    var n = "horizontal" !== i ? (e || 100) / 100 : 1, s = "vertical" !== i ? (e || 100) / 100 : 1;
                    return {
                        height: t.height() * s,
                        width: t.width() * n,
                        outerHeight: t.outerHeight() * s,
                        outerWidth: t.outerWidth() * n
                    }
                }, clipToBox: function (t) {
                    return {
                        width: t.clip.right - t.clip.left,
                        height: t.clip.bottom - t.clip.top,
                        left: t.clip.left,
                        top: t.clip.top
                    }
                }, unshift: function (t, e, i) {
                    var n = t.queue();
                    e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue()
                }, saveStyle: function (t) {
                    t.data(i, t[0].style.cssText)
                }, restoreStyle: function (t) {
                    t[0].style.cssText = t.data(i) || "", t.removeData(i)
                }, mode: function (t, e) {
                    var i = t.is(":hidden");
                    return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
                }, getBaseline: function (t, e) {
                    var i, n;
                    switch (t[0]) {
                        case"top":
                            i = 0;
                            break;
                        case"middle":
                            i = .5;
                            break;
                        case"bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case"left":
                            n = 0;
                            break;
                        case"center":
                            n = .5;
                            break;
                        case"right":
                            n = 1;
                            break;
                        default:
                            n = t[1] / e.width
                    }
                    return {x: n, y: i}
                }, createPlaceholder: function (i) {
                    var n, s = i.css("position"), o = i.position();
                    return i.css({
                        marginTop: i.css("marginTop"),
                        marginBottom: i.css("marginBottom"),
                        marginLeft: i.css("marginLeft"),
                        marginRight: i.css("marginRight")
                    }).outerWidth(i.outerWidth()).outerHeight(i.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", n = t("<" + i[0].nodeName + ">").insertAfter(i).css({
                        display: /^(inline|ruby)/.test(i.css("display")) ? "inline-block" : "block",
                        visibility: "hidden",
                        marginTop: i.css("marginTop"),
                        marginBottom: i.css("marginBottom"),
                        marginLeft: i.css("marginLeft"),
                        marginRight: i.css("marginRight"),
                        float: i.css("float")
                    }).outerWidth(i.outerWidth()).outerHeight(i.outerHeight()).addClass("ui-effects-placeholder"), i.data(e + "placeholder", n)), i.css({
                        position: s,
                        left: o.left,
                        top: o.top
                    }), n
                }, removePlaceholder: function (t) {
                    var i = e + "placeholder", n = t.data(i);
                    n && (n.remove(), t.removeData(i))
                }, cleanUp: function (e) {
                    t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
                }, setTransition: function (e, i, n, s) {
                    return s = s || {}, t.each(i, function (t, i) {
                        var o = e.cssUnit(i);
                        o[0] > 0 && (s[i] = o[0] * n + o[1])
                    }), s
                }
            }), t.fn.extend({
                effect: function () {
                    function e(e) {
                        function s() {
                            l.removeData(n), t.effects.cleanUp(l), "hide" === i.mode && l.hide(), a()
                        }

                        function a() {
                            t.isFunction(h) && h.call(l[0]), t.isFunction(e) && e()
                        }

                        var l = t(this);
                        i.mode = c.shift(), !1 === t.uiBackCompat || r ? "none" === i.mode ? (l[u](), a()) : o.call(l[0], i, s) : (l.is(":hidden") ? "hide" === u : "show" === u) ? (l[u](), a()) : o.call(l[0], i, a)
                    }

                    var i = s.apply(this, arguments), o = t.effects.effect[i.effect], r = o.mode, a = i.queue,
                        l = a || "fx", h = i.complete, u = i.mode, c = [], d = function (e) {
                            var i = t(this), s = t.effects.mode(i, u) || r;
                            i.data(n, !0), c.push(s), r && ("show" === s || s === r && "hide" === s) && i.show(), r && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
                        };
                    return t.fx.off || !o ? u ? this[u](i.duration, h) : this.each(function () {
                        h && h.call(this)
                    }) : !1 === a ? this.each(d).each(e) : this.queue(l, d).queue(l, e)
                }, show: function (t) {
                    return function (e) {
                        if (o(e)) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "show", this.effect.call(this, i)
                    }
                }(t.fn.show), hide: function (t) {
                    return function (e) {
                        if (o(e)) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "hide", this.effect.call(this, i)
                    }
                }(t.fn.hide), toggle: function (t) {
                    return function (e) {
                        if (o(e) || "boolean" == typeof e) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "toggle", this.effect.call(this, i)
                    }
                }(t.fn.toggle), cssUnit: function (e) {
                    var i = this.css(e), n = [];
                    return t.each(["em", "px", "%", "pt"], function (t, e) {
                        i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                    }), n
                }, cssClip: function (t) {
                    return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : r(this.css("clip"), this)
                }, transfer: function (e, i) {
                    var n = t(this), s = t(e.to), o = "fixed" === s.css("position"), r = t("body"),
                        a = o ? r.scrollTop() : 0, l = o ? r.scrollLeft() : 0, h = s.offset(),
                        u = {top: h.top - a, left: h.left - l, height: s.innerHeight(), width: s.innerWidth()},
                        c = n.offset(),
                        d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                            top: c.top - a,
                            left: c.left - l,
                            height: n.innerHeight(),
                            width: n.innerWidth(),
                            position: o ? "fixed" : "absolute"
                        }).animate(u, e.duration, e.easing, function () {
                            d.remove(), t.isFunction(i) && i()
                        })
                }
            }), t.fx.step.clip = function (e) {
                e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = r(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                    top: e.pos * (e.end.top - e.start.top) + e.start.top,
                    right: e.pos * (e.end.right - e.start.right) + e.start.right,
                    bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                    left: e.pos * (e.end.left - e.start.left) + e.start.left
                })
            }
        }(), function () {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
                e[i] = function (e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                }, Circ: function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                }, Elastic: function (t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                }, Back: function (t) {
                    return t * t * (3 * t - 2)
                }, Bounce: function (t) {
                    for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;) ;
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function (e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function (t) {
                    return t < .5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            })
        }(), t.effects
    }),/*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./form", "./version"], t) : t(jQuery)
    }(function (t) {
        return t.ui.formResetMixin = {
            _formResetHandler: function () {
                var e = t(this);
                setTimeout(function () {
                    var i = e.data("ui-form-reset-instances");
                    t.each(i, function () {
                        this.refresh()
                    })
                })
            }, _bindFormResetHandler: function () {
                if (this.form = this.element.form(), this.form.length) {
                    var t = this.form.data("ui-form-reset-instances") || [];
                    t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
                }
            }, _unbindFormResetHandler: function () {
                if (this.form.length) {
                    var e = this.form.data("ui-form-reset-instances");
                    e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                }
            }
        }
    }),/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
    }(function (t) {
        return function () {
            function e(t, e, i) {
                return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)]
            }

            function i(e, i) {
                return parseInt(t.css(e, i), 10) || 0
            }

            function n(e) {
                var i = e[0];
                return 9 === i.nodeType ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {top: 0, left: 0}
                } : t.isWindow(i) ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {top: e.scrollTop(), left: e.scrollLeft()}
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {top: i.pageY, left: i.pageX}
                } : {width: e.outerWidth(), height: e.outerHeight(), offset: e.offset()}
            }

            var s, o = Math.max, r = Math.abs, a = /left|center|right/, l = /top|center|bottom/,
                h = /[\+\-]\d+(\.[\d]+)?%?/, u = /^\w+/, c = /%$/, d = t.fn.position;
            t.position = {
                scrollbarWidth: function () {
                    if (s !== undefined) return s;
                    var e, i,
                        n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = n.children()[0];
                    return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), s = e - i
                }, getScrollInfo: function (e) {
                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                        n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                        s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                    return {
                        width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                        height: s ? t.position.scrollbarWidth() : 0
                    }
                }, getWithinInfo: function (e) {
                    var i = t(e || window), n = t.isWindow(i[0]), s = !!i[0] && 9 === i[0].nodeType;
                    return {
                        element: i,
                        isWindow: n,
                        isDocument: s,
                        offset: n || s ? {left: 0, top: 0} : t(e).offset(),
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: i.outerWidth(),
                        height: i.outerHeight()
                    }
                }
            }, t.fn.position = function (s) {
                if (!s || !s.of) return d.apply(this, arguments);
                s = t.extend({}, s);
                var c, p, f, g, m, v, _ = t(s.of), b = t.position.getWithinInfo(s.within),
                    y = t.position.getScrollInfo(b), w = (s.collision || "flip").split(" "), x = {};
                return v = n(_), _[0].preventDefault && (s.at = "left top"), p = v.width, f = v.height, g = v.offset, m = t.extend({}, g), t.each(["my", "at"], function () {
                    var t, e, i = (s[this] || "").split(" ");
                    1 === i.length && (i = a.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = a.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), x[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [u.exec(i[0])[0], u.exec(i[1])[0]]
                }), 1 === w.length && (w[1] = w[0]), "right" === s.at[0] ? m.left += p : "center" === s.at[0] && (m.left += p / 2), "bottom" === s.at[1] ? m.top += f : "center" === s.at[1] && (m.top += f / 2), c = e(x.at, p, f), m.left += c[0], m.top += c[1], this.each(function () {
                    var n, a, l = t(this), h = l.outerWidth(), u = l.outerHeight(), d = i(this, "marginLeft"),
                        v = i(this, "marginTop"), k = h + d + i(this, "marginRight") + y.width,
                        C = u + v + i(this, "marginBottom") + y.height, D = t.extend({}, m),
                        T = e(x.my, l.outerWidth(), l.outerHeight());
                    "right" === s.my[0] ? D.left -= h : "center" === s.my[0] && (D.left -= h / 2), "bottom" === s.my[1] ? D.top -= u : "center" === s.my[1] && (D.top -= u / 2), D.left += T[0], D.top += T[1], n = {
                        marginLeft: d,
                        marginTop: v
                    }, t.each(["left", "top"], function (e, i) {
                        t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
                            targetWidth: p,
                            targetHeight: f,
                            elemWidth: h,
                            elemHeight: u,
                            collisionPosition: n,
                            collisionWidth: k,
                            collisionHeight: C,
                            offset: [c[0] + T[0], c[1] + T[1]],
                            my: s.my,
                            at: s.at,
                            within: b,
                            elem: l
                        })
                    }), s.using && (a = function (t) {
                        var e = g.left - D.left, i = e + p - h, n = g.top - D.top, a = n + f - u, c = {
                            target: {element: _, left: g.left, top: g.top, width: p, height: f},
                            element: {element: l, left: D.left, top: D.top, width: h, height: u},
                            horizontal: i < 0 ? "left" : e > 0 ? "right" : "center",
                            vertical: a < 0 ? "top" : n > 0 ? "bottom" : "middle"
                        };
                        p < h && r(e + i) < p && (c.horizontal = "center"), f < u && r(n + a) < f && (c.vertical = "middle"), o(r(e), r(i)) > o(r(n), r(a)) ? c.important = "horizontal" : c.important = "vertical", s.using.call(this, t, c)
                    }), l.offset(t.extend(D, {using: a}))
                })
            }, t.ui.position = {
                fit: {
                    left: function (t, e) {
                        var i, n = e.within, s = n.isWindow ? n.scrollLeft : n.offset.left, r = n.width,
                            a = t.left - e.collisionPosition.marginLeft, l = s - a, h = a + e.collisionWidth - r - s;
                        e.collisionWidth > r ? l > 0 && h <= 0 ? (i = t.left + l + e.collisionWidth - r - s, t.left += l - i) : t.left = h > 0 && l <= 0 ? s : l > h ? s + r - e.collisionWidth : s : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - a, t.left)
                    }, top: function (t, e) {
                        var i, n = e.within, s = n.isWindow ? n.scrollTop : n.offset.top, r = e.within.height,
                            a = t.top - e.collisionPosition.marginTop, l = s - a, h = a + e.collisionHeight - r - s;
                        e.collisionHeight > r ? l > 0 && h <= 0 ? (i = t.top + l + e.collisionHeight - r - s, t.top += l - i) : t.top = h > 0 && l <= 0 ? s : l > h ? s + r - e.collisionHeight : s : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - a, t.top)
                    }
                }, flip: {
                    left: function (t, e) {
                        var i, n, s = e.within, o = s.offset.left + s.scrollLeft, a = s.width,
                            l = s.isWindow ? s.scrollLeft : s.offset.left, h = t.left - e.collisionPosition.marginLeft,
                            u = h - l, c = h + e.collisionWidth - a - l,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            f = -2 * e.offset[0];
                        u < 0 ? ((i = t.left + d + p + f + e.collisionWidth - a - o) < 0 || i < r(u)) && (t.left += d + p + f) : c > 0 && ((n = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || r(n) < c) && (t.left += d + p + f)
                    }, top: function (t, e) {
                        var i, n, s = e.within, o = s.offset.top + s.scrollTop, a = s.height,
                            l = s.isWindow ? s.scrollTop : s.offset.top, h = t.top - e.collisionPosition.marginTop,
                            u = h - l, c = h + e.collisionHeight - a - l, d = "top" === e.my[1],
                            p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            g = -2 * e.offset[1];
                        u < 0 ? ((n = t.top + p + f + g + e.collisionHeight - a - o) < 0 || n < r(u)) && (t.top += p + f + g) : c > 0 && ((i = t.top - e.collisionPosition.marginTop + p + f + g - l) > 0 || r(i) < c) && (t.top += p + f + g)
                    }
                }, flipfit: {
                    left: function () {
                        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                    }, top: function () {
                        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }
        }(), t.ui.position
    }),/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], t) : t(jQuery)
    }(function (t) {
        var e = 0, i = Array.prototype.slice;
        return t.cleanData = function (e) {
            return function (i) {
                var n, s, o;
                for (o = 0; null != (s = i[o]); o++) try {
                    n = t._data(s, "events"), n && n.remove && t(s).triggerHandler("remove")
                } catch (t) {
                }
                e(i)
            }
        }(t.cleanData), t.widget = function (e, i, n) {
            var s, o, r, a = {}, l = e.split(".")[0];
            e = e.split(".")[1];
            var h = l + "-" + e;
            return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][h.toLowerCase()] = function (e) {
                return !!t.data(e, h)
            }, t[l] = t[l] || {}, s = t[l][e], o = t[l][e] = function (t, e) {
                if (!this._createWidget) return new o(t, e);
                arguments.length && this._createWidget(t, e)
            }, t.extend(o, s, {
                version: n.version,
                _proto: t.extend({}, n),
                _childConstructors: []
            }), r = new i, r.options = t.widget.extend({}, r.options), t.each(n, function (e, n) {
                if (!t.isFunction(n)) return void (a[e] = n);
                a[e] = function () {
                    function t() {
                        return i.prototype[e].apply(this, arguments)
                    }

                    function s(t) {
                        return i.prototype[e].apply(this, t)
                    }

                    return function () {
                        var e, i = this._super, o = this._superApply;
                        return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                    }
                }()
            }), o.prototype = t.widget.extend(r, {widgetEventPrefix: s ? r.widgetEventPrefix || e : e}, a, {
                constructor: o,
                namespace: l,
                widgetName: e,
                widgetFullName: h
            }), s ? (t.each(s._childConstructors, function (e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto)
            }), delete s._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
        }, t.widget.extend = function (e) {
            for (var n, s, o = i.call(arguments, 1), r = 0, a = o.length; r < a; r++) for (n in o[r]) s = o[r][n], o[r].hasOwnProperty(n) && s !== undefined && (t.isPlainObject(s) ? e[n] = t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], s) : t.widget.extend({}, s) : e[n] = s);
            return e
        }, t.widget.bridge = function (e, n) {
            var s = n.prototype.widgetFullName || e;
            t.fn[e] = function (o) {
                var r = "string" == typeof o, a = i.call(arguments, 1), l = this;
                return r ? this.length || "instance" !== o ? this.each(function () {
                    var i, n = t.data(this, s);
                    return "instance" === o ? (l = n, !1) : n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, a), i !== n && i !== undefined ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
                }) : l = undefined : (a.length && (o = t.widget.extend.apply(null, [o].concat(a))), this.each(function () {
                    var e = t.data(this, s);
                    e ? (e.option(o || {}), e._init && e._init()) : t.data(this, s, new n(o, this))
                })), l
            }
        }, t.Widget = function () {
        }, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {classes: {}, disabled: !1, create: null},
            _createWidget: function (i, n) {
                n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (t) {
                        t.target === n && this.destroy()
                    }
                }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function () {
                return {}
            },
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function () {
                var e = this;
                this._destroy(), t.each(this.classesElementLookup, function (t, i) {
                    e._removeClass(i, t)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: t.noop,
            widget: function () {
                return this.element
            },
            option: function (e, i) {
                var n, s, o, r = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e) if (r = {}, n = e.split("."), e = n.shift(), n.length) {
                    for (s = r[e] = t.widget.extend({}, this.options[e]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                    if (e = n.pop(), 1 === arguments.length) return s[e] === undefined ? null : s[e];
                    s[e] = i
                } else {
                    if (1 === arguments.length) return this.options[e] === undefined ? null : this.options[e];
                    r[e] = i
                }
                return this._setOptions(r), this
            },
            _setOptions: function (t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function (t, e) {
                return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
            },
            _setOptionClasses: function (e) {
                var i, n, s;
                for (i in e) s = this.classesElementLookup[i], e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()), this._removeClass(s, i), n.addClass(this._classes({
                    element: n,
                    keys: i,
                    classes: e,
                    add: !0
                })))
            },
            _setOptionDisabled: function (t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function () {
                return this._setOptions({disabled: !1})
            },
            disable: function () {
                return this._setOptions({disabled: !0})
            },
            _classes: function (e) {
                function i(i, o) {
                    var r, a;
                    for (a = 0; a < i.length; a++) r = s.classesElementLookup[i[a]] || t(), r = t(e.add ? t.unique(r.get().concat(e.element.get())) : r.not(e.element).get()), s.classesElementLookup[i[a]] = r, n.push(i[a]), o && e.classes[i[a]] && n.push(e.classes[i[a]])
                }

                var n = [], s = this;
                return e = t.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, e), this._on(e.element, {remove: "_untrackClassesElement"}), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), n.join(" ")
            },
            _untrackClassesElement: function (e) {
                var i = this;
                t.each(i.classesElementLookup, function (n, s) {
                    -1 !== t.inArray(e.target, s) && (i.classesElementLookup[n] = t(s.not(e.target).get()))
                })
            },
            _removeClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !1)
            },
            _addClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !0)
            },
            _toggleClass: function (t, e, i, n) {
                n = "boolean" == typeof n ? n : i;
                var s = "string" == typeof t || null === t,
                    o = {extra: s ? e : i, keys: s ? t : e, element: s ? this.element : t, add: n};
                return o.element.toggleClass(this._classes(o), n), this
            },
            _on: function (e, i, n) {
                var s, o = this;
                "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function (n, r) {
                    function a() {
                        if (e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof r ? o[r] : r).apply(o, arguments)
                    }

                    "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/), h = l[1] + o.eventNamespace, u = l[2];
                    u ? s.on(h, u, a) : i.on(h, a)
                })
            },
            _off: function (e, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function (t, e) {
                function i() {
                    return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                }

                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function (e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function (e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-hover")
                    }, mouseleave: function (e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function (e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function (e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-focus")
                    }, focusout: function (e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function (e, i, n) {
                var s, o, r = this.options[e];
                if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (s in o) s in i || (i[s] = o[s]);
                return this.element.trigger(i, n), !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
            }
        }, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, i) {
            t.Widget.prototype["_" + e] = function (n, s, o) {
                "string" == typeof s && (s = {effect: s});
                var r, a = s ? !0 === s || "number" == typeof s ? i : s.effect || i : e;
                s = s || {}, "number" == typeof s && (s = {duration: s}), r = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function (i) {
                    t(this)[e](), o && o.call(n[0]), i()
                })
            }
        }), t.widget
    }),/*!
 * jQuery UI Effects Blind 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect"], t) : t(jQuery)
    }(function (t) {
        return t.effects.define("blind", "hide", function (e, i) {
            var n = {
                    up: ["bottom", "top"],
                    vertical: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    horizontal: ["right", "left"],
                    right: ["left", "right"]
                }, s = t(this), o = e.direction || "up", r = s.cssClip(), a = {clip: t.extend({}, r)},
                l = t.effects.createPlaceholder(s);
            a.clip[n[o][0]] = a.clip[n[o][1]], "show" === e.mode && (s.cssClip(a.clip), l && l.css(t.effects.clipToBox(a)), a.clip = r), l && l.animate(t.effects.clipToBox(a), e.duration, e.easing), s.animate(a, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })
    }),/*!
 * jQuery UI Effects Bounce 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect"], t) : t(jQuery)
    }(function (t) {
        return t.effects.define("bounce", function (e, i) {
            var n, s, o, r = t(this), a = e.mode, l = "hide" === a, h = "show" === a, u = e.direction || "up",
                c = e.distance, d = e.times || 5, p = 2 * d + (h || l ? 1 : 0), f = e.duration / p, g = e.easing,
                m = "up" === u || "down" === u ? "top" : "left", v = "up" === u || "left" === u, _ = 0,
                b = r.queue().length;
            for (t.effects.createPlaceholder(r), o = r.css(m), c || (c = r["top" === m ? "outerHeight" : "outerWidth"]() / 3), h && (s = {opacity: 1}, s[m] = o, r.css("opacity", 0).css(m, v ? 2 * -c : 2 * c).animate(s, f, g)), l && (c /= Math.pow(2, d - 1)), s = {}, s[m] = o; _ < d; _++) n = {}, n[m] = (v ? "-=" : "+=") + c, r.animate(n, f, g).animate(s, f, g), c = l ? 2 * c : c / 2;
            l && (n = {opacity: 0}, n[m] = (v ? "-=" : "+=") + c, r.animate(n, f, g)), r.queue(i), t.effects.unshift(r, b, p + 1)
        })
    }),/*!
 * jQuery UI Effects Clip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect"], t) : t(jQuery)
    }(function (t) {
        return t.effects.define("clip", "hide", function (e, i) {
            var n, s = {}, o = t(this), r = e.direction || "vertical", a = "both" === r, l = a || "horizontal" === r,
                h = a || "vertical" === r;
            n = o.cssClip(), s.clip = {
                top: h ? (n.bottom - n.top) / 2 : n.top,
                right: l ? (n.right - n.left) / 2 : n.right,
                bottom: h ? (n.bottom - n.top) / 2 : n.bottom,
                left: l ? (n.right - n.left) / 2 : n.left
            }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(s.clip), s.clip = n), o.animate(s, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })
    }),/*!
 * jQuery UI Effects Drop 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect"], t) : t(jQuery)
    }(function (t) {
        return t.effects.define("drop", "hide", function (e, i) {
            var n, s = t(this), o = e.mode, r = "show" === o, a = e.direction || "left",
                l = "up" === a || "down" === a ? "top" : "left", h = "up" === a || "left" === a ? "-=" : "+=",
                u = "+=" === h ? "-=" : "+=", c = {opacity: 0};
            t.effects.createPlaceholder(s), n = e.distance || s["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, c[l] = h + n, r && (s.css(c), c[l] = u + n, c.opacity = 1), s.animate(c, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })
    }),/*!
 * jQuery UI Effects Explode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect"], t) : t(jQuery)
    }(function (t) {
        return t.effects.define("explode", "hide", function (e, i) {
            function n() {
                b.push(this), b.length === c * d && s()
            }

            function s() {
                p.css({visibility: "visible"}), t(b).remove(), i()
            }

            var o, r, a, l, h, u, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = c, p = t(this), f = e.mode,
                g = "show" === f, m = p.show().css("visibility", "hidden").offset(), v = Math.ceil(p.outerWidth() / d),
                _ = Math.ceil(p.outerHeight() / c), b = [];
            for (o = 0; o < c; o++) for (l = m.top + o * _, u = o - (c - 1) / 2, r = 0; r < d; r++) a = m.left + r * v, h = r - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -r * v,
                top: -o * _
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: v,
                height: _,
                left: a + (g ? h * v : 0),
                top: l + (g ? u * _ : 0),
                opacity: g ? 0 : 1
            }).animate({
                left: a + (g ? 0 : h * v),
                top: l + (g ? 0 : u * _),
                opacity: g ? 1 : 0
            }, e.duration || 500, e.easing, n)
        })
    }),/*!
 * jQuery UI Effects Fade 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect"], t) : t(jQuery)
    }(function (t) {
        return t.effects.define("fade", "toggle", function (e, i) {
            var n = "show" === e.mode;
            t(this).css("opacity", n ? 0 : 1).animate({opacity: n ? 1 : 0}, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })
    }),/*!
 * jQuery UI Effects Fold 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect"], t) : t(jQuery)
    }(function (t) {
        return t.effects.define("fold", "hide", function (e, i) {
            var n = t(this), s = e.mode, o = "show" === s, r = "hide" === s, a = e.size || 15, l = /([0-9]+)%/.exec(a),
                h = !!e.horizFirst, u = h ? ["right", "bottom"] : ["bottom", "right"], c = e.duration / 2,
                d = t.effects.createPlaceholder(n), p = n.cssClip(), f = {clip: t.extend({}, p)},
                g = {clip: t.extend({}, p)}, m = [p[u[0]], p[u[1]]], v = n.queue().length;
            l && (a = parseInt(l[1], 10) / 100 * m[r ? 0 : 1]), f.clip[u[0]] = a, g.clip[u[0]] = a, g.clip[u[1]] = 0, o && (n.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), n.queue(function (i) {
                d && d.animate(t.effects.clipToBox(f), c, e.easing).animate(t.effects.clipToBox(g), c, e.easing), i()
            }).animate(f, c, e.easing).animate(g, c, e.easing).queue(i), t.effects.unshift(n, v, 4)
        })
    }),/*!
 * jQuery UI Effects Highlight 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect"], t) : t(jQuery)
    }(function (t) {
        return t.effects.define("highlight", "show", function (e, i) {
            var n = t(this), s = {backgroundColor: n.css("backgroundColor")};
            "hide" === e.mode && (s.opacity = 0), t.effects.saveStyle(n), n.css({
                backgroundImage: "none",
                backgroundColor: e.color || "#ffff99"
            }).animate(s, {queue: !1, duration: e.duration, easing: e.easing, complete: i})
        })
    }),/*!
 * jQuery UI Effects Size 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect"], t) : t(jQuery)
    }(function (t) {
        return t.effects.define("size", function (e, i) {
            var n, s, o, r = t(this), a = ["fontSize"],
                l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], u = e.mode,
                c = "effect" !== u, d = e.scale || "both", p = e.origin || ["middle", "center"], f = r.css("position"),
                g = r.position(), m = t.effects.scaledDimensions(r), v = e.from || m,
                _ = e.to || t.effects.scaledDimensions(r, 0);
            t.effects.createPlaceholder(r), "show" === u && (o = v, v = _, _ = o), s = {
                from: {
                    y: v.height / m.height,
                    x: v.width / m.width
                }, to: {y: _.height / m.height, x: _.width / m.width}
            }, "box" !== d && "both" !== d || (s.from.y !== s.to.y && (v = t.effects.setTransition(r, l, s.from.y, v), _ = t.effects.setTransition(r, l, s.to.y, _)), s.from.x !== s.to.x && (v = t.effects.setTransition(r, h, s.from.x, v), _ = t.effects.setTransition(r, h, s.to.x, _))), "content" !== d && "both" !== d || s.from.y !== s.to.y && (v = t.effects.setTransition(r, a, s.from.y, v), _ = t.effects.setTransition(r, a, s.to.y, _)), p && (n = t.effects.getBaseline(p, m), v.top = (m.outerHeight - v.outerHeight) * n.y + g.top, v.left = (m.outerWidth - v.outerWidth) * n.x + g.left, _.top = (m.outerHeight - _.outerHeight) * n.y + g.top, _.left = (m.outerWidth - _.outerWidth) * n.x + g.left), r.css(v), "content" !== d && "both" !== d || (l = l.concat(["marginTop", "marginBottom"]).concat(a), h = h.concat(["marginLeft", "marginRight"]), r.find("*[width]").each(function () {
                var i = t(this), n = t.effects.scaledDimensions(i), o = {
                    height: n.height * s.from.y,
                    width: n.width * s.from.x,
                    outerHeight: n.outerHeight * s.from.y,
                    outerWidth: n.outerWidth * s.from.x
                }, r = {
                    height: n.height * s.to.y,
                    width: n.width * s.to.x,
                    outerHeight: n.height * s.to.y,
                    outerWidth: n.width * s.to.x
                };
                s.from.y !== s.to.y && (o = t.effects.setTransition(i, l, s.from.y, o), r = t.effects.setTransition(i, l, s.to.y, r)), s.from.x !== s.to.x && (o = t.effects.setTransition(i, h, s.from.x, o), r = t.effects.setTransition(i, h, s.to.x, r)), c && t.effects.saveStyle(i), i.css(o), i.animate(r, e.duration, e.easing, function () {
                    c && t.effects.restoreStyle(i)
                })
            })), r.animate(_, {
                queue: !1, duration: e.duration, easing: e.easing, complete: function () {
                    var e = r.offset();
                    0 === _.opacity && r.css("opacity", v.opacity), c || (r.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(r)), i()
                }
            })
        })
    }),/*!
 * jQuery UI Effects Scale 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect", "./effect-size"], t) : t(jQuery)
    }(function (t) {
        return t.effects.define("scale", function (e, i) {
            var n = t(this), s = e.mode,
                o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
                r = t.extend(!0, {
                    from: t.effects.scaledDimensions(n),
                    to: t.effects.scaledDimensions(n, o, e.direction || "both"),
                    origin: e.origin || ["middle", "center"]
                }, e);
            e.fade && (r.from.opacity = 1, r.to.opacity = 0), t.effects.effect.size.call(this, r, i)
        })
    }),/*!
 * jQuery UI Effects Puff 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect", "./effect-scale"], t) : t(jQuery)
    }(function (t) {
        return t.effects.define("puff", "hide", function (e, i) {
            var n = t.extend(!0, {}, e, {fade: !0, percent: parseInt(e.percent, 10) || 150});
            t.effects.effect.scale.call(this, n, i)
        })
    }),/*!
 * jQuery UI Effects Pulsate 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect"], t) : t(jQuery)
    }(function (t) {
        return t.effects.define("pulsate", "show", function (e, i) {
            var n = t(this), s = e.mode, o = "show" === s, r = "hide" === s, a = o || r,
                l = 2 * (e.times || 5) + (a ? 1 : 0), h = e.duration / l, u = 0, c = 1, d = n.queue().length;
            for (!o && n.is(":visible") || (n.css("opacity", 0).show(), u = 1); c < l; c++) n.animate({opacity: u}, h, e.easing), u = 1 - u;
            n.animate({opacity: u}, h, e.easing), n.queue(i), t.effects.unshift(n, d, l + 1)
        })
    }),/*!
 * jQuery UI Effects Shake 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect"], t) : t(jQuery)
    }(function (t) {
        return t.effects.define("shake", function (e, i) {
            var n = 1, s = t(this), o = e.direction || "left", r = e.distance || 20, a = e.times || 3, l = 2 * a + 1,
                h = Math.round(e.duration / l), u = "up" === o || "down" === o ? "top" : "left",
                c = "up" === o || "left" === o, d = {}, p = {}, f = {}, g = s.queue().length;
            for (t.effects.createPlaceholder(s), d[u] = (c ? "-=" : "+=") + r, p[u] = (c ? "+=" : "-=") + 2 * r, f[u] = (c ? "-=" : "+=") + 2 * r, s.animate(d, h, e.easing); n < a; n++) s.animate(p, h, e.easing).animate(f, h, e.easing);
            s.animate(p, h, e.easing).animate(d, h / 2, e.easing).queue(i), t.effects.unshift(s, g, l + 1)
        })
    }),/*!
 * jQuery UI Effects Slide 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect"], t) : t(jQuery)
    }(function (t) {
        return t.effects.define("slide", "show", function (e, i) {
            var n, s, o = t(this),
                r = {up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"]},
                a = e.mode, l = e.direction || "left", h = "up" === l || "down" === l ? "top" : "left",
                u = "up" === l || "left" === l, c = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
                d = {};
            t.effects.createPlaceholder(o), n = o.cssClip(), s = o.position()[h], d[h] = (u ? -1 : 1) * c + s, d.clip = o.cssClip(), d.clip[r[l][1]] = d.clip[r[l][0]], "show" === a && (o.cssClip(d.clip), o.css(h, d[h]), d.clip = n, d[h] = s), o.animate(d, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        })
    }),/*!
 * jQuery UI Effects Transfer 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../effect"], t) : t(jQuery)
    }(function (t) {
        var e;
        return !1 !== t.uiBackCompat && (e = t.effects.define("transfer", function (e, i) {
            t(this).transfer(e, i)
        })), e
    }),/*!
 * jQuery UI Accordion 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../keycode", "../unique-id", "../widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.accordion", {
            version: "1.12.1",
            options: {
                active: 0,
                animate: {},
                classes: {
                    "ui-accordion-header": "ui-corner-top",
                    "ui-accordion-header-collapsed": "ui-corner-all",
                    "ui-accordion-content": "ui-corner-bottom"
                },
                collapsible: !1,
                event: "click",
                header: "> li > :first-child, > :not(li):even",
                heightStyle: "auto",
                icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function () {
                var e = this.options;
                this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function () {
                return {header: this.active, panel: this.active.length ? this.active.next() : t()}
            },
            _createIcons: function () {
                var e, i, n = this.options.icons;
                n && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
            },
            _destroyIcons: function () {
                this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
            },
            _destroy: function () {
                var t;
                this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
            },
            _setOption: function (t, e) {
                if ("active" === t) return void this._activate(e);
                "event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons())
            },
            _setOptionDisabled: function (t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
            },
            _keydown: function (e) {
                if (!e.altKey && !e.ctrlKey) {
                    var i = t.ui.keyCode, n = this.headers.length, s = this.headers.index(e.target), o = !1;
                    switch (e.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            o = this.headers[(s + 1) % n];
                            break;
                        case i.LEFT:
                        case i.UP:
                            o = this.headers[(s - 1 + n) % n];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(e);
                            break;
                        case i.HOME:
                            o = this.headers[0];
                            break;
                        case i.END:
                            o = this.headers[n - 1]
                    }
                    o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
                }
            },
            _panelKeyDown: function (e) {
                e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
            },
            refresh: function () {
                var e = this.options;
                this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function () {
                var t = this.headers, e = this.panels;
                this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
            },
            _refresh: function () {
                var e, i = this.options, n = i.heightStyle, s = this.element.parent();
                this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
                    var e = t(this), i = e.uniqueId().attr("id"), n = e.next(), s = n.uniqueId().attr("id");
                    e.attr("aria-controls", s), n.attr("aria-labelledby", i)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({"aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function () {
                    var i = t(this), n = i.css("position");
                    "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
                }), this.headers.each(function () {
                    e -= t(this).outerHeight(!0)
                }), this.headers.next().each(function () {
                    t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function () {
                    var i = t(this).is(":visible");
                    i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
                }).height(e))
            },
            _activate: function (e) {
                var i = this._findActive(e)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function (e) {
                return "number" == typeof e ? this.headers.eq(e) : t()
            },
            _setupEvents: function (e) {
                var i = {keydown: "_keydown"};
                e && t.each(e.split(" "), function (t, e) {
                    i[e] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function (e) {
                var i, n, s = this.options, o = this.active, r = t(e.currentTarget), a = r[0] === o[0],
                    l = a && s.collapsible, h = l ? t() : r.next(), u = o.next(),
                    c = {oldHeader: o, oldPanel: u, newHeader: l ? t() : r, newPanel: h};
                e.preventDefault(), a && !s.collapsible || !1 === this._trigger("beforeActivate", e, c) || (s.active = !l && this.headers.index(r), this.active = a ? t() : r, this._toggle(c), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), a || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"), s.icons && (n = r.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), this._addClass(r.next(), "ui-accordion-content-active")))
            },
            _toggle: function (e) {
                var i = e.newPanel, n = this.prevShow.length ? this.prevShow : e.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({"aria-hidden": "true"}), n.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), i.length && n.length ? n.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : i.length && this.headers.filter(function () {
                    return 0 === parseInt(t(this).attr("tabIndex"), 10)
                }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _animate: function (t, e, i) {
                var n, s, o, r = this, a = 0, l = t.css("box-sizing"),
                    h = t.length && (!e.length || t.index() < e.index()), u = this.options.animate || {},
                    c = h && u.down || u, d = function () {
                        r._toggleComplete(i)
                    };
                return "number" == typeof c && (o = c), "string" == typeof c && (s = c), s = s || c.easing || u.easing, o = o || c.duration || u.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, {
                    duration: o,
                    easing: s,
                    step: function (t, e) {
                        e.now = Math.round(t)
                    }
                }), void t.hide().animate(this.showProps, {
                    duration: o, easing: s, complete: d, step: function (t, i) {
                        i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (a += i.now) : "content" !== r.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - a), a = 0)
                    }
                })) : e.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d)
            },
            _toggleComplete: function (t) {
                var e = t.oldPanel, i = e.prev();
                this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
            }
        })
    }),/*!
 * jQuery UI Menu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../keycode", "../position", "../safe-active-element", "../unique-id", "../version", "../widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.menu", {
            version: "1.12.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {submenu: "ui-icon-caret-1-e"},
                items: "> *",
                menus: "ul",
                position: {my: "left top", at: "right top"},
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function () {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                    "mousedown .ui-menu-item": function (t) {
                        t.preventDefault()
                    }, "click .ui-menu-item": function (e) {
                        var i = t(e.target), n = t(t.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    }, "mouseenter .ui-menu-item": function (e) {
                        if (!this.previousFilter) {
                            var i = t(e.target).closest(".ui-menu-item"), n = t(e.currentTarget);
                            i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n))
                        }
                    }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        e || this.focus(t, i)
                    }, blur: function (e) {
                        this._delay(function () {
                            !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e)
                        })
                    }, keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function (t) {
                        this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function () {
                var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                    i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function () {
                    var e = t(this);
                    e.data("ui-menu-submenu-caret") && e.remove()
                })
            },
            _keydown: function (e) {
                var i, n, s, o, r = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.PAGE_UP:
                        this.previousPage(e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        this.nextPage(e);
                        break;
                    case t.ui.keyCode.HOME:
                        this._move("first", "first", e);
                        break;
                    case t.ui.keyCode.END:
                        this._move("last", "last", e);
                        break;
                    case t.ui.keyCode.UP:
                        this.previous(e);
                        break;
                    case t.ui.keyCode.DOWN:
                        this.next(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this.collapse(e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                        break;
                    case t.ui.keyCode.ENTER:
                    case t.ui.keyCode.SPACE:
                        this._activate(e);
                        break;
                    case t.ui.keyCode.ESCAPE:
                        this.collapse(e);
                        break;
                    default:
                        r = !1, n = this.previousFilter || "", o = !1, s = e.keyCode >= 96 && e.keyCode <= 105 ? (e.keyCode - 96).toString() : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay(function () {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                r && e.preventDefault()
            },
            _activate: function (t) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
            },
            refresh: function () {
                var e, i, n, s, o, r = this, a = this.options.icons.submenu, l = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), n = l.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function () {
                    var e = t(this), i = e.prev(), n = t("<span>").data("ui-menu-submenu-caret", !0);
                    r._addClass(n, "ui-menu-icon", "ui-icon " + a), i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
                }), this._addClass(n, "ui-menu", "ui-widget ui-widget-content ui-front"), e = l.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function () {
                    var e = t(this);
                    r._isDivider(e) && r._addClass(e, "ui-menu-divider", "ui-widget-content")
                }), s = i.not(".ui-menu-item, .ui-menu-divider"), o = s.children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), this._addClass(s, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function () {
                return {menu: "menuitem", listbox: "option"}[this.options.role]
            },
            _setOption: function (t, e) {
                if ("icons" === t) {
                    var i = this.element.find(".ui-menu-icon");
                    this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
                }
                this._super(t, e)
            },
            _setOptionDisabled: function (t) {
                this._super(t), this.element.attr("aria-disabled", String(t)), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            focus: function (t, e) {
                var i, n, s;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                    this._close()
                }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
            },
            _scrollIntoView: function (e) {
                var i, n, s, o, r, a;
                this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.outerHeight(), s < 0 ? this.activeMenu.scrollTop(o + s) : s + a > r && this.activeMenu.scrollTop(o + s - r + a))
            },
            blur: function (t, e) {
                e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {item: this.active}), this.active = null)
            },
            _startOpening: function (t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                    this._close(), this._open(t)
                }, this.delay))
            },
            _open: function (e) {
                var i = t.extend({of: this.active}, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function (e, i) {
                clearTimeout(this.timer), this.timer = this._delay(function () {
                    var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                    n.length || (n = this.element), this._close(n), this.blur(e), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n
                }, this.delay)
            },
            _close: function (t) {
                t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
            },
            _closeOnDocumentClick: function (e) {
                return !t(e.target).closest(".ui-menu").length
            },
            _isDivider: function (t) {
                return !/[^\-\u2014\u2013\s]/.test(t.text())
            },
            collapse: function (t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function (t) {
                var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                e && e.length && (this._open(e.parent()), this._delay(function () {
                    this.focus(t, e)
                }))
            },
            next: function (t) {
                this._move("next", "first", t)
            },
            previous: function (t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function () {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function () {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function (t, e, i) {
                var n;
                this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
            },
            nextPage: function (e) {
                var i, n, s;
                if (!this.active) return void this.next(e);
                this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                    return i = t(this), i.offset().top - n - s < 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))
            },
            previousPage: function (e) {
                var i, n, s;
                if (!this.active) return void this.next(e);
                this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                    return i = t(this), i.offset().top - n + s > 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))
            },
            _hasScroll: function () {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function (e) {
                this.active = this.active || t(e.target).closest(".ui-menu-item");
                var i = {item: this.active};
                this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
            },
            _filterMenuItems: function (e) {
                var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), n = new RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                    return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
                })
            }
        })
    }),/*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./menu", "../keycode", "../position", "../safe-active-element", "../version", "../widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.autocomplete", {
            version: "1.12.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {my: "left top", at: "left bottom", collision: "none"},
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function () {
                var e, i, n, s = this.element[0].nodeName.toLowerCase(), o = "textarea" === s, r = "input" === s;
                this.isMultiLine = o || !r && this._isContentEditable(this.element), this.valueMethod = this.element[o || r ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function (s) {
                        if (this.element.prop("readOnly")) return e = !0, n = !0, void (i = !0);
                        e = !1, n = !1, i = !1;
                        var o = t.ui.keyCode;
                        switch (s.keyCode) {
                            case o.PAGE_UP:
                                e = !0, this._move("previousPage", s);
                                break;
                            case o.PAGE_DOWN:
                                e = !0, this._move("nextPage", s);
                                break;
                            case o.UP:
                                e = !0, this._keyEvent("previous", s);
                                break;
                            case o.DOWN:
                                e = !0, this._keyEvent("next", s);
                                break;
                            case o.ENTER:
                                this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                                break;
                            case o.TAB:
                                this.menu.active && this.menu.select(s);
                                break;
                            case o.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(s)
                        }
                    }, keypress: function (n) {
                        if (e) return e = !1, void (this.isMultiLine && !this.menu.element.is(":visible") || n.preventDefault());
                        if (!i) {
                            var s = t.ui.keyCode;
                            switch (n.keyCode) {
                                case s.PAGE_UP:
                                    this._move("previousPage", n);
                                    break;
                                case s.PAGE_DOWN:
                                    this._move("nextPage", n);
                                    break;
                                case s.UP:
                                    this._keyEvent("previous", n);
                                    break;
                                case s.DOWN:
                                    this._keyEvent("next", n)
                            }
                        }
                    }, input: function (t) {
                        if (n) return n = !1, void t.preventDefault();
                        this._searchTimeout(t)
                    }, focus: function () {
                        this.selectedItem = null, this.previous = this._value()
                    }, blur: function (t) {
                        if (this.cancelBlur) return void delete this.cancelBlur;
                        clearTimeout(this.searching), this.close(t), this._change(t)
                    }
                }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                    mousedown: function (e) {
                        e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                            delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                        })
                    }, menufocus: function (e, i) {
                        var n, s;
                        if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function () {
                            t(e.target).trigger(e.originalEvent)
                        });
                        s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {item: s}) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), (n = i.item.attr("aria-label") || s.value) && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))
                    }, menuselect: function (e, i) {
                        var n = i.item.data("ui-autocomplete-item"), s = this.previous;
                        this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function () {
                            this.previous = s, this.selectedItem = n
                        })), !1 !== this._trigger("select", e, {item: n}) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                    }
                }), this.liveRegion = t("<div>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function () {
                clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function (t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _isEventTargetInWidget: function (e) {
                var i = this.menu.element[0];
                return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
            },
            _closeOnClickOutside: function (t) {
                this._isEventTargetInWidget(t) || this.close()
            },
            _appendTo: function () {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
            },
            _initSource: function () {
                var e, i, n = this;
                t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, n) {
                    n(t.ui.autocomplete.filter(e, i.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, s) {
                    n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                        url: i, data: e, dataType: "json", success: function (t) {
                            s(t)
                        }, error: function () {
                            s([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function (t) {
                clearTimeout(this.searching), this.searching = this._delay(function () {
                    var e = this.term === this._value(), i = this.menu.element.is(":visible"),
                        n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                    e && (!e || i || n) || (this.selectedItem = null, this.search(null, t))
                }, this.options.delay)
            },
            search: function (t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
            },
            _search: function (t) {
                this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: t}, this._response())
            },
            _response: function () {
                var e = ++this.requestIndex;
                return t.proxy(function (t) {
                    e === this.requestIndex && this.__response(t), --this.pending || this._removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function (t) {
                t && (t = this._normalize(t)), this._trigger("response", null, {content: t}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
            },
            close: function (t) {
                this.cancelSearch = !0, this._close(t)
            },
            _close: function (t) {
                this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
            },
            _change: function (t) {
                this.previous !== this._value() && this._trigger("change", t, {item: this.selectedItem})
            },
            _normalize: function (e) {
                return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                    return "string" == typeof e ? {label: e, value: e} : t.extend({}, e, {
                        label: e.label || e.value,
                        value: e.value || e.label
                    })
                })
            },
            _suggest: function (e) {
                var i = this.menu.element.empty();
                this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {mousedown: "_closeOnClickOutside"})
            },
            _resizeMenu: function () {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function (e, i) {
                var n = this;
                t.each(i, function (t, i) {
                    n._renderItemData(e, i)
                })
            },
            _renderItemData: function (t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function (e, i) {
                return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
            },
            _move: function (t, e) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
            },
            widget: function () {
                return this.menu.element
            },
            _value: function () {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function (t, e) {
                this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault())
            },
            _isContentEditable: function (t) {
                if (!t.length) return !1;
                var e = t.prop("contentEditable");
                return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
            }
        }), t.extend(t.ui.autocomplete, {
            escapeRegex: function (t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }, filter: function (e, i) {
                var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                return t.grep(e, function (t) {
                    return n.test(t.label || t.value || t)
                })
            }
        }), t.widget("ui.autocomplete", t.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function (t) {
                        return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            }, __response: function (e) {
                var i;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
            }
        }), t.ui.autocomplete
    }),/*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../widget"], t) : t(jQuery)
    }(function (t) {
        var e = /ui-corner-([a-z]){2,6}/g;
        return t.widget("ui.controlgroup", {
            version: "1.12.1",
            defaultElement: "<div>",
            options: {
                direction: "horizontal",
                disabled: null,
                onlyVisible: !0,
                items: {
                    button: "input[type=button], input[type=submit], input[type=reset], button, a",
                    controlgroupLabel: ".ui-controlgroup-label",
                    checkboxradio: "input[type='checkbox'], input[type='radio']",
                    selectmenu: "select",
                    spinner: ".ui-spinner-input"
                }
            },
            _create: function () {
                this._enhance()
            },
            _enhance: function () {
                this.element.attr("role", "toolbar"), this.refresh()
            },
            _destroy: function () {
                this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
            },
            _initWidgets: function () {
                var e = this, i = [];
                t.each(this.options.items, function (n, s) {
                    var o, r = {};
                    if (s) return "controlgroupLabel" === n ? (o = e.element.find(s), o.each(function () {
                        var e = t(this);
                        e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                    }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void (i = i.concat(o.get()))) : void (t.fn[n] && (r = e["_" + n + "Options"] ? e["_" + n + "Options"]("middle") : {classes: {}}, e.element.find(s).each(function () {
                        var s = t(this), o = s[n]("instance"), a = t.widget.extend({}, r);
                        if ("button" !== n || !s.parent(".ui-spinner").length) {
                            o || (o = s[n]()[n]("instance")), o && (a.classes = e._resolveClassesValues(a.classes, o)), s[n](a);
                            var l = s[n]("widget");
                            t.data(l[0], "ui-controlgroup-data", o || s[n]("instance")), i.push(l[0])
                        }
                    })))
                }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
            },
            _callChildMethod: function (e) {
                this.childWidgets.each(function () {
                    var i = t(this), n = i.data("ui-controlgroup-data");
                    n && n[e] && n[e]()
                })
            },
            _updateCornerClass: function (t, e) {
                var i = this._buildSimpleOptions(e, "label").classes.label;
                this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
            },
            _buildSimpleOptions: function (t, e) {
                var i = "vertical" === this.options.direction, n = {classes: {}};
                return n.classes[e] = {
                    middle: "",
                    first: "ui-corner-" + (i ? "top" : "left"),
                    last: "ui-corner-" + (i ? "bottom" : "right"),
                    only: "ui-corner-all"
                }[t], n
            },
            _spinnerOptions: function (t) {
                var e = this._buildSimpleOptions(t, "ui-spinner");
                return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
            },
            _buttonOptions: function (t) {
                return this._buildSimpleOptions(t, "ui-button")
            },
            _checkboxradioOptions: function (t) {
                return this._buildSimpleOptions(t, "ui-checkboxradio-label")
            },
            _selectmenuOptions: function (t) {
                var e = "vertical" === this.options.direction;
                return {
                    width: !!e && "auto",
                    classes: {
                        middle: {"ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": ""},
                        first: {
                            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                        },
                        last: {
                            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                        },
                        only: {
                            "ui-selectmenu-button-open": "ui-corner-top",
                            "ui-selectmenu-button-closed": "ui-corner-all"
                        }
                    }[t]
                }
            },
            _resolveClassesValues: function (i, n) {
                var s = {};
                return t.each(i, function (o) {
                    var r = n.options.classes[o] || "";
                    r = t.trim(r.replace(e, "")), s[o] = (r + " " + i[o]).replace(/\s+/g, " ")
                }), s
            },
            _setOption: function (t, e) {
                if ("direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t) return void this._callChildMethod(e ? "disable" : "enable");
                this.refresh()
            },
            refresh: function () {
                var e, i = this;
                this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function (t, n) {
                    var s = e[n]().data("ui-controlgroup-data");
                    if (s && i["_" + s.widgetName + "Options"]) {
                        var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
                        o.classes = i._resolveClassesValues(o.classes, s), s.element[s.widgetName](o)
                    } else i._updateCornerClass(e[n](), n)
                }), this._callChildMethod("refresh"))
            }
        })
    }),/*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../escape-selector", "../form-reset-mixin", "../labels", "../widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
            version: "1.12.1",
            options: {
                disabled: null,
                label: null,
                icon: !0,
                classes: {"ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all"}
            },
            _getCreateOptions: function () {
                var e, i, n = this, s = this._super() || {};
                return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
                    n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
                }), this.originalLabel && (s.label = this.originalLabel), e = this.element[0].disabled, null != e && (s.disabled = e), s
            },
            _create: function () {
                var t = this.element[0].checked;
                this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                    change: "_toggleClasses",
                    focus: function () {
                        this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                    },
                    blur: function () {
                        this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                    }
                })
            },
            _readType: function () {
                var e = this.element[0].nodeName.toLowerCase();
                this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
            },
            _enhance: function () {
                this._updateIcon(this.element[0].checked)
            },
            widget: function () {
                return this.label
            },
            _getRadioGroup: function () {
                var e, i = this.element[0].name, n = "input[name='" + t.ui.escapeSelector(i) + "']";
                return i ? (e = this.form.length ? t(this.form[0].elements).filter(n) : t(n).filter(function () {
                    return 0 === t(this).form().length
                }), e.not(this.element)) : t([])
            },
            _toggleClasses: function () {
                var e = this.element[0].checked;
                this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function () {
                    var e = t(this).checkboxradio("instance");
                    e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
                })
            },
            _destroy: function () {
                this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
            },
            _setOption: function (t, e) {
                if ("label" !== t || e) {
                    if (this._super(t, e), "disabled" === t) return this._toggleClass(this.label, null, "ui-state-disabled", e), void (this.element[0].disabled = e);
                    this.refresh()
                }
            },
            _updateIcon: function (e) {
                var i = "ui-icon ui-icon-background ";
                this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : this.icon !== undefined && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
            },
            _updateLabel: function () {
                var t = this.label.contents().not(this.element[0]);
                this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
            },
            refresh: function () {
                var t = this.element[0].checked, e = this.element[0].disabled;
                this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({disabled: e})
            }
        }]), t.ui.checkboxradio
    }),/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./controlgroup", "./checkboxradio", "../keycode", "../widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.button", {
            version: "1.12.1",
            defaultElement: "<button>",
            options: {
                classes: {"ui-button": "ui-corner-all"},
                disabled: null,
                icon: null,
                iconPosition: "beginning",
                label: null,
                showLabel: !0
            },
            _getCreateOptions: function () {
                var t, e = this._super() || {};
                return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
            },
            _create: function () {
                !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                    keyup: function (e) {
                        e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                    }
                })
            },
            _enhance: function () {
                this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
            },
            _updateTooltip: function () {
                this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
            },
            _updateIcon: function (e, i) {
                var n = "iconPosition" !== e, s = n ? this.options.iconPosition : i, o = "top" === s || "bottom" === s;
                this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
            },
            _destroy: function () {
                this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
            },
            _attachIconSpace: function (t) {
                this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
            },
            _attachIcon: function (t) {
                this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
            },
            _setOptions: function (t) {
                var e = t.showLabel === undefined ? this.options.showLabel : t.showLabel,
                    i = t.icon === undefined ? this.options.icon : t.icon;
                e || i || (t.showLabel = !0), this._super(t)
            },
            _setOption: function (t, e) {
                "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
            },
            refresh: function () {
                var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOptions({disabled: t}), this._updateTooltip()
            }
        }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
            options: {
                text: !0,
                icons: {primary: null, secondary: null}
            }, _create: function () {
                this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
            }, _setOption: function (t, e) {
                if ("text" === t) return void this._super("showLabel", e);
                "showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments)
            }
        }), t.fn.button = function (e) {
            return function () {
                return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({icon: !1}) : this.checkboxradio.apply(this, arguments))
            }
        }(t.fn.button), t.fn.buttonset = function () {
            return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {button: arguments[0].items}), this.controlgroup.apply(this, arguments))
        }), t.ui.button
    }),/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../keycode"], t) : t(jQuery)
    }(function (t) {
        function e(t) {
            for (var e, i; t.length && t[0] !== document;) {
                if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                t = t.parent()
            }
            return 0
        }

        function i() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function n(e) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return e.on("mouseout", i, function () {
                t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
            }).on("mouseover", i, s)
        }

        function s() {
            t.datepicker._isDisabledDatepicker(r.inline ? r.dpDiv.parent()[0] : r.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        }

        function o(e, i) {
            t.extend(e, i);
            for (var n in i) null == i[n] && (e[n] = i[n]);
            return e
        }

        t.extend(t.ui, {datepicker: {version: "1.12.1"}});
        var r;
        return t.extend(i.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function () {
                return this.dpDiv
            },
            setDefaults: function (t) {
                return o(this._defaults, t || {}), this
            },
            _attachDatepicker: function (e, i) {
                var n, s, o;
                n = e.nodeName.toLowerCase(), s = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), s), o.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
            },
            _newInst: function (e, i) {
                return {
                    id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                    input: e,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function (e, i) {
                var n = t(e);
                i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
            },
            _attachments: function (e, i) {
                var n, s, o, r = this._get(i, "appendText"), a = this._get(i, "isRTL");
                i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[a ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), "focus" !== n && "both" !== n || e.on("focus", this._showDatepicker), "button" !== n && "both" !== n || (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                    src: o,
                    alt: s,
                    title: s
                }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                    src: o,
                    alt: s,
                    title: s
                }) : s)), e[a ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
                    return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
                }))
            },
            _autoSize: function (t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e, i, n, s, o = new Date(2009, 11, 20), r = this._get(t, "dateFormat");
                    r.match(/[DM]/) && (e = function (t) {
                        for (i = 0, n = 0, s = 0; s < t.length; s++) t[s].length > i && (i = t[s].length, n = s);
                        return n
                    }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
                }
            },
            _inlineDatepicker: function (e, i) {
                var n = t(e);
                n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function (e, i, n, s, r) {
                var a, l, h, u, c, d = this._dialogInst;
                return d || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), o(d.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, h / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
            },
            _destroyDatepicker: function (e) {
                var i, n = t(e), s = t.data(e, "datepicker");
                n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || n.removeClass(this.markerClassName).empty(), r === s && (r = null))
            },
            _enableDatepicker: function (e) {
                var i, n, s = t(e), o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : "div" !== i && "span" !== i || (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                    return t === e ? null : t
                }))
            },
            _disableDatepicker: function (e) {
                var i, n, s = t(e), o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : "div" !== i && "span" !== i || (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                    return t === e ? null : t
                }), this._disabledInputs[this._disabledInputs.length] = e)
            },
            _isDisabledDatepicker: function (t) {
                if (!t) return !1;
                for (var e = 0; e < this._disabledInputs.length; e++) if (this._disabledInputs[e] === t) return !0;
                return !1
            },
            _getInst: function (e) {
                try {
                    return t.data(e, "datepicker")
                } catch (t) {
                    throw"Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function (e, i, n) {
                var s, r, a, l, h = this._getInst(e);
                if (2 === arguments.length && "string" == typeof i) return "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null;
                s = i || {}, "string" == typeof i && (s = {}, s[i] = n), h && (this._curInst === h && this._hideDatepicker(), r = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), o(h.settings, s), null !== a && s.dateFormat !== undefined && s.minDate === undefined && (h.settings.minDate = this._formatDate(h, a)), null !== l && s.dateFormat !== undefined && s.maxDate === undefined && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, r), this._updateAlternate(h), this._updateDatepicker(h))
            },
            _changeDatepicker: function (t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function (t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function (t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function (t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
            },
            _doKeyDown: function (e) {
                var i, n, s, o = t.datepicker._getInst(e.target), r = !0, a = o.dpDiv.is(".ui-datepicker-rtl");
                if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                    case 9:
                        t.datepicker._hideDatepicker(), r = !1;
                        break;
                    case 13:
                        return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), s[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), i = t.datepicker._get(o, "onSelect"), i ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
                    case 27:
                        t.datepicker._hideDatepicker();
                        break;
                    case 33:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 34:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
                        break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
                        break;
                    case 37:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 38:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
                        break;
                    case 39:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 40:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
                        break;
                    default:
                        r = !1
                } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
                r && (e.preventDefault(), e.stopPropagation())
            },
            _doKeyPress: function (e) {
                var i, n, s = t.datepicker._getInst(e.target);
                if (t.datepicker._get(s, "constrainInput")) return i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || n < " " || !i || i.indexOf(n) > -1
            },
            _doKeyUp: function (e) {
                var i, n = t.datepicker._getInst(e.target);
                if (n.input.val() !== n.lastVal) try {
                    i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)), i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n))
                } catch (t) {
                }
                return !0
            },
            _showDatepicker: function (i) {
                if (i = i.target || i, "input" !== i.nodeName.toLowerCase() && (i = t("input", i.parentNode)[0]), !t.datepicker._isDisabledDatepicker(i) && t.datepicker._lastInput !== i) {
                    var n, s, r, a, l, h, u;
                    n = t.datepicker._getInst(i), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(n, "beforeShow"), r = s ? s.apply(i, [i, n]) : {}, !1 !== r && (o(n.settings, r), n.lastVal = null, t.datepicker._lastInput = i, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (i.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(i), t.datepicker._pos[1] += i.offsetHeight), a = !1, t(i).parents().each(function () {
                        return !(a |= "fixed" === t(this).css("position"))
                    }), l = {
                        left: t.datepicker._pos[0],
                        top: t.datepicker._pos[1]
                    }, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, a), n.dpDiv.css({
                        position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute",
                        display: "none",
                        left: l.left + "px",
                        top: l.top + "px"
                    }), n.inline || (h = t.datepicker._get(n, "showAnim"), u = t.datepicker._get(n, "duration"), n.dpDiv.css("z-index", e(t(i)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? n.dpDiv.show(h, t.datepicker._get(n, "showOptions"), u) : n.dpDiv[h || "show"](h ? u : null), t.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), t.datepicker._curInst = n))
                }
            },
            _updateDatepicker: function (e) {
                this.maxRows = 4, r = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                var i, n = this._getNumberOfMonths(e), o = n[1], a = e.dpDiv.find("." + this._dayOverClass + " a");
                a.length > 0 && s.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", 17 * o + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
                    i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function (t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
            },
            _checkOffset: function (e, i, n) {
                var s = e.dpDiv.outerWidth(), o = e.dpDiv.outerHeight(), r = e.input ? e.input.outerWidth() : 0,
                    a = e.input ? e.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                    h = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
                return i.left -= this._get(e, "isRTL") ? s - r : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + a) : 0), i
            },
            _findPos: function (e) {
                for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"];
                return i = t(e).offset(), [i.left, i.top]
            },
            _hideDatepicker: function (e) {
                var i, n, s, o, r = this._curInst;
                !r || e && r !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), n = this._get(r, "duration"), s = function () {
                    t.datepicker._tidyDialog(r)
                }, t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), n, s) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, o = this._get(r, "onClose"), o && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function (t) {
                t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
            },
            _checkExternalClick: function (e) {
                if (t.datepicker._curInst) {
                    var i = t(e.target), n = t.datepicker._getInst(i[0]);
                    (i[0].id === t.datepicker._mainDivId || 0 !== i.parents("#" + t.datepicker._mainDivId).length || i.hasClass(t.datepicker.markerClassName) || i.closest("." + t.datepicker._triggerClass).length || !t.datepicker._datepickerShowing || t.datepicker._inDialog && t.blockUI) && (!i.hasClass(t.datepicker.markerClassName) || t.datepicker._curInst === n) || t.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function (e, i, n) {
                var s = t(e), o = this._getInst(s[0]);
                this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
            },
            _gotoToday: function (e) {
                var i, n = t(e), s = this._getInst(n[0]);
                this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
            },
            _selectMonthYear: function (e, i, n) {
                var s = t(e), o = this._getInst(s[0]);
                o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
            },
            _selectDay: function (e, i, n, s) {
                var o, r = t(e);
                t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (o = this._getInst(r[0]), o.selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
            },
            _clearDate: function (e) {
                var i = t(e);
                this._selectDate(i, "")
            },
            _selectDate: function (e, i) {
                var n, s = t(e), o = this._getInst(s[0]);
                i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), n = this._get(o, "onSelect"), n ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
            },
            _updateAlternate: function (e) {
                var i, n, s, o = this._get(e, "altField");
                o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).val(s))
            },
            noWeekends: function (t) {
                var e = t.getDay();
                return [e > 0 && e < 6, ""]
            },
            iso8601Week: function (t) {
                var e, i = new Date(t.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
            },
            parseDate: function (e, i, n) {
                if (null == e || null == i) throw"Invalid arguments";
                if ("" === (i = "object" == typeof i ? i.toString() : i + "")) return null;
                var s, o, r, a, l = 0, h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    u = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                    c = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    d = (n ? n.dayNames : null) || this._defaults.dayNames,
                    p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    f = (n ? n.monthNames : null) || this._defaults.monthNames, g = -1, m = -1, v = -1, _ = -1, b = !1,
                    y = function (t) {
                        var i = s + 1 < e.length && e.charAt(s + 1) === t;
                        return i && s++, i
                    }, w = function (t) {
                        var e = y(t), n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                            s = "y" === t ? n : 1, o = new RegExp("^\\d{" + s + "," + n + "}"), r = i.substring(l).match(o);
                        if (!r) throw"Missing number at position " + l;
                        return l += r[0].length, parseInt(r[0], 10)
                    }, x = function (e, n, s) {
                        var o = -1, r = t.map(y(e) ? s : n, function (t, e) {
                            return [[e, t]]
                        }).sort(function (t, e) {
                            return -(t[1].length - e[1].length)
                        });
                        if (t.each(r, function (t, e) {
                            var n = e[1];
                            if (i.substr(l, n.length).toLowerCase() === n.toLowerCase()) return o = e[0], l += n.length, !1
                        }), -1 !== o) return o + 1;
                        throw"Unknown name at position " + l
                    }, k = function () {
                        if (i.charAt(l) !== e.charAt(s)) throw"Unexpected literal at position " + l;
                        l++
                    };
                for (s = 0; s < e.length; s++) if (b) "'" !== e.charAt(s) || y("'") ? k() : b = !1; else switch (e.charAt(s)) {
                    case"d":
                        v = w("d");
                        break;
                    case"D":
                        x("D", c, d);
                        break;
                    case"o":
                        _ = w("o");
                        break;
                    case"m":
                        m = w("m");
                        break;
                    case"M":
                        m = x("M", p, f);
                        break;
                    case"y":
                        g = w("y");
                        break;
                    case"@":
                        a = new Date(w("@")), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                        break;
                    case"!":
                        a = new Date((w("!") - this._ticksTo1970) / 1e4), g = a.getFullYear(), m = a.getMonth() + 1, v = a.getDate();
                        break;
                    case"'":
                        y("'") ? k() : b = !0;
                        break;
                    default:
                        k()
                }
                if (l < i.length && (r = i.substr(l), !/^\s+/.test(r))) throw"Extra/unparsed characters found in date: " + r;
                if (-1 === g ? g = (new Date).getFullYear() : g < 100 && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (g <= u ? 0 : -100)), _ > -1) for (m = 1, v = _; ;) {
                    if (o = this._getDaysInMonth(g, m - 1), v <= o) break;
                    m++, v -= o
                }
                if (a = this._daylightSavingAdjust(new Date(g, m - 1, v)), a.getFullYear() !== g || a.getMonth() + 1 !== m || a.getDate() !== v) throw"Invalid date";
                return a
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function (t, e, i) {
                if (!e) return "";
                var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    o = (i ? i.dayNames : null) || this._defaults.dayNames,
                    r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    a = (i ? i.monthNames : null) || this._defaults.monthNames, l = function (e) {
                        var i = n + 1 < t.length && t.charAt(n + 1) === e;
                        return i && n++, i
                    }, h = function (t, e, i) {
                        var n = "" + e;
                        if (l(t)) for (; n.length < i;) n = "0" + n;
                        return n
                    }, u = function (t, e, i, n) {
                        return l(t) ? n[e] : i[e]
                    }, c = "", d = !1;
                if (e) for (n = 0; n < t.length; n++) if (d) "'" !== t.charAt(n) || l("'") ? c += t.charAt(n) : d = !1; else switch (t.charAt(n)) {
                    case"d":
                        c += h("d", e.getDate(), 2);
                        break;
                    case"D":
                        c += u("D", e.getDay(), s, o);
                        break;
                    case"o":
                        c += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                        break;
                    case"m":
                        c += h("m", e.getMonth() + 1, 2);
                        break;
                    case"M":
                        c += u("M", e.getMonth(), r, a);
                        break;
                    case"y":
                        c += l("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100;
                        break;
                    case"@":
                        c += e.getTime();
                        break;
                    case"!":
                        c += 1e4 * e.getTime() + this._ticksTo1970;
                        break;
                    case"'":
                        l("'") ? c += "'" : d = !0;
                        break;
                    default:
                        c += t.charAt(n)
                }
                return c
            },
            _possibleChars: function (t) {
                var e, i = "", n = !1, s = function (i) {
                    var n = e + 1 < t.length && t.charAt(e + 1) === i;
                    return n && e++, n
                };
                for (e = 0; e < t.length; e++) if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1; else switch (t.charAt(e)) {
                    case"d":
                    case"m":
                    case"y":
                    case"@":
                        i += "0123456789";
                        break;
                    case"D":
                    case"M":
                        return null;
                    case"'":
                        s("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
                return i
            },
            _get: function (t, e) {
                return t.settings[e] !== undefined ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function (t, e) {
                if (t.input.val() !== t.lastVal) {
                    var i = this._get(t, "dateFormat"), n = t.lastVal = t.input ? t.input.val() : null,
                        s = this._getDefaultDate(t), o = s, r = this._getFormatConfig(t);
                    try {
                        o = this.parseDate(i, n, r) || s
                    } catch (t) {
                        n = e ? "" : n
                    }
                    t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function (t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function (e, i, n) {
                var s = function (t) {
                        var e = new Date;
                        return e.setDate(e.getDate() + t), e
                    }, o = function (i) {
                        try {
                            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                        } catch (t) {
                        }
                        for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), r = n.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(i); l;) {
                            switch (l[2] || "d") {
                                case"d":
                                case"D":
                                    r += parseInt(l[1], 10);
                                    break;
                                case"w":
                                case"W":
                                    r += 7 * parseInt(l[1], 10);
                                    break;
                                case"m":
                                case"M":
                                    o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(s, o));
                                    break;
                                case"y":
                                case"Y":
                                    s += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(s, o))
                            }
                            l = a.exec(i)
                        }
                        return new Date(s, o, r)
                    },
                    r = null == i || "" === i ? n : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? n : s(i) : new Date(i.getTime());
                return r = r && "Invalid Date" === r.toString() ? n : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
            },
            _daylightSavingAdjust: function (t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function (t, e, i) {
                var n = !e, s = t.selectedMonth, o = t.selectedYear,
                    r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
            },
            _getDate: function (t) {
                return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
            },
            _attachHandlers: function (e) {
                var i = this._get(e, "stepMonths"), n = "#" + e.id.replace(/\\\\/g, "\\");
                e.dpDiv.find("[data-handler]").map(function () {
                    var e = {
                        prev: function () {
                            t.datepicker._adjustDate(n, -i, "M")
                        }, next: function () {
                            t.datepicker._adjustDate(n, +i, "M")
                        }, hide: function () {
                            t.datepicker._hideDatepicker()
                        }, today: function () {
                            t.datepicker._gotoToday(n)
                        }, selectDay: function () {
                            return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        }, selectMonth: function () {
                            return t.datepicker._selectMonthYear(n, this, "M"), !1
                        }, selectYear: function () {
                            return t.datepicker._selectMonthYear(n, this, "Y"), !1
                        }
                    };
                    t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function (t) {
                var e, i, n, s, o, r, a, l, h, u, c, d, p, f, g, m, v, _, b, y, w, x, k, C, D, T, S, I, P, M, N, E, A,
                    H, O, z, j, W, L, F = new Date,
                    q = this._daylightSavingAdjust(new Date(F.getFullYear(), F.getMonth(), F.getDate())),
                    R = this._get(t, "isRTL"), B = this._get(t, "showButtonPanel"),
                    Y = this._get(t, "hideIfNoPrevNext"), $ = this._get(t, "navigationAsDateFormat"),
                    U = this._getNumberOfMonths(t), K = this._get(t, "showCurrentAtPos"),
                    V = this._get(t, "stepMonths"), X = 1 !== U[0] || 1 !== U[1],
                    Q = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    G = this._getMinMaxDate(t, "min"), J = this._getMinMaxDate(t, "max"), Z = t.drawMonth - K,
                    tt = t.drawYear;
                if (Z < 0 && (Z += 12, tt--), J) for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = G && e < G ? G : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) --Z < 0 && (Z = 11, tt--);
                for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = $ ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - V, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = $ ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, Z + V, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + s + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (R ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? Q : q, r = $ ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (R ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (R ? "" : l) + "</div>" : "", u = parseInt(this._get(t, "firstDay"), 10), u = isNaN(u) ? 0 : u, c = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", x = 0; x < U[0]; x++) {
                    for (k = "", this.maxRows = 4, C = 0; C < U[1]; C++) {
                        if (D = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), T = " ui-corner-all", S = "", X) {
                            if (S += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                                case 0:
                                    S += " ui-datepicker-group-first", T = " ui-corner-" + (R ? "right" : "left");
                                    break;
                                case U[1] - 1:
                                    S += " ui-datepicker-group-last", T = " ui-corner-" + (R ? "left" : "right");
                                    break;
                                default:
                                    S += " ui-datepicker-group-middle", T = ""
                            }
                            S += "'>"
                        }
                        for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === x ? R ? o : n : "") + (/all|right/.test(T) && 0 === x ? R ? n : o : "") + this._generateMonthYearHeader(t, Z, tt, G, J, x > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", I = c ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) P = (w + u) % 7, I += "<th scope='col'" + ((w + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[P] + "'>" + p[P] + "</span></th>";
                        for (S += I + "</tr></thead><tbody>", M = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, M)), N = (this._getFirstDayOfMonth(tt, Z) - u + 7) % 7, E = Math.ceil((N + M) / 7), A = X && this.maxRows > E ? this.maxRows : E, this.maxRows = A, H = this._daylightSavingAdjust(new Date(tt, Z, 1 - N)), O = 0; O < A; O++) {
                            for (S += "<tr>", z = c ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", w = 0; w < 7; w++) j = m ? m.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], W = H.getMonth() !== Z, L = W && !_ || !j[0] || G && H < G || J && H > J, z += "<td class='" + ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (H.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === H.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + j[1] + (H.getTime() === Q.getTime() ? " " + this._currentClass : "") + (H.getTime() === q.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : L ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === q.getTime() ? " ui-state-highlight" : "") + (H.getTime() === Q.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
                            S += z + "</tr>"
                        }
                        Z++, Z > 11 && (Z = 0, tt++), S += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += S
                    }
                    y += k
                }
                return y += h, t._keyEvent = !1, y
            },
            _generateMonthYearHeader: function (t, e, i, n, s, o, r, a) {
                var l, h, u, c, d, p, f, g, m = this._get(t, "changeMonth"), v = this._get(t, "changeYear"),
                    _ = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
                if (o || !m) y += "<span class='ui-datepicker-month'>" + r[e] + "</span>"; else {
                    for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; u < 12; u++) (!l || u >= n.getMonth()) && (!h || u <= s.getMonth()) && (y += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + a[u] + "</option>");
                    y += "</select>"
                }
                if (_ || (b += y + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                    for (c = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (t) {
                        var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                        return isNaN(e) ? d : e
                    }, f = p(c[0]), g = Math.max(f, p(c[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f,
                             g = s ? Math.min(g, s.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                }
                return b += this._get(t, "yearSuffix"), _ && (b += (!o && m && v ? "" : "&#xa0;") + y), b += "</div>"
            },
            _adjustInstDate: function (t, e, i) {
                var n = t.selectedYear + ("Y" === i ? e : 0), s = t.selectedMonth + ("M" === i ? e : 0),
                    o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                    r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
                t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(t)
            },
            _restrictMinMax: function (t, e) {
                var i = this._getMinMaxDate(t, "min"), n = this._getMinMaxDate(t, "max"), s = i && e < i ? i : e;
                return n && s > n ? n : s
            },
            _notifyChange: function (t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function (t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function (t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function (t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function (t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function (t, e, i, n) {
                var s = this._getNumberOfMonths(t),
                    o = this._daylightSavingAdjust(new Date(i, n + (e < 0 ? e : s[0] * s[1]), 1));
                return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
            },
            _isInRange: function (t, e) {
                var i, n, s = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), r = null, a = null,
                    l = this._get(t, "yearRange");
                return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (a += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || e.getFullYear() <= a)
            },
            _getFormatConfig: function (t) {
                var e = this._get(t, "shortYearCutoff");
                return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                    shortYearCutoff: e,
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function (t, e, i, n) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
            }
        }), t.fn.datepicker = function (e) {
            if (!this.length) return this;
            t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
                "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
            }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
        }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker
    }),/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../ie", "../version", "../widget"], t) : t(jQuery)
    }(function (t) {
        var e = !1;
        return t(document).on("mouseup", function () {
            e = !1
        }), t.widget("ui.mouse", {
            version: "1.12.1",
            options: {cancel: "input, textarea, button, select, option", distance: 1, delay: 0},
            _mouseInit: function () {
                var e = this;
                this.element.on("mousedown." + this.widgetName, function (t) {
                    return e._mouseDown(t)
                }).on("click." + this.widgetName, function (i) {
                    if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
                }), this.started = !1
            },
            _mouseDestroy: function () {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function (i) {
                if (!e) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                    var n = this, s = 1 === i.which,
                        o = !("string" != typeof this.options.cancel || !i.target.nodeName) && t(i.target).closest(this.options.cancel).length;
                    return !(s && !o && this._mouseCapture(i)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                        n.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = !1 !== this._mouseStart(i), !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                        return n._mouseMove(t)
                    }, this._mouseUpDelegate = function (t) {
                        return n._mouseUp(t)
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0))
                }
            },
            _mouseMove: function (e) {
                if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                    if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(e)
                }
                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function (i) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, i.target === this._mouseDownEvent.target && t.data(i.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(i)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, e = !1, i.preventDefault()
            },
            _mouseDistanceMet: function (t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet
            },
            _mouseStart: function () {
            },
            _mouseDrag: function () {
            },
            _mouseStop: function () {
            },
            _mouseCapture: function () {
                return !0
            }
        })
    }),/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./mouse", "../data", "../plugin", "../safe-active-element", "../safe-blur", "../scroll-parent", "../version", "../widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.draggable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function () {
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function (t, e) {
                this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function () {
                if ((this.helper || this.element).is(".ui-draggable-dragging")) return void (this.destroyOnClear = !0);
                this._removeHandleClassName(), this._mouseDestroy()
            },
            _mouseCapture: function (e) {
                var i = this.options;
                return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0))
            },
            _blockFrames: function (e) {
                this.iframeBlocks = this.document.find(e).map(function () {
                    var e = t(this);
                    return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
                })
            },
            _unblockFrames: function () {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function (e) {
                var i = t.ui.safeActiveElement(this.document[0]);
                t(e.target).closest(i).length || t.ui.safeBlur(i)
            },
            _mouseStart: function (e) {
                var i = this.options;
                return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
                    return "fixed" === t(this).css("position")
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
            },
            _refreshOffsets: function (t) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top}
            },
            _mouseDrag: function (e, i) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var n = this._uiHash();
                    if (!1 === this._trigger("drag", e, n)) return this._mouseUp(new t.Event("mouseup", e)), !1;
                    this.position = n.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
            },
            _mouseStop: function (e) {
                var i = this, n = !1;
                return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    !1 !== i._trigger("stop", e) && i._clear()
                }) : !1 !== this._trigger("stop", e) && this._clear(), !1
            },
            _mouseUp: function (e) {
                return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
            },
            cancel: function () {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {target: this.element[0]})) : this._clear(), this
            },
            _getHandle: function (e) {
                return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
            },
            _setHandleClassName: function () {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
            },
            _removeHandleClassName: function () {
                this._removeClass(this.handleElement, "ui-draggable-handle")
            },
            _createHelper: function (e) {
                var i = this.options, n = t.isFunction(i.helper),
                    s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
            },
            _setPositionRelative: function () {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function (e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _isRootNode: function (t) {
                return /(html|body)/i.test(t.tagName) || t === this.document[0]
            },
            _getParentOffset: function () {
                var e = this.offsetParent.offset(), i = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" !== this.cssPosition) return {top: 0, left: 0};
                var t = this.element.position(), e = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
            },
            _setContainment: function () {
                var e, i, n, s = this.options, o = this.document[0];
                return this.relativeContainer = null, s.containment ? "window" === s.containment ? void (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void (this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = t(s.containment), void ((n = i[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void (this.containment = null)
            },
            _convertPositionTo: function (t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1, n = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function (t, e) {
                var i, n, s, o, r = this.options, a = this._isRootNode(this.scrollParent[0]), l = t.pageX, h = t.pageY;
                return a && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (h = this.originalPageY)), {
                    top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                    left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function () {
                this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _trigger: function (e, i, n) {
                return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n)
            },
            plugins: {},
            _uiHash: function () {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), t.ui.plugin.add("draggable", "connectToSortable", {
            start: function (e, i, n) {
                var s = t.extend({}, i, {item: n.element});
                n.sortables = [], t(n.options.connectToSortable).each(function () {
                    var i = t(this).sortable("instance");
                    i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s))
                })
            }, stop: function (e, i, n) {
                var s = t.extend({}, i, {item: n.element});
                n.cancelHelperRemoval = !1, t.each(n.sortables, function () {
                    var t = this;
                    t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                        position: t.placeholder.css("position"),
                        top: t.placeholder.css("top"),
                        left: t.placeholder.css("left")
                    }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
                })
            }, drag: function (e, i, n) {
                t.each(n.sortables, function () {
                    var s = !1, o = this;
                    o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables, function () {
                        return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1), s
                    })), s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () {
                        return i.helper[0]
                    }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, function () {
                        this.refreshPositions()
                    }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, function () {
                        this.refreshPositions()
                    }))
                })
            }
        }), t.ui.plugin.add("draggable", "cursor", {
            start: function (e, i, n) {
                var s = t("body"), o = n.options;
                s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor)
            }, stop: function (e, i, n) {
                var s = n.options;
                s._cursor && t("body").css("cursor", s._cursor)
            }
        }), t.ui.plugin.add("draggable", "opacity", {
            start: function (e, i, n) {
                var s = t(i.helper), o = n.options;
                s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
            }, stop: function (e, i, n) {
                var s = n.options;
                s._opacity && t(i.helper).css("opacity", s._opacity)
            }
        }), t.ui.plugin.add("draggable", "scroll", {
            start: function (t, e, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
            }, drag: function (e, i, n) {
                var s = n.options, o = !1, r = n.scrollParentNotHidden[0], a = n.document[0];
                r !== a && "HTML" !== r.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + r.offsetHeight - e.pageY < s.scrollSensitivity ? r.scrollTop = o = r.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (r.scrollTop = o = r.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + r.offsetWidth - e.pageX < s.scrollSensitivity ? r.scrollLeft = o = r.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (r.scrollLeft = o = r.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(a).scrollTop() < s.scrollSensitivity ? o = t(a).scrollTop(t(a).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(a).scrollTop()) < s.scrollSensitivity && (o = t(a).scrollTop(t(a).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(a).scrollLeft() < s.scrollSensitivity ? o = t(a).scrollLeft(t(a).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(a).scrollLeft()) < s.scrollSensitivity && (o = t(a).scrollLeft(t(a).scrollLeft() + s.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
            }
        }), t.ui.plugin.add("draggable", "snap", {
            start: function (e, i, n) {
                var s = n.options;
                n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function () {
                    var e = t(this), i = e.offset();
                    this !== n.element[0] && n.snapElements.push({
                        item: this,
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        top: i.top,
                        left: i.left
                    })
                })
            }, drag: function (e, i, n) {
                var s, o, r, a, l, h, u, c, d, p, f = n.options, g = f.snapTolerance, m = i.offset.left,
                    v = m + n.helperProportions.width, _ = i.offset.top, b = _ + n.helperProportions.height;
                for (d = n.snapElements.length - 1; d >= 0; d--) l = n.snapElements[d].left - n.margins.left, h = l + n.snapElements[d].width, u = n.snapElements[d].top - n.margins.top, c = u + n.snapElements[d].height, v < l - g || m > h + g || b < u - g || _ > c + g || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {snapItem: n.snapElements[d].item})), n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = Math.abs(u - b) <= g, o = Math.abs(c - _) <= g, r = Math.abs(l - v) <= g, a = Math.abs(h - m) <= g, s && (i.position.top = n._convertPositionTo("relative", {
                    top: u - n.helperProportions.height,
                    left: 0
                }).top), o && (i.position.top = n._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top), r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l - n.helperProportions.width
                }).left), a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left)), p = s || o || r || a, "outer" !== f.snapMode && (s = Math.abs(u - _) <= g, o = Math.abs(c - b) <= g, r = Math.abs(l - m) <= g, a = Math.abs(h - v) <= g, s && (i.position.top = n._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top), o && (i.position.top = n._convertPositionTo("relative", {
                    top: c - n.helperProportions.height,
                    left: 0
                }).top), r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left), a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h - n.helperProportions.width
                }).left)), !n.snapElements[d].snapping && (s || o || r || a || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {snapItem: n.snapElements[d].item})), n.snapElements[d].snapping = s || o || r || a || p)
            }
        }), t.ui.plugin.add("draggable", "stack", {
            start: function (e, i, n) {
                var s, o = n.options, r = t.makeArray(t(o.stack)).sort(function (e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
                r.length && (s = parseInt(t(r[0]).css("zIndex"), 10) || 0, t(r).each(function (e) {
                    t(this).css("zIndex", s + e)
                }), this.css("zIndex", s + r.length))
            }
        }), t.ui.plugin.add("draggable", "zIndex", {
            start: function (e, i, n) {
                var s = t(i.helper), o = n.options;
                s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
            }, stop: function (e, i, n) {
                var s = n.options;
                s._zIndex && t(i.helper).css("zIndex", s._zIndex)
            }
        }), t.ui.draggable
    }),/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./mouse", "../disable-selection", "../plugin", "../version", "../widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.resizable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                classes: {"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"},
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function (t) {
                return parseFloat(t) || 0
            },
            _isNumber: function (t) {
                return !isNaN(parseFloat(t))
            },
            _hasScroll: function (e, i) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var n = i && "left" === i ? "scrollLeft" : "scrollTop", s = !1;
                return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
            },
            _create: function () {
                var e, i = this.options, n = this;
                this._addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!i.aspectRatio,
                    aspectRatio: i.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom"),
                    marginLeft: this.originalElement.css("marginLeft")
                }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function () {
                    i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show())
                }).on("mouseleave", function () {
                    i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide())
                }), this._mouseInit()
            },
            _destroy: function () {
                this._mouseDestroy();
                var e, i = function (e) {
                    t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                    position: e.css("position"),
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: e.css("top"),
                    left: e.css("left")
                }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
            },
            _setOption: function (t, e) {
                switch (this._super(t, e), t) {
                    case"handles":
                        this._removeHandles(), this._setupHandles()
                }
            },
            _setupHandles: function () {
                var e, i, n, s, o, r = this.options, a = this;
                if (this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this._handles = t(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; i < n.length; i++) e = t.trim(n[i]), s = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({zIndex: r.zIndex}), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
                this._renderAxis = function (e) {
                    var i, n, s, o;
                    e = e || this.element;
                    for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {mousedown: a._mouseDown})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
                    a.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = o && o[1] ? o[1] : "se")
                }), r.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
            },
            _removeHandles: function () {
                this._handles.remove()
            },
            _mouseCapture: function (e) {
                var i, n, s = !1;
                for (i in this.handles) ((n = t(this.handles[i])[0]) === e.target || t.contains(n, e.target)) && (s = !0);
                return !this.options.disabled && s
            },
            _mouseStart: function (e) {
                var i, n, s, o = this.options, r = this.element;
                return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: i,
                    top: n
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {width: r.width(), height: r.height()}, this.originalSize = this._helper ? {
                    width: r.outerWidth(),
                    height: r.outerHeight()
                } : {width: r.width(), height: r.height()}, this.sizeDiff = {
                    width: r.outerWidth() - r.width(),
                    height: r.outerHeight() - r.height()
                }, this.originalPosition = {left: i, top: n}, this.originalMousePosition = {
                    left: e.pageX,
                    top: e.pageY
                }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
            },
            _mouseDrag: function (e) {
                var i, n, s = this.originalMousePosition, o = this.axis, r = e.pageX - s.left || 0,
                    a = e.pageY - s.top || 0, l = this._change[o];
                return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, r, a]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
            },
            _mouseStop: function (e) {
                this.resizing = !1;
                var i, n, s, o, r, a, l, h = this.options, u = this;
                return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, o = n ? 0 : u.sizeDiff.width, r = {
                    width: u.helper.width() - o,
                    height: u.helper.height() - s
                }, a = parseFloat(u.element.css("left")) + (u.position.left - u.originalPosition.left) || null, l = parseFloat(u.element.css("top")) + (u.position.top - u.originalPosition.top) || null, h.animate || this.element.css(t.extend(r, {
                    top: l,
                    left: a
                })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function () {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {width: this.size.width, height: this.size.height}
            },
            _applyChanges: function () {
                var t = {};
                return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
            },
            _updateVirtualBoundaries: function (t) {
                var e, i, n, s, o, r = this.options;
                o = {
                    minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                    maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : Infinity,
                    minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                    maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : Infinity
                }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), i < o.maxWidth && (o.maxWidth = i), s < o.maxHeight && (o.maxHeight = s)), this._vBoundaries = o
            },
            _updateCache: function (t) {
                this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
            },
            _updateRatio: function (t) {
                var e = this.position, i = this.size, n = this.axis;
                return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
            },
            _respectSize: function (t) {
                var e = this._vBoundaries, i = this.axis,
                    n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                    s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                    o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                    r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                    a = this.originalPosition.left + this.originalSize.width,
                    l = this.originalPosition.top + this.originalSize.height, h = /sw|nw|w/.test(i),
                    u = /nw|ne|n/.test(i);
                return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && h && (t.left = a - e.minWidth), n && h && (t.left = a - e.maxWidth), r && u && (t.top = l - e.minHeight), s && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
            },
            _getPaddingPlusBorderDimensions: function (t) {
                for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseFloat(n[e]) || 0, i[e] += parseFloat(s[e]) || 0;
                return {height: i[0] + i[2], width: i[1] + i[3]}
            },
            _proportionallyResize: function () {
                if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                })
            },
            _renderProxy: function () {
                var e = this.element, i = this.options;
                this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function (t, e) {
                    return {width: this.originalSize.width + e}
                }, w: function (t, e) {
                    var i = this.originalSize;
                    return {left: this.originalPosition.left + e, width: i.width - e}
                }, n: function (t, e, i) {
                    var n = this.originalSize;
                    return {top: this.originalPosition.top + i, height: n.height - i}
                }, s: function (t, e, i) {
                    return {height: this.originalSize.height + i}
                }, se: function (e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                }, sw: function (e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                }, ne: function (e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                }, nw: function (e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                }
            },
            _propagate: function (e, i) {
                t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
            },
            plugins: {},
            ui: function () {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), t.ui.plugin.add("resizable", "animate", {
            stop: function (e) {
                var i = t(this).resizable("instance"), n = i.options, s = i._proportionallyResizeElements,
                    o = s.length && /textarea/i.test(s[0].nodeName),
                    r = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height, a = o ? 0 : i.sizeDiff.width,
                    l = {width: i.size.width - a, height: i.size.height - r},
                    h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                    u = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(t.extend(l, u && h ? {top: u, left: h} : {}), {
                    duration: n.animateDuration,
                    easing: n.animateEasing,
                    step: function () {
                        var n = {
                            width: parseFloat(i.element.css("width")),
                            height: parseFloat(i.element.css("height")),
                            top: parseFloat(i.element.css("top")),
                            left: parseFloat(i.element.css("left"))
                        };
                        s && s.length && t(s[0]).css({
                            width: n.width,
                            height: n.height
                        }), i._updateCache(n), i._propagate("resize", e)
                    }
                })
            }
        }), t.ui.plugin.add("resizable", "containment", {
            start: function () {
                var e, i, n, s, o, r, a, l = t(this).resizable("instance"), h = l.options, u = l.element,
                    c = h.containment, d = c instanceof t ? c.get(0) : /parent/.test(c) ? u.parent().get(0) : c;
                d && (l.containerElement = t(d), /document/.test(c) || c === document ? (l.containerOffset = {
                    left: 0,
                    top: 0
                }, l.containerPosition = {left: 0, top: 0}, l.parentData = {
                    element: t(document),
                    left: 0,
                    top: 0,
                    width: t(document).width(),
                    height: t(document).height() || document.body.parentNode.scrollHeight
                }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
                    i[t] = l._num(e.css("padding" + n))
                }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                    height: e.innerHeight() - i[3],
                    width: e.innerWidth() - i[1]
                }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, r = l._hasScroll(d, "left") ? d.scrollWidth : o, a = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = {
                    element: d,
                    left: n.left,
                    top: n.top,
                    width: r,
                    height: a
                }))
            }, resize: function (e) {
                var i, n, s, o, r = t(this).resizable("instance"), a = r.options, l = r.containerOffset, h = r.position,
                    u = r._aspectRatio || e.shiftKey, c = {top: 0, left: 0}, d = r.containerElement, p = !0;
                d[0] !== document && /static/.test(d.css("position")) && (c = l), h.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - c.left), u && (r.size.height = r.size.width / r.aspectRatio, p = !1), r.position.left = a.helper ? l.left : 0), h.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), u && (r.size.width = r.size.height * r.aspectRatio, p = !1), r.position.top = r._helper ? l.top : 0), s = r.containerElement.get(0) === r.element.parent().get(0), o = /relative|absolute/.test(r.containerElement.css("position")), s && o ? (r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left, r.offset.top = r.element.offset().top), i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - c.left : r.offset.left - l.left)), n = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - c.top : r.offset.top - l.top)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, u && (r.size.height = r.size.width / r.aspectRatio, p = !1)), n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n, u && (r.size.width = r.size.height * r.aspectRatio, p = !1)), p || (r.position.left = r.prevPosition.left, r.position.top = r.prevPosition.top, r.size.width = r.prevSize.width, r.size.height = r.prevSize.height)
            }, stop: function () {
                var e = t(this).resizable("instance"), i = e.options, n = e.containerOffset, s = e.containerPosition,
                    o = e.containerElement, r = t(e.helper), a = r.offset(), l = r.outerWidth() - e.sizeDiff.width,
                    h = r.outerHeight() - e.sizeDiff.height;
                e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                    left: a.left - s.left - n.left,
                    width: l,
                    height: h
                }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                    left: a.left - s.left - n.left,
                    width: l,
                    height: h
                })
            }
        }), t.ui.plugin.add("resizable", "alsoResize", {
            start: function () {
                var e = t(this).resizable("instance"), i = e.options;
                t(i.alsoResize).each(function () {
                    var e = t(this);
                    e.data("ui-resizable-alsoresize", {
                        width: parseFloat(e.width()),
                        height: parseFloat(e.height()),
                        left: parseFloat(e.css("left")),
                        top: parseFloat(e.css("top"))
                    })
                })
            }, resize: function (e, i) {
                var n = t(this).resizable("instance"), s = n.options, o = n.originalSize, r = n.originalPosition, a = {
                    height: n.size.height - o.height || 0,
                    width: n.size.width - o.width || 0,
                    top: n.position.top - r.top || 0,
                    left: n.position.left - r.left || 0
                };
                t(s.alsoResize).each(function () {
                    var e = t(this), n = t(this).data("ui-resizable-alsoresize"), s = {},
                        o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    t.each(o, function (t, e) {
                        var i = (n[e] || 0) + (a[e] || 0);
                        i && i >= 0 && (s[e] = i || null)
                    }), e.css(s)
                })
            }, stop: function () {
                t(this).removeData("ui-resizable-alsoresize")
            }
        }), t.ui.plugin.add("resizable", "ghost", {
            start: function () {
                var e = t(this).resizable("instance"), i = e.size;
                e.ghost = e.originalElement.clone(), e.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: i.height,
                    width: i.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
            }, resize: function () {
                var e = t(this).resizable("instance");
                e.ghost && e.ghost.css({position: "relative", height: e.size.height, width: e.size.width})
            }, stop: function () {
                var e = t(this).resizable("instance");
                e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
            }
        }), t.ui.plugin.add("resizable", "grid", {
            resize: function () {
                var e, i = t(this).resizable("instance"), n = i.options, s = i.size, o = i.originalSize,
                    r = i.originalPosition, a = i.axis, l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                    h = l[0] || 1, u = l[1] || 1, c = Math.round((s.width - o.width) / h) * h,
                    d = Math.round((s.height - o.height) / u) * u, p = o.width + c, f = o.height + d,
                    g = n.maxWidth && n.maxWidth < p, m = n.maxHeight && n.maxHeight < f,
                    v = n.minWidth && n.minWidth > p, _ = n.minHeight && n.minHeight > f;
                n.grid = l, v && (p += h), _ && (f += u), g && (p -= h), m && (f -= u), /^(se|s|e)$/.test(a) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.top = r.top - d) : /^(sw)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.left = r.left - c) : ((f - u <= 0 || p - h <= 0) && (e = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = r.top - d) : (f = u - e.height, i.size.height = f, i.position.top = r.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = r.left - c) : (p = h - e.width, i.size.width = p, i.position.left = r.left + o.width - p))
            }
        }), t.ui.resizable
    }),/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./button", "./draggable", "./mouse", "./resizable", "../focusable", "../keycode", "../position", "../safe-active-element", "../safe-blur", "../tabbable", "../unique-id", "../version", "../widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.dialog", {
            version: "1.12.1",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                classes: {"ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all"},
                closeOnEscape: !0,
                closeText: "Close",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center", at: "center", of: window, collision: "fit", using: function (e) {
                        var i = t(this).css(e).offset().top;
                        i < 0 && t(this).css("top", e.top - i)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            sizeRelatedOptions: {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            resizableRelatedOptions: {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0},
            _create: function () {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
            },
            _init: function () {
                this.options.autoOpen && this.open()
            },
            _appendTo: function () {
                var e = this.options.appendTo;
                return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
            },
            _destroy: function () {
                var t, e = this.originalPosition;
                this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
            },
            widget: function () {
                return this.uiDialog
            },
            disable: t.noop,
            enable: t.noop,
            close: function (e) {
                var i = this;
                this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
                    i._trigger("close", e)
                }))
            },
            isOpen: function () {
                return this._isOpen
            },
            moveToTop: function () {
                this._moveToTop()
            },
            _moveToTop: function (e, i) {
                var n = !1, s = this.uiDialog.siblings(".ui-front:visible").map(function () {
                    return +t(this).css("z-index")
                }).get(), o = Math.max.apply(null, s);
                return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0), n && !i && this._trigger("focus", e), n
            },
            open: function () {
                var e = this;
                if (this._isOpen) return void (this._moveToTop() && this._focusTabbable());
                this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                    e._focusTabbable(), e._trigger("focus")
                }), this._makeFocusTarget(), this._trigger("open")
            },
            _focusTabbable: function () {
                var t = this._focusedElement;
                t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
            },
            _keepFocus: function (e) {
                function i() {
                    var e = t.ui.safeActiveElement(this.document[0]);
                    this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
                }

                e.preventDefault(), i.call(this), this._delay(i)
            },
            _createWrapper: function () {
                this.uiDialog = t("<div>").hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                    keydown: function (e) {
                        if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                        if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                            var i = this.uiDialog.find(":tabbable"), n = i.filter(":first"), s = i.filter(":last");
                            e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () {
                                s.trigger("focus")
                            }), e.preventDefault()) : (this._delay(function () {
                                n.trigger("focus")
                            }), e.preventDefault())
                        }
                    }, mousedown: function (t) {
                        this._moveToTop(t) && this._focusTabbable()
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
            },
            _createTitlebar: function () {
                var e;
                this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                    mousedown: function (e) {
                        t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                    }
                }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                    label: t("<a>").text(this.options.closeText).html(),
                    icon: "ui-icon-closethick",
                    showLabel: !1
                }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                    click: function (t) {
                        t.preventDefault(), this.close(t)
                    }
                }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({"aria-labelledby": e.attr("id")})
            },
            _title: function (t) {
                this.options.title ? t.text(this.options.title) : t.html("&#160;")
            },
            _createButtonPane: function () {
                this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
            },
            _createButtons: function () {
                var e = this, i = this.options.buttons;
                if (this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length) return void this._removeClass(this.uiDialog, "ui-dialog-buttons");
                t.each(i, function (i, n) {
                    var s, o;
                    n = t.isFunction(n) ? {
                        click: n,
                        text: i
                    } : n, n = t.extend({type: "button"}, n), s = n.click, o = {
                        icon: n.icon,
                        iconPosition: n.iconPosition,
                        showLabel: n.showLabel,
                        icons: n.icons,
                        text: n.text
                    }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, delete n.icons, "boolean" == typeof n.text && delete n.text, t("<button></button>", n).button(o).appendTo(e.uiButtonSet).on("click", function () {
                        s.apply(e.element[0], arguments)
                    })
                }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)
            },
            _makeDraggable: function () {
                function e(t) {
                    return {position: t.position, offset: t.offset}
                }

                var i = this, n = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function (n, s) {
                        i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s))
                    },
                    drag: function (t, n) {
                        i._trigger("drag", t, e(n))
                    },
                    stop: function (s, o) {
                        var r = o.offset.left - i.document.scrollLeft(), a = o.offset.top - i.document.scrollTop();
                        n.position = {
                            my: "left top",
                            at: "left" + (r >= 0 ? "+" : "") + r + " top" + (a >= 0 ? "+" : "") + a,
                            of: i.window
                        }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o))
                    }
                })
            },
            _makeResizable: function () {
                function e(t) {
                    return {
                        originalPosition: t.originalPosition,
                        originalSize: t.originalSize,
                        position: t.position,
                        size: t.size
                    }
                }

                var i = this, n = this.options, s = n.resizable, o = this.uiDialog.css("position"),
                    r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: n.maxWidth,
                    maxHeight: n.maxHeight,
                    minWidth: n.minWidth,
                    minHeight: this._minHeight(),
                    handles: r,
                    start: function (n, s) {
                        i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s))
                    },
                    resize: function (t, n) {
                        i._trigger("resize", t, e(n))
                    },
                    stop: function (s, o) {
                        var r = i.uiDialog.offset(), a = r.left - i.document.scrollLeft(),
                            l = r.top - i.document.scrollTop();
                        n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {
                            my: "left top",
                            at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l,
                            of: i.window
                        }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o))
                    }
                }).css("position", o)
            },
            _trackFocus: function () {
                this._on(this.widget(), {
                    focusin: function (e) {
                        this._makeFocusTarget(), this._focusedElement = t(e.target)
                    }
                })
            },
            _makeFocusTarget: function () {
                this._untrackInstance(), this._trackingInstances().unshift(this)
            },
            _untrackInstance: function () {
                var e = this._trackingInstances(), i = t.inArray(this, e);
                -1 !== i && e.splice(i, 1)
            },
            _trackingInstances: function () {
                var t = this.document.data("ui-dialog-instances");
                return t || (t = [], this.document.data("ui-dialog-instances", t)), t
            },
            _minHeight: function () {
                var t = this.options;
                return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
            },
            _position: function () {
                var t = this.uiDialog.is(":visible");
                t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
            },
            _setOptions: function (e) {
                var i = this, n = !1, s = {};
                t.each(e, function (t, e) {
                    i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e)
                }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
            },
            _setOption: function (e, i) {
                var n, s, o = this.uiDialog;
                "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({label: t("<a>").text("" + this.options.closeText).html()}), "draggable" === e && (n = o.is(":data(ui-draggable)"), n && !i && o.draggable("destroy"), !n && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = o.is(":data(ui-resizable)"), s && !i && o.resizable("destroy"), s && "string" == typeof i && o.resizable("option", "handles", i), s || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function () {
                var t, e, i, n = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                    height: "auto",
                    width: n.width
                }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                    minHeight: e,
                    maxHeight: i,
                    height: "auto"
                }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function () {
                this.iframeBlocks = this.document.find("iframe").map(function () {
                    var e = t(this);
                    return t("<div>").css({
                        position: "absolute",
                        width: e.outerWidth(),
                        height: e.outerHeight()
                    }).appendTo(e.parent()).offset(e.offset())[0]
                })
            },
            _unblockFrames: function () {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function (e) {
                return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
            },
            _createOverlay: function () {
                if (this.options.modal) {
                    var e = !0;
                    this._delay(function () {
                        e = !1
                    }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                        focusin: function (t) {
                            e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                        }
                    }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {mousedown: "_keepFocus"}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                }
            },
            _destroyOverlay: function () {
                if (this.options.modal && this.overlay) {
                    var t = this.document.data("ui-dialog-overlays") - 1;
                    t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
                }
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
            options: {dialogClass: ""},
            _createWrapper: function () {
                this._super(), this.uiDialog.addClass(this.options.dialogClass)
            },
            _setOption: function (t, e) {
                "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
            }
        }), t.ui.dialog
    }),/*!
 * jQuery UI Droppable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./draggable", "./mouse", "../version", "../widget"], t) : t(jQuery)
    }(function (t) {
        t.widget("ui.droppable", {
            version: "1.12.1",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                addClasses: !0,
                greedy: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function () {
                var e, i = this.options, n = i.accept;
                this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function (t) {
                    return t.is(n)
                }, this.proportions = function () {
                    if (!arguments.length) return e || (e = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    });
                    e = arguments[0]
                }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
            },
            _addToManager: function (e) {
                t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
            },
            _splice: function (t) {
                for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
            },
            _destroy: function () {
                var e = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(e)
            },
            _setOption: function (e, i) {
                if ("accept" === e) this.accept = t.isFunction(i) ? i : function (t) {
                    return t.is(i)
                }; else if ("scope" === e) {
                    var n = t.ui.ddmanager.droppables[this.options.scope];
                    this._splice(n), this._addToManager(i)
                }
                this._super(e, i)
            },
            _activate: function (e) {
                var i = t.ui.ddmanager.current;
                this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
            },
            _deactivate: function (e) {
                var i = t.ui.ddmanager.current;
                this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
            },
            _over: function (e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
            },
            _out: function (e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
            },
            _drop: function (i, n) {
                var s = n || t.ui.ddmanager.current, o = !1;
                return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                    var n = t(this).droppable("instance");
                    if (n.options.greedy && !n.options.disabled && n.options.scope === s.options.scope && n.accept.call(n.element[0], s.currentItem || s.element) && e(s, t.extend(n, {offset: n.element.offset()}), n.options.tolerance, i)) return o = !0, !1
                }), !o && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", i, this.ui(s)), this.element)))
            },
            ui: function (t) {
                return {
                    draggable: t.currentItem || t.element,
                    helper: t.helper,
                    position: t.position,
                    offset: t.positionAbs
                }
            },
            _addHoverClass: function () {
                this._addClass("ui-droppable-hover")
            },
            _removeHoverClass: function () {
                this._removeClass("ui-droppable-hover")
            },
            _addActiveClass: function () {
                this._addClass("ui-droppable-active")
            },
            _removeActiveClass: function () {
                this._removeClass("ui-droppable-active")
            }
        });
        var e = t.ui.intersect = function () {
            function t(t, e, i) {
                return t >= e && t < e + i
            }

            return function (e, i, n, s) {
                if (!i.offset) return !1;
                var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                    r = (e.positionAbs || e.position.absolute).top + e.margins.top, a = o + e.helperProportions.width,
                    l = r + e.helperProportions.height, h = i.offset.left, u = i.offset.top,
                    c = h + i.proportions().width, d = u + i.proportions().height;
                switch (n) {
                    case"fit":
                        return h <= o && a <= c && u <= r && l <= d;
                    case"intersect":
                        return h < o + e.helperProportions.width / 2 && a - e.helperProportions.width / 2 < c && u < r + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < d;
                    case"pointer":
                        return t(s.pageY, u, i.proportions().height) && t(s.pageX, h, i.proportions().width);
                    case"touch":
                        return (r >= u && r <= d || l >= u && l <= d || r < u && l > d) && (o >= h && o <= c || a >= h && a <= c || o < h && a > c);
                    default:
                        return !1
                }
            }
        }();
        return t.ui.ddmanager = {
            current: null, droppables: {"default": []}, prepareOffsets: function (e, i) {
                var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [], r = i ? i.type : null,
                    a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                t:for (n = 0; n < o.length; n++) if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                    for (s = 0; s < a.length; s++) if (a[s] === o[n].element[0]) {
                        o[n].proportions().height = 0;
                        continue t
                    }
                    o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === r && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({
                        width: o[n].element[0].offsetWidth,
                        height: o[n].element[0].offsetHeight
                    }))
                }
            }, drop: function (i, n) {
                var s = !1;
                return t.each((t.ui.ddmanager.droppables[i.options.scope] || []).slice(), function () {
                    this.options && (!this.options.disabled && this.visible && e(i, this, this.options.tolerance, n) && (s = this._drop.call(this, n) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], i.currentItem || i.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, n)))
                }), s
            }, dragStart: function (e, i) {
                e.element.parentsUntil("body").on("scroll.droppable", function () {
                    e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                })
            }, drag: function (i, n) {
                i.options.refreshPositions && t.ui.ddmanager.prepareOffsets(i, n), t.each(t.ui.ddmanager.droppables[i.options.scope] || [], function () {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var s, o, r, a = e(i, this, this.options.tolerance, n),
                            l = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                        l && (this.options.greedy && (o = this.options.scope, r = this.element.parents(":data(ui-droppable)").filter(function () {
                            return t(this).droppable("instance").options.scope === o
                        }), r.length && (s = t(r[0]).droppable("instance"), s.greedyChild = "isover" === l)), s && "isover" === l && (s.isover = !1, s.isout = !0, s._out.call(s, n)), this[l] = !0, this["isout" === l ? "isover" : "isout"] = !1, this["isover" === l ? "_over" : "_out"].call(this, n), s && "isout" === l && (s.isout = !1, s.isover = !0, s._over.call(s, n)))
                    }
                })
            }, dragStop: function (e, i) {
                e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            }
        }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
            options: {
                hoverClass: !1,
                activeClass: !1
            }, _addActiveClass: function () {
                this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
            }, _removeActiveClass: function () {
                this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
            }, _addHoverClass: function () {
                this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
            }, _removeHoverClass: function () {
                this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
            }
        }), t.ui.droppable
    }),/*!
 * jQuery UI Progressbar 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.progressbar", {
            version: "1.12.1",
            options: {
                classes: {
                    "ui-progressbar": "ui-corner-all",
                    "ui-progressbar-value": "ui-corner-left",
                    "ui-progressbar-complete": "ui-corner-right"
                }, max: 100, value: 0, change: null, complete: null
            },
            min: 0,
            _create: function () {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
            },
            _destroy: function () {
                this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
            },
            value: function (t) {
                if (t === undefined) return this.options.value;
                this.options.value = this._constrainedValue(t), this._refreshValue()
            },
            _constrainedValue: function (t) {
                return t === undefined && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
            },
            _setOptions: function (t) {
                var e = t.value;
                delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
            },
            _setOption: function (t, e) {
                "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
            },
            _setOptionDisabled: function (t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _percentage: function () {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function () {
                var e = this.options.value, i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": e
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
            }
        })
    }),/*!
 * jQuery UI Selectable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./mouse", "../version", "../widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.selectable", t.ui.mouse, {
            version: "1.12.1",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function () {
                var e = this;
                this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                    e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function () {
                        var i = t(this), n = i.offset(),
                            s = {left: n.left - e.elementPos.left, top: n.top - e.elementPos.top};
                        t.data(this, "selectable-item", {
                            element: this,
                            $element: i,
                            left: s.left,
                            top: s.top,
                            right: s.left + i.outerWidth(),
                            bottom: s.top + i.outerHeight(),
                            startselected: !1,
                            selected: i.hasClass("ui-selected"),
                            selecting: i.hasClass("ui-selecting"),
                            unselecting: i.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
            },
            _destroy: function () {
                this.selectees.removeData("selectable-item"), this._mouseDestroy()
            },
            _mouseStart: function (e) {
                var i = this, n = this.options;
                this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
                    left: e.pageX,
                    top: e.pageY,
                    width: 0,
                    height: 0
                }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                    var n = t.data(this, "selectable-item");
                    n.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(n.$element, "ui-selected"), n.selected = !1, i._addClass(n.$element, "ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {unselecting: n.element}))
                }), t(e.target).parents().addBack().each(function () {
                    var n, s = t.data(this, "selectable-item");
                    if (s) return n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {selecting: s.element}) : i._trigger("unselecting", e, {unselecting: s.element}), !1
                }))
            },
            _mouseDrag: function (e) {
                if (this.dragged = !0, !this.options.disabled) {
                    var i, n = this, s = this.options, o = this.opos[0], r = this.opos[1], a = e.pageX, l = e.pageY;
                    return o > a && (i = a, a = o, o = i), r > l && (i = l, l = r, r = i), this.helper.css({
                        left: o,
                        top: r,
                        width: a - o,
                        height: l - r
                    }), this.selectees.each(function () {
                        var i = t.data(this, "selectable-item"), h = !1, u = {};
                        i && i.element !== n.element[0] && (u.left = i.left + n.elementPos.left, u.right = i.right + n.elementPos.left, u.top = i.top + n.elementPos.top, u.bottom = i.bottom + n.elementPos.top, "touch" === s.tolerance ? h = !(u.left > a || u.right < o || u.top > l || u.bottom < r) : "fit" === s.tolerance && (h = u.left > o && u.right < a && u.top > r && u.bottom < l), h ? (i.selected && (n._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (n._addClass(i.$element, "ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {selecting: i.element}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, n._addClass(i.$element, "ui-selected"), i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {unselecting: i.element}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"), i.selected = !1, n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {unselecting: i.element})))))
                    }), !1
                }
            },
            _mouseStop: function (e) {
                var i = this;
                return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
                    var n = t.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, {unselected: n.element})
                }), t(".ui-selecting", this.element[0]).each(function () {
                    var n = t.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, {selected: n.element})
                }), this._trigger("stop", e), this.helper.remove(), !1
            }
        })
    }),/*!
 * jQuery UI Selectmenu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./menu", "../escape-selector", "../form-reset-mixin", "../keycode", "../labels", "../position", "../unique-id", "../version", "../widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.selectmenu", [t.ui.formResetMixin, {
            version: "1.12.1",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                classes: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"},
                disabled: null,
                icons: {button: "ui-icon-triangle-1-s"},
                position: {my: "left top", at: "left bottom", collision: "none"},
                width: !1,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function () {
                var e = this.element.uniqueId().attr("id");
                this.ids = {
                    element: e,
                    button: e + "-button",
                    menu: e + "-menu"
                }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
            },
            _drawButton: function () {
                var e, i = this,
                    n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                    click: function (t) {
                        this.button.focus(), t.preventDefault()
                    }
                }), this.element.hide(), this.button = t("<span>", {
                    tabindex: this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true",
                    title: this.element.attr("title")
                }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(n).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
                    i._rendered || i._refreshMenu()
                })
            },
            _drawMenu: function () {
                var e = this;
                this.menu = t("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                    classes: {"ui-menu": "ui-corner-bottom"},
                    role: "listbox",
                    select: function (t, i) {
                        t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
                    },
                    focus: function (t, i) {
                        var n = i.item.data("ui-selectmenu-item");
                        null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, {item: n}), e.isOpen || e._select(n, t)), e.focusIndex = n.index, e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
                    }
                }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
                    return !1
                }, this.menuInstance._isDivider = function () {
                    return !1
                }
            },
            refresh: function () {
                this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
            },
            _refreshMenu: function () {
                var t, e = this.element.find("option");
                this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function (t) {
                this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
            },
            _position: function () {
                this.menuWrap.position(t.extend({of: this.button}, this.options.position))
            },
            close: function (t) {
                this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
            },
            widget: function () {
                return this.button
            },
            menuWidget: function () {
                return this.menu
            },
            _renderButtonItem: function (e) {
                var i = t("<span>");
                return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
            },
            _renderMenu: function (e, i) {
                var n = this, s = "";
                t.each(i, function (i, o) {
                    var r;
                    o.optgroup !== s && (r = t("<li>", {text: o.optgroup}), n._addClass(r, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), r.appendTo(e), s = o.optgroup), n._renderItemData(e, o)
                })
            },
            _renderItemData: function (t, e) {
                return this._renderItem(t, e).data("ui-selectmenu-item", e)
            },
            _renderItem: function (e, i) {
                var n = t("<li>"), s = t("<div>", {title: i.element.attr("title")});
                return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), n.append(s).appendTo(e)
            },
            _setText: function (t, e) {
                e ? t.text(e) : t.html("&#160;")
            },
            _move: function (t, e) {
                var i, n, s = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0), n.length && this.menuInstance.focus(e, n)
            },
            _getSelectedItem: function () {
                return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
            },
            _toggle: function (t) {
                this[this.isOpen ? "close" : "open"](t)
            },
            _setSelection: function () {
                var t;
                this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
            },
            _documentClick: {
                mousedown: function (e) {
                    this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
                }
            },
            _buttonEvents: {
                mousedown: function () {
                    var t;
                    window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
                }, click: function (t) {
                    this._setSelection(), this._toggle(t)
                }, keydown: function (e) {
                    var i = !0;
                    switch (e.keyCode) {
                        case t.ui.keyCode.TAB:
                        case t.ui.keyCode.ESCAPE:
                            this.close(e), i = !1;
                            break;
                        case t.ui.keyCode.ENTER:
                            this.isOpen && this._selectFocusedItem(e);
                            break;
                        case t.ui.keyCode.UP:
                            e.altKey ? this._toggle(e) : this._move("prev", e);
                            break;
                        case t.ui.keyCode.DOWN:
                            e.altKey ? this._toggle(e) : this._move("next", e);
                            break;
                        case t.ui.keyCode.SPACE:
                            this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                            break;
                        case t.ui.keyCode.LEFT:
                            this._move("prev", e);
                            break;
                        case t.ui.keyCode.RIGHT:
                            this._move("next", e);
                            break;
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.PAGE_UP:
                            this._move("first", e);
                            break;
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_DOWN:
                            this._move("last", e);
                            break;
                        default:
                            this.menu.trigger(e), i = !1
                    }
                    i && e.preventDefault()
                }
            },
            _selectFocusedItem: function (t) {
                var e = this.menuItems.eq(this.focusIndex).parent("li");
                e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
            },
            _select: function (t, e) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {item: t}), t.index !== i && this._trigger("change", e, {item: t}), this.close(e)
            },
            _setAria: function (t) {
                var e = this.menuItems.eq(t.index).attr("id");
                this.button.attr({
                    "aria-labelledby": e,
                    "aria-activedescendant": e
                }), this.menu.attr("aria-activedescendant", e)
            },
            _setOption: function (t, e) {
                if ("icons" === t) {
                    var i = this.button.find("span.ui-icon");
                    this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
                }
                this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
            },
            _setOptionDisabled: function (t) {
                this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
            },
            _appendTo: function () {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
            },
            _toggleAttr: function () {
                this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function () {
                var t = this.options.width;
                if (!1 === t) return void this.button.css("width", "");
                null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)
            },
            _resizeMenu: function () {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function () {
                var t = this._super();
                return t.disabled = this.element.prop("disabled"), t
            },
            _parseOptions: function (e) {
                var i = this, n = [];
                e.each(function (e, s) {
                    n.push(i._parseOption(t(s), e))
                }), this.items = n
            },
            _parseOption: function (t, e) {
                var i = t.parent("optgroup");
                return {
                    element: t,
                    index: e,
                    value: t.val(),
                    label: t.text(),
                    optgroup: i.attr("label") || "",
                    disabled: i.prop("disabled") || t.prop("disabled")
                }
            },
            _destroy: function () {
                this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
            }
        }])
    }),/*!
 * jQuery UI Slider 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./mouse", "../keycode", "../version", "../widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.slider", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                },
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function () {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
            },
            _refresh: function () {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function () {
                var e, i, n = this.options, s = this.element.find(".ui-slider-handle"), o = [];
                for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; e < i; e++) o.push("<span tabindex='0'></span>");
                this.handles = s.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
                    t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
                })
            },
            _createRange: function () {
                var e = this.options;
                e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                    left: "",
                    bottom: ""
                })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function () {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function () {
                this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
            },
            _mouseCapture: function (e) {
                var i, n, s, o, r, a, l, h = this, u = this.options;
                return !u.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), i = {
                    x: e.pageX,
                    y: e.pageY
                }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                    var i = Math.abs(n - h.values(e));
                    (s > i || s === i && (e === h._lastChangedValue || h.values(e) === u.min)) && (s = i, o = t(this), r = e)
                }), !1 !== this._start(e, r) && (this._mouseSliding = !0, this._handleIndex = r, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), a = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - a.left - o.width() / 2,
                    top: e.pageY - a.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, n), this._animateOff = !0, !0))
            },
            _mouseStart: function () {
                return !0
            },
            _mouseDrag: function (t) {
                var e = {x: t.pageX, y: t.pageY}, i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function (t) {
                return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function () {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function (t) {
                var e, i, n, s, o;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), n < 0 && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
            },
            _uiHash: function (t, e, i) {
                var n = {handle: this.handles[t], handleIndex: t, value: e !== undefined ? e : this.value()};
                return this._hasMultipleValues() && (n.value = e !== undefined ? e : this.values(t), n.values = i || this.values()), n
            },
            _hasMultipleValues: function () {
                return this.options.values && this.options.values.length
            },
            _start: function (t, e) {
                return this._trigger("start", t, this._uiHash(e))
            },
            _slide: function (t, e, i) {
                var n, s = this.value(), o = this.values();
                this._hasMultipleValues() && (n = this.values(e ? 0 : 1), s = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), o[e] = i), i !== s && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
            },
            _stop: function (t, e) {
                this._trigger("stop", t, this._uiHash(e))
            },
            _change: function (t, e) {
                this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
            },
            value: function (t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function (e, i) {
                var n, s, o;
                if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
                for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
                this._refreshValue()
            },
            _setOption: function (e, i) {
                var n, s = 0;
                switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), this._super(e, i), e) {
                    case"orientation":
                        this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;
                    case"value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case"values":
                        for (this._animateOff = !0, this._refreshValue(), n = s - 1; n >= 0; n--) this._change(null, n);
                        this._animateOff = !1;
                        break;
                    case"step":
                    case"min":
                    case"max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                        break;
                    case"range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _setOptionDisabled: function (t) {
                this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _value: function () {
                var t = this.options.value;
                return t = this._trimAlignValue(t)
            },
            _values: function (t) {
                var e, i, n;
                if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                if (this._hasMultipleValues()) {
                    for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                    return i
                }
                return []
            },
            _trimAlignValue: function (t) {
                if (t <= this._valueMin()) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, n = t - i;
                return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
            },
            _calculateNewMax: function () {
                var t = this.options.max, e = this._valueMin(), i = this.options.step;
                t = Math.round((t - e) / i) * i + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
            },
            _precision: function () {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function (t) {
                var e = t.toString(), i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _valueMin: function () {
                return this.options.min
            },
            _valueMax: function () {
                return this.max
            },
            _refreshRange: function (t) {
                "vertical" === t && this.range.css({
                    width: "",
                    left: ""
                }), "horizontal" === t && this.range.css({height: "", bottom: ""})
            },
            _refreshValue: function () {
                var e, i, n, s, o, r = this.options.range, a = this.options, l = this,
                    h = !this._animateOff && a.animate, u = {};
                this._hasMultipleValues() ? this.handles.each(function (n) {
                    i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](u, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({left: i + "%"}, a.animate), 1 === n && l.range[h ? "animate" : "css"]({width: i - e + "%"}, {
                        queue: !1,
                        duration: a.animate
                    })) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({bottom: i + "%"}, a.animate), 1 === n && l.range[h ? "animate" : "css"]({height: i - e + "%"}, {
                        queue: !1,
                        duration: a.animate
                    }))), e = i
                }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](u, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: i + "%"}, a.animate), "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: 100 - i + "%"}, a.animate), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: i + "%"}, a.animate), "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: 100 - i + "%"}, a.animate))
            },
            _handleEvents: {
                keydown: function (e) {
                    var i, n, s, o = t(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_UP:
                        case t.ui.keyCode.PAGE_DOWN:
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
                    }
                    switch (s = this.options.step, i = n = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
                        case t.ui.keyCode.HOME:
                            n = this._valueMin();
                            break;
                        case t.ui.keyCode.END:
                            n = this._valueMax();
                            break;
                        case t.ui.keyCode.PAGE_UP:
                            n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                            if (i === this._valueMax()) return;
                            n = this._trimAlignValue(i + s);
                            break;
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (i === this._valueMin()) return;
                            n = this._trimAlignValue(i - s)
                    }
                    this._slide(e, o, n)
                }, keyup: function (e) {
                    var i = t(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
                }
            }
        })
    }),/*!
 * jQuery UI Sortable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./mouse", "../data", "../ie", "../scroll-parent", "../version", "../widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.sortable", t.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function (t, e, i) {
                return t >= e && t < e + i
            },
            _isFloating: function (t) {
                return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
            },
            _create: function () {
                this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function (t, e) {
                this._super(t, e), "handle" === t && this._setHandleClassName()
            },
            _setHandleClassName: function () {
                var e = this;
                this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function () {
                    e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
                })
            },
            _destroy: function () {
                this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function (e, i) {
                var n = null, s = !1, o = this;
                return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function () {
                    if (t.data(this, o.widgetName + "-item") === o) return n = t(this), !1
                }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), !!n && (!(this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each(function () {
                    this === e.target && (s = !0)
                }), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))))
            },
            _mouseStart: function (e, i, n) {
                var s, o, r = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top},
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n) for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
            },
            _mouseDrag: function (e) {
                var i, n, s, o, r = this.options, a = !1;
                for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - this.document.scrollTop() < r.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < r.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)), e.pageX - this.document.scrollLeft() < r.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))), !1 !== a && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) if (n = this.items[i], s = n.item[0], (o = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && !(s === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === s || t.contains(this.placeholder[0], s) || "semi-dynamic" === this.options.type && t.contains(this.element[0], s))) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                    this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                    break
                }
                return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function (e, i) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                        var n = this, s = this.placeholder.offset(), o = this.options.axis, r = {};
                        o && "x" !== o || (r.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (r.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function () {
                            n._clear(e)
                        })
                    } else this._clear(e, i);
                    return !1
                }
            },
            cancel: function () {
                if (this.dragging) {
                    this._mouseUp(new t.Event("mouseup", {target: null})), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function (e) {
                var i = this._getItemsAsjQuery(e && e.connected), n = [];
                return e = e || {}, t(i).each(function () {
                    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                }), !n.length && e.key && n.push(e.key + "="), n.join("&")
            },
            toArray: function (e) {
                var i = this._getItemsAsjQuery(e && e.connected), n = [];
                return e = e || {}, i.each(function () {
                    n.push(t(e.item || this).attr(e.attribute || "id") || "")
                }), n
            },
            _intersectsWith: function (t) {
                var e = this.positionAbs.left, i = e + this.helperProportions.width, n = this.positionAbs.top,
                    s = n + this.helperProportions.height, o = t.left, r = o + t.width, a = t.top, l = a + t.height,
                    h = this.offset.click.top, u = this.offset.click.left,
                    c = "x" === this.options.axis || n + h > a && n + h < l,
                    d = "y" === this.options.axis || e + u > o && e + u < r, p = c && d;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
            },
            _intersectsWithPointer: function (t) {
                var e, i,
                    n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
                return !(!n || !s) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
            },
            _intersectsWithSides: function (t) {
                var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    n = this._getDragVerticalDirection(), s = this._getDragHorizontalDirection();
                return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
            },
            _getDragVerticalDirection: function () {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function () {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (t > 0 ? "right" : "left")
            },
            refresh: function (t) {
                return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function () {
                var t = this.options;
                return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function (e) {
                function i() {
                    a.push(this)
                }

                var n, s, o, r, a = [], l = [], h = this._connectWith();
                if (h && e) for (n = h.length - 1; n >= 0; n--) for (o = t(h[n], this.document[0]), s = o.length - 1; s >= 0; s--) (r = t.data(o[s], this.widgetFullName)) && r !== this && !r.options.disabled && l.push([t.isFunction(r.options.items) ? r.options.items.call(r.element) : t(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]);
                for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
                return t(a)
            },
            _removeCurrentsFromItems: function () {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, function (t) {
                    for (var i = 0; i < e.length; i++) if (e[i] === t.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function (e) {
                this.items = [], this.containers = [this];
                var i, n, s, o, r, a, l, h, u = this.items,
                    c = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]],
                    d = this._connectWith();
                if (d && this.ready) for (i = d.length - 1; i >= 0; i--) for (s = t(d[i], this.document[0]), n = s.length - 1; n >= 0; n--) (o = t.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && (c.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {item: this.currentItem}) : t(o.options.items, o.element), o]), this.containers.push(o));
                for (i = c.length - 1; i >= 0; i--) for (r = c[i][1], a = c[i][0], n = 0, h = a.length; n < h; n++) l = t(a[n]), l.data(this.widgetName + "-item", r), u.push({
                    item: l,
                    instance: r,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
            },
            refreshPositions: function (e) {
                this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var i, n, s, o;
                for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function (e) {
                e = e || this;
                var i, n = e.options;
                n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                    element: function () {
                        var n = e.currentItem[0].nodeName.toLowerCase(), s = t("<" + n + ">", e.document[0]);
                        return e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                    }, update: function (t, s) {
                        i && !n.forcePlaceholderSize || (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
            },
            _createTrPlaceholder: function (e, i) {
                var n = this;
                e.children().each(function () {
                    t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
                })
            },
            _contactContainers: function (e) {
                var i, n, s, o, r, a, l, h, u, c, d = null, p = null;
                for (i = this.containers.length - 1; i >= 0; i--) if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                    if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                    d = this.containers[i], p = i
                } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                if (d) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1); else {
                    for (s = 1e4, o = null, u = d.floating || this._isFloating(this.currentItem), r = u ? "left" : "top", a = u ? "width" : "height", c = u ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[r], h = !1, e[c] - l > this.items[n][a] / 2 && (h = !0), Math.abs(e[c] - l) < s && (s = Math.abs(e[c] - l), o = this.items[n], this.direction = h ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[p]) return void (this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                }
            },
            _createHelper: function (e) {
                var i = this.options,
                    n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), n[0].style.width && !i.forceHelperSize || n.width(this.currentItem.width()), n[0].style.height && !i.forceHelperSize || n.height(this.currentItem.height()), n
            },
            _adjustOffsetFromHelper: function (e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" === this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {top: 0, left: 0}
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
            },
            _setContainment: function () {
                var e, i, n, s = this.options;
                "parent" === s.containment && (s.containment = this.helper[0].parentNode), "document" !== s.containment && "window" !== s.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function (e, i) {
                i || (i = this.position);
                var n = "absolute" === e ? 1 : -1,
                    s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    o = /(html|body)/i.test(s[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
                }
            },
            _generatePosition: function (e) {
                var i, n, s = this.options, o = e.pageX, r = e.pageY,
                    a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = /(html|body)/i.test(a[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                    top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
                }
            },
            _rearrange: function (t, e, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var s = this.counter;
                this._delay(function () {
                    s === this.counter && this.refreshPositions(!n)
                })
            },
            _clear: function (t, e) {
                function i(t, e, i) {
                    return function (n) {
                        i._trigger(t, n, e._uiHash(e))
                    }
                }

                this.reverting = !1;
                var n, s = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (n in this._storedCSS) "auto" !== this._storedCSS[n] && "static" !== this._storedCSS[n] || (this._storedCSS[n] = "");
                    this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !e && s.push(function (t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function (t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (s.push(function (t) {
                    this._trigger("remove", t, this._uiHash())
                }), s.push(function (t) {
                    return function (e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), s.push(function (t) {
                    return function (e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                    for (n = 0; n < s.length; n++) s[n].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function () {
                !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
            },
            _uiHash: function (e) {
                var i = e || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || t([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: e ? e.element : null
                }
            }
        })
    }),/*!
 * jQuery UI Spinner 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./button", "../version", "../keycode", "../safe-active-element", "../widget"], t) : t(jQuery)
    }(function (t) {
        function e(t) {
            return function () {
                var e = this.element.val();
                t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
            }
        }

        return t.widget("ui.spinner", {
            version: "1.12.1",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                classes: {
                    "ui-spinner": "ui-corner-all",
                    "ui-spinner-down": "ui-corner-br",
                    "ui-spinner-up": "ui-corner-tr"
                },
                culture: null,
                icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function () {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function () {
                var e = this._super(), i = this.element;
                return t.each(["min", "max", "step"], function (t, n) {
                    var s = i.attr(n);
                    null != s && s.length && (e[n] = s)
                }), e
            },
            _events: {
                keydown: function (t) {
                    this._start(t) && this._keydown(t) && t.preventDefault()
                }, keyup: "_stop", focus: function () {
                    this.previous = this.element.val()
                }, blur: function (t) {
                    if (this.cancelBlur) return void delete this.cancelBlur;
                    this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t)
                }, mousewheel: function (t, e) {
                    if (e) {
                        if (!this.spinning && !this._start(t)) return !1;
                        this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                            this.spinning && this._stop(t)
                        }, 100), t.preventDefault()
                    }
                }, "mousedown .ui-spinner-button": function (e) {
                    function i() {
                        this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = n, this._delay(function () {
                            this.previous = n
                        }))
                    }

                    var n;
                    n = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur, i.call(this)
                    }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (e) {
                    if (t(e.currentTarget).hasClass("ui-state-active")) return !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                }, "mouseleave .ui-spinner-button": "_stop"
            },
            _enhance: function () {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
            },
            _draw: function () {
                this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({classes: {"ui-button": ""}}), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                    icon: this.options.icons.up,
                    showLabel: !1
                }), this.buttons.last().button({
                    icon: this.options.icons.down,
                    showLabel: !1
                }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
            },
            _keydown: function (e) {
                var i = this.options, n = t.ui.keyCode;
                switch (e.keyCode) {
                    case n.UP:
                        return this._repeat(null, 1, e), !0;
                    case n.DOWN:
                        return this._repeat(null, -1, e), !0;
                    case n.PAGE_UP:
                        return this._repeat(null, i.page, e), !0;
                    case n.PAGE_DOWN:
                        return this._repeat(null, -i.page, e), !0
                }
                return !1
            },
            _start: function (t) {
                return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
            },
            _repeat: function (t, e, i) {
                t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                    this._repeat(40, e, i)
                }, t), this._spin(e * this.options.step, i)
            },
            _spin: function (t, e) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {value: i}) || (this._value(i), this.counter++)
            },
            _increment: function (e) {
                var i = this.options.incremental;
                return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
            },
            _precision: function () {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function (t) {
                var e = t.toString(), i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _adjustValue: function (t) {
                var e, i, n = this.options;
                return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && t < n.min ? n.min : t
            },
            _stop: function (t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
            },
            _setOption: function (t, e) {
                var i, n, s;
                if ("culture" === t || "numberFormat" === t) return i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i));
                "max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)), "icons" === t && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, e.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, e.down)), this._super(t, e)
            },
            _setOptionDisabled: function (t) {
                this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
            },
            _setOptions: e(function (t) {
                this._super(t)
            }),
            _parse: function (t) {
                return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
            },
            _format: function (t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
            },
            _refresh: function () {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            isValid: function () {
                var t = this.value();
                return null !== t && t === this._adjustValue(t)
            },
            _value: function (t, e) {
                var i;
                "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh()
            },
            _destroy: function () {
                this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: e(function (t) {
                this._stepUp(t)
            }),
            _stepUp: function (t) {
                this._start() && (this._spin((t || 1) * this.options.step), this._stop())
            },
            stepDown: e(function (t) {
                this._stepDown(t)
            }),
            _stepDown: function (t) {
                this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
            },
            pageUp: e(function (t) {
                this._stepUp((t || 1) * this.options.page)
            }),
            pageDown: e(function (t) {
                this._stepDown((t || 1) * this.options.page)
            }),
            value: function (t) {
                if (!arguments.length) return this._parse(this.element.val());
                e(this._value).call(this, t)
            },
            widget: function () {
                return this.uiSpinner
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
            _enhance: function () {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
            }, _uiSpinnerHtml: function () {
                return "<span>"
            }, _buttonHtml: function () {
                return "<a></a><a></a>"
            }
        }), t.ui.spinner
    }),/*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../escape-selector", "../keycode", "../safe-active-element", "../unique-id", "../version", "../widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.tabs", {
            version: "1.12.1",
            delay: 300,
            options: {
                active: null,
                classes: {
                    "ui-tabs": "ui-corner-all",
                    "ui-tabs-nav": "ui-corner-all",
                    "ui-tabs-panel": "ui-corner-bottom",
                    "ui-tabs-tab": "ui-corner-top"
                },
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: function () {
                var t = /#.*$/;
                return function (e) {
                    var i, n;
                    i = e.href.replace(t, ""), n = location.href.replace(t, "");
                    try {
                        i = decodeURIComponent(i)
                    } catch (t) {
                    }
                    try {
                        n = decodeURIComponent(n)
                    } catch (t) {
                    }
                    return e.hash.length > 1 && i === n
                }
            }(),
            _create: function () {
                var e = this, i = this.options;
                this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                    return e.tabs.index(t)
                }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(), this._refresh(), this.active.length && this.load(i.active)
            },
            _initialActive: function () {
                var e = this.options.active, i = this.options.collapsible, n = location.hash.substring(1);
                return null === e && (n && this.tabs.each(function (i, s) {
                    if (t(s).attr("aria-controls") === n) return e = i, !1
                }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== e && -1 !== e || (e = !!this.tabs.length && 0)), !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0), !i && !1 === e && this.anchors.length && (e = 0), e
            },
            _getCreateEventData: function () {
                return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t()}
            },
            _tabKeydown: function (e) {
                var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"), n = this.tabs.index(i), s = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                            n++;
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.LEFT:
                            s = !1, n--;
                            break;
                        case t.ui.keyCode.END:
                            n = this.anchors.length - 1;
                            break;
                        case t.ui.keyCode.HOME:
                            n = 0;
                            break;
                        case t.ui.keyCode.SPACE:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                        case t.ui.keyCode.ENTER:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
                        default:
                            return
                    }
                    e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                        this.option("active", n)
                    }, this.delay))
                }
            },
            _panelKeydown: function (e) {
                this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
            },
            _handlePageNav: function (e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function (e, i) {
                function n() {
                    return e > s && (e = 0), e < 0 && (e = s), e
                }

                for (var s = this.tabs.length - 1; -1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function (t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
            },
            _setOption: function (t, e) {
                if ("active" === t) return void this._activate(e);
                this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e)
            },
            _sanitizeSelector: function (t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function () {
                var e = this.options, i = this.tablist.children(":has(a[href])");
                e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                    return i.index(t)
                }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
            },
            _refresh: function () {
                this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden": "true"}), this.active.length ? (this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({"aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function () {
                var e = this, i = this.tabs, n = this.anchors, s = this.panels;
                this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) {
                    t(this).is(".ui-state-disabled") && e.preventDefault()
                }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                    t(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                    role: "tab",
                    tabIndex: -1
                }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
                    return t("a", this)[0]
                }).attr({
                    role: "presentation",
                    tabIndex: -1
                }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, n) {
                    var s, o, r, a = t(n).uniqueId().attr("id"), l = t(n).closest("li"), h = l.attr("aria-controls");
                    e._isLocal(n) ? (s = n.hash, r = s.substring(1), o = e.element.find(e._sanitizeSelector(s))) : (r = l.attr("aria-controls") || t({}).uniqueId()[0].id, s = "#" + r, o = e.element.find(s), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                        "aria-controls": r,
                        "aria-labelledby": a
                    }), o.attr("aria-labelledby", a)
                }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
            },
            _getList: function () {
                return this.tablist || this.element.find("ol, ul").eq(0)
            },
            _createPanel: function (e) {
                return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
            },
            _setOptionDisabled: function (e) {
                var i, n, s;
                for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), s = 0; n = this.tabs[s]; s++) i = t(n), !0 === e || -1 !== t.inArray(s, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
                this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
            },
            _setupEvents: function (e) {
                var i = {};
                e && t.each(e.split(" "), function (t, e) {
                    i[e] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                    click: function (t) {
                        t.preventDefault()
                    }
                }), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function (e) {
                var i, n = this.element.parent();
                "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                    var e = t(this), n = e.css("position");
                    "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function () {
                    i -= t(this).outerHeight(!0)
                }), this.panels.each(function () {
                    t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
                    i = Math.max(i, t(this).height("").height())
                }).height(i))
            },
            _eventHandler: function (e) {
                var i = this.options, n = this.active, s = t(e.currentTarget), o = s.closest("li"), r = o[0] === n[0],
                    a = r && i.collapsible, l = a ? t() : this._getPanelForTab(o),
                    h = n.length ? this._getPanelForTab(n) : t(),
                    u = {oldTab: n, oldPanel: h, newTab: a ? t() : o, newPanel: l};
                e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || r && !i.collapsible || !1 === this._trigger("beforeActivate", e, u) || (i.active = !a && this.tabs.index(o), this.active = r ? t() : o, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, u))
            },
            _toggle: function (e, i) {
                function n() {
                    o.running = !1, o._trigger("activate", e, i)
                }

                function s() {
                    o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.length && o.options.show ? o._show(r, o.options.show, n) : (r.show(), n())
                }

                var o = this, r = i.newPanel, a = i.oldPanel;
                this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function () {
                    o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s()
                }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.hide(), s()), a.attr("aria-hidden", "true"), i.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), r.length && a.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function () {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1), r.attr("aria-hidden", "false"), i.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function (e) {
                var i, n = this._findActive(e);
                n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function (e) {
                return !1 === e ? t() : this.tabs.eq(e)
            },
            _getIndex: function (e) {
                return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
            },
            _destroy: function () {
                this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
                }), this.tabs.each(function () {
                    var e = t(this), i = e.data("ui-tabs-aria-controls");
                    i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function (e) {
                var i = this.options.disabled;
                !1 !== i && (e === undefined ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
                    return t !== e ? t : null
                }) : t.map(this.tabs, function (t, i) {
                    return i !== e ? i : null
                })), this._setOptionDisabled(i))
            },
            disable: function (e) {
                var i = this.options.disabled;
                if (!0 !== i) {
                    if (e === undefined) i = !0; else {
                        if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                        i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                    }
                    this._setOptionDisabled(i)
                }
            },
            load: function (e, i) {
                e = this._getIndex(e);
                var n = this, s = this.tabs.eq(e), o = s.find(".ui-tabs-anchor"), r = this._getPanelForTab(s),
                    a = {tab: s, panel: r}, l = function (t, e) {
                        "abort" === e && n.panels.stop(!1, !0), n._removeClass(s, "ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                    };
                this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, a)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.done(function (t, e, s) {
                    setTimeout(function () {
                        r.html(t), n._trigger("load", i, a), l(s, e)
                    }, 1)
                }).fail(function (t, e) {
                    setTimeout(function () {
                        l(t, e)
                    }, 1)
                })))
            },
            _ajaxSettings: function (e, i, n) {
                var s = this;
                return {
                    url: e.attr("href").replace(/#.*$/, ""), beforeSend: function (e, o) {
                        return s._trigger("beforeLoad", i, t.extend({jqXHR: e, ajaxSettings: o}, n))
                    }
                }
            },
            _getPanelForTab: function (e) {
                var i = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
            _processTabs: function () {
                this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
            }
        }), t.ui.tabs
    }),/*!
 * jQuery UI Tooltip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "../keycode", "../position", "../unique-id", "../version", "../widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.tooltip", {
            version: "1.12.1",
            options: {
                classes: {"ui-tooltip": "ui-corner-all ui-widget-shadow"},
                content: function () {
                    var e = t(this).attr("title") || "";
                    return t("<a>").text(e).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
                show: !0,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function (e, i) {
                var n = (e.attr("aria-describedby") || "").split(/\s+/);
                n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
            },
            _removeDescribedBy: function (e) {
                var i = e.data("ui-tooltip-id"), n = (e.attr("aria-describedby") || "").split(/\s+/),
                    s = t.inArray(i, n);
                -1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), n = t.trim(n.join(" ")), n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
            },
            _create: function () {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
            },
            _setOption: function (e, i) {
                var n = this;
                this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
                    n._updateContent(e.element)
                })
            },
            _setOptionDisabled: function (t) {
                this[t ? "_disable" : "_enable"]()
            },
            _disable: function () {
                var e = this;
                t.each(this.tooltips, function (i, n) {
                    var s = t.Event("blur");
                    s.target = s.currentTarget = n.element[0], e.close(s, !0)
                }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
                    var e = t(this);
                    if (e.is("[title]")) return e.data("ui-tooltip-title", e.attr("title")).removeAttr("title")
                }))
            },
            _enable: function () {
                this.disabledTitles.each(function () {
                    var e = t(this);
                    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                }), this.disabledTitles = t([])
            },
            open: function (e) {
                var i = this, n = t(e ? e.target : this.element).closest(this.options.items);
                n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function () {
                    var e, n = t(this);
                    n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                        element: this,
                        title: n.attr("title")
                    }, n.attr("title", ""))
                }), this._registerCloseHandlers(e, n), this._updateContent(n, e))
            },
            _updateContent: function (t, e) {
                var i, n = this.options.content, s = this, o = e ? e.type : null;
                if ("string" == typeof n || n.nodeType || n.jquery) return this._open(e, t, n);
                (i = n.call(t[0], function (i) {
                    s._delay(function () {
                        t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
                    })
                })) && this._open(e, t, i)
            },
            _open: function (e, i, n) {
                function s(t) {
                    h.of = t, r.is(":hidden") || r.position(h)
                }

                var o, r, a, l, h = t.extend({}, this.options.position);
                if (n) {
                    if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
                    i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), r = o.tooltip, this._addDescribedBy(i, r.attr("id")), r.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), l = t("<div>").html(r.find(".ui-tooltip-content").html()), l.removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {mousemove: s}), s(e)) : r.position(t.extend({of: i}, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.track && this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function () {
                        r.is(":visible") && (s(h.of), clearInterval(a))
                    }, t.fx.interval)), this._trigger("open", e, {tooltip: r})
                }
            },
            _registerCloseHandlers: function (e, i) {
                var n = {
                    keyup: function (e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var n = t.Event(e);
                            n.currentTarget = i[0], this.close(n, !0)
                        }
                    }
                };
                i[0] !== this.element[0] && (n.remove = function () {
                    this._removeTooltip(this._find(i).tooltip)
                }), e && "mouseover" !== e.type || (n.mouseleave = "close"), e && "focusin" !== e.type || (n.focusout = "close"), this._on(!0, i, n)
            },
            close: function (e) {
                var i, n = this, s = t(e ? e.currentTarget : this.element), o = this._find(s);
                if (!o) return void s.removeData("ui-tooltip-open");
                i = o.tooltip, o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
                    n._removeTooltip(t(this))
                }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
                    t(i.element).attr("title", i.title), delete n.parents[e]
                }), o.closing = !0, this._trigger("close", e, {tooltip: i}), o.hiding || (o.closing = !1))
            },
            _tooltip: function (e) {
                var i = t("<div>").attr("role", "tooltip"), n = t("<div>").appendTo(i), s = i.uniqueId().attr("id");
                return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[s] = {
                    element: e,
                    tooltip: i
                }
            },
            _find: function (t) {
                var e = t.data("ui-tooltip-id");
                return e ? this.tooltips[e] : null
            },
            _removeTooltip: function (t) {
                t.remove(), delete this.tooltips[t.attr("id")]
            },
            _appendTo: function (t) {
                var e = t.closest(".ui-front, dialog");
                return e.length || (e = this.document[0].body), e
            },
            _destroy: function () {
                var e = this;
                t.each(this.tooltips, function (i, n) {
                    var s = t.Event("blur"), o = n.element;
                    s.target = s.currentTarget = o[0], e.close(s, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
                }), this.liveRegion.remove()
            }
        }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
            options: {tooltipClass: null},
            _tooltip: function () {
                var t = this._superApply(arguments);
                return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
            }
        }), t.ui.tooltip
    }), $(function () {
    $.ajaxSetup({
        beforeSend: function (t) {
            var e = $('meta[name="csrf-token"]').attr("content");
            e && t.setRequestHeader("X-CSRF-Token", e)
        }
    });
    $(document).on("mouseenter", "[rel~=tooltip]", function () {
        var t = $(this), e = t.attr("title"), i = $('<div id="tooltip"></div>');
        if (!e || "" == e) return !1;
        t.removeAttr("title"), i.css("opacity", 0).html(e).appendTo("body");
        var n = function () {
            $(window).width() < 1.5 * i.outerWidth() ? i.css("max-width", $(window).width() / 2) : i.css("max-width", 340);
            var e = t.offset().left + t.outerWidth() / 2 - i.outerWidth() / 2,
                n = t.offset().top - i.outerHeight() - 20;
            if (e < 0 ? (e = t.offset().left, i.addClass("left")) : i.removeClass("left"), e + i.outerWidth() > $(window).width() ? (e = t.offset().left - i.outerWidth() + t.outerWidth() / 2 + 20, i.addClass("right")) : i.removeClass("right"), n < 0) {
                var n = t.offset().top + t.outerHeight();
                i.addClass("top")
            } else i.removeClass("top");
            i.css({left: e, top: n}).animate({top: "+=10", opacity: 1}, 50)
        };
        n(), $(window).resize(n);
        var s = function () {
            i.animate({top: "-=10", opacity: 0}, 50, function () {
                $(this).remove()
            }), t.attr("title", e)
        };
        t.bind("mouseleave", s), i.bind("click", s)
    }), $(".thumb_resize").each(function () {
        var t = $(this).find("img");
        t.width() >= t.height() ? t.css({width: "auto", height: "100%", maxWidth: "none"}) : t.css("height", "auto")
    })
});