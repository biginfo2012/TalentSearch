/*!
 * clipboard.js v1.5.15
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT Â© Zeno Rocha
 */
!function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Clipboard = e()
    }
}(function () {
    var e;
    return function e(t, n, i) {
        function o(a, c) {
            if (!n[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!c && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var s = new Error("Cannot find module '" + a + "'");
                    throw s.code = "MODULE_NOT_FOUND", s
                }
                var u = n[a] = {exports: {}};
                t[a][0].call(u.exports, function (e) {
                    var n = t[a][1][e];
                    return o(n || e)
                }, u, u.exports, e, t, n, i)
            }
            return n[a].exports
        }

        for (var r = "function" == typeof require && require, a = 0; a < i.length; a++) o(i[a]);
        return o
    }({
        1: [function (e, t) {
            function n(e, t) {
                for (; e && e !== document;) {
                    if (e.matches(t)) return e;
                    e = e.parentNode
                }
            }

            if (Element && !Element.prototype.matches) {
                var i = Element.prototype;
                i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
            }
            t.exports = n
        }, {}], 2: [function (e, t) {
            function n(e, t, n, o, r) {
                var a = i.apply(this, arguments);
                return e.addEventListener(n, a, r), {
                    destroy: function () {
                        e.removeEventListener(n, a, r)
                    }
                }
            }

            function i(e, t, n, i) {
                return function (n) {
                    n.delegateTarget = o(n.target, t), n.delegateTarget && i.call(e, n)
                }
            }

            var o = e("./closest");
            t.exports = n
        }, {"./closest": 1}], 3: [function (e, t, n) {
            n.node = function (e) {
                return e !== undefined && e instanceof HTMLElement && 1 === e.nodeType
            }, n.nodeList = function (e) {
                var t = Object.prototype.toString.call(e);
                return e !== undefined && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
            }, n.string = function (e) {
                return "string" == typeof e || e instanceof String
            }, n.fn = function (e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }
        }, {}], 4: [function (e, t) {
            function n(e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!a.string(t)) throw new TypeError("Second argument must be a String");
                if (!a.fn(n)) throw new TypeError("Third argument must be a Function");
                if (a.node(e)) return i(e, t, n);
                if (a.nodeList(e)) return o(e, t, n);
                if (a.string(e)) return r(e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function i(e, t, n) {
                return e.addEventListener(t, n), {
                    destroy: function () {
                        e.removeEventListener(t, n)
                    }
                }
            }

            function o(e, t, n) {
                return Array.prototype.forEach.call(e, function (e) {
                    e.addEventListener(t, n)
                }), {
                    destroy: function () {
                        Array.prototype.forEach.call(e, function (e) {
                            e.removeEventListener(t, n)
                        })
                    }
                }
            }

            function r(e, t, n) {
                return c(document.body, e, t, n)
            }

            var a = e("./is"), c = e("delegate");
            t.exports = n
        }, {"./is": 3, delegate: 2}], 5: [function (e, t) {
            function n(e) {
                var t;
                if ("SELECT" === e.nodeName) e.focus(), t = e.value; else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) e.focus(), e.setSelectionRange(0, e.value.length), t = e.value; else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var n = window.getSelection(), i = document.createRange();
                    i.selectNodeContents(e), n.removeAllRanges(), n.addRange(i), t = n.toString()
                }
                return t
            }

            t.exports = n
        }, {}], 6: [function (e, t) {
            function n() {
            }

            n.prototype = {
                on: function (e, t, n) {
                    var i = this.e || (this.e = {});
                    return (i[e] || (i[e] = [])).push({fn: t, ctx: n}), this
                }, once: function (e, t, n) {
                    function i() {
                        o.off(e, i), t.apply(n, arguments)
                    }

                    var o = this;
                    return i._ = t, this.on(e, i, n)
                }, emit: function (e) {
                    var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0,
                        o = n.length;
                    for (i; i < o; i++) n[i].fn.apply(n[i].ctx, t);
                    return this
                }, off: function (e, t) {
                    var n = this.e || (this.e = {}), i = n[e], o = [];
                    if (i && t) for (var r = 0, a = i.length; r < a; r++) i[r].fn !== t && i[r].fn._ !== t && o.push(i[r]);
                    return o.length ? n[e] = o : delete n[e], this
                }
            }, t.exports = n
        }, {}], 7: [function (t, n, i) {
            !function (o, r) {
                if ("function" == typeof e && e.amd) e(["module", "select"], r); else if (void 0 !== i) r(n, t("select")); else {
                    var a = {exports: {}};
                    r(a, o.select), o.clipboardAction = a.exports
                }
            }(this, function (e, t) {
                "use strict";

                function n(e) {
                    return e && e.__esModule ? e : {"default": e}
                }

                function i(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                var o = n(t), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    return function (t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(), c = function () {
                    function e(t) {
                        i(this, e), this.resolveOptions(t), this.initSelection()
                    }

                    return a(e, [{
                        key: "resolveOptions", value: function () {
                            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            this.action = e.action, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                        }
                    }, {
                        key: "initSelection", value: function () {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake", value: function () {
                            var e = this, t = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function () {
                                return e.removeFake()
                            }, this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                            var n = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.addEventListener("focus", window.scrollTo(0, n)), this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, o["default"])(this.fakeElem), this.copyText()
                        }
                    }, {
                        key: "removeFake", value: function () {
                            this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget", value: function () {
                            this.selectedText = (0, o["default"])(this.target), this.copyText()
                        }
                    }, {
                        key: "copyText", value: function () {
                            var e = void 0;
                            try {
                                e = document.execCommand(this.action)
                            } catch (t) {
                                e = !1
                            }
                            this.handleResult(e)
                        }
                    }, {
                        key: "handleResult", value: function (e) {
                            this.emitter.emit(e ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection", value: function () {
                            this.target && this.target.blur(), window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy", value: function () {
                            this.removeFake()
                        }
                    }, {
                        key: "action", set: function () {
                            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "copy";
                            if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        }, get: function () {
                            return this._action
                        }
                    }, {
                        key: "target", set: function (e) {
                            if (e !== undefined) {
                                if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = e
                            }
                        }, get: function () {
                            return this._target
                        }
                    }]), e
                }();
                e.exports = c
            })
        }, {select: 5}], 8: [function (t, n, i) {
            !function (o, r) {
                if ("function" == typeof e && e.amd) e(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r); else if (void 0 !== i) r(n, t("./clipboard-action"), t("tiny-emitter"), t("good-listener")); else {
                    var a = {exports: {}};
                    r(a, o.clipboardAction, o.tinyEmitter, o.goodListener), o.clipboard = a.exports
                }
            }(this, function (e, t, n, i) {
                "use strict";

                function o(e) {
                    return e && e.__esModule ? e : {"default": e}
                }

                function r(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function a(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function c(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                function l(e, t) {
                    var n = "data-clipboard-" + e;
                    if (t.hasAttribute(n)) return t.getAttribute(n)
                }

                var s = o(t), u = o(n), f = o(i), d = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    return function (t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(), h = function (e) {
                    function t(e, n) {
                        r(this, t);
                        var i = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return i.resolveOptions(n), i.listenClick(e), i
                    }

                    return c(t, e), d(t, [{
                        key: "resolveOptions", value: function () {
                            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText
                        }
                    }, {
                        key: "listenClick", value: function (e) {
                            var t = this;
                            this.listener = (0, f["default"])(e, "click", function (e) {
                                return t.onClick(e)
                            })
                        }
                    }, {
                        key: "onClick", value: function (e) {
                            var t = e.delegateTarget || e.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s["default"]({
                                action: this.action(t),
                                target: this.target(t),
                                text: this.text(t),
                                trigger: t,
                                emitter: this
                            })
                        }
                    }, {
                        key: "defaultAction", value: function (e) {
                            return l("action", e)
                        }
                    }, {
                        key: "defaultTarget", value: function (e) {
                            var t = l("target", e);
                            if (t) return document.querySelector(t)
                        }
                    }, {
                        key: "defaultText", value: function (e) {
                            return l("text", e)
                        }
                    }, {
                        key: "destroy", value: function () {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }
                    }]), t
                }(u["default"]);
                e.exports = h
            })
        }, {"./clipboard-action": 7, "good-listener": 4, "tiny-emitter": 6}]
    }, {}, [8])(8)
});