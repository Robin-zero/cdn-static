/*!
 * Valine v1.3.6
 * (c) 2017-2019 xCss
 * Released under the GPL-2.0 License.
 * Last Update: 2019-04-01 14:26:14
 */
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Valine = t() : e.Valine = t()
}(this, function() {
    return function(e) {
        function t(r) {
            if (n[r])
                return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t),
            i.l = !0,
            i.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.i = function(e) {
            return e
        }
        ,
        t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return t.d(n, "a", n),
            n
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 17)
    }([function(e, t, n) {
        var r, i, o;
        /*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
        !function(n, a) {
            i = [e, t],
            r = a,
            void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o)
        }(0, function(e, t) {
            "use strict";
            function n(e) {
                function t(t) {
                    var n = e.style.width;
                    e.style.width = "0px",
                    e.offsetWidth,
                    e.style.width = n,
                    e.style.overflowY = t
                }
                function n(e) {
                    for (var t = []; e && e.parentNode && e.parentNode instanceof Element; )
                        e.parentNode.scrollTop && t.push({
                            node: e.parentNode,
                            scrollTop: e.parentNode.scrollTop
                        }),
                        e = e.parentNode;
                    return t
                }
                function r() {
                    if (0 !== e.scrollHeight) {
                        var t = n(e)
                          , r = document.documentElement && document.documentElement.scrollTop;
                        e.style.height = "",
                        e.style.height = e.scrollHeight + s + "px",
                        l = e.clientWidth,
                        t.forEach(function(e) {
                            e.node.scrollTop = e.scrollTop
                        }),
                        r && (document.documentElement.scrollTop = r)
                    }
                }
                function i() {
                    r();
                    var n = Math.round(parseFloat(e.style.height))
                      , i = window.getComputedStyle(e, null)
                      , o = "content-box" === i.boxSizing ? Math.round(parseFloat(i.height)) : e.offsetHeight;
                    if (o < n ? "hidden" === i.overflowY && (t("scroll"),
                    r(),
                    o = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== i.overflowY && (t("hidden"),
                    r(),
                    o = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight),
                    c !== o) {
                        c = o;
                        var s = a("autosize:resized");
                        try {
                            e.dispatchEvent(s)
                        } catch (e) {}
                    }
                }
                if (e && e.nodeName && "TEXTAREA" === e.nodeName && !o.has(e)) {
                    var s = null
                      , l = null
                      , c = null
                      , d = function() {
                        e.clientWidth !== l && i()
                    }
                      , u = function(t) {
                        window.removeEventListener("resize", d, !1),
                        e.removeEventListener("input", i, !1),
                        e.removeEventListener("keyup", i, !1),
                        e.removeEventListener("autosize:destroy", u, !1),
                        e.removeEventListener("autosize:update", i, !1),
                        Object.keys(t).forEach(function(n) {
                            e.style[n] = t[n]
                        }),
                        o.delete(e)
                    }
                    .bind(e, {
                        height: e.style.height,
                        resize: e.style.resize,
                        overflowY: e.style.overflowY,
                        overflowX: e.style.overflowX,
                        wordWrap: e.style.wordWrap
                    });
                    e.addEventListener("autosize:destroy", u, !1),
                    "onpropertychange"in e && "oninput"in e && e.addEventListener("keyup", i, !1),
                    window.addEventListener("resize", d, !1),
                    e.addEventListener("input", i, !1),
                    e.addEventListener("autosize:update", i, !1),
                    e.style.overflowX = "hidden",
                    e.style.wordWrap = "break-word",
                    o.set(e, {
                        destroy: u,
                        update: i
                    }),
                    function() {
                        var t = window.getComputedStyle(e, null);
                        "vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"),
                        s = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth),
                        isNaN(s) && (s = 0),
                        i()
                    }()
                }
            }
            function r(e) {
                var t = o.get(e);
                t && t.destroy()
            }
            function i(e) {
                var t = o.get(e);
                t && t.update()
            }
            var o = "function" == typeof Map ? new Map : function() {
                var e = []
                  , t = [];
                return {
                    has: function(t) {
                        return e.indexOf(t) > -1
                    },
                    get: function(n) {
                        return t[e.indexOf(n)]
                    },
                    set: function(n, r) {
                        -1 === e.indexOf(n) && (e.push(n),
                        t.push(r))
                    },
                    delete: function(n) {
                        var r = e.indexOf(n);
                        r > -1 && (e.splice(r, 1),
                        t.splice(r, 1))
                    }
                }
            }()
              , a = function(e) {
                return new Event(e,{
                    bubbles: !0
                })
            };
            try {
                new Event("test")
            } catch (e) {
                a = function(e) {
                    var t = document.createEvent("Event");
                    return t.initEvent(e, !0, !1),
                    t
                }
            }
            var s = null;
            "undefined" == typeof window || "function" != typeof window.getComputedStyle ? (s = function(e) {
                return e
            }
            ,
            s.destroy = function(e) {
                return e
            }
            ,
            s.update = function(e) {
                return e
            }
            ) : (s = function(e, t) {
                return e && Array.prototype.forEach.call(e.length ? e : [e], function(e) {
                    return n(e)
                }),
                e
            }
            ,
            s.destroy = function(e) {
                return e && Array.prototype.forEach.call(e.length ? e : [e], r),
                e
            }
            ,
            s.update = function(e) {
                return e && Array.prototype.forEach.call(e.length ? e : [e], i),
                e
            }
            ),
            t.default = s,
            e.exports = t.default
        })
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            var t = this;
            return !!e && t.init(e),
            t
        }
        function i(e) {
            return new r(e)
        }
        var o = n(9).version
          , a = n(6)
          , s = n(8)
          , l = n(0)
          , c = n(5)
          , d = n(3)
          , u = n(4)
          , p = n(2)
          , f = n(7)
          , h = /^https?\:\/\//
          , v = {
            comment: "",
            nick: "Anonymous",
            mail: "",
            link: "",
            ua: navigator.userAgent,
            url: ""
        }
          , g = {
            "zh-cn": {
                head: {
										nick: "昵称（必填）",
										mail: "邮箱（必填）",
										link: "链接"
                },
                tips: {
                    comments: "评论",
                    sofa: "快来做第一个评论的人吧~",
                    busy: "还在提交中，请稍候...",
                    again: "这么简单也能错，也是没谁了."
                },
                ctrl: {
                    reply: "回复",
                    ok: "好的",
                    sure: "确认",
                    cancel: "取消",
                    confirm: "确认",
                    continue: "继续",
                    more: "查看更多...",
                    try: "再试试?",
                    preview: "预览",
                    emoji: "表情"
                },
                error: {
                    99: "初始化失败，请检查init中的`el`元素.",
                    100: "初始化失败，请检查你的AppId和AppKey.",
                    401: "未经授权的操作，请检查你的AppId和AppKey.",
                    403: "访问被api域名白名单拒绝，请检查你的安全域名设置."
                },
                timeago: {
                    seconds: "秒前",
                    minutes: "分钟前",
                    hours: "小时前",
                    days: "天前",
                    now: "刚刚"
                }
            },
            en: {
                head: {
                    nick: "NickName",
                    mail: "E-Mail",
                    link: "Website(http://)"
                },
                tips: {
                    comments: "Comments",
                    sofa: "No comments yet.",
                    busy: "Submit is busy, please wait...",
                    again: "Sorry, this is a wrong calculation."
                },
                ctrl: {
                    reply: "Reply",
                    ok: "Ok",
                    sure: "Sure",
                    cancel: "Cancel",
                    confirm: "Confirm",
                    continue: "Continue",
                    more: "Load More...",
                    try: "Once More?",
                    preview: "Preview",
                    emoji: "Emoji"
                },
                error: {
                    99: "Initialization failed, Please check the `el` element in the init method.",
                    100: "Initialization failed, Please check your appId and appKey.",
                    401: "Unauthorized operation, Please check your appId and appKey.",
                    403: "Access denied by api domain white list, Please check your security domain."
                },
                timeago: {
                    seconds: "seconds ago",
                    minutes: "minutes ago",
                    hours: "hours ago",
                    days: "days ago",
                    now: "just now"
                }
            }
        }
          , m = {
            cdn: "https://gravatar.loli.net/avatar/",
            ds: ["mp", "identicon", "monsterid", "wavatar", "robohash", "retro", ""],
            params: "",
            hide: !1
        }
          , b = ["nick", "mail", "link"]
          , x = Storage && localStorage && localStorage instanceof Storage && localStorage
          , y = location.pathname.replace(/index\.html?$/, "");
        r.prototype.init = function(e) {
            if ("undefined" == typeof document)
                return void console;
            var t = this;
            try {
                var n = e.lang
                  , r = e.langMode
                  , i = e.avatar
                  , a = e.avatarForce
                  , l = e.avatar_cdn
                  , c = e.notify
                  , d = e.verify
                  , p = e.visitor
                  , x = e.pageSize
                  , w = e.recordIP
                  , _ = m.ds
                  , A = a ? "&q=" + Math.random().toString(32).substring(2) : "";
                if (n && r && t.installLocale(n, r),
                t.locale = t.locale || g[n || "zh-cn"],
                t.notify = c || !1,
                t.verify = d || !1,
                w) {
                    var O = u.create("script", "src", "//api.ip.sb/jsonip?callback=getIP")
                      , S = document.getElementsByTagName("script")[0];
                    S.parentNode.insertBefore(O, S),
                    window.getIP = function(e) {
                        v.ip = e.ip
                    }
                }
                m.params = "?d=" + (_.indexOf(i) > -1 ? i : "mp") + "&v=" + o + A,
                m.hide = "hide" === i,
                m.cdn = h.test(l) ? l : m.cdn,
                y = e.path || y;
                var $ = Number(x || 10);
                if (e.pageSize = isNaN($) ? 10 : $ < 1 ? 10 : $,
                s.setOptions({
                    renderer: new s.Renderer,
                    highlight: !1 === e.highlight ? null : f,
                    gfm: !0,
                    tables: !0,
                    breaks: !0,
                    pedantic: !1,
                    sanitize: !1,
                    smartLists: !0,
                    smartypants: !0
                }),
                !AV)
                    return void setTimeout(function() {
                        t.init(e)
                    }, 20);
                var E = e.app_id || e.appId
                  , C = e.app_key || e.appKey;
                if (!E || !C)
                    throw 99;
                // lncld.net 域名被禁
                // https://leancloudblog.com/lncld-net-client-hold/
                // 配置 API 域名
                // https://leancloud.cn/docs/custom-api-domain-guide.html#hash-1410615135
                AV.applicationId && delete AV._config.applicationId || (AV.applicationId = null),
                AV.applicationKey && delete AV._config.applicationKey || (AV.applicationKey = null),
                AV.init({
                    appId: E,
                    appKey: C,
                    serverURLs: {
                      push: 'https://leanapi.rmiao.tech',
                      stats: 'https://leanapi.rmiao.tech',
                      engine: 'https://leanapi.rmiao.tech',
                      api: 'https://leanapi.rmiao.tech',
                    },
                });
                for (var M = u.findAll(document, ".valine-comment-count"), L = 0, T = M.length; L < T; L++)
                    !function(e, n) {
                        var r = M[e];
                        if (r) {
                            var i = u.attr(r, "data-xid");
                            i && t.Q(i).count().then(function(e) {
                                r.innerText = e
                            }).catch(function(e) {
                                r.innerText = 0
                            })
                        }
                    }(L);
                p && k.add(AV.Object.extend("Counter"));
                var z = e.el || null
                  , R = u.findAll(document, z);
                if (!(z = z instanceof HTMLElement ? z : R[R.length - 1] || null))
                    return;
                t.el = z,
                t.el.classList.add("v"),
                m.hide && t.el.classList.add("hide-avatar"),
                e.meta = (e.guest_info || e.meta || b).filter(function(e) {
                    return b.indexOf(e) > -1
                });
                var B = (0 == e.meta.length ? b : e.meta).map(function(e) {
                    var n = "mail" == e ? "email" : "text";
                    return b.indexOf(e) > -1 ? '<input name="' + e + '" placeholder="' + t.locale.head[e] + '" class="v' + e + ' vinput" type="' + n + '">' : ""
                });
                t.placeholder = e.placeholder || "Just Go Go",
                t.el.innerHTML = '<div class="vwrap"><div class="vheader item' + B.length + '">' + B.join("") + '</div><div class="vedit"><textarea id="veditor" class="veditor vinput" placeholder="' + t.placeholder + '"></textarea><div class="vctrl"><span class="vemoji-btn">' + t.locale.ctrl.emoji + '</span> | <span class="vpreview-btn">' + t.locale.ctrl.preview + '</span></div><div class="vemojis" style="display:none;"></div><div class="vinput vpreview" style="display:none;"></div></div><div class="vcontrol"><div class="col col-20" title="Markdown is supported"><a href="https://segmentfault.com/markdown" target="_blank"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></a></div><div class="col col-80 text-right"><button type="button" title="Cmd|Ctrl+Enter" class="vsubmit vbtn">' + t.locale.ctrl.reply + '</button></div></div><div style="display:none;" class="vmark"></div></div><div class="vinfo" style="display:none;"><div class="vcount col"></div></div><div class="vlist"></div><div class="vempty" style="display:none;"></div><div class="vpage txt-center"></div><div class="info"><div class="power txt-right">Powered By <a href="https://valine.js.org" target="_blank">Valine</a><br>v' + o + "</div></div>";
                var j = u.find(t.el, ".vempty");
                t.nodata = {
                    show: function(e) {
                        return j.innerHTML = e || t.locale.tips.sofa,
                        u.attr(j, "style", "display:block;"),
                        t
                    },
                    hide: function() {
                        return u.attr(j, "style", "display:none;"),
                        t
                    }
                };
                var I = u.create("div", "class", "vloading")
                  , P = u.find(t.el, ".vlist");
                t.loading = {
                    show: function(e) {
                        var n = u.findAll(P, ".vcard");
                        return e ? P.insertBefore(I, n[0]) : P.appendChild(I),
                        t.nodata.hide(),
                        t
                    },
                    hide: function() {
                        var e = u.find(P, ".vloading");
                        return e && u.remove(e),
                        0 === u.findAll(P, ".vcard").length && t.nodata.show(),
                        t
                    }
                };
                var U = u.find(t.el, ".vmark");
                t.alert = {
                    show: function(e) {
                        U.innerHTML = '<div class="valert txt-center"><div class="vtext">' + (e && e.text || 1) + '</div><div class="vbtns"></div></div>';
                        var n = u.find(U, ".vbtns")
                          , r = '<button class="vcancel vbtn">' + (e && e.ctxt || t.locale.ctrl.cancel) + "</button>"
                          , i = '<button class="vsure vbtn">' + (e && e.otxt || t.locale.ctrl.sure) + "</button>";
                        if (n.innerHTML = "" + r + (e && e.type && i),
                        u.on("click", u.find(U, ".vcancel"), function(e) {
                            t.alert.hide()
                        }),
                        u.attr(U, "style", "display:block;"),
                        e && e.type) {
                            var o = u.find(U, ".vsure");
                            u.on("click", o, function(n) {
                                t.alert.hide(),
                                e.cb && e.cb()
                            })
                        }
                        return t
                    },
                    hide: function() {
                        return u.attr(U, "style", "display:none;"),
                        t
                    }
                },
                t.bind(e)
            } catch (e) {
                t.ErrorHandler(e)
            }
            return t
        }
        ;
        var w = function(e, t) {
            var n = new e
              , r = new AV.ACL;
            r.setPublicReadAccess(!0),
            r.setPublicWriteAccess(!0),
            n.setACL(r),
            n.set("url", t.url),
            n.set("xid", t.xid),
            n.set("title", t.title),
            n.set("time", 1),
            n.save().then(function(e) {
                u.find(t.el, ".leancloud-visitors-count").innerText = 1
            }).catch(function(e) {})
        }
          , k = {
            add: function(e) {
                var t = u.findAll(document, ".leancloud_visitors,.leancloud-visitors");
                if (t.length) {
                    var n = t[0]
                      , r = u.attr(n, "id")
                      , i = u.attr(n, "data-flag-title")
                      , o = encodeURI(r)
                      , a = {
                        el: n,
                        url: r,
                        xid: o,
                        title: i
                    };
                    if (decodeURI(r) === decodeURI(y)) {
                        var s = new AV.Query(e);
                        s.equalTo("url", r),
                        s.find().then(function(t) {
                            if (t.length > 0) {
                                var r = t[0];
                                r.increment("time"),
                                r.save().then(function(e) {
                                    u.find(n, ".leancloud-visitors-count").innerText = e.get("time")
                                }).catch(function(e) {})
                            } else
                                w(e, a)
                        }).catch(function(t) {
                            101 == t.code && w(e, a)
                        })
                    } else
                        k.show(e, t)
                }
            },
            show: function(e, t) {
                u.each(t, function(e, t) {
                    var n = u.find(t, ".leancloud-visitors-count");
                    n && (n.innerText = 0)
                });
                var n = [];
                for (var r in t)
                    t.hasOwnProperty(r) && n.push(u.attr(t[r], "id"));
                if (n.length) {
                    var i = new AV.Query(e);
                    i.containedIn("url", n),
                    i.find().then(function(e) {
                        e.length > 0 && u.each(e, function(e, t) {
                            var n = t.get("url")
                              , r = t.get("time")
                              , i = u.find(document, '.leancloud_visitors[id="' + n + '"]') || u.find(document, '.leancloud-visitors[id="' + n + '"]')
                              , o = u.find(i, ".leancloud-visitors-count");
                            o && (o.innerText = r)
                        })
                    }).catch(function(e) {})
                }
            }
        };
        r.prototype.Q = function(e) {
            if (1 == arguments.length) {
                var t = new AV.Query("Comment");
                t.doesNotExist("rid");
                var n = new AV.Query("Comment");
                n.equalTo("rid", "");
                var r = AV.Query.or(t, n);
                return r.equalTo("url", decodeURI(e)),
                r.addDescending("createdAt"),
                r.addDescending("insertedAt"),
                r
            }
            var i = JSON.stringify(arguments[1]).replace(/(\[|\])/g, "")
              , o = "select * from Comment where rid in (" + i + ") order by -createdAt,-createdAt";
            return AV.Query.doCloudQuery(o)
        }
        ,
        r.prototype.ErrorHandler = function(e) {
            var t = this;
            if (t.el && t.loading.hide().nodata.hide(),
            "[object Error]" === {}.toString.call(e)) {
                var n = e.code || ""
                  , r = t.locale.error[n]
                  , i = r || e.message || e.error || "";
                101 == n ? t.nodata.show() : t.el && t.nodata.show('<pre style="text-align:left;">Code ' + n + ": " + i + "</pre>") || console
            } else
                t.el && t.nodata.show('<pre style="text-align:left;">' + JSON.stringify(e) + "</pre>") || console
        }
        ,
        r.prototype.installLocale = function(e, t) {
            var n = this;
            return t = t || {},
            e && (g[e] = t,
            n.locale = g[e] || g["zh-cn"]),
            n
        }
        ,
        r.prototype.setPath = function(e) {
            return y = e || y,
            this
        }
        ,
        r.prototype.bind = function(e) {
            var t = this
              , n = u.find(t.el, ".vemojis")
              , r = u.find(t.el, ".vpreview")
              , i = u.find(t.el, ".vemoji-btn")
              , o = u.find(t.el, ".vpreview-btn")
              , f = p.data;
            for (var h in f)
                f.hasOwnProperty(h) && function(e, r) {
                    var i = u.create("i", {
                        name: e,
                        title: e
                    });
                    i.innerHTML = r,
                    n.appendChild(i),
                    u.on("click", i, function(e) {
                        var n = u.find(t.el, ".veditor");
                        E(n, r),
                        b(n)
                    })
                }(h, f[h]);
            t.emoji = {
                show: function() {
                    return t.preview.hide(),
                    u.attr(i, "v", 1),
                    u.removeAttr(o, "v"),
                    u.attr(n, "style", "display:block"),
                    t.emoji
                },
                hide: function() {
                    return u.removeAttr(i, "v"),
                    u.attr(n, "style", "display:hide"),
                    t.emoji
                }
            },
            t.preview = {
                show: function() {
                    return v.comment && (t.emoji.hide(),
                    u.attr(o, "v", 1),
                    u.removeAttr(i, "v"),
                    r.innerHTML = v.comment,
                    u.attr(r, "style", "display:block"),
                    T()),
                    t.preview
                },
                hide: function() {
                    return u.removeAttr(o, "v"),
                    u.attr(r, "style", "display:none"),
                    t.preview
                },
                empty: function() {
                    return r.innerHtml = "",
                    t.preview
                }
            };
            var g = function(e) {
                var t = u.create("div");
                t.insertAdjacentHTML("afterbegin", e);
                var n = u.findAll(t, "*")
                  , r = ["INPUT", "STYLE", "SCRIPT", "IFRAME", "FRAME", "AUDIO", "VIDEO", "EMBED", "META", "TITLE", "LINK"]
                  , i = function(e, t) {
                    var n = u.attr(e, t);
                    n && u.attr(e, t, n.replace(/(javascript|eval)/gi, ""))
                };
                return u.each(n, function(e, t) {
                    1 === t.nodeType && (r.indexOf(t.nodeName) > -1 && ("INPUT" === t.nodeName && "checkbox" === u.attr(t, "type") ? u.attr(t, "disabled", "disabled") : u.remove(t)),
                    "A" === t.nodeName && i(t, "href"),
                    u.clearAttr(t))
                }),
                t.innerHTML
            }
              , b = function(e) {
                var t = e.value || "";
                t = p.parse(t),
                e.value = t;
                var n = g(s(t));
                v.comment = n,
                r.innerHTML = n,
                t ? l(e) : l.destroy(e)
            };
            u.on("click", i, function(e) {
                u.attr(i, "v") ? t.emoji.hide() : t.emoji.show()
            }),
            u.on("click", o, function(e) {
                u.attr(o, "v") ? t.preview.hide() : t.preview.show()
            });
            for (var w = e.meta, k = {}, _ = {
                veditor: "comment"
            }, A = 0, O = w.length; A < O; A++)
                _["v" + w[A]] = w[A];
            for (var S in _)
                _.hasOwnProperty(S) && function() {
                    var e = _[S]
                      , n = u.find(t.el, "." + S);
                    k[e] = n,
                    n && u.on("input change blur", n, function(t) {
                        "comment" === e ? b(n) : v[e] = u.escape(n.value.replace(/(^\s*)|(\s*$)/g, ""))
                    })
                }();
            var E = function(e, t) {
                if (document.selection) {
                    e.focus();
                    document.selection.createRange().text = t,
                    e.focus()
                } else if (e.selectionStart || "0" == e.selectionStart) {
                    var n = e.selectionStart
                      , r = e.selectionEnd
                      , i = e.scrollTop;
                    e.value = e.value.substring(0, n) + t + e.value.substring(r, e.value.length),
                    e.focus(),
                    e.selectionStart = n + t.length,
                    e.selectionEnd = n + t.length,
                    e.scrollTop = i
                } else
                    e.focus(),
                    e.value += t
            }
              , C = function(e) {
                var n = u.find(t.el, ".vh[rootid='" + e + "']")
                  , r = u.find(n, ".vquote");
                return r || (r = u.create("div", "class", "vquote"),
                n.appendChild(r)),
                r
            }
              , M = function n() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                  , i = e.pageSize
                  , o = Number(u.find(t.el, ".vnum").innerText);
                t.loading.show();
                var a = t.Q(y);
                a.limit(i),
                a.skip((r - 1) * i),
                a.find().then(function(e) {
                    for (var a = e.length, s = [], l = 0; l < a; l++) {
                        var c = e[l];
                        s.push(c.id),
                        L(c, u.find(t.el, ".vlist"), !0)
                    }
                    t.Q(y, s).then(function(e) {
                        for (var t = e && e.results || [], n = 0; n < t.length; n++) {
                            var r = t[n];
                            L(r, C(r.get("rid")))
                        }
                    });
                    var d = u.find(t.el, ".vpage");
                    d.innerHTML = i * r < o ? '<button type="button" class="vmore vbtn">' + t.locale.ctrl.more + "</button>" : "";
                    var p = u.find(d, ".vmore");
                    p && u.on("click", p, function(e) {
                        d.innerHTML = "",
                        n(++r)
                    }),
                    t.loading.hide()
                }).catch(function(e) {
                    t.loading.hide().ErrorHandler(e)
                })
            };
            t.Q(y).count().then(function(e) {
                e > 0 ? (u.attr(u.find(t.el, ".vinfo"), "style", "display:block;"),
                u.find(t.el, ".vcount").innerHTML = '<span class="vnum">' + e + "</span> " + t.locale.tips.comments,
                M()) : t.loading.hide()
            }).catch(function(e) {
                t.ErrorHandler(e)
            });
            var L = function(e, n, r) {
                var i = u.create("div", {
                    class: "vcard",
                    id: e.id
                })
                  , o = m.hide ? "" : '<img class="vimg" src="' + (m.cdn + a(e.get("mail")) + m.params) + '">'
                  , s = e.get("ua") || ""
                  , l = "";
                if (s) {
                    s = d(s);
                    l = '<span class="vsys">' + s.browser + " " + s.version + "</span>" + " " + ('<span class="vsys">' + s.os + " " + s.osVersion + "</span>")
                }
                var p = ""
                  , f = e.get("link") || "";
                p = f ? '<a class="vnick" rel="nofollow" href="' + f + '" target="_blank" >' + e.get("nick") + "</a>" : '<span class="vnick">' + e.get("nick") + "</span>",
                i.innerHTML = o + '\n            <div class="vh" rootid=' + (e.get("rid") || e.id) + '>\n                <div class="vhead">' + p + " " + l + '</div>\n                <div class="vmeta">\n                    <span class="vtime">' + c(e.get("insertedAt") || e.createdAt, t.locale) + '</span>\n                    <span class="vat">' + t.locale.ctrl.reply + '</span>\n                </div>\n                <div class="vcontent">\n                    ' + g(e.get("comment")) + "\n                </div>\n            </div>";
                for (var h = u.find(i, ".vat"), v = u.findAll(i, "a"), b = 0, x = v.length; b < x; b++) {
                    var y = v[b];
                    y && -1 == (u.attr(y, "class") || "").indexOf("at") && u.attr(y, {
                        target: "_blank",
                        rel: "nofollow"
                    })
                }
                var w = u.findAll(n, ".vcard");
                r ? n.appendChild(i) : n.insertBefore(i, w[0]);
                var k = u.find(i, ".vcontent");
                k && z(k),
                h && B(h, e),
                T()
            }
              , T = function() {
                setTimeout(function() {
                    try {
                        var e = e || "";
                        e && e.Hub.Queue(["Typeset", e.Hub]),
                        $("pre code").each(function(e, t) {
                            hljs.highlightBlock(t)
                        }),
                        $("code.hljs").each(function(e, t) {
                            hljs.lineNumbersBlock(t)
                        })
                    } catch (e) {}
                }, 20)
            }
              , z = function(e) {
                setTimeout(function() {
                    e.offsetHeight > 180 && (e.classList.add("expand"),
                    u.on("click", e, function(t) {
                        u.attr(e, "class", "vcontent")
                    }))
                })
            }
              , R = {}
              , B = function(e, t) {
                u.on("click", e, function(e) {
                    var n = "@" + u.escape(t.get("nick"));
                    R = {
                        at: u.escape(n) + " ",
                        rid: t.get("rid") || t.id,
                        pid: t.id,
                        rmail: t.get("mail")
                    },
                    u.attr(k.comment, "placeholder", n),
                    k.comment.focus()
                })
            };
            !function() {
                var e = x && x.ValineCache;
                if (e) {
                    e = JSON.parse(e);
                    var n = w;
                    for (var r in n) {
                        var i = n[r];
                        u.find(t.el, ".v" + i).value = u.unescape(e[i]),
                        v[i] = e[i]
                    }
                }
            }();
            var j = function() {
                v.comment = "",
                k.comment.value = "",
                b(k.comment),
                u.attr(k.comment, "placeholder", t.placeholder),
                R = {},
                t.preview.empty().hide()
            }
              , I = u.find(t.el, ".vsubmit")
              , P = function(e) {
								if (u.attr(I, "disabled")) {
									return void t.alert.show({
	                    type: 0,
	                    text: t.locale.tips.busy + 'ヾ(๑╹◡╹)ﾉ"',
	                    ctxt: t.locale.ctrl.ok
	                });
								}
								if (v.nick == "" || v.nick == "匿名" || v.nick == "Anonymous") {
									alert('请输入昵称！');
									return void _.nick.focus();
								}
								if (v.mail == "") {
									alert('请输入邮箱！');
									return void _.mail.focus();
								}
								if ("" == v.comment) {
									alert('请输入内容！');
									return void _.comment.focus();
								}
								v.nick = v.nick || "匿名";

								return (v.nick = v.nick || "Anonymous",
                void (t.notify || t.verify ? Q(N) : N()))

                // return u.attr(I, "disabled") ? void t.alert.show({
                //     type: 0,
                //     text: t.locale.tips.busy + 'ヾ(๑╹◡╹)ﾉ"',
                //     ctxt: t.locale.ctrl.ok
                // }) : "" == v.comment ? void k.comment.focus() : (v.nick = v.nick || "Anonymous",
                // void (t.notify || t.verify ? Q(N) : N()))
            }
              , U = function() {
                var e = new AV.ACL;
                return e.setPublicReadAccess(!0),
                e.setPublicWriteAccess(!1),
                e
            }
              , N = function() {
                u.attr(I, "disabled", !0),
                t.loading.show(!0);
                var e = AV.Object.extend("Comment")
                  , n = new e;
                if (v.url = decodeURI(y),
                v.insertedAt = new Date,
                R.rid) {
                    var r = R.pid || R.rid;
                    n.set("rid", R.rid),
                    n.set("pid", r),
                    v.comment = v.comment.replace("<p>", '<p><a class="at" href="#' + r + '">' + R.at + "</a> , ")
                }
                for (var i in v)
                    if (v.hasOwnProperty(i)) {
                        var o = v[i];
                        n.set(i, o)
                    }
                n.setACL(U()),
                n.save().then(function(e) {
                    "Anonymous" != v.nick && x && x.setItem("ValineCache", JSON.stringify({
                        nick: v.nick,
                        link: v.link,
                        mail: v.mail
                    }));
                    var n = u.find(t.el, ".vnum")
                      , r = 1;
                    try {
                        if (R.rid) {
                            var i = u.find(t.el, '.vquote[rid="' + R.rid + '"]') || C(R.rid);
                            L(e, i, !0)
                        } else
                            n ? (r = Number(n.innerText) + 1,
                            n.innerText = r) : u.find(t.el, ".vcount").innerHTML = '<span class="num">1</span> ' + t.locale.tips.comments,
                            L(e, u.find(t.el, ".vlist"));
                        v.mail && V({
                            username: v.nick,
                            mail: v.mail
                        }),
                        R.at && R.rmail && t.notify && F({
                            username: R.at.replace("@", ""),
                            mail: R.rmail
                        }),
                        u.removeAttr(I, "disabled"),
                        t.loading.hide(),
                        j()
                    } catch (e) {
                        t.ErrorHandler(e)
                    }
                }).catch(function(e) {
                    t.ErrorHandler(e)
                })
            }
              , Q = function e(n) {
                var r = Math.floor(10 * Math.random() + 1)
                  , i = Math.floor(10 * Math.random() + 1)
                  , o = Math.floor(10 * Math.random() + 1)
                  , a = ["+", "-", "x"]
                  , s = a[Math.floor(3 * Math.random())]
                  , l = a[Math.floor(3 * Math.random())]
                  , c = "" + r + s + i + l + o
                  , d = c + " = <input class='vcode vinput' >";
                t.alert.show({
                    type: 1,
                    text: d,
                    ctxt: t.locale.ctrl.cancel,
                    otxt: t.locale.ctrl.ok,
                    cb: function() {
                        var r = +u.find(t.el, ".vcode").value;
                        new Function("return " + c.replace(/x/g, "*"))() === r ? n && n() : t.alert.show({
                            type: 1,
                            text: "(T＿T)" + t.locale.tips.again,
                            ctxt: t.locale.ctrl.cancel,
                            otxt: t.locale.ctrl.try,
                            cb: function() {
                                e(n)
                            }
                        })
                    }
                })
            }
              , V = function(e) {
                var t = new AV.User;
                return t.setUsername(e.username),
                t.setPassword(e.mail),
                t.setEmail(e.mail),
                t.setACL(U()),
                t.signUp()
            }
              , F = function e(n) {
                AV.User.requestPasswordReset(n.mail).then(function(e) {}).catch(function(r) {
                    1 == r.code ? t.alert.show({
                        type: 0,
                        text: "ヾ(ｏ･ω･)ﾉ At太频繁啦，提醒功能暂时宕机。<br>" + r.error,
                        ctxt: t.locale.ctrl.ok
                    }) : V(n).then(function(t) {
                        e(n)
                    }).catch(function(e) {})
                })
            };
            u.on("click", I, P),
            u.on("keydown", document, function(e) {
                e = event || e;
                var n = e.keyCode || e.which || e.charCode;
                if (((e.ctrlKey || e.metaKey) && 13 === n && P(),
                9 === n) && "veditor" == (document.activeElement.id || "")) {
                    e.preventDefault();
                    var r = u.find(t.el, ".veditor");
                    E(r, "    ")
                }
            })
        }
        ,
        e.exports = i,
        e.exports.default = i
    }
    , function(e, t, n) {
        "use strict";
        var r = {
            data: n(11),
            parse: function(e) {
                return String(e).replace(/:(.+?):/g, function(e, t) {
                    return r.data[t] || e
                })
            }
        };
        e.exports = r
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            var t = this
              , n = {
                Trident: e.indexOf("Trident") > -1 || e.indexOf("NET CLR") > -1,
                Presto: e.indexOf("Presto") > -1,
                WebKit: e.indexOf("AppleWebKit") > -1,
                Gecko: e.indexOf("Gecko/") > -1,
                Safari: e.indexOf("Safari") > -1,
                Chrome: e.indexOf("Chrome") > -1 || e.indexOf("CriOS") > -1,
                IE: e.indexOf("MSIE") > -1 || e.indexOf("Trident") > -1,
                Edge: e.indexOf("Edge") > -1,
                Firefox: e.indexOf("Firefox") > -1 || e.indexOf("FxiOS") > -1,
                "Firefox Focus": e.indexOf("Focus") > -1,
                Chromium: e.indexOf("Chromium") > -1,
                Opera: e.indexOf("Opera") > -1 || e.indexOf("OPR") > -1,
                Vivaldi: e.indexOf("Vivaldi") > -1,
                Yandex: e.indexOf("YaBrowser") > -1,
                Kindle: e.indexOf("Kindle") > -1 || e.indexOf("Silk/") > -1,
                360: e.indexOf("360EE") > -1 || e.indexOf("360SE") > -1,
                UC: e.indexOf("UC") > -1 || e.indexOf(" UBrowser") > -1,
                QQBrowser: e.indexOf("QQBrowser") > -1,
                QQ: e.indexOf("QQ/") > -1,
                Baidu: e.indexOf("Baidu") > -1 || e.indexOf("BIDUBrowser") > -1,
                Maxthon: e.indexOf("Maxthon") > -1,
                Sogou: e.indexOf("MetaSr") > -1 || e.indexOf("Sogou") > -1,
                LBBROWSER: e.indexOf("LBBROWSER") > -1,
                "2345Explorer": e.indexOf("2345Explorer") > -1,
                TheWorld: e.indexOf("TheWorld") > -1,
                XiaoMi: e.indexOf("MiuiBrowser") > -1,
                Quark: e.indexOf("Quark") > -1,
                Qiyu: e.indexOf("Qiyu") > -1,
                Wechat: e.indexOf("MicroMessenger") > -1,
                Taobao: e.indexOf("AliApp(TB") > -1,
                Alipay: e.indexOf("AliApp(AP") > -1,
                Weibo: e.indexOf("Weibo") > -1,
                Douban: e.indexOf("com.douban.frodo") > -1,
                Suning: e.indexOf("SNEBUY-APP") > -1,
                iQiYi: e.indexOf("IqiyiApp") > -1,
                Windows: e.indexOf("Windows") > -1,
                Linux: e.indexOf("Linux") > -1 || e.indexOf("X11") > -1,
                "Mac OS": e.indexOf("Macintosh") > -1,
                Android: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
                Ubuntu: e.indexOf("Ubuntu") > -1,
                FreeBSD: e.indexOf("FreeBSD") > -1,
                Debian: e.indexOf("Debian") > -1,
                "Windows Phone": e.indexOf("IEMobile") > -1 || e.indexOf("Windows Phone") > -1,
                BlackBerry: e.indexOf("BlackBerry") > -1 || e.indexOf("RIM") > -1,
                MeeGo: e.indexOf("MeeGo") > -1,
                Symbian: e.indexOf("Symbian") > -1,
                iOS: e.indexOf("like Mac OS X") > -1,
                "Chrome OS": e.indexOf("CrOS") > -1,
                WebOS: e.indexOf("hpwOS") > -1,
                Mobile: e.indexOf("Mobi") > -1 || e.indexOf("iPh") > -1 || e.indexOf("480") > -1,
                Tablet: e.indexOf("Tablet") > -1 || e.indexOf("Pad") > -1 || e.indexOf("Nexus 7") > -1
            };
            n.Mobile && (n.Mobile = !(e.indexOf("iPad") > -1));
            var r = {
                engine: ["WebKit", "Trident", "Gecko", "Presto"],
                browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi"],
                os: ["Windows", "Linux", "Mac OS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"],
                device: ["Mobile", "Tablet"]
            };
            t.device = "PC";
            for (var i in r)
                for (var o = 0; o < r[i].length; o++) {
                    var a = r[i][o];
                    n[a] && (t[i] = a)
                }
            var s = {
                Windows: function() {
                    var t = e.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
                    return {
                        6.4: "10",
                        6.3: "8.1",
                        6.2: "8",
                        6.1: "7",
                        "6.0": "Vista",
                        5.2: "XP",
                        5.1: "XP",
                        "5.0": "2000"
                    }[t] || t
                },
                Android: function() {
                    return e.replace(/^.*Android ([\d.]+);.*$/, "$1")
                },
                iOS: function() {
                    return e.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".")
                },
                Debian: function() {
                    return e.replace(/^.*Debian\/([\d.]+).*$/, "$1")
                },
                "Windows Phone": function() {
                    return e.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2")
                },
                "Mac OS": function() {
                    return e.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".")
                },
                WebOS: function() {
                    return e.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1")
                }
            };
            t.osVersion = "",
            s[t.os] && (t.osVersion = s[t.os](),
            t.osVersion == e && (t.osVersion = ""));
            var l = {
                Safari: function() {
                    return e.replace(/^.*Version\/([\d.]+).*$/, "$1")
                },
                Chrome: function() {
                    return e.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1")
                },
                IE: function() {
                    return e.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1")
                },
                Edge: function() {
                    return e.replace(/^.*Edge\/([\d.]+).*$/, "$1")
                },
                Firefox: function() {
                    return e.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1")
                },
                "Firefox Focus": function() {
                    return e.replace(/^.*Focus\/([\d.]+).*$/, "$1")
                },
                Chromium: function() {
                    return e.replace(/^.*Chromium\/([\d.]+).*$/, "$1")
                },
                Opera: function() {
                    return e.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1")
                },
                Vivaldi: function() {
                    return e.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1")
                },
                Yandex: function() {
                    return e.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1")
                },
                Kindle: function() {
                    return e.replace(/^.*Version\/([\d.]+).*$/, "$1")
                },
                Maxthon: function() {
                    return e.replace(/^.*Maxthon\/([\d.]+).*$/, "$1")
                },
                QQBrowser: function() {
                    return e.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1")
                },
                QQ: function() {
                    return e.replace(/^.*QQ\/([\d.]+).*$/, "$1")
                },
                Baidu: function() {
                    return e.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1")
                },
                UC: function() {
                    return e.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1")
                },
                Sogou: function() {
                    return e.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1")
                },
                "2345Explorer": function() {
                    return e.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1")
                },
                TheWorld: function() {
                    return e.replace(/^.*TheWorld ([\d.]+).*$/, "$1")
                },
                XiaoMi: function() {
                    return e.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1")
                },
                Quark: function() {
                    return e.replace(/^.*Quark\/([\d.]+).*$/, "$1")
                },
                Qiyu: function() {
                    return e.replace(/^.*Qiyu\/([\d.]+).*$/, "$1")
                },
                Wechat: function() {
                    return e.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1")
                },
                Taobao: function() {
                    return e.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1")
                },
                Alipay: function() {
                    return e.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1")
                },
                Weibo: function() {
                    return e.replace(/^.*weibo__([\d.]+).*$/, "$1")
                },
                Douban: function() {
                    return e.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1")
                },
                Suning: function() {
                    return e.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1")
                },
                iQiYi: function() {
                    return e.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
                }
            };
            t.version = "",
            l[t.browser] && (t.version = l[t.browser](),
            t.version == e && (t.version = "")),
            "Edge" == t.browser ? t.engine = "EdgeHTML" : "Chrome" == t.browser && parseInt(t.version) > 27 ? t.engine = "Blink" : "Opera" == t.browser && parseInt(t.version) > 12 ? t.engine = "Blink" : "Yandex" == t.browser ? t.engine = "Blink" : void 0 == t.browser && (t.browser = "Unknow App")
        }
        function i(e) {
            return new r(e)
        }
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var r = {}
          , i = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#x60;",
            "\\": "&#x5c;"
        };
        for (var o in i)
            r[i[o]] = o;
        var a = /[&<>"'`\\]/g
          , s = RegExp(a.source)
          , l = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g
          , c = RegExp(l.source)
          , d = {
            on: function(e, t, n, r) {
                e = e.split(" ");
                for (var i = 0, o = e.length; i < o; i++)
                    d.off(e[i], t, n, r),
                    t.addEventListener ? t.addEventListener(e[i], n, r || !1) : t.attachEvent ? t.attachEvent("on" + e[i], n) : t["on" + e[i]] = n
            },
            off: function(e, t, n, r) {
                t.removeEventListener ? t.removeEventListener(e, n, r || !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = null
            },
            escape: function(e) {
                return e && s.test(e) ? e.replace(a, function(e) {
                    return i[e]
                }) : e
            },
            unescape: function(e) {
                return e && c.test(e) ? e.replace(l, function(e) {
                    return r[e]
                }) : e
            },
            create: function(e, t, n) {
                var r = document.createElement(e);
                return d.attr(r, t, n),
                r
            },
            find: function(e, t) {
                return e.querySelector(t)
            },
            findAll: function(e, t) {
                return e.querySelectorAll(t)
            },
            attr: function(e, t, n) {
                if (void 0 === e.getAttribute)
                    return d.prop(e, t, n);
                if (void 0 !== n)
                    null === n ? d.removeAttr(e, t) : e.setAttribute(t, n);
                else {
                    if ("[object Object]" !== {}.toString.call(t))
                        return e.getAttribute(t);
                    d.each(t, function(t, n) {
                        e.setAttribute(t, n)
                    })
                }
            },
            prop: function(e, t, n) {
                return void 0 !== n ? e[t] = n : "[object Object]" !== {}.toString.call(t) ? e[t] : void d.each(t, function(t, n) {
                    e[t] = n
                })
            },
            removeAttr: function(e, t) {
                var n = void 0
                  , r = 0
                  , i = t && t.match(/[^\x20\t\r\n\f\*\/\\]+/g);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++]; )
                        e.removeAttribute(n);
                return e
            },
            clearAttr: function(e) {
                var t = e.attributes
                  , n = ["align", "alt", "disabled", "href", "id", "target", "title", "type", "src", "class", "style"];
                return d.each(t, function(t, r) {
                    var i = r.name;
                    switch (r.name.toLowerCase()) {
                    case "style":
                        var o = r.value;
                        d.each(o.split(";"), function(t, n) {
                            if (n.indexOf("color") > -1)
                                return d.attr(e, "style", n),
                                !1;
                            d.removeAttr(e, "style")
                        });
                        break;
                    case "class":
                        if ("CODE" == e.nodeName)
                            return !1;
                        if (r.value.indexOf("at") > -1)
                            return d.attr(e, "class", "at"),
                            !1
                    }
                    n.indexOf(i) > -1 || d.removeAttr(e, i)
                }),
                e
            },
            remove: function(e) {
                try {
                    e.parentNode && e.parentNode.removeChild(e)
                } catch (e) {}
            },
            each: function(e, t) {
                var n = 0
                  , r = e.length
                  , i = ["[object Array]", "[object NodeList]"]
                  , o = {}.toString.call(e);
                if (i.indexOf(o) > -1)
                    for (; n < r && !1 !== (t && t.call(e[n], n, e[n])); n++)
                        ;
                else
                    for (n in e)
                        if (e.hasOwnProperty(n) && !1 === (t && t.call(e[n], n, e[n])))
                            break;
                return e
            }
        };
        e.exports = d
    }
    , function(e, t, n) {
        "use strict";
        var r = function(e, t) {
            if (e)
                try {
                    var n = e.getTime()
                      , r = (new Date).getTime()
                      , o = r - n
                      , a = Math.floor(o / 864e5);
                    if (0 === a) {
                        var s = o % 864e5
                          , l = Math.floor(s / 36e5);
                        if (0 === l) {
                            var c = s % 36e5
                              , d = Math.floor(c / 6e4);
                            if (0 === d) {
                                var u = c % 6e4;
                                return Math.round(u / 1e3) + " " + t.timeago.seconds
                            }
                            return d + " " + t.timeago.minutes
                        }
                        return l + " " + t.timeago.hours
                    }
                    return a < 0 ? t.timeago.now : a < 8 ? a + " " + t.timeago.days : i(e)
                } catch (e) {}
        }
          , i = function(e) {
            var t = o(e.getDate(), 2)
              , n = o(e.getMonth() + 1, 2);
            return o(e.getFullYear(), 2) + "-" + n + "-" + t
        }
          , o = function(e, t) {
            for (var n = e.toString(); n.length < t; )
                n = "0" + n;
            return n
        };
        e.exports = r
    }
    , function(e, t, n) {
        var r;
        !function(i) {
            "use strict";
            function o(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
            }
            function a(e, t) {
                return e << t | e >>> 32 - t
            }
            function s(e, t, n, r, i, s) {
                return o(a(o(o(t, e), o(r, s)), i), n)
            }
            function l(e, t, n, r, i, o, a) {
                return s(t & n | ~t & r, e, t, i, o, a)
            }
            function c(e, t, n, r, i, o, a) {
                return s(t & r | n & ~r, e, t, i, o, a)
            }
            function d(e, t, n, r, i, o, a) {
                return s(t ^ n ^ r, e, t, i, o, a)
            }
            function u(e, t, n, r, i, o, a) {
                return s(n ^ (t | ~r), e, t, i, o, a)
            }
            function p(e, t) {
                e[t >> 5] |= 128 << t % 32,
                e[14 + (t + 64 >>> 9 << 4)] = t;
                var n, r, i, a, s, p = 1732584193, f = -271733879, h = -1732584194, v = 271733878;
                for (n = 0; n < e.length; n += 16)
                    r = p,
                    i = f,
                    a = h,
                    s = v,
                    p = l(p, f, h, v, e[n], 7, -680876936),
                    v = l(v, p, f, h, e[n + 1], 12, -389564586),
                    h = l(h, v, p, f, e[n + 2], 17, 606105819),
                    f = l(f, h, v, p, e[n + 3], 22, -1044525330),
                    p = l(p, f, h, v, e[n + 4], 7, -176418897),
                    v = l(v, p, f, h, e[n + 5], 12, 1200080426),
                    h = l(h, v, p, f, e[n + 6], 17, -1473231341),
                    f = l(f, h, v, p, e[n + 7], 22, -45705983),
                    p = l(p, f, h, v, e[n + 8], 7, 1770035416),
                    v = l(v, p, f, h, e[n + 9], 12, -1958414417),
                    h = l(h, v, p, f, e[n + 10], 17, -42063),
                    f = l(f, h, v, p, e[n + 11], 22, -1990404162),
                    p = l(p, f, h, v, e[n + 12], 7, 1804603682),
                    v = l(v, p, f, h, e[n + 13], 12, -40341101),
                    h = l(h, v, p, f, e[n + 14], 17, -1502002290),
                    f = l(f, h, v, p, e[n + 15], 22, 1236535329),
                    p = c(p, f, h, v, e[n + 1], 5, -165796510),
                    v = c(v, p, f, h, e[n + 6], 9, -1069501632),
                    h = c(h, v, p, f, e[n + 11], 14, 643717713),
                    f = c(f, h, v, p, e[n], 20, -373897302),
                    p = c(p, f, h, v, e[n + 5], 5, -701558691),
                    v = c(v, p, f, h, e[n + 10], 9, 38016083),
                    h = c(h, v, p, f, e[n + 15], 14, -660478335),
                    f = c(f, h, v, p, e[n + 4], 20, -405537848),
                    p = c(p, f, h, v, e[n + 9], 5, 568446438),
                    v = c(v, p, f, h, e[n + 14], 9, -1019803690),
                    h = c(h, v, p, f, e[n + 3], 14, -187363961),
                    f = c(f, h, v, p, e[n + 8], 20, 1163531501),
                    p = c(p, f, h, v, e[n + 13], 5, -1444681467),
                    v = c(v, p, f, h, e[n + 2], 9, -51403784),
                    h = c(h, v, p, f, e[n + 7], 14, 1735328473),
                    f = c(f, h, v, p, e[n + 12], 20, -1926607734),
                    p = d(p, f, h, v, e[n + 5], 4, -378558),
                    v = d(v, p, f, h, e[n + 8], 11, -2022574463),
                    h = d(h, v, p, f, e[n + 11], 16, 1839030562),
                    f = d(f, h, v, p, e[n + 14], 23, -35309556),
                    p = d(p, f, h, v, e[n + 1], 4, -1530992060),
                    v = d(v, p, f, h, e[n + 4], 11, 1272893353),
                    h = d(h, v, p, f, e[n + 7], 16, -155497632),
                    f = d(f, h, v, p, e[n + 10], 23, -1094730640),
                    p = d(p, f, h, v, e[n + 13], 4, 681279174),
                    v = d(v, p, f, h, e[n], 11, -358537222),
                    h = d(h, v, p, f, e[n + 3], 16, -722521979),
                    f = d(f, h, v, p, e[n + 6], 23, 76029189),
                    p = d(p, f, h, v, e[n + 9], 4, -640364487),
                    v = d(v, p, f, h, e[n + 12], 11, -421815835),
                    h = d(h, v, p, f, e[n + 15], 16, 530742520),
                    f = d(f, h, v, p, e[n + 2], 23, -995338651),
                    p = u(p, f, h, v, e[n], 6, -198630844),
                    v = u(v, p, f, h, e[n + 7], 10, 1126891415),
                    h = u(h, v, p, f, e[n + 14], 15, -1416354905),
                    f = u(f, h, v, p, e[n + 5], 21, -57434055),
                    p = u(p, f, h, v, e[n + 12], 6, 1700485571),
                    v = u(v, p, f, h, e[n + 3], 10, -1894986606),
                    h = u(h, v, p, f, e[n + 10], 15, -1051523),
                    f = u(f, h, v, p, e[n + 1], 21, -2054922799),
                    p = u(p, f, h, v, e[n + 8], 6, 1873313359),
                    v = u(v, p, f, h, e[n + 15], 10, -30611744),
                    h = u(h, v, p, f, e[n + 6], 15, -1560198380),
                    f = u(f, h, v, p, e[n + 13], 21, 1309151649),
                    p = u(p, f, h, v, e[n + 4], 6, -145523070),
                    v = u(v, p, f, h, e[n + 11], 10, -1120210379),
                    h = u(h, v, p, f, e[n + 2], 15, 718787259),
                    f = u(f, h, v, p, e[n + 9], 21, -343485551),
                    p = o(p, r),
                    f = o(f, i),
                    h = o(h, a),
                    v = o(v, s);
                return [p, f, h, v]
            }
            function f(e) {
                var t, n = "", r = 32 * e.length;
                for (t = 0; t < r; t += 8)
                    n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                return n
            }
            function h(e) {
                var t, n = [];
                for (n[(e.length >> 2) - 1] = void 0,
                t = 0; t < n.length; t += 1)
                    n[t] = 0;
                var r = 8 * e.length;
                for (t = 0; t < r; t += 8)
                    n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                return n
            }
            function v(e) {
                return f(p(h(e), 8 * e.length))
            }
            function g(e, t) {
                var n, r, i = h(e), o = [], a = [];
                for (o[15] = a[15] = void 0,
                i.length > 16 && (i = p(i, 8 * e.length)),
                n = 0; n < 16; n += 1)
                    o[n] = 909522486 ^ i[n],
                    a[n] = 1549556828 ^ i[n];
                return r = p(o.concat(h(t)), 512 + 8 * t.length),
                f(p(a.concat(r), 640))
            }
            function m(e) {
                var t, n, r = "0123456789abcdef", i = "";
                for (n = 0; n < e.length; n += 1)
                    t = e.charCodeAt(n),
                    i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
                return i
            }
            function b(e) {
                return unescape(encodeURIComponent(e))
            }
            function x(e) {
                return v(b(e))
            }
            function y(e) {
                return m(x(e))
            }
            function w(e, t) {
                return g(b(e), b(t))
            }
            function k(e, t) {
                return m(w(e, t))
            }
            function _(e, t, n) {
                return t ? n ? w(t, e) : k(t, e) : n ? x(e) : y(e)
            }
            void 0 !== (r = function() {
                return _
            }
            .call(t, n, t, e)) && (e.exports = r)
        }()
    }
    , function(e, t, n) {
        !function(t, n) {
            e.exports = n()
        }(0, function() {
            "use strict";
            function e(e) {
                return '<span style="color: slategray">' + e + "</span>"
            }
            var t = function(e, t) {
                return t = {
                    exports: {}
                },
                e(t, t.exports),
                t.exports
            }(function(e) {
                var t = e.exports = function() {
                    return new RegExp("(?:" + t.line().source + ")|(?:" + t.block().source + ")","gm")
                }
                ;
                t.line = function() {
                    return /(?:^|\s)\/\/(.+?)$/gm
                }
                ,
                t.block = function() {
                    return /\/\*([\S\s]*?)\*\//gm
                }
            })
              , n = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"];
            return function(r, i) {
                void 0 === i && (i = {});
                var o = i.colors;
                void 0 === o && (o = n);
                var a = 0
                  , s = {}
                  , l = /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/
                  , c = /</
                  , d = new RegExp("(" + l.source + "|" + c.source + ")|(" + t().source + ")","gmi");
                return r.replace(d, function(t, n, r) {
                    if (r)
                        return e(r);
                    if ("<" === n)
                        return "&lt;";
                    var i;
                    s[n] ? i = s[n] : (i = o[a],
                    s[n] = i);
                    var l = '<span style="color: #' + i + '">' + n + "</span>";
                    return a = ++a % o.length,
                    l
                })
            }
        })
    }
    , function(e, t, n) {
        (function(t) {
            !function(t) {
                "use strict";
                function n(e) {
                    this.tokens = [],
                    this.tokens.links = {},
                    this.options = e || h.defaults,
                    this.rules = v.normal,
                    this.options.pedantic ? this.rules = v.pedantic : this.options.gfm && (this.options.tables ? this.rules = v.tables : this.rules = v.gfm)
                }
                function r(e, t) {
                    if (this.options = t || h.defaults,
                    this.links = e,
                    this.rules = g.normal,
                    this.renderer = this.options.renderer || new i,
                    this.renderer.options = this.options,
                    !this.links)
                        throw new Error("Tokens array requires a `links` property.");
                    this.options.pedantic ? this.rules = g.pedantic : this.options.gfm && (this.options.breaks ? this.rules = g.breaks : this.rules = g.gfm)
                }
                function i(e) {
                    this.options = e || h.defaults
                }
                function o() {}
                function a(e) {
                    this.tokens = [],
                    this.token = null,
                    this.options = e || h.defaults,
                    this.options.renderer = this.options.renderer || new i,
                    this.renderer = this.options.renderer,
                    this.renderer.options = this.options
                }
                function s(e, t) {
                    return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
                }
                function l(e) {
                    return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function(e, t) {
                        return t = t.toLowerCase(),
                        "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
                    })
                }
                function c(e, t) {
                    return e = e.source || e,
                    t = t || "",
                    {
                        replace: function(t, n) {
                            return n = n.source || n,
                            n = n.replace(/(^|[^\[])\^/g, "$1"),
                            e = e.replace(t, n),
                            this
                        },
                        getRegex: function() {
                            return new RegExp(e,t)
                        }
                    }
                }
                function d(e, t) {
                    return m[" " + e] || (/^[^:]+:\/*[^\/]*$/.test(e) ? m[" " + e] = e + "/" : m[" " + e] = e.replace(/[^\/]*$/, "")),
                    e = m[" " + e],
                    "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(/(:\/*[^\/]*)[\s\S]*/, "$1") + t : e + t
                }
                function u() {}
                function p(e) {
                    for (var t, n, r = 1; r < arguments.length; r++) {
                        t = arguments[r];
                        for (n in t)
                            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }
                function f(e, t) {
                    var n = e.replace(/([^\\])\|/g, "$1 |").split(/ +\| */)
                      , r = 0;
                    if (n.length > t)
                        n.splice(t);
                    else
                        for (; n.length < t; )
                            n.push("");
                    for (; r < n.length; r++)
                        n[r] = n[r].replace(/\\\|/g, "|");
                    return n
                }
                function h(e, t, r) {
                    if (void 0 === e || null === e)
                        throw new Error("marked(): input parameter is undefined or null");
                    if ("string" != typeof e)
                        throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                    if (r || "function" == typeof t) {
                        r || (r = t,
                        t = null),
                        t = p({}, h.defaults, t || {});
                        var i, o, l = t.highlight, c = 0;
                        try {
                            i = n.lex(e, t)
                        } catch (e) {
                            return r(e)
                        }
                        o = i.length;
                        var d = function(e) {
                            if (e)
                                return t.highlight = l,
                                r(e);
                            var n;
                            try {
                                n = a.parse(i, t)
                            } catch (t) {
                                e = t
                            }
                            return t.highlight = l,
                            e ? r(e) : r(null, n)
                        };
                        if (!l || l.length < 3)
                            return d();
                        if (delete t.highlight,
                        !o)
                            return d();
                        for (; c < i.length; c++)
                            !function(e) {
                                "code" !== e.type ? --o || d() : l(e.text, e.lang, function(t, n) {
                                    return t ? d(t) : null == n || n === e.text ? --o || d() : (e.text = n,
                                    e.escaped = !0,
                                    void (--o || d()))
                                })
                            }(i[c])
                    } else
                        try {
                            return t && (t = p({}, h.defaults, t)),
                            a.parse(n.lex(e, t), t)
                        } catch (e) {
                            if (e.message += "\nPlease report this to https://github.com/markedjs/marked.",
                            (t || h.defaults).silent)
                                return "<p>An error occurred:</p><pre>" + s(e.message + "", !0) + "</pre>";
                            throw e
                        }
                }
                var v = {
                    newline: /^\n+/,
                    code: /^( {4}[^\n]+\n*)+/,
                    fences: u,
                    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
                    nptable: u,
                    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                    list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                    html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
                    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                    table: u,
                    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                    paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
                    text: /^[^\n]+/
                };
                v._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
                v._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
                v.def = c(v.def).replace("label", v._label).replace("title", v._title).getRegex(),
                v.bullet = /(?:[*+-]|\d+\.)/,
                v.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,
                v.item = c(v.item, "gm").replace(/bull/g, v.bullet).getRegex(),
                v.list = c(v.list).replace(/bull/g, v.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + v.def.source + ")").getRegex(),
                v._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
                v._comment = /<!--(?!-?>)[\s\S]*?-->/,
                v.html = c(v.html, "i").replace("comment", v._comment).replace("tag", v._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
                v.paragraph = c(v.paragraph).replace("hr", v.hr).replace("heading", v.heading).replace("lheading", v.lheading).replace("tag", v._tag).getRegex(),
                v.blockquote = c(v.blockquote).replace("paragraph", v.paragraph).getRegex(),
                v.normal = p({}, v),
                v.gfm = p({}, v.normal, {
                    fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
                    paragraph: /^/,
                    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
                }),
                v.gfm.paragraph = c(v.paragraph).replace("(?!", "(?!" + v.gfm.fences.source.replace("\\1", "\\2") + "|" + v.list.source.replace("\\1", "\\3") + "|").getRegex(),
                v.tables = p({}, v.gfm, {
                    nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
                    table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
                }),
                v.pedantic = p({}, v.normal, {
                    html: c("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", v._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
                }),
                n.rules = v,
                n.lex = function(e, t) {
                    return new n(t).lex(e)
                }
                ,
                n.prototype.lex = function(e) {
                    return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"),
                    this.token(e, !0)
                }
                ,
                n.prototype.token = function(e, t) {
                    e = e.replace(/^ +$/gm, "");
                    for (var n, r, i, o, a, s, l, c, d, u, p, h, g; e; )
                        if ((i = this.rules.newline.exec(e)) && (e = e.substring(i[0].length),
                        i[0].length > 1 && this.tokens.push({
                            type: "space"
                        })),
                        i = this.rules.code.exec(e))
                            e = e.substring(i[0].length),
                            i = i[0].replace(/^ {4}/gm, ""),
                            this.tokens.push({
                                type: "code",
                                text: this.options.pedantic ? i : i.replace(/\n+$/, "")
                            });
                        else if (i = this.rules.fences.exec(e))
                            e = e.substring(i[0].length),
                            this.tokens.push({
                                type: "code",
                                lang: i[2],
                                text: i[3] || ""
                            });
                        else if (i = this.rules.heading.exec(e))
                            e = e.substring(i[0].length),
                            this.tokens.push({
                                type: "heading",
                                depth: i[1].length,
                                text: i[2]
                            });
                        else if (t && (i = this.rules.nptable.exec(e)) && (s = {
                            type: "table",
                            header: f(i[1].replace(/^ *| *\| *$/g, "")),
                            align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : []
                        },
                        s.header.length === s.align.length)) {
                            for (e = e.substring(i[0].length),
                            c = 0; c < s.align.length; c++)
                                /^ *-+: *$/.test(s.align[c]) ? s.align[c] = "right" : /^ *:-+: *$/.test(s.align[c]) ? s.align[c] = "center" : /^ *:-+ *$/.test(s.align[c]) ? s.align[c] = "left" : s.align[c] = null;
                            for (c = 0; c < s.cells.length; c++)
                                s.cells[c] = f(s.cells[c], s.header.length);
                            this.tokens.push(s)
                        } else if (i = this.rules.hr.exec(e))
                            e = e.substring(i[0].length),
                            this.tokens.push({
                                type: "hr"
                            });
                        else if (i = this.rules.blockquote.exec(e))
                            e = e.substring(i[0].length),
                            this.tokens.push({
                                type: "blockquote_start"
                            }),
                            i = i[0].replace(/^ *> ?/gm, ""),
                            this.token(i, t),
                            this.tokens.push({
                                type: "blockquote_end"
                            });
                        else if (i = this.rules.list.exec(e)) {
                            for (e = e.substring(i[0].length),
                            o = i[2],
                            p = o.length > 1,
                            this.tokens.push({
                                type: "list_start",
                                ordered: p,
                                start: p ? +o : ""
                            }),
                            i = i[0].match(this.rules.item),
                            n = !1,
                            u = i.length,
                            c = 0; c < u; c++)
                                s = i[c],
                                l = s.length,
                                s = s.replace(/^ *([*+-]|\d+\.) +/, ""),
                                ~s.indexOf("\n ") && (l -= s.length,
                                s = this.options.pedantic ? s.replace(/^ {1,4}/gm, "") : s.replace(new RegExp("^ {1," + l + "}","gm"), "")),
                                this.options.smartLists && c !== u - 1 && (a = v.bullet.exec(i[c + 1])[0],
                                o === a || o.length > 1 && a.length > 1 || (e = i.slice(c + 1).join("\n") + e,
                                c = u - 1)),
                                r = n || /\n\n(?!\s*$)/.test(s),
                                c !== u - 1 && (n = "\n" === s.charAt(s.length - 1),
                                r || (r = n)),
                                h = /^\[[ xX]\] /.test(s),
                                g = void 0,
                                h && (g = " " !== s[1],
                                s = s.replace(/^\[[ xX]\] +/, "")),
                                this.tokens.push({
                                    type: r ? "loose_item_start" : "list_item_start",
                                    task: h,
                                    checked: g
                                }),
                                this.token(s, !1),
                                this.tokens.push({
                                    type: "list_item_end"
                                });
                            this.tokens.push({
                                type: "list_end"
                            })
                        } else if (i = this.rules.html.exec(e))
                            e = e.substring(i[0].length),
                            this.tokens.push({
                                type: this.options.sanitize ? "paragraph" : "html",
                                pre: !this.options.sanitizer && ("pre" === i[1] || "script" === i[1] || "style" === i[1]),
                                text: i[0]
                            });
                        else if (t && (i = this.rules.def.exec(e)))
                            e = e.substring(i[0].length),
                            i[3] && (i[3] = i[3].substring(1, i[3].length - 1)),
                            d = i[1].toLowerCase().replace(/\s+/g, " "),
                            this.tokens.links[d] || (this.tokens.links[d] = {
                                href: i[2],
                                title: i[3]
                            });
                        else if (t && (i = this.rules.table.exec(e)) && (s = {
                            type: "table",
                            header: f(i[1].replace(/^ *| *\| *$/g, "")),
                            align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            cells: i[3] ? i[3].replace(/(?: *\| *)?\n$/, "").split("\n") : []
                        },
                        s.header.length === s.align.length)) {
                            for (e = e.substring(i[0].length),
                            c = 0; c < s.align.length; c++)
                                /^ *-+: *$/.test(s.align[c]) ? s.align[c] = "right" : /^ *:-+: *$/.test(s.align[c]) ? s.align[c] = "center" : /^ *:-+ *$/.test(s.align[c]) ? s.align[c] = "left" : s.align[c] = null;
                            for (c = 0; c < s.cells.length; c++)
                                s.cells[c] = f(s.cells[c].replace(/^ *\| *| *\| *$/g, ""), s.header.length);
                            this.tokens.push(s)
                        } else if (i = this.rules.lheading.exec(e))
                            e = e.substring(i[0].length),
                            this.tokens.push({
                                type: "heading",
                                depth: "=" === i[2] ? 1 : 2,
                                text: i[1]
                            });
                        else if (t && (i = this.rules.paragraph.exec(e)))
                            e = e.substring(i[0].length),
                            this.tokens.push({
                                type: "paragraph",
                                text: "\n" === i[1].charAt(i[1].length - 1) ? i[1].slice(0, -1) : i[1]
                            });
                        else if (i = this.rules.text.exec(e))
                            e = e.substring(i[0].length),
                            this.tokens.push({
                                type: "text",
                                text: i[0]
                            });
                        else if (e)
                            throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
                    return this.tokens
                }
                ;
                var g = {
                    escape: /^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,
                    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                    url: u,
                    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                    link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
                    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
                    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
                    strong: /^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)|^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)/,
                    em: /^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*][\s\S]*?[^\s])\*(?!\*)|^_([^\s_])_(?!_)|^\*([^\s*])\*(?!\*)/,
                    code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
                    br: /^ {2,}\n(?!\s*$)/,
                    del: u,
                    text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
                };
                g._escapes = /\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g,
                g._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,
                g._email = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
                g.autolink = c(g.autolink).replace("scheme", g._scheme).replace("email", g._email).getRegex(),
                g._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
                g.tag = c(g.tag).replace("comment", v._comment).replace("attribute", g._attribute).getRegex(),
                g._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/,
                g._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?)/,
                g._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
                g.link = c(g.link).replace("label", g._label).replace("href", g._href).replace("title", g._title).getRegex(),
                g.reflink = c(g.reflink).replace("label", g._label).getRegex(),
                g.normal = p({}, g),
                g.pedantic = p({}, g.normal, {
                    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
                    link: c(/^!?\[(label)\]\((.*?)\)/).replace("label", g._label).getRegex(),
                    reflink: c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", g._label).getRegex()
                }),
                g.gfm = p({}, g.normal, {
                    escape: c(g.escape).replace("])", "~|])").getRegex(),
                    url: c(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email", g._email).getRegex(),
                    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                    del: /^~~(?=\S)([\s\S]*?\S)~~/,
                    text: c(g.text).replace("]|", "~]|").replace("|", "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()
                }),
                g.breaks = p({}, g.gfm, {
                    br: c(g.br).replace("{2,}", "*").getRegex(),
                    text: c(g.gfm.text).replace("{2,}", "*").getRegex()
                }),
                r.rules = g,
                r.output = function(e, t, n) {
                    return new r(t,n).output(e)
                }
                ,
                r.prototype.output = function(e) {
                    for (var t, n, i, o, a, l = ""; e; )
                        if (a = this.rules.escape.exec(e))
                            e = e.substring(a[0].length),
                            l += a[1];
                        else if (a = this.rules.autolink.exec(e))
                            e = e.substring(a[0].length),
                            "@" === a[2] ? (n = s(this.mangle(a[1])),
                            i = "mailto:" + n) : (n = s(a[1]),
                            i = n),
                            l += this.renderer.link(i, null, n);
                        else if (this.inLink || !(a = this.rules.url.exec(e))) {
                            if (a = this.rules.tag.exec(e))
                                !this.inLink && /^<a /i.test(a[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(a[0]) && (this.inLink = !1),
                                e = e.substring(a[0].length),
                                l += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : s(a[0]) : a[0];
                            else if (a = this.rules.link.exec(e))
                                e = e.substring(a[0].length),
                                this.inLink = !0,
                                i = a[2],
                                this.options.pedantic ? (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i),
                                t ? (i = t[1],
                                o = t[3]) : o = "") : o = a[3] ? a[3].slice(1, -1) : "",
                                i = i.trim().replace(/^<([\s\S]*)>$/, "$1"),
                                l += this.outputLink(a, {
                                    href: r.escapes(i),
                                    title: r.escapes(o)
                                }),
                                this.inLink = !1;
                            else if ((a = this.rules.reflink.exec(e)) || (a = this.rules.nolink.exec(e))) {
                                if (e = e.substring(a[0].length),
                                t = (a[2] || a[1]).replace(/\s+/g, " "),
                                !(t = this.links[t.toLowerCase()]) || !t.href) {
                                    l += a[0].charAt(0),
                                    e = a[0].substring(1) + e;
                                    continue
                                }
                                this.inLink = !0,
                                l += this.outputLink(a, t),
                                this.inLink = !1
                            } else if (a = this.rules.strong.exec(e))
                                e = e.substring(a[0].length),
                                l += this.renderer.strong(this.output(a[4] || a[3] || a[2] || a[1]));
                            else if (a = this.rules.em.exec(e))
                                e = e.substring(a[0].length),
                                l += this.renderer.em(this.output(a[6] || a[5] || a[4] || a[3] || a[2] || a[1]));
                            else if (a = this.rules.code.exec(e))
                                e = e.substring(a[0].length),
                                l += this.renderer.codespan(s(a[2].trim(), !0));
                            else if (a = this.rules.br.exec(e))
                                e = e.substring(a[0].length),
                                l += this.renderer.br();
                            else if (a = this.rules.del.exec(e))
                                e = e.substring(a[0].length),
                                l += this.renderer.del(this.output(a[1]));
                            else if (a = this.rules.text.exec(e))
                                e = e.substring(a[0].length),
                                l += this.renderer.text(s(this.smartypants(a[0])));
                            else if (e)
                                throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
                        } else
                            a[0] = this.rules._backpedal.exec(a[0])[0],
                            e = e.substring(a[0].length),
                            "@" === a[2] ? (n = s(a[0]),
                            i = "mailto:" + n) : (n = s(a[0]),
                            i = "www." === a[1] ? "http://" + n : n),
                            l += this.renderer.link(i, null, n);
                    return l
                }
                ,
                r.escapes = function(e) {
                    return e ? e.replace(r.rules._escapes, "$1") : e
                }
                ,
                r.prototype.outputLink = function(e, t) {
                    var n = t.href
                      , r = t.title ? s(t.title) : null;
                    return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, s(e[1]))
                }
                ,
                r.prototype.smartypants = function(e) {
                    return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
                }
                ,
                r.prototype.mangle = function(e) {
                    if (!this.options.mangle)
                        return e;
                    for (var t, n = "", r = e.length, i = 0; i < r; i++)
                        t = e.charCodeAt(i),
                        Math.random() > .5 && (t = "x" + t.toString(16)),
                        n += "&#" + t + ";";
                    return n
                }
                ,
                i.prototype.code = function(e, t, n) {
                    if (this.options.highlight) {
                        var r = this.options.highlight(e, t);
                        null != r && r !== e && (n = !0,
                        e = r)
                    }
                    return t ? '<pre><code class="' + this.options.langPrefix + s(t, !0) + '">' + (n ? e : s(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : s(e, !0)) + "</code></pre>"
                }
                ,
                i.prototype.blockquote = function(e) {
                    return "<blockquote>\n" + e + "</blockquote>\n"
                }
                ,
                i.prototype.html = function(e) {
                    return e
                }
                ,
                i.prototype.heading = function(e, t, n) {
                    return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n"
                }
                ,
                i.prototype.hr = function() {
                    return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
                }
                ,
                i.prototype.list = function(e, t, n) {
                    var r = t ? "ol" : "ul";
                    return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n"
                }
                ,
                i.prototype.listitem = function(e) {
                    return "<li>" + e + "</li>\n"
                }
                ,
                i.prototype.checkbox = function(e) {
                    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
                }
                ,
                i.prototype.paragraph = function(e) {
                    return "<p>" + e + "</p>\n"
                }
                ,
                i.prototype.table = function(e, t) {
                    return t && (t = "<tbody>" + t + "</tbody>"),
                    "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
                }
                ,
                i.prototype.tablerow = function(e) {
                    return "<tr>\n" + e + "</tr>\n"
                }
                ,
                i.prototype.tablecell = function(e, t) {
                    var n = t.header ? "th" : "td";
                    return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
                }
                ,
                i.prototype.strong = function(e) {
                    return "<strong>" + e + "</strong>"
                }
                ,
                i.prototype.em = function(e) {
                    return "<em>" + e + "</em>"
                }
                ,
                i.prototype.codespan = function(e) {
                    return "<code>" + e + "</code>"
                }
                ,
                i.prototype.br = function() {
                    return this.options.xhtml ? "<br/>" : "<br>"
                }
                ,
                i.prototype.del = function(e) {
                    return "<del>" + e + "</del>"
                }
                ,
                i.prototype.link = function(e, t, n) {
                    if (this.options.sanitize) {
                        try {
                            var r = decodeURIComponent(l(e)).replace(/[^\w:]/g, "").toLowerCase()
                        } catch (e) {
                            return n
                        }
                        if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:"))
                            return n
                    }
                    this.options.baseUrl && !b.test(e) && (e = d(this.options.baseUrl, e));
                    try {
                        e = encodeURI(e).replace(/%25/g, "%")
                    } catch (e) {
                        return n
                    }
                    var i = '<a href="' + s(e) + '"';
                    return t && (i += ' title="' + t + '"'),
                    i += ">" + n + "</a>"
                }
                ,
                i.prototype.image = function(e, t, n) {
                    this.options.baseUrl && !b.test(e) && (e = d(this.options.baseUrl, e));
                    var r = '<img src="' + e + '" alt="' + n + '"';
                    return t && (r += ' title="' + t + '"'),
                    r += this.options.xhtml ? "/>" : ">"
                }
                ,
                i.prototype.text = function(e) {
                    return e
                }
                ,
                o.prototype.strong = o.prototype.em = o.prototype.codespan = o.prototype.del = o.prototype.text = function(e) {
                    return e
                }
                ,
                o.prototype.link = o.prototype.image = function(e, t, n) {
                    return "" + n
                }
                ,
                o.prototype.br = function() {
                    return ""
                }
                ,
                a.parse = function(e, t) {
                    return new a(t).parse(e)
                }
                ,
                a.prototype.parse = function(e) {
                    this.inline = new r(e.links,this.options),
                    this.inlineText = new r(e.links,p({}, this.options, {
                        renderer: new o
                    })),
                    this.tokens = e.reverse();
                    for (var t = ""; this.next(); )
                        t += this.tok();
                    return t
                }
                ,
                a.prototype.next = function() {
                    return this.token = this.tokens.pop()
                }
                ,
                a.prototype.peek = function() {
                    return this.tokens[this.tokens.length - 1] || 0
                }
                ,
                a.prototype.parseText = function() {
                    for (var e = this.token.text; "text" === this.peek().type; )
                        e += "\n" + this.next().text;
                    return this.inline.output(e)
                }
                ,
                a.prototype.tok = function() {
                    switch (this.token.type) {
                    case "space":
                        return "";
                    case "hr":
                        return this.renderer.hr();
                    case "heading":
                        return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, l(this.inlineText.output(this.token.text)));
                    case "code":
                        return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                    case "table":
                        var e, t, n, r, i = "", o = "";
                        for (n = "",
                        e = 0; e < this.token.header.length; e++)
                            n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                                header: !0,
                                align: this.token.align[e]
                            });
                        for (i += this.renderer.tablerow(n),
                        e = 0; e < this.token.cells.length; e++) {
                            for (t = this.token.cells[e],
                            n = "",
                            r = 0; r < t.length; r++)
                                n += this.renderer.tablecell(this.inline.output(t[r]), {
                                    header: !1,
                                    align: this.token.align[r]
                                });
                            o += this.renderer.tablerow(n)
                        }
                        return this.renderer.table(i, o);
                    case "blockquote_start":
                        for (o = ""; "blockquote_end" !== this.next().type; )
                            o += this.tok();
                        return this.renderer.blockquote(o);
                    case "list_start":
                        o = "";
                        for (var a = this.token.ordered, s = this.token.start; "list_end" !== this.next().type; )
                            o += this.tok();
                        return this.renderer.list(o, a, s);
                    case "list_item_start":
                        for (o = "",
                        this.token.task && (o += this.renderer.checkbox(this.token.checked)); "list_item_end" !== this.next().type; )
                            o += "text" === this.token.type ? this.parseText() : this.tok();
                        return this.renderer.listitem(o);
                    case "loose_item_start":
                        for (o = ""; "list_item_end" !== this.next().type; )
                            o += this.tok();
                        return this.renderer.listitem(o);
                    case "html":
                        return this.renderer.html(this.token.text);
                    case "paragraph":
                        return this.renderer.paragraph(this.inline.output(this.token.text));
                    case "text":
                        return this.renderer.paragraph(this.parseText())
                    }
                }
                ;
                var m = {}
                  , b = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
                u.exec = u,
                h.options = h.setOptions = function(e) {
                    return p(h.defaults, e),
                    h
                }
                ,
                h.getDefaults = function() {
                    return {
                        baseUrl: null,
                        breaks: !1,
                        gfm: !0,
                        headerIds: !0,
                        headerPrefix: "",
                        highlight: null,
                        langPrefix: "language-",
                        mangle: !0,
                        pedantic: !1,
                        renderer: new i,
                        sanitize: !1,
                        sanitizer: null,
                        silent: !1,
                        smartLists: !1,
                        smartypants: !1,
                        tables: !0,
                        xhtml: !1
                    }
                }
                ,
                h.defaults = h.getDefaults(),
                h.Parser = a,
                h.parser = a.parse,
                h.Renderer = i,
                h.TextRenderer = o,
                h.Lexer = n,
                h.lexer = n.lex,
                h.InlineLexer = r,
                h.inlineLexer = r.output,
                h.parse = h,
                e.exports = h
            }(this || "undefined" != typeof window && window)
        }
        ).call(t, n(10))
    }
    , function(e, t) {
        e.exports = {
            name: "valine",
            version: "1.3.6+",
            description: "A simple comment system based on Leancloud.",
            main: "/dist/Valine.min.js",
            author: "xCss <xioveliu@gmail.com> (https://github.com/xCss)",
            scripts: {
                test: "webpack",
                build: "webpack",
                dev: "webpack-dev-server --env.dev",
                clean: "rm -rf dist/* "
            },
            keywords: ["simple", "easy-to-use", "fast-and-safe", "comment-system"],
            license: "GPL-2.0",
            repository: {
                type: "git",
                url: "git+https://github.com/xcss/Valine.git"
            },
            homepage: "https://github.com/xcss/Valine#readme",
            devDependencies: {
                autoprefixer: "^7.1.1",
                autosize: "^4.0.2",
                "babel-core": "^6.25.0",
                "babel-loader": "^7.1.1",
                "babel-polyfill": "^6.23.0",
                "babel-preset-es2015": "^6.24.1",
                "babel-preset-stage-0": "^6.24.1",
                "blueimp-md5": "^2.8.0",
                "css-loader": "^0.28.4",
                "exports-loader": "^0.6.3",
                "file-loader": "^0.11.2",
                hanabi: "^0.4.0",
                marked: "^0.4.0",
                "node-sass": "^4.9.2",
                "postcss-loader": "^2.0.5",
                "sass-loader": "^6.0.3",
                "style-loader": "^0.18.2",
                "url-loader": "^0.6.2",
                webpack: "^2.6.1",
                "webpack-cli": "^3.3.0",
                "webpack-dev-server": "^2.9.1"
            }
        }
    }
    , function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0,
            eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }
    , function(e, t) {
		    function aru(index){
		      return "<img class='emoji aru' src='https://cdn.jsdelivr.net/gh/Robin-zero/cdn-static/blog/material-x/emoji/aru/" + index + ".png'>";
		    }
		    function tieba(str){
		      return "<img class='emoji tieba' src='https://cdn.jsdelivr.net/gh/Robin-zero/cdn-static/blog/material-x/emoji/tieba/" + str + ".png'>";
		    }
		    function qq(str) {
		      return "<img class='emoji qq' src='https://cdn.jsdelivr.net/gh/Robin-zero/cdn-static/blog/material-x/emoji/qq/" + str + ".gif'>";
		    }
        e.exports = {
			      aru151: aru(151),
			      贴吧what: tieba('what'),
			      贴吧乖: tieba('乖'),
			      贴吧喷: tieba('喷'),
			      贴吧太开心: tieba('太开心'),
			      贴吧委屈: tieba('委屈'),
			      贴吧小乖: tieba('小乖'),
			      贴吧捂嘴笑: tieba('捂嘴笑'),
			      贴吧泪: tieba('泪'),
			      贴吧滑稽: tieba('滑稽'),
			      贴吧爱心: tieba('爱心'),
			      贴吧玫瑰: tieba('玫瑰'),
			      贴吧真棒: tieba('真棒'),
						贴吧疑问: tieba('疑问'),
						qqOK: qq('OK'),
						qq亲亲: qq('亲亲'),
						qq便便: qq('便便'),
						qq偷笑: qq('偷笑'),
						qq冷汗: qq('冷汗'),
						qq发呆: qq('发呆'),
						qq发怒: qq('发怒'),
						qq可怜: qq('可怜'),
						qq可爱: qq('可爱'),
						qq左哼哼: qq('左哼哼'),
						qq右哼哼: qq('右哼哼'),
						qq吓: qq('吓'),
						qq呲牙: qq('呲牙'),
						qq嗅大了: qq('嗅大了'),
						qq坏笑: qq('坏笑'),
						qq奋斗: qq('奋斗'),
						qq委屈: qq('委屈'),
						qq害羞: qq('害羞'),
						qq尴尬: qq('尴尬'),
						qq强: qq('强'),
						qq得意: qq('得意'),
						qq快哭了: qq('快哭了'),
						qq惊恐: qq('惊恐'),
						qq憨笑: qq('憨笑'),
						qq抓狂: qq('抓狂'),
						qq抱拳: qq('抱拳'),
						qq握手: qq('握手'),
						qq晕: qq('晕'),
						qq疑问: qq('疑问'),
						qq阴险: qq('阴险'),
						qq鼓掌: qq('鼓掌'),
            grinning: "😀",
            smiley: "😃",
            smile: "😄",
            grin: "😁",
            laughing: "😆",
            sweat_smile: "😅",
            joy: "😂",
            blush: "😊",
            innocent: "😇",
            wink: "😉",
            relieved: "😌",
            heart_eyes: "😍",
            kissing_heart: "😘",
            kissing: "😗",
            kissing_smiling_eyes: "😙",
            kissing_closed_eyes: "😚",
            yum: "😋",
            stuck_out_tongue_winking_eye: "😜",
            stuck_out_tongue_closed_eyes: "😝",
            stuck_out_tongue: "😛",
            sunglasses: "😎",
            smirk: "😏",
            unamused: "😒",
            disappointed: "😞",
            pensive: "😔",
            worried: "😟",
            confused: "😕",
            persevere: "😣",
            confounded: "😖",
            tired_face: "😫",
            weary: "😩",
            angry: "😠",
            rage: "😡",
            no_mouth: "😶",
            neutral_face: "😐",
            expressionless: "😑",
            hushed: "😯",
            frowning: "😦",
            anguished: "😧",
            open_mouth: "😮",
            astonished: "😲",
            dizzy_face: "😵",
            flushed: "😳",
            scream: "😱",
            fearful: "😨",
            cold_sweat: "😰",
            cry: "😢",
            disappointed_relieved: "😥",
            sob: "😭",
            sweat: "😓",
            sleepy: "😪",
            sleeping: "😴",
            mask: "😷",
            smiling_imp: "😈",
            smiley_cat: "😺",
            smile_cat: "😸",
            joy_cat: "😹",
            heart_eyes_cat: "😻",
            smirk_cat: "😼",
            kissing_cat: "😽",
            scream_cat: "🙀",
            crying_cat_face: "😿",
            pouting_cat: "😾",
            cat: "🐱",
            mouse: "🐭",
            cow: "🐮",
            monkey_face: "🐵",
            hand: "✋",
            fist: "✊",
            v: "✌️",
            point_up: "👆",
            point_down: "👇",
            point_left: "👈",
            point_right: "👉",
            facepunch: "👊",
            wave: "👋",
            clap: "👏",
            open_hands: "👐",
            "+1": "👍",
            "-1": "👎",
            ok_hand: "👌",
            pray: "🙏",
            ear: "👂",
            eyes: "👀",
            nose: "👃",
            lips: "👄",
            tongue: "👅",
            heart: "❤️",
            cupid: "💘",
            sparkling_heart: "💖",
            star: "⭐️",
            sparkles: "✨",
            zap: "⚡️",
            sunny: "☀️",
            cloud: "☁️",
            snowflake: "❄️",
            umbrella: "☔️",
            coffee: "☕️",
            airplane: "✈️",
            anchor: "⚓️",
            watch: "⌚️",
            phone: "☎️",
            hourglass: "⌛️",
            email: "✉️",
            scissors: "✂️",
            black_nib: "✒️",
            pencil2: "✏️",
            x: "❌",
            recycle: "♻️",
            white_check_mark: "✅",
            negative_squared_cross_mark: "❎",
            m: "Ⓜ️",
            i: "ℹ️",
            tm: "™️",
            copyright: "©️",
            registered: "®️"
        }
    }
    , function(e, t, n) {
        var r = n(13);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var i = {};
        i.transform = void 0;
        n(15)(r, i);
        r.locals && (e.exports = r.locals)
    }
    , function(e, t, n) {
        t = e.exports = n(14)(!1),
        t.push([e.i, '.v *{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:2;color:#555;-webkit-transition:all .3s ease;transition:all .3s ease}.v hr{margin:.825rem 0;border-color:#f6f6f6;border-style:dashed}.v.hide-avatar .vimg{display:none}.v a{position:relative;cursor:pointer;color:#1abc9c;display:inline-block}.v a:before{content:"";position:absolute;width:0;right:0;bottom:0;height:1px;background:#1abc9c;-webkit-transition:width .3s ease;transition:width .3s ease}.v a:hover{color:#d7191a}.v a:hover:before{width:100%;left:0;right:auto}.v code,.v pre{background-color:#f6f6f6;color:#555;padding:.2em .4em;border-radius:3px;font-size:85%;margin:0;font-family:Source Code Pro,courier new,Input Mono,PT Mono,SFMono-Regular,Consolas,Monaco,Menlo,PingFang SC,Liberation Mono,Microsoft YaHei,Courier，monospace}.v pre{padding:10px;overflow:auto;line-height:1.45}.v pre code{padding:0;background:transparent;white-space:pre-wrap;word-break:keep-all}.v blockquote{color:#666;margin:.5rem 0;padding:0 0 0 1rem;border-left:8px solid hsla(0,0%,93%,.5)}.v .vinput{border:none;resize:none;outline:none;padding:10px 5px;max-width:100%;font-size:.775rem}.v input[type=checkbox],.v input[type=radio]{display:inline-block;vertical-align:middle;margin-top:-2px}.v .vwrap{border:1px solid #f0f0f0;border-radius:4px;margin-bottom:10px;overflow:hidden;position:relative;padding:10px}.v .vwrap input{background:transparent}.v .vwrap .vedit{position:relative;padding-top:10px}.v .vwrap .vedit .vctrl{text-align:right;font-size:12px}.v .vwrap .vedit .vctrl span{padding:10px;display:inline-block;vertical-align:middle;cursor:pointer}.v .vwrap .vedit .vemojis{display:none;font-size:18px;text-align:justify;max-height:145px;overflow:auto;margin-bottom:10px;-webkit-box-shadow:0 0 1px #f0f0f0;box-shadow:0 0 1px #f0f0f0}.v .vwrap .vedit .vemojis i{font-style:normal;padding:7px 0;width:38px;cursor:pointer;text-align:center;display:inline-block;vertical-align:middle}.v .vwrap .vedit .vpreview{padding:7px;-webkit-box-shadow:0 0 1px #f0f0f0;box-shadow:0 0 1px #f0f0f0}.v .vwrap .vedit .vpreview frame,.v .vwrap .vedit .vpreview iframe,.v .vwrap .vedit .vpreview img{max-width:100%;border:none}.v .vwrap .vheader .vinput{width:33.33%;border-bottom:1px dashed #dedede}.v .vwrap .vheader.item2 .vinput{width:50%}.v .vwrap .vheader.item1 .vinput{width:100%}.v .vwrap .vheader .vinput:focus{border-bottom-color:#eb5055}@media screen and (max-width:520px){.v .vwrap .vheader.item2 .vinput,.v .vwrap .vheader .vinput{width:100%}}.v .vwrap .vcontrol{font-size:0;padding-top:15px}.v .vwrap .vcontrol .col{display:inline-block;font-size:.725rem;vertical-align:middle;color:#ccc}.v .vwrap .vcontrol .col.text-right{text-align:right}.v .vwrap .vcontrol .col svg{margin-right:2px;overflow:hidden;fill:currentColor;vertical-align:middle}.v .vwrap .vcontrol .col.col-20{width:20%}.v .vwrap .vcontrol .col.col-40{width:40%}.v .vwrap .vcontrol .col.col-60{width:60%}.v .vwrap .vcontrol .col.col-80{width:80%}.v .vwrap .vcontrol .col.split{width:50%}.v .vwrap .vmark{position:absolute;background:rgba(0,0,0,.65);width:100%;height:100%;left:0;top:0}.v .vwrap .vmark .valert{padding-top:3rem}.v .vwrap .vmark .valert .vtext{color:#fff;padding:1rem 0}.v .vwrap .vmark .valert .vcode{width:4.6875rem;border-radius:.3125rem;padding:.5rem;background:#dedede}.v .vwrap .vmark .valert .vcode:focus{border-color:#3090e4;background-color:#fff}@media screen and (max-width:720px){.v .vwrap .vmark .valert{padding-top:5.5rem}.v .vwrap .vmark .valert .vtext{color:#fff;padding:1rem 0}}.v .power{color:#999;padding:.5rem 0}.v .power,.v .power a{font-size:.75rem}.v .vinfo{font-size:0;padding:5px}.v .vinfo .col{font-size:.875rem;display:inline-block;width:50%;vertical-align:middle}.v .vinfo .vcount .vnum{font-weight:600;font-size:1.25rem}.v a{text-decoration:none;color:#555}.v a:hover{color:#222}.v ol,.v ul{padding:0;margin-left:1.25rem}.v .txt-center{text-align:center}.v .txt-right{text-align:right}.v .pd5{padding:5px}.v .pd10{padding:10px}.v .veditor{width:100%;min-height:8.75rem;font-size:.875rem;background:transparent;resize:vertical;-webkit-transition:all .25s ease;transition:all .25s ease}.v .vbtn{-webkit-transition-duration:.4s;transition-duration:.4s;text-align:center;color:#313131;border:1px solid #ededed;border-radius:.3rem;display:inline-block;background:#ededed;margin-bottom:0;font-weight:400;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;white-space:nowrap;padding:.5rem 1.25rem;font-size:.875rem;line-height:1.42857143;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v .vbtn+.vbtn{margin-left:1.25rem}.v .vbtn:active,.v .vbtn:hover{color:#3090e4;border-color:#3090e4;background-color:#fff}.v .vempty{padding:1.25rem;text-align:center;color:#999}.v .vlist{width:100%}.v .vlist .vcard{padding-top:1.5rem;position:relative;display:block}.v .vlist .vcard:after{content:"";clear:both;display:block}.v .vlist .vcard .vimg{width:3.125rem;height:3.125rem;float:left;border-radius:50%;margin-right:.7525rem;border:1px solid #f5f5f5;padding:.125rem}@media screen and (max-width:720px){.v .vlist .vcard .vimg{width:2.5rem;height:2.5rem}}.v .vlist .vcard .vhead{line-height:1.5;margin-top:0}.v .vlist .vcard .vhead .vnick{position:relative;font-size:.875rem;font-weight:500;margin-right:.875rem;cursor:pointer;color:#1abc9c;text-decoration:none;display:inline-block}.v .vlist .vcard .vhead .vnick:before{content:"";position:absolute;width:0;right:0;bottom:0;height:1px;background:#1abc9c;-webkit-transition:width .3s ease;transition:width .3s ease}.v .vlist .vcard .vhead .vnick:hover{color:#d7191a}.v .vlist .vcard .vhead .vnick:hover:before{width:100%;left:0;right:auto}.v .vlist .vcard .vhead .vsys{display:inline-block;padding:.2rem .5rem;background:#ededed;color:#b3b1b1;font-size:.75rem;border-radius:.2rem;margin-right:.3rem}@media screen and (max-width:520px){.v .vlist .vcard .vhead .vsys{display:none}}.v .vlist .vcard .vh{overflow:hidden;padding-bottom:.5rem;border-bottom:1px dashed #f5f5f5}.v .vlist .vcard .vh .vtime{color:#b3b3b3;font-size:.75rem;margin-right:.875rem}.v .vlist .vcard .vh .vmeta{line-height:1;position:relative}.v .vlist .vcard .vh .vmeta .vat{font-size:.8125rem;color:#ef2f11;cursor:pointer;float:right}.v .vlist .vcard:last-child .vh{border-bottom:none}.v .vlist .vcard .vcontent{word-wrap:break-word;word-break:break-all;text-align:justify;color:#4a4a4a;font-size:.875rem;line-height:2;position:relative;margin-bottom:.75rem;padding-top:.625rem}.v .vlist .vcard .vcontent frame,.v .vlist .vcard .vcontent iframe,.v .vlist .vcard .vcontent img{max-width:100%;border:none}.v .vlist .vcard .vcontent.expand{cursor:pointer;max-height:11.25rem;overflow:hidden}.v .vlist .vcard .vcontent.expand:before{display:block;content:"";position:absolute;width:100%;left:0;top:0;bottom:3.15rem;pointer-events:none;background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(hsla(0,0%,100%,.9)));background:linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.9))}.v .vlist .vcard .vcontent.expand:after{display:block;content:"Click on expand";text-align:center;color:#828586;position:absolute;width:100%;height:3.15rem;line-height:3.15rem;left:0;bottom:0;pointer-events:none;background:hsla(0,0%,100%,.9)}.v .vlist .vcard .vquote{color:#666;margin-top:1rem;padding-left:1rem;border-left:1px dashed hsla(0,0%,93%,.5)}.v .vlist .vcard .vquote .vimg{width:2.225rem;height:2.225rem}.v .vpage .vmore{margin:1rem 0}.v .clear{content:"";display:block;clear:both}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes pulse{50%{background:#dcdcdc}}@keyframes pulse{50%{background:#dcdcdc}}.v .vloading{position:relative;padding:20px;display:block;height:80px}.v .vloading:before{-webkit-box-sizing:border-box;box-sizing:border-box;content:"";position:absolute;display:inline-block;top:20px;left:50%;margin-left:-20px;width:40px;height:40px;border:6px double #a0a0a0;border-top-color:transparent;border-bottom-color:transparent;border-radius:50%;-webkit-animation:spin 1s infinite linear;animation:spin 1s infinite linear}', ""])
    }
    , function(e, t) {
        function n(e, t) {
            var n = e[1] || ""
              , i = e[3];
            if (!i)
                return n;
            if (t && "function" == typeof btoa) {
                var o = r(i);
                return [n].concat(i.sources.map(function(e) {
                    return "/*# sourceURL=" + i.sourceRoot + e + " */"
                })).concat([o]).join("\n")
            }
            return [n].join("\n")
        }
        function r(e) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
        }
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var r = n(t, e);
                    return t[2] ? "@media " + t[2] + "{" + r + "}" : r
                }).join("")
            }
            ,
            t.i = function(e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var r = {}, i = 0; i < this.length; i++) {
                    var o = this[i][0];
                    "number" == typeof o && (r[o] = !0)
                }
                for (i = 0; i < e.length; i++) {
                    var a = e[i];
                    "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                    t.push(a))
                }
            }
            ,
            t
        }
    }
    , function(e, t, n) {
        function r(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n]
                  , i = h[r.id];
                if (i) {
                    i.refs++;
                    for (var o = 0; o < i.parts.length; o++)
                        i.parts[o](r.parts[o]);
                    for (; o < r.parts.length; o++)
                        i.parts.push(d(r.parts[o], t))
                } else {
                    for (var a = [], o = 0; o < r.parts.length; o++)
                        a.push(d(r.parts[o], t));
                    h[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }
        function i(e, t) {
            for (var n = [], r = {}, i = 0; i < e.length; i++) {
                var o = e[i]
                  , a = t.base ? o[0] + t.base : o[0]
                  , s = o[1]
                  , l = o[2]
                  , c = o[3]
                  , d = {
                    css: s,
                    media: l,
                    sourceMap: c
                };
                r[a] ? r[a].parts.push(d) : n.push(r[a] = {
                    id: a,
                    parts: [d]
                })
            }
            return n
        }
        function o(e, t) {
            var n = g(e.insertInto);
            if (!n)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = x[x.length - 1];
            if ("top" === e.insertAt)
                r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
                x.push(t);
            else {
                if ("bottom" !== e.insertAt)
                    throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }
        function a(e) {
            if (null === e.parentNode)
                return !1;
            e.parentNode.removeChild(e);
            var t = x.indexOf(e);
            t >= 0 && x.splice(t, 1)
        }
        function s(e) {
            var t = document.createElement("style");
            return e.attrs.type = "text/css",
            c(t, e.attrs),
            o(e, t),
            t
        }
        function l(e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css",
            e.attrs.rel = "stylesheet",
            c(t, e.attrs),
            o(e, t),
            t
        }
        function c(e, t) {
            Object.keys(t).forEach(function(n) {
                e.setAttribute(n, t[n])
            })
        }
        function d(e, t) {
            var n, r, i, o;
            if (t.transform && e.css) {
                if (!(o = t.transform(e.css)))
                    return function() {}
                    ;
                e.css = o
            }
            if (t.singleton) {
                var c = b++;
                n = m || (m = s(t)),
                r = u.bind(null, n, c, !1),
                i = u.bind(null, n, c, !0)
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t),
                r = f.bind(null, n, t),
                i = function() {
                    a(n),
                    n.href && URL.revokeObjectURL(n.href)
                }
                ) : (n = s(t),
                r = p.bind(null, n),
                i = function() {
                    a(n)
                }
                );
            return r(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                        return;
                    r(e = t)
                } else
                    i()
            }
        }
        function u(e, t, n, r) {
            var i = n ? "" : r.css;
            if (e.styleSheet)
                e.styleSheet.cssText = w(t, i);
            else {
                var o = document.createTextNode(i)
                  , a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
            }
        }
        function p(e, t) {
            var n = t.css
              , r = t.media;
            if (r && e.setAttribute("media", r),
            e.styleSheet)
                e.styleSheet.cssText = n;
            else {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
        function f(e, t, n) {
            var r = n.css
              , i = n.sourceMap
              , o = void 0 === t.convertToAbsoluteUrls && i;
            (t.convertToAbsoluteUrls || o) && (r = y(r)),
            i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var a = new Blob([r],{
                type: "text/css"
            })
              , s = e.href;
            e.href = URL.createObjectURL(a),
            s && URL.revokeObjectURL(s)
        }
        var h = {}
          , v = function(e) {
            var t;
            return function() {
                return void 0 === t && (t = e.apply(this, arguments)),
                t
            }
        }(function() {
            return window && document && document.all && !window.atob
        })
          , g = function(e) {
            var t = {};
            return function(n) {
                return void 0 === t[n] && (t[n] = e.call(this, n)),
                t[n]
            }
        }(function(e) {
            return document.querySelector(e)
        })
          , m = null
          , b = 0
          , x = []
          , y = n(16);
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                throw new Error("The style-loader cannot be used in a non-browser environment");
            t = t || {},
            t.attrs = "object" == typeof t.attrs ? t.attrs : {},
            t.singleton || (t.singleton = v()),
            t.insertInto || (t.insertInto = "head"),
            t.insertAt || (t.insertAt = "bottom");
            var n = i(e, t);
            return r(n, t),
            function(e) {
                for (var o = [], a = 0; a < n.length; a++) {
                    var s = n[a]
                      , l = h[s.id];
                    l.refs--,
                    o.push(l)
                }
                if (e) {
                    r(i(e, t), t)
                }
                for (var a = 0; a < o.length; a++) {
                    var l = o[a];
                    if (0 === l.refs) {
                        for (var c = 0; c < l.parts.length; c++)
                            l.parts[c]();
                        delete h[l.id]
                    }
                }
            }
        }
        ;
        var w = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n,
                e.filter(Boolean).join("\n")
            }
        }()
    }
    , function(e, t) {
        e.exports = function(e) {
            var t = "undefined" != typeof window && window.location;
            if (!t)
                throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e)
                return e;
            var n = t.protocol + "//" + t.host
              , r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                var i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                    return t
                }).replace(/^'(.*)'$/, function(e, t) {
                    return t
                });
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))
                    return e;
                var o;
                return o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""),
                "url(" + JSON.stringify(o) + ")"
            })
        }
    }
    , function(e, t, n) {
        n(12),
        e.exports = n(1)
    }
    ])
});
